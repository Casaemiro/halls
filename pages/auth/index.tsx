
export default function Authen() {
    return (
      <div className="flex flex-col border border-gray-300 gap-2 rounded mx-auto w-[400px] p-4 px-8 mt-[120px]">
        
        <div className="text-[14px]">Enter Sign in details</div>
       <input type={"text"} placeholder="Username" className=" bg-transparent border border-gray-300 p-2 rounded flex items-center focus:outline-sky-400" />
       <input type={"text"} placeholder="Password" className="bg-transparent border border-gray-300 p-2 rounded flex items-center"/>
       <button placeholder="Password" className="bg-blue-300 p-2 rounded flex justify-center hover:bg-blue-200 font-[700] text-gray-900">SUBMIT</button>
       <div placeholder="Password" className="p-2 flex justify-center">OR</div>
       <button placeholder="Password" className="bg-blue-300 p-2 rounded flex justify-center hover:bg-blue-200 font-[700] text-gray-900">Sign in with Google</button>
       
      </div>
    );
  }
  