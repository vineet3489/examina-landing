const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const dirs = [
  'images/hero',
  'images/screenshots',
  'images/testimonials'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Function to create a placeholder image
function createPlaceholder(width, height, text, outputPath) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#f3f4f6';
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#4f46e5';
  ctx.font = 'bold 24px Inter';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
}

// Generate placeholder images
const placeholders = [
  { path: 'images/hero/hero-main.png', width: 800, height: 600, text: 'Hero Image' },
  { path: 'images/hero/hero-bg.png', width: 1920, height: 1080, text: 'Hero Background' },
  { path: 'images/screenshots/mock-test.png', width: 800, height: 600, text: 'Mock Test Interface' },
  { path: 'images/screenshots/flashcards.png', width: 800, height: 600, text: 'Flashcards Interface' },
  { path: 'images/screenshots/study-plan.png', width: 800, height: 600, text: 'Study Plan Interface' },
  { path: 'images/testimonials/user1.png', width: 200, height: 200, text: 'User 1' },
  { path: 'images/testimonials/user2.png', width: 200, height: 200, text: 'User 2' }
];

placeholders.forEach(({ path, width, height, text }) => {
  createPlaceholder(width, height, text, path);
  console.log(`Generated: ${path}`);
}); 