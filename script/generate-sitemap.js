import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All routes from your React Router configuration
const routes = [
  // Main pages
  '/',
  '/contact',
  '/about',
  '/student-voices',
  '/all-programs',
  '/career-opportunities',
  '/apprenticeships',
  '/undergraduate',
  '/master-programs',
  '/news-page',

  // Programs
  '/programs/german-exams',
  '/programs/foreign-languages',
  '/programs/hospitality-management',

  // Exams
  '/exams/a1/young',
  '/exams/a1/adults',
  '/exams/a2/young',
  '/exams/a2/adults',
  '/exams/b1/adults',
  '/exams/b1/young',
  '/exams/b2/adults',
  '/exams/b2/young',
  '/exams/c1/adults',
  '/exams/c2/adults',
  '/exams/testdaf/students',
  '/exams/pro/professionals',

  // Language courses
  '/courses/english',
  '/courses/spanish',
  '/courses/french',
  '/courses/german',
  '/courses/arabic',
  '/courses/kiswahili',
  '/courses/mandarin',
  '/courses/dutch',
  '/courses/italian',
  '/courses/russian',
  '/courses/japanese',
  '/courses/portuguese',
  '/courses/turkish',
  '/courses/somalia',

  // German levels
  '/german-levels/a1',
  '/german-levels/a2',
  '/german-levels/b1',
  '/german-levels/b2',
  '/german-levels/c1',
  '/german-levels/c2',

  // Arabic levels
  '/arabic-levels/a1',
  '/arabic-levels/a2',
  '/arabic-levels/b1',
  '/arabic-levels/b2',
  '/arabic-levels/c1',
  '/arabic-levels/c2',

  // English levels
  '/english-levels/a1',
  '/english-levels/a2',
  '/english-levels/b1',
  '/english-levels/b2',
  '/english-levels/c1',
  '/english-levels/c2',

  // Mandarin levels
  '/mandarin-levels/hsk1',
  '/mandarin-levels/hsk2',
  '/mandarin-levels/hsk3',
  '/mandarin-levels/hsk4',
  '/mandarin-levels/hsk5',
  '/mandarin-levels/hsk6',

  // Spanish levels
  '/spanish-levels/a1',
  '/spanish-levels/a2',
  '/spanish-levels/b1',
  '/spanish-levels/b2',
  '/spanish-levels/c1',
  '/spanish-levels/c2',

  // French levels
  '/french-levels/a1',
  '/french-levels/a2',
  '/french-levels/b1',
  '/french-levels/b2',
  '/french-levels/c1',
  '/french-levels/c2',

  // Dutch levels
  '/dutch-levels/a1',
  '/dutch-levels/a2',
  '/dutch-levels/b1',
  '/dutch-levels/b2',
  '/dutch-levels/c1',
  '/dutch-levels/c2',

  // Italian levels
  '/italian-levels/a1',
  '/italian-levels/a2',
  '/italian-levels/b1',
  '/italian-levels/b2',
  '/italian-levels/c1',
  '/italian-levels/c2',

  // Japanese levels
  '/japanese-levels/n1',
  '/japanese-levels/n2',
  '/japanese-levels/n3',
  '/japanese-levels/n4',
  '/japanese-levels/n5',

  // Portuguese levels
  '/portuguese-levels/a1',
  '/portuguese-levels/a2',
  '/portuguese-levels/b1',
  '/portuguese-levels/b2',
  '/portuguese-levels/c1',
  '/portuguese-levels/c2',

  // Russian levels
  '/russian-levels/a1',
  '/russian-levels/a2',
  '/russian-levels/b1',
  '/russian-levels/b2',
  '/russian-levels/c1',
  '/russian-levels/c2',

  // Somali levels
  '/somali-levels/a1',
  '/somali-levels/a2',
  '/somali-levels/b1',
  '/somali-levels/b2',
  '/somali-levels/c1',
  '/somali-levels/c2',

  // Turkish levels
  '/turkish-levels/a1',
  '/turkish-levels/a2',
  '/turkish-levels/b1',
  '/turkish-levels/b2',
  '/turkish-levels/c1',
  '/turkish-levels/c2',

  // Hospitality pages
  '/diploma-hospitality',
  '/diploma-front-office',
  '/diploma-housekeeping',
  '/certificate-front-office',
  '/diploma-travel-tourism',
  '/certificate-food-production',
  '/certificate-fb-service',
  '/certificate-housekeeping',
  '/certificate-travel-ops',
  '/certificate-tour-guiding',

  // Short courses
  '/short-front-desk',
  '/short-opera',
  '/short-fb-control',
  '/short-cake-making',
  '/short-kitchen-ops',
  '/short-pastry-bakery',
  '/short-fb-supervision',
  '/short-supervisory-mgmt',
  '/short-barista',
  '/short-banqueting',
  '/short-housekeeping',
  '/short-homecare',
  '/short-laundry',
  '/short-customer-care',
  '/short-travel-foundation',
  '/short-travel-consultancy',
  '/short-cabin-crew',
  '/short-tour-guide-cert'
];

const baseUrl = 'https://foreignlanguagesandhospitality.com'; // Replace with your actual domain

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === '/' ? '1.0' : route.startsWith('/courses/') || route.startsWith('/programs/') ? '0.9' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

  // Path to the public directory at project root
  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write sitemap file
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`Sitemap successfully generated at: ${sitemapPath}`);
};

generateSitemap();