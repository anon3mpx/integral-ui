import { ChainId } from "./contract-addresses";

export const CHAIN_NAME = {
  [ChainId.BaseSepolia]: "Base Sepolia",
  [ChainId.PulsechainTestnet]: "Pulsechain Testnet",
};

export const NATIVE_SYMBOL = {
  [ChainId.BaseSepolia]: "ETH",
  [ChainId.PulsechainTestnet]: "tPLS",
};

export const NATIVE_NAME = {
  [ChainId.BaseSepolia]: "Ethereum",
  [ChainId.PulsechainTestnet]: "Pulse",
};

export const CHAIN_ID = {
  [ChainId.BaseSepolia]: ChainId.BaseSepolia,
  [ChainId.PulsechainTestnet]: ChainId.PulsechainTestnet,
};

export const DEFAULT_CHAIN_ID = ChainId.BaseSepolia;
export const DEFAULT_CHAIN_NAME = CHAIN_NAME[DEFAULT_CHAIN_ID];
export const DEFAULT_NATIVE_SYMBOL = NATIVE_SYMBOL[DEFAULT_CHAIN_ID];
export const DEFAULT_NATIVE_NAME = NATIVE_NAME[DEFAULT_CHAIN_ID];

export const OTHER_CHAIN_ID = ChainId.PulsechainTestnet;
export const OTHER_CHAIN_NAME = CHAIN_NAME[OTHER_CHAIN_ID];
export const OTHER_NATIVE_SYMBOL = NATIVE_SYMBOL[OTHER_CHAIN_ID];
export const OTHER_NATIVE_NAME = NATIVE_NAME[OTHER_CHAIN_ID];
