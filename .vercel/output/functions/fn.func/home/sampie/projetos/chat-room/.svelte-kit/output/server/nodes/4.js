import * as server from '../entries/pages/(home)/_page.server.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/(home)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(home)/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.122c53e4.js","_app/immutable/chunks/index.cdb25d1b.js","_app/immutable/chunks/forms.7f45b43a.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.9fcc329d.js"];
export const stylesheets = [];
export const fonts = [];
