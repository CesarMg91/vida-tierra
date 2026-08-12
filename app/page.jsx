import { getDoc } from "../lib/content.mjs";

export default async function Home() {
  const doc = await getDoc("README");
  if (!doc) return <article className="doc"><h1>Falta README.md</h1></article>;
  return (
    <article className="doc">
      <div dangerouslySetInnerHTML={{ __html: doc.html }} />
    </article>
  );
}
