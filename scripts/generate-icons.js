const fs = require('fs');
const path = require('path');

// This script creates simple placeholder PWA icons
// You should replace these with your actual app icons

const createSvgIcon = (size) => {
  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" fill="#1a5f3f"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${size * 0.3}px" fill="white" text-anchor="middle" dominant-baseline="middle">IS</text>
  </svg>`;
};

const createMaskableSvgIcon = (size) => {
  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" fill="#1a5f3f"/>
    <circle cx="${size/2}" cy="${size/2}" r="${size * 0.4}" fill="#ffffff20"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${size * 0.25}px" fill="white" text-anchor="middle" dominant-baseline="middle">IS</text>
  </svg>`;
};

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const publicDir = path.join(__dirname, '..', 'public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate regular icons
sizes.forEach(size => {
  const svg = createSvgIcon(size);
  const filename = path.join(publicDir, `icon-${size}.png`);
  
  // For now, we'll save as SVG with .png extension
  // In production, you'd use a proper image processing library
  fs.writeFileSync(filename.replace('.png', '.svg'), svg);
  console.log(`Created icon-${size}.svg`);
});

// Generate maskable icons
[192, 512].forEach(size => {
  const svg = createMaskableSvgIcon(size);
  const filename = path.join(publicDir, `icon-maskable-${size}.svg`);
  fs.writeFileSync(filename, svg);
  console.log(`Created icon-maskable-${size}.svg`);
});

// Create screenshots placeholders
const screenshot = `<svg width="540" height="720" xmlns="http://www.w3.org/2000/svg">
  <rect width="540" height="720" fill="#1a5f3f"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48px" fill="white" text-anchor="middle" dominant-baseline="middle">Istighfar Stories</text>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'screenshot-1.svg'), screenshot);
fs.writeFileSync(path.join(publicDir, 'screenshot-2.svg'), screenshot);

console.log('Icon generation complete!');
console.log('Note: These are SVG placeholders. For production, convert them to PNG using an image processing tool.');
