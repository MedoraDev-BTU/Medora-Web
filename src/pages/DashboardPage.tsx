import { Bell, CalendarCheck, Stethoscope, TimerOff } from "lucide-react"
import Badge from "../components/Badge"
import EmptyState from "../components/EmptyState"
import { ErrorState, LoadingState } from "../components/FeedbackStates"
import PageHeader from "../components/PageHeader"
import StatCard from "../components/StatCard"
import { byTime, doctorName, groupByDoctor, today } from "../components/utils"
import {
  useAppointments,
  useDoctors,
  useNotifications,
} from "../hooks/useClinicQueries"

export default function DashboardPage() {
  const doctorsQuery = useDoctors()
  const appointmentsQuery = useAppointments()
  const notificationsQuery = useNotifications()

  if (doctorsQuery.isLoading || appointmentsQuery.isLoading || notificationsQuery.isLoading) {
    return <LoadingState label="Preparing dashboard" />
  }

  if (doctorsQuery.isError || appointmentsQuery.isError || notificationsQuery.isError) {
    return <ErrorState label="Dashboard data could not be loaded" />
  }

  const doctors = doctorsQuery.data ?? []
  const appointments = appointmentsQuery.data ?? []
  const notifications = notificationsQuery.data ?? []
  const todaysAppointments = appointments
    .filter((appointment) => appointment.date === today)
    .sort(byTime)
  const groupedAppointments = groupByDoctor(todaysAppointments)
  const recentNotifications = notifications.slice(0, 4)

  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Today's clinic flow, pending work, and recent activity."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={Stethoscope}
          label="Total doctors"
          tone="bg-cyan-50 text-cyan-700"
          value={doctors.length}
        />
        <StatCard
          icon={CalendarCheck}
          label="Today's appointments"
          tone="bg-blue-50 text-blue-700"
          value={todaysAppointments.length}
        />
        <StatCard
          icon={Bell}
          label="Pending requests"
          tone="bg-amber-50 text-amber-700"
          value={appointments.filter((item) => item.status === "Pending").length}
        />
        <StatCard
          icon={TimerOff}
          label="Cancelled appointments"
          tone="bg-rose-50 text-rose-700"
          value={appointments.filter((item) => item.status === "Cancelled").length}
        />
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-slate-950">Today's appointments</h2>
            <p className="text-sm text-slate-500">Sorted by time and grouped by doctor.</p>
          </div>
          {todaysAppointments.length === 0 ? (
            <EmptyState
              description="No visits are scheduled for today."
              icon={<CalendarCheck className="h-6 w-6" />}
              title="No appointments"
            />
          ) : (
            <div className="space-y-5">
              {Object.entries(groupedAppointments).map(([doctorId, items]) => (
                <div key={doctorId}>
                  <h3 className="mb-3 text-sm font-bold text-slate-700">
                    {doctorName(doctors, doctorId)}
                  </h3>
                  <div className="divide-y divide-slate-100 overflow-hidden rounded-lg border border-slate-200">
                    {items.sort(byTime).map((appointment) => (
                      <div
                        key={appointment.id}
                        className="grid gap-3 bg-white p-4 sm:grid-cols-[90px_1fr_auto] sm:items-center"
                      >
                        <span className="font-mono text-sm font-bold text-cyan-700">
                          {appointment.time}
                        </span>
                        <div>
                          <p className="font-semibold text-slate-950">
                            {appointment.patientName}
                          </p>
                          <p className="text-sm text-slate-500">{appointment.reason}</p>
                        </div>
                        <Badge value={appointment.status} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-950">Recent notifications</h2>
          <div className="mt-4 space-y-3">
            {recentNotifications.map((notification) => (
              <div
                key={notification.id}
                className="rounded-md border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-bold text-slate-900">{notification.type}</p>
                  <Badge value={notification.read ? "read" : "unread"} />
                </div>
                <p className="mt-2 text-sm text-slate-500">{notification.message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
