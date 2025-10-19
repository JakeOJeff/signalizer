export async function decodeMessage(msg: string, method: string): Promise<string> {
    
    if (!msg.trim()) return "";

    let result = "";

    switch (method.toLowerCase()) {

        case "sha-256": {
            result = "Encryped values cannot be decrypted. Try Brute-Force";
            break;
        }

        case "base64": {
            try {
                result = Buffer.from(msg, "base64").toString("utf-8");
            } catch {
                result = "Invalid Base64 String"
            }
            break;
        }

        case "morse": {
            const morseMap: Record<string, string> = {
                ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e",
                "..-.": "f", "--.": "g", "....": "h", "..": "i", ".---": "j",
                "-.-": "k", ".-..": "l", "--": "m", "-.": "n", "---": "o",
                ".--.": "p", "--.-": "q", ".-.": "r", "...": "s", "-": "t",
                "..-": "u", "...-": "v", ".--": "w", "-..-": "x", "-.--": "y",
                "--..": "z", "/": " ", "-----": "0", ".----": "1", "..---": "2",
                "...--": "3", "....-": "4", ".....": "5", "-....": "6",
                "--...": "7", "---..": "8", "----.": "9"
            };
            result = msg
                .split(" ")
                .map(code => morseMap[code] || "?")
                .join("");
            break;
        } 

        case "binary": {

            const cleaned = msg.trim();

            if (!cleaned) {
                result = "Input box is empty."
                break;
            }

            if (!/^[01\s]+$/.test(cleaned)) {
                result = "Invalid Binary String"
                break;
            }

            try {
                result = msg.split(" ").map(bin => String.fromCharCode(parseInt(bin, 2))).join("");
            } catch {
                result = "Invalid Binary String"
            }
            break;
        }

        case "caesar": {
            const shift = 3;
            result = msg.split("").map(ch => {
                if (/[a-z]/.test(ch)){
                    return String.fromCharCode(((ch.charCodeAt(0) - 97 - shift + 26) % 26 ) + 97);
                }
                else if (/[A-Z]/.test(ch)) {
                    return String.fromCharCode(((ch.charCodeAt(0) - 65 - shift + 26) % 26 ) + 65);
                }
                return ch;
            }).join("");
            break;
        }
    }
    return result;
}