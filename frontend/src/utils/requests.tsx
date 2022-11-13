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

export const petQueryWithFilters = (location: string | null) => {
  const query = `{
    allPets ${location && `(location: "${location}")`}{
      id
      name
      age
      location
      type
      photo
    }
  }`
  return query

}