<script>
	import { onMount } from 'svelte';
	import { request, gql } from 'graphql-request';

	const fetchData = async () => {
		const document = gql`
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

		const data = await request(
			'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbe0wlb32hx401ui0c2yfm49/master',
			document
		);
	};

	onMount(fetchData);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
