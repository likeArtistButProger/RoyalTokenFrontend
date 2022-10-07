import styled from "styled-components";
import { Card } from "../../ui/Card";

const RewardsTableStyled = styled(Card)`
    margin: 20px 0 0 0;
`;

const Table = styled.table`
    width: 100%;
    margin-top: 30px;


    & thead {

        & tr {
            margin: 0 auto;
            font-size: 14px;
            line-height: 18px;
            text-align: center;
        }
    }

`;

export {
    RewardsTableStyled,
    Table
}