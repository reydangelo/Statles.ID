import crypto from 'node:crypto';
import { schnorr } from "@noble/curves/secp256k1";

export function eventIdAndSig(event, privateKey){
    const eventStr = JSON.stringify([0, event.pubkey, event.created_at, event.kind, event.tags, event.content]);
    const eventHash = crypto.createHash('sha256').update(eventStr).digest();

    const eventId = eventHash.toString('hex');
    const eventSig = Buffer.from(schnorr.sign(eventHash.toString('hex'), privateKey)).toString('hex');

    return {id: eventId, sig: eventSig};
}

