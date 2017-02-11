var AWS = require('aws-sdk')

AWS.config.update({ region: 'us-west-2'});

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName: "Movies",
    KeySchema: [
        { AttributeName: "year", KeyType: "HASH" },
        { AttributeName: "title", KeyType: "RANGE"}
    ],
    AttributeDefinitions: [
        { AttributeName: "year", AttributeType: "N" },
        { AttributeName: "title", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};

dynamodb.createTable(params, function(error, data) {
    if (error)
        console.error('Unable to create table. Error: ', JSON.stringify(error, null, 2));
    else
        console.log('Table created.  Table description: ', JSON.stringify(data, null, 2));
})
