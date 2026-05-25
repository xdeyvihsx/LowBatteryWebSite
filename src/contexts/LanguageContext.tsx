import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, { es: string; en: string }>;

const dict: Dict = {
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.story": { es: "Historia", en: "Story" },
  "nav.features": { es: "Características", en: "Features" },
  "nav.character": { es: "Personaje", en: "Character" },
  "nav.gallery": { es: "Galería", en: "Gallery" },
  "nav.demo": { es: "Demo", en: "Demo" },
  "nav.team": { es: "Equipo", en: "Team" },
  "lang.toggle": { es: "EN", en: "ES" },

  "news.eyebrow": { es: "08 · Proceso de desarrollo", en: "08 · Development process" },
  "news.title": { es: "Del prototipo a la supervivencia", en: "From prototype to survival" },
  "news.intro": {
    es: "El desarrollo de Low Battery evolucionó mediante procesos de iteración enfocados en mejorar la experiencia del jugador, la claridad visual y la coherencia del gameplay.",
    en: "Low Battery evolved through iteration cycles focused on improving player experience, visual clarity, and gameplay coherence.",
  },
  "news.improvements": { es: "Mejoras implementadas", en: "Implemented improvements" },
  "news.i1": { es: "Sistema de onboarding", en: "Onboarding system" },
  "news.i2": { es: "HUD funcional", en: "Functional HUD" },
  "news.i3": { es: "Obstáculos balanceados", en: "Balanced obstacles" },
  "news.i4": { es: "Retroalimentación sonora", en: "Sound feedback" },
  "news.i5": { es: "Optimización visual", en: "Visual optimization" },
  "news.i6": { es: "Power-ups interactivos", en: "Interactive power-ups" },
  "news.i7": { es: "Corrección de errores", en: "Bug fixes" },
  "news.quote": {
    es: "“El juego evolucionó igual que el jugador: sobreviviendo.”",
    en: "“The game evolved like the player: by surviving.”",
  },
  "news.envTitle": { es: "Dirección visual", en: "Visual direction" },
  "news.env": {
    es: "Estética indie · Iluminación tenue · Colores fríos y neón · Interfaz minimalista · Diseño cinematográfico.",
    en: "Indie aesthetic · Dim lighting · Cold and neon colors · Minimalist interface · Cinematic design.",
  },

  "footer.rights": {
    es: "© 2026 Low Battery. Proyecto académico desarrollado con Unity. Todos los derechos reservados.",
    en: "© 2026 Low Battery. Academic project built with Unity. All rights reserved.",
  },
  "footer.tagline": {
    es: "Tu batería no durará para siempre.",
    en: "Your battery won't last forever.",
  },
};

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string }>({
  lang: "es",
  setLang: () => {},
  t: (k) => k,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");
  const t = (k: string) => dict[k]?.[lang] ?? k;
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
};

export const useLang = () => useContext(Ctx);
