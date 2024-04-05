import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	adoptionsMutations,
	adoptionsQueries,
	adoptionsTypeDef
} from './petfind_ag/adoptions/typeDefs';

import {
	PetMutations,
	PetQueries,
	PetTypeDef
} from './petfind_ag/pets/typeDefs';

import resolvers from './petfind_ag/pets/resolvers'

import adoptionResolvers from './petfind_ag/adoptions/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		adoptionsTypeDef,
		PetTypeDef
	],
	[
		adoptionsQueries,
		PetQueries
	],
	[
		adoptionsMutations,
		PetMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		adoptionResolvers,
		resolvers
	)
});
