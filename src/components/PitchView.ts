import { CVData, LanguageCode } from '../types';

const translations = {
    fr: { title: 'Pitch Téléphonique', empty: 'Aucun pitch défini pour ce profil.', instruction: 'Lisez ce texte lors de votre premier appel avec le recruteur.' },
    en: { title: 'Phone Pitch', empty: 'No pitch defined for this profile.', instruction: 'Read this text during your first call with the recruiter.' },
    pl: { title: 'Pitch Telefoniczny', empty: 'Brak zdefiniowanego pitcha.', instruction: 'Przeczytaj ten tekst podczas pierwszej rozmowy.' },
    de: { title: 'Telefon-Pitch', empty: 'Kein Pitch definiert.', instruction: 'Lesen Sie diesen Text beim ersten Telefonat.' }
};

export const renderPitchView = (data: CVData, lang: LanguageCode): HTMLElement => {
  const element = document.createElement('div');
  element.id = 'pitch-view';
  const t = translations[lang] || translations.en;

  element.innerHTML = `
    <div style="max-width: 800px; margin: 2rem auto; padding: 2.5rem; background-color: var(--cv-background); border-radius: 8px; box-shadow: 0 4px 12px var(--shadow-color);">
        <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem; color: var(--heading-color); text-align: center;">${t.title}</h1>
        <p style="text-align: center; color: var(--accent-color); margin-bottom: 2rem; font-size: 1rem;">${t.instruction}</p>
        <div style="font-size: 1.35rem; line-height: 1.8; color: var(--text-color); font-family: 'Inter', sans-serif;">
            ${data.personalInfo.pitch 
                ? `<p>${data.personalInfo.pitch}</p>` 
                : `<p style="color: #888; text-align: center;">${t.empty}</p>`}
        </div>
    </div>
  `;
  return element;
};
