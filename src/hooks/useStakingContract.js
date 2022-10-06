import { useCallback, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import bn from "bignumber.js";
import { DEFAULT_DECIMALS, StakingAbi, STAKING_ADDRESS, TokenAbi, TOKEN_ADDRESS } from "../constants";
import { useContract } from "./useContract"

const useStakingContract = () => {
    const { account } = useWeb3React();
    const stakingContract = useContract(StakingAbi, STAKING_ADDRESS);
    const tokenContract = useContract(TokenAbi, TOKEN_ADDRESS);
    
    const [accountDeposits, setAccountDeposits] = useState([]);
    const [accountRewards, setAccountRewards] = useState([]);
    const [allowance, setAllowance] = useState(0);

    const checkAllowance = useCallback(async () => {
        if(!!account && !!tokenContract) {
            const allowanceBN = await tokenContract.allowance(account, STAKING_ADDRESS);

            setAllowance(allowanceBN.toNumber());
        }
    }, [account, tokenContract, setAllowance]);
    
    const approveTokens = useCallback(async (amount_) => {
        if(!!tokenContract && !!account) {
            const amount = new bn(amount_).times(DEFAULT_DECIMALS).toFixed();
            
            await (await tokenContract.approve(STAKING_ADDRESS, amount)).wait();
        }
    }, [account, tokenContract]);
    
    const stakeTokens = useCallback(async (amount) => {
        if(!!stakingContract && !!account) {
            await stakingContract.stake(amount);
        }
    }, [account, stakingContract]);

    const getAccountDeposits = useCallback(async () => {
        if(!!stakingContract && !!account) {
            const deposits = await stakingContract.getAllDeposits();

            setAccountDeposits(deposits);
        }
    }, [account, stakingContract]);

    const getAccountRewards = useCallback(async () => {
        if(!!stakingContract && !!account) {
            const deposits = await stakingContract.getAvailableRewards(account);

            setAccountRewards(deposits);
        }
    }, [account, stakingContract]);

    const receiveRewardsRoyt = useCallback(async () => {
        if(!!account && !!stakingContract) {
            await stakingContract.receiveRewards();
        }
    }, [account, stakingContract]);

    const receiveRewardRoyt = useCallback(async (index) => {
        if(!!account && !!stakingContract) {
            await stakingContract.receiveReward(index);
        }
    }, [account, stakingContract]);

    const receiveRewardsUSDT = useCallback(async () => {
        if(!!account && !!stakingContract) {
            await stakingContract.receiveRewardsUsdt();
        }
    }, [account, stakingContract]);

    useEffect(() => {
        if(!!account && !!tokenContract) {
            checkAllowance();
            getAccountDeposits();
            getAccountRewards();
        }
    }, [account, tokenContract, checkAllowance, getAccountDeposits, getAccountRewards]);

    return {
        approveTokens,
        accountRewards,
        allowance,
        accountDeposits,
        checkAllowance,
        stakeTokens,
    }
}

export {
    useStakingContract
}