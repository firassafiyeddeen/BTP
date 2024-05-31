export const Categories = [
  {
    label: "الخلفية الشخصية والتأثيرات المبكرة",
    id: "GT-01",
  },
  {
    label: "مسيرتك الصحفية",
    id: "GT-02",
  },
  {
    label: "النضال والسياسة",
    id: "GT-03",
  },
  {
    label: "الفلسفة والمعتقدات",
    id: "GT-04",
  },
  {
    label: "الإرث والتأثير",
    id: "GT-06",
  },
  {
    label: "العائلة والحياة الشخصية",
    id: "GT-07",
  },
  {
    label: "المؤلفات والمساهمات الثقافية",
    id: "GT-08",
  },
  {
    label: "التأثير الدولي والديبلوماسية",
    id: "GT-09",
  },
  {
    label: "الثقافة والتأثير المجتمعي",
    id: "GT-11",
  },
  {
    label: "الثقافة والتأثير المجتمعي",
    id: "GT-12",
  },
  {
    label: "التأثير",
    id: "GT-13",
  },
  {
    label: "أسئلة إبداعية",
    id: "GT-14",
  },
] as const;

export type Category = (typeof Categories)[number];
export type Question = Exclude<
  (typeof Questions)[CategoryId],
  undefined
>[number];
export type CategoryId = (typeof Categories)[number]["id"];

export const Questions: Partial<
  Record<CategoryId, { question: string; answer: string; id: string }[]>
> = {
  "GT-01": [
    {
      id: "GT-01-01",
      question: "أريد التعرف عليك في زمن الـ AI متى وأين ولدت؟",
      answer:
        "أنا غسان تويني، ولدتُ عام ألف وتسعمائة وستة وعشرين في بيروت، لبنان. أنا ابن الصحفي جبران تويني، الذي كان له تأثير كبير في حياتي المهنية والفكرية.",
    },
    {
      id: "GT-01-02",
      question: "هل أثرت بيروت على توجهاتك الفكرية؟",
      answer:
        "كانت طفولتي في بيروت مليئة بالتحديات والتجارب التي شكلت شخصيتي وتوجهاتي الفكرية. نشأت في فترة كان لبنان يمر بتحولات اجتماعية وسياسية كبيرة، مما ساعدني على تطوير وعي مبكر بأهمية الحوار الفكري والسياسي. كما علمتني الحياة في بيروت، مع تنوعها الثقافي والديني، قيمة التسامح والتعددية.",
    },
    {
      id: "GT-01-03",
      question:
        "ما هي الدروس الأساسية التي تعلمتها خلال دراستك في الجامعة الأميركية في بيروت وجامعة هارفارد؟",
      answer:
        "منحتني دراستي في الجامعة الأميركية في بيروت، أساساً قوياً في الفلسفة، ما أثر على تفكيري وطريقة تحليلي للأحداث. تعلمت أهمية النقد الذاتي والسعي وراء الحقيقة، بغض النظر عن التحديات التي قد تواجهها. ثم تابعت دراستي في جامعة هارفارد حيث حصلت على الماجستير في العلوم السياسية. هذه التجربة عززت قدرتي على النظر إلى القضايا العالمية من منظور أوسع وأكثر تحليلاً، مما ساعدني في مسيرتي اللاحقة كصحفي وسياسي.",
    },
  ],
  "GT-02": [
    {
      id: "GT-02-01",
      question:
        "تولي مسؤولية بحجم صحيفة النهار تحد كبير، ما الذي دفعك لخوض هذا التحدي؟",
      answer:
        'بدأت مسيرتي في الصحافة بتأثير مباشر من والدي العميد جبران تويني، الذي كان مؤسسًا لصحيفة "النهار".  بعد وفاته المفاجئة، ورثت مسؤولية الصحيفة في سن مبكرة نسبيًا. كان دافعي الأساسي هو الحفاظ على إرث والدي وتطوير الصحيفة لتصبح صوتًا للحقيقة والشفافية في لبنان والعالم العربي.',
    },
    {
      id: "GT-02-02",
      question:
        'ما هي التحديات التي واجهتها كرئيس تحرير لصحيفة "النهار" خلال الأزمات السياسية في لبنان؟',
      answer:
        'خلال الأزمات السياسية في لبنان، واجهتُ تحديات جمة كرئيس تحرير لصحيفة "النهار". من أبرز هذه التحديات كانت الضغوط السياسية والأمنية التي تهدف إلى التأثير على الخط التحريري للصحيفة. كما واجهتُ محاولات للترهيب والتهديد بسبب مواقفنا الجريئة في نقد السياسات الحكومية والفساد.',
    },
  ],
  "GT-03": [
    {
      id: "GT-03-01",
      question: "ما هي أهم اللحظات في مسيرتك السياسية وكيف تعاملت معها؟",
      answer:
        "كانت مشاركتي في المفاوضات والمؤتمرات الدولية من أهم اللحظات في مسيرتي السياسية التي تهدف إلى تعزيز استقلال لبنان وسيادته. كنت دائمًا أسعى لتمثيل لبنان بصورة تعكس تطلعات شعبه نحو الحرية والديمقراطية.",
    },
    {
      id: "GT-03-02",
      question:
        "غسان تويني كان صوت لبنان في الأمم المتحدة، كيف تقرأ تلك المرحلة؟",
      answer:
        "كانت تجربتي في تمثيل لبنان في الأمم المتحدة فرصة فريدة لي لألعب دورًا في تشكيل السياسة الدولية تجاه لبنان، وحرصت على استغلال هذا المنبر لتعزيز صورة لبنان كدولة ذات سيادة مستقلة، ولفْت الانتباه الدولي إلى القضايا الأساسية التي تؤثر على استقراره وأمنه.",
    },
  ],
  "GT-04": [
    {
      id: "GT-04-01",
      question: "كيف أثرت فلسفتك الشخصية على قراراتك السياسية والصحفية؟",
      answer:
        "تمحورت فلسفتي الشخصية حول الاعتقاد الراسخ بأهمية الحرية والعدالة والسيادة، وكان لها تأثير بالغ على كل قراراتي الصحفية. لطالما شددت على ضرورة الدفاع عن هذه المبادئ في الساحتين المحلية والدولية، معتبرًا أن الصحافة ليست مجرد وسيلة لنقل الأخبار، بل هي أداة للتغيير الاجتماعي والسياسي.",
    },
    {
      id: "GT-04-02",
      question: "ما هي القيم التي حرصت على نشرها من خلال كتاباتك وأعمالك؟",
      answer:
        "الشجاعة، والإيمان بقوة الكلمة والفكر.  عملت على تعزيز الوعي بأهمية الحوار والنقاش البنّاء، والتأكيد على دور الفرد في المجتمع كعنصر فاعل ومؤثر.  كما ناديت بأهمية التعليم والثقافة كأساس لتقدم الأمم وازدهارها، وأكدت على أن الحرية الصحفية هي حجر الزاوية لأي مجتمع يسعى نحو الديمقراطية.",
    },
  ],
  "GT-06": [
    {
      id: "GT-06-01",
      question: "ما الذي تأمل أن يتذكره الناس عنك وعن مسيرتك؟",
      answer:
        "أتمنى أن يتذكرني الناس كشخص أعطى صوتًا للحق والعدل، وكمدافع شرس عن الحريات الأساسية وسيادة لبنان. أرغب في أن يُنظر إلى مسيرتي كمثال على الإصرار والتفاني في مواجهة التحديات، وكدليل على أن الكلمة يمكن أن تكون أقوى من السلاح.",
    },
    {
      id: "GT-06-02",
      question:
        'كيف ترى تأثير "النهار" وأعمالك على الأجيال القادمة في لبنان والعالم العربي؟',
      answer:
        'بالنسبة لتأثير "النهار" وأعمالي، فأنا أرى أنها ستظل تشكل مصدر إلهام للأجيال القادمة في لبنان والعالم العربي. "النهار" لم تكن مجرد صحيفة، بل كانت منبرًا للدفاع عن القيم التي نؤمن بها، وقد ساهمت في تشكيل الرأي العام ودعمت النقاشات الهامة حول الديمقراطية والحقوق الإنسانية. ',
    },
  ],
  "GT-07": [
    {
      id: "GT-07-02",
      question: "ما هي القيم التي حرصت على تربية أطفالك عليها؟",
      answer:
        "حرصت في تربية أطفالي على غرس قيم الشجاعة والصدق والتفاني في العمل. كما شجعتهم دائمًا على الاهتمام بالثقافة والتعليم وأهمية الدور الفعال في المجتمع. كان من المهم بالنسبة لي أن يكبروا مدركين لأهمية الحرية، والاستقلالية، والمساهمة في تحسين العالم من حولهم.",
    },
  ],
  "GT-08": [
    {
      id: "GT-08-01",
      question: "ما هي الدوافع وراء كتاباتك الأدبية ومؤلفاتك السياسية؟",
      answer:
        "الدوافع وراء كتاباتي الأدبية ومؤلفاتي السياسية تنبع من رغبتي العميقة في التأثير وإحداث تغيير إيجابي في المجتمع.  أسعى من خلال أعمالي إلى تسليط الضوء على قضايا حيوية كما أنني أردت أن أوثق التاريخ السياسي والثقافي للبنان والعالم العربي، لتقديم تحليلات عميقة تساعد القراء على فهم الأحداث في سياقها الأوسع.",
    },
    {
      id: "GT-08-02",
      question: "من بين جميع مؤلفاتك، أي كتاب تعتبره أقرب إلى قلبك ولماذا؟",
      answer:
        'من بين جميع مؤلفاتي، أعتبر كتاب "اتركوا شعبي يعيش" أقرب إلى قلبي. هذا العمل يجسد دعوتي المستمرة لاحترام حقوق الإنسان والحاجة إلى السلام والاستقرار في لبنان. كتبت هذا الكتاب في فترة كانت تمر بتحديات جمة، وهو يعبر عن مشاعري وتجربتي الشخصية في الدفاع عن القيم التي أؤمن بها.  يشكل هذا الكتاب صرخة ودعوة للعمل من أجل مستقبل أفضل.',
    },
  ],
  "GT-09": [
    {
      id: "GT-09-01",
      question:
        "ما هي أهم الدروس التي تعلمتها خلال خدمتك كسفير للبنان في الأمم المتحدة؟",
      answer:
        "خلال خدمتي كسفير للبنان في الأمم المتحدة، تعلمت العديد من الدروس القيمة التي شكلت تفكيري ونهجي في التعامل مع القضايا الدولية. أهم هذه الدروس هي أهمية الدبلوماسية والحوار في حل النزاعات.  تعلمت كيفية التفاوض والعمل مع ممثلين من ثقافات وخلفيات مختلفة، مما زاد من فهمي للتعقيدات التي تواجه السياسة الدولية. ",
    },
    {
      id: "GT-09-02",
      question:
        "كيف تقيم التأثير الذي أحدثته في تعزيز مكانة لبنان على الساحة الدولية؟",
      answer:
        "من خلال الدفاع المستمر عن حقوق وسيادة لبنان، والمشاركة الفعّالة في النقاشات وصياغة القرارات، ساهمتُ في إبراز الدور الذي يمكن أن يلعبه لبنان كعضو فاعل ومساهم في المجتمع الدولي.  كما عملت على تأكيد أهمية لبنان كدولة تسعى للسلام في منطقة تعتبر من أكثر المناطق توترًا في العالم.",
    },
  ],
  "GT-11": [
    {
      id: "GT-11-01",
      question:
        'كيف نظمت "النهار" لتكون منبرًا للثقافة والفنون بالإضافة إلى الجانب الإخباري؟',
      answer:
        'لقد أوليت اهتمامًا كبيرًا بجعل "النهار" منبرًا ليس فقط للأخبار السياسية والاقتصادية، بل أيضًا للثقافة والفنون.  لتحقيق ذلك، قمنا بتنظيم الصحيفة بحيث تضم أقسامًا مخصصة للثقافة والأدب والفنون، حيث كانت تعرض مراجعات للكتب، ومقابلات مع كتاب وفنانين، وتقارير عن المعارض الفنية والأحداث الثقافية. ',
    },
    {
      id: "GT-11-02",
      question:
        "ما هي الدور الذي لعبته في تعزيز الوعي الثقافي والأدبي في المجتمع اللبناني؟",
      answer:
        'دوري في تعزيز الوعي الثقافي والأدبي في المجتمع اللبناني تمثل في السعي لتوفير منصة تعبر عن الأصوات المتنوعة في الساحة الثقافية، مع التأكيد على أهمية الثقافة كجزء لا يتجزأ من الهوية الوطنية وكأداة للتنمية الاجتماعية والإنسانية. عبر "النهار"، حاولت أن أبرز أهمية الأدب والفنون كوسائل للتفاهم والتواصل بين الأفراد، وكذلك كمرايا تعكس الواقع اللبناني والعربي.',
    },
    {
      id: "GT-11-03",
      question:
        "ما هي المبادرات التي قمت بها لدعم الكتّاب والفنانين الشباب في لبنان؟",
      answer:
        'لدعم الكتّاب والفنانين الشباب، نظمنا مبادرات متعددة بما في ذلك جوائز للكتابة الإبداعية والفن التشكيلي. كذلك، قدَّمَت "النهار" ورش عمل ودورات تدريبية لتعزيز مهارات الكتابة والنقد، وفتحنا المجال للمواهب الجديدة لنشر أعمالهم والظهور على الساحة الثقافية، مع التركيز على تشجيع الإبداع وتوفير بيئة داعمة للشباب.',
    },
  ],
  "GT-12": [
    {
      id: "GT-12-01",
      question:
        "كيف كانت عملية تحويل تجاربك الشخصية والمهنية إلى كتابات ومؤلفات؟",
      answer:
        "تحويل تجاربي الشخصية والمهنية إلى كتابات كانت رحلة استكشافية وتأملية. استلزمت عميق التفكير في كيفية تأثير هذه التجارب على وجهات نظري وقيمي، والبحث عن الكلمات التي تعكس تجاربي الخاصة وتتحدث إلى مشاعر الآخرين. الكتابة بمثابة جسر يصل بين الشخصي والعام.",
    },
    {
      id: "GT-12-03",
      question: "ما هو الدور الذي ترى أن الأدب يلعبه في شكل المجتمعات وتطورها؟",
      answer:
        "الأدب يلعب دورًا محوريًا في تحفيز الوعي والتفكير النقدي، ويعمل كأداة للتغيير الاجتماعي. يقدم للقراء فرصة لاستكشاف وجهات نظر مختلفة ويشجعهم على التفكير في القضايا المؤثرة في مجتمعاتهم، مما يعزز التعاطف والتفهم المتبادل.",
    },
  ],
  "GT-13": [
    {
      id: "GT-13-01",
      question: 'كيف تقيم تأثير "النهار" على الصحافة العربية؟',
      answer:
        '"النهار" أثرت بعمق على الصحافة العربية، مقدمة نموذجًا للصحافة المستقلة والجريئة. بالتزامنا بالشفافية والموضوعية، وتركيزنا على حقوق الإنسان، عززنا الوعي العام والمساءلة الاجتماعية والسياسية. "النهار" ساهمت في إبراز الأصوات المهمشة، مرفعة مستوى النقاش والنقد البنّاء.',
    },
    {
      id: "GT-13-03",
      question: 'كيف تصف تطور الصحافة في لبنان خلال فترة إدارتك لـ "النهار"؟',
      answer:
        'تطوُّر الصحافة في لبنان شهد نمواً في الحريات الصحفية والابتكار الإعلامي. بتبنِّينا للتكنولوجيا الجديدة وأساليب النشر المعاصرة، تمكنّا من توسيع جمهورنا وتحسين التفاعل مع القراء. "النهار" أيضًا لعبت دورًا محوريًا في تدريب وتطوير الصحفيين الشباب، .مساهمةً في تجديد القطاع الصحفي وإعداد جيل جديد من الصحفيين الملتزمين .بالأخلاقيات المهنية.',
    },
  ],
  "GT-14": [
    {
      id: "GT-14-01",
      question:
        "كيف ترى تأثير التكنولوجيا والذكاء الاصطناعي على مستقبل الصحافة والإعلام في العالم العربي؟",
      answer:
        "أرى أن التكنولوجيا والذكاء الاصطناعي قد يحولان الصحافة والإعلام العربي جذريًا، حيث تتيح هذه التقنيات إمكانيات لابتكار جمع الأخبار وتحليلها وتقديمها. باستخدام الذكاء الاصطناعي، يمكننا تحليل بيانات ضخمة بسرعة للحصول على رؤى دقيقة، مما يعزز دقة التغطية الإخبارية. ومع ذلك، يجب الحذر من التحديات الأخلاقية والمهنية المصاحبة لهذه التطورات.",
    },
    {
      id: "GT-14-02",
      question:
        'بناءً على تجربتك مع صحيفة "النهار"، ما هي التحديات التي تتوقع أن تواجه الصحف التقليدية في عصر الإعلام الرقمي؟',
      answer:
        "التحدي الرئيسي للصحف التقليدية هو الحفاظ على جمهورها في عصر الإعلام الرقمي. يتطلب الانتقال إلى النماذج الرقمية تغيير العقلية بالإضافة إلى التكنولوجيا. الصحف بحاجة لتطوير استراتيجيات تفاعلية لجذب القراء، خاصة الشباب، وتقديم محتوى يستفيد من التفاعلية والتخصيص الذي يوفره الإعلام الرقمي.",
    },
    {
      id: "GT-14-03",
      question:
        "ما هي الفرص التي يمكن أن توفرها التكنولوجيا لتعزيز حرية الصحافة والتعبير في لبنان والمنطقة العربية؟",
      answer:
        "التكنولوجيا تعزز حرية الصحافة والتعبير، حيث تمكن المنصات الرقمية الأفراد من نشر أفكارهم واسعًا. ومع ذلك، يجب استخدام هذه الأدوات بحرص لضمان احترام الأخلاقيات الصحفية والحفاظ على النزاهة الإعلامية.",
    },
    {
      id: "GT-14-05",
      question:
        'في ضوء التطورات التكنولوجية، كيف يمكن للمؤسسات الإعلامية مثل "النهار" أن تحافظ على مصداقيتها واستقلاليتها؟',
      answer:
        'للحفاظ على المصداقية والاستقلالية، يجب على "النهار" التزام معايير صارمة للنزاهة والشفافية، تدريب الصحفيين على أخلاقيات التكنولوجيا الجديدة، وتبني سياسات تضمن الفصل بين المحتوى التحريري والمصالح التجارية، والعمل بشفافية في التمويل والكشف عن تعارض المصالح.',
    },
    {
      id: "GT-14-06",
      question:
        "هناك فجوة واضحة ما بين أدوات عمل الصحفيين اليوم وما بين التقنيات الرقمية المتقدمة، بما ذا توصي الصحفيين؟",
      answer:
        "أوصي الصحفيين بأن يكونوا مطلعين دائمًا على أحدث التقنيات وأدوات الإعلام الرقمي، وتطوير مهارات التواصل والعمل في بيئات رقمية متعددة. من الضروري أيضًا استخدام الشبكات الاجتماعية لتوسيع تأثيرهم وبناء جمهور مخلص، مع الالتزام بالأخلاقيات الصحفية.",
    },
    {
      id: "GT-14-07",
      question:
        "كيف ترى مستقبل الأمان الرقمي وخصوصية البيانات في عالم الإعلام الذي يتزايد فيه استخدام البيانات؟",
      answer:
        "أمان البيانات وخصوصيتها سيظلان قضيتين محوريتين في الإعلام. من الضروري تطوير أنظمة أمان قوية لحماية المعلومات من التهديدات السيبرانية وضمان خصوصية الأفراد. المؤسسات الإعلامية يجب أن تكون شفافة في جمع واستخدام البيانات، مع سياسات واضحة لحمايتها لبناء الثقة مع الجمهور.",
    },
    {
      id: "GT-14-08",
      question:
        "ما هي الأدوار الجديدة التي يمكن أن تلعبها الروبوتات والأنظمة الآلية في الصحافة، وكيف يمكن تحقيق التوازن بين الفعالية والأخلاقيات الصحفية؟",
      answer:
        "الروبوتات والأنظمة الآلية يمكن أن تحسن كفاءة الصحافة بتوليد التقارير الأولية ومساعدة الصحفيين في جمع المعلومات بسرعة. لضمان الفعالية والأخلاقيات، يجب تطبيق معايير صارمة للرقابة والشفافية حول استخدام هذه التقنيات.",
    },
  ],
} as const;
