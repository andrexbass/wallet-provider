import { CreateTxOptions, PublicKey, Tx } from '@terra-money/terra.js';

export interface NetworkInfo {
  /** Network name (e.g. mainnet) */
  name: string;

  /** chainID (e.g. columbus-5) */
  chainID: string;

  /** lcd endpoint (e.g. https://lcd.terra.dev) */
  lcd: string;
}

export interface TxResult extends CreateTxOptions {
  result: {
    height: number;
    raw_log: string;
    txhash: string;
  };
  success: boolean;
}

export interface SignResult extends CreateTxOptions {
  result: {
    /** @deprecated This API has been deprecated. please use result.tx.auth_info */
    public_key: null;
    /** @deprecated This API has been deprecated. this value will be always 0 */
    recid: number;
    /** @deprecated This API has been deprecated. please use result.tx.signatures */
    signature: null;
    /** @deprecated This API has been deprecated. please use result.tx or result.txData */
    stdSignMsgData: null;

    txData: Tx.Data;
    tx: Tx;
  };
  success: boolean;
}

export interface SignBytesResult {
  encryptedBytes: string;
  result: {
    public_key: PublicKey.Data;
    recid: string;
    signature: string;
  };
  success: boolean;
}

export enum WalletStatus {
  INITIALIZING = 'INITIALIZING',
  WALLET_NOT_CONNECTED = 'WALLET_NOT_CONNECTED',
  WALLET_CONNECTED = 'WALLET_CONNECTED',
}

export enum ConnectType {
  /** Terra Station Chrome Extension */
  CHROME_EXTENSION = 'CHROME_EXTENSION',

  /** [Hidden mode]: Next version of the Terra Station Browser Extensions */
  WEB_CONNECT = 'WEB_CONNECT',

  /** Terra Station Mobile */
  WALLETCONNECT = 'WALLETCONNECT',

  /** Read only mode - View an address */
  READONLY = 'READONLY',
}

export interface Connection {
  type: ConnectType;
  identifier?: string;

  name: string;
  icon: string;
}

export interface WalletInfo {
  connectType: ConnectType;
  terraAddress: string;
  design?: string;
}

export type WalletStates =
  | {
      status: WalletStatus.INITIALIZING;
      network: NetworkInfo;
    }
  | {
      status: WalletStatus.WALLET_NOT_CONNECTED;
      network: NetworkInfo;
    }
  | {
      status: WalletStatus.WALLET_CONNECTED;
      network: NetworkInfo;
      wallets: WalletInfo[];
    };