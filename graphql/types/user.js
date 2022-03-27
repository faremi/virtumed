import { extendType, nonNull, objectType, stringArg } from "nexus";
import {
  createUsersArgument,
  createNewUserWithDB,
} from "../users/create_users";

const validator = require("validator");
const bcrypt = require("bcryptjs");
export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id"), t.string("email"), t.string("password");
  },
});

export const Responses = objectType({
  name: "Response",
  definition(t) {
    t.int("code");
    t.string("id");
    t.string("message");
  },
});

export const Login = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("users", {
      type: "Response",
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        const existingUser = await ctx.prisma.user.findUnique({
          where: {
            email: args.email,
          },
        });

        if (existingUser) {
          const isEqual = await bcrypt.compare(
            args.password,
            existingUser.password
          );
          if (!isEqual) {
            return {
              code: 0,
              id: "",
              message: "Invalid login details",
            };
          }
          return {
            code: 1,
            id: existingUser.id,
            message: "Successful",
          };
        }
        return {
          code: 0,
          id: "",
          message: "Invalid login details",
        };
      },
    });
  },
});
export const CreateUser = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("users", {
      type: "Response",
      args: createUsersArgument(),
      async resolve(_parent, args, ctx) {
        const existingUser = await ctx.prisma.user.findUnique({
          where: {
            email: args.email,
          },
        });

        if (!validator.isEmail(args.email)) {
          return {
            code: 0,
            id: "",
            message: "Email address is invalid",
          };
        }
        if (
          validator.isEmpty(args.password) ||
          !validator.isLength(args.password, { min: 5 })
        ) {
          return {
            code: 0,
            id: "",
            message: "Password is too short",
          };
        }
        if (existingUser) {
          return {
            code: 0,
            id: "",
            message: "User details already exist",
          };
        }

        const hashedPw = await bcrypt.hash(args.password, 12);

        try {
          return createNewUserWithDB(ctx, args, hashedPw).then((e) => {
            return {
              code: 1,
              id: e.id,
              message: "Successful",
            };
          });
        } catch {
          return {
            code: 0,
            id: "",
            message: "Error verifying detail",
          };
        }
      },
    });
  },
});
