import { listen } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { lastValueFrom, map, of } from 'rxjs';

import { AppModule } from '@wallet/app.module';
import { AppConfig } from '@wallet/config';

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig = app.get<AppConfig>(AppConfig);
  
  const $task = of(app).pipe(
    map(listen(appConfig.port)),
  );

  await lastValueFrom($task);
})();
