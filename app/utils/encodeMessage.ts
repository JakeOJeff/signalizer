import { hash } from "crypto";

export async function encodeMessage(msg: string, method: string): Promise<string> {
    if (!msg.trim()) {
        return "Please Enter a message to encode";
    }

    let result = "";

    switch (method) {

        case "md5": {
            const encoder = new TextEncoder();
            const data = encoder.encode(msg);
            const hashBuffer = await crypto.subtle.digest("MD5", data);
            const hashArray = Array.from(new Uint8Array(hashBuffer))
        }

    }
}