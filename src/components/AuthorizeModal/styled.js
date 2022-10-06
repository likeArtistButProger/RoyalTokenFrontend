import styled from "styled-components";

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 20px;
    background: #FFFFFF;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 8px;
`;

const Wallet = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    &:hover span {
        color: rgb(95 97 111);
    }
`;

export {
    Modal,
    Wallet
}