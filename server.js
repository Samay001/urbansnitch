import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import dotenv from "dotenv";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const stripe = require("stripe")(
  "sk_test_51OiEITSB0hgPpt6fZF8r5mSR33S5fHyOjqcuMx6IgGlvBhVrYzF7oFfp2ZJ0eHXereuuwqaagcsZyGQVnZR0PAA700xjzHmhFP"
);

dotenv.config();

// Connect to database
connectDB();

// Create Express app
const app = express();

// Set port
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoute);

// Route for creating orders and initiating checkout session
app.post("/api/v1/orders", async (req, res) => {
  let products = req.body;
  products = products.products;
  console.log(products);

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
      },
      unit_amount: (product.price*100),
    },
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/falied",
  });

  res.json({ id: session.id });
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgCyan.white);
});



