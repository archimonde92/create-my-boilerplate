import swagger from "@fastify/swagger";
import swagger_ui from "@fastify/swagger-ui";
import Fastify from "fastify";
import { successConsoleLog } from "../../lib/color-log";
import { addRoutes } from "./routes";
import { swagger_opts, swagger_ui_opts } from "./swagger";
// import { FASTIFY_PORT, SERVER_NAME } from "../../config";
const FASTIFY_PORT = 7002;
const SERVER_NAME = "TestServer";
const fastify = Fastify({ logger: true });
const version = "v0";

export const startFastifyServer = async () => {
	//Update swagger
	await fastify.register(swagger, swagger_opts);
	await fastify.register(swagger_ui, swagger_ui_opts);
	//Anti CORS
	fastify.addHook("preHandler", (req, res, done) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "*");
		const isPreflight = /options/i.test(req.method);
		if (isPreflight) {
			return res.send();
		}
		done();
	});
	//Add routers
	await addRoutes(fastify, version);

	await fastify.ready();
	(fastify as any).swagger();

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
