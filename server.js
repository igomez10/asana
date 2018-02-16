var express = require('express');
var app = express()
var axios = require('axios')
var asana = require('asana')

// An asana client is created with the nodejs library
var client = asana.Client.create().useAccessToken(process.env.ASANA);
// a custom port can be specified with the PORT env,
// otherwise it will default to 9091.
var port = process.env.PORT || 9091

// The built files can be served as static/public files
app.use('/static', express.static('project/dist/static'))

// Cors is allowed for dev purposes, if needed, uncomment
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   next()
// })

// the route called by the TaskContainer.vue component, asks asana servers for the
// tasks in the supplied projectid
app.get('/gettask/:projectid', function(req, res) {
  projectID = req.params.projectid
  client.tasks.findByProject(projectID)
    .then(data => {
      console.log(data)
      res.send(data.data)
    })
    .catch(err => {
      console.log(err)
    })
})

// default route where the projectid is provided
app.get('/asana/:id', function(req, res) {
  res.sendFile(__dirname + "/project/dist/index.html")
})

// start the server at the port PORT or 9091, info will be printed in server logs
app.listen(port, function(req, res) {
  console.log('listening on port', port)
})
