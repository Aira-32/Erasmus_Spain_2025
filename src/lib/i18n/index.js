import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';

register('es', () => import('./es.json'));
register('en', () => import('./en.json'));
register('it', () => import('./it.json'));

// Imposta la lingua all’avvio: prende quella salvata o quella del browser
const savedLocale = getLocaleFromNavigator();

init({
  fallbackLocale: 'es',
  initialLocale: savedLocale
});

locale.set(savedLocale);
