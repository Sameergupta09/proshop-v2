import dotenv from 'dotenv';
import Razorpay from 'razorpay';
dotenv.config();

const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, RAZORPAY_API_URL } = process.env;

/**
 * Create an instance of Razorpay with API Key ID and Secret.
 */
const razorpayInstance = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_KEY_SECRET,
});

/**
 * Fetches a Razorpay payment order by its ID.
 * @param {string} razorpayOrderId - The Razorpay order ID to be fetched.
 * @returns {Promise<Object>} The payment order details if successful.
 * @throws {Error} If the request is not successful.
 */
export async function getRazorpayPayment(razorpayOrderId) {
  try {
    const orderData = await razorpayInstance.orders.fetch(razorpayOrderId);
    return orderData;
  } catch (error) {
    console.error('Failed to get payment details:', error);
    throw new Error('Failed to fetch Razorpay order');
  }
}

/**
 * Verifies a Razorpay payment signature.
 * @see {@link https://razorpay.com/docs/payment-gateway/web-integration/standard/#step-4-verify-signature}
 *
 * @param {string} razorpayOrderId - The Razorpay order ID.
 * @param {string} razorpayPaymentId - The Razorpay payment ID.
 * @param {string} razorpaySignature - The Razorpay payment signature.
 * @returns {boolean} Returns true if the signature is valid, false otherwise.
 */
export async function verifyRazorpayPayment(razorpayOrderId, razorpayPaymentId, razorpaySignature) {
  try {
    const generatedSignature = razorpayInstance.utils.getPaymentSignature({
      order_id: razorpayOrderId,
      payment_id: razorpayPaymentId,
    }, RAZORPAY_KEY_SECRET);

    return generatedSignature === razorpaySignature;
  } catch (err) {
    console.error('Signature verification failed:', err);
    throw new Error('Failed to verify payment signature');
  }
}

/**
 * Checks if a Razorpay transaction is new by comparing the payment ID with existing orders in the database.
 *
 * @param {Mongoose.Model} orderModel - The Mongoose model for the orders in the database.
 * @param {string} razorpayPaymentId - The Razorpay payment ID to be checked.
 * @returns {Promise<boolean>} Returns true if it is a new transaction (i.e., the payment ID does not exist in the database), false otherwise.
 * @throws {Error} If there's an error in querying the database.
 */
export async function checkIfNewRazorpayTransaction(orderModel, razorpayPaymentId) {
  try {
    const orders = await orderModel.find({
      'paymentResult.razorpay_payment_id': razorpayPaymentId,
    });
    return orders.length === 0;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to check transaction in the database');
  }
}
