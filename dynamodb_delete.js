var AWS = require('aws-sdk');

AWS.config.update({region: 'us-west-2'});

var client = new AWS.DynamoDB.DocumentClient();

var table = 'Movies'
var year = 2015;
var title = 'The Big New Movie';

var params = {
    TableName: table,
    Key: {
        'year': year,
        'title': title
    },
    ConditionExpression: 'info.rating <= :val',
    ExpressionAttributeValues: {
        ':val': 5.0
    }
};

console.log('Attemting to perform a conditional delete...');
client.delete(params, function(err, data) {
    if (err)
        console.error('Error deleting items.  Json:', JSON.stringify(err, null, 5));
    else
        console.log('Delete succeeded.  Json:', JSON.stringify((data, null, 2)));
})
