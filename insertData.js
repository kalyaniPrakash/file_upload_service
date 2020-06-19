var AWS = require("aws-sdk");
const AWSaccessKeyId = "not-important";
const AWSsecretAccessKey = "not-important";
AWS.config.update({
  region: "local",
  accessKeyId: AWSaccessKeyId,
  secretAccessKey: AWSsecretAccessKey,
  endpoint: "http://localhost:8000",
});

var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
  TableName: "Policy_Renewal_Details",
  Item: {
    Id: "kalyani1.webdeveloper@gmail.com",
    DateAdded: new Date().toISOString(),
    ExistingPolicyNumber: "SDPHG19000901T",
    RenewalPolicyNumber: "SDPHG200000720T",
    Insured: "Annie Huei Ngan",
    Email: "kalyani1.webdeveloper@gmail.com",
    PostalAddress: "36A & B, Tower 1, Phase 1, Residence Bel-Air, HK",
    RenewalDiscount: "35%",
    DiscountedPremium: "HK$1,202.70",
    ExpiryDate: "15/5/2020",
  },
};

docClient.put(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to add data",
      "Item details",
      ". Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("PutItem succeeded:", data);
  }
});
