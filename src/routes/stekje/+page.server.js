import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
    query Assets {
        stekjes {
          naam
          aanmelddatum
          beschrijving
          giftig
          temperatuur
          landvanherkomst
          verpotten
          voeding
          watergeven
          zonlicht
          stekken
          slug
          fotos {
            url
          }
        }
      }
	`;

	return await hygraph.request(query);
}
