import { useSelector } from 'react-redux'
import SummaryCard from '../components/SummaryCard'
import {
  getBalance,
  getTotalExpenses,
  getTotalIncome,
  formatCurrency
} from '../utils/utils.js'

function OverviewSection() {
  const transactions = useSelector((state) => state.finance.transactions)

  const totalIncome = getTotalIncome(transactions)
  const totalExpenses = getTotalExpenses(transactions)
  const balance = getBalance(transactions)
  const savings = totalIncome - totalExpenses

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <SummaryCard title="Total Balance" value={formatCurrency(balance)} />
      <SummaryCard title="Income" value={formatCurrency(totalIncome)} />
      <SummaryCard title="Expenses" value={formatCurrency(totalExpenses)} />
      <SummaryCard title="Net Savings" value={formatCurrency(savings)} />
    </section>
  )
}

export default OverviewSection