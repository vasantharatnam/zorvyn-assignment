import { useDispatch, useSelector } from 'react-redux'
import { setRole } from '../store/slices/financeSlice'

function RoleSwitcher() {
  const dispatch = useDispatch()
  const role = useSelector((state) => state.finance.role)

  return (
    <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-3 py-2 dark:bg-slate-800">
      <span className="text-sm font-semibold text-slate-800 dark:text-white">
        Role
      </span>

      <select
        value={role}
        onChange={(e) => dispatch(setRole(e.target.value))}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900 outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-white"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  )
}

export default RoleSwitcher