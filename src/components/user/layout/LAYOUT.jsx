import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function LAYOUT({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
