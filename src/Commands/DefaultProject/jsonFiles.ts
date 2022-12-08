import os from "os";

/**
 * A list with additional options used for generating the `package.json` file.
 */
export interface DefinePackageJsonOptions {
  /**
   * The name of the project.
   */
  projectName: string;
  /**
   * The version of the project.
   */
  version: string;
  /**
   * Keywords used to describe the project.
   */
  keywords: Array<string>;
  /**
   * A short description of the project.
   */
  description: string;
  /**
   * Flag to mark the usage of yarn.
   */
  useYarn: boolean;
  /**
   * Flag to mark the usage of the new version of yarn.
   */
  useYarnNew: boolean;
}

/**
 * Function used to generate the `package.json` file contents.
 *
 * @param projectName The name of the project to be created.
 * @param options A list with additional options used for generating the file.
 */
export function packageJsonFile(projectName: string, options: Partial<DefinePackageJsonOptions>): Record<string, any> {
  const command = options.useYarn ? "yarn" : "npm run";
  return {
    name: projectName,
    packageManager: options.useYarn && options.useYarnNew ? "yarn@3.3.0" : undefined,
    private: true,
    description: options.description || "The base project from which other projects should be created.",
    version: options.version || "1.0.0",
    scripts: {
      "onebe": "onebe",
      "start": `${ command } start:prod`,
      "start:prod": "node ./dist/index.js",
      "start:docker": `${ command } onebe migration:run && node ./index.js`,
      "start:dev": "nodemon",
      "code:lint": 'eslint --max-warnings 0 "./src/**/*.ts"',
      "code:lint:fix": 'eslint --max-warnings 0 --fix "./src/**/*.ts"',
      "code:fix": `${ command } code:prettier && ${ command } code:lint:fix`,
      "code:prettier": "prettier --write ./src",
      "app:compile": 'babel --extensions ".ts,.tsx" --config-file "./.babelrc.json" src -d dist/ --copy-files',
      "app:compile:cleanup": "rm -rf ./dist",
      "app:compile:check": "tsc",
      "app:build": `${ command } code:lint && ${ command } app:compile && ${ command } app:compile:check`,
      "lang:i18n": "sync-i18n --files 'src/locales/*.json' --primary en --languages en --space 2",
      "lang:i18n:check": `${ command } lang:i18n --check`,
      "prepare": "husky install",
    },
    keywords: options.keywords || [ "onebe", "sample" ],
    author: {
      email: "<YourEmail>",
      name: os.userInfo({ encoding: "utf-8" }).username,
      url: "<YourURL>",
    },
    license: "MIT",
    dependencies: {
      joi: "^17.6.0",
      lodash: "^4.17.21",
      luxon: "^3.0.3",
      onebe: "^2.0.0",
    },
    devDependencies: {
      "@babel/cli": "^7.17.6",
      "@babel/core": "^7.17.9",
      "@babel/node": "^7.16.8",
      "@babel/plugin-proposal-class-properties": "^7.16.7",
      "@babel/plugin-proposal-decorators": "^7.17.9",
      "@babel/plugin-proposal-object-rest-spread": "^7.17.3",
      "@babel/preset-env": "^7.16.11",
      "@babel/preset-typescript": "^7.16.7",
      "@babel/register": "^7.17.7",
      "@limegrass/eslint-plugin-import-alias": "^1.0.6",
      "@types/joi": "^17.2.3",
      "@types/lodash": "^4.14.181",
      "@types/luxon": "^3.0.0",
      "@types/node": "^17.0.23",
      "@typescript-eslint/eslint-plugin": "^5.18.0",
      "@typescript-eslint/parser": "^5.18.0",
      "babel-eslint": "^10.1.0",
      "babel-plugin-file-loader": "^2.0.0",
      "babel-plugin-module-resolver": "^4.1.0",
      "babel-plugin-transform-require-ignore": "^0.1.1",
      "debug": "^4.3.4",
      "eslint": "^8.13.0",
      "eslint-plugin-import": "^2.26.0",
      "husky": "^8.0.0",
      "i18next-json-sync": "^2.3",
      "nodemon": "^2.0",
      "prettier": "^2.8",
      "typescript": "^4.9",
    },
  };
}

/**
 * Function used to generate the `nodemon.json` file contents.
 */
export function nodemonFile(): Record<string, any> {
  return {
    watch: [ "src" ],
    ext: "ts",
    ignore: [ "src/**/*.spec.ts" ],
    exec: 'babel-node --extensions ".ts" --config-file "./.babelrc.json" ./src/index.ts',
  };
}

/**
 * Function used to generate the `.babelrc.json` file contents.
 */
export function babelrcFile(): Record<string, any> {
  return {
    presets: [
      "@babel/preset-typescript",
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current",
          },
          modules: "auto",
        },
      ],
    ],
    plugins: [
      [
        "@babel/plugin-proposal-decorators",
        {
          legacy: true,
        },
      ],
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread",
      [
        "module-resolver",
        {
          alias: {
            "@": "./src",
          },
        },
      ],
    ],
  };
}

/**
 * Function used to generate the `.eslintrc.json` file contents.
 */
export function eslintrcFile(): Record<string, any> {
  return {
    extends: [ "eslint:recommended", "plugin:@typescript-eslint/recommended" ],
    env: {
      es6: true,
      node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json",
    },
    plugins: [ "@typescript-eslint" ],
    rules: {
      "indent": "off",
      "@typescript-eslint/indent": [ "error", 2 ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/class-name-casing": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "template-curly-spacing": [ "error", "always" ],
      "@typescript-eslint/no-namespace": [ "error", { allowDeclarations: true } ],
      "comma-dangle": 0,
      "max-len": [
        "error",
        150,
        2,
        {
          ignoreComments: true,
        },
      ],
      "quote-props": [ "error", "consistent-as-needed" ],
      "no-cond-assign": [ "warn", "except-parens" ],
      "radix": 0,
      "no-else-return": 0,
      "no-param-reassign": 0,
      "default-case": 0,
      "new-cap": 0,
      "quotes": [
        "error",
        "double",
        {
          allowTemplateLiterals: true,
          avoidEscape: true,
        },
      ],
      "global-require": 0,
      "no-underscore-dangle": 0,
      "class-methods-use-this": 0,
      "import/no-dynamic-require": 0,
      "import/no-extraneous-dependencies": 0,
      "strict": [ 0, "global" ],
      "no-restricted-syntax": [ 2, "LabeledStatement", "WithStatement" ],
      "no-continue": 0,
      "no-await-in-loop": 0,
      "array-bracket-spacing": [
        "error",
        "always",
        {
          arraysInArrays: false,
        },
      ],
    },
  };
}

/**
 * Function used to generate the `tsconfig.json` file contents.
 */
export function tsconfigFile(): Record<string, any> {
  return {
    compilerOptions: {
      module: "ESNext",
      esModuleInterop: true,
      moduleResolution: "node",
      strict: false,
      sourceMap: true,
      target: "ES2021",
      outDir: "./dist",
      baseUrl: "./src",
      rootDir: "./src",
      allowSyntheticDefaultImports: true,
      resolveJsonModule: true,
      allowJs: true,
      skipLibCheck: true,
      experimentalDecorators: true,
      emitDecoratorMetadata: true,
      declaration: true,
      isolatedModules: true,
      paths: {
        "@/*": [ "*" ],
      },
    },
    include: [ "src/**/*.ts", "src/**/*.tsx" ],
    exclude: [ "node_modules" ],
  };
}
