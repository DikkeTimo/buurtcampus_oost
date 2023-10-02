<script>
	export let data
	console.log(data)
</script>

<h1>Workshops</h1>

<div>
	<table>
		<thead>
			<tr>
				<th>JAN</th>
				<th>FEB</th>
				<th>MAA</th>
				<th>APR</th>
				<th>MEI</th>
				<th>JUNI</th>
				<th>JULI</th>
				<th>AUG</th>
				<th>SEP</th>
				<th>OKT</th>
				<th>NOV</th>
				<th>DEC</th>
			</tr>
		</thead>
	</table>
</div>

<style>
	div {
		width: 100vw;
		overflow-x: auto;
	}

	table {
		border-collapse: collapse;
		table-layout: fixed;
		width: 150vw;
	}
	table th {
		padding: 1rem;
		border: 1px solid black;
	}
</style>
