import { extendType, nonNull, objectType, stringArg } from 'nexus';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { APP_SECRET } from '../utils/auth';
import { UserType } from './User';

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.nonNull.string('token');
    t.nonNull.field('user', {
      type: 'User',
    });
  },
});

export const AuthMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('signup', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
        name: nonNull(stringArg()),
        location: nonNull(stringArg()),
        type: nonNull(UserType),
      },
      // @ts-ignore
      async resolve(parent, args, context) {
        const { email, name, location, type } = args;
        const password = await bcrypt.hash(args.password, 10);
        const user = await context.prisma.user.create({
          data: { email, name, password, location, type },
        });
        const token = jwt.sign({ userId: user.id }, APP_SECRET);
        return { token, user };
      },
    }),
      t.nonNull.field('login', {
        type: 'AuthPayload',
        args: {
          email: nonNull(stringArg()),
          password: nonNull(stringArg()),
        },
        // @ts-ignore
        async resolve(parent, args, context) {
          const user = await context.prisma.user.findUnique({
            where: { email: args.email },
          });
          if (!user) {
            throw new Error('Invalid user. ');
          }
          const valid = await bcrypt.compare(args.password, user.password);
          if (!valid) {
            throw new Error('Invalid password');
          }

          const token = jwt.sign({ userId: user.id }, APP_SECRET);
          return { token, user };
        },
      });
  },
});
