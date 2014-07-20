/**
 * Hoodie plugin s3
 */

var AWS = require('aws-sdk');

var createAuthenticatedS3Instance = function(s3Config) {
  return new AWS.S3({
    accessKeyId: s3Config.accessKey,
    secretAccessKey: s3Config.accessSecret
  });
};

var getS3Config = function(hoodie) {
  var cfg = hoodie.config.get('s3');
  if (!cfg) {
    return 'Cannot get config using `hoodie.config.get()`';
  }
  if (!(
    cfg.accessKey &&
    cfg.accessSecret &&
    cfg.bucketName &&
    cfg.pathPrefix != null)) {
    return 'S3 is not properly configured in the Admin Dashboard.'
  }
  return cfg;
};

module.exports = function (hoodie, callback) {

  var handleNewS3GetObject = function (db, task) {
    var fileName = task.fileName;
    var s3Config = getS3Config(hoodie);
    if (typeof s3Config === 'string') {
      return hoodie.task.error(db, task, s3Config)
    }
    var s3 = createAuthenticatedS3Instance(s3Config);
    s3.getObject({
      Bucket: s3Config.bucketName,
      Key: s3Config.pathPrefix + fileName
    }, function (err, data) {
      if (err) {
        return hoodie.task.error(db, task, 'AWS: '+err);
      }
      task.file = data;
      task.file.Body = task.file.Body.toString()
      hoodie.task.success(db, task);
    })
  };

  hoodie.task.on('s3getobject:add', handleNewS3GetObject);

  // plugin initialization complete
  callback();

};
