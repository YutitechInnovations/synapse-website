const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Clean previous builds
try {
  if (fs.existsSync('out')) {
    fs.rmSync('out', { recursive: true, force: true });
  }
  if (fs.existsSync('.next')) {
    fs.rmSync('.next', { recursive: true, force: true });
  }
} catch (error) {
  console.warn('⚠️ Warning: Could not clean some directories:', error.message);
}

// Install dependencies
execSync('npm install', { stdio: 'inherit' });

// Build the project
execSync('npm run build', { stdio: 'inherit' });

// Verify the build
if (!fs.existsSync('out')) {
  console.error('❌ Build failed: out directory not found');
  process.exit(1);
}
