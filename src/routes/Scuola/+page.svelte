<script>
  import { t, locale } from 'svelte-i18n';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { 
    faCheck, 
    faStar, 
    faChair, 
    faShirt,
    faLightbulb, 
    faStopwatch,
    faIdCard,
    faAddressCard,
    faDesktop,
    faBook,
    faPenNib,
    faCalendarDays,
    faKey,
    faSchool,
    faGraduationCap,
    faFileLines,
    faCheckCircle,
    faLaptopCode,
    faCode,
    faClock,
    faFutbol,
    faBuilding,
    faUtensils,
    faFlag,
    faBookOpen, 
    faUsers, 
    faUserGraduate, 
    faLanguage, 
    faGlobe, 
    faFileAlt,
    faExclamationTriangle,
    faTimes,
    faBrain,
    faCalendarTimes,
    faPercentage,
    faInfoCircle,
    faMicroscope,
    faAtom,
    faDna,
    faCalculator,
    faLandmark,
    faGlobeEurope,
    faListCheck,
    faPalette,
    faPlus,
    faMinus,
    faExclamation,
    faToilet,
    faCommentDots,
    faHandshake,
    faBullhorn,
    faDoorOpen,
    faRunning,
    faEye,
    faVolleyballBall,
    faPlaneDeparture,
    faBus,
    faCalendarWeek,
    faCalendarAlt,
    faCalendar,
    faMapMarkedAlt,
    faSmokingBan,
    faEuroSign,
    faLaptop,
    faToiletPaper,
  } from '@fortawesome/free-solid-svg-icons';

  import en from '$lib/i18n/en.json';
  import es from '$lib/i18n/es.json';
  import it from '$lib/i18n/it.json';

  function getArray(path) {
    const maps = { en, es, it };
    const lang = maps[$locale] ?? es;
    return path.split('.').reduce((obj, key) => obj?.[key], lang) ?? [];
  }
</script>

<main class="font-sans text-primary bg-bg-light overflow-x-hidden">

  <!-- 1. HERO -->
  <section class="relative bg-cover bg-center bg-no-repeat py-32 px-6 md:px-20 text-center overflow-hidden">
    <div class="max-w-5xl mx-auto relative z-10 text-bg-light">
      <h1 class="font-fingerpaint text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 drop-shadow-lg">
        {$t('school.hero.title')}
      </h1>
      <p class="text-xl md:text-2xl font-medium opacity-95 max-w-2xl mx-auto leading-relaxed">
        {$t('school.hero.description')}
      </p>
    </div>
    <div class="absolute inset-0 bg-linear-to-t from-primary/90 to-transparent"></div>
  </section>

  <!-- 2. COMPARACIÓN DE SISTEMAS EDUCATIVOS -->
  <section class="py-16 px-6 md:px-20 bg-linear-to-b from-white to-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="font-fingerpaint text-4xl text-primary mb-4 relative inline-block">
          <span class="relative z-10 px-6">{$t('school.comparison_section.title')}</span>
          <span class="absolute -bottom-1 left-0 right-0 h-3 bg-accent/20 z-0 rounded-full"></span>
        </h2>
        <p class="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          {$t('school.comparison_section.subtitle')}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">

        <!-- ITALIA -->
        <div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#008C45] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <div class="flex items-center justify-between mb-8">
            <h3 class="font-bold text-2xl text-gray-800 flex items-center">
              <i class="fa-solid fa-flag-italy text-[#008C45] text-2xl mr-3"></i>
              {$t('school.italy_card.title')}
            </h3>
            <span class="text-sm bg-[#008C45]/10 text-[#008C45] font-semibold px-3 py-1.5 rounded-full border border-[#008C45]/20">
              {$t('school.italy_card.age_range')}
            </span>
          </div>

          <div class="space-y-6">
            <div class="group">
              <div class="flex justify-between items-center mb-1.5">
                <span class="text-sm font-medium text-gray-600">{$t('school.italy_card.infant.age')}</span>
                <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{$t('school.italy_card.infant.duration')}</span>
              </div>
              <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full bg-linear-to-r from-[#F4F5F7] to-[#E0E3E8] rounded-full group-hover:opacity-90 transition-all duration-300" style="width: 15%">
                  <div class="h-full bg-linear-to-r from-[#CD212A] to-[#F15A24] rounded-full shadow-inner" style="width: 100%"></div>
                </div>
              </div>
              <div class="text-xs text-gray-500 mt-1.5 pl-1 flex items-center">
                <i class="fa-solid fa-child-reaching text-[#CD212A] mr-1.5"></i>
                {$t('school.italy_card.infant.description')}
              </div>
            </div>

            <div class="group">
              <div class="flex justify-between items-center mb-1.5">
                <span class="text-sm font-medium text-gray-600">{$t('school.italy_card.primary.age')}</span>
                <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{$t('school.italy_card.primary.duration')}</span>
              </div>
              <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full bg-linear-to-r from-[#F4F5F7] to-[#E0E3E8] rounded-full group-hover:opacity-90 transition-all duration-300" style="width: 35%">
                  <div class="h-full bg-linear-to-r from-[#008C45] to-[#5CBF8A] rounded-full shadow-inner" style="width: 100%"></div>
                </div>
              </div>
              <div class="text-xs text-gray-500 mt-1.5 pl-1 flex items-center">
                <i class="fa-solid fa-school text-[#008C45] mr-1.5"></i>
                {$t('school.italy_card.primary.description')}
              </div>
            </div>

            <div class="group">
              <div class="flex justify-between items-center mb-1.5">
                <span class="text-sm font-medium text-gray-600">{$t('school.italy_card.secondary_first.age')}</span>
                <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{$t('school.italy_card.secondary_first.duration')}</span>
              </div>
              <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full bg-linear-to-r from-[#F4F5F7] to-[#E0E3E8] rounded-full group-hover:opacity-90 transition-all duration-300" style="width: 25%">
                  <div class="h-full bg-linear-to-r from-[#F4F5F7] to-[#B0B8C4] rounded-full shadow-inner" style="width: 100%"></div>
                </div>
              </div>
              <div class="text-xs text-gray-500 mt-1.5 pl-1 flex items-center">
                <i class="fa-solid fa-graduation-cap text-gray-500 mr-1.5"></i>
                {$t('school.italy_card.secondary_first.description')}
              </div>
            </div>

            <div class="group pt-2">
              <div class="flex justify-between items-center mb-1.5">
                <span class="text-sm font-medium text-gray-600">{$t('school.italy_card.secondary_second.age')}</span>
                <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{$t('school.italy_card.secondary_second.duration')}</span>
              </div>
              <div class="h-3 bg-gray-100 rounded-full overflow-hidden relative">
                <div class="h-full bg-linear-to-r from-[#F4F5F7] to-[#E0E3E8] rounded-full group-hover:opacity-90 transition-all duration-300" style="width: 40%">
                  <div class="h-full bg-linear-to-r from-[#F4F5F7] to-[#7D8A9B] rounded-full shadow-inner" style="width: 100%"></div>
                </div>
              </div>
              <div class="text-xs text-gray-500 mt-1.5 pl-1 flex items-center">
                <i class="fa-solid fa-building-columns text-gray-700 mr-1.5"></i>
                {$t('school.italy_card.secondary_second.description')}
              </div>
              <div class="mt-2">
                <span class="text-xs bg-[#008C45]/10 text-[#008C45] font-medium px-3 py-1 rounded-full inline-flex items-center">
                  <i class="fa-solid fa-graduation-cap mr-1.5"></i>
                  {$t('school.italy_card.secondary_second.diploma')}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- ESPAÑA -->
        <div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#3498DB] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <div class="flex items-center justify-between mb-8">
            <h3 class="font-bold text-2xl text-gray-800 flex items-center">
              <i class="fa-solid fa-flag text-[#3498DB] text-2xl mr-3"></i>
              {$t('school.spain_card.title')}
            </h3>
            <span class="text-sm bg-[#3498DB]/10 text-[#3498DB] font-semibold px-3 py-1.5 rounded-full border border-[#3498DB]/20">
              {$t('school.spain_card.age_range')}
            </span>
          </div>

          <div class="space-y-6">
            <div class="group">
              <div class="flex justify-between items-center mb-1.5">
                <span class="text-sm font-medium text-gray-600">{$t('school.spain_card.infant.age')}</span>
                <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{$t('school.spain_card.infant.duration')}</span>
              </div>
              <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full bg-linear-to-r from-[#F4F5F7] to-[#E0E3E8] rounded-full group-hover:opacity-90 transition-all duration-300" style="width: 20%">
                  <div class="h-full bg-linear-to-r from-[#CD212A] to-[#F15A24] rounded-full shadow-inner" style="width: 100%"></div>
                </div>
              </div>
              <div class="text-xs text-gray-500 mt-1.5 pl-1 flex items-center">
                <i class="fa-solid fa-child-reaching text-[#CD212A] mr-1.5"></i>
                {$t('school.spain_card.infant.description')}
              </div>
            </div>

            <div class="group">
              <div class="flex justify-between items-center mb-1.5">
                <span class="text-sm font-medium text-gray-600">{$t('school.spain_card.primary.age')}</span>
                <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{$t('school.spain_card.primary.duration')}</span>
              </div>
              <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full bg-linear-to-r from-[#F4F5F7] to-[#E0E3E8] rounded-full group-hover:opacity-90 transition-all duration-300" style="width: 40%">
                  <div class="h-full bg-linear-to-r from-[#3498DB] to-[#66CCCC] rounded-full shadow-inner" style="width: 100%"></div>
                </div>
              </div>
              <div class="text-xs text-gray-500 mt-1.5 pl-1 flex items-center">
                <i class="fa-solid fa-school text-[#3498DB] mr-1.5"></i>
                {$t('school.spain_card.primary.description')}
              </div>
            </div>

            <div class="group">
              <div class="flex justify-between items-center mb-1.5">
                <span class="text-sm font-medium text-gray-600">{$t('school.spain_card.eso.age')}</span>
                <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{$t('school.spain_card.eso.duration')}</span>
              </div>
              <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full bg-linear-to-r from-[#F4F5F7] to-[#E0E3E8] rounded-full group-hover:opacity-90 transition-all duration-300" style="width: 30%">
                  <div class="h-full bg-linear-to-r from-[#F4F5F7] to-[#B0B8C4] rounded-full shadow-inner" style="width: 100%"></div>
                </div>
              </div>
              <div class="text-xs text-gray-500 mt-1.5 pl-1 flex items-center">
                <i class="fa-solid fa-graduation-cap text-gray-500 mr-1.5"></i>
                {$t('school.spain_card.eso.description')}
              </div>
            </div>

            <div class="group pt-2">
              <div class="flex justify-between items-center mb-1.5">
                <span class="text-sm font-medium text-gray-600">{$t('school.spain_card.bachillerato.age')}</span>
                <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{$t('school.spain_card.bachillerato.duration')}</span>
              </div>
              <div class="h-3 bg-gray-100 rounded-full overflow-hidden relative">
                <div class="h-full bg-linear-to-r from-[#F4F5F7] to-[#E0E3E8] rounded-full group-hover:opacity-90 transition-all duration-300" style="width: 20%">
                  <div class="h-full bg-linear-to-r from-[#F4F5F7] to-[#7D8A9B] rounded-full shadow-inner" style="width: 100%"></div>
                </div>
              </div>
              <div class="text-xs text-gray-500 mt-1.5 pl-1 flex items-center">
                <i class="fa-solid fa-building-columns text-gray-700 mr-1.5"></i>
                {$t('school.spain_card.bachillerato.description')}
              </div>
              <div class="mt-2">
                <span class="text-xs bg-[#3498DB]/10 text-[#3498DB] font-medium px-3 py-1 rounded-full inline-flex items-center">
                  <i class="fa-solid fa-graduation-cap mr-1.5"></i>
                  {$t('school.spain_card.bachillerato.diploma')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Differenze Chiave -->
      <div class="mt-12 bg-linear-to-r from-primary/5 to-accent/5 p-8 rounded-2xl border-2 border-primary/20 shadow-lg">
        <h4 class="font-fingerpaint text-2xl text-primary mb-6 text-center relative mx-auto w-max">
          <span class="relative z-10 px-4">
            <FontAwesomeIcon icon={faStar} class="text-yellow-500 mr-2" />
            {$t('school.key_differences.title')}
            <FontAwesomeIcon icon={faStar} class="text-yellow-400 ml-2" />
          </span>
          <span class="absolute bottom-1 left-0 right-0 h-2 bg-accent/20 z-0 rounded-full"></span>
        </h4>

        <div class="grid md:grid-cols-2 gap-5 mt-8">
          <div class="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex items-start gap-3">
              <div class="bg-green-100 p-2 rounded-full">
                <FontAwesomeIcon icon={faClock} class="text-green-600" />
              </div>
              <div>
                <h5 class="font-bold text-gray-800">{$t('school.key_differences.studies_duration.title')}</h5>
                <p class="text-gray-600 text-sm mt-1">{$t('school.key_differences.studies_duration.description')}</p>
              </div>
            </div>
          </div>

          <div class="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex items-start gap-3">
              <div class="bg-blue-100 p-2 rounded-full">
                <FontAwesomeIcon icon={faSchool} class="text-blue-600" />
              </div>
              <div>
                <h5 class="font-bold text-gray-800">{$t('school.key_differences.primary_school.title')}</h5>
                <p class="text-gray-600 text-sm mt-1">{$t('school.key_differences.primary_school.description')}</p>
              </div>
            </div>
          </div>

          <div class="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex items-start gap-3">
              <div class="bg-purple-100 p-2 rounded-full">
                <FontAwesomeIcon icon={faGraduationCap} class="text-purple-600" />
              </div>
              <div>
                <h5 class="font-bold text-gray-800">{$t('school.key_differences.after_middle_school.title')}</h5>
                <p class="text-gray-600 text-sm mt-1">{$t('school.key_differences.after_middle_school.description')}</p>
              </div>
            </div>
          </div>

          <div class="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex items-start gap-3">
              <div class="bg-yellow-100 p-2 rounded-full">
                <FontAwesomeIcon icon={faLightbulb} class="text-yellow-600" />
              </div>
              <div>
                <h5 class="font-bold text-gray-800">{$t('school.key_differences.after_eso.title')}</h5>
                <p class="text-gray-600 text-sm mt-1">{$t('school.key_differences.after_eso.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. VIDA ESCOLAR -->
  <section class="py-16 px-6 md:px-20 bg-linear-to-b from-white to-bg-section">
    <div class="max-w-6xl mx-auto text-center mb-12">
      <h2 class="font-fingerpaint text-3xl text-primary mb-4">{$t('school_life.title')}</h2>
    </div>
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

      <!-- Código de Vestimenta -->
      <div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-accent">
        <div class="flex items-center gap-4 mb-6">
          <div class="bg-accent/10 p-3 rounded-full">
            <FontAwesomeIcon icon={faShirt} class="text-2xl text-accent" />
          </div>
          <h3 class="font-fingerpaint text-2xl text-accent">{$t('school_life.dress_code.title')}</h3>
        </div>
        <div class="space-y-4 text-gray-700">
          <ul class="space-y-2">
            {#each getArray('school_life.dress_code.items') as item}
              <li class="flex items-start">
                <FontAwesomeIcon icon={faCheck} class="text-green-500 mt-1 mr-2" />
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <!-- La Carrera por los Primeros Puestos -->
      <div class="bg-white h-fit p-8 rounded-2xl shadow-lg border-l-8 border-secondary">
        <div class="flex items-center gap-4 mb-6">
          <div class="bg-secondary/10 p-3 rounded-full">
            <FontAwesomeIcon icon={faChair} class="text-2xl text-secondary" />
          </div>
          <h3 class="font-fingerpaint text-2xl text-secondary">{$t('school_life.race_for_seats.title')}</h3>
        </div>
        <div class="relative pl-6">
          <div class="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-secondary to-accent rounded-full"></div>
          <p class="text-gray-600">{$t('school_life.race_for_seats.description')}</p>
        </div>
      </div>

    </div>
  </section>

  <!-- 4. FALTAS Y RETRASOS -->
  <section class="py-16 px-6 md:px-20 bg-gray-50">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="font-fingerpaint text-3xl text-primary mb-3">{$t('school_life.absences_lateness.title')}</h2>
        <p class="text-gray-600">{$t('school_life.absences_lateness.subtitle')}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">

        <!-- Card Retrasos -->
        <div class="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-blue-100 p-2 rounded-full">
              <FontAwesomeIcon icon={faClock} class="text-blue-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-800">{$t('school_life.absences_lateness.lateness.title')}</h3>
          </div>
          <ul class="space-y-3">
            {#each getArray('school_life.absences_lateness.lateness.items') as item, i}
              <li class="flex items-start gap-2">
                <FontAwesomeIcon icon={i === 0 ? faExclamationTriangle : faTimes} class={i === 0 ? 'text-yellow-500 mt-1' : 'text-red-500 mt-1'} />
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Card Faltas -->
        <div class="bg-white p-6 rounded-xl border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-purple-100 p-2 rounded-full">
              <FontAwesomeIcon icon={faCalendarTimes} class="text-purple-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-800">{$t('school_life.absences_lateness.absences.title')}</h3>
          </div>
          <ul class="space-y-3">
            {#each getArray('school_life.absences_lateness.absences.items') as item, i}
              <li class="flex items-start gap-2">
                <FontAwesomeIcon icon={i === 0 ? faFileAlt : faPercentage} class={i === 0 ? 'text-blue-500 mt-1' : 'text-red-500 mt-1'} />
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- 5. MI DÍA TÍPICO -->
  <section class="py-20 px-6 md:px-20 bg-linear-to-br from-primary to-accent">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="font-fingerpaint text-4xl text-white mb-4">{$t('school_life.typical_day.title')}</h2>
        <div class="w-24 h-1 bg-white/80 mx-auto mb-6"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">

        <!-- Imagen -->
        <div class="bg-white p-4 rounded-xl shadow-2xl transform hover:scale-[1.02] transition-transform">
          <div class="aspect-4/3 bg-linear-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center">
            <img src="/WhatsApp Image 2025-12-17 at 08.32.53 2.jpeg" alt="Horario escolar" class="w-full h-auto" />
          </div>
        </div>

        <!-- Cards info -->
        <div class="lg:max-w-4/5 space-y-6">

          <!-- Música -->
          <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-white/20 p-2 rounded-full">
                <FontAwesomeIcon icon={faClock} class="text-pink-400" />
              </div>
              <h3 class="font-bold text-xl text-white">{$t('school_life.typical_day.music.title')}</h3>
            </div>
            <p class="text-white/80">{$t('school_life.typical_day.music.description')}</p>
          </div>

          <!-- Aula 33 -->
          <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div class="flex items-center gap-3 mb-3">
              <div class="bg-white/20 p-2 rounded-full">
                <FontAwesomeIcon icon={faDoorOpen} class="text-blue-400" />
              </div>
              <h3 class="font-bold text-lg text-white">{$t('school_life.typical_day.classroom_33.title')}</h3>
            </div>
            <p class="text-white/80 text-sm">{$t('school_life.typical_day.classroom_33.description')}</p>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- 6. LA TARJETA -->
  <section class="py-24 px-6 md:px-20 bg-bg-light">
    <div class="max-w-6xl mx-auto gap-12">
      <div>
        <h2 class="font-fingerpaint text-4xl text-primary mb-6 flex items-center gap-3">
          <FontAwesomeIcon icon={faIdCard} class="mr-2" /> {$t('school_life.id_card.title')}
        </h2>
        <p class="text-xl text-primary font-bold mb-4">
          {$t('school_life.id_card.subtitle')}
        </p>
        <p class="text-lg text-primary leading-relaxed">
          {$t('school_life.id_card.description')}
        </p>
      </div>
    </div>
  </section>

  <!-- 7. INFORMÁTICA -->
  <section class="py-16 px-6 md:px-20 bg-linear-to-br from-white to-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="font-fingerpaint text-4xl text-primary mb-3">{$t('school_life.computers_fp.title')}</h2>
        <div class="w-24 h-1.5 bg-linear-to-r from-accent to-secondary mx-auto rounded-full"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-8">

        <!-- PRSI -->
        <div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-accent transform transition-all duration-300 hover:shadow-xl">
          <div class="flex items-center gap-4 mb-6">
            <div class="bg-accent/10 p-3 rounded-full">
              <FontAwesomeIcon icon={faLaptopCode} class="text-2xl text-accent" />
            </div>
            <h3 class="font-fingerpaint text-2xl text-accent">{$t('school_life.computers_fp.prsi.title')}</h3>
          </div>
          <div class="space-y-4">
            {#each getArray('school_life.computers_fp.prsi.items') as item}
              <div class="flex items-start gap-3">
                <FontAwesomeIcon icon={faCheckCircle} class="text-green-500 mt-1 shrink-0" />
                <span>{item}</span>
              </div>
            {/each}
          </div>
        </div>

        <!-- FP -->
        <div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-secondary">
          <div class="flex items-center gap-4 mb-6">
            <div class="bg-secondary/10 p-3 rounded-full">
              <FontAwesomeIcon icon={faCode} class="text-2xl text-secondary" />
            </div>
            <h3 class="font-fingerpaint text-2xl text-secondary">{$t('school_life.computers_fp.fp_subjects.title')}</h3>
          </div>
          <div class="space-y-4">
            {#each getArray('school_life.computers_fp.fp_subjects.items') as item}
              <div class="flex items-start gap-3">
                <FontAwesomeIcon icon={faInfoCircle} class="text-blue-500 mt-1 shrink-0" />
                <span>{item}</span>
              </div>
            {/each}
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 8. ESTRUCTURAS Y ESPACIOS -->
  <section class="py-16 px-6 md:px-20 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="font-fingerpaint text-4xl text-primary mb-3">{$t('school_life.structures_spaces.title')}</h2>
        <div class="w-24 h-1.5 bg-linear-to-r from-accent to-secondary mx-auto rounded-full mb-8"></div>
      </div>

      <div class="grid md:grid-cols-3 gap-6">

        <!-- Estructuras -->
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-accent/10 p-2.5 rounded-lg">
              <FontAwesomeIcon icon={faBuilding} class="text-xl text-accent" />
            </div>
            <h3 class="font-semibold text-lg text-gray-800">{$t('school_life.structures_spaces.structures.title')}</h3>
          </div>
          <ul class="space-y-3">
            {#each getArray('school_life.structures_spaces.structures.items') as item, i}
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <FontAwesomeIcon icon={i === 0 ? faDesktop : i === 1 ? faChair : faBook} class="text-accent mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Patio -->
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-secondary/10 p-2.5 rounded-lg">
              <FontAwesomeIcon icon={faFutbol} class="text-xl text-secondary" />
            </div>
            <h3 class="font-semibold text-lg text-gray-800">{$t('school_life.structures_spaces.yard.title')}</h3>
          </div>
          <div class="space-y-3">
            {#each getArray('school_life.structures_spaces.yard.items') as item}
              <div class="flex items-start gap-2 text-sm text-gray-600">
                <FontAwesomeIcon icon={faInfoCircle} class="text-blue-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            {/each}
          </div>
        </div>

        <!-- Cafetería -->
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-yellow-100 p-2.5 rounded-lg">
              <FontAwesomeIcon icon={faUtensils} class="text-xl text-yellow-600" />
            </div>
            <h3 class="font-semibold text-lg text-gray-800">{$t('school_life.structures_spaces.cafeteria.title')}</h3>
          </div>
          <div class="space-y-3">
            {#each getArray('school_life.structures_spaces.cafeteria.items') as item}
              <div class="flex items-start gap-2 text-sm text-gray-600">
                <FontAwesomeIcon icon={faInfoCircle} class="text-yellow-500 mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            {/each}
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 9. SIN ESPECIALIDADES -->
  <section class="py-16 px-6 md:px-20 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="font-fingerpaint text-4xl text-primary">{$t('subjects_and_exams.no_specialties.title')}</h2>
        <p class="text-primary text-lg mt-2">{$t('subjects_and_exams.no_specialties.description')}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">

        <!-- Comunes -->
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div class="flex items-center mb-6">
            <FontAwesomeIcon icon={faUsers} class="text-primary text-2xl mr-3" />
            <h3 class="text-2xl font-bold text-primary">{$t('subjects_and_exams.no_specialties.common_subjects_title')}</h3>
          </div>
          <ul class="space-y-3">
            {#each getArray('subjects_and_exams.no_specialties.common_subjects') as item}
              <li class="flex items-start">
                <FontAwesomeIcon icon={faCheck} class="text-green-500 mt-1 mr-2" />
                <span class="text-gray-700">{item}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Optativas -->
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div class="flex items-center mb-6">
            <FontAwesomeIcon icon={faListCheck} class="text-primary text-2xl mr-3" />
            <h3 class="text-2xl font-bold text-primary">{$t('subjects_and_exams.no_specialties.optional_subjects_title')}</h3>
          </div>
          <ul class="space-y-3">
            {#each getArray('subjects_and_exams.no_specialties.optional_subjects') as item}
              <li class="flex items-start">
                <FontAwesomeIcon icon={faCheck} class="text-blue-500 mt-1 mr-2" />
                <span class="text-gray-700">{item}</span>
              </li>
            {/each}
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- 10. NOTAS & CÓMO SE ESTUDIA -->
  <section class="py-16 px-6 md:px-20 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-8">

        <!-- Notas -->
        <div>
          <div class="flex items-center mb-6">
            <FontAwesomeIcon icon={faPercentage} class="text-2xl text-primary mr-3" />
            <h2 class="font-fingerpaint text-3xl text-primary">{$t('subjects_and_exams.grades_and_spelling.title')}</h2>
          </div>
          <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div class="space-y-4">
              <p class="text-lg text-gray-800">{$t('subjects_and_exams.grades_and_spelling.decimal_grades')}</p>
              <p class="text-lg text-gray-800 font-bold">{$t('subjects_and_exams.grades_and_spelling.passing_grade')}</p>
              <div class="flex items-start gap-3 text-red-700 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <FontAwesomeIcon icon={faPenNib} class="mt-1 shrink-0" />
                <p class="text-sm font-medium">{$t('subjects_and_exams.grades_and_spelling.penalty')}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Cómo se estudia -->
        <div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-indigo-500 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <h3 class="font-bold text-2xl text-gray-800 mb-6 flex items-center">
            <FontAwesomeIcon icon={faBrain} class="text-indigo-500 text-xl mr-3" />
            {$t('subjects_and_exams.study_methods.title')}
          </h3>
          <div class="space-y-4 text-gray-700">
            <div class="flex items-start">
              <span class="text-indigo-700 mr-2">•</span>
              <div>
                <span class="font-semibold text-indigo-700">{$t('teachers.Matemáticas.name')}: </span>
                <span>{$t('subjects_and_exams.study_methods.math')}</span>
              </div>
            </div>
            <div class="flex items-start">
              <span class="text-indigo-700 mr-2">•</span>
              <div>
                <span class="font-semibold text-indigo-700">{$t('school_life.structures_spaces.cafeteria.title')}: </span>
                <span>{$t('subjects_and_exams.study_methods.chemistry')}</span>
              </div>
            </div>
            <div class="mt-4 p-4 bg-indigo-50 rounded-lg border-l-2 border-indigo-200">
              <p class="text-gray-700">{$t('subjects_and_exams.study_methods.note')}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 11. PROFESORES -->
  <section class="py-16 px-6 md:px-20 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="font-fingerpaint text-4xl text-primary">{$t('teachers.title')}</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6">

        <!-- Matemáticas -->
        <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 p-2 rounded-lg mr-3">
              <FontAwesomeIcon icon={faCalculator} class="text-blue-600" />
            </div>
            <h3 class="font-bold text-xl text-primary">{$t('teachers.Matemáticas.name')}</h3>
          </div>
          <ul class="space-y-3 text-gray-700 text-sm">
            {#each getArray('teachers.Matemáticas.pros') as item}
              <li class="flex items-start">
                <FontAwesomeIcon icon={faPlus} class="text-blue-500 mt-1 mr-2 text-xs" />
                <span>{item}</span>
              </li>
            {/each}
            {#each getArray('teachers.Matemáticas.cons') as item}
              <li class="flex items-start">
                <FontAwesomeIcon icon={faMinus} class="text-red-500 mt-1 mr-2 text-xs" />
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Inglés -->
        <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="bg-red-100 p-2 rounded-lg mr-3">
              <FontAwesomeIcon icon={faLanguage} class="text-red-600" />
            </div>
            <h3 class="font-bold text-xl text-primary">{$t('teachers.Inglés.name')}</h3>
          </div>
          <ul class="space-y-3 text-gray-700 text-sm">
            {#each getArray('teachers.Inglés.cons') as item}
              <li class="flex items-start">
                <FontAwesomeIcon icon={faMinus} class="text-red-500 mt-1 mr-2 text-xs" />
                <span>{item}</span>
              </li>
            {/each}
            <li class="flex items-start">
              <FontAwesomeIcon icon={faExclamation} class="text-yellow-500 mt-1 mr-2 text-xs" />
              <span>{$t('teachers.Inglés.note')}</span>
            </li>
          </ul>
        </div>

        <!-- Lengua Castellana -->
        <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="bg-green-100 p-2 rounded-lg mr-3">
              <FontAwesomeIcon icon={faBook} class="text-green-600" />
            </div>
            <h3 class="font-bold text-xl text-primary">{$t('teachers.Lengua Castellana.name')}</h3>
          </div>
          <p class="text-gray-700 text-sm leading-relaxed">
            {$t('teachers.Lengua Castellana.description')}
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- 12. BAÑOS -->
  <section class="py-12 px-6 md:px-20 bg-white">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-10">
        <h2 class="font-fingerpaint text-3xl text-primary">{$t('bathrooms.title')}</h2>
        <div class="w-24 h-1 bg-linear-to-r from-accent to-secondary mx-auto mt-2 rounded-full"></div>
      </div>

      <!-- Procedimiento -->
      <div class="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
        <h3 class="font-bold text-lg text-gray-800 mb-4 text-center">{$t('bathrooms.procedure_title')}</h3>
        <ol class="grid grid-cols-1 md:grid-cols-5 gap-4 text-gray-700 text-center">
          {#each getArray('bathrooms.procedure') as item, i}
            <li class="bg-white p-3 rounded-lg border border-gray-200">{i + 1}. {item}</li>
          {/each}
        </ol>
      </div>

      <!-- Edificios -->
      <div class="grid md:grid-cols-2 gap-6">

        <!-- Primer Edificio -->
        <div class="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
          <h3 class="font-bold text-xl text-center text-gray-800 mb-4">{$t('bathrooms.first_building_title')}</h3>
          <ul class="space-y-2">
            {#each getArray('bathrooms.first_building') as item, i}
              <li class="flex items-start py-1 {i < getArray('bathrooms.first_building').length - 1 ? 'border-b border-gray-100' : ''}">
                <span class="{i === getArray('bathrooms.first_building').length - 1 ? 'font-medium text-rose-600' : 'text-gray-700'}">{item}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Segundo Edificio -->
        <div class="bg-white p-6 rounded-xl border border-green-100 shadow-sm">
          <h3 class="font-bold text-xl text-center text-gray-800 mb-4">{$t('bathrooms.second_building_title')}</h3>
          <ul class="space-y-2">
            {#each getArray('bathrooms.second_building') as item, i}
              <li class="flex items-start py-1 {i < getArray('bathrooms.second_building').length - 1 ? 'border-b border-gray-100' : ''}">
                <span class="text-gray-700">{item}</span>
              </li>
            {/each}
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- 13. TUTORÍA & CUADERNOS -->
  <section class="py-16 px-6 md:px-20 bg-linear-to-br from-blue-50 to-indigo-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="font-fingerpaint text-4xl text-primary">{$t('tutoring_and_representatives.title')}</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8">

        <!-- Tutoría -->
        <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <FontAwesomeIcon icon={faUsers} class="text-blue-600 text-xl" />
            </div>
            <h3 class="font-bold text-2xl text-gray-800">{$t('tutoring_and_representatives.tutoring_title')}</h3>
          </div>
          <ul class="space-y-3 pl-2">
            {#each getArray('tutoring_and_representatives.tutoring') as item, i}
              <li class="flex items-start">
                <FontAwesomeIcon
                  icon={i === 0 ? faClock : i === 1 ? faUsers : faCommentDots}
                  class="text-blue-500 mt-1 mr-2 shrink-0"
                />
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Cuadernos & Agenda -->
        <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
          <div class="flex items-center mb-4">
            <div class="bg-green-100 p-3 rounded-full mr-4">
              <FontAwesomeIcon icon={faBook} class="text-green-600 text-xl" />
            </div>
            <h3 class="font-bold text-2xl text-gray-800">{$t('tutoring_and_representatives.notebooks_title')}</h3>
          </div>
          <ul class="space-y-3 pl-2">
            {#each getArray('tutoring_and_representatives.notebooks_and_agenda') as item, i}
              <li class="flex items-start">
                <FontAwesomeIcon
                  icon={i === 0 ? faStar : i === 1 ? faEuroSign : faLaptop}
                  class="text-green-500 mt-1 mr-2 shrink-0"
                />
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- 14. ED. FISICA & GITE -->
  <section class="bg-linear-to-br from-blue-800 to-indigo-900 text-white py-16 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
      <h2 class="font-fingerpaint text-4xl text-center mb-12">{$t('physical_activities_and_trips.title')}</h2>

      <div class="grid md:grid-cols-2 gap-8">

        <!-- Ed. Fisica -->
        <div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div class="flex items-center mb-6">
            <div class="bg-amber-500/20 p-2 rounded-lg mr-4">
              <FontAwesomeIcon icon={faRunning} class="text-amber-400 text-2xl" />
            </div>
            <h3 class="text-2xl font-bold text-amber-300">{$t('physical_activities_and_trips.physical_education.title')}</h3>
          </div>

          <div class="space-y-6">

            <!-- Ringo Ball -->
            <div class="bg-white/10 p-4 rounded-xl border-l-4 border-amber-400 hover:bg-white/20 transition-colors">
              <h4 class="font-bold text-lg mb-2 text-amber-100">Ringo Ball</h4>
              <p class="text-amber-50/90 text-sm">
                {$t('physical_activities_and_trips.physical_education.Ringo_Ball')}
              </p>
            </div>

            <!-- Voleibol -->
            <div class="bg-white/10 p-4 rounded-xl border-l-4 border-blue-400 hover:bg-white/20 transition-colors">
              <h4 class="font-bold text-lg mb-3 text-blue-100">{$t('physical_activities_and_trips.physical_education.volleyball_title')}</h4>
              <p class="text-blue-50/90 text-sm mb-3">
                {$t('physical_activities_and_trips.physical_education.volleyball_intro')}
              </p>
              <ul class="space-y-2 text-sm">
                {#each getArray('physical_activities_and_trips.physical_education.Volleyball_exam') as item, i}
                  <li class="flex items-start">
                    <FontAwesomeIcon
                      icon={i === 0 ? faCheckCircle : i === 1 ? faUsers : i === 2 ? faEye : faVolleyballBall}
                      class="{i === 0 ? 'text-green-400' : i === 1 ? 'text-blue-400' : i === 2 ? 'text-yellow-400' : 'text-red-400'} mt-1 mr-2 shrink-0"
                    />
                    <span class="text-blue-50/90">{item}</span>
                  </li>
                {/each}
              </ul>
            </div>

            <!-- Carrera -->
            <div class="bg-white/10 p-4 rounded-xl border-l-4 border-purple-400 hover:bg-white/20 transition-colors">
              <h4 class="font-bold text-lg text-purple-100">{$t('physical_activities_and_trips.physical_education.running_title')}</h4>
              <p class="text-purple-50/90 text-sm mt-2">
                {$t('physical_activities_and_trips.physical_education.Running_exam')}
              </p>
            </div>

          </div>
        </div>

        <!-- Gite e Viaggi -->
        <div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div class="flex items-center mb-6">
            <div class="bg-emerald-500/20 p-2 rounded-lg mr-4">
              <FontAwesomeIcon icon={faPlaneDeparture} class="text-emerald-400 text-2xl" />
            </div>
            <h3 class="text-2xl font-bold text-emerald-300">{$t('physical_activities_and_trips.excursions_and_trips.title')}</h3>
          </div>

          <div class="space-y-6">

            <!-- Excursiones de clase -->
            <div class="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
              <h4 class="font-bold text-emerald-100 flex items-center">
                <FontAwesomeIcon icon={faBus} class="mr-2 text-emerald-400" />
                {$t('physical_activities_and_trips.excursions_and_trips.class_excursions_title')}
              </h4>
              <p class="text-gray-200/80 text-sm mt-2">
                {$t('physical_activities_and_trips.excursions_and_trips.class_excursions')}
              </p>
            </div>

            <!-- Erasmus+ -->
            <div class="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
              <h4 class="font-bold text-emerald-100 flex items-center">
                <FontAwesomeIcon icon={faGlobeEurope} class="mr-2 text-blue-400" />
                {$t('physical_activities_and_trips.excursions_and_trips.erasmus_title')}
              </h4>
              <ul class="mt-2 space-y-2 text-sm text-gray-200/80">
                {#each getArray('physical_activities_and_trips.excursions_and_trips.erasmus_plus') as item, i}
                  <li class="flex items-start">
                    <FontAwesomeIcon
                      icon={i === 0 ? faCalendarWeek : i === 1 ? faCalendarAlt : faCalendar}
                      class="text-blue-300 mt-1 mr-2 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                {/each}
              </ul>
            </div>

            <!-- Viajes de Estudio -->
            <div class="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
              <h4 class="font-bold text-emerald-100 flex items-center">
                <FontAwesomeIcon icon={faMapMarkedAlt} class="mr-2 text-purple-400" />
                {$t('physical_activities_and_trips.excursions_and_trips.study_trips_title')}
              </h4>
              <p class="text-gray-200/80 text-sm mt-2">
                {$t('physical_activities_and_trips.excursions_and_trips.study_trips')}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

</main>