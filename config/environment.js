/*jshint node:true*/
'use strict';

module.exports = function(environment) {
  var ENV = {
    mapsApiKey: process.env.GOOGLE_MAPS_API_KEY
  }

  return ENV;
};
