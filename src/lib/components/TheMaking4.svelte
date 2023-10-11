<script>
    import img from "$lib/assets/laatste.jpg"
</script>

<section>
	<div class="wrapper-block">
		<div class="left-content">
			<h3>En nu wordt de kast met liefde gebruikt!</h3>
			<p>
				Het proces van het stekken van planten is een boeiende manier om nieuwe planten te laten
				groeien uit delen van bestaande exemplaren. Het begint met het selecteren van gezonde
				moederplanten. Knip een stukje van de plant, meestal een takje of een blad, met scherpe,
				schone scharen of een mes. Zorg ervoor dat het stekje minstens één knooppunt (waar bladeren
				groeien) heeft. Verwijder eventuele bladeren aan de onderkant van het stekje om wortelgroei
				te bevorderen.
			</p>
		</div>
		<div class="right-content">
			<img
			src={img}
				alt=""
			/>
		</div>
	</div>
</section>

<style>
	section {
        position: sticky;
        top: 7em;
		padding: 2em;
		height: 90vh;
		width: 100%;
		overflow: hidden;
		color: rgb(59, 89, 62);
	}

	.wrapper-block {
		height: 100%;
		width: 100%;
		background-color: rgb(255, 217, 184);
		display: flex;
		border-radius: 1em;
        padding: 2em;
	}

	.left-content {
        width: 100%;
	}

	.right-content {
		height: 100%;
		width: 100%;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 1em;
	}

		h3 {
		font-size: 5em;
		font-weight: 900;
        max-width: 90%;
        line-height: 1em;
        margin-bottom: 1.2rem;
	}

	p {
		max-width: 75%;
	}
</style>
