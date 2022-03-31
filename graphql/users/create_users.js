import { nonNull, stringArg } from "nexus";

function createUsersArgument() {
  return {
    email: nonNull(stringArg()),
    password: nonNull(stringArg()),
    firstName: nonNull(stringArg()),
    lastName: nonNull(stringArg()),
    phoneNumber: nonNull(stringArg()),
    accountType: nonNull(stringArg()),
  };
}

function createNewUserWithDB(ctx, args, hashedPw) {
  return ctx.prisma.user.create({
    data: {
      email: args.email,
      password: hashedPw,
      profile: {
        create: {
          firstName: args.firstName,
          lastName: args.lastName,
          phoneNumber: args.phoneNumber,
          accountType: args.accountType,
        },
      },
      payment: {
        create: {
          balance: 0,
        },
      },
      messageUser: {},
    },
  });
}

export { createUsersArgument, createNewUserWithDB };
