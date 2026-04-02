export function getHighestSpendingCategory(transactions) {
  const expenseMap = {}

  transactions
    .filter((item) => item.type === 'expense')
    .forEach((item) => {
      if (!expenseMap[item.category]) {
        expenseMap[item.category] = 0
      }
      expenseMap[item.category] += item.amount
    })

  let highestCategory = 'N/A'
  let highestAmount = 0

  for (const category in expenseMap) {
    if (expenseMap[category] > highestAmount) {
      highestAmount = expenseMap[category]
      highestCategory = category
    }
  }

  return {
    category: highestCategory,
    amount: highestAmount,
  }
}