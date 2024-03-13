import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Blogging rest services')
    .setVersion('1.0')
    .setDescription("Blogging")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
      forbidNonWhitelisted: true,
      whitelist: true,
    }),
  );
  await app.listen(3000);
  console.log(`Service is running on: ${await app.getUrl()}`);
}
bootstrap();
