const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPvUIACIxkl5N82pYZHvvPrnX98jgum7bMk2d2tsRWGgB8zC6CX5NJQ5VIM4mz92APrX59hBdVW9oNKDdCnILcC00cQ14oxCW"
);

//?-API

//?-App config
const app = express();
//?-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//?-API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received Boom!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //?subinits of the currency
    currency: "usd",
  });

  //? 201 OK- Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//?-Listen command

exports.api = functions.https.onRequest(app);

//?Exapmle endpoint
//http://localhost:5001/clone-105a2/us-central1/api
