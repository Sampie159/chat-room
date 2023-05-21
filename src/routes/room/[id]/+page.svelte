<script lang="ts">
	import { enhance } from '$app/forms';
	import Message from '$lib/components/Message.svelte';
	import { socket } from '$lib/webSocketConnection';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	let { messages, id, room_name } = data;
	export let form: ActionData;

	socket.on('reloadPage', (message) => {
		messages = [...messages, message];
	});

	function copyRoomCode() {
		navigator.clipboard.writeText(id);
	}
</script>

<div class="outerDiv">
	<h1 class="roomName">{room_name}</h1>
	<div class="innerDiv">
		<ul>
			{#each messages as message}
				<li>
					<Message {message} />
				</li>
			{/each}
		</ul>
	</div>
	<div class="form">
		<form action="?/sendmessage" method="post" use:enhance>
			<input class="input" type="text" name="message_content" id="message_content" autofocus />
			<br />
			{#if form?.invalidMessage}
				<p class="error">Too long!</p>
			{/if}
			<input type="submit" class="button" value="Send" />
		</form>
		<div class="flex flex-row gap-24">
			<a href="/"><button class="font-bold outline-none">Return</button></a>
			<button class="font-bold outline-none" on:click={copyRoomCode}>Copy Room Code</button>
		</div>
	</div>
</div>

<style lang="postcss">
	.outerDiv {
		@apply flex h-screen flex-col outline-none;
	}

	.innerDiv {
		@apply flex flex-col-reverse items-center outline-none mt-auto mx-auto scroll-smooth overflow-y-scroll overflow-visible;
	}

	.form {
		@apply flex flex-col items-center outline-none;
	}

	.input {
		@apply font-bold text-center bg-slate-300 text-slate-900 w-96 h-8 rounded-xl outline-none;
	}

	.button {
		@apply mx-auto bg-slate-300 font-bold flex items-center text-center h-7 w-16 rounded-md text-slate-900 mt-3 hover:cursor-pointer;
		@apply outline-none;
	}

	.error {
		color: tomato;
		@apply font-bold outline-none;
	}

	.roomName {
		@apply text-center font-bold text-3xl mb-3;
	}
</style>
