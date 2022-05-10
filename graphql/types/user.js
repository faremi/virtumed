import { extendType, nonNull, objectType, stringArg, intArg } from "nexus";
import {
  createUsersArgument,
  createNewUserWithDB,
} from "../users/create_users";

const validator = require("validator");
const bcrypt = require("bcryptjs");
export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("email");
    t.string("password");
    t.list.field("messageUser", {
      type: MessageString,
    });
  },
});

export const MessageString = objectType({
  name: "messageString",
  definition(t) {
    t.string("id");
    t.string("other");
    t.string("userId");
    t.string("otherEmail");
    t.string("speciality");
    t.string("userEmail");
    t.string("type");
  },
});

export const Messages = objectType({
  name: "Message",
  definition(t) {
    t.string("id");
    t.string("content");
    t.string("userId");
    t.string("accountType");
  },
});

export const MessageQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("messages", {
      type: "Message",
      args: {
        patientId: nonNull(stringArg()),
        userId: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        return ctx.prisma.message.findMany({
          where: {
            userId: args.userId,
            patientId: args.patientId,
          },
        });
      },
    });
  },
});

export const MessageMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("messages", {
      type: "String",
      args: {
        patientId: nonNull(stringArg()),
        userId: nonNull(stringArg()),
        messages: nonNull(stringArg()),
        accountType: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        const existingRecord = await ctx.prisma.messageUser.findMany({
          where: {
            userId: args.userId,
            // other: args.patientId,
          },
        });
        const existingUser = await ctx.prisma.profile.findUnique({
          where: {
            userId: args.patientId,
          },
        });
        const existingMainUser = await ctx.prisma.profile.findUnique({
          where: {
            userId: args.userId,
          },
        });
        let isUnique = false;
        if (!existingRecord) {
          await ctx.prisma.messageUser.create({
            data: {
              userId: args.userId,
              other: args.patientId,
              otherEmail: existingUser.firstName + " " + existingUser.lastName,
              userEmail:
                existingMainUser.firstName + " " + existingMainUser.lastName,
              speciality: existingUser.speciality,
            },
          });
        } else {
          existingRecord.forEach(function callback(value, index) {
            if (value.other == args.patientId) {
              isUnique = true;
            }
          });
          if (!isUnique) {
            await ctx.prisma.messageUser.create({
              data: {
                userId: args.userId,
                other: args.patientId,
                otherEmail:
                  existingUser.firstName + " " + existingUser.lastName,
                userEmail:
                  existingMainUser.firstName + " " + existingMainUser.lastName,
                speciality: existingUser.speciality,
              },
            });
          }
        }
        return ctx.prisma.message
          .create({
            data: {
              content: args.messages,
              patientId: args.patientId,
              userId: args.userId,
              accountType: args.accountType,
            },
          })
          .then(() => "Successful");
      },
    });
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

export const Profile = objectType({
  name: "Profile",
  definition(t) {
    t.string("id");
    t.string("accountType");
    t.string("firstName");
    t.string("lastName");
    t.string("phoneNumber");
    t.string("region");
    t.string("address");
    t.string("nextOfKin");
    t.string("nextOfKinNumber");
    t.string("nextOfKinAddress");
    t.string("gender");
    t.string("experience");
    t.string("speciality");
    t.string("userId");
  },
});

export const UpdateProfile = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("updateProfile", {
      type: "Response",
      args: {
        id: nonNull(stringArg()),
        region: stringArg(),
        address: stringArg(),
        nextOfKin: stringArg(),
        nextOfKinNumber: stringArg(),
        nextOfKinAddress: stringArg(),
        gender: stringArg(),
        experience: stringArg(),
        speciality: stringArg(),
      },
      async resolve(_parent, args, ctx) {
        const existingUser = await ctx.prisma.profile.findUnique({
          where: {
            userId: args.id,
          },
        });
        await ctx.prisma.profile.update({
          where: { id: existingUser.id },
          data: { address: args.address, region: args.region },
        });
        return {
          code: 1,
          id: "",
          message: "Successful",
        };
      },
    });
  },
});

export const UserInformation = objectType({
  name: "UserInformation",
  definition(t) {
    t.field("user", { type: User });
    t.field("profile", { type: Profile });
    t.field("payment", { type: Payment });
    t.list.field("paymentList", {
      type: PaymentDetails,
    });
    t.list.field("messageList", {
      type: MessageString,
    });
    t.list.field("doctorList", {
      type: MessageString,
    });
  },
});

export const UserInfo = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("userInformation", {
      type: "UserInformation",
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        const existingUser = await ctx.prisma.user.findUnique({
          where: {
            id: args.id,
          },
        });
        console.log(existingUser);
        const existingProfile = await ctx.prisma.profile.findUnique({
          where: {
            userId: "627a38919409728374a2b90a",//args.id,
          },
        });
        console.log(existingProfile);

        const existingPayment = await ctx.prisma.payment.findUnique({
          where: {
            userId: args.id,
          },
        });
        let existingPaymentList = [];
        if (existingPayment) {
          existingPaymentList = await ctx.prisma.paymentDetails.findMany({
            where: {
              paymentId: existingPayment.id,
            },
          });
        }

        let existingRecord = [];

        if (existingProfile.accountType !== "PATIENT") {
          const existingRecords = await ctx.prisma.messageUser.findMany({
            where: {
              other: args.id,
            },
          });
          existingRecord = existingRecords.map((value) => {
            return { ...value, type: "PATIENT" };
          });
        } else {
          const existingRecords = await ctx.prisma.messageUser.findMany({
            where: {
              userId: args.id,
              // other: args.patientId,
            },
          });
          existingRecord = existingRecords.map((value) => {
            return { ...value, type: "DOCTOR" };
          });
        }
        let existingDoctor = [];
        if (existingProfile.accountType === "PATIENT") {
          const existingRecords = await ctx.prisma.profile.findMany({
            where: {
              accountType: "DOCTOR",
            },
          });

          existingDoctor = existingRecords.map((value) => {
            let names =
              existingProfile.firstName + " " + existingProfile.lastName;
            return {
              userId: existingUser.id,
              other: value.id,
              userEmail: names,
              otherEmail:
                existingProfile.firstName + " " + existingProfile.lastName,
              speciality: value.speciality,
              type: "DOCTOR",
            };
          });
        }
        return {
          user: existingUser,
          profile: existingProfile,
          payment: existingPayment,
          paymentList: existingPaymentList,
          doctorList: existingDoctor,
          messageList: existingRecord,
        };
      },
    });
  },
});
export const PaymentDetails = objectType({
  name: "PaymentDetails",
  definition(t) {
    t.string("id");
    t.string("amount");
    t.string("createdAt");
    t.string("paymentId");
    t.string("paymentType");
  },
});

export const Payment = objectType({
  name: "Payment",
  definition(t) {
    t.string("id");
    t.string("balance");
    t.string("userId");
  },
});

export const UpdatePayment = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("updatePayment", {
      type: "Response",
      args: {
        id: nonNull(stringArg()),
        amount: intArg(),
      },
      async resolve(_parent, args, ctx) {
        const balance = await ctx.prisma.payment.findUnique({
          where: {
            userId: args.id,
          },
        });
        await ctx.prisma.paymentDetails.create({
          data: {
            amount: args.amount,
            paymentId: balance.id,
            paymentType: "Deposit",
          },
        });
        await ctx.prisma.payment.update({
          where: { id: balance.id },
          data: {
            balance: balance.balance + args.amount,
          },
        });
        return {
          code: 1,
          id: "",
          message: "Successful",
        };
      },
    });
  },
});

export const WithdrawPayment = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("withdrawPayment", {
      type: "Response",
      args: {
        id: nonNull(stringArg()),
        amount: intArg(),
      },
      async resolve(_parent, args, ctx) {
        const balance = await ctx.prisma.payment.findUnique({
          where: {
            userId: args.id,
          },
        });
        if (balance.balance > args.amount) {
          await ctx.prisma.payment.update({
            where: { id: balance.id },
            data: {
              balance: balance.balance - args.amount,
            },
          });
          await ctx.prisma.paymentDetails.create({
            data: {
              amount: args.amount,
              paymentId: balance.id,
              paymentType: "Withdraw",
            },
          });
          return {
            code: 1,
            id: "",
            message: "Successful",
          };
        }
        return {
          code: 0,
          id: "",
          message: "Insufficient fund",
        };
      },
    });
  },
});
