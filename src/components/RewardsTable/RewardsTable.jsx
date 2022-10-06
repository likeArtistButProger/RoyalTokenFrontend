import React from "react";
import { RewardsTableStyled } from "./styled";
import { Box, Button, Text } from "../../ui";

const RewardsTable = () => {
    return (
        <RewardsTableStyled>
            <Box type="flex-spreaded" align="center">
                <Text size="b">My deposits</Text>
                <Box type="flex">
                    <Box m="0 5px 0 0">
                        <Button styleType="medium">Collect USDT</Button>
                    </Box>
                    <Button styleType="medium">Collect ROYT</Button>
                </Box>
            </Box>

        </RewardsTableStyled>
    )
}

export default RewardsTable;