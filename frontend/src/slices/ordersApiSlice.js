import { apiSlice } from './apiSlice';
import { ORDERS_URL , PAYPAL_URL} from '../constants';

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: order,
      }),
    }),
    getOrderDetails: builder.query({
      query: (id) => ({
        url: `${ORDERS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    payOrder: builder.mutation({
      query: ({ orderId, details }) => ({
        url: `${ORDERS_URL}/${orderId}/pay`,
        method: 'PUT',
        body: details,
      }),
    }),
    getPaypalClientId: builder.query({
      query: () => ({
        url: PAYPAL_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getMyOrders: builder.query({
      query: () => ({
        url: `${ORDERS_URL}/mine`,
      }),
      keepUnusedDataFor: 5,
    }),
    getOrders: builder.query({
      query: () => ({
        url: ORDERS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    deliverOrder: builder.mutation({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}/deliver`,
        method: 'PUT',
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPaypalClientIdQuery,
  useGetMyOrdersQuery,
  useGetOrdersQuery,
  useDeliverOrderMutation,
} = orderApiSlice;



// import { apiSlice } from './apiSlice';
// import { ORDERS_URL } from '../constants';

// export const orderApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     // Create order, which now may initiate a Razorpay order
//     createOrder: builder.mutation({
//       query: (order) => ({
//         url: ORDERS_URL,
//         method: 'POST',
//         body: order,
//       }),
//     }),
//     // Get details of an individual order
//     getOrderDetails: builder.query({
//       query: (id) => ({
//         url: `${ORDERS_URL}/${id}`,
//       }),
//       keepUnusedDataFor: 5,
//     }),
//     // Pay an order using Razorpay
//     payOrder: builder.mutation({
//       query: ({ orderId, details }) => ({
//         url: `${ORDERS_URL}/${orderId}/pay`,
//         method: 'PUT',
//         body: details,
//       }),
//     }),
//     // Fetch current user's orders
//     getMyOrders: builder.query({
//       query: () => ({
//         url: `${ORDERS_URL}/mine`,
//       }),
//       keepUnusedDataFor: 5,
//     }),
//     // Fetch all orders (for admin view, for example)
//     getOrders: builder.query({
//       query: () => ({
//         url: ORDERS_URL,
//       }),
//       keepUnusedDataFor: 5,
//     }),
//     // Mark order as delivered
//     deliverOrder: builder.mutation({
//       query: (orderId) => ({
//         url: `${ORDERS_URL}/${orderId}/deliver`,
//         method: 'PUT',
//       }),
//     }),
//   }),
// });

// export const {
//   useCreateOrderMutation,
//   useGetOrderDetailsQuery,
//   usePayOrderMutation,
//   useGetMyOrdersQuery,
//   useGetOrdersQuery,
//   useDeliverOrderMutation,
// } = orderApiSlice;
