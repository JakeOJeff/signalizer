import React from 'react';
import { useState, ChangeEvent } from 'react';


export default function create() {
    const [msg, setMsg] = useState<string>("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>){
        setMsg(e.target.value);
    };
    return (
        <>
            <main className="bg-gray-900 flex flex-col items-center justify-center min-h-screen w-full">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-7xl my-4">Signalizer</h1>
                    <h3 className="text-2xl mb-15">Enter/Paste the message you need to encode.</h3>
                </div>
                <div className="flex flex-col items-center justify-center">
                
                </div>
                </main>
        </>
    );
}