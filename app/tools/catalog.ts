export const toolCategories = [
  {
    name: "PDF",
    description: "Make working with documents feel a little easier.",
    tools: [
      {
        name: "Image to PDF",
        description: "Move between PDF and other everyday file formats.",
        icon: "convert",
        href: "https://graynebula-img-to-pdf.vercel.app/",
      },
    ],
  },
  {
    name: "Images",
    description: "Quick fixes for the pictures you use every day.",
    tools: [
      {
        name: "Image Background Remover",
        description: "Isolate the subject and clear away the backdrop.",
        icon: "background",
        href: "https://graynebula-img-bg-remover.vercel.app/",
      },
    ],
  },
] as const;

export type ToolCategoryName = (typeof toolCategories)[number]["name"];
