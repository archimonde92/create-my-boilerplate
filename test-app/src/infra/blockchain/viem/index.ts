import {
	FallbackTransport,
	HttpTransport,
	WebSocketTransport,
	createPublicClient,
	createWalletClient,
	fallback,
	getContract,
	http,
	webSocket,
} from "viem";
// import { USDC_TOKEN_CONTRACT_ADDRESS, VIEM_PROVIDERS } from "../../../config";
const VIEM_PROVIDERS = [];
const USDC_TOKEN_CONTRACT_ADDRESS = "";
import { USDC_TOKEN_CONTRACT_ABI } from "./abi/usdCoinContractAbi";

export const getTransport = (): FallbackTransport => {
	const transports: (WebSocketTransport | HttpTransport)[] = [];
	VIEM_PROVIDERS.forEach((el: string) => {
		if (el.startsWith("ws")) {
			transports.push(webSocket(el));
		} else {
			transports.push(http(el));
		}
	});
	return fallback(transports);
};
export const viemPublicClient = createPublicClient({
	transport: getTransport(),
});
export const viemWalletClient = createWalletClient({
	transport: getTransport(),
});
export const contractUSDCToken = getContract({
	address: USDC_TOKEN_CONTRACT_ADDRESS,
	abi: USDC_TOKEN_CONTRACT_ABI,
	publicClient: viemPublicClient,
});
