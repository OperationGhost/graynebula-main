export const toolCategories = [
  {
    name: "PDF",
    description: "Make working with documents feel a little easier.",
    tools: [
      {
        name: "Merge PDF",
        description: "Bring multiple PDFs together into one tidy file.",
        icon: "merge",
      },
      {
        name: "Split PDF",
        description: "Pull out the pages you need, leave the rest behind.",
        icon: "split",
      },
      {
        name: "Compress PDF",
        description: "Make a smaller file that is easier to share.",
        icon: "compress",
      },
      {
        name: "Convert PDF",
        description: "Move between PDF and other everyday file formats.",
        icon: "convert",
      },
      {
        name: "Protect PDF",
        description: "Add a password to keep a document private.",
        icon: "protect",
      },
    ],
  },
  {
    name: "Images",
    description: "Quick fixes for the pictures you use every day.",
    tools: [
      {
        name: "Compress image",
        description: "Reduce image file size without the extra fuss.",
        icon: "compress",
      },
      {
        name: "Resize image",
        description: "Get your image to just the right dimensions.",
        icon: "resize",
      },
      {
        name: "Convert image",
        description: "Switch between familiar image file formats.",
        icon: "convert",
      },
      {
        name: "Remove background",
        description: "Isolate the subject and clear away the backdrop.",
        icon: "background",
      },
    ],
  },
  {
    name: "Text",
    description: "A few thoughtful helpers for words and writing.",
    tools: [
      {
        name: "Word counter",
        description: "Count words, characters, and reading time.",
        icon: "counter",
      },
      {
        name: "Text diff checker",
        description: "Compare two pieces of text and spot what changed.",
        icon: "diff",
      },
      {
        name: "Case converter",
        description: "Change text to the case that fits your needs.",
        icon: "case",
      },
    ],
  },
  {
    name: "Developer",
    description: "Small, sensible utilities for the code in your day.",
    tools: [
      {
        name: "JSON formatter",
        description: "Format and read JSON without losing your place.",
        icon: "json",
      },
      {
        name: "Base64 encoder",
        description: "Encode or decode a Base64 string in a moment.",
        icon: "base64",
      },
      {
        name: "URL encoder",
        description: "Make text safe to use in a URL.",
        icon: "url",
      },
      {
        name: "UUID generator",
        description: "Generate a universally unique identifier.",
        icon: "uuid",
      },
    ],
  },
] as const;

export type ToolCategoryName = (typeof toolCategories)[number]["name"];
