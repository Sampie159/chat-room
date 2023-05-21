<script lang="ts">
	import { enhance } from '$app/forms';
	import Message from '$lib/components/Message.svelte';
	import { socket } from '$lib/webSocketConnection';
	import type { PageData } from './$types';

	export let data: PageData;
	let { messages } = data;

	socket.on('reloadPage', (message) => {
		messages = [...messages, message];
	});
</script>

<div class="outerDiv">
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
			<input class="input" type="text" name="message_content" id="message_content" /> <br />
			<input type="submit" class="button" value="Send" />
		</form>
		<a href="/"><button class="font-bold">Return</button></a>
	</div>
</div>

<style lang="postcss">
	.outerDiv {
		@apply flex h-screen flex-col;
	}

	.innerDiv {
		@apply flex flex-col-reverse items-center mt-auto mx-auto scroll-smooth overflow-y-scroll overflow-visible;
	}

	.form {
		@apply flex flex-col items-center;
	}

	.input {
		@apply font-bold text-center bg-slate-300 text-slate-900 w-96 h-8 rounded-xl outline-none;
	}

	.button {
		@apply mx-auto bg-slate-300 font-bold flex items-center text-center h-7 w-16 rounded-md text-slate-900 mt-3 hover:cursor-pointer;
	}
</style>
