const { HttpAgent, Actor } = require('@dfinity/agent');
const { idlFactory } = require('../src/interfaces/icpINTEGRATION_backend.did.js'); // Import Candid interface
const { Identity } = require('@dfinity/identity');

// Define the canister ID from ICP
const canisterId = 'ajuq4-ruaaa-aaaaa-qaaga-cai';

// Set up identity (replace with actual identity setup if using Internet Identity or another provider)
const identity = Identity.fromPrincipal('your-principal-id');

// Create an HTTP agent with identity
const agent = new HttpAgent({ identity });

// Fetch the root key for certificate validation during local development
if (process.env.NODE_ENV === 'development') {
  agent.fetchRootKey();
}

// Create an actor (a proxy for calling the canister)
const myBackendActor = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});

// Function to interact with your canister
async function interactWithCanister() {
  try {
    const result = await myBackendActor.someMethod();
    console.log(result);
  } catch (error) {
    console.error('Error interacting with canister:', error);
  }
}

// Run the interaction
interactWithCanister();
