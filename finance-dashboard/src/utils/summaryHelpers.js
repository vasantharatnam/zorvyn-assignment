export function getTotalIncome(transactions) {
  return transactions
    .filter((item) => item.type === 'income')
    .reduce((sum, item) => sum + item.amount, 0)
}

export function getTotalExpenses(transactions) {
  return transactions
    .filter((item) => item.type === 'expense')
    .reduce((sum, item) => sum + item.amount, 0)
}

export function getBalance(transactions) {
  return getTotalIncome(transactions) - getTotalExpenses(transactions)
}