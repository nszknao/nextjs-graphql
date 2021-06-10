import { objectType, extendType } from "nexus";

export const Post = objectType({
  name: "Post",
  description: "ユーザーの投稿",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("title");
    t.nonNull.string("body");
    t.nonNull.field("author", { type: "User" });
    t.nonNull.boolean("published");
  },
});

export const PostQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("drafts", {
      type: "Post",
      resolve: async (_parent, _args, ctx) => {
        const posts = await ctx.prisma.post.findMany({
          where: { published: false },
        });
        return [];
      },
    });
  },
});
