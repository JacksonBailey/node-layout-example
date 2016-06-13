module.exports = {
  leftPad: leftPad,
  rightPad: rightPad
}

function leftPad(input, maxLength, char) {

  const padLength = maxLength - input.length

  if (padLength <= 0) {
    return input
  }

  const pad = buildPad(padLength, char)

  return pad + input
}

function rightPad(input, maxLength, char) {

  const padLength = maxLength - input.length

  if (padLength <= 0) {
    return input
  }

  const pad = buildPad(padLength, char)

  return input + pad
}

function buildPad(padLength, char) {

  if (char === undefined) {
    char = ' '
  }

  var pad = ''

  for (var i = 0; i < padLength; i++) {
    pad += char
  }

  return pad
}