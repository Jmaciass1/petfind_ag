import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const URL2 = `http://${url}:${port}`;

const resolvers = {
	Query: {
		allPets: (_) =>
			getRequest(URL2, 'pets'),
		PetById: (_, { id_pet }) =>
			generalRequest(`${URL}/${id_pet}`, 'GET'),
	},
	Mutation: {
		createPet: (_, { Pet }) =>
			generalRequest(`${URL}`, 'POST', Pet),
		updatePet: (_, { id_pet, Pet }) =>
			generalRequest(`${URL}/${id_pet}`, 'PUT', Pet),
		deletePet: (_, { id_pet }) =>
			generalRequest(`${URL}/${id_pet}`, 'DELETE')
	}
};

export default resolvers;