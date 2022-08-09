import {ExpressAdapter, NestExpressApplication} from '@nestjs/platform-express';
import {NestFactory} from '@nestjs/core';
import * as express from 'express';
import * as functions from 'firebase-functions';
import {AppModule} from './app/app.module';
const server: express.Express = express();
export const createNestServer = async (expressInstance: express.Express) => {
  console.log("test action!!")
  const adapter = new ExpressAdapter(expressInstance);
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule, adapter, {},
  );
  app.enableCors();
  return app.init();
};
createNestServer(server)
  .then(v => console.log('Nest Server Ready...'))
  .catch(err => console.error('Nest broken', err));
export const api: functions.HttpsFunction = functions.region('europe-west1').https.onRequest(server);