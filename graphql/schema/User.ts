import { objectType, extendType } from "nexus";

export const User = objectType({
  name: "User",
  description: "ユーザー",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
    t.nonNull.string("email");
  },
});
