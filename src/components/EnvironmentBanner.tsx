export default function EnvironmentBanner() {
  if (import.meta.env.VITE_APP_ENV !== 'preview') {
    return null;
  }

  return (
    <aside className="environment-banner">
      Preview environment: this is not the live Rostercraft site.
    </aside>
  );
}
