<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div>
	<h1>Create an account</h1>
	<form method="post" action="?/signup" use:enhance>
		<label for="username">Username</label> <br />
		<input type="text" id="username" name="username" /> <br />
		<label for="password">Password</label> <br />
		<input type="password" id="password" name="password" /> <br />
		<input type="submit" class="button" value="Sign Up" />
	</form>
	<p>Already have an account?</p>
	<a href="/signin">
		<button>Sign In</button>
	</a>

	{#if form?.error}
		<ul>
			{#each form.errors as { message }}
				<li>{message}</li>
			{/each}
		</ul>
	{/if}
</div>
