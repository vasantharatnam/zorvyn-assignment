import { Moon, Sun } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../store/slices/financeSlice'

function ThemeToggle() {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.finance.theme)

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  )
}

export default ThemeToggle