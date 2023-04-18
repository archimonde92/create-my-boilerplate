import path from "path";
import { FastifyInstance } from "fastify";
import AutoLoad from "fastify-autoload";
export const app = async (fastify: FastifyInstance, opts) => {
	fastify.register(AutoLoad, {
		dir: path.join(__dirname, "plugins"),
		options: Object.assign({}, opts),
	});
	fastify.register(AutoLoad, {
		dir: path.join(__dirname, "routes"),
		options: Object.assign({}, opts),
	});
};
