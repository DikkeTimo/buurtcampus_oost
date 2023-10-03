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

<div class="container_workshop_cards">
	{#each data.workshops as workshop}
		<div class="top_card" />
		<div class="flex_container">
			<div class="left_side">
				<div class="small_card">
				</div>
				<div class="long_card" />
			</div>
			<div class="right_side">
				<div class="long_card" />
				<div class="small_card" />
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
		padding: 1rem;
	}

	.top_card {
		background-image: url(stekjes.jpg);
		background-size: cover;
		border-radius: 16px;
		width: 100%;
		height: 27vh;
		margin-bottom: 1rem;
	}

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
	}
</style>
