
import { NextResponse } from "next/server";
import { encodeMessage } from "@/app/utils/encodeMessage";

export async function POST(req:Request) {
    try {
        const { message, method } = await req.json();

        if (!message || !method) {
            return NextResponse.json(
                { error: "Missing Message or Method" },
                { status: 400 }
            )
        }

        const result = await encodeMessage(message, method);
        const encryptState = ( method == "SHA-256") ? true : false
        return NextResponse.json(
            { 
                encoded : result ,
                encrypted : encryptState
            },
            {
                status : 200
            }
        )
    } catch (error) {
        console.error("Encode API error:", error)
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}