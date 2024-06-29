import { PageHeader } from "@/app/admin/_components/PageHeader";
import { ProductForm } from "./_components/ProductForm";

export default function AdminProductsPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <PageHeader>Products</PageHeader>
      </div>
      <ProductForm />
    </>
  );
}
<<<<<<< HEAD

async function ProductsTable() {
  const products = await db.product.findMany({
    select: {
      id: true,
      name: true,
      priceInCents: true,
      isAvailableForPurchase: true,
      _count: { select: { orders: true } },
    },
    orderBy: { name: "asc" },
  });

  if (products.length === 0) return <p>No products found</p>;

  return (
    <>
      <h1>Add your Product</h1>
    </>
  );
}
=======
>>>>>>> 6c974ae224065b649ee0ae1fc71d3536f2c677cf
