const test = require('ava')
const { defaultCompare, withConvertToBoolean } = require('../src/compare')

test('should return correct result', (t) => {
  t.is(defaultCompare(1, 10), false)
  t.is(defaultCompare(10, 1), true)
})

test('should convert to boolean correctly', async (t) => {
  const compare1 = withConvertToBoolean((a, b) => a - b)
  const compare2 = withConvertToBoolean((a, b) => a > b)
  t.is(compare1(1, 10), false)
  t.is(compare2(1, 10), false)
})

test('should throw errors', async (t) => {
  const compare1 = withConvertToBoolean((a, b) => undefined) // eslint-disable-line no-unused-vars
  const compare2 = withConvertToBoolean((a, b) => 'undefined') // eslint-disable-line no-unused-vars

  t.throws(() => compare1(1, 10))
  t.throws(() => compare2(1, 10))
})
