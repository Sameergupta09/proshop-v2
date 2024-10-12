import dotenv from 'dotenv';
dotenv.config();
const { PAYPAL_CLIENT_ID, PAYPAL_APP_SECRET, PAYPAL_API_URL } = process.env;

/**
 * Fetches an access token from the PayPal API.
 * @see {@link https://developer.paypal.com/reference/get-an-access-token/#link-getanaccesstoken}
 *
 * @returns {Promise<string>} The access token if the request is successful.
 * @throws {Error} If the request is not successful.
 *
 */
async function getPayPalAccessToken() {
  // Authorization header requires base64 encoding
  const auth = Buffer.from(PAYPAL_CLIENT_ID + ':' + PAYPAL_APP_SECRET).toString(
    'base64'
  );

  const url = `${PAYPAL_API_URL}/v1/oauth2/token`;

  const headers = {
    Accept: 'application/json',
    'Accept-Language': 'en_US',
    Authorization: `Basic ${auth}`,
  };

  const body = 'grant_type=client_credentials';
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body,
  });

  if (!response.ok) throw new Error('Failed to get access token');

  const paypalData = await response.json();

  return paypalData.access_token;
}

/**
 * Checks if a PayPal transaction is new by comparing the transaction ID with existing orders in the database.
 *
 * @param {Mongoose.Model} orderModel - The Mongoose model for the orders in the database.
 * @param {string} paypalTransactionId - The PayPal transaction ID to be checked.
 * @returns {Promise<boolean>} Returns true if it is a new transaction (i.e., the transaction ID does not exist in the database), false otherwise.
 * @throws {Error} If there's an error in querying the database.
 *
 */
export async function checkIfNewTransaction(orderModel, paypalTransactionId) {
  try {
    // Find all documents where Order.paymentResult.id is the same as the id passed paypalTransactionId
    const orders = await orderModel.find({
      'paymentResult.id': paypalTransactionId,
    });

    // If there are no such orders, then it's a new transaction.
    return orders.length === 0;
  } catch (err) {
    console.error(err);
  }
}

/**
 * Verifies a PayPal payment by making a request to the PayPal API.
 * @see {@link https://developer.paypal.com/docs/api/orders/v2/#orders_get}
 *
 * @param {string} paypalTransactionId - The PayPal transaction ID to be verified.
 * @returns {Promise<Object>} An object with properties 'verified' indicating if the payment is completed and 'value' indicating the payment amount.
 * @throws {Error} If the request is not successful.
 *
 */
export async function verifyPayPalPayment(paypalTransactionId) {
  const accessToken = await getPayPalAccessToken();
  const paypalResponse = await fetch(
    `${PAYPAL_API_URL}/v2/checkout/orders/${paypalTransactionId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!paypalResponse.ok) throw new Error('Failed to verify payment');

  const paypalData = await paypalResponse.json();
  return {
    verified: paypalData.status === 'COMPLETED',
    value: paypalData.purchase_units[0].amount.value,
  };
}

// import express from 'express';
// import Razorpay from 'razorpay';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// app.use(express.json()); // Parse incoming JSON requests

// // Initialize Razorpay instance with environment variables
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// // Route to create an order in Razorpay
// app.post('/api/orders', async (req, res) => {
//   const { amount } = req.body; // Get the amount from the request body

//   try {
//     if (!amount) {
//       return res.status(400).json({ message: 'Amount is required' });
//     }

//     // Options to create a new order in Razorpay
//     const options = {
//       amount: amount * 100, // Razorpay expects the amount in paise (100 paise = 1 INR)
//       currency: 'INR',
//       payment_capture: 1, // Automatically capture the payment
//     };

//     // Create the order in Razorpay
//     const order = await razorpay.orders.create(options);

//     // Send back the order information
//     res.status(201).json(order);
//   } catch (error) {
//     console.error('Error creating Razorpay order:', error);
//     res.status(500).json({ message: 'Internal Server Error while creating order' });
//   }
// });

// // Route to verify the Razorpay payment
// app.post('/api/verify', async (req, res) => {
//   const { razorpayPaymentId } = req.body; // Get the Razorpay payment ID from the request body

//   try {
//     if (!razorpayPaymentId) {
//       return res.status(400).json({ message: 'Payment ID is required' });
//     }

//     // Fetch the payment details from Razorpay to verify the payment
//     const payment = await razorpay.payments.fetch(razorpayPaymentId);

//     if (payment.status === 'captured') {
//       res.status(200).json({
//         verified: true,
//         value: payment.amount / 100, // Convert back from paise to INR
//       });
//     } else {
//       res.status(400).json({
//         verified: false,
//         message: 'Payment not completed',
//       });
//     }
//   } catch (error) {
//     console.error('Error verifying Razorpay payment:', error);
//     res.status(500).json({ message: 'Internal Server Error while verifying payment' });
//   }
// });

// // Test route to check if the server is running
// app.get('/', (req, res) => {
//   res.send('Razorpay Payment API is running...');
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
