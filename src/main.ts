import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { envs } from './config';

async function bootstrap() {
  const logger = new Logger('Orders-MS');

  const app = await NestFactory.create(AppModule);

  await app.listen(envs.port);
  logger.log(`Orders-MS is running on port ${process.env.port}`);
}
bootstrap();
