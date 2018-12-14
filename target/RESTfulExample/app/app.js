var newsNetwork = newsNetwork || {};

newsNetwork.externalDependencies = [
  // "ui.bootstrap",
  // "ui.router",
  // "restangular",
  // "ui.select",
  // "ngSanitize",
  // "rzModule",
  // 'ngclipboard',
  // 'chart.js',
  // "LocalStorageModule"
];
newsNetwork.internalDependency = [];
newsNetwork.modulesDependency = [
    "homeModule"
];

var app = angular.module(
  "app",
  newsNetwork.externalDependencies
    .concat(newsNetwork.internalDependency)
    .concat(newsNetwork.modulesDependency)
);

app.factory("lowLevelHttpInterceptor", function() {});

app
  .config(newsNetwork.config)
  .run(run)
  .filter("safeHTML", function($sce) {
    return $sce.trustAsHtml;
  });

app.directive("schemaMapRequiredFieldValidator", function() {});
