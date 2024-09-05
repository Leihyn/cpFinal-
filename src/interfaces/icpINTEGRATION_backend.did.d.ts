import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Account {
  'balance' : bigint,
  'owner' : Principal,
  'desc' : string,
}
export type AccountId = string;
export interface _SERVICE {
  'createAccount' : ActorMethod<[string, bigint, string], undefined>,
  'getAccount' : ActorMethod<[string], [] | [Account]>,
  'getAccountsCount' : ActorMethod<[], bigint>,
  'getAllAccounts' : ActorMethod<[], Array<[AccountId, Account]>>,
  'transfer' : ActorMethod<[string, string, bigint], boolean>,
  'whoami' : ActorMethod<[], Principal>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
