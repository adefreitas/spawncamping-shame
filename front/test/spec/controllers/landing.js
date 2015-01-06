'use strict';

describe('Controller: LandingctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('spawncampingShameApp'));

  var LandingctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LandingctrlCtrl = $controller('LandingctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
