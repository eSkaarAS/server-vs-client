"use client";
import { api } from "@/trpc/react";
import { isServerStyle } from "./utils/isServerComponent";
import { deleteUser } from "./utils/serverFunction";

export default function clientSecureNotDelete() {
  const { data } = api.post.getAllProtected.useQuery();

  return (
    <div className="h-20 w-11/12 bg-red-950" style={isServerStyle}>
      <p>Client Component</p>
      {data?.map((item) => (
        <button key={item.id} onClick={() => deleteUser(1)}>
          {item.name}
        </button>
      ))}
    </div>
  );
}
