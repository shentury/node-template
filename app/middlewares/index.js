const cookieParser = require("cookie-parser");
const express = require("express");
/**
 *
 * @param app
 */
module.exports = function(app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
