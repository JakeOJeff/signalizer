
export async function bruteforceSHA256(targetHash: string, wordlist: string[]): Promise<{found: boolean, plaintext?: string, attempts: number}> {
    const encoder = new TextEncoder();
    let attempts = 0;

    for (const word of wordlist) {
        attempts++;

        const data = encoder.encode(word);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        if (hashHex === targetHash.toLowerCase()) {
            return { found: true, plaintext: word, attempts };
        }

    }

    return { found: false, attempts};
}

// sample wordlist temporary
export const wordlists = {
    common: [
        'password', '123456', 'admin', 'welcome', 'qwerty',
    ],
};