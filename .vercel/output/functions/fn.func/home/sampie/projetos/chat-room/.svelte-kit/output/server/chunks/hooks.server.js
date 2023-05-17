import { a as auth } from "./lucia.js";
import { r as redirect } from "./index.js";
const handle = async ({ event, resolve }) => {
  event.locals.auth = auth.handleRequest(event);
  if (event.url.pathname.startsWith("/signup") || event.url.pathname.startsWith("/signin")) {
    const session = await event.locals.auth.validate();
    if (session)
      throw redirect(302, "/");
  }
  return await resolve(event);
};
export {
  handle
};
