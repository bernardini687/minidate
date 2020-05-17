export type DateInput =
  | number
  | 'dd-mm-yyyy'
  | 'dd-m-yyyy'
  | 'd-mm-yyyy'
  | 'd-m-yyyy'
  | 'dd-mm'
  | 'dd-m'
  | 'd-mm'

export function shape(value?: DateInput): Date {
  return new Date(Date.now())
}
