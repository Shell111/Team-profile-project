if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// import express and setting port
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// importing API functopm
let getResults = require("./getResults")

const router = express.Router()

app.use(express.static('public'))
app.use(express.json())
app.use("/", router)

// API results
router.get('/results', async (req, res) => {
  const response = await getResults();
  res.json(response)
})

// start the web server
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})