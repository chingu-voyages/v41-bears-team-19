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
    t.id('id');
    t.nonNull.string('name');
    t.nonNull.int('age');
    t.nonNull.string('type');
    t.nonNull.field('gender', { type: GenderEnum });
    t.nonNull.string('location');
    t.nonNull.int('shelterId');
    t.field('shelter', {
      type: 'Shelter',
      resolve(parent, args, context) {
        return context.prisma.shelter.findUnique({
          where: { id: parent.shelterId },
        });
      },
    });
    t.nonNull.string('photo');
    t.string('breed');
    t.boolean('vaccinated');
    t.boolean('neutered');
    t.boolean('adopted');
  },
});

export const PetQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('allPets', {
      type: 'Pet',
      args: {
        location: stringArg(),
        type: stringArg(),
      },
      // @ts-ignore
      resolve(parent, args, context) {
        const where = args
          ? {
<<<<<<< HEAD
              AND: [
=======
              OR: [
>>>>>>> c0763da (set up filters for pets)
                { location: { contains: args.location as string } },
                { type: { equals: args.type as string } },
              ],
            }
          : {};
        const result = context.prisma.pet.findMany({ where });
        return result;
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
