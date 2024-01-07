import React from "react";
import { Metadata } from "next";

interface Props {
  params: {
    productsId: string;
  };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Phone ${params.productsId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

function ProductDetail({ params }: Props) {
  return <h1>Product Detail for {params.productsId} </h1>;
}

export default ProductDetail;
