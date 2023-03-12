import { Request, Response } from 'express';
import { stripe } from '../utils/stripe';

export async function create(req: Request, res: Response) {
  const { items } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: (items as Product[]).reduce(
      (accumulator, current) => accumulator + current.price,
      0
    ),
    currency: 'sgd',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
