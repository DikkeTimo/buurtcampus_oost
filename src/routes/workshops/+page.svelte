<script>
	import Header from '$lib/components/header.svelte'
	import { onMount } from 'svelte';
	export let data;
	console.log(data);

	onMount(() => {
		let year = new Date();
		let currentYear = year.getFullYear();
		let currentMonth = year.getMonth() + 1;

		function formatMonth(month) {
			return month < 10 ? `0${month}` : `${month}`;
		}

		const monthInput = document.getElementById('month');
		monthInput.value = `${currentYear}-${formatMonth(currentMonth)}`;
	});
</script>

<Header/>


<h1>Workshops</h1>

<div class="input">
	<label for="start">Selecteer maand:</label>
	<input type="month" id="month" value="" />
</div>

<div class="container_workshop_cards">
	{#each data.workshops as workshop}
		<div class="card">
			<img src={workshop.foto[0].url} alt="foto van een stekje" width="100" />
			<div class="info_workshop">
				<h3>{workshop.naam}</h3>
				<p>
					<img src="location.svg" alt="">
					{workshop.locatie}
				</p>
				<p>
					<img src="money.svg" alt="">
					{workshop.kosten}
				</p>
				<p>{workshop.datum}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	:root {
		--margin: 1rem;
		--padding: 0.5rem;
	}
	h1 {
		margin: var(--margin);
	}

	.input {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: var(--margin);
	}

	input {
		padding: var(--padding);
		border: 1px grey solid;
		border-radius: 5px;
	}
	/* ----- */

	.container_workshop_cards {
		padding: 1rem;
	}

	.card {
		display: flex;
		width: 100%;
		height: 20vh;
		margin-bottom: 1rem;
		-webkit-box-shadow: 0px 1px 5px 0px rgba(66, 68, 90, 1);
		-moz-box-shadow: 0px 1px 5px 0px rgba(66, 68, 90, 1);
		box-shadow: 0px 1px 5px 0px rgba(66, 68, 90, 1);
	}

	img {
		object-fit: cover;
		height: 100%;
	}

	.info_workshop {
		margin: 0.5rem;
		width: 100%;
	}

	.info_workshop h3 {
		color: var(--color-primair);
	}

	.info_workshop p {
		display: flex;
		align-items: center;
		margin-top: var(--padding);
	}
</style>
