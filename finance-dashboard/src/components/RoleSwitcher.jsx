import { useDispatch, useSelector } from 'react-redux'
import { setRole } from '../store/slices/financeSlice'

function RoleSwitcher() {
  const dispatch = useDispatch()
  const role = useSelector((state) => state.finance.role)

  return (
    <div className="flex items-center gap-3">
      <label className="text-sm font-medium text-slate-600 dark:text-slate-300">
        Role
      </label>

      <select
        value={role}
        onChange={(e) => dispatch(setRole(e.target.value))}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  )
}

export default RoleSwitcher