import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { dump } from 'js-yaml';
import { AppModule } from './app.module';

const exportOpenAPIDocument = async () => {
  const app = await NestFactory.create(AppModule);

  const documentBuilder = new DocumentBuilder()
    .setTitle('nestjs-swagger-integration')
    .setDescription('nestjs-swagger-redocを統合して利用するサンプル')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder);
  fs.writeFileSync('./swagger-spec.yaml', dump(document, {}));
};

(async () => await exportOpenAPIDocument())();
