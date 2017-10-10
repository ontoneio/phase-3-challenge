const express = require('express')
const app = express()


const log = require('morgan')
app.use(log('dev'))

app.get(`/api/days/:day`, (request, response) => {
  response.status(200).send(`This is the day of the week route!`)
})

app.post(`/api/array/concat`, (request, response) => {
  response.status(200).send(`This is the CONCAT route`)
})

app.listen(3000 , () => {
  console.log(`Beeep BOP...Bork Bork!\nServer Good to Go on port 3000!`);
})