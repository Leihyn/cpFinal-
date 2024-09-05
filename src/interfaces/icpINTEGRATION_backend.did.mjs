export const idlFactory = ({ IDL }) => {
  const Account = IDL.Record({
    'balance' : IDL.Int,
    'owner' : IDL.Principal,
    'desc' : IDL.Text,
  });
  const AccountId = IDL.Text;
  return IDL.Service({
    'createAccount' : IDL.Func([IDL.Text, IDL.Int, IDL.Text], [], []),
    'getAccount' : IDL.Func([IDL.Text], [IDL.Opt(Account)], ['query']),
    'getAccountsCount' : IDL.Func([], [IDL.Nat], ['query']),
    'getAllAccounts' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(AccountId, Account))],
        ['query'],
      ),
    'transfer' : IDL.Func([IDL.Text, IDL.Text, IDL.Int], [IDL.Bool], []),
    'whoami' : IDL.Func([], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };
