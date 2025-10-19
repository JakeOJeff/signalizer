"use client"

import React, { useState, useEffect, ChangeEvent, use } from "react";
import { useSearchParams } from "next/navigation";

export default function Bruteforce() {

    const searchParams = useSearchParams();
    const [hash, setHash] = useState<string>("");
    const [wordlist, setWordlist] = useState<string>("rockyou");
    const [isBruteForcing, setIsBruteForcing] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const [result, setResult] = useState<string>("");
    const [attempts, setAttempts] = useState<number>(0);


    useEffect(() => {
        const urlHash = searchParams.get('hash');
        if (urlHash) {
            setHash(decodeURIComponent(urlHash))
        }
    }, [searchParams])

    const handleHashchange = (e: ChangeEvent<HTMLInputElement>) => {
        setHash(e.target.value);
    }

    const handleWordlistChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setWordlist(e.target.value);
    }


    return (
        <>
            <main className="bg-gray-900 flex flex-col items-center justify-center min-h-screen w-full p-8">
                <div className="flex flex-col items-center justify-center max-w-4xl w-full">
                    <h1 className="text-6xl my-4 text-white">Hash Bruteforce</h1>
                    <p className="text-xl mb-8 text-gray-300 text-center">Attempt to crack SHA-256 hash with wordlists</p>
                    <div className="w-full space-y-6">
                        <div className="space-y-2">
                            <label className="text-white text-lg font-semibold">SHA-256 Hash</label>
                            <input
                                type="text"
                                value={hash}
                                onChange={handleHashchange}
                                placeholder="Enter SHA-256 hash"
                                className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-noen"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-white text-lg font-semibold">Wordlist</label>
                            <select
                                value={wordlist}
                                onChange={handleWordlistChange}
                                className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                            >
                                <option value="rockyou">rockyou.txt</option>
                                <option value="common">Common Passwords</option>
                                {/* <option value="custom">Custom Wordlist</option> */}
                            </select>
                        </div>

                        {isBruteForcing && (
                            <div className="space-y-2">
                                <div className="w-full bg-gray-700 rounded-full h-4">
                                    <div
                                    className="bg-blue-600 h-4 rounded-full transition-all duration-300"
                                    style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                                <p className="text-white text-center">
                                Progress: {progress.toFixed(1)}% | Attempts: {attempts.toLocaleString()}
                            </p>
                            </div>
                        )}
                    </div>
                
                </div>
            </main>
        </>
    );
}