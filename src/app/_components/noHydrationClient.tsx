"use client";

import dynamic from "next/dynamic";
import Client from "./client";

export const NoHydrationClient = dynamic(() => Promise.resolve(Client), {
  ssr: false,
});
