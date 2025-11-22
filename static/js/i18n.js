const translations = {};
let currentLang = 'en';

async function loadLanguage(lang) {
  if (translations[lang]) return translations[lang];
  
  try {
    const response = await fetch(`/static/translations/${lang}.json`);
    if (!response.ok) throw new Error('Failed to load translations');
    const data = await response.json();
    translations[lang] = data;
    return data;
  } catch (error) {
    console.error('Error loading translations:', error);
    return translations['en'] || {};
  }
}

function applyTranslations(dictionary) {
  document.documentElement.lang = currentLang;
  document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  
  // Add smooth language transition
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const value = key.split('.').reduce((obj, part) => obj && obj[part], dictionary);
      if (value) el.textContent = value;
    });
    document.body.style.opacity = '1';
  }, 300);
}

export async function setLanguage(lang) {
  currentLang = lang;
  const dict = await loadLanguage(lang);
  applyTranslations(dict);
}

export function initI18n(defaultLang = 'en') {
  const switcher = document.getElementById('language-switcher');
  if (!switcher) return;

  switcher.value = defaultLang;
  setLanguage(defaultLang);
}