
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
export async function loadRockYouWordlist(
  url = 'https://raw.githubusercontent.com/josuamarcelc/common-password-list/refs/heads/main/rockyou_2025_00.txt',
  opts?: {
    maxLines?: number; // stop early to avoid OOM
    onProgress?: (linesRead: number) => void;
    signal?: AbortSignal;
  }
): Promise<string[]> {
  const maxLines = opts?.maxLines ?? Infinity;
  const onProgress = opts?.onProgress;
  const res = await fetch(url, { signal: opts?.signal });
  if (!res.ok || !res.body) throw new Error(`Failed to fetch: ${res.status}`);

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let { value: chunk, done } = await reader.read();
  let buffer = '';
  const out: string[] = [];
  let linesRead = 0;

  while (!done && linesRead < maxLines) {
    buffer += decoder.decode(chunk, { stream: true });
    let idx: number;
    while ((idx = buffer.indexOf('\n')) >= 0 && linesRead < maxLines) {
      const line = buffer.slice(0, idx).replace(/\r$/, '');
      buffer = buffer.slice(idx + 1);
      if (line.length > 0) {
        out.push(line);
        linesRead++;
        if (onProgress && linesRead % 10000 === 0) onProgress(linesRead);
      }
    }
    ({ value: chunk, done } = await reader.read());
  }

  // leftover final line (if we haven't exceeded maxLines)
  if (linesRead < maxLines && buffer.length > 0) {
    const final = buffer.replace(/\r$/, '');
    if (final.length > 0) out.push(final);
  }

  return out;
}



// sample wordlist temporary
export const wordlists = {
    common: [
    '123456',
    '123456789',
    '12345678',
    '12345',
    '1234',
    '111111',
    '1234567',
    'password1',
    '123123',
    'abc123',
    'qwerty',
    'qwerty123',
    '1q2w3e',
    '1q2w3e4r',
    'iloveyou',
    'admin',
    'administrator',
    'root',
    'guest',
    'user',
    'login',
    'welcome',
    'letmein',
    'monkey',
    'dragon',
    'football',
    'baseball',
    'master',
    'shadow',
    'sunshine',
    'princess',
    'azerty',
    'trustno1',
    'password123',
    'passw0rd',
    'p@ssw0rd',
    'starwars',
    'solo',
    'loveme',
    'zaq1zaq1',
    'qazwsx',
    'password!',
    'password123!',
    '000000',
    '696969',
    '123321',
    '654321',
    '88888888',
    '555555',
    '7777777',
    '222222',
    '444444',
    '131313',
    '121212',
    '6969',
    '159753',
    '147258369',
    'batman',
    'hottie',
    'killer',
    'qwert',
    'michael',
    'superman',
    'nothing',
    'q1w2e3r4',
    'asdfgh',
    'asdf1234',
    'password2020',
    'welcome1',
    'changeme',
    'default',
    'company',
    'office',
    'administrator1',
    'pass123',
    'p@ssword1',
    'abc12345',
    'access',
    'flower',
    'internet',
    'freedom',
    'whatever',
    'ginger',
    'pepper',
    'sparky',
    'lovely',
    'cheese',
    'august',
    'cookie',
    'mypass',
    'compaq',
    'comcast',
    'hello',
    'hello123',
    '1qaz2wsx',
    'zaq12wsx',
    'loveyou',
    '0000',
    '2222',
    '3333',
    '4444',
    '5555',
    '6666',
    '7777',
    '8888',
    '9999',
    'password'
    ],

};