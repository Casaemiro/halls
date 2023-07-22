import { useRouter } from "next/router";
import { halls } from "@/data";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export default function Halls() {
  console.log(Array(3).length);
  const [searchText, setSearchText] = useState("");
  const [typing, setTyping] = useState(false);

  const [hallList, setHallList] = useState<any[]>([]);
  function genArr(a: number) {
    let emptArr: any[] = [];
    for (let index = 0; index < a; index++) {
      emptArr.push(1);
    }
    return emptArr;
  }
  async function getCities() {
    const citiesCol = collection(db, "halls");
    const citySnapshot = await getDocs(citiesCol).then((elem) => {
      const cityList = elem.docs.map((doc) => doc.data());
      setHallList(cityList);
    });
    // return cityList;
  }

  useEffect(() => {
    getCities();
  }, []);

  // console.log(hallList);
  const router = useRouter();
  return (
    <>
      {hallList.filter((elem) => {
        if (elem.hallName.toLowerCase().includes(searchText.toLowerCase())) {
          return true;
        } else {
          // setTyping(false);
          return false;
        }
      }).length > 0 &&
        typing &&
        searchText.length != 0 && (
          <div className="absolute top-[140px] left-[20px] p-1 rounded bg-slate-400 text-black">
            {hallList
              .filter((elem) => {
                if (
                  elem.name.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return true;
                } else {
                  // setTyping(false);
                  return false;
                }
              })
              .map((elem, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setSearchText(elem.hallName);
                      setTyping(false);
                    }}
                    className="py-1 border-b border-b-gray-500 hover:bg-gray-400 cursor-pointer"
                  >
                    {elem.name}
                  </div>
                );
              })}
          </div>
        )}
      <div className="flex flex-row max-w-[1300px] px-[10px] mx-auto justify-between gap-2 py-4 items-center">
        <input className="p-2 rounded bg-white h-[40px] outline-none w-[80%]" />
        <div className=" rounded flex p-1 border border-white items-center gap-2 justify-center h-[40px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 rounded p-1 bg-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 rounded p-1 bg-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-wrap max-w-[1300px] px-[10px] mx-auto justify-between gap-2">
        {hallList?.map((elem, index) => {
          return (
            <div
              key={index}
              className="flex flex-col md:w-[32.3%] sm:w-[49%] w-full rounded overflow-hidden"
            >
              <img
                src={elem.images[1]}
                className="  h-[200px] object-cover"
                alt="..."
              />
              <div className="flex flex-row">
                <div className="font-[700] text-[18px]">{elem.hallName}</div>
              </div>
              <div className="font-[400] text-[13px]">
                <span className="font-[600]">Capacity</span>: {elem.capacity} seats{" "}
                <span className="text-[9px]">
                  | 240,000FCFA per day(24hours)
                </span>
              </div>
              <div className="font-[400] text-[13px]">
                <span className="font-[600]">Location</span>:{elem.locationDescription}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
