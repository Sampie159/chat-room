<script>
	import '$lib/globals.postcss';
</script>

<slot />

<style lang="postcss">
	:global(html) {
		@apply bg-slate-900 text-slate-300;
	}

	:global(.outerDiv) {
		@apply flex h-screen;
	}

	:global(.innerDiv) {
		@apply flex flex-col items-center m-auto;
	}

	:global(.error) {
		color: tomato;
		font-weight: bold;
	}

	:global(.input) {
		@apply h-8 w-96 rounded-xl text-center text-slate-900 bg-slate-300 outline-none font-bold;
	}

	:global(label) {
		@apply font-bold;
	}

	:global(h1) {
		@apply font-bold text-3xl text-center;
	}

	:global(.button) {
		@apply mx-auto bg-slate-300 font-bold flex items-center text-center w-16 h-7 rounded-md text-slate-900 hover:cursor-pointer mt-3;
	}

	:global(button) {
		@apply font-bold;
	}

	:global(.signswitch) {
		@apply flex flex-col items-center mt-1;
	}
</style>
