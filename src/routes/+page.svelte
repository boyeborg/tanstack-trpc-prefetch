<script lang="ts">
	import { trpc } from "$lib/trpc";
	import { createQuery } from "@tanstack/svelte-query";

	const trpcQuery = createQuery({
		queryKey: ["trpc"],
		async queryFn() {
			return await trpc().hello.query();
		},
	});

	const apiQuery = createQuery({
		queryKey: ["api"],
		async queryFn() {
			return await fetch("/api/hello").then((res) => res.json());
		},
	});
</script>

<h1>Prefetching with SvelteKit</h1>

<h2>TRPC</h2>
<p>Status: {$trpcQuery.status}</p>
<p>Fetching: {$trpcQuery.isFetching}</p>
<p>Data: {$trpcQuery.data}</p>

<h2>API</h2>
<p>Status: {$apiQuery.status}</p>
<p>Fetching: {$apiQuery.isFetching}</p>
<p>Data: {$apiQuery.data}</p>

