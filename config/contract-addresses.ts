import { Address } from "viem";

/* 
{
  "poolDeployer": "0xd2842C6Fcec6D5020844bdDE0Fd3b7DcAb3470e4",
  "factory": "0x4e1804cB5B0c7E3F0Cf4d831dc02520Cd2BD6537",
  "vault": "0x033Ec98B64c0c0098FaeBB61996aA5761356DFb1",
  "vaultFactory": "0xa696cFcBEf4d3a8A42cFa6EBa9190B51dAd3Cb3e",
  "wrapped": "0x70499adEBB11Efd915E3b69E700c331778628707",
  "entryPoint": "0x0d5236bC0ce6186A9dE406A12e4b99075c3c4c79",
  "tickLens": "0x2636cAb94a65De578361230882cC9Baa31a64CC1",
  "quoter": "0x0234A6fE0F7D577E2ece168896277A56bA313FFE",
  "quoterV2": "0x4966e2DEE5a908586e58c5776B3996C108804FB5",
  "swapRouter": "0xe227B51F5D7079fAa07b7621657e3aa5906d2185",
  "nftDescriptor": "0x69fA40635010692BE668714b0F6Cc0F8cCF3Dbe7",
  "proxy": "0xa9dB3500Ab8798F37BdB97045093bF4861cE473E",
  "admin": "0x05F8cC8753D90d67DBB8c02118440b8283F941c9",
  "nonfungiblePositionManager": "0xE0445E47e029A9bd258D1c1DdC7E1cD3b1A0ee36",
  "mcall": "0x3aA5461Db8c839973CDfb374778846B0454C0837"
}

*/

export enum ChainId {
  BaseSepolia = 84532,
  PulsechainTestnet = 943,
}

export const ALGEBRA_FACTORY: Record<number, Address> = {
  [ChainId.BaseSepolia]: "0xcD58521ecaC7724d1752F941C56490c27bAe9ab0",
  [ChainId.PulsechainTestnet]: "0x4e1804cB5B0c7E3F0Cf4d831dc02520Cd2BD6537",
};

export const QUOTER_V2: Record<number, Address> = {
  [ChainId.BaseSepolia]: "0x1c219ba68A9100E4F3475A624cf225ADA02c0F1B",
  [ChainId.PulsechainTestnet]: "0x4966e2DEE5a908586e58c5776B3996C108804FB5",
};

export const SWAP_ROUTER: Record<number, Address> = {
  [ChainId.BaseSepolia]: "0x3400D4f83c528A0E19c380d92DD100eA51d8980c",
  [ChainId.PulsechainTestnet]: "0xe227B51F5D7079fAa07b7621657e3aa5906d2185",
};

export const NONFUNGIBLE_POSITION_MANAGER: Record<number, Address> = {
  [ChainId.BaseSepolia]: "0x5baD56bfBABEC1A5A7848399762f54566FA22557",
  [ChainId.PulsechainTestnet]: "0xE0445E47e029A9bd258D1c1DdC7E1cD3b1A0ee36",
};

export const ALGEBRA_ETERNAL_FARMING: Record<number, Address> = {
  [ChainId.BaseSepolia]: "0x1C5E8C41B5B119dc8fc5ac8e53692E323a6D78D7",
  [ChainId.PulsechainTestnet]: "0x4e1804cB5B0c7E3F0Cf4d831dc02520Cd2BD6537",
};

export const FARMING_CENTER: Record<number, Address> = {
  [ChainId.BaseSepolia]: "0x4Ce15380bA2573954e67298209B8DF84222bc62E",
  [ChainId.PulsechainTestnet]: "0x4e1804cB5B0c7E3F0Cf4d831dc02520Cd2BD6537",
};

export const LIMIT_ORDER_MANAGER: Record<number, Address> = {
  [ChainId.BaseSepolia]: "0x05F9E353559da6f2Bfe9A0980D5C3e84eA5d4238",
  [ChainId.PulsechainTestnet]: "0x05F9E353559da6f2Bfe9A0980D5C3e84eA5d4238",
};
