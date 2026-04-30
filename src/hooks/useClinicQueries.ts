import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { clinicApi } from "../services/api"
import type { AppointmentStatus, DoctorFormValues } from "../types"

export const queryKeys = {
  doctors: ["doctors"] as const,
  appointments: ["appointments"] as const,
  notifications: ["notifications"] as const,
}

export const useDoctors = () =>
  useQuery({
    queryKey: queryKeys.doctors,
    queryFn: clinicApi.getDoctors,
  })

export const useAppointments = () =>
  useQuery({
    queryKey: queryKeys.appointments,
    queryFn: clinicApi.getAppointments,
  })

export const useNotifications = () =>
  useQuery({
    queryKey: queryKeys.notifications,
    queryFn: clinicApi.getNotifications,
  })

export const useCreateDoctor = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: clinicApi.createDoctor,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.doctors }),
  })
}

export const useUpdateDoctor = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, values }: { id: string; values: DoctorFormValues }) =>
      clinicApi.updateDoctor(id, values),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.doctors }),
  })
}

export const useDeleteDoctor = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: clinicApi.deleteDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.doctors })
      queryClient.invalidateQueries({ queryKey: queryKeys.appointments })
    },
  })
}

export const useAppointmentAction = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status?: AppointmentStatus }) =>
      status
        ? clinicApi.updateAppointmentStatus(id, status)
        : clinicApi.postponeAppointment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.appointments })
      queryClient.invalidateQueries({ queryKey: queryKeys.notifications })
    },
  })
}

export const useToggleNotification = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: clinicApi.toggleNotificationRead,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: queryKeys.notifications }),
  })
}
