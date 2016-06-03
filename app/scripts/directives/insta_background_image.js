angular.module('instaGithupApp')
.directive('instaBackgroundImage', function(){
  return {
      scope: { url: '@instaBackgroundImage' },
      link: function(scope, element, attrs){
        scope.$watch("url",function(newUrl, oldUrl) {
          element.css({
            'background-image': 'url("' + newUrl + '")',
            'background-repeat': 'no-repeat',
            'background-position': 'top center',
            'background-size': 'cover'
          })
        });
      }
  }});
