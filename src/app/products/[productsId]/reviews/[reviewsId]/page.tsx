import React from "react";
import { notFound } from "next/navigation";

function RewDetail({
  params,
}: {
  params: {
    productsId: string;
    reviewsId?: string;
  };
}) {
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Reviews for {params.reviewsId} and products for {params.productsId}{" "}
    </h1>
  );
}

export default RewDetail;
