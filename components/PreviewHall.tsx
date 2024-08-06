import Link from "next/link";

export default function PreviewHall() {
  return (
    <div className="flex w-full h-full flex-col">
      <div className="bg-black/5 p-2 overflow-scroll flex gap-2 rounded-xl w-full min-h-[150px]">
        {Array(8)
          .fill(8)
          .map((elem, index) => (
            <div
              key={index}
              className="bg-black/5 rounded-xl min-w-[150px] h-full"
            ></div>
          ))}
      </div>
      <div className="py-2 w-full h-full flex items-center justify-center">
        You can go back and verify the input before creating the property.
      </div>
    </div>
  );
}
