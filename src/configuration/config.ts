export default () => ({
  port: parseInt(process.env.PORT, 10 || 7000),
  database: {
    uri: process.env.DB_URI,
  },
  authorization: {
    secret: process.env.SECRET,
  },
})
