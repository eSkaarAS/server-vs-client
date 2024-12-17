import { api } from "@/trpc/server";

export const dynamic = "force-dynamic";

export default async function Home() {
  void api.post.getLatest.prefetch();
  void api.post.getAll.prefetch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 bg-gray-700 pb-96 text-white">
      {/* <Server /> */}
      {/* <Client /> */}
      {/* <ClientSuppress /> */}
      {/* <NoHydrationClient /> */}
      {/* <ClientUseEffect /> */}
      {/* <ClientUseStyle /> */}
      {/* <ServerWithClient /> */}
      {/* <ClientWithServer /> */}
      {/* <ClientWithoutClient /> */}
      {/* <ClientWithChildren>
        <ClientUseStyle />
      </ClientWithChildren> */}
      {/* <ServerWithChildren>
        <ClientUseStyle />
      </ServerWithChildren> */}
      {/* <ClientWithChildren>
        <ServerWithChildren>
          <ClientUseStyle />
        </ServerWithChildren>
      </ClientWithChildren> */}
      {/* <ServerWithChildren>
        <ClientWithChildren>
          <Server />
        </ClientWithChildren>
      </ServerWithChildren> */}
      {/* <ServerPostsDb /> */}
      {/* <ServerPostsTRPC /> */}
      {/* <ClientCreatePost /> */}
      {/* <HydrateClient>
        <ClientPostsPrefetch />
      </HydrateClient> */}
      {/* <ClientCreatePostInvalidate /> */}
    </main>
  );
}
