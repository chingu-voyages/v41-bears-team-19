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

export const petQueryWithFilters = ({location, type} :{location: string | null, type: string | null}) => {
  const query = `{
    allPets ${(location || type ) ? `(location: "${location}")`:''}{
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