import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { useAutoConnect } from "../../hooks/useAutoConnect";
import { Button, Box, Text } from "../../ui";
import { useAuthorizeModal } from "../AuthorizeModal";
import { AccountInfo, Container } from "./styled";
import { useBalanceOf } from "../../hooks";
import { TOKEN_ADDRESS, USDT_ADDRESS } from "../../constants";

const Header = () => {
    useAutoConnect();
    const { account } = useWeb3React();
    const { showModal } = useAuthorizeModal();

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
        <Container>
            {
                !!account ? (
                    <>
                        <AccountInfo>
                            <Box m="0 5px 0 0">
                                <Text size="sm" color="white">{balanceETH} ETH</Text>
                            </Box>
                            <Box m="0 5px 0 0">
                                <Text size="sm" color="white">{balanceUSDT} USDT</Text>
                            </Box>
                            <Box m="0 5px 0 0">
                                <Text size="sm" color="white">{balanceROYT} ROYT</Text>
                            </Box>
                        </AccountInfo>
                        <Box m="0 0 0 10px">
                            <AccountInfo>
                                <Text color="white">{account.slice(0, 5)}...{account.slice(-4)}</Text>
                            </AccountInfo>
                        </Box>
                    </>
                    
                ) : (
                    <Button onClick={showModal}>
                        <Text color="white" size="m">Connect</Text>
                    </Button>
                )
            }
        </Container>
    )
}

export default Header;

