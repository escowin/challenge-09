const validate = (input, string) => input ? true : (console.log(`${string} required`), false)

module.exports = { validate }