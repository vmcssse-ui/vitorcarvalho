// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 History · Year 9 Topic 2: Dictatorship (20th-century dictators) · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   every date, name and sequence is held in an independent CHRONOLOGY table in verify.py, each entry carrying the
//   department slide that gives it; every four-digit year in pupil text must be a CHRONOLOGY year or one of the small
//   PARALLEL set used only in non-topic support examples, and every named event that appears with a year must carry the
//   CHRONOLOGY year. Every large number must be in the FACTS set taken from the deck. Every "order" task is compared
//   with the canonical sequences held in verify.py (the 1933–34 sequence is checked month by month); every mcq / gap
//   answer is compared with an independent answer key; numeric items carry `check` and `misconceptions` (each with its
//   own `check`); contexts share the task's answer by construction.
//   Care: this unit teaches two dictatorships. Nazi and Soviet propaganda is described and attributed, never
//   reproduced as slogan text for pupils to repeat; the Nazi Party's antisemitic programme point is explained in the
//   deck's own framing and never quoted; the deck's "create your own dictatorship" role-play is replaced by analysis
//   (see NOTES.md). The ONLY quoted words anywhere are short fragments of Lenin's Last Will and Testament, the one
//   primary source the department's deck prints, and they appear only in chapter 5. The deck's own model paragraph is
//   fingerprinted and banned, as are Stalin's self-given titles in slogan form.
//   astra/2: per-wrong-option `feedback` on every mcq/gap; `misconceptions` on every numeric; `explain` on every
//   module; `glossary[].chapter`; `connections` 4 × 4 ⊂ glossary; `meta.spacing [2,7,30]`; no constellation; no
//   pretext.l1 (the translation pass adds it later).
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["hist-dictatorship"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "hist-dictatorship",
    subjectKey: "history",
    subject: "History",
    board: "AQA",
    spec: "KS3 → 8145",
    specRef: "KS3 Year 9 Topic 2: Dictatorship — 20th-century dictators, Hitler and Stalin; foundations for GCSE History 8145 (Germany, 1890–1945: Democracy and dictatorship)",
    year: 9,
    tier: "KS3",
    title: "Dictatorship",
    sub: "What a dictatorship is, how Hitler turned a democracy into one, how Stalin fought his way to the top of a one-party state, and how the two dictatorships compare.",
    bigQuestion: "To what extent were the dictatorships in Hitler's Germany and Stalin's Russia similar?",
    lessonCount: 6,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Introduction to 20th Century Dictators – Hitler & Stalin", question: "What is the difference between a democracy and a dictatorship?", keywords: ["democracy", "dictatorship", "totalitarianism", "separation of powers", "opposition", "rights"] },
    { n: 2, title: "The Rise of Hitler and Nazism in Germany", question: "What did the Nazi Party offer, and why did so many Germans vote for it?", keywords: ["Nazi Party", "nationalism", "socialism", "fascism", "Wall Street Crash", "Chancellor"] },
    { n: 3, title: "How did Hitler rule Germany?", question: "How did Hitler destroy German democracy and then keep control of the country?", keywords: ["Reichstag", "Enabling Act", "Night of the Long Knives", "Führer", "Gestapo", "indoctrinate"] },
    { n: 4, title: "How did Stalin rise to power in the USSR?", question: "How did Stalin rise to power in the USSR and push his rivals aside?", keywords: ["USSR", "communism", "Lenin", "Trotsky", "Politburo", "General Secretary"] },
    { n: 5, title: "How did Stalin rule the USSR?", question: "What were the key features of Stalin's rule, and how did they keep him in power?", keywords: ["NKVD", "the Purges", "cult of personality", "censorship", "Five-Year Plans", "Magnitogorsk"] },
    { n: 6, title: "Dictators Review & Assessment", question: "To what extent were the dictatorships in Hitler's Germany and Stalin's Russia similar?", keywords: ["similarity", "difference", "comparison", "evidence", "judgement", "theme"] }
  ],

  glossary: [
    { term: "democracy", means: "A system of government where the people vote and choose their leaders, and have rights such as freedom of speech.", chapter: "democracy-dictatorship" },
    { term: "dictatorship", means: "A system of government where one person has total power. The people are oppressed and ignored.", chapter: "democracy-dictatorship" },
    { term: "totalitarianism", means: "A type of government with complete control over the people and society, so that nobody can oppose the dictator.", chapter: "democracy-dictatorship" },
    { term: "separation of powers", means: "Power divided between different parts of government, so that each can stop the others abusing their power.", chapter: "democracy-dictatorship" },
    { term: "nationalism", means: "The idea that your own nation should be made stronger and more independent.", chapter: "hitler-rise" },
    { term: "socialism", means: "The idea that a country's land, businesses and wealth should belong to the workers of that country.", chapter: "hitler-rise" },
    { term: "fascism", means: "The far-right belief that some people and races are more important than others, and that the nation matters more than the individual.", chapter: "hitler-rise" },
    { term: "Chancellor", means: "The leader of the German government, rather like a Prime Minister.", chapter: "hitler-rise" },
    { term: "Reichstag", means: "The German parliament, and also the building it met in.", chapter: "nazi-dictatorship" },
    { term: "Enabling Act", means: "The law of March 1933 that let Hitler make laws for four years without the Reichstag's approval.", chapter: "nazi-dictatorship" },
    { term: "Führer", means: "Leader. The title Hitler gave himself in August 1934, when his power became absolute.", chapter: "nazi-dictatorship" },
    { term: "Gestapo", means: "The secret police of Nazi Germany, who used informers, surveillance and house searches to find the regime's enemies.", chapter: "nazi-control" },
    { term: "propaganda", means: "Information chosen and shaped to make people believe what the government wants them to believe.", chapter: "nazi-control" },
    { term: "indoctrinate", means: "To push a set of beliefs into people until they accept them without question. The Nazis indoctrinated children.", chapter: "nazi-control" },
    { term: "communism", means: "The belief that everyone should be equal, and that land, factories and wealth should be held by the state for the workers.", chapter: "stalin-rise" },
    { term: "cult of personality", means: "The building up of one leader through images, statues, songs and praise, until criticising them seems unthinkable.", chapter: "stalin-rule" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 glossary terms used exactly once.
  connections: [
    { group: "Systems of government", terms: ["democracy", "dictatorship", "totalitarianism", "separation of powers"] },
    { group: "Ideas and beliefs", terms: ["nationalism", "socialism", "fascism", "communism"] },
    { group: "How Hitler took and held power", terms: ["Chancellor", "Reichstag", "Enabling Act", "Führer"] },
    { group: "Controlling what people think", terms: ["Gestapo", "propaganda", "indoctrinate", "cult of personality"] }
  ],

  chapters: [
    /* ───────────── 1 · democracy, dictatorship, totalitarianism ───────────── */
    {
      key: "democracy-dictatorship", n: 1, title: "Democracy, dictatorship and totalitarianism",
      lead: "The four pillars that hold a democracy up, what a dictatorship puts in their place, and what historians mean by totalitarianism.",
      covers: [1],
      pretext: {
        words: [
          { word: "democracy", means: "a system of government where the people vote and choose their leaders", sentence: "In a democracy the people choose who governs them, and can change their minds at the next election." },
          { word: "dictatorship", means: "a system of government where one person has total power", sentence: "In a dictatorship the leader cannot be voted out, because there is no real vote." },
          { word: "totalitarianism", means: "a government with complete control over the people and society", sentence: "Totalitarianism reaches past the law courts and into schools, newspapers and homes." },
          { word: "opposition", means: "people and parties who disagree with the government and are allowed to say so", sentence: "A democracy needs an opposition; a dictatorship removes it." },
          { word: "separation of powers", means: "power divided between parts of government so that each can check the others", sentence: "The separation of powers means a court can tell a government it has broken the law." }
        ],
        passage: [
          "In a democracy, the people vote and choose their leaders.",
          "Elections happen regularly, and the vote is secret.",
          "More than one party can stand, so people have a real choice.",
          "People have rights, including the right to say what they think.",
          "Power is shared out, so the courts can check the government.",
          "In a dictatorship, one person has total power.",
          "There are no free elections and no real choice.",
          "The wishes and the rights of the people are ignored.",
          "The dictator decides every law and every important decision.",
          "When that control reaches into every part of life, we call it totalitarianism.",
          "A totalitarian state leaves no room for opposition.",
          "This unit looks at two dictatorships of the 20th century.",
          "You will compare Hitler's Germany with Stalin's Russia."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "نظام حكم يصوّت فيه الناس ويختارون قادتهم (democracy)",
            "نظام حكم يملك فيه شخص واحد السلطة كلّها (dictatorship)",
            "حكم له سيطرة تامّة على الناس وعلى المجتمع (totalitarianism)",
            "الناس والأحزاب الذين يخالفون الحكومة ويُسمح لهم بقول ذلك (opposition)",
            "سلطة مقسومة بين أجزاء الحكم حتى يراقب كلّ جزء الأجزاء الأخرى (separation of powers)"
          ],
          "passage": [
            "في الديمقراطية يصوّت الناس ويختارون قادتهم.",
            "والانتخابات تجري بانتظام، والتصويت سرّي.",
            "ويستطيع أكثر من حزب أن يترشّح، فيكون للناس خيار حقيقي.",
            "وللناس حقوق، منها حقّ أن يقولوا ما يفكّرون فيه.",
            "والسلطة مقسومة، فتستطيع المحاكم أن تراقب الحكومة.",
            "وفي الدكتاتورية يملك شخص واحد السلطة كلّها.",
            "فلا انتخابات حرّة ولا خيار حقيقي.",
            "وتُهمَل رغبات الناس وحقوقهم.",
            "والدكتاتور يقرّر كلّ قانون وكلّ قرار مهمّ.",
            "وعندما تمتدّ تلك السيطرة إلى كلّ جزء من الحياة سمّيناها الشمولية (totalitarianism).",
            "والدولة الشمولية لا تترك مكانًا للمعارضة.",
            "وهذه الوحدة تنظر في دكتاتوريتين من القرن العشرين (20th century).",
            "وستقارن ألمانيا هتلر بروسيا ستالين."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "ustrój, w którym ludzie głosują i wybierają swoich przywódców (democracy)",
            "ustrój, w którym jedna osoba ma całą władzę (dictatorship)",
            "rząd mający całkowitą kontrolę nad ludźmi i społeczeństwem (totalitarianism)",
            "ludzie i partie, którzy nie zgadzają się z rządem i mogą to mówić (opposition)",
            "władza podzielona między części rządu tak, żeby każda mogła sprawdzać pozostałe (separation of powers)"
          ],
          "passage": [
            "W demokracji ludzie głosują i wybierają swoich przywódców.",
            "Wybory odbywają się regularnie, a głosowanie jest tajne.",
            "Startować może więcej niż jedna partia, więc ludzie mają prawdziwy wybór.",
            "Ludzie mają prawa, w tym prawo do mówienia tego, co myślą.",
            "Władza jest podzielona, więc sądy mogą sprawdzać rząd.",
            "W dyktaturze jedna osoba ma całą władzę.",
            "Nie ma wolnych wyborów ani prawdziwego wyboru.",
            "Życzenia i prawa ludzi są lekceważone.",
            "Dyktator decyduje o każdym prawie i o każdej ważnej sprawie.",
            "Kiedy ta kontrola wchodzi w każdą część życia, nazywamy to totalitaryzmem.",
            "Państwo totalitarne nie zostawia miejsca na opozycję.",
            "Ten temat patrzy na dwie dyktatury XX wieku (the 20th century).",
            "Porównasz Niemcy Hitlera z Rosją Stalina."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um sistema de governo em que o povo vota e escolhe os seus líderes (democracy, democracia)",
            "um sistema de governo em que uma só pessoa tem todo o poder (dictatorship, ditadura)",
            "um governo com controlo/controle completo sobre as pessoas e a sociedade (totalitarianism, totalitarismo)",
            "pessoas e partidos que discordam do governo e são autorizados a dizê-lo (opposition, oposição)",
            "o poder dividido entre partes do governo, para que cada uma possa travar as outras (separation of powers, separação de poderes)"
          ],
          "passage": [
            "Numa democracia, o povo vota e escolhe os seus líderes.",
            "Há eleições com regularidade, e o voto é secreto.",
            "Pode candidatar-se mais de um partido, por isso as pessoas têm uma escolha real.",
            "As pessoas têm direitos, incluindo o direito de dizer o que pensam.",
            "O poder é repartido, por isso os tribunais podem travar o governo.",
            "Numa ditadura, uma só pessoa tem todo o poder.",
            "Não há eleições livres nem escolha real.",
            "Os desejos e os direitos das pessoas são ignorados.",
            "O ditador decide todas as leis e todas as decisões importantes.",
            "Quando esse controlo/controle entra em todas as partes da vida, chamamos-lhe totalitarismo.",
            "Um Estado totalitário não deixa espaço para oposição.",
            "Esta unidade olha para duas ditaduras do século 20 (século XX).",
            "Vais comparar a Alemanha de Hitler com a Rússia de Stalin."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "nidaam dowladnimo oo dadku codeeyaan oo hoggaamiyayaashooda doortaan",
            "nidaam dowladnimo oo hal qof awood dhammaystiran leeyahay",
            "dowlad xukun buuxa ku leh dadka iyo bulshada",
            "dad iyo xisbiyo ka duwan dowladda oo loo ogol yahay inay sidaas sheegaan",
            "awood la kala qaybiyo qaybaha dowladda si mid kastaa kuwa kale u hubiyo"
          ],
          "passage": [
            "Dimuqraadiyad, dadku way codeeyaan oo hoggaamiyayaashooda way doortaan.",
            "Doorashooyin si joogto ah ayay dhacaan, codkana waa qarsoodi.",
            "Ka badan hal xisbi ayaa tartami karaa, markaa dadku doorasho dhab ah ayay leeyihiin.",
            "Dadku xuquuq ayay leeyihiin, oo ay ku jirto xaqa ay wax ku sheegaan fikirkooda.",
            "Awoodda waa la kala qaybsan yahay, markaa maxkamaduhu dowladda way hubin karaan.",
            "Kali-talis, hal qof awood dhammaystiran ayuu leeyahay.",
            "Ma jiro doorasho xor ah, ma jirtona doorasho dhab ah.",
            "Rabitaanka iyo xuquuqda dadka waa la iska indhatiraa.",
            "Kali-taliyuhu wuxuu go'aansadaa sharci kasta iyo go'aan kasta oo muhiim ah.",
            "Marka xukunkaas uu gaaro qayb kasta oo nolosha, waxaan ugu yeerraa totalitarianism.",
            "Dowlad totalitarian ah meel uma banayso mucaarad.",
            "Cutubkan wuxuu eegayaa laba kali-talis oo qarnigii 20-aad.",
            "Waxaad barbar dhigaysaa Jarmalkii Hitler iyo Ruushkii Stalin."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "устрій, за якого люди голосують і обирають своїх очільників (democracy)",
            "устрій, за якого одна людина має всю владу (dictatorship)",
            "влада, яка має повний контроль над людьми і суспільством (totalitarianism)",
            "люди і партії, які не погоджуються з урядом і яким дозволено про це казати (opposition)",
            "влада, поділена між частинами уряду так, щоб кожна могла стримувати інші (separation of powers)"
          ],
          "passage": [
            "У демократії люди голосують і обирають своїх очільників.",
            "Вибори відбуваються регулярно, і голосування таємне.",
            "Висуватися може більше ніж одна партія, тому люди мають справжній вибір.",
            "Люди мають права, зокрема право казати те, що думають.",
            "Влада розподілена, тому суди можуть стримувати уряд.",
            "У диктатурі одна людина має всю владу.",
            "Немає ні вільних виборів, ні справжнього вибору.",
            "Бажання і права людей не беруть до уваги.",
            "Диктатор вирішує кожний закон і кожне важливе рішення.",
            "Коли цей контроль дістає в кожну частину життя, ми називаємо це тоталітаризмом.",
            "Тоталітарна держава не залишає місця для опозиції.",
            "Цей розділ розглядає дві диктатури 20 століття.",
            "Ви порівняєте Німеччину Гітлера з Росією Сталіна."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "حکومت کا وہ نظام جس میں لوگ ووٹ دے کر اپنے رہنما چنتے ہیں (democracy)",
            "حکومت کا وہ نظام جس میں ساری طاقت ایک شخص کے پاس ہوتی ہے (dictatorship)",
            "ایسی حکومت جس کا لوگوں اور سماج پر مکمل قابو ہو (totalitarianism)",
            "وہ لوگ اور جماعتیں جو حکومت سے اختلاف کرتی ہیں اور انھیں یہ کہنے کی اجازت ہوتی ہے (opposition)",
            "طاقت کو حکومت کے مختلف حصوں میں بانٹنا، تاکہ ہر حصہ دوسروں پر نظر رکھ سکے (separation of powers)"
          ],
          "passage": [
            "democracy میں لوگ ووٹ دے کر اپنے رہنما چنتے ہیں۔",
            "انتخابات مقررہ وقت پر ہوتے ہیں، اور ووٹ خفیہ ہوتا ہے۔",
            "ایک سے زیادہ جماعتیں کھڑی ہو سکتی ہیں، اس لیے لوگوں کے پاس اصل انتخاب ہوتا ہے۔",
            "لوگوں کے حق ہوتے ہیں، جن میں اپنی بات کہنے کا حق بھی شامل ہے۔",
            "طاقت بانٹی ہوئی ہوتی ہے، اس لیے عدالتیں حکومت پر نظر رکھ سکتی ہیں۔",
            "dictatorship میں ساری طاقت ایک شخص کے پاس ہوتی ہے۔",
            "نہ آزاد انتخابات ہوتے ہیں اور نہ کوئی اصل انتخاب۔",
            "لوگوں کی خواہشوں اور ان کے حقوق کو نظرانداز کر دیا جاتا ہے۔",
            "ڈکٹیٹر ہر قانون اور ہر اہم فیصلہ خود کرتا ہے۔",
            "جب یہ قابو زندگی کے ہر حصے تک پہنچ جائے تو ہم اسے totalitarianism کہتے ہیں۔",
            "totalitarian ریاست میں opposition کے لیے کوئی جگہ نہیں بچتی۔",
            "یہ یونٹ بیسویں صدی کی دو dictatorships کو دیکھتا ہے۔",
            "آپ ہٹلر کے جرمنی کا سٹالن کے روس سے موازنہ کریں گے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What makes a country a democracy?",
          paragraphs: [
            "A democracy is a system of government where the people vote and choose their leaders. Your lesson set out four pillars that hold a democracy up, and it is worth learning them as a set, because the rest of this unit is about what happens when they are knocked down one by one.",
            "The first pillar is free and fair elections. They reflect the will and the opinions of the people, they happen regularly, the ballot is secret, and the majority opinion decides what happens. The second is a multi-party system: because more than one party can stand, people have a real choice, and parties have to compete by offering the best policies and ideas.",
            "The third pillar is human and civil rights. A strong democracy protects people's interests and beliefs and the way they are allowed to express them, and freedom of speech is a major part of this. The fourth is the separation of powers: power and responsibilities are divided between different parts of government, and each part makes sure the others are not abusing their power. For example, the courts make sure the government does not break the law."
          ],
          worked: {
            q: "Explain one feature of democracy, and say whether the UK has it.",
            steps: [
              "Name the feature in one sentence: One feature of democracy is the separation of powers.",
              "Explain what it means: power is divided between different parts of government, so each can check the others.",
              "Give an example of the check in action: a court can rule that the government has broken the law.",
              "Judge the UK: the UK does have this feature, because its courts can and do rule against the government, even though Parliament makes the laws."
            ],
            answer: "Name it, explain it, give an example of the check working, then judge the UK against it: the separation of powers, courts ruling against ministers, so yes, the UK meets this feature."
          },
          tip: "Learn the four pillars as a list you can count on your fingers: elections, parties, rights, separated powers. Every dictatorship in this unit attacks all four."
        },
        {
          heading: "What makes a country a dictatorship?",
          paragraphs: [
            "A dictatorship is a system of government where one person has total power. The people are oppressed and ignored. Your lesson put the two definitions side by side on purpose: a democracy shares power out, and a dictatorship gathers it into one pair of hands.",
            "Compare the two against the four pillars. Elections either disappear or become a show with only one possible winner. Other parties are banned, so there is no opposition left to argue back. Rights, including freedom of speech, are removed, so criticism becomes dangerous. And the separation of powers collapses, because the courts, the police and the army all end up answering to the leader.",
            "That is why historians do not judge a dictatorship simply by how harsh its leader sounds. They ask a sharper question: who, if anyone, is left who could say no? In a democracy the answer is a long list, including voters, rival parties, judges and journalists. In a dictatorship the list is empty."
          ],
          tip: "A useful test for any country: name one person or group who could legally stop the leader. If you cannot, you are looking at a dictatorship."
        },
        {
          heading: "Totalitarianism: control over everything",
          paragraphs: [
            "A dictator rules a country outright. Every law and every important decision is his to make, and what the people want, or are entitled to, counts for nothing beside what he wants. Holding on to that position takes more than controlling the government, so a dictatorship reaches into the whole of people's lives: their work, their schooling, their newspapers and their free time. Your lesson gives that reach a name: totalitarianism.",
            "Totalitarianism, as your lesson defines it, is government that controls people and society so completely that the dictator's power can never be challenged. Nobody keeps any rights or personal freedoms, and no opposition is allowed to exist at all. The word matters because it points at the reach of the control, not just its harshness.",
            "Your lesson listed the levers a totalitarian state pulls: elections, the police and the army, opposition parties, and the media and the press. Keep that list beside you. In chapters 3, 4 and 6 you will see Hitler and Stalin pulling exactly these levers, and you will be asked how similar their methods were."
          ],
          tip: "Dictatorship describes who holds power. Totalitarianism describes how far that power reaches. A question about control of schools or newspapers is a question about totalitarianism."
        },
        {
          heading: "The two dictatorships you will compare",
          paragraphs: [
            "The enquiry question for this unit is the one your department set: to what extent were the dictatorships in Hitler's Germany and Stalin's Russia similar? You will answer it under three headings, which are the ones the assessment uses: their beliefs, their rise to power, and their rule over their countries.",
            "Keep the headings in mind as you read, because a good comparison is not a list of facts about two men. It is an argument about where the two dictatorships line up and where they part company, with evidence from both sides for each point you make."
          ],
          tip: "Start a two-column page now, one column for Germany and one for the USSR, with rows for beliefs, rise to power and rule. Fill it in as you work through the unit."
        }
      ],
      gate: [
        { kind: "mcq", q: "What does the word democracy mean?", options: ["A system of government where the people vote and choose their leaders", "A system of government where one person has total power", "A system of government in which the army chooses the leader", "A system of government in which the richest people make the laws"], answer: 0, why: "A democracy is government by choice: the people vote for their leaders, and they keep rights such as freedom of speech.",
          feedback: [
            "",
            "That is the definition of a dictatorship, which is the opposite. In a democracy power is shared out and the leaders can be voted out at the next election.",
            "Rule by the army is one kind of dictatorship, not a democracy. The test of a democracy is whether the people choose the government in a free vote.",
            "Rule by the richest is not democracy either, whatever it is called. In a democracy each voter has one vote, and the majority opinion decides what happens."
          ] },
        { kind: "gap", q: "In a dictatorship, one person has ___ power, and the rights of the people are ignored.", answer: "total", options: ["total", "shared", "limited"], why: "The department's definition is exact: a dictatorship is a system of government where one person has total power.",
          feedback: {
            "shared": "Shared power is the mark of a democracy, where the separation of powers lets the courts and parliament check the government. A dictator shares power with nobody.",
            "limited": "Limited power is what a democracy puts on its leaders through elections, rights and the courts. A dictator removes those limits, which is the whole point of the system."
          } },
        { kind: "mcq", q: "What does totalitarianism mean?", options: ["A government with complete control over the people and society, so that nobody can oppose the dictator", "A government that has won a very large majority in a free and fair election", "A government in which every citizen is required by law to vote", "A government that rules more than one country at the same time"], answer: 0, why: "Totalitarianism is about the reach of the control: over the people and over society, so that no opposition is left.",
          feedback: [
            "",
            "A large majority won fairly is still a democracy, because the voters can take that majority away at the next election. Totalitarianism removes the vote itself.",
            "Compulsory voting exists in some democracies and tells you nothing about totalitarianism. The test is whether there is any opposition left to vote for.",
            "Ruling several countries at once describes an empire. Totalitarianism is about how deeply a government controls the society it already rules."
          ] }
      ],
      modules: [
        {
          title: "The four pillars of democracy",
          task: {
            kind: "match",
            q: "Match each pillar of democracy to the explanation of what it does.",
            pairs: [
              ["Free and fair elections", "Regular, secret ballots in which the majority opinion decides what happens"],
              ["A multi-party system", "A wide range of ideas and a real choice, because parties compete to offer the best policies"],
              ["Human and civil rights", "Protection for people's interests and beliefs, with freedom of speech a major part of it"],
              ["Separation of powers", "Power divided between parts of government, so the courts can stop the government breaking the law"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the explanation that mentions voting. That one belongs to elections.",
                "Find the explanation that mentions choice and competition between parties. That one belongs to the multi-party system.",
                "Find the explanation that mentions freedom of speech. Rights are about what people are allowed to say and believe.",
                "The explanation left over mentions the courts checking the government, which is the separation of powers."
              ],
              example: {
                q: "Match each part of a school council to what it does: the student vote, the council meeting, the head teacher's veto.",
                steps: ["The student vote is how representatives are chosen.", "The council meeting is where ideas are argued over and decided.", "The head teacher's veto is the check on the council's decisions."],
                answer: "Student vote to choosing representatives; council meeting to debating and deciding; head teacher's veto to checking the decision."
              }
            },
            core: { hint: "One explanation mentions ballots, one mentions competing parties, one mentions freedom of speech, and one mentions the courts." },
            stretch: { extend: "Pick two of the four pillars and explain whether you think the UK meets them, giving one piece of evidence for each judgement." }
          },
          explain: "Say, in one sentence, which pillar you think a new dictator would attack first, and why.",
          why: "Elections are about how leaders are chosen; a multi-party system is about choice; rights are about what people may say and believe; the separation of powers is about who can check the government. A dictatorship attacks all four."
        },
        {
          title: "Democracy against dictatorship",
          task: {
            kind: "written",
            q: "Explain the main difference between a democracy and a dictatorship. Use at least two features of each. Write one paragraph of four to six sentences.",
            criteria: [
              "I state the main difference in one clear sentence.",
              "I name at least two features of a democracy and explain what each one does.",
              "I name at least two things a dictatorship does instead, and use the word because.",
              "I use at least two key words from this chapter correctly, such as totalitarianism, opposition or separation of powers."
            ],
            model: "The main difference between a democracy and a dictatorship is who holds power and who is able to take it away. In a democracy the people vote and choose their leaders in regular, secret elections, and more than one party can stand, so voters have a real choice and can remove a government they dislike. A democracy also protects rights such as freedom of speech, and it separates powers, so that the courts can rule that the government has broken the law. A dictatorship removes all of this, because one person has total power: elections stop being real, opposition parties are banned, and criticism becomes dangerous. When that control spreads into schools, newspapers and private life as well, historians call it totalitarianism."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: The main difference between a democracy and a dictatorship is…",
                "Sentences 2 and 3: name two features of a democracy and say what each one does for the people.",
                "Sentence 4: say what a dictatorship does instead, using because.",
                "Sentence 5: finish with the word totalitarianism and what it adds to the picture."
              ],
              example: {
                q: "Explain the main difference between a school with a student council and a school with none.",
                steps: ["Name the difference: whether students have any say in decisions.", "Give a feature of the council school: elected representatives who can raise problems.", "Say what happens without it: decisions are made about students without asking them."],
                answer: "The difference is whether students have a voice: elected representatives can raise problems, and without a council decisions are simply announced."
              }
            },
            core: { hint: "Write about power: who has it, who chose them, and who is allowed to argue back. Two features of each system, then the word totalitarianism." },
            stretch: { extend: "Some people argue a dictatorship can act faster than a democracy in a crisis. Explain why historians are still not persuaded that this is an advantage." }
          },
          explain: "Say, in one sentence, which feature of a democracy you used as your strongest piece of evidence, and why.",
          why: "A strong answer makes the difference about power and accountability, not about how unpleasant a leader is. The best answers end on totalitarianism, because that word names how far the control reaches."
        },
        {
          title: "Spotting a dictatorship",
          task: {
            kind: "mcq",
            q: "A country has a new leader, and four things change in the year that follows. Which of these changes describes a dictatorship rather than a democracy?",
            options: [
              "Only one party is allowed to stand for election, and its leader cannot be voted out",
              "A new party wins the election, and the party that used to govern becomes the opposition",
              "A court rules that a government minister has broken the law, and the minister resigns",
              "A newspaper prints an article attacking the leader, and nothing happens to the newspaper"
            ],
            answer: 0,
            why: "One party, one possible winner, and a leader who cannot be removed: that is total power in one pair of hands, which is the definition of a dictatorship.",
            feedback: [
              "",
              "A government losing an election and becoming the opposition is democracy working exactly as it should. It shows the voters still have the power to change their minds.",
              "A court ruling against a minister is the separation of powers in action. In a dictatorship the courts answer to the leader, so this could not happen.",
              "A newspaper criticising the leader and coming to no harm shows freedom of speech is protected. A dictatorship controls the media and the press instead."
            ]
          },
          levels: {
            support: {
              steps: [
                "Take each option and ask: could the leader be removed after this?",
                "If voters, courts or newspapers can still act, the four pillars are standing.",
                "Look for the option in which choice itself has been taken away.",
                "One party and no way to vote the leader out means total power."
              ],
              example: {
                q: "Which change shows a club has stopped being run by its members: the committee is elected each year, or the chair appoints the whole committee?",
                steps: ["Elections each year mean the members still decide.", "A chair who appoints the whole committee has taken that decision away from the members."],
                answer: "The chair appointing the whole committee shows the members no longer run the club."
              }
            },
            core: { hint: "Three of the four changes show a pillar of democracy still standing. Find the one that removes the people's choice altogether." },
            stretch: { extend: "Rank the other three changes from the one that protects democracy most strongly to the one that protects it least, and justify your order." }
          },
          contexts: [
            { label: "A visitor's diary", q: "A visitor keeps a diary of four things that happen in a country in the year after a new leader takes power. Which of these changes describes a dictatorship rather than a democracy?", why: "A diary records what a visitor can see, but the test is the same: has anybody been left who could remove the leader?" },
            { label: "A news report", q: "A news report lists four changes in a country twelve months after its new leader took office. Which of these changes describes a dictatorship rather than a democracy?", why: "A report may call all four changes reforms. Judge them against the four pillars instead, and only one of them removes the people's choice." },
            { label: "Checking the four pillars", q: "You are checking a country against the four pillars of democracy from this chapter. Which of these changes describes a dictatorship rather than a democracy?", why: "Three changes show a pillar still standing: elections, the courts, a free press. The fourth removes elections as a real choice." }
          ],
          explain: "Say, in one sentence, which pillar of democracy the correct answer knocks down.",
          why: "Elections that only one party can win are not a check on power at all. The other three changes each show a pillar of democracy still doing its job: voters changing the government, courts checking ministers, newspapers criticising the leader."
        }
      ]
    },

    /* ───────────── 2 · the rise of Hitler and the Nazi Party ───────────── */
    {
      key: "hitler-rise", n: 2, title: "The rise of Hitler and the Nazi Party",
      lead: "Germany after defeat in 1918, what the Nazi Party was and believed, and the mixture of Nazi effort and world events that carried Hitler to the Chancellorship.",
      covers: [2],
      pretext: {
        words: [
          { word: "Treaty of Versailles", means: "the peace treaty Germany had to accept after losing the First World War", sentence: "The Treaty of Versailles made Germany accept blame for the war and pay for the damage." },
          { word: "nationalism", means: "the idea that your own nation should be made stronger and more independent", sentence: "Nazi nationalism promised to tear up the treaty and make Germany strong again." },
          { word: "socialism", means: "the idea that a country's land, businesses and wealth should belong to its workers", sentence: "Hitler added socialism to the party's name to attract working people." },
          { word: "unemployed", means: "out of work", sentence: "By January 1933 more than six million Germans were unemployed." },
          { word: "Chancellor", means: "the leader of the German government, rather like a Prime Minister", sentence: "Hitler was appointed Chancellor, not elected dictator." }
        ],
        passage: [
          "Germany lost the First World War in 1918.",
          "Many Germans could not accept that they had been defeated.",
          "They believed their own politicians had betrayed them.",
          "The Treaty of Versailles forced Germany to take the blame.",
          "It cut the German army and demanded huge payments.",
          "The German Workers' Party was founded in 1919.",
          "Hitler became its leader in 1921 and renamed it the Nazi Party.",
          "The Nazis promised to make Germany strong again.",
          "In 1929 a crash on the American stock market wrecked the German economy.",
          "Millions lost their jobs and grew desperate for change.",
          "More and more Germans voted for the Nazi Party.",
          "In January 1933 Hitler became Chancellor of Germany.",
          "He began at once to take German democracy apart."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "معاهدة السلام التي اضطرّت ألمانيا إلى قبولها بعد خسارتها الحرب العالمية الأولى (Treaty of Versailles)",
            "الفكرة أنّ أمّتك ينبغي أن تُجعل أقوى وأكثر استقلالًا (nationalism)",
            "الفكرة أنّ أرض البلد وأعماله التجارية وثروته ينبغي أن تكون لعمّاله (socialism)",
            "بلا عمل (unemployed)",
            "رئيس الحكومة الألمانية، وهو قريب من رئيس الوزراء (Chancellor)"
          ],
          "passage": [
            "خسرت ألمانيا الحرب العالمية الأولى في 1918.",
            "وكثير من الألمان لم يستطع أن يقبل أنهم قد هُزموا.",
            "وكانوا يعتقدون أنّ سياسيّيهم هم الذين غدروا بهم.",
            "ومعاهدة فرساي (Treaty of Versailles) أرغمت ألمانيا على حمل اللوم.",
            "وقلّصت الجيش الألماني وطلبت مبالغ هائلة.",
            "وتأسّس حزب العمّال الألماني في 1919.",
            "وصار هتلر زعيمه في 1921 وسمّاه الحزب النازي.",
            "ووعد النازيون بأن يجعلوا ألمانيا قويّةً من جديد.",
            "وفي 1929 حطّم انهيار في سوق الأسهم الأمريكية الاقتصاد الألماني.",
            "فخسر الملايين أعمالهم وصاروا يائسين يريدون التغيير.",
            "فصوّت للحزب النازي ألمان أكثر وأكثر.",
            "وفي يناير 1933 صار هتلر مستشار ألمانيا.",
            "وبدأ في الحال يفكّك الديمقراطية الألمانية."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "traktat pokojowy, który Niemcy musiały przyjąć po przegranej pierwszej wojnie światowej (Treaty of Versailles)",
            "myśl, że własny naród trzeba uczynić silniejszym i bardziej niezależnym (nationalism)",
            "myśl, że ziemia, firmy i bogactwo kraju powinny należeć do jego robotników (socialism)",
            "bez pracy (unemployed)",
            "przywódca rządu niemieckiego, podobny do premiera (Chancellor)"
          ],
          "passage": [
            "Niemcy przegrały pierwszą wojnę światową w 1918 roku.",
            "Wielu Niemców nie mogło przyjąć tego, że zostali pobici.",
            "Wierzyli, że zdradzili ich ich własni politycy.",
            "Traktat wersalski zmusił Niemcy do przyjęcia winy.",
            "Zmniejszył armię niemiecką i żądał ogromnych wypłat.",
            "Niemiecka Partia Robotników powstała w 1919 roku.",
            "Hitler został jej przywódcą w 1921 roku i przemianował ją na partię nazistowską.",
            "Naziści obiecywali, że znowu uczynią Niemcy silnymi.",
            "W 1929 roku krach na amerykańskiej giełdzie zrujnował gospodarkę niemiecką.",
            "Miliony straciły pracę i zaczęły rozpaczliwie pragnąć zmiany.",
            "Coraz więcej Niemców głosowało na partię nazistowską.",
            "W styczniu 1933 roku Hitler został kanclerzem Niemiec.",
            "Od razu zaczął rozbierać niemiecką demokrację na części."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o tratado de paz que a Alemanha teve de aceitar depois de perder a Primeira Guerra Mundial (Treaty of Versailles, Tratado de Versalhes)",
            "a ideia de que a tua própria nação deve ser tornada mais forte e mais independente (nationalism, nacionalismo)",
            "a ideia de que as terras, as empresas e a riqueza de um país devem pertencer aos seus trabalhadores (socialism, socialismo)",
            "sem trabalho (unemployed, desempregado)",
            "o chefe do governo alemão, mais ou menos como um primeiro-ministro (Chancellor, chanceler)"
          ],
          "passage": [
            "A Alemanha perdeu a Primeira Guerra Mundial em 1918.",
            "Muitos alemães não conseguiam aceitar que tinham sido derrotados.",
            "Acreditavam que os seus próprios políticos os tinham traído.",
            "O Tratado de Versalhes obrigou a Alemanha a assumir a culpa.",
            "Reduziu o exército alemão e exigiu pagamentos enormes.",
            "O Partido dos Trabalhadores Alemães foi fundado em 1919.",
            "Hitler tornou-se o seu líder em 1921 e mudou-lhe o nome para Partido Nazi/Nazista.",
            "Os nazis/nazistas prometiam tornar a Alemanha forte outra vez.",
            "Em 1929 um colapso da bolsa americana arruinou a economia alemã.",
            "Milhões de pessoas perderam o emprego e ficaram desesperadas por mudança.",
            "Cada vez mais alemães votavam no Partido Nazi/Nazista.",
            "Em janeiro de 1933 Hitler tornou-se chanceler da Alemanha.",
            "Começou logo a desmontar a democracia alemã."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "heshiiskii nabadda oo Jarmalku ku qasbanaaday inuu aqbalo kadib markii Dagaalkii Koowaad ee Adduunka lumiyay",
            "fikradda ah in qarankaaga laga dhigo mid ka xoog badan oo madax-bannaani badan leh",
            "fikradda ah in dhulka, ganacsiyada iyo maalka dal ay shaqaalihiisa iska leeyihiin",
            "shaqo la'aan",
            "hoggaamiyaha dowladda Jarmalka, oo u eg Ra'iisul Wasaare"
          ],
          "passage": [
            "Jarmalku wuxuu lumiyay Dagaalkii Koowaad ee Adduunka 1918-kii.",
            "Jarmal badan ayaa diiday inay aqbalaan in laga adkaaday.",
            "Waxay rumaysnaayeen in siyaasiyiintoodu khiyaameeyeen.",
            "Treaty of Versailles wuxuu Jarmalka ku qasbay inuu eedda qaato.",
            "Wuxuu ciidanka Jarmalka gooyay oo lacago aad u badan ayuu dalbaday.",
            "Xisbigii Shaqaalaha Jarmalka waxaa la aasaasay 1919-kii.",
            "Hitler wuxuu hoggaamiyihiisa noqday 1921-kii oo wuxuu ugu beddelay Xisbiga Nazi.",
            "Nazis-ku waxay ballanqaadeen inay Jarmalka mar kale xoojiyaan.",
            "1929-kii burbur ka dhacay suuqa saamiyada Maraykanka wuxuu dhaqaalaha Jarmalka burburiyay.",
            "Malaayiin ayaa shaqooyinkooda lumiyay oo isbeddel aad ayay u baahdeen.",
            "Jarmal sii badan ayaa Xisbiga Nazi u codeeyay.",
            "Janaayo 1933-dii Hitler wuxuu noqday Chancellor-ka Jarmalka.",
            "Isla markiiba wuxuu bilaabay inuu dimuqraadiyadda Jarmalka kala furfuro."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "мирний договір, який Німеччина мусила прийняти після поразки в Першій світовій війні (Treaty of Versailles)",
            "ідея, що власну націю треба зробити сильнішою і незалежнішою (nationalism)",
            "ідея, що земля, підприємства і багатство країни мають належати її робітникам (socialism)",
            "той, хто без роботи (unemployed)",
            "очільник німецького уряду, щось на зразок прем’єр-міністра (Chancellor)"
          ],
          "passage": [
            "Німеччина втратила Першу світову війну у 1918 році.",
            "Багато німців не могли прийняти, що їх перемогли.",
            "Вони вірили, що їх зрадили їхні власні політики.",
            "Версальський договір змусив Німеччину взяти на себе вину.",
            "Він скоротив німецьке військо і вимагав величезних виплат.",
            "Німецьку робітничу партію заснували у 1919 році.",
            "Гітлер став її очільником у 1921 році і перейменував її на Нацистську партію.",
            "Нацисти обіцяли знову зробити Німеччину сильною.",
            "У 1929 році обвал на американській біржі зруйнував німецьку економіку.",
            "Мільйони втратили роботу і відчайдушно захотіли змін.",
            "Усе більше німців голосувало за Нацистську партію.",
            "У січні 1933 року Гітлер став канцлером Німеччини.",
            "Він відразу почав розбирати німецьку демократію на частини."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ امن معاہدہ جو جرمنی کو پہلی جنگِ عظیم ہارنے کے بعد قبول کرنا پڑا (Treaty of Versailles)",
            "یہ خیال کہ اپنی قوم کو زیادہ مضبوط اور زیادہ آزاد بنایا جائے (nationalism)",
            "یہ خیال کہ کسی ملک کی زمین، کاروبار اور دولت اس کے مزدوروں کی ہونی چاہیے (socialism)",
            "بے روزگار (unemployed)",
            "جرمن حکومت کا سربراہ، کچھ کچھ وزیرِ اعظم کی طرح (Chancellor)"
          ],
          "passage": [
            "جرمنی 1918 میں پہلی جنگِ عظیم ہار گیا۔",
            "بہت سے جرمن یہ مان ہی نہ سکے کہ وہ ہار گئے ہیں۔",
            "ان کا یقین تھا کہ ان کے اپنے سیاست دانوں نے ان سے غداری کی ہے۔",
            "Treaty of Versailles نے جرمنی کو الزام لینے پر مجبور کیا۔",
            "اس نے جرمن فوج کم کر دی اور بہت بھاری رقموں کا مطالبہ کیا۔",
            "German Workers' Party 1919 میں قائم ہوئی۔",
            "ہٹلر 1921 میں اس کا رہنما بنا اور اس کا نام Nazi Party رکھ دیا۔",
            "نازیوں نے وعدہ کیا کہ وہ جرمنی کو دوبارہ مضبوط بنائیں گے۔",
            "1929 میں امریکی سٹاک مارکیٹ کے دھڑام سے گرنے نے جرمن معیشت تباہ کر دی۔",
            "لاکھوں لوگوں کا روزگار گیا اور وہ تبدیلی کے لیے بے چین ہو گئے۔",
            "زیادہ سے زیادہ جرمن Nazi Party کو ووٹ دینے لگے۔",
            "جنوری 1933 میں ہٹلر جرمنی کا Chancellor بن گیا۔",
            "اس نے فوراً جرمن democracy کو توڑنا شروع کر دیا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Germany after the First World War",
          paragraphs: [
            "Germany lost the First World War in 1918, after four years of fighting against the Allies: Britain, France and America. The German people had not expected to lose. Many of them could not accept that they had lost at all, and believed instead that their politicians and leaders had given up and betrayed them.",
            "Defeat caused enormous problems. The German economy was wrecked, and the Allies made Germany pay them back for the damage the war had caused. The Treaty of Versailles forced Germany to accept the blame for the war, to reduce the size of its army, and to pay the Allies £6.6 billion.",
            "Hold on to the feeling as well as the facts. A country that believes it has been humiliated, and that its own leaders are to blame, is a country where a party promising national revival will get a hearing. That is the ground the Nazi Party grew in."
          ],
          tip: "When you explain why the Nazis rose, start with 1918 and the treaty. Almost every later reason connects back to the anger it created."
        },
        {
          heading: "Hitler and the Nazi Party",
          paragraphs: [
            "Adolf Hitler was born in Austria in 1889. He was unhappy at school, left with no qualifications, failed to win a place at art school and struggled to make a living in Vienna. He joined the German army in 1914, fought in the First World War and won a medal for bravery. After the war the army sent him to spy on a meeting of the German Workers' Party; he found he agreed with many of its ideas and joined it instead.",
            "The German Workers' Party was founded in 1919. Hitler became its leader in 1921 and quickly renamed it the National Socialist German Workers' Party, or Nazi Party for short. He was energetic and a powerful public speaker, with a sense of timing that held his audiences; he was also single-minded, suspicious of everyone, devious and ruthless. By the end of 1922 the party had 20,000 members.",
            "In 1923 the Nazis tried to seize power by force in the Munich Putsch. The attempt failed and Hitler was sent to prison, though his sentence was short and he was soon back as leader. The failure taught him something that matters for chapter 3: force had not worked, so the next attempt would go through the ballot box."
          ],
          tip: "Note the two routes to power in one paragraph: force in 1923, votes afterwards. Examiners reward pupils who notice that Hitler changed method."
        },
        {
          heading: "What did the Nazis believe?",
          paragraphs: [
            "Your lesson placed the German parties on a political spectrum. On the far left was communism, the belief that everyone should be equal and that everything should be done for the state rather than the individual. In the centre was liberalism, where most German parties sat. On the far right was fascism, the belief that some people and races are more important than others. The Nazi Party belonged on the far right.",
            "To show what the party stood for, the Nazis published the 25-Point Programme. Some points were nationalist: tear up the Treaty of Versailles because it was making Germany weak, build a large and powerful army, win more land for the German population, unite all Germans in one country. Other points were socialist, and were there to win over working people: a job and a decent standard of living for every citizen, land for small farmers, higher pensions, education and health care, and large companies made to share their profits with their workers.",
            "One of the twenty-five points was openly racist. It said that only people with German blood could be German citizens, and that Jewish Germans could not be citizens at all. The party's antisemitism was written into its programme from the beginning, and it is important to say so plainly: this was not something the Nazis added later. You studied where it led in Year 8, when you looked at the Holocaust."
          ],
          tip: "Nationalist points are about the nation's strength; socialist points are about ordinary people's money and work. Sorting them is a favourite exam task."
        },
        {
          heading: "Why did so many Germans vote for the Nazis?",
          paragraphs: [
            "Your lesson divided the reasons into two kinds, and the division is the key to a good answer. Some reasons were the Nazis' own actions and appeal: Hitler's speaking, the rallies, the promises of the 25-Point Programme, the decision to fight elections rather than use force. Other reasons were outside the Nazis' control altogether.",
            "The biggest of those was the Wall Street Crash of 1929. Germany had borrowed heavily from America during the 1920s to help it recover from the war. When the American stock market collapsed, American banks demanded their loans back, and Germany had to repay. Without American money the German economy ran out of cash and stopped working. This became the Great Depression: millions of German workers lost their jobs and businesses closed. By January 1933, 6.1 million people were out of work.",
            "Desperate people went looking for a party that would change Germany, and the Nazis were waiting with an answer. That is why historians say the crash did not create Nazi support out of nothing; it turned a small party with a loud message into a mass movement."
          ],
          worked: {
            q: "Explain one reason why the Nazi Party became more popular after 1929.",
            steps: [
              "Point: One reason the Nazi Party became more popular after 1929 was the Great Depression.",
              "Evidence: the Wall Street Crash of 1929 forced American banks to call in their loans, and by January 1933 6.1 million Germans were out of work.",
              "Explain: because people had lost their jobs and their savings, they stopped trusting the parties that had governed through the crisis and listened to a party promising work and national revival.",
              "Link: therefore the Depression turned the Nazis from a small party into the largest in the Reichstag, even though it was an event outside Hitler's control."
            ],
            answer: "Point, evidence, explain, link: the Depression; the crash and 6.1 million unemployed; desperate voters abandoned the old parties; so Nazi support grew, for a reason Hitler did not create."
          },
          tip: "Use the words inside and outside Hitler's control. A top answer weighs one against the other instead of listing both."
        }
      ],
      gate: [
        { kind: "mcq", q: "What did the Treaty of Versailles force Germany to do?", options: ["Accept the blame for the war, reduce its army and pay the Allies for the damage", "Hand its government over to the Allies and hold no further elections", "Join with Austria to form one larger German nation", "Give up the German language in its schools and courts"], answer: 0, why: "The treaty's three demands in your lesson were blame, a smaller army, and £6.6 billion in payments to the Allies.",
          feedback: [
            "",
            "Germany kept its own government and went on holding elections, which is how the Nazis later won seats. The treaty took blame, soldiers and money, not the government itself.",
            "Uniting all Germans in one country was a Nazi demand in the 25-Point Programme, not something the treaty required. The treaty did the opposite and left Germany weaker.",
            "No part of the treaty touched the German language. Look instead for the three demands your lesson listed: blame, a reduced army, and payments."
          ] },
        { kind: "gap", q: "The Nazis' full name was the National ___ German Workers' Party.", answer: "Socialist", options: ["Socialist", "Nationalist", "Communist"], why: "Hitler added the word Socialist to the party's name to attract working people, even though the party sat on the far right.",
          feedback: {
            "Nationalist": "Nationalism certainly was a Nazi belief, but it is not the word in the party's name. Hitler chose Socialist for the title because he was hunting for working-class votes.",
            "Communist": "Communism was the Nazis' sworn enemy on the far left of the political spectrum. The word in the party's name is Socialist, which Hitler used to make the party sound friendly to workers."
          } },
        { kind: "numeric", q: "In which year did the Wall Street Crash take place? Give the year as four digits.", answer: 1929, check: "1933 - 4", tolerance: 0, units: "", why: "The American stock market collapsed in 1929, four years before Hitler became Chancellor, and the Great Depression followed.",
          misconceptions: [
            { answer: 1933, check: "1929 + 4", says: "That is the year Hitler became Chancellor, which is where the crash led. The crash itself came four years earlier." },
            { answer: 1923, check: "1929 - 6", says: "That is the year of the Munich Putsch, when the Nazis tried to take power by force. The Wall Street Crash came six years later." },
            { answer: 1919, check: "1929 - 10", says: "That is the year the German Workers' Party was founded. The crash that made the party popular came ten years after that." }
          ] }
      ],
      modules: [
        {
          title: "Hitler's road to power",
          task: {
            kind: "order",
            q: "Put these five steps on Hitler's road to power in the order they happened.",
            items: [
              "The German Workers' Party is founded (1919)",
              "Hitler becomes leader and renames it the Nazi Party (1921)",
              "The Munich Putsch fails and Hitler is imprisoned (1923)",
              "The Wall Street Crash begins the Great Depression (1929)",
              "Hitler becomes Chancellor of Germany (1933)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Each step carries its year, so start by reading the years only.",
                "Put the smallest year first and the largest year last.",
                "Check the story makes sense: a party has to exist before anyone can lead it.",
                "Check the last step: being appointed Chancellor is the end of this road, not the beginning."
              ],
              example: {
                q: "Put these steps of the Norman Conquest in order: William is crowned king; the Battle of Hastings (1066); the Domesday survey is made (1086).",
                steps: ["The battle comes first, because it is how William won.", "The coronation follows the victory in the same year.", "The Domesday survey is twenty years later, in 1086."],
                answer: "Battle of Hastings (1066); William is crowned king; the Domesday survey (1086)."
              }
            },
            core: { hint: "Read the years first, then check the story: party founded, leader takes over, force fails, crisis arrives, power is handed over." },
            stretch: { extend: "Choose the step you think was most important in bringing Hitler to power, and explain why the road would have stalled without it." }
          },
          explain: "Say, in one sentence, why the 1923 step had to come before the 1929 one for Hitler's strategy to change.",
          why: "The party was founded in 1919; Hitler took it over in 1921; force failed in 1923; the Wall Street Crash of 1929 created the crisis that won the Nazis votes; and in January 1933 Hitler was appointed Chancellor."
        },
        {
          title: "Inside or outside Hitler's control?",
          task: {
            kind: "mcq",
            q: "Historians separate the reasons for Nazi popularity into the party's own actions and events it could not control. Which of these reasons was outside Hitler's own control?",
            options: [
              "The Wall Street Crash of 1929 and the Great Depression that followed",
              "Hitler's skill as a public speaker at Nazi rallies",
              "The promises the Nazis made in their 25-Point Programme",
              "The decision to fight elections instead of trying to seize power by force"
            ],
            answer: 0,
            why: "The crash happened on the American stock market and nobody in Germany arranged it. The Nazis exploited it, but they did not cause it.",
            feedback: [
              "",
              "Hitler's speaking was his own doing, and his timing and delivery were practised. Look for the reason that came from outside Germany altogether.",
              "The 25-Point Programme was written by the party to attract voters, so it is squarely inside Nazi control. The crash on the American stock market was not.",
              "Choosing elections over force was Hitler's own change of strategy after 1923. The event he did not choose was the collapse of the American stock market."
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask of each option: did the Nazi Party decide to do this?",
                "Speeches, programmes and strategies are all party decisions.",
                "Look for the one thing that happened to Germany rather than being done by Germans.",
                "An American stock market crash is not something a German party can arrange."
              ],
              example: {
                q: "Which of these is outside a school's control: the timetable it sets, or a snowstorm that closes the roads?",
                steps: ["The timetable is written by the school, so it is inside its control.", "A snowstorm happens to the school, whatever it planned."],
                answer: "The snowstorm is outside the school's control."
              }
            },
            core: { hint: "Three options are things the Nazi Party chose to do. One is something that happened to Germany from outside." },
            stretch: { extend: "Argue for or against this claim: without the Great Depression, the Nazis would never have taken power. Use at least one reason from each column." }
          },
          contexts: [
            { label: "A factory worker in Hamburg", q: "A factory worker in Hamburg loses his job in the Depression and votes Nazi for the first time. Which of these reasons was outside Hitler's own control?", why: "The worker's own experience is unemployment, and that came from the Depression, which no German party created." },
            { label: "A farmer in Bavaria", q: "A farmer in Bavaria hears Hitler speak at a rally and reads the party's promises to small farmers. Which of these reasons was outside Hitler's own control?", why: "The speech and the promise to small farmers are Nazi choices; the economic collapse that made the farmer listen was not." },
            { label: "A historian's two columns", q: "A historian draws two columns, headed Nazi actions and uncontrollable events, and sorts the reasons for Nazi popularity into them. Which of these reasons was outside Hitler's own control?", why: "Three reasons belong in the Nazi actions column. Only the crash and the Depression belong in the other one." }
          ],
          explain: "Say, in one sentence, why it matters to separate what the Nazis did from what happened to Germany.",
          why: "Speeches, programmes and strategy were the Nazis' own work. The Wall Street Crash of 1929 came from the American stock market, and the Depression followed from it. The Nazis did not cause the crisis; they made themselves the answer to it."
        },
        {
          title: "Why people voted Nazi",
          task: {
            kind: "written",
            q: "Explain one reason why more Germans voted for the Nazi Party after 1929. Say whether the reason was inside or outside Hitler's control, and why that matters. Write one paragraph of four to six sentences.",
            criteria: [
              "I name one clear reason why Nazi support grew after 1929.",
              "I support it with specific evidence from the chapter, such as a figure or an event.",
              "I explain the link between the reason and people's votes, using the word because.",
              "I say whether the reason was inside or outside Hitler's control, and why that matters to the argument."
            ],
            model: "One reason more Germans voted for the Nazi Party after 1929 was the economic collapse that followed the Wall Street Crash. American banks called in the loans Germany had borrowed during the 1920s, businesses closed, and by January 1933 6.1 million Germans were out of work. This mattered to voters because the parties that had governed through the crisis had no answer to it, while the Nazis promised work, order and a restored nation. The reason sits outside Hitler's control, since no German party arranged a crash on the American stock market. That matters because it shows Nazi success came from a combination of a crisis they did not cause and a message they had prepared for years."
          },
          levels: {
            support: {
              steps: [
                "Choose ONE reason: the Depression and unemployment, Hitler's speaking, the 25-Point Programme, or the change to fighting elections.",
                "Sentence 1: One reason more Germans voted for the Nazi Party after 1929 was…",
                "Sentences 2 and 3: give your evidence, then explain why it changed how people voted, using because.",
                "Sentences 4 and 5: say whether the reason was inside or outside Hitler's control, and why that matters."
              ],
              example: {
                q: "Explain one reason why a local shop might lose its customers, and say whether the reason is inside or outside the shopkeeper's control.",
                steps: ["Name the reason: a large supermarket opens nearby.", "Explain the link: customers go where prices are lower, so takings fall.", "Judge control: the opening is outside the shopkeeper's control, so the response has to be about service, not price."],
                answer: "A new supermarket takes the customers; the reason is outside the shopkeeper's control, so the answer has to be something the shop can change."
              }
            },
            core: { hint: "One reason only, with a figure or an event as evidence. Then the judgement: inside or outside Hitler's control, and so what?" },
            stretch: { extend: "Add a second sentence of counter-argument: name one reason on the other side of the division and explain why you still think your reason was more important." }
          },
          explain: "Say, in one sentence, what evidence you used and why it proves your reason rather than simply describing it.",
          why: "A strong answer names one reason, proves it with evidence, and explains the link to votes. The best answers use the inside-or-outside division to make a judgement, rather than listing everything the chapter mentions."
        }
      ]
    },

    /* ───────────── 3 · destroying German democracy, 1933–1934 ───────────── */
    {
      key: "nazi-dictatorship", n: 3, title: "How Hitler destroyed German democracy",
      lead: "The twenty months between Hitler being appointed Chancellor and declaring himself Führer, and the four moments in them that turned a democracy into a dictatorship.",
      covers: [3],
      pretext: {
        words: [
          { word: "Reichstag", means: "the German parliament, and also the building it met in", sentence: "The Reichstag had to approve a law before it could be passed." },
          { word: "emergency powers", means: "special powers a government takes in a crisis, which set normal rules aside", sentence: "Hitler used emergency powers to restrict rights after the fire." },
          { word: "Enabling Act", means: "the law that let Hitler make laws without the Reichstag's approval", sentence: "After the Enabling Act, Hitler could make laws alone." },
          { word: "one-party state", means: "a country where only one political party is allowed to exist", sentence: "Once the other parties were banned, Germany was a one-party state." },
          { word: "Führer", means: "leader: the title Hitler gave himself when his power became absolute", sentence: "As Führer, Hitler was head of the government and of the army." }
        ],
        passage: [
          "Hitler was now Chancellor, but his power was not yet secure.",
          "On 27 February 1933 the Reichstag building was set on fire.",
          "Hitler used the fire to demand emergency powers.",
          "A new law restricted people's rights and freedoms.",
          "Communist leaders were arrested and could not campaign.",
          "In the election that followed, the Nazis won 288 seats.",
          "That was still not a majority, so Hitler joined with the nationalists.",
          "In March 1933 the Reichstag passed the Enabling Act.",
          "It let Hitler make laws without the Reichstag's approval.",
          "He banned the other parties, and Germany became a one-party state.",
          "In June 1934 the SS murdered around 400 Nazis who opposed him.",
          "In August 1934 President Hindenburg died.",
          "Hitler declared himself Führer, and his power was now absolute."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "البرلمان الألماني، وكذلك البناء الذي كان يجتمع فيه (Reichstag)",
            "سلطات خاصّة تأخذها الحكومة في أزمة، فتضع القواعد المعتادة جانبًا (emergency powers)",
            "القانون الذي أتاح لهتلر أن يُشرّع القوانين بغير موافقة الرايخستاغ (Enabling Act)",
            "بلد لا يُسمح فيه إلّا بحزب سياسي واحد (one-party state)",
            "الزعيم: اللقب الذي أعطاه هتلر نفسه لمّا صارت سلطته مطلقة (Führer)"
          ],
          "passage": [
            "كان هتلر الآن مستشارًا، ولكنّ سلطته لم تكن قد أمِنت بعد.",
            "وفي 27 فبراير 1933 أُضرمت النار في بناء الرايخستاغ (Reichstag).",
            "فاستخدم هتلر الحريق ليطلب سلطات الطوارئ.",
            "فحدّ قانون جديد حقوق الناس وحرّياتهم.",
            "واعتُقل زعماء الشيوعيين فلم يستطيعوا أن يحمِلوا حملتهم.",
            "وفي الانتخابات التي تلت ربح النازيون 288 مقعدًا.",
            "وذلك لم يكن أغلبية بعد، فتحالف هتلر مع القوميّين.",
            "وفي مارس 1933 أقرّ الرايخستاغ قانون التفويض (Enabling Act).",
            "فأتاح لهتلر أن يُشرّع القوانين بغير موافقة الرايخستاغ.",
            "فمنع الأحزاب الأخرى، وصارت ألمانيا دولة الحزب الواحد.",
            "وفي يونيو 1934 قتلت الإس إس (SS) نحو 400 نازيّ عارضوه.",
            "وفي أغسطس 1934 مات الرئيس هيندنبورغ (Hindenburg).",
            "فأعلن هتلر نفسه الفوهرر (Führer)، وصارت سلطته الآن مطلقة."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "parlament niemiecki, a także budynek, w którym się zbierał (Reichstag)",
            "szczególne uprawnienia, które rząd bierze w czasie kryzysu, odkładając zwykłe zasady (emergency powers)",
            "prawo, które pozwoliło Hitlerowi wydawać ustawy bez zgody Reichstagu (Enabling Act)",
            "kraj, w którym wolno istnieć tylko jednej partii politycznej (one-party state)",
            "przywódca: tytuł, który Hitler sam sobie nadał, kiedy jego władza stała się absolutna (Führer)"
          ],
          "passage": [
            "Hitler był teraz kanclerzem, ale jego władza nie była jeszcze pewna.",
            "27 lutego 1933 roku podpalono budynek Reichstagu.",
            "Hitler użył tego pożaru, żeby żądać uprawnień nadzwyczajnych.",
            "Nowe prawo ograniczyło prawa i wolności ludzi.",
            "Przywódców komunistycznych aresztowano i nie mogli prowadzić kampanii.",
            "W wyborach, które potem się odbyły, naziści zdobyli 288 miejsc.",
            "To nadal nie była większość, więc Hitler połączył się z nacjonalistami.",
            "W marcu 1933 roku Reichstag uchwalił Enabling Act.",
            "Pozwoliło ono Hitlerowi wydawać ustawy bez zgody Reichstagu.",
            "Zakazał innych partii i Niemcy stały się państwem jednej partii.",
            "W czerwcu 1934 roku SS zamordowało około 400 nazistów, którzy mu się sprzeciwiali.",
            "W sierpniu 1934 roku umarł prezydent Hindenburg.",
            "Hitler ogłosił się Führerem i jego władza była teraz absolutna."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o parlamento alemão, e também o edifício onde se reunia (Reichstag)",
            "poderes especiais que um governo toma numa crise, e que põem as regras normais de lado (emergency powers, poderes de emergência)",
            "a lei que permitiu a Hitler fazer leis sem a aprovação do Reichstag (Enabling Act)",
            "um país onde só é permitido existir um partido político (one-party state, Estado de partido único)",
            "líder: o título que Hitler se deu quando o seu poder passou a ser absoluto (Führer)"
          ],
          "passage": [
            "Hitler era agora chanceler, mas o seu poder ainda não estava seguro.",
            "A 27 de fevereiro de 1933 o edifício do Reichstag foi incendiado.",
            "Hitler usou o incêndio para exigir poderes de emergência.",
            "Uma nova lei restringiu os direitos e as liberdades das pessoas.",
            "Os líderes comunistas foram presos e não puderam fazer campanha.",
            "Nas eleições que se seguiram, os nazis/nazistas ganharam 288 lugares.",
            "Isso ainda não era uma maioria, por isso Hitler juntou-se aos nacionalistas.",
            "Em março de 1933 o Reichstag aprovou o Enabling Act.",
            "Permitia a Hitler fazer leis sem a aprovação do Reichstag.",
            "Ele proibiu os outros partidos, e a Alemanha tornou-se um Estado de partido único.",
            "Em junho de 1934 as SS mataram cerca de 400 nazis/nazistas que se opunham a ele.",
            "Em agosto de 1934 morreu o presidente Hindenburg.",
            "Hitler declarou-se Führer, e o seu poder era agora absoluto."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "baarlamaanka Jarmalka, iyo sidoo kale dhismaha ay ku kulmeen",
            "awoodo gaar ah oo dowladdu qaadato xilli xaalad degdeg ah, kuwaasoo xeerarka caadiga ah dhinac mariya",
            "sharcigii u ogolaaday Hitler inuu sharciyo sameeyo iyadoon Reichstag-ku ansixin",
            "dal oo keliya hal xisbi siyaasadeed loo ogol yahay inuu jiro",
            "hoggaamiye: cinwaankii Hitler naftiisa u bixiyay markii awooddiisa dhammaystirantay"
          ],
          "passage": [
            "Hitler hadda wuxuu ahaa Chancellor, laakiin awooddiisa weli ma sugneyn.",
            "27 Febraayo 1933 dhismaha Reichstag waa la gubay.",
            "Hitler wuxuu dabka u isticmaalay inuu awoodo degdeg ah ku dalbado.",
            "Sharci cusub ayaa xaddiday xuquuqda iyo xorriyadda dadka.",
            "Hoggaamiyeyaasha hantiwadaagga waa la xiray, ololena ma samayn karin.",
            "Doorashadii xigtay, Nazis-ku waxay ku guulaysteen 288 kursi.",
            "Taasi weli ma ahayn aqlabiyad, markaa Hitler wuxuu la biiray nationalists-ka.",
            "Maarso 1933-dii Reichstag-ku wuxuu ansixiyay Enabling Act.",
            "Waxay u ogolaatay Hitler inuu sharciyo sameeyo iyadoon Reichstag-ku ansixin.",
            "Xisbiyada kale wuu mamnuucay, Jarmalkuna wuxuu noqday dal hal xisbi leh.",
            "Juun 1934-kii SS-ku waxay dileen qiyaastii 400 Nazi oo ka soo horjeeday.",
            "Agoosto 1934-kii Madaxweyne Hindenburg wuu dhintay.",
            "Hitler naftiisa wuxuu ku dhawaaqay Führer, awooddiisuna hadda way dhammaystirnayd."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "німецький парламент, а також будівля, у якій він збирався (Reichstag)",
            "особливі повноваження, які уряд бере під час кризи і які відкладають звичайні правила (emergency powers)",
            "закон, який дозволив Гітлеру ухвалювати закони без згоди Райхстагу (Enabling Act)",
            "країна, де дозволено існувати лише одній політичній партії (one-party state)",
            "вождь: титул, який Гітлер дав собі, коли його влада стала абсолютною (Führer)"
          ],
          "passage": [
            "Гітлер тепер був канцлером, але його влада ще не була надійною.",
            "27 лютого 1933 року будівлю Райхстагу підпалили.",
            "Гітлер використав цю пожежу, щоб вимагати надзвичайних повноважень.",
            "Новий закон обмежив права і свободи людей.",
            "Комуністичних провідників арештували, і вони не могли вести кампанію.",
            "На виборах, які за цим пішли, нацисти здобули 288 місць.",
            "Це все одно не була більшість, тому Гітлер об’єднався з націоналістами.",
            "У березні 1933 року Райхстаг ухвалив Enabling Act, закон про надзвичайні повноваження.",
            "Він дозволив Гітлеру ухвалювати закони без згоди Райхстагу.",
            "Він заборонив інші партії, і Німеччина стала однопартійною державою.",
            "У червні 1934 року СС убили близько 400 нацистів, які були проти нього.",
            "У серпні 1934 року президент Гінденбурґ помер.",
            "Гітлер оголосив себе фюрером, і його влада тепер була абсолютною."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "جرمن پارلیمنٹ، اور وہ عمارت بھی جس میں وہ بیٹھتی تھی (Reichstag)",
            "وہ خاص اختیارات جو حکومت بحران میں لے لیتی ہے، اور جو عام قاعدے ایک طرف رکھ دیتے ہیں (emergency powers)",
            "وہ قانون جس نے ہٹلر کو Reichstag کی منظوری کے بغیر قانون بنانے کی اجازت دی (Enabling Act)",
            "وہ ملک جہاں صرف ایک سیاسی جماعت کے وجود کی اجازت ہو (one-party state)",
            "رہنما: وہ لقب جو ہٹلر نے اپنی طاقت مکمل ہونے پر خود کو دیا (Führer)"
          ],
          "passage": [
            "ہٹلر اب Chancellor تھا، مگر اس کی طاقت ابھی پکی نہ تھی۔",
            "27 فروری 1933 کو Reichstag کی عمارت کو آگ لگا دی گئی۔",
            "ہٹلر نے اس آگ کو emergency powers مانگنے کے لیے استعمال کیا۔",
            "ایک نئے قانون نے لوگوں کے حق اور آزادیاں محدود کر دیں۔",
            "کمیونسٹ رہنما گرفتار کر لیے گئے اور وہ مہم نہ چلا سکے۔",
            "اس کے بعد ہونے والے انتخاب میں نازیوں نے 288 سیٹیں جیتیں۔",
            "یہ پھر بھی اکثریت نہ تھی، اس لیے ہٹلر nationalists کے ساتھ مل گیا۔",
            "مارچ 1933 میں Reichstag نے Enabling Act منظور کر لیا۔",
            "اس نے ہٹلر کو Reichstag کی منظوری کے بغیر قانون بنانے دیا۔",
            "اس نے دوسری جماعتوں پر پابندی لگا دی، اور جرمنی one-party state بن گیا۔",
            "جون 1934 میں SS نے اُن تقریباً 400 نازیوں کو قتل کر دیا جو اس کے مخالف تھے۔",
            "اگست 1934 میں صدر ہنڈنبرگ (Hindenburg) مر گیا۔",
            "ہٹلر نے خود کو Führer قرار دے دیا، اور اب اس کی طاقت مکمل تھی۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Using democracy to destroy democracy",
          paragraphs: [
            "Hitler and the Nazis hated democracy and the free, open society it had created in Germany. Their first plan had been to take power by force, but that plan collapsed with the Munich Putsch of 1923 and sent Hitler to prison. After 1923 he changed strategy and set about turning the Nazi Party into an electable party instead.",
            "The plan from then on was the one your lesson puts in a single sentence: win power by election, and then pull German democracy down from within. That is why the Nazis fought elections they privately despised, and why Hitler accepted an appointment rather than seizing the government.",
            "By the start of 1933 the Nazis had become so popular, and the other parties so unpopular, that Germany's political leaders felt they had no choice but to let Hitler in. The President did not want him as Chancellor and had no other options left after years of failure since 1929. Hitler took the post, and began dismantling German democracy almost at once."
          ],
          tip: "The phrase to remember is from the inside. Hitler did not overthrow German democracy; he was invited into it and then took it apart."
        },
        {
          heading: "The Reichstag Fire, February 1933",
          paragraphs: [
            "On 27 February 1933 the Reichstag building was set on fire. A Dutch communist named van der Lubbe was caught in the burning building. Hitler used the fire to argue that the country faced a communist plot, and persuaded the parliament to pass an emergency law restricting personal rights and freedoms.",
            "That law let him arrest many communist leaders, which stopped them campaigning in the election days later. The results of the Reichstag Fire of February 1933 show up immediately in the voting: 44 per cent of voters chose the Nazis, who won 288 seats. Even so, that was still not an overall majority, so Hitler had to join with the nationalists to make one.",
            "Notice how the method works. Hitler did not need to break the law to attack his opponents; he used a crisis to have the law changed, and then used the new law. The SA, the Nazis' own uniformed force, intimidated the remaining parties. The pillars of democracy were being removed one at a time, by legal means."
          ],
          tip: "An exam favourite: the fire did not make Hitler a dictator. It removed his strongest opponents from the election campaign, which made the next step possible."
        },
        {
          heading: "The Enabling Act, March 1933",
          paragraphs: [
            "With the communist deputies banned and the other parties intimidated, the Reichstag voted to give Hitler the right to make laws without its approval for four years. The Enabling Act of March 1933 was, as your lesson says, arguably the critical event of the whole period.",
            "Think about what it actually did. It gave Hitler absolute power to make laws, which let him destroy all opposition to his rule, and it removed the Reichstag itself as a source of opposition, because its approval was no longer needed. He used that power to ban all the other political parties, and Germany became a one-party state.",
            "Compare this with chapter 1. Elections no longer mattered, because only one party could stand. There was no opposition left to argue back. Rights had already been restricted by the emergency law. And the separation of powers had gone, because the man who led the government now also made the laws."
          ],
          worked: {
            q: "The Enabling Act was passed in March 1933 and gave Hitler the power to make laws for four years. In which year was that power due to run out?",
            steps: [
              "Write down the starting year: 1933.",
              "Write down the number of years the Act granted: four.",
              "Add them: 1933 + 4.",
              "The power was due to run out in 1937. Note that it did not simply end then: a dictator who makes the laws can renew his own powers."
            ],
            answer: "1937",
            checks: [{ expr: "1933 + 4", value: 1937, tol: 0 }]
          },
          tip: "If you can only remember one date from this chapter, remember March 1933. It is the moment lawmaking left parliament and moved into one man's hands."
        },
        {
          heading: "The Night of the Long Knives, and the title of Führer",
          paragraphs: [
            "Hitler's last two rivals were inside his own party and inside the army. Many Nazis were demanding that the party carry out its socialist promises and take over the armed forces. Hitler could not afford to annoy either the businessmen who funded him or the generals he needed, so he destroyed the demand instead of meeting it.",
            "On the Night of the Long Knives in June 1934, the SS, Hitler's personal bodyguard, murdered around 400 members of the Nazi Party. This destroyed all opposition to Hitler within the party and handed enormous power to the SS. It also showed the rest of the world what sort of ruler Germany now had.",
            "Then, on 19 August 1934, President Hindenburg died. Hitler declared himself Führer in August 1934, taking the roles of president, chancellor and head of the army together. Every soldier, sailor and airman was then made to swear loyalty to Hitler in person rather than to the country. From that point his power was unlimited and absolute, and there was no one left who could challenge it."
          ],
          tip: "Learn the sequence as a removal of rivals: communists in February, parliament in March, the party in June, the army in August."
        }
      ],
      gate: [
        { kind: "mcq", q: "What happened on 27 February 1933?", options: ["The Reichstag building, where the German parliament met, was set on fire", "Hitler was appointed Chancellor of Germany by the President", "The Reichstag voted to let Hitler make laws on his own", "The SS murdered the Nazis who had turned against Hitler"], answer: 0, why: "The Reichstag Fire was the crisis Hitler used to demand emergency powers and arrest his communist opponents.",
          feedback: [
            "",
            "Hitler had already been Chancellor for a month by then; he took the post in January 1933. The February event was the fire at the Reichstag building.",
            "That is the Enabling Act, and it came in March 1933, a few weeks later. The fire is what made it possible by removing the communist deputies.",
            "That is the Night of the Long Knives, which came more than a year later, in June 1934. February 1933 is the fire."
          ] },
        { kind: "gap", q: "The Enabling Act let Hitler make ___ without the Reichstag's approval.", answer: "laws", options: ["laws", "speeches", "arrests"], why: "The Act transferred lawmaking from parliament to Hitler, which is why historians call it the critical moment.",
          feedback: {
            "speeches": "Hitler never needed permission to make a speech, and speeches do not change what is legal. The Act handed him the power to make laws, which is far more serious.",
            "arrests": "Arrests came from the emergency law passed after the Reichstag Fire, and later from the Gestapo. The Enabling Act was about who makes the law in the first place."
          } },
        { kind: "mcq", q: "Why do historians call the Enabling Act the critical moment in the destruction of German democracy?", options: ["It gave Hitler the power to make laws alone, so he could remove every source of opposition", "It made Hitler head of the German army as well as head of the government", "It was the first Nazi law to restrict people's rights and freedoms", "It finally gave the Nazis an overall majority of the seats in the Reichstag"], answer: 0, why: "Once Hitler could make laws without the Reichstag, every other check on him could be removed by law, including the other parties.",
          feedback: [
            "",
            "Hitler became head of the army in August 1934, when Hindenburg died and he declared himself Führer. The Enabling Act, more than a year earlier, was about lawmaking.",
            "The first law restricting rights and freedoms was the emergency law passed after the Reichstag Fire in February 1933. The Enabling Act went further and moved lawmaking itself.",
            "The Nazis never won an overall majority in a Reichstag election: 288 seats in March 1933 was not enough, which is why Hitler joined with the nationalists."
          ] }
      ],
      modules: [
        {
          title: "The creation of a dictatorship, 1933 to 1934",
          task: {
            kind: "order",
            q: "Put these five steps in the creation of the Nazi dictatorship in the order they happened.",
            items: [
              "Hitler is appointed Chancellor of Germany (January 1933)",
              "The Reichstag Fire, and the election that follows (February 1933)",
              "The Enabling Act lets Hitler make laws alone (March 1933)",
              "The Night of the Long Knives destroys opposition inside the party (June 1934)",
              "Hindenburg dies and Hitler declares himself Führer (August 1934)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Each step carries its month and year, so sort by year first.",
                "Within 1933, put the months in calendar order: January, February, March.",
                "Within 1934, June comes before August.",
                "Check the logic: Hitler has to be in office before he can use a crisis, and the crisis has to come before the law it justifies."
              ],
              example: {
                q: "Put these steps in order: the match is struck (step two); the kindling catches (step three); the fire is laid (step one).",
                steps: ["Nothing can burn until the fire is laid.", "The match is struck next.", "The kindling catches last."],
                answer: "The fire is laid; the match is struck; the kindling catches."
              }
            },
            core: { hint: "Three steps are in 1933 and two in 1934. Sort by year, then by month, then check the story makes sense." },
            stretch: { extend: "Choose the step you think was the pivotal moment in the destruction of German democracy, and explain why you chose it rather than the others." }
          },
          explain: "Say, in one sentence, why the February step had to come before the March one.",
          why: "Hitler was appointed Chancellor in January 1933; the Reichstag Fire in February gave him the emergency powers to arrest communist deputies; the Enabling Act in March moved lawmaking to him; the Night of the Long Knives in June 1934 removed opposition inside the party; and in August 1934 Hindenburg's death let him take the title of Führer."
        },
        {
          title: "How long did the Enabling Act grant?",
          task: {
            kind: "numeric",
            q: "The Enabling Act of March 1933 let Hitler make laws without the Reichstag's approval for a set period. For how many years did it grant him that power?",
            answer: 4,
            check: "1937 - 1933",
            tolerance: 0,
            units: "years",
            why: "The Reichstag voted to give Hitler the right to make laws without its approval for four years, which would have run to 1937.",
            misconceptions: [
              { answer: 1933, check: "1929 + 4", says: "You have given the year the Act was passed rather than the number of years it granted. Read the question again: it asks how long, not when." },
              { answer: 1, check: "1934 - 1933", says: "You have found the gap between the two years named in this chapter, 1933 and 1934. The Act itself granted a longer period than that." },
              { answer: 2, check: "1934 - 1933 + 1", says: "You have counted the two years named on the dates in this chapter rather than the period the Act granted. Go back to the wording of the vote." }
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the sentence in section 3 that describes what the Reichstag voted for.",
                "It names a number of years, written as a word, not a figure.",
                "Write that number as a figure.",
                "Check it against the worked example: starting in 1933, the power would run out in 1937."
              ],
              example: {
                q: "A law was passed in 1707 and was due to run until 1719. For how many years did it run?",
                steps: ["Write down the two years: 1707 and 1719.", "Subtract the earlier from the later: 1719 − 1707.", "The law ran for 12 years."],
                answer: "12",
                checks: [{ expr: "1719 - 1707", value: 12, tol: 0 }]
              }
            },
            core: { hint: "The answer is a small whole number of years, and the worked example in section 3 uses it to reach 1937." },
            stretch: { extend: "Explain why the time limit in the Act turned out to mean very little once Hitler could make laws on his own." }
          },
          contexts: [
            { label: "A Reichstag deputy", q: "A deputy who voted for the Enabling Act of March 1933 tells himself the powers are temporary. For how many years did the Act grant Hitler the power to make laws alone?", check: "1937 - 1933" },
            { label: "A newspaper headline", q: "A German newspaper reports the vote and prints the time limit in its headline. For how many years did the Enabling Act grant Hitler the power to make laws alone?", check: "1937 - 1933" },
            { label: "A lawyer's note", q: "A lawyer writes a note in March 1933 on when the government's new lawmaking power is due to lapse. For how many years did the Enabling Act grant Hitler the power to make laws alone?", check: "1937 - 1933" }
          ],
          explain: "Say, in one sentence, why a time limit on a dictator's powers is worth very little.",
          why: "The Reichstag voted the power for four years, so it was due to lapse in 1937. In practice the limit meant nothing, because the man who could now make laws without parliament could also renew his own authority."
        },
        {
          title: "Turning a fire into power",
          task: {
            kind: "written",
            q: "Explain how Hitler used the Reichstag Fire to increase his power. Write one paragraph of four to six sentences, and finish by saying how much difference the fire made.",
            criteria: [
              "I say what happened at the Reichstag on 27 February 1933.",
              "I explain what Hitler did with the fire, naming the emergency law and the arrests.",
              "I use specific evidence from the election that followed, such as the seats won.",
              "I judge how much difference the fire made, using the word because."
            ],
            model: "On 27 February 1933 the Reichstag building, where the German parliament met, was set on fire, and a Dutch communist was caught inside it. Hitler used the fire to argue that Germany faced a communist plot, and persuaded the parliament to pass an emergency law restricting people's rights and freedoms. That law let him arrest many communist leaders, who were then unable to campaign in the election held days later, and the Nazis won 288 seats. The fire mattered enormously, because it removed Hitler's strongest opponents from the Reichstag at exactly the moment he needed their seats emptied. Without it the Enabling Act of March 1933 would have been far harder to pass, which is why historians treat the fire as the opening of the whole sequence rather than as an accident."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: say what happened and when, using the date 27 February 1933.",
                "Sentence 2: say what Hitler claimed the fire proved, and what law he obtained.",
                "Sentence 3: say who was arrested and what that did to the election, and give the seat figure.",
                "Sentences 4 and 5: judge the importance, using because, and link forward to the Enabling Act."
              ],
              example: {
                q: "Explain how a captain might use a storm to win an argument about buying a new ship.",
                steps: ["Say what happened: the storm damaged the old ship.", "Say what the captain claimed it proved: the ship is no longer safe.", "Judge the importance: the storm did not create the argument, but it made the answer feel urgent."],
                answer: "The storm became evidence for a case the captain already wanted to make, and urgency did the rest."
              }
            },
            core: { hint: "Three steps: the fire, the emergency law, the arrests and the election. Then your judgement on how much difference it made." },
            stretch: { extend: "Historians still argue about who started the fire. Explain why the answer to that question changes less about Hitler's rise than people often expect." }
          },
          explain: "Say, in one sentence, what the fire gave Hitler that he did not already have.",
          why: "A strong answer follows the chain: fire, claimed plot, emergency law, arrests, a damaged opposition at the election. The best answers judge its importance by linking it forward to the Enabling Act rather than stopping at the arrests."
        }
      ]
    },

    /* ───────────── 4 · how the Nazis kept control ───────────── */
    {
      key: "nazi-control", n: 4, title: "How the Nazis kept control of Germany",
      lead: "Terror, a police state, censorship and propaganda, and the Nazi hold on young people, women and workers: the machinery that kept Hitler in power once democracy had gone.",
      covers: [3],
      pretext: {
        words: [
          { word: "Gestapo", means: "the secret police of Nazi Germany", sentence: "The Gestapo did not need proof to arrest somebody." },
          { word: "informer", means: "someone who reports other people secretly to the authorities", sentence: "A single informer's tip-off was enough to start a Gestapo investigation." },
          { word: "censorship", means: "deciding what may not be printed, said, shown or taught", sentence: "Censorship removed criticism of the government from every newspaper." },
          { word: "propaganda", means: "information chosen and shaped to make people believe what the government wants", sentence: "Nazi propaganda showed Hitler as the saviour of Germany." },
          { word: "indoctrinate", means: "to push a set of beliefs into people until they accept them without question", sentence: "Youth organisations were used to indoctrinate children." }
        ],
        passage: [
          "A dictatorship has to hold on to power once it has taken it.",
          "The Nazis used terror, the law and the schools together.",
          "The Gestapo was the secret police of Nazi Germany.",
          "It used informers, surveillance and house searches to find enemies.",
          "The SS ran concentration camps for the regime's opponents.",
          "The courts no longer protected people from their own government.",
          "Censorship decided what newspapers, books and films could say.",
          "Propaganda then supplied what the Nazis wanted people to believe.",
          "Children joined Nazi youth organisations after school.",
          "They were taught to put the party before their own thinking.",
          "Women were told that their place was in the home.",
          "Workers were offered jobs, but their trade unions were closed.",
          "Step by step, every part of life came under Nazi control."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الشرطة السرّية في ألمانيا النازية (Gestapo)",
            "من يُبلّغ السلطات عن الناس سرًّا (informer)",
            "تحديد ما لا يجوز طبعه أو قوله أو عرضه أو تعليمه (censorship)",
            "معلومات مُنتقاة ومُصاغة لتجعل الناس يعتقدون ما تريده الحكومة (propaganda)",
            "أن تدفع مجموعة من المعتقدات في الناس حتى يقبلوها بغير سؤال (indoctrinate)"
          ],
          "passage": [
            "على الدكتاتورية أن تتمسّك بالسلطة متى أخذتها.",
            "واستخدم النازيون الترويع والقانون والمدارس معًا.",
            "وكان الغستابو (Gestapo) هو الشرطة السرّية في ألمانيا النازية.",
            "وكان يستخدم المُبلّغين والمراقبة وتفتيش البيوت ليجد الأعداء.",
            "وكانت الإس إس تُدير معسكرات الاعتقال لمعارضي النظام.",
            "ولم تكن المحاكم تحمي الناس من حكومتهم هم بعد ذلك.",
            "والرقابة كانت تحدّد ما تستطيع الصحف والكتب والأفلام أن تقوله.",
            "ثم كانت الدعاية توفّر ما يريد النازيون أن يعتقده الناس.",
            "وكان الأطفال ينضمّون إلى منظّمات النازيين الشبابية بعد المدرسة.",
            "وكانوا يُعلَّمون أن يقدّموا الحزب على تفكيرهم هم.",
            "وقيل للنساء إنّ مكانهنّ في البيت.",
            "وعُرض على العمّال عمل، ولكنّ نقاباتهم أُغلقت.",
            "وخطوةً خطوةً صار كلّ جزء من الحياة تحت سيطرة النازيين."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "tajna policja Niemiec nazistowskich (Gestapo)",
            "ktoś, kto potajemnie donosi władzom na innych ludzi (informer)",
            "decydowanie o tym, czego nie wolno wydrukować, powiedzieć, pokazać ani uczyć (censorship)",
            "informacje wybrane i ułożone tak, żeby ludzie wierzyli w to, czego chce rząd (propaganda)",
            "wtłaczać ludziom zestaw przekonań, aż przyjmą je bez pytania (indoctrinate)"
          ],
          "passage": [
            "Dyktatura musi utrzymać władzę, kiedy już ją zabrała.",
            "Naziści używali razem terroru, prawa i szkół.",
            "Gestapo było tajną policją Niemiec nazistowskich.",
            "Używało donosicieli, obserwacji i przeszukań domów, żeby znaleźć wrogów.",
            "SS prowadziło obozy koncentracyjne dla przeciwników reżimu.",
            "Sądy już nie chroniły ludzi przed ich własnym rządem.",
            "Cenzura decydowała, co mogą mówić gazety, książki i filmy.",
            "Propaganda dostarczała potem tego, w co naziści chcieli, żeby ludzie wierzyli.",
            "Dzieci po szkole wstępowały do nazistowskich organizacji młodzieżowych.",
            "Uczono je stawiać partię przed własnym myśleniem.",
            "Kobietom mówiono, że ich miejsce jest w domu.",
            "Robotnikom dawano pracę, ale ich związki zawodowe zamknięto.",
            "Krok po kroku każda część życia znalazła się pod nazistowską kontrolą."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a polícia secreta da Alemanha nazi/nazista (Gestapo)",
            "alguém que denuncia outras pessoas em segredo às autoridades (informer, informador)",
            "decidir o que não pode ser impresso, dito, mostrado ou ensinado (censorship, censura)",
            "informação escolhida e moldada para fazer as pessoas acreditarem naquilo que o governo quer (propaganda)",
            "meter um conjunto de crenças nas pessoas até elas as aceitarem sem questionar (indoctrinate, doutrinar)"
          ],
          "passage": [
            "Uma ditadura tem de se agarrar ao poder depois de o tomar.",
            "Os nazis/nazistas usaram o terror, a lei e as escolas ao mesmo tempo.",
            "A Gestapo era a polícia secreta da Alemanha nazi/nazista.",
            "Usava informadores, vigilância e buscas às casas para encontrar inimigos.",
            "As SS dirigiam campos de concentração para os opositores do regime.",
            "Os tribunais já não protegiam as pessoas do seu próprio governo.",
            "A censura decidia o que os jornais, os livros e os filmes podiam dizer.",
            "Depois a propaganda fornecia aquilo em que os nazis/nazistas queriam que as pessoas acreditassem.",
            "As crianças entravam em organizações de juventude nazis/nazistas depois das aulas.",
            "Eram ensinadas a pôr o partido à frente do seu próprio pensamento.",
            "Às mulheres dizia-se que o seu lugar era em casa.",
            "Aos trabalhadores ofereciam-se empregos, mas os seus sindicatos foram fechados.",
            "Passo a passo, todas as partes da vida ficaram sob controlo/controle nazi/nazista."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "booliiska sirdoonka ee Jarmalkii Nazi",
            "qof si qarsoodi ah dad kale u sheego maamulka",
            "go'aaminta waxa aan la daabici karin, la sheegi karin, la muujin karin ama la bari karin",
            "macluumaad la doortay oo la qaabeeyay si dadku u rumaystaan waxa dowladdu rabto",
            "inaad caqiido dadka ku riixdo ilaa ay su'aal la'aan aqbalaan"
          ],
          "passage": [
            "Kali-talis waa inuu awoodda sii hayaa marka uu qaato.",
            "Nazis-ku waxay isku mar isticmaaleen argagax, sharciga iyo iskuullada.",
            "Gestapo wuxuu ahaa booliiska sirdoonka ee Jarmalkii Nazi.",
            "Wuxuu isticmaalay informers, raadraac iyo baaritaanno guri si uu cadaw u helo.",
            "SS-ku waxay maamuleen concentration camps oo loogu talagalay kuwa nidaamka ka soo horjeeday.",
            "Maxkamadihii dadka ma sii ilaalin dowladdooda.",
            "Faafreebku wuxuu go'aamiyay waxa wargeysyada, buugaagta iyo filimmadu sheegi karaan.",
            "Propaganda kadibna waxay bixisay waxa Nazis-ku rabeen in dadku rumaystaan.",
            "Carruurtu waxay ku biireen ururrada dhallinyarada Nazi iskuulka kadib.",
            "Waxaa la baray inay xisbiga ka hor mariyaan fikirkooda.",
            "Haweenka waxaa loo sheegay in meeshooda tahay guriga.",
            "Shaqaalaha waxaa loo bixiyay shaqooyin, laakiin ururradooda shaqaalaha waa la xidhay.",
            "Tallaabo tallaabo, qayb kasta oo nolosha waxay xukunka Nazi hoos timid."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "таємна поліція нацистської Німеччини (Gestapo)",
            "той, хто потай доносить на інших людей владі (informer)",
            "вирішування того, що не можна друкувати, казати, показувати або викладати (censorship)",
            "інформація, підібрана і сформована так, щоб люди вірили в те, чого хоче уряд (propaganda)",
            "вштовхувати людям набір переконань, аж поки вони приймуть їх без запитань (indoctrinate)"
          ],
          "passage": [
            "Диктатура мусить утримати владу, щойно вона її взяла.",
            "Нацисти використовували терор, закон і школи разом.",
            "Гестапо було таємною поліцією нацистської Німеччини.",
            "Воно використовувало донощиків, спостереження й обшуки будинків, щоб знаходити ворогів.",
            "СС керували концентраційними таборами для противників режиму.",
            "Суди більше не захищали людей від їхнього власного уряду.",
            "Цензура вирішувала, що можуть казати газети, книги й фільми.",
            "А пропаганда постачала те, у що нацисти хотіли, щоб люди вірили.",
            "Діти після школи вступали до нацистських молодіжних організацій.",
            "Їх учили ставити партію вище за власне мислення.",
            "Жінкам казали, що їхнє місце вдома.",
            "Робітникам пропонували роботу, але їхні профспілки закрили.",
            "Крок за кроком кожна частина життя потрапила під нацистський контроль."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "نازی جرمنی کی خفیہ پولیس (Gestapo)",
            "وہ شخص جو دوسروں کی خفیہ طور پر حکام کو خبر دے (informer)",
            "یہ طے کرنا کہ کیا چھاپا، کہا، دکھایا یا پڑھایا نہیں جا سکتا (censorship)",
            "وہ معلومات جو چُن کر اور ڈھال کر دی جائیں تاکہ لوگ وہی مانیں جو حکومت چاہتی ہے (propaganda)",
            "عقیدوں کا ایک مجموعہ لوگوں کے ذہن میں اتنا بٹھا دینا کہ وہ بغیر سوال اسے مان لیں (indoctrinate)"
          ],
          "passage": [
            "dictatorship کو اقتدار لینے کے بعد اسے سنبھالے رکھنا بھی پڑتا ہے۔",
            "نازیوں نے خوف، قانون اور سکولوں، تینوں کو ساتھ استعمال کیا۔",
            "Gestapo نازی جرمنی کی خفیہ پولیس تھی۔",
            "یہ دشمن ڈھونڈنے کے لیے informers، نگرانی اور گھروں کی تلاشی استعمال کرتی تھی۔",
            "SS حکومت کے مخالفوں کے لیے concentration camps چلاتی تھی۔",
            "عدالتیں اب لوگوں کو ان کی اپنی حکومت سے نہیں بچاتی تھیں۔",
            "censorship طے کرتی تھی کہ اخبار، کتابیں اور فلمیں کیا کہہ سکتی ہیں۔",
            "پھر propaganda وہ سب فراہم کرتی تھی جو نازی لوگوں سے منوانا چاہتے تھے۔",
            "بچے سکول کے بعد نازی نوجوان تنظیموں میں جاتے تھے۔",
            "انھیں سکھایا جاتا تھا کہ جماعت کو اپنی سوچ سے پہلے رکھیں۔",
            "عورتوں سے کہا گیا کہ ان کی جگہ گھر ہے۔",
            "مزدوروں کو روزگار دیا گیا، مگر ان کی مزدور یونینیں بند کر دی گئیں۔",
            "قدم بہ قدم، زندگی کا ہر حصہ نازی قابو میں آ گیا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Terror: the SS and the courts",
          paragraphs: [
            "Your lesson's overview of the Nazi dictatorship opens with terror, and puts two things side by side: the SS, and the courts. The pairing is deliberate. Terror on its own is just violence; terror becomes a system of government when the courts stop standing in its way.",
            "The SS had begun as Hitler's personal bodyguard and grew enormously after the Night of the Long Knives in June 1934. It ran the concentration camps, which held political opponents of the regime, and it answered to Hitler rather than to any law. The ordinary police and the courts, meanwhile, were brought into line: judges who decided cases against the government did not keep their posts for long.",
            "Put that beside the four pillars from chapter 1. The separation of powers is designed so that a court can say no to a government. Once judges served the regime, there was no legal route left for anyone who wanted to challenge it. Terror and the collapse of the courts worked as one method, not two."
          ],
          tip: "When you write about Nazi terror, mention the courts in the same sentence. The marks are in the link, not in the list."
        },
        {
          heading: "The police state: the Gestapo",
          paragraphs: [
            "The Gestapo was the secret police of Nazi Germany, and it was responsible for maintaining control and for enforcing the party's policies and ideology. Your reading lists its methods: informers, who were ordinary people reporting on their neighbours; surveillance; house searches; and brutal interrogation of those it arrested. It did not need hard evidence to act, which is the point of a secret police force.",
            "The Gestapo did not work alone. It was part of a regime that set out to reach into every part of everyday life in Germany, and it worked with the army and with other Nazi organisations. It also organised the deportation of Jewish people and of other groups the Nazis targeted to ghettos and camps. The Gestapo's targets included political opponents, religious groups, people the Nazis called criminals, disabled people, gay men and, above all, Jewish people. What happened to those groups is the subject of your Year 8 Holocaust unit; this chapter stays with the question of how the police state kept Hitler in power.",
            "Ask yourself why a secret police force matters so much to a dictatorship. In chapter 1 you learned that a democracy protects people's right to say what they think. A police state does not need to arrest everybody; it only needs people to believe that anybody might be reported. Fear does the rest of the work, and opposition never gets organised in the first place."
          ],
          worked: {
            q: "What can you infer from the reading about the Gestapo? Give one inference and support it.",
            steps: [
              "An inference is a conclusion you draw from a source, not something the source states directly.",
              "Start with your conclusion: I can infer from the reading that ordinary Germans could not be sure who was listening.",
              "Support it: I know this because the reading says the Gestapo used informers and surveillance, and did not need hard evidence to act.",
              "Finish by saying what this meant: if a neighbour's word was enough, then people had to police their own conversations."
            ],
            answer: "Inference, then support, then consequence: Germans could not know who was listening, because informers and surveillance were the Gestapo's main tools and no proof was required, so people silenced themselves."
          },
          tip: "Inference sentences have two halves: what you can tell, and how the source lets you tell it. Never give the first half on its own."
        },
        {
          heading: "Censorship and propaganda",
          paragraphs: [
            "Censorship and propaganda are the next theme on your lesson's overview, and they are a pair in the same way as the SS and the courts. Censorship is the taking away: deciding what newspapers, books, films and lessons were not allowed to say. Propaganda is the filling in: supplying the messages, images and explanations the Nazis wanted people to accept.",
            "Together they close off the comparison a person needs in order to disagree. If every newspaper carries the same story, and no newspaper carries the other one, then a reader who doubts the government has nothing to check it against. That is why the media and the press appeared on your chapter 1 list of the levers a totalitarian state pulls.",
            "It is worth being careful here as historians. We study what Nazi propaganda claimed and what it was for; we do not repeat its slogans as though they described the world. When you write about propaganda, describe what it was trying to make people feel and why that was useful to the regime."
          ],
          tip: "Censorship removes; propaganda replaces. A full answer names both halves and says what the regime gained from each."
        },
        {
          heading: "Young people, women and workers",
          paragraphs: [
            "The last three themes on your lesson's overview are young people, women and family life, and life for workers. The Nazis used children's organisations, the Hitler Youth for boys and the League of German Girls for girls, to indoctrinate young people with Nazi ideas. The Hitler Youth concentrated on sport, physical fitness and military training; the League of German Girls on camping and on instruction in Nazi beliefs. Both were anti-intellectual, and both reduced the influence of ordinary education on children.",
            "For women, the Nazis pushed a traditional role: a woman's place was in the home, and her concerns were the kitchen, the children and the church. For workers, the bargain was jobs and order in exchange for their independence, and independent trade unions were closed down.",
            "Notice the pattern across all three groups. Each got something it wanted, and each gave up the means of organising against the regime. That is how a totalitarian state becomes stable: not only through fear, but by making the loss of freedom feel like a fair exchange."
          ],
          tip: "A strong judgement names both sides of the exchange: what a group gained, and what it gave up."
        }
      ],
      gate: [
        { kind: "mcq", q: "What was the Gestapo?", options: ["The secret police of Nazi Germany, who hunted down the regime's opponents", "The Nazi Party's uniformed force, which marched at rallies and intimidated voters", "The organisation that ran Nazi youth activities for boys", "A committee of the Reichstag that checked new laws before they were passed"], answer: 0, why: "The Gestapo was the secret police, responsible for maintaining control and enforcing Nazi policy, using informers, surveillance and house searches.",
          feedback: [
            "",
            "That describes the SA, the Nazis' uniformed force, which intimidated the other parties at the 1933 election. The Gestapo worked in secret rather than in uniform.",
            "That describes the Hitler Youth, which trained boys in sport and military skills. The Gestapo was the secret police, and its targets were adults as well as children.",
            "The Reichstag had lost all power to check laws after the Enabling Act of March 1933. The Gestapo was a police force, not a committee."
          ] },
        { kind: "gap", q: "To ___ people is to push a set of beliefs into them until they accept them without question.", answer: "indoctrinate", options: ["indoctrinate", "interrogate", "intimidate"], why: "Indoctrinate is your lesson's key word for what the Nazi youth organisations did to children.",
          feedback: {
            "interrogate": "To interrogate is to question somebody under pressure, which is what the Gestapo did to people it arrested. Teaching children to accept beliefs without question is indoctrination.",
            "intimidate": "To intimidate is to frighten somebody into obedience, as the SA did to voters. Indoctrination works on what people believe, not just on what they dare to do."
          } },
        { kind: "mcq", q: "What is the difference between censorship and propaganda?", options: ["Censorship decides what may not be said; propaganda supplies what the government wants said instead", "Censorship is used in wartime, while propaganda is used in peacetime", "Censorship applies to newspapers, while propaganda applies only to posters", "Censorship is carried out by the secret police, while propaganda is carried out by the courts"], answer: 0, why: "Censorship is the taking away and propaganda is the filling in. Together they leave a reader with nothing to check the government against.",
          feedback: [
            "",
            "Both were used throughout the Nazi dictatorship, in peace and in war. The real difference is that one removes messages and the other supplies them.",
            "Both reached every kind of medium: newspapers, books, films, radio and lessons. The difference is between removing a message and providing one.",
            "Neither was the work of the courts, and the Gestapo was not a publishing house. Think about what each one does to the messages people receive."
          ] }
      ],
      modules: [
        {
          title: "The machinery of control",
          task: {
            kind: "match",
            q: "Match each part of the Nazi system of control to what it did.",
            pairs: [
              ["The Gestapo", "The secret police, who used informers, surveillance and house searches"],
              ["The SS", "Hitler's own armed force, which ran the concentration camps"],
              ["Censorship", "Deciding what newspapers, books and films were not allowed to say"],
              ["Propaganda", "Supplying the messages and images the regime wanted people to believe"],
              ["The Hitler Youth", "Training boys in sport, fitness and military skills outside school"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the two that are organisations of armed men: one worked in secret, one ran the camps.",
                "Then take the pair that deal with information: one removes it, one supplies it.",
                "The one left over is about children rather than adults.",
                "Check each pairing by asking: who did this affect, and how?"
              ],
              example: {
                q: "Match each part of a school's routine to what it does: the register, the timetable, the fire drill.",
                steps: ["The register records who is present.", "The timetable says what happens when.", "The fire drill practises what to do in an emergency."],
                answer: "Register to recording attendance; timetable to organising the day; fire drill to practising for an emergency."
              }
            },
            core: { hint: "Two are armed organisations, two are about information, and one is about children." },
            stretch: { extend: "Rank these five from most to least important in keeping Hitler in power, and justify your top choice in two sentences." }
          },
          explain: "Say, in one sentence, which two of these five worked best together, and why.",
          why: "The Gestapo found opponents, the SS held and punished them, censorship removed criticism, propaganda replaced it, and the Hitler Youth shaped the next generation before it could object."
        },
        {
          title: "Controlling what young people believed",
          task: {
            kind: "mcq",
            q: "The Nazis controlled different groups in different ways. Which of these shows the Nazis trying to control what young people believed?",
            options: [
              "Boys and girls joined Nazi youth organisations after school, where the party chose what they were taught",
              "The Gestapo encouraged neighbours to report what adults said to each other in private",
              "Newspapers were censored, so that criticism of the government never appeared in print",
              "Workers were offered jobs on condition that their independent trade unions were closed"
            ],
            answer: 0,
            why: "The Hitler Youth and the League of German Girls were the Nazis' way of reaching children directly, so that Nazi beliefs arrived before anyone had the habit of questioning them.",
            feedback: [
              "",
              "Informers were how the Gestapo controlled adults, and it worked on what people dared to say rather than on what children believed. Look for the option about organisations children joined.",
              "Censorship of newspapers controlled the whole adult population's reading. The question asks specifically about young people, which points to the youth organisations.",
              "The deal over trade unions controlled workers, and it was about organisation rather than belief. Indoctrination of children happened in the youth organisations."
            ]
          },
          levels: {
            support: {
              steps: [
                "Read each option and name the group it affects: children, adults, newspaper readers, workers.",
                "The question asks only about young people.",
                "Then ask whether the option is about belief or about behaviour.",
                "Youth organisations that chose what children were taught are about belief."
              ],
              example: {
                q: "Which of these is aimed at changing what pupils believe rather than what they do: a new school rule about mobile phones, or a weekly assembly on honesty?",
                steps: ["A rule about phones changes behaviour and is enforced by sanctions.", "An assembly on honesty is trying to change what pupils think is right."],
                answer: "The weekly assembly on honesty is aimed at belief."
              }
            },
            core: { hint: "Three options affect adults: informers, censored newspapers, trade unions. One reaches children directly." },
            stretch: { extend: "Explain why a dictatorship might think indoctrinating children was a better long-term investment than frightening adults." }
          },
          contexts: [
            { label: "A family in Berlin", q: "A family in Berlin describes four changes in their lives after 1933: the children's new club, the neighbours' reports, the newspapers, and the father's union. Which of these shows the Nazis trying to control what young people believed?", why: "Three of the family's four changes land on the adults. Only the children's new club was designed to shape what the young believed." },
            { label: "A teacher's diary", q: "A teacher lists four ways the regime has reached into her pupils' lives and their parents' lives. Which of these shows the Nazis trying to control what young people believed?", why: "The teacher's list mixes controls aimed at adults with the one organisation that taught children directly." },
            { label: "Sorting by group", q: "You are sorting Nazi methods of control by the group each one targeted: children, adults, readers, workers. Which of these shows the Nazis trying to control what young people believed?", why: "Sorting by group settles it at once: only one of the four is aimed at children." }
          ],
          explain: "Say, in one sentence, why reaching children mattered so much to the Nazi regime.",
          why: "Informers, censorship and the trade-union bargain all controlled adults. Only the youth organisations reached children, and they were deliberately anti-intellectual, so that Nazi beliefs arrived before the habit of questioning them had formed."
        },
        {
          title: "Two features of the police state",
          task: {
            kind: "written",
            q: "Explain two features of the Nazi police state, and say how each one helped Hitler keep control. Write two short paragraphs, one feature each.",
            criteria: [
              "I name two clearly different features of the Nazi police state.",
              "I give specific evidence for each one from this chapter.",
              "I explain how each feature helped Hitler keep control, using the words this meant that.",
              "I link at least one feature back to a pillar of democracy from chapter 1."
            ],
            model: "One feature of the Nazi police state was the Gestapo, the secret police. It used informers, surveillance and house searches, and it did not need hard evidence before it acted, so a neighbour's word was enough to start an investigation. This meant that people policed their own conversations, and opposition could never get organised, because nobody could be sure who was listening. A second feature was the loss of an independent legal system. The SS answered to Hitler rather than to any law, it ran the concentration camps that held political opponents, and judges who ruled against the government did not keep their posts. This meant that the separation of powers from chapter 1 had gone: there was no court left that could tell the government it had broken the law, so terror could operate without any legal limit at all."
          },
          levels: {
            support: {
              steps: [
                "Choose two features from different parts of the chapter: the Gestapo, the SS and the camps, the courts, or informers.",
                "Paragraph 1, sentence 1: One feature of the Nazi police state was…",
                "Paragraph 1, sentence 2: give your evidence. Sentence 3: This meant that…",
                "Repeat for the second feature, and in one of the two paragraphs name a pillar of democracy that the feature destroyed."
              ],
              example: {
                q: "Explain two features of a school's behaviour system and how each helps keep order.",
                steps: ["Name the first feature: a clear set of rules displayed in every room.", "Explain the effect: pupils know in advance what counts as acceptable, so fewer arguments start.", "Name the second feature and explain its effect in the same way."],
                answer: "Two features, each with evidence and a this-meant-that sentence: displayed rules reduce arguments; consistent sanctions make the rules believable."
              }
            },
            core: { hint: "Two features, each with its own evidence and its own this meant that sentence. One of them should connect to the separation of powers." },
            stretch: { extend: "Decide which of your two features would have been harder for the regime to do without, and defend your choice in two sentences." }
          },
          explain: "Say, in one sentence, how your two features depended on each other.",
          why: "A strong answer treats a feature as something specific, with evidence, and then explains the effect on people's behaviour. The best answers notice that the Gestapo's power rested on the courts no longer being able to check it."
        }
      ]
    },

    /* ───────────── 5 · Stalin's rise to power in the USSR ───────────── */
    {
      key: "stalin-rise", n: 5, title: "How Stalin rose to power in the USSR",
      lead: "Russia before the revolution, the communist state Lenin built, the struggle that followed his death, and what one famous source says about the man who won it.",
      covers: [4],
      pretext: {
        words: [
          { word: "Tsar", means: "the king who ruled Russia with complete power before 1917", sentence: "The Tsar could order anything, and the people had to obey." },
          { word: "USSR", means: "the Union of Soviet Socialist Republics: many countries ruled together, with Russia the largest", sentence: "Lenin turned the Russian Empire into the USSR." },
          { word: "communism", means: "the belief that everyone should be equal and that wealth should be held for the workers", sentence: "Communism promised the peasants and workers a fairer country." },
          { word: "Politburo", means: "the small group of leading politicians that ran the Communist Party", sentence: "Lenin set up a Politburo to govern the USSR." },
          { word: "exile", means: "being forced to live outside your own country", sentence: "Trotsky lost the power struggle and was driven into exile." }
        ],
        passage: [
          "For over 300 years Russia was ruled by a king called the Tsar.",
          "The Tsar had complete power over everyone below him.",
          "Most Russians were peasants, and they were very poor.",
          "The Tsar took Russia into the First World War in 1914.",
          "The country was not ready for a long war.",
          "Lenin and the Bolsheviks took power in October 1917.",
          "Lenin turned the Russian Empire into the USSR.",
          "It was the first communist country in the world.",
          "Lenin removed opposition and set up a totalitarian state.",
          "Lenin's health failed after 1922, and he died in 1924.",
          "Stalin and Trotsky then competed to replace him.",
          "Stalin used his own skill, and Trotsky made mistakes.",
          "By 1929 Stalin ruled the USSR alone."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الملك الذي حكم روسيا بسلطة تامّة قبل 1917 (Tsar)",
            "اتّحاد الجمهوريات الاشتراكية السوفييتية: بلدان كثيرة تُحكم معًا، وروسيا أكبرها (USSR)",
            "الاعتقاد أنّ الناس جميعًا ينبغي أن يكونوا متساوين وأنّ الثروة تُحفظ للعمّال (communism)",
            "الجماعة الصغيرة من كبار السياسيّين التي كانت تُدير الحزب الشيوعي (Politburo)",
            "أن تُرغَم على العيش خارج بلدك (exile)"
          ],
          "passage": [
            "أكثر من 300 سنة حكم روسيا ملك يُسمّى القيصر.",
            "وكان للقيصر سلطة تامّة على كلّ من تحته.",
            "ومعظم الروس كانوا فلّاحين، وكانوا فقراء جدًّا.",
            "وأدخل القيصر روسيا في الحرب العالمية الأولى في 1914.",
            "ولم يكن البلد مستعدًّا لحرب طويلة.",
            "وأخذ لينين والبلاشفة السلطة في أكتوبر 1917.",
            "وحوّل لينين الإمبراطورية الروسية إلى الاتّحاد السوفييتي (USSR).",
            "وكان أوّل بلد شيوعي في العالم.",
            "وأزال لينين المعارضة وأنشأ دولة شمولية.",
            "وتدهورت صحّة لينين بعد 1922، ومات في 1924.",
            "ثم تنافس ستالين وتروتسكي (Trotsky) ليحلّ أحدهما محلّه.",
            "واستخدم ستالين مهارته هو، وأخطأ تروتسكي.",
            "وبحلول 1929 كان ستالين يحكم الاتّحاد السوفييتي وحده."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "król, który przed 1917 rokiem rządził Rosją z całkowitą władzą (Tsar)",
            "Związek Socjalistycznych Republik Radzieckich: wiele krajów rządzonych razem, z Rosją jako największym (USSR)",
            "przekonanie, że wszyscy powinni być równi, a bogactwo należeć do robotników (communism)",
            "mała grupa czołowych polityków, która prowadziła partię komunistyczną (Politburo)",
            "przymus życia poza własnym krajem (exile)"
          ],
          "passage": [
            "Przez ponad 300 lat Rosją rządził król zwany carem.",
            "Car miał całkowitą władzę nad wszystkimi poniżej siebie.",
            "Większość Rosjan to byli chłopi i byli bardzo biedni.",
            "Car wprowadził Rosję do pierwszej wojny światowej w 1914 roku.",
            "Kraj nie był gotowy na długą wojnę.",
            "Lenin i bolszewicy przejęli władzę w październiku 1917 roku.",
            "Lenin zamienił imperium rosyjskie w USSR.",
            "Był to pierwszy kraj komunistyczny na świecie.",
            "Lenin usunął opozycję i zbudował państwo totalitarne.",
            "Zdrowie Lenina pogorszyło się po 1922 roku, a umarł w 1924 roku.",
            "Stalin i Trotsky rywalizowali potem o to, kto go zastąpi.",
            "Stalin korzystał z własnej zręczności, a Trotsky popełniał błędy.",
            "Do 1929 roku Stalin rządził USSR sam."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o rei que governou a Rússia com poder completo antes de 1917 (Tsar, czar/tsar)",
            "a União das Repúblicas Socialistas Soviéticas: muitos países governados em conjunto, sendo a Rússia o maior (USSR, URSS)",
            "a crença de que todos devem ser iguais e que a riqueza deve ser detida para os trabalhadores (communism, comunismo)",
            "o pequeno grupo de políticos principais que dirigia o Partido Comunista (Politburo)",
            "ser obrigado a viver fora do próprio país (exile, exílio)"
          ],
          "passage": [
            "Durante mais de 300 anos a Rússia foi governada por um rei chamado czar/tsar.",
            "O czar tinha poder completo sobre todos os que estavam abaixo dele.",
            "Quase todos os russos eram camponeses, e eram muito pobres.",
            "O czar levou a Rússia para a Primeira Guerra Mundial em 1914.",
            "O país não estava preparado para uma guerra longa.",
            "Lenin e os bolcheviques tomaram o poder em outubro de 1917.",
            "Lenin transformou o Império Russo na URSS.",
            "Foi o primeiro país comunista do mundo.",
            "Lenin afastou a oposição e criou um Estado totalitário.",
            "A saúde de Lenin falhou depois de 1922, e ele morreu em 1924.",
            "Stalin e Trotsky competiram então para o substituir.",
            "Stalin usou a sua própria habilidade, e Trotsky cometeu erros.",
            "Em 1929 Stalin governava a URSS sozinho."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "boqorkii Ruushka xukumay awood dhammaystiran 1917-kii ka hor",
            "Union of Soviet Socialist Republics: dalal badan oo wadajir lagu xukumay, oo Ruushku ugu weynaa",
            "caqiidada ah in qof walba sinnaado oo maalka shaqaalaha loo hayo",
            "kooxda yar ee siyaasiyiinta sare oo Xisbiga Hantiwadaagga maamulay",
            "in lagu qasbo inaad dalkaaga dibadda ku noolaato"
          ],
          "passage": [
            "In ka badan 300 sano Ruushka waxaa xukumayay boqor la yiraahdo Tsar.",
            "Tsar-ku wuxuu awood dhammaystiran ku lahaa qof kasta oo ka hooseeyay.",
            "Ruushka badidood waxay ahaayeen beeraley, aad ayayna u faqiir ahaayeen.",
            "Tsar-ku wuxuu Ruushka geliyay Dagaalkii Koowaad ee Adduunka 1914-kii.",
            "Dalku uma diyaarsanayn dagaal dheer.",
            "Lenin iyo Bolsheviks-ku waxay awoodda qaateen Oktoobar 1917-kii.",
            "Lenin wuxuu Boqortooyadii Ruushka u beddelay USSR.",
            "Waxay ahayd dalkii hantiwadaag ee ugu horreeyay dunida.",
            "Lenin wuxuu mucaaradka ka saaray oo wuxuu dhisay dowlad totalitarian ah.",
            "Caafimaadka Lenin wuu xumaaday 1922-dii ka dib, wuuna dhintay 1924-kii.",
            "Stalin iyo Trotsky kadibna waxay u tartameen inay beddelaan.",
            "Stalin wuxuu isticmaalay kartidiisa, Trotsky-na khaladaad ayuu sameeyay.",
            "1929-kii Stalin wuxuu USSR kali ahaantii xukumay."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "король, який правив Росією з повною владою до 1917 року (Tsar)",
            "Союз Радянських Соціалістичних Республік: багато країн, якими правили разом, і Росія була найбільшою (USSR)",
            "переконання, що всі мають бути рівні і що багатство має належати робітникам (communism)",
            "невелика група провідних політиків, яка керувала Комуністичною партією (Politburo)",
            "коли людину змушують жити за межами власної країни (exile)"
          ],
          "passage": [
            "Понад 300 років Росією правив король, якого називали царем.",
            "Цар мав повну владу над усіма, хто був під ним.",
            "Більшість росіян були селянами, і вони були дуже бідні.",
            "Цар завів Росію в Першу світову війну у 1914 році.",
            "Країна не була готова до довгої війни.",
            "Ленін і більшовики взяли владу в жовтні 1917 року.",
            "Ленін перетворив Російську імперію на СРСР (USSR).",
            "Це була перша комуністична країна у світі.",
            "Ленін усунув опозицію і створив тоталітарну державу.",
            "Здоров’я Леніна підупало після 1922 року, і він помер у 1924 році.",
            "Потім Сталін і Троцький змагалися за те, хто його замінить.",
            "Сталін використав власну вправність, а Троцький робив помилки.",
            "До 1929 року Сталін правив СРСР одноосібно."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ بادشاہ جو 1917 سے پہلے روس پر مکمل طاقت کے ساتھ حکومت کرتا تھا (Tsar)",
            "Union of Soviet Socialist Republics: کئی ملک مل کر، جن میں روس سب سے بڑا تھا (USSR)",
            "یہ عقیدہ کہ سب برابر ہونے چاہییں اور دولت مزدوروں کے لیے رکھی جائے (communism)",
            "رہنما سیاست دانوں کا وہ چھوٹا گروہ جو کمیونسٹ پارٹی چلاتا تھا (Politburo)",
            "اپنے ملک سے باہر رہنے پر مجبور کر دیا جانا (exile)"
          ],
          "passage": [
            "300 سال سے زیادہ عرصے تک روس پر Tsar نامی ایک بادشاہ حکومت کرتا رہا۔",
            "Tsar کو اپنے نیچے ہر شخص پر مکمل طاقت تھی۔",
            "زیادہ تر روسی کسان تھے، اور وہ بہت غریب تھے۔",
            "Tsar روس کو 1914 میں پہلی جنگِ عظیم میں لے گیا۔",
            "ملک لمبی جنگ کے لیے تیار نہ تھا۔",
            "لینن اور Bolsheviks نے اکتوبر 1917 میں اقتدار سنبھال لیا۔",
            "لینن نے روسی سلطنت کو USSR میں بدل دیا۔",
            "یہ دنیا کا پہلا کمیونسٹ ملک تھا۔",
            "لینن نے مخالفت ختم کی اور ایک totalitarian ریاست قائم کر دی۔",
            "1922 کے بعد لینن کی صحت بگڑ گئی، اور 1924 میں وہ مر گیا۔",
            "پھر سٹالن اور ٹراٹسکی اس کی جگہ لینے کے لیے مقابلے میں آ گئے۔",
            "سٹالن نے اپنی مہارت استعمال کی، اور ٹراٹسکی نے غلطیاں کیں۔",
            "1929 تک سٹالن اکیلا USSR کا حاکم تھا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Russia before the revolution",
          paragraphs: [
            "Russia had been ruled for over 300 years by an emperor, the Tsar, whose word was law and who answered to nobody. Most Russians were peasants, with little land and less money. If you are looking for the four pillars of democracy here, you will not find any of them, and that matters for the comparison you will make later.",
            "The Tsar took Russia into the First World War in 1914, and the Russian people were not ready for a long war. Food, fuel and patience ran out. By the end of 1917 the communists had taken power, and your previous topic on the Russian Revolution is where that story is told in full.",
            "Keep one difference with Germany in view from the start. Germany in 1933 was a democracy that was taken apart from the inside. Russia had no democracy to take apart: one kind of absolute ruler was replaced by another kind of absolute rule."
          ],
          tip: "This contrast is worth a whole paragraph in the final essay: Hitler destroyed a democracy, while Stalin took over a state that was already a dictatorship."
        },
        {
          heading: "October 1917: the first communist state",
          paragraphs: [
            "Led by Vladimir Lenin, the Bolsheviks took power in October 1917. They overthrew the Provisional Government and installed a communist government, and Lenin turned the Russian Empire into the Union of Soviet Socialist Republics, the USSR: the first communist country in the world.",
            "Lenin then removed opposition to the Bolsheviks and their communist ideas, and set up a totalitarian state. He created a secret police force. He removed elections. He destroyed every rival political organisation, so that the Communist Party was the only party left. And he set up a Politburo, a small group of leading politicians, to rule the USSR.",
            "So answer your lesson's challenge question before you go further: was the USSR a dictatorship before Stalin came to power? It was. The machinery Stalin later used so ruthlessly, including the secret police and the one-party state, was built before he reached the top of it."
          ],
          tip: "Communism and fascism sat at opposite ends of the political spectrum in chapter 2, yet both produced totalitarian states. Beliefs and methods are separate questions."
        },
        {
          heading: "Lenin's death and the struggle to replace him",
          paragraphs: [
            "Lenin's health failed after 1922, and he was forced to step back from ruling the USSR. He had hoped the group of communist politicians he had appointed would work together, but they wanted power for themselves. Lenin died in 1924, and the battle to replace him grew more intense as Joseph Stalin and Leon Trotsky each tried to take his place.",
            "Stalin was born in Georgia in 1879, in what was then part of the Russian Empire. The name Stalin was one he took for himself: it means man of steel. He grew up poor, with a shoemaker father who walked out on the family. Stalin made his name in violent bank raids that raised money for the Communist Party, was twice exiled to Siberia by the Tsar's secret police and escaped each time, and became a leading communist for his part in defending the city of Tsaritsyn during the Civil War.",
            "He was not rated highly by his own side. In 1923 Lenin had called for Stalin to be replaced, and others thought him slow, dull and unimaginative; he was certainly no public speaker, unlike Hitler. But he was ruthless, devious, hardworking and a very clever party politician. He took on boring but important jobs, such as General Secretary, and used them to put his own supporters into the posts that mattered. By 1929 Stalin had secured his position, and Trotsky was exiled in 1929 and left to write against him from abroad."
          ],
          tip: "Stalin's advantage was organisation, not oratory. That is the sharpest difference between his rise and Hitler's, and examiners look for it."
        },
        {
          heading: "Source A: Lenin's Testament",
          paragraphs: [
            "Your lesson prints one primary source in full, and it is worth slowing down over. Weeks before his death, while he was recovering from a stroke, Lenin wrote a testament setting out what he thought of the men who might replace him. He describes Stalin as “too coarse”, which the lesson glosses as nasty, difficult and hot-headed, and says that this fault, bearable among colleagues, “becomes intolerable in a leader”.",
            "Lenin then goes further than criticism. He suggests that his comrades think about “a way of removing Stalin from that post” and appointing someone else in his place, somebody who would be “more tolerant, more loyal, more polite” and more considerate towards the others. Lenin does not name a successor; what he names is a danger.",
            "Now ask the historian's questions. What does the source say? Who wrote it, when, and in what circumstances? And how far should we trust it? A dying man's judgement of a rival, written while he was ill, is not a neutral report. But it is also the opinion of the one person who knew the Communist Party's leaders best, and what he feared is very close to what happened. A good answer holds both of those thoughts at once."
          ],
          quote: {
            text: "Stalin is too coarse (nasty, difficult and hot-headed) and this defect, although quite tolerable in our midst and in dealing among us Communists, becomes intolerable in a leader.",
            source: "Source A: Lenin's Last Will and Testament, written weeks before his death, as printed in your lesson"
          },
          worked: {
            q: "What does Source A tell us about Lenin's opinion of Stalin, and how far should we trust it?",
            steps: [
              "Content: say what the source says. Lenin calls Stalin too coarse and says the fault becomes intolerable in a leader.",
              "Own knowledge: add what you know. Stalin held the post of General Secretary, and Lenin suggests removing him from it.",
              "Origin: say who wrote it, when and why. Lenin wrote it weeks before his death, while recovering from a stroke, to warn his party.",
              "Trustworthiness: weigh it both ways. Lenin was ill and judging a rival, so the source is not neutral; but he knew these men better than anyone, and what he feared came to pass."
            ],
            answer: "Content, own knowledge, origin, trustworthiness: Lenin thought Stalin unfit to lead and wanted him removed; he wrote it as a dying warning, which makes it partial but extremely well informed."
          },
          tip: "Four steps for any source: content, own knowledge, origin, trustworthiness. Never stop at content, and never judge trustworthiness without naming the origin first."
        }
      ],
      gate: [
        { kind: "numeric", q: "In which year did Lenin die? Give the year as four digits.", answer: 1924, check: "1922 + 2", tolerance: 0, units: "", why: "Lenin's health failed after 1922 and he died in 1924, which opened the struggle between Stalin and Trotsky.",
          misconceptions: [
            { answer: 1922, check: "1924 - 2", says: "That is the year Lenin's health began to fail and he stepped back from ruling. He lived for two more years after that." },
            { answer: 1917, check: "1924 - 7", says: "That is the year of the October Revolution, when Lenin took power. He governed the USSR for several years before his death." },
            { answer: 1929, check: "1924 + 5", says: "That is the year Stalin secured his position as dictator. Lenin had died five years before that, which is what started the struggle." }
          ] },
        { kind: "gap", q: "Stalin's main rival for the leadership of the USSR was Leon ___, whom he later drove into exile.", answer: "Trotsky", options: ["Trotsky", "Kirov", "Hindenburg"], why: "Leon Trotsky was Stalin's chief rival after Lenin's death, and he was exiled in 1929.",
          feedback: {
            "Kirov": "Kirov led the Communist Party in Leningrad and was murdered in 1934, probably on Stalin's orders. He was not Stalin's rival in the succession struggle of the 1920s.",
            "Hindenburg": "Hindenburg was the German President who appointed Hitler Chancellor and whose death in 1934 let Hitler become Führer. You have crossed from the USSR into Germany."
          } },
        { kind: "mcq", q: "How did Stalin come to lead the USSR?", options: ["He fought his rivals inside the Communist Party, because there were no elections to win", "He won a national election against Trotsky and the other candidates", "Lenin named him as his successor shortly before he died", "The army removed Trotsky from office and installed Stalin in his place"], answer: 0, why: "Elections did not exist in the communist system, so the contest was fought inside the party, where Stalin's control of appointments mattered most.",
          feedback: [
            "",
            "There were no national elections to win: Lenin had removed elections when he set up the one-party state. Stalin's battleground was inside the Communist Party.",
            "Lenin did the opposite. In his testament he called Stalin too coarse and suggested removing him from his post, which is why the source in section 4 matters so much.",
            "The army played no part in making Stalin leader. His weapon was the party machine, and in particular his power to appoint his own supporters to important posts."
          ] }
      ],
      modules: [
        {
          title: "Stalin's road to power",
          task: {
            kind: "order",
            q: "Put these four steps on Stalin's road to power in the order they happened.",
            items: [
              "Lenin and the Bolsheviks take power in the October Revolution (1917)",
              "Lenin's health fails and he steps back from ruling the USSR (1922)",
              "Lenin dies, and Stalin and Trotsky compete to replace him (1924)",
              "Trotsky is exiled and Stalin rules the USSR alone (1929)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Each step carries its year, so read the years first.",
                "Put the smallest year first and the largest last.",
                "Check the story: a leader has to be in power before his health can take him out of it.",
                "The struggle must begin before it can be won, so the exile comes last."
              ],
              example: {
                q: "Put these steps in the history of a company in order: two deputies compete for the job; the founder falls ill; one deputy takes over; the founder dies.",
                steps: ["The founder falls ill first, which creates the problem.", "Then the founder dies.", "The deputies compete after that.", "Finally one of them takes over."],
                answer: "The founder falls ill; the founder dies; two deputies compete for the job; one deputy takes over."
              }
            },
            core: { hint: "Four years, in order: revolution, illness, death, victory. Read the dates and then check the story runs properly." },
            stretch: { extend: "Explain why the gap between Lenin's death and Stalin's victory was as long as it was, using at least one reason from section 3." }
          },
          explain: "Say, in one sentence, why Lenin's illness, and not only his death, matters to this sequence.",
          why: "The Bolsheviks took power in October 1917; Lenin's health failed after 1922 and he withdrew from ruling; he died in 1924, which opened the struggle; and by 1929 Stalin had won it and Trotsky was exiled."
        },
        {
          title: "How long did the struggle take?",
          task: {
            kind: "numeric",
            q: "How many years passed between Lenin's death and Stalin securing his position as dictator of the USSR?",
            answer: 5,
            check: "1929 - 1924",
            tolerance: 0,
            units: "years",
            why: "Lenin died in 1924, and by 1929 Stalin had secured his position and exiled Trotsky: a struggle of five years.",
            misconceptions: [
              { answer: 12, check: "1929 - 1917", says: "You have counted from the October Revolution of 1917 rather than from Lenin's death. The struggle for the succession could not begin until Lenin had gone." },
              { answer: 7, check: "1929 - 1922", says: "You have counted from 1922, when Lenin's health failed. He stepped back then, but he did not die until two years later." }
            ]
          },
          levels: {
            support: {
              steps: [
                "Write down the year Lenin died.",
                "Write down the year Stalin had secured his position as dictator.",
                "Subtract the earlier year from the later one.",
                "Check your answer is a small number of years, not a year."
              ],
              example: {
                q: "A head teacher retired in 1702 and a permanent replacement was finally appointed in 1711. How many years passed?",
                steps: ["Write down the two years: 1702 and 1711.", "Subtract the earlier from the later: 1711 − 1702.", "Nine years passed."],
                answer: "9",
                checks: [{ expr: "1711 - 1702", value: 9, tol: 0 }]
              }
            },
            core: { hint: "Two years from the chapter, subtracted. Start from the death, not from the revolution and not from the illness." },
            stretch: { extend: "Compare this with Germany: how long did Hitler take to move from Chancellor to Führer, and what does the difference in speed tell you?" }
          },
          contexts: [
            { label: "A party member's diary", q: "A Communist Party member keeps a diary from Lenin's funeral to the day Trotsky leaves the country. How many years does the diary cover?", check: "1929 - 1924" },
            { label: "A child growing up", q: "A child in Moscow is a baby when Lenin dies and starts school the year Stalin becomes the undisputed leader. How many years is that?", check: "1929 - 1924" },
            { label: "Trotsky's last years at home", q: "Trotsky keeps fighting for the leadership from the day Lenin dies until the day he is exiled. For how many years does he fight?", check: "1929 - 1924" }
          ],
          explain: "Say, in one sentence, why you measured from Lenin's death rather than from the revolution.",
          why: "Lenin died in 1924 and Stalin was unchallenged by 1929, so the struggle ran for five years. Counting from 1917 measures the whole communist period, and counting from 1922 measures from Lenin's illness, not his death."
        },
        {
          title: "Using Source A",
          task: {
            kind: "written",
            q: "Use Source A to explain what Lenin thought of Stalin, and say how far we should trust the source. Write one paragraph of five to seven sentences.",
            criteria: [
              "I say what the source tells me about Lenin's opinion of Stalin.",
              "I add one piece of my own knowledge that the source does not state.",
              "I name the origin of the source: who wrote it, when, and in what circumstances.",
              "I reach a judgement on trustworthiness that gives a reason on both sides, using the word because."
            ],
            model: "Source A tells me that Lenin had serious doubts about Stalin as a possible leader. Lenin calls him “too coarse” and says that this fault, which the party could live with among colleagues, “becomes intolerable in a leader”, and he suggests his comrades find “a way of removing Stalin from that post”. From my own knowledge, the post Lenin means is General Secretary, the job Stalin used to place his own supporters in important positions. The origin matters: Lenin wrote this only weeks before his death, while he was recovering from a stroke, as a private warning to the party rather than as a public speech. That makes the source less than neutral, because a dying man judging a rival is not a calm observer, and because Lenin's illness may have sharpened his fears. Even so, I would trust it a good deal, because nobody knew the Communist Party's leaders better than Lenin, and what he warned against is very close to what Stalin went on to do."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: Source A tells me that Lenin thought Stalin…",
                "Sentence 2: add one short quoted phrase from the source as your evidence.",
                "Sentence 3: From my own knowledge… add something the source does not say.",
                "Sentences 4 to 6: name the origin, then judge trustworthiness with a reason on each side, using because."
              ],
              example: {
                q: "A team captain writes, the day after being dropped, that the coach never picks the best players. How far should we trust it?",
                steps: ["Content: the writer says selection is unfair.", "Origin: written the day after being dropped, by somebody affected by the decision.", "Judgement: less trustworthy because of the writer's position, but still useful evidence of how players felt."],
                answer: "Treat it as strong evidence of feeling and weak evidence of fact, because of when and by whom it was written."
              }
            },
            core: { hint: "Four moves: content, own knowledge, origin, trustworthiness. The judgement needs a reason on both sides, not just one." },
            stretch: { extend: "Lenin does not name a successor. Explain what a historian can and cannot conclude from that silence." }
          },
          explain: "Say, in one sentence, which part of the origin made the biggest difference to your judgement.",
          why: "A strong answer separates content from origin and then weighs both. The best answers notice the tension in the source: it is partial, because of when and by whom it was written, and extremely well informed, for exactly the same reason."
        }
      ]
    },

    /* ───────────── 6 · Stalin's rule, and comparing the two dictatorships ───────────── */
    {
      key: "stalin-rule", n: 6, title: "How Stalin ruled, and how the two dictatorships compare",
      lead: "The NKVD, the Purges, the cult of personality, the control of culture, schools and religion, the Five-Year Plans, and how to build a comparison between Hitler's Germany and Stalin's USSR.",
      covers: [5, 6],
      pretext: {
        words: [
          { word: "NKVD", means: "Stalin's secret police, who could arrest people without evidence", sentence: "An anonymous tip-off was enough for the NKVD to make an arrest." },
          { word: "the Purges", means: "the period when Stalin removed everyone he thought might threaten him", sentence: "The Purges reached from the party leadership down to ordinary people." },
          { word: "show trial", means: "a public trial whose verdict has already been decided", sentence: "At a show trial the accused confessed to crimes they could not have committed." },
          { word: "cult of personality", means: "the building up of one leader through images, statues and praise", sentence: "Stalin's cult of personality made criticism of him unthinkable." },
          { word: "Five-Year Plan", means: "a government plan to modernise the economy over five years", sentence: "The first Five-Year Plan turned villages into industrial cities." }
        ],
        passage: [
          "Stalin ruled the USSR ruthlessly to keep his own power.",
          "His secret police were called the NKVD.",
          "They could arrest anybody on an informer's word alone.",
          "The Purges removed everyone Stalin thought might threaten him.",
          "Many were tried in public and forced to confess.",
          "Statues, songs and paintings praised Stalin everywhere.",
          "This is called a cult of personality.",
          "Writers, artists and teachers had to follow the party line.",
          "Churches were closed, and so were mosques and religious schools.",
          "Stalin's Five-Year Plans set out to modernise the economy.",
          "Industry grew quickly, but the people suffered for it.",
          "In this chapter you also compare the two dictatorships.",
          "Look for similarities and differences, with evidence from both."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "شرطة ستالين السرّية، وكانت تستطيع أن تعتقل الناس بغير دليل (NKVD)",
            "المدّة التي أزال فيها ستالين كلّ من ظنّ أنه قد يهدّده (the Purges)",
            "محاكمة علنية حُكمها مقرَّر سلفًا (show trial)",
            "بناء زعيم واحد بالصور والتماثيل والمدح (cult of personality)",
            "خطّة حكومية لتحديث الاقتصاد في خمس سنوات (Five-Year Plan)"
          ],
          "passage": [
            "حكم ستالين الاتّحاد السوفييتي بغير رحمة ليُبقي سلطته هو.",
            "وكانت شرطته السرّية تُسمّى الإن كي في دي (NKVD).",
            "وكانت تستطيع أن تعتقل أيّ أحد بكلمة مُبلّغ وحدها.",
            "والتصفيات أزالت كلّ من ظنّ ستالين أنه قد يهدّده.",
            "وكثير منهم حُوكم علنًا وأُرغم على الإقرار.",
            "والتماثيل والأغاني واللوحات كانت تمدح ستالين في كلّ مكان.",
            "ويُسمّى هذا عبادة الشخص.",
            "وكان على الكتّاب والفنّانين والمعلّمين أن يتّبعوا خطّ الحزب.",
            "وأُغلقت الكنائس، وأُغلقت كذلك المساجد والمدارس الدينية.",
            "وخطط ستالين الخمسية عزمت على تحديث الاقتصاد.",
            "فنمت الصناعة بسرعة، ولكنّ الناس عانوا ثمن ذلك.",
            "وفي هذا الفصل تقارن أيضًا بين الدكتاتوريتين.",
            "فابحث عن أوجه الشبه والاختلاف، بأدلّة من كلتيهما."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "tajna policja Stalina, która mogła aresztować ludzi bez dowodów (NKVD)",
            "okres, w którym Stalin usuwał każdego, kto w jego mniemaniu mógł mu zagrozić (the Purges)",
            "publiczny proces, którego wyrok już wcześniej zapadł (show trial)",
            "budowanie wielkości jednego przywódcy przez obrazy, pomniki i pochwały (cult of personality)",
            "rządowy plan modernizacji gospodarki na pięć lat (Five-Year Plan)"
          ],
          "passage": [
            "Stalin rządził USSR bezwzględnie, żeby utrzymać własną władzę.",
            "Jego tajna policja nazywała się NKVD.",
            "Mogli aresztować każdego na samo słowo donosiciela.",
            "Czystki usuwały każdego, kto w mniemaniu Stalina mógł mu zagrozić.",
            "Wielu sądzono publicznie i zmuszano do przyznania się.",
            "Wszędzie pomniki, pieśni i obrazy chwaliły Stalina.",
            "Nazywamy to kultem jednostki.",
            "Pisarze, artyści i nauczyciele musieli trzymać się linii partii.",
            "Zamykano kościoły, a także meczety i szkoły religijne.",
            "Plany pięcioletnie Stalina miały zmodernizować gospodarkę.",
            "Przemysł rósł szybko, ale ludzie za to cierpieli.",
            "W tym rozdziale porównujesz też obie dyktatury.",
            "Szukaj podobieństw i różnic, z dowodami z obu stron."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a polícia secreta de Stalin, que podia prender pessoas sem provas (NKVD)",
            "o período em que Stalin afastou todos os que pensava que o podiam ameaçar (the Purges, os Expurgos)",
            "um julgamento público cuja sentença já estava decidida (show trial, julgamento de fachada)",
            "a construção da imagem de um só líder através de imagens, estátuas e elogios (cult of personality, culto da personalidade)",
            "um plano do governo para modernizar a economia em cinco anos (Five-Year Plan, Plano Quinquenal)"
          ],
          "passage": [
            "Stalin governou a URSS sem piedade para manter o seu próprio poder.",
            "A sua polícia secreta chamava-se NKVD.",
            "Podiam prender qualquer pessoa só com a palavra de um informador.",
            "Os Expurgos afastaram todos os que Stalin pensava que o podiam ameaçar.",
            "Muitos foram julgados em público e obrigados a confessar.",
            "Estátuas, canções e pinturas elogiavam Stalin por todo o lado.",
            "A isto chama-se culto da personalidade.",
            "Escritores, artistas e professores tinham de seguir a linha do partido.",
            "As igrejas foram fechadas, e também as mesquitas e as escolas religiosas.",
            "Os Planos Quinquenais de Stalin propunham-se modernizar a economia.",
            "A indústria cresceu depressa, mas foram as pessoas que o pagaram.",
            "Neste capítulo também comparas as duas ditaduras.",
            "Procura semelhanças e diferenças, com provas das duas."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "booliiska sirdoonka ee Stalin, oo dad xiri karay iyadoon caddayn jirin",
            "muddadii Stalin ka saaray qof kasta oo uu u maleeyay inuu khatar ku yahay",
            "maxkamad dadweyne oo xukunkeedu horay loo go'aamiyay",
            "kor u qaadidda hal hoggaamiye oo sawirro, taallooyin iyo ammaan lagu sameeyo",
            "qorshe dowladeed oo dhaqaalaha casriyeeya shan sano gudahood"
          ],
          "passage": [
            "Stalin wuxuu USSR si naxariis-darro ah u xukumay si uu awooddiisa u sii hayo.",
            "Booliiskiisa sirdoonka waxaa loo yiraahdaa NKVD.",
            "Waxay qof kasta xiri karayeen hadal informer oo keliya.",
            "Purges-ku waxay ka saareen qof kasta oo Stalin u maleeyay inuu khatar ku yahay.",
            "Badi waxaa dadweyne hortiis la maxkamadeeyay oo lagu qasbay inay qirtaan.",
            "Taallooyin, heeso iyo sawirro ayaa Stalin meel kasta ku ammaanay.",
            "Tan waxaa la yiraahdaa cult of personality.",
            "Qoraayada, farshaxanleyda iyo macallimiintu waxay ku qasbanaayeen inay khadka xisbiga raacaan.",
            "Kaniisadaha waa la xidhay, sidoo kale masaajidyada iyo iskuullada diinta.",
            "Five-Year Plans-ka Stalin waxay doonayeen inay dhaqaalaha casriyeeyaan.",
            "Warshaduhu si dhaqso ah ayay u kordheen, laakiin dadku way u silceen.",
            "Cutubkan waxaad sidoo kale barbar dhigaysaa labada kali-talis.",
            "Raadi waxa isku mid ah iyo waxa kala duwan, iyadoo caddayn labada ka timid."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "таємна поліція Сталіна, яка могла арештовувати людей без свідчень (NKVD)",
            "час, коли Сталін усував кожного, хто, на його думку, міг йому загрожувати (the Purges)",
            "публічний суд, вирок якого вже вирішений заздалегідь (show trial)",
            "вибудовування образу одного вождя через зображення, статуї і похвалу (cult of personality)",
            "урядовий план модернізувати економіку за п’ять років (Five-Year Plan)"
          ],
          "passage": [
            "Сталін правив СРСР безжально, щоб утримати власну владу.",
            "Його таємну поліцію називали НКВС (NKVD).",
            "Вона могла арештувати будь-кого лише за словом донощика.",
            "Чистки (the Purges) усували кожного, хто, на думку Сталіна, міг йому загрожувати.",
            "Багатьох судили публічно і змушували визнати вину.",
            "Статуї, пісні й картини всюди хвалили Сталіна.",
            "Це називають культом особи.",
            "Письменники, митці й учителі мусили йти за партійною лінією.",
            "Церкви закрили, а разом із ними й мечеті та релігійні школи.",
            "П’ятирічні плани Сталіна мали на меті модернізувати економіку.",
            "Промисловість швидко зростала, але люди через це страждали.",
            "У цьому розділі ви також порівнюєте дві диктатури.",
            "Шукайте схожості й відмінності, зі свідченнями з обох."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "سٹالن کی خفیہ پولیس، جو لوگوں کو شہادت کے بغیر گرفتار کر سکتی تھی (NKVD)",
            "وہ دور جب سٹالن نے ہر اُس شخص کو ہٹا دیا جس سے اسے خطرہ لگتا تھا (the Purges)",
            "وہ عوامی مقدمہ جس کا فیصلہ پہلے ہی طے ہو چکا ہو (show trial)",
            "تصویروں، مجسموں اور تعریف کے ذریعے ایک ہی رہنما کو بڑا بنا دینا (cult of personality)",
            "حکومت کا وہ منصوبہ جو پانچ سال میں معیشت کو جدید بنانے کے لیے ہو (Five-Year Plan)"
          ],
          "passage": [
            "سٹالن نے اپنی طاقت قائم رکھنے کے لیے USSR پر بے رحمی سے حکومت کی۔",
            "اس کی خفیہ پولیس کو NKVD کہا جاتا تھا۔",
            "وہ کسی informer کے صرف کہنے پر کسی کو بھی گرفتار کر سکتے تھے۔",
            "the Purges نے ہر اُس شخص کو ہٹا دیا جس سے سٹالن کو خطرہ لگتا تھا۔",
            "بہت سوں پر عوامی مقدمے چلائے گئے اور انھیں اعتراف کرنے پر مجبور کیا گیا۔",
            "مجسمے، گیت اور تصویریں ہر جگہ سٹالن کی تعریف کرتے تھے۔",
            "اسے cult of personality کہتے ہیں۔",
            "لکھاریوں، فن کاروں اور اساتذہ کو جماعت کی لائن پر چلنا پڑتا تھا۔",
            "کلیسا بند کر دیے گئے، اور مسجدیں اور مذہبی مدرسے بھی۔",
            "سٹالن کے Five-Year Plans کا مقصد معیشت کو جدید بنانا تھا۔",
            "صنعت تیزی سے بڑھی، مگر اس کی قیمت لوگوں نے چکائی۔",
            "اس باب میں آپ دونوں dictatorships کا موازنہ بھی کرتے ہیں۔",
            "دونوں سے شہادت لے کر مشابہتیں اور فرق ڈھونڈیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "The NKVD and the Purges",
          paragraphs: [
            "The USSR's first secret police force, the Cheka, was set up in December 1917, and to begin with it was only allowed to investigate crimes against the government's political power. Its powers grew quickly, and it was soon being used to frighten and arrest anyone thought to be against communism. The force kept growing, and by 1934 it was no longer restricted by law at all. Under its later name, the NKVD, Stalin used it against anyone he thought might be a threat. He was extremely suspicious, and many innocent people suffered.",
            "The NKVD did not need hard evidence to act. A tip-off from an anonymous informer was considered enough reason for an arrest, and the use of torture was authorised by a special decree of the state. Compare that with the Gestapo in chapter 4 and you have one of the clearest similarities in the whole unit.",
            "Stalin's use of terror led to the Purges: a period in which he removed anyone who opposed his rule, and anyone he believed might become a threat. The Purges mostly ran between 1936 and 1938, and reached their height with the Great Purge of 1937. The deck gives the figures plainly, and so will we: 750,000 people were executed, and a million were sent to the Gulags, the forced labour camps. Stalin's political opponents were often tried in public, having been tortured into confessing to crimes nobody could have committed. Earlier, in 1934, Kirov, the popular leader of the Leningrad party and an old friend of Stalin's, was murdered, probably on Stalin's own orders."
          ],
          tip: "Terror in the USSR reached inside the ruling party, not only outside it. That is the detail that makes the comparison with the Night of the Long Knives work."
        },
        {
          heading: "The cult of personality and the control of culture",
          paragraphs: [
            "Your lesson opens with two photographs. The first shows Lenin speaking to a large crowd, with Trotsky standing in support beside him; it was a photograph taken in 1920. The second shows the same scene with Trotsky removed. Nothing was added: somebody simply deleted a man from the record. History was rewritten to glorify Stalin's part in the revolution, photographs were faked to place him at Lenin's side, and images of Trotsky and other earlier leaders were taken out.",
            "Alongside the deletions came the tributes. Images of Stalin, statues, songs, poems and books about his greatness were everywhere, and nobody would have dared show him in a bad light. Towns, villages and cities were renamed after him, and prizes were named in his honour. He awarded himself a string of grand titles, which historians quote only to show how far the flattery went; we will describe them rather than repeat them. Sculptors made his statues taller and broader than he was. During the Second World War his name was written into the national anthem, and he was credited with almost god-like qualities, including the suggestion that he had won the war single-handed. This is what historians mean by a cult of personality.",
            "Culture was controlled to match. Writers had to belong to the party-controlled Union of Soviet Writers, and any book that strayed from what the Party wanted was rewritten or destroyed. Everyone who made art — writers, painters, film-makers, composers — had to work to the policy of Socialist Realism: their work had to deal with the lives of ordinary working people, show communism developing, and give simple, clear, optimistic messages."
          ],
          tip: "A cult of personality is propaganda pointed at one person. If you can name the statues, the renamed cities and the rewritten history, you can explain it in a sentence."
        },
        {
          heading: "Schools, religion and the Five-Year Plans",
          paragraphs: [
            "Children were taught Stalin's version of history, and Stalin chose the subjects and the information they would learn. The regime also made real gains in literacy: by 1933 the majority of Soviet people could read. Both of those facts are true at once, and a good historian holds them together rather than choosing the convenient one. Religion was attacked from every side: Christian leaders were imprisoned and churches closed, and Muslim mosques and schools were closed and the pilgrimage to Mecca banned.",
            "Stalin believed all economic and social activity should be controlled by the Communist Party, and he wanted to modernise an economy that was still mostly agricultural with very little industry. The first Five-Year Plan was proposed in 1928 and began in 1929. Its aims were to modernise the economy, raise industrial output and centralise control. The plans did achieve those aims, and they have also been criticised ever since for the widespread suffering they caused.",
            "Magnitogorsk is your lesson's case study of both sides at once. The town sat on an enormous deposit of iron ore, and in 1928 it was declared a one-industry city: everything there would serve iron production. Former peasants arrived with no industrial skills and were retrained by foreign experts, and housing was built close to the factories to cut travelling time. A city appeared where there had been almost nothing, and the conditions the people lived and worked in were harsh."
          ],
          tip: "For the Five-Year Plans, always write both halves: output rose, and people suffered. An answer with only one half is only half an answer."
        },
        {
          heading: "Comparing the two dictatorships",
          paragraphs: [
            "Your unit now returns to its enquiry question: to what extent were the dictatorships in Hitler's Germany and Stalin's Russia similar? Begin with the two words the skill depends on. A similarity is a feature two things share: a point where what you find in Germany you also find in the Soviet Union. A difference is a point where the two part company, and naming one is just as much historical thinking as naming a similarity.",
            "Work through the three themes the assessment uses. On beliefs, the two were opposites on the political spectrum from chapter 2: Nazi fascism on the far right, Soviet communism on the far left. On their rise to power, Hitler was appointed Chancellor inside a democracy and then destroyed it, while Stalin climbed the ladder of a one-party state that was already a dictatorship, winning a struggle inside the party rather than an election. On their rule, the similarities crowd in: a secret police force, terror used against their own supporters as well as their enemies, censorship and propaganda, control of schools and of young people, and a leader built up until criticism became unthinkable.",
            "The skill, then, is not to list. It is to make a claim about where the two line up and where they part, and to prove each claim with evidence from both countries. Use the connecting word Similarly for a similarity and a contrast phrase such as whereas for a difference, and finish every paragraph by saying what your evidence shows."
          ],
          worked: {
            q: "Write a paragraph explaining one similarity between how Hitler and Stalin kept control of their countries.",
            steps: [
              "Point: name the similarity. One similarity in how Hitler and Stalin kept control is that both relied on a secret police force.",
              "Evidence for Germany: the Gestapo used informers, surveillance and house searches and did not need hard evidence to act.",
              "Evidence for the USSR, introduced with Similarly: similarly, the NKVD could arrest a person on an anonymous tip-off, and by 1934 it was no longer restricted by law.",
              "Explain and link: this meant that in both countries people policed their own conversations, so opposition could not organise. Therefore the two dictatorships were strongly similar in this respect."
            ],
            answer: "Point, evidence from Germany, Similarly plus evidence from the USSR, then explain and link: both used a secret police that needed no proof, so fear prevented opposition from forming in either country."
          },
          tip: "Every comparison paragraph needs evidence from both countries. One country's evidence on its own is a description, not a comparison."
        }
      ],
      gate: [
        { kind: "mcq", q: "What was the NKVD?", options: ["Stalin's secret police, who could arrest people on an informer's word alone", "The small group of leading politicians who ran the Communist Party", "The system of forced labour camps, most of them in Siberia", "The plan to modernise Soviet industry in stages of five years"], answer: 0, why: "The NKVD was the secret police. It needed no hard evidence, and by 1934 it was no longer restricted by law.",
          feedback: [
            "",
            "That is the Politburo, which Lenin set up to rule the USSR. The NKVD was a police force, and it answered to Stalin rather than governing alongside him.",
            "That is the Gulag, where those the NKVD arrested were sent. Keep the two apart: one makes the arrests, the other holds the prisoners.",
            "That is the Five-Year Plans, which were about industry and output. The NKVD was about finding and removing people Stalin distrusted."
          ] },
        { kind: "gap", q: "A ___ is a feature that two people, events or periods share when you compare them.", answer: "similarity", options: ["similarity", "difference", "judgement"], why: "Your progress check gives the definition exactly: a similarity is something that is the same or very alike across two things being compared.",
          feedback: {
            "difference": "A difference is the opposite: something that is not the same, and that sets two things apart when we compare them. Both words are needed, but this definition is the first one.",
            "judgement": "A judgement is the overall decision you reach at the end of a comparison, such as more similar than different. It comes after you have found the similarities and differences."
          } },
        { kind: "numeric", q: "In which year did the Purges reach their height, in what is called the Great Purge? Give the year as four digits.", answer: 1937, check: "1936 + 1", tolerance: 0, units: "", why: "The Purges mostly ran between 1936 and 1938, and 1937 is the year your lesson names as their height.",
          misconceptions: [
            { answer: 1936, check: "1937 - 1", says: "That is the year the Purges mostly began. The question asks for the year of the Great Purge, when they were at their worst." },
            { answer: 1938, check: "1937 + 1", says: "That is the year in which the Purges mostly came to an end. Their height came the year before that." },
            { answer: 1934, check: "1937 - 3", says: "That is the year Kirov was murdered and the year the secret police stopped being restricted by law. The Great Purge came three years later." }
          ] }
      ],
      modules: [
        {
          title: "One similarity, proved from both countries",
          task: {
            kind: "written",
            q: "Explain one similarity between Hitler's Germany and Stalin's USSR. Use evidence from both countries, and finish by saying what your evidence shows. Write one paragraph of five to seven sentences.",
            criteria: [
              "I name one clear similarity in a single opening sentence.",
              "I give specific evidence from Germany for that similarity.",
              "I give specific evidence from the USSR, introduced with the word Similarly.",
              "I explain the link and finish with what the evidence shows about the two dictatorships."
            ],
            model: "One similarity between Hitler's Germany and Stalin's USSR is that both leaders used terror against their own supporters, not only against their enemies. In Germany, on the Night of the Long Knives in June 1934, the SS murdered around 400 members of the Nazi Party who were pressing Hitler to carry out the party's socialist promises and to take over the army. Similarly, in the USSR the Purges reached deep inside the Communist Party, and leading communists were put on show trials where they confessed, after torture, to crimes they could not have committed. In both cases the victims were people who had helped build the regime. This meant that nobody anywhere was safe, because loyalty and service were no protection, and so no faction could form around a rival. Therefore the two dictatorships were strikingly similar in this respect, even though their beliefs sat at opposite ends of the political spectrum."
          },
          levels: {
            support: {
              steps: [
                "Choose ONE similarity: secret police, terror inside the party, censorship and propaganda, control of young people, or a leader built up beyond criticism.",
                "Sentence 1: One similarity between Hitler's Germany and Stalin's USSR is…",
                "Sentences 2 and 3: evidence from Germany, then evidence from the USSR beginning with Similarly.",
                "Sentences 4 and 5: This meant that… and Therefore the two dictatorships were…"
              ],
              example: {
                q: "Explain one similarity between two football clubs' youth academies, using evidence from both.",
                steps: ["Name the similarity: both promote players from the academy into the first team.", "Give evidence from the first club, then evidence from the second, introduced with Similarly.", "Finish with what the evidence shows about how both clubs are run."],
                answer: "Point, evidence from club one, Similarly plus evidence from club two, then a sentence on what this shows about both."
              }
            },
            core: { hint: "A comparison needs two pieces of evidence, one from each country, joined by Similarly. Then say what they show together." },
            stretch: { extend: "Add a second paragraph on a difference within the same theme, and end with a judgement on whether the theme shows more similarity or more difference." }
          },
          explain: "Say, in one sentence, how your evidence from the USSR matches your evidence from Germany.",
          why: "A strong comparison paragraph has a claim, evidence from both countries, and a closing sentence that says what the evidence shows. An answer with evidence from only one country describes rather than compares."
        },
        {
          title: "Hitler's method, Stalin's equivalent",
          task: {
            kind: "match",
            q: "Match each feature of Hitler's dictatorship to the feature of Stalin's that most closely matches it.",
            pairs: [
              ["The Gestapo, Hitler's secret police", "The NKVD, Stalin's secret police"],
              ["The Night of the Long Knives, June 1934", "The Purges, 1936 to 1938"],
              ["Fascism, the Nazis' belief", "Communism, Stalin's belief"],
              ["Hitler as Führer, with a personal oath of loyalty sworn to him", "Stalin's cult of personality, with statues and songs in his honour"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the two secret police forces: one in Germany, one in the USSR.",
                "Then find the pair about killing members of the leader's own party.",
                "Then the pair about beliefs, which sat at opposite ends of the political spectrum.",
                "The pair left over is about building the leader himself up beyond criticism."
              ],
              example: {
                q: "Match each part of one school's system to the matching part of another's: form tutor, house system, end-of-year prize.",
                steps: ["A form tutor matches the other school's mentor.", "A house system matches the other school's team structure.", "An end-of-year prize matches the other school's awards evening."],
                answer: "Form tutor to mentor; house system to team structure; end-of-year prize to awards evening."
              }
            },
            core: { hint: "Two secret police forces, two attacks on the leader's own party, two opposed beliefs, two ways of placing the leader above criticism." },
            stretch: { extend: "Pick the pairing you think is the weakest match, and explain what makes the two sides less alike than they first appear." }
          },
          explain: "Say, in one sentence, which pairing you think is the strongest match, and why.",
          why: "The Gestapo and the NKVD are the closest match of all: secret police who acted on informers' reports without needing proof. The Night of the Long Knives and the Purges match as terror turned inwards; fascism and communism match only in being each regime's official belief, since they were opposites; and the title of Führer matches the cult of personality as two ways of placing one man beyond criticism."
        },
        {
          title: "Similarity or difference?",
          task: {
            kind: "mcq",
            q: "Three of the statements below describe similarities between the two dictatorships and one describes a difference. Which of these was a difference, not a similarity, between the two dictatorships?",
            options: [
              "Hitler was appointed Chancellor inside a democracy, while Stalin fought his way up inside a one-party state",
              "Both leaders used a secret police force to find and remove the people they distrusted",
              "Both regimes controlled what newspapers, books and films were allowed to say",
              "Both leaders were built up by images and praise until criticising them became dangerous"
            ],
            answer: 0,
            why: "Their routes to power are the sharpest difference: Hitler used, and then destroyed, a working democracy, while Stalin won a struggle inside a party in a state that was already a dictatorship.",
            feedback: [
              "",
              "The Gestapo and the NKVD make this one of the strongest similarities in the unit, since both acted on informers' reports without needing hard evidence. Look instead at how each man came to power.",
              "Censorship ran through both regimes, from the Union of Soviet Writers to the Nazi control of the German press. The difference lies in their routes to power.",
              "Stalin's cult of personality and Hitler's title of Führer, with its personal oath of loyalty, are two versions of the same thing. The difference is in how each man got to the top."
            ]
          },
          levels: {
            support: {
              steps: [
                "Take each statement and ask: does it describe both men doing the same sort of thing?",
                "Secret police, censorship and praise of the leader all appear in both countries.",
                "Look for the statement in which the two men did something clearly different.",
                "One was handed office in a democracy; the other climbed a party in a state with no elections."
              ],
              example: {
                q: "Which of these is a difference between two schools: both have a uniform, both have a house system, or one is a boarding school and the other is not?",
                steps: ["Uniform and houses appear in both, so they are similarities.", "Boarding is true of only one, so it is the difference."],
                answer: "One being a boarding school and the other not is the difference."
              }
            },
            core: { hint: "Three statements begin with Both. One describes two men doing different things." },
            stretch: { extend: "Explain why two dictatorships with opposite beliefs could end up ruling in such similar ways. Use at least two methods from this chapter." }
          },
          contexts: [
            { label: "Sorting the assessment statements", q: "You are sorting four statements into two columns, headed similarities and differences, ready for the essay. Which of these was a difference, not a similarity, between the two dictatorships?", why: "Three statements go in the similarities column and one in the differences column, and the odd one out is about the route each man took to power." },
            { label: "An essay plan", q: "You are planning a paragraph on differences and need the right statement to open it. Which of these was a difference, not a similarity, between the two dictatorships?", why: "A differences paragraph has to open on something the two men did differently, and only one of the four statements does that." },
            { label: "Rating a theme out of five", q: "You are rating each theme from one for completely different to five for completely similar. Which of these was a difference, not a similarity, between the two dictatorships?", why: "Three themes would score highly for similarity. The route to power would score at the other end of the scale." }
          ],
          explain: "Say, in one sentence, why their routes to power were so different.",
          why: "Secret police, censorship and the glorification of the leader are strong similarities. Their rise to power is the clearest difference: Hitler was appointed inside a democracy he then dismantled, while Stalin won a contest inside a one-party state that Lenin had already built."
        }
      ]
    }
  ],

  sources: {
    deckDump: "hi_y09_topic_2_dictatorahip.txt",
    decksUsed: [
      "Dictatorship / Lesson 1 / L1 DITs & Dictators Intro.pptx (15 slides) and L1 DITs & Dictators Intro hwk.pptx (12 slides)",
      "Dictatorship / L1 DITs & Dictators Intro.pptx and L1 DITs & Dictators Intro hwk.pptx (duplicates of the Lesson 1 pair, kept at the top level of the folder)",
      "Dictatorship / Dictators Intro 2.pptx (5 slides: the presentation lesson that follows the Lesson 1 home learning)",
      "Dictatorship / Lesson 2 / L2 Hitler Rise to Power.pptx (slides 1–21, with slides 17 and 19 missing from the dump)",
      "Dictatorship / Lesson 2 / worksheet 1 Hitler Video Qs.pptx and worksheet 1 Hitler Video Qs (1).pptx (the TED-Ed video question sheet)",
      "Dictatorship / Lesson 3 / L3 Hitler_s Rule of Germany.pptx, L3 Hitler_s Rule of Germany 2.pptx and L3 Hitler_s Rule of Germany 2 hwk.pptx",
      "Dictatorship / Lesson 3 / Worksheet 4 creation of dictatorship information.pptx (the dated 1933–34 table) and Worksheet 4 Creation of Dictatorship.pptx (the blank frame)",
      "Dictatorship / Lesson 3 / Gestapo.pptx, Gestapo Diff.pptx (the Gestapo reading and its multiple-choice table) and Overview Worksheet new.pptx",
      "Dictatorship / Lesson 4 / L4 Stalin_s Rise to Power.pptx and L4 Stalin_s Rise to Power (1).pptx (slides 1–20, with slides 14 and 19 missing from the dump)",
      "Dictatorship / Lesson 5 / L5 Stalin_s Rule.pptx (19 slides) and L5 Stalin_s Rule hwk.pptx (15 slides)",
      "Dictatorship / Lesson 6 / L6 Dictators Review & Assessment.pptx and L6 Dictators Review & Assessment HWK.pptx",
      "Dictatorship / Progress Check / Progress Check (1).pptx and Progress Check (2).pptx (the similarity-and-difference skill practice)",
      "Dictatorship / Assessment / End of Unit Assessment Lesson - Dictatorships.pptx and End of Unit Assessment Lesson - Dictatorships (1).pptx"
    ],
    notes: "Twenty-six decks in the dump, many of them duplicates or near-duplicates of each other; six taught lessons are evidenced (L1–L6) plus a Progress Check and an end-of-unit assessment lesson. Chapters 1–6 follow the deck's own sequence and its enquiry question. Dates, names and sequences are held independently in verify.py's CHRONOLOGY table with the slide that gives each one; the only quoted source is Lenin's Last Will and Testament as the deck prints it (Lesson 4, slide 15). The deck's own model comparison paragraph (Progress Check slide 11), Stalin's self-given titles in slogan form, the Nazi Party's antisemitic programme point in quoted form and the 'create your own dictatorship' role-play are all deliberately not reproduced; see NOTES.md sections 3 and 4."
  }
};
