import {
  Building2,
  CheckCircle2,
  FileText,
  Mail,
  MapPin,
  Phone,
  Save,
  ShieldCheck,
  UserCircle,
} from "lucide-react"
import { useState } from "react"
import Button from "../components/Button"
import PageHeader from "../components/PageHeader"

const initialProfile = {
  fullName: "Yönetici",
  role: "Operasyon masası",
  email: "yonetici@medora.test",
  phone: "+90 555 000 00 00",
  clinicName: "Medora Klinik",
  clinicEmail: "klinik@medora.com",
  clinicPhone: "+90 212 555 0100",
  location: "İstanbul, Türkiye",
  licenseDocument: "klinik-ruhsati.pdf",
}

export default function AdminProfilePage() {
  const [profile, setProfile] = useState(initialProfile)
  const [saved, setSaved] = useState(false)

  const updateProfile = (field: keyof typeof initialProfile, value: string) => {
    setSaved(false)
    setProfile((current) => ({ ...current, [field]: value }))
  }

  return (
    <>
      <PageHeader
        title="Profil"
        description="Yönetici hesabı ve klinik bilgilerinizi görüntüleyin ve güncelleyin."
      />

      <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
        <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-100 text-2xl font-bold text-cyan-700">
              YK
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-950">
              {profile.fullName}
            </h2>
            <p className="text-sm text-slate-500">{profile.role}</p>
          </div>

          <div className="mt-6 space-y-3 rounded-lg bg-slate-50 p-4 text-sm">
            <div className="flex items-center gap-3 text-slate-600">
              <ShieldCheck className="h-5 w-5 text-cyan-600" />
              <span>Aktif yönetici hesabı</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Building2 className="h-5 w-5 text-cyan-600" />
              <span>{profile.clinicName}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <FileText className="h-5 w-5 text-cyan-600" />
              <span>{profile.licenseDocument}</span>
            </div>
          </div>
        </aside>

        <form
          className="space-y-6"
          onSubmit={(event) => {
            event.preventDefault()
            setSaved(true)
          }}
        >
          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-lg bg-cyan-50 p-2 text-cyan-700">
                <UserCircle className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-bold text-slate-950">Hesap bilgileri</h2>
                <p className="text-sm text-slate-500">
                  Giriş yapan yöneticinin temel iletişim bilgileri.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">
                Ad Soyad
                <input
                  className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 font-normal text-slate-900 outline-none focus:border-cyan-500"
                  value={profile.fullName}
                  onChange={(event) => updateProfile("fullName", event.target.value)}
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Rol
                <input
                  className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 font-normal text-slate-900 outline-none focus:border-cyan-500"
                  value={profile.role}
                  onChange={(event) => updateProfile("role", event.target.value)}
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                E-posta
                <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 focus-within:border-cyan-500">
                  <Mail className="h-5 w-5 text-slate-400" />
                  <input
                    className="w-full font-normal text-slate-900 outline-none"
                    type="email"
                    value={profile.email}
                    onChange={(event) => updateProfile("email", event.target.value)}
                  />
                </div>
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Telefon
                <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 focus-within:border-cyan-500">
                  <Phone className="h-5 w-5 text-slate-400" />
                  <input
                    className="w-full font-normal text-slate-900 outline-none"
                    type="tel"
                    value={profile.phone}
                    onChange={(event) => updateProfile("phone", event.target.value)}
                  />
                </div>
              </label>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-lg bg-cyan-50 p-2 text-cyan-700">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-bold text-slate-950">Klinik bilgileri</h2>
                <p className="text-sm text-slate-500">
                  Panelde kullanılan klinik kimlik ve iletişim bilgileri.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">
                Klinik Adı
                <input
                  className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 font-normal text-slate-900 outline-none focus:border-cyan-500"
                  value={profile.clinicName}
                  onChange={(event) =>
                    updateProfile("clinicName", event.target.value)
                  }
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Klinik E-posta
                <input
                  className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 font-normal text-slate-900 outline-none focus:border-cyan-500"
                  type="email"
                  value={profile.clinicEmail}
                  onChange={(event) =>
                    updateProfile("clinicEmail", event.target.value)
                  }
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Klinik Telefon
                <input
                  className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 font-normal text-slate-900 outline-none focus:border-cyan-500"
                  type="tel"
                  value={profile.clinicPhone}
                  onChange={(event) =>
                    updateProfile("clinicPhone", event.target.value)
                  }
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Konum
                <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 focus-within:border-cyan-500">
                  <MapPin className="h-5 w-5 text-slate-400" />
                  <input
                    className="w-full font-normal text-slate-900 outline-none"
                    value={profile.location}
                    onChange={(event) =>
                      updateProfile("location", event.target.value)
                    }
                  />
                </div>
              </label>
              <label className="text-sm font-semibold text-slate-700 md:col-span-2">
                Belge
                <div className="mt-2 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 focus-within:border-cyan-500">
                  <FileText className="h-5 w-5 text-slate-400" />
                  <input
                    className="w-full font-normal text-slate-900 outline-none"
                    value={profile.licenseDocument}
                    onChange={(event) =>
                      updateProfile("licenseDocument", event.target.value)
                    }
                  />
                </div>
              </label>
            </div>
          </section>

          <div className="flex flex-col items-start justify-between gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
            <div className="min-h-6">
              {saved ? (
                <p className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  <CheckCircle2 className="h-5 w-5" />
                  Profil bilgileri güncellendi.
                </p>
              ) : (
                <p className="text-sm text-slate-500">
                  Değişiklikleri kaydetmek için bilgileri kontrol edin.
                </p>
              )}
            </div>
            <Button icon={<Save className="h-4 w-4" />} type="submit">
              Bilgileri Kaydet
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
