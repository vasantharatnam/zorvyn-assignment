import RoleSwitcher from './RoleSwitcher'
import ThemeToggle from './ThemeToggle'

function Header() {
  return (
    <header className="mb-6 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Finance Dashboard</h1>
        <p className="text-sm text-slate-500">
          Track your income, expenses, and financial activity
        </p>
      </div>
      <ThemeToggle />
      <RoleSwitcher />
    </header>
  )
}

export default Header