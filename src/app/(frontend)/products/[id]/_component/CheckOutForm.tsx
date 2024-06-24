"use client";

import React, { FormEvent } from "react";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { formatCurrency } from "@/lib/formartter";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "path";

type CheckOutFormProps = {
  product: {
    imagePath: string;
    name: string;
    priceInCents: number;
    description: string;
  };
  clientSecret: string;
};

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

const CheckOutForm = ({ product, clientSecret }: CheckOutFormProps) => {
  return (
    <div className="max-w-5xl w-full mx-auto space-y-8">
      <div className="flex gap-4 items-center">
        <div className="aspect-video flex-shrink-0 w-1/3 relative">
          <Image
            src={product.imagePath}
            fill
            alt={product.name}
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-lg">
            {formatCurrency(product.priceInCents / 100)}
          </div>
          <h1 className="text-2xl">{product.name}</h1>
          <div className="line-clamp-3 text-muted-foreground">
            {product.description}
          </div>
        </div>
      </div>
      <Elements options={{ clientSecret }} stripe={stripe}>
        <Form priceInCents={product.priceInCents} />
      </Elements>
    </div>
  );
};

function handleSubmit(e: FormEvent) {
  e.preventDefault();

  if (!stripe || !elements) {
    return;
  }
}

function Form({ priceInCents }: { priceInCents: number }) {
  const stripe = useStripe();
  const elements = useElements();
  return (
    <form onSubmit={handleSubmit}>
      <Card className="p-3">
        <CardTitle>Checkout</CardTitle>
        <CardDescription className="text-destructive">
          This is a demo site. Do not enter real card details.
        </CardDescription>
        <CardContent>
          <PaymentElement />
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            size={"lg"}
            disabled={stripe == null || elements == null}
          >
            Purschase - {formatCurrency(priceInCents / 100)}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default CheckOutForm;
