<script>
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	
	// Icone
	import { 
		faShoppingCart, 
		faUtensils, 
		faBus, 
		faSun,
		faTicketAlt, 
		faHome, 
		faSwimmingPool, 
		faClock, 
		faCamera 
	} from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	
</script>

<Header />

<main class="min-h-screen bg-bg-light pb-20 pt-10">
	
	<!-- Titolo Principale -->
<div class="mb-12 border-b-4 border-primary pb-4 h-[500px] flex flex-col justify-center items-center text-center"
	style="
	background-color: #0084D1;
	background-image: url('data:image/svg+xml,%3Csvg width=\'22\' height=\'22\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.7\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M5 0h1L0 6V5zM6 5v1H5z\'/%3E%3C/g%3E%3C/svg%3E');
	"
>
    <h1 class="text-5xl md:text-7xl font-fingerpaint text-white mb-4">
        Vivir en España
    </h1>
    <p class="text-3xl md:text-4xl font-oobaby text-white/80 max-w-3xl">
        Las diferencias que he notado (Comida, Casas y Transporte)
    </p>
</div>

	<div class="grid grid-cols-1 gap-12 max-w-7xl mx-auto">

		<!-- SEZIONE 1: CIBO & SUPERMERCATI -->
		<section class="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-8 border-accent">
			<div class="flex items-center gap-3 mb-6">
				<div class="text-accent"><FontAwesomeIcon icon={faShoppingCart} size="2x" /></div>
				<h2 class="text-4xl font-oobaby text-primary">Supermercados y Comida</h2>
			</div>

			<div class="grid md:grid-cols-2 gap-8">
				<!-- Testo a Punti -->
				<div class="text-lg text-gray-800 leading-relaxed">
					<h3 class="font-fingerpaint text-accent text-xl mb-3">¿Qué cambia en el Supermercado?</h3>
					<ul class="list-disc list-outside pl-5 space-y-2 mb-6">
						<li><strong>Precios:</strong> Algunas cosas cuestan mucho más, especialmente el papel higiénico y los huevos.</li>
						<li><strong>Carne y Pollo:</strong> Cortes mucho más gruesos y fáciles de masticar.</li>
						<li><strong>Leche:</strong> Tienen una sección dedicada con cajas apiladas como si fuera agua.</li>
						<li><strong>Productos de EE.UU.:</strong> Lleno de cosas que no existen en nuestro país (800 tipos de Milka, Doritos, Cheetos).</li>
					</ul>

					<h3 class="font-fingerpaint text-accent text-xl mb-3">La decepción del sabor:</h3>
					<ul class="list-disc list-outside pl-5 space-y-2">
						<li><strong>Guisantes:</strong> Literalmente no saben a nada.</li>
						<li><strong>Salsa:</strong> Muy dulce, parece que lleva azúcar.</li>
					</ul>
				</div>

				<!-- Fotos -->
				<div class="w-full space-y-4">
					<div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
						<img 
							src="/Immagine WhatsApp 2025-12-15 ore 13.31.28_dc4706c2.jpg" 
							alt="Sección de supermercado"
							class="w-full h-full object-cover"
							style="max-height: 280px; min-height: 200px;"
						>
					</div>
					<div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
						<img 
							src="/WhatsApp Image 2025-12-16 at 22.52.30   2.jpeg" 
							alt="Productos del supermercado"
							class="w-full h-full object-cover max-h-[280px] min-h-[280px]" 
							style="object-position: 0% 30%"
						>
					</div>
				</div>
			</div>

			<!-- Box Abitudini Cucina -->
			<div class="mt-8 bg-bg-section p-5 rounded-lg border border-primary/20">
				<div class="flex items-center gap-2 mb-2 text-primary font-fingerpaint text-lg">
					<FontAwesomeIcon icon={faUtensils} />
					<span>Cómo cocinan ellos</span>
				</div>
				<ul class="list-disc pl-5">
					<li>La pasta se cocina para ser comida 1 o 2 días después.</li>
					<li><strong>No cocinan la salsa:</strong> la vierten directamente de la botella (o de los envases pequeños como de leche) sobre la pasta.</li>
				</ul>
			</div>
		</section>

		<!-- SEZIONE 2: MEZZI DI TRASPORTO -->
		<section class="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-8 border-secondary">
			<div class="flex items-center gap-3 mb-6">
				<div class="text-secondary"><FontAwesomeIcon icon={faBus} size="2x" /></div>
				<h2 class="text-4xl font-oobaby text-secondary">Transporte Público: Una Delicia</h2>
			</div>

			<div class="grid md:grid-cols-3 gap-8">
				<!-- Colonna 1: Info Generali -->
				<div class="md:col-span-2">
					<ul class="space-y-4 text-lg">
						<li class="flex gap-3">
							<span class="text-secondary font-bold">✓</span>
							<div>
								<strong>Máxima eficiencia: Autobuses 100% eléctricos y muy frecuentes.</strong>
							</div>
						</li>
						<li class="flex gap-3">
							<span class="text-secondary font-bold">✓</span>
							<div>
								<strong>Las paradas: Casi siempre tienen asientos, papelera y una pantalla alimentada por paneles solares que te indica los minutos de espera.</strong>
							</div>
						</li>
						<li class="flex gap-3">
							<span class="text-secondary font-bold">✓</span>
							<div>
								<strong>Curiosidad: El mismo autobús tiene el mismo número pero dos nombres diferentes según la dirección del recorrido.</strong>
							</div>
						</li>
					</ul>

					<div class="mt-6 bg-gray-50 p-4 rounded border border-gray-200">
						<h3 class="font-fingerpaint text-secondary mb-2 flex items-center gap-2">
							<FontAwesomeIcon icon={faTicketAlt} /> Billetes y Precios
						</h3>
						<ul class="list-disc pl-5 text-sm md:text-base">
							<li><strong>Sin revisor: Lo hace todo el conductor.</strong></li>
							<li><strong>Billete sencillo: 1,45€ a bordo.</strong></li>
							<li><strong>Abonos: Se compran tarjetas recargables (sin caducidad) en los Estancos (estancos). Se recargan allí o en el autobús.</strong></li>
						</ul>
					</div>
				</div>

				<!-- Colonna 2: Foto -->
				<div class="flex flex-col gap-4">
					<div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
						<img 
							src="/WhatsApp Image 2025-12-16 at 21.25.25.jpeg" 
							alt="Autobús urbano" 
							class="w-full h-full object-cover"
							style="max-height: 300px; min-height: 200px;"
						>
					</div>
					<div class="bg-gray-100 rounded-lg overflow-hidden shadow-md">
						<img 
							src="/photo_2025-12-16_23-15-36.jpg" 
							alt="Parada de autobús"
							class="w-full h-full object-cover"
							style="max-height: 200px; min-height: 150px;"
						>
					</div>
				</div>
			</div>
		</section>

		<!-- SEZIONE 3: CASA E RESIDENCE -->
		<section class="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-8 border-primary">
			<div class="flex items-center gap-3 mb-6">
				<div class="text-primary"><FontAwesomeIcon icon={faHome} size="2x" /></div>
				<h2 class="text-4xl font-oobaby text-primary">Casa y Residencia</h2>
			</div>

			<div class="grid md:grid-cols-2 gap-10 mt-6">
				<div>
					<h3 class="text-2xl font-fingerpaint text-primary mb-4">
						Interior de la Casa
					</h3>
					<ul class="list-disc pl-5 space-y-2">
						<li><strong>Agua:</strong> La del grifo no es buena. Tenemos dos grifos (uno con filtro) o usamos garrafas de 6L (cuestan menos que las cajas).</li>
						<li><strong>Comodidades:</strong> Lavavajillas, aire acondicionado, calefacción.</li>
						<li><strong>Ventilador:</strong> Casi cada habitación tiene un ventilador de techo que también sirve de lámpara de techo.</li>
						<li><strong>Baños:</strong> Dos baños (uno con ducha, otro con bañera).</li>
					</ul>
				</div>

				<div>
					<h3 class="text-2xl font-fingerpaint text-primary mb-4">
						La Residencia
					</h3>
					<ul class="list-disc pl-5 space-y-2">
						<li>Complejo de 150 casas.</li>
						<li><span class="text-secondary font-bold"><FontAwesomeIcon icon={faSwimmingPool} class="inline"/> Piscina grande siempre llena y limpia.</li>
						<li>Campo polideportivo (Fútbol, Baloncesto, Tenis).</li>
						<li>Parque infantil.</li>
					</ul>
				</div>
			</div>
		</section>

		<!-- SEZIONE 4: ORARI -->
		<section class="bg-bg-section p-8 rounded-xl border-2 border-primary border-dashed text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
			<div>
				<h2 class="text-4xl font-oobaby text-primary mb-2 flex items-center justify-center md:justify-start gap-3">
					<FontAwesomeIcon icon={faClock} /> Horarios Españoles
				</h2>
				<p class="text-lg mb-0">Aquí se vive con el horario desplazado:</p>
			</div>
			
			<div class="flex flex-col md:flex-row gap-6 md:gap-12">
				<div class="bg-white p-4 rounded shadow text-center min-w-[150px]">
					<div class="font-fingerpaint text-accent text-lg">Comida</div>
					<div class="text-3xl font-bold text-gray-700">14:00</div>
					<div class="text-sm text-gray-500">o 15:00</div>
				</div>
				<div class="bg-white p-4 rounded shadow text-center min-w-[150px]">
					<div class="font-fingerpaint text-primary text-lg">Cena</div>
					<div class="text-3xl font-bold text-gray-700">22:00</div>
					<div class="text-sm text-gray-500">(Nosotros cenábamos a las 21:00)</div>
				</div>
			</div>
		</section>

	</div>
</main>

<Footer />