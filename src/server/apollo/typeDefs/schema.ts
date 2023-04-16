import gql from "graphql-tag";
import { PaginationInput } from "./common";
import {
   GQLEnum,
   GQLInput,
   GQLResponse,
} from "./custom";

const version = "0.0.0";

const typeDefs = gql`
    """
    API_VERSION = ${version}
    """
   scalar Date
   scalar JSON
 
   type Query{
      dex_query_example:String
   }

   type Mutation{
      dex_mutation_example:String
   }

   type Subscription{
      dex_example_sub(match_field:String):String
   }
`;

export { typeDefs, version };
