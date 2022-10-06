import { ethers } from "ethers";

export function getContract(address, abi, signer ) {
    const signerOrProvider = signer ?? ethers.providers.getDefaultProvider();

    return new ethers.Contract(address, abi, signerOrProvider); 
}