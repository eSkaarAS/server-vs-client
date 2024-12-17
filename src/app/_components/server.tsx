import { isServerStyle } from "./utils/isServerComponent";
import { serverFunction } from "./utils/serverFunction";

export default async function Server() {
  console.log(serverFunction());

  return (
    <div className="h-20 w-11/12 bg-red-950" style={isServerStyle}>
      <p>Server Component</p>
    </div>
  );
}
