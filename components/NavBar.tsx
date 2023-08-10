import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NavBar({ setSearchPage }: any) {
  const [searchText, setSearchText] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  // const [typing, setTyping] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (searchText !== "") {
      setSearchPage(true);
    } else {
      setSearchPage(false);
    }
  }, [searchText]);
  return (
    <div className="w-full ">
      <div className="flex flex-row max-w-[1300px] px-[10px] mx-auto justify-between py-4 items-center ">
        <Link href="/">
          <div className="font-[800] text-[32px]">halls</div>
        </Link>
        {router.asPath != "/auth" && (
          <>
            {/* <div className="hidden md:flex flex-row items-center gap-2">
              <button className="border rounded border-sky-500 p-2 text-[12px] font-[700] w-[80px]">
                Buea
              </button>
              <input
                className="p-2 border rounded outline-none border-sky-500 text-[12px] w-[400px]"
                type={"text"}
                placeholder="Search hall"
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button className="border rounded p-2 text-[12px] font-[700]">
                SEARCH
              </button>
            </div> */}
            {
              <div className="hidden sm:flex flex-row gap-3">
                <Link href={"/"}>
                  <div className=" py-2 px-3 hover:cursor-pointer hover:text-gray-500 text-[12px] font-[700]">
                    Home
                  </div>
                </Link>
                <Link href={"/contact"}>
                  <div className=" py-2 px-3 hover:cursor-pointer hover:text-gray-500 text-[12px] font-[700]">
                    Contact
                  </div>
                </Link>
                <Link href={"/auth"}>
                  <div className=" bg-sky-500 py-2 px-3 hover:text-black text-sky-100 hover:bg-sky-400 rounded hover:cursor-pointer text-[12px] font-[700]">
                    Register
                  </div>
                </Link>
                <div className=""></div>
              </div>
            }
            {
              <div className=" sm:hidden rounded w-[30px] h-[30px] bg-blue-100 flex cursor-pointer items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={() => {
                    setMobileMenu(true);
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg> */}
                {mobileMenu && (
                  <div className="z-20">
                    <div
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                      className="bg-black fixed top-0 w-full left-0 h-screen opacity-70"
                    ></div>
                    <div className="bg-white z-50 flex p-2 fixed flex-col h-screen gap-1 top-0 right-0 w-[300px]">
                      <div className="font-[800] text-[24px] w-full text-center">
                        Menu
                      </div>
                      <div
                        onClick={() => {
                          setMobileMenu(false);
                          router.push("/");
                        }}
                        className="py-2 border-b flex flex-row gap-2 px-2 border-b-gray-400 rounded-t hover:bg-slate-200"
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
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                        Home
                      </div>
                      <div
                        onClick={() => {
                          setMobileMenu(false);
                        }}
                        className="py-2 border-b flex flex-row gap-2 px-2 border-b-gray-400 rounded-t hover:bg-slate-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Profile
                      </div>
                      <div
                        onClick={() => {
                          setMobileMenu(false);
                        }}
                        className="py-2 border-b flex flex-row gap-2 px-2 border-b-gray-400 rounded-t hover:bg-slate-200"
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
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                          />
                        </svg>
                        About
                      </div>
                      <div
                        onClick={() => {
                          setMobileMenu(false);
                        }}
                        className="py-2 border-b flex flex-row gap-2 px-2 border-b-gray-400 rounded-t hover:bg-slate-200"
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
                            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                          />
                        </svg>
                        Policy
                      </div>
                      <div
                        onClick={() => {
                          setMobileMenu(false);
                          router.push(
                            "https://api.whatsapp.com/send/?phone=237681099238&text&type=phone_number&app_absent=0"
                          );
                        }}
                        className="py-2 border-b flex flex-row gap-2 px-2 border-b-gray-400 rounded-t hover:bg-slate-200"
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
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                        Contact support
                      </div>
                    </div>
                  </div>
                )}
              </div>
            }
          </>
        )}
      </div>
    </div>
  );
}
