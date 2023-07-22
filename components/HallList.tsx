import Link from "next/link";

export default function HallList() {
  const halls = [1, 2, 3, 4];
  const listOFHalls = [
    {
      name:"",
      address:"",
      price:"",
      promoPrice:"",
      hallVideo:"",
      photos:[""],
      capacity:"",
      city:"",
      description:"",
      policy:"",
      contactPhone:"",
      contactEmail:"",
      trailerVideo:"",
      HallFlyer:"",

    }
  ]
  return (
    <>
      <div className="border-b w-[78%] flex flex-row gap-3 mx-auto border-b-slate-400 font-[800] mb-10 p-1">
        <span className="opacity-60 text-[20px]">MOST POPULAR</span>{" "}
        <span className="text-sky opacity-60 font-[600] p-1 bg-sky-50 rounded px-3 text-[13px] hover:cursor-pointer">
           View more
        </span>
      </div>
      <div className="flex w-full p-3 justify-center gap-3 flex-wrap">
        {halls.map(() => (
          <div className="flex flex-col w-[320px] overflow-hidden rounded-md bg-sky-100">
            <img src="/live-sound.png" />
            <div className="p-3 flex flex-col">
              <div className="flex justify-between">
                <div className="font-[700]">Chariot Hotel Hall</div>
                <div>Buea</div>
              </div>

              <div className="font-[400] text-[13px]"><span className="font-[600]">Capacity</span>: 800 seats <span className="text-[9px]">| 240,000FCFA per day(24hours)</span></div>
              <div className="font-[400] text-[13px]">
              <span className="font-[600]">Location</span>: Check-Point Molyko Buea, by the road.
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
