import React, { useRef } from "react";
import { WALLETS } from "../../constants";
import { Modal, Wallet } from "./styled";
import { Box, Text } from "../../ui";
import { useClickOutside, useConnect } from "../../hooks";
import { useAuthorizeModal } from "./AuthorizeModalProvider";
import { createPortal } from "react-dom";

const AuthorizeModal = () => {
    const { connect } = useConnect();
    const { hideModal } = useAuthorizeModal();
    const ModalRef = useRef(null);
    useClickOutside(ModalRef, hideModal)

    return createPortal(
        <Modal ref={ModalRef}>
            {
                WALLETS.map(wallet => (
                    <Wallet onClick={() => connect(wallet)} key={wallet.name}>
                        <img src={`/images/wallets/${wallet.image}`} alt={wallet.name} width={45} height={45} />
                        <Box m="10px 0 0 0">
                            <Text size="m">{wallet.name}</Text>
                        </Box>
                    </Wallet>
                ))
            }
        </Modal>,
        document.body
    );
}

export {
    AuthorizeModal
}