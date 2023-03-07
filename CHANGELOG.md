# OneBE Framework Changelog

Here we will note all the changes made to the framework.

## Version 2.6.16

🔧 Bugfix:

- In getAllPaginated return the right page when requesting a page that doesn't exists.

## Version 2.6.15

🔧 Bugfix:

- Fix types for get functions.

## Version 2.6.14

🔧 Bugfix:

- Revert TypeORM 0.3.11

## Version 2.6.13

🔧 Bugfix:

- Fix issue with logger assignation.

## Version 2.6.12

🔧 Bugfix:

- Return the full entity after insert/update.
- Possible issue with logs level setter.

## Version 2.6.11

🔧 Bugfix:

- Migrate from save to update and insert methods.

## Version 2.6.10

🌟 Improvements:

- Dependencies version bump

🔧 Bugfix:

- Fix documentation of the OneToOne and ManyToMany relation.
- Fix Changelog versioning.

## Version 2.6.9

🔧 Bugfix:

- Add the inverse side for OneToOne relation.

## Version 2.6.8

🌟 Improvements:

- Dependencies version bump

## Version 2.6.7

🔧 Bugfix:

- Fix some issues with the where checks on the get with clause.

## Version 2.6.6

🌟 Improvements:

- Dependencies version bump
- Add the sender header/flag for emails.

🔧 Bugfix:

- Fix the way computations are done for hasNext in paged responses.

## Version 2.6.5

🔧 Bugfix:

- Fix the file naming when downloading files.

## Version 2.6.4

🌟 Improvements:

- Add a list of basic mime types that can be used for Content-Type.
- Add support to give the file a name when it is downloaded.

## Version 2.6.3

🌟 Improvements:

- Add function to generate a path to the temp folder.
- Add function to generate a random string with a given length.

🔧 Bugfix:

- Fix an error with the random number generator.

## Version 2.6.2

🔧 Bugfix:

- Fix an error with the loaded configuration.

## Version 2.6.1

🌟 Improvements:

- Add error handling for database methods. Now the messages sent by the database aren't exposed directly to
  the user.
- Add method to fetch deleted items.

## Version 2.6.0

🚀 New:

- Add support for sqlite.

🌟 Improvements:

- Add virtual column to the decorators.

## Version 2.5.2

🔧 Bugfix:

- Fix an error in the inverted relation.

## Version 2.5.1

🔧 Bugfix:

- Fix an error in the relation delete query.

## Version 2.5.0

🚀 New:

- Add support to work with relations from the services, without the need of an entity - can be used to avoid a TypeORM error when
  generating the query for insertion into the Many-to-Many table.

🌟 Improvements:

- Dependencies version bump

## Version 2.4.14

🌟 Improvements:

- Add support for definition of basic types in the body definition.

## Version 2.4.13

🔧 Bugfix:

- Helmet blocks images loading from external URL.

## Version 2.4.12

🔧 Bugfix:

- Changelog version
- Correct parameter naming in the URL

## Version 2.4.11

🔧 Bugfix:

- Add support for parameters in the route definition.

## Version 2.4.10

🌟 Improvements:

- Add support for Binary file returning for OpenAPI definition.

## Version 2.4.9

🔧 Bugfix:

- Fix the destination variable used for file storage.

## Version 2.4.8

🌟 Improvements:

- Add method to get a valid URL from the configuration files (Config.url).

🔧 Bugfix:

- Add missing http.frontend configuration variable.
- Fix documentation in Env class.

## Version 2.4.7

🔧 Bugfix:

- Fix the way Migration messages are shown on screen.

## Version 2.4.6

🔧 Bugfix:

- Fix an issue with soft delete.

## Version 2.4.5

🌟 Improvements:

- Add methods to support soft deletion in repository.
- Add method to restore a soft deleted element.

🔧 Bugfix:

- Fix an issue with the folder definition of a service.

## Version 2.4.4

🔧 Bugfix:

- Config isn't loaded correctly into the CLI Commands.
- Files with custom service and repository isn't generated correctly.

## Version 2.4.3

🔧 Bugfix:

- Config isn't loaded into the CLI Commands.
- Correct the Changelog versions.

## Version 2.4.2

🔧 Bugfix:

- Fix some issues with the service:create command options (--class).

## Version 2.4.1

🔧 Bugfix:

- Fix some issues with the service:create command options (--validator considered --version).

## Version 2.4.0

🚀 New:

- Add support to define additional services that can be used as base to generate services files.

## Version 2.3.0

🚀 New:

- Add a method to easily clone a service and pass some new property values to it.
- Add a method to get the cloned service from the service loader, together with a cached version of the service.
- Add support for Unit Testing

🔧 Bugfix:

- Fix some documentation for the Documentation Route.
- Fix an issue with the BaseEntity functionality. Add a method to create the entity.

## Version 2.2.5

🔧 Bugfix:

- Fix an issue with how swagger information is shown on screen.

## Version 2.2.4

🚀 New:

- Additional information shown on the swagger page.
- Add decorators that allow the definition of this information.

🔧 Bugfix:

- Fix issues with query item fetching.
- Fix an issue with auth context logout function.

## Version 2.2.3

🔧 Bugfix:

- Fix issues with the truncate table command - reverted to DELETE FROM <table> statement.
- Fix issues with HTTP Server.

## Version 2.2.2

🔧 Bugfix:

- Fix issues with the truncate table command.

## Version 2.2.1

🔧 Bugfix:

- Fix issues with the exported types.

## Version 2.2.0

🚀 New:

- Add support to make bulk inserts into the database using seeds command.
- Export the option to get a Twilio Client.
- Export the option to get a Vonage Client.

🌟 Improvements:

- Bump versions.
- Upgrade yarn to 3.3.0.
- Update the code documentation.
- Update the way imports are done.
- Update the Vonage SMS sending system.

## Version 2.1.10

🌟 Improvements:

- Cleanup the code.

🔧 Bugfix:

- Fix an issue when calling the logout method.

## Version 2.1.9

🔧 Bugfix:

- Fix an issue with the extension generation in documentation.

## Version 2.1.8

🔧 Bugfix:

- Fix an issue with the folder structure generator for the service creation.

## Version 2.1.7

🌟 Improvements:

- Entity extension supports multiple extension points for an entity.

🔧 Bugfix:

- Fix an issue with the folder structure generator for the service creation.

## Version 2.1.6

🌟 Improvements:

- Export the language used in the request.

## Version 2.1.5

🔧 Bugfix:

- Fix an issue with the ServiceFullRepository.

## Version 2.1.4

🌟 Improvements:

- Bump versions.

🔧 Bugfix:

- Fix an issue with the fixed size number generation.
- Fix an issue with the extension ladder.
- Fix an issue with the ServiceFullRepository.

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
