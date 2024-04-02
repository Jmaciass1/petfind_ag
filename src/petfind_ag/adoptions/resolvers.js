import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allAdoptions: (_) =>
			getRequest(URL, ''),
		adoptionById: (_, { id_adoption }) =>
			generalRequest(`${URL}/${id_adoption}`, 'GET'),
	},
	Mutation: {
		createAdoption: (_, { adoption }) =>
			generalRequest(`${URL}/`, 'POST', adoption),
		updateAdoption: (_, { id_adoption, adoption }) =>
			generalRequest(`${URL}/${id_adoption}`, 'PUT', adoption),
		deleteAdoption: (_, { id_adoption }) =>
			generalRequest(`${URL}/${id_adoption}`, 'DELETE')
	}
};

export default resolvers;
