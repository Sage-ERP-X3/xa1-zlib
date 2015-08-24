"use strict";
var zlib = require('zlib');

exports.zip(text, _) {
  // our input is text - convert it to a node.js Buffer
  var buf = new Buffer(text, 'utf8');
  // buf is a node.js Buffer, zip it (asynchronously)
    var zipped = zlib.zip(buf, ~_);
    // zipped is a node.js Buffer, return it
    return zipped; 
}

exports.unzip(data, _) {
  // data is a node.js Buffer, unzip it (asynchronously)
  var unzipped = zlib.unzip(buf, ~_);
    // unzipped is a node.js Buffer, convert it to text
    var text = unzipped.toString('utf8');
    return text;
}
