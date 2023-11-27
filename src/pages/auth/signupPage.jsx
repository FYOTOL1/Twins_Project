import React from "react";
import Signup from "../../components/auth/Signup.jsx";

export default function signupPage() {
  return (
    <>
      <div className="page bg-[#1f2937] px-2 container flex justify-center items-center">
        <div className="w-full max-w-[700px]">
          <Signup />
        </div>
      </div>
    </>
  );
}
