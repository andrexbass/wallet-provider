import {
  getChainOptions,
  WalletController,
} from '@terra-rebels/wallet-controller';

let instance: WalletController;

export async function initController() {
  const chainOptions = await getChainOptions();

  instance = new WalletController({
    ...chainOptions,
  });
}

export function getController(): WalletController {
  return instance;
}
