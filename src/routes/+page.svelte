<script>
    import {onMount} from 'svelte';
    import Header from "$lib/components/Header.svelte"
    import NavDark from '../lib/components/NavDark.svelte';
	import Footer from '../lib/components/footer.svelte';

    export let data;

    console.log(data);

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

<Header/>


<!-- <NavDark/>

 <NavDark /> -->

<!-- CAROUSEL -->
<section class="carousel">

    <div class="slides">

        <div class="slides-item slide-1" id="slide-1">
            <div class="image-container">
                <img src={data.headers[0].imagesCarousel.url} alt="foto van een stekje"/>
                <div class="image-text-1">Welkom bij PlantSwap</div>
            </div>
        </div>


        <div class="slides-item slide-2" id="slide-2">

            <div class="image-container-2">
                <img src={data.headers[1].imagesCarousel.url} alt="foto van een stekje"/>
                <div class="image-text-2">Welkom bij PlantSwap</div>
            </div>
        </div>


        <div class="slides-item slide-3" id="slide-3">
            <div class="image-container-3">
                <img src={data.headers[2].imagesCarousel.url} alt="foto van een stekje"/></div>
            <div class="image-text-3">Welkom bij PlantSwap</div>
        </div>
    </div>


</section>

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

    <div class="button-stekjes">
        <a href="/stekje">
            <button class="button-stek">
                <p>Bekijk alle stekjes!</p>
            </button>
        </a>
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

    <div class="image-about">
        <img src="src/assets/netwerk.png">
    </div>
</section>

<Footer />


<!-------------CSS------------->
<style>

    /* ------------ CAROUSEL ------------*/

    .image-text-1, .image-text-2, .image-text-3 {
        position: absolute;
        border-radius: 5px;
        font-size: 3.0rem;
        top: 30%;
        left: 2.4%;
        background-color: rgba(255, 255, 255, 0.5);
        width: 22rem;
    }

    .carousel {
        margin: 0;
        overflow: hidden;
        text-align: center;

    }

    .slides {
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        scrollbar-width: none;
    }

    .slides img {
        width: 38rem;
    }

    .slides::-webkit-scrollbar {
        display: none;
    }

    .slides-item {
        align-items: center;
        display: flex;
        flex-shrink: 0;
        height: 400px;
        justify-content: center;
        margin: 0 1rem;
        position: relative;
        transform: scale(1);
        transform-origin: center center;
        transition: transform .5s;
        width: 120%;
        scroll-snap-align: start;
    }

    /* MEDIA QUERY TABLET*/
    @media (min-width: 768px) and (max-width: 1023px) {
        .image-text-1, .image-text-2, .image-text-3 {
            font-size: 4rem;
            left: 20%;
            width: 30rem;
        }

        .slides img {
            width: 50rem;
        }

        .slides-item {
            width: 100%;
        }
    }

    /* MEDIA QUERY DESKTOP*/
    @media (min-width: 1024px) {
        .image-text-1, .image-text-2, .image-text-3 {
            font-size: 6rem;
            left: 30%;
            width: 40rem;
        }

        .slides img {
            width: 150rem;

        }

        .slides-item {
            width: 110%;
            height: 40rem;
        }
    }


    /* ------------ SECTION HOW IT WORKS ------------*/
    h2 {
        font-size: 30px;
    }

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
        margin-top: 0.4rem;
    }

    .how-it-works p {
        font-size: 16px;
        line-height: 1.5rem;
        margin-left: 3.5rem;
        max-width: 18rem;
    }

    /* MEDIA QUERY TABLET */
    @media (min-width: 768px) and (max-width: 1023px) {
        h2 {
            font-size: 50px;
        }

        .flex-titel-how-it-works {
            margin-top: 5rem;

        }

        .flex-titel-how-it-works svg {
            width: 3rem;
            margin-top: 1.2rem;
        }

        .how-it-works p {
            font-size: 25px;
            line-height: 2rem;
            margin-left: 5.5rem;
            max-width: 38rem;
        }
    }

    /* MEDIA QUERY DESKTOP*/
    @media (min-width: 1024px) {
        h2 {
            font-size: 60px;
        }

        .flex-titel-how-it-works {
            margin-top: 8rem;
            margin-left: 10rem;
        }

        .flex-titel-how-it-works svg {
            width: 5rem;
            margin-top: 1.5rem;
        }

        .how-it-works p {
            font-size: 30px;
            line-height: 2.8rem;
            margin-left: 16rem;
            max-width: 50rem;
        }
    }

    /* ------------ SECTION AVAILABLE STEKJES ------------*/

    h3 {
        font-size: 30px;
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
        margin-top: 0.4rem;
    }

    .available-stekjes p {
        font-size: 16px;
        line-height: 1.5rem;
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

    .button-stekjes {
        text-align: left;
    }

    .button-stek {
        background-color: var(--accent-color-sec);
        height: 2rem;
        border-radius: 5px;
        border: none;
        margin-top: 2rem;
        margin-left: 3.5rem;
        color: white;
        text-align: left;
    }

    .button-stek p {
        text-align: left;
    }

    /* MEDIA QUERY TABLET */
    @media (min-width: 768px) and (max-width: 1023px) {
        h3 {
            font-size: 50px;
        }

        .flex-titel-available-stekjes svg {
            width: 3rem;
            margin-top: 1.2rem;
        }

        .available-stekjes p {
            font-size: 25px;
            line-height: 2rem;
            margin-left: 5.5rem;
            max-width: 38rem;
        }


        .flex-wrapper-recent-stekjes {
            margin-left: 5.5rem;
        }

        .flex-wrapper-recent-stekjes img {
            width: 25rem;
        }
    }

    /* MEDIA QUERY DESKTOP*/
    @media (min-width: 1024px) {
        h3 {
            font-size: 60px;
        }

        .flex-titel-available-stekjes svg {
            width: 5rem;
            margin-top: 1.5rem;
        }

        .flex-titel-available-stekjes {
            margin-top: 20rem;
            margin-left: 10rem;
        }

        .available-stekjes p {
            font-size: 30px;
            line-height: 2.8rem;
            margin-left: 16rem;
            max-width: 50rem;
        }

        .flex-wrapper-recent-stekjes {
            justify-content: center;
            align-items: center;
            gap: 5rem;
            margin-left: 5.5rem;
            overflow-x: hidden;

        }

        .flex-wrapper-recent-stekjes img {
            width: 25rem;
        }
    }


    /* ------------ SECTION ABOUT BUURTCAMPUS OOST ------------*/
    h4 {
        font-size: 30px;
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
        margin-top: 0.4rem;
    }

    .about-homepage p {
        font-size: 16px;
        line-height: 1.5rem;
        margin-left: 3.5rem;
        max-width: 18rem;
    }

    .image-about {
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .image-about img {
        width: 20rem;
        padding-top: 2rem;
    }

    /* MEDIA QUERY TABLET */
    @media (min-width: 768px) and (max-width: 1023px) {
        h4 {
            font-size: 50px;
        }

        .flex-title-about svg {
            width: 3rem;
            margin-top: 1.2rem;
        }

        .about-homepage p {
            font-size: 25px;
            line-height: 2rem;
            margin-left: 5.5rem;
            max-width: 38rem;
        }

        .image-about img {
            width: 40rem;
            padding-top: 4rem;
        }
    }

    /* MEDIA QUERY DESKTOP */
    @media (min-width: 1024px) {
        h4 {
            font-size: 60px;
        }

        .flex-title-about svg {
            width: 5rem;
            margin-top: 1.5rem;
        }

        .flex-title-about {
            margin-top: 20rem;
            margin-left: 10rem;
        }

        .about-homepage p {
            font-size: 30px;
            line-height: 2.8rem;
            margin-left: 16rem;
            max-width: 50rem;
        }

        .image-about img {
            display: none;
        }
    }


</style>



