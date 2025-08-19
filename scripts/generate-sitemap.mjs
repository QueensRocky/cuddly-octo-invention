import fs from 'node:fs';
import path from 'node:path';

const base = 'https://example.nl';
const staticPaths = ['/', '/en'];
const periodDir = path.join(process.cwd(), 'content', 'periods');
let periodSlugs = [];
if (fs.existsSync(periodDir)) {
  periodSlugs = fs.readdirSync(periodDir).filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''));
}
const urls = [
  ...staticPaths,
  ...periodSlugs.map(s => `/periods/${s}`)
];
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `<url><loc>${base}${u}</loc></url>`).join('\n')}\n</urlset>`;
fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xml);
fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), `Sitemap: ${base}/sitemap.xml\nUser-agent: *\nAllow: /`);
console.log('Sitemap & robots generated');
