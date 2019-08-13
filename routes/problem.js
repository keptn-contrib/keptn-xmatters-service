// Libraries
const express = require( 'express' );
const router  = express.Router();
const request = require( 'request' );

// xMatters Endpoint
var PROBLEM_ENDPOINT = process.env.XM_PROBLEM_ENDPOINT;

router.post( '/problem', ( req, res ) => {

	var payload = req.body;
	notifyProblem( payload );
	res.status( 200 ).send( 'Done' );

});

var notifyProblem = function( payload ) {

	var options = {
		'uri': PROBLEM_ENDPOINT,
		'method': 'POST',
		'body': JSON.stringify( payload )
	};
	console.log(PROBLEM_ENDPOINT);
	request( options, ( err, res, body ) => {
		
	});

}

module.exports = router;