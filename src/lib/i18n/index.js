import { init, register, getLocaleFromNavigator, locale, t } from 'svelte-i18n';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Registra le lingue disponibili
register('en', () => import('./en.json'));
register('es', () => import('./es.json'));
register('it', () => import('./it.json'));

// Imposta la lingua predefinita
let currentLocale = writable('es');

// Inizializza l'i18n con la lingua del browser o fallback
const initialLocale = browser ? getLocaleFromNavigator() : 'es';

init({
    fallbackLocale: 'es',
    initialLocale: initialLocale
});

// Esporta il locale corrente e la funzione di traduzione
export { currentLocale, t, locale };