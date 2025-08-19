export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading font-semibold text-primary">Nederlandse Geschiedenis</h1>
      <p className="max-w-prose">Verken periodes, gebeurtenissen, mensen en thema's met meertalige context en transparante bronnen.</p>
      <ul className="list-disc pl-6 space-y-1">
        <li><a className="text-primary underline" href="/periods">Periodes</a></li>
        <li><a className="text-primary underline" href="/events">Gebeurtenissen</a></li>
        <li><a className="text-primary underline" href="/people">Mensen</a></li>
        <li><a className="text-primary underline" href="/themes">Thema's</a></li>
        <li><a className="text-primary underline" href="/glossary">Glossarium</a></li>
      </ul>
    </div>
  );
}
