import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.port || 5000;
  // @ts-ignore
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT, () => console.log('Server started on port = ${PORT}'));
}

start();
