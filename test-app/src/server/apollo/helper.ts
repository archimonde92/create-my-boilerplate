import { ErrMsg, ERROR_CODE } from "../../lib/error_handler";



const GetAuthorization = (ctx: any) => {
	const auth = ctx?.req?.headers?.authorization;
	if (!auth) throw ErrMsg(ERROR_CODE.AUTHORIZATION_REQUIRED);
	return auth;
};
const GetRecaptchaToken = (ctx: any) => {
	const auth = ctx?.req?.headers["recaptcha-token"];
	if (!auth) throw ErrMsg(ERROR_CODE.RECAPTCHA_TOKEN_REQUIRED);
	return auth;
};

export {
	GetAuthorization,
	GetRecaptchaToken,
};
