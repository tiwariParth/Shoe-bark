import db from "@/db/db";
import { notFound } from "next/navigation";
import React from "react";

async function PurchasePage({ params: { id } }: { params: { id: string } }) {
  const product = await db.product.findUnique({
    where: { id },
  });

  if (!product) {
    return notFound();
  }
  return <div></div>;
}

export default PurchasePage;
