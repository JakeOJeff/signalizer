
export async function encodeMessage(msg: string, method: string): Promise<string> {
    if (!msg.trim()) {
        return "Please enter a message to encode";
    }

    let result = "";

    switch (method) {
        // SHA, Morse, Binary, Base64, hex, Caesar

        case "SHA-256": {
            const encoder = new TextEncoder();
            const data = encoder.encode(msg);
            const hashBuffer = await crypto.subtle.digest("SHA-256", data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            result = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
            break;
        }

        case "morse": {
            const morseMap: Record<string, string> = {
                a: ".-",
                b: "-...",
                c: "-.-.",
                d: "-..",
                e: ".",
                f: "..-.",
                g: "--.",
                h: "....",
                i: "..",
                j: ".---",
                k: "-.-",
                l: ".-..",
                m: "--",
                n: "-.",
                o: "---",
                p: ".--.",
                q: "--.-",
                r: ".-.",
                s: "...",
                t: "-",
                u: "..-",
                v: "...-",
                w: ".--",
                x: "-..-",
                y: "-.--",
                z: "--..",
                "0": "-----",
                "1": ".----",
                "2": "..---",
                "3": "...--",
                "4": "....-",
                "5": ".....",
                "6": "-....",
                "7": "--...",
                "8": "---..",
                "9": "----.",
                " ": "/",
            };
            result = msg.toLowerCase().split("").map((ch) => morseMap[ch] || "").join(" ");
            break;
        }

        case "binary":{
            result = msg.split("").map((ch) => ch.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
            break;
        }

        case "base64": {
            result = Buffer.from(msg, "utf-8").toString("base64");
            break;
        }

        case "hex": {
            result = msg.split("").map(ch => ch.charCodeAt(0).toString(16).padStart(2, "0")).join(" ");
            break;
        }

        case "caeser": {
            const shift = 3;
            result = msg.split("").map(ch => {
                if (/[a-z]/.test(ch)) {
                    return String.fromCharCode(((ch.charCodeAt(0) - 97 + shift) % 26) + 97);
                }
                else if (/[A-Z]/.test(ch)) {
                    return String.fromCharCode(((ch.charCodeAt(0) - 65 + shift) % 26) + 65);
                }
                else {
                    return ch;
                }
            }).join("");
            break;
        }

        case "rot13": {
            result = msg.replace(/[a-zA-Z]/g, c => {
                const base = c <= "Z" ? 65 : 97 ;
                return String.fromCharCode(((c.charCodeAt(0) - base + 13 ) % 26 ) + base);
            });
            break;
        }
    }
    return result;
}