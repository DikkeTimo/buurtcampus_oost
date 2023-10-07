<script>
	export let data;
	console.log(data);
</script>

<div class="container">
	<div class="title">
		<h1>{data.stekjes[1].naam}</h1>
	</div>
</div>

<div class="beschrijving">
	<h2>Beschrijving</h2>
	<p>{data.stekjes[1].beschrijving}</p>
</div>

<ul class="accordion">
	<li>
		<input type="radio" name="accordion" id="first" checked />
		<label for="first">Landherkomst</label>
		<div class="content">
			<p>{data.stekjes[1].landvanherkomst}</p>
		</div>
	</li>

	<li>
		<input type="radio" name="accordion" id="second" />
		<label for="second">voeding</label>
		<div class="content">
			<p>{data.stekjes[1].voeding}</p>
		</div>
	</li>

	<li>
		<input type="radio" name="accordion" id="third" />
		<label for="third">verpotten</label>
		<div class="content">
			<p>{data.stekjes[1].verpotten}</p>
		</div>
	</li>

	<li>
		<input type="radio" name="accordion" id="fourth" />
		<label for="fourth">giftig</label>
		<div class="content">
			<p>{data.stekjes[1].giftig}</p>
		</div>
	</li>

	<li>
		<input type="radio" name="accordion" id="fifth" />
		<label for="fifth">temperatuur</label>
		<div class="content">
			<p>{data.stekjes[1].temperatuur}</p>
		</div>
	</li>

	<li>
		<input type="radio" name="accordion" id="sixth" />
		<label for="sixth">watergeven</label>
		<div class="content">
			<p>{data.stekjes[1].watergeven}</p>
		</div>
	</li>

	<li>
		<input type="radio" name="accordion" id="seventh" />
		<label for="seventh">zonlicht</label>
		<div class="content">
			<p>{data.stekjes[1].zonlicht}</p>
		</div>
	</li>
</ul>

<style>
	.container {
		position: relative;
		width: 100%;
		height: 480px; 
		background: url('https://media.graphassets.com/uy5y3w0FSxuPvUEQthVu') no-repeat center
			center/cover;
		text-align: left;
		color: white;
	}

	.title {
		position: absolute;
		left: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.3);
		padding: 20px;
	}

	.accordion {
		width: 100%;
	}

	.accordion li {
		list-style: none;
		padding: 10px;
		margin: 5px;
		width: 100%;
		background: #ffffff;
		box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
	}

	.accordion li label {
		display: flex;
		align-items: center;
		padding: 10px;
		cursor: pointer;
	}

	label::before {
		content: '+';
		margin-right: 10px;
		font-size: 24px;
		font-weight: 600;
	}

	input[type='radio'] {
		display: none;
	}

	.accordion .content {
		color: black;
		padding: 0 10px;
		line-height: 26px;
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.5s, padding 0.5s;
	}

	.accordion input[type='radio']:checked + label + .content {
		max-height: 400px;
		padding: 10px 10px 20px;
	}

	.beschrijving {
		padding: 20px;
		background-color: #f1f1f1;
	}

	.beschrijving h2 {
		color: var(--color-primair);
		margin-bottom: 10px;
		text-transform: uppercase;
	}

	.beschrijving h2 {
		color: var(--color-primair); 
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
	}
</style>
