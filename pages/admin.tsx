import { useRouter } from "next/router";
import { halls } from "@/data";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import Link from "next/link";
import hall from "./hall";
import { useSearchParams } from "next/navigation";
import Pricing from "@/components/Pricing";
import PreviewHall from "@/components/PreviewHall";
import EditHall from "@/components/EditHall";

export default function Admin() {
  const [hallName, setHallName] = useState("");
  const [createHallTab, setCreateHallTab] = useState(1);
  const [business, setBusiness] = useState("");
  const [createBusiness, setCreateBusiness] = useState(false);
  const [authModal, setAuthModal] = useState(true);
  const [showHallList, setShowHallList] = useState(true);
  const [addHall, setAddHall] = useState(false);
  const tab = useSearchParams().get("tab");
  const router = useRouter();
  return (
    <div>
      {!business ? (
        <div className="flex flex-col gap-2 w-full max-w-[1200px] mx-auto">
          <div className="flex items-center italic text-xs gap-2 p-3">
            <div className="text-black/30">businesses</div>
          </div>
          <div className="grid w-full mx-auto max-w-[1200px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 px-3">
            <div
              onClick={() => {
                setBusiness("dfj23o3hdsaadd832");
                router.push("/admin?tab=halls");
              }}
              className="rounded-xl p-3 h-44 bg-black/5 border cursor-pointer hover:border-black/40 border-black/10"
            ></div>
            <div
              onClick={() => {
                setCreateBusiness(true);
              }}
              className="rounded-xl p-3 h-44 bg-black/5 border cursor-pointer border-dashed hover:border-black/80 flex items-center justify-center flex-col gap-3 border-black/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <div>Add Business</div>
            </div>
            {createBusiness && (
              <div className="absolute p-2 top-0 left-0 w-full backdrop-blur-sm h-full flex items-center justify-center bg-black/40">
                <div className="bg-white rounded-xl overflow-hidden w-full max-w-[800px] grid md:grid-cols-2 grid-cols-1 h-[500px]">
                  <div className="flex flex-col gap-3 p-6">
                    <div className="font-bold text-xl">
                      Enter business details
                    </div>
                    <fieldset className="border rounded-xl hover:border-black/50">
                      <legend className="text-xs ml-4 px-2">
                        Business name
                      </legend>
                      <input
                        type="text"
                        className="w-full outline-none p-3 rounded-xl"
                        placeholder="Enter business name"
                      />
                    </fieldset>
                    <fieldset className="border rounded-xl hover:border-black/50">
                      <legend className="text-xs ml-4 px-2">
                        Phone number
                      </legend>
                      <input
                        type="text"
                        className="w-full outline-none p-3 rounded-xl"
                        placeholder="Enter phone number"
                      />
                    </fieldset>
                    <fieldset className="border rounded-xl hover:border-black/50">
                      <legend className="text-xs ml-4 px-2">Country</legend>
                      <input
                        type="text"
                        className="w-full outline-none p-3 rounded-xl"
                        placeholder="Enter Country"
                      />
                    </fieldset>
                    <fieldset className="border rounded-xl hover:border-black/50">
                      <legend className="text-xs ml-4 px-2">City</legend>
                      <input
                        type="text"
                        className="w-full outline-none p-3 rounded-xl"
                        placeholder="Enter City"
                      />
                    </fieldset>
                    <div className="flex justify-between mt-auto">
                      <button
                        onClick={() => {
                          setCreateBusiness(false);
                        }}
                        className="bg-red-400 text-white p-3 px-6 rounded-xl"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          setCreateBusiness(false);
                          setBusiness("sdfkfdlkse");
                        }}
                        className="bg-sky-500 text-white p-3 px-6 rounded-xl"
                      >
                        Create
                      </button>
                    </div>
                  </div>
                  <div className="md:flex hidden">
                    <img src="/fridafarms1.jpg" className="w-full h-full" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full flex max-w-[1200px] p-2 mx-auto h-full flex-col">
          <div className="flex items-center italic text-xs gap-2 p-3">
            <Link
              className="font-bold"
              onClick={() => {
                setBusiness("");
                setCreateBusiness(false);
              }}
              href="/admin"
            >
              businesses
            </Link>
            <div className="text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 text-black/30 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            <div className="text-black/30">Frida Farms</div>
          </div>
          <div className="w-full flex items-start gap-3 overflow-hidden max-w-[1200px] p-2 mx-auto h-full">
            <div className="max-w-[250px] min-w-[250px] flex flex-col p-2 gap-2 w-full bg-white rounded-xl">
              <div
                onClick={() => {
                  router.push("/admin?tab=halls");
                }}
                className={`hover:bg-black/10 rounded-lg p-2 w-full cursor-pointer ${
                  tab == "halls" ? " !bg-black/20" : ""
                }`}
              >
                Halls
              </div>
              <div
                onClick={() => {
                  router.push("/admin?tab=rooms");
                }}
                className={`hover:bg-black/10 rounded-lg p-2 w-full cursor-pointer ${
                  tab == "rooms" ? " !bg-black/20" : ""
                }`}
              >
                Rooms
              </div>
              <div
                onClick={() => {
                  router.push("/admin?tab=hotels");
                }}
                className={`hover:bg-black/10 rounded-lg p-2 w-full cursor-pointer ${
                  tab == "hotels" ? " !bg-black/20" : ""
                }`}
              >
                Hotels
              </div>
            </div>
            {tab == "halls" && (
              <div className="bg-white/30 p-2 overflow-hidden rounded-xl flex w-full h-full">
                {showHallList ? (
                  <div className="w-full gap-1 grid grid-cols-3 rounded-xl h-full">
                    <div
                      onClick={() => {
                        setShowHallList(false);
                      }}
                      className="rounded-xl hover:text-sky-600 p-4 flex flex-col gap-1 w-full border border-transparent hover:border-black/20 cursor-pointer"
                    >
                      <img
                        className="w-full h-32 rounded-xl object-cover"
                        src="/fridafarms1.jpg"
                      />
                      <div className="flex flex-col text-lg gap-1">
                        <div>Banquet hall Frida Farms</div>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        setAddHall(true);
                      }}
                      className="w-full cursor-pointer p-4"
                    >
                      <div className="border border-black/80 flex items-center bg-black/5 hover:shadow-xl justify-center h-32 rounded-xl border-dashed">
                        Add hall
                      </div>
                    </div>
                  </div>
                ) : (
                  <EditHall />
                )}
              </div>
            )}
            {tab == "rooms" && (
              <div className="w-full bg-white/30 p-2 gap-1 grid grid-cols-3 rounded-xl h-full">
                <div className="w-full cursor-pointer p-4">
                  <div className="border border-black/80 flex items-center bg-black/5 hover:shadow-xl justify-center h-32 rounded-xl border-dashed">
                    Add room
                  </div>
                </div>
              </div>
            )}
            {tab == "hotels" && (
              <div className="w-full bg-white/30 p-2 gap-1 grid grid-cols-3 rounded-xl h-full">
                <div className="w-full cursor-pointer p-4">
                  <div className="border border-black/80 flex items-center bg-black/5 hover:shadow-xl justify-center h-32 rounded-xl border-dashed">
                    Add Hotel
                  </div>
                </div>
              </div>
            )}
          </div>
          {addHall && (
            <div className="absolute p-2 top-0 left-0 w-full backdrop-blur-sm h-full flex items-center justify-center bg-black/40">
              <div className="bg-white rounded-xl w-full p-4 max-w-[800px] flex flex-col gap-3 h-[500px]">
                <div className="text-md flex items-center text-black/30 gap-2">
                  <span
                    onClick={() => {
                      setCreateHallTab(1);
                    }}
                    className={
                      createHallTab >= 1
                        ? "text-black cursor-pointer"
                        : "text-black/40 cursor-pointer"
                    }
                  >
                    Enter Hall details
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <span
                    onClick={() => {
                      setCreateHallTab(2);
                    }}
                    className={
                      createHallTab >= 2
                        ? "text-black cursor-pointer"
                        : "text-black/40 cursor-pointer"
                    }
                  >
                    Pricing
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <span
                    onClick={() => {
                      setCreateHallTab(3);
                    }}
                    className={
                      createHallTab >= 3
                        ? "text-black cursor-pointer"
                        : "text-black/40 cursor-pointer"
                    }
                  >
                    Complete creation
                  </span>
                </div>
                {createHallTab == 1 && (
                  <div className="flex gap-3">
                    <label
                      htmlFor="images"
                      className="border rounded-xl w-full max-w-[250px] h-[250px] cursor-pointer hover:shadow-xl flex items-center justify-center"
                    >
                      <div id="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                          />
                        </svg>
                      </div>
                      <input
                        id="images"
                        type="file"
                        multiple
                        className="hidden"
                      />
                    </label>
                    <div className="w-full flex flex-col bg-black/5 p-3 rounded-xl gap-2">
                      <div className="flex relative flex-col border rounded-xl border-black/20 hover:border-black/70 p-1">
                        {hallName != "" && (
                          <div className="text-[10px] text-black/50 absolute px-1">
                            Hall name
                          </div>
                        )}
                        <input
                          type="text"
                          value={hallName}
                          onChange={(e) => {
                            setHallName(e.target.value);
                          }}
                          placeholder="hall name"
                          className="p-2 w-full bg-transparent outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <fieldset>
                          <legend className="text-[12px]">security</legend>
                          <select className="border p-3 w-full rounded-xl outline-none">
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </fieldset>
                        <fieldset>
                          <legend className="text-[12px]">
                            Car Parking space
                          </legend>
                          <select className="border p-3 w-full rounded-xl outline-none">
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </fieldset>
                        <fieldset>
                          <legend className="text-[12px]">Indoors</legend>
                          <select className="border p-3 w-full rounded-xl outline-none">
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </fieldset>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex relative flex-col border rounded-xl border-black/20 hover:border-black/70 p-1">
                          {hallName != "" && (
                            <div className="text-[10px] text-black/50 absolute px-1">
                              Phone number
                            </div>
                          )}
                          <input
                            type="text"
                            // value={hallName}
                            onChange={(e) => {
                              // setHallName(e.target.value);
                            }}
                            placeholder="Phone number"
                            className="p-2 w-full bg-transparent outline-none"
                          />
                        </div>
                        <div className="flex relative flex-col border rounded-xl border-black/20 hover:border-black/70 p-1">
                          {hallName != "" && (
                            <div className="text-[10px] text-black/50 absolute px-1">
                              Email
                            </div>
                          )}
                          <input
                            type="email"
                            // value={hallName}
                            onChange={(e) => {
                              // setHallName(e.target.value);
                            }}
                            placeholder="email"
                            className="p-2 w-full bg-transparent outline-none"
                          />
                        </div>
                      </div>
                      <textarea
                        className="rounded-xl border border-black/20 p-3 text-xs outline-none"
                        placeholder="Location description"
                      ></textarea>
                      <div className="grid grid-cols-3 gap-3">
                        <input
                          type="number"
                          className="border p-3 outline-none rounded-xl"
                          placeholder="Capacity"
                        />
                        <input
                          type="text"
                          className="border p-3 outline-none rounded-xl"
                          placeholder="Address"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {createHallTab == 2 && <Pricing />}
                {createHallTab == 3 && <PreviewHall />}
                <div className="flex justify-between mt-auto">
                  {createHallTab == 1 && (
                    <button
                      onClick={() => {
                        setAddHall(false);
                      }}
                      className="bg-red-400 text-white p-3 px-6 rounded-xl"
                    >
                      Cancel
                    </button>
                  )}
                  {createHallTab == 2 && (
                    <button className="bg-red-400 text-white p-3 px-6 rounded-xl">
                      Back
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (createHallTab == 1) {
                        setCreateHallTab(2);
                      } else if (createHallTab == 2) {
                        setCreateHallTab(3);
                      } else if (createHallTab == 3) {
                        setCreateHallTab(1);
                        setAddHall(false);
                      }
                      // setCreateBusiness(false);
                      // setBusiness("sdfkfdlkse");
                    }}
                    className="bg-sky-500 flex items-center gap-2 text-white p-3 px-6 rounded-xl"
                  >
                    {createHallTab == 3 ? "Create" : "Next"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {authModal && (
        <div className="absolute p-2 top-0 left-0 w-full backdrop-blur-sm h-full flex items-center justify-center bg-black/40">
          <div className="bg-white overflow-hidden w-full p-8 rounded-xl max-w-[800px] h-[500px]">
            <div className="flex flex-col gap-3 mx-auto h-full max-w-[500px] rounded-xl p-4 md:p-12">
              <div
                onClick={() => {
                  setAuthModal(false);
                }}
                className="bg-sky-500 text-white w-full h-14 shadow-xl rounded-xl flex items-center justify-center cursor-pointer hover:shadow-none"
              >
                SIGN IN WITH GOOGLE
              </div>
              <div className="bg-black/20 text-white w-full h-14 rounded-xl flex items-center justify-center cursor-not-allowed">
                SIGN IN WITH FACEBOOK
              </div>
              <div className="bg-black/20 text-white w-full h-14 rounded-xl flex items-center justify-center cursor-not-allowed">
                SIGN IN WITH PHONE NUMBER
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
