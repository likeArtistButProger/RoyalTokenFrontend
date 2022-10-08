import bn from "bignumber.js";

export * from "./addresses";
export * from "./connectors";
export * from "./rpcUrls";
export * from "./wallets";
export * from "./abis";

export const DEFAULT_DECIMALS = new bn(10).pow(18);

export const MAX_UINT = new bn(2).pow(256).minus(1).toFixed();

export const connectorKey = "wallet";