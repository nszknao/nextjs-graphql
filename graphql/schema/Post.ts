import { objectType, extendType } from "nexus";

export const Post = objectType({
  name: "Post",
  description: "ユーザーの投稿",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("title");
    t.nonNull.string("body");
    t.nonNull.field("author", {
      type: "User",
      resolve: async (parent, _args, ctx) => {
        return await ctx.prisma.user.findFirst({
          where: { id: parent.authorId },
          rejectOnNotFound: true,
        });
      },
    });
    t.nonNull.boolean("published");
  },
});

export const PostQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("drafts", {
      type: "Post",
      resolve: async (_parent, _args, ctx) => {
        return await ctx.prisma.post.findMany({
          where: { published: false },
        });
      },
    });
  },
});
