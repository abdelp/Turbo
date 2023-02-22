# Creating a new monorepo

## Quickstart

```sh
npx create-turbo@latest
```

## Full tutorial

### 1. Running `create-turbo`

```sh
npx create-turbo@latest
```

### 2. Exploring your new repo

**What's considered a _workspace_ in Turbo?**

In Turbo, a folder containing a `package.json` is considered a _workspace_.

### Understanding `packages/ui`

### Understanding imports and exports

### Understanding `eslint-config-custom`

### Summary

* `web` - depends on `ui`, `tsconfig` and `eslint-config-custom`
* `docs` - depends on `ui`, `tsconfig` and `eslint-config-custom`
* `ui` - depends on `tsconfig` and `eslint-config-custom`
* `tsconfig` - no dependencies
* `eslint-config-custom` - no dependencies

## 3. Understanding `turbo.json`

```sh
yarn turbo run <task>
```

## 4. Linting with Turborepo

```sh
yarn turbo lint
```

## Using the cache

## Building with Turborepo

```sh
[yarn] turbo build
```

## 6. Running dev scripts

```sh
yarn turbo dev
```

## Running `dev` on only one workspace at a time

```sh
yarn turbo dev --filter docs
```

It only runs `docs:dev`

## Summary

