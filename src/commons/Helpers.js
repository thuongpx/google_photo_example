import i18n from '../i18n';

export const i18nTranslate = key => {
  return i18n.t(key);
};

export const changeLangauge = language => {
  i18n.changeLanguage(language);
};
