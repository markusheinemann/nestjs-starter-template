# NestJs Starter Template

NestJs starter template with some useful tweaks out of the box. I use this template for my private
NestJs applications.

## Features

- Replaces `@nestjs/platform-express` with `@nestjs/platform-fastify`
- Prisma database tooling preinstalled
- Database helper to create [Twitter Snowflake](https://developer.twitter.com/en/docs/twitter-ids) ids
- Setup `@nestjs/config` to use the `ConfigurationService`
- Adjust eslint/prettier settings
  - set max line length to 100
- SwaggerUi setup
- Preinstalled [faker.js](https://github.com/marak/Faker.js/) to generate mock data in test