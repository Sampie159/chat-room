<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	const { rooms } = data;
	export let form: ActionData;
</script>

<title>Home</title>

<div class="outerDiv">
	<div class="rooms">
		<h1 class="font-bold text-center">Rooms</h1>
		<ul>
			{#each rooms as { id, room_name }}
				<a href="/room/{id}">
					<li class="button">{room_name}</li>
				</a>
			{/each}
		</ul>
	</div>
	<div class="innerDiv">
		<form action="?/joinroom" use:enhance method="post">
			<label class="font-bold" for="room_id">Room Id</label> <br />
			<input class="input" type="text" id="room_id" name="room_id" /> <br />
			{#if form?.invalidId}
				<p class="error">Invalid code!</p>
			{/if}
			<input type="submit" class="button" value="Join Room" /> <br />
			<a href="/createroom">
				<button class="button">Create Room</button>
			</a>
		</form>
		<form action="?/signout" use:enhance method="post">
			<input type="submit" class="button" value="Sign Out" />
		</form>
	</div>
</div>

<style lang="postcss">
	.outerDiv {
		@apply flex h-screen flex-row;
	}

	.innerDiv {
		@apply flex flex-col m-auto items-center justify-between;
	}

	.rooms {
		@apply bg-black w-96 p-2;
	}

	p {
		@apply font-bold;
	}

	.error {
		color: tomato;
	}

	.input {
		@apply h-8 w-96 rounded-xl text-center text-slate-900 bg-slate-300 outline-none font-bold;
	}

	.button {
		@apply mx-auto bg-slate-300 font-bold flex items-center text-center h-auto rounded-md text-slate-900 mt-3 hover:cursor-pointer;
		@apply break-all;
	}
</style>
