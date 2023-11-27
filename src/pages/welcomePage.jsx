import React from "react";
import LAYOUT from "../components/user/layout/LAYOUT";
import Welcome from "../components/Welcome";

export default function homePage() {
  return (
    <>
      <LAYOUT>
        <Welcome />
      </LAYOUT>
    </>
  );
}
