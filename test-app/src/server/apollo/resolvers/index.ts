import { NODE_ENV, SERVER_NAME } from "../../../config";
import { ContextValue } from "../apollo";
import { version } from "../typeDefs/schema";

const resolvers = {
	Query: {
		showConfig: () => ({
			NODE_ENV,
			SERVER_NAME,
		}),
		apiVersion: () => version,
	},
	Mutation: {
	},
	User: {
		verifyData: (parentValue, args, context) => {
			const { dataSources } = context as ContextValue;
			return dataSources.UserDataLoader.getOne(parentValue.address);
		},
	},
};

export { resolvers };
