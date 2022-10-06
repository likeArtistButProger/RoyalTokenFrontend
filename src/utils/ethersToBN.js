import { BigNumber } from "bignumber.js"

export const ethersToBN = (ethersBN) => 
    new BigNumber(ethersBN.toString())