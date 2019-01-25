const defaultCompare = (a, b) => a > b

const withConvertToBoolean = fn => (...args) => {
  const value = fn(...args)
  if (typeof value === 'boolean') {
    return value
  }
  if (typeof value === 'number') {
    return value > 0
  }
  throw new Error('Compare function should return boolean or number!')
}

module.exports = { defaultCompare, withConvertToBoolean }
