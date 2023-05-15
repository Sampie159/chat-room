<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<title>Login</title>

<div>
	<h1>Login</h1>
	<form method="post" action="?/signin" use:enhance>
		<label for="username">Username</label> <br />
		<input type="text" id="username" name="username" /> <br />
		<label for="password">Password</label> <br />
		<input type="password" id="password" name="password" /> <br />
		<input type="submit" class="button" value="Sign In" />
	</form>
	<p>Don't have an account?</p>
	<a href="/signup">
		<button>Sign Up</button>
	</a>
	{#if form?.error}
		<ul class="error">
			{#each form.errors as { message }}
				<li>{message}</li>
			{/each}
		</ul>
	{/if}
</div>
