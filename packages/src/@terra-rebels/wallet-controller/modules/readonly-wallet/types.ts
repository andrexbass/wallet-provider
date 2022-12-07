import { NetworkInfo } from '@terra-rebels/wallet-types';

export interface ReadonlyWalletSession {
  network: NetworkInfo;
  terraAddress: string;
}
