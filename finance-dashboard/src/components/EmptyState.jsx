function EmptyState({ title, description }) {
  return (
    <div className="rounded-2xl bg-white p-10 text-center shadow-sm dark:bg-slate-900">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </div>
  )
}

export default EmptyState