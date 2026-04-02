import { useSelector } from 'react-redux'
import FiltersBar from '../components/FiltersBar'
import TransactionTable from '../components/TransactionTable'
import EmptyState from '../components/EmptyState'
import { filterAndSortTransactions } from '../utils/filterTransactions'

function TransactionsSection() {
  const {
    transactions,
    role,
    searchTerm,
    selectedType,
    selectedCategory,
    sortBy,
  } = useSelector((state) => state.finance)

  const filteredTransactions = filterAndSortTransactions({
    transactions,
    searchTerm,
    selectedType,
    selectedCategory,
    sortBy,
  })

  const categories = [...new Set(transactions.map((item) => item.category))]

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <div>
         <h2 className="text-xl font-bold text-slate-900 dark:text-white">Transactions</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Search, filter, and explore your transaction history
           </p>
        </div>

        {role === 'admin' ? (
          <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-slate-900">
            Add Transaction
          </button>
        ) : null}
      </div>

      <FiltersBar categories={categories} />

      {filteredTransactions.length === 0 ? (
        <EmptyState
          title="No transactions found"
          description="Try changing your filters or search term."
        />
      ) : (
        <TransactionTable transactions={filteredTransactions} role={role} />
      )}
    </section>
  )
}

export default TransactionsSection