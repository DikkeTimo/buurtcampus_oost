<script>
    import { onMount } from 'svelte';

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


<section class="carousel">
    <div class="slides">
        <div class="slides-item slide-1" id="slide-1">1</div>
        <div class="slides-item slide-2" id="slide-2">2</div>
        <div class="slides-item slide-3" id="slide-3">3</div>

    </div>

</section>


<style>
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
        height: 600px;
        justify-content: center;
        margin: 0 1rem;
        position: relative;
        transform: scale(1);
        transform-origin: center center;
        transition: transform .5s;
        width: 100%;
        scroll-snap-align: start;

    }

    .slide-1 {
        background-color: #fdc;

    }

    .slide-2 {
        background-color: #bfd;
    }

    .slide-3 {
        background-color: #cdf;
    }




</style>


