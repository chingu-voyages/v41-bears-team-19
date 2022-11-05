import { enumType, extendType, objectType } from 'nexus';
import { NexusGenObjects } from '../../nexus-typegen';

const GenderEnum = enumType({
  name: 'GenderEnum',
  members: ['male', 'female'],
});


export const Pet = objectType({
  name: 'Pet',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
    t.nonNull.int('age');
    t.nonNull.string('type');
    t.nonNull.field('gender', { type: GenderEnum });
    t.nonNull.string('location');
    t.string('breed');
    t.nonNull.string('shelter');
    t.nonNull.string('photo');
    t.boolean('vaccinated');
    t.boolean('neutered');
  },
});


export const PetQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("allPets", {
      type: "Pet",
      resolve(parent, args, context, info){
        return pets
      }
    })
  },
})

//////////////////

let pets: NexusGenObjects["Pet"][] = [
  {
    id: 1,
    name: 'Ruff',
    age: 1,
    type:'dog',
    gender: 'male',
    location: 'Penal, Trinidad',
    breed: 'ratter',
    shelter: 'Animal House',
    photo: 'https://www.akc.org/wp-content/uploads/2017/04/Lagotto-Romangolo-Tongue-Out.jpg',
    vaccinated: true,
    neutered: false
  },
  {
    id: 2,
    name: 'Marco',
    age: 1,
    type:'dog',
    gender: 'female',
    location: 'Penal, Trinidad',
    breed: 'German Sheppy',
    shelter: 'Animal House',
    photo: 'http://cdn.akc.org/content/article-body-image/keeshond_dog_pictures.jpg',

  },

]

/////////////