import { X } from "lucide-react"
import { useState } from "react"
import type { Doctor, DoctorFormValues } from "../types"
import Button from "./Button"

const dayOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

const emptyValues: DoctorFormValues = {
  name: "",
  specialty: "",
  phone: "",
  email: "",
  workingDays: ["Monday", "Tuesday", "Wednesday"],
  workingStartTime: "09:00",
  workingEndTime: "17:00",
  status: "active",
}

interface DoctorFormModalProps {
  doctor?: Doctor | null
  isOpen: boolean
  isSaving: boolean
  onClose: () => void
  onSubmit: (values: DoctorFormValues) => void
}

export default function DoctorFormModal({
  doctor,
  isOpen,
  isSaving,
  onClose,
  onSubmit,
}: DoctorFormModalProps) {
  const [values, setValues] = useState<DoctorFormValues>(() =>
    doctor
      ? {
          name: doctor.name,
          specialty: doctor.specialty,
          phone: doctor.phone,
          email: doctor.email,
          workingDays: doctor.workingDays,
          workingStartTime: doctor.workingStartTime,
          workingEndTime: doctor.workingEndTime,
          status: doctor.status,
        }
      : emptyValues,
  )

  if (!isOpen) return null

  const toggleDay = (day: string) => {
    setValues((current) => ({
      ...current,
      workingDays: current.workingDays.includes(day)
        ? current.workingDays.filter((item) => item !== day)
        : [...current.workingDays, day],
    }))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm">
      <form
        className="w-full max-w-2xl rounded-lg bg-white shadow-2xl shadow-slate-950/20"
        onSubmit={(event) => {
          event.preventDefault()
          onSubmit(values)
        }}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div>
            <h2 className="text-lg font-bold text-slate-950">
              {doctor ? "Edit doctor" : "Add doctor"}
            </h2>
            <p className="text-sm text-slate-500">Manage clinical availability.</p>
          </div>
          <button
            aria-label="Close modal"
            className="rounded-md p-2 text-slate-500 hover:bg-slate-100"
            type="button"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-4 px-6 py-5 sm:grid-cols-2">
          <label className="space-y-1 text-sm font-semibold text-slate-700">
            Doctor name
            <input
              required
              className="w-full rounded-md border border-slate-200 px-3 py-2 font-normal text-slate-900 outline-none focus:border-cyan-500"
              value={values.name}
              onChange={(event) =>
                setValues({ ...values, name: event.target.value })
              }
            />
          </label>
          <label className="space-y-1 text-sm font-semibold text-slate-700">
            Specialty
            <input
              required
              className="w-full rounded-md border border-slate-200 px-3 py-2 font-normal text-slate-900 outline-none focus:border-cyan-500"
              value={values.specialty}
              onChange={(event) =>
                setValues({ ...values, specialty: event.target.value })
              }
            />
          </label>
          <label className="space-y-1 text-sm font-semibold text-slate-700">
            Phone
            <input
              required
              className="w-full rounded-md border border-slate-200 px-3 py-2 font-normal text-slate-900 outline-none focus:border-cyan-500"
              value={values.phone}
              onChange={(event) =>
                setValues({ ...values, phone: event.target.value })
              }
            />
          </label>
          <label className="space-y-1 text-sm font-semibold text-slate-700">
            Email
            <input
              required
              type="email"
              className="w-full rounded-md border border-slate-200 px-3 py-2 font-normal text-slate-900 outline-none focus:border-cyan-500"
              value={values.email}
              onChange={(event) =>
                setValues({ ...values, email: event.target.value })
              }
            />
          </label>
          <label className="space-y-1 text-sm font-semibold text-slate-700">
            Start time
            <input
              required
              type="time"
              className="w-full rounded-md border border-slate-200 px-3 py-2 font-normal text-slate-900 outline-none focus:border-cyan-500"
              value={values.workingStartTime}
              onChange={(event) =>
                setValues({ ...values, workingStartTime: event.target.value })
              }
            />
          </label>
          <label className="space-y-1 text-sm font-semibold text-slate-700">
            End time
            <input
              required
              type="time"
              className="w-full rounded-md border border-slate-200 px-3 py-2 font-normal text-slate-900 outline-none focus:border-cyan-500"
              value={values.workingEndTime}
              onChange={(event) =>
                setValues({ ...values, workingEndTime: event.target.value })
              }
            />
          </label>
          <label className="space-y-1 text-sm font-semibold text-slate-700">
            Status
            <select
              className="w-full rounded-md border border-slate-200 px-3 py-2 font-normal text-slate-900 outline-none focus:border-cyan-500"
              value={values.status}
              onChange={(event) =>
                setValues({
                  ...values,
                  status: event.target.value as DoctorFormValues["status"],
                })
              }
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </label>
          <div className="space-y-2 sm:col-span-2">
            <p className="text-sm font-semibold text-slate-700">Working days</p>
            <div className="flex flex-wrap gap-2">
              {dayOptions.map((day) => (
                <button
                  key={day}
                  className={`rounded-full border px-3 py-1.5 text-sm font-semibold ${
                    values.workingDays.includes(day)
                      ? "border-cyan-300 bg-cyan-50 text-cyan-700"
                      : "border-slate-200 bg-white text-slate-600"
                  }`}
                  type="button"
                  onClick={() => toggleDay(day)}
                >
                  {day.slice(0, 3)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-4">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={isSaving || values.workingDays.length === 0} type="submit">
            {isSaving ? "Saving..." : "Save doctor"}
          </Button>
        </div>
      </form>
    </div>
  )
}
