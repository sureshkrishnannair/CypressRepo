const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
//const { rmdir } = require("fs");
const del = require("del");

module.exports = (on) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: require.resolve("typescript"),
  };

  on("file:preprocessor", cucumber(options));

  on("task", {});
  //===================================================//
  //=====Uncomment below code to record videos of failed tc's only====//
  on("after:spec", (spec, results) => {
    if (results.stats.failures === 0 && results.video) {
      return del(results.video);
    }
  });
  //===================================================//
};
