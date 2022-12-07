import {
  createLCDClient,
  WalletLCDClientConfig,
} from '@terra-rebels/wallet-types';
import { LCDClient } from '@terra-rebels/terra.js';
import { useMemo } from 'react';
import { useWallet } from './useWallet';

export function useLCDClient(
  lcdClientConfig?: WalletLCDClientConfig,
): LCDClient {
  const { network } = useWallet();

  return useMemo<LCDClient>(() => {
    return createLCDClient({ lcdClientConfig, network });
  }, [lcdClientConfig, network]);
}
