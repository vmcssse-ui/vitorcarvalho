// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 History · Year 7 Topic 2 · The Battle of Hastings (foundations for AQA 8145) · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   every date, name and sequence is held in an independent CHRONOLOGY table in verify.py; every "order" task is
//   checked against it; every number in a numeric item carries `check` and is recomputed; every mcq / gap answer is
//   compared with the independent answer key held in verify.py.
//   Quotation convention: every quotation from an out-of-copyright primary source is wrapped in curly double quotes “…”
//   and must be a verbatim substring of the CORPUS held in verify.py (Eadmer, c. 1120, in the translation the deck
//   gives). Curly single quotes ‘…’ mark terms and are never quotations. Modern historians (Marc Morris, Giles
//   Kristian, Tracy Borman, Dan Snow) and BBC Bitesize are paraphrased, never quoted; verify.py bans their phrases.
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions` with `check`;
//   every module carries `explain`; `contexts` on three written modules; `connections` ⊂ glossary; spacing [2, 7, 30];
//   no widgets, no meta.constellation, no pretext.l1 (translation is a separate pass).
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["hist-hastings"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "hist-hastings",
    subjectKey: "history",
    subject: "History",
    board: "AQA",
    spec: "KS3 → 8145",
    specRef: "KS3 Year 7 Topic 2: The Battle of Hastings — foundations for AQA GCSE History 8145 (British depth study: Norman England, c1066–c1100) and the key skills of chronology, causation, sources and interpretations",
    year: 7,
    tier: "KS3",
    title: "The Battle of Hastings",
    sub: "One year, three men who wanted to be king, two battles and a shield wall: how England changed hands in 1066, and whether William was lucky or good.",
    bigQuestion: "William won the Battle of Hastings because he was lucky. How far do you agree?",
    lessonCount: 5,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Challengers for the throne: who should be King in 1066?", question: "Why was the throne up for grabs in 1066, and who had the best claim to it?", keywords: ["heir", "claim", "contender", "earl", "coronation"] },
    { n: 2, title: "The Battle of Stamford Bridge", question: "Was Harold unlucky in the summer of 1066, or did he make bad decisions?", keywords: ["invasion", "harvest", "Hardrada", "Stamford Bridge", "surprise"] },
    { n: 3, title: "Progress check and preparations for Hastings", question: "How did Stamford Bridge weaken Harold, how did William prepare, and who had the stronger army?", keywords: ["PEE paragraph", "Bayeux Tapestry", "huscarls", "fyrd", "cavalry"] },
    { n: 4, title: "The Battle of Hastings", question: "What were the key moments of the battle, and why did William win it?", keywords: ["Senlac Hill", "shield wall", "fake retreat", "interpretation"] },
    { n: 5, title: "Review of the battle: why did William win?", question: "Which factor best explains William's victory: luck, tactics, William's preparations or Harold's?", keywords: ["cause", "factor", "luck", "tactics", "evaluate"] }
  ],

  glossary: [
    { term: "heir", means: "The person who will take over a title, a throne or property when its owner dies.", chapter: "throne-up-for-grabs" },
    { term: "claim", means: "A reason someone gives for saying that something, such as a throne, should be theirs.", chapter: "throne-up-for-grabs" },
    { term: "contender", means: "Someone competing for a prize or a position; in 1066, one of the three men who wanted to be king.", chapter: "throne-up-for-grabs" },
    { term: "coronation", means: "The ceremony where a person is crowned king or queen.", chapter: "throne-up-for-grabs" },
    { term: "huscarl", means: "A highly trained, paid professional soldier in the English army, who protected the king and carried a heavy axe.", chapter: "two-armies" },
    { term: "fyrd", means: "Ordinary English men who fought only when the king called them; unpaid, untrained and poorly armed.", chapter: "two-armies" },
    { term: "shield wall", means: "A defensive line of soldiers standing shoulder to shoulder with their shields locked together.", chapter: "two-armies" },
    { term: "reinforcements", means: "Extra soldiers who arrive to strengthen an army during a battle.", chapter: "battle-of-hastings" },
    { term: "cavalry", means: "Soldiers who fight on horseback; William's cavalry wore heavy armour and carried long swords.", chapter: "two-armies" },
    { term: "foot soldier", means: "A soldier who fights on foot; most of William's army were foot soldiers with good armour and weapons.", chapter: "two-armies" },
    { term: "archer", means: "A soldier who fights with a bow and arrows and can attack from far away.", chapter: "two-armies" },
    { term: "fake retreat", means: "A trick in which part of an army pretends to run away so that the enemy breaks its line to chase them.", chapter: "battle-of-hastings" },
    { term: "chronology", means: "Putting events in the order in which they happened, earliest first.", chapter: "throne-up-for-grabs" },
    { term: "source", means: "Something made at the time, or by someone who was there, that tells us about the past: a tapestry, a chronicle, a letter.", chapter: "two-armies" },
    { term: "interpretation", means: "A historian's view of what happened and why, written long after the event.", chapter: "why-william-won" },
    { term: "factor", means: "A type of cause, such as luck or tactics, that helps to explain why something happened.", chapter: "why-william-won" }
  ],

  // astra/2: the Connections game. Four groups of four, all sixteen drawn from the glossary above.
  connections: [
    { group: "Who should be king?", terms: ["heir", "claim", "contender", "coronation"] },
    { group: "Harold's army", terms: ["huscarl", "fyrd", "shield wall", "reinforcements"] },
    { group: "William's army", terms: ["cavalry", "foot soldier", "archer", "fake retreat"] },
    { group: "Thinking like a historian", terms: ["chronology", "source", "interpretation", "factor"] }
  ],

  chapters: [
    // ───────────────────────────── CHAPTER 1 ─────────────────────────────
    {
      key: "throne-up-for-grabs", n: 1,
      title: "A throne up for grabs",
      lead: "This chapter gives you the problem that started everything: a king who died without a son, and three men who each said the crown was theirs.",
      covers: [1],
      pretext: {
        words: [
          { word: "heir", means: "the person who takes over when a king dies", sentence: "Edward had no son, so England had no clear heir." },
          { word: "earl", means: "a man who ruled part of England for the king", sentence: "Harold was the Earl of Wessex, the most powerful part of England." },
          { word: "claim", means: "a reason for saying the throne should be yours", sentence: "William's claim was that Edward had promised him the throne." },
          { word: "oath", means: "a very serious promise, often made on holy objects", sentence: "In 1064 Harold swore an oath to support William." },
          { word: "coronation", means: "the ceremony where someone is crowned king", sentence: "Harold's coronation happened the day after Edward died." }
        ],
        passage: [
          "In 1066 England had a problem.",
          "King Edward the Confessor died on 5 January.",
          "He had no children, so there was no clear heir.",
          "Three men said the throne should be theirs.",
          "Harold Godwinson was the Earl of Wessex and Edward's brother-in-law.",
          "He said Edward had named him heir on his deathbed.",
          "William was the Duke of Normandy, across the sea in France.",
          "He said Edward had promised him the throne in 1051.",
          "Harald Hardrada was the King of Norway, a Viking.",
          "He said the throne had been promised to his family long before.",
          "Harold Godwinson acted fast.",
          "He was crowned King on 6 January, the day of Edward's funeral.",
          "But the contest for the throne was only just beginning."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الشخص الذي يتولّى الحكم عندما يموت الملك (heir)",
            "رجل كان يحكم جزءًا من إنجلترا باسم الملك (earl)",
            "سبب تقوله لتدّعي أنّ العرش يجب أن يكون لك (claim)",
            "وعد جادّ جدًا، كثيرًا ما يُقطع على أشياء مقدّسة (oath)",
            "الاحتفال الذي يُتوَّج فيه شخص ملكًا (coronation)"
          ],
          "passage": [
            "في عام 1066 كانت إنجلترا تواجه مشكلة.",
            "مات الملك إدوارد المعترف (Edward the Confessor) في 5 يناير.",
            "لم يكن له أطفال، فلم يكن هناك وريث (heir) واضح.",
            "قال ثلاثة رجال إنّ العرش يجب أن يكون لهم.",
            "كان هارولد غودوينسون (Harold Godwinson) إيرل وِسِكس (Earl of Wessex) وصهر إدوارد.",
            "قال إنّ إدوارد سمّاه وريثًا وهو على فراش الموت.",
            "كان وليام (William) دوق نورماندي (Duke of Normandy)، عبر البحر في فرنسا.",
            "قال إنّ إدوارد وعده بالعرش في عام 1051.",
            "كان هارالد هاردرادا (Harald Hardrada) ملك النرويج، وهو من الفايكنغ.",
            "قال إنّ العرش قد وُعدت به عائلته قبل ذلك بزمن طويل.",
            "تصرّف هارولد غودوينسون بسرعة.",
            "تُوّج ملكًا في 6 يناير، يوم جنازة إدوارد.",
            "لكنّ الصراع على العرش كان قد بدأ للتوّ."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "osoba, która przejmuje władzę, gdy umiera król (heir, następca tronu)",
            "człowiek, który rządził częścią Anglii w imieniu króla (earl, hrabia)",
            "powód, by twierdzić, że tron powinien należeć do ciebie (claim)",
            "bardzo poważna obietnica, często składana na świętych przedmiotach (oath, przysięga)",
            "uroczystość, podczas której ktoś zostaje ukoronowany na króla (coronation, koronacja)"
          ],
          "passage": [
            "W 1066 roku Anglia miała problem.",
            "Król Edward Wyznawca (Edward the Confessor) zmarł 5 stycznia.",
            "Nie miał dzieci, więc nie było jasnego następcy tronu (heir).",
            "Trzech mężczyzn twierdziło, że tron powinien należeć do nich.",
            "Harold Godwinson był hrabią (Earl) Wessexu i szwagrem Edwarda.",
            "Mówił, że Edward na łożu śmierci wskazał go jako następcę.",
            "William (Wilhelm) był księciem Normandii, za morzem, we Francji.",
            "Mówił, że Edward obiecał mu tron w 1051 roku.",
            "Harald Hardrada był królem Norwegii, wikingiem.",
            "Mówił, że tron obiecano jego rodzinie dawno temu.",
            "Harold Godwinson działał szybko.",
            "Został ukoronowany na króla 6 stycznia, w dniu pogrzebu Edwarda.",
            "Ale walka o tron dopiero się zaczynała."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a pessoa que fica no lugar de um rei quando ele morre (heir, herdeiro)",
            "um homem que governava uma parte da Inglaterra em nome do rei (earl, conde)",
            "um motivo para dizer que o trono devia ser seu (claim, pretensão/direito ao trono)",
            "uma promessa muito séria, muitas vezes feita sobre objetos sagrados (oath, juramento)",
            "a cerimónia/cerimônia em que alguém é coroado rei (coronation, coroação)"
          ],
          "passage": [
            "Em 1066 a Inglaterra tinha um problema.",
            "O rei Edward (Eduardo) o Confessor morreu a 5 de janeiro.",
            "Não tinha filhos, por isso não havia um herdeiro (heir) claro.",
            "Três homens disseram que o trono devia ser deles.",
            "Harold Godwinson era o Conde (Earl) de Wessex e cunhado de Edward.",
            "Ele disse que Edward o tinha nomeado herdeiro no leito de morte.",
            "William (Guilherme) era o Duque da Normandia, do outro lado do mar, na França.",
            "Ele disse que Edward lhe tinha prometido o trono em 1051.",
            "Harald Hardrada era o Rei da Noruega, um viking.",
            "Ele disse que o trono tinha sido prometido à sua família muito tempo antes.",
            "Harold Godwinson agiu depressa.",
            "Foi coroado Rei a 6 de janeiro, no dia do funeral de Edward.",
            "Mas a luta pelo trono estava só a começar/começando."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "qofka la wareega marka boqor dhinto (heir)",
            "nin qayb England ka mid ah boqorka u xukumi jiray (earl)",
            "sabab lagu sheegto in carshigu kaaga yahay (claim)",
            "ballan aad u culus, oo inta badan lagu sameeyo waxyaabo barakaysan (oath)",
            "xafladda qof lagu caleemo-saaro boqor (coronation)"
          ],
          "passage": [
            "Sannadkii 1066 England dhibaato ayay qabtay.",
            "Boqor Edward the Confessor wuxuu dhintay 5 Janaayo.",
            "Carruur ma lahayn, sidaas darteed dhaxal-suge cad ma jirin.",
            "Saddex nin ayaa yiri carshigu annaga ayuu noo yahay.",
            "Harold Godwinson wuxuu ahaa Earl-ka Wessex iyo seeddigii Edward.",
            "Wuxuu yiri Edward wuxuu ku magacaabay dhaxal-suge isagoo sariirta dhimashada saaran.",
            "William wuxuu ahaa Duke-ka Normandy, badda ka shisheeya France.",
            "Wuxuu yiri Edward wuxuu u ballan-qaaday carshiga 1051.",
            "Harald Hardrada wuxuu ahaa Boqorka Norway, Viking ah.",
            "Wuxuu yiri carshiga qoyskiisa ayaa loo ballan-qaaday waqti dheer ka hor.",
            "Harold Godwinson si dhaqso ah ayuu u dhaqaaqay.",
            "Boqor ayaa loo caleemo-saaray 6 Janaayo, maalintii aaska Edward.",
            "Laakiin tartankii carshiga hadda ayuu bilaabmayay."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "людина, яка переймає владу, коли король помирає (heir)",
            "чоловік, який правив частиною Англії від імені короля (earl)",
            "підстава стверджувати, що трон має бути твоїм (claim)",
            "дуже серйозна обіцянка, часто дана на святих предметах (oath)",
            "церемонія, на якій когось коронують королем (coronation)"
          ],
          "passage": [
            "У 1066 році в Англії виникла проблема.",
            "Король Едуард Сповідник (Edward the Confessor) помер 5 січня.",
            "У нього не було дітей, тож не було очевидного спадкоємця (heir).",
            "Троє чоловіків заявили, що трон має належати їм.",
            "Гарольд Ґодвінсон (Harold Godwinson) був ерлом (earl) Вессексу і шваґром Едуарда.",
            "Він казав, що Едуард назвав його спадкоємцем на смертному ложі.",
            "Вільгельм (William) був герцогом Нормандії, за морем, у Франції.",
            "Він казав, що Едуард пообіцяв йому трон у 1051 році.",
            "Гаральд Суворий (Harald Hardrada) був королем Норвегії, вікінгом.",
            "Він казав, що трон давно пообіцяли його родині.",
            "Гарольд Ґодвінсон діяв швидко.",
            "Його коронували 6 січня, у день похорону Едуарда.",
            "Але боротьба за трон лише починалася."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ شخص جو بادشاہ کے مرنے پر اس کی جگہ لیتا ہے (heir)",
            "ایک آدمی جو بادشاہ کی طرف سے انگلینڈ کے کسی حصے پر حکومت کرتا تھا (earl)",
            "یہ کہنے کی کوئی وجہ کہ تخت آپ کا ہونا چاہیے (claim)",
            "ایک بہت سنجیدہ وعدہ، جو اکثر مقدس چیزوں پر کیا جاتا تھا (oath)",
            "وہ تقریب جس میں کسی کے سر پر بادشاہ کا تاج رکھا جاتا ہے (coronation)"
          ],
          "passage": [
            "1066 میں انگلینڈ کو ایک مسئلہ درپیش تھا۔",
            "بادشاہ ایڈورڈ دی کنفیسر (Edward the Confessor) 5 جنوری کو مر گیا۔",
            "اس کی کوئی اولاد نہ تھی، اس لیے کوئی واضح وارث (heir) نہیں تھا۔",
            "تین آدمیوں نے کہا کہ تخت ان کا ہونا چاہیے۔",
            "ہیرلڈ گاڈونسن (Harold Godwinson) ویسیکس (Wessex) کا ارل اور ایڈورڈ کا بہنوئی تھا۔",
            "اس نے کہا کہ ایڈورڈ نے مرتے وقت اسے اپنا وارث نامزد کیا تھا۔",
            "ولیم (William) سمندر کے اس پار فرانس میں نارمنڈی (Normandy) کا ڈیوک تھا۔",
            "اس نے کہا کہ ایڈورڈ نے 1051 میں اسے تخت کا وعدہ کیا تھا۔",
            "ہیرلڈ ہارڈراڈا (Harald Hardrada) ناروے کا بادشاہ تھا، ایک وائکنگ۔",
            "اس نے کہا کہ تخت کا وعدہ بہت پہلے اس کے خاندان سے کیا گیا تھا۔",
            "ہیرلڈ گاڈونسن نے تیزی سے قدم اٹھایا۔",
            "6 جنوری کو، ایڈورڈ کی تدفین کے دن، اس کی تاج پوشی (coronation) ہو گئی۔",
            "لیکن تخت کی یہ کشمکش ابھی شروع ہی ہوئی تھی۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Where does 1066 fit?",
          paragraphs: [
            "Historians put events in order of time. This is called chronology. Years before the birth of Jesus are labelled BC, and the bigger the number, the longer ago it was: Alexander the Great conquered Egypt in 332 BC, and the Roman Empire was created in 27 BC. Years after the birth of Jesus are labelled AD, and here the bigger the number, the more recent the event: the Romans left Britain in AD 410, the Great Fire of London was in 1666, and Queen Elizabeth II died in 2022.",
            "So where does 1066 sit? It is AD, so it comes after the Romans left Britain. It is 600 years before the Great Fire of London, and nearly a thousand years before today. Historians call this period the Middle Ages, or the medieval period. England was a kingdom ruled by a king, with powerful earls who ran its regions for him.",
            "Keep this timeline in your head as you read. Everything in this unit happens inside one year, 1066, between a death in January and a battle in October. Knowing the order of events is the first skill of a historian, and you will be asked to use it in every chapter."
          ],
          worked: {
            q: "How many years passed between the Romans leaving Britain (AD 410) and the year 1066?",
            steps: [
              "Both dates are AD, so the later date minus the earlier date gives the gap.",
              "1066 − 410 = 656."
            ],
            answer: "656 years",
            checks: [{ expr: "1066-410", value: 656, tol: 0 }]
          },
          tip: "BC counts down to zero; AD counts up from it. For two AD dates, subtract the smaller from the bigger to find the gap."
        },
        {
          heading: "A king who let others rule",
          paragraphs: [
            "Edward the Confessor had been King of England since 1042. He was a deeply religious man, who spent more time on his relationship with God than on running his kingdom. Instead he relied on his earls, the powerful men who ruled parts of England on his behalf, to govern the country for him.",
            "The most powerful of these earls was Harold Godwinson, Earl of Wessex. Wessex was the richest and strongest region in England. To secure his throne, Edward had married Harold's sister, which made Harold the king's brother-in-law as well as his close friend and right-hand man. By the end of Edward's reign, Harold was running England in all but name.",
            "There was one thing Edward did not do: he did not have a son. When he died on 5 January 1066, after 24 years as king, there was no obvious heir. Because Edward had let others rule for him, it was also not clear who he would have wanted to take over. England fell into a crisis. The contest for the throne had begun."
          ],
          tip: "An earl ruled part of England for the king. Remember the word: it comes up in every lesson of this unit."
        },
        {
          heading: "Three contenders, three claims",
          paragraphs: [
            "Harold Godwinson was English, the Earl of Wessex, and already the most powerful man in the country. His claim was that Edward had named him as heir on his deathbed. He had the support of the English nobles, who wanted a strong soldier on the throne straight away. Against him: he was not of royal blood, and in 1064 he had sworn an oath, on holy relics, to support William.",
            "William, Duke of Normandy, was a ruthless ruler from across the Channel in France, feared as one of the best warriors in Europe. His claim was that Edward had promised him the throne in 1051, when William visited England, and that Harold had confirmed it with his oath in 1064. Against him: he was a foreigner, and a promise made fifteen years earlier is hard to prove. One English writer, Eadmer, said Harold only agreed because he was in danger: “Harold saw there was danger and so agreed to all that William wished.”",
            "Harald Hardrada was King of Norway, a fierce Viking warrior whose name means ‘hard ruler’. His claim went back a generation: an earlier Norwegian king, Magnus, had been promised the English throne by Harthacnut, who ruled England from 1040 to 1042. Harthacnut's father Cnut had been King of England before that, from 1016 to 1035, so Hardrada said he was reclaiming a Viking line. He could count on support from Viking families in the north of England. Against him: the promise was not made to him, and most of England did not want a Viking king."
          ],
          quote: { text: "William told Harold that King Edward had promised him that he would succeed him on the throne.", source: "Eadmer, writing c. 1120, as given in the department's source sheet" },
          tip: "Two Harolds, one Harald. Harold Godwinson is English; Harald Hardrada is the Norwegian. Spell them differently and you will never mix them up."
        },
        {
          heading: "Harold moves fast",
          paragraphs: [
            "Harold Godwinson did not wait. On 6 January 1066, the day after Edward died and the very same day as the king's funeral, Harold was crowned King Harold II in Westminster Abbey. The English nobles wanted a quick coronation so that there was a king on the throne before anyone could argue.",
            "Think about how the other two contenders felt when the news reached them. William believed the throne had been promised to him and that Harold had sworn to support him. Hardrada believed a Viking line was being pushed aside. A coronation in one day looked, to both men, like a crown being grabbed. Both began to prepare.",
            "Your lesson asked what makes a good king in 1066: a strong army, skill in battle, loyal supporters, knowing how to lead and understand the country, ruthlessness towards enemies, and a valid claim through blood or promise. As you read the rest of this unit, keep scoring the three men against that list. The contest for the throne was not over; it had just moved from the council chamber to the battlefield."
          ],
          tip: "Edward died on 5 January; Harold was crowned on 6 January. Two dates, one day apart: learn them as a pair."
        }
      ],
      gate: [
        { kind: "mcq", q: "Why was it not clear who should be king when Edward the Confessor died?", options: ["Edward had no children, and he had let his earls rule for him", "Edward had twin sons who both wanted the throne", "England had never had a king before", "Edward had given the crown to the Pope"], answer: 0, why: "Edward had no son or heir, and because he relied on his earls to rule, nobody could be sure who he wanted to take over.",
          feedback: [
            "",
            "Edward had no children at all. That is the heart of the problem: there was no son to inherit, so three men could each say the crown should be theirs.",
            "England had had kings for hundreds of years, including Cnut and Harthacnut before Edward. The crisis was not about having a king but about which man should be the next one.",
            "The Pope was not given the crown. He does appear later in the story, when he supported William's invasion, but the crisis in January 1066 was caused by Edward dying without an heir."
          ] },
        { kind: "numeric", q: "Edward the Confessor became king in 1042 and died in 1066. For how many years was he king?", answer: 24, tolerance: 0, units: "years", why: "1066 − 1042 = 24. Subtract the earlier AD date from the later one to find the gap.", check: "1066-1042",
          misconceptions: [
            { answer: 25, says: "You have counted both 1042 and 1066 as whole years. To find the gap between two dates, subtract: 1066 − 1042 = 24.", check: "1066-1042+1" },
            { answer: 23, says: "You have taken one off the answer. The gap between two AD dates is simply the later date minus the earlier one: 1066 − 1042 = 24.", check: "1066-1042-1" }
          ] },
        { kind: "gap", q: "Harold Godwinson was crowned on 6 January 1066, the same day as Edward's ___.", answer: "funeral", options: ["funeral", "wedding", "birthday"], why: "Edward was buried on 6 January, and Harold was crowned in Westminster Abbey the same day, so that England had a king at once.",
          feedback: {
            "wedding": "Edward had married Harold's sister many years earlier, to secure his throne. The event on 6 January 1066 was Edward's burial: he had died the day before.",
            "birthday": "Nothing in your lesson mentions Edward's birthday. The point is that Harold was crowned on the very day Edward was buried, which shows how fast the English nobles moved."
          } }
      ],
      modules: [
        {
          title: "Who claimed what?",
          task: {
            kind: "match",
            q: "Match each contender to his main claim to the English throne.",
            pairs: [
              ["Harold Godwinson", "Edward named him heir on his deathbed, and the English nobles supported him"],
              ["William, Duke of Normandy", "Edward promised him the throne in 1051, and Harold swore an oath to support him in 1064"],
              ["Harald Hardrada", "An earlier Norwegian king had been promised the throne by Harthacnut, so he was reclaiming a Viking line"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with where each man came from: England, Normandy, Norway.",
                "The English contender's claim comes from the dying king and the English nobles.",
                "The Norman's claim comes from a promise in 1051 and an oath in 1064.",
                "The Viking's claim goes back to earlier kings: Cnut and Harthacnut."
              ],
              example: {
                q: "Practice: a king dies and leaves a will naming his nephew. His cousin says the throne was promised to her years ago. Whose claim rests on a promise, and whose on the king's last wishes?",
                steps: ["The nephew's claim rests on the will: the king's last wishes.", "The cousin's claim rests on an old promise."],
                answer: "The nephew: last wishes. The cousin: a promise."
              }
            },
            core: { hint: "Deathbed, promise and oath, Viking line. Each phrase belongs to one man." },
            stretch: { extend: "Each claim has a weakness: not royal blood, a foreigner with an old promise, a promise made to someone else. Match each weakness to its contender, then say which weakness you think mattered most to people in England." }
          },
          why: "Harold's claim was Edward's deathbed wish and English support; William's was Edward's promise in 1051 backed by Harold's oath in 1064; Hardrada's was a promise made to the Norwegian king Magnus by Harthacnut, which he said made him heir to a Viking line.",
          explain: "Say, in one sentence, which of the three claims you find most convincing, and why."
        },
        {
          title: "The road to 1066",
          task: {
            kind: "order",
            q: "Put these events in chronological order, earliest first.",
            items: [
              "Cnut becomes King of England (1016)",
              "Harthacnut is King of England (1040 to 1042)",
              "Edward the Confessor becomes King of England (1042)",
              "Edward promises the throne to William (1051)",
              "Harold swears an oath to support William (1064)",
              "Edward dies without an heir (5 January 1066)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Every event has a year in brackets. Chronological order means smallest year first.",
                "Two events share 1042: Harthacnut's reign ends in 1042 and Edward's begins in 1042, so the one that ends comes first.",
                "Check the story makes sense: a promise (1051) must come before the oath that confirms it (1064), and both come before Edward dies."
              ],
              example: {
                q: "Practice: put in order: the Great Fire of London (1666), the Romans leave Britain (410), Queen Elizabeth II dies (2022).",
                steps: ["All three are AD, so smallest number first.", "410, then 1666, then 2022."],
                answer: "Romans leave Britain; Great Fire of London; Queen Elizabeth II dies."
              }
            },
            core: { hint: "Cnut, then his son Harthacnut, then Edward. Then the promise, then the oath, then the death." },
            stretch: { extend: "Harold's oath came thirteen years after Edward's promise. Explain why William thought the oath made his claim stronger, and why Harold said it did not count." }
          },
          why: "Cnut (1016) came before his son Harthacnut (1040 to 1042); Edward took over in 1042; he promised William the throne in 1051; Harold swore his oath in 1064; and Edward died on 5 January 1066.",
          explain: "Say which two events on the list are closest together in time, and how you can tell."
        },
        {
          title: "Who should be king?",
          task: {
            kind: "written",
            q: "Who should have been King of England in 1066: Harold Godwinson, William of Normandy or Harald Hardrada? Write one PEE paragraph (Point, Evidence, Explain) arguing for your choice.",
            criteria: [
              "Point: I name my contender and say clearly that he should be king.",
              "Evidence: I give at least two facts about his claim or his qualities from this chapter.",
              "Explain: I say why this evidence makes him the best choice, using the qualities of a good king.",
              "I mention one weakness of my contender or one strength of a rival, and answer it."
            ],
            model: "I think William, Duke of Normandy, should have been King of England in 1066. For example, Edward the Confessor promised him the throne in 1051, and in 1064 Harold Godwinson swore an oath on holy relics to support him. This shows that William had a valid claim through a promise, which was one of the things that made a good king in 1066. Harold said Edward changed his mind on his deathbed, but a promise made in front of witnesses and confirmed by an oath is stronger than a few words no one else heard. William was also a ruthless, feared warrior with the best army in Europe, so he had the strength to keep the throne once he had it."
          },
          levels: {
            support: {
              steps: [
                "Choose your man. Write: I think ___ should have been King of England in 1066.",
                "Evidence: For example, ___ (one fact about his claim) and ___ (one fact about his qualities).",
                "Explain: This shows that ___ because a good king in 1066 needed ___.",
                "Answer a rival: Some people say ___, but ___."
              ],
              example: {
                q: "Practice: write a PEE paragraph arguing that a strong army is the most important quality for a king in 1066.",
                steps: ["Point: A strong army is the most important quality.", "Evidence: In 1066 two rivals were planning to invade England.", "Explain: A king with a weak army would lose his crown in battle, whatever his claim."],
                answer: "I think a strong army was the most important quality for a king in 1066. For example, both William and Hardrada were preparing to invade England that year. This shows that a king needed a strong army because without one he would lose his crown in battle, however good his claim was."
              }
            },
            core: { hint: "Point, Evidence, Explain. Name him, give two facts, link them to the list of what makes a good king." },
            stretch: { extend: "Rewrite your paragraph arguing for a different contender, then say which paragraph you found easier to write and what that tells you about the strength of each claim." }
          },
          why: "A strong answer names a contender, gives two accurate facts about his claim and his qualities, links them to what made a good king in 1066, and deals with one objection. There is no single right answer: historians still disagree.",
          explain: "Say, in one sentence, which piece of evidence does most to support your choice.",
          contexts: [
            { label: "Argue for Harold",
              q: "Harold Godwinson was crowned King of England on 6 January 1066. Argue that he was the right choice. Write one PEE paragraph (Point, Evidence, Explain) arguing for your choice.",
              why: "Harold's strengths are Edward's deathbed wish, the support of the English nobles, and his record as an experienced soldier who had run England for years. His weakness is his oath to William; a good answer explains it away." },
            { label: "Argue for William",
              q: "William, Duke of Normandy, said the crown had been promised to him. Argue that he was the right choice. Write one PEE paragraph (Point, Evidence, Explain) arguing for your choice.",
              why: "William's strengths are the promise of 1051, Harold's oath of 1064, his reputation as a ruthless warrior and the best army in Europe. His weakness is that he was a foreigner relying on an old promise." },
            { label: "Argue for Hardrada",
              q: "Harald Hardrada, King of Norway, said the English throne belonged to a Viking line. Argue that he was the right choice. Write one PEE paragraph (Point, Evidence, Explain) arguing for your choice.",
              why: "Hardrada's strengths are the promise made to the Norwegian king Magnus by Harthacnut, the memory of Cnut's reign, Viking support in the north and his fame as a warrior. His weakness is that the promise was not made to him." }
          ]
        }
      ]
    },
    // ───────────────────────────── CHAPTER 2 ─────────────────────────────
    {
      key: "harolds-summer", n: 2,
      title: "Harold's summer of problems",
      lead: "This chapter puts you in King Harold's shoes in the summer of 1066: two enemies, one army, and a harvest that would not wait.",
      covers: [2],
      pretext: {
        words: [
          { word: "invade", means: "to enter a country with an army to take it over", sentence: "William and Hardrada both planned to invade England." },
          { word: "harvest", means: "the time when crops are gathered in from the fields", sentence: "By September the harvest could not wait any longer." },
          { word: "peasant", means: "an ordinary person who worked on the land", sentence: "Most of Harold's soldiers were peasants and farmers." },
          { word: "Channel", means: "the narrow sea between England and France", sentence: "William's ships had to cross the Channel." },
          { word: "Pope", means: "the head of the Christian Church", sentence: "The Pope gave his support to William." }
        ],
        passage: [
          "Harold was king, but he was not safe.",
          "William was in Normandy, to the south, across the Channel.",
          "Hardrada was in Norway, far to the north-east.",
          "Harold could be attacked from the north and the south at once.",
          "His first problem was where to put his army.",
          "He chose the south coast, because William was closer and had the best army in Europe.",
          "All summer, the winds were wrong and William's ships could not sail.",
          "Harold's second problem was his soldiers.",
          "Most of them were farmers, and September was harvest time.",
          "Keeping them together was also very expensive.",
          "On 8 September, Harold sent his army home.",
          "Ten days later, the Vikings landed in the north."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "أن تدخل بلدًا بجيش للاستيلاء عليه (invade)",
            "الوقت الذي تُجمع فيه المحاصيل من الحقول (harvest)",
            "شخص عاديّ كان يعمل في الأرض (peasant)",
            "البحر الضيّق بين إنجلترا وفرنسا (Channel)",
            "رئيس الكنيسة المسيحية (Pope)"
          ],
          "passage": [
            "كان هارولد ملكًا، لكنه لم يكن في أمان.",
            "كان وليام في نورماندي، إلى الجنوب، عبر القنال (Channel).",
            "وكان هاردرادا في النرويج، بعيدًا إلى الشمال الشرقي.",
            "كان يمكن أن يُهاجَم هارولد من الشمال والجنوب في وقت واحد.",
            "كانت مشكلته الأولى أين يضع جيشه.",
            "اختار الساحل الجنوبي، لأنّ وليام كان أقرب وكان يملك أفضل جيش في أوروبا.",
            "طوال الصيف كانت الرياح معاكسة، فلم تستطع سفن وليام أن تُبحر.",
            "كانت مشكلة هارولد الثانية جنوده.",
            "كان أكثرهم مزارعين، وكان سبتمبر وقت الحصاد.",
            "وكان إبقاؤهم معًا مكلفًا جدًا أيضًا.",
            "في 8 سبتمبر، أرسل هارولد جيشه إلى بيوتهم.",
            "وبعد عشرة أيام، نزل الفايكنغ في الشمال."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "wejść do kraju z armią, żeby go zająć (invade, najechać)",
            "czas, kiedy zbiera się plony z pól (harvest, żniwa)",
            "zwykły człowiek, który pracował na roli (peasant, chłop)",
            "wąskie morze między Anglią a Francją (Channel, kanał La Manche)",
            "głowa Kościoła chrześcijańskiego (Pope, papież)"
          ],
          "passage": [
            "Harold był królem, ale nie był bezpieczny.",
            "William był w Normandii, na południu, za kanałem La Manche (Channel).",
            "Hardrada był w Norwegii, daleko na północnym wschodzie.",
            "Harold mógł zostać zaatakowany z północy i z południa jednocześnie.",
            "Jego pierwszym problemem było to, gdzie ustawić armię.",
            "Wybrał południowe wybrzeże, bo William był bliżej i miał najlepszą armię w Europie.",
            "Przez całe lato wiatry były niesprzyjające i statki Williama nie mogły wypłynąć.",
            "Drugim problemem Harolda byli jego żołnierze.",
            "Większość z nich była rolnikami, a wrzesień to czas żniw (harvest).",
            "Utrzymywanie ich razem było też bardzo kosztowne.",
            "8 września Harold odesłał swoją armię do domu.",
            "Dziesięć dni później na północy wylądowali wikingowie."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "entrar num país com um exército para o conquistar (invade, invadir)",
            "a época em que as colheitas são recolhidas dos campos (harvest, colheita)",
            "uma pessoa comum que trabalhava na terra (peasant, camponês)",
            "o mar estreito entre a Inglaterra e a França (Channel, Canal da Mancha)",
            "o chefe da Igreja Cristã (Pope, Papa)"
          ],
          "passage": [
            "Harold era rei, mas não estava seguro.",
            "William estava na Normandia, a sul, do outro lado do Canal da Mancha (the Channel).",
            "Hardrada estava na Noruega, longe, a nordeste.",
            "Harold podia ser atacado pelo norte e pelo sul ao mesmo tempo.",
            "O seu primeiro problema era onde colocar o seu exército.",
            "Escolheu a costa sul, porque William estava mais perto e tinha o melhor exército da Europa.",
            "Durante todo o verão, os ventos estiveram contrários e os navios de William não puderam zarpar.",
            "O segundo problema de Harold eram os seus soldados.",
            "A maior parte deles eram agricultores, e setembro era a época da colheita.",
            "Mantê-los juntos também era muito caro.",
            "A 8 de setembro, Harold mandou o seu exército para casa.",
            "Dez dias depois, os vikings desembarcaram no norte."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "dal ciidan ku galid si loo qabsado (invade)",
            "waqtiga dalagga beeraha laga soo ururiyo (harvest)",
            "qof caadi ah oo dhulka ka shaqayn jiray (peasant)",
            "badda cidhiidhi ah ee u dhexaysa England iyo France (the Channel)",
            "madaxa Kaniisadda Masiixiyiinta (Pope)"
          ],
          "passage": [
            "Harold boqor ayuu ahaa, laakiin ammaan ma ahayn.",
            "William wuxuu joogay Normandy, dhanka koonfureed, Channel-ka ka shisheeya.",
            "Hardrada wuxuu joogay Norway, waqooyi-bari meel fog.",
            "Harold waxaa laga weerari karay waqooyi iyo koonfur isku mar.",
            "Dhibaatadiisii koowaad waxay ahayd meesha uu ciidankiisa dhigo.",
            "Wuxuu doortay xeebta koonfureed, sababtoo ah William ka dhow yahay oo ciidanka ugu fiican Yurub lahaa.",
            "Xagaagii oo dhan, dabayshu khalad ayay ahayd, doonyihii William-na ma shiraacan karin.",
            "Dhibaatadii labaad ee Harold waxay ahayd askartiisa.",
            "Badankoodu beeraley ayay ahaayeen, Sebtembar-na waxay ahayd waqtiga goosashada (harvest).",
            "Isku haynta ay isku haysta sidoo kale aad ayay qaali u ahayd.",
            "8 Sebtembar, Harold ciidankiisa guryahooda ayuu u diray.",
            "Toban maalmood ka dib, Vikings-ku waqooyi ayay ka soo degeen."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "увійти в країну з армією, щоб захопити її (invade)",
            "час, коли врожай збирають із полів (harvest)",
            "звичайна людина, яка працювала на землі (peasant)",
            "вузьке море між Англією і Францією (Channel)",
            "голова християнської Церкви (Pope)"
          ],
          "passage": [
            "Гарольд був королем, але він не був у безпеці.",
            "Вільгельм був у Нормандії, на півдні, за Ла-Маншем (Channel).",
            "Гаральд Суворий був у Норвегії, далеко на північному сході.",
            "На Гарольда могли напасти з півночі й півдня одночасно.",
            "Його перша проблема — де поставити армію.",
            "Він вибрав південне узбережжя, бо Вільгельм був ближче і мав найкращу армію в Європі.",
            "Усе літо вітри були несприятливі, і кораблі Вільгельма не могли відплисти.",
            "Друга проблема Гарольда — його солдати.",
            "Більшість із них були селянами, а вересень був часом жнив (harvest).",
            "Тримати їх разом було також дуже дорого.",
            "8 вересня Гарольд відпустив свою армію додому.",
            "Через десять днів на півночі висадилися вікінги."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "کسی ملک پر قبضہ کرنے کے لیے فوج کے ساتھ اس میں داخل ہونا (invade)",
            "وہ وقت جب کھیتوں سے فصلیں کاٹ کر جمع کی جاتی ہیں (harvest)",
            "ایک عام آدمی جو زمین پر کام کرتا تھا (peasant)",
            "انگلینڈ اور فرانس کے بیچ کا تنگ سمندر (Channel)",
            "مسیحی کلیسا کا سربراہ (Pope)"
          ],
          "passage": [
            "ہیرلڈ بادشاہ تھا، لیکن محفوظ نہیں تھا۔",
            "ولیم جنوب میں، چینل (Channel) کے اس پار نارمنڈی میں تھا۔",
            "ہارڈراڈا ناروے میں تھا، دور شمال مشرق میں۔",
            "ہیرلڈ پر شمال اور جنوب سے ایک ہی وقت میں حملہ ہو سکتا تھا۔",
            "اس کا پہلا مسئلہ یہ تھا کہ اپنی فوج کہاں رکھے۔",
            "اس نے جنوبی ساحل چنا، کیونکہ ولیم زیادہ قریب تھا اور اس کے پاس یورپ کی سب سے اچھی فوج تھی۔",
            "پوری گرمیوں میں ہوائیں مخالف رہیں اور ولیم کے جہاز روانہ نہ ہو سکے۔",
            "ہیرلڈ کا دوسرا مسئلہ اس کے سپاہی تھے۔",
            "ان میں سے زیادہ تر کسان تھے، اور ستمبر فصل کٹائی (harvest) کا وقت تھا۔",
            "انھیں اکٹھا رکھنا بھی بہت مہنگا تھا۔",
            "8 ستمبر کو ہیرلڈ نے اپنی فوج کو گھر بھیج دیا۔",
            "دس دن بعد وائکنگ شمال میں اتر آئے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Problem 1: north or south?",
          paragraphs: [
            "Look at a map of 1066. William's Normandy lies just across the Channel to the south of England. Hardrada's Norway lies far away to the north-east, across the North Sea. Harold, in the middle, could be attacked from either direction, and he had only one army. His biggest problem was simple to state and very hard to solve: where should he put his soldiers?",
            "William looked like the bigger threat. He had one of the best armies in Europe. He was very close to England, a short crossing away. And he had won the support of the Pope, the head of the Christian Church, which in 1066 meant that many people believed God was on William's side. Hardrada, meanwhile, was gathering a huge force: over 300 ships and more than 7,000 fierce Viking soldiers.",
            "Harold chose the south. He kept his army on the south coast through the summer of 1066, waiting for William. But William never came. Very bad weather all summer long meant that his fleet could not sail. Harold's army sat on the beaches, watching an empty sea."
          ],
          tip: "North or south, keep or send home. Two problems, two decisions. Everything that happens next follows from them."
        },
        {
          heading: "Problem 2: an army that could not stay",
          paragraphs: [
            "Harold's army was not a professional force. Most of his soldiers were peasants and farmers who fought when the king called them. They could not stay away from their fields for ever, and by September it was harvest time. If the crops were not gathered in, Harold's people and his army would starve in the winter, whether or not there was a war.",
            "There was a second reason. Keeping thousands of men together, fed and paid, when they were not fighting, was very expensive. Harold could not afford to keep his army together indefinitely. Every week on the south coast with no sign of William cost him money he did not have.",
            "So on 8 September 1066 Harold made his second decision: he sent his army home for the harvest. It was a reasonable choice. He had waited all summer, the weather still kept William in Normandy, and his people needed food for the winter. Ten days later, it looked like the worst decision of his life."
          ],
          worked: {
            q: "Harold sent his army home on 8 September 1066. Hardrada landed in the north on 18 September. How many days did Harold have before the first invasion?",
            steps: [
              "Both dates are in September, so subtract the day numbers.",
              "18 − 8 = 10 days."
            ],
            answer: "10 days",
            checks: [{ expr: "18-8", value: 10, tol: 0 }]
          },
          tip: "Harvest and cost: two reasons to send the army home. Learn both; a question may ask for two."
        },
        {
          heading: "Unlucky, or a bad decision?",
          paragraphs: [
            "Your lesson asked you to be Harold's adviser. Should he have stationed his army in the north, in the south, or somewhere in the middle? Should he have sent it home? Historians argue about this. Harold guarded against the enemy who was closer and stronger, which looks sensible. He sent his army home when the weather had held William back all summer, which also looks sensible.",
            "But both decisions rested on things Harold could not control: the wind in the Channel and the timing of Hardrada's fleet. That is what makes 1066 such a good test of a historian's skill. When something goes wrong, was it luck, or was it a mistake? Keep that question in mind. It is the big question of the whole unit, and it starts here, before a single battle has been fought.",
            "One more clue about Harold's position comes from the Bayeux Tapestry, a long embroidered cloth made after the Conquest. One scene shows Harold in France in 1064, touching holy relics as he swears his oath to William. Whatever Harold said in 1066, the Normans had a picture of his promise."
          ],
          tip: "When you judge a decision, ask: what did the person know at the time? Harold did not know Hardrada's ships were ten days away."
        }
      ],
      gate: [
        { kind: "mcq", q: "Why did Harold keep his army on the south coast through the summer of 1066?", options: ["William was closer, had the best army in Europe and the Pope's support", "The south coast had the best harvest", "Hardrada had already been defeated", "The English nobles lived in the south"], answer: 0, why: "Harold expected William, the nearer and stronger enemy, to land in the south. The Pope's support made William look even more dangerous.",
          feedback: [
            "",
            "The harvest was a reason to send the army home, not a reason to put it in the south. Harold chose the south because that is where the stronger, nearer enemy, William, was expected to land.",
            "Hardrada had not been defeated yet; he had not even arrived. Harold chose the south because William, just across the Channel, looked like the bigger threat.",
            "Where the nobles lived did not decide where the army went. Harold put it in the south because William was closest and had the best army in Europe."
          ] },
        { kind: "gap", q: "By September, Harold had to decide whether to send his army home for the ___.", answer: "harvest", options: ["harvest", "coronation", "winter"], why: "Most of Harold's soldiers were farmers. If the harvest was not gathered, the kingdom would starve.",
          feedback: {
            "coronation": "The coronation had already happened, back in January, when Harold was crowned. In September the problem was the harvest: his farmer-soldiers needed to gather the crops.",
            "winter": "Close, because the harvest is what feeds people through the winter, but your lesson's word is harvest. Harold's soldiers were farmers who had to gather the crops in September."
          } },
        { kind: "mcq", q: "Why could William not sail to England during the summer of 1066?", options: ["Very bad weather kept his ships in Normandy", "The Pope forbade him to sail", "He was fighting Hardrada in Norway", "His ships had not been built yet"], answer: 0, why: "All summer the weather was against William. His fleet could not cross the Channel until the wind changed in the autumn.",
          feedback: [
            "",
            "The Pope supported William; he did not stop him. What kept William in Normandy all summer was very bad weather in the Channel.",
            "William and Hardrada never fought each other. They were both planning to invade England separately. William was held back by bad weather, not by a war in Norway.",
            "William's men had been building ships since January, when he heard of Harold's coronation. By the summer the fleet was ready; it was the weather that would not let it sail."
          ] }
      ],
      modules: [
        {
          title: "Two problems, two decisions",
          task: {
            kind: "match",
            q: "Match each problem Harold faced in 1066 to the decision he actually made about it.",
            pairs: [
              ["Where to put his one army, with enemies to the north and the south", "He kept it on the south coast, waiting for William"],
              ["Soldiers who were farmers, with the harvest due in September", "He sent them home on 8 September"],
              ["The cost of keeping thousands of men together with no fighting", "He accepted he could not keep the army together indefinitely"],
              ["Bad weather all summer in the Channel", "He could do nothing; it kept William away but also kept Harold waiting"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Problem 1 is about place: north or south. Find the decision that names a place.",
                "Problem 2 is about time and money: harvest and cost. Find the decisions about sending men home and paying for them.",
                "One item is not a decision at all but something Harold could not control. That is the weather."
              ],
              example: {
                q: "Practice: a head teacher has one spare teacher and two classes without a teacher, one of which has an exam next week. Which problem is about place, and what would you expect the decision to be?",
                steps: ["The problem is where to put the one teacher.", "The decision picks the class with the greater need: the exam class."],
                answer: "A problem of place; the teacher goes to the exam class, the bigger threat."
              }
            },
            core: { hint: "Two problems were Harold's to solve. One, the weather, was nobody's. Match the places, then the money, then the weather." },
            stretch: { extend: "For each decision, write one sentence saying whether it was a good decision given what Harold knew at the time, and one sentence saying how it looked after 18 September." }
          },
          why: "Harold put his army in the south because William was the nearer and stronger threat; he sent it home on 8 September for the harvest and because it cost too much to keep; the weather was beyond his control and cut both ways.",
          explain: "Say, in one sentence, which of Harold's two decisions you would have made differently, and why."
        },
        {
          title: "Count the days",
          task: {
            kind: "numeric",
            q: "Harold sent his army home on 8 September 1066. Hardrada's Vikings landed on 18 September. How many days after sending his army home was Harold invaded?",
            answer: 10, tolerance: 0, units: "days",
            why: "18 − 8 = 10. Within ten days of sending his soldiers home, Harold had a Viking army in the north of England.",
            check: "18-8",
            misconceptions: [
              { answer: 11, says: "You have counted both the 8th and the 18th. The number of days after one date until another is the difference between them: 18 − 8 = 10.", check: "18-8+1" },
              { answer: 26, says: "You have added the two day numbers together. To find how long after one date another date comes, subtract the earlier from the later: 18 − 8 = 10.", check: "18+8" }
            ]
          },
          levels: {
            support: {
              steps: [
                "Write both dates: 8 September and 18 September. They are in the same month.",
                "The later day number minus the earlier day number gives the gap.",
                "18 − 8 = 10."
              ],
              example: {
                q: "Practice: Edward died on 5 January and Harold was crowned on 6 January. How many days later was the coronation?",
                steps: ["Same month, so subtract the day numbers.", "6 − 5 = 1."],
                answer: "1 day",
                checks: [{ expr: "6-5", value: 1, tol: 0 }]
              }
            },
            core: { hint: "Same month, so just subtract the day numbers." },
            stretch: { extend: "Harold's men needed roughly a day's march for every 25 kilometres. Explain why ten days was not long enough for a scattered army to gather again, and what that meant for Harold when the news arrived." }
          },
          why: "The gap between 8 and 18 September is 10 days. Harold's farmers had barely reached their fields when he had to call them back and march north.",
          explain: "Say, in one sentence, why the timing of Hardrada's landing was so damaging for Harold."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 3 ─────────────────────────────
    {
      key: "stamford-bridge", n: 3,
      title: "Stamford Bridge",
      lead: "This chapter takes you north with Harold on a five-day march, through a battle he won brilliantly, and into the paragraph your teacher will ask you to write about it.",
      covers: [2, 3],
      pretext: {
        words: [
          { word: "Viking", means: "a warrior from Norway, Denmark or Sweden who raided and settled in England", sentence: "Hardrada led a Viking army to York." },
          { word: "surprise", means: "to attack an enemy who is not expecting you", sentence: "Harold wanted to take the Vikings by surprise." },
          { word: "armour", means: "metal or leather worn to protect the body in battle", sentence: "Many Vikings had left their armour at the ships." },
          { word: "outnumbered", means: "having fewer soldiers than the enemy", sentence: "The Vikings were outnumbered by 12,000 to 9,000." },
          { word: "evidence", means: "facts you use to support a point", sentence: "Give evidence from your own knowledge to support your reason." }
        ],
        passage: [
          "On 18 September 1066, Hardrada's Vikings landed in the north of England.",
          "Harold's army had just gone home.",
          "Within days the Vikings beat the northern earls and took the town of York.",
          "Harold did not panic.",
          "He marched north for five days, gathering soldiers as he went.",
          "On 25 September he reached Stamford Bridge.",
          "The Vikings were not expecting him.",
          "Many had left their armour behind at the ships.",
          "One brave Viking held the bridge alone, until an English soldier killed him.",
          "Then the English crossed and fought the Vikings head on.",
          "The Vikings were outnumbered, 12,000 to 9,000.",
          "Hardrada was killed by an arrow, and his army was defeated.",
          "Harold had won his first battle as king."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "محارب من النرويج أو الدانمارك أو السويد كان يغزو إنجلترا ويستوطنها (Viking)",
            "أن تهاجم عدوًّا لا يتوقّعك (surprise)",
            "معدن أو جلد يُلبَس لحماية الجسم في المعركة (armour)",
            "أن يكون جنودك أقلّ عددًا من جنود العدوّ (outnumbered)",
            "حقائق تستخدمها لتدعم نقطة ما (evidence)"
          ],
          "passage": [
            "في 18 سبتمبر 1066، نزل فايكنغ هاردرادا في شمال إنجلترا.",
            "كان جيش هارولد قد عاد إلى بيوته للتوّ.",
            "في غضون أيام هزم الفايكنغ إيرلات الشمال واستولوا على مدينة يورك (York).",
            "لم يُصَب هارولد بالذعر.",
            "سار شمالًا خمسة أيام، يجمع الجنود في طريقه.",
            "في 25 سبتمبر وصل إلى ستامفورد بريدج (Stamford Bridge).",
            "لم يكن الفايكنغ يتوقّعونه.",
            "كان كثيرون منهم قد تركوا دروعهم عند السفن.",
            "صمد فايكنغي شجاع واحد على الجسر وحده، حتى قتله جندي إنجليزي.",
            "ثم عبر الإنجليز وقاتلوا الفايكنغ وجهًا لوجه.",
            "كان الفايكنغ أقلّ عددًا، 12,000 مقابل 9,000.",
            "قُتل هاردرادا بسهم، وهُزم جيشه.",
            "كان هارولد قد انتصر في أوّل معركة له ملكًا."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "wojownik z Norwegii, Danii lub Szwecji, który napadał na Anglię i się w niej osiedlał (Viking, wiking)",
            "zaatakować wroga, który się ciebie nie spodziewa (surprise)",
            "metal lub skóra noszone dla ochrony ciała w bitwie (armour, zbroja)",
            "mający mniej żołnierzy niż wróg (outnumbered)",
            "fakty, których używasz, żeby poprzeć swoją tezę (evidence, dowody)"
          ],
          "passage": [
            "18 września 1066 roku wikingowie Hardrady wylądowali na północy Anglii.",
            "Armia Harolda właśnie poszła do domu.",
            "W ciągu kilku dni wikingowie pokonali hrabiów z północy i zajęli miasto York.",
            "Harold nie wpadł w panikę.",
            "Maszerował na północ przez pięć dni, zbierając po drodze żołnierzy.",
            "25 września dotarł do Stamford Bridge.",
            "Wikingowie się go nie spodziewali.",
            "Wielu zostawiło swoje zbroje (armour) przy statkach.",
            "Jeden odważny wiking sam bronił mostu, aż zabił go angielski żołnierz.",
            "Potem Anglicy przeszli przez most i starli się z wikingami twarzą w twarz.",
            "Wikingów było mniej (outnumbered): 12,000 do 9,000.",
            "Hardrada zginął od strzały, a jego armia została pokonana.",
            "Harold wygrał swoją pierwszą bitwę jako król."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um guerreiro da Noruega, da Dinamarca ou da Suécia que atacava e se fixava na Inglaterra (Viking, viking)",
            "atacar um inimigo que não está à sua espera (surprise, surpreender)",
            "metal ou couro usado para proteger o corpo na batalha (armour, armadura)",
            "ter menos soldados do que o inimigo (outnumbered, em menor número)",
            "factos/fatos que você usa para apoiar um argumento (evidence, provas/evidências)"
          ],
          "passage": [
            "A 18 de setembro de 1066, os vikings de Hardrada desembarcaram no norte da Inglaterra.",
            "O exército de Harold tinha acabado de ir para casa.",
            "Em poucos dias os vikings derrotaram os condes do norte e tomaram a cidade de York.",
            "Harold não entrou em pânico.",
            "Marchou para norte durante cinco dias, juntando soldados pelo caminho.",
            "A 25 de setembro chegou a Stamford Bridge.",
            "Os vikings não estavam à espera dele.",
            "Muitos tinham deixado as armaduras nos navios.",
            "Um viking corajoso defendeu a ponte sozinho, até um soldado inglês o matar.",
            "Depois os ingleses atravessaram e enfrentaram os vikings de frente.",
            "Os vikings estavam em menor número (outnumbered), 12 000 contra 9 000.",
            "Hardrada foi morto por uma flecha, e o seu exército foi derrotado.",
            "Harold tinha ganhado a sua primeira batalha como rei."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "dagaalyahan ka yimid Norway, Denmark ama Sweden oo England weerari jiray oo degi jiray (Viking)",
            "weerarid cadow aan ku filayn (surprise)",
            "bir ama maqaar la xirto si jirka dagaalka looga ilaaliyo (armour)",
            "haysta askar ka yar kuwa cadowga (outnumbered)",
            "xaqiiqooyin aad u isticmaasho si aad fikrad u taageerto (evidence)"
          ],
          "passage": [
            "18 Sebtembar 1066, Vikings-kii Hardrada waqooyiga England ayay ka soo degeen.",
            "Ciidankii Harold hadda ayuu guryahooda tagay.",
            "Maalmo gudahood Vikings-ku earls-kii waqooyi ayay jabiyeen oo magaalada York qabsadeen.",
            "Harold ma argagixin.",
            "Shan maalmood ayuu waqooyi u socday, askarna wuu soo ururinayay intuu socday.",
            "25 Sebtembar wuxuu gaaray Stamford Bridge.",
            "Vikings-ku ma filayn.",
            "Qaar badan armour-koodii doonyaha ayay kaga tageen.",
            "Hal Viking geesi ah ayaa buundada keligiis haystay, ilaa askari Ingiriis ah dilay.",
            "Markaas Ingiriisku way gudbeen oo Vikings-ka madax-madax la dagaallameen.",
            "Vikings-ku tiro ayay ka yaraayeen (outnumbered), 12,000 ilaa 9,000.",
            "Hardrada fallaar ayaa dishay, ciidankiisiina waa la jabiyay.",
            "Harold wuxuu ku guulaystay dagaalkiisii ugu horreeyay isagoo boqor ah."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "воїн із Норвегії, Данії або Швеції, який грабував Англію і селився в ній (Viking)",
            "напасти на ворога, який на вас не чекає (surprise)",
            "метал або шкіра, які носили для захисту тіла в бою (armour)",
            "мати менше солдатів, ніж ворог (outnumbered)",
            "факти, якими ви підтверджуєте думку (evidence)"
          ],
          "passage": [
            "18 вересня 1066 року вікінги Гаральда Суворого висадилися на півночі Англії.",
            "Армія Гарольда щойно розійшлася додому.",
            "За кілька днів вікінги розбили північних ерлів і взяли місто Йорк (York).",
            "Гарольд не панікував.",
            "Він п’ять днів ішов на північ, збираючи солдатів дорогою.",
            "25 вересня він дійшов до Стемфорд-Бриджа (Stamford Bridge).",
            "Вікінги на нього не чекали.",
            "Багато з них залишили свої обладунки (armour) на кораблях.",
            "Один хоробрий вікінг сам утримував міст, доки англійський солдат його не вбив.",
            "Потім англійці перейшли міст і билися з вікінгами лоб у лоб.",
            "Вікінгів було менше: 12,000 проти 9,000.",
            "Гаральда Суворого вбила стріла, і його армію було розбито.",
            "Гарольд виграв свою першу битву як король."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ناروے، ڈنمارک یا سویڈن کا ایک جنگجو جو انگلینڈ پر چھاپے مارتا اور وہاں آباد ہوتا تھا (Viking)",
            "ایسے دشمن پر حملہ کرنا جو آپ کی توقع نہ کر رہا ہو (surprise)",
            "جنگ میں جسم کی حفاظت کے لیے پہنا جانے والا دھات یا چمڑا (armour)",
            "دشمن سے کم سپاہی ہونا (outnumbered)",
            "وہ حقائق جو آپ کسی بات کی تائید میں استعمال کرتے ہیں (evidence)"
          ],
          "passage": [
            "18 ستمبر 1066 کو ہارڈراڈا کے وائکنگ انگلینڈ کے شمال میں اتر آئے۔",
            "ہیرلڈ کی فوج ابھی ابھی گھر گئی تھی۔",
            "چند دنوں میں وائکنگوں نے شمالی ارلوں کو ہرا دیا اور یارک (York) شہر پر قبضہ کر لیا۔",
            "ہیرلڈ گھبرایا نہیں۔",
            "وہ پانچ دن شمال کی طرف چلتا رہا، اور راستے میں سپاہی جمع کرتا گیا۔",
            "25 ستمبر کو وہ سٹیمفورڈ برج (Stamford Bridge) پہنچ گیا۔",
            "وائکنگوں کو اس کی توقع نہ تھی۔",
            "بہت سے اپنی زرہ (armour) جہازوں پر ہی چھوڑ آئے تھے۔",
            "ایک بہادر وائکنگ نے اکیلے پل کو روکے رکھا، یہاں تک کہ ایک انگریز سپاہی نے اسے مار دیا۔",
            "پھر انگریز پار اترے اور وائکنگوں سے سامنے کی لڑائی لڑی۔",
            "وائکنگوں کی تعداد کم تھی، 12,000 کے مقابلے میں 9,000۔",
            "ہارڈراڈا ایک تیر سے مارا گیا، اور اس کی فوج کو شکست ہوئی۔",
            "ہیرلڈ نے بادشاہ کے طور پر اپنی پہلی جنگ جیت لی تھی۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Disaster in the north",
          paragraphs: [
            "On 18 September 1066, within days of Harold sending his army home, the Viking King Harald Hardrada invaded the north of England. Harold's soldiers were scattered across the country at their harvests. There was no army ready to fight. The northern earls gathered what men they could, but within days of landing Hardrada had defeated them and taken over the town of York.",
            "Think about Harold's position. The Vikings held the north. William, with the best army in Europe, was still waiting across the Channel for the wind to change. If Harold marched north, he left the south coast open. If he stayed south, he lost the north. He chose to march, and to march fast.",
            "For five days King Harold travelled north, building his army as he went. Men who had gone home for the harvest were called back to join him on the road. Speed was everything: Harold wanted to reach the Vikings before they knew he was coming."
          ],
          tip: "18 September, invasion. 25 September, battle. Seven days apart, five of them marching."
        },
        {
          heading: "The battle at the bridge",
          paragraphs: [
            "On 25 September 1066 the English army took the Vikings completely by surprise at Stamford Bridge, near York. The Vikings were not expecting to be attacked. Many of them had left their armour at their ships, and Hardrada had left some of his troops back there too, nearly 25 kilometres away. On the field, the English outnumbered the Vikings by about 12,000 men to 9,000.",
            "The two armies were separated by a bridge, and a single Viking warrior blocked it, holding off the English for a time. When an English soldier killed him, the English army crossed and took the Vikings head on. The English had better armour and weapons, and their numbers broke the Viking shield wall.",
            "Then Hardrada himself was killed by an arrow. Without their king, the Vikings were defeated. In one week Harold had marched the length of England and destroyed one of the two threats to his crown. It was, by any measure, a brilliant victory."
          ],
          worked: {
            q: "At Stamford Bridge the English had about 12,000 men and the Vikings about 9,000. How many more men did Harold have?",
            steps: [
              "Subtract the smaller army from the larger: 12,000 − 9,000.",
              "12,000 − 9,000 = 3,000."
            ],
            answer: "3,000 more men",
            checks: [{ expr: "12000-9000", value: 3000, tol: 0 }]
          },
          tip: "Bridge, arrow, armour, numbers, speed. Five words that hold the whole battle."
        },
        {
          heading: "Why did Harold win?",
          paragraphs: [
            "Your lesson gave you six reasons for Harold's victory and asked you to rank them. The surprise attack: Harold marched north in five days so that the Vikings would not be ready, and they were not, with no armour on when the English arrived. Numbers: 12,000 against 9,000. Equipment: the English had better armour and weapons. Two deaths: the warrior on the bridge, which let the English cross, and Hardrada himself, which broke the Viking army's will to fight.",
            "Your teacher's progress check groups these as surprise attack, Harold's leadership, Vikings unprepared, death of leaders, and the English army's strength. Notice that the reasons link together. Harold's speed caused the surprise; the surprise caused the missing armour; the bigger army broke the shield wall; the arrow that killed Hardrada ended it. When you rank reasons, show how one made another possible.",
            "There were costs. Harold was at a disadvantage before the battle: his army had been sent home and had to be rebuilt on the march, and his men were tired after five days on the road. And every soldier who died at Stamford Bridge was a soldier Harold would not have against William. Keep that thought for the next chapter."
          ],
          tip: "A reason is stronger when you can show what it caused. Surprise led to no armour; no armour led to a broken shield wall."
        },
        {
          heading: "Writing the paragraph",
          paragraphs: [
            "Your progress check asks: why did Harold Godwinson win the Battle of Stamford Bridge? You answer in one PEE paragraph, against three success criteria. SC1: give a reason why Harold won. SC2: give evidence or examples from your own knowledge to support that reason. SC3: explain why this led to victory.",
            "Point: One reason Harold Godwinson won the Battle of Stamford Bridge was ___. Evidence: For example, ___, or This can be seen when ___. Explain: This shows that Harold won because ___. Three sentences, three criteria. Your teacher modelled an answer about the size of the army; you write your own about a different reason, with your own evidence.",
            "A tip for the Explain sentence: do not repeat your evidence. Say what the evidence did. The Vikings had no armour on is evidence. So English weapons could cut through them and break the shield wall quickly is the explanation."
          ],
          tip: "SC1 reason, SC2 evidence, SC3 explanation. If your paragraph has all three, it is a full answer."
        }
      ],
      gate: [
        { kind: "mcq", q: "What happened on 18 September 1066?", options: ["Hardrada's Vikings invaded the north of England", "William landed in the south of England", "Harold was crowned king", "The Battle of Stamford Bridge was fought"], answer: 0, why: "Hardrada landed in the north on 18 September, ten days after Harold sent his army home, and soon took York.",
          feedback: [
            "",
            "William did land in the south, but not until 28 September, after Stamford Bridge. The 18 September landing was Hardrada's, in the north.",
            "Harold was crowned on 6 January, right at the start of the year. 18 September is the day the Vikings landed in the north.",
            "Stamford Bridge was fought a week later, on 25 September. The 18th is the day Hardrada landed and the trouble began."
          ] },
        { kind: "numeric", q: "Hardrada landed on 18 September and the Battle of Stamford Bridge was fought on 25 September. How many days apart were these two events?", answer: 7, tolerance: 0, units: "days", why: "25 − 18 = 7. Harold spent five of those seven days marching north.", check: "25-18",
          misconceptions: [
            { answer: 8, says: "You have counted both the 18th and the 25th as days. The gap between two dates in the same month is the later day minus the earlier one: 25 − 18 = 7.", check: "25-18+1" },
            { answer: 5, says: "Five is how long Harold marched, which your lesson also tells you, but the question asks for the gap between the landing and the battle: 25 − 18 = 7 days.", check: "25-18-2" }
          ] },
        { kind: "gap", q: "Harald Hardrada was killed by an ___ at the Battle of Stamford Bridge.", answer: "arrow", options: ["arrow", "axe", "horse"], why: "Hardrada was killed by an arrow. Without their king, the Viking army was defeated.",
          feedback: {
            "axe": "The heavy axe was the weapon of the English huscarls, which you meet in the next chapter. Your lesson says Hardrada was killed by an arrow.",
            "horse": "Horses belong to William's cavalry at Hastings, not to the fighting at Stamford Bridge. Hardrada was killed by an arrow."
          } }
      ],
      modules: [
        {
          title: "Seven days in September",
          task: {
            kind: "order",
            q: "Put the events of September 1066 in chronological order, earliest first.",
            items: [
              "Harold sends his army home for the harvest (8 September)",
              "Hardrada's Vikings land in the north and take York (from 18 September)",
              "Harold marches north for five days, gathering soldiers as he goes",
              "A lone Viking warrior holds the bridge until an English soldier kills him (25 September)",
              "The English cross the bridge; Hardrada is killed by an arrow and the Vikings are defeated"
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the decision that left England unguarded: the army goes home.",
                "Then the invasion, then the march to meet it.",
                "The battle itself has two parts: the bridge first, then the fight beyond it. The bridge must be crossed before Hardrada can be killed."
              ],
              example: {
                q: "Practice: put in order: the fire alarm rings; pupils line up outside; a teacher takes the register; pupils go back in.",
                steps: ["The alarm starts everything.", "You cannot take a register of people who have not lined up.", "Going back in is the end."],
                answer: "Alarm; line up; register; back in."
              }
            },
            core: { hint: "8 September, 18 September, five days of marching, then the bridge, then the arrow." },
            stretch: { extend: "Pick the one event in this list that, if it had not happened, would have changed everything after it. Explain your choice in two sentences." }
          },
          why: "Harold sent his army home on 8 September; Hardrada landed on 18 September and took York; Harold marched north for five days; on 25 September the English fought their way across the bridge; then Hardrada was killed and the Vikings were defeated.",
          explain: "Say, in one sentence, why the order of the first two events matters so much to the story."
        },
        {
          title: "Rank the reasons",
          task: {
            kind: "mcq",
            q: "Which reason for Harold's victory at Stamford Bridge made the others possible, because it happened first?",
            options: ["Harold marched north very quickly, in five days, to take the Vikings by surprise", "Hardrada was killed by an arrow", "The English had better armour and weapons", "The Viking warrior on the bridge was killed"],
            answer: 0,
            feedback: [
              "",
              "Hardrada's death ended the battle, so it came last, not first. The reason that came first and set up everything else was Harold's fast march, which caught the Vikings by surprise.",
              "Better armour mattered most because the Vikings had none on, and they had none on because they were surprised. The surprise came first, and it came from Harold's five-day march.",
              "Killing the warrior on the bridge let the English cross, but the English were only at the bridge because Harold had marched north so fast. The march came first."
            ]
          },
          levels: {
            support: {
              steps: [
                "Put the four reasons on a timeline: which happened before the battle, which during it, and which ended it?",
                "Ask of each: did this cause another reason on the list?",
                "The reason that caused the most and came earliest is the one you want."
              ],
              example: {
                q: "Practice: a team wins because they trained hard, scored early and the other side got tired. Which reason came first and helped cause the others?",
                steps: ["Training happened before the match.", "Training helped them score early and last longer than the other side."],
                answer: "Training hard: it came first and made the other two more likely."
              }
            },
            core: { hint: "Which reason happened before the English even arrived at the bridge?" },
            stretch: { extend: "Argue the opposite case: that Hardrada's death was the most important reason even though it came last. Then say which argument you find stronger." }
          },
          why: "Harold's speed caused the surprise; the surprise meant the Vikings had no armour on; that let English weapons break the shield wall; and the fighting ended when Hardrada was killed. The march came first and made the rest possible.",
          explain: "Say, in one sentence, how Harold's speed and the Vikings' missing armour are connected."
        },
        {
          title: "Why did Harold win? The paragraph",
          task: {
            kind: "written",
            q: "Why did Harold Godwinson win the Battle of Stamford Bridge? Write one PEE paragraph that meets all three success criteria: give a reason (SC1), support it with evidence from your own knowledge (SC2), and explain why it led to victory (SC3).",
            criteria: [
              "SC1: I give one clear reason why Harold won, in a Point sentence.",
              "SC2: I support it with at least one accurate fact or example from the battle.",
              "SC3: I explain how this reason led to the Viking defeat, not just repeating the evidence.",
              "I use the PEE frame: One reason... For example... This shows that..."
            ],
            model: "One reason Harold Godwinson won the Battle of Stamford Bridge was that he took the Vikings by surprise. For example, Harold marched his army north in only five days, so that when the English arrived on 25 September the Vikings were not expecting a battle and many had left their armour at their ships, nearly 25 kilometres away. This shows that Harold won because his speed meant the Vikings had to fight without armour or all of their men, so the English weapons could break their shield wall and the battle was decided before Hardrada's full army could gather."
          },
          levels: {
            support: {
              steps: [
                "SC1, Point: One reason Harold Godwinson won the Battle of Stamford Bridge was ___ (choose: surprise, numbers, equipment, the deaths of the bridge warrior and Hardrada).",
                "SC2, Evidence: For example, ___ (a date, a number or a detail from this chapter).",
                "SC3, Explain: This shows that Harold won because ___ (what did your evidence do to the Vikings?).",
                "Read it back. Does the Explain sentence say something new, or just repeat the evidence?"
              ],
              example: {
                q: "Practice: write a PEE paragraph explaining why a school team won a match because of fitness.",
                steps: ["Point: One reason the team won was their fitness.", "Evidence: For example, they trained three times a week all term.", "Explain: This shows fitness won the match because in the last ten minutes the other team was too tired to chase the ball."],
                answer: "One reason the team won was their fitness. For example, they had trained three times a week all term. This shows that fitness won the match because in the last ten minutes the other team was too tired to chase the ball."
              }
            },
            core: { hint: "Pick one reason only. One Point, one piece of Evidence, one Explain sentence that says what the evidence did." },
            stretch: { extend: "Add a second paragraph on a different reason, and finish with one sentence saying which of your two reasons was more important and why." }
          },
          why: "A full answer meets all three success criteria: a reason, evidence from the battle, and an explanation of how that reason caused the Viking defeat. The teacher's model used the size of the army; this model uses surprise. Any of the reasons works if the three parts are there.",
          explain: "Say, in one sentence, what your Explain sentence adds that your Evidence sentence did not already say.",
          contexts: [
            { label: "Reason: surprise",
              q: "Harold marched north in five days and caught the Vikings unprepared. Use surprise as your reason. Write one PEE paragraph that meets all three success criteria: give a reason (SC1), support it with evidence from your own knowledge (SC2), and explain why it led to victory (SC3).",
              why: "Evidence for surprise: the five-day march, the Vikings not expecting an attack, armour left at the ships. Explain: fighting without armour against better-equipped men broke the shield wall quickly." },
            { label: "Reason: numbers",
              q: "Harold's army outnumbered the Vikings at Stamford Bridge. Use the size of the army as your reason. Write one PEE paragraph that meets all three success criteria: give a reason (SC1), support it with evidence from your own knowledge (SC2), and explain why it led to victory (SC3).",
              why: "Evidence for numbers: about 12,000 English to 9,000 Vikings, with some Viking troops left at the ships 25 kilometres away. Explain: once the shield wall broke, the larger army could overwhelm the Vikings." },
            { label: "Reason: death of leaders",
              q: "Two deaths changed the Battle of Stamford Bridge. Use the death of leaders as your reason. Write one PEE paragraph that meets all three success criteria: give a reason (SC1), support it with evidence from your own knowledge (SC2), and explain why it led to victory (SC3).",
              why: "Evidence: the lone warrior on the bridge killed by an English soldier, and Hardrada killed by an arrow. Explain: the first let the English cross; the second left the Vikings without a king to fight for." }
          ]
        }
      ]
    },
    // ───────────────────────────── CHAPTER 4 ─────────────────────────────
    {
      key: "two-armies", n: 4,
      title: "Two armies get ready",
      lead: "This chapter weighs the two armies that met at Hastings: a tired English force that had just fought a battle, and a Norman army that had rested, built a camp and waited.",
      covers: [3],
      pretext: {
        words: [
          { word: "huscarl", means: "a trained, paid professional soldier in Harold's army", sentence: "The huscarls carried heavy axes and protected the king." },
          { word: "fyrd", means: "ordinary men who fought only when the king called them", sentence: "The fyrd were farmers with homemade spears, not trained soldiers." },
          { word: "cavalry", means: "soldiers who fight on horseback", sentence: "William's cavalry charged at the enemy on their horses." },
          { word: "professional", means: "trained and paid to do a job", sentence: "William's foot soldiers were professional, well-trained men." },
          { word: "tapestry", means: "a long piece of cloth with pictures sewn into it", sentence: "The Bayeux Tapestry shows William's men building ships." }
        ],
        passage: [
          "Harold had won at Stamford Bridge, but it had cost him dearly.",
          "He had taken about 15,000 soldiers north.",
          "About 5,000 of them died in the battle.",
          "Then, on 28 September, William landed in the south with 9,000 men.",
          "Nobody was there to stop him, because Harold's army was in the north.",
          "William built a camp, rested his men and waited.",
          "Harold's army had to march all the way back south.",
          "The men were exhausted, and some went home.",
          "Harold arrived with about 7,000 men.",
          "His army was made of huscarls, who were professional, and the fyrd, who were not.",
          "William's army had cavalry, foot soldiers and archers.",
          "Which army would you rather lead?"
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "جندي محترف مدرَّب يتقاضى أجرًا في جيش هارولد (huscarl)",
            "رجال عاديّون كانوا يقاتلون فقط عندما يدعوهم الملك (fyrd)",
            "جنود يقاتلون على ظهور الخيل (cavalry)",
            "مدرَّب ويتقاضى أجرًا للقيام بعمل ما (professional)",
            "قطعة طويلة من القماش مُطرَّزة بالصور (tapestry)"
          ],
          "passage": [
            "كان هارولد قد انتصر في ستامفورد بريدج، لكنّ ذلك كلّفه غاليًا.",
            "كان قد أخذ نحو 15,000 جندي إلى الشمال.",
            "مات نحو 5,000 منهم في المعركة.",
            "ثم، في 28 سبتمبر، نزل وليام في الجنوب مع 9,000 رجل.",
            "لم يكن هناك أحد ليوقفه، لأنّ جيش هارولد كان في الشمال.",
            "بنى وليام معسكرًا، وأراح رجاله، وانتظر.",
            "كان على جيش هارولد أن يسير الطريق كلّه عائدًا إلى الجنوب.",
            "كان الرجال منهكين، وعاد بعضهم إلى بيوتهم.",
            "وصل هارولد مع نحو 7,000 رجل.",
            "كان جيشه مكوّنًا من الهوسكارل (huscarls)، وهم محترفون، ومن الفيرد (fyrd)، وهم ليسوا كذلك.",
            "كان في جيش وليام فرسان (cavalry) وجنود مشاة ورماة.",
            "أيّ الجيشَين تفضّل أن تقوده؟"
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "wyszkolony, opłacany zawodowy żołnierz w armii Harolda (huscarl)",
            "zwykli mężczyźni, którzy walczyli tylko wtedy, gdy wezwał ich król (fyrd)",
            "żołnierze walczący na koniach (cavalry, kawaleria)",
            "wyszkolony i opłacany za wykonywanie pracy (professional, zawodowy)",
            "długi kawałek tkaniny z wyszytymi obrazkami (tapestry, tkanina)"
          ],
          "passage": [
            "Harold wygrał pod Stamford Bridge, ale drogo go to kosztowało.",
            "Zabrał na północ około 15,000 żołnierzy.",
            "Około 5,000 z nich zginęło w bitwie.",
            "Potem, 28 września, William wylądował na południu z 9,000 ludzi.",
            "Nikt go tam nie zatrzymał, bo armia Harolda była na północy.",
            "William zbudował obóz, dał swoim ludziom odpocząć i czekał.",
            "Armia Harolda musiała maszerować całą drogę z powrotem na południe.",
            "Ludzie byli wyczerpani, a niektórzy poszli do domu.",
            "Harold przybył z około 7,000 ludzi.",
            "Jego armia składała się z huskarlów (huscarls), którzy byli zawodowcami, i z fyrdu (fyrd), który nie był.",
            "Armia Williama miała kawalerię (cavalry), piechotę i łuczników.",
            "Którą armią wolałbyś dowodzić?"
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um soldado profissional, treinado e pago, do exército de Harold (huscarl)",
            "homens comuns que só lutavam quando o rei os chamava (fyrd)",
            "soldados que lutam a cavalo (cavalry, cavalaria)",
            "treinado e pago para fazer um trabalho (professional, profissional)",
            "um pano comprido com imagens bordadas (tapestry, tapeçaria)"
          ],
          "passage": [
            "Harold tinha ganhado em Stamford Bridge, mas isso custou-lhe caro.",
            "Ele tinha levado cerca de 15 000 soldados para norte.",
            "Cerca de 5 000 deles morreram na batalha.",
            "Depois, a 28 de setembro, William desembarcou no sul com 9 000 homens.",
            "Não havia ninguém lá para o travar, porque o exército de Harold estava no norte.",
            "William construiu um acampamento, descansou os seus homens e esperou.",
            "O exército de Harold teve de marchar todo o caminho de volta para sul.",
            "Os homens estavam exaustos, e alguns foram para casa.",
            "Harold chegou com cerca de 7 000 homens.",
            "O seu exército era feito de huscarls, que eram profissionais, e do fyrd, que não era.",
            "O exército de William tinha cavalaria, soldados a pé e arqueiros.",
            "Qual dos exércitos você preferia comandar?"
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "askari xirfadle oo la tababaray oo la mushaharay oo ciidanka Harold ka tirsan (huscarl)",
            "rag caadi ah oo dagaallami jiray keliya marka boqorku u yeero (fyrd)",
            "askar fardo ku dagaallanta (cavalry)",
            "la tababaray oo loo mushaharay shaqo (professional)",
            "maro dheer oo sawirro lagu tolay (tapestry)"
          ],
          "passage": [
            "Harold Stamford Bridge ayuu ku guulaystay, laakiin qiimo weyn ayuu bixiyay.",
            "Qiyaastii 15,000 askari ayuu waqooyi u kaxaystay.",
            "Qiyaastii 5,000 ka mid ah dagaalka ayay ku dhinteen.",
            "Markaas, 28 Sebtembar, William koonfurta ayuu ka soo degay isagoo wata 9,000 nin.",
            "Qofna ma joogin oo joojiya, sababtoo ah ciidankii Harold waqooyi ayuu joogay.",
            "William xero ayuu dhisay, raggiisa nasiyay, oo sugay.",
            "Ciidankii Harold waxay ahayd inuu dib u soo socdo ilaa koonfurta oo dhan.",
            "Raggu aad ayay u daalanaayeen, qaarna guryahooda ayay tageen.",
            "Harold wuxuu la yimid qiyaastii 7,000 nin.",
            "Ciidankiisu wuxuu ka koobnaa huscarls, oo xirfadlayaal ahaa, iyo fyrd, oo aan ahayn.",
            "Ciidankii William wuxuu lahaa cavalry, askar lugaynaysa iyo fallaar-tuurayaal.",
            "Ciidankee ayaad doorbidi lahayd inaad hoggaamiso?"
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "навчений, оплачуваний професійний солдат в армії Гарольда (huscarl)",
            "звичайні чоловіки, які билися лише тоді, коли король їх кликав (fyrd)",
            "солдати, які б’ються верхи на конях (cavalry)",
            "навчений і оплачуваний, щоб виконувати роботу (professional)",
            "довге полотно з вишитими на ньому картинами (tapestry)"
          ],
          "passage": [
            "Гарольд переміг біля Стемфорд-Бриджа, але це дорого йому коштувало.",
            "Він повів на північ близько 15,000 солдатів.",
            "Близько 5,000 із них загинули в битві.",
            "Потім, 28 вересня, Вільгельм висадився на півдні з 9,000 людей.",
            "Нікого не було, щоб його зупинити, бо армія Гарольда була на півночі.",
            "Вільгельм побудував табір, дав людям відпочити і чекав.",
            "Армії Гарольда довелося йти весь шлях назад на південь.",
            "Люди були виснажені, і деякі пішли додому.",
            "Гарольд прибув приблизно з 7,000 людей.",
            "Його армія складалася з хускарлів (huscarls), які були професіоналами, і фірду (fyrd), який ними не був.",
            "Армія Вільгельма мала кінноту (cavalry), піхоту і лучників.",
            "Якою армією ви б радше командували?"
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ہیرلڈ کی فوج کا ایک تربیت یافتہ، تنخواہ دار پیشہ ور سپاہی (huscarl)",
            "عام آدمی جو صرف اس وقت لڑتے تھے جب بادشاہ انھیں بلاتا (fyrd)",
            "گھوڑوں پر سوار ہو کر لڑنے والے سپاہی (cavalry)",
            "کوئی کام کرنے کے لیے تربیت یافتہ اور تنخواہ دار (professional)",
            "کپڑے کا ایک لمبا ٹکڑا جس پر تصویریں کاڑھی گئی ہوں (tapestry)"
          ],
          "passage": [
            "ہیرلڈ سٹیمفورڈ برج پر جیت گیا تھا، لیکن اس کی بہت بھاری قیمت چکانی پڑی تھی۔",
            "وہ تقریباً 15,000 سپاہی شمال میں لے گیا تھا۔",
            "ان میں سے تقریباً 5,000 جنگ میں مارے گئے۔",
            "پھر، 28 ستمبر کو، ولیم 9,000 آدمیوں کے ساتھ جنوب میں اتر آیا۔",
            "اسے روکنے کے لیے وہاں کوئی نہ تھا، کیونکہ ہیرلڈ کی فوج شمال میں تھی۔",
            "ولیم نے ایک کیمپ بنایا، اپنے آدمیوں کو آرام دیا اور انتظار کیا۔",
            "ہیرلڈ کی فوج کو سارا راستہ واپس جنوب تک پیدل چلنا پڑا۔",
            "آدمی تھک کر چور تھے، اور کچھ گھر چلے گئے۔",
            "ہیرلڈ تقریباً 7,000 آدمیوں کے ساتھ پہنچا۔",
            "اس کی فوج huscarls سے بنی تھی، جو پیشہ ور تھے، اور fyrd سے، جو پیشہ ور نہیں تھے۔",
            "ولیم کی فوج میں گھڑسوار (cavalry)، پیدل سپاہی اور تیر انداز تھے۔",
            "آپ کس فوج کی قیادت کرنا پسند کریں گے؟"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "William lands unopposed",
          paragraphs: [
            "On 28 September 1066, three days after Stamford Bridge, the wind in the Channel finally changed. William, Duke of Normandy, landed on the south coast of England with about 9,000 men. There was nobody to stop him. Harold's army was hundreds of kilometres away in the north, where it had just fought the Vikings. The one thing Harold had guarded against all summer happened the moment he left.",
            "William then made a clever decision. Instead of marching to find Harold, he built a base camp in the south and waited for Harold to come to him. This meant his soldiers could rest, eat and prepare, while Harold's soldiers would have to march the whole length of England again and arrive tired. The longer William waited, the weaker his enemy became.",
            "A homework in your lesson used the Bayeux Tapestry to show how William prepared. One scene shows William hearing that Harold has become king, and ordering his men to chop down trees. Later scenes show the wood being shaped into ships and the fleet setting sail. The Tapestry was made by the winning side after the Conquest, so a historian uses it with care, but it shows how long and how seriously William had planned."
          ],
          tip: "28 September: William lands. Learn it with 25 September, Stamford Bridge: three days apart, at opposite ends of England."
        },
        {
          heading: "Counting Harold's losses",
          paragraphs: [
            "Your lesson used a BBC Bitesize account of Harold's march, which gives these numbers. Harold took about 15,000 soldiers to fight the Vikings at Stamford Bridge. He won, but he lost about 5,000 of them in the battle. With the 10,000 who remained, he marched back south to face William. Men dropped out on the way because they were exhausted, and your lesson notes that over 3,000 went home. Harold arrived in the south with about 7,000 men and began the battle almost immediately.",
            "So Harold's army at Hastings was less than half the size of the one he had marched north with. It had fought one battle, marched the length of England twice, and lost its best soldiers along the way. Your lesson asks whether Harold's army was well prepared to fight a battle. Think about what he could have done differently: waited for more men, rested, or chosen the moment himself instead of rushing to meet William.",
            "These numbers come from the deck's source and are rounded; historians give different figures for medieval armies, because nobody counted them carefully at the time. What matters for your argument is the pattern: a big army, a costly victory, a long march, a smaller and tired army at the end of it."
          ],
          worked: {
            q: "Harold took about 15,000 men to Stamford Bridge and lost about 5,000 there. He reached Hastings with about 7,000. How many men did he lose on the march south?",
            steps: [
              "After the battle: 15,000 − 5,000 = 10,000 men.",
              "At Hastings: 7,000 men. Lost on the march: 10,000 − 7,000 = 3,000."
            ],
            answer: "about 3,000 men",
            checks: [{ expr: "15000-5000", value: 10000, tol: 0 }, { expr: "15000-5000-7000", value: 3000, tol: 0 }]
          },
          tip: "15,000, minus 5,000 in battle, minus 3,000 on the road, leaves 7,000. Check: 7,000 is less than half of 15,000."
        },
        {
          heading: "Harold's army: huscarls and the fyrd",
          paragraphs: [
            "The English army had two types of soldier. The huscarls were highly trained, paid professional soldiers. Being a soldier was their job. They were protected by strong armour, a shield and a helmet, and they carried a heavy axe. They were feared warriors, and their job in battle was to lock their shields together to form a shield wall, and to protect the king.",
            "The fyrd were everyone else: ordinary men who fought when the king needed them and were not trained. They were unpaid, protected their local area, and only fought when called on. They did not have good weapons or armour, and often made their own spears. In battle they helped to keep the shield wall together and threw spears and stones at the enemy.",
            "Most of Harold's 7,000 men at Hastings were fyrd. His best soldiers, the huscarls, had taken the heaviest losses at Stamford Bridge. When you compare the armies, this matters: Harold's professional core was smaller than it had been, and the men filling the gaps were farmers."
          ],
          tip: "Huscarl: paid, trained, axe, protects the king. Fyrd: unpaid, untrained, homemade spear, fights when called."
        },
        {
          heading: "William's army: cavalry, foot soldiers and archers",
          paragraphs: [
            "William's army had three types of soldier. The cavalry were mounted on horses. They wore heavy armour and carried long swords, so that they could attack foot soldiers from above. Their tactic was to charge quickly at the enemy, surround them and kill them. Being on a horse also protected them, because they could ride away from danger.",
            "Foot soldiers made up the majority of William's army. They were professional, well-trained men with some of the best armour and weapons in Europe. Archers carried bows and arrows and could attack the English from far away. Their tactic was to attack first, to weaken the enemy before a cavalry charge. Your lesson notes that historians debate how much the archers actually fought at Hastings.",
            "Now compare. Harold's huscarls against William's cavalry: both professional, but one on foot with an axe, the other on a horse with a sword. Harold's fyrd against William's foot soldiers: farmers with homemade spears against trained men with good armour. A shield wall is very hard to break by charging at it. But could it stand against arrows falling from above, charge after charge, for a whole day?"
          ],
          tip: "Cavalry charge, foot soldiers fight, archers soften the enemy first. Three jobs, one plan."
        }
      ],
      gate: [
        { kind: "mcq", q: "Why did William land in England unopposed on 28 September 1066?", options: ["Harold's army was in the north, where it had just fought the Vikings", "Harold had surrendered", "The English nobles supported William", "The south coast had no beaches to defend"], answer: 0, why: "Harold had marched north to fight Hardrada at Stamford Bridge on 25 September, so there was no army in the south when William landed three days later.",
          feedback: [
            "",
            "Harold never surrendered; he fought William at Hastings just over two weeks later. William landed unopposed because Harold's army was far away in the north after Stamford Bridge.",
            "The English nobles had supported Harold since January. William landed unopposed simply because the English army was in the north fighting the Vikings.",
            "The south coast is exactly where Harold had guarded all summer. It was empty on 28 September only because he had marched north to fight Hardrada."
          ] },
        { kind: "gap", q: "The ___ were highly trained, paid professional soldiers who protected the king and carried heavy axes.", answer: "huscarls", options: ["huscarls", "fyrd", "archers"], why: "Huscarls were the professional core of the English army. The fyrd were untrained; archers belonged to William's army.",
          feedback: {
            "fyrd": "The fyrd were the opposite: ordinary, unpaid men who were not trained and often made their own spears. The paid professionals with heavy axes were the huscarls.",
            "archers": "Archers were part of William's army, fighting with bows from a distance. Harold's paid professionals with heavy axes were the huscarls."
          } },
        { kind: "numeric", q: "Harold had about 15,000 men at Stamford Bridge and about 7,000 at Hastings. How many men had he lost in total between the two battles?", answer: 8000, tolerance: 0, units: "men", why: "15,000 − 7,000 = 8,000: about 5,000 died at Stamford Bridge and about 3,000 went home on the march.", check: "15000-7000",
          misconceptions: [
            { answer: 5000, says: "5,000 is only the men who died at Stamford Bridge. More went home exhausted on the march south. The total lost between 15,000 and 7,000 is 15,000 − 7,000 = 8,000.", check: "15000-10000" },
            { answer: 3000, says: "3,000 is only the men lost on the march south. You also need the 5,000 who died in the battle. 15,000 − 7,000 = 8,000 in total.", check: "10000-7000" },
            { answer: 22000, says: "You have added the two armies together. To find how many were lost, subtract the smaller number from the larger: 15,000 − 7,000 = 8,000.", check: "15000+7000" }
          ] }
      ],
      modules: [
        {
          title: "Who fought for whom?",
          task: {
            kind: "match",
            q: "Match each type of soldier to the correct description.",
            pairs: [
              ["Huscarls", "Harold's paid, highly trained professionals with heavy axes, who protected the king"],
              ["Fyrd", "Harold's ordinary men, untrained and unpaid, often with homemade spears"],
              ["Cavalry", "William's heavily armoured soldiers on horses, with long swords"],
              ["Foot soldiers", "The majority of William's army: professional men with some of the best armour and weapons"],
              ["Archers", "William's soldiers with bows and arrows, who attacked first from far away"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Sort first by army: two types are Harold's (English) and three are William's (Norman).",
                "Of Harold's two, one is professional and one is not.",
                "Of William's three, one rides, one shoots, and one is everybody else."
              ],
              example: {
                q: "Practice: in a school, match ‘teachers’, ‘prefects’ and ‘visitors’ to: trained and paid to teach; pupils given a job to help; people from outside for the day.",
                steps: ["Teachers are trained and paid.", "Prefects are pupils with a job.", "Visitors come from outside."],
                answer: "Teachers: trained and paid. Prefects: pupils with a job. Visitors: from outside."
              }
            },
            core: { hint: "Axe and king: huscarls. Homemade spears: fyrd. Horses: cavalry. Bows: archers. Everyone else in William's army: foot soldiers." },
            stretch: { extend: "Give each type of soldier a rating out of 5 and explain your rating for the two you think are furthest apart. Then say which single comparison, huscarls against cavalry or fyrd against foot soldiers, tells you more about who would win." }
          },
          why: "Harold's army: huscarls (professional, axes, protect the king) and fyrd (untrained, homemade spears). William's army: cavalry (horses, armour, long swords), foot soldiers (the professional majority) and archers (bows, attack first from a distance).",
          explain: "Say, in one sentence, which of the five types of soldier you would least want to face, and why."
        },
        {
          title: "Tired army, rested army",
          task: {
            kind: "mcq",
            q: "William landed on 28 September and then waited in the south for Harold to come to him. Why was this a clever tactic?",
            options: ["His men could rest and build a camp while Harold's men had to march the length of England and arrive tired", "It gave Hardrada time to join William", "It let William's ships sail back to Normandy for more men", "The English would run out of arrows while they waited"],
            answer: 0,
            feedback: [
              "",
              "Hardrada was dead by 28 September, killed at Stamford Bridge three days earlier, and he was William's rival, not his ally. William waited so that his own men could rest while Harold's marched and tired.",
              "Your lesson does not say William sent for more men. The point of waiting was rest: his army set up camp and recovered while Harold's army marched south exhausted.",
              "Arrows were William's weapon, not Harold's. William waited because every day of waiting made Harold's tired army weaker and his own rested army stronger."
            ]
          },
          levels: {
            support: {
              steps: [
                "Where was Harold's army on 28 September? In the north, just after a battle.",
                "What would it have to do to reach William? March all the way back south.",
                "What was William's army doing in the meantime? Resting, eating, building a camp.",
                "Who gains from a delay?"
              ],
              example: {
                q: "Practice: two runners race. One has just finished a marathon and must jog ten miles to the start line. The other has slept well and waits at the start. Why does waiting help the second runner?",
                steps: ["The first runner is already tired and gets more tired getting to the start.", "The second runner loses nothing by waiting."],
                answer: "Waiting costs the rested runner nothing and makes the tired runner more tired."
              }
            },
            core: { hint: "Think about what each army was doing between 28 September and 14 October." },
            stretch: { extend: "Harold could have waited too, gathering fresh men in London before marching to Hastings. Give one reason he might have chosen to rush instead, and say whether you think it was a mistake." }
          },
          why: "By waiting in his base camp, William let his army rest and prepare, while Harold's army, already weakened by Stamford Bridge, had to march the length of England and arrived exhausted with about 7,000 men.",
          explain: "Say, in one sentence, why waiting helped William but would not have helped Harold in the same way."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 5 ─────────────────────────────
    {
      key: "battle-of-hastings", n: 5,
      title: "The Battle of Hastings",
      lead: "This chapter takes you up Senlac Hill on 14 October 1066: a shield wall that would not break, a trick that broke it, and a king who died on the field.",
      covers: [4],
      pretext: {
        words: [
          { word: "shield wall", means: "a line of soldiers with their shields locked together", sentence: "Harold's shield wall stood at the top of the hill." },
          { word: "reinforcements", means: "extra soldiers who arrive during a battle", sentence: "Harold was getting reinforcements as the battle went on." },
          { word: "retreat", means: "to move back or run away from the enemy", sentence: "The Normans pretended to retreat down the hill." },
          { word: "decisive", means: "settling the result once and for all", sentence: "Two events in the battle proved decisive." },
          { word: "nightfall", means: "the time when it gets dark", sentence: "William needed to win before nightfall." }
        ],
        passage: [
          "On 14 October 1066, the two armies met near Hastings.",
          "Harold's men were exhausted, and there were only about 7,000 of them.",
          "William's men were rested and ready.",
          "Harold put his army at the top of Senlac Hill.",
          "His men locked their shields together to make a shield wall.",
          "William's archers, foot soldiers and cavalry were at the bottom.",
          "Charging uphill, they could not break the wall.",
          "Then the Normans tried a trick.",
          "Some of them pretended to run away.",
          "English soldiers chased them down the hill, and the wall broke.",
          "The fighting went on for hours.",
          "Then Harold was killed, and William had won."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "صفّ من الجنود دروعهم متشابكة معًا (shield wall)",
            "جنود إضافيون يصلون أثناء المعركة (reinforcements)",
            "أن تتراجع أو تفرّ من العدوّ (retreat)",
            "يحسم النتيجة نهائيًا (decisive)",
            "الوقت الذي يحلّ فيه الظلام (nightfall)"
          ],
          "passage": [
            "في 14 أكتوبر 1066، التقى الجيشان قرب هيستينغز (Hastings).",
            "كان رجال هارولد منهكين، ولم يكن عددهم سوى نحو 7,000.",
            "وكان رجال وليام مستريحين ومستعدّين.",
            "وضع هارولد جيشه على قمّة تلّ سينلاك (Senlac Hill).",
            "شابك رجاله دروعهم معًا ليصنعوا جدار الدروع (shield wall).",
            "كان رماة وليام وجنود مشاته وفرسانه في الأسفل.",
            "وهم يهاجمون صاعدين التلّ، لم يستطيعوا أن يخترقوا الجدار.",
            "ثم جرّب النورمان (Normans) خدعة.",
            "تظاهر بعضهم بالفرار.",
            "طاردهم جنود إنجليز إلى أسفل التلّ، فانكسر الجدار.",
            "استمرّ القتال ساعات.",
            "ثم قُتل هارولد، وكان وليام قد انتصر."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "szereg żołnierzy z tarczami złączonymi ze sobą (shield wall, mur tarcz)",
            "dodatkowi żołnierze, którzy przybywają w trakcie bitwy (reinforcements, posiłki)",
            "cofnąć się lub uciec przed wrogiem (retreat, odwrót)",
            "rozstrzygający wynik raz na zawsze (decisive)",
            "pora, kiedy robi się ciemno (nightfall, zmrok)"
          ],
          "passage": [
            "14 października 1066 roku dwie armie spotkały się niedaleko Hastings.",
            "Ludzie Harolda byli wyczerpani i było ich tylko około 7,000.",
            "Ludzie Williama byli wypoczęci i gotowi.",
            "Harold ustawił swoją armię na szczycie wzgórza Senlac Hill.",
            "Jego ludzie złączyli tarcze, tworząc mur tarcz (shield wall).",
            "Łucznicy, piechota i kawaleria Williama byli na dole.",
            "Szarżując pod górę, nie mogli przebić muru.",
            "Wtedy Normanowie spróbowali sztuczki.",
            "Niektórzy z nich udawali, że uciekają.",
            "Angielscy żołnierze pogonili za nimi w dół wzgórza i mur się rozpadł.",
            "Walka trwała godzinami.",
            "Potem Harold zginął i William zwyciężył."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma linha de soldados com os escudos encostados uns aos outros (shield wall, muro de escudos)",
            "soldados extra que chegam durante uma batalha (reinforcements, reforços)",
            "recuar ou fugir do inimigo (retreat, retirar/retirada)",
            "que decide o resultado de uma vez por todas (decisive, decisivo)",
            "a hora em que escurece (nightfall, anoitecer)"
          ],
          "passage": [
            "A 14 de outubro de 1066, os dois exércitos encontraram-se perto de Hastings.",
            "Os homens de Harold estavam exaustos, e eram só cerca de 7 000.",
            "Os homens de William estavam descansados e prontos.",
            "Harold colocou o seu exército no topo da colina de Senlac (Senlac Hill).",
            "Os seus homens encostaram os escudos uns aos outros e fizeram um muro de escudos (shield wall).",
            "Os arqueiros, os soldados a pé e a cavalaria de William estavam em baixo.",
            "Atacando colina acima, não conseguiam quebrar o muro.",
            "Então os normandos tentaram um truque.",
            "Alguns deles fingiram fugir.",
            "Soldados ingleses perseguiram-nos colina abaixo, e o muro quebrou-se.",
            "A luta continuou durante horas.",
            "Depois Harold foi morto, e William tinha ganhado."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "saf askar ah oo gaashaammadooda isku xiray (shield wall)",
            "askar dheeraad ah oo yimaada inta dagaalku socdo (reinforcements)",
            "dib u gurasho ama cadowga ka cararid (retreat)",
            "natiijada si kama dambays ah u go'aamiya (decisive)",
            "waqtiga ay madoobaato (nightfall)"
          ],
          "passage": [
            "14 Oktoobar 1066, labadii ciidan Hastings agteeda ayay isku arkeen.",
            "Raggii Harold aad ayay u daalanaayeen, qiyaastii 7,000 keliya ayayna ahaayeen.",
            "Raggii William way nastay oo diyaar ayay ahaayeen.",
            "Harold ciidankiisa wuxuu dhigay Senlac Hill dusheeda.",
            "Raggiisu gaashaammadooda ayay isku xireen si ay u samaystaan shield wall.",
            "Fallaar-tuurayaashii William, askartii lugaynaysay iyo cavalry-gii hoosta ayay joogeen.",
            "Iyagoo buurta kor u weeraraya, darbiga ma jabin karin.",
            "Markaas Normans-ku khiyaano ayay isku dayeen.",
            "Qaarkood waxay iska dhigeen inay carareen.",
            "Askartii Ingiriisku buurta hoos ayay u eryadeen, darbigiina wuu jabay.",
            "Dagaalku saacado ayuu socday.",
            "Markaas Harold waa la dilay, William-na wuu guulaystay."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "ряд солдатів зі щитами, зімкнутими разом (shield wall)",
            "додаткові солдати, які прибувають під час битви (reinforcements)",
            "відійти назад або втекти від ворога (retreat)",
            "той, що вирішує результат раз і назавжди (decisive)",
            "час, коли темніє (nightfall)"
          ],
          "passage": [
            "14 жовтня 1066 року дві армії зустрілися біля Гастінгса (Hastings).",
            "Люди Гарольда були виснажені, і їх було лише близько 7,000.",
            "Люди Вільгельма відпочили і були готові.",
            "Гарольд поставив свою армію на вершині пагорба Сенлак (Senlac Hill).",
            "Його люди зімкнули щити і утворили стіну щитів (shield wall).",
            "Лучники, піхота і кіннота Вільгельма були внизу.",
            "Атакуючи вгору по схилу, вони не могли прорвати стіну.",
            "Тоді нормани спробували хитрість.",
            "Деякі з них зробили вигляд, що тікають.",
            "Англійські солдати погналися за ними вниз по схилу, і стіна розірвалася.",
            "Бій тривав годинами.",
            "Потім Гарольда вбили, і Вільгельм переміг."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "سپاہیوں کی ایک قطار جن کی ڈھالیں ایک دوسرے سے جڑی ہوں (shield wall)",
            "اضافی سپاہی جو جنگ کے دوران پہنچتے ہیں (reinforcements)",
            "دشمن سے پیچھے ہٹنا یا بھاگ جانا (retreat)",
            "جو نتیجہ ہمیشہ کے لیے طے کر دے (decisive)",
            "وہ وقت جب اندھیرا ہو جاتا ہے (nightfall)"
          ],
          "passage": [
            "14 اکتوبر 1066 کو دونوں فوجیں ہیسٹنگز (Hastings) کے قریب آمنے سامنے ہوئیں۔",
            "ہیرلڈ کے آدمی تھک کر چور تھے، اور وہ صرف تقریباً 7,000 تھے۔",
            "ولیم کے آدمی تازہ دم اور تیار تھے۔",
            "ہیرلڈ نے اپنی فوج سینلک پہاڑی (Senlac Hill) کی چوٹی پر رکھی۔",
            "اس کے آدمیوں نے اپنی ڈھالیں جوڑ کر ایک shield wall بنا لی۔",
            "ولیم کے تیر انداز، پیدل سپاہی اور گھڑسوار نیچے تھے۔",
            "اوپر کی طرف چڑھ کر حملہ کرتے ہوئے وہ دیوار کو توڑ نہ سکے۔",
            "پھر نارمنوں (Normans) نے ایک چال چلی۔",
            "ان میں سے کچھ نے بھاگنے کا ڈرامہ کیا۔",
            "انگریز سپاہی ان کے پیچھے پہاڑی سے نیچے دوڑے، اور دیوار ٹوٹ گئی۔",
            "لڑائی گھنٹوں جاری رہی۔",
            "پھر ہیرلڈ مارا گیا، اور ولیم جیت گیا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "The two sides line up",
          paragraphs: [
            "On 14 October 1066 the battle began. Harold Godwinson's army was exhausted. It had lost nearly half its soldiers since Stamford Bridge and was down to about 7,000 men. William, on the other hand, had used his time in the south to build a base camp, rest and feed his army, and he had archers, cavalry and foot soldiers ready to use together. Harold tried to seize the advantage anyway, arriving at Hastings quickly in the hope of taking William by surprise.",
            "Harold chose his ground well. He placed his army at the top of Senlac Hill and formed a defensive shield wall along the ridge. William was at the bottom of the hill with his archers, foot soldiers and cavalry. Your lesson asked why this was a big problem for William: his archers had to shoot uphill, so their arrows lost power or flew over the wall, and his cavalry had to charge uphill, so the horses arrived slow and tired.",
            "Harold's tactic was to stand and hold. William's tactic was to attack: archers first, to weaken the wall, then foot soldiers and cavalry to break it. In the early stages Harold's tactic worked better. The wall held, and as the battle went on Harold was even getting reinforcements, more men arriving to join him."
          ],
          worked: {
            q: "William landed on 28 September and the battle was fought on 14 October. For how many days did William wait in the south for Harold? (September has 30 days.)",
            steps: [
              "From 28 September to the end of the month: 30 − 28 = 2 days.",
              "Then 14 days into October: 2 + 14 = 16 days."
            ],
            answer: "16 days",
            checks: [{ expr: "(30-28)+14", value: 16, tol: 0 }]
          },
          tip: "Top of the hill, shield wall, holds. Bottom of the hill, archers and cavalry, cannot break it. That is the first half of the battle."
        },
        {
          heading: "The trick that broke the wall",
          paragraphs: [
            "William could not break the shield wall by force. So part of his army staged a fake retreat: they pretended to run away down the hill. Some of Harold's soldiers, thinking they had won, broke out of the wall to chase them. Once the English were off the ridge and spread out, William's cavalry turned and cut them down. Your lesson calls this the ‘Norman trick’.",
            "The Normans kept doing it. Each fake retreat pulled more English soldiers out of the wall and killed them in the open. Gradually the shield wall, which had held all morning, was broken. Once it was broken, the battle continued for hours, with the English fighting on without the protection of their line.",
            "Was the fake retreat a planned tactic or a lucky accident? Your lesson asks exactly that. If William planned it, it was brilliant leadership. If the first retreat was real, and the Normans only noticed what the English did and copied it, then luck played a part. Historians still argue about this, and you will need to decide."
          ],
          tip: "Fake retreat: the Normans pretend to run; the English chase; the wall breaks. Say it in those three steps."
        },
        {
          heading: "The death of a king",
          paragraphs: [
            "Late in the day, Harold Godwinson was killed. How he died is disputed. One version, shown on the Bayeux Tapestry, is that he was shot in the eye with an arrow. Another is that he was cut down by William's cavalry. Your lesson leaves the question open, and so should you: say that it is disputed, and give both versions.",
            "What is not disputed is the effect. Without their king, the English army had no cause left to fight for, and it broke and ran. William had won the Battle of Hastings. Your lesson asks why William needed to win before nightfall: if darkness had fallen with the wall still standing, the English could have slipped away, gathered reinforcements, and fought again on better terms, and William, in a foreign country with no way to replace his men, might never have had another chance.",
            "A historian, Marc Morris, offers an interpretation of the result. In his view, one reason William won was that he led his army better than Harold: he kept his own line together while the English line fell apart. But Morris also argues that luck mattered a great deal, because what finally decided the battle was that William survived and Harold died, and it could easily have been the other way round. Do you agree with him? That is the question the rest of this unit answers."
          ],
          tip: "Harold's death: disputed. Arrow in the eye, or cut down by cavalry. A careful historian gives both."
        }
      ],
      gate: [
        { kind: "gap", q: "Harold Godwinson formed a defensive shield wall at the top of ___ Hill.", answer: "Senlac", options: ["Senlac", "Stamford", "Westminster"], why: "The English held the top of Senlac Hill, which forced William's archers and cavalry to attack uphill.",
          feedback: {
            "Stamford": "Stamford Bridge was the battle against the Vikings in the north, on 25 September. The hill Harold defended at Hastings on 14 October was Senlac Hill.",
            "Westminster": "Westminster Abbey is where Harold was crowned in January. The hill where he made his shield wall at Hastings was Senlac Hill."
          } },
        { kind: "mcq", q: "How did the Normans finally break Harold's shield wall?", options: ["They pretended to retreat, and English soldiers chased them down the hill", "They set fire to the shields", "They attacked at night", "Hardrada's Vikings attacked the English from behind"], answer: 0, why: "The fake retreat drew English soldiers out of the wall and down the hill, where the Norman cavalry could kill them. Repeated, it broke the wall.",
          feedback: [
            "",
            "Nothing in your lesson mentions fire. The wall was broken by the ‘Norman trick’: a fake retreat that tempted English soldiers to leave the line and chase downhill.",
            "The battle was fought in daylight, and William needed to win before nightfall. The wall broke because of the fake retreat, not a night attack.",
            "Hardrada had been killed at Stamford Bridge nearly three weeks earlier, and his Vikings had been defeated. The wall was broken by the Normans' fake retreat."
          ] },
        { kind: "numeric", q: "The Battle of Stamford Bridge was on 25 September 1066 and the Battle of Hastings on 14 October 1066. How many days apart were the two battles? (September has 30 days.)", answer: 19, tolerance: 0, units: "days", why: "25 September to 30 September is 5 days; then 14 more days into October: 5 + 14 = 19.", check: "(30-25)+14",
          misconceptions: [
            { answer: 11, says: "You have subtracted 14 from 25, as if both dates were in the same month. They are not: count to the end of September (5 days) and then add the 14 days of October: 19.", check: "25-14" },
            { answer: 20, says: "You have counted both the 25th and the 14th as whole days. From 25 September to 30 September is 5 days, and then 14 days into October: 5 + 14 = 19.", check: "(30-25)+14+1" }
          ] }
      ],
      modules: [
        {
          title: "Five key moments",
          task: {
            kind: "order",
            q: "Put the five key moments of the Battle of Hastings in chronological order, first to last.",
            items: [
              "Harold forms a shield wall at the top of Senlac Hill",
              "William's archers, foot soldiers and cavalry cannot break the wall, and Harold receives reinforcements",
              "Part of William's army stages a fake retreat, and some English soldiers chase them down the hill",
              "The Normans keep fake retreating until the shield wall is broken",
              "The battle continues for hours until Harold is killed and the English flee"
            ]
          },
          levels: {
            support: {
              steps: [
                "The battle starts with both sides in position: the wall on the hill.",
                "Then William attacks and fails. Then he tries the trick once. Then he repeats it until it works.",
                "The end of a battle is the end of a king."
              ],
              example: {
                q: "Practice: put in order: the goalkeeper saves every shot; the other team tries a new tactic; it works and they score; the final whistle goes.",
                steps: ["Saving shots is the first stage, like the wall holding.", "A new tactic comes after the old one fails.", "Scoring comes before the whistle."],
                answer: "Saves every shot; new tactic; they score; final whistle."
              }
            },
            core: { hint: "Wall holds; wall cannot be broken; one fake retreat; many fake retreats; the king dies." },
            stretch: { extend: "Your homework storyboard needs six scenes. Add a sixth moment, before the first or after the last, and explain why it belongs in the story of the battle." }
          },
          why: "Harold formed the wall on Senlac Hill; William's attacks failed and Harold gained reinforcements; the Normans tried a fake retreat; they repeated it until the wall broke; then hours of fighting ended with Harold's death.",
          explain: "Say, in one sentence, why the second moment had to come before the third."
        },
        {
          title: "Tactics or luck?",
          task: {
            kind: "mcq",
            q: "Which of these events at Hastings was most clearly a tactic, a plan carried out on purpose, rather than luck?",
            options: ["Harold placing his shield wall at the top of Senlac Hill", "The wind changing so that William could cross the Channel", "Harold being killed late in the day", "William happening to survive the battle"],
            answer: 0,
            feedback: [
              "",
              "The wind was something nobody could control: that is your lesson's definition of luck. Harold choosing the top of the hill for his wall was a decision made on purpose, which is what a tactic is.",
              "Harold's death is the event Marc Morris calls lucky for William: it could have been either man who died. The clear tactic is Harold's choice to hold the top of Senlac Hill.",
              "William surviving the fighting was chance, not a plan; Morris says it could easily have been the other way round. Harold's shield wall on the hilltop was a deliberate tactic."
            ]
          },
          levels: {
            support: {
              steps: [
                "Your lesson's definition: luck is something that happened by chance that William or Harold could not control.",
                "Tactics are the way the two men organised and ordered their armies during the battle.",
                "For each option ask: did someone decide this, or did it just happen?"
              ],
              example: {
                q: "Practice: a team wins a match. Was it a tactic or luck that (a) they put their fastest player on the wing, (b) the referee missed a foul?",
                steps: ["Putting a player somewhere is a decision: tactic.", "A referee's mistake is outside the team's control: luck."],
                answer: "(a) tactic; (b) luck."
              }
            },
            core: { hint: "Only one option is a decision somebody made. The other three happened to people." },
            stretch: { extend: "The fake retreat is the hard case: it could be a tactic or an accident that became one. Write two sentences, one arguing each side, and say which you believe." }
          },
          why: "A tactic is a deliberate choice about how to fight; luck is chance that nobody controlled. Choosing the hilltop was Harold's decision. The wind, Harold's death and William's survival were chance.",
          explain: "Say, in one sentence, how you can tell a tactic from luck when you read about a battle."
        },
        {
          title: "The battle in six scenes",
          task: {
            kind: "written",
            q: "Your homework is a storyboard of the Battle of Hastings in six scenes. Write the six captions, one or two sentences each, in chronological order, so that someone who missed the lesson could follow the battle from your words alone.",
            criteria: [
              "My six scenes are in the correct chronological order, from the armies lining up to the end of the battle.",
              "I include the shield wall on Senlac Hill, the failed attacks, the fake retreat, the breaking of the wall and Harold's death.",
              "I use the correct names: Senlac Hill, Harold Godwinson, William, the Normans, huscarls or fyrd.",
              "My final scene says that Harold's death is disputed and gives both versions."
            ],
            model: "Scene 1: On 14 October 1066 Harold's exhausted army of about 7,000 men lines up at the top of Senlac Hill and locks shields into a wall; William's rested army waits at the bottom. Scene 2: William's archers shoot uphill and his foot soldiers and cavalry charge, but the wall holds and more English men arrive to join Harold. Scene 3: Part of the Norman army pretends to run away; some English soldiers leave the wall to chase them down the hill. Scene 4: The Norman cavalry turn and cut down the men in the open, and the Normans repeat the trick again and again. Scene 5: The shield wall is broken and the fighting goes on for hours without it. Scene 6: Late in the day Harold is killed. It is disputed whether an arrow hit him in the eye or William's cavalry cut him down; either way, the English flee and William has won."
          },
          levels: {
            support: {
              steps: [
                "Use the five key moments from the first module as scenes 1 to 5.",
                "Scene 6 is the death of Harold and the end of the battle.",
                "Each caption: who, what, where. Add a date or a number where you know one.",
                "Check scene 6 says ‘disputed’ and gives both versions of Harold's death."
              ],
              example: {
                q: "Practice: write two storyboard captions for the Battle of Stamford Bridge: the bridge, and the death of Hardrada.",
                steps: ["Caption 1: who held the bridge and what happened to him.", "Caption 2: how Hardrada died and what it did to the Vikings."],
                answer: "Scene 1: On 25 September 1066 a single Viking warrior holds the bridge against the English until an English soldier kills him. Scene 2: The English cross and fight the Vikings head on; Hardrada is killed by an arrow and his army is defeated."
              }
            },
            core: { hint: "Line up; attacks fail; first fake retreat; repeated fake retreats; wall broken; Harold dies. One scene each." },
            stretch: { extend: "Write a seventh caption from the Norman side, as the Bayeux Tapestry might show it. Then explain how a source made by the winners might tell the story differently from a source made by the losers." }
          },
          why: "A strong storyboard keeps the five key moments in order, uses the real names and places, and ends with Harold's death described as disputed, with both the arrow and the cavalry versions.",
          explain: "Say which of your six scenes was hardest to put in the right place, and how you decided."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 6 ─────────────────────────────
    {
      key: "why-william-won", n: 6,
      title: "Why did William win?",
      lead: "This chapter gives you the historian's toolkit for the unit's big question: sorting reasons into factors, weighing them against each other, and answering Marc Morris.",
      covers: [5],
      pretext: {
        words: [
          { word: "cause", means: "a reason why something happened", sentence: "Historians look for the causes of William's victory." },
          { word: "factor", means: "a type of cause, such as luck or tactics", sentence: "We sort the reasons into four factors." },
          { word: "luck", means: "something that happens by chance and cannot be controlled", sentence: "The wind changing was luck." },
          { word: "tactics", means: "the way a leader organises his army in a battle", sentence: "The fake retreat was one of William's tactics." },
          { word: "evaluate", means: "to weigh things up and decide which matters most", sentence: "Evaluate the four factors and rank them." }
        ],
        passage: [
          "Now we know what happened at Hastings.",
          "The harder question is why William won.",
          "In history, the reasons why something happens are called causes.",
          "A cause could be anything that helped William before or during the battle.",
          "It could also be anything that went badly for Harold.",
          "Historians sort causes into groups called factors.",
          "For Hastings we use four: luck, tactics, William's preparations and Harold's preparations.",
          "The wind changing was luck.",
          "The fake retreat was a tactic.",
          "William's trained, paid army was his preparation.",
          "Harold's tired, mostly untrained army was his.",
          "Your job is to decide which factor mattered most.",
          "Then you can answer the big question: was William just lucky?"
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "سبب حدوث شيء ما (cause)",
            "نوع من الأسباب، مثل الحظّ أو التكتيكات (factor)",
            "شيء يحدث بالمصادفة ولا يمكن التحكّم فيه (luck)",
            "الطريقة التي ينظّم بها القائد جيشه في المعركة (tactics)",
            "أن توازن بين الأمور وتقرّر أيّها أهمّ (evaluate)"
          ],
          "passage": [
            "الآن نعرف ما حدث في هيستينغز.",
            "السؤال الأصعب هو لماذا انتصر وليام.",
            "في التاريخ، تُسمّى أسباب حدوث شيء ما العِلل أو الأسباب (causes).",
            "يمكن أن يكون السبب أيّ شيء ساعد وليام قبل المعركة أو أثناءها.",
            "ويمكن أن يكون أيضًا أيّ شيء سار على نحو سيّء لهارولد.",
            "يصنّف المؤرّخون الأسباب في مجموعات تُسمّى العوامل (factors).",
            "في معركة هيستينغز نستخدم أربعة: الحظّ، والتكتيكات، واستعدادات وليام، واستعدادات هارولد.",
            "تغيّر الرياح كان حظًّا.",
            "والفرار المزيّف كان تكتيكًا.",
            "وجيش وليام المدرَّب الذي يتقاضى أجرًا كان استعداده.",
            "وجيش هارولد المتعب غير المدرَّب في أكثره كان استعداده.",
            "مهمّتك أن تقرّر أيّ العوامل كان الأهمّ.",
            "وعندئذٍ تستطيع أن تجيب عن السؤال الكبير: هل كان وليام محظوظًا فقط؟"
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "powód, dla którego coś się wydarzyło (cause, przyczyna)",
            "rodzaj przyczyny, na przykład szczęście albo taktyka (factor, czynnik)",
            "coś, co zdarza się przypadkiem i nad czym nie da się zapanować (luck, szczęście)",
            "sposób, w jaki dowódca organizuje swoją armię w bitwie (tactics, taktyka)",
            "rozważyć różne rzeczy i zdecydować, która ma największe znaczenie (evaluate)"
          ],
          "passage": [
            "Teraz wiemy, co się stało pod Hastings.",
            "Trudniejsze pytanie brzmi: dlaczego William wygrał?",
            "W historii powody, dla których coś się dzieje, nazywamy przyczynami (causes).",
            "Przyczyną mogło być wszystko, co pomogło Williamowi przed bitwą lub w jej trakcie.",
            "Mogło też być wszystko, co poszło źle dla Harolda.",
            "Historycy dzielą przyczyny na grupy zwane czynnikami (factors).",
            "Dla Hastings używamy czterech: szczęście, taktyka, przygotowania Williama i przygotowania Harolda.",
            "Zmiana wiatru to było szczęście.",
            "Udawany odwrót to była taktyka.",
            "Wyszkolona, opłacana armia Williama to było jego przygotowanie.",
            "Zmęczona, w większości niewyszkolona armia Harolda to było jego.",
            "Twoim zadaniem jest zdecydować, który czynnik miał największe znaczenie.",
            "Wtedy możesz odpowiedzieć na wielkie pytanie: czy William po prostu miał szczęście?"
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um motivo pelo qual algo aconteceu (cause, causa)",
            "um tipo de causa, como a sorte ou a tática (factor, fator)",
            "algo que acontece por acaso e não se pode controlar (luck, sorte)",
            "a maneira como um líder organiza o seu exército numa batalha (tactics, tática)",
            "pesar as coisas e decidir qual importa mais (evaluate, avaliar)"
          ],
          "passage": [
            "Agora sabemos o que aconteceu em Hastings.",
            "A pergunta mais difícil é porquê/por que William ganhou.",
            "Em história, os motivos pelos quais algo acontece chamam-se causas (causes).",
            "Uma causa pode ser qualquer coisa que ajudou William antes ou durante a batalha.",
            "Também pode ser qualquer coisa que correu mal para Harold.",
            "Os historiadores agrupam as causas em grupos chamados fatores (factors).",
            "Para Hastings usamos quatro: sorte, tática, os preparativos de William e os preparativos de Harold.",
            "A mudança do vento foi sorte.",
            "A falsa retirada foi uma tática.",
            "O exército treinado e pago de William foi a sua preparação.",
            "O exército cansado e quase todo sem treino de Harold foi a dele.",
            "O seu trabalho é decidir qual fator importou mais.",
            "Depois pode responder à grande pergunta: William teve só sorte?"
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "sabab wax u dhaceen (cause)",
            "nooc sabab, sida nasiib ama xeelad (factor)",
            "wax nasiib ku dhaca oo aan la xakamayn karin (luck)",
            "sida hoggaamiye ciidankiisa u habeeyo dagaal (tactics)",
            "wax miisaamid oo go'aaminta waxa ugu muhiimsan (evaluate)"
          ],
          "passage": [
            "Hadda waan ognahay waxa Hastings ka dhacay.",
            "Su'aasha ka adag waa sababta William u guulaystay.",
            "Taariikhda, sababaha wax u dhacaan waxaa la yiraahdaa causes.",
            "Cause wuxuu noqon karaa wax kasta oo William caawiyay dagaalka ka hor ama inta uu socday.",
            "Wuxuu kaloo noqon karaa wax kasta oo Harold u xumaaday.",
            "Taariikhyahannadu causes-ka waxay u kala saaraan kooxo la yiraahdo factors.",
            "Hastings waxaan u isticmaalnaa afar: nasiib, xeelad (tactics), diyaargarowga William iyo diyaargarowga Harold.",
            "Dabayshii is beddeshay nasiib ayay ahayd.",
            "Dib-u-gurashadii beenta ahayd xeelad ayay ahayd.",
            "Ciidankii William oo la tababaray oo la mushaharay diyaargarowgiisii ayuu ahaa.",
            "Ciidankii Harold oo daallan oo inta badan aan la tababarin kiisii ayuu ahaa.",
            "Shaqadaadu waa inaad go'aamiso factor-ka ugu muhiimsan.",
            "Markaas waad ka jawaabi kartaa su'aasha weyn: William nasiib keliya ma lahaa?"
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "причина, чому щось сталося (cause)",
            "тип причини, наприклад удача або тактика (factor)",
            "те, що стається випадково і чого не можна контролювати (luck)",
            "те, як командир організовує свою армію в битві (tactics)",
            "зважити все і вирішити, що важить найбільше (evaluate)"
          ],
          "passage": [
            "Тепер ми знаємо, що сталося біля Гастінгса.",
            "Складніше питання — чому переміг Вільгельм.",
            "В історії причини, через які щось стається, називаються causes.",
            "Причиною може бути все, що допомогло Вільгельму до битви або під час неї.",
            "Також це може бути все, що пішло погано для Гарольда.",
            "Історики сортують причини на групи, які називаються факторами (factors).",
            "Для Гастінгса ми використовуємо чотири: удача, тактика, підготовка Вільгельма і підготовка Гарольда.",
            "Зміна вітру була удачею.",
            "Удаваний відступ був тактикою.",
            "Навчена, оплачувана армія Вільгельма була його підготовкою.",
            "Втомлена, здебільшого ненавчена армія Гарольда була його підготовкою.",
            "Ваше завдання — вирішити, який фактор важив найбільше.",
            "Тоді ви зможете відповісти на головне питання: чи Вільгельму просто пощастило?"
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "کوئی وجہ کہ کچھ کیوں ہوا (cause)",
            "وجہ کی ایک قسم، جیسے قسمت یا جنگی چالیں (factor)",
            "کوئی چیز جو اتفاق سے ہو اور جس پر قابو نہ پایا جا سکے (luck)",
            "وہ طریقہ جس سے کوئی سردار جنگ میں اپنی فوج کو ترتیب دیتا ہے (tactics)",
            "چیزوں کو تول کر فیصلہ کرنا کہ کون سی سب سے زیادہ اہم ہے (evaluate)"
          ],
          "passage": [
            "اب ہم جانتے ہیں کہ ہیسٹنگز میں کیا ہوا۔",
            "زیادہ مشکل سوال یہ ہے کہ ولیم کیوں جیتا۔",
            "تاریخ میں، کسی چیز کے ہونے کی وجوہات کو causes کہتے ہیں۔",
            "cause کوئی بھی ایسی چیز ہو سکتی ہے جس نے جنگ سے پہلے یا جنگ کے دوران ولیم کی مدد کی۔",
            "یہ کوئی بھی ایسی چیز بھی ہو سکتی ہے جو ہیرلڈ کے لیے بُری ثابت ہوئی۔",
            "مورخ causes کو گروہوں میں بانٹتے ہیں جنھیں factors کہتے ہیں۔",
            "ہیسٹنگز کے لیے ہم چار استعمال کرتے ہیں: قسمت، جنگی چالیں، ولیم کی تیاریاں اور ہیرلڈ کی تیاریاں۔",
            "ہوا کا بدلنا قسمت (luck) تھی۔",
            "جھوٹی پسپائی ایک جنگی چال (tactic) تھی۔",
            "ولیم کی تربیت یافتہ، تنخواہ دار فوج اس کی تیاری تھی۔",
            "ہیرلڈ کی تھکی ہوئی، زیادہ تر غیر تربیت یافتہ فوج اس کی تیاری تھی۔",
            "آپ کا کام یہ فیصلہ کرنا ہے کہ کون سا factor سب سے زیادہ اہم تھا۔",
            "پھر آپ بڑے سوال کا جواب دے سکتے ہیں: کیا ولیم بس خوش قسمت تھا؟"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Causes and factors",
          paragraphs: [
            "In history, the reasons why something happens are called causes. A cause of William's victory could be anything that helped William before or during the battle, or anything that was bad for Harold before or during the battle. Your lesson began by asking you to write down as many reasons as you could. There are a lot of them, and that is the problem: a long list is hard to argue with.",
            "So historians group causes into factors. For the Battle of Hastings your lesson uses four. Luck means things that happened by chance that neither William nor Harold could control. Tactics means the way the two men organised and ordered their armies during the battle, and whose tactics were better. William's preparations asks whether his army was ready and well trained. Harold's preparations asks the same about Harold, and whether something happened that left his army weak.",
            "Once reasons are sorted into factors, you can compare whole groups of causes instead of single ones. That is how you move from a list to an argument."
          ],
          tip: "Cause: a reason. Factor: a group of reasons. Four factors for Hastings: luck, tactics, William's preparations, Harold's preparations."
        },
        {
          heading: "Sorting the reasons",
          paragraphs: [
            "Your lesson gave you ten reasons to sort. Under luck: the wind changed and let William cross the Channel while Harold was fighting in the north; and Harold was killed, so that the English had no king to fight for and ran. Under tactics: the ‘Norman trick’ of the fake retreat broke the shield wall; and William waited in the south for Harold to come to him, so that Harold's army arrived even more tired.",
            "Under William's preparations: his army was one of the best in Europe, with some of the best armour and weapons; and his soldiers were all trained, paid professionals. Under Harold's preparations: some of his best soldiers died at Stamford Bridge, where he lost about 5,000 men; the battle and the journey south left his troops exhausted and over 3,000 went home; his 7,000-man army was mostly fyrd, without proper weapons, armour or training; and he started the battle before his army was ready.",
            "Some reasons could sit in two boxes. Harold's death looks like luck, but you could argue it was the result of William's tactics finally breaking the wall. William waiting in the south is a tactic, but it also made Harold's preparations worse. Where a reason sits is a decision, and a good historian can explain the decision."
          ],
          worked: {
            q: "Of the ten reasons your lesson gave, two are luck, two are tactics, two are William's preparations and the rest are Harold's preparations. How many are Harold's preparations?",
            steps: [
              "Add the three groups you know: 2 + 2 + 2 = 6.",
              "Take them from the total: 10 − 6 = 4."
            ],
            answer: "4 reasons",
            checks: [{ expr: "10-(2+2+2)", value: 4, tol: 0 }]
          },
          tip: "Luck is what nobody controlled. If someone decided it, it is not luck."
        },
        {
          heading: "Evaluating the factors",
          paragraphs: [
            "Evaluating means deciding which factor was more important than the others, and saying why. Your lesson asks you to rank the four factors, then explain your number one in a PEE paragraph. Point: ___ was the most important reason why William won the Battle of Hastings. Evidence: for example, or this can be seen from, and then facts from your own knowledge. Explain: this led to William winning because, or this meant that.",
            "A strong evaluation does one more thing: it links the factors. If you think luck was most important, you must say why luck mattered more than Harold being tired or William's tactics. If you think Harold's preparations were most important, you might argue that a rested, full-strength English army would have held the hill all day, so no trick and no lucky arrow would have been enough.",
            "Ask yourself the counterfactual question: if this factor had been different, would William still have won? The factor that changes the answer most is the one that mattered most."
          ],
          tip: "Rank, explain your number one, then say why it beats the others. The last step is what turns a paragraph into an evaluation."
        },
        {
          heading: "Answering the historian",
          paragraphs: [
            "Marc Morris, a historian of the Norman Conquest, argues that one of the main reasons William won was luck. His evidence is that what finally decided the battle was that William survived and Harold died, and it could just as easily have been the other way round. He also credits William's leadership in holding his line together while Harold's broke up. That is an interpretation: a historian's view of why something happened, written long afterwards.",
            "Your lesson asks three things of you. According to this historian, why did William win? What evidence does he give? And which factors does he not mention: does his argument leave out William's preparations, or Harold's exhausted army, or the fake retreat? An interpretation is not wrong because it leaves things out, but a good historian notices what has been left out.",
            "Then you write your own PEE paragraph agreeing or disagreeing with Morris. Say whether you agree. Give evidence and explain. Then link to the other factors: if you agree that luck was decisive, say why luck beats tactics and preparations; if you disagree, say which factor beats luck and why. After the battle, William went on to be crowned King of England at Westminster Abbey on Christmas Day 1066. That is where your next unit, the Norman Conquest, begins."
          ],
          tip: "Agree or disagree, evidence, explain, link to the other factors. Four moves, one paragraph."
        }
      ],
      gate: [
        { kind: "mcq", q: "In history, what is a cause?", options: ["A reason why something happened", "A date on a timeline", "A battle between two armies", "A historian who writes about the past"], answer: 0, why: "Causes are the reasons why something happens. For Hastings, a cause is anything that helped William or hurt Harold.",
          feedback: [
            "",
            "A date tells you when something happened, not why. A cause is a reason why something happened, such as the wind changing or Harold's army being tired.",
            "A battle is an event, something that happened. A cause is a reason why it turned out the way it did.",
            "A historian is a person who studies the past and writes interpretations. A cause is a reason why something happened, which is what historians try to find."
          ] },
        { kind: "gap", q: "Things that happened by chance, which William or Harold could not control, are grouped under the factor called ___.", answer: "luck", options: ["luck", "tactics", "preparations"], why: "Luck is your lesson's name for chance events outside anyone's control, such as the wind changing.",
          feedback: {
            "tactics": "Tactics are the way William and Harold organised and ordered their armies during the battle, which they did control. Chance events nobody controlled go under luck.",
            "preparations": "Preparations are about whether an army was trained and ready, which its leader could influence. Chance events nobody controlled, like the wind, go under luck."
          } },
        { kind: "mcq", q: "According to the historian Marc Morris, what was the lucky event that finally decided the Battle of Hastings?", options: ["William survived and Harold died, when it could have been either of them", "The Pope sent William more soldiers", "It rained and the English arrows would not fly", "Hardrada arrived to help William"], answer: 0, why: "Morris argues that the battle was ultimately decided by which king died, and that this was chance: it could have been William.",
          feedback: [
            "",
            "The Pope gave William his support, but he sent no soldiers, and that is not what Morris calls lucky. Morris means that Harold died and William survived, when it could have been the other way round.",
            "Your lesson says nothing about rain at Hastings, and arrows were William's weapon. Morris's lucky event is that Harold, not William, was the king who died.",
            "Hardrada was already dead, killed at Stamford Bridge, and he was William's rival. Morris means the luck of who died on the battlefield: Harold rather than William."
          ] }
      ],
      modules: [
        {
          title: "Sort the reasons into factors",
          task: {
            kind: "match",
            q: "Match each reason William won to the factor it belongs to.",
            pairs: [
              ["The wind changed and let William cross the Channel while Harold was fighting in the north", "Luck"],
              ["The fake retreat tricked the English into breaking their shield wall", "Tactics"],
              ["William's soldiers were all trained, paid professionals with some of the best armour and weapons in Europe", "William's preparations"],
              ["Harold lost about 5,000 men at Stamford Bridge and his tired army was mostly untrained fyrd", "Harold's preparations"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Luck: could anyone control it? If not, it is luck.",
                "Tactics: is it about how an army was organised and ordered during the battle?",
                "Preparations: is it about whether an army was trained, rested and ready? Then ask whose army."
              ],
              example: {
                q: "Practice: sort these reasons a school team won: it rained and the other side hated mud; the coach switched to defence at half time; the team had trained all year.",
                steps: ["Rain: nobody controlled it, so luck.", "Switching to defence during the match: tactics.", "Training all year: preparations."],
                answer: "Rain: luck. Switch to defence: tactics. Training: preparations."
              }
            },
            core: { hint: "Wind, trick, trained Normans, tired English. One factor each." },
            stretch: { extend: "Take the reason ‘Harold was killed, so the English had no king to fight for’. Argue that it belongs under luck, then argue that it belongs under tactics. Which argument is stronger?" }
          },
          why: "The wind is luck (nobody controlled it); the fake retreat is tactics (how William fought); the trained professional army is William's preparations; the losses at Stamford Bridge and the tired, mostly untrained army are Harold's preparations.",
          explain: "Say, in one sentence, which reason was hardest to sort, and why."
        },
        {
          title: "The year 1066",
          task: {
            kind: "order",
            q: "Put the five turning points of 1066 in chronological order, earliest first.",
            items: [
              "Edward the Confessor dies without an heir (5 January)",
              "Harold Godwinson is crowned King of England (6 January)",
              "Harold defeats Hardrada at the Battle of Stamford Bridge (25 September)",
              "William defeats Harold at the Battle of Hastings (14 October)",
              "William is crowned King of England at Westminster Abbey (25 December)"
            ]
          },
          levels: {
            support: {
              steps: [
                "The year starts with a death and ends with a coronation.",
                "January first: the death, then the next day's crowning.",
                "Autumn: the battle in the north comes before the battle in the south, by 19 days.",
                "Christmas Day: the winner is crowned."
              ],
              example: {
                q: "Practice: put in order: Harold sends his army home (8 September); Hardrada lands (18 September); William lands (28 September).",
                steps: ["All in September, so order by day number.", "8, then 18, then 28."],
                answer: "Army sent home; Hardrada lands; William lands."
              }
            },
            core: { hint: "5 January, 6 January, 25 September, 14 October, 25 December." },
            stretch: { extend: "Between 6 January and 25 September nothing on this list happens, yet those months decided everything. Write two sentences explaining what was happening in that gap and why it mattered." }
          },
          why: "Edward died on 5 January; Harold was crowned on 6 January; Stamford Bridge was fought on 25 September; Hastings on 14 October; and William was crowned on Christmas Day, 25 December 1066. One year, two kings crowned, one killed.",
          explain: "Say, in one sentence, which two events on this list are furthest apart in time, and how many months separate them."
        },
        {
          title: "Was William just lucky?",
          task: {
            kind: "written",
            q: "William won the Battle of Hastings because he was lucky. How far do you agree? Write one PEE paragraph that says whether you agree with Marc Morris, gives evidence and explains it, and links your answer to at least one other factor.",
            criteria: [
              "I say clearly whether I agree or disagree that luck was the main reason William won.",
              "I give at least two accurate pieces of evidence from the events of 1066.",
              "I explain how my evidence led to William winning the battle.",
              "I link to at least one other factor (tactics, William's preparations, Harold's preparations) and say why my factor beats it."
            ],
            model: "I partly agree with Marc Morris that William won because he was lucky, but I think Harold's preparations mattered more. For example, Harold lost about 5,000 men at Stamford Bridge, over 3,000 more went home exhausted on the march south, and he reached Hastings with only about 7,000 men, most of them untrained fyrd. This meant that his shield wall was thinner and more tired than it should have been, so when the Normans faked a retreat his men lacked the discipline to hold the line. Luck did play a part, because the wind changed at the worst possible moment and Harold rather than William was killed, but a fresh, full-strength English army would probably have held Senlac Hill until nightfall, so I think Harold's weakened army was the more important reason."
          },
          levels: {
            support: {
              steps: [
                "Decide: agree, disagree, or partly agree. Write it as your first sentence, naming Morris.",
                "Evidence: For example, ___ and ___. Use dates and numbers from the unit.",
                "Explain: This meant that ___, which led to William winning because ___.",
                "Link: Luck / tactics / preparations also mattered, but ___ was more important because ___."
              ],
              example: {
                q: "Practice: write a PEE paragraph arguing that William's tactics were more important than luck, using the fake retreat and his decision to wait in the south.",
                steps: ["Point: I disagree with Morris; tactics mattered more than luck.", "Evidence: William waited in the south so Harold arrived tired; the fake retreat broke the wall.", "Explain and link: these were choices, not chance, and without them the lucky death of Harold might never have happened."],
                answer: "I disagree with Marc Morris that luck was the main reason William won; his tactics were more important. For example, William chose to wait in his camp so that Harold's army arrived exhausted, and during the battle the fake retreat tricked the English into breaking their shield wall. This led to William winning because these were deliberate choices that gave his army the chance to fight the English in the open, and without them the lucky arrow or charge that killed Harold might never have come."
              }
            },
            core: { hint: "Agree or disagree with Morris, two facts, explain, then beat one other factor. Four moves." },
            stretch: { extend: "Write a second paragraph taking the opposite view as strongly as you can. Then write one sentence saying which paragraph is more convincing and what a historian would need to know to decide." }
          },
          why: "A full answer takes a clear position on Morris, supports it with accurate evidence from 1066, explains how that evidence produced William's victory, and weighs the chosen factor against at least one other. Any factor can be argued; the quality is in the evidence and the linking.",
          explain: "Say, in one sentence, which factor you ranked highest and which single fact best supports that choice.",
          contexts: [
            { label: "Argue: luck",
              q: "Argue that luck was the most important reason William won the Battle of Hastings. Write one PEE paragraph that says whether you agree with Marc Morris, gives evidence and explains it, and links your answer to at least one other factor.",
              why: "Evidence for luck: the wind changing while Harold was in the north, and Harold dying when it could have been William. Beat another factor by arguing that even the best tactics need the right moment." },
            { label: "Argue: tactics",
              q: "Argue that tactics were the most important reason William won the Battle of Hastings. Write one PEE paragraph that says whether you agree with Marc Morris, gives evidence and explains it, and links your answer to at least one other factor.",
              why: "Evidence for tactics: waiting in the south so Harold arrived tired, and the fake retreat that broke the shield wall. Beat luck by arguing that the trick created the chance for Harold to be killed." },
            { label: "Argue: Harold's preparations",
              q: "Argue that Harold's preparations were the most important reason William won the Battle of Hastings. Write one PEE paragraph that says whether you agree with Marc Morris, gives evidence and explains it, and links your answer to at least one other factor.",
              why: "Evidence for Harold's preparations: 5,000 lost at Stamford Bridge, over 3,000 gone on the march, 7,000 mostly untrained fyrd at Hastings, starting the battle before the army was ready. Beat luck by arguing a full-strength wall would have held." }
          ]
        }
      ]
    }
  ],

  sources: {
    deckDump: "hi_y07_topic_2_the_battle_of_hastings.txt",
    decksUsed: [
      "L1 Challengers for the Throne: L1 Challengers for the Throne.pptx; Challengers 1066 Worksheet.pptx; Contenders Wall Names.pptx; HW Why & Challengers 1066.pptx",
      "L2 Stamford Bridge: L2 Battle of Stamford Bridge.pptx",
      "L3 Progress Check & Prep: L3 Progress Check & Preparations for Hastings 2025 updated.pptx; Armies Worksheet.pptx; Armies Worksheet DIFF.pptx; Homework Bayeux Tapestry.pptx",
      "L4 The Battle: L4 Battle of Hastings.pptx; Storyboard HW.pptx",
      "L5 Battle Review: L5 Review of Battle.pptx"
    ],
    notes: "Lesson titles, sequence, learning objectives, key words (earl, coronation), the dates (5 and 6 January, 8, 18, 25 and 28 September, 14 October 1066; 1016, 1035, 1040, 1042, 1051, 1064), the army figures (300 ships and 7,000 Vikings; 12,000 to 9,000 at Stamford Bridge; 15,000, 5,000, 10,000, 3,000 and 7,000 for Harold's losses; 9,000 for William), the two problems of summer 1066, the six reasons for Stamford Bridge and the progress-check success criteria, the soldier types and their tactics, the five key moments of Hastings, the ten reasons and four factors, the PEE frames, and the questions put to Marc Morris's interpretation are all taken from the department's decks. All explanations, questions, feedback, example sentences and model paragraphs are original; the teacher's modelled Stamford Bridge paragraph is not reused. The one quotation is from Eadmer (c. 1120), in the translation the deck's source sheet gives; it is out of copyright. Modern historians (Marc Morris, Giles Kristian, Tracy Borman, Dan Snow) and BBC Bitesize are paraphrased and never quoted. William's coronation on 25 December 1066 is the one fact added from outside the deck (the deck's own Future Learning slide points to the Norman Conquest); it is flagged in NOTES.md. astra/2: per-option feedback on every mcq and gap item, misconceptions with check expressions on every numeric item, explain prompts on every module, three context-choice modules (ch1, ch3, ch6), glossary chapters, Connections groups and spacing; no widgets and no pretext.l1 (translation is a separate pass)."
  }
};
