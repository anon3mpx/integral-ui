import { Currency } from "@cryptoalgebra/custom-pools-sdk";
import React from "react";
import USDTLogo from "@/assets/tokens/usdt.png";
import USDCLogo from "@/assets/tokens/usdc.svg";
import EtherLogo from "@/assets/tokens/ether.svg";
import { cn } from "@/utils/common/cn";
import { Skeleton } from "@/components/ui/skeleton";
import { Address } from "viem";

interface CurrencyLogoProps {
  currency: Currency | undefined | null;
  size: number;
  className?: string;
  style?: React.CSSProperties;
}

export const specialTokens: {
  [key: Address]: { symbol: string; logo: string };
} = {
  ["0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"]: {
    symbol: "ETH",
    logo: EtherLogo,
  },
  ["0x4200000000000000000000000000000000000006"]: {
    symbol: "ETH",
    logo: EtherLogo,
  },
  ["0x2bf1004d9e80ca087bd1e089d75bc8c471995ac1"]: {
    symbol: "USDT",
    logo: USDTLogo,
  },
  ["0xfde4c96c8593536e31f229ea8f37b2ada2699bb2"]: {
    symbol: "USDT",
    logo: USDTLogo,
  },
  ["0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"]: {
    symbol: "USDC",
    logo: USDCLogo,
  },
  ["0xabac6f23fdf1313fc2e9c9244f666157ccd32990"]: {
    symbol: "USDC",
    logo: USDCLogo,
  },
  ["0xdb3Ce32B6C407Ff9b5a159290b3741286585F6D1"]: {
    symbol: "PanMoney",
    logo: USDCLogo,
  },
  ["0xDE0540B4359D74aF32e6BE86E4F8C9b14FBA2EE3"]: {
    symbol: "PanHoney",
    logo: EtherLogo,
  },
};

const CurrencyLogo = ({
  currency,
  size,
  className,
  style = {},
}: CurrencyLogoProps) => {
  if (!currency)
    return (
      <Skeleton
        className={cn(`flex rounded-full bg-muted-primary`, className)}
        style={{
          minWidth: `${size}px`,
          minHeight: `${size}px`,
          width: `${size}px`,
          height: `${size}px`,
          ...style,
        }}
      />
    );

  const classString = cn(
    `w-[${size}px] h-[${size}px] min-w-[${size}px] min-h-[${size}px] bg-card-dark rounded-full`,
    className
  );

  if (currency.isNative) {
    return (
      <img
        src={EtherLogo}
        alt={"ETH"}
        width={size}
        height={size}
        className={classString}
        style={style}
      />
    );
  }

  const address = currency.wrapped.address.toLowerCase() as Address;

  if (address in specialTokens) {
    return (
      <img
        src={specialTokens[address].logo}
        alt={specialTokens[address].symbol}
        width={size}
        height={size}
        className={classString}
        style={style}
      />
    );
  }

  return (
    <div
      className={`${classString} flex items-center justify-center bg-white text-black`}
      style={{
        minWidth: `${size}px`,
        minHeight: `${size}px`,
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
    >
      {currency.symbol?.slice(0, 2)}
    </div>
  );
};

export default CurrencyLogo;
