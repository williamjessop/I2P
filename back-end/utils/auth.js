const jwt = require("jsonwebtoken");
var AWS = require('aws-sdk'),
    region = "us-east-1",
    secretName = "Secrets-for-I2P",
    secret,
    decodedBinarySecret;

var client = new AWS.SecretsManager({
    region: region
});

client.getSecretValue({SecretId: secretName}, function(err, data) {
    if (err) {
        if (err.code === 'DecryptionFailureException')
            throw err;
        else if (err.code === 'InternalServiceErrorException')
            throw err;
        else if (err.code === 'InvalidParameterException')
            throw err;
        else if (err.code === 'InvalidRequestException')
            throw err;
        else if (err.code === 'ResourceNotFoundException')
            throw err;
    }

    secrets = JSON.parse(data.SecretString);
});

exports.createJWT = (email, userId, duration) => {
  const payload = {
    email,
    userId,
    duration,
  };

  return jwt.sign(payload, secrets.TOKEN_SECRET, {
    expiresIn: duration,
  });
};
