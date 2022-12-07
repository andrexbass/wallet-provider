# Common types of `@terra-rebels/wallet-provider`

This is a separate package because it is used for [`@terra-rebels/use-wallet`](https://www.npmjs.com/package/@terra-rebels/use-wallet), [`@terra-rebels/wallet-controller`](https://www.npmjs.com/package/@terra-rebels/wallet-controller), and [`@terra-rebels/wallet-provider`](https://www.npmjs.com/package/@terra-rebels/wallet-provider).

You don't have to use this separately.

It is re-exported from them.

# APIs

- Types
  - `enum WalletStatus`
  - `enum ConnectType`
  - `type WalletInfo`
  - `type WalletStates`
  - `type NetworkInfo`
  - `type TxResult extends CreateTxOptions`
  - `type SignResult extends CreateTxOptions`
  - `type SignBytesResult`
- Error types
  - `class UserDenied extends Error`
  - `class CreateTxFailed extends Error`
  - `class TxFailed extends Error`
  - `class Timeout extends Error`
  - `class TxUnspecifiedError extends Error`
