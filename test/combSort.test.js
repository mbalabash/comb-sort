const test = require('ava')
const combSort = require('../src/combSort')
const { generateIntArray, intArrayToObjectArray } = require('./utils')

const arrayWithNumbers = generateIntArray(10000, 9e8, 9e2)
const arrayWithObjects = intArrayToObjectArray(arrayWithNumbers) // { value }

test('should sort array with numbers correctly', (t) => {
  const sortedByCombSort = combSort(arrayWithNumbers.slice(), (a, b) => a - b)
  arrayWithNumbers.sort((a, b) => a - b)
  t.deepEqual(sortedByCombSort, arrayWithNumbers)
})

test('should sort array with objects correctly', async (t) => {
  const sortedByCombSort = combSort(arrayWithObjects.slice(), (a, b) => b.value - a.value)
  arrayWithObjects.sort((a, b) => b.value - a.value)
  t.deepEqual(sortedByCombSort, arrayWithObjects)
})

test('should throw errors', async (t) => {
  t.throws(() => combSort(null))
  t.throws(() => combSort([], 123))
  t.throws(() => combSort([], (a, b) => a - b, 'qwe'))
})
