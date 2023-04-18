import { SwaggerOptions } from "@fastify/swagger";
import { FastifySwaggerUiOptions } from "@fastify/swagger-ui";
enum ESwaggerTags {
	user = "user",
	v0 = "v0",
}
const swagger_opts: SwaggerOptions = {
	swagger: {
		info: {
			title: "Test swagger",
			description: "Testing the Fastify swagger API",
			version: "0.1.0",
		},
		externalDocs: {
			url: "https://swagger.io",
			description: "Find more info here",
		},
		host: "localhost",
		schemes: ["http"],
		consumes: ["application/json"],
		produces: ["application/json"],
		tags: [
			{ name: ESwaggerTags.v0, description: "Version 0 API" },
			{ name: ESwaggerTags.user, description: "User related end-points" },
		], //Add more tag here
		definitions: {
			User: {
				type: "object",
				required: ["id", "email"],
				properties: {
					id: { type: "string", format: "uuid" },
					firstName: { type: "string" },
					lastName: { type: "string" },
					email: { type: "string", format: "email" },
				},
			},
		}, //Add more type here
		securityDefinitions: {
			apiKey: {
				type: "apiKey",
				name: "apiKey",
				in: "header",
			},
		},
	},
};

const swagger_ui_opts: FastifySwaggerUiOptions = {
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
};

export { swagger_opts, swagger_ui_opts, ESwaggerTags };
