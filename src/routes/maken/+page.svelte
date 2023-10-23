<script>
	import IntroKast from '../../lib/components/IntroKast.svelte';
	import MobileMenu from '../../lib/components/MobileMenu.svelte';
	import NavDark from '../../lib/components/NavDark.svelte';
	import TheMaking from '../../lib/components/TheMaking.svelte';
	import TheMaking2 from '../../lib/components/TheMaking2.svelte';
	import TheMaking3 from '../../lib/components/TheMaking3.svelte';
	import TheMaking4 from '../../lib/components/TheMaking4.svelte';
	import Footer from '../../lib/components/footer.svelte';
</script>

<NavDark />
<MobileMenu />
<IntroKast />
<TheMaking />
<TheMaking2 />
<TheMaking3 />
<TheMaking4 />

<div class="filler"></div>
<Footer />


<style> 
	/* .title-wrapper {
		height: 80vh;
	}

	h2 {
		font-size: 8vw;
	} */


	.filler {
		height: 60vh;
	}
</style>