import fs from 'node:fs';
import path from 'node:path';

// Minimal placeholder search index generator (extend with other collections)
const contentDir = path.join(process.cwd(), 'content', 'periods');
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
const docs = files.map(f => {
  const raw = fs.readFileSync(path.join(contentDir, f), 'utf8');
  const titleMatch = raw.match(/title_nl: (.*)/);
  return { slug: f.replace(/\.md$/, ''), title: titleMatch? titleMatch[1] : f, type: 'period' };
});
fs.mkdirSync(path.join(process.cwd(), 'public'), { recursive: true });
fs.writeFileSync(path.join(process.cwd(), 'public', 'search-index.json'), JSON.stringify(docs, null, 2));
console.log('Search index generated:', docs.length);
