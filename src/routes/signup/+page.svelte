<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<title>Sign Up</title>

<div class="outerDiv">
	<div class="innerDiv">
		<form method="post" action="?/signup" use:enhance>
			<h1>Create an account</h1>
			<label for="username">Username</label> <br />
			<input class="input" type="text" id="username" name="username" /> <br />
			{#if form?.errors?.username}
				<p class="error">Invalid username!</p>
			{/if}
			<label for="password">Password</label> <br />
			<input class="input" type="password" id="password" name="password" /> <br />
			{#if form?.errors?.password}
				<p class="error">Invalid password!</p>
			{:else if form?.userExists}
				<p class="error">Username already in use.</p>
			{/if}
			<input type="submit" class="button" value="Sign Up" />

			<div class="signswitch">
				<p>Already have an account?</p>
				<a href="/signin">
					<button>Sign In</button>
				</a>
			</div>
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

	.input {
		@apply h-8 w-96 rounded-xl text-center text-slate-900 bg-slate-300 outline-none font-bold;
	}

	label {
		@apply font-bold;
	}

	h1 {
		@apply font-bold text-3xl text-center;
	}

	.button {
		@apply mx-auto bg-slate-300 font-bold flex items-center text-center w-16 h-7 rounded-md text-slate-900 mt-3;
	}

	button {
		@apply font-bold;
	}

	.signswitch {
		@apply flex flex-col items-center mt-1;
	}
</style>
