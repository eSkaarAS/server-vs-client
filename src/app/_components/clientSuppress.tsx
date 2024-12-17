"use client";

import { isServerStyle } from "./utils/isServerComponent";

export default function ClientSuppress() {
  return (
    <div
      className="h-20 w-11/12 bg-red-950"
      style={isServerStyle}
      suppressHydrationWarning
    >
      Client Component
    </div>
  );
}
