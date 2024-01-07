import Link from "next/link";
import React from "react";

type Props = {};

function Products({}: Props) {
  const productId = 100;
  return (
    <>
      <h1>Product List</h1>
      <p>
        <Link href="products/1">Product 1</Link>
      </p>
      <p>
        <Link href="products/2">Product 2</Link>
      </p>
      <p>
        <Link href="products/3">Product 3</Link>
      </p>

      <p>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </p>
    </>
  );
}

export default Products;
