import * as React from "react"
import { format, subDays } from "date-fns"
import { ptBR } from 'date-fns/locale'

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { cn } from "@/lib/utils"
import { Calendar as CalendarIcon } from "lucide-react"

import type { DateRange, SelectRangeEventHandler } from "react-day-picker"

type DateRangePickerProps = React.HTMLAttributes<HTMLDivElement> & {
  date?: DateRange
  onDateChange?: SelectRangeEventHandler
  maxDays?: number
}

export function DatePickerWithRange({
  className,
  date: dateProp,
  maxDays,
  onDateChange: onDateChangeProp
}: DateRangePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  })

  React.useEffect(() => {
    if (dateProp) {
      setDate(dateProp)
    }
  }, [dateProp])


  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd LLL, y", { locale: ptBR })} -{" "}
                  {format(date.to, "dd LLL, y", { locale: ptBR })}
                </>
              ) : (
                format(date.from, "dd LLL, y", { locale: ptBR })
              )
            ) : (
              <span>Escolha uma data</span>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={dateProp !== undefined ? onDateChangeProp : setDate}
            numberOfMonths={2}
            max={maxDays && maxDays}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

