// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="lucia-auth" />

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('lucia-auth').AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}

	namespace Lucia {
		type Auth = import('$lib/lucia').Auth;
		type UserAttributes = {
			username: string;
		};
	}
}

export { };
