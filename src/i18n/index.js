import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {NativeModules, Platform} from 'react-native';

import en from './locales/en';
import vi from './locales/vi';

const resources = {
  en: {translation: en},
  vi: {translation: vi},
};

const locale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // ios 13
    : NativeModules.I18nManager.localeIdentifier;
i18n.locale = locale;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en',
    fallbackLng: 'en', // use en if detected lng is not available
  });

export default i18n;
