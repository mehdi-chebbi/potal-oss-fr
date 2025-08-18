import { useLocation } from 'react-router-dom';

export type Lang = 'en' | 'fr';

export const getCurrentLangFromPath = (pathname: string): Lang => {
  const first = pathname.split('/').filter(Boolean)[0];
  return first === 'fr' ? 'fr' : 'en';
};

export const buildLangPath = (lang: Lang, path: string): string => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${normalized}`;
};

export const useLang = () => {
  const location = useLocation();
  const lang = getCurrentLangFromPath(location.pathname);
  const langPath = (path: string) => buildLangPath(lang, path);
  return { lang, langPath };
};

