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
