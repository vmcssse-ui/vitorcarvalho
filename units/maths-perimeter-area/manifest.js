// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest (schema astra/2) — Maths, Year 7, Unit 12: Perimeter and Area.
// Every numeric item carries `check`: a plain Python expression recomputed by verify.py.
//   numeric / gap      -> check evaluates to the answer
//   mcq (numbers)      -> check evaluates to the value of the one correct option
//   mcq (algebra)      -> check is an unsimplified expression; exactly one option is equivalent (sympy)
//   order              -> check evaluates to the list of item values (lengths in metres) in the correct order
//   match              -> check evaluates to the list of right-hand values, pair by pair
//   worked / example   -> check evaluates to the value(s) in `answer`
//   misconceptions[]   -> each `check` reproduces that wrong answer from the pupil's likely working
// Units: every numeric answer states its unit (cm, m, mm, km or cm², m², mm²); verify.py lints that a
// question asking for an area gets a squared unit and a question asking for a length does not, and that
// every context variant names the same unit as its task (contexts inherit the task's `units` label).
// verify.py also recomputes every pure-arithmetic statement (=, <, >) written in prose fields.
// No `pretext.l1` (home-language lines are added later by a separate translation pass); no `meta.constellation`.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["maths-perimeter-area"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "maths-perimeter-area",
    subjectKey: "maths",
    subject: "Mathematics",
    board: "AQA",
    spec: "KS3 → 8300",
    specRef: "Geometry and measures: units of length, perimeter and area (KS3, leading to AQA 8300 G17 and N13)",
    year: 7,
    tier: "KS3",
    title: "Perimeter and Area",
    sub: "Year 7, Unit 12: metric units of length, the distance round a shape, the space inside it, and expressions for both.",
    bigQuestion: "How do we measure the edge of a shape and the space inside it, and how can letters stand for lengths we do not know?",
    lessonCount: 7,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Convert metric units of length", question: "How do we change between millimetres, centimetres, metres and kilometres?", keywords: ["millimetre", "centimetre", "metre", "kilometre", "convert"] },
    { n: 2, title: "Perimeter of a polygon", question: "How do we calculate the perimeter of a 2-D shape?", keywords: ["perimeter", "polygon", "regular polygon", "edge"] },
    { n: 3, title: "Perimeter of a compound shape", question: "How do we find the perimeter of a shape made from two or more polygons?", keywords: ["compound shape", "component shape", "missing length"] },
    { n: 4, title: "Area of rectangles and parallelograms", question: "How do we work out the area of a rectangle and of a parallelogram?", keywords: ["area", "base", "perpendicular height", "parallelogram", "square units"] },
    { n: 5, title: "Area of a triangle", question: "Why is the area of a triangle half of base times height?", keywords: ["triangle", "base", "perpendicular height", "half"] },
    { n: 6, title: "Area of a trapezium", question: "How do we calculate the area of a trapezium?", keywords: ["trapezium", "parallel sides", "perpendicular height", "formula"] },
    { n: 7, title: "Form expressions with perimeter and area", question: "How can we write the perimeter and area of a shape when some sides are letters?", keywords: ["expression", "simplify", "like terms", "term"] }
  ],

  glossary: [
    { term: "millimetre", means: "A very small unit of length, written mm. There are 10 mm in 1 cm.", chapter: "metric-units" },
    { term: "centimetre", means: "A unit of length, written cm, about the width of a fingernail. There are 100 cm in 1 m.", chapter: "metric-units" },
    { term: "metre", means: "A unit of length, written m, about one big step. There are 1000 m in 1 km.", chapter: "metric-units" },
    { term: "kilometre", means: "A unit for long distances, written km. Kilo- means a thousand.", chapter: "metric-units" },
    { term: "perimeter", means: "The total distance all the way round the edge of a 2-D shape.", chapter: "perimeter" },
    { term: "polygon", means: "A closed 2-D shape made of straight sides.", chapter: "perimeter" },
    { term: "regular polygon", means: "A polygon whose sides are all the same length and whose angles are all the same size.", chapter: "perimeter" },
    { term: "compound shape", means: "A shape made from two or more simple shapes joined together.", chapter: "perimeter" },
    { term: "area", means: "The amount of space inside a flat shape, measured in square units such as cm².", chapter: "area-rectangles-parallelograms" },
    { term: "parallelogram", means: "A four-sided shape with two pairs of parallel sides. Opposite sides are equal.", chapter: "area-rectangles-parallelograms" },
    { term: "perpendicular height", means: "The height of a shape measured at a right angle to its base, not along a slanted side.", chapter: "area-triangle" },
    { term: "trapezium", means: "A four-sided shape with exactly one pair of parallel sides.", chapter: "area-trapezium" },
    { term: "expression", means: "A collection of numbers and letters joined by + or −, such as 4a + 6.", chapter: "expressions" },
    { term: "term", means: "One part of an expression. In 4a + 6, the terms are 4a and 6.", chapter: "expressions" },
    { term: "like terms", means: "Terms with exactly the same letter part, such as 3a and 5a. Only like terms can be added.", chapter: "expressions" },
    { term: "simplify", means: "To write an expression with as few terms as possible by collecting like terms.", chapter: "expressions" }
  ],

  // Connections game: 4 groups × 4 terms, all drawn from the glossary above.
  connections: [
    { group: "Units of length", terms: ["millimetre", "centimetre", "metre", "kilometre"] },
    { group: "Words about the edge of a shape", terms: ["perimeter", "polygon", "regular polygon", "compound shape"] },
    { group: "Words about the space inside a shape", terms: ["area", "parallelogram", "perpendicular height", "trapezium"] },
    { group: "Words about letters in maths", terms: ["expression", "term", "like terms", "simplify"] }
  ],

  chapters: [
    // ───────────────────────────────────────────── Chapter 1
    {
      key: "metric-units", n: 1,
      title: "Metric units of length",
      lead: "Choose a sensible unit, and change between millimetres, centimetres, metres and kilometres.",
      covers: [1],
      pretext: {
        words: [
          { word: "millimetre", means: "a very small unit of length, written mm", sentence: "A grain of rice is about 7 millimetres long." },
          { word: "centimetre", means: "a unit of length, written cm; there are 10 mm in 1 cm", sentence: "This ruler is 30 centimetres long." },
          { word: "metre", means: "a unit of length, written m; there are 100 cm in 1 m", sentence: "The door is about 2 metres tall." },
          { word: "kilometre", means: "a unit for long distances, written km; 1 km is 1000 m", sentence: "We walked 3 kilometres to the park." },
          { word: "convert", means: "to change a measurement from one unit to another", sentence: "Convert 4 metres to centimetres: it is 400 cm." }
        ],
        passage: [
          "We measure length in metric units.",
          "The small units are millimetres and centimetres.",
          "A grain of rice is a few millimetres long.",
          "A pencil is about 15 centimetres long.",
          "A door is about 2 metres tall.",
          "Long distances are measured in kilometres.",
          "There are 10 millimetres in 1 centimetre.",
          "There are 100 centimetres in 1 metre.",
          "There are 1000 metres in 1 kilometre.",
          "To change a big unit into a small unit, we multiply.",
          "To change a small unit into a big unit, we divide.",
          "So 3 centimetres is 30 millimetres.",
          "And 500 centimetres is 5 metres."
        ]
      },
      sections: [
        {
          heading: "Choosing a sensible unit",
          paragraphs: [
            "Before you measure anything, choose a unit that fits. Millimetres are for tiny things: the thickness of a bank card, the length of a grain of rice. Centimetres suit a pencil, a book or your own height.",
            "Metres suit a room, a house or a swimming pool. Kilometres are for distances you would travel: the way to school, or the distance from London to Brighton.",
            "Two people can both be right. Your height could be 150 cm or 1.5 m. They are the same length written in different units. The unit you pick should give a number that is easy to picture."
          ],
          worked: {
            q: "Which unit would you use to measure the height of a house?",
            steps: ["A house is much taller than a person, so centimetres would give a very big number.", "A house is nowhere near a kilometre tall.", "Metres fit: a house is about 8 to 10 metres tall."],
            answer: "metres"
          },
          tip: "Picture the unit: a millimetre is about the thickness of a bank card, a centimetre is about a fingernail, a metre is one big step."
        },
        {
          heading: "Millimetres, centimetres and metres",
          paragraphs: [
            "There are 10 millimetres in 1 centimetre. To change centimetres into millimetres, multiply by 10. To change millimetres into centimetres, divide by 10.",
            "There are 100 centimetres in 1 metre. To change metres into centimetres, multiply by 100. To change centimetres into metres, divide by 100.",
            "Here is the rule to remember. Going to a smaller unit means you need more of them, so the number gets bigger: multiply. Going to a bigger unit means you need fewer of them, so the number gets smaller: divide."
          ],
          worked: {
            q: "Convert 36 cm to millimetres.",
            steps: ["Millimetres are smaller than centimetres, so the number will get bigger: multiply.", "There are 10 mm in 1 cm, so multiply by 10.", "36 × 10 = 360."],
            answer: "360 mm",
            check: "36 * 10"
          },
          tip: "Smaller unit, bigger number. Bigger unit, smaller number."
        },
        {
          heading: "Metres, kilometres and the whole chain",
          paragraphs: [
            "The prefix kilo- means a thousand, so 1 kilometre is 1000 metres. To change kilometres into metres, multiply by 1000. To change metres into kilometres, divide by 1000.",
            "You can line the units up as a chain: kilometres, metres, centimetres, millimetres. Moving right along the chain you multiply by 1000, then 100, then 10. Moving left you divide by the same numbers.",
            "To change a length through two steps, do one step at a time. To change 2 km into centimetres: 2 × 1000 = 2000 metres, then 2000 × 100 = 200000 centimetres."
          ],
          worked: {
            q: "Convert 3.4 km to metres.",
            steps: ["Metres are smaller than kilometres, so multiply.", "There are 1000 m in 1 km, so multiply by 1000.", "3.4 × 1000 = 3400."],
            answer: "3400 m",
            check: "3.4 * 1000"
          },
          tip: "Multiplying a decimal by 1000 moves every digit three places to the left: 3.4 becomes 3400."
        },
        {
          heading: "Comparing lengths in different units",
          paragraphs: [
            "You cannot compare 4.9 m with 4900 mm just by looking at the numbers. First write both lengths in the same unit. 4.9 m is 490 cm, which is 4900 mm, so the two lengths are equal.",
            "Pick the unit that makes the numbers easy. Usually the smaller unit works best, because you avoid decimals.",
            "Once both lengths are in the same unit, compare the numbers as normal, and remember to say which length is longer, not just which number is bigger."
          ],
          worked: {
            q: "How many metres longer is 0.8 km than 750 m?",
            steps: ["Change 0.8 km into metres: 0.8 × 1000 = 800.", "Now both lengths are in metres: 800 m and 750 m.", "800 − 750 = 50."],
            answer: "50 m",
            check: "0.8 * 1000 - 750"
          },
          tip: "Same unit first, then compare."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which unit is most sensible for measuring the length of a classroom?", options: ["millimetres", "centimetres", "metres", "kilometres"], answer: 2,
          feedback: [
            "Millimetres are about the thickness of a bank card. A classroom is thousands of them long, so the number would be enormous.",
            "Centimetres suit a pencil or a book. A classroom is about 8 metres long, so metres give a number that is easy to picture.",
            "",
            "A kilometre is about a 12-minute walk. A classroom is a tiny part of one, so the number would be a very small decimal."
          ],
          why: "A classroom is a few big steps long, so metres give a sensible number, about 8 m." },
        { kind: "numeric", q: "Convert 7 cm to millimetres.", answer: 70, tolerance: 0, units: "mm", check: "7 * 10",
          misconceptions: [
            { answer: 0.7, says: "You divided by 10. Millimetres are smaller than centimetres, so there are more of them: multiply. 7 × 10 = 70.", check: "7 / 10" },
            { answer: 700, says: "You multiplied by 100, which is the metres to centimetres step. There are 10 mm in 1 cm, so 7 × 10 = 70.", check: "7 * 100" }
          ],
          why: "There are 10 mm in every centimetre, so 7 × 10 = 70." },
        { kind: "gap", q: "There are ___ metres in 1 kilometre.", answer: "1000", options: ["10", "100", "1000"], check: "1000",
          feedback: {
            "10": "10 is the number of millimetres in a centimetre. Kilo- means a thousand, so a kilometre is a thousand metres.",
            "100": "100 is the number of centimetres in a metre. Kilo- means a thousand, so a kilometre is a thousand metres."
          },
          why: "Kilo- means a thousand: 1 km is 1000 m." }
      ],
      modules: [
        {
          title: "Millimetres to centimetres",
          task: { kind: "numeric", q: "A key is 58 mm long. What is its length in centimetres?", answer: 5.8, tolerance: 0, units: "cm", check: "58 / 10",
                  misconceptions: [
                    { answer: 580, says: "You multiplied by 10. Centimetres are bigger than millimetres, so there are fewer of them: divide. 58 ÷ 10 = 5.8.", check: "58 * 10" },
                    { answer: 0.58, says: "You divided by 100. Millimetres to centimetres is one step of 10, not two: 58 ÷ 10 = 5.8.", check: "58 / 100" }
                  ] },
          explain: "Say, in one sentence, how you knew whether to multiply or divide by 10.",
          contexts: [
            { label: "Beetle", q: "A beetle is 58 mm long. What is its length in centimetres?",
              why: "Centimetres are bigger than millimetres, so divide by 10: 58 ÷ 10 = 5.8." },
            { label: "Phone", q: "A phone is 58 mm wide. What is its width in centimetres?",
              why: "Centimetres are bigger than millimetres, so divide by 10: 58 ÷ 10 = 5.8." }
          ],
          levels: {
            support: {
              steps: ["Decide: is the new unit bigger or smaller than the old one?", "Bigger unit means a smaller number, so divide.", "Millimetres to centimetres is one step of 10, so divide by 10."],
              example: { q: "Convert 73 mm to centimetres.",
                         steps: ["Centimetres are bigger than millimetres, so divide.", "There are 10 mm in 1 cm, so divide by 10.", "73 ÷ 10 = 7.3."],
                         answer: "7.3 cm", check: "73 / 10" }
            },
            core: { hint: "There are 10 mm in 1 cm. Are you going to a bigger or a smaller unit?" },
            stretch: { extend: "Now write 58 mm in metres. Explain each step of the chain you used, and why the number got smaller each time." }
          },
          why: "Centimetres are bigger than millimetres, so you need fewer of them: 58 ÷ 10 = 5.8."
        },
        {
          title: "Metres to centimetres",
          task: { kind: "mcq", q: "A rope is 3.6 m long. How long is it in centimetres?", options: ["36 cm", "360 cm", "3600 cm", "0.036 cm"], answer: 1, check: "3.6 * 100",
                  feedback: [
                    "You multiplied by 10. That is the centimetres to millimetres step. There are 100 cm in 1 m, so 3.6 × 100 = 360.",
                    "",
                    "You multiplied by 1000, which is the kilometres to metres step. There are 100 cm in 1 m, so 3.6 × 100 = 360.",
                    "You divided by 100. Centimetres are smaller than metres, so there are more of them and the number must get bigger: 3.6 × 100 = 360."
                  ] },
          explain: "Say, in one sentence, why the number gets bigger when you change metres into centimetres.",
          contexts: [
            { label: "Garden path", q: "A garden path is 3.6 m long. How long is it in centimetres?",
              why: "There are 100 cm in 1 m, so multiply by 100: 3.6 × 100 = 360." },
            { label: "Shark", q: "A young shark is 3.6 m long. How long is it in centimetres?",
              why: "There are 100 cm in 1 m, so multiply by 100: 3.6 × 100 = 360." }
          ],
          levels: {
            support: {
              steps: ["Centimetres are smaller than metres, so the number gets bigger: multiply.", "There are 100 cm in 1 m, so multiply by 100.", "Multiplying by 100 moves every digit two places to the left."],
              example: { q: "Convert 2.4 m to centimetres.",
                         steps: ["Centimetres are smaller, so multiply.", "Multiply by 100.", "2.4 × 100 = 240."],
                         answer: "240 cm", check: "2.4 * 100" }
            },
            core: { hint: "There are 100 cm in 1 m." },
            stretch: { extend: "Sam says 3.6 m is 36 cm because you just remove the decimal point. Explain what Sam has done wrong and what the correct method is." }
          },
          why: "There are 100 cm in every metre, so 3.6 × 100 = 360."
        },
        {
          title: "Order lengths in mixed units",
          task: { kind: "order", q: "Put these lengths in order, shortest first: 45 m, 0.05 km, 4900 mm, 4800 cm.",
                  items: ["4900 mm", "45 m", "4800 cm", "0.05 km"], check: "sorted([4900 / 1000, 45, 4800 / 100, 0.05 * 1000])" },
          explain: "Say, in one sentence, which unit you changed everything into and why you chose it.",
          levels: {
            support: {
              steps: ["Change every length into the same unit. Metres work well here.", "4900 mm is 4.9 m; 4800 cm is 48 m; 0.05 km is 50 m.", "Now order the numbers: 4.9, 45, 48, 50."],
              example: { q: "Put these lengths in order, shortest first: 300 cm, 2 m, 2500 mm.",
                         steps: ["Change everything into metres.", "300 cm is 3 m; 2500 mm is 2.5 m.", "Order: 2, 2.5, 3."],
                         answer: "2 m, 2500 mm, 300 cm", check: "sorted([2, 2500 / 1000, 300 / 100])" }
            },
            core: { hint: "Change all four lengths into metres before you compare them." },
            stretch: { extend: "Write all four lengths in millimetres instead. Does the order change? Explain why a bigger number of millimetres still means the same length." }
          },
          why: "In metres the lengths are 4.9 m, 45 m, 48 m and 50 m, so the order is 4900 mm, 45 m, 4800 cm, 0.05 km."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 2
    {
      key: "perimeter", n: 2,
      title: "Perimeter of polygons and compound shapes",
      lead: "Add the sides to find the distance round a shape, find a missing side, and deal with shapes made of other shapes.",
      covers: [2, 3],
      pretext: {
        words: [
          { word: "perimeter", means: "the distance all the way round the edge of a shape", sentence: "The perimeter of the field is 400 metres." },
          { word: "polygon", means: "a closed flat shape made of straight sides", sentence: "A triangle is a polygon with three sides." },
          { word: "regular polygon", means: "a polygon with all sides the same length", sentence: "A square is a regular polygon." },
          { word: "compound shape", means: "a shape made from two or more simple shapes joined together", sentence: "An L-shape is a compound shape made from two rectangles." },
          { word: "edge", means: "one straight side of a shape", sentence: "A rectangle has four edges." }
        ],
        passage: [
          "The perimeter is the distance all the way round a shape.",
          "Imagine an ant walking along every edge and back to the start.",
          "To find the perimeter, add up all the sides.",
          "A triangle with sides 3 cm, 4 cm and 5 cm has a perimeter of 12 cm.",
          "A regular polygon has sides that are all the same length.",
          "So you can multiply one side by the number of sides.",
          "A compound shape is made from two or more simple shapes joined together.",
          "Some of its sides are not labelled.",
          "You work them out from the sides opposite them.",
          "Then you add up every side, including the ones you worked out.",
          "Always write the unit, like cm or m, with your answer."
        ]
      },
      sections: [
        {
          heading: "Adding the sides",
          paragraphs: [
            "The perimeter of a polygon is the total length of its edges. To find it, add every side. It does not matter what order you add them in, but you must include every side once.",
            "A rectangle has two pairs of equal sides, so you can add the length and the width and then double: a rectangle 7 cm by 3 cm has a perimeter of 2 × (7 + 3) = 20 cm.",
            "All the sides must be in the same unit before you add. If one side is in metres and another in centimetres, convert first."
          ],
          worked: {
            q: "A quadrilateral has sides of 9 m, 6 m, 11 m and 8 m. Work out its perimeter.",
            steps: ["Check every side is in the same unit: all metres.", "Add all four sides: 9 + 6 + 11 + 8 = 34.", "Write the unit: the perimeter is 34 m."],
            answer: "34 m",
            check: "9 + 6 + 11 + 8"
          },
          tip: "Tick each side as you add it, so you never miss one or count one twice."
        },
        {
          heading: "Regular polygons",
          paragraphs: [
            "A regular polygon has every side the same length, so you only need to know one side and the number of sides. Then multiply.",
            "A regular pentagon has 5 sides, a hexagon has 6, a heptagon has 7 and an octagon has 8. A regular pentagon with 4 cm sides has a perimeter of 4 × 5 = 20 cm.",
            "If you are told the perimeter of a regular polygon, divide by the number of sides to find one side: a regular hexagon with a perimeter of 42 cm has sides of 42 ÷ 6 = 7 cm."
          ],
          worked: {
            q: "A regular octagon (8 sides) has sides of 7 cm. Work out its perimeter.",
            steps: ["An octagon has 8 sides, all 7 cm.", "Multiply: 7 × 8 = 56.", "The perimeter is 56 cm."],
            answer: "56 cm",
            check: "7 * 8"
          },
          tip: "Count the sides from the name: penta- 5, hexa- 6, hepta- 7, octa- 8."
        },
        {
          heading: "Finding a missing side",
          paragraphs: [
            "If you know the perimeter and all the sides but one, subtract the sides you know from the perimeter. What is left is the missing side.",
            "A triangle has a perimeter of 40 cm and two sides of 14 cm and 17 cm. The third side is 40 − 14 − 17 = 9 cm. Check by adding: 14 + 17 + 9 = 40.",
            "For a rectangle, remember that the missing side appears twice. If the perimeter is 30 cm and one side is 9 cm, subtract 9 twice: 30 − 9 − 9 = 12. The two missing sides share 12 cm, so each is 12 ÷ 2 = 6 cm."
          ],
          worked: {
            q: "A rectangle has a perimeter of 26 cm. Its longer sides are 8 cm each. How long is each shorter side?",
            steps: ["Subtract both long sides: 26 − 8 − 8 = 10.", "The two short sides share 10 cm.", "Halve: 10 ÷ 2 = 5."],
            answer: "5 cm",
            check: "(26 - 8 - 8) / 2"
          },
          tip: "Always check: add all the sides back up and you should get the perimeter."
        },
        {
          heading: "Compound shapes",
          paragraphs: [
            "A compound shape is made from simple shapes joined together, like an L-shape made from two rectangles. Some of its sides are not labelled, so your first job is to find them.",
            "In an L-shape, the two short horizontal edges add up to the long horizontal edge, and the two short vertical edges add up to the long vertical edge. Subtract to find a missing edge.",
            "Once every edge has a length, add them all. Many pupils add only the labelled edges and miss the ones they had to work out, so label every edge before you add."
          ],
          worked: {
            q: "An L-shape has a bottom edge of 12 cm and a left edge of 9 cm. Its top edge is 7 cm and its right edge is 5 cm. Work out the two missing edges and the perimeter.",
            steps: ["The two horizontal edges at the top add to the bottom edge: 12 − 7 = 5.", "The two vertical edges on the right add to the left edge: 9 − 5 = 4.", "Add all six edges: 12 + 9 + 7 + 5 + 5 + 4 = 42."],
            answer: "42 cm",
            check: "12 + 9 + 7 + 5 + (12 - 7) + (9 - 5)"
          },
          tip: "An L-shape has the same perimeter as the rectangle it fits inside."
        }
      ],
      gate: [
        { kind: "numeric", q: "A triangle has sides of 8 cm, 11 cm and 13 cm. What is its perimeter?", answer: 32, tolerance: 0, units: "cm", check: "8 + 11 + 13",
          misconceptions: [
            { answer: 19, says: "You added 8 and 11 but left out the 13 cm side. Perimeter is every side: 8 + 11 + 13 = 32.", check: "8 + 11" },
            { answer: 24, says: "You added 11 and 13 but left out the 8 cm side. Every side counts: 8 + 11 + 13 = 32.", check: "11 + 13" },
            { answer: 1144, says: "You multiplied the sides. Perimeter is the total distance round the edge, so add: 8 + 11 + 13 = 32.", check: "8 * 11 * 13" }
          ],
          why: "Add every side: 8 + 11 + 13 = 32." },
        { kind: "mcq", q: "A regular hexagon has sides of 9 cm. Which calculation gives its perimeter?", options: ["9 + 6", "9 × 6", "9 × 9", "9 × 5"], answer: 1, check: "9 * 6",
          feedback: [
            "You added the side length and the number of sides. Six sides of 9 cm means six lots of 9, which is 9 × 6.",
            "",
            "You multiplied the side by itself. That would be the area of a 9 cm square. A hexagon has 6 sides, so the perimeter is 9 × 6.",
            "A pentagon has 5 sides. A hexagon has 6 sides, so the perimeter is 9 × 6 = 54."
          ],
          why: "A hexagon has 6 equal sides, so the perimeter is 9 × 6 = 54." },
        { kind: "gap", q: "A compound shape is made from two or more ___ shapes joined together.", answer: "simple", options: ["simple", "regular", "round"],
          feedback: {
            "regular": "The shapes do not have to be regular. An L-shape is made from two rectangles, and a rectangle is not a regular polygon.",
            "round": "Compound shapes in this unit are made from polygons, which have straight sides. Round shapes are not involved."
          },
          why: "A compound shape is built from simple shapes, such as rectangles and triangles, joined together." }
      ],
      modules: [
        {
          title: "Match the shape to its perimeter",
          task: { kind: "match", q: "Match each shape to its perimeter.",
                  pairs: [["a square with sides of 7 cm", "28 cm"], ["a regular pentagon with 5 sides of 6 cm", "30 cm"], ["a rectangle 9 cm long and 4 cm wide", "26 cm"], ["an equilateral triangle with 3 sides of 8 cm", "24 cm"]],
                  check: "[7 * 4, 6 * 5, 2 * (9 + 4), 8 * 3]" },
          explain: "Say, in one sentence, why you can multiply to find the perimeter of a regular polygon but must add for most other shapes.",
          levels: {
            support: {
              steps: ["For a regular shape, multiply one side by the number of sides.", "For a rectangle, add the length and the width, then double.", "Write the unit with every answer."],
              example: { q: "Find the perimeter of a regular hexagon with sides of 5 cm, and of a rectangle 6 cm long and 2 cm wide.",
                         steps: ["Hexagon: 6 sides of 5 cm, so 5 × 6 = 30.", "Rectangle: 6 + 2 = 8, then double: 8 × 2 = 16."],
                         answer: "30 cm, 16 cm", check: "[5 * 6, 2 * (6 + 2)]" }
            },
            core: { hint: "A square has 4 equal sides, a pentagon 5 and an equilateral triangle 3." },
            stretch: { extend: "Two of these shapes have perimeters that differ by only 2 cm. Which two? Design a regular polygon whose perimeter is exactly between them." }
          },
          why: "Square: 7 × 4 = 28. Pentagon: 6 × 5 = 30. Rectangle: 2 × (9 + 4) = 26. Triangle: 8 × 3 = 24."
        },
        {
          title: "Find the missing side",
          task: { kind: "numeric", q: "A rectangle has a perimeter of 38 cm. Its longer sides are 12 cm each. How long is each shorter side?", answer: 7, tolerance: 0, units: "cm", check: "(38 - 12 - 12) / 2",
                  misconceptions: [
                    { answer: 14, says: "You subtracted both long sides, 38 − 12 − 12 = 14, but that 14 cm is shared by the two short sides. Halve it: 14 ÷ 2 = 7.", check: "38 - 12 - 12" },
                    { answer: 26, says: "You subtracted 12 only once. A rectangle has two long sides, so subtract 12 twice: 38 − 12 − 12 = 14, then halve to get 7.", check: "38 - 12" },
                    { answer: 13, says: "You subtracted one long side and halved. There are two long sides: 38 − 12 − 12 = 14, and 14 ÷ 2 = 7.", check: "(38 - 12) / 2" }
                  ] },
          explain: "Say, in one sentence, why you had to divide by 2 at the end.",
          contexts: [
            { label: "Name badge", q: "A rectangular name badge has a perimeter of 38 cm. Its longer edges are 12 cm each. How long is each shorter edge?",
              why: "38 − 12 − 12 = 14 is shared by the two shorter edges, so each is 14 ÷ 2 = 7." },
            { label: "Tile", q: "A rectangular tile has a perimeter of 38 cm and longer sides of 12 cm. How long is each shorter side?",
              why: "38 − 12 − 12 = 14 is shared by the two shorter sides, so each is 14 ÷ 2 = 7." }
          ],
          levels: {
            support: {
              steps: ["Subtract the long side from the perimeter twice, because a rectangle has two long sides.", "What is left is shared equally by the two short sides.", "Halve it to find one short side."],
              example: { q: "A rectangle has a perimeter of 30 cm and longer sides of 9 cm. How long is each shorter side?",
                         steps: ["30 − 9 − 9 = 12.", "12 cm is shared by two short sides.", "12 ÷ 2 = 6."],
                         answer: "6 cm", check: "(30 - 9 - 9) / 2" }
            },
            core: { hint: "Subtract 12 twice, then halve what is left." },
            stretch: { extend: "Check your answer by adding all four sides. Then find the shorter side of a rectangle with perimeter 38 cm whose longer sides are 15 cm. What do you notice?" }
          },
          why: "38 − 12 − 12 = 14, and the two shorter sides share it, so each is 14 ÷ 2 = 7."
        },
        {
          title: "Perimeter of a compound shape",
          task: { kind: "numeric", q: "An L-shape has a bottom edge of 15 cm and a left edge of 10 cm. Its top edge is 9 cm and its right edge is 4 cm. Work out its perimeter.", answer: 50, tolerance: 0, units: "cm", check: "15 + 10 + 9 + 4 + (15 - 9) + (10 - 4)",
                  misconceptions: [
                    { answer: 38, says: "You added only the four labelled edges: 15 + 10 + 9 + 4 = 38. An L-shape has six edges. The missing ones are 15 − 9 = 6 and 10 − 4 = 6, so the perimeter is 50.", check: "15 + 10 + 9 + 4" },
                    { answer: 44, says: "You found one missing edge but not the other. There are two: 15 − 9 = 6 across and 10 − 4 = 6 down. 15 + 10 + 9 + 4 + 6 + 6 = 50.", check: "15 + 10 + 9 + 4 + (15 - 9)" },
                    { answer: 150, says: "You multiplied 15 × 10 = 150. That is the area of the rectangle round the shape, not the perimeter. Add the six edges instead: 50.", check: "15 * 10" }
                  ] },
          explain: "Say, in one sentence, how you worked out the length of a missing edge.",
          contexts: [
            { label: "Piece of card", q: "An L-shaped piece of card has a bottom edge of 15 cm and a left edge of 10 cm. Its top edge is 9 cm and its right edge is 4 cm. What is its perimeter?",
              why: "The missing edges are 15 − 9 = 6 and 10 − 4 = 6. Add all six: 15 + 10 + 9 + 4 + 6 + 6 = 50." },
            { label: "Floor plan", q: "On a floor plan, an L-shaped room has a bottom edge of 15 cm and a left edge of 10 cm. Its top edge is 9 cm and its right edge is 4 cm. What is the perimeter of the drawing?",
              why: "The missing edges are 15 − 9 = 6 and 10 − 4 = 6. Add all six: 15 + 10 + 9 + 4 + 6 + 6 = 50." }
          ],
          levels: {
            support: {
              steps: ["Find the missing horizontal edge: bottom edge minus top edge.", "Find the missing vertical edge: left edge minus right edge.", "Add all six edges and write the unit."],
              example: { q: "An L-shape has a bottom edge of 11 cm and a left edge of 8 cm. Its top edge is 6 cm and its right edge is 3 cm. Work out its perimeter.",
                         steps: ["Missing horizontal edge: 11 − 6 = 5.", "Missing vertical edge: 8 − 3 = 5.", "11 + 8 + 6 + 3 + 5 + 5 = 38."],
                         answer: "38 cm", check: "11 + 8 + 6 + 3 + (11 - 6) + (8 - 3)" }
            },
            core: { hint: "Two edges are not labelled. The top edges add up to 15; the right-hand edges add up to 10." },
            stretch: { extend: "Show that the perimeter of this L-shape equals the perimeter of a 15 cm by 10 cm rectangle, and explain why that always happens for an L-shape." }
          },
          why: "The missing edges are 15 − 9 = 6 and 10 − 4 = 6. Then 15 + 10 + 9 + 4 + 6 + 6 = 50."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 3
    {
      key: "area-rectangles-parallelograms", n: 3,
      title: "Area of rectangles, squares and parallelograms",
      lead: "Measure the space inside a shape in square units, and use base times perpendicular height.",
      covers: [4],
      pretext: {
        words: [
          { word: "area", means: "the amount of space inside a flat shape", sentence: "The area of the rug is 6 square metres." },
          { word: "square centimetre", means: "a square with sides of 1 cm; the unit written cm²", sentence: "This stamp covers 4 square centimetres." },
          { word: "parallelogram", means: "a four-sided shape with two pairs of parallel sides", sentence: "A parallelogram looks like a pushed-over rectangle." },
          { word: "base", means: "the side a shape's height is measured from", sentence: "The base of the parallelogram is 8 cm." },
          { word: "perpendicular height", means: "the height measured at a right angle to the base", sentence: "The perpendicular height is marked with a right angle." }
        ],
        passage: [
          "Area is the amount of space inside a flat shape.",
          "We measure it in square units, like square centimetres.",
          "A square centimetre is a square with sides of 1 cm.",
          "We write it as cm².",
          "To find the area of a rectangle, multiply the length by the width.",
          "A rectangle 5 cm long and 3 cm wide has an area of 15 cm².",
          "A square has four equal sides, so multiply the side by itself.",
          "A parallelogram is like a pushed-over rectangle.",
          "Its area is the base times the perpendicular height.",
          "The perpendicular height goes straight up from the base, at a right angle.",
          "Do not use the slanted side.",
          "Perimeter is measured in cm, but area is measured in cm²."
        ]
      },
      sections: [
        {
          heading: "What area means",
          paragraphs: [
            "Area is how much flat space a shape covers. Imagine covering the shape with squares that are 1 cm along each side. The number of squares you need is the area in square centimetres, written cm².",
            "A rectangle 6 cm long and 4 cm wide holds 6 squares in each row and has 4 rows, so it holds 6 × 4 = 24 squares. Its area is 24 cm². Multiplying is just a fast way of counting the squares.",
            "Perimeter and area are different. Perimeter is a length, measured in cm. Area is a space, measured in cm². The little 2 tells you that the unit is a square."
          ],
          worked: {
            q: "A rectangle is 6 cm long and 4 cm wide. Work out its area.",
            steps: ["Area of a rectangle = length × width.", "6 × 4 = 24.", "Area is measured in square units: 24 cm²."],
            answer: "24 cm²",
            check: "6 * 4"
          },
          tip: "Area has a little 2 in its unit: cm². Perimeter does not."
        },
        {
          heading: "Rectangles and squares",
          paragraphs: [
            "For any rectangle, area = length × width. The two lengths must be in the same unit. If one is in metres and the other in centimetres, convert before you multiply.",
            "A square is a rectangle with equal sides, so multiply the side by itself. A square with 5 cm sides has an area of 5 × 5 = 25 cm². We can also write 5 × 5 as 5², which we say as five squared.",
            "Decimals work the same way. A rectangle 3.5 m long and 4 m wide has an area of 3.5 × 4 = 14 m²."
          ],
          worked: {
            q: "A square has sides of 9 m. Work out its area.",
            steps: ["A square has equal sides, so area = side × side.", "9 × 9 = 81.", "The area is 81 m²."],
            answer: "81 m²",
            check: "9 * 9"
          },
          tip: "Side squared means side times side, not side times 2."
        },
        {
          heading: "Parallelograms",
          paragraphs: [
            "A parallelogram is like a rectangle that has been pushed over. If you cut a triangle off one end and slide it to the other end, you get a rectangle with the same base and the same height. So the area is the same as that rectangle: base × perpendicular height.",
            "The perpendicular height is the straight-up distance from the base to the opposite side, at a right angle. It is usually marked with a small square for the right angle. It is not the slanted side.",
            "A parallelogram with a base of 10 cm, a slanted side of 6 cm and a perpendicular height of 5 cm has an area of 10 × 5 = 50 cm². The 6 cm is not used."
          ],
          worked: {
            q: "A parallelogram has a base of 8 cm, a slanted side of 5 cm and a perpendicular height of 4 cm. Work out its area.",
            steps: ["Area of a parallelogram = base × perpendicular height.", "Use the 8 cm base and the 4 cm height. Ignore the slanted 5 cm side.", "8 × 4 = 32, so the area is 32 cm²."],
            answer: "32 cm²",
            check: "8 * 4"
          },
          tip: "Look for the right-angle mark. The line it sits on is the height."
        },
        {
          heading: "Finding a missing length",
          paragraphs: [
            "If you know the area of a rectangle and one side, you can find the other side. Area = length × width, so width = area ÷ length.",
            "A rectangle has an area of 54 cm² and a length of 9 cm. Its width is 54 ÷ 9 = 6 cm. Check: 9 × 6 = 54.",
            "The same idea works for a parallelogram: height = area ÷ base. Division undoes the multiplication."
          ],
          worked: {
            q: "A rectangle has an area of 54 cm² and a length of 9 cm. Work out its width.",
            steps: ["Area = length × width, so width = area ÷ length.", "54 ÷ 9 = 6.", "The width is 6 cm. Check: 9 × 6 = 54."],
            answer: "6 cm",
            check: "54 / 9"
          },
          tip: "A missing length comes from dividing. Its unit is cm, not cm²."
        }
      ],
      gate: [
        { kind: "numeric", q: "A rectangle is 7 cm long and 5 cm wide. What is its area?", answer: 35, tolerance: 0, units: "cm²", check: "7 * 5",
          misconceptions: [
            { answer: 24, says: "You worked out the perimeter: 2 × (7 + 5) = 24. Area is the space inside, so multiply the length by the width: 7 × 5 = 35.", check: "2 * (7 + 5)" },
            { answer: 12, says: "You added the two sides: 7 + 5 = 12. Area is length times width: 7 × 5 = 35.", check: "7 + 5" }
          ],
          why: "Area of a rectangle = length × width = 7 × 5 = 35." },
        { kind: "mcq", q: "Which unit is used for area?", options: ["cm", "cm²", "cm³"], answer: 1,
          feedback: [
            "cm is a unit of length, used for perimeter and sides. Area is measured in squares, so it needs cm².",
            "",
            "cm³ is cubic centimetres, used for volume, the space inside a 3-D object. A flat shape's area uses cm²."
          ],
          why: "Area counts squares, so its unit is square centimetres, cm²." },
        { kind: "mcq", q: "A parallelogram has a base of 10 cm, a slanted side of 6 cm and a perpendicular height of 5 cm. Which calculation gives its area?", options: ["10 × 6", "10 × 5", "10 + 6 + 5", "6 × 5"], answer: 1, check: "10 * 5",
          feedback: [
            "You used the slanted side. The height must be perpendicular to the base, at a right angle, so use 5 cm: 10 × 5.",
            "",
            "You added the lengths, which is how we find a perimeter. Area is base × perpendicular height: 10 × 5.",
            "You multiplied the slanted side by the height. The base is 10 cm, so the area is 10 × 5."
          ],
          why: "Area of a parallelogram = base × perpendicular height = 10 × 5 = 50." }
      ],
      modules: [
        {
          title: "Area of a rectangle",
          task: { kind: "numeric", q: "A rectangle is 12 cm long and 7 cm wide. Work out its area.", answer: 84, tolerance: 0, units: "cm²", check: "12 * 7",
                  misconceptions: [
                    { answer: 38, says: "You worked out the perimeter: 2 × (12 + 7) = 38. Area is the space inside, so multiply the length by the width: 12 × 7 = 84.", check: "2 * (12 + 7)" },
                    { answer: 19, says: "You added the length and the width: 12 + 7 = 19. For area, multiply: 12 × 7 = 84.", check: "12 + 7" }
                  ] },
          explain: "Say, in one sentence, why the unit of your answer is cm² and not cm.",
          contexts: [
            { label: "Postcard", q: "A rectangular postcard is 12 cm long and 7 cm wide. What is its area?",
              why: "Area = length × width = 12 × 7 = 84." },
            { label: "Phone screen", q: "A rectangular phone screen measures 12 cm by 7 cm. What area does it cover?",
              why: "Area = length × width = 12 × 7 = 84." }
          ],
          levels: {
            support: {
              steps: ["Area of a rectangle = length × width.", "Multiply the two numbers.", "Write the unit as cm², because area counts squares."],
              example: { q: "A rectangle is 8 cm long and 3 cm wide. Work out its area.",
                         steps: ["Length × width.", "8 × 3 = 24.", "Area = 24 cm²."],
                         answer: "24 cm²", check: "8 * 3" }
            },
            core: { hint: "Area = length × width. Do not add." },
            stretch: { extend: "Find a different rectangle with whole-number sides and the same area of 84 cm². Which of the two rectangles has the smaller perimeter, and why?" }
          },
          why: "Area = length × width = 12 × 7 = 84."
        },
        {
          title: "Area of a parallelogram",
          task: { kind: "numeric", q: "A parallelogram has a base of 9 cm, a slanted side of 7 cm and a perpendicular height of 6 cm. Work out its area.", answer: 54, tolerance: 0, units: "cm²", check: "9 * 6",
                  misconceptions: [
                    { answer: 63, says: "You used the slanted side: 9 × 7 = 63. The height must be at a right angle to the base, so use 6 cm: 9 × 6 = 54.", check: "9 * 7" },
                    { answer: 22, says: "You added the three lengths: 9 + 7 + 6 = 22. That is not the perimeter either, because a parallelogram has four sides. Area is base × perpendicular height: 9 × 6 = 54.", check: "9 + 7 + 6" },
                    { answer: 42, says: "You multiplied the slanted side by the height: 7 × 6 = 42. The base is 9 cm, so the area is 9 × 6 = 54.", check: "7 * 6" }
                  ] },
          explain: "Say, in one sentence, why the 7 cm side is not used in the calculation.",
          contexts: [
            { label: "Sticker", q: "A parallelogram-shaped sticker has a base of 9 cm, a slanted edge of 7 cm and a perpendicular height of 6 cm. What is its area?",
              why: "Area = base × perpendicular height = 9 × 6 = 54. The slanted edge is not used." },
            { label: "Fabric", q: "A piece of fabric is cut as a parallelogram with a base of 9 cm, a slanted edge of 7 cm and a perpendicular height of 6 cm. What area does it cover?",
              why: "Area = base × perpendicular height = 9 × 6 = 54. The slanted edge is not used." }
          ],
          levels: {
            support: {
              steps: ["Find the base and the perpendicular height. The height is the one at a right angle to the base.", "Cross out the slanted side; it is not needed.", "Multiply base × height and write cm²."],
              example: { q: "A parallelogram has a base of 11 cm, a slanted side of 6 cm and a perpendicular height of 5 cm. Work out its area.",
                         steps: ["Base 11 cm, perpendicular height 5 cm.", "Ignore the slanted 6 cm.", "11 × 5 = 55, so the area is 55 cm²."],
                         answer: "55 cm²", check: "11 * 5" }
            },
            core: { hint: "Only two of the three lengths are needed: the base and the perpendicular height." },
            stretch: { extend: "Explain, with a sketch in words, why cutting a triangle off one end of a parallelogram and moving it to the other end shows the area is base × perpendicular height." }
          },
          why: "Area = base × perpendicular height = 9 × 6 = 54. The slanted 7 cm side is not used."
        },
        {
          title: "Work backwards from the area",
          task: { kind: "numeric", q: "A rectangle has an area of 72 cm² and a width of 8 cm. How long is it?", answer: 9, tolerance: 0, units: "cm", check: "72 / 8",
                  misconceptions: [
                    { answer: 576, says: "You multiplied: 72 × 8 = 576. The area is already the result of a multiplication, so to find the missing side you divide: 72 ÷ 8 = 9.", check: "72 * 8" },
                    { answer: 64, says: "You subtracted: 72 − 8 = 64. Area is length × width, so undo the multiplication by dividing: 72 ÷ 8 = 9.", check: "72 - 8" },
                    { answer: 28, says: "You treated 72 as a perimeter and worked out (72 − 8 − 8) ÷ 2 = 28. The 72 is an area, so divide: 72 ÷ 8 = 9.", check: "(72 - 8 - 8) / 2" }
                  ] },
          explain: "Say, in one sentence, why dividing finds the missing side.",
          contexts: [
            { label: "Label", q: "A rectangular label has an area of 72 cm² and a width of 8 cm. How long is it?",
              why: "Length = area ÷ width = 72 ÷ 8 = 9." },
            { label: "Tile", q: "A rectangular tile covers 72 cm² and is 8 cm wide. How long is it?",
              why: "Length = area ÷ width = 72 ÷ 8 = 9." }
          ],
          levels: {
            support: {
              steps: ["Area = length × width.", "You know the area and the width, so divide: length = area ÷ width.", "Check by multiplying back. The answer is a length, so its unit is cm."],
              example: { q: "A rectangle has an area of 40 cm² and a length of 10 cm. How wide is it?",
                         steps: ["Width = area ÷ length.", "40 ÷ 10 = 4.", "Check: 10 × 4 = 40."],
                         answer: "4 cm", check: "40 / 10" }
            },
            core: { hint: "Area = length × width. Divide the area by the side you know." },
            stretch: { extend: "A parallelogram has the same area, 72 cm², and a base of 12 cm. Find its perpendicular height, and explain why you cannot tell the length of its slanted side." }
          },
          why: "Length = area ÷ width = 72 ÷ 8 = 9. Check: 9 × 8 = 72."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 4
    {
      key: "area-triangle", n: 4,
      title: "Area of a triangle",
      lead: "See why a triangle is half a rectangle, use the formula with the right height, and work backwards.",
      covers: [5],
      pretext: {
        words: [
          { word: "triangle", means: "a flat shape with three straight sides", sentence: "Fold a square in half along a diagonal to make two triangles." },
          { word: "base", means: "the side of the triangle the height is measured from", sentence: "The base of the triangle is 8 cm." },
          { word: "perpendicular height", means: "the height measured at a right angle to the base", sentence: "The perpendicular height goes straight up from the base." },
          { word: "half", means: "one of two equal parts; to halve is to divide by 2", sentence: "Half of 30 is 15." },
          { word: "diagonal", means: "a straight line from one corner of a shape to an opposite corner", sentence: "Cut the rectangle along its diagonal." }
        ],
        passage: [
          "A triangle is half of a rectangle.",
          "Draw a rectangle and cut it along a diagonal.",
          "You get two triangles that are the same size.",
          "So the area of a triangle is half the area of the rectangle.",
          "First multiply the base by the perpendicular height.",
          "Then divide by 2.",
          "The perpendicular height is at a right angle to the base.",
          "It is not the slanted side.",
          "A triangle with a base of 6 cm and a height of 4 cm has an area of 12 cm².",
          "We say the formula as half of base times height.",
          "Area is always measured in square units, like cm²."
        ]
      },
      sections: [
        {
          heading: "Half a rectangle",
          paragraphs: [
            "Draw a rectangle 8 cm long and 5 cm high. Its area is 8 × 5 = 40 cm². Now draw a diagonal from one corner to the opposite corner. You have cut the rectangle into two identical triangles.",
            "Each triangle has the same base and height as the rectangle, but only half the space. So its area is 40 ÷ 2 = 20 cm².",
            "This works for every triangle, not just right-angled ones. Any triangle can be fitted inside a rectangle with the same base and height, and it always takes up exactly half of it."
          ],
          worked: {
            q: "A right-angled triangle has a base of 8 cm and a height of 5 cm. Work out its area.",
            steps: ["Find the area of the rectangle with the same base and height: 8 × 5 = 40.", "The triangle is half of it: 40 ÷ 2 = 20.", "The area is 20 cm²."],
            answer: "20 cm²",
            check: "8 * 5 / 2"
          },
          tip: "Picture the rectangle round the triangle. The triangle is always half of it."
        },
        {
          heading: "The formula and the right height",
          paragraphs: [
            "Area of a triangle = base × perpendicular height ÷ 2. You can also say it as half of base times height. Both give the same answer, because halving and dividing by 2 are the same thing.",
            "Triangles often have three lengths labelled, but you only use two. The base is one side. The perpendicular height goes from the base straight up to the opposite corner, at a right angle. It is often drawn as a dashed line with a right-angle mark.",
            "The slanted sides are never the height. If a triangle has a base of 10 cm, a perpendicular height of 7 cm and slanted sides of 8 cm and 9 cm, the area is 10 × 7 ÷ 2 = 35 cm². The 8 and the 9 are not used."
          ],
          worked: {
            q: "A triangle has a base of 10 cm, a perpendicular height of 7 cm and slanted sides of 8 cm and 9 cm. Work out its area.",
            steps: ["Pick out the base, 10 cm, and the perpendicular height, 7 cm.", "Multiply: 10 × 7 = 70.", "Halve: 70 ÷ 2 = 35. The area is 35 cm²."],
            answer: "35 cm²",
            check: "10 * 7 / 2"
          },
          tip: "Three lengths, use two: the base and the height. Ignore the slant."
        },
        {
          heading: "When the answer is a decimal",
          paragraphs: [
            "Sometimes base × height is an odd number, so halving gives a decimal. That is fine: 9 × 5 = 45, and 45 ÷ 2 = 22.5.",
            "You can halve first if that is easier. For a base of 10 cm and a height of 7 cm, half of 10 is 5, and 5 × 7 = 35. Halving either number first gives the same answer as halving at the end.",
            "Whatever order you use, the unit is still a square unit, such as cm² or m²."
          ],
          worked: {
            q: "A triangle has a base of 9 m and a perpendicular height of 5 m. Work out its area.",
            steps: ["Multiply: 9 × 5 = 45.", "Halve: 45 ÷ 2 = 22.5.", "The area is 22.5 m²."],
            answer: "22.5 m²",
            check: "9 * 5 / 2"
          },
          tip: "If one of the numbers is even, halve that one first to avoid decimals in the middle."
        },
        {
          heading: "Working backwards",
          paragraphs: [
            "If you know a triangle's area and its height, you can find its base. The formula says area = base × height ÷ 2, so undo it backwards: double the area, then divide by the height.",
            "A triangle has an area of 24 cm² and a perpendicular height of 6 cm. Double the area: 24 × 2 = 48. Divide by the height: 48 ÷ 6 = 8. The base is 8 cm.",
            "Check your answer by putting it back into the formula: 8 × 6 ÷ 2 = 24."
          ],
          worked: {
            q: "A triangle has an area of 24 cm² and a perpendicular height of 6 cm. Work out its base.",
            steps: ["Double the area: 24 × 2 = 48.", "Divide by the height: 48 ÷ 6 = 8.", "The base is 8 cm. Check: 8 × 6 ÷ 2 = 24."],
            answer: "8 cm",
            check: "24 * 2 / 6"
          },
          tip: "Undo the formula in reverse: double first, then divide."
        }
      ],
      gate: [
        { kind: "numeric", q: "A triangle has a base of 8 cm and a perpendicular height of 3 cm. What is its area?", answer: 12, tolerance: 0, units: "cm²", check: "8 * 3 / 2",
          misconceptions: [
            { answer: 24, says: "You worked out 8 × 3 = 24 but forgot to halve. A triangle is half a rectangle: 24 ÷ 2 = 12.", check: "8 * 3" },
            { answer: 11, says: "You added the base and the height: 8 + 3 = 11. Area is base × height ÷ 2: 8 × 3 = 24, then 24 ÷ 2 = 12.", check: "8 + 3" },
            { answer: 6, says: "You halved both the base and the height, 4 × 1.5 = 6. Halve only once: 8 × 3 = 24, then 24 ÷ 2 = 12.", check: "(8 / 2) * (3 / 2)" }
          ],
          why: "8 × 3 = 24, and a triangle is half a rectangle, so 24 ÷ 2 = 12." },
        { kind: "mcq", q: "Why is the area of a triangle half of base × height?", options: ["Because a triangle has three sides", "Because a triangle is half of a rectangle with the same base and height", "Because the height is always half the base", "Because every area formula has a half in it"], answer: 1,
          feedback: [
            "The number of sides does not decide the formula. The half comes from the rectangle: a triangle fills exactly half of the rectangle with the same base and height.",
            "",
            "The height and base can be any lengths. The half is there because the triangle is half of a rectangle with the same base and height.",
            "The rectangle and parallelogram formulas have no half. The triangle's half comes from being half of a rectangle."
          ],
          why: "Cut a rectangle along a diagonal and you get two identical triangles, so each is half the rectangle's area." },
        { kind: "gap", q: "The height used in the triangle formula must be at a ___ angle to the base.", answer: "right", options: ["right", "acute", "straight"],
          feedback: {
            "acute": "An acute angle is less than a right angle, which would make the height slant. The perpendicular height meets the base at exactly a right angle.",
            "straight": "A straight angle is a flat line, which would mean no height at all. The perpendicular height stands at a right angle to the base."
          },
          why: "Perpendicular means at a right angle. The height stands straight up from the base." }
      ],
      modules: [
        {
          title: "Area of a triangle",
          task: { kind: "numeric", q: "A triangle has a base of 14 cm and a perpendicular height of 5 cm. Work out its area.", answer: 35, tolerance: 0, units: "cm²", check: "14 * 5 / 2",
                  misconceptions: [
                    { answer: 70, says: "You worked out 14 × 5 = 70 but forgot to halve. A triangle is half a rectangle: 70 ÷ 2 = 35.", check: "14 * 5" },
                    { answer: 19, says: "You added the base and the height: 14 + 5 = 19. Multiply instead, then halve: 14 × 5 = 70, and 70 ÷ 2 = 35.", check: "14 + 5" },
                    { answer: 38, says: "You worked out 2 × (14 + 5) = 38, which is how we find the perimeter of a rectangle. Area of a triangle is base × height, then halved: 14 × 5 = 70, and 70 ÷ 2 = 35.", check: "2 * (14 + 5)" }
                  ] },
          explain: "Say, in one sentence, why you divided by 2.",
          contexts: [
            { label: "Flag", q: "A triangular flag has a base of 14 cm and a perpendicular height of 5 cm. What is its area?",
              why: "14 × 5 = 70, and half of that is 35." },
            { label: "Toast", q: "A slice of toast is cut into a triangle with a base of 14 cm and a perpendicular height of 5 cm. What area does it cover?",
              why: "14 × 5 = 70, and half of that is 35." }
          ],
          levels: {
            support: {
              steps: ["Multiply the base by the perpendicular height.", "Halve the answer, because a triangle is half a rectangle.", "Write the unit as cm²."],
              example: { q: "A triangle has a base of 10 cm and a perpendicular height of 6 cm. Work out its area.",
                         steps: ["10 × 6 = 60.", "60 ÷ 2 = 30.", "Area = 30 cm²."],
                         answer: "30 cm²", check: "10 * 6 / 2" }
            },
            core: { hint: "Base × height, then halve." },
            stretch: { extend: "Draw, in words, two different triangles that both have an area of 35 cm². Explain how you chose the base and height for each." }
          },
          why: "14 × 5 = 70, and a triangle is half a rectangle, so 70 ÷ 2 = 35."
        },
        {
          title: "Choose the right height",
          task: { kind: "mcq", q: "A triangle has a base of 12 cm, a perpendicular height of 5 cm and slanted sides of 7 cm and 9 cm. What is its area?", options: ["30 cm²", "42 cm²", "54 cm²", "60 cm²"], answer: 0, check: "12 * 5 / 2",
                  feedback: [
                    "",
                    "You used the 7 cm slanted side as the height: 12 × 7 ÷ 2 = 42. The height must be perpendicular to the base, so use 5 cm: 12 × 5 ÷ 2 = 30.",
                    "You used the 9 cm slanted side as the height: 12 × 9 ÷ 2 = 54. The perpendicular height is 5 cm: 12 × 5 ÷ 2 = 30.",
                    "You used the right lengths but forgot to halve: 12 × 5 = 60. A triangle is half a rectangle, so 60 ÷ 2 = 30."
                  ] },
          explain: "Say, in one sentence, how you decided which of the three lengths was the height.",
          contexts: [
            { label: "Garden plan", q: "On a plan, a triangular flower bed has a base of 12 cm, a perpendicular height of 5 cm and slanted sides of 7 cm and 9 cm. What is its area on the plan?",
              why: "Use the base and the perpendicular height only: 12 × 5 ÷ 2 = 30." },
            { label: "Model sail", q: "A triangular sail on a model boat has a base of 12 cm, a perpendicular height of 5 cm and slanted edges of 7 cm and 9 cm. What is its area?",
              why: "Use the base and the perpendicular height only: 12 × 5 ÷ 2 = 30." }
          ],
          levels: {
            support: {
              steps: ["Find the base and the perpendicular height. The height is the one at a right angle to the base.", "Cross out both slanted sides.", "Multiply base × height, then halve."],
              example: { q: "A triangle has a base of 8 cm, a perpendicular height of 3 cm and slanted sides of 5 cm and 4 cm. Work out its area.",
                         steps: ["Base 8 cm, perpendicular height 3 cm.", "8 × 3 = 24.", "24 ÷ 2 = 12, so the area is 12 cm²."],
                         answer: "12 cm²", check: "8 * 3 / 2" }
            },
            core: { hint: "Only the base and the perpendicular height are used. Two of the four lengths are distractions." },
            stretch: { extend: "Priya says the area must be bigger because the triangle has long slanted sides. Explain why the slanted sides do not change the area if the base and height stay the same." }
          },
          why: "Only the base and the perpendicular height matter: 12 × 5 = 60, and 60 ÷ 2 = 30."
        },
        {
          title: "Find the missing length",
          task: { kind: "numeric", q: "A triangle has an area of 36 cm² and a base of 9 cm. What is its perpendicular height?", answer: 8, tolerance: 0, units: "cm", check: "36 * 2 / 9",
                  misconceptions: [
                    { answer: 4, says: "You divided 36 by 9 but forgot to double first. The area was halved, so undo that: 36 × 2 = 72, then 72 ÷ 9 = 8.", check: "36 / 9" },
                    { answer: 324, says: "You multiplied: 36 × 9 = 324. To find a missing length, double the area and then divide by the base: 72 ÷ 9 = 8.", check: "36 * 9" },
                    { answer: 27, says: "You subtracted: 36 − 9 = 27. The formula uses multiplication, so undo it with doubling and dividing: 36 × 2 = 72, and 72 ÷ 9 = 8.", check: "36 - 9" }
                  ] },
          explain: "Say, in one sentence, why you doubled the area before dividing.",
          contexts: [
            { label: "Pennant", q: "A triangular pennant has an area of 36 cm² and a base of 9 cm. What is its perpendicular height?",
              why: "Double the area: 36 × 2 = 72. Divide by the base: 72 ÷ 9 = 8." },
            { label: "Tile", q: "A triangular tile covers 36 cm² and has a base of 9 cm. What is its perpendicular height?",
              why: "Double the area: 36 × 2 = 72. Divide by the base: 72 ÷ 9 = 8." }
          ],
          levels: {
            support: {
              steps: ["Double the area to get base × height.", "Divide by the length you know.", "Check by putting your answer back into the formula."],
              example: { q: "A triangle has an area of 20 cm² and a perpendicular height of 4 cm. What is its base?",
                         steps: ["20 × 2 = 40.", "40 ÷ 4 = 10.", "Check: 10 × 4 ÷ 2 = 20."],
                         answer: "10 cm", check: "20 * 2 / 4" }
            },
            core: { hint: "Double the area first, then divide by 9." },
            stretch: { extend: "A square is made from two identical triangles, each with an area of 32 cm². Work out the perimeter of the square, showing every step." }
          },
          why: "Double the area: 36 × 2 = 72. Divide by the base: 72 ÷ 9 = 8. Check: 9 × 8 ÷ 2 = 36."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 5
    {
      key: "area-trapezium", n: 5,
      title: "Area of a trapezium",
      lead: "See where the trapezium formula comes from, use it, and find a missing height.",
      covers: [6],
      pretext: {
        words: [
          { word: "trapezium", means: "a four-sided shape with exactly one pair of parallel sides", sentence: "A trapezium looks like a triangle with the top cut off." },
          { word: "parallel", means: "two lines that stay the same distance apart and never meet", sentence: "The top and bottom of the trapezium are parallel." },
          { word: "perpendicular height", means: "the straight-across distance between the parallel sides, at a right angle", sentence: "The perpendicular height of this trapezium is 5 cm." },
          { word: "sum", means: "the answer when you add", sentence: "The sum of 4 and 6 is 10." },
          { word: "formula", means: "a rule written with letters that tells you how to work something out", sentence: "The formula for the area of a trapezium uses the parallel sides and the height." }
        ],
        passage: [
          "A trapezium has four sides.",
          "Two of its sides are parallel.",
          "The other two sides are not.",
          "We call the parallel sides a and b.",
          "The perpendicular height, h, goes straight between them.",
          "To find the area, add the two parallel sides.",
          "Halve the answer.",
          "Then multiply by the height.",
          "Parallel sides of 4 cm and 6 cm with a height of 3 cm give an area of 15 cm².",
          "Two identical trapezia fit together to make a parallelogram.",
          "That is why we halve.",
          "Check that every length is in the same unit before you start."
        ]
      },
      sections: [
        {
          heading: "What a trapezium is",
          paragraphs: [
            "A trapezium is a four-sided shape with one pair of parallel sides. The parallel sides are usually the top and the bottom, and they are different lengths. The other two sides can slant any way they like.",
            "The perpendicular height is the straight distance between the two parallel sides, at a right angle to both. As with triangles and parallelograms, a slanted side is never the height.",
            "One way to find the area is to split the trapezium into a rectangle and a triangle. A trapezium with parallel sides of 5 cm and 9 cm and a height of 4 cm splits into a 5 cm by 4 cm rectangle and a triangle with base 9 − 5 = 4 cm and height 4 cm."
          ],
          worked: {
            q: "A trapezium has parallel sides of 5 cm and 9 cm and a perpendicular height of 4 cm. Split it into a rectangle and a triangle to find its area.",
            steps: ["Rectangle: 5 × 4 = 20.", "Triangle: its base is 9 − 5 = 4, so its area is 4 × 4 ÷ 2 = 8.", "Add the two parts: 20 + 8 = 28. The area is 28 cm²."],
            answer: "28 cm²",
            check: "5 * 4 + (9 - 5) * 4 / 2"
          },
          tip: "Splitting a shape into pieces you know is a method you can always fall back on."
        },
        {
          heading: "Two trapezia make a parallelogram",
          paragraphs: [
            "Take two identical trapezia. Turn one upside down and slide it next to the other. Together they make a parallelogram. Its base is the two parallel sides added together, a + b, and its height is still h.",
            "The parallelogram's area is (a + b) × h. The trapezium is exactly half of it, so the area of a trapezium is half of (a + b) × h.",
            "For parallel sides of 7 cm and 11 cm and a height of 6 cm, the parallelogram has a base of 7 + 11 = 18 and an area of 18 × 6 = 108. The trapezium is half: 108 ÷ 2 = 54 cm²."
          ],
          worked: {
            q: "Two identical trapezia with parallel sides of 7 cm and 11 cm and a height of 6 cm are joined to make a parallelogram. Find the area of the parallelogram, then of one trapezium.",
            steps: ["The parallelogram's base is 7 + 11 = 18.", "Its area is 18 × 6 = 108.", "One trapezium is half: 108 ÷ 2 = 54."],
            answer: "54 cm²",
            check: "(7 + 11) * 6 / 2"
          },
          tip: "The half in the formula is there because two trapezia make one parallelogram."
        },
        {
          heading: "Using the formula",
          paragraphs: [
            "Area of a trapezium = half of (a + b) × h, where a and b are the parallel sides and h is the perpendicular height. In words: half of the sum of the parallel sides, multiplied by the perpendicular height.",
            "Work in three steps. Add the parallel sides. Halve. Multiply by the height. For parallel sides of 8 cm and 14 cm and a height of 5 cm: 8 + 14 = 22, then 22 ÷ 2 = 11, then 11 × 5 = 55.",
            "If the sum of the parallel sides is odd, you can multiply by the height first and halve at the end instead. The answer is the same."
          ],
          worked: {
            q: "A trapezium has parallel sides of 8 cm and 14 cm and a perpendicular height of 5 cm. Work out its area.",
            steps: ["Add the parallel sides: 8 + 14 = 22.", "Halve: 22 ÷ 2 = 11.", "Multiply by the height: 11 × 5 = 55. The area is 55 cm²."],
            answer: "55 cm²",
            check: "(8 + 14) / 2 * 5"
          },
          tip: "Add, halve, multiply."
        },
        {
          heading: "Same units, and working backwards",
          paragraphs: [
            "Before you use the formula, check that every length is in the same unit. If the parallel sides are in centimetres and the height is in metres, convert the height to centimetres first. Multiplying 50 by a height of 0.5 instead of 50 gives an answer 100 times too small.",
            "If you know the area and the parallel sides, you can find the height. Add the parallel sides and halve, as usual. Then divide the area by that number.",
            "A trapezium has an area of 30 cm² and parallel sides of 4 cm and 8 cm. Add and halve: 4 + 8 = 12, and 12 ÷ 2 = 6. Then the height is 30 ÷ 6 = 5 cm."
          ],
          worked: {
            q: "A trapezium has parallel sides of 40 cm and 60 cm and a perpendicular height of 0.2 m. Work out its area in cm².",
            steps: ["Change the height into centimetres: 0.2 × 100 = 20.", "Add the parallel sides and halve: 40 + 60 = 100, and 100 ÷ 2 = 50.", "Multiply by the height: 50 × 20 = 1000. The area is 1000 cm²."],
            answer: "1000 cm²",
            check: "(40 + 60) / 2 * (0.2 * 100)"
          },
          tip: "Mixed units are the most common mistake in this topic. Convert first, every time."
        }
      ],
      gate: [
        { kind: "mcq", q: "In the trapezium formula, which pair of sides do you add?", options: ["the two parallel sides", "the two slanted sides", "the base and the height"], answer: 0,
          feedback: [
            "",
            "The slanted sides are not used at all. Two trapezia make a parallelogram whose base is the two parallel sides added together, so those are the sides you add.",
            "The base and the height are multiplied, not added. The adding step is for the two parallel sides."
          ],
          why: "The formula adds the two parallel sides, halves, then multiplies by the perpendicular height." },
        { kind: "numeric", q: "A trapezium has parallel sides of 6 cm and 10 cm and a perpendicular height of 4 cm. What is its area?", answer: 32, tolerance: 0, units: "cm²", check: "(6 + 10) / 2 * 4",
          misconceptions: [
            { answer: 64, says: "You worked out (6 + 10) × 4 = 64 but forgot to halve. A trapezium is half a parallelogram: 64 ÷ 2 = 32.", check: "(6 + 10) * 4" },
            { answer: 240, says: "You multiplied all three lengths: 6 × 10 × 4 = 240. Add the parallel sides first, halve, then multiply by the height: 8 × 4 = 32.", check: "6 * 10 * 4" },
            { answer: 20, says: "You added all three lengths: 6 + 10 + 4 = 20. Only the parallel sides are added. Then halve and multiply by the height: 8 × 4 = 32.", check: "6 + 10 + 4" }
          ],
          why: "6 + 10 = 16, half is 8, and 8 × 4 = 32." },
        { kind: "gap", q: "Two identical trapezia fit together to make a ___.", answer: "parallelogram", options: ["parallelogram", "triangle", "circle"],
          feedback: {
            "triangle": "A triangle has three sides. Two trapezia joined along a slanted side make a four-sided shape with two pairs of parallel sides: a parallelogram.",
            "circle": "Trapezia have straight sides, so they cannot make a curve. Two of them make a parallelogram."
          },
          why: "Turn one trapezium upside down and fit it against the other: the result is a parallelogram." }
      ],
      modules: [
        {
          title: "Area of a trapezium",
          task: { kind: "numeric", q: "A trapezium has parallel sides of 9 cm and 15 cm and a perpendicular height of 6 cm. Work out its area.", answer: 72, tolerance: 0, units: "cm²", check: "(9 + 15) / 2 * 6",
                  misconceptions: [
                    { answer: 144, says: "You worked out (9 + 15) × 6 = 144 but forgot to halve. A trapezium is half a parallelogram: 144 ÷ 2 = 72.", check: "(9 + 15) * 6" },
                    { answer: 810, says: "You multiplied all three lengths: 9 × 15 × 6 = 810. Add the parallel sides, halve, then multiply by the height: 12 × 6 = 72.", check: "9 * 15 * 6" },
                    { answer: 30, says: "You added all three lengths: 9 + 15 + 6 = 30. Only the parallel sides are added, 9 + 15 = 24. Halve to get 12, then 12 × 6 = 72.", check: "9 + 15 + 6" }
                  ] },
          explain: "Say, in one sentence, why you halve the sum of the parallel sides.",
          contexts: [
            { label: "Lampshade", q: "A trapezium-shaped lampshade panel has parallel edges of 9 cm and 15 cm and a perpendicular height of 6 cm. What is its area?",
              why: "9 + 15 = 24, half is 12, and 12 × 6 = 72." },
            { label: "Cake", q: "Seen from above, a slice of cake is a trapezium with parallel sides of 9 cm and 15 cm and a perpendicular height of 6 cm. What is its area?",
              why: "9 + 15 = 24, half is 12, and 12 × 6 = 72." }
          ],
          levels: {
            support: {
              steps: ["Add the two parallel sides.", "Halve the answer.", "Multiply by the perpendicular height and write cm²."],
              example: { q: "A trapezium has parallel sides of 5 cm and 7 cm and a perpendicular height of 4 cm. Work out its area.",
                         steps: ["5 + 7 = 12.", "12 ÷ 2 = 6.", "6 × 4 = 24, so the area is 24 cm²."],
                         answer: "24 cm²", check: "(5 + 7) / 2 * 4" }
            },
            core: { hint: "Add 9 and 15, halve, then multiply by 6." },
            stretch: { extend: "Split the same trapezium into a rectangle and a triangle and show that you get the same area. Which method do you prefer, and why?" }
          },
          why: "9 + 15 = 24, half is 12, and 12 × 6 = 72."
        },
        {
          title: "Which calculation?",
          task: { kind: "mcq", q: "A trapezium has parallel sides of 8 cm and 12 cm, a slanted side of 5 cm and a perpendicular height of 4 cm. Which calculation gives its area in cm²?", options: ["(8 + 12) ÷ 2 × 4", "(8 + 12) × 4", "(8 + 5) ÷ 2 × 4", "8 × 12 ÷ 2"], answer: 0, check: "(8 + 12) / 2 * 4",
                  feedback: [
                    "",
                    "You forgot to halve. (8 + 12) × 4 is the area of the parallelogram made from two trapezia. One trapezium is half of it.",
                    "You added the slanted side instead of the other parallel side. The parallel sides are 8 cm and 12 cm; the 5 cm slant is not used.",
                    "You multiplied the parallel sides together, like a triangle's base and height. Add them instead, halve, then multiply by the height."
                  ] },
          explain: "Say, in one sentence, why the 5 cm side does not appear in the correct calculation.",
          contexts: [
            { label: "Flower bed", q: "On a plan, a trapezium-shaped flower bed has parallel sides of 8 cm and 12 cm, a slanted side of 5 cm and a perpendicular height of 4 cm. Which calculation gives its area on the plan?",
              why: "Add the parallel sides, halve, multiply by the height: (8 + 12) ÷ 2 × 4. The slanted side is not used." },
            { label: "Table top", q: "A trapezium-shaped table top in a dolls' house has parallel edges of 8 cm and 12 cm, a slanted edge of 5 cm and a perpendicular height of 4 cm. Which calculation gives its area?",
              why: "Add the parallel sides, halve, multiply by the height: (8 + 12) ÷ 2 × 4. The slanted edge is not used." }
          ],
          levels: {
            support: {
              steps: ["Find the two parallel sides and the perpendicular height. Cross out the slanted side.", "The formula adds the parallel sides, halves, then multiplies by the height.", "Look for the calculation that does exactly those three things."],
              example: { q: "A trapezium has parallel sides of 6 cm and 10 cm, a slanted side of 5 cm and a perpendicular height of 3 cm. Write the calculation for its area and work it out.",
                         steps: ["Parallel sides 6 and 10; height 3; ignore the 5.", "(6 + 10) ÷ 2 × 3.", "16 ÷ 2 = 8, and 8 × 3 = 24."],
                         answer: "24 cm²", check: "(6 + 10) / 2 * 3" }
            },
            core: { hint: "Three of the calculations use a wrong length, skip the halving or use the wrong operation. Only one adds the parallel sides, halves and multiplies by the height." },
            stretch: { extend: "Work out the value of each of the four calculations and explain, for each wrong one, what mistake a pupil would have made to write it." }
          },
          why: "Add the parallel sides, halve, multiply by the perpendicular height: (8 + 12) ÷ 2 × 4 = 40."
        },
        {
          title: "Find the missing height",
          task: { kind: "numeric", q: "A trapezium has an area of 60 cm² and parallel sides of 7 cm and 13 cm. What is its perpendicular height?", answer: 6, tolerance: 0, units: "cm", check: "60 / ((7 + 13) / 2)",
                  misconceptions: [
                    { answer: 3, says: "You divided the area by the whole sum of the parallel sides: 60 ÷ 20 = 3. The formula uses half the sum, 10, so the height is 60 ÷ 10 = 6.", check: "60 / (7 + 13)" },
                    { answer: 40, says: "You subtracted the sides from the area: 60 − 7 − 13 = 40. Area is a multiplication, so undo it by dividing: half the sum is 10, and 60 ÷ 10 = 6.", check: "60 - 7 - 13" },
                    { answer: 12, says: "You found 60 ÷ 10 = 6 and then doubled it. The halving is already inside the 10, so the height is 6, not 12.", check: "60 / ((7 + 13) / 2) * 2" }
                  ] },
          explain: "Say, in one sentence, what you divided the area by and why.",
          contexts: [
            { label: "Sticker", q: "A trapezium-shaped sticker has an area of 60 cm² and parallel sides of 7 cm and 13 cm. What is its perpendicular height?",
              why: "Half the sum of the parallel sides is 10. Height = 60 ÷ 10 = 6." },
            { label: "Model window", q: "A trapezium-shaped window in a model house has an area of 60 cm² and parallel edges of 7 cm and 13 cm. What is its perpendicular height?",
              why: "Half the sum of the parallel sides is 10. Height = 60 ÷ 10 = 6." }
          ],
          levels: {
            support: {
              steps: ["Add the parallel sides and halve, just as in the formula.", "Divide the area by that number.", "Check by putting the height back into the formula."],
              example: { q: "A trapezium has an area of 35 cm² and parallel sides of 4 cm and 10 cm. What is its perpendicular height?",
                         steps: ["4 + 10 = 14, and 14 ÷ 2 = 7.", "35 ÷ 7 = 5.", "Check: 7 × 5 = 35."],
                         answer: "5 cm", check: "35 / ((4 + 10) / 2)" }
            },
            core: { hint: "Half of 7 + 13 is 10. The area is 10 times the height." },
            stretch: { extend: "Another trapezium also has an area of 60 cm² and a height of 6 cm, but its parallel sides are not 7 cm and 13 cm. Give two possible pairs of parallel sides and explain what they have in common." }
          },
          why: "7 + 13 = 20, half is 10, and 60 ÷ 10 = 6. Check: 10 × 6 = 60."
        }
      ]
    },

    // ───────────────────────────────────────────── Chapter 6
    {
      key: "expressions", n: 6,
      title: "Expressions for perimeter and area",
      lead: "Use letters for lengths you do not know, and write and simplify expressions for perimeter and area.",
      covers: [7],
      pretext: {
        words: [
          { word: "expression", means: "numbers and letters joined by + or −, like 4a + 6", sentence: "The expression 4a + 6 has two terms." },
          { word: "term", means: "one part of an expression", sentence: "In 3a + 2b, the terms are 3a and 2b." },
          { word: "like terms", means: "terms with exactly the same letter part", sentence: "3a and 5a are like terms, so they add to make 8a." },
          { word: "simplify", means: "to write an expression using as few terms as possible", sentence: "Simplify a + a + a to get 3a." },
          { word: "letter", means: "a symbol that stands for a number we do not know yet", sentence: "The letter a stands for the length of one side." }
        ],
        passage: [
          "Sometimes a side is not a number.",
          "It is a letter, like a.",
          "The letter stands for a length we do not know yet.",
          "We can still write the perimeter.",
          "A square with sides of a has a perimeter of a + a + a + a.",
          "We simplify this to 4a.",
          "4a means 4 times a.",
          "A rectangle with sides 3a and 2a has a perimeter of 10a.",
          "For area, we multiply the lengths.",
          "A rectangle with sides 5 and a has an area of 5a.",
          "A square with sides of b has an area of b times b, written b².",
          "Only add terms with the same letter."
        ]
      },
      sections: [
        {
          heading: "Letters for lengths, and simplifying",
          paragraphs: [
            "When we do not know a length, we give it a letter. A side of a cm is a centimetres long, where a could be any number. We write 5 × a as 5a, with no multiplication sign, and a × a as a².",
            "Adding the same letter several times is like adding the same number: a + a + a is 3a, just as 2 + 2 + 2 is 3 × 2. Terms with the same letter part are called like terms, and we add them by adding the numbers in front: 7a + 4a is 11a.",
            "Terms with different letters cannot be combined. 11a + 3b stays as 11a + 3b. It is as simple as it can be, so we say it is simplified."
          ],
          worked: {
            q: "Simplify 6x + 2x + 5y.",
            steps: ["6x and 2x are like terms: add the numbers in front, 6 + 2 = 8, so 6x + 2x is 8x.", "5y has a different letter, so it stays as it is.", "The simplified expression is 8x + 5y."],
            answer: "8x + 5y",
            check: "6*x + 2*x + 5*y"
          },
          tip: "Like terms have exactly the same letter. 3a and 3b are not like terms."
        },
        {
          heading: "Expressions for perimeter",
          paragraphs: [
            "Perimeter still means add every side. Write down each side, letters and all, then collect the like terms. A rectangle with sides 3a and 5 has four sides: 3a + 5 + 3a + 5. Collect: 3a + 3a is 6a and 5 + 5 is 10, so the perimeter is 6a + 10.",
            "For a regular polygon, multiply instead: a regular pentagon with sides of y has a perimeter of 5y. Writing y + y + y + y + y is also right, but 5y is simpler.",
            "Count the sides before you start. A rectangle has four terms before simplifying, a triangle three. A common mistake is to add each different side once and forget that a rectangle has two of each."
          ],
          worked: {
            q: "A triangle has sides of 7a cm, 4a cm and 3b cm. Write and simplify an expression for its perimeter.",
            steps: ["Write every side: 7a + 4a + 3b.", "Collect the like terms: 7a + 4a is 11a.", "3b stays. The perimeter is 11a + 3b cm."],
            answer: "11a + 3b cm",
            check: "7*a + 4*a + 3*b"
          },
          tip: "Letters add just like numbers, but only with their own kind."
        },
        {
          heading: "Expressions for area",
          paragraphs: [
            "Area means multiply, and letters multiply too. A rectangle with sides 4 and a has an area of 4 × a, which is 4a. A rectangle with sides 3a and 2 has an area of 3a × 2, which is 6a, because 3 × 2 is 6 and the a comes along.",
            "When a letter is multiplied by itself you get a square: a × a is a². So a rectangle with sides 4g and 3g has an area of 4g × 3g, which is 12g², because 4 × 3 = 12 and g × g is g².",
            "Triangles still halve. A triangle with a base of 8g cm and a perpendicular height of 3 cm has an area of 8g × 3 ÷ 2, which is 24g ÷ 2, or 12g cm²."
          ],
          worked: {
            q: "A rectangle has sides of 5a m and 3 m. Write an expression for its area.",
            steps: ["Area = length × width = 5a × 3.", "Multiply the numbers: 5 × 3 = 15. The a stays.", "The area is 15a m²."],
            answer: "15a m²",
            check: "5*a*3"
          },
          tip: "a × a is a², not 2a. 2a means a + a."
        },
        {
          heading: "Using an expression to find a length",
          paragraphs: [
            "If you know the area or perimeter as a number and also as an expression, you can find the letter. A rectangle with sides 4a cm and 6 cm has an area of 4a × 6, which is 24a. If the area is 72 cm², then 24a is 72.",
            "Ask yourself: 24 times what makes 72? Since 72 ÷ 24 = 3, the letter a is 3. Check by putting it back: the sides are 12 cm and 6 cm, and 12 × 6 = 72.",
            "The same idea works for perimeter. A square with sides of p has a perimeter of 4p. If the perimeter is 36 cm, then p is 36 ÷ 4 = 9."
          ],
          worked: {
            q: "A rectangle has sides of 4a cm and 6 cm. Its area is 72 cm². Find the value of a.",
            steps: ["Write the area as an expression: 4a × 6 is 24a.", "The area is 72, so 24a is 72.", "72 ÷ 24 = 3, so a is 3. Check: 12 × 6 = 72."],
            answer: "3",
            check: "72 / (4 * 6)"
          },
          tip: "Put your value back into the shape and check it gives the number you were told."
        }
      ],
      gate: [
        { kind: "mcq", q: "Simplify a + a + a + a + a.", options: ["5a", "a⁵", "a + 5", "4a"], answer: 0, check: "a + a + a + a + a",
          feedback: [
            "",
            "a⁵ means a × a × a × a × a, multiplying. Here the a's are added, and five a's added together make 5a.",
            "a + 5 means one a with 5 added on. Five a's added together make 5 lots of a, which is 5a.",
            "Count again: there are five a's, not four. Five a's make 5a."
          ],
          why: "Five lots of a added together is 5 × a, written 5a." },
        { kind: "gap", q: "The perimeter of a square with sides of length y is ___.", answer: "4y", options: ["4y", "y⁴", "y + 4"], check: "y + y + y + y",
          feedback: {
            "y⁴": "y⁴ means y multiplied by itself four times. Perimeter adds the four sides: y + y + y + y, which is 4y.",
            "y + 4": "y + 4 is one side with 4 added on. A square has four equal sides, so add all four: 4y."
          },
          why: "A square has four sides of y, so the perimeter is y + y + y + y = 4y." },
        { kind: "mcq", q: "A rectangle has sides of 3b and 2b. What is its area?", options: ["5b", "6b", "6b²", "10b"], answer: 2, check: "3*b * 2*b",
          feedback: [
            "You added 3b and 2b. Area means multiply: 3b × 2b.",
            "You multiplied 3 × 2 = 6 but forgot that b × b is b². The area is 6b².",
            "",
            "10b is the perimeter: 3b + 2b + 3b + 2b. Area is 3b × 2b, which is 6b²."
          ],
          why: "3b × 2b: multiply the numbers, 3 × 2 = 6, and the letters, b × b is b². So the area is 6b²." }
      ],
      modules: [
        {
          title: "Perimeter expression for a rectangle",
          task: { kind: "mcq", q: "A rectangle has sides of 5x cm and 3 cm. Which expression gives its perimeter in cm?", options: ["5x + 3", "10x + 6", "15x", "8x"], answer: 1, check: "2 * (5*x + 3)",
                  feedback: [
                    "You added one length and one width. A rectangle has four sides: 5x + 3 + 5x + 3, which simplifies to 10x + 6.",
                    "",
                    "You multiplied 5x by 3, which gives the area, not the perimeter. Perimeter adds the four sides: 10x + 6.",
                    "You added 5 and 3 and kept the x, but 3 has no x, so 5x and 3 are not like terms. The four sides add to 10x + 6."
                  ] },
          explain: "Say, in one sentence, why there are two terms in the answer and not one.",
          contexts: [
            { label: "Sticker", q: "A rectangular sticker has sides of 5x cm and 3 cm. Which expression gives the distance all the way round its edge in cm?",
              why: "Four sides: 5x + 3 + 5x + 3. Collect like terms: 10x + 6." },
            { label: "Garden plan", q: "On a plan, a rectangular lawn has sides of 5x cm and 3 cm. Which expression gives the perimeter of the drawing in cm?",
              why: "Four sides: 5x + 3 + 5x + 3. Collect like terms: 10x + 6." }
          ],
          levels: {
            support: {
              steps: ["Write down all four sides of the rectangle: two long and two short.", "Add the like terms together: the x terms with each other, the plain numbers with each other.", "Write the simplified expression with its unit."],
              example: { q: "A rectangle has sides of 2a cm and 7 cm. Write and simplify an expression for its perimeter.",
                         steps: ["Four sides: 2a + 7 + 2a + 7.", "2a + 2a is 4a, and 7 + 7 = 14.", "Perimeter = 4a + 14 cm."],
                         answer: "4a + 14 cm", check: "2 * (2*a + 7)" }
            },
            core: { hint: "A rectangle has four sides. Write all four down before you simplify." },
            stretch: { extend: "The perimeter of this rectangle is 46 cm. Find x, then work out the area of the rectangle." }
          },
          why: "The four sides are 5x, 3, 5x and 3. Collect like terms: 5x + 5x is 10x and 3 + 3 = 6, so the perimeter is 10x + 6."
        },
        {
          title: "Simplify a perimeter",
          task: { kind: "gap", q: "A triangle has sides of 6a cm, 4a cm and 5b cm. Its perimeter is ___ cm.", answer: "10a + 5b", options: ["10a + 5b", "15ab", "15a + b", "10a + 5"], check: "6*a + 4*a + 5*b",
                  feedback: {
                    "15ab": "You added all the numbers, 6 + 4 + 5 = 15, and squashed the letters together. 5b is not a like term with 6a and 4a, so it stays separate: 10a + 5b.",
                    "15a + b": "You added 5 to the a terms and left b on its own. The 5 belongs with the b: 5b is one term. The a terms give 6a + 4a, which is 10a, so the answer is 10a + 5b.",
                    "10a + 5": "You dropped the b. The third side is 5b, not 5, so the perimeter is 10a + 5b."
                  } },
          explain: "Say, in one sentence, why 6a and 4a can be added but 5b cannot be added to them.",
          levels: {
            support: {
              steps: ["Write every side with a plus sign between them.", "Circle the terms with the same letter and add their numbers.", "Leave any term with a different letter as it is."],
              example: { q: "A triangle has sides of 3a cm, 5a cm and 2b cm. Write and simplify an expression for its perimeter.",
                         steps: ["3a + 5a + 2b.", "3a + 5a is 8a.", "Perimeter = 8a + 2b cm."],
                         answer: "8a + 2b cm", check: "3*a + 5*a + 2*b" }
            },
            core: { hint: "Only like terms can be added. Which two sides have the same letter?" },
            stretch: { extend: "If a is 2 and b is 3, work out the actual perimeter in cm. Then explain why 15ab would give a different, wrong, answer." }
          },
          why: "6a + 4a + 5b: the like terms 6a and 4a make 10a, and 5b stays, so the perimeter is 10a + 5b."
        },
        {
          title: "Area expression for a triangle",
          task: { kind: "mcq", q: "A triangle has a base of 6y cm and a perpendicular height of 4 cm. Which expression gives its area in cm²?", options: ["24y", "12y", "10y", "12y²"], answer: 1, check: "6*y * 4 / 2",
                  feedback: [
                    "You multiplied 6y by 4 but forgot to halve. A triangle is half a rectangle: 24y ÷ 2 is 12y.",
                    "",
                    "You added 6 and 4 and kept the y. Area means multiply, then halve: 6y × 4 is 24y, and half of that is 12y.",
                    "Only the base has a y. 4 has no letter, so 6y × 4 is 24y, not 24y². Halving gives 12y."
                  ] },
          explain: "Say, in one sentence, why the answer has y but not y².",
          contexts: [
            { label: "Bunting", q: "A triangular bunting flag has a base of 6y cm and a perpendicular height of 4 cm. Which expression gives its area in cm²?",
              why: "6y × 4 is 24y, and half of that is 12y." },
            { label: "Paving plan", q: "On a plan, a triangular paving slab has a base of 6y cm and a perpendicular height of 4 cm. Which expression gives its area on the plan in cm²?",
              why: "6y × 4 is 24y, and half of that is 12y." }
          ],
          levels: {
            support: {
              steps: ["Multiply the base by the height: multiply the numbers, and keep the letter.", "Halve the result, because it is a triangle.", "Check whether any letter was multiplied by itself; only then do you get a square."],
              example: { q: "A triangle has a base of 8k cm and a perpendicular height of 5 cm. Write an expression for its area.",
                         steps: ["8k × 5 is 40k.", "Halve: 40k ÷ 2 is 20k.", "Area = 20k cm²."],
                         answer: "20k cm²", check: "8*k * 5 / 2" }
            },
            core: { hint: "Base × height ÷ 2. Only one of the two lengths has a letter." },
            stretch: { extend: "The area of this triangle is 48 cm². Find y, then write down the base in cm." }
          },
          why: "6y × 4 is 24y, and a triangle is half a rectangle, so the area is 12y. There is no y² because only the base has a y."
        }
      ]
    }
  ],

  sources: {
    deckDump: "ma_y07_12_main.txt",
    decksUsed: [
      "01. Convert metric units of length.pptx",
      "02. Perimeter of a polygon.pptx",
      "03. Perimeter of a compound shape.pptx",
      "04. Area of rectangles and parallelograms.pptx",
      "05. Area of a triangle.pptx",
      "06. Area of a trapezium.pptx",
      "7. Form expressions with perimeter and area (E).pptx"
    ],
    notes: "Lesson sequence, titles and objectives come from the seven MAIN decks, one lesson each. There is no SUPPORT dump for this unit. The decks teach through 'I do / You do' pairs, 'Who do you agree with?' character dialogues, 'Explain the mistake' slides and 'Complete the conversions' tables; those shape the support steps, the misconception feedback (slanted side used as height, forgetting to halve, adding instead of multiplying, mixed units, missing edges of an L-shape, treating a perimeter as an area) and the stretch prompts. Every question in this manifest uses original numbers; no slide question, answer or diagram was copied, and the AQA past-paper slide at the end of deck 7 was not used. No slide images were available, so no [LAYOUT LOST] or [NO TEXT] slide was read off an image. See NOTES.md."
  }
};
