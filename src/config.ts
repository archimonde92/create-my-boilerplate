import { config } from "dotenv";
import {
	getArrStringFromEnv,
	getBooleanFromEnv,
	getEnvAddress,
	getEnvBigInt,
	getEnvString,
	getFloatFromEnv,
	getIntFromEnv,
} from "./lib/config.helper";

const path = ".env";
console.table({ env_path: path });
config({ path });

export const NODE_ENV = getEnvString("NODE_ENV");
export const SERVER_NAME = getEnvString("SERVER_NAME");
export const SENTRY_DNS = getEnvString("SENTRY_DNS");
export const MONGO_URI = getEnvString("MONGO_URI");
export const MONGO_DB_NAME = getEnvString("MONGO_DB_NAME");
export const REDIS_URI = getEnvString("REDIS_URI");
export const REDIS_PREFIX = getEnvString("REDIS_PREFIX");
export const GRAPHQL_PORT = getEnvString("GRAPHQL_PORT");
export const SERVER_CODE = getEnvString("SERVER_CODE");
export const TELEGRAM_BOT_TOKEN = getEnvString("TELEGRAM_BOT_TOKEN");

export const REDIS_DB_NUMBER = getIntFromEnv("REDIS_DB_NUMBER");
export const FASTIFY_PORT = getIntFromEnv("FASTIFY_PORT");
export const AVG_BLOCK_TIME_SEC = getIntFromEnv("AVG_BLOCK_TIME_SEC");
export const ANTI_REORG_BLOCK_NUMBER = getEnvBigInt("ANTI_REORG_BLOCK_NUMBER");

export const IS_FORK = getBooleanFromEnv("IS_FORK");
export const IS_DEBUG = getBooleanFromEnv("IS_DEBUG");
export const IS_SERVER_MAINTAINED = getBooleanFromEnv("IS_SERVER_MAINTAINED");
export const IS_USE_PLAYGROUND = getBooleanFromEnv("IS_USE_PLAYGROUND");
export const ENABLE_TELEGRAM = getBooleanFromEnv("ENABLE_TELEGRAM");

export const DEBUG_LEVEL = getArrStringFromEnv("DEBUG_LEVEL", ",");