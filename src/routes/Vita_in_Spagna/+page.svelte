<script>
	// Icons
	import { 
		faShoppingCart, 
		faUtensils, 
		faBus,
		faTicketAlt, 
		faHome, 
		faSwimmingPool, 
		faClock
	} from '@fortawesome/free-solid-svg-icons';

	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { t } from 'svelte-i18n';
</script>

<main class="min-h-screen bg-bg-light pb-20 pt-10">

	<!-- ============================================== -->
	<!-- HERO SECTION -->
	<!-- ============================================== -->
	<div class="mb-12 border-b-4 border-primary pb-4 h-[500px] flex flex-col justify-center items-center text-center"
		style="
		background-color: #0084D1;
		background-image: url('data:image/svg+xml,%3Csvg width=\'22\' height=\'22\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.7\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M5 0h1L0 6V5zM6 5v1H5z\'/%3E%3C/g%3E%3C/svg%3E');
		"
	>
		<h1 class="text-5xl md:text-7xl font-fingerpaint text-white mb-4">
			{$t('livingInSpain.hero.title')}
		</h1>
	
		<p class="text-3xl md:text-4xl font-oobaby text-white/80 max-w-3xl">
			{$t('livingInSpain.hero.subtitle')}
		</p>
	</div>

	<div class="grid grid-cols-1 gap-12 max-w-7xl mx-auto">

		<!-- ============================================== -->
		<!-- SECTION 1: FOOD & SUPERMARKETS -->
		<!-- ============================================== -->
		<section class="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-8 border-accent">
			
			<div class="flex items-center gap-3 mb-6">
				<div class="text-accent">
					<FontAwesomeIcon icon={faShoppingCart} size="2x" />
				</div>
				<h2 class="text-4xl font-oobaby text-primary">
					{$t('livingInSpain.food.title')}
				</h2>
			</div>

			<h3 class="font-fingerpaint text-accent text-xl mb-3">
				{$t('livingInSpain.food.supermarketTitle')}
			</h3>

			<ul class="list-disc pl-5 space-y-2 mb-6">
				<li>{@html $t('livingInSpain.food.point1')}</li>
				<li>{@html $t('livingInSpain.food.point2')}</li>
				<li>{@html $t('livingInSpain.food.point3')}</li>
				<li>{@html $t('livingInSpain.food.point4')}</li>
			</ul>

			<h3 class="font-fingerpaint text-accent text-xl mb-3">
				{$t('livingInSpain.food.disappointmentTitle')}
			</h3>

			<ul class="list-disc pl-5 space-y-2">
				<li>{@html $t('livingInSpain.food.taste1')}</li>
				<li>{@html $t('livingInSpain.food.taste2')}</li>
			</ul>

			<!-- Cooking habits box -->
			<div class="mt-8 bg-bg-section p-5 rounded-lg border border-primary/20">
				<div class="flex items-center gap-2 mb-2 text-primary font-fingerpaint text-lg">
					<FontAwesomeIcon icon={faUtensils} />
					<span>{$t('livingInSpain.food.cookingTitle')}</span>
				</div>

				<ul class="list-disc pl-5">
					<li>{$t('livingInSpain.food.cook1')}</li>
					<li>{@html $t('livingInSpain.food.cook2')}</li>
				</ul>
			</div>
		</section>


		<!-- ============================================== -->
		<!-- SECTION 2: TRANSPORT -->
		<!-- ============================================== -->
		<section class="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-8 border-secondary">
			
			<div class="flex items-center gap-3 mb-6">
				<div class="text-secondary">
					<FontAwesomeIcon icon={faBus} size="2x" />
				</div>
				<h2 class="text-4xl font-oobaby text-secondary">
					{$t('livingInSpain.transport.title')}
				</h2>
			</div>

			<ul class="space-y-4 text-lg">
				<li>{@html $t('livingInSpain.transport.point1')}</li>
				<li>{@html $t('livingInSpain.transport.point2')}</li>
				<li>{@html $t('livingInSpain.transport.point3')}</li>
			</ul>

			<div class="mt-6 bg-gray-50 p-4 rounded border border-gray-200">
				<h3 class="font-fingerpaint text-secondary mb-2 flex items-center gap-2">
					<FontAwesomeIcon icon={faTicketAlt} />
					{$t('livingInSpain.transport.ticketsTitle')}
				</h3>

				<ul class="list-disc pl-5">
					<li>{@html $t('livingInSpain.transport.ticket1')}</li>
					<li>{@html $t('livingInSpain.transport.ticket2')}</li>
					<li>{@html $t('livingInSpain.transport.ticket3')}</li>
				</ul>
			</div>
		</section>


		<!-- ============================================== -->
		<!-- SECTION 3: HOUSE & RESIDENCE -->
		<!-- ============================================== -->
		<section class="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-8 border-primary">
			
			<div class="flex items-center gap-3 mb-6">
				<div class="text-primary">
					<FontAwesomeIcon icon={faHome} size="2x" />
				</div>
				<h2 class="text-4xl font-oobaby text-primary">
					{$t('livingInSpain.house.title')}
				</h2>
			</div>

			<h3 class="text-2xl font-fingerpaint text-primary mb-4">
				{$t('livingInSpain.house.houseTitle')}
			</h3>

			<ul class="list-disc pl-5 space-y-2">
				<li>{@html $t('livingInSpain.house.house1')}</li>
				<li>{@html $t('livingInSpain.house.house2')}</li>
				<li>{@html $t('livingInSpain.house.house3')}</li>
				<li>{@html $t('livingInSpain.house.house4')}</li>
			</ul>

			<h3 class="text-2xl font-fingerpaint text-primary mb-4 mt-8">
				{$t('livingInSpain.house.residenceTitle')}
			</h3>

			<ul class="list-disc pl-5 space-y-2">
				<li>{$t('livingInSpain.house.res1')}</li>
				<li>
					<FontAwesomeIcon icon={faSwimmingPool} class="inline"/>
					{$t('livingInSpain.house.res2')}
				</li>
				<li>{$t('livingInSpain.house.res3')}</li>
				<li>{$t('livingInSpain.house.res4')}</li>
			</ul>
		</section>


		<!-- ============================================== -->
		<!-- SECTION 4: SCHEDULE -->
		<!-- ============================================== -->
		<section class="bg-bg-section p-8 rounded-xl border-2 border-primary border-dashed text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
			
			<div>
				<h2 class="text-4xl font-oobaby text-primary mb-2 flex items-center gap-3">
					<FontAwesomeIcon icon={faClock} />
					{$t('livingInSpain.schedule.title')}
				</h2>

				<p>{$t('livingInSpain.schedule.subtitle')}</p>
			</div>

			<div class="flex flex-col md:flex-row gap-6 md:gap-12">
				
				<div class="bg-white p-4 rounded shadow text-center min-w-[150px]">
					<div class="font-fingerpaint text-accent text-lg">
						{$t('livingInSpain.schedule.lunch')}
					</div>
					<div class="text-3xl font-bold text-gray-700">14:00</div>
					<div class="text-sm text-gray-500">15:00</div>
				</div>

				<div class="bg-white p-4 rounded shadow text-center min-w-[150px]">
					<div class="font-fingerpaint text-primary text-lg">
						{$t('livingInSpain.schedule.dinner')}
					</div>
					<div class="text-3xl font-bold text-gray-700">22:00</div>
					<div class="text-sm text-gray-500">
						{$t('livingInSpain.schedule.dinnerNote')}
					</div>
				</div>

			</div>
		</section>

	</div>
</main>