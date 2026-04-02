import { useSelector } from 'react-redux'
import InsightCard from '../components/InsightCard'
import { getHighestSpendingCategory , formatCurrency , getBalance } from '../utils/utils.js'

function InsightsSection() {
  const transactions = useSelector((state) => state.finance.transactions)

  const highestSpending = getHighestSpendingCategory(transactions)
  const balance = getBalance(transactions)

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <InsightCard
        title="Highest Spending Category"
        value={highestSpending.category}
        description={`You spent ${formatCurrency(highestSpending.amount)} in this category.`}
      />

      <InsightCard
        title="Net Balance Insight"
        value={formatCurrency(balance)}
        description="This shows the difference between your total income and expenses."
      />

      <InsightCard
        title="Quick Observation"
        value="Watch recurring expenses"
        description="Track categories like rent, food, and utilities to spot repeated spending."
      />
    </section>
  )
}

export default InsightsSection