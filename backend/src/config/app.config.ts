import { ConfigType, registerAs } from '@nestjs/config';
import Joi from 'joi';

export const appConfigProvider = registerAs('app', () => ({
  port: +process.env.APP_PORT!,
}));

export const AppConfigSchema = {
  APP_PORT: Joi.number().default(5556),
}

export const AppConfig = appConfigProvider.KEY;

export type AppConfig = ConfigType<typeof appConfigProvider>;
