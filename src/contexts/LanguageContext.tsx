import { createContext, useContext, useState, type ReactNode } from "react";

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

  // Hero Section
  "hero.available": { es: "Ya disponible", en: "Available Now" },
  "hero.description": { 
    es: "Controla a un pequeño celular en una carrera constante contra el tiempo y su propia batería. Sobrevive a obstáculos y mantente encendido.", 
    en: "Control a small cell phone in a constant race against time and its own battery. Survive obstacles and stay powered up." 
  },
  "hero.buy": { es: "Comprar", en: "Buy Now" },
  "hero.trailer": { es: "Ver el tráiler", en: "Watch Trailer" },

  // Story Section
  "story.title": { es: "Sobre Low Battery", en: "About Low Battery" },
  "story.tagline": { es: "\"Cada salto consume energía. Cada decisión importa.\"", en: "\"Every jump consumes energy. Every decision matters.\"" },
  "story.whatIs": { es: "¿Qué es Low Battery?", en: "What is Low Battery?" },
  "story.desc1": { 
    es: "Low Battery es un videojuego auto-runner 2D donde controlas un pequeño celular atrapado en una carrera constante contra el tiempo… y contra su propia batería.",
    en: "Low Battery is a 2D auto-runner video game where you control a small cell phone caught in a constant race against time… and its own battery."
  },
  "story.desc2": { 
    es: "Tu misión parece simple: sobrevivir. Pero entre notificaciones hostiles, obstáculos absurdos y un entorno cada vez más caótico, mantenerte encendido no será tan fácil.",
    en: "Your mission seems simple: survive. But between hostile notifications, absurd obstacles, and an increasingly chaotic environment, staying powered on won't be that easy."
  },
  "story.experience": { es: "Experiencia de juego", en: "Gameplay Experience" },
  "story.availableOn": { es: "Disponible en", en: "Available on" },
  "story.exp.1": { es: "Movimiento automático", en: "Auto-movement" },
  "story.exp.2": { es: "Saltos y doble salto", en: "Jump and double jump" },
  "story.exp.3": { es: "Gestión de batería en tiempo real", en: "Real-time battery management" },
  "story.exp.4": { es: "Obstáculos dinámicos", en: "Dynamic obstacles" },
  "story.exp.5": { es: "Retroalimentación visual y sonora", en: "Visual and sound feedback" },
  "story.exp.6": { es: "Sistema estratégico de power-ups", en: "Strategic power-up system" },

  // Features Section
  "features.title": { es: "Funciones de Juego", en: "Game Features" },
  "features.tagline": { es: "\"Tu peor enemigo no es el entorno… es el tiempo.\"", en: "\"Your worst enemy isn't the environment… it's time.\"" },
  "features.f1.title": { es: "Vista Tutorial", en: "Tutorial View" },
  "features.f1.desc": { 
    es: "Aprende los controles básicos y familiarízate con el ritmo del juego. Una intro pensada para que sepas exactamente cómo sobrevivir antes del apagón.",
    en: "Learn the basic controls and familiarize yourself with the rhythm of the game. An intro designed so you know exactly how to survive before the blackout."
  },
  "features.f2.title": { es: "Daño y Notificaciones", en: "Damage and Notifications" },
  "features.f2.desc": { 
    es: "Las notificaciones aparecen sin aviso y los objetos más simples se convierten en amenazas. Cada choque drena tu batería más rápido.",
    en: "Notifications appear without warning and the simplest objects become threats. Each collision drains your battery faster."
  },
  "features.f3.title": { es: "Sonido y Feedback", en: "Sound and Feedback" },
  "features.f3.desc": { 
     es: "Una capa sonora pensada para amplificar la tensión: cada efecto te avisa de un peligro, un power-up o el siguiente segundo perdido.",
     en: "A sound layer designed to amplify tension: each effect warns you of a danger, a power-up, or the next second lost."
   },

   // Champions Section
   "champ.eyebrow": { es: "04 · Personaje principal", en: "04 · Main Character" },
   "champ.title": { es: "Conoce a Low Battery", en: "Meet Low Battery" },
   "champ.traits": { 
     es: "Pequeño. Resistente. Siempre al límite.", 
     en: "Small. Resilient. Always on the edge." 
   },
   "champ.desc": { 
     es: "Un celular expresivo con zapatillas, una batería casi agotada y más determinación de la que cualquiera esperaría. Aunque parezca frágil, Low Battery nunca deja de avanzar.",
     en: "An expressive cell phone with sneakers, an almost empty battery, and more determination than anyone would expect. Though he looks fragile, Low Battery never stops moving forward."
   },
   "champ.skills": { es: "Habilidades", en: "Skills" },
   "champ.quote": { es: "\"No pienso apagarme todavía.\"", en: "\"I'm not shutting down yet.\"" },
   "champ.s1.name": { es: "Salto Rápido", en: "Quick Jump" },
   "champ.s1.desc": { es: "Reacciones inmediatas para esquivar lo inesperado.", en: "Immediate reactions to dodge the unexpected." },
   "champ.s2.name": { es: "Doble Salto", en: "Double Jump" },
   "champ.s2.desc": { es: "Una segunda oportunidad en pleno aire.", en: "A second chance in mid-air." },
   "champ.s3.name": { es: "Resistencia Temporal", en: "Temporal Resistance" },
   "champ.s3.desc": { es: "Aguanta unos segundos extra cuando todo se cae.", en: "Hold on for a few extra seconds when everything falls apart." },
   "champ.s4.name": { es: "Recolección de Energía", en: "Energy Gathering" },
   "champ.s4.desc": { es: "Aprovecha cada power-up del entorno.", en: "Take advantage of every power-up in the environment." },

   // Power-ups
   "power.eyebrow": { es: "05 · Sistema de Power-ups", en: "05 · Power-up System" },
   "power.title": { es: "Cualquier ayuda importa", en: "Any help matters" },
   "power.desc": { 
     es: "Cuando la batería está a punto de llegar a cero, descubre distintos power-ups repartidos por el escenario y aprovéchalos estratégicamente para sobrevivir unos segundos más.",
     en: "When the battery is about to reach zero, discover different power-ups scattered across the stage and use them strategically to survive a few more seconds."
   },
   "power.p1.name": { es: "Power Bank", en: "Power Bank" },
   "power.p1.value": { es: "+10% batería", en: "+10% battery" },
   "power.p1.desc": { es: "La salvación más valiosa del recorrido.", en: "The most valuable salvation on the path." },
   "power.p2.name": { es: "Modo Avión", en: "Airplane Mode" },
   "power.p2.value": { es: "+5% + escudo", en: "+5% + shield" },
   "power.p2.desc": { es: "Silencia el caos digital temporalmente.", en: "Temporarily silence the digital chaos." },
   "power.p3.name": { es: "Modo Oscuro", en: "Dark Mode" },
   "power.p3.value": { es: "+3% batería", en: "+3% battery" },
   "power.p3.desc": { es: "Reduce el drenaje energético.", en: "Reduces energy drain." },
   "power.p4.name": { es: "Panel", en: "Solar Panel" },
   "power.p4.value": { es: "+8% batería", en: "+8% battery" },
   "power.p4.desc": { es: "Absorbe energía del entorno (solo exteriores).", en: "Absorbs energy from the environment (outdoors only)." },
   "power.p5.name": { es: "Banana", en: "Banana" },
   "power.p5.value": { es: "+2% batería", en: "+2% battery" },
   "power.p5.desc": { es: "Nadie sabe por qué… pero funciona.", en: "No one knows why… but it works." },
   "power.p6.name": { es: "Flor Energética", en: "Energy Flower" },
   "power.p6.value": { es: "Energía especial", en: "Special Energy" },
   "power.p6.desc": { es: "Esperanza y recuperación en el caos.", en: "Hope and recovery in the chaos." },
   "power.quote": { es: "\"No todos los objetos son peligrosos.\"", en: "\"Not all objects are dangerous.\"" },

   // Studio Section
   "studio.builtWith": { es: "Desarrollado con Unity", en: "Built with Unity" },
   "studio.title": { es: "Equipo de Desarrollo", en: "Development Team" },
   "studio.desc": { 
     es: "Un proyecto desarrollado desde el diseño interactivo, la narrativa visual y la experiencia de usuario.",
     en: "A project developed from interactive design, visual narrative, and user experience."
   },
   "studio.explore": { es: "Explorar", en: "Explore" },
   "studio.role.web": { es: "Desarrollo web y UI/UX", en: "Web Development & UI/UX" },
   "studio.role.research": { es: "Investigación UX/UI y mapa mental", en: "UX/UI Research & Mind Mapping" },
   "studio.role.multimedia": { es: "Diseño multimedia y recursos visuales", en: "Multimedia Design & Visual Assets" },
   "studio.role.narrative": { es: "Diseño narrativo y documentación", en: "Narrative Design & Documentation" },
   "studio.role.delivery": { es: "Integración final y entrega", en: "Final Integration & Delivery" },

  // Gallery Section
  "gallery.title": { es: "Galería", en: "Gallery" },
  "gallery.eyebrow": { es: "06 · Multimedia", en: "06 · Multimedia" },
  "gallery.tagline": { es: "Explora el universo de Low Battery.", en: "Explore the Low Battery universe." },
  "gallery.quote": { es: "\"Cada versión acercó más al juego final.\"", en: "\"Each version brought us closer to the final game.\"" },
  "gallery.i1.tag": { es: "Gameplay", en: "Gameplay" },
  "gallery.i1.title": { es: "En acción", en: "In action" },
  "gallery.i1.desc": { es: "Captura del recorrido y mecánicas en tiempo real.", en: "Capture of the path and mechanics in real time." },
  "gallery.i2.tag": { es: "Concept Art", en: "Concept Art" },
  "gallery.i2.title": { es: "Visión inicial", en: "Initial vision" },
  "gallery.i2.desc": { es: "Bocetos y referencias del universo Low Battery.", en: "Sketches and references of the Low Battery universe." },
  "gallery.i3.tag": { es: "Power-ups", en: "Power-ups" },
  "gallery.i3.title": { es: "Objetos clave", en: "Key objects" },
  "gallery.i3.desc": { es: "Diseños de los recursos que te mantienen encendido.", en: "Designs of the resources that keep you powered on." },
  "gallery.i4.tag": { es: "HUD", en: "HUD" },
  "gallery.i4.title": { es: "Interfaz mínima", en: "Minimal interface" },
  "gallery.i4.desc": { es: "Indicadores claros sin saturar la pantalla.", en: "Clear indicators without cluttering the screen." },
  "gallery.i5.tag": { es: "Sistema audiovisual", en: "Audiovisual system" },
  "gallery.i5.title": { es: "Sonido y feedback", en: "Sound and feedback" },
  "gallery.i5.desc": { es: "Capas de sonido que amplifican la tensión.", en: "Sound layers that amplify the tension." },
  "gallery.i6.tag": { es: "Animaciones", en: "Animations" },
  "gallery.i6.title": { es: "Desarrollo visual", en: "Visual development" },
  "gallery.i6.desc": { es: "Evolución de los movimientos del personaje.", en: "Evolution of character movements." },

  // Demo Section
  "demo.eyebrow": { es: "09 · Demo Jugable", en: "09 · Playable Demo" },
  "demo.title": { es: "¿Cuánto puedes durar?", en: "How long can you last?" },
  "demo.desc": { es: "Pon a prueba tus reflejos, administra tu batería y descubre si eres capaz de llegar al cargador antes del apagón final.", en: "Test your reflexes, manage your battery, and discover if you can reach the charger before the final blackout." },
  "demo.play": { es: "Jugar Demo", en: "Play Demo" },
  "demo.headphones": { es: "Recomendado jugar con audífonos.", en: "Recommended to play with headphones." },
  "demo.c1.key": { es: "Barra espaciadora", en: "Spacebar" },
  "demo.c1.action": { es: "Saltar", en: "Jump" },
  "demo.c2.key": { es: "Doble salto", en: "Double jump" },
  "demo.c2.action": { es: "Disponible en niveles avanzados", en: "Available in advanced levels" },
  "demo.c3.key": { es: "Power-ups", en: "Power-ups" },
  "demo.c3.action": { es: "Recógelos para recuperar energía", en: "Collect them to recover energy" },

  // Call to Action Section (OtherGames)
  "cta.eyebrow": { es: "Call to action", en: "Call to action" },
  "cta.title": { es: "No dejes que la batería llegue a cero", en: "Don't let the battery reach zero" },
  "cta.i1": { es: "Cada salto importa.", en: "Every jump matters." },
  "cta.i2": { es: "Cada segundo cuenta.", en: "Every second counts." },
  "cta.i3": { es: "Cada error consume energía.", en: "Every mistake consumes energy." },
  "cta.play": { es: "Jugar Ahora", en: "Play Now" },
  "cta.devices": { es: "Diseñado para móviles, tablets y computadores.", en: "Designed for mobiles, tablets, and computers." },

  // Newsletter Form
  "news.email": { es: "Correo electrónico", en: "Email address" },
  "news.birthdate": { es: "Fecha de nacimiento", en: "Birth date" },
  "news.subscribe": { es: "Suscribirse", en: "Subscribe" },
  "news.placeholder": { es: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", en: "Stay updated with the latest news and development updates." },
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
