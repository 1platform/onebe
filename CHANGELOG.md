# OneBE Framework Changelog

Here we will note all the changes made to the framework.

## Version 2.1.4

🌟 Improvements:

- Bump versions.

🔧 Bugfix:

- Fix an issue with the fixed size number generation.
- Fix an issue with the extension ladder.

## Version 2.1.3

🌟 Improvements:

- Add support to redirect the user to another page.
- Allow the developer to create a service in a specific folder.

🔧 Bugfix:

- Fix an issue with the service generation.

## Version 2.1.2

🌟 Improvements:

- Export i18next.
- Make the clone function return a promise.

## Version 2.1.1

🌟 Improvements:

- Export the I18n, TFunction and I18NextRequest interfaces from i18next.
- Add the ability to enable debug mode for the i18next.
- Ability to specify the datatype for Config.array and Config.object.

🔧 Bugfix:

- Fix an issue with the configuration loading for the i18next configuration.

## Version 2.1.0

🚀 New:

- Expose the function to translate messages.
- Allow the user to clone the i18n engine with a different language.
- Add Custom and OpenID authentication methods as supported methods for documentation.

🌟 Improvements:

- Ability to add extra middlewares before endpoint execution (general code). 

🔧 Bugfix:

- Fix an issue in the template used to generate routes.
- Fix an issue in the template used to generate services.

## Version 2.0.2

🌟 Improvements:

- Removed the Request Generic type from the GET Verb decorator.
- Updated documentation.
- Updated code generator for the initial project.
- Moved the signURL and VerifyURL decorator into the AuthDecorators module.
- Add the UploadedFile type to describe Express.Multer.File type.

## Version 2.0.1

🌟 Improvements:

- Fixed the link to the repository.
- Fixed the link to the homepage.

🔧 Bugfix:

- Fix an issue with babel not installed.

## Version 2.0.0

🚀 New:

- Upgrade TypeORM to the latest version available.
- Redesign the Documentation system.
- Adds automatically documentation for the models defines through TypeORM.
- Adds a new way to document Entities through the usage of the BaseEntity class and decorators.
- Adds a new way to document Routes and Endpoints.
- CLI Commands to create Migrations, Entities, Services, Jobs and Routes.
- Add Base Services for working with Database.

🌟 Improvements:

- Bump versions.
- Refactor the Route loading and documentation engine.
- Refactor the Interface documentation engine and procedure.
- Enhance the code documentation for the Classes, Methods, Functions, Properties and Variables exposed
  by the framework.
- Enhance the Service Loader to get the name from the Service.
- Refactored the interfaces used as parameters in the routes. Now they are classes: ContextAPI and AuthContextAPI

🗑️ Removed:

- The old way of documenting entities and interfaces.
- The old way of documenting controllers and endpoints.

## Version 1.0.30

🔧 Bugfix:

- Revert the string-strip-html version to 8.3.0.

## Version 1.0.29

🌟 Improvements:

- Bump versions.

## Version 1.0.28

🌟 Improvements:

- Bump versions.
- Add strip command

🔧 Bugfix:

- Fix an issue with Number with a fixed size.

## Version 1.0.27

🌟 Improvements:

- Bump versions.

## Version 1.0.26

🔧 Bugfix:

- Fix the logger settings when logging disabled.

## Version 1.0.25

🔧 Bugfix:

- Fix the default logger extraction.

## Version 1.0.24

🚀 New:

- Add possibility to disable the logger.

🌟 Improvements:

- Add the custom format console logger.
- Allow the user to change the logger.

## Version 1.0.23

🚀 New:

- Add methods to get the body of the request with a specific type.

🌟 Improvements:

- Upgrade dependencies.

## Version 1.0.22

🔧 Bugfix:

- Invert the checks for the boolean query parameter

## Version 1.0.21

🚀 New:

- Add methods to get the parameter from the route as a given type.

🌟 Improvements:

- Upgrade dependencies

🔧 Bugfix:

- Fix an issue with the query parameters for boolean items.

## Version 1.0.20

🌟 Improvements:

- Update dependencies.

🔧 Bugfix:

- Fix yarnrc file to publish on npmjs registry.
- Fix nodeignore to ignore .yarn folder.

## Version 1.0.19

🔧 Bugfix:

- Fix some emoji in changelog.
- Fix yarnrc file to publish on npmjs registry.
- Fix nodeignore to ignore .yarn folder.

## Version 1.0.18

🌟 Improvements:

- Change how the array response is handled.
- Add the token if available in the auth context.

## Version 1.0.17

🌟 Improvements:

- Add documentation decorators to document response arrays.

## Version 1.0.16

🌟 Improvements:

- TypeORM support for timezone.

## Version 1.0.15

🔧 Fixes:

- TypeORM bigint string as integer fixes.

## Version 1.0.14

🔧 Fixes:

- Add the session middleware to the middlewares list.

## Version 1.0.13

🌟 Improvements:

- Allow session store to be configured by the User.

🔧 Fixes:

- Add missing session required for passport.

## Version 1.0.12

🌟 Improvements:

- TypeORM connections now have a name.

## Version 1.0.11

🌟 Improvements:

- Document the exported interfaces for Express.
- Add options to document enums.
- Add the TypeORM instance object to be able to connect to multiple databases.
- Add documentation to TypeORM handler class.

## Version 1.0.10

🌟 Improvements:

- Swagger Array parameters now support custom types.
- Add custom path prefix decorator (`custom(path: string)`).
- Allow to set the validtor using a setter.
- Add express types for export from HTTP Types.

## Version 1.0.9

🔧 Fixes:

- Issues with documentation generator for query.

🌟 Improvements:

- Add changelog information.

## Version 1.0.8

🔧 Fixes:

- Issue with Query Parameters definition in Swagger

## Version 1.0.7

🔧 Fixes:

- Change the default publish command to publish patch versions.

🌟 Improvements:

- Add Query Parameters fetching helper functions.

## Version 1.0.6

🌟 Improvements:

- Add `logout` method to the `IAuthContext` interface and the `authContext` options.
- Change the naming of the `req` and `res` properties to `request` and `response`.

## Version 1.0.5

🌟 Improvements:

- Allow the `IUser` interface to contain multiple keys.

## Version 1.0.4

🔧 Fixes:

- Configuration loading.

## Version 1.0.3

🔧 Fixes:

- Error message translation fixes.

## Version 1.0.2

🔧 Fixes:

- Issues with publishing script.

🌟 Improvements:

- Move the middleware declaration up in the stack.

## Version 1.0.1

🚀 New:

- Allow the user to init the framework without connecting to the database (Required for TypeORM CLI configuration)
- Enable/Disable TypeORM logging

🔧 Fixes:

- Issues with publishing script

🌟 Improvements:

- Disable the TypeORM syncing

## Version 1.0.0

Initial application release.

- MongoDB already configured to be used
- Relational Database ready using TypeORM
- Authentication using Bearer Token and Basic Auth available
- Email Sending system:
  - NodeMailer
  - SMTP Transport
  - Test Transport (ethereal email address)
- SMS Sending system: (requires Phone Number and account key and secret)
  - Twilio Transport
  - Vonage Transport
- i18n support using i18next
- auto-documentation of exposed endpoints in OpenAPI3 format
  - ability to show/hide the documentation
  - Swagger UI connected to the OpenAPI file
  - Postman JSON file exposable from the application
- CORS enable
- File upload middlewares
- Logging system with various transports:
  - Console
  - File
- Scheduler system to schedule jobs in CRONTAB format
- Multi Factor Authentication system
  - Simple Code base
  - Using the Google Authenticator (or Compatible application)
- QRCode generator
- UUID V1 and V4 generator
- Shortid generator
