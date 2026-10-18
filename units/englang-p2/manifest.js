// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE English Language 8700 · Paper 2 · Year 10 Unit 2 (Autumn 2) · schema astra/2
//
// QUOTATION RULE FOR THIS FILE (checked by verify.py):
//   “curly double quotes” are used ONLY for words quoted from a reading source. Every such span must
//   appear verbatim in the original passages stored in verify.py (CORPUS). Statements, sentence openers,
//   example sentences and task wording use ‘single quotes’.
//   Both reading sources are ORIGINAL passages written for Ad Astra: Source A, ‘Behind the Glass’ (a modern
//   online article, 2024) and Source B, a letter from Charlotte to her sister Harriet (1854). No text from the
//   department decks’ extracts (Fogle and Cracknell, the 19th-century steamship account, the camping sources,
//   the mountain sources, the gaming article, the consumerism speech, the homelessness article or any model
//   answer), from AQA papers or from mark schemes is reproduced.
//
// astra/2: feedback on every mcq/gap item, explain on every module, contexts on two written modules (Question 3
//   on Source B; Question 5 as a letter and as a speech), glossary chapters, connections and meta.spacing.
//   No meta.constellation (the engine lays the stars out). No pretext.l1 (added later by the translation pass).
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["englang-p2"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "englang-p2",
    subjectKey: "english",
    subject: "English Language",
    board: "AQA",
    spec: "8700",
    specRef: "Paper 2: Writers’ viewpoints and perspectives",
    year: 10,
    tier: "GCSE (single tier)",
    title: "Language Paper 2",
    sub: "Read two non-fiction sources, one from the nineteenth century and one modern, compare what their writers think, then argue your own case in writing.",
    bigQuestion: "How do I read two writers’ viewpoints and perspectives, and how do I structure a non-fiction response of my own?",
    lessonCount: 24,
    spacing: [2, 7, 30]
  },

  // The department’s decks, in three blocks: Section A reading (1–6), the Question 5 core (7–10), and the
  // transactional-writing module decks in their own module order (11–22) followed by two cover lessons (23–24).
  lessons: [
    { n: 1, title: "Language Paper 2: overview",
      question: "What does Paper 2 involve, and how do form, audience and purpose help me read the two sources?",
      keywords: ["form", "audience", "purpose", "non-fiction", "nineteenth century"] },
    { n: 2, title: "Language Paper 2: Question 1 and Question 2",
      question: "How do I choose the true statements for Question 1, and what can I infer about the differences between the two sources?",
      keywords: ["true statements", "infer", "comparative point", "textual reference"] },
    { n: 3, title: "Question 3: Language Paper 2 analysis",
      question: "How does the writer use language to make the subject seem a particular way?",
      keywords: ["noun phrase", "active verb", "metaphor", "simile", "personification", "adverbial phrase"] },
    { n: 4, title: "Question 4: Paper 2",
      question: "How do the two writers present their feelings and perspectives, and what methods do they use?",
      keywords: ["perspective", "first person narrative", "chronological structure", "pace", "contrastingly"] },
    { n: 5, title: "Mid-unit assessment: timings and Questions 1 to 4",
      question: "How do I time the whole paper and answer Questions 1 to 4 in exam conditions?",
      keywords: ["timings", "zoom in", "Both writers suggest…", "WWW / EBI"] },
    { n: 6, title: "Inference vs analysis: Question 2 and Question 3",
      question: "What is the difference between inferring and analysing, and which question wants which?",
      keywords: ["inference", "analysis", "reading between the lines", "quotation explosion"] },
    { n: 7, title: "Question 5: structuring a non-fiction response",
      question: "How do we structure a non-fiction response?",
      keywords: ["DAFOREST", "hook", "counter-argument", "cyclical structure", "letter to the editor"] },
    { n: 8, title: "Article writing to argue",
      question: "How do we construct an argument?",
      keywords: ["spray diagram", "anecdote", "expert opinion", "refute", "pernicious"] },
    { n: 9, title: "Writing an article to persuade: AO6 focus",
      question: "How can we use SPAG to improve our writing?",
      keywords: ["colon", "semicolon", "brackets", "ellipsis", "sentence inversion"] },
    { n: 10, title: "Persuasive writing: hooks and counter-arguments",
      question: "How do I hook my audience, make a point and answer the other side?",
      keywords: ["rhetorical question", "setting the scene", "triple", "appeal to the audience", "counter-argument"] },
    { n: 11, title: "Transactional writing: speech practice",
      question: "What makes a good speech, and how do I hook my listeners?",
      keywords: ["hook", "statistic", "audience address", "key message", "AFOREST"] },
    { n: 12, title: "Revising AFOREST features and quick planning",
      question: "How do I turn a boring sentence into an interesting one, and plan any Question 5 task in five minutes?",
      keywords: ["AFOREST", "quick planning", "AO5", "AO6"] },
    { n: 13, title: "Transactional writing: information guide",
      question: "What makes a successful information guide?",
      keywords: ["sub-section", "introduction", "tone", "success criteria"] },
    { n: 14, title: "Transactional writing: form, purpose and audience",
      question: "What is transactional writing, and how do I show form, purpose and audience from my first line?",
      keywords: ["transactional writing", "form", "purpose", "audience", "opening"] },
    { n: 15, title: "Transactional writing: speeches",
      question: "How do speeches, letters and articles differ, and how do I signpost a speech?",
      keywords: ["direct address", "signpost", "expert opinion", "call to action"] },
    { n: 16, title: "Transactional writing: a speech about an achievement",
      question: "How do I set the scene for, and build, a speech about my greatest achievement?",
      keywords: ["catchy opening", "set the scene", "DAFOREST"] },
    { n: 17, title: "Transactional writing: letters",
      question: "What are the conventions of a letter, and how do I develop a paragraph with PED?",
      keywords: ["addresses", "sign-off", "Yours sincerely", "point, evidence, development"] },
    { n: 18, title: "Transactional writing: reflective article (1)",
      question: "How is a reflective or entertaining article structured?",
      keywords: ["headline", "anecdote", "case study", "MASOAPS", "AFOREST"] },
    { n: 19, title: "Transactional writing: reflective article (2)",
      question: "How do I plan and write a reflective article in 45 minutes?",
      keywords: ["plan", "expert opinion", "circle back", "exam conditions"] },
    { n: 20, title: "Transactional writing: reviews",
      question: "What are the purpose and features of a review?",
      keywords: ["heading", "past tense", "personal opinion", "judgement", "contrasting opinions"] },
    { n: 21, title: "Models of reviews: audience, purpose and tone",
      question: "How do reviews differ from speeches, and how do I adapt my tone to my audience?",
      keywords: ["tone", "critic", "inform", "persuade", "audience"] },
    { n: 22, title: "Review structure",
      question: "How do I plan and structure a whole review?",
      keywords: ["set the scene", "description", "personal experience", "judgement", "recommend"] },
    { n: 23, title: "Transactional writing: article openings (cover lesson)",
      question: "How do I open and close an article so that the examiner trusts me from the first line?",
      keywords: ["conventions", "register", "hook", "PED"] },
    { n: 24, title: "Speeches and rhetorical devices (cover lesson)",
      question: "Which rhetorical devices do famous speeches use, and to what effect?",
      keywords: ["rhetorical techniques", "intended effect", "crafting language"] }
  ],

  glossary: [
    { term: "form", means: "The kind of text: a letter, an article, a speech, a review or a guide.", chapter: "know-the-paper" },
    { term: "audience", means: "The people a text is written for.", chapter: "know-the-paper" },
    { term: "purpose", means: "What the writer wants the text to do: inform, entertain, persuade, argue, advise.", chapter: "know-the-paper" },
    { term: "register", means: "How formal or informal the language is, chosen to suit the audience.", chapter: "q5-forms" },
    { term: "infer", means: "To work out what a writer suggests but does not say directly.", chapter: "q1-q2-infer" },
    { term: "analyse", means: "To break down how a writer’s choices work and explain their effects.", chapter: "q3-language" },
    { term: "compare", means: "To show how two things are alike and how they differ.", chapter: "q4-perspectives" },
    { term: "perspective", means: "How a writer sees and feels about a subject.", chapter: "q4-perspectives" },
    { term: "noun phrase", means: "A group of words built around a noun, such as ‘a wet Saturday in March’.", chapter: "q3-language" },
    { term: "active verb", means: "A verb that shows the subject doing something, such as ‘stares’ or ‘bangs’.", chapter: "q3-language" },
    { term: "adverbial phrase", means: "A group of words that tells you how, when or where, such as ‘every few paces’.", chapter: "q3-language" },
    { term: "personification", means: "Giving human actions or feelings to something that is not human.", chapter: "q3-language" },
    { term: "direct address", means: "Speaking straight to the reader or listener, often with ‘you’ or ‘we’.", chapter: "q5-craft" },
    { term: "rhetorical question", means: "A question asked for effect, not for an answer.", chapter: "q5-craft" },
    { term: "emotive language", means: "Words chosen to stir the reader’s feelings.", chapter: "q5-craft" },
    { term: "triple", means: "Three words or ideas in a row, for rhythm and force.", chapter: "q5-craft" }
  ],

  // Connections game: four groups of four, all sixteen terms drawn from the glossary above.
  connections: [
    { group: "Three questions to ask before you read or write", terms: ["form", "audience", "purpose", "register"] },
    { group: "Words from the reading questions", terms: ["infer", "analyse", "compare", "perspective"] },
    { group: "Language to zoom in on (Question 3)", terms: ["noun phrase", "active verb", "adverbial phrase", "personification"] },
    { group: "DAFOREST devices (Question 5)", terms: ["direct address", "rhetorical question", "emotive language", "triple"] }
  ],

  chapters: [
    /* ───────────────────────── 1 ───────────────────────── */
    { key: "know-the-paper", n: 1,
      title: "Know the paper: two sources, three questions to ask, and your timings",
      lead: "You will know what Paper 2 asks, how to read two non-fiction sources with form, audience and purpose in mind, and how to split your 1 hour 45 minutes.",
      covers: [1, 5],
      pretext: {
        words: [
          { word: "non-fiction", means: "writing about real people, places, events and ideas", sentence: "A letter, a speech and a newspaper article are all non-fiction." },
          { word: "source", means: "one of the two texts printed in the exam", sentence: "Source A is modern and Source B is from the nineteenth century." },
          { word: "form", means: "the kind of text it is", sentence: "The form of Source B is a letter to a sister." },
          { word: "audience", means: "the people a text is written for", sentence: "The audience for a school magazine is pupils and their families." },
          { word: "purpose", means: "what the writer wants the writing to do", sentence: "The purpose of a review is to inform and to help you decide." }
        ],
        passage: [
          "Paper 2 is one exam that lasts one hour and forty-five minutes.",
          "It is worth half of your English Language GCSE.",
          "Section A is reading and Section B is writing.",
          "You read two non-fiction sources.",
          "One was written in the nineteenth century.",
          "The other is modern.",
          "They share a topic, but the writers see it differently.",
          "Before you read, ask three questions.",
          "What form is it: a letter, an article, a speech?",
          "Who is the audience?",
          "What is the purpose: to inform, to entertain, to persuade, to argue?",
          "Spend thirteen minutes reading both sources and the questions.",
          "Then answer the four reading questions in order.",
          "Keep forty-five minutes for Question 5."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "كتابة عن أناس وأماكن وأحداث وأفكار حقيقية (non-fiction)",
            "واحد من النصّين المطبوعين في الامتحان (source)",
            "نوع النص الذي أمامك (form)",
            "الناس الذين كُتب النص لهم (audience)",
            "ما يريد الكاتب أن تفعله كتابته (purpose)"
          ],
          "passage": [
            "الورقة 2 (Paper 2) امتحان واحد يستمرّ ساعة وخمساً وأربعين دقيقة.",
            "وهي تساوي نصف شهادتك في اللغة الإنجليزية (GCSE).",
            "القسم A للقراءة، والقسم B للكتابة.",
            "تقرأ نصّين غير قصصيين (non-fiction).",
            "أحدهما كُتب في القرن التاسع عشر.",
            "والآخر حديث.",
            "يشتركان في الموضوع، لكن الكاتبَين يريانه بشكل مختلف.",
            "قبل أن تقرأ، اطرح ثلاثة أسئلة.",
            "ما نوع النص (form): رسالة، أم مقال، أم خطبة؟",
            "من هو الجمهور (audience)؟",
            "ما الهدف (purpose): أن يُخبر، أم يُسلّي، أم يُقنع، أم يُجادل؟",
            "اقضِ ثلاث عشرة دقيقة في قراءة النصّين والأسئلة.",
            "ثم أجب عن أسئلة القراءة الأربعة بالترتيب.",
            "احتفظ بخمس وأربعين دقيقة للسؤال 5."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "pisanie o prawdziwych ludziach, miejscach, zdarzeniach i ideach (non-fiction)",
            "jeden z dwóch tekstów wydrukowanych w arkuszu egzaminacyjnym (source)",
            "rodzaj tekstu, jakim on jest (form)",
            "ludzie, dla których tekst jest napisany (audience)",
            "to, co autor chce, żeby tekst zrobił (purpose)"
          ],
          "passage": [
            "Arkusz 2 (Paper 2) to jeden egzamin, który trwa godzinę i czterdzieści pięć minut.",
            "Jest wart połowę twojego egzaminu GCSE z języka angielskiego.",
            "Sekcja A to czytanie, a sekcja B to pisanie.",
            "Czytasz dwa teksty źródłowe (sources), które nie są fikcją.",
            "Jeden został napisany w dziewiętnastym wieku.",
            "Drugi jest współczesny.",
            "Mają wspólny temat, ale autorzy widzą go inaczej.",
            "Zanim zaczniesz czytać, zadaj trzy pytania.",
            "Jaka to forma (form): list, artykuł, przemowa?",
            "Kto jest odbiorcą (audience)?",
            "Jaki jest cel (purpose): informować, bawić, przekonywać, argumentować?",
            "Poświęć trzynaście minut na przeczytanie obu tekstów i pytań.",
            "Potem odpowiedz po kolei na cztery pytania dotyczące czytania.",
            "Zostaw czterdzieści pięć minut na pytanie 5."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "textos sobre pessoas, lugares, acontecimentos e ideias reais (non-fiction, não ficção)",
            "um dos dois textos impressos no exame (source, fonte)",
            "o tipo de texto que é (form, forma)",
            "as pessoas para quem um texto é escrito (audience, público)",
            "o que o escritor quer que o texto faça (purpose, propósito)"
          ],
          "passage": [
            "O Paper 2 é um exame que dura uma hora e quarenta e cinco minutos.",
            "Vale metade do seu GCSE de English Language.",
            "A Parte A (Section A) é de leitura, e a Parte B (Section B) é de escrita.",
            "Você lê duas fontes (sources) de não ficção.",
            "Uma foi escrita no século dezenove.",
            "A outra é moderna.",
            "As duas falam do mesmo tema, mas os escritores veem-no de maneiras diferentes.",
            "Antes de ler, faça três perguntas.",
            "Que forma é esta: uma carta, um artigo, um discurso?",
            "Quem é o público?",
            "Qual é o propósito: informar, divertir, persuadir, argumentar?",
            "Use treze minutos para ler as duas fontes e as perguntas.",
            "Depois responda às quatro perguntas de leitura, por ordem.",
            "Guarde quarenta e cinco minutos para a Pergunta 5."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "qoraal ku saabsan dad, meelo, dhacdooyin iyo fikrado dhab ah (non-fiction)",
            "mid ka mid ah labada qoraal ee ku daabacan imtixaanka (source)",
            "nooca qoraalku yahay (form)",
            "dadka qoraalka loo qoray (audience)",
            "waxa qoraagu doonayo in qoraalku sameeyo (purpose)"
          ],
          "passage": [
            "Paper 2 waa hal imtixaan oo socda hal saac iyo shan iyo afartan daqiiqo.",
            "Wuxuu u dhigmaa kala badh GCSE-gaaga English Language.",
            "Qaybta A waa akhris, Qaybta B-na waa qoraal.",
            "Waxaad akhrisaa laba qoraal (sources) oo non-fiction ah.",
            "Mid waxaa la qoray qarnigii sagaal iyo tobnaad.",
            "Kan kalena waa mid casri ah.",
            "Isku mawduuc ayay wadaagaan, laakiin qorayaashu si kala duwan ayay u arkaan.",
            "Intaadan akhrin, saddex su'aalood is weydii.",
            "Nooce qoraal (form) waa: warqad, maqaal, mise khudbad?",
            "Yaa loo qoray (audience)?",
            "Ujeeddadu (purpose) waa maxay: in la wargeliyo, in la maaweeliyo, in lagu qanciyo, mise in lagu doodo?",
            "Saddex iyo toban daqiiqo ku qaado akhrinta labada qoraal iyo su'aalaha.",
            "Kadibna afarta su'aalood ee akhriska si isku xigta uga jawaab.",
            "Shan iyo afartan daqiiqo u hay Su'aasha 5."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "тексти про справжніх людей, місця, події та ідеї (non-fiction)",
            "один із двох текстів, надрукованих в екзамені (source)",
            "те, якого виду цей текст (form)",
            "люди, для яких написано текст (audience)",
            "те, що автор хоче, щоб текст зробив (purpose)"
          ],
          "passage": [
            "Paper 2 — це один екзамен, який триває одну годину сорок п’ять хвилин.",
            "Він дає половину вашої оцінки GCSE з англійської мови.",
            "Section A — це читання, а Section B — це письмо.",
            "Ви читаєте два нехудожні тексти (non-fiction sources).",
            "Один був написаний у дев’ятнадцятому столітті.",
            "Інший — сучасний.",
            "У них спільна тема, але автори бачать її по-різному.",
            "Перш ніж читати, поставте три запитання.",
            "Яка це форма (form): лист, стаття, промова?",
            "Хто аудиторія (audience)?",
            "Яка мета (purpose): інформувати, розважити, переконати, довести?",
            "Витратьте тринадцять хвилин на читання обох текстів і запитань.",
            "Потім відповідайте на чотири запитання з читання по порядку.",
            "Залиште сорок п’ять хвилин на Question 5."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "حقیقی لوگوں، جگہوں، واقعات اور خیالات کے بارے میں تحریر (non-fiction)",
            "امتحان میں چھپے ہوئے دو متنوں میں سے ایک (source)",
            "متن کس قسم کا ہے (form)",
            "وہ لوگ جن کے لیے متن لکھا گیا ہے (audience)",
            "مصنف تحریر سے کیا کام لینا چاہتا ہے (purpose)"
          ],
          "passage": [
            "Paper 2 ایک امتحان ہے جو ایک گھنٹہ پینتالیس منٹ چلتا ہے۔",
            "یہ آپ کے English Language GCSE کا آدھا حصہ ہے۔",
            "Section A پڑھنا ہے اور Section B لکھنا ہے۔",
            "آپ دو non-fiction ماخذ (sources) پڑھتے ہیں۔",
            "ایک انیسویں صدی میں لکھا گیا تھا۔",
            "دوسرا جدید زمانے کا ہے۔",
            "ان کا موضوع ایک ہے، مگر مصنف اسے الگ الگ نظر سے دیکھتے ہیں۔",
            "پڑھنے سے پہلے تین سوال پوچھیں۔",
            "اس کی قسم (form) کیا ہے: خط، مضمون، یا تقریر؟",
            "قاری (audience) کون ہیں؟",
            "مقصد (purpose) کیا ہے: بتانا، لطف دینا، قائل کرنا، یا دلیل دینا؟",
            "تیرہ منٹ دونوں ماخذ اور سوالات پڑھنے میں لگائیں۔",
            "پھر پڑھنے کے چار سوالوں کے جواب ترتیب سے دیں۔",
            "سوال 5 کے لیے پینتالیس منٹ بچا کر رکھیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "What is in the paper",
          paragraphs: [
            "Paper 2 is called ‘Writers’ viewpoints and perspectives’. It is half of your English Language GCSE and lasts 1 hour 45 minutes. Section A is reading: you are given two non-fiction sources, Source A and Source B, and you answer four questions about them, worth 40 marks together. Section B is writing: one task, Question 5, also worth 40 marks.",
            "The two sources are always linked by a topic, and one is always from the nineteenth century while the other is modern. Each has a short introduction in a box above it. Read that box first: it tells you the form (a letter, a diary, an article, a speech), who wrote it and when. That is your first clue to the audience and the purpose.",
            "Question 1 (4 marks) asks you to find true statements about the opening of Source A. Question 2 (8 marks) asks what you can infer about differences or similarities between the two sources. Question 3 (12 marks) asks how one writer uses language. Question 4 (16 marks) asks you to compare the writers’ perspectives. Question 5 (40 marks) asks you to write your own non-fiction: 24 marks are for content and organisation, and 16 are for technical accuracy."
          ],
          tip: "Paper 2 is 80 marks: 40 for reading, 40 for writing. The marks climb through Section A, so your time should climb too." },
        { heading: "Timing your 1 hour 45 minutes",
          paragraphs: [
            "Your teachers’ plan is this: 13 minutes to read the questions and both sources, annotating as you go if that helps; 2 minutes for Question 1; 10 for Question 2; 15 for Question 3; 20 for Question 4; and 45 for Question 5. The 45 minutes for Question 5 includes about 5 minutes to plan and a few minutes at the end to check.",
            "Notice how the time grows with the marks. Question 1 is worth 4 marks and takes 2 minutes; Question 4 is worth 16 and takes 20. If you find yourself still on Question 2 after a quarter of an hour, stop, write your final sentence and move on. Marks you never reach cannot be earned."
          ],
          worked: { q: "Check that the department’s timings fit the exam exactly.",
            steps: ["Reading both sources and the questions: 13 minutes.", "Questions 1 to 4: 2 + 10 + 15 + 20 = 47 minutes.", "Question 5, including planning and checking: 45 minutes."],
            answer: "13 + 2 + 10 + 15 + 20 + 45 = 105 minutes, which is exactly 1 hour 45 minutes." },
          tip: "Write your finish time for each question in the margin before you start writing." },
        { heading: "Three questions before you read: form, audience, purpose",
          paragraphs: [
            "Non-fiction is written by somebody, for somebody, to do something. Before you read a source, ask: What form is it (an article, a review, a letter, a speech)? Who is the intended audience? What is the purpose: to inform, to advise, to entertain, to persuade, to argue? The box above each source answers most of this for you.",
            "Here is the box for Source A, the modern text you will use throughout this unit: ‘Source A is an original article published on a travel website in 2024. The writer describes a day at a wildlife park with her six-year-old daughter.’ Form: an online article, written in the first person like a personal story. Audience: adults, especially parents and people who like days out. Purpose: to entertain, and to make the reader think.",
            "Now read the opening of Source A, ‘Behind the Glass’. As you read, ask what is happening at the beginning, and how the writer makes it engaging."
          ],
          quote: { text: "It is nine o’clock on a wet Saturday in March, and I am standing in a queue with two hundred other people, waiting for a wildlife park to open. My daughter, who is six, has been awake since five. She has a plastic giraffe in one hand and a list in the other. The list says: lions, tigers, penguins, the big snake. We have driven for two hours to be here. When the gates finally swing back, the crowd moves as one, past the gift shop and the café and a sign promising a day we will never forget. The first enclosure is the meerkats. Twenty of them sit upright on a mound of sand, turning their heads together like a crowd at a tennis match, and my daughter laughs so hard she drops the giraffe. I laugh too. It is impossible not to. For the first hour, I am completely happy.",
            source: "Source A, ‘Behind the Glass’, Part 1 — original passage written for Ad Astra" },
          tip: "If the box says ‘letter’, you already know the audience is one person and the register is personal." },
        { heading: "Reading the two sources: beginning, middle, end",
          paragraphs: [
            "Spend about five minutes on Source A. Read with the questions in mind: what is happening at the beginning, in the middle and at the end? How has the writer tried to make it engaging? Underline language that stands out, and notice where the writer’s feelings change. Then do the same for Source B.",
            "Source B is the nineteenth-century text. Its box reads: ‘Source B is an original letter written in 1854 by a young woman, Charlotte, to her sister Harriet, after an afternoon at the Zoological Gardens in London.’ Form: a personal letter. Audience: one reader, her sister. Purpose: to entertain her and to share her excitement. Read its opening below, then write a five-bullet summary of each source. You will use those summaries for Questions 2 and 4."
          ],
          quote: { text: "My dear Harriet, You will scarcely believe where I have spent this afternoon, and in what company. Aunt Lydia, who declares that fresh air is the only physician she trusts, carried us off after luncheon to the Zoological Gardens, and I confess I have never passed three hours more agreeably in my life. The weather was exceedingly fine. The walks were thronged with ladies in their best bonnets and gentlemen who had plainly come to be looked at rather than to look, and the band played so loudly beside the bear pit that the poor beast sat down and covered its ears. We saw the elephant, who took a bun from my very hand with a trunk as gentle as a kitten; we saw the giraffes, which Aunt Lydia pronounced to be an impossibility; and we saw a camel, which regarded us with such an expression of contempt that Cousin Edward laughed until he was obliged to sit upon a bench.",
            source: "Source B, Charlotte’s letter (1854), Part 1 — original passage written for Ad Astra" },
          tip: "You cannot answer Question 4 unless you know how each writer feels at the start and at the end." }
      ],
      gate: [
        { kind: "mcq", q: "How long is Paper 2, and how many marks is it worth?", options: ["1 hour, 60 marks", "1 hour 45 minutes, 80 marks", "2 hours, 80 marks", "1 hour 45 minutes, 100 marks"], answer: 1,
          feedback: [
            "One hour would not even cover Section B. Paper 2 lasts 1 hour 45 minutes: 13 minutes reading, 47 on Questions 1 to 4, 45 on Question 5.",
            "",
            "Two hours is 15 minutes too long. Paper 2 is 105 minutes. The 80 marks are right.",
            "The time is right, but the marks are not. Section A is 40 and Section B is 40, so the paper is 80 marks."
          ],
          why: "Paper 2 lasts 1 hour 45 minutes and is worth 80 marks: 40 for reading and 40 for writing." },
        { kind: "mcq", q: "Which two kinds of source does Paper 2 give you?", options: ["Two fiction extracts from the twentieth century", "One nineteenth-century non-fiction text and one modern non-fiction text", "Two poems on the same theme", "One fiction extract and one non-fiction extract"], answer: 1,
          feedback: [
            "Fiction belongs to Paper 1. Paper 2 is all non-fiction: real writers writing about real experiences and ideas.",
            "",
            "Poems are studied in English Literature. Paper 2 gives you two non-fiction sources, such as a letter and an article.",
            "Both sources are non-fiction. You may have mixed Paper 2 up with Paper 1, which uses one fiction source."
          ],
          why: "Both sources are non-fiction, linked by topic: one from the nineteenth century and one modern." },
        { kind: "gap", q: "Before you read a source, ask about its form, its audience and its ___.", answer: "purpose", options: ["purpose", "price", "paragraphs"],
          feedback: {
            "price": "The price of a text tells you nothing about how to read it. The third question is purpose: what does the writer want the text to do?",
            "paragraphs": "Counting paragraphs is not one of the three reading questions. The third is purpose: to inform, entertain, persuade or argue."
          },
          why: "Form, audience and purpose are the three questions to ask before you read." }
      ],
      modules: [
        { title: "Match each question to its job",
          task: { kind: "match", q: "Match each Paper 2 question to what it asks you to do.",
            pairs: [
              ["Question 1", "Choose the true statements about the opening of Source A"],
              ["Question 2", "Infer the differences (or similarities) between the two sources"],
              ["Question 3", "Analyse how one writer uses language"],
              ["Question 4", "Compare the writers’ perspectives and comment on their methods"],
              ["Question 5", "Write your own non-fiction, giving your point of view"]
            ] },
          levels: {
            support: { steps: ["Questions 1 to 4 are reading; Question 5 is writing.", "Question 1 is the quickest: true statements about Source A only.", "Question 2 is the first one that uses both sources: inference.", "Question 3 is language in one source; Question 4 is perspectives across both."],
              example: { q: "Which questions use both sources, and which use only one?", steps: ["Question 1 names lines in Source A only.", "Question 3 names lines in one source only.", "Questions 2 and 4 ask about both."], answer: "Questions 2 and 4 use both sources; Questions 1 and 3 use one." } },
            core: { hint: "Language is Question 3; perspectives are Question 4. Both sources appear in the even-numbered questions." },
            stretch: { extend: "Explain why Question 4 needs the skills from both Question 2 and Question 3." }
          },
          explain: "Say, in one sentence, how you can tell which questions use both sources.",
          why: "Q1 finds true statements, Q2 infers across both sources, Q3 analyses language, Q4 compares perspectives, and Q5 is your own writing." },
        { title: "Plan your time",
          task: { kind: "order", q: "Put the stages of the exam in the order you should do them.",
            items: ["Read the questions and both sources (13 minutes)", "Question 1: true statements (2 minutes)", "Question 2: inference (10 minutes)", "Question 3: language (15 minutes)", "Question 4: perspectives (20 minutes)", "Question 5: plan, write and check (45 minutes)"] },
          levels: {
            support: { steps: ["Reading always comes before answering.", "The reading questions go in number order, and the time grows with the marks.", "Section B, Question 5, comes last and takes the longest."],
              example: { q: "Order these steps for a homework essay: write it, plan it, read the task, check it.", steps: ["You must know the task first.", "Then plan, then write.", "Checking is always last."], answer: "Read the task, plan it, write it, check it." } },
            core: { hint: "Thirteen minutes of reading first, then 2, 10, 15, 20, and finally 45." },
            stretch: { extend: "Some pupils spend 20 minutes on Question 2 and run out of time for Question 4. Explain, using the marks, why that is a bad trade." }
          },
          explain: "Explain why Question 4 gets ten times as long as Question 1.",
          why: "Read (13), then Questions 1 to 4 (2, 10, 15, 20), then Question 5 (45): 105 minutes, which is 1 hour 45 minutes." },
        { title: "Form, audience, purpose: Source B",
          task: { kind: "mcq", q: "Source B is a letter from Charlotte to her sister Harriet, written in 1854. Which line describes its form, audience and purpose best?",
            options: ["A newspaper report for the general public, written to inform", "A personal letter to one reader, written to entertain and share excitement", "A speech to a large audience, written to persuade", "A guidebook for tourists, written to advise"], answer: 1,
            feedback: [
              "A report is written for many readers and keeps the writer out of it. This text begins ‘My dear Harriet’ and is full of ‘I’: one writer, one reader.",
              "",
              "A speech is spoken to many listeners. Nothing here addresses a crowd; Charlotte writes to one person she knows well.",
              "A guidebook advises strangers what to see and how to get there. Charlotte is telling her sister what she saw and how it felt."
            ] },
          levels: {
            support: { steps: ["Look at the first words of the source: who is being spoken to?", "Count how often the writer says ‘I’ and ‘we’. A personal voice points to a personal form.", "Ask what the writer wants her reader to feel."],
              example: { q: "Source A begins ‘It is nine o’clock on a wet Saturday’ and is published on a travel website. What are its form, audience and purpose?", steps: ["Published on a website: an article.", "A travel website: adults planning days out.", "A personal story, told to amuse and make us think."], answer: "Form: online article; audience: adults, especially parents; purpose: to entertain and to make the reader think." } },
            core: { hint: "The box says ‘letter’ and ‘to her sister’. How many readers does that give you?" },
            stretch: { extend: "Charlotte’s letter was private, yet we read it in an exam. Explain how knowing the original audience changes how you judge her tone." }
          },
          explain: "Say which single word in the introduction box told you the form, and which told you the audience.",
          why: "A letter to a sister has one reader and a personal register. Charlotte’s purpose is to entertain Harriet and share her delight." }
      ]
    },

    /* ───────────────────────── 2 ───────────────────────── */
    { key: "q1-q2-infer", n: 2,
      title: "Questions 1 and 2: true statements, then inference",
      lead: "You will pick the four true statements quickly and accurately, then infer what the two sources suggest about their differences, in comparative paragraphs.",
      covers: [2, 6],
      pretext: {
        words: [
          { word: "statement", means: "a sentence that says something is the case", sentence: "Read each statement slowly before you decide if it is true." },
          { word: "shade", means: "fill in a box to show your choice", sentence: "Shade the box beside each true statement." },
          { word: "infer", means: "work out what the writer suggests but does not say", sentence: "From the worn grass, you can infer that the tiger paces every day." },
          { word: "comparative", means: "showing how two things differ or are alike", sentence: "A comparative paragraph talks about Source A and then Source B." },
          { word: "evidence", means: "words from the text that prove your point", sentence: "Give a short quotation as evidence for every inference." }
        ],
        passage: [
          "Question 1 is worth four marks and takes about two minutes.",
          "It asks about the opening lines of Source A.",
          "You read eight statements.",
          "Four are true and four are not.",
          "Shade the box beside each true statement.",
          "If you make a mistake, cross out the whole box.",
          "Question 2 is worth eight marks and takes about ten minutes.",
          "It asks what you can infer about the differences between the two sources.",
          "To infer is to read between the lines.",
          "Find a detail in Source A and say what it suggests.",
          "Then find a different detail in Source B and say what that suggests.",
          "Write two or three comparative paragraphs."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "جملة تقول إن شيئاً ما صحيح (statement)",
            "ظلّل المربّع لتُظهر اختيارك (shade)",
            "استنتج ما يُلمّح إليه الكاتب ولا يقوله مباشرة (infer)",
            "يُظهر كيف يختلف شيئان أو يتشابهان (comparative)",
            "كلمات من النص تثبت وجهة نظرك (evidence)"
          ],
          "passage": [
            "السؤال 1 يساوي أربع علامات ويستغرق نحو دقيقتين.",
            "وهو يسأل عن الأسطر الأولى من النص A.",
            "تقرأ ثماني عبارات (statements).",
            "أربع منها صحيحة وأربع ليست كذلك.",
            "ظلّل المربّع بجانب كل عبارة صحيحة.",
            "إذا أخطأت، فاشطب المربّع كله.",
            "السؤال 2 يساوي ثماني علامات ويستغرق نحو عشر دقائق.",
            "وهو يسأل عمّا يمكنك أن تستنتجه (infer) عن الفروق بين النصّين.",
            "أن تستنتج يعني أن تقرأ ما بين السطور.",
            "ابحث عن تفصيلة في النص A وقل ما الذي تُلمّح إليه.",
            "ثم ابحث عن تفصيلة مختلفة في النص B وقل ما الذي تُلمّح إليه.",
            "اكتب فقرتَين أو ثلاث فقرات للمقارنة."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "zdanie, które mówi, że coś jest prawdą (statement)",
            "zamalować kratkę, żeby pokazać swój wybór (shade)",
            "domyślić się tego, co autor sugeruje, ale nie mówi wprost (infer)",
            "pokazujący, czym dwie rzeczy się różnią albo w czym są podobne (comparative)",
            "słowa z tekstu, które dowodzą twojej tezy (evidence)"
          ],
          "passage": [
            "Pytanie 1 jest warte cztery punkty i zajmuje około dwóch minut.",
            "Dotyczy pierwszych linijek tekstu A (Source A).",
            "Czytasz osiem stwierdzeń.",
            "Cztery są prawdziwe, a cztery nie.",
            "Zamaluj kratkę obok każdego prawdziwego stwierdzenia.",
            "Jeśli się pomylisz, przekreśl całą kratkę.",
            "Pytanie 2 jest warte osiem punktów i zajmuje około dziesięciu minut.",
            "Pyta, co możesz wywnioskować o różnicach między dwoma tekstami.",
            "Wnioskować (infer) to czytać między wierszami.",
            "Znajdź szczegół w tekście A i powiedz, co on sugeruje.",
            "Potem znajdź inny szczegół w tekście B i powiedz, co tamten sugeruje.",
            "Napisz dwa lub trzy akapity porównawcze."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma frase que diz que algo é assim (statement, afirmação)",
            "preencher uma caixa para mostrar a sua escolha (shade)",
            "descobrir o que o escritor sugere mas não diz (infer, inferir)",
            "que mostra como duas coisas são diferentes ou parecidas (comparative, comparativo)",
            "palavras do texto que provam o que você diz (evidence, prova)"
          ],
          "passage": [
            "A Pergunta 1 vale quatro pontos e leva cerca de dois minutos.",
            "Pergunta sobre as primeiras linhas da Fonte A (Source A).",
            "Você lê oito afirmações.",
            "Quatro são verdadeiras e quatro não são.",
            "Preencha a caixa ao lado de cada afirmação verdadeira.",
            "Se errar, risque a caixa inteira.",
            "A Pergunta 2 vale oito pontos e leva cerca de dez minutos.",
            "Pergunta o que você consegue inferir sobre as diferenças entre as duas fontes.",
            "Inferir é ler nas entrelinhas.",
            "Encontre um detalhe na Fonte A e diga o que ele sugere.",
            "Depois encontre um detalhe diferente na Fonte B e diga o que esse sugere.",
            "Escreva dois ou três parágrafos comparativos."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "weedh sheegaysa in wax uun run yahay (statement)",
            "sanduuq madoobee si aad doorashadaada u muujiso (shade)",
            "garo waxa qoraagu tilmaamayo laakiin aan si toos ah u sheegin (infer)",
            "muujinaya sida laba wax u kala duwan yihiin ama isugu eg yihiin (comparative)",
            "erayo qoraalka ka soo baxay oo caddaynaya hadalkaaga (evidence)"
          ],
          "passage": [
            "Su'aasha 1 waxay leedahay afar dhibcood, waxayna qaadataa qiyaastii laba daqiiqo.",
            "Waxay ku saabsan tahay xariiqyada furitaanka ee Source A.",
            "Waxaad akhrisaa siddeed weedhood (statements).",
            "Afar run ayay yihiin, afarna run ma aha.",
            "Madoobee sanduuqa ag yaal weedh kasta oo run ah.",
            "Haddii aad khalad samayso, sanduuqa oo dhan xariiq ku jar.",
            "Su'aasha 2 waxay leedahay siddeed dhibcood, waxayna qaadataa qiyaastii toban daqiiqo.",
            "Waxay ku weydiinaysaa waxa aad garan karto (infer) ee ku saabsan kala duwanaanshaha labada qoraal.",
            "In wax la garto (infer) waa in la akhriyo waxa khadadka dhexdooda ku qarsoon.",
            "Faahfaahin ka hel Source A oo sheeg waxa ay tilmaamayso.",
            "Kadibna faahfaahin kale ka hel Source B oo sheeg waxa taasi tilmaamayso.",
            "Qor laba ama saddex baaragaraaf oo isbarbardhig ah (comparative)."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "речення, яке говорить, що щось є так (statement)",
            "зафарбувати квадратик, щоб показати свій вибір (shade)",
            "зрозуміти те, на що автор натякає, але не говорить прямо (infer)",
            "такий, що показує, чим дві речі відрізняються або схожі (comparative)",
            "слова з тексту, які доводять вашу думку (evidence)"
          ],
          "passage": [
            "Question 1 дає чотири бали і займає близько двох хвилин.",
            "Воно стосується перших рядків Source A.",
            "Ви читаєте вісім тверджень (statements).",
            "Чотири правдиві, а чотири — ні.",
            "Зафарбуйте квадратик біля кожного правдивого твердження.",
            "Якщо ви помилилися, перекресліть увесь квадратик.",
            "Question 2 дає вісім балів і займає близько десяти хвилин.",
            "Воно запитує, що ви можете зробити висновком (infer) про відмінності між двома текстами.",
            "Робити висновок (infer) означає читати між рядками.",
            "Знайдіть деталь у Source A і скажіть, на що вона натякає.",
            "Потім знайдіть іншу деталь у Source B і скажіть, на що натякає вона.",
            "Напишіть два або три порівняльні абзаци."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایک جملہ جو کہتا ہے کہ کوئی بات ایسی ہے (statement)",
            "اپنا انتخاب دکھانے کے لیے خانہ بھرنا (shade)",
            "وہ بات معلوم کرنا جو مصنف اشارے سے کہتا ہے مگر صاف نہیں کہتا (infer)",
            "یہ دکھانا کہ دو چیزیں کیسے الگ یا ایک جیسی ہیں (comparative)",
            "متن کے وہ لفظ جو آپ کی بات ثابت کرتے ہیں (evidence)"
          ],
          "passage": [
            "سوال 1 کے چار نمبر ہیں اور اس میں تقریباً دو منٹ لگتے ہیں۔",
            "یہ Source A کی شروع کی سطروں کے بارے میں پوچھتا ہے۔",
            "آپ آٹھ بیان (statements) پڑھتے ہیں۔",
            "چار سچ ہیں اور چار نہیں۔",
            "ہر سچے بیان کے ساتھ والا خانہ بھریں۔",
            "اگر غلطی ہو جائے تو پورے خانے پر کاٹا لگا دیں۔",
            "سوال 2 کے آٹھ نمبر ہیں اور اس میں تقریباً دس منٹ لگتے ہیں۔",
            "یہ پوچھتا ہے کہ دونوں ماخذوں کے فرق کے بارے میں آپ کیا اخذ (infer) کر سکتے ہیں۔",
            "اخذ کرنے کا مطلب ہے سطروں کے بیچ میں پڑھنا۔",
            "Source A میں ایک تفصیل ڈھونڈیں اور بتائیں کہ وہ کس بات کا اشارہ کرتی ہے۔",
            "پھر Source B میں ایک الگ تفصیل ڈھونڈیں اور بتائیں کہ وہ کس بات کا اشارہ کرتی ہے۔",
            "موازنے کے دو یا تین پیراگراف لکھیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "Question 1: shade the true statements",
          paragraphs: [
            "Question 1 is worth 4 marks and should take about 2 minutes. It names some lines at the start of Source A and gives you a list of eight statements. Four are true and four are not. You shade the box beside each statement you think is true, and you choose exactly four. If you shade a box by mistake, put a cross through the whole box so the marker knows you have changed your mind.",
            "The wrong statements are written to look right. Watch for a changed detail (a number, a time, a colour), a statement that is true later in the source but not in the lines you were given, and a statement that is an opinion the writer never gives. Put your finger on the sentence that proves each true statement before you shade.",
            "From 2026, Paper 1’s Question 1 uses the same instructions as this one, so the habit you build here pays twice."
          ],
          worked: { q: "Which of these statements about the opening of Source A are true? A: The writer arrives at the park in the afternoon. B: Her daughter has a plastic giraffe. C: There are twenty meerkats in the first enclosure.",
            steps: ["A changes a detail: the text says “It is nine o’clock” and the family is waiting for the park to open, so it is morning, not afternoon.", "B matches the text: “She has a plastic giraffe in one hand”.", "C matches the text: “Twenty of them sit upright on a mound of sand”."],
            answer: "B and C are true. A is a distractor that changes the time." },
          tip: "Count your shaded boxes before you move on. The instructions say a maximum of four." },
        { heading: "Question 2: what can you infer?",
          paragraphs: [
            "Question 2 is worth 8 marks and should take about 10 minutes. It is the first question that uses both sources. From 2026 it is always worded with the verb ‘infer’: ‘What can you infer about the differences between…’ (or, sometimes, the similarities). The task is to read between the lines of both texts and show what they suggest about the thing the question names.",
            "Inference is not retrieval. If you write ‘Source A says the enclosure is the size of two football pitches’, you have repeated the text. If you write ‘the sign boasts about the size of the enclosure, which suggests the park expects visitors to worry about space’, you have inferred. Read the second part of Source A now, and notice how much the writer suggests without saying it."
          ],
          quote: { text: "Then we reach the tiger. The sign says his name is Rajan and that his enclosure is the size of two football pitches. It does not feel that way. He is walking the same line along the fence, nine paces one way and nine paces back, and the grass along that line has been worn to bare earth. His shoulders roll under his skin like something moving beneath a blanket. Every few paces he lifts his head and stares, not at us but through us, at a point far beyond the car park. A boy next to me bangs on the glass. The tiger does not even blink. I look at the list in my daughter’s hand. Tigers: tick. We have seen one. But what, exactly, have we seen? On the way out I buy her a toy tiger, a soft one, and tell myself that at least she will remember him. I am not sure that is a good thing.",
            source: "Source A, ‘Behind the Glass’, Part 2 — original passage written for Ad Astra" },
          tip: "After every quotation ask: ‘which suggests…?’ If you cannot finish that sentence, you have not inferred yet." },
        { heading: "Build a comparative paragraph",
          paragraphs: [
            "Draw a quick table with two columns, Source A and Source B, and note what each source tells you about the thing the question names. Then choose two or three pairs of points that you can develop. For each pair, write: a point about Source A with a short quotation; what you can infer from it; a comparative point about Source B (‘However, in Source B…’) with a quotation; and what you can infer from that.",
            "When you check your answer, use your teachers’ peer-marking questions. Are you inferring, rather than repeating what the writer has already said? Are you using textual references to support each point? Are the quotations relevant? Are you exploring the differences in enough detail? Here is the second part of Source B, so that you can practise on the two big cats."
          ],
          quote: { text: "But the lions, Harriet! I must tell you of the lions. They are kept in a long house of iron bars, and the keeper, a stout fellow with a whip he never uses, told us that one of them was brought from Africa not six months since. When he roared the whole house trembled, and a lady beside me fainted clean away and had to be revived with salts. I did not faint. I stood as near as I was permitted and looked into the creature’s great golden eyes, and I thought how wonderful it is that we may stand in the middle of London and see the wild world brought to our very feet, caged and quiet and safe, for the price of a shilling. Aunt Lydia says it is the triumph of the age. Edward says the lion looked bored. I think they are both right, though I shall not tell either of them so. Your most affectionate sister, Charlotte",
            source: "Source B, Charlotte’s letter (1854), Part 2 — original passage written for Ad Astra" },
          worked: { q: "Write one comparative paragraph about how the two big cats are kept.",
            steps: ["Point about Source A with a quotation: the tiger is “walking the same line along the fence”.", "Infer: the enclosure may be large on paper, but the tiger behaves like an animal in a very small space, so the park’s promise does not match what visitors see.", "Comparative point about Source B: the lions are kept “in a long house of iron bars”.", "Infer: the Victorian animals were kept in plain cages close to the crowd, and nobody expected anything else; the writer finds it wonderful rather than troubling."],
            answer: "In Source A the tiger is “walking the same line along the fence”, which suggests that, whatever the sign says about size, the animal behaves as if it has almost no room. However, in Source B the lions are kept “in a long house of iron bars”. This suggests that Victorian visitors expected animals to be caged and close, and Charlotte sees nothing wrong in it: for her the bars are part of the wonder." },
          tip: "Use the paragraph frame once, then again with a new pair of details. Two developed pairs beat four thin ones." }
      ],
      gate: [
        { kind: "mcq", q: "How many statements are true in Question 1, and how do you show them?", options: ["Two; tick them", "Four; shade the box beside each one", "Eight; underline them", "One; circle it"], answer: 1,
          feedback: [
            "Two is too few. Question 1 is worth 4 marks and you choose four true statements, shading a box for each.",
            "",
            "Eight is the number of statements on the list, not the number that are true. Only four are true, and you shade boxes rather than underline.",
            "There is more than one true statement. Question 1 asks for four, shown by shading a box beside each."
          ],
          why: "Four of the eight statements are true. You shade the box beside each one." },
        { kind: "gap", q: "In Question 2 you ___ what the sources suggest, rather than repeating what they say.", answer: "infer", options: ["infer", "copy", "shade"],
          feedback: {
            "copy": "Copying the text is retrieval, and it earns little in Question 2. You infer: you work out what the details suggest.",
            "shade": "Shading boxes belongs to Question 1. Question 2 asks you to infer, which means to read between the lines."
          },
          why: "Question 2 always uses the word ‘infer’: say what the details suggest." },
        { kind: "mcq", q: "How many marks is Question 2 worth?", options: ["4", "8", "12", "16"], answer: 1,
          feedback: [
            "Four marks is Question 1. Question 2 asks you to write comparative paragraphs, so it carries more: 8 marks.",
            "",
            "Twelve marks is Question 3, the language analysis. Question 2 is worth 8, about ten minutes of writing.",
            "Sixteen marks is Question 4, the comparison of perspectives. Question 2 is worth 8."
          ],
          why: "Question 2 is worth 8 marks and takes about 10 minutes." }
      ],
      modules: [
        { title: "Question 1 practice: the true statement",
          task: { kind: "mcq", q: "Question 1 practice. Read Source A, Part 1. Which ONE of these statements is true?",
            options: ["The family has driven for two hours to reach the park.", "The writer’s daughter is nine years old.", "The gates open at noon.", "The first enclosure they see is the tiger."], answer: 0,
            feedback: [
              "",
              "Nine is the time on the clock, not the daughter’s age. The text says “My daughter, who is six”. One detail has been swapped for another nearby.",
              "The text opens at “nine o’clock”. Noon is a changed detail. Put your finger on the sentence with the time in it.",
              "The tiger comes later, in Part 2. The first enclosure is “the meerkats”. This statement is true of the wrong lines."
            ] },
          levels: {
            support: { steps: ["Underline the key detail in each statement: two hours, nine years old, noon, tiger.", "Find each detail in Part 1, or show that it is not there.", "Only one statement is proved by a sentence in the text."],
              example: { q: "Read: “The weather was exceedingly fine.” Which is true? A: It was raining. B: The weather was very good. C: It was snowing.", steps: ["‘Exceedingly fine’ means very good.", "A and C contradict the text."], answer: "B: The weather was very good." } },
            core: { hint: "Two statements take a true number or time and attach it to the wrong thing." },
            stretch: { extend: "Write two more statements about Part 1, one true and one false, that a classmate would find hard to tell apart." }
          },
          explain: "Say which sentence in Part 1 proves your answer, and which single word is wrong in each of the others.",
          why: "“We have driven for two hours to be here.” The daughter is six, the family arrives at nine o’clock, and the meerkats come first." },
        { title: "From detail to inference",
          task: { kind: "match", q: "Match each detail from the sources to what it suggests.",
            pairs: [
              ["“the grass along that line has been worn to bare earth”", "The tiger has paced this same route for a very long time."],
              ["“the poor beast sat down and covered its ears”", "The band is painfully loud, even for the bear."],
              ["“for the price of a shilling”", "Seeing wild animals was a cheap, everyday treat for Victorians."],
              ["“We have driven for two hours to be here.”", "The family treats the visit as a special occasion worth real effort."]
            ] },
          levels: {
            support: { steps: ["Read the detail and ask: what must be true for this to happen?", "Worn grass does not appear in a day. Covered ears mean noise. A shilling was a small sum.", "Match each detail to the inference that it proves, not to one it merely sits near."],
              example: { q: "What can you infer from “She has a plastic giraffe in one hand and a list in the other”?", steps: ["A list means she planned the day.", "A toy means she is young and excited."], answer: "The daughter is young, excited and has planned exactly what she wants to see." } },
            core: { hint: "Ask ‘how long?’, ‘how loud?’, ‘how much?’ and ‘how far?’ of the four details." },
            stretch: { extend: "Choose one pair and write it as a full Question 2 sentence: quotation, then ‘which suggests…’." }
          },
          explain: "Choose one detail and say, in one sentence, how you got from the words to the inference.",
          why: "An inference is what the detail proves without saying: time (worn grass), noise (covered ears), cost (a shilling), effort (a two-hour drive)." },
        { title: "Question 2 practice paragraphs",
          task: { kind: "written", q: "Question 2 practice. Read both sources. What can you infer about the differences between the wildlife park in Source A and the Zoological Gardens in Source B? Use details from both sources.", marks: 8,
            criteria: [
              "I make a point about Source A with a short, relevant quotation.",
              "I say what that detail suggests (I infer; I do not repeat).",
              "I make a comparative point about Source B, linked with ‘However’, ‘Whereas’ or ‘Similarly’.",
              "I say what the Source B detail suggests.",
              "I write two or three comparative paragraphs about the two places."
            ],
            model: "In Source A the park is built for crowds: the writer queues with “two hundred other people” and passes “the gift shop and the café” before she sees an animal. This suggests a modern business that sells the day out as much as the animals. However, in Source B the Gardens are a social event. The walks are “thronged with ladies in their best bonnets” and gentlemen who have “come to be looked at rather than to look”, which suggests Victorians went partly to be seen, and the animals were only half the point.\n\nThe animals are also kept differently. In Source A the tiger’s enclosure is “the size of two football pitches”, which suggests the park wants visitors to believe the animals have space, even if the tiger’s pacing suggests otherwise. Whereas in Source B the lions live in “a long house of iron bars” and a keeper carries “a whip he never uses”, which suggests the Victorian Gardens made no attempt to hide that the animals were caged and controlled." },
          levels: {
            support: { steps: ["Make a two-column table: Source A park, Source B Gardens. Note crowds, buildings, how animals are kept, prices.", "Choose two pairs of details you can develop.", "Write: point about A + quotation; ‘which suggests…’; ‘However, in Source B…’ + quotation; ‘which suggests…’.", "Check: have you inferred, not repeated?"],
              example: { q: "What can you infer about the differences between the two writers’ companions?", steps: ["Source A: the companion is a six-year-old with a list.", "Infer: the writer sees the day through a child’s eyes.", "Source B: Aunt Lydia ‘declares that fresh air is the only physician she trusts’.", "Infer: an opinionated adult is in charge, and the visit is as much for health as for fun."], answer: "In Source A the writer’s companion is her daughter, “who is six”, which suggests the day is planned around a child’s excitement. However, in Source B the party is led by Aunt Lydia, who believes fresh air is “the only physician she trusts”, which suggests the Victorian outing was partly a health cure run by a confident adult." } },
            core: { hint: "Start with the crowds (a queue versus bonnets), then with how the big cats are kept." },
            stretch: { extend: "Add a third paragraph on what each place promises its visitors: a sign about a day you will never forget, against a shilling for the wild world. What does each promise suggest?" }
          },
          explain: "Say which pair of details you compared first, and why they made the clearest contrast.",
          why: "A strong Question 2 answer pairs a detail from each source, infers from both, and uses comparative connectives to keep the two places side by side." }
      ]
    },

    /* ───────────────────────── 3 ───────────────────────── */
    { key: "q3-language", n: 3,
      title: "Question 3: how the writer uses language",
      lead: "You will box the lines, find the focus of the question, zoom in on word choices and techniques, and write two developed paragraphs about their effects.",
      covers: [3, 6],
      pretext: {
        words: [
          { word: "analyse", means: "break down how the writer’s choices work", sentence: "Question 3 asks you to analyse the language in a few lines." },
          { word: "noun phrase", means: "a group of words built around a noun", sentence: "‘A long house of iron bars’ is a noun phrase." },
          { word: "active verb", means: "a verb that shows the subject doing something", sentence: "‘Stares’ and ‘bangs’ are active verbs." },
          { word: "adverbial phrase", means: "words that tell you how, when or where", sentence: "‘Every few paces’ is an adverbial phrase of time." },
          { word: "zoom in", means: "look closely at one word and what it suggests", sentence: "Zoom in on the word ‘worn’ and ask what it suggests." },
          { word: "effect", means: "what the words make the reader think or feel", sentence: "Always explain the effect of the words you quote." }
        ],
        passage: [
          "Question 3 is worth twelve marks.",
          "Spend about fifteen minutes on it.",
          "It points you to some lines in one source.",
          "Draw a box around those lines.",
          "Underline the focus of the question.",
          "Find words and phrases that fit that focus.",
          "Name the type of word or the technique.",
          "A noun phrase, an active verb, a simile, personification.",
          "Zoom in on one word and ask what it suggests.",
          "Then add a second technique to develop your point.",
          "Aim for two developed paragraphs.",
          "Every point must answer the question."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "فكّك كيف تعمل اختيارات الكاتب (analyse)",
            "مجموعة كلمات مبنيّة حول اسم (noun phrase)",
            "فعل يُظهر الفاعل وهو يفعل شيئاً (active verb)",
            "كلمات تخبرك كيف أو متى أو أين (adverbial phrase)",
            "انظر عن قرب إلى كلمة واحدة وما تُلمّح إليه (zoom in)",
            "ما تجعل الكلمات القارئ يفكّر فيه أو يشعر به (effect)"
          ],
          "passage": [
            "السؤال 3 يساوي اثنتي عشرة علامة.",
            "اقضِ فيه نحو خمس عشرة دقيقة.",
            "وهو يوجّهك إلى بعض الأسطر في أحد النصّين.",
            "ارسم مربّعاً حول تلك الأسطر.",
            "ضع خطاً تحت محور السؤال.",
            "ابحث عن كلمات وعبارات تناسب هذا المحور.",
            "سمِّ نوع الكلمة أو الأسلوب.",
            "عبارة اسمية (noun phrase)، أو فعل نشط (active verb)، أو تشبيه (simile)، أو تشخيص (personification).",
            "ركّز على كلمة واحدة واسأل: ما الذي تُلمّح إليه؟",
            "ثم أضف أسلوباً ثانياً لتطوير فكرتك.",
            "اجعل هدفك فقرتَين مطوّرتَين.",
            "كل فكرة يجب أن تجيب عن السؤال."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "rozłożyć na części to, jak działają wybory autora (analyse)",
            "grupa słów zbudowana wokół rzeczownika (noun phrase)",
            "czasownik, który pokazuje, że podmiot coś robi (active verb)",
            "słowa, które mówią jak, kiedy albo gdzie (adverbial phrase)",
            "przyjrzeć się z bliska jednemu słowu i temu, co ono sugeruje (zoom in)",
            "to, co słowa każą czytelnikowi myśleć lub czuć (effect)"
          ],
          "passage": [
            "Pytanie 3 jest warte dwanaście punktów.",
            "Poświęć na nie około piętnastu minut.",
            "Wskazuje ci kilka linijek w jednym tekście.",
            "Obrysuj te linijki ramką.",
            "Podkreśl to, na czym skupia się pytanie.",
            "Znajdź słowa i wyrażenia, które pasują do tego tematu.",
            "Nazwij rodzaj słowa albo technikę.",
            "Fraza rzeczownikowa (noun phrase), czasownik w stronie czynnej (active verb), porównanie (simile), personifikacja.",
            "Przyjrzyj się z bliska jednemu słowu i zapytaj, co ono sugeruje.",
            "Potem dodaj drugą technikę, żeby rozwinąć swoją myśl.",
            "Celuj w dwa rozwinięte akapity.",
            "Każda uwaga musi odpowiadać na pytanie."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "explicar em detalhe como funcionam as escolhas do escritor (analyse, analisar)",
            "um grupo de palavras construído à volta de um substantivo (noun phrase)",
            "um verbo que mostra o sujeito a fazer alguma coisa (active verb, verbo ativo)",
            "palavras que dizem como, quando ou onde (adverbial phrase)",
            "olhar de perto para uma palavra e para o que ela sugere (zoom in)",
            "o que as palavras fazem o leitor pensar ou sentir (effect, efeito)"
          ],
          "passage": [
            "A Pergunta 3 vale doze pontos.",
            "Use cerca de quinze minutos nela.",
            "Ela indica algumas linhas de uma das fontes.",
            "Desenhe uma caixa à volta dessas linhas.",
            "Sublinhe o foco da pergunta.",
            "Encontre palavras e expressões que encaixem nesse foco.",
            "Diga o nome do tipo de palavra ou da técnica.",
            "Um noun phrase, um verbo ativo, uma comparação (simile), uma personificação.",
            "Aproxime-se de uma palavra (zoom in) e pergunte o que ela sugere.",
            "Depois acrescente uma segunda técnica para desenvolver o seu ponto.",
            "Tente escrever dois parágrafos bem desenvolvidos.",
            "Cada ponto tem de responder à pergunta."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "kala fur sida doorashooyinka qoraagu u shaqeeyaan (analyse)",
            "koox erayo ah oo magac (noun) ku dhisan (noun phrase)",
            "fal muujinaya in mawduuca weedha wax samaynayo (active verb)",
            "erayo kuu sheegaya sida, goorta ama meesha (adverbial phrase)",
            "hal eray si dhow u fiiri iyo waxa uu tilmaamayo (zoom in)",
            "waxa erayadu akhristaha ka dhigaan inuu ka fikiro ama dareemo (effect)"
          ],
          "passage": [
            "Su'aasha 3 waxay leedahay laba iyo toban dhibcood.",
            "Qiyaastii shan iyo toban daqiiqo ku qaado.",
            "Waxay kuu tilmaamaysaa xariiqyo ku jira hal qoraal.",
            "Sanduuq ku wareeji xariiqyadaas.",
            "Hoosta ka xariiq waxa su'aashu diiradda saarayso (focus).",
            "Hel erayo iyo weedho ku habboon diiraddaas.",
            "Magacaw nooca erayga ama farsamada (technique).",
            "Waxay noqon karaan noun phrase, active verb, simile ama personification.",
            "Hal eray si dhow u fiiri (zoom in) oo is weydii waxa uu tilmaamayo.",
            "Kadibna farsamo labaad ku dar si aad hadalkaaga u horumariso.",
            "Ku dadaal laba baaragaraaf oo horumarsan.",
            "Hadal kasta oo aad qorto waa inuu su'aasha ka jawaabo."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "розібрати, як працюють вибори автора (analyse)",
            "група слів, побудована навколо іменника (noun phrase)",
            "дієслово, яке показує, що підмет щось робить (active verb)",
            "слова, які говорять вам як, коли або де (adverbial phrase)",
            "уважно придивитися до одного слова і до того, на що воно натякає (zoom in)",
            "те, що слова змушують читача думати або відчувати (effect)"
          ],
          "passage": [
            "Question 3 дає дванадцять балів.",
            "Витратьте на нього близько п’ятнадцяти хвилин.",
            "Воно вказує вам на певні рядки в одному тексті.",
            "Обведіть ці рядки рамкою.",
            "Підкресліть, на чому зосереджене запитання.",
            "Знайдіть слова та фрази, які відповідають цьому фокусу.",
            "Назвіть тип слова або прийом.",
            "Іменникова фраза (noun phrase), активне дієслово (active verb), порівняння (simile), персоніфікація (personification).",
            "Придивіться до одного слова (zoom in) і запитайте, на що воно натякає.",
            "Потім додайте другий прийом, щоб розвинути свою думку.",
            "Прагніть написати два розвинені абзаци.",
            "Кожна думка має відповідати на запитання."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "یہ کھول کر دیکھنا کہ مصنف کے انتخاب کیسے کام کرتے ہیں (analyse)",
            "لفظوں کا ایک گروہ جو کسی اسم کے گرد بنا ہو (noun phrase)",
            "ایسا فعل جو دکھائے کہ فاعل خود کچھ کر رہا ہے (active verb)",
            "ایسے لفظ جو بتائیں کیسے، کب یا کہاں (adverbial phrase)",
            "ایک لفظ کو قریب سے دیکھنا اور یہ کہ وہ کس بات کا اشارہ کرتا ہے (zoom in)",
            "لفظ قاری کو کیا سوچنے یا محسوس کرنے پر لاتے ہیں (effect)"
          ],
          "passage": [
            "سوال 3 کے بارہ نمبر ہیں۔",
            "اس پر تقریباً پندرہ منٹ لگائیں۔",
            "یہ آپ کو ایک ماخذ کی کچھ سطروں کی طرف اشارہ کرتا ہے۔",
            "ان سطروں کے گرد ایک خانہ بنا لیں۔",
            "سوال کے مرکزی نکتے کے نیچے لکیر لگائیں۔",
            "ایسے لفظ اور فقرے ڈھونڈیں جو اس نکتے پر بیٹھتے ہوں۔",
            "لفظ کی قسم یا تکنیک کا نام لیں۔",
            "اسمی فقرہ (noun phrase)، فاعلی فعل (active verb)، تشبیہ (simile)، تجسیم (personification)۔",
            "ایک لفظ کو قریب سے دیکھیں (zoom in) اور پوچھیں کہ وہ کس بات کا اشارہ کرتا ہے۔",
            "پھر اپنی بات کو آگے بڑھانے کے لیے دوسری تکنیک جوڑیں۔",
            "دو مکمل پیراگرافوں کا ہدف رکھیں۔",
            "ہر نکتہ سوال کا جواب دینے والا ہونا چاہیے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "What Question 3 asks",
          paragraphs: [
            "Question 3 is worth 12 marks and should take about 15 minutes. It names a few lines in one source and asks how the writer uses language to describe something or to make something seem a particular way: ‘How does the writer use language to describe the tiger?’ The first thing to do is draw a box around the lines, so you do not drift outside them. The second is to underline the focus of the question: here, the tiger.",
            "This is a language question, not a structure question. You are looking at words and phrases, techniques and sentence forms, and explaining what they suggest. Everything you underline in the box should fit the focus. A beautiful phrase about the car park earns nothing if the question is about the tiger."
          ],
          tip: "Roughly a minute a mark, with a little extra: 12 marks, 15 minutes, two developed paragraphs." },
        { heading: "Your language toolkit",
          paragraphs: [
            "Your teachers’ toolkit for Question 3 has six tools. Noun phrases: a group of words built around a noun, such as “a point far beyond the car park”, which tells you where the tiger is really looking. Active verbs: the tiger “lifts his head and stares”, and a boy “bangs on the glass”; active verbs carry energy and attitude. Adverbial phrases tell you how, when or where: “Every few paces”, “along the fence”.",
            "Then the figurative tools. A metaphor describes one thing as another. A simile compares with ‘like’ or ‘as’: the tiger’s shoulders roll “like something moving beneath a blanket”, so the animal seems hidden and uneasy, as if even his body is covered up. Personification gives human actions or feelings to something that is not human: in Source B the camel looks at the party “with such an expression of contempt”, as though it were a snobbish gentleman.",
            "Sentence forms count as language too. “Tigers: tick.” is two words and a colon. After long, careful sentences about the pacing animal, its shortness is cold and blunt, like ticking a box."
          ],
          quote: { text: "He is walking the same line along the fence, nine paces one way and nine paces back, and the grass along that line has been worn to bare earth. His shoulders roll under his skin like something moving beneath a blanket. Every few paces he lifts his head and stares, not at us but through us, at a point far beyond the car park.",
            source: "Source A, ‘Behind the Glass’, Part 2 — original passage written for Ad Astra" },
          tip: "Name a tool only when you can say what it does. A label with no effect earns very little." },
        { heading: "Quotation explosion: zoom in, then develop",
          paragraphs: [
            "A quotation explosion is your teachers’ name for this: write the quotation in the middle of the page, circle the words that carry the most meaning, and write what each one suggests around it. Then build the paragraph. Your checklist, from the mid-unit lesson: What is the writer showing or feeling? Evidence. Technique or method. Analyse: zoom in on a word. Develop the analysis with a second technique or method.",
            "The sentence frames your teachers model are simple and strong: ‘The phrase … portrays the tiger as …’, ‘The writer uses the word … as it connotes …’, ‘Furthermore, the single-syllable verb … implies …’. Use them until they are yours."
          ],
          worked: { q: "Explode the quotation “nine paces one way and nine paces back” and write it up as the first half of a paragraph.",
            steps: ["Focus: the tiger. The writer shows him as trapped and mechanical.", "Technique: the repetition of ‘nine’ inside two adverbial phrases of direction, ‘one way’ and ‘back’.", "Zoom in: ‘nine’ is exact. Someone has counted, so the walk is the same every time, like a prisoner measuring a cell.", "Develop: add the noun phrase “bare earth”. Grass does not wear away in a day, so the pacing has gone on for months or years."],
            answer: "The writer presents the tiger as trapped in a routine he cannot break. The adverbial phrases “nine paces one way and nine paces back” repeat the exact number, which suggests that the walk never changes and that someone has counted it, like a prisoner measuring a cell. Furthermore, the noun phrase “bare earth” implies that this has gone on for a very long time, since grass does not wear away in a day: the tiger’s whole life is this one line." },
          tip: "Two developed paragraphs, each with a zoom-in and a second technique, score better than five labels." },
        { heading: "Inference or analysis?",
          paragraphs: [
            "Questions 2 and 3 feel similar, because both start from a detail in the text. They are not the same. Inference (Question 2) reads between the lines: it uses textual clues and combines them with what you know to work out what the text suggests. Analysis (Question 3) breaks the text into its parts, asks why the writer made those choices, and supports every interpretation with evidence.",
            "So in Question 2 you might write that the lion house suggests Victorian animals were kept close to the crowd. In Question 3 you would zoom in on the noun phrase “a long house of iron bars”, where ‘iron’ connotes coldness and strength, and the writer lists bars before she ever mentions the lion."
          ],
          tip: "Question 2 asks what the text suggests. Question 3 asks how the words do it." }
      ],
      gate: [
        { kind: "mcq", q: "How many marks is Question 3 worth?", options: ["4", "8", "12", "16"], answer: 2,
          feedback: [
            "Four marks is Question 1, the true statements. Question 3 is a full analysis and carries 12.",
            "Eight marks is Question 2, the inference question. Question 3 is worth 12, about 15 minutes.",
            "",
            "Sixteen marks is Question 4, the comparison. Question 3 is worth 12."
          ],
          why: "Question 3 is worth 12 marks and takes about 15 minutes." },
        { kind: "gap", q: "A group of words built around a noun, such as ‘a wet Saturday in March’, is called a ___ phrase.", answer: "noun", options: ["noun", "verb", "adverbial"],
          feedback: {
            "verb": "A verb phrase is built around an action word. ‘A wet Saturday in March’ has no verb; its centre is the noun ‘Saturday’.",
            "adverbial": "An adverbial phrase tells you how, when or where, such as ‘every few paces’. ‘A wet Saturday in March’ names a thing, so it is a noun phrase."
          },
          why: "A noun phrase is built around a noun: here, ‘Saturday’." },
        { kind: "mcq", q: "Which of these phrases from Source A is a simile?", options: ["“like something moving beneath a blanket”", "“The tiger does not even blink.”", "“Tigers: tick.”", "“nine paces one way and nine paces back”"], answer: 0,
          feedback: [
            "",
            "“The tiger does not even blink.” is a plain statement in a short sentence. Nothing is compared to anything else, and there is no ‘like’ or ‘as’.",
            "“Tigers: tick.” is a two-word sentence with a colon: a sentence form, not a comparison. You have picked a technique, but not the one asked for.",
            "These are adverbial phrases of direction with a repeated number. There is no ‘like’ or ‘as’, so it is not a simile."
          ],
          why: "A simile compares with ‘like’ or ‘as’: the shoulders move like something under a blanket." }
      ],
      modules: [
        { title: "Name the technique",
          task: { kind: "match", q: "Match each quotation from Source A to the type of language it shows.",
            pairs: [
              ["“like something moving beneath a blanket”", "simile"],
              ["“lifts”, “stares”, “bangs”", "active verbs"],
              ["“Every few paces”", "adverbial phrase"],
              ["“a point far beyond the car park”", "noun phrase"]
            ] },
          levels: {
            support: { steps: ["Look for ‘like’ or ‘as’: that is a simile.", "Single action words are verbs; if the subject is doing the action, they are active verbs.", "A phrase that answers ‘when?’ or ‘where?’ is adverbial.", "A phrase that names a thing or place, built around a noun, is a noun phrase."],
              example: { q: "Name the type of language in “a trunk as gentle as a kitten”.", steps: ["It contains ‘as … as’.", "It compares a trunk to a kitten."], answer: "A simile." } },
            core: { hint: "Only one quotation contains ‘like’. Only one is a list of three single words." },
            stretch: { extend: "Choose one quotation and explain its effect in a single sentence, zooming in on one word." }
          },
          explain: "Say what you looked for first in each quotation to decide its type.",
          why: "‘Like’ marks the simile; the three single words are active verbs; “Every few paces” tells you when; “a point far beyond the car park” names a place." },
        { title: "The effect of two actions",
          task: { kind: "mcq", q: "The writer says a boy “bangs on the glass” and “The tiger does not even blink.” What is the most likely effect of putting these two actions together?",
            options: ["It shows that the tiger has stopped reacting to people, as if they no longer exist for him.", "It shows that the tiger is about to attack the boy.", "It tells the reader that the glass is very thick.", "It makes the scene light-hearted and funny."], answer: 0,
            feedback: [
              "",
              "Nothing in the lines suggests an attack. The tiger does not react at all. You have added an event instead of explaining the effect of the words on the page.",
              "The glass may be thick, but that is not what the writer is describing. The contrast is between a loud human action and no reaction. Ask what the pairing makes the reader feel about the tiger.",
              "A tiger ignoring a child who bangs on glass is sad, not funny. Read the pairing in context: the writer is about to ask ‘what, exactly, have we seen?’"
            ] },
          levels: {
            support: { steps: ["Find the two actions: the boy bangs; the tiger does not blink.", "Notice the contrast: a loud, violent verb against no movement at all.", "Ask what the tiger’s non-reaction suggests about his state of mind."],
              example: { q: "In Source B, the lion roars and “a lady beside me fainted clean away”, but Charlotte writes “I did not faint.” What is the effect of the contrast?", steps: ["One person reacts dramatically; the writer does not.", "The short sentence sounds proud."], answer: "It makes Charlotte seem brave and a little pleased with herself, and it shows the lion’s power through the lady’s reaction." } },
            core: { hint: "A banging fist usually gets a reaction. What does it mean when it gets none?" },
            stretch: { extend: "Explain how this pairing prepares the reader for the question “But what, exactly, have we seen?”" }
          },
          explain: "Explain, in one sentence, how the contrast between the two verbs creates the effect you chose.",
          why: "The violent verb “bangs” meets no reaction at all. The tiger has stopped treating people as real, which makes the reader uneasy about what the park has done to him." },
        { title: "Question 3 practice answer",
          // contexts: the same Question 3 skill on Source B, the nineteenth-century text, so pupils practise on both registers.
          contexts: [
            { label: "Source B: the lions",
              q: "Question 3 practice. Look in detail at Source B, Part 2, from ‘But the lions, Harriet!’ to ‘for the price of a shilling’. How does the writer use language to describe the lions and the lion house?",
              why: "Strong answers zoom in on the noun phrase “a long house of iron bars” (cold, strong, bars before beast), the active verb “trembled” and the hyperbole of “the whole house” (the roar’s power), the contrast of “fainted clean away” against “I did not faint.” (a short, proud sentence), and the triple “caged and quiet and safe”, whose repeated ‘and’ makes the lion sound tamed and the writer sound reassured." },
            { label: "Source B: the visitors",
              q: "Question 3 practice. Look in detail at Source B, Part 1, from ‘The weather was exceedingly fine’ to ‘obliged to sit upon a bench’. How does the writer use language to describe the visitors and the animals in the Gardens?",
              why: "Strong answers zoom in on the active verb “thronged” (a crowd pressing in), the balanced phrase “come to be looked at rather than to look” (people as the real exhibits), the personification of the bear who “covered its ears” and the camel’s “expression of contempt” (animals given human manners, so the humans look foolish), and the simile “as gentle as a kitten” (an enormous animal made harmless)." }
          ],
          task: { kind: "written", q: "Question 3 practice. Look in detail at Source A, Part 2, from ‘Then we reach the tiger’ to ‘I am not sure that is a good thing’. How does the writer use language to describe the tiger?", marks: 12,
            criteria: [
              "I keep every point on the focus of the question.",
              "I use short, relevant quotations embedded in my own sentences.",
              "I name the type of word or technique accurately (noun phrase, active verb, adverbial phrase, simile, sentence form).",
              "I zoom in on a single word and say what it suggests or connotes.",
              "I develop each point with a second technique or method.",
              "I write two developed paragraphs."
            ],
            model: "The writer presents the tiger as a prisoner worn down by routine. The adverbial phrases “nine paces one way and nine paces back” repeat the exact number, which suggests a walk so regular that someone has counted it, like a prisoner measuring a cell. The noun phrase “bare earth” develops this: grass does not wear away in a day, so the pacing has lasted months or years, and the sign’s boast about “two football pitches” sounds hollow.\n\nThe writer also makes the tiger seem absent from his own body. The simile “like something moving beneath a blanket” hides the animal’s muscles under a cover, as if the real tiger is somewhere underneath, out of sight. Furthermore, the active verb “stares” is turned by the phrase “not at us but through us”: the tiger looks past the crowd, at “a point far beyond the car park”, which implies that in his mind he has already left. When a boy “bangs on the glass” and the tiger “does not even blink”, the short sentence shows an animal that has stopped treating people as real." },
          levels: {
            support: { steps: ["Draw a box around the lines and underline the focus: the tiger.", "Find three quotations about the tiger and name the tool in each (adverbial phrase, simile, active verb).", "For each, zoom in on one word: ‘nine’, ‘beneath’, ‘through’. What does it suggest?", "Develop each with a second quotation or technique, using ‘Furthermore, …’.", "Write two paragraphs. Check every sentence answers ‘how does the writer describe the tiger?’"],
              example: { q: "How does the writer of Source B use language to describe the elephant in “a trunk as gentle as a kitten”?",
                steps: ["Technique: a simile with ‘as … as’.", "Zoom in: ‘kitten’ is small, soft and harmless.", "Effect: the biggest animal in the Gardens is made safe and sweet."],
                answer: "The writer uses the simile “as gentle as a kitten” to describe the elephant’s trunk. Zooming in, ‘kitten’ connotes something small, soft and harmless, so the largest animal in the Gardens is made to seem safe and even sweet, which fits Charlotte’s delighted, trusting perspective." } },
            core: { hint: "Start with the pacing (adverbial phrases), then the simile about his shoulders, then the verb ‘stares’ and where he looks." },
            stretch: { extend: "Add a final sentence on the sentence form “Tigers: tick.” and how its shortness turns the daughter’s list into something uncomfortable." }
          },
          explain: "Say which word you would zoom in on first, and what it connotes.",
          why: "A strong Question 3 answer stays on the focus, names the tools accurately, zooms in on single words and develops each point with a second method, in two paragraphs." }
      ]
    },

    /* ───────────────────────── 4 ───────────────────────── */
    { key: "q4-perspectives", n: 4,
      title: "Question 4: comparing the writers’ perspectives",
      lead: "You will work out how each writer feels about the same subject, compare their perspectives, and comment on the methods each writer uses to convey them.",
      covers: [4, 5],
      pretext: {
        words: [
          { word: "perspective", means: "how a writer sees and feels about something", sentence: "Charlotte’s perspective on the lions is delight; the modern writer’s is doubt." },
          { word: "convey", means: "get a feeling or idea across to the reader", sentence: "Short sentences convey the writer’s unease." },
          { word: "method", means: "a tool the writer uses on purpose", sentence: "Writing in the first person is a method." },
          { word: "contrastingly", means: "in a different or opposite way", sentence: "Contrastingly, in Source B the writer feels proud." },
          { word: "first person", means: "telling it as ‘I’ and ‘we’", sentence: "Both sources are written in the first person." },
          { word: "chronological", means: "in time order", sentence: "Both writers tell their day in chronological order." }
        ],
        passage: [
          "Question 4 is worth sixteen marks.",
          "Spend about twenty minutes on it.",
          "It asks you to compare the two writers.",
          "A perspective is how a writer sees and feels about something.",
          "First, work out how the writer of Source A feels.",
          "Underline the evidence.",
          "Then do the same for Source B.",
          "Ask why their views might differ.",
          "The time they were written matters.",
          "Comment on the methods each writer uses.",
          "First person, the order of events, the pace, the choice of words.",
          "Use the stems: Both writers… In Source A… Contrastingly, in Source B…",
          "Finish each point with what the evidence implies."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "كيف يرى الكاتب شيئاً ما وكيف يشعر نحوه (perspective)",
            "ينقل شعوراً أو فكرة إلى القارئ (convey)",
            "أداة يستعملها الكاتب عن قصد (method)",
            "بطريقة مختلفة أو معاكسة (contrastingly)",
            "الحكاية بصيغة «أنا» و«نحن» (first person)",
            "بترتيب الزمن (chronological)"
          ],
          "passage": [
            "السؤال 4 يساوي ستّ عشرة علامة.",
            "اقضِ فيه نحو عشرين دقيقة.",
            "وهو يطلب منك أن تقارن بين الكاتبَين.",
            "وجهة النظر (perspective) هي كيف يرى الكاتب شيئاً ما وكيف يشعر نحوه.",
            "أولاً، اكتشف كيف يشعر كاتب النص A.",
            "ضع خطاً تحت الدليل.",
            "ثم افعل الشيء نفسه مع النص B.",
            "اسأل: لماذا قد تختلف آراؤهما؟",
            "زمن كتابة النصّين له أهميّة.",
            "علّق على الأساليب (methods) التي يستعملها كل كاتب.",
            "ضمير المتكلّم، وترتيب الأحداث، والإيقاع، واختيار الكلمات.",
            "استعمل بدايات الجمل: Both writers… (كلا الكاتبَين)، In Source A… (في النص A)، Contrastingly, in Source B… (وعلى العكس، في النص B).",
            "اختم كل فكرة بما يُلمّح إليه الدليل."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "to, jak autor widzi coś i co o tym czuje (perspective)",
            "przekazać czytelnikowi uczucie lub myśl (convey)",
            "narzędzie, którego autor używa celowo (method)",
            "w inny albo przeciwny sposób (contrastingly)",
            "opowiadanie jako „ja” i „my” (first person)",
            "w porządku czasowym (chronological)"
          ],
          "passage": [
            "Pytanie 4 jest warte szesnaście punktów.",
            "Poświęć na nie około dwudziestu minut.",
            "Prosi cię o porównanie dwóch autorów.",
            "Perspektywa (perspective) to sposób, w jaki autor coś widzi i co o tym czuje.",
            "Najpierw ustal, co czuje autor tekstu A.",
            "Podkreśl dowody.",
            "Potem zrób to samo dla tekstu B.",
            "Zapytaj, dlaczego ich poglądy mogą się różnić.",
            "Czas, w którym zostały napisane, ma znaczenie.",
            "Skomentuj metody, których używa każdy autor.",
            "Pierwsza osoba, kolejność zdarzeń, tempo, dobór słów.",
            "Używaj gotowych początków zdań: Both writers… In Source A… Contrastingly, in Source B… (Oboje autorzy… W tekście A… Natomiast w tekście B…)",
            "Zakończ każdą uwagę tym, co wynika z dowodu."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "como um escritor vê e sente alguma coisa (perspective, perspetiva/perspectiva)",
            "transmitir um sentimento ou uma ideia ao leitor (convey)",
            "uma ferramenta que o escritor usa de propósito (method, método)",
            "de uma maneira diferente ou oposta (contrastingly)",
            "contar como ‘eu’ e ‘nós’ (first person, primeira pessoa)",
            "em ordem de tempo (chronological, cronológico)"
          ],
          "passage": [
            "A Pergunta 4 vale dezesseis/dezasseis pontos.",
            "Use cerca de vinte minutos nela.",
            "Pede que você compare os dois escritores.",
            "Uma perspetiva/perspectiva (perspective) é como um escritor vê e sente alguma coisa.",
            "Primeiro, descubra o que sente o escritor da Fonte A.",
            "Sublinhe as provas.",
            "Depois faça o mesmo com a Fonte B.",
            "Pergunte por que as opiniões deles podem ser diferentes.",
            "A época em que foram escritas é importante.",
            "Comente os métodos que cada escritor usa.",
            "A primeira pessoa, a ordem dos acontecimentos, o ritmo, a escolha das palavras.",
            "Use os inícios de frase em inglês (Both writers… In Source A… Contrastingly, in Source B…), ou seja: Os dois escritores… Na Fonte A… Em contraste, na Fonte B…",
            "Termine cada ponto com o que a prova dá a entender."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "sida qoraagu wax u arko oo uu u dareemo (perspective)",
            "dareen ama fikrad akhristaha gaarsii (convey)",
            "qalab qoraagu si ula kac ah u isticmaalo (method)",
            "si kala duwan ama lid ku ah (contrastingly)",
            "sheeko loo sheegayo sida 'anigu' iyo 'annagu' (first person)",
            "siday waqtigu u kala horreeyaan (chronological)"
          ],
          "passage": [
            "Su'aasha 4 waxay leedahay lix iyo toban dhibcood.",
            "Qiyaastii labaatan daqiiqo ku qaado.",
            "Waxay ku weydiinaysaa inaad isbarbardhigto labada qoraa.",
            "Perspective waa sida qoraagu wax u arko oo uu u dareemo.",
            "Marka hore, garo sida qoraaga Source A uu dareemayo.",
            "Hoosta ka xariiq caddaynta (evidence).",
            "Kadibna sidaas oo kale ku samee Source B.",
            "Is weydii sababta aragtiyadoodu u kala duwanaan karaan.",
            "Waqtigii la qoray wuu muhiim yahay.",
            "Ka hadal hababka (methods) qoraa kastaa isticmaalo.",
            "First person, sida dhacdooyinka u kala horreeyaan, xawaaraha sheekada, doorashada erayada.",
            "Isticmaal weedhahan bilowga ah ee la bixiyay: Both writers… In Source A… Contrastingly, in Source B…",
            "Hadal kasta ku soo gabagabee waxa caddayntu tilmaamayso."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "те, як автор бачить щось і що він про це відчуває (perspective)",
            "донести почуття або ідею до читача (convey)",
            "засіб, який автор використовує навмисно (method)",
            "інакшим або протилежним способом (contrastingly)",
            "розповідь від «я» та «ми» (first person)",
            "у часовому порядку (chronological)"
          ],
          "passage": [
            "Question 4 дає шістнадцять балів.",
            "Витратьте на нього близько двадцяти хвилин.",
            "Воно просить вас порівняти двох авторів.",
            "Погляд (perspective) — це те, як автор бачить щось і що він про це відчуває.",
            "Спочатку з’ясуйте, що відчуває автор Source A.",
            "Підкресліть докази.",
            "Потім зробіть те саме для Source B.",
            "Запитайте, чому їхні погляди можуть відрізнятися.",
            "Час, коли їх було написано, має значення.",
            "Прокоментуйте засоби (methods), які використовує кожний автор.",
            "Перша особа, порядок подій, темп, вибір слів.",
            "Використовуйте такі початки речень: Both writers… (обидва автори), In Source A… (у Source A), Contrastingly, in Source B… (на відміну від цього, у Source B).",
            "Завершуйте кожну думку тим, на що вказують докази."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "مصنف کسی چیز کو کیسے دیکھتا اور اس کے بارے میں کیا محسوس کرتا ہے (perspective)",
            "کوئی احساس یا خیال قاری تک پہنچانا (convey)",
            "ایک آلہ جو مصنف جان بوجھ کر استعمال کرتا ہے (method)",
            "الگ یا الٹے طریقے سے (contrastingly)",
            "بات کو ‘I’ اور ‘we’ کہہ کر سنانا (first person)",
            "وقت کی ترتیب سے (chronological)"
          ],
          "passage": [
            "سوال 4 کے سولہ نمبر ہیں۔",
            "اس پر تقریباً بیس منٹ لگائیں۔",
            "یہ آپ سے دونوں مصنفوں کا موازنہ کرنے کو کہتا ہے۔",
            "نقطۂ نظر (perspective) یہ ہے کہ مصنف کسی چیز کو کیسے دیکھتا اور اس کے بارے میں کیا محسوس کرتا ہے۔",
            "پہلے معلوم کریں کہ Source A کا مصنف کیا محسوس کرتا ہے۔",
            "شہادت (evidence) کے نیچے لکیر لگائیں۔",
            "پھر Source B کے لیے بھی یہی کریں۔",
            "پوچھیں کہ ان کی رائے الگ کیوں ہو سکتی ہے۔",
            "جس زمانے میں وہ لکھے گئے، اس کی اہمیت ہے۔",
            "ہر مصنف کے استعمال کیے ہوئے طریقوں (methods) پر تبصرہ کریں۔",
            "first person، واقعات کی ترتیب، رفتار، لفظوں کا انتخاب۔",
            "یہ شروعاتی فقرے استعمال کریں: Both writers… In Source A… Contrastingly, in Source B… (یعنی دونوں مصنف…، Source A میں…، اس کے برعکس Source B میں…)۔",
            "ہر نکتہ اس بات پر ختم کریں کہ شہادت کس چیز کا اشارہ کرتی ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "What Question 4 asks",
          paragraphs: [
            "Question 4 is worth 16 marks, the biggest reading question, and should take about 20 minutes. It asks you to use the whole of both sources and to compare how the two writers convey their different perspectives (or attitudes, or feelings) about the shared topic. It is a comparison of ideas and perspectives first; the writers’ methods are there to show how each perspective is conveyed.",
            "From 2026 the question’s second bullet point reads ‘comment on the methods the writers use’, where it used to say ‘compare the methods’. In practice: you still need to write about methods in both sources, but you do not have to find a matching method in each. Compare the perspectives; comment on the methods that carry them; support everything with references to both texts."
          ],
          tip: "Spend about twenty minutes. Three developed comparisons beat six thin ones." },
        { heading: "Find each writer’s feelings and perspective",
          paragraphs: [
            "Start with Source A. Read it again and ask: how does the writer feel about her day, and does that feeling change? At the meerkats she is “completely happy”. At the tiger she grows uneasy: she notices the worn grass, the stare “through us”, the boy banging. By the end she doubts the whole visit: “But what, exactly, have we seen?” Her perspective moves from joy to unease to doubt.",
            "Now Source B. Charlotte is delighted from the first line and proud to be there. She finds the lions wonderful, and the fact that the wild world can be “caged and quiet and safe” in the middle of London is, to her aunt, “the triumph of the age”. Only in the last lines does a flicker of doubt appear: Edward says the lion looked bored, and she thinks “they are both right”.",
            "Then ask why the perspectives differ. Charlotte writes in 1854, when seeing a live lion was a rare wonder and keeping one was a sign of national pride. The modern writer, in 2024, has seen a thousand tigers on screens, and worries about what a caged one is for. The time period is part of the explanation, and examiners reward you for saying so."
          ],
          quote: { text: "I stood as near as I was permitted and looked into the creature’s great golden eyes, and I thought how wonderful it is that we may stand in the middle of London and see the wild world brought to our very feet, caged and quiet and safe, for the price of a shilling. Aunt Lydia says it is the triumph of the age. Edward says the lion looked bored. I think they are both right, though I shall not tell either of them so.",
            source: "Source B, Charlotte’s letter (1854), Part 2 — original passage written for Ad Astra" },
          tip: "Underline feelings in one colour for Source A and another for Source B before you write a word." },
        { heading: "Methods that convey perspective",
          paragraphs: [
            "Your teachers list the methods to look for. First-person narrative: both writers say ‘I’, so we trust their feelings as honest and direct. Chronological structure: both tell the day in order, which lets us watch the feeling change. Pace: Source A slows down at the tiger, with long sentences counting his paces, then stops dead on “Tigers: tick.”; Source B speeds up with exclamations, “But the lions, Harriet!”, as the excitement rises.",
            "Word choice and sentence form are methods too. The modern writer asks a question she cannot answer, “But what, exactly, have we seen?”, and the hesitating commas show her doubt. Charlotte piles up positive words in a triple, “caged and quiet and safe”, where the repeated ‘and’ makes the lion sound thoroughly tamed and the writer sound reassured."
          ],
          worked: { q: "Compare one method in each source that conveys the writer’s perspective on the big cat.",
            steps: ["Source A: the short sentence “Tigers: tick.” after long descriptive sentences.", "Effect: the day is reduced to a box on a list, which conveys the writer’s growing sense that the visit is hollow.", "Source B: the exclamation “But the lions, Harriet!”.", "Effect: the exclamation and the direct address to her sister convey Charlotte’s rush of excitement; she can hardly wait to tell it."],
            answer: "In Source A the writer uses the two-word sentence “Tigers: tick.” to convey her unease: after long sentences about the pacing tiger, the day shrinks to a box on a list. Contrastingly, in Source B the writer uses an exclamation, “But the lions, Harriet!”, to convey her excitement; the direct address makes the reader feel her rush to share the moment." },
          tip: "A method is only worth naming if you say what perspective it conveys." },
        { heading: "Writing the comparison",
          paragraphs: [
            "Use your teachers’ sentence stems. Open with the shared ground: ‘Both writers suggest…’ or ‘Both writers show…’. Then: ‘In Source A the writer…’, ‘This is shown by…’ (add a short quotation), ‘This implies / suggests / highlights…’. Then turn: ‘Similarly, in Source B…’ or ‘Contrastingly, in Source B…’, ‘This is shown when…’, ‘This implies…’. Each turn of the frame is one comparison.",
            "Aim for three comparisons in twenty minutes: perhaps how each writer feels at the start, how each describes the big cat, and how each ends. In every one, name a method and say what it conveys. Finish by returning to the question: whose perspective is more troubled, and why might that be, given when each text was written?"
          ],
          tip: "If a paragraph only retells what happened, ask: how does the writer convey what she feels about it?" }
      ],
      gate: [
        { kind: "mcq", q: "How many marks is Question 4 worth?", options: ["8", "12", "16", "20"], answer: 2,
          feedback: [
            "Eight marks is Question 2. Question 4 is the biggest reading question on the paper.",
            "Twelve marks is Question 3, the language analysis. Question 4 carries 16.",
            "",
            "Twenty is the number of minutes your teachers give Question 4, not its marks. It is worth 16."
          ],
          why: "Question 4 is worth 16 marks and takes about 20 minutes." },
        { kind: "gap", q: "In Question 4 you compare the writers’ ideas and ___.", answer: "perspectives", options: ["perspectives", "spellings", "paragraphs"],
          feedback: {
            "spellings": "Spelling is marked in Question 5, not here. Question 4 compares the writers’ ideas and perspectives: how each sees and feels about the subject.",
            "paragraphs": "You are not comparing how many paragraphs each writer uses. Question 4 compares ideas and perspectives, supported by comments on methods."
          },
          why: "Question 4 is a comparison of the writers’ ideas and perspectives." },
        { kind: "mcq", q: "From 2026, what does the second bullet point of Question 4 ask you to do?", options: ["Compare the methods the writers use", "Comment on the methods the writers use", "Summarise the two sources", "Choose four true statements"], answer: 1,
          feedback: [
            "That was the old wording. From 2026 the bullet says ‘comment on’ the methods, so you write about methods in both sources without having to pair them up.",
            "",
            "Summarising the sources is not what Question 4 asks: it compares the writers’ perspectives. Question 2 is the one that works across both sources by inference.",
            "Choosing true statements is Question 1. Question 4’s second bullet asks you to comment on the methods the writers use."
          ],
          why: "The second bullet now reads ‘comment on the methods the writers use’; the comparison is of ideas and perspectives." }
      ],
      modules: [
        { title: "Whose perspective?",
          task: { kind: "mcq", q: "Which statement best sums up how the two writers’ perspectives differ?",
            options: ["Both writers are delighted from the first line to the last.", "Charlotte sees the Gardens as a triumph, while the modern writer comes to doubt what the park is for.", "Charlotte is frightened of the animals, while the modern writer is bored by them.", "Both writers believe wild animals should never be kept for people to look at."], answer: 1,
            feedback: [
              "Charlotte is delighted throughout, but the modern writer is not: her happiness lasts “the first hour” and turns to doubt at the tiger. You have read the end of Source A through the start.",
              "",
              "Charlotte proudly writes “I did not faint.”: she is not frightened. And the modern writer is troubled, not bored; she asks what they have really seen. Both feelings have been misread.",
              "The modern writer doubts, but she never says animals should not be kept. Charlotte calls the caged lion wonderful. You have turned a question into a shared belief the texts never state."
            ] },
          levels: {
            support: { steps: ["Find how Source A ends: a question the writer cannot answer.", "Find how Source B ends: the triumph of the age, with one small doubt.", "Pick the statement that gives each writer the right feeling."],
              example: { q: "Two reviews of the same film: one calls it ‘two hours I will never get back’, the other ‘the best night out this year’. How do their perspectives differ?", steps: ["The first is negative throughout.", "The second is positive throughout."], answer: "The first reviewer thinks the film wasted their time; the second thinks it was worth every minute." } },
            core: { hint: "One writer uses the word ‘wonderful’. The other asks a question she cannot answer." },
            stretch: { extend: "Charlotte admits Edward is ‘right’ that the lion looked bored. Explain how that one line brings the two perspectives closer than they first seem." }
          },
          explain: "Say which sentence in each source gave you that writer’s perspective most clearly.",
          why: "Charlotte finds the caged lion wonderful and calls the Gardens a triumph; the modern writer, happy at first, ends unsure what the visit has given anyone." },
        { title: "Build the comparison in order",
          task: { kind: "order", q: "Put the parts of a Question 4 comparison in the order your teachers’ stems use.",
            items: ["Both writers show… (the shared ground)", "In Source A the writer… (her perspective)", "This is shown by… (a short quotation)", "This implies… (what it suggests, and the method that conveys it)", "Contrastingly, in Source B the writer… (her perspective)", "This is shown when… This implies… (quotation, method, meaning)"] },
          levels: {
            support: { steps: ["Start with what both writers share.", "Deal with Source A completely before you turn to Source B.", "Each source gets: perspective, evidence, meaning.", "The turning word, ‘Similarly’ or ‘Contrastingly’, begins the Source B half."],
              example: { q: "Order these parts of a comparison of two football reports: the second report’s view, the shared topic, the first report’s view with evidence.", steps: ["Shared topic first.", "First report, with evidence.", "Then the second."], answer: "Shared topic, first report with evidence, second report with evidence." } },
            core: { hint: "The frame is a mirror: Source A gets perspective, evidence, meaning; then Source B gets the same three." },
            stretch: { extend: "Explain why naming the method inside ‘This implies…’ is stronger than listing methods in a separate paragraph." }
          },
          explain: "Explain why the Source B half begins with ‘Similarly’ or ‘Contrastingly’.",
          why: "Both writers; Source A, evidence, meaning; then Contrastingly, Source B, evidence, meaning: one comparison, with the methods commented on as you go." },
        { title: "Question 4 practice answer",
          task: { kind: "written", q: "Question 4 practice. Use the whole of Source A and the whole of Source B. Compare how the two writers convey their different perspectives on seeing wild animals kept for people to look at. You could: compare their different perspectives; comment on the methods the writers use to convey those perspectives; support your ideas with references to both sources.", marks: 16,
            criteria: [
              "I state each writer’s perspective clearly, and I compare them rather than describing them separately.",
              "I support every point with a short, relevant reference to the right source.",
              "I comment on the methods each writer uses (first person, structure, pace, word choice, sentence form) and say what they convey.",
              "I use comparative stems: ‘Both writers…’, ‘Similarly…’, ‘Contrastingly…’.",
              "I consider why the perspectives differ, including when each text was written.",
              "I write three developed comparisons in about twenty minutes."
            ],
            model: "Both writers describe a day spent looking at wild animals in captivity, and both begin happily, but their perspectives end far apart.\n\nIn Source A the writer is “completely happy” for the first hour, and the chronological structure lets us watch that happiness drain away at the tiger. The two-word sentence “Tigers: tick.” shrinks the animal to a box on her daughter’s list, and the question “But what, exactly, have we seen?” implies that she now doubts the whole purpose of the park. Contrastingly, in Source B Charlotte’s perspective is one of pride and wonder from start to finish. Her exclamation “But the lions, Harriet!” and the direct address to her sister convey a rush of excitement, and the triple “caged and quiet and safe” makes the bars sound like a comfort rather than a cruelty.\n\nBoth writers use the first person, which makes their feelings seem honest, but they use it differently. The modern writer turns it on herself, admitting “I am not sure that is a good thing”, which suggests guilt. Charlotte uses it to boast, “I did not faint.”, which suggests the visit is a test of her nerve that she has passed.\n\nThe gap between them is partly a gap in time. In 1854 a caged lion was “the triumph of the age”; in 2024 the writer has seen a thousand tigers on screens and asks what a pacing one is for. Yet Charlotte’s last line, that Edward is “right” that the lion looked bored, shows that even she glimpses the doubt the modern writer cannot escape." },
          levels: {
            support: { steps: ["Write one sentence for each writer: how does she feel about the animals at the start, and at the end?", "Find two quotations for each writer that show those feelings.", "For each quotation, name a method (first person, pace, short sentence, exclamation, triple) and say what it conveys.", "Write the frame: Both writers… In Source A… This is shown by… This implies… Contrastingly, in Source B… This is shown when… This implies…", "Add one sentence on why the time period might explain the difference."],
              example: { q: "Compare how the two writers convey their perspectives on the crowds at each place.",
                steps: ["Source A: a queue of two hundred and a crowd that “moves as one”: the writer feels part of a herd.", "Source B: walks “thronged with ladies in their best bonnets”: Charlotte enjoys the show of people.", "Method in each: a simile about a crowd; a witty balanced phrase about looking and being looked at."],
                answer: "Both writers notice the crowds. In Source A the crowd “moves as one” through the gates, and the writer’s flat tone implies she feels herded like the animals she has come to see. Contrastingly, in Source B the walks are “thronged with ladies in their best bonnets”, and Charlotte’s joke that the gentlemen had “come to be looked at rather than to look” conveys amusement: for her the people are half the entertainment." } },
            core: { hint: "Compare the endings first: a question without an answer, against a triumph with one small doubt." },
            stretch: { extend: "Argue that the two perspectives are closer than they look, using Charlotte’s last three sentences and the modern writer’s toy tiger." }
          },
          explain: "Say which comparison you would write first, and which method in each source you would name.",
          why: "A strong Question 4 answer compares perspectives, not just events; roots each point in both texts; comments on the methods that convey each perspective; and explains the difference partly through when the texts were written." }
      ]
    },

    /* ───────────────────────── 5 ───────────────────────── */
    { key: "q5-forms", n: 5,
      title: "Question 5: know your form, audience and purpose",
      lead: "You will recognise what Question 5 asks, read form, audience and purpose off the task, and use the conventions of letters, speeches, articles, reviews and guides.",
      covers: [7, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      pretext: {
        words: [
          { word: "transactional writing", means: "non-fiction that passes information or opinion between people", sentence: "Letters, speeches, articles and reviews are all transactional writing." },
          { word: "convention", means: "a feature readers expect in a kind of text", sentence: "A sign-off is a convention of a letter." },
          { word: "register", means: "how formal or informal the language is", sentence: "A letter to a newspaper needs a formal register." },
          { word: "headline", means: "the title that hooks a reader into an article", sentence: "Write a headline that makes the reader curious." },
          { word: "sign-off", means: "the words that close a letter", sentence: "‘Yours sincerely’ is the safest formal sign-off." },
          { word: "signpost", means: "tell your audience what is coming", sentence: "Signpost the three points your speech will make." }
        ],
        passage: [
          "Question 5 is the writing question.",
          "It is worth forty marks.",
          "You have forty-five minutes, including time to plan and check.",
          "The task gives you a statement or a topic.",
          "It names the form: a letter, an article, a speech, a review or a guide.",
          "It tells you who will read or hear it.",
          "Work out the purpose: to argue, to persuade, to explain, to inform or to entertain.",
          "Each form has its own conventions.",
          "A letter has addresses and a sign-off.",
          "A speech talks to its listeners directly.",
          "An article has a headline and short paragraphs.",
          "Match your register to your audience.",
          "Show the form in your very first line."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "كتابة غير قصصية تنقل معلومات أو آراء بين الناس (transactional writing)",
            "سمة يتوقّعها القرّاء في نوع من النصوص (convention)",
            "درجة الرسمية أو العفوية في اللغة (register)",
            "العنوان الذي يجذب القارئ إلى المقال (headline)",
            "الكلمات التي تُختم بها الرسالة (sign-off)",
            "أخبر جمهورك بما هو قادم (signpost)"
          ],
          "passage": [
            "السؤال 5 هو سؤال الكتابة.",
            "وهو يساوي أربعين علامة.",
            "لديك خمس وأربعون دقيقة، تشمل وقت التخطيط والمراجعة.",
            "تعطيك المهمّة عبارة أو موضوعاً.",
            "وتحدّد نوع النص (form): رسالة، أو مقال، أو خطبة، أو مراجعة، أو دليل.",
            "وتخبرك من سيقرأه أو يسمعه.",
            "اكتشف الهدف (purpose): أن تجادل، أو تُقنع، أو تشرح، أو تُخبر، أو تُسلّي.",
            "لكل نوع نص أعرافه (conventions) الخاصة.",
            "الرسالة فيها عناوين وختام (sign-off).",
            "الخطبة تخاطب مستمعيها مباشرة.",
            "المقال له عنوان رئيسي (headline) وفقرات قصيرة.",
            "اجعل مستوى لغتك (register) مناسباً لجمهورك.",
            "أظهر نوع النص من أول سطر تكتبه."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "teksty niefikcyjne, które przekazują informacje lub opinie między ludźmi (transactional writing)",
            "cecha, której czytelnicy oczekują w danym rodzaju tekstu (convention)",
            "to, jak formalny albo nieformalny jest język (register)",
            "tytuł, który przyciąga czytelnika do artykułu (headline)",
            "słowa, które kończą list (sign-off)",
            "zapowiedzieć odbiorcom, co będzie dalej (signpost)"
          ],
          "passage": [
            "Pytanie 5 to pytanie z pisania.",
            "Jest warte czterdzieści punktów.",
            "Masz czterdzieści pięć minut, łącznie z czasem na plan i sprawdzenie.",
            "Zadanie daje ci stwierdzenie albo temat.",
            "Podaje formę: list, artykuł, przemowa, recenzja albo poradnik.",
            "Mówi ci, kto będzie to czytać lub słuchać.",
            "Ustal cel: argumentować, przekonywać, wyjaśniać, informować albo bawić.",
            "Każda forma ma swoje własne konwencje (conventions).",
            "List ma adresy i formułę pożegnalną (sign-off).",
            "Przemowa zwraca się bezpośrednio do słuchaczy.",
            "Artykuł ma nagłówek (headline) i krótkie akapity.",
            "Dopasuj swój rejestr (register) do odbiorców.",
            "Pokaż formę już w pierwszej linijce."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "não ficção que passa informação ou opinião entre pessoas (transactional writing)",
            "uma característica que os leitores esperam num tipo de texto (convention, convenção)",
            "o quanto a linguagem é formal ou informal (register, registo/registro)",
            "o título que prende o leitor a um artigo (headline, manchete)",
            "as palavras que fecham uma carta (sign-off, despedida)",
            "dizer ao seu público o que vem a seguir (signpost)"
          ],
          "passage": [
            "A Pergunta 5 é a pergunta de escrita.",
            "Vale quarenta pontos.",
            "Você tem quarenta e cinco minutos, incluindo o tempo para planear/planejar e rever.",
            "A tarefa dá uma afirmação ou um tema.",
            "Diz qual é a forma: uma carta, um artigo, um discurso, uma crítica ou um guia.",
            "Diz quem vai ler ou ouvir o texto.",
            "Descubra o propósito: argumentar, persuadir, explicar, informar ou divertir.",
            "Cada forma tem as suas próprias convenções.",
            "Uma carta tem endereços e uma despedida (sign-off).",
            "Um discurso fala diretamente com quem o ouve.",
            "Um artigo tem uma manchete (headline) e parágrafos curtos.",
            "Ajuste o seu registo/registro ao seu público.",
            "Mostre a forma logo na sua primeira linha."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "qoraal non-fiction ah oo macluumaad ama ra'yi dadka dhex marsiiya (transactional writing)",
            "astaan akhristayaashu ka filayaan nooc qoraal (convention)",
            "sida luqaddu u rasmi tahay ama u fudud tahay (register)",
            "cinwaanka akhristaha maqaalka soo jiita (headline)",
            "erayada warqadda soo xira (sign-off)",
            "u sheeg dadka ku dhegaysanaya waxa soo socda (signpost)"
          ],
          "passage": [
            "Su'aasha 5 waa su'aasha qoraalka.",
            "Waxay leedahay afartan dhibcood.",
            "Waxaad haysataa shan iyo afartan daqiiqo, oo ay ku jirto waqti qorshayn iyo hubin.",
            "Hawshu waxay ku siinaysaa weedh (statement) ama mawduuc.",
            "Waxay magacawdaa nooca qoraalka (form): warqad, maqaal, khudbad, dib-u-eegis ama hage.",
            "Waxay kuu sheegtaa cidda akhrin doonta ama dhegaysan doonta.",
            "Garo ujeeddada (purpose): in lagu doodo, in lagu qanciyo, in la sharraxo, in la wargeliyo ama in la maaweeliyo.",
            "Nooc kasta oo qoraal wuxuu leeyahay astaamihiisa u gaar ah (conventions).",
            "Warqad waxay leedahay cinwaanno iyo erayo soo xira (sign-off).",
            "Khudbad si toos ah ayay ula hadashaa dhegaystayaasheeda.",
            "Maqaal wuxuu leeyahay cinwaan weyn (headline) iyo baaragaraafyo gaagaaban.",
            "Luqaddaada (register) ku habbee dadka aad u qorayso.",
            "Nooca qoraalka xariiqdaada ugu horreysa ka muuji."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "нехудожній текст, який передає інформацію або думку між людьми (transactional writing)",
            "ознака, яку читачі очікують у певному виді тексту (convention)",
            "наскільки формальна чи неформальна мова (register)",
            "заголовок, який затягує читача в статтю (headline)",
            "слова, якими закінчують лист (sign-off)",
            "сказати аудиторії, що буде далі (signpost)"
          ],
          "passage": [
            "Question 5 — це запитання з письма.",
            "Воно дає сорок балів.",
            "У вас сорок п’ять хвилин, включно з часом на планування та перевірку.",
            "Завдання дає вам твердження або тему.",
            "Воно називає форму: лист, стаття, промова, рецензія або посібник.",
            "Воно говорить вам, хто це читатиме або слухатиме.",
            "З’ясуйте мету: довести, переконати, пояснити, інформувати або розважити.",
            "Кожна форма має свої правила (conventions).",
            "Лист має адреси та прощання (sign-off).",
            "Промова звертається до слухачів безпосередньо.",
            "Стаття має заголовок (headline) і короткі абзаци.",
            "Підберіть регістр (register) до своєї аудиторії.",
            "Покажіть форму вже в самому першому рядку."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایسی non-fiction جو لوگوں کے بیچ معلومات یا رائے پہنچاتی ہے (transactional writing)",
            "ایسی خصوصیت جس کی قاری کسی قسم کے متن میں توقع رکھتے ہیں (convention)",
            "زبان کتنی رسمی یا غیر رسمی ہے (register)",
            "وہ عنوان جو قاری کو مضمون کی طرف کھینچتا ہے (headline)",
            "وہ لفظ جن سے خط ختم ہوتا ہے (sign-off)",
            "اپنے قاری کو بتانا کہ آگے کیا آنے والا ہے (signpost)"
          ],
          "passage": [
            "سوال 5 لکھنے کا سوال ہے۔",
            "اس کے چالیس نمبر ہیں۔",
            "آپ کے پاس پینتالیس منٹ ہیں، جن میں منصوبہ بنانے اور جانچنے کا وقت بھی شامل ہے۔",
            "سوال آپ کو ایک بیان یا ایک موضوع دیتا ہے۔",
            "یہ قسم (form) بتاتا ہے: خط، مضمون، تقریر، تبصرہ یا رہنما تحریر۔",
            "یہ بتاتا ہے کہ اسے کون پڑھے گا یا سنے گا۔",
            "مقصد معلوم کریں: دلیل دینا، قائل کرنا، وضاحت کرنا، بتانا یا لطف دینا۔",
            "ہر قسم کے اپنے اصول (conventions) ہوتے ہیں۔",
            "خط میں پتے اور اختتامی لفظ (sign-off) ہوتے ہیں۔",
            "تقریر اپنے سننے والوں سے براہِ راست بات کرتی ہے۔",
            "مضمون میں ایک سرخی (headline) اور چھوٹے پیراگراف ہوتے ہیں۔",
            "اپنی زبان کا انداز (register) اپنے قاری کے مطابق رکھیں۔",
            "اپنی پہلی ہی سطر میں قسم (form) دکھا دیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "What Question 5 asks",
          paragraphs: [
            "Question 5 is worth 40 marks, as much as the whole of Section A. It gives you a statement or a topic linked to the sources, and asks for a piece of non-fiction: ‘Write a letter to your local newspaper…’, ‘Write a speech for students at your school…’, ‘Write an article for a magazine arguing…’. Your teachers call this transactional writing: non-fiction that communicates information or opinion between individuals or groups.",
            "Of the 40 marks, 24 are for content and organisation (AO5): a tone, style and register matched to purpose and audience; convincing ideas; a clear structure with paragraphs used for effect. The other 16 are for technical accuracy (AO6): sentence demarcation, a range of punctuation and sentence forms, Standard English, spelling and vocabulary.",
            "Before you plan, underline the key information in the task and answer three questions: What is the form? Who is the audience? What is the purpose? Then ask what register and devices that combination needs. Your first line should already show the examiner that you know all three."
          ],
          tip: "Forty-five minutes: about five to plan, thirty-five to write, five to check. The plan is where the marks are decided." },
        { heading: "Letters, speeches and articles",
          paragraphs: [
            "A letter has your address at the top right and the recipient’s on the left, a greeting (‘Dear Editor,’ or ‘Dear Ms Okafor,’), a clear introduction that states why you are writing, several main points each with examples, a conclusion that rounds off your argument, and a sign-off that fits: ‘Yours sincerely,’ is the safe formal choice; ‘Kind regards,’ suits a colleague or friend; ‘With love,’ is for family only.",
            "A speech is written to be heard. Open with a hook (three questions, a bold statement, a statistic, or a direct address: ‘Good morning, Year 10’), introduce your topic, signpost what you will cover, and talk to your listeners with ‘you’ and ‘we’. Ask for a specific action near the end, then finish with a line that hammers your point home.",
            "An article has a headline that hooks, then an opening that drops into an anecdote or a case study. Paragraphs are shorter and packed with information; sub-headings are allowed. The conclusion sums up the argument, and the strongest articles bring the anecdote back for the final word: a cyclical structure."
          ],
          worked: { q: "Read the task: ‘Write a speech for a Year 10 assembly persuading your year group to volunteer in the local community.’ Identify form, audience, purpose and register.",
            steps: ["Form: a speech, so direct address, signposting and a call to action.", "Audience: Year 10 pupils, your own year group, so ‘we’ as well as ‘you’.", "Purpose: to persuade, so DAFOREST devices and a strong ending.", "Register: formal enough for an assembly, but warm and direct, not stiff."],
            answer: "Form: speech. Audience: Year 10. Purpose: to persuade. Register: formal but direct, speaking as one of them." },
          tip: "Write the greeting or the headline before anything else. It fixes the form in your head and the examiner’s." },
        { heading: "Reviews and information guides",
          paragraphs: [
            "A review informs the reader about a specific event, film, place or product, and persuades them a little: should they go, or not? Its features: a heading; the past tense when you describe your experience; shorter, information-packed paragraphs; your personal opinion, built on specific details; contrasting opinions, not only your own; and a clear judgement in the last paragraph, often with a rating.",
            "Your teachers’ structure for a whole review: an introduction that sets the scene and the tone; a description of the relevant details and key facts; your personal experience (did expectation meet reality?); analysis and judgement, weighing the good against the bad; and a conclusion that says whether you recommend it, with one overall reason. A review that is only opinion has turned into a speech. Keep the facts in.",
            "An information guide (for example, ‘Stress-free Settling In’ for new pupils) is organised into sub-sections with sub-headings so the reader can find what they need: a short welcoming introduction, three sections such as finding your way around, meeting people and the feelings new starters have, and a conclusion that ends on a reassuring tone."
          ],
          tip: "Reviews inform first and persuade second. If every sentence is an opinion, add a fact." },
        { heading: "Register: the same opinion for different readers",
          paragraphs: [
            "Register is the level of formality, and it changes with the audience even when your opinion does not. To persuade a friend your own age, you can be informal and direct. To inform a teacher, you are professional. To educate someone younger, you simplify and explain. To entertain a large audience in a speech, you can risk a joke. To advise a teacher, you are respectful but clear about what you want.",
            "Two openings to avoid in any form: ‘In this article I am going to write about…’ and ‘I am writing this letter to…’. They waste your first line and show no craft. Instead, open with a question, a fact (or an opinion stated as if it were fact), or a scene. Here is an original model opening for a letter to the editor about the topic of this unit’s sources. Notice that the form is clear from the first two words and the argument from the first sentence."
          ],
          quote: { text: "Dear Editor, Last Saturday I queued for an hour in the rain to watch a tiger walk nine paces in one direction and nine in the other. I paid for the privilege. So did two hundred other people. If that sounds like entertainment to you, read no further; if it sounds like something we should have outgrown, I hope you will give me the rest of this page.",
            source: "Original model letter opening written for Ad Astra" },
          tip: "The opening and the closing decide what the examiner thinks of you. Craft both." }
      ],
      gate: [
        { kind: "mcq", q: "How many marks is Question 5 worth, and how are they split?", options: ["40: 20 for content, 20 for accuracy", "40: 24 for content and organisation, 16 for technical accuracy", "24: all for content", "16: all for accuracy"], answer: 1,
          feedback: [
            "The total is right but the split is not. Content and organisation (AO5) carry 24; technical accuracy (AO6) carries 16.",
            "",
            "Twenty-four is only the content-and-organisation part. Add the 16 marks for technical accuracy to reach 40.",
            "Sixteen is only the technical-accuracy part. Question 5 is worth 40 in total: 24 for content and organisation plus 16."
          ],
          why: "Question 5 is worth 40 marks: 24 for content and organisation (AO5) and 16 for technical accuracy (AO6)." },
        { kind: "gap", q: "Non-fiction that passes information or opinion between people, such as a letter or a speech, is called ___ writing.", answer: "transactional", options: ["transactional", "creative", "descriptive"],
          feedback: {
            "creative": "Creative writing is the story or description you write for Paper 1. Paper 2’s writing is transactional: it communicates between people.",
            "descriptive": "Description is a Paper 1 skill. The Paper 2 forms (letters, speeches, articles, reviews, guides) are transactional writing."
          },
          why: "Your teachers define transactional writing as non-fiction that communicates information between individuals or groups." },
        { kind: "mcq", q: "Which sign-off is the safest formal choice for a letter to someone you do not know well?", options: ["With love,", "Kind regards,", "Yours sincerely,", "See you soon,"], answer: 2,
          feedback: [
            "‘With love’ is reserved for personal letters to family and close friends. A stranger would find it odd.",
            "‘Kind regards’ suits a colleague, a family member or a friend. For a formal letter to someone you do not know, use ‘Yours sincerely’.",
            "",
            "‘See you soon’ is casual speech, not a letter sign-off. The safe formal choice is ‘Yours sincerely’."
          ],
          why: "‘Yours sincerely,’ is the most common formal sign-off; stick to it if unsure." }
      ],
      modules: [
        { title: "Match the form to its convention",
          task: { kind: "match", q: "Match each form of transactional writing to the convention that belongs to it.",
            pairs: [
              ["Letter", "Addresses at the top and a sign-off such as ‘Yours sincerely’"],
              ["Speech", "Direct address to listeners and a call to action near the end"],
              ["Article", "A headline and short, information-packed paragraphs"],
              ["Review", "Personal experience in the past tense, with a clear judgement in the last paragraph"],
              ["Information guide", "Sub-sections with sub-headings that help the reader find what they need"]
            ] },
          levels: {
            support: { steps: ["Ask who receives each form: one person (letter), listeners (speech), readers of a paper (article), someone deciding whether to go (review), someone who needs to find something out (guide).", "Match the convention that serves that receiver.", "Check: addresses can only belong to the letter; a judgement can only belong to the review."],
              example: { q: "Which form does ‘Good morning, fellow students’ belong to, and why?", steps: ["It speaks directly to a group of listeners.", "That is the opening of a speech."], answer: "A speech: it addresses a live audience directly." } },
            core: { hint: "Two forms are read in print by many people; one is heard; one is sent to one reader; one is used to look things up." },
            stretch: { extend: "Reviews and speeches both give opinions and persuade. Explain, using purpose and audience, what makes them different." }
          },
          explain: "Say which convention you matched first and why it could belong to no other form.",
          why: "Letters carry addresses and a sign-off; speeches address listeners and ask for action; articles have headlines and short paragraphs; reviews judge an experience in the past tense; guides use sub-sections." },
        { title: "Form, audience, purpose from the task",
          task: { kind: "mcq", q: "Task: ‘Write a letter to the governors of your school giving your views on the statement that homework should be replaced by extra lessons.’ Which line identifies form, audience and purpose correctly?",
            options: ["Form: article; audience: parents; purpose: to entertain", "Form: letter; audience: the school governors; purpose: to argue a point of view", "Form: speech; audience: pupils; purpose: to inform", "Form: review; audience: teachers; purpose: to advise"], answer: 1,
            feedback: [
              "The task says ‘letter’, not article, and names the governors, not parents. You have answered from habit rather than from the words of the task. Underline the key information first.",
              "",
              "A letter is written, not spoken, and the task names the governors as the audience. ‘Giving your views’ means arguing, not informing.",
              "Nothing in the task is being reviewed, and the readers are governors, not teachers. ‘Giving your views on the statement’ is an argument."
            ] },
          levels: {
            support: { steps: ["Underline the form word in the task: ‘letter’.", "Underline who receives it: ‘the governors of your school’.", "Underline what you are asked to do: ‘giving your views on the statement’. That is arguing."],
              example: { q: "Task: ‘Write a review of a city you have visited for a school magazine.’ Form, audience, purpose?", steps: ["Form: review.", "Audience: pupils and their families.", "Purpose: to inform and entertain, and to help them decide whether to visit."], answer: "Form: review; audience: readers of a school magazine; purpose: to inform, entertain and recommend." } },
            core: { hint: "Every word you need is in the task. Find the form word, the receiver and the verb." },
            stretch: { extend: "Rewrite the task as a speech to the same governors. Say which conventions would change and which would stay." }
          },
          explain: "Say which word in the task gave you the form, which gave you the audience and which gave you the purpose.",
          why: "The task names the form (letter), the audience (governors) and the purpose (giving your views, which means arguing). Read it word by word." },
        { title: "Open in the right register",
          task: { kind: "mcq", q: "Which opening suits a formal letter to the editor arguing a point of view?",
            options: ["Hey, so I was thinking about zoos the other day and, like, they are kind of rubbish.", "In this letter I am going to write about zoos and give my opinion on them.", "Dear Editor, Last Saturday I queued for an hour in the rain to watch a tiger walk nine paces in one direction and nine in the other.", "Zoos are places where animals are kept. There are many zoos in Britain."], answer: 2,
            feedback: [
              "‘Hey’, ‘like’ and ‘kind of rubbish’ are the register of a chat with a friend. A letter to the editor needs a formal register that still has a voice.",
              "This is the opening your teachers tell you to avoid: it announces that you will write instead of writing. It shows no form, no craft and no argument.",
              "",
              "This is a fact stated flatly, with no form shown and no point of view. It could open an encyclopaedia entry, not a letter that argues."
            ] },
          levels: {
            support: { steps: ["Rule out anything that sounds like talking to a friend.", "Rule out any opening that announces what you are going to do.", "Look for the greeting that shows the form, and a first sentence that already has an argument in it."],
              example: { q: "Which is the better opening for a speech to your year group: ‘I am going to talk about litter.’ or ‘Look under your seat. Go on. What did you find?’", steps: ["The first announces.", "The second commands, addresses the listeners and sets a scene."], answer: "The second: it uses direct address and a scene, and never announces." } },
            core: { hint: "The right one shows the form in its first two words and makes a point by the end of its first sentence." },
            stretch: { extend: "Rewrite the chosen opening for a speech to Year 7 pupils. Keep the tiger; change the register." }
          },
          explain: "Say what the chosen opening does in its first two words, and what it does by the end of its first sentence.",
          why: "‘Dear Editor,’ fixes the form at once, and the first sentence tells a small story with an argument inside it: formal, personal and already persuading." }
      ]
    },

    /* ───────────────────────── 6 ───────────────────────── */
    { key: "q5-craft", n: 6,
      title: "Question 5: build the argument, craft the sentences",
      lead: "You will hook your reader, structure an argument with evidence and a counter-argument, bring it full circle, and show the range of punctuation and sentences that earns technical-accuracy marks.",
      covers: [7, 8, 9, 10, 12, 18, 19, 23],
      pretext: {
        words: [
          { word: "hook", means: "an opening that grabs the reader", sentence: "A question or a scene makes a good hook." },
          { word: "anecdote", means: "a short, true-sounding story used as evidence", sentence: "An anecdote about one tiger is stronger than a statistic about all tigers." },
          { word: "counter-argument", means: "the other side’s view, which you answer", sentence: "A counter-argument shows you have thought about the other side." },
          { word: "DAFOREST", means: "the list of persuasive devices your teachers use", sentence: "DAFOREST starts with direct address and ends with triples." },
          { word: "semicolon", means: "the mark ; that links two closely related sentences", sentence: "A semicolon can replace ‘and’ or ‘but’." },
          { word: "cyclical", means: "ending where you began", sentence: "A cyclical ending returns to the opening image." }
        ],
        passage: [
          "A good argument has a shape.",
          "Start with a hook: a question, a scene, a triple or an appeal to your audience.",
          "Make your first point and support it with an anecdote.",
          "Make your second point and support it with a fact, a statistic or an expert opinion.",
          "Then give the counter-argument.",
          "Say what the other side thinks, and explain why they are wrong.",
          "Conclude by summing up your view.",
          "End by returning to your opening image.",
          "Use DAFOREST devices along the way.",
          "Vary your sentence openers.",
          "Use a colon, a semicolon and brackets, each at least once.",
          "Choose ambitious vocabulary.",
          "Leave time to check your spelling and punctuation."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "افتتاحية تجذب القارئ (hook)",
            "قصة قصيرة تبدو حقيقية تُستعمل دليلاً (anecdote)",
            "رأي الطرف الآخر، الذي تردّ عليه (counter-argument)",
            "قائمة أساليب الإقناع التي يستعملها معلّموك (DAFOREST)",
            "علامة ; التي تربط جملتَين وثيقتَي الصلة (semicolon)",
            "أن تنتهي حيث بدأت (cyclical)"
          ],
          "passage": [
            "الحجّة الجيّدة لها شكل.",
            "ابدأ بجاذب (hook): سؤال، أو مشهد، أو ثلاثية، أو مناشدة لجمهورك.",
            "اطرح فكرتك الأولى وادعمها بقصة قصيرة (anecdote).",
            "اطرح فكرتك الثانية وادعمها بحقيقة، أو إحصائية، أو رأي خبير.",
            "ثم اعرض الحجّة المضادّة (counter-argument).",
            "قل ما يظنّه الطرف الآخر، واشرح لماذا هو مخطئ.",
            "اختم بتلخيص رأيك.",
            "أنهِ كتابتك بالعودة إلى صورتك الافتتاحية.",
            "استعمل أساليب DAFOREST في أثناء ذلك.",
            "نوّع بدايات جملك.",
            "استعمل النقطتَين (:) والفاصلة المنقوطة (;) والقوسَين، كلّاً منها مرة واحدة على الأقل.",
            "اختر مفردات طموحة.",
            "اترك وقتاً لمراجعة الإملاء وعلامات الترقيم."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "początek, który chwyta czytelnika (hook)",
            "krótka, brzmiąca prawdziwie historia użyta jako dowód (anecdote)",
            "pogląd drugiej strony, na który odpowiadasz (counter-argument)",
            "lista środków perswazji, której używają twoi nauczyciele (DAFOREST)",
            "znak ; który łączy dwa blisko związane zdania (semicolon)",
            "kończący się tam, gdzie się zaczął (cyclical)"
          ],
          "passage": [
            "Dobra argumentacja ma kształt.",
            "Zacznij od haczyka (hook): pytania, sceny, trójki albo zwrotu do odbiorców.",
            "Przedstaw swój pierwszy argument i poprzyj go anegdotą.",
            "Przedstaw drugi argument i poprzyj go faktem, statystyką albo opinią eksperta.",
            "Potem podaj kontrargument.",
            "Powiedz, co myśli druga strona, i wyjaśnij, dlaczego się myli.",
            "Zakończ, podsumowując swój pogląd.",
            "Na koniec wróć do obrazu z początku.",
            "Po drodze używaj środków z listy DAFOREST.",
            "Zmieniaj początki zdań.",
            "Użyj dwukropka, średnika i nawiasów, każdego co najmniej raz.",
            "Wybieraj ambitne słownictwo.",
            "Zostaw czas na sprawdzenie ortografii i interpunkcji."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um início que agarra o leitor (hook)",
            "uma história curta, que parece verdadeira, usada como prova (anecdote, anedota)",
            "a opinião do outro lado, à qual você responde (counter-argument, contra-argumento)",
            "a lista de recursos persuasivos que os seus professores usam (DAFOREST)",
            "o sinal ; que liga duas frases muito relacionadas (semicolon, ponto e vírgula)",
            "terminar onde se começou (cyclical, cíclico)"
          ],
          "passage": [
            "Um bom argumento tem uma forma.",
            "Comece com um hook: uma pergunta, uma cena, uma lista de três ou um apelo ao seu público.",
            "Apresente o seu primeiro ponto e apoie-o com uma anedota (anecdote).",
            "Apresente o seu segundo ponto e apoie-o com um facto/fato, uma estatística ou a opinião de um especialista.",
            "Depois apresente o contra-argumento.",
            "Diga o que o outro lado pensa, e explique por que está errado.",
            "Conclua resumindo a sua opinião.",
            "Termine voltando à imagem com que começou.",
            "Use os recursos DAFOREST pelo caminho.",
            "Varie o início das suas frases.",
            "Use dois pontos, um ponto e vírgula e parênteses, cada um pelo menos uma vez.",
            "Escolha um vocabulário ambicioso.",
            "Deixe tempo para rever a sua ortografia e a sua pontuação."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "bilow akhristaha qabsata (hook)",
            "sheeko gaaban oo run u eg oo caddayn loo isticmaalo (anecdote)",
            "aragtida dhinaca kale, oo aad ka jawaabto (counter-argument)",
            "liiska farsamooyinka qancinta ee macallimiintaadu isticmaalaan (DAFOREST)",
            "calaamadda ; oo isku xirta laba weedhood oo aad isugu dhow (semicolon)",
            "ku soo gabagabayn meeshii aad ka bilowday (cyclical)"
          ],
          "passage": [
            "Dood wanaagsan waxay leedahay qaab.",
            "Ku bilow hook: su'aal, muuqaal, saddex-geesood (triple) ama baaq aad dadkaaga u dirto.",
            "Samee hadalkaaga koowaad oo ku taageer sheeko gaaban (anecdote).",
            "Samee hadalkaaga labaad oo ku taageer xaqiiqo, tiro-koob ama ra'yi khabiir.",
            "Kadibna sheeg aragtida dhinaca kale (counter-argument).",
            "Sheeg waxa dhinaca kale ka fikiro, oo sharrax sababta ay u khaldan yihiin.",
            "Ku soo gabagabee adigoo aragtidaada soo koobaya.",
            "Ku dhammee adigoo ku noqonaya sawirkii aad ku bilowday.",
            "Inta aad qoraysid isticmaal farsamooyinka DAFOREST.",
            "Kala duwan sida aad weedhahaaga u bilowdo.",
            "Isticmaal colon, semicolon iyo laameyn (brackets), mid kasta ugu yaraan hal mar.",
            "Dooro erayo hammi badan.",
            "Waqti u hay hubinta higgaaddaada iyo calaamadaynta."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "початок, який захоплює читача (hook)",
            "коротка правдоподібна історія, використана як доказ (anecdote)",
            "погляд іншої сторони, на який ви відповідаєте (counter-argument)",
            "список переконливих прийомів, який використовують ваші вчителі (DAFOREST)",
            "знак ; який з’єднує два тісно пов’язані речення (semicolon)",
            "такий, що закінчується там, де почався (cyclical)"
          ],
          "passage": [
            "Хороша аргументація має форму.",
            "Почніть із зачіпки (hook): запитання, сцена, трійка або звернення до аудиторії.",
            "Висловіть свою першу думку і підтримайте її анекдотом (anecdote).",
            "Висловіть свою другу думку і підтримайте її фактом, статистикою або думкою експерта.",
            "Потім наведіть контраргумент (counter-argument).",
            "Скажіть, що думає інша сторона, і поясніть, чому вона помиляється.",
            "Завершіть, підсумувавши свій погляд.",
            "Закінчіть, повернувшись до свого початкового образу.",
            "Використовуйте прийоми DAFOREST дорогою.",
            "Урізноманітнюйте початки речень.",
            "Використайте двокрапку, крапку з комою та дужки, кожне хоча б один раз.",
            "Обирайте амбітну лексику.",
            "Залиште час перевірити правопис і пунктуацію."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایسی شروعات جو قاری کو پکڑ لے (hook)",
            "ایک چھوٹی، سچی لگنے والی کہانی جو شہادت کے طور پر استعمال ہو (anecdote)",
            "دوسری طرف کی رائے، جس کا آپ جواب دیتے ہیں (counter-argument)",
            "قائل کرنے والی تکنیکوں کی وہ فہرست جو آپ کے اساتذہ استعمال کرتے ہیں (DAFOREST)",
            "نشان ; جو دو قریبی تعلق والے جملوں کو جوڑتا ہے (semicolon)",
            "وہاں ختم کرنا جہاں سے شروع کیا تھا (cyclical)"
          ],
          "passage": [
            "اچھی دلیل کی ایک شکل ہوتی ہے۔",
            "ایک hook سے شروع کریں: ایک سوال، ایک منظر، تین چیزوں کا سلسلہ، یا اپنے قاری سے اپیل۔",
            "اپنا پہلا نکتہ بیان کریں اور اسے ایک واقعے (anecdote) سے سہارا دیں۔",
            "اپنا دوسرا نکتہ بیان کریں اور اسے کسی حقیقت، کسی شماریاتی عدد یا کسی ماہر کی رائے سے سہارا دیں۔",
            "پھر مخالف دلیل (counter-argument) دیں۔",
            "بتائیں کہ دوسری طرف کے لوگ کیا سوچتے ہیں، اور وضاحت کریں کہ وہ غلط کیوں ہیں۔",
            "اپنی رائے کا خلاصہ کر کے نتیجہ نکالیں۔",
            "اپنی شروع کی تصویر پر واپس آ کر ختم کریں۔",
            "راستے میں DAFOREST کی تکنیکیں استعمال کریں۔",
            "اپنے جملوں کی شروعات بدلتے رہیں۔",
            "ایک colon، ایک semicolon اور بریکٹ، ہر ایک کم سے کم ایک بار استعمال کریں۔",
            "اونچے درجے کے لفظ چنیں۔",
            "اپنی املا اور رموزِ اوقاف جانچنے کے لیے وقت بچا کر رکھیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "Hook your reader",
          paragraphs: [
            "Your teachers give you four ways to open. A rhetorical question (or three in a row): ‘Have you ever paid to watch an animal be bored?’ Setting the scene: ‘Picture this: a queue of two hundred people in the rain, waiting to look at an animal that would rather not be looked at.’ Triples, often with a repeated word: ‘Ticket: check. Camera: check. Conscience: left in the car park.’ An appeal to the audience: ‘I know you love animals. I know you would never hurt one. So why…?’",
            "The openings to avoid announce instead of beginning: ‘In this article I am going to write about…’. They tell the examiner you have no hook. Equally, you can close with a question, a fact or a scene, and the strongest pieces close with the image they opened with.",
            "Read the original model letter opening again. It opens with a scene told as an anecdote, uses a very short sentence for weight, and ends its first paragraph with a direct appeal to the reader."
          ],
          quote: { text: "Dear Editor, Last Saturday I queued for an hour in the rain to watch a tiger walk nine paces in one direction and nine in the other. I paid for the privilege. So did two hundred other people. If that sounds like entertainment to you, read no further; if it sounds like something we should have outgrown, I hope you will give me the rest of this page.",
            source: "Original model letter opening written for Ad Astra" },
          tip: "Write your hook last if you are stuck. Plan the argument first; the opening image often comes from your best paragraph." },
        { heading: "The shape of an argument",
          paragraphs: [
            "Your teachers’ plan for an argument runs: a hook; section 1, your view explained in more detail, linked back to the hook and supported by an anecdote or personal example; section 2, a second point built with an expert opinion, facts or statistics (these can be invented, but keep them realistic); section 3, the counter-argument, what someone would argue against you and how you answer them; section 4, a conclusion that sums up why you are right; and an ending that brings the argument full circle to the opening hook.",
            "Inside each section, use PED: Point, Evidence, Development. State the point with a signpost (‘Firstly’, ‘In addition’). Give the evidence: a fact, a statistic, an expert opinion or an anecdote. Then develop it: explain its significance, add adjectives and examples, and show why it matters to your reader.",
            "A single-sentence paragraph, used once, lands a blow. A strong one-line finish is the ‘punchy’ ending your teachers ask for in persuasive writing."
          ],
          worked: { q: "Plan one PED paragraph for the view that zoos teach children very little.",
            steps: ["Point: Firstly, a zoo visit teaches a child to tick a list, not to understand an animal.", "Evidence (anecdote): a six-year-old with a list that says ‘lions, tigers, penguins, the big snake’, ticking the tiger after thirty seconds at the glass.", "Development: what has she learned? That a tiger is orange, and that it walks up and down. Nothing about where it lives, how it hunts, or why it paces. The list is complete; the understanding is empty."],
            answer: "Point, then an anecdote as evidence, then development that asks what the evidence proves: three moves, one paragraph." },
          tip: "Facts and statistics may be made up, but they must sound real. ‘Nearly half’ convinces; ‘99.9 per cent’ does not." },
        { heading: "DAFOREST and the counter-argument",
          paragraphs: [
            "DAFOREST is your teachers’ list of persuasive devices: Direct address; Alliteration and Anecdote; Facts; Opinions, your own and an expert’s; Rhetorical questions and Repetition; Emotive language; Statistics; Triples. Two or three used well beat eight used badly. Use them to serve the argument, not to decorate it.",
            "The counter-argument is where many answers go thin. Give the other side a fair sentence: ‘Now, I know that some will argue that zoos protect endangered species, and that without them several would already be gone.’ Then turn with ‘However…’ and refute it: ‘However, a breeding programme does not need a gift shop, a café and two hundred people banging on the glass.’ A subordinating conjunction (‘Although…’, ‘While…’) is a neat way to hold both sides in one sentence before you come down on yours.",
            "Ambitious vocabulary lifts the argument. Your teachers’ word lists include pernicious, insidious, detrimental, corrosive and debilitating for harm, and vibrant, alluring, captivating and mesmerising for praise. Use one or two where they are exactly right."
          ],
          tip: "Refute does not mean ignore. Name the other view, then show why yours is stronger." },
        { heading: "AO6: punctuation, sentences and vocabulary",
          paragraphs: [
            "Sixteen of the forty marks are for technical accuracy. The examiner wants secure sentence demarcation, a wide range of punctuation, a full range of sentence forms used for effect, Standard English with control of complex grammar, accurate spelling and interesting vocabulary. Your teachers’ punctuation ladder: a colon to introduce an explanation or a list (‘London is a paradise for food lovers: every street offers something new.’); a semicolon to link two closely related ideas instead of a conjunction (‘The tiger paced; the crowd kept filming.’); brackets for an aside (‘the tiger (whose name, a sign told us, was Rajan)’); an ellipsis for a pause; quotation marks for a quoted opinion; and embedded clauses.",
            "Vary your openers. Your teachers list: a prepositional phrase (‘Under the dripping canopy…’), a fronted adverbial (‘Slowly, …’), a subordinating conjunction (‘Although…’), a modal verb (‘We must…’), a temporal connective (‘After an hour…’), a present or past participle phrase (‘Watching the tiger turn…’, ‘Exhausted by the queue, …’), a sentence inversion (‘Not once did the tiger look at us.’) and a conditional (‘Had we stayed at home…’)."
          ],
          worked: { q: "Your teachers’ warm-up: rewrite a boring sentence using at least two DAFOREST techniques, two strong adjectives and punctuation that fits the mood. Boring sentence: ‘The zoo has a lot of animals.’",
            steps: ["Add direct address and a rhetorical question: ‘Have you counted them?’", "Add a triple and two strong adjectives: ‘restless tigers, bewildered giraffes, bored, blinking lions’.", "Change the punctuation: a colon to introduce the list, a question mark, a short final sentence."],
            answer: "Have you counted them? Behind the glass the zoo holds hundreds of animals: restless tigers, bewildered giraffes, bored, blinking lions. Every one of them is watching you." },
          tip: "Before you hand in: one colon, one semicolon, one pair of brackets, three different openers. Tick them off." }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is a rhetorical question used as a hook?", options: ["Have you ever paid to watch an animal be bored?", "Zoos were first opened to the public in the nineteenth century.", "I think zoos are wrong.", "Please visit the zoo this weekend."], answer: 0,
          feedback: [
            "",
            "This is a fact. Facts can open a piece, but a rhetorical question is a question asked for effect, with no answer expected.",
            "This is an opinion stated flatly. It has no question mark and makes the reader do nothing. A hook asks or shows.",
            "This is an imperative, a command. It tells the reader what to do rather than asking a question for effect."
          ],
          why: "A rhetorical question is asked for effect, not for an answer, and it makes the reader think before you have made your point." },
        { kind: "gap", q: "In an argument, the paragraph that gives the other side’s view and then answers it is the ___-argument.", answer: "counter", options: ["counter", "main", "closing"],
          feedback: {
            "main": "Your main argument is your own view. The paragraph that presents and answers the other side is the counter-argument.",
            "closing": "The closing paragraph sums up your view and returns to the hook. The counter-argument comes before it, answering the other side."
          },
          why: "The counter-argument states what someone would argue against you and then refutes it." },
        { kind: "mcq", q: "Which sentence uses a semicolon correctly?", options: ["The tiger paced; the crowd kept filming.", "The tiger; paced along the fence.", "The tiger paced along; the fence.", "The tiger paced, the crowd kept filming;"], answer: 0,
          feedback: [
            "",
            "A semicolon cannot sit between a subject and its verb. It joins two complete, closely related sentences.",
            "‘The fence’ is not a complete sentence, so a semicolon cannot come before it. Each side of a semicolon must stand alone.",
            "This uses a comma where the semicolon should be (a comma splice) and then puts a semicolon where a full stop belongs."
          ],
          why: "A semicolon links two complete sentences that are closely related: ‘The tiger paced; the crowd kept filming.’" }
      ],
      modules: [
        { title: "Put the argument in order",
          task: { kind: "order", q: "Put the parts of a Question 5 argument in the order your teachers plan them.",
            items: ["Hook the reader (a question, a scene, a triple or an appeal)", "First point, supported by an anecdote or personal example", "Second point, supported by an expert opinion, facts or statistics", "Counter-argument: what the other side says, and why they are wrong", "Conclusion: sum up why your view is right", "Ending: return to your opening hook (full circle)"] },
          levels: {
            support: { steps: ["The hook always comes first; the full-circle ending always comes last.", "Your own points come before the other side’s.", "Anecdote comes before expert evidence in your teachers’ plan.", "The conclusion sums up; the ending echoes the hook."],
              example: { q: "Order these parts of a debate speech: the other side’s view, my opening position, my conclusion, my reasons.", steps: ["Open with your position.", "Give your reasons.", "Answer the other side.", "Conclude."], answer: "Opening position, my reasons, the other side’s view, conclusion." } },
            core: { hint: "Hook, two points, the other side, sum up, echo the hook." },
            stretch: { extend: "Explain why a counter-argument placed just before the conclusion makes the conclusion more convincing, not less." }
          },
          explain: "Explain why the ending should return to the hook rather than introduce a new idea.",
          why: "Hook; point with anecdote; point with expert evidence; counter-argument refuted; conclusion; full circle. The shape keeps the reader with you from first line to last." },
        { title: "Name the DAFOREST device",
          task: { kind: "match", q: "Match each sentence to the DAFOREST device it mainly uses.",
            pairs: [
              ["‘You know that feeling, don’t you? The one where you look away.’", "direct address"],
              ["‘Cold, cramped and cruel.’", "triple"],
              ["‘A survey of two thousand visitors found that nearly half left within two hours.’", "statistic"],
              ["‘Imagine a whole life measured out in nine paces.’", "emotive language"],
              ["‘Professor Ali, who has studied big cats for thirty years, calls it a slow cruelty.’", "expert opinion"]
            ] },
          levels: {
            support: { steps: ["‘You’ speaking straight to the reader is direct address.", "Three items in a row is a triple.", "A number from a survey or study is a statistic.", "Words chosen to make you feel (‘a whole life’, ‘measured out’) are emotive language.", "A named specialist’s view is an expert opinion."],
              example: { q: "Which device is ‘Bored, blinking, broken.’?", steps: ["Three words.", "They start with the same sound."], answer: "A triple (with alliteration)." } },
            core: { hint: "Look for ‘you’, for three, for a number, for feeling, for a name with a job." },
            stretch: { extend: "Write one sentence that uses two DAFOREST devices at once, and name them." }
          },
          explain: "Say which device you spotted fastest and what gave it away.",
          why: "Direct address speaks to ‘you’; a triple comes in threes; a statistic is a number; emotive language makes the reader feel; an expert opinion comes with a name and a title. The survey and the professor are invented, as your teachers allow, but kept realistic." },
        { title: "Question 5 practice: argue your view",
          // contexts: the same argument in two other forms (letter, speech), so the pupil chooses the text-type and practises its conventions.
          contexts: [
            { label: "Letter to a newspaper",
              q: "Question 5 practice. ‘Zoos belong to the past. No wild animal should be kept for people to look at.’ Write a letter to your local newspaper in which you argue your point of view on this statement. For practice, write your opening and your first two paragraphs; a full exam answer is worth 40 marks.",
              why: "Show the form at once: your address top right, the newspaper’s on the left, ‘Dear Editor,’ and a first sentence that already argues. Keep the same shape (hook, point with anecdote, point with evidence, counter-argument, conclusion, full circle) and sign off ‘Yours sincerely,’." },
            { label: "Speech to your year group",
              q: "Question 5 practice. ‘Zoos belong to the past. No wild animal should be kept for people to look at.’ Write the text of a speech for a Year 10 assembly in which you argue your point of view on this statement. For practice, write your opening and your first two paragraphs; a full exam answer is worth 40 marks.",
              why: "Open with a direct address (‘Good morning, Year 10’) or three questions, introduce the topic, signpost your points, and talk to ‘you’ and ‘we’ throughout. Plan a specific action to ask for near the end and a final line that hammers the point home." }
          ],
          task: { kind: "written", q: "Question 5 practice. ‘Zoos belong to the past. No wild animal should be kept for people to look at.’ Write an article for a broadsheet newspaper in which you argue your point of view on this statement. For practice, write your headline, your hook and your first two paragraphs; a full exam answer is worth 40 marks.", marks: 40,
            criteria: [
              "I show the form from my first line (a headline, ‘Dear Editor,’ or a direct address to my listeners).",
              "I open with a hook: a question, a scene, a triple or an appeal to the audience, never ‘I am going to write about…’.",
              "My first point uses an anecdote or personal example, developed with PED.",
              "My second point uses an expert opinion, a fact or a statistic that sounds realistic.",
              "My plan includes a counter-argument that I refute, a conclusion and an ending that returns to the hook.",
              "I use two or three DAFOREST devices, a range of sentence openers, and a colon, a semicolon and brackets."
            ],
            model: "Nine Paces\n\nHave you ever watched an animal give up? I have. Last Saturday, in the rain, I stood with two hundred other people in front of a tiger who walked nine paces one way and nine paces back, on grass he had long since worn to mud. A boy beside me banged on the glass. The tiger did not look up. We had paid, all of us, for this.\n\nFirstly, let us be honest about what a zoo teaches a child. My daughter arrived with a list: lions, tigers, penguins, the big snake. By eleven o’clock every one was ticked, and she could tell you that a tiger is orange and walks up and down. She could not tell you where it lives, what it hunts, or why it paces (the keeper, when I asked, could not tell me either). The list was complete; the understanding was empty.\n\nSecondly, the experts no longer disagree. Dr Amara Osei, who has spent twenty years studying big cats in the wild, told a conference last spring that ‘a tiger in an enclosure is a tiger with nothing to do, and an animal with nothing to do is an animal in pain’. Nearly half of the visitors in one survey said they left feeling uneasy. We know. We go anyway." },
          levels: {
            support: { steps: ["Decide your view in one sentence: agree, disagree, or agree with limits.", "Write the headline (or ‘Dear Editor,’ or ‘Good morning, Year 10’).", "Hook: one of the four openers. Make it about a single animal, not about zoos in general.", "Paragraph 1: Point, Evidence (an anecdote), Development.", "Paragraph 2: Point, Evidence (an expert opinion or a realistic statistic), Development.", "Note your counter-argument, conclusion and full-circle ending in your plan, even if you do not write them now.", "Check: a colon, a semicolon, brackets, three openers, two or three DAFOREST devices."],
              example: { q: "Write the headline, hook and first paragraph of an article arguing that school uniform should be scrapped.",
                steps: ["Headline: a short, sharp phrase.", "Hook: set a scene or ask a question.", "Paragraph 1: anecdote as evidence, then develop."],
                answer: "Dressed to Conform\n\nPicture this: it is seven in the morning, minus two outside, and a fourteen-year-old is being sent home because her coat is the wrong shade of black. Firstly, uniform does not teach discipline; it teaches obedience to rules nobody can explain. Ask any teacher why blazers are compulsory in July and watch them reach for the word ‘tradition’. A rule that cannot be explained is not a standard: it is a habit (an expensive one), and habits are not worth a child’s morning." } },
            core: { hint: "Open on one tiger, not on all zoos. The anecdote is your hook and your first evidence at once." },
            stretch: { extend: "Write your counter-argument paragraph: give the strongest case for zoos (conservation) a fair sentence, then refute it with a subordinating conjunction and a single-sentence paragraph." }
          },
          explain: "Say which hook you chose and why it suits your form and audience.",
          why: "A strong Question 5 answer shows its form at once, hooks, argues with PED, uses realistic evidence, answers the other side, and ends where it began, with the punctuation and sentence range that earns the 16 technical marks." }
      ]
    }
  ],

  sources: {
    deckDump: "y10_u2_lang_paper2.txt",
    decksUsed: [
      "L01 Intro and Q1 2019 paper.pptx",
      "L02 Q1 & Q2 2019 paper.pptx",
      "L03 Q3 2019 paper.pptx",
      "Q4 lesson 2019 paper.pptx",
      "Mid course lesson 2020 paper.pptx",
      "Q2 and Q3 2021 paper camping.pptx",
      "Changes to questions 2 and 4 for Paper.pptx (teacher reference, not a lesson)",
      "L01 Q 5 2019 paper.pptx",
      "L02 Article writing to argue social media.pptx",
      "L03 article persuade AO6 focus.pptx",
      "Persuasive writing lesson Set 5 .pptx",
      "M1 L3 Transactional Speech Practice.pptx",
      "M3 L05 - TW AFOREST Revision review.pptx (identical to M3 L16; counted once)",
      "M3 L07 - TW Information Guide.pptx",
      "M3 L09 Form purpose audience.pptx",
      "M3 L10 Speech activity.pptx",
      "M3 L11 Speech con't.pptx",
      "M3 L12 - TW Letter Writing.pptx",
      "M3 L14 & 15 -  Reflective Article Writing.pptx (two lessons)",
      "M3 L17 Review Writing Anna Lesson.pptx",
      "M4 L02 - LDO Models of Reviews.pptx",
      "M4 L05 - Review Structure.pptx",
      "Cover article writing with openings.pptx",
      "Speeches and rhetorical devices.pptx",
      "Grammatical devices  sentence starters.pptx (one-slide resource, folded into chapter 6)"
    ],
    notes: "Lesson titles, objectives, big questions, key words, timings (13 / 2 / 10 / 15 / 20 / 45), the Question 3 toolkit, the Question 4 sentence stems, DAFOREST, PED, the argument structure and the AO5/AO6 criteria are taken from the decks above. Question 1 is taught as the department teaches it and as AQA’s 2026 FAQ confirms (Paper 1’s new Question 1 ‘will be the same as Paper 2, Question 1’): shade the boxes of the true statements, cross out a whole box to change an answer. Question 2 uses the 2026 ‘What can you infer about the differences…’ wording and Question 4’s second bullet ‘comment on the methods the writers use’, both from the department’s ‘Changes to questions 2 and 4’ deck and AQA’s FAQ. COPYRIGHT: none of the decks’ reading extracts or model texts is reproduced (the Fogle and Cracknell account, the 19th-century steamship account, the mountain and camping sources, the gaming article, the consumerism speech, the sexism and homelessness models, the review and travel models, the Macbeth bell tasks). Both reading sources here, Source A ‘Behind the Glass’ (2024) and Source B, Charlotte’s letter (1854), and the model letter opening are original passages written for Ad Astra; every question, feedback line and model answer is original. verify.py checks that every quotation in curly double quotes appears verbatim in those passages. No pupil or staff names from the decks are used."
  }
};
