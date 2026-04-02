export function filterAndSortTransactions({
  transactions,
  searchTerm,
  selectedType,
  selectedCategory,
  sortBy,
}) {
  let result = [...transactions]

  if (searchTerm) {
    result = result.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  if (selectedType !== 'all') {
    result = result.filter((item) => item.type === selectedType)
  }

  if (selectedCategory !== 'all') {
    result = result.filter((item) => item.category === selectedCategory)
  }

  if (sortBy === 'latest') {
    result.sort((a, b) => new Date(b.date) - new Date(a.date))
  }

  if (sortBy === 'oldest') {
    result.sort((a, b) => new Date(a.date) - new Date(b.date))
  }

  if (sortBy === 'amount-high') {
    result.sort((a, b) => b.amount - a.amount)
  }

  if (sortBy === 'amount-low') {
    result.sort((a, b) => a.amount - b.amount)
  }

  return result
}