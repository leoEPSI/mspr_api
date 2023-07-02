import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const corsOptions: CorsOptions = {
    origin: true, // Permettre toutes les origines
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Configurer les méthodes HTTP autorisées
    allowedHeaders: ['Content-Type', 'Authorization'], // Configurer les en-têtes autorisés
    preflightContinue: false, // Désactiver les requêtes OPTIONS de pré-vérification
    optionsSuccessStatus: 204, // Retourner le statut 204 pour les réponses OPTIONS
  };
  app.enableCors(corsOptions);

  const config = new DocumentBuilder()
    .setTitle('API mspr')
    .setDescription('API for some data of the mspr')
    .setVersion('1.0')
    .addTag('Your API Tag')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  
  await app.listen(8081);
}
bootstrap();
