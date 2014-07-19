/**
 * Hoodie plugin template
 * An example plugin, this is where you put your frontend code (if any)
 */

/* global Hoodie */

Hoodie.extend(function (hoodie) {

  // extend the hoodie.js API
  return hoodie.s3 = {
    getObject: hoodie.task('s3getobject').start
  };

});
