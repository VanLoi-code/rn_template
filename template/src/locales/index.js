import I18n from 'react-native-i18n';

// import languages
import vi from './languages/vi';

I18n.fallbacks = true;
I18n.defaultLocale = 'vi'; // default
I18n.translations = {vi}; // add languages

export default I18n;
