
'use strict';

angular
  .module('articles')
  .component('articles',{
    templateUrl: 'views/articles.template.html',

  }).controller('articlesController', function ($scope,$http) {
      $http.get('dummyData/articles.json').then(function(response){
          $scope.articles = response.data;
    });


});