<script>
	import NavDark from '$lib/components/NavDark.svelte';
	import MobileMenu from '../../lib/components/MobileMenu.svelte';
	import Footer from '../../lib/components/footer.svelte';

	import Location from '../../src/assets/location.svg'
	import Money from '../../src/assets/money.svg'
	import Date from '../../src/assets/date.svg'

	export let data;

	let selectedMonth = '';
	const months = [
		'januari',
		'februari',
		'maart',
		'april',
		'mei',
		'juni',
		'juli',
		'augustus',
		'september',
		'oktober',
		'november',
		'december'
	];
	let filteredWorkshops = data.workshops; // Data van de workshops in filteredWorkshops

	function filterWorkshops() {
		if (selectedMonth) {
			filteredWorkshops = data.workshops.filter((workshop) => {
				return workshop.datum.toLowerCase().includes(selectedMonth.toLowerCase());
			});
		} else {
			filteredWorkshops = data.workshops;
		}
	}
</script>

<NavDark />
<MobileMenu />

<section class="firstSection">
	<div class="top_info">
		<h1>Workshops</h1>

		<div class="wrapper_info">
			<div class="container_info">
				<svg
					width="20"
					height="20"
					viewBox="0 0 23 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.5 8.16988C23.8333 10.0944 23.8333 14.9056 20.5 16.8301L7.74999 24.1913C4.41666 26.1158 0.249999 23.7102 0.249999 19.8612L0.25 5.13877C0.25 1.28977 4.41667 -1.11584 7.75 0.808657L20.5 8.16988Z"
						fill="#F26F21"
					/>
				</svg>
				<p>
					Natuurlijk! Workshops zijn fantastische leermogelijkheden waarbij deelnemers praktische
					vaardigheden kunnen verwerven, nieuwe kennis kunnen opdoen en vaak ook nieuwe mensen
					kunnen ontmoeten. Het idee achter jouw website om een overzicht te bieden van beschikbare
					workshops is geweldig, omdat het mensen kan helpen om gemakkelijk toegang te krijgen tot
					deze waardevolle leermogelijkheden. Ontdek en Leer met Onze Workshopgids Welkom bij
					Plantswap, dé plek om workshops te ontdekken die jouw vaardigheden kunnen verbeteren, je
					passies kunnen verdiepen en je horizon kunnen verbreden.
				</p>
			</div>

			<div class="form">
				<form on:submit|preventDefault={filterWorkshops}>
					<label for="month">Selecteer maand:</label>
					<select id="month" bind:value={selectedMonth} on:change={filterWorkshops}>
						<option value="">alle</option>
						{#each months as month}
							<option value={month}>{month}</option>
						{/each}
					</select>
				</form>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="wrapper">
		<div class="container_workshop_cards">
			{#each filteredWorkshops as workshop}
				<div class="card">
					<div class="plant">
						<img src={workshop.foto[0].url} alt="foto van een stekje" width="100" />
					</div>

					<div class="info_workshop">
						<h3>{workshop.naam}</h3>
						<p>
							<img src={Location} alt="" />
							{workshop.locatie}
						</p>
						<p>
							<img src={Money} alt="" />
							{workshop.kosten}
						</p>
						<p>
							<img src={Date} alt="" />
							{workshop.datum}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<Footer />
</section>

<style>
	:root {
		--padding: 0.5rem;
		--color-text: #555555;
		--borderr: 5px;
	}

	.firstSection {
		padding-top: 6rem;
		margin: var(--margin);

		& h1 {
			color: var(--color-primair);
			font-size: var(--title-size);
		}

		& form {
			margin-left: 0;
		}
	}

	/* .wrapper_info {
		display: flex;
		justify-content: space-between;
		align-items: end;
	} */

	/* .form {
		display: flex;
		flex-direction: column;
		justify-content: end;
	} */

	.container_info {
		display: flex;
		margin-top: 2rem;
		gap: 10px;

		& p {
			width: 20rem;
			color: var(--text-color);
		}
	}

	form {
		display: flex;
		flex-direction: column;
		width: 10rem;
		margin-top: 3rem;
	}

	select {
		background-color: var(--color-primair);
		color: #fff;
	}

	#month {
		font-family: 'Mulish', sans-serif;
		padding: var(--padding);
		border-radius: 5px;
	}
	/* ----- */

	.container_workshop_cards {
		margin-bottom: var(--margin);
	}

	.card {
		border-radius: var(--border-radius);
		background-color: var(--background-color);
		margin: var(--margin);
		max-width: 100%;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	}

	.plant {
		padding: 1rem;
		width: 100%;
		height: 250px;
	}

	.plant img {
		border-radius: var(--border-radius);
		object-fit: cover;
		object-position: center;
		width: 100%;
		height: 100%;
	}

	.info_workshop {
		padding: 1rem;

		& h3 {
			margin-bottom: 1rem;
		}

		& p {
			margin-bottom: var(--padding);
		}
	}

	/* media query tablet */
	@media (min-width: 768px) and (max-width: 1023px) {
		.wrapper {
			display: flex;
			flex-direction: row;
			width: 100%;
		}
		.card {
			width: 40%;
		}

		.top_info p,
		.top_info h1 {
			text-align: left;
		}

		.container_info {
			display: flex;
		}

		.container_info p {
			width: 40rem;
		}

		form {
			border-radius: var(--border-radius);
			padding: 1rem;
			width: 40%;
		}

		.container_workshop_cards {
			display: flex;
			flex-wrap: wrap;
		}
	}

	/* media query desktop */
	@media (min-width: 1024px) {
		.wrapper {
			display: flex;
			justify-content: space-around;
		}

		.container_workshop_cards {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}

		.wrapper_info {
			display: flex;
			justify-content: space-between;
			align-items: end;
		}

		.top_info p,
		.top_info h1 {
			text-align: left;
		}

		.top_info p {
			width: 35rem;
		}

		.card {
			width: 25vw;
		}

		.plant {
			height: 350px;
		}

		form {
			border-radius: var(--border-radius);
		}
	}
</style>
