import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipes } from "./pipes/validation.pipes";

async function start() {
  const PORT = process.env.port || 5000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Тестовое задание')
    .setDescription('Тестовое задание Nest JS')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  app.useGlobalPipes(new ValidationPipes());
  await app.listen(PORT, () => console.log('Server started on port = ${PORT}'));
}

start();
