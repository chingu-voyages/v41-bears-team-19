import {
  booleanArg,
  enumType,
  extendType,
  intArg,
  nonNull,
  objectType,
  stringArg,
} from 'nexus';
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
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('allPets', {
      type: 'Pet',
      resolve(parent, args, context, info) {
        return pets;
      },
    });
    // t.nonNull.list.field("searchByLocation",{
    //   type: "Pet",
    //   args: { location: nonNull(stringArg()) },
    //   resolve(parent,args,context, info){
    //     const { location } = args;
    //     let results: NexusGenObjects["Pet"][] = []

    //   }
    // })
  },
});

export const PetMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createPet', {
      type: 'Pet',
      args: {
        name: nonNull(stringArg()),
        age: nonNull(intArg()),
        type: nonNull(stringArg()),
        gender: nonNull(GenderEnum),
        location: nonNull(stringArg()),
        breed: stringArg(),
        shelter: nonNull(stringArg()),
        photo: nonNull(stringArg()),
        vaccinated: nonNull(booleanArg()),
        neutered: nonNull(booleanArg()),
      },
      resolve(parent, args, context) {
        const {
          name,
          age,
          type,
          gender,
          location,
          breed,
          shelter,
          photo,
          vaccinated,
          neutered,
        } = args;
        let id = pets.length + 93;

        const pet: NexusGenObjects['Pet'] = {
          id,
          name,
          age,
          type,
          gender,
          location,
          breed,
          shelter,
          photo,
          vaccinated,
          neutered,
        };
        pets.push(pet);
        return pet;
      },
    });
  },
});

//////////////////

let pets: NexusGenObjects['Pet'][] = [
  {
    id: 1,
    name: 'Ruff',
    age: 1,
    type: 'dog',
    gender: 'male',
    location: 'Penal, Trinidad',
    breed: 'ratter',
    shelter: 'Animal House',
    photo:
      'https://www.akc.org/wp-content/uploads/2017/04/Lagotto-Romangolo-Tongue-Out.jpg',
    vaccinated: true,
    neutered: false,
  },
  {
    id: 2,
    name: 'Marco',
    age: 1,
    type: 'dog',
    gender: 'female',
    location: 'Penal, Trinidad',
    breed: 'German Sheppy',
    shelter: 'Animal House',
    photo:
      'http://cdn.akc.org/content/article-body-image/keeshond_dog_pictures.jpg',
  },
];

/////////////
