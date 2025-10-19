import { NextResponse } from "next/server";
import { decodeMessage } from "utils/decodeMessage";


// curl -X POST http://localhost:3000/api/decode  -H "Content-Type: application/json"  -d "{\"message\":\"aGVsbG8=\",\"method\":\"base64\"}"
export async function POST(req:Request) {
    try {
        const { message, method } = await req.json() 
        const decoded = await decodeMessage(message, method);
    
        return NextResponse.json({
            decoded,
            reversible: decoded !== "Encryped values cannot be decrypted. Try Brute-Force"
        });
    
    } catch (err) {
        console.error(err)
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
}