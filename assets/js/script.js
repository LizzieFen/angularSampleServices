/*Angular Playtime - Lizzie Fenwick*/
/*Price List function*/

function myservices($scope){
    $scope.services=[
        { title: 'Web Development', price: 1400},
        { title: 'Graphic Design', price: 550},
        { title: 'Consulting', price: 600},
        {title: 'Tying Shoes', price: 20.54},
        { title: 'Saving the World', price: 10000000}];
    $scope.total=function(){
        var t = 0;
        angular.forEach($scope.services, function(s){
            if(s.selected)
                t+=s.price;
        });
        return t;
    };
}

