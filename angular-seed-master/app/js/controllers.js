'use strict';

/* Controllers */


function MyCtrl1(hello1,hello2) {
    hello1.hello();
    hello2.hello();
}
MyCtrl1.$inject = ['hello1','hello2'];
app.controller("partial1Ctr", function($scope,hello1,hello2){
    $scope.hello = function(){
        hello1.hello();
        hello2.hello();
    }
});

function MyCtrl2() {
}
MyCtrl2.$inject = [];
