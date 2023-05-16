<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<title>Login</title>

<div class="flex h-screen">
	<div class="m-auto flex flex-col items-center">
		<h1>Login</h1>
		<form method="post" action="?/signin" use:enhance>
			<label for="username">Username</label> <br />
			<input type="text" id="username" name="username" /> <br />
			{#if form?.errors?.username}
				<p>Username not valid.</p>
			{/if}
			<label for="password">Password</label> <br />
			<input type="password" id="password" name="password" /> <br />
			{#if form?.errors?.password}
				<p>Password not valid.</p>
			{/if}
			<input type="submit" class="button" value="Sign In" />
		</form>
		<p>Don't have an account?</p>
		<a href="/signup">
			<button>Sign Up</button>
		</a>
	</div>
</div>
