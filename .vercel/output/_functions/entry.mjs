import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_A4EucrQ0.mjs';
import { manifest } from './manifest_k13bhHir.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/posts/_post_.astro.mjs');
const _page2 = () => import('./pages/pt-br.astro.mjs');
const _page3 = () => import('./pages/rss.xml.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/posts/[post].astro", _page1],
    ["src/pages/pt-br/index.astro", _page2],
    ["src/pages/rss.xml.ts", _page3],
    ["src/pages/index.astro", _page4]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: undefined
});
const _args = {
    "middlewareSecret": "6001c401-6a92-4889-a2bb-ce584d3f8f92",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
