'use strict';

describe('Controller: PrimaryCtrl', function () {

  // load the controller's module
  beforeEach(module('spawncampingShameApp'));

  var PrimaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrimaryCtrl = $controller('PrimaryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
