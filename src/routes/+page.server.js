import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';


export async function load() {
	let query = gql`
		query MyQuery {
			stekjes {
				aanmelddatum
				beschrijving
				landvanherkomst
				naam
				temperatuur
				zonlicht
				watergeven
				voeding
				verpotten
			}
		}
	`;

	return await hygraph.request(query);
}
