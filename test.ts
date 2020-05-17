import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import miniDate from './mod.ts'

// miniDate on the 5th of November 2020
window.Date.now = () => Date.UTC(2020, 10, 5, 12)

const TIME = 'T12:00:00.000Z'

Deno.test('Date.now() is overridden', (): void => {
  assertEquals(1604577600000, Date.now())
})

Deno.test('current date is the 5th of November 2020', (): void => {
  const subject = miniDate()
  assertEquals(`2020-11-05${TIME}`, subject.toISOString())
})

Deno.test('it accepts day as number', (): void => {
  const subject = miniDate(1)
  assertEquals(`2020-11-01${TIME}`, subject.toISOString())
})

Deno.test('it accepts DD', (): void => {
  const subject = miniDate('01')
  assertEquals(`2020-11-01${TIME}`, subject.toISOString())
})

Deno.test('it accepts D-M', (): void => {
  const subject = miniDate('1-1')
  assertEquals(`2020-01-01${TIME}`, subject.toISOString())
})

Deno.test('it accepts D-MM-YYYY', (): void => {
  const subject = miniDate('1-01-2019')
  assertEquals(`2019-01-01${TIME}`, subject.toISOString())
})

Deno.test('it accepts falsy values', (): void => {
  let subject = miniDate()
  assertEquals(`2020-11-05${TIME}`, subject.toISOString())

  subject = miniDate('')
  assertEquals(`2020-11-05${TIME}`, subject.toISOString())

  subject = miniDate(0)
  assertEquals(`2020-11-05${TIME}`, subject.toISOString())
})

Deno.test('it simply gives back `Invalid Date` on wrong inputs', (): void => {
  let subject = miniDate(32)
  assertEquals('Invalid Date', subject.toString())

  subject = miniDate('2020')
  assertEquals('Invalid Date', subject.toString())

  subject = miniDate('2020-13-')
  assertEquals('Invalid Date', subject.toString())

  subject = miniDate('-13-')
  assertEquals('Invalid Date', subject.toString())

  subject = miniDate('-13-')
  assertEquals('Invalid Date', subject.toString())

  subject = miniDate('-')
  assertEquals('Invalid Date', subject.toString())
})
