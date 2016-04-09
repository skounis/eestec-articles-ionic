(function() {
	'use strict';

	angular
		.module('supermodular.wordpress')
		.controller('WordpressArticleController', WordpressArticleController);

	WordpressArticleController.$inject = [
		'$stateParams', 'wordpressService'];

	/* @ngInject */
	function WordpressArticleController($stateParams, wordpressService) {
		var articleId = parseInt($stateParams.articleId, 10);

		var vm = angular.extend(this, {
			article: null,
		});

		function activate() {
			loadArticle();
		}
		activate();

		// ********************************************************************

		function loadArticle() {
			wordpressService.getArticle(articleId)
				.then(function(article) {
					vm.article = article;
				});
		}
	}
})();
