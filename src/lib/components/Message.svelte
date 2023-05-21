<script lang="ts">
	export let message: {
		username: string;
		content: string;
	};
</script>

<div class="confine">
	<div class="message">
		<div class="username">
			<p>{message.username}:</p>
		</div>
		<div class="content">
			<p>{message.content}</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.message {
		@apply w-full bg-slate-300 text-slate-900 m-2 p-2 rounded-xl flex flex-row shadow-black shadow-lg;
	}

	.username {
		@apply font-bold pr-2 my-auto;
	}

	.content {
		@apply italic break-all;
	}

	.confine {
		@apply mx-32;
	}
</style>
