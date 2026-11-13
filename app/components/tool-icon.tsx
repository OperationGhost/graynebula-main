export type ToolIconName =
  | "search"
  | "pdf"
  | "image"
  | "text"
  | "code"
  | "merge"
  | "compress"
  | "split"
  | "convert"
  | "protect"
  | "resize"
  | "background"
  | "counter"
  | "diff"
  | "case"
  | "json"
  | "base64"
  | "url"
  | "uuid";

const iconContent: Record<ToolIconName, React.ReactNode> = {
  search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></>,
  pdf: <><path d="M7 3.8h7l4.5 4.5v11.9H7z" /><path d="M14 4v5h5M9.5 14.5h6M9.5 17h4" /><path d="M4.5 7.5v13h10" /></>,
  image: <><rect x="3.5" y="4" width="17" height="16" rx="2" /><circle cx="9" cy="9.5" r="1.5" /><path d="m20.5 15-5-5L6 19" /></>,
  text: <><path d="M4 6V4h16v2M12 4v16M8 20h8" /><path d="M8.5 11h7" /></>,
  code: <><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></>,
  merge: <><path d="M5 4v4a4 4 0 0 0 4 4h6a4 4 0 0 1 4 4v4M19 4v4a4 4 0 0 1-4 4M5 20v-1" /><path d="m16 17 3 3 3-3" /></>,
  compress: <><path d="M8 3H4v4M16 3h4v4M4 17v4h4M20 17v4h-4M8 8l4 4-4 4M16 8l-4 4 4 4" /></>,
  split: <><path d="M4 5h7v6H4zM13 13h7v6h-7zM11 8h3a3 3 0 0 1 3 3v2M13 16h-3a3 3 0 0 1-3-3v-2" /></>,
  convert: <><path d="M20 7h-5l2-2M4 17h5l-2 2" /><path d="M5 7a7 7 0 0 1 12-2M19 17a7 7 0 0 1-12 2" /><path d="M14 12h4M6 12h4" /></>,
  protect: <><path d="M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /><path d="m9 12 2 2 4-4" /></>,
  resize: <><path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5M4 4l6 6M20 4l-6 6M20 20l-6-6M4 20l6-6" /></>,
  background: <><rect x="3.5" y="3.5" width="17" height="17" rx="2" /><path d="M3.5 12h17M12 3.5v17M7.5 7.5h.01M16.5 7.5h.01M7.5 16.5h.01M16.5 16.5h.01" /></>,
  counter: <><path d="M4 6h16M4 10h10M4 14h16M4 18h10" /><path d="M18 9v3m0 0v3m0-3h2m-2 0h-2" /></>,
  diff: <><path d="M5 4h14v16H5zM8 8h3M8 12h8M8 16h5" /><path d="M15 7v3M14 8.5h3" /></>,
  case: <><path d="M4 18 9 6l5 12M6 14h6M14 18l3.5-8 3 8M15.5 15h4" /></>,
  json: <><path d="M8 4c-2 0-2 1-2 3v2c0 1.5-1 2-2 2 1 0 2 .5 2 2v2c0 2 0 3 2 3M16 4c2 0 2 1 2 3v2c0 1.5 1 2 2 2-1 0-2 .5-2 2v2c0 2 0 3-2 3M10 9l-2 3 2 3M14 9l2 3-2 3" /></>,
  base64: <><path d="M4 5h16v14H4zM8 10v4m0-2h3m-3 0H7M14 10h3M14 10v4m0-2h3m0-2v4" /></>,
  url: <><path d="M10 13.5a4 4 0 0 0 5.7 0l2.5-2.5a4 4 0 0 0-5.7-5.7L11 6.8" /><path d="M14 10.5a4 4 0 0 0-5.7 0l-2.5 2.5a4 4 0 0 0 5.7 5.7l1.5-1.5" /></>,
  uuid: <><path d="M8 4h8M8 20h8M10 4v16m4-16v16M4 8v8m16-8v8" /><circle cx="6" cy="6" r="1" /><circle cx="18" cy="18" r="1" /></>,
};

export function ToolIcon({ name }: { name: ToolIconName }) {
  const content = iconContent[name];

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.55"
      viewBox="0 0 24 24"
      width="24"
    >
      {content}
    </svg>
  );
}
