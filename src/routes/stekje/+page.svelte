<script>
	export let data;
	console.log(data);

	let isContentVisible = false;

	function toggleContent() {
		isContentVisible = !isContentVisible;
	}
</script>

<section>
	<div class="container">
		<div class="title">
			<h1>{data.stekjes[1].naam}</h1>
		</div>
	</div>

	<div class="content-container">
		<div class="container2">
			<div class="title2">
				<h1>{data.stekjes[1].naam}</h1>
			</div>
			<div class="image-container">
				<img src="https://media.graphassets.com/uy5y3w0FSxuPvUEQthVu" alt="" />
			</div>
		</div>

		<div class="beschrijving">
			<h2>Beschrijving</h2>
			<p>{data.stekjes[1].beschrijving}</p>
		</div>
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
			<label for="second">Voeding</label>
			<div class="content">
				<p>{data.stekjes[1].voeding}</p>
			</div>
		</li>

		<li>
			<input type="radio" name="accordion" id="fifth" />
			<label for="fifth">Temperatuur</label>
			<div class="content">
				<p>{data.stekjes[1].temperatuur}</p>
			</div>
		</li>

		<li>
			<input type="radio" name="accordion" id="fourth" />
			<label for="fourth">Giftig</label>
			<div class="content">
				<p>{data.stekjes[1].giftig}</p>
			</div>
		</li>

		<li>
			<input type="radio" name="accordion" id="third" />
			<label for="third">Verpotten</label>
			<div class="content">
				<p>{data.stekjes[1].verpotten}</p>
			</div>
		</li>

		<li>
			<input type="radio" name="accordion" id="sixth" />
			<label for="sixth">Watergeven</label>
			<div class="content">
				<p>{data.stekjes[1].watergeven}</p>
			</div>
		</li>

		<li>
			<input type="radio" name="accordion" id="seventh" />
			<label for="seventh">Zonlicht</label>
			<div class="content">
				<p>{data.stekjes[1].zonlicht}</p>
			</div>
		</li>

		<li>
			<input type="radio" name="accordion" id="eighth" />
			<label for="eighth">Stekken</label>
			<div class="content">
				<p>{data.stekjes[1].stekken}</p>
			</div>
		</li>
	</ul>
</section>

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
		/* background-color: #f1f1f1; */
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

	/* Standaard stijlen die gelden voor alle apparaten */
	.container,
	.title {
		display: block;
	}

	.container2,
	.title2 {
		display: none;
	}
	/* Standaard stijlen voor de afbeelding-container (niet weergegeven) */
	.image-container {
		display: none;
	}

	/* Mediaquery voor desktopapparaten (schermen breder dan 768px) */
	@media screen and (min-width: 768px) {
		.container,
		.title {
			display: none;
		}

		.container2,
		.title2 {
			display: block;
		}

		.image-container {
			display: block;
		}

		.image-container img {
			width: 200px;
			height: auto;
		}
	}

	/* Verberg de accordion-stijlen (schermgroter dan 768px) */
	@media screen and (min-width: 768px) {
		section {
			margin: 20px;
		}

		.accordion li {
			padding: 5px;
			width: auto;
			box-shadow: black;
			border-radius: 10px;
			transition: padding 0.3s ease; /* Voeg een overgang van 0.3 seconden toe aan de padding met een 'ease' timing-functie */
		}

		/* dit is een kleine hover animatie  */
		.accordion li:hover {
			padding-left: 10px; 
		}

		.accordion li label::before {
			display: none;
		}

		.accordion input[type='radio'] {
			display: block;
			position: absolute;
			opacity: 0;
			pointer-events: none;
		}

		.accordion .content {
			max-height: none;
			overflow: visible;
			padding: 10px;
			transition: none;
		}

		.container {
			display: none;
		}

		/* stijl voor het weergeven van labels in uppercase */
		.accordion li label {
			text-transform: uppercase;
			color: var(--color-primair);
		}

		ul.accordion {
			display: grid;
			grid-template-columns: repeat(2, 1fr); /* Eerste vier items in vier kolommen */
			grid-gap: 10px;
		}

		.content-container {
			display: flex;
			border-radius: 10px;
			overflow: hidden; /* Zorgt ervoor dat de afbeelding binnen de container blijft */
			padding: 10px;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
			margin-bottom: 5px;
		}

		.image-container img {
			width: 300px;
			height: auto;
			border-radius: 10px;
		}

		.container2 {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.title2 {
			padding: 10px;
			text-align: center;
			width: 100%;
		}

		.beschrijving {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
		}

		.beschrijving p {
			font-size: large;
		}
	}


    @media screen and (min-width: 1024px) {
        ul.accordion {
			display: grid;
			grid-template-columns: repeat(4, 1fr); /* Eerste vier items in vier kolommen */
			grid-gap: 15px;
		}

    }
</style>
