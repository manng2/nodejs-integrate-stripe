import Stripe from 'stripe';
import { STRIPE_API_KEY } from './config';

export const stripe = new Stripe(STRIPE_API_KEY, {
  apiVersion: '2022-11-15',
});
