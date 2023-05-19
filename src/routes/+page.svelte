<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	let { rooms, user } = data;
	export let form: ActionData;
</script>

<title>Home</title>

<div class="flex h-screen">
	<div class="flex flex-col m-auto items-center">
		<p>{user.username}</p>
		<a href="/createroom">
			<button>Create Room</button>
		</a>
		<form action="?/joinroom" use:enhance method="post">
			<label for="room_id">Room Id</label> <br />
			<input type="text" id="room_id" name="room_id" /> <br />
			{#if form?.errors.room_id}
				<p class="error">Invalid code!</p>
			{/if}
			<input type="submit" class="button" value="Join Room" /> <br />
		</form>
		<h2>Rooms</h2>
		<ul>
			{#each rooms as { id, room_name }}
				<a href="/room/{id}">
					<li>{room_name}</li>
				</a>
			{/each}
		</ul>
		<form action="?/signout" use:enhance method="post">
			<input type="submit" class="button" value="Sign Out" />
		</form>
	</div>
</div>
