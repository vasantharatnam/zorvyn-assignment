function SummaryCard({ title, value, subtitle }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
      <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
      <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
        {value}
      </h3>
      {subtitle ? (
        <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default SummaryCard