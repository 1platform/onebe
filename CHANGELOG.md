# OneBE Framework Changelog

Here we will note all the changes made to the framework.

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
