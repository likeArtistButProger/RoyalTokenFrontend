import { Injected, WalletConnect } from './connectors';

export const WALLETS = [
    {
        name: "Metamask",
        image: "metamask.svg",
        connector: Injected,
        supportedNetworkIds: [1, 3, 4, 5, 10, 42, 56, 97, 137, 42161, 421611]
    },
    {
        name: "Wallet Connect",
        image: "wallet_connect.png",
        connector: WalletConnect,
        supportedNetworkIds: [1, 3, 4, 5, 42, 56, 97, 137, 42161, 421611]
    }
]
