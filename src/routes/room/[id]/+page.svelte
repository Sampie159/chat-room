<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import { socket } from '$lib/webSocketConnection';
	import type { PageData } from './$types';

	export let data: PageData;

	socket.on('reloadPage', (room_id) => {
		refresh('http://localhost:5173/room/' + room_id);
	});

	function refresh(room: string) {
		invalidate(room);
	}
</script>

<div class="flex h-screen">
	<div class="flex flex-col items-center m-auto">
		<ul>
			{#each data.messages as { content, username }}
				<li>{username}: {content}</li>
			{/each}
		</ul>
		<form action="?/sendmessage" method="post" use:enhance>
			<input type="text" name="message_content" id="message_content" /> <br />
			<input type="submit" class="button" value="Send" />
		</form>
		<a href="/"><button>Go Back</button></a>
	</div>
</div>
