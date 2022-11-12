import {  gql } from '@apollo/client';


export const ALL_PETS = gql`
  {
    allPets {
      id
      name
      age
      location
      type
      photo
    }
  }
`;