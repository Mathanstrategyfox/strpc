interface SpecRow {
  label: string
  value: string
}

interface SpecsTableProps {
  title?: string
  rows: SpecRow[]
}

export default function SpecsTable({ title, rows }: SpecsTableProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100">
      {title && (
        <div className="gradient-bg px-6 py-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest">{title}</h3>
        </div>
      )}
      <div className="divide-y divide-gray-100">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex items-start gap-4 px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F7]'}`}
          >
            <div className="w-48 flex-shrink-0">
              <span className="text-sm font-semibold text-[#1D1D1F]">{row.label}</span>
            </div>
            <div className="flex-1">
              <span className="text-sm text-[#6E6E73]">{row.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
