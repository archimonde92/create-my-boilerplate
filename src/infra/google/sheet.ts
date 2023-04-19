import { google } from "googleapis";
import credentials from "./credentials.json";

const sheet = google.sheets("v4");

const auth = new google.auth.JWT({
	email: credentials.client_email,
	key: credentials.private_key,
	scopes: "https://www.googleapis.com/auth/spreadsheets",
});

export const getDataGoogleForm = async (sheet_id: string, tab_name: string) => {
	const range = `${tab_name}!A2:B`;
	try {
		const result = await sheet.spreadsheets.values.get({
			spreadsheetId: sheet_id,
			auth: auth,
			range: range,
		});
		return result.data.values;
	} catch (error) {
		console.log(error);
	}
};
