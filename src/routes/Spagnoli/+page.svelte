<script>
    import Header from '$lib/layout/Header.svelte';
    import Footer from '$lib/layout/Footer.svelte';

    import { 
        faSchool, faUtensils, faGamepad, faBiking, faHeart,
        faCamera, faQuoteLeft, faCar
    } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<Header />

<main class="w-full bg-[#f4f1ea] text-slate-900 pb-24 overflow-x-hidden font-sans">

    <!-- ============================================== -->
    <!-- PARTE 1: LOS ESPAÑOLES (ESTILO: DIARIO DESORDENADO) -->
    <!-- ============================================== -->
    <section class="max-w-7xl mx-auto px-6 py-40 relative">
        
        <!-- NUEVO TÍTULO: MÁS DIRECTO Y PERSONAL -->
        <div class="relative mb-24 text-center">
            <h2 class="font-fingerpaint text-7xl md:text-8xl text-primary inline-block transform -rotate-2 relative z-10">
                LOS ESPAÑOLES
            </h2>
            <p class="font-fingerpaint text-2xl text-accent bg-white px-4 py-1 inline-block transform -rotate-1 shadow-lg absolute -bottom-6 left-1/2 -translate-x-1/2 border-2 border-black z-20 whitespace-nowrap">
                Cosas que he notado
            </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-start">
            
            <!-- TEXTO LIBRE (Sin tarjeta, solo resaltados) -->
            <div class="space-y-12 text-xl leading-relaxed text-slate-800">
                
                <div class="relative">
                    <FontAwesomeIcon icon={faQuoteLeft} class="text-6xl text-gray-200 absolute -top-8 -left-4 -z-10" />
                    <p>
                        Empecemos por lo físico: <span class="bg-yellow-200 px-2 box-decoration-clone">casi todos son delgados</span> (tanto chicos como chicas), pero extrañamente la mayoría tiene mucho acné.
                    </p>
                </div>

                <div>
                    <h3 class="font-fingerpaint text-2xl text-secondary mb-2">Comportamiento & Fiestas</h3>
                    <p>
                        Son muy amables prácticamente todos y muy "fiesteros". 
                        Les encanta la <span class="font-bold text-accent">música italiana</span>, ¡es super apreciada aquí!
                        Pero hay algo extraño: <span class="underline decoration-wavy decoration-accent">los sábados por la noche apenas se ve a nadie por la calle</span>, la verdad.
                    </p>
                </div>

                <div class="bg-white p-6 border-2 border-black shadow-[8px_8px_0px_0px_#000] rotate-1">
                    <h3 class="font-fingerpaint text-2xl mb-2 flex items-center gap-2">
                        <FontAwesomeIcon icon={faSchool} /> En el Colegio
                    </h3>
                    <p class="mb-4">
                        Los jóvenes son muy diferentes a nosotros. Siempre beben leche o leche con cacao (tipo Nesquik).
                    </p>
                    <p class="font-bold">
                        Hay muy poco acoso escolar.
                    </p>
                    <p>
                        La gente es muy atenta en clase y no molesta. Sin embargo, si tienen deberes que hacer, para ellos el día ha terminado: nunca salen durante la semana (excepto los viernes).
                    </p>
                </div>

            </div>

            <!-- FOTO BUTTATA LÌ (POLAROID GIGANTE) -->
            <div class="relative h-[600px] mt-10 lg:mt-0">
                <!-- Foto 2 -->
                <div class="absolute top-0 right-0 z-20 w-[500px] bg-white p-6 shadow-2xl transform rotate-3 border-4 border-gray-200">
                    <img src="/chicas.webp" alt="Amigas en España" class="w-full h-auto">
                </div>
            </div>
        </div>
    </section>

    <!-- SPACER -->
    <div class="h-20"></div>

    <!-- ============================================== -->
    <!-- PARTE 2: MI FAMILIA DE ACOGIDA (ESTILO: ÁLBUM PERSONAL) -->
    <!-- ============================================== -->
    <section class="max-w-6xl mx-auto px-6">
        
        <h2 class="font-fingerpaint text-6xl text-center mb-16 text-primary drop-shadow-sm">
            Mi Familia de Acogida
        </h2>

        <!-- BLOQUE PADRES: ÚNICO Y PERSONAL -->
        <div class="bg-white p-8 md:p-12 rounded-[2rem] border-4 border-dashed border-primary/30 relative shadow-xl mb-16">
            
            <!-- Etiqueta decorativa -->
            <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-white font-fingerpaint px-8 py-2 text-xl rotate-1 shadow-md">
                Los Padres
            </div>

            <p class="text-xl text-center mb-10 max-w-3xl mx-auto leading-relaxed">
                Con la familia de acogida he pasado muchísimo tiempo juntos. 
                ¡Me han llevado prácticamente a todas partes!
            </p>

            <div class="grid md:grid-cols-2 gap-12">
                
                <!-- PACO -->
                <div class="relative pl-6 border-l-4 border-secondary">
                    <h3 class="font-fingerpaint text-4xl text-secondary mb-1">Paco</h3>
                    <p class="text-sm text-gray-400 mb-1 font-bold uppercase tracking-widest">Francisco (de Murcia)</p>
                    <p class="text-sm text-gray-500 mb-4 italic">Contable en una empresa de transporte de autobuses</p>
                    
                    <p class="text-lg text-slate-700 mb-4">
                        Con él tengo una <strong>relación especial</strong>. Es muy organizado y le encanta hablar de su trabajo. Además, le apasiona aprender nuevos idiomas y a menudo hablamos de las diferencias entre el italiano y el español. Hemos hecho un montón de cosas juntos:
                    </p>
                    <ul class="space-y-3 text-lg">
                        <li class="flex items-center gap-3">
                            <FontAwesomeIcon icon={faUtensils} class="text-accent" />
                            He cocinado con él
                        </li>
                        <li class="flex items-center gap-3">
                            <FontAwesomeIcon icon={faGamepad} class="text-accent" />
                            Jugábamos a las cartas por la noche (con Angelines)
                        </li>
                        <li class="flex items-center gap-3 font-bold text-primary">
                            <FontAwesomeIcon icon={faBiking} />
                            ¡Paseos en bici juntos!
                        </li>
                    </ul>
                </div>

                <!-- ANGELINES -->
                <div class="relative pl-6 border-l-4 border-accent">
                    <h3 class="font-fingerpaint text-4xl text-accent mb-1">Angelines</h3>
                    <p class="text-sm text-gray-400 mb-1 font-bold uppercase tracking-widest">De Villarobledo</p>
                    <p class="text-sm text-gray-500 mb-4 italic">Maestra de escuela primaria</p>
                    
                    <p class="text-lg text-slate-700 mb-4">
                        Como maestra, tiene mucha paciencia y le encanta enseñar. Siempre está dispuesta a ayudar con los deberes o explicar cualquier duda que tenga. Es muy cariñosa y se preocupa mucho por todos en casa.
                    </p>
                </div>

            </div>
        </div>

        <!-- SECCIÓN HERMANAS -->
        <div class="mb-12">
            <h3 class="font-fingerpaint text-3xl text-primary mb-6 text-center">Las Hermanas</h3>
            
            <div class="bg-bg-section p-8 rounded-lg border-2 border-accent max-w-2xl mx-auto">
                <div class="text-center">
                    <p class="font-fingerpaint text-2xl text-primary">Irene</p>
                    <p class="text-gray-700 mb-2">15 años - 4° de ESO</p>
                    
                    <p class="font-fingerpaint text-2xl text-secondary">Lucía</p>
                    <p class="text-gray-700">19 años - Estudia en la universidad de Elche</p>
                </div>
            </div>
        </div>

        <!-- GALLERIA FOTO MEJORADA -->
        <div class="mt-12">
            <h3 class="font-fingerpaint text-3xl text-primary mb-8 text-center">Galería de Fotos</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <img 
                        src="/WhatsApp Image 2025-12-16 at 22.15.24.jpeg" 
                        alt="Momento con la familia española"
                        class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <p class="text-white font-medium">Momento con la familia española</p>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <img 
                        src="/WhatsApp Image 2025-12-16 at 22.52.30.jpeg" 
                        alt="Recuerdo de una salida"
                        class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <p class="text-white font-medium">Recuerdo de una salida</p>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <img 
                        src="/WhatsApp Image 2025-12-17 at 08.32.53 3.jpeg" 
                        alt="Experiencia en España"
                        class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <p class="text-white font-medium">Experiencia en España</p>
                    </div>
                </div>
            </div>
        </div>

    </section>

</main>

<Footer />