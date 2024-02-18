import { trpc } from "$lib/trpc";

export async function load({ parent, fetch }) {
	const { queryClient } = await parent();

	const trpcQuery = queryClient.prefetchQuery({
		queryKey: ["trpc"],
		async queryFn() {
			return await trpc(fetch).hello.query();
		},
	});

	const apiQuery = queryClient.prefetchQuery({
		queryKey: ["api"],
		async queryFn() {
			return await fetch("/api/hello").then((res) => res.json());
		},
	});

	await Promise.all([trpcQuery, apiQuery]);
}
