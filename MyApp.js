var myApp=angular.module('myApp',[]).controller('myController'.function($scope){

     $scope.details=[{name:'A',mark:34},{name:'B',mark:67},{name:'C',mark:70}];
                                                
     $scope.sortFunc = function(x){
      $scope.sort = x;
  
      }
                                                
});
