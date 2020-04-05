import { gql } from "apollo-boost";

const GET_BOOKS = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

export { GET_BOOKS };
