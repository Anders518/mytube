const dateFormatter = new Intl.RelativeTimeFormat(undefined, {
  numeric: 'always'
})

const numberFormatter = new Intl.NumberFormat(undefined, {
  notation: 'compact'
})

const DATE_UNITS: { amount: number; name: Intl.RelativeTimeFormatUnit }[] = [
  { amount: 60, name: 'second' },
  { amount: 60, name: 'minute' },
  { amount: 24, name: 'hour' },
  { amount: 7, name: 'day' },
  { amount: 4.34524, name: 'week' },
  { amount: 12, name: 'month' }
]

export const convertDate = (date: Date) => {
  let duration = (date.getTime() - new Date().getTime()) / 1000
  for (const { amount, name } of DATE_UNITS) {
    if (Math.abs(duration) < amount) {
      return dateFormatter.format(Math.round(duration), name)
    }
    duration /= amount
  }
}

export const convertNumber = (num: number) => {
  return numberFormatter.format(num)
}
