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
    UpdateExpression: 'remove info.actors[0]',
    ConditionExpression: 'size(info.actors) > :num',
    ExpressionAttributeValues: {
        ':num': 2
    },
    ReturnValues: 'UPDATED_NEW'
};

console.log('Performing a conditional update');
client.update(params, function(err, data) {
    if (err)
        console.error('Error updating item: ', JSON.stringify(err, null, 2));
    else
        console.log('Update succeeded');
});
