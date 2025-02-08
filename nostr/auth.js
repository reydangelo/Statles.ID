import {schnorr} from '@noble/curves/secp256k1'
import WebSocket from 'ws';
import { eventIdAndSig } from './utils.js'

export function generateKeyPair(){
    const privKey = Buffer.from(schnorr.utils.randomPrivateKey()).toString('hex');
    const pubKey = Buffer.from(schnorr.getPublicKey(privKey)).toString('hex')
    return {privateKey : privKey, publicKey: pubKey}
}


export function loginUser(publicKey, privateKey, relay_url){

    if (schnorr.getPublicKey(privateKey) !== publicKey){
        return {}
    }

    const relay = new WebSocket(relay_url);
    let userData = {};

    relay.on('open', () => {
        const userDataRequest = {
            authors: [publicKey],
            kinds: [0],
            limit: 1
        };

        relay.send(JSON.stringify(['REQ', '1', userDataRequest]))
    });

    relay.on('message', (data) => {

        const message = JSON.parse(data);

        if (Array.isArray(message) && message[0] === 'EVENT' && message[1] === '1' &&  typeof(message[2]) === 'object'){
            userData = message[2]['content']
            relay.close()
            return userData;
        }
    });
};

export function registerUser(
    firstName,
    middleName = null,
    lastName,
    gender,
    dob,
    address,
    country,
    id = null,
    phoneNUmber,
    relay_url,
    privateKey,
    publicKey) {

    const registerEvent = {
        pubkey: publicKey,
        created_at: Math.floor(Date.now() / 1000),
        kind: 0,
        tags: [],
        content: JSON.stringify({
            firstName: firstName,           //First name
            middleName: middleName,         //Middle name (optional)
            lastName: lastName ,            //Last name
            gender: gender,                 //gender
            dob: dob,                       //Date of Birth
            address: address,               //Current living address
            country: country,               //Current living country
            id: id,                         //Any IDs [e.g. NRC, Passport, Refugee] (optional)
            phoneNUmber: phoneNUmber,       //Phone Number
        })
    };

    const idAndSig = eventIdAndSig(registerEvent, privateKey);

    registerEvent.sig = idAndSig.sig;
    registerEvent.id = idAndSig.id;

    const relay = new WebSocket(relay_url);

    relay.on('open', () => {
        console.log('Connected to Relay!');
        relay.send(JSON.stringify(['EVENT', registerEvent]));
    });

    relay.on('message', (data) => {
        const message = JSON.parse(data)
        if (message[0] === 'OK' && message[1] == registerEvent.id && message[2] == true){
            relay.close()
            return true
        }
        else {
            return false
        }
    });
}