// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE Combined Science: Trilogy 8464 · Physics P4 Electric Circuits · schema astra/2
//
// MACHINE CHECKS (recomputed by verify.py in this folder):
//   check:"<python expression>"  on every numeric item, every computable mcq, and every worked / example
//                                answer that contains a number. verify.py evaluates it and compares it with
//                                `answer` (numeric: within `tolerance`; worked: the first number in the answer
//                                string, which must be correctly rounded; mcq: exactly one option matches).
//   circuit:{type:"series", supply, R:[…], I, V:[…]}
//   circuit:{type:"parallel", supply, R:[…], branchI:[…], I, Rtotal?}
//                                the series / parallel rules are checked on every circuit used in the unit.
//   misconceptions[].check       (astra/2) every wrong answer offered as a misconception carries the arithmetic
//                                that produces it; verify.py confirms it reproduces `answer` and differs from the
//                                right answer, so the "says" text names a real slip, not an invented one.
//   contexts[].q                 (astra/2) carry exactly the same numbers as the task q (checked as a multiset),
//                                so the shared answer is right by construction.
//   sections[].widget            (astra/2) circuit widgets: the readings a renderer would show (I, V across each
//                                component, total R) are recomputed from supply + components and every number
//                                quoted in that section's worked example / paragraphs must be one of them.
//   Content is Combined Science (8464) only. Physics-only content (static electricity, the 1/R parallel
//   formula) is left out on purpose: see NOTES.md.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["combined-circuits"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "combined-circuits",
    subjectKey: "combined",
    subject: "Combined Science (Physics)",
    board: "AQA",
    spec: "8464",
    specRef: "Physics 6.2 Electricity (circuit symbols, charge and current, current/resistance/potential difference, series and parallel)",
    year: 10,
    tier: "GCSE Higher and Foundation",
    title: "Electric Circuits",
    sub: "From the symbols on a diagram to the rules that decide how much current flows in every part of a circuit.",
    bigQuestion: "What decides how much current flows in each part of a circuit?",
    lessonCount: 6,
    spacing: [2, 7, 30],
    // one star per chapter, laid around the loop of the circuit plate (0–1 of width/height), clear of the centre diagram
    constellation: [[0.16, 0.78], [0.20, 0.30], [0.42, 0.18], [0.66, 0.20], [0.86, 0.40], [0.78, 0.80]]
  },

  lessons: [
    { n: 1, title: "P4.1 Electrical Charges and Fields", question: "What happens to electrons when two insulating materials are rubbed together?", keywords: ["electron", "proton", "charge", "attract", "repel", "electric field"] },
    { n: 2, title: "P4.2 Current and charge", question: "How do we draw circuits, and how is current linked to the flow of charge?", keywords: ["circuit symbol", "ammeter", "variable resistor", "diode", "current", "charge", "coulomb"] },
    { n: 3, title: "P4.3 Potential Difference and Resistance", question: "How do potential difference and resistance control the current in a component?", keywords: ["potential difference", "voltmeter", "resistance", "ohm", "Ohm's law"] },
    { n: 4, title: "P4.4 Component characteristics", question: "How does the current through different components change as the potential difference changes?", keywords: ["I–V graph", "ohmic", "filament lamp", "diode", "thermistor", "LDR"] },
    { n: 5, title: "P4.5 Series circuits", question: "What are the rules for current, potential difference and resistance in a series circuit?", keywords: ["series", "total resistance", "share", "cells in series"] },
    { n: 6, title: "P4.6 Parallel circuits", question: "What are the rules for current and potential difference in a parallel circuit?", keywords: ["parallel", "branch", "junction", "total current"] }
  ],

  glossary: [
    { term: "circuit", means: "A complete loop that charge can flow around.", chapter: "symbols-and-circuits" },
    { term: "component", means: "One part of a circuit, such as a cell, a lamp, a switch or a resistor.", chapter: "symbols-and-circuits" },
    { term: "cell", means: "A component that pushes charge around a circuit; two or more cells joined together make a battery.", chapter: "symbols-and-circuits" },
    { term: "current (I)", means: "The rate of flow of electric charge, measured in amperes (A) with an ammeter.", chapter: "charge-and-current" },
    { term: "charge (Q)", means: "The property of electrons that makes them move in a circuit, measured in coulombs (C).", chapter: "charge-and-current" },
    { term: "potential difference (V)", means: "The energy transferred by each coulomb of charge, measured in volts (V) with a voltmeter.", chapter: "pd-and-resistance" },
    { term: "resistance (R)", means: "How much a component opposes the current, measured in ohms (Ω).", chapter: "pd-and-resistance" },
    { term: "ammeter", means: "A meter connected in series that measures current.", chapter: "symbols-and-circuits" },
    { term: "voltmeter", means: "A meter connected in parallel across a component that measures potential difference.", chapter: "pd-and-resistance" },
    { term: "Ohm's law", means: "At constant temperature, the current through a resistor is directly proportional to the potential difference across it.", chapter: "pd-and-resistance" },
    { term: "ohmic conductor", means: "A component whose resistance stays the same when the current changes, as long as the temperature is constant.", chapter: "component-characteristics" },
    { term: "diode", means: "A component that lets current flow in one direction only.", chapter: "component-characteristics" },
    { term: "thermistor", means: "A resistor whose resistance decreases as its temperature increases.", chapter: "component-characteristics" },
    { term: "light dependent resistor (LDR)", means: "A resistor whose resistance decreases as the light falling on it gets brighter.", chapter: "component-characteristics" },
    { term: "series", means: "Components joined one after another in a single loop.", chapter: "series-circuits" },
    { term: "parallel", means: "Components joined on separate branches, each connected across the same supply.", chapter: "parallel-circuits" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 drawn from the glossary above.
  connections: [
    { group: "Quantities you calculate", terms: ["current (I)", "charge (Q)", "potential difference (V)", "resistance (R)"] },
    { group: "Components you put in a circuit", terms: ["cell", "diode", "thermistor", "light dependent resistor (LDR)"] },
    { group: "Measuring, and what the readings show", terms: ["ammeter", "voltmeter", "Ohm's law", "ohmic conductor"] },
    { group: "How a circuit is put together", terms: ["circuit", "component", "series", "parallel"] }
  ],

  chapters: [
    /* ───────────── 1 · symbols and circuits ───────────── */
    {
      key: "symbols-and-circuits", n: 1, title: "Components, symbols and circuits",
      lead: "This chapter gives you the language of circuits: the parts, their symbols, and what current is.",
      covers: [2],
      pretext: {
        words: [
          { word: "circuit", means: "a complete loop that electricity can flow around", sentence: "The lamp lit up because the circuit was a complete loop." },
          { word: "component", means: "one part of a circuit", sentence: "A lamp is one component and a switch is another." },
          { word: "symbol", means: "a simple drawing that stands for a component", sentence: "The symbol for a lamp is a circle with a cross inside." },
          { word: "current", means: "the flow of electric charge around a circuit", sentence: "When the switch is closed, a current flows through the lamp." },
          { word: "series", means: "all the components joined in one single loop", sentence: "In a series circuit the current goes through each lamp in turn." }
        ],
        passage: [
          "A circuit is a loop that electricity can flow around.",
          "The loop must be complete, with no gaps in it.",
          "Each part of a circuit is called a component.",
          "A cell, a lamp, a switch and a wire are all components.",
          "Scientists draw each component as a simple symbol.",
          "A cell is drawn as one long line next to one short line.",
          "A lamp is drawn as a circle with a cross inside it.",
          "Wires are drawn as straight lines that join the symbols.",
          "Current is the flow of electric charge around the circuit.",
          "We measure current in amps, using a meter called an ammeter.",
          "In a series circuit, all the components are in one loop.",
          "The current goes through each component, one after the other.",
          "If a switch is open, there is a gap in the loop.",
          "Then no current flows, and the lamp goes out."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "حلقة مكتملة يمكن للكهرباء أن تسري فيها (circuit)",
            "جزء واحد من الدارة الكهربائية (component)",
            "رسم بسيط يمثّل أحد المكوّنات (symbol)",
            "تدفّق الشحنة الكهربائية في الدارة (current)",
            "كل المكوّنات موصولة في حلقة واحدة (series)"
          ],
          "passage": [
            "الدارة الكهربائية (circuit) حلقة يمكن للكهرباء أن تسري فيها.",
            "يجب أن تكون الحلقة مكتملة، بلا أي فجوة فيها.",
            "كل جزء من الدارة يُسمّى مكوّناً (component).",
            "الخلية والمصباح والمفتاح والسلك كلها مكوّنات.",
            "يرسم العلماء كل مكوّن على شكل رمز بسيط.",
            "تُرسم الخلية على شكل خط طويل بجانب خط قصير.",
            "يُرسم المصباح على شكل دائرة بداخلها علامة ×.",
            "تُرسم الأسلاك على شكل خطوط مستقيمة تصل بين الرموز.",
            "التيار (current) هو تدفّق الشحنة الكهربائية في الدارة.",
            "نقيس التيار بالأمبير (amps)، بجهاز يُسمّى الأميتر (ammeter).",
            "في دارة التوالي (series)، تكون كل المكوّنات في حلقة واحدة.",
            "يمرّ التيار في كل مكوّن، واحداً بعد الآخر.",
            "إذا كان المفتاح مفتوحاً، تكون هناك فجوة في الحلقة.",
            "عندها لا يسري أي تيار، وينطفئ المصباح."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "zamknięta pętla, po której może płynąć prąd (circuit, obwód)",
            "jedna część obwodu (component, element)",
            "prosty rysunek, który oznacza element obwodu (symbol)",
            "przepływ ładunku elektrycznego w obwodzie (current, natężenie prądu)",
            "wszystkie elementy połączone w jedną pętlę (series, szeregowo)"
          ],
          "passage": [
            "Obwód (circuit) to pętla, po której może płynąć prąd.",
            "Pętla musi być zamknięta, bez żadnych przerw.",
            "Każda część obwodu nazywa się elementem (component).",
            "Ogniwo, żarówka, wyłącznik i przewód to wszystko elementy.",
            "Naukowcy rysują każdy element jako prosty symbol.",
            "Ogniwo rysuje się jako jedną długą kreskę obok jednej krótkiej kreski.",
            "Żarówkę rysuje się jako kółko z krzyżykiem w środku.",
            "Przewody rysuje się jako proste linie, które łączą symbole.",
            "Prąd (current) to przepływ ładunku elektrycznego w obwodzie.",
            "Natężenie prądu mierzymy w amperach, przyrządem zwanym amperomierzem (ammeter).",
            "W obwodzie szeregowym (series circuit) wszystkie elementy są w jednej pętli.",
            "Prąd przechodzi przez każdy element, jeden po drugim.",
            "Jeśli wyłącznik jest otwarty, w pętli jest przerwa.",
            "Wtedy prąd nie płynie i żarówka gaśnie."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um caminho fechado e completo por onde a eletricidade pode passar (circuit, circuito)",
            "uma parte de um circuito (component, componente)",
            "um desenho simples que representa um componente (symbol, símbolo)",
            "a passagem de carga elétrica pelo circuito (current, corrente)",
            "todos os componentes ligados num único caminho fechado (series, série)"
          ],
          "passage": [
            "Um circuito é um caminho fechado por onde a eletricidade pode passar.",
            "O caminho tem de estar completo, sem nenhuma interrupção.",
            "Cada parte de um circuito tem o nome de componente (component).",
            "Uma pilha, uma lâmpada, um interruptor e um fio são todos componentes.",
            "Os cientistas desenham cada componente como um símbolo simples.",
            "Uma pilha é desenhada como uma linha longa ao lado de uma linha curta.",
            "Uma lâmpada é desenhada como um círculo com uma cruz dentro.",
            "Os fios são desenhados como linhas retas que ligam os símbolos.",
            "A corrente (current) é o fluxo de carga elétrica pelo circuito.",
            "Medimos a corrente em amperes (amps), com um aparelho chamado amperímetro.",
            "Num circuito em série, todos os componentes estão num único caminho fechado.",
            "A corrente passa por cada componente, um depois do outro.",
            "Se um interruptor está aberto, há uma interrupção no caminho.",
            "Então não passa corrente, e a lâmpada fica apagada."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "wareeg dhammaystiran oo korontadu ku dhex socon karto (circuit)",
            "hal qayb oo wareegga korontada ka mid ah (component)",
            "sawir fudud oo matalaya component (symbol)",
            "socodka shixnadda korontada (charge) ee wareegga korontada (current)",
            "dhammaan qaybaha oo hal wareeg keliya isku xiran (series)"
          ],
          "passage": [
            "Wareegga korontada (circuit) waa wareeg korontadu ku dhex socon karto.",
            "Wareeggu waa inuu dhammaystiran yahay, isagoo aan daldaloolo lahayn.",
            "Qayb kasta oo wareegga ka mid ah waxaa la yiraahdaa component.",
            "Cell (batari), laambad, furaha korontada (switch) iyo silig dhammaantood waa components.",
            "Saynisyahannadu component kasta waxay u sawiraan calaamad fudud (symbol).",
            "Cell waxaa loo sawiraa hal xariiq dheer oo ag taal hal xariiq gaaban.",
            "Laambad waxaa loo sawiraa goobaab iskutallaab gudaha ku leh.",
            "Siligyada waxaa loo sawiraa xariiqo toosan oo isku xira calaamadaha.",
            "Current waa socodka shixnadda korontada (charge) ee wareegga.",
            "Current waxaan ku cabbirnaa amps, annagoo isticmaalayna qalab cabbir la yiraahdo ammeter.",
            "Wareegga series, dhammaan components-ka hal wareeg ayay ku jiraan.",
            "Current wuxuu dhex maraa component kasta, mid mid kadib.",
            "Haddii switch furan yahay, wareegga daldalool ayaa ku jira.",
            "Markaas current ma socdo, laambaddana way damaysaa."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "замкнене коло, по якому може текти електричний струм",
            "одна частина електричного кола",
            "простий малюнок, який позначає компонент",
            "рух електричного заряду по колу (current)",
            "усі компоненти з’єднані в одне-єдине коло"
          ],
          "passage": [
            "Електричне коло (circuit) — це петля, по якій може текти електрика.",
            "Петля має бути замкненою, без розривів.",
            "Кожна частина кола називається компонентом (component).",
            "Елемент живлення (cell), лампа, вимикач і провід — усе це компоненти.",
            "Науковці малюють кожен компонент у вигляді простого символу.",
            "Елемент живлення малюють як одну довгу лінію поруч з однією короткою.",
            "Лампу малюють як коло з хрестиком усередині.",
            "Проводи малюють як прямі лінії, що з’єднують символи.",
            "Струм (current) — це рух електричного заряду по колу.",
            "Ми вимірюємо струм в амперах (amps) приладом, який називається амперметр (ammeter).",
            "У послідовному колі (series circuit) усі компоненти з’єднані в одну петлю.",
            "Струм проходить через кожен компонент, один за одним.",
            "Якщо вимикач розімкнений, у петлі є розрив.",
            "Тоді струм не тече, і лампа гасне."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایک مکمل چکر جس میں بجلی بہہ سکتی ہے (circuit)",
            "سرکٹ کا ایک حصہ (component)",
            "ایک سادہ نقشہ جو کسی component کی نمائندگی کرتا ہے (symbol)",
            "سرکٹ میں برقی چارج کا بہاؤ (current)",
            "سب components ایک ہی چکر میں جڑے ہوئے (series)"
          ],
          "passage": [
            "سرکٹ (circuit) ایک چکر ہے جس میں بجلی بہہ سکتی ہے۔",
            "یہ چکر مکمل ہونا چاہیے، اس میں کوئی خلا نہ ہو۔",
            "سرکٹ کے ہر حصے کو component کہتے ہیں۔",
            "سیل، لیمپ، سوئچ اور تار سب components ہیں۔",
            "سائنس دان ہر component کو ایک سادہ علامت (symbol) کی شکل میں بناتے ہیں۔",
            "سیل کو ایک لمبی لکیر اور اس کے ساتھ ایک چھوٹی لکیر کی شکل میں بنایا جاتا ہے۔",
            "لیمپ کو ایک دائرے کی شکل میں بنایا جاتا ہے جس کے اندر ایک کراس ہو۔",
            "تاروں کو سیدھی لکیروں کی شکل میں بنایا جاتا ہے جو علامتوں کو جوڑتی ہیں۔",
            "کرنٹ (current) سرکٹ میں برقی چارج کا بہاؤ ہے۔",
            "ہم کرنٹ کو amps میں ناپتے ہیں، ایک میٹر سے جسے ammeter کہتے ہیں۔",
            "series سرکٹ میں سب components ایک ہی چکر میں ہوتے ہیں۔",
            "کرنٹ ہر component سے ایک کے بعد ایک گزرتا ہے۔",
            "اگر سوئچ کھلا ہو تو چکر میں خلا پڑ جاتا ہے۔",
            "پھر کوئی کرنٹ نہیں بہتا، اور لیمپ بجھ جاتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Components and their symbols",
          paragraphs: [
            "Every circuit is built from components. You already know some of them: cells, lamps, switches and wires. To draw a circuit quickly and clearly, scientists use the same symbol for each component, all over the world.",
            "A cell is a long thin line next to a short thick line; the long line is the positive (+) side. A battery is two or more cells joined together. A lamp is a circle with a cross inside. A switch is a line with a break that can open or close. A resistor is a small empty rectangle, and a fuse is a rectangle with a line running through it.",
            "Two meters appear in almost every circuit. An ammeter is a circle with the letter A inside; it measures current. A voltmeter is a circle with the letter V inside; it measures potential difference, which you will meet in Chapter 3."
          ],
          worked: {
            q: "A circuit diagram shows, in one loop: a cell, a closed switch, a circle with a cross inside, and a circle with an A inside. Name each component and say whether the lamp will light.",
            steps: [
              "Read each symbol in turn: long and short line = cell; line with no break = closed switch.",
              "Circle with a cross = lamp; circle with A = ammeter.",
              "Check the loop: everything is in one loop and the switch is closed, so there are no gaps.",
              "A complete loop means current can flow, so the lamp lights and the ammeter shows a reading."
            ],
            answer: "Cell, closed switch, lamp and ammeter. The loop is complete, so the lamp lights."
          },
          tip: "A battery is two or more cells. In the exam, 'cell' and 'battery' are not the same word."
        },
        {
          heading: "Drawing circuit diagrams",
          paragraphs: [
            "A photograph of a circuit is hard to read: wires cross and bend. A circuit diagram is quicker to draw and shows exactly how each component is connected.",
            "Follow two rules. Draw every wire as a straight line with a ruler, and arrange the components so the lines run only across or up and down. Leave no gaps where wires meet a symbol: a gap on paper means a gap in the circuit.",
            "Where you put the meters matters. An ammeter goes in the loop, in series, so the current passes through it. A voltmeter goes across a component, in parallel, with one wire on each side of it."
          ],
          tip: "Ammeter IN the loop; voltmeter ACROSS the component."
        },
        {
          heading: "Variable resistors and diodes",
          paragraphs: [
            "A variable resistor is a resistor whose resistance you can change; its symbol is a resistor with an arrow drawn diagonally through it. Turning it up increases the resistance, so the current goes down and a lamp in the same loop gets dimmer. Turning it down does the opposite. Dimmer switches and volume controls work this way.",
            "A diode lets current flow in one direction only, like a one-way valve in a water pipe. Its symbol is a triangle pointing at a short bar; current flows in the direction the triangle points. Turn the diode round and the current stops. A light-emitting diode (LED) is a diode that gives out light.",
            "One more fact about direction. The current drawn on diagrams, called conventional current, flows from the positive side of the cell round to the negative side. The electrons themselves actually move the other way, from negative to positive. This convention was fixed before anyone knew about electrons."
          ],
          tip: "Diode = one-way street for current."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which component is drawn as a circle with the letter A inside?", options: ["voltmeter", "ammeter", "lamp", "cell"], answer: 1, why: "A circle with A is an ammeter, which measures current in amps. A circle with V is a voltmeter.",
          feedback: [
            "You chose the other meter. A circle with V is the voltmeter, which measures potential difference. The letter A stands for amps, the unit of current, so this is the ammeter.",
            "",
            "A lamp is a circle with a cross inside it, not a letter. A circle with a letter is always a meter.",
            "A cell has no circle at all: it is a long thin line beside a short thick line."
          ] },
        { kind: "mcq", q: "What is a battery?", options: ["one cell on its own", "two or more cells joined together", "a cell with a switch", "a lamp joined to a cell"], answer: 1, why: "A battery is two or more cells connected together.",
          feedback: [
            "One cell on its own is just a cell. The word battery means two or more cells joined together.",
            "",
            "Adding a switch does not make a battery. A battery is made of cells joined together.",
            "A lamp joined to a cell is a circuit, not a battery. A battery is two or more cells joined together."
          ] },
        { kind: "gap", q: "A diode lets current flow in ___ direction only.", answer: "one", options: ["one", "both", "no"], why: "A diode is like a one-way valve: current flows through it one way, not the other.",
          feedback: {
            "both": "A diode is a one-way valve. It lets current through in one direction and blocks it in the other; a plain wire lets current flow both ways.",
            "no": "A diode does let current flow, but only one way. Turn it round and the current stops."
          } }
      ],
      modules: [
        {
          title: "Name the symbol",
          task: { kind: "match", q: "Match each symbol to the component it stands for.", pairs: [
            ["a circle with a cross inside", "lamp"],
            ["a circle with the letter V inside", "voltmeter"],
            ["an empty rectangle", "resistor"],
            ["a rectangle with a diagonal arrow through it", "variable resistor"],
            ["a triangle pointing at a short bar", "diode"]
          ] },
          levels: {
            support: {
              steps: ["Look for a circle first: a circle with a letter is a meter; a circle with a cross is a lamp.", "A letter A means current (ammeter); a letter V means volts (voltmeter).", "Rectangles are resistors; anything extra on the rectangle (an arrow, a line) changes the type."],
              example: { q: "Match: long line beside a short line; a line with a break in it; a rectangle with a line running through it.", steps: ["Long and short line = cell.", "Line with a break = open switch.", "Rectangle with a line through it = fuse."], answer: "cell; open switch; fuse" }
            },
            core: { hint: "Circles are lamps or meters; rectangles are resistors of some kind." },
            stretch: { extend: "Draw the symbols for a thermistor and an LDR and explain how each one tells you it is a kind of resistor." }
          },
          why: "Circle with a cross = lamp; circle with V = voltmeter; empty rectangle = resistor; the arrow makes it a variable resistor; the triangle and bar is a diode.",
          explain: "Say how you can tell a meter symbol from a lamp symbol, even though both are circles."
        },
        {
          title: "Is the loop complete?",
          task: { kind: "mcq", q: "A series circuit has a cell, a lamp, an ammeter and a switch. The switch is open. What does the ammeter read?", options: ["0 A, because the gap stops the current everywhere in the loop", "a small current, because only the lamp is switched off", "the same current as when the switch is closed", "a larger current, because the switch has no resistance"], answer: 0, why: "In a series circuit there is only one loop. An open switch is a gap, so no current flows anywhere in it: the ammeter reads 0 A and the lamp is off.",
            feedback: [
              "",
              "You treated the lamp as the only thing switched off. There is one loop, so the gap at the switch stops the current everywhere in it, including through the ammeter: it reads 0 A.",
              "You ignored the open switch. An open switch is a gap in the only loop, so no current can flow anywhere: the ammeter reads 0 A, not the closed-switch value.",
              "You mixed up a closed switch (very little resistance) with an open one. An open switch is a gap: no current flows at all, so the reading is 0 A, not larger."
            ] },
          levels: {
            support: {
              steps: ["Trace the loop with your finger from the cell, round, and back.", "If you meet a gap (an open switch or a broken wire), current cannot get past it.", "In one loop, a gap anywhere stops the current everywhere."],
              example: { q: "A series circuit has a cell, two lamps and a closed switch. One lamp's filament breaks. What happens to the other lamp?", steps: ["The broken filament is a gap in the only loop.", "No current can flow anywhere in the loop."], answer: "The other lamp goes out too." }
            },
            core: { hint: "How many loops does a series circuit have?" },
            stretch: { extend: "Explain why old strings of decorative lights all went out when one bulb failed, and suggest how they could be wired so the others stay on." }
          },
          why: "A series circuit is a single loop. Any gap, such as an open switch, stops the current in every part of it.",
          explain: "Say why the ammeter reads 0 A even though it is nowhere near the open switch."
        },
        {
          title: "Turning the dimmer",
          task: { kind: "mcq", q: "A lamp and a variable resistor are in series with a cell. The resistance of the variable resistor is increased. What happens?", options: ["The current decreases and the lamp gets dimmer.", "The current increases and the lamp gets brighter.", "The current stays the same and the lamp stays the same.", "The current decreases and the lamp gets brighter."], answer: 0, why: "More resistance opposes the current more, so the current in the loop goes down and the lamp gets dimmer.",
            feedback: [
              "",
              "You have the effect the wrong way round. More resistance opposes the current more, so the current falls and the lamp gets dimmer.",
              "Changing the resistance in a series loop does change the current: I = V ÷ R, so a bigger R gives a smaller I and a dimmer lamp.",
              "You are right that the current decreases, but less current through the lamp makes it dimmer, not brighter."
            ] },
          levels: {
            support: {
              steps: ["Resistance opposes the current.", "More resistance in the loop means less current.", "Less current through the lamp means a dimmer lamp."],
              example: { q: "A volume control is turned so its resistance decreases. What happens to the current through the speaker?", steps: ["Less resistance opposes the current less.", "So the current increases."], answer: "The current increases, so the sound gets louder." }
            },
            core: { hint: "Resistance means 'opposing'. What does more opposing do to the flow?" },
            stretch: { extend: "Explain why the variable resistor and the lamp must be in series, not on separate branches, for the dimmer to work." }
          },
          why: "Increasing the resistance reduces the current everywhere in the series loop, so the lamp is dimmer.",
          explain: "Say, in one sentence, why more resistance makes the lamp dimmer."
        }
      ]
    },

    /* ───────────── 2 · charge and current ───────────── */
    {
      key: "charge-and-current", n: 2, title: "Charge and current: Q = I t",
      lead: "This chapter explains what is actually moving in a wire, and how to calculate charge, current and time.",
      covers: [1, 2],
      pretext: {
        words: [
          { word: "electron", means: "a tiny particle with a negative charge, found in every atom", sentence: "In a metal wire, electrons can move from atom to atom." },
          { word: "charge", means: "what electrons carry; it is measured in coulombs", sentence: "Each electron carries a very small amount of charge." },
          { word: "coulomb", means: "the unit of charge, written C", sentence: "Twenty coulombs of charge passed through the lamp." },
          { word: "ampere", means: "the unit of current, usually called the amp, written A", sentence: "The ammeter showed a current of two amperes." },
          { word: "rate", means: "how much happens every second", sentence: "Current is the rate at which charge flows." }
        ],
        passage: [
          "Everything is made of atoms.",
          "Atoms contain even smaller particles called electrons.",
          "Electrons carry a negative charge.",
          "In a metal wire, some electrons are free to move.",
          "A cell pushes these electrons around the circuit.",
          "Each electron pushes the next one, like marbles in a tube.",
          "So the lamp lights almost as soon as you close the switch.",
          "Current is how much charge flows past a point every second.",
          "More charge each second means a bigger current.",
          "Charge is measured in coulombs, written C.",
          "Current is measured in amps, written A.",
          "Time is measured in seconds, written s.",
          "The equation is charge equals current times time: Q = I t."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "جسيم صغير جداً شحنته سالبة، موجود في كل ذرّة (electron)",
            "ما تحمله الإلكترونات؛ وتُقاس بالكولوم (charge)",
            "وحدة الشحنة، وتُكتب C (coulomb)",
            "وحدة التيار، وتُسمّى عادةً الأمبير، وتُكتب A (ampere)",
            "مقدار ما يحدث في كل ثانية (rate)"
          ],
          "passage": [
            "كل شيء مصنوع من ذرّات.",
            "تحتوي الذرّات على جسيمات أصغر تُسمّى الإلكترونات (electrons).",
            "تحمل الإلكترونات شحنة سالبة.",
            "في السلك المعدني، بعض الإلكترونات حرّة الحركة.",
            "تدفع الخلية هذه الإلكترونات في الدارة.",
            "كل إلكترون يدفع الذي يليه، مثل كرات زجاجية في أنبوب.",
            "لذلك يضيء المصباح تقريباً في اللحظة التي تغلق فيها المفتاح.",
            "التيار هو مقدار الشحنة التي تمرّ بنقطة ما في كل ثانية.",
            "شحنة أكبر في كل ثانية تعني تياراً أكبر.",
            "تُقاس الشحنة بالكولوم (coulombs)، ويُكتب C.",
            "يُقاس التيار بالأمبير (amps)، ويُكتب A.",
            "يُقاس الزمن بالثواني، وتُكتب s.",
            "المعادلة هي: الشحنة تساوي التيار ضرب الزمن: Q = I t."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "maleńka cząstka o ładunku ujemnym, która jest w każdym atomie (electron)",
            "to, co niosą elektrony; mierzy się go w kulombach (charge, ładunek)",
            "jednostka ładunku, zapisywana C (coulomb, kulomb)",
            "jednostka natężenia prądu, zwykle nazywana amperem, zapisywana A (ampere)",
            "ile dzieje się w każdej sekundzie (rate)"
          ],
          "passage": [
            "Wszystko jest zbudowane z atomów.",
            "Atomy zawierają jeszcze mniejsze cząstki, zwane elektronami.",
            "Elektrony niosą ładunek ujemny.",
            "W metalowym przewodzie niektóre elektrony mogą się swobodnie poruszać.",
            "Ogniwo popycha te elektrony po obwodzie.",
            "Każdy elektron popycha następny, jak kulki w rurce.",
            "Dlatego żarówka zapala się niemal natychmiast po zamknięciu wyłącznika.",
            "Natężenie prądu (current) to ilość ładunku, która przepływa przez dany punkt w każdej sekundzie.",
            "Więcej ładunku na sekundę oznacza większe natężenie prądu.",
            "Ładunek mierzy się w kulombach, zapisywanych C.",
            "Natężenie prądu mierzy się w amperach, zapisywanych A.",
            "Czas mierzy się w sekundach, zapisywanych s.",
            "Równanie brzmi: ładunek równa się natężenie razy czas: Q = I t."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma partícula muito pequena com carga negativa, que existe em todos os átomos (electron, eletrão/elétron)",
            "o que os eletrões/elétrons transportam; é medida em coulombs (charge, carga)",
            "a unidade de carga, escrita C (coulomb)",
            "a unidade de corrente, normalmente chamada amp, escrita A (ampere)",
            "quanto acontece em cada segundo (rate)"
          ],
          "passage": [
            "Tudo é feito de átomos.",
            "Os átomos contêm partículas ainda menores, chamadas eletrões/elétrons (electrons).",
            "Os eletrões/elétrons têm carga negativa.",
            "Num fio de metal, alguns eletrões/elétrons estão livres para se mover.",
            "Uma pilha empurra esses eletrões/elétrons pelo circuito.",
            "Cada eletrão/elétron empurra o seguinte, como bolinhas dentro de um tubo.",
            "Por isso, a lâmpada acende quase no mesmo instante em que você fecha o interruptor.",
            "A corrente é a quantidade de carga que passa num ponto em cada segundo.",
            "Mais carga em cada segundo significa uma corrente maior.",
            "A carga é medida em coulombs, escrito C.",
            "A corrente é medida em amperes (amps), escrito A.",
            "O tempo é medido em segundos, escrito s.",
            "A equação é: carga é igual a corrente vezes tempo: Q = I t."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "qayb aad u yar oo shixnad taban leh, atam kasta laga helo (electron)",
            "waxa electrons-ka sidaan; waxaa lagu cabbiraa coulombs (charge)",
            "halbeegga shixnadda (charge), waxaa loo qoraa C (coulomb)",
            "halbeegga current, inta badan loogu yeedho amp, waxaa loo qoraa A (ampere)",
            "inta wax dhaca ilbiriqsi kasta (rate)"
          ],
          "passage": [
            "Wax walba waxay ka samaysan yihiin atamyo (atoms).",
            "Atamyadu waxay ka kooban yihiin qaybo ka sii yar oo la yiraahdo electrons.",
            "Electrons-ku waxay sidaan shixnad taban (negative charge).",
            "Silig bir ah, electrons-ka qaarkood si xor ah ayay u dhaqaaqi karaan.",
            "Cell wuxuu electrons-kaas ku riixaa wareegga korontada.",
            "Electron kasta wuxuu riixaa kan ku xiga, sida kuusyo tuubo ku jira.",
            "Sidaas darteed laambaddu waxay shidmaysaa ku dhowaad isla markaad switch-ka xirto.",
            "Current waa inta shixnad (charge) ah oo bar dhaafta ilbiriqsi kasta.",
            "Shixnad badan ilbiriqsi kasta macnaheedu waa current ka weyn.",
            "Shixnadda (charge) waxaa lagu cabbiraa coulombs, waxaa loo qoraa C.",
            "Current waxaa lagu cabbiraa amps, waxaa loo qoraa A.",
            "Waqtiga waxaa lagu cabbiraa ilbiriqsiyo (seconds), waxaa loo qoraa s.",
            "Isle'egtu waa shixnad waxay la mid tahay current lagu dhuftay waqti: Q = I t."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "крихітна частинка з від’ємним зарядом, яка є в кожному атомі",
            "те, що несуть електрони; вимірюється в кулонах (coulombs)",
            "одиниця заряду, позначається C",
            "одиниця струму, зазвичай її називають ампер (amp), позначається A",
            "скільки чогось відбувається за кожну секунду"
          ],
          "passage": [
            "Усе складається з атомів.",
            "Атоми містять ще менші частинки, які називаються електронами.",
            "Електрони несуть від’ємний заряд.",
            "У металевому проводі деякі електрони можуть вільно рухатися.",
            "Елемент живлення штовхає ці електрони по колу.",
            "Кожен електрон штовхає наступний, як кульки в трубці.",
            "Тому лампа загоряється майже одразу, як ви замикаєте вимикач.",
            "Струм — це те, скільки заряду проходить через точку за кожну секунду.",
            "Більше заряду за секунду означає більший струм.",
            "Заряд вимірюється в кулонах, позначається C.",
            "Струм вимірюється в амперах, позначається A.",
            "Час вимірюється в секундах, позначається s.",
            "Формула: заряд дорівнює струм помножити на час: Q = I t."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "منفی چارج والا ایک ننھا ذرہ، جو ہر ایٹم میں پایا جاتا ہے (electron)",
            "وہ چیز جو الیکٹران اٹھاتے ہیں؛ اسے coulombs میں ناپا جاتا ہے (charge)",
            "چارج کی اکائی، جسے C لکھا جاتا ہے (coulomb)",
            "کرنٹ کی اکائی، جسے عموماً amp کہتے ہیں اور A لکھا جاتا ہے (ampere)",
            "ہر سیکنڈ میں کتنا ہوتا ہے (rate)"
          ],
          "passage": [
            "ہر چیز ایٹموں سے بنی ہے۔",
            "ایٹموں میں اس سے بھی چھوٹے ذرے ہوتے ہیں جنھیں الیکٹران (electrons) کہتے ہیں۔",
            "الیکٹران منفی چارج رکھتے ہیں۔",
            "دھات کی تار میں کچھ الیکٹران آزادانہ حرکت کر سکتے ہیں۔",
            "سیل ان الیکٹرانوں کو سرکٹ میں دھکیلتا ہے۔",
            "ہر الیکٹران اگلے کو دھکیلتا ہے، جیسے نلکی میں کنچے۔",
            "اس لیے جیسے ہی آپ سوئچ بند کرتے ہیں، لیمپ تقریباً فوراً جل جاتا ہے۔",
            "کرنٹ یہ ہے کہ ہر سیکنڈ میں کسی نقطے سے کتنا چارج گزرتا ہے۔",
            "ہر سیکنڈ زیادہ چارج کا مطلب ہے زیادہ کرنٹ۔",
            "چارج کو coulombs میں ناپا جاتا ہے، جسے C لکھا جاتا ہے۔",
            "کرنٹ کو amps میں ناپا جاتا ہے، جسے A لکھا جاتا ہے۔",
            "وقت کو سیکنڈ میں ناپا جاتا ہے، جسے s لکھا جاتا ہے۔",
            "مساوات یہ ہے: چارج برابر ہے کرنٹ ضرب وقت: Q = I t۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What is moving in a wire?",
          paragraphs: [
            "Atoms contain positive protons, neutral neutrons and negative electrons. In a metal, some electrons are free to drift between the atoms. When a cell is connected, it pushes these free electrons around the circuit. A flow of charge is an electric current.",
            "The electrons do not race round the circuit. Each one pushes on the next, like a tube already full of marbles: push one marble in at one end and a marble drops out of the other end at once. That is why a lamp lights the instant you close the switch, even though each electron moves slowly.",
            "Current is the rate of flow of charge: how much charge passes a point every second. The more charge that passes each second, the higher the current."
          ],
          tip: "Current is not 'used up'. The same charge that leaves the cell comes back to it."
        },
        {
          heading: "Calculating charge: Q = I t",
          paragraphs: [
            "Charge flow, current and time are linked by one equation: charge flow = current × time, or Q = I t.",
            "Learn the units with the letters. Q is charge in coulombs (C). I is current in amperes (A). t is time in seconds (s). If the time is given in minutes, change it to seconds first by multiplying by 60."
          ],
          worked: {
            q: "A current of 0.50 A flows through a lamp for 2 minutes. Calculate the charge that flows.",
            steps: [
              "Write the equation: Q = I t.",
              "Change the time to seconds: 2 minutes = 2 × 60 = 120 s.",
              "Substitute: Q = 0.50 × 120.",
              "Calculate and add the unit: Q = 60 C."
            ],
            answer: "60 C",
            check: "0.50 * 2 * 60"
          },
          tip: "Minutes to seconds: × 60. Hours to seconds: × 3600."
        },
        {
          heading: "Rearranging: finding current or time",
          paragraphs: [
            "Sometimes you know the charge and need the current or the time. Rearrange Q = I t. To find current, divide charge by time: I = Q ÷ t. To find time, divide charge by current: t = Q ÷ I.",
            "Always write the equation first, then substitute the numbers with their units, then calculate. That way, even if you slip on the arithmetic, the examiner can see your method."
          ],
          worked: {
            q: "A charge of 90 C flows through a heater in 30 s. Calculate the current.",
            steps: [
              "Write the equation: Q = I t, so I = Q ÷ t.",
              "Substitute: I = 90 ÷ 30.",
              "Calculate and add the unit: I = 3.0 A."
            ],
            answer: "3.0 A",
            check: "90 / 30"
          },
          tip: "Cover the letter you want in Q = I t: what is left tells you to multiply or divide."
        }
      ],
      gate: [
        { kind: "numeric", q: "A current of 2 A flows for 10 s. Calculate the charge in coulombs.", answer: 20, tolerance: 0, units: "C", check: "2 * 10", why: "Q = I t = 2 × 10 = 20 C. Whole-number data, so a whole-number answer.",
          misconceptions: [
            { answer: 0.2, check: "2 / 10", says: "You divided the current by the time. Q = I t means multiply: 2 × 10 = 20 C." },
            { answer: 5, check: "10 / 2", says: "You divided the time by the current. Charge is current × time: 2 × 10 = 20 C." },
            { answer: 12, check: "2 + 10", says: "You added the two numbers. Q = I t is a multiplication: 2 × 10 = 20 C." }
          ] },
        { kind: "mcq", q: "What is the unit of charge?", options: ["ampere (A)", "volt (V)", "coulomb (C)", "ohm (Ω)"], answer: 2, why: "Charge Q is measured in coulombs, C. Current is in amperes, potential difference in volts, resistance in ohms.",
          feedback: [
            "The ampere is the unit of current (I), the rate at which charge flows. Charge itself is measured in coulombs (C).",
            "The volt is the unit of potential difference (V). Charge is measured in coulombs (C).",
            "",
            "The ohm is the unit of resistance (R). Charge is measured in coulombs (C)."
          ] },
        { kind: "mcq", q: "Which sentence describes electric current?", options: ["the rate of flow of charge", "the energy stored in a cell", "the push of a battery", "the opposition to the flow of charge"], answer: 0, why: "Current is the rate of flow of charge: how much charge passes a point each second.",
          feedback: [
            "",
            "Energy stored in a cell is not current. Current is the rate of flow of charge: how much charge passes a point each second.",
            "The push of a battery is its potential difference, measured in volts. Current is the flow that the push causes: the rate of flow of charge.",
            "Opposition to the flow of charge is resistance. Current is the flow itself: the rate at which charge passes a point."
          ] }
      ],
      modules: [
        {
          title: "Calculate the charge",
          task: { kind: "numeric", q: "A phone charger supplies a current of 1.5 A for 10 minutes. Calculate the charge that flows, in coulombs.", answer: 900, tolerance: 0, units: "C", check: "1.5 * 10 * 60", why: "t = 10 × 60 = 600 s. Q = I t = 1.5 × 600 = 900 C (exact from the data).",
            misconceptions: [
              { answer: 15, check: "1.5 * 10", says: "You multiplied by the time in minutes. Change 10 minutes to seconds first: 10 × 60 = 600 s, then Q = 1.5 × 600 = 900 C." },
              { answer: 0.0025, check: "1.5 / 600", says: "You divided the current by the time. Q = I t means multiply: 1.5 × 600 = 900 C." },
              { answer: 400, check: "600 / 1.5", says: "You divided the time by the current. Charge is current × time: 1.5 × 600 = 900 C." }
            ] },
          contexts: [
            { label: "Torch", q: "A torch lamp takes a current of 1.5 A for 10 minutes. Calculate the charge that flows, in coulombs." },
            { label: "Bike dynamo light", q: "A bike dynamo supplies a current of 1.5 A to the front light for 10 minutes. Calculate the charge that flows, in coulombs." },
            { label: "Car lamp", q: "A car's side lamp draws a current of 1.5 A for 10 minutes while the car is parked. Calculate the charge that flows, in coulombs." }
          ],
          levels: {
            support: {
              steps: ["Write Q = I t.", "Change minutes to seconds: multiply by 60.", "Multiply current by time and write the unit C."],
              example: { q: "A torch draws 0.40 A for 5 minutes. Calculate the charge that flows.", steps: ["Q = I t.", "t = 5 × 60 = 300 s.", "Q = 0.40 × 300 = 120 C."], answer: "120 C", check: "0.40 * 5 * 60" }
            },
            core: { hint: "The time must be in seconds before you multiply." },
            stretch: { extend: "The same charger runs for 1 hour instead. Without starting again, explain how you could find the new charge from your answer, and give it." }
          },
          why: "Change the time to seconds (600 s), then Q = I t = 1.5 × 600 = 900 C.",
          explain: "Say why the time had to be changed to seconds before you multiplied."
        },
        {
          title: "Find the current",
          task: { kind: "numeric", q: "A charge of 36 C flows through a lamp in 1 minute. Calculate the current in amps.", answer: 0.6, tolerance: 0.005, units: "A", check: "36 / 60", why: "t = 60 s. I = Q ÷ t = 36 ÷ 60 = 0.60 A (2 s.f.).",
            misconceptions: [
              { answer: 36, check: "36 / 1", says: "You used 1 minute as the time. Change it to seconds first: 1 minute = 60 s, so I = 36 ÷ 60 = 0.60 A." },
              { answer: 2160, check: "36 * 60", says: "You multiplied the charge by the time. Current is charge ÷ time: 36 ÷ 60 = 0.60 A." },
              { answer: 1.7, check: "60 / 36", says: "You divided the time by the charge, the wrong way up. I = Q ÷ t = 36 ÷ 60 = 0.60 A." }
            ] },
          levels: {
            support: {
              steps: ["Write Q = I t and rearrange: I = Q ÷ t.", "Change the time to seconds.", "Divide the charge by the time and write the unit A."],
              example: { q: "A charge of 150 C flows through a motor in 50 s. Calculate the current.", steps: ["I = Q ÷ t.", "I = 150 ÷ 50.", "I = 3.0 A."], answer: "3.0 A", check: "150 / 50" }
            },
            core: { hint: "Current is charge per second, so divide." },
            stretch: { extend: "A second lamp passes the same 36 C in 2 minutes. Is its current bigger or smaller? Explain using the idea of rate." }
          },
          why: "I = Q ÷ t = 36 ÷ 60 = 0.60 A.",
          explain: "Say why dividing the charge by the time gives the current."
        },
        {
          title: "Find the time",
          task: { kind: "numeric", q: "How long does it take for 600 C of charge to flow through a heater when the current is 2.5 A? Give your answer in seconds.", answer: 240, tolerance: 0, units: "s", check: "600 / 2.5", why: "t = Q ÷ I = 600 ÷ 2.5 = 240 s (exact).",
            misconceptions: [
              { answer: 1500, check: "600 * 2.5", says: "You multiplied the charge by the current. Time is charge ÷ current: 600 ÷ 2.5 = 240 s." },
              { answer: 0.0042, check: "2.5 / 600", says: "You divided the current by the charge, the wrong way up. t = Q ÷ I = 600 ÷ 2.5 = 240 s." },
              { answer: 4, check: "600 / 2.5 / 60", says: "That is the right time, but in minutes. The question asks for seconds: 4 minutes = 240 s." }
            ] },
          contexts: [
            { label: "Torch", q: "A torch takes a current of 2.5 A. How long does it take for 600 C of charge to flow through its lamp? Give your answer in seconds." },
            { label: "Phone charger", q: "A fast phone charger supplies a current of 2.5 A. How long does it take for 600 C of charge to flow into the phone? Give your answer in seconds." },
            { label: "Classroom bench", q: "On a bench circuit the ammeter reads 2.5 A. How long does it take for 600 C of charge to pass through the ammeter? Give your answer in seconds." }
          ],
          levels: {
            support: {
              steps: ["Write Q = I t and rearrange: t = Q ÷ I.", "Divide the charge by the current.", "Write the unit s."],
              example: { q: "How long does it take for 200 C to flow at a current of 4.0 A?", steps: ["t = Q ÷ I.", "t = 200 ÷ 4.0.", "t = 50 s."], answer: "50 s", check: "200 / 4.0" }
            },
            core: { hint: "Cover t in Q = I t: you are left with Q over I." },
            stretch: { extend: "Give your answer in minutes as well, and explain why a bigger current would make the time shorter." }
          },
          why: "t = Q ÷ I = 600 ÷ 2.5 = 240 s, which is 4 minutes.",
          explain: "Say why a bigger current would make the time shorter."
        }
      ]
    },

    /* ───────────── 3 · potential difference and resistance ───────────── */
    {
      key: "pd-and-resistance", n: 3, title: "Potential difference and resistance: V = I R",
      lead: "This chapter explains the push that drives current, the resistance that opposes it, and how to measure the resistance of a wire.",
      covers: [3],
      pretext: {
        words: [
          { word: "potential difference", means: "the push that drives current through a component; measured in volts", sentence: "The potential difference across the lamp was 6 volts." },
          { word: "volt", means: "the unit of potential difference, written V", sentence: "A small cell gives about one and a half volts." },
          { word: "voltmeter", means: "a meter placed across a component to measure potential difference", sentence: "We connected the voltmeter across the resistor." },
          { word: "resistance", means: "how much a component opposes the current", sentence: "The long wire had a bigger resistance than the short wire." },
          { word: "ohm", means: "the unit of resistance, written with the symbol Ω", sentence: "The resistor had a resistance of ten ohms." }
        ],
        passage: [
          "A cell gives the charge a push around the circuit.",
          "This push is called potential difference, or p.d. for short.",
          "Potential difference is measured in volts, written V.",
          "We measure it with a voltmeter placed across a component.",
          "Every component also opposes the current a little.",
          "This opposing is called resistance.",
          "Resistance is measured in ohms, written with the symbol Ω.",
          "A bigger push makes a bigger current flow.",
          "A bigger resistance makes a smaller current flow.",
          "The equation is p.d. equals current times resistance: V = I R.",
          "A longer wire has a bigger resistance than a shorter one.",
          "In the practical, you measure this for yourself."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الدفعة التي تحرّك التيار عبر المكوّن؛ وتُقاس بالفولت (potential difference)",
            "وحدة فرق الجهد، وتُكتب V (volt)",
            "جهاز يوصل على طرفي المكوّن لقياس فرق الجهد (voltmeter)",
            "مقدار مقاومة المكوّن لمرور التيار (resistance)",
            "وحدة المقاومة، وتُكتب بالرمز Ω (ohm)"
          ],
          "passage": [
            "تعطي الخلية الشحنة دفعة لتسري في الدارة.",
            "تُسمّى هذه الدفعة فرق الجهد (potential difference)، أو p.d. اختصاراً.",
            "يُقاس فرق الجهد بالفولت (volts)، ويُكتب V.",
            "نقيسه بجهاز الفولتميتر (voltmeter) الموصول على طرفي المكوّن.",
            "كل مكوّن يعارض التيار قليلاً أيضاً.",
            "تُسمّى هذه المعارضة المقاومة (resistance).",
            "تُقاس المقاومة بالأوم (ohms)، وتُكتب بالرمز Ω.",
            "دفعة أكبر تجعل تياراً أكبر يسري.",
            "مقاومة أكبر تجعل تياراً أصغر يسري.",
            "المعادلة هي: فرق الجهد يساوي التيار ضرب المقاومة: V = I R.",
            "السلك الأطول مقاومته أكبر من السلك الأقصر.",
            "في التجربة العملية، تقيس هذا بنفسك."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "„pchnięcie”, które przepycha prąd przez element; mierzone w woltach (potential difference, napięcie)",
            "jednostka napięcia, zapisywana V (volt, wolt)",
            "przyrząd podłączany równolegle do elementu, żeby zmierzyć napięcie (voltmeter, woltomierz)",
            "to, jak bardzo element przeciwstawia się prądowi (resistance, opór)",
            "jednostka oporu, zapisywana symbolem Ω (ohm, om)"
          ],
          "passage": [
            "Ogniwo popycha ładunek po obwodzie.",
            "To pchnięcie nazywa się różnicą potencjałów (potential difference), w skrócie p.d., czyli napięciem.",
            "Napięcie mierzy się w woltach, zapisywanych V.",
            "Mierzymy je woltomierzem podłączonym równolegle do elementu.",
            "Każdy element też trochę przeciwstawia się prądowi.",
            "To przeciwstawianie się nazywa się oporem (resistance).",
            "Opór mierzy się w omach, zapisywanych symbolem Ω.",
            "Większe pchnięcie sprawia, że płynie większy prąd.",
            "Większy opór sprawia, że płynie mniejszy prąd.",
            "Równanie brzmi: napięcie równa się natężenie razy opór: V = I R.",
            "Dłuższy przewód ma większy opór niż krótszy.",
            "Na zajęciach praktycznych zmierzysz to samodzielnie."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o empurrão que faz a corrente passar por um componente; é medido em volts (potential difference)",
            "a unidade de diferença de potencial, escrita V (volt)",
            "um aparelho ligado aos dois lados de um componente para medir a diferença de potencial (voltmeter, voltímetro)",
            "quanto um componente dificulta a passagem da corrente (resistance, resistência)",
            "a unidade de resistência, escrita com o símbolo Ω (ohm)"
          ],
          "passage": [
            "Uma pilha empurra a carga pelo circuito.",
            "Esse empurrão tem o nome de diferença de potencial, ou d.d.p. (em inglês, p.d.).",
            "A diferença de potencial é medida em volts, escrito V.",
            "Medimos a d.d.p. com um voltímetro ligado aos dois lados de um componente.",
            "Todos os componentes também dificultam um pouco a passagem da corrente.",
            "Essa dificuldade tem o nome de resistência (resistance).",
            "A resistência é medida em ohms, escrito com o símbolo Ω.",
            "Um empurrão maior faz passar uma corrente maior.",
            "Uma resistência maior faz passar uma corrente menor.",
            "A equação é: d.d.p. é igual a corrente vezes resistência: V = I R.",
            "Um fio mais comprido tem uma resistência maior do que um fio mais curto.",
            "Na atividade prática, você mesmo mede isso."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "riixitaanka current dhex mariya component; waxaa lagu cabbiraa volts (potential difference)",
            "halbeegga potential difference, waxaa loo qoraa V (volt)",
            "qalab cabbir oo component dhinacyadiisa lagu xiro si loo cabbiro potential difference (voltmeter)",
            "inta component uu current ka hor istaago (resistance)",
            "halbeegga resistance, waxaa lagu qoraa calaamadda Ω (ohm)"
          ],
          "passage": [
            "Cell wuxuu shixnadda riixitaan ku siiyaa wareegga korontada.",
            "Riixitaankaas waxaa la yiraahdaa potential difference, ama p.d. marka la soo gaabiyo.",
            "Potential difference waxaa lagu cabbiraa volts, waxaa loo qoraa V.",
            "Waxaan ku cabbirnaa voltmeter oo component dhinacyadiisa lagu xiro.",
            "Component kasta sidoo kale current wax yar ayuu ka hor istaagaa.",
            "Ka-hor-istaaggaas waxaa la yiraahdaa resistance.",
            "Resistance waxaa lagu cabbiraa ohms, waxaa lagu qoraa calaamadda Ω.",
            "Riixitaan ka weyn wuxuu socodsiiyaa current ka weyn.",
            "Resistance ka weyn wuxuu socodsiiyaa current ka yar.",
            "Isle'egtu waa p.d. waxay la mid tahay current lagu dhuftay resistance: V = I R.",
            "Silig dheer wuxuu leeyahay resistance ka weyn mid gaaban.",
            "Tijaabada shaybaarka (practical), adigu naftaada ayaad u cabbirtaa tan."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "поштовх, який проганяє струм через компонент; вимірюється у вольтах",
            "одиниця різниці потенціалів, позначається V",
            "прилад, який під’єднують паралельно до компонента, щоб вимірити різницю потенціалів",
            "наскільки компонент протидіє струму",
            "одиниця опору, позначається символом Ω"
          ],
          "passage": [
            "Елемент живлення дає заряду поштовх, щоб він рухався по колу.",
            "Цей поштовх називається різницею потенціалів (potential difference), або скорочено p.d.",
            "Різниця потенціалів вимірюється у вольтах, позначається V.",
            "Ми вимірюємо її вольтметром, під’єднаним паралельно до компонента.",
            "Кожен компонент також трохи протидіє струму.",
            "Ця протидія називається опором (resistance).",
            "Опір вимірюється в омах, позначається символом Ω.",
            "Більший поштовх створює більший струм.",
            "Більший опір створює менший струм.",
            "Формула: p.d. дорівнює струм помножити на опір: V = I R.",
            "Довший провід має більший опір, ніж коротший.",
            "На практичній роботі ви вимірюєте це самі."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ دھکا جو کرنٹ کو component سے گزارتا ہے؛ volts میں ناپا جاتا ہے (potential difference)",
            "potential difference کی اکائی، جسے V لکھا جاتا ہے (volt)",
            "ایک میٹر جو potential difference ناپنے کے لیے component کے دونوں سروں پر لگایا جاتا ہے (voltmeter)",
            "component کرنٹ کی کتنی مخالفت کرتا ہے (resistance)",
            "resistance کی اکائی، جسے علامت Ω سے لکھا جاتا ہے (ohm)"
          ],
          "passage": [
            "سیل چارج کو سرکٹ میں ایک دھکا دیتا ہے۔",
            "اس دھکے کو potential difference کہتے ہیں، یا مختصراً p.d.۔",
            "potential difference کو volts میں ناپا جاتا ہے، جسے V لکھا جاتا ہے۔",
            "ہم اسے voltmeter سے ناپتے ہیں جو component کے دونوں سروں پر لگایا جاتا ہے۔",
            "ہر component کرنٹ کی تھوڑی سی مخالفت بھی کرتا ہے۔",
            "اس مخالفت کو resistance کہتے ہیں۔",
            "resistance کو ohms میں ناپا جاتا ہے، جسے علامت Ω سے لکھا جاتا ہے۔",
            "زیادہ دھکے سے زیادہ کرنٹ بہتا ہے۔",
            "زیادہ resistance سے کم کرنٹ بہتا ہے۔",
            "مساوات یہ ہے: p.d. برابر ہے کرنٹ ضرب resistance: V = I R۔",
            "لمبی تار کی resistance چھوٹی تار سے زیادہ ہوتی ہے۔",
            "عملی تجربے (practical) میں آپ یہ خود ناپتے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Potential difference: the push",
          paragraphs: [
            "A cell does work on the charge, giving it energy. As the charge flows through a component, such as a lamp, it transfers that energy to the component. The potential difference across the component tells you how much energy each coulomb of charge transfers.",
            "Potential difference (p.d.) is measured in volts (V) with a voltmeter connected across the component, in parallel with it. One volt means one joule of energy is transferred by each coulomb of charge. The equation is energy transferred = charge flow × potential difference, or E = Q V, with E in joules (J)."
          ],
          worked: {
            q: "4.0 C of charge flows through a lamp. The p.d. across the lamp is 3.0 V. Calculate the energy transferred.",
            steps: [
              "Write the equation: E = Q V.",
              "Substitute: E = 4.0 × 3.0.",
              "Calculate and add the unit: E = 12 J."
            ],
            answer: "12 J",
            check: "4.0 * 3.0"
          },
          tip: "Volts = joules per coulomb."
        },
        {
          heading: "Resistance and Ohm's law: V = I R",
          paragraphs: [
            "Resistance is how much a component opposes the current. In a metal, the moving electrons collide with the vibrating ions in the metal. Each collision slows them and transfers energy, which heats the metal. More collisions mean more resistance.",
            "The current through a component depends on both the p.d. and the resistance: potential difference = current × resistance, or V = I R. V is in volts (V), I in amperes (A) and R in ohms (Ω). Rearranged, I = V ÷ R and R = V ÷ I.",
            "Ohm's law says that, for a resistor at constant temperature, the current is directly proportional to the potential difference: double the p.d. and the current doubles. Reversing the p.d. reverses the direction of the current."
          ],
          worked: {
            q: "A current of 0.25 A flows through a 40 Ω resistor. Calculate the potential difference across it.",
            steps: [
              "Write the equation: V = I R.",
              "Substitute: V = 0.25 × 40.",
              "Calculate and add the unit: V = 10 V."
            ],
            answer: "10 V",
            check: "0.25 * 40"
          },
          tip: "Write V = I R first, every time, then rearrange."
        },
        {
          heading: "Required practical: the resistance of a wire",
          paragraphs: [
            "In this practical you find how the length of a wire affects its resistance. Tape a length of thin wire along a metre ruler. Connect a cell and an ammeter in series with the wire, using a crocodile clip on the wire that you can slide to change the length. Connect a voltmeter across the length of wire being tested.",
            "For each length (for example 10 cm, 20 cm, up to 100 cm), close the switch, read the ammeter and voltmeter, then open the switch again so the wire does not heat up. Heating would change the resistance and spoil a fair test. Calculate R = V ÷ I for each length and plot resistance against length.",
            "The graph is a straight line through the origin: the resistance is directly proportional to the length. The same circuit, with resistors in place of the wire, lets you compare resistors joined in series and in parallel, which is the second part of this required practical."
          ],
          worked: {
            q: "At a length of 50 cm, the voltmeter reads 1.2 V and the ammeter reads 0.40 A. Calculate the resistance of that length of wire.",
            steps: [
              "Write the equation: V = I R, so R = V ÷ I.",
              "Substitute: R = 1.2 ÷ 0.40.",
              "Calculate and add the unit: R = 3.0 Ω."
            ],
            answer: "3.0 Ω",
            check: "1.2 / 0.40"
          },
          tip: "Safety: the wire can get hot. Keep the current low and switch off between readings.",
          // 50 cm of the wire from the worked example: 1.2 V across it, 0.40 A through it, so R = 3.0 Ω
          widget: { type: "circuit", preset: "ammeter-voltmeter",
            prompt: "Read the voltmeter across the wire and the ammeter in the loop. Divide the p.d. by the current and check that you get 3.0 Ω.",
            supply: 1.2, components: [{ kind: "resistor", r: 3.0 }] }
        }
      ],
      gate: [
        { kind: "numeric", q: "A current of 2 A flows through a 5 Ω resistor. Calculate the potential difference in volts.", answer: 10, tolerance: 0, units: "V", check: "2 * 5", why: "V = I R = 2 × 5 = 10 V. Whole-number data, so a whole-number answer.",
          misconceptions: [
            { answer: 0.4, check: "2 / 5", says: "You divided the current by the resistance. V = I R means multiply: 2 × 5 = 10 V." },
            { answer: 2.5, check: "5 / 2", says: "You divided the resistance by the current. V = I R means multiply: 2 × 5 = 10 V." },
            { answer: 7, check: "2 + 5", says: "You added the two numbers. V = I R is a multiplication: 2 × 5 = 10 V." }
          ] },
        { kind: "mcq", q: "What is the unit of resistance?", options: ["volt (V)", "ohm (Ω)", "ampere (A)", "coulomb (C)"], answer: 1, why: "Resistance is measured in ohms, Ω.",
          feedback: [
            "The volt is the unit of potential difference, the push. Resistance, the opposition, is measured in ohms (Ω).",
            "",
            "The ampere is the unit of current, the flow. Resistance is measured in ohms (Ω).",
            "The coulomb is the unit of charge. Resistance is measured in ohms (Ω)."
          ] },
        { kind: "gap", q: "A voltmeter is connected in ___ with the component it measures.", answer: "parallel", options: ["series", "parallel", "line"], why: "A voltmeter goes across the component, in parallel. The ammeter goes in series.",
          feedback: {
            "series": "In series, in the loop, is where the ammeter goes. A voltmeter goes across the component, in parallel with it, with one wire on each side.",
            "line": "'In line' is another way of saying in series, which is how an ammeter is connected. A voltmeter goes across the component, in parallel."
          } }
      ],
      modules: [
        {
          title: "Calculate the potential difference",
          task: { kind: "numeric", q: "A current of 0.15 A flows through a 120 Ω resistor. Calculate the potential difference across the resistor in volts.", answer: 18, tolerance: 0, units: "V", check: "0.15 * 120", why: "V = I R = 0.15 × 120 = 18 V (2 s.f., matching the data).",
            misconceptions: [
              { answer: 800, check: "120 / 0.15", says: "You divided the resistance by the current. V = I R means multiply: 0.15 × 120 = 18 V." },
              { answer: 0.00125, check: "0.15 / 120", says: "You divided the current by the resistance. V = I R means multiply: 0.15 × 120 = 18 V." },
              { answer: 1800, check: "15 * 120", says: "You seem to have used 15 A instead of 0.15 A. Check the decimal point: 0.15 × 120 = 18 V." }
            ] },
          contexts: [
            { label: "Classroom bench", q: "On a bench circuit, a current of 0.15 A flows through a 120 Ω resistor. Calculate the potential difference across the resistor in volts." },
            { label: "Phone charger", q: "Inside a phone charger, a current of 0.15 A flows through a 120 Ω resistor. Calculate the potential difference across the resistor in volts." },
            { label: "Bike dynamo light", q: "A bike dynamo drives a current of 0.15 A through a 120 Ω resistor in the light's circuit. Calculate the potential difference across the resistor in volts." }
          ],
          levels: {
            support: {
              steps: ["Write V = I R.", "Substitute the current (A) and the resistance (Ω).", "Multiply and write the unit V."],
              example: { q: "A current of 0.50 A flows through a 24 Ω lamp. Calculate the p.d. across it.", steps: ["V = I R.", "V = 0.50 × 24.", "V = 12 V."], answer: "12 V", check: "0.50 * 24" }
            },
            core: { hint: "V = I R: multiply the two numbers you are given." },
            stretch: { extend: "The p.d. is doubled and the resistor stays at the same temperature. Use Ohm's law to say what happens to the current, and explain why the temperature condition matters." }
          },
          why: "V = I R = 0.15 × 120 = 18 V.",
          explain: "Say what the 18 V tells you about the energy each coulomb of charge transfers in the resistor."
        },
        {
          title: "Calculate the resistance",
          task: { kind: "numeric", q: "The p.d. across a component is 9.0 V and the current through it is 0.36 A. Calculate its resistance in ohms.", answer: 25, tolerance: 0, units: "Ω", check: "9.0 / 0.36", why: "R = V ÷ I = 9.0 ÷ 0.36 = 25 Ω (2 s.f.).",
            misconceptions: [
              { answer: 3.24, check: "9.0 * 0.36", says: "You multiplied the p.d. by the current. Resistance is p.d. ÷ current: 9.0 ÷ 0.36 = 25 Ω." },
              { answer: 0.04, check: "0.36 / 9.0", says: "You divided the current by the p.d., the wrong way up. R = V ÷ I = 9.0 ÷ 0.36 = 25 Ω." },
              { answer: 2.5, check: "9.0 / 3.6", says: "You seem to have used 3.6 A instead of 0.36 A. Check the decimal point: 9.0 ÷ 0.36 = 25 Ω." }
            ] },
          contexts: [
            { label: "Torch", q: "The p.d. across a torch lamp is 9.0 V and the current through it is 0.36 A. Calculate the lamp's resistance in ohms." },
            { label: "Classroom bench", q: "On a bench circuit, the voltmeter across a resistor reads 9.0 V and the ammeter reads 0.36 A. Calculate the resistance in ohms." }
          ],
          levels: {
            support: {
              steps: ["Write V = I R and rearrange: R = V ÷ I.", "Divide the p.d. by the current.", "Write the unit Ω."],
              example: { q: "The p.d. across a heater is 12 V and the current is 0.40 A. Calculate its resistance.", steps: ["R = V ÷ I.", "R = 12 ÷ 0.40.", "R = 30 Ω."], answer: "30 Ω", check: "12 / 0.40" }
            },
            core: { hint: "Cover R in V = I R: you are left with V over I." },
            stretch: { extend: "A second component has the same p.d. across it but twice the current. What is its resistance? Explain without using the equation first, then check with it." }
          },
          why: "R = V ÷ I = 9.0 ÷ 0.36 = 25 Ω.",
          explain: "Say why dividing the p.d. by the current gives the resistance, and what a bigger answer would have told you."
        },
        {
          title: "Plan the wire practical",
          task: { kind: "written", q: "Describe a method to investigate how the length of a wire affects its resistance. You should name the meters and say where they go.", marks: 6,
            criteria: [
              "Wire taped along a metre ruler, with a crocodile clip to change the length tested.",
              "Ammeter in series with the wire; voltmeter connected across (in parallel with) the tested length.",
              "Readings of current and p.d. taken for at least five different lengths.",
              "Resistance calculated for each length using R = V ÷ I.",
              "Control: same wire (material and thickness); switch off between readings so the wire does not heat up.",
              "Plot resistance against length; expect a straight line through the origin."
            ],
            model: "I would tape the wire along a metre ruler and connect it to a cell, a switch and an ammeter in series, using a crocodile clip so I can choose the length. I would connect a voltmeter across the length being tested. Starting at 10 cm, I would close the switch, record the current and the p.d., then open the switch so the wire stays cool. I would repeat at 20 cm steps up to 100 cm, keeping the same wire. For each length I would calculate R = V ÷ I and plot resistance against length. I expect a straight line through the origin, showing resistance is directly proportional to length." },
          levels: {
            support: {
              steps: ["Start with the circuit: what is in series, and what goes across the wire?", "Say what you change (length), what you measure (I and V) and what you keep the same.", "Finish with what you calculate and what graph you draw."],
              example: { q: "Describe how you could measure the resistance of a lamp.", steps: ["Connect the lamp in series with a cell, a switch and an ammeter.", "Connect a voltmeter across the lamp.", "Close the switch, read the current and the p.d.", "Calculate the resistance using R = V ÷ I."], answer: "Measure the current with an ammeter in series and the p.d. with a voltmeter across the lamp, then use R = V ÷ I." }
            },
            core: { hint: "Six marks: circuit, meters, change, measure, control, graph." },
            stretch: { extend: "Explain why a short length of wire (for example 2 cm) might give unreliable results, and how you would make your results more repeatable." }
          },
          why: "A full answer names the circuit and where each meter goes, the variable changed, the readings taken, a control (especially temperature), the calculation R = V ÷ I and the expected straight-line graph.",
          explain: "Say why the switch is opened between readings, and what would go wrong with the results if it were left closed."
        }
      ]
    },

    /* ───────────── 4 · component characteristics ───────────── */
    {
      key: "component-characteristics", n: 4, title: "Component characteristics: I–V graphs",
      lead: "This chapter shows how current changes with potential difference for a resistor, a filament lamp, a diode, a thermistor and an LDR.",
      covers: [4],
      pretext: {
        words: [
          { word: "graph", means: "a picture of how one measurement changes with another", sentence: "We drew a graph of current against potential difference." },
          { word: "directly proportional", means: "when one thing doubles, the other doubles too", sentence: "For the resistor, the current was directly proportional to the p.d." },
          { word: "filament", means: "the thin coil of wire inside a lamp that glows when hot", sentence: "The filament gets very hot when current flows through it." },
          { word: "thermistor", means: "a resistor that changes with temperature", sentence: "When the thermistor warmed up, its resistance went down." },
          { word: "LDR", means: "a light dependent resistor, which changes with light", sentence: "In bright light the LDR had a low resistance." }
        ],
        passage: [
          "Different components behave in different ways.",
          "To see how, we change the p.d. and measure the current.",
          "Then we draw a graph of current against p.d.",
          "For a resistor, the graph is a straight line through zero.",
          "This means the current is directly proportional to the p.d.",
          "For a filament lamp, the graph is a curve.",
          "The filament gets hot, and its resistance goes up.",
          "A diode only lets current flow one way.",
          "A thermistor has less resistance when it is warm.",
          "An LDR has less resistance when the light is bright.",
          "These components help machines react to heat and light."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "رسم يبيّن كيف يتغيّر قياس ما مع قياس آخر (graph)",
            "عندما يتضاعف شيء، يتضاعف الآخر أيضاً (directly proportional)",
            "السلك الرفيع الملفوف داخل المصباح الذي يتوهّج عندما يسخن (filament)",
            "مقاوم يتغيّر مع درجة الحرارة (thermistor)",
            "مقاوم يعتمد على الضوء، ويتغيّر مع الضوء (LDR)"
          ],
          "passage": [
            "المكوّنات المختلفة تتصرّف بطرق مختلفة.",
            "لنرى كيف، نغيّر فرق الجهد (p.d.) ونقيس التيار.",
            "ثم نرسم رسماً بيانياً للتيار مقابل فرق الجهد.",
            "في المقاوم (resistor)، يكون الرسم خطاً مستقيماً يمرّ بالصفر.",
            "هذا يعني أن التيار يتناسب تناسباً مباشراً مع فرق الجهد.",
            "في مصباح الفتيلة (filament lamp)، يكون الرسم منحنياً.",
            "تسخن الفتيلة، فترتفع مقاومتها.",
            "الدايود (diode) يسمح للتيار بالمرور في اتجاه واحد فقط.",
            "الثرمستور (thermistor) مقاومته أقل عندما يكون دافئاً.",
            "المقاوم الضوئي (LDR) مقاومته أقل عندما يكون الضوء ساطعاً.",
            "تساعد هذه المكوّنات الآلات على الاستجابة للحرارة والضوء."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "obrazek pokazujący, jak jeden pomiar zmienia się razem z drugim (graph, wykres)",
            "kiedy jedno się podwaja, drugie też się podwaja (directly proportional, wprost proporcjonalne)",
            "cienki zwój drutu w żarówce, który świeci, gdy jest gorący (filament, żarnik)",
            "opornik, który zmienia się z temperaturą (thermistor, termistor)",
            "opornik zależny od światła, który zmienia się ze światłem (LDR, fotorezystor)"
          ],
          "passage": [
            "Różne elementy zachowują się na różne sposoby.",
            "Żeby to zobaczyć, zmieniamy napięcie (p.d.) i mierzymy natężenie prądu.",
            "Potem rysujemy wykres natężenia prądu w zależności od napięcia.",
            "Dla opornika wykres to linia prosta przechodząca przez zero.",
            "To znaczy, że natężenie prądu jest wprost proporcjonalne do napięcia.",
            "Dla żarówki z żarnikiem wykres jest krzywą.",
            "Żarnik się rozgrzewa i jego opór rośnie.",
            "Dioda przepuszcza prąd tylko w jednym kierunku.",
            "Termistor ma mniejszy opór, kiedy jest ciepły.",
            "Fotorezystor (LDR) ma mniejszy opór, kiedy światło jest jasne.",
            "Te elementy pomagają maszynom reagować na ciepło i światło."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma imagem que mostra como uma medida muda com outra (graph, gráfico)",
            "quando uma coisa duplica, a outra duplica também (directly proportional)",
            "o fio fino enrolado dentro de uma lâmpada, que brilha quando está quente (filament, filamento)",
            "um resistor que muda com a temperatura (thermistor)",
            "um resistor sensível à luz, que muda com a luz (LDR, light dependent resistor)"
          ],
          "passage": [
            "Componentes diferentes funcionam de maneiras diferentes.",
            "Para ver como, mudamos a d.d.p. (p.d.) e medimos a corrente.",
            "Depois, desenhamos um gráfico da corrente em relação à d.d.p.",
            "Para um resistor, o gráfico é uma linha reta que passa pelo zero.",
            "Isso significa que a corrente é diretamente proporcional à d.d.p.",
            "Para uma lâmpada de filamento, o gráfico é uma curva.",
            "O filamento aquece, e a sua resistência aumenta.",
            "Um díodo/diodo (diode) só deixa a corrente passar num sentido.",
            "Um termistor (thermistor) tem menos resistência quando está quente.",
            "Um LDR tem menos resistência quando a luz é forte.",
            "Esses componentes ajudam as máquinas a reagir ao calor e à luz."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "sawir muujinaya sida cabbir uu isku beddelo cabbir kale (graph)",
            "marka wax labanlaabmo, kan kalena wuu labanlaabmaa (directly proportional)",
            "siligga khafiifka ah ee duuban ee laambadda gudaheeda ku jira oo iftiima markuu kululaado (filament)",
            "resistor isbeddela marka heerkulku isbeddelo (thermistor)",
            "light dependent resistor, oo isbeddela marka iftiinku isbeddelo (LDR)"
          ],
          "passage": [
            "Components kala duwan si kala duwan ayay u dhaqmaan.",
            "Si aan u aragno sida, waxaan beddelnaa p.d. oo cabbirnaa current.",
            "Kadibna waxaan sawirnaa garaaf (graph) muujinaya current marka loo eego p.d.",
            "Resistor, garaafku waa xariiq toosan oo eber dhex marta.",
            "Tan macnaheedu waa current wuxuu si toos ah ula saami yahay p.d. (directly proportional).",
            "Laambad filament leh, garaafku waa qalloocan.",
            "Filament-ku wuu kululaadaa, resistance-kiisuna kor ayuu u kacaa.",
            "Diode wuxuu u oggolaadaa current inuu hal jiho keliya u socdo.",
            "Thermistor wuxuu leeyahay resistance ka yar markuu diiran yahay.",
            "LDR wuxuu leeyahay resistance ka yar marka iftiinku dhalaalayo.",
            "Components-kaas waxay mashiinnada ka caawiyaan inay ka falceliyaan kulayl iyo iftiin."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "малюнок того, як одна величина змінюється залежно від іншої",
            "коли одна величина подвоюється, інша теж подвоюється",
            "тонка спіраль дроту всередині лампи, яка світиться, коли нагрівається",
            "резистор, опір якого змінюється з температурою",
            "світлозалежний резистор (light dependent resistor), опір якого змінюється від світла"
          ],
          "passage": [
            "Різні компоненти поводяться по-різному.",
            "Щоб побачити як, ми змінюємо p.d. і вимірюємо струм.",
            "Потім ми будуємо графік залежності струму від p.d.",
            "Для резистора графік — це пряма лінія через нуль.",
            "Це означає, що струм прямо пропорційний p.d.",
            "Для лампи розжарювання (filament lamp) графік — це крива.",
            "Нитка розжарювання нагрівається, і її опір зростає.",
            "Діод пропускає струм лише в одному напрямку.",
            "Термістор має менший опір, коли він теплий.",
            "LDR має менший опір, коли світло яскраве.",
            "Ці компоненти допомагають приладам реагувати на тепло і світло."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایک تصویر جو دکھاتی ہے کہ ایک پیمائش دوسری کے ساتھ کیسے بدلتی ہے (graph)",
            "جب ایک چیز دگنی ہو تو دوسری بھی دگنی ہو جائے (directly proportional)",
            "لیمپ کے اندر تار کی باریک کنڈلی جو گرم ہو کر چمکتی ہے (filament)",
            "ایک resistor جو درجہ حرارت کے ساتھ بدلتا ہے (thermistor)",
            "روشنی پر منحصر resistor، جو روشنی کے ساتھ بدلتا ہے (LDR: light dependent resistor)"
          ],
          "passage": [
            "مختلف components مختلف طرح سے کام کرتے ہیں۔",
            "یہ دیکھنے کے لیے ہم p.d. بدلتے ہیں اور کرنٹ ناپتے ہیں۔",
            "پھر ہم کرنٹ اور p.d. کا گراف بناتے ہیں۔",
            "resistor کے لیے گراف صفر سے گزرتی ہوئی ایک سیدھی لکیر ہوتا ہے۔",
            "اس کا مطلب ہے کہ کرنٹ p.d. کے ساتھ براہِ راست تناسب (directly proportional) میں ہے۔",
            "filament لیمپ کے لیے گراف ایک خم دار لکیر ہوتا ہے۔",
            "filament گرم ہو جاتا ہے، اور اس کی resistance بڑھ جاتی ہے۔",
            "diode کرنٹ کو صرف ایک طرف بہنے دیتا ہے۔",
            "thermistor گرم ہونے پر کم resistance رکھتا ہے۔",
            "LDR تیز روشنی میں کم resistance رکھتا ہے۔",
            "یہ components مشینوں کو گرمی اور روشنی پر ردعمل دینے میں مدد کرتے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Testing a component and reading an I–V graph",
          paragraphs: [
            "To test a component, connect it in series with a cell or power supply, a variable resistor and an ammeter, with a voltmeter across the component. Change the variable resistor to get different currents, and record the p.d. and current each time. Then reverse the supply connections and repeat to get negative values.",
            "Plot current (I) up the side and potential difference (V) along the bottom: this is an I–V graph. For a resistor at constant temperature, the points lie on a straight line through the origin. The current is directly proportional to the p.d., so its resistance is constant: it is an ohmic conductor.",
            "On an I–V graph, a steeper line means more current for each volt, which means a lower resistance. To find the resistance at any point, read off V and I and use R = V ÷ I. This is required practical work: you must be able to do it for a resistor, a filament lamp and a diode."
          ],
          worked: {
            q: "On a resistor's I–V graph, the line passes through 1.5 V and 0.10 A. Calculate the resistance.",
            steps: [
              "Read the point: V = 1.5 V, I = 0.10 A.",
              "Use R = V ÷ I.",
              "R = 1.5 ÷ 0.10 = 15 Ω."
            ],
            answer: "15 Ω",
            check: "1.5 / 0.10"
          },
          tip: "I–V graph: steeper line = lower resistance.",
          // the resistor from the worked example: 1.5 V across it gives 0.10 A, one point on its I–V graph
          widget: { type: "circuit", preset: "ammeter-voltmeter",
            prompt: "Read the voltmeter and the ammeter. This is one point on the resistor's I–V graph. Use R = V ÷ I to check that the resistance is 15 Ω.",
            supply: 1.5, components: [{ kind: "resistor", r: 15 }] }
        },
        {
          heading: "The filament lamp and the diode",
          paragraphs: [
            "A filament lamp's I–V graph starts steep and then curves over, getting flatter as the p.d. increases. The shape is the same, upside down, for negative values. As the current increases, the filament gets hotter. The metal ions vibrate more, the electrons collide with them more often, and so the resistance increases. A filament lamp is not ohmic.",
            "A diode has a very high resistance in the reverse direction, so almost no current flows. In the forward direction, almost no current flows until the p.d. reaches a small value (for a typical silicon diode, about 0.6 to 0.7 V); after that the current rises steeply, because the resistance becomes low.",
            "So for a lamp you work out the resistance at each point with R = V ÷ I, and you find it grows as V grows."
          ],
          worked: {
            q: "A filament lamp takes 0.20 A at 1.0 V and 0.30 A at 3.0 V. Show that its resistance increases.",
            steps: [
              "At 1.0 V: R = V ÷ I = 1.0 ÷ 0.20 = 5.0 Ω.",
              "At 3.0 V: R = V ÷ I = 3.0 ÷ 0.30 = 10 Ω.",
              "The resistance has doubled, from 5.0 Ω to 10 Ω, as the filament got hotter."
            ],
            answer: "5.0 Ω at 1.0 V, rising to 10 Ω at 3.0 V",
            check: "1.0 / 0.20"
          },
          tip: "Hotter metal = ions vibrate more = more collisions = more resistance."
        },
        {
          heading: "Thermistors and LDRs: sensing components",
          paragraphs: [
            "The resistance of a thermistor decreases as its temperature increases. Thermostats in fridges, ovens and heating systems use thermistors to sense temperature and switch things on or off.",
            "The resistance of a light dependent resistor (LDR) decreases as the light falling on it gets brighter. Security lights and street lights use LDRs to switch on when it gets dark, because in the dark the LDR's resistance becomes high.",
            "Because their resistance changes so much, these components let a circuit react to its surroundings. You calculate their resistance in exactly the same way, with R = V ÷ I."
          ],
          worked: {
            q: "An LDR has 6.0 V across it. In the dark the current is 0.0012 A; in bright light it is 0.060 A. Calculate its resistance in the dark.",
            steps: [
              "Use R = V ÷ I.",
              "In the dark: R = 6.0 ÷ 0.0012 = 5000 Ω.",
              "In bright light: R = 6.0 ÷ 0.060 = 100 Ω, so the resistance falls as the light gets brighter."
            ],
            answer: "5000 Ω in the dark (100 Ω in bright light)",
            check: "6.0 / 0.0012"
          },
          tip: "Thermistor: hotter, lower R. LDR: brighter, lower R."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which component has an I–V graph that is a straight line through the origin?", options: ["a filament lamp", "a diode", "a resistor at constant temperature", "an LDR as the light changes"], answer: 2, why: "A resistor at constant temperature is ohmic: current is directly proportional to p.d., giving a straight line through the origin.",
          feedback: [
            "A filament lamp's graph curves over, because the filament heats up and its resistance rises. Only a resistor at constant temperature gives a straight line through the origin.",
            "A diode's graph is flat (almost no current) until a small forward p.d., then rises steeply, and it blocks current in reverse. That is not a straight line through the origin.",
            "",
            "An LDR's resistance changes with the light, so its current is not simply proportional to the p.d. The straight line belongs to a resistor at constant temperature."
          ] },
        { kind: "gap", q: "As the temperature of a thermistor increases, its resistance ___.", answer: "decreases", options: ["increases", "decreases", "stays the same"], why: "A thermistor's resistance decreases as its temperature increases.",
          feedback: {
            "increases": "You have it the wrong way round. A thermistor's resistance decreases as it gets hotter; that is what makes it useful in a thermostat. It is a filament lamp whose resistance increases when hot.",
            "stays the same": "A thermistor is not an ohmic conductor. Its resistance changes with temperature: it decreases as it gets hotter."
          } },
        { kind: "numeric", q: "The p.d. across a resistor is 4.0 V and the current is 0.50 A. Calculate its resistance in ohms.", answer: 8, tolerance: 0, units: "Ω", check: "4.0 / 0.50", why: "R = V ÷ I = 4.0 ÷ 0.50 = 8.0 Ω (2 s.f.).",
          misconceptions: [
            { answer: 2, check: "4.0 * 0.50", says: "You multiplied the p.d. by the current. Resistance is p.d. ÷ current: 4.0 ÷ 0.50 = 8.0 Ω." },
            { answer: 0.125, check: "0.50 / 4.0", says: "You divided the current by the p.d., the wrong way up. R = V ÷ I = 4.0 ÷ 0.50 = 8.0 Ω." },
            { answer: 3.5, check: "4.0 - 0.50", says: "You subtracted. R = V ÷ I is a division: 4.0 ÷ 0.50 = 8.0 Ω." }
          ] }
      ],
      modules: [
        {
          title: "Match the component to its behaviour",
          task: { kind: "match", q: "Match each component to its behaviour.", pairs: [
            ["resistor at constant temperature", "straight-line I–V graph through the origin"],
            ["filament lamp", "I–V graph curves over, getting flatter as the p.d. increases"],
            ["diode", "current flows in one direction only"],
            ["thermistor", "resistance decreases as temperature increases"],
            ["LDR", "resistance decreases as light gets brighter"]
          ] },
          levels: {
            support: {
              steps: ["Start with the one you are surest of: the diode is the one-way component.", "The two sensors are named for what they sense: thermistor (thermal = heat), LDR (light).", "Of the two graphs left, the resistor is the straight one and the lamp is the curve."],
              example: { q: "Match each I–V graph feature to its meaning: a steep straight line; a shallow straight line; a flat line along the V axis.", steps: ["Steep line: a lot of current per volt = low resistance.", "Shallow line: little current per volt = high resistance.", "Flat line: no current at all = very high resistance."], answer: "low resistance; high resistance; very high resistance" }
            },
            core: { hint: "Two of these are sensors; one is a one-way valve; one gets hot." },
            stretch: { extend: "Sketch the I–V graph for a diode, including negative p.d. values, and label where its resistance is high and where it is low." }
          },
          why: "An ohmic resistor gives a straight line; filament lamp = curve as it heats; diode = one way; thermistor = falls with heat; LDR = falls with light.",
          explain: "Say which component you matched first, and what clue in its name or graph told you."
        },
        {
          title: "Why does a lamp's resistance rise?",
          task: { kind: "written", q: "Explain why the resistance of a filament lamp increases as the potential difference across it increases.", marks: 4,
            criteria: [
              "A bigger p.d. gives a bigger current through the filament.",
              "The filament gets hotter.",
              "The metal ions vibrate more.",
              "Electrons collide with the ions more often, so the resistance increases."
            ],
            model: "As the potential difference increases, the current through the filament increases, so more energy is transferred to it and it gets hotter. In a hotter metal the ions vibrate more, so the electrons flowing through collide with them more often. More collisions mean the filament opposes the current more, so its resistance increases." },
          levels: {
            support: {
              steps: ["Link p.d. to current: more push, more current.", "Link current to temperature: the filament heats up.", "Link temperature to ions and collisions, then to resistance."],
              example: { q: "Explain why a long wire has a greater resistance than a short wire of the same metal.", steps: ["Electrons must travel past more metal ions in a long wire.", "So they make more collisions on the way.", "More collisions mean more resistance."], answer: "A longer wire means more ions to collide with, so more collisions and more resistance." }
            },
            core: { hint: "Use a chain: p.d., current, temperature, ions, collisions, resistance." },
            stretch: { extend: "Explain why a filament lamp is called non-ohmic, and why a resistor kept in cold water during an experiment behaves differently." }
          },
          why: "The four links are current rising, the filament heating, ions vibrating more and electrons colliding more often.",
          explain: "Say, in one sentence, why a hotter filament has more resistance."
        },
        {
          title: "Resistance from a graph reading",
          task: { kind: "numeric", q: "On a filament lamp's I–V graph, the current is 0.40 A when the p.d. is 6.0 V. Calculate the resistance of the lamp at this point, in ohms.", answer: 15, tolerance: 0, units: "Ω", check: "6.0 / 0.40", why: "R = V ÷ I = 6.0 ÷ 0.40 = 15 Ω (2 s.f.).",
            misconceptions: [
              { answer: 2.4, check: "6.0 * 0.40", says: "You multiplied the p.d. by the current. Resistance is p.d. ÷ current: 6.0 ÷ 0.40 = 15 Ω." },
              { answer: 0.067, check: "0.40 / 6.0", says: "You divided the current by the p.d., the wrong way up. R = V ÷ I = 6.0 ÷ 0.40 = 15 Ω." },
              { answer: 1.5, check: "6.0 / 4.0", says: "You seem to have used 4.0 A instead of 0.40 A. Check the decimal point: 6.0 ÷ 0.40 = 15 Ω." }
            ] },
          contexts: [
            { label: "Torch", q: "A torch lamp takes 0.40 A when the p.d. across it is 6.0 V. Calculate the resistance of the lamp at this p.d., in ohms." },
            { label: "Bike dynamo light", q: "A bike's dynamo lamp takes 0.40 A when the p.d. across it is 6.0 V. Calculate the resistance of the lamp at this p.d., in ohms." },
            { label: "Classroom bench", q: "On a bench circuit, the ammeter in series with a filament lamp reads 0.40 A and the voltmeter across it reads 6.0 V. Calculate the lamp's resistance at this point, in ohms." }
          ],
          levels: {
            support: {
              steps: ["Read the two values: V and I.", "Use R = V ÷ I.", "Write the unit Ω."],
              example: { q: "On the same kind of graph, the current is 0.25 A when the p.d. is 2.0 V. Calculate the resistance.", steps: ["R = V ÷ I.", "R = 2.0 ÷ 0.25.", "R = 8.0 Ω."], answer: "8.0 Ω", check: "2.0 / 0.25" }
            },
            core: { hint: "Resistance = p.d. ÷ current at that point." },
            stretch: { extend: "Compare your answer with the support example (8.0 Ω at 2.0 V). Explain what the two values together tell you about the filament." }
          },
          why: "R = V ÷ I = 6.0 ÷ 0.40 = 15 Ω. It is higher than at lower p.d. because the filament is hotter.",
          explain: "Say why this lamp's resistance at 6.0 V is higher than its resistance at a lower p.d."
        }
      ]
    },

    /* ───────────── 5 · series circuits ───────────── */
    {
      key: "series-circuits", n: 5, title: "Series circuits",
      lead: "This chapter gives you the three rules for a series circuit and shows how to use them with V = I R.",
      covers: [5],
      pretext: {
        words: [
          { word: "series", means: "joined one after another in a single loop", sentence: "The two lamps were joined in series." },
          { word: "total", means: "everything added together", sentence: "The total resistance is both resistances added together." },
          { word: "share", means: "split between", sentence: "The two lamps share the p.d. from the battery." },
          { word: "supply", means: "the cell, battery or power pack that pushes the current", sentence: "The supply gave a p.d. of twelve volts." }
        ],
        passage: [
          "In a series circuit, there is only one loop.",
          "The charge goes through each component in turn.",
          "So the current is the same everywhere in the loop.",
          "Every ammeter in the loop shows the same reading.",
          "The components share the p.d. from the supply.",
          "Add up the p.d. across each component.",
          "You get the p.d. of the supply.",
          "A bigger resistance gets a bigger share of the p.d.",
          "To find the total resistance, add the resistances together.",
          "Adding another resistor in series makes the total resistance bigger.",
          "So the current gets smaller."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "موصولة واحداً بعد الآخر في حلقة واحدة (series)",
            "كل شيء مجموعاً معاً (total)",
            "مقسَّم بين (share)",
            "الخلية أو البطارية أو وحدة الطاقة التي تدفع التيار (supply)"
          ],
          "passage": [
            "في دارة التوالي، توجد حلقة واحدة فقط.",
            "تمرّ الشحنة في كل مكوّن بالتتابع.",
            "لذلك يكون التيار متساوياً في كل مكان في الحلقة.",
            "كل أميتر في الحلقة يُظهر القراءة نفسها.",
            "تتقاسم المكوّنات فرق الجهد الآتي من المصدر (supply).",
            "اجمع فرق الجهد على طرفي كل مكوّن.",
            "فتحصل على فرق جهد المصدر.",
            "المقاومة الأكبر تحصل على نصيب أكبر من فرق الجهد.",
            "لإيجاد المقاومة الكلية، اجمع المقاومات معاً.",
            "إضافة مقاوم آخر على التوالي تجعل المقاومة الكلية أكبر.",
            "لذلك يصغر التيار."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "połączone jeden za drugim w jednej pętli (series, szeregowo)",
            "wszystko dodane razem (total, suma)",
            "podzielić między (share)",
            "ogniwo, bateria lub zasilacz, który popycha prąd (supply, źródło)"
          ],
          "passage": [
            "W obwodzie szeregowym jest tylko jedna pętla.",
            "Ładunek przechodzi przez każdy element po kolei.",
            "Dlatego natężenie prądu jest takie samo w całej pętli.",
            "Każdy amperomierz w pętli pokazuje ten sam odczyt.",
            "Elementy dzielą między siebie napięcie ze źródła.",
            "Dodaj napięcia na każdym elemencie.",
            "Otrzymasz napięcie źródła.",
            "Większy opór dostaje większą część napięcia.",
            "Żeby znaleźć opór całkowity, dodaj opory do siebie.",
            "Dodanie kolejnego opornika szeregowo zwiększa opór całkowity.",
            "Dlatego natężenie prądu maleje."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "ligados um depois do outro, num único caminho fechado (series, série)",
            "tudo somado (total)",
            "repartir entre (share)",
            "a pilha, bateria ou fonte de alimentação que empurra a corrente (supply, fonte)"
          ],
          "passage": [
            "Num circuito em série, há só um caminho fechado.",
            "A carga passa por cada componente, um de cada vez.",
            "Por isso, a corrente é a mesma em todos os pontos do circuito.",
            "Todos os amperímetros no circuito mostram o mesmo valor.",
            "Os componentes repartem a d.d.p. (p.d.) da fonte.",
            "Some a d.d.p. de cada componente.",
            "Você obtém a d.d.p. da fonte.",
            "Uma resistência maior recebe uma parte maior da d.d.p.",
            "Para encontrar a resistência total, some as resistências.",
            "Acrescentar outro resistor em série torna a resistência total maior.",
            "Por isso, a corrente fica menor."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "mid mid kadib isku xiran hal wareeg keliya (series)",
            "wax walba oo isku daran (total)",
            "u kala qaybsan (share)",
            "cell, batari ama qalabka korontada bixiya ee current riixa (supply)"
          ],
          "passage": [
            "Wareegga series, hal wareeg keliya ayaa jira.",
            "Shixnaddu waxay dhex martaa component kasta mid mid.",
            "Sidaas darteed current wuxuu isku mid yahay meel kasta oo wareegga ka mid ah.",
            "Ammeter kasta oo wareegga ku jira wuxuu tusaa isla akhris.",
            "Components-ku waxay wadaagaan p.d. ka imaanaya supply-ga.",
            "Isku dar p.d. component kasta.",
            "Waxaad heshaa p.d. ee supply-ga.",
            "Resistance ka weyn wuxuu helaa qayb ka weyn p.d.",
            "Si aad u hesho wadarta resistance, isku dar resistance-yada.",
            "Ku darista resistor kale oo series ah waxay weynaysaa wadarta resistance.",
            "Sidaas darteed current wuu yaraadaa."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "з’єднані один за одним в одній петлі",
            "усе, складене разом",
            "поділити між",
            "елемент живлення, батарея або блок живлення, який штовхає струм"
          ],
          "passage": [
            "У послідовному колі є лише одна петля.",
            "Заряд проходить через кожен компонент по черзі.",
            "Тому струм однаковий у всіх точках петлі.",
            "Кожен амперметр у петлі показує одне й те саме значення.",
            "Компоненти ділять між собою p.d. від джерела живлення.",
            "Додайте p.d. на кожному компоненті.",
            "Ви отримаєте p.d. джерела живлення.",
            "Більший опір отримує більшу частку p.d.",
            "Щоб знайти загальний опір, додайте всі опори.",
            "Якщо додати ще один резистор послідовно, загальний опір стає більшим.",
            "Тому струм стає меншим."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایک ہی چکر میں ایک کے بعد ایک جڑے ہوئے (series)",
            "سب کچھ جمع کیا ہوا (total)",
            "آپس میں بانٹنا (share)",
            "سیل، بیٹری یا پاور پیک جو کرنٹ کو دھکیلتا ہے (supply)"
          ],
          "passage": [
            "series سرکٹ میں صرف ایک چکر ہوتا ہے۔",
            "چارج باری باری ہر component سے گزرتا ہے۔",
            "اس لیے چکر میں ہر جگہ کرنٹ ایک جیسا ہوتا ہے۔",
            "چکر میں ہر ammeter ایک ہی ریڈنگ دکھاتا ہے۔",
            "components سپلائی (supply) کی p.d. آپس میں بانٹ لیتے ہیں۔",
            "ہر component کی p.d. کو جمع کریں۔",
            "آپ کو سپلائی کی p.d. مل جاتی ہے۔",
            "زیادہ resistance کو p.d. کا زیادہ حصہ ملتا ہے۔",
            "کل resistance معلوم کرنے کے لیے سب resistances کو جمع کریں۔",
            "series میں ایک اور resistor شامل کرنے سے کل resistance بڑھ جاتی ہے۔",
            "اس لیے کرنٹ کم ہو جاتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Current in a series circuit",
          paragraphs: [
            "A series circuit has only one loop, so all the charge has to pass through every component in turn. That means the current is the same at every point: put ammeters anywhere in the loop and they all show the same reading.",
            "Cells joined in series add their p.d.s together, as long as they all face the same way. If one cell is put in the wrong way round, it pushes against the others and its p.d. is taken away instead of added."
          ],
          worked: {
            q: "Three 1.5 V cells are joined in series, all facing the same way. Then one is turned round. Calculate the total p.d. before and after.",
            steps: [
              "Same way round: add them. 1.5 + 1.5 + 1.5 = 4.5 V.",
              "One reversed: it subtracts. 1.5 + 1.5 − 1.5 = 1.5 V."
            ],
            answer: "4.5 V, then 1.5 V",
            check: "1.5 + 1.5 + 1.5"
          },
          tip: "Series: one loop, one current."
        },
        {
          heading: "Potential difference shares out",
          paragraphs: [
            "In a series circuit, the p.d. of the supply is shared between the components. Add up the p.d. across each component and you get the supply p.d.: V(supply) = V₁ + V₂ + ….",
            "The share is not always equal. The current is the same through each component, so by V = I R the component with the bigger resistance gets the bigger share of the p.d."
          ],
          worked: {
            q: "A 12 V battery is connected to a lamp and a resistor in series. The p.d. across the lamp is 7.5 V. Calculate the p.d. across the resistor.",
            steps: [
              "The p.d.s add up to the supply: 12 = 7.5 + V(resistor).",
              "Rearrange: V(resistor) = 12 − 7.5.",
              "V(resistor) = 4.5 V."
            ],
            answer: "4.5 V",
            check: "12 - 7.5"
          },
          // the lamp and resistor from the worked example: a 5.0 Ω lamp and a 3.0 Ω resistor on 12 V carry 1.5 A,
          // so the voltmeters read 7.5 V (lamp) and 4.5 V (resistor), the numbers in the text
          widget: { type: "circuit", preset: "series-1-lamp-resistor",
            prompt: "Read the voltmeter across the lamp and the voltmeter across the resistor. Add the two readings: do they make the 12 V of the battery?",
            supply: 12, components: [{ kind: "lamp", r: 5.0 }, { kind: "resistor", r: 3.0 }] }
        },
        {
          heading: "Total resistance and the current",
          paragraphs: [
            "The total resistance of components in series is the sum of their resistances: R(total) = R₁ + R₂ + …. Adding another resistor in series increases the total resistance, because the charge has to pass through both: the cell's push is shared between more opposition, so the current falls.",
            "To solve a series circuit, work in order. First add the resistances. Then find the current with I = V ÷ R(total), using the supply p.d. Finally, find the p.d. across each component with V = I R, and check that they add up to the supply."
          ],
          worked: {
            q: "A 9.0 V battery is connected to a 10 Ω resistor and a 20 Ω resistor in series. Calculate the current, and the p.d. across each resistor.",
            steps: [
              "Total resistance: R = 10 + 20 = 30 Ω.",
              "Current: I = V ÷ R = 9.0 ÷ 30 = 0.30 A, the same everywhere.",
              "p.d. across 10 Ω: V = I R = 0.30 × 10 = 3.0 V.",
              "p.d. across 20 Ω: V = I R = 0.30 × 20 = 6.0 V.",
              "Check: 3.0 + 6.0 = 9.0 V, the supply p.d."
            ],
            answer: "0.30 A; 3.0 V across 10 Ω and 6.0 V across 20 Ω",
            check: "9.0 / (10 + 20)",
            circuit: { type: "series", supply: 9.0, R: [10, 20], I: 0.30, V: [3.0, 6.0] }
          },
          tip: "Order: add the R, find I, then each V. Check the V's add up.",
          // the two resistors from the worked example (preset gives the series topology; kind gives the drawing):
          // 9.0 V across 10 Ω + 20 Ω gives 0.30 A everywhere, 3.0 V and 6.0 V on the voltmeters
          widget: { type: "circuit", preset: "series-2-lamps",
            prompt: "Compare the ammeter readings at two places in the loop. Then read the voltmeter across each resistor and add the two readings.",
            supply: 9.0, components: [{ kind: "resistor", r: 10 }, { kind: "resistor", r: 20 }] }
        }
      ],
      gate: [
        { kind: "mcq", q: "What can you say about the current in a series circuit?", options: ["It is the same everywhere in the loop.", "It is biggest next to the cell.", "It gets used up by each component.", "It splits between the components."], answer: 0, why: "A series circuit has one loop, so the same current passes through every component.",
          feedback: [
            "",
            "The current is not bigger near the cell. There is one loop, so every point in it carries the same current.",
            "Current is not used up. The same charge that leaves the cell returns to it, so the current is the same all the way round the loop.",
            "Splitting happens at a junction in a parallel circuit. A series circuit has no junctions, so the current is the same everywhere."
          ] },
        { kind: "numeric", q: "A 4 Ω resistor and a 6 Ω resistor are joined in series. Calculate the total resistance in ohms.", answer: 10, tolerance: 0, units: "Ω", check: "4 + 6", why: "In series the resistances add: 4 + 6 = 10 Ω. Whole-number data, so a whole-number answer.",
          misconceptions: [
            { answer: 24, check: "4 * 6", says: "You multiplied. In series the resistances add: 4 + 6 = 10 Ω." },
            { answer: 2.4, check: "4 * 6 / (4 + 6)", says: "That is the kind of answer you get for resistors in parallel, where the total is less than either resistor. In series the resistances simply add: 4 + 6 = 10 Ω." },
            { answer: 2, check: "6 - 4", says: "You subtracted. In series the resistances add: 4 + 6 = 10 Ω." }
          ] },
        { kind: "numeric", q: "A 6.0 V supply is connected to two lamps in series. The p.d. across one lamp is 2.5 V. Calculate the p.d. across the other lamp in volts.", answer: 3.5, tolerance: 0.05, units: "V", check: "6.0 - 2.5", why: "The p.d.s add up to the supply: 6.0 − 2.5 = 3.5 V (2 s.f.).",
          misconceptions: [
            { answer: 8.5, check: "6.0 + 2.5", says: "You added. The two p.d.s together make the supply p.d., so the other lamp has 6.0 − 2.5 = 3.5 V." },
            { answer: 3, check: "6.0 / 2", says: "You shared the supply equally. Lamps only share equally if they are identical; here one has 2.5 V, so the other has 6.0 − 2.5 = 3.5 V." },
            { answer: 2.5, check: "2.5", says: "You gave the other lamp the same p.d. The p.d.s must add up to 6.0 V, so the second lamp has 6.0 − 2.5 = 3.5 V." }
          ] }
      ],
      modules: [
        {
          title: "Total resistance and current",
          task: { kind: "numeric", q: "A 6.0 V battery is connected to an 8.0 Ω resistor and a 4.0 Ω resistor in series. Calculate the current in the circuit, in amps.", answer: 0.5, tolerance: 0.005, units: "A",
            check: "6.0 / (8.0 + 4.0)",
            circuit: { type: "series", supply: 6.0, R: [8.0, 4.0], I: 0.50, V: [4.0, 2.0] },
            why: "R(total) = 8.0 + 4.0 = 12 Ω. I = V ÷ R = 6.0 ÷ 12 = 0.50 A (2 s.f.).",
            misconceptions: [
              { answer: 0.75, check: "6.0 / 8.0", says: "You used only the 8.0 Ω resistor. Add the resistances first: 8.0 + 4.0 = 12 Ω, then I = 6.0 ÷ 12 = 0.50 A." },
              { answer: 1.5, check: "6.0 / 4.0", says: "You used only the 4.0 Ω resistor. Add the resistances first: 8.0 + 4.0 = 12 Ω, then I = 6.0 ÷ 12 = 0.50 A." },
              { answer: 2, check: "(8.0 + 4.0) / 6.0", says: "You divided the resistance by the p.d., the wrong way up. I = V ÷ R = 6.0 ÷ 12 = 0.50 A." }
            ] },
          contexts: [
            { label: "Torch", q: "A torch has a 6.0 V battery, an 8.0 Ω lamp and a 4.0 Ω resistor in series. Calculate the current in the circuit, in amps." },
            { label: "Bike dynamo light", q: "A bike dynamo supplies 6.0 V to an 8.0 Ω front lamp and a 4.0 Ω rear lamp in series. Calculate the current in the circuit, in amps." },
            { label: "Classroom bench", q: "On a bench circuit, a 6.0 V power pack is connected to an 8.0 Ω resistor and a 4.0 Ω resistor in series. Calculate the current in the circuit, in amps." }
          ],
          levels: {
            support: {
              steps: ["Add the resistances to get the total resistance.", "Use I = V ÷ R(total) with the battery p.d.", "Write the unit A."],
              example: { q: "A 12 V battery is connected to a 5.0 Ω and a 3.0 Ω resistor in series. Calculate the current.", steps: ["R(total) = 5.0 + 3.0 = 8.0 Ω.", "I = 12 ÷ 8.0.", "I = 1.5 A."], answer: "1.5 A", check: "12 / (5.0 + 3.0)",
                circuit: { type: "series", supply: 12, R: [5.0, 3.0], I: 1.5, V: [7.5, 4.5] } }
            },
            core: { hint: "Find the total resistance first." },
            stretch: { extend: "A third resistor of 12 Ω is added in series. Calculate the new current and explain, in words, why it has fallen." }
          },
          why: "Total resistance 12 Ω; I = 6.0 ÷ 12 = 0.50 A everywhere in the loop.",
          explain: "Say why the current is the same at both ammeters in this loop."
        },
        {
          title: "Find the share of the p.d.",
          task: { kind: "numeric", q: "A 24 V supply is connected to a 30 Ω resistor and a 50 Ω resistor in series. Calculate the p.d. across the 50 Ω resistor, in volts.", answer: 15, tolerance: 0, units: "V",
            check: "24 / (30 + 50) * 50",
            circuit: { type: "series", supply: 24, R: [30, 50], I: 0.30, V: [9.0, 15] },
            why: "R(total) = 80 Ω; I = 24 ÷ 80 = 0.30 A; V = I R = 0.30 × 50 = 15 V (2 s.f.). Check: 9.0 + 15 = 24 V.",
            misconceptions: [
              { answer: 9, check: "24 / (30 + 50) * 30", says: "That is the p.d. across the 30 Ω resistor. The question asks for the 50 Ω resistor: V = I R = 0.30 × 50 = 15 V." },
              { answer: 12, check: "24 / 2", says: "You shared the supply equally. The resistors are not equal, so the shares are not equal: the 50 Ω resistor gets 0.30 × 50 = 15 V." },
              { answer: 0.3, check: "24 / (30 + 50)", says: "That is the current, 0.30 A, not the p.d. Go one step further: V = I R = 0.30 × 50 = 15 V." }
            ] },
          contexts: [
            { label: "Lorry lights", q: "A lorry's 24 V battery is connected to a 30 Ω resistor and a 50 Ω lamp in series. Calculate the p.d. across the 50 Ω lamp, in volts." },
            { label: "Classroom bench", q: "A 24 V power pack is connected to a 30 Ω resistor and a 50 Ω resistor in series. Calculate the p.d. across the 50 Ω resistor, in volts." }
          ],
          levels: {
            support: {
              steps: ["Add the resistances.", "Find the current: I = V(supply) ÷ R(total).", "Find the p.d. across the resistor you want: V = I R."],
              example: { q: "A 10 V supply is connected to a 15 Ω and a 35 Ω resistor in series. Calculate the p.d. across the 15 Ω resistor.", steps: ["R(total) = 15 + 35 = 50 Ω.", "I = 10 ÷ 50 = 0.20 A.", "V = 0.20 × 15 = 3.0 V."], answer: "3.0 V", check: "10 / (15 + 35) * 15",
                circuit: { type: "series", supply: 10, R: [15, 35], I: 0.20, V: [3.0, 7.0] } }
            },
            core: { hint: "You need the current before you can find either p.d." },
            stretch: { extend: "Find the p.d. across the 30 Ω resistor too, and explain why the bigger resistor gets the bigger share." }
          },
          why: "Total 80 Ω, current 0.30 A, so the 50 Ω resistor has 0.30 × 50 = 15 V across it.",
          explain: "Say why the 50 Ω resistor gets the bigger share of the p.d."
        },
        {
          title: "Find the missing resistor",
          task: { kind: "numeric", q: "A 12 V battery drives a current of 0.40 A through two resistors in series. One resistor is 18 Ω. Calculate the resistance of the other, in ohms.", answer: 12, tolerance: 0, units: "Ω",
            check: "12 / 0.40 - 18",
            circuit: { type: "series", supply: 12, R: [18, 12], I: 0.40, V: [7.2, 4.8] },
            why: "R(total) = V ÷ I = 12 ÷ 0.40 = 30 Ω. Other resistor = 30 − 18 = 12 Ω (2 s.f.).",
            misconceptions: [
              { answer: 30, check: "12 / 0.40", says: "That is the total resistance of both resistors together. Subtract the 18 Ω you already know: 30 − 18 = 12 Ω." },
              { answer: 4.8, check: "12 * 0.40", says: "You multiplied the p.d. by the current. Total resistance is p.d. ÷ current: 12 ÷ 0.40 = 30 Ω, then 30 − 18 = 12 Ω." },
              { answer: 48, check: "12 / 0.40 + 18", says: "You added 18 Ω to the total instead of subtracting it. The total is 30 Ω, so the other resistor is 30 − 18 = 12 Ω." }
            ] },
          levels: {
            support: {
              steps: ["Find the total resistance from the supply: R(total) = V ÷ I.", "The total is the two resistances added together.", "Subtract the one you know."],
              example: { q: "A 9.0 V battery drives 0.50 A through two resistors in series. One is 10 Ω. Find the other.", steps: ["R(total) = 9.0 ÷ 0.50 = 18 Ω.", "Other = 18 − 10.", "Other = 8.0 Ω."], answer: "8.0 Ω", check: "9.0 / 0.50 - 10",
                circuit: { type: "series", supply: 9.0, R: [10, 8.0], I: 0.50, V: [5.0, 4.0] } }
            },
            core: { hint: "Use the battery p.d. and the current to find the total resistance first." },
            stretch: { extend: "Calculate the p.d. across each resistor and show that they add up to the battery p.d." }
          },
          why: "Total resistance 30 Ω; 30 − 18 = 12 Ω.",
          explain: "Say why you had to find the total resistance before you could find the missing resistor."
        }
      ]
    },

    /* ───────────── 6 · parallel circuits ───────────── */
    {
      key: "parallel-circuits", n: 6, title: "Parallel circuits",
      lead: "This chapter gives you the rules for a parallel circuit, and shows why your home is wired in parallel.",
      covers: [6],
      pretext: {
        words: [
          { word: "parallel", means: "joined on separate branches, side by side", sentence: "The two lamps were joined in parallel, each on its own branch." },
          { word: "branch", means: "one of the separate paths in a parallel circuit", sentence: "Each branch had one lamp in it." },
          { word: "junction", means: "a point where wires split apart or join together", sentence: "At the junction the current split into two." },
          { word: "split", means: "divide into parts", sentence: "The current splits between the branches and joins up again." }
        ],
        passage: [
          "A parallel circuit has more than one loop.",
          "Each loop is called a branch.",
          "At a junction, the current splits between the branches.",
          "Later, the branches join and the current adds up again.",
          "It is like a river flowing round both sides of an island.",
          "Each branch gets the full p.d. of the supply.",
          "If one lamp breaks, the other branches still work.",
          "Adding another branch gives the current another path.",
          "So the total current from the supply goes up.",
          "The houses we live in are wired in parallel."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "موصولة على فروع منفصلة، جنباً إلى جنب (parallel)",
            "أحد المسارات المنفصلة في دارة التوازي (branch)",
            "نقطة تتفرّع فيها الأسلاك أو تلتقي (junction)",
            "التقسيم إلى أجزاء (split)"
          ],
          "passage": [
            "دارة التوازي (parallel) فيها أكثر من حلقة واحدة.",
            "كل حلقة تُسمّى فرعاً (branch).",
            "عند نقطة التفرّع (junction)، ينقسم التيار بين الفروع.",
            "بعد ذلك تلتقي الفروع ويتجمّع التيار مرة أخرى.",
            "إنه مثل نهر يجري حول جانبي جزيرة.",
            "كل فرع يحصل على فرق جهد المصدر كاملاً.",
            "إذا تعطّل مصباح واحد، تظل الفروع الأخرى تعمل.",
            "إضافة فرع آخر تعطي التيار مساراً آخر.",
            "لذلك يزيد التيار الكلي الآتي من المصدر.",
            "البيوت التي نعيش فيها موصولة على التوازي."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "połączone na osobnych gałęziach, obok siebie (parallel, równolegle)",
            "jedna z osobnych dróg w obwodzie równoległym (branch, gałąź)",
            "punkt, w którym przewody się rozdzielają albo łączą (junction, węzeł)",
            "podzielić na części (split)"
          ],
          "passage": [
            "Obwód równoległy (parallel circuit) ma więcej niż jedną pętlę.",
            "Każda pętla nazywa się gałęzią (branch).",
            "W węźle (junction) prąd rozdziela się między gałęzie.",
            "Dalej gałęzie się łączą i prąd znów się sumuje.",
            "To jak rzeka płynąca po obu stronach wyspy.",
            "Każda gałąź dostaje pełne napięcie źródła.",
            "Jeśli jedna żarówka się zepsuje, pozostałe gałęzie nadal działają.",
            "Dodanie kolejnej gałęzi daje prądowi jeszcze jedną drogę.",
            "Dlatego całkowite natężenie prądu ze źródła rośnie.",
            "Domy, w których mieszkamy, mają instalację połączoną równolegle."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "ligados em ramos separados, lado a lado (parallel, paralelo)",
            "um dos caminhos separados num circuito em paralelo (branch, ramo)",
            "um ponto onde os fios se separam ou se juntam (junction, junção)",
            "dividir em partes (split)"
          ],
          "passage": [
            "Um circuito em paralelo tem mais do que um caminho fechado.",
            "Cada caminho tem o nome de ramo (branch).",
            "Numa junção (junction), a corrente fica dividida entre os ramos.",
            "Mais adiante, os ramos voltam a unir-se, e a corrente volta a ser uma só.",
            "É como um rio que passa pelos dois lados de uma ilha.",
            "Cada ramo recebe a d.d.p. (p.d.) completa da fonte.",
            "Se uma lâmpada deixa de funcionar, os outros ramos ainda funcionam.",
            "Acrescentar outro ramo dá à corrente outro caminho.",
            "Por isso, a corrente total que sai da fonte aumenta.",
            "As casas onde vivemos têm a instalação elétrica em paralelo."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "isku xiran laamo kala gooni ah, dhinac dhinac (parallel)",
            "mid ka mid ah waddooyinka kala gooni ah ee wareegga parallel (branch)",
            "bar siligyadu kala baxaan ama isku yimaadaan (junction)",
            "u kala qaybin qaybo (split)"
          ],
          "passage": [
            "Wareegga parallel wuxuu leeyahay wax ka badan hal wareeg.",
            "Wareeg kasta waxaa la yiraahdaa branch (laan).",
            "Junction, current wuxuu u kala qaybsamaa laamaha.",
            "Kadib, laamuhu isku yimaadaan, current-kuna mar kale isku daraa.",
            "Waxay la mid tahay webi ku socda labada dhinac ee jasiirad.",
            "Laan kasta waxay hesho p.d. buuxda ee supply-ga.",
            "Haddii hal laambad jabto, laamaha kale weli way shaqeeyaan.",
            "Ku darista laan kale waxay current siinaysaa waddo kale.",
            "Sidaas darteed wadarta current ee supply-ga ka imaanaya kor ayay u kacdaa.",
            "Guryaha aan ku noolnahay waxaa loo xiray hab parallel."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "з’єднані на окремих гілках, поруч одна з одною",
            "один з окремих шляхів у паралельному колі",
            "точка, де проводи розходяться або з’єднуються",
            "розділити на частини"
          ],
          "passage": [
            "Паралельне коло (parallel circuit) має більше ніж одну петлю.",
            "Кожна петля називається гілкою (branch).",
            "У вузлі (junction) струм розділяється між гілками.",
            "Далі гілки з’єднуються, і струм знову складається.",
            "Це як річка, що обтікає острів з обох боків.",
            "Кожна гілка отримує повну p.d. джерела живлення.",
            "Якщо одна лампа перегорить, інші гілки працюють далі.",
            "Додавання ще однієї гілки дає струму ще один шлях.",
            "Тому загальний струм від джерела живлення зростає.",
            "Будинки, в яких ми живемо, мають паралельну проводку."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "الگ الگ شاخوں پر، ساتھ ساتھ جڑے ہوئے (parallel)",
            "parallel سرکٹ کے الگ راستوں میں سے ایک (branch)",
            "وہ نقطہ جہاں تاریں الگ ہوتی ہیں یا آپس میں ملتی ہیں (junction)",
            "حصوں میں بٹ جانا (split)"
          ],
          "passage": [
            "parallel سرکٹ میں ایک سے زیادہ چکر ہوتے ہیں۔",
            "ہر چکر کو شاخ (branch) کہتے ہیں۔",
            "junction پر کرنٹ شاخوں میں بٹ جاتا ہے۔",
            "بعد میں شاخیں مل جاتی ہیں اور کرنٹ دوبارہ جمع ہو جاتا ہے۔",
            "یہ ایسا ہے جیسے دریا کسی جزیرے کے دونوں طرف سے بہتا ہو۔",
            "ہر شاخ کو سپلائی کی پوری p.d. ملتی ہے۔",
            "اگر ایک لیمپ خراب ہو جائے تو باقی شاخیں پھر بھی کام کرتی ہیں۔",
            "ایک اور شاخ شامل کرنے سے کرنٹ کو ایک اور راستہ مل جاتا ہے۔",
            "اس لیے سپلائی سے آنے والا کل کرنٹ بڑھ جاتا ہے۔",
            "جن گھروں میں ہم رہتے ہیں ان کی وائرنگ parallel میں ہوتی ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Branches and potential difference",
          paragraphs: [
            "A parallel circuit has more than one loop, or branch. Each branch is connected straight across the supply, so the p.d. across each branch is the same as the supply p.d.: V(supply) = V₁ = V₂.",
            "This means each branch works on its own. You can find the current in any branch with I = V ÷ R, using the supply p.d. and the resistance of that branch."
          ],
          worked: {
            q: "A 6.0 V battery is connected to a 12 Ω lamp on its own branch. Calculate the current in that branch.",
            steps: [
              "The branch has the full supply p.d. across it: V = 6.0 V.",
              "Use I = V ÷ R.",
              "I = 6.0 ÷ 12 = 0.50 A."
            ],
            answer: "0.50 A",
            check: "6.0 / 12"
          },
          tip: "Parallel: every branch gets the full supply p.d.",
          // two of the lamps from the worked example: each 12 Ω branch on 6.0 V carries 0.50 A, whatever the other branch does
          widget: { type: "circuit", preset: "parallel-2-lamps",
            prompt: "Read the ammeter in one branch. Now remove the other lamp. Does the reading change? What happens to the current from the battery?",
            supply: 6.0, components: [{ kind: "lamp", r: 12 }, { kind: "lamp", r: 12 }] }
        },
        {
          heading: "Current splits and rejoins",
          paragraphs: [
            "Think of a river flowing round an island. The water splits between the two channels and joins up again downstream: the water in the two channels adds up to the water in the river. Current behaves the same way at a junction.",
            "The total current from the supply is the sum of the currents in the separate branches: I(total) = I₁ + I₂ + …. A branch with a lower resistance takes a bigger share of the current."
          ],
          worked: {
            q: "A 12 V supply is connected to a 6.0 Ω resistor and a 4.0 Ω resistor in parallel. Calculate the current in each branch and the total current from the supply.",
            steps: [
              "Each branch has the full 12 V across it.",
              "6.0 Ω branch: I = V ÷ R = 12 ÷ 6.0 = 2.0 A.",
              "4.0 Ω branch: I = V ÷ R = 12 ÷ 4.0 = 3.0 A.",
              "Total current: 2.0 + 3.0 = 5.0 A."
            ],
            answer: "5.0 A in total (2.0 A and 3.0 A in the branches)",
            check: "12 / 6.0 + 12 / 4.0",
            circuit: { type: "parallel", supply: 12, R: [6.0, 4.0], branchI: [2.0, 3.0], I: 5.0 }
          },
          tip: "The branch currents add up to the current from the supply."
        },
        {
          heading: "Resistance in parallel, and why homes use it",
          paragraphs: [
            "Adding a resistor in parallel gives the charge another path, so the total current from the supply increases. More current for the same p.d. means the total resistance of the circuit has gone down. The total resistance of resistors in parallel is always less than the smallest single resistance. You can find it from the supply: R(total) = V ÷ I(total).",
            "Adding another lamp in parallel does not make the other lamps dimmer or brighter: each still has the full supply p.d. across it, so each keeps the same current. What does change is the total current drawn from the supply, which goes up.",
            "Homes are wired in parallel for these reasons. Every appliance gets the full mains p.d., each one can be switched on and off on its own, and if one breaks the others keep working."
          ],
          worked: {
            q: "In the 12 V circuit above, the total current is 5.0 A. Calculate the total resistance of the two resistors, and compare it with 4.0 Ω.",
            steps: [
              "Use R = V ÷ I with the supply p.d. and the total current.",
              "R(total) = 12 ÷ 5.0 = 2.4 Ω.",
              "2.4 Ω is less than 4.0 Ω, the smallest resistor, as expected for parallel."
            ],
            answer: "2.4 Ω, which is less than the smallest resistor (4.0 Ω)",
            check: "12 / 5.0",
            circuit: { type: "parallel", supply: 12, R: [6.0, 4.0], branchI: [2.0, 3.0], I: 5.0, Rtotal: 2.4 }
          },
          tip: "Parallel total resistance is always less than the smallest branch resistance."
        }
      ],
      gate: [
        { kind: "gap", q: "In a parallel circuit, the p.d. across each branch is ___ the supply p.d.", answer: "the same as", options: ["the same as", "less than", "more than"], why: "Each branch is connected straight across the supply, so it has the full supply p.d.",
          feedback: {
            "less than": "That is the series rule, where the components share the supply p.d. In parallel each branch is connected straight across the supply, so it gets the full supply p.d.",
            "more than": "A branch cannot have more p.d. across it than the supply that drives it. Each branch gets the same p.d. as the supply."
          } },
        { kind: "mcq", q: "Two branches of a parallel circuit carry 0.40 A and 0.60 A. What is the current from the supply?", options: ["0.20 A", "0.24 A", "1.0 A", "0.50 A"], answer: 2, check: "0.40 + 0.60", why: "The branch currents add up: 0.40 + 0.60 = 1.0 A.",
          feedback: [
            "You subtracted the branch currents. At a junction the currents add up: 0.40 + 0.60 = 1.0 A.",
            "You multiplied the branch currents. The current from the supply is the sum of the branch currents: 0.40 + 0.60 = 1.0 A.",
            "",
            "You took the average of the two branches. The supply current is their total: 0.40 + 0.60 = 1.0 A."
          ] },
        { kind: "numeric", q: "The supply current in a parallel circuit is 2.5 A. One branch carries 1.5 A. Calculate the current in the other branch, in amps.", answer: 1, tolerance: 0.05, units: "A", check: "2.5 - 1.5", why: "The branch currents add up to the supply current: 2.5 − 1.5 = 1.0 A (2 s.f.).",
          misconceptions: [
            { answer: 4, check: "2.5 + 1.5", says: "You added. The branch currents add up to the supply current, so the other branch carries 2.5 − 1.5 = 1.0 A." },
            { answer: 3.75, check: "2.5 * 1.5", says: "You multiplied. The branch currents add up to the supply current: 2.5 − 1.5 = 1.0 A." },
            { answer: 1.25, check: "2.5 / 2", says: "You shared the supply current equally. Branches only share equally if they have the same resistance; here one carries 1.5 A, so the other carries 2.5 − 1.5 = 1.0 A." }
          ] }
      ],
      modules: [
        {
          title: "Branch currents and total current",
          task: { kind: "numeric", q: "A 9.0 V battery is connected to a 3.0 Ω resistor and a 9.0 Ω resistor in parallel. Calculate the total current from the battery, in amps.", answer: 4, tolerance: 0.05, units: "A",
            check: "9.0 / 3.0 + 9.0 / 9.0",
            circuit: { type: "parallel", supply: 9.0, R: [3.0, 9.0], branchI: [3.0, 1.0], I: 4.0 },
            why: "Each branch has 9.0 V. I₁ = 9.0 ÷ 3.0 = 3.0 A; I₂ = 9.0 ÷ 9.0 = 1.0 A. Total = 4.0 A (2 s.f.).",
            misconceptions: [
              { answer: 0.75, check: "9.0 / (3.0 + 9.0)", says: "You added the resistances as if they were in series. In parallel, find each branch current on its own: 9.0 ÷ 3.0 = 3.0 A and 9.0 ÷ 9.0 = 1.0 A, so the total is 4.0 A." },
              { answer: 3, check: "9.0 / 3.0", says: "That is the current in the 3.0 Ω branch only. Add the 9.0 Ω branch too: 3.0 + 1.0 = 4.0 A." },
              { answer: 1, check: "9.0 / 9.0", says: "That is the current in the 9.0 Ω branch only. Add the 3.0 Ω branch too: 3.0 + 1.0 = 4.0 A." }
            ] },
          contexts: [
            { label: "Classroom bench", q: "On a bench circuit, a 9.0 V power pack is connected to a 3.0 Ω resistor and a 9.0 Ω resistor in parallel. Calculate the total current from the power pack, in amps." },
            { label: "Camping lantern", q: "A camping lantern has a 9.0 V battery with a 3.0 Ω lamp and a 9.0 Ω lamp on separate branches. Calculate the total current from the battery, in amps." }
          ],
          levels: {
            support: {
              steps: ["Each branch has the full battery p.d.", "Find each branch current with I = V ÷ R.", "Add the branch currents to get the total."],
              example: { q: "A 6.0 V battery is connected to a 2.0 Ω and a 3.0 Ω resistor in parallel. Calculate the total current.", steps: ["2.0 Ω branch: I = 6.0 ÷ 2.0 = 3.0 A.", "3.0 Ω branch: I = 6.0 ÷ 3.0 = 2.0 A.", "Total = 3.0 + 2.0 = 5.0 A."], answer: "5.0 A", check: "6.0 / 2.0 + 6.0 / 3.0",
                circuit: { type: "parallel", supply: 6.0, R: [2.0, 3.0], branchI: [3.0, 2.0], I: 5.0 } }
            },
            core: { hint: "Work out each branch on its own first, then add." },
            stretch: { extend: "Explain why the 3.0 Ω branch takes three times the current of the 9.0 Ω branch." }
          },
          why: "Branch currents 3.0 A and 1.0 A add up to 4.0 A from the battery.",
          explain: "Say why the 3.0 Ω branch takes more current than the 9.0 Ω branch."
        },
        {
          title: "Adding a lamp in parallel",
          task: { kind: "mcq", q: "Two identical lamps are in parallel with a battery. A third identical lamp is added on a new branch. What happens?", options: [
            "The current from the battery increases, and the first two lamps stay the same brightness.",
            "The current from the battery decreases, and all the lamps get dimmer.",
            "The current from the battery stays the same, and it is shared between three lamps.",
            "The current from the battery increases, and the first two lamps get brighter."
          ], answer: 0, why: "Each lamp still has the full battery p.d., so each takes the same current and keeps the same brightness. The new branch adds its own current, so the total from the battery increases.",
            feedback: [
              "",
              "The battery current does not fall. Each lamp still has the full battery p.d., so the first two lamps are unchanged and the new branch adds its own current to the total.",
              "Sharing the current is the series rule. In parallel each branch gets the full supply p.d., so the new lamp takes its own current and the total from the battery goes up.",
              "The first two lamps do not get brighter. The p.d. across them has not changed, so their current and brightness stay the same; only the total current from the battery increases."
            ] },
          levels: {
            support: {
              steps: ["What p.d. does each branch get? (The full supply.)", "If a lamp's p.d. does not change, its current and brightness do not change.", "The new branch adds its own current to the total."],
              example: { q: "Two lamps are in series with a battery. A third identical lamp is added in series. What happens?", steps: ["The total resistance increases.", "So the current in the loop decreases.", "The p.d. is shared three ways, so every lamp gets dimmer."], answer: "The current decreases and all the lamps get dimmer." }
            },
            core: { hint: "In parallel, each branch gets the full supply p.d., whatever the other branches do." },
            stretch: { extend: "Explain why the total resistance of the circuit falls when the third lamp is added, even though you have added another component." }
          },
          why: "Parallel branches are independent: the old lamps keep their p.d., current and brightness; the battery supplies more current in total.",
          explain: "Say why the first two lamps keep the same brightness when the third lamp is added."
        },
        {
          title: "Total resistance in parallel",
          task: { kind: "numeric", q: "A 12 V supply is connected to a 4.0 Ω resistor and a 12 Ω resistor in parallel. Calculate the total resistance of the circuit, in ohms.", answer: 3, tolerance: 0.05, units: "Ω",
            check: "12 / (12 / 4.0 + 12 / 12)",
            circuit: { type: "parallel", supply: 12, R: [4.0, 12], branchI: [3.0, 1.0], I: 4.0, Rtotal: 3.0 },
            why: "Branch currents: 12 ÷ 4.0 = 3.0 A and 12 ÷ 12 = 1.0 A, total 4.0 A. R(total) = 12 ÷ 4.0 = 3.0 Ω (2 s.f.), less than 4.0 Ω.",
            misconceptions: [
              { answer: 16, check: "4.0 + 12", says: "You added the resistances, which is the series rule. In parallel the total is less than the smallest resistor: find the total current (4.0 A) and use R = V ÷ I = 12 ÷ 4.0 = 3.0 Ω." },
              { answer: 4, check: "12 / 4.0 + 12 / 12", says: "That is the total current, 4.0 A, not the resistance. Go one step further: R(total) = V ÷ I = 12 ÷ 4.0 = 3.0 Ω." },
              { answer: 0.33, check: "(12 / 4.0 + 12 / 12) / 12", says: "You divided the total current by the supply p.d., the wrong way up. R = V ÷ I = 12 ÷ 4.0 = 3.0 Ω." }
            ] },
          contexts: [
            { label: "Car headlamp circuit", q: "A car's 12 V battery is connected to a 4.0 Ω headlamp and a 12 Ω side lamp in parallel. Calculate the total resistance of the circuit, in ohms." },
            { label: "Classroom bench", q: "A 12 V power pack is connected to a 4.0 Ω resistor and a 12 Ω resistor in parallel. Calculate the total resistance of the circuit, in ohms." }
          ],
          levels: {
            support: {
              steps: ["Find each branch current with I = V ÷ R.", "Add them to get the total current.", "Use R(total) = V(supply) ÷ I(total)."],
              example: { q: "A 6.0 V supply is connected to a 3.0 Ω and a 6.0 Ω resistor in parallel. Calculate the total resistance.", steps: ["Branch currents: 6.0 ÷ 3.0 = 2.0 A and 6.0 ÷ 6.0 = 1.0 A.", "Total current = 3.0 A.", "R(total) = 6.0 ÷ 3.0 = 2.0 Ω."], answer: "2.0 Ω", check: "6.0 / (6.0 / 3.0 + 6.0 / 6.0)",
                circuit: { type: "parallel", supply: 6.0, R: [3.0, 6.0], branchI: [2.0, 1.0], I: 3.0, Rtotal: 2.0 } }
            },
            core: { hint: "Total resistance = supply p.d. ÷ total current." },
            stretch: { extend: "Without calculating, explain why your answer had to be less than 4.0 Ω. Then say what would happen to it if a third resistor were added in parallel." }
          },
          why: "Total current 4.0 A from 12 V gives R(total) = 3.0 Ω, which is less than the smallest resistor, as it must be in parallel.",
          explain: "Say why the total resistance had to come out less than 4.0 Ω."
        }
      ]
    }
  ],

  sources: {
    deckDump: "sc_ks4_phys_p4_electric_circuits.txt",
    decksUsed: [
      "P4.1 Electrical Charges and Fields.pptx",
      "P4.2 Current and charge.pptx",
      "P4.3 Potential Difference and Resistance.pptx",
      "P4.4 Component characteristics.pptx",
      "P4.5 Series circuits.pptx",
      "P4.6 Parallel circuits.pptx"
    ],
    notes: "Sequence, lesson titles, key words, models (marbles in a tube, pumped water, river round an island) and the skills taught are from the six P4 decks. All questions and numbers are original; no answer slide was copied. From P4.1 only the idea that electrons carry negative charge is used; static electricity and electric fields are Physics-only (8463) and are left out. The 1/R parallel-resistance formula shown in P4.6 is not required for 8464 and is left out; total resistance in parallel is found from V ÷ I(total) instead. The energy-resources recall slides belong to an earlier unit and are left out. See NOTES.md for deck errors corrected."
  }
};
