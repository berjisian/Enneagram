var enneagram = enneagram || {};

enneagram.externalDependencies = [
  "ui.bootstrap", "ui.router", "ui.select", "ngSanitize"
];
enneagram.internalDependency = [];
enneagram.modulesDependency = [
    "homeModule", "detectionModule", "libraryModule", "blogModule", "basicsModule", "typesModule", "typeTplModule", "othersModule"
];

var app = angular.module(
  "app",
  enneagram.externalDependencies
    .concat(enneagram.internalDependency)
    .concat(enneagram.modulesDependency)
);