import { r as redirect, f as fail } from "../../../chunks/index.js";
import { a as auth } from "../../../chunks/lucia.js";
const load = async ({ locals }) => {
  const { user } = await locals.auth.validateUser();
  if (!user)
    throw redirect(302, "/signin");
  return { user };
};
const actions = {
  signout: async ({ locals }) => {
    const session = await locals.auth.validate();
    if (!session)
      return fail(401);
    await auth.invalidateSession(session.sessionId);
    locals.auth.setSession(null);
  }
};
export {
  actions,
  load
};
