// Generated by CoffeeScript 1.10.0
(function() {
  module.exports = function(sparql) {
    var query;
    query = encodeURIComponent(sparql);
    return "https://query.wikidata.org/sparql?format=json&query=" + query;
  };

}).call(this);
