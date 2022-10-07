import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: rgba(140, 124, 240, 0.95);
`

const AccountInfo = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background: rgba(132, 112, 232, 0.95);
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export {
    AccountInfo,
    Container
}