import crypto from 'node:crypto';
import * as Keychain from 'react-native-keychain';

//encrypt the data to be sent to the user or stored in the database
function encryptData(publicKey, content){
    return crypto.publicEncrypt(publicKey, Buffer.from(content)).toString('base64');
}

//decrypt the data to for the users or the service providers
function decryptData(privateKey, content){
    const userData = Keychain.getGenericPassword();
    const p = userData['privateKey']
    return crypto.privateDecrypt(p, Buffer.from(content, 'base64')).toString()
}

//generate the encryption keypairs for the users and the service providers and store them in local secure storage
function generateKeyPairs(){
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

    return { pubKey: publicKey, privKey: privateKey }
}



