import { useRouter } from "next/router";
import { halls } from "@/data";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export default function Halls() {
  console.log(Array(3).length);
  const [searchText, setSearchText] = useState("");
  const [typing, setTyping] = useState(false);
  const [filter, setFilter] = useState(false);

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
                  elem.hallName.toLowerCase().includes(searchText.toLowerCase())
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
                    {elem.hallName}
                  </div>
                );
              })}
          </div>
        )}
      <div className="flex flex-row max-w-[1300px] px-[10px] mx-auto justify-between gap-2 py-4 items-center">
        <input
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onClick={() => {
            setTyping(true);
          }}
          className="p-2 rounded bg-white h-[40px] outline-none w-[80%]"
        />
        <div onClick={()=>{
          setFilter(!filter)
        }} className=" rounded flex p-1 border border-white items-center gap-2 justify-center h-[40px]">
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
          {/* <svg
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
          </svg> */}
        </div>
      </div>
      {filter && (
        <div className="flex flex-wrap max-w-[1300px] items-end px-[10px] pb-4 mx-auto sm:justify-end justify-between gap-2 text-[12px]">
          <div className="border p-1 py-2 h-full w-[150px] border-white rounded flex justify-between gap-4">
            Buea{" "}
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
          <fieldset className=" border border-white rounded">
            <legend className="text-[10px] ml-1">sitting capacity</legend>
            <input
              className=" bg-transparent p-1 w-[80px] outline-none"
              placeholder="capacity"
            />
          </fieldset>
          <fieldset className=" border border-white rounded">
            <legend className="text-[10px] ml-1">Max-Price</legend>
            <input
              className=" bg-transparent p-1 w-[80px] outline-none"
              placeholder="price..."
            />
          </fieldset>
        </div>
      )}
      <div className="flex flex-wrap max-w-[1300px] px-[10px] mx-auto justify-between gap-2">
        {/* {halls?.map((elem, index) => {
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
              <div className="flex flex-row justify-between w-full">
                <div className="flex items-center gap-1">
                  <div className="font-[700] flex flex-row text-[18px] line-clamp-1">
                    {elem.name}
                  </div>
                  {elem?.isVerified && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>

                <div className="flex gap-1 justify-center items-center">
                  {Array(Number(elem.rating))
                    .fill(0)
                    .map((e, index) => {
                      return (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 h-3 fill-yellow-500 text-yellow-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      );
                    })}
                  {Array(Number(5 - elem.rating))
                    .fill(0)
                    .map((e, index) => {
                      return (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 h-3 text-yellow-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      );
                    })}
                </div>
              </div>
              <div className="font-[400] text-[13px]">
                <span className="font-[600]">Capacity</span>: {elem.capacity}{" "}
                seats{" "}
                <span className="text-[9px]">
                  | 240,000FCFA per day(24hours)
                </span>
              </div>
              <div className="font-[400] flex items-center justify-start text-[13px]">
                <span className=" flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z"
                      clipRule="evenodd"
                    />
                  </svg>
                  -{elem.city}
                </span>{" "}
                -{" "}
                <span className="font-[800] text-gray-600">
                  {elem.country.toUpperCase()}
                </span>
              </div>
              <div className="font-[400] text-[13px] line-clamp-1">
                {elem.locationDescription}
              </div>
            </div>
          );
        })} */}
        {hallList?.filter((elem)=>{
          if(searchText=="" || elem?.hallName.toLowerCase().includes(searchText.toLowerCase()) || elem?.locationDescription.toLowerCase().includes(searchText.toLowerCase()) || elem?.address.toLowerCase().includes(searchText.toLowerCase()) || elem?.owner.toLowerCase().includes(searchText.toLowerCase())){
            return true
          }else{
            return false
          }
        }).map((elem, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                router.push(`/halls/${elem?.hallId}`);
              }}
              className="flex cursor-pointer flex-col md:w-[32.3%] sm:w-[49%] w-full rounded overflow-hidden"
            >
              <img
                src={elem.images[1]}
                className="  h-[200px] object-cover"
                alt="..."
              />
              <div className="flex flex-row justify-between w-full">
                <div className="flex items-center gap-1">
                  <div className="font-[700] flex flex-row text-[18px] line-clamp-1">
                    {elem.hallName}
                  </div>
                  {elem?.isVerified && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>

                <div className="flex gap-1 justify-center items-center">
                  {Array(Number(elem.rating))
                    .fill(0)
                    .map((e, index) => {
                      return (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 h-3 fill-yellow-500 text-yellow-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      );
                    })}
                  {Array(Number(5 - elem.rating))
                    .fill(0)
                    .map((e, index) => {
                      return (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 h-3 text-yellow-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      );
                    })}
                </div>
              </div>
              <div className="font-[400] text-[13px]">
                <span className="font-[600]">Capacity</span>: {elem.capacity}{" "}
                seats{" "}
                <span className="text-[9px]">
                  {/* | 240,000FCFA per day(24hours) */}
                </span>
              </div>
              <div className="font-[400] flex items-center justify-start text-[13px]">
                <span className=" flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z"
                      clipRule="evenodd"
                    />
                  </svg>
                  -{elem.city}
                </span>{" "}
                -{" "}
                <span className="font-[800] text-gray-600">
                  {elem.country.toUpperCase()}
                </span>
              </div>
              <div className="font-[400] text-[13px] line-clamp-1">
                {elem.locationDescription}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
