import { addMessages, init, locale } from 'svelte-i18n';

import en from './en.json';
import es from './es.json';
import it from './it.json';

addMessages('en', en);
addMessages('es', es);
addMessages('it', it);

init({
  fallbackLocale: 'es',
  initialLocale: 'es',
  warnOnMissingMessages: false
});

export { locale };