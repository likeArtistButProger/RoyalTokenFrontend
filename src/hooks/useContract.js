import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import { getContract } from "../utils/getContract";

function useContract(abi, address) {
    const { account, library } = useWeb3React();

    return useMemo(() => getContract(address, abi, !!account ? library.getSigner(0) : library), [account, library, abi, address])
}

export { useContract };