import { Configuration } from './configuration.interface';

export const configuration = (): Configuration => ({
  databaseUrl: process.env.DB_URL,
});
