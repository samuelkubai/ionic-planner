var app = angular.module('starter.controllers');

app.controller('GoalCtrl', ['$scope', '$state', function ($scope, $state) {
  $scope.createGoal = createGoal;
  $scope.updateGoal = updateGoal;
  $scope.deleteGoal = deleteGoal;

  if (angular.isDefined($state.params.goalId)) {
    $scope.goal = fetchGoal($state.params.goalId);
  } else {
    $scope.goals = fetchAllGoals()
  }

  function fetchAllGoals() {
    console.log('Fetch all the goals');
    //Fetch all the goals from the firebase database
    var goals = [];
    return goals;
  }

  function createGoal(goal) {
    console.log('The goal to be created', goal);
    //Persist the goal to the firebase database
    $state.go('tab.goals');
  }

  function fetchGoal(goalId) {
    console.log('The fetched goal id is:', goalId);
    //Fetch the goal from the firebase database
    var goal = {
      'title': 'Do or don\'t do there is no try',
      'tasks': []
    };

    return goal;
  }

  function updateGoal(goal, goalId) {
    console.log("The goal to be updated has the ID:", goalId);
    console.log("The goal is:", goal);
    //Update the goal with the id, goalId
    $state.go('tabs.goals', {goalId: goalId});
  }

  function deleteGoal(goalId) {
    console.log('The goal to be deleted has this ID', goalId);
    //Delete the goal from the firebase database
    $state.go('tabs.goals');
  }
}]);


