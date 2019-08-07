var enneagram = enneagram || {};

enneagram.externalDependencies = [
    "ui.bootstrap", "ui.router", "ui.select", "ngSanitize", "rzSlider"
];
enneagram.internalDependency = [];
enneagram.modulesDependency = [
    "homeModule", "detectionModule", "introductionModule", "libraryModule",
    "personalityModule", "typesModule", "typeTplModule", "systemsModule", "enneagramModule",
    "discModule", "mbtiModule", "bigModule", "examsModule", "enneagramExamModule", "enneagramResultModule",
    "enterExamResultsModule", "comparisonModule"
];

var app = angular.module(
    "app",
    enneagram.externalDependencies
        .concat(enneagram.internalDependency)
        .concat(enneagram.modulesDependency)
);