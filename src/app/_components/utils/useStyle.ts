"use client";

import { type CSSProperties, useEffect, useState } from "react";
import { isServerStyle } from "./isServerComponent";

export const useStyle = () => {
  const [style, setStyle] = useState<CSSProperties>({});

  useEffect(() => {
    setStyle(isServerStyle);
  }, []);

  return { style };
};
