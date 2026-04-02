import { formatCurrency } from '../utils/formatCurrency'

function TransactionTable({ transactions, role }) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-sm dark:bg-slate-900">
      <table className="min-w-full text-left">
        <thead className="border-b border-slate-200 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
          <tr>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Amount</th>
            {role === 'admin' ? <th className="px-4 py-3">Actions</th> : null}
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
            <tr
              key={item.id}
              className="border-b border-slate-100 text-sm dark:border-slate-800"
            >
              <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-100">
                {item.title}
              </td>
              <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                {item.date}
              </td>
              <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                {item.category}
              </td>
              <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                {item.type}
              </td>
              <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
                {formatCurrency(item.amount)}
              </td>

              {role === 'admin' ? (
                <td className="px-4 py-3">
                  <button className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    Edit
                  </button>
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionTable