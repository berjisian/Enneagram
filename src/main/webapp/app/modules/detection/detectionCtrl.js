angular.module('detectionModule').controller('detectionCtrl', function ($scope, $uibModal, detectionSrvc) {

    $scope.Data = {
        mode: "none",
        groupsTitle: [
            "پیش از بررسی آزمون، دوست دارید با هرکدام از گروه‌ها کمی آشنا بشوید؟",
            "کمال‌گرا",
            "یاری‌رسان",
            "موفقیت‌طلب",
            "فردگرا",
            "جستجوگر",
            "وفادار",
            "خوش‌گذران",
            "رهبر",
            "میانجی"
        ],
        groupsIntroduction:
            [
                "افراد هرگروه باورها و رفتارهای مخصوص خود را دارند. شاید شما با دیدن گوشه‌ای از این رفتارها به راحتی جایگاه خود را بین این نه گروه پیدا کنید. برای آشنایی بیشتر با هرگروه تصویر آن را انتخاب کنید. اگر بعد از خواندن توصیفات یک گروه احساس کردید ممکن است عضوی از آن باشید، بر دکمه‌ی سبزرنگ آن گروه کلیک کنید. پس از اتمام آزمون می‌توانید تصوری را که از خودتان داشتید، با نتایج حاصل از آزمون مقایسه کنید و میزان مطابقت آن‌ها را بسنجید.",
                "داشتن معیارهای صحیح در زندگی برایم ارزش بالایی دارد و از خودم انتظار دارم طبق آن معیارها زندگی کنم. برایم آسان است که ایرادات موجود را پیدا کنم و برایشان چاره بیاندیشم. ممکن است در نظر بعضی‌ها بیش از حد عیب‌جو یا کمال‌گرا باشم، ولی سخت می‌توانم کارهای ناتمام و نادرست را نادیده بگیرم و یا آن‌ها را قبول کنم. اگر مسئول انجام کاری بشوم، مطمئناً به خوبی از عهده‌اش برمی‌آیم و از این بابت به خودم افتخار می‌کنم. از سمبل‌کاری‌های دیگران و رفتارهای غیرمسئولانه‌شان می‌رنجم، اما معمولاً آزردگی خود را به رویشان نمی‌آورم. کار برایم از تفریح مهم‌تر است و اگر لازم باشد از علایقم می‌گذرم تا کاری را به سرانجام برسانم.",
                "نسبت به احساسات دیگران حساسم. حتی اگر کسی را نشناسم، به نیازهایش پی می‌برم. بعضی وقت‌ها از این که از نیازهای بقیه خبر دارم، ناراحت می‌شوم؛ خصوصاً وقتی به رنج یا ناراحتی‌شان پی می‌برم، چون کار چندانی از دستم برایشان برنمی‌آید. می‌توانم به راحتی خودم را وقف دیگران کنم. بعضی وقت‌ها آرزو می‌کنم که کاش می‌توانستم نیازهای بقیه را نادیده بگیرم، چون اهمیت دادن به دیگران باعث می‌شود انرژی بیشتری صرف آن‌ها کنم و توان چندانی برای رسیدگی به خودم نداشته باشم. فقط می‌خواهم کمک‌حال بقیه باشم و اگر کسی فکر کند که دارم به جایش تصمیم می‌گیرم و زندگی‌اش را کنترل می‌کنم، احساساتم جریحه‌دار می‌شود. دوست دارم خوب و مهربان به نظر برسم، ولی اگر بقیه به من بی‌توجهی کنند یا به انگیزه‌ام پی نبرند، ناراحت و حتی پرتوقع می‌شوم. خیلی مهم است که با بقیه رابطه‌ی خوبی داشته باشم و برای رسیدن به این هدف سخت تلاش می‌کنم.",
                "دوست دارم در کاری که انجام می‌دهم، بهترین باشم. این طرز فکر به من انگیزه می‌دهد. در خیلی از کارها پیشرفت می‌کنم و اسم و رسمی به هم می‌زنم. کارهای زیادی انجام داده‌ام و تقریباً در تمام آن‌ها موفق بوده‌ام. به شدت با فعالیت‌هایم احساس نزدیکی می‌کنم، چون معتقدم ارزش هرکس  به کارهایش و شهرتی که از بابت آن‌ها کسب می‌کند، بستگی دارد. همیشه به قدری کار زیاد دارم که وقت نمی‌کنم به تمامشان برسم. برای همین معمولاً وقت خلوت کردن با خودم را ندارم و چندان به احساساتم فکر نمی‌کنم تا بلکه بتوانم کارهایم را به سرانجام برسانم. از آن‌جا که همیشه سرم شلوغ است، برایم سخت است که بنشینم و هیچ کاری نکنم. طاقت تحمل کسانی که وقت را تلف می‌کنند، ندارم. گاهی کارهایی را که بقیه به کندی انجام می‌دهند، خودم به دوش می‌گیرم. دوست دارم همیشه احساس کنم از بقیه یک سروگردن بالاتر هستم. با وجود این که از رقابت لذت می‌برم، هم‌گروهی خوبی هستم.",
                "آدمی حساس با احساسات عمیق هستم. اغلب احساس می‌کنم کسی من را درک نمی‌کند و تنها هستم، چون حس می‌کنم که با بقیه تفاوت دارم. اطرافیانم فکر می‌کنند بیش از حد حساس هستم و نباید این قدر احساساتی باشم. خیلی دوست دارم که به کسی وابستگی عاطفی عمیقی داشته باشم. معمولاً دلم برای نداشته‌هایم غنج می‌زند و به داشته‌هایم توجه چندانی ندارم، برای همین روابط فعلی برایم چندان رضایت‌بخش نیستند. تمام عمر دنبال کسی بوده‌ام که من را تمام و کمال درک کند و اگر چنین کسی را پیدا نکنم، افسرده و ناراحت می‌شوم. گاهی با خودم فکر می‌کنم که چرا دیگران خوشبخت‌تر و خوشحال‌تر از من هستند. از تماشای هرچیز زیبایی لذت می‌برم و در پیدا کردن زیبایی‌ها مهارت دارم. دنیا برایم سرشار از رنگ‌ها و احساسات گوناگون است.",
                "به نظرم خودم آدم ساکت و دقیقی هستم و در مقایسه با اکثر افراد به وقت بیشتری برای تنها بودن احتیاج دارم. معمولاً ترجیح می‌دهم گذر وقایع را مشاهده کنم تا این که خودم را در آن‌ها درگیر کنم. دوست ندارم بقیه از من توقعات زیادی داشته باشند. دوست ندارم احساساتم را برای کسی شرح بدهم. در تنهایی احساساتم را بهتر درک می‌کنم و اغلب از تجربیاتی که در ذهنم مرور می‌کنم، بیشتر از موقعی که عملاً با آن‌ها روبرو می‌شوم، لذت می‌برم. کم پیش می‌آید که وقتی تنها هستم، کسل و بی‌حوصله بشوم، چون ذهنم همیشه فعال است. برایم مهم است که وقت و انرژی خود را حفظ کنم و برای همین دوست دارم زندگی‌ام ساده و بی‌تکلف باشد و حتی‌الامکان به کسی وابسته نباشم.",
                "قدرت تخیل فعالی دارم، خصوصاً وقتی پای مسائلی در میان است که می‌توانند امنیتم را تهدید کنند. معمولاً متوجه خطرات بالقوه می‌شوم و به قدری از بابتشان نگران می‌شوم و می‌ترسم که انگار قرار است همین فردا دامنم را بگیرند. ترجیح می‌دهم از خطر اجتناب کنم و یا از قبل برای آن آماده بشوم. از سوی دیگر قوه‌ی تخیلم باعث می‌شود آدم مبتکر و بامهارتی بشوم. حس شوخ‌طبعی نامتعارفم را هم مدیون همین قوه‌ی تخیل هستم. ای کاش راحت‌تر می‌توانستم به زندگی اطمینان کنم، اما معمولاً از بابت اطرافیانم و اتفاقاتی که پیرامونم می‌افتند، دل‌نگرانم. معمولاً ایرادات بقیه را راحت پیدا می‌کنم. برای همین بعضی‌ها فکر می‌کنند که آدم دقیق و موشکافی هستم. به صاحبان قدرت اعتماد ندارم و دوست ندارم خودم هم یکی از آن‌ها بشوم. وقتی نسبت به کسی یا هدفی متعهد می‌شوم، سفت و سخت به آن وفادار می‌مانم.",
                "آدم خوش‌بینی هستم. از انجام دادن کارهای جدید و جالب لذت می‌برم. ذهن بسیار فعالی دارم که به سرعت بین فکرهای مختلف نوسان می‌کند. دوست دارم افکاری را که در ذهنم می‌چرخند، کنار هم بگذارم و از آن‌ها تصویری کلی بسازم و وقتی مسائلی را که در ظاهر بی‌ربط هستند، به یکدیگر مرتبط می‌کنم، هیحان‌زده می‌شوم. کارهای جالب توجهم را جلب خود می‌کنند و بخش زیادی از انرژی خود را صرف آن‌ها می‌کنم. انجام دادن کارهای تکراری و حوصله‌سربر برایم سخت هستند. دوست دارم در ابتدای یک طرح، در طول مراحل برنامه‌ریزی آن، که امکان در نظر گرفتن گزینه‌های جالب وجود دارد، حضور داشته باشم. وقتی علاقه‌ام به چیزی را از دست بدهم، سخت بتوانم آن را ادامه بدهم و توجهم جلب کار جذاب بعدی می‌شود. وقتی از موضوعی ناراحت می‌شوم، سرم را با افکار خوشایندتری گرم می‌کنم. به نظر من آدم باید از زندگی‌اش لذت ببرد.",
                "با مسائل به صورت همه یا هیچ برخورد می‌کنم، خصوصاً آن‌هایی که برایم اهمیت بالایی دارند. برای قوی بودن، درستکار بودن و قابل اعتماد بودن ارزش زیادی قائل هستم. آدم نتیجه‌ی کارهایش را می‌بیند. به دیگران اعتماد نمی‌کنم، مگر این که ثابت کنند ارزش اعتمادم را دارند. دوست دارم بقیه با من روراست باشند و اگر کسی بخواهد فریبم بدهد یا به من دروغ بگوید، متوجه می‌شوم. تحمل ضعف سایرین را ندارم، مگر این که از دلیلش خبر داشته باشم یا این که ببینم دارند برای برطرف کردنش تلاش می‌کنند. هم‌چنین نمی‌توانم از دستورات صاحبان قدرتی که به آن‌ها احترام نمی‌گذارم، پیروی کنم. خودم بهتر می‌توانم بار مسئولیت را به دوش بکشم. وقتی عصبانی می‌شوم، به سختی می‌توانم جلوی احساساتم را بگیرم. همواره آماده‌ام تا از دوستان و عزیزانم دفاع کنم، مخصوصاً وقتی معتقد باشم با آن‌ها عادلانه برخورد نشده. اگرچه ممکن است در هر جدالی برنده نشوم، ولی حداقل تلاشم را می‌کنم.",
                "می‌توانم نظرات همه را به راحتی درک کنم. حتی ممکن است گاهی مردد شوم، چون مزایا و معایب هرراهی را می‌بینم. این توانایی کمکم می‌کند تا اختلاف‌های بین بقیه را حل کنم. و هم‌چنین باعث می‌شود بقیه را بهتر بشناسم. زیاد پیش می‌آید که حواسم پرت می‌شود و توجهم به کارهای مهمی را که دارم انجام می‌دهم، از دست می‌دهم. به جایش فکرم درگیر مسائل بی‌اهمیت و پیش‌پاافتاده می‌شود. تشخیص این که چه چیزی واقعاً برایم اهمیت دارد، کار چندان راحتی نیست. در عوض خیلی اوقات با نظر بقیه موافقت می‌کنم تا تعارض و اختلاف نظر پیش نیاید. معمولاً همه فکر می‌کنند که آدمی آسان‌گیر، خوشایند و دلپذیر هستم. به ندرت پیش می‌آید که عصبانیتم را مستقیماً به کسی نشان بدهم. دوست دارم در آرامش در کنار بقیه زندگی کنم و همه من را بپذیرند."
            ],
        selectedGroupValue: 0,
        selectedIntroduction: "",
        selectedTitle: "",
        tempProbableGroups: [],
        tempPreferredGroups: [],
        introductionGroups: [],
        groups: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        probableGroups: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        preferredGroups: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        resultGroups: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        mbtiGroups: ["INTJ", "INTP", "INFJ", "INFP", "ISTJ", "ISTP", "ISFJ", "ISFP",
                    "ENTJ", "ENTP", "ENFJ", "ENFP", "ESTJ", "ESTP", "ESFJ", "ESFP"],
        big: {
            openness: "middle",
            conscientiousness: "middle",
            extraversion: "middle",
            agreeableness: "middle",
            neuroticism: "middle"
        },
        approvedMbtiGroup: "",
        transferredMbtiResult: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        discGroups: ["D", "I", "S", "C"],
        approvedDiscGroup: "",
        transferredDiscResult: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        transferredBigResult: [0, 0, 0, 0, 0, 0, 0, 0, 0],
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
            $scope.Data.introductionGroups = angular.copy($scope.Data.tempProbableGroups);
            $scope.Data.selectedTitle = $scope.Data.groupsTitle[0];
            $scope.Data.selectedIntroduction = $scope.Data.groupsIntroduction[0];
        },
        onIntroductionSelect: function (selectedGroup) {
            _.each($scope.Data.introductionGroups, function (group) {
                if (group === selectedGroup) {
                    group.active = true;
                    $scope.Data.selectedGroupValue = group.value;
                    $scope.Data.selectedIntroduction = $scope.Data.groupsIntroduction[group.value];
                    $scope.Data.selectedTitle = $scope.Data.groupsTitle[group.value];
                    $scope.Data.selectedMessage = ["بعید نیست از " + $scope.Data.selectedTitle + "‌ها باشم", "احتمالاً از " + $scope.Data.selectedTitle + "‌ها نیستم"]
                } else
                    group.active = false;
            });
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
        showQuestions: function () {
            $scope.Data.mode = "showQuestions";
            $scope.Func.scrollToTop();
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
            return "answered";
        },
        toComparison: function () {
            let answer = $scope.Func.isAllAnswered();
            if (answer === "answered") {
                $scope.Data.showAnswer = false;
                $scope.Data.mode = "comparison";
                $scope.Func.scrollToTop();
            } else {
                $scope.Data.showAnswer = true;
                $("html, body").animate({scrollTop: $('#question-' + answer.num).offset().top }, 500);
            }
        },
        calculateResults: function () {
            $scope.Func.transferDiscResult();
            $scope.Func.transferMbtiResult();
            $scope.Func.transferBigResult();
            $scope.Func.calculateFinalResult();
            $scope.Data.mode = "showAnswer";
            $scope.Func.scrollToTop();
        },
        transferBigResult: function () {
            $scope.Data.transferredBigResult[3] = 1;
        //    TODO: Complete transfers.
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
                if (!$scope.Data.resultGroups[i])
                    $scope.Data.resultGroups[i] = 0;
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
    };

    Run();
});
