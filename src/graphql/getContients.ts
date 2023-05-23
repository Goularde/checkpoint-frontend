import { gql } from "@apollo/client";

export const getContients = gql`
  query continents {
    continents {
      code
      name
    }
  }
`;
