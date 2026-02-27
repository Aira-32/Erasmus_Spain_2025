<script>
    import { 
        faSchool, faUtensils, faGamepad, faBiking, faQuoteLeft,
    } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { t } from 'svelte-i18n';
</script>

<main class="w-full bg-[#f4f1ea] text-slate-900 pb-24 overflow-x-hidden font-sans">

    <!-- ============================================== -->
    <!-- PART 1 -->
    <!-- ============================================== -->
    <section class="max-w-7xl mx-auto px-6 py-40 relative">
        
        <div class="relative mb-24 text-center">
            <h2 class="font-fingerpaint text-7xl md:text-8xl text-primary inline-block transform -rotate-2 relative z-10">
                {$t('lifeInSpain.spaniards.title')}
            </h2>
            <p class="font-fingerpaint text-2xl text-accent bg-white px-4 py-1 inline-block transform -rotate-1 shadow-lg absolute -bottom-6 left-1/2 -translate-x-1/2 border-2 border-black z-20 whitespace-nowrap">
                {$t('lifeInSpain.spaniards.subtitle')}
            </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-start">
            
            <div class="space-y-12 text-xl leading-relaxed text-slate-800">
                
                <div class="relative">
                    <FontAwesomeIcon icon={faQuoteLeft} class="text-6xl text-gray-200 absolute -top-8 -left-4 -z-10" />
                    <p>
                        {$t('lifeInSpain.spaniards.physical')}
                    </p>
                </div>

                <div>
                    <h3 class="font-fingerpaint text-2xl text-secondary mb-2">
                        {$t('lifeInSpain.spaniards.behaviorTitle')}
                    </h3>
                    <p>
                        {$t('lifeInSpain.spaniards.behaviorText')}
                    </p>
                </div>

                <div class="bg-white p-6 border-2 border-black shadow-[8px_8px_0px_0px_#000] rotate-1">
                    <h3 class="font-fingerpaint text-2xl mb-2 flex items-center gap-2">
                        <FontAwesomeIcon icon={faSchool} />
                        {$t('lifeInSpain.spaniards.schoolTitle')}
                    </h3>
                    <p class="mb-4">
                        {$t('lifeInSpain.spaniards.schoolText1')}
                    </p>
                    <p class="font-bold">
                        {$t('lifeInSpain.spaniards.schoolText2')}
                    </p>
                    <p>
                        {$t('lifeInSpain.spaniards.schoolText3')}
                    </p>
                </div>

            </div>

            <div class="relative h-[600px] mt-10 lg:mt-0">
                <div class="absolute top-0 right-0 z-20 w-[500px] bg-white p-6 shadow-2xl transform rotate-3 border-4 border-gray-200">
                    <img src="/chicas.webp" alt={$t('lifeInSpain.spaniards.imageAlt')} class="w-full h-auto">
                </div>
            </div>
        </div>
    </section>

    <div class="h-20"></div>

    <!-- ============================================== -->
    <!-- PART 2 -->
    <!-- ============================================== -->
    <section class="max-w-6xl mx-auto px-6">
        
        <h2 class="font-fingerpaint text-6xl text-center mb-16 text-primary drop-shadow-sm">
            {$t('lifeInSpain.hostFamily.title')}
        </h2>

        <div class="bg-white p-8 md:p-12 rounded-4xl border-4 border-dashed border-primary/30 relative shadow-xl mb-16">
            
            <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-white font-fingerpaint px-8 py-2 text-xl rotate-1 shadow-md">
                {$t('lifeInSpain.hostFamily.parentsLabel')}
            </div>

            <p class="text-xl text-center mb-10 max-w-3xl mx-auto leading-relaxed">
                {$t('lifeInSpain.hostFamily.intro')}
            </p>

            <div class="grid md:grid-cols-2 gap-12">
                
                <!-- PACO -->
                <div class="relative pl-6 border-l-4 border-secondary">
                    <h3 class="font-fingerpaint text-4xl text-secondary mb-1">Paco</h3>
                    <p class="text-sm text-gray-400 mb-1 font-bold uppercase tracking-widest">
                        {$t('lifeInSpain.hostFamily.paco.origin')}
                    </p>
                    <p class="text-sm text-gray-500 mb-4 italic">
                        {$t('lifeInSpain.hostFamily.paco.job')}
                    </p>
                    
                    <p class="text-lg text-slate-700 mb-4">
                        {$t('lifeInSpain.hostFamily.paco.description')}
                    </p>
                    <ul class="space-y-3 text-lg">
                        <li class="flex items-center gap-3">
                            <FontAwesomeIcon icon={faUtensils} class="text-accent" />
                            {$t('lifeInSpain.hostFamily.paco.list1')}
                        </li>
                        <li class="flex items-center gap-3">
                            <FontAwesomeIcon icon={faGamepad} class="text-accent" />
                            {$t('lifeInSpain.hostFamily.paco.list2')}
                        </li>
                        <li class="flex items-center gap-3 font-bold text-primary">
                            <FontAwesomeIcon icon={faBiking} />
                            {$t('lifeInSpain.hostFamily.paco.list3')}
                        </li>
                    </ul>
                </div>

                <!-- ANGELINES -->
                <div class="relative pl-6 border-l-4 border-accent">
                    <h3 class="font-fingerpaint text-4xl text-accent mb-1">Angelines</h3>
                    <p class="text-sm text-gray-400 mb-1 font-bold uppercase tracking-widest">
                        {$t('lifeInSpain.hostFamily.angelines.origin')}
                    </p>
                    <p class="text-sm text-gray-500 mb-4 italic">
                        {$t('lifeInSpain.hostFamily.angelines.job')}
                    </p>
                    
                    <p class="text-lg text-slate-700 mb-4">
                        {$t('lifeInSpain.hostFamily.angelines.description')}
                    </p>
                </div>

            </div>
        </div>

        <!-- SISTERS SECTION -->
        <div class="mb-12">
            <h3 class="font-fingerpaint text-3xl text-primary mb-6 text-center">
                {$t('lifeInSpain.hostFamily.sisters.title')}
            </h3>
            
            <div class="bg-bg-section p-8 rounded-lg border-2 border-accent max-w-2xl mx-auto">
                <div class="text-center">
                    <p class="font-fingerpaint text-2xl text-primary">Irene</p>
                    <p class="text-gray-700 mb-2">
                        {$t('lifeInSpain.hostFamily.sisters.ireneInfo')}
                    </p>
                    
                    <p class="font-fingerpaint text-2xl text-secondary">Lucía</p>
                    <p class="text-gray-700">
                        {$t('lifeInSpain.hostFamily.sisters.luciaInfo')}
                    </p>
                </div>
            </div>
        </div>

        <!-- GALLERY -->
        <div class="mt-12">
            <h3 class="font-fingerpaint text-3xl text-primary mb-8 text-center">
                {$t('lifeInSpain.hostFamily.gallery.title')}
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <img 
                        src="/WhatsApp Image 2025-12-16 at 22.15.24.jpeg" 
                        alt={$t('lifeInSpain.hostFamily.gallery.image1')}
                        class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <p class="text-white font-medium">
                            {$t('lifeInSpain.hostFamily.gallery.image1')}
                        </p>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <img 
                        src="/WhatsApp Image 2025-12-16 at 22.52.30.jpeg" 
                        alt={$t('lifeInSpain.hostFamily.gallery.image2')}
                        class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <p class="text-white font-medium">
                            {$t('lifeInSpain.hostFamily.gallery.image2')}
                        </p>
                    </div>
                </div>
                
                <div class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <img 
                        src="/WhatsApp Image 2025-12-17 at 08.32.53 3.jpeg" 
                        alt={$t('lifeInSpain.hostFamily.gallery.image3')}
                        class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <p class="text-white font-medium">
                            {$t('lifeInSpain.hostFamily.gallery.image3')}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>

</main>