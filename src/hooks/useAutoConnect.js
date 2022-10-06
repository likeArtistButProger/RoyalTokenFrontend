import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { WALLETS as wallets, connectorKey } from '../constants';

const useAutoConnect = () => {
    const { activate } = useWeb3React();

    useEffect(() => {
        const walletName = localStorage.getItem(connectorKey);

        if(walletName !== null) {
            const wallet = wallets.find((wallet) => wallet.name === walletName);

            if(wallet) {
                activate(wallet.connector);
            }
        }
    }, [activate]);
}

export { useAutoConnect };
