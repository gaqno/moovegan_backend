import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppLogger } from './app.logger';

async function App() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useLogger(app.get(AppLogger) as AppLogger);
  const options = new DocumentBuilder()
    .setTitle('MooVegan services')
    .setDescription('The MooVegan API Rules')
    .setVersion('1.0')
    // .addBearerAuth()
    .build();

  app.setGlobalPrefix('/v1');

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('v1/docs', app, document);

  await app.listen(3001);
  console.log('runing on port 3001')
}
App();
