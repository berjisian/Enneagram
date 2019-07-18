var enneagram = enneagram || {};

enneagram.externalDependencies = [
    "ui.bootstrap", "ui.router", "ui.select", "ngSanitize"
];
enneagram.internalDependency = [];
enneagram.modulesDependency = [
    "homeModule", "detectionModule", "introductionModule", "comparisonModule", "libraryModule",
    "personalityModule", "basicsModule", "typesModule", "typeTplModule", "systemsModule"
];

var app = angular.module(
    "app",
    enneagram.externalDependencies
        .concat(enneagram.internalDependency)
        .concat(enneagram.modulesDependency)
);