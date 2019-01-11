var enneagram = enneagram || {};

enneagram.externalDependencies = [
  "ui.bootstrap", "ui.router", "ui.select", "ngSanitize"
];
enneagram.internalDependency = [];
enneagram.modulesDependency = [
    "homeModule", "detectionModule", "libraryModule", "blogModule", "basicsModule", "typesModule", "typeTplModule", "comparisonsModule",
    "enneagramSymbol"
];

var app = angular.module(
  "app",
  enneagram.externalDependencies
    .concat(enneagram.internalDependency)
    .concat(enneagram.modulesDependency)
);

// app.factory("lowLevelHttpInterceptor", function() {});
//
// app
//   .config(enneagram.config)
//   .run(run)
//   .filter("safeHTML", function($sce) {
//     return $sce.trustAsHtml;
//   });
//
// app.directive("schemaMapRequiredFieldValidator", function() {});
