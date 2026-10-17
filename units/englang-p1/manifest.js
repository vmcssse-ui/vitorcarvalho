// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE English Language 8700 · Paper 1 · Year 10 Unit 4 · schema astra/2
//
// QUOTATION RULE FOR THIS FILE (checked by verify.py):
//   “curly double quotes” are used ONLY for words quoted from a reading extract. Every such span must
//   appear verbatim in the original passages stored in verify.py (CORPUS). Dialogue inside the extracts,
//   statements, sentence openers and example sentences use ‘single quotes’.
//   All reading extracts are ORIGINAL passages written for Ad Astra. No text from the department decks'
//   copyright extracts, AQA papers or mark schemes is reproduced.
//
// astra/2 (17 Oct 2026): adds feedback on every mcq/gap item, explain on every module, contexts on five
//   modules (three further original passages: ‘Storm at Sea’, ‘The Empty School’, ‘Market at Dawn’, each
//   ≤ 90 words, stored in verify.py), glossary chapters, connections, meta.spacing and meta.constellation.
//   No lesson, chapter, pretext, question, answer or extract from astra/1 was changed (verify.py checks
//   a fingerprint of those fields). Items that carry contexts have context-neutral feedback, because the
//   contexts share the task's options, answer and feedback by construction.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["englang-p1"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "englang-p1",
    subjectKey: "english",
    subject: "English Language",
    board: "AQA",
    spec: "8700",
    specRef: "Paper 1: Explorations in creative reading and writing",
    year: 10,
    tier: "GCSE (single tier)",
    title: "Language Paper 1",
    sub: "Read a story closely, answer four reading questions with confidence, then write a description or story of your own.",
    bigQuestion: "What does Paper 1 involve, and how do I read and prepare a text so I know the story being told?",
    lessonCount: 8,
    spacing: [2, 7, 30],
    // Six stars on the Scriptorium plate, one per chapter, running up the left side and over the top.
    // They avoid the illuminated frame (x 0.61–0.91, y 0.17–0.79) and the ink-well (around 0.35, 0.71).
    constellation: [[0.10, 0.86], [0.08, 0.55], [0.18, 0.26], [0.40, 0.12], [0.62, 0.10], [0.92, 0.12]]
  },

  lessons: [
    { n: 1, title: "Language Paper 1: introduction, Question 1 and Question 2",
      question: "What does Paper 1 involve, and how do I analyse a writer’s language?",
      keywords: ["verb phrase", "abstract noun", "onomatopoeia", "sibilance", "metaphor", "simile"] },
    { n: 2, title: "Language Paper 1: Question 3",
      question: "What do we mean by structure, and how do structural devices create effects?",
      keywords: ["omniscient narrator", "cyclical", "foreshadowing", "chronological", "juxtaposition"] },
    { n: 3, title: "Language Paper 1: Question 4",
      question: "What do we mean by evaluate, and how do I find evidence for and against a statement?",
      keywords: ["evaluate", "refute", "statement", "evidence"] },
    { n: 4, title: "Creative Writing: Structuring Our Writing",
      question: "How can I use structural features to build my own creative writing?",
      keywords: ["drop in and describe", "show not tell", "pathetic fallacy", "shift"] },
    { n: 5, title: "Creative writing: planning and crafting",
      question: "How do I plan a story and craft sentences that hook the reader?",
      keywords: ["Freytag’s pyramid", "foreshadowing", "sentence openers", "semicolon"] },
    { n: 6, title: "Language Paper 1 – 2026: reading strategy, Question 1 and Question 2",
      question: "How do I read and prepare a text to make sure I know the story being told?",
      keywords: ["5Ws", "simile", "imagery", "hyperbole"] },
    { n: 7, title: "Language Paper 1 – 2026: Question 3",
      question: "How has the writer structured the whole text to create one particular effect?",
      keywords: ["contrast", "flashback", "shift in focus"] },
    { n: 8, title: "Language Paper 1 – 2026: Question 4",
      question: "To what extent do I agree with a statement about the text, and how do I argue my judgement?",
      keywords: ["stance", "counter-argument", "final judgement"] }
  ],

  glossary: [
    { term: "source", means: "The extract from a story that you read in Section A.", chapter: "know-the-paper" },
    { term: "retrieve", means: "To find information that is clearly stated in the text.", chapter: "q1-find-information" },
    { term: "infer", means: "To work out something the writer suggests but does not say directly.", chapter: "know-the-paper" },
    { term: "subject terminology", means: "The proper names for techniques, such as ‘simile’ or ‘flashback’.", chapter: "q2-language" },
    { term: "simile", means: "A comparison using ‘like’ or ‘as’.", chapter: "q2-language" },
    { term: "metaphor", means: "Describing something as if it were something else.", chapter: "q2-language" },
    { term: "personification", means: "Giving human actions or feelings to something that is not human.", chapter: "q2-language" },
    { term: "structure", means: "How a writer orders and organises a text from beginning to end.", chapter: "q3-structure" },
    { term: "shift in focus", means: "A change in what the reader’s attention is directed towards.", chapter: "q3-structure" },
    { term: "flashback", means: "A jump back in time to an earlier event or memory.", chapter: "q3-structure" },
    { term: "foreshadowing", means: "A hint early in a text about something that will happen later.", chapter: "q3-structure" },
    { term: "cyclical structure", means: "When the ending echoes or mirrors the beginning.", chapter: "q3-structure" },
    { term: "evaluate", means: "To judge how well, or how far, something is true, using evidence.", chapter: "q4-evaluation" },
    { term: "refute", means: "To argue against a statement, with evidence.", chapter: "q4-evaluation" },
    { term: "pathetic fallacy", means: "Weather or setting that reflects a character’s mood.", chapter: "q5-writing" },
    { term: "embedded quotation", means: "A short quotation fitted smoothly into your own sentence.", chapter: "q2-language" }
  ],

  // Connections game: four groups of four, all sixteen terms drawn from the glossary above.
  connections: [
    { group: "Language techniques (Question 2)", terms: ["simile", "metaphor", "personification", "pathetic fallacy"] },
    { group: "Structural features (Question 3)", terms: ["shift in focus", "flashback", "foreshadowing", "cyclical structure"] },
    { group: "What the reading questions ask you to do", terms: ["retrieve", "infer", "evaluate", "refute"] },
    { group: "Tools for writing your answer", terms: ["source", "structure", "subject terminology", "embedded quotation"] }
  ],

  chapters: [
    /* ───────────────────────── 1 ───────────────────────── */
    { key: "know-the-paper", n: 1,
      title: "Know the paper: map, timings and first read",
      lead: "You will know exactly what Paper 1 asks, how long to spend on each part, and how to read the source before you answer.",
      covers: [1, 6],
      pretext: {
        words: [
          { word: "source", means: "the piece of writing printed in the exam", sentence: "Read the source twice before you write anything." },
          { word: "fiction", means: "writing about made-up people and events", sentence: "Paper 1 uses fiction, so the source is part of a story." },
          { word: "summarise", means: "say the main idea in a few words", sentence: "Summarise the beginning of the story in one line." },
          { word: "infer", means: "work out something the writer suggests but does not say", sentence: "From her numb fingers, you can infer that Nell is cold." },
          { word: "proofread", means: "check your writing carefully for mistakes", sentence: "Keep five minutes at the end to proofread your answers." }
        ],
        passage: [
          "Paper 1 is one exam that lasts one hour and forty-five minutes.",
          "It is worth half of your English Language GCSE.",
          "Section A is reading, and Section B is writing.",
          "In Section A, you read one source from a story.",
          "You answer four questions about it.",
          "In Section B, you write your own description or story.",
          "First, spend about fifteen minutes reading the source and the questions.",
          "Read the source once to understand the story.",
          "Then read it again with the questions in mind.",
          "Split it into a beginning, a middle and an end.",
          "Spend about forty minutes on Section A, roughly a minute for each mark.",
          "Spend forty-five minutes on Section B, with five minutes to plan.",
          "Keep five minutes at the end to check your work."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "النصّ المطبوع في ورقة الامتحان (source)",
            "كتابة عن أشخاص وأحداث من الخيال (fiction)",
            "قول الفكرة الرئيسية في كلمات قليلة (summarise)",
            "استنتاج شيء يُلمِح إليه الكاتب ولا يقوله مباشرة (infer)",
            "مراجعة ما كتبته بعناية بحثاً عن الأخطاء (proofread)"
          ],
          "passage": [
            "الورقة الأولى (Paper 1) امتحان واحد يستمر ساعةً وخمساً وأربعين دقيقة.",
            "وهي تساوي نصف درجة شهادة GCSE في اللغة الإنجليزية.",
            "القسم A للقراءة، والقسم B للكتابة.",
            "في القسم A تقرأ نصاً واحداً (source) مأخوذاً من قصة.",
            "وتجيب عن أربعة أسئلة حوله.",
            "في القسم B تكتب وصفاً أو قصة من تأليفك.",
            "أولاً، اقضِ نحو خمس عشرة دقيقة في قراءة النص والأسئلة.",
            "اقرأ النص مرة واحدة لتفهم القصة.",
            "ثم اقرأه مرة أخرى وأنت تفكر في الأسئلة.",
            "قسِّمه إلى بداية ووسط ونهاية.",
            "اقضِ نحو أربعين دقيقة في القسم A، أي دقيقة تقريباً لكل درجة.",
            "اقضِ خمساً وأربعين دقيقة في القسم B، منها خمس دقائق للتخطيط.",
            "احتفظ بخمس دقائق في النهاية لمراجعة عملك."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "fragment tekstu wydrukowany w arkuszu egzaminacyjnym (source)",
            "pisanie o wymyślonych ludziach i zdarzeniach (fiction)",
            "powiedzieć główną myśl w kilku słowach (summarise)",
            "domyślić się czegoś, co autor sugeruje, ale nie mówi wprost (infer)",
            "uważnie sprawdzić swój tekst, szukając błędów (proofread)"
          ],
          "passage": [
            "Arkusz 1 (Paper 1) to jeden egzamin, który trwa godzinę i czterdzieści pięć minut.",
            "Jest wart połowę twojego egzaminu GCSE z języka angielskiego.",
            "Sekcja A to czytanie, a sekcja B to pisanie.",
            "W sekcji A czytasz jeden tekst źródłowy (source) z opowiadania.",
            "Odpowiadasz na cztery pytania na jego temat.",
            "W sekcji B piszesz własny opis albo własne opowiadanie.",
            "Najpierw poświęć około piętnastu minut na przeczytanie tekstu i pytań.",
            "Przeczytaj tekst raz, żeby zrozumieć historię.",
            "Potem przeczytaj go jeszcze raz, pamiętając o pytaniach.",
            "Podziel go na początek, środek i koniec.",
            "Poświęć około czterdziestu minut na sekcję A, czyli mniej więcej minutę na każdy punkt.",
            "Poświęć czterdzieści pięć minut na sekcję B, w tym pięć minut na plan.",
            "Zostaw pięć minut na końcu, żeby sprawdzić swoją pracę."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o texto impresso no exame (source)",
            "escrita sobre pessoas e acontecimentos inventados (fiction)",
            "dizer a ideia principal em poucas palavras (summarise)",
            "descobrir algo que o escritor sugere mas não diz (infer)",
            "verificar a sua escrita com cuidado para encontrar erros (proofread)"
          ],
          "passage": [
            "O Paper 1 é um exame que dura uma hora e quarenta e cinco minutos.",
            "Vale metade do seu GCSE de English Language.",
            "A Parte A (Section A) é de leitura, e a Parte B (Section B) é de escrita.",
            "Na Parte A, você lê um texto (source) tirado de uma história.",
            "Você responde a quatro perguntas sobre esse texto.",
            "Na Parte B, você escreve a sua própria descrição ou história.",
            "Primeiro, use cerca de quinze minutos para ler o texto e as perguntas.",
            "Leia o texto uma vez para entender a história.",
            "Depois, leia outra vez pensando nas perguntas.",
            "Divida a história em início, meio e fim.",
            "Use cerca de quarenta minutos na Parte A, mais ou menos um minuto por ponto.",
            "Use quarenta e cinco minutos na Parte B, com cinco minutos para fazer um plano.",
            "Guarde cinco minutos no fim para rever o seu trabalho."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "qoraalka ku daabacan warqadda imtixaanka (source)",
            "qoraal ku saabsan dad iyo dhacdooyin la hindisay (fiction)",
            "fikradda ugu muhiimsan dhawr eray ku sheeg (summarise)",
            "wax qoraagu tilmaamayo laakiin aan si toos ah u sheegin garo (infer)",
            "qoraalkaaga si taxaddar leh u hubi khaladaad (proofread)"
          ],
          "passage": [
            "Paper 1 waa hal imtixaan oo socda hal saac iyo shan iyo afartan daqiiqo.",
            "Wuxuu u dhigmaa kala badh GCSE-gaaga English Language.",
            "Qaybta A waa akhris, Qaybta B-na waa qoraal.",
            "Qaybta A, waxaad akhrisaa hal qoraal (source) oo sheeko ka soo baxay.",
            "Afar su'aalood ayaad ka jawaabtaa.",
            "Qaybta B, waxaad qortaa sharraxaad ama sheeko adigu kuu gaar ah.",
            "Marka hore, ku qaado ilaa shan iyo toban daqiiqo akhrinta qoraalka iyo su'aalaha.",
            "Qoraalka hal mar akhri si aad sheekada u fahanto.",
            "Kadibna mar kale akhri adigoo su'aalaha maskaxda ku haya.",
            "U kala qaybi bilow, dhexe iyo dhammaad.",
            "Qaybta A ku qaado ilaa afartan daqiiqo, qiyaastii hal daqiiqo dhibic kasta.",
            "Qaybta B ku qaado shan iyo afartan daqiiqo, shan daqiiqo oo qorshayn ah ay ku jirto.",
            "Shan daqiiqo dhammaadka u hay si aad shaqadaada u hubiso."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "текст, надрукований в екзаменаційній роботі",
            "твір про вигаданих людей і події",
            "сказати головну думку кількома словами",
            "зрозуміти те, на що автор натякає, але не каже прямо",
            "уважно перевірити свій текст на помилки"
          ],
          "passage": [
            "Робота 1 (Paper 1) — це один екзамен, який триває одну годину сорок п’ять хвилин.",
            "Вона становить половину вашої оцінки GCSE з англійської мови (English Language).",
            "Розділ A (Section A) — це читання, а розділ B (Section B) — письмо.",
            "У розділі A ви читаєте один текст (source) з оповідання.",
            "Ви відповідаєте на чотири запитання про нього.",
            "У розділі B ви пишете власний опис або оповідання.",
            "Спочатку витратьте близько п’ятнадцяти хвилин на читання тексту і запитань.",
            "Прочитайте текст один раз, щоб зрозуміти сюжет.",
            "Потім прочитайте його ще раз, пам’ятаючи про запитання.",
            "Поділіть його на початок, середину і кінець.",
            "Витратьте близько сорока хвилин на розділ A — приблизно одну хвилину на кожен бал.",
            "Витратьте сорок п’ять хвилин на розділ B, з яких п’ять хвилин — на план.",
            "Залиште п’ять хвилин наприкінці, щоб перевірити свою роботу."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "امتحان میں چھپی ہوئی تحریر (source)",
            "فرضی لوگوں اور واقعات کے بارے میں تحریر (fiction)",
            "مرکزی خیال کو چند لفظوں میں بیان کرنا (summarise)",
            "وہ بات سمجھ لینا جس کی طرف مصنف اشارہ کرتا ہے مگر صاف نہیں کہتا (infer)",
            "اپنی تحریر کو غلطیوں کے لیے دھیان سے جانچنا (proofread)"
          ],
          "passage": [
            "پیپر 1 ایک امتحان ہے جو ایک گھنٹہ پینتالیس منٹ کا ہوتا ہے۔",
            "یہ آپ کے انگلش لینگویج GCSE کا آدھا حصہ ہے۔",
            "سیکشن A پڑھنے کا ہے، اور سیکشن B لکھنے کا۔",
            "سیکشن A میں آپ کسی کہانی سے لیا گیا ایک ماخذ (source) پڑھتے ہیں۔",
            "آپ اس کے بارے میں چار سوالوں کے جواب دیتے ہیں۔",
            "سیکشن B میں آپ اپنی منظر کشی یا کہانی لکھتے ہیں۔",
            "سب سے پہلے، تقریباً پندرہ منٹ ماخذ اور سوالات پڑھنے میں لگائیں۔",
            "کہانی سمجھنے کے لیے ماخذ کو ایک بار پڑھیں۔",
            "پھر سوالات کو ذہن میں رکھ کر اسے دوبارہ پڑھیں۔",
            "اسے شروع، درمیان اور آخر میں تقسیم کریں۔",
            "سیکشن A پر تقریباً چالیس منٹ لگائیں، یعنی ہر نمبر کے لیے تقریباً ایک منٹ۔",
            "سیکشن B پر پینتالیس منٹ لگائیں، جن میں پانچ منٹ منصوبہ بنانے کے لیے ہوں۔",
            "آخر میں اپنا کام جانچنے کے لیے پانچ منٹ رکھیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "What is in the paper",
          paragraphs: [
            "Paper 1 is called ‘Explorations in creative reading and writing’. It is half of your English Language GCSE. Section A gives you one source: an extract from a novel or short story. You answer four questions on it, worth 40 marks together.",
            "Question 1 (4 marks) is a set of four multiple-choice questions that check you have found the right information. Question 2 (8 marks) asks how the writer uses language. Question 3 (8 marks) asks how the writer has structured the whole source. Question 4 (20 marks) gives you a statement about the source and asks how far you agree.",
            "Section B is Question 5 (40 marks). You choose one of two writing tasks: one is usually a description linked to a picture, the other is usually the opening of a story. Of the 40 marks, 24 are for what you write and how you organise it, and 16 are for accurate spelling, punctuation, vocabulary and a range of sentences."
          ],
          tip: "Paper 1 is 80 marks in total: 40 for reading, 40 for writing. Use black pen, and write only inside the answer spaces, because the paper is scanned." },
        { heading: "Timing your 1 hour 45 minutes",
          paragraphs: [
            "Good timing is a skill you can practise. Your teachers suggest spending 15 minutes reading the source and the questions, about 40 minutes on Section A, and 45 minutes on Section B. That leaves 5 minutes at the end to proofread.",
            "In Section A, a useful rule is a minute for each mark. Question 4 is worth 20 marks, so it deserves far more time than Question 1, which is worth 4. In Section B, plan for 5 minutes before you write for 40. A planned piece is almost always a better piece."
          ],
          worked: { q: "Check that the suggested timings fit the exam exactly.",
            steps: ["Reading the source and questions: 15 minutes.", "Section A, Questions 1 to 4: 40 minutes (40 marks, about a minute a mark).", "Section B, Question 5: 45 minutes (5 planning, 40 writing).", "Proofreading at the end: 5 minutes."],
            answer: "15 + 40 + 45 + 5 = 105 minutes, which is exactly 1 hour 45 minutes." },
          tip: "Write your finish time for each question at the top of the paper before you start." },
        { heading: "Reading the source like a detective",
          paragraphs: [
            "Before you answer anything, read the source to understand the story. Start with the title or introduction: what can you infer the text will be about? Then work through it asking the 5Ws: Who? What? Where? When? Why?",
            "Next, summarise the beginning, the middle and the end in a line each. You will use these three parts again for Question 3. Finally, read with the questions in mind and underline language and structural techniques, but only the ones that help you answer the question.",
            "Here is the opening of the source you will use throughout this unit, an original story called ‘The Last Ferry’. Try the 5Ws on it now."
          ],
          quote: { text: "The harbour was empty except for the wind. It came in off the grey water in long, cold breaths, rattling the chains of the fishing boats and lifting the gulls high above the sea wall like scraps of torn paper. Rain had not yet arrived, but the sky was already bruised purple at its edges. Along the quay, the café shutters were down and the lamps flickered weakly, as though they were too tired to keep fighting the dark. At the very end of the jetty, beside a battered blue suitcase, sat a girl in a coat that was two sizes too big. Nell had been waiting for an hour. Her fingers were numb. Her hair whipped across her face and stung her eyes. She did not move. Somewhere beyond the headland, the last ferry of the year was crossing the sound, and she meant to be on it.",
            source: "‘The Last Ferry’, Part 1 — original passage written for Ad Astra" },
          tip: "Only underline what helps you answer the question. Underlining everything helps nothing." }
      ],
      gate: [
        { kind: "mcq", q: "How long is Paper 1?", options: ["1 hour", "1 hour 30 minutes", "1 hour 45 minutes", "2 hours"], answer: 2,
          feedback: [
            "One hour would barely cover Section B. You have left out the 15 minutes of reading and the 40 minutes for Section A.",
            "1 hour 30 minutes leaves out the 15 minutes of reading at the start. Add it: 15 + 40 + 45 + 5 is 105 minutes.",
            "",
            "Two hours is 15 minutes too long. Paper 1 is 105 minutes: 15 reading, 40 on Section A, 45 on Section B and 5 checking."
          ],
          why: "Paper 1 lasts 1 hour 45 minutes: 15 reading, 40 on Section A, 45 on Section B and 5 checking." },
        { kind: "mcq", q: "Which question is worth the most marks in Section A?", options: ["Question 1", "Question 2", "Question 3", "Question 4"], answer: 3,
          feedback: [
            "Question 1 is the smallest: four multiple-choice parts worth 1 mark each. You may have chosen it because it comes first.",
            "Question 2 is worth 8 marks. The marks rise through Section A; look for the question worth 20.",
            "Question 3 is also 8 marks, the same as Question 2. The last reading question carries half of Section A.",
            ""
          ],
          why: "Question 4 is worth 20 marks, more than Questions 1, 2 and 3 added together." },
        { kind: "gap", q: "In Section B you have 45 minutes: about ___ minutes to plan and 40 minutes to write.", answer: "5", options: ["5", "15", "25"],
          feedback: {
            "15": "Fifteen minutes of planning would leave only 30 to write a 40-mark answer. The sentence already gives you 40 minutes to write, so the plan is the remaining 5.",
            "25": "Twenty-five minutes is more than half of Section B. Subtract the 40 minutes of writing from the 45 you have: 5 minutes to plan."
          },
          why: "Five minutes of planning leaves 40 minutes for writing." }
      ],
      modules: [
        { title: "Match each question to its job",
          task: { kind: "match", q: "Match each Paper 1 question to what it asks you to do.",
            pairs: [
              ["Question 1", "Find the right information (multiple choice)"],
              ["Question 2", "Analyse how the writer uses language"],
              ["Question 3", "Analyse how the whole source is structured"],
              ["Question 4", "Evaluate a statement about the source"],
              ["Question 5", "Write your own description or story"]
            ] },
          levels: {
            support: { steps: ["Remember that Questions 1 to 4 are reading and Question 5 is writing.", "Question 1 is the quickest: it is about finding information.", "Questions 2 and 3 are the analysis pair: language first, then structure.", "Question 4 is the one with a statement to agree or disagree with."],
              example: { q: "Which section is reading and which is writing?", steps: ["Section A has one source and four questions about it.", "Section B asks you to produce your own writing."], answer: "Section A (Questions 1 to 4) is reading; Section B (Question 5) is writing." } },
            core: { hint: "Language is words; structure is order. Which number comes first?" },
            stretch: { extend: "Explain why Question 4 needs the skills from both Question 2 and Question 3." }
          },
          explain: "Say, in one sentence, how you can tell a language question from a structure question.",
          why: "Q1 finds information, Q2 analyses language, Q3 analyses structure, Q4 evaluates a statement, and Q5 is your own writing." },
        { title: "Plan your time",
          task: { kind: "order", q: "Put the stages of the exam in the order you should do them.",
            items: ["Read the source and the questions (15 minutes)", "Answer Questions 1 to 4 (about 40 minutes)", "Plan your writing (5 minutes)", "Write your Question 5 response (40 minutes)", "Proofread your answers (5 minutes)"] },
          levels: {
            support: { steps: ["Reading always comes before answering.", "Section A comes before Section B.", "Planning comes before writing.", "Checking comes last."],
              example: { q: "Order these steps for a short homework essay: write it, plan it, read the task, check it.", steps: ["You must know the task first.", "Then plan, then write.", "Checking is always last."], answer: "Read the task, plan it, write it, check it." } },
            core: { hint: "Section A is reading, Section B is writing, and checking is the very last thing you do." },
            stretch: { extend: "Some pupils run out of time on Question 4. Explain how the minute-a-mark rule helps you avoid this." }
          },
          explain: "Explain why reading comes before answering, and why checking comes last.",
          why: "Read (15), Section A (40), plan (5), write (40), proofread (5): 105 minutes, which is 1 hour 45 minutes." },
        { title: "First read: the 5Ws",
          task: { kind: "mcq", q: "After a first read of Part 1 of ‘The Last Ferry’, which summary is most accurate?",
            options: ["A girl waits alone on a windy harbour for the last ferry.", "A girl sails a fishing boat through a storm.", "A harbour master closes the café for the winter.", "A girl argues with her grandmother in a warm kitchen."], answer: 0,
            feedback: [
              "",
              "The fishing boats are part of the setting: only their chains rattle. Nell sits on the jetty. You have given her an action the text never gives her; check What she is doing.",
              "The café shutters are down, but nobody is said to close them, and no harbour master appears in Part 1. You have added a character; check Who is in the scene.",
              "The grandmother and her kitchen belong to Part 2, and Part 1 is outdoors in the wind. You have summarised beyond the part you were asked to read; check Where and When."
            ] },
          levels: {
            support: { steps: ["Who is in the scene? Look for a name.", "What is she doing?", "Where is she? Look for place words such as ‘harbour’ and ‘jetty’.", "When is it? Look for clues about the weather and time.", "Why is she there? Check the last sentence."],
              example: { q: "Read this: “The market woke slowly. Shutters clattered upwards, one after another, and the smell of bread drifted between the stalls like a rumour.” Who or what is the focus, and when is it?",
                steps: ["The subject of the first sentence is the market.", "‘Woke’ suggests the start of the day."], answer: "The focus is the market itself, as it opens early in the morning." } },
            core: { hint: "The last sentence of Part 1 tells you why she is there." },
            stretch: { extend: "Write the 5Ws for Part 1 in one line each, then infer one thing about Nell that the writer does not say directly." }
          },
          explain: "Say which of the 5Ws you answered first, and which sentence of Part 1 gave you that answer.",
          why: "Nell sits alone at the end of the jetty in the wind, waiting for the last ferry of the year. The other summaries invent events that do not happen in Part 1." }
      ]
    },

    /* ───────────────────────── 2 ───────────────────────── */
    { key: "q1-find-information", n: 2,
      title: "Question 1: find the right information",
      lead: "You will answer Question 1’s four multiple-choice parts quickly and accurately, using only the lines you are given.",
      covers: [1, 6],
      pretext: {
        words: [
          { word: "retrieve", means: "find information that is in the text", sentence: "Question 1 asks you to retrieve facts from the source." },
          { word: "explicit", means: "clearly stated, in the words on the page", sentence: "The answer to Question 1 is explicit in the lines." },
          { word: "statement", means: "a sentence that says something is true", sentence: "Read each statement slowly before you choose." },
          { word: "distractor", means: "a wrong choice that looks nearly right", sentence: "A distractor might use words from the text but change one detail." },
          { word: "chronological", means: "in time order, from first to last", sentence: "The Question 1 parts are chronological: they follow the source in order." }
        ],
        passage: [
          "Question 1 is the first question on the paper.",
          "It is worth four marks.",
          "It has four short multiple-choice parts.",
          "Each part is worth one mark.",
          "The paper tells you which lines to read.",
          "Only use those lines to find your answer.",
          "For each part, read every statement slowly.",
          "Choose the statement that is true for those lines.",
          "Some wrong statements are nearly right, so check every word.",
          "The parts follow the story in order, from start to end.",
          "Do not spend long here: about four minutes is enough.",
          "Then move on to Question 2."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "إيجاد معلومات موجودة في النص (retrieve)",
            "مذكور بوضوح، بالكلمات نفسها على الصفحة (explicit)",
            "جملة تقول إن شيئاً ما صحيح (statement)",
            "خيار خاطئ يبدو صحيحاً تقريباً (distractor)",
            "حسب ترتيب الزمن، من الأول إلى الأخير (chronological)"
          ],
          "passage": [
            "السؤال 1 هو أول سؤال في الورقة.",
            "وهو يساوي أربع درجات.",
            "فيه أربعة أجزاء قصيرة من نوع الاختيار من متعدد.",
            "كل جزء يساوي درجة واحدة.",
            "تحدد لك الورقة الأسطر التي تقرأها.",
            "استخدم تلك الأسطر فقط لإيجاد إجابتك.",
            "في كل جزء، اقرأ كل عبارة ببطء.",
            "اختر العبارة الصحيحة بالنسبة لتلك الأسطر.",
            "بعض العبارات الخاطئة تبدو صحيحة تقريباً، فتحقَّق من كل كلمة.",
            "تتبع الأجزاء ترتيب القصة، من البداية إلى النهاية.",
            "لا تقضِ وقتاً طويلاً هنا: نحو أربع دقائق تكفي.",
            "ثم انتقل إلى السؤال 2."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "znaleźć informację, która jest w tekście (retrieve)",
            "powiedziane jasno, wprost, słowami zapisanymi na stronie (explicit)",
            "zdanie, które mówi, że coś jest prawdą (statement)",
            "zła odpowiedź, która wygląda na prawie dobrą (distractor)",
            "w kolejności czasowej, od pierwszego do ostatniego (chronological)"
          ],
          "passage": [
            "Pytanie 1 to pierwsze pytanie w arkuszu.",
            "Jest warte cztery punkty.",
            "Ma cztery krótkie części z odpowiedziami do wyboru.",
            "Każda część jest warta jeden punkt.",
            "Arkusz mówi ci, które linijki masz przeczytać.",
            "Szukaj odpowiedzi tylko w tych linijkach.",
            "W każdej części przeczytaj powoli każde zdanie.",
            "Wybierz zdanie, które jest prawdziwe dla tych linijek.",
            "Niektóre złe zdania są prawie dobre, więc sprawdź każde słowo.",
            "Części idą zgodnie z historią, od początku do końca.",
            "Nie siedź tu długo: około czterech minut wystarczy.",
            "Potem przejdź do pytania 2."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "encontrar informação que está no texto (retrieve)",
            "dito de forma clara, nas palavras da página (explicit)",
            "uma frase que diz que algo é verdade (statement)",
            "uma opção errada que parece quase certa (distractor)",
            "em ordem de tempo, do primeiro ao último (chronological)"
          ],
          "passage": [
            "A Pergunta 1 é a primeira pergunta do exame.",
            "Vale quatro pontos.",
            "Tem quatro partes curtas de escolha múltipla.",
            "Cada parte vale um ponto.",
            "O exame indica as linhas que você deve ler.",
            "Use só essas linhas para encontrar a sua resposta.",
            "Em cada parte, leia todas as afirmações devagar.",
            "Escolha a afirmação que é verdadeira para essas linhas.",
            "Algumas afirmações erradas parecem quase certas, por isso verifique cada palavra.",
            "As partes seguem a história em ordem, do início ao fim.",
            "Não demore muito aqui: cerca de quatro minutos são suficientes.",
            "Depois, passe para a Pergunta 2."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "hel macluumaad qoraalka ku jira (retrieve)",
            "si cad loo sheegay, erayada bogga ku qoran (explicit)",
            "jumlad sheegaysa in wax run yahay (statement)",
            "doorasho khaldan oo u eg mid ku dhow sax (distractor)",
            "hab waqti ah, kan ugu horreeya ilaa kan ugu dambeeya (chronological)"
          ],
          "passage": [
            "Su'aasha 1 waa su'aasha ugu horreysa warqadda.",
            "Waxay u dhigantaa afar dhibcood.",
            "Waxay leedahay afar qaybood oo gaagaaban oo doorasho badan leh (multiple-choice).",
            "Qayb kasta waxay u dhigantaa hal dhibic.",
            "Warqadda waxay kuu sheegaysaa safafka aad akhriso.",
            "Safafkaas oo keliya isticmaal si aad jawaabtaada u hesho.",
            "Qayb kasta, odhaah (statement) kasta si tartiib ah u akhri.",
            "Dooro odhaahda run ku ah safafkaas.",
            "Odhaahyada khaldan qaarkood waxay u dhow yihiin sax, sidaas darteed eray kasta hubi.",
            "Qaybaha waxay raacaan sheekada siday u kala horreeyaan, bilow ilaa dhammaad.",
            "Halkan waqti dheer ha ku qaadan: ilaa afar daqiiqo waa ku filan.",
            "Kadibna u gudub Su'aasha 2."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "знайти інформацію, яка є в тексті",
            "сказано прямо, словами на сторінці",
            "речення, яке стверджує, що щось є правдою",
            "неправильний варіант, який виглядає майже правильним",
            "у часовому порядку, від першого до останнього"
          ],
          "passage": [
            "Запитання 1 — це перше запитання в роботі.",
            "Воно оцінюється в чотири бали.",
            "Воно має чотири короткі частини з вибором відповіді.",
            "Кожна частина оцінюється в один бал.",
            "У роботі вказано, які рядки читати.",
            "Шукайте відповідь лише в цих рядках.",
            "У кожній частині повільно прочитайте кожне твердження.",
            "Виберіть твердження, яке є правдивим для цих рядків.",
            "Деякі неправильні твердження майже правильні, тому перевіряйте кожне слово.",
            "Частини йдуть за сюжетом по порядку, від початку до кінця.",
            "Не затримуйтеся тут довго: близько чотирьох хвилин достатньо.",
            "Потім переходьте до запитання 2."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "متن میں موجود معلومات ڈھونڈنا (retrieve)",
            "صاف صاف بیان کیا گیا، صفحے کے لفظوں میں (explicit)",
            "ایک جملہ جو کہتا ہے کہ کوئی بات سچ ہے (statement)",
            "ایک غلط انتخاب جو تقریباً صحیح لگتا ہے (distractor)",
            "وقت کی ترتیب سے، پہلے سے آخر تک (chronological)"
          ],
          "passage": [
            "سوال 1 پیپر کا پہلا سوال ہے۔",
            "اس کے چار نمبر ہیں۔",
            "اس کے چار چھوٹے حصے ہیں جن میں درست جواب چننا ہوتا ہے۔",
            "ہر حصے کا ایک نمبر ہے۔",
            "پیپر آپ کو بتاتا ہے کہ کون سی سطریں پڑھنی ہیں۔",
            "اپنا جواب ڈھونڈنے کے لیے صرف وہی سطریں استعمال کریں۔",
            "ہر حصے کے لیے، ہر بیان کو آہستہ آہستہ پڑھیں۔",
            "وہ بیان چنیں جو ان سطروں کے لیے سچ ہے۔",
            "کچھ غلط بیان تقریباً صحیح لگتے ہیں، اس لیے ہر لفظ جانچیں۔",
            "یہ حصے کہانی کی ترتیب سے چلتے ہیں، شروع سے آخر تک۔",
            "یہاں زیادہ وقت نہ لگائیں: تقریباً چار منٹ کافی ہیں۔",
            "پھر سوال 2 کی طرف بڑھیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "How Question 1 works",
          paragraphs: [
            "Question 1 is worth 4 marks. From the 2026 exams, it is multiple choice: four short parts, each worth 1 mark. Each part asks about a detail in the lines you are told to read, and you choose the statement that is true.",
            "The parts follow the source in order, so the first part is about the earliest lines and the last part is about the latest. This is a retrieval question. You are finding what is explicit (clearly stated), not working out hidden meanings. Mark your choice exactly as the instructions on the paper tell you."
          ],
          tip: "About a minute a mark: give Question 1 around four minutes, then move on." },
        { heading: "Read the lines, not your memory",
          paragraphs: [
            "The commonest mistake in Question 1 is answering from memory. Always go back to the lines. Put your finger on the sentence that proves your choice. If you cannot point to it, it is probably a distractor.",
            "Read Part 1 of ‘The Last Ferry’ again. Every Question 1 practice item in this chapter can be proved from a sentence in it."
          ],
          quote: { text: "The harbour was empty except for the wind. It came in off the grey water in long, cold breaths, rattling the chains of the fishing boats and lifting the gulls high above the sea wall like scraps of torn paper. Rain had not yet arrived, but the sky was already bruised purple at its edges. Along the quay, the café shutters were down and the lamps flickered weakly, as though they were too tired to keep fighting the dark. At the very end of the jetty, beside a battered blue suitcase, sat a girl in a coat that was two sizes too big. Nell had been waiting for an hour. Her fingers were numb. Her hair whipped across her face and stung her eyes. She did not move. Somewhere beyond the headland, the last ferry of the year was crossing the sound, and she meant to be on it.",
            source: "‘The Last Ferry’, Part 1 — original passage written for Ad Astra" } },
        { heading: "Beat the distractors",
          paragraphs: [
            "Wrong statements are written to look right. Watch for three tricks: a statement that changes one small detail (a number, a colour, a place); a statement that is true somewhere else in the story but not in your lines; and a statement that is a guess or an opinion the text never gives.",
            "Check every word of a statement against the text. If one word is wrong, the whole statement is wrong."
          ],
          worked: { q: "Which statement about Nell is true, according to Part 1? A: She has been waiting for ten minutes. B: Her fingers are numb. C: Her coat fits her perfectly.",
            steps: ["A changes a detail: the text says “Nell had been waiting for an hour”.", "B matches the sentence “Her fingers were numb.” exactly.", "C contradicts the text: her coat “was two sizes too big”."],
            answer: "B is true. A and C are distractors that change a detail." },
          tip: "One wrong word makes the whole statement wrong." }
      ],
      gate: [
        { kind: "mcq", q: "How many marks is Question 1 worth?", options: ["2", "4", "8", "20"], answer: 1,
          feedback: [
            "Two marks is too few. Question 1 has four parts, and each part is worth one mark.",
            "",
            "Eight marks is Question 2 (and Question 3). Question 1 is the quick retrieval question: four one-mark parts.",
            "Twenty marks is Question 4, the evaluation. Question 1 is worth 4."
          ],
          why: "Question 1 has four parts, each worth 1 mark: 4 marks in total." },
        { kind: "gap", q: "Question 1 checks information that is ___ in the source.", answer: "explicit", options: ["explicit", "hidden", "invented"],
          feedback: {
            "hidden": "Hidden meaning is inference, which Questions 2 and 4 reward. Question 1 is retrieval: the answer is in the words on the page.",
            "invented": "Nothing in Question 1 is invented. Every correct statement can be matched to a sentence in the lines you are given."
          },
          why: "Question 1 is retrieval: the information is clearly stated in the lines." },
        { kind: "mcq", q: "In what order do the Question 1 parts follow the source?", options: ["A random order", "The order of the source, from beginning to end", "Hardest first", "From the end back to the beginning"], answer: 1,
          feedback: [
            "The parts are not random. They follow the source from start to finish, so you can work down the lines in order.",
            "",
            "The parts are not sorted by difficulty. They are chronological: each part is about later lines than the one before.",
            "The parts move forwards through the source, not backwards. The first part is about the earliest lines."
          ],
          why: "The parts are chronological: they follow the source in order." }
      ],
      modules: [
        { title: "Weather check",
          task: { kind: "mcq", q: "Question 1 practice. Read Part 1. What is the weather like at the harbour?",
            options: ["It is raining heavily.", "It is windy, but the rain has not arrived yet.", "It is calm and sunny.", "It is snowing."], answer: 1,
            // Context-neutral feedback: this item is also answered on ‘Storm at Sea’ and ‘The Empty School’ (see contexts).
            feedback: [
              "Read the sentence about rain again. In this passage the rain is still on its way, not falling. You have turned the threat of rain into rain itself.",
              "",
              "The wind is doing something in the weather sentences, so the scene is not calm, and the sun is never mentioned. Put your finger on the sentence that proves your choice.",
              "Snow is not mentioned anywhere in the lines. That is a guess, not a retrieval."
            ] },
          contexts: [
            { label: "Storm at Sea",
              q: "Question 1 practice. Read this short original passage, ‘Storm at Sea’: “The sea had turned the colour of slate. Wind screamed through the rigging, and the little boat climbed each wave like a tired horse, shuddering at the top before it fell. Spray stung the captain’s eyes. Rain had not come yet, but the clouds were piling up behind the mast like a wall about to fall. ‘Hold her steady,’ he shouted. Nobody answered. Below deck, the lantern swung in slow circles, throwing shadows that crawled up the walls. Then the engine coughed once, and stopped.” What is the weather like at sea?",
              why: "“Wind screamed through the rigging”, and “Rain had not come yet”: it is windy, and the rain is still to come. The clouds “piling up” warn that it is close." },
            { label: "The Empty School",
              q: "Question 1 practice. Read this short original passage, ‘The Empty School’: “At night the school belonged to its sounds. A radiator ticked as it cooled. The long corridor ran away into darkness, its floor polished to a dull shine, and the lockers stood in rows like soldiers who had forgotten their orders. Outside, the wind leaned on the windows; rain was promised, but it had not arrived. In Room 12, a single chair lay on its side. Someone had left in a hurry. On the whiteboard, half rubbed out, three words were still just readable: DO NOT OPEN.” What is the weather like outside the school?",
              why: "“the wind leaned on the windows” tells you it is windy, and “rain was promised, but it had not arrived” tells you the rain has not started." }
          ],
          levels: {
            support: { steps: ["Find every weather word in Part 1: wind, rain, sky.", "Read the sentence about rain very carefully.", "Rule out any statement that the text contradicts."],
              example: { q: "Read: “Mrs Okafor’s garden was small but crowded. Tomatoes climbed a bamboo frame by the back door, and a rusty bicycle leaned against the shed.” Which is true? A: The garden is large. B: Tomatoes grow by the back door. C: The bicycle is new.",
                steps: ["The garden is “small”, so A is wrong.", "“Tomatoes climbed a bamboo frame by the back door” matches B.", "The bicycle is “rusty”, so C is wrong."], answer: "B: Tomatoes grow by the back door." } },
            core: { hint: "Look closely at the sentence that begins ‘Rain had not yet…’." },
            stretch: { extend: "Find a phrase that suggests the rain is coming soon, and explain how it prepares the reader." }
          },
          explain: "Say which sentence you put your finger on to prove your answer, and how it rules out the other three.",
          why: "The wind comes in “long, cold breaths”, and “Rain had not yet arrived”. So it is windy, and the rain has not started." },
        { title: "Where is Nell?",
          task: { kind: "mcq", q: "Question 1 practice. Read Part 1. Where exactly is Nell sitting?",
            options: ["In the café on the quay", "On one of the fishing boats", "At the very end of the jetty", "On top of the sea wall"], answer: 2,
            feedback: [
              "The café is in Part 1, but its shutters are down: nobody is inside. This distractor is built from a nearby detail. Find the place words just before “sat a girl”.",
              "The fishing boats appear, but only their chains rattle in the wind. Nell is never on a boat. You have matched a word from the text without checking what it is doing.",
              "",
              "The sea wall is where the gulls are lifted above. It is a place the text mentions, not where Nell sits. One true detail has been moved to the wrong person."
            ] },
          levels: {
            support: { steps: ["Find Nell’s first appearance in Part 1.", "Look for a place word just before ‘sat a girl’.", "Check that the other places are only mentioned, not where she sits."],
              example: { q: "Read: “a rusty bicycle leaned against the shed.” Where is the bicycle?", steps: ["Find the bicycle in the sentence.", "Read the words that follow it."], answer: "Against the shed." } },
            core: { hint: "The café, the boats and the sea wall are all in Part 1, but only one is where Nell sits." },
            stretch: { extend: "Explain why the writer might place Nell at the very end of the jetty rather than in the café." }
          },
          explain: "Say which place words you found just before “sat a girl”, and how you ruled out the other three places.",
          why: "The text says “At the very end of the jetty, beside a battered blue suitcase, sat a girl”. The café shutters are down, and the boats and sea wall are only part of the setting." },
        { title: "True about Nell",
          task: { kind: "mcq", q: "Question 1 practice. Read Part 1. Which statement about Nell is true?",
            options: ["She has been waiting for an hour.", "She is carrying a red rucksack.", "She is talking to the gulls.", "She plans to catch the first ferry of the year."], answer: 0,
            feedback: [
              "",
              "The text says a “battered blue suitcase”. Two details have been changed, the colour and the object. Check every word of a statement against the text.",
              "The gulls are in the text, but Nell speaks to no one in Part 1. This statement adds something the text never says.",
              "It is “the last ferry of the year”, not the first. One changed word makes the whole statement wrong."
            ] },
          levels: {
            support: { steps: ["Read each statement and underline its key detail (an hour, red rucksack, gulls, first ferry).", "Find each detail in the text, or show it is not there.", "Choose the one statement the text proves."],
              example: { q: "Read: “She watered the plants every evening at six.” Which is true? A: She waters them every morning. B: She waters them at six in the evening. C: She never waters them.",
                steps: ["The text says “every evening at six”.", "A changes evening to morning.", "C contradicts the text."], answer: "B: She waters them at six in the evening." } },
            core: { hint: "Two of the statements change a single word from the text. One is not in the text at all." },
            stretch: { extend: "Write your own distractor for this question: a statement that changes just one detail from Part 1." }
          },
          explain: "Say which single word was changed in each of the wrong statements.",
          why: "“Nell had been waiting for an hour.” Her suitcase is blue, not a red rucksack; she talks to no one; and it is “the last ferry of the year”, not the first." }
      ]
    },

    /* ───────────────────────── 3 ───────────────────────── */
    { key: "q2-language", n: 3,
      title: "Question 2: how the writer uses language",
      lead: "You will analyse a writer’s word choices, techniques and sentences, and explain their effect in clear What, How, Why paragraphs.",
      covers: [1, 6],
      pretext: {
        words: [
          { word: "technique", means: "a method a writer uses on purpose", sentence: "A simile is one technique a writer can use." },
          { word: "simile", means: "a comparison using ‘like’ or ‘as’", sentence: "The gulls are lifted ‘like scraps of torn paper’: that is a simile." },
          { word: "personification", means: "giving human actions to something not human", sentence: "Tired lamps are an example of personification." },
          { word: "effect", means: "what the words make the reader think or feel", sentence: "Always explain the effect of the words you quote." },
          { word: "terminology", means: "the correct names for techniques", sentence: "Use terminology such as ‘verb’ or ‘metaphor’ when it helps your point." }
        ],
        passage: [
          "Question 2 is about language.",
          "Language means the words the writer chooses.",
          "It is worth eight marks.",
          "The paper points you to one part of the source.",
          "Read that part closely, with a pen in your hand.",
          "Underline words that create a strong picture or feeling.",
          "Name the technique if you can, such as a simile.",
          "Then explain what the words make the reader think or feel.",
          "Use short quotations inside your own sentences.",
          "Write about what, how and why.",
          "What impression is created?",
          "How does the writer create it?",
          "Why does it work on the reader?"
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "طريقة يستخدمها الكاتب عن قصد (technique)",
            "تشبيه باستخدام كلمة ‘like’ أو ‘as’ (simile)",
            "إعطاء أفعال بشرية لشيء غير بشري (personification)",
            "ما تجعل الكلماتُ القارئَ يفكر فيه أو يشعر به (effect)",
            "الأسماء الصحيحة للأساليب (terminology)"
          ],
          "passage": [
            "السؤال 2 عن اللغة.",
            "اللغة تعني الكلمات التي يختارها الكاتب.",
            "وهو يساوي ثماني درجات.",
            "توجّهك الورقة إلى جزء واحد من النص.",
            "اقرأ ذلك الجزء بتمعّن، والقلم في يدك.",
            "ضع خطاً تحت الكلمات التي تصنع صورة أو إحساساً قوياً.",
            "سمِّ الأسلوب إن استطعت، مثل التشبيه (simile).",
            "ثم اشرح ما تجعل الكلمات القارئ يفكر فيه أو يشعر به.",
            "استخدم اقتباسات قصيرة داخل جملك أنت.",
            "اكتب عن: ماذا، وكيف، ولماذا.",
            "ما الانطباع الذي تصنعه الكلمات؟",
            "كيف يصنعه الكاتب؟",
            "لماذا يؤثر في القارئ؟"
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "sposób, którego autor używa celowo (technique)",
            "porównanie ze słowami „like” lub „as” (simile)",
            "nadawanie ludzkich działań czemuś, co nie jest człowiekiem (personification)",
            "to, co słowa każą czytelnikowi myśleć lub czuć (effect)",
            "poprawne nazwy technik (terminology)"
          ],
          "passage": [
            "Pytanie 2 dotyczy języka.",
            "Język to słowa, które wybiera autor.",
            "Jest warte osiem punktów.",
            "Arkusz wskazuje ci jedną część tekstu.",
            "Przeczytaj tę część uważnie, z długopisem w ręku.",
            "Podkreśl słowa, które tworzą mocny obraz lub uczucie.",
            "Jeśli potrafisz, nazwij technikę, na przykład porównanie (simile).",
            "Potem wyjaśnij, co te słowa każą czytelnikowi myśleć lub czuć.",
            "Używaj krótkich cytatów wewnątrz własnych zdań.",
            "Pisz o tym: co, jak i dlaczego.",
            "Jakie wrażenie powstaje?",
            "Jak autor je tworzy?",
            "Dlaczego to działa na czytelnika?"
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um método que um escritor usa de propósito (technique)",
            "uma comparação que usa ‘like’ ou ‘as’ (simile)",
            "dar ações humanas a algo que não é humano (personification)",
            "o que as palavras fazem o leitor pensar ou sentir (effect)",
            "os nomes corretos das técnicas (terminology)"
          ],
          "passage": [
            "A Pergunta 2 é sobre linguagem (language).",
            "Linguagem quer dizer as palavras que o escritor escolhe.",
            "Vale oito pontos.",
            "O exame aponta para uma parte do texto.",
            "Leia essa parte com atenção, com uma caneta na mão.",
            "Sublinhe palavras que criam uma imagem ou um sentimento forte.",
            "Diga o nome da técnica, se conseguir, por exemplo uma comparação (simile).",
            "Depois, explique o que as palavras fazem o leitor pensar ou sentir.",
            "Use citações curtas dentro das suas próprias frases.",
            "Escreva sobre o quê, o como e o porquê.",
            "Que impressão é criada?",
            "Como é que o escritor cria essa impressão?",
            "Por que razão funciona com o leitor?"
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "hab qoraagu si ula kac ah u isticmaalo (technique)",
            "isbarbardhig isticmaalaya ‘like’ ama ‘as’ (simile)",
            "siinta falal dadnimo wax aan dad ahayn (personification)",
            "waxa erayada ka dhigaan in akhristuhu ka fikiro ama dareemo (effect)",
            "magacyada saxda ah ee farsamooyinka (terminology)"
          ],
          "passage": [
            "Su'aasha 2 waxay ku saabsan tahay luqadda (language).",
            "Luqadda macnaheedu waa erayada qoraagu doorto.",
            "Waxay u dhigantaa siddeed dhibcood.",
            "Warqadda waxay ku tilmaamaysaa hal qayb oo qoraalka ka mid ah.",
            "Qaybtaas si fiiro leh u akhri, adigoo qalin gacanta ku haya.",
            "Hoos ka xarriiq erayada abuura sawir ama dareen xooggan.",
            "Magacaw farsamada (technique) haddii aad awooddo, sida simile.",
            "Kadibna sharrax waxa erayada ka dhigaan in akhristuhu ka fikiro ama dareemo.",
            "Isticmaal xigashooyin gaagaaban gudaha jumladahaaga.",
            "Ka qor maxay, sidee iyo maxaa sabab u ah.",
            "Fikrad noocee ah ayaa la abuuray?",
            "Sidee qoraagu u abuuray?",
            "Maxay akhristaha u saamaysaa?"
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "прийом, який автор використовує навмисно",
            "порівняння зі словами ‘like’ або ‘as’ (як, немов)",
            "надання людських дій чомусь нелюдському",
            "те, що слова змушують читача думати або відчувати",
            "правильні назви прийомів"
          ],
          "passage": [
            "Запитання 2 — про мову (language).",
            "Мова — це слова, які обирає автор.",
            "Воно оцінюється у вісім балів.",
            "Робота вказує вам на одну частину тексту.",
            "Прочитайте цю частину уважно, з ручкою в руці.",
            "Підкресліть слова, які створюють яскравий образ або сильне почуття.",
            "Якщо можете, назвіть прийом, наприклад порівняння (simile).",
            "Потім поясніть, що ці слова змушують читача думати або відчувати.",
            "Використовуйте короткі цитати всередині власних речень.",
            "Пишіть про те, що, як і чому.",
            "Яке враження створюється?",
            "Як автор його створює?",
            "Чому це діє на читача?"
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایک طریقہ جو مصنف جان بوجھ کر استعمال کرتا ہے (technique)",
            "‘like’ یا ‘as’ کے ساتھ کی گئی تشبیہ (simile)",
            "کسی غیر انسانی چیز کو انسانی کام دینا (personification)",
            "وہ سوچ یا احساس جو لفظ قاری میں پیدا کرتے ہیں (effect)",
            "تکنیکوں کے صحیح نام (terminology)"
          ],
          "passage": [
            "سوال 2 زبان (language) کے بارے میں ہے۔",
            "زبان سے مراد وہ لفظ ہیں جو مصنف چنتا ہے۔",
            "اس کے آٹھ نمبر ہیں۔",
            "پیپر آپ کو ماخذ کے ایک حصے کی طرف اشارہ کرتا ہے۔",
            "اس حصے کو ہاتھ میں قلم لے کر غور سے پڑھیں۔",
            "ان لفظوں کے نیچے لکیر لگائیں جو ایک مضبوط تصویر یا احساس پیدا کرتے ہیں۔",
            "اگر ہو سکے تو تکنیک کا نام لیں، جیسے simile (تشبیہ)۔",
            "پھر بتائیں کہ یہ لفظ قاری کو کیا سوچنے یا محسوس کرنے پر مجبور کرتے ہیں۔",
            "اپنے جملوں کے اندر چھوٹے اقتباسات استعمال کریں۔",
            "کیا، کیسے اور کیوں کے بارے میں لکھیں۔",
            "کیا تاثر پیدا ہوتا ہے؟",
            "مصنف اسے کیسے پیدا کرتا ہے؟",
            "یہ قاری پر کیوں اثر کرتا ہے؟"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "What Question 2 asks",
          paragraphs: [
            "Question 2 is worth 8 marks. It points you to one section of the source and asks how the writer uses language to describe something: a place, a person or a feeling. It tests your ability to analyse the writer’s choices and their effects, using the right terminology.",
            "Think of three layers. Words and phrases: which single words carry the most meaning? Techniques: similes, metaphors, personification, sibilance, onomatopoeia. Sentences: is there a very short sentence, a long list or a question? Pick the richest examples; you do not need to cover everything."
          ],
          tip: "Spend about eight minutes: a minute a mark. Aim for two or three strong paragraphs." },
        { heading: "Your language toolkit",
          paragraphs: [
            "A verb shows action, and strong verbs carry feeling. In Part 1, the wind is “rattling the chains of the fishing boats”: the verb makes the harbour sound restless and noisy. An abstract noun names an idea or a feeling, such as ‘hope’ or ‘fear’.",
            "Figurative language makes comparisons. The gulls are lifted “like scraps of torn paper” (a simile). The lamps seem “too tired to keep fighting the dark” (personification). Sound techniques matter too: sibilance repeats ‘s’ sounds, and onomatopoeia imitates a sound.",
            "Sentence forms are choices as well. After a long sentence about the weather, the writer gives us “She did not move.” Its shortness makes Nell seem fixed and determined."
          ],
          quote: { text: "Rain had not yet arrived, but the sky was already bruised purple at its edges. Along the quay, the café shutters were down and the lamps flickered weakly, as though they were too tired to keep fighting the dark.",
            source: "‘The Last Ferry’, Part 1 — original passage written for Ad Astra" },
          tip: "Name a technique only when you can explain its effect. A label without an effect earns little." },
        { heading: "Writing What, How, Why",
          paragraphs: [
            "What: make a clear point about the impression the writer creates. How: give a short, embedded quotation and name the technique. Why: explain the effect of particular words on the reader, then link back to the question.",
            "Zoom in on single words. Do not stop at ‘this is a metaphor’; ask why this word and not another. Why is the sky “bruised” rather than just dark? A bruise is a mark of injury, so the weather seems to be hurting the island already."
          ],
          worked: { q: "Turn this weak sentence into a What, How, Why paragraph: ‘The writer uses a simile about gulls, which is effective.’",
            steps: ["What: say the impression. The harbour feels wild and out of control.", "How: embed the quotation and name it. The gulls are lifted “like scraps of torn paper”, a simile.", "Why: zoom in on a word. The word “torn” suggests damage, and paper is light and helpless.", "Link: so the storm already seems powerful enough to rip things apart."],
            answer: "The writer makes the harbour feel wild and out of control. The gulls are lifted “like scraps of torn paper”, a simile that makes even living birds seem light and helpless. The word “torn” suggests damage, so the storm already seems strong enough to rip things apart." } }
      ],
      gate: [
        { kind: "mcq", q: "Which of these phrases from Part 1 is a simile?",
          options: ["“like scraps of torn paper”", "“Her fingers were numb.”", "“She did not move.”", "“The harbour was empty except for the wind.”"], answer: 0,
          feedback: [
            "",
            "“Her fingers were numb.” is a plain statement of fact. Nothing is being compared to anything else, and there is no ‘like’ or ‘as’.",
            "“She did not move.” is a short simple sentence: a sentence form, not a comparison. You have picked a technique, but not the one asked for.",
            "This is the opening statement of the source. It describes the harbour directly, without ‘like’ or ‘as’, so it is not a simile."
          ],
          why: "A simile compares using ‘like’ or ‘as’: the gulls are compared to scraps of paper." },
        { kind: "gap", q: "Giving human actions or feelings to something that is not human is called ___.", answer: "personification", options: ["personification", "alliteration", "onomatopoeia"],
          feedback: {
            "alliteration": "Alliteration repeats the same first sound in nearby words. Giving the lamps a human feeling (tiredness) is personification.",
            "onomatopoeia": "Onomatopoeia is a word that imitates a sound, such as “rattling”. Giving something non-human a feeling or action is personification."
          },
          why: "The lamps being “too tired” is personification." },
        { kind: "mcq", q: "How many marks is Question 2 worth?", options: ["4", "8", "16", "20"], answer: 1,
          feedback: [
            "Four marks is Question 1. Question 2 asks you to analyse, so it carries more: 8 marks.",
            "",
            "Sixteen is the technical-accuracy part of Question 5. Question 2 is worth 8, about eight minutes of writing.",
            "Twenty marks is Question 4. Question 2 is worth 8."
          ],
          why: "Question 2 is worth 8 marks." }
      ],
      modules: [
        { title: "Name the technique",
          task: { kind: "match", q: "Match each quotation from Part 1 to the technique it shows.",
            pairs: [
              ["“like scraps of torn paper”", "simile"],
              ["“too tired to keep fighting the dark”", "personification"],
              ["“She did not move.”", "short simple sentence"],
              ["“rattling”", "verb"]
            ] },
          levels: {
            support: { steps: ["Look for ‘like’ or ‘as’: that is a simile.", "Look for something non-human acting like a person: that is personification.", "Count the words: a very short sentence is a sentence form.", "A single action word is a verb."],
              example: { q: "Name the technique in “the smell of bread drifted between the stalls like a rumour”.", steps: ["It contains ‘like’.", "It compares a smell to a rumour."], answer: "A simile." } },
            core: { hint: "Only one quotation contains ‘like’. Only one is a whole sentence." },
            stretch: { extend: "Choose one quotation and explain its effect in a single sentence, zooming in on one word." }
          },
          explain: "Say what you looked for first in each quotation to decide its technique.",
          why: "‘Like’ marks the simile; tired lamps are personified; “She did not move.” is a short simple sentence; “rattling” is a verb." },
        { title: "The effect of a short sentence",
          task: { kind: "mcq", q: "Part 1 describes the storm in long sentences, then says “She did not move.” What is the most likely effect of this short sentence?",
            options: ["It shows how still and determined Nell is, even in the storm.", "It tells the reader that the ferry has arrived.", "It suggests that Nell has fallen asleep.", "It makes the paragraph longer and slower."], answer: 0,
            feedback: [
              "",
              "The ferry does not arrive until Part 3. You have described an event instead of the effect of the sentence. Effect is what the words make the reader feel, not what happens next.",
              "Her hair “stung her eyes” and her fingers are numb, so she is awake and feeling everything. You have read the sentence on its own; read it in its context.",
              "A four-word sentence cannot make a paragraph longer or slower. It does the opposite: it stops the reader short. You have named the form but got its effect backwards."
            ] },
          levels: {
            support: { steps: ["Notice the contrast: long, busy sentences, then a short one.", "Think about what the sentence says about Nell.", "Ask how the shortness matches the meaning."],
              example: { q: "Read: “The classroom was silent. Thirty heads bent over thirty papers. Then the fire alarm screamed.” What is the effect of the short sentence “The classroom was silent.”?", steps: ["It is short and simple.", "It sets up calm before something happens."], answer: "It creates a sense of stillness, so the alarm that follows feels more sudden." } },
            core: { hint: "Everything around Nell is moving. What is she doing?" },
            stretch: { extend: "Explain how this sentence prepares the reader for the last line of Part 1, “she meant to be on it”." }
          },
          explain: "Explain, in one sentence, how the length of the sentence matches what Nell is doing.",
          why: "The storm moves, rattles and whips, but Nell stays fixed. The short sentence mirrors her stillness and suggests strong determination." },
        { title: "Question 2 practice paragraph",
          // contexts: the same Question 2 skill on three further original passages (each ≤ 90 words, stored in verify.py).
          contexts: [
            { label: "Storm at Sea",
              q: "Question 2 practice. Read this short original passage, ‘Storm at Sea’: “The sea had turned the colour of slate. Wind screamed through the rigging, and the little boat climbed each wave like a tired horse, shuddering at the top before it fell. Spray stung the captain’s eyes. Rain had not come yet, but the clouds were piling up behind the mast like a wall about to fall. ‘Hold her steady,’ he shouted. Nobody answered. Below deck, the lantern swung in slow circles, throwing shadows that crawled up the walls. Then the engine coughed once, and stopped.” How does the writer use language to describe the sea and the storm?",
              why: "Strong answers zoom in on the verb “screamed” (the wind given a human voice), the simile “like a tired horse” (the boat struggling and close to giving up), the metaphor of clouds “like a wall about to fall” (threat hanging over the crew) and the shadows that “crawled” (even the light seems alive and hostile)." },
            { label: "The Empty School",
              q: "Question 2 practice. Read this short original passage, ‘The Empty School’: “At night the school belonged to its sounds. A radiator ticked as it cooled. The long corridor ran away into darkness, its floor polished to a dull shine, and the lockers stood in rows like soldiers who had forgotten their orders. Outside, the wind leaned on the windows; rain was promised, but it had not arrived. In Room 12, a single chair lay on its side. Someone had left in a hurry. On the whiteboard, half rubbed out, three words were still just readable: DO NOT OPEN.” How does the writer use language to describe the school at night?",
              why: "Strong answers zoom in on “belonged to its sounds” (the building given ownership, as if people no longer matter), the simile “like soldiers who had forgotten their orders” (order without purpose), the wind that “leaned” (pressure from outside, personified) and the short sentence “Someone had left in a hurry.” (a sudden human trace that raises questions)." },
            { label: "Market at Dawn",
              q: "Question 2 practice. Read this short original passage, ‘Market at Dawn’: “The market woke before the town did. Vans grumbled into the square with their headlights still on, and men in thick gloves unrolled striped awnings that snapped and bellied in the cold. Crates of oranges glowed like small suns. A woman stacked loaves into a pyramid, her breath hanging in clouds. By seven the first customers drifted between the stalls, slow as sleepwalkers. Then the church clock struck, and all at once the square filled with voices, as if someone had turned up the sound.” How does the writer use language to describe the market at dawn?",
              why: "Strong answers zoom in on “woke” (the market personified as a sleeper rising early), the verb “grumbled” (the vans sound tired, like people), the simile “like small suns” (warmth and light in the cold) and the final comparison “as if someone had turned up the sound” (the whole square switched on at once)." }
          ],
          task: { kind: "written", q: "Question 2 practice. Look again at Part 1 of ‘The Last Ferry’. How does the writer use language to describe the harbour and the weather?", marks: 8,
            criteria: [
              "I make a clear point about the impression the language creates (What).",
              "I use short quotations, embedded in my own sentences (How).",
              "I name techniques accurately, using subject terminology.",
              "I explain the effect of particular words on the reader (Why).",
              "I link each point back to the harbour and the weather."
            ],
            model: "The writer makes the harbour feel cold, lonely and threatening. The wind is personified as it comes in “long, cold breaths”, as if the sea itself is breathing on the town, and the word “cold” makes the reader feel the chill Nell must feel. The verb “rattling” suggests constant, noisy movement, so the harbour never seems at rest. The simile comparing the gulls to “scraps of torn paper” makes them seem weightless and helpless, which hints that Nell, too, is at the mercy of the storm. Finally, the sky is “bruised purple at its edges”. The metaphor of a bruise suggests the weather is already hurting the island, and it warns the reader that worse is coming." },
          levels: {
            support: { steps: ["What: write one sentence about the impression of the harbour (for example: cold, lonely, threatening).", "How: choose two or three short quotations and name the technique in each.", "Why: for each one, zoom in on a single word and explain what it makes the reader think or feel.", "Link: finish each point by connecting it back to the harbour and the weather."],
              example: { q: "How does the writer use language to describe the market in “The market woke slowly. Shutters clattered upwards, one after another, and the smell of bread drifted between the stalls like a rumour.”?",
                steps: ["What: the market seems sleepy, then warm and inviting.", "How: “woke” is personification; “clattered” is a noisy verb; “like a rumour” is a simile.", "Why: “woke” makes the market seem alive; a rumour spreads quietly, so the smell reaches everywhere."],
                answer: "The writer makes the market seem alive and welcoming. It is personified as it “woke slowly”, as if it were a sleepy person. The verb “clattered” adds noise and energy, and the simile “like a rumour” suggests the smell of bread spreads quietly to every corner, drawing people in." } },
            core: { hint: "Start with the wind, then the gulls, then the sky. Which single word in each is the most powerful?" },
            stretch: { extend: "Add a final sentence about how the language of the harbour reflects Nell’s feelings, and name the idea of pathetic fallacy." }
          },
          explain: "Say which word you would zoom in on first, and why.",
          why: "A strong Question 2 answer makes a clear point, embeds short quotations, names techniques, and spends most of its words on the effect of individual words." }
      ]
    },

    /* ───────────────────────── 4 ───────────────────────── */
    { key: "q3-structure", n: 4,
      title: "Question 3: how the writer structures the whole source",
      lead: "You will track how the focus moves from beginning to end, and explain how the writer’s structural choices create one effect.",
      covers: [2, 7],
      pretext: {
        words: [
          { word: "structure", means: "how a writer orders and organises a text", sentence: "Question 3 is about the structure of the whole source." },
          { word: "focus", means: "what the reader is looking at in that moment", sentence: "At the start, the focus is on the empty harbour." },
          { word: "shift", means: "a change in focus, time, place or mood", sentence: "There is a shift when a voice suddenly speaks behind Nell." },
          { word: "flashback", means: "a jump back to an earlier time", sentence: "Nell’s memory of the kitchen is a flashback." },
          { word: "foreshadowing", means: "a hint about what will happen later", sentence: "The bruised sky is foreshadowing of the storm to come." },
          { word: "tension", means: "a feeling of worry or suspense", sentence: "Waiting for the ferry builds tension." }
        ],
        passage: [
          "Question 3 is about structure.",
          "Structure is how a writer orders a text.",
          "It is worth eight marks.",
          "This time, you think about the whole source.",
          "Ask what we see at the beginning.",
          "Ask where the focus changes, and why.",
          "A writer might zoom in from a wide place to one small detail.",
          "A writer might jump back in time with a flashback.",
          "Dialogue can slow things down or raise the tension.",
          "The question names one effect, such as building tension.",
          "Every point you make should link back to that effect.",
          "Write about the opening, then the middle, then the end."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "كيف يرتّب الكاتب النص وينظّمه (structure)",
            "ما ينظر إليه القارئ في تلك اللحظة (focus)",
            "تغيّر في محور الاهتمام أو الزمان أو المكان أو الجوّ العام (shift)",
            "قفزة إلى الوراء نحو زمن سابق (flashback)",
            "تلميح إلى ما سيحدث لاحقاً (foreshadowing)",
            "إحساس بالقلق أو الترقّب (tension)"
          ],
          "passage": [
            "السؤال 3 عن البناء (structure).",
            "البناء هو الطريقة التي يرتّب بها الكاتب النص.",
            "وهو يساوي ثماني درجات.",
            "هذه المرة تفكر في النص كله.",
            "اسأل: ماذا نرى في البداية؟",
            "اسأل: أين يتغيّر محور الاهتمام، ولماذا؟",
            "قد يقرّب الكاتب الصورة من مكان واسع إلى تفصيل صغير واحد.",
            "قد يقفز الكاتب إلى الوراء في الزمن باستخدام الاسترجاع (flashback).",
            "يمكن للحوار أن يُبطئ الأحداث أو يرفع التوتر.",
            "يذكر السؤال تأثيراً واحداً، مثل بناء التوتر.",
            "كل نقطة تذكرها يجب أن ترتبط بذلك التأثير.",
            "اكتب عن البداية، ثم الوسط، ثم النهاية."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "to, jak autor układa i porządkuje tekst (structure)",
            "to, na co czytelnik patrzy w danej chwili (focus)",
            "zmiana skupienia, czasu, miejsca lub nastroju (shift)",
            "skok wstecz do wcześniejszego czasu (flashback)",
            "wskazówka, co wydarzy się później (foreshadowing)",
            "uczucie niepokoju lub napięcia (tension)"
          ],
          "passage": [
            "Pytanie 3 dotyczy struktury (structure).",
            "Struktura to sposób, w jaki autor układa tekst.",
            "Jest warte osiem punktów.",
            "Tym razem myślisz o całym tekście.",
            "Zapytaj, co widzimy na początku.",
            "Zapytaj, gdzie zmienia się skupienie i dlaczego.",
            "Autor może zrobić zbliżenie: z szerokiego miejsca na jeden mały szczegół.",
            "Autor może cofnąć się w czasie przez retrospekcję (flashback).",
            "Dialog może zwolnić akcję albo podnieść napięcie.",
            "Pytanie nazywa jeden efekt, na przykład budowanie napięcia.",
            "Każda twoja uwaga powinna łączyć się z tym efektem.",
            "Pisz o początku, potem o środku, a potem o końcu."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a forma como um escritor ordena e organiza um texto (structure)",
            "aquilo que o leitor vê naquele momento (focus)",
            "uma mudança de foco, de tempo, de lugar ou de atmosfera (shift)",
            "um salto para trás, para um tempo anterior (flashback)",
            "uma pista sobre o que vai acontecer mais tarde (foreshadowing)",
            "uma sensação de preocupação ou de suspense (tension)"
          ],
          "passage": [
            "A Pergunta 3 é sobre estrutura (structure).",
            "Estrutura é a forma como um escritor ordena um texto.",
            "Vale oito pontos.",
            "Desta vez, você pensa no texto inteiro.",
            "Pergunte o que vemos no início.",
            "Pergunte onde o foco muda, e por que razão.",
            "Um escritor pode passar de um lugar amplo para um pequeno detalhe.",
            "Um escritor pode voltar atrás no tempo com um flashback.",
            "O diálogo pode tornar as coisas mais lentas ou aumentar a tensão.",
            "A pergunta indica um efeito, por exemplo criar tensão.",
            "Cada ideia que você apresenta deve estar ligada a esse efeito.",
            "Escreva sobre o início, depois o meio e depois o fim."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "sida qoraagu u kala horreeysiiyo oo u habeeyo qoraal (structure)",
            "waxa akhristuhu eegayo xilligaas (focus)",
            "isbeddel ku yimaada diiradda, waqtiga, goobta ama dareenka (shift)",
            "dib u boodid waqti hore (flashback)",
            "tilmaan ku saabsan waxa dambe dhici doona (foreshadowing)",
            "dareen walwal ama kacsanaan sugid ah (tension)"
          ],
          "passage": [
            "Su'aasha 3 waxay ku saabsan tahay qaab-dhismeedka (structure).",
            "Qaab-dhismeedku waa sida qoraagu qoraal u kala horreeysiiyo.",
            "Waxay u dhigantaa siddeed dhibcood.",
            "Markan, waxaad ka fikirtaa qoraalka oo dhan.",
            "Is weydii waxa aan bilowga aragno.",
            "Is weydii halka diiraddu isbeddesho, iyo sababta.",
            "Qoraagu wuxuu ka soo dhowaan karaa goob ballaaran una gudbi karaa hal faahfaahin yar.",
            "Qoraagu wuxuu waqti hore dib ugu boodi karaa isagoo isticmaalaya flashback.",
            "Wadahadalku (dialogue) wax wuu hoos u dhigi karaa ama kordhin karaa kacsanaanta (tension).",
            "Su'aasha waxay magacawdaa hal saamayn, sida kacsanaan dhisid.",
            "Qodob kasta oo aad sheegto waa inuu dib ugu xidhmaa saamayntaas.",
            "Ka qor furitaanka, kadib dhexda, kadibna dhammaadka."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "те, як автор упорядковує і будує текст",
            "те, на що читач дивиться в цей момент",
            "зміна фокусу, часу, місця або настрою",
            "стрибок назад у минуле",
            "натяк на те, що станеться пізніше",
            "відчуття тривоги або напруженого очікування"
          ],
          "passage": [
            "Запитання 3 — про структуру (structure).",
            "Структура — це те, як автор упорядковує текст.",
            "Воно оцінюється у вісім балів.",
            "Цього разу ви думаєте про весь текст.",
            "Запитайте себе, що ми бачимо на початку.",
            "Запитайте, де змінюється фокус і чому.",
            "Автор може перейти від широкої картини до однієї маленької деталі.",
            "Автор може повернутися в минуле за допомогою флешбеку (flashback).",
            "Діалог може сповільнити дію або посилити напругу.",
            "У запитанні названо один ефект, наприклад наростання напруги.",
            "Кожна ваша думка має бути пов’язана з цим ефектом.",
            "Пишіть про початок, потім про середину, потім про кінець."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "مصنف متن کو کس ترتیب سے سجاتا اور منظم کرتا ہے (structure)",
            "قاری اس لمحے جس چیز کو دیکھ رہا ہے (focus)",
            "فوکس، وقت، جگہ یا کیفیت میں تبدیلی (shift)",
            "پچھلے وقت کی طرف چھلانگ (flashback)",
            "بعد میں ہونے والی بات کا اشارہ (foreshadowing)",
            "فکر یا تجسس کا احساس (tension)"
          ],
          "passage": [
            "سوال 3 ساخت (structure) کے بارے میں ہے۔",
            "ساخت یہ ہے کہ مصنف متن کو کس ترتیب سے لکھتا ہے۔",
            "اس کے آٹھ نمبر ہیں۔",
            "اس بار آپ پورے ماخذ کے بارے میں سوچتے ہیں۔",
            "پوچھیں کہ شروع میں ہمیں کیا نظر آتا ہے۔",
            "پوچھیں کہ فوکس کہاں بدلتا ہے، اور کیوں۔",
            "مصنف شاید کسی وسیع جگہ سے ایک چھوٹی سی تفصیل پر زوم کرے۔",
            "مصنف شاید flashback کے ذریعے پچھلے وقت میں چلا جائے۔",
            "مکالمہ رفتار کو سست کر سکتا ہے یا تجسس بڑھا سکتا ہے۔",
            "سوال ایک اثر کا نام لیتا ہے، جیسے tension (تجسس) بڑھانا۔",
            "آپ کی ہر بات اسی اثر سے جڑی ہونی چاہیے۔",
            "شروع کے بارے میں لکھیں، پھر درمیان، پھر آخر۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "What structure means",
          paragraphs: [
            "Language is about words; structure is about order. Question 3 (8 marks) asks how the writer has structured the whole source. From the 2026 exams, the question names one effect to write about, for example how the writer builds tension or creates a contrast.",
            "Start simple. What is happening at the beginning? Where does that change, and how? Repeat for the middle and the end. Then put names to what you notice: a shift in focus, zooming in or out, a flashback, dialogue, a turning point, a change in pace, an ending that echoes the opening.",
            "Here is the middle of ‘The Last Ferry’. Notice how the focus changes from the harbour, to a conversation, to a memory."
          ],
          quote: { text: "‘You’ll not get across tonight,’ said a voice behind her. Mr Pryce, the harbour master, stood with his hands deep in his pockets, his face creased like an old map. ‘Sea’s too high. The captain will turn back.’ ‘He won’t,’ said Nell. ‘And how would you know that?’ She did not answer. Instead, she thought of that morning: her grandmother’s kitchen, warm and yellow, the kettle muttering on the stove. Gran had pressed a paper bag of scones into her hands and said nothing at all. She had simply held Nell’s face for a long moment, the way you might hold a cup to stop it spilling. Nell had wanted to say sorry. She had wanted to promise that the city would not change her. The words had stuck in her throat like stones. Now the wind snatched at the memory and carried it away.",
            source: "‘The Last Ferry’, Part 2 — original passage written for Ad Astra" } },
        { heading: "Follow the focus: beginning, middle, end",
          paragraphs: [
            "Beginning: the story opens wide, on “The harbour was empty except for the wind”, then zooms in to one girl and one suitcase “At the very end of the jetty”. The last sentence of Part 1 tells us what she is waiting for, so we start waiting with her.",
            "Middle: a voice interrupts. The dialogue with Mr Pryce raises a doubt (will the ferry come?). Then a flashback takes us into the warm kitchen, which contrasts with the cold harbour and tells us what Nell is leaving behind.",
            "End: the horn is a turning point. The pace quickens with short actions, then slows on one final image. Here is the ending."
          ],
          quote: { text: "Then, out of the darkness, came a low groan. The ferry’s horn. Its lights swung round the headland, small and yellow and stubborn, rising and falling with every wave. Mr Pryce let out a long whistle. ‘Well,’ he said quietly. ‘I never.’ The boat bumped against the jetty. Ropes were thrown. A man in an orange jacket held out his hand, and Nell took it. As the engines roared and the island began to slide away, she turned. Every window in the village was dark except one. High on the hill, in her grandmother’s kitchen, a single lamp was burning. It did not flicker. It did not fade. Nell watched it until the rain finally came and swallowed it whole. Only then did she open the paper bag.",
            source: "‘The Last Ferry’, Part 3 — original passage written for Ad Astra" },
          tip: "Divide the source into beginning, middle and end on your first read. You will need it here." },
        { heading: "Writing about structure: What, How, Why",
          paragraphs: [
            "Use the same What, How, Why pattern as Question 2, but point to where and when things happen. What: make a point about how the structure creates the named effect. How: identify the shift or feature, with a reference or short quotation. Why: explain how that choice creates the effect for the reader.",
            "Aim for two or three paragraphs, and make your first one about the opening. Avoid simply retelling the story: every sentence should say what the writer does with the order, not just what happens."
          ],
          worked: { q: "Turn a retelling into a structural point: ‘At the start, Nell is waiting at the harbour.’",
            steps: ["What: the opening builds tension by making us wait.", "How: the focus zooms in from the whole harbour to one girl “At the very end of the jetty”.", "Why: the last line, “she meant to be on it”, gives us her goal but withholds whether she will reach it."],
            answer: "The opening builds tension by making the reader wait alongside Nell. The focus zooms in from the empty harbour to one girl “At the very end of the jetty”, and the final line of Part 1, “she meant to be on it”, tells us her goal while withholding whether she will reach it." },
          tip: "Structure answers say where: ‘at the start’, ‘then’, ‘by the end’." }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is a structural feature?", options: ["Simile", "Flashback", "Alliteration", "Adjective"], answer: 1,
          feedback: [
            "A simile is a comparison made in the words: language, not order. Structure is about when and where things happen in the text.",
            "",
            "Alliteration is a sound pattern inside a phrase, so it is a language feature. Which option changes the order of time?",
            "An adjective is a single word choice, so it belongs in Question 2. Structural features move the reader through the text."
          ],
          why: "A flashback changes the order of time, so it is about structure. The others are language features." },
        { kind: "gap", q: "Moving from a wide view of a setting to one small detail is called zooming ___.", answer: "in", options: ["in", "out", "round"],
          feedback: {
            "out": "Zooming out widens the view, from a detail to the whole scene. The question describes the opposite movement, from wide to small.",
            "round": "‘Zooming round’ is not a structural term. From wide to small is zooming in; from small to wide is zooming out."
          },
          why: "Zooming in narrows the focus from the wide setting to a detail." },
        { kind: "mcq", q: "Question 3 asks you to write about…", options: ["one sentence only", "the structure of the whole source", "the writer’s life", "your own story"], answer: 1,
          feedback: [
            "One sentence is a language focus for Question 2. Question 3 asks about the whole source, from beginning to end.",
            "",
            "The writer’s life is never part of Paper 1. Stay inside the text and write about how it is organised.",
            "Your own story is Section B, Question 5. Question 3 is a reading question about how the source is put together."
          ],
          why: "Question 3 covers the whole source: beginning, middle and end." }
      ],
      modules: [
        { title: "Track the focus",
          task: { kind: "order", q: "Put the focus of ‘The Last Ferry’ in the order it appears.",
            items: ["The empty harbour and the wind", "Nell waiting alone at the end of the jetty", "Mr Pryce warning that the ferry may not sail", "Nell’s memory of her grandmother’s kitchen", "The ferry arriving and Nell boarding", "The single lamp in her grandmother’s window"] },
          levels: {
            support: { steps: ["Part 1 is the beginning: setting first, then Nell.", "Part 2 is the middle: the conversation comes before the memory.", "Part 3 is the end: the ferry comes before the final image."],
              example: { q: "Order the focus of: “The classroom was silent. Thirty heads bent over thirty papers. Then the fire alarm screamed.”", steps: ["The whole room comes first.", "Then the pupils.", "Then the interruption."], answer: "The silent room, the pupils working, then the alarm." } },
            core: { hint: "The story begins wide and ends on one small, bright detail." },
            stretch: { extend: "Find the moment where the focus moves from outside to inside a character’s mind, and explain why it matters." }
          },
          explain: "Say which clue told you where Part 1 ends and Part 2 begins.",
          why: "Wide setting, then Nell; dialogue, then flashback; the ferry, then the lamp. Knowing this order is the backbone of a Question 3 answer." },
        { title: "Name the structural feature",
          task: { kind: "match", q: "Match each structural feature to the moment in ‘The Last Ferry’ where it is used.",
            pairs: [
              ["Zooming in", "From the whole harbour down to one girl beside a suitcase"],
              ["Dialogue", "Mr Pryce and Nell disagree about whether the ferry will come"],
              ["Flashback", "Nell remembers that morning in her grandmother’s kitchen"],
              ["Turning point", "The ferry’s horn sounds out of the darkness"],
              ["Cyclical echo", "The lamps that flickered at the start become a lamp that does not flicker"]
            ] },
          levels: {
            support: { steps: ["Zooming in narrows from wide to small.", "Dialogue is people speaking.", "A flashback goes back in time.", "A turning point changes the direction of the story.", "A cyclical echo makes the ending mirror the opening."],
              example: { q: "In “The classroom was silent. Thirty heads bent over thirty papers. Then the fire alarm screamed.”, which feature is the alarm?", steps: ["Everything before it is calm.", "The alarm changes the direction suddenly."], answer: "A turning point (a sudden shift)." } },
            core: { hint: "Compare “the lamps flickered weakly” in Part 1 with “It did not flicker.” in Part 3." },
            stretch: { extend: "Choose two features and explain how they work together to build tension." }
          },
          explain: "Say how you can tell a flashback from a shift in focus.",
          why: "Each structural feature is a choice about order: where to look, when to speak, when to go back in time, and how to end." },
        { title: "Question 3 practice answer",
          // contexts: the same Question 3 skill (whole-text structure, one named effect) on two short original passages that build tension.
          contexts: [
            { label: "Storm at Sea",
              q: "Question 3 practice. Read the whole of this short original text, ‘Storm at Sea’: “The sea had turned the colour of slate. Wind screamed through the rigging, and the little boat climbed each wave like a tired horse, shuddering at the top before it fell. Spray stung the captain’s eyes. Rain had not come yet, but the clouds were piling up behind the mast like a wall about to fall. ‘Hold her steady,’ he shouted. Nobody answered. Below deck, the lantern swung in slow circles, throwing shadows that crawled up the walls. Then the engine coughed once, and stopped.” How has the writer structured the text to build tension?",
              why: "Beginning: wide on the sea and the sky, then the focus narrows to the boat and the captain. Middle: dialogue with no reply (“Nobody answered.”) raises a question, then the focus shifts below deck. End: the connective “Then” marks a turning point, and the final short sentence stops the text as suddenly as the engine stops." },
            { label: "The Empty School",
              q: "Question 3 practice. Read the whole of this short original text, ‘The Empty School’: “At night the school belonged to its sounds. A radiator ticked as it cooled. The long corridor ran away into darkness, its floor polished to a dull shine, and the lockers stood in rows like soldiers who had forgotten their orders. Outside, the wind leaned on the windows; rain was promised, but it had not arrived. In Room 12, a single chair lay on its side. Someone had left in a hurry. On the whiteboard, half rubbed out, three words were still just readable: DO NOT OPEN.” How has the writer structured the text to build tension?",
              why: "Beginning: the whole building and its sounds, then the long corridor. Middle: the focus moves outside to the weather, then zooms in to one room and one overturned chair. End: the short sentence “Someone had left in a hurry.” turns the description into a mystery, and the text ends on the three words, withholding what they mean." }
          ],
          task: { kind: "written", q: "Question 3 practice. This time, think about the whole of ‘The Last Ferry’ (Parts 1, 2 and 3). How has the writer structured the text to build tension?", marks: 8,
            criteria: [
              "I write about the beginning, the middle and the end of the source.",
              "I identify structural features accurately (for example: zooming in, dialogue, flashback, turning point).",
              "I support each point with a reference or a short quotation.",
              "I explain how each structural choice builds tension for the reader.",
              "I keep every point linked to the one effect in the question: tension."
            ],
            model: "At the beginning, the writer builds tension by making the reader wait. The focus opens wide on “The harbour was empty except for the wind” and then zooms in to a single girl “At the very end of the jetty”. The final line of Part 1, “she meant to be on it”, gives Nell a goal but withholds whether she will reach it, so we wait with her.\n\nIn the middle, a voice interrupts: “You’ll not get across tonight”. This dialogue introduces doubt, raising the tension. The writer then shifts into a flashback of the warm kitchen, which slows the pace and contrasts with the cold harbour, reminding us what Nell is leaving.\n\nAt the end, the ferry’s horn is a turning point and the pace quickens with short actions such as “Ropes were thrown.” The writer then slows down on one final image. The repeated short sentences “It did not flicker. It did not fade.” echo the weak lamps of the opening, so the ending feels complete yet unresolved: we still do not know how Nell feels about leaving." },
          levels: {
            support: { steps: ["Paragraph 1 (beginning): what is the focus, and how does the opening make us wait?", "Paragraph 2 (middle): what interrupts, and where does the story go back in time?", "Paragraph 3 (end): what is the turning point, and what is the final image?", "In every paragraph, end by explaining how the choice builds tension."],
              example: { q: "How has the writer structured “The classroom was silent. Thirty heads bent over thirty papers. Then the fire alarm screamed.” to create surprise?",
                steps: ["Beginning: a calm, silent setting.", "Middle: the focus narrows to the pupils, still calm.", "End: the word “Then” signals a sudden shift."], answer: "The writer creates surprise by building calm first. The focus moves from the silent room to the pupils bent over their papers, so the reader relaxes. The connective “Then” signals a sudden shift, and the alarm breaks the silence, making its interruption shocking." } },
            core: { hint: "Use your beginning, middle and end summary. For each part, ask: what is the reader waiting for here?" },
            stretch: { extend: "Explain how the ending both resolves the tension (the ferry comes) and keeps some of it (Nell’s feelings), and why a writer might choose to do both." }
          },
          explain: "Say which structural move you would write about first, and why it builds tension.",
          why: "A strong Question 3 answer moves through the whole source, names structural features precisely, and links every choice to the one effect named in the question." }
      ]
    },

    /* ───────────────────────── 5 ───────────────────────── */
    { key: "q4-evaluation", n: 5,
      title: "Question 4: how far do you agree?",
      lead: "You will weigh a statement against the text, find evidence for and against it, and reach a clear judgement.",
      covers: [3, 8],
      pretext: {
        words: [
          { word: "evaluate", means: "judge how far something is true, using evidence", sentence: "In Question 4 you evaluate a student’s statement." },
          { word: "statement", means: "an opinion about the text that you test", sentence: "Read the statement twice and underline its key words." },
          { word: "stance", means: "your overall position on the statement", sentence: "Make your stance clear in your first paragraph." },
          { word: "refute", means: "argue against, with evidence", sentence: "You can refute part of the statement and agree with the rest." },
          { word: "judgement", means: "your final decision about how far you agree", sentence: "End with a judgement such as ‘to a large extent’." }
        ],
        passage: [
          "Question 4 is worth twenty marks.",
          "It is the biggest reading question on the paper.",
          "You are given a statement about part of the source.",
          "A student might say what they think a character feels.",
          "You decide how far you agree.",
          "You can agree, partly agree or disagree.",
          "Find evidence for the statement.",
          "Then find evidence against it.",
          "To argue against a statement is to refute it.",
          "Use short quotations and comment on the writer’s methods.",
          "End with a clear judgement about how far you agree."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الحكم على مدى صحة شيء ما بالاعتماد على الأدلة (evaluate)",
            "رأي عن النص تقوم باختباره (statement)",
            "موقفك العام من العبارة (stance)",
            "الردّ على رأي ومعارضته بالأدلة (refute)",
            "قرارك النهائي حول مدى موافقتك (judgement)"
          ],
          "passage": [
            "السؤال 4 يساوي عشرين درجة.",
            "وهو أكبر سؤال قراءة في الورقة.",
            "تُعطى عبارة عن جزء من النص.",
            "قد يقول طالب ما يظن أن شخصية ما تشعر به.",
            "وأنت تقرر إلى أي مدى توافق.",
            "يمكنك أن توافق، أو توافق جزئياً، أو تعارض.",
            "ابحث عن أدلة تؤيد العبارة.",
            "ثم ابحث عن أدلة تعارضها.",
            "معارضة عبارة بالأدلة تُسمّى دحضها (refute).",
            "استخدم اقتباسات قصيرة وعلّق على أساليب الكاتب.",
            "اختم بحكم واضح حول مدى موافقتك."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "ocenić, w jakim stopniu coś jest prawdą, używając dowodów (evaluate)",
            "opinia o tekście, którą sprawdzasz (statement)",
            "twoje ogólne stanowisko wobec tej opinii (stance)",
            "spierać się z czymś, używając dowodów (refute)",
            "twoja ostateczna decyzja, w jakim stopniu się zgadzasz (judgement)"
          ],
          "passage": [
            "Pytanie 4 jest warte dwadzieścia punktów.",
            "To największe pytanie z czytania w całym arkuszu.",
            "Dostajesz opinię (statement) o części tekstu.",
            "Uczeń może na przykład powiedzieć, co jego zdaniem czuje bohater.",
            "Ty decydujesz, w jakim stopniu się zgadzasz.",
            "Możesz się zgodzić, zgodzić się częściowo albo nie zgodzić.",
            "Znajdź dowody za tą opinią.",
            "Potem znajdź dowody przeciw niej.",
            "Spierać się z opinią to ją obalać (refute).",
            "Używaj krótkich cytatów i komentuj metody autora.",
            "Zakończ jasnym osądem, w jakim stopniu się zgadzasz."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "julgar até que ponto algo é verdade, usando evidências (evaluate)",
            "uma opinião sobre o texto que você vai testar (statement)",
            "a sua posição geral sobre a afirmação (stance)",
            "argumentar contra, com evidências (refute)",
            "a sua decisão final sobre até que ponto você concorda (judgement)"
          ],
          "passage": [
            "A Pergunta 4 vale vinte pontos.",
            "É a maior pergunta de leitura do exame.",
            "Você recebe uma afirmação sobre uma parte do texto.",
            "Um aluno pode dizer o que acha que uma personagem sente.",
            "Você decide até que ponto concorda.",
            "Pode concordar, concordar em parte ou discordar.",
            "Encontre evidências a favor da afirmação.",
            "Depois, encontre evidências contra ela.",
            "Argumentar contra uma afirmação é refutá-la (refute).",
            "Use citações curtas e comente os métodos do escritor.",
            "Termine com um julgamento claro sobre até que ponto você concorda."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "xukun inta wax run yahay, adigoo caddayn isticmaalaya (evaluate)",
            "ra'yi ku saabsan qoraalka oo aad tijaabiso (statement)",
            "mowqifkaaga guud ee odhaahda (stance)",
            "ka hor dood, adigoo caddayn isticmaalaya (refute)",
            "go'aankaaga kama dambaysta ah ee inta aad ku raacsan tahay (judgement)"
          ],
          "passage": [
            "Su'aasha 4 waxay u dhigantaa labaatan dhibcood.",
            "Waa su'aasha akhriska ugu weyn warqadda.",
            "Waxaa lagu siinayaa odhaah (statement) ku saabsan qayb qoraalka ka mid ah.",
            "Arday wuxuu sheegi karaa waxa uu u malaynayo in jilaa dareemayo.",
            "Adigu go'aami inta aad ku raacsan tahay.",
            "Waad ku raaci kartaa, qayb ahaan ku raaci kartaa ama diidi kartaa.",
            "Hel caddayn taageeraysa odhaahda.",
            "Kadibna hel caddayn ka soo horjeeda.",
            "In odhaah laga hor doodo waxaa la yiraahdaa refute.",
            "Isticmaal xigashooyin gaagaaban oo ka hadal hababka qoraaga.",
            "Ku soo gabagabee go'aan cad oo ku saabsan inta aad ku raacsan tahay."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "оцінити, наскільки щось є правдою, спираючись на докази",
            "думка про текст, яку ви перевіряєте",
            "ваша загальна позиція щодо твердження",
            "заперечувати, наводячи докази",
            "ваше остаточне рішення про те, наскільки ви згодні"
          ],
          "passage": [
            "Запитання 4 оцінюється у двадцять балів.",
            "Це найбільше запитання з читання в роботі.",
            "Вам дають твердження про частину тексту.",
            "Наприклад, учень може сказати, що, на його думку, відчуває персонаж.",
            "Ви вирішуєте, наскільки ви згодні.",
            "Ви можете погодитися, частково погодитися або не погодитися.",
            "Знайдіть докази на користь твердження.",
            "Потім знайдіть докази проти нього.",
            "Заперечувати твердження — це спростовувати його (refute).",
            "Використовуйте короткі цитати і коментуйте прийоми автора.",
            "Завершіть чітким висновком про те, наскільки ви згодні."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "شواہد کی مدد سے فیصلہ کرنا کہ کوئی بات کس حد تک سچ ہے (evaluate)",
            "متن کے بارے میں ایک رائے جسے آپ جانچتے ہیں (statement)",
            "بیان کے بارے میں آپ کا مجموعی موقف (stance)",
            "شواہد کے ساتھ خلاف دلیل دینا (refute)",
            "آپ کا آخری فیصلہ کہ آپ کس حد تک متفق ہیں (judgement)"
          ],
          "passage": [
            "سوال 4 کے بیس نمبر ہیں۔",
            "یہ پیپر کا سب سے بڑا پڑھنے والا سوال ہے۔",
            "آپ کو ماخذ کے ایک حصے کے بارے میں ایک بیان دیا جاتا ہے۔",
            "کوئی طالب علم شاید کہے کہ اس کے خیال میں کوئی کردار کیا محسوس کرتا ہے۔",
            "آپ فیصلہ کرتے ہیں کہ آپ کس حد تک متفق ہیں۔",
            "آپ متفق ہو سکتے ہیں، کچھ حد تک متفق، یا غیر متفق۔",
            "بیان کے حق میں شواہد ڈھونڈیں۔",
            "پھر اس کے خلاف شواہد ڈھونڈیں۔",
            "کسی بیان کے خلاف دلیل دینے کو refute کرنا کہتے ہیں۔",
            "چھوٹے اقتباسات استعمال کریں اور مصنف کے طریقوں پر بات کریں۔",
            "آخر میں صاف فیصلہ دیں کہ آپ کس حد تک متفق ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "What Question 4 asks",
          paragraphs: [
            "Question 4 is worth 20 marks, half of Section A. It points you to a later part of the source and gives you a statement, often what a student thinks about a character or a moment. You are asked how far you agree.",
            "This question tests whether you can evaluate the text critically and back up your view with references. It is your opinion, but an opinion built on evidence. It needs your Question 2 skills (language) and your Question 3 skills (structure) together. From the 2026 exams, one bullet point asks you to comment on the writer’s methods."
          ],
          tip: "Spend about twenty minutes: a minute a mark. This is the question to protect your time for." },
        { heading: "Support and refute",
          paragraphs: [
            "Underline the key words in the statement. Then re-read the named lines and make two lists: evidence that supports the statement, and evidence that refutes it. Statements often contain strong words such as ‘completely’ or ‘only’. These are the words to test.",
            "Try it on this statement about Part 3 of ‘The Last Ferry’: ‘In this part of the story, the writer shows that Nell is completely certain she has made the right choice.’",
            "Support: she boards without hesitating; Nell “took” the man’s hand. Refute: “she turned” to look back; she watches the lamp “until the rain finally came and swallowed it whole”. The word ‘completely’ is where the statement is weakest."
          ],
          quote: { text: "As the engines roared and the island began to slide away, she turned. Every window in the village was dark except one. High on the hill, in her grandmother’s kitchen, a single lamp was burning.",
            source: "‘The Last Ferry’, Part 3 — original passage written for Ad Astra" } },
        { heading: "Building a 20-mark answer",
          paragraphs: [
            "Decide your stance: mostly agree, partly agree or mostly disagree. State it in your first paragraph. Then write two points that support your argument, with short, precise quotations and comments on the methods the writer uses, not just on what happens.",
            "Next, offer the other view: ‘Some may argue…’, with its own evidence, and respond to it. Finish with a weighed final judgement that returns to the statement, for example ‘to a large extent’ or ‘to a limited extent’. Aim for about four paragraphs: perhaps two for and two against, or three for and one against, depending on your evidence."
          ],
          tip: "If a paragraph only retells the story, ask: how does the writer present this?" }
      ],
      gate: [
        { kind: "mcq", q: "How many marks is Question 4 worth?", options: ["8", "12", "16", "20"], answer: 3,
          feedback: [
            "Eight marks is Question 2 or Question 3. Question 4 is the biggest reading question on the paper.",
            "Twelve is not a mark total anywhere on this paper. Question 4 is worth half of Section A.",
            "Sixteen is the technical-accuracy part of Question 5. Question 4 is 20 marks.",
            ""
          ],
          why: "Question 4 is worth 20 marks, half of Section A." },
        { kind: "gap", q: "To argue against a statement, using evidence, is to ___ it.", answer: "refute", options: ["refute", "retrieve", "repeat"],
          feedback: {
            "retrieve": "To retrieve is to find information that is stated, the Question 1 skill. Arguing against a statement with evidence is refuting it.",
            "repeat": "Repeating a statement does not test it. To refute is to argue against it, using evidence from the text."
          },
          why: "To refute is to argue against with evidence." },
        { kind: "mcq", q: "Which sentence shows a weighed final judgement?",
          options: ["I agree with everything the student says.", "To a large extent I agree, although Nell’s final glance shows some doubt.", "The story is about a ferry.", "I am not sure what I think."], answer: 1,
          feedback: [
            "Agreeing with everything is a stance, not a weighed judgement. It does not say how far, and it ignores the other side of the argument.",
            "",
            "This retells what the story is about. A judgement must answer the question ‘to what extent do you agree?’",
            "Being unsure is not a judgement. Decide how far you agree, then say what makes you hesitate."
          ],
          why: "A weighed judgement states how far you agree and recognises the other side." }
      ],
      modules: [
        { title: "Find the counter-evidence",
          task: { kind: "mcq", q: "Statement: ‘In Part 3, the writer shows that Nell is completely certain she has made the right choice.’ Which piece of evidence best refutes (argues against) it?",
            options: ["“Ropes were thrown.”", "“As the engines roared and the island began to slide away, she turned.”", "“A man in an orange jacket held out his hand, and Nell took it.”", "“The boat bumped against the jetty.”"], answer: 1,
            feedback: [
              "“Ropes were thrown.” describes the boat arriving. It tells us nothing about how certain Nell feels, so it is neutral evidence: neither for nor against.",
              "",
              "Taking the man’s hand shows a quick, firm decision, so this supports the statement rather than refuting it. You have found strong evidence, but for the wrong side.",
              "The boat bumping the jetty is setting detail. Nell is not even in the sentence. Refuting evidence must show something about her certainty."
            ] },
          levels: {
            support: { steps: ["Underline the strongest word in the statement: ‘completely’.", "Ask which quotation shows doubt or looking back.", "Rule out quotations that only describe the boat."],
              example: { q: "Statement: ‘Tom is completely relaxed at the party.’ Which detail refutes it? “Tom laughed loudly at the joke, but his hands stayed clenched in his pockets.”", steps: ["‘Completely relaxed’ is the claim to test.", "Laughing supports it; clenched hands do not."], answer: "“his hands stayed clenched in his pockets” refutes it: clenched hands suggest hidden tension." } },
            core: { hint: "Which action shows Nell looking back at what she is leaving?" },
            stretch: { extend: "Explain how the word “turned” could support a partly-agree stance rather than complete disagreement." }
          },
          explain: "Say which word in the statement you tested first, and why that word is its weak point.",
          why: "Turning back as the island slides away suggests Nell is not completely certain. Taking the man’s hand supports the statement; the boat details are neutral." },
        { title: "Build the answer in order",
          task: { kind: "order", q: "Put the parts of a Question 4 answer in the best order.",
            items: ["State your overall stance on the statement", "Make your first point in support, with a short quotation", "Make a second point, commenting on the writer’s method", "Offer the other view: ‘Some may argue…’, with evidence", "Give your final judgement: ‘to a large extent’ or ‘to a limited extent’"] },
          levels: {
            support: { steps: ["Your stance always comes first.", "Your own points come before the other view.", "The judgement is always last."],
              example: { q: "Order these parts of a debate speech: the other side’s view, my opening position, my conclusion, my reasons.", steps: ["Open with your position.", "Give your reasons.", "Answer the other side.", "Conclude."], answer: "Opening position, my reasons, the other side’s view, conclusion." } },
            core: { hint: "Start and finish with your own view. The counter-argument sits just before the end." },
            stretch: { extend: "Explain why a counter-argument makes your final judgement more convincing, not less." }
          },
          explain: "Explain why the other view comes after your own points and before the judgement.",
          why: "Stance, two supported points, the other view, then a weighed judgement: this shape keeps you answering ‘to what extent’." },
        { title: "Question 4 practice answer",
          task: { kind: "written", q: "Question 4 practice. Focus on Part 3 of ‘The Last Ferry’, from ‘Then, out of the darkness’ to the end. A student said: ‘In this part of the story, the writer shows that Nell is completely certain she has made the right choice.’ To what extent do you agree? In your answer, give your own impressions of Nell, comment on the writer’s methods, and back up your view with references to the text.", marks: 20,
            criteria: [
              "I state a clear stance early and keep returning to it.",
              "I use short, precise quotations rather than long chunks.",
              "I comment on the writer’s methods (language and structure), not just on what happens.",
              "I explain the effect on the reader and link it back to the statement.",
              "I include another view (‘Some may argue…’) with evidence, and respond to it.",
              "I end with a weighed judgement on ‘to what extent’."
            ],
            model: "I agree only to a limited extent. Nell is certain that she wants to leave, but the writer suggests she is far from certain about how it feels.\n\nAt first, Nell does seem sure. When the ferry arrives, she does not hesitate: a man holds out his hand “and Nell took it”. The short, simple clause shows a quick, firm decision, and the ferry’s lights are described as “stubborn”, a word that could also describe Nell herself.\n\nHowever, the writer then slows the pace. As the island begins “to slide away, she turned”. The verb “turned” shows her looking back at what she is leaving. The focus narrows to “a single lamp”, and the short sentences “It did not flicker. It did not fade.” make Gran’s love seem steady and lasting. Nell watches it “until the rain finally came and swallowed it whole”, which suggests she cannot look away.\n\nSome may argue that opening the paper bag shows she has accepted her choice. Yet the final line can also be read as her reaching for her grandmother. Overall, the writer shows Nell is determined, but not completely certain." },
          levels: {
            support: { steps: ["Underline ‘completely certain’ in the statement.", "Write your stance in one sentence: agree, partly agree, or disagree.", "Find one quotation that supports the statement and one that refutes it.", "For each quotation, name a method (verb, short sentence, shift in focus) and explain its effect.", "Write ‘Some may argue…’ and answer it, then finish with ‘to a large extent’ or ‘to a limited extent’."],
              example: { q: "Statement: ‘Tom is completely relaxed at the party.’ To what extent do you agree? Use: “Tom laughed loudly at the joke, but his hands stayed clenched in his pockets.”",
                steps: ["Stance: I agree only to a limited extent.", "Support: he “laughed loudly”, which seems relaxed.", "Refute: the conjunction “but” turns the sentence, and “clenched” suggests hidden tension.", "Judgement: he looks relaxed but does not feel it."],
                answer: "I agree only to a limited extent. Tom “laughed loudly”, which seems relaxed on the surface. However, the conjunction “but” turns the sentence, and the verb “clenched” reveals hidden tension in his hands. Overall, Tom appears relaxed, but he does not feel it." } },
            core: { hint: "The weakest word in the statement is ‘completely’. Build your answer around testing it." },
            stretch: { extend: "Use the structure of the ending (the slow focus on the lamp, and the final line) to argue how far the reader is left uncertain too." }
          },
          explain: "Say which quotation you would build your stance around first, and why.",
          why: "A strong Question 4 answer takes a clear stance, tests the key words of the statement with precise evidence, comments on methods, considers another view and ends with a weighed judgement." }
      ]
    },

    /* ───────────────────────── 6 ───────────────────────── */
    { key: "q5-writing", n: 6,
      title: "Question 5: your own description or story",
      lead: "You will plan and craft a description or a story opening that hooks the reader, with a clear shift and accurate, varied sentences.",
      covers: [4, 5],
      pretext: {
        words: [
          { word: "description", means: "writing that paints a picture of a place or moment", sentence: "A description uses the senses to bring a scene to life." },
          { word: "narrative", means: "writing that tells a story", sentence: "A narrative needs characters and a problem." },
          { word: "pathetic fallacy", means: "weather or setting that reflects a mood", sentence: "A grey, heavy sky is pathetic fallacy for a sad scene." },
          { word: "shift", means: "a change of focus, time or mood", sentence: "A shift from day to night gives your writing a clear structure." },
          { word: "fronted adverbial", means: "words at the start of a sentence saying how, when or where", sentence: "‘Slowly, she opened the gate’ begins with a fronted adverbial." },
          { word: "semicolon", means: "punctuation that joins two linked sentences", sentence: "The bus was late; nobody was surprised." }
        ],
        passage: [
          "Question 5 is the writing question.",
          "It is worth forty marks.",
          "You choose one of two tasks.",
          "One task is usually a description, often of a picture.",
          "The other is often the opening of a story.",
          "Spend five minutes planning before you write.",
          "Drop the reader straight into the scene.",
          "Use your senses: what can you see, hear, smell and feel?",
          "Show feelings through details, instead of just naming them.",
          "Change the focus, the time or the mood to create a shift.",
          "Use different sentence openers and careful punctuation.",
          "Leave time to check your spelling at the end."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "كتابة ترسم صورة لمكان أو لحظة (description)",
            "كتابة تحكي قصة (narrative)",
            "طقس أو مكان يعكس حالة نفسية (pathetic fallacy)",
            "تغيّر في محور الاهتمام أو الزمن أو الجوّ العام (shift)",
            "كلمات في بداية الجملة تبيّن كيف أو متى أو أين (fronted adverbial)",
            "علامة ترقيم تربط جملتين متصلتين (semicolon ;)"
          ],
          "passage": [
            "السؤال 5 هو سؤال الكتابة.",
            "وهو يساوي أربعين درجة.",
            "تختار مهمة واحدة من مهمتين.",
            "إحدى المهمتين عادةً وصف، وغالباً وصف صورة.",
            "والأخرى غالباً بداية قصة.",
            "اقضِ خمس دقائق في التخطيط قبل أن تكتب.",
            "أدخِل القارئ مباشرةً في قلب المشهد.",
            "استخدم حواسك: ماذا ترى، وتسمع، وتشمّ، وتشعر؟",
            "أظهِر المشاعر من خلال التفاصيل، بدلاً من مجرد تسميتها.",
            "غيّر محور الاهتمام أو الزمن أو الجوّ العام لتصنع تحوّلاً (shift).",
            "استخدم بدايات مختلفة للجمل وعلامات ترقيم دقيقة.",
            "اترك وقتاً لمراجعة الإملاء في النهاية."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "pisanie, które maluje obraz miejsca lub chwili (description)",
            "pisanie, które opowiada historię (narrative)",
            "pogoda lub otoczenie, które odbijają nastrój (pathetic fallacy)",
            "zmiana skupienia, czasu lub nastroju (shift)",
            "słowa na początku zdania mówiące jak, kiedy lub gdzie (fronted adverbial)",
            "znak interpunkcyjny, który łączy dwa powiązane zdania (semicolon, średnik)"
          ],
          "passage": [
            "Pytanie 5 to pytanie z pisania.",
            "Jest warte czterdzieści punktów.",
            "Wybierasz jedno z dwóch zadań.",
            "Jedno zadanie to zwykle opis, często opis obrazka.",
            "Drugie to często początek opowiadania.",
            "Zanim zaczniesz pisać, poświęć pięć minut na plan.",
            "Wrzuć czytelnika od razu w środek sceny.",
            "Używaj zmysłów: co widzisz, co słyszysz, jaki zapach czujesz i co czujesz dotykiem?",
            "Pokazuj uczucia przez szczegóły, zamiast tylko je nazywać.",
            "Zmień skupienie, czas lub nastrój, żeby stworzyć zwrot (shift).",
            "Zaczynaj zdania na różne sposoby i uważaj na interpunkcję.",
            "Zostaw czas, żeby na końcu sprawdzić pisownię."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "escrita que pinta a imagem de um lugar ou de um momento (description)",
            "escrita que conta uma história (narrative)",
            "o tempo ou o cenário que refletem os sentimentos da cena (pathetic fallacy)",
            "uma mudança de foco, de tempo ou de atmosfera (shift)",
            "palavras no início de uma frase que dizem como, quando ou onde (fronted adverbial)",
            "o sinal ; que junta duas frases ligadas (semicolon, ponto e vírgula)"
          ],
          "passage": [
            "A Pergunta 5 é a pergunta de escrita.",
            "Vale quarenta pontos.",
            "Você escolhe uma de duas tarefas.",
            "Uma tarefa é normalmente uma descrição, muitas vezes de uma imagem.",
            "A outra é muitas vezes o início de uma história.",
            "Use cinco minutos para fazer um plano antes de escrever.",
            "Leve o leitor diretamente para dentro da cena.",
            "Use os seus sentidos: o que você consegue ver, ouvir, cheirar e sentir?",
            "Mostre os sentimentos através de detalhes, em vez de só dizer o nome deles.",
            "Mude o foco, o tempo ou a atmosfera para criar uma mudança (shift).",
            "Use inícios de frase diferentes e pontuação cuidada.",
            "Deixe tempo para verificar a ortografia no fim."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "qoraal sawir ka bixiya goob ama daqiiqad (description)",
            "qoraal sheeko sheegaya (narrative)",
            "cimilo ama goob muujinaysa dareen (pathetic fallacy)",
            "isbeddel diiradda, waqtiga ama dareenka (shift)",
            "erayo bilowga jumladda ku jira oo sheegaya sida, goorta ama halka (fronted adverbial)",
            "calaamad xarakayn oo isku xirta laba jumladood oo isku xiran (semicolon)"
          ],
          "passage": [
            "Su'aasha 5 waa su'aasha qoraalka.",
            "Waxay u dhigantaa afartan dhibcood.",
            "Waxaad dooranaysaa mid ka mid ah laba hawlood.",
            "Hal hawl inta badan waa sharraxaad, badanaa sawir ku saabsan.",
            "Tan kale inta badan waa furitaanka sheeko.",
            "Shan daqiiqo qorshayn ku qaado ka hor intaadan qorin.",
            "Akhristaha toos u gali goobta dhacdada.",
            "Isticmaal dareemahaaga: maxaad arki kartaa, maqli kartaa, urin kartaa oo dareemi kartaa?",
            "Dareemaha ku muuji faahfaahin, halkii aad magacyadooda keliya sheegi lahayd.",
            "Beddel diiradda, waqtiga ama dareenka si aad u abuurto isbeddel (shift).",
            "Isticmaal bilowyo jumlado kala duwan iyo xarakayn taxaddar leh.",
            "Waqti u hay inaad higgaaddaada hubiso dhammaadka."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "текст, який малює картину місця або моменту",
            "текст, який розповідає історію",
            "погода або місце дії, які відображають настрій",
            "зміна фокусу, часу або настрою",
            "слова на початку речення, які кажуть як, коли або де",
            "знак пунктуації, який з’єднує два пов’язані речення"
          ],
          "passage": [
            "Запитання 5 — це завдання з письма.",
            "Воно оцінюється в сорок балів.",
            "Ви обираєте одне з двох завдань.",
            "Одне завдання — зазвичай опис, часто опис картинки.",
            "Інше — часто початок оповідання.",
            "Перш ніж писати, витратьте п’ять хвилин на план.",
            "Одразу занурте читача в сцену.",
            "Використовуйте свої відчуття: що ви бачите, чуєте, відчуваєте на запах і на дотик?",
            "Показуйте почуття через деталі, а не просто називайте їх.",
            "Змініть фокус, час або настрій, щоб створити зсув (shift).",
            "Використовуйте різні початки речень і продуману пунктуацію.",
            "Залиште час наприкінці, щоб перевірити правопис."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایسی تحریر جو کسی جگہ یا لمحے کی تصویر کھینچتی ہے (description)",
            "ایسی تحریر جو کہانی سناتی ہے (narrative)",
            "موسم یا ماحول جو کسی کیفیت کو ظاہر کرے (pathetic fallacy)",
            "فوکس، وقت یا کیفیت کی تبدیلی (shift)",
            "جملے کے شروع میں آنے والے لفظ جو بتاتے ہیں کیسے، کب یا کہاں (fronted adverbial)",
            "رموزِ اوقاف کی وہ علامت جو دو جڑے ہوئے جملوں کو ملاتی ہے (semicolon)"
          ],
          "passage": [
            "سوال 5 لکھنے کا سوال ہے۔",
            "اس کے چالیس نمبر ہیں۔",
            "آپ دو کاموں میں سے ایک چنتے ہیں۔",
            "ایک کام عموماً منظر کشی کا ہوتا ہے، اکثر کسی تصویر کی۔",
            "دوسرا اکثر کسی کہانی کا آغاز ہوتا ہے۔",
            "لکھنے سے پہلے پانچ منٹ منصوبہ بنانے میں لگائیں۔",
            "قاری کو سیدھا منظر کے اندر لے جائیں۔",
            "اپنی حسوں کو استعمال کریں: آپ کیا دیکھ، سن، سونگھ اور محسوس کر سکتے ہیں؟",
            "احساسات کو صرف نام لینے کے بجائے تفصیلات کے ذریعے دکھائیں۔",
            "shift پیدا کرنے کے لیے فوکس، وقت یا کیفیت بدلیں۔",
            "جملوں کے مختلف آغاز اور احتیاط سے رموزِ اوقاف استعمال کریں۔",
            "آخر میں اپنے ہجے جانچنے کے لیے وقت رکھیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        { heading: "What Question 5 asks",
          paragraphs: [
            "Question 5 is worth 40 marks, half of the whole paper. You choose one of two tasks: usually a description, often linked to a picture, or a story, often its opening. Choose the one you can plan most clearly in five minutes.",
            "24 marks are for content and organisation: ideas that engage the reader, vocabulary chosen for effect, and a structure that is clear and deliberate. 16 marks are for technical accuracy: spelling, punctuation and a range of sentence types. Leave five minutes to proofread."
          ],
          tip: "Remember MASOAPS: Metaphor, Adjectives and adverbs, Simile, Onomatopoeia, Alliteration, Personification, Sensory language." },
        { heading: "Description: drop in, describe, shift",
          paragraphs: [
            "Drop in and describe: begin in the middle of the scene, not with ‘One day’. Show, do not tell: instead of ‘it was sad’, give details that make the reader feel the sadness. Use your senses, and try pathetic fallacy to set the mood.",
            "Then build in a shift: change the focus (from wide to close), the time (‘A year ago… Today…’), the mood or the setting. A shift gives your description a clear structure. You can even end by echoing your opening, a cyclical structure.",
            "Read this original model opening. Notice the drop-in start, the senses and the shift in time."
          ],
          quote: { text: "Low tide. The beach is a sheet of wet silver, and the wind drags its fingers through the sand. Gulls argue over a crust. Beach huts stand shoulder to shoulder, their paint peeling like old sunburn; their doors are bolted against the cold. Last August, this place was loud with children. Today, there is only the hiss of the sea and the creak of a single swing.",
            source: "Original model description written for Ad Astra" } },
        { heading: "Story openings and crafted sentences",
          paragraphs: [
            "Plan a story with the story mountain (Freytag’s pyramid): opening, rising action, climax, falling action, resolution. In an exam you may only write the opening, but knowing where the story goes lets you foreshadow it. Keep it simple: two characters are plenty.",
            "Hook the reader with your first sentence. Then vary your sentence openers: a prepositional phrase (‘Beneath the broken streetlight…’), a fronted adverbial (‘Silently, …’), a subordinating conjunction (‘Although…’), a participle phrase (‘Shivering in the doorway…’), an inversion (‘Not once did…’), or a conditional (‘Had she listened…’).",
            "Use punctuation for effect. A semicolon joins two closely linked sentences, where the second explains the first: ‘The storm was coming; the birds had already gone.’"
          ],
          tip: "Every sentence you write is a choice. Craft it." }
      ],
      gate: [
        { kind: "mcq", q: "How many marks is Question 5 worth?", options: ["20", "24", "40", "80"], answer: 2,
          feedback: [
            "Twenty marks is Question 4. Question 5 is worth as much as the whole of Section A.",
            "Twenty-four is only the content-and-organisation part of Question 5. Add the 16 marks for technical accuracy.",
            "",
            "Eighty is the whole paper. Question 5 is half of it."
          ],
          why: "Question 5 is worth 40 marks: 24 for content and organisation, 16 for technical accuracy." },
        { kind: "gap", q: "Weather that reflects a character’s mood is called ___ fallacy.", answer: "pathetic", options: ["pathetic", "perfect", "plural"],
          feedback: {
            "perfect": "‘Perfect fallacy’ is not a term. The technique is pathetic fallacy: ‘pathetic’ here comes from an old sense meaning ‘to do with feeling’.",
            "plural": "‘Plural’ is a grammar word for more than one. Weather that mirrors a mood is pathetic fallacy."
          },
          why: "Pathetic fallacy uses the setting to reflect feelings." },
        { kind: "mcq", q: "Which sentence begins with a fronted adverbial?",
          options: ["Silently, the fox slipped under the gate.", "The fox slipped under the gate.", "The fox, which was hungry, slipped under the gate.", "The fox slipped silently under the gate."], answer: 0,
          feedback: [
            "",
            "This sentence starts with its subject, ‘The fox’. A fronted adverbial puts the how, when or where before the subject.",
            "‘which was hungry’ is a relative clause tucked in after the subject, not a fronted adverbial. The sentence still opens with ‘The fox’.",
            "‘silently’ is here, but in the middle of the sentence. ‘Fronted’ means moved to the front, before the subject."
          ],
          why: "‘Silently,’ comes at the front and tells us how the fox moves." }
      ],
      modules: [
        { title: "Match the sentence opener",
          task: { kind: "match", q: "Match each type of sentence opener to its example.",
            pairs: [
              ["Prepositional phrase", "Beneath the broken streetlight, a cat waited."],
              ["Subordinating conjunction", "Although the door was locked, she tried the handle again."],
              ["Participle phrase", "Shivering in the doorway, he counted his last coins."],
              ["Sentence inversion", "Not once did the wind stop howling."],
              ["Conditional", "Had she listened to the warning, she would have stayed at home."]
            ] },
          levels: {
            support: { steps: ["A prepositional phrase starts with a place word such as ‘beneath’ or ‘under’.", "A subordinating conjunction starts with ‘although’, ‘because’ or ‘when’.", "A participle phrase starts with an ‘-ing’ or ‘-ed’ verb.", "An inversion swaps the usual order: ‘Not once did…’.", "A conditional begins with ‘If…’ or ‘Had…’."],
              example: { q: "Which opener is ‘Under the bridge, the river ran black.’?", steps: ["‘Under’ is a preposition.", "‘Under the bridge’ tells us where."], answer: "A prepositional phrase." } },
            core: { hint: "Look at the very first word of each example." },
            stretch: { extend: "Write your own sentence for each opener, all about the same setting: a harbour at night." }
          },
          explain: "Say what you looked at first in each sentence to name its opener.",
          why: "Varying openers is one of the clearest ways to show a range of sentences, which earns technical accuracy marks." },
        { title: "Question 5 practice: description",
          // contexts: the same description task on the three scenes pupils have read as Question 2 passages, so they can write like the writer they have just analysed.
          contexts: [
            { label: "A storm at sea",
              q: "Question 5 practice (description). Write a description of a small boat at sea as a storm closes in. For practice, write your opening two paragraphs; a full exam answer is worth 40 marks.",
              why: "Drop in on one detail (the colour of the sea, a rope, a face), use sound and touch as well as sight, and shift from the deck to below deck, or from before the storm breaks to the moment it does." },
            { label: "An empty school at night",
              q: "Question 5 practice (description). Write a description of a school building at night, long after everyone has gone home. For practice, write your opening two paragraphs; a full exam answer is worth 40 marks.",
              why: "Drop in on a sound (a radiator, a door, the wind), let the emptiness do the work of showing not telling, and shift from the wide corridor to one room, or from the silent present to a memory of the day’s noise." },
            { label: "A market at dawn",
              q: "Question 5 practice (description). Write a description of a market as it opens at dawn. For practice, write your opening two paragraphs; a full exam answer is worth 40 marks.",
              why: "Drop in before the customers arrive, use smell and cold as well as sight, and shift from the slow set-up to the moment the square fills with voices." }
          ],
          task: { kind: "written", q: "Question 5 practice (description). Write a description of a railway station late at night, as the last train is about to leave. For practice, write your opening two paragraphs; a full exam answer is worth 40 marks.", marks: 40,
            criteria: [
              "I drop the reader straight into the scene.",
              "I show, not tell, using details from at least three senses.",
              "I include a clear shift in focus, time or mood.",
              "I use a range of sentence openers and lengths.",
              "I use accurate punctuation, including at least one semicolon.",
              "I choose ambitious, precise vocabulary."
            ],
            model: "Platform four. Rain drums on the glass roof, and the departure board flickers green, then dies, then flickers again. A cleaner pushes a mop in slow circles; the smell of bleach hangs in the cold air. Under the clock, a man in a grey suit grips a paper cup as if it were the last warm thing in the city.\n\nSuddenly, the whistle shrieks. Doors slam along the train like a row of falling dominoes. The man drops his cup, runs, and is swallowed by the carriage. Then the platform is empty again: just the mop, the rain, and one paper cup rolling gently towards the edge." },
          levels: {
            support: { steps: ["Plan for five minutes: list three things you see, two you hear, one you smell.", "Paragraph 1: drop in with a short sentence (for example, the platform number), then describe close details.", "Paragraph 2: begin with a shift word such as ‘Suddenly’ or ‘Then’ and change the mood.", "Check: one simile, one semicolon, three different sentence openers."],
              example: { q: "Write a short description of an empty playground at dusk.",
                steps: ["Drop in: begin with a time or place in two words.", "Senses: the swing’s creak, the cold metal, the orange sky.", "Shift: from the empty present to a memory of noise."],
                answer: "Dusk. The playground holds its breath. A single swing creaks back and forth, pushed by no one, and the slide glows orange in the last of the light; its metal is already cold. Earlier, this was a storm of shouting and running feet. Now there is only the wind, turning a crisp packet over and over in the sandpit." } },
            core: { hint: "Start with two or three words, not a whole sentence about the weather." },
            stretch: { extend: "Plan a third paragraph that returns to an image from your opening, creating a cyclical structure." }
          },
          explain: "Say which image you would drop the reader into first, and why.",
          why: "Strong descriptions drop in, use the senses, shift deliberately and show control of sentences and punctuation." },
        { title: "Question 5 practice: story opening",
          // contexts: the same story-opening task with a different starting situation; the pupil picks the story.
          contexts: [
            { label: "A broken promise",
              q: "Question 5 practice (story). Write the opening of a story about a promise that is broken. For practice, write your first two or three paragraphs; a full exam answer is worth 40 marks.",
              why: "Hook with the moment the promise is tested, not the day it was made. Show who made it through one action or one line of speech, and hint at the cost of breaking it." },
            { label: "A stranger at the door",
              q: "Question 5 practice (story). Write the opening of a story about a stranger who knocks at the door during a storm. For practice, write your first two or three paragraphs; a full exam answer is worth 40 marks.",
              why: "Hook with the knock itself. Use the storm as pathetic fallacy, keep to two characters, and foreshadow that the stranger is not what they seem." },
            { label: "Something found",
              q: "Question 5 practice (story). Write the opening of a story in which a character finds something they were never meant to find. For practice, write your first two or three paragraphs; a full exam answer is worth 40 marks.",
              why: "Hook with the object and the character’s first reaction to it. Show, through action, why it matters, and end your opening on the choice it forces." }
          ],
          task: { kind: "written", q: "Question 5 practice (story). Write the opening of a story about two friends who fall out over a secret. For practice, write your first two or three paragraphs; a full exam answer is worth 40 marks.", marks: 40,
            criteria: [
              "My first sentence hooks the reader.",
              "I introduce no more than two main characters and show what they are like.",
              "I hint at what will happen later (foreshadowing).",
              "I use a range of sentence types and openers.",
              "I punctuate dialogue accurately.",
              "My opening fits a plan made with the story mountain."
            ],
            model: "Maya kept secrets the way other people kept shoes: neatly, in pairs, and hidden at the back of a cupboard. But this one would not stay hidden.\n\n‘You told her,’ said Priya. She did not shout. That was worse.\n\nThe canteen roared around them, trays clattering, chairs scraping, but at their table the air had gone still. Maya looked at the phone in Priya’s hand. Before she could answer, it buzzed again, and both girls knew exactly who it was." },
          levels: {
            support: { steps: ["Plan: who are the two friends, what is the secret, and how will it end?", "Hook: write an opening sentence that makes the reader ask a question.", "Show the characters through actions and speech, not description lists.", "End your opening on a moment that hints at what comes next."],
              example: { q: "Write the opening of a story that begins with a lost key.",
                steps: ["Hook: start with the problem.", "Character: show one person’s panic through action.", "Foreshadow: hint that the key matters more than it seems."],
                answer: "The key was gone. Leo turned out every pocket twice, then a third time, as if it might have grown back. It was only small and brass, but it was the only key to his grandfather’s workshop, and tomorrow the new owners would arrive." } },
            core: { hint: "Begin with the moment the friendship cracks, not the morning before." },
            stretch: { extend: "Write a final sentence for your opening that foreshadows the climax of your story mountain without giving it away." }
          },
          explain: "Say which sentence you would use as your hook, and why it makes the reader ask a question.",
          why: "A strong story opening hooks at once, reveals character through action and dialogue, and foreshadows where the plan is heading." }
      ]
    }
  ],

  sources: {
    deckDump: "y10_u4_lang_paper1.txt",
    decksUsed: [
      "L01 intro Q1&2 .pptx",
      "L02 Q 3 .pptx",
      "L03 Q4 .pptx",
      "L04 Q5  Structuring Writing image prompt.pptx",
      "L04 oranutang Worksheet.pptx",
      "L05 planning and crafting writing .pptx",
      "RGE - Year 10 Language Paper 1 2026 - Half a Yellow Sun - Copy.pptx"
    ],
    notes: "Lesson titles, objectives, big questions, key words and skills are taken from the seven Paper 1 decks above. EXCLUDED: ‘AJE English Lang P1 5 Week Scheme.pptx’ — despite its file name, all 42 slides teach Language Paper 2 (non-fiction, persuasive devices, letters, speeches, articles), so none of it is used. The RGE deck is treated as three taught lessons (reading strategy with Q1 and Q2; Q3; Q4) on the 2026 question formats; the L04 worksheet is part of lesson 4. Question 1 is taught as multiple choice, as both the L01 and RGE decks do, in line with AQA’s 2026 changes to Paper 1. COPYRIGHT: the decks’ reading extracts (Doris Lessing, Chimamanda Ngozi Adichie, a modern model description of deforestation, and the famous novel openings listed in L05, several still in copyright) are NOT reproduced. Every reading extract here (‘The Last Ferry’, Parts 1–3, the short example passages, and the three astra/2 context passages ‘Storm at Sea’, ‘The Empty School’ and ‘Market at Dawn’) is an original passage written for Ad Astra; all questions, feedback and model answers are original. verify.py checks that every quotation in curly double quotes appears verbatim in those original passages."
  }
};
