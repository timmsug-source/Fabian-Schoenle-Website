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
      <h2 className="text-3xl md:text-5xl font-bold font-barlow text-dark mb-12">
        {headline}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full font-inter border-collapse">
          <thead>
            <tr className="border-b border-mid">
              <th className="text-left py-3 pr-6 text-sm font-semibold uppercase tracking-widest text-gray">
                Kriterium
              </th>
              <th className="text-left py-3 pr-6 text-sm font-semibold uppercase tracking-widest text-gray">
                Standard-Coaching
              </th>
              <th className="text-left py-3 text-sm font-semibold uppercase tracking-widest text-accent">
                FS-Performance
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-mid">
                <td className="py-4 pr-6 text-text font-semibold">{row.criterion}</td>
                <td className="py-4 pr-6 text-gray">{row.standard}</td>
                <td className="py-4 text-text">{row.fsPerformance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
