"use client";

import { useState } from "react";
import CallbackWithClient from "./callbackWithClient";
import { useStyle } from "./utils/useStyle";

export default function ClientWithCallbackWithClient() {
  const [count, setCount] = useState(0);
  const { style } = useStyle();

  return (
    <div className="w-11/12 bg-red-950 p-2" style={style}>
      <CallbackWithClient count={count} setCount={setCount} />
    </div>
  );
}
