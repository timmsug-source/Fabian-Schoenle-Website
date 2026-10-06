import CalendlyEinbettung from '@/components/ui/CalendlyEinbettung'

/**
 * Abschluss der Werbelandingpage: der Kalender, direkt auf der Seite.
 *
 * Kein Verweis in einen neuen Tab mehr: Jeder Tabwechsel zwischen Entschluss
 * und Termin kostet Buchungen. Geladen wird Calendly trotzdem erst auf Klick,
 * mit demselben Datenschutzhinweis wie auf der Hauptseite.
 *
 * Bewusst ohne Argumente daneben: Was die Analyse bringt, steht weiter oben
 * schon. Hier zaehlt nur noch der Termin.
 */
export default function LandingTermin({ id }: { id?: string }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24 scroll-mt-8">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
        <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-5" style={{ color: '#E6E8EB' }}>
          Such dir deinen Termin aus
        </h2>
        <p className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#A6B0BA' }}>
          Du siehst meine freien Zeiten und buchst in unter einer Minute. Die Bestätigung kommt
          sofort per E-Mail.
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(201,168,76,0.3)', boxShadow: '0 0 34px rgba(201,168,76,0.12)' }}>
        <CalendlyEinbettung />
      </div>
    </section>
  )
}
