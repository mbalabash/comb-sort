const { defaultCompare, withConvertToBoolean } = require('./compare')

/**
 * BubbleSort implementation on javascript.
 * @see https://en.wikipedia.org/wiki/Bubble_sort
 * @param {Array} array data
 * @param {Function} comparator function which compare pair of array elements
 * @returns {Array} sorted array
 */
const bubbleSort = (array, compare = defaultCompare) => {
  const comparator = withConvertToBoolean(compare)

  let swapped = true
  while (swapped) {
    swapped = false
    for (let i = 0; i < array.length - 1; i += 1) {
      if (comparator(array[i], array[i + 1])) {
        swapped = true
        const temp = array[i + 1]
        array[i + 1] = array[i] // eslint-disable-line no-param-reassign
        array[i] = temp // eslint-disable-line no-param-reassign
      }
    }
  }

  return array
}

module.exports = bubbleSort
