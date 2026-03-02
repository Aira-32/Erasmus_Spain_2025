<script>
  import '$lib/i18n';
  import Header from '$lib/layout/Header.svelte';
  import Footer from '$lib/layout/Footer.svelte';
  import '../app.css';

  import { waitLocale } from 'svelte-i18n';
  import '$lib/i18n';

  export const load = async () => {
      await waitLocale();
  };
</script>

<Header />

<main>
  <slot />
</main>

<Footer />