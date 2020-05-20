import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import miniDate from './mod.ts'

const { test } = Deno
const TIME = 'T12:00:00.000Z'

// miniDate on the 5th of November 2020
window.Date.now = () => Date.UTC(2020, 10, 5, 12)

test('Date.now() is overridden', () => {
  assertEquals(1604577600000, Date.now())
})

test('current date is the 5th of November 2020', () => {
  const subject = miniDate()
  assertEquals(`2020-11-05${TIME}`, subject.toISOString())
})

test('it accepts day as number', () => {
  const subject = miniDate(1)
  assertEquals(`2020-11-01${TIME}`, subject.toISOString())
})

test('it accepts DD', () => {
  const subject = miniDate('01')
  assertEquals(`2020-11-01${TIME}`, subject.toISOString())
})

test('it accepts D-M', () => {
  const subject = miniDate('1-1')
  assertEquals(`2020-01-01${TIME}`, subject.toISOString())
})

test('it accepts D-MM-YYYY', () => {
  const subject = miniDate('1-01-2019')
  assertEquals(`2019-01-01${TIME}`, subject.toISOString())
})

test('it accepts falsy values', () => {
  let subject = miniDate()
  assertEquals(`2020-11-05${TIME}`, subject.toISOString())

  subject = miniDate('')
  assertEquals(`2020-11-05${TIME}`, subject.toISOString())

  subject = miniDate(0)
  assertEquals(`2020-11-05${TIME}`, subject.toISOString())
})

test('it simply gives back `Invalid Date` on wrong inputs', () => {
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
