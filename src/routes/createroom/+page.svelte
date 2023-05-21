<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="outerDiv">
	<div class="innerDiv">
		<form action="?/createroom" use:enhance method="post">
			<label for="room_name">Room Name</label> <br />
			<input class="input" type="text" id="room_name" name="room_name" /> <br />
			{#if form?.invalidName}
				<p class="error">Invalid name!</p>
			{/if}
			<input type="submit" class="button" value="Create" /> <br />
		</form>
		<a href="/">
			<button class="button">Go back</button>
		</a>
	</div>
</div>

<style lang="postcss">
	.outerDiv {
		@apply flex h-screen;
	}

	.innerDiv {
		@apply flex flex-col items-center m-auto;
	}

	label {
		@apply font-bold;
	}

	.button {
		@apply mx-auto bg-slate-300 font-bold flex items-center text-center h-7 w-16 rounded-md text-slate-900 mt-3 hover:cursor-pointer;
	}

	.input {
		@apply h-8 w-96 rounded-xl text-center text-slate-900 bg-slate-300 outline-none font-bold;
	}

	.error {
		color: tomato;
		@apply font-bold;
	}
</style>
