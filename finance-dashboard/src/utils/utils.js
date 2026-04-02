export function getMonthlyChartData(transactions) {
  const monthlyMap = {}

  transactions.forEach((item) => {
   
     const date = new Date(item.date)

     const key = `${date.getFullYear()}-${date.getMonth()}`
     const label = date.toLocaleString(
      'en-US', {
        month: 'short',
        year: 'numeric',
      }
     )



    if (!monthlyMap[key]) {
      monthlyMap[key] = {
        label,
        income: 0,
        expense: 0,
        timestamp: new Date(date.getFullYear(), date.getMonth(), 1).getTime(),
      }
    }

    if (item.type === 'income') {
      monthlyMap[key].income += item.amount
    } else {
      monthlyMap[key].expense += item.amount
    }
  })

  return Object.values(monthlyMap).sort(
    (a, b) => a.timestamp - b.timestamp
  )
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

export function stringToHslColor(str , saturation = 65 ,  lightness = 55) {
    let hash = 0;

    for(let i = 0 ; i < str.length ;  i++){
       hash  = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    
    const hue = Math.abs(hash) % 360
    return `hsl(${hue} , ${saturation}% , ${lightness}%)`
}


export function exportTransactionsToCsv(transactions , filename = 'transactions.csv') {
       if(!transactions || transactions.length === 0) {
         return;
       }

       const headers = ['ID', 'Title', 'Amount', 'Category' , 'Type' , 'Date']

       const rows = transactions.map((item) => [
            item.id,
            item.title,
            item.amount,
            item.category,
            item.type,
            item.date
       ])

       const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
       const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
       const url = URL.createObjectURL(blob)

       const uuid = crypto.randomUUID()
       const uniqueFilename = `${filename.replace('.csv', '')}_${uuid}.csv`

       const link = document.createElement('a')
       link.href = url
       link.setAttribute('download', uniqueFilename)
       document.body.appendChild(link)
       link.click()
       document.body.removeChild(link)

       URL.revokeObjectURL(url)
}

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


export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

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