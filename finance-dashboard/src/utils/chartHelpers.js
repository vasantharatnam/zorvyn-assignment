export function getMonthlyChartData(transactions) {
  const monthlyMap = {}

  transactions.forEach((item) => {
    const month = new Date(item.date).toLocaleString('en-US', {
      month: 'short',
    })

    if (!monthlyMap[month]) {
      monthlyMap[month] = {
        month,
        income: 0,
        expense: 0,
      }
    }

    if (item.type === 'income') {
      monthlyMap[month].income += item.amount
    } else {
      monthlyMap[month].expense += item.amount
    }
  })

  return Object.values(monthlyMap)
}

export function getCategoryChartData(transactions) {
  const categoryMap = {}

  transactions
    .filter((item) => item.type === 'expense')
    .forEach((item) => {
      if (!categoryMap[item.category]) {
        categoryMap[item.category] = 0
      }

      categoryMap[item.category] += item.amount
    })

  return Object.entries(categoryMap).map(([name, value]) => ({
    name,
    value,
  }))
}