# OneBE Framework

- Codename: No one knows yet...
- Version: v1.0.30

This is a framework that we use internally at Spark Dev for most of our internal applications. To help others build
applications fast using Typescript we published this framework free to use. The license under which we publish the code
is MIT.

If you find bugs while using our framework, please file an issue in
[Github](https://github.com/spark-development/onebe/issues).

Also, if you manage to solve some issues, please create a Pull Request with the changes.

While this package is the framework base, we created an additional project with
a [base project](https://github.com/spark-development/onebe-project) that you can use as the starter for your
application: https://github.com/spark-development/onebe-project

In the future we want to expose a command that will allow you to create a new project more easily from our base project.

## Features of the framework:

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

