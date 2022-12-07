import { CreateTxOptions } from '@terra-rebels/terra.js';
import { NetworkInfo, TxResult } from '@terra-rebels/wallet-types';

export interface WalletPlugin {
  name: string;
  type: string;
  icon: string;
  identifier: string;
  createSession: (
    networks: NetworkInfo[],
  ) => Promise<WalletPluginSession | null>;
}

export interface WalletPluginSession {
  network: NetworkInfo | null;
  terraAddress: string | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;

  post: (txn: CreateTxOptions) => Promise<TxResult>;
}
