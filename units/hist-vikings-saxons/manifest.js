// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 History · Year 7 Topic 1: The Vikings and Anglo-Saxons · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   every date, name and sequence is held in an independent CHRONOLOGY table in verify.py (BC years as negatives); every
//   year in pupil text must be a CHRONOLOGY year or one of the deck's own PRACTICE_YEARS for century/ordering drill; every
//   large number must be in the FACTS set taken from the deck; every "order" task is compared with the canonical sequences
//   held there; every mcq / gap answer is compared with the independent answer key; numeric items carry `check` and
//   `misconceptions` (each with its own `check`); contexts share the task's answer by construction; verify.py then
//   mutates a copy of the manifest eight ways and fails unless every mutation is caught.
//   Quotation guard: the ONLY quoted words are short fragments of the monk's account of the Lindisfarne raid, a medieval
//   primary source, exactly as the department's deck prints them; nothing from the Horrible Histories songs (in copyright)
//   is quoted; the saga retelling and Cat Jarman's profile are paraphrased. Language guard: "enslaved people", never
//   "slaves"; "longship", never "longboat"; the deck's misspellings are banned.
//   astra/2: per-wrong-option `feedback` on every mcq/gap; `misconceptions` on every numeric; `explain` on every module;
//   `glossary[].chapter`; `connections` 4 × 4 ⊂ glossary; `meta.spacing [2,7,30]`; no constellation; no pretext.l1.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["hist-vikings-saxons"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "hist-vikings-saxons",
    subjectKey: "history",
    subject: "History",
    board: "AQA",
    spec: "KS3 → 8145",
    specRef: "KS3 Year 7 Topic 1: Historical Skills and the Vikings — chronology, sources and inference; foundations for GCSE History 8145 (source skills; Britain: Migration, empires and the people)",
    year: 7,
    tier: "KS3",
    title: "The Vikings and Anglo-Saxons",
    sub: "How historians put the past in order and question their sources, who the Vikings were, what they did at Lindisfarne, how Alfred and the Anglo-Saxons dealt with them, and what the saga of Harald Hardrada teaches us.",
    bigQuestion: "Who were the Vikings, and how do historians use chronology and sources to find out?",
    lessonCount: 5,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Introduction, Chronology and Sources", question: "What is chronology, how do we put dates in order, and what can a source tell us?", keywords: ["chronology", "BC", "AD", "century", "primary source", "secondary source", "NOP"] },
    { n: 2, title: "Who were the Vikings?", question: "Where did the Vikings come from, and what did they believe?", keywords: ["Viking", "Scandinavia", "pagan", "the Thing", "Valhalla", "archaeologist", "carnelian bead"] },
    { n: 3, title: "What does Lindisfarne tell us about the Vikings?", question: "What happened at Lindisfarne in 793, and what can we infer from accounts of it?", keywords: ["Lindisfarne", "monastery", "monk", "raid", "infer", "inference"] },
    { n: 4, title: "Viking rule and how the Anglo-Saxons dealt with the Vikings", question: "How did Viking rule change Britain, and how well did Alfred deal with the Vikings?", keywords: ["Danelaw", "Northumbria", "Mercia", "East Anglia", "York", "Alfred", "Guthrum", "Edington", "burh"] },
    { n: 5, title: "The story of Harald Hardrada and assessment preparation", question: "What does the saga of Harald Hardrada teach us about the Vikings, and how accurate are sources about them?", keywords: ["saga", "Novgorod", "Constantinople", "Varangian Guard", "hard-ruler", "Tostig", "accurate"] }
  ],

  glossary: [
    { term: "chronology", means: "The study of time. Chronological order puts events from the oldest to the most recent.", chapter: "chronology" },
    { term: "century", means: "A period of 100 years. To find a year's century, cover the last two digits and add one.", chapter: "chronology" },
    { term: "BC", means: "Before Christ. For BC dates, the bigger the number, the further back in time.", chapter: "chronology" },
    { term: "AD", means: "Anno Domini, the years after the birth of Christ. For AD dates, the bigger the number, the more recent.", chapter: "chronology" },
    { term: "primary source", means: "An original document, object or piece of evidence from the time being studied.", chapter: "sources" },
    { term: "secondary source", means: "Something written or made after the time being studied, such as a textbook or a film.", chapter: "sources" },
    { term: "archaeologist", means: "Someone who studies the objects and remains that people left behind.", chapter: "sources" },
    { term: "inference", means: "A good guess based on what a source shows, which the source does not say directly.", chapter: "lindisfarne" },
    { term: "pagan", means: "Someone who worships many gods, such as Odin and Thor, rather than following Christianity.", chapter: "who-were-the-vikings" },
    { term: "the Thing", means: "The Viking meeting where laws were decided and arguments were settled, a bit like a parliament.", chapter: "who-were-the-vikings" },
    { term: "Valhalla", means: "The Viking idea of heaven, where warriors hoped to live with Odin after death.", chapter: "who-were-the-vikings" },
    { term: "saga", means: "A long story about a hero's life, told and retold by the Vikings.", chapter: "hardrada" },
    { term: "monastery", means: "A place where monks live, pray and work. The one at Lindisfarne made holy books.", chapter: "lindisfarne" },
    { term: "Danelaw", means: "The large part of England where Viking rules and ways of life were followed.", chapter: "danelaw-alfred" },
    { term: "burh", means: "A town with high walls and guard towers, built by Alfred to protect people from Viking attack.", chapter: "danelaw-alfred" },
    { term: "jarl", means: "A Viking lord who ruled an area under Viking control.", chapter: "danelaw-alfred" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 glossary terms used exactly once.
  connections: [
    { group: "Measuring time", terms: ["chronology", "century", "BC", "AD"] },
    { group: "Finding out about the past", terms: ["primary source", "secondary source", "archaeologist", "inference"] },
    { group: "Viking belief and stories", terms: ["pagan", "the Thing", "Valhalla", "saga"] },
    { group: "Vikings in England", terms: ["monastery", "Danelaw", "burh", "jarl"] }
  ],

  chapters: [
    /* ───────────── 1 · chronology ───────────── */
    {
      key: "chronology", n: 1, title: "Chronology: putting the past in order",
      lead: "What chronology means, how BC and AD work, how to find the century a year belongs to, and why the order of events matters.",
      covers: [1],
      pretext: {
        words: [
          { word: "chronology", means: "the study of time, and putting events in order", sentence: "Chronology helps us see which event came first." },
          { word: "chronological order", means: "from the oldest event to the most recent", sentence: "Put the dates in chronological order, oldest first." },
          { word: "BC", means: "Before Christ, the years before the birth of Jesus", sentence: "The Romans made their empire in 27 BC." },
          { word: "AD", means: "Anno Domini, the years after the birth of Jesus", sentence: "The Romans left Britain in AD 410." },
          { word: "decade", means: "a period of ten years", sentence: "The 1990s were a decade." },
          { word: "century", means: "a period of one hundred years", sentence: "The year 1459 is in the fifteenth century." }
        ],
        passage: [
          "History is the study of the past.",
          "To study the past we need to know the order things happened in.",
          "Chronology is the study of time.",
          "Chronological order means from the oldest event to the most recent.",
          "The Romans left Britain in 410.",
          "The Battle of Hastings was in 1066.",
          "The Great Fire of London was in 1666.",
          "Dates before the birth of Jesus are called BC.",
          "Dates after it are called AD.",
          "A decade is ten years and a century is one hundred years.",
          "The year 1459 is in the fifteenth century.",
          "Getting the order right matters because a cause always comes before its effect."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "دراسة الزمن وترتيب الأحداث (chronology)",
            "من أقدم حدث إلى أحدثه (chronological order)",
            "قبل الميلاد، أي السنوات التي قبل ميلاد المسيح (BC)",
            "بعد الميلاد، أي السنوات التي بعد ميلاد المسيح (AD)",
            "مدّة من عشر سنوات (decade)",
            "مدّة من مئة سنة (century)"
          ],
          "passage": [
            "التاريخ هو دراسة الماضي.",
            "ولدراسة الماضي نحتاج أن نعرف ترتيب الأحداث.",
            "والتأريخ الزمني (chronology) هو دراسة الزمن.",
            "والترتيب الزمني يعني من أقدم حدث إلى أحدثه.",
            "وقد خرج الرومان من بريطانيا في 410.",
            "وكانت معركة هيستينغز في 1066.",
            "وكان حريق لندن الكبير في 1666.",
            "والتواريخ التي قبل ميلاد المسيح تُسمّى BC، أي قبل الميلاد.",
            "والتواريخ التي بعده تُسمّى AD، أي بعد الميلاد.",
            "والعقد عشر سنوات، والقرن مئة سنة.",
            "وسنة 1459 في القرن الخامس عشر.",
            "وإصابة الترتيب مهمّة، لأنّ السبب يأتي دائمًا قبل نتيجته."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "nauka o czasie i o układaniu wydarzeń w kolejności (chronology)",
            "od najstarszego wydarzenia do najnowszego (chronological order)",
            "Before Christ, czyli lata przed narodzeniem Jezusa (BC)",
            "Anno Domini, czyli lata po narodzeniu Jezusa (AD)",
            "okres dziesięciu lat",
            "okres stu lat"
          ],
          "passage": [
            "Historia to nauka o przeszłości.",
            "Żeby badać przeszłość, musimy wiedzieć, w jakiej kolejności rzeczy się działy.",
            "Chronologia to nauka o czasie.",
            "Kolejność chronologiczna znaczy: od najstarszego wydarzenia do najnowszego.",
            "Rzymianie opuścili Brytanię w 410 roku.",
            "Bitwa pod Hastings była w 1066 roku.",
            "Wielki pożar Londynu był w 1666 roku.",
            "Daty przed narodzeniem Jezusa oznaczamy skrótem BC.",
            "Daty po nim oznaczamy skrótem AD.",
            "Dekada to dziesięć lat, a wiek to sto lat.",
            "Rok 1459 należy do piętnastego wieku.",
            "Właściwa kolejność jest ważna, bo przyczyna zawsze poprzedza swój skutek."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o estudo do tempo, e o pôr os acontecimentos em ordem (chronology, cronologia)",
            "do acontecimento mais antigo até ao mais recente (chronological order, ordem cronológica)",
            "Before Christ, os anos antes do nascimento de Jesus (BC, a.C.)",
            "Anno Domini, os anos depois do nascimento de Jesus (AD, d.C.)",
            "um período de dez anos (decade, década)",
            "um período de cem anos (century, século)"
          ],
          "passage": [
            "A História é o estudo do passado.",
            "Para estudar o passado precisamos de saber a ordem em que as coisas aconteceram.",
            "A cronologia é o estudo do tempo.",
            "Ordem cronológica quer dizer do acontecimento mais antigo até ao mais recente.",
            "Os romanos saíram da Grã-Bretanha em 410.",
            "A Batalha de Hastings foi em 1066.",
            "O Grande Incêndio de Londres foi em 1666.",
            "As datas antes do nascimento de Jesus chamam-se a.C. (BC).",
            "As datas depois disso chamam-se d.C. (AD).",
            "Uma década são dez anos e um século são cem anos.",
            "O ano 1459 está no século quinze.",
            "Acertar na ordem é importante porque uma causa vem sempre antes do seu efeito."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "barashada waqtiga, iyo kala saaridda dhacdooyinka",
            "laga bilaabo dhacdada ugu duqoobay ilaa tan ugu dambeysay",
            "Before Christ, oo ah sanadihii ka horreeyay dhalashada Ciise",
            "Anno Domini, oo ah sanadihii ka dambeeyay dhalashada Ciise",
            "muddo toban sano ah",
            "muddo boqol sano ah"
          ],
          "passage": [
            "Taariikhdu waa barashada waagii hore.",
            "Si aan waagii hore u barano waxaan u baahan nahay inaan ogaanno kala horreynta waxyaalaha.",
            "Chronology waa barashada waqtiga.",
            "Chronological order macnaheedu waa laga bilaabo dhacdada ugu duqoobay ilaa tan ugu dambeysay.",
            "Roomaanku waxay Biritayn ka baxeen 410-kii.",
            "Dagaalkii Hastings wuxuu dhacay 1066-kii.",
            "Dabkii Weynaa ee London wuxuu dhacay 1666-kii.",
            "Taariikhyada ka horreeyay dhalashada Ciise waxaa loo yiraahdaa BC.",
            "Kuwa ka dambeeyana waxaa loo yiraahdaa AD.",
            "Toban sano waa decade, boqol sanona waa qarni.",
            "Sanadka 1459 wuxuu ku jiraa qarnigii shan iyo tobnaad.",
            "Kala horreynta saxda ah way muhiim tahay maxaa yeelay sababtu had iyo jeer saameyntiisa ka hor ayay timaaddaa."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "вивчення часу і впорядкування подій (chronology)",
            "від найдавнішої події до найновішої (chronological order)",
            "Before Christ, тобто роки до народження Ісуса (BC)",
            "Anno Domini, тобто роки після народження Ісуса (AD)",
            "період десяти років (decade)",
            "період ста років (century)"
          ],
          "passage": [
            "Історія — це вивчення минулого.",
            "Щоб вивчати минуле, нам потрібно знати, у якому порядку відбувалися події.",
            "Хронологія — це вивчення часу.",
            "Хронологічний порядок означає від найдавнішої події до найновішої.",
            "Римляни покинули Британію в 410 році.",
            "Битва при Гастінгсі (Hastings) була в 1066 році.",
            "Велика лондонська пожежа була в 1666 році.",
            "Дати до народження Ісуса називають BC.",
            "Дати після нього називають AD.",
            "Декада — це десять років, а століття — це сто років.",
            "1459 рік — це п’ятнадцяте століття.",
            "Правильний порядок важливий, бо причина завжди йде перед своїм наслідком."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وقت کا مطالعہ، اور واقعات کو ترتیب میں رکھنا (chronology)",
            "سب سے پرانے واقعے سے سب سے نئے واقعے تک (chronological order)",
            "Before Christ، یعنی مسیح (Jesus) کی پیدائش سے پہلے کے سال (BC)",
            "Anno Domini، یعنی مسیح کی پیدائش کے بعد کے سال (AD)",
            "دس سال کا عرصہ",
            "سو سال کا عرصہ"
          ],
          "passage": [
            "تاریخ ماضی کا مطالعہ ہے۔",
            "ماضی کا مطالعہ کرنے کے لیے ہمیں جاننا ہوتا ہے کہ واقعات کس ترتیب سے پیش آئے۔",
            "chronology وقت کا مطالعہ ہے۔",
            "chronological order کا مطلب سب سے پرانے واقعے سے سب سے نئے واقعے تک ہے۔",
            "رومی 410 میں برطانیہ چھوڑ گئے۔",
            "ہیسٹنگز کی جنگ 1066 میں ہوئی۔",
            "لندن کی بڑی آتش زدگی 1666 میں ہوئی۔",
            "مسیح کی پیدائش سے پہلے کی تاریخوں کو BC کہتے ہیں۔",
            "اس کے بعد کی تاریخوں کو AD کہتے ہیں۔",
            "decade دس سال ہیں اور century سو سال۔",
            "سن 1459 پندرھویں صدی میں آتا ہے۔",
            "ترتیب ٹھیک رکھنا اہم ہے، کیونکہ سبب ہمیشہ اپنے نتیجے سے پہلے آتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What is chronology?",
          paragraphs: [
            "Chronology is the study of time. When historians put events in chronological order, they arrange them from the oldest to the most recent. It sounds simple, but it is the first skill every historian needs, because you cannot explain the past until you know what happened first.",
            "Your first lesson used six events to practise this: the fall of the Roman Empire in 476, the Battle of Hastings in 1066, the Peasants' Revolt in England in 1381, the Great Fire of London in 1666, the abolition of slavery across the British Empire in 1833, and the death of Queen Elizabeth II in 2022. Put them on a line from oldest to most recent and you have a timeline.",
            "A timeline is only useful if every date is in the right place. One date out of order and the whole story changes, so historians check dates carefully before they say anything about causes."
          ],
          tip: "Oldest on the left, most recent on the right. If you draw it the other way round, a reader will misread every date."
        },
        {
          heading: "BC and AD: counting from a zero point",
          paragraphs: [
            "Our calendar counts from the birth of Jesus Christ. Years after it are AD, which is short for the Latin words Anno Domini, meaning in the year of the Lord. Years before it are BC, Before Christ. So the Romans left Britain in AD 410, but Alexander the Great conquered Egypt in 332 BC and the Roman Empire was created in 27 BC.",
            "Here is the part that catches people out. For AD dates, the bigger the number, the more recent the event: 1666 is more recent than 410. For BC dates it is the other way round: the bigger the number, the further back in time. So 332 BC is older than 27 BC, and the dinosaurs, around 240 million years BC, are older than everything.",
            "Your lesson asked whether we should use the birth of Jesus to measure time at all. Many historians now write BCE and CE, meaning Before the Common Era and Common Era. The numbers are exactly the same; only the letters change. You will see both in books, so learn to read both."
          ],
          worked: {
            q: "Put these dates in chronological order: 500 BC, 567, 250 BC, 2010, 3000 BC, 1552.",
            steps: [
              "Separate the BC dates from the AD dates. BC: 3000 BC, 500 BC, 250 BC. AD: 567, 1552, 2010.",
              "All BC dates come before all AD dates, so the BC group goes first.",
              "Inside the BC group the biggest number is oldest: 3000 BC, then 500 BC, then 250 BC.",
              "Inside the AD group the smallest number is oldest: 567, then 1552, then 2010."
            ],
            answer: "3000 BC, 500 BC, 250 BC, 567, 1552, 2010"
          },
          tip: "There is no year zero. The year after 1 BC is AD 1. Your worksheet shows a zero point between BC and AD; it is a line, not a year."
        },
        {
          heading: "Decades and centuries",
          paragraphs: [
            "A decade is ten years. A century is one hundred years. Historians often talk in centuries because a single year is too small to describe a whole period: we say the Vikings raided England in the eighth and ninth centuries, not in a list of dates.",
            "Your lesson gives a quick method for finding a century: cover up the last two digits of the year and add one. For 1459, cover the 59 to leave 14, then add one: the fifteenth century. For 1792, cover the 92 to leave 17, add one: the eighteenth century. For 42 there is nothing left when you cover two digits, so 0 plus one gives the first century.",
            "The method works because the first century ran from year 1 to year 100, so every century finishes at a year ending in 00. That gives one exception to remember: a year that ends in 00 belongs to the century before. The year 1900 is in the nineteenth century, not the twentieth, because the nineteenth century ran from 1801 to 1900."
          ],
          worked: {
            q: "Which century is the year 1675 in?",
            steps: [
              "Cover the last two digits: 1675 becomes 16.",
              "Add one: 16 + 1 = 17.",
              "So 1675 is in the seventeenth century.",
              "Check: the seventeenth century runs from 1601 to 1700, and 1675 sits inside it."
            ],
            answer: "The seventeenth century",
            checks: [{ expr: "1675 // 100 + 1", value: 17, tol: 0 }]
          },
          tip: "Cover two digits, add one. Then check your answer by saying the century's first and last years out loud."
        },
        {
          heading: "Why the order matters: cause and effect",
          paragraphs: [
            "Your lesson's challenge asked why it matters that we get events in the right order. The answer is cause and effect. A cause is what makes something happen; an effect is what happens as a result. A cause must come before its effect, never after.",
            "Suppose someone said the Vikings attacked Lindisfarne because of the Battle of Hastings. Chronology stops that idea at once: the raid on Lindisfarne was in 793 and Hastings was in 1066, more than two and a half centuries later. An event cannot be caused by something that had not yet happened.",
            "That is why every unit in this course starts with dates. Once you know the order, you can start asking the real historical questions: why did this happen, and what did it lead to?"
          ],
          tip: "When you write about a cause, check the date of the cause is earlier than the date of the effect. If it is not, you have them the wrong way round."
        }
      ],
      gate: [
        { kind: "mcq", q: "What does it mean to put events in chronological order?", options: ["To arrange them from the oldest to the most recent", "To arrange them from the most important to the least important", "To arrange them from the most recent to the oldest", "To arrange them in alphabetical order by name"], answer: 0, why: "Chronological order runs from the oldest event to the most recent: it is the order in which things actually happened.",
          feedback: [
            "",
            "Importance is a judgement, and historians make judgements later. Chronological order is about time only: the oldest event first, the most recent last.",
            "You have the right idea but the wrong direction. Chronological order starts with the oldest event and finishes with the most recent, like a timeline read from left to right.",
            "Alphabetical order sorts by letters, not by time. Chronological order sorts by date, from the oldest event to the most recent."
          ] },
        { kind: "numeric", q: "Which century is the year 1792 in? Give the number of the century.", answer: 18, tolerance: 0, units: "th century", why: "Cover the last two digits of 1792 to leave 17, then add one: 18. So 1792 is in the eighteenth century.", check: "1792 // 100 + 1",
          misconceptions: [
            { answer: 17, says: "You covered the last two digits but forgot to add one. 17 is what is left; the century is 17 + 1 = 18, because the first century ran from year 1 to year 100.", check: "1792 // 100" },
            { answer: 19, says: "You added one too many, or covered only one digit. Cover the last two digits of 1792 to leave 17, then add one: the eighteenth century.", check: "1792 // 100 + 2" }
          ] },
        { kind: "gap", q: "For BC dates, the bigger the number, the ___ back in time the event happened.", answer: "further", options: ["further", "less far", "more recently"], why: "BC years count backwards from the birth of Jesus, so 332 BC is further back than 27 BC.",
          feedback: {
            "less far": "That is how AD dates work, where a bigger number is more recent. BC dates count backwards from the zero point, so a bigger BC number is further back in time: 332 BC is older than 27 BC.",
            "more recently": "You have used the AD rule. For BC dates the counting runs backwards: 3000 BC is far older than 500 BC, even though 3000 is the bigger number."
          } }
      ],
      modules: [
        {
          title: "Oldest to most recent",
          task: {
            kind: "order",
            q: "Put these six dates in chronological order, oldest first.",
            items: ["3000 BC", "500 BC", "250 BC", "567", "1552", "2010"]
          },
          levels: {
            support: {
              steps: [
                "Sort the dates into two piles: BC and AD. Every BC date comes before every AD date.",
                "In the BC pile the biggest number is the oldest, so it goes first.",
                "In the AD pile the smallest number is the oldest.",
                "Read your final list and check it runs BC first, then AD, with the numbers falling and then rising."
              ],
              example: {
                q: "Put these in chronological order: 1066, 55 BC, 410, 800 BC.",
                steps: ["BC pile: 800 BC, 55 BC. The bigger BC number is older, so 800 BC first.", "AD pile: 410, 1066. The smaller AD number is older, so 410 first.", "Join them: BC pile, then AD pile."],
                answer: "800 BC, 55 BC, 410, 1066"
              }
            },
            core: { hint: "BC before AD. Within BC, big numbers are oldest; within AD, small numbers are oldest." },
            stretch: { extend: "Explain, in two sentences, why the biggest BC number is the oldest date but the biggest AD number is the most recent." }
          },
          explain: "Say, in one sentence, why 3000 BC comes before 500 BC even though 3000 is the bigger number.",
          why: "All BC dates come before all AD dates. Within BC the bigger number is older (3000 BC, 500 BC, 250 BC); within AD the smaller number is older (567, 1552, 2010)."
        },
        {
          title: "Which century?",
          task: {
            kind: "numeric",
            q: "Which century is the year 1459 in? Give the number of the century.",
            answer: 15, tolerance: 0, units: "th century",
            why: "Cover the last two digits of 1459 to leave 14, then add one: 15. The fifteenth century runs from 1401 to 1500, and 1459 sits inside it.",
            check: "1459 // 100 + 1",
            misconceptions: [
              { answer: 14, says: "You covered the last two digits but did not add one. The 14 tells you fourteen full centuries have passed; 1459 is inside the fifteenth.", check: "1459 // 100" },
              { answer: 16, says: "You added one too many. Cover the 59 to leave 14, then add one only once: the fifteenth century.", check: "1459 // 100 + 2" },
              { answer: 59, says: "You kept the last two digits instead of covering them. The century comes from the digits at the front: 14, plus one, gives the fifteenth century.", check: "1459 % 100" }
            ]
          },
          contexts: [
            { label: "A coin", q: "An archaeologist finds a silver coin stamped with the year 1420. Which century was it made in? Give the number of the century.", check: "1420 // 100 + 1" },
            { label: "A castle", q: "A castle's gatehouse has the year 1485 carved above the door. Which century was it built in? Give the number of the century.", check: "1485 // 100 + 1" },
            { label: "A charter", q: "A town's charter, the document that gave it the right to hold a market, is dated 1401. Which century is that? Give the number of the century.", check: "1401 // 100 + 1" }
          ],
          levels: {
            support: {
              steps: [
                "Write the year down and cover the last two digits with your finger.",
                "Read the digits that are left. That is how many full centuries have passed.",
                "Add one, because we are now inside the next century.",
                "Say the answer as a word: fifteenth, sixteenth, and so on."
              ],
              example: {
                q: "Which century is the year 1703 in?",
                steps: ["Cover the 03 to leave 17.", "Add one: 18.", "So 1703 is in the eighteenth century."],
                answer: "18th century",
                checks: [{ expr: "1703 // 100 + 1", value: 18, tol: 0 }]
              }
            },
            core: { hint: "Cover the last two digits, then add one. Remember the one exception: a year ending in 00 belongs to the century before." },
            stretch: { extend: "Explain why the year 1500 is in the fifteenth century even though the cover-and-add-one method gives sixteen." }
          },
          explain: "Say, in one sentence, why we add one after covering the last two digits.",
          why: "Fourteen full centuries had passed by the year 1400, so 1459 lies inside the fifteenth. Cover the 59, read 14, add one."
        },
        {
          title: "Words for time",
          task: {
            kind: "match",
            q: "Match each key term to its meaning.",
            pairs: [
              ["chronology", "The study of time and the order of events"],
              ["decade", "A period of ten years"],
              ["century", "A period of one hundred years"],
              ["BC", "Before Christ: the years before the birth of Jesus"],
              ["AD", "Anno Domini: the years after the birth of Jesus"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the two that are lengths of time: one is ten years, the other is one hundred. Dec- means ten, cent- means hundred (think of a cent, one hundredth of a dollar).",
                "BC and AD are the two that split the calendar. B stands for Before.",
                "The word that is left, chronology, is the study of time itself."
              ],
              example: {
                q: "Match: millennium, year, and month to their meanings: a period of one thousand years; about thirty days; three hundred and sixty-five days.",
                steps: ["Mille- means thousand, so millennium is one thousand years.", "A month is about thirty days.", "A year is three hundred and sixty-five days."],
                answer: "millennium: one thousand years; month: about thirty days; year: three hundred and sixty-five days"
              }
            },
            core: { hint: "Dec- means ten and cent- means hundred. B is for Before." },
            stretch: { extend: "Write one sentence that uses all five terms correctly." }
          },
          explain: "Say, in one sentence, the difference between a decade and a century.",
          why: "Chronology is the study of time; a decade is ten years; a century is one hundred years; BC is Before Christ; AD is Anno Domini, the years after the birth of Jesus."
        }
      ]
    },

    /* ───────────── 2 · sources ───────────── */
    {
      key: "sources", n: 2, title: "Sources: how we know about the past",
      lead: "What a source is, the difference between primary and secondary sources, how to question a source with NOP, and how historians and archaeologists work.",
      covers: [1, 2],
      pretext: {
        words: [
          { word: "source", means: "something we use to get information about the past", sentence: "A diary is a source because it tells us what someone thought at the time." },
          { word: "primary source", means: "evidence made at the time being studied", sentence: "A coin made by the Romans is a primary source about the Romans." },
          { word: "secondary source", means: "something made after the time being studied", sentence: "A school textbook about the Romans is a secondary source." },
          { word: "evidence", means: "the facts and objects that support what we say", sentence: "Historians need evidence before they make a judgement." },
          { word: "archaeologist", means: "someone who studies the objects and remains people left behind", sentence: "The archaeologist dug up a Viking sword." },
          { word: "purpose", means: "the reason something was made", sentence: "The purpose of a poster might be to persuade people." }
        ],
        passage: [
          "A source is something we use to find out about the past.",
          "Sources are our evidence.",
          "A primary source comes from the time we are studying.",
          "A diary written during a war is a primary source.",
          "A secondary source was made afterwards.",
          "A textbook about that war is a secondary source.",
          "Historians question every source before they trust it.",
          "They ask what it is, where it came from and why it was made.",
          "Archaeologists study objects and bones that people left behind.",
          "A tooth that is a thousand years old can show where a person grew up.",
          "Historians and archaeologists work together to build a picture of the past."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "شيء نستخدمه لنأخذ منه معلومات عن الماضي (source)",
            "دليل صُنع في الزمن الذي ندرسه (primary source)",
            "شيء صُنع بعد الزمن الذي ندرسه (secondary source)",
            "الوقائع والأشياء التي تسند ما نقوله (evidence)",
            "شخص يدرس الأشياء والبقايا التي تركها الناس (archaeologist)",
            "السبب الذي صُنع الشيء من أجله (purpose)"
          ],
          "passage": [
            "المصدر شيء نستخدمه لنعرف عن الماضي.",
            "والمصادر هي أدلّتنا.",
            "والمصدر الأوّلي يأتي من الزمن الذي ندرسه.",
            "واليومية المكتوبة في أثناء حرب مصدر أوّلي.",
            "أمّا المصدر الثانوي فقد صُنع بعد ذلك.",
            "والكتاب المدرسي عن تلك الحرب مصدر ثانوي.",
            "والمؤرّخون يسألون كلّ مصدر قبل أن يثقوا به.",
            "فهم يسألون: ما هو؟ ومن أين جاء؟ ولماذا صُنع؟",
            "وعلماء الآثار يدرسون الأشياء والعظام التي تركها الناس.",
            "وسنّ عمره ألف سنة قد يبيّن أين نشأ صاحبه.",
            "والمؤرّخون وعلماء الآثار يعملون معًا ليبنوا صورة للماضي."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "coś, z czego czerpiemy informacje o przeszłości (source)",
            "świadectwo powstałe w czasie, który badamy (primary source)",
            "coś, co powstało po czasie, który badamy (secondary source)",
            "fakty i przedmioty, które potwierdzają to, co mówimy (evidence)",
            "ktoś, kto bada przedmioty i szczątki pozostawione przez ludzi (archaeologist)",
            "powód, dla którego coś zostało zrobione (purpose)"
          ],
          "passage": [
            "Źródło to coś, z czego dowiadujemy się o przeszłości.",
            "Źródła są naszymi dowodami.",
            "Źródło pierwotne pochodzi z czasu, który badamy.",
            "Dziennik pisany w czasie wojny to źródło pierwotne.",
            "Źródło wtórne powstało później.",
            "Podręcznik o tej wojnie to źródło wtórne.",
            "Historycy przepytują każde źródło, zanim mu zaufają.",
            "Pytają, czym ono jest, skąd pochodzi i dlaczego zostało zrobione.",
            "Archeolodzy badają przedmioty i kości pozostawione przez ludzi.",
            "Ząb mający tysiąc lat może pokazać, gdzie dana osoba wyrosła.",
            "Historycy i archeolodzy pracują razem, żeby zbudować obraz przeszłości."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "algo que usamos para obter informação sobre o passado (source, fonte)",
            "provas feitas na época que estamos a estudar (primary source, fonte primária)",
            "algo feito depois da época que estamos a estudar (secondary source, fonte secundária)",
            "os factos/fatos e os objetos que apoiam aquilo que dizemos (evidence, provas)",
            "alguém que estuda os objetos e os restos que as pessoas deixaram (archaeologist, arqueólogo)",
            "a razão por que uma coisa foi feita (purpose, propósito)"
          ],
          "passage": [
            "Uma fonte é algo que usamos para descobrir coisas sobre o passado.",
            "As fontes são as nossas provas.",
            "Uma fonte primária vem da época que estamos a estudar.",
            "Um diário escrito durante uma guerra é uma fonte primária.",
            "Uma fonte secundária foi feita depois.",
            "Um manual escolar sobre essa guerra é uma fonte secundária.",
            "Os historiadores questionam cada fonte antes de confiarem nela.",
            "Perguntam o que ela é, de onde veio e porque foi feita.",
            "Os arqueólogos estudam objetos e ossos que as pessoas deixaram.",
            "Um dente com mil anos pode mostrar onde é que uma pessoa cresceu.",
            "Historiadores e arqueólogos trabalham juntos para construir uma imagem do passado."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "wax aan u isticmaalno helitaanka macluumaad ku saabsan waagii hore",
            "caddayn la sameeyay waqtigii la baranayo",
            "wax la sameeyay waqtigii la baranayo ka dib",
            "xaqiiqooyinka iyo waxyaalaha taageeraya waxa aan sheegno",
            "qof baraya waxyaalaha iyo haraaga dadku ka tageen",
            "sababta wax loo sameeyay"
          ],
          "passage": [
            "Il (source) waa wax aan u isticmaalno ogaanshaha waagii hore.",
            "Ilihii waa caddayntayada.",
            "Primary source waxay ka timaaddaa waqtiga aan baranayno.",
            "Xusuus-qor dagaal lagu qoray waa primary source.",
            "Secondary source waxaa la sameeyay kadib.",
            "Buug casharro oo dagaalkaas ku saabsan waa secondary source.",
            "Taariikhyahannadu waxay il kasta su'aalaan intaanay ku kalsoonaan.",
            "Waxay weydiiyaan waa maxay, xaggee ka timid iyo maxay loo sameeyay.",
            "Archaeologists waxay bartaan waxyaalaha iyo lafaha dadku ka tageen.",
            "Ilig kun sano jir ah wuxuu muujin karaa halka qof ku koray.",
            "Taariikhyahannada iyo archaeologists waxay wada shaqeeyaan si ay sawir waagii hore u dhisaan."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "те, що ми використовуємо, щоб отримати інформацію про минуле (source)",
            "свідчення, створене в той час, який ми вивчаємо (primary source)",
            "те, що створене після того часу, який ми вивчаємо (secondary source)",
            "факти й речі, які підтверджують те, що ми кажемо (evidence)",
            "той, хто вивчає речі й залишки, які залишили люди (archaeologist)",
            "причина, з якої щось було створено (purpose)"
          ],
          "passage": [
            "Джерело — це те, що ми використовуємо, щоб дізнатися про минуле.",
            "Джерела — це наші свідчення.",
            "Первинне джерело (primary source) походить із того часу, який ми вивчаємо.",
            "Щоденник, написаний під час війни, — це первинне джерело.",
            "Вторинне джерело (secondary source) створене пізніше.",
            "Підручник про ту війну — це вторинне джерело.",
            "Історики питають про кожне джерело, перш ніж йому довіряти.",
            "Вони питають, що це, звідки воно взялося і чому його створили.",
            "Археологи вивчають речі й кості, які залишили люди.",
            "Зуб, якому тисяча років, може показати, де людина виросла.",
            "Історики й археологи працюють разом, щоб скласти картину минулого."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ چیز جو ہم ماضی کے بارے میں معلومات لینے کے لیے استعمال کرتے ہیں (source)",
            "وہ شہادت جو اُسی زمانے میں بنی جس کا مطالعہ ہو رہا ہے (primary source)",
            "وہ چیز جو اُس زمانے کے بعد بنی جس کا مطالعہ ہو رہا ہے (secondary source)",
            "وہ حقائق اور اشیا جو ہماری بات کی تائید کرتی ہیں (evidence)",
            "وہ شخص جو لوگوں کی چھوڑی ہوئی اشیا اور باقیات کا مطالعہ کرتا ہے (archaeologist)",
            "وہ وجہ جس کے لیے کوئی چیز بنائی گئی (purpose)"
          ],
          "passage": [
            "source وہ چیز ہے جو ہم ماضی کے بارے میں جاننے کے لیے استعمال کرتے ہیں۔",
            "sources ہماری شہادت ہیں۔",
            "primary source اُس زمانے سے آتا ہے جس کا ہم مطالعہ کر رہے ہیں۔",
            "جنگ کے دوران لکھی گئی ڈائری ایک primary source ہے۔",
            "secondary source بعد میں بنایا گیا۔",
            "اُس جنگ کے بارے میں لکھی گئی درسی کتاب ایک secondary source ہے۔",
            "مؤرخ ہر source پر بھروسہ کرنے سے پہلے اس سے سوال کرتے ہیں۔",
            "وہ پوچھتے ہیں کہ یہ کیا ہے، کہاں سے آیا ہے اور کیوں بنایا گیا۔",
            "archaeologists اُن اشیا اور ہڈیوں کا مطالعہ کرتے ہیں جو لوگ پیچھے چھوڑ گئے۔",
            "ہزار سال پرانا ایک دانت بتا سکتا ہے کہ وہ شخص کہاں پلا بڑھا تھا۔",
            "مؤرخ اور archaeologists مل کر ماضی کی تصویر بناتے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What is a source?",
          paragraphs: [
            "A source is anything we use to get information about the past. Sources are the evidence historians use to learn about history. A letter, a coin, a building, a photograph, a film, a podcast and a person's memory can all be sources.",
            "Your first lesson began with a real example: a soldier who fought in the Second World War, between 1939 and 1945, and who could still describe it many years later. Could you trust what he said? Yes, in one way: he was there, and saw things no book can show. But also be careful: memories fade over many decades, and people naturally tell the parts of a story that matter most to them.",
            "That is the habit this chapter is about. Every source tells us something, and every source has limits. A good historian asks both questions at once: what does this tell me, and how far can I trust it?"
          ],
          tip: "Even your teacher is a source of historical information. Ask the same two questions of every source: what does it tell me, and how far can I trust it?"
        },
        {
          heading: "Primary and secondary sources",
          paragraphs: [
            "A primary source is an original document, object or piece of evidence from the time being studied. Anne Frank's diary is a primary source about the Second World War, because she wrote it while she was in hiding from the Nazis in the Netherlands. The bones of King Richard III, a fifteenth-century king, are a primary source about him. The Colosseum in Rome is a primary source about the Romans.",
            "A secondary source is something written or created after the time being studied. A school textbook about the Second World War was not written during the war, but afterwards. The film Gladiator was made nearly two thousand years after the gladiators it shows. A history podcast is recorded today about events long ago.",
            "Both kinds are useful, but for different reasons. Primary sources take you straight to the time, with the thoughts and objects of the people who were there. Secondary sources pull together many primary sources and explain them, with the benefit of knowing how the story ended."
          ],
          worked: {
            q: "Is a Viking sword found in a grave a primary or a secondary source about the Vikings?",
            steps: [
              "Ask when it was made: by Vikings, in Viking times.",
              "A primary source is an original object from the time being studied.",
              "The sword is from the time, so it is a primary source.",
              "Compare: a museum label explaining the sword was written today, so the label is a secondary source."
            ],
            answer: "Primary: it is an original object from Viking times. The label beside it is secondary."
          },
          tip: "Ask one question: was it made at the time, or afterwards? At the time means primary; afterwards means secondary."
        },
        {
          heading: "Questioning a source: NOP",
          paragraphs: [
            "We use sources to learn about the past, but we also have to question the source itself to make sure it is telling us the right information. Your lesson gives a three-letter method called NOP.",
            "N is for Nature: what is the source, and what does it say? O is for Origin: where is it from, when is it from, and who made it? P is for Purpose: why was it made, and what is it trying to tell us? A poster made to persuade people and a private diary have very different purposes, and that changes how far we trust each one.",
            "Your lesson ended with a coin. Who made it? What is it? Where is it from? When is it from, including which century? Is it a primary or a secondary source? Answer those and you have done a full NOP analysis, and you can start to ask what the coin shows about the people who used it."
          ],
          tip: "Say the three questions in order every time: what is it, where and when is it from and who made it, why was it made. Nature, Origin, Purpose."
        },
        {
          heading: "Historians and archaeologists",
          paragraphs: [
            "Historians study the past through the analysis of sources, mostly written ones. They form judgements based on the evidence they use, and their work can be challenged by new discoveries or by different interpretations of the same evidence.",
            "Archaeologists study the objects and remains that people left behind: bones, buildings, tools, coins and jewellery. They form judgements from the patterns they find across many objects, and their work can be challenged by new discoveries or by new techniques for analysing objects.",
            "Your lesson introduced a bioarchaeologist, Dr Cat Jarman, who studies the Vikings buried in British soil. By examining teeth that are now over a thousand years old she can work out a person's childhood diet, and from that where they were probably born. With radiocarbon dating she can find a death date to within a few years. Her research is giving us new ideas about the roles of women and children in Viking life."
          ],
          tip: "Historian: written sources, judgements from evidence. Archaeologist: objects and remains, judgements from patterns. Both can be challenged by new finds."
        }
      ],
      gate: [
        { kind: "gap", q: "A ___ source is an original document or object from the time being studied.", answer: "primary", options: ["primary", "secondary", "modern"], why: "Primary sources come from the time itself; secondary sources are made afterwards.",
          feedback: {
            "secondary": "You have the two swapped. A secondary source is made after the time being studied, such as a textbook. Something from the time itself, such as a diary or a coin, is a primary source.",
            "modern": "A modern source would be made today, which is after the time being studied. A source from the time itself is called a primary source."
          } },
        { kind: "mcq", q: "Which of these is a secondary source about the Second World War?", options: ["A school textbook about the war, written afterwards", "A diary written during the war by someone in hiding", "A soldier's uniform worn during the war", "A letter sent home from the front in 1943"], answer: 0, why: "A textbook is written after the time being studied, so it is a secondary source. The diary, uniform and letter were all made during the war, so they are primary.",
          feedback: [
            "",
            "The diary was written during the war by someone living through it, so it is a primary source. A secondary source is made afterwards, such as a textbook.",
            "The uniform is an original object from the time, so it is a primary source. Look for the option that was made after the war ended.",
            "A letter written during the war is a primary source: it comes from the time itself. The textbook, written afterwards, is the secondary source."
          ] },
        { kind: "mcq", q: "In the NOP method, what does the O stand for?", options: ["Origin: where and when the source is from, and who made it", "Opinion: what the historian thinks about the source", "Object: whether the source is a thing or a document", "Order: where the source fits on a timeline"], answer: 0, why: "N is Nature, O is Origin, P is Purpose. Origin asks where, when and by whom the source was made.",
          feedback: [
            "",
            "Opinion is not part of NOP. The O asks about the source's origin: where it is from, when it is from and who made it. Your own opinion comes later, after you have questioned it.",
            "Whether a source is an object or a document is part of its Nature, the N. The O is Origin: where, when and who.",
            "Putting the source on a timeline is chronology, from chapter 1. In NOP the O is Origin: where and when the source is from, and who made it."
          ] }
      ],
      modules: [
        {
          title: "NOP, historians and archaeologists",
          task: {
            kind: "match",
            q: "Match each term to its meaning.",
            pairs: [
              ["Nature", "What the source is and what it says"],
              ["Origin", "Where and when the source is from, and who made it"],
              ["Purpose", "Why the source was made and what it is trying to tell us"],
              ["Historian", "Studies the past through the analysis of sources, mostly written"],
              ["Archaeologist", "Studies the objects and remains that people left behind"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the two jobs. The one who digs up objects and bones is the archaeologist.",
                "Nature asks what the source is; think of the nature of something as what it is like.",
                "Origin shares a root with original: where something first came from.",
                "Purpose is the reason for doing something, so it is about why the source was made."
              ],
              example: {
                q: "Match: author, publisher and reader to: the person who wrote the book; the company that printed it; the person who reads it.",
                steps: ["Author comes from the same root as authority and authorship: the writer.", "A publisher publishes, that is, prints and sells.", "The reader is left."],
                answer: "author: wrote the book; publisher: printed it; reader: reads it"
              }
            },
            core: { hint: "Nature is what, Origin is where, when and who, Purpose is why. Archaeologists dig." },
            stretch: { extend: "Explain why Origin and Purpose together tell you how far to trust a source, using one example of your own." }
          },
          explain: "Say, in one sentence, why a historian asks about a source's purpose.",
          why: "Nature is what the source is; Origin is where, when and who; Purpose is why it was made. Historians work from sources, mostly written; archaeologists work from objects and remains."
        },
        {
          title: "Primary or secondary?",
          task: {
            kind: "mcq",
            q: "The bones of King Richard III were dug up in a Leicester car park and studied by scientists. Are the bones a primary or a secondary source about Richard III, and why?",
            options: [
              "Primary, because they are the remains of the man himself, from his own time",
              "Secondary, because they were only found recently",
              "Secondary, because scientists had to study them to learn anything",
              "Primary, because they were found by archaeologists"
            ],
            answer: 0,
            why: "What makes a source primary is when it comes from, not when it was found or who found it. The bones are from Richard's own time, so they are primary.",
            feedback: [
              "",
              "When a source is found does not change what it is. The bones are from the fifteenth century, Richard's own time, so they are a primary source even though they were discovered recently.",
              "Every source has to be studied before it tells us anything, including diaries and coins. The bones come from Richard's own lifetime, which is what makes them primary.",
              "You have the right answer but the wrong reason. Who found a source does not make it primary. The bones are primary because they are the remains of the man himself, from his own time."
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask when the source comes from, not when it was found.",
                "Richard III lived in the fifteenth century. His bones are from his own lifetime.",
                "From the time being studied means primary.",
                "Now check the reason: the correct option must say they are from his own time."
              ],
              example: {
                q: "A Roman coin was found by a farmer last year. Is it a primary or a secondary source about the Romans, and why?",
                steps: ["Ask when it was made: by the Romans, in Roman times.", "From the time being studied means primary.", "Finding it last year does not change when it was made."],
                answer: "Primary, because the Romans made it in their own time; the date it was found does not matter."
              }
            },
            core: { hint: "Primary or secondary depends on when the source was made, not on when or by whom it was found." },
            stretch: { extend: "A scientist writes a report about what the bones show. Is the report primary or secondary? Explain your answer in two sentences." }
          },
          explain: "Say, in one sentence, what decides whether a source is primary or secondary.",
          why: "A source is primary if it comes from the time being studied. Richard's bones are the remains of the man himself, so they are primary; when they were found and who found them make no difference."
        },
        {
          title: "Analyse a coin with NOP",
          task: {
            kind: "written",
            q: "A small silver coin was dug up by archaeologists at a Viking camp in England. The writing on it is Arabic, and it was made in the Islamic world in the ninth century. Use NOP to analyse this source. Write one paragraph of four to six sentences.",
            criteria: [
              "Nature: I say what the source is and what it shows.",
              "Origin: I say where and when it was made, and where it was found.",
              "Purpose: I say why it was made, and what it can tell a historian today.",
              "I say whether it is a primary or a secondary source, and I use the word because."
            ],
            model: "The nature of this source is a small silver coin with Arabic writing on it. Its origin is the Islamic world, where it was made in the ninth century, but it was found by archaeologists at a Viking camp in England. Its purpose when it was made was to be used as money, so it was not made to tell us anything about Vikings. Even so, it is a primary source about them, because it is an original object that the Vikings themselves carried and buried. A historian can infer from it that the Vikings had links with traders far to the east, since the coin travelled from the Islamic world to England."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1, Nature: The nature of this source is… Say what it is and what is on it.",
                "Sentence 2, Origin: Its origin is… Say where and when it was made, and where it was found.",
                "Sentence 3, Purpose: Its purpose was… Think about what a coin is for.",
                "Sentence 4: It is a primary source because… Then add one thing a historian can learn from it."
              ],
              example: {
                q: "Use NOP to analyse a wartime poster that shows a smiling farmer and the words Dig for Victory.",
                steps: ["Nature: a printed poster with a picture and a slogan.", "Origin: made in Britain during the Second World War by the government.", "Purpose: to persuade people to grow their own food.", "Primary, because it was made during the war."],
                answer: "The poster is a primary source made by the British government during the war to persuade people to grow food; the smiling farmer shows how the government wanted people to feel."
              }
            },
            core: { hint: "One sentence each for Nature, Origin and Purpose, then one sentence saying primary or secondary and why." },
            stretch: { extend: "Explain why a source made for one purpose, such as being money, can still tell historians about something else, such as trade." }
          },
          explain: "Say, in one sentence, what the coin's origin tells a historian that its purpose does not.",
          why: "A full NOP answer names what the source is, where and when it was made and found, why it was made, and whether it is primary. The coin's journey from the Islamic world to England is the clue a historian can build on."
        }
      ]
    },

    /* ───────────── 3 · who were the Vikings ───────────── */
    {
      key: "who-were-the-vikings", n: 3, title: "Who were the Vikings?",
      lead: "Where the Vikings came from and what the word means, what they believed and how they lived, and what a single bead can tell archaeologists about how far they travelled.",
      covers: [2],
      pretext: {
        words: [
          { word: "Viking", means: "a sea raider from Scandinavia; a way of life, not a nationality", sentence: "A Viking might come from Norway, Sweden or Denmark." },
          { word: "Scandinavia", means: "the part of northern Europe made up of Norway, Sweden and Denmark", sentence: "The Vikings sailed from Scandinavia across the North Sea." },
          { word: "pagan", means: "someone who worships many gods rather than following Christianity", sentence: "The Vikings were pagans who worshipped Odin and Thor." },
          { word: "Valhalla", means: "the Viking idea of heaven", sentence: "Viking warriors hoped to reach Valhalla when they died." },
          { word: "the Thing", means: "the Viking meeting where laws were made and arguments settled", sentence: "At the Thing, families could settle an argument by debate." },
          { word: "artefact", means: "an object made by people in the past", sentence: "A bead is a small artefact that can tell a big story." }
        ],
        passage: [
          "The Vikings came from Scandinavia: Norway, Sweden and Denmark.",
          "The word Viking means sea raider.",
          "It describes a way of life, not a country.",
          "Viking raids on England began in the late 700s.",
          "Many Vikings later settled in English lands.",
          "The Vikings were pagans.",
          "They worshipped gods such as Odin and Thor.",
          "Warriors hoped to reach Valhalla, the Viking heaven.",
          "Vikings met at the Thing to make laws and settle arguments.",
          "Most Vikings were farmers who kept sheep, pigs and cattle.",
          "Archaeologists found a small red bead in a Viking grave in England.",
          "The bead came all the way from India.",
          "So the Vikings were traders as well as raiders."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "غازٍ بحري من إسكندنافيا؛ وهي طريقة حياة لا قومية (Viking)",
            "الجزء من شمال أوروبا الذي يتكوّن من النرويج والسويد والدنمارك (Scandinavia)",
            "من يعبد آلهة كثيرة ولا يتّبع المسيحية (pagan)",
            "فكرة الفايكنغ عن الجنّة (Valhalla)",
            "مجلس الفايكنغ الذي تُوضع فيه القوانين وتُحلّ فيه الخصومات (the Thing)",
            "شيء صنعه الناس في الماضي (artefact)"
          ],
          "passage": [
            "جاء الفايكنغ من إسكندنافيا: النرويج والسويد والدنمارك.",
            "وكلمة فايكنغ (Viking) تعني الغازي البحري.",
            "وهي تصف طريقة حياة، لا بلدًا.",
            "وبدأت غزوات الفايكنغ على إنجلترا في أواخر سنوات 700.",
            "وكثير من الفايكنغ استقرّ بعد ذلك في أراضٍ إنجليزية.",
            "وكان الفايكنغ وثنيّين.",
            "وكانوا يعبدون آلهةً كأودين (Odin) وثور (Thor).",
            "وكان المحاربون يرجون أن يبلغوا فالهالا (Valhalla)، جنّة الفايكنغ.",
            "وكان الفايكنغ يجتمعون في الثِّنغ (the Thing) ليضعوا القوانين ويحلّوا الخصومات.",
            "ومعظم الفايكنغ كانوا مزارعين يربّون الغنم والخنازير والبقر.",
            "ووجد علماء الآثار خَرَزة حمراء صغيرة في قبر فايكنغي في إنجلترا.",
            "وقد جاءت الخرزة من الهند من ذلك البعد كلّه.",
            "فالفايكنغ كانوا تجّارًا كما كانوا غُزاة."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "morski napastnik ze Skandynawii; sposób życia, a nie narodowość (Viking)",
            "część północnej Europy, którą tworzą Norwegia, Szwecja i Dania (Scandinavia)",
            "ktoś, kto czci wielu bogów, a nie wyznaje chrześcijaństwa (pagan)",
            "wikińskie wyobrażenie nieba (Valhalla)",
            "wikińskie zgromadzenie, na którym uchwalano prawa i rozstrzygano spory (the Thing)",
            "przedmiot zrobiony przez ludzi w przeszłości (artefact)"
          ],
          "passage": [
            "Wikingowie przybyli ze Skandynawii: z Norwegii, Szwecji i Danii.",
            "Słowo wiking znaczy morski napastnik.",
            "Opisuje sposób życia, a nie kraj.",
            "Najazdy wikingów na Anglię zaczęły się pod koniec VIII wieku (the late 700s).",
            "Wielu wikingów osiedliło się później na ziemiach angielskich.",
            "Wikingowie byli poganami.",
            "Czcili bogów takich jak Odyn i Thor.",
            "Wojownicy liczyli na to, że dotrą do Walhalli, wikińskiego nieba.",
            "Wikingowie zbierali się na Thing, żeby uchwalać prawa i rozstrzygać spory.",
            "Większość wikingów była rolnikami, którzy trzymali owce, świnie i bydło.",
            "Archeolodzy znaleźli małą czerwoną perełkę w wikińskim grobie w Anglii.",
            "Perełka przyjechała aż z Indii.",
            "Wikingowie byli więc nie tylko napastnikami, ale i kupcami."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um saqueador do mar vindo da Escandinávia; um modo de vida, não uma nacionalidade (Viking, viquingue/viking)",
            "a parte do norte da Europa formada pela Noruega, a Suécia e a Dinamarca (Scandinavia, Escandinávia)",
            "alguém que adora muitos deuses em vez de seguir o cristianismo (pagan, pagão)",
            "a ideia que os vikings tinham do céu (Valhalla)",
            "a assembleia viking onde se faziam as leis e se resolviam as disputas (the Thing)",
            "um objeto feito por pessoas no passado (artefact, artefacto/artefato)"
          ],
          "passage": [
            "Os vikings vinham da Escandinávia: da Noruega, da Suécia e da Dinamarca.",
            "A palavra Viking quer dizer saqueador do mar.",
            "Descreve um modo de vida, não um país.",
            "Os ataques viking à Inglaterra começaram no fim dos anos 700.",
            "Mais tarde, muitos vikings fixaram-se em terras inglesas.",
            "Os vikings eram pagãos.",
            "Adoravam deuses como Odin e Thor.",
            "Os guerreiros esperavam chegar a Valhalla, o céu dos vikings.",
            "Os vikings reuniam-se no Thing para fazer leis e resolver disputas.",
            "Quase todos os vikings eram agricultores, que criavam ovelhas, porcos e gado.",
            "Os arqueólogos encontraram uma pequena conta vermelha numa sepultura viking em Inglaterra.",
            "A conta tinha vindo de tão longe como a Índia.",
            "Por isso os vikings eram comerciantes, e não só saqueadores."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "duulaan badda ka yimid Scandinavia; waa hab nololeed, ma aha qaranimo",
            "qaybta waqooyiga Yurub ee ka kooban Norway, Sweden iyo Denmark",
            "qof caabuda ilaahyo badan oo aan Masiixiyadda raacin",
            "fikradda Vikings ee jannada",
            "shirkii Vikings ee sharciyada lagu sameeyo oo muranka lagu xalliyo",
            "shay dad waagii hore sameeyeen"
          ],
          "passage": [
            "Vikings waxay ka yimaaddeen Scandinavia: Norway, Sweden iyo Denmark.",
            "Erayga Viking macnaheedu waa duulaan badda ka yimid.",
            "Wuxuu sharraxayaa hab nololeed, ee ma aha dal.",
            "Duullaannadii Vikings ee England waxay bilaabmeen dabayaaqadii 700-meeyadii.",
            "Vikings badan ayaa kadib dhulalka Ingiriiska degay.",
            "Vikings waxay ahaayeen pagans.",
            "Waxay caabudeen ilaahyo sida Odin iyo Thor.",
            "Dagaalyahannadu waxay rajeeyeen inay gaaraan Valhalla, oo ah jannada Vikings.",
            "Vikings waxay the Thing ku kulmeen si ay sharciyo u sameeyaan oo muran u xalliyaan.",
            "Vikings badidood waxay ahaayeen beeraley oo haystay ido, doofaarro iyo lo'.",
            "Archaeologists waxay heleen kuul yar oo guduudan oo xabaal Viking ah oo England ku taal.",
            "Kuulku wuxuu ka yimid Hindiya ilaa halkaas.",
            "Markaa Vikings waxay ahaayeen ganacsato sidoo kalena duulaan."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "морський нападник зі Скандинавії; спосіб життя, а не національність (Viking)",
            "частина північної Європи, яку складають Норвегія, Швеція і Данія (Scandinavia)",
            "той, хто поклоняється багатьом богам, а не йде за християнством (pagan)",
            "уявлення вікінгів про небеса (Valhalla)",
            "збори вікінгів, де ухвалювали закони і вирішували спори (the Thing)",
            "річ, зроблена людьми в минулому (artefact)"
          ],
          "passage": [
            "Вікінги прийшли зі Скандинавії: Норвегії, Швеції і Данії.",
            "Слово «вікінг» означає морський нападник.",
            "Воно описує спосіб життя, а не країну.",
            "Набіги вікінгів на Англію почалися в кінці 700-х років.",
            "Багато вікінгів пізніше осіли на англійських землях.",
            "Вікінги були язичниками.",
            "Вони поклонялися богам, як-от Одіну і Тору.",
            "Воїни сподівалися дістатися Валгалли, небес вікінгів.",
            "Вікінги збиралися на тінг (the Thing), щоб ухвалювати закони і вирішувати спори.",
            "Більшість вікінгів були землеробами, які тримали овець, свиней і худобу.",
            "Археологи знайшли маленьку червону намистину в могилі вікінга в Англії.",
            "Намистина приїхала аж з Індії.",
            "Отже, вікінги були не тільки нападниками, а й торговцями."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "سکینڈے نیویا سے آنے والا سمندری حملہ آور؛ یہ ایک طرزِ زندگی تھا، کوئی قومیت نہیں (Viking)",
            "شمالی یورپ کا وہ حصہ جو ناروے، سویڈن اور ڈنمارک سے بنا ہے (Scandinavia)",
            "وہ شخص جو مسیحیت کے بجائے بہت سے دیوتاؤں کی پوجا کرے (pagan)",
            "وائکنگوں کے تصور کی جنت (Valhalla)",
            "وائکنگوں کا وہ اجتماع جہاں قانون بنائے اور جھگڑے طے کیے جاتے تھے (the Thing)",
            "ماضی کے لوگوں کی بنائی ہوئی کوئی چیز (artefact)"
          ],
          "passage": [
            "وائکنگ (Vikings) سکینڈے نیویا سے آئے: ناروے، سویڈن اور ڈنمارک سے۔",
            "لفظ Viking کا مطلب سمندری حملہ آور ہے۔",
            "یہ ایک طرزِ زندگی بتاتا ہے، کوئی ملک نہیں۔",
            "انگلینڈ پر وائکنگ حملے 700 کی دہائی کے آخر میں شروع ہوئے۔",
            "بہت سے وائکنگ بعد میں انگلینڈ کی زمینوں پر آ بسے۔",
            "وائکنگ pagans تھے۔",
            "وہ اوڈن (Odin) اور تھور (Thor) جیسے دیوتاؤں کی پوجا کرتے تھے۔",
            "جنگجو امید رکھتے تھے کہ وہ Valhalla، یعنی وائکنگوں کی جنت تک پہنچیں گے۔",
            "وائکنگ قانون بنانے اور جھگڑے طے کرنے کے لیے the Thing میں جمع ہوتے تھے۔",
            "زیادہ تر وائکنگ کسان تھے جو بھیڑیں، سور اور مویشی رکھتے تھے۔",
            "archaeologists کو انگلینڈ میں ایک وائکنگ قبر سے سرخ رنگ کا ایک چھوٹا موتی ملا۔",
            "یہ موتی اتنی دور، بھارت سے آیا تھا۔",
            "تو وائکنگ حملہ آور ہونے کے ساتھ ساتھ تاجر بھی تھے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Where did the Vikings come from?",
          paragraphs: [
            "The Vikings came from Scandinavia, the part of northern Europe that is now Norway, Sweden and Denmark. They did not come from Britain. The word Viking means sea raider, and it refers to a lifestyle, not a nationality: there were Vikings from each of the Scandinavian countries, and most people in Scandinavia were farmers who never went raiding at all.",
            "The Vikings arrived in a Britain that had already changed hands. The Romans left in 410, and the Anglo-Saxons began arriving soon after. In 597 the Pope sent Augustine of Canterbury to convert the Anglo-Saxons to Christianity, and by about 680 the conversion was complete. Viking raids began in 787, according to your lesson's timeline, and your lesson says that around 35,000 Danish Vikings raided and settled in English lands from the late 700s onwards.",
            "The Vikings were pagans. They worshipped the same gods that the Anglo-Saxons themselves had worshipped before they became Christian. That is one reason the two peoples understood each other better than you might expect, once the fighting stopped."
          ],
          tip: "Three countries, one word, one meaning: Norway, Sweden, Denmark; Viking; sea raider."
        },
        {
          heading: "Gods, Valhalla and the Thing",
          paragraphs: [
            "Your lesson names twelve gods in the Viking religion, each responsible for different things. Odin was the king of the gods. Thor was the god of thunder and fertility, usually shown with his hammer, Mjolnir. Loki was the god of mischief and chaos, often represented by a snake. Heimdall was the god of light and protection, who kept watch for invaders of Asgard, the home of the gods.",
            "Reaching Valhalla mattered enormously. Vikings believed it was a kind of heaven: a great hall where the bravest of the dead lived alongside the god Odin. Hold that belief, and the risks a Viking warrior took start to make sense, because a brave death was the way in.",
            "The Thing was the Viking version of a modern parliament. At the Thing, Vikings decided what the laws should be and discussed politics. Families could settle arguments there through debate, although sometimes the argument ended in a fight. The Thing lasted several days and had a festival atmosphere, with people drinking and setting up stalls to sell what they had made."
          ],
          tip: "Odin rules, Thor thunders with his hammer, Loki causes mischief, Heimdall keeps watch. Four gods, four jobs."
        },
        {
          heading: "Women and farming",
          paragraphs: [
            "Viking women had more rights than most other women of their time. A Viking woman could ask for a divorce if her husband was unfaithful. Your lesson points out that women in Britain could not do the same on equal terms until 1923, more than a thousand years later. Viking women were highly respected for their work in the home, such as cooking, making clothes and looking after children, and some went on raids and into battle alongside the men.",
            "Most Vikings, though, were farmers. They kept sheep, pigs and cattle, and used the wool to make clothes. They made bread and porridge, hunted wild animals such as boar for stew, and used honey to sweeten food and to make mead, a strong drink a little like beer. They were good fishermen, and fish formed a large part of their diet.",
            "Your lesson asked you to decide whether farming was the most important part of Viking life. Think about what each part gave them: farming gave food, the Thing gave law, religion gave meaning, and the respect shown to women shaped family life. A good answer picks one and explains why, then admits what the others gave too."
          ],
          worked: {
            q: "Was farming the most important part of Viking life? Plan a one-sentence answer with a reason.",
            steps: [
              "Decide: agree or disagree. Suppose you agree.",
              "Give the reason: without food from farming, no one could go to the Thing, worship or raid.",
              "Admit the other side in a few words: although the Thing mattered because it kept the peace.",
              "Put it together in one sentence."
            ],
            answer: "I agree that farming was the most important part of Viking life, because everything else depended on having food, although the Thing mattered because it kept the peace."
          }
        },
        {
          heading: "What a bead can tell us",
          paragraphs: [
            "At Repton, in Derbyshire, archaeologists have found a Viking camp built around a monastery, with a mass grave holding 264 bodies dated to the 870s, silver Arab coins dated to between 872 and 874, gaming pieces, axe heads, ship's nails and a Thor pendant. Among the finds was a carnelian bead: a small, shiny red stone bead that Vikings sometimes wore as jewellery.",
            "The interesting part is that carnelian did not come from Scandinavia at all. This bead came from Gujarat, in India. It had crossed thousands of miles to get here. Trader after trader had handled it, first in the Islamic world, then the Byzantine Empire, then eastern Europe, until at last it ended up with a Viking in England. The same kind of bead has been found at a Viking fort at Vypovzyv, in Ukraine. At Birka in Sweden a woman was buried with carnelian beads and a ring with Arabic writing. At Gotland a hoard held 14,295 coins, most of them Islamic.",
            "This shows that the Vikings were not just fierce warriors who raided other countries. They were also skilled traders who used long routes along the rivers of Russia and towards Constantinople. They swapped furs, amber and even enslaved people for luxury items such as beads, silk and silver coins. Work out where a bead was made, work out where it was finally buried, and you have two fixed points on a trade route. That is how archaeologists have traced Viking journeys as far as Asia, the Middle East and North Africa."
          ],
          tip: "One small object, three big inferences: the Vikings traded, they travelled far, and they met people from many cultures."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which three countries did the Vikings mostly come from?", options: ["Norway, Sweden and Denmark", "Norway, Germany and Britain", "Sweden, Finland and Russia", "Denmark, France and the Netherlands"], answer: 0, why: "Scandinavia is Norway, Sweden and Denmark. The Vikings did not come from Britain.",
          feedback: [
            "",
            "The Vikings did not come from Britain: they sailed to Britain. Nor from Germany. The three Viking homelands were the Scandinavian countries: Norway, Sweden and Denmark.",
            "Vikings travelled through Russia and traded there, but they came from Scandinavia: Norway, Sweden and Denmark. Finland is not one of the three.",
            "Vikings raided France and the Netherlands, but they came from Scandinavia. The three homelands are Norway, Sweden and Denmark."
          ] },
        { kind: "gap", q: "The word Viking means sea ___.", answer: "raider", options: ["raider", "farmer", "king"], why: "Viking means sea raider. It describes a way of life, not a nationality.",
          feedback: {
            "farmer": "Most people in Scandinavia were farmers, but that is not what the word means. Viking means sea raider: someone who went to sea to raid.",
            "king": "Vikings had kings and jarls, but the word Viking itself means sea raider. It describes what a person did, not their rank."
          } },
        { kind: "mcq", q: "What was the Thing?", options: ["A meeting where Vikings decided laws and settled arguments", "The Viking name for heaven", "Thor's hammer", "A Viking warship with a dragon's head"], answer: 0, why: "The Thing was the Viking version of a parliament: laws were decided and arguments settled there, and it had a festival atmosphere.",
          feedback: [
            "",
            "The Viking heaven was Valhalla, where warriors hoped to live with Odin. The Thing was the meeting where laws were made and arguments settled.",
            "Thor's hammer was called Mjolnir. The Thing was the meeting where Vikings decided laws and settled arguments.",
            "A Viking warship is a longship. The Thing was not a ship but a meeting, the Viking version of a parliament."
          ] }
      ],
      modules: [
        {
          title: "The Viking gods",
          task: {
            kind: "match",
            q: "Match each god or place to its description.",
            pairs: [
              ["Odin", "King of the gods"],
              ["Thor", "God of thunder, shown with his hammer Mjolnir"],
              ["Loki", "God of mischief and chaos, shown as a snake"],
              ["Heimdall", "God of light and protection, who keeps watch for invaders"],
              ["Valhalla", "The Viking heaven, where warriors hoped to live after death"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Valhalla is the only place in the list; everything else is a god. Match it to the heaven.",
                "Thor is the one with the hammer: think of thunder.",
                "Loki makes mischief and is shown as a snake.",
                "Of the two left, Odin is the king and Heimdall is the watchman."
              ],
              example: {
                q: "Match the Roman gods Jupiter, Neptune and Mars to: king of the gods; god of the sea; god of war.",
                steps: ["Jupiter is the king of the Roman gods.", "Neptune rules the sea.", "Mars is war."],
                answer: "Jupiter: king of the gods; Neptune: god of the sea; Mars: god of war"
              }
            },
            core: { hint: "One is a place, four are gods. The hammer belongs to the thunder god." },
            stretch: { extend: "Explain how the belief in Valhalla might have changed the way a Viking warrior behaved in battle." }
          },
          explain: "Say, in one sentence, why reaching Valhalla mattered so much to Viking warriors.",
          why: "Odin was king of the gods; Thor the thunder god with Mjolnir; Loki the god of mischief, shown as a snake; Heimdall the watchman god of light and protection; Valhalla the heaven where warriors hoped to live with Odin."
        },
        {
          title: "What does the find tell us?",
          task: {
            kind: "mcq",
            q: "A carnelian bead found in a Viking grave at Repton, in England, was made from stone that came from Gujarat, in India. What does this find tell us about the Vikings?",
            options: [
              "They were part of trade routes that reached far beyond Scandinavia",
              "They sailed their longships all the way to India to raid it",
              "They made their own beads from stone found in England",
              "They had no interest in jewellery or wealth"
            ],
            answer: 0,
            why: "The bead changed hands over and over again, in the Islamic world, the Byzantine Empire and eastern Europe, long before any Viking owned it. It shows they were traders connected to a wide world, not only raiders.",
            feedback: [
              "",
              "The bead travelled through the hands of many traders; it does not mean a Viking sailed to India. Archaeologists infer trade along long routes, not a raid on India.",
              "The stone is carnelian, which does not come from England or Scandinavia. It came from Gujarat in India, so the Vikings must have got it through trade.",
              "The opposite: Vikings wore beads to show wealth and status. A bead carried thousands of miles tells us they valued such things and traded for them."
            ]
          },
          contexts: [
            { label: "Silk at Birka", q: "In a grave at Birka, in Sweden, archaeologists found fragments of silk that came from Byzantium and central Asia. What does this find tell us about the Vikings?", why: "Silk was not made in Scandinavia. Its presence in a Viking grave shows that goods reached the Vikings along long trade routes from the east." },
            { label: "Arab coins at Repton", q: "At the Viking camp at Repton, in England, archaeologists found silver coins with Arabic writing, made in the Islamic world. What does this find tell us about the Vikings?", why: "Coins from the Islamic world reached England in Viking hands, so the Vikings were connected to trade routes stretching far beyond Scandinavia." },
            { label: "A ring at Birka", q: "A woman buried at Birka, in Sweden, wore a ring with Arabic writing that may have come from as far away as Baghdad. What does this find tell us about the Vikings?", why: "A ring from Baghdad in a Swedish grave shows the Vikings were part of trade routes reaching the Islamic world." }
          ],
          levels: {
            support: {
              steps: [
                "Ask where the object was made, and where it was found.",
                "If those two places are far apart, the object travelled. Ask how: through traders, one to the next.",
                "An inference is a good guess based on the evidence. What does a far-travelled object suggest about the people who owned it?",
                "Pick the option about trade and distance, not about raiding India or about English stone."
              ],
              example: {
                q: "A Roman villa in Britain had a floor made with marble from Italy. What does this tell us about the Romans in Britain?",
                steps: ["Made in Italy, found in Britain: the marble travelled.", "It travelled by trade and transport across the empire.", "Inference: Romans in Britain were connected to the rest of the empire and had the wealth to import luxury goods."],
                answer: "The Romans in Britain were connected to the wider empire and could afford to import luxury materials."
              }
            },
            core: { hint: "Where was it made, where was it found, and how did it get from one to the other?" },
            stretch: { extend: "Explain how archaeologists could use many finds like this one to draw a map of Viking trade routes, and what the limits of such a map would be." }
          },
          explain: "Say, in one sentence, why one small bead changes the picture of the Vikings as only raiders.",
          why: "An object made in one place and found thousands of miles away shows trade and travel. The Vikings were traders connected to the Islamic world, Byzantium and eastern Europe, as well as raiders."
        },
        {
          title: "Was farming the most important part of Viking life?",
          task: {
            kind: "written",
            q: "Farming was the most important part of Viking life. Do you agree? Write one paragraph of four to six sentences giving your judgement and your reasons.",
            criteria: [
              "I say clearly whether I agree or disagree.",
              "I give at least one reason, using the word because.",
              "I mention at least one other part of Viking life (religion, the Thing, or the role of women) and say why it mattered.",
              "I finish with a sentence that explains why my choice matters more than the others."
            ],
            model: "I agree that farming was the most important part of Viking life. This is because most Vikings were farmers who kept sheep, pigs and cattle, and without their food no one could have gone raiding, trading or to the Thing. Religion was also important, because Vikings wanted to reach Valhalla and that shaped how warriors behaved. The Thing mattered too, because it kept the peace by letting families settle arguments by debate. However, farming matters most, because laws and beliefs are no use to people who are starving."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: I agree / disagree that farming was the most important part of Viking life.",
                "Sentence 2: This is because… Say what farming gave the Vikings.",
                "Sentences 3 and 4: Name one or two other parts of Viking life and say what each gave.",
                "Sentence 5: However, … matters most because… Explain why your choice beats the others."
              ],
              example: {
                q: "Sport was the most important part of life at a school. Do you agree? Plan a paragraph.",
                steps: ["Decide: disagree.", "Reason: lessons teach the skills pupils need for life.", "Other side: sport keeps people healthy and builds teams.", "Judgement: lessons matter most because every pupil needs them, not only those who like sport."],
                answer: "I disagree that sport was most important, because lessons teach skills everyone needs; sport matters for health and teamwork, however lessons matter most because every pupil needs them."
              }
            },
            core: { hint: "Decide, give a reason with because, mention one other part of Viking life, then explain why yours wins." },
            stretch: { extend: "Argue the opposite of what you wrote: choose religion or the Thing as the most important and give two reasons." }
          },
          explain: "Say, in one sentence, which part of Viking life you chose and the main reason.",
          why: "A strong answer makes a clear choice, backs it with a reason, shows it has thought about the other parts of Viking life, and explains why the chosen part matters more."
        }
      ]
    },

    /* ───────────── 4 · Lindisfarne ───────────── */
    {
      key: "lindisfarne", n: 4, title: "What happened at Lindisfarne?",
      lead: "The raid on the Holy Island in 793, what a monk's account says about it, and how to infer from a source and back your inference with evidence.",
      covers: [3],
      pretext: {
        words: [
          { word: "Lindisfarne", means: "a small island off the north-east coast of England, also called Holy Island", sentence: "You can only walk to Lindisfarne when the tide is low." },
          { word: "monastery", means: "a place where monks live, pray and work", sentence: "The monks at the monastery made beautiful holy books." },
          { word: "monk", means: "a religious man who gives his life to prayer and work", sentence: "A monk did not carry weapons." },
          { word: "raid", means: "a sudden attack to steal treasure and goods", sentence: "The Vikings came to Lindisfarne on a raid." },
          { word: "infer", means: "to make a good guess from clues the source gives", sentence: "We can infer that the monks were not ready to fight." },
          { word: "evidence", means: "the words or details in the source that support your inference", sentence: "Give evidence from the source for each inference." }
        ],
        passage: [
          "Lindisfarne is a small island off the north-east coast of England.",
          "It is also called Holy Island.",
          "A Christian monastery stood there.",
          "Monks lived there, prayed, and made holy books.",
          "The island felt safe, because you could only reach it at low tide.",
          "In the year 793, Viking warriors sailed there in longships.",
          "They attacked the monastery and took its treasure.",
          "The monks did not fight back.",
          "Some monks were killed and others were taken away in chains.",
          "This was one of the first Viking raids on England.",
          "Historians call it the start of the Viking Age.",
          "A monk later wrote an account of the raid.",
          "We can infer things from his words that he does not say directly."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "جزيرة صغيرة قبالة الساحل الشمالي الشرقي لإنجلترا، وتُسمّى أيضًا الجزيرة المقدّسة (Lindisfarne)",
            "مكان يعيش فيه الرهبان ويصلّون ويعملون (monastery)",
            "رجل متديّن يجعل حياته للصلاة والعمل (monk)",
            "هجوم مفاجئ لسرقة الكنوز والسلع (raid)",
            "أن تُحسن الحَدْس من قرائن يعطيها المصدر (infer)",
            "الكلمات أو التفاصيل في المصدر التي تسند استنتاجك (evidence)"
          ],
          "passage": [
            "لينديسفارن (Lindisfarne) جزيرة صغيرة قبالة الساحل الشمالي الشرقي لإنجلترا.",
            "وتُسمّى أيضًا الجزيرة المقدّسة.",
            "وكان فيها دير مسيحي.",
            "وكان الرهبان يعيشون فيه ويصلّون ويصنعون الكتب المقدّسة.",
            "وكانت الجزيرة تبدو آمنة، لأنك لا تستطيع الوصول إليها إلّا في الجَزْر.",
            "وفي سنة 793 أبحر إليها محاربو الفايكنغ في سفنهم الطويلة.",
            "فهجموا على الدير وأخذوا كنزه.",
            "ولم يقاوم الرهبان.",
            "فقُتل بعض الرهبان، وأُخِذ آخرون في السلاسل.",
            "وكان هذا من أوّل غزوات الفايكنغ على إنجلترا.",
            "ويسمّيه المؤرّخون بداية عصر الفايكنغ.",
            "وكتب راهب بعد ذلك وصفًا للغزوة.",
            "ونحن نستطيع أن نستنتج من كلامه أشياء لم يقلها مباشرةً."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "mała wyspa u północno-wschodniego wybrzeża Anglii, zwana też Holy Island (Lindisfarne)",
            "miejsce, w którym mnisi mieszkają, modlą się i pracują (monastery)",
            "zakonnik, który oddaje swoje życie modlitwie i pracy (monk)",
            "nagły atak, żeby ukraść skarby i dobra (raid)",
            "wyciągnąć sensowny wniosek ze wskazówek, które daje źródło (infer)",
            "słowa albo szczegóły w źródle, które potwierdzają twój wniosek (evidence)"
          ],
          "passage": [
            "Lindisfarne to mała wyspa u północno-wschodniego wybrzeża Anglii.",
            "Nazywa się też Holy Island, czyli Święta Wyspa.",
            "Stał tam chrześcijański klasztor.",
            "Mieszkali tam mnisi, modlili się i robili święte księgi.",
            "Wyspa wydawała się bezpieczna, bo dotrzeć do niej można było tylko przy odpływie.",
            "W roku 793 przypłynęli tam na długich łodziach wojownicy wikingów.",
            "Zaatakowali klasztor i zabrali jego skarby.",
            "Mnisi się nie bronili.",
            "Część mnichów zabito, a innych uprowadzono w kajdanach.",
            "To był jeden z pierwszych najazdów wikingów na Anglię.",
            "Historycy nazywają to początkiem epoki wikingów.",
            "Jeden z mnichów opisał później ten najazd.",
            "Z jego słów możemy wywnioskować rzeczy, których nie mówi wprost."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma pequena ilha ao largo da costa nordeste de Inglaterra, também chamada Holy Island (Lindisfarne)",
            "um lugar onde os monges vivem, rezam e trabalham (monastery, mosteiro)",
            "um homem religioso que dá a sua vida à oração e ao trabalho (monk, monge)",
            "um ataque de surpresa para roubar tesouros e bens (raid, ataque)",
            "fazer uma boa suposição a partir das pistas que a fonte dá (infer, inferir)",
            "as palavras ou os detalhes da fonte que apoiam a tua inferência (evidence, provas)"
          ],
          "passage": [
            "Lindisfarne é uma pequena ilha ao largo da costa nordeste de Inglaterra.",
            "Também se chama Holy Island, a Ilha Santa.",
            "Havia lá um mosteiro cristão.",
            "Viviam lá monges, que rezavam e faziam livros sagrados.",
            "A ilha parecia segura, porque só se conseguia chegar lá na maré baixa.",
            "No ano 793, guerreiros viking foram até lá nos seus barcos longos.",
            "Atacaram o mosteiro e levaram o seu tesouro.",
            "Os monges não responderam ao ataque.",
            "Alguns monges foram mortos e outros foram levados acorrentados.",
            "Este foi um dos primeiros ataques viking à Inglaterra.",
            "Os historiadores chamam-lhe o início da Era Viking.",
            "Mais tarde, um monge escreveu um relato do ataque.",
            "Podemos inferir das palavras dele coisas que ele não diz diretamente."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "jasiirad yar oo ka baxsan xeebta waqooyi-bari ee England, oo sidoo kale loo yaqaan Holy Island",
            "meel monks ku nool yihiin, ku tukadaan oo ka shaqeeyaan",
            "nin diineed oo noloshiisa u huray tukasho iyo shaqo",
            "weerar degdeg ah oo hanti iyo alaab lagu xado",
            "inaad malo wanaagsan ka samaysato tilmaamaha isha bixiso",
            "erayada ama tilmaamaha isha ku jira oo taageeraya waxa aad ka soo saartay"
          ],
          "passage": [
            "Lindisfarne waa jasiirad yar oo ka baxsan xeebta waqooyi-bari ee England.",
            "Sidoo kale waxaa loo yaqaan Holy Island.",
            "Monastery Masiixi ah ayaa halkaas taagnaa.",
            "Monks halkaas ayay ku noolaayeen, way tukadeen, buugag quduus ahna way sameeyeen.",
            "Jasiiraddu way ammaan u ekayd, maxaa yeelay waxaa la gaari karay oo keliya marka baddu hoos u dhacdo.",
            "Sanadkii 793, dagaalyahanno Viking ah waxay halkaas ku tageen doonniyo dhaadheer.",
            "Waxay weerareen monastery-ga oo hantidiisii way qaateen.",
            "Monks-ku dib uma dagaallamin.",
            "Monks qaar waa la dilay, kuwa kalena silsilado lagu xiray oo waa la kaxeeyay.",
            "Kan wuxuu ahaa mid ka mid ah duullaannadii Viking ee ugu horreeyay England.",
            "Taariikhyahannadu waxay ugu yeeraan bilowgii Xilligii Vikings.",
            "Monk ayaa kadib qoray sheeko duullaanka ku saabsan.",
            "Waxyaalo ayaan ka soo saari karnaa erayadiisa oo aanu si toos ah sheegin."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "маленький острів біля північно-східного берега Англії, який також називають Святим островом (Lindisfarne)",
            "місце, де монахи живуть, моляться і працюють (monastery)",
            "релігійний чоловік, який віддає своє життя молитві і праці (monk)",
            "раптовий напад, щоб украсти скарби й товари (raid)",
            "зробити добрий висновок із підказок, які дає джерело (infer)",
            "слова або подробиці в джерелі, які підтверджують ваш висновок (evidence)"
          ],
          "passage": [
            "Ліндісфарн (Lindisfarne) — маленький острів біля північно-східного берега Англії.",
            "Його також називають Святим островом.",
            "Там стояв християнський монастир.",
            "Там жили монахи, молилися і робили святі книги.",
            "Острів здавався безпечним, бо дістатися до нього можна було лише під час відпливу.",
            "У 793 році воїни вікінгів припливли туди на довгих кораблях.",
            "Вони напали на монастир і забрали його скарби.",
            "Монахи не захищалися.",
            "Деяких монахів убили, а інших забрали в кайданах.",
            "Це був один із перших набігів вікінгів на Англію.",
            "Історики називають це початком епохи вікінгів.",
            "Один монах пізніше написав розповідь про цей набіг.",
            "З його слів ми можемо зробити висновки про речі, яких він не каже прямо."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "انگلینڈ کے شمال مشرقی ساحل سے ذرا دور ایک چھوٹا جزیرہ، جسے Holy Island بھی کہتے ہیں (Lindisfarne)",
            "وہ جگہ جہاں راہب رہتے، دعا کرتے اور کام کرتے ہیں (monastery)",
            "وہ مذہبی شخص جو اپنی زندگی دعا اور کام کے لیے وقف کر دے (monk)",
            "خزانہ اور سامان لوٹنے کے لیے اچانک حملہ (raid)",
            "source کے دیے ہوئے اشاروں سے کوئی معقول نتیجہ نکالنا (infer)",
            "source کے وہ الفاظ یا تفصیلات جو آپ کے نتیجے کی تائید کرتے ہیں (evidence)"
          ],
          "passage": [
            "لنڈسفارن (Lindisfarne) انگلینڈ کے شمال مشرقی ساحل سے ذرا دور ایک چھوٹا جزیرہ ہے۔",
            "اسے Holy Island بھی کہا جاتا ہے۔",
            "وہاں ایک مسیحی monastery تھا۔",
            "وہاں راہب رہتے تھے، دعا کرتے تھے اور مقدس کتابیں بناتے تھے۔",
            "جزیرہ محفوظ لگتا تھا، کیونکہ وہاں صرف بھاٹے کے وقت پہنچا جا سکتا تھا۔",
            "سن 793 میں وائکنگ جنگجو اپنی لمبی کشتیوں (longships) میں وہاں پہنچے۔",
            "انھوں نے monastery پر حملہ کیا اور اس کا خزانہ لے گئے۔",
            "راہبوں نے جوابی لڑائی نہیں کی۔",
            "کچھ راہب مارے گئے اور کچھ کو زنجیروں میں باندھ کر لے جایا گیا۔",
            "یہ انگلینڈ پر وائکنگوں کے پہلے حملوں میں سے ایک تھا۔",
            "مؤرخ اسے وائکنگ دور کا آغاز کہتے ہیں۔",
            "ایک راہب نے بعد میں اس حملے کا بیان لکھا۔",
            "ہم اس کے الفاظ سے وہ باتیں بھی اخذ کر سکتے ہیں جو وہ سیدھے طور پر نہیں کہتا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Why would anyone attack this island?",
          paragraphs: [
            "Lindisfarne is a small island off the north-east coast of England. Its other name is Holy Island, and it earned that name: the monastery standing on it was one of the most important Christian places in the country. The monks who lived there spent their days praying and copying out holy books by hand. The island can be walked to only at low tide, which is part of why it felt so safe.",
            "In the year 793, Viking warriors from Scandinavia sailed across the sea in their longships and attacked Lindisfarne. The monks did not fight back. The Vikings wanted the treasure and valuables of the monastery, and they took them. It was one of the first Viking raids on England, and historians often call it the beginning of the Viking Age.",
            "Why a monastery? Think like a raider. A monastery held gold and silver for its church, it was full of men who had given up fighting, and it stood by the sea where a longship could land and leave quickly. To a Viking it was rich, undefended and easy to reach."
          ],
          tip: "Three reasons a monastery was a target: rich, undefended, by the sea. You will need them for inference questions."
        },
        {
          heading: "A monk's account",
          paragraphs: [
            "The best-known description of the raid was written by a monk some years afterwards. Your lesson prints it as the source for your progress check. He writes that the Vikings came to the church of Lindisfarne, “dug up the altars and seized all the treasures of the holy church”. He says they killed some of the brothers, that “some they took away with them in chains”, and that “some they drowned in the sea”.",
            "Notice who is writing. The monk was on the side of the people who were attacked, and he wrote for other Christians. That does not make him wrong, but it does shape his words: the Vikings are shown only as destroyers, and nothing is said about why they came or who they were.",
            "That is exactly why this source is so good for practising inference. It tells us some things directly, and it lets us work out other things from the details it chooses."
          ],
          quote: { text: "dug up the altars and seized all the treasures of the holy church", source: "A monk's account of the raid on Lindisfarne, written in the Middle Ages, as printed in your lesson" },
          tip: "When you read a source, ask who wrote it and for whom. The monk's side of the story is one side."
        },
        {
          heading: "Inferring from sources",
          paragraphs: [
            "Inferring from sources is one of the most important skills in history, because it lets us understand more about the time and the people than the source says in so many words. An inference is a good guess about what is happening, based on what we can read or see. The key rule from your lesson: you should not be able to see or read your inference in the source. If the source states it, that is information, not an inference.",
            "Try it on an everyday sentence. Suppose a source said: a boy walked home in the rain with his coat open and his umbrella still rolled up. The source does not say the boy did not mind getting wet, but we can infer it, because he did nothing to stay dry. We can also infer he was not in a hurry, because he walked.",
            "Now the raid. From the fact that the Vikings arrived armed with axes, swords and shields, we can infer that they came expecting to fight, not to trade. From the fact that the monks could not defend themselves, we can infer that they were not prepared for an attack, or were not the kind of people who fought. From the fact that the raiders took a great deal of treasure, we can infer that Lindisfarne was a rich place, because there was plenty there to take."
          ],
          worked: {
            q: "What can you infer about the Vikings from the monk's words “some they took away with them in chains”?",
            steps: [
              "Read the words: people were taken away, and they were in chains.",
              "Ask what the source does not say but suggests. Why take people away? To sell them or to make them work.",
              "Write the inference: I can infer that the Vikings wanted captives as well as treasure.",
              "Give the evidence: the source says some monks were taken away in chains."
            ],
            answer: "I can infer that the Vikings wanted captives as well as treasure. Evidence from the source that shows me this: “some they took away with them in chains”."
          },
          tip: "If you can point to your idea in the source, it is information. If you worked it out from clues, it is an inference."
        },
        {
          heading: "Writing an inference with evidence",
          paragraphs: [
            "Your progress check asks for two inferences about what the Vikings were like, each backed with a quote from the source. The lesson gives you two sentence starters to use in turn: I can infer that… and Evidence from the source that shows me this…",
            "Keep the pair together. First the inference, in your own words, saying something the source does not state. Then the evidence: a short quotation, in quotation marks, copied exactly. The quotation should be the detail that made you think of the inference, not the whole source.",
            "A common mistake is to quote first and then repeat the quote in different words. That is description, not inference. Another is to make a guess the source cannot support, such as saying the Vikings were poor. Check that every inference has a clue behind it."
          ],
          tip: "Inference, then evidence. Two of each. Short quotations in quotation marks."
        }
      ],
      gate: [
        { kind: "numeric", q: "In which year did the Vikings attack Lindisfarne?", answer: 793, tolerance: 0, units: "", why: "The raid on Lindisfarne was in 793. It is often called the beginning of the Viking Age.", check: "793",
          misconceptions: [
            { answer: 787, says: "787 is the year your lesson's timeline gives for the first Viking raids. The famous attack on the monastery at Lindisfarne came six years later, in 793.", check: "793 - 6" },
            { answer: 739, says: "You may have swapped the last two digits. The raid on Lindisfarne was in 793.", check: "700 + 39" }
          ] },
        { kind: "mcq", q: "What kind of people lived at Lindisfarne when the Vikings attacked?", options: ["Monks", "Soldiers", "Viking settlers", "Kings and their courts"], answer: 0, why: "Lindisfarne was a monastery. Monks lived there, prayed and made holy books; they did not fight back.",
          feedback: [
            "",
            "There were no soldiers at Lindisfarne, which is one reason the monks could not defend themselves. It was a monastery, home to monks.",
            "The Vikings were the attackers, not the people living there. The island was home to Christian monks.",
            "No king lived at Lindisfarne. It was a holy island with a monastery, and the people living there were monks."
          ] },
        { kind: "gap", q: "An ___ is a good guess based on what the source shows, which the source does not state directly.", answer: "inference", options: ["inference", "origin", "opinion"], why: "An inference is worked out from clues in the source; it is not written in the source itself.",
          feedback: {
            "origin": "Origin is the O in NOP: where and when a source is from and who made it. A good guess worked out from clues in the source is an inference.",
            "opinion": "An opinion is what you think, with or without evidence. An inference is tied to the source: it is a guess based on the clues the source gives."
          } }
      ],
      modules: [
        {
          title: "What can you infer?",
          task: {
            kind: "mcq",
            q: "A source about the raid says that the Vikings took a great deal of gold from the monastery. What can you infer from this?",
            options: [
              "Lindisfarne was a wealthy place",
              "The monks were ready to fight",
              "The Vikings were poor farmers",
              "The raid happened at night"
            ],
            answer: 0,
            why: "If there was a great deal of gold to take, there must have been a great deal there. The source does not say Lindisfarne was rich, but the detail lets us infer it.",
            feedback: [
              "",
              "Nothing in the detail about gold suggests the monks fought. A source about treasure being taken tells us about the place that held the treasure: it was wealthy.",
              "The source tells us what the Vikings took, not what they owned at home. The inference it supports is about Lindisfarne: a place with a great deal of gold was wealthy.",
              "The source says nothing about the time of day, so that would be a guess with no clue behind it. The clue here is the gold, and it points to Lindisfarne being wealthy."
            ]
          },
          contexts: [
            { label: "Silver and jewelled books", q: "A source about the raid says the Vikings carried off chests of silver and books covered in jewels. What can you infer from this?", why: "Chests of silver and jewelled books tell us what the monastery owned: it was a wealthy place." },
            { label: "Ships low in the water", q: "A source about the raid says the Vikings' longships sat low in the water from the weight of what they had taken. What can you infer from this?", why: "Ships weighed down with plunder show how much there was to take, so the place they took it from was wealthy." },
            { label: "Returned the next year", q: "A source says that after the raid, other Viking crews heard about the treasure and sailed to raid monasteries too. What can you infer from this?", why: "Crews would not follow unless the first raid had been worth it, so we can infer the monastery was wealthy." }
          ],
          levels: {
            support: {
              steps: [
                "Underline the clue in the source: what was taken, how much, or what it did to the raiders.",
                "Ask what must have been true for that clue to happen.",
                "Cross out any option the source gives no clue about at all, such as the time of day or the monks fighting.",
                "Choose the option that the clue supports."
              ],
              example: {
                q: "A source says a shopkeeper counted the day's money for a very long time. What can you infer: the shop was busy, the shop was closed, or the shopkeeper was tall?",
                steps: ["Clue: counting took a long time.", "What must be true? There was a lot of money to count.", "A lot of money means many customers: the shop was busy. Nothing points to closed or tall."],
                answer: "The shop was busy."
              }
            },
            core: { hint: "Ask what must have been true for the clue to happen. If no clue points to an option, it is not an inference." },
            stretch: { extend: "Write a second, different inference from the same detail about gold, and explain what clue supports it." }
          },
          explain: "Say, in one sentence, how you know your answer is an inference and not information from the source.",
          why: "A great deal of gold taken means a great deal of gold was there. The source does not say Lindisfarne was wealthy, so this is an inference, and it is the only option the clue supports."
        },
        {
          title: "Two inferences with evidence",
          task: {
            kind: "written",
            q: "Using the monk's account of the raid on Lindisfarne, give TWO inferences about what the Vikings were like. For each one, write the inference and then the evidence from the source that shows it. Use the sentence starters I can infer that… and Evidence from the source that shows me this…",
            criteria: [
              "I give two different inferences, each something the source does not state directly.",
              "Each inference is about what the Vikings were like, not only about what happened.",
              "Each inference is followed by a short quotation from the source, in quotation marks.",
              "The quotation I choose is the detail that supports my inference, not the whole source."
            ],
            model: "I can infer that the Vikings were not Christians and did not respect the church. Evidence from the source that shows me this: they “dug up the altars and seized all the treasures of the holy church”, which a Christian would never do. I can infer that the Vikings wanted captives as well as treasure. Evidence from the source that shows me this: “some they took away with them in chains”, which suggests they planned to sell them or make them work."
          },
          levels: {
            support: {
              steps: [
                "Read the source and underline two details: for example, what they did to the altars, and what they did to some of the monks.",
                "For the first detail, ask: what does this tell me about the Vikings that the monk does not actually say? Write: I can infer that…",
                "Then write: Evidence from the source that shows me this… and copy the short detail in quotation marks.",
                "Do the same for the second detail. Check the two inferences are different."
              ],
              example: {
                q: "Give one inference with evidence from this source: the knights rode into the village in full armour, and the villagers hid their animals.",
                steps: ["Clue: full armour. Inference: the knights expected trouble or wanted to frighten people.", "Clue: villagers hid animals. Inference: the villagers feared the knights would take them.", "Write one pair: inference, then evidence in quotation marks."],
                answer: "I can infer that the villagers did not trust the knights. Evidence from the source that shows me this: the villagers hid their animals."
              }
            },
            core: { hint: "Two pairs: inference, then quoted evidence. The inference must be something the monk does not say outright." },
            stretch: { extend: "Explain one way the monk's point of view might limit what we can infer about the Vikings from his account." }
          },
          explain: "Say, in one sentence, why each inference needs a piece of evidence beside it.",
          why: "A strong answer gives two different inferences about the Vikings as people, each worked out from a clue and each backed by a short, exact quotation. The quotation proves the inference came from the source."
        },
        {
          title: "The raid in order",
          task: {
            kind: "order",
            q: "Put the events of the raid on Lindisfarne in the order they happened.",
            items: [
              "Monks live, pray and make holy books on the island, reached only at low tide",
              "Viking warriors sail from Scandinavia in longships",
              "They land on Lindisfarne armed with axes, swords and shields",
              "They attack the monastery and seize its treasure",
              "Some monks are killed and others taken away in chains",
              "A monk writes an account of the raid, and the Viking Age has begun"
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with life before the raid: the monks on their quiet island.",
                "The Vikings have to leave home before they can arrive: sail first, then land.",
                "They cannot take treasure before they attack, and the monks are harmed during the attack.",
                "The written account comes last: it was written after the raid."
              ],
              example: {
                q: "Put in order: the fire brigade arrives; a fire starts in a kitchen; the fire is put out; a report is written about the fire.",
                steps: ["The fire must start first.", "The brigade arrives, then puts it out.", "The report is written afterwards."],
                answer: "fire starts; brigade arrives; fire put out; report written"
              }
            },
            core: { hint: "Before the raid, the journey, the landing, the attack, the harm to the monks, and finally the account written afterwards." },
            stretch: { extend: "Explain why the written account, which comes last in time, is still our main source for the events that came before it." }
          },
          explain: "Say, in one sentence, why the monk's account must come last in the order.",
          why: "Life on the island came first; the Vikings sailed, landed, attacked and took treasure; monks were killed or taken; and the account was written afterwards, when the Viking Age had begun."
        }
      ]
    },

    /* ───────────── 5 · Danelaw and Alfred ───────────── */
    {
      key: "danelaw-alfred", n: 5, title: "Viking rule, the Danelaw and Alfred the Great",
      lead: "How the Vikings went from raiding to settling, what changed in the Danelaw, how Alfred of Wessex dealt with Guthrum, and whether he deserves the title Great.",
      covers: [4],
      pretext: {
        words: [
          { word: "settle", means: "to stay and live in a place", sentence: "After years of raiding, many Vikings began to settle in England." },
          { word: "Danelaw", means: "the large part of England where Viking rules and ways of life were followed", sentence: "York was the most important city in the Danelaw." },
          { word: "jarl", means: "a Viking lord", sentence: "Some towns were ruled by a Viking king or a jarl." },
          { word: "Wessex", means: "the Anglo-Saxon kingdom in the south of England ruled by Alfred", sentence: "Guthrum invaded Wessex and Alfred had to flee." },
          { word: "burh", means: "a town with high walls and guard towers built to protect people", sentence: "Alfred built burhs so people had somewhere safe to go." },
          { word: "significant", means: "important, with effects that lasted", sentence: "Was the Viking invasion significant? Give reasons." }
        ],
        passage: [
          "At first the Vikings came to Britain to raid.",
          "Later they began to stay and settle.",
          "In 865 a huge Viking army landed in England.",
          "The Vikings took over Northumbria, Mercia and East Anglia.",
          "The land under Viking rule became known as the Danelaw.",
          "York was its largest and most important city.",
          "The Vikings built settlements, traded and farmed the land.",
          "Only Wessex, in the south, held out against them.",
          "Its king was Alfred.",
          "The Viking leader Guthrum invaded Wessex, and Alfred fled to Somerset.",
          "Alfred built a new army and beat Guthrum at Edington in 878.",
          "Then he built walled towns called burhs to protect his people.",
          "Many people call him Alfred the Great."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "أن تبقى وتعيش في مكان (settle)",
            "الجزء الكبير من إنجلترا الذي كانت تُتّبع فيه قوانين الفايكنغ وطرق حياتهم (Danelaw)",
            "سيّد من سادة الفايكنغ (jarl)",
            "مملكة الأنجلوسكسونيين في جنوب إنجلترا التي حكمها ألفريد (Wessex)",
            "بلدة لها جُدُر عالية وأبراج حراسة بُنيت لحماية الناس (burh)",
            "مهمّ، له آثار باقية (significant)"
          ],
          "passage": [
            "جاء الفايكنغ إلى بريطانيا في أوّل الأمر للغزو.",
            "ثم بدأوا يبقون ويستقرّون.",
            "وفي 865 نزل جيش فايكنغي ضخم في إنجلترا.",
            "فاستولى الفايكنغ على نورثمبريا (Northumbria) ومرسيا (Mercia) وإيست أنجليا (East Anglia).",
            "وصارت الأرض التي تحت حكم الفايكنغ تُعرف بالدينلو (Danelaw).",
            "وكانت يورك (York) أكبر مدنها وأهمّها.",
            "وبنى الفايكنغ مستقرّات وتاجروا وزرعوا الأرض.",
            "ولم تصمد في وجههم إلّا ويسكس (Wessex) في الجنوب.",
            "وكان ملكها ألفريد (Alfred).",
            "وغزا زعيم الفايكنغ غوثرم (Guthrum) ويسكس، فهرب ألفريد إلى سومرست.",
            "فبنى ألفريد جيشًا جديدًا وهزم غوثرم في إدينغتون (Edington) في 878.",
            "ثم بنى بلدات مسوّرة تُسمّى البُره (burhs) لحماية أهله.",
            "وكثير من الناس يسمّيه ألفريد العظيم."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "zostać i zamieszkać w jakimś miejscu",
            "wielka część Anglii, w której obowiązywało wikińskie prawo i wikiński sposób życia (Danelaw)",
            "wikiński pan (jarl)",
            "anglosaskie królestwo w południowej Anglii, którym rządził Alfred (Wessex)",
            "miasto z wysokimi murami i wieżami strażniczymi, zbudowane, żeby chronić ludzi (burh)",
            "ważny, z następstwami, które trwały (significant)"
          ],
          "passage": [
            "Na początku wikingowie przybywali do Brytanii, żeby łupić.",
            "Później zaczęli zostawać i się osiedlać.",
            "W 865 roku w Anglii wylądowała ogromna armia wikingów.",
            "Wikingowie zajęli Northumbrię, Mercję i Anglię Wschodnią.",
            "Ziemie pod wikińskim panowaniem zaczęto nazywać Danelaw.",
            "York był jej największym i najważniejszym miastem.",
            "Wikingowie budowali osady, handlowali i uprawiali ziemię.",
            "Tylko Wessex na południu wytrzymał przeciwko nim.",
            "Jego królem był Alfred.",
            "Wikiński wódz Guthrum najechał Wessex, a Alfred uciekł do Somersetu.",
            "Alfred zbudował nową armię i pobił Guthruma przy Edington w 878 roku.",
            "Potem zbudował obwarowane miasta zwane burhs, żeby chronić swoich ludzi.",
            "Wielu ludzi nazywa go Alfredem Wielkim."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "ficar e viver num lugar (settle, fixar-se)",
            "a grande parte de Inglaterra onde se seguiam as leis e os modos de vida viking (Danelaw)",
            "um senhor viking (jarl)",
            "o reino anglo-saxão do sul de Inglaterra, governado por Alfred (Wessex)",
            "uma vila com muralhas altas e torres de vigia, construída para proteger as pessoas (burh)",
            "importante, com efeitos que duraram (significant, significativo)"
          ],
          "passage": [
            "Ao início, os vikings vinham à Grã-Bretanha para saquear.",
            "Mais tarde começaram a ficar e a fixar-se.",
            "Em 865 um enorme exército viking desembarcou em Inglaterra.",
            "Os vikings tomaram a Nortúmbria, a Mércia e a Anglia Oriental.",
            "As terras sob domínio viking passaram a ser conhecidas como Danelaw.",
            "York era a sua cidade maior e mais importante.",
            "Os vikings construíram povoações, comerciaram e cultivaram a terra.",
            "Só o Wessex, no sul, resistiu a eles.",
            "O seu rei era Alfred (Alfredo).",
            "O chefe viking Guthrum invadiu o Wessex, e Alfred fugiu para Somerset.",
            "Alfred formou um novo exército e venceu Guthrum em Edington, em 878.",
            "Depois construiu vilas muradas chamadas burhs para proteger o seu povo.",
            "Muita gente lhe chama Alfred o Grande."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "inaad meel joogto oo ku noolaato",
            "qaybta weyn ee England halkaasoo sharciyada iyo habnololeedka Vikings la raacay",
            "sayid Viking ah",
            "boqortooyadii Anglo-Saxon ee koonfurta England oo Alfred xukumay",
            "magaalo leh darbiyo dhaadheer iyo tiirar ilaalo oo dadka loo dhisay",
            "muhiim, oo leh saameyn muddo dheer socday"
          ],
          "passage": [
            "Markii hore Vikings waxay Biritayn u yimaaddeen duullaan.",
            "Kadib waxay bilaabeen inay joogaan oo degaan.",
            "865-kii ciidan Viking ah oo aad u weyn ayaa England ku degay.",
            "Vikings waxay la wareegeen Northumbria, Mercia iyo East Anglia.",
            "Dhulkii Vikings xukumay waxaa loo bixiyay Danelaw.",
            "York waxay ahayd magaaladiisa ugu weyn uguna muhiimsan.",
            "Vikings waxay degsiimooyin dhiseen, way ganacsadeen oo dhulka way beereen.",
            "Wessex oo keliya, oo koonfurta ku taal, ayaa iska caabbisay.",
            "Boqorkeedu wuxuu ahaa Alfred.",
            "Hoggaamiyihii Vikings Guthrum wuxuu Wessex ku duulay, Alfred-na Somerset ayuu u cararay.",
            "Alfred wuxuu ciidan cusub dhisay oo Guthrum ku garaacay Edington 878-dii.",
            "Kadibna wuxuu dhisay magaalooyin darbiyo leh oo la yiraahdo burhs si dadkiisa u ilaaliyo.",
            "Dad badan waxay ugu yeeraan Alfred the Great."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "залишитися й жити в якомусь місці (settle)",
            "велика частина Англії, де діяли правила і спосіб життя вікінгів (Danelaw)",
            "вікінзький володар (jarl)",
            "англосаксонське королівство на півдні Англії, яким правив Альфред (Wessex)",
            "місто з високими стінами і вартовими вежами, побудоване, щоб захищати людей (burh)",
            "важливий, із наслідками, які тривали (significant)"
          ],
          "passage": [
            "Спершу вікінги приходили до Британії грабувати.",
            "Пізніше вони почали залишатися й осідати.",
            "У 865 році в Англії висадилося величезне військо вікінгів.",
            "Вікінги захопили Нортумбрію, Мерсію і Східну Англію.",
            "Землю під владою вікінгів стали називати Данелаг (Danelaw).",
            "Йорк (York) був її найбільшим і найважливішим містом.",
            "Вікінги будували оселі, торгували й обробляли землю.",
            "Лише Вессекс (Wessex) на півдні тримався проти них.",
            "Його королем був Альфред.",
            "Вождь вікінгів Гутрум (Guthrum) напав на Вессекс, і Альфред утік до Сомерсета.",
            "Альфред зібрав нове військо і розбив Гутрума при Едінгтоні (Edington) у 878 році.",
            "Потім він побудував обнесені стінами міста, які називали бургами (burhs), щоб захищати своїх людей.",
            "Багато людей називають його Альфредом Великим."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "کسی جگہ رک کر رہنے لگنا (settle)",
            "انگلینڈ کا وہ بڑا حصہ جہاں وائکنگوں کے قانون اور طرزِ زندگی چلتے تھے (Danelaw)",
            "ایک وائکنگ سردار (jarl)",
            "جنوبی انگلینڈ کی اینگلو سیکسن بادشاہت جس پر الفریڈ کی حکومت تھی (Wessex)",
            "اونچی دیواروں اور پہرے کے میناروں والا قصبہ، جو لوگوں کی حفاظت کے لیے بنایا گیا (burh)",
            "اہم، جس کے اثر دیر تک رہے (significant)"
          ],
          "passage": [
            "پہلے پہل وائکنگ برطانیہ میں لوٹ مار کے لیے آتے تھے۔",
            "بعد میں وہ یہیں رکنے اور بسنے لگے۔",
            "865 میں وائکنگوں کی ایک بہت بڑی فوج انگلینڈ میں اتری۔",
            "وائکنگوں نے نارتھمبریا، مرشیا اور ایسٹ اینگلیا پر قبضہ کر لیا۔",
            "وائکنگ حکومت کے نیچے آنے والی زمین Danelaw کے نام سے جانی گئی۔",
            "یارک (York) اس کا سب سے بڑا اور سب سے اہم شہر تھا۔",
            "وائکنگوں نے بستیاں بنائیں، تجارت کی اور زمین پر کھیتی کی۔",
            "صرف جنوب میں ویسیکس (Wessex) ان کے سامنے ڈٹا رہا۔",
            "اس کا بادشاہ الفریڈ (Alfred) تھا۔",
            "وائکنگ سردار گتھرم (Guthrum) نے ویسیکس پر حملہ کیا، اور الفریڈ سمرسیٹ کی طرف نکل گیا۔",
            "الفریڈ نے نئی فوج بنائی اور 878 میں ایڈنگٹن (Edington) میں گتھرم کو ہرا دیا۔",
            "پھر اس نے اپنے لوگوں کی حفاظت کے لیے دیواروں والے قصبے بنائے، جنھیں burhs کہتے ہیں۔",
            "بہت لوگ اسے الفریڈ اعظم (Alfred the Great) کہتے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "From raiding to settling",
          paragraphs: [
            "At first, the Vikings came to Britain to raid: to steal treasure and goods and sail away. But after a while they started staying and living here too. In 865, according to your lesson's timeline, the Great Heathen Army landed and began conquering the Anglo-Saxon kingdoms one by one.",
            "The Vikings settled especially in the north and east of England. They took over three kingdoms: Northumbria, Mercia and East Anglia. They made farms and towns, traded, and ruled the areas they had taken. In the places they ruled they had their own laws and leaders; some towns had Viking kings or jarls, who were like lords. The largest and most important city under Viking rule was York.",
            "This changed how people lived and who was in charge. An Anglo-Saxon farmer in Northumbria now paid his dues to a Viking lord, settled his disputes by Viking law, and had Viking neighbours."
          ],
          tip: "Three kingdoms, one city: Northumbria, Mercia, East Anglia; York."
        },
        {
          heading: "The Danelaw and the mixing of cultures",
          paragraphs: [
            "A large stretch of Britain came to be called the Danelaw. Inside it, Viking law and Viking custom decided how people lived. Outside it, the old kingdoms carried on under Anglo-Saxon kings. In 878, after his victory at Edington, Alfred agreed the boundaries of the Danelaw with Guthrum.",
            "As the years passed, the newcomers and the people already living there settled into a quieter life side by side. Words, clothing, ways of farming and even personal names passed between them. Some English words we use today come from the Viking language, such as sky, egg and window. Place names ending in -by and -thorpe, such as Grimsby, Derby and Scunthorpe, are Viking names that are still used.",
            "Your lesson asked you to judge how significant the Viking invasion was, on a line from not significant to very significant. A good judgement weighs lasting changes, such as language, place names and the Danelaw, against the fact that in the end England was united under Anglo-Saxon kings. Then it considers the other side of its own argument."
          ],
          tip: "Significant means important with lasting effects. Language and place names still used today are strong evidence of significance."
        },
        {
          heading: "Alfred: the king who should never have been king",
          paragraphs: [
            "Alfred was a sickly child. He had three older brothers who were all supposed to become king before him, so he should never really have been king at all. As a boy he visited shrines and churches, and even met the Pope in Rome. That mattered. Religion ran through everybody's life, and people looked to the Pope as the one who stood between God and themselves. In the end Alfred outlived all three of his brothers and became King of Wessex.",
            "Alfred believed that reading and writing were extremely important. He translated many books from Latin, which few people could read, into English, so that more people could understand them. This started a new age of education and literacy in Britain, and some people say it is the reason he was called Great.",
            "Then Guthrum, a Viking warlord, invaded Wessex. Alfred fled and hid in Somerset, an area the Vikings did not know. While in hiding he put together a Saxon army more capable of fighting the Vikings. When it was big enough he marched to meet Guthrum at Edington, in 878, and after a day of fighting Alfred won. He forced Guthrum back, trapped the Vikings and starved them of food until they surrendered. Guthrum agreed to Alfred's treaty: he became a Christian, went back to the Danelaw and promised never to invade Alfred's kingdom again."
          ],
          tip: "Alfred's story in five beats: sickly child, Rome, books, flight to Somerset, Edington."
        },
        {
          heading: "Alfred's policies, and the title Great",
          paragraphs: [
            "After defeating the Vikings, Alfred introduced policies to make sure Wessex was better prepared if they came again. A burh was a town ringed with high walls and watchtowers, so that the people inside could be defended. Alfred used the burhs to collect tax and store the money, so that more burhs could be built. He also decided that half of the army should always be active, so that it was ready at all times. This was one of the first professional armies in Britain.",
            "Your lesson asked you to judge how well Alfred dealt with the Vikings. Did he beat them? Yes, at Edington. Did he ever run and hide? Yes, in Somerset. Did he learn from his mistakes and prepare better for the future? Yes: burhs, tax and a standing army. Weigh all three before you place your arrow.",
            "Does Alfred deserve to be remembered as Great? Your lesson wants a view with two reasons, and then the opposite view. Translating books, beating Guthrum and building the burhs are reasons for yes. Fleeing from his kingdom, and the fact that the Danelaw remained in Viking hands, are reasons a critic might give."
          ],
          worked: {
            q: "Write one reason, with evidence and explanation, that Alfred deserves the title Great.",
            steps: [
              "Point: One reason Alfred deserves to be remembered as Great is that he made Wessex safer against future Viking attacks.",
              "Evidence: he built burhs, towns with high walls and guard towers, and kept half of his army active at all times.",
              "Explain: this meant that when Vikings attacked again, people had somewhere safe to go and an army ready to fight, so Wessex was not overrun.",
              "Link back: that is why many people think the title Great is deserved."
            ],
            answer: "Point, evidence, explain: Alfred made Wessex safer; he built burhs and kept half the army ready; so Wessex could resist future attacks, which is a lasting achievement."
          },
          tip: "For a judgement question, give your view, two reasons with evidence, and then one sentence for the other side."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which three Anglo-Saxon kingdoms did the Vikings invade and settle in?", options: ["Northumbria, Mercia and East Anglia", "Wessex, Kent and Sussex", "Northumbria, Wessex and Essex", "Mercia, Wales and Cornwall"], answer: 0, why: "The Vikings settled in the north and east: Northumbria, Mercia and East Anglia. Wessex, in the south, held out under Alfred.",
          feedback: [
            "",
            "Wessex is the kingdom that held out against the Vikings under Alfred, and Kent and Sussex are in the south. The three Viking kingdoms were in the north and east: Northumbria, Mercia and East Anglia.",
            "Northumbria is right, but Wessex was Alfred's kingdom and resisted the Vikings. The other two were Mercia and East Anglia.",
            "Mercia is right, but Wales and Cornwall were not Anglo-Saxon kingdoms the Vikings settled. The three were Northumbria, Mercia and East Anglia."
          ] },
        { kind: "gap", q: "The large area of England under Viking control, where Viking rules were followed, was called the ___.", answer: "Danelaw", options: ["Danelaw", "Wessex", "Thing"], why: "The Danelaw was the part of England where Viking law and ways of life were followed; the rest still had Anglo-Saxon kings.",
          feedback: {
            "Wessex": "Wessex was the Anglo-Saxon kingdom in the south, ruled by Alfred, that held out against the Vikings. The area the Vikings controlled was the Danelaw.",
            "Thing": "The Thing was the Viking meeting where laws were decided. The area of England where those laws were followed was the Danelaw."
          } },
        { kind: "mcq", q: "Where did Alfred hide after Guthrum invaded Wessex?", options: ["In Somerset, an area the Vikings did not know", "In York, the largest Viking city", "In Rome, with the Pope", "In Norway, across the North Sea"], answer: 0, why: "Alfred fled to Somerset, which was unfamiliar to the Vikings, and used the time to build a stronger army.",
          feedback: [
            "",
            "York was the most important city in the Danelaw, under Viking control: the last place Alfred could hide. He hid in Somerset, which the Vikings did not know.",
            "Alfred visited Rome as a boy, long before Guthrum's invasion. When he fled it was to Somerset, inside his own kingdom but unfamiliar to the Vikings.",
            "Norway was a Viking homeland. Alfred stayed in England, hiding in Somerset while he gathered a new army."
          ] }
      ],
      modules: [
        {
          title: "From the Great Heathen Army to Edington",
          task: {
            kind: "numeric",
            q: "The Great Heathen Army landed in England in 865. Alfred defeated Guthrum at Edington in 878. How many years passed between the two events?",
            answer: 13, tolerance: 0, units: "years",
            why: "878 − 865 = 13. For thirteen years the Vikings conquered kingdom after kingdom before Alfred's victory stopped them.",
            check: "878 - 865",
            misconceptions: [
              { answer: 12, says: "You may have counted the years in between rather than subtracting. Take 865 from 878: 878 − 865 = 13.", check: "878 - 865 - 1" },
              { answer: 14, says: "You may have counted both end years. Subtract the earlier date from the later one: 878 − 865 = 13.", check: "878 - 865 + 1" },
              { answer: 85, says: "That is 878 − 793, the gap from the Lindisfarne raid to Edington. The question starts from the landing of the Great Heathen Army in 865, so the gap is 13 years.", check: "878 - 793" }
            ]
          },
          contexts: [
            { label: "A child in Northumbria", q: "A girl was born in Northumbria in 865, the year the Great Heathen Army landed. How old was she, in years, when Alfred won at Edington in 878?", check: "878 - 865" },
            { label: "A monk's record", q: "A monk began a record of Viking attacks in 865 and made his last entry in 878, the year of Edington. For how many years did he keep the record?", check: "878 - 865" },
            { label: "A farm in Mercia", q: "A Viking family took over a farm in Mercia in 865 and were still farming it when the Danelaw boundary was agreed in 878. How many years had they been there?", check: "878 - 865" }
          ],
          levels: {
            support: {
              steps: [
                "Write the later date first: 878.",
                "Subtract the earlier date: 878 − 865.",
                "Both are in the 800s, so just do 78 − 65 = 13.",
                "Check it makes sense: a little over a decade."
              ],
              example: {
                q: "How many years passed between the Romans leaving Britain in 410 and the Pope sending Augustine in 597?",
                steps: ["Later date first: 597.", "Subtract: 597 − 410.", "597 − 410 = 187."],
                answer: "187 years",
                checks: [{ expr: "597 - 410", value: 187, tol: 0 }]
              }
            },
            core: { hint: "Later date minus earlier date. Both are in the 800s, so work with the last two digits." },
            stretch: { extend: "Explain what the thirteen-year gap tells you about how hard the Anglo-Saxon kingdoms found it to stop the Vikings." }
          },
          explain: "Say, in one sentence, why we subtract the earlier date from the later one.",
          why: "878 − 865 = 13 years. The Vikings had thirteen years of conquest before Alfred's victory at Edington turned the tide."
        },
        {
          title: "Alfred's story in order",
          task: {
            kind: "order",
            q: "Put the events of Alfred's life in the order your lesson gave them.",
            items: [
              "Alfred is a sickly child with three older brothers who are all meant to be king before him",
              "Alfred becomes King of Wessex and translates books from Latin into English",
              "The Viking warlord Guthrum invades Wessex",
              "Alfred hides in Somerset and builds a stronger Saxon army",
              "Alfred defeats Guthrum at Edington and traps the Vikings until they surrender",
              "Alfred builds burhs, collects tax and keeps half of his army always active"
            ]
          },
          levels: {
            support: {
              steps: [
                "Childhood comes first: the sickly boy with three older brothers.",
                "He has to become king before he can act as king, so becoming king and translating books comes next.",
                "Guthrum must invade before Alfred can flee, and Alfred must flee and build an army before he can win.",
                "The policies to prepare for the future come after the victory."
              ],
              example: {
                q: "Put in order: a team wins the cup; a new captain is chosen; the team loses badly and trains harder; the club builds a bigger stadium.",
                steps: ["The captain is chosen first.", "The team loses, then trains harder.", "Then wins the cup.", "The bigger stadium comes after success."],
                answer: "captain chosen; loses and trains harder; wins the cup; bigger stadium"
              }
            },
            core: { hint: "Child, king, invasion, hiding, victory, policies." },
            stretch: { extend: "Explain how the time in Somerset made the victory at Edington possible, and how the victory made the burhs possible." }
          },
          explain: "Say, in one sentence, why Alfred's policies come after Edington and not before it.",
          why: "Sickly child; king and translator; Guthrum invades; Alfred hides in Somerset and builds an army; victory at Edington; then burhs, tax and a standing army to prepare for the future."
        },
        {
          title: "Does Alfred deserve the title Great?",
          task: {
            kind: "written",
            q: "Does Alfred deserve to be remembered as Great? Give your view and two reasons, each with evidence from your lesson. Then give one sentence for the other side of the argument. Write one paragraph of five to seven sentences.",
            criteria: [
              "I state clearly whether Alfred does or does not deserve the title.",
              "I give two different reasons, each with a fact from the lesson, such as Edington, the burhs, the standing army or the translated books.",
              "I use the word because at least twice.",
              "I give one sentence for the opposite view, beginning with However or On the other hand."
            ],
            model: "I think that Alfred does deserve to be remembered as Great. One reason is that he defeated the Vikings when it looked as if Wessex would fall, because after hiding in Somerset he built a new army and beat Guthrum at Edington in 878. Another reason is that he prepared his kingdom for the future, because he built burhs with high walls where people could shelter and kept half of his army active at all times. He also translated books from Latin into English so that more people could read them. However, on the other hand, Alfred did run and hide from Guthrum, and the Danelaw stayed under Viking rule, so he did not drive the Vikings out of England altogether."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: I think that Alfred does / does not deserve to be remembered as Great.",
                "Sentences 2 and 3: One reason is… because… Use Edington, the burhs, the army or the books.",
                "Sentences 4 and 5: Another reason is… because…",
                "Sentence 6: However, … Give the other side in one sentence."
              ],
              example: {
                q: "Does a school captain who lost the first match, then trained the team to win the league, deserve the title Great? Plan the paragraph.",
                steps: ["View: yes.", "Reason 1 with evidence: won the league because of the training plan.", "Reason 2: kept the team together because they trusted her.", "Other side: However, she did lose the first match."],
                answer: "Yes; she won the league because she trained the team; she kept them together because they trusted her; however, she lost the first match."
              }
            },
            core: { hint: "View, two reasons with because and a fact each, then one However sentence." },
            stretch: { extend: "Now argue the opposite side fully: give two reasons why Alfred does not deserve the title, with evidence." }
          },
          explain: "Say, in one sentence, which of Alfred's achievements you think mattered most and why.",
          why: "A strong answer takes a clear view, supports it with two facts from the lesson, and shows balance by giving the other side. Judging significance means weighing both."
        }
      ]
    },

    /* ───────────── 6 · Harald Hardrada ───────────── */
    {
      key: "hardrada", n: 6, title: "The saga of Harald Hardrada, and how accurate is a source?",
      lead: "Harald's journey from Norway to Novgorod and Constantinople and back, what his story teaches us about the Vikings, and how to judge whether a source gives an accurate and balanced picture.",
      covers: [5],
      pretext: {
        words: [
          { word: "saga", means: "a long story about a hero's life", sentence: "The saga of Harald Hardrada follows him across Europe." },
          { word: "Novgorod", means: "a wooden trading town in the land of the Rus, now Russia", sentence: "Harald was welcomed at Novgorod by Prince Yaroslav." },
          { word: "Constantinople", means: "the great stone city of the Byzantine Emperor, now Istanbul", sentence: "Harald joined the Emperor's bodyguard in Constantinople." },
          { word: "Varangian Guard", means: "the Byzantine Emperor's private army and bodyguard, made up of Norsemen", sentence: "In the Varangian Guard, Harald fought pirates and captured cities." },
          { word: "hard-ruler", means: "Harald's nickname, given for his harsh taxes", sentence: "The farmers called him hard-ruler because of his taxes." },
          { word: "accurate", means: "correct and true to the facts", sentence: "Is the song accurate about what the Vikings were like?" }
        ],
        passage: [
          "Harald Hardrada was a Viking from Norway.",
          "In 1030 his brother, King Olaf, was killed in battle.",
          "Harald was fifteen and badly hurt, and he fled east.",
          "He sailed across the Baltic Sea to the land of the Rus.",
          "At Novgorod, Prince Yaroslav welcomed him with a feast.",
          "In 1034 Harald reached Constantinople.",
          "He joined the Varangian Guard, the Emperor's bodyguard.",
          "He fought pirates and captured cities, and grew rich and famous.",
          "In 1047 he returned to Norway and became its king.",
          "His harsh taxes earned him the name hard-ruler.",
          "In 1066 he invaded England and took York.",
          "His story shows that Vikings were travellers and traders as well as warriors."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "حكاية طويلة عن حياة بطل (saga)",
            "بلدة تجارة خشبية في أرض الروس، وهي روسيا اليوم (Novgorod)",
            "مدينة الإمبراطور البيزنطي الحجرية العظيمة، وهي إستانبول اليوم (Constantinople)",
            "جيش الإمبراطور البيزنطي الخاصّ وحرسه، وكان من الشماليين (Varangian Guard)",
            "لقب هارالد، وقد أُطلق عليه لقسوة ضرائبه (hard-ruler)",
            "صحيح ومطابق للوقائع (accurate)"
          ],
          "passage": [
            "كان هارالد هاردرادا (Harald Hardrada) من الفايكنغ من النرويج.",
            "وفي 1030 قُتل أخوه الملك أولاف (Olaf) في معركة.",
            "وكان هارالد في الخامسة عشرة وقد أُصيب إصابةً بالغة، فهرب شرقًا.",
            "فأبحر عبر بحر البلطيق إلى أرض الروس.",
            "وفي نوفغورود (Novgorod) استقبله الأمير ياروسلاف (Yaroslav) بمأدبة.",
            "وفي 1034 وصل هارالد إلى القسطنطينية (Constantinople).",
            "فانضمّ إلى الحرس الفارانجي (Varangian Guard)، وهو حرس الإمبراطور.",
            "وقاتل القراصنة وفتح مدنًا، وصار غنيًّا مشهورًا.",
            "وفي 1047 عاد إلى النرويج وصار ملكًا عليها.",
            "وقسوة ضرائبه أكسبته لقب الحاكم القاسي.",
            "وفي 1066 غزا إنجلترا وأخذ يورك.",
            "وقصّته تُظهر أنّ الفايكنغ كانوا رحّالةً وتجّارًا كما كانوا محاربين."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "długa opowieść o życiu bohatera (saga)",
            "drewniane miasto handlowe w kraju Rusów, dziś w Rosji (Novgorod)",
            "wielkie kamienne miasto cesarza bizantyjskiego, dziś Istambuł (Constantinople)",
            "prywatna armia i straż przyboczna cesarza bizantyjskiego, złożona z ludzi północy (Varangian Guard)",
            "przydomek Haralda, nadany mu za surowe podatki (hard-ruler)",
            "zgodny z faktami i prawdziwy (accurate)"
          ],
          "passage": [
            "Harald Hardrada był wikingiem z Norwegii.",
            "W 1030 roku jego brat, król Olaf, zginął w bitwie.",
            "Harald miał piętnaście lat, był ciężko ranny i uciekł na wschód.",
            "Przepłynął Morze Bałtyckie do kraju Rusów.",
            "W Nowogrodzie (Novgorod) książę Jarosław przyjął go ucztą.",
            "W 1034 roku Harald dotarł do Konstantynopola.",
            "Wstąpił do Gwardii Waregów (Varangian Guard), straży przybocznej cesarza.",
            "Walczył z piratami i zdobywał miasta, a przy tym stał się bogaty i słynny.",
            "W 1047 roku wrócił do Norwegii i został jej królem.",
            "Surowe podatki przyniosły mu przydomek hard-ruler, czyli surowy władca.",
            "W 1066 roku najechał Anglię i zajął York.",
            "Jego historia pokazuje, że wikingowie byli podróżnikami i kupcami, a nie tylko wojownikami."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma história longa sobre a vida de um herói (saga)",
            "uma vila comercial de madeira na terra dos Rus, hoje a Rússia (Novgorod)",
            "a grande cidade de pedra do imperador bizantino, hoje Istambul (Constantinople, Constantinopla)",
            "o exército particular e a guarda pessoal do imperador bizantino, formado por nórdicos (Varangian Guard, Guarda Varangiana)",
            "a alcunha/apelido de Harald, dada por causa dos seus impostos duros (hard-ruler)",
            "correto e fiel aos factos/fatos (accurate, exato)"
          ],
          "passage": [
            "Harald Hardrada era um viking da Noruega.",
            "Em 1030 o seu irmão, o rei Olaf, foi morto em batalha.",
            "Harald tinha quinze anos e estava gravemente ferido, e fugiu para leste.",
            "Atravessou o mar Báltico até à terra dos Rus.",
            "Em Novgorod, o príncipe Iaroslav (Yaroslav) recebeu-o com um banquete.",
            "Em 1034 Harald chegou a Constantinopla.",
            "Entrou na Guarda Varangiana, a guarda pessoal do imperador.",
            "Combateu piratas e tomou cidades, e ficou rico e famoso.",
            "Em 1047 voltou à Noruega e tornou-se o seu rei.",
            "Os seus impostos duros deram-lhe o nome de hard-ruler, o governante duro.",
            "Em 1066 invadiu a Inglaterra e tomou York.",
            "A história dele mostra que os vikings eram viajantes e comerciantes, e não só guerreiros."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "sheeko dheer oo ku saabsan nolosha geesi",
            "magaalo ganacsi alwaax ah oo ku taal dhulka Rus, oo hadda Ruushka tahay",
            "magaaladii weyn ee dhagax ee Boqorka Byzantine, oo hadda Istanbul tahay",
            "ciidanka gaarka ah iyo ilaaladii Boqorka Byzantine, oo ka koobnaa Norsemen",
            "naaneysta Harald, oo loo bixiyay canshuurradiisa daran",
            "sax oo xaqiiqda waafaqsan"
          ],
          "passage": [
            "Harald Hardrada wuxuu ahaa Viking ka soo jeeda Norway.",
            "1030-kii walaalkiis, Boqor Olaf, waxaa lagu dilay dagaal.",
            "Harald wuxuu ahaa shan iyo toban jir oo si xun u dhaawacmay, bariga ayuuna u cararay.",
            "Wuxuu Badda Baltic ka gudbay ilaa dhulka Rus.",
            "Novgorod, Amiir Yaroslav wuxuu casuumad ku soo dhoweeyay.",
            "1034-kii Harald wuxuu gaaray Constantinople.",
            "Wuxuu ku biiray Varangian Guard, oo ahayd ilaaladii Boqorka.",
            "Wuxuu la dagaallamay burcad-badeed oo magaalooyin qabsaday, wuuna noqday hodan iyo caan.",
            "1047-kii wuxuu Norway ku soo noqday oo boqorkeeda noqday.",
            "Canshuurrihiisii darnaa waxay u keeneen magaca hard-ruler.",
            "1066-kii wuxuu England ku duulay oo York qabsaday.",
            "Sheekadiisa waxay muujinaysaa in Vikings ay ahaayeen safarroyaal iyo ganacsato sidoo kalena dagaalyahanno."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "довга розповідь про життя героя (saga)",
            "дерев’яне торгове місто в землі Русі, тепер Росія (Novgorod)",
            "велике кам’яне місто візантійського імператора, тепер Істанбул (Constantinople)",
            "приватне військо й особиста охорона візантійського імператора, складена з норсменів (Varangian Guard)",
            "прізвисько Гаральда, дане за його жорсткі податки (hard-ruler)",
            "правильний і вірний фактам (accurate)"
          ],
          "passage": [
            "Гаральд Суворий (Harald Hardrada) був вікінгом із Норвегії.",
            "У 1030 році його брата, короля Олафа, вбили в битві.",
            "Гаральдові було п’ятнадцять, він був тяжко поранений і втік на схід.",
            "Він переплив Балтійське море до землі Русі.",
            "У Новгороді князь Ярослав прийняв його з бенкетом.",
            "У 1034 році Гаральд дістався Константинополя.",
            "Він вступив до Варяжської гвардії, особистої охорони імператора.",
            "Він воював із піратами й захоплював міста, і став багатим і відомим.",
            "У 1047 році він повернувся до Норвегії і став її королем.",
            "Його жорсткі податки дали йому ім’я «суворий правитель» (hard-ruler).",
            "У 1066 році він напав на Англію і взяв Йорк.",
            "Його історія показує, що вікінги були не тільки воїнами, а й подорожниками й торговцями."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "کسی ہیرو کی زندگی کی ایک لمبی کہانی (saga)",
            "روس (Rus) کی سرزمین کا لکڑی سے بنا ایک تجارتی قصبہ، جو اب روس میں ہے (Novgorod)",
            "بازنطینی شہنشاہ کا پتھروں سے بنا عظیم شہر، جو اب استنبول ہے (Constantinople)",
            "بازنطینی شہنشاہ کی ذاتی فوج اور محافظ دستہ، جو نارس لوگوں پر مشتمل تھا (Varangian Guard)",
            "ہیرلڈ کا لقب، جو اس کے سخت ٹیکسوں کی وجہ سے پڑا (hard-ruler)",
            "درست اور حقائق کے مطابق (accurate)"
          ],
          "passage": [
            "ہیرلڈ ہارڈراڈا (Harald Hardrada) ناروے کا ایک وائکنگ تھا۔",
            "1030 میں اس کا بھائی، بادشاہ اولاف (Olaf)، ایک جنگ میں مارا گیا۔",
            "ہیرلڈ پندرہ سال کا تھا اور بری طرح زخمی تھا، اور وہ مشرق کی طرف نکل گیا۔",
            "وہ بحرِ بالٹک کے پار روس (Rus) کی سرزمین تک گیا۔",
            "نووگورود (Novgorod) میں شہزادہ یاروسلاو (Yaroslav) نے دعوت دے کر اس کا استقبال کیا۔",
            "1034 میں ہیرلڈ قسطنطنیہ (Constantinople) پہنچا۔",
            "وہ Varangian Guard میں شامل ہو گیا، جو شہنشاہ کا محافظ دستہ تھا۔",
            "اس نے قرصانوں سے لڑائی کی اور شہر فتح کیے، اور امیر اور مشہور ہو گیا۔",
            "1047 میں وہ ناروے واپس آیا اور وہاں کا بادشاہ بن گیا۔",
            "اس کے سخت ٹیکسوں کی وجہ سے اسے hard-ruler کا نام ملا۔",
            "1066 میں اس نے انگلینڈ پر حملہ کیا اور یارک لے لیا۔",
            "اس کی کہانی دکھاتی ہے کہ وائکنگ جنگجو ہونے کے ساتھ ساتھ سیاح اور تاجر بھی تھے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "A saga begins: the journey east",
          paragraphs: [
            "A saga is a long story about a hero's life, told and retold by the Vikings. Your lesson gives the saga of Harald Hardrada. It begins in 1030, when Harald was fifteen. His brother, King Olaf of Norway, had fought a bitter war to make Norway Christian, and the farmers who wanted to keep their old gods rose up against him, supported by King Cnut of England and Denmark. Olaf was killed at the Battle of Stiklestad. Harald was wounded, and fled with Cnut's men searching for him.",
            "He recovered at the hall of the Swedish king, gathered survivors and set off east in a longship to find Magnus, Olaf's young son, in the land of the Rus. He crossed the icy Baltic, stopped at the island of Gotland, and travelled down the river Daugava to Lake Ladoga, where traders were loading beads, furs, amber and wax, weighing goods with lead weights. From there the longship rowed on to Novgorod, a large wooden town on the lake shore.",
            "At Novgorod, Grand Prince Yaroslav of the Rus welcomed Harald with a great feast and told him how his own ancestors had come from the north and settled along the river Dnieper. Harald swore to fight for Yaroslav, found Magnus and gave him the news of his father's death, and became a strong and feared warrior in Yaroslav's service. But he wanted more adventure, and Yaroslav had dazzled him with news of a city called Constantinople."
          ],
          tip: "Follow Harald on a map: Norway, Sweden, Gotland, the Daugava, Lake Ladoga, Novgorod. Every stop is a trading place."
        },
        {
          heading: "Constantinople and the Varangian Guard",
          paragraphs: [
            "Harald reached Constantinople in 1034. It was a city like no other, built of stone, with great domes along the shore sparkling in the light from the water. He joined the Varangian Guard, the bodyguard of the Byzantine Emperor, which was made up of fellow Norsemen, so he felt at home. He did not stay in the city for long, because the Emperor had enemies who needed fighting.",
            "These were the years of Harald's greatest adventures. The saga says he fought pirates in the Mediterranean, fought in Sicily and Palestine, walked the streets of Jerusalem and captured eighty cities. In one story he had himself carried into a town in a coffin, pretending to be dead, then burst out and held the gates open for his men. He returned to Constantinople with fame, riches and an army of followers.",
            "Then news came from home: in his absence, Magnus had become King of Norway. In 1042 Harald asked the Emperor to release him and was refused, so he slipped away by ship and rowed for the sea. A great chain blocked the harbour mouth; Harald had his men row straight at it and run to the front of the ship so that it tipped over the chain. He escaped back to Novgorod, where he married Yaroslav's daughter Elisabeth."
          ],
          tip: "Remember that a saga is a story told to praise a hero. Eighty cities and a coffin trick are the saga's claims, not facts a historian can check."
        },
        {
          heading: "Hard-ruler: king of Norway, and the road to England",
          paragraphs: [
            "In 1047 Harald arrived back in Norway ready to fight Magnus, and was surprised to be offered half the kingdom instead. When Magnus died soon afterwards, Harald became sole king. He went to war with Denmark and with Sweden, and raised harsh taxes to pay for it. The farmers at home rebelled, and he punished them very harshly. They gave him the nickname hard-ruler. Yet he also used his links with Byzantium to bring Christian churches and more trade to Norway.",
            "When Harald was about fifty, a great age at the time, an Anglo-Saxon named Tostig came to his court. Tostig was the brother of Harold Godwinson, the King of England, and he told Harald that the English throne could be his. Here was one last adventure, and a chance to outdo King Cnut, who had helped to kill his beloved brother.",
            "In 1066 Harald sailed across the North Sea and up the river Ouse. He defeated the English earls Edwin and Morcar at the Battle of Fulford Gate and took the city of York. Feeling confident, he let his men feast, and went lightly armed to meet the people of York. In the distance he saw the dust of an army on the move. What happened next is the start of your next topic."
          ],
          tip: "Harald's dates in order: 1030 leaves Norway, 1034 Constantinople, 1042 escapes, 1047 king, 1066 England."
        },
        {
          heading: "What the saga teaches, and how accurate is a source?",
          paragraphs: [
            "What does the story of Harald Hardrada teach us about the Vikings? That they travelled enormous distances by river and sea; that they traded as they went; that they served foreign rulers as soldiers; that by Harald's time many were Christians; and that a Viking could be a king in Norway and still dream of England. Harald's life joins up everything in this unit: the sea raider, the trader with the carnelian bead, and the invader of England.",
            "Your assessment asks how well you can understand sources about the Vikings and judge how accurate they are using your own knowledge. In your lesson the sources were comedy songs about the Vikings. For any such source, ask two questions: what is the source telling us about the Vikings, and, using what I know, is that an accurate account?",
            "A source that shows the Vikings only as raiders who burned villages and robbed monasteries is not wrong, because Lindisfarne happened. But it is one-sided, because it leaves out the Danelaw, the farms and trade, the Thing, the words and place names Vikings gave to English, and journeys like Harald's. A balanced judgement says what the source gets right, what it leaves out, and what it could add to give a fuller picture."
          ],
          worked: {
            q: "A short film shows the Vikings only as raiders who steal and burn. Judge how accurate it is, using your own knowledge.",
            steps: [
              "Say what the source tells us: the Vikings were violent raiders.",
              "Check it against your knowledge: true in part, because of raids such as Lindisfarne in 793.",
              "Say what it leaves out: Vikings also settled in the Danelaw, farmed, traded as far as India, met at the Thing and gave English words such as sky and egg.",
              "Judge: partly accurate but one-sided; it would be more accurate if it included settling and trading."
            ],
            answer: "Partly accurate: the raids are real, but the film is one-sided because it leaves out settling, farming, trade and language, so it does not give a balanced view of the Vikings."
          },
          tip: "Accurate is not the same as complete. Say what is right, then say what is missing."
        }
      ],
      gate: [
        { kind: "mcq", q: "Who did Harald fight for in Constantinople?", options: ["The Byzantine Emperor, as a member of the Varangian Guard", "King Cnut of England and Denmark", "Grand Prince Yaroslav of the Rus", "The Pope in Rome"], answer: 0, why: "In Constantinople Harald joined the Varangian Guard, the Emperor's private army and bodyguard, made up of Norsemen.",
          feedback: [
            "",
            "Cnut was Harald's enemy: he had backed the farmers who killed Harald's brother Olaf. In Constantinople Harald served the Byzantine Emperor in the Varangian Guard.",
            "Harald served Yaroslav at Novgorod, before he travelled on. In Constantinople he fought for the Byzantine Emperor as one of the Varangian Guard.",
            "Harald never served the Pope. In Constantinople he joined the Varangian Guard, the Byzantine Emperor's bodyguard."
          ] },
        { kind: "numeric", q: "In which year did Harald Hardrada invade England and take York?", answer: 1066, tolerance: 0, units: "", why: "Harald sailed across the North Sea in 1066, won at Fulford Gate and took York.", check: "1066",
          misconceptions: [
            { answer: 1047, says: "1047 is the year Harald returned to Norway and became its king. He invaded England almost twenty years later, in 1066.", check: "1066 - 19" },
            { answer: 1042, says: "1042 is the year Harald escaped from Constantinople. The invasion of England came in 1066.", check: "1066 - 24" }
          ] },
        { kind: "gap", q: "Harald was nicknamed hard-___ because of his harsh taxes.", answer: "ruler", options: ["ruler", "fighter", "sailor"], why: "Hardrada means hard-ruler. The farmers of Norway gave him the name because of his harsh taxes and punishments.",
          feedback: {
            "fighter": "Harald was a hard fighter, but the nickname is about how he governed, not how he fought. The farmers called him hard-ruler because of his harsh taxes.",
            "sailor": "Harald sailed a long way, but the nickname came from his rule at home. His harsh taxes made the farmers call him hard-ruler."
          } }
      ],
      modules: [
        {
          title: "Harald's life in order",
          task: {
            kind: "order",
            q: "Put these events from the saga of Harald Hardrada in chronological order.",
            items: [
              "Harald's brother King Olaf is killed and Harald flees Norway (1030)",
              "Harald reaches Novgorod and swears to fight for Prince Yaroslav",
              "Harald reaches Constantinople and joins the Varangian Guard (1034)",
              "Harald escapes from Constantinople over the harbour chain (1042)",
              "Harald returns to Norway and shares the kingdom with Magnus (1047)",
              "Harald invades England, wins at Fulford Gate and takes York (1066)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Five events carry a date in brackets. Put those in order of date first, smallest number first.",
                "The Novgorod event has no date. Ask: did Harald reach Novgorod before or after Constantinople? He travelled east through Novgorod on the way.",
                "So Novgorod goes between 1030 and 1034.",
                "Check the story makes sense: flee, Novgorod, Constantinople, escape, king, England."
              ],
              example: {
                q: "Put in order: starts secondary school (age 11); learns to walk; starts primary school (age 4); learns to ride a bike (age 6).",
                steps: ["Three have ages: 4, 6, 11.", "Learning to walk has no age, but it comes before primary school.", "So: walk, primary, bike, secondary."],
                answer: "learns to walk; starts primary school; learns to ride a bike; starts secondary school"
              }
            },
            core: { hint: "Dates first, smallest to largest. Novgorod is on the way to Constantinople, so it sits between 1030 and 1034." },
            stretch: { extend: "Explain how the stop at Novgorod shaped the rest of Harald's life, giving two consequences." }
          },
          explain: "Say, in one sentence, how you placed the event that had no date.",
          why: "1030 Olaf killed and Harald flees; Novgorod and Yaroslav on the way east; 1034 Constantinople; 1042 the escape; 1047 king of Norway; 1066 England and York."
        },
        {
          title: "What the source leaves out",
          task: {
            kind: "mcq",
            q: "A comedy song describes the Vikings only as raiders who stole treasure and burned villages. Using your own knowledge, what does the song leave out?",
            options: [
              "That Vikings also settled, farmed, traded and gave English new words and place names",
              "That Vikings never attacked monasteries",
              "That Vikings came from Britain",
              "That Vikings were Romans"
            ],
            answer: 0,
            why: "The raids are real, so the song is partly accurate. But it is one-sided: it leaves out the Danelaw, farming, long-distance trade, the Thing, and words and place names such as sky, egg and Grimsby.",
            feedback: [
              "",
              "Vikings did attack monasteries: Lindisfarne in 793 is the famous example. The song is right about raids; what it leaves out is everything else the Vikings did, such as settling and trading.",
              "The Vikings came from Scandinavia, not Britain, so adding that would make the song less accurate, not more. What it misses is the settling, farming and trading side of Viking life.",
              "Vikings were not Romans; the Romans had left Britain in 410, long before. The song's gap is the peaceful side of Viking life: settlement, trade, law and language."
            ]
          },
          contexts: [
            { label: "A cartoon", q: "A cartoon shows a Viking with an axe standing over a burning village, and nothing else. Using your own knowledge, what does the cartoon leave out?", why: "The cartoon is one-sided. It shows raiding, which is real, but leaves out the Vikings who settled in the Danelaw, farmed, traded and shaped the English language." },
            { label: "A film poster", q: "A film poster calls the Vikings savage sea raiders who came only to kill and steal. Using your own knowledge, what does the poster leave out?", why: "Raids happened, but the poster leaves out the settling, farming, long-distance trade and the words and place names the Vikings gave to England." },
            { label: "A museum label", q: "A museum label beside a sword says the Vikings were warriors who terrorised England's coasts, and says nothing more. Using your own knowledge, what does the label leave out?", why: "The label describes real raids but gives a one-sided picture; it misses the Danelaw, farming, trade and the Vikings' lasting mark on English words and place names." }
          ],
          levels: {
            support: {
              steps: [
                "Write down what the source says the Vikings were: raiders.",
                "Is that true? Yes, partly: Lindisfarne, 793.",
                "Now list what you know that the source does not mention: the Danelaw, farms, trade with the east, the Thing, words like sky and egg, place names like Grimsby.",
                "Choose the option that names those missing things. Options that contradict the facts are wrong."
              ],
              example: {
                q: "A poster describes a school only as a place where pupils sit exams. What does it leave out: that the school has sport, clubs, friendships and trips, or that the school has no pupils?",
                steps: ["True in part: pupils do sit exams.", "Missing: everything else about school life.", "The second option contradicts the facts, so the first is the answer."],
                answer: "That the school also has sport, clubs, friendships and trips."
              }
            },
            core: { hint: "The source is not wrong, it is incomplete. Which option lists the true things it leaves out?" },
            stretch: { extend: "Explain why a one-sided source can still be useful to a historian, and what you would want to know about its origin and purpose before using it." }
          },
          explain: "Say, in one sentence, the difference between a source being wrong and a source being one-sided.",
          why: "The raids are real, so the source is partly accurate. It is one-sided because it leaves out the Danelaw, farming, trade, the Thing and the words and place names the Vikings gave to English."
        },
        {
          title: "A letter about a one-sided source",
          task: {
            kind: "written",
            q: "A song about the Vikings describes them only as aggressive raiders who invaded Britain to steal and to kill. Write a short letter to the people who made it, explaining that the song is not accurate and how they could improve it. Use the lesson's frame: I am writing to tell you that your song is not accurate when describing the Vikings. This is because… One way you could improve this is to include… Write five to seven sentences.",
            criteria: [
              "I open by saying the song is not accurate when describing the Vikings.",
              "I explain why, using the words because and only: the song shows only one side.",
              "I give at least two facts from my own knowledge that the song leaves out, such as the Danelaw, farming, trade, the Thing, or Viking words and place names.",
              "I suggest one clear way to improve the song so that it gives a more balanced view."
            ],
            model: "Dear producers, I am writing to tell you that your song is not accurate when describing the Vikings. This is because it only talks about the Vikings as aggressive raiders who invaded Britain to steal and to kill. It is true that Vikings raided Lindisfarne in 793, but many Vikings also settled in the Danelaw, where they built towns, farmed the land and traded. They met at the Thing to make laws, and they traded along rivers as far as the Islamic world, which is how a bead from India reached a Viking grave in England. One way you could improve this is to include the contribution the Vikings made to the English language, with words such as sky, egg and window, and place names such as Grimsby, Derby and Scunthorpe that are still used today. That would give a more balanced view of the Vikings."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: Dear producers, I am writing to tell you that your song is not accurate when describing the Vikings.",
                "Sentence 2: This is because it only… Say what one side the song shows.",
                "Sentences 3 and 4: It is true that… but… Give two facts the song misses: the Danelaw, farming, trade, the Thing, words, place names.",
                "Sentence 5: One way you could improve this is to include… Pick one thing and say why it gives a more balanced view."
              ],
              example: {
                q: "A cartoon shows a knight only as a man who fights. Plan a letter saying it is one-sided.",
                steps: ["Open: the cartoon is not accurate.", "Why: it only shows fighting.", "Facts it misses: knights also ran estates, went to church and trained for years.", "Improvement: include the knight's life away from battle."],
                answer: "The cartoon is not accurate because it only shows fighting; knights also ran estates, went to church and trained for years; include the knight's life away from battle for a balanced view."
              }
            },
            core: { hint: "Not accurate; because it only shows…; two facts it misses; one way to improve it." },
            stretch: { extend: "Now write a short letter about a source that shows the Vikings only as peaceful farmers and traders. What does that one leave out?" }
          },
          explain: "Say, in one sentence, what makes a description of the Vikings balanced rather than one-sided.",
          why: "A strong letter says the source is one-sided rather than simply wrong, names the real raids, gives two facts from the unit that the source leaves out, and suggests one addition that would balance the picture."
        }
      ]
    }
  ],

  sources: {
    deckDump: "hi_y07_topic_1_the_vikings_anglo_saxons.txt",
    decksUsed: [
      "L1 Introduction & Key Skills in History / L1 Introduction, Chronology & Sources.pptx",
      "L2 - Who were the Vikings / L2 who were the Vikings.pptx",
      "L2 - Who were the Vikings / Viking archaeological sites information.pptx",
      "L2 - Who were the Vikings / Viking archaeology sites.pptx",
      "L3 - What does Lindisfarne tell us about the Vikings / L3 - Lindisfarne.pptx",
      "L4 - How did the Anglo Saxons deal with the Vikings / L4 - Viking Rule and how did the Saxons deal with the Vikings .pptx",
      "L5 - The Story of Harald Hardrada / L5 Harald Hardrada.pptx",
      "L5 - The Story of Harald Hardrada / The Saga of Harald Hardrada.pptx"
    ],
    notes: "Lesson titles, sequence, learning objectives and key words, the chronology method (oldest to most recent; BC and AD; cover two digits and add one), the deck's practice dates, the six-event timeline, the primary/secondary examples, the NOP method, the historian/archaeologist comparison, the Cat Jarman profile, the Viking homelands and the meaning of Viking, the 35,000 figure, the birth-of-England timeline (410, 597, ~680, 787, 865, 878), the twelve gods and the four named ones, Valhalla, the Thing, Viking women and the 1923 comparison, farming, the Repton/Birka/Salme/Gotland/Vypovzyv/Constantinople site reports and the carnelian bead, the Lindisfarne account and video answers, the inference method and sentence starters, the three kingdoms, York, the Danelaw, the words sky/egg/window and the place names Grimsby/Derby/Scunthorpe, Alfred's story and policies, the Harald saga and its dated timeline (1030, 1034, 1042, 1045, 1047, 1066), Fulford Gate and York, and the assessment-preparation method (what the source tells us; is it accurate using own knowledge) are taken from the department's decks. The 'L1 Coin Source Task.pptx' deck has no text in the dump and the composite's sixth component (Assessment) has no deck, so lessonCount is 5. All explanations, questions, worked examples and model paragraphs are original; the deck's inference example sentences (baked beans; Liverpool and Everton) and its example letter are not reproduced. The only quotations are three short fragments of the monk's account of the Lindisfarne raid as printed on L3 slide 11 (a medieval primary source; the translation's status is raised in NOTES.md). The Horrible Histories songs (L5) are in copyright and are not quoted or named by title; the deck's own saga retelling is paraphrased. The deck's 1064 date for Tostig's visit, the '10 years' line in the saga, the 'Great Summer Army' label, the four 'Viking longships' at Constantinople and the 'around 50 words' claim are not carried (see NOTES.md Corrections). astra/2: per-option feedback on every mcq and gap, misconceptions with checks on all five numeric items, explain prompts on every module, five context modules (ch1 numeric, ch3 mcq, ch4 mcq, ch5 numeric, ch6 mcq), glossary chapters, four Connections groups, spacing; no widgets, no constellation, no pretext.l1."
  }
};
