
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

       const link = document.createElement('a')
       link.href = url
       link.setAttribute('download', filename)
       document.body.appendChild(link)
       link.click()
       document.body.removeChild(link)

       URL.revokeObjectURL(url)
}