<script>
    import {onMount} from 'svelte';

    export let data;

    let slidesContainer;
    let slideWidth;
    let currentSlide = 0;
    let intervalId;

    onMount(() => {
        slidesContainer = document.querySelector('.slides');
        slideWidth = document.querySelector('.slides-item').offsetWidth;

        // Functie om naar de volgende dia te scrollen
        function nextSlide() {
            currentSlide++;
            if (currentSlide >= 3) {
                currentSlide = 0; // Terug naar de eerste dia als het einde is bereikt
            }

            slidesContainer.scrollTo({
                left: currentSlide * slideWidth,
                behavior: 'smooth',
            });
        }


        // Functie om de carousel automatisch af te spelen
        function startCarousel() {
            intervalId = setInterval(nextSlide, 3000); // Wissel dia elke 3 seconden (pas aan zoals nodig)
        }

        // Voer de startCarousel-functie uit wanneer de component wordt aangemaakt
        startCarousel();
    });


</script>

<a href="workshops">Workshops</a>

<!-- CAROUSEL -->
<section class="carousel">

    <div class="slides">

        <div class="slides-item slide-1" id="slide-1"><img src="src/assets/expample-plant.jpg"></div>
        <div class="slides-item slide-2" id="slide-2">2</div>
        <div class="slides-item slide-3" id="slide-3">3</div>

    </div>
</section>

<!--{#each data.headers as headers}-->
<!--    <img src={headers.url} alt="1"/>-->
<!--{/each}-->

<!-- SECTION 1 HOW IT WORKS -->
<section class="how-it-works">

    <div class="flex-titel-how-it-works">
        <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 8.16988C23.8333 10.0944 23.8333 14.9056 20.5 16.8301L7.74999 24.1913C4.41666 26.1158 0.249999 23.7102 0.249999 19.8612L0.25 5.13877C0.25 1.28977 4.41667 -1.11584 7.75 0.808657L20.5 8.16988Z"
                  fill="#F26F21"/>
        </svg>
        <h2>Hoe werkt het?</h2>
    </div>
    <p>Bij Buurtcampus Oost kun je de stekjeskast bezoeken om stekjes te ruilen, je kunt ook op onze website inzien
        welke stekjes beschikbaar zijn. Dit is een geweldige manier voor plantenliefhebbers om met elkaar in
        contact te komen en planten te delen. Het maakt het gemakkelijk om je favoriete stekjes te vinden en te ruilen
        met anderen in de buurt, zonder gedoe. Kom langs bij Buurtcampus Oost en ontmoet mede-plantenliefhebbers!</p>
</section>

<!-- SECTION 2 AVAILABLE STEKJES -->
<section class="available-stekjes">
    <div class="flex-titel-available-stekjes">
        <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 8.16988C23.8333 10.0944 23.8333 14.9056 20.5 16.8301L7.74999 24.1913C4.41666 26.1158 0.249999 23.7102 0.249999 19.8612L0.25 5.13877C0.25 1.28977 4.41667 -1.11584 7.75 0.808657L20.5 8.16988Z"
                  fill="#F26F21"/>
        </svg>
        <h3>Beschikbare stekjes</h3>
    </div>
    <p> Dit zijn de meest recente stekjes die je kunt ruilen, en het enige wat je hoeft te doen is je eigen stekje
        meenemen.</p>

    <div class="container-recent-stekjes">
        <div class="flex-wrapper-recent-stekjes">

            {#each data.stekjes as stekje}

                <img src={stekje.fotos[0].url} alt="foto van een stekje" width="100"/>
            {/each}
        </div>
    </div>

</section>

<!-- ABOUT BUURTCAMPUS OOST -->
<section class="about-homepage">
    <div class="flex-title-about">
        <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 8.16988C23.8333 10.0944 23.8333 14.9056 20.5 16.8301L7.74999 24.1913C4.41666 26.1158 0.249999 23.7102 0.249999 19.8612L0.25 5.13877C0.25 1.28977 4.41667 -1.11584 7.75 0.808657L20.5 8.16988Z"
                  fill="#F26F21"/>
        </svg>
        <h4>Over PlantSwap</h4>
    </div>

    <p> De Buurtcampus-Oost heeft als doel Amsterdam-Oost duurzamer, inclusiever en gezonder te maken. PlantSwap
        Amsterdam zorgt ervoor dat plantenliefhebbers elkaar ontmoeten in de bibliotheek. Daarnaast hebben planten in
        huis een positief effect op je lichamelijke en geestelijke gezondheid. Veel mensen weten niet goed hoe ze voor
        planten moeten zorgen en kopen nieuwe als ze dood gaan. In het kader van duurzaamheid, gezondheid en meer
        sociale connectie, is PlantSwap Amsterdam een plek van sociale ontmoeting, waar mensen samen leren over
        planten.</p>

</section>


<!-------------CSS------------->
<style>

    /* ------------ CAROUSEL ------------*/
    .carousel {
        margin: 0 auto;
        overflow: hidden;
        text-align: center;

    }

    .slides {
        display: flex;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        scrollbar-width: none;
    }

    .slides::-webkit-scrollbar {
        display: none;
    }

    .slides-item {
        align-items: center;
        display: flex;
        flex-shrink: 0;
        font-size: 100px;
        height: 400px;
        justify-content: center;
        margin: 0 1rem;
        position: relative;
        transform: scale(1);
        transform-origin: center center;
        transition: transform .5s;
        width: 100%;
        scroll-snap-align: start;

    }

    .slide-1 img {
        /*background-color: #fdc;*/
        width: 38rem;
    }

    .slide-2 {
        background-color: #bfd;
    }

    .slide-3 {
        background-color: #cdf;
    }

    /* ------------ SECTION HOW IT WORKS ------------*/

    .flex-titel-how-it-works {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-top: 4rem;
        margin-bottom: 1rem;
        margin-left: 1.5rem;
    }

    .flex-titel-how-it-works svg {
        width: 1rem;
    }

    .how-it-works p {
        font-size: 16px;
        margin-left: 3.5rem;
        max-width: 18rem;
    }

    /* ------------ SECTION AVAILABLE STEKJES ------------*/

    h3 {
        font-size: 23px;
    }

    .flex-titel-available-stekjes {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-top: 8rem;
        margin-bottom: 1rem;
        margin-left: 1.5rem;
    }

    .flex-titel-available-stekjes svg {
        width: 1rem;
    }

    .available-stekjes p {
        font-size: 16px;
        margin-left: 3.5rem;
        max-width: 18rem;
    }

    .container-recent-stekjes {
        margin-top: 2.5rem;
    }

    .flex-wrapper-recent-stekjes {
        display: flex;
        margin-left: 3.5rem;
        gap: 2rem;
        overflow-x: scroll;
        width: 80vw;
    }

    .flex-wrapper-recent-stekjes img {
        width: 15rem;
        border-radius: 5px;
    }

    /* ------------ SECTION ABOUT BUURTCAMPUS OOST ------------*/
    h4 {
        font-size: 23px;
    }

    .flex-title-about {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-top: 8rem;
        margin-bottom: 1rem;
        margin-left: 1.5rem;
    }

    .flex-title-about svg {
        width: 1rem;
    }

    .about-homepage p {
        font-size: 16px;
        margin-left: 3.5rem;
        max-width: 18rem;
    }




</style>



