import crypto from 'node:crypto';

// Generate RSA key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048, // Length of the key in bits
  publicKeyEncoding: {
    type: 'spki', // Public key type
    format: 'pem' // Output format
  },
  privateKeyEncoding: {
    type: 'pkcs8', // Private key type
    format: 'pem' // Output format
  }
});

console.log("Public Key:", publicKey);
console.log("Private Key:", privateKey);

// Encrypt a message using the public key
const message = "Hello, this is a secret message!";
const encryptedMessage = crypto.publicEncrypt(publicKey, Buffer.from(message));

console.log("Encrypted Message:", encryptedMessage.toString("base64"));

// Decrypt the message using the private key
const decryptedMessage = crypto.privateDecrypt(privateKey, encryptedMessage);

console.log("Decrypted Message:", decryptedMessage.toString());
