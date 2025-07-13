const getRobotsTxt = (sitemapUrl) => `
User-Agent: *
Allow: /

Sitemap: ${sitemapUrl.href}
`

export const GET = ({ site }) => {
  const sitemapUrl = new URL('sitemap-index.xml', site)
  return new Response(getRobotsTxt(sitemapUrl))
}
