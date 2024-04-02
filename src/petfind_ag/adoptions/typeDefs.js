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
  createAdoption(adoption: AdoptionInput!): Adoption!
  updateAdoption(id_adoption: ID!, adoption: AdoptionInput!): Adoption!
  deleteAdoption(id_adoption: ID!): Int
  `;