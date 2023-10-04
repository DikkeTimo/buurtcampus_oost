import {gql} from 'graphql-request';
import {hygraph} from '$lib/utils/hygraph.js';


// export async function load() {
//     let query = gql`
// query Assets {
//   headers {
//     imagesCarousel {
//       url
//     }
//     id
//   }
// }
//
// 	`;
//
//     return await hygraph.request(query);
// }

// MOST RECENT STEKJESE HOMEPAGE QUERY
export async function load() {
    let query = gql`
  query {
    stekjes (first: 3) {
      naam
      slug
      categories {
        naam
      }
      id
      fotos {
        url
      }
    }
  }
`;
    return await hygraph.request(query);
}



