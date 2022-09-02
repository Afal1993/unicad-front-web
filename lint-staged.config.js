module.exports = {
  '*.{ts,tsx,js}': filenames => [
    // Type check TypeScript files
    'yarn tsc --noEmit',
    // Lint then format TypeScript and JavaScript files
    `eslint --fix ${filenames.join(' ')}`,
    // Add files after lint
    'git add',
  ],

  // Format MarkDown and JSON
  '*.{md,json}': filenames => `prettier --write ${filenames.join(' ')}`,
}
