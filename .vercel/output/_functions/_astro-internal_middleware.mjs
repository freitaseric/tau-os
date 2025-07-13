import { t as toRoutingStrategy, a as toFallbackType, c as createMiddleware, s as sequence } from './chunks/index_BtNbQmQz.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_wdyEUp_7.mjs';
import 'kleur/colors';
import './chunks/astro/server_FtZYREi9.mjs';
import 'clsx';
import 'cookie';

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "en", locales: ["en", "pt-BR"], routing: "manual" }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
let fallbackType = toFallbackType(routing);
let middleware;
{
  middleware = (customOptions) => {
    strategy = toRoutingStrategy(customOptions, {});
    fallbackType = toFallbackType(customOptions);
    const manifest = {
      ...i18n,
      strategy,
      domainLookupTable: {},
      fallbackType,
      fallback: i18n.fallback
    };
    return createMiddleware(manifest, base, trailingSlash, format);
  };
}

const onRequest$1 = middleware({
  fallbackType: "rewrite",
  redirectToDefaultLocale: false,
  prefixDefaultLocale: true
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
