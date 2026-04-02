function InsightCard({ title, value, description }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <h3 className="mt-2 text-xl font-bold text-slate-900">{value}</h3>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
  )
}

export default InsightCard