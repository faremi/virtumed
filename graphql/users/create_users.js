import { nonNull, stringArg } from "nexus";

function createUsersArgument() {
  return {
    email: nonNull(stringArg()),
    password: nonNull(stringArg()),
    firstName: nonNull(stringArg()),
    lastName: nonNull(stringArg()),
    phoneNumber: nonNull(stringArg()),
    region: stringArg(),
    experience: stringArg(),
    speciality: stringArg(),
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
          region: args.region,
          experience: args.experience,
          speciality: args.speciality,
          accountType: args.accountType,
        },
      },
    },
  });
}

export { createUsersArgument, createNewUserWithDB };
