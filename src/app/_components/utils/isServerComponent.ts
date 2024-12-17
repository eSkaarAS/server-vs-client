export const serverOutline = { outline: "3px solid blue" };
export const clientOutline = { outline: "3px solid green" };
export const isServerStyle =
  typeof window === "undefined" ? serverOutline : clientOutline;
