export const generateId = (): string => {
  const randomString = Math.random()
    .toString(36)
    .slice(2, 10 + 2)
  return randomString
}
