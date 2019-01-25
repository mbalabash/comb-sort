const randIntBetween = (min, max) => Math.floor(Math.random() * max) + min

const generateIntArray = (count = 1000000, max = 1000000, min = 1) => {
  const data = []
  for (let i = 0; i < count; i += 1) {
    data.push(randIntBetween(min, max))
  }
  return data
}

const intArrayToObjectArray = array => array.map(num => ({ value: num }))

module.exports = { generateIntArray, intArrayToObjectArray }
