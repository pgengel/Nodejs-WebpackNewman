var newman = require('newman'); // require newman in your project 
 
// call newman.run to pass `options` object and wait for callback 
newman.run({
    collection: require('./filegenerator.postman_collection.json'),
    reporters: ['json', 'cli'],
    iterationCount: 2, 

}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
