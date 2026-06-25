#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const assetsDir = path.join(__dirname, '../dist/client/assets');
const outputFile = path.join(__dirname, '../dist/client/index.html');

// Find the largest JS file (main bundle) and CSS file
let mainJsBundle = null;
let cssBundle = null;
let maxJsSize = 0;

if (!fs.existsSync(assetsDir)) {
  console.error('Error: dist/client/assets directory not found');
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);

files.forEach(file => {
  const filePath = path.join(assetsDir, file);
  const stats = fs.statSync(filePath);

  if (file.endsWith('.js') && stats.size > maxJsSize) {
    mainJsBundle = file;
    maxJsSize = stats.size;
  }

  if (file.endsWith('.css')) {
    cssBundle = file;
  }
});

if (!mainJsBundle) {
  console.error('Error: No JavaScript bundle found in assets/');
  process.exit(1);
}

if (!cssBundle) {
  console.warn('Warning: No CSS bundle found in assets/');
}

// Generate HTML content
const htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>A.T Farms and Fields Limited — Agricultural Solutions in Nigeria</title>
    <meta name="description" content="Premium crop farming, livestock production, forestry, and farm management services in Ogun State and Southwest Nigeria." />
    <meta name="robots" content="index, follow" />
    <meta property="og:site_name" content="A.T Farms and Fields Limited" />
    <meta property="og:type" content="website" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400&display=swap" />
    ${cssBundle ? `<link rel="stylesheet" href="./assets/${cssBundle}" />` : ''}
    <style>
      .skip-link {
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--primary);
        color: white;
        padding: 0.6rem 1.4rem;
        border-radius: 0 0 0.5rem 0;
        text-decoration: none;
        z-index: 100;
        font-weight: 600;
        font-size: 0.875rem;
      }
      .skip-link:focus {
        top: 0;
      }
    </style>
  </head>
  <body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <div id="app"></div>
    <script type="module" src="./assets/${mainJsBundle}"></script>
  </body>
</html>
`;

// Write the generated HTML file
try {
  fs.writeFileSync(outputFile, htmlContent, 'utf-8');
  console.log(`✓ Generated ${outputFile}`);
  console.log(`  - JS bundle: ./assets/${mainJsBundle}`);
  console.log(`  - CSS bundle: ./assets/${cssBundle || '(none)'}`);
} catch (err) {
  console.error('Error writing index.html:', err.message);
  process.exit(1);
}
