import { Button } from "@/components/ui/button";

import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import db from "@/db/db";
import { CheckCircle2, MoreVertical, XCircle } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { formatCurrency, formatNumber } from "@/lib/formartter";
import { PageHeader } from "@/app/admin/_components/PageHeader";
import {
  ActiveToggleDropdownItem,
  DeleteDropdownItem,
} from "./_components/ProductActions";

export default function Sell() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <PageHeader>Add your Products</PageHeader>
        <Button asChild>
          <Link href="/sell/new">Add Product</Link>
        </Button>
      </div>
      <ProductsTable />
    </>
  );
}

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
