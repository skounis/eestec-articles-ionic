(function() {
	'use strict';

	angular
		.module('supermodular.wordpress')
		.factory('wordpressService', wordpressService);

	wordpressService.$inject = [];

	/* @ngInject */
	function wordpressService() {

		var service = {
			getArticles: getArticles,
			getArticle: getArticle
		};

		return service;

		////////////////

		function getArticles() {

		}

		function getArticle(articleId) {

		}
	}
})();
