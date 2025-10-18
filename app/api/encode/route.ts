
import { NextResponse } from "next/server";
import { encodeMessage } from "@/app/utils/encodeMessage";

export async function POST(req:Request) {
    try {
        const { message, method } = await req.json();
    } catch (error) {
        console.error("Encode API error:", error)
    }
}