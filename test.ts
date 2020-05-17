import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import * as minidate from './mod.ts'

// miniDate on the 5th of November 2020
window.Date.now = () => Date.UTC(2020, 10, 5, 12)

const TIME = 'T12:00:00.000Z'

Deno.test('Date.now() is overridden', (): void => {
  assertEquals(1604577600000, Date.now())
})

Deno.test('current date is the 5th of November 2020', (): void => {
  const subject = minidate.shape()
  assertEquals(`2020-11-05${TIME}`, subject.toISOString())
})
