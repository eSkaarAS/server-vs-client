"use client";

import { useStyle } from "./utils/useStyle";

export default function ClientUseStyle() {
  const { style } = useStyle();

  return (
    <div className="h-20 w-11/12 bg-red-950" style={style}>
      Client Component useStyle
    </div>
  );
}
