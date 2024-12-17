"use client";

import { useStyle } from "./utils/useStyle";

export default function WithOutClient({
  count,
  setCount,
}: {
  count: number;
  setCount: (c: number) => void;
}) {
  const { style } = useStyle();

  return (
    <button style={style} onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
