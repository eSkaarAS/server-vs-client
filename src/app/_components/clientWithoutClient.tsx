"use client";

import { useStyle } from "./utils/useStyle";
import WithOutClient from "./withoutClient";

export default function ClientWithoutClient() {
  const { style } = useStyle();

  return (
    <div className="w-11/12 bg-red-950 p-2" style={style}>
      <WithOutClient />
    </div>
  );
}
