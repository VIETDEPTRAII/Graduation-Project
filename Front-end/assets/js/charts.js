(function (module) {

    module.controller('ChartsCtrl', function($scope) {
      $scope.myPieChartObject = {};
      $scope.myColumnChartObject = {};

      // Pie chart
      $scope.myPieChartObject.type = "PieChart";

      $scope.onions = [
          {v: "Onions"},
          {v: 3},
      ];

      $scope.myPieChartObject.data = {"cols": [
          {id: "t", label: "Topping", type: "string"},
          {id: "s", label: "Slices", type: "number"}
      ], "rows": [
          {c: [
              {v: "Mushrooms"},
              {v: 3},
          ]},
          {c: $scope.onions},
          {c: [
              {v: "Olives"},
              {v: 31}
          ]},
          {c: [
              {v: "Zucchini"},
              {v: 1},
          ]},
          {c: [
              {v: "Pepperoni"},
              {v: 2},
          ]}
      ]};

      $scope.myPieChartObject.options = {
          'title': 'How Much Pizza I Ate Last Night'
      };

      // Column Chart
      $scope.myColumnChartObject.type = "ColumnChart";

      $scope.onions = [
          {v: "Onions"},
          {v: 3},
      ];

      $scope.myColumnChartObject.data = {"cols": [
          {id: "t", label: "Topping", type: "string"},
          {id: "s", label: "Slices", type: "number"}
      ], "rows": [
          {c: [
              {v: "Mushrooms"},
              {v: 3},
          ]},
          {c: $scope.onions},
          {c: [
              {v: "Olives"},
              {v: 31}
          ]},
          {c: [
              {v: "Zucchini"},
              {v: 1},
          ]},
          {c: [
              {v: "Pepperoni"},
              {v: 2},
          ]}
      ]};

      $scope.myColumnChartObject.options = {
          'title': 'How Much Pizza I Ate Last Night'
      };

    });

}(angular.module("myApp")));
