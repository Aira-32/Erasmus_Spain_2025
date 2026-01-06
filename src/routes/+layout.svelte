<script>
    import '$lib/i18n';
    import Footer from '$lib/layout/Footer.svelte';
    import Header from '$lib/layout/Header.svelte';
    import '../app.css';
    import { t, locale } from 'svelte-i18n';
  </script>

<Header />

<main>
<slot />
</main>

<Footer />