"use client";

import { type CSSProperties, useEffect, useState } from "react";
import { isServerStyle } from "./utils/isServerComponent";

export default function ClientUseEffect() {
  const [style, setStyle] = useState<CSSProperties>({});

  useEffect(() => {
    setStyle(isServerStyle);
  }, []);

  return (
    <div className="h-20 w-11/12 bg-red-950" style={style}>
      Client Component UseEffect
    </div>
  );
}
