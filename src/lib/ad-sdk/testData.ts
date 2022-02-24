export function isMock() {
  return (
    process.env.NODE_ENV === 'development' && process.env.TEST_DATA === '1'
  );
}
