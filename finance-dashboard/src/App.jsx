import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import OverviewSection from './sections/OverviewSection'
import ChartsSection from './sections/ChartsSection'
import InsightsSection from './sections/InsightsSection'
import TransactionsSection from './sections/TransactionsSection'

function App() {
  const theme = useSelector((state) => state.finance.theme)

  useEffect(() => {
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="min-h-screen bg-slate-50 transition-colors dark:bg-slate-950">
      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">
        <Header />

        <div className="space-y-6">
          <OverviewSection />
          <ChartsSection />
          <InsightsSection />
          <TransactionsSection />
        </div>
      </main>
    </div>
  )
}

export default App