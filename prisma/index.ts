import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  await prisma.user.create({
    data: {
      password: "ss",
      email: "hello@prisma.com",
      //   posts: {
      //     create: {
      //       title: "My first post",
      //       body: "Lots of really interesting stuff",
      //       slug: "my-first-post",
      //     },
      //   },
    },
  });
  //   const allUsers = await prisma.user.findMany({
  //     include: {
  //       posts: true,
  //     },
  //   });
  //   console.dir(allUsers, { depth: null });
}

main()
  .catch((e) => {
    console.log("Working");
    throw e;
  })
  .finally(async () => {
    console.log("Working");

    await prisma.$disconnect();
  });
