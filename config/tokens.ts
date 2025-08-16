import { Token } from "@cryptoalgebra/custom-pools-sdk";
import { ChainId } from "./contract-addresses";

export const STABLECOINS = {
  [ChainId.BaseSepolia]: {
    USDC: new Token(
      ChainId.BaseSepolia,
      "0xAbAc6f23fdf1313FC2E9C9244f666157CcD32990",
      6,
      "USDC",
      "USDC"
    ),
  },
  [ChainId.PulsechainTestnet]: {
    USDC: new Token(
      ChainId.PulsechainTestnet,
      "0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07",
      6,
      "USDC",
      "USDC"
    ),
  },
};

export const OTHER_TOKENS = {
  [ChainId.PulsechainTestnet]: {
    PanMoney: new Token(
      ChainId.PulsechainTestnet,
      "0xdb3Ce32B6C407Ff9b5a159290b3741286585F6D1",
      18,
      "PanMoney",
      "PanMoney"
    ),
    PanHoney: new Token(
      ChainId.PulsechainTestnet,
      "0xDE0540B4359D74aF32e6BE86E4F8C9b14FBA2EE3",
      18,
      "PanHoney",
      "PanHoney"
    ),
  },
};
