import Link from "next/link";
import { useState } from "react";

export default function EditHall() {
  const [hallName, setHallName] = useState("");
  return (
    <div className="flex flex-col gap-3 p-4 w-full h-full">
      <div className="w-full flex gap-3 overflow-scroll">
        {Array(7)
          .fill(2)
          .map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[200px] w-full rounded-xl min-w-[200px] h-[200px] bg-black/10"
              ></div>
            );
          })}
      </div>
      <div className="flex flex-col max-w-[500px] gap-3">
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
            <legend className="text-[12px]">Car Parking space</legend>
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
      <div className="w-full flex justify-end">
        <button className="text-white p-4 px-8 bg-sky-500 rounded-xl">SAVE</button>
      </div>
    </div>
  );
}
