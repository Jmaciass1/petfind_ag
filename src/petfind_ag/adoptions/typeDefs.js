export const adoptionsTypeDef = `
    type Adoption {
        id_adoption: ID!
        id_pet: Int!
        id_user: Int!
        location: String!
        formalizationDate: String!
        id_foundation: Int!
        successfully: Boolean!
    }

    type CreateDeleteAdoptionResponse {
        message: String!
    }

    type UpdateAdoptionResponse {
        message: String!
        updatedAdoption: Adoption!
    }

    input AdoptionInput {
        id_pet: Int!
        id_user: Int!
        location: String!
        formalizationDate: String!
        id_foundation: Int!
        successfully: Boolean!
    }
`;

export const adoptionsQueries = `
      allAdoptions: [Adoption]!
      adoptionById(id_adoption: ID!): Adoption!
  `;

export const adoptionsMutations = `
  createAdoption(adoption: AdoptionInput!): CreateDeleteAdoptionResponse!
  updateAdoption(id_adoption: ID!, adoption: AdoptionInput!): UpdateAdoptionResponse
  deleteAdoption(id_adoption: ID!): CreateDeleteAdoptionResponse!
  `;