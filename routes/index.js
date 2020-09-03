var express = require('express');
var router = express.Router();
var tags_data = require('../public/data/leetcode_tags.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  var companies_filter = [];
  var topics_filter = [];

  tags_data.tags.companies.forEach(element => {
    companies_filter.push({
      displayName: element.name,
      value: element.slug
    });
  });

  tags_data.tags.topics.forEach(element => {
    topics_filter.push({
      displayName: element.name,
      value: element.slug
    });
  });

  res.render('index', {
    companies: companies_filter,
    topics: topics_filter
  });
});

module.exports = router;
