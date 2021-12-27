/* eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51KB7i7ErJHfXsveUncxNR9it1kyD1HJN3UpHxE1Z02XbsnaoYiyD2nIc8clovffoOCIHP3NHGyA1O0TMgKz5PZWp00VKW7NaGO'
);

export const bookTour = async tourId => {
  // 1) Get session from server
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    console.log(session);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
