export * from './vector'
export * from './canvas'
export * from './colors'

export function range(to: number) {
  return new Array(to).fill(0).map((_, i) => i)
}

export function random(max = 1, min = 0) {
  return Math.random() * (max - min) + min
}
