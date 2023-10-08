## Start repository

```shell
git init
```

## Start npm project

```shell
npm init
```

## Config commitlint

```shell
npm install @commitlint/cli @commitlint/config-conventional --save-dev
echo "{"extends": ["@commitlint/config-conventional"]}" > .commitlintrc.json
```

https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional

## Installing husky

```shell
npx husky-init
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'
```

### Enable access to .husky on windows SO

```shell
chmod +x .husky/*
```

## Installing prettier

```shell
npm i prettier --save-dev
```

## Installing eslint

```shell
npm install eslint --save-dev
npm install @typescript-eslint/parser --save-dev
npm install @typescript-eslint/eslint-plugin --save-dev
npm install eslint-config-prettier --save-dev
```

# Start eslint config

```shell
npm init @eslint/config
```

## Installing lint-staged

```shell
npm install lint-staged --save-dev
```
