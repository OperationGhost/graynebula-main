import Link from "next/link";

export function BrandMark() {
  return (
    <span aria-hidden="true" className="brand-mark">
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <Link aria-label="Graynebula home" className="brand" href="/">
          <BrandMark />
          <span>graynebula</span>
        </Link>
        <nav aria-label="Main navigation" className="main-nav">
          <Link href="/tools">All tools</Link>
          <Link href="/#categories">Categories</Link>
        </nav>
        <Link className="header-cta" href="/tools">
          Find a tool <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
