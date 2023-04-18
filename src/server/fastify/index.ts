import Fastify from "fastify";
// import { FASTIFY_PORT, SERVER_NAME } from "../../config";
const FASTIFY_PORT = 7000;
const SERVER_NAME = "TestServer";
import { successConsoleLog } from "../../lib/color-log";

const fastify = Fastify({ logger: true });

const version = "v0";

fastify.addHook("preHandler", (req, res, done) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	const isPreflight = /options/i.test(req.method);
	if (isPreflight) {
		return res.send();
	}

	done();
});

export const startFastifyServer = async () => {
	await fastify.register(require("@fastify/swagger"));
	await fastify.register(require("@fastify/swagger-ui"), {
		routePrefix: "/documentation",
		uiConfig: {
			docExpansion: "full",
			deepLinking: false,
		},
		uiHooks: {
			onRequest: function (request, reply, next) {
				next();
			},
			preHandler: function (request, reply, next) {
				next();
			},
		},
		staticCSP: true,
		transformStaticCSP: (header) => header,
		transformSpecification: (swaggerObject, request, reply) => {
			return swaggerObject;
		},
		transformSpecificationClone: true,
	});
	fastify.put(
		"/some-route/:id",
		{
			schema: {
				description: "post some data",
				tags: ["user", "code"],
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
		},
		(req, reply) => {},
	);
	try {
		const server = await fastify.listen({
			port: FASTIFY_PORT,
			host: "0.0.0.0",
		});
		successConsoleLog(`🚀 ${SERVER_NAME} fastify ready at ${server}`);
	} catch (err) {
		fastify.log.error(err);
	}
};
