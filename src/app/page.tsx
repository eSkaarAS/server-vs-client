import { api, HydrateClient } from "@/trpc/server";
import Client from "./_components/client";
import ClientCreatePost from "./_components/clientCreatePost";
import { ClientCreatePostInvalidate } from "./_components/clientCreatePostInvalidate";
import ClientPostsPrefetch from "./_components/clientPostsPrefetch";
import ClientSecureNotDelete from "./_components/clientSecureNotDelete";
import ClientSuppress from "./_components/clientSuppress";
import ClientUseEffect from "./_components/clientUseEffect";
import ClientUseStyle from "./_components/clientUseStyle";
import ClientWithChildren from "./_components/clientWithChildren";
import ClientWithoutClient from "./_components/clientWithoutClient";
import { NoHydrationClient } from "./_components/noHydrationClient";
import Server from "./_components/server";
import ServerPostsDb from "./_components/serverPostsDb";
import ServerPostsTRPC from "./_components/serverPostsTrpc";
import ServerSecure from "./_components/serverSecure";
import ServerSecureNot from "./_components/serverSecureNOT";
import ServerWithChildren from "./_components/serverWithChildren";
import ServerWithClient from "./_components/serverWithClient";

export const dynamic = "force-dynamic";

export default async function Home() {
  void api.post.getLatest.prefetch();
  void api.post.getAll.prefetch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 bg-gray-700 pb-96 text-white">
      <Server />
      <Client />
      <ClientSuppress />
      <NoHydrationClient />
      <ClientUseEffect />
      <ClientUseStyle />
      <ServerWithClient />
      {/* <ClientWithServer /> */}
      <ClientWithoutClient />
      <ClientWithChildren>
        <ClientUseStyle />
      </ClientWithChildren>
      <ServerWithChildren>
        <ClientUseStyle />
      </ServerWithChildren>
      <ClientWithChildren>
        <ServerWithChildren>
          <ClientUseStyle />
        </ServerWithChildren>
      </ClientWithChildren>
      <ServerWithChildren>
        <ClientWithChildren>
          <Server />
        </ClientWithChildren>
      </ServerWithChildren>
      <ServerPostsDb />
      <ServerPostsTRPC />
      <ClientCreatePost />
      {/* Her må du bruke en prefetch øverst i denne filen for at hydration skal funke ordentlig */}
      <HydrateClient>
        <ClientPostsPrefetch />
      </HydrateClient>
      <ClientCreatePostInvalidate />
      <ServerSecure />
      <ServerSecureNot />

      {/* REMEMBER TO TOGGLE PROTECTEDPROCEDURE AUTH */}
      <ClientSecureNotDelete />
    </main>
  );
}
