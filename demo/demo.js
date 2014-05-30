'use strict';

var app = angular.module('AngularFormControls', ['formControls', 'ngTagsInput', 'ngCookies', 'ngLocalizer']);

app.controller('DemoController', ['$scope', '$q', '$cookies', 'Localizer', function($scope, $q, $cookies, Localizer) {
	$cookies.language = 'fr';
	Localizer.setDictionary({
		'the title': {
			'fr': 'le titre',
		},
		'val1': {
			'fr': 'une val',
		},
	});

	$scope.demoTitle = 'This is a demo of every angular directive in this library';

	var options = ['green', 'blue', 'red', 'rouge', 'rectangle', 'roulette', 'roulend', 'white', 'yellow'];
	var tagOptions = function(query) {
		var deferred = $q.defer();
		var matchedOptions = [];
		for(var i=0; i!=options.length; ++i)
			if(options[i].indexOf(query) !== -1)
				matchedOptions.push(options[i]);

		deferred.resolve(matchedOptions);
		return deferred.promise;
	};
	$scope.tagOptions = tagOptions;

	var languages = [
		{
			value: 'c++',
			attrs: {
				color: 'red',
			},
		},
		{
			value: 'c#',
			attrs: {
				color: 'blue',
			},
		},
		{
			value: 'python',
			attrs: {
				color: 'green',
			},
		},
		{
			value: 'pygore',
			attrs: {
				color: 'green',
			},
		},
		{
			value: 'pitolli',
			attrs: {
				color: 'pink',
			},
		},
		{
			value: 'pytackle',
			attrs: {
				color: 'purple',
			},
		},
	];
	$scope.autocompleteQuery = function($query) {
		var deferred = $q.defer();

		var matchedOptions = [];
		for(var i=0; i != languages.length; ++i)
			if(languages[i].value.indexOf($query) !== -1)
				matchedOptions.push(languages[i]);

		deferred.resolve(matchedOptions);
		return deferred.promise;
	};

	$scope.previewhtml = '<h3 style="color: {{current.attrs.color}}">{{current.value}}</h3>';

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
		openArray: [],
	};
	$scope.demoObject.openArray[30] = '';

	//TODO: learn how to do term properly...
	$scope.demoObject.terms = [{
		identifier: "myident",
		customValue: "hello",
	}];

	//TODO: move all inputs into here, like options, etc.
	$scope.inputs = {
		tabs: [
			{title: 'first tab', key: 'first',},
			{title: 'second tab', key: 'second', help: 'this is some text and stuff and junk and whatever and stuff and junk and ya much more than you would think would be a thing with the wrandom'},
			{title: 'third tab', key: 'third',},
		],
	};
}]);
