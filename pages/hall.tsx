/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { collection, getDoc, doc } from "firebase/firestore/lite";
import { db } from "../firebase";
import Loader from "@/components/Loader";
import Head from "next/head";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
export default function Halls() {
  // const { id } = useRouter().query;
  // const [id, setId] = useState(useSearchParams().get("id"));
  const [showImage, setShowImage] = useState(false);
  const [tabDetails, setTabDetails] = useState("description");
  const [selectedImage, setSelectedImage] = useState("description");
  const [tab, setTab] = useState("description");
  const [prevTab, setPrevTab] = useState("pricing");
  const [hall, setHall] = useState<any>();
  const id = useSearchParams().get("id");
  async function getItems() {
    const docRef = doc(db, "halls", `${id}`);
    // console.log(id);
    // console.log(docRef);

    const docSnap = await getDoc(docRef).then((elem) => {
      console.log(elem.data());

      if (elem.exists()) {
        setHall(elem?.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    });

    // return cityList;
  }

  useEffect(() => {
    getItems();
  }, [id]);
  // console.log("path",path.get("id"));
  console.log(id);
  console.log(hall);

  useEffect(() => {
    let doc: any = document;
    setPrevTab(tab);
    doc.getElementById(tab).style.backgroundColor =
      "rgb(7 89 133 / var(--tw-bg-opacity))";
    doc.getElementById(tab).style.color = "white";
  }, [tab]);
  const router = useRouter();

  const [copy, setCopy] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  async function share(url: string, name: string) {
    try {
      await navigator.share({
        title: name,
        text: "Get tickets",
        url: url,
      });
    } catch (err) {
      setIsCopied(true);
      navigator.clipboard.writeText(
        `${process.env.NEXT_PUBLIC_APP_BASE_URL}${router.asPath}`
      );
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
      return err;
    }
  }
  return (
    <>
      <Head>
        <meta property={`og:title`} content={`Halls`} />
        <meta
          property={`og:description`}
          content={`Follow this link to see more about ${
            hall ? hall?.hallName : "this hall"
          }`}
        />
        <meta property="og:type" content="Halls" />
        <meta property="og:image" content={`${hall?.images[0]}`} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_APP_BASE_URL}${router.asPath}`}
        />
      </Head>

      <div className="flex items-center py-3 text-xs max-w-[1200px] mx-auto px-[10px] gap-1">
        <Link className="font-bold" href="/">
          halls
        </Link>
        <div className="text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 text-black/30 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="text-black/30">{hall?.hallName}</div>
      </div>
      <div className="flex flex-row max-w-[1200px] mx-auto px-[10px] overflow-scroll gap-2">
        {hall?.images.map((elem: any, index: any) => (
          <img
            key={index}
            onClick={() => {
              setShowImage(true);
              setSelectedImage(elem);
            }}
            src={elem}
            className="rounded object-cover h-[250px] cursor-pointer "
          />
        ))}

        {/* <div
          className="rounded border border-white w-[300px] h-[250px] cursor-pointer "
          onClick={() => {
            router.push("/");
          }}
        ></div> */}
      </div>
      <div className="flex flex-row justify-center flex-wrap w-full mt-3"></div>
      {showImage && (
        <div className="fixed top-0 w-full flex items-center h-screen justify-center left-0">
          <img
            src={selectedImage}
            className="rounded object-cover w-[97%] md:w-[70%] cursor-pointer "
          />
          <div
            onClick={() => {
              setShowImage(false);
            }}
            className="bg-black/40 backdrop-blur-md fixed top-0 left-0 w-full h-screen -z-10"
          ></div>
        </div>
      )}
      <div className="flex flex-col gap-2 w-full">
        <div className="font-[900] max-w-[1200px] mx-auto flex px-[10px] w-full items-center justify-between text-center md:text-left text-[24px] text-sky-900">
          {hall?.hallName}
          <div
            className="cursor-pointer text-sm font-[500]"
            onClick={() => {
              try {
                share(
                  `${process.env.NEXT_PUBLIC_APP_BASE_URL}${router.asPath}`,
                  ""
                );
                console.log(
                  `${process.env.NEXT_PUBLIC_APP_BASE_URL}${router.asPath}`
                );
              } catch (exceptionVar) {
                setIsCopied(true);
                navigator.clipboard.writeText(
                  `${process.env.NEXT_PUBLIC_APP_BASE_URL}${router.asPath}`
                );
                setTimeout(() => {
                  setIsCopied(false);
                }, 3000);
              } finally {
                console.log("done");
              }
            }}
          >
            {!isCopied ? (
              <div className="flex">
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
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
              </div>
            ) : (
              <span className="flex items-center border border-black/20 p-1 rounded-lg justify-center gap-2">
                link copied
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 max-w-[1200px] justify-between mx-auto px-[10px] w-full">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2 justify-center md:justify-start w-full">
              <div
                onClick={() => {
                  setTab("description");
                  setTabDetails("description");
                  let doc: any = document;
                  doc.getElementById(prevTab).style.backgroundColor = "white";
                  doc.getElementById(prevTab).style.color = "black";
                }}
                id="description"
                className="rounded bg-white px-3 py-2 font-[600] cursor-pointer text-[10px]"
              >
                Description
              </div>
              <div
                onClick={() => {
                  setTab("pricing");
                  setTabDetails("pricing");
                  let doc: any = document;
                  doc.getElementById(prevTab).style.backgroundColor = "white";
                  doc.getElementById(prevTab).style.color = "black";
                }}
                id="pricing"
                className="rounded bg-white px-3 py-2 font-[600] cursor-pointer text-[10px]"
              >
                Pricing
              </div>
              <div
                onClick={() => {
                  setTab("refund-policy");
                  setTabDetails("refund-policy");
                  let doc: any = document;
                  doc.getElementById(prevTab).style.backgroundColor = "white";
                  doc.getElementById(prevTab).style.color = "black";
                }}
                id="refund-policy"
                className="rounded bg-white px-3 py-2 font-[600] cursor-pointer text-[10px]"
              >
                Refund Policy
              </div>
              <div
                onClick={() => {
                  setTab("comments");
                  setTabDetails("comments");
                  let doc: any = document;
                  doc.getElementById(prevTab).style.backgroundColor = "white";
                  doc.getElementById(prevTab).style.color = "black";
                }}
                id="comments"
                className="rounded bg-white px-3 py-2 font-[600] cursor-pointer text-[10px]"
              >
                Comments
              </div>
            </div>
            {tabDetails == "description" && (
              <div>
                <div className="flex w-full rounded p-2 mx-auto flex-col">
                  <div className="flex flex-row gap-2 py-2 border-b border-b-black/20">
                    <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                      Capacity:
                    </div>
                    <div className="font-[200] text-[14px]">
                      {hall?.capacity} people
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 py-2 border-b border-b-black/20">
                    <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                      location description:
                    </div>
                    <div className="font-[300] text-[14px]">
                      {hall?.locationDescription}
                    </div>
                  </div>
                  {/* <div className="flex flex-row gap-2 py-2 border-b border-b-black/20">
                    <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                      Hall area :
                    </div>
                    <div className="font-[300] text-[14px]">200 square meters</div>
                  </div> */}
                  <div className="flex flex-row gap-2 py-2 border-b border-b-black/20">
                    <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                      Indoors:
                    </div>
                    <div className="font-[300] text-[14px]">
                      {hall?.indoors ? "Yes" : "No"}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 py-2 border-b border-b-black/20">
                    <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                      Security:
                    </div>
                    <div className="font-[300] text-[14px]">
                      {hall?.hasSecurity ? "Yes" : "No"}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 py-2 border-b border-b-black/20">
                    <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                      Additionals:
                    </div>
                    <div className="font-[300] flex flex-wrap gap-2x text-[14px]">
                      {hall?.pricing.map((elem: any, index: number) => (
                        <span key={index}>{elem?.service},</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 py-2 border-b border-b-black/20">
                    <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                      Car packing space:
                    </div>
                    <div className="font-[300] text-[14px]">
                      {hall?.hasCarParkingSpace ? "Yes" : "No"}
                    </div>
                  </div>
                  <div className="flex flex-row items-center py-1 gap-2 py-2 border-b border-b-black/20">
                    <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                      Call for booking:
                    </div>
                    <div className="font-[300] text-[14px]">
                      {hall?.phoneNumber}
                    </div>
                    <div
                      onClick={() => {
                        setCopy(true);
                        navigator.clipboard.writeText(
                          `${process.env.NEXT_PUBLIC_APP_BASE_URL}${router.asPath}`
                        );
                        setTimeout(() => {
                          setCopy(false);
                        }, 3000);
                      }}
                      className="bg-sky-500 p-2 px-4 cursor-pointer hover:bg-sky-500/60 duration-150 rounded-lg ml-auto"
                    >
                      {!copy ? (
                        <div className="flex">copy number</div>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          number copied
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 py-2 border-b border-b-black/20">
                    <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                      Email:
                    </div>
                    <div className="font-[300] text-[14px]">{hall?.email}</div>
                  </div>
                  <div className="flex flex-row gap-2 py-2 border-b border-b-black/20">
                    <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                      Address:
                    </div>
                    <div className="font-[300] text-[14px]">
                      {hall?.address}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {tabDetails == "pricing" && (
              <div className="w-full mx-auto">
                <div className="text-[12px] py-5">
                  The prices mentioned bellow are for a time frame of 24 hours
                </div>
                <div className="flex flex-row gap-2 py-2 border-b border-b-black/20 ">
                  <div className="font-[700] text-[14px] w-[200px] text-gray-800">
                    Caution
                  </div>
                  <div className="font-[300] text-[14px]">
                    {hall?.caution} FCFA
                  </div>
                </div>
                <div className="flex flex-row gap-2 py-2 border-b border-b-black/20 ">
                  <div className="font-[700] text-[14px] w-[200px] text-gray-800">
                    Cleaning fee
                  </div>
                  <div className="font-[300] text-[14px]">
                    {hall?.cleaningFee} FCFA
                  </div>
                </div>
                {hall?.pricing?.map((elem: any, index: any) => (
                  <div
                    key={index}
                    className="flex flex-row gap-2 py-2 border-b border-b-black/20 "
                  >
                    <div className="font-[700] text-[14px] w-[200px] text-gray-800">
                      {elem?.service}
                    </div>
                    <div className="font-[300] text-[14px]">
                      {elem?.price} FCFA
                    </div>
                  </div>
                ))}
              </div>
            )}
            {tabDetails == "comments" && (
              <div className="p-3 w-full rounded-lg bg-white/40">
                <div className="flex flex-col gap-2 items-end"><textarea className="w-full h-32 rounded-lg bg-transparent border border-black/20 p-2 outline-none"></textarea><button className="rounded-lg p-2 bg-black/40 px-6 ml-auto">Send</button></div>
              </div>
            )}
            {tabDetails == "refund-policy" && (
              <div className="w-full md:w-[400px] my-5 mx-auto">
                Thank you very much for considering us. We do not do a full
                refund. If an event date is cancelleded or if the event no
                longer holds on the agreed date, We provide a posibility to
                reschedule.
                <ul>
                  <li>
                    -- We refund the caution If nothing is broken or destroyed
                    in the hall at the end of the event.
                  </li>
                  <li>
                    -- We also refund the cleaning fee after the event if the
                    hall is poperly cleaned before or after the event by the
                    organisers.
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* <div className="w-full bg-white rounded mt-3 overflow-hidden mx-auto max-w-[500px]"> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63669.23161562605!2d9.222024462730351!3d4.1559647293111155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x10613259651819a3%3A0x754210aa92e62bff!2sBuea!3m2!1d4.1559658!2d9.2632243!4m0!5e0!3m2!1sen!2scm!4v1689237704172!5m2!1sen!2scm"
            // width="600"
            className="w-full md:max-w-[500px] object-cover outline-none bg-white"
            height="450"
            // style="border:0;"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <img
            onClick={() => {
              router.push(
                `https://api.whatsapp.com/send/?phone=${hall?.phoneNumber.replace(
                  "+",
                  ""
                )}&text&type=phone_number&app_absent=0`
              );
            }}
            src="/whatsapp.png"
            className="w-12 md:hidden shadow-2xl rounded-full fixed cursor-pointer bottom-7 right-7 h-12"
          />
          {/* </div> */}
        </div>
      </div>
      {hall ? <></> : <Loader />}
    </>
  );
}
