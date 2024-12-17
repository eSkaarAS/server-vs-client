"use client";

import Server from "./server";
import { useStyle } from "./utils/useStyle";

export default function ClientWithServer() {
  const { style } = useStyle();

  return (
    <div className="w-11/12 bg-red-950 p-2" style={style}>
      <p>Client with server </p>
      <Server />
    </div>
  );
}
