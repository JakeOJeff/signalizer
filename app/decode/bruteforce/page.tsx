"use client"

import React, { useState,. useEffect, ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";

export default function Bruteforce() {

    const searchParams = useSearchParams();
    const [hash, setHash] = useState<string>("");
    const [wordlist, setWordlist] = useState<string>("rockyou");

    useEffect(() => {
        const urlHash = searchParams.get('hash');
        if (urlHash) {
            setHash(decodeURIComponent(urlHash))
        }
    })


}