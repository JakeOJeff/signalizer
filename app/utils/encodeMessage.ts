import { hash } from "crypto";

export async function encodeMessage(msg: string, method: string): Promise<string> {
    if (!msg.trim()) {
        return "Please Enter a message to encode";
    }

    let result = "";

    switch (method) {

        case "SHA-256": {
            const encoder = new TextEncoder();
            const data = encoder.encode(msg);
            const hashBuffer = await crypto.subtle.digest("SHA-256", data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            result = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
            break;
        }

    }

    return result;
}