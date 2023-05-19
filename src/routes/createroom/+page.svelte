<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	export let form: ActionData;
</script>

<title>Create Room</title>

<div class="outerDiv">
	<div class="innerDiv">
		<form action="?/createroom" method="post" use:enhance>
			<label for="room_name">Room Name</label> <br />
			<input class="input" type="text" id="room_name" name="room_name" /> <br />
			{#if form?.errors.room_name}
				<p class="error">Invalid room name!</p>
			{/if}
			<input type="submit" class="button" value="Create Room" />
		</form>
	</div>
</div>

<style lang="postcss">
	.outerDiv {
		@apply flex h-screen;
	}

	.innerDiv {
		@apply flex flex-col items-center m-auto;
	}

	.error {
		color: tomato;
		font-weight: bold;
	}

	label {
		@apply font-bold;
	}

	.input {
		@apply h-8 w-96 rounded-xl text-center text-slate-900 bg-slate-300 outline-none font-bold;
	}

	.button {
		@apply mx-auto bg-slate-300 font-bold flex items-center text-center h-7 rounded-md text-slate-900 mt-3;
	}
</style>
