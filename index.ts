import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import paymentRouter from './src/routes/payment.route';
import { PORT } from './src/utils/config';
import bodyParser from 'body-parser';

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/payment', paymentRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
