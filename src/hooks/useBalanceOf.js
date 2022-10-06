import { useCallback, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { ERC20Abi } from "../constants";
import { getContract } from "../utils/getContract";
import { ethersToBN } from "../utils/ethersToBN";

const useBalanceOf = () => {
    const { account, library } = useWeb3React();
    const [balance, setBalance] = useState("0");
    
    const balanceOf = useCallback(async (contractAddress) => {
        
        if (contractAddress) {
            const contract = getContract(contractAddress, ERC20Abi, library);
            const balance = ethersToBN(await contract.balanceOf(account));
            const decimals = await contract.decimals();

            const balanceFormatted = balance.div(10 ** decimals).toString();

            setBalance(balanceFormatted);
        } else {
            if(!!library) {
                const balanceInWei = await library.getBalance(account);
                const balanceStr = ethers.utils.formatEther(balanceInWei);

                setBalance(balanceStr);
            }
        }
    }, [library, account]);

    return {
        balance,
        balanceOf
    }
};

export {
    useBalanceOf
};