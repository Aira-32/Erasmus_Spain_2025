<script>
    import { 
        faSun, faBolt, faUtensils, faShoppingCart, faCar, faHome, faTshirt, faMapMarkerAlt, faUmbrellaBeach
    } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { t } from 'svelte-i18n';

    let dintorni = {
        valencia: {
            regionName: $t('alicante.surroundings.valencia.region'),
            places: [
                { 
                    title: $t('alicante.surroundings.valencia.jijona.title'), 
                    desc: $t('alicante.surroundings.valencia.jijona.description'),
                    images: [
                        "/IMG_0087.webp",
                        "/IMG_0092.webp",
                        "/IMG_0089.webp"
                    ]
                },
                { 
                    title: $t('alicante.surroundings.valencia.zoo_benidorm.title'), 
                    desc: $t('alicante.surroundings.valencia.zoo_benidorm.description'),
                    images: [
                        "/IMG_9804.webp",
                        "/IMG_9914.webp",
                        "/IMG_9676.webp",
                        "/IMG_9765.webp"
                    ]
                }
            ]
        },
        andalucia: {
            regionName: $t('alicante.surroundings.andalucia.region'),
            places: [
                { 
                    title: $t('alicante.surroundings.andalucia.cabo_de_gata.title'), 
                    desc: $t('alicante.surroundings.andalucia.cabo_de_gata.description'),
                    images: [
                        "/IMG_9580.webp",
                        "/IMG_9578.webp"
                    ]
                },
                { 
                    title: $t('alicante.surroundings.andalucia.san_jose.title'), 
                    desc: $t('alicante.surroundings.andalucia.san_jose.description'),
                    images: [
                        "/IMG_9484.webp",
                        "/IMG_9485.webp",
                        "/IMG_9530.webp"
                    ]
                }
            ]
        }
    };
</script>

<main class="w-full pb-20 font-sans text-slate-800" style="background-color: #F7EDE2;">

    <!-- HERO SECTION -->
    <section class="w-full px-4 pt-40 pb-32 text-center text-white relative rounded-b-[3rem]" style="background-color: #004E98;">
        <h1 class="font-fingerpaint text-5xl md:text-8xl mb-4">{$t('alicante.hero.title')}</h1>
        <p class="text-2xl md:text-3xl opacity-90 mb-12 font-light font-oobaby">{$t('alicante.hero.subtitle')}</p>

        <!-- 3 CARDS -->
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-800">
            <!-- Card 1 -->
            <div class="bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
                <h3 class="font-reeniebeanie text-4xl font-bold mb-2" style="color: #004E98;">{$t('alicante.hero.cards.safe.title')}</h3>
                <p class="text-sm text-gray-600">{$t('alicante.hero.cards.safe.description')}</p>
            </div>
            <!-- Card 2 -->
            <div class="bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
                <h3 class="font-reeniebeanie text-4xl font-bold mb-2" style="color: #0084D1;">{$t('alicante.hero.cards.peaceful.title')}</h3>
                <p class="text-sm text-gray-600">{$t('alicante.hero.cards.peaceful.description')}</p>
            </div>
            <!-- Card 3 -->
            <div class="bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
                <h3 class="font-reeniebeanie text-4xl font-bold mb-2" style="color: #F55A3B;">{$t('alicante.hero.cards.colorful.title')}</h3>
                <p class="text-sm text-gray-600">{$t('alicante.hero.cards.colorful.description')}</p>
            </div>
        </div>
    </section>

    <!-- SEZIONE PULIZIA & METEO -->
    <section class="max-w-6xl mx-auto px-4 mt-20 mb-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            <!-- Colonna Sinistra: Pulizia -->
            <div>
                <h2 class="font-fingerpaint text-3xl mb-6" style="color: #004E98;">{$t('alicante.cleanliness.title')}</h2>
                <p class="mb-4 text-lg">
                    {$t('alicante.cleanliness.description')}
                </p>
                <div class="rounded-xl overflow-hidden shadow-lg border-4" style="border-color: #0084D1;">
                    <div class="aspect-video bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                        <img src="/photo_2025-12-16_23-15-32.jpg" alt="">
                    </div>
                </div>
            </div>

            <!-- Colonna Destra: Meteo -->
            <div class="bg-white p-8 rounded-3xl shadow-lg border-t-8" style="border-color: #F55A3B;">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="font-fingerpaint text-3xl" style="color: #F55A3B;">{$t('alicante.weather.title')}</h3>
                    <FontAwesomeIcon icon={faSun} class="text-5xl text-yellow-400" />
                </div>
                
                <p class="text-lg mb-4">
                    {$t('alicante.weather.description')}
                </p>

                <!-- BOX ALLUVIONE -->
                <div class="bg-red-50 border-2 border-red-200 p-5 rounded-xl mt-6">
                    <h4 class="font-bold text-red-600 flex items-center gap-2 mb-2">
                        <FontAwesomeIcon icon={faBolt} /> {$t('alicante.weather.flood.title')}
                    </h4>
                    <p class="text-sm text-slate-800 leading-relaxed">
                        {$t('alicante.weather.flood.description')}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- CASTELLO -->
    <section class="relative w-full flex items-center justify-center min-h-[500px] mb-10 bg-blue-50">
        <div class="w-full">
            <img src="/IMG_0097.webp" alt={$t('alicante.landmarks.castle.title')} class="w-full h-auto max-h-[600px] object-cover"/>
        </div>
                
        <div class="absolute top-8 right-8 z-10 text-end max-w-4xl">
            <h2 class="font-fingerpaint text-4xl md:text-6xl mb-6 leading-tight" style="color: #004E98;">{$t('alicante.landmarks.castle.title')}</h2>
            <p class="text-xl md:text-2xl font-medium text-slate-700">
                {$t('alicante.landmarks.castle.description')}
            </p>
        </div>
    </section>

    <!-- PORTO -->
    <section class="relative w-full flex items-center justify-center min-h-[500px] mb-10 bg-blue-50">
        <div class="w-full">
            <img src="/IMG_9965.webp" alt={$t('alicante.landmarks.port.title')} class="w-full h-auto max-h-[600px] object-cover"/>
        </div>
                
        <div class="absolute top-8 left-8 z-10 text-start max-w-4xl">
            <h2 class="font-fingerpaint text-4xl md:text-6xl mb-6 leading-tight" style="color: #004E98;">{$t('alicante.landmarks.port.title')}</h2>
            <p class="text-xl md:text-2xl font-medium text-slate-700">
                {$t('alicante.landmarks.port.description')}
            </p>
        </div>
    </section>

    <!-- PASEO EXPLANADA -->
    <section class="relative w-full flex items-center justify-center min-h-[500px] mb-10 bg-blue-50">
        <div class="w-full relative">
            <img src="/IMG_0104.webp" alt={$t('alicante.landmarks.promenade.title')} class="w-full object-cover"/>
            <div class="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div class="absolute z-10 text-center max-w-4xl px-4">
            <h2 class="font-fingerpaint text-4xl md:text-6xl mb-6 leading-tight text-white drop-shadow-lg">{$t('alicante.landmarks.promenade.title')}</h2>
            <p class="text-xl md:text-2xl font-medium text-white/90 drop-shadow-md">
                {$t('alicante.landmarks.promenade.description')}
            </p>
        </div>
    </section>

    <!-- MAPPA -->
    <section class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="font-fingerpaint text-4xl md:text-5xl text-center mb-16" style="color: #004E98;">{$t('alicante.map.title')}</h2>
            <div class="w-full aspect-video rounded-3xl shadow-xl overflow-hidden">
                <iframe 
                    src="https://www.google.com/maps/d/u/0/embed?mid=18ly6t-urCv5xuZbwNgmWbGq0gxchv18&ehbc=2E312F&noprof=1" 
                    class="w-full h-full"
                    style="border:0;"
                    allowfullscreen 
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Map of Alicante surroundings">
                </iframe>
            </div>
        </div>
    </section>

    <!-- SHOPPING & CIBO -->
    <section class="py-20 rounded-t-[3rem]" style="background-color: #F2D2A2;">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="font-fingerpaint text-4xl md:text-5xl text-center mb-16" style="color: #004E98;">{$t('alicante.shopping.title')}</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <!-- Corte Ingles -->
                <div class="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500">
                    <h3 class="font-bold text-2xl mb-2 text-blue-600">{$t('alicante.shopping.centers.el_corte_ingles.name')}</h3>
                    <p class="text-gray-600">{$t('alicante.shopping.centers.el_corte_ingles.description')}</p>
                </div>
                
                <!-- Gran Via -->
                <div class="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-green-500">
                    <h3 class="font-bold text-2xl mb-2 text-green-600">{$t('alicante.shopping.centers.gran_via.name')}</h3>
                    <p class="text-gray-600">{$t('alicante.shopping.centers.gran_via.description')}</p>
                </div>
                
                <!-- Al Campo -->
                <div class="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500">
                    <h3 class="font-bold text-2xl mb-2 text-orange-500">{$t('alicante.shopping.centers.al_campo.name')}</h3>
                    <p class="text-gray-600">{$t('alicante.shopping.centers.al_campo.description')}</p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">

                <!-- SUPERMERCATI -->
                <div class="bg-white/60 p-8 rounded-3xl border-2 border-white backdrop-blur-sm">
                    <h3 class="font-fingerpaint text-3xl mb-8 flex items-center gap-3" style="color: #004E98;">
                        <FontAwesomeIcon icon={faShoppingCart} /> {$t('alicante.shopping.supermarkets.title')}
                    </h3>
                    <ul class="space-y-4 text-lg">
                        <li class="flex flex-col sm:flex-row justify-between border-b border-gray-400/30 pb-3">
                            <span class="font-bold">{$t('alicante.shopping.supermarkets.mercadona.name')}</span>
                            <span class="text-gray-700 text-sm sm:text-base">{$t('alicante.shopping.supermarkets.mercadona.description')}</span>
                        </li>
                        <li class="flex flex-col sm:flex-row justify-between border-b border-gray-400/30 pb-3">
                            <span class="font-bold">{$t('alicante.shopping.supermarkets.carrefour.name')}</span>
                            <span class="text-gray-700 text-sm sm:text-base">{$t('alicante.shopping.supermarkets.carrefour.description')}</span>
                        </li>
                        <li class="flex flex-col sm:flex-row justify-between border-b border-gray-400/30 pb-3">
                            <span class="font-bold">{$t('alicante.shopping.supermarkets.lidl.name')}</span>
                            <span class="text-gray-700 text-sm sm:text-base">{$t('alicante.shopping.supermarkets.lidl.description')}</span>
                        </li>
                        <li class="flex flex-col sm:flex-row justify-between border-b border-gray-400/30 pb-3">
                            <span class="font-bold">{$t('alicante.shopping.supermarkets.minimarkets.name')}</span>
                            <span class="text-gray-700 text-sm sm:text-base">{$t('alicante.shopping.supermarkets.minimarkets.description')}</span>
                        </li>
                    </ul>
                </div>

                <!-- FAST FOOD -->
                <div>
                    <h3 class="font-fingerpaint text-3xl mb-8 flex items-center gap-3" style="color: #F55A3B;">
                        <FontAwesomeIcon icon={faUtensils} /> {$t('alicante.shopping.fast_food.title')}
                    </h3>
                    <div class="grid grid-cols-2 gap-4">
                        <!-- TGB -->
                        <div class="bg-[#FFC72C] text-black font-extrabold text-center py-4 px-2 rounded-xl shadow-sm border-2 border-black flex flex-col justify-center items-center h-24">
                            TGB
                            <span class="text-[10px] font-normal leading-tight">The Good Burger</span>
                        </div>
                        <!-- 100 Montaditos -->
                        <div class="bg-[#8B0000] text-white font-serif text-center py-4 px-2 rounded-xl shadow-sm flex items-center justify-center h-24 text-xl">
                            {$t('alicante.shopping.fast_food.montaditos')}
                        </div>
                        <!-- Five Guys -->
                        <div class="bg-[#DA291C] text-white font-bold text-center py-4 px-2 rounded-xl shadow-sm flex items-center justify-center h-24 text-lg tracking-tighter uppercase border-2 border-white">
                            {$t('alicante.shopping.fast_food.five_guys')}
                        </div>
                        <!-- Taco Bell -->
                        <div class="bg-[#702082] text-white font-bold text-center py-4 px-2 rounded-xl shadow-sm flex items-center justify-center h-24 text-lg">
                            {$t('alicante.shopping.fast_food.taco_bell')}
                        </div>
                        <!-- Domino's -->
                        <div class="bg-[#0055A5] text-white font-bold text-center py-4 px-2 rounded-xl shadow-sm flex items-center justify-center h-24 italic transform -skew-x-6">
                            {$t('alicante.shopping.fast_food.dominos')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- I DINTORNI - VERSIONE AGGIORNATA -->
    <section class="max-w-6xl mx-auto py-16 px-4 font-oobaby text-4xl">
        <!-- Titolo principale -->
        <h2 class="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-4 font-oobaby">
            {$t('alicante.surroundings.title')}
        </h2>
        <div class="h-1 w-24 bg-blue-500 mx-auto mb-8"></div>

        <!-- Titolo sezione -->
        <h3 class="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center font-fingerpaint">
            {dintorni.valencia.regionName}
        </h3>

        <!-- VALENCIA -->
        <div class="mb-24">
            
            <!-- Luoghi -->
            <div class="space-y-20">
                {#each dintorni.valencia.places as trip}
                    <div class="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:shadow-2xl transition-all duration-300">
                        <!-- Titolo con effetto nastro -->
                        <div class="relative bg-linear-to-r from-blue-700 to-cyan-600 p-5 text-center overflow-hidden">
                            <div class="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full"></div>
                            <h3 class=" font-semibold text-center text-slate-800 relative z-10 px-6 py-2">
                                {trip.title}
                            </h3>
                            <div class="absolute bottom-0 left-0 right-0 h-2 bg-linear-to-r from-yellow-300 via-amber-400 to-yellow-300"></div>
                        </div>
                        
                        <!-- Galleria immagini -->
                        <div class="p-6">
                            <div class="flex flex-wrap gap-4">
                                {#each trip.images as image, i}
                                    <div class="relative overflow-hidden rounded-xl group grow min-w-[300px] h-[400px]">
                                        <img 
                                            src={image}
                                            alt={`${trip.title} - Foto ${i+1}`}
                                            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <span class="text-white font-medium text-lg">{trip.title} - Foto {i+1}</span>
                                        </div>
                                    </div>
                                {/each}
                            </div>
                            
                            <!-- Descrizione -->
                            <div class="mt-8 p-6 bg-linear-to-br from-blue-50 to-white rounded-xl border-l-4 border-cyan-400 shadow-inner">
                                <div class="font-fingerpaint text-gray-700 text-xl leading-relaxed">
                                    {trip.desc}
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- ANDALUSIA -->
        <div class="mb-12">
            <!-- Titolo sezione -->
            <div class="mb-10">
                <h3 class="text-3xl md:text-4xl font-semibold text-slate-800 mb-2">
                    {dintorni.andalucia.regionName}
                </h3>
            </div>
            
            <!-- Luoghi -->
            <div class="space-y-20">
                {#each dintorni.andalucia.places as trip}
                    <div class="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:shadow-2xl transition-all duration-300">
                        <!-- Titolo con effetto nastro -->
                        <div class="relative bg-linear-to-r from-amber-700 to-orange-600 p-5 text-center overflow-hidden">
                            <div class="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full"></div>
                            <h3 class="-2xl font-semibold text-center text-white relative z-10 px-6 py-2">
                                {trip.title}
                            </h3>
                            <div class="absolute bottom-0 left-0 right-0 h-2 bg-linear-to-r from-yellow-300 via-amber-400 to-yellow-300"></div>
                        </div>
                        
                        <!-- Galleria immagini -->
                        <div class="p-6">
                            <div class="flex flex-wrap gap-4">
                                {#each trip.images as image, i}
                                    <div class="relative overflow-hidden rounded-xl group grow min-w-[300px] h-[400px]">
                                        <img 
                                            src={image}
                                            alt={`${trip.title} - Foto ${i+1}`}
                                            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <span class="text-white font-medium text-lg">{trip.title} - Foto {i+1}</span>
                                        </div>
                                    </div>
                                {/each}
                            </div>
                            
                            <!-- Descrizione -->
                            <div class="mt-8 p-6 bg-linear-to-br from-amber-50 to-white rounded-xl border-l-4 border-amber-400 shadow-inner">
                                <div class="font-fingerpaint text-gray-700 text-lg leading-relaxed">
                                    {trip.desc}
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

</main>