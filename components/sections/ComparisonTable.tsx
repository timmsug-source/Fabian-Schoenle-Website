import SectionLabel from '@/components/ui/SectionLabel'

type ComparisonRow = {
  criterion: string
  standard: string
  fsPerformance: string
}

type ComparisonTableProps = {
  label?: string
  headline: string
  rows: ComparisonRow[]
}

export default function ComparisonTable({ label, headline, rows }: ComparisonTableProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      {label && (
        <div className="mb-4">
          <SectionLabel>{label}</SectionLabel>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold font-barlow mb-12" style={{ color: '#E6E8EB' }}>
        {headline}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full font-inter border-collapse">
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(201,168,76,0.25)' }}>
              <th className="text-left py-3 pr-6 text-sm font-semibold uppercase tracking-widest" style={{ color: '#7B8792' }}>
                Kriterium
              </th>
              <th className="text-left py-3 pr-6 text-sm font-semibold uppercase tracking-widest" style={{ color: '#7B8792' }}>
                Klassischer Ansatz
              </th>
              <th
                className="text-left py-3 text-sm font-semibold uppercase tracking-widest"
                style={{
                  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
                  backgroundSize: '100% 1.2em',
                  backgroundRepeat: 'repeat-y',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                FS Performance Lab
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
                <td className="py-4 pr-6 font-semibold" style={{ color: '#E6E8EB' }}>{row.criterion}</td>
                <td className="py-4 pr-6" style={{ color: '#7B8792' }}>{row.standard}</td>
                <td className="py-4" style={{ color: '#E6E8EB' }}>{row.fsPerformance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
