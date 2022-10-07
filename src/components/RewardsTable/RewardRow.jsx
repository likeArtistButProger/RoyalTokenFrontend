import React from "react";
import { Button } from "../../ui";
import { useStakingContract } from "../../hooks";

const RewardRow = ({ index, depositData }) => {
    const { accountRewards, accountDeposits, receiveRewardRoyt, withdraw } = useStakingContract();

    {/* 
        bool isPresaled;
        uint256 startTime;
        uint256 deposited;
        uint256 rewardTaken;
    */}

    const deposit = useMemo(() => {
        return accountDeposits[index];
    }, [accountDeposits, index]);

    const reward = useMemo(() => {
        return accountRewards[index];
    }, [accountRewards, index]);

    return (
        <tr>
            <th>{depositData.deposited}</th>
            <th>{reward}</th>
            <th>{depositData.rewardTaken}</th>
            <th>
                <Button onClick={receiveRewardRoyt} styleType="medium">Receive</Button>
            </th>
            <th>
                <Button onClick={() => { withdraw(index) }} styleType="medium">Withdraw</Button>
            </th>
        </tr>
    )
};

export default RewardRow;