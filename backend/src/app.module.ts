import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { config, configSchema } from '@wallet/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: config,
      validationSchema: configSchema,
    }),
  ],
})
export class AppModule {}
