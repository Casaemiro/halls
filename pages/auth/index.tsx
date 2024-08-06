import Loader from "@/components/Pricing";
import { signIn } from "@/utils/functions/authentication";
import { useState } from "react";

export default function Authen() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col shadow-xl gap-2 rounded-xl mx-auto w-full max-w-[400px] p-8 mt-[120px]">
      {/* <div className="text-[14px]">Enter Sign in details</div>
      <input
        type={"text"}
        placeholder="Username"
        className=" bg-transparent border border-gray-300 p-2 rounded flex items-center focus:outline-sky-400"
      />
      <input
        type={"text"}
        placeholder="Password"
        className="bg-transparent border border-gray-300 p-2 rounded flex items-center"
      />
      <button
        placeholder="Password"
        className="bg-blue-300 p-2 rounded flex justify-center hover:bg-blue-200 font-[700] text-gray-900"
      >
        SUBMIT
      </button> */}
      <div className="w-full h-[200px] bg-black/5 rounded-xl"></div>
      <div placeholder="Password" className="p-2 flex justify-center">
        OR
      </div>
      <button
        onClick={() => {
          setLoading(true);
          signIn().finally(() => {
            setLoading(false);
          });
        }}
        placeholder="Password"
        className="bg-blue-300 p-3 items-center gap-4 rounded-xl shadow-xl hover:shadow-none flex justify-center hover:bg-blue-200 font-[700] text-gray-900"
      >
        <img src="/google_icon.svg" className="w-9 h-9" />
        Sign in with Google
      </button>
      {loading && <Loader />}
    </div>
  );
}
