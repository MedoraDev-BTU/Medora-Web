import type { Appointment, Doctor } from "../types"

export const today = "2026-04-30"

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`))

export const doctorName = (doctors: Doctor[], doctorId: string) =>
  doctors.find((doctor) => doctor.id === doctorId)?.name ?? "Unassigned"

export const byTime = (first: Appointment, second: Appointment) =>
  first.time.localeCompare(second.time)

export const groupByDoctor = (appointments: Appointment[]) =>
  appointments.reduce<Record<string, Appointment[]>>((groups, appointment) => {
    groups[appointment.doctorId] = groups[appointment.doctorId] ?? []
    groups[appointment.doctorId].push(appointment)
    return groups
  }, {})
