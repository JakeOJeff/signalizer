"use client";
import React, { useState, ChangeEvent } from "react";
import { encodeMessage } from "../utils/encodeMessage";

export default function Create() {
    const [msg, setMsg] = useState<string>("");
    const [method, setMethod] = useState<string>("SHA-256");
    const [encoded, setEncoded] = useState("");
    const [cryptoType, setCryptoType] = useState("Encrypt");
    const [copied, setCopied] = useState<boolean>(false)

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMsg(e.target.value);
    };

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value != "SHA-256"){
            setCryptoType("Encode");
        }
        else {
            setCryptoType("Encrypt")
        }
        setEncoded("");
        setMethod(e.target.value);
    };

    const handleEncode = async() => {

        console.log(`Encoding "${msg}" using "${method}"`)
        const result = await encodeMessage(msg, method);
        setEncoded(result);

    };

    const copyCrypto = async() => {
        await navigator.clipboard.writeText(encoded);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }


    return (
        <>
            <main className="bg-gray-900 flex flex-col items-center justify-center min-h-screen w-full">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-8xl my-4 text-white">Signalizer</h1>
                    <h3 className="text-3xl mb-2 text-gray-300">
                        Enter/Paste the message you need to Encode/Encrypt
                    </h3>
                    <h4 className="text-xl mb-10 text-gray-400">
                        ( Encrypted messages cannot be decoded )
                    </h4>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <textarea
                        value={msg}
                        onChange={handleInputChange}
                        placeholder="Enter/paste message"
                        className="rounded-2xl mr-2 mb-5 outline-3  outline-gray-500 p-6 w-[600px] h-[240px] resize-none text-xl  font-bold  text-white text-left align-top whitespace-pre-wrap break-words duration-500  hover:bg-gray-700  focus:outline-none  focus:ring-2  focus:ring-gray-400"
                    />
                    <div>
                        <select className="opacity-50 hover:opacity-100 rounded-4xl  mr-2 outline-3 outline-gray-500 bg-gray-600 p-4 pr-6 pl-6 text-xl font-bold cursor-pointer duration-500 hover:bg-gray-700"
                                value={method}
                                onChange={handleSelectChange}
                        >
                            <option value="SHA-256">SHA-256 Hash</option>
                            <option value="morse">Morse Code</option>
                            <option value="binary">Binary</option>

                        </select>
                        <button className="rounded-4xl ml-2 outline-3 outline-gray-300 text-gray-800 bg-gray-100 p-4 px-6 text-xl font-bold cursor-pointer duration-500 hover:bg-gray-300"
                                onClick={handleEncode}
                        >
                            {cryptoType} Message
                        </button>
                    </div>

                </div>
                    {encoded && (

                        <button className="cursor-pointer font-bold outline-2 p-6 rounded-4xl lg:rounded-full text-xl m-10 mb-4 duration-500 hover:text-gray-400"
                                onClick={copyCrypto}
                        >
                            {encoded}
                        </button>)

                    }
                    {copied && (
                                <div className="text-white text-md bg-gray-600 px-2 py-1 rounded-md">
                                    Copied!
                                </div>
                            )
                        }
            </main>
        </>
    );
}
