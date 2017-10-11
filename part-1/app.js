const express = require('express')
const app = express()



const bodyParser = require('body-parser')
const logging = require('morgan')

app.use(logging('dev'))
app.use(bodyParser.json())


app.get(`/api/days/:day`, (request, response) => {
  const daysOfWeek = {monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}
  const day = request.params.day.toLowerCase()
  const routePath = request.route['path'].replace(/:day/, day)
  response.set(`Content-Type`, `text/plain`)

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
    response.set(`Content-Type`, `application/json`)
    const array1 = request.body.array1
    const array2 = request.body.array2
    const routeString = request.route['path']
    const joinedArray = JSON.stringify(array1.concat(array2))

    if(!Array.isArray(array1) || !Array.isArray(array2)) {
      response.status(400).send(
        `request: POST ${routeString}\nrequest body params: ${JSON.stringify(request.body)}\nrequest content type: application/json\nresponse status code: 400
        response: {error: "Input data should be type Array."}\nresponse content type: application/json`)
    }
    else {
      response.status(200).send(
        `request: POST ${routeString}\nrequest: body params: ${JSON.stringify(request.body)}\nrequest content type: application/json\n{result: ${joinedArray}}\nresponse content type: application/json`)
    }
  })

app.listen(3000 , () => {
  console.log(`Beeep BOP...Bork Bork!\nServer Good to Go on port 3000!`);
})