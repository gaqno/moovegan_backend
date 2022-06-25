import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function App() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || '3001';
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
  });
}
App();
