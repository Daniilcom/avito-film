import { clearTimeout, setTimeout } from 'timers'

export type Timeout = ReturnType<typeof setTimeout>

export function debounce(fn: () => void, interval: number) {
  let timer: Timeout | null = null

  return () => {
    if (timer !== null) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn()
      timer = null
    }, interval)
  }
}
