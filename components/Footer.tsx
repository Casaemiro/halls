import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-[80%] mx-auto mt-[30px] flex-col border-t border-t-gray-300">
      <div className="flex flex-row gap-3 w-[90%] flex-wrap mx-auto justify-center">
        <Link href={"/auth"}>
          <div className=" py-2 px-3 hover:cursor-pointer text-[12px] font-[500]">
            dashboard
          </div>
        </Link>
        <Link href={"/auth"}>
          <div className=" py-2 px-3 hover:cursor-pointer text-[12px] font-[500]">
            about
          </div>
        </Link>
        <Link href={"/auth"}>
          <div className=" py-2 px-3 hover:cursor-pointer text-[12px] font-[500]">
            contact
          </div>
        </Link>
        <Link href={"/auth"}>
          <div className=" py-2 px-3 rounded hover:cursor-pointer text-[12px] font-[500]">
            sign up
          </div>
        </Link>
        <Link href={"/auth"}>
          <div className=" py-2 px-3 rounded hover:cursor-pointer text-[12px] font-[500]">
            sign in
          </div>
        </Link>
      </div>
      <div className="flex py-3 flex-row text-[12px] gap-3 w-[80%] items-center flex-wrap mx-auto justify-center">
       <div><span className="font-[800]">&copy;</span>copyright2023 Powered by <Link href={"/"} className="underline">AkonehSilas</Link></div>
      </div>
    </div>
  );
}
