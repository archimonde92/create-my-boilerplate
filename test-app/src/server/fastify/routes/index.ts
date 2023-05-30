import { FastifyInstance } from "fastify/types/instance";
import { v0_put_some_route } from "./v0/put.some-route";
import { v0_get_user } from "./v0/get.user";

export const addRoutes = async (fastify: FastifyInstance, version: string) => {
	//Version 0
	v0_put_some_route(fastify, version);
	v0_get_user(fastify, version);
};
