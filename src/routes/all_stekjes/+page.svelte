<script>
	import Header from '$lib/components/header.svelte'
	import { onMount } from 'svelte';
	export let data;
	console.log(data)
	
</script>

<Header/>


<h1>Alle stekjes</h1>

<section class="intro_text">
	<!-- introduction text -->
	<svg width="20" height="20" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5 8.16988C23.8333 10.0944 23.8333 14.9056 20.5 16.8301L7.74999 24.1913C4.41666 26.1158 0.249999 23.7102 0.249999 19.8612L0.25 5.13877C0.25 1.28977 4.41667 -1.11584 7.75 0.808657L20.5 8.16988Z"
        fill="#F26F21"/>
    </svg>

   <p>Heb jij een of meerdere plantenstekjes over en 
   zou je die graag willen ruilen voor een nieuwe 
   plantje? Bekijk hieronder ons aanbod.
   </p>
   <img src="src/assets/vetplantjes.png" alt="verschillende potjes met stekjes">
</section>

<section class="filter">
<label>
  <input type="checkbox" id="moeilijkheidsgraad" value="makkelijk"> Makkelijk
</label>

<label>
  <input type="checkbox" id="moeilijkheidsgraad" value="uitdagend"> Uitdagend
</label>
</section>

<section class="wrapper">
<!-- hier komen de kaartjes  -->
{#each data.stekjes as stekje}

 <article>
	<img src="{stekje.fotos[0].url}" alt="foto van {stekje.naam}">
	<div>
	<h3>{stekje.naam}</h3>
	<span>{stekje.categories[0].naam}</span>
	</div>
 </article>
{/each}
	
</section>

<style>
	/* styling van mijn pagina */

	h1{
		font-size: var( --title-size);
		color: var(--title-color);
		margin: 2rem;
		font-weight:bolder;
	}

	.intro_text{
		display: flex;
		flex-direction: row;
		gap: 10px;
		margin: 2rem;
		margin-bottom: 3rem;
		color: var(--text-color);
	}

	.intro_text p{
		font-size: var(--text-size);
		width: 20rem;
	}

	.intro_text img{
		display: none;
		width: 240px;
        height: 210px;
		margin-left: 4rem;
	}

	.filter{
		display: flex;
		gap: 1rem;
		margin: 2rem;
	}

	.wrapper{
		/* tijdelijk mabey @media */
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		margin: 2rem;
	}

/* mabey ga ik het veranderen in grid inplaats van flex */
	article{
		display: flex;
		flex-direction: column;
		width: 195px;
        height: 266px;
		border-radius: 7px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
		position: relative;
	}

	article img{
		width: 100px;
		position: absolute; 
		height: 266px;
		width: 195px;
        top: 0; 
        left: 0; 
		border-radius: 7px;
		
	}

	article div{
		width: 195px;
        height: 89px;
		border-bottom-left-radius: 7px;
		border-bottom-right-radius: 7px;
		background-color: #0D350CDE;
		color: whitesmoke;
		top: 177px;
		position: relative;
	}
</style>