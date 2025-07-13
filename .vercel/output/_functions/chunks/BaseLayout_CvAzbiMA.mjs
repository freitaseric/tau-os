import { b as createAstro, c as createComponent, d as addAttribute, e as renderScript, a as renderTemplate, r as renderComponent, f as renderHead, g as renderSlot } from './astro/server_FtZYREi9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro("https://tau-os.freitaseric.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Eric Freitas/Projetos/distro-linux/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Eric Freitas/Projetos/distro-linux/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro("https://tau-os.freitaseric.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { lang, title } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "fallback": "swap" })}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Eric Freitas/Projetos/distro-linux/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
