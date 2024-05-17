export const reduce = (arr: (string | number)[]) => {
  return arr.reduce<Record<string, string>>((acc, x) => {
    acc[x] = `${x}px`
    return acc
  }, {})
}

export const reduce4 = (arr: (string | number)[]) => {
  return arr.reduce<Record<string, string>>((acc, x) => {
    acc[x] = `${Number(x) * 4}px`
    return acc
  }, {})
}
