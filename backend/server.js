const express = require("express");
const app = express();  // Added parentheses here
const { SECRET_KEY } = require("./secret");

const stripe = require("stripe")(SECRET_KEY);

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Request-Method", "*");

    next();
});

app.get("/secret/:amt", async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "eur",
            amount: req.params.amt * 100,
            automatic_payment_methods: { enabled: true },
        });
        const intent = paymentIntent;
        res.status(200).send({ client_secret: intent.client_secret });
    } catch (error) {
        console.error("Error creating payment intent:", error);
        res.status(500).send({ error: "Failed to create payment intent" });
    }
});

app.listen(8080, () => {
    console.log("Running on port 8080");
});
