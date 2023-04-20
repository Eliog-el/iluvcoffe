import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
      whitelist: true, //handling malicious request
      transform: true, // auto-transform payload to DTO instance
      forbidNonWhitelisted: true
    })
  );   // to validate payload coming into the app (works with dto)
  await app.listen(3000);
}

bootstrap();
