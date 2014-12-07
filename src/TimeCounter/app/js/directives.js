angular.module('countdown')
.directive('pageTitle', function() {
    return {
        scope: {},
        restrict: 'A',
        link: function (scope, element, attrs) {
            if (attrs.pageTitle) {
                document.querySelector('#page-title').innerHTML = attrs.pageTitle;
            }
        }
    }
})