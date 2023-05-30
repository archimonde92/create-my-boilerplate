import { FastifyInstance } from "fastify/types/instance";
import { RouteShorthandOptions } from "fastify/types/route";
import { exampleSchema } from "./schema/example";
import { ESwaggerTags } from "../../swagger";
const path = (version) => (version ? `/${version}/user/:id` : `v0/user/:id`);
const opts: RouteShorthandOptions = {
	schema: {
		description: "get user by id",
		tags: [ESwaggerTags.v0, ESwaggerTags.user],
		summary: "get user by id",
		params: {
			type: "object",
			properties: {
				id: {
					type: "string",
					description: "user id",
				},
			},
		},
		response: {
			200: { ...exampleSchema, description: "successful response" },
			default: exampleSchema,
		},
		security: [
			{
				apiKey: [],
			},
		],
	},
};
export const v0_get_user = (fastify: FastifyInstance, version: string) => {
	fastify.get<{ Body: any; Params: { id: string } }>(
		path(version),
		opts,
		(req, reply) => {
			console.log(req.params.id);
		},
	);
};
