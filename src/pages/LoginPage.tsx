import { CalendarClock, Lock, Mail } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"

export default function LoginPage() {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <section className="grid w-full max-w-5xl overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-950/10 lg:grid-cols-[1fr_1.1fr]">
        <div className="bg-cyan-700 p-8 text-white">
          <CalendarClock className="h-11 w-11" />
          <h1 className="mt-8 text-3xl font-bold">Medora Yönetim Paneli</h1>
          <p className="mt-3 max-w-sm text-cyan-50">
            Doktor takvimlerini, randevu taleplerini ve klinik bildirimlerini
            tek bir odaklı çalışma alanından yönetin.
          </p>
          <div className="mt-10 grid gap-3 text-sm text-cyan-50">
            <span>Doktora göre gruplanmış günlük sıra</span>
            <span>Hızlı randevu durumu güncellemeleri</span>
            <span>Haftalık takvim görünürlüğü</span>
          </div>
        </div>
        <form
          className="p-8"
          onSubmit={(event) => {
            event.preventDefault()
            navigate("/dashboard")
          }}
        >
          <h2 className="text-2xl font-bold text-slate-950">Tekrar hoş geldiniz</h2>
          <p className="mt-1 text-sm text-slate-500">
            Arka uç simüle edildiği için herhangi bir e-posta ve parola kullanabilirsiniz.
          </p>
          <label className="mt-8 block text-sm font-semibold text-slate-700">
            E-posta
            <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2">
              <Mail className="h-5 w-5 text-slate-400" />
              <input
                required
                className="w-full outline-none"
                placeholder="admin@medora.test"
                type="email"
              />
            </div>
          </label>
          <label className="mt-4 block text-sm font-semibold text-slate-700">
            Parola
            <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2">
              <Lock className="h-5 w-5 text-slate-400" />
              <input
                required
                className="w-full outline-none"
                placeholder="••••••••"
                type="password"
              />
            </div>
          </label>
          <Button className="mt-6 w-full" type="submit">
            Giriş yap
          </Button>
          <p className="mt-5 text-center text-sm text-slate-500">
            Hesabınız yok mu?{" "}
            <Link className="font-semibold text-cyan-700" to="/register">
              Kaydol
            </Link>
          </p>
        </form>
      </section>
    </main>
  )
}
