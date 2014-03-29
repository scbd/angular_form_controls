'use strict';

var app = angular.module('AngularFormControls', ['formControls']);

app.controller('DemoController', ['$scope', function($scope) {
	$scope.demoTitle = 'This is a demo of every angular directive in this library';

	//Our test object to bind to
	$scope.demoObject = {
		shortstring: 'hello world',
		longstring: 'This is a story all about how my life got twist turned upside down and i\'d like to take a minute, just stop right there, to tell you about my story in the life of bel air.',
		objectOptions: {
			'key1': 'val1',
			'key2': 'val2',
			'key3': 'val3',
		},
		open1: '', open2: '', open3: '',
	};
}]);
