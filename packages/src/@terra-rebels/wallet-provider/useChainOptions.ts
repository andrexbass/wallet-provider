import {
  getChainOptions,
  WalletControllerChainOptions,
} from '@terra-rebels/wallet-controller';
import { useEffect, useState } from 'react';

export function useChainOptions(): WalletControllerChainOptions | null {
  const [chainOptions, setChainOptions] =
    useState<WalletControllerChainOptions | null>(null);

  useEffect(() => {
    getChainOptions().then(setChainOptions);
  }, []);

  return chainOptions;
}
