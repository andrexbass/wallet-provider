# `@terra-rebels/use-wallet`

Core interface of [`@terra-rebels/wallet-provider`](https://www.npmjs.com/package/@terra-rebels/wallet-provider).

If you want to create a library using the `useWallet()` of `@terra-rebels/wallet-provider`, you can use
this `@terra-rebels/use-wallet` instead of `@terra-rebels/wallet-provider` for its internal dependence.

Because `@terra-rebels/wallet-provider` contains multiple implementations, if your library is built
on `@terra-rebels/wallet-provider`, problems can arise in exceptional situations (e.g. when users implement and use
Context themselves).

Using `@terra-rebels/use-wallet` instead of `@terra-rebels/wallet-provider` can make your library work reliably in a more
diverse set of implementations.

You don't have to use this library if you're just creating a WebApp. Use `@terra-rebels/wallet-provider`.

# APIs

- React context and hooks
  - `const WalletContext = React.createContext()`
  - `useWallet(): Wallet`
  - `useConnectedWallet(): ConnectedWallet`
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
