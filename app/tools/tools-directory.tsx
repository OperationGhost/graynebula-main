"use client";

import { useMemo, useState } from "react";
import { ToolIcon } from "../components/tool-icon";
import { toolCategories } from "./catalog";

type ToolsDirectoryProps = {
  initialCategory: string;
  initialQuery: string;
};

export function ToolsDirectory({
  initialCategory,
  initialQuery,
}: ToolsDirectoryProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [query, setQuery] = useState(initialQuery);

  const visibleCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return toolCategories
      .filter(
        (category) =>
          activeCategory === "All tools" || category.name === activeCategory,
      )
      .map((category) => ({
        ...category,
        tools: category.tools.filter((tool) =>
          `${tool.name} ${tool.description} ${category.name}`
            .toLowerCase()
            .includes(normalizedQuery),
        ),
      }))
      .filter((category) => category.tools.length > 0);
  }, [activeCategory, query]);

  const resultCount = visibleCategories.reduce(
    (total, category) => total + category.tools.length,
    0,
  );

  return (
    <div className="tools-layout page-shell">
      <aside aria-label="Tool categories" className="tools-sidebar">
        <p className="sidebar-label">YOUR TOOLKIT</p>
        <button
          aria-pressed={activeCategory === "All tools"}
          className={`sidebar-all ${activeCategory === "All tools" ? "is-active" : ""}`}
          onClick={() => setActiveCategory("All tools")}
          type="button"
        >
          <span className="sidebar-all-icon">
            <ToolIcon name="code" />
          </span>
          <span>All tools</span>
          <span className="sidebar-count">16</span>
        </button>
        <div className="sidebar-categories">
          <p className="sidebar-label">CATEGORIES</p>
          {toolCategories.map((category) => (
            <section className="sidebar-category" key={category.name}>
              <button
                aria-pressed={activeCategory === category.name}
                className={`sidebar-category-title ${activeCategory === category.name ? "is-active" : ""}`}
                onClick={() => setActiveCategory(category.name)}
                type="button"
              >
                <span>{category.name}</span>
                <span className="sidebar-count">
                  {String(category.tools.length).padStart(2, "0")}
                </span>
              </button>
              <ul>
                {category.tools.map((tool) => (
                  <li key={tool.name}>{tool.name}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="sidebar-note">
          <span className="sidebar-note-mark">G.</span>
          <p>Thoughtful tools for the little things in your day.</p>
        </div>
      </aside>

      <section aria-labelledby="tools-heading" className="tools-main">
        <div className="tools-breadcrumb">
          <span>LIBRARY</span>
          <span aria-hidden="true">/</span>
          <span>{activeCategory === "All tools" ? "ALL TOOLS" : activeCategory.toUpperCase()}</span>
        </div>
        <div className="tools-heading-row">
          <div>
            <p className="eyebrow">A useful little collection</p>
            <h1 id="tools-heading">
              {activeCategory === "All tools" ? "The tool library." : `${activeCategory} tools.`}
            </h1>
            <p className="tools-intro">
              Good tools for getting the small things off your list.
            </p>
          </div>
          <span className="tools-total">
            {String(resultCount).padStart(2, "0")}
            <span>TOOLS</span>
          </span>
        </div>

        <label className="tools-search">
          <ToolIcon name="search" />
          <span className="visually-hidden">Search tools</span>
          <input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by tool or task..."
            type="search"
            value={query}
          />
          {query && (
            <button
              aria-label="Clear search"
              className="search-clear"
              onClick={() => setQuery("")}
              type="button"
            >
              Clear
            </button>
          )}
        </label>

        <div aria-label="Filter by category" className="category-filters">
          {["All tools", ...toolCategories.map((category) => category.name)].map(
            (category) => (
              <button
                aria-pressed={activeCategory === category}
                className={activeCategory === category ? "is-active" : ""}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ),
          )}
        </div>

        <div aria-live="polite" className="tool-results">
          {visibleCategories.length > 0 ? (
            visibleCategories.map((category) => (
              <section className="tool-group" key={category.name}>
                <div className="tool-group-heading">
                  <div>
                    <p className="group-index">
                      {category.name === "PDF"
                        ? "01"
                        : category.name === "Images"
                          ? "02"
                          : category.name === "Text"
                            ? "03"
                            : "04"}{" "}
                      / CATEGORY
                    </p>
                    <h2>{category.name}</h2>
                  </div>
                  <p>{category.description}</p>
                </div>
                <div className="tool-grid">
                  {category.tools.map((tool) => (
                    <article className="tool-card" key={tool.name}>
                      <span className="tool-card-icon">
                        <ToolIcon name={tool.icon} />
                      </span>
                      <span className="tool-card-category">
                        {category.name}
                      </span>
                      <h3>{tool.name}</h3>
                      <p>{tool.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="empty-results">
              <span className="empty-results-icon">
                <ToolIcon name="search" />
              </span>
              <h2>No tools found.</h2>
              <p>Try a different search, or browse all of the categories.</p>
              <button
                className="button button-dark"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("All tools");
                }}
                type="button"
              >
                Show all tools <span aria-hidden="true">↗</span>
              </button>
            </div>
          )}
        </div>
        <p className="tools-footnote">
          MADE TO BE USEFUL. BUILT FOR EVERYDAY.
        </p>
      </section>
    </div>
  );
}
