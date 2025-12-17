<script>
//   import backgroundImage from '/pattern_paseo_de_la_explanada.png'
  import { onMount } from 'svelte';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
  import { pagine } from '$lib/data/navigation'

  
</script>

<!-- style:background-image="url({backgroundImage})"  -->
<header class="h-50 font-fingerpaint z-30 size-full fixed">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320 " class="rotate-180 relative h-70 lg:h-52 w-full" preserveAspectRatio="none">
        <path fill="#F7EDE2" fill-opacity="1" d="M0,64L48,96C96,128,192,192,288,202.7C384,213,480,171,576,176C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <nav class="flex justify-between items-center absolute top-0 left-0 z-10 text-black p-5 w-full ">
        <div class="space-x-8 flex items-end">
            <a href="/" class="text-2xl">
                <FontAwesomeIcon icon={faHome}/>
            </a>
            <!-- <div>
                <a href="/Gallery">Gallery</a>
            </div> -->
        </div>
        <div class="space-x-5 hidden lg:block">
            {#each pagine as pagina}
                <a href={pagina.url} class="hover:opacity-50 cursor-pointer">{pagina.name}</a>
            {/each}
        </div>
        <button class="lg:hidden">
            <FontAwesomeIcon icon={faBars}/>
        </button>
    </nav>
    
</header>