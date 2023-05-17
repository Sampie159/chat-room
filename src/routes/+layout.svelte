<script>
	import '$lib/globals.postcss';
</script>

<slot />

<style lang="postcss">
	:global(html) {
		@apply bg-slate-900 text-slate-300;
	}
</style>
