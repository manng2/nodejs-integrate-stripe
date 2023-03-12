import express, { Request, Response } from 'express';
import { create } from '../controllers/payment.controller';
import { stripe } from '../utils/stripe';

const paymentRouter = express.Router();

paymentRouter.post('/create', create);

// paymentRouter.use('/', (req: Request, res: Response) => {
//   stripe.balance.retrieve().then(console.log);
//   res.send('ok');
// });

export default paymentRouter;
