const test = require('ava')
const bubbleSort = require('../src/bubbleSort')
const { generateIntArray, intArrayToObjectArray } = require('./utils')

const arrayWithNumbers = generateIntArray(10000, 9e8, 9e2)
const arrayWithObjects = intArrayToObjectArray(arrayWithNumbers) // { value }

test('should sort array with numbers correctly', (t) => {
  const sortedByBubbleSort = bubbleSort(arrayWithNumbers.slice(), (a, b) => a - b)
  arrayWithNumbers.sort((a, b) => a - b)
  t.deepEqual(sortedByBubbleSort, arrayWithNumbers)
})

test('should sort array with objects correctly', async (t) => {
  const sortedByBubbleSort = bubbleSort(arrayWithObjects.slice(), (a, b) => b.value - a.value)
  arrayWithObjects.sort((a, b) => b.value - a.value)
  t.deepEqual(sortedByBubbleSort, arrayWithObjects)
})
