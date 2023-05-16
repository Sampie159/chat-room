<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<title>Sign Up</title>

<div class="flex h-screen">
	<div class="flex flex-col m-auto items-center">
		<h1>Create an account</h1>
		<form method="post" action="?/signup" use:enhance>
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
			<input type="submit" class="button" value="Sign Up" />
		</form>
		<p>Already have an account?</p>
		<a href="/signin">
			<button>Sign In</button>
		</a>
	</div>
</div>
