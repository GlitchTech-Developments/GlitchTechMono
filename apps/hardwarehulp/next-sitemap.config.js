/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://hardwarehulp.nl",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false, // (optional)
}
