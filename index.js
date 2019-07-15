function findMatching(array, string) {
  let newArray = []
  for (const name of array) {
    if (name.toUpperCase() === string.toUpperCase()) {
      newArray.push(name)
    }
  }
  return newArray
}

function fuzzyMatch(array, string) {
  let newArray = []
  for (const name of array) {
    if (name.slice(0, string.length) === string) {
      newArray.push(name)
    }
  }
  return newArray
}

function matchName(array, string) {
  let newArray = []
  for (const name of array) {
    if (name["name"] === string) {
      newArray.push(name)
    }
  }
  return newArray
}
