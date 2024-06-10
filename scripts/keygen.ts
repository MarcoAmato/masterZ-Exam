/**
 * Generates a new keypair and logs the public and private keys to the console
 * 
 * Run this script with `yarn keygen`
 */

import { Keypair } from "@solana/web3.js";

// Generate a new random keypair, this contains a public key and a private key. The public key is the address of the wallet, the private key is the secret key that allows you to sign transactions
const keypair = Keypair.generate();

console.log(`Public key: ${keypair.publicKey.toBase58()}`);
console.log(`Warning: Save your secret key in a safe place! Anyone with your secret key can act as you!`);
console.log(`Private key: [${keypair.secretKey}]`)
// Save the private key to a file in secrets/
