import { WNATIVE, Token } from "@cryptoalgebra/custom-pools-sdk";
import { ChainId } from "./contract-addresses";
import { OTHER_TOKENS, STABLECOINS } from "./tokens";

type ChainTokenList = {
  readonly [chainId: number]: Token[];
};

export const WNATIVE_EXTENDED: { [chainId: number]: Token } = {
  ...WNATIVE,
  [ChainId.PulsechainTestnet]: new Token(
    ChainId.PulsechainTestnet,
    "0x70499adEBB11Efd915E3b69E700c331778628707",
    18,
    "WPLS",
    "Wrapped Pulse"
  ),
};

const WNATIVE_ONLY: ChainTokenList = Object.fromEntries(
  Object.entries(WNATIVE_EXTENDED).map(([key, value]) => [key, [value]])
);

export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WNATIVE_ONLY,
  [ChainId.BaseSepolia]: [
    ...WNATIVE_ONLY[ChainId.BaseSepolia],
    STABLECOINS[ChainId.BaseSepolia].USDC,
  ],
  [ChainId.PulsechainTestnet]: [
    ...WNATIVE_ONLY[ChainId.PulsechainTestnet],
    STABLECOINS[ChainId.PulsechainTestnet].USDC,
    ...Object.values(OTHER_TOKENS[ChainId.PulsechainTestnet]),
  ],
};
