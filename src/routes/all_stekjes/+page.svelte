<script>
	export let data;
	console.log(data)
</script>


<h1>Alle stekjes</h1>

<section class="intro_text">
	<!-- introduction text -->
	<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
  <path d="M6.11499 4.19838L6.30245 22.9475C6.30494 23.1373 6.35916 23.3228 6.45925 23.4841C6.55936 23.6454 6.70155 23.7764 6.87054 23.8629C7.03952 23.9494 7.2289 23.9881 7.41828 23.975C7.60766 23.9619 7.78987 23.8973 7.94531 23.7884L21.3926 14.2784C21.9501 13.8843 21.9408 12.9489 21.3754 12.565L7.74072 3.32583C7.58345 3.21888 7.39988 3.15708 7.20995 3.14714C7.02002 3.13719 6.831 3.17949 6.66343 3.26943C6.49585 3.35937 6.35612 3.49351 6.25943 3.65729C6.16274 3.82106 6.11279 4.0082 6.11499 4.19838Z" fill="#FF7A00"/>
</svg>
<p>Heb jij een of meerdere plantenstekjes over en 
   zou je die graag willen ruilen voor een nieuwe 
   plantje? Bekijk hieronder ons aanbod.</p>

</section>

<section class="wrapper">
<!-- hier komen de kaartjes  -->
{#each data.stekjes as stekje}

 <article>
	<img src="{stekje.fotos[0].url}" alt="foto van {stekje.naam}">
	<div>
	<h3>{stekje.naam}</h3>
	<span>makkelijk</span>
	</div>
 </article>
{/each}
	
</section>

<style>
	/* styling van mijn pagina */

	h1{
		font-size: var( --title-size);
		color: var(--title-color);
		margin: 1rem;
	}

	.intro_text{
		display: flex;
		flex-direction: row;
		gap: 10px;
		margin: 1rem;
		margin-bottom: 3rem;
		width: 25rem;
	}

	.intro_text p{
		font-size: var(--text-size);
	}

	.wrapper{
		/* tijdelijk mabey @media */
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 2rem;
		margin: 1rem;
	}

	article{
		width: 195px;
        height: 266px;
		overflow: hidden;
		border-radius: 7px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	}

	article img{
		width: 100px;
		
	}

	article div{
		width: 195px;
        height: 89px;
		background-color: #0D350CDE;
		color: whitesmoke;
	}

	/* article h3{
		font-family: ;
	} */

	article span{
        padding: 0px 0px 7px 8px;
		background-color: var( --accent-color-sec);
		border-radius: 6px;
	}
</style>