import React from "react";
import { RewardsTableStyled, Table } from "./styled";
import { Box, Button, Text } from "../../ui";
import RewardRow from "./RewardRow";
import { useStakingContract } from "../../hooks";

const RewardsTable = () => {
    const { accountDeposits, receiveRewardsRoyt, receiveRewardsUSDT } = useStakingContract();

    return (
        <RewardsTableStyled>
            <Box type="flex-spreaded" align="center">
                <Text size="b">My deposits</Text>
                <Box type="flex">
                    <Box m="0 5px 0 0">
                        <Button onClick={receiveRewardsUSDT} styleType="medium">Collect USDT</Button>
                    </Box>
                    <Button onClick={receiveRewardsRoyt} styleType="medium">Collect ROYT</Button>
                </Box>
            </Box>
            <Table>
                <thead>
                    <tr>
                        <th>Deposited</th>
                        <th>Rewards available ROYT</th>
                        <th>Reward received ROYT</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accountDeposits.map((deposit, index) => (
                            <RewardRow key={index} index={index} depositData={deposit} />
                        ))
                    }
                </tbody>
            </Table>
        </RewardsTableStyled>
    )
}

export default RewardsTable;