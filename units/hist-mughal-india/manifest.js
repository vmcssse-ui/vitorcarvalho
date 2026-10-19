// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 History · Year 8 Topic 1: Mughal India · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   every date, name and sequence is held in an independent CHRONOLOGY table in verify.py (each entry carries its deck slide
//   reference); every four-digit year in pupil text must be a CHRONOLOGY year, an allowed century, or a PARALLEL year used
//   in a non-Mughal support example; every dated event phrase must carry its CHRONOLOGY year; every "order" task is
//   compared with the canonical sequences held there and dated sequences must be chronological; every mcq / gap / match
//   answer is compared with the independent answer key; every numeric item carries `check` and `misconceptions` (each with
//   its own `check`); numeric contexts recompute to the task answer; every large number must be in the deck's FACTS set.
//   Quotation guard: NOTHING is quoted. The department's deck prints no primary source and no historian's words, so no
//   “…” text is allowed anywhere in pupil text; the deck's own model paragraph (L3 slide 11) is fingerprinted and banned.
//   Language guard: "cannons" (the deck's "canons" is banned), "Deccan" (not "Decan"), "kingdoms" (not "tribes"); the
//   deck's over-claims ("most of Asia", "only country in Asia to use gunpowder") are banned; the Taj Mahal architect legend
//   is banned; British spelling; no emoji. A mutation self-test proves the verifier notices tampering.
//   astra/2: per-wrong-option `feedback` on every mcq/gap; `misconceptions` on every numeric; `explain` on every module;
//   `glossary[].chapter`; `connections` 4 × 4 ⊂ glossary; `meta.spacing [2,7,30]`; no constellation; no pretext.l1.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["hist-mughal-india"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "hist-mughal-india",
    subjectKey: "history",
    subject: "History",
    board: "AQA",
    spec: "KS3 → 8145",
    specRef: "KS3 Year 8 Topic 1: Mughal India — foundations for GCSE History 8145 (Britain: Migration, empires and the people; significance, interpretations and evaluation)",
    year: 8,
    tier: "KS3",
    title: "Mughal India",
    sub: "How Babur created the Mughal Empire in 1526, how six emperors ruled it, what made its culture and power great, why it declined under Aurangzeb, and whether it deserves a legacy of greatness.",
    bigQuestion: "How far do you agree that the Mughal Empire achieved a legacy of greatness?",
    lessonCount: 6,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Creation of the Mughal Empire", question: "What was the Mughal Empire, how was it founded, and why is Babur important in the history of India?", keywords: ["Mughal", "Babur", "Battle of Panipat", "field artillery", "Lodi dynasty", "legacy"] },
    { n: 2, title: "Mughal Culture", question: "What was culture in Mughal India, what was it for, and which aspect of it was the greatest?", keywords: ["culture", "architecture", "Taj Mahal", "miniature", "Akbarnama", "music"] },
    { n: 3, title: "Mughal Successes and Progress Check", question: "How successful was the Mughal Empire at its peak, and why is it remembered as a great Empire?", keywords: ["success", "expansion", "religious tolerance", "government", "long-term impact", "PEEL paragraph"] },
    { n: 4, title: "Decline under Aurangzeb", question: "Why did the Mughal Empire begin to decline, and how far was Aurangzeb responsible?", keywords: ["Aurangzeb", "religious intolerance", "poor leadership", "technology", "Deccan", "succession"] },
    { n: 5, title: "Collapse of the Empire and Review", question: "What happened to the Mughal Empire after 1707, and was it a success or a failure?", keywords: ["collapse", "East India Company", "1707", "rulers", "military", "culture"] },
    { n: 6, title: "Assessment", question: "Did the Mughal Empire achieve a legacy of greatness?", keywords: ["legacy", "interpretation", "evidence", "essay", "conclusion", "judgement"] }
  ],

  glossary: [
    { term: "dynasty", means: "A family of rulers who pass power from parent to child. Six Mughal emperors from one family ruled from 1526 to 1707.", chapter: "babur" },
    { term: "Sultan", means: "A Muslim king. Ibrahim Lodi was the Sultan of Delhi whom Babur defeated at Panipat.", chapter: "babur" },
    { term: "field artillery", means: "Cannons moved onto the battlefield and fired during the fighting. Babur was the first to use them in India.", chapter: "babur" },
    { term: "legacy", means: "What a ruler or an empire leaves behind for the people who come after.", chapter: "babur" },
    { term: "succession", means: "Who becomes ruler next. Mughal sons often fought a war of succession for the throne.", chapter: "six-emperors" },
    { term: "administration", means: "The systems that run an empire from day to day, such as collecting taxes and sending messages.", chapter: "six-emperors" },
    { term: "tolerance", means: "Accepting people whose religion or way of life is different from your own. Akbar welcomed all religions.", chapter: "six-emperors" },
    { term: "Navratnas", means: "The nine jewels: the group of talented advisers who helped Akbar rule the Empire.", chapter: "greatness" },
    { term: "architecture", means: "The art of designing and building. The Mughals built palaces, tombs, forts and gates.", chapter: "culture" },
    { term: "miniature", means: "A small, detailed Mughal painting, small enough to fit inside a book.", chapter: "culture" },
    { term: "Akbarnama", means: "The Book of Akbar: a three-volume history of Akbar and his Empire written by his court historian.", chapter: "culture" },
    { term: "Urdu", means: "A language that grew up in the Mughal Empire and is still spoken by millions today.", chapter: "culture" },
    { term: "intolerance", means: "Refusing to accept other religions or ways of life. Aurangzeb is remembered for religious intolerance.", chapter: "decline" },
    { term: "Deccan", means: "The large plateau of southern India where Aurangzeb fought for 26 years.", chapter: "decline" },
    { term: "peasant", means: "A poor farmer who works the land. Under Aurangzeb, peasants paid half their income in tax.", chapter: "decline" },
    { term: "decline", means: "Growing weaker over time. The Empire's decline began after Aurangzeb's death in 1707.", chapter: "collapse-legacy" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 glossary terms used exactly once.
  connections: [
    { group: "Taking the throne", terms: ["dynasty", "Sultan", "field artillery", "succession"] },
    { group: "Ruling well", terms: ["administration", "tolerance", "Navratnas", "legacy"] },
    { group: "Mughal culture", terms: ["architecture", "miniature", "Akbarnama", "Urdu"] },
    { group: "Falling apart", terms: ["intolerance", "Deccan", "peasant", "decline"] }
  ],

  chapters: [
    /* ───────────── 1 · Babur ───────────── */
    {
      key: "babur", n: 1, title: "Babur and the creation of the Mughal Empire",
      lead: "Who the Mughals were, where Babur came from, how a small army won the Battle of Panipat in 1526, and what Babur left behind.",
      covers: [1],
      pretext: {
        words: [
          { word: "Mughal", means: "the Muslim dynasty that ruled much of India from 1526", sentence: "The Mughal emperors ruled India for more than 300 years." },
          { word: "dynasty", means: "a family of rulers who pass power from parent to child", sentence: "Babur founded a dynasty that his son and grandson carried on." },
          { word: "Sultan", means: "a Muslim king", sentence: "Ibrahim Lodi was the Sultan of Delhi before Babur arrived." },
          { word: "field artillery", means: "cannons used on the battlefield during a battle", sentence: "Babur was the first leader to use field artillery in India." },
          { word: "legacy", means: "what a ruler leaves behind for those who come after", sentence: "Babur's legacy was a new empire, but one with very little money." }
        ],
        passage: [
          "The Mughals were a Muslim dynasty who ruled much of India for more than 300 years.",
          "Their first emperor was Babur.",
          "Babur was born in Fergana, in what is now Uzbekistan.",
          "His father ruled a small kingdom there.",
          "When his father died, Babur took over and set out to expand it.",
          "In 1504 he captured Kabul, in Afghanistan.",
          "Then he set his sights on the wealth of India.",
          "Northern India was ruled by Ibrahim Lodi, the Sultan of Delhi.",
          "In April 1526 the two armies met at Panipat.",
          "Babur had 12,000 men against about 70,000 soldiers and 1,000 war elephants.",
          "His cannons frightened the elephants, and Babur won.",
          "Historians see this victory as the moment the Mughal Empire was created.",
          "Babur died in 1530, leaving an empire with very little money."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الأسرة المسلمة التي حكمت جزءًا كبيرًا من الهند من 1526 (Mughal)",
            "أسرة من الحكّام يتوارثون السلطة من الأب إلى الابن (dynasty)",
            "ملك مسلم (Sultan)",
            "مدافع تُستخدم في ميدان القتال في أثناء المعركة (field artillery)",
            "ما يتركه الحاكم لمن يأتي بعده (legacy)"
          ],
          "passage": [
            "كان المغول (Mughals) أسرةً مسلمة حكمت جزءًا كبيرًا من الهند أكثر من 300 سنة.",
            "وكان أوّل أباطرتهم بابُر (Babur).",
            "وقد وُلد بابُر في فرغانة (Fergana)، في ما هو اليوم أوزبكستان.",
            "وكان أبوه يحكم هناك مملكة صغيرة.",
            "ولمّا مات أبوه تولّى بابُر الحكم وعزم على توسيع المملكة.",
            "وفي 1504 فتح كابول في أفغانستان.",
            "ثم وجّه نظره إلى ثروة الهند.",
            "وكان شمال الهند يحكمه إبراهيم لودي (Ibrahim Lodi) سلطان دلهي.",
            "وفي أبريل 1526 التقى الجيشان في بانيبات (Panipat).",
            "وكان مع بابُر 12,000 رجل في مواجهة نحو 70,000 جندي و1,000 فيل حرب.",
            "فأفزعت مدافعه الفيلة، وانتصر بابُر.",
            "ويرى المؤرّخون هذا النصر اللحظة التي أُنشئت فيها الإمبراطورية المغولية.",
            "ومات بابُر في 1530 وترك إمبراطورية مالها قليل جدًّا."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "muzułmańska dynastia, która od 1526 roku rządziła dużą częścią Indii (Mughal)",
            "rodzina władców, którzy przekazują władzę z rodzica na dziecko (dynasty)",
            "muzułmański król (Sultan)",
            "armaty używane na polu bitwy w czasie walki (field artillery)",
            "to, co władca zostawia tym, którzy przyjdą po nim (legacy)"
          ],
          "passage": [
            "Mogołowie (Mughals) byli muzułmańską dynastią, która rządziła dużą częścią Indii przez ponad 300 lat.",
            "Ich pierwszym cesarzem był Babur.",
            "Babur urodził się w Fergana, na terenie dzisiejszego Uzbekistanu.",
            "Jego ojciec rządził tam małym królestwem.",
            "Kiedy jego ojciec umarł, Babur przejął władzę i postanowił powiększyć to królestwo.",
            "W 1504 roku zdobył Kabul w Afganistanie.",
            "Potem skierował wzrok na bogactwa Indii.",
            "Północnymi Indiami rządził Ibrahim Lodi, sułtan Delhi.",
            "W kwietniu 1526 roku obie armie spotkały się pod Panipat.",
            "Babur miał 12,000 ludzi przeciwko około 70,000 żołnierzy i 1,000 słoni bojowych.",
            "Jego armaty przestraszyły słonie i Babur wygrał.",
            "Historycy widzą w tym zwycięstwie chwilę powstania imperium Mogołów.",
            "Babur umarł w 1530 roku, zostawiając imperium z bardzo małymi pieniędzmi."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a dinastia muçulmana que governou grande parte da Índia a partir de 1526 (Mughal, mogol)",
            "uma família de governantes que passa o poder de pais para filhos (dynasty, dinastia)",
            "um rei muçulmano (Sultan, sultão)",
            "canhões usados no campo de batalha durante um combate (field artillery, artilharia de campanha)",
            "aquilo que um governante deixa para os que vêm depois (legacy, legado)"
          ],
          "passage": [
            "Os mogóis (Mughals) eram uma dinastia muçulmana que governou grande parte da Índia durante mais de 300 anos.",
            "O seu primeiro imperador foi Babur.",
            "Babur nasceu em Fergana, no que é hoje o Uzbequistão.",
            "O pai dele governava lá um pequeno reino.",
            "Quando o pai morreu, Babur tomou o lugar dele e partiu para o alargar.",
            "Em 1504 conquistou Cabul (Kabul), no Afeganistão.",
            "Depois pôs os olhos na riqueza da Índia.",
            "O norte da Índia era governado por Ibrahim Lodi, o sultão de Delhi (Déli).",
            "Em abril de 1526 os dois exércitos encontraram-se em Panipat.",
            "Babur tinha 12 000 homens contra cerca de 70 000 soldados e 1 000 elefantes de guerra.",
            "Os canhões dele assustaram os elefantes, e Babur venceu.",
            "Os historiadores veem esta vitória como o momento em que o Império Mogol foi criado.",
            "Babur morreu em 1530, deixando um império com muito pouco dinheiro."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "qoyskii Muslim ee xukumay inta badan Hindiya laga bilaabo 1526-kii",
            "qoys taliyeyaal ah oo awoodda waalid u gudbiyo ilmo",
            "boqor Muslim ah",
            "madaafiic goobta dagaalka lagu isticmaalo intii dagaalku socdo",
            "waxa taliye uu u tago kuwa ka dambeeya"
          ],
          "passage": [
            "Mughals waxay ahaayeen qoys Muslim ah oo in ka badan 300 sano xukumay inta badan Hindiya.",
            "Imbaraadoorkoodii ugu horreeyay wuxuu ahaa Babur.",
            "Babur wuxuu ku dhashay Fergana, oo hadda Uzbekistan tahay.",
            "Aabbihiis wuxuu halkaas xukumay boqortooyo yar.",
            "Markii aabbihiis dhintay, Babur wuu la wareegay oo wuxuu bilaabay inuu ballaariyo.",
            "1504-kii wuxuu qabsaday Kabul, oo Afghanistan ku taal.",
            "Kadibna indhihiisa wuxuu ku dhuftay hantida Hindiya.",
            "Waqooyiga Hindiya waxaa xukumayay Ibrahim Lodi, Suldaankii Delhi.",
            "Abriil 1526-kii labada ciidan waxay ku kulmeen Panipat.",
            "Babur wuxuu lahaa 12,000 nin oo ka hor imanayay qiyaastii 70,000 askari iyo 1,000 maroodi dagaal.",
            "Madaafiicdiisu waxay maroodiyada cabsiisay, Babur-na wuu guulaystay.",
            "Taariikhyahannadu guushan waxay u arkaan daqiiqaddii Boqortooyadii Mughal la abuuray.",
            "Babur wuxuu dhintay 1530-kii, isagoo ka tegay boqortooyo lacag aad u yar leh."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "мусульманська династія, яка правила більшою частиною Індії з 1526 року (Mughal)",
            "родина правителів, які передають владу від батька до дитини (dynasty)",
            "мусульманський король (Sultan)",
            "гармати, які використовують на полі бою під час битви (field artillery)",
            "те, що правитель залишає тим, хто приходить після нього (legacy)"
          ],
          "passage": [
            "Могули (Mughals) були мусульманською династією, яка правила більшою частиною Індії понад 300 років.",
            "Їхнім першим імператором був Бабур (Babur).",
            "Бабур народився у Фергані, на території сучасного Узбекистану.",
            "Його батько правив там невеликим королівством.",
            "Коли його батько помер, Бабур перебрав владу і взявся розширювати його.",
            "У 1504 році він захопив Кабул в Афганістані.",
            "Потім він накинув оком на багатства Індії.",
            "Північною Індією правив Ібрагім Лоді, султан Делі.",
            "У квітні 1526 року два війська зійшлися при Паніпаті (Panipat).",
            "Бабур мав 12,000 людей проти близько 70,000 вояків і 1,000 бойових слонів.",
            "Його гармати налякали слонів, і Бабур переміг.",
            "Історики вважають цю перемогу миттю, коли була створена Могульська імперія.",
            "Бабур помер у 1530 році, залишивши імперію з дуже малими грошима."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ مسلمان خاندان جس نے 1526 سے ہندوستان کے بڑے حصے پر حکومت کی (Mughal)",
            "حاکموں کا وہ خاندان جو اقتدار ماں باپ سے اولاد کو دیتا جائے (dynasty)",
            "ایک مسلمان بادشاہ (Sultan)",
            "وہ توپیں جو میدانِ جنگ میں لڑائی کے دوران استعمال ہوں (field artillery)",
            "وہ چیز جو کوئی حاکم اپنے بعد آنے والوں کے لیے چھوڑ جاتا ہے (legacy)"
          ],
          "passage": [
            "مغل ایک مسلمان خاندان تھے جنھوں نے ہندوستان کے بڑے حصے پر 300 سال سے زیادہ حکومت کی۔",
            "ان کا پہلا شہنشاہ بابر تھا۔",
            "بابر فرغانہ (Fergana) میں پیدا ہوا، جو اب ازبکستان میں ہے۔",
            "اس کا باپ وہاں ایک چھوٹی سی بادشاہت کا حاکم تھا۔",
            "باپ کے مرنے پر بابر نے حکومت سنبھالی اور اسے بڑھانے کے لیے نکل پڑا۔",
            "1504 میں اس نے افغانستان میں کابل فتح کیا۔",
            "پھر اس کی نظر ہندوستان کی دولت پر جم گئی۔",
            "شمالی ہندوستان پر دہلی کے سلطان ابراہیم لودھی (Ibrahim Lodi) کی حکومت تھی۔",
            "اپریل 1526 میں دونوں فوجیں پانی پت (Panipat) میں آمنے سامنے آئیں۔",
            "بابر کے پاس 12,000 آدمی تھے، اور مقابل تقریباً 70,000 سپاہی اور 1,000 جنگی ہاتھی تھے۔",
            "اس کی توپوں نے ہاتھیوں کو ڈرا دیا، اور بابر جیت گیا۔",
            "مؤرخ اس فتح کو وہ لمحہ سمجھتے ہیں جب مغلیہ سلطنت قائم ہوئی۔",
            "بابر 1530 میں مر گیا، اور ایک ایسی سلطنت چھوڑ گیا جس کے پاس پیسہ بہت کم تھا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Who were the Mughals?",
          paragraphs: [
            "The Mughals were a Muslim dynasty, a ruling family, whose founder Babur came from Central Asia and ruled from Kabul in Afghanistan. In 1526 they conquered northern India and then spread south until, at their largest, they ruled lands that today are India, Pakistan, Afghanistan and Bangladesh.",
            "In this unit you study the Empire from 1526, when it was founded, to 1707, the year its decline begins. The Empire lasted much longer than that: it was only replaced in 1858, when the British took over India. You will meet that story in your next topic.",
            "The big question for the whole unit is: how far did the Mughal Empire achieve a legacy of greatness? A legacy is what a ruler or an empire leaves behind. Keep asking of every emperor, battle and building: does this add to the case for greatness, or take away from it?"
          ],
          tip: "Learn the two bookend dates first: 1526 (founded at Panipat) and 1707 (Aurangzeb dies and the decline begins). Every other date sits between them."
        },
        {
          heading: "Where did Babur come from?",
          paragraphs: [
            "Babur was born in Fergana, in what is now Uzbekistan, where his father ruled a small kingdom. When his father died, Babur took over. He did not want a small kingdom. He wanted the whole of Afghanistan and northern India.",
            "In 1504 he captured Kabul in Afghanistan and made it his base. From Kabul he looked towards India, drawn by its huge rivers, its resources and the wealth they created. Northern India was then ruled by the Lodi dynasty, led by Ibrahim Lodi, the Sultan (king) of Delhi.",
            "Babur attacked Delhi more than once. On the way he faced harsh weather, strong enemies and unhappiness among his own followers. He kept them with him through threats, promises and appeals, and through speeches that inspired them. Historians count this ability to hold an army together as a mark of strong leadership."
          ],
          worked: {
            q: "How many years passed between Babur capturing Kabul (1504) and his victory at Panipat (1526)?",
            steps: [
              "Write the later date first: 1526.",
              "Subtract the earlier date: 1526 − 1504.",
              "The 15 hundreds cancel, so work out 26 − 4 = 22.",
              "Check it makes sense: a little over twenty years of campaigning before the great victory."
            ],
            answer: "22 years",
            checks: [{ expr: "1526 - 1504", value: 22, tol: 0 }]
          }
        },
        {
          heading: "The Battle of Panipat, April 1526",
          paragraphs: [
            "In April 1526 Babur's army met the Lodi army at Panipat, north of Delhi. The numbers were against him: your lesson gives Babur only 12,000 men against about 70,000 soldiers and 1,000 war elephants. On paper, he should have lost.",
            "Babur won because of his tactics and his weapons. He built a barricade so the enemy had to come to him. He used cannons on the battlefield, field artillery, the first time this had been done in India. The noise of the cannon fire terrified the Lodi war elephants, which turned and trampled their own soldiers.",
            "Ibrahim Lodi was captured and killed as his army retreated. By May 1526 Babur held both Delhi and Agra. Historians see the victory at Panipat in 1526 as the moment the Mughal Empire was created, which is why the date matters so much."
          ],
          tip: "Panipat in three words: cannons, elephants, panic. If you can explain the link between them, you can explain why a smaller army won."
        },
        {
          heading: "Babur's legacy",
          paragraphs: [
            "Babur ruled as emperor from 1526 to 1530, only four years. In that time he laid the foundations of an empire that would rule India for more than 300 years. He is remembered as a modern military leader, for his use of artillery, and as a strong leader, for keeping his followers united.",
            "But there was a weakness. Babur did not set up the administration an empire needs: the systems for collecting tax and running the land. So when he died in 1530, leaving the throne to his son Humayun, the Empire had very little money and was not safe from invaders.",
            "When you judge Babur, hold both sides together. He was significant because he created the Empire and showed how to win in India. His legacy was weaker because he left the Empire poor and unprotected."
          ],
          tip: "A legacy question wants successes AND weaknesses. One sentence on each, then say which outweighs the other."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which battle did Babur win in 1526 to create the Mughal Empire?", options: ["The Battle of Panipat", "The Battle of Kabul", "The Battle of Agra", "The Battle of Fergana"], answer: 0, why: "Babur defeated Ibrahim Lodi's much larger army at Panipat in April 1526, and historians count this as the creation of the Mughal Empire.",
          feedback: [
            "",
            "Kabul is the city Babur captured in 1504 and used as his base. It was not the battle of 1526; that was fought at Panipat, north of Delhi.",
            "Agra is a city Babur took over after his victory, by May 1526. The battle itself was fought at Panipat.",
            "Fergana is where Babur was born, in what is now Uzbekistan. The battle that created the Empire was fought in India, at Panipat."
          ] },
        { kind: "numeric", q: "In which year did Babur win the Battle of Panipat?", answer: 1526, tolerance: 0, units: "", why: "The battle was fought in April 1526. By May 1526 Babur held Delhi and Agra.", check: "1526",
          misconceptions: [
            { answer: 1530, says: "1530 is the year Babur died, leaving the Empire with little money. He won Panipat four years earlier, in 1526.", check: "1526 + 4" },
            { answer: 1504, says: "1504 is when Babur captured Kabul in Afghanistan, his base before he turned to India. Panipat came 22 years later, in 1526.", check: "1526 - 22" }
          ] },
        { kind: "gap", q: "Babur was the first leader to use ___ in a battle in India.", answer: "field artillery", options: ["field artillery", "war elephants", "a navy"], why: "Babur's cannons on the battlefield, field artillery, were new to India and frightened the Lodi war elephants.",
          feedback: {
            "war elephants": "The war elephants belonged to the Lodi army, and they had been used in India for a very long time. Babur's new weapon was cannons on the battlefield: field artillery.",
            "a navy": "No navy fought at Panipat, which is far inland. The Mughals never built a strong navy, which became a weakness later. Babur's new weapon was field artillery."
          } }
      ],
      modules: [
        {
          title: "Babur's rise in order",
          task: {
            kind: "order",
            q: "Put the steps of Babur's rise in chronological order.",
            items: [
              "Babur takes over his father's small kingdom in Fergana",
              "Babur captures Kabul in Afghanistan (1504)",
              "Babur defeats Ibrahim Lodi at the Battle of Panipat (April 1526)",
              "Babur takes control of Delhi and Agra (May 1526)",
              "Babur dies, leaving an empire with very little money (1530)"
            ]
          },
          levels: {
            support: {
              steps: [
                "One step has no date: it is Babur's starting point, so it goes first.",
                "Four steps have dates in brackets. Find the smallest year: that comes next.",
                "Two steps share the year 1526. April comes before May.",
                "Check the story makes sense: he needs a base (Kabul) before he can attack India, and he must win the battle before he can take the cities."
              ],
              example: {
                q: "Put these steps of William of Normandy's rise in order: William is crowned King of England (December 1066); William defeats Harold at Hastings (October 1066); William becomes Duke of Normandy as a boy; the Domesday Book is made (1086).",
                steps: ["The undated step is his starting point: Duke of Normandy.", "Two steps share 1066; October comes before December.", "1086 is last."],
                answer: "Duke of Normandy; Hastings (October 1066); crowned (December 1066); Domesday (1086)"
              }
            },
            core: { hint: "Start with the undated step. Where two steps share a year, use the month." },
            stretch: { extend: "Explain why capturing Kabul in 1504 mattered for everything that came after it. What did a base in Afghanistan give Babur?" }
          },
          explain: "Say, in one sentence, why Babur needed Kabul before he could attack India.",
          why: "Babur inherits Fergana; he takes Kabul in 1504 as his base; he defeats the Lodi army at Panipat in April 1526; he takes Delhi and Agra by May 1526; he dies in 1530 leaving the Empire poor."
        },
        {
          title: "Why did the Empire start poor?",
          task: {
            kind: "mcq",
            q: "Despite his military reputation, why do historians say Babur left the Mughal Empire in a bad way when he died in 1530?",
            options: [
              "He had not set up systems such as tax collection, so the Empire had very little money",
              "He had lost the Battle of Panipat and given Delhi back to the Lodi dynasty",
              "He had spent all the Empire's money building the Taj Mahal",
              "He had banned the use of cannons, so the army fell behind"
            ],
            answer: 0,
            why: "Babur was a fine general but he did not build the administration an empire needs. Without a tax system there was no steady income, so the Empire he left was poor and not safe from invaders.",
            feedback: [
              "",
              "Babur never lost Panipat; he won it in 1526 and held Delhi and Agra until his death. His weakness was not on the battlefield but in running the Empire: he set up no tax system.",
              "The Taj Mahal was built more than a hundred years later by Shah Jahan. Babur's problem was the opposite of spending: he had no system for collecting money in the first place.",
              "Babur introduced cannons to India; he did not ban them. The weakness historians point to is that he set up no administration, so the Empire had little money when he died."
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask: what does an empire need as well as an army? It needs money coming in.",
                "Where does an empire's money come from? Taxes, collected by a system of officials.",
                "Did Babur set up that system? Your lesson says he did not.",
                "So what state was the treasury in when he died in 1530? Nearly empty."
              ],
              example: {
                q: "A football club wins the cup but has no ticket office, no sponsors and no accounts. What will the club look like a year later, and why?",
                steps: ["Winning brings glory, not steady income.", "Without a system for collecting money, nothing comes in.", "So a year later the club is broke, however good the team was."],
                answer: "The club will be broke, because success on the pitch does not replace a system for bringing in money."
              }
            },
            core: { hint: "Think about what Babur did NOT build, rather than any battle he fought." },
            stretch: { extend: "Explain why a new empire with no tax system is also not safe from invaders. What links money to safety?" }
          },
          explain: "Say, in one sentence, what Babur failed to set up and why it mattered.",
          why: "Babur's reign was short and spent on conquest. He never created the administration, above all a tax collection system, that would give the Empire a steady income, so it was poor and vulnerable when Humayun inherited it in 1530."
        },
        {
          title: "Babur's significance",
          task: {
            kind: "written",
            q: "Explain how Babur was a significant figure in the history of India. Use the sentence starters from your lesson: Babur's significance in the history of India can be seen by… This means he was significant because… Write one paragraph of four to six sentences.",
            criteria: [
              "I name one thing Babur did, with its date, such as winning the Battle of Panipat in 1526.",
              "I use a key concept correctly: field artillery, the Battle of Panipat, the creation of the Mughal Empire or leadership qualities.",
              "I explain why what he did mattered for India afterwards, using the word because.",
              "I mention one weakness of his legacy, so my judgement is balanced."
            ],
            model: "Babur's significance in the history of India can be seen by his victory at the Battle of Panipat in April 1526. With only 12,000 men he defeated the Sultan of Delhi, using field artillery for the first time in India so that the noise frightened the Lodi war elephants. This means he was significant because the victory created the Mughal Empire, a dynasty that would rule India for more than 300 years and build some of its most famous monuments. However, his legacy was not perfect, because he set up no tax system and the Empire he left in 1530 was poor. Even so, without Babur there would have been no Mughal Empire at all."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: Babur's significance in the history of India can be seen by… (name the battle and the year).",
                "Sentence 2: give one detail of how he won (field artillery, elephants, smaller army).",
                "Sentence 3: This means he was significant because… (what the victory created, and for how long).",
                "Sentence 4: However… (one weakness: no tax system, a poor Empire in 1530)."
              ],
              example: {
                q: "Explain how William of Normandy was a significant figure in the history of England.",
                steps: ["Name the event and date: William won the Battle of Hastings in 1066.", "Give a detail: his cavalry and archers broke the English shield wall.", "Explain the significance: because it began Norman rule, which changed England's language, laws and castles for centuries.", "Add a weakness: his harsh rule in the north caused great suffering."],
                answer: "William's significance can be seen by his victory at Hastings in 1066; this means he was significant because it began Norman rule, which reshaped England; however, his harsh rule caused great suffering."
              }
            },
            core: { hint: "Event and date, then one detail of how, then because, then however. Four sentences will do it." },
            stretch: { extend: "Was Babur more significant as a military leader or as a founder of a dynasty? Argue for one, using evidence from both." }
          },
          explain: "Say, in one sentence, the difference between what Babur did and why it was significant.",
          why: "A strong answer names Panipat and 1526, explains how Babur won, says why it mattered for India afterwards (the creation of a long-lasting Empire), and balances this with the weakness of his legacy."
        }
      ]
    },

    /* ───────────── 2 · six emperors ───────────── */
    {
      key: "six-emperors", n: 2, title: "Six emperors, 1526 to 1707: who was the greatest?",
      lead: "The six Mughal emperors in order, what each achieved and where each failed, and how to decide what greatness means.",
      covers: [1],
      pretext: {
        words: [
          { word: "reign", means: "the time a ruler is in power", sentence: "Akbar's reign lasted 49 years." },
          { word: "exile", means: "being forced to leave your own country", sentence: "Humayun spent fifteen years in exile before he won back his throne." },
          { word: "administration", means: "the systems that run an empire, such as collecting taxes", sentence: "Akbar built the administration that his grandfather had never set up." },
          { word: "tolerance", means: "accepting people whose religion is different from yours", sentence: "Akbar's tolerance meant all religions were welcome in his Empire." },
          { word: "succession", means: "who becomes ruler next", sentence: "A fight over the succession followed Shah Jahan's reign." }
        ],
        passage: [
          "Six emperors ruled the Mughal Empire between 1526 and 1707.",
          "Babur founded the Empire but left it poor.",
          "His son Humayun was weak, lost his throne in 1540, and won it back in 1555.",
          "Humayun's son Akbar ruled for 49 years.",
          "Akbar built a tax system, welcomed all religions and made the Empire rich.",
          "People called him Akbar the Great.",
          "His son Jahangir loved art but struggled with alcohol and drugs.",
          "Jahangir's wife, Nur Jahan, was a talented leader who made up for his faults.",
          "Shah Jahan took the Empire to the height of its power and built the Taj Mahal.",
          "His sons then fought over who should rule next.",
          "Aurangzeb won and ruled for 50 years, making the Empire its largest ever.",
          "But he was intolerant of other religions, and the decline began after he died in 1707."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "المدّة التي يكون فيها الحاكم في السلطة (reign)",
            "أن تُرغَم على مغادرة بلدك (exile)",
            "الأنظمة التي تُدير الإمبراطورية، كجمع الضرائب (administration)",
            "أن تقبل الناس الذين يختلف دينهم عن دينك (tolerance)",
            "مَن يصير الحاكم القادم (succession)"
          ],
          "passage": [
            "حكم الإمبراطورية المغولية ستّة أباطرة بين 1526 و1707.",
            "فبابُر أسّس الإمبراطورية ولكنه تركها فقيرة.",
            "وابنه همايون (Humayun) كان ضعيفًا، فخسر عرشه في 1540 ثم استعاده في 1555.",
            "وحكم ابن همايون، أكبر (Akbar)، 49 سنة.",
            "فبنى أكبر نظامًا للضرائب، ورحّب بكلّ الأديان، وأغنى الإمبراطورية.",
            "وسمّاه الناس أكبر العظيم.",
            "وابنه جهانكير (Jahangir) أحبّ الفنّ ولكنه عانى الخمر والمخدّرات.",
            "وكانت زوجة جهانكير، نور جهان (Nur Jahan)، قائدةً موهوبة سدّت نقائصه.",
            "وبلغ شاه جهان (Shah Jahan) بالإمبراطورية قمّة قوّتها وبنى تاج محل (Taj Mahal).",
            "ثم تقاتل أبناؤه على مَن يحكم بعده.",
            "وانتصر أورنكزيب (Aurangzeb) وحكم 50 سنة، فجعل الإمبراطورية أكبر ما كانت.",
            "ولكنه لم يتسامح مع الأديان الأخرى، وبدأ الانحدار بعد موته في 1707."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "czas, w którym władca sprawuje władzę (reign)",
            "przymusowe opuszczenie własnego kraju (exile)",
            "systemy, które prowadzą imperium, na przykład pobieranie podatków (administration)",
            "przyjmowanie ludzi, których religia jest inna niż twoja (tolerance)",
            "to, kto zostanie następnym władcą (succession)"
          ],
          "passage": [
            "Sześciu cesarzy rządziło imperium Mogołów między 1526 i 1707 rokiem.",
            "Babur założył imperium, ale zostawił je biedne.",
            "Jego syn Humayun (Humajun) był słaby, stracił tron w 1540 roku i odzyskał go w 1555 roku.",
            "Syn Humayuna, Akbar, rządził 49 lat.",
            "Akbar zbudował system podatkowy, przyjmował wszystkie religie i uczynił imperium bogatym.",
            "Ludzie nazywali go Akbarem Wielkim.",
            "Jego syn Jahangir (Dżahangir) kochał sztukę, ale zmagał się z alkoholem i narkotykami.",
            "Żona Jahangira, Nur Jahan (Nur Dżahan), była zdolną przywódczynią i nadrabiała jego słabości.",
            "Shah Jahan (Szahdżahan) doprowadził imperium do szczytu potęgi i zbudował Tadż Mahal.",
            "Potem jego synowie walczyli o to, kto ma rządzić po nim.",
            "Aurangzeb wygrał i rządził 50 lat, czyniąc imperium największym w jego historii.",
            "Ale nie znosił innych religii, a po jego śmierci w 1707 roku zaczął się upadek."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o tempo em que um governante está no poder (reign, reinado)",
            "ser obrigado a deixar o próprio país (exile, exílio)",
            "os sistemas que fazem funcionar um império, como a cobrança de impostos (administration, administração)",
            "aceitar pessoas cuja religião é diferente da tua (tolerance, tolerância)",
            "quem se torna governante a seguir (succession, sucessão)"
          ],
          "passage": [
            "Seis imperadores governaram o Império Mogol entre 1526 e 1707.",
            "Babur fundou o Império, mas deixou-o pobre.",
            "O seu filho Humayun era fraco, perdeu o trono em 1540 e recuperou-o em 1555.",
            "Akbar, filho de Humayun, governou durante 49 anos.",
            "Akbar criou um sistema de impostos, acolheu todas as religiões e tornou o Império rico.",
            "As pessoas chamavam-lhe Akbar o Grande.",
            "O seu filho Jahangir adorava arte, mas tinha problemas com o álcool e as drogas.",
            "A mulher de Jahangir, Nur Jahan, era uma líder talentosa que compensava os defeitos dele.",
            "Shah Jahan levou o Império ao auge do seu poder e construiu o Taj Mahal.",
            "Depois os filhos dele lutaram por quem devia governar a seguir.",
            "Aurangzeb venceu e governou durante 50 anos, tornando o Império o maior de sempre.",
            "Mas era intolerante com outras religiões, e o declínio começou depois de ele morrer, em 1707."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "muddada taliye awoodda ku jiro",
            "in lagu qasbo inaad dalkaaga ka baxdo",
            "nidaamyada boqortooyada wada, sida ururinta canshuuraha",
            "inaad aqbasho dadka diintoodu ka duwan tahay taada",
            "cidda taliyaha xigta noqonaysa"
          ],
          "passage": [
            "Lix imbaraadoor ayaa Boqortooyadii Mughal xukumay intii u dhexeysay 1526-kii iyo 1707-dii.",
            "Babur wuxuu Boqortooyada aasaasay laakiin faqiir ayuu kaga tegay.",
            "Wiilkiisa Humayun wuu tabar yaraa, carshigiisa wuu lumiyay 1540-kii, wuuna dib u helay 1555-kii.",
            "Wiilka Humayun, Akbar, wuxuu xukumay 49 sano.",
            "Akbar wuxuu dhisay nidaam canshuur, diimo kasta wuu soo dhoweeyay oo Boqortooyada wuu hodmiyay.",
            "Dadku waxay ugu yeereen Akbar the Great.",
            "Wiilkiisa Jahangir wuxuu jeclaa farshaxanka laakiin khamrada iyo maandooriyaha ayay dhibeen.",
            "Xaaska Jahangir, Nur Jahan, waxay ahayd hoggaamiye karti leh oo cillad kastiisa beddeshay.",
            "Shah Jahan wuxuu Boqortooyada gaarsiiyay awooddeeda ugu sarraysay oo wuxuu dhisay Taj Mahal.",
            "Wiilashiisa kadibna waxay ku dagaallameen cidda xigta xukunta.",
            "Aurangzeb wuu guulaystay oo wuxuu xukumay 50 sano, Boqortooyadana wuxuu ka dhigay tii ugu weynayd abid.",
            "Laakiin diimaha kale dulqaad kuma lahayn, sii daciifiddiina waxay bilaabatay markii uu dhintay 1707-dii."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "час, коли правитель має владу (reign)",
            "коли людину змушують покинути власну країну (exile)",
            "системи, які керують імперією, як-от збирання податків (administration)",
            "прийняття людей, чия релігія інакша за вашу (tolerance)",
            "те, хто стає правителем наступним (succession)"
          ],
          "passage": [
            "Шість імператорів правили Могульською імперією між 1526 і 1707 роками.",
            "Бабур заснував імперію, але залишив її бідною.",
            "Його син Хумаюн був слабким, втратив трон у 1540 році і відвоював його у 1555 році.",
            "Син Хумаюна Акбар (Akbar) правив 49 років.",
            "Акбар побудував податкову систему, приймав усі релігії і зробив імперію багатою.",
            "Люди називали його Акбаром Великим.",
            "Його син Джагангір любив мистецтво, але боровся з алкоголем і наркотиками.",
            "Дружина Джагангіра, Нур Джахан, була талановитою провідницею, яка надолужувала його хиби.",
            "Шах-Джахан (Shah Jahan) підніс імперію на вершину її могутності і побудував Тадж-Махал.",
            "Потім його сини воювали за те, хто має правити наступним.",
            "Аурангзеб (Aurangzeb) переміг і правив 50 років, зробивши імперію найбільшою за всю її історію.",
            "Але він був нетерпимий до інших релігій, і після його смерті у 1707 році почався занепад."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ عرصہ جس میں کوئی حاکم اقتدار میں رہے (reign)",
            "اپنا ملک چھوڑنے پر مجبور کر دیا جانا (exile)",
            "وہ نظام جن سے سلطنت چلتی ہے، جیسے ٹیکس جمع کرنا (administration)",
            "ایسے لوگوں کو قبول کرنا جن کا مذہب آپ سے مختلف ہو (tolerance)",
            "اگلا حاکم کون بنے گا (succession)"
          ],
          "passage": [
            "1526 اور 1707 کے درمیان مغلیہ سلطنت پر چھ شہنشاہوں نے حکومت کی۔",
            "بابر نے سلطنت کی بنیاد رکھی مگر اسے غریب چھوڑ گیا۔",
            "اس کا بیٹا ہمایوں کمزور تھا، 1540 میں تخت کھو بیٹھا، اور 1555 میں دوبارہ حاصل کر لیا۔",
            "ہمایوں کے بیٹے اکبر نے 49 سال حکومت کی۔",
            "اکبر نے ٹیکس کا نظام بنایا، سب مذہبوں کو خوش آمدید کہا اور سلطنت کو امیر بنا دیا۔",
            "لوگ اسے اکبر اعظم کہتے تھے۔",
            "اس کے بیٹے جہانگیر کو فن سے محبت تھی، مگر وہ شراب اور نشے سے لڑتا رہا۔",
            "جہانگیر کی بیوی نور جہاں ایک باصلاحیت رہنما تھیں، جنھوں نے اس کی کمیوں کو پورا کیا۔",
            "شاہ جہاں سلطنت کو اس کی طاقت کی بلندی تک لے گیا اور تاج محل بنوایا۔",
            "پھر اس کے بیٹے اس بات پر لڑ پڑے کہ اگلا حاکم کون ہو۔",
            "اورنگزیب جیتا اور 50 سال حکومت کی، اور سلطنت کو اپنے سب سے بڑے پھیلاؤ تک پہنچایا۔",
            "مگر وہ دوسرے مذہبوں کے بارے میں تنگ دل تھا، اور 1707 میں اس کی موت کے بعد زوال شروع ہو گیا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Humayun: a throne lost and won back",
          paragraphs: [
            "Humayun, Babur's son, became emperor in 1530 at 22 years old. He was inexperienced as a politician and a soldier, and he preferred writing poetry to the battlefield. He faced constant challenges to his rule and could not stamp his control on the Empire.",
            "In 1540 he was forced into exile: he had to flee the Empire and search for allies who would help him return. It took him fifteen years. In 1555 he marched his forces back into northern India and retook the throne.",
            "Back in power, Humayun began to set up the administration that had been missing under his father, including a system for collecting tax. Then, in 1556, he died suddenly after falling down a flight of stone stairs. His legacy was to set the stage for his son Akbar."
          ],
          worked: {
            q: "How long was Humayun in exile?",
            steps: [
              "Find the two dates: forced into exile in 1540, retook the throne in 1555.",
              "Later date minus earlier date: 1555 − 1540.",
              "55 − 40 = 15.",
              "Check: your lesson says it took him fifteen years to take back control."
            ],
            answer: "15 years",
            checks: [{ expr: "1555 - 1540", value: 15, tol: 0 }]
          }
        },
        {
          heading: "Akbar the Great and Jahangir",
          paragraphs: [
            "Akbar, Humayun's son, became emperor in 1556 and reigned for 49 years, until 1605. He fought to take control of more than half of India, greatly increasing the size of the Empire. He set up excellent communication across his lands and a proper tax system, so the Empire became very wealthy. That wealth paid for palaces and for the artists whose paintings still survive.",
            "Akbar made sure that all religions were welcomed in his Empire, and by the standards of his time people saw him as an extremely tolerant ruler. For his tolerance, his skill at administration and his support for culture he is known as Akbar the Great.",
            "His son took the name Jahangir, meaning Holder of the World, when he became emperor in 1605. He tried to continue his father's tolerance and wanted to improve his people's lives, but he was addicted to alcohol and drugs, which made him a weak leader with little interest in war. His wife Nur Jahan, whom he married in 1611, was a talented leader who made up for his faults, and the years after their marriage were peaceful. Many paintings date from his reign. But he was slow to set up trade links with Europe, and many people lived in poverty."
          ],
          tip: "Akbar is the yardstick. When you judge any other emperor, ask: did they keep Akbar's tolerance and his tax system, or lose them?"
        },
        {
          heading: "Shah Jahan and Aurangzeb",
          paragraphs: [
            "Shah Jahan became emperor in 1627 and reigned for thirty years. Under him the power and influence of the Empire reached its peak. He developed the communication and tax systems further and made sure his power reached every corner of his lands. He paid for many great buildings, including the Taj Mahal, and trained an army to take more land. Yet he is also remembered for the struggle over the succession, the fight between his sons about who would rule next.",
            "Aurangzeb won that struggle. Your lesson dates his reign from 1657, when Shah Jahan fell ill and the fighting began, to 1707: fifty years. Aurangzeb was deeply religious, dressed simply, avoided alcohol and drugs and did not spend money on things he thought unnecessary. He had little interest in paintings, so few survive from his reign. He was a skilled general who gained control of most of India, and by 1707 the Empire had reached its greatest extent.",
            "But Aurangzeb is also remembered for religious intolerance. He tried to make Islam the religion of the whole Empire, demolished temples and made Hindus pay a tax for protection. Keeping control of such a huge area was proving very difficult, and historians see his reign as the beginning of the Empire's decline."
          ],
          tip: "Shah Jahan: peak and the Taj Mahal. Aurangzeb: largest size, but intolerance and the start of decline. Two emperors, two turning points."
        },
        {
          heading: "How do you decide who was greatest?",
          paragraphs: [
            "Your lesson asks you to rank the six emperors in a diamond, with the greatest at the top. Before you rank anyone, decide your criteria: the tests you will use. Size of the Empire? Wealth and good government? Tolerance and peace? Buildings and art? A fair judge uses the same tests for every emperor.",
            "Notice how the answer changes with the test. By size, Aurangzeb wins. By culture, Shah Jahan or Jahangir might. By government and tolerance, Akbar does. By founding the Empire at all, Babur has a claim. Historians disagree about greatness because they weigh these tests differently.",
            "So when you give your answer, say your criteria first, then your choice, then your evidence. That is what makes a judgement a historical one rather than a guess."
          ],
          tip: "Criteria first, choice second, evidence third. Say it in that order and your answer will always be fair."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which emperor is known as the Great for his tolerance, his administration and his support for culture?", options: ["Akbar", "Babur", "Jahangir", "Aurangzeb"], answer: 0, why: "Akbar reigned for 49 years, built the tax system, welcomed all religions and paid for the arts, so he is remembered as Akbar the Great.",
          feedback: [
            "",
            "Babur founded the Empire, but he set up no administration and left it poor, so he is not the emperor known as the Great. That title belongs to his grandson Akbar.",
            "Jahangir tried to continue his father's tolerance, but his addiction to alcohol and drugs made him a weak leader. The emperor known as the Great is his father, Akbar.",
            "Aurangzeb made the Empire its largest ever, but he is remembered for religious intolerance, the opposite of the quality that earned Akbar his title."
          ] },
        { kind: "gap", q: "In 1540 Humayun was forced into ___ and did not win back his throne until 1555.", answer: "exile", options: ["exile", "prison", "retirement"], why: "Humayun had to leave the Empire in 1540 and spent fifteen years finding support before he retook the throne in 1555.",
          feedback: {
            "prison": "Humayun was not locked up; he was driven out of the Empire altogether and had to look for allies abroad. Being forced to leave your own country is called exile.",
            "retirement": "Humayun did not choose to stop ruling; he was forced out by challenges to his rule and spent fifteen years trying to get back. That is exile, not retirement."
          } },
        { kind: "mcq", q: "Which emperor paid for the building of the Taj Mahal?", options: ["Shah Jahan", "Akbar", "Humayun", "Aurangzeb"], answer: 0, why: "Shah Jahan, who reigned from 1627, paid for many great buildings, and the Taj Mahal is the most famous of them.",
          feedback: [
            "",
            "Akbar paid for palaces and paintings, but the Taj Mahal came later. It was built under his grandson Shah Jahan.",
            "Humayun spent much of his reign in exile and died in 1556, long before the Taj Mahal. It was built under Shah Jahan.",
            "Aurangzeb dressed simply and refused to spend money on things he thought unnecessary; he did not build the Taj Mahal. His father Shah Jahan did."
          ] }
      ],
      modules: [
        {
          title: "The emperors in order",
          task: {
            kind: "order",
            q: "Put the six Mughal emperors in the order they ruled.",
            items: [
              "Babur, founder of the Empire (1526)",
              "Humayun, exiled and restored (1530)",
              "Akbar the Great (1556)",
              "Jahangir, Holder of the World (1605)",
              "Shah Jahan, builder of the Taj Mahal (1627)",
              "Aurangzeb, the last great Mughal (1657)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Each name has the year his reign began in brackets. Find the smallest: that emperor came first.",
                "Remember the family line: Babur, then his son, then his son's son, and so on.",
                "Akbar is the grandson of the founder, so he is third.",
                "The Taj Mahal was built before the decline began, so Shah Jahan comes before Aurangzeb."
              ],
              example: {
                q: "Put these Tudor monarchs in order: Elizabeth I (1558), Henry VII (1485), Henry VIII (1509), Mary I (1553).",
                steps: ["Smallest year first: 1485.", "Then 1509, 1553, 1558."],
                answer: "Henry VII; Henry VIII; Mary I; Elizabeth I"
              }
            },
            core: { hint: "Founder first, then his son, grandson and so on. The years in brackets settle any doubt." },
            stretch: { extend: "Explain why historians treat Akbar as a turning point in this sequence. What did the Empire have after him that it did not have before?" }
          },
          explain: "Say, in one sentence, how you remember which emperor came after Akbar.",
          why: "Babur 1526, Humayun 1530, Akbar 1556, Jahangir 1605, Shah Jahan 1627, Aurangzeb 1657: father to son for six reigns."
        },
        {
          title: "How long did Akbar reign?",
          task: {
            kind: "numeric",
            q: "Akbar became emperor in 1556 and died in 1605. How many years did he reign?",
            answer: 49, tolerance: 0, units: "years",
            why: "1605 − 1556 = 49. Your lesson calls it his long reign of 49 years.",
            check: "1605 - 1556",
            misconceptions: [
              { answer: 50, says: "50 years is Aurangzeb's reign (1657 to 1707), or you may have counted both end years. Akbar's reign is 1605 − 1556 = 49 years.", check: "1605 - 1556 + 1" },
              { answer: 48, says: "You may have slipped by one when subtracting. Take 1556 from 1605 carefully: 1605 − 1556 = 49.", check: "1605 - 1556 - 1" },
              { answer: 75, says: "That is 1605 − 1530, which starts from the year Humayun first became emperor. Akbar's reign began in 1556, the year Humayun died, so the subtraction is 1605 − 1556 = 49.", check: "1605 - 1530" }
            ]
          },
          contexts: [
            { label: "A court painter", q: "A painter joined Akbar's court in 1556, the year he became emperor, and worked there until Akbar died in 1605. For how many years did the painter serve Akbar?", check: "1605 - 1556" },
            { label: "A tax record", q: "Akbar's tax system was set up when he became emperor in 1556 and his officials kept records every year until his death in 1605. Over how many years of his reign were records kept?", check: "1605 - 1556" },
            { label: "A village elder", q: "A Hindu village elder was born in 1556, the year Akbar took the throne. How old was he, in years, when Akbar died in 1605?", check: "1605 - 1556" }
          ],
          levels: {
            support: {
              steps: [
                "Write the later date first: 1605.",
                "Subtract the earlier date: 1605 − 1556.",
                "Do it in two parts: 1605 − 1500 = 105, then 105 − 56 = 49.",
                "Check it is close to half a century, as your lesson says: a long reign."
              ],
              example: {
                q: "Elizabeth I became queen in 1558 and died in 1603. How many years did she reign?",
                steps: ["Later date first: 1603.", "Subtract: 1603 − 1558.", "1603 − 1500 = 103, then 103 − 58 = 45."],
                answer: "45 years",
                checks: [{ expr: "1603 - 1558", value: 45, tol: 0 }]
              }
            },
            core: { hint: "Later date minus earlier date. Do not count both end years." },
            stretch: { extend: "Aurangzeb also reigned for about fifty years. Explain why a long reign helped Akbar but, in the end, did not save Aurangzeb." }
          },
          explain: "Say, in one sentence, why a long reign gave Akbar an advantage over Babur and Humayun.",
          why: "1605 − 1556 = 49 years. A long, stable reign gave Akbar time to build the tax system, the communication network and the tolerant court that made the Empire rich."
        },
        {
          title: "Match the emperor to the legacy",
          task: {
            kind: "match",
            q: "Match each emperor to the legacy your lesson gives him.",
            pairs: [
              ["Humayun", "Lost the throne in 1540, won it back in 1555 and set the stage for his son"],
              ["Akbar", "Tolerance, administrative genius and cultural achievements earned him the title the Great"],
              ["Jahangir", "Wanted to achieve a great deal but was held back by alcohol and drugs; a peaceful reign"],
              ["Shah Jahan", "Remembered for his buildings and for the struggle over the succession"],
              ["Aurangzeb", "A controversial ruler: the largest Empire, but intolerance and the start of decline"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the one you know best: the Taj Mahal means buildings, so that is Shah Jahan.",
                "The Great is a title: it belongs to Akbar.",
                "Exile and return is Humayun's story.",
                "Of the two left, the peaceful reign with a weakness for alcohol is Jahangir; the largest Empire with intolerance is Aurangzeb."
              ],
              example: {
                q: "Match the Tudor monarch to the legacy: Henry VIII; Elizabeth I. Choices: broke with the Pope and married six times; defeated the Spanish Armada and never married.",
                steps: ["Six marriages is Henry VIII.", "The Armada is Elizabeth I."],
                answer: "Henry VIII: broke with the Pope and married six times. Elizabeth I: defeated the Armada and never married."
              }
            },
            core: { hint: "Buildings, the Great, exile, alcohol, the largest Empire: five clues for five emperors." },
            stretch: { extend: "Which of these legacies do you think historians would weigh most heavily when judging the whole Empire, and why?" }
          },
          explain: "Say, in one sentence, which emperor's legacy you found hardest to place and what clue settled it.",
          why: "Humayun: exile and return. Akbar: the Great. Jahangir: peaceful but weak. Shah Jahan: buildings and the succession struggle. Aurangzeb: largest Empire, intolerance and decline."
        }
      ]
    },

    /* ───────────── 3 · culture ───────────── */
    {
      key: "culture", n: 3, title: "Mughal culture: buildings, paintings, music and words",
      lead: "What culture means, why emperors built monuments and sat for portraits, how Mughal art blended styles, and which aspect of culture was the greatest.",
      covers: [2],
      pretext: {
        words: [
          { word: "culture", means: "the art, music, buildings, language and ways of life of a people", sentence: "Mughal culture mixed Persian, Turkish and Indian styles." },
          { word: "architecture", means: "the art of designing and building", sentence: "The Mughals are best known for their architecture." },
          { word: "miniature", means: "a small, detailed painting that could fit inside a book", sentence: "Each emperor had his portrait painted as a miniature." },
          { word: "symbol", means: "a picture that stands for an idea", sentence: "A halo in a painting was a symbol of being close to God." },
          { word: "Akbarnama", means: "the Book of Akbar, a history of his reign written at his court", sentence: "The Akbarnama tells us how Akbar wanted his rule to be remembered." },
          { word: "Urdu", means: "a language that grew up in the Mughal Empire", sentence: "Urdu is still spoken by millions of people today." }
        ],
        passage: [
          "Culture means the buildings, art, music, language and ways of life of a people.",
          "The Mughals are best known for their architecture.",
          "Emperors built palaces, tombs, forts and great gates across the Empire.",
          "The most famous is the Taj Mahal, built for Shah Jahan in Agra.",
          "Mughal buildings blend Persian, Turkish and Indian styles.",
          "Mughal paintings are called miniatures because they were small enough to fit in a book.",
          "Painters gave emperors a halo to show they were close to God.",
          "Akbar loved music and kept 36 musicians at his court.",
          "There, Hindu and Muslim music mingled and became one.",
          "Akbar's court historian wrote the Akbarnama, the Book of Akbar, in three volumes.",
          "Many books were translated into Persian so more people could read them.",
          "A new language, Urdu, was born in the Empire and is still spoken today.",
          "Even the game of Ludo comes from Pachisi, a Mughal favourite."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "فنّ شعب من الشعوب وموسيقاه وأبنيته ولغته وطرق حياته (culture)",
            "فنّ التصميم والبناء (architecture)",
            "لوحة صغيرة دقيقة تتّسع داخل كتاب (miniature)",
            "صورة ترمز إلى فكرة (symbol)",
            "كتاب أكبر، وهو تاريخ حكمه كُتب في بلاطه (Akbarnama)",
            "لغة نشأت في الإمبراطورية المغولية (Urdu)"
          ],
          "passage": [
            "الثقافة تعني أبنية شعب من الشعوب وفنّه وموسيقاه ولغته وطرق حياته.",
            "والمغول أشهر ما يُعرفون به فنّ البناء.",
            "فقد بنى الأباطرة القصور والأضرحة والحصون والبوّابات العظيمة في الإمبراطورية كلّها.",
            "وأشهرها تاج محل، وقد بُني لشاه جهان في آغرا (Agra).",
            "والأبنية المغولية تمزج الطُرز الفارسية والتركية والهندية.",
            "واللوحات المغولية تُسمّى المنمنمات (miniatures) لأنها كانت صغيرة تتّسع في كتاب.",
            "وكان الرسّامون يضعون للأباطرة هالةً ليُظهروا قربهم من الله.",
            "وأحبّ أكبر الموسيقى، وكان في بلاطه 36 موسيقيًّا.",
            "وهناك امتزجت الموسيقى الهندوسية والمسلمة وصارت واحدة.",
            "وكتب مؤرّخ بلاط أكبر كتاب أكبرنامه (Akbarnama)، أي كتاب أكبر، في ثلاثة مجلّدات.",
            "وتُرجمت كتب كثيرة إلى الفارسية حتى يستطيع ناس أكثر أن يقرؤوها.",
            "ووُلدت في الإمبراطورية لغة جديدة هي الأردية، ولا تزال تُنطق اليوم.",
            "وحتى لعبة لودو (Ludo) جاءت من باتشيسي (Pachisi)، وكانت محبوبة عند المغول."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "sztuka, muzyka, budynki, język i sposoby życia danego ludu (culture)",
            "sztuka projektowania i budowania (architecture)",
            "mały, dokładny obraz, który mógł zmieścić się w książce (miniature)",
            "obrazek, który oznacza jakąś myśl (symbol)",
            "Księga Akbara, historia jego panowania napisana na jego dworze (Akbarnama)",
            "język, który narodził się w imperium Mogołów (Urdu)"
          ],
          "passage": [
            "Kultura to budynki, sztuka, muzyka, język i sposoby życia danego ludu.",
            "Mogołowie są najlepiej znani ze swojej architektury.",
            "Cesarze budowali w całym imperium pałace, grobowce, twierdze i wielkie bramy.",
            "Najsłynniejszy jest Tadż Mahal, zbudowany dla Shah Jahana w Agrze.",
            "Budynki Mogołów łączą styl perski, turecki i indyjski.",
            "Obrazy Mogołów nazywamy miniaturami, bo były dość małe, żeby zmieścić się w książce.",
            "Malarze dawali cesarzom aureolę, żeby pokazać, że byli blisko Boga.",
            "Akbar kochał muzykę i trzymał na swoim dworze 36 muzyków.",
            "Tam muzyka hinduska i muzułmańska mieszała się i stawała jednym.",
            "Dworski historyk Akbara napisał Akbarnamę, czyli Księgę Akbara, w trzech tomach.",
            "Wiele książek przetłumaczono na perski, żeby więcej ludzi mogło je czytać.",
            "W imperium narodził się nowy język, urdu, którym mówi się do dziś.",
            "Nawet gra Ludo pochodzi od Pachisi, ulubionej gry Mogołów."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a arte, a música, os edifícios, a língua e os modos de vida de um povo (culture, cultura)",
            "a arte de desenhar e construir edifícios (architecture, arquitetura)",
            "uma pintura pequena e cheia de detalhes, que cabia dentro de um livro (miniature, miniatura)",
            "uma imagem que representa uma ideia (symbol, símbolo)",
            "o Livro de Akbar, uma história do seu reinado escrita na sua corte (Akbarnama)",
            "uma língua que nasceu no Império Mogol (Urdu, urdu)"
          ],
          "passage": [
            "Cultura quer dizer os edifícios, a arte, a música, a língua e os modos de vida de um povo.",
            "Os mogóis são mais conhecidos pela sua arquitetura.",
            "Os imperadores construíram palácios, túmulos, fortes e grandes portões por todo o Império.",
            "O mais famoso é o Taj Mahal, construído para Shah Jahan em Agra.",
            "Os edifícios mogóis juntam estilos persas, turcos e indianos.",
            "As pinturas mogóis chamam-se miniaturas porque eram pequenas o suficiente para caber num livro.",
            "Os pintores davam aos imperadores um halo, para mostrar que eles estavam próximos de Deus.",
            "Akbar adorava música e tinha 36 músicos na sua corte.",
            "Ali, a música hindu e a música muçulmana misturaram-se e tornaram-se uma só.",
            "O historiador da corte de Akbar escreveu o Akbarnama, o Livro de Akbar, em três volumes.",
            "Muitos livros foram traduzidos para persa, para mais pessoas os poderem ler.",
            "Uma língua nova, o urdu, nasceu no Império e ainda hoje se fala.",
            "Até o jogo do Ludo vem do Pachisi, um jogo preferido dos mogóis."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "farshaxanka, muusikada, dhismayaasha, luqadda iyo habnololeedka dad",
            "farshaxanka naqshadeynta iyo dhisidda",
            "sawir yar oo faahfaahsan oo buug ku dhex qaadan karo",
            "sawir u taagan fikrad",
            "Buugga Akbar, oo ah taariikhda xukunkiisa oo maxkamaddiisa lagu qoray",
            "luqad ka kortay Boqortooyadii Mughal"
          ],
          "passage": [
            "Dhaqan macnaheedu waa dhismayaasha, farshaxanka, muusikada, luqadda iyo habnololeedka dad.",
            "Mughals-ka waxaa ugu caansan architecture-kooda.",
            "Imbaraadoorradu waxay dhiseen daaro, xabaalo, qalcado iyo albaabbo waaweyn Boqortooyada oo dhan.",
            "Kii ugu caansan waa Taj Mahal, oo loo dhisay Shah Jahan ee Agra.",
            "Dhismayaasha Mughal waxay isku daraan qaababka Faaris, Turki iyo Hindiya.",
            "Sawirrada Mughal waxaa loo yiraahdaa miniatures maxaa yeelay way yaryaraayeen oo buug ku dhex qaadan karayeen.",
            "Sawir-sameeyayaashu imbaraadoorrada waxay siiyeen iftiin madax ku wareegsan si ay u muujiyaan inay Ilaah u dhow yihiin.",
            "Akbar wuxuu jeclaa muusikada oo 36 fannaan ayuu maxkamaddiisa ku hayay.",
            "Halkaas, muusikada Hinduu iyo Muslim way isku dhex galeen oo mid bay noqdeen.",
            "Taariikhyahankii maxkamadda Akbar wuxuu Akbarnama, oo ah Buugga Akbar, saddex mug ku qoray.",
            "Buugag badan waxaa loo turjumay Faaris si dad badan u akhriyaan.",
            "Luqad cusub, Urdu, ayaa Boqortooyada ku dhalatay, maantana weli waa lagu hadlaa.",
            "Xataa ciyaarta Ludo waxay ka timid Pachisi, oo Mughals aad u jeclaayeen."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "мистецтво, музика, будівлі, мова і спосіб життя народу (culture)",
            "мистецтво проєктувати і будувати (architecture)",
            "маленька докладна картина, яка могла вміститися в книзі (miniature)",
            "малюнок, який позначає якусь ідею (symbol)",
            "Книга Акбара, історія його правління, написана при його дворі (Akbarnama)",
            "мова, яка виросла в Могульській імперії (Urdu)"
          ],
          "passage": [
            "Культура означає будівлі, мистецтво, музику, мову і спосіб життя народу.",
            "Могули найбільше відомі своєю архітектурою.",
            "Імператори будували палаци, усипальниці, твердині й великі брами по всій імперії.",
            "Найвідоміша — Тадж-Махал (Taj Mahal), побудований для Шах-Джахана в Агрі.",
            "Могульські будівлі поєднують персійський, турецький та індійський стилі.",
            "Могульські картини називають мініатюрами, бо вони були досить малі, щоб уміститися в книзі.",
            "Художники малювали імператорам сяйво навколо голови, щоб показати, що вони близькі до Бога.",
            "Акбар любив музику і тримав при своєму дворі 36 музикантів.",
            "Там гіндуська і мусульманська музика змішувалися і ставали однією.",
            "Придворний історик Акбара написав Акбарнаму, Книгу Акбара, у трьох томах.",
            "Багато книг перекладали персійською, щоб більше людей могло їх прочитати.",
            "В імперії народилася нова мова, урду, і нею говорять досі.",
            "Навіть гра Ludo походить від Пачісі, улюбленої гри Могулів."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "کسی قوم کا فن، موسیقی، عمارتیں، زبان اور طرزِ زندگی (culture)",
            "عمارتوں کے نقشے بنانے اور تعمیر کرنے کا فن (architecture)",
            "ایک چھوٹی، باریک تفصیل والی تصویر جو کتاب کے اندر سما جائے (miniature)",
            "وہ تصویر جو کسی خیال کی نمائندگی کرے (symbol)",
            "اکبرنامہ، یعنی اکبر کی کتاب، جو اس کے دربار میں اس کے دور کی تاریخ کے طور پر لکھی گئی (Akbarnama)",
            "وہ زبان جو مغلیہ سلطنت میں پروان چڑھی (Urdu)"
          ],
          "passage": [
            "culture کا مطلب کسی قوم کی عمارتیں، فن، موسیقی، زبان اور طرزِ زندگی ہے۔",
            "مغل اپنی architecture کے لیے سب سے زیادہ جانے جاتے ہیں۔",
            "شہنشاہوں نے ساری سلطنت میں محل، مقبرے، قلعے اور بڑے دروازے بنوائے۔",
            "سب سے مشہور تاج محل ہے، جو آگرہ میں شاہ جہاں کے لیے بنایا گیا۔",
            "مغل عمارتوں میں فارسی، ترکی اور ہندوستانی اندازوں کا امتزاج ہے۔",
            "مغل تصویروں کو miniatures کہا جاتا ہے، کیونکہ وہ اتنی چھوٹی تھیں کہ کتاب میں سما جاتیں۔",
            "مصور شہنشاہوں کے گرد نور کا ہالہ بناتے تھے، تاکہ دکھائیں کہ وہ خدا کے قریب ہیں۔",
            "اکبر کو موسیقی سے محبت تھی اور اس کے دربار میں 36 موسیقار رہتے تھے۔",
            "وہاں ہندو اور مسلمان موسیقی گھل مل کر ایک ہو گئی۔",
            "اکبر کے درباری مؤرخ نے اکبرنامہ تین جلدوں میں لکھا۔",
            "بہت سی کتابیں فارسی میں ترجمہ کی گئیں تاکہ زیادہ لوگ انھیں پڑھ سکیں۔",
            "ایک نئی زبان، اردو، اسی سلطنت میں جنم لے کر آج بھی بولی جاتی ہے۔",
            "لوڈو کا کھیل بھی پچیسی (Pachisi) سے آیا ہے، جو مغلوں کا پسندیدہ کھیل تھا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What is culture, and why study it?",
          paragraphs: [
            "Culture is everything a people makes and shares: its buildings, paintings, music, books, languages, clothes and games. Your lesson looks at Mughal culture for one reason: to decide whether it shows that the Empire deserves a legacy of greatness. The three aspects you study most closely are architecture, paintings and music.",
            "Culture had a purpose for the emperors too. A monument spread across the map showed the emperor's power reaching every corner of his lands. A portrait showed how he wanted to be seen. Think back to other rulers you have studied who built castles or cathedrals: they were saying something about themselves in stone.",
            "So as you read, keep asking two questions. What did this building or painting mean to the emperor who paid for it? And what does it tell us, as historians, about how he wanted to be remembered?"
          ],
          tip: "Every piece of Mughal culture answers two questions: what was it for then, and what does it tell us now."
        },
        {
          heading: "Architecture: the Taj Mahal and the forts",
          paragraphs: [
            "Architecture is the art of designing and constructing buildings, and the Mughals are probably best known for it. The emperors built palaces, tombs for the dead, military forts and magnificent gates. Some of their buildings are among the most visited in the world.",
            "Mughal architecture is a blend of Persian, Turkish and Indian styles, which is itself a sign of an empire that drew on many cultures. The Agra Fort and the Taj Mahal, both in Agra, still stand. Shah Jahan ordered the Taj Mahal as a tomb for his wife, Mumtaz Mahal, and he was later buried there himself.",
            "Why were monuments spread out in different areas of the Empire? Because each one reminded the people who saw it who ruled them. A tomb or a fort said: the emperor's power reaches even here."
          ],
          worked: {
            q: "A historian wants to use the Taj Mahal as evidence about Shah Jahan. What can it tell her, and what can it not?",
            steps: [
              "Describe: it is a huge, costly marble tomb in a blended Persian, Turkish and Indian style.",
              "Infer: Shah Jahan had great wealth and wanted to be remembered for beauty and for love of his wife.",
              "Use own knowledge: this fits his reign being the peak of Mughal power and wealth.",
              "Limit: a building cannot tell her how ordinary people lived, or what his critics thought."
            ],
            answer: "It shows wealth, power and the image he wanted to leave; it cannot show ordinary life or opposition. Describe, infer, own knowledge, then limit."
          },
          tip: "When you describe a Mughal building, name the three styles it blends. That one fact shows you understand what made the Empire different."
        },
        {
          heading: "Miniature paintings and the halo",
          paragraphs: [
            "Mughal paintings are called miniatures, because they were painted small, often small enough to sit on the page of a book. Like the buildings, they blend styles: the bold, vivid colours Indian painters loved, the fine delicate lines Persian painters preferred, and a European influence brought to India by missionaries.",
            "Paintings in history are full of symbols. A halo around an emperor's head is a symbol that he was religious and close to God. Fine clothes, jewels and elephants were symbols of wealth and power. When you look at a portrait of an emperor, ask what the painter was told to make you see and think.",
            "This creates a problem for historians, which your lesson's plenary asks about. A portrait shows how the emperor wanted to be remembered, not necessarily how he was. Jahangir's portraits show a calm, godly ruler; your own knowledge tells you he struggled with alcohol and drugs. The painting is evidence about his image, not proof about his life."
          ],
          tip: "Describe, infer, own knowledge: that is the three-step route through any Mughal portrait."
        },
        {
          heading: "Music, books, languages and games",
          paragraphs: [
            "Many emperors enjoyed music, and Akbar was a musician himself who liked singing Hindu songs. He kept 36 experienced musicians at his court, and it was there that Hindu and Muslim music mingled and became one. The Empire is remembered for merging these two styles into the music of India today. Music, in other words, helped bring different peoples together.",
            "Akbar had his court historian write the Akbarnama, the Book of Akbar, in three volumes: one on his birth and on the reigns of Babur and Humayun, one on his own reign, and one on the Empire and the many cultures of India. It is a valuable source for historians today. Poetry thrived, and many Greek, Arabic, Turkish and Sanskrit books were translated into Persian so that more people could read them.",
            "The Empire had many languages, including Persian, Arabic and Hindavi, and a new one, Urdu, was born there and is still spoken today. Mughals played chess and Pachisi, the ancestor of Ludo, and watched jugglers, wrestling and even elephant fights. Elephants, like velvet and silk clothing, were a sign of wealth and power."
          ],
          tip: "If a question asks about long-term impact, Urdu and Indian music are your strongest examples: both are still alive today."
        }
      ],
      gate: [
        { kind: "gap", q: "Mughal paintings are called ___ because they were small enough to fit into a book.", answer: "miniatures", options: ["miniatures", "murals", "portraits"], why: "A miniature is a small, detailed painting; Mughal painters made them to be kept in books.",
          feedback: {
            "murals": "A mural is a painting on a wall, which is the opposite of small. Mughal paintings were made small enough to fit in a book, so they are called miniatures.",
            "portraits": "Many Mughal paintings are portraits of emperors, but that word describes the subject, not the size. The name that comes from their small size is miniatures."
          } },
        { kind: "mcq", q: "Mughal architecture is a blend of which three styles?", options: ["Persian, Turkish and Indian", "Greek, Roman and Indian", "Chinese, Persian and British", "Egyptian, Arabic and Turkish"], answer: 0, why: "Mughal buildings such as the Taj Mahal mix Persian, Turkish and Indian styles, reflecting an empire that drew on many cultures.",
          feedback: [
            "",
            "Greek and Roman styles belong to Europe's classical buildings, not to the Mughals. The three styles your lesson names are Persian, Turkish and Indian.",
            "There was no British influence on Mughal buildings; the British arrived in power much later. The blend is Persian, Turkish and Indian.",
            "Egypt was not part of the Mughal story. The styles that met in Mughal architecture were Persian, Turkish and Indian."
          ] },
        { kind: "mcq", q: "Which language was born in the Mughal Empire and is still spoken today?", options: ["Urdu", "Latin", "Greek", "English"], answer: 0, why: "Urdu grew up in the Mughal Empire and is spoken by millions today; it is one of the Empire's clearest long-term legacies.",
          feedback: [
            "",
            "Latin is the ancient language of Rome and was never a Mughal language. The language born in the Mughal Empire is Urdu.",
            "Greek books were translated into Persian at the Mughal court, but Greek itself is far older and comes from Europe. The new language of the Empire was Urdu.",
            "English arrived with the British, long after the Empire was founded. The language that grew up under the Mughals is Urdu."
          ] }
      ],
      modules: [
        {
          title: "Reading a portrait",
          task: {
            kind: "mcq",
            q: "A miniature shows Emperor Jahangir with a bright halo around his head. What does the halo tell you about how he wanted to be seen?",
            options: [
              "As a religious ruler who was close to God",
              "As a man who was ill and needed to be protected from the sun",
              "As a ruler who had won many battles",
              "As an emperor who disliked paintings and sat for them unwillingly"
            ],
            answer: 0,
            why: "A halo is a symbol. In Mughal miniatures it shows the person as religious and close to God, which is how the emperor wanted to be remembered.",
            feedback: [
              "",
              "A halo is not a real object like a sunshade; it is a symbol painters added on purpose. In Mughal art it stands for holiness and closeness to God.",
              "Battles are shown with weapons, armies and elephants, not with a halo. The halo is a religious symbol: it says the emperor is close to God.",
              "Jahangir loved paintings and many survive from his reign. The halo was a message he wanted sent: that he was a godly ruler."
            ]
          },
          contexts: [
            { label: "Akbar at court", q: "A miniature shows Akbar seated above his court, receiving visitors, with a glowing halo behind his head. What does the halo tell you about how he wanted to be seen?", why: "The halo is a religious symbol: Akbar wanted to be seen as a ruler close to God, blessed in his power." },
            { label: "Shah Jahan on the globe", q: "A miniature shows Shah Jahan standing on a globe of the world, with a halo of light around his head. What does the halo tell you about how he wanted to be seen?", why: "The globe shows worldly power; the halo adds religious power. He wanted to be seen as a ruler close to God." },
            { label: "An emperor at prayer", q: "A miniature shows an emperor kneeling in a garden with a soft halo around his head and a holy book beside him. What does the halo tell you about how he wanted to be seen?", why: "Together with the book, the halo shows him as devout and close to God; that is the image he chose to leave." }
          ],
          levels: {
            support: {
              steps: [
                "Describe: what is actually in the picture? A ring of light around the head.",
                "Ask: is that something a real person has? No, so it is a symbol.",
                "Infer: what idea does a halo stand for in religious art? Holiness, closeness to God.",
                "Finish: so the emperor wanted to be seen as a godly ruler."
              ],
              example: {
                q: "A medieval painting shows a king holding a sword in one hand and a set of scales in the other. What do the two objects tell you about how he wanted to be seen?",
                steps: ["Describe: a sword and a pair of scales.", "They are symbols, not everyday objects.", "A sword stands for strength; scales stand for fair judgement.", "So he wanted to be seen as both strong and just."],
                answer: "As a king who was both powerful and fair."
              }
            },
            core: { hint: "A halo is not real. Ask what idea it stands for in religious pictures." },
            stretch: { extend: "Explain why a portrait with a halo is useful evidence about an emperor's image but weak evidence about his actual behaviour. Use Jahangir as your example." }
          },
          explain: "Say, in one sentence, why a halo in a painting is a message rather than a fact.",
          why: "The halo is a symbol chosen by the emperor and his painter. It tells us he wanted to be remembered as religious and close to God; it does not tell us what he was like, which is why we check portraits against our own knowledge."
        },
        {
          title: "Match the aspect to the example",
          task: {
            kind: "match",
            q: "Match each aspect of Mughal culture to the example your lesson gives.",
            pairs: [
              ["Architecture", "The Taj Mahal and the Agra Fort, blending Persian, Turkish and Indian styles"],
              ["Miniature paintings", "Portraits of the emperors with halos, small enough to fit in a book"],
              ["Music", "Akbar's 36 court musicians, where Hindu and Muslim music became one"],
              ["Biography", "The Akbarnama, three volumes written by Akbar's court historian"],
              ["Language", "Urdu, born in the Empire and still spoken today"]
            ]
          },
          levels: {
              support: {
                steps: [
                  "Architecture means buildings, so look for the Taj Mahal.",
                  "Miniature paintings are small, so look for the words fit in a book.",
                  "Music needs musicians: find the 36.",
                  "A biography is a book about a person's life: the Akbarnama. What is left is the language, Urdu."
                ],
                example: {
                  q: "Match the aspect of Tudor culture to the example: Theatre; Music. Choices: Shakespeare's plays at the Globe; lute songs at Elizabeth's court.",
                  steps: ["Theatre means plays: Shakespeare at the Globe.", "Music: lute songs at court."],
                  answer: "Theatre: Shakespeare's plays. Music: lute songs at court."
                }
              },
              core: { hint: "Buildings, small pictures, musicians, a book about a life, a spoken tongue. Five clues." },
              stretch: { extend: "Rank these five aspects by their long-term impact on India today, and justify your top choice in two sentences." }
          },
          explain: "Say, in one sentence, which of these five examples you could still see or hear in India today.",
          why: "Architecture: the Taj Mahal and Agra Fort. Miniatures: the small portraits with halos. Music: Akbar's 36 musicians. Biography: the Akbarnama. Language: Urdu."
        },
        {
          title: "The greatest aspect of Mughal culture",
          task: {
            kind: "written",
            q: "Which aspect of Mughal culture was the greatest? Write a PEE paragraph: Point, Evidence, Explain. Name the emperor your example links to. Four to six sentences.",
            criteria: [
              "Point: I state clearly which aspect of Mughal culture I think was the greatest.",
              "Evidence: I give a specific example and name the emperor it links to.",
              "Explain: I say why this shows greatness, using the word because.",
              "I refer to at least one other aspect and say why I ranked it lower."
            ],
            model: "I think music was the greatest aspect of Mughal culture. For example, Akbar kept 36 experienced musicians at his court, and it was there that Hindu and Muslim music mingled and became one. This shows it was great because music did more than entertain: it brought together the different peoples of a huge Empire and created a style that is still heard in India today. Architecture is more famous, and the Taj Mahal shows Shah Jahan's wealth and taste, but a building belongs to one place, whereas the music of Akbar's court reached everyone and is still alive now."
          },
          levels: {
            support: {
              steps: [
                "Point: I think … was the greatest aspect of Mughal culture.",
                "Evidence: For example… (name a building, painting, book, language or the musicians, and the emperor).",
                "Explain: This shows it was great because… (what it did for the Empire, or how long it has lasted).",
                "Compare: … is also impressive, but I ranked it lower because…"
              ],
              example: {
                q: "Which aspect of Tudor culture was the greatest? Write a PEE paragraph.",
                steps: ["Point: I think theatre was the greatest aspect of Tudor culture.", "Evidence: For example, Shakespeare's plays were performed at the Globe in Elizabeth I's reign.", "Explain: This shows it was great because the plays are still performed all over the world today.", "Compare: Tudor palaces are impressive, but fewer people experience them."],
                answer: "Point: theatre. Evidence: Shakespeare at the Globe under Elizabeth I. Explain: still performed worldwide. Compare: palaces reach fewer people."
              }
            },
            core: { hint: "Point, Evidence (with an emperor's name), Explain (because), then one sentence on a rival aspect." },
            stretch: { extend: "Write the letter from your lesson's extension: tell the emperor which aspect of culture you ranked lowest, and advise him how to improve it." }
          },
          explain: "Say, in one sentence, what your criterion for greatest was: fame, beauty, unity, or lasting impact.",
          why: "A strong paragraph states a choice, gives a specific example tied to an emperor, explains with because why it shows greatness, and compares it with a rival aspect to justify the ranking."
        }
      ]
    },

    /* ───────────── 4 · greatness ───────────── */
    {
      key: "greatness", n: 4, title: "What made the Mughal Empire great?",
      lead: "What success means for an empire, the four factors that made the Mughals great, and how to build a PEEL paragraph that explains greatness.",
      covers: [3],
      pretext: {
        words: [
          { word: "success", means: "achieving what you set out to do", sentence: "Before judging success, decide what an empire is trying to achieve." },
          { word: "expansion", means: "growing bigger by taking more land", sentence: "Expansion under Akbar and Aurangzeb made the Empire huge." },
          { word: "tactics", means: "the clever plans a general uses in battle", sentence: "Babur's tactics beat an army six times the size of his own." },
          { word: "musket", means: "an early type of gun fired from the shoulder", sentence: "Mughal soldiers armed with muskets were very hard to beat." },
          { word: "Navratnas", means: "the nine jewels, Akbar's group of talented advisers", sentence: "The Navratnas helped Akbar rule a vast Empire wisely." },
          { word: "significance", means: "why something matters, then and now", sentence: "The long-term significance of the Mughals can still be seen in India today." }
        ],
        passage: [
          "To judge an empire, you first have to decide what success means.",
          "Your lesson gives four factors that made the Mughal Empire great.",
          "The first is military success and expansion.",
          "Mughal armies used clever tactics, muskets, cannons and war elephants.",
          "The Empire grew to cover most of India and ruled over 145 million people.",
          "The second factor is successful rulers and good government.",
          "Akbar built a tax system and was helped by nine advisers called the Navratnas.",
          "The third factor is religion.",
          "Akbar welcomed all religions and gave Hindus important jobs in government.",
          "This brought a long period of peace.",
          "The fourth factor is long-term impact.",
          "Mughal buildings, music and the Urdu language are all still alive in India today.",
          "Together, these factors explain why the Empire is remembered as great."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "أن تُحقّق ما عزمت عليه (success)",
            "أن تكبر بأخذ أرض أكثر (expansion)",
            "الخطط الذكية التي يستخدمها القائد في المعركة (tactics)",
            "نوع قديم من البنادق يُرمى به من الكتف (musket)",
            "الجواهر التسع، وهم مجموعة مستشاري أكبر الموهوبين (Navratnas)",
            "لماذا يهمّ الشيء، في زمنه واليوم (significance)"
          ],
          "passage": [
            "لتحكم على إمبراطورية عليك أوّلًا أن تحدّد ما معنى النجاح.",
            "ودرسك يعطي أربعة عوامل جعلت الإمبراطورية المغولية عظيمة.",
            "فالأوّل النجاح العسكري والتوسّع.",
            "فالجيوش المغولية استخدمت الخطط الذكية والبنادق والمدافع وفيلة الحرب.",
            "وكبرت الإمبراطورية حتى غطّت معظم الهند وحكمت أكثر من 145 مليون نسمة.",
            "والعامل الثاني الحكّام الناجحون والحكم الجيّد.",
            "فقد بنى أكبر نظامًا للضرائب، وساعده تسعة مستشارين يُسمّون النافراتنا (Navratnas).",
            "والعامل الثالث الدين.",
            "فقد رحّب أكبر بكلّ الأديان وأعطى الهندوس وظائف مهمّة في الحكم.",
            "وهذا جلب مدّة طويلة من السلام.",
            "والعامل الرابع الأثر طويل الأجل.",
            "فأبنية المغول وموسيقاهم واللغة الأردية كلّها لا تزال حيّة في الهند اليوم.",
            "وهذه العوامل مجتمعةً تشرح لماذا تُذكر الإمبراطورية بالعظمة."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "osiągnięcie tego, co sobie zamierzyłeś (success)",
            "powiększanie się przez zabieranie kolejnych ziem (expansion)",
            "sprytne plany, których dowódca używa w bitwie (tactics)",
            "wczesny rodzaj broni palnej, przykładanej do ramienia (musket)",
            "dziewięć klejnotów, czyli grupa zdolnych doradców Akbara (Navratnas)",
            "dlaczego coś jest ważne, wtedy i dziś (significance)"
          ],
          "passage": [
            "Żeby ocenić imperium, musisz najpierw zdecydować, co znaczy sukces.",
            "Twoja lekcja podaje cztery czynniki, które uczyniły imperium Mogołów wielkim.",
            "Pierwszy to sukcesy wojskowe i powiększanie się.",
            "Armie Mogołów używały sprytnych taktyk, muszkietów, armat i słoni bojowych.",
            "Imperium rozrosło się na większość Indii i rządziło ponad 145 milionami ludzi.",
            "Drugi czynnik to udani władcy i dobre rządy.",
            "Akbar zbudował system podatkowy, a pomagało mu dziewięciu doradców zwanych Navratnas.",
            "Trzeci czynnik to religia.",
            "Akbar przyjmował wszystkie religie i dawał hinduistom ważne stanowiska w rządzie.",
            "To przyniosło długi okres pokoju.",
            "Czwarty czynnik to długotrwały wpływ.",
            "Budynki Mogołów, ich muzyka i język urdu wciąż żyją dziś w Indiach.",
            "Razem te czynniki wyjaśniają, dlaczego imperium pamięta się jako wielkie."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "conseguir aquilo que te propuseste fazer (success, sucesso)",
            "crescer, ficando maior ao tomar mais terras (expansion, expansão)",
            "os planos inteligentes que um general usa na batalha (tactics, táticas)",
            "um tipo antigo de arma de fogo, disparada do ombro (musket, mosquete)",
            "as nove joias, o grupo de conselheiros talentosos de Akbar (Navratnas)",
            "porque é que uma coisa é importante, na época e hoje (significance, significado)"
          ],
          "passage": [
            "Para julgar um império, primeiro tens de decidir o que quer dizer sucesso.",
            "A tua aula dá quatro fatores que tornaram grande o Império Mogol.",
            "O primeiro é o sucesso militar e a expansão.",
            "Os exércitos mogóis usavam táticas inteligentes, mosquetes, canhões e elefantes de guerra.",
            "O Império cresceu até cobrir quase toda a Índia e governava mais de 145 milhões de pessoas.",
            "O segundo fator são governantes bem-sucedidos e um bom governo.",
            "Akbar criou um sistema de impostos e era ajudado por nove conselheiros chamados os Navratnas.",
            "O terceiro fator é a religião.",
            "Akbar acolheu todas as religiões e deu aos hindus cargos importantes no governo.",
            "Isto trouxe um longo período de paz.",
            "O quarto fator é o impacto de longo prazo.",
            "Os edifícios mogóis, a música e a língua urdu estão todos vivos na Índia de hoje.",
            "Juntos, estes fatores explicam porque é que o Império é recordado como grande."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "inaad gaarto waxa aad u dhaqaaqday",
            "inaad weynaato adigoo dhul badan qabsato",
            "qorshayaasha xariifnimada ee jeneraal dagaalka ku isticmaalo",
            "nooc hore oo qori ah oo garabka laga rido",
            "sagaalka jowhar, oo ahaa kooxda la-taliyayaasha karti leh ee Akbar",
            "sababta wax muhiim u yahay, markaas iyo hadda"
          ],
          "passage": [
            "Si aad boqortooyo u qiimeyso, waxaa marka hore laga rabaa inaad go'aansato waxa guushu tahay.",
            "Casharkaagu wuxuu bixinayaa afar arrin oo Boqortooyadii Mughal weyn ka dhigay.",
            "Tan koowaad waa guulaha milatari iyo ballaarinta.",
            "Ciidamada Mughal waxay isticmaaleen xeelado xariif ah, muskets, madaafiic iyo maroodiyo dagaal.",
            "Boqortooyadu waxay u kortay ilaa inta badan Hindiya oo waxay xukuntay in ka badan 145 milyan oo qof.",
            "Arrinta labaad waa taliyeyaal guulaysta iyo dowlad wanaagsan.",
            "Akbar wuxuu dhisay nidaam canshuur, waxaana caawiyay sagaal la-taliye oo la yiraahdo Navratnas.",
            "Arrinta saddexaad waa diinta.",
            "Akbar wuxuu diimo kasta soo dhoweeyay oo Hinduuyada wuxuu siiyay shaqooyin muhiim ah oo dowladda.",
            "Tan waxay keentay muddo dheer oo nabad.",
            "Arrinta afraad waa saameynta muddada dheer.",
            "Dhismayaasha, muusikada iyo luqadda Urdu ee Mughal dhammaantood weli way nool yihiin Hindiya maanta.",
            "Marka la isku geeyo, arrimahan waxay sharraxayaan sababta Boqortooyada loogu xasuusto mid weyn."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "досягнення того, що ви задумали (success)",
            "зростання до більшого через захоплення нових земель (expansion)",
            "розумні плани, які полководець використовує в битві (tactics)",
            "рання рушниця, з якої стріляли з плеча (musket)",
            "дев’ять самоцвітів, група талановитих радників Акбара (Navratnas)",
            "те, чому щось важливе — тоді й тепер (significance)"
          ],
          "passage": [
            "Щоб оцінити імперію, спершу треба вирішити, що означає успіх.",
            "Ваш урок подає чотири чинники, які зробили Могульську імперію великою.",
            "Перший — військові успіхи і розширення.",
            "Могульські війська використовували розумну тактику, мушкети, гармати і бойових слонів.",
            "Імперія розрослася так, що покривала більшу частину Індії і правила понад 145 мільйонами людей.",
            "Другий чинник — успішні правителі і добре врядування.",
            "Акбар побудував податкову систему, і йому допомагали дев’ять радників, яких називали Навратнами.",
            "Третій чинник — релігія.",
            "Акбар приймав усі релігії і давав гіндусам важливі посади в уряді.",
            "Це принесло довгий період миру.",
            "Четвертий чинник — довготривалий вплив.",
            "Могульські будівлі, музика і мова урду — усе це живе в Індії й сьогодні.",
            "Разом ці чинники пояснюють, чому імперію пам’ятають як велику."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "جو کرنے کا ارادہ تھا اسے پا لینا (success)",
            "مزید زمین لے کر بڑا ہوتے جانا (expansion)",
            "وہ ہوشیار منصوبے جو کوئی سپہ سالار جنگ میں استعمال کرتا ہے (tactics)",
            "بندوق کی ایک پرانی قسم جو کندھے سے چلائی جاتی تھی (musket)",
            "نورتن، یعنی اکبر کے نو باصلاحیت مشیروں کا گروہ (Navratnas)",
            "کوئی چیز اُس وقت اور اب کیوں اہم ہے (significance)"
          ],
          "passage": [
            "کسی سلطنت کو جانچنے کے لیے پہلے یہ طے کرنا پڑتا ہے کہ کامیابی کا مطلب کیا ہے۔",
            "آپ کا سبق چار عوامل بتاتا ہے جنھوں نے مغلیہ سلطنت کو عظیم بنایا۔",
            "پہلا فوجی کامیابی اور پھیلاؤ ہے۔",
            "مغل فوجیں ہوشیار tactics، muskets، توپیں اور جنگی ہاتھی استعمال کرتی تھیں۔",
            "سلطنت بڑھ کر ہندوستان کے بڑے حصے پر پھیل گئی اور 14 کروڑ 50 لاکھ لوگوں پر حکومت کرنے لگی۔",
            "دوسرا عامل کامیاب حاکم اور اچھی حکومت ہے۔",
            "اکبر نے ٹیکس کا نظام بنایا، اور نورتن کہلانے والے نو مشیروں نے اس کی مدد کی۔",
            "تیسرا عامل مذہب ہے۔",
            "اکبر نے سب مذہبوں کو خوش آمدید کہا اور ہندوؤں کو حکومت میں اہم عہدے دیے۔",
            "اس سے امن کا ایک لمبا دور آیا۔",
            "چوتھا عامل دیرپا اثر ہے۔",
            "مغل عمارتیں، موسیقی اور اردو زبان، سب آج بھی ہندوستان میں زندہ ہیں۔",
            "یہ عوامل مل کر بتاتے ہیں کہ اس سلطنت کو عظیم کیوں یاد کیا جاتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What do we mean by success?",
          paragraphs: [
            "Before you can say whether the Mughal Empire was great, you need to know what you are measuring. Your lesson asks: what does success mean for an empire? If you were a Mughal emperor, what would you want to achieve? Land, wealth, peace, buildings that last, a people who accept your rule?",
            "The lesson sorts the Empire's successes into four factors: expansion and military success; successful rulers and government; religious success; and long-term impact. Each factor is a different kind of greatness, and a strong answer uses more than one.",
            "Keep the four factors as headings in your mind. When you meet a new fact about the Mughals, file it under one of them. That habit will build your essay for you."
          ],
          tip: "Four headings: Military, Rulers and Government, Religion, Long-term. Every fact in this unit fits under at least one."
        },
        {
          heading: "Military success and expansion",
          paragraphs: [
            "The Mughal army won because of good strategy and tactics. When Babur was fighting for Delhi he built a barricade and forced the enemy to come to him, then defeated them. The Mughals were among the early users of gunpowder weapons in India: their muskets, a type of gun, and their cannons made the army very powerful, and their giant war elephants frightened enemies.",
            "With this army the Empire expanded until it covered most of India. Your lesson says that at its height it ruled over 145 million people, which made it one of the most powerful empires of its age. Akbar took more than half of India; Aurangzeb took most of the rest.",
            "Expansion is the most visible kind of success, but notice its cost. Later in the unit you will see that the land Aurangzeb conquered in the Deccan took 26 years and a huge price in lives and gold. Success and failure can come from the same campaign."
          ],
          worked: {
            q: "Build a PEEL paragraph answering: Why is the Mughal Empire remembered as a great Empire? Use the factor of religion.",
            steps: [
              "Point (SC1): One reason the Mughal Empire is remembered as great is its religious tolerance under Akbar.",
              "Evidence (SC2): For example, Akbar welcomed all religions and promoted Hindus to positions of power in his government.",
              "Explain (SC3): This shows the Empire was great because it brought a long period of peace and meant decisions took account of the whole population, not only its Muslim rulers.",
              "Link (SC4): Therefore the Empire is remembered as great because its rulers united many different peoples rather than dividing them."
            ],
            answer: "Point, Evidence, Explain, Link: tolerance; Hindus in government; peace and fair decisions; so the Empire united its peoples."
          },
          tip: "Your progress check has four success criteria, SC1 to SC4. They are Point, Evidence, Explain, Link in disguise."
        },
        {
          heading: "Rulers, government and religion",
          paragraphs: [
            "An empire needs more than an army. The Mughals were known for good government. Akbar set up a system for collecting tax and excellent communication across his lands, so the Empire became rich and the emperor's orders reached every province. He was helped by the Navratnas, the nine jewels: a group of nine talented advisers who helped him rule.",
            "Religion was a success too, at least under Akbar. He welcomed all faiths and promoted Hindus to positions of power in the government. This meant decisions were made with the whole population in view, and not only with the Muslim rulers at the top, and it brought a long period of peace and harmony.",
            "Aurangzeb shows the other side. He is remembered very positively by some, as a strong and devout ruler who made the Empire its largest, and very negatively by others, for his intolerance. When you use the factor of rulers, say which ruler you mean."
          ],
          tip: "Akbar is your best example for government AND religion. Name him, name the Navratnas, name the tax system."
        },
        {
          heading: "Long-term significance",
          paragraphs: [
            "The fourth factor is what the Empire left behind. Mughal monuments such as the Taj Mahal still stand and are visited by millions, which shows the Empire's lasting importance. The Urdu language, born in the Empire, is still spoken today. The music that mingled Hindu and Muslim styles at Akbar's court became the music of India.",
            "Historians also argue that the Mughals helped to create modern India: a single state uniting many peoples, languages and faiths, run by a central government with a tax system. That idea outlived the emperors themselves.",
            "When you write about long-term significance, use the word still: still standing, still spoken, still heard. It is the clearest signal that an impact has lasted."
          ],
          tip: "Long-term impact needs the word still. If you cannot say still, it is probably a short-term success."
        }
      ],
      gate: [
        { kind: "mcq", q: "According to your lesson, how many people did the Mughal Empire rule at its height?", options: ["Over 145 million", "About 12,000", "About 70,000", "Nearly 36"], answer: 0, why: "Your lesson says the Empire expanded to cover most of India and ruled over 145 million people.",
          feedback: [
            "",
            "12,000 is the size of Babur's army at Panipat, not the population of the Empire. At its height the Empire ruled over 145 million people.",
            "70,000 is the size of the Lodi army that Babur defeated in 1526. The population of the Empire at its height was over 145 million.",
            "36 is the number of musicians at Akbar's court. The Empire's population at its height was over 145 million."
          ] },
        { kind: "gap", q: "Akbar was helped to rule by nine talented advisers known as the ___.", answer: "Navratnas", options: ["Navratnas", "Sultans", "Lodis"], why: "The Navratnas, the nine jewels, were the group of advisers who helped Akbar govern the Empire.",
          feedback: {
            "Sultans": "A Sultan is a Muslim king, like Ibrahim Lodi of Delhi, not an adviser. Akbar's nine advisers were the Navratnas, the nine jewels.",
            "Lodis": "The Lodi dynasty ruled Delhi before Babur defeated them in 1526; they were the Mughals' enemies, not Akbar's helpers. His advisers were the Navratnas."
          } },
        { kind: "mcq", q: "Which of Akbar's policies brought a long period of peace to the Empire?", options: ["Welcoming all religions and promoting Hindus to positions in government", "Banning the festival of Diwali", "Making non-Muslims pay higher taxes", "Spending 26 years conquering the Deccan"], answer: 0, why: "Akbar's religious tolerance, including giving Hindus power in government, meant the whole population felt included and brought peace and harmony.",
          feedback: [
            "",
            "Banning Diwali was Aurangzeb's policy, more than a century after Akbar, and it divided people rather than uniting them. Akbar's policy was tolerance.",
            "Higher taxes on non-Muslims was Aurangzeb's policy and caused anger. Akbar did the opposite: he welcomed all religions and gave Hindus power.",
            "The 26-year Deccan campaign was Aurangzeb's war, not Akbar's, and it cost lives and gold. Akbar's peace came from religious tolerance."
          ] }
      ],
      modules: [
        {
          title: "Four factors, four examples",
          task: {
            kind: "match",
            q: "Match each factor of Mughal greatness to the example that belongs under it.",
            pairs: [
              ["Military success and expansion", "Muskets, cannons and war elephants helped the Empire cover most of India"],
              ["Successful rulers and government", "Akbar's tax system and the nine Navratnas who helped him rule"],
              ["Religious success", "Akbar welcomed all religions and promoted Hindus in government"],
              ["Long-term impact", "The Taj Mahal still stands and Urdu is still spoken today"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Weapons and land belong under military.",
                "Tax and advisers are about running the Empire: government.",
                "Welcoming all faiths is religion.",
                "The word still points to long-term impact."
              ],
              example: {
                q: "Match the factor to the example for the Roman Empire: Military; Long-term impact. Choices: legions conquered Gaul and Britain; Latin words are still in English today.",
                steps: ["Conquest is military.", "Still in English today is long-term impact."],
                answer: "Military: the legions' conquests. Long-term: Latin words still in English."
              }
            },
            core: { hint: "Weapons, tax, faith, still. One word unlocks each factor." },
            stretch: { extend: "Choose the factor you think matters most for the word great and explain why in two sentences. Then say which factor a critic of the Empire would attack first." }
          },
          explain: "Say, in one sentence, which factor you think your lesson's four examples prove most strongly.",
          why: "Military: muskets, cannons, elephants and most of India. Government: the tax system and Navratnas. Religion: Akbar's tolerance. Long-term: the Taj Mahal and Urdu, still here today."
        },
        {
          title: "PEEL in order",
          task: {
            kind: "order",
            q: "Put the four parts of a progress-check paragraph in the order you write them.",
            items: [
              "Point: One reason the Mughal Empire is remembered as great is because of…",
              "Evidence: For example… An example of this is…",
              "Explain: This shows that the Mughal Empire was great because…",
              "Link: Therefore, the Mughal Empire is remembered as a great Empire because…"
            ]
          },
          levels: {
            support: {
              steps: [
                "You cannot give an example before you have said what it is an example of, so Point comes first.",
                "Evidence follows the Point: For example…",
                "Then you explain what the evidence shows: This shows… because…",
                "Finally link back to the question: Therefore…"
              ],
              example: {
                q: "Put these parts of a science conclusion in order: therefore my prediction was correct; my results show that; this is because the particles; I predicted that.",
                steps: ["The prediction comes first.", "Then the results.", "Then the explanation.", "Then the therefore."],
                answer: "I predicted that; my results show that; this is because the particles; therefore my prediction was correct"
              }
            },
            core: { hint: "P, E, E, L: the first letters spell the order." },
            stretch: { extend: "Explain why the Link sentence is not just a repeat of the Point. What should it add?" }
          },
          explain: "Say, in one sentence, what the Explain sentence must do that the Evidence sentence does not.",
          why: "Point, Evidence, Explain, Link. Your lesson's success criteria SC1 to SC4 follow exactly this order."
        },
        {
          title: "Progress check: why great?",
          task: {
            kind: "written",
            q: "Why is the Mughal Empire remembered as a great Empire? Write one PEEL paragraph using any factor except military success. Five to seven sentences.",
            criteria: [
              "SC1 Point: I give a clear reason why the Empire is remembered as great.",
              "SC2 Evidence: I give a specific example from my own knowledge, with a name or a date.",
              "SC3 Explain: I show how my example proves the Empire was great, using because.",
              "SC4 Link: I end by linking back to the question and summarising why the Empire was great."
            ],
            model: "One reason the Mughal Empire is remembered as a great Empire is because the culture it produced has lasted. For example, Shah Jahan paid for the Taj Mahal in Agra, a tomb that blends Persian, Turkish and Indian styles, and Akbar's court produced the Akbarnama and a new style of music that mixed Hindu and Muslim traditions. This shows that the Mughal Empire was great because its wealth and its openness to many cultures produced buildings, books and music that people still admire, visit and listen to today. An empire that only conquered would be forgotten once its armies were gone; the Mughals left things that last. Therefore, the Mughal Empire is remembered as a great Empire because its culture gave it a legacy that outlived the emperors themselves."
          },
          levels: {
            support: {
              steps: [
                "Choose a factor: culture, rulers and government, religion or long-term impact.",
                "Point: One reason the Mughal Empire is remembered as a great Empire is because of…",
                "Evidence: For example… (an emperor's name and one specific thing he did or built).",
                "Explain, then Link: This shows the Empire was great because… Therefore, the Mughal Empire is remembered as great because…"
              ],
              example: {
                q: "Why is the Roman Empire remembered as a great Empire? Write one PEEL paragraph using the factor of long-term impact.",
                steps: ["Point: one reason is its long-term impact.", "Evidence: Roman roads and Latin are still used today.", "Explain: this shows greatness because its ideas outlived the Empire.", "Link: therefore it is remembered as great because it shaped Europe for centuries."],
                answer: "Point: long-term impact. Evidence: roads and Latin still used. Explain: ideas outlived the Empire. Link: shaped Europe for centuries."
              }
            },
            core: { hint: "SC1 to SC4 in order. Name an emperor in your evidence. Use because in your explanation." },
            stretch: { extend: "Add a second paragraph on a different factor, then one sentence saying which of the two factors gives the stronger case for greatness." }
          },
          explain: "Say, in one sentence, which success criterion you find hardest and what you did about it.",
          why: "A strong paragraph meets all four success criteria: a clear reason, a specific named example, an explanation that uses because, and a link back to the question. The best answers avoid simply repeating the Point in the Link."
        }
      ]
    },

    /* ───────────── 5 · decline ───────────── */
    {
      key: "decline", n: 5, title: "Why did the Empire begin to decline under Aurangzeb?",
      lead: "How Aurangzeb took the throne, the three factors behind the decline (religious intolerance, poor leadership, lack of new technology), and how far one man was to blame.",
      covers: [4],
      pretext: {
        words: [
          { word: "decline", means: "growing weaker over time", sentence: "The decline of the Empire began during Aurangzeb's reign." },
          { word: "intolerance", means: "refusing to accept other religions or ways of life", sentence: "Aurangzeb's religious intolerance divided his people." },
          { word: "peasant", means: "a poor farmer who works the land", sentence: "Every peasant had to hand half of what they earned to the Emperor." },
          { word: "Deccan", means: "the large plateau of southern India", sentence: "Aurangzeb spent 26 years fighting in the Deccan." },
          { word: "persecute", means: "to treat people badly because of their religion", sentence: "Hindus were persecuted when their festivals were banned." },
          { word: "navy", means: "a country's warships and the sailors who crew them", sentence: "The Mughals never built a strong navy." }
        ],
        passage: [
          "When Shah Jahan fell ill, his sons fought a war over the succession.",
          "Shah Jahan wanted his son Dara to rule, but Aurangzeb defeated him.",
          "Aurangzeb ruled for 50 years and made the Empire bigger than ever.",
          "But historians say his reign planted the seeds of decline.",
          "Your lesson gives three factors behind the decline.",
          "The first is religious intolerance.",
          "Aurangzeb banned Diwali, destroyed over 80 temples and taxed non-Muslims more heavily.",
          "The second is poor leadership.",
          "Peasants had to pay half their income in tax, and many revolted.",
          "Aurangzeb spent 26 years and huge sums fighting in the Deccan.",
          "The third is a lack of new technology.",
          "The Mughals bought telescopes from Europe instead of inventing their own.",
          "Their weapons grew old-fashioned, and they never built a strong navy.",
          "By 1707, when Aurangzeb died, the Empire was too big and too divided to hold together."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "أن يضعف شيئًا فشيئًا مع الزمن (decline)",
            "رفض قبول الأديان الأخرى أو طرق الحياة الأخرى (intolerance)",
            "مزارع فقير يعمل في الأرض (peasant)",
            "الهضبة الكبيرة في جنوب الهند (Deccan)",
            "أن تُسيء معاملة الناس بسبب دينهم (persecute)",
            "سفن البلد الحربية والبحّارة الذين يعملون فيها (navy)"
          ],
          "passage": [
            "لمّا مرض شاه جهان خاض أبناؤه حربًا على الخلافة.",
            "وكان شاه جهان يريد أن يحكم ابنه دارا (Dara)، ولكنّ أورنكزيب هزمه.",
            "وحكم أورنكزيب 50 سنة وجعل الإمبراطورية أكبر ممّا كانت أبدًا.",
            "ولكنّ المؤرّخين يقولون إنّ حكمه غرس بذور الانحدار.",
            "ودرسك يعطي ثلاثة عوامل خلف هذا الانحدار.",
            "فالأوّل التعصّب الديني.",
            "فقد منع أورنكزيب عيد ديوالي (Diwali)، وهدم أكثر من 80 معبدًا، وفرض على غير المسلمين ضرائب أثقل.",
            "والثاني ضعف القيادة.",
            "فكان على الفلّاحين أن يدفعوا نصف دخلهم ضريبةً، فثار كثير منهم.",
            "وأمضى أورنكزيب 26 سنة وأموالًا هائلة في القتال في الدكن.",
            "والثالث نقص التقنية الجديدة.",
            "فقد اشترى المغول المقاريب من أوروبا بدلًا من أن يخترعوها.",
            "وصارت أسلحتهم عتيقة، ولم يبنوا أسطولًا بحريًّا قويًّا أبدًا.",
            "وبحلول 1707، حين مات أورنكزيب، كانت الإمبراطورية أكبر وأكثر انقسامًا من أن تبقى متماسكة."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "słabnięcie z upływem czasu (decline)",
            "odmowa przyjęcia innych religii albo sposobów życia (intolerance)",
            "biedny rolnik, który pracuje na ziemi (peasant)",
            "wielki płaskowyż południowych Indii (Deccan)",
            "źle traktować ludzi z powodu ich religii (persecute)",
            "okręty wojenne kraju i marynarze, którzy na nich służą (navy)"
          ],
          "passage": [
            "Kiedy Shah Jahan zachorował, jego synowie prowadzili wojnę o następstwo tronu.",
            "Shah Jahan chciał, żeby rządził jego syn Dara, ale Aurangzeb go pobił.",
            "Aurangzeb rządził 50 lat i uczynił imperium większym niż kiedykolwiek.",
            "Ale historycy mówią, że jego panowanie zasiało nasiona upadku.",
            "Twoja lekcja podaje trzy czynniki stojące za tym upadkiem.",
            "Pierwszy to nietolerancja religijna.",
            "Aurangzeb zakazał Diwali, zniszczył ponad 80 świątyń i obłożył niemuzułmanów wyższymi podatkami.",
            "Drugi to słabe przywództwo.",
            "Chłopi musieli oddawać połowę dochodu w podatku i wielu się buntowało.",
            "Aurangzeb spędził 26 lat i ogromne sumy na walkach w Dekanie.",
            "Trzeci to brak nowej techniki.",
            "Mogołowie kupowali teleskopy z Europy, zamiast wymyślać własne.",
            "Ich broń stawała się przestarzała i nigdy nie zbudowali silnej flotty wojennej.",
            "Do 1707 roku, kiedy Aurangzeb umarł, imperium było za duże i za podzielone, żeby trzymać się razem."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "ficar mais fraco com o tempo (decline, declínio)",
            "recusar aceitar outras religiões ou outros modos de vida (intolerance, intolerância)",
            "um agricultor pobre que trabalha a terra (peasant, camponês)",
            "o grande planalto do sul da Índia (Deccan, Decão)",
            "tratar mal as pessoas por causa da sua religião (persecute, perseguir)",
            "os navios de guerra de um país e os marinheiros que os tripulam (navy, marinha)"
          ],
          "passage": [
            "Quando Shah Jahan ficou doente, os seus filhos travaram uma guerra pela sucessão.",
            "Shah Jahan queria que o seu filho Dara governasse, mas Aurangzeb derrotou-o.",
            "Aurangzeb governou durante 50 anos e tornou o Império maior do que nunca.",
            "Mas os historiadores dizem que o reinado dele plantou as sementes do declínio.",
            "A tua aula dá três fatores que estiveram por trás do declínio.",
            "O primeiro é a intolerância religiosa.",
            "Aurangzeb proibiu o Diwali, destruiu mais de 80 templos e lançou impostos mais pesados sobre os não muçulmanos.",
            "O segundo é a má liderança.",
            "Os camponeses tinham de pagar metade do seu rendimento/renda em impostos, e muitos revoltaram-se.",
            "Aurangzeb passou 26 anos e somas enormes a combater no Decão.",
            "O terceiro é a falta de tecnologia nova.",
            "Os mogóis compravam telescópios à Europa em vez de inventarem os seus.",
            "As armas deles ficaram antiquadas, e nunca construíram uma marinha forte.",
            "Em 1707, quando Aurangzeb morreu, o Império era demasiado grande e demasiado dividido para se manter unido."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "waqti ka waqti sii daciifid",
            "diidmada aqbalidda diimaha ama habnololeedyada kale",
            "beeraley faqiir ah oo dhulka ka shaqeeya",
            "dhulka sare oo weyn ee koonfurta Hindiya",
            "inaad dad si xun ula macaamisho diintooda dartii",
            "maraakiibta dagaalka dal iyo badmaaxiinta wada"
          ],
          "passage": [
            "Markii Shah Jahan bukooday, wiilashiisa waxay dagaal galeen cidda xigta xukunta.",
            "Shah Jahan wuxuu rabay in wiilkiisa Dara xukumo, laakiin Aurangzeb ayaa garaacay.",
            "Aurangzeb wuxuu xukumay 50 sano oo Boqortooyada wuxuu ka dhigay mid ka weyn abid.",
            "Laakiin taariikhyahannadu waxay yiraahdaan xukunkiisu wuxuu beeray abuurka sii daciifidda.",
            "Casharkaagu wuxuu bixinayaa saddex arrin oo sii daciifidda ka dambeeyay.",
            "Tan koowaad waa dulqaad-la'aanta diineed.",
            "Aurangzeb wuxuu mamnuucay Diwali, wuxuu burburiyay in ka badan 80 macbad oo canshuur culus ayuu saaray kuwa aan Muslim ahayn.",
            "Tan labaad waa hoggaamin liidata.",
            "Beeraleyda waxaa laga rabay inay nus dakhligooda canshuur ahaan bixiyaan, badidoodna way kaceen.",
            "Aurangzeb wuxuu 26 sano iyo lacag aad u badan ku bixiyay dagaal Deccan ka dhacay.",
            "Tan saddexaad waa tignoolajiyo cusub la'aan.",
            "Mughals-ku waxay telescopes Yurub ka iibsadeen halkii ay kuwooda u sameysan lahaayeen.",
            "Hubkoodu wuu duugoobay, weligoodna ciidan badeed xoog leh ma dhisin.",
            "1707-dii, markii Aurangzeb dhintay, Boqortooyadu way aad u weynayd oo aad u kala qaybsanayd oo isku xirnaan weyday."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "поступове ослаблення з часом (decline)",
            "відмова приймати інші релігії або способи життя (intolerance)",
            "бідний селянин, який обробляє землю (peasant)",
            "велике плато південної Індії (Deccan)",
            "погано ставитися до людей через їхню релігію (persecute)",
            "військові кораблі країни і моряки, які на них служать (navy)"
          ],
          "passage": [
            "Коли Шах-Джахан занедужав, його сини вели війну за те, хто буде наступним.",
            "Шах-Джахан хотів, щоб правив його син Дара, але Аурангзеб переміг його.",
            "Аурангзеб правив 50 років і зробив імперію більшою, ніж будь-коли.",
            "Але історики кажуть, що його правління посіяло насіння занепаду.",
            "Ваш урок подає три чинники занепаду.",
            "Перший — релігійна нетерпимість.",
            "Аурангзеб заборонив Дівалі, зруйнував понад 80 храмів і важче обкладав податками немусульман.",
            "Другий — погане керівництво.",
            "Селяни мусили платити половину свого доходу як податок, і багато хто повставав.",
            "Аурангзеб витратив 26 років і величезні гроші на війни в Декані.",
            "Третій — брак нових технологій.",
            "Могули купували телескопи в Європі, замість того щоб винаходити власні.",
            "Їхня зброя старіла, і вони так і не побудували сильного флоту.",
            "До 1707 року, коли Аурангзеб помер, імперія була надто велика і надто розділена, щоб триматися разом."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وقت کے ساتھ کمزور ہوتے جانا (decline)",
            "دوسرے مذہبوں یا طرزِ زندگی کو قبول کرنے سے انکار (intolerance)",
            "ایک غریب کسان جو زمین پر کام کرتا ہے (peasant)",
            "جنوبی ہندوستان کا بڑا سطح مرتفع (Deccan)",
            "لوگوں کے ساتھ ان کے مذہب کی وجہ سے برا سلوک کرنا (persecute)",
            "کسی ملک کے جنگی جہاز اور ان کے ملاح (navy)"
          ],
          "passage": [
            "جب شاہ جہاں بیمار پڑا تو اس کے بیٹے جانشینی پر جنگ لڑ پڑے۔",
            "شاہ جہاں چاہتا تھا کہ اس کا بیٹا دارا حکومت کرے، مگر اورنگزیب نے اسے ہرا دیا۔",
            "اورنگزیب نے 50 سال حکومت کی اور سلطنت کو پہلے سے بڑا کر دیا۔",
            "مگر مؤرخ کہتے ہیں کہ اسی کے دور میں زوال کے بیج بوئے گئے۔",
            "آپ کا سبق زوال کے پیچھے تین عوامل بتاتا ہے۔",
            "پہلا مذہبی تنگ نظری ہے۔",
            "اورنگزیب نے دیوالی پر پابندی لگائی، 80 سے زیادہ مندر گرائے اور غیر مسلموں پر زیادہ ٹیکس لگایا۔",
            "دوسرا کمزور قیادت ہے۔",
            "کسانوں کو اپنی آمدنی کا آدھا حصہ ٹیکس میں دینا پڑتا تھا، اور بہت سے بغاوت پر اتر آئے۔",
            "اورنگزیب نے 26 سال اور بہت بڑی رقمیں دکن میں لڑائی پر لگا دیں۔",
            "تیسرا نئی ٹیکنالوجی کی کمی ہے۔",
            "مغلوں نے اپنی دوربینیں خود بنانے کے بجائے یورپ سے خریدیں۔",
            "ان کے ہتھیار پرانے پڑ گئے، اور انھوں نے کبھی مضبوط بحریہ نہ بنائی۔",
            "1707 تک، جب اورنگزیب مرا، سلطنت اتنی بڑی اور اتنی بٹی ہوئی تھی کہ جُڑی نہ رہ سکی۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Aurangzeb takes the throne",
          paragraphs: [
            "Shah Jahan wanted his eldest son Dara to succeed him. But when the Emperor fell ill in 1657, his sons fought a war of succession, and it was Aurangzeb who won. Dara was defeated and later put to death. Your lesson dates Aurangzeb's reign from 1657 to 1707: fifty years. He is known as the last great Mughal emperor.",
            "His reign had real successes. He expanded the Empire to the largest it had ever been, so that by 1707 it covered almost all of India. He was a skilled general, a devout and disciplined man who dressed simply and spent nothing on luxuries.",
            "Yet many historians see the same fifty years as sowing the seeds of failure. After Aurangzeb's death in 1707 the Empire broke up quickly, and by 1757 the British East India Company had taken financial and political control in India. The question your lesson asks is: was Aurangzeb responsible for the decline?"
          ],
          tip: "Hold two ideas at once: Aurangzeb made the Empire its biggest AND began its decline. Both are true, and a good essay says so."
        },
        {
          heading: "Factor one: religious intolerance",
          paragraphs: [
            "Akbar had welcomed all religions. Aurangzeb abandoned that policy. He tried to make Islam the religion of the whole Empire, and other religions, especially Hinduism, were persecuted. The Hindu festival of Diwali was banned.",
            "Aurangzeb favoured Muslims in the laws he passed. Under those laws Muslims were given tax breaks, or paid nothing at all, while non-Muslims still had to pay. His policy of temple destruction saw over 80 non-Muslim temples destroyed, and large mosques built in their place.",
            "The effect was to divide Mughal society along religious lines. Akbar had used tolerance to bring people together; Aurangzeb's intolerance pushed them apart, and the divisions helped the Empire split after his death."
          ],
          tip: "For intolerance, you have three concrete examples: Diwali banned, over 80 temples destroyed, non-Muslims taxed. Use the numbers and names."
        },
        {
          heading: "Factor two: poor leadership",
          paragraphs: [
            "Under Aurangzeb, the peasants of India had to pay 50 per cent of their income, half of everything they earned, to the Emperor. Peasants across the countryside grew bitterly unhappy with the government that taxed them, and many of them revolted.",
            "Aurangzeb focused on capturing new lands instead of developing the land he already had. It cost the Empire a great deal to conquer and then run new territory that brought no reward. The clearest example is the Deccan, in southern India, where he spent 26 years fighting. The campaign cost over 100,000 Mughal lives and huge amounts of gold.",
            "Culture suffered too. Aurangzeb banned music at his court, where Akbar had used music to bring the Empire's many cultures together. Few paintings survive from his reign. The things that had made the Mughal court great were allowed to fade."
          ],
          worked: {
            q: "Which of the three factors does this reason belong to: Aurangzeb spent 26 years and huge amounts of gold trying to conquer the Deccan?",
            steps: [
              "Ask: is this about religion? No, there is no festival, temple or faith involved.",
              "Ask: is this about weapons, inventions or a navy? No.",
              "Ask: is this a decision by the ruler about how to spend the Empire's money and effort? Yes.",
              "So it belongs under poor leadership."
            ],
            answer: "Poor leadership: the Deccan war was a ruler's choice to spend lives and gold on conquest rather than on developing the Empire."
          }
        },
        {
          heading: "Factor three: falling behind in technology",
          paragraphs: [
            "The Mughals did not develop their own technology. Instead they spent a lot of money buying things like telescopes from Europe. Their weapons became old-fashioned because they did not invest in new designs, so in time their army was no match for its European rivals.",
            "Several emperors, not only Aurangzeb, showed little interest in building a strong navy. This was a serious disadvantage, because European countries, especially Britain, were building huge navies. Without ships of its own the Empire missed out on trading with the wider world.",
            "Notice that this factor is not only about Aurangzeb. The failure to build a navy stretched over many reigns. That matters when you decide how far he alone was responsible for the decline."
          ],
          tip: "Technology is the factor that helps you argue against blaming Aurangzeb alone: the navy problem belonged to many emperors."
        }
      ],
      gate: [
        { kind: "gap", q: "Under Aurangzeb, peasants had to pay ___ of their income to the Emperor.", answer: "half", options: ["half", "a tenth", "a quarter"], why: "Your lesson says the peasants paid 50 per cent, half of their income, in tax, which made them very unhappy with their government.",
          feedback: {
            "a tenth": "A tenth would have been a light tax. The peasants were angry because the demand was far heavier: 50 per cent, half of everything they earned.",
            "a quarter": "A quarter is still too low. Your lesson gives the figure as 50 per cent of their income, which is half, and it drove many peasants to revolt."
          } },
        { kind: "mcq", q: "Which religious festival did Aurangzeb ban?", options: ["Diwali", "Eid", "Christmas", "Vaisakhi"], answer: 0, why: "Aurangzeb banned the Hindu festival of Diwali as part of his policy of enforcing Islam across the Empire.",
          feedback: [
            "",
            "Eid is a Muslim festival, and Aurangzeb favoured Muslims in his laws. The festival he banned was the Hindu festival of Diwali.",
            "Christmas is a Christian festival and is not part of this story. The festival Aurangzeb banned was Diwali, celebrated by Hindus.",
            "Vaisakhi is a Sikh and Punjabi festival, and your lesson does not mention it. The festival Aurangzeb banned was Diwali."
          ] },
        { kind: "mcq", q: "Which region of India did Aurangzeb spend 26 years trying to conquer?", options: ["The Deccan", "Kabul", "Delhi", "Fergana"], answer: 0, why: "Aurangzeb's 26-year campaign in the Deccan, in southern India, cost over 100,000 lives and huge amounts of gold.",
          feedback: [
            "",
            "Kabul is in Afghanistan and had been Babur's base since 1504; it was already Mughal. Aurangzeb's long war was in the Deccan, in southern India.",
            "Delhi had been Mughal since Babur took it in 1526. The region Aurangzeb fought over for 26 years was the Deccan, far to the south.",
            "Fergana, in Uzbekistan, is where Babur was born; it has nothing to do with Aurangzeb's wars. He spent 26 years fighting in the Deccan."
          ] }
      ],
      modules: [
        {
          title: "Sort the reasons",
          task: {
            kind: "match",
            q: "Match each reason for decline to the factor it belongs under.",
            pairs: [
              ["Over 80 temples were destroyed and mosques built in their place", "Religious intolerance"],
              ["Peasants had to pay 50 per cent of their income and many revolted", "Poor leadership"],
              ["Weapons grew old-fashioned and no strong navy was built", "Lack of technological development"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Does the reason mention a faith, a festival or a temple? Then it is religious intolerance.",
                "Does it mention weapons, inventions, telescopes or ships? Then it is technology.",
                "Is it a decision about money, war or how to treat the people? Then it is poor leadership.",
                "Check each pair against those three questions."
              ],
              example: {
                q: "Sort these reasons for a football club's relegation into three factors (manager, money, injuries): the star striker broke his leg; the manager picked the wrong team; the club could not afford new players.",
                steps: ["A broken leg is injuries.", "Picking the team is the manager.", "Affording players is money."],
                answer: "Striker's leg: injuries. Wrong team: manager. No money for players: money."
              }
            },
            core: { hint: "Faith, weapons, or a ruler's choice: three questions, three factors." },
            stretch: { extend: "Some reasons could fit two factors. Explain why banning music at court could be filed under poor leadership as well as religious intolerance." }
          },
          explain: "Say, in one sentence, how you tell a poor leadership reason from a technology reason.",
          why: "Temples and mosques are about religion. Taxing peasants to the point of revolt is a leader's choice. Old weapons and no navy are technology."
        },
        {
          title: "Which factor is this?",
          task: {
            kind: "mcq",
            q: "Aurangzeb banned the Hindu festival of Diwali. Which of the three factors of decline does this reason belong to?",
            options: ["Religious intolerance", "Poor leadership", "Lack of technological development", "None of the three: it was a success"],
            answer: 0,
            why: "Banning a religious festival is persecution of a faith, so it belongs under religious intolerance, the policy that divided Mughal society.",
            feedback: [
              "",
              "It was certainly a poor decision, but your lesson files reasons by what they are about, and this one is about a religion's festival. That makes it religious intolerance.",
              "Technology is about weapons, inventions and ships. Banning a festival has nothing to do with those; it is religious intolerance.",
              "Banning Diwali divided society along religious lines and helped the Empire split, so it is a reason for decline, not a success. It belongs under religious intolerance."
            ]
          },
          contexts: [
            { label: "Temples destroyed", q: "Aurangzeb's policy of temple destruction saw over 80 non-Muslim temples destroyed and mosques built in their place. Which of the three factors of decline does this reason belong to?", why: "Destroying places of worship is persecution of a faith: religious intolerance." },
            { label: "Unequal taxes", q: "Under Aurangzeb, Muslims were given tax breaks or paid no tax at all, while non-Muslims had to pay. Which of the three factors of decline does this reason belong to?", why: "Taxing people differently because of their religion is religious intolerance, even though it is also a tax." },
            { label: "Akbar's policy abandoned", q: "Aurangzeb abandoned Akbar's policy of welcoming all religions and tried to make Islam the religion of the whole Empire. Which of the three factors of decline does this reason belong to?", why: "Refusing to accept other faiths is the definition of religious intolerance." }
          ],
          levels: {
            support: {
              steps: [
                "Read the reason and underline the key noun: festival, temple, tax, weapon, navy, war.",
                "Festival, temple, faith: religious intolerance.",
                "Weapon, telescope, navy: technology.",
                "War, tax on peasants, wasted money: poor leadership. Which word did you underline?"
              ],
              example: {
                q: "The Mughals bought telescopes from Europe instead of developing their own. Which factor is this?",
                steps: ["The key noun is telescopes: an invention.", "Inventions belong to technology.", "So: lack of technological development."],
                answer: "Lack of technological development."
              }
            },
            core: { hint: "Underline the key noun. A festival is about faith." },
            stretch: { extend: "Explain how religious intolerance and poor leadership are linked: how did one make the other worse?" }
          },
          explain: "Say, in one sentence, the key word in the reason that told you which factor it was.",
          why: "Diwali is a Hindu festival, so banning it is religious intolerance. The same test works for the temples and the unequal taxes: each is about how people of a faith were treated."
        },
        {
          title: "Was it all Aurangzeb's fault?",
          task: {
            kind: "written",
            q: "It is solely Aurangzeb's responsibility for the decline of the Mughal Empire. How far do you agree? Write one paragraph agreeing, one disagreeing, and a one-sentence judgement.",
            criteria: [
              "Agree: I give one reason that WAS Aurangzeb's own choice, with a specific example such as Diwali, the temples, the 50 per cent tax or the Deccan.",
              "Disagree: I give one reason that was NOT only his, such as the failure over many reigns to build a navy or develop new weapons.",
              "I explain each reason using because.",
              "I end with a clear judgement that uses the words how far, mostly or partly."
            ],
            model: "I agree to a large extent that Aurangzeb was responsible for the decline. His religious intolerance was his own choice: he banned Diwali, destroyed over 80 temples and made non-Muslims pay taxes that Muslims did not. This divided society along religious lines because Hindus who had been welcomed under Akbar now had reasons to resent the Empire. He also chose to spend 26 years fighting in the Deccan, which cost over 100,000 lives and huge amounts of gold. However, not everything was his fault. The Mughals fell behind in technology over many reigns, buying telescopes from Europe rather than inventing their own, and several emperors failed to build a navy while Britain was building a huge one. Overall, Aurangzeb was mostly responsible, because his decisions turned long-term weaknesses into a crisis, but the technological decline had begun before him."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1: I agree because Aurangzeb chose to… (pick intolerance or the Deccan; give the example and a number).",
                "Explain: This led to decline because…",
                "Paragraph 2: However, not everything was his fault, because… (the navy, the weapons: many emperors).",
                "Judgement: Overall, Aurangzeb was mostly / partly responsible because…"
              ],
              example: {
                q: "It was solely King John's fault that the barons rebelled in 1215. How far do you agree?",
                steps: ["Agree: John raised taxes and lost wars in France, which angered the barons.", "Disagree: his father and brother had also taxed heavily to pay for wars.", "Judgement: mostly John's fault, because his losses made old grievances unbearable."],
                answer: "Agree: John's taxes and defeats. Disagree: earlier kings taxed heavily too. Judgement: mostly, because his failures turned old anger into rebellion."
              }
            },
            core: { hint: "One paragraph for, one against, then how far. The navy is your best against point." },
            stretch: { extend: "Add a third point about the size of the Empire itself: could any emperor have held together lands covering almost all of India? Does that reduce Aurangzeb's responsibility?" }
          },
          explain: "Say, in one sentence, which reason for decline you think was least Aurangzeb's fault, and why.",
          why: "A balanced answer separates what Aurangzeb chose (intolerance, the Deccan, the peasant tax) from weaknesses that were older and wider (technology, the navy), then gives a judgement about how far he was responsible."
        }
      ]
    },

    /* ───────────── 6 · collapse and legacy ───────────── */
    {
      key: "collapse-legacy", n: 6, title: "Collapse after 1707, and the verdict: a legacy of greatness?",
      lead: "What happened to the Empire after Aurangzeb died, how to review the whole topic under three headings, how to use an interpretation and evidence, and how to write the assessment essay.",
      covers: [5, 6],
      pretext: {
        words: [
          { word: "collapse", means: "falling apart completely", sentence: "The collapse of the Empire followed Aurangzeb's death in 1707." },
          { word: "East India Company", means: "the British trading company that took control of India", sentence: "By 1757 the East India Company held financial and political control." },
          { word: "interpretation", means: "a historian's view of what happened and why", sentence: "An interpretation is one historian's view, and other historians may disagree." },
          { word: "evidence", means: "specific facts that prove a statement", sentence: "Dates, names and numbers are the evidence that proves a statement true." },
          { word: "judgement", means: "your overall decision after weighing both sides", sentence: "A conclusion must end with a clear judgement." }
        ],
        passage: [
          "Aurangzeb died in 1707.",
          "After his death, the Empire's weaknesses showed quickly.",
          "It was too large to control and divided along religious lines.",
          "Enemies surrounded it, and its army and weapons were old-fashioned.",
          "By 1757 the British East India Company had taken financial and political control in India.",
          "The Mughal Empire was finally replaced by the British in 1858.",
          "To judge the Empire, your lesson sorts what you know into three areas.",
          "They are rulers and leadership, the military, and culture.",
          "Each area has successes and failures.",
          "In your assessment you will read an interpretation written by a historian.",
          "You will prove statements true with specific evidence.",
          "Then you will write an essay with one paragraph for, one against, and a conclusion.",
          "Your conclusion must weigh the evidence and give a clear judgement."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "أن ينهار الشيء انهيارًا تامًّا (collapse)",
            "الشركة التجارية البريطانية التي سيطرت على الهند (East India Company)",
            "رأي مؤرّخ في ما حدث ولماذا حدث (interpretation)",
            "وقائع محدّدة تُثبت كلامًا (evidence)",
            "حكمك العامّ بعد أن تزن الوجهين (judgement)"
          ],
          "passage": [
            "مات أورنكزيب في 1707.",
            "وبعد موته ظهرت نقاط ضعف الإمبراطورية بسرعة.",
            "فقد كانت أكبر من أن تُسيطَر عليها، ومنقسمة على خطوط دينية.",
            "وأحاط بها الأعداء، وكان جيشها وسلاحها عتيقين.",
            "وبحلول 1757 كانت شركة الهند الشرقية البريطانية قد سيطرت على المال والسياسة في الهند.",
            "وحلّ البريطانيون أخيرًا في محلّ الإمبراطورية المغولية في 1858.",
            "ولتحكم على الإمبراطورية يصنّف درسك ما تعرفه في ثلاثة مجالات.",
            "وهي الحكّام والقيادة، والجيش، والثقافة.",
            "ولكلّ مجال نجاحات وإخفاقات.",
            "وفي تقييمك ستقرأ تفسيرًا كتبه مؤرّخ.",
            "وستُثبت صحّة كلام بأدلّة محدّدة.",
            "ثم ستكتب مقالًا فيه فقرة مؤيّدة وفقرة معارضة وخاتمة.",
            "وخاتمتك يجب أن تزن الأدلّة وأن تعطي حكمًا واضحًا."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "całkowity rozpad (collapse)",
            "brytyjska firma handlowa, która przejęła kontrolę nad Indiami (East India Company)",
            "pogląd historyka na to, co się stało i dlaczego (interpretation)",
            "konkretne fakty, które dowodzą jakiegoś twierdzenia (evidence)",
            "twoja ogólna decyzja po rozważeniu obu stron (judgement)"
          ],
          "passage": [
            "Aurangzeb umarł w 1707 roku.",
            "Po jego śmierci słabości imperium ujawniły się szybko.",
            "Było za duże, żeby je kontrolować, i podzielone według religii.",
            "Otaczali je wrogowie, a jego armia i broń były przestarzałe.",
            "Do 1757 roku brytyjska East India Company przejęła w Indiach kontrolę nad pieniędzmi i polityką.",
            "Imperium Mogołów zostało w końcu zastąpione przez Brytyjczyków w 1858 roku.",
            "Żeby ocenić imperium, twoja lekcja porządkuje to, co wiesz, w trzy obszary.",
            "To władcy i przywództwo, wojsko oraz kultura.",
            "Każdy obszar ma swoje sukcesy i porażki.",
            "W swoim zadaniu przeczytasz interpretację napisaną przez historyka.",
            "Udowodnisz twierdzenia konkretnymi dowodami.",
            "Potem napiszesz esej z jednym akapitem za, jednym przeciw i wnioskiem.",
            "Twój wniosek musi rozważyć dowody i dać jasny sąd."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "desfazer-se por completo (collapse, colapso)",
            "a companhia comercial britânica que tomou o controlo da Índia (East India Company, Companhia das Índias Orientais)",
            "a visão de um historiador sobre o que aconteceu e porquê (interpretation, interpretação)",
            "factos/fatos concretos que provam uma afirmação (evidence, provas)",
            "a tua decisão final depois de pesar os dois lados (judgement, juízo)"
          ],
          "passage": [
            "Aurangzeb morreu em 1707.",
            "Depois da morte dele, as fraquezas do Império apareceram depressa.",
            "Era demasiado grande para se controlar e estava dividido por linhas religiosas.",
            "Havia inimigos à sua volta, e o seu exército e as suas armas estavam antiquados.",
            "Em 1757 a British East India Company já tinha tomado o controlo financeiro e político na Índia.",
            "O Império Mogol foi finalmente substituído pelos britânicos em 1858.",
            "Para julgar o Império, a tua aula separa o que sabes em três áreas.",
            "São os governantes e a liderança, as forças militares e a cultura.",
            "Cada área tem sucessos e falhas.",
            "Na tua avaliação vais ler uma interpretação escrita por um historiador.",
            "Vais provar que afirmações são verdadeiras com provas concretas.",
            "Depois vais escrever um ensaio com um parágrafo a favor, um contra e uma conclusão.",
            "A tua conclusão tem de pesar as provas e dar um juízo claro."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "in gebi ahaanba la kala daato",
            "shirkaddii ganacsi ee Ingiriiska oo la wareegtay xukunka Hindiya",
            "aragtida taariikhyahan ee waxa dhacay iyo sababta",
            "xaqiiqooyin gaar ah oo caddeeya hadal",
            "go'aankaaga guud kadib markaad labada dhinac miisaantay"
          ],
          "passage": [
            "Aurangzeb wuxuu dhintay 1707-dii.",
            "Dhimashadiisa kadib, tabar-yaradii Boqortooyada si dhaqso ah ayay muuqatay.",
            "Way aad u weynayd oo lama xukumi karin, waxayna u kala qaybsanayd diimo.",
            "Cadow ayaa hareereeyay, ciidankeeda iyo hubkeeduna way duugoobeen.",
            "1757-dii Shirkaddii East India Company ee Ingiriiska waxay Hindiya ka qabsatay xukunka maaliyadeed iyo siyaasadeed.",
            "Boqortooyadii Mughal ugu dambeyntii waxaa beddelay Ingiriiska 1858-kii.",
            "Si aad Boqortooyada u qiimeyso, casharkaagu waxa aad taqaan wuxuu u kala saarayaa saddex qaybood.",
            "Waa taliyeyaasha iyo hoggaaminta, milatariga, iyo dhaqanka.",
            "Qayb kastaa waxay leedahay guulo iyo guuldarrooyin.",
            "Qiimeyntaada waxaad akhrinaysaa interpretation taariikhyahan qoray.",
            "Hadallo waxaad ku caddaynaysaa caddayn gaar ah.",
            "Kadibna waxaad qoraysaa curis leh hal cutub taageero, mid ka soo horjeedda, iyo gunaanad.",
            "Gunaanadkaagu waa inuu caddaynta miisaamo oo go'aan cad bixiyo."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "повний розпад (collapse)",
            "британська торгова компанія, яка взяла контроль над Індією (East India Company)",
            "погляд історика на те, що сталося і чому (interpretation)",
            "конкретні факти, які доводять твердження (evidence)",
            "ваше загальне рішення після того, як ви зважили обидві сторони (judgement)"
          ],
          "passage": [
            "Аурангзеб помер у 1707 році.",
            "Після його смерті слабкості імперії швидко виявилися.",
            "Вона була надто велика, щоб її контролювати, і розділена за релігійними лініями.",
            "Її оточували вороги, а її військо і зброя були старомодні.",
            "До 1757 року британська Східноіндійська компанія взяла фінансовий і політичний контроль в Індії.",
            "Могульську імперію остаточно замінили британці у 1858 році.",
            "Щоб оцінити імперію, ваш урок розкладає те, що ви знаєте, на три ділянки.",
            "Це правителі і керівництво, військо і культура.",
            "Кожна ділянка має успіхи і невдачі.",
            "У своїй контрольній роботі ви прочитаєте інтерпретацію, написану істориком.",
            "Ви доведете твердження конкретними свідченнями.",
            "Потім ви напишете твір з одним абзацом за, одним проти і висновком.",
            "Ваш висновок мусить зважити свідчення і дати чітке судження."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "بالکل بکھر جانا (collapse)",
            "برطانوی تجارتی کمپنی جس نے ہندوستان پر قابو پا لیا (East India Company)",
            "کسی مؤرخ کی یہ رائے کہ کیا ہوا اور کیوں ہوا (interpretation)",
            "وہ خاص حقائق جو کسی بات کو ثابت کریں (evidence)",
            "دونوں طرف کی باتیں تول کر کیا ہوا آپ کا مجموعی فیصلہ (judgement)"
          ],
          "passage": [
            "اورنگزیب 1707 میں مر گیا۔",
            "اس کی موت کے بعد سلطنت کی کمزوریاں جلد ہی سامنے آ گئیں۔",
            "یہ قابو میں رکھنے کے لیے بہت بڑی تھی اور مذہبی بنیادوں پر بٹی ہوئی تھی۔",
            "دشمنوں نے اسے چاروں طرف سے گھیر رکھا تھا، اور اس کی فوج اور ہتھیار پرانے پڑ گئے تھے۔",
            "1757 تک برطانوی East India Company نے ہندوستان میں مالی اور سیاسی قابو سنبھال لیا تھا۔",
            "مغلیہ سلطنت کی جگہ آخرکار 1858 میں انگریزوں نے لے لی۔",
            "سلطنت کو جانچنے کے لیے آپ کا سبق آپ کی معلومات کو تین حصوں میں بانٹتا ہے۔",
            "یہ ہیں: حاکم اور قیادت، فوج، اور culture۔",
            "ہر حصے میں کامیابیاں بھی ہیں اور ناکامیاں بھی۔",
            "اپنے امتحان میں آپ کسی مؤرخ کی لکھی ہوئی ایک interpretation پڑھیں گے۔",
            "آپ خاص شہادت سے بیانات کو سچ ثابت کریں گے۔",
            "پھر آپ ایک مضمون لکھیں گے: ایک پیراگراف حق میں، ایک خلاف، اور ایک نتیجہ۔",
            "آپ کے نتیجے میں شہادت کو تولنا اور صاف فیصلہ دینا ضروری ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "After Aurangzeb: from decline to collapse",
          paragraphs: [
            "Aurangzeb died in 1707. He left behind the largest Empire the Mughals had ever ruled, the largest army in Asia and heroic victories. But he also left a tired army, angry Hindus, a badly run and corrupt government, a bankrupt treasury, many enemies around the borders and an heir who was not ready to rule. Your homework asks you to sort that legacy into positives and negatives.",
            "The weaknesses that had been building for fifty years now showed quickly. The Empire was too large to control from the centre, and Aurangzeb's religious policies had divided its people. Fifty years after his death, by 1757, the British East India Company had taken financial and political control in India. That story is your next topic. The Mughal Empire was finally replaced by the British in 1858.",
            "Why was it relatively easy for Britain to take over after 1707? Put the factors together: a divided society, a government that had wasted its wealth, old-fashioned weapons and no navy to challenge British ships. The decline under Aurangzeb explains the collapse that followed."
          ],
          worked: {
            q: "How many years passed between Aurangzeb's death (1707) and the East India Company taking control (1757)?",
            steps: [
              "Later date first: 1757.",
              "Subtract: 1757 − 1707.",
              "The 17 hundreds cancel: 57 − 7 = 50.",
              "Check: half a century, which is about the same as the length of Aurangzeb's reign."
            ],
            answer: "50 years",
            checks: [{ expr: "1757 - 1707", value: 50, tol: 0 }]
          }
        },
        {
          heading: "Reviewing the topic: three areas, successes and failures",
          paragraphs: [
            "To decide whether the Empire achieved a legacy of greatness, your lesson organises everything you know under three headings: Mughal rulers and leadership, the Mughal military, and Mughal culture. Under each heading you list successes and failures, then rank the three areas from most to least successful.",
            "Rulers and leadership: good government with the Navratnas and Akbar's promotion of Hindus is a success; Aurangzeb's peasant tax and wasted conquests are failures. Military: muskets, cannons and elephants, and an Empire covering almost all of India, are successes; the Deccan war, old-fashioned weapons and no navy are failures.",
            "Culture: architecture still standing, the Urdu language and music that united peoples are successes; Aurangzeb cancelling festivals, banning music and demolishing temples are failures. Your lesson rates each area from 5, a great Empire, down to 1, a complete failure. Decide your rating for each area and be ready to justify it."
          ],
          tip: "Three headings, two columns each. If one column is empty, you have not finished reviewing."
        },
        {
          heading: "Using an interpretation and giving evidence",
          paragraphs: [
            "Your assessment has four sections. Section A is multiple choice. Section B gives you an interpretation: a historian's view of Mughal India. An interpretation is one historian's considered opinion, and other historians may see it differently. To use it well, say what the historian is arguing, then test it against your own knowledge: what evidence supports the view, and what might challenge it?",
            "Section C asks you to prove statements with specific evidence. Specific means names, dates and numbers, not general phrases. For the statement that Humayun was a weak leader, the evidence is that he was forced into exile in 1540 and took fifteen years to return. For the statement that the Mughals did not invest in new technologies, the evidence is that they bought telescopes from Europe and let their weapons grow old-fashioned.",
            "The habit to practise is this: every time you make a claim, ask yourself which fact proves it. If you cannot name one, the claim is not yet evidence."
          ],
          tip: "Specific evidence has a name, a date or a number in it. Check every sentence of your Section C answers for one of the three."
        },
        {
          heading: "Writing the essay: both sides, then a judgement",
          paragraphs: [
            "Section D is the essay: did the Mughal Empire achieve a legacy of greatness? Write two paragraphs showing both sides of the argument, one agreeing with the statement and one disagreeing. Each paragraph follows the same success criteria you used in your progress check: a reason that uses the wording of the question, evidence from your own knowledge, an explanation of how the evidence shows greatness or its absence, and a link back to the question.",
            "Your lesson gives you the opening words: I agree that the Mughal Empire achieved a legacy of greatness because… and I disagree that the Mughal Empire achieved a legacy of greatness because… Use them. They keep you on the question.",
            "The essay must end in a conclusion that weighs the evidence and gives an overall judgement. Weighing means saying which side is stronger and why, not just repeating both. A conclusion that says how far, mostly or partly is already doing this."
          ],
          tip: "You have 45 minutes for the whole assessment. Plan the essay in three lines (for, against, judgement) before you write a word."
        }
      ],
      gate: [
        { kind: "numeric", q: "In which year did Aurangzeb die, the year your lesson gives as the start of the Empire's decline?", answer: 1707, tolerance: 0, units: "", why: "Aurangzeb died in 1707 after a fifty-year reign. The unit's period of study runs from 1526 to 1707.", check: "1707",
          misconceptions: [
            { answer: 1757, says: "1757 is when the British East India Company took financial and political control in India, fifty years after Aurangzeb's death. He died in 1707.", check: "1707 + 50" },
            { answer: 1657, says: "1657 is the year your lesson gives for the start of Aurangzeb's reign, when the war of succession began. He died fifty years later, in 1707.", check: "1707 - 50" },
            { answer: 1858, says: "1858 is when the Mughal Empire was finally replaced by the British. Aurangzeb's death, and the start of the decline, came much earlier, in 1707.", check: "1858" }
          ] },
        { kind: "mcq", q: "By 1757, who had taken financial and political control in India?", options: ["The British East India Company", "The Lodi dynasty", "The Navratnas", "The Portuguese navy"], answer: 0, why: "Your lesson says that by 1757 the British East India Company controlled both the money and the government of India, fifty years after Aurangzeb's death.",
          feedback: [
            "",
            "The Lodi dynasty was defeated by Babur in 1526 and never returned. The power that took control by 1757 was the British East India Company.",
            "The Navratnas were Akbar's nine advisers in the 1500s, not a power that took over India. By 1757 the British East India Company had taken control.",
            "The Portuguese were early European traders in India, but your lesson names Britain as the rising naval power. It was the British East India Company that took control by 1757."
          ] },
        { kind: "gap", q: "An ___ is a historian's view of what happened in the past and why.", answer: "interpretation", options: ["interpretation", "artefact", "inference"], why: "Section B of your assessment gives you an interpretation: one historian's considered view, which you test against your own knowledge.",
          feedback: {
            "artefact": "An artefact is an object from the past, such as a Mughal miniature or a coin. A historian's written view of the past is an interpretation.",
            "inference": "An inference is something you work out from a source, like reading a halo as a sign of holiness. A historian's overall view of the past is an interpretation."
          } }
      ],
      modules: [
        {
          title: "From death to takeover",
          task: {
            kind: "numeric",
            q: "Aurangzeb died in 1707. By 1757 the East India Company had taken control in India. How many years apart are these two events?",
            answer: 50, tolerance: 0, units: "years",
            why: "1757 − 1707 = 50. Within half a century of Aurangzeb's death, the Empire had lost control of India.",
            check: "1757 - 1707",
            misconceptions: [
              { answer: 49, says: "You may have slipped by one when subtracting. 1757 − 1707 = 50 exactly: the 17 hundreds cancel and 57 − 7 = 50.", check: "1757 - 1707 - 1" },
              { answer: 151, says: "That is 1858 − 1707, the gap to the year the Empire was finally replaced by the British. The question asks about 1757, when the East India Company took control: 1757 − 1707 = 50.", check: "1858 - 1707" },
              { answer: 100, says: "That is 1757 − 1657, which starts from the beginning of Aurangzeb's reign rather than his death. From his death in 1707 to 1757 is 50 years.", check: "1757 - 1657" }
            ]
          },
          contexts: [
            { label: "A Delhi merchant", q: "A merchant was born in Delhi in 1707, the year Aurangzeb died. How old was he, in years, when the East India Company took control in 1757?", check: "1757 - 1707" },
            { label: "A Mughal coin", q: "A coin was minted in 1707, the last year of Aurangzeb's reign, and was still being used in 1757 when the East India Company took control. For how many years had it been in use?", check: "1757 - 1707" },
            { label: "A village temple", q: "A village rebuilt its temple in 1707, the year Aurangzeb died. How many years later, in 1757, did the East India Company take control in India?", check: "1757 - 1707" }
          ],
          levels: {
            support: {
              steps: [
                "Write the later date first: 1757.",
                "Subtract the earlier date: 1757 − 1707.",
                "The hundreds are the same, so just do 57 − 7 = 50.",
                "Check: half a century, which is about the length of one long reign."
              ],
              example: {
                q: "The Battle of Hastings was in 1066 and the Domesday Book was made in 1086. How many years apart are they?",
                steps: ["Later date first: 1086.", "Subtract: 1086 − 1066.", "86 − 66 = 20."],
                answer: "20 years",
                checks: [{ expr: "1086 - 1066", value: 20, tol: 0 }]
              }
            },
            core: { hint: "Later date minus earlier date. Use 1757, not 1858." },
            stretch: { extend: "Fifty years is roughly one reign. Explain why historians still say the collapse was quick, given the Empire had taken almost two centuries to build." }
          },
          explain: "Say, in one sentence, what the fifty-year gap suggests about how strong the Empire really was in 1707.",
          why: "1757 − 1707 = 50 years. An Empire that had taken from 1526 to 1707 to reach its greatest size lost control of India within fifty years of Aurangzeb's death."
        },
        {
          title: "Prove the statement",
          task: {
            kind: "match",
            q: "Match each assessment statement to the specific evidence that proves it true.",
            pairs: [
              ["Humayun was a weak leader", "He was forced into exile in 1540 and took fifteen years to win back his throne"],
              ["Jahangir was a poor leader", "He was addicted to alcohol and drugs, took little interest in war and left many in poverty"],
              ["Aurangzeb focused on deadly wars instead of culture", "He spent 26 years fighting in the Deccan and banned music at his court"],
              ["The Mughals did not invest in new technologies", "They bought telescopes from Europe and let their weapons grow old-fashioned"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read each statement and underline the emperor's name, or the word Mughals if there is no name.",
                "Find the evidence that mentions that emperor's story: exile is Humayun, alcohol is Jahangir, the Deccan is Aurangzeb.",
                "The statement with no name is about the whole Empire: look for telescopes and weapons.",
                "Check each piece of evidence has a name, a date or a number in it: that is what makes it specific."
              ],
              example: {
                q: "Match the statement to the evidence: Babur was a skilled general; Akbar was a tolerant ruler. Choices: he welcomed all religions and promoted Hindus to power; he won Panipat in 1526 with 12,000 men against 70,000.",
                steps: ["A general's skill is proved by a battle: Panipat.", "Tolerance is proved by welcoming religions."],
                answer: "Babur: Panipat with 12,000 against 70,000. Akbar: welcomed all religions and promoted Hindus."
              }
            },
            core: { hint: "Exile, alcohol, the Deccan, telescopes: one key word for each statement." },
            stretch: { extend: "Your assessment also lists the statement that Akbar used new technology to win battles. Your lesson's clearest technology example is Babur's cannons at Panipat. What would you need to find out before you could prove the statement about Akbar?" }
          },
          explain: "Say, in one sentence, what makes a piece of evidence specific rather than general.",
          why: "Humayun: exile in 1540, fifteen years away. Jahangir: alcohol and drugs, no interest in war, poverty. Aurangzeb: the 26-year Deccan war and the ban on court music. The Mughals: telescopes from Europe and old-fashioned weapons."
        },
        {
          title: "The assessment essay",
          task: {
            kind: "written",
            q: "How far do you agree that the Mughal Empire achieved a legacy of greatness? Write one paragraph agreeing, one paragraph disagreeing, and a conclusion that weighs the evidence and gives an overall judgement.",
            criteria: [
              "SC1: Each paragraph opens by agreeing or disagreeing, using the wording of the question: achieved a legacy of greatness.",
              "SC2: Each paragraph gives specific evidence from my own knowledge, with a name, a date or a number.",
              "SC3: Each paragraph explains how the evidence shows the Empire was, or was not, great, using because.",
              "SC4: My conclusion weighs both sides and gives a clear overall judgement using how far, mostly or partly."
            ],
            model: "I agree that the Mughal Empire achieved a legacy of greatness because of its culture and government. For example, Akbar built a tax system and communication network, welcomed all religions and kept 36 musicians at a court where Hindu and Muslim music became one, and Shah Jahan built the Taj Mahal. This shows greatness because these achievements united many peoples and are still admired today. Therefore the Empire left a legacy that outlived its emperors. I disagree that the Mughal Empire achieved a legacy of greatness because of its decline under Aurangzeb. For example, he banned Diwali, destroyed over 80 temples, taxed peasants at 50 per cent of their income and spent 26 years fighting in the Deccan. This shows the Empire was not great because these choices divided society and emptied the treasury, so that by 1757 the East India Company had taken control. Therefore the legacy includes a collapse as well as a golden age. Overall, I mostly agree that the Empire achieved a legacy of greatness, because the buildings, music and language that still shape India today have lasted far longer than the fifty years of decline that followed Aurangzeb."
          },
          levels: {
            support: {
              steps: [
                "Plan three lines: FOR (culture or Akbar's government), AGAINST (Aurangzeb's decline), JUDGEMENT (how far).",
                "Paragraph 1: I agree that the Mughal Empire achieved a legacy of greatness because… For example… This shows… because… Therefore…",
                "Paragraph 2: I disagree that the Mughal Empire achieved a legacy of greatness because… For example… This shows… because… Therefore…",
                "Conclusion: Overall, I mostly / partly agree because… (say which side is stronger and why)."
              ],
              example: {
                q: "How far do you agree that William the Conqueror's rule was good for England? Write for, against and a judgement.",
                steps: ["For: he brought order, castles and the Domesday Book, which shows strong government.", "Against: his harrying of the north caused famine and death.", "Judgement: partly agree, because the order he brought came at a terrible human cost."],
                answer: "For: castles and Domesday show strong rule. Against: the harrying of the north. Judgement: partly, because order came at a terrible cost."
              }
            },
            core: { hint: "Use the two opening sentences your lesson gives you. Every paragraph needs a name, a date or a number. End with how far." },
            stretch: { extend: "Rewrite your conclusion so that it does not repeat your two paragraphs but instead explains what you used as your test of greatness: size, culture, tolerance or lasting impact." }
          },
          explain: "Say, in one sentence, which side of the argument you found stronger and the single piece of evidence that decided it.",
          why: "The essay is judged on the four success criteria: using the question's wording, specific evidence, explanation with because, and a conclusion that weighs both sides to reach a clear judgement. The best conclusions say which test of greatness they used."
        }
      ]
    }
  ],

  sources: {
    deckDump: "hi_y08_topic_1_mughal_india.txt",
    decksUsed: [
      "L1 Creation of the Empire / Babur Guided Reading Task.pptx",
      "L1 Creation of the Empire / Emperors Information.pptx",
      "L1 Creation of the Empire / Emperors Worksheet.pptx",
      "L1 Creation of the Empire / L1 Creation of the Mughal Empire.pptx",
      "L2 Mughal Culture / Culture Information.pptx",
      "L2 Mughal Culture / L2 Mughal Culture.pptx",
      "L2 Mughal Culture / Mughal Portraits Worksheet.pptx",
      "L3 Mughal Successes + Progress Check / L3 Mughal Successes.pptx",
      "L3 Mughal Successes + Progress Check / Successes Worksheet.pptx",
      "L4 Decline under Aurangzeb / HW Aurangzeb Legacy.pptx",
      "L4 Decline under Aurangzeb / L4 Decline of Mughal Empire.pptx",
      "L5 Collapse of the Empire + Review / L5 Collapse of the Empire & Review.pptx",
      "L6 Assessment / L6 Mughals Assessment.pptx",
      "Y8 Mughals Composite.pptx"
    ],
    notes: "Lesson titles, sequence, learning objectives, key words, the Babur reading (Fergana, Kabul 1504, the Lodi dynasty and Ibrahim Lodi, Panipat April 1526 with 12,000 against 70,000 and 1,000 war elephants, field artillery, Delhi and Agra by May 1526, no tax system, death 1530), the six emperors' dates and legacies (Humayun 22 years old, exile 1540, return 1555, death 1556; Akbar 49 years, tax and communication, tolerance; Jahangir, Nur Jahan 1611; Shah Jahan 1627–57, peak, Taj Mahal, succession struggle; Aurangzeb 1657–1707, 50 years, greatest extent, intolerance), the culture sheet (Persian-Turkish-Indian blend, Agra Fort, miniatures and their three influences, the Akbarnama in three volumes, 36 musicians, Pachisi and Ludo, Persian translations, Urdu, elephants, velvet and silk), the four factors of greatness (barricade tactic, muskets, elephants, 145 million people, Navratnas, Hindus promoted, long-term impact), the three factors of decline with their reasons (50 per cent peasant tax, telescopes from Europe, old-fashioned weapons, Diwali banned, tax breaks for Muslims, conquest without development, music banned at court, no navy, over 80 temples, the Deccan 26 years and over 100,000 lives), 1757 and 1858, the L5 review headings and rating scale, the assessment structure (four sections, 45 minutes), the Section C statements, the SC1–SC4 success criteria and the essay sentence starters are all taken from the department's decks. Two decks in the dump are empty (Diamond 9.pptx; Akbar Video.pptx) and the L1 homework sheet on the Taj Mahal and the L5 decline story are not in the dump. Facts the deck asks for but does not print and which were supplied from standard reference knowledge, flagged in NOTES.md: the Taj Mahal as a tomb for Mumtaz Mahal with Shah Jahan buried there; Dara defeated and put to death; the deck's 1657 taken as the year the succession war began. The deck's over-claims (the Empire ruled most of Asia; the only country in Asia with gunpowder) and the architect's-hands legend are not carried and are banned in verify.py. Nothing is quoted: the deck prints no primary source and no historian's words; the deck's model paragraph (L3 slide 11) is not reproduced and its phrases are banned. All explanations, questions, worked examples and model paragraphs are original. astra/2: per-option feedback on every mcq and gap, misconceptions with checks on all four numeric items, explain prompts on every module, four context modules (ch2 numeric, ch3 mcq, ch5 mcq, ch6 numeric), glossary chapters, four Connections groups, spacing; no widgets, no constellation, no pretext.l1."
  }
};
