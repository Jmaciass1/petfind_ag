export const PetTypeDef = `
    type Pet {
        id_pet: String!
        age: Int!
        description: String!
        especie: String!
        gender: Boolean!
        id_foundation: String!
        images: [String!]!
        name: String!
        race: String!
        status: String!
    }
    input PetInput {
        age: Int
        description: String
        especie: String
        gender: Boolean
        id_foundation: String
        images: [String!]
        name: String
        race: String
        status: String
    }
`;

export const PetQueries = `
    allPets: [Pet]!
    PetById(id_pet: String!): Pet!
    `;

export const PetMutations = `
    createPet(Pet: PetInput!): Pet!
    updatePet(id_pet: String!, Pet: PetInput!): Pet!
    deletePet(id_pet: String!): Int
`;