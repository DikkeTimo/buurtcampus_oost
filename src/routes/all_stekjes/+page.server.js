import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query Assets {
			stekjes {
				aanmelddatum
				beschrijving
				fotos {
					fotosStekje
				}
				naam
				slug
				landvanherkomst
				zonlicht
				watergeven
			}
		}
	`;

	return await hygraph.request(query);
}
