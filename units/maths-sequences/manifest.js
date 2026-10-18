// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest (schema astra/2) — Maths, Year 7, Unit 1: Sequences.
// Every numeric item carries `check`: a plain Python expression recomputed by verify.py.
//   numeric / gap      -> check evaluates to the answer
//   mcq (numbers)      -> check evaluates to the value of the one correct option
//   mcq (sequences)    -> check evaluates to a list of booleans, one per option, exactly one True
//   mcq / gap / match with word answers -> no check; verify.py holds an independent answer key
//   worked / example   -> check evaluates to the value(s) in `answer`
//   misconceptions[]   -> each `check` reproduces that wrong answer from the pupil's likely working
// verify.py also recomputes every pure-arithmetic statement (=, <, >) written in prose fields,
// including feedback, misconception text, explain prompts, context variants and widget prompts,
// and re-derives every "add N to / subtract N from / multiply by N / divide by N" rule from its sequence.
// astra/2 (17 Oct 2026): misconception feedback on every mcq / gap / numeric item; `explain` on every
// module; `contexts` (same numbers, different story) on at least one module per chapter; two number-line
// widgets; glossary chapters + connections; meta.spacing. No meta.constellation (engine lays the stars
// out); no pretext.l1 (home-language lines are added by a separate translation pass).
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["maths-sequences"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "maths-sequences",
    subjectKey: "maths",
    subject: "Mathematics",
    board: "AQA",
    spec: "KS3 → 8300",
    specRef: "Algebra: sequences — describe, continue and find missing terms; linear, non-linear and geometric sequences; term-to-term rules (KS3, leading to AQA 8300 A23–A24)",
    year: 7,
    tier: "KS3",
    title: "Sequences",
    sub: "Year 7, Unit 1: what a sequence is, how to tell linear from non-linear, and how to continue a sequence, describe its rule and find a missing term.",
    bigQuestion: "How can you tell what comes next in a sequence, and how do you know you are right?",
    lessonCount: 6,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Sequences", question: "What is a sequence, and how do you describe and continue one?", keywords: ["term", "sequence", "pattern", "rule"] },
    { n: 2, title: "Linear and non-linear sequences", question: "How can you tell whether a sequence is linear or non-linear?", keywords: ["linear", "non-linear", "difference", "constant difference", "ascending", "descending"] },
    { n: 3, title: "Continue linear sequences", question: "How do you continue a linear sequence and describe its term-to-term rule?", keywords: ["term-to-term rule", "common difference", "table", "graph", "axes"] },
    { n: 4, title: "Continue non-linear sequences", question: "How do you continue a non-linear sequence and describe its pattern?", keywords: ["non-linear", "geometric", "double", "previous term"] },
    { n: 5, title: "Term-to-term rules", question: "How do you describe a term-to-term rule in words, and use it to build a sequence?", keywords: ["term-to-term rule", "previous term", "first term", "multiply", "divide"] },
    { n: 6, title: "Missing terms", question: "How do you find a term that is missing from a sequence?", keywords: ["missing term", "position", "arithmetic sequence", "geometric sequence"] }
  ],

  glossary: [
    { term: "sequence", means: "A set of numbers, shapes or objects in an order that follows a rule.", chapter: "what-is-a-sequence" },
    { term: "term", means: "One of the numbers (or shapes) in a sequence. 3, 6, 9, 12 has four terms.", chapter: "what-is-a-sequence" },
    { term: "pattern", means: "A sequence made of shapes or objects. Count the shapes to turn it into a number sequence.", chapter: "what-is-a-sequence" },
    { term: "diagram", means: "A drawing of the terms of a pattern, such as counters or squares.", chapter: "what-is-a-sequence" },
    { term: "linear sequence", means: "A sequence that goes up or down by the same amount each time, like 4, 7, 10, 13.", chapter: "linear-non-linear" },
    { term: "non-linear sequence", means: "A sequence that does not go up or down by the same amount each time, like 1, 2, 4, 8.", chapter: "linear-non-linear" },
    { term: "ascending", means: "Going up. Each term is bigger than the one before.", chapter: "linear-non-linear" },
    { term: "descending", means: "Going down. Each term is smaller than the one before.", chapter: "linear-non-linear" },
    { term: "table", means: "Two rows that show the position of each term and the term itself.", chapter: "linear-non-linear" },
    { term: "graph", means: "A picture of a sequence: position across, term up. A linear sequence gives points in a straight line.", chapter: "linear-non-linear" },
    { term: "axes", means: "The two lines a graph is drawn on. Position goes along the bottom one and the term goes up the side one.", chapter: "continue-linear" },
    { term: "common difference", means: "The amount a linear sequence goes up or down by each time. Also called the constant difference.", chapter: "continue-linear" },
    { term: "geometric sequence", means: "A sequence where you multiply or divide by the same number each time, like 3, 6, 12, 24.", chapter: "continue-non-linear" },
    { term: "term-to-term rule", means: "The rule that gets you from one term to the next, such as add 5 to the previous term.", chapter: "term-to-term-rules" },
    { term: "position", means: "Where a term sits in the sequence. The first term is at position 1.", chapter: "missing-terms" },
    { term: "arithmetic sequence", means: "Another name for a linear sequence: the same amount is added or subtracted each time.", chapter: "missing-terms" }
  ],

  // Connections game: 4 groups × 4 terms, all drawn from the glossary above.
  connections: [
    { group: "Kinds of sequence", terms: ["linear sequence", "non-linear sequence", "geometric sequence", "arithmetic sequence"] },
    { group: "Up, down and by how much", terms: ["ascending", "descending", "common difference", "term-to-term rule"] },
    { group: "The building blocks", terms: ["sequence", "term", "position", "pattern"] },
    { group: "Ways to show a sequence", terms: ["table", "graph", "axes", "diagram"] }
  ],

  chapters: [
    // ───────────────────────────────────────────── Chapter 1
    {
      key: "what-is-a-sequence", n: 1,
      title: "What is a sequence?",
      lead: "Learn what a sequence and a term are, spot the rule, and use it to say what comes next.",
      covers: [1],
      pretext: {
        words: [
          { word: "sequence", means: "a set of numbers or shapes in an order that follows a rule", sentence: "3, 6, 9, 12 is a sequence." },
          { word: "term", means: "one of the numbers in a sequence", sentence: "In 3, 6, 9, 12 the second term is 6." },
          { word: "pattern", means: "a sequence made of shapes or objects", sentence: "The pattern grows by two squares each time." },
          { word: "rule", means: "what you do to get from one term to the next", sentence: "The rule for 3, 6, 9, 12 is add 3." },
          { word: "predict", means: "to say what will come next before you check", sentence: "I predict the next term is 15." }
        ],
        passage: [
          "A sequence is a set of numbers in order.",
          "Each number in a sequence is called a term.",
          "Look at 3, 6, 9, 12.",
          "The first term is 3.",
          "The second term is 6.",
          "Each term is 3 more than the one before.",
          "That is the rule.",
          "If you know the rule, you can predict the next term.",
          "The next term is 15.",
          "A pattern is a sequence of shapes or objects.",
          "Patterns follow rules too.",
          "Count the shapes in each term to turn a pattern into a number sequence.",
          "Then check your answer by using the rule again."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "مجموعة من الأعداد أو الأشكال بترتيب يتبع قاعدة (sequence)",
            "واحد من الأعداد في المتتابعة (term)",
            "متتابعة مكوّنة من أشكال أو أشياء (pattern)",
            "ما تفعله للانتقال من حدّ إلى الحدّ التالي (rule)",
            "أن تقول ما سيأتي بعد ذلك قبل أن تتحقّق (predict)"
          ],
          "passage": [
            "المتتابعة (sequence) مجموعة من الأعداد بترتيب معيّن.",
            "كل عدد في المتتابعة يُسمّى حدّاً (term).",
            "انظر إلى 3، 6، 9، 12.",
            "الحدّ الأول هو 3.",
            "الحدّ الثاني هو 6.",
            "كل حدّ يزيد 3 على الحدّ الذي قبله.",
            "هذه هي القاعدة (rule).",
            "إذا عرفت القاعدة، يمكنك أن تتوقّع الحدّ التالي.",
            "الحدّ التالي هو 15.",
            "النمط (pattern) متتابعة من الأشكال أو الأشياء.",
            "الأنماط تتبع قواعد أيضاً.",
            "عُدّ الأشكال في كل حدّ لتحوّل النمط إلى متتابعة أعداد.",
            "ثم تحقّق من جوابك باستعمال القاعدة مرة أخرى."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "zbiór liczb lub kształtów ułożonych w kolejności według reguły (sequence)",
            "jedna z liczb w ciągu (term)",
            "ciąg zbudowany z kształtów lub przedmiotów (pattern)",
            "to, co robisz, żeby przejść od jednego wyrazu do następnego (rule)",
            "powiedzieć, co będzie dalej, zanim to sprawdzisz (predict)"
          ],
          "passage": [
            "Ciąg (sequence) to zbiór liczb ułożonych w kolejności.",
            "Każdą liczbę w ciągu nazywamy wyrazem (term).",
            "Spójrz na 3, 6, 9, 12.",
            "Pierwszy wyraz to 3.",
            "Drugi wyraz to 6.",
            "Każdy wyraz jest o 3 większy od poprzedniego.",
            "To jest reguła (rule).",
            "Jeśli znasz regułę, możesz przewidzieć następny wyraz.",
            "Następny wyraz to 15.",
            "Wzór (pattern) to ciąg kształtów lub przedmiotów.",
            "Wzory też idą według reguł.",
            "Policz kształty w każdym wyrazie, żeby zamienić wzór na ciąg liczbowy.",
            "Potem sprawdź swoją odpowiedź, używając reguły jeszcze raz."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um conjunto de números ou de formas numa ordem que segue uma regra (sequence, sequência)",
            "um dos números de uma sequência (term, termo)",
            "uma sequência feita de formas ou de objetos (pattern, padrão)",
            "o que você faz para ir de um termo ao seguinte (rule, regra)",
            "dizer o que vem a seguir antes de verificar (predict, prever)"
          ],
          "passage": [
            "Uma sequência (sequence) é um conjunto de números por ordem.",
            "Cada número de uma sequência chama-se termo (term).",
            "Olhe para 3, 6, 9, 12.",
            "O primeiro termo é 3.",
            "O segundo termo é 6.",
            "Cada termo é 3 a mais do que o anterior.",
            "Essa é a regra.",
            "Se você sabe a regra, pode prever o termo seguinte.",
            "O termo seguinte é 15.",
            "Um padrão (pattern) é uma sequência de formas ou de objetos.",
            "Os padrões também seguem regras.",
            "Conte as formas em cada termo para transformar um padrão numa sequência de números.",
            "Depois verifique a sua resposta usando a regra outra vez."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "tirooyin ama qaabab isku xigxiga oo xeer raaca (sequence)",
            "mid ka mid ah tirooyinka taxanaha (term)",
            "taxane ka samaysan qaabab ama walxo (pattern)",
            "waxa aad samayso si aad xubin uga gudubto tan xigta (rule)",
            "sheegidda waxa xiga intaadan hubin (predict)"
          ],
          "passage": [
            "Taxane (sequence) waa tirooyin isku xigxiga oo nidaam leh.",
            "Tiro kasta oo taxane ku jirta waxaa la yiraahdaa xubin (term).",
            "Fiiri 3, 6, 9, 12.",
            "Xubinta koowaad waa 3.",
            "Xubinta labaad waa 6.",
            "Xubin kastaa waa 3 ka badan tan ka horreysa.",
            "Taasi waa xeerka (rule).",
            "Haddii aad xeerka taqaanno, waxaad saadaalin kartaa xubinta xigta.",
            "Xubinta xigtaa waa 15.",
            "Qaab (pattern) waa taxane qaabab ama walxo ah.",
            "Qaababkuna xeerar ayay raacaan.",
            "Tiri qaababka xubin kasta ku jira si aad qaab u beddesho taxane tirooyin.",
            "Kadibna jawaabtaada hubi adigoo xeerka mar kale isticmaalaya."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "набір чисел або фігур, розташованих по порядку за правилом (sequence)",
            "одне з чисел у послідовності (term)",
            "послідовність із фігур або предметів (pattern)",
            "те, що ви робите, щоб перейти від одного члена до наступного (rule)",
            "сказати, що буде далі, ще до того, як перевірити (predict)"
          ],
          "passage": [
            "Послідовність (sequence) — це набір чисел, розташованих по порядку.",
            "Кожне число в послідовності називається членом (term).",
            "Подивіться на 3, 6, 9, 12.",
            "Перший член — 3.",
            "Другий член — 6.",
            "Кожний член на 3 більший за попередній.",
            "Це і є правило (rule).",
            "Якщо ви знаєте правило, ви можете передбачити наступний член.",
            "Наступний член — 15.",
            "Візерунок (pattern) — це послідовність із фігур або предметів.",
            "Візерунки також підкоряються правилам.",
            "Порахуйте фігури в кожному члені, щоб перетворити візерунок на числову послідовність.",
            "Потім перевірте свою відповідь, ще раз застосувавши правило."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "اعداد یا شکلوں کا ایک مجموعہ جو ایک ترتیب میں ہو اور کسی قاعدے پر چلے (sequence)",
            "سلسلے کے اعداد میں سے ایک (term)",
            "شکلوں یا چیزوں سے بنا ہوا سلسلہ (pattern)",
            "ایک رکن سے اگلے رکن تک جانے کے لیے آپ کیا کرتے ہیں (rule)",
            "جانچنے سے پہلے بتانا کہ آگے کیا آئے گا (predict)"
          ],
          "passage": [
            "سلسلہ (sequence) ترتیب میں رکھے اعداد کا ایک مجموعہ ہے۔",
            "سلسلے کے ہر عدد کو رکن (term) کہتے ہیں۔",
            "اس سلسلے کو دیکھیں: 3, 6, 9, 12۔",
            "پہلا رکن 3 ہے۔",
            "دوسرا رکن 6 ہے۔",
            "ہر رکن اپنے پچھلے رکن سے 3 زیادہ ہے۔",
            "یہی قاعدہ (rule) ہے۔",
            "اگر آپ قاعدہ جانتے ہیں تو آپ اگلے رکن کی پیشین گوئی کر سکتے ہیں۔",
            "اگلا رکن 15 ہے۔",
            "پیٹرن (pattern) شکلوں یا چیزوں کا سلسلہ ہے۔",
            "پیٹرن بھی قاعدوں پر چلتے ہیں۔",
            "پیٹرن کو اعداد کے سلسلے میں بدلنے کے لیے ہر رکن کی شکلیں گنیں۔",
            "پھر قاعدے کو دوبارہ استعمال کر کے اپنا جواب جانچیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Terms and rules",
          paragraphs: [
            "A sequence is a set of numbers in order. Each number is called a term. We talk about the 1st term, the 2nd term, the 3rd term and so on. The three dots at the end, like 3, 6, 9, 12, …, mean the sequence carries on.",
            "Most sequences follow a rule. In 3, 6, 9, 12 you add 3 each time. In 20, 18, 16, 14 you subtract 2 each time. Once you know the rule you can continue the sequence as far as you like.",
            "To find the rule, look at two terms that are next to each other. Ask: what do I do to the first one to get the second one? Then check that the same thing works for the next pair."
          ],
          worked: {
            q: "Here is a sequence: 4, 9, 14, 19, … What is the rule, and what is the next term?",
            steps: ["Look at the first two terms: 9 − 4 = 5.", "Check the next pair: 14 − 9 = 5. The rule is add 5.", "Use the rule on the last term you have: 19 + 5 = 24."],
            answer: "24",
            check: "19 + (9 - 4)"
          },
          tip: "Always check the rule on a second pair of terms before you use it."
        },
        {
          heading: "Patterns made of shapes",
          paragraphs: [
            "A pattern is a sequence made of shapes or objects: counters, squares, sticks or dots. Patterns follow rules too, so we can say what the next picture will look like.",
            "To work with a pattern, count the shapes in each term. If the terms have 1, 4 and 7 counters, you have the number sequence 1, 4, 7. Three counters are added each time, so the 4th term has 10 counters.",
            "Describing what happens in words helps: 'three more counters are added each time'. That sentence is the rule, and it tells you how to draw the next term."
          ],
          worked: {
            q: "A pattern is made of counters. The 1st term has 2 counters, the 2nd term has 7 and the 3rd term has 12. How many counters are in the 5th term?",
            steps: ["Write the pattern as a number sequence: 2, 7, 12.", "Find the rule: 7 − 2 = 5, so 5 counters are added each time.", "4th term: 12 + 5 = 17.", "5th term: 17 + 5 = 22."],
            answer: "22",
            check: "12 + (7 - 2) + (7 - 2)"
          },
          tip: "Turn the pictures into numbers first. Then the rule is easy to see."
        },
        {
          heading: "Predict and check",
          paragraphs: [
            "Once you have a rule, you can predict the next terms. But a prediction is only a guess until you check it. Use the rule a second time, or work out the gaps between the new terms, to make sure the pattern still holds.",
            "Some sequences go down. In 20, 17, 14 each term is 3 less than the one before, so the next term is 11. Count carefully: the rule is take away 3, not add 3.",
            "If a pattern gets smaller, it can run out. A pattern of squares with 5, 3, 1 squares has no 4th term that you can draw."
          ],
          worked: {
            q: "Here are the first three terms of a pattern of squares: 14, 11, 8. How many squares will be in the 5th term?",
            steps: ["Find the rule: 14 − 11 = 3, so 3 squares are taken away each time.", "4th term: 8 − 3 = 5.", "5th term: 5 − 3 = 2.", "Check: 14, 11, 8, 5, 2 goes down by 3 each time."],
            answer: "2",
            check: "8 - (14 - 11) - (14 - 11)"
          },
          tip: "A prediction becomes an answer only when you have checked it."
        }
      ],
      gate: [
        { kind: "mcq", q: "Here is a sequence: 5, 8, 11, 14, … What is the next term?", options: ["15", "16", "17", "18"], answer: 2,
          check: "14 + (8 - 5)",
          feedback: [
            "You added 1 to 14. Look at the gap between the terms: 8 − 5 = 3, so each term is 3 more than the one before. 14 + 3 = 17.",
            "You added 2. The gap between the terms is 3, not 2: 11 − 8 = 3. So the next term is 14 + 3 = 17.",
            "",
            "You added 4. Check the gap between two terms next to each other: 8 − 5 = 3. Add 3, not 4: 14 + 3 = 17."
          ],
          why: "Each term is 3 more than the one before, so the next term is 14 + 3 = 17." },
        { kind: "numeric", q: "Here is a sequence: 7, 10, 13, 16, 19. Which term is 16: the 1st, 2nd, 3rd, 4th or 5th? Write the number.", answer: 4, tolerance: 0, units: "",
          check: "[7, 10, 13, 16, 19].index(16) + 1",
          misconceptions: [
            { answer: 3, says: "You counted 16 as the 3rd term. Point to each term as you count: 7 is the 1st, 10 is the 2nd, 13 is the 3rd and 16 is the 4th.", check: "[7, 10, 13, 16, 19].index(16)" },
            { answer: 5, says: "You counted every term in the list. There are 5 terms, but 16 is the 4th of them. The 5th term is 19.", check: "len([7, 10, 13, 16, 19])" }
          ],
          why: "Count along the sequence: 7, 10, 13, 16. The number 16 is the 4th term." },
        { kind: "gap", q: "Each number in a sequence is called a ___.", answer: "term", options: ["term", "pattern", "rule"],
          feedback: {
            "pattern": "A pattern is a whole sequence made of shapes. Each single number or shape in it is a term.",
            "rule": "The rule is what you do to get from one number to the next. Each number itself is a term."
          },
          why: "The numbers in a sequence are its terms: the 1st term, the 2nd term and so on." }
      ],
      modules: [
        {
          title: "Continue the sequence",
          task: { kind: "numeric", q: "Here is a sequence: 6, 11, 16, 21, … What is the 6th term?", answer: 31, tolerance: 0, units: "",
                  check: "21 + (11 - 6) + (11 - 6)",
                  misconceptions: [
                    { answer: 26, says: "You stopped at the 5th term. 21 is the 4th term, so you need two more jumps of 5: 26 is the 5th term and 31 is the 6th.", check: "21 + (11 - 6)" },
                    { answer: 36, says: "You went one term too far. 21 is the 4th term, so two jumps of 5 reach the 6th term: 21 + 5 + 5 = 31. Three jumps would give the 7th term.", check: "21 + (11 - 6) + (11 - 6) + (11 - 6)" },
                    { answer: 27, says: "You added 6, the first term, instead of the gap between the terms. The gap is 11 − 6 = 5. From 21 you need two jumps of 5 to reach the 6th term.", check: "21 + 6" }
                  ] },
          explain: "Say, in one sentence, how you worked out how much to add each time.",
          contexts: [
            { label: "Plant heights", q: "A plant is measured each week. Its heights in cm are 6, 11, 16, 21, … If it keeps growing in the same way, what will the 6th measurement be?",
              why: "The height goes up by 5 cm each week. 21 is the 4th measurement, so the 5th is 26 and the 6th is 31." },
            { label: "Savings", q: "Each week Amara writes down her total savings in pounds: 6, 11, 16, 21, … If the pattern continues, what will the 6th total be?",
              why: "She saves 5 pounds a week. 21 is the 4th total, so the 5th is 26 and the 6th is 31." },
            { label: "Tile pattern", q: "A tile pattern grows each time. The terms so far use 6, 11, 16 and 21 tiles. How many tiles will the 6th term use?",
              why: "5 tiles are added each time. 21 tiles is the 4th term, so the 5th uses 26 and the 6th uses 31." }
          ],
          levels: {
            support: {
              steps: ["Find the gap between two terms that are next to each other.", "Check the gap is the same for the next pair.", "Count which term you are on, then add the gap on one term at a time until you reach the 6th."],
              example: { q: "Here is a sequence: 2, 9, 16, 23, … What is the 6th term?",
                         steps: ["The gap is 9 − 2 = 7, and 16 − 9 = 7 too.", "23 is the 4th term. 5th term: 23 + 7 = 30.", "6th term: 30 + 7 = 37."],
                         answer: "37", check: "23 + (9 - 2) + (9 - 2)" }
            },
            core: { hint: "21 is the 4th term, not the 5th. How many more jumps do you need?" },
            stretch: { extend: "Will 100 ever be a term in this sequence? Explain how you can be sure without writing out every term." }
          },
          why: "The terms go up by 5 each time. 21 is the 4th term, so the 5th term is 26 and the 6th term is 31."
        },
        {
          title: "A pattern of counters",
          task: { kind: "numeric", q: "A pattern is made of counters. The 1st term has 3 counters, the 2nd term has 8 and the 3rd term has 13. How many counters are in the 7th term?", answer: 33, tolerance: 0, units: "",
                  check: "13 + (8 - 3) * (7 - 3)",
                  misconceptions: [
                    { answer: 38, says: "You made one jump too many and found the 8th term. From the 3rd term to the 7th term is 4 jumps of 5, not 5 jumps: 13 + 20 = 33.", check: "13 + (8 - 3) * (8 - 3)" },
                    { answer: 28, says: "You stopped at the 6th term. From the 3rd term to the 7th term is 4 jumps of 5: 13, 18, 23, 28, 33.", check: "13 + (8 - 3) * 3" },
                    { answer: 35, says: "You multiplied the gap of 5 by 7, as if the sequence started at 0. It starts at 3, so the 7th term is 3 + 30 = 33.", check: "(8 - 3) * 7" }
                  ] },
          explain: "Say, in one sentence, why you did not need to draw the 4th, 5th and 6th terms.",
          contexts: [
            { label: "Beads", q: "A string of beads is made in stages. The 1st stage has 3 beads, the 2nd stage has 8 and the 3rd stage has 13. How many beads are there at the 7th stage?",
              why: "5 beads are added at each stage. From the 3rd stage to the 7th is 4 jumps of 5, so 13 + 20 = 33." },
            { label: "Chairs in rows", q: "In a hall, the 1st row has 3 chairs, the 2nd row has 8 and the 3rd row has 13. If the pattern continues, how many chairs are in the 7th row?",
              why: "Each row has 5 more chairs. From the 3rd row to the 7th is 4 jumps of 5, so 13 + 20 = 33." }
          ],
          levels: {
            support: {
              steps: ["Write the numbers of counters as a sequence.", "Find how many counters are added each time.", "Work out each term, one at a time, until you reach the 7th."],
              example: { q: "A pattern of squares: the 1st term has 2 squares, the 2nd has 6 and the 3rd has 10. How many squares are in the 5th term?",
                         steps: ["The sequence is 2, 6, 10. 6 − 2 = 4, so 4 squares are added each time.", "4th term: 10 + 4 = 14.", "5th term: 14 + 4 = 18."],
                         answer: "18", check: "10 + (6 - 2) + (6 - 2)" }
            },
            core: { hint: "How many jumps of 5 is it from the 3rd term to the 7th term?" },
            stretch: { extend: "Describe how the 100th term could be found without drawing or listing all the terms. Explain your method." }
          },
          why: "5 counters are added each time, because 8 − 3 = 5. From the 3rd term to the 7th term is 4 jumps of 5, which is 20. 13 + 20 = 33."
        },
        {
          title: "Predict and check",
          task: { kind: "mcq", q: "A pattern of squares has 20, 17 and 14 squares in its first three terms. How many squares are in the 6th term?", options: ["8", "5", "2", "11"], answer: 1,
                  check: "14 - (20 - 17) - (20 - 17) - (20 - 17)",
                  feedback: [
                    "You stopped at the 5th term. 14 is the 3rd term, so the 4th is 11, the 5th is 8 and the 6th is 5.",
                    "",
                    "You went one term too far. 14 is the 3rd term, so three jumps of 3 take you to the 6th term: 14 − 9 = 5. Four jumps would give the 7th term.",
                    "You made only one jump. 14 is the 3rd term, so 11 is the 4th term. You need two more jumps of 3 to reach the 6th term."
                  ] },
          explain: "Say, in one sentence, how you could check that your answer is right.",
          levels: {
            support: {
              steps: ["Find the gap: take the 2nd term away from the 1st.", "The terms are getting smaller, so take the gap away each time.", "Count the terms as you go: 3rd, 4th, 5th, 6th."],
              example: { q: "A pattern has 18, 15 and 12 squares in its first three terms. How many squares are in the 5th term?",
                         steps: ["18 − 15 = 3, so 3 squares are taken away each time.", "4th term: 12 − 3 = 9.", "5th term: 9 − 3 = 6."],
                         answer: "6", check: "12 - (18 - 15) - (18 - 15)" }
            },
            core: { hint: "The terms go down by 3 each time, and 14 is the 3rd term." },
            stretch: { extend: "What happens to this sequence if it carries on past the 6th term? Could a pattern of squares really show the 8th term? Explain." }
          },
          why: "Each term has 3 fewer squares than the one before. 14 is the 3rd term, so the 4th is 11, the 5th is 8 and the 6th is 5."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 2
    {
      key: "linear-non-linear", n: 2,
      title: "Linear and non-linear sequences",
      lead: "Use the differences between terms to tell a linear sequence from a non-linear one, and show sequences in tables and graphs.",
      covers: [2],
      pretext: {
        words: [
          { word: "linear sequence", means: "a sequence that goes up or down by the same amount each time", sentence: "4, 7, 10, 13 is a linear sequence." },
          { word: "non-linear sequence", means: "a sequence that does not go up or down by the same amount each time", sentence: "1, 2, 4, 8 is a non-linear sequence." },
          { word: "difference", means: "the gap between one term and the next", sentence: "The difference between 7 and 10 is 3." },
          { word: "constant", means: "staying the same", sentence: "In a linear sequence the difference is constant." },
          { word: "ascending", means: "going up", sentence: "5, 9, 13 is ascending." },
          { word: "descending", means: "going down", sentence: "30, 25, 20 is descending." }
        ],
        passage: [
          "Look at the gaps between the terms of a sequence.",
          "The gap between two terms next to each other is called the difference.",
          "In 4, 7, 10, 13 the difference is always 3.",
          "The difference is constant.",
          "This is a linear sequence.",
          "In 1, 2, 4, 8 the differences are 1, 2 and 4.",
          "They are not the same.",
          "This is a non-linear sequence.",
          "A sequence that goes up is ascending.",
          "A sequence that goes down is descending.",
          "Linear sequences can be ascending or descending.",
          "If you plot a linear sequence on a graph, the points make a straight line."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "متتابعة تزيد أو تنقص بالمقدار نفسه كل مرة (linear sequence)",
            "متتابعة لا تزيد أو تنقص بالمقدار نفسه كل مرة (non-linear sequence)",
            "الفجوة بين حدّ والحدّ التالي (difference)",
            "يبقى كما هو (constant)",
            "متزايدة (ascending)",
            "متناقصة (descending)"
          ],
          "passage": [
            "انظر إلى الفجوات بين حدود المتتابعة.",
            "الفجوة بين حدَّين متجاورَين تُسمّى الفرق (difference).",
            "في 4، 7، 10، 13 الفرق دائماً 3.",
            "الفرق ثابت (constant).",
            "هذه متتابعة خطية (linear sequence).",
            "في 1، 2، 4، 8 الفروق هي 1 و2 و4.",
            "وهي ليست متساوية.",
            "هذه متتابعة غير خطية (non-linear sequence).",
            "المتتابعة التي تزيد تُسمّى متزايدة (ascending).",
            "والمتتابعة التي تنقص تُسمّى متناقصة (descending).",
            "المتتابعات الخطية يمكن أن تكون متزايدة أو متناقصة.",
            "إذا رسمت متتابعة خطية على رسم بياني، فإن النقاط تكوّن خطاً مستقيماً."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "ciąg, który za każdym razem rośnie lub maleje o tę samą wartość (linear sequence)",
            "ciąg, który nie rośnie ani nie maleje za każdym razem o tę samą wartość (non-linear sequence)",
            "odstęp między jednym wyrazem a następnym (difference)",
            "pozostający taki sam (constant)",
            "rosnący (ascending)",
            "malejący (descending)"
          ],
          "passage": [
            "Spójrz na odstępy między wyrazami ciągu.",
            "Odstęp między dwoma sąsiednimi wyrazami nazywamy różnicą (difference).",
            "W 4, 7, 10, 13 różnica zawsze wynosi 3.",
            "Różnica jest stała (constant).",
            "To jest ciąg liniowy (linear sequence).",
            "W 1, 2, 4, 8 różnice wynoszą 1, 2 i 4.",
            "Nie są takie same.",
            "To jest ciąg nieliniowy (non-linear sequence).",
            "Ciąg, który rośnie, jest rosnący (ascending).",
            "Ciąg, który maleje, jest malejący (descending).",
            "Ciągi liniowe mogą być rosnące lub malejące.",
            "Jeśli naniesiesz ciąg liniowy na wykres, punkty utworzą linię prostą."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma sequência que sobe ou desce sempre a mesma quantidade (linear sequence, sequência linear)",
            "uma sequência que não sobe nem desce sempre a mesma quantidade (non-linear sequence, sequência não linear)",
            "o intervalo entre um termo e o seguinte (difference, diferença)",
            "que se mantém igual (constant, constante)",
            "que vai subindo (ascending, ascendente)",
            "que vai descendo (descending, descendente)"
          ],
          "passage": [
            "Olhe para os intervalos entre os termos de uma sequência.",
            "O intervalo entre dois termos vizinhos chama-se diferença (difference).",
            "Em 4, 7, 10, 13 a diferença é sempre 3.",
            "A diferença é constante.",
            "Esta é uma sequência linear (linear sequence).",
            "Em 1, 2, 4, 8 as diferenças são 1, 2 e 4.",
            "Não são iguais.",
            "Esta é uma sequência não linear (non-linear sequence).",
            "Uma sequência que sobe é ascendente (ascending).",
            "Uma sequência que desce é descendente (descending).",
            "As sequências lineares podem ser ascendentes ou descendentes.",
            "Se você marcar uma sequência linear num gráfico, os pontos formam uma linha reta."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "taxane mar kasta isku qaddar kor u kaca ama hoos u dhaca (linear sequence)",
            "taxane aan mar kasta isku qaddar kor u kicin ama hoos u dhicin (non-linear sequence)",
            "farqiga u dhexeeya xubin iyo tan xigta (difference)",
            "isku mid sii ahaanaya (constant)",
            "kor u socda (ascending)",
            "hoos u socda (descending)"
          ],
          "passage": [
            "Fiiri farqiyada u dhexeeya xubnaha taxane.",
            "Farqiga u dhexeeya laba xubnood oo is ag yaal waxaa la yiraahdaa difference.",
            "Gudaha 4, 7, 10, 13 farqigu mar walba waa 3.",
            "Farqigu waa joogto (constant).",
            "Kani waa taxane toosan (linear sequence).",
            "Gudaha 1, 2, 4, 8 farqiyadu waa 1, 2 iyo 4.",
            "Isku mid ma aha.",
            "Kani waa taxane aan toosnayn (non-linear sequence).",
            "Taxane kor u socda waa ascending.",
            "Taxane hoos u socda waa descending.",
            "Taxanayaasha toosan waxay noqon karaan ascending ama descending.",
            "Haddii aad taxane toosan garaaf ku sawirto, dhibcuhu waxay samaystaan xariiq toosan."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "послідовність, яка кожного разу зростає або спадає на одну й ту саму величину (linear sequence)",
            "послідовність, яка не зростає і не спадає кожного разу на одну й ту саму величину (non-linear sequence)",
            "проміжок між одним членом і наступним (difference)",
            "той, що залишається незмінним (constant)",
            "той, що зростає (ascending)",
            "той, що спадає (descending)"
          ],
          "passage": [
            "Подивіться на проміжки між членами послідовності.",
            "Проміжок між двома сусідніми членами називається різницею (difference).",
            "У 4, 7, 10, 13 різниця завжди дорівнює 3.",
            "Різниця стала (constant).",
            "Це лінійна послідовність (linear sequence).",
            "У 1, 2, 4, 8 різниці дорівнюють 1, 2 і 4.",
            "Вони не однакові.",
            "Це нелінійна послідовність (non-linear sequence).",
            "Послідовність, яка зростає, називається зростаючою (ascending).",
            "Послідовність, яка спадає, називається спадною (descending).",
            "Лінійні послідовності можуть бути зростаючими або спадними.",
            "Якщо побудувати лінійну послідовність на графіку, точки утворять пряму лінію."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایسا سلسلہ جو ہر بار ایک ہی مقدار سے اوپر یا نیچے جاتا ہے (linear sequence)",
            "ایسا سلسلہ جو ہر بار ایک ہی مقدار سے اوپر یا نیچے نہیں جاتا (non-linear sequence)",
            "ایک رکن اور اگلے رکن کے بیچ کا فاصلہ (difference)",
            "ایک جیسا رہنے والا (constant)",
            "اوپر جاتا ہوا (ascending)",
            "نیچے جاتا ہوا (descending)"
          ],
          "passage": [
            "سلسلے کے ارکان کے بیچ کے فاصلوں کو دیکھیں۔",
            "ساتھ ساتھ کے دو ارکان کے بیچ کے فاصلے کو فرق (difference) کہتے ہیں۔",
            "4, 7, 10, 13 میں فرق ہمیشہ 3 ہے۔",
            "فرق مستقل (constant) ہے۔",
            "یہ ایک خطی سلسلہ (linear sequence) ہے۔",
            "سلسلے 1, 2, 4, 8 میں فرق 1، 2 اور 4 ہیں۔",
            "وہ ایک جیسے نہیں ہیں۔",
            "یہ ایک غیر خطی سلسلہ (non-linear sequence) ہے۔",
            "جو سلسلہ اوپر جاتا ہے وہ بڑھتا ہوا (ascending) ہے۔",
            "جو سلسلہ نیچے جاتا ہے وہ گھٹتا ہوا (descending) ہے۔",
            "خطی سلسلے بڑھتے ہوئے یا گھٹتے ہوئے ہو سکتے ہیں۔",
            "اگر آپ خطی سلسلے کو گراف پر لگائیں تو نقطے ایک سیدھی لکیر بناتے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Constant difference",
          paragraphs: [
            "Write the difference between each pair of terms that are next to each other. For 4, 7, 10, 13 the differences are +3, +3, +3. The difference is constant, so this is a linear sequence.",
            "For 2, 5, 11, 23 the differences are +3, +6, +12. They change, so this is a non-linear sequence. A non-linear sequence can still have a rule, but the rule is not 'add the same amount'.",
            "A linear sequence is also called an arithmetic sequence. On a number line, its terms are equal jumps apart."
          ],
          worked: {
            q: "Here is a sequence: 40, 34, 28, 22, 16, … Find the differences. Is the sequence linear? What is the next term?",
            steps: ["40 − 34 = 6, 34 − 28 = 6, 28 − 22 = 6 and 22 − 16 = 6.", "The difference is constant, so the sequence is linear.", "The terms go down by 6, so the next term is 16 − 6 = 10."],
            answer: "10",
            check: "16 - (40 - 34)"
          },
          // read-only line: equal jumps are what 'linear' looks like
          widget: { type: "numberline", min: 0, max: 14, step: 1,
                    prompt: "Find 4, 7, 10 and 13 on the line. Each jump is 3. Equal jumps mean the sequence is linear." },
          tip: "Work out every difference, not just the first one."
        },
        {
          heading: "Ascending and descending",
          paragraphs: [
            "A sequence that goes up is ascending. A sequence that goes down is descending. Both linear and non-linear sequences can go either way.",
            "So a sequence can be described with two words. 50, 46, 42, 38 is linear and descending: it goes down by 4 each time. 3, 30, 300, 3000 is non-linear and ascending: it goes up, but by a different amount each time.",
            "Some sequences do neither. 10, 5, 10, 5 goes down, then up, then down. It is non-linear, and it is not ascending or descending."
          ],
          worked: {
            q: "Describe the sequence 75, 65, 55, 45, … using the words linear or non-linear and ascending or descending.",
            steps: ["The differences are −10, −10, −10: constant, so it is linear.", "The terms get smaller, so it is descending."],
            answer: "Linear and descending"
          },
          tip: "Two questions: is the difference constant? Are the terms getting bigger or smaller?"
        },
        {
          heading: "Tables and graphs",
          paragraphs: [
            "A table shows the position of each term and the term itself. Position 1, 2, 3, 4 with terms 3, 5, 7, 9 is a linear sequence that goes up by 2.",
            "You can plot a sequence as a graph. Position goes along the bottom axis and the term goes up the side axis. For a linear sequence the points lie in a straight line.",
            "For a non-linear sequence, such as 1, 4, 9, 16, the points curve upwards. The gaps between them get bigger as the position grows."
          ],
          worked: {
            q: "A table shows a sequence. Positions 1, 2, 3 and 4 have terms 3, 5, 7 and 9. Would the points lie in a straight line? What is the term at position 6?",
            steps: ["The differences are 5 − 3 = 2, 7 − 5 = 2 and 9 − 7 = 2. The sequence is linear, so the points lie in a straight line.", "Position 5: 9 + 2 = 11.", "Position 6: 11 + 2 = 13."],
            answer: "13",
            check: "9 + (5 - 3) * (6 - 4)"
          },
          tip: "Straight line of points: linear. Curve: non-linear."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these sequences is linear?", options: ["3, 6, 12, 24", "4, 7, 10, 13", "2, 5, 10, 17", "2, 3, 5, 8"], answer: 1,
          check: "[len(set(b - a for a, b in zip(s, s[1:]))) == 1 for s in [[3, 6, 12, 24], [4, 7, 10, 13], [2, 5, 10, 17], [2, 3, 5, 8]]]",
          feedback: [
            "You saw a sequence with a clear rule, but the differences are 3, 6 and 12. They change, so it is non-linear. Doubling is a rule, but it is not a constant difference.",
            "",
            "The differences are 3, 5 and 7. They go up by 2 each time, so they are not constant. This sequence is non-linear.",
            "The differences are 1, 2 and 3. They change, so the sequence is non-linear."
          ],
          why: "Only 4, 7, 10, 13 has a constant difference. Its differences are 3, 3, 3." },
        { kind: "numeric", q: "Here is a linear sequence: 7, 12, 17, 22. What is the difference between each term and the next?", answer: 5, tolerance: 0, units: "",
          check: "12 - 7",
          misconceptions: [
            { answer: 15, says: "You found the gap between the first term and the last term: 22 − 7 = 15. The difference is the gap between two terms next to each other: 12 − 7 = 5.", check: "22 - 7" },
            { answer: 4, says: "You counted how many terms there are. The difference is how much the sequence goes up by each time: 12 − 7 = 5.", check: "len([7, 12, 17, 22])" }
          ],
          why: "12 − 7 = 5, 17 − 12 = 5 and 22 − 17 = 5. The difference is 5." },
        { kind: "gap", q: "A linear sequence has a ___ difference between each term and the next.", answer: "constant", options: ["constant", "changing", "doubling"],
          feedback: {
            "changing": "If the difference changes from one pair of terms to the next, the sequence is non-linear. In a linear sequence the difference stays the same.",
            "doubling": "A sequence whose terms double, like 3, 6, 12, 24, is non-linear: its differences get bigger each time. A linear sequence has the same difference every time."
          },
          why: "Linear means the same difference every time: the difference is constant." }
      ],
      modules: [
        {
          title: "Linear or non-linear?",
          task: { kind: "mcq", q: "Which of these sequences is non-linear?", options: ["12, 17, 22, 27", "60, 52, 44, 36", "5, 10, 20, 40", "3, 13, 23, 33"], answer: 2,
                  check: "[len(set(b - a for a, b in zip(s, s[1:]))) != 1 for s in [[12, 17, 22, 27], [60, 52, 44, 36], [5, 10, 20, 40], [3, 13, 23, 33]]]",
                  feedback: [
                    "The differences are 5, 5 and 5. A constant difference means the sequence is linear, even though it is not the only one.",
                    "You may have chosen this because it goes down. Descending sequences can still be linear: the differences here are 8, 8 and 8.",
                    "",
                    "The differences are 10, 10 and 10, so this is linear. Big jumps do not make a sequence non-linear; changing jumps do."
                  ] },
          explain: "Say, in one sentence, what you looked at to decide which sequence was non-linear.",
          contexts: [
            { label: "Savings", q: "Each list shows a pupil's total savings in pounds at the end of each week. Which pupil is not saving the same amount every week?",
              why: "Only the third list has differences that change: it doubles each week. The others go up or down by the same amount every week." },
            { label: "Plant heights", q: "Each list shows the height of a plant in cm, measured once a week. Which plant is not growing by the same amount each week?",
              why: "The third plant grows by more each week: the gaps are not constant. The other lists change by a constant amount." },
            { label: "Game scores", q: "Each list shows a player's points total after each round of a game. Which player's total does not change by the same amount every round?",
              why: "The third player's total doubles each round, so the gaps grow. The other totals change by a constant amount each round." }
          ],
          levels: {
            support: {
              steps: ["For each sequence, find the difference between each pair of terms that are next to each other.", "Write the differences down.", "If the differences are all the same the sequence is linear. If they change, it is non-linear."],
              example: { q: "Is 3, 7, 12, 18 linear or non-linear?",
                         steps: ["7 − 3 = 4, 12 − 7 = 5 and 18 − 12 = 6.", "The differences change.", "So the sequence is non-linear."],
                         answer: "Non-linear" }
            },
            core: { hint: "Work out the differences for each sequence. Which one has differences that change?" },
            stretch: { extend: "The sequence 5, 10, 20, 40 is non-linear, but it still has a rule. Describe the rule and find the next two terms." }
          },
          why: "5, 10, 20, 40 has differences 5, 10 and 20, which change, so it is non-linear. The other three sequences each have a constant difference."
        },
        {
          title: "Describe the sequence",
          task: { kind: "match", q: "Match each sequence to its description.",
                  pairs: [["30, 27, 24, 21", "linear and descending"], ["2, 6, 18, 54", "non-linear and ascending"], ["4, 9, 14, 19", "linear and ascending"], ["100, 50, 25, 12.5", "non-linear and descending"]] },
          explain: "Say, in one sentence, how you told the ascending sequences from the descending ones.",
          levels: {
            support: {
              steps: ["Decide if the terms get bigger (ascending) or smaller (descending).", "Find the differences. Constant means linear, changing means non-linear.", "Put the two words together."],
              example: { q: "Describe 8, 16, 32, 64 with two words.",
                         steps: ["The terms get bigger: ascending.", "The differences are 8, 16 and 32, which change: non-linear."],
                         answer: "Non-linear and ascending" }
            },
            core: { hint: "Sort them into ascending and descending first. Then look at the differences." },
            stretch: { extend: "Write your own sequence for each of the four descriptions. Make each one start on 10." }
          },
          why: "30, 27, 24, 21 goes down by 3 each time; 4, 9, 14, 19 goes up by 5 each time. 2, 6, 18, 54 and 100, 50, 25, 12.5 change by a different amount each time, one going up and one going down."
        },
        {
          title: "Table and graph",
          task: { kind: "numeric", q: "A sequence is shown in a table. Positions 1, 2, 3 and 4 have terms 5, 8, 11 and 14. The points lie in a straight line when plotted. What is the term at position 7?", answer: 23, tolerance: 0, units: "",
                  check: "14 + (8 - 5) * (7 - 4)",
                  misconceptions: [
                    { answer: 20, says: "You stopped at position 6. From position 4 to position 7 is 3 jumps of 3: 14, 17, 20, 23.", check: "14 + (8 - 5) * 2" },
                    { answer: 26, says: "You made one jump too many and reached position 8. From position 4 to position 7 is 3 jumps of 3, so the term is 14 + 9 = 23.", check: "14 + (8 - 5) * 4" },
                    { answer: 21, says: "You multiplied the position 7 by the difference 3. That would work if the term at position 1 were 3, but it is 5. Count on from 14 instead: 17, 20, 23.", check: "7 * (8 - 5)" }
                  ] },
          explain: "Say, in one sentence, how the straight line of points tells you the sequence is linear.",
          contexts: [
            { label: "Taxi fare", q: "A taxi charges by the mile. After 1, 2, 3 and 4 miles the fare in pounds is 5, 8, 11 and 14. The fare goes up by the same amount every mile. What is the fare after 7 miles?",
              why: "The fare goes up by 3 pounds a mile. From 4 miles to 7 miles is 3 more miles, so 14 + 9 = 23." },
            { label: "Cup tower", q: "Cups are stacked in a tower. Towers of 1, 2, 3 and 4 cups are 5, 8, 11 and 14 cm tall. Each cup adds the same height. How tall is a tower of 7 cups?",
              why: "Each cup adds 3 cm. From 4 cups to 7 cups is 3 more cups, so 14 + 9 = 23." }
          ],
          levels: {
            support: {
              steps: ["Find the difference between the terms: it is constant because the points are in a straight line.", "Count how many positions you need to move on from the last one in the table.", "Add the difference on that many times."],
              example: { q: "Positions 1, 2 and 3 have terms 4, 6 and 8. What is the term at position 6?",
                         steps: ["The difference is 6 − 4 = 2.", "From position 3 to position 6 is 3 jumps.", "8 + 2 + 2 + 2 = 14."],
                         answer: "14", check: "8 + (6 - 4) * (6 - 3)" }
            },
            core: { hint: "The difference is 3. How many positions is it from position 4 to position 7?" },
            stretch: { extend: "Imagine the graph of 1, 4, 9, 16 drawn on the same axes. Describe how it would look different from this one, and explain why." }
          },
          why: "The difference is 3. From position 4 to position 7 is 3 jumps of 3, which is 9. 14 + 9 = 23."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 3
    {
      key: "continue-linear", n: 3,
      title: "Continue linear sequences",
      lead: "Find the common difference, describe the term-to-term rule, and continue linear sequences with whole numbers, decimals and numbers below zero.",
      covers: [3],
      pretext: {
        words: [
          { word: "term-to-term rule", means: "how to get from one term to the next", sentence: "The term-to-term rule is add 4 to the previous term." },
          { word: "previous term", means: "the term just before", sentence: "Add 4 to the previous term to get the next one." },
          { word: "common difference", means: "the amount a linear sequence goes up or down by each time", sentence: "In 2, 9, 16 the common difference is 7." },
          { word: "decimal", means: "a number with a decimal point, like 2.5", sentence: "Some sequences use decimals." },
          { word: "axes", means: "the two lines a graph is drawn on", sentence: "Position goes along the bottom axis." }
        ],
        passage: [
          "A linear sequence goes up or down by the same amount each time.",
          "This amount is the common difference.",
          "To find it, take one term away from the next term.",
          "In 31, 28, 25 the terms go down by 3.",
          "So the next term is 22, and then 19.",
          "The term-to-term rule says how to get from one term to the next.",
          "Here the rule is subtract 3 from the previous term.",
          "Some sequences use decimals.",
          "In 1.5, 2.5, 3.5 the common difference is 1.",
          "The next term is 4.5.",
          "A linear sequence can go below zero.",
          "In 9, 6, 3, 0 the next term is −3.",
          "On a graph, the points of a linear sequence make a straight line."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "كيف تنتقل من حدّ إلى الحدّ التالي (term-to-term rule)",
            "الحدّ الذي قبل مباشرة (previous term)",
            "المقدار الذي تزيد به أو تنقص به المتتابعة الخطية كل مرة (common difference)",
            "عدد فيه فاصلة عشرية، مثل 2.5 (decimal)",
            "الخطّان اللذان يُرسم عليهما الرسم البياني (axes)"
          ],
          "passage": [
            "المتتابعة الخطية تزيد أو تنقص بالمقدار نفسه كل مرة.",
            "هذا المقدار هو الفرق المشترك (common difference).",
            "لتجده، اطرح حدّاً من الحدّ الذي يليه.",
            "في 31، 28، 25 تنقص الحدود بمقدار 3.",
            "إذن الحدّ التالي هو 22، ثم 19.",
            "قاعدة الانتقال بين الحدود (term-to-term rule) تقول كيف تنتقل من حدّ إلى الحدّ التالي.",
            "هنا القاعدة هي: اطرح 3 من الحدّ السابق.",
            "بعض المتتابعات تستعمل الأعداد العشرية.",
            "في 1.5، 2.5، 3.5 الفرق المشترك هو 1.",
            "الحدّ التالي هو 4.5.",
            "المتتابعة الخطية يمكن أن تنزل تحت الصفر.",
            "في 9، 6، 3، 0 الحدّ التالي هو −3.",
            "على الرسم البياني، نقاط المتتابعة الخطية تكوّن خطاً مستقيماً."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "jak przejść od jednego wyrazu do następnego (term-to-term rule)",
            "wyraz tuż przed (previous term)",
            "wartość, o którą ciąg liniowy rośnie lub maleje za każdym razem (common difference)",
            "liczba z przecinkiem dziesiętnym, na przykład 2.5 (decimal)",
            "dwie linie, na których rysuje się wykres (axes)"
          ],
          "passage": [
            "Ciąg liniowy rośnie lub maleje za każdym razem o tę samą wartość.",
            "Ta wartość to różnica ciągu (common difference).",
            "Żeby ją znaleźć, odejmij jeden wyraz od następnego wyrazu.",
            "W 31, 28, 25 wyrazy maleją o 3.",
            "Więc następny wyraz to 22, a potem 19.",
            "Reguła „wyraz do wyrazu” (term-to-term rule) mówi, jak przejść od jednego wyrazu do następnego.",
            "Tutaj reguła brzmi: odejmij 3 od poprzedniego wyrazu.",
            "Niektóre ciągi używają liczb dziesiętnych.",
            "W 1.5, 2.5, 3.5 różnica ciągu wynosi 1.",
            "Następny wyraz to 4.5.",
            "Ciąg liniowy może zejść poniżej zera.",
            "W 9, 6, 3, 0 następny wyraz to −3.",
            "Na wykresie punkty ciągu liniowego tworzą linię prostą."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "como ir de um termo ao seguinte (term-to-term rule)",
            "o termo logo antes (previous term, termo anterior)",
            "a quantidade que uma sequência linear sobe ou desce de cada vez (common difference, diferença comum)",
            "um número com vírgula/ponto decimal, como 2.5 (decimal)",
            "as duas linhas sobre as quais um gráfico é desenhado (axes, eixos)"
          ],
          "passage": [
            "Uma sequência linear sobe ou desce sempre a mesma quantidade.",
            "Essa quantidade é a diferença comum (common difference).",
            "Para a encontrar, tire um termo ao termo seguinte.",
            "Em 31, 28, 25 os termos descem 3 de cada vez.",
            "Por isso, o termo seguinte é 22, e depois 19.",
            "A regra termo a termo (term-to-term rule) diz como ir de um termo ao seguinte.",
            "Aqui a regra é: subtrair 3 ao termo anterior.",
            "Algumas sequências usam decimais.",
            "Em 1.5, 2.5, 3.5 a diferença comum é 1.",
            "O termo seguinte é 4.5.",
            "Uma sequência linear pode ir abaixo de zero.",
            "Em 9, 6, 3, 0 o termo seguinte é −3.",
            "Num gráfico, os pontos de uma sequência linear formam uma linha reta."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "sida xubin looga gudbo tan xigta (term-to-term rule)",
            "xubinta isla ka horreysa (previous term)",
            "qaddarka taxane toosan mar kasta kor u kaco ama hoos u dhaco (common difference)",
            "tiro leh dhibic tobanle, sida 2.5 (decimal)",
            "labada xariiq ee garaaf lagu sawiro (axes)"
          ],
          "passage": [
            "Taxane toosan mar kasta isku qaddar ayuu kor u kacaa ama hoos u dhacaa.",
            "Qaddarkan waa farqiga guud (common difference).",
            "Si aad u hesho, hal xubin ka jar xubinta xigta.",
            "Gudaha 31, 28, 25 xubnuhu 3 ayay hoos u dhacaan.",
            "Sidaas darteed xubinta xigtaa waa 22, kadibna 19.",
            "Xeerka xubin-ilaa-xubin (term-to-term rule) wuxuu sheegaa sida xubin looga gudbo tan xigta.",
            "Halkan xeerku waa: 3 ka jar xubinta ka horreysa.",
            "Taxanayaasha qaar waxay isticmaalaan jajab tobanle (decimals).",
            "Gudaha 1.5, 2.5, 3.5 farqiga guud waa 1.",
            "Xubinta xigtaa waa 4.5.",
            "Taxane toosan eber ka hoos ayuu mari karaa.",
            "Gudaha 9, 6, 3, 0 xubinta xigtaa waa −3.",
            "Garaaf, dhibcaha taxane toosan waxay samaystaan xariiq toosan."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "як перейти від одного члена до наступного (term-to-term rule)",
            "член, що стоїть безпосередньо перед (previous term)",
            "величина, на яку лінійна послідовність кожного разу зростає або спадає (common difference)",
            "число з десятковою крапкою, наприклад 2.5 (decimal)",
            "дві лінії, на яких будують графік (axes)"
          ],
          "passage": [
            "Лінійна послідовність кожного разу зростає або спадає на одну й ту саму величину.",
            "Ця величина — спільна різниця (common difference).",
            "Щоб знайти її, відніміть один член від наступного.",
            "У 31, 28, 25 члени зменшуються на 3.",
            "Отже, наступний член — 22, а потім 19.",
            "Правило переходу від члена до члена (term-to-term rule) говорить, як перейти від одного члена до наступного.",
            "Тут правило таке: відняти 3 від попереднього члена.",
            "Деякі послідовності використовують десяткові дроби (decimals).",
            "У 1.5, 2.5, 3.5 спільна різниця дорівнює 1.",
            "Наступний член — 4.5.",
            "Лінійна послідовність може опускатися нижче нуля.",
            "У 9, 6, 3, 0 наступний член — −3.",
            "На графіку точки лінійної послідовності утворюють пряму лінію."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایک رکن سے اگلے رکن تک کیسے جائیں (term-to-term rule)",
            "بالکل پہلے والا رکن (previous term)",
            "وہ مقدار جس سے خطی سلسلہ ہر بار اوپر یا نیچے جاتا ہے (common difference)",
            "اعشاریہ والا عدد، جیسے 2.5 (decimal)",
            "وہ دو لکیریں جن پر گراف بنایا جاتا ہے (axes)"
          ],
          "passage": [
            "خطی سلسلہ ہر بار ایک ہی مقدار سے اوپر یا نیچے جاتا ہے۔",
            "یہ مقدار مشترک فرق (common difference) ہے۔",
            "اسے معلوم کرنے کے لیے اگلے رکن سے ایک رکن کو گھٹائیں۔",
            "31, 28, 25 میں ارکان 3 کم ہوتے جاتے ہیں۔",
            "اس لیے اگلا رکن 22 ہے، اور پھر 19۔",
            "رکن سے رکن کا قاعدہ (term-to-term rule) بتاتا ہے کہ ایک رکن سے اگلے تک کیسے جائیں۔",
            "یہاں قاعدہ ہے: پچھلے رکن سے 3 گھٹائیں۔",
            "کچھ سلسلے اعشاریہ استعمال کرتے ہیں۔",
            "سلسلے 1.5, 2.5, 3.5 میں مشترک فرق 1 ہے۔",
            "اگلا رکن 4.5 ہے۔",
            "خطی سلسلہ صفر سے نیچے جا سکتا ہے۔",
            "9, 6, 3, 0 میں اگلا رکن −3 ہے۔",
            "گراف پر خطی سلسلے کے نقطے ایک سیدھی لکیر بناتے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Finding the common difference",
          paragraphs: [
            "In a linear sequence the common difference is the amount you add or subtract each time. To find it, pick two terms that are next to each other and take the earlier one away from the later one.",
            "In 7, 12, 17, 22 the common difference is 12 − 7 = 5. The term-to-term rule is add 5 to the previous term. Check with another pair: 22 − 17 = 5.",
            "For a descending sequence, take care with the order. In 50, 42, 34 the terms go down by 8, because 50 − 42 = 8. The rule is subtract 8 from the previous term. Say the size of the jump and the direction."
          ],
          worked: {
            q: "Here is a linear sequence: 88, 79, 70, 61, … Find the next two terms.",
            steps: ["Find the common difference: 88 − 79 = 9. The terms go down.", "The rule is subtract 9 from the previous term.", "61 − 9 = 52.", "52 − 9 = 43."],
            answer: "52, 43",
            check: "[61 - (88 - 79), 61 - (88 - 79) - (88 - 79)]"
          },
          tip: "Find the difference, decide the direction, then check it on a second pair."
        },
        {
          heading: "Decimal sequences",
          paragraphs: [
            "The common difference can be a decimal. In 2.4, 3.1, 3.8 the difference is 3.1 − 2.4 = 0.7. Line up the decimal points when you add or subtract.",
            "Keep the same number of decimal places all the way along. If the terms have one decimal place, the next term should too: 3.8 + 0.7 = 4.5.",
            "Decimal sequences can go down as well. In 6.5, 6.1, 5.7 the rule is subtract 0.4 from the previous term, so the next term is 5.3."
          ],
          worked: {
            q: "Write the next three terms of 1.6, 2.3, 3.0, …",
            steps: ["The common difference is 2.3 − 1.6 = 0.7.", "3.0 + 0.7 = 3.7.", "3.7 + 0.7 = 4.4.", "4.4 + 0.7 = 5.1."],
            answer: "3.7, 4.4, 5.1",
            check: "[3.0 + (2.3 - 1.6), 3.0 + (2.3 - 1.6) + (2.3 - 1.6), 3.0 + 3 * (2.3 - 1.6)]"
          },
          tip: "Line up the decimal points. 3.0 + 0.7 is 3.7, not 3.07."
        },
        {
          heading: "Sequences that go below zero",
          paragraphs: [
            "A descending linear sequence does not stop at zero. It carries on into the negative numbers. In 20, 14, 8, 2 the rule is subtract 6, so the next term is 2 − 6 = −4.",
            "Use a number line to see it. Start at the last term and jump down by the common difference. If the jump takes you past zero, the answer is negative.",
            "Keep going with the same rule: −4 − 6 = −10. The sequence is still linear, because the difference is still constant."
          ],
          worked: {
            q: "What is the next term of 17, 12, 7, 2, …?",
            steps: ["The common difference is 17 − 12 = 5. The terms go down.", "Start at 2 and jump down 5.", "2 − 5 = −3. The jump crosses zero, so the answer is negative."],
            answer: "−3",
            check: "2 - (17 - 12)"
          },
          widget: { type: "numberline", min: -10, max: 20, step: 1,
                    prompt: "Drag the counter from 2 down one jump of 5. The next term is below zero.", start: 2, target: -3 },
          tip: "After −3 the sequence carries on: −8, −13, …"
        }
      ],
      gate: [
        { kind: "numeric", q: "What is the next term of 31, 27, 23, 19, …?", answer: 15, tolerance: 0, units: "",
          check: "19 - (31 - 27)",
          misconceptions: [
            { answer: 23, says: "You added 4 instead of subtracting it. The terms are getting smaller, so the rule is subtract 4 from the previous term: 19 − 4 = 15.", check: "19 + (31 - 27)" },
            { answer: 11, says: "You made two jumps and gave the term after next. One jump of 4 down from 19 gives the next term: 19 − 4 = 15.", check: "19 - (31 - 27) - (31 - 27)" }
          ],
          why: "The common difference is 4 and the terms go down, so the next term is 19 − 4 = 15." },
        { kind: "mcq", q: "What is the next term of 0.8, 1.3, 1.8, 2.3, …?", options: ["2.8", "2.5", "3.3", "2.33"], answer: 0,
          check: "2.3 + (1.3 - 0.8)",
          feedback: [
            "",
            "You added 0.2. The common difference is 1.3 − 0.8 = 0.5, so the next term is 2.3 + 0.5 = 2.8.",
            "You added 1 instead of 0.5. Check the gap between two terms: 1.3 − 0.8 = 0.5.",
            "You wrote the 5 in the wrong column. Line up the decimal points: 2.3 + 0.5 = 2.8, not 2.33."
          ],
          why: "The common difference is 0.5, so the next term is 2.3 + 0.5 = 2.8." },
        { kind: "gap", q: "The term-to-term rule of 40, 34, 28, 22 is ___ 6 from the previous term.", answer: "subtract", options: ["subtract", "add", "divide"],
          feedback: {
            "add": "The terms are getting smaller, so you are not adding. 40 − 34 = 6, and the rule is subtract 6 from the previous term.",
            "divide": "40 ÷ 6 is not 34. The terms go down by 6 each time, so the rule is subtract 6 from the previous term."
          },
          why: "Each term is 6 less than the one before, so the rule is subtract 6 from the previous term." }
      ],
      modules: [
        {
          title: "Find a later term",
          task: { kind: "numeric", q: "Here is a linear sequence: 4, 13, 22, 31, … What is the 7th term?", answer: 58, tolerance: 0, units: "",
                  check: "31 + (13 - 4) * (7 - 4)",
                  misconceptions: [
                    { answer: 49, says: "You stopped at the 6th term. 31 is the 4th term, so you need three jumps of 9 to reach the 7th: 40, 49, 58.", check: "31 + (13 - 4) + (13 - 4)" },
                    { answer: 67, says: "You made one jump too many and found the 8th term. From the 4th term to the 7th term is 3 jumps of 9: 31 + 27 = 58.", check: "31 + (13 - 4) * 4" },
                    { answer: 63, says: "You multiplied 7 by the common difference 9. That ignores where the sequence starts. Count on from 31 instead: 40, 49, 58.", check: "7 * (13 - 4)" }
                  ] },
          explain: "Say, in one sentence, how many jumps you needed to get from the 4th term to the 7th term.",
          contexts: [
            { label: "Savings", q: "Leo's total savings in pounds at the end of each month are 4, 13, 22, 31, … If he carries on saving the same amount, how much will he have at the end of the 7th month?",
              why: "He saves 9 pounds a month. From the 4th month to the 7th is 3 more months, so 31 + 27 = 58." },
            { label: "Sunflower", q: "A sunflower is measured every week. Its heights in cm are 4, 13, 22, 31, … If it keeps growing at the same rate, how tall will it be at the 7th measurement?",
              why: "It grows 9 cm a week. From the 4th measurement to the 7th is 3 more weeks, so 31 + 27 = 58." }
          ],
          levels: {
            support: {
              steps: ["Find the common difference from two terms next to each other.", "Work out which term you have reached.", "Add the common difference on, one term at a time, until you reach the 7th."],
              example: { q: "Here is a linear sequence: 5, 12, 19, 26, … What is the 6th term?",
                         steps: ["The common difference is 12 − 5 = 7.", "26 is the 4th term. 5th term: 26 + 7 = 33.", "6th term: 33 + 7 = 40."],
                         answer: "40", check: "26 + (12 - 5) + (12 - 5)" }
            },
            core: { hint: "The common difference is 9. 31 is the 4th term." },
            stretch: { extend: "Is 130 a term in this sequence? Explain how you can decide without listing every term." }
          },
          why: "The common difference is 13 − 4 = 9. From the 4th term to the 7th term is 3 jumps of 9, which is 27. 31 + 27 = 58."
        },
        {
          title: "Decimal sequence",
          task: { kind: "numeric", q: "Here is a linear sequence: 5.4, 4.8, 4.2, 3.6, … What is the next term?", answer: 3, tolerance: 0, units: "",
                  check: "3.6 - (5.4 - 4.8)",
                  misconceptions: [
                    { answer: 4.2, says: "You added 0.6 instead of subtracting it. The terms are getting smaller: 5.4 − 4.8 = 0.6, so the rule is subtract 0.6 from the previous term.", check: "3.6 + (5.4 - 4.8)" },
                    { answer: 2.4, says: "You made two jumps and gave the term after next. One jump down from 3.6 gives the next term: 3.6 − 0.6 = 3.0.", check: "3.6 - (5.4 - 4.8) - (5.4 - 4.8)" }
                  ] },
          explain: "Say, in one sentence, how you kept the decimal points lined up when you subtracted.",
          contexts: [
            { label: "Candle", q: "A candle is measured every hour. Its heights in cm are 5.4, 4.8, 4.2, 3.6, … If it burns down at the same rate, what will the next height be?",
              why: "It loses 0.6 cm an hour: 3.6 − 0.6 = 3.0." },
            { label: "Water tank", q: "The water in a tank is measured each day. Its depth in metres is 5.4, 4.8, 4.2, 3.6, … If it keeps falling at the same rate, what will the next depth be?",
              why: "The depth falls 0.6 m a day: 3.6 − 0.6 = 3.0." }
          ],
          levels: {
            support: {
              steps: ["Find the common difference: take the second term away from the first.", "Decide the direction: the terms are going down.", "Take the common difference away from the last term, lining up the decimal points."],
              example: { q: "Find the next term of 7.5, 6.9, 6.3, …",
                         steps: ["7.5 − 6.9 = 0.6. The terms go down.", "The rule is subtract 0.6 from the previous term.", "6.3 − 0.6 = 5.7."],
                         answer: "5.7", check: "6.3 - (7.5 - 6.9)" }
            },
            core: { hint: "5.4 − 4.8 = 0.6. Which way is the sequence going?" },
            stretch: { extend: "Write the next four terms after 3.0. What happens to the sequence, and could a candle really show those heights? Explain." }
          },
          why: "The common difference is 5.4 − 4.8 = 0.6 and the terms go down. 3.6 − 0.6 = 3.0."
        },
        {
          title: "Below zero",
          task: { kind: "mcq", q: "Here is a linear sequence: 14, 9, 4, −1, … What is the next term?", options: ["−6", "−5", "4", "6"], answer: 0,
                  check: "-1 - (14 - 9)",
                  feedback: [
                    "",
                    "You counted 5 down from zero, not from −1. Start at −1 and jump down 5: −1 − 5 = −6.",
                    "You went up by 5 instead of down. The terms are getting smaller, so the rule is subtract 5 from the previous term.",
                    "You ignored the minus sign on −1 and worked out 1 + 5. The previous term is −1, and the sequence is going down, so the next term is −6."
                  ] },
          explain: "Say, in one sentence, why the sequence does not stop at zero.",
          contexts: [
            { label: "Temperature", q: "The temperature in °C at the same time each day was 14, 9, 4, −1, … If it keeps falling by the same amount, what will the next temperature be?",
              why: "It falls 5 degrees a day. From −1 the next reading is −1 − 5 = −6." },
            { label: "Shop takings", q: "A stall's weekly profit in pounds was 14, 9, 4, −1, … A negative number means a loss. If the pattern continues, what is the next week's figure?",
              why: "The profit falls by 5 a week. From −1 the next figure is −1 − 5 = −6, a loss." }
          ],
          levels: {
            support: {
              steps: ["Find the common difference and the direction.", "Put the last term on a number line.", "Jump down by the common difference. If you pass zero, the answer is negative."],
              example: { q: "Find the next term of 10, 6, 2, −2, …",
                         steps: ["10 − 6 = 4, and the terms go down.", "Start at −2 on the number line and jump down 4.", "−2 − 4 = −6."],
                         answer: "−6", check: "-2 - (10 - 6)" }
            },
            core: { hint: "The common difference is 5. Start at −1 and go down, not up." },
            stretch: { extend: "Write the term-to-term rule and the next three terms after −6. Then explain why the sequence is still linear even though the terms are negative." }
          },
          why: "The common difference is 5 and the terms go down. −1 − 5 = −6."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 4
    {
      key: "continue-non-linear", n: 4,
      title: "Continue non-linear sequences",
      lead: "Continue sequences that multiply, divide or grow by changing amounts, and describe the pattern you see.",
      covers: [4],
      pretext: {
        words: [
          { word: "non-linear sequence", means: "a sequence whose differences change", sentence: "3, 6, 12, 24 is a non-linear sequence." },
          { word: "geometric sequence", means: "a sequence where you multiply or divide by the same number each time", sentence: "3, 6, 12, 24 is a geometric sequence." },
          { word: "double", means: "multiply by 2", sentence: "Double 6 to get 12." },
          { word: "triple", means: "multiply by 3", sentence: "Triple 4 to get 12." },
          { word: "halve", means: "divide by 2", sentence: "Halve 40 to get 20." }
        ],
        passage: [
          "Not every sequence goes up by the same amount.",
          "Look at 3, 6, 12, 24.",
          "Each term is double the one before.",
          "The differences are 3, 6 and 12.",
          "They get bigger each time.",
          "So this is a non-linear sequence.",
          "When you multiply or divide by the same number each time, the sequence is geometric.",
          "Some non-linear sequences have differences that grow by the same amount.",
          "In 4, 5, 7, 10, 14 the differences are 1, 2, 3 and 4.",
          "The next difference is 5, so the next term is 19.",
          "Think of a cell that divides every hour.",
          "A single cell becomes 2, then 4, then 8.",
          "That is doubling, and it makes a geometric sequence."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "متتابعة تتغيّر فروقها (non-linear sequence)",
            "متتابعة تضرب فيها أو تقسم على العدد نفسه كل مرة (geometric sequence)",
            "اضرب في 2 (double)",
            "اضرب في 3 (triple)",
            "اقسم على 2 (halve)"
          ],
          "passage": [
            "ليست كل متتابعة تزيد بالمقدار نفسه.",
            "انظر إلى 3، 6، 12، 24.",
            "كل حدّ هو ضِعف الحدّ الذي قبله.",
            "الفروق هي 3 و6 و12.",
            "وهي تكبر كل مرة.",
            "إذن هذه متتابعة غير خطية.",
            "عندما تضرب في العدد نفسه أو تقسم عليه كل مرة، تكون المتتابعة هندسية (geometric).",
            "بعض المتتابعات غير الخطية لها فروق تكبر بالمقدار نفسه.",
            "في 4، 5، 7، 10، 14 الفروق هي 1 و2 و3 و4.",
            "الفرق التالي هو 5، إذن الحدّ التالي هو 19.",
            "فكّر في خلية تنقسم كل ساعة.",
            "الخلية الواحدة تصبح 2، ثم 4، ثم 8.",
            "هذا هو التضعيف (doubling)، وهو يصنع متتابعة هندسية."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "ciąg, którego różnice się zmieniają (non-linear sequence)",
            "ciąg, w którym za każdym razem mnożysz lub dzielisz przez tę samą liczbę (geometric sequence)",
            "pomnożyć przez 2 (double)",
            "pomnożyć przez 3 (triple)",
            "podzielić przez 2 (halve)"
          ],
          "passage": [
            "Nie każdy ciąg rośnie o tę samą wartość.",
            "Spójrz na 3, 6, 12, 24.",
            "Każdy wyraz jest dwa razy większy od poprzedniego.",
            "Różnice wynoszą 3, 6 i 12.",
            "Za każdym razem są większe.",
            "Więc to jest ciąg nieliniowy.",
            "Kiedy za każdym razem mnożysz lub dzielisz przez tę samą liczbę, ciąg jest geometryczny (geometric).",
            "Niektóre ciągi nieliniowe mają różnice, które rosną o tę samą wartość.",
            "W 4, 5, 7, 10, 14 różnice wynoszą 1, 2, 3 i 4.",
            "Następna różnica to 5, więc następny wyraz to 19.",
            "Pomyśl o komórce, która dzieli się co godzinę.",
            "Jedna komórka staje się 2, potem 4, potem 8.",
            "To jest podwajanie i tworzy ono ciąg geometryczny."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma sequência cujas diferenças mudam (non-linear sequence, sequência não linear)",
            "uma sequência em que você multiplica ou divide sempre pelo mesmo número (geometric sequence, sequência geométrica)",
            "multiplicar por 2 (double, duplicar)",
            "multiplicar por 3 (triple, triplicar)",
            "dividir por 2 (halve, dividir ao meio)"
          ],
          "passage": [
            "Nem toda sequência sobe sempre a mesma quantidade.",
            "Olhe para 3, 6, 12, 24.",
            "Cada termo é o dobro do anterior.",
            "As diferenças são 3, 6 e 12.",
            "Ficam maiores de cada vez.",
            "Por isso, esta é uma sequência não linear.",
            "Quando você multiplica ou divide sempre pelo mesmo número, a sequência é geométrica (geometric).",
            "Algumas sequências não lineares têm diferenças que crescem sempre a mesma quantidade.",
            "Em 4, 5, 7, 10, 14 as diferenças são 1, 2, 3 e 4.",
            "A diferença seguinte é 5, por isso o termo seguinte é 19.",
            "Pense numa célula que se divide a cada hora.",
            "Uma só célula passa a 2, depois 4, depois 8.",
            "Isso é duplicar, e dá uma sequência geométrica."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "taxane farqiyadiisu is beddelaan (non-linear sequence)",
            "taxane aad mar kasta isku tiro ku dhufato ama u qaybiso (geometric sequence)",
            "2 ku dhufo (double)",
            "3 ku dhufo (triple)",
            "2 u qaybi (halve)"
          ],
          "passage": [
            "Taxane kasta isku qaddar kor uma kaco.",
            "Fiiri 3, 6, 12, 24.",
            "Xubin kastaa waa laba jibbaar tan ka horreysa.",
            "Farqiyadu waa 3, 6 iyo 12.",
            "Mar kasta way sii weynaadaan.",
            "Sidaas darteed kani waa taxane aan toosnayn (non-linear sequence).",
            "Markaad mar kasta isku tiro ku dhufato ama u qaybiso, taxanuhu waa geometric.",
            "Taxanayaasha aan toosnayn qaarkood waxay leeyihiin farqiyo isku qaddar u kordha.",
            "Gudaha 4, 5, 7, 10, 14 farqiyadu waa 1, 2, 3 iyo 4.",
            "Farqiga xigaa waa 5, sidaas darteed xubinta xigtaa waa 19.",
            "Ka fikir unug (cell) saacad kasta kala qaybsama.",
            "Hal unug wuxuu noqdaa 2, kadibna 4, kadibna 8.",
            "Taasi waa laba-jibbaarid (doubling), waxayna samaysaa taxane geometric ah."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "послідовність, різниці якої змінюються (non-linear sequence)",
            "послідовність, у якій кожного разу множать або ділять на одне й те саме число (geometric sequence)",
            "помножити на 2 (double)",
            "помножити на 3 (triple)",
            "поділити на 2 (halve)"
          ],
          "passage": [
            "Не кожна послідовність зростає на одну й ту саму величину.",
            "Подивіться на 3, 6, 12, 24.",
            "Кожний член удвічі більший за попередній.",
            "Різниці дорівнюють 3, 6 і 12.",
            "Вони кожного разу стають більшими.",
            "Отже, це нелінійна послідовність.",
            "Коли кожного разу множать або ділять на одне й те саме число, послідовність називається геометричною (geometric).",
            "У деяких нелінійних послідовностях різниці зростають на одну й ту саму величину.",
            "У 4, 5, 7, 10, 14 різниці дорівнюють 1, 2, 3 і 4.",
            "Наступна різниця — 5, тому наступний член — 19.",
            "Уявіть клітину, яка ділиться щогодини.",
            "Одна клітина стає 2, потім 4, потім 8.",
            "Це подвоєння (doubling), і воно утворює геометричну послідовність."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایسا سلسلہ جس کے فرق بدلتے رہتے ہیں (non-linear sequence)",
            "ایسا سلسلہ جس میں آپ ہر بار ایک ہی عدد سے ضرب یا تقسیم کرتے ہیں (geometric sequence)",
            "2 سے ضرب دینا (double)",
            "3 سے ضرب دینا (triple)",
            "2 سے تقسیم کرنا (halve)"
          ],
          "passage": [
            "ہر سلسلہ ایک ہی مقدار سے اوپر نہیں جاتا۔",
            "اس سلسلے کو دیکھیں: 3, 6, 12, 24۔",
            "ہر رکن اپنے پچھلے رکن کا دگنا ہے۔",
            "فرق 3، 6 اور 12 ہیں۔",
            "وہ ہر بار بڑے ہوتے جاتے ہیں۔",
            "اس لیے یہ ایک غیر خطی سلسلہ ہے۔",
            "جب آپ ہر بار ایک ہی عدد سے ضرب یا تقسیم کرتے ہیں تو سلسلہ ہندسی (geometric) ہوتا ہے۔",
            "کچھ غیر خطی سلسلوں کے فرق ایک ہی مقدار سے بڑھتے ہیں۔",
            "سلسلے 4, 5, 7, 10, 14 میں ارکان کے بیچ فرق یہ ہیں: 1، 2، 3 اور 4۔",
            "اگلا فرق 5 ہے، اس لیے اگلا رکن 19 ہے۔",
            "ایک ایسے خلیے (cell) کے بارے میں سوچیں جو ہر گھنٹے تقسیم ہوتا ہے۔",
            "ایک خلیہ 2 بن جاتا ہے، پھر 4، پھر 8۔",
            "یہ دگنا ہونا ہے، اور اس سے ہندسی سلسلہ بنتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Doubling and tripling",
          paragraphs: [
            "Some sequences grow by multiplying. In 3, 6, 12, 24 each term is double the previous term. The rule is multiply the previous term by 2. In 2, 6, 18, 54 each term is triple the previous term.",
            "A sequence like this is called a geometric sequence. It is non-linear, because the differences keep getting bigger: 3, 6, 12, and so on.",
            "Think of a single cell in a dish that divides every hour. After one hour there are 2 cells, then 4, then 8, then 16. Doubling makes the numbers grow very quickly."
          ],
          worked: {
            q: "A sequence is made by doubling the previous term: 7, 14, 28, … Write the next two terms.",
            steps: ["Check the rule: 7 × 2 = 14 and 14 × 2 = 28.", "28 × 2 = 56.", "56 × 2 = 112."],
            answer: "56, 112",
            check: "[28 * 2, 28 * 2 * 2]"
          },
          tip: "Doubling is multiply by 2. Tripling is multiply by 3."
        },
        {
          heading: "Dividing each time",
          paragraphs: [
            "A geometric sequence can go down. In 400, 200, 100, 50 each term is half the previous term. The rule is divide the previous term by 2. The next term is 25.",
            "Keep dividing and the terms get smaller and smaller, but they never reach zero. After 25 comes 12.5, then 6.25. Decimals are allowed.",
            "Dividing by 2 is the same as multiplying by a half. Both describe the same rule, so either is a correct description of the sequence."
          ],
          worked: {
            q: "Each term of 320, 160, 80, 40, … is half the previous term. What are the next two terms?",
            steps: ["Check the rule: 320 ÷ 2 = 160 and 160 ÷ 2 = 80.", "40 ÷ 2 = 20.", "20 ÷ 2 = 10."],
            answer: "20, 10",
            check: "[40 / 2, 40 / 2 / 2]"
          },
          tip: "Halving never gets you to zero. The terms just get smaller."
        },
        {
          heading: "Differences that grow",
          paragraphs: [
            "Some non-linear sequences are not geometric. In 1, 2, 4, 7, 11 the differences are 1, 2, 3 and 4. The differences go up by 1 each time, even though the terms do not.",
            "To continue a sequence like this, write the differences first. Find the pattern in the differences, then use it to find the next difference. The next difference here is 5, so the next term is 11 + 5 = 16.",
            "Always check: is the sequence linear or not? If the differences change, you must look at the pattern in the differences before you can continue."
          ],
          worked: {
            q: "Here is a sequence: 3, 5, 8, 12, 17, … Write the next two terms.",
            steps: ["The differences are 5 − 3 = 2, 8 − 5 = 3, 12 − 8 = 4 and 17 − 12 = 5.", "The differences go up by 1, so the next ones are 6 and 7.", "17 + 6 = 23.", "23 + 7 = 30."],
            answer: "23, 30",
            check: "[17 + ((17 - 12) + 1), 17 + ((17 - 12) + 1) + ((17 - 12) + 2)]"
          },
          tip: "If the terms do not have a constant difference, look for a pattern in the differences."
        }
      ],
      gate: [
        { kind: "numeric", q: "A sequence is made by doubling the previous term: 5, 10, 20, … What is the 5th term?", answer: 80, tolerance: 0, units: "",
          check: "20 * (10 / 5) * (10 / 5)",
          misconceptions: [
            { answer: 40, says: "You stopped at the 4th term. 20 is the 3rd term, so you need two more doublings: 40 is the 4th term and 80 is the 5th.", check: "20 * (10 / 5)" },
            { answer: 160, says: "You doubled one time too many and found the 6th term. From the 3rd term to the 5th term is two doublings: 20, 40, 80.", check: "20 * (10 / 5) ** 3" },
            { answer: 30, says: "You added 10 as if the sequence were linear. The rule is doubling: each term is twice the previous one, so after 20 comes 40, then 80.", check: "20 + 10" }
          ],
          why: "Double 20 to get 40, the 4th term. Double again to get 80, the 5th term." },
        { kind: "mcq", q: "Which of these sequences is geometric?", options: ["2, 4, 6, 8", "2, 4, 8, 16", "2, 4, 7, 11", "2, 4, 2, 4"], answer: 1,
          check: "[len(set(b / a for a, b in zip(s, s[1:]))) == 1 for s in [[2, 4, 6, 8], [2, 4, 8, 16], [2, 4, 7, 11], [2, 4, 2, 4]]]",
          feedback: [
            "This sequence adds 2 each time, so it is linear. A geometric sequence multiplies or divides by the same number each time.",
            "",
            "The differences are 2, 3 and 4. The sequence grows, but not by multiplying by the same number each time, so it is not geometric.",
            "This sequence goes up and down: it does not multiply by the same number each time. 4 × 2 is 8, not 2."
          ],
          why: "In 2, 4, 8, 16 each term is double the previous term. Multiplying by the same number each time makes a geometric sequence." },
        { kind: "gap", q: "In the sequence 2, 4, 7, 11, 16 the differences are 2, 3, 4 and 5, so the sequence is ___.", answer: "non-linear", options: ["non-linear", "linear", "geometric"],
          feedback: {
            "linear": "A linear sequence has the same difference every time. Here the differences change: 2, 3, 4, 5. So the sequence is non-linear.",
            "geometric": "A geometric sequence multiplies by the same number each time. 2 × 2 is 4, but 4 × 2 is 8, not 7. The differences change, so the sequence is non-linear but not geometric."
          },
          why: "The differences change, so the sequence is non-linear." }
      ],
      modules: [
        {
          title: "Doubling cells",
          task: { kind: "numeric", q: "A single cell is put in a dish at 1 pm. The number of cells doubles every hour, so there are 2 cells at 2 pm. How many cells are there at 6 pm?", answer: 32, tolerance: 0, units: "",
                  check: "2 ** (6 - 1)",
                  misconceptions: [
                    { answer: 64, says: "You doubled one time too many. From 1 pm to 6 pm is 5 hours, so there are 5 doublings: 2, 4, 8, 16, 32.", check: "2 ** 6" },
                    { answer: 16, says: "You stopped at 5 pm. From 1 pm to 6 pm is 5 hours: 2 at 2 pm, 4 at 3 pm, 8 at 4 pm, 16 at 5 pm and 32 at 6 pm.", check: "2 ** (6 - 2)" },
                    { answer: 12, says: "You added 2 for each hour, as if the sequence were linear. Doubling means each number is twice the one before: 2, 4, 8, 16, 32.", check: "2 * 6" }
                  ] },
          explain: "Say, in one sentence, why the number of cells is not simply 2 more each hour.",
          contexts: [
            { label: "Rumour", q: "At 1 pm a single person knows a secret. Every hour the number of people who know doubles, so 2 people know at 2 pm. How many people know at 6 pm?",
              why: "From 1 pm to 6 pm is 5 doublings: 2, 4, 8, 16, 32." },
            { label: "Pond weed", q: "At 1 pm a patch of pond weed covers a single square metre. Its area doubles every hour, so it covers 2 square metres at 2 pm. How many square metres does it cover at 6 pm?",
              why: "From 1 pm to 6 pm is 5 doublings: 2, 4, 8, 16, 32." }
          ],
          levels: {
            support: {
              steps: ["Make a table with the time in one row and the number of cells in the other.", "Fill in each hour by doubling the number before.", "Stop when you reach 6 pm."],
              example: { q: "A single cell is put in a dish at 1 pm and the number of cells doubles every hour, so there are 2 cells at 2 pm. How many cells are there at 4 pm?",
                         steps: ["2 pm: 2 cells.", "3 pm: 2 × 2 = 4 cells.", "4 pm: 4 × 2 = 8 cells."],
                         answer: "8", check: "2 ** (4 - 1)" }
            },
            core: { hint: "Count the hours from 1 pm to 6 pm. That is how many times the number doubles." },
            stretch: { extend: "At what time would there first be more than 1000 cells? Explain how you worked it out without a calculator." }
          },
          why: "From 1 pm to 6 pm is 5 hours, so the number doubles 5 times: 1, 2, 4, 8, 16, 32."
        },
        {
          title: "Halving",
          task: { kind: "mcq", q: "Each term is half the previous term: 96, 48, 24, … What is the 6th term?", options: ["3", "6", "1.5", "12"], answer: 0,
                  check: "24 / (96 / 48) / (96 / 48) / (96 / 48)",
                  feedback: [
                    "",
                    "You stopped at the 5th term. 24 is the 3rd term, so you need three more halvings: 12, 6, 3.",
                    "You halved one time too many and found the 7th term. From the 3rd term to the 6th term is three halvings: 24, 12, 6, 3.",
                    "You made only one halving. 24 is the 3rd term, so 12 is the 4th term. Two more halvings give 6, then 3."
                  ] },
          explain: "Say, in one sentence, why halving is the same as dividing by 2.",
          contexts: [
            { label: "Knockout", q: "In a knockout tournament, half of the players go out in each round. The numbers of players left at each stage are 96, 48, 24, … How many players are left at the 6th stage?",
              why: "Three more halvings after 24: 12, 6, 3." },
            { label: "Medicine", q: "The amount of a medicine in the blood halves every hour. The amounts in mg each hour are 96, 48, 24, … What is the 6th amount?",
              why: "Three more halvings after 24: 12, 6, 3." }
          ],
          levels: {
            support: {
              steps: ["Check the rule: 96 ÷ 2 = 48 and 48 ÷ 2 = 24.", "Count which term you have reached.", "Keep dividing by 2, one term at a time, until you reach the 6th."],
              example: { q: "Each term is half the previous term: 80, 40, 20, … What is the 5th term?",
                         steps: ["20 is the 3rd term.", "4th term: 20 ÷ 2 = 10.", "5th term: 10 ÷ 2 = 5."],
                         answer: "5", check: "20 / (80 / 40) / (80 / 40)" }
            },
            core: { hint: "24 is the 3rd term. How many more halvings do you need?" },
            stretch: { extend: "Continue the sequence for three more terms after 3. Will it ever reach 0? Explain your answer." }
          },
          why: "24 is the 3rd term. Halve three more times: 12 is the 4th, 6 is the 5th and 3 is the 6th."
        },
        {
          title: "Growing differences",
          task: { kind: "numeric", q: "Here is a sequence: 2, 3, 5, 8, 12, … What is the next term?", answer: 17, tolerance: 0, units: "",
                  check: "12 + (12 - 8) + 1",
                  misconceptions: [
                    { answer: 16, says: "You added 4 again, as if the sequence were linear. The differences are 1, 2, 3, 4, so the next difference is 5: 12 + 5 = 17.", check: "12 + (12 - 8)" },
                    { answer: 20, says: "You added the two previous terms, 8 and 12. That is a different kind of rule. Here the differences go up by 1 each time, so the next difference is 5.", check: "12 + 8" }
                  ] },
          explain: "Say, in one sentence, what pattern you found in the differences.",
          contexts: [
            { label: "Dots", q: "A pattern of dots grows each time. The numbers of dots in the terms are 2, 3, 5, 8, 12, … How many dots are in the next term?",
              why: "The differences are 1, 2, 3, 4, so the next difference is 5. 12 + 5 = 17." },
            { label: "Star jumps", q: "Each day Zak does more star jumps than the day before: 2, 3, 5, 8, 12, … If the pattern continues, how many will he do on the next day?",
              why: "The differences are 1, 2, 3, 4, so the next difference is 5. 12 + 5 = 17." }
          ],
          levels: {
            support: {
              steps: ["Write the difference between each pair of terms.", "Look for the pattern in the differences.", "Use the pattern to find the next difference, then add it to the last term."],
              example: { q: "Here is a sequence: 4, 5, 7, 10, 14, … What is the next term?",
                         steps: ["The differences are 1, 2, 3 and 4.", "They go up by 1, so the next difference is 5.", "14 + 5 = 19."],
                         answer: "19", check: "14 + (14 - 10) + 1" }
            },
            core: { hint: "Write the differences: 1, 2, 3, 4. What comes next?" },
            stretch: { extend: "Write the 10th term of this sequence and explain how you found it. Is the sequence geometric? Explain." }
          },
          why: "The differences are 1, 2, 3 and 4. They go up by 1 each time, so the next difference is 5 and the next term is 12 + 5 = 17."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 5
    {
      key: "term-to-term-rules", n: 5,
      title: "Term-to-term rules",
      lead: "Describe a rule in a full sentence, tell add rules from multiply rules, and use a rule to build a sequence from its first term.",
      covers: [5],
      pretext: {
        words: [
          { word: "term-to-term rule", means: "how to get from one term to the next", sentence: "The term-to-term rule is add 5 to the previous term." },
          { word: "previous term", means: "the term just before", sentence: "Multiply the previous term by 2." },
          { word: "first term", means: "the term at the start of the sequence", sentence: "The first term is 7." },
          { word: "describe", means: "to say in words", sentence: "Describe the rule in a full sentence." },
          { word: "generate", means: "to make the terms of a sequence from a rule", sentence: "Generate the first five terms." }
        ],
        passage: [
          "A term-to-term rule tells you how to get from one term to the next.",
          "Look at 15, 21, 27, 33.",
          "The rule is add 6 to the previous term.",
          "Always say what you are adding it to.",
          "Add 6 on its own is not a full rule.",
          "Look at 29, 24, 19, 14.",
          "The rule is subtract 5 from the previous term.",
          "Some rules multiply or divide.",
          "In 4, 8, 16, 32 the rule is multiply the previous term by 2.",
          "If you know the first term and the rule, you can write the whole sequence.",
          "Start at 7 and add 6 each time.",
          "You get 7, 13, 19, 25, 31."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "كيف تنتقل من حدّ إلى الحدّ التالي (term-to-term rule)",
            "الحدّ الذي قبل مباشرة (previous term)",
            "الحدّ في بداية المتتابعة (first term)",
            "أن تقول بالكلمات (describe)",
            "أن تكوّن حدود متتابعة من قاعدة (generate)"
          ],
          "passage": [
            "قاعدة الانتقال بين الحدود (term-to-term rule) تخبرك كيف تنتقل من حدّ إلى الحدّ التالي.",
            "انظر إلى 15، 21، 27، 33.",
            "القاعدة هي: أضف 6 إلى الحدّ السابق.",
            "قل دائماً إلى أي شيء تضيف.",
            "«أضف 6» وحدها ليست قاعدة كاملة.",
            "انظر إلى 29، 24، 19، 14.",
            "القاعدة هي: اطرح 5 من الحدّ السابق.",
            "بعض القواعد تضرب أو تقسم.",
            "في 4، 8، 16، 32 القاعدة هي: اضرب الحدّ السابق في 2.",
            "إذا عرفت الحدّ الأول والقاعدة، يمكنك أن تكتب المتتابعة كلها.",
            "ابدأ من 7 وأضف 6 كل مرة.",
            "تحصل على 7، 13، 19، 25، 31."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "jak przejść od jednego wyrazu do następnego (term-to-term rule)",
            "wyraz tuż przed (previous term)",
            "wyraz na początku ciągu (first term)",
            "powiedzieć słowami (describe)",
            "utworzyć wyrazy ciągu z reguły (generate)"
          ],
          "passage": [
            "Reguła „wyraz do wyrazu” mówi ci, jak przejść od jednego wyrazu do następnego.",
            "Spójrz na 15, 21, 27, 33.",
            "Reguła brzmi: dodaj 6 do poprzedniego wyrazu.",
            "Zawsze mów, do czego dodajesz.",
            "Samo „dodaj 6” nie jest pełną regułą.",
            "Spójrz na 29, 24, 19, 14.",
            "Reguła brzmi: odejmij 5 od poprzedniego wyrazu.",
            "Niektóre reguły mnożą lub dzielą.",
            "W 4, 8, 16, 32 reguła brzmi: pomnóż poprzedni wyraz przez 2.",
            "Jeśli znasz pierwszy wyraz i regułę, możesz zapisać cały ciąg.",
            "Zacznij od 7 i za każdym razem dodawaj 6.",
            "Otrzymasz 7, 13, 19, 25, 31."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "como ir de um termo ao seguinte (term-to-term rule)",
            "o termo logo antes (previous term, termo anterior)",
            "o termo no início da sequência (first term, primeiro termo)",
            "dizer em palavras (describe, descrever)",
            "criar os termos de uma sequência a partir de uma regra (generate, gerar)"
          ],
          "passage": [
            "Uma regra termo a termo (term-to-term rule) diz como ir de um termo ao seguinte.",
            "Olhe para 15, 21, 27, 33.",
            "A regra é: somar 6 ao termo anterior.",
            "Diga sempre a que é que você está a somar/está somando.",
            "Só ‘somar 6’ não é uma regra completa.",
            "Olhe para 29, 24, 19, 14.",
            "A regra é: subtrair 5 ao termo anterior.",
            "Algumas regras multiplicam ou dividem.",
            "Em 4, 8, 16, 32 a regra é: multiplicar o termo anterior por 2.",
            "Se você sabe o primeiro termo e a regra, pode escrever a sequência inteira.",
            "Comece em 7 e some 6 de cada vez.",
            "Você obtém 7, 13, 19, 25, 31."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "sida xubin looga gudbo tan xigta (term-to-term rule)",
            "xubinta isla ka horreysa (previous term)",
            "xubinta ku taal bilowga taxanaha (first term)",
            "erayo ku sheegid (describe)",
            "xubnaha taxane ka samayn xeer (generate)"
          ],
          "passage": [
            "Xeerka xubin-ilaa-xubin wuxuu kuu sheegaa sida xubin looga gudbo tan xigta.",
            "Fiiri 15, 21, 27, 33.",
            "Xeerku waa: 6 ku dar xubinta ka horreysa.",
            "Mar walba sheeg waxa aad ku darayso.",
            "'6 ku dar' keligeed xeer buuxa ma aha.",
            "Fiiri 29, 24, 19, 14.",
            "Xeerku waa: 5 ka jar xubinta ka horreysa.",
            "Xeerarka qaar way ku dhufsadaan ama u qaybiyaan.",
            "Gudaha 4, 8, 16, 32 xeerku waa: xubinta ka horreysa 2 ku dhufo.",
            "Haddii aad taqaanno xubinta koowaad iyo xeerka, waxaad qori kartaa taxanaha oo dhan.",
            "Ka bilow 7 oo mar kasta 6 ku dar.",
            "Waxaad heshaa 7, 13, 19, 25, 31."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "як перейти від одного члена до наступного (term-to-term rule)",
            "член, що стоїть безпосередньо перед (previous term)",
            "член на початку послідовності (first term)",
            "сказати словами (describe)",
            "утворити члени послідовності за правилом (generate)"
          ],
          "passage": [
            "Правило переходу від члена до члена (term-to-term rule) говорить, як перейти від одного члена до наступного.",
            "Подивіться на 15, 21, 27, 33.",
            "Правило таке: додати 6 до попереднього члена.",
            "Завжди кажіть, до чого саме ви додаєте.",
            "«Додати 6» саме по собі — це не повне правило.",
            "Подивіться на 29, 24, 19, 14.",
            "Правило таке: відняти 5 від попереднього члена.",
            "Деякі правила множать або ділять.",
            "У 4, 8, 16, 32 правило таке: помножити попередній член на 2.",
            "Якщо ви знаєте перший член і правило, ви можете записати всю послідовність.",
            "Почніть із 7 і кожного разу додавайте 6.",
            "Ви отримаєте 7, 13, 19, 25, 31."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایک رکن سے اگلے رکن تک کیسے جائیں (term-to-term rule)",
            "بالکل پہلے والا رکن (previous term)",
            "سلسلے کی شروعات کا رکن (first term)",
            "لفظوں میں بتانا (describe)",
            "کسی قاعدے سے سلسلے کے ارکان بنانا (generate)"
          ],
          "passage": [
            "رکن سے رکن کا قاعدہ آپ کو بتاتا ہے کہ ایک رکن سے اگلے تک کیسے جائیں۔",
            "اس سلسلے کو دیکھیں: 15, 21, 27, 33۔",
            "قاعدہ ہے: پچھلے رکن میں 6 جمع کریں۔",
            "ہمیشہ بتائیں کہ آپ کس چیز میں جمع کر رہے ہیں۔",
            "صرف ‘6 جمع کریں’ مکمل قاعدہ نہیں ہے۔",
            "اس سلسلے کو دیکھیں: 29, 24, 19, 14۔",
            "قاعدہ ہے: پچھلے رکن سے 5 گھٹائیں۔",
            "کچھ قاعدے ضرب یا تقسیم کرتے ہیں۔",
            "4, 8, 16, 32 میں قاعدہ ہے: پچھلے رکن کو 2 سے ضرب دیں۔",
            "اگر آپ پہلا رکن اور قاعدہ جانتے ہیں تو آپ پورا سلسلہ لکھ سکتے ہیں۔",
            "7 سے شروع کریں اور ہر بار 6 جمع کریں۔",
            "آپ کو 7, 13, 19, 25, 31 ملتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Describing the rule in words",
          paragraphs: [
            "A term-to-term rule is a sentence. It says what to do to one term to get the next. For 15, 21, 27, 33 the rule is 'add 6 to the previous term'.",
            "Saying just 'add 6' is not enough. Add 6 to what? The full sentence tells the reader exactly what to do: start with a term, add 6, and you have the next term.",
            "For a descending sequence the rule uses subtract. For 29, 24, 19, 14 the rule is 'subtract 5 from the previous term'. Find the common difference first, then write the sentence."
          ],
          worked: {
            q: "Describe the term-to-term rule of 51, 44, 37, 30, …",
            steps: ["Find the common difference: 51 − 44 = 7. Check: 44 − 37 = 7.", "The terms get smaller, so the rule subtracts.", "Write it as a full sentence."],
            answer: "Subtract 7 from the previous term."
          },
          tip: "A rule is a full sentence: add … to the previous term, or subtract … from the previous term."
        },
        {
          heading: "Multiply and divide rules",
          paragraphs: [
            "Geometric sequences have multiply or divide rules. For 3, 6, 12, 24 the rule is 'multiply the previous term by 2'. For 400, 200, 100, 50 the rule is 'divide the previous term by 2'.",
            "To find a multiply rule, divide a term by the one before it. In 2, 10, 50, 250 you get 10 ÷ 2 = 5 and 50 ÷ 10 = 5. So the rule is multiply the previous term by 5.",
            "Be careful: 3, 6, 9, 12 and 3, 6, 12, 24 both start with 3, 6. The first adds 3 each time; the second multiplies by 2. Always check a third term before you decide."
          ],
          worked: {
            q: "Describe the term-to-term rule of 2, 10, 50, 250.",
            steps: ["Is it an add rule? 10 − 2 = 8 but 50 − 10 = 40. No.", "Try a multiply rule: 10 ÷ 2 = 5 and 50 ÷ 10 = 5. Yes.", "Write it as a full sentence."],
            answer: "Multiply the previous term by 5."
          },
          tip: "If the differences change, try dividing each term by the one before."
        },
        {
          heading: "Using a rule to write a sequence",
          paragraphs: [
            "If you know the first term and the term-to-term rule, you can write the whole sequence. Start with the first term. Apply the rule to get the second term. Apply it again to get the third, and so on.",
            "First term 7, rule add 6 to the previous term: 7, 13, 19, 25, 31. First term 5, rule multiply the previous term by 3: 5, 15, 45, 135.",
            "The same rule with a different first term gives a different sequence. Add 6 starting at 2 gives 2, 8, 14, 20. Both the first term and the rule matter."
          ],
          worked: {
            q: "The first term of a sequence is 4. The term-to-term rule is multiply the previous term by 3. Write the first 4 terms.",
            steps: ["1st term: 4.", "2nd term: 4 × 3 = 12.", "3rd term: 12 × 3 = 36.", "4th term: 36 × 3 = 108."],
            answer: "4, 12, 36, 108",
            check: "[4, 4 * 3, 4 * 3 * 3, 4 * 3 * 3 * 3]"
          },
          tip: "Write each term down before you work out the next. Do not try to hold them in your head."
        },
        {
          heading: "Two-step rules",
          paragraphs: [
            "A rule can have two steps. For example: multiply the previous term by 2 and then add 3. Do the steps in the order they are written.",
            "First term 1, rule multiply by 2 then add 3: 1 × 2 = 2, 2 + 3 = 5. So the second term is 5. Then 5 × 2 = 10, 10 + 3 = 13. The sequence is 1, 5, 13, 29.",
            "The order matters. 'Add 3 then multiply by 2' from 1 gives 8, not 5. Read the rule carefully."
          ],
          worked: {
            q: "The first term is 2. The term-to-term rule is multiply the previous term by 2 and then add 3. Write the first four terms.",
            steps: ["1st term: 2.", "2nd term: 2 × 2 = 4, then 4 + 3 = 7.", "3rd term: 7 × 2 = 14, then 14 + 3 = 17.", "4th term: 17 × 2 = 34, then 34 + 3 = 37."],
            answer: "2, 7, 17, 37",
            check: "[2, 2 * 2 + 3, (2 * 2 + 3) * 2 + 3, ((2 * 2 + 3) * 2 + 3) * 2 + 3]"
          },
          tip: "Two-step rule: do the first step, write it down, then do the second step."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which is the term-to-term rule of 8, 14, 20, 26, …?", options: ["Add 6 to the previous term", "Add 8 to the previous term", "Multiply the previous term by 2", "Subtract 6 from the previous term"], answer: 0,
          feedback: [
            "",
            "8 is the first term, not the difference. The difference is 14 − 8 = 6, so the rule is add 6 to the previous term.",
            "8 × 2 is 16, not 14. The sequence goes up by the same amount each time, so it is an add rule: 14 − 8 = 6.",
            "The terms are getting bigger, so the rule adds. 8 + 6 = 14, 14 + 6 = 20."
          ],
          why: "Each term is 6 more than the previous one: 14 − 8 = 6 and 20 − 14 = 6." },
        { kind: "numeric", q: "The first term of a sequence is 3. The term-to-term rule is add 7 to the previous term. What is the 4th term?", answer: 24, tolerance: 0, units: "",
          check: "3 + 7 * (4 - 1)",
          misconceptions: [
            { answer: 31, says: "You added 7 four times and found the 5th term. From the 1st term to the 4th term is 3 jumps: 3, 10, 17, 24.", check: "3 + 7 * 4" },
            { answer: 28, says: "You multiplied 7 by 4 and forgot that the sequence starts at 3, not at 7. Write the terms out: 3, 10, 17, 24.", check: "7 * 4" },
            { answer: 17, says: "You stopped at the 3rd term. 3 is the 1st term, 10 is the 2nd, 17 is the 3rd and 24 is the 4th.", check: "3 + 7 + 7" }
          ],
          why: "Start at 3 and add 7 three times: 3, 10, 17, 24." },
        { kind: "gap", q: "The term-to-term rule of 5, 15, 45, 135 is ___ the previous term by 3.", answer: "multiply", options: ["multiply", "add", "divide"],
          feedback: {
            "add": "5 + 3 is 8, not 15. The terms get much bigger each time, so the rule multiplies: 5 × 3 = 15 and 15 × 3 = 45.",
            "divide": "Dividing would make the terms smaller. These terms get bigger: 5 × 3 = 15, 15 × 3 = 45."
          },
          why: "15 ÷ 5 = 3 and 45 ÷ 15 = 3, so each term is 3 times the previous one." }
      ],
      modules: [
        {
          title: "Write the rule",
          task: { kind: "match", q: "Match each sequence to its term-to-term rule.",
                  pairs: [["9, 13, 17, 21", "Add 4 to the previous term"], ["80, 40, 20, 10", "Divide the previous term by 2"], ["1, 4, 16, 64", "Multiply the previous term by 4"], ["30, 26, 22, 18", "Subtract 4 from the previous term"]] },
          explain: "Say, in one sentence, how you can tell an add rule from a multiply rule just by looking at the terms.",
          levels: {
            support: {
              steps: ["Decide if the terms go up or down.", "Find the differences. If they are constant, the rule adds or subtracts that amount.", "If the differences change, divide each term by the one before to find the multiply or divide rule."],
              example: { q: "Describe the term-to-term rule of 6, 18, 54, 162.",
                         steps: ["The terms go up. The differences are 12, 36, 108: they change.", "18 ÷ 6 = 3 and 54 ÷ 18 = 3.", "So the rule multiplies by 3."],
                         answer: "Multiply the previous term by 3." }
            },
            core: { hint: "Two of the sequences have a constant difference. The other two do not." },
            stretch: { extend: "Find a first term for which the rule 'add 4 to the previous term' and the rule 'multiply the previous term by 2' give the same second term. Explain how you found it." }
          },
          why: "9, 13, 17, 21 and 30, 26, 22, 18 change by 4 each time, one up and one down. 1, 4, 16, 64 is multiplied by 4 each time, and 80, 40, 20, 10 is divided by 2 each time."
        },
        {
          title: "Use the rule",
          task: { kind: "numeric", q: "The first term of a sequence is 50. The term-to-term rule is subtract 6 from the previous term. What is the 6th term?", answer: 20, tolerance: 0, units: "",
                  check: "50 - 6 * (6 - 1)",
                  misconceptions: [
                    { answer: 14, says: "You subtracted 6 six times and found the 7th term. From the 1st term to the 6th term is 5 jumps: 50, 44, 38, 32, 26, 20.", check: "50 - 6 * 6" },
                    { answer: 26, says: "You stopped at the 5th term. Count the terms as you go: 50 is the 1st, 44 is the 2nd, 38 is the 3rd, 32 is the 4th, 26 is the 5th and 20 is the 6th.", check: "50 - 6 - 6 - 6 - 6" }
                  ] },
          explain: "Say, in one sentence, why you subtract 6 five times, not six times, to reach the 6th term.",
          contexts: [
            { label: "Water tank", q: "A tank holds 50 litres of water at the start. Every hour 6 litres drain away. The amounts in the tank at the start of each hour form a sequence. What is the 6th term?",
              why: "Start at 50 and subtract 6 five times: 50, 44, 38, 32, 26, 20." },
            { label: "Sweet jar", q: "A jar has 50 sweets. Each day 6 sweets are eaten. The numbers of sweets at the start of each day form a sequence. How many sweets are there at the start of the 6th day?",
              why: "Start at 50 and subtract 6 five times: 50, 44, 38, 32, 26, 20." }
          ],
          levels: {
            support: {
              steps: ["Write the first term.", "Apply the rule to get the next term, and write it down.", "Keep going, counting the terms, until you reach the 6th."],
              example: { q: "The first term is 40. The term-to-term rule is subtract 9 from the previous term. What is the 4th term?",
                         steps: ["1st term: 40.", "2nd term: 40 − 9 = 31.", "3rd term: 31 − 9 = 22.", "4th term: 22 − 9 = 13."],
                         answer: "13", check: "40 - 9 * (4 - 1)" }
            },
            core: { hint: "50 is the 1st term. Write each term down and count them." },
            stretch: { extend: "Which term of this sequence is the first one below zero? Explain how you know." }
          },
          why: "Start at 50 and subtract 6 for each new term: 50, 44, 38, 32, 26, 20. The 6th term is 20."
        },
        {
          title: "Two-step rule",
          task: { kind: "numeric", q: "The first term of a sequence is 3. The term-to-term rule is multiply the previous term by 2 and then add 1. What is the 4th term?", answer: 31, tolerance: 0, units: "",
                  check: "((3 * 2 + 1) * 2 + 1) * 2 + 1",
                  misconceptions: [
                    { answer: 63, says: "You applied the rule four times and found the 5th term. From the 1st term to the 4th term the rule is used three times: 3, 7, 15, 31.", check: "(((3 * 2 + 1) * 2 + 1) * 2 + 1) * 2 + 1" },
                    { answer: 24, says: "You multiplied by 2 each time but forgot to add 1. Both steps happen every time: 3 × 2 + 1 = 7, 7 × 2 + 1 = 15, 15 × 2 + 1 = 31.", check: "3 * 2 * 2 * 2" },
                    { answer: 38, says: "You added 1 first and then multiplied by 2. The rule says multiply first, then add: 3 × 2 + 1 = 7, not 8.", check: "(((3 + 1) * 2 + 1) * 2 + 1) * 2" }
                  ] },
          explain: "Say, in one sentence, why the order of the two steps matters.",
          contexts: [
            { label: "Secret", q: "Each day the number of people who know a secret is multiplied by 2 and then 1 more person is told. On the first day 3 people know. How many people know on the 4th day?",
              why: "Day by day: 3, then 7, then 15, then 31." },
            { label: "Game points", q: "In a game, your score each round is your previous score multiplied by 2, plus 1 bonus point. Your score in the first round is 3. What is your score in the 4th round?",
              why: "Round by round: 3, then 7, then 15, then 31." }
          ],
          levels: {
            support: {
              steps: ["Write the first term.", "Do the first step of the rule and write the result down.", "Do the second step. That is the next term.", "Repeat until you reach the 4th term."],
              example: { q: "The first term is 1. The term-to-term rule is multiply the previous term by 3 and then add 2. What is the 3rd term?",
                         steps: ["1st term: 1.", "2nd term: 1 × 3 = 3, then 3 + 2 = 5.", "3rd term: 5 × 3 = 15, then 15 + 2 = 17."],
                         answer: "17", check: "(1 * 3 + 2) * 3 + 2" }
            },
            core: { hint: "Multiply first, then add. Write down the result of each step." },
            stretch: { extend: "Swap the order of the steps: add 1 and then multiply by 2. Write the first four terms starting from 3. Why are they different?" }
          },
          why: "Apply the rule three times: 3 × 2 + 1 = 7, 7 × 2 + 1 = 15, 15 × 2 + 1 = 31."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 6
    {
      key: "missing-terms", n: 6,
      title: "Missing terms",
      lead: "Use the rule to fill gaps in a sequence, go backwards to find a first term, and jump straight to a far-off term.",
      covers: [6],
      pretext: {
        words: [
          { word: "missing term", means: "a term that has been left out of a sequence", sentence: "Find the missing term in 4, 8, ___, 16." },
          { word: "position", means: "where a term sits in the sequence", sentence: "The first term is at position 1." },
          { word: "consecutive", means: "next to each other", sentence: "7 and 11 are consecutive terms." },
          { word: "arithmetic sequence", means: "another name for a linear sequence", sentence: "An arithmetic sequence adds or subtracts the same amount each time." },
          { word: "geometric sequence", means: "a sequence where you multiply or divide by the same number each time", sentence: "5, 10, 20, 40 is a geometric sequence." }
        ],
        passage: [
          "Sometimes a term in a sequence is missing.",
          "You can find it with the rule.",
          "Look at 6, 10, 14, ___, 22.",
          "The terms go up by 4 each time.",
          "So the missing term is 18.",
          "Check: 18 + 4 = 22.",
          "If two terms are missing, use the terms you do have.",
          "Find the rule from two consecutive terms.",
          "Every term has a position.",
          "The first term is at position 1.",
          "From the 1st term to the 4th term is 3 jumps.",
          "From the 1st term to the 10th term is 9 jumps.",
          "A sequence that adds the two previous terms is not linear."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "حدّ حُذف من المتتابعة (missing term)",
            "موقع الحدّ في المتتابعة (position)",
            "متجاوران (consecutive)",
            "اسم آخر للمتتابعة الخطية (arithmetic sequence)",
            "متتابعة تضرب فيها أو تقسم على العدد نفسه كل مرة (geometric sequence)"
          ],
          "passage": [
            "أحياناً يكون حدّ في المتتابعة مفقوداً.",
            "يمكنك أن تجده باستعمال القاعدة.",
            "انظر إلى 6، 10، 14، ___، 22.",
            "الحدود تزيد بمقدار 4 كل مرة.",
            "إذن الحدّ المفقود هو 18.",
            "تحقّق: 18 + 4 = 22.",
            "إذا كان حدّان مفقودَين، فاستعمل الحدود التي لديك.",
            "جد القاعدة من حدَّين متجاورَين (consecutive).",
            "لكل حدّ موقع (position).",
            "الحدّ الأول في الموقع 1.",
            "من الحدّ 1 إلى الحدّ 4 ثلاث قفزات (3).",
            "من الحدّ 1 إلى الحدّ 10 تسع قفزات (9).",
            "المتتابعة التي تجمع الحدَّين السابقَين ليست خطية."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "wyraz, który został pominięty w ciągu (missing term)",
            "miejsce, w którym wyraz stoi w ciągu (position)",
            "stojące obok siebie (consecutive)",
            "inna nazwa ciągu liniowego (arithmetic sequence)",
            "ciąg, w którym za każdym razem mnożysz lub dzielisz przez tę samą liczbę (geometric sequence)"
          ],
          "passage": [
            "Czasem w ciągu brakuje jakiegoś wyrazu.",
            "Możesz go znaleźć za pomocą reguły.",
            "Spójrz na 6, 10, 14, ___, 22.",
            "Wyrazy rosną za każdym razem o 4.",
            "Więc brakujący wyraz to 18.",
            "Sprawdź: 18 + 4 = 22.",
            "Jeśli brakuje dwóch wyrazów, użyj tych wyrazów, które masz.",
            "Znajdź regułę z dwóch sąsiednich wyrazów.",
            "Każdy wyraz ma swoją pozycję (position).",
            "Pierwszy wyraz jest na pozycji 1.",
            "Od 1. wyrazu do 4. wyrazu są 3 skoki.",
            "Od 1. wyrazu do 10. wyrazu jest 9 skoków.",
            "Ciąg, który dodaje dwa poprzednie wyrazy, nie jest liniowy."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um termo que foi deixado de fora de uma sequência (missing term, termo em falta)",
            "o lugar onde um termo está na sequência (position, posição)",
            "um ao lado do outro (consecutive, consecutivos)",
            "outro nome para uma sequência linear (arithmetic sequence, sequência aritmética)",
            "uma sequência em que você multiplica ou divide sempre pelo mesmo número (geometric sequence, sequência geométrica)"
          ],
          "passage": [
            "Às vezes falta um termo numa sequência.",
            "Você pode encontrá-lo com a regra.",
            "Olhe para 6, 10, 14, ___, 22.",
            "Os termos sobem 4 de cada vez.",
            "Por isso, o termo em falta é 18.",
            "Verifique: 18 + 4 = 22.",
            "Se faltam dois termos, use os termos que você tem.",
            "Encontre a regra a partir de dois termos consecutivos.",
            "Cada termo tem uma posição.",
            "O primeiro termo está na posição 1.",
            "Do 1.º termo ao 4.º termo são 3 saltos.",
            "Do 1.º termo ao 10.º termo são 9 saltos.",
            "Uma sequência que soma os dois termos anteriores não é linear."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "xubin taxane laga saaray (missing term)",
            "meesha xubin taxanaha ku fadhido (position)",
            "is ag yaal (consecutive)",
            "magac kale oo taxane toosan (arithmetic sequence)",
            "taxane aad mar kasta isku tiro ku dhufato ama u qaybiso (geometric sequence)"
          ],
          "passage": [
            "Mararka qaar xubin taxane ku jirta way maqan tahay.",
            "Xeerka ayaad ku heli kartaa.",
            "Fiiri 6, 10, 14, ___, 22.",
            "Xubnuhu mar kasta 4 ayay kor u kacaan.",
            "Sidaas darteed xubinta maqan waa 18.",
            "Hubi: 18 + 4 = 22.",
            "Haddii laba xubnood maqan yihiin, isticmaal xubnaha aad haysato.",
            "Xeerka ka hel laba xubnood oo is ag yaal (consecutive).",
            "Xubin kastaa waxay leedahay meel (position).",
            "Xubinta koowaad waxay ku taal meesha 1.",
            "Xubinta 1aad ilaa xubinta 4aad waa 3 bood.",
            "Xubinta 1aad ilaa xubinta 10aad waa 9 bood.",
            "Taxane isku dara labada xubnood ee ka horreeya ma aha mid toosan."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "член, який пропущено в послідовності (missing term)",
            "місце, на якому стоїть член у послідовності (position)",
            "ті, що стоять поруч один з одним (consecutive)",
            "інша назва лінійної послідовності (arithmetic sequence)",
            "послідовність, у якій кожного разу множать або ділять на одне й те саме число (geometric sequence)"
          ],
          "passage": [
            "Іноді в послідовності пропущено якийсь член.",
            "Ви можете знайти його за правилом.",
            "Подивіться на 6, 10, 14, ___, 22.",
            "Члени кожного разу зростають на 4.",
            "Отже, пропущений член — 18.",
            "Перевірка: 18 + 4 = 22.",
            "Якщо пропущено два члени, використайте ті члени, які у вас є.",
            "Знайдіть правило за двома сусідніми (consecutive) членами.",
            "Кожний член має своє місце — позицію (position).",
            "Перший член стоїть на позиції 1.",
            "Від 1-го члена до 4-го — 3 кроки.",
            "Від 1-го члена до 10-го — 9 кроків.",
            "Послідовність, у якій додають два попередні члени, не є лінійною."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایسا رکن جو سلسلے سے چھوڑ دیا گیا ہو (missing term)",
            "سلسلے میں رکن کی جگہ (position)",
            "ساتھ ساتھ کے (consecutive)",
            "خطی سلسلے کا دوسرا نام (arithmetic sequence)",
            "ایسا سلسلہ جس میں آپ ہر بار ایک ہی عدد سے ضرب یا تقسیم کرتے ہیں (geometric sequence)"
          ],
          "passage": [
            "کبھی کبھی سلسلے کا کوئی رکن غائب ہوتا ہے۔",
            "آپ اسے قاعدے سے معلوم کر سکتے ہیں۔",
            "اس سلسلے کو دیکھیں: 6, 10, 14, ___, 22۔",
            "ارکان ہر بار 4 بڑھتے ہیں۔",
            "اس لیے غائب رکن 18 ہے۔",
            "اپنا جواب جانچ کر دیکھیں: 18 + 4 = 22۔",
            "اگر دو ارکان غائب ہوں تو ان ارکان کو استعمال کریں جو آپ کے پاس ہیں۔",
            "ساتھ ساتھ کے دو ارکان سے قاعدہ معلوم کریں۔",
            "ہر رکن کی ایک جگہ (position) ہوتی ہے۔",
            "پہلا رکن جگہ 1 پر ہے۔",
            "پہلے رکن سے چوتھے رکن تک 3 چھلانگیں ہیں۔",
            "پہلے رکن سے دسویں رکن تک 9 چھلانگیں ہیں۔",
            "جو سلسلہ پچھلے دو ارکان کو جمع کرتا ہے وہ خطی نہیں ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "A missing term in the middle",
          paragraphs: [
            "When a term is missing, find the rule from two consecutive terms that you do have. Then use the rule to fill the gap.",
            "In 6, 10, 14, ___, 22 the common difference is 10 − 6 = 4. So the missing term is 14 + 4 = 18. Check with the term after the gap: 18 + 4 = 22. It fits.",
            "Always check with the next term. If your missing term plus the difference does not give the next term, the rule is wrong."
          ],
          worked: {
            q: "Find the missing term: 6, 13, 20, ___, 34.",
            steps: ["Find the common difference from two consecutive terms: 13 − 6 = 7.", "Add it to the term before the gap: 20 + 7 = 27.", "Check with the term after the gap: 27 + 7 = 34."],
            answer: "27",
            check: "20 + (13 - 6)"
          },
          tip: "Find the rule from two consecutive terms you have. Then check with the term after the gap."
        },
        {
          heading: "Missing first term, missing pair",
          paragraphs: [
            "If the first term is missing, go backwards. The rule going forwards is subtract 5 in ___, 29, 24, 19. So going backwards you add 5: 29 + 5 = 34. The first term is 34.",
            "Two terms can be missing in a row, like 5, 11, ___, ___, 29. Find the rule from the terms you have: 11 − 5 = 6. Then fill both gaps: 17 and 23. Check: 23 + 6 = 29.",
            "If the two missing terms are between two terms you know, count the jumps between them. From 11 to 29 is 3 jumps, and 29 − 11 = 18, so each jump is 6."
          ],
          worked: {
            q: "Find the missing first term: ___, 41, 35, 29.",
            steps: ["Find the rule from the terms you have: 41 − 35 = 6. The terms go down by 6.", "Going backwards, do the opposite: add 6.", "41 + 6 = 47."],
            answer: "47",
            check: "41 + (41 - 35)"
          },
          tip: "To go backwards along a sequence, do the opposite of the rule."
        },
        {
          heading: "Jumps from the first term",
          paragraphs: [
            "Look at 3, 8, 13, 18, 23. The difference between the 1st term and the 2nd term is 5. Between the 1st and the 3rd it is 10. Between the 1st and the 4th it is 15. Between the 1st and the 5th it is 20.",
            "Each position along adds another 5. From the 1st term to the 4th term is 3 jumps, so the gap is 3 × 5 = 15. From the 1st term to the 10th term is 9 jumps, so the gap is 9 × 5 = 45.",
            "This lets you jump straight to a far-off term without writing all the terms. The 10th term of 3, 8, 13, … is 3 + 45 = 48. Count the jumps carefully: from the 1st to the 10th is 9 jumps, not 10."
          ],
          worked: {
            q: "A linear sequence starts 4, 10, 16, … What is the 10th term?",
            steps: ["The common difference is 10 − 4 = 6.", "From the 1st term to the 10th term is 9 jumps.", "9 jumps of 6 is 9 × 6 = 54.", "4 + 54 = 58."],
            answer: "58",
            check: "4 + (10 - 1) * (10 - 4)"
          },
          tip: "The number of jumps from the 1st term to any position is one fewer than the position number."
        },
        {
          heading: "Rules that multiply, divide or add two terms",
          paragraphs: [
            "A missing term can be in a geometric sequence. In 4, 20, 100, ___, 2500 each term is 5 times the previous term, because 20 ÷ 4 = 5. The missing term is 100 × 5 = 500. Check: 500 × 5 = 2500.",
            "Some sequences add the two previous terms. In 1, 3, 4, 7, 11, 18 you get 1 + 3 = 4, 3 + 4 = 7, 4 + 7 = 11 and 7 + 11 = 18. This sequence is not linear and not geometric.",
            "Whatever the rule, the method is the same: work the rule out from the terms you have, fill the gap, then check with the term after it."
          ],
          worked: {
            q: "Find the missing term: 2, 6, 18, ___, 162.",
            steps: ["Try an add rule: 6 − 2 = 4 but 18 − 6 = 12. It is not linear.", "Try a multiply rule: 6 ÷ 2 = 3 and 18 ÷ 6 = 3. The rule is multiply by 3.", "18 × 3 = 54. Check: 54 × 3 = 162."],
            answer: "54",
            check: "18 * (6 / 2)"
          },
          tip: "If the differences change, try dividing a term by the one before it."
        }
      ],
      gate: [
        { kind: "numeric", q: "Find the missing term: 9, 14, 19, ___, 29.", answer: 24, tolerance: 0, units: "",
          check: "19 + (14 - 9)",
          misconceptions: [
            { answer: 10, says: "You found the gap between 19 and 29 instead of the term in between them. The common difference is 14 − 9 = 5, so the missing term is 19 + 5 = 24.", check: "29 - 19" },
            { answer: 34, says: "You carried on past 29 and found the term after it. The missing term sits between 19 and 29: 19 + 5 = 24.", check: "29 + (14 - 9)" }
          ],
          why: "The common difference is 5. 19 + 5 = 24, and 24 + 5 = 29 checks." },
        { kind: "mcq", q: "Find the missing first term: ___, 52, 45, 38.", options: ["59", "45", "31", "66"], answer: 0,
          check: "52 + (52 - 45)",
          feedback: [
            "",
            "You went forwards and subtracted 7 from 52. The missing term comes before 52, so go backwards: add 7. 52 + 7 = 59.",
            "You carried the sequence on to the end: 38 − 7 = 31 is the term after 38, not the first term. Go backwards from 52 instead.",
            "You added 7 twice. The first term is one jump before 52: 52 + 7 = 59."
          ],
          why: "The terms go down by 7, so going backwards you add 7: 52 + 7 = 59." },
        { kind: "gap", q: "The number that tells you where a term sits in a sequence is its ___.", answer: "position", options: ["position", "difference", "rule"],
          feedback: {
            "difference": "The difference is the gap between two terms. Where a term sits, such as 1st or 5th, is its position.",
            "rule": "The rule says how to get from one term to the next. Where a term sits, such as 1st or 5th, is its position."
          },
          why: "The 1st term is at position 1, the 2nd at position 2, and so on." }
      ],
      modules: [
        {
          title: "Two missing terms",
          task: { kind: "numeric", q: "Find the first missing term: 8, 15, ___, ___, 36.", answer: 22, tolerance: 0, units: "",
                  check: "15 + (15 - 8)",
                  misconceptions: [
                    { answer: 29, says: "You gave the second missing term. The common difference is 15 − 8 = 7, so the first gap is 15 + 7 = 22 and the second is 29.", check: "15 + (15 - 8) + (15 - 8)" },
                    { answer: 21, says: "You found the gap between 15 and 36. That gap covers three jumps. The common difference is 15 − 8 = 7, so the first missing term is 15 + 7 = 22.", check: "36 - 15" }
                  ] },
          explain: "Say, in one sentence, how you used 36 to check your answer.",
          contexts: [
            { label: "Bus stops", q: "A bus route has stops at 8, 15, ___, ___ and 36 km from the depot. The stops are equally spaced. How far from the depot is the first missing stop?",
              why: "The stops are 7 km apart, so the first missing stop is at 15 + 7 = 22 km. Check: 22, 29, 36." },
            { label: "Reading plan", q: "A reading plan has you stop at pages 8, 15, ___, ___ and 36. The stopping pages are equally spaced. What is the first missing page number?",
              why: "The pages are 7 apart, so the first missing page is 15 + 7 = 22. Check: 22, 29, 36." }
          ],
          levels: {
            support: {
              steps: ["Find the common difference from the two consecutive terms you have.", "Add it to the last term before the gap.", "Fill the second gap too, and check that one more jump lands on the last term."],
              example: { q: "Find the first missing term: 4, 9, ___, ___, 24.",
                         steps: ["9 − 4 = 5.", "First gap: 9 + 5 = 14.", "Second gap: 14 + 5 = 19. Check: 19 + 5 = 24."],
                         answer: "14", check: "9 + (9 - 4)" }
            },
            core: { hint: "Use 8 and 15 to find the common difference. Then check your two terms lead to 36." },
            stretch: { extend: "Suppose only 8, ___, ___, ___, 36 were given. Work out the three missing terms and explain how you found the common difference." }
          },
          why: "The common difference is 15 − 8 = 7. The gaps are 22 and 29, and 29 + 7 = 36 checks."
        },
        {
          title: "Jump straight to a term",
          task: { kind: "numeric", q: "A linear sequence starts 5, 9, 13, … What is the 20th term?", answer: 81, tolerance: 0, units: "",
                  check: "5 + (20 - 1) * (9 - 5)",
                  misconceptions: [
                    { answer: 85, says: "You made 20 jumps. From the 1st term to the 20th term is 19 jumps of 4, which is 76. 5 + 76 = 81.", check: "5 + 20 * (9 - 5)" },
                    { answer: 80, says: "You multiplied 20 by the common difference 4 and forgot the first term. 19 jumps of 4 is 76, and the sequence starts at 5: 5 + 76 = 81.", check: "20 * (9 - 5)" },
                    { answer: 100, says: "You multiplied the first term 5 by 20. The sequence adds 4 each time, it does not multiply. 19 jumps of 4 is 76, and 5 + 76 = 81.", check: "5 * 20" }
                  ] },
          explain: "Say, in one sentence, why there are 19 jumps from the 1st term to the 20th term, not 20.",
          contexts: [
            { label: "Theatre rows", q: "In a theatre the rows have 5, 9, 13, … seats. Each row has the same number more than the row in front. How many seats are in the 20th row?",
              why: "Each row adds 4 seats. From row 1 to row 20 is 19 jumps of 4, which is 76. 5 + 76 = 81." },
            { label: "Savings", q: "Mia's total savings in pounds at the end of each week are 5, 9, 13, … If she keeps saving the same amount each week, what will her total be at the end of the 20th week?",
              why: "She saves 4 pounds a week. From week 1 to week 20 is 19 jumps of 4, which is 76. 5 + 76 = 81." }
          ],
          levels: {
            support: {
              steps: ["Find the common difference.", "Count the jumps from the 1st term to the 20th term: one fewer than 20.", "Multiply the jumps by the common difference and add the result to the first term."],
              example: { q: "A linear sequence starts 2, 8, 14, … What is the 10th term?",
                         steps: ["The common difference is 8 − 2 = 6.", "From the 1st term to the 10th term is 9 jumps.", "9 × 6 = 54, and 2 + 54 = 56."],
                         answer: "56", check: "2 + (10 - 1) * (8 - 2)" }
            },
            core: { hint: "The common difference is 4. How many jumps from the 1st term to the 20th?" },
            stretch: { extend: "Which position in this sequence has the term 201? Explain how you worked backwards to find it." }
          },
          why: "The common difference is 9 − 5 = 4. From the 1st term to the 20th is 19 jumps: 19 × 4 = 76, and 5 + 76 = 81."
        },
        {
          title: "Add the two previous terms",
          task: { kind: "mcq", q: "Find the missing term: 3, 4, 7, 11, ___, 29. Each term is the sum of the two previous terms.", options: ["18", "15", "22", "14"], answer: 0,
                  check: "7 + 11",
                  feedback: [
                    "",
                    "You added 4, the last difference, as if the sequence were linear. The rule here adds the two previous terms: 7 + 11 = 18.",
                    "You doubled 11. The rule adds the two previous terms, which are 7 and 11, not 11 and 11. 7 + 11 = 18.",
                    "You added 3 and 11, the first term and the previous term. The two previous terms are 7 and 11: 7 + 11 = 18."
                  ] },
          explain: "Say, in one sentence, how you checked your answer using 29.",
          contexts: [
            { label: "Rabbits", q: "A family of rabbits grows so that each month's count is the sum of the previous two months' counts: 3, 4, 7, 11, ___, 29. What is the missing count?",
              why: "7 + 11 = 18. Check: 11 + 18 = 29." },
            { label: "Game scores", q: "In a game, each round's score is the two previous scores added together: 3, 4, 7, 11, ___, 29. What was the missing score?",
              why: "7 + 11 = 18. Check: 11 + 18 = 29." }
          ],
          levels: {
            support: {
              steps: ["Check the rule on the terms you have: 3 + 4 = 7 and 4 + 7 = 11.", "Add the two terms just before the gap.", "Check: the missing term plus 11 should give 29."],
              example: { q: "Each term is the sum of the two previous terms: 1, 3, 4, 7, ___, 18. Find the missing term.",
                         steps: ["Check the rule: 1 + 3 = 4 and 3 + 4 = 7.", "Add the two terms before the gap: 4 + 7 = 11.", "Check: 7 + 11 = 18."],
                         answer: "11", check: "4 + 7" }
            },
            core: { hint: "Which two terms come just before the gap? Add them." },
            stretch: { extend: "Continue the sequence for three more terms after 29. Is it linear, geometric or neither? Explain." }
          },
          why: "The two terms before the gap are 7 and 11, and 7 + 11 = 18. Check: 11 + 18 = 29."
        }
      ]
    }
  ],

  sources: {
    deckDump: "ma_y07_01_main.txt",
    decksUsed: [
      "1. Sequences.pptx",
      "2. Linear and Non Linear Sequences.pptx",
      "3. Continue Linear Sequence.pptx",
      "4. Continue Non Linear Sequences.pptx",
      "5. Term to term rule.pptx",
      "6. Missing Terms.pptx"
    ],
    notes: "Lesson sequence, titles and learning objectives come from the six MAIN decks (no support dump exists for this unit). One chapter per lesson. The decks teach: terms, patterns of counters and squares, predict-and-check (deck 1); constant difference, linear / non-linear, ascending / descending, position-term tables and straight-line graphs (deck 2); common difference (including the order of subtraction), term-to-term rule, decimal sequences, sequences below zero, tables and graphs (deck 3); doubling and tripling, dividing cells, dividing by 2, sequences whose differences grow by 1 (deck 4); the rule as a full sentence 'add … to the previous term', multiply and divide rules, two-step rules (deck 5); missing terms, the difference between the 1st and nth term as (n − 1) jumps, geometric and add-the-two-previous-terms sequences, position (deck 6). No deck teaches an algebraic nth term, so none is taught here. All questions use original numbers; every sequence in a gate item, task, worked example, support example or context was written for Ad Astra, and verify.py fails if a deck sequence appears in one. No slide images were available, so no number was copied from a layout-lost slide. See NOTES.md."
  }
};
