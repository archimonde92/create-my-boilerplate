import { Address } from "viem";
import {
	CHAINLINK_CONTRACT_ADDRESS,
	TRADING_CONTRACT_START_BLOCK,
	TRADING_CONTRACT_STEP_BLOCK
} from "../../../../config";
import { lowerCase } from "../../../../lib/utils";
import { CHAINLINK_ABI } from "./chainlink_contract/abi";
type ContractInfo = {
	address: Address;
	abi: any;
	init_start_block: bigint;
	step_block: bigint;
};
const getContractInfo: (contract: Address) => ContractInfo | null = (
	_contract: string,
) => {
	const contract = lowerCase(_contract);
	switch (contract) {
		case CHAINLINK_CONTRACT_ADDRESS:
			return {
				address: CHAINLINK_CONTRACT_ADDRESS,
				abi: CHAINLINK_ABI,
				init_start_block: TRADING_CONTRACT_START_BLOCK,
				step_block: TRADING_CONTRACT_STEP_BLOCK,
			};
		default:
			return null;
	}
};

export { getContractInfo, ContractInfo };
