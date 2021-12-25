import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger相关文档配置
  const swagger = new DocumentBuilder()
    .setTitle('nest-demo api doc')
    .setDescription('api document')
    .setVersion('v0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
