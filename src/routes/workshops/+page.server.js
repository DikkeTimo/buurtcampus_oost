import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query MyQuery {
			workshops {
				kosten
				id
				locatie
				naam
				foto {
					id
					url
					width
				}
				datum
			}
		}
	`;

	return await hygraph.request(query);
}
