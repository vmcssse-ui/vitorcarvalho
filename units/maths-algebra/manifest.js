// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest (schema astra/2) — Maths, Year 7, Unit 2: Algebraic Notation and Substitution.
// Every computable item carries `check`: a plain Python expression recomputed by verify.py.
//   numeric / gap      -> check evaluates to the answer
//   mcq (numbers)      -> check evaluates to the value of the one correct option
//   mcq (expressions)  -> check evaluates to an expression equal (for every value of the letter) to the correct option
//   mcq (statements)   -> check evaluates to a list of booleans, one per option, exactly one True
//   order              -> check evaluates to the list of item values (with the stated substitution) in the correct order
//   match              -> check evaluates to a list of booleans, one per pair, all True
//   worked / example   -> check evaluates to the value(s) in `answer`; a function answer such as "− 5" is checked
//                         with machine(input, …functions, output), which must be True and must name that function
// verify.py also recomputes every pure-arithmetic statement (=, <, >) written in prose fields, including feedback,
// misconception text, explain prompts and context variants. Algebra is compared by evaluating both sides at three
// sample values of every letter (plain Python, no sympy needed).
// astra/2 (18 Oct 2026): misconception feedback on every mcq / gap / numeric item; `explain` on every module;
// `contexts` (same numbers, different story) on thirteen modules; glossary chapters + connections; meta.spacing.
// No widgets (a number line does not fit function machines) and no meta.constellation (the engine lays stars out).
// No pretext.l1: home-language lines are added later by a separate translation pass.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["maths-algebra"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "maths-algebra",
    subjectKey: "maths",
    subject: "Mathematics",
    board: "AQA",
    spec: "KS3 → 8300",
    specRef: "KS3 Algebra: notation, function machines and substitution (leading to AQA 8300 A1 and A2)",
    year: 7,
    tier: "KS3",
    title: "Algebraic Notation and Substitution",
    sub: "Year 7, Unit 2: function machines with numbers and letters, writing outputs as expressions, finding the function, and substituting values into one-step and two-step expressions.",
    bigQuestion: "How can a function machine help us write, read and use algebra?",
    lessonCount: 8,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "1-step function machines (numbers)", question: "What do the input, the function and the output of a machine tell us, and how do we run a machine backwards?", keywords: ["input", "output", "function", "inverse"] },
    { n: 2, title: "1-step function machines (algebra)", question: "What happens when the input of a machine is a letter?", keywords: ["variable", "expression", "term", "3a means 3 × a"] },
    { n: 3, title: "Find a function (one step)", question: "How can we work out what a machine does from its input and output?", keywords: ["function", "operation", "equivalent"] },
    { n: 4, title: "Substitution (one step)", question: "How do we find the value of an expression when we know the value of the letter?", keywords: ["substitute", "value", "cubes and counters"] },
    { n: 5, title: "2-step function machines (number)", question: "How do two functions work together, and does the order matter?", keywords: ["two-step", "order", "inverse", "operation"] },
    { n: 6, title: "2-step function machines (algebra)", question: "How do we write the output of a two-step machine as an expression, and when do we need brackets?", keywords: ["expression", "brackets", "term", "variable"] },
    { n: 7, title: "Find a function (two step)", question: "How do we read an expression as a pair of instructions and find a missing function?", keywords: ["order of operations", "brackets", "missing function", "equivalent"] },
    { n: 8, title: "Substitution (two step)", question: "How do we substitute into a two-step expression and keep the order of operations?", keywords: ["substitute", "order of operations", "square", "constant"] }
  ],

  glossary: [
    { term: "input", means: "The number or letter that goes into a function machine.", chapter: "machines-numbers" },
    { term: "output", means: "The number or expression that comes out of a function machine.", chapter: "machines-numbers" },
    { term: "function", means: "The rule a machine follows, such as add 2 or multiply by 5.", chapter: "machines-numbers" },
    { term: "operation", means: "A process in maths: adding, subtracting, multiplying, dividing or squaring.", chapter: "machines-numbers" },
    { term: "inverse", means: "The operation that undoes another: subtracting 3 is the inverse of adding 3.", chapter: "machines-numbers" },
    { term: "square", means: "A number multiplied by itself, written with a small 2, like 5² for 5 × 5.", chapter: "substitution-two-step" },
    { term: "square root", means: "The inverse of squaring: the square root of 25 is 5.", chapter: "machines-numbers" },
    { term: "variable", means: "A letter that stands for any number.", chapter: "machines-algebra" },
    { term: "expression", means: "Letters and numbers joined by + − × or ÷, with no equals sign, like 6a + 15.", chapter: "machines-algebra" },
    { term: "term", means: "One part of an expression: 6a + 15 has two terms.", chapter: "machines-algebra" },
    { term: "equivalent", means: "Worth the same for every value of the letter: a × 5 and 5a are equivalent.", chapter: "machines-algebra" },
    { term: "substitute", means: "Swap a letter for the number it stands for.", chapter: "substitution-one-step" },
    { term: "value", means: "What an expression is worth once the letter has a number.", chapter: "substitution-one-step" },
    { term: "brackets", means: "The marks ( ) that group a whole expression together, so it is treated as one thing.", chapter: "two-step-machines" },
    { term: "order of operations", means: "Brackets first, then squares, then × and ÷, then + and −.", chapter: "find-two-step" },
    { term: "constant", means: "A term with no letter in it, like the 4 in 3y − 4.", chapter: "substitution-two-step" }
  ],

  // Connections game: 4 groups × 4 terms, all drawn from the glossary above.
  connections: [
    { group: "Parts of a function machine", terms: ["input", "output", "function", "operation"] },
    { group: "Words for algebra", terms: ["variable", "expression", "term", "constant"] },
    { group: "Working out an expression", terms: ["substitute", "value", "brackets", "order of operations"] },
    { group: "Undoing and comparing", terms: ["inverse", "square", "square root", "equivalent"] }
  ],

  chapters: [
    // ───────────────────────────────────────────── Chapter 1
    {
      key: "machines-numbers", n: 1,
      title: "Function machines with numbers",
      lead: "Meet the input, the function and the output, and learn to run a machine forwards and backwards.",
      covers: [1],
      pretext: {
        words: [
          { word: "function machine", means: "a picture of a rule: a number goes in, something is done to it, a number comes out", sentence: "This function machine adds 2 to every number." },
          { word: "input", means: "the number that goes into the machine", sentence: "The input is 3." },
          { word: "output", means: "the number that comes out of the machine", sentence: "If the input is 3 and the machine adds 2, the output is 5." },
          { word: "function", means: "the operation the machine does to the input", sentence: "The function is multiply by 5." },
          { word: "inverse", means: "the operation that undoes another", sentence: "The inverse of adding 2 is subtracting 2." }
        ],
        passage: [
          "A function machine is a picture of a rule.",
          "A number goes in. We call it the input.",
          "The machine does something to that number.",
          "This is the function. It might be add 2 or multiply by 5.",
          "A number comes out. We call it the output.",
          "Put 3 into a machine that adds 2. The output is 5.",
          "Put 4 into a machine that multiplies by 5. The output is 20.",
          "Sometimes you know the output but not the input.",
          "Then you work backwards.",
          "You undo the function with its inverse.",
          "The inverse of adding is subtracting.",
          "The inverse of multiplying is dividing."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "صورة لقاعدة: يدخل عدد، ويُجرى عليه شيء، ويخرج عدد (function machine)",
            "العدد الذي يدخل في الآلة (input)",
            "العدد الذي يخرج من الآلة (output)",
            "العملية التي تجريها الآلة على المدخل (function)",
            "العملية التي تُلغي عملية أخرى (inverse)"
          ],
          "passage": [
            "آلة الدالّة (function machine) صورة لقاعدة.",
            "يدخل عدد. نسمّيه المدخل (input).",
            "تفعل الآلة شيئاً بهذا العدد.",
            "هذه هي الدالّة (function). قد تكون «أضف 2» أو «اضرب في 5».",
            "يخرج عدد. نسمّيه المخرج (output).",
            "أدخل 3 في آلة تضيف 2. المخرج هو 5.",
            "أدخل 4 في آلة تضرب في 5. المخرج هو 20.",
            "أحياناً تعرف المخرج ولا تعرف المدخل.",
            "عندها تعمل بالاتجاه المعاكس.",
            "تُلغي الدالّة بعكسها (inverse).",
            "عكس الجمع هو الطرح.",
            "وعكس الضرب هو القسمة."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "obrazek reguły: liczba wchodzi, coś się z nią robi, liczba wychodzi (function machine)",
            "liczba, która wchodzi do maszyny (input)",
            "liczba, która wychodzi z maszyny (output)",
            "działanie, które maszyna wykonuje na liczbie wejściowej (function)",
            "działanie, które odwraca inne działanie (inverse)"
          ],
          "passage": [
            "Maszyna funkcyjna (function machine) to obrazek reguły.",
            "Liczba wchodzi. Nazywamy ją wejściem (input).",
            "Maszyna robi coś z tą liczbą.",
            "To jest funkcja (function). Może to być „dodaj 2” albo „pomnóż przez 5”.",
            "Liczba wychodzi. Nazywamy ją wyjściem (output).",
            "Włóż 3 do maszyny, która dodaje 2. Wyjście to 5.",
            "Włóż 4 do maszyny, która mnoży przez 5. Wyjście to 20.",
            "Czasem znasz wyjście, ale nie znasz wejścia.",
            "Wtedy pracujesz od tyłu.",
            "Odwracasz funkcję za pomocą jej odwrotności (inverse).",
            "Odwrotnością dodawania jest odejmowanie.",
            "Odwrotnością mnożenia jest dzielenie."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um desenho de uma regra: entra um número, faz-se algo com ele, sai um número (function machine, máquina de funções)",
            "o número que entra na máquina (input, entrada)",
            "o número que sai da máquina (output, saída)",
            "a operação que a máquina faz à entrada (function, função)",
            "a operação que desfaz outra (inverse, inversa)"
          ],
          "passage": [
            "Uma máquina de funções (function machine) é um desenho de uma regra.",
            "Entra um número. Chamamos-lhe a entrada (input).",
            "A máquina faz alguma coisa com esse número.",
            "Isto é a função (function). Pode ser ‘somar 2’ ou ‘multiplicar por 5’.",
            "Sai um número. Chamamos-lhe a saída (output).",
            "Ponha 3 numa máquina que soma 2. A saída é 5.",
            "Ponha 4 numa máquina que multiplica por 5. A saída é 20.",
            "Às vezes você sabe a saída mas não a entrada.",
            "Então você trabalha ao contrário.",
            "Você desfaz a função com a sua inversa (inverse).",
            "A inversa de somar é subtrair.",
            "A inversa de multiplicar é dividir."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "sawir xeer ah: tiro ayaa gasha, wax ayaa lagu sameeyaa, tiro ayaa soo baxda (function machine)",
            "tirada mishiinka gasha (input)",
            "tirada mishiinka ka soo baxda (output)",
            "hawsha mishiinku ku sameeyo input-ka (function)",
            "hawsha hawl kale dib u celisa (inverse)"
          ],
          "passage": [
            "Mishiinka function (function machine) waa sawir xeer ah.",
            "Tiro ayaa gasha. Waxaan ugu yeernaa input.",
            "Mishiinku wax ayuu ku sameeyaa tiradaas.",
            "Tani waa function-ka. Waxay noqon kartaa 2 ku dar ama 5 ku dhufo.",
            "Tiro ayaa soo baxda. Waxaan ugu yeernaa output.",
            "Geli 3 mishiin 2 ku dara. Output-ku waa 5.",
            "Geli 4 mishiin 5 ku dhufta. Output-ku waa 20.",
            "Mararka qaar output-ka ayaad taqaannaa laakiin input-ka ma taqaannid.",
            "Markaas dib ayaad u shaqaysaa.",
            "Function-ka waxaad ku furtaa lidkiisa (inverse).",
            "Lidka ku-daridda waa ka-jarid.",
            "Lidka ku-dhufashada waa u-qaybin."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "малюнок правила: число входить, з ним щось роблять, і число виходить (function machine)",
            "число, яке входить у машину (input)",
            "число, яке виходить із машини (output)",
            "дія, яку машина виконує з вхідним числом (function)",
            "дія, яка скасовує іншу дію (inverse)"
          ],
          "passage": [
            "Функціональна машина (function machine) — це малюнок правила.",
            "Число входить у неї. Ми називаємо його вхідним (input).",
            "Машина щось робить із цим числом.",
            "Це функція (function). Це може бути «додати 2» або «помножити на 5».",
            "Число виходить із машини. Ми називаємо його вихідним (output).",
            "Введіть 3 у машину, яка додає 2. Вихідне число — 5.",
            "Введіть 4 у машину, яка множить на 5. Вихідне число — 20.",
            "Іноді ви знаєте вихідне число, але не знаєте вхідного.",
            "Тоді ви працюєте у зворотному напрямку.",
            "Ви скасовуєте функцію за допомогою оберненої дії (inverse).",
            "Обернена дія до додавання — віднімання.",
            "Обернена дія до множення — ділення."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایک قاعدے کی تصویر: ایک عدد اندر جاتا ہے، اس کے ساتھ کچھ کیا جاتا ہے، ایک عدد باہر آتا ہے (function machine)",
            "وہ عدد جو مشین میں اندر جاتا ہے (input)",
            "وہ عدد جو مشین سے باہر آتا ہے (output)",
            "وہ عمل جو مشین ان پٹ کے ساتھ کرتی ہے (function)",
            "وہ عمل جو کسی دوسرے عمل کو الٹا دیتا ہے (inverse)"
          ],
          "passage": [
            "فنکشن مشین (function machine) ایک قاعدے کی تصویر ہے۔",
            "ایک عدد اندر جاتا ہے۔ ہم اسے ان پٹ (input) کہتے ہیں۔",
            "مشین اس عدد کے ساتھ کچھ کرتی ہے۔",
            "یہ فنکشن (function) ہے۔ یہ ‘2 جمع کریں’ یا ‘5 سے ضرب دیں’ ہو سکتا ہے۔",
            "ایک عدد باہر آتا ہے۔ ہم اسے آؤٹ پٹ (output) کہتے ہیں۔",
            "ایسی مشین میں 3 ڈالیں جو 2 جمع کرتی ہے۔ آؤٹ پٹ 5 ہے۔",
            "ایسی مشین میں 4 ڈالیں جو 5 سے ضرب دیتی ہے۔ آؤٹ پٹ 20 ہے۔",
            "کبھی کبھی آپ کو آؤٹ پٹ معلوم ہوتا ہے مگر ان پٹ نہیں۔",
            "تب آپ الٹا چلتے ہیں۔",
            "آپ فنکشن کو اس کے الٹ عمل (inverse) سے کھول دیتے ہیں۔",
            "جمع کا الٹ عمل گھٹانا ہے۔",
            "ضرب کا الٹ عمل تقسیم ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Input, function, output",
          paragraphs: [
            "Think of a machine with a slot at each end. You drop a number in at one side. That number is the input. Inside, the machine follows one rule, such as add 6 or divide by 2. That rule is the function. The number that drops out of the other side is the output.",
            "The function is an operation: adding, subtracting, multiplying or dividing. It tells you what to do to the input. If the input is 8 and the function is multiply by 2, you work out 8 × 2 = 16. The output is 16.",
            "The same input gives different outputs in different machines. Put 8 into a machine that adds 2 and you get 10. Put 8 into a machine that subtracts 2 and you get 6. Always read the function before you start."
          ],
          worked: {
            q: "A machine multiplies by 6. The input is 7. What is the output?",
            steps: ["Find the input: 7.", "Read the function: multiply by 6.", "Do the function to the input: 7 × 6 = 42.", "The output is 42."],
            answer: "42", check: "7 * 6"
          },
          tip: "Say the three parts out loud: input, function, output."
        },
        {
          heading: "Working backwards",
          paragraphs: [
            "Sometimes you are told the output and asked for the input. You cannot run the machine forwards, so you run it backwards. To go backwards you use the inverse of the function. The inverse undoes what the function did.",
            "The inverse of adding 3 is subtracting 3. The inverse of subtracting 7 is adding 7. The inverse of multiplying by 4 is dividing by 4. The inverse of dividing by 2 is multiplying by 2. Squaring and square rooting are inverses too.",
            "A machine adds 3 and the output is 4. Eva says the input must be 7, because 4 + 3 = 7. She has run the machine forwards again. Going backwards means subtracting 3, so the input is 1. Check: 1 + 3 = 4."
          ],
          worked: {
            q: "A machine subtracts 8. The output is 15. What was the input?",
            steps: ["The function is subtract 8.", "Its inverse is add 8.", "Do the inverse to the output: 15 + 8 = 23.", "Check forwards: 23 − 8 = 15. The input was 23."],
            answer: "23", check: "15 + 8"
          },
          tip: "Finished a backwards question? Run the machine forwards with your answer to check it."
        },
        {
          heading: "Spotting mistakes",
          paragraphs: [
            "Some functions are easy to mix up. Doubling means multiplying by 2. Squaring means multiplying a number by itself. Mo puts 8 into a machine that squares, and writes 16. He has doubled instead of squaring. 8 × 8 = 64, so the output should be 64.",
            "Decimal inputs follow the same rules as whole numbers. Put 0.6 into a machine that multiplies by 4 and you get 2.4, not 0.24. If you are not sure, think about the whole-number version first: 6 × 4 = 24.",
            "Two different functions can turn the same input into the same output. 6 turns into 12 if the machine multiplies by 2, and also if it adds 6. When a question gives only one pair of numbers, more than one answer can be right. A second pair of numbers settles it."
          ],
          worked: {
            q: "A machine squares the input. The input is 9. What is the output?",
            steps: ["Squaring means multiplying the number by itself.", "9 × 9 = 81.", "The output is 81, not 18."],
            answer: "81", check: "9 ** 2"
          },
          tip: "Squaring is not doubling. 5 squared is 25, but 5 doubled is 10."
        }
      ],
      gate: [
        { kind: "numeric", q: "A machine adds 9. The input is 17. What is the output?", answer: 26, tolerance: 0, units: "", check: "17 + 9",
          misconceptions: [
            { answer: 8, says: "You subtracted 9 from 17. The function says add 9, so move the other way: 17 + 9 = 26.", check: "17 - 9" },
            { answer: 153, says: "You multiplied 17 by 9. Read the function again: it says add 9, not multiply by 9.", check: "17 * 9" }
          ],
          why: "Do the function to the input: 17 + 9 = 26." },
        { kind: "mcq", q: "Which operation is the inverse of multiplying by 4?", options: ["Adding 4", "Subtracting 4", "Dividing by 4", "Multiplying by 4"], answer: 2,
          feedback: [
            "Adding 4 does not undo multiplying by 4. Try it: 3 × 4 = 12, and 12 + 4 = 16, not 3. The inverse of multiplying is dividing.",
            "Subtracting 4 undoes adding 4, not multiplying by 4. Try it: 3 × 4 = 12, and 12 − 4 = 8, not 3.",
            "",
            "Multiplying by 4 again takes you further away: 3 × 4 = 12 and 12 × 4 = 48. To get back to 3 you divide by 4."
          ],
          why: "Dividing by 4 undoes multiplying by 4: 3 × 4 = 12 and 12 ÷ 4 = 3." },
        { kind: "numeric", q: "A machine divides by 3. The output is 12. What was the input?", answer: 36, tolerance: 0, units: "", check: "12 * 3",
          misconceptions: [
            { answer: 4, says: "You divided the output by 3 as well. To go backwards you use the inverse: multiply 12 by 3 to get 36.", check: "12 / 3" },
            { answer: 15, says: "You added 3 to the output. The inverse of dividing by 3 is multiplying by 3, not adding 3.", check: "12 + 3" }
          ],
          why: "The inverse of divide by 3 is multiply by 3: 12 × 3 = 36. Check: 36 ÷ 3 = 12." }
      ],
      modules: [
        {
          title: "Find the output",
          task: { kind: "numeric", q: "A machine subtracts 14. The input is 50. What is the output?", answer: 36, tolerance: 0, units: "", check: "50 - 14",
                  misconceptions: [
                    { answer: 64, says: "You added 14 instead of subtracting it. The function says subtract 14, so take 14 away from 50.", check: "50 + 14" },
                    { answer: -36, says: "You took 50 away from 14. The input is 50, so start at 50 and take 14 away from it.", check: "14 - 50" }
                  ] },
          explain: "Say, in one sentence, which number is the input, which is the function and which is the output.",
          contexts: [
            { label: "Think of a number", q: "Think of a number and subtract 14 from it. Dora thinks of 50. What is her new number?",
              why: "Her input is 50 and the function is subtract 14: 50 − 14 = 36." },
            { label: "Money", q: "You have £50 and spend £14 on a game. How much money do you have left, in pounds?",
              why: "Start with 50 and take away 14: 50 − 14 = 36." }
          ],
          levels: {
            support: {
              steps: ["Say the input: 50.", "Say the function: subtract 14.", "Do the function to the input: 50 − 14.", "Write the answer as the output."],
              example: { q: "A machine subtracts 9. The input is 30. What is the output?",
                         steps: ["The input is 30 and the function is subtract 9.", "30 − 9 = 21.", "The output is 21."],
                         answer: "21", check: "30 - 9" }
            },
            core: { hint: "Start at 50 and take away 14." },
            stretch: { extend: "Can the same machine give the output 36 from a different input? Explain why or why not, then find the input that gives the output 0." }
          },
          why: "Do the function to the input: 50 − 14 = 36."
        },
        {
          title: "Work backwards to find the input",
          task: { kind: "numeric", q: "A machine multiplies by 7. The output is 84. What was the input?", answer: 12, tolerance: 0, units: "", check: "84 / 7",
                  misconceptions: [
                    { answer: 588, says: "You multiplied the output by 7 as well. Going backwards means undoing: the inverse of multiply by 7 is divide by 7, so work out 84 ÷ 7.", check: "84 * 7" },
                    { answer: 77, says: "You subtracted 7 from the output. Subtracting undoes adding, not multiplying. To undo multiply by 7, divide by 7.", check: "84 - 7" }
                  ] },
          explain: "Say, in one sentence, why you divide to go backwards through a machine that multiplies.",
          contexts: [
            { label: "Pens in boxes", q: "Every box holds 7 pens. There are 84 pens in the boxes altogether. How many boxes are there?",
              why: "The number of boxes was multiplied by 7 to give 84, so undo it: 84 ÷ 7 = 12." },
            { label: "Plant growth", q: "A plant grows 7 cm every week. So far it has grown 84 cm. How many weeks has it been growing?",
              why: "The number of weeks was multiplied by 7 to give 84, so divide: 84 ÷ 7 = 12 weeks." }
          ],
          levels: {
            support: {
              steps: ["Write the function: multiply by 7.", "Write its inverse: divide by 7.", "Do the inverse to the output: 84 ÷ 7.", "Check by running the machine forwards with your answer."],
              example: { q: "A machine multiplies by 4. The output is 36. What was the input?",
                         steps: ["The inverse of multiply by 4 is divide by 4.", "36 ÷ 4 = 9.", "Check forwards: 9 × 4 = 36. The input was 9."],
                         answer: "9", check: "36 / 4" }
            },
            core: { hint: "What is the inverse of multiplying by 7?" },
            stretch: { extend: "Annie says the input must be 91 because 84 + 7 = 91. Explain her mistake, then describe how running the machine forwards would show her she is wrong." }
          },
          why: "The inverse of multiply by 7 is divide by 7: 84 ÷ 7 = 12. Check: 12 × 7 = 84."
        },
        {
          title: "Which function is it?",
          task: { kind: "match", q: "Each machine has one function. Match each input and output to the function that turns the input into the output.",
                  pairs: [["8 → 24", "× 3"], ["7 → 15", "+ 8"], ["30 → 6", "÷ 5"], ["11 → 0", "− 11"]],
                  check: "[machine('8', '× 3', '24'), machine('7', '+ 8', '15'), machine('30', '÷ 5', '6'), machine('11', '− 11', '0')]" },
          explain: "Say, in one sentence, how you decided whether a machine adds or multiplies.",
          levels: {
            support: {
              steps: ["Look at one pair at a time.", "Ask: what was done to the input to get the output?", "Try the cards one by one: does × 3 turn 8 into 24?", "Cross off each function as you use it."],
              example: { q: "A machine turns 6 into 18. Which of these is its function: + 3, × 3 or − 12?",
                         steps: ["6 + 3 = 9, not 18.", "6 × 3 = 18. That works.", "6 − 12 is less than zero, so it cannot be 18."],
                         answer: "× 3", check: "machine('6', '× 3', '18')" }
            },
            core: { hint: "Try × 3 on each input first. Which input does it fit?" },
            stretch: { extend: "Write a different pair of input and output numbers for each of the four functions, and explain why 10 → 20 could belong to two different machines." }
          },
          why: "8 × 3 = 24, 7 + 8 = 15, 30 ÷ 5 = 6 and 11 − 11 = 0."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 2
    {
      key: "machines-algebra", n: 2,
      title: "Function machines with algebra",
      lead: "Put a letter through a machine, write the output as an expression, and work out what a machine does.",
      covers: [2, 3],
      pretext: {
        words: [
          { word: "variable", means: "a letter that stands for any number", sentence: "In 3a, the letter a is the variable." },
          { word: "expression", means: "letters and numbers joined by + − × or ÷, with no equals sign", sentence: "6a + 15 is an expression." },
          { word: "term", means: "one part of an expression", sentence: "The expression 6a + 15 has two terms." },
          { word: "equivalent", means: "worth the same for every value of the letter", sentence: "a × 5 and 5a are equivalent." }
        ],
        passage: [
          "A function machine can take a letter as its input.",
          "The letter stands for any number. We call it a variable.",
          "Put a into a machine that adds 8. The output is a + 8.",
          "Put a into a machine that multiplies by 3. The output is 3a.",
          "We write 3a, with the number first. The × sign is hidden.",
          "Put a into a machine that divides by 5. The output is a over 5, written as a fraction.",
          "The output is an expression. It has no equals sign.",
          "Sometimes you know the input and the output but not the function.",
          "Ask yourself what was done to the input.",
          "If 7 goes in and 21 comes out, the function could be multiply by 3.",
          "If 6 goes in and 12 comes out, it could be multiply by 2 or add 6.",
          "Both work, so check with a second pair if you can."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "حرف يمثّل أي عدد (variable)",
            "حروف وأعداد تربطها + أو − أو × أو ÷، بلا علامة يساوي (expression)",
            "جزء واحد من العبارة الجبرية (term)",
            "له القيمة نفسها لكل قيمة يأخذها الحرف (equivalent)"
          ],
          "passage": [
            "يمكن لآلة الدالّة أن تأخذ حرفاً كمدخل.",
            "الحرف يمثّل أي عدد. نسمّيه متغيّراً (variable).",
            "أدخل a في آلة تضيف 8. المخرج هو a + 8.",
            "أدخل a في آلة تضرب في 3. المخرج هو 3a.",
            "نكتب 3a، والعدد أولاً. وعلامة × مخفيّة.",
            "أدخل a في آلة تقسم على 5. المخرج هو a على 5، ويُكتب على شكل كسر.",
            "المخرج عبارة جبرية (expression). ليس فيها علامة يساوي.",
            "أحياناً تعرف المدخل والمخرج ولا تعرف الدالّة.",
            "اسأل نفسك: ما الذي أُجري على المدخل؟",
            "إذا دخل 7 وخرج 21، فقد تكون الدالّة «اضرب في 3».",
            "إذا دخل 6 وخرج 12، فقد تكون «اضرب في 2» أو «أضف 6».",
            "كلتاهما تصلح، فتحقّق بزوج ثانٍ إن استطعت."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "litera, która oznacza dowolną liczbę (variable)",
            "litery i liczby połączone znakami + − × lub ÷, bez znaku równości (expression)",
            "jedna część wyrażenia (term)",
            "warte tyle samo dla każdej wartości litery (equivalent)"
          ],
          "passage": [
            "Maszyna funkcyjna może przyjąć literę jako wejście.",
            "Litera oznacza dowolną liczbę. Nazywamy ją zmienną (variable).",
            "Włóż a do maszyny, która dodaje 8. Wyjście to a + 8.",
            "Włóż a do maszyny, która mnoży przez 3. Wyjście to 3a.",
            "Piszemy 3a, z liczbą na początku. Znak × jest ukryty.",
            "Włóż a do maszyny, która dzieli przez 5. Wyjście to a przez 5, zapisane jako ułamek.",
            "Wyjście jest wyrażeniem (expression). Nie ma znaku równości.",
            "Czasem znasz wejście i wyjście, ale nie znasz funkcji.",
            "Zapytaj siebie, co zrobiono z wejściem.",
            "Jeśli wchodzi 7, a wychodzi 21, funkcją może być „pomnóż przez 3”.",
            "Jeśli wchodzi 6, a wychodzi 12, może to być „pomnóż przez 2” albo „dodaj 6”.",
            "Obie pasują, więc jeśli możesz, sprawdź z drugą parą."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma letra que representa um número qualquer (variable, variável)",
            "letras e números ligados por + − × ou ÷, sem sinal de igual (expression, expressão)",
            "uma parte de uma expressão (term, termo)",
            "que vale o mesmo para qualquer valor da letra (equivalent, equivalente)"
          ],
          "passage": [
            "Uma máquina de funções pode receber uma letra como entrada.",
            "A letra representa um número qualquer. Chamamos-lhe variável (variable).",
            "Ponha a numa máquina que soma 8. A saída é a + 8.",
            "Ponha a numa máquina que multiplica por 3. A saída é 3a.",
            "Escrevemos 3a, com o número primeiro. O sinal × fica escondido.",
            "Ponha a numa máquina que divide por 5. A saída é a sobre 5, escrito como uma fração.",
            "A saída é uma expressão (expression). Não tem sinal de igual.",
            "Às vezes você sabe a entrada e a saída mas não a função.",
            "Pergunte a si mesmo o que foi feito à entrada.",
            "Se entra 7 e sai 21, a função pode ser ‘multiplicar por 3’.",
            "Se entra 6 e sai 12, pode ser ‘multiplicar por 2’ ou ‘somar 6’.",
            "As duas funcionam, por isso verifique com um segundo par se puder."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "xaraf tiro kasta u taagan (variable)",
            "xarfo iyo tirooyin ay isku xiraan + − × ama ÷, oo aan lahayn calaamadda isle'eg (expression)",
            "hal qayb oo tibaax (term)",
            "isku qiime leh qiime kasta oo xarafku qaato (equivalent)"
          ],
          "passage": [
            "Mishiinka function wuxuu input-ka ka qaadan karaa xaraf.",
            "Xarafku tiro kasta ayuu u taagan yahay. Waxaan ugu yeernaa doorsoome (variable).",
            "Geli a mishiin 8 ku dara. Output-ku waa a + 8.",
            "Geli a mishiin 3 ku dhufta. Output-ku waa 3a.",
            "Waxaan u qornaa 3a, tirada hore. Calaamadda × waa qarsoon tahay.",
            "Geli a mishiin 5 u qaybiya. Output-ku waa a oo 5 la saaray, oo jajab ahaan loo qoray.",
            "Output-ku waa tibaax (expression). Calaamadda isle'eg ma laha.",
            "Mararka qaar input-ka iyo output-ka ayaad taqaannaa laakiin function-ka ma taqaannid.",
            "Is weydii waxa input-ka lagu sameeyay.",
            "Haddii 7 galo oo 21 soo baxo, function-ku wuxuu noqon karaa 3 ku dhufo.",
            "Haddii 6 galo oo 12 soo baxo, wuxuu noqon karaa 2 ku dhufo ama 6 ku dar.",
            "Labaduba way shaqeeyaan, sidaas darteed ku hubi lammaane labaad haddii aad awooddo."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "буква, яка позначає будь-яке число (variable)",
            "букви та числа, з’єднані знаками + − × або ÷, без знака «дорівнює» (expression)",
            "одна частина виразу (term)",
            "такі, що мають однакове значення для будь-якого значення букви (equivalent)"
          ],
          "passage": [
            "Функціональна машина може приймати букву як вхідне значення.",
            "Буква позначає будь-яке число. Ми називаємо її змінною (variable).",
            "Введіть a у машину, яка додає 8. Вихід — a + 8.",
            "Введіть a у машину, яка множить на 3. Вихід — 3a.",
            "Ми пишемо 3a, число спереду. Знак × прихований.",
            "Введіть a у машину, яка ділить на 5. Вихід — a поділити на 5, записано як дріб.",
            "Вихід — це вираз (expression). У ньому немає знака «дорівнює».",
            "Іноді ви знаєте вхід і вихід, але не знаєте функції.",
            "Запитайте себе: що зробили з вхідним числом?",
            "Якщо входить 7, а виходить 21, функція може бути «помножити на 3».",
            "Якщо входить 6, а виходить 12, це може бути «помножити на 2» або «додати 6».",
            "Підходять обидва варіанти, тому перевірте за другою парою чисел, якщо можете."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایک حرف جو کسی بھی عدد کی جگہ کھڑا ہو (variable)",
            "حرف اور اعداد جو + − × یا ÷ سے جڑے ہوں، بغیر برابر کے نشان کے (expression)",
            "عبارت کا ایک حصہ (term)",
            "حرف کی ہر قیمت کے لیے برابر (equivalent)"
          ],
          "passage": [
            "فنکشن مشین ایک حرف کو بھی ان پٹ کے طور پر لے سکتی ہے۔",
            "حرف کسی بھی عدد کی جگہ کھڑا ہوتا ہے۔ ہم اسے متغیر (variable) کہتے ہیں۔",
            "ایسی مشین میں a ڈالیں جو 8 جمع کرتی ہے۔ آؤٹ پٹ a + 8 ہے۔",
            "ایسی مشین میں a ڈالیں جو 3 سے ضرب دیتی ہے۔ آؤٹ پٹ 3a ہے۔",
            "ہم 3a لکھتے ہیں، عدد پہلے۔ × کا نشان چھپا ہوا ہے۔",
            "ایسی مشین میں a ڈالیں جو 5 سے تقسیم کرتی ہے۔ آؤٹ پٹ a بٹا 5 ہے، جو کسر کی شکل میں لکھا جاتا ہے۔",
            "آؤٹ پٹ ایک الجبری عبارت (expression) ہے۔ اس میں برابر کا نشان نہیں ہوتا۔",
            "کبھی کبھی آپ کو ان پٹ اور آؤٹ پٹ معلوم ہوتے ہیں مگر فنکشن نہیں۔",
            "خود سے پوچھیں کہ ان پٹ کے ساتھ کیا کیا گیا۔",
            "اگر 7 اندر جائے اور 21 باہر آئے تو فنکشن ‘3 سے ضرب’ ہو سکتا ہے۔",
            "اگر 6 اندر جائے اور 12 باہر آئے تو یہ ‘2 سے ضرب’ یا ‘6 جمع’ ہو سکتا ہے۔",
            "دونوں چلتے ہیں، اس لیے اگر ہو سکے تو ایک دوسرے جوڑے سے جانچیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "A letter goes in",
          paragraphs: [
            "When the input is a letter, you cannot work out a number. Instead you write down what the machine did. Put g into a machine that adds 8 and the output is g + 8. Put k into a machine that multiplies by 11 and the output is 11k.",
            "11k means 11 × k. In algebra we leave out the × sign and write the number before the letter. We never write k11. If the input already has a number in front, multiply the numbers: 2a goes into a machine that multiplies by 3 and comes out as 6a, because 2 × 3 = 6.",
            "The letter does not disappear when you subtract. Annie puts 5y into a machine that subtracts 5 and says the output is y. That is a mistake: subtracting 5 takes away a number, not the y terms. The output is 5y − 5."
          ],
          worked: {
            q: "A machine multiplies by 4. The input is 2e + 5. What is the output?",
            steps: ["The input has two terms: 2e and 5. Multiply each one by 4.", "Multiply 2e by 4 to get 8e, because 2 × 4 = 8.", "5 × 4 = 20.", "Put the two new terms back together: 8e + 20."],
            answer: "8e + 20", check: "4 * (2*e + 5)"
          },
          tip: "A number written next to a letter means multiply, and the number always goes first."
        },
        {
          heading: "Dividing gives a fraction",
          paragraphs: [
            "Put p into a machine that divides by 5. Mo writes p ÷ 5. Dora writes p/5, a fraction with p on top and 5 underneath. Both are right, and p/5 is the way we usually write it in algebra.",
            "If the input has a number in front, divide the numbers when you can. 8w ÷ 4 is 2w, because 8 ÷ 4 = 2. If the numbers do not divide exactly, leave the fraction: 3x ÷ 4 is written 3x/4.",
            "An expression with two terms is divided term by term. 6f + 4 divided by 2 gives 3f + 2, because 6 ÷ 2 = 3 and 4 ÷ 2 = 2."
          ],
          worked: {
            q: "A machine divides by 4. The input is 12m − 20. What is the output?",
            steps: ["Divide each term by 4.", "12m ÷ 4 is 3m, because 12 ÷ 4 = 3.", "20 ÷ 4 = 5.", "The output is 3m − 5."],
            answer: "3m − 5", check: "(12*m - 20) / 4"
          },
          tip: "p/5 and p ÷ 5 mean the same thing. Read the fraction line as 'divided by'."
        },
        {
          heading: "Finding the function",
          paragraphs: [
            "Now the machine is hiding its function. You see the input and the output and must work out what happened. Compare them. Has a number been added or taken away? Has the number in front of the letter changed?",
            "If 4a goes in and 4a − 2 comes out, a number was taken away: the function is subtract 2. If 10a goes in and 5a comes out, the number in front was halved: the function is divide by 2. If 4a goes in and 8a comes out, it could be multiply by 2 or add 4a.",
            "Eva sees 6f go in and 6fg come out. She says the function is add g. But adding g would give 6f + g. Writing g next to 6f means multiplying, so the function is multiply by g. In the same way, 2x going in and 2x² coming out is multiply by x, not squaring, because squaring 2x would give 4x²."
          ],
          worked: {
            q: "The input is 3w and the output is 3w − 1. What is the function?",
            steps: ["Compare 3w with 3w − 1.", "The 3w has not changed, so nothing was multiplied or divided.", "A 1 has been taken away.", "The function is subtract 1."],
            answer: "− 1", check: "machine('3w', '− 1', '3w − 1')"
          },
          tip: "If the number in front of the letter changes, think × or ÷. If a number is added on the end, think + or −."
        }
      ],
      gate: [
        { kind: "mcq", q: "A machine multiplies by 3. The input is 2a. What is the output?", options: ["5a", "6a", "2a + 3", "23a"], answer: 1, check: "3 * (2*a)",
          feedback: [
            "You added 3 to the 2 instead of multiplying. 2a times 3 means 2 × a × 3, and 2 × 3 = 6, so the output is 6a.",
            "",
            "You added 3 on the end. The machine multiplies, so it changes the number in front of a: 2 × 3 = 6, giving 6a.",
            "You wrote the 3 next to the 2 as if they were digits of one number. Multiply them instead: 2 × 3 = 6, so the output is 6a."
          ],
          why: "Multiply the numbers: 2 × 3 = 6. The output is 6a." },
        { kind: "mcq", q: "A machine subtracts 4. The input is 4y. What is the output?", options: ["y", "4y − 4", "0", "4 − 4y"], answer: 1, check: "4*y - 4",
          feedback: [
            "Subtracting 4 takes away a number, not the y terms. 4y stays as it is and 4 is taken from it: 4y − 4.",
            "",
            "4y and 4 are not the same thing, so they do not cancel to 0. 4y means 4 lots of y. The output is 4y − 4.",
            "You have the two terms the wrong way round. We start with 4y and take 4 away from it, so the output is 4y − 4."
          ],
          why: "Taking 4 away from 4y gives 4y − 4. The y term does not change." },
        { kind: "gap", q: "The input is 9 and the output is 27. The function could be multiply by ___.", answer: "3", options: ["3", "18", "9"], check: "27 / 9",
          feedback: {
            "18": "You found what was added: 9 + 18 = 27. The question asks what 9 was multiplied by, and 9 × 3 = 27.",
            "9": "9 × 9 = 81, not 27. Ask: 9 times what makes 27?"
          },
          why: "9 × 3 = 27, so the function could be multiply by 3. It could also be add 18." }
      ],
      modules: [
        {
          title: "Multiply an expression",
          task: { kind: "mcq", q: "A machine multiplies by 4. The input is 2b + 7. What is the output?", options: ["8b + 7", "2b + 28", "8b + 28", "2b + 11"], answer: 2, check: "4 * (2*b + 7)",
                  feedback: [
                    "You multiplied the 2b by 4 but forgot the 7. Every term goes through the machine, so the 7 becomes 7 × 4 = 28.",
                    "You multiplied the 7 but not the 2b. Both terms are multiplied by 4: 2 × 4 = 8 and 7 × 4 = 28.",
                    "",
                    "You added 4 to the 7 instead of multiplying. The machine multiplies every term by 4: the output is 8b + 28."
                  ] },
          explain: "Say, in one sentence, why both terms of 2b + 7 have to change.",
          contexts: [
            { label: "Think of a number", q: "Think of a number b. Multiply it by 2 and add 7. Then multiply your whole answer by 4. Which expression gives the result?",
              why: "The whole of 2b + 7 is multiplied by 4, so both terms change: 8b + 28." },
            { label: "Cubes and counters", q: "A tray holds 2 cubes and 7 counters. Each cube is worth b. There are 4 trays the same. Which expression gives the total value?",
              why: "4 trays hold 8 cubes and 28 counters altogether, so the total is 8b + 28." }
          ],
          levels: {
            support: {
              steps: ["Write the input as two parts: 2b and 7.", "Multiply the first part by 4: 2 × 4 = 8, so 2b becomes 8b.", "Multiply the second part by 4: 7 × 4 = 28.", "Join the parts with the + sign."],
              example: { q: "A machine multiplies by 3. The input is 4c + 2. What is the output?",
                         steps: ["Two parts: 4c and 2.", "4 × 3 = 12, so 4c becomes 12c.", "2 × 3 = 6.", "The output is 12c + 6."],
                         answer: "12c + 6", check: "3 * (4*c + 2)" }
            },
            core: { hint: "Picture 2 cubes and 7 counters. What do you have after you make 4 copies?" },
            stretch: { extend: "Whitney gets 8b + 7. Use the cubes-and-counters picture to explain why her 7 is wrong, then write a one-step machine that really would turn 2b + 7 into 8b + 7." }
          },
          why: "Both terms are multiplied by 4: 2 × 4 = 8 and 7 × 4 = 28, so the output is 8b + 28."
        },
        {
          title: "Divide an expression",
          task: { kind: "mcq", q: "A machine divides by 6. The input is 12h − 18. What is the output?", options: ["2h − 18", "2h − 3", "12h − 3", "6h − 12"], answer: 1, check: "(12*h - 18) / 6",
                  feedback: [
                    "You divided the 12h but not the 18. Both terms go through the machine: 18 ÷ 6 = 3, so the output is 2h − 3.",
                    "",
                    "You divided the 18 but left the 12h alone. 12 ÷ 6 = 2, so 12h becomes 2h.",
                    "You subtracted 6 from each number instead of dividing by 6. Dividing gives 12 ÷ 6 = 2 and 18 ÷ 6 = 3."
                  ] },
          explain: "Say, in one sentence, how dividing an expression by 6 is like sharing it into 6 equal groups.",
          contexts: [
            { label: "Sharing sweets", q: "A bag holds 12h − 18 sweets. The sweets are shared equally between 6 friends. Which expression gives the number each friend gets?",
              why: "Each friend gets a sixth of the bag: 12 ÷ 6 = 2 and 18 ÷ 6 = 3, so 2h − 3 each." },
            { label: "Think of a number", q: "Think of a number h. Multiply it by 12 and subtract 18. Then divide your whole answer by 6. Which expression gives the result?",
              why: "The whole of 12h − 18 is divided by 6, so both terms are divided: 2h − 3." }
          ],
          levels: {
            support: {
              steps: ["Write the input as two parts: 12h and 18.", "Divide the first part by 6: 12 ÷ 6 = 2, so 12h becomes 2h.", "Divide the second part by 6: 18 ÷ 6 = 3.", "Keep the − sign between the parts."],
              example: { q: "A machine divides by 2. The input is 8k + 6. What is the output?",
                         steps: ["Two parts: 8k and 6.", "8 ÷ 2 = 4, so 8k becomes 4k.", "6 ÷ 2 = 3.", "The output is 4k + 3."],
                         answer: "4k + 3", check: "(8*k + 6) / 2" }
            },
            core: { hint: "Divide 12 by 6 and 18 by 6 separately." },
            stretch: { extend: "Now put 12h − 18 through a machine that divides by 5. Write the output, and explain why it looks different from the divide-by-6 answer." }
          },
          why: "Each term is divided by 6: 12 ÷ 6 = 2 and 18 ÷ 6 = 3, so the output is 2h − 3."
        },
        {
          title: "Find the function",
          task: { kind: "match", q: "Each machine has one function. Match each input and output to the function card that fits.",
                  pairs: [["6m → 6m − 3", "− 3"], ["12m → 4m", "÷ 3"], ["6m → 3m", "− 3m"], ["6m → 9m", "+ 3m"]],
                  check: "[machine('6m', '− 3', '6m − 3'), machine('12m', '÷ 3', '4m'), machine('6m', '− 3m', '3m'), machine('6m', '+ 3m', '9m')]" },
          explain: "Say, in one sentence, how you can tell the difference between subtracting 3 and subtracting 3m.",
          levels: {
            support: {
              steps: ["Compare the input and the output one pair at a time.", "If a number has appeared on the end, the function is + or − that number.", "If the number in front of m has changed, the function is × or ÷, or + or − some lots of m.", "Try the card: does it really turn the input into the output?"],
              example: { q: "The input is 5n and the output is 5n + 4. What is the function?",
                         steps: ["5n has not changed.", "A 4 has been added on the end.", "The function is add 4."],
                         answer: "+ 4", check: "machine('5n', '+ 4', '5n + 4')" }
            },
            core: { hint: "Two of the cards change the number in front of m. Which two outputs have a different number in front?" },
            stretch: { extend: "6m → 3m could also be done by a different one-step function. Write it, and explain why 6m → 6m − 3 has only one possible function card." }
          },
          why: "6m − 3 has a 3 taken off the end. Dividing 12m by 3 gives 4m. Taking 3m from 6m leaves 3m, and adding 3m to 6m gives 9m."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 3
    {
      key: "substitution-one-step", n: 3,
      title: "Substitution: one step",
      lead: "Swap the letter for its number and work out the value of a one-step expression.",
      covers: [4],
      pretext: {
        words: [
          { word: "substitute", means: "swap a letter for the number it stands for", sentence: "Substitute x = 4 into 3x to get 12." },
          { word: "value", means: "the number an expression is worth once you know the letter", sentence: "When x is 4, the value of 3x is 12." },
          { word: "cube", means: "a block that stands for the letter in a picture", sentence: "One cube is worth 4 counters." },
          { word: "counter", means: "a small disc worth 1", sentence: "Three cubes are worth 12 counters." }
        ],
        passage: [
          "A letter in maths stands for a number.",
          "To substitute means to swap the letter for its number.",
          "If x is 4, then 3x means 3 × 4.",
          "So the value of 3x is 12.",
          "Picture a cube that is worth 4 counters.",
          "Three cubes are worth 12 counters.",
          "Take care with 6g when g is 5.",
          "It does not mean 65.",
          "It means 6 × 5, which is 30.",
          "A fraction like c over 6 means c ÷ 6.",
          "If c is 12, the value of c over 6 is 2.",
          "Write the × or ÷ sign back in before you work it out."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "أن تبدّل الحرف بالعدد الذي يمثّله (substitute)",
            "العدد الذي تساويه العبارة عندما تعرف قيمة الحرف (value)",
            "قطعة مكعّبة تمثّل الحرف في الصورة (cube)",
            "قرص صغير قيمته 1 (counter)"
          ],
          "passage": [
            "الحرف في الرياضيات يمثّل عدداً.",
            "التعويض (substitute) يعني أن تبدّل الحرف بعدده.",
            "إذا كان x يساوي 4، فإن 3x تعني 3 × 4.",
            "إذن قيمة 3x هي 12.",
            "تخيّل مكعّباً قيمته 4 أقراص.",
            "ثلاثة مكعّبات قيمتها 12 قرصاً.",
            "انتبه مع 6g عندما يكون g يساوي 5.",
            "فهي لا تعني 65.",
            "بل تعني 6 × 5، أي 30.",
            "الكسر مثل c على 6 يعني c ÷ 6.",
            "إذا كان c يساوي 12، فقيمة c على 6 هي 2.",
            "أعد كتابة علامة × أو ÷ قبل أن تحسب."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "zamienić literę na liczbę, którą ona oznacza (substitute)",
            "liczba, którą jest warte wyrażenie, kiedy już znasz literę (value)",
            "klocek, który na obrazku oznacza literę (cube)",
            "mały krążek warty 1 (counter)"
          ],
          "passage": [
            "Litera w matematyce oznacza liczbę.",
            "Podstawić (substitute) znaczy zamienić literę na jej liczbę.",
            "Jeśli x wynosi 4, to 3x oznacza 3 × 4.",
            "Więc wartość 3x to 12.",
            "Wyobraź sobie klocek, który jest wart 4 krążki.",
            "Trzy klocki są warte 12 krążków.",
            "Uważaj z 6g, kiedy g wynosi 5.",
            "To nie oznacza 65.",
            "To oznacza 6 × 5, czyli 30.",
            "Ułamek taki jak c przez 6 oznacza c ÷ 6.",
            "Jeśli c wynosi 12, wartość c przez 6 to 2.",
            "Wpisz z powrotem znak × lub ÷, zanim to obliczysz."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "trocar uma letra pelo número que ela representa (substitute, substituir)",
            "o número que uma expressão vale quando você conhece a letra (value, valor)",
            "um bloco que representa a letra num desenho (cube, cubo)",
            "um pequeno disco que vale 1 (counter, ficha)"
          ],
          "passage": [
            "Uma letra em matemática representa um número.",
            "Substituir (substitute) quer dizer trocar a letra pelo seu número.",
            "Se x é 4, então 3x quer dizer 3 × 4.",
            "Por isso, o valor de 3x é 12.",
            "Imagine um cubo que vale 4 fichas.",
            "Três cubos valem 12 fichas.",
            "Tenha cuidado com 6g quando g é 5.",
            "Não quer dizer 65.",
            "Quer dizer 6 × 5, que é 30.",
            "Uma fração como c sobre 6 quer dizer c ÷ 6.",
            "Se c é 12, o valor de c sobre 6 é 2.",
            "Escreva o sinal × ou ÷ de volta antes de calcular."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "xaraf ku beddel tirada uu u taagan yahay (substitute)",
            "tirada tibaax u dhiganto markaad xarafka taqaanno (value)",
            "jajab birkeedi sawirka xarafka u taagan (cube)",
            "saxan yar oo 1 u dhigma (counter)"
          ],
          "passage": [
            "Xaraf xisaabta ku jira tiro ayuu u taagan yahay.",
            "In la beddelo (substitute) micnaheedu waa in xarafka lagu beddelo tiradiisa.",
            "Haddii x yahay 4, markaas 3x micnaheedu waa 3 × 4.",
            "Sidaas darteed qiimaha 3x waa 12.",
            "Sawir maskaxdaada cube u dhigma 4 counters.",
            "Saddex cubes waxay u dhigmaan 12 counters.",
            "Taxaddar la yeelo 6g markuu g yahay 5.",
            "Micnaheedu ma aha 65.",
            "Micnaheedu waa 6 × 5, oo ah 30.",
            "Jajab sida c oo 6 la saaray micnaheedu waa c ÷ 6.",
            "Haddii c yahay 12, qiimaha c oo 6 la saaray waa 2.",
            "Calaamadda × ama ÷ dib u qor intaadan xisaabin."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "замінити букву на число, яке вона позначає (substitute)",
            "число, якому дорівнює вираз, коли ви знаєте значення букви (value)",
            "кубик, який на малюнку позначає букву (cube)",
            "маленький кружок (фішка), який дорівнює 1 (counter)"
          ],
          "passage": [
            "Буква в математиці позначає число.",
            "Підставити (substitute) означає замінити букву на її число.",
            "Якщо x дорівнює 4, то 3x означає 3 × 4.",
            "Отже, значення 3x дорівнює 12.",
            "Уявіть кубик, який дорівнює 4 фішкам.",
            "Три кубики дорівнюють 12 фішкам.",
            "Будьте уважні з 6g, коли g дорівнює 5.",
            "Це не означає 65.",
            "Це означає 6 × 5, тобто 30.",
            "Дріб на кшталт c поділити на 6 означає c ÷ 6.",
            "Якщо c дорівнює 12, значення c поділити на 6 дорівнює 2.",
            "Поверніть знак × або ÷ на місце, перш ніж обчислювати."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "حرف کی جگہ وہ عدد رکھنا جس کے لیے وہ کھڑا ہے (substitute)",
            "وہ عدد جو عبارت کی قیمت بنتی ہے جب آپ حرف کو جان لیں (value)",
            "تصویر میں ایک بلاک جو حرف کی جگہ کھڑا ہو (cube)",
            "ایک چھوٹی گول ٹکیہ جس کی قیمت 1 ہے (counter)"
          ],
          "passage": [
            "ریاضی میں حرف کسی عدد کی جگہ کھڑا ہوتا ہے۔",
            "قیمت رکھنے (substitute) کا مطلب ہے حرف کی جگہ اس کا عدد رکھ دینا۔",
            "اگر x کی قیمت 4 ہے تو 3x کا مطلب ہے 3 × 4۔",
            "اس لیے 3x کی قیمت 12 ہے۔",
            "ایک ایسے مکعب (cube) کا تصور کریں جس کی قیمت 4 counters ہے۔",
            "تین مکعبوں کی قیمت 12 counters ہے۔",
            "6g میں احتیاط کریں جب g کی قیمت 5 ہو۔",
            "اس کا مطلب 65 نہیں ہے۔",
            "اس کا مطلب ہے 6 × 5، جو 30 ہے۔",
            "c بٹا 6 جیسی کسر کا مطلب ہے c ÷ 6۔",
            "اگر c کی قیمت 12 ہے تو c بٹا 6 کی قیمت 2 ہے۔",
            "حل کرنے سے پہلے × یا ÷ کا نشان واپس لکھ لیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Swap the letter for its number",
          paragraphs: [
            "An expression like 3x has a hidden multiplication sign: 3x means 3 × x. When you are told the value of x, you can substitute. Swap x for its number and work out the answer. If x is 4, then 3x becomes 3 × 4, which is 12.",
            "Picture a cube that stands for x. If one cube is worth 4 counters, then three cubes are worth 3 × 4 = 12 counters. Substituting is counting up what the cubes are worth.",
            "The same letter always takes the same value in one question. If c is 12, then 4c is 48, c − 7 is 5 and 15 + c is 27. Write the × back in first: 4 × 12 = 48."
          ],
          worked: {
            q: "If c = 12, work out 4c.",
            steps: ["4c means 4 × c.", "Swap c for 12: 4 × 12.", "4 × 12 = 48."],
            answer: "48", check: "4 * 12"
          },
          tip: "Write the hidden × sign back in before you substitute."
        },
        {
          heading: "Adding, subtracting and dividing",
          paragraphs: [
            "Substitution works with every operation. If w is 36, then w + 7 is 36 + 7 = 43 and w − 14 is 36 − 14 = 22.",
            "A fraction means divide. w/9 means w ÷ 9, so when w is 36 its value is 36 ÷ 9 = 4. The letter can also come second: 50 − w means 50 take away w, so its value is 50 − 36 = 14.",
            "Order matters with subtraction and division. 5 − z and z − 5 are different expressions. When z is 8, 5 − z is −3 but z − 5 is 3. Only when z is 5 are they both worth 0."
          ],
          worked: {
            q: "If w = 36, work out 50 − w.",
            steps: ["50 − w means 50 take away w.", "Swap w for 36: 50 − 36.", "50 − 36 = 14."],
            answer: "14", check: "50 - 36"
          },
          tip: "Keep the numbers in the order the expression gives them: 50 − w is 50 first."
        },
        {
          heading: "The 65 mistake",
          paragraphs: [
            "Mo is working out 6g when g is 5. He writes the 5 next to the 6 and gets 65. But 6g does not mean 'a 6 and then a g'. It means 6 × g. When g is 5, the value is 6 × 5 = 30.",
            "This mistake is easy to make because 65 looks like a number. Stop it by writing the × sign back in before you substitute: 6g, then 6 × g, then 6 × 5.",
            "Some expressions are equivalent for every value of the letter. z + 7 and 7 + z are always equal, because the order of adding does not matter. z × 2 and 2z are always equal too. But z/9 and 9z are only equal when z is 0, so they are not equivalent."
          ],
          worked: {
            q: "If t = 4, work out 18 ÷ t.",
            steps: ["Swap t for 4: 18 ÷ 4.", "18 ÷ 4 = 4.5.", "The value is 4.5, not 184."],
            answer: "4.5", check: "18 / 4"
          },
          tip: "A digit written next to a letter means multiply. Never glue the numbers together."
        }
      ],
      gate: [
        { kind: "numeric", q: "If x = 8, work out 7x.", answer: 56, tolerance: 0, units: "", check: "7 * 8",
          misconceptions: [
            { answer: 78, says: "You wrote the 7 next to the 8 to make 78. 7x means 7 × x, so work out 7 × 8 = 56.", check: "int(str(7) + str(8))" },
            { answer: 15, says: "You added 7 and 8. The hidden sign in 7x is a multiplication sign, not a plus: 7 × 8 = 56.", check: "7 + 8" }
          ],
          why: "7x means 7 × x. Swap x for 8: 7 × 8 = 56." },
        { kind: "mcq", q: "If g = 3, what does 4g mean?", options: ["4 + 3", "43", "4 × 3", "4 − 3"], answer: 2, check: "4 * 3",
          feedback: [
            "4g does not mean 4 + g. A number written next to a letter means multiply, so 4g is 4 × 3 = 12.",
            "Writing the 3 next to the 4 makes a two-digit number, but 4g is not a two-digit number. It means 4 lots of g: 4 × 3 = 12.",
            "",
            "There is no subtraction in 4g. The hidden sign is a multiplication sign: 4 × 3 = 12."
          ],
          why: "4g means 4 × g. When g is 3, that is 4 × 3 = 12." },
        { kind: "numeric", q: "If d = 40, work out d ÷ 8.", answer: 5, tolerance: 0, units: "", check: "40 / 8",
          misconceptions: [
            { answer: 320, says: "You multiplied 40 by 8. The expression says divide by 8: 40 ÷ 8 = 5.", check: "40 * 8" },
            { answer: 32, says: "You subtracted 8 from 40. The ÷ sign means divide: 40 ÷ 8 = 5.", check: "40 - 8" }
          ],
          why: "Swap d for 40: 40 ÷ 8 = 5." }
      ],
      modules: [
        {
          title: "Substitute into 9m",
          task: { kind: "numeric", q: "If m = 7, work out 9m.", answer: 63, tolerance: 0, units: "", check: "9 * 7",
                  misconceptions: [
                    { answer: 97, says: "You wrote the 9 next to the 7 to make 97. 9m means 9 × m, so work out 9 × 7 = 63.", check: "int(str(9) + str(7))" },
                    { answer: 16, says: "You added 9 and 7. The hidden sign in 9m is a multiplication sign: 9 × 7 = 63.", check: "9 + 7" },
                    { answer: 2, says: "You subtracted 7 from 9. 9m means 9 lots of m: 9 × 7 = 63.", check: "9 - 7" }
                  ] },
          explain: "Say, in one sentence, what the hidden sign in 9m is and how you know.",
          contexts: [
            { label: "Cubes and counters", q: "A cube is worth m counters. If m = 7, how many counters are 9 cubes worth?",
              why: "9 cubes are 9 lots of 7: 9 × 7 = 63 counters." },
            { label: "Money", q: "A cinema ticket costs £m. If m = 7, what do 9 tickets cost, in pounds?",
              why: "9 tickets at £7 each: 9 × 7 = 63." }
          ],
          levels: {
            support: {
              steps: ["Write the hidden × sign back in: 9m means 9 × m.", "Swap m for 7: 9 × 7.", "Work it out.", "Check it looks sensible: 9 lots of 7 is more than 60."],
              example: { q: "If k = 6, work out 8k.",
                         steps: ["8k means 8 × k.", "Swap k for 6: 8 × 6.", "8 × 6 = 48."],
                         answer: "48", check: "8 * 6" }
            },
            core: { hint: "9m means 9 × m." },
            stretch: { extend: "Mo says 9m when m = 7 is 97. Write him a two-sentence explanation that uses cubes and counters, and give an expression that really is worth 97 when m = 7." }
          },
          why: "9m means 9 × m. Swap m for 7: 9 × 7 = 63."
        },
        {
          title: "Subtract from a number",
          task: { kind: "numeric", q: "If p = 15, work out 40 − p.", answer: 25, tolerance: 0, units: "", check: "40 - 15",
                  misconceptions: [
                    { answer: 55, says: "You added 15 instead of taking it away. 40 − p means 40 take away p: 40 − 15 = 25.", check: "40 + 15" },
                    { answer: -25, says: "You took 40 away from 15. The expression starts with 40, so 40 comes first: 40 − 15 = 25.", check: "15 - 40" }
                  ] },
          explain: "Say, in one sentence, why 40 − p and p − 40 give different answers.",
          contexts: [
            { label: "Money", q: "You have £40 and spend £p on a game. If p = 15, how much money is left, in pounds?",
              why: "Start with 40 and take away 15: 40 − 15 = 25." },
            { label: "Sweets", q: "A jar holds 40 sweets. p sweets are eaten. If p = 15, how many sweets are left in the jar?",
              why: "40 take away 15: 40 − 15 = 25." }
          ],
          levels: {
            support: {
              steps: ["Read the expression in words: 40 take away p.", "Swap p for 15: 40 − 15.", "Keep 40 first. Work out 40 − 15.", "Check: the answer should be less than 40."],
              example: { q: "If q = 9, work out 20 − q.",
                         steps: ["20 − q means 20 take away q.", "Swap q for 9: 20 − 9.", "20 − 9 = 11."],
                         answer: "11", check: "20 - 9" }
            },
            core: { hint: "Which number comes first in 40 − p?" },
            stretch: { extend: "For which value of p is 40 − p equal to p − 40? Explain how you found it." }
          },
          why: "40 − p means 40 take away p. Swap p for 15: 40 − 15 = 25."
        },
        {
          title: "Always equal?",
          task: { kind: "mcq", q: "Which pair of expressions has the same value for every value of z?", options: ["z + 7 and 7 + z", "z − 5 and 5 − z", "z/9 and 9z", "z × 2 and z + 2"], answer: 0,
                  check: "[alg_equal('z + 7', '7 + z'), alg_equal('z − 5', '5 − z'), alg_equal('z/9', '9z'), alg_equal('z × 2', 'z + 2')]",
                  feedback: [
                    "",
                    "Try z = 8: 8 − 5 = 3 but 5 − 8 = −3. The order matters when you subtract, so these are only equal when z is 5.",
                    "Try z = 9: 9 ÷ 9 = 1 but 9 × 9 = 81. z/9 means divide by 9 and 9z means multiply by 9. They are only equal when z is 0.",
                    "Try z = 3: 3 × 2 = 6 but 3 + 2 = 5. Multiplying by 2 and adding 2 are different, and they only agree when z is 2."
                  ] },
          explain: "Say, in one sentence, why swapping the order is fine for adding but not for subtracting.",
          levels: {
            support: {
              steps: ["Pick a value for z, such as 3.", "Work out both expressions in the pair.", "If the two values are different, the pair is not always equal.", "If they are the same, try a second value to be sure."],
              example: { q: "If n = 4, work out 3 + n and n + 3.",
                         steps: ["3 + n becomes 3 + 4 = 7.", "n + 3 becomes 4 + 3 = 7.", "The values are the same, and they would be for any n."],
                         answer: "7, 7", check: "[3 + 4, 4 + 3]" }
            },
            core: { hint: "Try z = 8 in every pair." },
            stretch: { extend: "z/9 and 9z are equal for exactly one value of z. Find it, and explain why 5 − z and z − 5 also agree for exactly one value." }
          },
          why: "Adding in either order gives the same total, so z + 7 and 7 + z are always equal. The other pairs agree for only one value of z."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 4
    {
      key: "two-step-machines", n: 4,
      title: "Two-step function machines",
      lead: "Run two functions in a row, write the output as an expression, and work backwards to find the input.",
      covers: [5, 6],
      pretext: {
        words: [
          { word: "two-step machine", means: "a machine with two functions, one after the other", sentence: "In a two-step machine the first output becomes the second input." },
          { word: "order", means: "which function comes first", sentence: "Change the order and the output usually changes." },
          { word: "brackets", means: "the marks ( ) that group a whole expression together", sentence: "4(f + 5) means the whole of f + 5 is multiplied by 4." },
          { word: "inverse", means: "the operation that undoes another", sentence: "Use the inverse of each function to work backwards." },
          { word: "undo", means: "to reverse a step", sentence: "Undo the last function first." }
        ],
        passage: [
          "Some machines have two functions.",
          "The output of the first function becomes the input of the second.",
          "Start with 3. Multiply by 4 to get 12. Then add 5 to get 17.",
          "The order matters.",
          "Add 5 first, then multiply by 4, and you get 32 instead.",
          "With a letter it works the same way.",
          "Put f in. Add 5 to get f + 5. Then multiply by 4 to get 4(f + 5).",
          "The brackets show that the whole of f + 5 is multiplied.",
          "Multiply by 4 first and then add 5, and you get 4f + 5.",
          "To find a missing input, work backwards.",
          "Undo the second function first, then undo the first.",
          "Use the inverse of each function as you go."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "آلة فيها دالّتان، واحدة بعد الأخرى (two-step machine)",
            "أي دالّة تأتي أولاً (order)",
            "العلامتان ( ) اللتان تجمعان عبارة كاملة معاً (brackets)",
            "العملية التي تُلغي عملية أخرى (inverse)",
            "أن تعكس خطوة (undo)"
          ],
          "passage": [
            "بعض الآلات فيها دالّتان.",
            "مخرج الدالّة الأولى يصبح مدخل الدالّة الثانية.",
            "ابدأ بـ 3. اضرب في 4 لتحصل على 12. ثم أضف 5 لتحصل على 17.",
            "الترتيب مهمّ.",
            "أضف 5 أولاً، ثم اضرب في 4، فتحصل على 32 بدلاً من ذلك.",
            "مع الحرف يعمل الأمر بالطريقة نفسها.",
            "أدخل f. أضف 5 لتحصل على f + 5. ثم اضرب في 4 لتحصل على 4(f + 5).",
            "القوسان يُظهران أن f + 5 كلها مضروبة.",
            "اضرب في 4 أولاً ثم أضف 5، فتحصل على 4f + 5.",
            "لتجد مدخلاً مفقوداً، اعمل بالاتجاه المعاكس.",
            "ألغِ الدالّة الثانية أولاً، ثم ألغِ الأولى.",
            "استعمل عكس كل دالّة وأنت تتقدّم."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "maszyna z dwiema funkcjami, jedna po drugiej (two-step machine)",
            "która funkcja jest pierwsza (order)",
            "znaki ( ), które łączą całe wyrażenie w jedną grupę (brackets)",
            "działanie, które odwraca inne działanie (inverse)",
            "odwrócić krok (undo)"
          ],
          "passage": [
            "Niektóre maszyny mają dwie funkcje.",
            "Wyjście pierwszej funkcji staje się wejściem drugiej.",
            "Zacznij od 3. Pomnóż przez 4, żeby otrzymać 12. Potem dodaj 5, żeby otrzymać 17.",
            "Kolejność ma znaczenie.",
            "Najpierw dodaj 5, potem pomnóż przez 4, a otrzymasz zamiast tego 32.",
            "Z literą działa to tak samo.",
            "Włóż f. Dodaj 5, żeby otrzymać f + 5. Potem pomnóż przez 4, żeby otrzymać 4(f + 5).",
            "Nawiasy (brackets) pokazują, że mnożone jest całe f + 5.",
            "Najpierw pomnóż przez 4, a potem dodaj 5, a otrzymasz 4f + 5.",
            "Żeby znaleźć brakujące wejście, pracuj od tyłu.",
            "Najpierw odwróć drugą funkcję, potem odwróć pierwszą.",
            "Po drodze używaj odwrotności każdej funkcji."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma máquina com duas funções, uma depois da outra (two-step machine, máquina de dois passos)",
            "qual função vem primeiro (order, ordem)",
            "os sinais ( ) que agrupam uma expressão inteira (brackets, parênteses)",
            "a operação que desfaz outra (inverse, inversa)",
            "voltar atrás num passo (undo, desfazer)"
          ],
          "passage": [
            "Algumas máquinas têm duas funções.",
            "A saída da primeira função passa a ser a entrada da segunda.",
            "Comece com 3. Multiplique por 4 para obter 12. Depois some 5 para obter 17.",
            "A ordem é importante.",
            "Some 5 primeiro, depois multiplique por 4, e você obtém 32 em vez disso.",
            "Com uma letra funciona da mesma maneira.",
            "Ponha f. Some 5 para obter f + 5. Depois multiplique por 4 para obter 4(f + 5).",
            "Os parênteses (brackets) mostram que todo o f + 5 é multiplicado.",
            "Multiplique por 4 primeiro e depois some 5, e você obtém 4f + 5.",
            "Para encontrar uma entrada em falta, trabalhe ao contrário.",
            "Desfaça a segunda função primeiro, depois desfaça a primeira.",
            "Use a inversa de cada função pelo caminho."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "mishiin leh laba function, mid kadib mid (two-step machine)",
            "function-ka marka hore yimaada (order)",
            "calaamadaha ( ) oo tibaax oo dhan isku ururiya (brackets)",
            "hawsha hawl kale dib u celisa (inverse)",
            "tallaabo dib u celin (undo)"
          ],
          "passage": [
            "Mishiinnada qaar waxay leeyihiin laba function.",
            "Output-ka function-ka koowaad wuxuu noqdaa input-ka kan labaad.",
            "Ka bilow 3. 4 ku dhufo si aad u hesho 12. Kadibna 5 ku dar si aad u hesho 17.",
            "Kala horreyntu muhiim ayay tahay.",
            "Marka hore 5 ku dar, kadibna 4 ku dhufo, markaas beddelkeeda 32 ayaad heshaa.",
            "Xaraf sidaas oo kale ayuu u shaqeeyaa.",
            "Geli f. 5 ku dar si aad u hesho f + 5. Kadibna 4 ku dhufo si aad u hesho 4(f + 5).",
            "Laameyntu (brackets) waxay muujisaa in f + 5 oo dhan la dhuftay.",
            "Marka hore 4 ku dhufo kadibna 5 ku dar, markaas 4f + 5 ayaad heshaa.",
            "Si aad u hesho input maqan, dib u shaqee.",
            "Marka hore fur function-ka labaad, kadibna fur kan koowaad.",
            "Isticmaal lidka (inverse) function kasta intaad socoto."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "машина з двома функціями, одна за одною (two-step machine)",
            "яка функція йде першою (order)",
            "знаки ( ), які об’єднують увесь вираз разом (brackets)",
            "дія, яка скасовує іншу дію (inverse)",
            "повернути крок назад (undo)"
          ],
          "passage": [
            "Деякі машини мають дві функції.",
            "Вихід першої функції стає входом другої.",
            "Почніть із 3. Помножте на 4 — буде 12. Потім додайте 5 — буде 17.",
            "Порядок має значення.",
            "Спочатку додайте 5, потім помножте на 4 — і ви отримаєте вже 32.",
            "З буквою це працює так само.",
            "Введіть f. Додайте 5 — буде f + 5. Потім помножте на 4 — буде 4(f + 5).",
            "Дужки (brackets) показують, що множиться весь вираз f + 5.",
            "Спочатку помножте на 4, а потім додайте 5 — і ви отримаєте 4f + 5.",
            "Щоб знайти невідомий вхід, працюйте у зворотному напрямку.",
            "Спочатку скасуйте другу функцію, потім першу.",
            "Використовуйте обернену дію для кожної функції по черзі."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایسی مشین جس میں دو فنکشن ہوں، ایک کے بعد دوسرا (two-step machine)",
            "کون سا فنکشن پہلے آتا ہے (order)",
            "نشان ( ) جو پوری عبارت کو ایک ساتھ گروہ میں باندھتے ہیں (brackets)",
            "وہ عمل جو کسی دوسرے عمل کو الٹا دیتا ہے (inverse)",
            "کسی قدم کو الٹانا (undo)"
          ],
          "passage": [
            "کچھ مشینوں میں دو فنکشن ہوتے ہیں۔",
            "پہلے فنکشن کا آؤٹ پٹ دوسرے فنکشن کا ان پٹ بن جاتا ہے۔",
            "3 سے شروع کریں۔ 4 سے ضرب دیں تو 12 ملتا ہے۔ پھر 5 جمع کریں تو 17 ملتا ہے۔",
            "ترتیب کی اہمیت ہے۔",
            "پہلے 5 جمع کریں، پھر 4 سے ضرب دیں، تو اس کے بجائے آپ کو 32 ملتا ہے۔",
            "حرف کے ساتھ بھی یہ اسی طرح چلتا ہے۔",
            "f اندر ڈالیں۔ 5 جمع کریں تو f + 5 ملتا ہے۔ پھر 4 سے ضرب دیں تو 4(f + 5) ملتا ہے۔",
            "بریکٹ دکھاتے ہیں کہ پورے f + 5 کو ضرب دیا گیا ہے۔",
            "پہلے 4 سے ضرب دیں اور پھر 5 جمع کریں، تو آپ کو 4f + 5 ملتا ہے۔",
            "غائب ان پٹ معلوم کرنے کے لیے الٹا چلیں۔",
            "پہلے دوسرے فنکشن کو کھولیں، پھر پہلے فنکشن کو۔",
            "راستے میں ہر فنکشن کا الٹ عمل (inverse) استعمال کریں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Two functions in a row",
          paragraphs: [
            "A two-step machine has two functions, one after the other. Put the input through the first function. Take that output and put it through the second function. The number that comes out at the end is the output of the whole machine.",
            "Annie thinks of 5, multiplies by 2 and then adds 8. First 5 × 2 = 10. Then 10 + 8 = 18. Her new number is 18. Writing the middle number down keeps you safe.",
            "The order of the two functions matters. Put 40 into a machine that divides by 4 and then adds 8: 40 ÷ 4 = 10, then 10 + 8 = 18. Swap the functions round so the machine adds 8 and then divides by 4: 40 + 8 = 48, then 48 ÷ 4 = 12. Different order, different output."
          ],
          worked: {
            q: "A machine multiplies by 4, then subtracts 9. The input is 6. What is the output?",
            steps: ["First function: 6 × 4 = 24.", "The 24 goes into the second function.", "Second function: 24 − 9 = 15.", "The output is 15."],
            answer: "15", check: "6 * 4 - 9"
          },
          tip: "Always write the middle number down. It is the output of step 1 and the input of step 2."
        },
        {
          heading: "Two-step machines with letters",
          paragraphs: [
            "Put a through a machine that multiplies by 3 and then adds 4. After the first step you have 3a. After the second step you have 3a + 4. The expression records both steps in order.",
            "Now put f through a machine that adds 5 and then multiplies by 4. After the first step you have f + 5. The second step multiplies the whole of f + 5, so you need brackets: 4(f + 5). Writing 4f + 5 would mean multiply first and add 5 after, which is a different machine.",
            "Dividing works the same way. j divided by 4 and then minus 2 is j/4 − 2. But j minus 2 and then divided by 4 is (j − 2)/4: the whole of j − 2 sits on top of the fraction."
          ],
          worked: {
            q: "A machine adds 6, then multiplies by 5. The input is k. What is the output?",
            steps: ["First step: k becomes k + 6.", "The second step multiplies the whole of k + 6 by 5.", "Use brackets to keep k + 6 together: 5(k + 6)."],
            answer: "5(k + 6)", check: "5 * (k + 6)"
          },
          tip: "Multiplying or dividing after adding or subtracting? You need brackets, or the whole expression on top of the fraction."
        },
        {
          heading: "Working backwards",
          paragraphs: [
            "To find the input of a two-step machine, start from the output and work backwards. Undo the last function first, using its inverse. Then undo the first function.",
            "A machine multiplies by 3 and then adds 8. The output is 35. Undo the add 8: 35 − 8 = 27. Then undo the multiply by 3: 27 ÷ 3 = 9. The input was 9. Check forwards: 9 × 3 = 27, then 27 + 8 = 35.",
            "Dora says the input of a machine that multiplies by 4 and then adds 8 must be 9 when the output is 36, because 36 ÷ 4 = 9. She has undone the first function first. Undo the add 8 first: 36 − 8 = 28. Then 28 ÷ 4 = 7. The input was 7."
          ],
          worked: {
            q: "A machine multiplies by 3, then adds 7. The output is 25. What was the input?",
            steps: ["Undo the last function first: 25 − 7 = 18.", "Undo the first function: 18 ÷ 3 = 6.", "Check forwards: 6 × 3 = 18, then 18 + 7 = 25. The input was 6."],
            answer: "6", check: "(25 - 7) / 3"
          },
          tip: "Backwards means last step first."
        }
      ],
      gate: [
        { kind: "numeric", q: "A machine divides by 5, then adds 7. The input is 30. What is the output?", answer: 13, tolerance: 0, units: "", check: "30 / 5 + 7",
          misconceptions: [
            { answer: 2.5, says: "You added 5 and 7 first and then divided 30 by 12. Do the functions in order: 30 ÷ 5 = 6, then 6 + 7 = 13.", check: "30 / (5 + 7)" },
            { answer: 37, says: "You skipped the first function. Divide first: 30 ÷ 5 = 6, then add 7 to get 13.", check: "30 + 7" }
          ],
          why: "30 ÷ 5 = 6, then 6 + 7 = 13." },
        { kind: "mcq", q: "A machine subtracts 4, then multiplies by 3. The input is c. What is the output?", options: ["3c − 4", "3(c − 4)", "c − 12", "3c + 12"], answer: 1, check: "3 * (c - 4)",
          feedback: [
            "3c − 4 means multiply by 3 first and then take 4 away. This machine takes 4 away first, so the whole of c − 4 is multiplied: 3(c − 4).",
            "",
            "You multiplied the 4 by 3 but forgot to multiply the c. The whole of c − 4 goes through the second function, giving 3(c − 4).",
            "The sign is wrong and the order is lost. After subtracting 4 you have c − 4, and multiplying the whole of it by 3 gives 3(c − 4)."
          ],
          why: "After the first step you have c − 4. The second step multiplies all of it by 3, so brackets are needed: 3(c − 4)." },
        { kind: "gap", q: "To find the input of a two-step machine, undo the ___ function first.", answer: "second", options: ["first", "second", "middle"],
          feedback: {
            "first": "Going backwards means reversing the order. The second function was done last, so it is undone first.",
            "middle": "A two-step machine has a first function and a second function. There is no middle one. Undo the second function first, then the first."
          },
          why: "Work backwards from the output: undo the second function first, then the first." }
      ],
      modules: [
        {
          title: "Output of a two-step machine",
          task: { kind: "numeric", q: "A machine multiplies by 6, then subtracts 14. The input is 9. What is the output?", answer: 40, tolerance: 0, units: "", check: "9 * 6 - 14",
                  misconceptions: [
                    { answer: -72, says: "You worked out 6 − 14 first and then multiplied by 9. Do the functions in order: 9 × 6 = 54, then 54 − 14 = 40.", check: "9 * (6 - 14)" },
                    { answer: 1, says: "You added 6 instead of multiplying by 6. The first function is multiply: 9 × 6 = 54, then 54 − 14 = 40.", check: "9 + 6 - 14" }
                  ] },
          explain: "Say, in one sentence, what the middle number in this machine is and why you write it down.",
          contexts: [
            { label: "Think of a number", q: "Think of a number. Multiply it by 6, then subtract 14. Annie thinks of 9. What is her result?",
              why: "9 × 6 = 54, then 54 − 14 = 40." },
            { label: "Tickets", q: "Tickets cost £6 each. A group of 9 people buys tickets and uses a £14 voucher. How much do they pay altogether, in pounds?",
              why: "9 × 6 = 54 for the tickets, then take off the voucher: 54 − 14 = 40." }
          ],
          levels: {
            support: {
              steps: ["Do function 1 only: 9 × 6. Write the answer in the middle.", "That middle number is the input for function 2.", "Do function 2: take 14 away from the middle number.", "The answer from function 2 is the output."],
              example: { q: "A machine multiplies by 7, then subtracts 5. The input is 4. What is the output?",
                         steps: ["Function 1: 4 × 7 = 28. Write 28 in the middle.", "Function 2: 28 − 5 = 23.", "The output is 23."],
                         answer: "23", check: "4 * 7 - 5" }
            },
            core: { hint: "Work out 9 × 6 first and write it down." },
            stretch: { extend: "Swap the two functions round so the machine subtracts 14 first and then multiplies by 6. Work out the output for an input of 9, and explain why it is different." }
          },
          why: "Function 1: 9 × 6 = 54. Function 2: 54 − 14 = 40."
        },
        {
          title: "Write the expression",
          task: { kind: "mcq", q: "A machine multiplies by 5, then adds 8. The input is d. What is the output?", options: ["5d + 8", "5(d + 8)", "13d", "d + 40"], answer: 0, check: "5*d + 8",
                  feedback: [
                    "",
                    "5(d + 8) means add 8 first and then multiply. This machine multiplies first, so the 8 is added on at the end: 5d + 8.",
                    "5d and 8 are different kinds of term, so they cannot be joined into 13d. Keep them apart: 5d + 8.",
                    "You added 8 to d and then multiplied the 8 by 5. The machine multiplies d by 5 first, giving 5d, and then adds 8."
                  ] },
          explain: "Say, in one sentence, why 5d + 8 does not need brackets but 5(d + 8) does.",
          contexts: [
            { label: "Taxi fare", q: "A taxi charges £5 for every mile plus a fixed £8. Which expression gives the fare, in pounds, for a journey of d miles?",
              why: "d miles cost 5d, and the fixed 8 is added on: 5d + 8." },
            { label: "Think of a number", q: "Think of a number d. Multiply it by 5, then add 8. Which expression gives the result?",
              why: "Multiply first to get 5d, then add 8: 5d + 8." }
          ],
          levels: {
            support: {
              steps: ["Try it with a number first: 2 × 5 = 10, then 10 + 8 = 18.", "Now use the letter. Function 1: d × 5 gives 5d.", "Function 2: add 8 to 5d, giving 5d + 8.", "No brackets are needed, because the adding came last."],
              example: { q: "A machine multiplies by 4, then subtracts 3. The input is p. What is the output?",
                         steps: ["Function 1: p becomes 4p.", "Function 2: take 3 away, giving 4p − 3."],
                         answer: "4p − 3", check: "4*p - 3" }
            },
            core: { hint: "What is d after the first function? Then add 8 to that." },
            stretch: { extend: "Whitney and Ron put d through a machine that adds 8 first and then multiplies by 5. Whitney writes 5d + 8 and Ron writes 5(d + 8). Who is right? Explain using d = 1." }
          },
          why: "The first function turns d into 5d. The second adds 8 on the end: 5d + 8."
        },
        {
          title: "Find the input",
          task: { kind: "numeric", q: "A machine adds 5, then multiplies by 3. The output is 27. What was the input?", answer: 4, tolerance: 0, units: "", check: "27 / 3 - 5",
                  misconceptions: [
                    { answer: 14, says: "You undid the multiply by 3 but then added 5 again. Going backwards you must undo the add 5 as well: 27 ÷ 3 = 9, then 9 − 5 = 4.", check: "27 / 3 + 5" },
                    { answer: 96, says: "You ran the machine forwards with 27 as the input: 27 + 5 = 32, then 32 × 3 = 96. The 27 is the output, so work backwards instead.", check: "(27 + 5) * 3" }
                  ] },
          explain: "Say, in one sentence, why you undo the multiply by 3 before you undo the add 5.",
          contexts: [
            { label: "Think of a number", q: "Mo thinks of a number, adds 5, then multiplies by 3. His answer is 27. What number did he think of?",
              why: "Undo the × 3: 27 ÷ 3 = 9. Undo the + 5: 9 − 5 = 4." },
            { label: "Sweets", q: "Nijah has some sweets. She is given 5 more. Then her total is multiplied by 3 in a game. She now has 27 sweets. How many did she start with?",
              why: "Undo the × 3: 27 ÷ 3 = 9. Undo the + 5: 9 − 5 = 4. She started with 4." }
          ],
          levels: {
            support: {
              steps: ["Draw the machine: + 5, then × 3, output 27.", "Start at the output. Undo the last function: 27 ÷ 3.", "Undo the first function: take 5 away from that answer.", "Check by running your input forwards through the machine."],
              example: { q: "A machine multiplies by 4, then adds 1. The output is 29. What was the input?",
                         steps: ["Undo the + 1: 29 − 1 = 28.", "Undo the × 4: 28 ÷ 4 = 7.", "Check: 7 × 4 = 28, then 28 + 1 = 29. The input was 7."],
                         answer: "7", check: "(29 - 1) / 4" }
            },
            core: { hint: "Undo the × 3 first: 27 ÷ 3." },
            stretch: { extend: "Eva halves her number and then subtracts 6 to get 12.4. Find her number, and explain the order in which you undid the steps." }
          },
          why: "Undo the × 3: 27 ÷ 3 = 9. Undo the + 5: 9 − 5 = 4. Check: 4 + 5 = 9, then 9 × 3 = 27."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 5
    {
      key: "find-two-step", n: 5,
      title: "Finding a two-step function",
      lead: "Read an expression as a pair of instructions, and work out which function a machine is missing.",
      covers: [7],
      pretext: {
        words: [
          { word: "order of operations", means: "brackets first, then × and ÷, then + and −", sentence: "By the order of operations, 4 × 5 + 3 is 23, not 32." },
          { word: "instruction", means: "one step a machine does, such as add 2", sentence: "7m + 4 gives two instructions: multiply by 7, then add 4." },
          { word: "missing function", means: "a function you have to work out from the input and the output", sentence: "The missing function turns 7x into 7x − 3." },
          { word: "equivalent", means: "worth the same for every value of the letter", sentence: "2(x + 4) and 2x + 8 are equivalent." },
          { word: "one-step machine", means: "a machine with a single function", sentence: "Multiply by 2 then multiply by 6 is the same as a one-step machine that multiplies by 12." }
        ],
        passage: [
          "Sometimes a machine is missing a function.",
          "You know the input and the output.",
          "You have to work out what the machine does.",
          "If p goes in and 5p + 7 comes out, look at the output.",
          "The 5p tells you p was multiplied by 5.",
          "The + 7 tells you 7 was added after that.",
          "Brackets change the story.",
          "7(m + 5) means add 5 first, then multiply by 7.",
          "7m + 5 means multiply by 7 first, then add 5.",
          "A fraction means divide.",
          "The expression with p + 6 on top and 3 underneath means add 6, then divide by 3.",
          "Read every expression like a list of instructions."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الأقواس أولاً، ثم × و÷، ثم + و− (order of operations)",
            "خطوة واحدة تفعلها الآلة، مثل «أضف 2» (instruction)",
            "دالّة عليك أن تستنتجها من المدخل والمخرج (missing function)",
            "له القيمة نفسها لكل قيمة يأخذها الحرف (equivalent)",
            "آلة فيها دالّة واحدة (one-step machine)"
          ],
          "passage": [
            "أحياناً تكون دالّة مفقودة من الآلة.",
            "تعرف المدخل والمخرج.",
            "وعليك أن تستنتج ما تفعله الآلة.",
            "إذا دخل p وخرج 5p + 7، فانظر إلى المخرج.",
            "الجزء 5p يخبرك أن p ضُرب في 5.",
            "والجزء + 7 يخبرك أن 7 أُضيف بعد ذلك.",
            "الأقواس تغيّر القصة.",
            "7(m + 5) تعني: أضف 5 أولاً، ثم اضرب في 7.",
            "7m + 5 تعني: اضرب في 7 أولاً، ثم أضف 5.",
            "الكسر يعني القسمة.",
            "العبارة التي فيها p + 6 في الأعلى و3 في الأسفل تعني: أضف 6، ثم اقسم على 3.",
            "اقرأ كل عبارة كأنها قائمة تعليمات."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "najpierw nawiasy, potem × i ÷, potem + i − (order of operations)",
            "jeden krok, który wykonuje maszyna, na przykład „dodaj 2” (instruction)",
            "funkcja, którą musisz ustalić z wejścia i wyjścia (missing function)",
            "warte tyle samo dla każdej wartości litery (equivalent)",
            "maszyna z jedną funkcją (one-step machine)"
          ],
          "passage": [
            "Czasem w maszynie brakuje funkcji.",
            "Znasz wejście i wyjście.",
            "Musisz ustalić, co robi maszyna.",
            "Jeśli wchodzi p, a wychodzi 5p + 7, spójrz na wyjście.",
            "5p mówi ci, że p pomnożono przez 5.",
            "+ 7 mówi ci, że potem dodano 7.",
            "Nawiasy zmieniają historię.",
            "7(m + 5) oznacza: najpierw dodaj 5, potem pomnóż przez 7.",
            "7m + 5 oznacza: najpierw pomnóż przez 7, potem dodaj 5.",
            "Ułamek oznacza dzielenie.",
            "Wyrażenie z p + 6 na górze i 3 na dole oznacza: dodaj 6, potem podziel przez 3.",
            "Czytaj każde wyrażenie jak listę instrukcji."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "parênteses primeiro, depois × e ÷, depois + e − (order of operations, ordem das operações)",
            "um passo que uma máquina faz, como ‘somar 2’ (instruction, instrução)",
            "uma função que você tem de descobrir a partir da entrada e da saída (missing function, função em falta)",
            "que vale o mesmo para qualquer valor da letra (equivalent, equivalente)",
            "uma máquina com uma só função (one-step machine, máquina de um passo)"
          ],
          "passage": [
            "Às vezes falta uma função numa máquina.",
            "Você sabe a entrada e a saída.",
            "Você tem de descobrir o que a máquina faz.",
            "Se entra p e sai 5p + 7, olhe para a saída.",
            "O 5p diz que p foi multiplicado por 5.",
            "O + 7 diz que depois disso foi somado 7.",
            "Os parênteses mudam a história.",
            "7(m + 5) quer dizer: somar 5 primeiro, depois multiplicar por 7.",
            "7m + 5 quer dizer: multiplicar por 7 primeiro, depois somar 5.",
            "Uma fração quer dizer dividir.",
            "A expressão com p + 6 em cima e 3 em baixo quer dizer: somar 6, depois dividir por 3.",
            "Leia cada expressão como uma lista de instruções."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "marka hore laameyn, kadibna × iyo ÷, kadibna + iyo − (order of operations)",
            "hal tallaabo oo mishiin sameeyo, sida 2 ku dar (instruction)",
            "function aad ka soo saarto input-ka iyo output-ka (missing function)",
            "isku qiime leh qiime kasta oo xarafku qaato (equivalent)",
            "mishiin leh hal function keliya (one-step machine)"
          ],
          "passage": [
            "Mararka qaar mishiin function ayaa ka maqan.",
            "Input-ka iyo output-ka ayaad taqaannaa.",
            "Waa inaad ka soo saartaa waxa mishiinku sameeyo.",
            "Haddii p galo oo 5p + 7 soo baxo, fiiri output-ka.",
            "5p waxay kuu sheegaysaa in p 5 lagu dhuftay.",
            "+ 7 waxay kuu sheegaysaa in 7 lagu daray intaas kadib.",
            "Laameyntu sheekada way beddeshaa.",
            "7(m + 5) micnaheedu waa marka hore 5 ku dar, kadibna 7 ku dhufo.",
            "7m + 5 micnaheedu waa marka hore 7 ku dhufo, kadibna 5 ku dar.",
            "Jajab micnaheedu waa u qaybi.",
            "Tibaaxda p + 6 dusha ku leh 3-na hoosta ku leh micnaheedu waa 6 ku dar, kadibna 3 u qaybi.",
            "Tibaax kasta u akhri sida liis tilmaamo ah."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "спочатку дужки, потім × і ÷, потім + і − (order of operations)",
            "один крок, який виконує машина, наприклад «додати 2» (instruction)",
            "функція, яку треба визначити за входом і виходом (missing function)",
            "такі, що мають однакове значення для будь-якого значення букви (equivalent)",
            "машина з однією функцією (one-step machine)"
          ],
          "passage": [
            "Іноді в машині не вказано функцію.",
            "Ви знаєте вхід і вихід.",
            "Ви маєте визначити, що робить машина.",
            "Якщо входить p, а виходить 5p + 7, подивіться на вихід.",
            "5p говорить вам, що p помножили на 5.",
            "+ 7 говорить вам, що після цього додали 7.",
            "Дужки змінюють усю історію.",
            "7(m + 5) означає: спочатку додати 5, потім помножити на 7.",
            "7m + 5 означає: спочатку помножити на 7, потім додати 5.",
            "Дріб означає ділення.",
            "Вираз із p + 6 угорі та 3 унизу означає: додати 6, потім поділити на 3.",
            "Читайте кожний вираз як список інструкцій."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "پہلے بریکٹ، پھر × اور ÷، پھر + اور − (order of operations)",
            "ایک قدم جو مشین کرتی ہے، جیسے ‘2 جمع کریں’ (instruction)",
            "ایسا فنکشن جو آپ کو ان پٹ اور آؤٹ پٹ سے معلوم کرنا ہے (missing function)",
            "حرف کی ہر قیمت کے لیے برابر (equivalent)",
            "ایسی مشین جس میں صرف ایک فنکشن ہو (one-step machine)"
          ],
          "passage": [
            "کبھی کبھی مشین کا کوئی فنکشن غائب ہوتا ہے۔",
            "آپ کو ان پٹ اور آؤٹ پٹ معلوم ہیں۔",
            "آپ کو معلوم کرنا ہے کہ مشین کیا کرتی ہے۔",
            "اگر p اندر جائے اور 5p + 7 باہر آئے تو آؤٹ پٹ کو دیکھیں۔",
            "5p آپ کو بتاتا ہے کہ p کو 5 سے ضرب دیا گیا۔",
            "+ 7 آپ کو بتاتا ہے کہ اس کے بعد 7 جمع کیا گیا۔",
            "بریکٹ کہانی بدل دیتے ہیں۔",
            "7(m + 5) کا مطلب ہے پہلے 5 جمع کریں، پھر 7 سے ضرب دیں۔",
            "7m + 5 کا مطلب ہے پہلے 7 سے ضرب دیں، پھر 5 جمع کریں۔",
            "کسر کا مطلب ہے تقسیم۔",
            "جس عبارت میں اوپر p + 6 اور نیچے 3 ہو، اس کا مطلب ہے 6 جمع کریں، پھر 3 سے تقسیم کریں۔",
            "ہر عبارت کو ہدایات کی فہرست کی طرح پڑھیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Reading an expression as instructions",
          paragraphs: [
            "An expression is a record of what a machine did. 7m + 4 says: multiply m by 7, then add 4. 7(m + 4) says: add 4 to m, then multiply the whole thing by 7. The brackets tell you the adding came first.",
            "Fractions work the same way. m/7 + 4 says divide by 7, then add 4. (m + 4)/7 says add 4, then divide by 7, because the whole of m + 4 is on top.",
            "This is the order of operations at work. Without brackets, multiplying and dividing happen before adding and subtracting: 4 × 5 + 3 = 23. With brackets, the bracket comes first: 4 × (5 + 3) = 32."
          ],
          worked: {
            q: "Work out 3 × 7 + 2 and 3 × (7 + 2).",
            steps: ["Without brackets, multiply first: 3 × 7 = 21, then 21 + 2 = 23.", "With brackets, do the bracket first: 7 + 2 = 9, then 3 × 9 = 27."],
            answer: "23, 27", check: "[3 * 7 + 2, 3 * (7 + 2)]"
          },
          tip: "Read the expression from the letter outwards: what happened to m first?"
        },
        {
          heading: "Which function is missing?",
          paragraphs: [
            "Suppose x goes in, the first function is multiply by 5, and the output is 5x + 7. After the first function you have 5x. To get from 5x to 5x + 7 you add 7. The missing second function is add 7.",
            "Suppose p goes in, the output is (p + 6)/3, and the second function is missing. The first function must be add 6, because p + 6 is on top of the fraction. The whole of p + 6 was then divided by 3. The missing function is divide by 3.",
            "Max sees h go in, come out as 5h + 9, and writes the functions as ÷ 5 and − 9. He has written the inverses, the steps you would use to go backwards. The functions themselves are × 5 and + 9."
          ],
          worked: {
            q: "The input is k. The first function is multiply by 6 and the output is 6k − 5. What is the second function?",
            steps: ["After multiply by 6, k has become 6k.", "Compare 6k with the output 6k − 5.", "A 5 has been taken away, so the second function is subtract 5."],
            answer: "− 5", check: "machine('k', '× 6', '− 5', '6k − 5')"
          },
          tip: "Write the functions, not the inverses. The inverses are for going backwards."
        },
        {
          heading: "Same machine, different look",
          paragraphs: [
            "Two different-looking machines can always give the same output. Add 4 and then multiply by 2 gives 2(x + 4). Multiply by 2 and then add 8 gives 2x + 8. Try x = 1: both give 10. Try x = 5: both give 18. The two expressions are equivalent.",
            "Two multiplications can be squashed into one. Multiply by 2 and then multiply by 6 is the same as multiply by 12, because 2 × 6 = 12. Amir is right that this two-step machine can be written as a one-step machine.",
            "Watch the wording. Nijah puts x through × 5 and then 'subtracted from 20' and gets 20 − 5x. Mo says the second function is − 20, which would give 5x − 20. Those are different, so Nijah is right. 'Subtracted from 20' means 20 take away your number."
          ],
          worked: {
            q: "A machine multiplies by 2, then multiplies by 6. The input is x. Write the output as a single term.",
            steps: ["After the first step: 2x.", "Multiply 2x by 6: 2 × 6 = 12, so you have 12x.", "The same output comes from a one-step machine that multiplies by 12."],
            answer: "12x", check: "2 * 6 * x"
          },
          tip: "To test whether two machines match, put the same number through both."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which pair of functions turns m into 4m + 9?", options: ["Add 9, then multiply by 4", "Multiply by 4, then add 9", "Multiply by 9, then add 4", "Add 4, then multiply by 9"], answer: 1,
          check: "[machine('m', '+ 9', '× 4', '4m + 9'), machine('m', '× 4', '+ 9', '4m + 9'), machine('m', '× 9', '+ 4', '4m + 9'), machine('m', '+ 4', '× 9', '4m + 9')]",
          feedback: [
            "Adding 9 first and then multiplying by 4 would multiply the 9 too, giving 4(m + 9). In 4m + 9 only m has been multiplied.",
            "",
            "The 4 is in front of m, so m was multiplied by 4, not by 9. The 9 is added on the end.",
            "Adding first would need brackets, and the numbers are the wrong way round. The 4m shows multiply by 4, and the + 9 shows add 9 after."
          ],
          why: "4m shows that m was multiplied by 4. The + 9 shows that 9 was added afterwards." },
        { kind: "mcq", q: "Which expression means: add 3, then divide by 8?", options: ["x/8 + 3", "(x + 3)/8", "8(x + 3)", "x + 3/8"], answer: 1,
          check: "[machine('x', '+ 3', '÷ 8', 'x/8 + 3'), machine('x', '+ 3', '÷ 8', '(x + 3)/8'), machine('x', '+ 3', '÷ 8', '8(x + 3)'), machine('x', '+ 3', '÷ 8', 'x + 3/8')]",
          feedback: [
            "x/8 + 3 means divide by 8 first and then add 3. Adding came first here, so the whole of x + 3 must be divided.",
            "",
            "8(x + 3) means multiply by 8, not divide. The second instruction is divide by 8.",
            "x + 3/8 divides only the 3 by 8. The whole of x + 3 is divided, so x + 3 goes on top of the fraction."
          ],
          why: "Add 3 to get x + 3. Divide the whole of it by 8: (x + 3)/8." },
        { kind: "numeric", q: "Work out 6 × (4 + 5).", answer: 54, tolerance: 0, units: "", check: "6 * (4 + 5)",
          misconceptions: [
            { answer: 29, says: "You ignored the brackets and multiplied 6 by 4 first. Brackets come first: 4 + 5 = 9, then 6 × 9 = 54.", check: "6 * 4 + 5" },
            { answer: 15, says: "You added all three numbers. The 6 multiplies the bracket: 4 + 5 = 9, then 6 × 9 = 54.", check: "6 + 4 + 5" }
          ],
          why: "Brackets first: 4 + 5 = 9. Then 6 × 9 = 54." }
      ],
      modules: [
        {
          title: "Match the instructions",
          task: { kind: "match", q: "Match each expression to the instructions it gives.",
                  pairs: [["5n + 2", "multiply by 5, then add 2"], ["5(n + 2)", "add 2, then multiply by 5"], ["n/5 + 2", "divide by 5, then add 2"], ["(n + 2)/5", "add 2, then divide by 5"]],
                  check: "[machine('n', '× 5', '+ 2', '5n + 2'), machine('n', '+ 2', '× 5', '5(n + 2)'), machine('n', '÷ 5', '+ 2', 'n/5 + 2'), machine('n', '+ 2', '÷ 5', '(n + 2)/5')]" },
          explain: "Say, in one sentence, how brackets or a fraction line tell you that adding came first.",
          levels: {
            support: {
              steps: ["Start with the letter n and ask what happened to it first.", "A number in front of n, or n alone on top of a fraction, means × or ÷ came first.", "Brackets, or n + 2 on top of a fraction, mean the adding came first.", "Check each pair by following the instructions from n."],
              example: { q: "Which instructions does 3(n − 4) give?",
                         steps: ["The brackets hold n − 4, so subtract 4 came first.", "The 3 outside multiplies the whole bracket.", "Instructions: subtract 4, then multiply by 3."],
                         answer: "subtract 4, then multiply by 3", check: "machine('n', '− 4', '× 3', '3(n − 4)')" }
            },
            core: { hint: "Brackets or a fraction line that covers n + 2 mean add 2 came first." },
            stretch: { extend: "Write the instructions for 2(n − 7) and for 2n − 7, then explain to Max why they are different machines." }
          },
          why: "In 5n + 2 and n/5 + 2 the adding comes last. In 5(n + 2) and (n + 2)/5 the brackets or the fraction line show that add 2 came first."
        },
        {
          title: "Find the missing function",
          task: { kind: "mcq", q: "The input is x. The first function is multiply by 7. The output is 7x − 3. What is the second function?", options: ["Divide by 7", "Add 3", "Subtract 3", "Multiply by 3"], answer: 2,
                  check: "[machine('x', '× 7', '÷ 7', '7x − 3'), machine('x', '× 7', '+ 3', '7x − 3'), machine('x', '× 7', '− 3', '7x − 3'), machine('x', '× 7', '× 3', '7x − 3')]",
                  feedback: [
                    "Dividing by 7 is the inverse of the first function. It would take you back to x, not on to 7x − 3.",
                    "Adding 3 would give 7x + 3. The output has − 3, so 3 was taken away.",
                    "",
                    "Multiplying 7x by 3 would give 21x. The output still has 7x, so nothing more was multiplied: 3 was subtracted."
                  ] },
          explain: "Say, in one sentence, how you know the second function was a subtraction and not a division.",
          contexts: [
            { label: "Think of a number", q: "Eva thinks of a number x, multiplies it by 7, then does a second thing. Her result is 7x − 3. What was the second thing she did?",
              why: "After multiplying she has 7x. To reach 7x − 3 she must subtract 3." },
            { label: "Cubes and counters", q: "A tray holds a cube worth x. The cube is swapped for 7 cubes, then something happens to the counters. The tray is now worth 7x − 3. What happened?",
              why: "7 cubes are 7x. The − 3 shows that 3 counters were taken away." }
          ],
          levels: {
            support: {
              steps: ["After multiply by 7, the x has become 7x.", "Write 7x next to the output 7x − 3.", "What has changed? A 3 has been taken away.", "So the second function is subtract 3."],
              example: { q: "The input is y. The first function is multiply by 4. The output is 4y + 9. What is the second function?",
                         steps: ["After multiply by 4: 4y.", "Compare 4y with 4y + 9: a 9 has been added.", "The second function is add 9."],
                         answer: "+ 9", check: "machine('y', '× 4', '+ 9', '4y + 9')" }
            },
            core: { hint: "After × 7 you have 7x. What turns 7x into 7x − 3?" },
            stretch: { extend: "Max says the two functions are ÷ 7 and + 3. Explain what Max has written down instead of the functions, and when his pair would be useful." }
          },
          why: "After multiply by 7 the input has become 7x. Taking 3 away gives 7x − 3, so the second function is subtract 3."
        },
        {
          title: "Same machine or not?",
          task: { kind: "mcq", q: "Which machine always gives the same output as: add 4, then multiply by 2?", options: ["Multiply by 2, then add 4", "Multiply by 2, then add 8", "Add 8, then multiply by 2", "Add 2, then multiply by 4"], answer: 1,
                  check: "[machine('x', '× 2', '+ 4', '2(x + 4)'), machine('x', '× 2', '+ 8', '2(x + 4)'), machine('x', '+ 8', '× 2', '2(x + 4)'), machine('x', '+ 2', '× 4', '2(x + 4)')]",
                  feedback: [
                    "Try x = 1: add 4 then multiply by 2 gives 10, but multiply by 2 then add 4 gives 6. The 4 has to be doubled as well, so the second machine must add 8.",
                    "",
                    "Add 8 then multiply by 2 gives 2(x + 8), which is 2x + 16. Try x = 1: that gives 18, not 10.",
                    "Add 2 then multiply by 4 gives 4(x + 2), which is 4x + 8. Try x = 1: that gives 12, not 10."
                  ] },
          explain: "Say, in one sentence, why the 4 becomes an 8 when you swap the order of the two functions.",
          contexts: [
            { label: "Think of a number", q: "Mo thinks of a number, adds 4, then multiplies by 2. Which machine always gives the same result as Mo's?",
              why: "2(x + 4) is equivalent to 2x + 8, so multiply by 2 then add 8 always matches." },
            { label: "Party bill", q: "A café adds a £4 service charge to a bill and then charges 2 times the total for a party booking. Which machine always gives the same total?",
              why: "Doubling the whole of the bill plus 4 doubles the 4 as well, so multiply by 2 then add 8 always matches." }
          ],
          levels: {
            support: {
              steps: ["Put the same number through both machines, say 1.", "Add 4 then multiply by 2: 1 + 4 = 5, then 5 × 2 = 10.", "Try each machine in the list with 1 and see which gives 10.", "Write both outputs with x to check: 2(x + 4) and 2x + 8 are equivalent."],
              example: { q: "A machine subtracts 3, then multiplies by 5. The input is x. Write the output without brackets.",
                         steps: ["Subtract 3: x − 3.", "Multiply the whole of it by 5: 5(x − 3).", "Multiply each term by 5: 5x − 15."],
                         answer: "5x − 15", check: "5 * (x - 3)" }
            },
            core: { hint: "Try x = 1 in the machine: add 4 then multiply by 2 gives 10. Which option also gives 10?" },
            stretch: { extend: "Amir says a machine that adds 4 and then adds 9 can be written as a one-step machine. Is he right? Can the same be done for add 4 then multiply by 2? Explain." }
          },
          why: "Add 4 then multiply by 2 gives 2(x + 4). Multiplying each term by 2 gives 2x + 8, which is multiply by 2 then add 8."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 6
    {
      key: "substitution-two-step", n: 6,
      title: "Substitution: two steps",
      lead: "Substitute into expressions with two steps, keep the order of operations, and handle brackets, fractions and squares.",
      covers: [8],
      pretext: {
        words: [
          { word: "constant", means: "a term with no letter in it", sentence: "In 3y − 4 the constant is the 4." },
          { word: "order of operations", means: "brackets first, then squares, then × and ÷, then + and −", sentence: "By the order of operations, 3 × 8 − 4 is 24 − 4." },
          { word: "brackets", means: "the marks ( ) round the part you work out first", sentence: "In 4(h + 2), work out the brackets first." },
          { word: "square", means: "a number multiplied by itself, written with a small 2", sentence: "3 squared is 9, written 3²." },
          { word: "substitute", means: "swap a letter for the number it stands for", sentence: "Substitute y = 8 into 3y − 4." }
        ],
        passage: [
          "Now the expression has two steps.",
          "Take 3y − 4 when y is 8.",
          "Swap y for 8 first: 3 × 8 − 4.",
          "Multiply before you subtract.",
          "3 × 8 is 24, and 24 − 4 is 20.",
          "Brackets come first of all.",
          "Take 4(h + 2) when h is 5.",
          "Add inside the brackets: 5 + 2 is 7.",
          "Then multiply: 4 × 7 is 28.",
          "Take care with squares.",
          "4x² means 4 × x², so square first.",
          "When x is 5, that is 4 × 25, which is 100."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "حدّ ليس فيه حرف (constant)",
            "الأقواس أولاً، ثم التربيع، ثم × و÷، ثم + و− (order of operations)",
            "العلامتان ( ) حول الجزء الذي تحسبه أولاً (brackets)",
            "عدد مضروب في نفسه، يُكتب مع 2 صغيرة (square)",
            "أن تبدّل الحرف بالعدد الذي يمثّله (substitute)"
          ],
          "passage": [
            "الآن العبارة فيها خطوتان.",
            "خذ 3y − 4 عندما يكون y يساوي 8.",
            "بدّل y بـ 8 أولاً: 3 × 8 − 4.",
            "اضرب قبل أن تطرح.",
            "3 × 8 يساوي 24، و24 − 4 يساوي 20.",
            "الأقواس تأتي قبل كل شيء.",
            "خذ 4(h + 2) عندما يكون h يساوي 5.",
            "اجمع داخل القوسَين: 5 + 2 يساوي 7.",
            "ثم اضرب: 4 × 7 يساوي 28.",
            "انتبه مع التربيع (squares).",
            "4x² تعني 4 × x²، فربّع أولاً.",
            "عندما يكون x يساوي 5، يكون ذلك 4 × 25، أي 100."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "wyraz, w którym nie ma litery (constant)",
            "najpierw nawiasy, potem kwadraty, potem × i ÷, potem + i − (order of operations)",
            "znaki ( ) wokół części, którą obliczasz najpierw (brackets)",
            "liczba pomnożona przez samą siebie, zapisana z małą 2 (square)",
            "zamienić literę na liczbę, którą ona oznacza (substitute)"
          ],
          "passage": [
            "Teraz wyrażenie ma dwa kroki.",
            "Weź 3y − 4, kiedy y wynosi 8.",
            "Najpierw zamień y na 8: 3 × 8 − 4.",
            "Mnóż, zanim odejmiesz.",
            "3 × 8 to 24, a 24 − 4 to 20.",
            "Nawiasy są przed wszystkim innym.",
            "Weź 4(h + 2), kiedy h wynosi 5.",
            "Dodaj w nawiasie: 5 + 2 to 7.",
            "Potem pomnóż: 4 × 7 to 28.",
            "Uważaj z kwadratami.",
            "4x² oznacza 4 × x², więc najpierw podnieś do kwadratu.",
            "Kiedy x wynosi 5, to jest 4 × 25, czyli 100."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um termo sem nenhuma letra (constant, constante)",
            "parênteses primeiro, depois quadrados, depois × e ÷, depois + e − (order of operations, ordem das operações)",
            "os sinais ( ) à volta da parte que você calcula primeiro (brackets, parênteses)",
            "um número multiplicado por si mesmo, escrito com um 2 pequeno (square, quadrado)",
            "trocar uma letra pelo número que ela representa (substitute, substituir)"
          ],
          "passage": [
            "Agora a expressão tem dois passos.",
            "Pegue em 3y − 4 quando y é 8.",
            "Troque y por 8 primeiro: 3 × 8 − 4.",
            "Multiplique antes de subtrair.",
            "3 × 8 é 24, e 24 − 4 é 20.",
            "Os parênteses vêm antes de tudo.",
            "Pegue em 4(h + 2) quando h é 5.",
            "Some dentro dos parênteses: 5 + 2 é 7.",
            "Depois multiplique: 4 × 7 é 28.",
            "Tenha cuidado com os quadrados.",
            "4x² quer dizer 4 × x², por isso eleve ao quadrado primeiro.",
            "Quando x é 5, isso é 4 × 25, que é 100."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "xubin aan xaraf ku jirin (constant)",
            "marka hore laameyn, kadibna labajibbaaran, kadibna × iyo ÷, kadibna + iyo − (order of operations)",
            "calaamadaha ( ) ee ku wareegsan qaybta aad marka hore xisaabiso (brackets)",
            "tiro iskeed lagu dhuftay, oo lagu qoro 2 yar (square)",
            "xaraf ku beddel tirada uu u taagan yahay (substitute)"
          ],
          "passage": [
            "Hadda tibaaxdu waxay leedahay laba tallaabo.",
            "Qaado 3y − 4 markuu y yahay 8.",
            "Marka hore y ku beddel 8: 3 × 8 − 4.",
            "Ku dhufo intaadan ka jarin.",
            "3 × 8 waa 24, 24 − 4-na waa 20.",
            "Laameyntu wax walba ayay ka horreysaa.",
            "Qaado 4(h + 2) markuu h yahay 5.",
            "Laameynta gudaheeda ku dar: 5 + 2 waa 7.",
            "Kadibna ku dhufo: 4 × 7 waa 28.",
            "Taxaddar la yeelo labajibbaaranka (squares).",
            "4x² micnaheedu waa 4 × x², sidaas darteed marka hore labajibbaar.",
            "Markuu x yahay 5, taasi waa 4 × 25, oo ah 100."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "член виразу, у якому немає букви (constant)",
            "спочатку дужки, потім квадрати, потім × і ÷, потім + і − (order of operations)",
            "знаки ( ) навколо частини, яку обчислюють першою (brackets)",
            "число, помножене саме на себе, записане з маленькою 2 (square)",
            "замінити букву на число, яке вона позначає (substitute)"
          ],
          "passage": [
            "Тепер у виразі два кроки.",
            "Візьмемо 3y − 4, коли y дорівнює 8.",
            "Спочатку замініть y на 8: 3 × 8 − 4.",
            "Множте перед тим, як віднімати.",
            "3 × 8 дорівнює 24, а 24 − 4 дорівнює 20.",
            "Дужки виконують найпершими.",
            "Візьмемо 4(h + 2), коли h дорівнює 5.",
            "Додайте в дужках: 5 + 2 дорівнює 7.",
            "Потім помножте: 4 × 7 дорівнює 28.",
            "Будьте уважні з квадратами (squares).",
            "4x² означає 4 × x², тому спочатку підносьте до квадрата.",
            "Коли x дорівнює 5, це 4 × 25, тобто 100."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایسا رکن جس میں کوئی حرف نہ ہو (constant)",
            "پہلے بریکٹ، پھر مربع، پھر × اور ÷، پھر + اور − (order of operations)",
            "نشان ( ) اس حصے کے گرد جسے آپ پہلے حل کرتے ہیں (brackets)",
            "ایک عدد جو خود سے ضرب ہو، جسے چھوٹے 2 کے ساتھ لکھا جاتا ہے (square)",
            "حرف کی جگہ وہ عدد رکھنا جس کے لیے وہ کھڑا ہے (substitute)"
          ],
          "passage": [
            "اب عبارت میں دو قدم ہیں۔",
            "3y − 4 لیں جب y کی قیمت 8 ہو۔",
            "سب سے پہلے y کی جگہ 8 رکھ دیں، تو بنتا ہے: 3 × 8 − 4۔",
            "گھٹانے سے پہلے ضرب دیں۔",
            "3 × 8 برابر ہے 24 کے، اور پھر 24 − 4 برابر ہے 20 کے۔",
            "بریکٹ سب سے پہلے آتے ہیں۔",
            "4(h + 2) لیں جب h کی قیمت 5 ہو۔",
            "بریکٹ کے اندر جمع کریں: 5 + 2 برابر 7 ہے۔",
            "پھر ضرب دیں: 4 × 7 برابر 28 ہے۔",
            "مربع (square) میں احتیاط کریں۔",
            "4x² کا مطلب ہے 4 × x²، اس لیے پہلے مربع کریں۔",
            "جب x کی قیمت 5 ہو تو یہ 4 × 25 ہے، جو 100 ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Substitute, then follow the order of operations",
          paragraphs: [
            "A two-step expression needs two steps when you substitute. In 3y − 4, the y is multiplied by 3 and then 4 is taken away. Swap y for its value first. If y is 8, write 3 × 8 − 4. Multiply before you subtract: 3 × 8 = 24, then 24 − 4 = 20.",
            "A function machine helps you see the order. The input 8 goes through × 3 to make 24, then through − 4 to make 20. Writing the middle number down stops you rushing.",
            "Mo works out 3y − 4 when y is 7 and writes 37 − 4. He has glued the 3 and the 7 together. 3y means 3 × y, so he should write 3 × 7 − 4, which is 21 − 4 = 17."
          ],
          worked: {
            q: "Work out 4k − 7 when k = 8.",
            steps: ["4k means 4 × k. Swap k for 8: 4 × 8 − 7.", "Multiply first: 4 × 8 = 32.", "Then subtract: 32 − 7 = 25."],
            answer: "25", check: "4 * 8 - 7"
          },
          tip: "Substitute first, then multiply or divide, then add or subtract."
        },
        {
          heading: "Brackets and fractions",
          paragraphs: [
            "Brackets come before everything else. In 3(k + 4) with k = 8, add inside the brackets first: 8 + 4 = 12. Then multiply: 3 × 12 = 36. Compare 3k + 4 with k = 8: 3 × 8 = 24, then 24 + 4 = 28. The brackets change the answer.",
            "A fraction line works like brackets for whatever sits on top. (w + 11)/4 with w = 9 means add first: 9 + 11 = 20, then 20 ÷ 4 = 5. But w/4 + 11 means divide first: 9 ÷ 4 = 2.25, then 2.25 + 11 = 13.25.",
            "When the letter is taken away from a number, keep the number first. 100 − 4w with w = 9 is 100 − 36 = 64, because 4 × 9 = 36 is worked out before the subtraction."
          ],
          worked: {
            q: "Work out 6(p − 4) when p = 9.",
            steps: ["Swap p for 9: 6 × (9 − 4).", "Brackets first: 9 − 4 = 5.", "Then multiply: 6 × 5 = 30."],
            answer: "30", check: "6 * (9 - 4)"
          },
          tip: "If the letter is inside brackets or on top of a fraction with a number, that part is worked out first."
        },
        {
          heading: "Squares and two letters",
          paragraphs: [
            "In 4x², the small 2 belongs to the x only. It says square the x, then multiply by 4. When x is 3: 3² = 9, then 4 × 9 = 36. Ron squares the 4 as well and gets 144. That would be (4x)², a different expression.",
            "Compare 3y² and (3y)² when y is 4. In 3y², square the 4 first: 16, then 3 × 16 = 48. In (3y)², multiply first: 3 × 4 = 12, then 12² = 144.",
            "An expression can use two letters. If g is 2 and h is 6, then g + h is 8, gh means g × h and is 12, and h/g means h ÷ g and is 3. Swap the letters round and h/g becomes g/h, which is 2 ÷ 6, not 3."
          ],
          worked: {
            q: "Work out 2t² when t = 5.",
            steps: ["Swap t for 5: 2 × 5².", "Square first: 5² = 25.", "Then multiply: 2 × 25 = 50."],
            answer: "50", check: "2 * 5**2"
          },
          tip: "The small 2 only squares what it is touching. 4x² squares x, not 4x."
        }
      ],
      gate: [
        { kind: "numeric", q: "Work out 6n − 5 when n = 7.", answer: 37, tolerance: 0, units: "", check: "6 * 7 - 5",
          misconceptions: [
            { answer: 62, says: "You wrote the 6 next to the 7 to make 67, then subtracted 5. 6n means 6 × n, so work out 6 × 7 = 42, then 42 − 5 = 37.", check: "int(str(6) + str(7)) - 5" },
            { answer: 12, says: "You subtracted 5 from 7 first and then multiplied by 6. Multiply before you subtract: 6 × 7 = 42, then 42 − 5 = 37.", check: "6 * (7 - 5)" }
          ],
          why: "6 × 7 = 42, then 42 − 5 = 37." },
        { kind: "mcq", q: "Work out 3(k + 5) when k = 6.", options: ["23", "33", "18", "90"], answer: 1, check: "3 * (6 + 5)",
          feedback: [
            "You multiplied 3 by 6 and then added 5. The brackets mean add first: 6 + 5 = 11, then 3 × 11 = 33.",
            "",
            "You worked out 3 × 6 and forgot the + 5 inside the brackets. Add first: 6 + 5 = 11, then 3 × 11 = 33.",
            "You multiplied all three numbers together. Inside the brackets you add: 6 + 5 = 11, then 3 × 11 = 33."
          ],
          why: "Brackets first: 6 + 5 = 11. Then 3 × 11 = 33." },
        { kind: "numeric", q: "Work out 5a² when a = 3.", answer: 45, tolerance: 0, units: "", check: "5 * 3**2",
          misconceptions: [
            { answer: 225, says: "You squared 5a instead of a. Only the a is squared: 3² = 9, then 5 × 9 = 45.", check: "(5 * 3)**2" },
            { answer: 30, says: "You doubled instead of squaring. 3² means 3 × 3 = 9, then 5 × 9 = 45.", check: "5 * 3 * 2" }
          ],
          why: "Square first: 3² = 9. Then 5 × 9 = 45." }
      ],
      modules: [
        {
          title: "Multiply, then add",
          task: { kind: "numeric", q: "Work out 7b + 6 when b = 8.", answer: 62, tolerance: 0, units: "", check: "7 * 8 + 6",
                  misconceptions: [
                    { answer: 98, says: "You added 8 and 6 first and then multiplied by 7. Multiply before you add: 7 × 8 = 56, then 56 + 6 = 62.", check: "7 * (8 + 6)" },
                    { answer: 84, says: "You wrote the 7 next to the 8 to make 78, then added 6. 7b means 7 × b: 7 × 8 = 56, then 56 + 6 = 62.", check: "int(str(7) + str(8)) + 6" }
                  ] },
          explain: "Say, in one sentence, which step you did first and why.",
          contexts: [
            { label: "Taxi fare", q: "A taxi charges £7 for every mile plus a fixed £6. How much is a journey of 8 miles, in pounds?",
              why: "8 miles cost 7 × 8 = 56, then add the fixed 6: 56 + 6 = 62." },
            { label: "Cubes and counters", q: "A tray holds 7 cubes and 6 single counters. Each cube is worth 8 counters. How many counters is the whole tray worth?",
              why: "The cubes are worth 7 × 8 = 56 counters, and 56 + 6 = 62." }
          ],
          levels: {
            support: {
              steps: ["Swap b for 8 and write the × sign in: 7 × 8 + 6.", "Do the multiplication and write a new line: 56 + 6.", "Do the addition.", "Check against the machine: 8, then × 7 gives 56, then + 6 gives 62."],
              example: { q: "Work out 3e + 5 when e = 4.",
                         steps: ["Swap e for 4: 3 × 4 + 5.", "New line: 12 + 5.", "12 + 5 = 17."],
                         answer: "17", check: "3 * 4 + 5" }
            },
            core: { hint: "Write 7 × 8 + 6 and multiply first." },
            stretch: { extend: "Find a value of b for which 7b + 6 and 7(b + 6) differ by exactly 36. Explain why the difference is always the same." }
          },
          why: "7 × 8 = 56, then 56 + 6 = 62."
        },
        {
          title: "Brackets first",
          task: { kind: "numeric", q: "Work out 4(w − 5) when w = 9.", answer: 16, tolerance: 0, units: "", check: "4 * (9 - 5)",
                  misconceptions: [
                    { answer: 31, says: "You multiplied 4 by 9 and then subtracted 5. The brackets mean subtract first: 9 − 5 = 4, then 4 × 4 = 16.", check: "4 * 9 - 5" },
                    { answer: 56, says: "You added inside the brackets instead of subtracting. 9 − 5 = 4, then 4 × 4 = 16.", check: "4 * (9 + 5)" }
                  ] },
          explain: "Say, in one sentence, what the brackets tell you to do first.",
          contexts: [
            { label: "Tickets", q: "Each of 4 friends pays w − 5 pounds for a ticket after a discount. If w = 9, how much do they pay altogether?",
              why: "Each pays 9 − 5 = 4 pounds, and 4 × 4 = 16 altogether." },
            { label: "Think of a number", q: "Think of a number w, subtract 5, then multiply by 4. If w = 9, what is the result?",
              why: "Subtract first: 9 − 5 = 4. Then multiply: 4 × 4 = 16." }
          ],
          levels: {
            support: {
              steps: ["Swap w for 9: 4 × (9 − 5).", "Work out the brackets and write a new line: 4 × 4.", "Multiply.", "Check with a machine: 9, then − 5 gives 4, then × 4 gives 16."],
              example: { q: "Work out 3(p + 2) when p = 5.",
                         steps: ["Swap p for 5: 3 × (5 + 2).", "Brackets first: 5 + 2 = 7.", "3 × 7 = 21."],
                         answer: "21", check: "3 * (5 + 2)" }
            },
            core: { hint: "Work out 9 − 5 before you multiply." },
            stretch: { extend: "Work out 4w − 5 when w = 9 as well. Explain why the two answers are different, and write both as function machines." }
          },
          why: "Brackets first: 9 − 5 = 4. Then 4 × 4 = 16."
        },
        {
          title: "Order the expressions",
          task: { kind: "order", q: "Put these expressions in order of value, smallest first, when t = 3: 2t², 10 − t, 4(t + 1), t².",
                  items: ["10 − t", "t²", "4(t + 1)", "2t²"], check: "sorted([2 * 3**2, 10 - 3, 4 * (3 + 1), 3**2])" },
          explain: "Say, in one sentence, why 2t² is bigger than 4(t + 1) when t is 3.",
          levels: {
            support: {
              steps: ["Swap t for 3 in each expression and write the calculation.", "Work out each one, keeping the order of operations: brackets, then squares, then × and ÷, then + and −.", "Write the value under each expression.", "Order the values from smallest to greatest."],
              example: { q: "When t = 2, work out t + 6, 3t and t², then write the three values in order, smallest first.",
                         steps: ["t + 6 is 2 + 6 = 8.", "3t is 3 × 2 = 6.", "t² is 2² = 4.", "Smallest first: 4, 6, 8."],
                         answer: "4, 6, 8", check: "sorted([2 + 6, 3 * 2, 2**2])" }
            },
            core: { hint: "Work out all four values first. Remember the square comes before the multiply in 2t²." },
            stretch: { extend: "Does the order stay the same when t = 1? Try it, and explain which expression moves." }
          },
          why: "When t is 3: 10 − t is 7, t² is 9, 4(t + 1) is 16 and 2t² is 18."
        }
      ]
    }
  ],

  sources: {
    deckDump: "ma_y07_02_main.txt",
    decksUsed: [
      "01- 1-step function machine (numbers).pptx",
      "02- 1 step function machine (algebra).pptx",
      "03- Find a function (one step).pptx",
      "04- Substiution (one step).pptx",
      "05 2-step function machines (number).pptx",
      "06 2-step function machines (algebra) 1.pptx",
      "07 Find a function (two step).pptx",
      "08 Substitution (two step).pptx",
      "Support: ma_y07_02_support.txt (1-step fucntion machine (numbers); 5. 2-step function machines (number); 6. 2-step function machines (algebra); 7. Substitution (two step))"
    ],
    notes: "Lesson sequence and titles come from the eight MAIN decks, numbered 01–08 by the department. The SUPPORT dump holds four lower-tier decks (one-step machines with numbers; two-step machines with numbers; two-step machines with algebra; two-step substitution). The Support decks label every part of a machine (input, function, output), work with one operation at a time on small whole numbers, check backwards answers by running the machine forwards, name 'function 1' and 'function 2' and ask what calculation comes next, move from a number machine to the same machine with a letter ('What's the same? What's different?'), picture a letter as a cube worth so many counters, and write a substitution as two lines (3 × 4 + 5, then 12 + 5). Those features shape every `support` level: steps name the parts, do one function at a time, write the substituted line before computing, and check with the inverse; every support example is a parallel 'I do' example. Lessons 2, 3, 4 and 7 have no Support deck, so their support levels use the Main deck's own scaffolds (number first then letter, function cards, cubes and counters). All questions in this manifest use original numbers; the skills, representations (function machines, cards, cubes and counters, think-of-a-number) and misconceptions (writing 6g as 65, 5y − 5 as y, 4f + 5 for 4(f + 5), undoing the first function first, inverses written as functions, squaring 4x instead of x) are the decks' own. No slide images were available, so no number was copied from a layout-lost slide. See NOTES.md."
  }
};
