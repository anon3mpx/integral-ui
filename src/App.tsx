import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import "./styles/_colors.css";
import "./App.css";

import { WagmiConfig } from "wagmi";
import { defineChain } from "viem";
import Layout from "@/components/common/Layout";

import ETHLogo from "@/assets/tokens/ether.svg";

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

/* const seiTestnet = defineChain({
  id: 1328,
  network: 'sei-testnet',
  name: 'SEI Test',
  nativeCurrency: { name: 'SEI', symbol: 'SEI', decimals: 18 },
  rpcUrls: {
    default: {
      http: [import.meta.env.VITE_INFURA_RPC],
    },
    public: {
      http: [import.meta.env.VITE_INFURA_RPC],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'SeiScan',
      url: 'https://seitrace.com',
    },
    default: {
      name: 'SeiScan',
      url: 'https://seitrace.com',
    },
  },
  testnet: true,
}) */

const baseSepoliaChain = /*#__PURE__*/ defineChain({
  id: 84532,
  network: "baseSepolia",
  name: "Base Sepolia",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://base-sepolia-rpc.publicnode.com"],
    },
    public: {
      http: ["https://base-sepolia-rpc.publicnode.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Basescan",
      url: "https://sepolia.basescan.org",
    },
    etherscan: {
      name: "Basescan",
      url: "https://sepolia.basescan.org",
    },
  },
  testnet: true,
});

const chains = [baseSepoliaChain];
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: {
    name: "Algebra Integral",
    description: "DEX Engine",
    url: "https://integral.algebra.finance",
    icons: [""],
  },
});

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  chainImages: {
    84532: ETHLogo,
  },
  defaultChain: baseSepoliaChain,
  themeVariables: {
    "--w3m-accent": "#2797ff",
  },
});

function App({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Layout>{children}</Layout>
    </WagmiConfig>
  );
}

export default App;
