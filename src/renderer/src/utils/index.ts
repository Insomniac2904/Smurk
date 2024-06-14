import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const dateFromatter = new Intl.DateTimeFormat(window.context.locale, {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'UTC'
})

export const formatDate = (ms: number) => dateFromatter.format(ms)

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
