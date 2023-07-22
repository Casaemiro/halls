import React, { useState } from "react";
import SearchBar from "./searchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AcademicCapIcon,
  Bars3Icon,
  HomeModernIcon,
  MicrophoneIcon,
  MusicalNoteIcon,
  ShareIcon,
  ShoppingCartIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  const [sideBarShow, setSideBarShow] = useState(false);
  return (
    <>
      <div
        id="top"
        className="h-[56px] top-0 z-20 sm:h-[64px] fixed px-2 sm:px-[30px] w-full bg-black text-stone-200 flex  flex-row items-center justify-between "
      >
        <div
          className=""
          onClick={() => {
            router.push("/");
          }}
        >
          <img
            src="/logo.png"
            className="cursor-pointer sm:w-[56px] w-[40px]"
          />
        </div>
        {/* <SearchBar /> */}
        <div className="text-gray-500 font-[700] sm:hidden">
          {router.asPath == "/"
            ? "HOME"
            : router.asPath.substring(1).toUpperCase()}
        </div>
        <div className="sm:flex flex-row gap-8 text-[12px] lg:text-[16px] hidden">
          <div
            className="hover:text-stone-400 hover:cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            Home
          </div>
          <div
            className="hover:text-stone-400 hover:cursor-pointer"
            onClick={() => {
              router.push("/shop");
            }}
          >
            Shop
          </div>
          <div
            className="hover:text-stone-400 hover:cursor-pointer"
            onClick={() => {
              router.push("/academy");
            }}
          >
            Academy
          </div>
          <div
            className="hover:text-stone-400 hover:cursor-pointer"
            onClick={() => {
              router.push("/sound");
            }}
          >
            Sound
          </div>
          <div
            className="hover:text-stone-400 hover:cursor-pointer"
            onClick={() => {
              router.push("/band");
            }}
          >
            Band
          </div>
          <div
            className="hover:text-stone-400 hover:cursor-pointer"
            onClick={() => {
              router.push("/studio");
            }}
          >
            Studio
          </div>
        </div>
        <Bars3Icon
          className="sm:hidden w-[32px]"
          onClick={() => {
            setSideBarShow(!sideBarShow);
          }}
        />
      </div>
      <div className="flex mt-[56px] sm:mt-[64px] flex-row items-center sm:justify-end justify-evenly sm:gap-4 sm:pr-16 text-[12px] py-2 bg-black opacity-60 text-stone-200 z-[50]">
       
        <div className=" hover:text-stone-600 hover:cursor-pointer"
        onClick={()=>{
          router.push("highlights")
        }}>
          highlights
        </div>
        <div
          className=" hover:text-stone-600 hover:cursor-pointer"
          onClick={() => {
            router.push("/aboutus");
          }}
        >
          about
        </div>
        <div
          onClick={() => {
            router.push("/courses");
          }}
          className=" hover:text-stone-600 hover:cursor-pointer"
        >
          courses
        </div>
        <div
          onClick={() => {
            router.push("/contactus");
          }}
          className=" hover:text-stone-600 hover:cursor-pointer"
        >
          contact
        </div>
        <div
          onClick={() => {
            router.push("/team");
          }}
          className=" hover:text-stone-600 hover:cursor-pointer"
        >
          team
        </div>

        <div
          className=" hover:text-stone-600 hover:cursor-pointer flex"
          onClick={() => {
            router.push("/donate");
          }}
        >
          donate
          <span className=" h-3 w-3 flex">
            <span className="animate-ping absolute flex w-[5px] h-[5px] rounded-full bg-sky-700 opacity-75"></span>
            {/* <span className="absolute inline-flex rounded-full bg-sky-500"> */}
            {/* </span> */}
          </span>
        </div>
        <div className="md:contents hidden hover:text-stone-600 hover:cursor-pointer">
          <i className="fa-brands fa-facebook  fa-2x"></i>
        </div>
        <div className="md:contents hidden hover:text-stone-600 hover:cursor-pointer">
          <i className="fa-brands fa-instagram fa-2x"></i>
        </div>
        <div className="md:contents hidden hover:text-stone-600 hover:cursor-pointer">
          <i className="fa-brands fa-youtube fa-2x "></i>
        </div>
      </div>
      {sideBarShow && (
        <div
          className="bg-black opacity-40 fixed w-full h-[100%] top-0 z-10 left-0"
          onClick={() => {
            setSideBarShow(!sideBarShow);
          }}
        ></div>
      )}
      <div
        className={
          !sideBarShow
            ? "-left-[600px] absolute sm:hidden h-full z-20 bg-black opacity-100 top-[56px] w-[70%]"
            : "left-0 fixed h-full flex flex-col opacity-90 sm:hidden text-white z-20 bg-black overflow-y-scroll top-[56px] w-[70%]"
        }
      >
        <div
          className="hover:text-stone-400 hover:cursor-pointer py-3 hover:bg-white hover:bg-opacity-10 px-3 pr-8 flex flex-row justify-between "
          onClick={() => {
            setSideBarShow(!sideBarShow);
            router.push("/");
          }}
        >
          <HomeModernIcon className="w-[20px]" />
          Home
        </div>
        <div
          className="hover:text-stone-400 hover:cursor-pointer py-3 hover:bg-white hover:bg-opacity-10 px-3 pr-8 flex flex-row justify-between "
          onClick={() => {
            setSideBarShow(!sideBarShow);
            router.push("/shop");
          }}
        >
          <ShoppingCartIcon className="w-[20px]" />
          Shop
        </div>
        <div
          className="hover:text-stone-400 hover:cursor-pointer py-3 hover:bg-white hover:bg-opacity-10 px-3 pr-8 flex flex-row justify-between "
          onClick={() => {
            setSideBarShow(!sideBarShow);
            router.push("/academy");
          }}
        >
          <AcademicCapIcon className="w-[20px]" />
          Academy
        </div>
        <div
          className="hover:text-stone-400 hover:cursor-pointer py-3 hover:bg-white hover:bg-opacity-10 px-3 pr-8 flex flex-row justify-between "
          onClick={() => {
            setSideBarShow(!sideBarShow);
            router.push("/sound");
          }}
        >
          <SpeakerWaveIcon className="w-[20px]" />
          Sound
        </div>
        <div
          className="hover:text-stone-400 hover:cursor-pointer py-3 hover:bg-white hover:bg-opacity-10 px-3 pr-8 flex flex-row justify-between "
          onClick={() => {
            setSideBarShow(!sideBarShow);
            router.push("/band");
          }}
        >
          <MusicalNoteIcon className="w-[20px]" />
          Band
        </div>
        <div
          className="hover:text-stone-400 hover:cursor-pointer py-3 hover:bg-white hover:bg-opacity-10 px-3 pr-8 flex flex-row justify-between "
          onClick={() => {
            setSideBarShow(!sideBarShow);
            router.push("/studio");
          }}
        >
          <MicrophoneIcon className="w-[20px]" />
          Studio
        </div>
        <hr className="mb-[12px] opacity-30" />
        <div className="flex items-center gap-4 m-2 py-2 hover:cursor-pointer">
          SUBSCRIBE
        </div>
        <div className="flex items-center gap-4 m-2 py-2 hover:cursor-pointer">
          SHARE
          <ShareIcon className="w-[24px]" />
        </div>
        <div
          onClick={() => {
            router.push(
              "https://www.facebook.com/people/Ewald-Music-Academy/100057298427724/"
            );
          }}
          className="flex items-center gap-4 m-2 py-2 hover:cursor-pointer"
        >
          FACEBOOK
          <i className="fa-brands fa-facebook text-blue-700 fa-2x"></i>
        </div>
        <div
          onClick={() => {
            router.push("https://www.instagram.com/ewald_music/?hl=en");
          }}
          className="flex items-center gap-4 m-2 py-2 hover:cursor-pointer"
        >
          INSTAGRAM
          <i className="fa-brands fa-instagram fa-2x"></i>
        </div>
        <div
          onClick={() => {
            router.push("https://www.youtube.com/@ewaldmusic5/featured");
          }}
          className="flex items-center gap-4 m-2 py-2 hover:cursor-pointer"
        >
          YOUTUBE
          <i className="fa-brands fa-youtube text-red-500 fa-2x "></i>
        </div>
        <div className="p-[40px]"></div>
      </div>
    </>
  );
}

export default NavBar;
