import { api } from "@/trpc/server";
import { isServerStyle } from "./utils/isServerComponent";

export default async function ServerPostsTRPC() {
  const data = await api.post.getAll();
  console.log("ServerComponentPostsDb", data);

  return (
    <div className="w-11/12 bg-red-950" style={isServerStyle}>
      <p>Server Component</p>
      {data.map((post) => (
        <div key={post.id} className="bg-red-900 p-2">
          <h2>{post.name}</h2>
        </div>
      ))}
    </div>
  );
}
