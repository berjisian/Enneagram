angular.module('otherExamsModule').controller('otherExamsCtrl', function ($scope, $state) {

    $scope.Data = {
        exams: [
            {
                name: "BIG",
                description: "                با انتخاب گزینه‌ی <b>شرکت در آزمون</b> به صفحه‌ی خارجی truity.com/test/big-five-personality-test در یک زبانه‌ی جدید هدایت می‌شوید. این آزمون از ۶۰ پرسش تشکیل شده که هرپرسش میزان موافقت شما با گزاره‌ای را از درجه‌ی یک تا پنج می‌سنجد. پس از تکمیل پرسش‌ها درصدهایی را که در تصویر مشخص شده، به خاطر سپارید و با انتخاب گزینه‌ی <b>ورود نتیجه</b> آن را در سامانه ثبت کنید.\n",
                image: "bigResultSample.PNG",
                address: "https://www.truity.com/test/big-five-personality-test"
            },
            {
                name: "DISC",
                description: "                با انتخاب گزینه‌ی <b>شرکت در آزمون</b> به صفحه‌ی خارجی truity.com/test/disc-behavior-inventory در یک زبانه‌ی جدید هدایت می‌شوید. این آزمون از ۵۴ پرسش تشکیل شده که هرپرسش میزان موافقت شما با گزاره‌ای را از درجه‌ی یک تا پنج می‌سنجد. پس از تکمیل پرسش‌ها درصدهایی را که در تصویر مشخص شده، به خاطر سپارید و با انتخاب گزینه‌ی <b>ورود نتیجه</b> آن را در سامانه ثبت کنید.\n",
                image: "DISCResultSample.PNG",
                address: "https://www.truity.com/test/disc-behavior-inventory"
            },
            {
                name: "MBTI",
                description: "                با انتخاب گزینه‌ی <b>شرکت در آزمون</b> به صفحه‌ی خارجی 16personalities.com/free-personality-test در یک زبانه‌ی جدید هدایت می‌شوید. این آزمون از ۶۰ پرسش تشکیل شده که هرپرسش میزان موافقت شما با گزاره‌ای را از درجه‌ی یک تا هفت می‌سنجد. پس از تکمیل پرسش‌ها موردی را که در تصویر مشخص شده، به خاطر سپارید و با انتخاب گزینه‌ی <b>ورود نتیجه</b> آن را در سامانه ثبت کنید.\n",
                image: "MBTIResultSample.PNG",
                address: "https://www.16personalities.com/free-personality-test"
            }
        ],
        display: {
            name: "",
            description: "",
            image: "",
            address: ""
        }
    };

    $scope.Func = {
        prepareData: function () {
            $scope.Data.display.name = $state.$current.name.split(".")[3].split("Exam")[0].toUpperCase();
            _.each($scope.Data.exams, function (exam) {
                if (exam.name === $scope.Data.display.name)
                    $scope.Data.display = exam;
            })
            if ($scope.Data.display.name === "BIG")
                $scope.Data.display.name = "Big 5"
        }
    };

    let Run = function () {
        $scope.Func.prepareData();
    };

    Run();
});
