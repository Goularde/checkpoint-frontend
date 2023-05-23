import { gql } from "@apollo/client";

export const getCountry = gql`
  query getCountry($code: ID!) {
    country(code: $code) {
      code
      name
      currency
      capital
      emoji
      emojiU
    }
  }
`;
