import { RedisPubSub } from "graphql-redis-subscriptions";
import Redis from "ioredis";
import { REDIS_DB_NUMBER, REDIS_URI } from "../../../../config";

const pubsub = new RedisPubSub({
	publisher: new Redis(REDIS_URI, { db: REDIS_DB_NUMBER }),
	subscriber: new Redis(REDIS_URI, { db: REDIS_DB_NUMBER }),
});

enum ESubEventName {
	EXAMPLE = "EXAMPLE",
}

const PublishExample = (example: any) => {
	pubsub.publish(ESubEventName.EXAMPLE, {
		dex_example_sub: example,
	});
};

export {
	pubsub,
	PublishExample,
	ESubEventName,
};
