import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import productsRouter from './routes/products';

const app = express();

app.use(helmet());

const allowedOrigins: string[] = ['http://localhost:3000'];

const options: cors.CorsOptions = {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
      'Authorization'
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: allowedOrigins,
    preflightContinue: false,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors(options));

app.use(express.json());

app.get('/ping', (_req, res) => {
    res.send('PONG');
});

app.use('/api/v1/products', productsRouter);

export default app;