<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<title>Sign In</title>

<div class="outerDiv">
	<div class="innerDiv">
		<form method="post" action="?/signin" use:enhance>
			<h1>Login</h1>
			<label for="username">Username</label> <br />
			<input class="input" type="text" id="username" name="username" /> <br />
			{#if form?.errors?.username}
				<p class="error">Invalid username!</p>
			{/if}
			<label for="password">Password</label> <br />
			<input class="input" type="password" id="password" name="password" /> <br />
			{#if form?.errors?.password}
				<p class="error">Invalid password!</p>
			{/if}
			<input type="submit" class="button" value="Sign In" />

			<div class="signswitch">
				<p>Don't have an account?</p>
				<a href="/signup">
					<button>Sign Up</button>
				</a>
			</div>
		</form>
	</div>
</div>
