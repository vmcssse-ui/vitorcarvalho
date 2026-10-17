// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest (schema astra/2) — Maths, Year 7, Unit 10: Directed Number.
// Every numeric item carries `check`: a plain Python expression recomputed by verify.py.
//   numeric / gap      -> check evaluates to the answer
//   mcq (numbers)      -> check evaluates to the value of the one correct option
//   mcq (statements)   -> check evaluates to a list of booleans, one per option, exactly one True
//   order              -> check evaluates to the list of item values in the correct order
//   match              -> check evaluates to the list of right-hand values, pair by pair
//   worked / example   -> check evaluates to the value(s) in `answer` (True for a < / > statement)
//   misconceptions[]   -> each `check` reproduces that wrong answer from the pupil's likely working
// verify.py also recomputes every pure-arithmetic statement (=, <, >) written in prose fields,
// including feedback, misconception text, explain prompts and context variants.
// astra/2 (17 Oct 2026): misconception feedback on every mcq / gap / numeric item; `explain` on every
// module; `contexts` (same numbers, different story) on nine modules; number-line widgets; glossary
// chapters + connections; meta.spacing and meta.constellation. Lessons, chapter keys, pretext text and
// all existing questions and answers are unchanged from the astra/1 build.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["maths-directed"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "maths-directed",
    subjectKey: "maths",
    subject: "Mathematics",
    board: "KS3 (White Rose-aligned scheme)",
    spec: "KS3 National Curriculum",
    specRef: "Number: directed number",
    year: 7,
    tier: "KS3",
    title: "Directed Number",
    sub: "Year 7, Unit 10: numbers below zero, how to order them, and how to add, subtract, multiply and divide with them.",
    bigQuestion: "What happens to numbers below zero, and how do we calculate with them?",
    lessonCount: 9,
    spacing: [2, 7, 30],
    // one star per chapter, [x, y] as fractions of the plate; a symmetric arc over the top of the plate,
    // every star at least 0.3 from the centre (0.5, 0.5)
    constellation: [[0.12, 0.78], [0.27, 0.38], [0.42, 0.18], [0.58, 0.16], [0.73, 0.34], [0.88, 0.72]]
  },

  lessons: [
    { n: 1, title: "Directed number and number lines", question: "Where do negative numbers sit on a number line, and how do we read them?", keywords: ["negative number", "positive number", "number line", "integer"] },
    { n: 2, title: "Compare and order directed numbers", question: "How can you tell which of two directed numbers is greater?", keywords: ["greater than", "less than", "ascending", "descending"] },
    { n: 3, title: "Calculations that cross zero", question: "How do we add or subtract when the answer goes past zero?", keywords: ["cross zero", "partition", "difference"] },
    { n: 4, title: "Directed number and zero pairs", question: "Why are a positive counter and a negative counter together worth zero?", keywords: ["zero pair", "counter", "represent"] },
    { n: 5, title: "Add directed numbers", question: "What happens when we add a negative number?", keywords: ["add", "sum", "zero pair", "mean"] },
    { n: 6, title: "Subtract directed numbers", question: "Why does subtracting a negative number make the answer bigger?", keywords: ["subtract", "minus", "negative"] },
    { n: 7, title: "Multiply and divide directed numbers", question: "What are the sign rules for multiplying and dividing directed numbers?", keywords: ["product", "quotient", "fact family", "inverse"] },
    { n: 8, title: "Order of operations with directed numbers", question: "How do we use the order of operations when a calculation has negative numbers?", keywords: ["order of operations", "brackets", "indices", "square"] },
    { n: 9, title: "Use a calculator with directed numbers", question: "How do we enter negative numbers, brackets and squares on a calculator correctly?", keywords: ["calculator", "negative key", "brackets", "substitute"] }
  ],

  glossary: [
    { term: "directed number", means: "A number with a sign that shows its direction from zero: positive or negative.", chapter: "number-line-ordering" },
    { term: "positive number", means: "A number greater than zero.", chapter: "number-line-ordering" },
    { term: "negative number", means: "A number less than zero, written with a − sign in front, like −4.", chapter: "number-line-ordering" },
    { term: "integer", means: "A whole number. It can be positive, negative or zero.", chapter: "number-line-ordering" },
    { term: "number line", means: "A line with numbers in order and equal gaps between the marks.", chapter: "number-line-ordering" },
    { term: "ascending order", means: "In order from the smallest to the greatest.", chapter: "number-line-ordering" },
    { term: "descending order", means: "In order from the greatest to the smallest.", chapter: "number-line-ordering" },
    { term: "greater than ( > )", means: "Bigger than. The wide side of the sign faces the bigger number.", chapter: "number-line-ordering" },
    { term: "less than ( < )", means: "Smaller than. The point of the sign faces the smaller number.", chapter: "number-line-ordering" },
    { term: "zero pair", means: "One positive counter and one negative counter. Together they are worth 0.", chapter: "crossing-zero-zero-pairs" },
    { term: "difference", means: "How far apart two numbers are.", chapter: "crossing-zero-zero-pairs" },
    { term: "sum", means: "The answer when you add.", chapter: "adding" },
    { term: "mean", means: "The total of a set of numbers shared out equally: add them all, then divide by how many there are.", chapter: "adding" },
    { term: "minus", means: "The word we say for the − sign when we take away: 5 − 2 is five minus two.", chapter: "subtracting" },
    { term: "product", means: "The answer when you multiply.", chapter: "multiplying-dividing" },
    { term: "quotient", means: "The answer when you divide.", chapter: "multiplying-dividing" },
    { term: "order of operations", means: "Brackets, then indices, then × and ÷, then + and −.", chapter: "order-of-operations" },
    { term: "brackets", means: "The marks ( ) round the part you work out first, or round a negative number, like 6 + (−4).", chapter: "order-of-operations" },
    { term: "square", means: "A number multiplied by itself, written with a small 2, like (−3)².", chapter: "order-of-operations" },
    { term: "substitute", means: "To put a number in place of a letter.", chapter: "order-of-operations" }
  ],

  // Connections game: 4 groups × 4 terms, all drawn from the glossary above.
  connections: [
    { group: "Kinds of number", terms: ["directed number", "positive number", "negative number", "integer"] },
    { group: "Comparing and ordering", terms: ["ascending order", "descending order", "greater than ( > )", "less than ( < )"] },
    { group: "Names for an answer", terms: ["sum", "difference", "product", "quotient"] },
    { group: "Working out a calculation", terms: ["order of operations", "brackets", "square", "substitute"] }
  ],

  chapters: [
    // ───────────────────────────────────────────── Chapter 1
    {
      key: "number-line-ordering", n: 1,
      title: "The number line and ordering",
      lead: "See where negative numbers live, and learn to compare and order them.",
      covers: [1, 2],
      pretext: {
        words: [
          { word: "negative number", means: "a number less than zero", sentence: "−4 is a negative number." },
          { word: "positive number", means: "a number greater than zero", sentence: "7 is a positive number." },
          { word: "number line", means: "a line with numbers in order and equal gaps", sentence: "Zero sits in the middle of our number line." },
          { word: "integer", means: "a whole number: positive, negative or zero", sentence: "−3, 0 and 5 are all integers." },
          { word: "ascending", means: "going up, from smallest to greatest", sentence: "In ascending order, −6 comes before −2." }
        ],
        passage: [
          "Numbers do not stop at zero.",
          "If you keep counting back, you get to −1, −2 and −3.",
          "These are negative numbers.",
          "We say them as negative one, negative two and negative three.",
          "A number line shows numbers in order.",
          "Zero is in the middle.",
          "Positive numbers are on the right of zero.",
          "Negative numbers are on the left of zero.",
          "Numbers get bigger as you move right.",
          "Numbers get smaller as you move left.",
          "So −2 is greater than −5, because −2 is further right.",
          "A thermometer is a number line that stands up.",
          "Cold days can be below zero, like −3°C."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "عدد أصغر من الصفر (negative number)",
            "عدد أكبر من الصفر (positive number)",
            "خط عليه أعداد مرتّبة بمسافات متساوية (number line)",
            "عدد صحيح: موجب أو سالب أو صفر (integer)",
            "تصاعدي: من الأصغر إلى الأكبر (ascending)"
          ],
          "passage": [
            "الأعداد لا تتوقف عند الصفر.",
            "إذا واصلت العدّ إلى الخلف، تصل إلى −1 و −2 و −3.",
            "هذه أعداد سالبة.",
            "نقرأها: سالب واحد، وسالب اثنين، وسالب ثلاثة.",
            "خط الأعداد يعرض الأعداد بالترتيب.",
            "الصفر في المنتصف.",
            "الأعداد الموجبة على يمين الصفر.",
            "الأعداد السالبة على يسار الصفر.",
            "تكبر الأعداد كلما تحركت نحو اليمين.",
            "وتصغر الأعداد كلما تحركت نحو اليسار.",
            "لذلك −2 أكبر من −5، لأن −2 أبعد نحو اليمين.",
            "مقياس الحرارة هو خط أعداد واقف.",
            "في الأيام الباردة قد تنخفض الحرارة تحت الصفر، مثل −3°C."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "liczba mniejsza od zera (negative number, liczba ujemna)",
            "liczba większa od zera (positive number, liczba dodatnia)",
            "linia z liczbami ułożonymi po kolei, w równych odstępach (number line, oś liczbowa)",
            "liczba całkowita: dodatnia, ujemna albo zero (integer)",
            "rosnąco: od najmniejszej do największej (ascending)"
          ],
          "passage": [
            "Liczby nie kończą się na zerze.",
            "Jeśli liczysz dalej wstecz, dochodzisz do −1, −2 i −3.",
            "To są liczby ujemne.",
            "Czytamy je jako minus jeden, minus dwa i minus trzy (po angielsku: negative one, negative two, negative three).",
            "Oś liczbowa (number line) pokazuje liczby po kolei.",
            "Zero jest na środku.",
            "Liczby dodatnie są na prawo od zera.",
            "Liczby ujemne są na lewo od zera.",
            "Liczby rosną, kiedy idziesz w prawo.",
            "Liczby maleją, kiedy idziesz w lewo.",
            "Dlatego −2 jest większe od −5, bo −2 leży bardziej na prawo.",
            "Termometr to oś liczbowa ustawiona pionowo.",
            "W zimne dni temperatura może spaść poniżej zera, na przykład do −3°C."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um número menor do que zero (negative number)",
            "um número maior do que zero (positive number)",
            "uma linha com números em ordem e espaços iguais (number line, reta numérica)",
            "um número inteiro: positivo, negativo ou zero (integer)",
            "em ordem crescente, do menor para o maior (ascending)"
          ],
          "passage": [
            "Os números não param no zero.",
            "Se contar para trás sem parar, você chega a −1, −2 e −3.",
            "Esses são os números negativos.",
            "Dizemos: menos um, menos dois e menos três (em inglês: negative one, negative two, negative three).",
            "Uma reta numérica (number line) mostra os números em ordem.",
            "O zero fica no meio.",
            "Os números positivos ficam à direita do zero.",
            "Os números negativos ficam à esquerda do zero.",
            "Os números ficam maiores quando você anda para a direita.",
            "Os números ficam menores quando você anda para a esquerda.",
            "Por isso, −2 é maior do que −5, porque −2 está mais à direita.",
            "Um termómetro/termômetro é uma reta numérica na vertical.",
            "Os dias frios podem ficar abaixo de zero, como −3°C."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "tiro ka yar eber (negative number)",
            "tiro ka weyn eber (positive number)",
            "xariiq tirooyin isku xigxiga oo kala fogaan siman leh (number line)",
            "tiro dhan: togan, taban ama eber (integer)",
            "kor u socota, tan ugu yar ilaa tan ugu weyn (ascending)"
          ],
          "passage": [
            "Tirooyinka eber kuma istaagaan.",
            "Haddii aad sii wadato tirinta dib, waxaad gaartaa −1, −2 iyo −3.",
            "Kuwaas waa tirooyin taban (negative numbers).",
            "Waxaan u dhahnaa taban kow, taban laba iyo taban saddex (negative one, negative two, negative three).",
            "Xariiqda tirooyinka (number line) waxay tusaysaa tirooyinka siday u kala horreeyaan.",
            "Eber dhexda ayuu ku yaal.",
            "Tirooyinka togan (positive) waxay ku yaalliin midigta eber.",
            "Tirooyinka taban waxay ku yaalliin bidixda eber.",
            "Tirooyinku waxay sii weynaadaan markaad midig u dhaqaaqdo.",
            "Tirooyinku waxay sii yaraadaan markaad bidix u dhaqaaqdo.",
            "Sidaas darteed −2 ayaa ka weyn −5, sababtoo ah −2 ayaa midig ka sii fog.",
            "Heerkulbeegga (thermometer) waa xariiq tirooyin oo taagan.",
            "Maalmaha qabow eber ka hoos ayay noqon karaan, sida −3°C."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "число, менше за нуль",
            "число, більше за нуль",
            "лінія з числами по порядку і з рівними проміжками",
            "ціле число: додатне, від’ємне або нуль (integer)",
            "за зростанням, від найменшого до найбільшого"
          ],
          "passage": [
            "Числа не закінчуються на нулі.",
            "Якщо продовжувати рахувати назад, ви дійдете до −1, −2 і −3.",
            "Це від’ємні числа (negative numbers).",
            "Ми читаємо їх як мінус один, мінус два і мінус три (по-англійськи: negative one, negative two, negative three).",
            "Числова пряма (number line) показує числа по порядку.",
            "Нуль посередині.",
            "Додатні числа — праворуч від нуля.",
            "Від’ємні числа — ліворуч від нуля.",
            "Числа стають більшими, коли рухаєшся праворуч.",
            "Числа стають меншими, коли рухаєшся ліворуч.",
            "Тому −2 більше за −5, бо −2 стоїть далі праворуч.",
            "Термометр — це числова пряма, яка стоїть вертикально.",
            "У холодні дні температура може бути нижче нуля, наприклад −3°C."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "صفر سے چھوٹا عدد (negative number)",
            "صفر سے بڑا عدد (positive number)",
            "ایک لکیر جس پر اعداد ترتیب سے اور برابر فاصلے پر ہوں (number line)",
            "مکمل عدد: مثبت، منفی یا صفر (integer)",
            "اوپر جاتے ہوئے، سب سے چھوٹے سے سب سے بڑے تک (ascending)"
          ],
          "passage": [
            "اعداد صفر پر نہیں رکتے۔",
            "اگر آپ پیچھے گنتے جائیں تو آپ −1، −2 اور −3 تک پہنچتے ہیں۔",
            "یہ منفی اعداد (negative numbers) ہیں۔",
            "ہم انھیں منفی ایک، منفی دو اور منفی تین کہتے ہیں (انگریزی میں negative one, negative two, negative three)۔",
            "عددی لکیر (number line) اعداد کو ترتیب سے دکھاتی ہے۔",
            "صفر درمیان میں ہے۔",
            "مثبت اعداد صفر کے دائیں طرف ہیں۔",
            "منفی اعداد صفر کے بائیں طرف ہیں۔",
            "جیسے آپ دائیں جاتے ہیں، اعداد بڑے ہوتے جاتے ہیں۔",
            "جیسے آپ بائیں جاتے ہیں، اعداد چھوٹے ہوتے جاتے ہیں۔",
            "اس لیے −2، −5 سے بڑا ہے، کیونکہ −2 زیادہ دائیں طرف ہے۔",
            "تھرمامیٹر ایک کھڑی عددی لکیر ہے۔",
            "سرد دنوں میں درجہ حرارت صفر سے نیچے ہو سکتا ہے، جیسے −3°C۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Counting below zero",
          paragraphs: [
            "Think of a lift in a tall building. Floor 0 is the ground. The floors below the ground are −1, −2 and −3. Numbers carry on below zero in just the same way.",
            "When you count back from 3 you say 3, 2, 1, 0, −1, −2. Do not skip zero. Zero is a number too, and it sits between −1 and 1.",
            "A number with a minus sign in front, like −6, is a negative number. A number with no sign, like 6, is positive. Zero is neither positive nor negative."
          ],
          worked: {
            q: "Count up in ones from −4 to 2. Write every number.",
            steps: ["Start at −4.", "Move right one step at a time: −3, −2, −1.", "Remember to say zero: 0.", "Carry on: 1, 2."],
            answer: "−4, −3, −2, −1, 0, 1, 2",
            check: "list(range(-4, 2 + 1))"
          },
          // read-only line: no start / target, just something to look at while the passage is read
          widget: { type: "numberline", min: -6, max: 6, step: 1,
                    prompt: "Look at the number line. Find zero in the middle. Count back from 2: 2, 1, 0, −1, −2. Zero is a number too." },
          tip: "Mistake to avoid: jumping from −1 straight to 1. Zero always comes in between."
        },
        {
          heading: "Reading a number line and a thermometer",
          paragraphs: [
            "On a number line the gaps are always the same size. First work out what one gap is worth. Then count the gaps from zero.",
            "If a line goes from 0 to 10 in five equal gaps, each gap is worth 2. An arrow three gaps to the left of zero points to −6.",
            "A thermometer works the same way, but it stands up. Up is warmer. Down is colder. A reading below zero is a negative temperature."
          ],
          worked: {
            q: "A number line goes from 0 to 20 in four equal gaps. An arrow is two gaps to the left of 0. What number is it pointing to?",
            steps: ["Each gap is worth 20 ÷ 4 = 5.", "Two gaps to the left of zero is two steps of 5 below zero.", "0 − 5 − 5 = −10."],
            answer: "−10",
            check: "0 - 2 * (20 // 4)"
          },
          widget: { type: "numberline", min: -20, max: 20, step: 5,
                    prompt: "Each gap on this line is worth 5. Drag the counter two gaps to the left of zero.", start: 0, target: -10 },
          tip: "Always find the value of one gap before you read the arrow."
        },
        {
          heading: "Comparing and ordering",
          paragraphs: [
            "The symbol > means 'is greater than'. The symbol < means 'is less than'. The wide, open side of the sign faces the bigger number.",
            "On a number line, the number further to the right is always greater. So 3 > −7, and −2 > −5. With two negative numbers, the one closer to zero is greater.",
            "To write numbers in ascending order, start with the number furthest left on the number line. Descending order is the other way round: start with the greatest."
          ],
          worked: {
            q: "Write −3, 4, −8, 0, 1 in ascending order.",
            steps: ["Find the negative numbers: −3 and −8.", "−8 is further left than −3, so −8 comes first.", "Then zero, then the positive numbers: 1, 4."],
            answer: "−8, −3, 0, 1, 4",
            check: "sorted([-3, 4, -8, 0, 1])"
          },
          tip: "A bigger digit does not mean a bigger number when it is negative: −9 < −2."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which number is greater than −4?", options: ["−7", "−5", "−2", "−9"], answer: 2,
          check: "[x for x in [-7, -5, -2, -9] if x > -4]",
          feedback: [
            "You chose the bigger digit. 7 is bigger than 4, but −7 is further left on the number line than −4, so −7 is the smaller number.",
            "−5 is one step to the left of −4, so it is smaller than −4, not greater.",
            "",
            "−9 is the furthest left of all four numbers, so it is the smallest. With negative numbers, the bigger the digit, the smaller the number."
          ],
          why: "−2 is the closest to zero, so it is the furthest right. It is the only one greater than −4." },
        { kind: "numeric", q: "Count down in ones: 2, 1, 0, … What is the next number?", answer: -1, tolerance: 0, units: "",
          check: "0 - 1",
          misconceptions: [
            { answer: 1, says: "You reached 0 and bounced back up to 1. Counting down carries on past zero: 0, −1, −2.", check: "0 + 1" },
            { answer: -2, says: "You jumped from 0 straight to −2. Counting down in ones means one step at a time, so after 0 comes −1.", check: "0 - 2" }
          ],
          why: "After zero comes −1. Do not stop at zero." },
        { kind: "mcq", q: "Which list is in ascending order?", options: ["−1, −4, 2, 5", "−4, −1, 2, 5", "5, 2, −1, −4", "−1, −4, 5, 2"], answer: 1,
          check: "sorted([-1, -4, 2, 5])",
          feedback: [
            "You put −1 before −4 because 1 is a smaller digit than 4. On the number line −4 is further left, so −4 is the smaller number and must come first.",
            "",
            "This list is in descending order: it starts with the greatest. Ascending means smallest first, so it should start with −4.",
            "Both pairs are the wrong way round. −4 is smaller than −1, and 2 is smaller than 5."
          ],
          why: "Ascending means smallest first. −4 is further left than −1, so −4 comes first." }
      ],
      modules: [
        {
          title: "Read the number line",
          task: { kind: "numeric", q: "A number line goes from 0 to 30 in three equal gaps. An arrow is two gaps to the left of 0. What number is it pointing to?",
                  answer: -20, tolerance: 0, units: "", check: "0 - 2 * (30 // 3)",
                  misconceptions: [
                    { answer: 20, says: "You found the right distance but the wrong side. Two gaps of 10 is 20, and to the left of zero that is −20.", check: "2 * (30 // 3)" },
                    { answer: -2, says: "You counted each gap as 1. The line goes from 0 to 30 in three gaps, so one gap is worth 30 ÷ 3 = 10, not 1.", check: "0 - 2" },
                    { answer: -10, says: "You moved only one gap. One gap is worth 10, and the arrow is two gaps to the left, so it points to 2 × 10 = 20 below zero.", check: "0 - (30 // 3)" }
                  ] },
          explain: "Say, in one sentence, how you worked out what one gap on the line is worth.",
          contexts: [
            { label: "Temperature", q: "A thermometer is marked from 0°C to 30°C in three equal gaps. The liquid stops two gaps below 0°C. What temperature does it show?",
              why: "Each gap is 30 ÷ 3 = 10 degrees. Two gaps below zero is −20°C." },
            { label: "Sea level", q: "A tide scale on a harbour wall goes from 0 to 30 in three equal gaps. At low tide the water is two gaps below the zero mark. What number is the water level at?",
              why: "Each gap is 30 ÷ 3 = 10. Two gaps below the zero mark is −20." }
          ],
          levels: {
            support: {
              steps: ["Find the value of one gap: divide the length by the number of gaps.", "Count the gaps from zero.", "Left of zero means the number is negative."],
              example: { q: "A number line goes from 0 to 8 in four equal gaps. An arrow is three gaps to the left of 0. What number is it pointing to?",
                         steps: ["One gap is 8 ÷ 4 = 2.", "Three gaps of 2 is 3 × 2 = 6.", "Left of zero, so the arrow points to −6."],
                         answer: "−6", check: "0 - 3 * (8 // 4)" }
            },
            core: { hint: "Work out what one gap is worth first." },
            stretch: { extend: "Another arrow on the same line points to −35. Which two marks does it sit between, and where exactly? Explain how you know." }
          },
          why: "Each gap is 30 ÷ 3 = 10. Two gaps to the left of zero is −20."
        },
        {
          title: "Compare with < and >",
          task: { kind: "mcq", q: "Which statement is true?", options: ["−6 > −1", "−3 < −8", "−4 > −10", "0 < −2"], answer: 2,
                  check: "[-6 > -1, -3 < -8, -4 > -10, 0 < -2]",
                  feedback: [
                    "You compared the digits 6 and 1. On the number line −6 is further left than −1, so −6 is the smaller number: −6 < −1.",
                    "−3 is closer to zero than −8, so −3 is further right and is the greater number: −3 > −8.",
                    "",
                    "Zero is greater than every negative number. −2 is to the left of 0, so 0 > −2."
                  ] },
          explain: "Say, in one sentence, how a number line shows that −4 is greater than −10.",
          contexts: [
            { label: "Timeline", q: "On a timeline, years BC are written as negative numbers and a later year is further to the right. Which statement is true?",
              why: "−4 > −10 means 4 BC is later than 10 BC. On the timeline it is further right." },
            { label: "Temperature", q: "Each number is a temperature in °C. A greater number means a warmer day. Which statement is true?",
              why: "−4°C is warmer than −10°C, because it is closer to zero. So −4 > −10." },
            { label: "Bank balance", q: "Each number is a bank balance in pounds. A negative balance means money is owed. Which statement is true?",
              why: "Owing £4 leaves you better off than owing £10, so −4 > −10." }
          ],
          levels: {
            support: {
              steps: ["Picture both numbers on a number line.", "The one further right is greater.", "The wide side of the sign faces the greater number."],
              example: { q: "Write < or > between −9 and −3.",
                         steps: ["−3 is closer to zero, so it is further right.", "So −3 is the greater number.", "The wide side of the sign faces −3."],
                         answer: "−9 < −3", check: "-9 < -3" }
            },
            core: { hint: "With two negative numbers, the one closer to zero is greater." },
            stretch: { extend: "Max says −7 is greater than 3, because 7 is bigger than 3. Explain his mistake using a number line." }
          },
          why: "−4 is closer to zero than −10, so −4 is further right and greater. The other three statements are false."
        },
        {
          title: "Order directed numbers",
          task: { kind: "order", q: "Put these numbers in ascending order (smallest first): −1, 6, −9, 0, −5.",
                  items: ["−9", "−5", "−1", "0", "6"], check: "sorted([-1, 6, -9, 0, -5])" },
          explain: "Say, in one sentence, why −9 comes before −5 even though 9 is a bigger digit.",
          contexts: [
            { label: "Temperature", q: "These are midday temperatures in °C in different cities: −1, 6, −9, 0, −5. Put them in ascending order, coldest first." },
            { label: "Lift floors", q: "A lift stops at floors −1, 6, −9, 0, −5. Put the floors in ascending order, lowest first." },
            { label: "Golf scores", q: "In golf, a score under par is negative. A golfer's scores are −1, 6, −9, 0, −5. Put them in ascending order, lowest score first." }
          ],
          levels: {
            support: {
              steps: ["Find the negative numbers first.", "The negative number with the biggest digit is the smallest.", "Then zero, then the positive numbers from smallest to greatest."],
              example: { q: "Put −2, 3, −7, 1 in ascending order.",
                         steps: ["The negatives are −2 and −7. −7 is further left.", "So start with −7, then −2.", "Then 1, then 3."],
                         answer: "−7, −2, 1, 3", check: "sorted([-2, 3, -7, 1])" }
            },
            core: { hint: "Picture the number line: the number furthest left goes first." },
            stretch: { extend: "Now write the same five numbers in descending order. What do you notice about the two lists?" }
          },
          why: "On the number line −9 is furthest left and 6 is furthest right, so the order is −9, −5, −1, 0, 6."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 2
    {
      key: "crossing-zero-zero-pairs", n: 2,
      title: "Crossing zero and zero pairs",
      lead: "Use jumps on a number line and counters to work out sums that go past zero.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "cross zero", means: "to go past zero on the number line", sentence: "4 − 7 crosses zero, so the answer is negative." },
          { word: "counter", means: "a small disc worth 1 or −1", sentence: "Each positive counter is worth 1." },
          { word: "zero pair", means: "one positive and one negative counter, worth 0 together", sentence: "A 1 counter and a −1 counter make a zero pair." },
          { word: "difference", means: "how far apart two numbers are", sentence: "The difference between −2 and 3 is 5." },
          { word: "partition", means: "to split a number into parts", sentence: "Partition 7 into 4 and 3 to get to zero first." }
        ],
        passage: [
          "Some sums go past zero.",
          "We say they cross zero.",
          "Start at 4 and take away 7.",
          "Take away 4 to get to zero.",
          "You still have 3 more to take.",
          "So the answer is −3.",
          "Counters can help too.",
          "A positive counter is worth 1.",
          "A negative counter is worth −1.",
          "Put one of each together and they are worth zero.",
          "This is called a zero pair.",
          "Take away the zero pairs and count what is left."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "تجاوُز الصفر على خط الأعداد (cross zero)",
            "قرص صغير قيمته 1 أو −1 (counter)",
            "قرص موجب وقرص سالب، قيمتهما معاً 0 (zero pair)",
            "مقدار البُعد بين عددين (difference)",
            "تجزئة عدد إلى أجزاء (partition)"
          ],
          "passage": [
            "بعض العمليات الحسابية تتجاوز الصفر.",
            "نقول إنها تعبر الصفر.",
            "ابدأ من 4 واطرح 7.",
            "اطرح 4 لتصل إلى الصفر.",
            "لا يزال عليك أن تطرح 3 أخرى.",
            "إذن الجواب هو −3.",
            "الأقراص (counters) تساعد أيضاً.",
            "القرص الموجب قيمته 1.",
            "القرص السالب قيمته −1.",
            "ضع واحداً من كل نوع معاً فتكون قيمتهما صفراً.",
            "هذا يُسمّى زوجاً صفرياً (zero pair).",
            "أزِل الأزواج الصفرية وعُدّ ما تبقّى."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "przejść przez zero na osi liczbowej (cross zero)",
            "mały krążek o wartości 1 albo −1 (counter, żeton)",
            "jeden żeton dodatni i jeden ujemny, razem warte 0 (zero pair)",
            "jak daleko od siebie leżą dwie liczby (difference, różnica)",
            "rozbić liczbę na części (partition)"
          ],
          "passage": [
            "Niektóre działania przechodzą przez zero.",
            "Mówimy, że przekraczają zero (cross zero).",
            "Zacznij od 4 i odejmij 7.",
            "Odejmij 4, żeby dojść do zera.",
            "Zostało ci jeszcze 3 do odjęcia.",
            "Więc odpowiedź to −3.",
            "Żetony też mogą pomóc.",
            "Żeton dodatni jest wart 1.",
            "Żeton ujemny jest wart −1.",
            "Połóż jeden i drugi razem, a będą warte zero.",
            "Nazywamy to parą zerową (zero pair).",
            "Zabierz pary zerowe i policz, co zostało."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "passar pelo zero na reta numérica (cross zero)",
            "um pequeno disco que vale 1 ou −1 (counter, ficha)",
            "uma ficha positiva e uma ficha negativa, que juntas valem 0 (zero pair)",
            "a distância entre dois números (difference)",
            "dividir um número em partes (partition)"
          ],
          "passage": [
            "Algumas contas passam pelo zero.",
            "Dizemos que elas cruzam o zero (cross zero).",
            "Comece em 4 e tire 7.",
            "Tire 4 para chegar ao zero.",
            "Ainda faltam 3 para tirar.",
            "Por isso, a resposta é −3.",
            "As fichas (counters) também podem ajudar.",
            "Uma ficha positiva vale 1.",
            "Uma ficha negativa vale −1.",
            "Junte uma de cada, e as duas valem zero.",
            "Isso tem o nome de par zero (zero pair).",
            "Tire os pares zero e conte o que sobra."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "in eber la dhaafo xariiqda tirooyinka (cross zero)",
            "goobaab yar oo u dhiganta 1 ama −1 (counter)",
            "hal counter togan iyo hal taban, oo wadajir u dhigma 0 (zero pair)",
            "inta laba tiro kala fog yihiin (difference)",
            "in tiro loo kala qaybiyo qaybo (partition)"
          ],
          "passage": [
            "Xisaabaadka qaarkood eber ayay dhaafaan.",
            "Waxaan dhahnaa eber ayay ka gudbaan (cross zero).",
            "Ka bilow 4 oo ka jar 7.",
            "Ka jar 4 si aad eber u gaarto.",
            "Weli waxaa kuu haray 3 kale oo aad jarto.",
            "Sidaas darteed jawaabtu waa −3.",
            "Counters-ka sidoo kale waxay ku caawin karaan.",
            "Counter togan wuxuu u dhigmaa 1.",
            "Counter taban wuxuu u dhigmaa −1.",
            "Mid nooc kasta isku dar, waxay u dhigmaan eber.",
            "Tan waxaa la yiraahdaa zero pair (lammaane eber).",
            "Ka saar lammaanayaasha eber oo tiri waxa haray."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "перейти через нуль на числовій прямій",
            "маленький кружок (фішка), який означає 1 або −1",
            "одна додатна і одна від’ємна фішка, які разом дають 0",
            "наскільки далеко одне число від іншого",
            "розбити число на частини"
          ],
          "passage": [
            "Деякі приклади переходять через нуль.",
            "Ми кажемо, що вони перетинають нуль (cross zero).",
            "Почніть із 4 і відніміть 7.",
            "Відніміть 4, щоб дійти до нуля.",
            "Залишається відняти ще 3.",
            "Отже, відповідь −3.",
            "Фішки (counters) також можуть допомогти.",
            "Додатна фішка означає 1.",
            "Від’ємна фішка означає −1.",
            "Покладіть їх разом по одній — і вони дають нуль.",
            "Це називається нульова пара (zero pair).",
            "Заберіть нульові пари і порахуйте, що залишилося."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "عددی لکیر پر صفر سے آگے نکل جانا (cross zero)",
            "ایک چھوٹی گول ٹکیہ جس کی قیمت 1 یا −1 ہو (counter)",
            "ایک مثبت اور ایک منفی counter، جو مل کر 0 کے برابر ہوں (zero pair)",
            "دو اعداد کے درمیان کتنا فاصلہ ہے (difference)",
            "کسی عدد کو حصوں میں تقسیم کرنا (partition)"
          ],
          "passage": [
            "کچھ سوال صفر سے آگے نکل جاتے ہیں۔",
            "ہم کہتے ہیں کہ وہ صفر کو پار کرتے ہیں (cross zero)۔",
            "4 سے شروع کریں اور 7 گھٹائیں۔",
            "صفر تک پہنچنے کے لیے 4 گھٹائیں۔",
            "ابھی آپ کو 3 اور گھٹانے ہیں۔",
            "اس لیے جواب −3 ہے۔",
            "گول ٹکیاں (counters) بھی مدد کر سکتی ہیں۔",
            "ایک مثبت counter کی قیمت 1 ہے۔",
            "ایک منفی counter کی قیمت −1 ہے۔",
            "ایک ایک کو ساتھ رکھیں تو ان کی قیمت صفر ہو جاتی ہے۔",
            "اسے zero pair کہتے ہیں۔",
            "zero pairs کو ہٹا دیں اور جو باقی بچے اسے گنیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Jumping across zero",
          paragraphs: [
            "When a calculation crosses zero, split the jump into two parts. First jump to zero. Then jump the rest of the way.",
            "For 2 − 6, jump 2 to reach zero. You still need to take away 4 more. So you land on −4.",
            "For −5 + 8, jump 5 to reach zero. You still need to add 3 more. So you land on 3."
          ],
          worked: {
            q: "Work out 3 − 8.",
            steps: ["How far is 3 from zero? It is 3 away.", "Take 3 to reach zero: 3 − 3 = 0.", "8 − 3 = 5, so take 5 more.", "0 − 5 = −5."],
            answer: "−5", check: "3 - 8"
          },
          widget: { type: "numberline", min: -10, max: 10, step: 1,
                    prompt: "Drag the counter to show 3 − 8. Start at 3, jump 3 to reach zero, then jump 5 more.", start: 3, target: -5 },
          tip: "Ask two questions: how far is it to zero? How much is left?"
        },
        {
          heading: "Temperatures that cross zero",
          paragraphs: [
            "A thermometer is a number line that stands up. If the temperature rises, move up. If it falls, move down.",
            "If it is 2°C and the temperature falls by 5 degrees, you go down 2 to reach 0°C. Then you go down 3 more. The new temperature is −3°C.",
            "The difference between two temperatures is how many degrees apart they are. From −4°C up to 3°C is 4 degrees to zero, then 3 more. That is 7 degrees."
          ],
          worked: {
            q: "It is −6°C. The temperature rises by 9 degrees. What is the new temperature?",
            steps: ["−6°C is 6 degrees below zero.", "Rise 6 degrees to reach 0°C.", "9 − 6 = 3, so rise 3 more.", "−6 + 9 = 3."],
            answer: "3°C", check: "-6 + 9"
          },
          widget: { type: "numberline", min: -10, max: 10, step: 1,
                    prompt: "Drag the counter to show −6 + 9. Start at −6, rise 6 to reach zero, then rise 3 more.", start: -6, target: 3 },
          tip: "Going up a thermometer means adding. Going down means subtracting."
        },
        {
          heading: "Zero pairs",
          paragraphs: [
            "We can show numbers with double-sided counters. One side is positive and worth 1. The other side is negative and worth −1.",
            "A positive counter and a negative counter together make a zero pair: 1 + (−1) = 0. Zero pairs cancel out, so we can take them away without changing the value.",
            "To find the value of a set of counters, match up the zero pairs. Then count what is left over. With 5 positive and 8 negative counters, there are 5 zero pairs and 3 negative counters left. The value is −3."
          ],
          worked: {
            q: "There are 7 positive counters and 4 negative counters. What value do they show?",
            steps: ["Match the counters into zero pairs: there are 4 pairs.", "The pairs are worth 0, so take them away.", "7 − 4 = 3 positive counters are left.", "The value is 3."],
            answer: "3", check: "7 - 4"
          },
          tip: "Zero pairs do not change the value. Together they are worth nothing."
        }
      ],
      gate: [
        { kind: "numeric", q: "Work out 5 − 9.", answer: -4, tolerance: 0, units: "", check: "5 - 9",
          misconceptions: [
            { answer: 4, says: "You worked out 9 − 5 and lost the sign. Start at 5 and move 9 to the left: you cross zero and land on −4.", check: "9 - 5" },
            { answer: -14, says: "You added 5 and 9 and made the answer negative. Subtracting 9 from 5 only takes you 4 past zero: 5 − 9 = −4.", check: "-(5 + 9)" }
          ],
          why: "Take 5 to reach zero, then 4 more. You land on −4." },
        { kind: "numeric", q: "Work out −3 + 10.", answer: 7, tolerance: 0, units: "", check: "-3 + 10",
          misconceptions: [
            { answer: -13, says: "You moved left instead of right: −3 − 10 = −13. Adding a positive number moves you to the right, so from −3 you go up past zero.", check: "-3 - 10" },
            { answer: -7, says: "You found the right distance but kept the sign of −3. From −3, 3 steps reach zero and 7 more steps land on positive 7.", check: "-(10 - 3)" },
            { answer: 13, says: "You added 3 and 10 as if both were positive. The start number is −3, so 3 of the 10 steps are used up reaching zero.", check: "3 + 10" }
          ],
          why: "Add 3 to reach zero, then 7 more. You land on 7." },
        { kind: "mcq", q: "Which set of counters is worth zero?",
          options: ["3 positive and 2 negative", "4 positive and 4 negative", "5 positive and 1 negative", "2 positive and 6 negative"], answer: 1,
          check: "[p - n == 0 for p, n in [(3, 2), (4, 4), (5, 1), (2, 6)]]",
          feedback: [
            "3 positive and 2 negative make 2 zero pairs, with one positive counter left over. The value is 1, not 0.",
            "",
            "Only one zero pair can be made here, and 4 positive counters are left. The value is 4.",
            "2 zero pairs can be made, and 4 negative counters are left. The value is −4."
          ],
          why: "Equal numbers of positive and negative counters make only zero pairs, so the value is 0." }
      ],
      modules: [
        {
          title: "Calculations that cross zero",
          task: { kind: "numeric", q: "Work out 6 − 13.", answer: -7, tolerance: 0, units: "", check: "6 - 13",
                  misconceptions: [
                    { answer: 7, says: "You worked out 13 − 6 and lost the sign. You start at 6 and take away more than 6, so the answer must be below zero.", check: "13 - 6" },
                    { answer: -19, says: "You added 6 and 13 and made the answer negative. Taking 13 from 6 uses 6 steps to reach zero and only 7 more past it.", check: "-(6 + 13)" }
                  ] },
          explain: "Say, in one sentence, why it helps to jump to zero first when you take 13 from 6.",
          contexts: [
            { label: "Temperature", q: "It is 6°C. The temperature falls by 13 degrees. What is the new temperature, in °C?",
              why: "Fall 6 degrees to reach 0°C, then 7 more: 6 − 13 = −7, so it is −7°C." },
            { label: "Bank balance", q: "You have £6 in your account. You spend £13 from the account. What is your balance now, in pounds? A negative answer means you owe money.",
              why: "The £6 covers £6 of the £13. The other £7 is owed, so the balance is −7." },
            { label: "Sea level", q: "A bird is 6 m above sea level. It dives 13 m straight down. How many metres above sea level is it now? A negative answer means below sea level.",
              why: "It drops 6 m to reach sea level, then 7 m more: 6 − 13 = −7, so it is 7 m below." }
          ],
          levels: {
            support: {
              steps: ["How far is the first number from zero?", "Jump to zero first.", "Work out how much of the jump is left.", "Jump that far past zero."],
              example: { q: "Work out 4 − 9.",
                         steps: ["4 is 4 away from zero.", "Take 4 to reach zero.", "9 − 4 = 5 left to take away.", "0 − 5 = −5."],
                         answer: "−5", check: "4 - 9" }
            },
            core: { hint: "Partition 13 into 6 and 7." },
            stretch: { extend: "Write two different calculations that start with a positive number, cross zero and land on −7. Explain how you made them." }
          },
          why: "Take 6 to reach zero, then 7 more: 6 − 13 = −7."
        },
        {
          title: "Temperature change",
          task: { kind: "numeric", q: "At midnight it was −8°C. By noon the temperature had risen by 11 degrees. What was the temperature at noon?",
                  answer: 3, tolerance: 0, units: "°C", check: "-8 + 11",
                  misconceptions: [
                    { answer: -19, says: "You went down instead of up: −8 − 11 = −19. The temperature rose, so add 11 and move up the thermometer.", check: "-8 - 11" },
                    { answer: -3, says: "You found the right distance but kept the minus sign. Rising 8 degrees reaches 0°C, and the other 3 degrees take you above zero.", check: "-(11 - 8)" },
                    { answer: 19, says: "You added 8 and 11 as if it started at 8°C. It started at −8°C, so 8 of the 11 degrees are used up reaching zero.", check: "8 + 11" }
                  ] },
          explain: "Say, in one sentence, how you knew the answer would be above zero before you worked it out.",
          levels: {
            support: {
              steps: ["Picture a thermometer.", "Rising means going up, so add.", "Count up to zero first, then count on."],
              example: { q: "It was −5°C. It warmed up by 7 degrees. What is the temperature now?",
                         steps: ["Rise 5 degrees to reach 0°C.", "7 − 5 = 2, so rise 2 more.", "−5 + 7 = 2."],
                         answer: "2°C", check: "-5 + 7" }
            },
            core: { hint: "How many degrees is it from −8°C up to 0°C?" },
            stretch: { extend: "In the evening the temperature drops by 6 degrees from the noon temperature. What is the new temperature? Explain why this change crosses zero." }
          },
          why: "From −8°C it is 8 degrees up to zero, then 3 more: −8 + 11 = 3. It was 3°C at noon."
        },
        {
          title: "The value of a set of counters",
          task: { kind: "numeric", q: "A bag has 6 positive counters and 11 negative counters. What value do they show?",
                  answer: -5, tolerance: 0, units: "", check: "6 - 11",
                  misconceptions: [
                    { answer: 5, says: "You counted the 5 counters left over but forgot their sign. The counters left are negative, so the value is −5.", check: "11 - 6" },
                    { answer: 17, says: "You counted every counter: 6 + 11 = 17. Positive and negative counters cancel in zero pairs, so match them up first and count only what is left.", check: "6 + 11" }
                  ] },
          explain: "Say, in one sentence, why taking away the zero pairs does not change the value of the bag.",
          levels: {
            support: {
              steps: ["Pair each positive counter with a negative one.", "Count the pairs: they are worth 0.", "Count the counters left over and give them their sign."],
              example: { q: "There are 3 positive counters and 7 negative counters. What value do they show?",
                         steps: ["3 zero pairs can be made.", "7 − 3 = 4 negative counters are left.", "The value is −4."],
                         answer: "−4", check: "3 - 7" }
            },
            core: { hint: "How many zero pairs can you make?" },
            stretch: { extend: "Nijah says 6 positive and 4 negative counters show 10. Is she right? Explain using zero pairs." }
          },
          why: "There are 6 zero pairs. 11 − 6 = 5 negative counters are left over, so the value is −5."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 3
    {
      key: "adding", n: 3,
      title: "Adding directed numbers",
      lead: "Add positive and negative numbers, and see why adding a negative makes a number smaller.",
      covers: [5],
      pretext: {
        words: [
          { word: "add", means: "to put together", sentence: "When you add 3 to 5 you get 8." },
          { word: "sum", means: "the answer when you add", sentence: "The sum of −2 and −4 is −6." },
          { word: "brackets", means: "the marks ( ) that keep a negative number tidy", sentence: "We write 6 + (−4) with brackets." },
          { word: "negative sign", means: "the − in front of a number below zero", sentence: "The negative sign tells you the number is below zero." },
          { word: "mean", means: "the total shared out equally: total ÷ how many", sentence: "The mean of 4, −1 and 3 is 2." }
        ],
        passage: [
          "You can add a negative number.",
          "Think of 6 + (−4).",
          "Put out 6 positive counters.",
          "Then put out 4 negative counters.",
          "Match them into zero pairs.",
          "There are 4 zero pairs.",
          "They are worth nothing.",
          "2 positive counters are left.",
          "So 6 + (−4) is 2.",
          "Adding a negative takes you left on the number line.",
          "Adding two negatives gives a bigger negative.",
          "−3 + (−5) is −8."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "ضمّ الأشياء بعضها إلى بعض (add)",
            "الجواب عند الجمع (sum)",
            "العلامتان ( ) اللتان تحفظان العدد السالب مرتّباً (brackets)",
            "علامة − أمام العدد الأصغر من الصفر (negative sign)",
            "المجموع موزَّعاً بالتساوي: المجموع ÷ العدد (mean)"
          ],
          "passage": [
            "يمكنك أن تجمع عدداً سالباً.",
            "فكّر في 6 + (−4).",
            "ضع 6 أقراص موجبة.",
            "ثم ضع 4 أقراص سالبة.",
            "رتّبها في أزواج صفرية.",
            "هناك 4 أزواج صفرية.",
            "قيمتها لا شيء.",
            "يتبقّى 2 من الأقراص الموجبة.",
            "إذن 6 + (−4) يساوي 2.",
            "جمع عدد سالب يحرّكك نحو اليسار على خط الأعداد.",
            "جمع عددين سالبين يعطي عدداً سالباً أكبر.",
            "−3 + (−5) يساوي −8."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "łączyć razem (add, dodawać)",
            "wynik dodawania (sum, suma)",
            "znaki ( ), które trzymają liczbę ujemną w porządku (brackets, nawiasy)",
            "znak − przed liczbą mniejszą od zera (negative sign)",
            "suma podzielona równo: suma ÷ ile liczb (mean, średnia)"
          ],
          "passage": [
            "Można dodać liczbę ujemną.",
            "Pomyśl o 6 + (−4).",
            "Wyłóż 6 żetonów dodatnich.",
            "Potem wyłóż 4 żetony ujemne.",
            "Połącz je w pary zerowe.",
            "Są 4 pary zerowe.",
            "Są warte zero.",
            "Zostają 2 żetony dodatnie.",
            "Więc 6 + (−4) to 2.",
            "Dodawanie liczby ujemnej przesuwa cię w lewo na osi liczbowej.",
            "Dodanie dwóch liczb ujemnych daje większą liczbę ujemną.",
            "−3 + (−5) to −8."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "juntar (add)",
            "a resposta quando você soma (sum)",
            "os sinais ( ) que mantêm um número negativo bem separado (brackets, parênteses)",
            "o − à frente de um número menor do que zero (negative sign)",
            "o total dividido em partes iguais: total ÷ quantidade (mean, média)"
          ],
          "passage": [
            "Você pode somar um número negativo.",
            "Pense em 6 + (−4).",
            "Coloque 6 fichas positivas.",
            "Depois, coloque 4 fichas negativas.",
            "Junte as fichas em pares zero.",
            "Há 4 pares zero.",
            "Eles não valem nada.",
            "Sobram 2 fichas positivas.",
            "Por isso, 6 + (−4) é 2.",
            "Somar um negativo é andar para a esquerda na reta numérica.",
            "Somar dois negativos dá um negativo maior.",
            "−3 + (−5) é −8."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "isku darid (add)",
            "jawaabta markaad isku darto (sum)",
            "calaamadaha ( ) ee tiro taban si nadiif ah u haya (brackets)",
            "calaamadda − ee ka horreysa tiro eber ka hoosaysa (negative sign)",
            "wadarta si siman loo qaybiyay: wadarta ÷ imisa (mean)"
          ],
          "passage": [
            "Tiro taban waad ku dari kartaa.",
            "Ka fikir 6 + (−4).",
            "Soo dhig 6 counter oo togan.",
            "Kadibna soo dhig 4 counter oo taban.",
            "U lammaanee zero pairs.",
            "Waxaa jira 4 zero pairs.",
            "Waxba uma dhigmaan.",
            "2 counter oo togan ayaa haray.",
            "Sidaas darteed 6 + (−4) waa 2.",
            "Ku darista tiro taban waxay bidix kuu dhaqaajisaa xariiqda tirooyinka.",
            "Isku darista laba tiro taban waxay bixisaa tiro taban oo ka weyn.",
            "−3 + (−5) waa −8."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "скласти разом",
            "відповідь, яку отримуєш при додаванні",
            "знаки ( ), які акуратно виділяють від’ємне число",
            "знак − перед числом, меншим за нуль",
            "сума, поділена порівну: сума ÷ кількість"
          ],
          "passage": [
            "Можна додати від’ємне число.",
            "Подумайте про 6 + (−4).",
            "Викладіть 6 додатних фішок.",
            "Потім викладіть 4 від’ємні фішки.",
            "З’єднайте їх у нульові пари.",
            "Виходить 4 нульові пари.",
            "Вони дають нуль.",
            "Залишаються 2 додатні фішки.",
            "Отже, 6 + (−4) дорівнює 2.",
            "Додавання від’ємного числа веде вас ліворуч на числовій прямій.",
            "Якщо додати два від’ємних числа, вийде від’ємне число, ще далі від нуля.",
            "−3 + (−5) дорівнює −8."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ملانا، جمع کرنا (add)",
            "جمع کرنے پر ملنے والا جواب (sum)",
            "( ) کی علامتیں جو منفی عدد کو صاف ستھرا رکھتی ہیں (brackets)",
            "صفر سے چھوٹے عدد کے آگے لگا − کا نشان (negative sign)",
            "کل کو برابر بانٹنا: کل ÷ تعداد (mean)"
          ],
          "passage": [
            "آپ منفی عدد کو جمع کر سکتے ہیں۔",
            "6 + (−4) کے بارے میں سوچیں۔",
            "6 مثبت counters رکھیں۔",
            "پھر 4 منفی counters رکھیں۔",
            "انھیں zero pairs میں جوڑیں۔",
            "یہاں 4 zero pairs بنتے ہیں۔",
            "ان کی قیمت کچھ نہیں ہے۔",
            "2 مثبت counters باقی بچتے ہیں۔",
            "اس لیے 6 + (−4) کا جواب 2 ہے۔",
            "منفی عدد جمع کرنے سے آپ عددی لکیر پر بائیں طرف جاتے ہیں۔",
            "دو منفی اعداد جمع کرنے سے ایک بڑا منفی عدد ملتا ہے۔",
            "−3 + (−5) کا جواب −8 ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Adding a negative number",
          paragraphs: [
            "Adding a negative number is like adding a debt. If you have 6 positive counters and add 4 negative counters, 4 zero pairs cancel out. You are left with 2.",
            "On the number line, adding a positive number moves you right. Adding a negative number moves you left. So 6 + (−4) = 6 − 4 = 2.",
            "This is why adding does not always make a number bigger. 5 + (−7) = −2, which is less than 5."
          ],
          worked: {
            q: "Work out 3 + (−8).",
            steps: ["Adding −8 is the same as taking away 8.", "3 + (−8) = 3 − 8.", "Take 3 to reach zero, then 5 more.", "3 − 8 = −5."],
            answer: "−5", check: "3 + (-8)"
          },
          widget: { type: "numberline", min: -10, max: 10, step: 1,
                    prompt: "Drag the counter to show 3 + (−8). Adding a negative number moves you to the left.", start: 3, target: -5 },
          tip: "Adding a negative is the same as subtracting."
        },
        {
          heading: "Adding two negative numbers",
          paragraphs: [
            "If you add negative counters to negative counters, there are no zero pairs. You just get more negative counters.",
            "So −4 + (−3) = −7. The answer is more negative, not positive.",
            "Be careful: 'two negatives make a positive' is not true for adding. −2 + (−6) = −8."
          ],
          worked: {
            q: "Work out −6 + (−9).",
            steps: ["Both numbers are negative, so there are no zero pairs.", "6 + 9 = 15.", "Keep the negative sign: −6 + (−9) = −15."],
            answer: "−15", check: "-6 + (-9)"
          },
          tip: "Adding two negatives: add the digits, keep the minus sign."
        },
        {
          heading: "Starting from a negative number",
          paragraphs: [
            "When you start from a negative number and add a positive one, you move right. −7 + 3 = −4, because you only move 3 and do not reach zero.",
            "−5 + 9 = 4, because you move 5 to reach zero and then 4 more.",
            "Adding directed numbers helps us find a mean. Add all the numbers, then divide by how many there are. For 6, −2 and 2 the total is 6 + (−2) + 2 = 6, and the mean is 6 ÷ 3 = 2."
          ],
          worked: {
            q: "Find the mean of 7, −4, 5 and −4.",
            steps: ["Add the numbers: 7 + (−4) + 5 + (−4) = 4.", "There are 4 numbers.", "4 ÷ 4 = 1."],
            answer: "1", check: "(7 + (-4) + 5 + (-4)) / 4"
          },
          tip: "Count how many numbers there are before you divide."
        }
      ],
      gate: [
        { kind: "numeric", q: "Work out −2 + 9.", answer: 7, tolerance: 0, units: "", check: "-2 + 9",
          misconceptions: [
            { answer: -11, says: "You moved left instead of right: −2 − 9 = −11. Adding a positive number moves you to the right, up past zero.", check: "-2 - 9" },
            { answer: -7, says: "You found the right distance but kept the sign of −2. From −2, 2 steps reach zero and the other 7 steps land on positive 7.", check: "-(9 - 2)" }
          ],
          why: "Move 2 to reach zero, then 7 more." },
        { kind: "mcq", q: "Work out 4 + (−6).", options: ["10", "−2", "2", "−10"], answer: 1, check: "4 + (-6)",
          feedback: [
            "You added 4 and 6 and ignored the negative sign. Adding −6 moves you 6 to the left of 4, so you cross zero.",
            "",
            "You worked out 6 − 4. Start at 4 and move 6 to the left: 4 steps reach zero and 2 more land on −2.",
            "You added the digits and made the whole answer negative. Only the 6 is negative here: 4 + (−6) = 4 − 6 = −2."
          ],
          why: "Adding −6 is the same as taking away 6: 4 − 6 = −2." },
        { kind: "numeric", q: "Work out 8 − 11.", answer: -3, tolerance: 0, units: "", check: "8 - 11",
          misconceptions: [
            { answer: 3, says: "You worked out 11 − 8 and lost the sign. You start at 8 and take away more than 8, so the answer is below zero.", check: "11 - 8" },
            { answer: -19, says: "You added 8 and 11 and made the answer negative. Taking 11 from 8 uses 8 steps to reach zero and only 3 more past it.", check: "-(8 + 11)" }
          ],
          why: "Take 8 to reach zero, then 3 more. You land on −3." }
      ],
      modules: [
        {
          title: "Add a negative number",
          task: { kind: "mcq", q: "Work out 9 + (−14).", options: ["23", "5", "−5", "−23"], answer: 2, check: "9 + (-14)",
                  feedback: [
                    "You added 9 and 14 and dropped the negative sign. Adding −14 moves you 14 to the left of 9, past zero.",
                    "You worked out 14 − 9 and lost the sign. Start at 9 and move 14 left: 9 steps reach zero and 5 more land on −5.",
                    "",
                    "You added the digits and made the whole answer negative. Only the 14 is negative: 9 + (−14) = 9 − 14 = −5."
                  ] },
          explain: "Say, in one sentence, why adding −14 moved you to the left of 9.",
          contexts: [
            { label: "Bank balance", q: "Your balance is £9. A payment of £14 goes out of the account. Adding this negative amount gives your new balance, in pounds. What is it?",
              why: "Adding −14 is the same as taking away 14. The £9 covers £9 of it, and the other £5 is owed: the balance is −5." },
            { label: "Temperature", q: "It is 9°C. A cold wind brings a change of −14 degrees. What is the new temperature, in °C?",
              why: "A change of −14 is a fall of 14 degrees. 9 degrees reach zero, and 5 more take it to −5°C." },
            { label: "Sea level", q: "A walker is 9 m above sea level. She climbs down into a cave, a change of −14 m. What is her height above sea level now, in metres?",
              why: "A change of −14 m is a drop of 14 m. She drops 9 m to sea level and 5 m more, so she is at −5 m." }
          ],
          levels: {
            support: {
              steps: ["Adding a negative is the same as subtracting.", "Rewrite the sum as a subtraction.", "Jump to zero, then jump the rest."],
              example: { q: "Work out 4 + (−10).",
                         steps: ["4 + (−10) = 4 − 10.", "Take 4 to reach zero, then 6 more.", "4 − 10 = −6."],
                         answer: "−6", check: "4 + (-10)" }
            },
            core: { hint: "9 + (−14) is the same as 9 − 14." },
            stretch: { extend: "Whitney gets 23. She says adding always makes a number bigger. Give an example that proves her wrong, and explain why." }
          },
          why: "9 + (−14) = 9 − 14. Take 9 to reach zero, then 5 more, so the answer is −5."
        },
        {
          title: "Add two negative numbers",
          task: { kind: "numeric", q: "Work out −13 + (−8).", answer: -21, tolerance: 0, units: "", check: "-13 + (-8)",
                  misconceptions: [
                    { answer: -5, says: "You treated −8 as if it were +8 and moved right: −13 + 8 = −5. Adding a negative number moves you to the left, further below zero.", check: "-13 + 8" },
                    { answer: 21, says: "You used 'two negatives make a positive'. That rule is for multiplying and dividing. Adding two negatives just builds up more negatives: −13 + (−8) = −21.", check: "13 + 8" }
                  ] },
          explain: "Say, in one sentence, why there are no zero pairs when both numbers are negative.",
          contexts: [
            { label: "Golf scores", q: "In golf, a score under par is negative. A golfer scores −13 in the first round and −8 in the second round. What is her total score over both rounds?",
              why: "Both scores are negative, so they build up: −13 + (−8) = −21. She is 21 under par in total." },
            { label: "Bank balance", q: "Your card balance is −£13. A further charge of −£8 is added. What is the balance now, in pounds?",
              why: "Two debts added together make a bigger debt: −13 + (−8) = −21, so you owe £21." },
            { label: "Temperature", q: "At dusk it is −13°C. Overnight the temperature change is −8 degrees. What is the temperature by morning, in °C?",
              why: "A change of −8 is a fall of 8 degrees. From −13°C that is −13 + (−8) = −21, so it is −21°C." }
          ],
          levels: {
            support: {
              steps: ["Both numbers are negative, so there are no zero pairs.", "Add the digits.", "Keep the negative sign."],
              example: { q: "Work out −5 + (−7).",
                         steps: ["5 + 7 = 12.", "Both numbers are negative, so the answer is negative.", "−5 + (−7) = −12."],
                         answer: "−12", check: "-5 + (-7)" }
            },
            core: { hint: "Add 13 and 8, then think about the sign." },
            stretch: { extend: "Eva knows that 23 + 48 = 71. She says −23 + (−48) must be −71. Is she right? Explain how she can be sure." }
          },
          why: "There are no zero pairs, so the negatives build up: 13 + 8 = 21, and −13 + (−8) = −21."
        },
        {
          title: "Find the mean",
          task: { kind: "numeric", q: "Find the mean of −3, 8, −6, 5 and 1.", answer: 1, tolerance: 0, units: "", check: "(-3 + 8 + (-6) + 5 + 1) / 5",
                  misconceptions: [
                    { answer: 5, says: "You found the total but forgot to divide. The total of the five numbers is 5, and the mean is 5 ÷ 5 = 1.", check: "(-3 + 8 + (-6) + 5 + 1)" },
                    { answer: 4.6, says: "You ignored the negative signs and added 3 + 8 + 6 + 5 + 1 = 23. The negatives pull the total down: −3 and −6 take away 9, so the total is 5.", check: "(3 + 8 + 6 + 5 + 1) / 5" }
                  ] },
          explain: "Say, in one sentence, how the negative numbers changed the total before you divided.",
          contexts: [
            { label: "Golf scores", q: "In golf, a score under par is negative. A golfer's scores relative to par in her rounds were −3, 8, −6, 5 and 1. What was her mean score?",
              why: "Add the scores, taking care with the signs: the total is 5. There are five rounds, so the mean is 5 ÷ 5 = 1." },
            { label: "Temperature", q: "The midday temperatures in °C from Monday to Friday were −3, 8, −6, 5 and 1. What was the mean midday temperature, in °C?",
              why: "Add the temperatures, taking care with the signs: the total is 5. There are five days, so the mean is 5 ÷ 5 = 1°C." }
          ],
          levels: {
            support: {
              steps: ["Add all the numbers, taking care with the signs.", "Count how many numbers there are.", "Divide the total by how many numbers there are."],
              example: { q: "Find the mean of 9, −5 and 2.",
                         steps: ["9 + (−5) + 2 = 6.", "There are 3 numbers.", "6 ÷ 3 = 2."],
                         answer: "2", check: "(9 + (-5) + 2) / len([9, -5, 2])" }
            },
            core: { hint: "Add the numbers in an easy order first. Look for numbers that nearly cancel out." },
            stretch: { extend: "Write a set of four numbers, with at least two negatives, that has a mean of −2. Explain how you chose them." }
          },
          why: "−3 + 8 + (−6) + 5 + 1 = 5. There are 5 numbers, and 5 ÷ 5 = 1."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 4
    {
      key: "subtracting", n: 4,
      title: "Subtracting directed numbers",
      lead: "Subtract positive and negative numbers, and see why taking away a negative makes a number bigger.",
      covers: [6],
      pretext: {
        words: [
          { word: "subtract", means: "to take away", sentence: "Subtract 3 from 10 to get 7." },
          { word: "minus", means: "the word we say for the − sign when we take away", sentence: "We read 5 − 2 as five minus two." },
          { word: "negative", means: "below zero", sentence: "We read −3 as negative three." },
          { word: "opposite", means: "the move that undoes another move", sentence: "Adding is the opposite of subtracting." },
          { word: "rewrite", means: "to write a calculation again in an easier way", sentence: "Rewrite 5 − (−2) as 5 + 2." }
        ],
        passage: [
          "Taking away a negative is a surprise.",
          "It makes the number bigger.",
          "Think of 3 − (−2).",
          "Put out 3 positive counters.",
          "There are no negative counters to take.",
          "So add two zero pairs.",
          "The value is still 3.",
          "Now take away the 2 negative counters.",
          "5 positive counters are left.",
          "So 3 − (−2) is 5.",
          "Taking away a negative is the same as adding.",
          "Read it as: three minus negative two."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الطرح، أي الإزالة (subtract)",
            "الكلمة التي نقولها لعلامة − عند الطرح: ناقص (minus)",
            "تحت الصفر (negative)",
            "الحركة التي تُلغي حركة أخرى (opposite)",
            "إعادة كتابة العملية الحسابية بطريقة أسهل (rewrite)"
          ],
          "passage": [
            "طرح عدد سالب فيه مفاجأة.",
            "فهو يجعل العدد أكبر.",
            "فكّر في 3 − (−2).",
            "ضع 3 أقراص موجبة.",
            "لا توجد أقراص سالبة لتأخذها.",
            "لذلك أضف زوجين صفريين.",
            "القيمة لا تزال 3.",
            "الآن أزِل القرصين السالبين (2).",
            "يتبقّى 5 أقراص موجبة.",
            "إذن 3 − (−2) يساوي 5.",
            "طرح عدد سالب هو نفسه الجمع.",
            "اقرأها هكذا: ثلاثة ناقص سالب اثنين."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "zabrać, odjąć (subtract)",
            "słowo, które mówimy na znak −, kiedy odejmujemy (minus)",
            "poniżej zera (negative, ujemny)",
            "ruch, który cofa inny ruch (opposite)",
            "zapisać działanie jeszcze raz w łatwiejszy sposób (rewrite)"
          ],
          "passage": [
            "Odejmowanie liczby ujemnej to niespodzianka.",
            "Liczba staje się większa.",
            "Pomyśl o 3 − (−2).",
            "Wyłóż 3 żetony dodatnie.",
            "Nie ma żetonów ujemnych, które można zabrać.",
            "Więc dodaj dwie pary zerowe.",
            "Wartość to nadal 3.",
            "Teraz zabierz 2 żetony ujemne.",
            "Zostaje 5 żetonów dodatnich.",
            "Więc 3 − (−2) to 5.",
            "Odejmowanie liczby ujemnej to to samo, co dodawanie.",
            "Czytaj to tak: trzy odjąć minus dwa."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "tirar (subtract)",
            "a palavra que dizemos para o sinal − quando tiramos; em português, ‘menos’ (minus)",
            "abaixo de zero (negative)",
            "o movimento que desfaz outro movimento (opposite)",
            "escrever uma conta outra vez de uma forma mais fácil (rewrite)"
          ],
          "passage": [
            "Tirar um negativo é uma surpresa.",
            "O número fica maior.",
            "Pense em 3 − (−2).",
            "Coloque 3 fichas positivas.",
            "Não há fichas negativas para tirar.",
            "Então, acrescente dois pares zero.",
            "O valor ainda é 3.",
            "Agora tire as 2 fichas negativas.",
            "Sobram 5 fichas positivas.",
            "Por isso, 3 − (−2) é 5.",
            "Tirar um negativo é o mesmo que somar.",
            "Leia assim: ‘três menos negativo dois’ (em inglês, three minus negative two)."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "ka jarid (subtract)",
            "erayga aan u dhahno calaamadda − markaan wax ka jarno (minus)",
            "eber ka hooseeya (negative)",
            "dhaqaaqa burinaya dhaqaaq kale (opposite)",
            "in xisaab mar kale loo qoro hab fudud (rewrite)"
          ],
          "passage": [
            "Ka jarista tiro taban waa wax lala yaabo.",
            "Tirada ayay weynaysaa.",
            "Ka fikir 3 − (−2).",
            "Soo dhig 3 counter oo togan.",
            "Ma jiraan counter taban oo la jaro.",
            "Sidaas darteed ku dar laba zero pair.",
            "Qiimuhu weli waa 3.",
            "Hadda ka jar 2-da counter ee taban.",
            "5 counter oo togan ayaa haray.",
            "Sidaas darteed 3 − (−2) waa 5.",
            "Ka jarista tiro taban waxay la mid tahay isku darid.",
            "U akhri sidan: three minus negative two (saddex ka jar taban laba)."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "відняти",
            "слово, яким ми називаємо знак −, коли віднімаємо (по-англійськи minus)",
            "менше за нуль",
            "дія, яка скасовує іншу дію",
            "записати приклад знову, простішим способом"
          ],
          "passage": [
            "Віднімання від’ємного числа — це несподіванка.",
            "Воно робить число більшим.",
            "Подумайте про 3 − (−2).",
            "Викладіть 3 додатні фішки.",
            "Від’ємних фішок, які можна забрати, немає.",
            "Тому додайте дві нульові пари.",
            "Значення все одно 3.",
            "Тепер заберіть 2 від’ємні фішки.",
            "Залишається 5 додатних фішок.",
            "Отже, 3 − (−2) дорівнює 5.",
            "Відняти від’ємне число — це те саме, що додати.",
            "Читайте так: три мінус мінус два (по-англійськи: three minus negative two)."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "گھٹانا (subtract)",
            "وہ لفظ جو ہم گھٹاتے وقت − کے نشان کے لیے بولتے ہیں (minus)",
            "صفر سے نیچے (negative)",
            "وہ حرکت جو دوسری حرکت کو واپس کر دے (opposite)",
            "کسی حساب کو آسان طریقے سے دوبارہ لکھنا (rewrite)"
          ],
          "passage": [
            "منفی عدد گھٹانا ایک حیرت کی بات ہے۔",
            "اس سے عدد بڑا ہو جاتا ہے۔",
            "3 − (−2) کے بارے میں سوچیں۔",
            "3 مثبت counters رکھیں۔",
            "گھٹانے کے لیے کوئی منفی counter موجود نہیں۔",
            "اس لیے دو zero pairs شامل کریں۔",
            "قیمت اب بھی 3 ہے۔",
            "اب 2 منفی counters ہٹا دیں۔",
            "5 مثبت counters باقی بچتے ہیں۔",
            "اس لیے 3 − (−2) کا جواب 5 ہے۔",
            "منفی عدد گھٹانا جمع کرنے جیسا ہی ہے۔",
            "اسے انگریزی میں ایسے پڑھیں: three minus negative two۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Subtracting a positive number",
          paragraphs: [
            "Subtracting a positive number moves you left on the number line. You already know this from crossing zero: 2 − 6 = −4.",
            "If you start below zero, you move further left. −3 − 5 = −8. The answer is more negative.",
            "Some pupils think 'two minus signs make a positive' here. That is not true. −3 − 5 has one negative number and one subtraction, and you simply move left."
          ],
          worked: {
            q: "Work out −4 − 7.",
            steps: ["Start at −4.", "Subtract 7: move 7 to the left.", "4 + 7 = 11, so you end up 11 below zero.", "−4 − 7 = −11."],
            answer: "−11", check: "-4 - 7"
          },
          tip: "Subtracting a positive number: move left."
        },
        {
          heading: "Subtracting a negative number",
          paragraphs: [
            "To take away negative counters, you need some to take. Add zero pairs first. They do not change the value. Then take the negatives away, and extra positives are left.",
            "For 4 − (−3), start with 4 positive counters. Add 3 zero pairs. Take away 3 negative counters. 7 positive counters are left, so 4 − (−3) = 7.",
            "On the number line, subtracting a negative moves you right. Subtracting a negative is the same as adding a positive: 4 − (−3) = 4 + 3."
          ],
          worked: {
            q: "Work out 6 − (−5).",
            steps: ["Subtracting a negative is the same as adding.", "Rewrite: 6 − (−5) = 6 + 5.", "6 + 5 = 11."],
            answer: "11", check: "6 - (-5)"
          },
          widget: { type: "numberline", min: -5, max: 15, step: 1,
                    prompt: "Drag the counter to show 6 − (−5). Subtracting a negative number moves you to the right.", start: 6, target: 11 },
          tip: "Two signs side by side, − (−), become +."
        },
        {
          heading: "Starting from a negative number",
          paragraphs: [
            "The same rule works when you start below zero. −5 − (−3) = −5 + 3 = −2.",
            "−2 − (−6) = −2 + 6 = 4. This time the answer crosses zero.",
            "Check yourself with −9 − (−5). Rewrite it as −9 + 5. You move 5 right from −9 and land on −4. So two negatives do not always give a positive answer."
          ],
          worked: {
            q: "Work out −8 − (−10).",
            steps: ["Rewrite: −8 − (−10) = −8 + 10.", "Move 8 right to reach zero.", "10 − 8 = 2, so move 2 more.", "−8 + 10 = 2."],
            answer: "2", check: "-8 - (-10)"
          },
          widget: { type: "numberline", min: -10, max: 10, step: 1,
                    prompt: "Drag the counter to show −8 − (−10). Rewrite it as −8 + 10 first, then move right from −8.", start: -8, target: 2 },
          tip: "Rewrite first, then use a number line."
        }
      ],
      gate: [
        { kind: "numeric", q: "Work out −6 + (−3).", answer: -9, tolerance: 0, units: "", check: "-6 + (-3)",
          misconceptions: [
            { answer: -3, says: "You treated −3 as if it were +3 and moved right: −6 + 3 = −3. Adding a negative number moves you to the left.", check: "-6 + 3" },
            { answer: 9, says: "You used 'two negatives make a positive'. That rule is for multiplying and dividing. Adding two negatives gives a bigger negative: −6 + (−3) = −9.", check: "6 + 3" }
          ],
          why: "Both numbers are negative, so there are no zero pairs: 6 + 3 = 9, and the answer is −9." },
        { kind: "mcq", q: "Work out 7 − 10.", options: ["3", "−3", "17", "−17"], answer: 1, check: "7 - 10",
          feedback: [
            "You worked out 10 − 7 and lost the sign. Start at 7 and move 10 to the left: 7 steps reach zero and 3 more land on −3.",
            "",
            "You added 7 and 10. The sign between them is a subtraction, so you move left from 7, not right.",
            "You added the digits and made the answer negative. Moving 10 left from 7 only takes you 3 past zero, so the answer is −3."
          ],
          why: "Take 7 to reach zero, then 3 more. You land on −3." },
        { kind: "gap", q: "Subtracting a negative number is the same as ___ a positive number.", answer: "adding",
          options: ["adding", "subtracting", "multiplying"],
          feedback: {
            "subtracting": "Subtracting a negative number moves you to the right, not the left. Taking away negative counters leaves more positive counters, so the value goes up, just as it does when you add.",
            "multiplying": "There is no multiplying here. Think of 4 − (−3): add 3 zero pairs, take away the 3 negatives, and 7 positives are left, so 4 − (−3) = 4 + 3."
          },
          why: "Taking away negative counters leaves extra positive counters, so the value goes up." }
      ],
      modules: [
        {
          title: "Subtract a negative number",
          task: { kind: "mcq", q: "Work out 5 − (−9).", options: ["−4", "4", "14", "−14"], answer: 2, check: "5 - (-9)",
                  feedback: [
                    "You worked out 5 − 9. The second number is −9, not 9. Subtracting a negative moves you to the right: 5 − (−9) = 5 + 9.",
                    "You worked out 9 − 5. The two signs side by side, − (−), become +, so the calculation is 5 + 9 = 14.",
                    "",
                    "Right digits, wrong sign. Subtracting a negative makes the number bigger, so the answer is positive 14, not −14."
                  ] },
          explain: "Say, in one sentence, why subtracting −9 gave an answer bigger than 5.",
          contexts: [
            { label: "Temperature", q: "It is 5°C in London and −9°C in Oslo. How many degrees warmer is London than Oslo? Subtract Oslo's temperature from London's.",
              why: "5 − (−9) = 5 + 9 = 14. From −9°C it is 9 degrees up to zero and 5 more to 5°C, so London is 14 degrees warmer." },
            { label: "Sea level", q: "A gull flies 5 m above sea level. A fish swims at −9 m. How many metres apart are they? Subtract the fish's height from the gull's.",
              why: "5 − (−9) = 5 + 9 = 14. The fish is 9 m below sea level and the gull 5 m above, so they are 14 m apart." },
            { label: "Lift floors", q: "You are on floor 5. The car park is on floor −9. How many floors will the lift travel? Subtract the car park floor from yours.",
              why: "5 − (−9) = 5 + 9 = 14. It is 5 floors down to the ground and 9 more to the car park, so 14 floors in all." }
          ],
          levels: {
            support: {
              steps: ["Spot the two signs side by side: − (−).", "Change them to +.", "Work out the addition."],
              example: { q: "Work out 3 − (−6).",
                         steps: ["3 − (−6) = 3 + 6.", "3 + 6 = 9."],
                         answer: "9", check: "3 - (-6)" }
            },
            core: { hint: "5 − (−9) is the same as 5 + 9." },
            stretch: { extend: "Use counters and zero pairs to explain why 5 − (−9) gives an answer bigger than 5." }
          },
          why: "Subtracting a negative is the same as adding: 5 − (−9) = 5 + 9 = 14."
        },
        {
          title: "A negative minus a positive",
          task: { kind: "numeric", q: "Work out −12 − 9.", answer: -21, tolerance: 0, units: "", check: "-12 - 9",
                  misconceptions: [
                    { answer: -3, says: "You saw two minus signs and turned the calculation into −12 + 9 = −3. Here only one number is negative; the other sign means take away, so you move 9 further left.", check: "-12 + 9" },
                    { answer: 21, says: "You added the digits but lost the sign. You start below zero and move further down, so the answer must be negative: −21.", check: "12 + 9" },
                    { answer: 3, says: "You worked out 12 − 9 and dropped the sign of −12. Start at −12 and move 9 to the left: you end up 21 below zero.", check: "12 - 9" }
                  ] },
          explain: "Say, in one sentence, why the answer is further below zero than −12.",
          contexts: [
            { label: "Temperature", q: "It is −12°C. The temperature falls by another 9 degrees. What is the temperature now, in °C?",
              why: "Falling means subtracting. From −12°C, 9 degrees colder is −12 − 9 = −21, so it is −21°C." },
            { label: "Bank balance", q: "Your balance is −£12. You spend another £9 from the account. What is your balance now, in pounds?",
              why: "You already owe £12 and spend £9 more, so you owe £21: the balance is −21." },
            { label: "Sea level", q: "A submarine is at −12 m. It dives 9 m deeper. What is its height relative to sea level now, in metres?",
              why: "Diving deeper means subtracting. −12 − 9 = −21, so the submarine is 21 m below sea level." }
          ],
          levels: {
            support: {
              steps: ["Start at the first number.", "Subtracting a positive number means moving left.", "Add the two digits: you go further below zero."],
              example: { q: "Work out −3 − 8.",
                         steps: ["Start at −3 and move 8 to the left.", "3 + 8 = 11.", "−3 − 8 = −11."],
                         answer: "−11", check: "-3 - 8" }
            },
            core: { hint: "You start 12 below zero and go 9 further down." },
            stretch: { extend: "Eva works out −2 − 4 and gets 2. She says she took away four negative counters. Explain her mistake, and give the correct answer." }
          },
          why: "You start at −12 and move 9 more to the left: −12 − 9 = −21."
        },
        {
          title: "Order the calculations",
          task: { kind: "order", q: "Put these calculations in order, smallest answer first: 4 + (−5), −3 − 6, −1 − (−8), −7 − (−2).",
                  items: ["−3 − 6", "−7 − (−2)", "4 + (−5)", "−1 − (−8)"],
                  check: "sorted([4 + (-5), -3 - 6, -1 - (-8), -7 - (-2)])" },
          explain: "Say, in one sentence, how you decided which of the two negative answers was the smaller.",
          levels: {
            support: {
              steps: ["Work out each calculation first.", "Write the answer under it.", "Order the answers from smallest to greatest."],
              example: { q: "Put 2 − 5, −1 − (−6) and −4 + (−4) in order, smallest answer first.",
                         steps: ["2 − 5 = −3.", "−1 − (−6) = −1 + 6 = 5.", "−4 + (−4) = −8.", "Smallest first: −8, then −3, then 5."],
                         answer: "−4 + (−4), 2 − 5, −1 − (−6)", check: "sorted([2 - 5, -1 - (-6), -4 + (-4)])" }
            },
            core: { hint: "Work out each answer before you put them in order." },
            stretch: { extend: "Write your own calculation, using subtraction of a negative number, whose answer would go between the second and third calculations. Explain how you know." }
          },
          why: "The answers are −9, −5, −1 and 7, so that is the order."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 5
    {
      key: "multiplying-dividing", n: 5,
      title: "Multiplying and dividing",
      lead: "Learn the sign rules for multiplying and dividing, and see where they come from.",
      covers: [7],
      pretext: {
        words: [
          { word: "product", means: "the answer when you multiply", sentence: "The product of −3 and 4 is −12." },
          { word: "quotient", means: "the answer when you divide", sentence: "The quotient of −20 and 5 is −4." },
          { word: "fact family", means: "multiplication and division facts that use the same three numbers", sentence: "4 × 5 = 20 and 20 ÷ 5 = 4 are in the same fact family." },
          { word: "sign", means: "the + or − that shows if a number is positive or negative", sentence: "The sign of −7 is negative." },
          { word: "pattern", means: "something that changes in the same way each time", sentence: "The pattern goes up by 3 each time." }
        ],
        passage: [
          "You know that 3 × 4 is 12.",
          "What is 3 lots of −4?",
          "It is −4, −4 and −4.",
          "Together that makes −12.",
          "A positive times a negative gives a negative.",
          "Now look at a pattern.",
          "−3 × 2 is −6.",
          "−3 × 1 is −3.",
          "−3 × 0 is 0.",
          "Each answer goes up by 3.",
          "So −3 × −1 must be 3.",
          "A negative times a negative gives a positive.",
          "Dividing follows the same rules."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الجواب عند الضرب (product)",
            "الجواب عند القسمة (quotient)",
            "حقائق ضرب وقسمة تستخدم الأعداد الثلاثة نفسها (fact family)",
            "علامة + أو − التي تبيّن هل العدد موجب أم سالب (sign)",
            "شيء يتغيّر بالطريقة نفسها كل مرة (pattern)"
          ],
          "passage": [
            "أنت تعرف أن 3 × 4 يساوي 12.",
            "فما قيمة 3 مجموعات من −4؟",
            "إنها −4 و −4 و −4.",
            "ومعاً تساوي −12.",
            "موجب ضرب سالب يعطي سالباً.",
            "الآن انظر إلى هذا النمط.",
            "−3 × 2 يساوي −6.",
            "−3 × 1 يساوي −3.",
            "−3 × 0 يساوي 0.",
            "كل جواب يزيد بمقدار 3.",
            "إذن −3 × −1 يجب أن يساوي 3.",
            "سالب ضرب سالب يعطي موجباً.",
            "والقسمة تتبع القواعد نفسها."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "wynik mnożenia (product, iloczyn)",
            "wynik dzielenia (quotient, iloraz)",
            "działania na mnożenie i dzielenie, które używają tych samych trzech liczb (fact family)",
            "znak + lub −, który pokazuje, czy liczba jest dodatnia, czy ujemna (sign)",
            "coś, co zmienia się za każdym razem w ten sam sposób (pattern, prawidłowość)"
          ],
          "passage": [
            "Wiesz, że 3 × 4 to 12.",
            "Ile to 3 razy −4?",
            "To −4, −4 i −4.",
            "Razem daje to −12.",
            "Dodatnia razy ujemna daje ujemną.",
            "Teraz spójrz na pewną prawidłowość.",
            "−3 × 2 to −6.",
            "−3 × 1 to −3.",
            "−3 × 0 to 0.",
            "Każdy wynik rośnie o 3.",
            "Więc −3 × −1 musi być równe 3.",
            "Ujemna razy ujemna daje dodatnią.",
            "Dzielenie działa według tych samych zasad."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a resposta quando você multiplica (product, produto)",
            "a resposta quando você divide (quotient, quociente)",
            "multiplicações e divisões que usam os mesmos três números (fact family)",
            "o + ou − que mostra se um número é positivo ou negativo (sign, sinal)",
            "algo que muda da mesma maneira de cada vez (pattern, padrão)"
          ],
          "passage": [
            "Você sabe que 3 × 4 é 12.",
            "Quanto é 3 grupos de −4?",
            "É −4, −4 e −4.",
            "Juntos, dão −12.",
            "Um positivo vezes um negativo dá um negativo.",
            "Agora olhe para um padrão.",
            "−3 × 2 é −6.",
            "−3 × 1 é −3.",
            "−3 × 0 é 0.",
            "Cada resposta sobe 3.",
            "Por isso, −3 × −1 tem de ser 3.",
            "Um negativo vezes um negativo dá um positivo.",
            "A divisão segue as mesmas regras."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "jawaabta markaad isku dhufato (product)",
            "jawaabta markaad u qaybiso (quotient)",
            "xaqiiqooyin isku-dhufasho iyo u-qaybin oo isticmaala isla saddexda tiro (fact family)",
            "calaamadda + ama − ee muujisa in tiro togan tahay ama taban (sign)",
            "wax si isku mid ah isbeddela mar kasta (pattern)"
          ],
          "passage": [
            "Waad ogtahay in 3 × 4 yahay 12.",
            "Waa maxay 3 jeer −4?",
            "Waa −4, −4 iyo −4.",
            "Wadajir waxay noqdaan −12.",
            "Togan oo lagu dhufto taban waxay bixisaa taban.",
            "Hadda eeg hannaan (pattern).",
            "−3 × 2 waa −6.",
            "−3 × 1 waa −3.",
            "−3 × 0 waa 0.",
            "Jawaab kasta 3 ayay kor u kacdaa.",
            "Sidaas darteed −3 × −1 waa inay noqoto 3.",
            "Taban oo lagu dhufto taban waxay bixisaa togan.",
            "U qaybintuna isla xeerarkaas ayay raacdaa."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "відповідь, яку отримуєш при множенні",
            "відповідь, яку отримуєш при діленні",
            "приклади на множення і ділення з тими самими трьома числами",
            "знак + або −, який показує, додатне число чи від’ємне",
            "те, що кожного разу змінюється однаково"
          ],
          "passage": [
            "Ви знаєте, що 3 × 4 дорівнює 12.",
            "А скільки буде 3 рази по −4?",
            "Це −4, −4 і −4.",
            "Разом це −12.",
            "Додатне число, помножене на від’ємне, дає від’ємне.",
            "Тепер подивіться на закономірність.",
            "−3 × 2 дорівнює −6.",
            "−3 × 1 дорівнює −3.",
            "−3 × 0 дорівнює 0.",
            "Кожна відповідь збільшується на 3.",
            "Отже, −3 × −1 має дорівнювати 3.",
            "Від’ємне число, помножене на від’ємне, дає додатне.",
            "Ділення відбувається за тими самими правилами."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ضرب دینے پر ملنے والا جواب (product)",
            "تقسیم کرنے پر ملنے والا جواب (quotient)",
            "ضرب اور تقسیم کے وہ حقائق جو ایک ہی تین اعداد استعمال کرتے ہیں (fact family)",
            "+ یا − کا وہ نشان جو بتاتا ہے کہ عدد مثبت ہے یا منفی (sign)",
            "ایسی چیز جو ہر بار ایک ہی طرح بدلتی ہے (pattern)"
          ],
          "passage": [
            "آپ جانتے ہیں کہ 3 × 4 کا جواب 12 ہے۔",
            "3 بار −4 کتنا ہوتا ہے؟",
            "یہ −4، −4 اور −4 ہے۔",
            "یہ مل کر −12 بنتے ہیں۔",
            "مثبت ضرب منفی سے منفی ملتا ہے۔",
            "اب ایک پیٹرن (pattern) دیکھیں۔",
            "−3 × 2 کا جواب −6 ہے۔",
            "−3 × 1 کا جواب −3 ہے۔",
            "−3 × 0 کا جواب 0 ہے۔",
            "ہر جواب 3 بڑھ جاتا ہے۔",
            "اس لیے −3 × −1 ضرور 3 ہوگا۔",
            "منفی ضرب منفی سے مثبت ملتا ہے۔",
            "تقسیم بھی انھی اصولوں پر چلتی ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Multiplying a positive and a negative",
          paragraphs: [
            "3 × (−4) means three lots of −4. That is (−4) + (−4) + (−4) = −12. A positive number times a negative number gives a negative answer.",
            "The order does not matter: (−4) × 3 = −12 as well. You can picture it as an array of 3 rows of −4.",
            "First multiply the digits as normal. Then decide the sign."
          ],
          worked: {
            q: "Work out 7 × (−6).",
            steps: ["Multiply the digits: 7 × 6 = 42.", "One number is positive and one is negative.", "So the answer is negative: 7 × (−6) = −42."],
            answer: "−42", check: "7 * (-6)"
          },
          tip: "Multiply the digits first. Sort out the sign last."
        },
        {
          heading: "Multiplying two negatives",
          paragraphs: [
            "Look at this pattern: (−3) × 2 = −6, (−3) × 1 = −3, (−3) × 0 = 0. Each time we multiply by one less, the answer goes up by 3.",
            "Carry the pattern on: (−3) × (−1) = 3, and (−3) × (−2) = 6. A negative times a negative gives a positive.",
            "So 'two negatives make a positive' is true here, but only when you multiply or divide."
          ],
          worked: {
            q: "Work out (−8) × (−5).",
            steps: ["8 × 5 = 40.", "Both numbers are negative.", "Same signs give a positive: (−8) × (−5) = 40."],
            answer: "40", check: "(-8) * (-5)"
          },
          tip: "Same signs: positive. Different signs: negative."
        },
        {
          heading: "Dividing directed numbers",
          paragraphs: [
            "Division is the inverse of multiplication, so it uses the same sign rules. Use a fact family: 4 × (−5) = −20, so −20 ÷ (−5) = 4 and −20 ÷ 4 = −5.",
            "Same signs give a positive answer: (−36) ÷ (−9) = 4. Different signs give a negative answer: 36 ÷ (−9) = −4.",
            "When there are three numbers, work from left to right. For (−2) × (−3) × (−4), first (−2) × (−3) = 6, then 6 × (−4) = −24."
          ],
          worked: {
            q: "Work out (−48) ÷ 6.",
            steps: ["48 ÷ 6 = 8.", "One number is negative and one is positive: different signs.", "So (−48) ÷ 6 = −8."],
            answer: "−8", check: "(-48) / 6"
          },
          tip: "When you multiply, an even number of negatives gives a positive answer."
        }
      ],
      gate: [
        { kind: "numeric", q: "Work out 4 × (−3).", answer: -12, tolerance: 0, units: "", check: "4 * (-3)",
          misconceptions: [
            { answer: 12, says: "Right digits, wrong sign. 4 is positive and −3 is negative, and different signs give a negative answer: −12.", check: "4 * 3" },
            { answer: 1, says: "You added instead of multiplying: 4 + (−3) = 1. The × sign means four lots of −3, which is −12.", check: "4 + (-3)" }
          ],
          why: "4 × 3 = 12, and different signs give a negative answer." },
        { kind: "mcq", q: "Work out (−5) × (−6).", options: ["−30", "30", "−11", "11"], answer: 1, check: "(-5) * (-6)",
          feedback: [
            "Right digits, wrong sign. Both numbers are negative, and same signs multiplied give a positive answer: 30.",
            "",
            "You added −5 and −6 instead of multiplying. The × sign means multiply: 5 × 6 = 30, and two negatives give a positive.",
            "You added the digits. Multiply them instead: 5 × 6 = 30. Two negatives multiplied give a positive, so the answer is 30."
          ],
          why: "5 × 6 = 30, and two negatives multiplied give a positive." },
        { kind: "mcq", q: "Work out 24 ÷ (−8).", options: ["3", "−3", "−16", "32"], answer: 1, check: "24 / (-8)",
          feedback: [
            "Right digits, wrong sign. 24 is positive and −8 is negative, and different signs give a negative answer: −3.",
            "",
            "You subtracted 8 from 24. The ÷ sign means divide: 24 ÷ 8 = 3, and different signs make the answer −3.",
            "You added 24 and 8. Divide instead: 24 ÷ 8 = 3, and different signs make the answer −3."
          ],
          why: "24 ÷ 8 = 3, and different signs give a negative answer." }
      ],
      modules: [
        {
          title: "Multiply directed numbers",
          task: { kind: "numeric", q: "Work out (−9) × (−7).", answer: 63, tolerance: 0, units: "", check: "(-9) * (-7)",
                  misconceptions: [
                    { answer: -63, says: "Right digits, wrong sign. You kept the answer negative, but a negative times a negative gives a positive: (−9) × (−7) = 63.", check: "-(9 * 7)" },
                    { answer: -16, says: "You added the two numbers: −9 + (−7) = −16. The × sign means multiply: 9 × 7 = 63, and same signs give a positive.", check: "-9 + (-7)" }
                  ] },
          explain: "Say, in one sentence, how you decided the sign of the answer.",
          levels: {
            support: {
              steps: ["Multiply the digits as normal.", "Look at the signs of the two numbers.", "Same signs: positive. Different signs: negative."],
              example: { q: "Work out (−6) × (−4).",
                         steps: ["6 × 4 = 24.", "Both numbers are negative: same signs.", "(−6) × (−4) = 24."],
                         answer: "24", check: "(-6) * (-4)" }
            },
            core: { hint: "Both numbers are negative. What does that tell you about the sign?" },
            stretch: { extend: "Amir lists 1 × (−12), 2 × (−6) and 3 × (−4) as ways to make −12. Find at least three more pairs of integers that multiply to give −12, and explain the sign rule each one uses." }
          },
          why: "9 × 7 = 63, and two negatives give a positive, so (−9) × (−7) = 63."
        },
        {
          title: "Divide directed numbers",
          task: { kind: "match", q: "Match each calculation to its answer.",
                  pairs: [["(−56) ÷ (−7)", "8"], ["56 ÷ (−7)", "−8"], ["(−6) × 4", "−24"], ["(−6) × (−4)", "24"]],
                  check: "[(-56) / (-7), 56 / (-7), (-6) * 4, (-6) * (-4)]" },
          explain: "Say, in one sentence, how you told the two positive answers apart from the two negative ones.",
          levels: {
            support: {
              steps: ["Work out the digits as normal.", "Look at the signs of the two numbers.", "Same signs: positive. Different signs: negative."],
              example: { q: "Work out (−45) ÷ (−5).",
                         steps: ["45 ÷ 5 = 9.", "Both numbers are negative: same signs.", "(−45) ÷ (−5) = 9."],
                         answer: "9", check: "(-45) / (-5)" }
            },
            core: { hint: "Two of the answers are positive. Look for the calculations where the signs are the same." },
            stretch: { extend: "Write the full fact family for (−56) ÷ (−7). Explain how each fact in it follows the sign rules." }
          },
          why: "56 ÷ 7 = 8 and 6 × 4 = 24. Same signs give a positive answer, and different signs give a negative answer."
        },
        {
          title: "Three numbers",
          task: { kind: "numeric", q: "Work out (−2) × 5 × (−3).", answer: 30, tolerance: 0, units: "", check: "(-2) * 5 * (-3)",
                  misconceptions: [
                    { answer: -30, says: "You saw negative numbers and made the answer negative. There are two negatives here: (−2) × 5 = −10, then −10 × (−3) = 30, a positive.", check: "-(2 * 5 * 3)" },
                    { answer: -10, says: "You stopped after the first step. (−2) × 5 = −10, but you still have to multiply by −3: −10 × (−3) = 30.", check: "(-2) * 5" }
                  ] },
          explain: "Say, in one sentence, why multiplying two negative numbers and one positive number gives a positive answer.",
          levels: {
            support: {
              steps: ["Work from left to right.", "Multiply the first two numbers and sort out the sign.", "Multiply that answer by the third number."],
              example: { q: "Work out (−4) × (−2) × (−5).",
                         steps: ["(−4) × (−2) = 8.", "8 × (−5) = −40."],
                         answer: "−40", check: "(-4) * (-2) * (-5)" }
            },
            core: { hint: "Work out (−2) × 5 first." },
            stretch: { extend: "Without working it out, say whether (−1) × (−1) × (−1) × (−1) × (−1) is positive or negative. Explain the rule you used." }
          },
          why: "(−2) × 5 = −10, then −10 × (−3) = 30."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 6
    {
      key: "order-of-operations", n: 6,
      title: "Order of operations, squares and the calculator",
      lead: "Use the order of operations with negative numbers, square negatives, substitute, and check on a calculator.",
      covers: [8, 9],
      pretext: {
        words: [
          { word: "order of operations", means: "the rule for which part of a calculation to do first", sentence: "The order of operations says brackets come first." },
          { word: "index", means: "a power, like the small 2 in 5²", sentence: "In 5², the 2 is an index." },
          { word: "square", means: "a number multiplied by itself", sentence: "The square of −4 is 16." },
          { word: "substitute", means: "to put a number in place of a letter", sentence: "Substitute −2 for y, so 3y becomes 3 × (−2)." },
          { word: "negative key", means: "the (−) key on a calculator that makes a number negative", sentence: "Press the negative key to type −3." }
        ],
        passage: [
          "Some sums have lots of steps.",
          "We need a rule for what to do first.",
          "Brackets come first.",
          "Then powers, like squares.",
          "Then times and divide.",
          "Then add and take away.",
          "Negative numbers follow the same rule.",
          "Look at 10 − 2 × (−3).",
          "Times first: 2 × (−3) is −6.",
          "Then 10 − (−6) is 16.",
          "Squaring a negative number gives a positive answer.",
          "(−4)² is −4 × −4, which is 16.",
          "On a calculator, put brackets round a negative number before you square it."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "القاعدة التي تحدد أي جزء من العملية الحسابية نحسبه أولاً (order of operations)",
            "قوة، مثل الرقم 2 الصغير في 5² (index)",
            "عدد مضروب في نفسه (square)",
            "وضع عدد مكان حرف (substitute)",
            "زر (−) في الآلة الحاسبة الذي يجعل العدد سالباً (negative key)"
          ],
          "passage": [
            "بعض العمليات الحسابية فيها خطوات كثيرة.",
            "نحتاج إلى قاعدة تحدد ما نفعله أولاً.",
            "الأقواس أولاً.",
            "ثم القوى، مثل المربعات.",
            "ثم الضرب والقسمة.",
            "ثم الجمع والطرح.",
            "الأعداد السالبة تتبع القاعدة نفسها.",
            "انظر إلى 10 − 2 × (−3).",
            "الضرب أولاً: 2 × (−3) يساوي −6.",
            "ثم 10 − (−6) يساوي 16.",
            "تربيع عدد سالب يعطي جواباً موجباً.",
            "(−4)² يساوي −4 × −4، أي 16.",
            "في الآلة الحاسبة، ضع العدد السالب بين قوسين قبل أن تربّعه."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "zasada mówiąca, którą część działania zrobić najpierw (order of operations)",
            "potęga, jak mała 2 w 5² (index, wykładnik)",
            "liczba pomnożona przez samą siebie (square, kwadrat)",
            "wstawić liczbę w miejsce litery (substitute)",
            "klawisz (−) w kalkulatorze, który robi z liczby liczbę ujemną (negative key)"
          ],
          "passage": [
            "Niektóre działania mają wiele kroków.",
            "Potrzebujemy zasady, co robić najpierw.",
            "Najpierw nawiasy.",
            "Potem potęgi, na przykład kwadraty.",
            "Potem mnożenie i dzielenie.",
            "Potem dodawanie i odejmowanie.",
            "Liczby ujemne idą według tej samej zasady.",
            "Spójrz na 10 − 2 × (−3).",
            "Najpierw mnożenie: 2 × (−3) to −6.",
            "Potem 10 − (−6) to 16.",
            "Podnoszenie liczby ujemnej do kwadratu daje wynik dodatni.",
            "(−4)² to −4 × −4, czyli 16.",
            "W kalkulatorze wpisz liczbę ujemną w nawiasie, zanim podniesiesz ją do kwadratu."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a regra que diz qual parte de uma conta se faz primeiro (order of operations)",
            "uma potência, como o pequeno 2 em 5² (index, expoente)",
            "um número multiplicado por si mesmo (square, quadrado)",
            "colocar um número no lugar de uma letra (substitute)",
            "a tecla (−) da calculadora que torna um número negativo (negative key)"
          ],
          "passage": [
            "Algumas contas têm muitos passos.",
            "Precisamos de uma regra para saber o que fazer primeiro.",
            "Os parênteses vêm primeiro.",
            "Depois, as potências, como os quadrados.",
            "Depois, multiplicar e dividir.",
            "Depois, somar e tirar.",
            "Os números negativos seguem a mesma regra.",
            "Olhe para 10 − 2 × (−3).",
            "Primeiro a multiplicação: 2 × (−3) é −6.",
            "Depois, 10 − (−6) é 16.",
            "Elevar um número negativo ao quadrado dá uma resposta positiva.",
            "(−4)² é −4 × −4, que é 16.",
            "Na calculadora, coloque parênteses em volta de um número negativo antes de elevar ao quadrado."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "xeerka sheegaya qaybta xisaabta marka hore la sameeyo (order of operations)",
            "jibbaar, sida 2-da yar ee ku jirta 5² (index)",
            "tiro lagu dhuftay nafteeda (square)",
            "in tiro la geliyo meesha xaraf (substitute)",
            "badhanka (−) ee xisaabiyaha oo tiro ka dhiga taban (negative key)"
          ],
          "passage": [
            "Xisaabaadka qaarkood tallaabooyin badan ayay leeyihiin.",
            "Waxaan u baahannahay xeer sheegaya waxa marka hore la sameeyo.",
            "Qawsaha (brackets) ayaa marka hore yimaada.",
            "Kadib jibbaarrada (powers), sida labajibbaaranta (squares).",
            "Kadib isku-dhufasho iyo u-qaybin.",
            "Kadib isku-darid iyo ka-jarid.",
            "Tirooyinka taban isla xeerkaas ayay raacaan.",
            "Eeg 10 − 2 × (−3).",
            "Isku-dhufasho marka hore: 2 × (−3) waa −6.",
            "Kadib 10 − (−6) waa 16.",
            "Labajibbaarista tiro taban waxay bixisaa jawaab togan.",
            "(−4)² waa −4 × −4, taasoo ah 16.",
            "Xisaabiyaha (calculator), tiro taban qawsaha ku dhex geli ka hor intaadan labajibbaarin."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "правило, яке каже, яку частину прикладу виконувати першою",
            "степінь, наприклад маленька 2 у 5²",
            "число, помножене саме на себе",
            "поставити число замість букви",
            "клавіша (−) на калькуляторі, яка робить число від’ємним"
          ],
          "passage": [
            "Деякі приклади мають багато кроків.",
            "Нам потрібне правило, що робити першим.",
            "Спочатку дужки.",
            "Потім степені, наприклад квадрати.",
            "Потім множення і ділення.",
            "Потім додавання і віднімання.",
            "Від’ємні числа підкоряються тому самому правилу.",
            "Подивіться на 10 − 2 × (−3).",
            "Спочатку множення: 2 × (−3) дорівнює −6.",
            "Потім 10 − (−6) дорівнює 16.",
            "Піднесення від’ємного числа до квадрата дає додатну відповідь.",
            "(−4)² — це −4 × −4, тобто 16.",
            "На калькуляторі візьміть від’ємне число в дужки, перш ніж підносити його до квадрата."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "یہ اصول کہ حساب کا کون سا حصہ پہلے کرنا ہے (order of operations)",
            "قوت، جیسے 5² میں چھوٹا سا 2 (index)",
            "کسی عدد کو خود اسی سے ضرب دینا (square)",
            "کسی حرف کی جگہ عدد رکھنا (substitute)",
            "کیلکولیٹر کا (−) بٹن جو عدد کو منفی بناتا ہے (negative key)"
          ],
          "passage": [
            "کچھ سوالوں میں بہت سے مراحل ہوتے ہیں۔",
            "ہمیں ایک اصول چاہیے کہ پہلے کیا کرنا ہے۔",
            "سب سے پہلے بریکٹ (brackets)۔",
            "پھر قوتیں (powers)، جیسے مربع (squares)۔",
            "پھر ضرب اور تقسیم۔",
            "پھر جمع اور تفریق۔",
            "منفی اعداد بھی اسی اصول پر چلتے ہیں۔",
            "اب اس سوال کو دیکھیں: 10 − 2 × (−3)۔",
            "پہلے ضرب: 2 × (−3) کا جواب −6 ہے۔",
            "پھر 10 − (−6) کا جواب 16 ہے۔",
            "منفی عدد کا مربع کرنے سے مثبت جواب ملتا ہے۔",
            "(−4)² کا مطلب ہے −4 × −4، جو 16 ہے۔",
            "کیلکولیٹر پر منفی عدد کا مربع کرنے سے پہلے اس کے گرد بریکٹ لگائیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "The order of operations",
          paragraphs: [
            "Brackets first, then indices (powers and roots), then multiplication and division, then addition and subtraction. Everyone uses the same order, so everyone gets the same answer.",
            "Negative numbers do not change the order. In 12 + 4 × (−2), multiply first: 4 × (−2) = −8. Then 12 + (−8) = 4.",
            "Brackets can change the answer: (12 + 4) × (−2) = 16 × (−2) = −32."
          ],
          worked: {
            q: "Work out 15 − 3 × (−4).",
            steps: ["Multiply first: 3 × (−4) = −12.", "Then 15 − (−12) = 15 + 12.", "15 + 12 = 27."],
            answer: "27", check: "15 - 3 * (-4)"
          },
          tip: "Do not just work from left to right. Look for × and ÷ first."
        },
        {
          heading: "Squaring negative numbers",
          paragraphs: [
            "(−5)² means (−5) × (−5). Two negatives multiplied give a positive, so (−5)² = 25.",
            "Without brackets it is different. −5² means 'the negative of 5²', so −5² = −25. The brackets tell you that the whole of −5 is squared.",
            "In a longer calculation, do the power before × and ÷. (−3)² − 4 × 5 = 9 − 20 = −11."
          ],
          worked: {
            q: "Work out (−6)² + 2 × (−7).",
            steps: ["Power first: (−6)² = 36.", "Then multiply: 2 × (−7) = −14.", "Then 36 + (−14) = 22."],
            answer: "22", check: "(-6)**2 + 2 * (-7)"
          },
          tip: "Square a negative number and the answer is always positive."
        },
        {
          heading: "Substituting and using a calculator",
          paragraphs: [
            "To substitute, put a number in place of a letter. If y is −3, then 4y means 4 × (−3) = −12.",
            "y² means y × y. So if y is −3, then y² is (−3)² = 9. Always put a negative number in brackets when you substitute it.",
            "On a calculator, use the negative key and brackets. To find (−3)², type the bracket, the negative key, 3, the closing bracket and then the square key. If you leave out the brackets, the calculator works out −3² = −9 instead."
          ],
          worked: {
            q: "Work out the value of 2y² when y = −4.",
            steps: ["Substitute with brackets: 2 × (−4)².", "Power first: (−4)² = 16.", "Then 2 × 16 = 32."],
            answer: "32", check: "2 * (-4)**2"
          },
          tip: "Brackets round negative numbers: on paper and on the calculator."
        }
      ],
      gate: [
        { kind: "numeric", q: "Work out (−7) × (−3).", answer: 21, tolerance: 0, units: "", check: "(-7) * (-3)",
          misconceptions: [
            { answer: -21, says: "Right digits, wrong sign. Both numbers are negative, and same signs multiplied give a positive: 21.", check: "-(7 * 3)" },
            { answer: -10, says: "You added the two numbers: −7 + (−3) = −10. The × sign means multiply: 7 × 3 = 21, and two negatives give a positive.", check: "-7 + (-3)" }
          ],
          why: "7 × 3 = 21, and two negatives multiplied give a positive." },
        { kind: "mcq", q: "In 5 + 6 × (−2), which part do you work out first?", options: ["the addition 5 + 6", "the multiplication 6 × (−2)", "the addition 5 + (−2)"], answer: 1,
          feedback: [
            "You worked from left to right. The order of operations puts multiplication before addition, so 6 × (−2) is worked out first.",
            "",
            "5 and −2 are not next to each other in the calculation, and the × must be done before any +. Work out 6 × (−2) = −12 first, then add it to 5."
          ],
          why: "Multiplication comes before addition in the order of operations." },
        { kind: "numeric", q: "Work out 8 × (5 − 9).", answer: -32, tolerance: 0, units: "", check: "8 * (5 - 9)",
          misconceptions: [
            { answer: 31, says: "You ignored the brackets and multiplied 8 × 5 first. Brackets come first: 5 − 9 = −4, and then 8 × (−4) = −32.", check: "8 * 5 - 9" },
            { answer: 32, says: "Right digits, wrong sign. Inside the brackets 5 − 9 = −4, a negative, so 8 × (−4) is negative: −32.", check: "8 * (9 - 5)" }
          ],
          why: "Brackets first: 5 − 9 = −4. Then 8 × (−4) = −32." }
      ],
      modules: [
        {
          title: "Order of operations with negatives",
          task: { kind: "mcq", q: "Work out 18 − 6 × (−3).", options: ["−36", "0", "36", "−18"], answer: 2, check: "18 - 6 * (-3)",
                  feedback: [
                    "You worked from left to right: 18 − 6 = 12, then 12 × (−3) = −36. Multiplication comes first: 6 × (−3) = −18, then 18 − (−18).",
                    "You worked out 18 − 18. The multiplication gives −18, so the calculation is 18 − (−18), and subtracting a negative gives 18 + 18 = 36.",
                    "",
                    "You stopped after 6 × (−3) = −18. Now subtract it from 18: 18 − (−18) = 18 + 18 = 36."
                  ] },
          explain: "Say, in one sentence, why 6 × (−3) had to be worked out before the subtraction.",
          levels: {
            support: {
              steps: ["Look for brackets and powers first.", "Then do any × or ÷.", "Then do + and −, from left to right."],
              example: { q: "Work out 10 − 4 × (−2).",
                         steps: ["Multiply first: 4 × (−2) = −8.", "Then 10 − (−8) = 10 + 8.", "10 + 8 = 18."],
                         answer: "18", check: "10 - 4 * (-2)" }
            },
            core: { hint: "Work out 6 × (−3) before anything else." },
            stretch: { extend: "Where could you put brackets in 18 − 6 × (−3) to get −36? Explain why the answer changes." }
          },
          why: "Multiply first: 6 × (−3) = −18. Then 18 − (−18) = 18 + 18 = 36."
        },
        {
          title: "Squares of negative numbers",
          task: { kind: "numeric", q: "Work out (−5)² − 3 × 8.", answer: 1, tolerance: 0, units: "", check: "(-5)**2 - 3 * 8",
                  misconceptions: [
                    { answer: -49, says: "You squared 5 and kept the minus sign, as if it were −5², then took away 24. The brackets mean the whole of −5 is squared: (−5)² = 25, and 25 − 24 = 1.", check: "-5**2 - 3 * 8" },
                    { answer: 176, says: "You worked from left to right: 25 − 3 = 22, then 22 × 8 = 176. Multiplication comes before subtraction: 3 × 8 = 24 first, then 25 − 24 = 1.", check: "((-5)**2 - 3) * 8" }
                  ] },
          explain: "Say, in one sentence, why (−5)² is positive.",
          levels: {
            support: {
              steps: ["Square first: keep the negative number in its brackets and multiply it by itself.", "Then do the multiplication.", "Then add or subtract."],
              example: { q: "Work out (−4)² − 2 × 9.",
                         steps: ["(−4)² = 16.", "2 × 9 = 18.", "16 − 18 = −2."],
                         answer: "−2", check: "(-4)**2 - 2 * 9" }
            },
            core: { hint: "(−5)² means (−5) × (−5)." },
            stretch: { extend: "Mo types −5² into his calculator and gets −25. Explain why, and say exactly what he should type to get 25." }
          },
          why: "(−5)² = 25 and 3 × 8 = 24, so 25 − 24 = 1."
        },
        {
          title: "Substitute a negative number",
          task: { kind: "numeric", q: "Work out the value of 3y² − y when y = −2.", answer: 14, tolerance: 0, units: "", check: "3 * (-2)**2 - (-2)",
                  misconceptions: [
                    { answer: -10, says: "You squared 2 and kept the minus sign, as if y² were −4. With brackets, (−2)² = 4, so 3y² is 12, and 12 − (−2) = 14.", check: "3 * -(2**2) - (-2)" },
                    { answer: 10, says: "You took away 2 at the end, but y is −2, so you must take away −2. Subtracting a negative adds: 12 − (−2) = 12 + 2 = 14.", check: "3 * (-2)**2 + (-2)" },
                    { answer: 38, says: "You squared 3y instead of y: (3 × (−2))² = 36. Only y is squared: 3y² means 3 × (−2)² = 3 × 4 = 12.", check: "(3 * (-2))**2 - (-2)" }
                  ] },
          explain: "Say, in one sentence, why the brackets round −2 matter when you square it.",
          levels: {
            support: {
              steps: ["Rewrite the expression with the number, in brackets, in place of y.", "Do the power first.", "Then multiply, then add or subtract."],
              example: { q: "Work out the value of 2y² + y when y = −3.",
                         steps: ["Substitute: 2 × (−3)² + (−3).", "(−3)² = 9.", "2 × 9 = 18.", "18 + (−3) = 15."],
                         answer: "15", check: "2 * (-3)**2 + (-3)" }
            },
            core: { hint: "When y is −2, y² is (−2)² = 4." },
            stretch: { extend: "Is 3y² − y ever negative when y is a negative number? Try some values and explain what you find." }
          },
          why: "3 × (−2)² = 3 × 4 = 12, and 12 − (−2) = 14."
        }
      ]
    }
  ],

  sources: {
    deckDump: "ma_y07_10_main.txt",
    decksUsed: [
      "1 & 2- Number lines, Compare & order Directed number.pptx",
      "3 & 4- Calculations that cross zero & zero pairs.pptx",
      "5 & 6- Add and Subtract directed numbers.pptx",
      "7- Multiply & divide directed numbers.pptx",
      "8- Order of operations with directed numbers.pptx",
      "9- Use a calculator with directed numbers.pptx",
      "Support: ma_y07_10_support.txt (01–07 and Directed Number Revision)"
    ],
    notes: "Lesson sequence and titles come from the six MAIN decks, which number their lessons 1–9 (four decks each carry two lessons). The SUPPORT sequence (ma_y07_10_support.txt) has seven lesson decks plus a revision deck: 01 Directed number and number lines; 02 Compare and order directed numbers; 03 Calculations that cross zero; 04 Directed number and zero pairs; 05 Add directed numbers; 06 Subtract directed numbers; 07 Add and subtract directed numbers; Directed Number Revision. It stops at addition and subtraction (no multiplication, division, order of operations or calculator lesson), and it teaches through thermometers, double-sided counters and 'I do / You do' pairs. Those features shape every `support` level: steps are counter- or number-line-based and every support example is a parallel 'I do' worked example. All questions in this manifest use original numbers; the skills, contexts (thermometers, counters, mean, substitution, calculator brackets) and misconceptions (skipping zero, 'two negatives make a positive' misapplied to addition, −3² on a calculator) are the decks' own. No slide images were available to this build, so no number was copied from a layout-lost slide. See NOTES.md."
  }
};
