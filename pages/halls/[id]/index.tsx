import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { collection, getDoc, doc } from "firebase/firestore/lite";
import { db } from "../../../firebase";

export default function Halls() {
  const { id } = useRouter().query;
  const [showImage, setShowImage] = useState(false);
  const [tabDetails, setTabDetails] = useState("description");
  const [selectedImage, setSelectedImage] = useState("description");
  const [tab, setTab] = useState("description");
  const [prevTab, setPrevTab] = useState("pricing");
  const [hall, setHall] = useState<any>();

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
  }, []);

  useEffect(() => {
    let doc: any = document;
    setPrevTab(tab);
    doc.getElementById(tab).style.backgroundColor =
      "rgb(7 89 133 / var(--tw-bg-opacity))";
    doc.getElementById(tab).style.color = "white";
  }, [tab]);
  const router = useRouter();
  return (
    <>
      <div className="flex flex-row w-[90%] mx-auto overflow-x-scroll gap-2 mt-2">
        {hall?.images.map((elem: any, index:any) => (
          <img
          key={index}
            onClick={() => {
              setShowImage(true);
              setSelectedImage(elem)
            }}
            src={elem}
            className="rounded border object-cover border-white h-[250px] cursor-pointer "
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
            className="bg-black opacity-75 fixed top-0 left-0 w-full h-screen -z-10"
          ></div>
        </div>
      )}
      <div className="flex flex-col gap-2 w-full">
        <div className="font-[900] w-[90%] mx-auto text-center md:text-left text-[24px] text-sky-900">
          {hall?.hallName}
        </div>
        <div className="flex flex-row gap-2 w-full justify-center">
          <div
            onClick={() => {
              setTab("description");
              setTabDetails("description");
              let doc: any = document;
              doc.getElementById(prevTab).style.backgroundColor = "white";
              doc.getElementById(prevTab).style.color = "black";
            }}
            id="description"
            className="rounded bg-white px-3 py-2 font-[600] cursor-pointer text-[12px]"
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
            className="rounded bg-white px-3 py-2 font-[600] cursor-pointer text-[12px]"
          >
            Pricing
          </div>
          <div
            onClick={() => {
              setTab("extras");
              setTabDetails("extras");
              let doc: any = document;
              doc.getElementById(prevTab).style.backgroundColor = "white";
              doc.getElementById(prevTab).style.color = "black";
            }}
            id="extras"
            className="rounded bg-white px-3 py-2 font-[600] cursor-pointer text-[12px]"
          >
            Extras
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
            className="rounded bg-white px-3 py-2 font-[600] cursor-pointer text-[12px]"
          >
            Refund Policy
          </div>
        </div>
        {tabDetails == "description" && (
          <div>
            <div className="flex w-[90%] rounded p-2 mx-auto flex-col gap-2 max-w-[1000px]">
              <div className="flex flex-row gap-2 border-b border-b-sky-50">
                <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                  Capacity:
                </div>
                <div className="font-[200] text-[14px]">{hall?.capacity} people</div>
              </div>
              <div className="flex flex-row gap-2 border-b border-b-sky-50">
                <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                  location description:
                </div>
                <div className="font-[300] text-[14px]">
                  {hall?.locationDescription}
                </div>
              </div>
              {/* <div className="flex flex-row gap-2 border-b border-b-sky-50">
                <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                  Hall area :
                </div>
                <div className="font-[300] text-[14px]">200 square meters</div>
              </div> */}
              <div className="flex flex-row gap-2 border-b border-b-sky-50">
                <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                  Indoors:
                </div>
                <div className="font-[300] text-[14px]">{hall?.indoors ? 'Yes' : 'No'}</div>
              </div>
              <div className="flex flex-row gap-2 border-b border-b-sky-50">
                <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                  Security:
                </div>
                <div className="font-[300] text-[14px]">{hall?.hasSecurity ? 'Yes' : 'No'}</div>
              </div>
              <div className="flex flex-row gap-2 border-b border-b-sky-50">
                <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                  Additionals:
                </div>
                <div className="font-[300] text-[14px]">
                  Generator, projector, chairs, pre and post hall-cleaning,
                  chaffing dishes, cutlery, light decor, drinks
                </div>
              </div>
              <div className="flex flex-row gap-2 border-b border-b-sky-50">
                <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                  Car packing space:
                </div>
                <div className="font-[300] text-[14px]">{hall?.hasCarParkingSpace ? 'Yes' : 'No'}</div>
              </div>
              <div className="flex flex-row gap-2 border-b border-b-sky-50">
                <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                  Call for booking:
                </div>
                <div className="font-[300] text-[14px]">{hall?.phoneNumber}</div>
              </div>
              <div className="flex flex-row gap-2 border-b border-b-sky-50">
                <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                  Email:
                </div>
                <div className="font-[300] text-[14px]">{hall?.email}</div>
              </div>
              <div className="flex flex-row gap-2 border-b border-b-sky-50">
                <div className="font-[800] text-[14px] w-[100px] text-gray-800">
                  Address:
                </div>
                <div className="font-[300] text-[14px]">
                {hall?.address}
                </div>
              </div>
            </div>
            <div className="w-[90%] bg-white rounded mt-3 overflow-hidden mx-auto max-w-[1000px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63669.23161562605!2d9.222024462730351!3d4.1559647293111155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x10613259651819a3%3A0x754210aa92e62bff!2sBuea!3m2!1d4.1559658!2d9.2632243!4m0!5e0!3m2!1sen!2scm!4v1689237704172!5m2!1sen!2scm"
                width="600"
                className="w-full object-cover"
                height="450"
                // style="border:0;"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        )}
        {tabDetails == "pricing" && (
          <div className="w-[90%] mx-auto">
            <div className="text-[12px] py-5">
              The prices mentioned bellow are for a time frame of 24 hours
            </div>
            <div className="flex flex-row gap-2 border-b border-b-sky-50 ">
              <div className="font-[700] text-[14px] w-[200px] text-gray-800">
                Caution
              </div>
              <div className="font-[300] text-[14px]">{hall?.caution} FCFA</div>
            </div>
            <div className="flex flex-row gap-2 border-b border-b-sky-50 ">
              <div className="font-[700] text-[14px] w-[200px] text-gray-800">
                Cleaning fee
              </div>
              <div className="font-[300] text-[14px]">{hall?.cleaningFee} FCFA</div>
            </div>
            {hall?.pricing?.map((elem:any, index:any)=><div key={index} className="flex flex-row gap-2 border-b border-b-sky-50 ">
              <div className="font-[700] text-[14px] w-[200px] text-gray-800">
                {elem?.service}
              </div>
              <div className="font-[300] text-[14px]">{elem?.price} FCFA</div>
            </div>)}
            
          </div>
        )}
        {tabDetails == "extras" && <div>Extras</div>}
        {tabDetails == "refund-policy" && (
          <div className="w-[90%] md:w-[400px] my-5 mx-auto">
            Thank you very much for considering us. We do not do a full refund.
            If an event date is cancelleded or if the event no longer holds on
            the agreed date, We provide a posibility to reschedule.
            <ul>
              <li>
                -- We refund the caution If nothing is broken or destroyed in
                the hall at the end of the event.
              </li>
              <li>
                -- We also refund the cleaning fee after the event if the hall
                is poperly cleaned before or after the event by the organisers.
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
