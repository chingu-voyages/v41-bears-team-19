import {
  booleanArg,
  enumType,
  extendType,
  intArg,
  nonNull,
  objectType,
  stringArg,
} from 'nexus';

const GenderEnum = enumType({
  name: 'GenderEnum',
  members: ['male', 'female'],
});

export const Pet = objectType({
  name: 'Pet',
  definition(t) {
    // t.id('id');
    t.nonNull.string('name');
    t.nonNull.int('age');
    t.nonNull.string('type');
    t.nonNull.field('gender', { type: GenderEnum });
    t.nonNull.string('location');
    t.nonNull.string('shelter')
    // t.field('shelter', {
    //   type: 'Shelter',
    //   resolve(parent, args, context){
    //     return context.prisma.
    //   }
    // })
    t.nonNull.string('photo');
    t.string('breed');
    t.boolean('vaccinated');
    t.boolean('neutered');
    t.boolean('adopted')
  },
});

export const PetQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('allPets', {
      type: 'Pet',
      resolve(parent, args, context) {
        const result = context.prisma.pet.findMany({});
        return result;
      },
    });
    t.nonNull.list.field('petsByLocation', {
      type: 'Pet',
      args: { location: nonNull(stringArg()) },
      // @ts-ignore
      resolve(parent, args, context, info) {
        const { location } = args;
        return context.prisma.pet.findMany({
          where: { location: { contains: location } },
        });
      },
    });
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
        vaccinated: booleanArg(),
        neutered: booleanArg(),
        adopted: booleanArg(),
      },
      // @ts-ignore
      resolve(parent, args, context) {
        return context.prisma.pet.create({ data: args });
      },
    });
  },
});
