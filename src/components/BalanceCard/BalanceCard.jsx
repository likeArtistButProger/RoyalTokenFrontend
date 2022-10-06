import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { useBalanceOf } from "../../hooks/useBalanceOf";
import { Box, Text, Label } from "../../ui";
import { BalanceCardStyled } from "./styled";
import { TOKEN_ADDRESS, USDT_ADDRESS } from "../../constants";

const BalanceCard = () => {
    const { account } = useWeb3React();
    const { balance: balanceETH, balanceOf: balanceOfETH } = useBalanceOf();
    const { balance: balanceUSDT, balanceOf: balanceOfUSDT } = useBalanceOf();
    const { balance: balanceROYT, balanceOf: balanceOfROYT } = useBalanceOf();

    useEffect(() => {
        if(!!account) {
            balanceOfETH();
            balanceOfROYT(TOKEN_ADDRESS);
            balanceOfUSDT(USDT_ADDRESS);
        }
    }, [account, balanceOfETH, balanceOfROYT, balanceOfUSDT]);

    return (
        <BalanceCardStyled>
            <Box m="0 0 10px 0">
                <Label s alignCenter>MY BALANCE</Label>
            </Box>
            <Box type="flex" column  align="center" justifyContent="center">
                <Text size="b">{balanceETH} ETH</Text>
                <Box type="flex" width="100%" justifyContent="space-between" m="20px 0 0 0">
                    <Text size="s">{balanceROYT} ROYT</Text>
                    <Text size="s">{balanceUSDT} USDT</Text>
                </Box>
            </Box>
        </BalanceCardStyled>
    )
};

export default BalanceCard;