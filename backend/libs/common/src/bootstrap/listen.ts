import { INestApplication } from '@nestjs/common';

export const listen = (port: number) => async (app: INestApplication) => {
  await app.listen(port);

  return app;
};
