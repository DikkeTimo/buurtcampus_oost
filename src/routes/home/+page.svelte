<script>

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
        /*animation: autoSlide 6s linear infinite;*/
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

    /*@keyframes autoSlide {*/
    /*    0%, 100% {*/
    /*        transform: translateX(0);*/
    /*    }*/
    /*    25% {*/
    /*        transform: translateX(0);*/
    /*    }*/
    /*    50% {*/
    /*        transform: translateX(-100%);*/
    /*    }*/
    /*    75% {*/
    /*        transform: translateX(-100%);*/
    /*    }*/
    /*    100% {*/
    /*        transform: translateX(-200%); !* Adjust for the number of slides *!*/
    /*    }*/
    /*}*/


</style>