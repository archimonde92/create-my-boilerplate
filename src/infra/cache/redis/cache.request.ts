import { sha256 } from "../../../lib/utils";

export const create_key_request = async (
	request_name: string,
	list_field: string[],
	args: any,
	headers: any,
) => {
	const selected_headers = headers.authorization;
	const merge = [
		request_name,
		JSON.stringify(args),
		JSON.stringify(list_field),
		JSON.stringify(selected_headers),
	].join("_");
	const hash = await sha256(merge);
	return hash;
};
