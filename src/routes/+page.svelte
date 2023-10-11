<script>
    import {onMount} from 'svelte';
    import Header from "$lib/components/HeaderDef.svelte"
    import NavDark from '../lib/components/NavDark.svelte';
    import Footer from '../lib/components/footer.svelte';
	import MobileMenu from '../lib/components/MobileMenu.svelte';

    import Netwerk from '$lib/assets/netwerk.png'

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

<NavDark />
<MobileMenu />
<!-- CAROUSEL -->
<section class="carousel">
    <div class="image-text-1"><h1>Swap nu je stek!</h1>
        <p>Heb jij een of meerdere plantenstekjes over en zou je die graag willen ruilen voor een nieuw plantje? Meld je
            stekje hier aan en ruil ‘m via de app. Schrijf de Latijnse naam van je plant en eventuele verzorgingstips op
            een labeltje en neem ‘m mee naar de OBA Linnaeusstraat in Amsterdam.</p>
    </div>
    <div class="slides">

        <div class="slides-item slide-1" id="slide-1">
            <div class="image-container">
                <img src={data.headers[0].imagesCarousel.url} alt="foto van een stekje"/>
                <!--                <div class="image-text-1">Welkom bij PlantSwap</div>-->
            </div>
        </div>


        <div class="slides-item slide-2" id="slide-2">

            <div class="image-container-2">
                <img src={data.headers[1].imagesCarousel.url} alt="foto van een stekje"/>
                <!--                <div class="image-text-2">Welkom bij PlantSwap</div>-->
            </div>
        </div>


        <div class="slides-item slide-3" id="slide-3">
            <div class="image-container-3">
                <img src={data.headers[2].imagesCarousel.url} alt="foto van een stekje"/></div>
            <!--            <div class="image-text-3">Welkom bij PlantSwap</div>-->
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

    <div>
        <a href="/all_stekjes">
            <button class="button-all-stekjes">
                Bekijk alle stekjes!<svg class="svg-button"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
            >
                <path
                        d="M0 10.2317H20M20 10.2317L11.3333 0.99997M20 10.2317L11.3333 19"
                        stroke=""
                        stroke-width="1.5"
                />
            </svg>
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
        <img src={Netwerk}>
    </div>
</section>

<Footer/>


<!-------------CSS------------->
<style>

    /* ------------ CAROUSEL ------------*/

    h1 {
        font-size: 2.3rem;
        padding-top: 1rem;
        padding-bottom: 0.5rem;
    }

    .image-text-1 p {
        padding-bottom: 1rem;
        line-height: 1.5rem;

    }

    .image-text-1 {
        position: absolute;
        z-index: 1;
        border-radius: 5px;
        inset: 0;
        margin: auto;
        height: 16rem;
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
        h1 {
            font-size: 2.5rem;
            padding-top: 1rem;
            padding-bottom: 0.5rem;
        }

        .image-text-1 p {
            font-size: 1.5rem;
            padding-bottom: 1rem;
            line-height: 2rem;
        }

        .image-text-1{
            top: -30%;
            width: 45rem;
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
        h1 {
            font-size: var(--title-size);
            padding-top: 1rem;
            padding-bottom: 0.5rem;
        }

        .image-text-1 p {
            font-size: var(--sec-title-size);
            padding-right: 0.5rem;
            padding-bottom: 1rem;
            padding-left: 0.5rem;
            line-height: 2rem;

        }

        .image-text-1{
            inset: 0;
            margin: auto;
            height: 16rem;
            width: 40rem;
        }

        .slides img {
            width: 150rem;

        }

        .slides-item {
            width: 130%;
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
            font-size: var(--title-size);
        }

        .flex-titel-how-it-works {
            margin-top: 8rem;
            margin-left: 10rem;
        }

        .flex-titel-how-it-works svg {
            width: 5rem;
            margin-top: 0.5rem;
        }

        .how-it-works p {
            font-size: var(--sec-title-size);
            line-height: 2rem;
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
        padding-top: 3rem;
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

    .button-all-stekjes {
        border: none;
        padding: 0.2em 1em 0.5em;
        background-color: var(--color-secundair);
        /* border: 1px solid var(--color-primair); */
        color: var(--main-dark);
        border-radius: 2em;
        font-size: 1em;
        cursor: pointer;
        transition: 0.3s;
        width: max-content;
        margin: 3em 3.5em 0;
        margin-bottom: 0;
    }

    .button-all-stekjes:hover {
        background-color: var(--color-primair);
        color: white;
        stroke: var(--main-dark);
        /* border: 1px solid var(--color-secundair); */
    }

    .svg-button {
        transition: 0.3s;
        transform: translateY(5px) scale(0.8);
        stroke: var(--main-dark);
    }

    .button-all-stekjes:hover .svg-button {
        transform: translateX(5px) translateY(5px) scale(0.8);
        /* fill: var(--main-offwhite); */
        stroke: white;
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

        .button-all-stekjes {
            font-size: 1.5em;
        }
    }

    /* MEDIA QUERY DESKTOP*/
    @media (min-width: 1024px) {
        h3 {
            font-size: var(--title-size);
        }

        .available-stekjes {
            background-color: #f0f0f0;
            height: 48rem;
        }

        .flex-titel-available-stekjes svg {
            width: 5rem;
            margin-top: 0.6rem;
        }

        .flex-titel-available-stekjes {
            margin-top: 20rem;
            margin-left: 10rem;
        }

        .available-stekjes p {
            font-size: var(--sec-title-size);
            line-height: 2rem;
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
            width: 18rem;
        }

        .button-all-stekjes {
            font-size: 1em;
            margin-left: 15.5rem;
        }
    }


    /* ------------ SECTION ABOUT BUURTCAMPUS OOST ------------*/
    .about-homepage {
        margin-bottom: 4rem;
    }

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
            font-size: var(--title-size);
        }

        .about-homepage {
            margin-bottom: 10rem;
        }

        .flex-title-about svg {
            width: 5rem;
            margin-top: 0.6rem;
        }

        .flex-title-about {
            margin-top: 10rem;
            margin-left: 10rem;
        }

        .about-homepage p {
            font-size: var(--sec-title-size);
            line-height: 2rem;
            margin-left: 16rem;
            max-width: 50rem;
        }

        .image-about img {
            display: none;
        }
    }


</style>



