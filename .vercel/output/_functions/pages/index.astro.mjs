import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_FtZYREi9.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CvAzbiMA.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "en", "title": "Linux Distro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Hello, world!</h1> ` })}`;
}, "C:/Users/Eric Freitas/Projetos/distro-linux/src/pages/index.astro", void 0);

const $$file = "C:/Users/Eric Freitas/Projetos/distro-linux/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
