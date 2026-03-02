<script>
    const browser = typeof window !== 'undefined';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faHome, faBars, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
    import { pages } from '$lib/data/navigation';
    import { t, locale } from 'svelte-i18n';
  
    let showDropdown = false;
    let showSidebar = false;
  
    const languages = [
      { code: 'en', label: 'English', flag: '🇬🇧' },
      { code: 'es', label: 'Español', flag: '🇪🇸' },
      { code: 'it', label: 'Italiano', flag: '🇮🇹' }
    ];
  
    function selectLanguage(lang) {
      locale.set(lang);
      showDropdown = false;
      showSidebar = false;
    }
  </script>
  
  <header class="h-50 font-fingerpaint z-30 fixed w-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="rotate-180 relative h-70 lg:h-52 w-full" preserveAspectRatio="none">
      <path fill="#F7EDE2" fill-opacity="1" d="M0,64L48,96C96,128,192,192,288,202.7C384,213,480,171,576,176C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  
    {#if browser && $locale}
    <nav class="flex justify-between items-center absolute top-0 left-0 z-10 text-black p-5 w-full">
      <div class="flex items-end space-x-8">
        <a href="/" class="text-2xl">
          <FontAwesomeIcon icon={faHome}/>
        </a>
      </div>
  
      <div class="space-x-5 flex items-center">
        {#each pages as page}
          <a href={page.url} class="hover:opacity-50 cursor-pointer">
            {$t(`home.pages.${page.id}.title`)}
          </a>
        {/each}
  
        <!-- Language dropdown -->
        <div class="relative inline-block text-left">
          <button 
            on:click={() => showDropdown = !showDropdown} 
            class="p-2 rounded hover:bg-light flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faEllipsisV}/>
          </button>
  
          {#if showDropdown}
            <div class="absolute right-0 mt-2 w-36 bg-light border border-[#E5DCD0] rounded shadow-lg z-20" role="menu">
              {#each languages as lang}
                <button 
                  type="button"
                  role="menuitem"
                  class="px-3 py-2 hover:bg-[#EDE3D9] cursor-pointer flex items-center justify-between w-full text-left"
                  on:click={() => selectLanguage(lang.code)}
                  on:keydown={(e) => e.key === 'Enter' && selectLanguage(lang.code)}
                >
                  <span>{lang.label}</span>
                  <span>{lang.flag}</span>
                </button>
              {/each}
            </div>
          {/if}
        </div>
      </div>
  
      <!-- Mobile hamburger -->
      <button class="lg:hidden" on:click={() => showSidebar = true}>
        <FontAwesomeIcon icon={faBars}/>
      </button>
    </nav>
  
    <!-- Mobile sidebar -->
    {#if showSidebar}
      <div class="fixed top-0 right-0 w-64 h-full bg-light z-30 shadow-lg p-5 flex flex-col gap-4" role="dialog">
        <button 
          type="button"
          class="self-end mb-4 text-xl font-bold"
          on:click={() => showSidebar = false}
          on:keydown={(e) => e.key === 'Enter' && (showSidebar = false)}
        >✖</button>
  
        {#each pages as page}
          <a href={page.url} class="hover:opacity-50 cursor-pointer" on:click={() => showSidebar = false}>
            {$t(`home.pages.${page.id}.title`)}
          </a>
        {/each}
  
        <div class="mt-4">
          <span class="font-semibold">Language</span>
          {#each languages as lang}
            <button 
              type="button"
              role="menuitem"
              class="px-3 py-2 hover:bg-[#EDE3D9] cursor-pointer flex items-center gap-2 w-full text-left"
              on:click={() => selectLanguage(lang.code)}
              on:keydown={(e) => e.key === 'Enter' && selectLanguage(lang.code)}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          {/each}
        </div>
      </div>
  
      <div 
        class="fixed inset-0 bg-black opacity-30 z-20" 
        role="button"
        tabindex="0"
        on:click={() => showSidebar = false}
        on:keydown={(e) => e.key === 'Enter' && (showSidebar = false)}
      ></div>
    {/if}
    {/if}
  </header>