const { HttpAgent, Actor } = require('@dfinity/agent');
const { idlFactory } = require('../src/interfaces/icpINTEGRATION_backend.did.js'); // Import Candid interface

// Define the canister ID from ICP
const canisterId = 'ajuq4-ruaaa-aaaaa-qaaga-cai&id=a3shf-5eaaa-aaaaa-qaafa-cai';

async function connectToCanister() {
  // Create an HTTP agent to connect to ICP
  const agent = new HttpAgent({
    host: 'http://localhost:8000',  // The URL for the Internet Computer
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
  const result = await myBackendActor.someMethod();
  console.log(result);
}

connectToCanister().catch(console.error);
