const gaussian = require('gaussian')

const generateRandomNumber = () => {
  const mean = 5
  const variance = 1
  const decimalPlace = 3

  const distribution = gaussian(mean, variance)
  return distribution.ppf(Math.random()).toFixed(decimalPlace)
}

module.exports = { generateRandomNumber }