[CmdletBinding()]
param(
    [string]$RepositoryRoot
)

$ErrorActionPreference = 'Stop'
if ([string]::IsNullOrWhiteSpace($RepositoryRoot)) {
    $RepositoryRoot = Split-Path -Parent (Split-Path -Parent $PSCommandPath)
}
$RepositoryRoot = [System.IO.Path]::GetFullPath($RepositoryRoot)
$failures = [System.Collections.Generic.List[string]]::new()
$warnings = [System.Collections.Generic.List[string]]::new()

function Add-Failure {
    param([string]$Message)
    $failures.Add($Message)
}

function Get-RelativeDisplayPath {
    param([string]$Path)
    $fullPath = [System.IO.Path]::GetFullPath($Path)
    if ($fullPath.StartsWith($RepositoryRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
        return $fullPath.Substring($RepositoryRoot.Length).TrimStart([char[]]@('\', '/')).Replace('\', '/')
    }
    return $fullPath.Replace('\', '/')
}

# Solo contenido de investigación: se excluye todo lo generado o instalado
# por el sitio Next.js, que también contiene archivos .md.
$excludedDirs = '\.git', 'node_modules', '\.next', 'public', 'out'
$excludePattern = '[\\/](' + ($excludedDirs -join '|') + ')[\\/]'

$markdownFiles = Get-ChildItem -LiteralPath $RepositoryRoot -Recurse -File -Filter '*.md' |
    Where-Object { $_.FullName -notmatch $excludePattern }

foreach ($file in $markdownFiles) {
    $text = [System.IO.File]::ReadAllText($file.FullName)
    $matches = [regex]::Matches($text, '!?(?<!\!)\[[^\]]*\]\((?<target>[^)]+)\)|!\[[^\]]*\]\((?<image>[^)]+)\)')

    foreach ($match in $matches) {
        $rawTarget = if ($match.Groups['target'].Success) { $match.Groups['target'].Value } else { $match.Groups['image'].Value }
        $target = $rawTarget.Trim().Trim('<', '>')

        if ($target -match '^(https?://|mailto:|#)' -or [string]::IsNullOrWhiteSpace($target)) {
            continue
        }

        $pathPart = [System.Uri]::UnescapeDataString(($target -split '#', 2)[0])
        if ([string]::IsNullOrWhiteSpace($pathPart)) {
            continue
        }

        $resolved = [System.IO.Path]::GetFullPath((Join-Path $file.DirectoryName $pathPart))
        if (-not (Test-Path -LiteralPath $resolved)) {
            Add-Failure "Enlace roto en $(Get-RelativeDisplayPath $file.FullName): $target"
        }
    }
}

$registryPatterns = [ordered]@{
    CLAIM = '^\| `(?<id>CLAIM-[A-Z0-9-]+)` \|'
    EVID  = '^\| `(?<id>EVID-[A-Z0-9-]+)` \|'
    SRC   = '^\| `(?<id>SRC-[A-Z0-9-]+)` \|'
    CONT  = '^\| `(?<id>CONT-[A-Z0-9-]+)` \|'
    ERR   = '^\| `(?<id>ERR-[A-Z0-9-]+)` \|'
    TIME  = '^\| `(?<id>TIME-[A-Z0-9-]+)` \|'
    OPEN  = '^\| `(?<id>OPEN-[A-Z0-9-]+)` \|'
}

$definitionFiles = @{
    CLAIM = 'CLAIMS.md'
    EVID  = 'EVIDENCE_LEDGER.md'
    SRC   = 'SOURCES.md'
    CONT  = 'CONTROVERSIES.md'
    ERR   = 'SCIENTIFIC_ERRORS.md'
    TIME  = 'TIMELINE.md'
    OPEN  = '17_preguntas_abiertas/PREGUNTAS_MAESTRAS.md'
}

$definitions = @{}
foreach ($prefix in $registryPatterns.Keys) {
    $definitions[$prefix] = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::Ordinal)
    $path = Join-Path $RepositoryRoot $definitionFiles[$prefix]
    foreach ($line in [System.IO.File]::ReadLines($path)) {
        if ($line -match $registryPatterns[$prefix]) {
            if (-not $definitions[$prefix].Add($Matches.id)) {
                Add-Failure "ID duplicado en $($definitionFiles[$prefix]): $($Matches.id)"
            }
        }
    }
}

$referenceRegex = [regex]'(?<![A-Z0-9-])(?<id>(?<prefix>CLAIM|EVID|SRC|CONT|ERR|TIME|OPEN)-[A-Z0-9]+(?:-[A-Z0-9]+)+)(?![A-Z0-9-])'
foreach ($file in $markdownFiles) {
    $text = [System.IO.File]::ReadAllText($file.FullName)
    foreach ($match in $referenceRegex.Matches($text)) {
        $prefix = $match.Groups['prefix'].Value
        $id = $match.Groups['id'].Value
        if (-not $definitions[$prefix].Contains($id)) {
            Add-Failure "ID sin definición en $(Get-RelativeDisplayPath $file.FullName): $id"
        }
    }
}

$roadmapPath = Join-Path $RepositoryRoot 'ROADMAP.md'
$orders = [System.Collections.Generic.List[int]]::new()
foreach ($line in [System.IO.File]::ReadLines($roadmapPath)) {
    if ($line -match '^\| (?<order>\d{3}) \| `INV-') {
        $orders.Add([int]$Matches.order)
    }
}

if ($orders.Count -gt 0) {
    $expected = 1..($orders | Measure-Object -Maximum).Maximum
    $missing = $expected | Where-Object { $_ -notin $orders }
    $duplicates = $orders | Group-Object | Where-Object Count -gt 1 | ForEach-Object Name
    if ($missing) { Add-Failure "Órdenes faltantes en ROADMAP.md: $($missing -join ', ')" }
    if ($duplicates) { Add-Failure "Órdenes duplicados en ROADMAP.md: $($duplicates -join ', ')" }
}

$requiredSections = @(
    '^## LO OBSERVADO$',
    '^## LO MEDIDO$',
    '^## LO INFERIDO$',
    '^## LOS SUPUESTOS$',
    '^## LAS INCERTIDUMBRES$',
    '^## LAS ALTERNATIVAS$',
    '^## LAS CONTROVERSIAS$',
    '^## QU. PODR.A FALSARLO$',
    '^## NIVEL DE CONFIANZA$',
    '^## QU. SABEMOS REALMENTE$',
    '^## QU. TODAV.A NO SABEMOS$'
)

$investigations = Get-ChildItem -LiteralPath $RepositoryRoot -Recurse -File -Filter 'INVESTIGACION_*.md'
foreach ($file in $investigations) {
    $text = [System.IO.File]::ReadAllText($file.FullName)
    foreach ($section in $requiredSections) {
        if (-not [regex]::IsMatch($text, $section, [System.Text.RegularExpressions.RegexOptions]::Multiline)) {
            Add-Failure "Sección requerida ausente en $(Get-RelativeDisplayPath $file.FullName): $section"
        }
    }
}

$svgFiles = Get-ChildItem -LiteralPath (Join-Path $RepositoryRoot 'assets/visuales') -File -Filter '*.svg'
foreach ($file in $svgFiles) {
    try {
        [xml]$svg = [System.IO.File]::ReadAllText($file.FullName)
        if (-not $svg.svg.title -or -not $svg.svg.desc) {
            $warnings.Add("SVG sin title/desc accesible: $(Get-RelativeDisplayPath $file.FullName)")
        }
    }
    catch {
        Add-Failure "SVG inválido en $(Get-RelativeDisplayPath $file.FullName): $($_.Exception.Message)"
    }
}

Write-Host "Markdown: $($markdownFiles.Count) archivos"
Write-Host "Investigaciones: $($investigations.Count)"
Write-Host "SVG: $($svgFiles.Count)"
foreach ($prefix in $registryPatterns.Keys) {
    Write-Host "${prefix}: $($definitions[$prefix].Count) IDs"
}

if ($warnings.Count -gt 0) {
    Write-Warning ($warnings -join [Environment]::NewLine)
}

if ($failures.Count -gt 0) {
    Write-Error ("Validación fallida:`n- " + ($failures -join "`n- "))
    exit 1
}

Write-Host 'VALIDACIÓN COMPLETA: sin enlaces rotos, IDs huérfanos, órdenes faltantes ni SVG inválidos.' -ForegroundColor Green
