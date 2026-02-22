import { init, register, getLocaleFromNavigator, locale, t } from 'svelte-i18n';
import { writable } from 'svelte/store';

// Inizializza le traduzioni
register('en', () => import('./en.json'));
register('es', () => import('./es.json'));

// Imposta la lingua predefinita
let currentLocale = writable('es');

// Inizializza l'i18n
init({
    fallbackLocale: 'es',
    initialLocale: 'es'
});

// Esporta il locale corrente e la funzione di traduzione
export { currentLocale, t, locale };