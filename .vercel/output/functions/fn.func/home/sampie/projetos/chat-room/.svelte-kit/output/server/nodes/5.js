import * as server from '../entries/pages/(sign)/signin/_page.server.ts.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/(sign)/signin/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(sign)/signin/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.3da520c2.js","_app/immutable/chunks/index.cdb25d1b.js","_app/immutable/chunks/forms.235ab513.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.711c9f92.js"];
export const stylesheets = ["_app/immutable/assets/5.eb17a23a.css"];
export const fonts = [];
