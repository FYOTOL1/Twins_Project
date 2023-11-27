import React from "react";
import Login from "../../components/auth/Login";
export default function loginPage() {
  return (
    <>
      <div className="page bg-[#1f2937] px-2 container flex justify-center items-center">
        <div className="w-full max-w-[500px]">
          <Login />
        </div>
      </div>
    </>
  );
}
