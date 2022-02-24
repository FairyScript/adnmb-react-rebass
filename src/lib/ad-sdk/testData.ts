const isDev =
  import.meta.env.DEV ||
  //@ts-ignore
  (process !== undefined && process.env.NODE_ENV === 'development')

const isTestData = import.meta.env.VITE_TEST_DATA === '1'

export function isMock() {
  return isDev && isTestData
}
