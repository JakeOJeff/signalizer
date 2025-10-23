# Signalizer

## What is Signalizer?

It is a simple to use encoding and decoding tool. It also has api endpoints which you can use for the former purposes!

## How to Use Signalizer

### Encoding

- You Can encode directly by going to '/create'. Type in your message, select the encoder you want and Encode your Values. All Encoders except SHA-256 can be encoded, where SHA-256 creates an Encrypted Hash.
- You can also use an API endpoint to encode 
```
curl -X POST http://signalizer.vercel.app/api/encode  -H "Content-Type: application/json"  -d '{"message": "hello", "method": "morse"}' 
```


### Decoding

- You Can decode directly by going to '/decode'. Type in your message, select the decoder you want and decode your Values. All Decoders except SHA-256 can be encoded, where SHA-256 cannot be decrypted unless using Brute-Force.
- You can also use an API endpoint to decode
```
// curl -X POST http://signalizer.vercel.app/api/decode  -H "Content-Type: application/json"  -d "{"message":"aGVsbG8=","method":"base64"}"
```


Feel free to contact if it doesn't work as intended!
