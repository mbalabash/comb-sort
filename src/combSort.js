const bubbleSort = require('./bubbleSort')
const { defaultCompare, withConvertToBoolean } = require('./compare')

const checkArgumentTypes = (array, compare, reduction) => {
  if (!Array.isArray(array)) throw new Error('The first argument should be a javascript array!')
  if (compare && typeof compare !== 'function') {
    throw new Error(
      'Compare should be a function which compares a pair of array elements and returns boolean or number!',
    )
  }
  if (reduction && typeof reduction !== 'number') {
    throw new Error('Reduction should be a number!')
  }
}

/**
 * CombSort implementation on javascript.
 * @see https://en.wikipedia.org/wiki/Comb_sort
 * @param {Array} array
 * @param {Function} compare Custom compare function
 * @param {Number} reduction Custom reduction value
 * @returns {Array} sorted array
 * @description Accepts array with data and apply CombSort method.
 * @description You can pass a custom compare function as the second argument.
 * @description Also, you can pass custom reduction value as the third argument.
 * @description Be careful with playing with reduction parameter.
 * @description It can affect performance and accuracy.
 */
const combSort = (array, compare = defaultCompare, reduction = 1.247) => {
  checkArgumentTypes(array, compare, reduction)
  const comparator = withConvertToBoolean(compare)
  let distance = Math.round(array.length - 1 / reduction)

  while (distance > 1) {
    for (let i = 0; i + distance < array.length; i += 1) {
      if (comparator(array[i], array[i + distance])) {
        const temp = array[i + distance]
        array[i + distance] = array[i] // eslint-disable-line no-param-reassign
        array[i] = temp // eslint-disable-line no-param-reassign
      }
    }
    distance = ~~(distance / reduction)
  }

  return bubbleSort(array, comparator)
}

module.exports = combSort
