import { isServerStyle } from "./utils/isServerComponent";
import { getAllProtected } from "./utils/serverFunction";

export default async function ServerSecure() {
  const data = await getAllProtected();

  return (
    <div className="min-h-10 w-11/12 bg-red-950" style={isServerStyle}>
      <p>Server Component</p>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
