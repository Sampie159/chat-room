import { c as create_ssr_component } from "../../../../chunks/index3.js";
import "../../../../chunks/singletons.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-adg0wd{--tw-bg-opacity:1;background-color:rgb(15 23 42 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(203 213 225 / var(--tw-text-opacity))}.outerDiv.svelte-adg0wd{display:flex;height:100vh}.innerDiv.svelte-adg0wd{margin:auto;display:flex;flex-direction:column;align-items:center}.error.svelte-adg0wd{color:tomato;font-weight:bold}.input.svelte-adg0wd{height:2rem;width:24rem;border-radius:0.75rem;--tw-bg-opacity:1;background-color:rgb(203 213 225 / var(--tw-bg-opacity));text-align:center;font-weight:700;--tw-text-opacity:1;color:rgb(15 23 42 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px}label.svelte-adg0wd{font-weight:700}h1.svelte-adg0wd{text-align:center;font-size:1.875rem;line-height:2.25rem;font-weight:700}.button.svelte-adg0wd{margin-left:auto;margin-right:auto;margin-top:0.75rem;display:flex;height:1.75rem;width:4rem;align-items:center;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(203 213 225 / var(--tw-bg-opacity));text-align:center;font-weight:700;--tw-text-opacity:1;color:rgb(15 23 42 / var(--tw-text-opacity))}.button.svelte-adg0wd:hover{cursor:pointer}button.svelte-adg0wd{font-weight:700}.signswitch.svelte-adg0wd{margin-top:0.25rem;display:flex;flex-direction:column;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<title>Sign Up</title>

<main class="svelte-adg0wd"><div class="outerDiv svelte-adg0wd"><div class="innerDiv svelte-adg0wd"><form method="post" action="?/signup"><h1 class="svelte-adg0wd">Create an account</h1>
				<label for="username" class="svelte-adg0wd">Username</label> <br>
				<input class="input svelte-adg0wd" type="text" id="username" name="username"> <br>
				${form?.errors?.username ? `<p class="error svelte-adg0wd">Invalid username!</p>` : ``}
				<label for="password" class="svelte-adg0wd">Password</label> <br>
				<input class="input svelte-adg0wd" type="password" id="password" name="password"> <br>
				${form?.errors?.password ? `<p class="error svelte-adg0wd">Invalid password!</p>` : ``}
				<input type="submit" class="button svelte-adg0wd" value="Sign Up">

				<div class="signswitch svelte-adg0wd"><p>Already have an account?</p>
					<a href="/signin"><button class="svelte-adg0wd">Sign In</button></a></div></form></div></div>
</main>`;
});
export {
  Page as default
};
