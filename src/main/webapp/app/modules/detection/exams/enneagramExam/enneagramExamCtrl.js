angular.module('enneagramExamModule').controller('enneagramExamCtrl', function ($scope, $state, enneagramExamSrvc) {

    $scope.Data = {
        allQuestions: "",
        questions: [],
        currentQuestions: [],
        currentPage: -1,
        maxPageNum: 0,
        enneagramResultGroups: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        allQuestions: "خیال‌باف و رؤیاپرداز هستم/مرد عمل و واقع‌بین هستم/معمولاً مشکلی با ایستادن در روی دیگران ندارم/سعی می‌کنم حتی‌الامکان با بقیه جروبحث نکنم/به طور معمول مردم‌دار، جذاب و بلندپرواز هستم/به طور معمول خشک و رسمی و آرمان‌گرا هستم/معمولاً اجازه نمی‌دهم چیزی حواسم را پرت کند/سعی می‌کنم در لحظه زندگی کنم و لذت ببرم/خون‌گرم هستم و از پیدا کردن دوست‌های تازه خوشحال می‌شوم/با دیگران زیاد گرم نمی‌گیرم/به راحتی مضطرب می‌شوم/چندان پیش نمی‌آید که خونسردی‌ام را از دست بدهم/دست به هرکاری می‌زنم تا گلیم خودم را از آب بکشم/به هیچ وجه حاضر نیستم اصول و عقاید خودم را زیر پا بگذارم/نیاز دارم علاقه‌ام را به سایرین ابراز کنم/ترجیح می‌دهم فاصله‌ام را با دیگران حفظ کنم/وقتی کار جدیدی را شروع می‌کنم دوست دارم بدانم چه نفعی برایم دارد/اگر قرار است کار جدیدی را شروع کنم، دوست دارم برایم لذت‌بخش باشد/اکثر اوقات توجهم معطوف به خودم است/اکثر اوقات توجهم معطوف به سایرین است/نقطه‌ی قوت من آگاهی و دانشم است/نقطه‌ی قوت من قدرت و قاطعیتم است/چندان به توانایی‌های خودم اطمینان ندارم/اعتماد به نفس کامل دارم/روابطم با سایرین برایم مهم‌تر از رسیدن به اهدافم است/رسیدن به اهدافم برایم مهم‌تر از روابطم با سایرین است/معمولاْ جرئت نمی‌کنم نظرات خودم را بیان کنم/نظراتم را به راحتی مطرح می‌کنم/برایم دشوار است که از راهکارهای دیگر چشم بپوشم و فقط به یک روش خاص عمل کنم/برایم دشوار است که آسان‌گیر و انعطاف‌پذیر باشم/معمولاً دودل‌ام و زیاد تردید می‌کنم/بی‌پروا و اهل خطرکردن‌ام/همیشه سعی کرده‌ام خیلی با دیگران گرم نگیرم و این موضوع مشکلات زیادی به وجود آورده/همیشه دوست داشته‌ام دیگران به من متکی باشند و این موضوع برایم مشکل‌آفرین شده/راحت می‌توانم احساساتم را کنار بگذارم و کاری را انجام بدهم/همیشه باید اول با احساساتم کنار بیایم تا بعد بتوانم کاری را شروع کنم/معمولاْ آدم محتاطی هستم و کارهایم روی حساب و کتاب است/معمولاً ماجراجو و اهل خطر کردن هستم/از معاشرت با دیگران لذت می‌برم و سعی می‌کنم در موقع نیاز کمک‌حالشان باشم/آدم توداری هستم و جز در موقع ضرورت کاری به کار بقیه ندارم/خیلی وقت ها احساس می‌کنم که باید مثل کوه محکم باشم/خیلی وقت ها احساس می‌کنم که باید دقیق و بی‌عیب‌و‌نقص باشم/دوست دارم به هر قیمتی که شده استقلال خودم را حفظ کنم/دوست دارم به هر قیمتی که شده آرامش روحی و روانی خودم را حفظ کنم/بیش از حد بدبین و شکاک هستم/بیش از حد خوش‌قلب و احساساتی هستم/اغلب نگرانم که مبادا فرصت‌های بهتری وجود داشته باشند و من آن‌ها را از دست بدهم/اغلب نگرانم که اگر غافل بشوم، کسی از وضعیتم سوء استفاده بکند/به قدری سعی می‌کنم خاص و منحصربفرد باشم که مردم از دستم ذله می‌شوند/زیاد برای بقیه تعیین تکلیف می‌کنم و مردم از دستم شاکی هستند/وقتی مشکلی پیش می‌آید، راحت می‌توانم آن را نادیده بگیرم/وقتی مشکلی پیش می‌آید، سرم را با کار جالبی گرم می‌کنم/به دوستانم اعتماد دارم و آن‌ها هم می‌دانند که می‌توانند روی من حساب باز کنند/به دیگران تکیه نمی‌کنم و کارهایم را خودم انجام می‌دهم/آدم حواس‌پرتی هستم و همیشه فکرم جای دیگری است/گاه و بی‌گاه در لاک خودم فرو می‌روم و گرفته و ترشرو می‌شوم/دوست دارم بقیه را به چالش بکشم و به تحرک وادار کنم/دوست دارم در موقع نیاز به بقیه کمک کنم و به آن‌ها آرامش بدهم/خون‌گرم و اجتماعی هستم/کوشا، جدی و منضبط هستم/خجالت می‌کشم که مهارت‌هایم را در حضور سایرین به نمایش بگذارم/دوست دارم مهارت‌ها و توانایی‌هایم را به بقیه نشان بدهم/برای من دنبال کردن علایق شخصی مهم‌تر از داشتن ثبات و امنیت است/برای من ثبات و امنیت مهم‌تر از دنبال کردن علایق شخصی است/وقتی با دیگران اختلاف نظر پیدا می‌کنم، کوتاه می‌آیم/وقتی با دیگران اختلاف نظر پیدا می‌کنم، به هیچ وجه پا پس نمی‌کشم/معمولاً راحت کوتاه می‌آیم و به ساز دیگران می‌رقصم/به خواسته‌ی بقیه تن در نمی‌دهم و کاری را که به نظرم درست است، انجام می‌دهم/حس شوخ‌طبعی بی‌نظیرم و روحیه‌ی مثبتم مایه‌ی تحسین بقیه است/حضورم به بقیه آرامش می‌دهد و می‌دانند که می‌توانند روی کمک من حساب باز کنند/راحت می‌توانم در دل مردم جا باز کنم و این مهارت خیلی جاها به دادم رسیده/با وجود این که مهارت‌های اجتماعی چندانی ندارم، توانسته‌ام از عهده‌ی کارهایم بربیایم",
        answerKey: [4, 6, 8, 9, 3, 1, 5, 7, 2, 4, 6, 9, 8, 1, 2, 5, 3, 7, 4, 9, 5, 8, 6, 1, 2, 3, 4, 7, 5, 1, 6, 8, 9, 2,
            3, 4, 6, 7, 2, 1, 8, 3, 5, 9, 6, 2, 7, 8, 4, 1, 9, 7, 6, 3, 5, 4, 8, 2, 7, 1, 9, 3, 5, 6, 4, 8, 9, 1, 7, 2, 3, 5],
        unanswered: false
    };

    $scope.Func = {
        prepareQuestions: function () {
            let questions = $scope.Data.allQuestions.split("/");
            $scope.Data.maxPageNum = questions.length / 4 - 1;
            $scope.Slider.pageSliderOptions.ceil = $scope.Data.maxPageNum;
            for (let i = 0; i < questions.length / 2; i++) {
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
            $scope.Func.changePage("next");
        },
        changePage: function (direction) {
            let answer = $scope.Func.isAllAnswered();
            if (direction !== "next" || answer === "answered") {
                $scope.Data.unanswered = false;
                let changeValue = (direction === "next") ? 1 : -1;
                $scope.Data.currentPage += changeValue;
                $scope.Data.currentQuestions = [
                    $scope.Data.questions[2 * $scope.Data.currentPage],
                    $scope.Data.questions[2 * $scope.Data.currentPage + 1]
                ];
            } else {
                $scope.Data.unanswered = true;
            }
        },
        onAnswerSelect: function (question, value) {
            if (question.answer !== value) {
                if (question.answer)
                    $scope.Data.enneagramResultGroups[question.answer - 1]--;
                question.answer = value;
                $scope.Data.enneagramResultGroups[question.answer - 1]++;
            }
        },
        isAllAnswered: function () {
            let answer = "";
            _.each($scope.Data.currentQuestions, function (question) {
                if (!answer && !question.answer)
                    answer = question;
            });
            if (!answer || !$scope.Data.questions.length)
                answer = "answered";
            return "answered";
        },
        calculateResults: function () {
            let answer = $scope.Func.isAllAnswered();
            if (answer === "answered") {
                $scope.Data.unanswered = false;
                let resultsString = "";
                for (let i = 0; i < 9; i++) {
                    resultsString += ($scope.Data.enneagramResultGroups[i]);
                    if (i < 8)
                        resultsString += "X";
                }
                $state.go('home.detection.exams.enneagramExam.enneagramResult', {
                    possibleGroups: $state.params.possibleGroups,
                    enneagramResultGroups: resultsString
                });
            } else {
                $scope.Data.unanswered = true;
            }
        }
    };

    $scope.Slider = {
        pageSliderOptions: {
            readOnly: true,
            floor: 0,
            ceil: $scope.Data.maxPageNum,
            showSelectionBar: true
        }
    };

    let Run = function () {
        $scope.Func.prepareQuestions();
    };

    Run();
});
