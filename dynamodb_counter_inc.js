var AWS = require('aws-sdk');

AWS.config.update({region: 'us-west-2'})

var client = new AWS.DynamoDB.DocumentClient();

var table = 'Movies';
var year = 2015;
var title = 'The Big New Movie';

var params = {
    TableName: table,
    Key: {
        'year': year,
        'title': title
    },
    UpdateExpression: 'set info.rating = info.rating - :val',
    ExpressionAttributeValues: {
        ':val': 1
    },
    ReturnValues: "UPDATED_NEW"
};

console.log('Updating item....');
client.update(params, function(err, data) {
    if (err) {
        console.error('Error updating item. ', JSON.stringify(err, null, 2));
    } else {
        console.log('Item updated!')
    }
});
