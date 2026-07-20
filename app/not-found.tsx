import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="not-found section">
      <div className="container not-found__inner">
        <div className="not-found__code">404</div>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__desc">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/" className="btn btn--primary">Go Home</Link>
          <Link href="/stories" className="btn btn--outline">Read Stories</Link>
        </div>
      </div>
    </section>
  );
}
