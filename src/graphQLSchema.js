import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	adoptionsMutations,
	adoptionsQueries,
	adoptionsTypeDef
} from './petfind_ag/adoptions/typeDefs';

import adoptionResolvers from './petfind_ag/adoptions/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		adoptionsTypeDef
	],
	[
		adoptionsQueries
	],
	[
		adoptionsMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		adoptionResolvers
	)
});
