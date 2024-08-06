import Link from "next/link";
import { useState } from "react";

export default function Pricing() {
  const [priceItems, setPriceItems] = useState<any[]>([]);
  const [item, setItem] = useState("");
  const [itemPrice, setItemPrice] = useState(0);

  return (
    <div className="w-full flex flex-col gap-3 bg-black/5 p-3 h-full rounded-xl">
      <div className="w-full flex items-center gap-3">
        <input
          placeholder="Item"
          onChange={(e) => {
            setItem(e.target.value);
          }}
          className="w-full border min-w-[160px] hover:border-black/80 border-black/30 rounded-xl bg-transparent text-xs sm:text-base p-3"
        />
        <input
          placeholder="Price"
          onChange={(e) => {
            setItemPrice(Number(e.target.value));
          }}
          type="number"
          className="border w-full max-w-[200px] hover:border-black/80 border-black/30 rounded-xl bg-transparent text-xs sm:text-base p-3"
        />
        <div
          onClick={() => {
            setPriceItems([...priceItems, { item, price: itemPrice }]);
          }}
          className="flex cursor-pointer bg-black/20 hover:bg-black/30 text-xs sm:text-base p-3 rounded-xl items-center gap-1 justify-center w-[150px]"
        >
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
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span className="hidden sm:flex">Add</span>
        </div>
      </div>
      <div className="bg-black/5 rounded-xl p-3 w-full h-full">
        {priceItems.length == 0 ? (
          <div className="w-full h-full items-center justify-center flex">
            No items added
          </div>
        ) : (
          <div className="flex gap-2 flex-col w-full">
            {priceItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="grid border border-b border-b-black/20 grid-cols-3 items-center gap-3"
                >
                  <div>{item.item}</div>
                  <div>{item.price}</div>
                  <div className="text-xs text-red-500 cursor-pointer">delete</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
