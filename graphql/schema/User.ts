import { objectType, extendType } from "nexus";

export const User = objectType({
  name: "User",
  description: "ユーザー",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
  },
});
