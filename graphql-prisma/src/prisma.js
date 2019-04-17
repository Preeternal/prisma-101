import { Prisma } from "prisma-binding";

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "http://localhost:4466"
});

const createPostForUser = async (authorID, data) => {
  const post = await prisma.mutation.createPost(
    {
      data: {
        ...data,
        author: {
          connect: {
            id: authorID
          }
        }
      }
    },
    "{id}"
  );
  const user = await prisma.query.user(
    {
      where: {
        id: authorID
      }
    },
    "{ id name email posts {id title published }}"
  );
  return user;
};

createPostForUser("cjudyhwpf001g0744f94dj8qz", {
  title: "Great book",
  body: "Science",
  published: true
}).then(user => {
  console.log(JSON.stringify(user, undefined, 2));
}); //

// prisma.query.users(null, "{id name posts { id title }}").then(data => {
//   console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.query.comments(null, "{id text author {name} post {title}}").then(data => {
//   console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.mutation
//   .createPost(
//     {
//       data: {
//         title: "GraphQL 101",
//         body: "",
//         published: false,
//         author: {
//           connect: {
//             id: "cjudt0bwd001v0738bftr9ewz"
//           }
//         }
//       }
//     },
//     "{id title body published}"
//   )
//   .then(data => {
//     console.log(data);
//     return prisma.query.users(null, "{id name posts { id title }}");
//   })
//   .then(data => {
//     console.log(JSON.stringify(data, undefined, 2));
//   });

// prisma.mutation
//   .updatePost(
//     {
//       data: {
//         body: "some data",
//         published: "true"
//       },
//       where: {
//         id: "cjui7yiwm009o0744vrh6g9sf"
//       }
//     },
//     "{id title body published}"
//   )
//   .then(data => {
//     console.log(data);
//     return prisma.query.posts(null, "{id title body published}");
//   })
//   .then(data => {
//     console.log(JSON.stringify(data, undefined, 2));
//   });
