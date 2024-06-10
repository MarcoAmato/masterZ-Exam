import { 
    Keypair, 
    Connection, 
} from "@solana/web3.js";

import { createMint } from "@solana/spl-token";

import wallet from "../secrets/walletPrivateKey.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

(async () => {

    // Create a new mint
    const mint = await createMint(
        connection,
        keypair,
        keypair.publicKey,
        null,
        6,
    );

    // Log the mint address
    console.log("Mint Address:", mint.toBase58());
})()