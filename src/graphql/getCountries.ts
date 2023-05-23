import { gql } from "@apollo/client";

export const getCountries = gql`
  query	getCountries($code: ID!){
  continent(code: $code){
    countries{code name emoji}
  }
}
`;
