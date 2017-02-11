var AWS = require('aws-sdk')

AWS.config.update({region: 'us-west-2'})

var client = new AWS.DynamoDB.DocumentClient();

var table = "Movies";
var year = 2015;
var title = "The Big New Movie";

var params = {
    TableName: table,
    Item: {
        'year': year,
        'title': title,
        'info': {
            'plot': 'Nothing happens at all',
            'rating': 0
        }
    }
};

console.log('Adding a new item...');
client.put(params, function(err, data) {
    if (err) {
        console.error('Unable toadd item,')
    } else {
        console.log('Item added.')
    }
});
