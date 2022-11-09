import { useQuery, gql } from '@apollo/client';

export const FEED_QUERY = gql`
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

export const pets = [
  {
    id: 1,
    name: 'Barnaby',
    age: 1,
    location: 'Boulder, Colorado',
    type: 'Bunny',
    photo: '',
  },
  {
    id: 2,
    name: 'Flora',
    age: 1,
    location: 'Boulder, Colorado',
    type: 'Dog',
    photo: '',
  },
  {
    id: 42,
    name: 'Amy',
    age: 1,
    location: 'Boulder, Colorado',
    type: 'Cat',
    photo: '',
  },
];
