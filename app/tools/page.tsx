import { Suspense } from "react";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { toolCategories } from "./catalog";
import { ToolsDirectory } from "./tools-directory";

type ToolsPageProps = {
  searchParams: Promise<{
    category?: string;
    q?: string | string[];
  }>;
};

async function DirectoryFromUrl({
  searchParams,
}: {
  searchParams: ToolsPageProps["searchParams"];
}) {
  const params = await searchParams;
  const requestedCategory = params.category;
  const initialCategory =
    requestedCategory &&
    toolCategories.some((category) => category.name === requestedCategory)
      ? requestedCategory
      : "All tools";
  const initialQuery = Array.isArray(params.q) ? params.q[0] ?? "" : params.q ?? "";

  return (
    <ToolsDirectory
      initialCategory={initialCategory}
      initialQuery={initialQuery}
    />
  );
}

export default function ToolsPage({ searchParams }: ToolsPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="tools-page">
        <Suspense
          fallback={
            <ToolsDirectory initialCategory="All tools" initialQuery="" />
          }
        >
          <DirectoryFromUrl searchParams={searchParams} />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
