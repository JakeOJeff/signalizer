"use client";
import React, { useState, ChangeEvent } from "react";

export default function Create() {
  const [msg, setMsg] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMsg(e.target.value);
  };

  return (
    <>
      <main className="bg-gray-900 flex flex-col items-center justify-center min-h-screen w-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-7xl my-4 text-white">Signalizer</h1>
          <h3 className="text-2xl mb-10 text-gray-300">
            Enter/Paste the message you need to encode.
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center">
          <textarea
            value={msg}
            onChange={handleInputChange}
            placeholder="Enter/paste message"
            className="
              rounded-2xl 
              mr-2 
              mb-5 
              outline-3 
              outline-gray-500 
              bg-gray-600 
              p-6 
              w-[600px]
              h-[240px]
              resize-none 
              text-xl 
              font-bold 
              text-white
              text-left 
              align-top
              whitespace-pre-wrap
              break-words
              duration-500 
              hover:bg-gray-700 
              focus:outline-none 
              focus:ring-2 
              focus:ring-gray-400
            "
          />

          <div className="rounded-2xl ml-2 outline-3 outline-gray-300 text-gray-800 bg-gray-100 p-4 px-6 text-xl font-bold cursor-pointer duration-500 hover:bg-gray-300">
            Encode Message
          </div>
        </div>
      </main>
    </>
  );
}
