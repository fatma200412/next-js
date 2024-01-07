import React from "react";

type Props = {};

function Slug({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Docs for first {params.slug[0]} and for second {params.slug[1]}{" "}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Docs for first: {params.slug[0]}</h1>;
  }
  return <h1>Slug page</h1>;
}

export default Slug;
