/**
 * Request an airdrop of 1 solana to the wallet address identified by the public key of the keypair
 * 
 * Run this script with `yarn airdrop`
 */

import { 
    Keypair, 
    Connection, 
    LAMPORTS_PER_SOL 
} from "@solana/web3.js";

// After running keygen.ts, you are given a private key that should be saved in a file called walletPrivateKey.json in the secrets folder
import wallet from "../secrets/walletPrivateKey.json";

// Create a Keypair from the private key in the privateKey.json file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Create a new connection to the devnet cluster, finalized indicates that we are only interested in confirmed blocks
const connection = new Connection("https://api.devnet.solana.com", "finalized");

(async () => {
    try {
        
        const airdropSignature = await connection.requestAirdrop(
            keypair.publicKey,      // Address of the wallet to which the airdrop will be made
            1 * LAMPORTS_PER_SOL    // Amount of SOL to airdrop (1 SOL = 1_000_000_000 lamports)
        );

        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${airdropSignature}?cluster=devnet`);
    } catch (error) {
        console.error(error);
    }
})();