import { useCallback, useEffect, useState } from "react";
import { DEFAULT_DECIMALS, PresaleAbi, PRESALE_ADDRESS } from "../constants";
import { useContract } from "./useContract"
import bn from "bignumber.js";
import { ethersToBN } from "../utils/ethersToBN";
import { useWeb3React } from "@web3-react/core";

const usePresaleContract = () => {
    const [currentRoundInfo, setCurrentRoundInfo] = useState({
        duration: 0,
        minBuyPrice: new bn("0"),
        price: new bn(0).toFixed(),
        saleAmount: "0",
        startTime: "0",
        tokensSold: "0"
    });
    const { library } = useWeb3React();

    const presaleContract = useContract(PresaleAbi, PRESALE_ADDRESS);

    const updateCurrentRoundInfo = useCallback(async () => {
        if(!!library && !!presaleContract) {
            const currentRoundAndSoldTokens = await presaleContract.getCurrentRoundInfo();
            const { duration, minBuyPrice, price, saleAmount, startTime } = currentRoundAndSoldTokens[0];
            const tokensSold = currentRoundAndSoldTokens[1];
    
            const collectedRoundInfo = {
                duration: ethersToBN(duration),
                minBuyPrice: ethersToBN(minBuyPrice).div(DEFAULT_DECIMALS).toFixed(),
                price: ethersToBN(price).div(DEFAULT_DECIMALS).toFixed(),
                saleAmount: ethersToBN(saleAmount).div(DEFAULT_DECIMALS).toFixed(),
                startTime: ethersToBN(startTime),
                tokensSold: ethersToBN(tokensSold)
            };
    
            setCurrentRoundInfo(collectedRoundInfo);
        }
    }, [presaleContract, library]);

    useEffect(() => {
        if(!!presaleContract && !!library) {
            updateCurrentRoundInfo();
        }
    }, [updateCurrentRoundInfo, library, presaleContract]);

    const buyTokens = useCallback(async (amount) => {
        if(!!presaleContract && !!library) {
            const buyAmount = new bn(amount).times(DEFAULT_DECIMALS).toFixed();
            const buyPrice = ethersToBN(currentRoundInfo.price).times(DEFAULT_DECIMALS).times(amount).toFixed();

            await (await presaleContract.buy(buyAmount, { value: buyPrice, gasLimit: "720000" })).wait();
        }
    }, [presaleContract, currentRoundInfo, library]);

    return {
        buyTokens,
        currentRoundInfo,
        updateCurrentRoundInfo
    };

}

export {
    usePresaleContract
}