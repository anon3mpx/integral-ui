import { OTHER_TOKENS, STABLECOINS } from "config";
import { useTokensState } from "@/state/tokensStore";
import { useEffect, useRef } from "react";
import { Address } from "viem";
import { useChainId } from "wagmi";

export function useTokenInitializer() {
    const chainId = useChainId();
    const hasInitialized = useRef(false);
    
    const { actions: { importToken } } = useTokensState();

    useEffect(() => {
        if (hasInitialized.current) return;
        
        // Import stablecoins for current chain
        if (STABLECOINS[chainId as keyof typeof STABLECOINS]) {
            Object.values(STABLECOINS[chainId as keyof typeof STABLECOINS]).forEach((token: any) => {
                importToken(
                    token.address as Address,
                    token.symbol,
                    token.name,
                    token.decimals,
                    chainId
                );
            });
        }

        // Import other tokens for current chain
        if (OTHER_TOKENS[chainId as keyof typeof OTHER_TOKENS]) {
            Object.values(OTHER_TOKENS[chainId as keyof typeof OTHER_TOKENS]).forEach((token: any) => {
                importToken(
                    token.address as Address,
                    token.symbol,
                    token.name,
                    token.decimals,
                    chainId
                );
            });
        }

        hasInitialized.current = true;
    }, [chainId, importToken]);
} 