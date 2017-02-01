angular.module('myApp',[]).controller('myController',function($scope){
	
     $scope.details=[{name:'B',mark:64},{name:'C',mark:34},{name:'A',mark:10}];
                                                
     $scope.sortFunc = function(x){
		 
	  if(angular.isUndefined($scope.sort)){	
      $scope.sort = x;
	  return;
	  }
	  
	  if($scope.sort==x)
		  $scope.sort='-'+x;
	  else
		 $scope.sort = x;

		return;
	  
	  
  
      }
                                                
});
