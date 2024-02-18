import { browser, dev } from "$app/environment";
import { createTRPCClient, httpLink, loggerLink } from "@trpc/client";
import type { AppRouter } from "./router.server";

let browserClient: ReturnType<typeof createTRPCClient<AppRouter>>;

export function trpc(fetcher = fetch) {
	if (browser) {
		browserClient ??= createTRPCClient<AppRouter>({
			links: [loggerLink({ enabled: () => dev }), httpLink({ url: "/trpc" })],
		});
		return browserClient;
	}

	return createTRPCClient<AppRouter>({
		links: [httpLink({ url: "/trpc", fetch: fetcher })],
	});
}
