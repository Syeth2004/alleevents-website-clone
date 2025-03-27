'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from "date-fns"
import { useState, useMemo } from "react"

interface Event {
  id: string
  title: string
  date: Date
  organizer: string
  location: string
  price?: string
}

export function CalendarSection({ events }: { events: Event[] }) {
  const [selectedMonth, setSelectedMonth] = useState(new Date())
  
  // Get days of the month
  const days = useMemo(() => {
    const firstDay = startOfMonth(selectedMonth)
    const lastDay = endOfMonth(selectedMonth)
    const monthDays = eachDayOfInterval({ start: firstDay, end: lastDay })
    const firstDayOfWeek = getDay(firstDay)
    
    return [...Array(firstDayOfWeek).fill(null), ...monthDays]
  }, [selectedMonth])

  // Group events by date
  const eventsByDate = useMemo(() => {
    return events.reduce((acc, event) => {
      const date = format(event.date, 'yyyy-MM-dd')
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(event)
      return acc
    }, {} as { [key: string]: Event[] })
  }, [events])

  // Get previous month
  const prevMonth = () => {
    setSelectedMonth(prev => {
      const newMonth = new Date(prev)
      newMonth.setMonth(newMonth.getMonth() - 1)
      return newMonth
    })
  }

  // Get next month
  const nextMonth = () => {
    setSelectedMonth(prev => {
      const newMonth = new Date(prev)
      newMonth.setMonth(newMonth.getMonth() + 1)
      return newMonth
    })
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            Monthly Events Calendar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Button variant="outline" onClick={prevMonth}>&lt; Previous Month</Button>
            <span className="font-semibold">{format(selectedMonth, 'MMMM yyyy')}</span>
            <Button variant="outline" onClick={nextMonth}>Next Month &gt;</Button>
          </div>

          {/* Weekdays header */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-sm text-muted-foreground">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => (
              <div
                key={index}
                className={`p-2 text-center rounded-md transition-colors ${
                  day ? 
                    (format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd') ? 
                      'bg-primary/10' : 
                      'hover:bg-muted/50') : 
                    'text-muted-foreground'
                }`}
              >
                {day ? (
                  <>
                    <span className="font-semibold">{format(day, 'd')}</span>
                    {eventsByDate[format(day, 'yyyy-MM-dd')]?.length > 0 && (
                      <div className="mt-1 space-y-1">
                        {eventsByDate[format(day, 'yyyy-MM-dd')].map((event, i) => (
                          <div key={i} className="text-xs text-muted-foreground">
                            {event.title}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <span className="text-muted-foreground">-</span>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
