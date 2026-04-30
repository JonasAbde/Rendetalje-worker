export default function Canonical({ path }: { path: string }) {
  return (
    <link rel="canonical" href={`https://rendetalje.dk${path}`} />
  );
}
