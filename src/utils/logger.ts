
const info = (...params: string[]): void => {
  console.log(...params)
}

const error = (...params: string[]): void => {
  console.log(...params)
}

export {
  info,
  error
}