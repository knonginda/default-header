module.exports = {
  '*.js': ['npm run lint:eslint', 'npm run lint:prettier', 'git add'],
  '{!(package)*.json,!.npmrc,*.code-snippets,.!(npmrc)*rc}': [
    'npm run lint:prettier --parser json',
    'git add',
  ],
  'package.json': ['npm run lint:prettier', 'git add'],
  '*.vue': [
    'npm run lint:eslint',
    'npm run lint:stylelint',
    'npm run lint:prettier',
    'git add',
  ],
}
