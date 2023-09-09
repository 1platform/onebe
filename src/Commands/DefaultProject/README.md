# OneBE Project Base

This project represents the base for application developed using the OneBE Framework.

Develop your application following the guidelines available in the [documentation](https://docs.onebe.dev).

You can check the code documentation of the [framework here](https://github.com/1platform/onebe/tree/main/docs).

## Project structure:

The project has the following structure:

- `.husky` - Git Hooks that can be used at different stages of the git process.
- `src` - The sources of your application
- `tmp` - Storage getModuleFolder for temporary files.
- `upload` - Storage getModuleFolder for uploaded files.
- `.env.sample` - A sample environment file. Before starting your project make a copy of this file and edit
  it accordingly to your needs.
- `.babelrc.json`, `.eslintrc`, `nodemon.json`, `tsconfig.json` - Configuration files for various
  tools used in the project creation and building.
- `.gitignore`, `.dockerignore`, `.nodeignore` - Files used to define what to be ignored by various tools.
- `Dockerfile` - File used to build a docker image of the project.

## Development:

In the development process you can use the following commands to perform various actions.

Commands used to interact with the framework:

- `yarn onebe migration:create <migrationName>`
- `yarn onebe migration:run`
- `yarn onebe migration:reset`
- `yarn onebe migration:undo`
- `yarn onebe migration:show`
- `yarn onebe entity:create <entityName>`
- `yarn onebe entity:load -i <inputJsonFile> -e <entityName>`
- `yarn onebe job:create <jobName>`
- `yarn onebe service:create <serviceName>`
- `yarn onebe route:create <routeName>`

Commands used to interact with your code:

- `yarn code:lint`
- `yarn code:lint:fix`
- `yarn code:fix`
- `yarn code:prettier`

Commands used to interact with the internationalisation library:

- `yarn lang:i18n`
- `yarn lang:i18n:check`

## Starting the application

- `yarn start`
- `yarn start:prod`
- `yarn start:docker`
- `yarn start:dev`

## Building the application

- `yarn app:compile`
- `yarn app:compile:cleanup`
- `yarn app:compile:check`
- `yarn app:build`
