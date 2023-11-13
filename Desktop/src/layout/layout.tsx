import Header from "@/components/Header";
import Head from "next/head";
import React, { ReactNode } from "react";

interface Layout {
  children: ReactNode;
}

const Layout = ({ children }: Layout) => {
  return (
    <>
      <Head>
        <title>Flexy</title>
        <meta name="description" content="Flexy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
