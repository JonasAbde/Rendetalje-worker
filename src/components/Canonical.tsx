import { Helmet } from "react-helmet-async";

export default function Canonical({ path }: { path: string }) {
  return (
    <Helmet>
      <link rel="canonical" href={`https://rendetalje.dk${path}`} />
    </Helmet>
  );
}
