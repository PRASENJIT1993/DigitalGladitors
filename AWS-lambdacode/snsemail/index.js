var AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: 'AKIAJ3RQKAIDXQMPGXKQ',
  secretAccessKey: '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',
  region: 'us-east-1'
});


exports.handler = function(event, context) {
    var eventText = JSON.stringify(event, null, 2);
    var sns = new AWS.SNS();
    var params = {
        Message: event.message , 
        Subject: "From "+ event.patientName + " " + event.subject ,
        TopicArn: event.snsTopic
    };
    sns.publish(params, context.done);
};



