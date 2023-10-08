# Instruções de Configuração do Projeto

## Husky + Prettier + Eslint + Lint-staged + Commitlint + Typescript

Este guia fornece instruções passo a passo para configurar um novo projeto. Siga estas etapas para configurar seu projeto com as dependências necessárias.

## Começar o Repositório

```shell
git init
```

## Iniciar um Projeto npm

```shell
npm init
```

## Configurar Commitlint

Commitlint é uma ferramenta para padronizar mensagens de commit. Isso ajuda a manter um histórico de commit claro.

```shell
npm install @commitlint/cli @commitlint/config-conventional --save-dev
echo '{"extends": ["@commitlint/config-conventional"]}' > .commitlintrc.json
```

- Documentação: [Commitlint GitHub](https://github.com/conventional-changelog/commitlint)

### Testar Commitlint

Verifique se o Commitlint está configurado corretamente:

- Commit inválido (Falha):

```shell
echo "teste" | npx commitlint
```

- Commit válido (Sucesso):

```shell
echo "feat: teste" | npx commitlint
```

## Instalar Husky

Husky é uma ferramenta que automatiza tarefas do Git, como a execução de scripts antes de confirmar um commit.

```shell
npx husky-init
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'
```

- Documentação: [Husky GitHub](https://github.com/typicode/husky)

#### Habilitar acesso ao .husky no Windows

```shell
chmod +x .husky/*
```

## Instalar Prettier

Prettier é um formatador de código.

```shell
npm i prettier --save-dev
```

- Documentação: [Prettier GitHub](https://github.com/prettier/prettier)

## Instalar ESLint

ESLint é uma ferramenta para identificar problemas no código JavaScript.

```shell
npm install eslint --save-dev
npm install @typescript-eslint/parser --save-dev
npm install @typescript-eslint/eslint-plugin --save-dev
npm install eslint-config-prettier --save-dev
```

- Documentação: [ESLint GitHub](https://github.com/eslint/eslint)

### Configurar ESLint

Iniciar a configuração do ESLint:

```shell
npm init @eslint/config
```

## Instalar Lint-Staged

Lint-Staged é uma ferramenta para rodar linters em arquivos específicos antes de confirmar um commit.

```shell
npm install lint-staged --save-dev
```

- Documentação: [Lint-Staged GitHub](https://github.com/okonet/lint-staged)

## Instalar Dependências TypeScript (Opcional)

Se você estiver usando TypeScript, instale as dependências:

```shell
npm i typescript
npm i @types/node tsx --save-dev
```

- Documentação: [TypeScript Site Oficial](https://www.typescriptlang.org/)

### Configurar TypeScript

Iniciar a configuração do TypeScript:

```shell
npx tsc --init
```

Agora seu projeto está configurado com ferramentas essenciais para manter a qualidade do código e melhorar a eficiência do desenvolvimento. Personalize essas instruções de acordo com as necessidades específicas do seu projeto.
