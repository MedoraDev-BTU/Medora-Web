import {
  Building2,
  CalendarClock,
  FileUp,
  Lock,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"

export default function RegisterPage() {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <form
        className="w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/10"
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
            <h1 className="text-2xl font-bold text-slate-950">Hesap Oluştur</h1>
            <p className="text-sm text-slate-500">
              Medora klinik yönetici hesabınızı oluşturun.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-semibold text-slate-700">
            Ad Soyad
            <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 focus-within:border-cyan-500">
              <User className="h-5 w-5 text-slate-400" />
              <input
                required
                className="w-full outline-none"
                placeholder="Yönetici adı"
              />
            </div>
          </label>

          <label className="text-sm font-semibold text-slate-700">
            Klinik Adı
            <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 focus-within:border-cyan-500">
              <Building2 className="h-5 w-5 text-slate-400" />
              <input
                required
                className="w-full outline-none"
                placeholder="Medora Klinik"
              />
            </div>
          </label>

          <label className="text-sm font-semibold text-slate-700">
            E-posta
            <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 focus-within:border-cyan-500">
              <Mail className="h-5 w-5 text-slate-400" />
              <input
                required
                className="w-full outline-none"
                placeholder="klinik@medora.com"
                type="email"
              />
            </div>
          </label>

          <label className="text-sm font-semibold text-slate-700">
            Telefon
            <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 focus-within:border-cyan-500">
              <Phone className="h-5 w-5 text-slate-400" />
              <input
                required
                className="w-full outline-none"
                placeholder="+90 555 000 00 00"
                type="tel"
              />
            </div>
          </label>

          <label className="text-sm font-semibold text-slate-700">
            Şehir
            <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 focus-within:border-cyan-500">
              <MapPin className="h-5 w-5 text-slate-400" />
              <input
                required
                className="w-full outline-none"
                placeholder="İstanbul"
              />
            </div>
          </label>

          <label className="text-sm font-semibold text-slate-700">
            İlçe
            <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 focus-within:border-cyan-500">
              <MapPin className="h-5 w-5 text-slate-400" />
              <input
                required
                className="w-full outline-none"
                placeholder="Kadıköy"
              />
            </div>
          </label>

          <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
            Açık Adres
            <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 focus-within:border-cyan-500">
              <MapPin className="h-5 w-5 text-slate-400" />
              <input
                required
                className="w-full outline-none"
                placeholder="Mahalle, cadde, sokak ve bina numarası"
              />
            </div>
          </label>

          <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
            Belge Yükleme
            <div className="mt-2 rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-5 transition hover:border-cyan-300 hover:bg-cyan-50/40">
              <div className="flex flex-col items-center justify-center text-center">
                <FileUp className="h-8 w-8 text-cyan-600" />
                <p className="mt-2 text-sm font-semibold text-slate-700">
                  Klinik ruhsatı veya yetki belgesi yükleyin
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  PDF, PNG veya JPG dosyası kabul edilir.
                </p>
                <input
                  required
                  accept=".pdf,.png,.jpg,.jpeg"
                  className="mt-4 w-full max-w-sm rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-slate-600 file:mr-3 file:rounded-md file:border-0 file:bg-cyan-600 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-white"
                  type="file"
                />
              </div>
            </div>
          </label>

          <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
            Parola
            <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 focus-within:border-cyan-500">
              <Lock className="h-5 w-5 text-slate-400" />
              <input
                required
                className="w-full outline-none"
                placeholder="En az 8 karakter"
                type="password"
                minLength={8}
              />
            </div>
          </label>
        </div>

        <Button className="mt-6 w-full" type="submit">
          Kaydol
        </Button>
        <p className="mt-5 text-center text-sm text-slate-500">
          Zaten kayıtlı mısınız?{" "}
          <Link className="font-semibold text-cyan-700" to="/login">
            Giriş yap
          </Link>
        </p>
      </form>
    </main>
  )
}
