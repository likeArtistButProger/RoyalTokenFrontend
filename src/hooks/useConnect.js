import {useCallback} from 'react';
import {useWeb3React} from "@web3-react/core";
import {NoEthereumProviderError} from '@web3-react/injected-connector'
import {WALLETS} from "../constants";
import {useAuthorizeModal} from '../components/AuthorizeModal';
import { connectorKey } from '../constants';

const useConnect = () => {
  const {activate, deactivate} = useWeb3React();
  const {hideModal} = useAuthorizeModal();

  const connect = useCallback(async (wallet) => {
    await activate(wallet.connector, (err) => {
      if (err instanceof NoEthereumProviderError) {
        localStorage.removeItem(connectorKey);
      }
    });

    localStorage.setItem(connectorKey, wallet.name);
    hideModal();
  }, [activate, hideModal]);

  const disconnect = useCallback(async () => {
    deactivate();

    if (window.localStorage.getItem('walletconnect')) {
      const walletConnect = WALLETS.find(wallet => wallet.name === 'Wallet Connect');

      if (!!walletConnect) {
        const {connector} = walletConnect;
        connector.walletconnect.close();
        connector.walletconnect.walletConnectProvider = null;
      }
    }
    window.localStorage.removeItem(connectorKey);
    hideModal();
  }, [deactivate, hideModal]);

  return {connect, disconnect};
}

export {useConnect};
