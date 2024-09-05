// src/interactWithCanister.js

import { HttpAgent, Actor } from '@dfinity/agent';
import { idlFactory } from '../src/interfaces/icpINTEGRATION_backend.did.mjs'; // Import Candid interface

// Define the canister ID
const canisterId = 'ajuq4-ruaaa-aaaaa-qaaga-cai';
//&id=a3shf-5eaaa-aaaaa-qaafa-cai

async function main() {
  // Create an HTTP agent to connect to the ICP
  const agent = new HttpAgent({
    host: 'http://localhost:51088',  // The URL for the Internet Computer
  });

  // Fetch the root key for certificate validation during local development
  if (process.env.NODE_ENV === 'development') {
    agent.fetchRootKey();
  }

  // Create an actor (a proxy for calling the canister)
  const myBackendActor = Actor.createActor(idlFactory, {
    agent,
    canisterId,
  });

  // Call methods on your canister
  try {
    const result = await myBackendActor.createAccount('account-id', 1000, 'Account Description');
    console.log('Account created:', result);
  } catch (error) {
    console.error('Error calling canister method:', error);
  }
}

// Run the main function
main().catch(console.error);
