import React, { useCallback, useContext, useState } from "react";
import { AuthorizeModal } from "./AuthorizeModal";

const AuthorizeModalContext = React.createContext({
    showModal: ()=>{},
    hideModal: ()=>{}
});

const AuthorizeModalProvider = ({ children }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = useCallback(() => {
        setIsModalVisible(true);
    }, [setIsModalVisible]);

    const hideModal = useCallback(() => {
        setIsModalVisible(false);
    }, [setIsModalVisible])

    return (
        <AuthorizeModalContext.Provider value={{
            showModal,
            hideModal
        }}>
            {
                isModalVisible &&
                <AuthorizeModal />
            }
            {children}
        </AuthorizeModalContext.Provider>
    );
}

const useAuthorizeModal = () => {
    const helpers = useContext(AuthorizeModalContext);

    return helpers;
}

export { useAuthorizeModal };
export default AuthorizeModalProvider;