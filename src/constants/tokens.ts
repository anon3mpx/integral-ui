import { Token } from "@cryptoalgebra/sdk";
import { DEFAULT_CHAIN_ID } from "./default-chain-id";

export const STABLECOINS = {
  USDC: new Token(
    DEFAULT_CHAIN_ID,
    "0xAbAc6f23fdf1313FC2E9C9244f666157CcD32990",
    6,
    "USDC",
    "USDC"
  ),
};
