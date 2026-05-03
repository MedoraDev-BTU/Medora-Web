export type AppointmentStatus = "Pending" | "Approved" | "Cancelled" | "Completed"

export type DoctorStatus = "active" | "inactive"

export type NotificationType =
  | "Yeni randevu talebi"
  | "Randevu onaylandı"
  | "Randevu iptal edildi"
  | "Hasta randevuyu iptal etti"
  | "Randevu ertelendi"
  | "Randevu tamamlandı"

export interface Doctor {
  id: string
  name: string
  specialty: string
  phone: string
  email: string
  workingDays: string[]
  workingStartTime: string
  workingEndTime: string
  status: DoctorStatus
}

export interface Appointment {
  id: string
  patientName: string
  doctorId: string
  date: string
  time: string
  durationMinutes: number
  status: AppointmentStatus
  reason: string
}

export interface Notification {
  id: string
  type: NotificationType
  message: string
  appointmentId?: string
  createdAt: string
  read: boolean
}

export type DoctorFormValues = Omit<Doctor, "id">

export interface AppointmentFilters {
  patientName: string
  doctorName: string
  startDate: string
  endDate: string
  status: "All" | AppointmentStatus
}
