const express = require('express')
const app = express()



const bodyParser = require('body-parser')
const logging = require('morgan')

app.use(logging('dev'))


app.get(`/api/days/:day`, (request, response) => {
  const daysOfWeek = {monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}
  const day = request.params.day.toLowerCase()
  const routePath = request.route['path'].replace(/:day/, day)

  if (!daysOfWeek[day]){
    response.status(400).send(
    `request: GET ${routePath}\nresponse: '${daysOfWeek[day]}' is not a valid day!\nstatus: 400`)
  }
  else {
    response.status(200).send(
    `request: ${routePath}\nresponse: ${daysOfWeek[day]}\nstatus: 200`)
  }
})

app.post(`/api/array/concat`, (request, response) => {
  response.status(200).send(`This is the CONCAT route`)
})

app.listen(3000 , () => {
  console.log(`Beeep BOP...Bork Bork!\nServer Good to Go on port 3000!`);
})