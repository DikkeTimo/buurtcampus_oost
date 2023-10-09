<script>
	import Header from '$lib/components/header.svelte';
	import NavDark from '$lib/components/NavDark.svelte'

	import { onMount } from 'svelte';
	export let data;

	onMount(() => {
		let year = new Date();
		let currentYear = year.getFullYear();
		let currentMonth = year.getMonth() + 1;

		function formatMonth(month) {
			return month < 10 ? `0${month}` : `${month}`;
		}

		const monthInput = document.getElementById('month');
		monthInput.value = `${currentYear}-${formatMonth(currentMonth)}`;

		// Filteroption

		let selectedMonth = '';
		let filteredWorkshops = [];

		function filterWorkshops() {
			filteredWorkshops = data.workshops.filter((workshop) => {
				const workshopDate = new Date(workshop.datum);
				const workshopMonth = workshopDate.getMonth() + 1; // Months are 0-indexed, so add 1
				return workshopMonth === parseInt(selectedMonth.split('-')[1]);
			});
		}

		const button = document.getElementById("submit")

		button.addEventListener("click", filteredWorkshops)

	});
</script>

<Header />
<!-- <Header /> -->
<NavDark />

<main>
	<div class="top_info">
		<h2>Workshops</h2>
		<p>info.......</p>
	</div>

	<div class="input">
		<label for="start">Selecteer maand:</label>
		<input type="month" id="month" value="" />
		<input id="submit" type="submit" />
	</div>

	<div class="container_workshop_cards">
		{#each data.workshops as workshop}
			<div class="card">
				<div class="plant">
					<img src={workshop.foto[0].url} alt="foto van een stekje" width="100" />
				</div>

				<div class="info_workshop">
					<h3>{workshop.naam}</h3>
					<p>
						<img src="location.svg" alt="" />
						{workshop.locatie}
					</p>
					<p>
						<img src="money.svg" alt="" />
						{workshop.kosten}
					</p>
					<p>
						<img src="date.svg" alt="" />
						{workshop.datum}
					</p>
				</div>
			</div>
		{/each}
	</div>
</main>

<style>
	:root {
		--margin: 1rem;
		--padding: 0.5rem;
		--color-text: #555555;
		--borderr: 5px;
	}

	main {
		background-color: #f2f2f2;
		width: 100%;
	}
	h2 {
		padding: var(--margin);
	}

	.input {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: var(--margin);
	}

	#month {
		font-family: 'Mulish', sans-serif;
		padding: var(--padding);
		border: 1px grey solid;
		border-radius: 5px;
	}
	/* ----- */

	.container_workshop_cards {
		margin-bottom: var(--margin);
	}

	.top_info h2,
	.top_info p {
		text-align: center;
	}

	.card {
		border-radius: var(--borderr);
		background-color: #fff;
		margin: var(--margin);
		max-width: 100%;
		-webkit-box-shadow: 0px 1px 5px 0px rgba(66, 68, 90, 1);
		-moz-box-shadow: 0px 1px 5px 0px rgba(66, 68, 90, 1);
		box-shadow: 0px 1px 5px 0px rgba(66, 68, 90, 1);
	}

	.plant {
		width: 100%;
		height: 212px;
	}

	.plant img {
		border-radius: var(--borderr) var(--borderr) 0 0;
		object-fit: cover;
		object-position: center;
		width: 100%;
		height: 100%;
	}

	.info_workshop {
		padding: 	1rem;

		& h3 {
			margin-bottom: 1rem;
		}

		& p {
			margin-bottom: var(--padding);
		}
	}
</style>
