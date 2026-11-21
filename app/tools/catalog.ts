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
  {
    name: "Diagrams",
    description: "Turn ideas into clear, connected diagrams.",
    tools: [
      {
        name: "Diagram Builder",
        description: "Create and organize diagrams and flowcharts in an intuitive visual editor.",
        icon: "diagram",
        href: "https://graynebula-diagram.vercel.app/",
      },
    ],
  },
] as const;

export type ToolCategoryName = (typeof toolCategories)[number]["name"];
