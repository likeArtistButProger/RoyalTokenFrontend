import React, { useCallback, useState } from "react";
import bn from "bignumber.js";
import { usePresaleContract } from "../../hooks/usePresaleContract";
import { Box, Button, Label, Text } from "../../ui";
import { Input } from "../../ui/Input";
import { BuyCardStyled } from "./styled";
import { useTimer } from "../../hooks/useTimer";

const BuyCard = () => {
    const [inputAmount, setInputAmount] = useState("");
    const { buyTokens, currentRoundInfo, updateCurrentRoundInfo } = usePresaleContract();
    const { timeFormatted } = useTimer(currentRoundInfo.startTime, currentRoundInfo.startTime + currentRoundInfo.duration, 1);

    const onAction = useCallback(async () => {
        if(inputAmount > 0) {
            await buyTokens(inputAmount).then(() => {
                updateCurrentRoundInfo();
            });
        }
    }, [buyTokens, inputAmount, updateCurrentRoundInfo]);

    return (
        <BuyCardStyled>
            <Box m="0 0 10px 0">
                <Label s alignCenter>BUY</Label>
            </Box>
            <Box type="flex" column>
                <Box m="0 0 5px 0" type="flex-spreaded">
                    <Text size="sm">Token price: {currentRoundInfo.price} ETH</Text>
                    <Text size="sm">Round ends in: {timeFormatted}</Text>
                </Box>
                <Input type="number" value={inputAmount} onChange={setInputAmount} />
                <Box m="5px 0 0 0">
                    <Text size="sm">You will receive: {inputAmount ?? "0"} ROYT for {inputAmount && new bn(currentRoundInfo.price).times(inputAmount ?? "0").toNumber()} ETH</Text>
                </Box>
                <Box m="20px 0 5px 0" type="flex" justifyContent="center">
                    <Text size="m">Staking rewards daily:</Text>
                </Box>
                <Box type="flex" justifyContent="center">
                    <Text size="sm">{inputAmount / 365 * 2} ROYT</Text>
                </Box>
                <Box type="flex" justifyContent="center">
                    <Text size="sm">{ currentRoundInfo.price && inputAmount && new bn(currentRoundInfo.price).times(inputAmount ?? "0").times(1000 * 2).div(5).div(365).toFixed()} USDT</Text>
                </Box>
            </Box>
            <Box type="flex" justifyContent="center" m="20px 0 0 0">
                <Button onClick={onAction} styleType="bigBoy">Buy</Button>
            </Box>
        </BuyCardStyled>
    );
}

export default BuyCard;