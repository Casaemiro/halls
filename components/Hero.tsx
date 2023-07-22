import Link from "next/link";

export default function Hero() {
    
  return (
    <div className="flex w-full justify-center gap-4 px-[30px] md:px-[100px] py-[100px] sm:flex-row flex-col ">
        <div className="text-[24px] md:text-[40px] font-[800] max-w-[400px]">Find and book the best hall for your event with ease</div>
        <div className="max-w-[500px] lg:w-[700px] rounded border border-sky-500 h-[250px]"></div>
     
    </div>
  );
}
