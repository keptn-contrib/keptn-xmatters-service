// Libraries
const express    = require( 'express'       );
const bodyParser = require( 'body-parser'   );
const dotenv = require('dotenv');
dotenv.config();

// Set up the express app
var app = express();
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

// include endpoints
app.use( require( './routes/problem'         ) );
app.use( require( './routes/evaluation-done' ) );

// listen on port 8080
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
