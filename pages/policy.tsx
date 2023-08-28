import { useRouter } from "next/router";
import { halls } from "@/data";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export default function Halls() {
  return (
    <div className="w-full">
      <div className="w-full text-center font-[700] text-[40px]">
        Privacy Policy
      </div>
      <div className="mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-20 h-20 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
          />
        </svg>
      </div>
      <div className="max-w-[500px] p-[20px] w-full text-center mx-auto">
        Our privacy commitments are fundamental to the way we do business. This
        applies to anyone who has a relationship with us including customers and
        business owners.
      </div>
      <div className="w-full text-center p-5">
        We do not collect money for rentals, The businesses listed on this
        platform have been listed with the concent of the hall owners and the
        information provided is valid as at when the business is un-boarded
      </div>
    </div>
  );
}
