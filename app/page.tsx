import Link from "next/link";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { ToolIcon } from "./components/tool-icon";
import { toolCategories } from "./tools/catalog";

const categories = [
  { name: "PDF tools", count: "01", icon: "pdf", href: "/tools?category=PDF" },
  { name: "Image tools", count: "01", icon: "image", href: "/tools?category=Images" },
] as const;

const quickTools = [
  {
    name: "Convert PDF",
    category: "PDF",
    icon: "convert",
    href: "https://graynebula-img-to-pdf.vercel.app/",
  },
  {
    name: "Remove background",
    category: "IMAGES",
    icon: "background",
    href: "https://graynebula-img-bg-remover.vercel.app/",
  },
] as const;

const toolCount = toolCategories.reduce(
  (total, category) => total + category.tools.length,
  0,
);

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-inner page-shell">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                A little more useful, every day
              </p>
              <h1>
                Good tools.
                <br />
                <span>No fuss.</span>
              </h1>
              <p className="hero-description">
                The handy online tools you need, all in one considered place.
                Get in, get it done, get on with your day.
              </p>
              <div className="hero-actions">
                <Link className="button button-dark" href="/tools">
                  Explore all tools <span aria-hidden="true">↗</span>
                </Link>
                <span className="hero-note">Free to use. No account needed.</span>
              </div>
              <form className="hero-search" action="/tools">
                <ToolIcon name="search" />
                <label className="visually-hidden" htmlFor="home-search">
                  Search the tool library
                </label>
                <input
                  id="home-search"
                  name="q"
                  placeholder="What are you looking to do?"
                  type="search"
                />
                <button aria-label="Search tools" type="submit">
                  <span aria-hidden="true">↗</span>
                </button>
              </form>
            </div>

            <div
              aria-label="A preview of Graynebula tools"
              className="hero-art"
              role="img"
            >
              <div className="art-topline">
                <span>THE EVERYDAY TOOLKIT</span>
                <span>NO. 001 — {String(toolCount).padStart(3, "0")}</span>
              </div>
              <div className="art-display">
                <div className="art-copy">
                  <span className="art-kicker">SMALL TASK. SORTED.</span>
                  <p>
                    Make room
                    <br />
                    for the work
                    <br />
                    that matters.
                  </p>
                </div>
                <div className="art-stamp" aria-hidden="true">
                  <span>G</span>
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="art-bottom">
                <span>USEFUL BY DESIGN.</span>
                <span>EST. FOR EVERYONE</span>
              </div>
            </div>
          </div>
          <div className="hero-index page-shell" aria-hidden="true">
            <span>01 — YOUR DAILY SHORTCUT</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="category-section page-shell" id="categories">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A place for the little things</p>
              <h2>One home. Many good tools.</h2>
            </div>
            <Link className="text-link" href="/tools">
              Browse the library <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <Link
                className="category-card"
                href={category.href}
                key={category.name}
              >
                <div className="category-card-top">
                  <span className="category-icon">
                    <ToolIcon name={category.icon} />
                  </span>
                  <span className="category-count">{category.count} TOOLS</span>
                </div>
                <div className="category-card-bottom">
                  <h3>{category.name}</h3>
                  <span aria-hidden="true" className="arrow-circle">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="popular-section">
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">The most reached for</p>
                <h2>Good place to start.</h2>
              </div>
              <span className="subtle-copy">A few everyday favorites</span>
            </div>
            <div className="quick-tools">
              {quickTools.map((tool, index) => (
                <a className="quick-tool" href={tool.href} key={tool.name}>
                  <span className="quick-tool-number">
                    0{index + 1}
                  </span>
                  <span className="quick-tool-icon">
                    <ToolIcon name={tool.icon} />
                  </span>
                  <div className="quick-tool-copy">
                    <span>{tool.category}</span>
                    <h3>{tool.name}</h3>
                  </div>
                </a>
              ))}
            </div>
            <div className="popular-cta">
              <p>Something else in mind?</p>
              <Link className="text-link" href="/tools">
                See all {toolCount} tools <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="closing-section page-shell">
          <p className="eyebrow">A calmer corner of the internet</p>
          <h2>
            Less busywork.
            <br />
            <span>More getting on with it.</span>
          </h2>
          <Link className="button button-dark" href="/tools">
            Find your tool <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
