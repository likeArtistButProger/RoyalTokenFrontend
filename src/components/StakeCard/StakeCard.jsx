import { useWeb3React } from "@web3-react/core";
import React, { useCallback, useEffect, useState } from "react";
import { MAX_UINT, TOKEN_ADDRESS } from "../../constants";
import { useBalanceOf, useStakingContract } from "../../hooks";
import { Box, Button, Label, Text, Input } from "../../ui";
import { StakeCardStyled } from "./styled";

const StakeCard = () => {
    const { account, library } = useWeb3React();
    const [inputAmount, setInputAmount] = useState("");
    const { balance: balanceROYT, balanceOf: balanceOfROYT } = useBalanceOf();
    const { allowance, checkAllowance, stakeTokens, approveTokens } = useStakingContract();

    useEffect(() => {
        if(!!account && !!library) {
            balanceOfROYT(TOKEN_ADDRESS);
        }
    }, [account, balanceOfROYT, library]);

    const onAction = useCallback(async () => {
        if(!!account && !!library) {
            if(allowance > 0) {
                if(inputAmount > 0) {
                    await approveTokens(MAX_UINT);
                }
            } else {
                if(inputAmount > 0) {
                    await stakeTokens(inputAmount);
                }
            }
        }
    }, [account, library, allowance, approveTokens, inputAmount, stakeTokens]);

    return (
        <StakeCardStyled>
            <Box m="0 0 10px 0">
                <Label s alignCenter>STAKE</Label>
            </Box>
            <Box type="flex" column>
                <Box m="0 0 5px 0" type="flex-spreaded">
                    <Text size="sm">My balance: {balanceROYT} ROYT</Text>
                </Box>
                <Input type="number" value={inputAmount} onChange={setInputAmount} />
                <Box m="40px 0 5px 0" type="flex" justifyContent="center">
                    <Text size="m">Staking rewards daily:</Text>
                </Box>
                <Box type="flex" justifyContent="center">
                    <Text size="sm">{inputAmount / 365} ROYT</Text>
                </Box>
            </Box>
            <Box type="flex" justifyContent="center" m="45px 0 0 0">
                <Button onClick={onAction} styleType="bigBoy">{allowance > 0 ? "Stake" : "Approve"}</Button>
            </Box>
        </StakeCardStyled>
    )
};

export default StakeCard;