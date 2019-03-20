const functions = require('firebase-functions');
const app = require('./dist');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


// Expose the API as a function
exports.api = functions.https.onRequest(app);
