import { readFile } from "node:fs/promises";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const hero = Uint8Array.from(await readFile(new URL("../assets/visuales/hero-historia-profunda.png", import.meta.url))).buffer;
  return new ImageResponse(
    (
      <img
        alt=""
        src={hero as unknown as string}
        width={64}
        height={64}
        style={{
          objectFit: "cover",
          objectPosition: "left center",
        }}
      />
    ),
    size,
  );
}
