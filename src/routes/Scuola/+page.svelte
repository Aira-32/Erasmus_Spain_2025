<script>
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
  
  import Header from '$lib/layout/Header.svelte';
  import Footer from '$lib/layout/Footer.svelte';
  
</script>

<Header />

<main class="font-sans text-primary bg-bg-light overflow-x-hidden">

  <!-- 1. HERO: Con Imagen de Fondo -->
  <section class="relative bg-cover bg-center bg-no-repeat py-32 px-6 md:px-20 text-center overflow-hidden" 
  >
  
    <div class="max-w-5xl mx-auto relative z-10 text-bg-light">
      <h1 class="font-fingerpaint text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 drop-shadow-lg">
        COLEGIO <span class="text-bg-section">ESPAÑOL</span>
      </h1>
      <p class="text-xl md:text-2xl font-medium opacity-95 max-w-2xl mx-auto leading-relaxed">
      El sistema educativo español es completamente diferente, con exámenes escritos continuos y sin orales.
      </p>
    </div>
    <div class="absolute inset-0 bg-linear-to-t from-primary/90 to-transparent"></div>
  </section>

  <!-- 2. COMPARACIÓN DE SISTEMAS EDUCATIVOS -->
<section class="py-16 px-6 md:px-20 bg-gradient-to-b from-white to-gray-50">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="font-fingerpaint text-4xl text-primary mb-4 relative inline-block">
        <span class="relative z-10 px-6">Comparación de Sistemas Educativos</span>
        <span class="absolute -bottom-1 left-0 right-0 h-3 bg-accent/20 -z-0 rounded-full"></span>
      </h2>
      <p class="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
        Un análisis visual de las diferencias entre los sistemas educativos italiano y español
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- ITALIA -->
      <div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#008C45] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <div class="flex items-center justify-between mb-8">
          <h3 class="font-bold text-2xl text-gray-800 flex items-center">
            <i class="fa-solid fa-flag-italy text-[#008C45] text-2xl mr-3"></i> ITALIA
          </h3>
          <span class="text-sm bg-[#008C45]/10 text-[#008C45] font-semibold px-3 py-1.5 rounded-full border border-[#008C45]/20">
            18 años
          </span>
        </div>
        
        <div class="space-y-6">
          <div class="group">
            <div class="flex justify-between items-center mb-1.5">
              <span class="text-sm font-medium text-gray-600">3-5 años</span>
              <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">3 años</span>
            </div>
            <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-[#F4F5F7] to-[#E0E3E8] rounded-full group-hover:opacity-90 transition-all duration-300" style="width: 15%">
                <div class="h-full bg-gradient-to-r from-[#CD212A] to-[#F15A24] rounded-full shadow-inner" style="width: 100%"></div>
              </div>
            </div>
            <div class="text-xs text-gray-500 mt-1.5 pl-1 flex items-center">
              <i class="fa-solid fa-child-reaching text-[#CD212A] mr-1.5"></i>
              Educación Infantil (3-5 años)
            </div>
          </div>

          <div class="group">
            <div class="flex justify-between items-center mb-1.5">
              <span class="text-sm font-medium text-gray-600">6-10 años</span>
              <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">5 años</span>
            </div>
            <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-[#F4F5F7] to-[#E0E3E8] rounded-full group-hover:opacity-90 transition-all duration-300" style="width: 35%">
                <div class="h-full bg-gradient-to-r from-[#008C45] to-[#5CBF8A] rounded-full shadow-inner" style="width: 100%"></div>
              </div>
            </div>
            <div class="text-xs text-gray-500 mt-1.5 pl-1 flex items-center">
              <i class="fa-solid fa-school text-[#008C45] mr-1.5"></i>
              Educación Primaria (6-11 años)
            </div>
          </div>

          <div class="group">
            <div class="flex justify-between items-center mb-1.5">
              <span class="text-sm font-medium text-gray-600">11-13 años</span>
              <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">3 años</span>
            </div>
            <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-[#F4F5F7] to-[#E0E3E8] rounded-full group-hover:opacity-90 transition-all duration-300" style="width: 25%">
                <div class="h-full bg-gradient-to-r from-[#F4F5F7] to-[#B0B8C4] rounded-full shadow-inner" style="width: 100%"></div>
              </div>
            </div>
            <div class="text-xs text-gray-500 mt-1.5 pl-1 flex items-center">
              <i class="fa-solid fa-graduation-cap text-gray-500 mr-1.5"></i>
              Educación Secundaria Obligatoria (ESO) - 1º a 3º
            </div>
          </div>
          
          <div class="group pt-2">
            <div class="flex justify-between items-center mb-1.5">
              <span class="text-sm font-medium text-gray-600">14-18 años</span>
              <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">4 años</span>
            </div>
            <div class="h-3 bg-gray-100 rounded-full overflow-hidden relative">
              <div class="h-full bg-gradient-to-r from-[#F4F5F7] to-[#E0E3E8] rounded-full group-hover:opacity-90 transition-all duration-300" style="width: 40%">
                <div class="h-full bg-gradient-to-r from-[#F4F5F7] to-[#7D8A9B] rounded-full shadow-inner" style="width: 100%"></div>
              </div>
            </div>
            <div class="text-xs text-gray-500 mt-1.5 pl-1 flex items-center">
              <i class="fa-solid fa-building-columns text-gray-700 mr-1.5"></i>
              ESO (4º) + Bachillerato (2 años)
            </div>
            <div class="mt-2">
              <div class="space-y-2">
                <span class="text-xs bg-[#008C45]/10 text-[#008C45] font-medium px-3 py-1 rounded-full inline-flex items-center">
                  <i class="fa-solid fa-graduation-cap mr-1.5"></i>
                  Título de Bachiller a los 17-18 años
                </span>
                <span class="text-xs bg-[#F15A24]/10 text-[#F15A24] font-medium px-3 py-1 rounded-full inline-flex items-center">
                  <i class="fa-solid fa-child-reaching mr-1.5"></i>
                  Selectividad (EBAU) para acceder a la universidad
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SPAGNA: 17-18 anni -->
      <div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#3498DB] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <div class="flex items-center justify-between mb-8">
          <h3 class="font-bold text-2xl text-gray-800 flex items-center">
            <i class="fa-solid fa-flag text-[#3498DB] text-2xl mr-3"></i> SPAGNA
          </h3>
          <span class="text-sm bg-[#3498DB]/10 text-[#3498DB] font-semibold px-3 py-1.5 rounded-full border border-[#3498DB]/20">
            17-18 anni
          </span>
        </div>
        
        <div class="space-y-6">
          <div class="group">
            <div class="flex justify-between items-center mb-1.5">
              <span class="text-sm font-medium text-gray-600">3-5 anni</span>
              <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">3 anni</span>
            </div>
            <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-[#F4F5F7] to-[#E0E3E8] rounded-full group-hover:opacity-90 transition-all duration-300" style="width: 20%">
                <div class="h-full bg-gradient-to-r from-[#CD212A] to-[#F15A24] rounded-full shadow-inner" style="width: 100%"></div>
              </div>
            </div>
            <div class="text-xs text-gray-500 mt-1.5 pl-1 flex items-center">
              <i class="fa-solid fa-child-reaching text-[#CD212A] mr-1.5"></i>
              Infantil
            </div>
          </div>

          <div class="group">
            <div class="flex justify-between items-center mb-1.5">
              <span class="text-sm font-medium text-gray-600">6-11 anni</span>
              <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">6 anni</span>
            </div>
            <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-[#F4F5F7] to-[#E0E3E8] rounded-full group-hover:opacity-90 transition-all duration-300" style="width: 40%">
                <div class="h-full bg-gradient-to-r from-[#3498DB] to-[#66CCCC] rounded-full shadow-inner" style="width: 100%"></div>
              </div>
            </div>
            <div class="text-xs text-gray-500 mt-1.5 pl-1 flex items-center">
              <i class="fa-solid fa-school text-[#3498DB] mr-1.5"></i>
              Primaria
            </div>
          </div>

          <div class="group">
            <div class="flex justify-between items-center mb-1.5">
              <span class="text-sm font-medium text-gray-600">12-15 anni</span>
              <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">4 anni</span>
            </div>
            <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-[#F4F5F7] to-[#E0E3E8] rounded-full group-hover:opacity-90 transition-all duration-300" style="width: 30%">
                <div class="h-full bg-gradient-to-r from-[#F4F5F7] to-[#B0B8C4] rounded-full shadow-inner" style="width: 100%"></div>
              </div>
            </div>
            <div class="text-xs text-gray-500 mt-1.5 pl-1 flex items-center">
              <i class="fa-solid fa-graduation-cap text-gray-500 mr-1.5"></i>
              ESO
            </div>
          </div>
          
          <div class="group pt-2">
            <div class="flex justify-between items-center mb-1.5">
              <span class="text-sm font-medium text-gray-600">16-17 anni</span>
              <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">2 anni</span>
            </div>
            <div class="h-3 bg-gray-100 rounded-full overflow-hidden relative">
              <div class="h-full bg-gradient-to-r from-[#F4F5F7] to-[#E0E3E8] rounded-full group-hover:opacity-90 transition-all duration-300" style="width: 20%">
                <div class="h-full bg-gradient-to-r from-[#F4F5F7] to-[#7D8A9B] rounded-full shadow-inner" style="width: 100%"></div>
              </div>
            </div>
            <div class="text-xs text-gray-500 mt-1.5 pl-1 flex items-center">
              <i class="fa-solid fa-building-columns text-gray-700 mr-1.5"></i>
              Bachillerato
            </div>
            <div class="mt-2">
              <span class="text-xs bg-[#3498DB]/10 text-[#3498DB] font-medium px-3 py-1 rounded-full inline-flex items-center">
                <i class="fa-solid fa-graduation-cap mr-1.5"></i>
                Diploma a 17-18 anni
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <!-- Differenze principali -->
    <div class="mt-12 bg-linear-to-r from-primary/5 to-accent/5 p-8 rounded-2xl border-2 border-primary/20 shadow-lg">
      <h4 class="font-fingerpaint text-2xl text-primary mb-6 text-center relative mx-auto w-max">
        <span class="relative z-10 px-4">
          <FontAwesomeIcon icon={faStar} class="text-yellow-500 mr-2" />
          Differenze Chiave
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
              <h5 class="font-bold text-gray-800">Durata degli studi</h5>
              <p class="text-gray-600 text-sm mt-1">In Spagna si finisce a 17-18 anni, in Italia a 18 (con primina a 17)</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div class="flex items-start gap-3">
            <div class="bg-blue-100 p-2 rounded-full">
              <FontAwesomeIcon icon={faSchool} class="text-blue-600" />
            </div>
            <div>
              <h5 class="font-bold text-gray-800">Scuola Primaria</h5>
              <p class="text-gray-600 text-sm mt-1">6 anni in Spagna contro i 5 italiani</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div class="flex items-start gap-3">
            <div class="bg-purple-100 p-2 rounded-full">
              <FontAwesomeIcon icon={faGraduationCap} class="text-purple-600" />
            </div>
            <div>
              <h5 class="font-bold text-gray-800">Dopo le Medie</h5>
              <p class="text-gray-600 text-sm mt-1">In Italia si prosegue con le superiori, in Spagna si sceglie tra Bachillerato o Formazione Professionale</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div class="flex items-start gap-3">
            <div class="bg-yellow-100 p-2 rounded-full">
              <FontAwesomeIcon icon={faLightbulb} class="text-yellow-600" />
            </div>
            <div>
              <h5 class="font-bold text-gray-800">Dopo l'ESO</h5>
              <p class="text-gray-600 text-sm mt-1">Gli studenti spagnoli possono scegliere tra il Bachillerato (2 anni) per l'università o la Formazione Professionale per entrare nel mondo del lavoro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>

<!-- 3. VIDA ESCOLAR -->
<section class="py-16 px-6 md:px-20 bg-linear-to-b from-white to-bg-section">
    <div class="max-w-6xl mx-auto text-center mb-12">
      <h2 class="font-fingerpaint text-3xl text-primary mb-4">Vida Escolar en España</h2>
    </div>
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
      
      <!-- Sección Código de Vestimenta -->
      <div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-accent">
        <div class="flex items-center gap-4 mb-6">
          <div class="bg-accent/10 p-3 rounded-full">
            <FontAwesomeIcon icon={faShirt} class="text-2xl text-accent" />
          </div>
          <h3 class="font-fingerpaint text-2xl text-accent">Código de Vestimenta Escolar</h3>
        </div>
        
        <div class="space-y-4 text-gray-700">
          <ul class="space-y-2">
            <li class="flex items-start">
              <FontAwesomeIcon icon={faCheck} class="text-green-500 mt-1 mr-2" />
              <span>Todos usan mochilas Vans, prácticamente obligatorias</span>
            </li>
            <li class="flex items-start">
              <FontAwesomeIcon icon={faCheck} class="text-green-500 mt-1 mr-2" />
              <span>La mayoría tiene estilo, es raro ver a gente descuidada</span>
            </li>
            <li class="flex items-start">
              <FontAwesomeIcon icon={faCheck} class="text-green-500 mt-1 mr-2" />
              <span>Difícil encontrar "canis" como en Italia</span>
            </li>
            <li class="flex items-start">
              <FontAwesomeIcon icon={faCheck} class="text-green-500 mt-1 mr-2" />
              <span>Muchos visten camisetas de fútbol, incluso las chicas</span>
            </li>
            <li class="flex items-start">
              <FontAwesomeIcon icon={faCheck} class="text-green-500 mt-1 mr-2" />
              <span>Ningún código de vestimenta impuesto, máxima libertad</span>
            </li>
          </ul>
        </div>
    </div>

      <!-- Sección de los Primeros Puestos -->
      <div class="bg-white h-fit p-8 rounded-2xl shadow-lg border-l-8 border-secondary">
        <div class="flex items-center gap-4 mb-6">
          <div class="bg-secondary/10 p-3 rounded-full">
            <FontAwesomeIcon icon={faChair} class="text-2xl text-secondary" />
          </div>
          <h3 class="font-fingerpaint text-2xl text-secondary">La Carrera por los Primeros Puestos</h3>
        </div>
          <div class="relative pl-6">
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-accent rounded-full"></div>
            <h4 class="font-bold text-lg text-gray-800 mb-2">Una carrera por los mejores asientos</h4>
            <p class="text-gray-600">
                Los españoles siempre intentan sentarse en las primeras 3 filas, nunca al final.
            </p>
          </div>
        </div>
      </div>
</section>

  <!-- 2. Sezione Faltas y Retrasos migliorata -->
<section class="py-16 px-6 md:px-20 bg-gray-50">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="font-fingerpaint text-3xl text-primary mb-3">Faltas y Retrasos</h2>
      <p class="text-gray-600">Cómo funciona la gestión de asistencias en España</p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- Card Retrasos -->
      <div class="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
        <div class="flex items-center gap-3 mb-4">
          <div class="bg-blue-100 p-2 rounded-full">
            <FontAwesomeIcon icon={faClock} class="text-blue-600" />
          </div>
          <h3 class="text-xl font-bold text-gray-800">Retrasos</h3>
        </div>
        <ul class="space-y-3">
          <li class="flex items-start gap-2">
            <FontAwesomeIcon icon={faExclamationTriangle} class="text-yellow-500 mt-1" />
            <span>3 retrasos = 1 falta injustificada</span>
          </li>
          <li class="flex items-start gap-2">
            <FontAwesomeIcon icon={faTimes} class="text-red-500 mt-1" />
            <span>Retraso > 20 min = Falta</span>
          </li>
        </ul>
      </div>

      <!-- Card Faltas -->
      <div class="bg-white p-6 rounded-xl border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow">
        <div class="flex items-center gap-3 mb-4">
          <div class="bg-purple-100 p-2 rounded-full">
            <FontAwesomeIcon icon={faCalendarTimes} class="text-purple-600" />
          </div>
          <h3 class="text-xl font-bold text-gray-800">Faltas</h3>
        </div>
        <ul class="space-y-3">
          <li class="flex items-start gap-2">
            <FontAwesomeIcon icon={faFileAlt} class="text-blue-500 mt-1" />
            <span>Justificación en un plazo de 3 días</span>
          </li>
          <li class="flex items-start gap-2">
            <FontAwesomeIcon icon={faPercentage} class="text-red-500 mt-1" />
            <span>Máximo 15% de faltas por asignatura</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- 6. MI DÍA TÍPICO -->
<section class="py-20 px-6 md:px-20 bg-gradient-to-br from-primary to-accent">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="font-fingerpaint text-4xl text-white mb-4">Mi Día Típico en el Instituto</h2>
      <div class="w-24 h-1 bg-white/80 mx-auto mb-6"></div>
      
    </div>

    <div class="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
      
      <!-- Imagen del Horario -->
        <div class="bg-white p-4 rounded-xl shadow-2xl transform hover:scale-[1.02] transition-transform">
          <div class="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center">
            <img src="/WhatsApp Image 2025-12-17 at 08.32.53 2.jpeg" alt="Horario escolar" class="w-full h-auto" />
          </div>
        </div>

          <!-- Sección Música -->
          <div class="lg:max-w-4/5 space-y-6">
            <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-white/20 p-2 rounded-full">
                  <FontAwesomeIcon icon={faClock} class="text-pink-400" />
                </div>
                <h3 class="font-bold text-xl text-white">La banda sonora</h3>
              </div>
              <p class="text-white/80">
                Entre clase y clase, 5 minutos de música a todo volumen por los altavoces. 
                ¡A veces incluso ponen a Pinguini Tattici Nucleari!
              </p>
            </div>
            
            <!-- Tarjeta Aula 33 -->
            <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div class="flex items-center gap-3 mb-3">
                <div class="bg-white/20 p-2 rounded-full">
                  <FontAwesomeIcon icon={faDoorOpen} class="text-blue-400" />
                </div>
                <h3 class="font-bold text-lg text-white">Aula 33</h3>
              </div>
              <p class="text-white/80 text-sm">
                Durante las horas libres voy al aula 33.<br>
                La llave se recoge en conserjería.
              </p>
            </div>
          </div>
      </div>
    </div>
</section>

  <!-- 7. LA TARJETA -->
  <section class="py-24 px-6 md:px-20 bg-bg-light">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      
      <!-- Texto -->
      <div>
        <h2 class="font-fingerpaint text-4xl text-primary mb-6 flex items-center gap-3">
          <FontAwesomeIcon icon={faIdCard} class="mr-2" /> La Tarjeta
        </h2>
        <p class="text-xl text-primary font-bold mb-4">
          Si tienes 16 años te dan esta tarjeta para salir.
        </p>
        <p class="text-lg text-primary leading-relaxed">
          Hay conserjes que controlan en la puerta. 
          La muestras y puedes salir durante los recreos (y volver a entrar), o irte directamente a casa si has terminado las clases.
        </p>
      </div>

      <!-- FOTO TARJETA -->
      <div class="flex justify-center">
        <div class="w-full max-w-sm aspect-[1.6/1] bg-white rounded-xl shadow-lg border-2 border-primary/20 flex items-center justify-center overflow-hidden">
            <!-- <img src={tarjetaImg} ... /> -->
            <div class="text-center text-gray-400">
              <img src="/WhatsApp Image 2025-12-17 at 08.32.53.jpeg"/>
            </div>
        </div>
      </div>

    </div>
  </section>


  <!-- 8. COMPUTER, STRUTTURE & PATIO -->
  <section class="py-16 px-6 md:px-20 bg-gradient-to-br from-white to-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="font-fingerpaint text-4xl text-primary mb-3">Informática</h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Tarjeta PRSI -->
        <div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-accent transform transition-all duration-300 hover:shadow-xl">
          <div class="flex items-center gap-4 mb-6">
            <div class="bg-accent/10 p-3 rounded-full">
              <FontAwesomeIcon icon={faLaptopCode} class="text-2xl text-accent" />
            </div>
            <h3 class="font-fingerpaint text-2xl text-accent">PRSI - Informática Básica</h3>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <FontAwesomeIcon icon={faCheckCircle} class="text-green-500 mt-1 flex-shrink-0" />
              <span>Hacen cosas que nosotros hicimos en primero, pero era obligatoria y no me la podía quitar.</span>
            </div>
            <div class="flex items-start gap-3">
              <FontAwesomeIcon icon={faCheckCircle} class="text-green-500 mt-1 flex-shrink-0" />
              <span>Ordenadores Windows con varios sistemas operativos disponibles</span>
            </div>
          </div>
        </div>

        <!-- Tarjeta FP -->
        <div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-secondary">
          <div class="flex items-center gap-4 mb-6">
            <div class="bg-secondary/10 p-3 rounded-full">
              <FontAwesomeIcon icon={faCode} class="text-2xl text-secondary" />
            </div>
            <h3 class="font-fingerpaint text-2xl text-secondary">3 Asignaturas de Formación Profesional (FP)</h3>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <FontAwesomeIcon icon={faInfoCircle} class="text-blue-500 mt-1 flex-shrink-0" />
              <span>Todas similares a Sistemas y Redes y TeP</span>
            </div>
            <div class="flex items-start gap-3">
              <FontAwesomeIcon icon={faInfoCircle} class="text-blue-500 mt-1 flex-shrink-0" />
              <span>En dos de ellas, SIOM y SERED, estaban más avanzados que nosotros.</span>
            </div>
            <div class="flex items-start gap-3">
              <FontAwesomeIcon icon={faInfoCircle} class="text-blue-500 mt-1 flex-shrink-0" />
              <span>La tercera, RELO, hacían cosas que hicimos el año pasado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 9. ESTRUCTURAS Y ESPACIOS -->
  <section class="py-16 px-6 md:px-20 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="font-fingerpaint text-4xl text-primary mb-3">Estructuras y Espacios</h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-8"></div>
      </div>
    
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Estructuras -->
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-accent/10 p-2.5 rounded-lg">
              <FontAwesomeIcon icon={faBuilding} class="text-xl text-accent" />
            </div>
            <h3 class="font-semibold text-lg text-gray-800">Estructuras</h3>
          </div>
          
          <ul class="space-y-3">
            <li class="flex items-start gap-2 text-sm text-gray-600">
              <FontAwesomeIcon icon={faDesktop} class="text-accent mt-0.5 flex-shrink-0" />
              <span>5-6 ordenadores viejos en la entrada</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-600">
              <FontAwesomeIcon icon={faChair} class="text-accent mt-0.5 flex-shrink-0" />
              <span>Sillas repartidas por el instituto</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-600">
              <FontAwesomeIcon icon={faBook} class="text-accent mt-0.5 flex-shrink-0" />
              <span>Biblioteca equipada</span>
            </li>
          </ul>
        </div>
    
        <!-- Patio -->
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-secondary/10 p-2.5 rounded-lg">
              <FontAwesomeIcon icon={faFutbol} class="text-xl text-secondary" />
            </div>
            <h3 class="font-semibold text-lg text-gray-800">Patio</h3>
          </div>
          
          <div class="space-y-3">
            <div class="flex items-start gap-2 text-sm text-gray-600">
              <FontAwesomeIcon icon={faInfoCircle} class="text-blue-400 mt-0.5 flex-shrink-0" />
              <span>Balones disponibles en conserjería</span>
            </div>
            <div class="flex items-start gap-2 text-sm text-gray-600">
              <FontAwesomeIcon icon={faInfoCircle} class="text-blue-400 mt-0.5 flex-shrink-0" />
              <span>Campo de fútbol siempre abierto</span>
            </div>
            <div class="flex items-start gap-2 text-sm text-gray-600">
              <FontAwesomeIcon icon={faInfoCircle} class="text-blue-400 mt-0.5 flex-shrink-0" />
              <span>Espacios abiertos para socializar</span>
            </div>
          </div>
        </div>
  
        <!-- Cafetería -->
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-yellow-100 p-2.5 rounded-lg">
              <FontAwesomeIcon icon={faUtensils} class="text-xl text-yellow-600" />
            </div>
            <h3 class="font-semibold text-lg text-gray-800">Cafetería</h3>
          </div>
          
          <div class="space-y-3">
            <div class="flex items-start gap-2 text-sm text-gray-600">
              <FontAwesomeIcon icon={faInfoCircle} class="text-yellow-500 mt-0.5 flex-shrink-0" />
              <span>Espacio para el descanso de mediodía</span>
            </div>
            <div class="flex items-start gap-2 text-sm text-gray-600">
              <FontAwesomeIcon icon={faInfoCircle} class="text-yellow-500 mt-0.5 flex-shrink-0" />
              <span>Asientos en el interior</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>   


  <!-- 9. MATERIAS: OPCIONALES & COMUNES -->
  <section class="py-16 px-6 md:px-20 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="font-fingerpaint text-4xl text-primary">Sin Especialidades</h2>
        <p class="text-primary text-lg mt-2">
          Asignaturas comunes para todos + "Optativas".
        </p>
      </div>
  
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Comunes -->
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div class="flex items-center mb-6">
            <FontAwesomeIcon icon={faUsers} class="text-primary text-2xl mr-3" />
            <h3 class="text-2xl font-bold text-primary">Asignaturas Comunes</h3>
          </div>
          <ul class="space-y-3">
            <li class="flex items-start">
              <FontAwesomeIcon icon={faCheck} class="text-green-500 mt-1 mr-2" />
              <span class="text-gray-700">Lengua Castellana</span>
            </li>
            <li class="flex items-start">
              <FontAwesomeIcon icon={faCheck} class="text-green-500 mt-1 mr-2" />
              <span class="text-gray-700">Inglés</span>
            </li>
            <li class="flex items-start">
              <FontAwesomeIcon icon={faCheck} class="text-green-500 mt-1 mr-2" />
              <span class="text-gray-700">Filosofía</span>
            </li>
            <li class="flex items-start">
              <FontAwesomeIcon icon={faCheck} class="text-green-500 mt-1 mr-2" />
              <span class="text-gray-700">Educación Física</span>
            </li>
          </ul>
        </div>
  
        <!-- Optativas -->
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div class="flex items-center mb-6">
            <FontAwesomeIcon icon={faListCheck} class="text-primary text-2xl mr-3" />
            <h3 class="text-2xl font-bold text-primary">Asignaturas Optativas</h3>
          </div>
          <ul class="space-y-3">
            <li class="flex items-start">
              <FontAwesomeIcon icon={faCheck} class="text-blue-500 mt-1 mr-2" />
              <span class="text-gray-700">Economía</span>
            </li>
            <li class="flex items-start">
              <FontAwesomeIcon icon={faCheck} class="text-blue-500 mt-1 mr-2" />
              <span class="text-gray-700">Latín</span>
            </li>
            <li class="flex items-start">
              <FontAwesomeIcon icon={faCheck} class="text-blue-500 mt-1 mr-2" />
              <span class="text-gray-700">Física y Química (prácticamente todo química)</span>
            </li>
            <li class="flex items-start">
              <FontAwesomeIcon icon={faCheck} class="text-blue-500 mt-1 mr-2" />
              <span class="text-gray-700">Speaking de Inglés (solo para la ESO)</span>
            </li>
            <li class="flex items-start">
              <FontAwesomeIcon icon={faCheck} class="text-blue-500 mt-1 mr-2" />
              <span class="text-gray-700 font-medium">PRSI (La única que hago)</span>
            </li>
          </ul>
  </section>

  <section class="py-16 px-6 md:px-20 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Notas -->
        <div>
          <div class="flex items-center mb-6">
            <FontAwesomeIcon icon={faPercentage} class="text-2xl text-primary mr-3" />
            <h2 class="font-fingerpaint text-3xl text-primary">Notas & Ortografía</h2>
          </div>
          <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div class="space-y-4">
              <p class="text-lg text-gray-800">
                Notas decimales libres (ej. 9,7).
              </p>
              <p class="text-lg text-gray-800 font-bold">
                El aprobado es 5/10.
              </p>
              <div class="flex items-start gap-3 text-red-700 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <FontAwesomeIcon icon={faPenNib} class="mt-1 flex-shrink-0" />
                <p class="text-sm font-medium">
                  Te quitan 0,10 puntos por cada falta de ortografía.
                </p>
              </div>
              
            </div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-indigo-500 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <h3 class="font-bold text-2xl text-gray-800 mb-6 flex items-center">
            <FontAwesomeIcon icon={faBrain} class="text-indigo-500 text-xl mr-3" />
            Cómo se estudia aquí
          </h3>
          <div class="space-y-4 text-gray-700">
            <div class="flex items-start">
              <span class="text-indigo-700 mr-2">•</span>
              <div>
                <span class="font-semibold text-indigo-700">Matemáticas:</span>
                <span> Básicamente tienes que saberte todo de memoria, ya no hay cálculos como en Italia.</span>
              </div>
            </div>
            <div class="flex items-start">
              <span class="text-indigo-700 mr-2">•</span>
              <div>
                <span class="font-semibold text-indigo-700">Química:</span>
                <span> Prepárate para estudiar mucha teoría de memoria, especialmente la nomenclatura.</span>
              </div>
            </div>
            <div class="mt-4 p-4 bg-indigo-50 rounded-lg border-l-2 border-indigo-200">
              <p class="text-gray-700">
                Básicamente, si en Italia te pedían que entendieras, aquí quieren que te lo sepas todo de memoria.
              </p>
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
      <h2 class="font-fingerpaint text-4xl text-primary">Los Profesores</h2>
    </div>
    
    <div class="grid md:grid-cols-3 gap-6">
            <!-- Matemáticas -->
      <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200">
        <div class="flex items-center mb-4">
          <div class="bg-blue-100 p-2 rounded-lg mr-3">
            <FontAwesomeIcon icon={faCalculator} class="text-blue-600" />
          </div>
          <h3 class="font-bold text-xl text-primary">Matemáticas</h3>
        </div>
        <ul class="space-y-3 text-gray-700 text-sm">
          <li class="flex items-start">
            <FontAwesomeIcon icon={faPlus} class="text-blue-500 mt-1 mr-2 text-xs" />
            <span>Muy disponible</span>
          </li>
          <li class="flex items-start">
            <FontAwesomeIcon icon={faMinus} class="text-red-500 mt-1 mr-2 text-xs" />
            <span>Explicaciones demasiado rápidas</span>
          </li>
          <li class="flex items-start">
            <FontAwesomeIcon icon={faMinus} class="text-red-500 mt-1 mr-2 text-xs" />
            <span>Corrige 4 ejercicios a la vez</span>
          </li>
        </ul>
      </div>

      <!-- Inglés -->
      <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200">
        <div class="flex items-center mb-4">
          <div class="bg-red-100 p-2 rounded-lg mr-3">
            <FontAwesomeIcon icon={faLanguage} class="text-red-600" />
          </div>
          <h3 class="font-bold text-xl text-primary">Inglés</h3>
        </div>
        <ul class="space-y-3 text-gray-700 text-sm">
          <li class="flex items-start">
            <FontAwesomeIcon icon={faMinus} class="text-red-500 mt-1 mr-2 text-xs" />
            <span>Muy tacaña con las notas</span>
          </li>
          <li class="flex items-start">
            <FontAwesomeIcon icon={faMinus} class="text-red-500 mt-1 mr-2 text-xs" />
            <span>Odia mi letra</span>
          </li>
          <li class="flex items-start">
            <FontAwesomeIcon icon={faMinus} class="text-red-500 mt-1 mr-2 text-xs" />
            <span>12+ exámenes divididos en Reading, Speaking, Grammar, Writing, Listening</span>
          </li>
          <li class="flex items-start">
            <FontAwesomeIcon icon={faMinus} class="text-red-500 mt-1 mr-2 text-xs" />
            <span>Hace demasiados ejercicios de práctica</span>
          </li>
          <li class="flex items-start">
            <FontAwesomeIcon icon={faExclamation} class="text-yellow-500 mt-1 mr-2 text-xs" />
            <span>Solo hicimos Speaking una vez</span>
          </li>
        </ul>
      </div>
      
      <!-- Lengua Castellana -->
      <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200">
        <div class="flex items-center mb-4">
          <div class="bg-green-100 p-2 rounded-lg mr-3">
            <FontAwesomeIcon icon={faBook} class="text-green-600" />
          </div>
          <h3 class="font-bold text-xl text-primary">Lengua Castellana</h3>
        </div>
        <p class="text-gray-700 text-sm leading-relaxed">
          Empecé muy mal con la asignatura porque hacíamos exámenes con figuras retóricas y análisis de algunos verbos y palabras, además de resúmenes de textos y cosas varias. Luego entendí las figuras retóricas y me recuperé en el último momento.
        </p>
      </div>
    </div>
  </div>
</section>


<!-- 12. BAÑOS -->
<section class="py-12 px-6 md:px-20 bg-white">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-10">
      <h2 class="font-fingerpaint text-3xl text-primary">Cómo funcionan los baños</h2>
      <div class="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mt-2 rounded-full"></div>
    </div>
    
    <!-- Procedimiento en un cuadro horizontal -->
    <div class="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
      <h3 class="font-bold text-lg text-gray-800 mb-4 text-center">Procedimiento para ir al baño:</h3>
      <ol class="grid grid-cols-1 md:grid-cols-5 gap-4 text-gray-700 text-center">
        <li class="bg-white p-3 rounded-lg border border-gray-200">1. Pide permiso al profesor</li>
        <li class="bg-white p-3 rounded-lg border border-gray-200">2. Ve a conserjería</li>
        <li class="bg-white p-3 rounded-lg border border-gray-200">3. Firma el registro</li>
        <li class="bg-white p-3 rounded-lg border border-gray-200">4. Recoge la llave</li>
        <li class="bg-white p-3 rounded-lg border border-gray-200">5. Devuelve la llave</li>
      </ol>
    </div>

    <!-- Sección de edificios lado a lado -->
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Primer Edificio -->
      <div class="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
        <h3 class="font-bold text-xl text-center text-gray-800 mb-4">Primer Edificio</h3>
        <ul class="space-y-2">
          <li class="flex items-start py-1 border-b border-gray-100">
            <span class="text-gray-700">Baños solo en la planta baja</span>
          </li>
          <li class="flex items-start py-1 border-b border-gray-100">
            <span class="text-gray-700">Baños de chicos y chicas uno al lado del otro</span>
          </li>
          <li class="flex items-start py-1 border-b border-gray-100">
            <span class="text-gray-700">Fuera del patio están cerrados</span>
          </li>
          <li class="flex items-start py-1 border-b border-gray-100">
            <span class="text-gray-700">Controles anti-tabaco (sin límite de tiempo)</span>
          </li>
          <li class="flex items-start py-1">
            <span class="font-medium text-rose-600">¡Lleva tu propio papel higiénico!</span>
          </li>
        </ul>
      </div>

      <!-- Segundo Edificio -->
      <div class="bg-white p-6 rounded-xl border border-green-100 shadow-sm">
        <h3 class="font-bold text-xl text-center text-gray-800 mb-4">Segundo Edificio</h3>
        <ul class="space-y-2">
          <li class="flex items-start py-1 border-b border-gray-100">
            <span class="text-gray-700">Baños en casi todas las plantas</span>
          </li>
          <li class="flex items-start py-1">
            <span class="text-gray-700">Acceso más sencillo</span>
          </li>
        </ul>
      </div>
    </div>
    </div>

</section>

  <!-- 13. TUTORIA & RAPPRESENTANTI -->
  <section class="py-16 px-6 md:px-20 bg-gradient-to-br from-blue-50 to-indigo-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="font-fingerpaint text-4xl text-primary">La Tutoría y los Representantes</h2>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <!-- TUTORÍA -->
        <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
          <div class="flex items-center mb-4">
            <div class="bg-blue-100 p-3 rounded-full mr-4">
              <FontAwesomeIcon icon={faUsers} class="text-blue-600 text-xl" />
            </div>
            <h3 class="font-bold text-2xl text-gray-800">Tutoría</h3>
          </div>
          <ul class="space-y-3 pl-2">
            <li class="flex items-start">
              <FontAwesomeIcon icon={faClock} class="text-blue-500 mt-1 mr-2 shrink-0" />
              <span>Una hora semanal dedicada al bienestar de la clase</span>
            </li>
            <li class="flex items-start">
              <FontAwesomeIcon icon={faUsers} class="text-blue-500 mt-1 mr-2 shrink-0" />
              <span>Actividades en grupo y momentos de debate</span>
            </li>
            <li class="flex items-start">
              <FontAwesomeIcon icon={faCommentDots} class="text-blue-500 mt-1 mr-2 shrink-0" />
              <span>Espacio para discutir problemas y encontrar soluciones juntos</span>
            </li>
          </ul>
        </div>
        
        <!-- CUADERNOS & AGENDA -->
        <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
          <div class="flex items-center mb-4">
            <div class="bg-green-100 p-3 rounded-full mr-4">
              <FontAwesomeIcon icon={faBook} class="text-green-600 text-xl" />
            </div>
            <h3 class="font-bold text-2xl text-gray-800">Cuadernos & Agenda</h3>
          </div>
          <ul class="space-y-3 pl-2">
            <li class="flex items-start">
              <FontAwesomeIcon icon={faStar} class="text-green-500 mt-1 mr-2 shrink-0" />
              <span>0,5 puntos extra por el orden del cuaderno (único, dividido por asignaturas)</span>
            </li>
            <li class="flex items-start">
              <FontAwesomeIcon icon={faEuroSign} class="text-green-500 mt-1 mr-2 shrink-0" />
              <span>Agenda oficial de pago (20€/año)</span>
            </li>
            <li class="flex items-start">
              <FontAwesomeIcon icon={faLaptop} class="text-green-500 mt-1 mr-2 shrink-0" />
              <span>Registro electrónico solo para las ausencias</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- 14. ED. FISICA & GITE -->
  <section class="bg-gradient-to-br from-blue-800 to-indigo-900 text-white py-16 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
      <h2 class="font-fingerpaint text-4xl text-center mb-12">Attività e Viaggi</h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Ed. Fisica -->
        <div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div class="flex items-center mb-6">
            <div class="bg-amber-500/20 p-2 rounded-lg mr-4">
              <FontAwesomeIcon icon={faRunning} class="text-amber-400 text-2xl" />
            </div>
            <h3 class="text-2xl font-bold text-amber-300">Educación Física</h3>
          </div>
          
          <div class="space-y-6">
            <!-- Ringo Ball -->
            <div class="bg-white/10 p-4 rounded-xl border-l-4 border-amber-400 hover:bg-white/20 transition-colors">
              <h4 class="font-bold text-lg mb-2 text-amber-100">Ringo Ball</h4>
              <p class="text-amber-50/90 text-sm">Como el fútbol, pero también se pueden usar las manos.</p>
            </div>
            
            <!-- Voleibol -->
            <div class="bg-white/10 p-4 rounded-xl border-l-4 border-blue-400 hover:bg-white/20 transition-colors">
              <h4 class="font-bold text-lg mb-3 text-blue-100">Examen de Voleibol</h4>
              <p class="text-blue-50/90 text-sm mb-3">
                Nos dividimos en equipos y cada componente, cuando no juega, debe evaluar a un oponente en:
              </p>
              <ul class="space-y-2 text-sm">
                <li class="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} class="text-green-400 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-blue-50/90">Conocimiento de las reglas</span>
                </li>
                <li class="flex items-start">
                  <FontAwesomeIcon icon={faUsers} class="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-blue-50/90">Armonía y colaboración en equipo</span>
                </li>
                <li class="flex items-start">
                  <FontAwesomeIcon icon={faEye} class="text-yellow-400 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-blue-50/90">Atención al juego</span>
                </li>
                <li class="flex items-start">
                  <FontAwesomeIcon icon={faVolleyballBall} class="text-red-400 mt-1 mr-2 flex-shrink-0" />
                  <span class="text-blue-50/90">Técnica y respuesta al balón</span>
                </li>
              </ul>
            </div>
            
            <!-- Carrera -->
            <div class="bg-white/10 p-4 rounded-xl border-l-4 border-purple-400 hover:bg-white/20 transition-colors">
                <h4 class="font-bold text-lg text-purple-100">Examen de Carrera</h4>
                
              <p class="text-purple-50/90 text-sm mt-2">
                Duración progresiva: comienza con 5 minutos en el primer año de ESO y aumenta 5 minutos cada año, hasta 35 minutos en 2° de Bachillerato.
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
            <h3 class="text-2xl font-bold text-emerald-300">Excursiones & Viajes</h3>
          </div>
          
          <div class="space-y-6">
            <!-- Gite Scolastiche -->
            <div class="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
              <div class="flex justify-between items-start">
                <h4 class="font-bold text-emerald-100 flex items-center">
                  <FontAwesomeIcon icon={faBus} class="mr-2 text-emerald-400" />
                  Excursiones de Clase
                </h4>
              </div>
              <p class="text-gray-200/80 text-sm mt-2">
                Son cosas muy aburridas como cazar moscas en una montaña para luego observarlas mejor en el laboratorio de biología.
              </p>
            </div>
            
            <!-- Erasmus+ -->
            <div class="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
              <h4 class="font-bold text-emerald-100 flex items-center">
                <FontAwesomeIcon icon={faGlobeEurope} class="mr-2 text-blue-400" />
                Programa Erasmus+
              </h4>
              <ul class="mt-2 space-y-2 text-sm text-gray-200/80">
                <li class="flex items-start">
                  <FontAwesomeIcon icon={faCalendarWeek} class="text-blue-300 mt-1 mr-2 flex-shrink-0" />
                  <span>1 semana</span>
                </li>
                <li class="flex items-start">
                  <FontAwesomeIcon icon={faCalendarAlt} class="text-blue-300 mt-1 mr-2 flex-shrink-0" />
                  <span>2 meses y medio</span>
                </li>
                <li class="flex items-start">
                  <FontAwesomeIcon icon={faCalendar} class="text-blue-300 mt-1 mr-2 flex-shrink-0" />
                  <span>1 año completo</span>
                </li>
              </ul>
            </div>
            
            <!-- Viajes d'Istruzione -->
            <div class="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
              <h4 class="font-bold text-emerald-100 flex items-center">
                <FontAwesomeIcon icon={faMapMarkedAlt} class="mr-2 text-purple-400" />
                Viajes de Estudio
              </h4>
              <p class="text-gray-200/80 text-sm mt-2">
                Los profesores proponen varios viajes durante el año. Los estudiantes interesados pueden presentar su candidatura y participar pagando la cuota establecida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</main>

<Footer />