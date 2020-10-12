import React from "react";
import { gql, useQuery } from "@apollo/client";

const GetPosts = gql`
  query GetPosts {
    feed {
      id
    }
  }
`;

const User = () => {
  const { loading, data } = useQuery(GetPosts);
  console.dir(data);
  return <div>{data}</div>;
};

export default User;
