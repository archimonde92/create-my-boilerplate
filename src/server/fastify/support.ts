import fp from "fastify-plugin";

export const support = fp(async (fastify, opts) => {
	fastify.decorate("someSupport", () => "hugs");
});
