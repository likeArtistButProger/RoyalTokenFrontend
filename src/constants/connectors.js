import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { MAINNET } from './rpcUrls';

export const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 10, 42, 56, 97, 137, 80001, 1337, 42161, 421611, 43114, 43113]
});

export const WalletConnect = new WalletConnectConnector({
    rpc: { 1: MAINNET },
    qrcode: true,
    // @ts-ignore
    pollingInterval: 15000
})
