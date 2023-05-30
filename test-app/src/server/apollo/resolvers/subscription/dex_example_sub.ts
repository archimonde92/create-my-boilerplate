import { withFilter } from "graphql-subscriptions";
import { ESubEventName, pubsub } from ".";

export const dex_example_sub = {
    subscribe: withFilter(
        () => pubsub.asyncIterator([ESubEventName.EXAMPLE]),
        (payload, variables) => {
            const { dex_example_sub } = payload as { dex_example_sub: { match_field: any } }
            const { match_field } = variables as { match_field: any }
            return match_field === dex_example_sub.match_field
        }
    )
}
