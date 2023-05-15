<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Home</h1>
<div>
	<p>User id: {data.user.userId}</p>
	<p>Username: {data.user.username}</p>
	<form action="?/signout" method="post" use:enhance>
		<input type="submit" class="button" value="Sign Out" />
	</form>
</div>
