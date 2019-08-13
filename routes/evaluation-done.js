// Libraries
const express = require( 'express' );
const router  = express.Router();
const request = require( 'request' );

const EVAL_ENDPOINT = process.env.XM_EVAL_ENDPOINT;

router.post('/evaluation-done', function( req, res ) {

	var payload = req.body;
	sendEval( payload );
	res.status( 200 ).send( 'Done' );

});

var sendEval = function( payload ) {

	var options = {
		'uri': EVAL_ENDPOINT,
		'method': 'POST',
		'body': JSON.stringify( payload )
	};
	console.log(EVAL_ENDPOINT);
	request( options, ( err, res, body ) => {
		
	});

}

module.exports = router;