(function(module) {

  module.controller('ChartsCtrl', function($scope, $http, $window, $filter) {
      function($scope) {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'Company Performance'
        };

        var chart = new google.visualization.LineChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }


    });
  });
}(angular.module("myApp", ['googlechart'])));

google.load('visualization', '1', {
  packages: ['corechart']
});
