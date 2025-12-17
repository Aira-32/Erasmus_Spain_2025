<script>
  import Header from '../lib/layout/Header.svelte'
  import Footer from '../lib/layout/Footer.svelte'
  import { pagine } from '$lib/data/navigation'
  import { Carousel, Controls, CarouselIndicators } from 'flowbite-svelte';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import '../lib/fontawesome.js' // Il file che hai creato
  
  const images = [
    {
      alt: "Immagine 1",
      src: "/IMG_9530.webp",
      title: "Immagine 1"
    },
    {
      alt: "Immagine 2",
      src: "/IMG_9578.webp",
      title: "Immagine 2"
    },
    {
      alt: "Immagine 3",
      src: "/IMG_0094.webp",
      title: "Immagine 3"
    },
    {
      alt: "Immagine 3",
      src: "/IMG_9605.webp",
      title: "Immagine 3"
    },
    {
      alt: "Immagine 4",
      src: "/IMG_9637.webp",
      title: "Immagine 4"
    },
    {
      alt: "Immagine 5",
      src: "/IMG_9640.webp",
      title: "Immagine 5"
    },
    {
      alt: "Immagine 6",
      src: "/IMG_0104.webp",
      title: "Immagine 6"
    },
  ];

  // Precarica le immagini
  onMount(() => {
    images.forEach(img => {
      const image = new Image();
      image.src = img.src;
    });
  });
</script>

<Header/>

<main class="bg-bg-light">
  <section class="absolute top-0 left-0 w-full text-center flex justify-center self-center z-10 pt-48 lg:pt-36 pointer-events-none">
    <h2 class="text-2xl lg:text-4xl font-fingerpaint max-w-3xs sm:max-w-full">Mi experiencia Erasmus en Alicante</h2>
  </section>

  <section class="h-screen relative">
    <Carousel 
      {images} 
      duration={3800} 
      
      class="size-full! rounded-none">
      <Controls class="z-10"/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute bottom-0 left-0 pointer-events-none max-h-40 w-full" preserveAspectRatio="none">
        <path fill="#F7EDE2" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,101.3C384,96,480,160,576,192C672,224,768,224,864,234.7C960,245,1056,267,1152,234.7C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </Carousel>
  </section>
  
  <section class="py-20 px-4 text-center bg-linear-to-b from-bg-light to-bg-section">
    <div class="max-w-4xl mx-auto">
      <h3 class="text-4xl md:text-6xl font-reeniebeanie mb-6 text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
        Pero antes... ¿por qué decidí hacerlo?
      </h3>
      <p class="text-3xl md:text-5xl font-bold font-fingerpaint text-primary mb-4 -translate-y-5">
        VIAJAR GRATIS
      </p>
      <p class="text-lg md:text-3xl text-gray-600 font-oobaby">
        El resto vino por sí solo
      </p>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 w-full pb-10 bg-bg-section font-fingerpaint text-white text-xl px-20">
    {#each pagine as pagina}
        <a href={pagina.url} class:md:col-span-2={pagina.name === "Dificultades"} 
        class:xl:col-span-4={pagina.name === "Dificultades"} class="block">
          <figure class="relative border-l-12 border-t-12 border-r-12 border-b-70 border-white p-32">
              <img src={pagina.img} class="absolute size-full inset-0 object-cover" class:object-[50%_75%]={pagina.name === "Dificultades"} class:opacity-80={pagina.name === "Dificultades"} alt="">
            <figcaption class="absolute inset-0 flex items-center justify-center text-center">
              <h4>{pagina.sentence}</h4>
            </figcaption>
          </figure>  
        </a>
    {/each}

  </section>

</main>

<Footer/>