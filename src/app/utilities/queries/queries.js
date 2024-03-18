const { gql } = require("@apollo/client");

export const GET_ITEMS = gql`
  query getItems {
    items {
      id
      room_status
      capacity
      created_at
      location
      name
      occupy_category
      occupy_from
      occupy_to
      price
      updated_at
    }
  }
`;
