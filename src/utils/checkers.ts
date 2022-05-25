export const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String
}

export const isNumber = (number: any): number is number => {
  return typeof number === 'number' || number instanceof Number
}