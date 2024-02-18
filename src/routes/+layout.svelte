<script lang="ts">
	import { QueryClientProvider } from "@tanstack/svelte-query";

	export let data;
</script>

<QueryClientProvider client={data.queryClient}>
	<slot />
</QueryClientProvider>
