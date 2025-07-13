import { c as createComponent, a as renderTemplate } from '../../chunks/astro/server_FtZYREi9.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getEntries } from '../../chunks/_astro_content_COSjIQOK.mjs';
export { renderers } from '../../renderers.mjs';

const sortByDate = (entries) => {
  const sortedEntries = entries.sort(
    (a, b) => new Date(b.data.updatedAt ?? b.data.publishedAt).valueOf() - new Date(a.data.updatedAt ?? a.data.publishedAt).valueOf()
  );
  return sortedEntries;
};

const getStaticPaths = async () => {
  (await getEntries("blog")).filter(sortByDate);
  return [];
};
const $$post = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/Eric Freitas/Projetos/distro-linux/src/pages/posts/[post].astro", void 0);

const $$file = "C:/Users/Eric Freitas/Projetos/distro-linux/src/pages/posts/[post].astro";
const $$url = "/posts/[post]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$post,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
