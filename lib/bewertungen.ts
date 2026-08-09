/**
 * Screenshots echter Bewertungen — gemeinsame Quelle für Startseite (ErgebnisSection)
 * und Unterseiten (BewertungsGrid). Reihenfolge: neue Rezensionen mit dunklem
 * Hintergrund zuerst, danach die Google-Rezensionen.
 *
 * Der Alt-Text gehört bewusst neben die Datei und nicht in die Komponenten: Die
 * Bewertungen sind reine Bilder, ihr Inhalt ist sonst weder für Suchmaschinen noch
 * für Screenreader zugänglich. Jeder Text nennt Plattform, Verfasser und die
 * Kernaussage der Rezension — er beschreibt, was im Screenshot wirklich steht.
 */
export type Bewertung = { src: string; alt: string }

export const BEWERTUNGEN: Bewertung[] = [
  {
    src: '/images/FS-Rezension-Gregory.jpg',
    alt: 'LinkedIn-Empfehlung von Gregory Niagli: Jahresziel beim Abnehmen bereits zur Jahresmitte erreicht — ohne Hungern oder Fastenkuren.',
  },
  {
    src: '/images/FS-Rezension-Robert.jpg',
    alt: 'LinkedIn-Empfehlung von Robert Raschkov: individuell angepasstes Coaching, Ziele schnell erreicht und ohne Jo-Jo-Effekt gehalten.',
  },
  {
    src: '/images/FS-Rezension-Matthias.jpg',
    alt: 'LinkedIn-Empfehlung von Matthias Karlin: Körperfettreduktion bei gleichzeitigem Muskelerhalt, flexibel auch auf Geschäftsreisen.',
  },
  {
    src: '/images/FS-Rezension-Hans-Herbert.jpg',
    alt: 'Google-Rezension mit fünf Sternen von Hans Herbert Richard Müller: 15 kg in 90 Tagen abgenommen, deutlich mehr Energie und Fitness.',
  },
  {
    src: '/images/FS-Rezension-Trustpilot.jpg',
    alt: 'Trustpilot-Rezension mit fünf Sternen: 15 kg im 90-Tage-Coaching verloren und die volle Lebensenergie zurückgewonnen.',
  },
  {
    src: '/images/Bewertungen 2026-06-24 um 12.44.32.png',
    alt: 'Google-Rezension mit fünf Sternen von Sabine Greiter: 10 kg in drei Monaten verloren und das Wohlfühlgewicht erreicht.',
  },
  {
    src: '/images/Bewertungen 2026-06-24 um 12.45.57.png',
    alt: 'Google-Rezension mit fünf Sternen von F. Fechner: 13 kg in drei Monaten abgenommen und die Technik im Gym verbessert.',
  },
  {
    src: '/images/Bewertungen 2026-06-24 um 12.46.24.png',
    alt: 'Google-Rezension mit fünf Sternen von J. B.: deutlich strukturierteres Training und besser abgestimmte Ernährung.',
  },
  {
    src: '/images/Bewertungen 2026-06-24 um 12.47.39.png',
    alt: 'Google-Rezension mit fünf Sternen von Theodore J.: erkennt individuelle Defizite schnell, hilfreiches Technik-Feedback im Gym.',
  },
  {
    src: '/images/Bewertungen 2026-06-24 um 12.47.52.png',
    alt: 'Google-Rezension mit fünf Sternen von Robert Raschkov: präzise Tipps, die Ziele mit geringem Aufwand erreichbar machen.',
  },
  {
    src: '/images/Bewertungen 2026-06-24 um 12.48.33.png',
    alt: 'Google-Rezension mit fünf Sternen von Larisa Tiran: gesunde und genussvolle Ernährung mit individuell zugeschnittenen Rezepten.',
  },
  {
    src: '/images/Bewertungen 2026-06-24 um 12.48.47.png',
    alt: 'Google-Rezension mit fünf Sternen von Matthias Karlin: Körperfettreduktion bei Muskelerhalt, ohne Crashdiäten und Extremmaßnahmen.',
  },
  {
    src: '/images/Bewertungen 2026-06-24 um 12.48.57.png',
    alt: 'Google-Rezension mit fünf Sternen von Nathalie: individuelle Begleitung und viel über das eigene Ernährungsverhalten gelernt.',
  },
]
