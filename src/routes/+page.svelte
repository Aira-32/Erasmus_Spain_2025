<script>
  import { pages } from '$lib/data/navigation';
  import { Carousel, Controls } from 'flowbite-svelte';
  import { onMount } from 'svelte';
  import '../lib/fontawesome.js';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
  import { t } from 'svelte-i18n';

  // immagini carousel con $t reattivo
  $: images = [
    { alt: $t('home.carousel.image1.alt'), src: "/IMG_9530.webp", title: $t('home.carousel.image1.title') },
    { alt: $t('home.carousel.image2.alt'), src: "/IMG_9578.webp", title: $t('home.carousel.image2.title') },
    { alt: $t('home.carousel.image3.alt'), src: "/IMG_0094.webp", title: $t('home.carousel.image3.title') },
    { alt: $t('home.carousel.image4.alt'), src: "/IMG_9605.webp", title: $t('home.carousel.image4.title') },
    { alt: $t('home.carousel.image5.alt'), src: "/IMG_9637.webp", title: $t('home.carousel.image5.title') },
    { alt: $t('home.carousel.image6.alt'), src: "/IMG_9640.webp", title: $t('home.carousel.image6.title') },
    { alt: $t('home.carousel.image7.alt'), src: "/IMG_0104.webp", title: $t('home.carousel.image7.title') },
  ];

  // precarica immagini
  onMount(() => {
    images.forEach(img => {
      const image = new Image();
      image.src = img.src;
    });
  });
</script>

<header class="h-50 font-fingerpaint z-30 size-full fixed">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="rotate-180 relative h-70 lg:h-52 w-full" preserveAspectRatio="none">
    <path fill="#F7EDE2" fill-opacity="1" d="M0,64L48,96C96,128,192,192,288,202.7C384,213,480,171,576,176C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>

  <nav class="flex justify-between items-center absolute top-0 left-0 z-10 text-black p-5 w-full">
    <div class="space-x-8 flex items-end">
      <a href="/" class="text-2xl">
        <FontAwesomeIcon icon={faHome}/>
      </a>
    </div>
    <div class="space-x-5 hidden lg:block">
      {#each pages as page}
        <a href={page.url} class="hover:opacity-50 cursor-pointer">{$t(`home.pages.${page.id}.title`)}</a>
      {/each}
    </div>
    <button class="lg:hidden">
      <FontAwesomeIcon icon={faBars}/>
    </button>
  </nav>
</header>

<main class="bg-bg-light">
  <section class="absolute top-0 left-0 w-full text-center flex justify-center self-center z-10 pt-48 lg:pt-36 pointer-events-none">
    <h2 class="text-2xl lg:text-4xl font-fingerpaint max-w-3xs sm:max-w-full">{$t('home.hero.title')}</h2>
  </section>

  <section class="h-screen relative">
    <Carousel {images} duration={3800} class="size-full! rounded-none">
      <Controls class="z-10"/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute bottom-0 left-0 pointer-events-none max-h-40 w-full" preserveAspectRatio="none">
        <path fill="#F7EDE2" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,101.3C384,96,480,160,576,192C672,224,768,224,864,234.7C960,245,1056,267,1152,234.7C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </Carousel>
  </section>

  <section class="py-20 px-4 text-center bg-linear-to-b from-bg-light to-bg-section">
    <div class="max-w-4xl mx-auto">
      <h3 class="text-4xl md:text-6xl font-reeniebeanie mb-6 text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
        {$t('home.section1.title')}
      </h3>
      <p class="text-3xl md:text-5xl font-bold font-fingerpaint text-primary mb-4 -translate-y-5">
        {$t('home.section1.subtitle')}
      </p>
      <p class="text-lg md:text-3xl text-gray-600 font-oobaby">
        {$t('home.section1.description')}
      </p>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 w-full pb-10 bg-bg-section font-fingerpaint text-white text-xl px-20">
    {#each pages as page}
      <a
        href={page.url}
        class:md:col-span-2={page.id === 'difficulties'}
        class:xl:col-span-4={page.id === 'difficulties'}
        class="block"
      >
        <figure class="relative border-l-12 border-t-12 border-r-12 border-b-70 border-white p-32">
          <img
            src={page.img}
            class="absolute size-full inset-0 object-cover"
            class:object-[50%_75%]={page.id === 'difficulties'}
            class:opacity-80={page.id === 'difficulties'}
            alt=""
          />
          <figcaption class="absolute inset-0 flex items-center justify-center text-center">
            <h4>{$t(`home.pages.${page.id}.title`)}</h4>
          </figcaption>
        </figure>
      </a>
    {/each}
  </section>
</main>
