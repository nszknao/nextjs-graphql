import { interfaceType } from "nexus";

export const Node = interfaceType({
  name: "Node",
  definition(t) {
    t.nonNull.id("id", {
      description: "Unique identifier for the resource",
      resolve: () => "",
    });
  },
  resolveType: () => null,
});
