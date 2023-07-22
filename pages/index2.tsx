import HallList from "@/components/HallList";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import { useState } from "react";

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ searchPage }: any) {
  return (
    <>
      <Head>
        <title>halls</title>
        <meta
          name="description"
          content="Halls is a Cameroon based startup which is focused on Marketing halls."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {!searchPage ? (
        <>
          <Hero />
          <HallList />
        </>
      ) : (
        <div className="flex p-5 flex-row gap-3 items-center justify-center mb-[280px] w-[1300px] mx-auto">
          <div className="w-[300px] flex flex-col gap-2">
            <div className="w-full rounded bg-black opacity-30 h-[150px]">.</div>
            <div className="bg-black opacity-30 rounded p-2 w-[200px]">.</div>
            <div className="bg-black opacity-30 rounded p-2 w-[110px]">.</div>
          </div>
          <div className="w-[300px] flex flex-col gap-2">
            <div className="w-full rounded bg-black opacity-30 h-[150px]">.</div>
            <div className="bg-black opacity-30 rounded p-2 w-[200px]">.</div>
            <div className="bg-black opacity-30 rounded p-2 w-[110px]">.</div>
          </div>
          <div className="w-[300px] flex flex-col gap-2">
            <div className="w-full rounded bg-black opacity-30 h-[150px]">.</div>
            <div className="bg-black opacity-30 rounded p-2 w-[200px]">.</div>
            <div className="bg-black opacity-30 rounded p-2 w-[110px]">.</div>
          </div>
          <div className="w-[300px] flex flex-col gap-2">
            <div className="w-full rounded bg-black opacity-30 h-[150px]">.</div>
            <div className="bg-black opacity-30 rounded p-2 w-[200px]">.</div>
            <div className="bg-black opacity-30 rounded p-2 w-[110px]">.</div>
          </div>
        </div>
      )}
    </>
  );
}
