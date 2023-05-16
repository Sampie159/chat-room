<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<title>Home</title>

<div class="flex h-screen">
	<div class="flex flex-col m-auto items-center">
		<p>{data.user.username}</p>
		<form action="?/signout" use:enhance method="post">
			<input type="submit" class="button" value="Sign Out" />
		</form>
	</div>
</div>
