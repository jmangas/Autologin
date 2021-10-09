const AWSXRay = require('aws-xray-sdk-core')
const AWS = AWSXRay.captureAWS(require('aws-sdk'))

// Create client outside of handler to reuse
const lambda = new AWS.Lambda()

const fetch = require('node-fetch');

const webhookURL = 'https://chat.googleapis.com/v1/spaces/AAAApio4yCU/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=jX_RXcldlDf2VYy0osTPBumoWJ1NqimbzJePY7ewK8I%3D';

const data = JSON.stringify({
  'text': 'Hello from Autologin Notifier!',
});


// Handler
exports.handler = async function(event, context) {
  // event.Records.forEach(record => {
  //   console.log(record.body)
  // })
  //console.log('## ENVIRONMENT VARIABLES: ' + serialize(process.env))
  //console.log('## CONTEXT: ' + serialize(context))
  console.log('## EVENT: ' + serialize(event))
  
  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: data,
  }).then((response) => {
    //console.log(response);
  });

  return getAccountSettings()
}

// Use SDK client
var getAccountSettings = function(){
  return lambda.getAccountSettings().promise()
}

var serialize = function(object) {
  return JSON.stringify(object, null, 2)
}
