<script>
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faBiohazard, faUserSlash, faExclamationTriangle, faUtensils, faWallet, faHouseDamage } from '@fortawesome/free-solid-svg-icons';
    import { t } from 'svelte-i18n';
  </script>
  
  <main class="w-full pb-20 font-sans text-slate-800" style="background-color: #F7EDE2;">
  
    <!-- HERO -->
    <section class="w-full px-6 pt-20 pb-32 md:pt-82 md:pb-40 text-white relative overflow-hidden rounded-b-[3rem] bg-linear-to-br from-[#004E98] to-[#3A86FF]">
      <div class="max-w-6xl mx-auto relative z-10 px-4">
        <div class="text-left max-w-2xl">
          <h1 class="font-fingerpaint text-5xl md:text-7xl lg:text-8xl mb-4 leading-none text-white drop-shadow-lg">
            {$t('difficulties.hero.title')}
          </h1>
          <div class="pl-2 border-l-4 border-white/30">
            <p class="text-xl md:text-2xl font-light opacity-90">
              {$t('difficulties.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  
    <!-- CARDS -->
    <section class="w-full -translate-y-6 py-12 md:py-16 relative z-20 -mt-20">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
  
          <!-- Health -->
          <div class="bg-white p-6 rounded-2xl shadow-lg border-2 border-red-100 hover:shadow-xl transition-shadow">
            <div class="flex items-center gap-4 mb-4">
              <div class="bg-red-50 text-red-500 w-14 h-14 rounded-full flex items-center justify-center text-3xl">
                <FontAwesomeIcon icon={faBiohazard} />
              </div>
              <h2 class="font-fingerpaint text-2xl text-red-600">{$t('difficulties.cards.health.title')}</h2>
            </div>
            <p class="font-medium text-slate-800 mb-2">{$t('difficulties.cards.health.subtitle')}</p>
            <p class="text-slate-600 text-sm">{$t('difficulties.cards.health.description')}</p>
          </div>
  
          <!-- Loneliness -->
          <div class="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-100 hover:shadow-xl transition-shadow">
            <div class="flex items-center gap-4 mb-4">
              <div class="bg-blue-50 text-blue-500 w-14 h-14 rounded-full flex items-center justify-center text-3xl">
                <FontAwesomeIcon icon={faUserSlash} />
              </div>
              <h2 class="font-fingerpaint text-2xl text-blue-600">{$t('difficulties.cards.loneliness.title')}</h2>
            </div>
            <p class="font-medium text-slate-800 mb-2">{$t('difficulties.cards.loneliness.subtitle')}</p>
            <p class="text-slate-600 text-sm">{$t('difficulties.cards.loneliness.description')}</p>
          </div>
  
        </div>
      </div>
    </section>
  
    <!-- School Crazy Section -->
    <section class="max-w-5xl mx-auto px-4 mb-12">
      <div class="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100">
        <div class="flex items-center gap-3 mb-4">
          <div class="bg-yellow-100 text-yellow-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl">
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </div>
          <h2 class="font-fingerpaint text-2xl">{$t('difficulties.school_crazy.title')}</h2>
        </div>
  
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="text-blue-600 text-xs uppercase font-bold mb-1">{$t('difficulties.school_crazy.cards.thought.title')}</p>
            <p class="text-sm">{$t('difficulties.school_crazy.cards.thought.text')}</p>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="text-blue-600 text-xs uppercase font-bold mb-1">{$t('difficulties.school_crazy.cards.fact.title')}</p>
            <p class="text-sm">{$t('difficulties.school_crazy.cards.fact.text')}</p>
          </div>
          <div class="bg-blue-600 p-4 rounded-lg text-white">
            <p class="text-yellow-300 text-xs uppercase font-bold mb-1">{$t('difficulties.school_crazy.cards.reality.title')}</p>
            <p class="font-medium">{$t('difficulties.school_crazy.cards.reality.text')}</p>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Other Aspects -->
    <section class="max-w-5xl mx-auto px-4 mb-12">
      <h3 class="font-fingerpaint text-2xl text-center mb-6 text-slate-700">{$t('difficulties.other_aspects.title')}</h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
  
        <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div class="bg-orange-100 text-orange-500 w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3">
            <FontAwesomeIcon icon={faUtensils} />
          </div>
          <h4 class="font-bold text-slate-800 mb-1">{$t('difficulties.other_aspects.food.title')}</h4>
          <p class="text-sm text-slate-600">{$t('difficulties.other_aspects.food.text')}</p>
        </div>
  
        <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div class="bg-green-100 text-green-500 w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3">
            <FontAwesomeIcon icon={faWallet} />
          </div>
          <h4 class="font-bold text-slate-800 mb-1">{$t('difficulties.other_aspects.money.title')}</h4>
          <p class="text-sm text-slate-600">{$t('difficulties.other_aspects.money.text')}</p>
        </div>
  
        <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div class="bg-purple-100 text-purple-500 w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3">
            <FontAwesomeIcon icon={faHouseDamage} />
          </div>
          <h4 class="font-bold text-slate-800 mb-1">{$t('difficulties.other_aspects.palermo.title')}</h4>
          <p class="text-sm text-slate-600">{$t('difficulties.other_aspects.palermo.text')}</p>
        </div>
  
      </div>
    </section>
  
  </main>
  