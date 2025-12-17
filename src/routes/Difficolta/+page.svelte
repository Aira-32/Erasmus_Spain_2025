<script>
    import Header from '$lib/layout/Header.svelte';
    import Footer from '$lib/layout/Footer.svelte';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { 
        faBiohazard, 
        faUserSlash, 
        faExclamationTriangle, 
        faUtensils, 
        faWallet, 
        faHouseDamage
    } from '@fortawesome/free-solid-svg-icons';
</script>

<Header />

<main class="w-full pb-20 font-sans text-slate-800" style="background-color: #F7EDE2;">

    <!-- HERO: Diseño mejorado con gradiente y efectos -->
    <section class="w-full px-6 pt-20 pb-32 md:pt-82 md:pb-40 text-white relative overflow-hidden rounded-b-[3rem] bg-gradient-to-br from-[#004E98] to-[#3A86FF]">
        <div class="max-w-6xl mx-auto relative z-10 px-4">
            <div class="text-left max-w-2xl">
                <h1 class="font-fingerpaint text-5xl md:text-7xl lg:text-8xl mb-4 leading-none text-white drop-shadow-lg">
                    RETOS
                </h1>
                <div class="pl-2 border-l-4 border-white/30">
                    <p class="text-xl md:text-2xl font-light opacity-90">
                        Las dificultades que encontré durante mi experiencia
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- SEZIONE PRINCIPALE -->
    <section class="w-full -translate-y-6 py-12 md:py-16 relative z-20 -mt-20">
        <div class="max-w-6xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <!-- Tarjeta 1 -->
                <div class="bg-white p-6 rounded-2xl shadow-lg border-2 border-red-100 hover:shadow-xl transition-shadow">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="bg-red-50 text-red-500 w-14 h-14 rounded-full flex items-center justify-center text-3xl">
                            <FontAwesomeIcon icon={faBiohazard} />
                        </div>
                        <h2 class="font-fingerpaint text-2xl text-red-600">SALUD</h2>
                    </div>
                    <p class="font-medium text-slate-800 mb-2">Virus intestinal y regla a la vez</p>
                    <p class="text-slate-600 text-sm">
                        Una pesadilla que me tuvo en cama mientras los demás se divertían. La nostalgia en esos momentos fue muy fuerte.
                    </p>
                </div>

                <!-- Tarjeta 2 -->
                <div class="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-100 hover:shadow-xl transition-shadow">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="bg-blue-50 text-blue-500 w-14 h-14 rounded-full flex items-center justify-center text-3xl">
                            <FontAwesomeIcon icon={faUserSlash} />
                        </div>
                        <h2 class="font-fingerpaint text-2xl text-blue-600">SOLEDAD</h2>
                    </div>
                    <p class="font-medium text-slate-800 mb-2">Lejos de la familia</p>
                    <p class="text-slate-600 text-sm">
                        Ver a los demás con sus padres de visita fue difícil. Me sentí sola en esos momentos, especialmente cuando estaba enferma.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- SEZIONE 2: IL CASINO A SCUOLA -->
    <section class="max-w-5xl mx-auto px-4 mb-12">
        <div class="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100">
            <div class="flex items-center gap-3 mb-4">
                <div class="bg-yellow-100 text-yellow-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl">
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                </div>
                <h2 class="font-fingerpaint text-2xl">La Gran Idea</h2>
            </div>
            
            <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-blue-50 p-4 rounded-lg">
                    <p class="text-blue-600 text-xs uppercase font-bold mb-1">El Pensamiento</p>
                    <p class="text-sm">"Total, mis padres de acogida no tienen la app del colegio, no verán si falto."</p>
                </div>

                <div class="bg-blue-50 p-4 rounded-lg">
                    <p class="text-blue-600 text-xs uppercase font-bold mb-1">El Hecho</p>
                    <p class="text-sm">Dos días de ausencia para irme al centro a hacer lo que me diera la gana.</p>
                </div>

                <div class="bg-blue-600 p-4 rounded-lg text-white">
                    <p class="text-yellow-300 text-xs uppercase font-bold mb-1">La Realidad</p>
                    <p class="font-medium">
                        Me pillaron al momento. Arriesgué tener que volver a Palermo antes de tiempo y pagándolo de mi bolsillo.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- SEZIONE 3: ASPETTI NEGATIVI -->
    <section class="max-w-5xl mx-auto px-4 mb-12">
        <h3 class="font-fingerpaint text-2xl text-center mb-6 text-slate-700">Otros Aspectos Difíciles</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <!-- Food -->
            <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div class="bg-orange-100 text-orange-500 w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3">
                    <FontAwesomeIcon icon={faUtensils} />
                </div>
                <h4 class="font-bold text-slate-800 mb-1">Comida</h4>
                <p class="text-sm text-slate-600">No me adapté. Acostumbrada a Palermo, comer aquí fue triste.</p>
            </div>

            <!-- Money -->
            <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div class="bg-green-100 text-green-500 w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3">
                    <FontAwesomeIcon icon={faWallet} />
                </div>
                <h4 class="font-bold text-slate-800 mb-1">Dinero</h4>
                <p class="text-sm text-slate-600">Se me terminó 3 veces. No sé cómo, pero desaparecía.</p>
            </div>

            <!-- Palermo -->
            <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div class="bg-purple-100 text-purple-500 w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3">
                    <FontAwesomeIcon icon={faHouseDamage} />
                </div>
                <h4 class="font-bold text-slate-800 mb-1">Palermo</h4>
                <p class="text-sm text-slate-600">Allí pasaba de todo. Sabía que me perdería fiestas y salidas.</p>
            </div>
        </div>
    </section>

</main>

<Footer />