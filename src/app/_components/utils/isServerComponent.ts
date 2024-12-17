export const serverOutline = { outline: "1px solid red" };
export const clientOutline = { outline: "1px solid green" };
export const isServerStyle =
  typeof window === "undefined" ? serverOutline : clientOutline;
