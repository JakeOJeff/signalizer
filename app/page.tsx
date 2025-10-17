import React from 'react';

export default function Home() {
  return (
    <>
      <main className="bg-gray-900 flex flex-col items-center justify-center min-h-screen w-full">
        <div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-7xl my-4">Signalizer</h1>
            <h3 className="text-2xl mb-15">Create and receive encodeded signals with just a click!</h3>
          </div>
          <div className="flex flex-row justify-center items-center">
            <a className="rounded-2xl mr-2 outline-3 outline-gray-500 bg-gray-600 p-4 pr-6 pl-6 text-xl font-bold cursor-pointer duration-500 hover:bg-gray-700" href="/create">Create Signal</a>
            <div className="rounded-2xl ml-2 outline-3 outline-gray-300 text-gray-800 bg-gray-100 p-4 pr-6 pl-6 text-xl font-bold cursor-pointer duration-500 hover:bg-gray-300" >Decode Signal</div>
          </div>
        </div>
      </main>
    </>
  );
}