/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Das YouTube-Vorschaubild wurde bisher mit `unoptimized` direkt im Browser
    // von img.youtube.com geladen — dabei geht bei jedem Seitenaufruf die
    // IP-Adresse des Besuchers an Google, ohne dass er etwas angeklickt hat.
    // Ueber remotePatterns holt der eigene Server das Bild und liefert es von
    // der eigenen Domain aus. Damit entfaellt der Drittanbieter-Aufruf und
    // nebenbei wird das Bild optimiert.
    remotePatterns: [
      { protocol: 'https', hostname: 'img.youtube.com', pathname: '/vi/**' },
    ],
  },
  async redirects() {
    return [
      // Die Werbeseite hiess frueher /danke2. Bestehende Anzeigen und
      // geteilte Links sollen weiter ankommen statt auf einer 404.
      { source: '/danke2', destination: '/kostenloses-video', permanent: true },
      // Fabian zieht von Karlsruhe in die Naehe von Frankfurt. Die alte Seite
      // ist zur Frankfurter geworden, Links und Rankings sollen mitziehen.
      { source: '/ernaehrungsberatung-karlsruhe', destination: '/ernaehrungsberatung-frankfurt', permanent: true },
    ];
  },
};

export default nextConfig;
