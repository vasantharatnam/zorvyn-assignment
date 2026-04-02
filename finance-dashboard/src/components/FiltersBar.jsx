import { useDispatch, useSelector } from 'react-redux'
import {
  setSearchTerm,
  setSelectedType,
  setSelectedCategory,
  setSortBy,
} from '../store/slices/financeSlice'

function FiltersBar({ categories }) {
  const dispatch = useDispatch()

  const { searchTerm, selectedType, selectedCategory, sortBy } = useSelector(
    (state) => state.finance
  )

  const inputClass =
    "rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-700 outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"

  return (
    <div className="mb-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        className={inputClass}
      />

      <select
        value={selectedType}
        onChange={(e) => dispatch(setSelectedType(e.target.value))}
        className={inputClass}
      >
        <option value="all">All Types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <select
        value={selectedCategory}
        onChange={(e) => dispatch(setSelectedCategory(e.target.value))}
        className={inputClass}
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        value={sortBy}
        onChange={(e) => dispatch(setSortBy(e.target.value))}
        className={inputClass}
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="amount-high">Amount High to Low</option>
        <option value="amount-low">Amount Low to High</option>
      </select>
    </div>
  )
}

export default FiltersBar