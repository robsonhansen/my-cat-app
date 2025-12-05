export default async function BreedPage({
  params,
}: {
  params: Promise<{ breed: string }>;
}) {
  const { breed } = await params;
  return <div>Ola Gatinho {decodeURIComponent(breed)}</div>;
}
