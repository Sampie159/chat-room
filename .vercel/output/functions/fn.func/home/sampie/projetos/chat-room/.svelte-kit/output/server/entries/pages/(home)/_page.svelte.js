import { c as create_ssr_component, e as escape } from "../../../chunks/index3.js";
import "../../../chunks/singletons.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<title>Home</title>

<div class="flex h-screen"><div class="flex flex-col m-auto items-center"><p>${escape(data.user.username)}</p>
		<form action="?/signout" method="post"><input type="submit" class="button" value="Sign Out"></form></div></div>`;
});
export {
  Page as default
};
