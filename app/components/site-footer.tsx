import Link from "next/link";
import { BrandMark } from "./site-header";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner page-shell">
        <Link aria-label="Graynebula home" className="brand footer-brand" href="/">
          <BrandMark />
          <span>graynebula</span>
        </Link>
        <p>Good tools for getting the little things done.</p>
        <div className="footer-right">
          <Link href="/tools">Explore the library</Link>
          <span>© GRAYNEBULA</span>
        </div>
      </div>
    </footer>
  );
}
