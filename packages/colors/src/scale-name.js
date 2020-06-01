// // Creates a scale name from a name,
// // e.g. primary -> primary:scale
// export const toScaleName = seperator => name => {
//   if (!seperator) {
//     throw new Error('No seperator specified.')
//   }

//   if (!name) {
//     throw new Error('No name specified.')
//   }

//   if (name.includes(seperator)) {
//     throw new Error('Name contains seperator.')
//   }

//   return `${name}${seperator}scale`
// }

// export const isScaleName = seperator => scaleName => {
//   if (!seperator) {
//     throw new Error('No seperator provided.')
//   }

//   if (!scaleName) {
//     return false
//   }

//   var regex = new RegExp(`^[^${seperator}s]+${seperator}scale$`, 'g')
//   return regex.test(scaleName)
// }

// // Returns the name given a scale name,
// // e.g. primary:scale -> primary
// export const fromScaleName = seperator => scaleName => {
//   if (!seperator) {
//     throw new Error('No seperator provided.')
//   }

//   if (!scaleName) {
//     throw new Error('No scale name specified.')
//   }

//   if (!isScaleName(seperator)(scaleName)) {
//     throw new Error('Unexpected scale name.')
//   }

//   const parts = scaleName.split(seperator)
//   return parts[0]
// }
