import React from 'react';

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center m-10">
        <div>
          <h1 className="text-6xl p-10">Signalizer</h1>
        </div>
        <div className="flex flex-row justify-between ">
          <div className="rounded-2xl mr-2 outline-3 outline-gray-500 bg-gray-600 p-4 pr-6 pl-6 text-xl font-bold cursor-pointer duration-500 hover:bg-gray-700" >Create Signal</div>
          <div className="rounded-2xl ml-2 outline-3 outline-gray-300 text-gray-800 bg-gray-100 p-4 pr-6 pl-6 text-xl font-bold cursor-pointer duration-500 hover:bg-gray-300" >Decode Signal</div>
        </div>
      </main>
    </>
  );
}