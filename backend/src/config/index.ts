import { appConfigProvider, AppConfigSchema } from '@wallet/config/app.config';
import Joi from 'joi';

export { AppConfig } from '@wallet/config/app.config';

export const config = [
  appConfigProvider,
];

export const configSchema = Joi.object({
  ...AppConfigSchema,
});
