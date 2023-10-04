<script>
	export let data;
	console.log(data);
</script>

<h1>Workshops</h1>

<div class="filter_data">
	<div class="months">
		<a href="#">JAN</a>
		<a href="#">FEB</a>
		<a href="#">MAA</a>
		<a href="#">APR</a>
		<a href="#">MEI</a>
		<a href="#">JUN</a>
		<a href="#">JUL</a>
		<a href="#">AUG</a>
		<a href="#">SEP</a>
		<a href="#">OKT</a>
		<a href="#">NOV</a>
		<a href="#">DEC</a>
	</div>
</div>

<!-- <div class="grid">
	{#each data.workshops as workshop}
	<div class="item" style="block-size: 1em;" />
	{/each}
</div> -->

<div class="container_workshop_cards">
	{#each data.workshops as workshop}
		<div class="card">
			<img src={workshop.foto[0].url} alt="foto van een stekje" width="100" />
			<div class="info_workshop">
				<h3>{workshop.naam}</h3>
			</div>
		</div>
	{/each}
</div>

<style>
	h1 {
		margin: 1rem;
	}
	.filter_data {
		overflow-x: auto;
		width: 100vw;
	}

	.months {
		display: flex;
		width: 130vw;
	}

	a {
		color: black;
		border-style: solid;
		text-decoration: none;
		text-align: center;
		padding: 1rem;
		width: 20rem;
	}

	a:nth-child(even) {
		border-right: 0;
	}
	a:nth-child(odd) {
		border-right: 0;
	}

	a:hover {
		-webkit-box-shadow: -1px 7px 6px 3px rgba(0, 0, 0, 0.78);
		-moz-box-shadow: -1px 7px 6px 3px rgba(0, 0, 0, 0.78);
		box-shadow: -1px 7px 6px 3px rgba(0, 0, 0, 0.78);
	}

	/* ----- */

	.container_workshop_cards {
		padding: 0.5rem;
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

	/*

	.flex_container {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}

	.left_side,
	.right_side {
		width: 50%;
	}

	.right_side {
		display: flex;
		flex-direction: column;
		align-items: end;
	}

	.small_card {
		background-image: url(stekjes.jpg);
		background-size: cover;
		border-radius: 16px;
		width: 100%;
		height: 25vh;
		margin-bottom: 1rem;
	}

	.long_card {
		background-image: url(stekjes.jpg);
		background-size: cover;
		border-radius: 16px;
		width: 100%;
		height: 40vh;
		margin-bottom: 1rem;
	} */
</style>
