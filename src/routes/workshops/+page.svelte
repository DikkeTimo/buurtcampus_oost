<script>
	import Header from '$lib/components/Header.svelte';
	import NavDark from '$lib/components/NavDark.svelte';
	import Footer from '../../lib/components/footer.svelte';
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
	let filteredWorkshops = data.workshops; // Initialize with all workshops

	function filterWorkshops() {
		if (selectedMonth) {
			filteredWorkshops = data.workshops.filter((workshop) => {
				return workshop.datum.toLowerCase().includes(selectedMonth.toLowerCase());
			});
		} else {
			filteredWorkshops = data.workshops; // Reset to all workshops if no month selected
		}
	}
</script>

<Header />
<!-- <Header /> -->
<!-- <NavDark /> -->

<main>
	<div class="top_info">
		<h1>Workshops</h1>
		<p>info.......</p>
	</div>

	<!-- <form>
		<label for="month">selecteer maand:</label>
		<select id="month">
			<option value="">alles</option>
			{#each months as month}
				<option value={month}>{month}</option>
			{/each}
		</select>
		<button type="submit">Selecteer</button>
	</form> -->

	<div class="wrapper">
		<form on:submit|preventDefault={filterWorkshops}>
			<label for="month">Selecteer maand:</label>
			<select id="month" bind:value={selectedMonth} on:change={filterWorkshops}>
				<option value="">alle</option>
				{#each months as month}
					<option value={month}>{month}</option>
				{/each}
			</select>
		</form>
	
		<div class="container_workshop_cards">
			{#each filteredWorkshops as workshop}
				<div class="card">
					<div class="plant">
						<img src={workshop.foto[0].url} alt="foto van een stekje" width="100" />
					</div>
	
					<div class="info_workshop">
						<h3>{workshop.naam}</h3>
						<p>
							<img src="src/assets/location.svg" alt="" />
							{workshop.locatie}
						</p>
						<p>
							<img src="src/assets/money.svg" alt="" />
							{workshop.kosten}
						</p>
						<p>
							<img src="src/assets/date.svg" alt="" />
							{workshop.datum}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>


	<Footer />
</main>

<style>
	:root {
		--margin: 1rem;
		--padding: 0.5rem;
		--color-text: #555555;
		--borderr: 5px;
	}

	main {
		/* background-color: #f2f2f2; */
		width: 100%;
		height: 100%;
	}

	h1 {
		color: var(--color-primair);
	}

	.top_info {
		& p,
		h1 {
			padding: var(--padding);
		}
	}

	form {
		display: flex;
		flex-direction: column;
		width: 10rem;
		margin-top: 3rem;
		margin: var(--margin);
	}

	select {
		background-color: var(--color-primair);
		color: #fff;
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
		padding: 1rem;

		& h3 {
			margin-bottom: 1rem;
		}

		& p {
			margin-bottom: var(--padding);
		}
	}

	@media (min-width: 767px) {
		.container_workshop_cards {
			display: flex;
			/* flex-wrap: wrap; */
			/* justify-content: space-around; */
		}
		.card {
			width: 49%;
		}
	}

	@media (min-width: 768px) and (max-width: 1023px) {
		.container_workshop_cards {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
		.card {
			width: 40%;
		}
	}

	@media (min-width: 1024px) {

		.wrapper {
			display: flex;
			justify-content: space-around;
			border-top: 1px solid rgb(192, 190, 190);

		}

		.container_workshop_cards {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}

		.top_info p,
		.top_info h1 {
			text-align: center;
		}
		.card {
			width: 35vw;
		}

		.container_workshop_cards {
			width: 100%;
			margin: 0 auto;
		}

		/* form {
			margin-left: 10%;
		} */
	}
</style>
