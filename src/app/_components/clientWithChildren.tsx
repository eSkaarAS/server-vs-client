"use client";

import { useStyle } from "./utils/useStyle";

export default function ClientWithChildren({
  children,
}: {
  children: React.ReactNode;
}) {
  const { style } = useStyle();

  return (
    <div className="w-11/12 bg-red-950 p-2" style={style}>
      <p>Client with children</p>
      {children}
    </div>
  );
}
