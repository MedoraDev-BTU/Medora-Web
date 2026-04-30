import { Building2, CalendarClock, Lock, Mail, User } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"

export default function RegisterPage() {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <form
        className="w-full max-w-xl rounded-lg border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/10"
        onSubmit={(event) => {
          event.preventDefault()
          navigate("/dashboard")
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-600 text-white">
            <CalendarClock className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-950">Create account</h1>
            <p className="text-sm text-slate-500">Set up a Medora admin user.</p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-semibold text-slate-700">
            Full name
            <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2">
              <User className="h-5 w-5 text-slate-400" />
              <input required className="w-full outline-none" />
            </div>
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Clinic
            <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2">
              <Building2 className="h-5 w-5 text-slate-400" />
              <input required className="w-full outline-none" />
            </div>
          </label>
          <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
            Email
            <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2">
              <Mail className="h-5 w-5 text-slate-400" />
              <input required className="w-full outline-none" type="email" />
            </div>
          </label>
          <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
            Password
            <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2">
              <Lock className="h-5 w-5 text-slate-400" />
              <input required className="w-full outline-none" type="password" />
            </div>
          </label>
        </div>
        <Button className="mt-6 w-full" type="submit">
          Register
        </Button>
        <p className="mt-5 text-center text-sm text-slate-500">
          Already registered?{" "}
          <Link className="font-semibold text-cyan-700" to="/login">
            Sign in
          </Link>
        </p>
      </form>
    </main>
  )
}
