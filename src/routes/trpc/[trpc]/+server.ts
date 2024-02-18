import { base } from "$app/paths";
import { appRouter } from "$lib/router.server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

export function GET(event) {
	return fetchRequestHandler({
		endpoint: `${base}/trpc`,
		req: event.request,
		router: appRouter,
		createContext: () => ({}),
	});
}

export function POST(event) {
	return fetchRequestHandler({
		endpoint: `${base}/trpc`,
		req: event.request,
		router: appRouter,
		createContext: () => ({}),
	});
}
