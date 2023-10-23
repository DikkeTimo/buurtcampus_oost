<script>
	import NavDark from '$lib/components/NavDark.svelte';
	import MobileMenu from '../../lib/components/MobileMenu.svelte';
	import Footer from '../../lib/components/footer.svelte';

	import Stekjes from '$lib/assets/vetplantjes.png'
	export let data;
	// console.log(data)

	
	let stekjes = data.stekjes;
	const selectedCategories = ["Makkelijk", "Uitdagend"];
// kijk hoe je met de id inside kan meegeven aan de event die ervoor zorgt ..
	// Event handler voor checkbox-wijzigingen
	function handleCheckboxChange(event) {
		let uitdagend = 'Uitdagend'
		stekjes = data.stekjes.filter(stekje => {
			return stekje.categories[0].naam === uitdagend
		});
		console.log(stekjes)
	}
	



 </script>

<NavDark />
<MobileMenu />

<h1>Alle stekjes</h1>

<section class="intro_text">
	<!-- introduction text -->
	<svg width="20" height="20" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M20.5 8.16988C23.8333 10.0944 23.8333 14.9056 20.5 16.8301L7.74999 24.1913C4.41666 26.1158 0.249999 23.7102 0.249999 19.8612L0.25 5.13877C0.25 1.28977 4.41667 -1.11584 7.75 0.808657L20.5 8.16988Z"
			fill="#F26F21"
		/>
	</svg>

	<p>
		Heb jij een of meerdere plantenstekjes over en zou je die graag willen ruilen voor een nieuwe
		plantje? Bekijk hieronder ons aanbod.
	</p>
	<img src={Stekjes} alt="verschillende potjes met stekjes" />
</section>



<section class="filter">
	<label>
		<input type="checkbox" id="makkelijk" on:change={handleCheckboxChange} /> Makkelijk
	</label>

	<label>
		<input type="checkbox" id="uitdagend" on:change={handleCheckboxChange} /> Uitdagend
	</label>
</section>


<section class="wrapper">
	<!-- hier komen de kaartjes -->
	{#each data.stekjes as stekje}
			<a href={stekje.slug}>
				<article class={stekje.categories[0].naam}>
					<img src={stekje.fotos[0].url} alt="foto van {stekje.naam}" />
					<div>
						<h3>{stekje.naam}</h3>
						<svg class="info" width="35" height="35" viewBox="0 0 50 50" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 4.6875C20.9826 4.6875 17.0554 5.87881 13.715 8.11077C10.3746 10.3427 7.77111 13.5151 6.23371 17.2267C4.6963 20.9384 4.29405 25.0225 5.07781 28.9628C5.86157 32.903 7.79615 36.5224 10.6369 39.3631C13.4777 42.2039 17.097 44.1384 21.0372 44.9222C24.9775 45.706 29.0616 45.3037 32.7733 43.7663C36.4849 42.2289 39.6573 39.6254 41.8892 36.285C44.1212 32.9446 45.3125 29.0174 45.3125 25C45.3068 19.6145 43.1649 14.4513 39.3568 10.6432C35.5487 6.83507 30.3855 4.69319 25 4.6875ZM24.2188 14.0625C24.6823 14.0625 25.1354 14.2 25.5209 14.4575C25.9063 14.715 26.2067 15.0811 26.3841 15.5093C26.5615 15.9376 26.6079 16.4089 26.5175 16.8635C26.427 17.3181 26.2038 17.7358 25.876 18.0635C25.5483 18.3913 25.1306 18.6145 24.676 18.705C24.2214 18.7954 23.7501 18.749 23.3218 18.5716C22.8936 18.3942 22.5275 18.0938 22.27 17.7084C22.0125 17.3229 21.875 16.8698 21.875 16.4062C21.875 15.7846 22.1219 15.1885 22.5615 14.749C23.001 14.3094 23.5972 14.0625 24.2188 14.0625ZM26.5625 35.9375C25.7337 35.9375 24.9389 35.6083 24.3528 35.0222C23.7668 34.4362 23.4375 33.6413 23.4375 32.8125V25C23.0231 25 22.6257 24.8354 22.3327 24.5424C22.0396 24.2493 21.875 23.8519 21.875 23.4375C21.875 23.0231 22.0396 22.6257 22.3327 22.3326C22.6257 22.0396 23.0231 21.875 23.4375 21.875C24.2663 21.875 25.0612 22.2042 25.6472 22.7903C26.2333 23.3763 26.5625 24.1712 26.5625 25V32.8125C26.9769 32.8125 27.3743 32.9771 27.6674 33.2701C27.9604 33.5632 28.125 33.9606 28.125 34.375C28.125 34.7894 27.9604 35.1868 27.6674 35.4799C27.3743 35.7729 26.9769 35.9375 26.5625 35.9375Z" fill="white"/>
                         </svg>
					</div>
				</article>
			</a>
	{/each}
</section>

<Footer />

<style>
	/* styling van mijn pagina */

	.info{
		position: absolute;
		left: 153px;
		top: 49px;
	}

	h1 {
		font-size: var(--title-size);
		color: var(--title-color);
		margin: 2rem;
		margin-top: 8rem;
		font-weight: bolder;
	}

	.intro_text {
		display: flex;
		flex-direction: row;
		gap: 10px;
		margin: 2rem;
		margin-bottom: 3rem;
		color: var(--text-color);
	}

	.intro_text p {
		font-size: var(--text-size);
		width: 20rem;
	}

	.intro_text img {
		position: relative;
		display: none;
		width: 280px;
		height: 250px;
		margin-left: 15%;
		top: -3rem;
	}

	.filter {
		display: flex;
		gap: 1rem;
		margin: 2.5rem;
		margin-left: 10%;
	}

	.wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		margin: 2rem;
		justify-content: center;
		align-items: center;
	}

	.wrapper a {
		text-decoration: none;
		padding-bottom: 2rem;
	}

	article {
		display: flex;
		flex-direction: column;
		width: 195px;
		height: 266px;
		border-radius: 7px;
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
		position: relative;
	}

	article img {
		width: 100px;
		position: absolute;
		height: 266px;
		width: 195px;
		top: 0;
		left: 0;
		border-radius: 7px;
	}

	article div {
		width: 195px;
		height: 89px;
		border-bottom-left-radius: 7px;
		border-bottom-right-radius: 7px;
		background-color: #0d350cde;
		color: whitesmoke;
		top: 177px;
		position: relative;
	}

	article div h3 {
		padding: 0.5rem;
		font-size: 17px;
	}


	article:hover {
		top: -10px;
	}

	@media (width > 45rem) {
		.intro_text img {
			display: block;
		}
	}
</style>
