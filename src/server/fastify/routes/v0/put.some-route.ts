import { FastifyInstance } from "fastify/types/instance";
import { RouteShorthandOptions } from "fastify/types/route";
import { ESwaggerTags } from "../../swagger";
const path = (version) =>
	version ? `/${version}/some-route/:id` : `v0/some-route/:id`;
const opts: RouteShorthandOptions = {
	schema: {
		description: "post some data",
		tags: [ESwaggerTags.v0],
		summary: "qwerty",
		params: {
			type: "object",
			properties: {
				id: {
					type: "string",
					description: "user id",
				},
			},
		},
		body: {
			type: "object",
			properties: {
				hello: { type: "string" },
				obj: {
					type: "object",
					properties: {
						some: { type: "string" },
					},
				},
			},
		},
		response: {
			201: {
				description: "Successful response",
				type: "object",
				properties: {
					hello: { type: "string" },
				},
			},
			default: {
				description: "Default response",
				type: "object",
				properties: {
					foo: { type: "string" },
				},
			},
		},
		security: [
			{
				apiKey: [],
			},
		],
	},
};
export const v0_put_some_route = (
	fastify: FastifyInstance,
	version: string,
) => {
	fastify.put<{ Body: any }>(path(version), opts, (req, reply) => {});
};
