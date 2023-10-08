## Start repository

```
git init
```

## Start npm project

```
npm init
```

## Config commitlint

```
npm install @commitlint/cli @commitlint/config-conventional --save-dev
echo "{"extends": ["@commitlint/config-conventional"]}" > .commitlintrc.json
```

https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional

## Installing husky

```
npx husky-init
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'
```

### Enable access to .husky on windows SO

```
chmod +x .husky/*
```
