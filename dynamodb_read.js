var AWS = require('aws-sdk')

AWS.config.update({region: 'us-west-2'});

var client = new AWS.DynamoDB.DocumentClient();

var table = 'Movies';
var year = 2015;
var title = 'The Big New Movie';

var params = {
    TableName: table,
    Key: {
        'year': year,
        'title': title
    }
};

client.get(params, function(err, data) {
    if (err) {
        console.error('Error reading item');
    } else {
        console.log('Got item: ', JSON.stringify(data, null, 2))
    }
});
