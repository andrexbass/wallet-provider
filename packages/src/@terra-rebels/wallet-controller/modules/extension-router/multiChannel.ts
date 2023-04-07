import { TerraWebExtensionConnector } from '@terra-rebels/web-extension-interface';

export interface ExtensionInfo {
  name: string;
  identifier: string;
  icon: string;
  connector?: () =>
    | TerraWebExtensionConnector
    | Promise<TerraWebExtensionConnector>;
}

declare global {
  interface Window {
    terraWallets: ExtensionInfo[] | undefined;
  }
}

export function getTerraExtensions(): ExtensionInfo[] {
  return Array.isArray(window.terraWallets)
    ? window.terraWallets
    : window.isTerraExtensionAvailable
    ? [
        {
          name: 'Rebel Station',
          identifier: 'rebel-station',
          icon: 'https://assets.terrarebels.net/icon/wallet-provider/station.svg',
        },
      ]
    : [];
}
