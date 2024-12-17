import ClientUseStyle from "./clientUseStyle";
import { isServerStyle } from "./utils/isServerComponent";
import { serverFunction } from "./utils/serverFunction";

export default async function ServerWithClient() {
  console.log(serverFunction());
  return (
    <div className="w-11/12 bg-red-950 p-2" style={isServerStyle}>
      <p>Server with client</p>
      <ClientUseStyle />
    </div>
  );
}
