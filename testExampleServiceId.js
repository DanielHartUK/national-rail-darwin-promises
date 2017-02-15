var parsers = require('./parsers.js')
var fs = require('fs')
var fileContent = fs.readFileSync('./exampleResponses/arrivalDepartureBoard.xml', 'UTF-8')

console.log(fileContent)

var parsedResult = parsers.parseServiceIdResponse(fileContent)

console.log(parsedResult)