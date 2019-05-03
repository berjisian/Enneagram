angular.module('detectionModule').controller('detectionCtrl', function ($scope, $uibModal, detectionSrvc) {

    $scope.Data = {
        mode: "none",
        tempProbableGroups: [],
        tempPreferredGroups: [],
        groups: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        probableGroups: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        preferredGroups: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        resultGroups: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        mbtiGroups: ["INTJ", "INTP", "INFJ", "INFP", "ISTJ", "ISTP", "ISFJ", "ISFP",
                    "ENTJ", "ENTP", "ENFJ", "ENFP", "ESTJ", "ESTP", "ESFJ", "ESFP"],
        approvedMbtiGroup: "",
        transferredMbtiResult: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        discGroups: ["D", "I", "S", "C"],
        approvedDiscGroup: "",
        transferredDiscResult: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        finalResult: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        questions: [],
        currentQuestions: [],
        page: {
            size: 15,
            num: 0
        },
        allQuestions: "خیال‌باف و رؤیاپرداز هستم\n" +
            "مرد عمل و واقع‌بین هستم\n" +
            "معمولاً مشکلی با ایستادن در روی دیگران ندارم\n" +
            "سعی می‌کنم حتی‌الامکان با بقیه جروبحث نکنم\n" +
            "به طور معمول مردم‌دار، جذاب و بلندپرواز هستم\n" +
            "به طور معمول خشک و رسمی و آرمان‌گرا هستم\n" +
            "معمولاً اجازه نمی‌دهم چیزی حواسم را پرت کند\n" +
            "سعی می‌کنم در لحظه زندگی کنم و لذت ببرم\n" +
            "خون‌گرم هستم و از پیدا کردن دوست‌های تازه خوشحال می‌شوم\n" +
            "با دیگران زیاد گرم نمی‌گیرم\n" +
            "به راحتی مضطرب می‌شوم\n" +
            "چندان پیش نمی‌آید که خونسردی‌ام را از دست بدهم\n" +
            "دست به هرکاری می‌زنم تا گلیم خودم را از آب بکشم\n" +
            "به هیچ وجه حاضر نیستم اصول و عقاید خودم را زیر پا بگذارم\n" +
            "نیاز دارم علاقه‌ام را به سایرین ابراز کنم\n" +
            "ترجیح می‌دهم فاصله‌ام را با دیگران حفظ کنم\n" +
            "وقتی کار جدیدی را شروع می‌کنم دوست دارم بدانم چه نفعی برایم دارد\n" +
            "اگر قرار است کار جدیدی را شروع کنم، دوست دارم برایم لذت‌بخش باشد\n" +
            "اکثر اوقات توجهم معطوف به خودم است\n" +
            "اکثر اوقات توجهم معطوف به سایرین است\n" +
            "نقطه‌ی قوت من آگاهی و دانشم است\n" +
            "نقطه‌ی قوت من قدرت و قاطعیتم است\n" +
            "چندان به توانایی‌های خودم اطمینان ندارم\n" +
            "اعتماد به نفس کامل دارم\n" +
            "روابطم با سایرین برایم مهم‌تر از رسیدن به اهدافم است\n" +
            "رسیدن به اهدافم برایم مهم‌تر از روابطم با سایرین است\n" +
            "معمولاْ جرئت نمی‌کنم نظرات خودم را بیان کنم\n" +
            "نظراتم را به راحتی مطرح می‌کنم\n" +
            "برایم دشوار است که از راهکارهای دیگر چشم بپوشم و فقط به یک روش خاص عمل کنم\n" +
            "برایم دشوار است که آسان‌گیر و انعطاف‌پذیر باشم\n" +
            "معمولاً دودل‌ام و زیاد تردید می‌کنم\n" +
            "بی‌پروا و اهل خطرکردن‌ام\n" +
            "همیشه سعی کرده‌ام خیلی با دیگران گرم نگیرم و این موضوع مشکلات زیادی به وجود آورده\n" +
            "همیشه دوست داشته‌ام دیگران به من متکی باشند و این موضوع برایم مشکل‌آفرین شده\n" +
            "راحت می‌توانم احساساتم را کنار بگذارم و کاری را انجام بدهم\n" +
            "همیشه باید اول با احساساتم کنار بیایم تا بعد بتوانم کاری را شروع کنم\n" +
            "معمولاْ آدم محتاطی هستم و کارهایم روی حساب و کتاب است\n" +
            "معمولاً ماجراجو و اهل خطر کردن هستم\n" +
            "از معاشرت با دیگران لذت می‌برم و سعی می‌کنم در موقع نیاز کمک‌حالشان باشم\n" +
            "آدم توداری هستم و جز در موقع ضرورت کاری به کار بقیه ندارم\n" +
            "خیلی وقت ها احساس می‌کنم که باید مثل کوه محکم باشم\n" +
            "خیلی وقت ها احساس می‌کنم که باید دقیق و بی‌عیب‌و‌نقص باشم\n" +
            "دوست دارم به هر قیمتی که شده استقلال خودم را حفظ کنم\n" +
            "دوست دارم به هر قیمتی که شده آرامش روحی و روانی خودم را حفظ کنم\n" +
            "بیش از حد بدبین و شکاک هستم\n" +
            "بیش از حد خوش‌قلب و احساساتی هستم\n" +
            "اغلب نگرانم که مبادا فرصت‌های بهتری وجود داشته باشند و من آن‌ها را از دست بدهم\n" +
            "اغلب نگرانم که اگر غافل بشوم، کسی از وضعیتم سوء استفاده بکند\n" +
            "به قدری سعی می‌کنم خاص و منحصربفرد باشم که مردم از دستم ذله می‌شوند\n" +
            "زیاد برای بقیه تعیین تکلیف می‌کنم و مردم از دستم شاکی هستند\n" +
            "وقتی مشکلی پیش می‌آید، راحت می‌توانم آن را نادیده بگیرم\n" +
            "وقتی مشکلی پیش می‌آید، سرم را با کار جالبی گرم می‌کنم\n" +
            "به دوستانم اعتماد دارم و آن‌ها هم می‌دانند که می‌توانند روی من حساب باز کنند\n" +
            "به دیگران تکیه نمی‌کنم و کارهایم را خودم انجام می‌دهم\n" +
            "آدم حواس‌پرتی هستم و همیشه فکرم جای دیگری است\n" +
            "گاه و بی‌گاه در لاک خودم فرو می‌روم و گرفته و ترشرو می‌شوم\n" +
            "دوست دارم بقیه را به چالش بکشم و به تحرک وادار کنم\n" +
            "دوست دارم در موقع نیاز به بقیه کمک کنم و به آن‌ها آرامش بدهم\n" +
            "خون‌گرم و اجتماعی هستم\n" +
            "کوشا، جدی و منضبط هستم\n" +
            "خجالت می‌کشم که مهارت‌هایم را در حضور سایرین به نمایش بگذارم\n" +
            "دوست دارم مهارت‌ها و توانایی‌هایم را به بقیه نشان بدهم\n" +
            "برای من دنبال کردن علایق شخصی مهم‌تر از داشتن ثبات و امنیت است\n" +
            "برای من ثبات و امنیت مهم‌تر از دنبال کردن علایق شخصی است\n" +
            "وقتی با دیگران اختلاف نظر پیدا می‌کنم، کوتاه می‌آیم\n" +
            "وقتی با دیگران اختلاف نظر پیدا می‌کنم، به هیچ وجه پا پس نمی‌کشم\n" +
            "معمولاً راحت کوتاه می‌آیم و به ساز دیگران می‌رقصم\n" +
            "به خواسته‌ی بقیه تن در نمی‌دهم و کاری را که به نظرم درست است، انجام می‌دهم\n" +
            "حس شوخ‌طبعی بی‌نظیرم و روحیه‌ی مثبتم مایه‌ی تحسین بقیه است\n" +
            "حضورم به بقیه آرامش می‌دهد و می‌دانند که می‌توانند روی کمک من حساب باز کنند\n" +
            "راحت می‌توانم در دل مردم جا باز کنم و این مهارت خیلی جاها به دادم رسیده\n" +
            "با وجود این که مهارت‌های اجتماعی چندانی ندارم، توانسته‌ام از عهده‌ی کارهایم بربیایم",
        answerKey: [4, 6, 8, 9, 3, 1, 5, 7, 2, 4, 6, 9, 8, 1, 2, 5, 3, 7, 4, 9, 5, 8, 6, 1, 2, 3, 4, 7, 5, 1, 6, 8, 9, 2,
            3, 4, 6, 7, 2, 1, 8, 3, 5, 9, 6, 2, 7, 8, 4, 1, 9, 7, 6, 3, 5, 4, 8, 2, 7, 1, 9, 3, 5, 6, 4, 8, 9, 1, 7, 2, 3, 5]
    };

    $scope.Func = {
        prepareGroups: function () {
            for (let i = 1; i < 10; i++)
                $scope.Data.tempProbableGroups.push({
                    value: i,
                    active: false
                });
            $scope.Data.tempPreferredGroups = angular.copy($scope.Data.tempProbableGroups);
        },
        prepareQuestions: function () {
            let questions = $scope.Data.allQuestions.split("\n");
            for (let i = 0; i < (questions.length / 2); i++) {
                $scope.Data.questions.push({
                    num: i,
                   first: {
                       phrase: questions[2 * i],
                       value: $scope.Data.answerKey[2 * i]
                   },
                   second: {
                       phrase: questions[2 * i + 1],
                       value: $scope.Data.answerKey[2 * i + 1]
                   },
                    answer: null
                });
            }
        },
        onOpenExplanationClick: function () {
            $uibModal.open({
                templateUrl: 'app/modules/detection/explanationModal/explanationModal.html',
                controller: 'explanationModalCtrl',
                windowClass : 'show',
                size: 'lg',
                animation: true,
                resolve: {}
            }).result.then(function () {
                $scope.Data.mode = "selectProbableGroups";
            }, function () {
                $scope.Data.mode = "selectProbableGroups";
            });
        },
        onCancelExplanationClick: function () {
            $(".pre-explanation").slideUp("slow");
        },
        onGroupClick: function (type, group) {
            let list = [];
            if (type === 'probable')
                list = $scope.Data.probableGroups;
            else
                list = $scope.Data.preferredGroups;
            list[group - 1] = list[group - 1] ? 0 : 1;
            if (type === 'probable')
                $scope.Data.tempProbableGroups[group - 1].active = !$scope.Data.tempProbableGroups[group - 1].active;
            else
                $scope.Data.tempPreferredGroups[group - 1].active = !$scope.Data.tempPreferredGroups[group - 1].active;
        },
        onAnswerSelect: function (question, value) {
            if (question.answer !== value) {
                if (question.answer)
                    $scope.Data.resultGroups[question.answer - 1]--;
                question.answer = value;
                $scope.Data.resultGroups[question.answer - 1]++;
            }
        },
        isAllAnswered: function () {
            let answer = "";
            _.each($scope.Data.questions, function (question) {
                if (!answer && !question.answer)
                    answer = question;
            });
            if (!answer || !$scope.Data.questions.length)
                answer = "answered";
            return answer;
        },
        calculateTestResult: function () {
            let answer = $scope.Func.isAllAnswered();
            if (answer === "answered") {
                $scope.Data.showAnswer = false;
                $scope.Data.mode = "showAnswer";
                $scope.Func.scrollToTop();
            } else {
                $scope.Data.showAnswer = true;
                $("html, body").animate({scrollTop: $('#question-' + answer.num).offset().top }, 500);
            }
        },
        transferMbtiResult: function () {
            switch ($scope.Data.approvedMbtiGroup) {
                case "INTP":
                    $scope.Data.transferredMbtiResult[3] = 1;
                    $scope.Data.transferredMbtiResult[4] = 1;
                    break;
                case "INFP":
                case "INFJ":
                    $scope.Data.transferredMbtiResult[3] = 1;
                    $scope.Data.transferredMbtiResult[8] = 1;
                    break;
                case "INTJ":
                    $scope.Data.transferredMbtiResult[0] = 1;
                    $scope.Data.transferredMbtiResult[4] = 1;
                    break;
                case "ISTP":
                    $scope.Data.transferredMbtiResult[4] = 1;
                    $scope.Data.transferredMbtiResult[5] = 1;
                    break;
                case "ISFP":
                case "ISFJ":
                    $scope.Data.transferredMbtiResult[5] = 1;
                    $scope.Data.transferredMbtiResult[8] = 1;
                    break;
                case "ISTJ":
                    $scope.Data.transferredMbtiResult[0] = 1;
                    $scope.Data.transferredMbtiResult[5] = 1;
                    break;
                case "ENTP":
                    $scope.Data.transferredMbtiResult[6] = 1;
                    $scope.Data.transferredMbtiResult[2] = 1;
                    break;
                case "ENFP":
                    $scope.Data.transferredMbtiResult[6] = 1;
                    $scope.Data.transferredMbtiResult[1] = 1;
                    break;
                case "ENTJ":
                case "ESTJ":
                    $scope.Data.transferredMbtiResult[7] = 1;
                    $scope.Data.transferredMbtiResult[2] = 1;
                    break;
                case "ENFJ":
                    $scope.Data.transferredMbtiResult[2] = 1;
                    $scope.Data.transferredMbtiResult[1] = 1;
                    break;
                case "ESTP":
                    // No solid results
                    break;
                case "ESFP":
                    $scope.Data.transferredMbtiResult[1] = 1;
                    $scope.Data.transferredMbtiResult[6] = 1;
                    break;
                case "ESFJ":
                    $scope.Data.transferredMbtiResult[1] = 1;
                    $scope.Data.transferredMbtiResult[5] = 1;
                    break;
            }
        },
        transferDiscResult: function () {
            switch ($scope.Data.approvedDiscGroup) {
                case "D":
                    $scope.Data.transferredDiscResult[2] = 1;
                    $scope.Data.transferredDiscResult[6] = 1;
                    $scope.Data.transferredDiscResult[7] = 1;
                    break;
                case "I":
                    $scope.Data.transferredDiscResult[1] = 1;
                    $scope.Data.transferredDiscResult[2] = 1;
                    $scope.Data.transferredDiscResult[6] = 1;
                    break;
                case "S":
                    $scope.Data.transferredDiscResult[3] = 1;
                    $scope.Data.transferredDiscResult[5] = 1;
                    $scope.Data.transferredDiscResult[8] = 1;
                    break;
                case "C":
                    $scope.Data.transferredDiscResult[0] = 1;
                    $scope.Data.transferredDiscResult[4] = 1;
                    $scope.Data.transferredDiscResult[5] = 1;
                    break;
            }
        },
        scrollToTop: function () {
            window.scrollTo(0, 0);
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            }
        },
        calculateFinalResult: function () {
            for (let i = 0; i < 9; i++) {
                if ($scope.Data.resultGroups[i])
                    $scope.Data.finalResult[i] =
                        $scope.Data.resultGroups[i] +
                        $scope.Data.probableGroups[i] +
                        $scope.Data.preferredGroups[i] +
                        $scope.Data.transferredMbtiResult[i] +
                        $scope.Data.transferredDiscResult[i];
            }
        }
    };

    const Run = function () {
        $scope.Func.scrollToTop();
        $scope.Func.prepareGroups();
        $scope.Func.prepareQuestions();
        $scope.$watch("Data.resultGroups", function () {
            $scope.Func.calculateFinalResult();
        }, true);
        $scope.$watch("Data.probableGroups", function () {
            $scope.Func.calculateFinalResult();
        }, true);
        $scope.$watch("Data.preferredGroups", function () {
            $scope.Func.calculateFinalResult();
        }, true);
        $scope.$watch("Data.transferredMbtiResult", function () {
            $scope.Func.calculateFinalResult();
        }, true);
        $scope.$watch("Data.transferredDiscResult", function () {
            $scope.Func.calculateFinalResult();
        }, true);
    };

    Run();
});
