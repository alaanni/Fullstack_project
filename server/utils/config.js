require('dotenv').config({ path: require('find-config')('.env') })

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI
let GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI
}

let SECRET = process.env.SECRET

module.exports = {
  MONGODB_URI,
  PORT,
  SECRET,
  GOOGLE_API_KEY
}