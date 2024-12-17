"use client";

import { isServerStyle } from "./utils/isServerComponent";

export default function Client() {
  return (
    <div className="h-20 w-11/12 bg-red-950" style={isServerStyle}>
      Client Component
    </div>
  );
}
