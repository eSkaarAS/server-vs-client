import { useState } from "react";
import { useStyle } from "./utils/useStyle";

export default function WithOutClient() {
  const [count, setCount] = useState(0);
  const { style } = useStyle();

  return (
    <button style={style} onClick={() => setCount((c) => c + 1)}>
      Count: {count}
    </button>
  );
}
