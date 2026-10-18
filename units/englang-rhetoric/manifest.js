// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 English · Year 8 · Summer 2 · Rhetoric (building towards AQA 8700 Paper 2 Q5) · schema astra/2
//
// QUOTATION RULE FOR THIS FILE (checked by verify.py):
//   “curly double quotes” are used ONLY for words quoted from a stored text. Every such span must appear
//   verbatim in one of the texts held in verify.py (CORPUS). Terms, example sentences, sentence starters and
//   statements use ‘single quotes’.
//   Stored texts: three ORIGINAL speeches written for Ad Astra (‘The Captain’s Speech’, ‘The Last Tree on Elm
//   Street’, and the six-part model speech ‘Clean Air for Hollowmere’), two traditional proverbs, and ONE
//   public-domain speech: Elizabeth I at Tilbury (1588), in the wording the department deck prints.
//   The modern speeches the department teaches from (John F. Kennedy 1962, Martin Luther King 1963, Winston
//   Churchill 1940, Emma Watson 2014, Malala Yousafzai 2013) and the Sam Leith extract are still in copyright
//   and are NOT quoted anywhere: they are taught through paraphrase and summary only. The deck’s own model
//   answers (WAGOLLs) are not reproduced.
//
// astra/2: feedback on every mcq/gap item, explain on every module, contexts on six modules (a different
//   speech topic or a different speech to analyse), glossary chapters, connections, meta.spacing.
//   No meta.constellation (the engine lays the stars out). No pretext.l1 (added by the translation pass).
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["englang-rhetoric"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "englang-rhetoric",
    subjectKey: "english",
    subject: "English Language",
    board: "AQA",
    spec: "KS3 → 8700",
    specRef: "KS3 Year 8, Summer 2: Rhetoric — building towards GCSE English Language 8700, Paper 2 Question 5 (writing to present a viewpoint)",
    year: 8,
    tier: "KS3",
    title: "Rhetoric",
    sub: "Learn how speakers through time have persuaded their audiences, then plan and write a persuasive speech of your own.",
    bigQuestion: "What is rhetoric, how do famous speakers use it to persuade, and how do I write a persuasive speech of my own?",
    lessonCount: 10,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Introduction to persuasive writing and rhetoric",
      question: "What is rhetoric, and what are ethos, logos and pathos?",
      keywords: ["ethos", "pathos", "logos", "Aristotelian triad"] },
    { n: 2, title: "Logos and analogies",
      question: "What is an analogy, and can I embed analogies into a speech?",
      keywords: ["logos", "facts", "analogy", "rhetoric"] },
    { n: 3, title: "Rhetorical methods",
      question: "What are rhetorical methods?",
      keywords: ["anecdote", "imperative", "direct address", "tricolon"] },
    { n: 4, title: "Creating pathos",
      question: "What is pathos, and how is it created?",
      keywords: ["pathos", "emotive language", "maxim", "rhetorical question"] },
    { n: 5, title: "Identifying rhetoric in Martin Luther King’s speech",
      question: "Who was Martin Luther King, and what is his ‘I have a dream’ speech about?",
      keywords: ["pathos", "ethos", "logos", "rhetoric"] },
    { n: 6, title: "Identifying rhetoric in Martin Luther King’s speech (Part Two)",
      question: "How does Martin Luther King use rhetoric in his speech?",
      keywords: ["pathos", "ethos", "logos", "rhetoric"] },
    { n: 7, title: "Writing your introduction",
      question: "How should persuasive writing be structured, and what is the purpose of an introduction?",
      keywords: ["structure", "introduction"] },
    { n: 8, title: "Developing an argument (logos)",
      question: "How can logos be used to establish an argument?",
      keywords: ["structure", "facts", "logos", "logical"] },
    { n: 9, title: "Counter arguments",
      question: "What is a counterargument?",
      keywords: ["structure", "counterargument"] },
    { n: 10, title: "The purpose of a conclusion",
      question: "What is the purpose of a conclusion?",
      keywords: ["structure", "conclusion", "pathos"] }
  ],

  glossary: [
    { term: "rhetoric", means: "The art of persuasion: getting people to think or do what you want.", chapter: "what-is-rhetoric" },
    { term: "ethos", means: "Persuading through trust: showing you are the right person to speak on the topic.", chapter: "what-is-rhetoric" },
    { term: "logos", means: "Persuading through logic: facts, statistics and clear reasoning.", chapter: "what-is-rhetoric" },
    { term: "pathos", means: "Persuading through feeling: moving the audience’s emotions and values.", chapter: "what-is-rhetoric" },
    { term: "analogy", means: "A comparison between two things, made to explain or persuade.", chapter: "logos-and-analogy" },
    { term: "statistic", means: "A fact or piece of data taken from a study or a count.", chapter: "logos-and-analogy" },
    { term: "anecdote", means: "A short, interesting story about a real event or person.", chapter: "rhetorical-methods" },
    { term: "rhetorical question", means: "A question asked for effect, which does not need an answer.", chapter: "rhetorical-methods" },
    { term: "tricolon", means: "A list of three parallel words, phrases or clauses.", chapter: "rhetorical-methods" },
    { term: "anaphora", means: "Repeating a word or phrase at the start of several sentences.", chapter: "rhetorical-methods" },
    { term: "direct address", means: "Speaking straight to the audience, using ‘you’ or their name.", chapter: "rhetorical-methods" },
    { term: "imperative", means: "A command, such as ‘Keep the oak.’", chapter: "rhetorical-methods" },
    { term: "hyperbole", means: "Exaggeration that is not meant to be taken literally.", chapter: "rhetorical-methods" },
    { term: "emotive language", means: "Words chosen to make the audience feel a particular emotion.", chapter: "pathos-and-analysis" },
    { term: "counterargument", means: "What the other side would say, which you raise and then answer.", chapter: "counterargument-conclusion" },
    { term: "call to action", means: "The ending of a speech that tells the audience exactly what to do next.", chapter: "counterargument-conclusion" }
  ],

  // Connections game: four groups of four, all sixteen terms drawn from the glossary above.
  connections: [
    { group: "Aristotle’s three appeals, and the art itself", terms: ["rhetoric", "ethos", "logos", "pathos"] },
    { group: "Methods that stir feeling", terms: ["emotive language", "anecdote", "hyperbole", "rhetorical question"] },
    { group: "Methods of pattern and address", terms: ["tricolon", "anaphora", "direct address", "imperative"] },
    { group: "Building and finishing the argument", terms: ["analogy", "statistic", "counterargument", "call to action"] }
  ],

  chapters: [
    /* ───────────────────────── 1 ───────────────────────── */
    { key: "what-is-rhetoric", n: 1,
      title: "What rhetoric is: Athens, Aristotle and the triad",
      lead: "You will know where rhetoric came from, what ethos, logos and pathos mean, and how to spot them in a speech.",
      covers: [1],
      pretext: {
        words: [
          { word: "rhetoric", means: "the art of persuasion", sentence: "Rhetoric is the skill of getting people to agree with you." },
          { word: "persuade", means: "make someone think or do something", sentence: "A good speech can persuade a crowd to act." },
          { word: "ethos", means: "trust in the speaker", sentence: "A doctor talking about health has strong ethos." },
          { word: "logos", means: "logic, reasons and facts", sentence: "She used logos by giving three clear facts." },
          { word: "pathos", means: "appeals to the audience’s feelings", sentence: "The story of the lost dog was pure pathos." }
        ],
        passage: [
          "Rhetoric is the art of persuasion.",
          "It means getting people to think or do what you want.",
          "Rhetoric began in Athens, in ancient Greece, more than two thousand years ago.",
          "Athens was a democracy, so men had to speak well to win votes.",
          "The first teachers of rhetoric were called Sophists.",
          "Some Sophists would argue anything for money, even if it was untrue.",
          "A philosopher called Aristotle wanted rhetoric to serve the truth.",
          "He wrote a book called The Art of Rhetoric.",
          "He said there are three ways to persuade.",
          "Ethos means trust: show you are the right person to speak.",
          "Logos means logic: use facts and clear reasons.",
          "Pathos means feeling: move your audience’s emotions.",
          "Together, these three are called the Aristotelian triad.",
          "This term you will study famous speeches, then write your own."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "فنّ الإقناع (rhetoric)",
            "أن تجعل شخصاً يفكّر في شيء أو يفعله (persuade)",
            "الثقة بالمتكلّم (ethos)",
            "المنطق والأسباب والحقائق (logos)",
            "مخاطبة مشاعر الجمهور (pathos)"
          ],
          "passage": [
            "البلاغة (rhetoric) هي فنّ الإقناع.",
            "وتعني أن تجعل الناس يفكّرون أو يفعلون ما تريده.",
            "بدأت البلاغة في أثينا، في اليونان القديمة، قبل أكثر من ألفَي سنة.",
            "كانت أثينا ديمقراطية، فكان على الرجال أن يتكلّموا جيداً ليفوزوا بالأصوات.",
            "كان أول معلّمي البلاغة يُسمّون السوفسطائيين (Sophists).",
            "كان بعض السوفسطائيين يجادلون في أي شيء من أجل المال، حتى لو كان غير صحيح.",
            "أراد فيلسوف يُسمّى أرسطو أن تكون البلاغة في خدمة الحقيقة.",
            "كتب كتاباً اسمه «فنّ البلاغة» (The Art of Rhetoric).",
            "قال إن هناك ثلاث طرق للإقناع.",
            "الإيثوس (ethos) يعني الثقة: أظهر أنك الشخص المناسب للكلام.",
            "اللوغوس (logos) يعني المنطق: استعمل الحقائق والأسباب الواضحة.",
            "الباثوس (pathos) يعني الشعور: حرّك عواطف جمهورك.",
            "تُسمّى هذه الثلاثة معاً ثالوث أرسطو (Aristotelian triad).",
            "في هذا الفصل الدراسي ستدرس خطباً مشهورة، ثم تكتب خطبتك الخاصة."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "sztuka przekonywania (rhetoric)",
            "sprawić, żeby ktoś coś pomyślał albo zrobił (persuade)",
            "zaufanie do mówcy (ethos)",
            "logika, powody i fakty (logos)",
            "odwołania do uczuć odbiorców (pathos)"
          ],
          "passage": [
            "Retoryka (rhetoric) to sztuka przekonywania.",
            "Oznacza sprawianie, żeby ludzie myśleli lub robili to, czego chcesz.",
            "Retoryka zaczęła się w Atenach, w starożytnej Grecji, ponad dwa tysiące lat temu.",
            "Ateny były demokracją, więc mężczyźni musieli dobrze mówić, żeby zdobyć głosy.",
            "Pierwsi nauczyciele retoryki nazywali się sofistami (Sophists).",
            "Niektórzy sofiści dowodzili czegokolwiek za pieniądze, nawet jeśli to była nieprawda.",
            "Filozof o imieniu Arystoteles chciał, żeby retoryka służyła prawdzie.",
            "Napisał książkę zatytułowaną The Art of Rhetoric (Retoryka).",
            "Powiedział, że są trzy sposoby przekonywania.",
            "Ethos oznacza zaufanie: pokaż, że jesteś właściwą osobą, żeby mówić.",
            "Logos oznacza logikę: używaj faktów i jasnych powodów.",
            "Pathos oznacza uczucie: porusz emocje odbiorców.",
            "Razem te trzy nazywa się triadą Arystotelesa (Aristotelian triad).",
            "W tym semestrze poznasz słynne przemowy, a potem napiszesz własną."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a arte de persuadir (rhetoric, retórica)",
            "fazer alguém pensar ou fazer alguma coisa (persuade, persuadir)",
            "confiança em quem fala (ethos)",
            "lógica, razões e factos/fatos (logos)",
            "apelos aos sentimentos do público (pathos)"
          ],
          "passage": [
            "A retórica (rhetoric) é a arte de persuadir.",
            "Quer dizer levar as pessoas a pensar ou a fazer o que você quer.",
            "A retórica começou em Atenas, na Grécia antiga, há mais de dois mil anos.",
            "Atenas era uma democracia, por isso os homens tinham de falar bem para ganhar votos.",
            "Os primeiros professores de retórica chamavam-se sofistas (Sophists).",
            "Alguns sofistas defendiam qualquer coisa por dinheiro, mesmo que fosse falsa.",
            "Um filósofo chamado Aristóteles queria que a retórica servisse a verdade.",
            "Ele escreveu um livro chamado The Art of Rhetoric (A Arte da Retórica).",
            "Ele disse que há três maneiras de persuadir.",
            "Ethos quer dizer confiança: mostre que você é a pessoa certa para falar.",
            "Logos quer dizer lógica: use factos/fatos e razões claras.",
            "Pathos quer dizer sentimento: mexa com as emoções do seu público.",
            "Juntas, estas três maneiras chamam-se a tríade aristotélica (Aristotelian triad).",
            "Neste período você vai estudar discursos famosos e depois escrever o seu."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "farshaxanka qancinta (rhetoric)",
            "qof ka dhig inuu wax ka fikiro ama sameeyo (persuade)",
            "kalsoonida hadlaha (ethos)",
            "caqli-gal, sababo iyo xaqiiqooyin (logos)",
            "baaqyo dareenka dhegaystayaasha taabta (pathos)"
          ],
          "passage": [
            "Rhetoric waa farshaxanka qancinta.",
            "Micnaheedu waa in dadka ka dhigto inay fikiraan ama sameeyaan waxa aad doonayso.",
            "Rhetoric waxay ka bilaabatay Athens, Giriiggii hore, in ka badan laba kun oo sano ka hor.",
            "Athens waxay ahayd dimuqraadiyad, sidaas darteed raggu waa inay si fiican u hadlaan si ay codad u helaan.",
            "Macallimiintii ugu horreysay ee rhetoric waxaa loo yaqaannay Sophists.",
            "Sophists qaarkood wax kasta lacag ayay ku doodi jireen, xitaa haddii aanay run ahayn.",
            "Filasoof la yiraahdo Aristotle wuxuu doonayay in rhetoric runta u adeegto.",
            "Wuxuu qoray buug la yiraahdo The Art of Rhetoric.",
            "Wuxuu yiri waxaa jira saddex siyaabood oo lagu qanciyo.",
            "Ethos micnaheedu waa kalsooni: muuji inaad tahay qofka saxda ah ee hadlaya.",
            "Logos micnaheedu waa caqli-gal: isticmaal xaqiiqooyin iyo sababo cad.",
            "Pathos micnaheedu waa dareen: dareenka dhegaystayaashaada taabo.",
            "Saddexdan oo wada waxaa loo yaqaan Aristotelian triad.",
            "Xilli-dugsiyeedkan waxaad baran doontaa khudbado caan ah, kadibna adigu mid ayaad qori doontaa."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "мистецтво переконання (rhetoric)",
            "змусити когось думати або робити щось (persuade)",
            "довіра до того, хто говорить (ethos)",
            "логіка, причини та факти (logos)",
            "звернення до почуттів аудиторії (pathos)"
          ],
          "passage": [
            "Риторика (rhetoric) — це мистецтво переконання.",
            "Це означає домогтися, щоб люди думали або робили те, чого ви хочете.",
            "Риторика зародилася в Афінах, у Стародавній Греції, понад дві тисячі років тому.",
            "Афіни були демократією, тому чоловіки мали добре говорити, щоб здобути голоси.",
            "Перших учителів риторики називали софістами (Sophists).",
            "Деякі софісти за гроші доводили що завгодно, навіть неправду.",
            "Філософ на ім’я Арістотель хотів, щоб риторика служила істині.",
            "Він написав книгу під назвою «Риторика» (The Art of Rhetoric).",
            "Він сказав, що є три способи переконувати.",
            "Етос (ethos) означає довіру: покажіть, що ви саме та людина, яка має говорити.",
            "Логос (logos) означає логіку: використовуйте факти та зрозумілі причини.",
            "Патос (pathos) означає почуття: зворушіть емоції аудиторії.",
            "Разом ці три називаються тріадою Арістотеля (Aristotelian triad).",
            "Цього семестру ви вивчатимете відомі промови, а потім напишете власну."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "قائل کرنے کا فن (rhetoric)",
            "کسی کو کچھ سوچنے یا کرنے پر لانا (persuade)",
            "بولنے والے پر بھروسا (ethos)",
            "منطق، وجوہات اور حقائق (logos)",
            "سننے والوں کے جذبات سے اپیل (pathos)"
          ],
          "passage": [
            "خطابت (rhetoric) قائل کرنے کا فن ہے۔",
            "اس کا مطلب ہے لوگوں کو وہ سوچنے یا کرنے پر لانا جو آپ چاہتے ہیں۔",
            "خطابت کی شروعات قدیم یونان کے شہر ایتھنز میں، دو ہزار سال سے زیادہ پہلے ہوئی۔",
            "ایتھنز ایک جمہوریت تھا، اس لیے مردوں کو ووٹ جیتنے کے لیے اچھا بولنا پڑتا تھا۔",
            "خطابت کے پہلے استادوں کو Sophists کہا جاتا تھا۔",
            "کچھ Sophists پیسوں کے لیے کسی بھی بات کی دلیل دے دیتے تھے، چاہے وہ جھوٹ ہو۔",
            "ارسطو (Aristotle) نامی ایک فلسفی چاہتا تھا کہ خطابت سچ کی خدمت کرے۔",
            "اس نے The Art of Rhetoric نامی ایک کتاب لکھی۔",
            "اس نے کہا کہ قائل کرنے کے تین طریقے ہیں۔",
            "Ethos کا مطلب ہے بھروسا: دکھائیں کہ آپ بولنے کے لیے صحیح شخص ہیں۔",
            "Logos کا مطلب ہے منطق: حقائق اور صاف وجوہات استعمال کریں۔",
            "Pathos کا مطلب ہے احساس: اپنے سننے والوں کے جذبات کو جگائیں۔",
            "یہ تینوں مل کر Aristotelian triad کہلاتے ہیں۔",
            "اس ٹرم میں آپ مشہور تقریریں پڑھیں گے، پھر اپنی تقریر لکھیں گے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "Where rhetoric began",
          paragraphs: [
            "Rhetoric means the art of persuasion: the art of getting people to think and do what you want. Most historians say it was born in Athens, in ancient Greece. Athens was a democracy, and every free man was expected to stand up in the Assembly and argue for or against a new law. A man’s success depended on how well he could speak.",
            "Because speaking well mattered so much, small schools opened to teach it. The teachers were called Sophists, and students paid them large sums. Sophists boasted that they could win any argument on any subject, even one they knew nothing about, using clever wordplay and flowery comparisons. Over time the word ‘sophist’ came to mean someone who twists the truth for money.",
            "The philosopher Aristotle criticised the Sophists for playing on people’s emotions instead of using the truth. But he did not throw rhetoric away. In his book The Art of Rhetoric he set out a system for using it well, so that audiences could be led to see what is true, and so that honest speakers could answer dishonest ones. He preferred to persuade through reason, but he knew that reason alone does not always work."
          ],
          tip: "Remember the chain: Athens, democracy, Sophists, Aristotle. Each one explains the next." },
        { heading: "The Aristotelian triad",
          paragraphs: [
            "Aristotle said there are three means of persuasion. Together they are called the Aristotelian triad, and this whole unit is built on them.",
            "Ethos is credibility and trust. Your writing must present you as someone who knows the topic and shares the audience’s values: why are you the right person to speak? Logos is logic and reason. Your argument must be clearly structured and contain facts as proof. Pathos is emotion and values. Your writing must contain moving language, stories and direct appeals to the audience.",
            "Most strong speeches use all three, but one usually leads. A charity appeal leans on pathos. A science report leans on logos. A head teacher welcoming new parents leans on ethos. When you read a speech, ask which of the three the speaker trusts most."
          ],
          worked: { q: "Which part of the triad does each sentence use? (a) ‘I have taught in this school for twenty years, so I know what our pupils need.’ (b) ‘Picture a child eating lunch alone, every single day.’ (c) ‘Last year, 68 per cent of pupils said the canteen queue was too long.’",
            steps: ["(a) tells us why the speaker can be trusted: that is ethos.", "(b) asks us to imagine a sad picture, so we feel something: that is pathos.", "(c) gives a number from a survey as proof: that is logos."],
            answer: "(a) ethos, (b) pathos, (c) logos." },
          tip: "Ethos: trust me. Logos: think about it. Pathos: feel it." },
        { heading: "Pronouns that pull people in",
          paragraphs: [
            "Speakers choose their pronouns on purpose. First-person plural pronouns, ‘we’, ‘our’ and ‘us’, put the speaker and the audience on the same side. They make the listener feel included and united with the speaker and the cause. Second-person pronouns, ‘you’ and ‘your’, speak straight to the listener and hand them the responsibility to act.",
            "Read this original speech. An expedition leader is speaking to her exhausted team before the last stage of a long journey. As you read, notice every ‘we’ and every ‘you’, and ask which part of the triad each sentence is working on."
          ],
          quote: { text: "Friends, look at me. Four months ago we left the harbour with twelve sledges and a map that nobody trusted. You have crossed the ice. You have carried the sick. You have eaten cold rations in the dark and never once complained. I have walked every mile beside you, and my feet are as blistered as yours. The pass ahead is three days away. Three days, not three weeks. On the far side there is a valley with grass and running water, and I have seen it with my own eyes. Some of you are afraid of what waits in the mountains. I understand that fear. But think of the faces waiting at home, and ask yourselves what story you want to tell them. We did not come this far to stop at the last hill. Pick up your packs. The valley is waiting for us.",
            source: "‘The Captain’s Speech’ — original speech written for Ad Astra" },
          tip: "Count the pronouns before you count anything else. They tell you how the speaker sees the audience." },
        { heading: "Reading the captain’s speech",
          paragraphs: [
            "The captain opens with ‘we’: “Four months ago we left the harbour”. From the first sentence, the journey belongs to everyone. Then she switches to ‘you’ three times in a row, praising what the team has done. That is pathos, because it makes them feel proud, and it prepares them to be asked for more.",
            "Her ethos comes next: “I have walked every mile beside you”. She is not ordering from a warm tent; she has shared the hardship, so she has earned the right to speak. Her logos is in the numbers: “three days away. Three days, not three weeks”, and a valley she has “seen it with my own eyes”. Finally she names the fear, answers it, and ends with a command and a shared reward."
          ],
          tip: "When a speaker says ‘I understand that fear’, they are answering an objection before anyone can raise it. You will meet this again as the counterargument." }
      ],
      gate: [
        { kind: "mcq", q: "Which city is seen as the birthplace of rhetoric?", options: ["Rome", "Athens", "Sparta", "London"], answer: 1,
          feedback: [
            "Rome came later and learned rhetoric from the Greeks. The story you studied begins in Athens, where democracy meant every man had to speak in the Assembly.",
            "",
            "Sparta is the other famous Greek city, but it was known for soldiers, not speakers. Rhetoric grew in Athens because Athenians voted on laws and had to persuade each other.",
            "London is more than two thousand years too late. Rhetoric began in ancient Greece, in the city of Athens."
          ],
          why: "Athens was a democracy, so men who could persuade the Assembly gained power. That is why rhetoric was studied there first." },
        { kind: "gap", q: "Persuading someone by appealing to their emotions is called ___.", answer: "pathos", options: ["pathos", "logos", "ethos"],
          feedback: {
            "logos": "Logos is logic: facts, reasons and a clear structure. Appealing to feelings and values is pathos. A memory hook: pathos sounds like ‘pathetic’, which comes from an old word for feeling.",
            "ethos": "Ethos is about the speaker: why we should trust them. Appealing to the audience’s emotions is pathos. Ethos is ‘trust me’; pathos is ‘feel this’."
          },
          why: "Pathos is persuasion through emotion and values." },
        { kind: "mcq", q: "What were the first teachers of rhetoric called?", options: ["Senators", "Sophists", "Spartans", "Scribes"], answer: 1,
          feedback: [
            "Senators were Roman politicians, not Greek teachers. The first rhetoric teachers were the Sophists, who taught in Athens for money.",
            "",
            "Spartans were the people of Sparta, famous as soldiers. The teachers of rhetoric were the Sophists, and Aristotle criticised them for ignoring the truth.",
            "Scribes were people who copied documents by hand. The Sophists were the teachers who charged Athenians to learn how to win arguments."
          ],
          why: "The Sophists were the first teachers of rhetoric. Their bad reputation comes from arguing anything for money, even things that were untrue." }
      ],
      modules: [
        { title: "Match the triad",
          task: { kind: "match", q: "Match each term to what it means.",
            pairs: [
              ["ethos", "Credibility and trust: why you are the right person to speak"],
              ["logos", "Logic and reason: facts and a clear argument as proof"],
              ["pathos", "Emotions and values: moving language, stories and appeals"],
              ["Aristotelian triad", "The name for all three means of persuasion together"]
            ] },
          levels: {
            support: { steps: ["Ethos and ‘ethics’ share a root: both are about character and trust.", "Logos and ‘logic’ share a root: both are about reasoning.", "Pathos is the odd one out: it is about feeling.", "The triad is a group of three, so it is the name for the set."],
              example: { q: "A speaker says ‘As the school nurse, I see the results of skipped breakfasts every day.’ Which term fits?", steps: ["She tells us her job.", "That explains why we should trust her on this topic."], answer: "Ethos." } },
            core: { hint: "Trust, think, feel. Which word goes with which?" },
            stretch: { extend: "Explain why Aristotle said he preferred logos, and give one reason a speaker might still need pathos." }
          },
          explain: "Say, in one sentence, how you told ethos and pathos apart.",
          why: "Ethos is trust in the speaker, logos is logic and proof, pathos is emotion and values, and the Aristotelian triad is the name for all three." },
        { title: "Find the ethos",
          task: { kind: "mcq", q: "In ‘The Captain’s Speech’, which sentence is the clearest example of ethos?",
            options: ["“I have walked every mile beside you, and my feet are as blistered as yours.”", "“The pass ahead is three days away.”", "“But think of the faces waiting at home”", "“Pick up your packs.”"], answer: 0,
            feedback: [
              "",
              "This sentence gives a fact about distance, so it is proof: logos. Ethos is about the speaker herself and why the team should trust her.",
              "Asking the team to picture their families is an appeal to feeling: pathos. Look for the sentence where the captain talks about what she has done.",
              "This is a command, an imperative. It tells the team what to do but says nothing about why the captain deserves to be trusted."
            ] },
          levels: {
            support: { steps: ["Ethos is about the speaker: look for sentences that start with ‘I’.", "Ask which sentence shows the captain has shared the hardship.", "Rule out sentences that give facts (logos) or stir feelings (pathos)."],
              example: { q: "Which shows ethos? ‘I have coached this team for nine seasons.’ or ‘We will win if we press high.’", steps: ["The first tells us the coach’s experience.", "The second is a plan, a reason: logos."], answer: "‘I have coached this team for nine seasons.’ is ethos." } },
            core: { hint: "Which sentence proves the captain has suffered alongside her team?" },
            stretch: { extend: "Explain how the word ‘blistered’ does more for the captain’s ethos than ‘tired’ would." }
          },
          explain: "Say which word in the sentence you chose does the most to earn the team’s trust.",
          why: "The captain shows she has shared every mile and every blister. That earns her the right to ask for more: ethos." },
        { title: "How does the captain persuade?",
          task: { kind: "written", q: "How does the captain use the Aristotelian triad to persuade her team to carry on? Write one developed paragraph, and name all three appeals.", marks: 10,
            criteria: [
              "I name ethos, logos and pathos correctly.",
              "I give a short quotation for each one.",
              "I explain how each quotation works on the team.",
              "I say which appeal I think is strongest, and why."
            ],
            model: "The captain uses all three appeals, but she begins with pathos. The repeated ‘You have…’ sentences praise the team for what they have already done, so they feel proud before they are asked for more. Her ethos follows: “I have walked every mile beside you”, which shows she has shared the hardship and has earned the right to speak. Then she turns to logos. The pass is “three days away. Three days, not three weeks”, and the valley is something she has “seen it with my own eyes”, so the reward is a fact, not a dream. I think ethos is her strongest appeal, because a leader who has suffered with her team is almost impossible to refuse." },
          levels: {
            support: { steps: ["Find one sentence that praises the team (pathos).", "Find one sentence about what the captain herself has done (ethos).", "Find one sentence with a number or a fact (logos).", "For each, write: ‘The captain uses [appeal] when she says ‘…’, which makes the team feel…’."],
              example: { q: "A coach says ‘I have coached this team for nine seasons. We have lost by one goal twice this year. Think how it will feel to lift that cup.’ Which appeals does she use?", steps: ["‘Nine seasons’ is experience: ethos.", "‘Lost by one goal twice’ is a fact: logos.", "‘Think how it will feel’ asks for emotion: pathos."], answer: "She uses ethos (her experience), logos (the results) and pathos (imagining the win)." } },
            core: { hint: "Start with the three ‘You have…’ sentences. Who do they make the team think about?" },
            stretch: { extend: "Explain how the captain’s pronouns (‘we’, then ‘you’, then ‘I’, then ‘us’) move the team from pride to trust to action." }
          },
          explain: "Say which quotation you would write about first, and which appeal it shows.",
          why: "A strong answer names each appeal, quotes briefly, and explains the effect on the team rather than just labelling." }
      ]
    },

    /* ───────────────────────── 2 ───────────────────────── */
    { key: "logos-and-analogy", n: 2,
      title: "Logos and analogy: making people think",
      lead: "You will build logos from facts and logical arguments, and use analogies to make a new idea feel familiar.",
      covers: [2],
      pretext: {
        words: [
          { word: "logos", means: "persuasion through logic and facts", sentence: "Logos is strongest when the facts are exact." },
          { word: "fact", means: "something that can be checked and shown to be true", sentence: "A fact is not the same as an opinion." },
          { word: "analogy", means: "a comparison that explains something", sentence: "The analogy of the onion explains what ogres are like." },
          { word: "simile", means: "saying one thing is like another", sentence: "A simile paints a picture, but it does not have to explain." },
          { word: "familiar", means: "well known, easy to recognise", sentence: "Link a new idea to something familiar." }
        ],
        passage: [
          "Logos means persuading with logic and reason.",
          "You build logos with facts, statistics and clear arguments.",
          "One powerful tool for logos is the analogy.",
          "An analogy compares two things to explain one of them.",
          "It links something new to something the audience already knows.",
          "A simile only says one thing is like another.",
          "An analogy goes further and makes an explanatory point.",
          "In the film Shrek, the ogre says ogres are like onions.",
          "Both have layers, so Donkey understands him.",
          "Writers also use historical analogies.",
          "They compare a new event to a famous event from the past.",
          "A good analogy makes an unfamiliar idea feel familiar.",
          "A bad analogy can be unfair or confusing.",
          "Choose yours carefully."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الإقناع بالمنطق والحقائق (logos)",
            "شيء يمكن التحقّق منه وإثبات صحّته (fact)",
            "مقارنة تشرح شيئاً ما (analogy)",
            "أن تقول إن شيئاً يشبه شيئاً آخر (simile)",
            "معروف جيداً، يسهل تمييزه (familiar)"
          ],
          "passage": [
            "اللوغوس (logos) يعني الإقناع بالمنطق والعقل.",
            "تبني اللوغوس بالحقائق والإحصائيات والحجج الواضحة.",
            "من الأدوات القوية للوغوس القياس (analogy).",
            "القياس يقارن بين شيئَين ليشرح أحدهما.",
            "وهو يربط شيئاً جديداً بشيء يعرفه الجمهور من قبل.",
            "التشبيه (simile) يقول فقط إن شيئاً يشبه شيئاً آخر.",
            "أما القياس فيذهب أبعد من ذلك ويقدّم فكرة تشرح شيئاً.",
            "في فيلم شريك (Shrek)، يقول الغول إن الغيلان مثل البصل.",
            "فكلاهما له طبقات، ولذلك يفهمه الحمار (Donkey).",
            "يستعمل الكتّاب أيضاً القياسات التاريخية.",
            "فيقارنون حدثاً جديداً بحدث مشهور من الماضي.",
            "القياس الجيد يجعل الفكرة الغريبة تبدو مألوفة.",
            "والقياس السيّئ قد يكون غير عادل أو مربكاً.",
            "اختر قياسك بعناية."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "przekonywanie przez logikę i fakty (logos)",
            "coś, co można sprawdzić i wykazać, że jest prawdą (fact)",
            "porównanie, które coś wyjaśnia (analogy)",
            "powiedzenie, że jedna rzecz jest jak inna (simile)",
            "dobrze znany, łatwy do rozpoznania (familiar)"
          ],
          "passage": [
            "Logos oznacza przekonywanie logiką i rozumem.",
            "Budujesz logos z faktów, statystyk i jasnych argumentów.",
            "Jednym z potężnych narzędzi logosu jest analogia (analogy).",
            "Analogia porównuje dwie rzeczy, żeby jedną z nich wyjaśnić.",
            "Łączy coś nowego z czymś, co odbiorcy już znają.",
            "Porównanie (simile) mówi tylko, że jedna rzecz jest jak inna.",
            "Analogia idzie dalej i przekazuje myśl, która coś wyjaśnia.",
            "W filmie Shrek ogr mówi, że ogry są jak cebule.",
            "Oba mają warstwy, więc Osioł go rozumie.",
            "Pisarze używają też analogii historycznych.",
            "Porównują nowe zdarzenie ze słynnym zdarzeniem z przeszłości.",
            "Dobra analogia sprawia, że nieznana myśl wydaje się znajoma.",
            "Zła analogia może być nieuczciwa albo myląca.",
            "Wybieraj swoje uważnie."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "persuasão pela lógica e pelos factos/fatos (logos)",
            "algo que pode ser verificado e mostrado como verdadeiro (fact, facto/fato)",
            "uma comparação que explica alguma coisa (analogy, analogia)",
            "dizer que uma coisa é como outra (simile, comparação)",
            "bem conhecido, fácil de reconhecer (familiar)"
          ],
          "passage": [
            "Logos quer dizer persuadir com lógica e razão.",
            "Você constrói o logos com factos/fatos, estatísticas e argumentos claros.",
            "Uma ferramenta poderosa para o logos é a analogia (analogy).",
            "Uma analogia compara duas coisas para explicar uma delas.",
            "Liga algo novo a algo que o público já conhece.",
            "Uma comparação (simile) só diz que uma coisa é como outra.",
            "Uma analogia vai mais longe e faz uma explicação.",
            "No filme Shrek, o ogro diz que os ogros são como cebolas.",
            "Os dois têm camadas, e por isso o Burro entende o que ele quer dizer.",
            "Os escritores também usam analogias históricas.",
            "Comparam um acontecimento novo com um acontecimento famoso do passado.",
            "Uma boa analogia faz uma ideia estranha parecer familiar.",
            "Uma analogia má pode ser injusta ou confusa.",
            "Escolha a sua com cuidado."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "qancin caqli-gal iyo xaqiiqooyin ku dhisan (logos)",
            "wax la hubin karo oo la tusi karo inuu run yahay (fact)",
            "isbarbardhig wax sharraxaya (analogy)",
            "in la yiraahdo wax uun wuxuu u eg yahay wax kale (simile)",
            "si fiican loo yaqaan, fudud in la garto (familiar)"
          ],
          "passage": [
            "Logos micnaheedu waa in lagu qanciyo caqli-gal iyo sabab.",
            "Logos waxaad ku dhistaa xaqiiqooyin, tiro-koobyo iyo doodo cad.",
            "Mid ka mid ah qalabka xoogga badan ee logos waa analogy.",
            "Analogy waxay isbarbar dhigtaa laba wax si ay mid ka mid ah u sharraxdo.",
            "Waxay isku xirtaa wax cusub iyo wax dhegaystayaashu horey u yaqaannaan.",
            "Simile keliya waxay sheegtaa in wax uun u eg yahay wax kale.",
            "Analogy way sii fogaataa, waxayna sharraxaad ka bixisaa.",
            "Filimka Shrek, ogre-ku wuxuu yiri ogres-ku waxay u eg yihiin basal.",
            "Labaduba lakabyo ayay leeyihiin, sidaas darteed Donkey wuu fahmay.",
            "Qorayaashu sidoo kale waxay isticmaalaan analogies taariikhi ah.",
            "Dhacdo cusub ayay isbarbar dhigaan dhacdo caan ah oo wakhti hore dhacday.",
            "Analogy wanaagsan waxay fikrad aan la aqoon ka dhigtaa mid la yaqaan.",
            "Analogy xun waxay noqon kartaa mid cadaalad darro ah ama wareer keenta.",
            "Taada si taxaddar leh u dooro."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "переконання через логіку та факти (logos)",
            "те, що можна перевірити й показати, що це правда (fact)",
            "порівняння, яке щось пояснює (analogy)",
            "сказати, що одна річ схожа на іншу (simile)",
            "добре відомий, легко впізнаваний (familiar)"
          ],
          "passage": [
            "Логос (logos) означає переконувати логікою та розумом.",
            "Ви будуєте логос за допомогою фактів, статистики та зрозумілих аргументів.",
            "Один сильний засіб для логосу — це аналогія (analogy).",
            "Аналогія порівнює дві речі, щоб пояснити одну з них.",
            "Вона пов’язує щось нове з тим, що аудиторія вже знає.",
            "Порівняння (simile) лише каже, що одна річ схожа на іншу.",
            "Аналогія йде далі й робить пояснювальний висновок.",
            "У фільмі «Шрек» огр каже, що огри схожі на цибулю.",
            "В обох є шари, тому Віслюк його розуміє.",
            "Автори також використовують історичні аналогії.",
            "Вони порівнюють нову подію з відомою подією з минулого.",
            "Добра аналогія робить незнайому ідею знайомою.",
            "Погана аналогія може бути несправедливою або заплутаною.",
            "Обирайте свою уважно."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "منطق اور حقائق کے ذریعے قائل کرنا (logos)",
            "ایسی بات جسے جانچ کر سچ دکھایا جا سکے (fact)",
            "ایک موازنہ جو کسی چیز کی وضاحت کرے (analogy)",
            "یہ کہنا کہ ایک چیز دوسری جیسی ہے (simile)",
            "اچھی طرح معلوم، آسانی سے پہچانا جانے والا (familiar)"
          ],
          "passage": [
            "Logos کا مطلب ہے منطق اور دلیل سے قائل کرنا۔",
            "آپ logos کو حقائق، شماریاتی اعداد اور صاف دلیلوں سے بناتے ہیں۔",
            "logos کا ایک طاقتور آلہ مثال سے موازنہ (analogy) ہے۔",
            "Analogy دو چیزوں کا موازنہ کرتی ہے تا کہ ان میں سے ایک کی وضاحت ہو۔",
            "یہ کسی نئی چیز کو اس چیز سے جوڑتی ہے جو سننے والے پہلے سے جانتے ہیں۔",
            "تشبیہ (simile) صرف یہ کہتی ہے کہ ایک چیز دوسری جیسی ہے۔",
            "Analogy اس سے آگے جاتی ہے اور وضاحت کا نکتہ بناتی ہے۔",
            "فلم Shrek میں دیو کہتا ہے کہ دیو پیاز جیسے ہوتے ہیں۔",
            "دونوں میں تہیں ہوتی ہیں، اس لیے Donkey اس کی بات سمجھ جاتا ہے۔",
            "مصنف تاریخی analogies بھی استعمال کرتے ہیں۔",
            "وہ کسی نئے واقعے کا موازنہ ماضی کے کسی مشہور واقعے سے کرتے ہیں۔",
            "اچھی analogy کسی انجان خیال کو جانا پہچانا بنا دیتی ہے۔",
            "بری analogy ناانصافی یا الجھن پیدا کر سکتی ہے۔",
            "اپنی analogy سوچ سمجھ کر چنیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "How logos is built",
          paragraphs: [
            "Logos is the appeal to reason. Your teachers list three ways to develop it: citing facts (the most important), using historical and literal analogies, and constructing logical arguments. A fact can be checked. A statistic is a fact in number form, taken from a study or a count. An opinion is a view that may not be based on fact at all.",
            "Facts matter because an audience cannot argue with them easily. ‘The oak is lovely’ is an opinion, and a councillor can shrug at it. ‘Three hundred and twelve people signed our petition in one weekend’ is a statistic, and it has to be answered.",
            "A logical argument puts facts in order so that one leads to the next: here is the problem, here is the evidence, here is the fix. When you write your own speech, your first argument will be built this way."
          ],
          worked: { q: "Turn this opinion into logos: ‘Our school needs a longer lunch break.’",
            steps: ["Find a fact that can be checked: lunch is 30 minutes long.", "Add a statistic: in a class survey, 19 out of 28 pupils said they had not finished eating when the bell went.", "Build the argument: short break, pupils not eating, so lessons after lunch start badly."],
            answer: "‘Lunch is thirty minutes. In our survey, 19 out of 28 pupils had not finished eating when the bell went. Hungry pupils do not learn well, so a longer break would improve the afternoon.’" },
          tip: "If a sentence has a number in it, check where the number came from. Logos is only as strong as its source." },
        { heading: "Analogy, simile and metaphor",
          paragraphs: [
            "An analogy is a comparison between two things that explains or persuades by pointing out what they share. ‘Isn’t that the same as a simile?’ Not quite. A simile says something is like something else. A metaphor says something is something else. An analogy says something is like something else in order to make an explanatory point.",
            "In the film Shrek, the ogre explains that ogres are like onions because both have layers. Donkey knows onions, so now he understands ogres. That is the job of an analogy: it helps an audience understand something unfamiliar by linking it to something familiar. Analogy is not merely to show, but to explain.",
            "Try these original analogies and work out the point each one makes: ‘Revision is like training for a race.’ ‘A rumour is like a dropped glass.’ ‘Our school is like a beehive.’ Each one explains something by comparing it to something you already know."
          ],
          tip: "Test an analogy by finishing the sentence ‘…because both…’. If you cannot, it is a simile, not an analogy." },
        { heading: "Historical analogies, fair and unfair",
          paragraphs: [
            "A historical analogy compares something now to a famous event from the past. ‘This new library will do for our town what the printing press did for Europe.’ The audience knows the printing press spread knowledge, so the analogy makes a big claim quickly and borrows the past’s authority.",
            "Historical analogies can also be unfair. Comparing a politician you dislike to a dictator is a common trick, and it is exactly the kind of emotional manipulation Aristotle criticised the Sophists for. A fair analogy helps the audience think. An unfair one stops them thinking. When you use one, make sure the two things really do share the point you claim."
          ],
          worked: { q: "Is this a fair analogy? ‘Leaving the lights on all night in school is like leaving a tap running: nothing is gained and something valuable drains away.’",
            steps: ["Ask what the two things share: both waste a resource for no benefit.", "Ask whether the comparison helps the audience understand the problem: yes, everyone knows a running tap wastes water.", "Ask whether it exaggerates to frighten: no, the claim is modest and true."],
            answer: "Fair. It explains waste through something familiar and does not smuggle in a false claim." },
          tip: "Before you use a historical analogy, ask: would a historian in the room nod, or wince?" },
        { heading: "Planning the mid-unit speech",
          paragraphs: [
            "Half way through this unit you will give a short speech to the class. Your teachers suggest the question ‘Should we be allowed to wear our own clothes instead of uniform?’ (or ‘Should schools have safe spaces for pupils who are being bullied?’). Plan it with a grid: three points FOR and three points AGAINST.",
            "Your speech should make your own side clear, use ethos, logos and pathos, and include at least one analogy to explain a point. It needs a clear beginning, middle and end: a strong hook to open, and a powerful message or call to action to close. Many English teachers use the acronym DAFOREST to remember persuasive devices: direct address, alliteration, facts, opinion, rhetorical questions, emotive language, statistics, triplets."
          ],
          tip: "Plan both sides even though you will argue one. Knowing the other side is how you beat it." }
      ],
      gate: [
        { kind: "mcq", q: "What is an analogy?", options: ["A comparison made to explain or persuade", "A question that does not need an answer", "A short story about a real event", "An exaggeration not meant literally"], answer: 0,
          feedback: [
            "",
            "A question that needs no answer is a rhetorical question. An analogy is a comparison between two things, made to explain one of them.",
            "A short story about a real event is an anecdote. An analogy does not tell a story; it compares two things to explain a point.",
            "Exaggeration is hyperbole. An analogy is a comparison, and a good one is accurate rather than exaggerated."
          ],
          why: "An analogy compares two things to explain or persuade by pointing out what they share." },
        { kind: "gap", q: "Logos can be developed by citing ___, using analogies and constructing logical arguments.", answer: "facts", options: ["facts", "feelings", "jokes"],
          feedback: {
            "feelings": "Feelings belong to pathos. Logos is the appeal to reason, and your teachers say the most important way to build it is by citing facts.",
            "jokes": "A joke might win an audience over, but it does not prove anything. Logos is built on facts, analogies and logical arguments."
          },
          why: "Citing facts is the first and most important way to develop logos." },
        { kind: "mcq", q: "Which of these is a historical analogy?",
          options: ["‘If we ignore this warning, we will be like the people who ignored the first smoke of the Great Fire of London.’", "‘The engine roared like a lion.’", "‘This town is one big family.’", "‘Forty per cent of pupils walk to school.’"], answer: 0,
          feedback: [
            "",
            "This is a simile: it says the engine is like a lion to paint a picture, but it explains nothing and there is no event from history in it.",
            "This is a metaphor: the town is called a family. It is not a comparison to a past event, so it is not a historical analogy.",
            "This is a statistic: a fact in number form. Statistics build logos, but they are not analogies."
          ],
          why: "A historical analogy compares something now to a famous event in the past, here the Great Fire of London in 1666." }
      ],
      modules: [
        { title: "What does the analogy explain?",
          task: { kind: "match", q: "Match each original analogy to the point it makes.",
            pairs: [
              ["‘Revision is like training for a race.’", "Practice before the day is what makes the difference."],
              ["‘A rumour is like a dropped glass.’", "Once it is out, it cannot be put back together."],
              ["‘Our school is like a beehive.’", "Everyone has a job, and the whole depends on each part."],
              ["‘A budget is like a bath with the plug out.’", "Money drains away unless you stop the leak."]
            ] },
          levels: {
            support: { steps: ["For each analogy, finish the sentence ‘…because both…’.", "Ask what everybody already knows about the familiar thing (a race, a glass, a hive, a bath).", "Match that known fact to the point on the right."],
              example: { q: "What point does ‘Learning an instrument is like building a wall’ make?", steps: ["Everyone knows a wall is built one brick at a time.", "So the point is about small steps adding up."], answer: "Progress comes one small piece at a time." } },
            core: { hint: "Ask what happens to a dropped glass, and what happens to bath water with the plug out." },
            stretch: { extend: "Rewrite the beehive analogy as a simile that only shows, and explain what is lost." }
          },
          explain: "Pick one analogy and say, in one sentence, what the two things share.",
          why: "An analogy works when the familiar thing and the new thing share the exact point the speaker wants to make." },
        { title: "Spot the strongest logos",
          task: { kind: "mcq", q: "Which sentence gives the strongest logos?",
            options: ["‘Three hundred and twelve people signed the petition in one weekend.’", "‘Everyone knows the tree is lovely.’", "‘I think the council has got this badly wrong.’", "‘Imagine the street without its shade.’"], answer: 0,
            feedback: [
              "",
              "‘Everyone knows’ sounds like a fact, but it is an opinion with no source. Logos needs something that can be checked.",
              "This is the speaker’s opinion. Opinions have a place in a speech, but they are not proof. Look for a sentence with a checkable number.",
              "‘Imagine…’ asks the audience to picture something and feel its loss. That is pathos, not logos."
            ] },
          levels: {
            support: { steps: ["Logos is proof. Ask of each sentence: could I check this?", "Cross out any sentence that starts with ‘I think’ or ‘Imagine’.", "A number from a count or survey is a statistic: the strongest logos here."],
              example: { q: "Which is logos? ‘Our hall is freezing.’ or ‘The hall thermometer read 11 degrees at 9 a.m. on Monday.’", steps: ["‘Freezing’ is a feeling and an exaggeration.", "A thermometer reading can be checked."], answer: "The thermometer reading is logos." } },
            core: { hint: "Only one sentence contains something you could check against a list or a count." },
            stretch: { extend: "Explain why a statistic without a source (‘Studies show…’) is weaker logos than a specific count." }
          },
          explain: "Say what makes a statistic harder to argue with than an opinion.",
          why: "A statistic from a count is checkable proof. Opinions and appeals to imagination persuade in other ways, but they are not logos." },
        { title: "Write your own analogy",
          // contexts: the same task on the other two speech topics the department uses in this unit.
          contexts: [
            { label: "Own clothes instead of uniform",
              q: "Write one analogy of your own to explain why pupils should (or should not) be allowed to wear their own clothes instead of uniform. Then explain in two sentences how your analogy works.",
              why: "A strong answer picks something familiar that shares the exact point: for example, a uniform as a team strip (we play as one) or own clothes as a signature (nobody else writes it the same way). Then it names what the two things share." },
            { label: "Safe spaces for pupils who are bullied",
              q: "Write one analogy of your own to explain why schools should (or should not) have safe spaces for pupils who are being bullied. Then explain in two sentences how your analogy works.",
              why: "A strong answer compares the safe space to something everyone understands, such as a lifeboat, a quiet carriage on a train, or a hospital waiting room, and then explains the shared point: a place to recover before going back out." }
          ],
          task: { kind: "written", q: "Write one analogy of your own to explain why pupils should get more sleep. Then explain in two sentences how your analogy works.", marks: 10,
            criteria: [
              "My analogy compares sleep to something the audience already knows well.",
              "The two things really do share the point I am making.",
              "I explain the point in my own words, using ‘because both…’.",
              "My analogy explains; it does not just paint a picture."
            ],
            model: "‘Sleep is like charging your phone overnight.’ This analogy works because both your phone and your brain need a full charge to last the day. A phone left at 20 per cent dies by lunchtime, and a brain on five hours of sleep gives up in the same way, so the comparison explains why a late night costs you the next day." },
          levels: {
            support: { steps: ["Think of something everyone knows that needs rest or recharging: a phone, a car, a garden in winter.", "Write: ‘Sleep is like … .’", "Finish the sentence ‘This works because both…’.", "Add one sentence that explains what the audience should now understand."],
              example: { q: "Write an analogy to explain why pupils should eat breakfast.", steps: ["Something familiar that needs fuel: a car.", "‘Skipping breakfast is like starting a long drive with an empty tank.’", "Both run out before the journey is done."], answer: "‘Skipping breakfast is like starting a long drive on an empty tank.’ It works because both the car and the pupil run out of energy before the day is over." } },
            core: { hint: "What else do you know that stops working properly when it has not been recharged?" },
            stretch: { extend: "Write a second analogy for the same point, then say which of your two is fairer and why." }
          },
          explain: "Say what your two things share, in one sentence beginning ‘Both…’.",
          why: "An analogy persuades when the familiar thing and the new idea share the exact point you want the audience to accept." }
      ]
    },

    /* ───────────────────────── 3 ───────────────────────── */
    { key: "rhetorical-methods", n: 3,
      title: "Twelve rhetorical methods",
      lead: "You will know the twelve rhetorical methods by name, find them in a speech, and write about why one of them works.",
      covers: [3],
      pretext: {
        words: [
          { word: "anecdote", means: "a short story about a real event or person", sentence: "She opened with an anecdote about her grandad." },
          { word: "tricolon", means: "a list of three parallel words or phrases", sentence: "‘Shade, shelter, clean air’ is a tricolon." },
          { word: "anaphora", means: "repeating the same words at the start of sentences", sentence: "Starting three sentences with ‘It’ is anaphora." },
          { word: "imperative", means: "a command", sentence: "‘Keep the oak’ is an imperative." },
          { word: "direct address", means: "speaking straight to the audience", sentence: "Saying ‘you’ to the council is direct address." }
        ],
        passage: [
          "Rhetorical methods are the tools a speaker uses to persuade.",
          "Your class studies twelve of them.",
          "An anecdote is a short story about a real event or person.",
          "A rhetorical question does not need an answer.",
          "Emotive language makes the audience feel an emotion.",
          "Statistics are facts or data from a study.",
          "A tricolon is a list of three parallel words or phrases.",
          "A maxim is a short statement of a general truth.",
          "An opinion is a view that may not be based on fact.",
          "Direct address speaks straight to the audience, often with ‘you’.",
          "Anaphora repeats the same words at the start of several sentences.",
          "An imperative is a command.",
          "Hyperbole is exaggeration that is not meant literally.",
          "An analogy compares two things to explain one of them."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "قصة قصيرة عن حدث حقيقي أو شخص حقيقي (anecdote)",
            "قائمة من ثلاث كلمات أو عبارات متوازية (tricolon)",
            "تكرار الكلمات نفسها في بداية الجمل (anaphora)",
            "أمر (imperative)",
            "الكلام مباشرة إلى الجمهور (direct address)"
          ],
          "passage": [
            "الأساليب البلاغية (rhetorical methods) هي الأدوات التي يستعملها المتكلّم ليُقنع.",
            "يدرس صفّك اثني عشر أسلوباً منها.",
            "الحكاية القصيرة (anecdote) قصة قصيرة عن حدث حقيقي أو شخص حقيقي.",
            "السؤال البلاغي (rhetorical question) لا يحتاج إلى جواب.",
            "اللغة العاطفية (emotive language) تجعل الجمهور يشعر بعاطفة ما.",
            "الإحصائيات (statistics) حقائق أو بيانات من دراسة.",
            "الثلاثية (tricolon) قائمة من ثلاث كلمات أو عبارات متوازية.",
            "الحكمة (maxim) عبارة قصيرة عن حقيقة عامة.",
            "الرأي (opinion) وجهة نظر قد لا تستند إلى حقيقة.",
            "الخطاب المباشر (direct address) يتكلّم مباشرة إلى الجمهور، وغالباً بكلمة «أنت» (you).",
            "التكرار الاستهلالي (anaphora) يكرّر الكلمات نفسها في بداية عدّة جمل.",
            "صيغة الأمر (imperative) هي أمر.",
            "المبالغة (hyperbole) تضخيم لا يُقصد به المعنى الحرفي.",
            "القياس (analogy) يقارن بين شيئَين ليشرح أحدهما."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "krótka historia o prawdziwym zdarzeniu lub osobie (anecdote)",
            "lista trzech równoległych słów lub wyrażeń (tricolon)",
            "powtarzanie tych samych słów na początku zdań (anaphora)",
            "rozkaz (imperative)",
            "mówienie wprost do odbiorców (direct address)"
          ],
          "passage": [
            "Metody retoryczne to narzędzia, których mówca używa, żeby przekonywać.",
            "Twoja klasa poznaje dwanaście z nich.",
            "Anegdota (anecdote) to krótka historia o prawdziwym zdarzeniu lub osobie.",
            "Pytanie retoryczne nie potrzebuje odpowiedzi.",
            "Język emocjonalny (emotive language) sprawia, że odbiorcy czują emocję.",
            "Statystyki to fakty lub dane z badania.",
            "Trikolon (tricolon) to lista trzech równoległych słów lub wyrażeń.",
            "Maksyma (maxim) to krótkie stwierdzenie ogólnej prawdy.",
            "Opinia to pogląd, który może nie opierać się na faktach.",
            "Bezpośredni zwrot (direct address) mówi wprost do odbiorców, często przez „you”.",
            "Anafora (anaphora) powtarza te same słowa na początku kilku zdań.",
            "Tryb rozkazujący (imperative) to rozkaz.",
            "Hiperbola (hyperbole) to wyolbrzymienie, którego nie należy brać dosłownie.",
            "Analogia porównuje dwie rzeczy, żeby jedną z nich wyjaśnić."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma história curta sobre um acontecimento ou uma pessoa real (anecdote, anedota)",
            "uma lista de três palavras ou expressões paralelas (tricolon)",
            "repetir as mesmas palavras no início das frases (anaphora, anáfora)",
            "uma ordem (imperative, imperativo)",
            "falar diretamente com o público (direct address)"
          ],
          "passage": [
            "Os métodos retóricos são as ferramentas que quem fala usa para persuadir.",
            "A sua turma estuda doze deles.",
            "Uma anedota (anecdote) é uma história curta sobre um acontecimento ou uma pessoa real.",
            "Uma pergunta retórica não precisa de resposta.",
            "A linguagem emotiva faz o público sentir uma emoção.",
            "As estatísticas são factos/fatos ou dados de um estudo.",
            "Um tricolon é uma lista de três palavras ou expressões paralelas.",
            "Uma máxima (maxim) é uma afirmação curta de uma verdade geral.",
            "Uma opinião é um ponto de vista que pode não se basear em factos/fatos.",
            "O direct address fala diretamente com o público, muitas vezes com ‘you’.",
            "A anáfora (anaphora) repete as mesmas palavras no início de várias frases.",
            "Um imperativo é uma ordem.",
            "A hipérbole (hyperbole) é um exagero que não deve ser entendido à letra.",
            "Uma analogia compara duas coisas para explicar uma delas."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "sheeko gaaban oo ku saabsan dhacdo ama qof dhab ah (anecdote)",
            "liis saddex eray ama weedho isku qaab ah (tricolon)",
            "ku celcelinta isku erayo bilowga weedhaha (anaphora)",
            "amar (imperative)",
            "si toos ah ula hadlidda dhegaystayaasha (direct address)"
          ],
          "passage": [
            "Hababka rhetoric (rhetorical methods) waa qalabka hadluhu u isticmaalo qancinta.",
            "Fasalkaagu laba iyo toban ka mid ah ayuu baranayaa.",
            "Anecdote waa sheeko gaaban oo ku saabsan dhacdo ama qof dhab ah.",
            "Su'aal rhetoric ah (rhetorical question) jawaab uma baahna.",
            "Luqad dareen kicisa (emotive language) waxay dhegaystayaasha ka dhigtaa inay dareen qabaan.",
            "Tiro-koobyo (statistics) waa xaqiiqooyin ama xog daraasad ka soo baxday.",
            "Tricolon waa liis saddex eray ama weedho isku qaab ah.",
            "Maxim waa weedh gaaban oo sheegaysa run guud.",
            "Ra'yi (opinion) waa aragti aan xaqiiqo ku dhisnayn karin.",
            "Direct address si toos ah ayay ula hadashaa dhegaystayaasha, badanaa iyadoo isticmaalaysa 'you'.",
            "Anaphora waxay ku celcelisaa isku erayo bilowga dhawr weedhood.",
            "Imperative waa amar.",
            "Hyperbole waa buunbuunin aan loola jeedin si dhab ah.",
            "Analogy waxay isbarbar dhigtaa laba wax si ay mid ka mid ah u sharraxdo."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "коротка історія про справжню подію або людину (anecdote)",
            "перелік із трьох паралельних слів або фраз (tricolon)",
            "повторення тих самих слів на початку речень (anaphora)",
            "наказ (imperative)",
            "пряме звернення до аудиторії (direct address)"
          ],
          "passage": [
            "Риторичні прийоми (rhetorical methods) — це засоби, якими промовець переконує.",
            "Ваш клас вивчає дванадцять із них.",
            "Анекдот (anecdote) — це коротка історія про справжню подію або людину.",
            "Риторичне запитання (rhetorical question) не потребує відповіді.",
            "Емоційна мова (emotive language) змушує аудиторію відчути емоцію.",
            "Статистика (statistics) — це факти або дані з дослідження.",
            "Триколон (tricolon) — це перелік із трьох паралельних слів або фраз.",
            "Максима (maxim) — це коротке висловлення загальної істини.",
            "Думка (opinion) — це погляд, який може не спиратися на факти.",
            "Пряме звернення (direct address) говорить прямо до аудиторії, часто через «ви».",
            "Анафора (anaphora) повторює ті самі слова на початку кількох речень.",
            "Імператив (imperative) — це наказ.",
            "Гіпербола (hyperbole) — це перебільшення, яке не слід розуміти буквально.",
            "Аналогія (analogy) порівнює дві речі, щоб пояснити одну з них."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "کسی حقیقی واقعے یا شخص کے بارے میں ایک چھوٹی کہانی (anecdote)",
            "تین ہم شکل لفظوں یا فقروں کی فہرست (tricolon)",
            "جملوں کی شروعات میں ایک ہی لفظ دہرانا (anaphora)",
            "ایک حکم (imperative)",
            "سننے والوں سے براہِ راست بات کرنا (direct address)"
          ],
          "passage": [
            "خطابت کے طریقے (rhetorical methods) وہ آلات ہیں جو بولنے والا قائل کرنے کے لیے استعمال کرتا ہے۔",
            "آپ کی کلاس ان میں سے بارہ پڑھتی ہے۔",
            "Anecdote کسی حقیقی واقعے یا شخص کے بارے میں ایک چھوٹی کہانی ہے۔",
            "Rhetorical question کو جواب کی ضرورت نہیں ہوتی۔",
            "جذباتی زبان (emotive language) سننے والوں میں کوئی جذبہ پیدا کرتی ہے۔",
            "Statistics کسی مطالعے سے لیے گئے حقائق یا ڈیٹا ہیں۔",
            "Tricolon تین ہم شکل لفظوں یا فقروں کی فہرست ہے۔",
            "Maxim کسی عام سچائی کا چھوٹا بیان ہے۔",
            "رائے (opinion) ایسا خیال ہے جو شاید حقیقت پر مبنی نہ ہو۔",
            "Direct address سننے والوں سے براہِ راست بات کرتا ہے، اکثر ‘you’ کے ساتھ۔",
            "Anaphora کئی جملوں کی شروعات میں ایک ہی لفظ دہراتی ہے۔",
            "Imperative ایک حکم ہے۔",
            "Hyperbole ایسا مبالغہ ہے جو لفظی معنی میں نہیں لیا جاتا۔",
            "Analogy دو چیزوں کا موازنہ کرتی ہے تا کہ ان میں سے ایک کی وضاحت ہو۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "The twelve methods",
          paragraphs: [
            "Your teachers teach twelve rhetorical methods, each with its own icon so you can picture it. Four tell or feel: an anecdote is a short, interesting story about a real event or person; emotive language makes the audience feel a particular emotion; hyperbole is an exaggerated claim not meant to be taken literally; a maxim is a short statement of a general truth, such as ‘Actions speak louder than words.’",
            "Three prove or claim: statistics are facts or data from a study; an analogy is a comparison that explains; an opinion is a view or judgement that is not necessarily based on fact. Two make patterns: a tricolon is a series of three parallel words, phrases or clauses; anaphora repeats a word or phrase at the beginning of several sentences.",
            "Three speak to the listener: direct address names the audience or uses personal pronouns such as ‘you’; a rhetorical question is a question that does not require an answer; an imperative is a command. Learn the names. In your analysis you must use the correct name for each method."
          ],
          tip: "Dual code it: draw a tiny icon for each method next to its name. A picture is faster to recall than a definition." },
        { heading: "Spotting methods in a speech",
          paragraphs: [
            "Here is an original speech. A Year 8 pupil is speaking to the town council, which plans to cut down an old oak tree to make room for parking. Read it once for the argument, then a second time with a pencil, labelling every method you can find. There are at least ten.",
            "Notice how often one phrase uses two methods at once. A list of three that exaggerates is both a tricolon and hyperbole. Three sentences that start the same way are anaphora, and if there are exactly three they are also a tricolon. When that happens, name both."
          ],
          quote: { text: "Councillors, thank you for listening to a twelve-year-old. When I was six, my grandad lifted me into the branches of the oak at the end of Elm Street, and I have climbed it every summer since. Now you want to cut it down for four parking spaces. Four. That oak is older than this building, older than this town, older than every one of us put together. It shades our walk to school. It shelters a hundred birds. It cleans the air we breathe. Three hundred and twelve people signed our petition in one weekend. Would you knock down a library to park a car? That tree is a library of living things. Actions speak louder than words, and I believe this council is better than a car park. So keep the oak. Plant more like it. Give our street back its shade. Please. You hold the saw, and you hold the choice.",
            source: "‘The Last Tree on Elm Street’ — original speech written for Ad Astra" },
          tip: "Label the method, then ask the harder question: what does it make the audience feel or think?" },
        { heading: "Writing about a method: name, quote, explain",
          paragraphs: [
            "Your analysis question for this unit is always the same shape: How does the speaker use rhetorical methods to persuade the audience? Three rules: use quotations; focus on one method at a time and explain in detail why it is effective; and use the correct name for the method.",
            "A useful frame: ‘The speaker uses [method] in the quotation ‘…’. This is persuasive because… It makes the audience feel… so they are more likely to…’. The last part matters most. Naming a method earns little on its own; explaining what it does to the listener is where the marks are."
          ],
          worked: { q: "Write a name, quote, explain sentence about the rhetorical question in ‘The Last Tree on Elm Street’.",
            steps: ["Name: the speaker uses a rhetorical question.", "Quote: “Would you knock down a library to park a car?”", "Explain: the councillors must answer ‘no’ in their heads, and the question also contains an analogy, tree as library, so cutting it down suddenly looks like destroying knowledge."],
            answer: "The speaker uses a rhetorical question, “Would you knock down a library to park a car?”, which forces the councillors to answer ‘no’ in their own heads. Because the question also compares the tree to a library, cutting it down starts to feel like destroying something precious and irreplaceable." },
          tip: "Quote short. Four to eight words is usually enough." }
      ],
      gate: [
        { kind: "mcq", q: "What is a tricolon?", options: ["A question that does not need an answer", "A command", "A series of three parallel words, phrases or clauses", "A short statement of a general truth"], answer: 2,
          feedback: [
            "A question that needs no answer is a rhetorical question. ‘Tri’ means three: a tricolon is a list of three parallel parts.",
            "A command is an imperative. The clue in ‘tricolon’ is ‘tri’, meaning three, as in triangle or tricycle.",
            "",
            "A short statement of a general truth is a maxim. A tricolon is a pattern of three."
          ],
          why: "Tri means three. A tricolon is three parallel words, phrases or clauses, such as ‘shade, shelter and clean air’." },
        { kind: "gap", q: "The repetition of a word or phrase at the beginning of several sentences is called ___.", answer: "anaphora", options: ["anaphora", "analogy", "anecdote"],
          feedback: {
            "analogy": "An analogy is a comparison made to explain something. The three ‘an-’ words are easy to mix up: anaphora is the one about repetition at the start of sentences.",
            "anecdote": "An anecdote is a short story about a real event. Anaphora is repetition at the start of sentences, as in ‘It shades… It shelters… It cleans…’."
          },
          why: "Anaphora is repetition at the beginning of sentences or clauses." },
        { kind: "mcq", q: "“So keep the oak.” is an example of which method?", options: ["Imperative", "Anecdote", "Statistic", "Maxim"], answer: 0,
          feedback: [
            "",
            "An anecdote tells a short story about something that happened. This sentence tells the council what to do: a command, which is an imperative.",
            "A statistic is a number from a study or a count. There is no number here; the verb ‘keep’ gives an order.",
            "A maxim is a general truth that applies to everyone, such as ‘Actions speak louder than words.’ This sentence is a specific instruction: an imperative."
          ],
          why: "‘Keep’ is a command verb, so the sentence is an imperative." }
      ],
      modules: [
        { title: "Name the method",
          task: { kind: "match", q: "Match each quotation from ‘The Last Tree on Elm Street’ to the method it shows.",
            pairs: [
              ["“When I was six, my grandad lifted me into the branches of the oak”", "anecdote"],
              ["“Three hundred and twelve people signed our petition in one weekend.”", "statistic"],
              ["“Actions speak louder than words”", "maxim"],
              ["“Would you knock down a library to park a car?”", "rhetorical question"],
              ["“Plant more like it.”", "imperative"]
            ] },
          levels: {
            support: { steps: ["A story about the past, with ‘When I was…’, is an anecdote.", "A number from a count is a statistic.", "A short saying that is true for everyone is a maxim.", "A question mark with no answer expected is a rhetorical question.", "A sentence that starts with a command verb is an imperative."],
              example: { q: "Name the method: ‘Last year, 40 pupils were late to first lesson because of the bus.’", steps: ["There is a number.", "It comes from a count of real pupils."], answer: "A statistic." } },
            core: { hint: "Look at how each quotation begins: a time, a number, a saying, a question word or a command verb." },
            stretch: { extend: "Find a phrase in the speech that uses two methods at once, and name both." }
          },
          explain: "Say what you looked at first in each quotation to decide its method.",
          why: "Each method has a tell-tale sign: a story, a number, a saying, a question or a command." },
        { title: "Two methods at once",
          task: { kind: "mcq", q: "“older than this building, older than this town, older than every one of us put together” uses two methods together. Which two?",
            options: ["Tricolon and hyperbole", "Anecdote and statistic", "Maxim and imperative", "Analogy and anaphora"], answer: 0,
            feedback: [
              "",
              "There is no story and no number here. Count the parts of the list: there are three. Then ask whether the last one is literally true.",
              "A maxim is a general saying and an imperative is a command. This phrase is a list, and its last part is an exaggeration.",
              "There is no comparison that explains, so no analogy. The repeated word ‘older’ does make a pattern, but because there are exactly three parts the method is a tricolon, and the exaggeration is hyperbole."
            ] },
          levels: {
            support: { steps: ["Count the parts of the list.", "Ask whether the oak really is older than everyone’s ages added together.", "A list of three is a tricolon; an exaggeration is hyperbole."],
              example: { q: "Which two methods? ‘We waited for hours, for days, for a lifetime.’", steps: ["Three parts: a tricolon.", "‘A lifetime’ is not literally true: hyperbole."], answer: "Tricolon and hyperbole." } },
            core: { hint: "How many parts does the list have, and is the last one literally true?" },
            stretch: { extend: "Explain why putting the exaggeration last in the list of three makes it hit harder." }
          },
          explain: "Say how you can tell a tricolon from anaphora when a phrase repeats the same word.",
          why: "Three parallel parts make a tricolon, and ‘older than every one of us put together’ is an exaggeration, so the phrase is also hyperbole." },
        { title: "How does the speaker persuade?",
          // contexts: the same analysis task on the other two speeches in this unit.
          contexts: [
            { label: "The Captain’s Speech",
              q: "How does the captain use rhetorical methods to persuade her team to carry on in ‘The Captain’s Speech’? Write one developed paragraph. Focus on one method and explain in detail why it is effective.",
              why: "Strong answers choose the anaphora of “You have crossed the ice. You have carried the sick. You have eaten cold rations” (praise that builds pride), the imperative “Pick up your packs.” (a command that assumes agreement), or the direct address of “Friends, look at me.” (a leader asking for attention as an equal)." },
            { label: "Clean Air for Hollowmere (conclusion)",
              q: "Read the conclusion of the original model speech ‘Clean Air for Hollowmere’: “So let us be remembered as the town that chose to act. One hour, one street, one morning at a time. Give our children the simplest gift there is: clean air. Hollowmere, the facts are clear, the cost is small and the time is now. Let us not wait for another red day. Let us act tonight.” How does the speaker use rhetorical methods to persuade the town? Write one developed paragraph. Focus on one method and explain in detail why it is effective.",
              why: "Strong answers choose the tricolon “One hour, one street, one morning at a time.” (the change made to sound small and doable), the imperative “Give our children the simplest gift there is: clean air.” (a command softened into a gift), or the anaphora of “Let us not wait for another red day. Let us act tonight.” (a shared call to action)." }
          ],
          task: { kind: "written", q: "How does the speaker use rhetorical methods to persuade the council in ‘The Last Tree on Elm Street’? Write one developed paragraph. Focus on one method and explain in detail why it is effective.", marks: 10,
            criteria: [
              "I name the rhetorical method correctly.",
              "I use a short quotation.",
              "I explain why the method is persuasive for this audience.",
              "I say how the audience will feel, and what they are more likely to do.",
              "I write about one method in depth rather than listing several."
            ],
            model: "The speaker uses anaphora when she says “It shades our walk to school. It shelters a hundred birds. It cleans the air we breathe.” Each sentence begins with ‘It’, so the oak becomes the subject three times in a row, like a drumbeat. This is persuasive because every repeat adds another job the tree does for the town, and the councillors hear the list grow. The word ‘our’ also quietly makes the tree belong to everyone in the room. By the third sentence the audience feels that cutting the tree down would take something from them personally, so they are more likely to vote to keep it." },
          levels: {
            support: { steps: ["Choose one method you are sure of (for example the anaphora of ‘It shades… It shelters… It cleans…’).", "Write: ‘The speaker uses [method] when she says ‘…’.’", "Explain what the method does: repeats, exaggerates, asks, commands.", "Finish with how the councillors feel and what they are more likely to do."],
              example: { q: "Write about the imperatives in: ‘Turn off the lights. Shut the door. Save the planet one switch at a time.’", steps: ["Name: imperatives.", "Quote: ‘Turn off the lights.’", "Explain: short commands sound easy to obey, and the last one makes a tiny action feel huge."], answer: "The writer uses imperatives such as ‘Turn off the lights.’ These short commands sound simple to obey, so the reader feels the task is easy. The final imperative links one switch to saving the planet, which makes a small action feel important, so the reader is more likely to do it." } },
            core: { hint: "Pick the three sentences that begin with ‘It’. What does each repeat add?" },
            stretch: { extend: "Add a second paragraph on a different method, then explain how the two methods work together at the end of the speech." }
          },
          explain: "Say which method you chose and which single word in your quotation you would zoom in on.",
          why: "A strong answer names one method, quotes briefly, explains how it works on this audience, and ends with what the audience will feel and do." }
      ]
    },

    /* ───────────────────────── 4 ───────────────────────── */
    { key: "pathos-and-analysis", n: 4,
      title: "Pathos, and analysing a speech: What, How, Why",
      lead: "You will know how pathos works, which methods create it, and how to analyse a whole speech with What, How and Why.",
      covers: [4, 5, 6],
      pretext: {
        words: [
          { word: "pathos", means: "persuasion through feeling", sentence: "Charity adverts rely on pathos." },
          { word: "emotion", means: "a strong feeling, such as pity or anger", sentence: "Choose the emotion you want the audience to feel." },
          { word: "appeal", means: "a request that works on the audience", sentence: "An appeal to pity asks the audience to feel sorry." },
          { word: "civil rights", means: "the equal rights of every citizen", sentence: "Martin Luther King led the civil rights movement." },
          { word: "segregation", means: "keeping groups of people apart by law", sentence: "Segregation kept black and white Americans apart." }
        ],
        passage: [
          "Pathos is about making your audience feel something.",
          "Charity adverts use pathos all the time.",
          "A picture of a hungry child goes straight for the heart.",
          "Many emotions can persuade: pity, anger, fear, pride and hope.",
          "Rhetorical questions and direct address are good ways to create pathos.",
          "Martin Luther King was an American civil rights leader.",
          "In 1963 he gave a famous speech in Washington.",
          "He spoke of his dream of a country without segregation or racism.",
          "Segregation meant black and white people were kept apart by law.",
          "King believed in peaceful protest.",
          "He was shot dead in Memphis on 4 April 1968.",
          "To analyse his speech, ask what he says, how he says it, and why."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الإقناع عن طريق الشعور (pathos)",
            "إحساس قوي، مثل الشفقة أو الغضب (emotion)",
            "طلب يؤثّر في الجمهور (appeal)",
            "الحقوق المتساوية لكل مواطن (civil rights)",
            "فصل مجموعات من الناس عن بعضها بالقانون (segregation)"
          ],
          "passage": [
            "الباثوس (pathos) هو أن تجعل جمهورك يشعر بشيء.",
            "إعلانات الجمعيات الخيرية تستعمل الباثوس طوال الوقت.",
            "صورة طفل جائع تذهب مباشرة إلى القلب.",
            "عواطف كثيرة يمكن أن تُقنع: الشفقة، والغضب، والخوف، والفخر، والأمل.",
            "الأسئلة البلاغية والخطاب المباشر طريقتان جيدتان لصنع الباثوس.",
            "كان مارتن لوثر كينغ زعيماً أمريكياً للحقوق المدنية.",
            "في عام 1963 ألقى خطبة مشهورة في واشنطن.",
            "تكلّم عن حلمه ببلد بلا فصل عنصري (segregation) ولا عنصرية.",
            "كان الفصل العنصري يعني أن السود والبيض يُفصلون عن بعضهم بالقانون.",
            "كان كينغ يؤمن بالاحتجاج السلمي.",
            "قُتل بالرصاص في ممفيس في 4 أبريل 1968.",
            "لتحلّل خطبته، اسأل: ماذا يقول، وكيف يقوله، ولماذا."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "przekonywanie przez uczucia (pathos)",
            "silne uczucie, takie jak litość lub gniew (emotion)",
            "prośba, która działa na odbiorców (appeal)",
            "równe prawa każdego obywatela (civil rights)",
            "trzymanie grup ludzi osobno na mocy prawa (segregation)"
          ],
          "passage": [
            "Pathos polega na tym, żeby odbiorcy coś poczuli.",
            "Reklamy organizacji charytatywnych używają pathosu cały czas.",
            "Zdjęcie głodnego dziecka trafia prosto do serca.",
            "Wiele emocji może przekonywać: litość, gniew, strach, duma i nadzieja.",
            "Pytania retoryczne i bezpośredni zwrot to dobre sposoby na tworzenie pathosu.",
            "Martin Luther King był amerykańskim przywódcą ruchu praw obywatelskich.",
            "W 1963 roku wygłosił słynną przemowę w Waszyngtonie.",
            "Mówił o swoim marzeniu o kraju bez segregacji i rasizmu.",
            "Segregacja (segregation) oznaczała, że czarnych i białych ludzi trzymano osobno na mocy prawa.",
            "King wierzył w pokojowy protest.",
            "Został zastrzelony w Memphis 4 kwietnia 1968 roku.",
            "Żeby przeanalizować jego przemowę, zapytaj, co mówi, jak to mówi i dlaczego."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "persuasão pelo sentimento (pathos)",
            "um sentimento forte, como pena ou raiva (emotion, emoção)",
            "um pedido que mexe com o público (appeal, apelo)",
            "os direitos iguais de todos os cidadãos (civil rights, direitos civis)",
            "manter grupos de pessoas separados por lei (segregation, segregação)"
          ],
          "passage": [
            "O pathos é fazer o seu público sentir alguma coisa.",
            "Os anúncios de caridade usam o pathos a toda a hora.",
            "A imagem de uma criança com fome vai direta ao coração.",
            "Muitas emoções podem persuadir: pena, raiva, medo, orgulho e esperança.",
            "As perguntas retóricas e o direct address são boas maneiras de criar pathos.",
            "Martin Luther King foi um líder americano dos direitos civis.",
            "Em 1963 ele fez um discurso famoso em Washington.",
            "Ele falou do seu sonho de um país sem segregação nem racismo.",
            "Segregação queria dizer que as pessoas negras e brancas eram mantidas separadas por lei.",
            "King acreditava no protesto pacífico.",
            "Ele foi morto a tiro em Memphis, a 4 de abril de 1968.",
            "Para analisar o discurso dele, pergunte o que ele diz, como o diz, e por quê."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "qancin dareen ku dhisan (pathos)",
            "dareen xoog leh, sida naxariis ama cadho (emotion)",
            "codsi dhegaystayaasha wax ku sameeya (appeal)",
            "xuquuqda siman ee muwaadin kasta (civil rights)",
            "dadka kooxo kooxo u kala saarid sharci dartii (segregation)"
          ],
          "passage": [
            "Pathos waa in dhegaystayaashaada wax ka dareensiiso.",
            "Xayaysiisyada samafalka had iyo jeer pathos ayay isticmaalaan.",
            "Sawir ilmo gaajaysan si toos ah wadnaha ayuu u taabtaa.",
            "Dareenno badan ayaa qancin kara: naxariis, cadho, cabsi, hanweyn iyo rajo.",
            "Su'aalaha rhetoric iyo direct address waa siyaabo wanaagsan oo pathos lagu abuuro.",
            "Martin Luther King wuxuu ahaa hoggaamiye xuquuqul insaan (civil rights) oo Mareykan ah.",
            "Sannadkii 1963 khudbad caan ah ayuu ka jeediyay Washington.",
            "Wuxuu ka hadlay riyadiisa ah dal aan lahayn kala-sooc (segregation) iyo cunsuriyad.",
            "Segregation micnaheedu waa in dadka madow iyo kuwa cad sharci lagu kala saaro.",
            "King wuxuu rumaysnaa mudaaharaad nabdoon.",
            "Waxaa lagu toogtay Memphis 4 April 1968.",
            "Si aad khudbaddiisa u falanqayso, is weydii waxa uu sheegayo, sida uu u sheegayo, iyo sababta."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "переконання через почуття (pathos)",
            "сильне почуття, наприклад жаль або гнів (emotion)",
            "прохання, яке діє на аудиторію (appeal)",
            "рівні права кожного громадянина (civil rights)",
            "роз’єднання груп людей за законом (segregation)"
          ],
          "passage": [
            "Патос (pathos) — це про те, щоб ваша аудиторія щось відчула.",
            "Реклама благодійних організацій весь час використовує патос.",
            "Фотографія голодної дитини б’є прямо в серце.",
            "Переконувати можуть багато емоцій: жаль, гнів, страх, гордість і надія.",
            "Риторичні запитання та пряме звернення — добрі способи створити патос.",
            "Мартін Лютер Кінг був американським лідером руху за громадянські права (civil rights).",
            "У 1963 році він виголосив відому промову у Вашингтоні.",
            "Він говорив про свою мрію про країну без сегрегації та расизму.",
            "Сегрегація (segregation) означала, що чорних і білих людей тримали окремо за законом.",
            "Кінг вірив у мирний протест.",
            "Його застрелили в Мемфісі 4 квітня 1968 року.",
            "Щоб проаналізувати його промову, запитайте, що він говорить, як він це говорить і чому."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "احساس کے ذریعے قائل کرنا (pathos)",
            "ایک شدید احساس، جیسے رحم یا غصہ (emotion)",
            "ایسی درخواست جو سننے والوں پر اثر کرے (appeal)",
            "ہر شہری کے برابر حقوق (civil rights)",
            "لوگوں کے گروہوں کو قانون کے ذریعے الگ رکھنا (segregation)"
          ],
          "passage": [
            "Pathos کا مطلب ہے اپنے سننے والوں کو کچھ محسوس کرانا۔",
            "خیراتی اداروں کے اشتہار ہر وقت pathos استعمال کرتے ہیں۔",
            "ایک بھوکے بچے کی تصویر سیدھی دل پر اثر کرتی ہے۔",
            "بہت سے جذبات قائل کر سکتے ہیں: رحم، غصہ، خوف، فخر اور امید۔",
            "Rhetorical questions اور direct address، pathos پیدا کرنے کے اچھے طریقے ہیں۔",
            "مارٹن لوتھر کنگ ایک امریکی شہری حقوق (civil rights) کے رہنما تھے۔",
            "1963 میں انھوں نے واشنگٹن میں ایک مشہور تقریر کی۔",
            "انھوں نے ایک ایسے ملک کے اپنے خواب کی بات کی جس میں نہ segregation ہو نہ نسل پرستی۔",
            "Segregation کا مطلب تھا کہ سیاہ فام اور سفید فام لوگوں کو قانون کے ذریعے الگ رکھا جاتا تھا۔",
            "کنگ پُرامن احتجاج پر یقین رکھتے تھے۔",
            "انھیں 4 اپریل 1968 کو میمفس میں گولی مار کر قتل کر دیا گیا۔",
            "ان کی تقریر کا تجزیہ کرنے کے لیے پوچھیں: وہ کیا کہتے ہیں، کیسے کہتے ہیں، اور کیوں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "What pathos is, and why it works",
          paragraphs: [
            "Pathos is all about making your audience feel something. The pictures of hungry children on a charity appeal are pathos. So are the leaflets that come through the door asking for a donation: rather than pages of detailed arguments and statistics about how the charity spends its money, they go straight for the heart. If you can stir an audience’s emotions, they will listen.",
            "Human beings are full of emotion, and that makes us easy to influence through it. In a perfect world, only logos would persuade us, because facts are facts. In the real world, we are swayed by how we feel. That is why pathos is powerful, and why Aristotle warned that it can be misused.",
            "Many emotions can do the work: pity, anger, fear, guilt, pride, hope, even laughter. Before you write, decide which one you want. A speech that tries to make the audience feel everything usually makes them feel nothing."
          ],
          tip: "Pathos with truth persuades. Pathos without truth is the trick Aristotle accused the Sophists of." },
        { heading: "Methods that create pathos",
          paragraphs: [
            "Some rhetorical methods are built for pathos. A rhetorical question makes listeners reflect on what they think is acceptable, and it can make them feel angry or ashamed that they have not acted. Direct address creates a strong, immediate connection: the listener feels personally involved. Emotive language chooses words for their feeling. An anecdote puts a real person in front of the audience. Hyperbole raises the stakes. A maxim borrows the authority of a saying everybody accepts, such as ‘The pen is mightier than the sword.’",
            "Look at how the Elm Street speech ends. “Please.” is one word on its own: a child asking adults for help, which is pathos through plainness. Then “You hold the saw, and you hold the choice.” uses direct address twice, so each councillor feels the decision in their own hands."
          ],
          worked: { q: "Explain how direct address creates pathos in “You hold the saw, and you hold the choice.”",
            steps: ["Name the method: direct address, the repeated ‘you’.", "Say what it does: it picks out each councillor personally instead of talking about ‘the council’.", "Name the feeling: responsibility, and perhaps guilt, because the saw is now in their hands."],
            answer: "The repeated ‘you’ speaks to each councillor as an individual, so nobody can hide behind the group. Pairing ‘the saw’ with ‘the choice’ makes them feel personally responsible for whatever happens to the tree." },
          tip: "After you name the method, always name the emotion. Pathos is a feeling, so say which one." },
        { heading: "Martin Luther King and his speech",
          paragraphs: [
            "Martin Luther King Jr. was an American civil rights leader. He grew up in Atlanta, where his father was the minister of Ebenezer Baptist Church, and he later became a minister there himself. In the 1950s and 1960s, black Americans were kept apart from white Americans by law, in schools, buses and restaurants. This was segregation. King organised marches and boycotts to end it, and he insisted that protest should be nonviolent.",
            "His most famous speech was given in Washington in 1963, to a huge crowd gathered to demand freedom and jobs. It is usually called the ‘I have a dream’ speech. In it, King looks back one hundred years to the Emancipation Proclamation, which had declared enslaved people free, and says that black Americans were still not free: still poor, still segregated, still treated unjustly. He warns that the nation cannot go on like this, and he refuses despair. Then he describes his dream of a country where people of every race live as equals and children are judged by their character, not their colour. He repeats the words of his dream again and again: that is anaphora.",
            "King was shot dead on 4 April 1968, on a motel balcony in Memphis, Tennessee. The speech is still in copyright, so it is not printed here. Your teacher will give you the text in class. Read it with the five strategies: build background knowledge; predict from the title and headings; read actively, asking questions; clarify tricky vocabulary; summarise each paragraph with a short title."
          ],
          tip: "When you read a speech this famous, note the date and the audience first. Rhetoric is always aimed at someone, somewhere, at a particular moment." },
        { heading: "Analysing a speech: What, How, Why",
          paragraphs: [
            "The question ‘How does the speaker use rhetoric in the speech?’ breaks into three smaller ones. What is the speaker saying? How are they saying it (which quotation, which rhetorical method)? Why are they saying it (what do they want the audience to feel and do)?",
            "Analytical verbs sharpen the What. A speaker may use rhetoric to criticise something, to teach the audience something, to warn them, to reveal the importance of something, or to celebrate it. Start your paragraph with one: ‘In her speech, the speaker uses rhetoric to warn the council that…’. Then give the How with a quotation and the method’s name, and finish with the Why: the effect on the audience and the speaker’s aim."
          ],
          worked: { q: "Plan a What, How, Why paragraph on ‘The Last Tree on Elm Street’, using the verb ‘warn’.",
            steps: ["What: the speaker uses rhetoric to warn the council that they will lose something they cannot replace.", "How: the rhetorical question and analogy “Would you knock down a library to park a car?”", "Why: the council feels that cutting the tree down would be an act of destruction, so they are more likely to vote against it."],
            answer: "In her speech, the speaker uses rhetoric to warn the council that they will lose something they cannot replace. She does this with a rhetorical question that is also an analogy: “Would you knock down a library to park a car?” A library is a place of learning that takes years to build, so the councillors feel that destroying the oak would be an act of vandalism, and they are more likely to vote to keep it." },
          tip: "What, How, Why: a verb, a quotation with a method name, and an effect on the audience." }
      ],
      gate: [
        { kind: "mcq", q: "Pathos appeals to the audience’s…", options: ["emotions and values", "logic and facts", "trust in the speaker", "knowledge of history"], answer: 0,
          feedback: [
            "",
            "Logic and facts are logos. Pathos is the appeal to feeling: pity, anger, fear, pride, hope.",
            "Trust in the speaker is ethos. Pathos works on how the audience feels, not on who is speaking.",
            "Knowledge of history is what a historical analogy relies on. Pathos is about the audience’s emotions and values."
          ],
          why: "Pathos is persuasion through emotion and values." },
        { kind: "mcq", q: "In which year did Martin Luther King give his most famous speech in Washington?", options: ["1955", "1963", "1968", "1975"], answer: 1,
          feedback: [
            "1955 is early in the civil rights movement, before the Washington speech. The speech was given in 1963.",
            "",
            "1968 is the year King was shot dead in Memphis. His most famous speech came five years earlier, in 1963.",
            "By 1975 King had been dead for seven years. The speech was given in Washington in 1963."
          ],
          why: "The speech was delivered in Washington in 1963. King was assassinated on 4 April 1968." },
        { kind: "gap", q: "To analyse a speech, ask what the speaker is saying, ___ they are saying it, and why.", answer: "how", options: ["how", "when", "where"],
          feedback: {
            "when": "The date matters for context, but the three analysis questions are What, How and Why. ‘How’ is where you name the quotation and the rhetorical method.",
            "where": "The place matters for context, but the middle analysis question is How: which words and which method the speaker uses."
          },
          why: "What (the point), How (quotation and method), Why (effect and aim)." }
      ],
      modules: [
        { title: "Analytical verbs",
          task: { kind: "match", q: "Match each analytical verb to what it means a speaker is doing.",
            pairs: [
              ["criticise", "Point out what is wrong or unfair"],
              ["teach", "Help the audience understand something new"],
              ["warn", "Show what will happen if nothing changes"],
              ["reveal the importance of", "Show why something matters more than people think"],
              ["celebrate", "Praise what is good and worth being proud of"]
            ] },
          levels: {
            support: { steps: ["‘Criticise’ is negative: finding fault.", "‘Teach’ is about giving knowledge.", "‘Warn’ points to the future and to danger.", "‘Reveal the importance of’ shows hidden value.", "‘Celebrate’ is positive: praising."],
              example: { q: "Which verb fits? ‘If we keep idling our engines outside the gates, the air will only get worse.’", steps: ["It points to the future.", "It names a danger."], answer: "Warn." } },
            core: { hint: "Two verbs are about the present (good or bad), one is about the future, two are about understanding." },
            stretch: { extend: "Find one sentence in ‘The Last Tree on Elm Street’ for each of three different verbs." }
          },
          explain: "Say which verb you would choose for the Elm Street speech, and why.",
          why: "Analytical verbs name what the rhetoric is doing, which turns a description into analysis." },
        { title: "Build the paragraph",
          task: { kind: "order", q: "Put the parts of a What, How, Why paragraph in the best order.",
            items: ["Say what the speaker is doing, using an analytical verb", "Give a short quotation and name the rhetorical method", "Explain how the method works on the audience", "Say what the speaker wants the audience to feel and do"] },
          levels: {
            support: { steps: ["Start with the big idea: what is the speaker saying?", "Then prove it with words from the speech.", "Then explain those words.", "End with the aim."],
              example: { q: "Order these for a paragraph about a football manager’s team talk: the quotation; the effect on the players; the manager’s aim; what the manager is saying.", steps: ["What first.", "Quotation second.", "Effect third.", "Aim last."], answer: "What the manager is saying; the quotation; the effect on the players; the manager’s aim." } },
            core: { hint: "What, then How, then Why. The quotation belongs to How." },
            stretch: { extend: "Explain why a paragraph that starts with the quotation is usually weaker than one that starts with the What." }
          },
          explain: "Explain why the quotation comes after the What and not before it.",
          why: "What (verb), How (quotation and method), Why (effect and aim). This order makes the argument lead and the evidence follow." },
        { title: "What, How, Why paragraph",
          // contexts: the same paragraph task with a different analytical verb from the department's list.
          contexts: [
            { label: "Warn",
              q: "Write one What, How, Why paragraph on ‘The Last Tree on Elm Street’. Begin: ‘In her speech, the speaker uses rhetoric to warn the council…’. Include a quotation, the method’s name and the effect on the audience.",
              why: "Strong answers use the rhetorical question and analogy “Would you knock down a library to park a car?”, or the single-word sentence “Four.”, to show the council what they are about to lose." },
            { label: "Celebrate",
              q: "Write one What, How, Why paragraph on ‘The Last Tree on Elm Street’. Begin: ‘In her speech, the speaker uses rhetoric to celebrate…’. Include a quotation, the method’s name and the effect on the audience.",
              why: "Strong answers use the anaphora “It shades our walk to school. It shelters a hundred birds. It cleans the air we breathe.” or the tricolon of “older than this building, older than this town” to praise the tree’s age and gifts." }
          ],
          task: { kind: "written", q: "Write one What, How, Why paragraph on ‘The Last Tree on Elm Street’. Begin: ‘In her speech, the speaker uses rhetoric to criticise the council…’. Include a quotation, the method’s name and the effect on the audience.", marks: 10,
            criteria: [
              "I begin with the analytical verb and say what the speaker is criticising.",
              "I include a short quotation.",
              "I name the rhetorical method correctly.",
              "I explain how the method makes the audience feel.",
              "I end with what the speaker wants the audience to do."
            ],
            model: "In her speech, the speaker uses rhetoric to criticise the council for valuing cars above a living tree. She does this with hyperbole and a tricolon: the oak is “older than this building, older than this town, older than every one of us put together”. The exaggeration makes the council’s plan look small and short-sighted, because they are trading something ancient for “four parking spaces”. The audience feels embarrassed on the council’s behalf, and the councillors themselves are pushed to prove they are better than that by voting to keep the oak." },
          levels: {
            support: { steps: ["What: finish the sentence ‘…to criticise the council for…’.", "How: choose a quotation that shows the council in a bad light (for example the “four parking spaces” or the library question).", "Name the method.", "Why: say how the councillors feel, and what the speaker wants them to do."],
              example: { q: "Write a What, How, Why paragraph about this line from a school assembly: ‘Every day, 200 perfectly good sandwiches go in our bins.’ Use ‘criticise’.", steps: ["What: the speaker criticises food waste.", "How: the statistic ‘200 perfectly good sandwiches’.", "Why: the number shocks the audience into feeling guilty, so they finish their lunch."], answer: "In the assembly, the speaker uses rhetoric to criticise pupils for wasting food. He uses a statistic, ‘200 perfectly good sandwiches’, and the word ‘perfectly’ makes the waste feel deliberate. The audience feels guilty, which is what he wants, so that they eat what they take." } },
            core: { hint: "Which quotation makes the council’s plan look smallest? Start there." },
            stretch: { extend: "Write a second paragraph using a different verb (‘teach’ or ‘reveal the importance of’), and link the two paragraphs with a sentence about how the speech moves from criticism to hope." }
          },
          explain: "Say which word in your quotation does the criticising, and why you picked it.",
          why: "A strong What, How, Why paragraph opens with the verb, proves it with a named method, and ends with the effect on the audience and the speaker’s aim." }
      ]
    },

    /* ───────────────────────── 5 ───────────────────────── */
    { key: "introduction-ethos-logos", n: 5,
      title: "Structuring your speech: introduction, ethos and the logos argument",
      lead: "You will know the six-part structure of a persuasive speech, write an introduction that earns trust, and build your first argument on facts.",
      covers: [7, 8],
      pretext: {
        words: [
          { word: "structure", means: "the order of the parts of a piece of writing", sentence: "A clear structure helps the audience follow you." },
          { word: "introduction", means: "the opening that tells the audience your argument", sentence: "Your introduction should say what you want to achieve." },
          { word: "ethos", means: "showing why you are the right person to speak", sentence: "Build your ethos early, in the second part." },
          { word: "argument", means: "a point you make, with reasons and evidence", sentence: "Your first argument should be built on facts." },
          { word: "statistic", means: "a fact in number form", sentence: "One strong statistic can carry a whole paragraph." }
        ],
        passage: [
          "A persuasive speech has a clear structure.",
          "First comes the introduction, which tells the audience your argument.",
          "Next you establish your ethos: why you are the right person to speak.",
          "Then comes your first argument, built on logos.",
          "After that, you answer the counterargument.",
          "Your second argument uses pathos.",
          "Finally, the conclusion brings all three appeals together.",
          "A good introduction says what you want to achieve.",
          "It includes the audience in your purpose.",
          "It uses rhetorical methods from the very first line.",
          "A logos argument names a problem and explains how to fix it.",
          "Facts and statistics make your argument hard to argue with.",
          "Choose a serious topic you care about."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "ترتيب أجزاء قطعة الكتابة (structure)",
            "الافتتاحية التي تخبر الجمهور بحجّتك (introduction)",
            "إظهار لماذا أنت الشخص المناسب للكلام (ethos)",
            "فكرة تطرحها، مع أسباب ودليل (argument)",
            "حقيقة على شكل رقم (statistic)"
          ],
          "passage": [
            "الخطبة الإقناعية لها بنية (structure) واضحة.",
            "أولاً تأتي المقدّمة (introduction)، التي تخبر الجمهور بحجّتك.",
            "بعدها تُثبت إيثوسك (ethos): لماذا أنت الشخص المناسب للكلام.",
            "ثم تأتي حجّتك الأولى، المبنيّة على اللوغوس (logos).",
            "بعد ذلك، تردّ على الحجّة المضادّة (counterargument).",
            "حجّتك الثانية تستعمل الباثوس (pathos).",
            "وأخيراً، تجمع الخاتمة (conclusion) الأساليب الثلاثة معاً.",
            "المقدّمة الجيدة تقول ما الذي تريد تحقيقه.",
            "وتُشرك الجمهور في هدفك.",
            "وتستعمل الأساليب البلاغية من أول سطر.",
            "حجّة اللوغوس تسمّي مشكلة وتشرح كيف تُحلّ.",
            "الحقائق والإحصائيات تجعل حجّتك صعبة الجدال.",
            "اختر موضوعاً جاداً يهمّك."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "kolejność części tekstu (structure)",
            "początek, który mówi odbiorcom, jaki jest twój argument (introduction)",
            "pokazanie, dlaczego jesteś właściwą osobą, żeby mówić (ethos)",
            "myśl, którą przedstawiasz, z powodami i dowodami (argument)",
            "fakt w postaci liczby (statistic)"
          ],
          "passage": [
            "Przemowa perswazyjna ma jasną strukturę.",
            "Najpierw jest wstęp (introduction), który mówi odbiorcom, jaki jest twój argument.",
            "Potem budujesz swój ethos: dlaczego jesteś właściwą osobą, żeby mówić.",
            "Następnie przychodzi twój pierwszy argument, oparty na logosie.",
            "Po nim odpowiadasz na kontrargument.",
            "Twój drugi argument używa pathosu.",
            "Na końcu zakończenie łączy wszystkie trzy odwołania razem.",
            "Dobry wstęp mówi, co chcesz osiągnąć.",
            "Włącza odbiorców w twój cel.",
            "Używa metod retorycznych już od pierwszej linijki.",
            "Argument oparty na logosie nazywa problem i wyjaśnia, jak go naprawić.",
            "Fakty i statystyki sprawiają, że z twoim argumentem trudno się spierać.",
            "Wybierz poważny temat, który jest dla ciebie ważny."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a ordem das partes de um texto (structure, estrutura)",
            "a abertura que diz ao público qual é o seu argumento (introduction, introdução)",
            "mostrar por que você é a pessoa certa para falar (ethos)",
            "um ponto que você defende, com razões e provas (argument, argumento)",
            "um facto/fato em forma de número (statistic, estatística)"
          ],
          "passage": [
            "Um discurso persuasivo tem uma estrutura clara.",
            "Primeiro vem a introdução, que diz ao público qual é o seu argumento.",
            "A seguir você estabelece o seu ethos: por que você é a pessoa certa para falar.",
            "Depois vem o seu primeiro argumento, construído com logos.",
            "Depois disso, você responde ao contra-argumento.",
            "O seu segundo argumento usa pathos.",
            "Por fim, a conclusão junta os três apelos.",
            "Uma boa introdução diz o que você quer alcançar.",
            "Inclui o público no seu propósito.",
            "Usa métodos retóricos desde a primeira linha.",
            "Um argumento de logos nomeia um problema e explica como resolvê-lo.",
            "Os factos/fatos e as estatísticas tornam o seu argumento difícil de contestar.",
            "Escolha um tema sério que seja importante para você."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "sida qaybaha qoraalku u kala horreeyaan (structure)",
            "bilowga dhegaystayaasha u sheega doodaada (introduction)",
            "muujinta sababta aad u tahay qofka saxda ah ee hadlaya (ethos)",
            "hadal aad qorto, oo leh sababo iyo caddayn (argument)",
            "xaqiiqo qaab tiro ah (statistic)"
          ],
          "passage": [
            "Khudbad qancin leh waxay leedahay qaab-dhismeed cad (structure).",
            "Marka hore waxaa yimaada hordhaca (introduction), oo dhegaystayaasha u sheega doodaada.",
            "Kadibna waxaad dhistaa ethos-kaaga: sababta aad u tahay qofka saxda ah ee hadlaya.",
            "Kadibna waxaa yimaada doodaada koowaad, oo logos ku dhisan.",
            "Intaas kadib, waxaad ka jawaabtaa aragtida lidka ah (counterargument).",
            "Doodaada labaad waxay isticmaashaa pathos.",
            "Ugu dambayn, gabagabadu (conclusion) saddexda baaq oo dhan isku keentaa.",
            "Hordhac wanaagsan wuxuu sheegaa waxa aad doonayso inaad gaarto.",
            "Dhegaystayaasha ayuu ujeeddadaada ku daraa.",
            "Hababka rhetoric ayuu isticmaalaa laga bilaabo xariiqda ugu horreysa.",
            "Dood logos ah waxay magacawdaa dhibaato, waxayna sharraxdaa sida loo xalliyo.",
            "Xaqiiqooyin iyo tiro-koobyo waxay doodaada ka dhigaan mid adag in laga hor yimaado.",
            "Dooro mawduuc culus oo aad daneyso."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "порядок частин письмового тексту (structure)",
            "вступ, який повідомляє аудиторії ваш аргумент (introduction)",
            "показати, чому саме ви маєте право говорити (ethos)",
            "думка, яку ви висловлюєте, з причинами та доказами (argument)",
            "факт у вигляді числа (statistic)"
          ],
          "passage": [
            "Переконлива промова має чітку структуру (structure).",
            "Спочатку йде вступ (introduction), який повідомляє аудиторії ваш аргумент.",
            "Далі ви встановлюєте свій етос: чому саме ви маєте право говорити.",
            "Потім іде ваш перший аргумент, побудований на логосі.",
            "Після цього ви відповідаєте на контраргумент.",
            "Ваш другий аргумент використовує патос.",
            "Нарешті, висновок об’єднує всі три звернення разом.",
            "Добрий вступ говорить, чого ви хочете досягти.",
            "Він включає аудиторію у вашу мету.",
            "Він використовує риторичні прийоми із самого першого рядка.",
            "Аргумент на основі логосу називає проблему і пояснює, як її розв’язати.",
            "Факти та статистика роблять ваш аргумент важким для заперечення.",
            "Оберіть серйозну тему, яка вас хвилює."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "تحریر کے حصوں کی ترتیب (structure)",
            "وہ شروعات جو سننے والوں کو آپ کی دلیل بتاتی ہے (introduction)",
            "یہ دکھانا کہ آپ بولنے کے لیے صحیح شخص کیوں ہیں (ethos)",
            "ایک نکتہ جو آپ وجوہات اور شہادت کے ساتھ پیش کرتے ہیں (argument)",
            "عدد کی شکل میں ایک حقیقت (statistic)"
          ],
          "passage": [
            "قائل کرنے والی تقریر کی ایک صاف ساخت (structure) ہوتی ہے۔",
            "پہلے تعارف آتا ہے، جو سننے والوں کو آپ کی دلیل بتاتا ہے۔",
            "اس کے بعد آپ اپنا ethos قائم کرتے ہیں: آپ بولنے کے لیے صحیح شخص کیوں ہیں۔",
            "پھر آپ کی پہلی دلیل آتی ہے، جو logos پر بنی ہوتی ہے۔",
            "اس کے بعد آپ مخالف دلیل (counterargument) کا جواب دیتے ہیں۔",
            "آپ کی دوسری دلیل pathos استعمال کرتی ہے۔",
            "آخر میں نتیجہ (conclusion) تینوں اپیلوں کو ایک جگہ لے آتا ہے۔",
            "اچھا تعارف بتاتا ہے کہ آپ کیا حاصل کرنا چاہتے ہیں۔",
            "یہ سننے والوں کو آپ کے مقصد میں شامل کرتا ہے۔",
            "یہ پہلی ہی سطر سے خطابت کے طریقے استعمال کرتا ہے۔",
            "logos کی دلیل کسی مسئلے کا نام لیتی ہے اور بتاتی ہے کہ اسے کیسے حل کیا جائے۔",
            "حقائق اور شماریاتی اعداد آپ کی دلیل کو ایسا بناتے ہیں کہ اس سے بحث کرنا مشکل ہو۔",
            "کوئی سنجیدہ موضوع چنیں جس کی آپ کو پروا ہو۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "The six-part structure",
          paragraphs: [
            "Your teachers give persuasive writing a six-part structure. 1 Introduction: introduce your argument to your audience. 2 Ethos: establish why you are the best person to present this argument. 3 Argument one, logos: present and explain your first point, using facts to make it clear. 4 Counterargument: consider what the opposing side would say, and explain why they are wrong. 5 Argument two, pathos: present your second point so the audience feels a particular emotion. 6 Conclusion: finish with logos, pathos and ethos for the final time.",
            "You will build your own speech in this order across the next four lessons, one part at a time, on a serious topic you choose. This chapter covers parts 1 to 3; the next chapter covers parts 4 to 6.",
            "This is the same skill GCSE English Language rewards in Paper 2, Question 5, where you write to present a viewpoint. That question is worth 40 marks: 24 for AO5 (communicating clearly and imaginatively, and organising your writing) and 16 for AO6 (vocabulary, sentence structures, spelling and punctuation). What you learn here in Year 8 is the foundation."
          ],
          tip: "Six parts, in order: introduce, trust, think, answer, feel, finish." },
        { heading: "Writing the introduction",
          paragraphs: [
            "An introduction has four jobs: explain what you are trying to achieve; include your audience in your purpose; begin to establish your ethos; and use rhetorical methods from the first line. The speeches you have studied open by naming the problem and the campaign, by asking the audience for help, and by telling the audience who the speaker is and why they care.",
            "Choose a topic that matters: climate change, women’s rights, racial equality, world affairs, something in your own town. Here is the opening of an original model speech, ‘Clean Air for Hollowmere’, which you will follow part by part. A pupil is speaking at a town meeting about traffic pollution. The first paragraph is the introduction; the second establishes ethos."
          ],
          quote: { text: "Good evening, Hollowmere. I am here tonight because the air in our town is making us ill, and because I believe we can change it. Imagine walking your child to school without checking the pollution app first. That is the town I want us to build together.",
            source: "‘Clean Air for Hollowmere’, part 1: Introduction — original model speech written for Ad Astra" },
          tip: "Useful openers: ‘I am here today to talk to you about…’, ‘Imagine a world where…’, ‘Today we face a problem we cannot ignore…’." },
        { heading: "Establishing ethos",
          paragraphs: [
            "Ethos answers the audience’s silent question: why should we listen to you? You do not need to be an expert. You need to show that you know the topic first-hand, that you have done the work, and that you share the audience’s values. Notice how the model speaker turns being a pupil into a strength rather than apologising for it."
          ],
          quote: { text: "I have lived on Mill Road for all of my fourteen years. I have counted the lorries that pass my window each morning: forty-one before eight o’clock, every single day this term. I am not a scientist. I am a pupil who has done the work, and I am asking you to listen.",
            source: "‘Clean Air for Hollowmere’, part 2: Ethos — original model speech written for Ad Astra" },
          tip: "‘I am not a scientist’ is honest, and honesty is ethos too. Then show what you have done instead." },
        { heading: "The first argument: logos",
          paragraphs: [
            "Your first argument must make the audience think. Build it with logos: cite facts and statistics, name the issue, then explain how it can be fixed. The wartime speech you studied in class works this way: the speaker gives exact numbers of troops and divisions so that the audience accepts his explanation, says he is not blaming anyone, and then turns everyone’s attention to the future. Precise numbers are hard to argue with; vague ones are easy to dismiss.",
            "Here is the logos argument of the model speech. Count the facts, and notice the pattern: problem, evidence, solution."
          ],
          quote: { text: "Here are the facts. Our town has one air monitor, and last winter it recorded unsafe levels on sixty-three days. Sixty-three. The hospital reports that asthma admissions rose by a fifth in the same period. The solution is not a mystery. A school street, closed to traffic for one hour each morning, costs less than one new set of traffic lights. Two towns in our county have tried it, and both report cleaner air within a month.",
            source: "‘Clean Air for Hollowmere’, part 3: Argument one (logos) — original model speech written for Ad Astra" },
          worked: { q: "Find the problem, the evidence and the solution in the logos paragraph.",
            steps: ["Problem: the air is unsafe. Evidence: “unsafe levels on sixty-three days” and asthma admissions “rose by a fifth”.", "Solution: a school street for one hour each morning.", "Proof the solution works: “Two towns in our county have tried it”."],
            answer: "Problem (unsafe air), evidence (sixty-three days, admissions up by a fifth), solution (a school street), proof (two towns tried it). That is a logical argument." },
          tip: "Starters for logos: ‘The facts are clear…’, ‘It is no secret that…’, ‘It is time we faced the fact that…’." }
      ],
      gate: [
        { kind: "mcq", q: "In the six-part structure, which part comes straight after the introduction?", options: ["Ethos", "Counterargument", "Conclusion", "Argument two (pathos)"], answer: 0,
          feedback: [
            "",
            "The counterargument is part 4, after your first argument. Straight after the introduction you establish your ethos: why you are the right person to speak.",
            "The conclusion is the final part, part 6. After the introduction comes ethos.",
            "The pathos argument is part 5, near the end. Part 2 is ethos, because the audience needs to trust you before they will think or feel with you."
          ],
          why: "Introduction, ethos, argument one (logos), counterargument, argument two (pathos), conclusion." },
        { kind: "gap", q: "Your first argument should use ___ to make your point clear and logical.", answer: "logos", options: ["logos", "pathos", "hyperbole"],
          feedback: {
            "pathos": "Pathos is saved for your second argument, part 5, once the audience trusts you and has heard the facts. The first argument is logos.",
            "hyperbole": "Hyperbole is one rhetorical method, and exaggeration is the opposite of what a first argument needs. The first argument is built on logos: facts and clear reasoning."
          },
          why: "Argument one is built on logos: facts, statistics and a clear line of reasoning." },
        { kind: "mcq", q: "Which sentence from the model speech is the clearest example of logos?",
          options: ["“last winter it recorded unsafe levels on sixty-three days”", "“Imagine walking your child to school without checking the pollution app first.”", "“I am a pupil who has done the work”", "“Good evening, Hollowmere.”"], answer: 0,
          feedback: [
            "",
            "‘Imagine…’ asks the audience to picture a better future and feel its pull. That is pathos. Logos is a fact you could check.",
            "This sentence is about the speaker and why we should trust her: ethos. Look for a number from a count.",
            "This is direct address: a greeting to the audience. It builds connection but proves nothing."
          ],
          why: "A counted number from the town’s air monitor is checkable proof: logos." }
      ],
      modules: [
        { title: "Order the speech",
          task: { kind: "order", q: "Put the six parts of a persuasive speech in order.",
            items: ["Introduction: introduce your argument to the audience", "Ethos: show why you are the best person to make this argument", "Argument one: your first point, built on logos", "Counterargument: what the other side would say, and why they are wrong", "Argument two: your second point, built on pathos", "Conclusion: logos, pathos and ethos one last time"] },
          levels: {
            support: { steps: ["Introductions always come first and conclusions always come last.", "Trust comes before facts: ethos is second.", "Facts come before feelings: logos before pathos.", "The counterargument sits between your two arguments."],
              example: { q: "Order these parts of a job application letter: why I want the job; my experience; greeting and purpose; closing request for an interview.", steps: ["Greeting and purpose first.", "Experience (trust) next.", "Then the reasons.", "The request last."], answer: "Greeting and purpose; my experience; why I want the job; closing request." } },
            core: { hint: "Introduce, trust, think, answer, feel, finish." },
            stretch: { extend: "Explain why your teachers put the logos argument before the pathos argument, and what might go wrong if you swapped them." }
          },
          explain: "Say why ethos comes before the first argument.",
          why: "Introduction, ethos, logos, counterargument, pathos, conclusion. Trust first, then facts, then the other side, then feeling, then the finish." },
        { title: "Write your introduction",
          // contexts: the department's other two speech topics; the task, criteria and model are shared.
          contexts: [
            { label: "Own clothes instead of uniform",
              q: "Write the introduction to a speech that persuades your class that pupils should (or should not) be allowed to wear their own clothes instead of uniform. Explain what you want to achieve, include your audience in your purpose, begin to establish your ethos, and use at least one rhetorical method.",
              why: "Open with a hook that puts the audience in the picture (a Monday morning, a wardrobe, a school gate), say which side you are on, and use ‘we’ so the class feels it is their decision too." },
            { label: "Safe spaces for pupils who are bullied",
              q: "Write the introduction to a speech that persuades your school to create (or not to create) safe spaces for pupils who are being bullied. Explain what you want to achieve, include your audience in your purpose, begin to establish your ethos, and use at least one rhetorical method.",
              why: "Open with a hook about a moment in the school day when someone has nowhere to go, say what you are asking for, and let the audience know that you have seen this yourself or listened to someone who has." }
          ],
          task: { kind: "written", q: "Write the introduction to a speech that persuades your audience to do more to tackle climate change. Explain what you want to achieve, include your audience in your purpose, begin to establish your ethos, and use at least one rhetorical method.", marks: 10,
            criteria: [
              "I say clearly what I want to achieve.",
              "I include the audience in my purpose, using ‘we’ or ‘you’.",
              "I begin to establish my ethos: why I care and what I know.",
              "I use at least one rhetorical method in my opening lines.",
              "My first sentence is a hook, not a label."
            ],
            model: "Last summer, the river at the bottom of our road dried to a trickle, and the fish lay on the mud. I am fourteen, and I have never seen that before. I am here today because the climate is changing faster than our habits are, and because I believe this school can be the place where our habits change first. We are not powerless. We are a thousand people under one roof, and a thousand people can move a town. Will you help me show them how?" },
          levels: {
            support: { steps: ["Hook: start with a picture, a question or a surprising fact, not ‘Today I am going to talk about…’.", "Purpose: write one sentence that says what you want the audience to do.", "Audience: use ‘we’ or ‘you’ at least twice.", "Ethos: add one sentence about why you, in particular, care.", "Check for one rhetorical method: a rhetorical question, a tricolon or direct address."],
              example: { q: "Write a two-sentence introduction to a speech persuading your year group to join the school litter pick.",
                steps: ["Hook with a picture: the field after lunch.", "Purpose with ‘we’: what you want them to do."], answer: "Picture our field at two o’clock: crisp packets in the hedge, a bottle in every goalmouth. We can clear it in twenty minutes on Friday, and I want every one of you there." } },
            core: { hint: "Begin with the river, the heat or the storm you remember, not with the word ‘climate’." },
            stretch: { extend: "Rewrite your introduction so that it ends on a rhetorical question, and explain what the question makes the audience do." }
          },
          explain: "Say which sentence in your introduction does the work of ethos, and how.",
          why: "A strong introduction hooks, states its purpose, includes the audience and begins to earn trust, all within a few sentences." },
        { title: "Write your logos argument",
          // contexts: the department's other two speech topics; the task, criteria and model are shared.
          contexts: [
            { label: "Own clothes instead of uniform",
              q: "Write the first argument of your speech about wearing own clothes instead of uniform. Build it on logos: cite at least two facts or statistics (they may come from a class survey), name the issue, and explain how it can be fixed.",
              why: "Count something real: how many pupils own more than one blazer, how much uniform costs a family each year, how many minutes are lost to uniform checks. Then state the problem and the fix in plain words." },
            { label: "Safe spaces for pupils who are bullied",
              q: "Write the first argument of your speech about safe spaces for pupils who are being bullied. Build it on logos: cite at least two facts or statistics (they may come from a class survey), name the issue, and explain how it can be fixed.",
              why: "Use numbers you can stand behind: how many pupils in a survey said they had nowhere to go at lunch, how many rooms stand empty at that time. Then say what one room and one adult would change." }
          ],
          task: { kind: "written", q: "Write the first argument of your speech persuading your audience to do more to tackle climate change. Build it on logos: cite at least two facts or statistics (they may come from a class survey), name the issue, and explain how it can be fixed.", marks: 10,
            criteria: [
              "I cite at least two facts or statistics, and I say where they came from.",
              "I name the issue clearly.",
              "I explain a solution and how it would work.",
              "My paragraph is logically structured: problem, evidence, solution.",
              "I use at least one rhetorical method without weakening the facts."
            ],
            model: "Here are the facts about our own building. In a survey of 240 pupils last week, 171 said the lights in their form room were left on at break, every break. The site team counted 38 radiators running with windows open on a single Tuesday in March. This is not a mystery problem with a mystery answer. One switch monitor in each form, and a rule that windows stay shut while heating is on, would cut our energy bill and our emissions in the same move. Other schools in our trust have done exactly this, and their bills tell the story." },
          levels: {
            support: { steps: ["Write ‘Here are the facts.’ and then give two numbers you could check (a survey, a count, a bill).", "Say what the numbers prove: name the issue in one sentence.", "Give one solution and say how it would work.", "Finish with proof the solution works somewhere else, or a sentence that invites the audience to agree."],
              example: { q: "Write a short logos argument for a longer lunch break, using these facts: lunch is 30 minutes; 19 of 28 pupils in a survey had not finished eating when the bell went.",
                steps: ["Facts first.", "Issue: pupils are not eating.", "Solution: ten more minutes."], answer: "Lunch is thirty minutes. In our survey, 19 of 28 pupils had not finished eating when the bell went. Hungry pupils do not learn well in the afternoon. Ten more minutes would fix that, and the timetable loses nothing that matters." } },
            core: { hint: "Problem, evidence, solution, proof. Give each one its own sentence." },
            stretch: { extend: "Add one analogy that explains your solution, and check that it does not replace a fact." }
          },
          explain: "Say which of your facts is strongest, and where it came from.",
          why: "A logos argument persuades through checkable facts arranged in order: problem, evidence, solution, proof." }
      ]
    },

    /* ───────────────────────── 6 ───────────────────────── */
    { key: "counterargument-conclusion", n: 6,
      title: "Finishing your speech: counterargument, pathos and conclusion",
      lead: "You will answer the other side fairly, make your audience feel, and end with a conclusion that calls them to act.",
      covers: [9, 10],
      pretext: {
        words: [
          { word: "counterargument", means: "what the other side would say", sentence: "Raise the counterargument yourself, then answer it." },
          { word: "oppose", means: "be against something", sentence: "Some councillors oppose the plan because of cost." },
          { word: "adverb", means: "a word that adds confidence or tone to a statement", sentence: "The adverb ‘clearly’ makes the speaker sound sure." },
          { word: "conclusion", means: "the final part of a speech", sentence: "The conclusion is your last chance to persuade." },
          { word: "call to action", means: "telling the audience exactly what to do", sentence: "End with a call to action, such as ‘Sign today.’" }
        ],
        passage: [
          "A counterargument is what the other side would say.",
          "Strong speakers raise it themselves, then explain why it is wrong.",
          "This shows you are fair, and it makes your own view stronger.",
          "Adverbs such as clearly, surely and evidently sound confident.",
          "In 1588, Elizabeth I spoke to her troops at Tilbury.",
          "The Spanish Armada was sailing to invade England.",
          "Some had said a queen should not risk herself among armed soldiers.",
          "She answered that she trusted her loving people.",
          "She admitted she had the body of a weak woman.",
          "Then she said she had the heart and stomach of a king.",
          "The conclusion is your final chance to persuade.",
          "Use pathos, sum up your argument in one clear point, and end with a call to action."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "ما سيقوله الطرف الآخر (counterargument)",
            "أن تكون ضدّ شيء ما (oppose)",
            "كلمة تضيف ثقة أو نغمة إلى العبارة (adverb)",
            "الجزء الأخير من الخطبة (conclusion)",
            "إخبار الجمهور بما يجب أن يفعله تحديداً (call to action)"
          ],
          "passage": [
            "الحجّة المضادّة (counterargument) هي ما سيقوله الطرف الآخر.",
            "المتكلّمون الأقوياء يطرحونها بأنفسهم، ثم يشرحون لماذا هي خاطئة.",
            "هذا يُظهر أنك عادل، ويجعل رأيك أنت أقوى.",
            "الظروف (adverbs) مثل clearly وsurely وevidently تبدو واثقة.",
            "في عام 1588، خاطبت إليزابيث الأولى جنودها في تيلبوري (Tilbury).",
            "كان الأسطول الإسباني (Spanish Armada) يُبحر لغزو إنجلترا.",
            "قال بعضهم إن الملكة لا ينبغي أن تعرّض نفسها للخطر بين جنود مسلّحين.",
            "فأجابت بأنها تثق بشعبها المحبّ.",
            "واعترفت بأن لها جسد امرأة ضعيفة.",
            "ثم قالت إن لها قلب ملك وشجاعته.",
            "الخاتمة (conclusion) هي فرصتك الأخيرة للإقناع.",
            "استعمل الباثوس، ولخّص حجّتك في فكرة واحدة واضحة، واختم بدعوة إلى العمل (call to action)."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "to, co powiedziałaby druga strona (counterargument)",
            "być przeciw czemuś (oppose)",
            "słowo, które dodaje stwierdzeniu pewności lub tonu (adverb)",
            "ostatnia część przemowy (conclusion)",
            "powiedzenie odbiorcom dokładnie, co mają zrobić (call to action)"
          ],
          "passage": [
            "Kontrargument (counterargument) to to, co powiedziałaby druga strona.",
            "Mocni mówcy sami go podnoszą, a potem wyjaśniają, dlaczego jest błędny.",
            "To pokazuje, że jesteś uczciwy, i wzmacnia twój własny pogląd.",
            "Przysłówki takie jak clearly, surely i evidently brzmią pewnie.",
            "W 1588 roku Elżbieta I przemówiła do swoich wojsk w Tilbury.",
            "Hiszpańska Armada płynęła, żeby najechać Anglię.",
            "Niektórzy mówili, że królowa nie powinna narażać się wśród uzbrojonych żołnierzy.",
            "Odpowiedziała, że ufa swojemu kochającemu ludowi.",
            "Przyznała, że ma ciało słabej kobiety.",
            "Potem powiedziała, że ma serce i odwagę króla.",
            "Zakończenie to twoja ostatnia szansa, żeby przekonać.",
            "Użyj pathosu, podsumuj swój argument w jednym jasnym punkcie i zakończ wezwaniem do działania (call to action)."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o que o outro lado diria (counterargument, contra-argumento)",
            "ser contra alguma coisa (oppose, opor-se)",
            "uma palavra que acrescenta confiança ou tom a uma afirmação (adverb, advérbio)",
            "a parte final de um discurso (conclusion, conclusão)",
            "dizer ao público exatamente o que fazer (call to action, apelo à ação)"
          ],
          "passage": [
            "Um contra-argumento (counterargument) é o que o outro lado diria.",
            "Quem fala bem levanta-o por si mesmo, e depois explica por que está errado.",
            "Isto mostra que você é justo, e torna a sua própria opinião mais forte.",
            "Advérbios como clearly, surely e evidently soam confiantes.",
            "Em 1588, Elizabeth I falou às suas tropas em Tilbury.",
            "A Armada Espanhola navegava para invadir a Inglaterra.",
            "Alguns tinham dito que uma rainha não devia arriscar-se entre soldados armados.",
            "Ela respondeu que confiava no seu povo amado.",
            "Ela admitiu que tinha o corpo de uma mulher fraca.",
            "Depois disse que tinha o coração e o estômago de um rei.",
            "A conclusão é a sua última oportunidade de persuadir.",
            "Use pathos, resuma o seu argumento num ponto claro, e termine com um apelo à ação (call to action)."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "waxa dhinaca kale oran lahaa (counterargument)",
            "wax ka soo horjeed (oppose)",
            "eray kalsooni ama cod ku dara weedh (adverb)",
            "qaybta ugu dambaysa ee khudbadda (conclusion)",
            "dhegaystayaasha si sax ah u sheegidda waxa ay sameeyaan (call to action)"
          ],
          "passage": [
            "Counterargument waa waxa dhinaca kale oran lahaa.",
            "Hadlayaasha xooggan iyagu ayaa soo qaada, kadibna sharraxaan sababta ay u khaldan tahay.",
            "Tani waxay muujisaa inaad cadaalad tahay, waxayna aragtidaada ka dhigtaa mid ka xoog badan.",
            "Adverbs sida clearly, surely iyo evidently waxay u dhawaaqaan si kalsooni leh.",
            "Sannadkii 1588, Elizabeth I waxay la hadashay ciidankeeda Tilbury.",
            "Spanish Armada waxay u shiraacday inay England duusho.",
            "Qaar waxay yiraahdeen boqorad waa inaanay nafteeda halis gelin askar hubaysan dhexdood.",
            "Waxay ku jawaabtay inay aaminsan tahay dadkeeda jecel.",
            "Waxay qiratay inay leedahay jirka naag tabar daran.",
            "Kadibna waxay tiri waxay leedahay wadnaha iyo caloosha boqor.",
            "Gabagabadu waa fursaddaada ugu dambaysa ee aad wax ku qancin karto.",
            "Isticmaal pathos, doodaada hal hadal cad ku soo koob, oo ku dhammee baaq ficil (call to action)."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "те, що сказала б інша сторона (counterargument)",
            "бути проти чогось (oppose)",
            "слово, яке додає впевненості або тону твердженню (adverb)",
            "завершальна частина промови (conclusion)",
            "сказати аудиторії точно, що робити (call to action)"
          ],
          "passage": [
            "Контраргумент (counterargument) — це те, що сказала б інша сторона.",
            "Сильні промовці самі його згадують, а потім пояснюють, чому він хибний.",
            "Це показує, що ви справедливі, і робить ваш власний погляд сильнішим.",
            "Прислівники (adverbs), такі як clearly, surely та evidently, звучать упевнено.",
            "У 1588 році Єлизавета I звернулася до своїх військ у Тілбері.",
            "Іспанська Армада пливла, щоб вторгнутися в Англію.",
            "Деякі казали, що королеві не слід ризикувати собою серед озброєних солдатів.",
            "Вона відповіла, що довіряє своєму люблячому народу.",
            "Вона визнала, що має тіло слабкої жінки.",
            "Потім вона сказала, що має серце та відвагу короля.",
            "Висновок (conclusion) — це ваш останній шанс переконати.",
            "Використайте патос, підсумуйте свій аргумент в одній чіткій думці й закінчіть закликом до дії (call to action)."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "دوسری طرف کے لوگ کیا کہیں گے (counterargument)",
            "کسی چیز کے خلاف ہونا (oppose)",
            "ایسا لفظ جو بیان میں اعتماد یا لہجہ جوڑے (adverb)",
            "تقریر کا آخری حصہ (conclusion)",
            "سننے والوں کو بالکل صاف بتانا کہ کیا کرنا ہے (call to action)"
          ],
          "passage": [
            "مخالف دلیل (counterargument) وہ ہے جو دوسری طرف کے لوگ کہیں گے۔",
            "مضبوط مقرر اسے خود اٹھاتے ہیں، پھر بتاتے ہیں کہ وہ غلط کیوں ہے۔",
            "اس سے ظاہر ہوتا ہے کہ آپ منصف ہیں، اور اس سے آپ کی اپنی رائے مضبوط ہوتی ہے۔",
            "clearly، surely اور evidently جیسے adverbs پُراعتماد لگتے ہیں۔",
            "1588 میں الزبتھ اول نے ٹلبری میں اپنی فوج سے خطاب کیا۔",
            "ہسپانوی بحری بیڑا (Spanish Armada) انگلینڈ پر حملے کے لیے چل پڑا تھا۔",
            "کچھ لوگوں نے کہا تھا کہ ملکہ کو مسلح سپاہیوں کے بیچ خود کو خطرے میں نہیں ڈالنا چاہیے۔",
            "اس نے جواب دیا کہ وہ اپنے محبت کرنے والے لوگوں پر بھروسا کرتی ہے۔",
            "اس نے مانا کہ اس کا جسم ایک کمزور عورت کا ہے۔",
            "پھر اس نے کہا کہ اس کے پاس ایک بادشاہ کا دل اور حوصلہ ہے۔",
            "نتیجہ (conclusion) قائل کرنے کا آپ کا آخری موقع ہے۔",
            "Pathos استعمال کریں، اپنی دلیل کو ایک صاف نکتے میں سمیٹیں، اور call to action پر ختم کریں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "Why include a counterargument",
          paragraphs: [
            "A counterargument is the point the opposing side would make. It seems strange to put it in your own speech, but it works. Raising it yourself shows the audience you have thought about both sides, which builds ethos. Answering it takes the weapon out of your opponents’ hands before they can use it. Frames that help: ‘Some may say that… but this is wrong because…’, ‘I know that… but…’, ‘I may be… but I am also…’.",
            "Persuasive adverbs make your answer sound certain: ‘Clearly…’, ‘Surely…’, ‘Evidently…’. Use them to turn from the other side’s view back to yours. Here is the counterargument from the model speech. Notice that it begins by agreeing, and ends by turning the objection on its head."
          ],
          quote: { text: "Some of you will say that closing a road is bad for business. I understand that worry. Clearly, shops need customers. But surely customers prefer a street where they can breathe. In the two towns that tried a school street, the shops stayed open and the pavements were busier, not emptier. The real cost to business is a town that people drive through and never stop in.",
            source: "‘Clean Air for Hollowmere’, part 4: Counterargument — original model speech written for Ad Astra" },
          tip: "Agree with the feeling, then disagree with the conclusion: ‘I understand that worry. But…’." },
        { heading: "Elizabeth I at Tilbury, 1588",
          paragraphs: [
            "In the summer of 1588 the Spanish Armada, a fleet of about 130 ships, sailed to invade England. Elizabeth I rode out to her army at Tilbury, on the Thames, and spoke to the soldiers. The Armada’s defeat is remembered as one of England’s greatest military achievements, and her speech is remembered with it. It is more than four hundred years old, so it is out of copyright and can be printed here in full.",
            "The speech is built on counterarguments. Some advisers, she says, had warned her not to trust herself to armed crowds for fear of treachery; her answer is that she will not live to distrust her “faithful and loving people”. Then comes the most famous turn. She admits the objection her audience might be thinking: she has “the body but of a weak and feeble woman”. And she answers it in the same sentence: “but I have the heart and stomach of a king, and of a king of England too”. Notice the ethos in “I myself will be your general”, and the direct address of “My loving people”.",
            "One caution for the historians among you: nobody wrote the speech down on the day. This version comes from a letter written years later by a man who said he had heard it. The words are what has come down to us, not a recording."
          ],
          quote: { text: "I know I have the body but of a weak and feeble woman; but I have the heart and stomach of a king, and of a king of England too, and think foul scorn that Parma or Spain, or any prince of Europe, should dare to invade the borders of my realm: to which rather than any dishonour shall grow by me, I myself will take up arms, I myself will be your general, judge, and rewarder of every one of your virtues in the field.",
            source: "Elizabeth I, speech to the troops at Tilbury, 1588 (second paragraph) — public domain" },
          worked: { q: "Show how Elizabeth’s most famous sentence follows the counterargument pattern.",
            steps: ["State the other side’s view: she has “the body but of a weak and feeble woman”.", "Turn with ‘but’: “but I have the heart and stomach of a king”.", "Go further than the objection: “and of a king of England too”."],
            answer: "She names the objection herself (a weak woman’s body), turns it with ‘but’ (a king’s heart), and then raises the stakes (a king of England). The objection ends up making her look stronger, not weaker." },
          tip: "‘Treachery’ means betrayal; ‘tyrants’ are cruel rulers; ‘resolved’ means determined; ‘realm’ means kingdom." },
        { heading: "The second argument: pathos",
          paragraphs: [
            "Your second argument makes the audience feel. Choose the emotion first, then choose the methods that create it: an anecdote about one real person, direct address, a rhetorical question, anaphora, emotive language. Paragraph for effect: a short paragraph, or a very short sentence, lands harder than a long one.",
            "Here is the pathos argument from the model speech. Notice the anaphora of ‘Think of…’, the one named child, and the short sentences at the end."
          ],
          quote: { text: "Think of Mia, who is six, and who carries an inhaler in her lunch box because she cannot run the length of the playground. Think of the grandparents who stay indoors on the days the monitor turns red. Think of the children not yet born, who will breathe whatever air we leave them. They cannot vote. They cannot speak at this meeting. We must be their voice.",
            source: "‘Clean Air for Hollowmere’, part 5: Argument two (pathos) — original model speech written for Ad Astra" },
          tip: "One named person moves an audience more than a thousand unnamed ones." },
        { heading: "Ending with power: the conclusion",
          paragraphs: [
            "The conclusion is your last chance to persuade, so it uses logos, pathos and ethos one final time. Your teachers ask for three things: use pathos; make one final point that sums up your argument with clarity; and end with a call to action, telling the audience exactly what to do next. The speech you studied in class ends this way: the speaker addresses her listeners as family, repeats what they must not forget, and calls on them to act.",
            "Here is the conclusion of the model speech. Count the methods: a tricolon, an imperative, direct address, anaphora and a call to action, all in six sentences."
          ],
          quote: { text: "So let us be remembered as the town that chose to act. One hour, one street, one morning at a time. Give our children the simplest gift there is: clean air. Hollowmere, the facts are clear, the cost is small and the time is now. Let us not wait for another red day. Let us act tonight.",
            source: "‘Clean Air for Hollowmere’, part 6: Conclusion — original model speech written for Ad Astra" },
          tip: "Closers that work: ‘And so I leave you with one final thought…’, ‘So let us go from here having learnt one thing…’." }
      ],
      gate: [
        { kind: "gap", q: "A ___ is what the opposing side would say, which you raise and then prove wrong.", answer: "counterargument", options: ["counterargument", "conclusion", "anecdote"],
          feedback: {
            "conclusion": "The conclusion is the final part of the speech, where you sum up and call the audience to act. The other side’s view, raised and answered, is the counterargument.",
            "anecdote": "An anecdote is a short true story used to make a point. The opposing side’s view is the counterargument, and it comes in part 4 of the structure."
          },
          why: "A counterargument is the other side’s point, which you answer to make your own case stronger." },
        { kind: "mcq", q: "In 1588, which enemy was Elizabeth I’s army at Tilbury waiting to fight?", options: ["The Spanish Armada", "The French navy", "The Roman army", "The Vikings"], answer: 0,
          feedback: [
            "",
            "The French were not the threat in 1588. Elizabeth names the enemy in the speech itself: “Parma or Spain”. The Spanish Armada was sailing to invade England.",
            "The Romans left Britain more than a thousand years before Elizabeth. In 1588 the enemy was Spain, whose Armada was at sea.",
            "The Viking raids were centuries earlier. In 1588 England faced the Spanish Armada."
          ],
          why: "The Spanish Armada sailed to invade England in 1588, and its defeat is counted among England’s greatest military achievements." },
        { kind: "mcq", q: "Which adverb helps a speaker sound confident when answering a counterargument?", options: ["Clearly", "Perhaps", "Maybe", "Possibly"], answer: 0,
          feedback: [
            "",
            "‘Perhaps’ admits doubt, which is the opposite of what you want after a counterargument. Your teachers suggest ‘clearly’, ‘surely’ and ‘evidently’.",
            "‘Maybe’ makes you sound unsure of your own view. Use a confident adverb such as ‘clearly’ or ‘surely’.",
            "‘Possibly’ leaves the door open for the other side. ‘Clearly’, ‘surely’ and ‘evidently’ shut it."
          ],
          why: "Persuasive adverbs such as ‘clearly’, ‘surely’ and ‘evidently’ make the speaker’s answer sound certain." }
      ],
      modules: [
        { title: "Elizabeth admits the objection",
          task: { kind: "mcq", q: "Which words show Elizabeth stating the other side’s point before she answers it?",
            options: ["“the body but of a weak and feeble woman”", "“the heart and stomach of a king”", "“I myself will be your general”", "“Let tyrants fear.”"], answer: 0,
            feedback: [
              "",
              "This is her answer, not the objection. The counterargument pattern is objection, then ‘but’, then answer. The king’s heart comes after the ‘but’.",
              "This is ethos: Elizabeth promising to lead in person. It comes at the end of the sentence, after the objection has been answered.",
              "This is a threat to her enemies from the first paragraph. The objection she admits is about her own body, in the second paragraph."
            ] },
          levels: {
            support: { steps: ["Find the word ‘but’ in the famous sentence.", "The words before ‘but’ are the objection; the words after are the answer.", "Rule out the phrases that show strength: they are answers, not objections."],
              example: { q: "In ‘I know I am only in Year 8, but I have read every word of the school’s energy report’, which part is the objection?", steps: ["Before ‘but’: only in Year 8.", "After ‘but’: the answer."], answer: "‘I am only in Year 8’ is the objection the speaker admits." } },
            core: { hint: "The objection comes before the ‘but’. Which phrase sounds like a weakness?" },
            stretch: { extend: "Explain why admitting the objection herself makes Elizabeth’s answer stronger than if she had simply claimed to be as brave as a king." }
          },
          explain: "Say which single word marks the turn from objection to answer.",
          why: "Elizabeth names the weakness her audience might think of, then turns it with ‘but’ into a claim of strength." },
        { title: "Build the counterargument",
          task: { kind: "order", q: "Put the parts of a counterargument paragraph in the best order.",
            items: ["State the other side’s view: ‘Some of you will say that…’", "Show you understand it: ‘I understand that worry.’", "Turn with a confident adverb and evidence: ‘But surely…’", "Return to your own view, stronger than before"] },
          levels: {
            support: { steps: ["Start with what the other side thinks.", "Agree with the feeling behind it.", "Turn with ‘but’ and a confident adverb, and give evidence.", "End on your own side."],
              example: { q: "Order these for a counterargument about homework: ‘I know homework takes time’; ‘Some say homework is a waste of evenings’; ‘so twenty minutes a night is worth it’; ‘but clearly practice is how skills stick’.", steps: ["Other side first.", "Understanding second.", "Turn third.", "Own view last."], answer: "Some say homework is a waste of evenings; I know homework takes time; but clearly practice is how skills stick; so twenty minutes a night is worth it." } },
            core: { hint: "Other side, understanding, turn, your side." },
            stretch: { extend: "Explain what would go wrong if you left out the second step and jumped straight from the other side’s view to ‘But…’." }
          },
          explain: "Explain why understanding the other side comes before you disagree with it.",
          why: "Other side, understanding, turn with evidence, own view: this order makes you sound fair and leaves the audience on your side." },
        { title: "Write your conclusion",
          // contexts: the department's other two speech topics; the task, criteria and model are shared.
          contexts: [
            { label: "Own clothes instead of uniform",
              q: "Write the conclusion to your speech about wearing own clothes instead of uniform. Use pathos, make one final point that sums up your argument with clarity, use at least two rhetorical methods, and end with a call to action.",
              why: "Sum up your strongest reason in one sentence, make the class picture the first morning of the change, and tell them exactly what to do: sign, vote, or speak to the head." },
            { label: "Safe spaces for pupils who are bullied",
              q: "Write the conclusion to your speech about safe spaces for pupils who are being bullied. Use pathos, make one final point that sums up your argument with clarity, use at least two rhetorical methods, and end with a call to action.",
              why: "Return to the one pupil your pathos argument described, state the single change you are asking for, and close with an imperative the school can act on this term." }
          ],
          task: { kind: "written", q: "Write the conclusion to your speech persuading your audience to do more to tackle climate change. Use pathos, make one final point that sums up your argument with clarity, use at least two rhetorical methods, and end with a call to action.", marks: 10,
            criteria: [
              "I use pathos: the audience feels something in my final lines.",
              "I make one final point that sums up my whole argument.",
              "I use at least two rhetorical methods (for example a tricolon, anaphora, an imperative).",
              "I end with a clear call to action that says exactly what to do.",
              "I paragraph for effect: at least one short sentence lands on its own."
            ],
            model: "So let us go from here having learnt one thing: the planet does not need a thousand perfect people, it needs a thousand people trying. Switch off the light you did not need. Walk the journey you did not have to drive. Speak up when it would be easier to stay quiet. The river at the bottom of my road will not fill itself. But a thousand of us, under one roof, can start. Sign the pledge at the door on your way out. Today, not someday." },
          levels: {
            support: { steps: ["Write your final point in one plain sentence: ‘The planet needs…’.", "Add pathos: one picture that makes the audience feel (the dry river, a child, a last chance).", "Add two methods: three imperatives in a row give you a tricolon and anaphora at once.", "Finish with a call to action that names the action and the time: ‘Sign… today.’"],
              example: { q: "Write a two-sentence conclusion to a speech asking your year group to join the litter pick.",
                steps: ["Sum up with pathos: the field as it could be.", "Call to action with a time and place."], answer: "Picture the field on Monday: green, clear, ours again. Meet me by the goalposts at half past three on Friday, and bring a friend." } },
            core: { hint: "Three imperatives in a row, then a short sentence, then tell them what to do and when." },
            stretch: { extend: "Rewrite your last line as a maxim of your own, and explain why a maxim makes a strong final sentence." }
          },
          explain: "Say which sentence in your conclusion is the call to action, and what it tells the audience to do.",
          why: "A strong conclusion makes the audience feel, sums up the argument in one clear point, and ends by telling them exactly what to do next." }
      ]
    }
  ],

  sources: {
    deckDump: "y08_u6_rhetoric.txt",
    decksUsed: [
      "Lesson 1 - Introduction to persuasive writing and rhetoric.pptx",
      "Lesson 2 - Analogy.pptx",
      "Lesson 3 -Rhetorical Methods.pptx",
      "Lesson 4 - Pathos.pptx",
      "Lesson 5 - Persuasion in Martin Luther King.pptx",
      "Lesson 6 - Rhetoric in MLK's speech (Part 2).pptx",
      "Lesson 7 - Writing an introduction.pptx",
      "Lesson 8 - Developing an argument (logos).pptx",
      "Lesson 9 - Counterarguments.pptx",
      "Lesson 10 - Pathos and Conclusion.pptx"
    ],
    notes: "Lesson titles, big questions, key vocabulary, the twelve rhetorical methods and their definitions, the Aristotelian triad, the history of rhetoric, the analogy teaching, the reading strategies, the analytical verbs, the What/How/Why frame and the six-part speech structure are the department's own, taken from the ten decks above. COPYRIGHT: the decks' modern speeches (Kennedy 1962, King 1963, Churchill 1940, Watson 2014, Yousafzai 2013) and the Sam Leith extract are in copyright and are NOT quoted; they are taught by paraphrase only. The deck's WAGOLL speech on social media, its clean-water model paragraph and its model analysis paragraph are not reproduced. The only quoted historical text is Elizabeth I's Tilbury speech (1588), public domain, in the wording the Lesson 9 deck prints. Every other speech quoted here ('The Captain's Speech', 'The Last Tree on Elm Street', 'Clean Air for Hollowmere' in six parts) is an original text written for Ad Astra; all questions, feedback, model answers and example sentences are original. verify.py checks that every span in curly double quotes appears verbatim in one of these stored texts."
  }
};
