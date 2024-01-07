import { Metadata } from "next";
import Link from "next/link";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

function Blog({}: Props) {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Blog Page</h1>
    </>
  );
}

export default Blog;
