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