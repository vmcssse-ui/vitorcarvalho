// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 History · Year 9 Topic 6 · Renaissance Medicine, c1500–c1700 (bridge to AQA GCSE History 8145,
// Britain: Health and the People, Part two "The beginnings of change") · schema astra/2
//
// This unit continues hist-medicine (Year 9 Topic 5, Medieval Medicine, c1250–c1500). It assumes that unit's story and keeps
// its conventions. Where it looks back ("you met this last unit"), the fact named is one hist-medicine taught.
//
// Convention for ideas: miasma, the Four Humours, astrology, transference and God-sent disease are taught as what people
// BELIEVED, never as true claims. verify.py lints every pupil-facing sentence that makes a cause-of-disease or
// disease-moving claim for a belief marker (believed / thought / idea / theory / taught / reasoned ...) or an explicit
// modern-knowledge marker (germs, bacteria, fleas, rats, historians today). Named ideas are capitalised: the Four Humours,
// the Theory of Opposites, the Black Death, the Great Plague, the Reformation, the Royal Society.
//
// Quotation convention: NOTHING is quoted. The dump contains no primary source, only the department's own slide text and
// teacher models, so there is no corpus to quote from. verify.py fails on any “…” anywhere in the manifest and on any
// straight double quote. Curly single quotes ‘…’ mark terms and titles, never quotations.
//
// MACHINE CHECKS (run `python3 verify.py` in this folder): every date against the CHRONOLOGY table, with slide references;
// every large number against FACTS; every numeric item recomputed from `check`; every mcq / gap / order / match against an
// independent answer key; every order task against a canonical sequence; passage sentences ≤ 20 words; feedback /
// misconceptions / explain = 100 %; contexts never redefine the answer; connections ⊂ glossary; no pretext.l1; no widgets;
// copyright fingerprints from the deck's own model answers and resource text absent; and a mutation self-test that corrupts
// a copy of the manifest in fourteen ways and fails unless every corruption is caught.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["hist-renaissance-medicine"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "hist-renaissance-medicine",
    subjectKey: "history",
    subject: "History",
    board: "AQA",
    spec: "KS3 → 8145",
    specRef: "KS3 Year 9 Topic 6: Renaissance Medicine, c1500–c1700 — foundations for AQA GCSE History 8145, Britain: Health and the People c1000 to the present day, Part two: The beginnings of change (the Renaissance; Vesalius; Harvey; Sydenham; the printing press and the Royal Society; the Great Plague of 1665)",
    year: 9,
    tier: "KS3",
    title: "Renaissance Medicine",
    sub: "New ways of thinking, two men who changed what we know about the body, and a plague in 1665 that was met with the same ideas as the one in 1348.",
    bigQuestion: "How important were individuals in driving change in medicine in Renaissance England, c1500–c1700?",
    lessonCount: 8,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Changing Ideas and Attitudes", question: "Why were ideas and attitudes changing across Europe?", keywords: ["Renaissance", "humanism", "the Black Death", "the Reformation", "the Church"] },
    { n: 2, title: "Thomas Sydenham", question: "How did Thomas Sydenham change the way patients were diagnosed?", keywords: ["miasma", "Four Humours", "diagnosis", "symptom", "observation"] },
    { n: 3, title: "Improved Communications", question: "How did new ideas spread during the Renaissance?", keywords: ["printing press", "Gutenberg", "Royal Society", "royal charter", "journal"] },
    { n: 4, title: "Treatments and Preventions", question: "What treatments and preventions were used in the Renaissance?", keywords: ["transference", "regimen sanitatis", "alchemy", "purging", "continuity"] },
    { n: 5, title: "Caring for the Sick", question: "How were sick people cared for and treated?", keywords: ["physician", "apothecary", "surgeon", "hospital", "pest house", "community care"] },
    { n: 6, title: "Andreas Vesalius", question: "How did Andreas Vesalius improve medical knowledge?", keywords: ["anatomy", "dissection", "Galen", "illustration", "humanism"] },
    { n: 7, title: "William Harvey", question: "How did William Harvey improve medical knowledge?", keywords: ["circulation", "vein", "artery", "mechanical pump", "observation"] },
    { n: 8, title: "Case study: the Great Plague, 1665", question: "How did England react to the Great Plague in 1665?", keywords: ["Great Plague", "bubonic plague", "quarantine", "Eyam", "government action"] }
  ],

  glossary: [
    { term: "Renaissance", means: "The period from about 1500 to 1700 in Europe, and the new way of thinking that went with it. The word means rebirth.", chapter: "changing-ideas" },
    { term: "humanism", means: "A new way of thinking that valued human learning and looked for answers by studying and observing the world, not only by trusting the Church.", chapter: "changing-ideas" },
    { term: "Reformation", means: "The split in the Christian Church in the 1500s that produced the Protestant churches and weakened the power of the Catholic Church.", chapter: "changing-ideas" },
    { term: "miasma", means: "The belief that bad air, rising from rotting matter and dirty places, caused disease. It was the most widely held idea in Renaissance England.", chapter: "causes-and-diagnosis" },
    { term: "diagnosis", means: "Working out which illness a patient has.", chapter: "causes-and-diagnosis" },
    { term: "symptom", means: "A sign of illness that a patient has or shows, such as a rash, a fever or a cough.", chapter: "causes-and-diagnosis" },
    { term: "microscope", means: "An instrument that uses lenses to make very small things look much bigger. Robert Hooke built a far better one in this period.", chapter: "causes-and-diagnosis" },
    { term: "printing press", means: "A machine with movable metal letters that printed pages quickly and accurately. Johannes Gutenberg built one in Europe in about 1440.", chapter: "spreading-ideas" },
    { term: "Royal Society", means: "A group of scientists created in 1660 to share, test and argue over new ideas. Its journal spread medical research across Europe.", chapter: "spreading-ideas" },
    { term: "regimen sanitatis", means: "A routine written for one patient by a physician, setting out how to keep healthy through diet, exercise and cleanliness.", chapter: "treatment-and-care" },
    { term: "transference", means: "The Renaissance belief that an illness could be moved out of a person and into an object or an animal.", chapter: "treatment-and-care" },
    { term: "alchemy", means: "An early form of chemistry. Alchemists mixed substances to make new ones, and some of their mixtures were sold as medicines.", chapter: "treatment-and-care" },
    { term: "pest house", means: "A building set aside for people with one particular disease, such as the plague or the pox, to keep them away from everyone else.", chapter: "treatment-and-care" },
    { term: "anatomy", means: "The study of the structure of the body: what its parts are and where they sit.", chapter: "vesalius-harvey" },
    { term: "circulation", means: "The movement of blood round and round the body, pumped by the heart through the arteries and back through the veins.", chapter: "vesalius-harvey" },
    { term: "quarantine", means: "Keeping people who may carry a disease away from everyone else for a set time.", chapter: "great-plague" }
  ],

  // astra/2: the Connections game. Four groups of four, all sixteen drawn from the glossary above.
  connections: [
    { group: "Ideas and attitudes", terms: ["Renaissance", "humanism", "Reformation", "miasma"] },
    { group: "Looking closely at the body", terms: ["diagnosis", "symptom", "microscope", "anatomy"] },
    { group: "Spreading and recording knowledge", terms: ["printing press", "Royal Society", "alchemy", "circulation"] },
    { group: "Keeping disease away", terms: ["regimen sanitatis", "transference", "pest house", "quarantine"] }
  ],

  chapters: [
    // ───────────────────────────── CHAPTER 1 ─────────────────────────────
    {
      key: "changing-ideas", n: 1,
      title: "Changing ideas and attitudes",
      lead: "This chapter sets the scene: what the Renaissance was, where humanism came from, and why the Church lost the power to decide what people believed.",
      covers: [1],
      pretext: {
        words: [
          { word: "Renaissance", means: "the period from about 1500 to 1700, and the new thinking that went with it", sentence: "The Renaissance was a time of new ideas across Europe." },
          { word: "rebirth", means: "being born again, or starting again", sentence: "The word Renaissance means rebirth." },
          { word: "humanism", means: "a way of thinking that valued human learning and looking for yourself", sentence: "Humanism taught people to study the world and ask questions." },
          { word: "Reformation", means: "the split in the Christian Church in the 1500s", sentence: "The Reformation divided the Church into Catholic and Protestant." },
          { word: "corrupt", means: "dishonest, using power for your own gain", sentence: "Many people came to think that Church leaders were corrupt." },
          { word: "continuity", means: "when things stay the same over time", sentence: "There was a lot of continuity in medicine during the Renaissance." }
        ],
        passage: [
          "The Renaissance in England lasted from about 1500 to 1700.",
          "The word Renaissance means rebirth.",
          "It was a time of new art, new learning and new questions.",
          "A new way of thinking called humanism spread across Europe.",
          "Humanists loved learning and wanted to find things out for themselves.",
          "They did not accept that every answer came from the Church.",
          "Two events had already weakened the Church.",
          "The first was the Black Death, which prayer did not stop.",
          "The second was the Reformation, which split the Church in two.",
          "Many people had begun to think that Church leaders were dishonest.",
          "So people felt freer to question old ideas about medicine.",
          "But changing an idea is not the same as changing a treatment.",
          "In this unit you will ask how much really changed, and who changed it."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "المدّة من نحو 1500 إلى 1700، والتفكير الجديد الذي جاء معها (Renaissance)",
            "أن يُولد الشيء من جديد، أو أن يبدأ من جديد (rebirth)",
            "طريقة تفكير تُعلي قيمة علم الإنسان والنظر بنفسك (humanism)",
            "الانشقاق في الكنيسة المسيحية في سنوات 1500 (Reformation)",
            "غير أمين، يستخدم السلطة لمصلحته (corrupt)",
            "أن تبقى الأشياء كما هي مع الزمن (continuity)"
          ],
          "passage": [
            "دام عصر النهضة في إنجلترا من نحو 1500 إلى 1700.",
            "وكلمة النهضة (Renaissance) تعني الولادة من جديد.",
            "وكان زمن فنّ جديد وعلم جديد وأسئلة جديدة.",
            "وانتشرت في أوروبا طريقة تفكير جديدة تُسمّى الإنسانية (humanism).",
            "وأحبّ الإنسانيّون العلم وأرادوا أن يعرفوا الأشياء بأنفسهم.",
            "ولم يقبلوا أنّ كلّ جواب يأتي من الكنيسة.",
            "وكان حدثان قد أضعفا الكنيسة أصلًا.",
            "فالأوّل الموت الأسود، ولم تُوقفه الصلاة.",
            "والثاني الإصلاح (Reformation)، وقد شقّ الكنيسة شقّين.",
            "وكثير من الناس كان قد بدأ يرى أنّ رؤساء الكنيسة غير أمناء.",
            "فصار الناس يشعرون بحرّية أكبر في مساءلة الأفكار القديمة عن الطبّ.",
            "ولكنّ تغيير فكرة ليس كتغيير علاج.",
            "وفي هذه الوحدة ستسأل: كم تغيّر حقًّا؟ ومَن غيّره؟"
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "okres od około 1500 do 1700 roku i nowe myślenie, które z nim przyszło (Renaissance)",
            "narodzenie się na nowo albo rozpoczęcie od nowa (rebirth)",
            "sposób myślenia, który cenił ludzką naukę i samodzielne szukanie (humanism)",
            "rozłam w Kościele chrześcijańskim w XVI wieku (Reformation)",
            "nieuczciwy, używający władzy dla własnego zysku (corrupt)",
            "kiedy rzeczy pozostają takie same z upływem czasu (continuity)"
          ],
          "passage": [
            "Renesans w Anglii trwał od około 1500 do 1700 roku.",
            "Słowo renesans znaczy odrodzenie.",
            "Był to czas nowej sztuki, nowej nauki i nowych pytań.",
            "Po Europie rozszedł się nowy sposób myślenia zwany humanizmem.",
            "Humaniści kochali naukę i chcieli sami dowiadywać się o różnych rzeczach.",
            "Nie przyjmowali tego, że każda odpowiedź pochodzi od Kościoła.",
            "Dwa wydarzenia już wcześniej osłabiły Kościół.",
            "Pierwszym była czarna śmierć, której modlitwa nie zatrzymała.",
            "Drugim była reformacja, która rozdzieliła Kościół na dwie części.",
            "Wielu ludzi zaczęło myśleć, że przywódcy Kościoła są nieuczciwi.",
            "Dlatego ludzie czuli się swobodniej, kwestionując dawne poglądy na medycynę.",
            "Ale zmiana poglądu to nie to samo co zmiana leczenia.",
            "W tym temacie zapytasz, jak wiele naprawdę się zmieniło i kto to zmienił."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o período de cerca de 1500 a 1700, e o pensamento novo que veio com ele (Renaissance, Renascimento)",
            "nascer outra vez, ou começar de novo (rebirth, renascimento)",
            "uma maneira de pensar que valorizava o saber humano e o procurar por si mesmo (humanism, humanismo)",
            "a divisão da Igreja cristã nos anos 1500 (Reformation, Reforma)",
            "desonesto, que usa o poder em proveito próprio (corrupt, corrupto)",
            "quando as coisas ficam iguais ao longo do tempo (continuity, continuidade)"
          ],
          "passage": [
            "O Renascimento em Inglaterra durou de cerca de 1500 a 1700.",
            "A palavra Renascimento quer dizer nascer outra vez.",
            "Foi um tempo de arte nova, de saber novo e de perguntas novas.",
            "Uma nova maneira de pensar, chamada humanismo, espalhou-se pela Europa.",
            "Os humanistas adoravam aprender e queriam descobrir as coisas por si mesmos.",
            "Não aceitavam que todas as respostas viessem da Igreja.",
            "Dois acontecimentos já tinham enfraquecido a Igreja.",
            "O primeiro foi a Peste Negra, que a oração não travou.",
            "O segundo foi a Reforma, que dividiu a Igreja em duas.",
            "Muitas pessoas tinham começado a pensar que os chefes da Igreja eram desonestos.",
            "Por isso as pessoas sentiam-se mais livres para questionar as ideias antigas sobre a medicina.",
            "Mas mudar uma ideia não é o mesmo que mudar um tratamento.",
            "Nesta unidade vais perguntar quanto é que mudou de facto/fato, e quem o mudou."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "muddada qiyaastii 1500 ilaa 1700, iyo fikirka cusub ee la socday",
            "in dib la dhasho, ama mar kale la bilaabo",
            "hab fikir oo qiimeeyay waxbarashada dadka iyo in qofku naftiisa wax u raadiyo",
            "kala qaybsanaantii Kaniisadda Masiixiga ee 1500-meeyadii",
            "aan daacad ahayn, oo awoodda danahaaga u isticmaalaya",
            "marka waxyaalo waqti ka waqti sidii ay ahaayeen u sii ahaadaan"
          ],
          "passage": [
            "Renaissance-ka England wuxuu socday qiyaastii 1500 ilaa 1700.",
            "Erayga Renaissance macnaheedu waa dib-u-dhalasho.",
            "Waxay ahayd waqti farshaxan cusub, waxbarasho cusub iyo su'aalo cusub.",
            "Hab fikir cusub oo la yiraahdo humanism ayaa Yurub oo dhan ku faafay.",
            "Humanists-ku waxay jeclaayeen waxbarashada oo waxay rabeen inay naftooda wax u helaan.",
            "Ma aqbalin in jawaab kastaa Kaniisadda ka timid.",
            "Laba dhacdo ayaa horay Kaniisadda daciifisay.",
            "Tan koowaad waxay ahayd Black Death, oo tukashada ay joojin weyday.",
            "Tan labaad waxay ahayd Reformation-ka, oo Kaniisadda laba u kala qaybiyay.",
            "Dad badan waxay bilaabeen inay u maleeyaan in hoggaamiyeyaasha Kaniisadda aanay daacad ahayn.",
            "Markaa dadku waxay dareemeen inay xor yihiin inay su'aalaan fikradaha duugoobay ee daawada.",
            "Laakiin in fikrad la beddelo isku mid maaha in daaweyn la beddelo.",
            "Cutubkan waxaad weydiinaysaa inta dhab ahaan isbeddeshay, iyo cidda beddeshay."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "період приблизно з 1500 до 1700 року і нове мислення, що з ним прийшло (Renaissance)",
            "народження знову або початок наново (rebirth)",
            "спосіб мислення, який цінував людське навчання і самостійний пошук (humanism)",
            "розкол у християнській Церкві у 1500-х роках (Reformation)",
            "нечесний, той, хто використовує владу для власної вигоди (corrupt)",
            "коли речі залишаються такими самими з часом (continuity)"
          ],
          "passage": [
            "Ренесанс в Англії тривав приблизно з 1500 до 1700 року.",
            "Слово «Ренесанс» означає відродження.",
            "Це був час нового мистецтва, нового навчання і нових запитань.",
            "По Європі поширився новий спосіб мислення, який називали гуманізмом.",
            "Гуманісти любили навчання і хотіли дізнаватися про речі самостійно.",
            "Вони не приймали, що кожна відповідь походить від Церкви.",
            "Дві події вже ослабили Церкву.",
            "Першою була Чорна смерть, якої молитва не зупинила.",
            "Другою була Реформація, яка розколола Церкву на дві частини.",
            "Багато людей почали думати, що церковні провідники нечесні.",
            "Тому люди відчували більшу свободу піддавати сумніву старі ідеї про медицину.",
            "Але змінити ідею — це не те саме, що змінити лікування.",
            "У цьому розділі ви спитаєте, як багато насправді змінилося і хто це змінив."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "تقریباً 1500 سے 1700 تک کا دور، اور اس کے ساتھ آنے والی نئی سوچ (Renaissance)",
            "دوبارہ جنم لینا، یا نئے سرے سے شروع ہونا (rebirth)",
            "سوچ کا وہ انداز جو انسانی علم اور خود دیکھنے پرکھنے کو قدر دیتا تھا (humanism)",
            "1500 کی دہائی میں مسیحی کلیسا کی تقسیم (Reformation)",
            "بدعنوان، جو اپنے فائدے کے لیے اختیار استعمال کرے (corrupt)",
            "جب چیزیں وقت کے ساتھ ویسی ہی رہیں (continuity)"
          ],
          "passage": [
            "انگلینڈ میں Renaissance تقریباً 1500 سے 1700 تک رہا۔",
            "لفظ Renaissance کا مطلب ہے دوبارہ جنم۔",
            "یہ نئے فن، نئے علم اور نئے سوالوں کا زمانہ تھا۔",
            "سوچ کا ایک نیا انداز، جسے humanism کہتے ہیں، یورپ میں پھیل گیا۔",
            "humanists کو علم سے محبت تھی اور وہ باتیں خود معلوم کرنا چاہتے تھے۔",
            "وہ یہ نہیں مانتے تھے کہ ہر جواب کلیسا سے آتا ہے۔",
            "دو واقعات پہلے ہی کلیسا کو کمزور کر چکے تھے۔",
            "پہلا Black Death تھا، جسے دعا نے نہ روکا۔",
            "دوسرا Reformation تھا، جس نے کلیسا کو دو حصوں میں بانٹ دیا۔",
            "بہت سے لوگ یہ سوچنے لگے تھے کہ کلیسا کے رہنما بدعنوان ہیں۔",
            "اس لیے لوگ طب کے پرانے خیالوں پر سوال اٹھانے میں زیادہ آزاد محسوس کرنے لگے۔",
            "مگر کسی خیال کو بدلنا، علاج بدلنے کے برابر نہیں ہے۔",
            "اس یونٹ میں آپ پوچھیں گے کہ حقیقت میں کتنا بدلا، اور کس نے بدلا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What the Renaissance was",
          paragraphs: [
            "Your last unit ended in 1500, with medicine in England almost exactly where it had been in 1250. This unit picks up the story and runs to 1700. Historians call these two hundred years the Renaissance, from a French word meaning rebirth. The rebirth was of learning: scholars went back to the writings of Ancient Greece and Rome, read them in the original rather than in a copied summary, and began to argue with them.",
            "Be careful with the word rebirth, though. It did not mean that medicine was reborn. For most of this period very little changed in what doctors actually did. What changed first was art, religion, culture and attitudes, and only then, slowly and at the very end, the way people explained and treated disease.",
            "That gap is the heart of this unit. New ideas arrived; old practice carried on. Your job all the way through is to separate change (something is different afterwards) from continuity (it carries on as before), and to judge which of the two mattered more at each point."
          ],
          tip: "Renaissance means rebirth, and in an exam answer it is worth saying what was reborn: the learning of Ancient Greece and Rome, not medicine itself.",
          worked: {
            q: "A pupil writes: ‘In the Renaissance, medicine was reborn and doctors stopped using the Four Humours.’ Correct this sentence using what you know about change and continuity.",
            steps: [
              "Find the part that is right. The Renaissance was a period of new ideas and new learning, so that part can stay.",
              "Find the part that goes too far. Doctors did not stop using the Four Humours in this period; scientists and physicians increasingly rejected the theory, but most people still believed it and some physicians still worked by it.",
              "Replace the overclaim with a change-and-continuity sentence: say what changed, then say what carried on.",
              "Check your belief words: the Four Humours was an idea people held, so write ‘people still believed’, not ‘the humours were out of balance’."
            ],
            answer: "In the Renaissance, new ways of thinking led people to question old explanations of disease, but there was a lot of continuity in treatment: most people still believed in the Four Humours, and bloodletting and purging carried on."
          }
        },
        {
          heading: "Humanism: finding out for yourself",
          paragraphs: [
            "Humanism is the new attitude at the centre of this unit. Humanists loved learning for its own sake. They collected and read the classical writers, they taught Greek and Latin, and above all they believed that a human being could discover things about the world by looking at it carefully, measuring it and arguing about it.",
            "That sounds obvious to you. It was not obvious in 1500. In your last unit the normal way to settle a medical question was to ask what the Church taught, or what Galen had written a thousand years earlier. A humanist would answer: let us go and look. Humanists rejected the idea that God, or the Church, was the explanation for everything that happened, and that is a very big shift.",
            "Humanism did not make people stop being Christian. Most humanists were devout. What they rejected was the idea that every question was already answered, and that curiosity was dangerous. Remember this when you meet Vesalius in chapter 5: he opened bodies because he wanted to see for himself whether Galen was right."
          ]
        },
        {
          heading: "Why the Church lost power: two events",
          paragraphs: [
            "By the 1500s people across Europe were looking for new explanations of the world. Many felt that the Church had not explained properly how the world worked, and many had come to see its leaders as greedy and dishonest. The Church's influence became much weaker going into the Renaissance, and your lesson gave two events that weakened it.",
            "The first was the Black Death of 1348, which you studied last unit. The Church taught that the plague was God's punishment and that prayer, fasting and processions were the answer. The plague killed about one third of the population anyway, and it killed priests as readily as peasants. For many survivors, that shook their trust in the explanation and in the people giving it.",
            "The second was the Reformation. In the 1500s the Christian Church in western Europe split: Protestant churches broke away from the Catholic Church, and in England Henry VIII broke with Rome in 1534, as you met in your last unit. Once there were rival churches, no single Church could decide what every scholar was allowed to think. That is why the Reformation matters for medicine, even though it is not about medicine at all."
          ],
          tip: "Join the two events to medicine in one clause: because the Church lost authority, ideas that it had protected, such as the Four Humours, could now be questioned."
        },
        {
          heading: "The enquiry: how important were individuals?",
          paragraphs: [
            "The question you are answering across the whole unit is the one at the top of every lesson: how important were individuals in driving change in medicine in the Renaissance? You will meet three. Thomas Sydenham changed how patients were diagnosed. Andreas Vesalius changed what was known about the structure of the body. William Harvey changed what was known about the blood.",
            "An enquiry question needs an argument, not a list. The historian's trick is to test the individuals against the other factors you already use: attitudes and beliefs, science and technology, government, improved communications, war and the Church. Did Vesalius change anatomy, or did the printing press? Both, probably, and your job is to weigh them.",
            "Keep a running answer. At the end of each chapter, write one sentence on whether the change in it came mainly from an individual or mainly from another factor. By chapter 6 you will have six sentences and the essay will nearly write itself."
          ]
        }
      ],
      gate: [
        { kind: "mcq", q: "What does the word Renaissance mean?", options: ["Rebirth", "Revolution", "Recovery", "Reformation"], answer: 0, why: "Renaissance means rebirth. What was reborn was the learning of Ancient Greece and Rome, not medicine itself.",
          feedback: [
            "",
            "A revolution is a sudden overthrow of a ruler or a system, and the Renaissance was neither sudden nor a single event. The word Renaissance means rebirth.",
            "Recovery would suggest getting better after illness or disaster, which is not what the word says. Renaissance means rebirth: the rebirth of classical learning.",
            "The Reformation is a different thing: the split in the Christian Church in the 1500s. The word Renaissance itself means rebirth."
          ] },
        { kind: "gap", q: "___ was a new way of thinking that valued human learning and looked for answers by studying the world.", answer: "Humanism", options: ["Humanism", "Miasma", "Alchemy"], why: "Humanism valued human learning and observation, and refused to accept that every answer was already given by the Church.",
          feedback: {
            "Miasma": "Miasma is not a way of thinking but one idea about a cause of disease: people believed that bad air carried illness. The new way of thinking was humanism.",
            "Alchemy": "Alchemy was an early form of chemistry, where substances were mixed to make new ones. The wider new way of thinking, which valued learning and observation, was humanism."
          } },
        { kind: "mcq", q: "Which two events does your lesson give as the ones that weakened the power of the Church in Europe?", options: ["The Black Death and the Reformation", "The Black Death and the Great Plague", "The Reformation and the printing press", "The Norman Conquest and the Black Death"], answer: 0, why: "Your lesson names the Black Death, which prayer did not stop, and the Reformation, which split the Church in two.",
          feedback: [
            "",
            "The Great Plague came much later, in 1665, long after the Church had already lost influence. The two events your lesson names are the Black Death and the Reformation.",
            "The printing press did weaken the Church's control of what was copied, but it is taught as an improvement in communications rather than as one of the two events. The two events are the Black Death and the Reformation.",
            "The Norman Conquest of 1066 made the Church in England stronger, not weaker, and comes long before this period. The two events are the Black Death and the Reformation."
          ] }
      ],
      modules: [
        {
          title: "Where the Renaissance sits",
          task: {
            kind: "order",
            q: "Put these five moments in the history of medicine in chronological order, earliest first.",
            items: [
              "Hippocrates sets out the Theory of the Four Humours in Ancient Greece (460–370 BC)",
              "Galen works as a doctor in the Roman Empire (129–216)",
              "Hippocrates and Galen are translated into Latin for European scholars (c1000)",
              "The medieval period in England ends and the Tudor dynasty begins (1485)",
              "The Renaissance period in England (1500–1700)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Chronological order means earliest first. Read the dates in the brackets before you read anything else.",
                "BC dates count backwards, so a BC date is always earlier than an AD date.",
                "Put the two BC and early AD items first: Hippocrates, then Galen.",
                "Then order the rest by their first number: c1000, 1485, 1500."
              ],
              example: {
                q: "Practice: put these three in chronological order: the Reformation in England (1534), the Norman Conquest (1066), the Black Death in England (1348).",
                steps: ["Find the smallest year: 1066.", "Next comes 1348.", "The largest year, 1534, goes last."],
                answer: "The Norman Conquest (1066); the Black Death in England (1348); the Reformation in England (1534)."
              }
            },
            core: { hint: "Two of the five are before the year 1000. The other three go c1000, then 1485, then 1500." },
            stretch: { extend: "Say how long Galen's ideas had been taught in Europe by the time the Renaissance began, and what that length of time tells you about how hard they would be to replace." }
          },
          why: "Hippocrates (460–370 BC) comes first, then Galen (129–216), then the Latin translations that brought their work to European scholars about the year 1000, then the end of the medieval period in 1485, then the Renaissance from 1500.",
          explain: "Say, in one sentence, why a BC date always comes before an AD date."
        },
        {
          title: "How long was the Renaissance?",
          task: {
            kind: "numeric",
            q: "Your course dates the Renaissance period in England from 1500 to 1700. How many years is that?",
            answer: 200, tolerance: 0, units: "years",
            check: "1700-1500",
            misconceptions: [
              { answer: 3200, says: "You added the two dates together. To find the length of a period you subtract the start date from the end date: 1700 − 1500.", check: "1700+1500" },
              { answer: 2, says: "You subtracted only the hundreds digits and forgot what they are worth. 17 − 15 = 2, but these are centuries, so the answer is 200 years.", check: "17-15" },
              { answer: 100, says: "You have counted one century instead of two. From 1500 to 1600 is one hundred years, and from 1600 to 1700 is another hundred: 200 in total.", check: "1600-1500" }
            ],
            why: "Length of a period = end date − start date: 1700 − 1500 = 200 years, which is two centuries."
          },
          levels: {
            support: {
              steps: [
                "Write the end date above the start date: 1700 over 1500.",
                "Subtract: the hundreds are what change, so work in hundreds.",
                "From 1500 to 1600 is 100 years. From 1600 to 1700 is another 100.",
                "Add the two jumps: 100 + 100 = 200."
              ],
              example: {
                q: "Practice: your last unit dated medieval medicine from 1250 to 1500. How many years is that?",
                steps: ["End date minus start date: 1500 − 1250.", "From 1250 to 1500 is 250."],
                answer: "250 years",
                checks: [{ expr: "1500-1250", value: 250, tol: 0 }]
              }
            },
            core: { hint: "End date minus start date. Count in hundreds from 1500 up to 1700." },
            stretch: { extend: "Your medieval unit covered 250 years and this one covers 200. Say which period you expect to show more change in medicine, and give one reason from what you have read so far." }
          },
          why: "1700 − 1500 = 200 years. Two centuries of new ideas, in which the explanations of disease used by most people barely moved.",
          explain: "Say, in one sentence, why you subtract rather than add to find how long a period lasted."
        },
        {
          title: "One way attitudes had changed",
          task: {
            kind: "written",
            q: "Explain one way in which attitudes to knowledge in Renaissance England were different from attitudes in medieval England. (4 marks)",
            marks: 4,
            criteria: [
              "Names one difference in attitude clearly in the first sentence",
              "Gives one piece of specific evidence from the medieval period and one from the Renaissance",
              "Explains what the difference meant for medicine, using the words ‘this meant that’",
              "Writes ideas as beliefs: ‘people believed’, ‘the Church taught’, not as facts"
            ],
            model: "One way attitudes to knowledge were different is that Renaissance humanists were willing to test old ideas for themselves, while medieval scholars had been expected to accept them. In the medieval period the Church ran the universities, had Galen's books copied by hand and discouraged anyone from criticising the Four Humours, so a physician learned medicine by reading what he was given. In the Renaissance, humanists collected the classical writers, taught Greek and Latin and argued that a person could find things out by observing and measuring. This meant that an educated man such as Vesalius could open a body and check Galen's description against what he saw, which was something a medieval physician would not have attempted."
          },
          levels: {
            support: {
              steps: [
                "Write your first sentence as an answer to the question: ‘One way attitudes were different is that…’.",
                "Give one medieval example: the Church controlled learning, books were copied by hand, criticising Galen was discouraged.",
                "Give one Renaissance example: humanists read the classical writers themselves, valued observation, and asked their own questions.",
                "Finish with ‘This meant that…’ and one consequence for medicine."
              ],
              example: {
                q: "Practice: explain one way in which the power of the Church in England was different in 1600 from its power in 1300.",
                steps: [
                  "Name the difference: by 1600 the Church no longer controlled what scholars were allowed to think.",
                  "Medieval evidence: it ran the universities and chose which books were copied.",
                  "Renaissance evidence: after the Reformation there were rival churches, and Henry VIII broke with Rome in 1534.",
                  "Consequence: this meant that ideas the Church had protected could be questioned in public."
                ],
                answer: "One way the Church's power was different is that by 1600 it could no longer decide what scholars thought. In 1300 it ran the universities and chose which books were copied; after the Reformation, and after Henry VIII broke with Rome in 1534, there were rival churches. This meant that an idea the Church had protected, such as the Four Humours, could now be argued about in public."
              }
            },
            core: { hint: "One difference, one medieval example, one Renaissance example, one consequence. Four marks means four moves, not four pages." },
            stretch: { extend: "Add a second paragraph that argues the opposite: name one attitude to knowledge that did not change between 1300 and 1600, and give evidence for it." }
          },
          why: "Four marks reward a clear difference, precise evidence from both periods, and an explanation of what it meant. The strongest answers name the Church's control of learning on one side and humanist observation on the other.",
          explain: "Say, in one sentence, what evidence you would use to prove that attitudes to knowledge really had changed."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 2 ─────────────────────────────
    {
      key: "causes-and-diagnosis", n: 2,
      title: "Causes of disease, and a new way of diagnosing",
      lead: "This chapter covers what people in Renaissance England believed made them ill, why those beliefs barely moved, and how Thomas Sydenham changed the way a patient was examined.",
      covers: [2],
      pretext: {
        words: [
          { word: "miasma", means: "the belief that bad air from dirt and rotting matter caused disease", sentence: "Most people believed that miasma made them ill." },
          { word: "diagnosis", means: "working out which illness a patient has", sentence: "A physician began with a diagnosis before choosing a treatment." },
          { word: "symptom", means: "a sign of illness, such as a rash, a cough or a fever", sentence: "Sydenham wrote down every symptom he could see." },
          { word: "observation", means: "watching and recording something carefully", sentence: "Observation of the patient was Sydenham's main method." },
          { word: "discredited", means: "shown to be wrong, so people stop trusting it", sentence: "Scientists discredited the Theory of the Four Humours." }
        ],
        passage: [
          "People in Renaissance England still wanted to know why they got ill.",
          "The most popular idea was miasma, or bad air.",
          "People believed that rotting rubbish and dirty places made the air harmful.",
          "The Four Humours was still believed by most ordinary people.",
          "By 1700 many scientists and physicians had rejected that theory.",
          "But nothing new had been found to put in its place.",
          "There were no instruments good enough to show what really caused disease.",
          "Robert Hooke built a much better microscope in this period.",
          "In 1683 Antonie van Leeuwenhoek saw tiny living things through a lens.",
          "Nobody linked them to disease for another two hundred years.",
          "Thomas Sydenham changed something else: the way patients were examined.",
          "He watched his patients closely and wrote down their symptoms.",
          "He treated the disease, not each symptom on its own."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الاعتقاد أنّ الهواء الفاسد من القذر والمتعفّن يسبّب المرض (miasma)",
            "معرفة أيّ مرض عند المريض (diagnosis)",
            "علامة مرض، كالطَّفَح أو الكحّة أو الحُمّى (symptom)",
            "مراقبة شيء وتسجيله بعناية (observation)",
            "ثبت خطؤه، فكفّ الناس عن الثقة به (discredited)"
          ],
          "passage": [
            "كان الناس في إنجلترا النهضة لا يزالون يريدون أن يعرفوا لماذا يمرضون.",
            "وأشهر فكرة كانت الميازما (miasma)، أي الهواء الفاسد.",
            "وكان الناس يعتقدون أنّ النفايات المتعفّنة والأماكن القذرة تجعل الهواء ضارًّا.",
            "والأخلاط الأربعة كان لا يزال يعتقدها معظم عامّة الناس.",
            "وبحلول 1700 كان كثير من العلماء والأطبّاء قد رفض تلك النظرية.",
            "ولكن لم يكن قد وُجد شيء جديد يُوضع في محلّها.",
            "ولم تكن هناك أجهزة جيّدة بما يكفي لتُظهر ما يسبّب المرض حقًّا.",
            "وبنى روبرت هوك (Robert Hooke) مِجهرًا أفضل كثيرًا في هذه المدّة.",
            "وفي 1683 رأى أنتوني فان ليوفنهوك (Antonie van Leeuwenhoek) كائنات حيّة صغيرة جدًّا بعدسة.",
            "ولم يربطها أحد بالمرض مئتي سنة أخرى.",
            "وغيّر توماس سيدنهام (Thomas Sydenham) شيئًا آخر: طريقة فحص المرضى.",
            "فكان يراقب مرضاه مراقبةً دقيقة ويكتب أعراضهم.",
            "وكان يعالج المرض، لا كلّ عَرَض وحده."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "przekonanie, że choroby powoduje złe powietrze z brudu i gnijących rzeczy (miasma)",
            "ustalanie, którą chorobę ma pacjent (diagnosis)",
            "objaw choroby, taki jak wysypka, kaszel albo gorączka (symptom)",
            "uważne patrzenie i zapisywanie tego, co się widzi (observation)",
            "wykazany jako błędny, więc ludzie przestają mu wierzyć (discredited)"
          ],
          "passage": [
            "Ludzie w renesansowej Anglii nadal chcieli wiedzieć, dlaczego chorują.",
            "Najpopularniejszym poglądem była miazma, czyli złe powietrze.",
            "Ludzie wierzyli, że gnijące śmieci i brudne miejsca czynią powietrze szkodliwym.",
            "W teorię czterech humorów nadal wierzyła większość zwykłych ludzi.",
            "Do 1700 roku wielu naukowców i lekarzy tę teorię odrzuciło.",
            "Ale nie znaleziono nic nowego, co można by postawić na jej miejscu.",
            "Nie było przyrządów dość dobrych, żeby pokazać, co naprawdę powoduje choroby.",
            "Robert Hooke zbudował w tym okresie o wiele lepszy mikroskop.",
            "W 1683 roku Antonie van Leeuwenhoek zobaczył przez szkiełko maleńkie żywe stworzenia.",
            "Nikt nie powiązał ich z chorobami jeszcze przez dwieście lat.",
            "Thomas Sydenham zmienił coś innego: sposób badania pacjentów.",
            "Uważnie obserwował swoich pacjentów i zapisywał ich objawy.",
            "Leczył chorobę, a nie każdy objaw osobno."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a crença de que o ar mau, vindo da sujidade e da matéria em decomposição, causava doenças (miasma)",
            "descobrir que doença é que um doente tem (diagnosis, diagnóstico)",
            "um sinal de doença, como uma erupção na pele, uma tosse ou febre (symptom, sintoma)",
            "observar e registar/registrar algo com cuidado (observation, observação)",
            "mostrado como errado, de maneira que as pessoas deixam de confiar nele (discredited, desacreditado)"
          ],
          "passage": [
            "As pessoas na Inglaterra do Renascimento continuavam a querer saber porque é que ficavam doentes.",
            "A ideia mais popular era o miasma, ou ar mau.",
            "As pessoas acreditavam que o lixo em decomposição e os lugares sujos tornavam o ar prejudicial.",
            "Quase todas as pessoas comuns continuavam a acreditar nos Quatro Humores.",
            "Em 1700 muitos cientistas e physicians já tinham rejeitado essa teoria.",
            "Mas não se tinha descoberto nada de novo para pôr no lugar dela.",
            "Não havia instrumentos bons o suficiente para mostrar o que causava as doenças de facto/fato.",
            "Robert Hooke construiu um microscópio muito melhor neste período.",
            "Em 1683 Antonie van Leeuwenhoek viu seres vivos minúsculos através de uma lente.",
            "Ninguém os ligou às doenças durante mais duzentos anos.",
            "Thomas Sydenham mudou outra coisa: a maneira como os doentes eram examinados.",
            "Observava os seus doentes com atenção e escrevia os sintomas deles.",
            "Tratava a doença, e não cada sintoma por si."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "caqiidada ah in hawada xun ee wasakhda iyo waxa qudhmaya ay cudur keento",
            "ogaanshaha cudurka qofka bukaan ah uu qabo",
            "calaamad cudur, sida finan, qufac ama qandho",
            "in wax si taxaddar leh loo daawado oo loo diiwaangeliyo",
            "waa la caddeeyay inay khaldan tahay, markaa dadku way ka kalsoonaan waayaan"
          ],
          "passage": [
            "Dadka Renaissance-ka England weli waxay rabeen inay ogaadaan sababta ay u bukoodeen.",
            "Fikradda ugu caansanayd waxay ahayd miasma, ama hawada xun.",
            "Dadku waxay rumaysnaayeen in qashinka qudhmaya iyo meelaha wasakhsan ay hawada waxyeello ka dhigeen.",
            "Four Humours-ka weli waxay rumaysnaayeen dadka caadiga ah badidood.",
            "1700-kii saynisyahanno iyo physicians badan ayaa fikraddaas diiday.",
            "Laakiin wax cusub lama helin oo meesheeda la geliyo.",
            "Ma jirin qalab wanaagsan oo ku filan oo muujiya waxa dhab ahaan cudurka keenay.",
            "Robert Hooke wuxuu muddadan dhisay microscope aad ka fiican.",
            "1683-dii Antonie van Leeuwenhoek wuxuu lens ku arkay noolaha yaryar.",
            "Cidna kuma xirin cudurka ilaa laba boqol oo sano kale.",
            "Thomas Sydenham wuxuu wax kale beddelay: sida bukaanka loo baaro.",
            "Bukaannadiisa si dhow ayuu u daawaday oo calaamadahooda cudurka ayuu qoray.",
            "Cudurka ayuu daaweeyay, ee ma ahayn calaamad kasta kali ahaan."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "віра в те, що хворобу спричиняло погане повітря від бруду і гнилі (miasma)",
            "визначення того, яку хворобу має пацієнт (diagnosis)",
            "ознака хвороби, як-от висип, кашель або гарячка (symptom)",
            "уважне спостереження і записування (observation)",
            "той, про якого показали, що він помилковий, тому люди перестають йому довіряти (discredited)"
          ],
          "passage": [
            "Люди в Англії часів Ренесансу все ще хотіли знати, чому вони хворіють.",
            "Найпоширенішою ідеєю були міазми (miasma), тобто погане повітря.",
            "Люди вірили, що гниле сміття і брудні місця робили повітря шкідливим.",
            "У чотири гумори (the Four Humours) все ще вірила більшість простих людей.",
            "До 1700 року багато науковців і лікарів відкинули цю теорію.",
            "Але нічого нового не знайшли, щоб поставити на її місце.",
            "Не було достатньо добрих приладів, щоб показати, що насправді спричиняє хвороби.",
            "Роберт Гук (Robert Hooke) побудував у цей період значно кращий мікроскоп.",
            "У 1683 році Антоні ван Левенгук побачив крізь лінзу крихітні живі істоти.",
            "Ніхто не пов’язав їх із хворобами ще двісті років.",
            "Томас Сайденгем (Thomas Sydenham) змінив інше: те, як оглядали пацієнтів.",
            "Він уважно спостерігав за своїми пацієнтами і записував їхні ознаки хвороби.",
            "Він лікував хворобу, а не кожну ознаку окремо."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "یہ عقیدہ کہ گندگی اور گلتے سڑتے مادے سے بننے والی بری ہوا بیماری پیدا کرتی ہے (miasma)",
            "یہ معلوم کرنا کہ مریض کو کون سی بیماری ہے (diagnosis)",
            "بیماری کی کوئی نشانی، جیسے دانے، کھانسی یا بخار (symptom)",
            "کسی چیز کو احتیاط سے دیکھنا اور لکھ لینا (observation)",
            "جس کا غلط ہونا دکھا دیا جائے، اس لیے لوگ اس پر بھروسہ چھوڑ دیں (discredited)"
          ],
          "passage": [
            "Renaissance کے انگلینڈ میں لوگ اب بھی جاننا چاہتے تھے کہ وہ بیمار کیوں پڑتے ہیں۔",
            "سب سے مقبول خیال miasma، یعنی بری ہوا، تھا۔",
            "لوگ مانتے تھے کہ گلتا سڑتا کوڑا اور گندی جگہیں ہوا کو نقصان دہ بنا دیتی ہیں۔",
            "زیادہ تر عام لوگ اب بھی Four Humours کو مانتے تھے۔",
            "1700 تک بہت سے سائنس دانوں اور physicians نے یہ نظریہ رد کر دیا تھا۔",
            "مگر اس کی جگہ رکھنے کے لیے کوئی نئی چیز نہ ملی تھی۔",
            "ایسے آلات موجود نہ تھے جو دکھا سکتے کہ بیماری اصل میں کس سے ہوتی ہے۔",
            "رابرٹ ہُک (Robert Hooke) نے اسی دور میں ایک بہت بہتر microscope بنایا۔",
            "1683 میں آنٹونی وان لیوین ہوک (Antonie van Leeuwenhoek) نے عدسے سے ننھے جاندار دیکھے۔",
            "مزید دو سو سال تک کسی نے انھیں بیماری سے نہ جوڑا۔",
            "تھامس سڈنہم (Thomas Sydenham) نے ایک اور چیز بدلی: مریضوں کو جانچنے کا طریقہ۔",
            "وہ اپنے مریضوں کو غور سے دیکھتا اور ان کی symptoms لکھ لیتا تھا۔",
            "وہ بیماری کا علاج کرتا تھا، ہر symptom کا الگ الگ نہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What people believed caused disease",
          paragraphs: [
            "Open a Renaissance medical book and you will not find germs. You will find the same explanations you met last unit. Miasma was the most popular: most people believed that bad air, rising from rotting food, dead animals or anywhere filthy, would unbalance the humours and make a person ill. Religion was still there, and so was astrology. Your lesson sums the period up with three headings: the Four Humours, miasma and religion.",
            "The one change is interesting. By the end of the Renaissance most scientists and physicians no longer trusted the Theory of the Four Humours: it had been argued over for a century and largely abandoned. But it was still widely believed by the population of Britain, so some physicians went on using it with their patients, because that was what the patients expected.",
            "Keep your belief words going here. People believed in miasma; physicians thought that the humours could fall out of balance. Neither statement is a fact about disease. Both are facts about what people believed, which is exactly what you are being asked about."
          ],
          tip: "An examiner's favourite question is what stayed the same. For causes of disease in this period, the short answer is: almost everything."
        },
        {
          heading: "Why new ideas about cause changed so little",
          paragraphs: [
            "Your lesson gives two reasons, and they are both worth learning. The first is science and technology: there was a lack of good quality medical instruments, especially microscopes. The second is a gap in knowledge: there was no new theory ready to replace the Four Humours. And behind both sat attitudes and beliefs, because the general public in Britain went on believing in the humours whatever the scientists said.",
            "Instruments were improving, though. Robert Hooke, an English scientist, developed a much better microscope and used it to draw what he saw. In 1683 Antonie van Leeuwenhoek, working in the Netherlands with his own lenses, observed tiny living things far too small for the eye. We now know these were bacteria.",
            "So why did that not solve everything? Because seeing something is not the same as explaining it. Nobody at the time connected those tiny creatures with illness. Nobody had the lenses, the chemistry or the experiments to test the link, and the idea that disease was caused by living things was not accepted for roughly another two hundred years. A discovery with no theory to hold it does not change medicine."
          ],
          worked: {
            q: "Is the microscope in this period an example of change or of continuity in medicine? Explain your judgement.",
            steps: [
              "Decide what actually altered. Better microscopes existed, and in 1683 tiny living things were observed for the first time: that is a real change in what could be seen.",
              "Decide what did not alter. Nobody linked those creatures to disease, so explanations of illness and the treatments based on them carried on as before.",
              "Separate knowledge from practice. The change is in knowledge and equipment; the continuity is in what physicians believed and did.",
              "Write a judgement that holds both halves, and say which was greater at the time."
            ],
            answer: "It is a change in knowledge but not yet in medicine: better microscopes let scientists see tiny living things in 1683, but because nobody connected them to disease, explanations and treatments showed continuity. At the time the continuity mattered more; the change mattered later."
          }
        },
        {
          heading: "Thomas Sydenham: a scientific approach to diagnosis",
          paragraphs: [
            "Thomas Sydenham was an English physician, and the first of the three individuals in this unit. Humanists had begun to study Hippocrates and Galen again rather than simply trust what the Church said about them, and some scientists had started to examine patients closely instead of relying on the authority of a book. Sydenham took that further than anyone in England.",
            "His key idea was simple to say and hard to do. Diagnose the patient by observing the symptoms closely, and then treat the disease that is producing them rather than each symptom on its own. He believed that a disease could be put into a group with others like it, and that if two patients had the same symptoms they should have the same treatment. He wrote down what he saw in detail and compared one patient with another.",
            "Hold that against the medieval approach you studied last unit. A medieval healer worked from the individual: the balance of that person's humours, their diet, their urine, the zodiac sign under which they fell. Each symptom was treated separately, because each was thought to be a separate imbalance. For Sydenham the disease was the thing to identify, and the person was the patient who had it."
          ]
        },
        {
          heading: "How much did diagnosis really change?",
          paragraphs: [
            "Sydenham's method is genuine change, and it is the ancestor of what a doctor does with you now: ask, look, listen, record, name the illness, treat the illness. It is also the reason he is in your lesson at all, because it is a change that came from one individual rather than from a machine or a government.",
            "But his methods did not spread far at the time. Most physicians went on diagnosing as they always had, partly because their patients expected it, partly because there was no training that required anything else, and partly because a new method that produces the same old treatments does not look very impressive. Observation told Sydenham precisely which disease a patient had; it did not give him a cure for it.",
            "That is the pattern of this whole unit, and it is worth writing on the inside of your book: in the Renaissance, knowledge changes faster than practice. Hold it ready for Vesalius and Harvey."
          ],
          tip: "If you are asked how much changed, answer in two halves: the method of diagnosis changed, the treatments that followed it did not."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which idea about the cause of disease was the most widely believed in Renaissance England?", options: ["Miasma: that bad air from dirt and rotting matter made people ill", "That tiny living things seen under a microscope made people ill", "That disease was spread by dirty drinking water", "That disease was carried by fleas living on rats"], answer: 0, why: "Miasma was the most popular belief. People thought bad air from rotting matter and dirty places would unbalance the humours.",
          feedback: [
            "",
            "Tiny living things were observed in 1683, but nobody at the time linked them to illness, so this was not a belief people held. The most widely held belief was miasma, bad air.",
            "Dirty water was shown to spread disease in the nineteenth century, long after this period. In Renaissance England the most widely held belief about cause was miasma.",
            "Fleas and rats are what historians today say spread the plague; nobody in the Renaissance knew it. The idea most people held about disease in general was miasma."
          ] },
        { kind: "gap", q: "Sydenham diagnosed a patient by watching carefully and writing down their ___ rather than starting from a theory about that person.", answer: "symptoms", options: ["symptoms", "humours", "star sign"], why: "Sydenham's method was to record the symptoms he could observe, group the disease with others like it, and treat the disease.",
          feedback: {
            "humours": "Starting from the humours is the older approach, in which a physician decided which of a patient's four liquids he thought was out of balance. Sydenham began instead with the symptoms he could see.",
            "star sign": "Consulting the zodiac belongs to the medieval approach you studied last unit. Sydenham began with the symptoms in front of him and wrote them down."
          } },
        { kind: "mcq", q: "Why did new ideas about the causes of disease have so little impact in this period?", options: ["Medical instruments were not good enough, there was no new theory to replace the Four Humours, and the public still believed in them", "Physicians were forbidden by law to write about the causes of disease", "The printing press had not yet been invented, so nothing could be published", "There were no scientists in Britain interested in medicine"], answer: 0, why: "Your lesson names poor instruments and a gap in knowledge, with the public's continued belief in the Four Humours behind both.",
          feedback: [
            "",
            "No such law existed; physicians published freely, and the Royal Society was created to help them do it. The real reasons were poor instruments, no replacement theory, and public belief in the humours.",
            "The printing press had existed since about 1440 and was spreading medical books across Europe, as your next chapter shows. The reasons lie in weak instruments, no replacement theory and public belief.",
            "There were plenty of interested scientists, including Hooke and the members of the Royal Society. What was missing was the instruments and a theory to replace the Four Humours."
          ] }
      ],
      modules: [
        {
          title: "Sydenham's method, step by step",
          task: {
            kind: "order",
            q: "Put the steps of Sydenham's approach to diagnosis in the order he would follow them.",
            items: [
              "Observe the patient closely and record every symptom you can see",
              "Compare these symptoms with those of other patients you have seen",
              "Group the illness with the other diseases whose symptoms match it",
              "Treat the disease as a whole, not each symptom on its own"
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask what has to happen first. You cannot compare anything until you have recorded one patient carefully.",
                "Next comes comparing: Sydenham believed the symptoms of a disease would be much the same in most people.",
                "Comparing lets you put the illness into a group, which is how you name it.",
                "Only once you have named the disease can you treat the disease rather than the separate symptoms."
              ],
              example: {
                q: "Practice: put these three steps of a medieval physician's visit in order: consult the zodiac for the patient's star sign; observe the patient and ask about their diet; treat the patient to rebalance the humours.",
                steps: ["The visit begins with the patient: observe and ask.", "The zodiac is consulted next, as part of working out the cause.", "Treatment comes last."],
                answer: "Observe the patient and ask about their diet; consult the zodiac for the patient's star sign; treat the patient to rebalance the humours."
              }
            },
            core: { hint: "Record, compare, group, treat. Each step needs the one before it." },
            stretch: { extend: "Say which of the four steps a medieval healer would have found strangest, and explain why in two sentences." }
          },
          why: "Sydenham observed and recorded symptoms, compared patients, grouped diseases whose symptoms matched, and then treated the disease rather than each symptom separately.",
          explain: "Say, in one sentence, why comparing two patients was the step that made grouping diseases possible."
        },
        {
          title: "Whose approach is this?",
          task: {
            kind: "mcq",
            q: "A physician sees three patients in one week with the same cough and the same fever. He writes down exactly what he observes in each, decides that all three have the same disease, and gives all three the same treatment. Whose approach to diagnosis is this closest to?",
            options: [
              "Sydenham's: group diseases by their symptoms and treat the disease",
              "The medieval approach: treat each symptom separately according to that patient's humours",
              "The astrologer's approach: match the treatment to the patient's star sign",
              "The Church's approach: treat illness as a punishment to be answered with prayer"
            ],
            answer: 0,
            why: "Recording symptoms, grouping patients whose symptoms match and treating the disease as a whole is exactly Sydenham's method.",
            feedback: [
              "",
              "The medieval approach began from the individual: this patient's humours, diet and urine, with each symptom treated on its own. Here the physician groups three patients together, which is Sydenham's method.",
              "No star sign appears anywhere in this case. The physician works from the symptoms he has observed, which is Sydenham's method.",
              "Nothing here is about sin or prayer. The physician observes, groups and treats the disease, which is Sydenham's method."
            ]
          },
          contexts: [
            { label: "A surgeon in a port", q: "A surgeon in a busy port writes down the symptoms of every sailor who comes to him with the same swollen gums and the same aching legs, judges that all of them have one illness, and gives them all the same treatment. Whose approach to diagnosis is this closest to?", why: "Writing down the symptoms, judging that the cases are one disease and treating that disease rather than each complaint on its own is Sydenham's method." },
            { label: "A physician with a notebook", q: "A physician keeps a notebook in which he records the symptoms of every patient he sees, then looks back through it to find the cases that match the patient in front of him. Whose approach to diagnosis is this closest to?", why: "Recording and comparing cases so that an illness can be grouped with others like it is Sydenham's method." },
            { label: "A physician a century later", q: "A physician working a hundred years after Sydenham sees four children from one street with the same rash and the same high fever, names the illness they share, and treats that illness in all four rather than the rash and the fever one at a time. Whose approach to diagnosis is this closest to?", why: "Grouping patients whose symptoms match, naming the disease and treating the disease as a whole is Sydenham's method, in whichever century the physician works." }
          ],
          levels: {
            support: {
              steps: [
                "Find out where the physician starts. Does he start with the symptoms, or with the individual person?",
                "Look for grouping. If several patients are treated as having one disease, that is Sydenham.",
                "Look for the older signs: the Four Humours, urine, diet, the zodiac, prayer. Any of these points away from Sydenham.",
                "Choose the option that matches the starting point, not the one that sounds most scientific."
              ],
              example: {
                q: "Practice: a physician treats a patient's headache with one remedy and the same patient's fever with another, because he believes each one shows a different imbalance. Whose approach is this?",
                steps: ["He starts with the separate symptoms of one person.", "He explains each by an imbalance of the humours.", "That is the older, medieval approach."],
                answer: "The medieval approach: each symptom treated separately according to the humours."
              }
            },
            core: { hint: "Sydenham starts with the symptoms and ends with one named disease. The older approach starts with the person and ends with several separate treatments." },
            stretch: { extend: "Write a short case of your own that a pupil could mistake for Sydenham's method but which is really the older approach, and say what gives it away." }
          },
          why: "Sydenham began with observed symptoms, grouped patients whose symptoms matched and treated the disease. The older approach began with the individual, explained each symptom as a separate imbalance and treated each one.",
          explain: "Say, in one sentence, the clearest clue that a case is describing Sydenham's method rather than the older one."
        },
        {
          title: "One thing that did not change",
          task: {
            kind: "written",
            q: "Explain one way in which ideas about the causes of disease were similar in medieval England and in Renaissance England. (4 marks)",
            marks: 4,
            criteria: [
              "Names one idea that continued, in the first sentence",
              "Gives one specific medieval example and one specific Renaissance example of that idea",
              "Explains what the continuity meant for treatment, using the words ‘this meant that’",
              "Writes the idea as a belief throughout: ‘people believed’, ‘physicians thought’"
            ],
            model: "One idea about the cause of disease that continued was miasma: in both periods people believed that bad air made them ill. In medieval England people blamed the smell of rotting rubbish and open drains, and town councils were ordered to clear the streets. In Renaissance England the same belief was still the most popular one, and householders could be fined for failing to clean the street outside their door while councils drained wet ground to take the bad smells away. This meant that prevention in both periods aimed at the air rather than at anything we would now call a cause, so the methods used in 1650 would have been recognised by someone living in 1350."
          },
          levels: {
            support: {
              steps: [
                "Choose the idea with the most evidence on both sides. Miasma and the Four Humours are the two safest choices.",
                "Write sentence one: ‘One idea about the cause of disease that continued was…’.",
                "Give one medieval example, then one Renaissance example. Each needs a detail: a practice, a law, an object.",
                "Finish with ‘This meant that…’ and say what the continuity did to treatment or prevention."
              ],
              example: {
                q: "Practice: plan an answer on the Four Humours as the continuity, rather than miasma. What are your two examples?",
                steps: [
                  "Medieval example: physicians were trained in the Four Humours at university and bled patients to rebalance them.",
                  "Renaissance example: scientists had largely rejected the theory by 1700, but most of the population still believed it and some physicians still used it.",
                  "Consequence: this meant that bloodletting and purging continued even after the theory behind them had been discredited."
                ],
                answer: "Plan: continuity = belief in the Four Humours. Medieval evidence = university training and bleeding to rebalance the humours. Renaissance evidence = the theory discredited among scientists but still believed by the public and used by some physicians. Consequence = bloodletting and purging carried on."
              }
            },
            core: { hint: "Pick miasma or the Four Humours. You need one detail from each period and one sentence on what the continuity did to treatment." },
            stretch: { extend: "Add a second paragraph naming the one real change in this period, and judge whether the change or the continuity was greater." }
          },
          why: "Four marks reward a named continuity, one specific example from each period, and a consequence. Miasma and the Four Humours are the strongest choices because the deck's own Renaissance causes diagram lists both.",
          explain: "Say, in one sentence, how you can tell a continuity from a change when you compare two periods."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 3 ─────────────────────────────
    {
      key: "spreading-ideas", n: 3,
      title: "How new ideas spread",
      lead: "This chapter explains the two developments that let a new medical idea travel: the printing press of about 1440 and the Royal Society of 1660.",
      covers: [3],
      pretext: {
        words: [
          { word: "scribe", means: "a person whose job was to copy books out by hand", sentence: "Before printing, every book was written out by a scribe." },
          { word: "printing press", means: "a machine with movable letters that printed pages quickly", sentence: "The printing press could produce hundreds of identical pages." },
          { word: "literacy", means: "being able to read and write", sentence: "Literacy improved across Europe during the Renaissance." },
          { word: "Royal Society", means: "a group of scientists created in 1660 to share and test ideas", sentence: "The Royal Society encouraged scientists to argue over new theories." },
          { word: "charter", means: "an official document from a ruler giving a group rights or approval", sentence: "A royal charter from the king gave the Royal Society credibility." },
          { word: "journal", means: "a regular publication in which scientists report their work", sentence: "The Royal Society printed its journal so other scientists could read it." }
        ],
        passage: [
          "Before printing, every book in Europe was copied out by hand.",
          "A scribe could take months to copy one book.",
          "Copies were expensive, and mistakes crept in with every one.",
          "The Church chose which books were copied, so it controlled new ideas.",
          "In about 1440 Johannes Gutenberg built a printing press in Europe.",
          "It used movable metal letters, so pages could be printed quickly.",
          "By 1500 printing presses had produced over twenty million copies.",
          "Literacy was improving too, so more people could read them.",
          "In 1660 scientists created the Royal Society to share ideas.",
          "They encouraged questioning and argument to test new theories.",
          "In 1662 King Charles II gave the Society a royal charter.",
          "From 1665 it published a journal in plain English, not Latin.",
          "Ideas could now travel faster than any one person could."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "شخص كان عمله نسخ الكتب باليد (scribe)",
            "آلة لها حروف متحرّكة تطبع الصفحات بسرعة (printing press)",
            "القدرة على القراءة والكتابة (literacy)",
            "جماعة من العلماء أُنشئت في 1660 لتشارُك الأفكار واختبارها (Royal Society)",
            "وثيقة رسمية من حاكم تُعطي جماعةً حقوقًا أو إقرارًا (charter)",
            "منشور منتظم يُبلّغ فيه العلماء عن عملهم (journal)"
          ],
          "passage": [
            "قبل الطباعة كان كلّ كتاب في أوروبا يُنسخ باليد.",
            "وكان الناسخ قد يستغرق شهورًا لنسخ كتاب واحد.",
            "وكانت النسخ غالية، وكانت الأخطاء تتسلّل إلى كلّ نسخة.",
            "وكانت الكنيسة تختار ما يُنسَخ من الكتب، فكانت تتحكّم في الأفكار الجديدة.",
            "وفي نحو 1440 بنى يوهانس غوتنبرغ (Johannes Gutenberg) مطبعة في أوروبا.",
            "وكانت تستخدم حروفًا معدنية متحرّكة، فصار يمكن طبع الصفحات بسرعة.",
            "وبحلول 1500 كانت المطابع قد أنتجت أكثر من عشرين مليون نسخة.",
            "وكانت القراءة والكتابة تتحسّن أيضًا، فصار يستطيع قراءتها ناس أكثر.",
            "وفي 1660 أنشأ العلماء الجمعية الملكية (Royal Society) لتشارُك الأفكار.",
            "وشجّعوا السؤال والجدل لاختبار النظريات الجديدة.",
            "وفي 1662 أعطى الملك تشارلز الثاني الجمعية امتيازًا ملكيًّا.",
            "ومن 1665 نشرت مجلّة بالإنجليزية البسيطة لا باللاتينية.",
            "فصارت الأفكار تستطيع أن تسافر أسرع من أيّ شخص واحد."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "człowiek, którego pracą było przepisywanie książek ręcznie (scribe)",
            "maszyna z ruchomymi literami, która szybko drukowała strony (printing press)",
            "umiejętność czytania i pisania (literacy)",
            "grupa naukowców utworzona w 1660 roku, żeby dzielić się pomysłami i je sprawdzać (Royal Society)",
            "oficjalny dokument od władcy, który daje grupie prawa albo zatwierdzenie (charter)",
            "regularne wydawnictwo, w którym naukowcy opisują swoją pracę (journal)"
          ],
          "passage": [
            "Przed wynalezieniem druku każdą książkę w Europie przepisywano ręcznie.",
            "Skrybie przepisanie jednej książki mogło zająć miesiące.",
            "Kopie były drogie, a przy każdej wkradały się błędy.",
            "Kościół wybierał, które książki się przepisuje, więc panował nad nowymi myślami.",
            "Około 1440 roku Johannes Gutenberg zbudował w Europie prasę drukarską.",
            "Używała ruchomych metalowych liter, więc strony można było drukować szybko.",
            "Do 1500 roku prasy drukarskie wydały ponad dwadzieścia milionów egzemplarzy.",
            "Umiejętność czytania też rosła, więc więcej ludzi mogło je czytać.",
            "W 1660 roku naukowcy utworzyli Royal Society, żeby dzielić się pomysłami.",
            "Zachęcali do pytań i sporów, żeby sprawdzać nowe teorie.",
            "W 1662 roku król Charles II (Karol II) nadał Towarzystwu przywilej królewski.",
            "Od 1665 roku wydawało ono czasopismo w prostym angielskim, a nie po łacinie.",
            "Pomysły mogły teraz podróżować szybciej niż jakikolwiek człowiek."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma pessoa cujo trabalho era copiar livros à mão (scribe, escriba)",
            "uma máquina com letras móveis que imprimia páginas depressa (printing press, prensa)",
            "ser capaz de ler e escrever (literacy, literacia/alfabetização)",
            "um grupo de cientistas criado em 1660 para partilhar/compartilhar e testar ideias (Royal Society)",
            "um documento oficial de um governante que dá direitos ou aprovação a um grupo (charter, carta)",
            "uma publicação regular em que os cientistas dão conta do seu trabalho (journal, revista científica)"
          ],
          "passage": [
            "Antes da prensa, todos os livros da Europa eram copiados à mão.",
            "Um escriba podia levar meses a copiar um livro.",
            "As cópias eram caras, e em cada uma iam entrando erros.",
            "A Igreja escolhia quais os livros que eram copiados, por isso controlava as ideias novas.",
            "Por volta de 1440 Johannes Gutenberg construiu uma prensa na Europa.",
            "Usava letras de metal móveis, por isso as páginas podiam ser impressas depressa.",
            "Em 1500 as prensas já tinham produzido mais de vinte milhões de cópias.",
            "A literacia/alfabetização também estava a melhorar, por isso mais pessoas as podiam ler.",
            "Em 1660 os cientistas criaram a Royal Society para partilharem/compartilharem ideias.",
            "Encorajavam as perguntas e a discussão para testar as teorias novas.",
            "Em 1662 o rei Charles II (Carlos II) deu à Society uma carta régia.",
            "A partir de 1665 publicou uma revista em inglês simples, e não em latim.",
            "As ideias podiam agora viajar mais depressa do que qualquer pessoa sozinha."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "qof shaqadiisu ahayd inuu buugag gacanta ku qoro",
            "mishiin xuruuf dhaqdhaqaaqa leh oo bogag si dhaqso ah u daabacay",
            "inaad akhrin oo qorin karto",
            "koox saynisyahanno ah oo la sameeyay 1660-kii si fikrado loo wadaago oo loo tijaabiyo",
            "warqad rasmi ah oo taliye ka timid oo koox siinaysa xuquuq ama ansixin",
            "daabacaad joogto ah oo saynisyahannadu shaqadooda ku soo sheegaan"
          ],
          "passage": [
            "Daabacaadda ka hor, buug kasta oo Yurub ku jiray gacan ayaa lagu qoray.",
            "Scribe wuxuu bilo qaadan karay inuu hal buug qoro.",
            "Nuqulladu waxay ahaayeen kuwo qaali ah, khaladaadna mid kasta ayay ku soo galeen.",
            "Kaniisaddu waxay dooratay buugaagta la qorayo, markaa fikradaha cusub ayay xukuntay.",
            "Qiyaastii 1440-kii Johannes Gutenberg wuxuu Yurub ka dhisay printing press.",
            "Wuxuu isticmaalay xuruuf bir ah oo dhaqaaqa, markaa bogagga si dhaqso ah waa la daabici karay.",
            "1500-kii printing presses waxay soo saareen in ka badan labaatan milyan oo nuqul.",
            "Akhris-qoriskuna wuu hagaagayay, markaa dad badan ayaa akhriyi karay.",
            "1660-kii saynisyahannadu waxay sameeyeen Royal Society si fikrado loo wadaago.",
            "Waxay dhiirrigeliyeen su'aalid iyo dood si fikrado cusub loo tijaabiyo.",
            "1662-dii Boqor Charles II wuxuu Society-ga siiyay charter boqortooyo.",
            "1665-kii wixii ka dambeeyay waxay daabacday joornaal Ingiriisi cad ah, ee ma ahayn Laatiin.",
            "Fikradaha hadda waxay ka sii dhaqso bixi karayeen qof kasta."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "людина, чиєю роботою було переписувати книги від руки (scribe)",
            "машина з рухомими літерами, яка швидко друкувала сторінки (printing press)",
            "уміння читати й писати (literacy)",
            "група науковців, створена у 1660 році, щоб обмінюватися ідеями і перевіряти їх (Royal Society)",
            "офіційний документ від правителя, що дає групі права або схвалення (charter)",
            "регулярне видання, у якому науковці повідомляють про свою роботу (journal)"
          ],
          "passage": [
            "До друку кожну книгу в Європі переписували від руки.",
            "Переписувачеві могли піти місяці, щоб переписати одну книгу.",
            "Копії були дорогі, і в кожну з них закрадалися помилки.",
            "Церква обирала, які книги переписувати, тому вона контролювала нові ідеї.",
            "Приблизно у 1440 році Йоганн Ґутенберґ побудував у Європі друкарський станок.",
            "Він використовував рухомі металеві літери, тому сторінки можна було друкувати швидко.",
            "До 1500 року друкарські станки випустили понад двадцять мільйонів копій.",
            "Уміння читати теж поліпшувалося, тому більше людей могло їх прочитати.",
            "У 1660 році науковці створили Королівське товариство, щоб обмінюватися ідеями.",
            "Вони підтримували запитання і суперечку, щоб перевіряти нові теорії.",
            "У 1662 році король Карл II дав Товариству королівську грамоту.",
            "З 1665 року воно видавало журнал простою англійською, а не латиною.",
            "Тепер ідеї могли подорожувати швидше, ніж будь-яка одна людина."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ شخص جس کا کام ہاتھ سے کتابیں نقل کرنا تھا (scribe)",
            "وہ مشین جس میں حرکت پذیر حروف سے صفحے تیزی سے چھاپے جاتے تھے (printing press)",
            "پڑھ لکھ سکنا (literacy)",
            "سائنس دانوں کا وہ گروہ جو 1660 میں خیالات بانٹنے اور جانچنے کے لیے بنا (Royal Society)",
            "کسی حاکم کی طرف سے دی گئی سرکاری دستاویز، جو کسی گروہ کو حق یا منظوری دے (charter)",
            "وہ باقاعدہ اشاعت جس میں سائنس دان اپنا کام بتاتے ہیں (journal)"
          ],
          "passage": [
            "چھپائی سے پہلے یورپ کی ہر کتاب ہاتھ سے نقل کی جاتی تھی۔",
            "ایک scribe کو ایک کتاب نقل کرنے میں مہینے لگ سکتے تھے۔",
            "نقلیں مہنگی ہوتی تھیں، اور ہر نقل میں غلطیاں در آتی تھیں۔",
            "کلیسا طے کرتا تھا کہ کون سی کتابیں نقل ہوں گی، اس لیے نئے خیالوں پر اس کا قابو تھا۔",
            "تقریباً 1440 میں یوہانس گوٹن برگ (Johannes Gutenberg) نے یورپ میں printing press بنائی۔",
            "اس میں حرکت پذیر دھاتی حروف تھے، اس لیے صفحے تیزی سے چھپ سکتے تھے۔",
            "1500 تک printing presses دو کروڑ سے زیادہ نقلیں چھاپ چکی تھیں۔",
            "literacy بھی بہتر ہو رہی تھی، اس لیے زیادہ لوگ انھیں پڑھ سکتے تھے۔",
            "1660 میں سائنس دانوں نے خیالات بانٹنے کے لیے Royal Society بنائی۔",
            "وہ نئے نظریوں کو جانچنے کے لیے سوال اٹھانے اور بحث کی ہمت افزائی کرتے تھے۔",
            "1662 میں بادشاہ چارلس دوم نے Society کو شاہی charter دیا۔",
            "1665 سے اس نے ایک journal سادہ انگریزی میں چھاپا، لاطینی میں نہیں۔",
            "اب خیال کسی ایک شخص سے زیادہ تیزی سے سفر کر سکتے تھے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Before printing: the hand-copied book",
          paragraphs: [
            "Start with the problem. For the whole of the medieval period, every book in Europe was copied out by hand, letter by letter, usually by monks or professional scribes. A single copy could take months. It was expensive, so only the Church, universities and the very rich owned books, and every copy carried small mistakes that the next copy then repeated.",
            "There is a second consequence, and it is the one that matters for medicine. Whoever does the copying decides what exists. The Church ran the monasteries that did most of the copying, so it was in practice in charge of which medical books were available. Galen's work was copied; anything that contradicted it was not. That is a large part of why so little changed in the period you studied last.",
            "Hold the three weaknesses in your head: slow, expensive, and controlled. The printing press attacks all three at once."
          ],
          tip: "When you explain how communications held medicine back, name the control as well as the slowness. Who decides what is copied decides what can be known."
        },
        {
          heading: "The printing press, about 1440",
          paragraphs: [
            "In about 1440 Johannes Gutenberg, working in Germany, built a printing press that used movable metal letters. A page was set up once and then printed again and again. It was fast, it was comparatively cheap, and every copy was identical. It spread with extraordinary speed: by 1500 presses in Europe had produced over twenty million copies of books.",
            "Your lesson gives the press two key effects. First, a discovery made in Italy could be read in England within months, in the same words and with the same diagrams, because nothing was altered in the copying. Second, the Church could no longer control the copying of medical texts, so it could not keep out ideas that disagreed with its teaching.",
            "One point of care, which your lesson does not make. Printing with movable type was invented earlier in China and Korea; what Gutenberg did was build a press that worked for European languages and could be copied by other printers. It is more accurate to say he created the printing press in Europe than to say he invented printing."
          ]
        },
        {
          heading: "The Royal Society, 1660",
          paragraphs: [
            "The second development is a group of people rather than a machine. In 1660 a group of scientists in London created the Royal Society so that they could put their findings in front of each other and build up understanding together. Its habit was argument: members were expected to question each other, repeat each other's experiments and attack weak claims. That habit is what turns a clever idea into tested knowledge.",
            "In 1662 the Society received a royal charter from King Charles II. Royal support mattered more then than it would now: it gave the Society standing, and with it the freedom to investigate new ideas and new methods, at a time when questioning accepted knowledge could look like troublemaking.",
            "From 1665 the Society published a scientific journal for fellow scientists, called ‘Philosophical Transactions’. Two decisions about it are worth remembering. It was printed in English rather than Latin, and in plain words, so that a reader who had never studied Latin could follow it. That is what allowed one scientist to read another's work closely and then take it further."
          ],
          worked: {
            q: "Plan an answer to: ‘Explain one way in which improved communications changed medicine in the Renaissance.’ Use the Royal Society.",
            steps: [
              "Point: improved communications changed medicine because the Royal Society let scientists read and test each other's work.",
              "Evidence: created in 1660, given a royal charter by Charles II in 1662, and from 1665 publishing ‘Philosophical Transactions’ in plain English rather than Latin.",
              "Explanation: this meant that a finding no longer stayed with the person who made it; others could repeat it, argue with it and build on it.",
              "Link: so new medical knowledge could grow across the whole of Europe, which it could not do when books were copied by hand."
            ],
            answer: "Point: the Royal Society spread and tested new work. Evidence: 1660 founded, 1662 royal charter, 1665 journal in plain English. Explanation: findings could be repeated, argued over and built on. Link: knowledge could grow across Europe, which hand-copying had prevented."
          }
        },
        {
          heading: "Did better communication change medicine?",
          paragraphs: [
            "Be clear about the limits. Neither the press nor the Society cured anybody. Printing spread the Four Humours just as efficiently as it spread Vesalius, and plenty of the twenty million printed copies carried old ideas to new readers. A faster road carries traffic in both directions.",
            "The fair judgement is that improved communications changed the conditions in which medicine could change. Without the press, Vesalius could not have put identical, detailed illustrations into the hands of physicians across Europe, and Harvey could not have expected his work to be read and checked. Without the Royal Society, there was nowhere for the checking to happen.",
            "So when you weigh the factors at the end of the unit, put improved communications in the column of things that made individuals possible. That is a different claim from saying it changed medicine by itself, and it is the stronger one."
          ],
          tip: "A factor can be important without being the cause. Improved communications is the best example in this unit: it multiplied what individuals could do."
        }
      ],
      gate: [
        { kind: "mcq", q: "Who built the printing press in Europe, and roughly when?", options: ["Johannes Gutenberg, in about 1440", "Robert Hooke, in about 1660", "Thomas Sydenham, in about 1500", "King Charles II, in 1662"], answer: 0, why: "Gutenberg built a press using movable metal letters in about 1440. By 1500 presses in Europe had printed over twenty million copies.",
          feedback: [
            "",
            "Robert Hooke was a scientist of the later part of this period and developed a much better microscope, not the printing press. The press was Gutenberg's, in about 1440.",
            "Sydenham was a physician who changed how patients were diagnosed; he had nothing to do with printing. The press was built by Gutenberg in about 1440.",
            "Charles II gave the Royal Society its royal charter in 1662, which is a different thing entirely. The printing press was Gutenberg's, in about 1440."
          ] },
        { kind: "gap", q: "From 1665 the Royal Society published its journal in ___ rather than Latin, so that more readers could understand it.", answer: "English", options: ["English", "Greek", "French"], why: "Publishing in English, and in straightforward language, meant that most readers could follow the research.",
          feedback: {
            "Greek": "Greek was the language of the ancient medical writers, not of a new English journal. The Royal Society published in English so that more people could read it.",
            "French": "French was not the language of the Society's members or of its readers in London. It published in English, in straightforward language, rather than in Latin."
          } },
        { kind: "mcq", q: "What did the royal charter of 1662 give the Royal Society?", options: ["Standing for its members, and the freedom to investigate new ideas", "The right to print all medical books in England", "Control of every university in England", "The power to arrest physicians who disagreed with it"], answer: 0, why: "The charter came from Charles II. Royal support gave the Society standing, and with it the freedom to investigate new ideas and new methods.",
          feedback: [
            "",
            "No group held a monopoly on printing medical books; the whole point of the press was that many printers could work. The charter gave the Society standing and royal support.",
            "Universities were not handed to the Society, and they went on teaching in their own way for many years. The charter gave the Society standing and royal support for its research.",
            "The Society had no power to arrest anyone. It was created so that scientists could put work in front of each other, and the charter gave that work standing."
          ] }
      ],
      modules: [
        {
          title: "From 1660 to the journal",
          task: {
            kind: "numeric",
            q: "The Royal Society was created in 1660 and began publishing ‘Philosophical Transactions’ in 1665. How many years later did the journal begin?",
            answer: 5, tolerance: 0, units: "years",
            check: "1665-1660",
            misconceptions: [
              { answer: 3325, says: "You added the two years together. To find a gap between two dates you subtract the earlier from the later: 1665 − 1660.", check: "1665+1660" },
              { answer: 6, says: "You counted both end years, which is how you count school days, not the gap between dates. From 1660 to 1665 is 5 years.", check: "1665-1660+1" },
              { answer: 2, says: "You have used 1662, the year of the royal charter, as your end date. The journal began in 1665, so the gap is 1665 − 1660 = 5 years.", check: "1662-1660" }
            ],
            why: "1665 − 1660 = 5 years. The charter came in between, in 1662."
          },
          levels: {
            support: {
              steps: [
                "Write the later date first: 1665. Then the earlier date: 1660.",
                "A gap between dates is always later minus earlier.",
                "1665 − 1660. The thousands and hundreds are the same, so only the units change.",
                "5 − 0 = 5, so the answer is 5 years."
              ],
              example: {
                q: "Practice: the Royal Society was created in 1660 and received its royal charter in 1662. How many years later was the charter?",
                steps: ["Later minus earlier: 1662 − 1660.", "That is 2."],
                answer: "2 years",
                checks: [{ expr: "1662-1660", value: 2, tol: 0 }]
              }
            },
            core: { hint: "Later date minus earlier date. Do not count both years as one each." },
            stretch: { extend: "Put 1660, 1662 and 1665 in order and say, in one sentence each, why each step mattered more than the one before it." }
          },
          why: "1665 − 1660 = 5. Five years took the Society from a group that met and argued to a group that published, which is the step that let other scientists check its work.",
          explain: "Say, in one sentence, why you subtract the earlier date from the later one to find a gap."
        },
        {
          title: "Developments and their effects",
          task: {
            kind: "match",
            q: "Match each development in communications to the effect your lesson gives it.",
            pairs: [
              ["Hand-copied books", "Slow and expensive to produce, and mistakes crept in with every new copy"],
              ["The printing press", "Information spread quickly and accurately, and the Church could no longer copy every medical text"],
              ["The Royal Society", "Scientists could repeat and argue over each other's work, which is how a claim was tested"],
              ["The royal charter of 1662", "The king's backing gave the Society standing at a time when questioning knowledge looked like trouble"],
              ["‘Philosophical Transactions’", "Research was published in plain English so that most readers could follow it"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Look for the clue word in each effect. Which effect mentions mistakes? That belongs to copying by hand.",
                "Which effect mentions the Church losing control? Only the press took copying out of the Church's hands.",
                "Which effect is about repeating and arguing? That is what the Society was created for.",
                "That leaves the king and the journal: one gave the Society standing, the other was printed in plain English."
              ],
              example: {
                q: "Practice: match these two: ‘a monastery scriptorium where one monk copies a medical book over several months’ and ‘a print shop that produces two hundred identical copies in a week’. Which is slow and controlled, and which is fast and hard to control?",
                steps: ["Copying by hand takes months and happens where the Church decides.", "Printing produces many identical copies quickly, in shops the Church does not run."],
                answer: "The scriptorium is slow and controlled; the print shop is fast and hard to control."
              }
            },
            core: { hint: "Two of the five are about the Society, one about its journal, one about the press and one about the world before the press." },
            stretch: { extend: "Rank the five from most to least important for the progress of medicine, and defend your first choice in two sentences." }
          },
          why: "Hand copying was slow, costly and error-prone; the press made information fast, accurate and beyond the Church's control; the Society tested ideas; the charter gave it standing; the journal carried research in plain English.",
          explain: "Say, in one sentence, which of these five developments you would remove first if you wanted to slow medicine down, and why."
        },
        {
          title: "One way communications changed medicine",
          task: {
            kind: "written",
            q: "Explain one way in which improved communications changed ideas about medicine in Renaissance England. (4 marks)",
            marks: 4,
            criteria: [
              "Names one development in communications in the first sentence",
              "Gives specific evidence: a date, a name or a title",
              "Explains what it meant for medical ideas, using the words ‘this meant that’",
              "Ends by linking back to the question rather than adding new information"
            ],
            model: "One way improved communications changed ideas about medicine was the printing press, which Johannes Gutenberg built in Europe in about 1440. By 1500 presses had produced over twenty million copies of books, and every copy of a page was identical to the last, so a physician in England could read the same words and study the same diagrams as a physician in Italy. This meant that a new idea no longer depended on a scribe copying it by hand in a monastery, and the Church could no longer prevent the copying of work that disagreed with its teaching. Improved communications therefore changed ideas about medicine by making them travel accurately, quickly and beyond the reach of the people who had controlled them."
          },
          levels: {
            support: {
              steps: [
                "Choose one development only: the press, the Society or the journal. One, explained properly, is worth more than three mentioned.",
                "Write your first sentence naming it, with its date.",
                "Add your evidence: twenty million copies by 1500; the charter of 1662; the journal from 1665 in English.",
                "Finish with ‘This meant that…’ and a link back to ideas about medicine."
              ],
              example: {
                q: "Practice: write the Point and Evidence sentences for the same question using the Royal Society instead of the press.",
                steps: [
                  "Point: improved communications changed ideas about medicine because the Royal Society let scientists test each other's work.",
                  "Evidence: created in 1660, given a royal charter in 1662, and publishing ‘Philosophical Transactions’ from 1665."
                ],
                answer: "One way improved communications changed ideas about medicine was the creation of the Royal Society in 1660. It received a royal charter from Charles II in 1662 and from 1665 published ‘Philosophical Transactions’, a journal in plain English in which members reported their research."
              }
            },
            core: { hint: "One development, one date, one consequence. The best consequence sentence here is about control, not just speed." },
            stretch: { extend: "Add a sentence that admits the limit: printing also spread old ideas such as the Four Humours. Then say why you still judge the press important." }
          },
          why: "Four marks reward one named development, precise evidence, and an explanation of what it meant. The strongest explanations say that printing took control of medical knowledge out of the Church's hands as well as making it faster.",
          explain: "Say, in one sentence, why control of copying mattered as much as the speed of copying."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 4 ─────────────────────────────
    {
      key: "treatment-and-care", n: 4,
      title: "Treating and caring for the sick",
      lead: "This chapter sorts the treatments and preventions of the Renaissance into change and continuity, and then asks who treated the sick and where they were cared for.",
      covers: [4, 5],
      pretext: {
        words: [
          { word: "transference", means: "the belief that an illness could be moved into an object or an animal", sentence: "People used transference to try to move a wart into an onion." },
          { word: "regimen sanitatis", means: "a routine a physician wrote for one patient to keep them healthy", sentence: "A rich patient paid for a regimen sanitatis covering diet and exercise." },
          { word: "alchemy", means: "an early form of chemistry in which substances were mixed to make new ones", sentence: "Alchemy produced new chemical remedies for sale." },
          { word: "apothecary", means: "a medic who mixed and sold medicines", sentence: "The apothecary had far more remedies to learn than before." },
          { word: "pest house", means: "a building set aside for people with one particular disease", sentence: "A patient with the plague might be sent to a pest house." },
          { word: "dissolution", means: "the closing down of the monasteries by Henry VIII from 1536", sentence: "The dissolution of the monasteries closed most hospitals in England." }
        ],
        passage: [
          "Most Renaissance treatments would have been familiar in the medieval period.",
          "Bloodletting and purging carried on, meant to rebalance the humours.",
          "Herbal remedies carried on too, with one new twist.",
          "A remedy was often picked because its colour matched the illness.",
          "Some treatments were new, such as transference.",
          "People believed an illness could be moved into an object or animal.",
          "Alchemy, an early chemistry, produced new chemical remedies.",
          "A book of 1618 listed over two thousand remedies for sale.",
          "Prevention changed more than treatment did.",
          "Streets were cleaned, swamps drained and rubbish cleared away.",
          "People also moved away from places they thought were unhealthy.",
          "Hospitals changed when Henry VIII closed the monasteries from 1536.",
          "New pest houses kept people with one disease away from everyone else."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الاعتقاد أنّ المرض يمكن نقله إلى شيء أو إلى حيوان (transference)",
            "نظام يكتبه الطبيب لمريض واحد ليبقى صحيحًا (regimen sanitatis)",
            "صورة قديمة من الكيمياء تُخلط فيها الموادّ لصنع موادّ جديدة (alchemy)",
            "طبيب يخلط الأدوية ويبيعها (apothecary)",
            "بناء يُخصَّص للناس المصابين بمرض واحد بعينه (pest house)",
            "إغلاق الأديرة على يد هنري الثامن من 1536 (dissolution)"
          ],
          "passage": [
            "معظم علاجات النهضة كانت معروفة في العصر الوسيط.",
            "فالفِصادة والتطهير استمرّا، والمقصود منهما إعادة توازن الأخلاط.",
            "واستمرّت العلاجات العشبية أيضًا، ومعها لمسة جديدة واحدة.",
            "فكان العلاج يُختار كثيرًا لأنّ لونه يطابق المرض.",
            "وبعض العلاجات كان جديدًا، كالنقل (transference).",
            "وكان الناس يعتقدون أنّ المرض يمكن نقله إلى شيء أو إلى حيوان.",
            "والكيمياء القديمة (alchemy) أنتجت علاجات كيميائية جديدة.",
            "وأحصى كتاب من 1618 أكثر من ألفي علاج للبيع.",
            "والوقاية تغيّرت أكثر ممّا تغيّر العلاج.",
            "فنُظّفت الشوارع وجُفّفت المستنقعات وأُزيلت النفايات.",
            "والناس أيضًا انتقلوا بعيدًا عن أماكن كانوا يرونها غير صحّية.",
            "وتغيّرت المستشفيات لمّا أغلق هنري الثامن الأديرة من 1536.",
            "وأبعدت بيوت الوباء الجديدة المصابين بمرض واحد عن الناس جميعًا."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "przekonanie, że chorobę można przenieść w jakiś przedmiot albo w zwierzę (transference)",
            "zestaw zaleceń, które lekarz pisał jednemu pacjentowi, żeby ten pozostał zdrowy (regimen sanitatis)",
            "wczesna forma chemii, w której mieszano substancje, żeby zrobić nowe (alchemy)",
            "medyk, który mieszał i sprzedawał lekarstwa (apothecary)",
            "budynek przeznaczony dla ludzi z jedną określoną chorobą (pest house)",
            "zamykanie klasztorów przez Henry'ego VIII od 1536 roku (dissolution)"
          ],
          "passage": [
            "Większość leczenia w renesansie byłaby znana już w średniowieczu.",
            "Upuszczanie krwi i oczyszczanie trwały dalej i miały przywracać równowagę humorów.",
            "Lekarstwa z roślin też trwały dalej, z jedną nowością.",
            "Lekarstwo często wybierano dlatego, że jego kolor pasował do choroby.",
            "Część leczenia była nowa, na przykład przenoszenie choroby (transference).",
            "Ludzie wierzyli, że chorobę można przenieść w jakiś przedmiot albo w zwierzę.",
            "Alchemia, wczesna chemia, dała nowe lekarstwa chemiczne.",
            "Książka z 1618 roku wymieniała ponad dwa tysiące lekarstw na sprzedaż.",
            "Zapobieganie zmieniło się bardziej niż leczenie.",
            "Czyszczono ulice, osuszano bagna i wywożono śmieci.",
            "Ludzie wyjeżdżali też z miejsc, które uważali za niezdrowe.",
            "Szpitale zmieniły się, kiedy Henry VIII (Henryk VIII) zaczął od 1536 roku zamykać klasztory.",
            "Nowe pest houses trzymały ludzi z jedną chorobą z dala od wszystkich innych."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a crença de que uma doença podia ser transferida para um objeto ou para um animal (transference, transferência)",
            "uma rotina que um physician escrevia para um doente, para o manter saudável (regimen sanitatis)",
            "uma forma antiga de química, em que se misturavam substâncias para fazer outras novas (alchemy, alquimia)",
            "um profissional que misturava e vendia medicamentos (apothecary, boticário)",
            "um edifício reservado para pessoas com uma determinada doença (pest house)",
            "o fecho dos mosteiros por Henry VIII a partir de 1536 (dissolution, dissolução)"
          ],
          "passage": [
            "Quase todos os tratamentos do Renascimento seriam familiares no período medieval.",
            "A sangria e a purga continuaram, com a intenção de reequilibrar os humores.",
            "Os remédios de ervas também continuaram, com uma novidade.",
            "Muitas vezes escolhia-se um remédio porque a cor dele correspondia à doença.",
            "Alguns tratamentos eram novos, como a transferência.",
            "As pessoas acreditavam que uma doença podia ser transferida para um objeto ou para um animal.",
            "A alquimia, uma química antiga, produziu remédios químicos novos.",
            "Um livro de 1618 listava mais de dois mil remédios à venda.",
            "A prevenção mudou mais do que o tratamento.",
            "As ruas foram limpas, os pântanos drenados e o lixo retirado.",
            "As pessoas também se mudavam para longe dos lugares que julgavam insalubres.",
            "Os hospitais mudaram quando Henry VIII fechou os mosteiros, a partir de 1536.",
            "As novas pest houses mantinham as pessoas com uma determinada doença longe de todas as outras."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "caqiidada ah in cudur shay ama xayawaan loo gudbin karo",
            "jadwal physician qoray oo hal bukaan ah si caafimaadkiisa loo ilaaliyo",
            "nooc hore oo kiimiko ah oo walxo la isku darayay si kuwo cusub loo sameeyo",
            "dhakhtar daawooyinka isku dara oo iibiya",
            "dhisme loo gooniyeeyay dadka qaba hal cudur gaar ah",
            "xidhidda monasteries-ka oo Henry VIII sameeyay laga bilaabo 1536-kii"
          ],
          "passage": [
            "Inta badan daaweynta Renaissance-ka waxaa la garan lahaa qarniyadii dhexe.",
            "Bloodletting iyo purging way sii socdeen, waxaana loogu talagalay in humours-ka dib loo dheellitiro.",
            "Daawooyinka dhirtuna way sii socdeen, iyagoo leh hal shay cusub.",
            "Daawo waxaa inta badan loo doortay maxaa yeelay midabkeedu cudurka u ekaa.",
            "Daaweyn qaar waxay cusub ahaayeen, sida transference.",
            "Dadku waxay rumaysnaayeen in cudur shay ama xayawaan loo gudbin karo.",
            "Alchemy, oo ahaa kiimiko hore, waxay soo saartay daawooyin kiimiko ah oo cusub.",
            "Buug 1618-kii wuxuu liistay in ka badan laba kun oo daawo oo iib ah.",
            "Ka-hortagga wuu ka sii beddelmay daaweynta.",
            "Waddooyinka waa la nadiifiyay, dhiiqooyinka waa la miiray, qashinkana waa la saaray.",
            "Dadku sidoo kale waxay ka guureen meelo ay u maleeyeen inaanay caafimaad lahayn.",
            "Isbitaallada way isbeddeleen markii Henry VIII xidhay monasteries-ka laga bilaabo 1536-kii.",
            "Pest houses cusub waxay dadka qaba hal cudur ka fogeeyeen dadka kale."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "віра в те, що хворобу можна було перенести в якусь річ або тварину (transference)",
            "розпорядок, який лікар писав для одного пацієнта, щоб тримати його здоровим (regimen sanitatis)",
            "рання форма хімії, у якій речовини змішували, щоб утворити нові (alchemy)",
            "медик, який змішував і продавав лікарські засоби (apothecary)",
            "будівля, відведена для людей з однією певною хворобою (pest house)",
            "закриття монастирів Генріхом VIII, починаючи з 1536 року (dissolution)"
          ],
          "passage": [
            "Більшість лікувань часів Ренесансу була б знайомою й у середньовіччі.",
            "Кровопускання й очищення продовжувалися, щоб урівноважити гумори.",
            "Трав’яні засоби теж продовжувалися, з однією новою рисою.",
            "Засіб часто обирали тому, що його колір відповідав хворобі.",
            "Деякі лікування були новими, як-от перенесення (transference).",
            "Люди вірили, що хворобу можна перенести в якусь річ або тварину.",
            "Алхімія, рання хімія, дала нові хімічні засоби.",
            "Книга 1618 року перелічувала понад дві тисячі засобів на продаж.",
            "Запобігання змінилося більше, ніж лікування.",
            "Вулиці прибирали, болота осушували, а сміття вивозили.",
            "Люди також виїжджали з місць, які вважали нездоровими.",
            "Лікарні змінилися, коли Генріх VIII почав закривати монастирі з 1536 року.",
            "Нові чумні доми (pest houses) тримали людей з однією хворобою подалі від усіх інших."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "یہ عقیدہ کہ بیماری کو کسی چیز یا جانور میں منتقل کیا جا سکتا ہے (transference)",
            "وہ معمول جو کوئی physician ایک مریض کے لیے لکھتا تھا تاکہ وہ صحت مند رہے (regimen sanitatis)",
            "کیمیا کی ایک ابتدائی شکل، جس میں مادے ملا کر نئے مادے بنائے جاتے تھے (alchemy)",
            "وہ طبی آدمی جو دوائیں ملاتا اور بیچتا تھا (apothecary)",
            "وہ عمارت جو ایک خاص بیماری والے لوگوں کے لیے الگ رکھی جاتی تھی (pest house)",
            "ہنری ہشتم کے ہاتھوں 1536 سے monasteries کا بند کیا جانا (dissolution)"
          ],
          "passage": [
            "Renaissance کے زیادہ تر علاج قرونِ وسطیٰ میں بھی جانے پہچانے ہوتے۔",
            "bloodletting اور purging جاری رہے، جن کا مقصد humours کا توازن بحال کرنا تھا۔",
            "جڑی بوٹیوں کے علاج بھی جاری رہے، ایک نئے موڑ کے ساتھ۔",
            "علاج اکثر اس لیے چنا جاتا تھا کہ اس کا رنگ بیماری سے ملتا تھا۔",
            "کچھ علاج نئے تھے، جیسے transference۔",
            "لوگ مانتے تھے کہ بیماری کو کسی چیز یا جانور میں منتقل کیا جا سکتا ہے۔",
            "alchemy، یعنی ابتدائی کیمیا، سے نئے کیمیائی علاج نکلے۔",
            "1618 کی ایک کتاب میں بکنے والے دو ہزار سے زیادہ علاج درج تھے۔",
            "بچاؤ میں علاج سے زیادہ تبدیلی آئی۔",
            "گلیاں صاف کی گئیں، دلدلیں خشک کی گئیں اور کوڑا ہٹایا گیا۔",
            "لوگ ان جگہوں سے دور بھی چلے جاتے تھے جنھیں وہ غیر صحت مند سمجھتے تھے۔",
            "ہسپتال اس وقت بدلے جب ہنری ہشتم نے 1536 سے monasteries بند کر دیے۔",
            "نئے pest houses ایک بیماری والے لوگوں کو باقی سب سے دور رکھتے تھے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Treatments: what carried on, and what was new",
          paragraphs: [
            "Start with the continuity, because there is more of it. Keeping a careful diet was still believed to be among the best ways of staying well. Bloodletting was still used, meant to rebalance the humours, and purging was believed to do the same job from the other end: a patient was given something that would make them vomit or sweat. Herbal remedies remained popular. The one twist is that a remedy was often picked because its colour matched the illness: smallpox reddens the skin, so red things such as red wine were used against it.",
            "Now the changes. Transference was a new idea in this period, and it became very popular. People believed that an illness could be rubbed out of a person and into an object: a wart, for example, might be rubbed with an onion so that it would pass into the onion. Someone with a fever might keep a sheep in the bedroom overnight, in the belief that the fever would move into the animal.",
            "The second change is more important in the long run. The new science of alchemy, an early form of chemistry, developed in this period. Alchemists mixed substances to make new ones, and physicians began to hope for chemical cures rather than herbs and bloodletting alone. The ‘Pharmacopoeia Londinensis’, printed in 1618, ran to more than 2,140 remedies, and 122 of those came from chemical alchemy. Because this was also an age of exploration, new plants arrived from the Americas, and new remedies such as sarsaparilla came with them."
          ],
          tip: "In a change-and-continuity answer, say what the treatment was FOR as well as what it was. Bloodletting continued because the belief behind it, the Four Humours, continued."
        },
        {
          heading: "Preventions: cleaning the air and moving away",
          paragraphs: [
            "Prevention is where this period changed most, and the reason is miasma. Because most people believed bad air caused disease, more and more was done to remove it. In England a householder could be fined for leaving the street in front of his door dirty. Councils had marshes and boggy ground drained so that the smells would go. Criminals could be sentenced to clear rubbish from the streets, which tells you both how unpleasant the job was and how badly it was wanted.",
            "Two preventions were new in a different way. People began to believe that where you lived mattered as much as how you lived. Leaving a place where disease had broken out, for somewhere thought healthier, became very popular among those who could afford it. People also began to believe that particular places and particular weather spread disease, so thermometers were used to measure the weather and set the readings against outbreaks. That is a real scientific habit applied to a mistaken idea.",
            "Some prevention carried on unchanged. A physician would still write a patient a regimen sanitatis, a routine for keeping healthy through diet, exercise and cleanliness; only the rich could pay for one. Public bathing changed, though. Public baths, called stewes, lost their good name after a disease called the Great Pox spread in England, and many people gave them up. Instead they wiped themselves down with linen and put on clean clothes more often."
          ],
          worked: {
            q: "Sort these four into treatment or prevention, and into change or continuity: bloodletting; transference; draining a swamp; a regimen sanitatis.",
            steps: [
              "Decide treatment or prevention first. A treatment is for someone who is already ill; a prevention is to stop them getting ill.",
              "Bloodletting treats someone who is ill, and it carried on from the medieval period: treatment, continuity.",
              "Transference also treats an illness someone already has, and the idea developed in this period: treatment, change.",
              "Draining a swamp is to stop people getting ill and much more of it was done now: prevention, change. A regimen sanitatis is also prevention, and it carried on: prevention, continuity."
            ],
            answer: "Bloodletting: treatment, continuity. Transference: treatment, change. Draining a swamp: prevention, change. A regimen sanitatis: prevention, continuity."
          }
        },
        {
          heading: "Who treated the sick?",
          paragraphs: [
            "The four medical figures you met last unit were all still there, but two of their jobs got harder. An apothecary now had many more remedies to know, including the chemical ones in books such as the 1618 list, and a surgeon had more knowledge of the body to learn as anatomy improved. Harder jobs meant longer training, and that gradually made both more skilled and more respected, although neither held a university degree.",
            "The physician's training shows continuity and change in one place. Dissection of human bodies was now legal, which it had not been, so medical students could in principle learn from a body. In practice it was still rarely done: very few bodies were available, since usually only those of executed criminals could be used, and many people still disliked the idea. What did change physicians' training was the printing press, which put accurate, illustrated anatomy books in front of every student.",
            "Outside the paid medics, most care was still given by women in the household and by neighbours: community care. It remained popular for the simplest of reasons. It was free, it was close, and it was the only option for most people, since a physician's fee was out of reach."
          ]
        },
        {
          heading: "Where were the sick cared for?",
          paragraphs: [
            "Renaissance hospitals were for the sick poor, and mostly for people with illnesses thought likely to get better; the very infectious and the incurable were usually kept out. A patient could expect a bed, warmth, food, rest, prayers and, increasingly, a visit from a physician and medicines from an apothecary. Most of the day-to-day care was given by nuns or by hired nurses. That is a real change from the medieval hospital, which was closer to a place to rest and pray than a place to be treated.",
            "Then came a shock. From 1536 Henry VIII closed the monasteries, a process called the dissolution of the monasteries, and because most hospitals were run by monks and nuns most of them closed too. For some years there was very little hospital care in England at all. A few were refounded with money from towns and wealthy donors: St Bartholomew's in London, one of the oldest, was closed and then reopened after the City asked the king for it.",
            "One kind of building was completely new: the pest house. A pest house was set aside for people with one particular disease, usually the plague or the pox, so that they were kept apart from everyone else. That is different from the medieval period, when a sick person generally stayed at home. Keep it in mind for chapter 6, because isolation is the one prevention that will actually work in 1665."
          ],
          tip: "The dissolution of the monasteries is an attitudes-and-beliefs factor doing something to medicine: a religious change with a medical consequence nobody intended."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which treatment carried on from the medieval period into the Renaissance?", options: ["Bloodletting, meant to rebalance the humours", "Transference of an illness into an object", "Chemical remedies made by alchemy", "Isolation in a pest house"], answer: 0, why: "Bloodletting, purging and herbal remedies all continued, because the belief behind them, the Four Humours, continued too.",
          feedback: [
            "",
            "Transference is one of the new ideas of this period, not a continuity: it developed in the Renaissance and became very popular. The treatment that carried on is bloodletting.",
            "Chemical remedies came from the new science of alchemy, so they are a change rather than a continuity. Bloodletting is the treatment that carried on.",
            "Pest houses were new buildings of this period and are a prevention rather than a treatment. The treatment that carried on from the medieval period is bloodletting."
          ] },
        { kind: "gap", q: "A physician would write a wealthy patient a ___ sanitatis: a routine for keeping healthy.", answer: "regimen", options: ["regimen", "remedy", "regiment"], why: "A regimen sanitatis covered diet, exercise and cleanliness. Only the rich could pay a physician for one.",
          feedback: {
            "remedy": "A remedy is the medicine itself, something you take when you are already ill. The routine for keeping healthy is a regimen sanitatis.",
            "regiment": "A regiment is a unit of soldiers. The word you want sounds similar but means a routine or regime: a regimen sanitatis."
          } },
        { kind: "mcq", q: "What was new about pest houses in the Renaissance period?", options: ["They were buildings set aside for people with one disease, keeping them away from everyone else", "They were the first hospitals ever built in England", "They were free hospitals where any illness could be treated", "They were run by the Royal Society to test new remedies"], answer: 0, why: "A pest house took people with one disease, usually the plague or the pox, out of the community. In the medieval period a sick person generally stayed at home.",
          feedback: [
            "",
            "England already had hospitals in the medieval period, many of them run by monks and nuns. What was new about a pest house was that it isolated people with one particular disease.",
            "A pest house was not for any illness: it existed precisely because one disease needed to be kept apart from everyone else, usually the plague or the pox.",
            "The Royal Society was a group of scientists who shared and tested ideas, and it ran no buildings for patients. A pest house isolated people with one disease."
          ] }
      ],
      modules: [
        {
          title: "Which belief is this method based on?",
          task: {
            kind: "match",
            q: "Match each Renaissance method to the belief about disease that lay behind it.",
            pairs: [
              ["Rubbing a wart with an onion", "The belief that an illness could be moved out of a person and into an object"],
              ["Sweeping the streets and draining swamps", "The belief that bad air from dirt and rotting matter caused disease"],
              ["Bloodletting and purging", "The belief that illness came from the four liquids of the body falling out of balance"],
              ["Writing a patient a regimen sanitatis", "The belief that good health was kept up through diet, exercise and cleanliness"],
              ["Selling a chemical remedy from an alchemist", "The new idea that mixing substances could produce a cure that herbs could not"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read each method and ask: what did the person doing it think was wrong?",
                "If the method attacks smells, dirt or air, the belief is miasma.",
                "If the method takes something out of the body, the belief is the Four Humours.",
                "That leaves the onion, which is transference, the instructions, which are about keeping healthy, and the alchemist's bottle, which is the new chemistry."
              ],
              example: {
                q: "Practice: a family with a fever in the house keeps a sheep in the bedroom overnight. Which belief is this based on?",
                steps: ["Nothing is being taken out of the body and nothing is being cleaned.", "The fever is supposed to go somewhere: into the animal.", "That is the belief called transference."],
                answer: "Transference: the belief that an illness could be moved into an animal."
              }
            },
            core: { hint: "Five methods, five beliefs. Two of them attack the body, one attacks the air, one moves the illness, and one is brand new." },
            stretch: { extend: "Choose the two methods you think would have been most popular with ordinary people rather than physicians, and explain your choice using cost and ease." }
          },
          why: "Transference lay behind the onion; miasma lay behind street-cleaning and draining; the Four Humours lay behind bloodletting and purging; staying healthy by diet and cleanliness lay behind the regimen sanitatis; and the new chemistry of alchemy lay behind chemical remedies.",
          explain: "Say, in one sentence, why knowing the belief behind a method helps you judge whether the method was a change or a continuity."
        },
        {
          title: "Counting the remedies of 1618",
          task: {
            kind: "numeric",
            q: "The ‘Pharmacopoeia Londinensis’ of 1618 ran to more than 2,140 remedies. 122 of them came from chemical alchemy. How many of the listed remedies were not made that way?",
            answer: 2018, tolerance: 0, units: "remedies",
            check: "2140-122",
            misconceptions: [
              { answer: 2262, says: "You added the two numbers. The chemical remedies are part of the 2,140, so you take them away from the total: 2,140 − 122.", check: "2140+122" },
              { answer: 2140, says: "That is the total number listed, not the number left once the chemical ones are taken out. Subtract: 2,140 − 122 = 2,018.", check: "2140" },
              { answer: 2028, says: "You lost ten in the tens column. Line the numbers up carefully: 2,140 − 122 = 2,018, not 2,028.", check: "2140-122+10" }
            ],
            why: "2,140 − 122 = 2,018. The great majority of the remedies in the book were still the older herbal kind, which is a useful measure of how much continuity there was."
          },
          contexts: [
            { label: "An apothecary's shelf", q: "An apothecary buys the ‘Pharmacopoeia Londinensis’ of 1618, which runs to 2,140 remedies. He already stocks the 122 chemical ones. How many of the listed remedies does he not yet stock?", check: "2140-122" },
            { label: "A physician's reading", q: "A physician works through the 2,140 remedies in the 1618 list, marking the 122 that come from chemical alchemy. How many does he leave unmarked?", check: "2140-122" },
            { label: "A printer's order", q: "A printer sets out the 2,140 remedies of the 1618 list in two sections, putting the 122 chemical remedies in the second. How many go in the first section?", check: "2140-122" }
          ],
          levels: {
            support: {
              steps: [
                "Decide what the 122 is part of. It is part of the 2,140, so this is a subtraction, not an addition.",
                "Write the larger number above the smaller: 2,140 above 122, lining up the units.",
                "Subtract the units: 0 − 2 needs a ten, so take one from the tens: 10 − 2 = 8.",
                "Finish the tens and hundreds: the answer is 2,018."
              ],
              example: {
                q: "Practice: a list holds 1,540 remedies, of which 140 are chemical. How many are not chemical?",
                steps: ["The 140 is part of the 1,540, so subtract.", "1,540 − 140 = 1,400."],
                answer: "1,400 remedies",
                checks: [{ expr: "1540-140", value: 1400, tol: 0 }]
              }
            },
            core: { hint: "The chemical remedies are inside the total, so subtract them from it." },
            stretch: { extend: "Work out roughly what fraction of the remedies were chemical, and say what that fraction tells you about how much treatment had really changed by 1618." }
          },
          why: "2,140 − 122 = 2,018 remedies that were not made by alchemy. Fewer than one in sixteen entries in the book came from the new chemistry, so the book itself is evidence of continuity.",
          explain: "Say, in one sentence, how you knew this question needed a subtraction rather than an addition."
        },
        {
          title: "One way care changed",
          task: {
            kind: "written",
            q: "Explain one way in which care for the sick changed in Renaissance England. (4 marks)",
            marks: 4,
            criteria: [
              "Names one change in care in the first sentence",
              "Gives specific evidence: a date, a place, a type of building or a group of people",
              "Explains what the change meant for a sick person, using the words ‘this meant that’",
              "Links the change to a factor, such as attitudes and beliefs or government"
            ],
            model: "One way care for the sick changed was the arrival of the pest house, a building set aside for people with one particular disease such as the plague or the pox. In the medieval period a sick person was almost always cared for at home by the women of the household, and hospitals took in those thought likely to recover rather than the infectious. A pest house took the infectious out of the community altogether and gave them somewhere to be nursed. This meant that isolation became a recognised way of dealing with disease in England, which is why the response to the plague of 1665 looked so different from the response in 1348 even though the explanations of the disease had hardly moved. The change belongs to attitudes and beliefs as much as to medicine: people had come to accept that keeping the sick apart protected everyone else."
          },
          levels: {
            support: {
              steps: [
                "Choose one change: pest houses, hospitals treating as well as resting, or the effect of closing the monasteries from 1536.",
                "Write your first sentence naming it.",
                "Add one precise detail: the disease a pest house was for, the year 1536, or what a patient could expect in a hospital.",
                "Finish with ‘This meant that…’, then name the factor behind the change."
              ],
              example: {
                q: "Practice: write the Point and Evidence sentences for this question using the dissolution of the monasteries instead.",
                steps: [
                  "Point: care changed because most hospitals closed when the monasteries were dissolved.",
                  "Evidence: Henry VIII began closing them from 1536, and because monks and nuns ran most hospitals, most hospitals went with them; a few, such as St Bartholomew's in London, were later reopened with the city's support."
                ],
                answer: "One way care for the sick changed was that most hospitals closed. From 1536 Henry VIII dissolved the monasteries, and because monks and nuns ran most of England's hospitals, most of them shut; only a few, such as St Bartholomew's in London, were reopened later with support from the city."
              }
            },
            core: { hint: "One change, one detail, one consequence for a sick person, one factor. The pest house and the dissolution are the two strongest choices." },
            stretch: { extend: "Add a sentence on what did NOT change in care, and judge whether change or continuity was greater for an ordinary sick person." }
          },
          why: "Four marks reward a named change, precise evidence, a consequence and a link to a factor. The strongest answers notice that the biggest change in care, the closing of the hospitals, came from a religious decision rather than a medical one.",
          explain: "Say, in one sentence, why a change in care can happen without any change in what people believed caused disease."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 5 ─────────────────────────────
    {
      key: "vesalius-harvey", n: 5,
      title: "Vesalius and Harvey: two individuals and the body",
      lead: "This chapter covers the two men at the centre of the enquiry: what each one found out about the human body, which factors made it possible, and why their work changed knowledge far more than practice.",
      covers: [6, 7],
      pretext: {
        words: [
          { word: "anatomy", means: "the study of the structure of the body", sentence: "Vesalius studied anatomy by dissecting bodies himself." },
          { word: "dissection", means: "cutting open a dead body to study it", sentence: "A public dissection drew crowds of medical students." },
          { word: "illustration", means: "a detailed drawing in a book", sentence: "The illustrations in Vesalius's second book were extremely detailed." },
          { word: "vein", means: "a blood vessel that carries blood towards the heart", sentence: "Harvey showed that a vein carries blood to the heart." },
          { word: "artery", means: "a blood vessel that carries blood away from the heart", sentence: "An artery carries blood away from the heart." },
          { word: "circulation", means: "the movement of blood round and round the body", sentence: "Harvey proved the circulation of the blood." }
        ],
        passage: [
          "Andreas Vesalius wanted to know what the human body was really like.",
          "Medieval dissections were held to confirm what Galen had written.",
          "A professor read the book aloud while someone else did the cutting.",
          "Vesalius did the cutting himself and taught from what he saw.",
          "In 1543 he published a book of very detailed illustrations.",
          "He found more than three hundred mistakes in Galen's work.",
          "Galen had made them because he dissected animals, not people.",
          "William Harvey studied the body by dissection and observation too.",
          "He showed that veins carry blood to the heart.",
          "He showed that the heart pumps blood round and round the body.",
          "Galen had taught that blood was made in the liver.",
          "Harvey published his findings in 1628.",
          "Both men changed what was known, but not what doctors did."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "دراسة بنية الجسم (anatomy)",
            "فتح جسم ميّت لدراسته (dissection)",
            "رسم مفصّل في كتاب (illustration)",
            "وعاء دموي يحمل الدم نحو القلب (vein)",
            "وعاء دموي يحمل الدم بعيدًا عن القلب (artery)",
            "حركة الدم دورةً بعد دورة في الجسم (circulation)"
          ],
          "passage": [
            "أراد أندرياس فيزاليوس (Andreas Vesalius) أن يعرف كيف هو جسم الإنسان حقًّا.",
            "وكانت تشريحات العصر الوسيط تُجرى لتأكيد ما كتبه جالينوس.",
            "فكان أستاذ يقرأ الكتاب بصوت عالٍ وشخص آخر يُجري القطع.",
            "أمّا فيزاليوس فأجرى القطع بنفسه وعلّم ممّا رآه.",
            "وفي 1543 نشر كتابًا فيه رسوم مفصّلة جدًّا.",
            "ووجد أكثر من ثلاث مئة خطأ في عمل جالينوس.",
            "وكان جالينوس قد وقع فيها لأنه شرّح حيوانات لا بشرًا.",
            "ودرس وليام هارفي (William Harvey) الجسم بالتشريح والمراقبة أيضًا.",
            "فأظهر أنّ الأوردة تحمل الدم إلى القلب.",
            "وأظهر أنّ القلب يضخّ الدم دورةً بعد دورة في الجسم.",
            "وكان جالينوس قد علّم أنّ الدم يُصنع في الكبد.",
            "ونشر هارفي نتائجه في 1628.",
            "وكلا الرجلين غيّر ما كان معروفًا، ولكنه لم يغيّر ما كان الأطبّاء يفعلونه."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "nauka o budowie ciała (anatomy)",
            "rozcinanie martwego ciała, żeby je zbadać (dissection)",
            "dokładny rysunek w książce (illustration)",
            "naczynie krwionośne, które prowadzi krew w stronę serca (vein)",
            "naczynie krwionośne, które prowadzi krew od serca (artery)",
            "ruch krwi w kółko po całym ciele (circulation)"
          ],
          "passage": [
            "Andreas Vesalius chciał wiedzieć, jakie naprawdę jest ludzkie ciało.",
            "Średniowieczne sekcje robiono, żeby potwierdzić to, co napisał Galen.",
            "Profesor czytał książkę na głos, a ktoś inny rozcinał ciało.",
            "Vesalius rozcinał sam i uczył z tego, co zobaczył.",
            "W 1543 roku wydał książkę z bardzo dokładnymi rysunkami.",
            "Znalazł w pracy Galena ponad trzysta błędów.",
            "Galen popełnił je, bo robił sekcje zwierząt, a nie ludzi.",
            "William Harvey też badał ciało przez sekcje i obserwację.",
            "Pokazał, że żyły prowadzą krew do serca.",
            "Pokazał, że serce pompuje krew w kółko po całym ciele.",
            "Galen nauczał, że krew powstaje w wątrobie.",
            "Harvey wydał swoje odkrycia w 1628 roku.",
            "Obaj zmienili to, co było wiadomo, ale nie to, co robili lekarze."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o estudo da estrutura do corpo (anatomy, anatomia)",
            "abrir um corpo morto para o estudar (dissection, dissecação)",
            "um desenho detalhado num livro (illustration, ilustração)",
            "um vaso sanguíneo que leva o sangue em direção ao coração (vein, veia)",
            "um vaso sanguíneo que leva o sangue para longe do coração (artery, artéria)",
            "o movimento do sangue às voltas pelo corpo (circulation, circulação)"
          ],
          "passage": [
            "Andreas Vesalius queria saber como era realmente o corpo humano.",
            "As dissecações medievais faziam-se para confirmar o que Galeno tinha escrito.",
            "Um professor lia o livro em voz alta enquanto outra pessoa fazia os cortes.",
            "Vesalius fazia ele próprio os cortes e ensinava a partir daquilo que via.",
            "Em 1543 publicou um livro com ilustrações muito detalhadas.",
            "Encontrou mais de trezentos erros na obra de Galeno.",
            "Galeno tinha-os cometido porque dissecava animais, e não pessoas.",
            "William Harvey também estudou o corpo pela dissecação e pela observação.",
            "Mostrou que as veias levam o sangue até ao coração.",
            "Mostrou que o coração bombeia o sangue às voltas pelo corpo.",
            "Galeno tinha ensinado que o sangue era feito no fígado.",
            "Harvey publicou as suas descobertas em 1628.",
            "Os dois homens mudaram aquilo que se sabia, mas não aquilo que os médicos faziam."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "barashada qaab-dhismeedka jidhka",
            "in meyd la furo si loo barto",
            "sawir faahfaahsan oo buug ku jira",
            "xidid dhiigga qalbiga u geeya",
            "xidid dhiigga qalbiga ka qaada",
            "socodka dhiigga oo jidhka ku wareegaya"
          ],
          "passage": [
            "Andreas Vesalius wuxuu rabay inuu ogaado sida jidhka bini'aadamka dhab ahaantii yahay.",
            "Dissections-kii qarniyadii dhexe waxaa loo qabtay in la xaqiijiyo waxa Galen qoray.",
            "Borofisar ayaa buugga kor u akhriyay halka qof kale uu furayay.",
            "Vesalius naftiisa ayuu furay oo wuxuu baray waxa uu arkay.",
            "1543-kii wuxuu daabacay buug sawirro aad u faahfaahsan leh.",
            "Wuxuu shaqada Galen ka helay in ka badan saddex boqol oo khalad.",
            "Galen wuxuu sameeyay maxaa yeelay xayawaan ayuu furay, ee ma ahayn dad.",
            "William Harvey wuxuu jidhka iyana ku bartay furitaan iyo fiirsasho.",
            "Wuxuu muujiyay in veins-ku dhiigga qalbiga u qaadaan.",
            "Wuxuu muujiyay in qalbigu dhiigga jidhka ku wareejiyo.",
            "Galen wuxuu baray in dhiigga beerka laga sameeyo.",
            "Harvey waxa uu helay wuxuu daabacay 1628-kii.",
            "Labada nin waxay beddeleen waxa la ogaa, laakiin ma beddelin waxa dhakhaatiirtu samaysay."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "вивчення будови тіла (anatomy)",
            "розтин мертвого тіла, щоб його вивчити (dissection)",
            "докладний малюнок у книзі (illustration)",
            "судина, яка несе кров до серця (vein)",
            "судина, яка несе кров від серця (artery)",
            "рух крові по колу навколо тіла (circulation)"
          ],
          "passage": [
            "Андреас Везалій хотів знати, яким насправді є людське тіло.",
            "Середньовічні розтини робили, щоб підтвердити те, що написав Гален.",
            "Професор читав книгу вголос, а хтось інший робив розтин.",
            "Везалій робив розтин сам і навчав із того, що бачив.",
            "У 1543 році він видав книгу з дуже докладними малюнками.",
            "Він знайшов понад триста помилок у праці Галена.",
            "Гален зробив їх тому, що розтинав тварин, а не людей.",
            "Вільям Гарвей (William Harvey) теж вивчав тіло розтином і спостереженням.",
            "Він показав, що вени несуть кров до серця.",
            "Він показав, що серце жене кров по колу навколо тіла.",
            "Гален навчав, що кров утворюється в печінці.",
            "Гарвей видав свої висновки у 1628 році.",
            "Обидва змінили те, що було відомо, але не те, що робили лікарі."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "جسم کی ساخت کا مطالعہ (anatomy)",
            "مطالعے کے لیے کسی مرے ہوئے جسم کو کاٹ کر کھولنا (dissection)",
            "کتاب میں بنی باریک تفصیل والی تصویر (illustration)",
            "وہ خون کی نالی جو خون دل کی طرف لے جاتی ہے (vein)",
            "وہ خون کی نالی جو خون دل سے دور لے جاتی ہے (artery)",
            "خون کا جسم میں گھوم گھوم کر چلنا (circulation)"
          ],
          "passage": [
            "آندریاس ویسالیس (Andreas Vesalius) جاننا چاہتا تھا کہ انسانی جسم اصل میں کیسا ہے۔",
            "قرونِ وسطیٰ میں dissections اس لیے کی جاتی تھیں کہ گیلن کی لکھی ہوئی بات کی تصدیق ہو۔",
            "ایک پروفیسر کتاب اونچی آواز میں پڑھتا، جبکہ کاٹنے کا کام کوئی اور کرتا تھا۔",
            "ویسالیس نے کاٹنے کا کام خود کیا اور جو دیکھا، اسی سے پڑھایا۔",
            "1543 میں اس نے بہت باریک تصویروں والی ایک کتاب شائع کی۔",
            "اسے گیلن کے کام میں تین سو سے زیادہ غلطیاں ملیں۔",
            "گیلن نے یہ غلطیاں اس لیے کی تھیں کہ اس نے جانوروں کی dissection کی تھی، انسانوں کی نہیں۔",
            "ولیم ہاروی (William Harvey) نے بھی جسم کا مطالعہ dissection اور observation سے کیا۔",
            "اس نے دکھایا کہ veins خون دل کی طرف لے جاتی ہیں۔",
            "اس نے دکھایا کہ دل خون کو جسم میں گھما گھما کر پمپ کرتا ہے۔",
            "گیلن نے پڑھایا تھا کہ خون جگر میں بنتا ہے۔",
            "ہاروی نے اپنے نتائج 1628 میں شائع کیے۔",
            "دونوں نے معلومات بدل دیں، مگر ڈاکٹروں کا عمل نہ بدلا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Andreas Vesalius and the body itself",
          paragraphs: [
            "Anatomy is the study of the structure of the body, and in 1500 European anatomy was Galen's anatomy. A medieval dissection was a demonstration rather than an investigation: the professor read Galen's description aloud while an assistant cut, and the point was to show the students what the book said. If the body did not match the book, the body was assumed to be unusual.",
            "Andreas Vesalius, who taught at Padua in Italy, did it the other way round. He dissected the bodies himself, in front of his students, and taught from what was in front of him. He published a set of anatomical tables in 1538, and then in 1543 the book he is remembered for, ‘On the Fabric of the Human Body’. Its illustrations were drawn by skilled artists and were far more detailed than anything before; he checked the printing himself so that nothing was lost.",
            "Looking carefully had a consequence. Vesalius found that Galen had been wrong about the body in more than three hundred places. The human jawbone is one bone, not two. The breastbone has three parts, not seven. There are no pores in the wall between the two sides of the heart, although Galen had taught that blood passed through them. Galen had not been careless: dissecting humans was not permitted in Rome, so he had worked on animals such as pigs and apes and assumed people were built the same way."
          ],
          tip: "Vesalius did not reject Galen; he corrected him, and said so politely. That is partly why traditional physicians kept listening to him."
        },
        {
          heading: "Which factors made Vesalius possible?",
          paragraphs: [
            "Your lesson asks you to sort the reasons into factors, and it is worth doing properly, because the enquiry question depends on it. Attitudes and beliefs: humanism encouraged him to question what he read rather than accept it, and the Reformation had loosened the Church's grip on what a physician might attempt, which lowered the danger of punishment. Improved communications: the printing press meant his work could be printed in quantity and sold from one end of Europe to the other, and his illustrations were copied into other textbooks.",
            "Science and technology: better knives and lenses helped, and so did the skill of the artists working in Italy at the time, who could draw what he showed them. Government: a local judge in Padua allowed him to dissect the bodies of executed criminals, and the Holy Roman Emperor, Charles V, admired his work and made him his personal doctor, which raised his reputation across Europe.",
            "And then there is Vesalius himself. He took risks that other scholars would not: as a student he once took a body down from a gallows so that he could dissect it. He was willing to cause controversy by doing his own cutting, which some physicians thought beneath them. He had money behind him, from his family and his university. Take any one factor away and he might still have managed; take several away and he could not."
          ]
        },
        {
          heading: "William Harvey and the circulation of the blood",
          paragraphs: [
            "William Harvey was a physician who studied at Cambridge and at Padua, the same university where Vesalius had taught. In 1615 he became a lecturer in anatomy at the College of Physicians in London, and in 1618 he was appointed royal doctor to King James I of England and Scotland. His two favourite methods were dissection and observation, and he told his students to trust their own eyes before Galen's pages.",
            "His first finding was about direction. Veins carry blood towards the heart; arteries carry it away. Vesalius had suggested that blood flowed to the heart rather than being made in the liver, as Galen had taught, and Harvey's dissections and experiments showed that Vesalius was right. A mechanical water pump gave him a model for what the heart might be doing, which is a good example of technology changing the way someone thinks.",
            "His second finding was bigger. Harvey showed that the blood circulates: the same blood goes round and round the body, pumped by the heart out through the arteries and back through the veins. Galen had taught that blood was made in the liver, used up by the body and partly passed through pores in the wall of the heart. Harvey could see that arteries and veins must be joined somewhere, but the connections were far too small for him to find, so he could not complete the proof. He published his work in 1628."
          ],
          worked: {
            q: "A pupil writes: ‘Harvey proved Galen wrong, so physicians stopped bloodletting.’ Correct the second half of this sentence and explain the correction.",
            steps: [
              "Check the first half. Harvey did show that Galen's account of the blood was wrong, so that part can stay.",
              "Test the second half against the evidence. Bloodletting rested on the Four Humours, and most of the population still believed in them; nothing in Harvey's work told a physician what to do instead.",
              "Harvey's work also suggested that taking blood out was more serious than anyone had thought, since the same blood went round and round, which makes the continuation of bloodletting even more striking.",
              "Rewrite the second half as the knowledge-and-practice split that runs through this unit."
            ],
            answer: "Harvey proved Galen wrong about the blood, but physicians went on bloodletting for nearly two hundred years, because his work changed what was known about the body without giving anyone a new treatment to use instead."
          }
        },
        {
          heading: "Did they change medicine?",
          paragraphs: [
            "Measure them against knowledge first, and both men are giants. After 1543 anatomy was something you checked against a body rather than a book, and medical training changed with it: students were taught from accurate illustrations and, slowly, from dissection. After 1628 the heart was a pump and the blood went round, which is the foundation of everything later: blood transfusion, surgery, the understanding of the heart.",
            "Measure them against practice at the time, and both look small. No new treatment followed from either man's work. Bloodletting carried on. Many physicians were slow to accept findings that contradicted a thousand years of teaching, and some attacked Vesalius for it. Harvey could not fully prove his theory because he could not see the tiny connections between arteries and veins, which gave his critics a gap to point at.",
            "That gives you the shape of your final answer to the enquiry. Individuals drove the change in medical knowledge in this period, and no other factor explains Vesalius's anatomy or Harvey's circulation. But individuals could not change practice on their own, and the factors that would have let them, better instruments and a new theory of disease, had not arrived yet."
          ],
          tip: "Learn one date each: 1543 for Vesalius's great book, 1628 for Harvey's. A precise date is the cheapest mark in the paper."
        }
      ],
      gate: [
        { kind: "mcq", q: "What was different about the way Vesalius carried out dissections?", options: ["He dissected the bodies himself and taught from what he saw", "He was the first person ever to dissect a human body", "He refused to use bodies and worked only from drawings", "He dissected only animals, as Galen had done"], answer: 0, why: "A medieval dissection was a demonstration of Galen's text. Vesalius cut himself, in front of his students, and taught from the body.",
          feedback: [
            "",
            "Human dissection had been carried out before him, including the public demonstrations held in medieval universities. What was new was that he did the cutting himself and taught from the body rather than the book.",
            "He worked from bodies; the drawings in his books were made from what he exposed in them. The difference was that he dissected and taught at the same time.",
            "Working on animals was Galen's method, and it is why Galen made mistakes about people. Vesalius dissected human bodies himself."
          ] },
        { kind: "gap", q: "Harvey showed that blood ___ around the body, pumped by the heart out through the arteries and back through the veins.", answer: "circulated", options: ["circulated", "evaporated", "rested"], why: "Circulation means moving round and round. The same blood returns to the heart instead of being made afresh in the liver.",
          feedback: {
            "evaporated": "Evaporating means turning into a gas, which is not what Harvey showed and not what blood does inside the body. He showed that it circulated, going round and round.",
            "rested": "Resting is the opposite of what Harvey described: his whole point was constant movement. The word is circulated."
          } },
        { kind: "mcq", q: "Why did Harvey's discoveries change medical practice so little at the time?", options: ["They explained how the body worked but offered no new treatment, and many physicians were slow to accept them", "They were never published, so almost nobody read them", "The Royal Society refused to let him speak about them", "He was arrested by the Church for disagreeing with Galen"], answer: 0, why: "Knowledge moved and practice did not. Bloodletting continued, no new treatment followed, and the missing connections between arteries and veins gave his critics a gap to attack.",
          feedback: [
            "",
            "He published his work in 1628 and it was widely read and argued over. The reason it changed practice so little is that it gave physicians no new treatment.",
            "The Royal Society was not founded until 1660, after Harvey's book, and its purpose was to share work rather than suppress it. His findings changed little because they offered no new treatment.",
            "Harvey was royal doctor to James I, not a man in trouble with the Church. His work changed little in practice because it told physicians how the body worked without telling them what to do differently."
          ] }
      ],
      modules: [
        {
          title: "Factors behind the discoveries",
          task: {
            kind: "match",
            q: "Match each factor to the way it helped Vesalius or Harvey make their discoveries.",
            pairs: [
              ["Attitudes and beliefs", "Humanism encouraged both men to test what they read instead of accepting it"],
              ["Improved communications", "The printing press carried Vesalius's detailed illustrations across Europe"],
              ["Science and technology", "Better instruments, skilled artists and a mechanical water pump that gave Harvey a model for the heart"],
              ["Government", "A judge in Padua allowed dissections, and two rulers employed the men as their own doctors"],
              ["Individuals", "Vesalius's work on the heart gave Harvey the question he spent his career answering"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read each description and ask who or what is doing the helping.",
                "Ways of thinking, such as humanism, belong to attitudes and beliefs.",
                "Machines, instruments and drawing skill belong to science and technology; printing belongs to communications.",
                "Judges and kings are government. One person helping another is individuals."
              ],
              example: {
                q: "Practice: after the Reformation the Church had less say over what a physician might attempt, so Vesalius ran less risk of punishment. Which factor is this closest to?",
                steps: ["The Reformation was a religious change that altered what people accepted.", "It is about authority and belief rather than tools or rulers.", "So it belongs to attitudes and beliefs, with the Church behind it."],
                answer: "Attitudes and beliefs (the Reformation weakening the Church's authority)."
              }
            },
            core: { hint: "Five factors, five descriptions. The printing press is communications, not technology, in your department's list." },
            stretch: { extend: "Rank the five factors from most to least important for Vesalius, then do the same for Harvey, and explain one difference between your two rankings." }
          },
          why: "Humanism gave both men the habit of testing; printing spread Vesalius's illustrations; instruments, artists and the water pump gave them tools and models; a judge and two rulers gave them bodies and status; and Vesalius gave Harvey his question.",
          explain: "Say, in one sentence, which factor you think Vesalius could least have done without, and why."
        },
        {
          title: "Name the factor",
          task: {
            kind: "mcq",
            q: "Vesalius stood over the printing of his book himself so that every copy carried his illustrations exactly as he had drawn them. Which factor does this belong to?",
            options: [
              "Improved communications",
              "Government",
              "War",
              "The Church"
            ],
            answer: 0,
            why: "Printing is the department's improved communications factor: it is about how accurately and how widely knowledge could travel.",
            feedback: [
              "",
              "No ruler, judge or law appears here. The point is that his work could be printed identically and sent out widely, which is improved communications.",
              "Nothing in this example involves fighting, armies or injuries, which is what the war factor covers. Printing belongs to improved communications.",
              "The Church is not involved in the printing of this book. Printing, and the accuracy and reach it gave, is improved communications."
            ]
          },
          levels: {
            support: {
              steps: [
                "Underline the thing that is actually doing the work in the sentence: the printing.",
                "Ask which factor printing belongs to in your department's list of six.",
                "Printing is about ideas travelling, so it is improved communications, not science and technology.",
                "Check the other options for anything that appears in the sentence: no ruler, no army, no Church."
              ],
              example: {
                q: "Practice: ‘Charles V admired Vesalius's work and made him his personal doctor, which raised his reputation.’ Which factor is this?",
                steps: ["The person acting is an emperor.", "Rulers and their decisions belong to one factor.", "That factor is government."],
                answer: "Government."
              }
            },
            core: { hint: "Six factors: attitudes and beliefs, individuals, war, science and technology, government, improved communications. Which one is printing?" },
            stretch: { extend: "Write a sentence about Harvey that belongs to two factors at once, and explain how you would use it in an essay." }
          },
          why: "Printing identical, accurate illustrations and selling them across Europe is improved communications. Government covers rulers and judges; war covers fighting; the Church covers religious authority.",
          explain: "Say, in one sentence, how you decide which factor a piece of evidence belongs to."
        },
        {
          title: "Explain why they succeeded when they did (12 marks)",
          task: {
            kind: "written",
            q: "Explain why individuals such as Vesalius and Harvey were able to change medical knowledge in the Renaissance period but not earlier. (12 marks)",
            marks: 12,
            criteria: [
              "Two paragraphs, each on a different named factor, each opening in the language of the question",
              "Each paragraph gives specific, detailed evidence: a name, a date, a book or a practice",
              "Each paragraph explains what the evidence meant for medical knowledge, using ‘this meant that’",
              "Each paragraph links back to the question and the period c1500–c1700",
              "Paragraph two begins ‘However, … was also important because…’ and the two factors are connected",
              "Ideas about disease are reported as beliefs, never as facts"
            ],
            model: "Individuals such as Vesalius and Harvey were able to change medical knowledge in the Renaissance because attitudes to knowledge had changed first. Humanism taught that a person could find things out by observing and measuring, and the Reformation had weakened the Church's control over what scholars were allowed to say; Vesalius therefore dissected bodies himself at Padua and published his corrections to Galen in 1543, and Harvey told his students at the College of Physicians to trust what they could see rather than what Galen's books claimed. This meant that a physician who contradicted a thousand years of teaching could expect an argument rather than a punishment, which is exactly what a medieval scholar could not expect. Without that change in attitudes, neither man could have published what he found. However, improved communications was also important, because an unprinted discovery stays with the person who makes it. The printing press, built in Europe in about 1440, let Vesalius sell his detailed illustrations across Europe and have them copied into other textbooks, and the Royal Society, created in 1660, gave scientists somewhere to repeat and argue over each other's findings. This meant that a correction made in Italy could be read, checked and built on in England, so knowledge accumulated instead of dying with its author. The two factors work together: new attitudes made men willing to look for themselves, and improved communications made what they saw worth publishing."
          },
          contexts: [
            { label: "Attitudes and communications", q: "Use attitudes and beliefs as your first factor and improved communications as your second. Explain why individuals such as Vesalius and Harvey were able to change medical knowledge in the Renaissance period but not earlier. (12 marks)", why: "Humanism made the men willing to look, and printing made what they saw travel; the two factors connect naturally in the ‘However’ paragraph." },
            { label: "Government and technology", q: "Use government as your first factor and science and technology as your second. Explain why individuals such as Vesalius and Harvey were able to change medical knowledge in the Renaissance period but not earlier. (12 marks)", why: "A judge in Padua and two royal appointments gave the men bodies and status, while better instruments, skilled artists and the water pump gave them the means." },
            { label: "Individuals and the Church", q: "Use the individuals themselves as your first factor and the weakening of the Church as your second. Explain why individuals such as Vesalius and Harvey were able to change medical knowledge in the Renaissance period but not earlier. (12 marks)", why: "Their own risk-taking only paid off because the Church's authority had been weakened by the Reformation, so the two factors have to be explained together." }
          ],
          levels: {
            support: {
              steps: [
                "Choose two factors from the six and write them at the top of your page.",
                "Paragraph one: Point (name the factor), Evidence (a date, a name or a book), Explanation (‘this meant that’), Link (back to c1500–c1700).",
                "Paragraph two: start ‘However, … was also important because…’ and repeat the four steps with your second factor.",
                "Last sentence: say how the two factors worked together. Check that every idea about disease is written as a belief."
              ],
              example: {
                q: "Practice: write a single paragraph on science and technology for this question.",
                steps: [
                  "Point: individuals could change knowledge because the tools to look closely had improved.",
                  "Evidence: better knives and lenses for dissection, skilled artists in Italy to draw what Vesalius exposed, Hooke's much better microscope, and the mechanical water pump that gave Harvey a model for the heart.",
                  "Explanation: this meant that a claim about the body could be tested and then shown to other people, instead of resting on one man's word.",
                  "Link: so by 1628 the structure of the body and the movement of the blood could be described accurately, which was impossible in 1250."
                ],
                answer: "Individuals were able to change medical knowledge partly because the available technology had improved. Better knives and lenses made careful dissection possible, skilled artists in Italy could draw exactly what Vesalius exposed, and a mechanical water pump gave Harvey a working model of what the heart might do. This meant that a claim about the body could be tested and then shown to others rather than resting on one man's authority. So by 1628 the movement of the blood could be described accurately, which would have been impossible in 1250."
              }
            },
            core: { hint: "Two factors, two PEEL paragraphs, one ‘However’, and a final sentence that links them. Your best evidence has a date: 1543, 1628, 1440, 1660." },
            stretch: { extend: "Add a third short paragraph arguing that the individuals themselves were the most important factor, and use the fact that nobody else made these discoveries as your evidence." }
          },
          why: "Twelve marks reward two developed paragraphs on two different factors, precise evidence, explanation with ‘this meant that’, links to the period, and a ‘However’ that connects the factors. The strongest answers explain why the same individuals would have failed in 1350.",
          explain: "Say, in one sentence, how your two chosen factors depended on each other."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 6 ─────────────────────────────
    {
      key: "great-plague", n: 6,
      title: "Case study: the Great Plague, 1665",
      lead: "This chapter is the test of everything else: a plague in 1665 met with almost the same ideas as the plague of 1348, and the one prevention that worked.",
      covers: [8],
      pretext: {
        words: [
          { word: "Great Plague", means: "the major outbreak of plague in England in 1665", sentence: "The Great Plague struck London hardest in the summer of 1665." },
          { word: "outbreak", means: "a sudden rise in the number of people with a disease", sentence: "There were smaller outbreaks of plague in 1603 and 1625." },
          { word: "quarantine", means: "keeping people who may carry a disease away from others for a set time", sentence: "The villagers of Eyam put themselves into quarantine." },
          { word: "quack doctor", means: "someone with no training who sold remedies that did not work", sentence: "Quack doctors sold expensive remedies during the plague." },
          { word: "case study", means: "one example studied in detail to test a bigger question", sentence: "The Great Plague is the case study for this unit." }
        ],
        passage: [
          "The plague did not disappear after the Black Death of 1348.",
          "There were smaller local outbreaks for the next three hundred years.",
          "London was hit badly in 1603 and again in 1625.",
          "Then, between June and November 1665, came a major outbreak.",
          "At its worst, 7,000 people a week were dying.",
          "Over 100,000 people died in London, about a fifth of the city.",
          "Historians today say the disease was carried by fleas on rats.",
          "Nobody in 1665 knew that.",
          "People still blamed bad air, the stars or God.",
          "Treatments had barely changed since 1348.",
          "Prevention had changed, because the government acted.",
          "Public meetings were banned and the theatres were closed.",
          "In the village of Eyam, the people shut themselves off to protect their neighbours."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الموجة الكبيرة من الطاعون في إنجلترا في 1665 (Great Plague)",
            "ارتفاع مفاجئ في عدد المصابين بمرض (outbreak)",
            "إبعاد الناس الذين قد يحملون مرضًا عن غيرهم مدّةً محدّدة (quarantine)",
            "شخص لا تدريب له كان يبيع علاجات لا تنفع (quack doctor)",
            "مثال واحد يُدرس بالتفصيل لاختبار سؤال أكبر (case study)"
          ],
          "passage": [
            "لم يختفِ الطاعون بعد الموت الأسود في 1348.",
            "فكانت هناك موجات محلّية أصغر في ثلاث مئة سنة بعده.",
            "وأُصيبت لندن إصابةً شديدة في 1603 ثم في 1625.",
            "ثم جاءت بين يونيو ونوفمبر 1665 موجة كبيرة.",
            "وفي أسوأ أحوالها كان يموت 7,000 شخص في الأسبوع.",
            "ومات في لندن أكثر من 100,000 شخص، أي نحو خُمس المدينة.",
            "ويقول المؤرّخون اليوم إنّ المرض كان ينقله البراغيث على الجرذان.",
            "ولم يكن أحد في 1665 يعرف ذلك.",
            "وكان الناس لا يزالون يلومون الهواء الفاسد أو النجوم أو الله.",
            "والعلاجات لم تكن قد تغيّرت إلّا قليلًا جدًّا منذ 1348.",
            "أمّا الوقاية فقد تغيّرت، لأنّ الحكومة تحرّكت.",
            "فمُنعت الاجتماعات العامّة وأُغلقت المسارح.",
            "وفي قرية آيام (Eyam) حجز أهلها أنفسهم ليحموا جيرانهم."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "wielka epidemia dżumy w Anglii w 1665 roku (Great Plague)",
            "nagły wzrost liczby ludzi z jakąś chorobą (outbreak)",
            "trzymanie ludzi, którzy mogą przenosić chorobę, z dala od innych przez określony czas (quarantine)",
            "ktoś bez wykształcenia, kto sprzedawał lekarstwa, które nie działały (quack doctor)",
            "jeden przykład badany szczegółowo, żeby sprawdzić większe pytanie (case study)"
          ],
          "passage": [
            "Dżuma nie zniknęła po czarnej śmierci z 1348 roku.",
            "Przez następne trzysta lat zdarzały się mniejsze miejscowe epidemie.",
            "Londyn został mocno uderzony w 1603 roku i znowu w 1625 roku.",
            "Potem, między czerwcem i listopadem 1665 roku, przyszła wielka epidemia.",
            "W najgorszym momencie umierało 7,000 ludzi na tydzień.",
            "W Londynie umarło ponad 100,000 ludzi, około jednej piątej mieszkańców miasta.",
            "Historycy dzisiaj mówią, że chorobę przenosiły pchły na szczurach.",
            "Nikt w 1665 roku o tym nie wiedział.",
            "Ludzie nadal winili złe powietrze, gwiazdy albo Boga.",
            "Leczenie prawie nie zmieniło się od 1348 roku.",
            "Zapobieganie się zmieniło, bo rząd podjął działania.",
            "Zakazano publicznych zgromadzeń i zamknięto teatry.",
            "W wiosce Eyam ludzie odcięli się od świata, żeby ochronić swoich sąsiadów."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o grande surto de peste em Inglaterra em 1665 (Great Plague, Grande Peste)",
            "uma subida repentina no número de pessoas com uma doença (outbreak, surto)",
            "manter longe das outras, durante um tempo determinado, as pessoas que podem transportar uma doença (quarantine, quarentena)",
            "alguém sem formação que vendia remédios que não funcionavam (quack doctor, charlatão)",
            "um exemplo estudado em detalhe para testar uma pergunta mais ampla (case study, estudo de caso)"
          ],
          "passage": [
            "A peste não desapareceu depois da Peste Negra de 1348.",
            "Houve surtos locais mais pequenos durante os trezentos anos seguintes.",
            "Londres foi muito atingida em 1603 e outra vez em 1625.",
            "Depois, entre junho e novembro de 1665, veio um grande surto.",
            "No pior momento, morriam 7 000 pessoas por semana.",
            "Morreram mais de 100 000 pessoas em Londres, cerca de um quinto da cidade.",
            "Os historiadores de hoje dizem que a doença era transportada por pulgas nos ratos.",
            "Ninguém sabia isso em 1665.",
            "As pessoas continuavam a culpar o ar mau, as estrelas ou Deus.",
            "Os tratamentos quase não tinham mudado desde 1348.",
            "A prevenção tinha mudado, porque o governo agiu.",
            "As reuniões públicas foram proibidas e os teatros foram fechados.",
            "Na aldeia de Eyam, as pessoas fecharam-se do mundo para proteger os seus vizinhos."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "daacuunkii weynaa ee England ka dhacay 1665-kii",
            "kor u kac degdeg ah oo tirada dadka cudurka qaba",
            "in dadka cudur sidi kara laga fogeeyo dadka kale muddo go'an",
            "qof aan tababbar lahayn oo iibiyay daawooyin aan shaqeyn",
            "hal tusaale oo si qoto dheer loo barto si su'aal ka weyn loo tijaabiyo"
          ],
          "passage": [
            "Daacuunku ma baabba'in kadib Black Death-kii 1348-kii.",
            "Waxaa jiray kor u kacyo maxalli ah oo yaryar saddex boqol oo sano ee xigtay.",
            "London si xun ayaa loo dhuftay 1603-dii iyo mar kale 1625-kii.",
            "Kadibna, intii u dhexeysay Juun iyo Noofembar 1665-kii, waxaa yimid kor u kac weyn.",
            "Markii ugu xumaa, 7,000 qof toddobaadkii ayaa dhimanayay.",
            "In ka badan 100,000 oo qof ayaa London ku dhintay, oo ah qiyaastii shan-meelood meel magaalada.",
            "Taariikhyahannada maanta waxay yiraahdaan cudurka waxaa siday injirta jiirarka saaran.",
            "Cidna 1665-kii taas ma ogeyn.",
            "Dadku weli waxay ku eedeeyeen hawada xun, xiddigaha ama Ilaah.",
            "Daaweyntu si yar ayay isbeddeshay 1348-kii.",
            "Ka-hortaggu wuu isbeddelay, maxaa yeelay dowladdu wax bay qabatay.",
            "Shirarka dadweynaha waa la mamnuucay, tiyaatarradana waa la xidhay.",
            "Tuulada Eyam, dadku waxay naftooda gooni iska dhigeen si ay deriskooda u ilaaliyaan."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "великий спалах чуми в Англії у 1665 році (Great Plague)",
            "раптове зростання кількості людей із хворобою (outbreak)",
            "тримання людей, які можуть переносити хворобу, окремо від інших певний час (quarantine)",
            "той, хто не мав навчання і продавав засоби, які не діяли (quack doctor)",
            "один приклад, вивчений докладно, щоб перевірити більше запитання (case study)"
          ],
          "passage": [
            "Чума не зникла після Чорної смерті 1348 року.",
            "Наступні триста років були менші місцеві спалахи.",
            "Лондон тяжко постраждав у 1603 році і знову в 1625 році.",
            "Потім, між червнем і листопадом 1665 року, прийшов великий спалах.",
            "У найгірший час помирало 7,000 людей на тиждень.",
            "У Лондоні померло понад 100,000 людей, приблизно п’ята частина міста.",
            "Історики сьогодні кажуть, що хворобу переносили блохи на щурах.",
            "У 1665 році цього ніхто не знав.",
            "Люди все ще звинувачували погане повітря, зорі або Бога.",
            "Лікування майже не змінилися з 1348 року.",
            "Запобігання змінилося, бо уряд почав діяти.",
            "Публічні збори заборонили, а театри закрили.",
            "У селі Ейам (Eyam) люди відрізали себе від світу, щоб захистити своїх сусідів."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "1665 میں انگلینڈ میں طاعون کا بڑا پھیلاؤ (Great Plague)",
            "کسی بیماری کے مریضوں کی تعداد کا اچانک بڑھ جانا (outbreak)",
            "ایسے لوگوں کو، جو بیماری پھیلا سکتے ہوں، مقررہ مدت تک دوسروں سے دور رکھنا (quarantine)",
            "وہ شخص جس کی کوئی تربیت نہ ہو اور جو ایسے علاج بیچے جو کام نہ کرتے ہوں (quack doctor)",
            "ایک مثال جس کا تفصیلی مطالعہ کسی بڑے سوال کو جانچنے کے لیے کیا جائے (case study)"
          ],
          "passage": [
            "1348 کے Black Death کے بعد طاعون غائب نہ ہوا۔",
            "اگلے تین سو سال تک چھوٹے مقامی پھیلاؤ ہوتے رہے۔",
            "لندن 1603 میں اور پھر 1625 میں بری طرح متاثر ہوا۔",
            "پھر، جون اور نومبر 1665 کے درمیان، ایک بڑا پھیلاؤ آیا۔",
            "اپنے بدترین دنوں میں ہفتے کے 7,000 لوگ فوت ہو رہے تھے۔",
            "لندن میں 100,000 سے زیادہ لوگ فوت ہوئے، یعنی شہر کا تقریباً پانچواں حصہ۔",
            "آج مؤرخ کہتے ہیں کہ یہ بیماری چوہوں پر بیٹھے پسوؤں سے پھیلی۔",
            "1665 میں یہ کسی کو معلوم نہ تھا۔",
            "لوگ اب بھی بری ہوا، ستاروں یا خدا کو ذمہ دار ٹھہراتے تھے۔",
            "1348 سے علاج میں بہت کم تبدیلی آئی تھی۔",
            "بچاؤ میں تبدیلی آئی تھی، کیونکہ حکومت نے قدم اٹھائے۔",
            "عوامی اجتماعوں پر پابندی لگا دی گئی اور تھیٹر بند کر دیے گئے۔",
            "اییم (Eyam) کے گاؤں میں لوگوں نے اپنے پڑوسیوں کو بچانے کے لیے خود کو الگ کر لیا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "The plague never really left",
          paragraphs: [
            "The Black Death of 1348 is in your last unit; this is its sequel. The disease did not go away afterwards. For the next three hundred years there were local and regional outbreaks, year after year, without ever again becoming a national disaster on that scale. London was hit hard in 1603 and again in 1625. Then, between June and November 1665, came the second great outbreak in English history, known as the Great Plague.",
            "The figures your lesson gives are these. At the peak of the outbreak, 7,000 people a week were dying. Across the city, over 100,000 people died in all, which was about a fifth of London's population. For comparison, conservative estimates for 1348 and 1349 put the deaths at about one third of the population of the whole country.",
            "Historians today say that this was bubonic plague, caused by bacteria that travelled in fleas living on black rats, and the rats came in on ships. Nobody in 1665 knew any of that, and it is worth saying out loud: the people you are about to study were not stupid. They were working with the explanations they had."
          ],
          tip: "Give the 1665 figures as the city of London's, not the country's. Mixing up a London figure with a national one is an easy mark to lose."
        },
        {
          heading: "Causes and treatments: how little had changed",
          paragraphs: [
            "Your lesson's summary is blunt: very little had changed since 1348. Belief in the Theory of the Four Humours was weaker than before, but no other explanation had taken its place, which left people reaching for the same two groups of answers as in 1348. Some were supernatural: many believed that God had sent the plague, or that the position of the stars and planets was to blame. Others were what your lesson calls rational: most people believed in miasma, that bad air carried the disease.",
            "Because nobody knew what caused the plague, nobody could treat it. Patients were wrapped up and put by a fire to sweat the disease out. Transference was tried, in the belief that the illness could be drawn out of the body and into an object or an animal. Quack doctors, who had no training at all, sold expensive remedies to desperate people and promised cures they could not give.",
            "That is why an exam question about treatment in 1665 has such a short answer. Treatment follows explanation. While the explanation stayed the same, so did the treatments, and none of them touched the disease."
          ]
        },
        {
          heading: "Prevention: the government acts",
          paragraphs: [
            "Prevention is where 1665 differs, and the factor is government. The authorities took much stricter action than in 1348. Public meetings were banned and the theatres were closed, to stop crowds gathering. Streets were cleaned, because of the belief in miasma. Houses where someone had fallen ill were shut up with the family inside, and watchmen were posted to keep them there, for a period your booklet gives.",
            "Notice what is happening. The explanations behind these measures were mostly wrong: cleaning the air did nothing to stop fleas. But two of the measures, closing crowded places and keeping infected households apart from everyone else, do reduce the spread of a disease passed on by close contact, whatever the reason behind them. People stumbled on something that worked for a reason they did not know.",
            "That is the most interesting thing in this chapter, and it is a point worth making in an essay. A measure can be effective and its explanation can still be mistaken. Historians call this an unintended consequence, and it is not the same as progress, because nobody could explain it or build on it."
          ],
          worked: {
            q: "Plan an answer to: ‘Explain one way in which ideas about the cause of disease were similar in 1348 and in 1665.’",
            steps: [
              "Choose the idea with evidence in both years. Miasma is the strongest: it was widely believed in both.",
              "Give the 1348 evidence from your last unit: people blamed bad air rising from rotting rubbish, and town councils were ordered to clear the streets.",
              "Give the 1665 evidence: miasma was still the most popular explanation, and the authorities had the streets cleaned for that reason.",
              "Explain what the similarity meant: prevention in both years aimed at the air, so neither outbreak was met with anything that addressed the real cause."
            ],
            answer: "Point: in both years most people believed bad air, or miasma, caused the plague. Evidence: street-clearing orders in the fourteenth century; streets cleaned again and houses shut up in 1665. Explanation: prevention aimed at the air both times. Link: the explanation of the plague had barely moved in over three hundred years."
          }
        },
        {
          heading: "Eyam, and comparing the two plagues",
          paragraphs: [
            "Eyam is a village in Derbyshire, and in 1665 the plague arrived there in a bale of cloth sent from London, with infected fleas in it. As people began to die, the villagers agreed to do something remarkable: they shut themselves off from the outside world so that the disease would not reach their neighbours. Nearby towns carried food and supplies as far as the village boundary and left them there, and the villagers paid by putting coins in vinegar, in the belief that the vinegar would stop the money carrying the disease. Over fourteen months at least 273 of the village's roughly 350 people died. The plague did not spread to the surrounding towns and villages.",
            "Eyam is the one place in this unit where a prevention clearly worked, and it is also the clearest example of people acting for others at great cost to themselves. Their reason for using vinegar was a mistaken one; their decision to isolate was not.",
            "So, finally, compare 1348 with 1665. The continuity is in ideas: miasma, religion and astrology in both; the Four Humours weaker but unreplaced; treatments useless in both. The change is in response: a government that acted, towns that isolated households, pest houses, and at Eyam a community that quarantined itself. Set that beside Vesalius, Harvey and Sydenham and you have your answer to the enquiry. Individuals changed what was known about the body; nobody yet had changed what was believed about disease, and that is why 1665 looked so much like 1348."
          ],
          tip: "When you compare two case studies, organise by theme (causes, treatments, preventions), not by date. It is the only way the similarities show up clearly."
        }
      ],
      gate: [
        { kind: "numeric", q: "In which year was the Great Plague in England?", answer: 1665, tolerance: 0, units: "",
          check: "1665",
          misconceptions: [
            { answer: 1348, says: "1348 is the year the Black Death reached England, which you studied last unit. The Great Plague came over three hundred years later, in 1665.", check: "1348" },
            { answer: 1625, says: "1625 was one of the earlier outbreaks that hit London badly, but not the Great Plague. That was in 1665.", check: "1625" },
            { answer: 1660, says: "1660 is the year the Royal Society was created. The Great Plague struck five years later, in 1665.", check: "1665-5" }
          ],
          why: "The Great Plague ran from June to November 1665. Earlier outbreaks had hit London in 1603 and 1625." },
        { kind: "mcq", q: "What did most people in 1665 believe had caused the plague?", options: ["Bad air, or that God or the position of the stars had sent it", "Bacteria carried by fleas living on rats", "Dirty drinking water in the city", "The closing of the theatres and public meeting places"], answer: 0, why: "Explanations in 1665 were supernatural (God, the stars) or what the lesson calls rational (miasma, or bad air). The Four Humours were weaker but nothing had replaced them.",
          feedback: [
            "",
            "Fleas, rats and bacteria are the explanation historians give today; nobody in 1665 knew it. At the time most people blamed bad air, God or the stars.",
            "Dirty water was shown to spread disease in the nineteenth century, two hundred years later. In 1665 people blamed bad air, God or the position of the stars.",
            "Closing the theatres was one of the government's preventions, not a cause anyone blamed. People believed the plague came from bad air, from God, or from the stars."
          ] },
        { kind: "gap", q: "To slow the plague in 1665 the government banned public ___ and closed the theatres.", answer: "meetings", options: ["meetings", "markets", "schools"], why: "Banning public meetings and closing the theatres were meant to stop crowds gathering. Infected houses were also shut up.",
          feedback: {
            "markets": "Markets sold the food people needed and are not what your lesson names. The government banned public meetings and closed the theatres.",
            "schools": "Schools are not named in your lesson's list of measures. The two it gives are banning public meetings and closing the theatres."
          } }
      ],
      modules: [
        {
          title: "How long between the two plagues?",
          task: {
            kind: "numeric",
            q: "The Black Death reached England in 1348. The Great Plague struck in 1665. How many years lie between them?",
            answer: 317, tolerance: 0, units: "years",
            check: "1665-1348",
            misconceptions: [
              { answer: 3013, says: "You added the two years together. A gap between dates is the later date minus the earlier one: 1665 − 1348.", check: "1665+1348" },
              { answer: 327, says: "You gained ten in the tens column. Check your working: 1665 − 1348 = 317, not 327.", check: "1665-1348+10" },
              { answer: 307, says: "You lost ten in the tens column. 1665 − 1348 = 317. Try counting on from 1348 in hundreds, then tens, then ones.", check: "1665-1348-10" }
            ],
            why: "1665 − 1348 = 317 years. Three centuries apart, and the explanations people reached for were almost the same."
          },
          levels: {
            support: {
              steps: [
                "Write the later date above the earlier one: 1665 above 1348.",
                "Subtract, or count on from 1348.",
                "Counting on: 1348 to 1648 is 300; 1648 to 1665 is 17.",
                "Add the jumps: 300 + 17 = 317."
              ],
              example: {
                q: "Practice: London was hit by plague in 1603 and again in 1625. How many years apart were those outbreaks?",
                steps: ["Later minus earlier: 1625 − 1603.", "That is 22."],
                answer: "22 years",
                checks: [{ expr: "1625-1603", value: 22, tol: 0 }]
              }
            },
            core: { hint: "Later date minus earlier date. Counting on from 1348 in hundreds first makes it easier." },
            stretch: { extend: "Use your answer to make a point about change and continuity: what does a gap of this length, with so little difference in ideas, tell you about medicine before 1700?" }
          },
          why: "1665 − 1348 = 317. The number is worth remembering because it makes the continuity in ideas about disease so striking.",
          explain: "Say, in one sentence, what the size of this gap tells you about how fast ideas about disease were changing."
        },
        {
          title: "What happened at Eyam",
          task: {
            kind: "order",
            q: "Put the events at Eyam in 1665 in the order they happened.",
            items: [
              "A bale of cloth arrives in the village from London, with infected fleas in it",
              "People in Eyam begin to fall ill and die",
              "The villagers agree to shut themselves off from the outside world",
              "Nearby towns leave food and supplies at the edge of the village",
              "After fourteen months most of the village has died, but the plague has not spread to its neighbours"
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the event that starts everything off: something has to arrive in the village first.",
                "People cannot decide to isolate themselves until they know the plague is there.",
                "The food arrangement is a consequence of the decision, so it comes after it.",
                "The outcome, after fourteen months, must be last."
              ],
              example: {
                q: "Practice: put these three in order: a town council orders the streets to be cleaned; a case of plague is reported in the town; the council hears that plague has reached a nearby city.",
                steps: ["News from elsewhere arrives first.", "Then a case appears in the town itself.", "Then the council acts."],
                answer: "The council hears that plague has reached a nearby city; a case of plague is reported in the town; the council orders the streets to be cleaned."
              }
            },
            core: { hint: "Arrival, illness, decision, supplies, outcome." },
            stretch: { extend: "The villagers left money in vinegar because they believed it would stop the disease travelling with the coins. Explain why a mistaken belief can still sit alongside a decision that worked." }
          },
          why: "The cloth arrived from London, people fell ill, the village chose to isolate itself, neighbouring towns supplied it, and after fourteen months the plague had killed most of Eyam but had not spread.",
          explain: "Say, in one sentence, which step in this sequence was a choice rather than something that simply happened."
        },
        {
          title: "Explain why 1665 looked so like 1348 (12 marks)",
          task: {
            kind: "written",
            q: "Explain why England's response to the Great Plague of 1665 was so similar to its response to the Black Death in 1348. (12 marks)",
            marks: 12,
            criteria: [
              "Two paragraphs, each on a different named factor, each opening in the language of the question",
              "Each paragraph gives specific, detailed evidence from both 1348 and 1665",
              "Each paragraph explains what the evidence meant, using ‘this meant that’",
              "Each paragraph links back to the question and to the three hundred years between the two outbreaks",
              "Paragraph two begins ‘However, … was also important because…’ and the two factors are connected",
              "Ideas about disease are reported as beliefs, never as facts, and the one real change in 1665 is acknowledged"
            ],
            model: "England's response to the Great Plague of 1665 was so similar to its response in 1348 largely because of attitudes and beliefs. In both outbreaks most people believed that bad air, or miasma, carried the disease, and many believed that God had sent it or that the position of the stars was to blame; the Theory of the Four Humours was weaker by 1665 but no new explanation had arrived to replace it. This meant that the measures people reached for were the same ones: clearing and sweeping the streets, carrying sweet-smelling things, praying, and treatments such as sweating the disease out or trying to transfer it into an object. Over three hundred years separate the two outbreaks, and the explanations behind the response had barely moved. However, science and technology was also important, because an explanation can only change when there is something to change it with. Better microscopes existed by the 1660s and in 1683 tiny living things were observed through a lens, but nobody connected them with disease, and there was no chemistry and no experiment available to test such a link. This meant that even the scientists of the Royal Society could not give the government a better reason to act, so the advice available in 1665 was the advice of 1348. The two factors reinforced each other: with no new knowledge to offer, there was nothing to shift what people believed, and while beliefs held, nobody was looking for new knowledge. The one real difference lay in government action, which banned public meetings, closed the theatres and shut up infected houses, and at Eyam a village quarantined itself; these measures slowed the disease, although the reasons given for them were mistaken."
          },
          contexts: [
            { label: "Beliefs and technology", q: "Use attitudes and beliefs as your first factor and science and technology as your second. Explain why England's response to the Great Plague of 1665 was so similar to its response to the Black Death in 1348. (12 marks)", why: "Beliefs held because there was no new knowledge to shift them, and nobody sought new knowledge while the beliefs held: the two factors explain each other." },
            { label: "The Church and individuals", q: "Use religion and the Church as your first factor and individuals as your second. Explain why England's response to the Great Plague of 1665 was so similar to its response to the Black Death in 1348. (12 marks)", why: "Religious explanations of the plague survived in both years, and the individuals of this unit changed knowledge of the body rather than beliefs about disease." },
            { label: "Government and communications", q: "Use government as your first factor and improved communications as your second. Explain why England's response to the Great Plague of 1665 was so similar to its response to the Black Death in 1348. (12 marks)", why: "Government is the one factor that produced a real change in 1665, so this pairing makes you weigh a genuine difference against the printing that spread old ideas as readily as new ones." }
          ],
          levels: {
            support: {
              steps: [
                "Choose two factors and write them at the top of the page. Attitudes and beliefs is the strongest first choice.",
                "Paragraph one: Point, then evidence from BOTH 1348 and 1665, then ‘this meant that’, then a link to the three hundred years between them.",
                "Paragraph two: begin ‘However, … was also important because…’ and do the same with your second factor.",
                "Finish with one sentence connecting the two factors, and one sentence admitting the real change: government action, and Eyam."
              ],
              example: {
                q: "Practice: write the Point and Evidence sentences for a paragraph on government, arguing that this factor shows change rather than continuity.",
                steps: [
                  "Point: government is the one factor where the response in 1665 was not like 1348.",
                  "Evidence: public meetings banned, the theatres closed, infected houses shut up and watched, and at Eyam a village that isolated itself with supplies left at its edge."
                ],
                answer: "Government is the one factor where 1665 did not look like 1348. The authorities banned public meetings, closed the theatres and shut up infected houses with watchmen outside, and at Eyam the villagers isolated themselves while nearby towns left supplies at the edge of the village."
              }
            },
            core: { hint: "Two factors, evidence from both years in each paragraph, one ‘However’, and a final sentence that admits what did change." },
            stretch: { extend: "Add a short conclusion that answers the unit's enquiry question: how important were individuals in driving change in medicine in this period? Use 1665 as your evidence." }
          },
          why: "Twelve marks reward two developed paragraphs on different factors, evidence from both outbreaks, explanation, links and a connection between the factors. The best answers also admit the exception: government action in 1665, and Eyam, were real changes.",
          explain: "Say, in one sentence, why the government's actions in 1665 count as a change even though the beliefs behind them did not."
        }
      ]
    }
  ],

  sources: {
    deckDump: "hi_y09_topic_6_renaissance_medicine.txt",
    decksUsed: [
      "L1 Changing Ideas & Attitudes.pptx",
      "L2 Thomas Sydenham.pptx (and 'Sydenham Task.pptx')",
      "L3 Improved Communications.pptx",
      "L4 Treatment & Prevention in Renaissance.pptx (with 'Renaissance Treatment & Prevention.pptx' and 'Table Treatment & Prevention in the Renaissance Period.pptx')",
      "L5 Caring for the Sick.pptx (with 'Care in Renaissance Task.pptx')",
      "L6 Vesalius.pptx (with 'Vesalius & Factors.pptx' and 'Vesalius Worksheet.pptx')",
      "L7 William Harvey.pptx (with 'Harvey Worksheet.pptx')",
      "L8 The Great Plague, 1665.pptx (with 'Plague 1665 Worksheet.pptx')"
    ],
    notes: "Lesson titles, objectives, sequence and enquiry question are the department's. From the decks: the Renaissance timeline and the 1500–1700 period; humanism and the two events that weakened the Church; the three Renaissance causes of disease (Four Humours, miasma, religion) and the two reasons new ideas had little impact; Hooke, Leeuwenhoek 1683 and Sydenham's method; the printing press (c1440, Gutenberg, over twenty million copies by 1500, two effects) and the Royal Society (1660, charter 1662, 'Philosophical Transactions' 1665, English not Latin); the treatment and prevention lists (transference, regimen sanitatis, alchemy, the 1618 'Pharmacopoeia Londinensis' with over 2,140 remedies of which 122 chemical, sarsaparilla, purging, bathing and linen, thermometers, street fines, draining swamps, moving away); the care lesson's five headings (physicians, apothecaries and surgeons, hospitals, pest houses, community care) with the dissolution of the monasteries from 1536 and St Bartholomew's; the Vesalius and Harvey factor cards; and the Great Plague case study (1603 and 1625, June–November 1665, 7,000 a week, over 100,000 dead in London at about a fifth of its population, about one third of the country in 1348–49, Eyam with 273 of about 350 over fourteen months, causes, treatments and government preventions). Facts NOT in the decks, added from standard reference and flagged in NOTES.md §5: Vesalius's publication years (1538, 1543) and the figure of more than three hundred errors in Galen; three named examples of Galen's anatomical mistakes; Harvey's book of 1628; that Leeuwenhoek's tiny living things were bacteria; that movable-type printing existed earlier in China and Korea; the two reasons human dissection stayed rare; the diseases pest houses took. NOTHING is quoted: the dump contains no primary source, and the deck's own model answers and resource text are paraphrased only, with their distinctive phrases banned in verify.py. All questions, worked examples and model paragraphs are original. astra/2: per-option feedback on every mcq and gap, misconceptions on all five numeric items, explain prompts on every module, four context modules (ch2, ch4, ch5, ch6), glossary chapters, Connections and spacing; no widgets and no pretext.l1 (translation is a separate pass)."
  }
};
