// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 English · Year 9 · Unit 4 ‘Opinion Writing’ (Summer 1) · leads to AQA 8700 Paper 2 Q5 · schema astra/2
//
// QUOTATION RULE FOR THIS FILE (checked by verify.py):
//   “curly double quotes” are used ONLY for words quoted from a model text written for Ad Astra. Every such span
//   must appear verbatim in the model texts stored in verify.py (CORPUS). Statements, sentence openers, titles of
//   techniques and example sentences use ‘single quotes’.
//   COPYRIGHT: the department decks read newspaper columns and modern articles (a Sunday Times column on teenagers,
//   an article on a reality TV show, an article on teaching dystopian fiction, an article on compulsory schooling,
//   two articles on social media, a safari review, a coffee-shop review) and show teacher-written model reviews and
//   openings. NONE of that text is reproduced here. Every model review, article, opening and example sentence is an
//   ORIGINAL text written for Ad Astra; every question, feedback line and model answer is original.
//   No pretext.l1 (home-language lines are added later by a separate translation pass). No meta.constellation
//   (the engine lays the stars out itself).
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["englang-opinion"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "englang-opinion",
    subjectKey: "english",
    subject: "English",
    board: "AQA",
    spec: "KS3 → 8700",
    specRef: "KS3 non-fiction writing, leading to Paper 2 Question 5: writing to present a viewpoint",
    year: 9,
    tier: "KS3",
    title: "Opinion Writing",
    sub: "Write reviews and opinion articles that know their audience, hook the reader, inform with facts and argue a clear point of view.",
    bigQuestion: "How do I write for a specific audience, and how do I turn my opinion into a review or an article that readers will finish?",
    lessonCount: 13,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Introduction to Opinion Writing: audience, form and purpose",
      question: "How do I write for a specific audience?",
      keywords: ["audience", "purpose", "form", "tone", "review"] },
    { n: 2, title: "Models of Reviews",
      question: "How is a review different to other forms of non-fiction writing?",
      keywords: ["critic", "headline", "past tense", "contrasting opinions", "judgement"] },
    { n: 3, title: "Examples and non-examples: review misconceptions",
      question: "Why is a short website review not a good model, and what does an extensive review add?",
      keywords: ["misconception", "background information", "anecdote", "other people’s opinions", "recommendation"] },
    { n: 4, title: "Generating Ideas",
      question: "How do I generate enough ideas to write a full review?",
      keywords: ["rhetorical question", "setting the scene", "triples", "appeal to the audience", "no such thing as stuck"] },
    { n: 5, title: "Review Structure",
      question: "How do I plan and structure a whole review?",
      keywords: ["introduction", "description", "personal experience", "analysis and judgement", "conclusion"] },
    { n: 6, title: "Mid-unit assessment: writing a full review",
      question: "How is my review marked, and can I write a full one in fifty minutes?",
      keywords: ["AO5", "AO6", "heading", "subheading", "plan"] },
    { n: 7, title: "Opinion writing: introduction",
      question: "What are the features of opinion writing, and how do I open my own opinion piece?",
      keywords: ["opinion article", "hook", "topic", "opinion", "persuade"] },
    { n: 8, title: "Feedback and feed-forward",
      question: "How do I use writer’s craft and tone to bring my opinion to life?",
      keywords: ["writer’s craft", "tone", "show don’t tell", "MASOAPS", "DAFOREST"] },
    { n: 9, title: "Opinion writing: structure",
      question: "How is an opinion article structured, and can I write the rest of mine?",
      keywords: ["argument", "personal evidence", "expert evidence", "counter-argument", "conclusion"] },
    { n: 10, title: "Teenage Demons: structure and humour in an opinion column",
      question: "How does a professional columnist structure an argument and use humour to persuade?",
      keywords: ["column", "humour", "colloquialism", "anecdote", "persuasive techniques"] },
    { n: 11, title: "Implicit and explicit opinions",
      question: "How do writers imply an opinion without stating it, and how do I decode it?",
      keywords: ["implicit", "explicit", "infer", "decode", "connotation"] },
    { n: 12, title: "All for School? No, thanks!: techniques in an opinion piece",
      question: "Which DAFOREST techniques does an opinion piece use, and why do they persuade?",
      keywords: ["DAFOREST", "direct address", "rule of three", "emotive language", "statistics"] },
    { n: 13, title: "Assessment preparation: an opinion article on social media",
      question: "Am I able to write from a particular viewpoint on the use of social media?",
      keywords: ["viewpoint", "counter-argument", "freewriting", "topic sentence", "plan"] }
  ],

  glossary: [
    { term: "audience", means: "The people you are writing for.", chapter: "audience-purpose-form" },
    { term: "purpose", means: "Why you are writing: to inform, persuade, entertain or advise.", chapter: "audience-purpose-form" },
    { term: "form", means: "The type of text, such as a review or an article, and the features that go with it.", chapter: "audience-purpose-form" },
    { term: "tone", means: "The attitude your writing shows, chosen to suit your audience and purpose.", chapter: "audience-purpose-form" },
    { term: "headline", means: "The title at the top of a review or article that gives the writer’s angle.", chapter: "review-features" },
    { term: "anecdote", means: "A short personal story used to make a point or entertain.", chapter: "review-features" },
    { term: "critic", means: "Someone who writes reviews based on their own experience.", chapter: "review-features" },
    { term: "recommendation", means: "The clear final judgement in a review: should the reader go, buy or watch, or not.", chapter: "review-structure" },
    { term: "hook", means: "An opening that grabs the reader’s attention and makes them read on.", chapter: "ideas-and-openings" },
    { term: "rhetorical question", means: "A question asked for effect, which does not need an answer.", chapter: "ideas-and-openings" },
    { term: "triple", means: "Three words, phrases or ideas in a row, for rhythm and emphasis (the rule of three).", chapter: "ideas-and-openings" },
    { term: "sensory language", means: "Words that appeal to sight, sound, smell, taste or touch.", chapter: "review-structure" },
    { term: "counter-argument", means: "The opposite view, which you raise so that you can answer it.", chapter: "opinion-article" },
    { term: "topic sentence", means: "The first sentence of a paragraph, which states its main point.", chapter: "persuade-and-imply" },
    { term: "implicit", means: "Suggested through word choices, not stated directly.", chapter: "persuade-and-imply" },
    { term: "explicit", means: "Stated clearly and directly, leaving no doubt.", chapter: "persuade-and-imply" }
  ],

  // Connections game: four groups of four, all sixteen terms drawn from the glossary above.
  connections: [
    { group: "Decide these before you write", terms: ["audience", "purpose", "form", "tone"] },
    { group: "Features of a review", terms: ["headline", "anecdote", "critic", "recommendation"] },
    { group: "Ways to open and engage", terms: ["hook", "rhetorical question", "triple", "sensory language"] },
    { group: "Building an opinion article", terms: ["counter-argument", "topic sentence", "implicit", "explicit"] }
  ],

  chapters: [
    /* ───────────────────────── 1 ───────────────────────── */
    { key: "audience-purpose-form", n: 1,
      title: "Audience, purpose, form: writing for a reader",
      lead: "You will ask three questions before you write a single word, and change your tone to suit the person who will read it.",
      covers: [1, 2],
      pretext: {
        words: [
          { word: "opinion", means: "what you think about something", sentence: "My opinion is that the film was too long." },
          { word: "audience", means: "the people you are writing for", sentence: "A review for parents has a different audience from a review for teenagers." },
          { word: "purpose", means: "the reason you are writing", sentence: "The purpose of a review is to inform the reader and help them decide." },
          { word: "form", means: "the type of text and its features", sentence: "A review is a form of writing with a headline and short paragraphs." },
          { word: "tone", means: "how your writing sounds to the reader", sentence: "Use a warm, friendly tone when you write for younger children." }
        ],
        passage: [
          "Opinion writing is a way of giving your opinion in formal writing.",
          "In this unit you will write reviews and opinion articles.",
          "Before you write, ask three questions.",
          "Who am I writing for? That is the audience.",
          "Why am I writing this? That is the purpose.",
          "What type of text is it? That is the form.",
          "Think of a mechanic’s overalls.",
          "Their purpose is to protect someone doing dirty work.",
          "Their form has long sleeves, strong cloth and lots of pockets.",
          "Their audience is someone who wants to be comfortable and safe.",
          "Writing works the same way.",
          "Once you know your audience, choose your tone to suit them.",
          "A review for parents sounds different from a review for teenagers."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "ما تفكّر فيه بشأن شيء ما (opinion)",
            "الناس الذين تكتب لهم (audience)",
            "السبب الذي تكتب من أجله (purpose)",
            "نوع النص وسماته (form)",
            "كيف تبدو كتابتك للقارئ (tone)"
          ],
          "passage": [
            "كتابة الرأي طريقة لإبداء رأيك في كتابة رسمية.",
            "في هذه الوحدة ستكتب مراجعات (reviews) ومقالات رأي.",
            "قبل أن تكتب، اطرح ثلاثة أسئلة.",
            "لمن أكتب؟ هذا هو الجمهور (audience).",
            "لماذا أكتب هذا؟ هذا هو الهدف (purpose).",
            "ما نوع هذا النص؟ هذا هو الشكل (form).",
            "فكّر في بدلة عمل الميكانيكي.",
            "هدفها حماية شخص يقوم بعمل متّسخ.",
            "شكلها فيه أكمام طويلة، وقماش قوي، وجيوب كثيرة.",
            "جمهورها شخص يريد أن يكون مرتاحاً وآمناً.",
            "الكتابة تعمل بالطريقة نفسها.",
            "عندما تعرف جمهورك، اختر النغمة (tone) التي تناسبه.",
            "مراجعة موجّهة للآباء تبدو مختلفة عن مراجعة موجّهة للمراهقين."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "to, co myślisz o czymś (opinion)",
            "ludzie, dla których piszesz (audience)",
            "powód, dla którego piszesz (purpose)",
            "rodzaj tekstu i jego cechy (form)",
            "to, jak twój tekst brzmi dla czytelnika (tone)"
          ],
          "passage": [
            "Pisanie opinii (opinion writing) to sposób wyrażania swojego zdania w formalnym tekście.",
            "W tym rozdziale będziesz pisać recenzje i artykuły z opinią.",
            "Zanim zaczniesz pisać, zadaj trzy pytania.",
            "Dla kogo piszę? To są odbiorcy (audience).",
            "Dlaczego to piszę? To jest cel (purpose).",
            "Jaki to rodzaj tekstu? To jest forma (form).",
            "Pomyśl o kombinezonie mechanika.",
            "Jego celem jest ochrona kogoś, kto wykonuje brudną pracę.",
            "Jego forma to długie rękawy, mocny materiał i dużo kieszeni.",
            "Jego odbiorca to ktoś, kto chce czuć się wygodnie i bezpiecznie.",
            "Pisanie działa tak samo.",
            "Kiedy już znasz swoich odbiorców, dobierz ton (tone), który do nich pasuje.",
            "Recenzja dla rodziców brzmi inaczej niż recenzja dla nastolatków."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o que você pensa sobre alguma coisa (opinion, opinião)",
            "as pessoas para quem você está a escrever/está escrevendo (audience, público)",
            "a razão por que você está a escrever/está escrevendo (purpose, propósito)",
            "o tipo de texto e as suas características (form, forma)",
            "como o seu texto soa ao leitor (tone, tom)"
          ],
          "passage": [
            "A escrita de opinião (opinion writing) é uma maneira de dar a sua opinião num texto formal.",
            "Nesta unidade você vai escrever críticas (reviews) e artigos de opinião.",
            "Antes de escrever, faça três perguntas.",
            "Para quem estou a escrever/estou escrevendo? Esse é o público.",
            "Por que estou a escrever/estou escrevendo isto? Esse é o propósito.",
            "Que tipo de texto é este? Essa é a forma.",
            "Pense no macacão de um mecânico.",
            "O propósito dele é proteger alguém que faz um trabalho sujo.",
            "A forma dele tem mangas compridas, tecido forte e muitos bolsos.",
            "O público dele é alguém que quer estar confortável e em segurança.",
            "A escrita funciona da mesma maneira.",
            "Quando você conhece o seu público, escolha o tom que lhe convém.",
            "Uma crítica para pais soa diferente de uma crítica para adolescentes."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "waxa aad ka fikirto wax uun (opinion)",
            "dadka aad u qorayso (audience)",
            "sababta aad u qorayso (purpose)",
            "nooca qoraalka iyo astaamihiisa (form)",
            "sida qoraalkaagu akhristaha u dhawaaqo (tone)"
          ],
          "passage": [
            "Qoraalka ra'yiga (opinion writing) waa hab aad ra'yigaaga ku sheegto qoraal rasmi ah.",
            "Cutubkan waxaad ku qori doontaa dib-u-eegisyo (reviews) iyo maqaallo ra'yi.",
            "Intaadan qorin, saddex su'aalood is weydii.",
            "Yaan u qorayaa? Taasi waa dadka loo qorayo (audience).",
            "Maxaan u qorayaa tan? Taasi waa ujeeddada (purpose).",
            "Nooce qoraal ayuu yahay? Taasi waa qaabka (form).",
            "Ka fikir dharka shaqo ee makaanigga.",
            "Ujeeddadoodu waa in ay ilaaliyaan qof shaqo wasakh leh samaynaya.",
            "Qaabkoodu wuxuu leeyahay gacmo dhaadheer, maro adag iyo jeebab badan.",
            "Dadka loogu talagalay waa qof doonaya inuu raaxaysto oo ammaan ahaado.",
            "Qoraalkuna sidaas oo kale ayuu u shaqeeyaa.",
            "Markaad ogaato dadka aad u qorayso, dooro cod (tone) ku habboon iyaga.",
            "Dib-u-eegis waalidiinta loo qoray si ka duwan ayuu u dhawaaqaa mid dhallinyarada loo qoray."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "те, що ви думаєте про щось (opinion)",
            "люди, для яких ви пишете (audience)",
            "причина, чому ви пишете (purpose)",
            "тип тексту та його ознаки (form)",
            "те, як ваш текст звучить для читача (tone)"
          ],
          "passage": [
            "Письмо-думка (opinion writing) — це спосіб висловити свою думку у формальному тексті.",
            "У цьому розділі ви писатимете рецензії (reviews) та статті-думки (opinion articles).",
            "Перш ніж писати, поставте три запитання.",
            "Для кого я пишу? Це аудиторія (audience).",
            "Чому я це пишу? Це мета (purpose).",
            "Який це тип тексту? Це форма (form).",
            "Подумайте про робочий комбінезон механіка.",
            "Його мета — захистити того, хто виконує брудну роботу.",
            "Його форма має довгі рукави, міцну тканину та багато кишень.",
            "Його аудиторія — це той, хто хоче почуватися зручно й безпечно.",
            "Письмо працює так само.",
            "Коли ви знаєте свою аудиторію, оберіть тон (tone), який їй підходить.",
            "Рецензія для батьків звучить інакше, ніж рецензія для підлітків."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "آپ کسی چیز کے بارے میں کیا سوچتے ہیں (opinion)",
            "وہ لوگ جن کے لیے آپ لکھ رہے ہیں (audience)",
            "آپ کے لکھنے کی وجہ (purpose)",
            "متن کی قسم اور اس کی خصوصیات (form)",
            "آپ کی تحریر قاری کو کیسی لگتی ہے (tone)"
          ],
          "passage": [
            "رائے کی تحریر (opinion writing) رسمی تحریر میں اپنی رائے دینے کا ایک طریقہ ہے۔",
            "اس یونٹ میں آپ تبصرے (reviews) اور رائے کے مضمون لکھیں گے۔",
            "لکھنے سے پہلے تین سوال پوچھیں۔",
            "میں کس کے لیے لکھ رہا ہوں؟ یہ قاری (audience) ہے۔",
            "میں یہ کیوں لکھ رہا ہوں؟ یہ مقصد (purpose) ہے۔",
            "یہ کس قسم کا متن ہے؟ یہ قسم (form) ہے۔",
            "ایک مکینک کے کام کے لباس (overalls) کے بارے میں سوچیں۔",
            "ان کا مقصد گندا کام کرنے والے شخص کی حفاظت کرنا ہے۔",
            "ان کی بناوٹ میں لمبی آستینیں، مضبوط کپڑا اور بہت سی جیبیں ہیں۔",
            "ان کا استعمال کرنے والا وہ شخص ہے جو آرام اور حفاظت چاہتا ہے۔",
            "تحریر بھی اسی طرح کام کرتی ہے۔",
            "جب آپ کو اپنے قاری کا پتا ہو جائے تو اپنا لہجہ (tone) ان کے مطابق چنیں۔",
            "والدین کے لیے لکھا تبصرہ نوعمروں کے لیے لکھے تبصرے سے الگ لگتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "What opinion writing is",
          paragraphs: [
            "Opinion writing is a way of expressing what you think in formal writing. It can take the form of a magazine article, a newspaper column or a review. In this unit you will write two kinds: reviews, which tell a reader about something you have experienced, and opinion articles, which argue for a point of view.",
            "An opinion can be strong or balanced. You can fully agree with a statement, partly agree, or completely disagree. What matters is that you base your opinion on something: facts you know, things you have experienced, and examples you can give. ‘I think it is good’ is a start; ‘I think it is good because…’ is opinion writing."
          ],
          tip: "Every time you give an opinion, follow it with ‘because’ and an example. That habit is the whole unit in one sentence." },
        { heading: "Three questions before you write",
          paragraphs: [
            "Your teachers call them the foundation of all writing: purpose, form and audience. Purpose is why you are writing, for example to inform or to persuade. Form is the type of text and its special features, such as a headline or a clear final judgement. Audience is who you are writing for, and it decides your tone.",
            "Think about how clothes are designed. If you were asked to design overalls for a car mechanic, you would first ask why overalls are needed (purpose: comfort and protection for dirty work). Then you would decide the special features that serve that purpose (form: loose shape, long sleeves, strong material, many pockets). Finally you would picture the customer (audience: someone who wants to feel comfortable and protected, and probably loves cars).",
            "A writing task works the same way. ‘Write a review of a film character for a parenting magazine.’ Circle the form: a review. Ask the purpose of a review: to give an opinion based on facts, to inform and describe, and to persuade a little. Name the audience: parents. Now you know what they want to hear, and how to sound."
          ],
          worked: { q: "Work through purpose, form and audience for the task ‘Design a PE kit for a secondary school’.",
            steps: ["Purpose: what is a PE kit used for? Running, stretching, getting muddy, and being washed often.", "Form: what features serve that purpose? Light stretchy cloth, a school colour so teams are easy to spot, a name label.", "Audience: who wears it? Pupils aged eleven to sixteen who want to move freely and not stand out for the wrong reasons."],
            answer: "Purpose: sport and frequent washing. Form: light, stretchy, school colours, labelled. Audience: pupils who want comfort and to fit in. The same three questions work for any piece of writing." },
          tip: "Write P, F and A in the margin of every task and fill them in before you plan. It takes thirty seconds and saves a lost paragraph." },
        { heading: "Tone: the same opinion, two audiences",
          paragraphs: [
            "Tone is how your writing sounds. You already change it when you speak: you talk to a teacher differently from the way you talk to a friend, even when you are saying the same thing. In writing, your audience and purpose decide your tone, and your tone decides your words.",
            "Read these two mini-reviews of the same trampoline park, both written for Ad Astra. The first is for a parenting magazine; the second is for a teenage magazine. The facts are the same. The tone is not.",
            "Notice what each writer chooses to mention. Parents are told about wristbands, the safety talk and somewhere to sit. Teenagers are told about the dodgeball court and when the little kids leave. Choosing what your audience cares about is the first step in getting the tone right."
          ],
          quote: { text: "Bounce Yard: an afternoon they will not forget. If your weekends have become a cycle of screens and sulking, Bounce Yard may be the answer. The new trampoline park opened last month, and we visited on a wet Saturday. Staff checked every child’s wristband, the safety talk was clear, and the café had somewhere for tired adults to sit. Two hours cost us less than a cinema trip. My ten-year-old slept all the way home. Bounce Yard: finally, somewhere worth leaving the house for. Forget the park. Bounce Yard opened last month, and it is the only place in town where you can throw yourself at a padded wall and get cheered for it. The dodgeball court is brutal, the foam pit is deeper than it looks, and the music is loud enough to drown out your mates. Go after six, when the little kids have gone home.",
            source: "Two mini-reviews of ‘Bounce Yard’ — original model texts written for Ad Astra" },
          tip: "A review that is only opinion, opinion, opinion starts to sound like a speech. Keep the facts in." }
      ],
      gate: [
        { kind: "mcq", q: "Which question finds the purpose of a piece of writing?", options: ["Who is going to read it?", "Why am I writing it?", "What type of text is it?", "How long should it be?"], answer: 1,
          feedback: [
            "‘Who is going to read it?’ finds the audience, not the purpose. Purpose is the reason for writing: to inform, persuade, entertain or advise.",
            "",
            "‘What type of text is it?’ finds the form, such as a review or an article. Purpose is why you are writing it at all.",
            "Length is a decision you make later, once you know the form. Purpose is the reason behind the writing."
          ],
          why: "Purpose is why you are writing: to inform, persuade, entertain or advise. Audience is who, and form is what type of text." },
        { kind: "gap", q: "The ___ of a text is the people it is written for.", answer: "audience", options: ["audience", "purpose", "form"],
          feedback: {
            "purpose": "Purpose is the reason for writing, not the people reading. The people you write for are the audience.",
            "form": "Form is the type of text and its features, such as a review with a headline. The people who read it are the audience."
          },
          why: "The audience is who you are writing for; it decides your tone." },
        { kind: "mcq", q: "What is the main purpose of a review?", options: ["To persuade a live crowd to take action", "To inform the reader about an experience and help them decide", "To tell a made-up story with characters", "To give step-by-step instructions"], answer: 1,
          feedback: [
            "Persuading a live crowd to act is the purpose of a speech. A review is written to be read, and it informs first and persuades only a little.",
            "",
            "A story is fiction. A review is non-fiction: it is about something the writer has really experienced, or claims to have.",
            "Instructions tell the reader how to do something. A review tells them what something was like and whether it is worth their time."
          ],
          why: "A review informs the reader about a real experience and helps them make a decision, persuading a little along the way." }
      ],
      modules: [
        { title: "Match the question to the idea",
          task: { kind: "match", q: "Match each question a writer asks to the idea it checks.",
            pairs: [
              ["Who am I writing for?", "Audience"],
              ["Why am I writing this?", "Purpose"],
              ["What type of text is it, and what features does it need?", "Form"],
              ["How should my writing sound to this reader?", "Tone"]
            ] },
          levels: {
            support: { steps: ["Audience is always about people: who will read it.", "Purpose is always a reason: to inform, persuade, entertain or advise.", "Form is the type of text: a review, an article, a letter.", "Tone is the sound of the writing, and it is chosen to suit the audience."],
              example: { q: "A pupil is asked to write a letter to the head teacher asking for a longer lunch break. Name the audience, purpose and form.", steps: ["Who reads it? The head teacher.", "Why write it? To persuade.", "What type of text? A letter."], answer: "Audience: the head teacher. Purpose: to persuade. Form: a letter. The tone would be polite and formal." } },
            core: { hint: "Three of the questions start with Who, Why and What. The fourth is about sound." },
            stretch: { extend: "Explain why tone depends on audience and purpose together, using the two Bounce Yard mini-reviews as your example." }
          },
          explain: "Say, in one sentence, how you can tell a question about audience from a question about purpose.",
          why: "Who is the audience, why is the purpose, what type of text is the form, and how it sounds is the tone." },
        { title: "Spot the audience",
          task: { kind: "mcq", q: "Read the two Bounce Yard mini-reviews. Which detail shows that the first review is written for parents?",
            options: ["“Go after six, when the little kids have gone home.”", "“Staff checked every child’s wristband, the safety talk was clear”", "“the music is loud enough to drown out your mates”", "“throw yourself at a padded wall and get cheered for it”"], answer: 1,
            feedback: [
              "That line is from the second review, and it tells teenagers how to avoid younger children. A parent would not want that advice.",
              "",
              "Loud music and ‘your mates’ speak to a teenager. Parents in the first review are told about safety and somewhere to sit.",
              "Throwing yourself at a wall is the thrill the second review sells to teenagers. The first review sells safety and value to parents."
            ] },
          levels: {
            support: { steps: ["Ask what parents care about: safety, cost, and tired children.", "Find the line that mentions safety.", "Check it comes from the first review, not the second."],
              example: { q: "Which detail is written for grandparents: ‘the car park is right by the entrance, so there is no long walk’, or ‘the queue is a great place to meet people from other schools’?", steps: ["Grandparents may worry about walking distances.", "Meeting people from other schools matters to teenagers."], answer: "‘the car park is right by the entrance, so there is no long walk’ is written for grandparents." } },
            core: { hint: "Which of the four details would make a parent feel reassured?" },
            stretch: { extend: "Rewrite the wristband sentence so that it would appeal to teenagers instead, and explain what you changed." }
          },
          explain: "Say which word in the detail you chose told you the audience was parents.",
          why: "Wristbands and a clear safety talk reassure parents. The other three details are written to excite teenagers." },
        { title: "Writing practice: a mini-review for one audience",
          contexts: [
            { label: "For a teenage magazine", q: "Writing practice (paragraph). Write a mini-review of a place you know well, about eight lines long, for a magazine read by teenagers. Make your purpose, form and tone fit that audience.",
              why: "Teenagers want to know what is exciting, who else goes there and when it is best. The facts stay; the tone becomes livelier and the details change." },
            { label: "For a grandparents’ magazine", q: "Writing practice (paragraph). Write a mini-review of a place you know well, about eight lines long, for a magazine read by grandparents. Make your purpose, form and tone fit that audience.",
              why: "Grandparents may want to know about seating, cost, quiet times and what makes the place relatable to them. The tone is warm and respectful, and the facts stay." }
          ],
          task: { kind: "written", q: "Writing practice (paragraph). Write a mini-review of a place you know well, about eight lines long, for a magazine read by parents. Make your purpose, form and tone fit that audience.",
            marks: 8,
            criteria: [
              "I give my review a heading (form).",
              "I include at least two facts about the place (inform).",
              "My opinion is clear and based on my own experience (persuade a little).",
              "I mention at least one thing this particular audience would care about.",
              "My tone suits the audience named in the task."
            ],
            model: "Bounce Yard: an afternoon they will not forget\n\nIf your weekends have become a cycle of screens and sulking, Bounce Yard may be the answer. The new trampoline park opened last month, and we visited on a wet Saturday. Staff checked every child’s wristband, the safety talk was clear, and the café had somewhere for tired adults to sit. Two hours cost us less than a cinema trip. My ten-year-old slept all the way home." },
          levels: {
            support: { steps: ["Write P, F, A in the margin: purpose (inform and persuade a little), form (a review with a heading), audience (the one named).", "List two facts: when it opened, what it costs, how long you stayed.", "Write one sentence about what this audience worries about or wants.", "End with your opinion in one clear sentence."],
              example: { q: "Write two sentences of a mini-review of a swimming pool for parents.", steps: ["Fact first: opening times or price.", "Then what parents care about: lifeguards, changing rooms, a shallow end."], answer: "The pool opens at seven and a family ticket costs twelve pounds. Two lifeguards watched the shallow end the whole time we were there, which let me actually relax." } },
            core: { hint: "Start with a heading, then one fact, then one thing your audience cares about, then your opinion." },
            stretch: { extend: "Rewrite your mini-review for a second audience, keeping every fact the same. Underline the three words you changed to shift the tone." }
          },
          explain: "Say which detail you included only because of who your audience is.",
          why: "A strong mini-review keeps the facts, makes the opinion clear, and chooses its details and tone for the audience named in the task." }
      ]
    },

    /* ───────────────────────── 2 ───────────────────────── */
    { key: "review-features", n: 2,
      title: "What makes a review a review",
      lead: "You will recognise the seven features of a review, tell a review from a speech, and see why a short website review is not the model to copy.",
      covers: [2, 3],
      pretext: {
        words: [
          { word: "critic", means: "a person who writes reviews", sentence: "A critic tells us what they experienced and what they thought of it." },
          { word: "headline", means: "the title at the top of a review or article", sentence: "A good headline gives the reader a hint of your opinion." },
          { word: "anecdote", means: "a short personal story", sentence: "An anecdote about a kite hitting a man makes the review funny." },
          { word: "contrasting", means: "different from, or opposite to", sentence: "A fair review includes contrasting opinions, not only the writer’s." },
          { word: "judgement", means: "your final decision about something", sentence: "Save your clear judgement for the last paragraph." }
        ],
        passage: [
          "A review is written by a critic.",
          "The critic tells us what they experienced and why they formed their opinion.",
          "A review informs the reader and helps them decide.",
          "A speech is different.",
          "A speech is spoken to a live audience and tries to persuade them.",
          "If your review is only opinion, it starts to sound like a speech.",
          "A review has a headline.",
          "It uses the past tense to describe the experience.",
          "It has short paragraphs that are full of information.",
          "It includes other people’s opinions as well as yours.",
          "It gives specific details about this one event.",
          "The last paragraph gives a clear judgement.",
          "Short website reviews have word limits, so they are not good models.",
          "A full review goes into much more detail."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "شخص يكتب المراجعات (critic)",
            "العنوان في أعلى المراجعة أو المقال (headline)",
            "قصة شخصية قصيرة (anecdote)",
            "مختلف عن شيء، أو معاكس له (contrasting)",
            "قرارك النهائي بشأن شيء ما (judgement)"
          ],
          "passage": [
            "المراجعة (review) يكتبها ناقد (critic).",
            "يخبرنا الناقد بما عاشه ولماذا كوّن رأيه.",
            "المراجعة تُخبر القارئ وتساعده على أن يقرّر.",
            "الخطبة شيء مختلف.",
            "الخطبة تُقال أمام جمهور حاضر وتحاول أن تُقنعه.",
            "إذا كانت مراجعتك رأياً فقط، فإنها تبدأ تبدو مثل خطبة.",
            "المراجعة لها عنوان رئيسي (headline).",
            "وتستعمل الزمن الماضي لوصف التجربة.",
            "وفيها فقرات قصيرة مليئة بالمعلومات.",
            "وتتضمّن آراء الآخرين إلى جانب رأيك.",
            "وتعطي تفاصيل محدّدة عن هذا الحدث بالذات.",
            "الفقرة الأخيرة تعطي حكماً (judgement) واضحاً.",
            "مراجعات المواقع القصيرة لها حدود في عدد الكلمات، ولذلك ليست نماذج جيدة.",
            "المراجعة الكاملة تدخل في تفاصيل أكثر بكثير."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "osoba, która pisze recenzje (critic)",
            "tytuł u góry recenzji lub artykułu (headline)",
            "krótka osobista historia (anecdote)",
            "różniący się od czegoś albo przeciwny do czegoś (contrasting)",
            "twoja ostateczna decyzja na temat czegoś (judgement)"
          ],
          "passage": [
            "Recenzję pisze krytyk (critic).",
            "Krytyk mówi nam, czego doświadczył i dlaczego wyrobił sobie taką opinię.",
            "Recenzja informuje czytelnika i pomaga mu podjąć decyzję.",
            "Przemowa jest inna.",
            "Przemowę wygłasza się do żywej publiczności i próbuje się ją przekonać.",
            "Jeśli twoja recenzja to sama opinia, zaczyna brzmieć jak przemowa.",
            "Recenzja ma nagłówek (headline).",
            "Używa czasu przeszłego, żeby opisać doświadczenie.",
            "Ma krótkie akapity pełne informacji.",
            "Zawiera opinie innych ludzi, a nie tylko twoją.",
            "Podaje konkretne szczegóły o tym jednym wydarzeniu.",
            "Ostatni akapit daje jasną ocenę (judgement).",
            "Krótkie recenzje w internecie mają limity słów, więc nie są dobrymi wzorami.",
            "Pełna recenzja wchodzi w dużo więcej szczegółów."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma pessoa que escreve críticas (critic, crítico)",
            "o título no topo de uma crítica ou de um artigo (headline, manchete)",
            "uma história pessoal curta (anecdote, anedota)",
            "diferente de, ou oposto a (contrasting, contrastante)",
            "a sua decisão final sobre alguma coisa (judgement, juízo)"
          ],
          "passage": [
            "Uma crítica (review) é escrita por um crítico.",
            "O crítico conta-nos o que viveu e por que formou a sua opinião.",
            "Uma crítica informa o leitor e ajuda-o a decidir.",
            "Um discurso é diferente.",
            "Um discurso é dito a um público ao vivo e tenta persuadi-lo.",
            "Se a sua crítica for só opinião, começa a soar como um discurso.",
            "Uma crítica tem uma manchete (headline).",
            "Usa o passado para descrever a experiência.",
            "Tem parágrafos curtos, cheios de informação.",
            "Inclui as opiniões de outras pessoas, além da sua.",
            "Dá detalhes específicos sobre esse acontecimento em particular.",
            "O último parágrafo dá um juízo claro.",
            "As críticas curtas dos sites têm limites de palavras, por isso não são bons modelos.",
            "Uma crítica completa entra em muito mais detalhe."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "qof dib-u-eegisyo qora (critic)",
            "cinwaanka saaran dib-u-eegis ama maqaal (headline)",
            "sheeko gaaban oo shakhsi ah (anecdote)",
            "ka duwan, ama lid ku ah (contrasting)",
            "go'aankaaga ugu dambeeya ee ku saabsan wax uun (judgement)"
          ],
          "passage": [
            "Dib-u-eegis (review) waxaa qora critic.",
            "Critic-gu wuxuu noo sheegaa waxa uu la kulmay iyo sababta uu ra'yigaas u qaatay.",
            "Dib-u-eegis akhristaha ayuu wargeliyaa, wuxuuna ka caawiyaa inuu go'aan gaaro.",
            "Khudbad way ka duwan tahay.",
            "Khudbad waxaa loola hadlaa dad hortaada jooga, waxayna isku daydaa inay qanciso.",
            "Haddii dib-u-eegiskaagu ra'yi keliya yahay, wuxuu bilaabayaa inuu u dhawaaqo sida khudbad.",
            "Dib-u-eegis wuxuu leeyahay cinwaan weyn (headline).",
            "Wuxuu isticmaalaa waqtigii tegay (past tense) si uu u sharraxo waxa la la kulmay.",
            "Wuxuu leeyahay baaragaraafyo gaagaaban oo macluumaad ka buuxo.",
            "Wuxuu ku daraa ra'yiga dadka kale iyo kaaga.",
            "Wuxuu bixiyaa faahfaahin gaar ah oo ku saabsan hal dhacdo.",
            "Baaragaraafka ugu dambeeya wuxuu bixiyaa go'aan cad (judgement).",
            "Dib-u-eegisyada gaagaaban ee websaydhyada waxay leeyihiin xadka erayada, sidaas darteed ma aha tusaalayaal wanaagsan.",
            "Dib-u-eegis buuxa faahfaahin aad u badan ayuu galaa."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "людина, яка пише рецензії (critic)",
            "заголовок угорі рецензії або статті (headline)",
            "коротка особиста історія (anecdote)",
            "відмінний від чогось або протилежний (contrasting)",
            "ваше остаточне рішення про щось (judgement)"
          ],
          "passage": [
            "Рецензію (review) пише критик (critic).",
            "Критик розповідає нам, що він пережив і чому в нього склалася така думка.",
            "Рецензія інформує читача і допомагає йому вирішити.",
            "Промова — це інше.",
            "Промову виголошують перед живою аудиторією і намагаються її переконати.",
            "Якщо ваша рецензія — це лише думка, вона починає звучати як промова.",
            "Рецензія має заголовок (headline).",
            "Вона використовує минулий час, щоб описати пережите.",
            "Вона має короткі абзаци, повні інформації.",
            "Вона включає думки інших людей, а не лише вашу.",
            "Вона дає конкретні деталі саме про цю одну подію.",
            "Останній абзац дає чітку оцінку (judgement).",
            "Короткі відгуки на сайтах мають обмеження за кількістю слів, тому вони не є добрими зразками.",
            "Повна рецензія заглиблюється в набагато більше деталей."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ شخص جو تبصرے لکھتا ہے (critic)",
            "تبصرے یا مضمون کے اوپر لکھا عنوان (headline)",
            "ایک چھوٹی ذاتی کہانی (anecdote)",
            "الگ، یا الٹ (contrasting)",
            "کسی چیز کے بارے میں آپ کا آخری فیصلہ (judgement)"
          ],
          "passage": [
            "تبصرہ (review) ایک نقاد (critic) لکھتا ہے۔",
            "نقاد ہمیں بتاتا ہے کہ اس نے کیا تجربہ کیا اور اس نے اپنی رائے کیوں بنائی۔",
            "تبصرہ قاری کو معلومات دیتا ہے اور فیصلہ کرنے میں مدد کرتا ہے۔",
            "تقریر الگ چیز ہے۔",
            "تقریر سامنے موجود سننے والوں سے بولی جاتی ہے اور انھیں قائل کرنے کی کوشش کرتی ہے۔",
            "اگر آپ کا تبصرہ صرف رائے ہو تو وہ تقریر جیسا لگنے لگتا ہے۔",
            "تبصرے کی ایک سرخی (headline) ہوتی ہے۔",
            "یہ تجربہ بیان کرنے کے لیے ماضی کا زمانہ استعمال کرتا ہے۔",
            "اس میں چھوٹے پیراگراف ہوتے ہیں جو معلومات سے بھرے ہوتے ہیں۔",
            "اس میں آپ کی رائے کے ساتھ دوسرے لوگوں کی رائے بھی شامل ہوتی ہے۔",
            "یہ اسی ایک واقعے کے بارے میں خاص تفصیلیں دیتا ہے۔",
            "آخری پیراگراف ایک صاف فیصلہ (judgement) دیتا ہے۔",
            "ویب سائٹ کے چھوٹے تبصروں میں لفظوں کی حد ہوتی ہے، اس لیے وہ اچھے نمونے نہیں ہیں۔",
            "مکمل تبصرہ کہیں زیادہ تفصیل میں جاتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "A review is written by a critic",
          paragraphs: [
            "A critic is someone who experiences something, a film, a meal, a festival, a game, and then tells readers what it was like and how they came to their opinion. The experience is the point. A review without the critic’s experience is just a list of opinions, and a list of opinions is halfway to being a speech.",
            "Reviews and speeches both give opinions and both persuade, but they are built differently. A review is written to be read, by people who are already interested in the topic. Its purpose is to inform and to help them decide. A speech is written for a live audience who need convincing; its purpose is to persuade, and its facts are chosen to do exactly that.",
            "So here is the confusion alert your teachers give you: if you only include opinion, opinion and opinion, be careful. You may end up writing a speech. Make the reader experience the event with you, add intriguing details, and tell them facts about your experience as a critic."
          ],
          quote: { text: "Friends, we cannot let this pool close. Sign the petition today, before it is too late! The pool closed at six, an hour earlier than the website promised, and the lockers took only old pound coins.",
            source: "A line from a speech, then a line from a review — original examples written for Ad Astra" },
          tip: "If a sentence of your review could be shouted from a stage, it probably belongs in a speech." },
        { heading: "The seven features of a review",
          paragraphs: [
            "Some features a review shares with a magazine article: a headline, the past tense when describing the experience, and shorter paragraphs packed with information. Four features are special to a review: a personal opinion based on experience; contrasting opinions, not just your own; ‘personal’ and specific details about this one event; and a clear judgement in the last paragraph.",
            "Read the first half of ‘Up, Up and Nearly Away’, an original review written for Ad Astra of a town kite festival for a family magazine. Count the features as you go: the headline gives the writer’s angle, the past tense tells the story of the day, and the second paragraph is packed with facts a family would want.",
            "A quick quiz your teacher might set: What goes at the top of a review before the introduction? A headline. Should you include a personal rating or recommendation at the end? Yes. Should you include other people’s opinions? Yes. Is a review serious and informative only, never entertaining? False: anecdotes and humour are welcome."
          ],
          quote: { text: "Up, Up and Nearly Away: a day at the Marsh Hill Kite Festival Picture a hill so windy that the ice-cream van needs a handbrake. That was Marsh Hill last Sunday, when the annual kite festival returned for its twelfth year, and our family went along expecting a quiet picnic. We did not get one. The festival runs from ten until four and entry is free, though parking in the lower field costs five pounds. More than two hundred kites were registered this year, from supermarket diamonds to a Chinese dragon longer than a bus. Food stalls, a kite-making tent and a first-aid post sit at the bottom of the slope.",
            source: "‘Up, Up and Nearly Away’, paragraphs 1–2 — original model review written for Ad Astra" },
          tip: "Headline, past tense, packed paragraphs, your opinion, others’ opinions, specific details, clear judgement: seven features. Learn them as a list." },
        { heading: "Why a 100-word website review is not the model",
          paragraphs: [
            "Review websites let anyone post a review of a hotel, a restaurant, a book or a shop. Most have a word limit, so their reviews are short: a quick summary, a rating and a line of opinion. They are useful for choosing a pizza. They are not good models for English writing, because a word limit stops the writer developing anything.",
            "An extensive review does what the short one cannot. It gives background information (who, what, where, when, and for a performance, the director, actors and key moments). It brings the experience to life with an anecdote or humour. It includes other people’s opinions. And it ends by answering the reader’s real question: would you recommend this, and why?",
            "Here is the second half of the kite review. Notice the anecdote, the contrasting opinions of other visitors, and the clear recommendation in the last paragraph."
          ],
          quote: { text: "I had promised my daughter that our kite would fly. It did, for about nine seconds, before it nose-dived into a man eating chips. He was very kind about it. Later, in the kite-making tent, a volunteer called Priya showed us how to balance a frame, and our second attempt stayed up for the whole afternoon. Not everything soared. The queue for the toilets was long, and the loudspeaker announcements were impossible to hear over the wind. Some visitors near us grumbled that the car park was a swamp. Even so, the volunteers were patient with every tangled line, and the sight of two hundred kites against a grey sky is hard to beat. Would I go again? Yes, with wellies and a stronger kite. Marsh Hill is a free day out that gives families something to do together, which is rarer than it should be. The festival returns next May; check the town council website for the date.",
            source: "‘Up, Up and Nearly Away’, paragraphs 3–5 — original model review written for Ad Astra" },
          tip: "If your review could fit in a text message, it is not finished." }
      ],
      gate: [
        { kind: "mcq", q: "Who writes a review?", options: ["A critic who has experienced the thing being reviewed", "A character inside a story", "The person who organised the event", "Anyone, as long as they have never seen it"], answer: 0,
          feedback: [
            "",
            "Characters belong in fiction. A review is non-fiction, written by a real person about a real experience.",
            "The organiser would only praise it. A review is written by a critic who experienced it as a member of the audience, and who can include other people’s views.",
            "A review is built on experience. Someone who has never seen the thing has no experience to describe, so they cannot write a review of it."
          ],
          why: "A critic experiences something and then tells readers what it was like and how they formed their opinion." },
        { kind: "gap", q: "When a review describes the writer’s experience, it is usually written in the ___ tense.", answer: "past", options: ["past", "future", "present"],
          feedback: {
            "future": "The future tense would describe something that has not happened yet. A critic describes what they already experienced, so the past tense fits.",
            "present": "The present tense is used for facts that are still true, such as opening times. The experience itself has already happened, so it is told in the past tense."
          },
          why: "The experience has already happened, so the review tells it in the past tense." },
        { kind: "mcq", q: "Where does a review give its clear final judgement?", options: ["Only in the headline", "In the last paragraph", "Nowhere; the reader should guess", "In a list of bullet points at the start"], answer: 1,
          feedback: [
            "The headline hints at your angle, but a judgement needs a reason, and a headline has no room for one. The clear judgement comes at the end.",
            "",
            "A review exists to help the reader decide. Making them guess defeats its purpose. End with a clear judgement.",
            "Bullet points at the start are a leaflet, not a review. A review builds to its judgement in the final paragraph."
          ],
          why: "The last paragraph gives a clear judgement specific to the event, with the final reason behind it." }
      ],
      modules: [
        { title: "Find the feature",
          task: { kind: "match", q: "Match each feature of a review to the place it appears in ‘Up, Up and Nearly Away’.",
            pairs: [
              ["Headline that gives the writer’s angle", "“Up, Up and Nearly Away: a day at the Marsh Hill Kite Festival”"],
              ["Specific, factual detail", "“parking in the lower field costs five pounds”"],
              ["Anecdote with humour", "“it nose-dived into a man eating chips”"],
              ["Contrasting opinion, not the writer’s own", "“Some visitors near us grumbled that the car park was a swamp.”"],
              ["Clear judgement in the last paragraph", "“Would I go again? Yes, with wellies and a stronger kite.”"]
            ] },
          levels: {
            support: { steps: ["The headline is the title at the very top.", "A factual detail is something you could check: a number, a time, a price.", "An anecdote is a small story about the writer; humour makes you smile.", "A contrasting opinion belongs to someone other than the writer.", "The judgement answers ‘would you go again?’ and comes last."],
              example: { q: "In the Bounce Yard parents’ review, which line is a specific factual detail: “Two hours cost us less than a cinema trip.” or “Bounce Yard may be the answer”?", steps: ["Which one could be checked?", "Cost and time are facts; ‘may be the answer’ is opinion."], answer: "“Two hours cost us less than a cinema trip.” is the factual detail." } },
            core: { hint: "One quotation has a price in it, one has a question in it, and one begins with other people." },
            stretch: { extend: "The review has a sixth and seventh feature too: the past tense and short, information-packed paragraphs. Find one example of each." }
          },
          explain: "Say how you told the contrasting opinion apart from the writer’s own opinion.",
          why: "Headline at the top, a price as the fact, the chip-eating man as the anecdote, the grumbling visitors as the contrasting view, and the question-and-answer as the final judgement." },
        { title: "Review or speech?",
          task: { kind: "mcq", q: "Which change would turn the kite festival review into a speech?",
            options: ["Cutting the facts and keeping only the writer’s opinions, so a crowd could be urged to attend", "Adding the festival’s opening hours", "Describing the kite-making tent in more detail", "Including what other visitors thought of the car park"], answer: 0,
            feedback: [
              "",
              "Opening hours are a fact that informs the reader. Facts and details are what keep a review a review.",
              "More specific detail about one part of the event is exactly what a review does. A speech would skip the description and push the crowd towards a decision.",
              "Other people’s opinions make a review fairer and more informative. A speech usually gives one side only."
            ] },
          levels: {
            support: { steps: ["Remember the confusion alert: opinion, opinion and opinion sounds like a speech.", "Ask which option removes information and adds persuasion.", "Rule out any option that adds a fact or a detail."],
              example: { q: "Which is from a speech: “Sign the petition today, before it is too late!” or “the lockers took only old pound coins”?", steps: ["Which one urges a crowd to act?", "Which one is a detail from an experience?"], answer: "“Sign the petition today, before it is too late!” is from a speech; the lockers are a review detail." } },
            core: { hint: "A speech wants the crowd to do something. A review wants the reader to know something." },
            stretch: { extend: "Write one sentence of a speech urging families to attend the kite festival, then explain what makes it different from the review’s last paragraph." }
          },
          explain: "Say what a review has that a speech usually leaves out.",
          why: "A review informs with facts and experience; a speech persuades a live audience with opinion. Remove the facts and you have a speech." },
        { title: "Writing practice: an intentionally bad review",
          task: { kind: "written", q: "Writing practice (paragraph). Write an intentionally bad review of a made-up film, six to eight lines long, for a teenage audience. Start with your experience of being in the cinema, say who else was there, and give a clear reason why you would not recommend it. Do not give away too much; a reader should be able to guess the kind of film.",
            marks: 8,
            criteria: [
              "I give my review a headline that hints at my opinion.",
              "I use the past tense to describe being in the cinema.",
              "I say who else was in the audience and what that told me.",
              "I include at least one specific detail about the film.",
              "I end with a clear reason why a teenager should not go."
            ],
            model: "Pigeon Patrol 3: ninety minutes I want back\n\nI went in hopeful. The cinema was half full of eight-year-olds and their exhausted dads, which should have been my first warning. The plot, if you can call it that, follows three pigeons who save a shopping centre from a cat. The jokes landed like the pigeons: badly. If you are over twelve and thinking of going, go bowling instead." },
          levels: {
            support: { steps: ["Invent a film title and write a headline that hints it was bad.", "Sentence 1: how you felt walking in. Sentence 2: who else was in the cinema.", "Sentence 3: one detail of the plot or acting, without naming everything.", "Last sentence: tell a teenager what to do instead, and why."],
              example: { q: "Write the first two sentences of a bad review of a made-up cookery show for teenagers.", steps: ["Past tense, your experience first.", "Then who else was watching and what that suggests."], answer: "I sat down expecting fireworks and got a man slowly buttering toast. My nan was gripped, which told me everything I needed to know about the target audience." } },
            core: { hint: "Who was in the cinema with you tells the reader who the film is really for." },
            stretch: { extend: "Rewrite the same bad review for a grandparents’ magazine. What do you now mention, and what do you leave out?" }
          },
          explain: "Say which single detail does the most work to tell the reader your opinion.",
          why: "Even a joke review follows the features: headline, past tense, the critic’s experience, who else was there, a specific detail and a clear judgement for the audience." }
      ]
    },

    /* ───────────────────────── 3 ───────────────────────── */
    { key: "ideas-and-openings", n: 3,
      title: "Finding ideas and opening with a hook",
      lead: "You will read a writing prompt like a planner, find something to write about even when you think you have nothing, and open with one of four hooks.",
      covers: [4],
      pretext: {
        words: [
          { word: "prompt", means: "the task that tells you what to write", sentence: "Read the prompt twice before you plan." },
          { word: "event", means: "something that happens, big or small", sentence: "A family dinner counts as an event you can review." },
          { word: "hook", means: "an opening that grabs the reader", sentence: "A good hook makes the reader want the next sentence." },
          { word: "rhetorical question", means: "a question asked for effect, not for an answer", sentence: "‘Have you ever…?’ is a rhetorical question." },
          { word: "triple", means: "three things in a row", sentence: "‘Mud, rain, hot dogs’ is a triple." }
        ],
        passage: [
          "Imagine the prompt says: write a review of an exciting event you attended.",
          "First ask what form it wants: a review.",
          "Then ask the purpose, the audience and the tone.",
          "Many pupils say they have never been to an exciting event.",
          "Yes, you have.",
          "Dinner is an event.",
          "A family walk is an event.",
          "A birthday is an event.",
          "You are not judged on how cool your experience was.",
          "You are judged on how you write about it.",
          "There is no such thing as stuck, just hard thinking.",
          "Then open with a hook.",
          "You could ask a question, set the scene, use a triple, or speak to your reader.",
          "A good opening makes the reader want more."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "المهمّة التي تخبرك بما تكتبه (prompt)",
            "شيء يحدث، كبيراً كان أو صغيراً (event)",
            "افتتاحية تجذب القارئ (hook)",
            "سؤال يُطرح للتأثير، لا للحصول على جواب (rhetorical question)",
            "ثلاثة أشياء متتالية (triple)"
          ],
          "passage": [
            "تخيّل أن المهمّة (prompt) تقول: اكتب مراجعة عن حدث مثير حضرته.",
            "اسأل أولاً عن الشكل المطلوب: مراجعة.",
            "ثم اسأل عن الهدف والجمهور والنغمة.",
            "كثير من التلاميذ يقولون إنهم لم يحضروا حدثاً مثيراً أبداً.",
            "بل حضرت.",
            "العشاء حدث.",
            "نزهة العائلة حدث.",
            "عيد الميلاد حدث.",
            "لا يُحكم عليك بمدى روعة تجربتك.",
            "بل يُحكم عليك بطريقة كتابتك عنها.",
            "لا يوجد شيء اسمه «أنا عالق»، بل مجرّد تفكير صعب.",
            "ثم ابدأ بجاذب (hook).",
            "يمكنك أن تطرح سؤالاً، أو ترسم المشهد، أو تستعمل ثلاثية (triple)، أو تخاطب قارئك.",
            "الافتتاحية الجيدة تجعل القارئ يريد المزيد."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "polecenie, które mówi ci, co napisać (prompt)",
            "coś, co się dzieje, duże albo małe (event)",
            "początek, który chwyta czytelnika (hook)",
            "pytanie zadane dla efektu, a nie po odpowiedź (rhetorical question)",
            "trzy rzeczy pod rząd (triple)"
          ],
          "passage": [
            "Wyobraź sobie, że polecenie mówi: napisz recenzję ekscytującego wydarzenia, w którym brałeś udział.",
            "Najpierw zapytaj, jakiej formy chce: recenzji.",
            "Potem zapytaj o cel, odbiorców i ton.",
            "Wielu uczniów mówi, że nigdy nie byli na ekscytującym wydarzeniu.",
            "Owszem, byliście.",
            "Obiad to wydarzenie.",
            "Rodzinny spacer to wydarzenie.",
            "Urodziny to wydarzenie.",
            "Nie ocenia się cię za to, jak fajne było twoje doświadczenie.",
            "Ocenia się cię za to, jak o nim piszesz.",
            "Nie ma czegoś takiego jak „utknąłem”, jest tylko trudne myślenie.",
            "Potem zacznij od haczyka (hook).",
            "Możesz zadać pytanie, nakreślić scenę, użyć trójki albo zwrócić się do czytelnika.",
            "Dobry początek sprawia, że czytelnik chce więcej."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a tarefa que diz o que você deve escrever (prompt, enunciado)",
            "algo que acontece, grande ou pequeno (event, acontecimento)",
            "um início que agarra o leitor (hook)",
            "uma pergunta feita para causar efeito, não para ter resposta (rhetorical question, pergunta retórica)",
            "três coisas seguidas (triple)"
          ],
          "passage": [
            "Imagine que o enunciado diz: escreva uma crítica de um acontecimento emocionante a que você foi.",
            "Primeiro pergunte que forma ele quer: uma crítica.",
            "Depois pergunte o propósito, o público e o tom.",
            "Muitos alunos dizem que nunca foram a um acontecimento emocionante.",
            "Sim, você foi.",
            "Um jantar é um acontecimento.",
            "Um passeio em família é um acontecimento.",
            "Um aniversário é um acontecimento.",
            "Você não é avaliado pelo quanto a sua experiência foi incrível.",
            "Você é avaliado pela maneira como escreve sobre ela.",
            "Não existe ‘estar bloqueado’, só pensar com esforço.",
            "Depois comece com um hook.",
            "Você pode fazer uma pergunta, descrever a cena, usar uma lista de três, ou falar com o seu leitor.",
            "Um bom início faz o leitor querer mais."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "hawsha kuu sheegaysa waxa aad qorto (prompt)",
            "wax dhacaya, weyn ama yar (event)",
            "bilow akhristaha qabsata (hook)",
            "su'aal saamayn loo weydiiyo, oo aan jawaab loo baahnayn (rhetorical question)",
            "saddex wax oo isku xigta (triple)"
          ],
          "passage": [
            "Qiyaas in hawshu (prompt) tiraahdo: qor dib-u-eegis ku saabsan dhacdo xiiso leh oo aad ka qaybgashay.",
            "Marka hore is weydii nooca qoraalka ay doonayso: dib-u-eegis.",
            "Kadibna is weydii ujeeddada, dadka loo qorayo iyo codka.",
            "Arday badan waxay yiraahdaan weligood dhacdo xiiso leh ma tegin.",
            "Haa, waad tagtay.",
            "Casho waa dhacdo.",
            "Socod qoys waa dhacdo.",
            "Dhalasho waa dhacdo.",
            "Laguma qiimaynayo sida waayo-aragnimadaadu u fiicnayd.",
            "Waxaa lagu qiimaynayaa sida aad wax uga qorto.",
            "Wax la yiraahdo 'waan istaagay' ma jiro, waa fikir adag keliya.",
            "Kadibna ku bilow hook.",
            "Waxaad su'aal weydiin kartaa, goobta sawiri kartaa, saddex-geesood (triple) isticmaali kartaa, ama akhristahaaga la hadli kartaa.",
            "Bilow wanaagsan akhristaha ayuu ka dhigaa inuu wax dheeraad ah rabo."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "завдання, яке говорить вам, що писати (prompt)",
            "те, що відбувається, велике чи мале (event)",
            "початок, який захоплює читача (hook)",
            "запитання, поставлене для ефекту, а не для відповіді (rhetorical question)",
            "три речі поспіль (triple)"
          ],
          "passage": [
            "Уявіть, що завдання (prompt) каже: напишіть рецензію на захопливу подію, на якій ви були.",
            "Спочатку запитайте, якої форми воно хоче: рецензії.",
            "Потім запитайте про мету, аудиторію та тон.",
            "Багато учнів кажуть, що ніколи не були на захопливій події.",
            "Так, були.",
            "Вечеря — це подія.",
            "Сімейна прогулянка — це подія.",
            "День народження — це подія.",
            "Вас оцінюють не за те, наскільки крутою була ваша подія.",
            "Вас оцінюють за те, як ви про неї пишете.",
            "Немає такого поняття, як «застряг», є лише напружене думання.",
            "Потім почніть із зачіпки (hook).",
            "Ви можете поставити запитання, описати сцену, використати трійку (triple) або звернутися до читача.",
            "Добрий початок змушує читача хотіти більше."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ کام جو بتاتا ہے کہ آپ کو کیا لکھنا ہے (prompt)",
            "کوئی چیز جو ہوتی ہے، بڑی یا چھوٹی (event)",
            "ایسی شروعات جو قاری کو پکڑ لے (hook)",
            "ایسا سوال جو اثر کے لیے پوچھا جائے، جواب کے لیے نہیں (rhetorical question)",
            "ایک ساتھ تین چیزیں (triple)"
          ],
          "passage": [
            "فرض کریں سوال (prompt) کہتا ہے: کسی دلچسپ تقریب کا تبصرہ لکھیں جس میں آپ گئے تھے۔",
            "پہلے پوچھیں کہ یہ کون سی قسم چاہتا ہے: تبصرہ۔",
            "پھر مقصد، قاری اور لہجے کے بارے میں پوچھیں۔",
            "بہت سے طلبہ کہتے ہیں کہ وہ کبھی کسی دلچسپ تقریب میں نہیں گئے۔",
            "جی ہاں، آپ گئے ہیں۔",
            "رات کا کھانا ایک تقریب (event) ہے۔",
            "گھر والوں کے ساتھ چہل قدمی ایک تقریب ہے۔",
            "سالگرہ ایک تقریب ہے۔",
            "آپ کو اس بات پر نمبر نہیں ملتے کہ آپ کا تجربہ کتنا شاندار تھا۔",
            "آپ کو اس بات پر نمبر ملتے ہیں کہ آپ اس کے بارے میں کیسے لکھتے ہیں۔",
            "اٹک جانا کوئی چیز نہیں، بس مشکل سوچ ہوتی ہے۔",
            "پھر ایک hook سے شروع کریں۔",
            "آپ سوال پوچھ سکتے ہیں، منظر بنا سکتے ہیں، تین چیزوں کا سلسلہ (triple) استعمال کر سکتے ہیں، یا اپنے قاری سے بات کر سکتے ہیں۔",
            "اچھی شروعات قاری میں اور پڑھنے کی خواہش پیدا کرتی ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "Read the prompt like a planner",
          paragraphs: [
            "A typical prompt asks you to write a review of an interesting or exciting event you attended recently, with details of what it was and when, how it affected you or your family, and whether you would recommend it. Before you write, answer five questions. What form is it asking for: a review, an article, a letter, a speech? What is the purpose: writing to inform, to entertain, to persuade? Who is the audience? What tone fits them? What could you include to make it appealing for this particular audience?",
            "Write the answers in your book under four headings: Event, Purpose, Audience, Tone. A plan that fits on four lines is still a plan, and it stops you drifting into the wrong form halfway through."
          ],
          tip: "Circle the form in the prompt before anything else. A review written as a speech loses marks however good the sentences are." },
        { heading: "There is no such thing as stuck",
          paragraphs: [
            "‘I haven’t attended any interesting or exciting event!’ Yes, you have. Dinner is an event. A family walk is an event. A birthday is an event. Anything can be an event. It does not have to be a cup final or a stadium concert; it can be, but you are not being judged on how cool your experience was.",
            "You are judged on how you write about it and how you appeal to your audience. A family birthday can fill five paragraphs: you provide facts, reflect on the experience, entertain your reader and give advice. That is plenty. Your teachers put it in three lines: despair is not allowed; there is no such thing as stuck, just hard thinking; creativity is resilience.",
            "If you are still stuck, talk it through. When and where did it happen? What were the highlights? How did it affect you or your family? Would you recommend it, and why? If you could change one thing about it, what would it be? Those five questions produce a plan on their own."
          ],
          worked: { q: "Turn ‘my cousin’s birthday tea’ into enough material for a five-paragraph review.",
            steps: ["Facts: where it was, how many people came, what was served, how long it lasted.", "Experience: the moment the cake was brought in and the candles would not light.", "Entertain: the uncle who told the same joke three times.", "Advice: what you would tell another family planning one: fewer balloons, more chairs.", "Judgement: was it worth the afternoon, and would you go again?"],
            answer: "Facts, experience, entertainment, advice and a judgement: five paragraphs from one ordinary Sunday. Anything can be an event." },
          tip: "Write three things you could do when stuck: reread the prompt, list ordinary events, ask the five questions." },
        { heading: "Four ways to open",
          paragraphs: [
            "A good review should entertain the reader, so have some tricks up your sleeve for the first line. Your teachers give you four. A rhetorical question draws the reader in by making them answer in their head. Setting the scene drops the reader into the place and the moment. A triple lists three things for rhythm. An appeal to the audience speaks directly to the reader and tells them why this review is for them.",
            "Here are the four, each written for Ad Astra for a different event. Notice that every one of them also tells you something: where the writer was, or what the event was, or who it is for. A hook that only shows off is a wasted sentence."
          ],
          quote: { text: "Have you ever paid twelve pounds to sit in the dark and listen to a stranger eat crisps? Then you already know how my trip to the new cinema began. Picture this: a sports hall at eight in the morning, two hundred folding chairs, and one microphone that only works when it is tapped. Prize-giving had begun. Mud on my boots, rain down my neck, a hot dog in each hand: the county show had started exactly as I had hoped. If you think a museum is no place for a six-year-old, think again. The new dinosaur gallery was built for exactly that child, and for the adult trailing behind.",
            source: "Four openings: rhetorical question, setting the scene, triple, appeal to the audience — original examples written for Ad Astra" },
          tip: "Stems to keep: ‘Have you ever…?’, ‘Picture this:’, ‘Joy, fun and laughter: this is what you can expect when…’, ‘If you think…, think again.’" }
      ],
      gate: [
        { kind: "mcq", q: "Which of these counts as an event you could review?", options: ["A family walk on a Sunday", "Only a concert in a stadium", "Only a cup final", "Nothing ordinary; it has to be famous"], answer: 0,
          feedback: [
            "",
            "A stadium concert is one kind of event, but not the only kind. Anything can be an event; you are judged on how you write about it.",
            "A cup final would work, but so would a birthday or a walk. You are not judged on how exciting your experience was.",
            "Ordinary events make excellent reviews because you know the details. Dinner is an event; a family walk is an event."
          ],
          why: "Anything can be an event: dinner, a walk, a birthday. The writing is what is judged, not the event." },
        { kind: "gap", q: "A ___ question is asked for effect and does not need an answer.", answer: "rhetorical", options: ["rhetorical", "closed", "factual"],
          feedback: {
            "closed": "A closed question expects a short answer, such as yes or no. A question asked only for effect, which the reader answers in their head, is rhetorical.",
            "factual": "A factual question wants information. The opening ‘Have you ever…?’ wants no reply at all; it is rhetorical."
          },
          why: "A rhetorical question is asked for effect; the reader answers it silently and reads on." },
        { kind: "mcq", q: "Which of these openings is a triple?", options: ["“Have you ever paid twelve pounds to sit in the dark and listen to a stranger eat crisps?”", "“Picture this: a sports hall at eight in the morning”", "“Mud on my boots, rain down my neck, a hot dog in each hand”", "“If you think a museum is no place for a six-year-old, think again.”"], answer: 2,
          feedback: [
            "That is a rhetorical question: it ends with a question mark and expects no answer. A triple is three items in a row.",
            "‘Picture this’ sets the scene by placing the reader in the sports hall. Count the items in each option; the triple has three.",
            "",
            "That is an appeal to the audience: it speaks straight to the reader with ‘you’. A triple lists three things."
          ],
          why: "Mud, rain and a hot dog: three things in a row make a triple." }
      ],
      modules: [
        { title: "Name the opening",
          task: { kind: "match", q: "Match each type of opening to its example.",
            pairs: [
              ["Rhetorical question", "“Have you ever paid twelve pounds to sit in the dark and listen to a stranger eat crisps?”"],
              ["Setting the scene", "“Picture this: a sports hall at eight in the morning, two hundred folding chairs, and one microphone that only works when it is tapped.”"],
              ["Triple", "“Mud on my boots, rain down my neck, a hot dog in each hand”"],
              ["Appeal to the audience", "“If you think a museum is no place for a six-year-old, think again.”"]
            ] },
          levels: {
            support: { steps: ["Look for a question mark: a rhetorical question.", "Look for ‘Picture this’ or a place and a time: setting the scene.", "Count the items; three in a row is a triple.", "Look for ‘you’ and ‘think again’: an appeal to the audience."],
              example: { q: "Which opening is this: ‘Sunburn, sand in my shoes, a seagull with my sandwich: the beach trip had begun.’?", steps: ["Count the items before the colon.", "Three items in a row."], answer: "A triple." } },
            core: { hint: "Punctuation gives three of them away: a question mark, a colon after ‘Picture this’, and commas between three items." },
            stretch: { extend: "Write a fifth opening for the county show using a different technique from the one used in the example, and name it." }
          },
          explain: "Say which clue you looked for first to name each opening.",
          why: "A question mark marks the rhetorical question, ‘Picture this’ sets the scene, three items make the triple, and ‘you… think again’ appeals to the audience." },
        { title: "Plan before you write",
          task: { kind: "order", q: "Put the planning steps in the order you should do them before writing a review.",
            items: ["Read the prompt twice and circle the form it asks for", "Decide the purpose: inform, entertain, persuade a little", "Decide the audience and the tone that suits them", "Brainstorm events you could write about (anything can be an event)", "Choose an opening technique and write your first paragraph"] },
          levels: {
            support: { steps: ["You cannot plan a text until you know what type of text it is.", "Purpose comes before audience, because the purpose of a review is fixed and the audience changes.", "You need an audience before you can choose an event that will interest them.", "Writing always comes last."],
              example: { q: "Order these for a homework letter: write the letter, read who it is to, decide what you want from them, plan your points.", steps: ["Know the task first.", "Then what you want, then your points.", "Write last."], answer: "Read who it is to, decide what you want, plan your points, write the letter." } },
            core: { hint: "Form, purpose, audience and tone, in that order; then ideas; then words on the page." },
            stretch: { extend: "Explain what goes wrong if a pupil brainstorms events before deciding the audience." }
          },
          explain: "Explain why the form must be decided before anything else.",
          why: "Form, purpose, audience and tone come from the prompt; then you gather ideas; only then do you write the opening." },
        { title: "Writing practice: the first paragraph",
          contexts: [
            { label: "A place you have visited", q: "Writing practice (paragraph). Write the first paragraph of a review of a place you have visited (any place counts). Decide your audience first. Use one of the four openings: a rhetorical question, setting the scene, a triple, or an appeal to the audience.",
              why: "Drop the reader into the place with the scene-setting opening, or ask them a question only a visitor could answer. Give one fact (where or when) so the hook also informs." },
            { label: "A product you have used", q: "Writing practice (paragraph). Write the first paragraph of a review of a product you have used, such as a game, a gadget or a pair of trainers. Decide your audience first. Use one of the four openings: a rhetorical question, setting the scene, a triple, or an appeal to the audience.",
              why: "A triple of what the product promised works well, or an appeal to the reader who is thinking of buying it. Say what the product is and who it is for before the paragraph ends." }
          ],
          task: { kind: "written", q: "Writing practice (paragraph). Write the first paragraph of a review of an interesting or exciting event you attended recently (any event counts, even a family dinner). Decide your audience first. Use one of the four openings: a rhetorical question, setting the scene, a triple, or an appeal to the audience.",
            marks: 8,
            criteria: [
              "I open with one of the four techniques, and I could name which one.",
              "My first paragraph tells the reader what the event was and when it happened.",
              "I write something that directly appeals to my chosen audience.",
              "I inform my audience of something they would want to know.",
              "I give the reader a hint of my opinion."
            ],
            model: "Picture a hill so windy that the ice-cream van needs a handbrake. That was Marsh Hill last Sunday, when the annual kite festival returned for its twelfth year, and our family went along expecting a quiet picnic. We did not get one." },
          levels: {
            support: { steps: ["Write Event, Purpose, Audience, Tone on four lines and fill them in.", "Choose one opening stem: ‘Have you ever…?’, ‘Picture this:’, three items and a colon, or ‘If you think…, think again.’", "Sentence 2: say what the event was and when.", "Sentence 3: a hint of your opinion, without giving the judgement away."],
              example: { q: "Write a first paragraph for a review of a school sports day, for parents, using a rhetorical question.", steps: ["Question that parents would answer in their heads.", "Then what and when.", "Then a hint of opinion."], answer: "Have you ever cheered so loudly for an egg-and-spoon race that you lost your voice? Sports day arrived last Friday, in a heatwave, and by the second race every parent on the field had. It was, against the odds, a brilliant afternoon." } },
            core: { hint: "The hook is one sentence. The rest of the paragraph must tell the reader what and when." },
            stretch: { extend: "Write the same first paragraph twice, with two different openings, and decide which better suits your audience. Say why." }
          },
          explain: "Say which opening technique you chose and why it suits your audience.",
          why: "A strong first paragraph hooks with one of the four techniques, then informs the reader and hints at the opinion to come." }
      ]
    },

    /* ───────────────────────── 4 ───────────────────────── */
    { key: "review-structure", n: 4,
      title: "Structuring and crafting a full review",
      lead: "You will plan a review in five parts, understand how it is marked, and bring the experience to life with sensory language and show, don’t tell.",
      covers: [5, 6, 8],
      pretext: {
        words: [
          { word: "structure", means: "the order of the parts of your writing", sentence: "A review has a standard structure of five parts." },
          { word: "description", means: "the part that gives key facts and details", sentence: "The description tells the reader when and where it happened." },
          { word: "analysis", means: "weighing up the good and the bad", sentence: "Your analysis should be balanced." },
          { word: "recommendation", means: "your advice: should the reader go, or not", sentence: "End with a clear recommendation and a reason." },
          { word: "sensory", means: "to do with the five senses", sentence: "Sensory language helps the reader see, hear and smell the event." }
        ],
        passage: [
          "A review has five parts.",
          "The introduction sets the scene and the tone.",
          "The description gives key facts and details your audience wants.",
          "The personal experience part brings the event to life.",
          "Did the event match what you expected?",
          "The analysis weighs up the good and the bad.",
          "Give a balanced opinion.",
          "The conclusion says whether you recommend it, and why.",
          "Your review is marked out of forty.",
          "Twenty-four marks are for what you write and how you organise it.",
          "Sixteen marks are for spelling, punctuation and sentences.",
          "Show your feelings through details instead of just naming them.",
          "Use the five senses to put the reader beside you."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "ترتيب أجزاء كتابتك (structure)",
            "الجزء الذي يعطي الحقائق والتفاصيل الأساسية (description)",
            "الموازنة بين الجيد والسيّئ (analysis)",
            "نصيحتك: هل ينبغي للقارئ أن يذهب أم لا (recommendation)",
            "ما يتعلّق بالحواس الخمس (sensory)"
          ],
          "passage": [
            "المراجعة لها خمسة أجزاء.",
            "المقدّمة ترسم المشهد والنغمة.",
            "الوصف (description) يعطي الحقائق والتفاصيل الأساسية التي يريدها جمهورك.",
            "جزء التجربة الشخصية يُحيي الحدث.",
            "هل كان الحدث مثل ما توقّعته؟",
            "التحليل (analysis) يوازن بين الجيد والسيّئ.",
            "أعطِ رأياً متوازناً.",
            "الخاتمة تقول هل توصي به أم لا، ولماذا.",
            "تُصحّح مراجعتك من أربعين علامة.",
            "أربع وعشرون علامة لما تكتبه وكيف تنظّمه.",
            "وستّ عشرة علامة للإملاء وعلامات الترقيم والجمل.",
            "أظهر مشاعرك من خلال التفاصيل بدلاً من مجرّد تسميتها.",
            "استعمل الحواس الخمس لتضع القارئ بجانبك."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "kolejność części twojego tekstu (structure)",
            "część, która podaje kluczowe fakty i szczegóły (description)",
            "ważenie tego, co dobre i co złe (analysis)",
            "twoja rada: czy czytelnik powinien iść, czy nie (recommendation)",
            "związany z pięcioma zmysłami (sensory)"
          ],
          "passage": [
            "Recenzja ma pięć części.",
            "Wstęp nakreśla scenę i ton.",
            "Opis (description) podaje kluczowe fakty i szczegóły, których chcą twoi odbiorcy.",
            "Część o osobistym doświadczeniu ożywia wydarzenie.",
            "Czy wydarzenie było takie, jak się spodziewałeś?",
            "Analiza (analysis) waży to, co dobre i co złe.",
            "Podaj wyważoną opinię.",
            "Zakończenie mówi, czy polecasz to wydarzenie i dlaczego.",
            "Twoja recenzja jest oceniana na czterdzieści punktów.",
            "Dwadzieścia cztery punkty są za to, co piszesz i jak to porządkujesz.",
            "Szesnaście punktów jest za ortografię, interpunkcję i budowę zdań.",
            "Pokazuj swoje uczucia przez szczegóły, zamiast je tylko nazywać.",
            "Używaj pięciu zmysłów, żeby postawić czytelnika obok siebie."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a ordem das partes do seu texto (structure, estrutura)",
            "a parte que dá os factos/fatos e detalhes principais (description, descrição)",
            "pesar o que foi bom e o que foi mau (analysis, análise)",
            "o seu conselho: o leitor deve ir, ou não (recommendation, recomendação)",
            "relacionado com os cinco sentidos (sensory, sensorial)"
          ],
          "passage": [
            "Uma crítica tem cinco partes.",
            "A introdução apresenta a cena e o tom.",
            "A descrição dá os factos/fatos e detalhes principais que o seu público quer.",
            "A parte da experiência pessoal dá vida ao acontecimento.",
            "O acontecimento foi como você esperava?",
            "A análise pesa o que foi bom e o que foi mau.",
            "Dê uma opinião equilibrada.",
            "A conclusão diz se você o recomenda, e por quê.",
            "A sua crítica é avaliada de zero a quarenta.",
            "Vinte e quatro pontos são para o que você escreve e como organiza.",
            "Dezesseis/Dezasseis pontos são para a ortografia, a pontuação e as frases.",
            "Mostre os seus sentimentos através de detalhes, em vez de só os nomear.",
            "Use os cinco sentidos para pôr o leitor ao seu lado."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "sida qaybaha qoraalkaagu u kala horreeyaan (structure)",
            "qaybta bixisa xaqiiqooyinka iyo faahfaahinta muhiimka ah (description)",
            "miisaamidda wanaagga iyo xumaanta (analysis)",
            "taladaada: akhristuhu ma tagaa, mise maya (recommendation)",
            "la xiriira shanta dareen (sensory)"
          ],
          "passage": [
            "Dib-u-eegis wuxuu leeyahay shan qaybood.",
            "Hordhacu wuxuu sawiraa goobta iyo codka.",
            "Sharraxaaddu (description) waxay bixisaa xaqiiqooyinka iyo faahfaahinta muhiimka ah ee dadkaagu rabaan.",
            "Qaybta waayo-aragnimada shakhsi ahaaneed dhacdada ayay nooleysaa.",
            "Dhacdadu ma la mid noqotay waxa aad filaysay?",
            "Falanqayntu (analysis) waxay miisaantaa wanaagga iyo xumaanta.",
            "Bixi ra'yi dheelitiran.",
            "Gabagabadu waxay sheegtaa inaad ku talinayso iyo in kale, iyo sababta.",
            "Dib-u-eegiskaaga afartan dhibcood ayaa laga bixiyaa.",
            "Afar iyo labaatan dhibcood waxay u yihiin waxa aad qorto iyo sida aad u habayso.",
            "Lix iyo toban dhibcood waxay u yihiin higgaadda, calaamadaynta iyo weedhaha.",
            "Dareenkaaga faahfaahin ku muuji halkii aad magacaabi lahayd keliya.",
            "Isticmaal shanta dareen si akhristaha agtaada u keento."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "порядок частин вашого тексту (structure)",
            "частина, яка дає головні факти та деталі (description)",
            "зважування доброго і поганого (analysis)",
            "ваша порада: чи варто читачеві йти, чи ні (recommendation)",
            "пов’язаний із п’ятьма чуттями (sensory)"
          ],
          "passage": [
            "Рецензія має п’ять частин.",
            "Вступ задає сцену і тон.",
            "Опис (description) дає головні факти та деталі, яких хоче ваша аудиторія.",
            "Частина про особистий досвід оживляє подію.",
            "Чи відповідала подія тому, чого ви очікували?",
            "Аналіз (analysis) зважує добре і погане.",
            "Висловіть збалансовану думку.",
            "Висновок говорить, чи рекомендуєте ви це, і чому.",
            "Вашу рецензію оцінюють із сорока балів.",
            "Двадцять чотири бали — за те, що ви пишете і як ви це організуєте.",
            "Шістнадцять балів — за правопис, пунктуацію та речення.",
            "Показуйте свої почуття через деталі, а не просто називайте їх.",
            "Використовуйте п’ять чуттів, щоб поставити читача поруч із собою."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "آپ کی تحریر کے حصوں کی ترتیب (structure)",
            "وہ حصہ جو اہم حقائق اور تفصیلیں دیتا ہے (description)",
            "اچھے اور برے کو تولنا (analysis)",
            "آپ کا مشورہ: قاری جائے یا نہ جائے (recommendation)",
            "پانچ حسوں سے متعلق (sensory)"
          ],
          "passage": [
            "تبصرے کے پانچ حصے ہوتے ہیں۔",
            "تعارف منظر اور لہجہ قائم کرتا ہے۔",
            "بیان (description) وہ اہم حقائق اور تفصیلیں دیتا ہے جو آپ کے قاری چاہتے ہیں۔",
            "ذاتی تجربے کا حصہ تقریب میں جان ڈال دیتا ہے۔",
            "کیا تقریب آپ کی توقع کے مطابق تھی؟",
            "تجزیہ (analysis) اچھے اور برے کو تولتا ہے۔",
            "متوازن رائے دیں۔",
            "نتیجہ بتاتا ہے کہ آپ اس کی سفارش کرتے ہیں یا نہیں، اور کیوں۔",
            "آپ کے تبصرے کے نمبر چالیس میں سے دیے جاتے ہیں۔",
            "چوبیس نمبر اس بات کے ہیں کہ آپ کیا لکھتے ہیں اور اسے کیسے ترتیب دیتے ہیں۔",
            "سولہ نمبر املا، رموزِ اوقاف اور جملوں کے ہیں۔",
            "اپنے جذبات کو صرف نام لینے کے بجائے تفصیلوں کے ذریعے دکھائیں۔",
            "پانچ حسوں کا استعمال کر کے قاری کو اپنے ساتھ کھڑا کر دیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "Five parts, in a standard order",
          paragraphs: [
            "Your teachers give you a standard structure. Introduction: set the scene and set the tone. Description: describe the relevant details your audience would want to know, with key facts and information. Personal experience: reflect on your experience; you were there, so it is up to you to bring it to life, and ask whether expectation met reality. Analysis and judgement: analyse the good and the bad and give a balanced opinion. Conclusion: say whether you recommend it overall, give a final reason based on your analysis, and if relevant say where and when.",
            "Sometimes the parts come in a different order, but all five should be there. Add a heading and a subheading at the top, draw a wide margin for notes, plan for five minutes, and then write. A full review should fill about a page and a half."
          ],
          worked: { q: "Fill the five-part planning grid for ‘Up, Up and Nearly Away’.",
            steps: ["Introduction: the windy hill and the handbrake joke set a light tone; a family expecting a picnic.", "Description: hours, free entry, parking cost, two hundred kites, the dragon, the stalls and the tent.", "Personal experience: the promise to a daughter, nine seconds of flight, the man eating chips, the volunteer and the second attempt.", "Analysis and judgement: toilets and loudspeakers were poor, other visitors grumbled about the car park, but the volunteers and the view were excellent.", "Conclusion: yes, with wellies; a free family day out; back next May; check the council website."],
            answer: "Each of the five paragraphs does one job. The plan is the review in miniature; writing it is filling in the detail." },
          tip: "Plan in the margin: I, D, P, A, C. If a paragraph does not fit a letter, ask what it is for." },
        { heading: "How your review is marked",
          paragraphs: [
            "Your review is marked out of 40, the same as the writing question on GCSE Language Paper 2. AO5 is worth 24 marks and rewards content and organisation: what you have written and how you have organised it. That means a heading and subheading, facts and statistics, personal opinion and other people’s opinions, well-chosen adjectives, an appropriate tone for your audience, a clear introduction and conclusion, and paragraphs in a sensible order.",
            "AO6 is worth 16 marks and rewards technical accuracy: how correctly you have written. That means accurate spelling, varied and correct punctuation, a variety of sentence structures, and ambitious vocabulary used properly. You are being marked on how you write as well as what you write, so leave time to check."
          ],
          tip: "40 marks: 24 for content and organisation (AO5), 16 for technical accuracy (AO6). The split is the same at GCSE." },
        { heading: "Bring it to life: show, don’t tell",
          paragraphs: [
            "A good review entertains as well as informs, and the difference is usually craft. Compare your draft with a professional model and you will notice two things: the professional describes through sensory language, and they focus on fewer moments in more detail. Recall some highlights and describe them in a lively way, rather than listing everything that happened.",
            "Think of it as show, don’t tell. Your opinion and your feelings should be clear from the way you describe the event, not only from the word ‘good’ or ‘bad’. ‘I was disappointed by the café’ tells. ‘The café’s only sandwich had curled at the edges, and the tea was the colour of a puddle’ shows, and the reader feels the disappointment with you.",
            "Your toolkit from earlier units still applies: MASOAPS for description (metaphor, adjectives and adverbs, simile, onomatopoeia, alliteration, personification, sensory language) and DAFOREST for persuasion. Use them to create a positive or negative tone on purpose. But be careful: a review must still carry its basic information and facts."
          ],
          quote: { text: "I had promised my daughter that our kite would fly. It did, for about nine seconds, before it nose-dived into a man eating chips. He was very kind about it.",
            source: "‘Up, Up and Nearly Away’, paragraph 3 — original model review written for Ad Astra" },
          tip: "Pick two moments and give each five senses. That beats ten moments with none." }
      ],
      gate: [
        { kind: "mcq", q: "How many marks is a full review (the writing task) worth in total?", options: ["16", "24", "40", "80"], answer: 2,
          feedback: [
            "Sixteen is only the technical-accuracy part (AO6). Add the 24 marks for content and organisation.",
            "Twenty-four is only the content-and-organisation part (AO5). Add the 16 marks for technical accuracy.",
            "",
            "Eighty is the whole of a GCSE Language paper. The writing task is half of it: 40 marks."
          ],
          why: "The writing task is worth 40 marks: 24 for content and organisation (AO5) and 16 for technical accuracy (AO6)." },
        { kind: "gap", q: "In the five-part structure, the ___ says whether you recommend the event, and gives a final reason.", answer: "conclusion", options: ["conclusion", "introduction", "description"],
          feedback: {
            "introduction": "The introduction sets the scene and the tone. Your recommendation needs your analysis first, so it comes at the end, in the conclusion.",
            "description": "The description gives key facts and details. The recommendation is a judgement, and judgements belong in the conclusion."
          },
          why: "The conclusion gives the overall recommendation and the final reason, based on the analysis before it." },
        { kind: "mcq", q: "AO5 is worth 24 marks. What does it reward?", options: ["What you have written and how you have organised it", "Spelling and punctuation only", "Neat handwriting", "Writing as many pages as possible"], answer: 0,
          feedback: [
            "",
            "Spelling and punctuation are technical accuracy, which is AO6 (16 marks). AO5 is about content and organisation.",
            "Handwriting is not assessed as long as it can be read. AO5 rewards your content and organisation: ideas, tone for the audience and a clear structure.",
            "Length earns nothing by itself. AO5 rewards content that suits the audience and an organised structure."
          ],
          why: "AO5 is content and organisation: ideas, tone for the audience, and a clear structure with introduction and conclusion." }
      ],
      modules: [
        { title: "The five parts in order",
          task: { kind: "order", q: "Put the five parts of a review in the standard order your teachers give you.",
            items: ["Introduction: set the scene and the tone", "Description: key facts and details the audience wants", "Personal experience: bring the event to life; did expectation meet reality?", "Analysis and judgement: weigh the good and the bad", "Conclusion: recommend or not, with a final reason"] },
          levels: {
            support: { steps: ["The scene is set before anything else.", "Facts come before feelings: the reader needs to know what it was before how it felt.", "You cannot analyse an experience you have not described yet.", "The recommendation is last because it depends on the analysis."],
              example: { q: "Order these four parts of a science write-up: results, method, conclusion, aim.", steps: ["Start with what you set out to do.", "Then how, then what happened.", "Conclude last."], answer: "Aim, method, results, conclusion." } },
            core: { hint: "I, D, P, A, C. Scene, facts, feelings, weighing up, verdict." },
            stretch: { extend: "Your teachers say the parts can sometimes come in a different order. Suggest one swap that could work and explain the risk." }
          },
          explain: "Explain why the analysis must come before the conclusion.",
          why: "Introduction, description, personal experience, analysis and judgement, conclusion: scene, facts, feelings, weighing up, verdict." },
        { title: "Which part is this?",
          task: { kind: "match", q: "Match each extract from ‘Up, Up and Nearly Away’ to the part of the review it belongs to.",
            pairs: [
              ["Introduction", "“Picture a hill so windy that the ice-cream van needs a handbrake.”"],
              ["Description", "“The festival runs from ten until four and entry is free”"],
              ["Personal experience", "“I had promised my daughter that our kite would fly.”"],
              ["Analysis and judgement", "“Not everything soared. The queue for the toilets was long”"],
              ["Conclusion", "“Would I go again? Yes, with wellies and a stronger kite.”"]
            ] },
          levels: {
            support: { steps: ["The introduction paints the scene; look for the place and the weather.", "The description gives facts you could check: times, prices.", "Personal experience is told with ‘I’ and ‘my’.", "Analysis weighs the bad against the good: ‘Not everything…’.", "The conclusion answers ‘would I go again?’."],
              example: { q: "Which part of a review is this: ‘Tickets cost eight pounds and the show lasts ninety minutes.’?", steps: ["Could you check it? Yes: a price and a length.", "Facts belong in the description."], answer: "The description." } },
            core: { hint: "Look for ‘I had promised’ (experience), a price (description) and a question (conclusion)." },
            stretch: { extend: "Find a second sentence in the review for each part, to prove each paragraph does one job." }
          },
          explain: "Say which clue words told you a sentence was personal experience rather than description.",
          why: "Scene, facts, ‘I’, weighing up, verdict: each paragraph of the review does one of the five jobs." },
        { title: "Writing practice: a full review",
          contexts: [
            { label: "An event you attended", q: "Writing practice (full piece). Write a full review of an interesting or exciting event you attended recently, for a magazine read by people your age. Use the five-part structure, with a heading and a subheading, and aim for about a page and a half.",
              why: "Set the scene on the day itself, give the facts a reader would need to go, bring two moments to life with the senses, weigh the good against the bad with another person’s view, and end with a recommendation and a reason." },
            { label: "A place you have visited", q: "Writing practice (full piece). Write a full review of a place you have visited, for a magazine read by people your age. Use the five-part structure, with a heading and a subheading, and aim for about a page and a half.",
              why: "Open with the first thing you noticed, give the facts (where, when, cost), describe the moment expectation met or missed reality, balance the good and the bad, and finish by telling the reader whether to go." }
          ],
          task: { kind: "written", q: "Writing practice (full piece). Write a full review of a product, a film, a book, a TV show or a computer game, for a magazine read by people your age. Use the five-part structure, with a heading and a subheading, and aim for about a page and a half.",
            marks: 40,
            criteria: [
              "I have a heading and a subheading that give my angle.",
              "My review has all five parts: introduction, description, personal experience, analysis and judgement, conclusion.",
              "My description includes facts a reader would want (what, where, when, cost).",
              "I bring at least two moments to life with sensory language, showing rather than telling.",
              "My analysis is balanced and includes someone else’s opinion as well as mine.",
              "My conclusion gives a clear recommendation and a final reason.",
              "My tone suits the audience, and I use varied punctuation and sentence structures."
            ],
            model: "Up, Up and Nearly Away: a day at the Marsh Hill Kite Festival\n\nPicture a hill so windy that the ice-cream van needs a handbrake. That was Marsh Hill last Sunday, when the annual kite festival returned for its twelfth year, and our family went along expecting a quiet picnic. We did not get one.\n\nThe festival runs from ten until four and entry is free, though parking in the lower field costs five pounds. More than two hundred kites were registered this year, from supermarket diamonds to a Chinese dragon longer than a bus. Food stalls, a kite-making tent and a first-aid post sit at the bottom of the slope.\n\nI had promised my daughter that our kite would fly. It did, for about nine seconds, before it nose-dived into a man eating chips. He was very kind about it. Later, in the kite-making tent, a volunteer called Priya showed us how to balance a frame, and our second attempt stayed up for the whole afternoon.\n\nNot everything soared. The queue for the toilets was long, and the loudspeaker announcements were impossible to hear over the wind. Some visitors near us grumbled that the car park was a swamp. Even so, the volunteers were patient with every tangled line, and the sight of two hundred kites against a grey sky is hard to beat.\n\nWould I go again? Yes, with wellies and a stronger kite. Marsh Hill is a free day out that gives families something to do together, which is rarer than it should be. The festival returns next May; check the town council website for the date." },
          levels: {
            support: { steps: ["Plan for five minutes in a wide margin: I, D, P, A, C, one line each.", "Write the heading and subheading last, once you know your angle.", "Description: list four facts before you write the paragraph.", "Personal experience: pick two moments and give each at least two senses.", "Analysis: one good, one bad, one other person’s view. Conclusion: recommend, and say why."],
              example: { q: "Write the analysis paragraph of a review of a school play.", steps: ["Start with what did not work.", "Add another person’s view.", "Turn to what did work, with ‘Even so’."], answer: "Not every scene landed. The first half dragged, and the boy next to me spent it counting ceiling tiles. Even so, the final song had the whole hall on its feet, and the lighting in the storm scene was better than some theatres I have paid to sit in." } },
            core: { hint: "Each paragraph does one job. If a paragraph is doing two, split it." },
            stretch: { extend: "Swap the order of two parts (for example, start with your personal experience) and explain what the reader gains and loses." }
          },
          explain: "Say which of the five parts you found hardest to fill, and what you did about it.",
          why: "A full review has a heading, five parts in a sensible order, facts, two moments shown through the senses, a balanced analysis with another view, and a recommendation with a reason." }
      ]
    },

    /* ───────────────────────── 5 ───────────────────────── */
    { key: "opinion-article", n: 5,
      title: "The opinion article: building an argument",
      lead: "You will tell an opinion article from a review, open with a hook, a topic and an opinion, and build an argument in eight parts with a counter-argument and two kinds of evidence.",
      covers: [7, 9, 10],
      pretext: {
        words: [
          { word: "argument", means: "a reason that supports your opinion", sentence: "Her first argument was that tired pupils learn less." },
          { word: "evidence", means: "facts or experiences that back up a point", sentence: "Give evidence for every argument you make." },
          { word: "counter-argument", means: "the opposite view, which you answer", sentence: "A good writer includes a counter-argument and then answers it." },
          { word: "expert", means: "someone who knows a lot about a subject", sentence: "A nurse is an expert on sleep and health." },
          { word: "column", means: "a regular opinion article in a newspaper", sentence: "Her column appears in the paper every Sunday." }
        ],
        passage: [
          "An opinion article is different from a review.",
          "A review helps the reader decide about an event.",
          "An opinion article argues a point of view.",
          "Its readers want to know what other people think.",
          "The opening does three things.",
          "It hooks the reader.",
          "It says what the topic is.",
          "It says what the writer thinks.",
          "Then the writer gives arguments, one at a time.",
          "Each argument has evidence: personal or expert.",
          "The writer also gives the opposite view, and answers it.",
          "The conclusion returns to the main opinion.",
          "Humour can make readers like the writer and agree with them."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "سبب يدعم رأيك (argument)",
            "حقائق أو تجارب تؤيّد فكرة (evidence)",
            "الرأي المعاكس، الذي تردّ عليه (counter-argument)",
            "شخص يعرف الكثير عن موضوع ما (expert)",
            "مقال رأي منتظم في صحيفة (column)"
          ],
          "passage": [
            "مقال الرأي مختلف عن المراجعة.",
            "المراجعة تساعد القارئ على أن يقرّر بشأن حدث.",
            "مقال الرأي يدافع عن وجهة نظر.",
            "قرّاؤه يريدون أن يعرفوا ما يفكّر فيه الآخرون.",
            "الافتتاحية تفعل ثلاثة أشياء.",
            "تجذب القارئ.",
            "وتقول ما هو الموضوع.",
            "وتقول ما يفكّر فيه الكاتب.",
            "ثم يقدّم الكاتب حججه (arguments)، واحدة بعد الأخرى.",
            "كل حجّة لها دليل (evidence): شخصي أو من خبير.",
            "ويعرض الكاتب أيضاً الرأي المعاكس، ويردّ عليه.",
            "الخاتمة تعود إلى الرأي الرئيسي.",
            "يمكن للطرافة أن تجعل القرّاء يحبّون الكاتب ويوافقونه."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "powód, który wspiera twoją opinię (argument)",
            "fakty lub doświadczenia, które popierają jakąś myśl (evidence)",
            "przeciwny pogląd, na który odpowiadasz (counter-argument)",
            "ktoś, kto wie dużo o jakimś temacie (expert)",
            "stały artykuł z opinią w gazecie (column)"
          ],
          "passage": [
            "Artykuł z opinią (opinion article) różni się od recenzji.",
            "Recenzja pomaga czytelnikowi zdecydować w sprawie wydarzenia.",
            "Artykuł z opinią broni jakiegoś punktu widzenia.",
            "Jego czytelnicy chcą wiedzieć, co myślą inni ludzie.",
            "Początek robi trzy rzeczy.",
            "Chwyta czytelnika.",
            "Mówi, jaki jest temat.",
            "Mówi, co myśli autor.",
            "Potem autor podaje argumenty, jeden po drugim.",
            "Każdy argument ma dowody (evidence): osobiste albo eksperckie.",
            "Autor podaje też przeciwny pogląd i odpowiada na niego.",
            "Zakończenie wraca do głównej opinii.",
            "Humor może sprawić, że czytelnicy polubią autora i zgodzą się z nim."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma razão que apoia a sua opinião (argument, argumento)",
            "factos/fatos ou experiências que sustentam um ponto (evidence, prova)",
            "a opinião contrária, à qual você responde (counter-argument, contra-argumento)",
            "alguém que sabe muito sobre um assunto (expert, especialista)",
            "um artigo de opinião regular num jornal (column, coluna)"
          ],
          "passage": [
            "Um artigo de opinião é diferente de uma crítica.",
            "Uma crítica ajuda o leitor a decidir sobre um acontecimento.",
            "Um artigo de opinião defende um ponto de vista.",
            "Os seus leitores querem saber o que as outras pessoas pensam.",
            "A abertura faz três coisas.",
            "Agarra o leitor.",
            "Diz qual é o tema.",
            "Diz o que o escritor pensa.",
            "Depois o escritor dá argumentos, um de cada vez.",
            "Cada argumento tem provas: pessoais ou de especialistas.",
            "O escritor também apresenta a opinião contrária, e responde a ela.",
            "A conclusão volta à opinião principal.",
            "O humor pode fazer os leitores gostarem do escritor e concordarem com ele."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "sabab taageerta ra'yigaaga (argument)",
            "xaqiiqooyin ama waayo-aragnimo hadal taageera (evidence)",
            "aragtida lidka ah, oo aad ka jawaabto (counter-argument)",
            "qof wax badan ka yaqaan mawduuc (expert)",
            "maqaal ra'yi oo si joogto ah wargeys ka soo baxa (column)"
          ],
          "passage": [
            "Maqaal ra'yi (opinion article) wuxuu ka duwan yahay dib-u-eegis.",
            "Dib-u-eegis akhristaha wuxuu ka caawiyaa inuu dhacdo go'aan ka gaaro.",
            "Maqaal ra'yi aragti ayuu ku doodaa.",
            "Akhristayaashiisu waxay rabaan inay ogaadaan waxa dadka kale ka fikirayaan.",
            "Bilowgu saddex wax ayuu sameeyaa.",
            "Akhristaha ayuu qabsadaa (hook).",
            "Wuxuu sheegaa waxa mawduucu yahay.",
            "Wuxuu sheegaa waxa qoraagu ka fikirayo.",
            "Kadibna qoraagu doodo (arguments) ayuu bixiyaa, mid mid.",
            "Dood kasta waxay leedahay caddayn (evidence): shakhsi ama khabiir.",
            "Qoraagu sidoo kale wuxuu bixiyaa aragtida lidka ah, wuuna ka jawaabaa.",
            "Gabagabadu waxay ku noqotaa ra'yiga ugu weyn.",
            "Kaftan wuxuu akhristayaasha ka dhigi karaa inay qoraaga jeclaadaan oo ay la qabaan."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "причина, яка підтримує вашу думку (argument)",
            "факти або досвід, які підкріплюють думку (evidence)",
            "протилежний погляд, на який ви відповідаєте (counter-argument)",
            "той, хто багато знає про предмет (expert)",
            "регулярна стаття-думка в газеті (column)"
          ],
          "passage": [
            "Стаття-думка (opinion article) відрізняється від рецензії.",
            "Рецензія допомагає читачеві вирішити щодо події.",
            "Стаття-думка доводить певну точку зору.",
            "Її читачі хочуть знати, що думають інші люди.",
            "Початок робить три речі.",
            "Він захоплює читача.",
            "Він говорить, яка тема.",
            "Він говорить, що думає автор.",
            "Потім автор наводить аргументи (arguments), один за одним.",
            "Кожний аргумент має докази (evidence): особисті або від експертів.",
            "Автор також наводить протилежний погляд і відповідає на нього.",
            "Висновок повертається до головної думки.",
            "Гумор може зробити так, що читачі полюблять автора й погодяться з ним."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایک وجہ جو آپ کی رائے کو سہارا دیتی ہے (argument)",
            "حقائق یا تجربے جو کسی نکتے کی تائید کرتے ہیں (evidence)",
            "الٹی رائے، جس کا آپ جواب دیتے ہیں (counter-argument)",
            "وہ شخص جو کسی موضوع کے بارے میں بہت جانتا ہے (expert)",
            "اخبار میں باقاعدگی سے چھپنے والا رائے کا مضمون (column)"
          ],
          "passage": [
            "رائے کا مضمون (opinion article) تبصرے سے الگ ہوتا ہے۔",
            "تبصرہ قاری کو کسی تقریب کے بارے میں فیصلہ کرنے میں مدد دیتا ہے۔",
            "رائے کا مضمون ایک نقطۂ نظر کی دلیل دیتا ہے۔",
            "اس کے قاری جاننا چاہتے ہیں کہ دوسرے لوگ کیا سوچتے ہیں۔",
            "شروعات تین کام کرتی ہے۔",
            "یہ قاری کو پکڑتی ہے۔",
            "یہ بتاتی ہے کہ موضوع کیا ہے۔",
            "یہ بتاتی ہے کہ مصنف کیا سوچتا ہے۔",
            "پھر مصنف ایک ایک کر کے دلیلیں دیتا ہے۔",
            "ہر دلیل کے ساتھ شہادت (evidence) ہوتی ہے: ذاتی یا ماہر کی۔",
            "مصنف الٹی رائے بھی دیتا ہے، اور اس کا جواب دیتا ہے۔",
            "نتیجہ مرکزی رائے پر واپس آتا ہے۔",
            "مزاح قاریوں کو مصنف سے خوش کر سکتا ہے اور اس سے متفق کر سکتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "Review or opinion article?",
          paragraphs: [
            "Both are written to be read, both inform, and both use personal experience. The difference is purpose and audience. A review informs and helps people make a decision; its readers are already interested in the topic. An opinion article informs and then persuades or argues; its readers are people who are interested in what others think. A review has more facts and details of experience; an opinion article has more opinions, and uses experience to persuade.",
            "Take the task ‘Write an article for a school newspaper giving your opinion on whether the school day should start later.’ Form: a newspaper article. Purpose: to persuade readers that the school day should (or should not) start later. Audience: parents, teachers and fellow pupils. Three answers, and you are ready to think of reasons."
          ],
          tip: "If your plan is full of facts about one event, it is a review. If it is full of reasons, it is an opinion article." },
        { heading: "The opening: hook, topic, opinion",
          paragraphs: [
            "The opening of an opinion piece must do three things: hook the reader, outline the topic you are giving an opinion on, and outline what your opinion is. The four openings from your review work still apply, and the best openings also appeal to the audience, play with words for a humorous tone, and hint at the themes to come.",
            "Read the opening of ‘Let Them Sleep’, an original opinion article written for Ad Astra for a school newspaper. The rhetorical question is the hook; the second and third sentences give the topic; the last sentence is the opinion, stated plainly."
          ],
          quote: { text: "Let Them Sleep: why the school day should start at ten Have you ever tried to explain fractions to a zombie? Our teachers do it every morning. Across the country, teenagers are dragged into classrooms before their brains have switched on, and then we are told off for yawning. It is time the school day started at ten.",
            source: "‘Let Them Sleep’, headline and paragraph 1 — original model article written for Ad Astra" },
          tip: "Underline the three jobs in your own opening: hook, topic, opinion. If one is missing, the reader does not know what you are arguing." },
        { heading: "Eight parts, two kinds of evidence, one counter-argument",
          paragraphs: [
            "Your teachers give you a planning grid with eight headings: introduction; argument (first point); evidence, personal; argument (second point); counter-argument; evidence, expert; argument (third point); conclusion. Personal evidence is your own experience or an anecdote. Expert evidence is what someone who knows the subject has found or said. The counter-argument is the view of someone who disagrees, raised so that you can answer it.",
            "Professional columnists use the same shape, often with humour. Making light of your own experience makes you seem approachable, more like the reader; a shared joke feels conspiratorial, as if you and the reader are on the same side; and a funny image can make a point without the reader feeling told off. Humour is a persuasive tool, not decoration.",
            "Here are the three arguments of ‘Let Them Sleep’. Find the personal evidence, the counter-argument and the expert evidence. The article then closes with a short conclusion, “Nobody is asking for a shorter day, just a later one.”, and its last line, “Let it sleep a little longer.”, returns to the headline."
          ],
          quote: { text: "First, teenage bodies are built differently. My alarm goes off at half past six, but I rarely fall asleep before midnight, however hard I try. Last term I kept a sleep diary for a science project: on school nights I averaged six hours. On Saturdays, with no alarm, I slept nine. That is not laziness. That is biology. Second, a later start would improve results, not harm them. Some will say that pupils would simply stay up later and gain nothing. Yet when I asked our school nurse, she explained that the teenage body clock shifts later during puberty, so most of us cannot fall asleep early even when we want to. A rested class learns more in five hours than a tired one learns in six. Third, think of the mornings themselves. No more shouting up the stairs, no more breakfast eaten in the car, no more detentions for lateness that nobody meant. Parents would gain a calmer house; teachers would gain pupils who can actually hear them.",
            source: "‘Let Them Sleep’, paragraphs 2–4 — original model article written for Ad Astra" },
          tip: "Plan with the eight headings in the margin. The counter-argument is not optional: it is where the reader decides to trust you." }
      ],
      gate: [
        { kind: "mcq", q: "What must the opening of an opinion article include?", options: ["A hook, the topic and the writer’s opinion", "A summary of the whole plot", "A star rating out of five", "A list of facts with no opinion"], answer: 0,
          feedback: [
            "",
            "A plot summary belongs in a review of a story. An opinion article has no plot; it has a topic and a point of view.",
            "A star rating is a convention of reviews. An opinion article argues; it does not score.",
            "Facts alone leave the reader asking ‘so what do you think?’. The opening must state the opinion."
          ],
          why: "The opening hooks the reader, outlines the topic and outlines the writer’s opinion." },
        { kind: "gap", q: "The ___ is the opposite view, which you raise so that you can answer it.", answer: "counter-argument", options: ["counter-argument", "anecdote", "headline"],
          feedback: {
            "anecdote": "An anecdote is a short personal story used as evidence. The opposite view that you raise and answer is the counter-argument.",
            "headline": "The headline is the title that gives your angle. The opposing view inside the article is the counter-argument."
          },
          why: "A counter-argument gives the other side so that you can answer it and strengthen your own case." },
        { kind: "mcq", q: "In ‘Let Them Sleep’, what kind of evidence is “Last term I kept a sleep diary for a science project”?", options: ["Personal evidence", "Expert evidence", "A counter-argument", "A headline"], answer: 0,
          feedback: [
            "",
            "Expert evidence comes from someone who knows the subject, such as the school nurse. A sleep diary the writer kept is their own experience: personal evidence.",
            "A counter-argument is the opposing view, such as the claim that pupils would simply stay up later. The diary supports the writer’s own argument.",
            "The headline is the title at the top. This sentence is inside the first argument, giving evidence for it."
          ],
          why: "The writer’s own sleep diary is personal evidence; the nurse’s explanation later is the expert evidence." }
      ],
      modules: [
        { title: "Build the argument in order",
          task: { kind: "order", q: "Put the eight parts of an opinion article in the order your planning grid gives them.",
            items: ["Introduction", "Argument: first point", "Evidence: personal", "Argument: second point", "Counter-argument", "Evidence: expert", "Argument: third point", "Conclusion"] },
          levels: {
            support: { steps: ["The introduction is always first and the conclusion always last.", "Each argument is followed by something: the first by personal evidence, the second by the counter-argument and expert evidence.", "The third argument stands alone before the conclusion.", "Personal evidence comes before expert evidence."],
              example: { q: "Order these parts of a debate speech: my conclusion, my opening position, the other side’s view and my answer to it, my first reason.", steps: ["Open with your position.", "Give your reason.", "Answer the other side.", "Conclude."], answer: "Opening position, first reason, the other side’s view and my answer, conclusion." } },
            core: { hint: "Three arguments; the first is backed by you, the second is tested by the other side and backed by an expert." },
            stretch: { extend: "Explain why the counter-argument sits in the middle of the article rather than at the very end." }
          },
          explain: "Say why personal evidence comes before expert evidence in this plan.",
          why: "Introduction; first point with personal evidence; second point with the counter-argument and expert evidence; third point; conclusion. Eight parts, one shape." },
        { title: "Name the part",
          task: { kind: "match", q: "Match each extract from ‘Let Them Sleep’ to the part of the article it belongs to.",
            pairs: [
              ["Hook", "“Have you ever tried to explain fractions to a zombie?”"],
              ["Personal evidence", "“Last term I kept a sleep diary for a science project”"],
              ["Counter-argument", "“Some will say that pupils would simply stay up later and gain nothing.”"],
              ["Expert evidence", "“when I asked our school nurse, she explained that the teenage body clock shifts later during puberty”"],
              ["Conclusion", "“Let it sleep a little longer.”"]
            ] },
          levels: {
            support: { steps: ["The hook is the very first sentence and asks a question.", "Personal evidence uses ‘I’ and tells of the writer’s own experience.", "The counter-argument begins with words like ‘Some will say’.", "Expert evidence names someone who knows the subject.", "The conclusion is the last sentence and echoes the headline."],
              example: { q: "In an article about school dinners, which part is ‘Our head cook told me that fruit is thrown away by the crate’?", steps: ["Who is speaking? Someone who knows the kitchen.", "Someone who knows the subject is an expert."], answer: "Expert evidence." } },
            core: { hint: "‘Some will say’ gives the counter-argument away; ‘I kept’ gives the personal evidence away." },
            stretch: { extend: "Find the three arguments in ‘Let Them Sleep’ and write each as a single topic sentence." }
          },
          explain: "Say how you told the expert evidence apart from the personal evidence.",
          why: "The question is the hook; ‘I kept a sleep diary’ is personal; ‘Some will say’ is the counter-argument; the nurse is the expert; the final line is the conclusion." },
        { title: "Writing practice: the opening of an opinion article",
          contexts: [
            { label: "Every pupil should learn an instrument", q: "Writing practice (paragraph). Write the opening paragraph of an opinion article for a school newspaper giving your opinion on whether every pupil should learn a musical instrument. Your opening must hook the reader, outline the topic and state your opinion.",
              why: "A triple of instruments or a scene from a music room makes a strong hook; then name the question and say plainly whether you are for or against." },
            { label: "Mobile phones in school", q: "Writing practice (paragraph). Write the opening paragraph of an opinion article for a school newspaper giving your opinion on whether mobile phones should be allowed in school. Your opening must hook the reader, outline the topic and state your opinion.",
              why: "A rhetorical question that every reader has lived through works well; keep the topic to one sentence and make your opinion the last line." }
          ],
          task: { kind: "written", q: "Writing practice (paragraph). Write the opening paragraph of an opinion article for a school newspaper giving your opinion on whether homework should be scrapped. Your opening must hook the reader, outline the topic and state your opinion.",
            marks: 8,
            criteria: [
              "I open with a hook: a rhetorical question, a scene, a triple or an appeal to the audience.",
              "I make clear what topic I am giving an opinion on.",
              "I state my opinion plainly by the end of the paragraph.",
              "My tone suits a school newspaper read by pupils, parents and teachers.",
              "I give my article a headline that links to my opinion."
            ],
            model: "Homework: the hour nobody asked for\n\nPicture this: it is nine at night, the kitchen table is buried in worksheets, and a tired parent is relearning long division. Homework was meant to help us practise. Instead, it has become a nightly tax on family time, and I believe schools should scrap it for good." },
          levels: {
            support: { steps: ["Write the three jobs in the margin: hook, topic, opinion.", "Hook: choose one of the four openings.", "Topic: one sentence saying what the argument is about.", "Opinion: one sentence beginning ‘I believe’ or ‘It is time’."],
              example: { q: "Write the opening of an article arguing that the school canteen should sell hot food in winter.", steps: ["Hook with a scene or a question.", "Name the topic.", "State the opinion."], answer: "Have you ever eaten a cold sandwich with your coat on? Every January, the canteen asks us to. Pupils deserve a hot meal when the playground is frozen, and it is time the school provided one." } },
            core: { hint: "Three sentences can do all three jobs: question, topic, opinion." },
            stretch: { extend: "Rewrite your opening with a humorous tone and explain how the humour makes the reader more likely to agree with you." }
          },
          explain: "Say which sentence of your opening does which of the three jobs.",
          why: "A strong opening hooks, names the topic and states the opinion, under a headline that shares the writer’s angle." }
      ]
    },

    /* ───────────────────────── 6 ───────────────────────── */
    { key: "persuade-and-imply", n: 6,
      title: "Persuasive techniques, implicit opinion and the other side",
      lead: "You will decode opinions that are implied rather than stated, name the DAFOREST techniques and their effects, answer the other side, and plan a full article with topic sentences.",
      covers: [11, 12, 13],
      pretext: {
        words: [
          { word: "explicit", means: "stated clearly and directly", sentence: "‘The café was dirty’ is an explicit opinion." },
          { word: "implicit", means: "suggested, not stated directly", sentence: "An implicit opinion is hidden in the details the writer chooses." },
          { word: "technique", means: "a method a writer uses on purpose", sentence: "A rhetorical question is a persuasive technique." },
          { word: "statistic", means: "a fact given as a number", sentence: "A statistic such as ‘six hours a night’ makes a point feel solid." },
          { word: "topic sentence", means: "the first sentence of a paragraph, giving its point", sentence: "Plan each paragraph with a topic sentence." },
          { word: "freewriting", means: "writing without stopping to find ideas", sentence: "Ten minutes of freewriting gave me three arguments." }
        ],
        passage: [
          "An explicit opinion is stated clearly.",
          "An implicit opinion is suggested by the words the writer chooses.",
          "Good writers imply as well as state.",
          "Persuasive writers use techniques on purpose.",
          "DAFOREST helps you remember them.",
          "Direct address, alliteration and anecdotes, facts, opinion, rhetorical questions.",
          "Emotive language, statistics, and the rule of three.",
          "Each technique has an effect on the reader.",
          "Strong writers also give the other side, then answer it.",
          "This makes their own view stronger.",
          "If you are stuck for ideas, freewrite for ten minutes without stopping.",
          "Then plan each paragraph with a topic sentence.",
          "Now you are ready to write a full article."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "مذكور بوضوح ومباشرة (explicit)",
            "مُلمَّح إليه، غير مذكور مباشرة (implicit)",
            "طريقة يستعملها الكاتب عن قصد (technique)",
            "حقيقة تُعطى على شكل رقم (statistic)",
            "الجملة الأولى في الفقرة، التي تعطي فكرتها (topic sentence)",
            "الكتابة بلا توقّف للعثور على أفكار (freewriting)"
          ],
          "passage": [
            "الرأي الصريح (explicit) يُذكر بوضوح.",
            "الرأي الضمني (implicit) تُلمّح إليه الكلمات التي يختارها الكاتب.",
            "الكتّاب الجيدون يُلمّحون كما يصرّحون.",
            "الكتّاب المُقنعون يستعملون الأساليب (techniques) عن قصد.",
            "كلمة DAFOREST تساعدك على تذكّرها.",
            "الخطاب المباشر، والسجع الصوتي، والحكايات القصيرة، والحقائق، والرأي، والأسئلة البلاغية.",
            "اللغة العاطفية، والإحصائيات، وقاعدة الثلاثة.",
            "كل أسلوب له تأثير في القارئ.",
            "الكتّاب الأقوياء يعرضون أيضاً الرأي الآخر، ثم يردّون عليه.",
            "وهذا يجعل رأيهم هم أقوى.",
            "إذا لم تجد أفكاراً، فاكتب بحرّية (freewrite) عشر دقائق بلا توقّف.",
            "ثم خطّط لكل فقرة بجملة رئيسية (topic sentence).",
            "الآن أنت مستعدّ لكتابة مقال كامل."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "powiedziany jasno i wprost (explicit)",
            "zasugerowany, nie powiedziany wprost (implicit)",
            "metoda, której autor używa celowo (technique)",
            "fakt podany jako liczba (statistic)",
            "pierwsze zdanie akapitu, które podaje jego główną myśl (topic sentence)",
            "pisanie bez przerwy, żeby znaleźć pomysły (freewriting)"
          ],
          "passage": [
            "Opinia wyrażona wprost (explicit) jest powiedziana jasno.",
            "Opinia ukryta (implicit) jest sugerowana przez słowa, które wybiera autor.",
            "Dobrzy autorzy zarówno sugerują, jak i mówią wprost.",
            "Autorzy tekstów perswazyjnych używają technik celowo.",
            "DAFOREST pomaga ci je zapamiętać.",
            "Bezpośredni zwrot (direct address), aliteracja i anegdoty, fakty, opinia, pytania retoryczne.",
            "Język emocjonalny, statystyki i zasada trójki (rule of three).",
            "Każda technika ma jakiś wpływ na czytelnika.",
            "Mocni autorzy podają też drugą stronę, a potem na nią odpowiadają.",
            "To wzmacnia ich własny pogląd.",
            "Jeśli brakuje ci pomysłów, pisz bez przerwy (freewriting) przez dziesięć minut.",
            "Potem zaplanuj każdy akapit ze zdaniem tematycznym (topic sentence).",
            "Teraz jesteś gotowy, żeby napisać pełny artykuł."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "dito de forma clara e direta (explicit, explícito)",
            "sugerido, não dito diretamente (implicit, implícito)",
            "um método que o escritor usa de propósito (technique, técnica)",
            "um facto/fato dado em forma de número (statistic, estatística)",
            "a primeira frase de um parágrafo, que dá o seu ponto principal (topic sentence)",
            "escrever sem parar para encontrar ideias (freewriting)"
          ],
          "passage": [
            "Uma opinião explícita é dita de forma clara.",
            "Uma opinião implícita é sugerida pelas palavras que o escritor escolhe.",
            "Os bons escritores tanto sugerem como afirmam.",
            "Os escritores persuasivos usam técnicas de propósito.",
            "DAFOREST ajuda você a lembrar-se delas.",
            "Direct address (falar com o leitor), aliteração e anedotas, factos/fatos, opinião, perguntas retóricas.",
            "Linguagem emotiva, estatísticas e a regra de três.",
            "Cada técnica tem um efeito no leitor.",
            "Os escritores fortes também apresentam o outro lado, e depois respondem-lhe.",
            "Isto torna a sua própria opinião mais forte.",
            "Se estiver sem ideias, escreva sem parar (freewriting) durante dez minutos.",
            "Depois planeie/planeje cada parágrafo com uma topic sentence.",
            "Agora você está pronto para escrever um artigo completo."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "si cad oo toos ah loo sheegay (explicit)",
            "la tilmaamay, aan si toos ah loo sheegin (implicit)",
            "hab qoraagu si ula kac ah u isticmaalo (technique)",
            "xaqiiqo tiro ahaan la bixiyay (statistic)",
            "weedha ugu horreysa ee baaragaraaf, oo sheegaysa hadalkeeda (topic sentence)",
            "qoraal aan la joojin si fikrado loo helo (freewriting)"
          ],
          "passage": [
            "Ra'yi cad (explicit) si cad ayaa loo sheegaa.",
            "Ra'yi qarsoon (implicit) waxaa tilmaamaa erayada qoraagu doorto.",
            "Qorayaasha wanaagsan way tilmaamaan, sidoo kalena way sheegaan.",
            "Qorayaasha qanciyaa farsamooyin (techniques) si ula kac ah ayay u isticmaalaan.",
            "DAFOREST wuxuu kaa caawiyaa inaad xasuusato.",
            "Xarfaheedu waxay u taagan yihiin: direct address, alliteration iyo anecdotes, facts, opinion, rhetorical questions.",
            "Iyo sidoo kale emotive language, statistics, iyo xeerka saddexda (rule of three).",
            "Farsamo kasta saamayn ayay akhristaha ku leedahay.",
            "Qorayaasha xooggan sidoo kale dhinaca kale ayay sheegaan, kadibna way ka jawaabaan.",
            "Tani aragtidooda ayay ka dhigtaa mid ka xoog badan.",
            "Haddii fikrado kuu yaraadaan, toban daqiiqo wax qor adigoon joojin (freewrite).",
            "Kadibna baaragaraaf kasta ku qorshee weedh mawduuc (topic sentence).",
            "Hadda waxaad diyaar u tahay inaad maqaal buuxa qorto."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "висловлений чітко й прямо (explicit)",
            "такий, на який натякають, а не говорять прямо (implicit)",
            "метод, який автор використовує навмисно (technique)",
            "факт, поданий у вигляді числа (statistic)",
            "перше речення абзацу, яке подає його думку (topic sentence)",
            "письмо без зупинки, щоб знайти ідеї (freewriting)"
          ],
          "passage": [
            "Явна думка (explicit opinion) висловлена чітко.",
            "Неявна думка (implicit opinion) передається через слова, які обирає автор.",
            "Добрі автори не лише стверджують, але й натякають.",
            "Автори переконливих текстів використовують прийоми (techniques) навмисно.",
            "DAFOREST допомагає вам їх запам’ятати.",
            "Пряме звернення (direct address), алітерація (alliteration) та анекдоти (anecdotes), факти (facts), думка (opinion), риторичні запитання (rhetorical questions).",
            "Емоційна мова (emotive language), статистика (statistics) та правило трьох (rule of three).",
            "Кожний прийом має свій вплив на читача.",
            "Сильні автори також подають іншу сторону, а потім відповідають на неї.",
            "Це робить їхній власний погляд сильнішим.",
            "Якщо вам бракує ідей, пишіть вільно (freewrite) десять хвилин без зупинки.",
            "Потім сплануйте кожний абзац із тематичним реченням (topic sentence).",
            "Тепер ви готові написати повну статтю."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "صاف اور سیدھے طور پر کہا گیا (explicit)",
            "اشارے سے کہا گیا، سیدھے طور پر نہیں (implicit)",
            "ایک طریقہ جو مصنف جان بوجھ کر استعمال کرتا ہے (technique)",
            "ایک حقیقت جو عدد کی شکل میں دی جائے (statistic)",
            "پیراگراف کا پہلا جملہ، جو اس کا نکتہ بتاتا ہے (topic sentence)",
            "خیال ڈھونڈنے کے لیے بغیر رکے لکھنا (freewriting)"
          ],
          "passage": [
            "صریح رائے (explicit opinion) صاف طور پر کہی جاتی ہے۔",
            "مضمر رائے (implicit opinion) مصنف کے چنے ہوئے لفظوں سے اشارے میں ملتی ہے۔",
            "اچھے مصنف صاف کہنے کے ساتھ اشارہ بھی کرتے ہیں۔",
            "قائل کرنے والے مصنف تکنیکیں جان بوجھ کر استعمال کرتے ہیں۔",
            "DAFOREST انھیں یاد رکھنے میں آپ کی مدد کرتا ہے۔",
            "Direct address، alliteration اور anecdotes، facts، opinion، rhetorical questions (براہِ راست بات، ہم آواز لفظ اور چھوٹے واقعے، حقائق، رائے، اثر کے لیے سوال)۔",
            "Emotive language، statistics اور rule of three (جذباتی زبان، شماریاتی اعداد اور تین کا قاعدہ)۔",
            "ہر تکنیک قاری پر ایک اثر رکھتی ہے۔",
            "مضبوط مصنف دوسری طرف کی بات بھی دیتے ہیں، پھر اس کا جواب دیتے ہیں۔",
            "اس سے ان کی اپنی رائے مضبوط ہوتی ہے۔",
            "اگر آپ کو خیال نہ ملیں تو دس منٹ بغیر رکے لکھیں (freewrite)۔",
            "پھر ہر پیراگراف کا منصوبہ ایک topic sentence کے ساتھ بنائیں۔",
            "اب آپ ایک مکمل مضمون لکھنے کے لیے تیار ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "Explicit and implicit opinions",
          paragraphs: [
            "Explicit means stated clearly and in detail, leaving no room for doubt. Implicit means suggested, though not directly expressed. ‘You are not going out in that; it is a disaster’ is explicit. ‘So that is how you are wearing your hair now?’ implies the same opinion without saying it.",
            "Professional opinion writers do both. Read these two sentences about a café. The first is explicit. The second never uses a judging word, yet the reader knows exactly what the writer thinks, because of the details chosen: a sleeve used as a cloth, and eleven minutes of being ignored.",
            "To decode an implicit opinion, ask three questions. Which details has the writer chosen to include? What do those details usually suggest? Why mention them here, in this paragraph? Then turn it round for your own writing: pick one criticism and turn it into an implicit suggestion through detail."
          ],
          quote: { text: "The café was dirty and the staff were rude. I wiped the table with my sleeve before I sat down, and waited eleven minutes for someone to notice me.",
            source: "An explicit opinion, then the same opinion implied — original examples written for Ad Astra" },
          tip: "Implicit opinion is show, don’t tell, applied to argument. The detail carries the judgement." },
        { heading: "DAFOREST: techniques that persuade, and why",
          paragraphs: [
            "DAFOREST is your checklist of persuasive techniques: Direct address (‘you’, ‘we’, commands), Alliteration and Anecdotes, Facts, Opinion and Onomatopoeia, Repetition and Rhetorical questions, Emotive language and Exaggeration, Statistics, and Three (the rule of three). Spotting them is step one. Step two is explaining why each one persuades, because there is no point identifying a technique if you cannot say what it does.",
            "Your teachers offer five reasons a technique might work: it makes a phrase stay in the mind so you remember it; it exaggerates how good or bad something is; it gives real-life examples that show the idea would work; it makes the reader feel they are on the writer’s side; or it forces the reader to think about the question more deeply.",
            "Analyse the language in ‘Let Them Sleep’ the way your teachers ask: pick a quotation from the beginning, the middle and the end, name the technique, and say why it is persuasive."
          ],
          worked: { q: "Analyse “No more shouting up the stairs, no more breakfast eaten in the car, no more detentions for lateness that nobody meant.”",
            steps: ["Technique: a triple (rule of three) built on the repetition of ‘no more’.", "Also emotive: shouting, rushed meals and unfair detentions are small miseries every family knows.", "Why it persuades: the rhythm makes it stick, and the familiar details put the reader on the writer’s side."],
            answer: "Triple and repetition with emotive detail. It stays in the mind and makes the reader feel the writer understands their mornings, so they are more likely to agree." },
          tip: "Technique, quotation, effect. A technique named without an effect earns nothing." },
        { heading: "Answer the other side, then plan",
          paragraphs: [
            "Reading two articles that argue opposite views about social media shows something useful: the stronger writer is the one who addresses the counter-argument. Naming the other view and answering it does not weaken your case; it tells the reader you have thought about both sides and still hold your view. Look back at ‘Let Them Sleep’: “Some will say that pupils would simply stay up later and gain nothing.” The writer raises it, then answers it with expert evidence.",
            "If ideas will not come, try freewriting: write continuously about the topic for ten or fifteen minutes, in sentences, without stopping to fix spelling or punctuation. If you are stuck, write ‘I do not know what to write’ until something arrives. Nobody else will read it; you are mining for ideas, not drafting.",
            "Then plan. Read through your freewriting and highlight anything you could use. Write a clear topic sentence for each paragraph: the first sentence, stating the paragraph’s point. Decide which persuasive techniques you will use, where your facts or statistics go, whether you can add direct address or an anecdote, and whether humour fits your audience. A review plan is about one event; an opinion plan is about reasons."
          ],
          tip: "Before you write a full article, check your plan has: a hook, three arguments, two kinds of evidence, one counter-argument answered, and a conclusion." }
      ],
      gate: [
        { kind: "gap", q: "An opinion that is suggested through word choices but not stated directly is ___.", answer: "implicit", options: ["implicit", "explicit", "expert"],
          feedback: {
            "explicit": "Explicit is the opposite: stated clearly and directly, with no doubt. An opinion hidden in the details is implicit.",
            "expert": "Expert describes a kind of evidence, from someone who knows the subject. An opinion that is suggested rather than stated is implicit."
          },
          why: "Implicit means suggested, not directly expressed; explicit means stated clearly." },
        { kind: "mcq", q: "In DAFOREST, what does the D stand for?", options: ["Direct address", "Description", "Dialogue", "Drama"], answer: 0,
          feedback: [
            "",
            "Description is a tool of narrative and review writing, but the D in DAFOREST is Direct address: speaking to the reader as ‘you’.",
            "Dialogue is speech between characters, which belongs in stories. DAFOREST begins with Direct address.",
            "Drama is a form, not a persuasive technique. The D is Direct address."
          ],
          why: "Direct address speaks straight to the reader with ‘you’ or ‘we’, making them feel involved." },
        { kind: "mcq", q: "Why should an opinion article include a counter-argument?", options: ["To show you have considered the other side, and to answer it", "To confuse the reader about what you think", "To fill space when you run out of ideas", "Because articles must have exactly one argument"], answer: 0,
          feedback: [
            "",
            "A counter-argument that confuses the reader has not been answered. The point is to raise the other view and then show why your view still stands.",
            "Filler weakens an article. The counter-argument earns its place by making your own case more convincing.",
            "Articles have several arguments; your plan has three. The counter-argument is the other side’s view, added so that you can answer it."
          ],
          why: "Addressing the counter-argument strengthens the writer’s viewpoint: the reader sees both sides have been weighed." }
      ],
      modules: [
        { title: "Decode the implicit opinion",
          task: { kind: "mcq", q: "Which sentence gives an implicit opinion of the café?",
            options: ["“The café was dirty and the staff were rude.”", "“I wiped the table with my sleeve before I sat down, and waited eleven minutes for someone to notice me.”", "The café is on the high street next to the bank.", "The café opens at nine and closes at five."], answer: 1,
            feedback: [
              "That is the explicit version: ‘dirty’ and ‘rude’ are judging words that state the opinion outright. Look for the sentence that makes you work it out.",
              "",
              "That sentence gives a location and nothing else. There is no opinion in it, implicit or explicit.",
              "Opening hours are a plain fact. An implicit opinion needs details that suggest a judgement, such as wiping a table with a sleeve."
            ] },
          levels: {
            support: { steps: ["Cross out any sentence that is only a fact (where, when).", "Of the two that remain, find the one with judging words such as ‘dirty’ or ‘rude’: that is explicit.", "The other one suggests the same opinion through details."],
              example: { q: "Which is implicit: “The hotel room was tiny.” or “I could open the wardrobe, the window and the bathroom door without leaving the bed.”?", steps: ["‘Tiny’ states the judgement.", "Reaching everything from the bed suggests it."], answer: "“I could open the wardrobe, the window and the bathroom door without leaving the bed.” is the implicit one." } },
            core: { hint: "The implicit sentence never says what the writer thinks, but you know anyway." },
            stretch: { extend: "Write an implicit sentence that suggests the café is excellent, without using a single word of praise." }
          },
          explain: "Say which detail in the implicit sentence told you what the writer thought.",
          why: "Wiping the table with a sleeve and waiting eleven minutes imply dirt and rudeness without stating them. The first sentence states them; the other two are plain facts." },
        { title: "Name the technique",
          task: { kind: "match", q: "Match each quotation from ‘Let Them Sleep’ to the DAFOREST technique it shows.",
            pairs: [
              ["“Have you ever tried to explain fractions to a zombie?”", "Rhetorical question"],
              ["“No more shouting up the stairs, no more breakfast eaten in the car, no more detentions for lateness that nobody meant.”", "Rule of three (triple)"],
              ["“on school nights I averaged six hours”", "Statistic"],
              ["“Third, think of the mornings themselves.”", "Direct address"],
              ["“Last term I kept a sleep diary for a science project”", "Anecdote"]
            ] },
          levels: {
            support: { steps: ["A question mark with no answer expected: rhetorical question.", "Three items in a row: rule of three.", "A number used as evidence: statistic.", "A command or ‘you’ aimed at the reader: direct address.", "A short story about the writer: anecdote."],
              example: { q: "Name the technique in ‘Think of the last time you ate lunch in your coat.’", steps: ["It is a command aimed at the reader.", "It uses ‘you’."], answer: "Direct address." } },
            core: { hint: "Count items for the triple, look for a number for the statistic, and look for ‘I’ for the anecdote." },
            stretch: { extend: "For two of the quotations, explain why the technique persuades, using one of the five reasons from the section." }
          },
          explain: "Say which quotation you were least sure about, and what finally decided you.",
          why: "Question, three items, a number, a command to the reader, a personal story: five techniques, each with a job." },
        { title: "Writing practice: a full opinion article",
          contexts: [
            { label: "Social media and wellbeing", q: "Writing practice (full piece). Write an article for a school newspaper giving your opinion on whether social media is harmful to young people’s wellbeing. Use the eight-part structure, include a counter-argument that you answer, and use at least three DAFOREST techniques on purpose.",
              why: "Hook with a scene every reader knows, give one argument from your own experience and one from an expert or a survey, name the view that social media connects people and answer it, and end by returning to your headline." },
            { label: "A school rule you feel strongly about", q: "Writing practice (full piece). Write an article for a school newspaper giving your opinion on a school rule you feel strongly about, such as uniform, jewellery or home learning. Use the eight-part structure, include a counter-argument that you answer, and use at least three DAFOREST techniques on purpose.",
              why: "State the rule and your view in the opening, give three reasons with personal and expert evidence, raise the reason the rule exists and answer it fairly, and finish with what should change." }
          ],
          task: { kind: "written", q: "Writing practice (full piece). Write an article for a school newspaper giving your opinion on whether the school day should start later. Use the eight-part structure, include a counter-argument that you answer, and use at least three DAFOREST techniques on purpose.",
            marks: 40,
            criteria: [
              "My headline links to my main opinion, and my opening hooks, names the topic and states my view.",
              "I make three arguments, each beginning with a clear topic sentence.",
              "I give personal evidence for one argument and expert evidence for another.",
              "I raise a counter-argument and answer it.",
              "I use at least three DAFOREST techniques, and at least one opinion is implied through detail rather than stated.",
              "My conclusion returns to my main opinion without simply repeating the opening.",
              "My tone suits a school newspaper, and my spelling, punctuation and sentence structures are accurate and varied."
            ],
            model: "Let Them Sleep: why the school day should start at ten\n\nHave you ever tried to explain fractions to a zombie? Our teachers do it every morning. Across the country, teenagers are dragged into classrooms before their brains have switched on, and then we are told off for yawning. It is time the school day started at ten.\n\nFirst, teenage bodies are built differently. My alarm goes off at half past six, but I rarely fall asleep before midnight, however hard I try. Last term I kept a sleep diary for a science project: on school nights I averaged six hours. On Saturdays, with no alarm, I slept nine. That is not laziness. That is biology.\n\nSecond, a later start would improve results, not harm them. Some will say that pupils would simply stay up later and gain nothing. Yet when I asked our school nurse, she explained that the teenage body clock shifts later during puberty, so most of us cannot fall asleep early even when we want to. A rested class learns more in five hours than a tired one learns in six.\n\nThird, think of the mornings themselves. No more shouting up the stairs, no more breakfast eaten in the car, no more detentions for lateness that nobody meant. Parents would gain a calmer house; teachers would gain pupils who can actually hear them.\n\nNobody is asking for a shorter day, just a later one. If we are serious about results and wellbeing, the answer is lying in bed, waiting for its alarm. Let it sleep a little longer." },
          levels: {
            support: { steps: ["Freewrite for ten minutes on the topic without stopping, then highlight three reasons.", "Plan eight lines in the margin: introduction, argument 1, personal evidence, argument 2, counter-argument, expert evidence, argument 3, conclusion.", "Write a topic sentence for each argument before you write the paragraph.", "Choose three DAFOREST techniques and decide where each will go.", "Write the counter-argument as ‘Some will say…’ and answer it in the next sentence."],
              example: { q: "Write the counter-argument paragraph for an article arguing that the school should ban energy drinks.", steps: ["Start with ‘Some will say’.", "Give the other side fairly.", "Answer it with evidence."], answer: "Some will say that what pupils drink is their own business, and that a ban treats teenagers like children. Yet when our science teacher showed us the sugar in a single can, nobody in the room could argue that it belonged in a lesson. Freedom matters, but so does being awake in period five." } },
            core: { hint: "Three arguments, two kinds of evidence, one counter-argument answered. Everything else is craft." },
            stretch: { extend: "Rewrite one paragraph so that its opinion is entirely implicit, carried by detail, then explain which version is more persuasive and why." }
          },
          explain: "Say which counter-argument you chose and how you answered it.",
          why: "A full opinion article hooks, states its view, builds three arguments with topic sentences and two kinds of evidence, answers the other side, uses techniques on purpose and returns to its opinion at the end." }
      ]
    }
  ],

  sources: {
    deckDump: "y09_u4_opinion_writing.txt",
    decksUsed: [
      "L01 Introduction to Opinion Writing.pptx",
      "L02 Models of Reviews.pptx",
      "L03 - Examples and non-examples.pptx",
      "L04 - Generating Ideas.pptx",
      "L05 - Review Structure.pptx",
      "L06 - Mid unit.pptx",
      "L07 opinion writing intro.pptx",
      "L08 - Feedback and Feed-forward.pptx",
      "L09 opinion writing Dystopia.pptx",
      "L10 India Knight Teenage Demons.pptx",
      "L11 Honey Boo Boo (2).pptx",
      "L12 All for School_ No, thanks! (1).pptx",
      "L13 Opinion article_ Social media (1).pptx"
    ],
    notes: "Lesson titles, objectives, big questions, key words, the seven features of a review, the five-part review structure, the four openings, the eight-part opinion-article structure, DAFOREST, the AO5/AO6 mark split and the review-versus-speech and review-versus-opinion comparisons are all taken from the thirteen decks above. COPYRIGHT: none of the decks’ reading texts is reproduced: the Sunday Times column on teenagers (L10), the article on a reality TV show (L11), the article on teaching dystopian fiction (L07, L09), the article on compulsory schooling (L12), the two social-media articles and the freewriting handout (L13), the safari review (L05, L06, L08), the coffee-shop review (L08), the teacher-written model reviews and openings (L01, L02, L04–L08) and the pupil-style 100-word play review (L03). Every model text here (the ‘Bounce Yard’ mini-reviews, ‘Up, Up and Nearly Away’, ‘Pigeon Patrol 3’, the four openings, ‘Let Them Sleep’, the homework opening and the explicit/implicit example sentences) is an original text written for Ad Astra; all questions, feedback and model answers are original. verify.py checks that every quotation in curly double quotes appears verbatim in those texts. The department deck labels AO6 as ‘the structure of your response’; the manifest teaches AO6 as technical accuracy and AO5 as content and organisation, in line with AQA 8700 (see NOTES.md)."
  }
};
