import { type ReactNode } from "react";
import { isServerStyle } from "./utils/isServerComponent";
import { serverFunction } from "./utils/serverFunction";

export default async function ServerWithChildren({
  children,
}: {
  children: ReactNode;
}) {
  console.log(serverFunction());
  return (
    <div className="w-11/12 bg-red-950 p-2" style={isServerStyle}>
      <p>Server with children</p>
      {children}
    </div>
  );
}
