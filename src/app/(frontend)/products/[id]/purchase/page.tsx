import db from "@/db/db";
import { notFound } from "next/navigation";
import React from "react";
import Stripe from "stripe";
import CheckOutForm from "../_component/CheckOutForm";

const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY));
async function PurchasePage({ params: { id } }: { params: { id: string } }) {
  const product = await db.product.findUnique({
    where: { id },
  });

  if (!product) {
    return notFound();
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: product.priceInCents,
    currency: "INR",
    metadata: { productId: product.id },
  });

  if (!paymentIntent) {
    throw new Error("Failed to create payment intent");
  }

  return (
    <CheckOutForm
      product={product}
      clientSecret={paymentIntent.client_secret}
    />
  );
}

export default PurchasePage;
