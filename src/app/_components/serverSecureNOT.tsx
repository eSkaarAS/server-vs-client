import { isServerStyle } from "./utils/isServerComponent";
import { getAll } from "./utils/serverFunction";

export default async function ServerSecureNot() {
  const data = await getAll();

  return (
    <div className="h-20 w-11/12 bg-red-950" style={isServerStyle}>
      <p>Server Component</p>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
