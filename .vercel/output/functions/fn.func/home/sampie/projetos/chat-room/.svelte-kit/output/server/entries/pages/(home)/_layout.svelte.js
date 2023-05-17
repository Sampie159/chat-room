import { c as create_ssr_component } from "../../../chunks/index3.js";
/* empty css                       */const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{--tw-bg-opacity:1;background-color:rgb(15 23 42 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(203 213 225 / var(--tw-text-opacity))\n}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
