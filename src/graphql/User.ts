import { enumType, objectType } from 'nexus';

export const UserType = enumType({
  name: 'UserType',
  members:['INDIVIDUAL', 'SHELTER']
})

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
    t.nonNull.string('email');
    t.nonNull.field('type', {type: UserType});
    t.nonNull.string('location')
  },
});
