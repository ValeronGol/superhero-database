const app = require('../app')

const { PORT } = process.env

// mongoose
//   .connect(DB_HOST)
//   .then(() => console.log('Database connection successful'))
//   .then(() =>
app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`)
})
// )
// .catch(err => {
//   console.log(err.message)
//   process.exit(1)
// })
