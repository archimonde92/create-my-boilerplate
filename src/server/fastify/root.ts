export const root = async (fastify, opts) => {
	fastify.get("/", async function (request, reply) {
		return { greeting: "Hello, World" };
	});
};
