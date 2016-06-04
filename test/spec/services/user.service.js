'use strict';

describe('Service: User', function() {

  beforeEach(module('instaGithupApp'));

  var myService;
  var httpBackend;
  beforeEach(inject(function($httpBackend, _myService_){
    httpBackend = $httpBackend;
    myService = _myService_;
  }));


  describe('HTTP calls', function() {

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should call the API', function() {
      httpBackend.expectGET(/\/users/).respond('');
      myService.asyncCall();
      httpBackend.flush();
    });

    it('should return an array of things on success', function() {
      var response = ['one thing', 'another thing'];
      var myThings = [];
      var errorStatus = '';
      var handler = {
        success: function(data) {
          myThings = data;
        },
        error: function(data) {
          errorStatus = data;
        }
      };
      spyOn(handler, 'success').and.callThrough();
      spyOn(handler, 'error').and.callThrough();

      httpBackend.whenGET(/\/users/).respond(response);
      myService.asyncCall().then(handler.success, handler.error);
      httpBackend.flush();

      expect(handler.success).toHaveBeenCalled();
      expect(myThings).toEqual(response);
      expect(handler.error).not.toHaveBeenCalled();
      expect(errorStatus).toEqual('');
    });

    it('should return the status on error', function() {
      var errorStatus = '';
      var myThings = [];
      var handler = {
        success: function(data) {
          myThings = data;
        },
        error: function(data) {
          errorStatus = data;
        }
      };
      spyOn(handler, 'success').and.callThrough();
      spyOn(handler, 'error').and.callThrough();

      httpBackend.whenGET(/\/users/).respond(404, {status: 404});
      myService.asyncCall().then(handler.success, handler.error);
      httpBackend.flush();

      expect(handler.error).toHaveBeenCalled();
      expect(errorStatus).toEqual(404);
      expect(handler.success).not.toHaveBeenCalled();
      expect(myThings).toEqual([]);
    });

  });

});
