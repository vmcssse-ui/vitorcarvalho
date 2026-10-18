// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE Combined Science: Trilogy 8464 · Chemistry C3 Structure and Bonding · schema astra/2
//
// MACHINE CHECKS (recomputed by verify.py in this folder):
//   check:"<python expression>"  on every numeric item (gate or task): plain arithmetic that verify.py evaluates and
//                                compares with `answer` (within `tolerance`; whole-number counts are exact).
//   checks:[{expr, value, tol}]  on every worked example / support example that contains a calculation (electron
//                                counts, charge balances, temperature differences, surface area ÷ volume).
//   misconceptions[].check       (astra/2) every wrong answer offered as a misconception carries the arithmetic that
//                                produces it, so the "says" text names a real slip, not an invented one.
//   contexts[].q                 (astra/2) carry exactly the same numbers as the task q (checked as a multiset), so the
//                                shared answer is right by construction.
//   independent answer key       every mcq / gap answer and every "order" sequence is compared with a key held in
//                                verify.py, written from the deck, not copied from this file.
//   chemistry facts              electron counts of atoms, group numbers, melting and boiling points quoted in the text
//                                are checked against tables in verify.py; formulae use Unicode subscripts (H₂O, MgCl₂).
//   Content is Combined Science (8464) unless marked. The nanoparticles lesson (3.11) is Chemistry-only (8462 4.2.4):
//   every heading, module and lesson that uses it is marked "(Chemistry only)" and verify.py enforces the mark.
//   No pretext.l1: home-language lines are added later by a separate translation pass.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["combined-bonding"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "combined-bonding",
    subjectKey: "combined",
    subject: "Chemistry (Combined Science)",
    board: "AQA",
    spec: "8464",
    specRef: "Chemistry 5.2 Bonding, structure, and the properties of matter (ionic, covalent and metallic bonding; states of matter; giant structures; polymers)",
    year: 10,
    tier: "GCSE Higher and Foundation",
    title: "Structure and Bonding",
    sub: "From the particles in ice, water and steam to the bonds that hold salt, diamond and copper together: why each substance behaves the way it does.",
    bigQuestion: "Why does table salt melt at 801 °C while the water you dissolve it in boils at 100 °C?",
    lessonCount: 9,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "3.1 States of matter", question: "How does the particle model explain solids, liquids and gases, and what happens when a substance melts or boils?", keywords: ["particle model", "solid", "liquid", "gas", "melting point", "boiling point"] },
    { n: 2, title: "3.2 Atoms into ions", question: "How does an atom become a positive or a negative ion, and how does the periodic table tell you the charge?", keywords: ["ion", "electron", "outer shell", "positive ion", "negative ion", "dot and cross diagram"] },
    { n: 3, title: "3.3 Ionic bonding", question: "What happens to the electrons when a metal reacts with a non-metal, and how do you work out the formula of the compound?", keywords: ["electron transfer", "ionic bond", "charge", "formula", "electrostatic attraction"] },
    { n: 4, title: "3.4 Giant ionic structures", question: "Why do ionic compounds have high melting points, and when can they conduct electricity?", keywords: ["giant lattice", "melting point", "conduct", "molten", "dissolved", "dissociate"] },
    { n: 5, title: "3.5 Covalent bonding", question: "How do non-metal atoms bond by sharing electrons, and how do you draw the bonds in a molecule?", keywords: ["covalent bond", "shared pair", "molecule", "single bond", "double bond", "triple bond"] },
    { n: 6, title: "3.6 Simple covalent structures and polymers", question: "Why do small molecules have low melting and boiling points, and why are polymers different?", keywords: ["simple molecule", "intermolecular forces", "neutral", "polymer", "monomer"] },
    { n: 7, title: "3.7 Giant covalent structures", question: "Why is diamond hard while graphite is soft and conducts electricity?", keywords: ["giant covalent structure", "diamond", "graphite", "silicon dioxide", "layers", "delocalised electron"] },
    { n: 8, title: "3.9 Metallic bonding and structures", question: "How are the atoms in a metal held together, and why are alloys harder than pure metals?", keywords: ["metallic bonding", "sea of delocalised electrons", "layers", "malleable", "conductor", "alloy"] },
    { n: 9, title: "3.11 Nanoparticles and their applications (Chemistry only)", question: "How small is a nanoparticle, and why does its size change what it can do?", keywords: ["nanoparticle", "nanometre", "surface area to volume ratio", "sunscreen", "risk"] }
  ],

  glossary: [
    { term: "particle model", means: "A picture of matter as tiny particles whose arrangement and movement explain solids, liquids and gases.", chapter: "states-of-matter" },
    { term: "melting point", means: "The temperature at which a solid turns into a liquid (and a liquid freezes back into a solid).", chapter: "states-of-matter" },
    { term: "boiling point", means: "The temperature at which a liquid turns into a gas (and a gas condenses back into a liquid).", chapter: "states-of-matter" },
    { term: "state symbol", means: "A letter in brackets after a formula that shows the state: (s) solid, (l) liquid, (g) gas, (aq) dissolved in water.", chapter: "states-of-matter" },
    { term: "ion", means: "An atom that has lost or gained electrons, so it has a positive or a negative charge.", chapter: "atoms-into-ions" },
    { term: "ionic bond", means: "The strong electrostatic attraction between oppositely charged ions, formed when a metal transfers electrons to a non-metal.", chapter: "ionic-bonding" },
    { term: "giant ionic lattice", means: "A regular structure of millions of positive and negative ions, each attracted to the oppositely charged ions around it.", chapter: "ionic-bonding" },
    { term: "electrostatic attraction", means: "The pull between a positive charge and a negative charge.", chapter: "ionic-bonding" },
    { term: "covalent bond", means: "A shared pair of electrons between two non-metal atoms.", chapter: "covalent-bonding" },
    { term: "molecule", means: "A small group of atoms joined together by covalent bonds, such as H₂O or CH₄.", chapter: "covalent-bonding" },
    { term: "intermolecular forces", means: "The weak forces between one molecule and the next; these, not the covalent bonds, are overcome when a molecular substance melts or boils.", chapter: "covalent-bonding" },
    { term: "polymer", means: "A very long molecule made from thousands of small molecules (monomers) joined by covalent bonds.", chapter: "covalent-bonding" },
    { term: "giant covalent structure", means: "A structure in which millions of atoms are all joined to each other by covalent bonds, such as diamond, graphite or silicon dioxide.", chapter: "giant-covalent" },
    { term: "delocalised electron", means: "An electron that is not fixed to one atom but is free to move through the whole structure, as in graphite or a metal.", chapter: "giant-covalent" },
    { term: "metallic bonding", means: "The attraction between positive metal ions arranged in layers and the sea of delocalised electrons around them.", chapter: "metals-and-alloys" },
    { term: "alloy", means: "A mixture of a metal with one or more other elements, usually harder than the pure metal.", chapter: "metals-and-alloys" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 drawn from the glossary above.
  connections: [
    { group: "Changing state", terms: ["particle model", "melting point", "boiling point", "state symbol"] },
    { group: "Ionic bonding", terms: ["ion", "ionic bond", "giant ionic lattice", "electrostatic attraction"] },
    { group: "Covalent bonding", terms: ["covalent bond", "molecule", "intermolecular forces", "polymer"] },
    { group: "Giant structures", terms: ["giant covalent structure", "delocalised electron", "metallic bonding", "alloy"] }
  ],

  chapters: [
    /* ───────────── 1 · states of matter ───────────── */
    {
      key: "states-of-matter", n: 1, title: "States of matter",
      lead: "This chapter gives you the particle model: how particles are arranged and move in solids, liquids and gases, and what changes when a substance melts or boils.",
      covers: [1],
      pretext: {
        words: [
          { word: "particle", means: "a tiny piece of a substance, far too small to see", sentence: "Every drop of water is made of millions of water particles." },
          { word: "arrangement", means: "the pattern the particles are in", sentence: "In a solid the arrangement is regular, like bricks in a wall." },
          { word: "vibrate", means: "to shake quickly on the spot without moving away", sentence: "The particles in ice vibrate but stay in their places." },
          { word: "melting point", means: "the temperature at which a solid turns into a liquid", sentence: "The melting point of ice is zero degrees Celsius." },
          { word: "boiling point", means: "the temperature at which a liquid turns into a gas", sentence: "Water reaches its boiling point at one hundred degrees Celsius." }
        ],
        passage: [
          "Everything around you is made of tiny particles.",
          "In a solid, the particles are packed tightly in a regular pattern.",
          "They cannot move about, but they vibrate on the spot.",
          "In a liquid, the particles are still close together.",
          "But they are in a random arrangement and can move around one another.",
          "In a gas, the particles are very far apart.",
          "They move quickly in all directions.",
          "When a solid is heated, its particles vibrate faster.",
          "At the melting point, the particles break free and the solid becomes a liquid.",
          "At the boiling point, particles escape from the liquid and it becomes a gas.",
          "The melting point of ice is 0 °C.",
          "The boiling point of water is 100 °C."
        ]
      },
      sections: [
        {
          heading: "Solids, liquids and gases",
          paragraphs: [
            "The particle model says that every substance is made of tiny particles, and that the way those particles are arranged and move decides whether the substance is a solid, a liquid or a gas. The particles themselves do not change when ice melts; only their arrangement and movement change.",
            "In a solid the particles are tightly packed in a regular arrangement. They vibrate on the spot but cannot change places, so a solid keeps its shape and cannot be squashed. In a liquid the particles are still close together but in a random arrangement; they can move around one another, so a liquid flows and takes the shape of its container.",
            "In a gas the particles are very far apart, in a random arrangement, and move quickly in all directions. Because there is so much empty space between them, a gas can be squashed (compressed) and it spreads out to fill any container."
          ],
          tip: "Three words for each state: distance, arrangement, movement. Solid: tight, regular, vibrate. Liquid: close, random, move around one another. Gas: far apart, random, fast in all directions."
        },
        {
          heading: "Melting and boiling",
          paragraphs: [
            "When you heat a solid, you give its particles energy and they vibrate faster. At the melting point they have enough energy to overcome the forces holding them in place: the particles separate from their fixed positions and start to move around one another. The solid has become a liquid.",
            "Keep heating the liquid and the particles move faster still. At the boiling point, particles gain enough energy to escape from the surface of the liquid and move far apart: the liquid has become a gas. Freezing and condensing are the same changes in reverse, as the particles lose energy and slow down.",
            "Here is the surprising part. While a substance is actually melting or boiling, its temperature stays the same even though you keep heating it. All the energy you supply is being used to separate the particles from their neighbours, not to make them move faster. On a graph of temperature against time, the melting point and boiling point appear as flat steps."
          ],
          worked: {
            q: "Describe what happens to the particles when a block of ice is heated until it has all melted.",
            steps: [
              "Start with the solid: the particles in ice are close together in a regular arrangement and vibrate on the spot.",
              "Heating gives the particles energy, so they vibrate faster.",
              "At 0 °C, the melting point, the particles have enough energy to overcome the forces holding them in position.",
              "They separate from their fixed positions and move around one another: the ice has become liquid water."
            ],
            answer: "The particles vibrate faster, then at 0 °C they overcome the forces holding them in place and move around one another as a liquid.",
            checks: [{ expr: "0", value: 0, tol: 0 }]
          },
          tip: "Melting and boiling do not change the particles. The same water particles are in ice, water and steam."
        },
        {
          heading: "Predicting the state from data",
          paragraphs: [
            "If you know a substance's melting point and boiling point, you can say what state it is in at any temperature. Below the melting point it is a solid. Between the melting point and the boiling point it is a liquid. Above the boiling point it is a gas.",
            "Room temperature is about 25 °C. Water melts at 0 °C and boils at 100 °C, so at 25 °C it is between the two: a liquid. Iron melts at 1535 °C, far above room temperature, so iron is a solid. Hydrogen boils at −252 °C, far below room temperature, so hydrogen is a gas.",
            "Watch the negative numbers. A melting point of −39 °C is below 25 °C, so at room temperature that substance has already melted. Draw a quick thermometer, mark the melting point and the boiling point, then mark the temperature you are asked about and read off the state."
          ],
          worked: {
            q: "Mercury melts at −39 °C and boils at 357 °C. What state is mercury in at room temperature, 25 °C?",
            steps: [
              "Mark the melting point (−39 °C) and the boiling point (357 °C) on a thermometer sketch.",
              "Mark 25 °C. It is above −39 °C, so the mercury has melted.",
              "It is below 357 °C, so the mercury has not boiled.",
              "Between the melting point and the boiling point the substance is a liquid. Mercury is a liquid over a range of 357 − (−39) = 396 degrees, and 25 °C sits inside it."
            ],
            answer: "Liquid: 25 °C is above the melting point and below the boiling point.",
            checks: [{ expr: "357 - (-39)", value: 396, tol: 0 }]
          },
          tip: "Below the melting point: solid. Between the two: liquid. Above the boiling point: gas."
        },
        {
          heading: "Why melting points differ, and the limits of the model",
          paragraphs: [
            "Different substances melt and boil at very different temperatures. Ethanol boils at 78 °C while iron does not even melt until 1535 °C. The difference comes from the forces between the particles. The stronger those forces, the more energy is needed to separate the particles, so the higher the melting and boiling points. The rest of this unit is about what those forces are: ionic bonds, covalent bonds, intermolecular forces and metallic bonding.",
            "(Higher) The particle model is useful but it has limits. It draws particles as small, solid spheres, when real atoms and molecules are not solid and have different shapes and sizes. It shows no forces between the particles, so it cannot show why some substances melt at higher temperatures than others. And it leaves out the empty space inside atoms.",
            "Chemists show the state of a substance with a state symbol after its formula: (s) for solid, (l) for liquid, (g) for gas and (aq) for aqueous, which means dissolved in water. So H₂O(s) is ice, H₂O(l) is water and H₂O(g) is steam."
          ],
          tip: "State symbols: s, l, g, aq. 'Aqueous' means dissolved in water, not the same as liquid."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which description fits the particles in a solid?", options: ["Tightly packed in a regular pattern, vibrating on the spot", "Close together, in a random arrangement, moving around one another", "Far apart, in a random arrangement, moving quickly in all directions", "Far apart, in a regular pattern, vibrating on the spot"], answer: 0, why: "In a solid the particles are tightly packed in a regular arrangement and can only vibrate on the spot.",
          feedback: [
            "",
            "You described a liquid. In a liquid the particles are close but random and can move around one another; in a solid they are in a regular pattern and only vibrate.",
            "You described a gas. Gas particles are far apart and move quickly in all directions; solid particles are tightly packed and only vibrate.",
            "You mixed two states. Solid particles do vibrate on the spot and are in a regular pattern, but they are tightly packed, not far apart. Only gas particles are far apart."
          ] },
        { kind: "numeric", q: "Ethanol (ethyl alcohol) melts at −114 °C and boils at 78 °C. Over how many degrees is ethanol a liquid?", answer: 192, tolerance: 0, units: "°C", check: "78 - (-114)", why: "From −114 °C up to 78 °C is 78 − (−114) = 192 degrees. Whole-number data, so a whole-number answer.",
          misconceptions: [
            { answer: -36, check: "78 - 114", says: "You treated −114 as if it were +114 and subtracted it. The melting point is below zero, so the range is 78 − (−114) = 78 + 114 = 192 degrees." },
            { answer: 36, check: "114 - 78", says: "You found the gap between 114 and 78, ignoring the minus sign. The melting point is −114 °C, so from −114 up to 78 is 192 degrees." },
            { answer: 78, check: "78", says: "You gave the boiling point itself. The question asks for the size of the liquid range, from the melting point to the boiling point: 78 − (−114) = 192 degrees." }
          ] },
        { kind: "gap", q: "At the ___ point, a liquid turns into a gas.", answer: "boiling", options: ["boiling", "melting", "freezing"], why: "Liquid to gas is boiling; solid to liquid is melting; liquid to solid is freezing.",
          feedback: {
            "melting": "Melting is the change from a solid to a liquid. The change from a liquid to a gas happens at the boiling point.",
            "freezing": "Freezing is the change from a liquid to a solid, as the particles lose energy. A liquid turning into a gas is boiling."
          } }
      ],
      modules: [
        {
          title: "Solid, liquid or gas?",
          task: { kind: "mcq", q: "A substance melts at −39 °C and boils at 357 °C. What state is it in at room temperature, 25 °C?", options: ["liquid", "solid", "gas", "a mixture of liquid and gas"], answer: 0, why: "25 °C is above the melting point (−39 °C), so it has melted, and below the boiling point (357 °C), so it has not boiled. Between the two it is a liquid.",
            feedback: [
              "",
              "You may have read −39 °C as warmer than 25 °C. Negative temperatures are colder than positive ones, so 25 °C is above the melting point and the solid has already melted. It is a liquid.",
              "A substance is only a gas above its boiling point. 357 °C is far hotter than 25 °C, so it has not boiled. Between its melting point and its boiling point it is a liquid.",
              "Liquid and gas exist together only at the boiling point itself, 357 °C. At 25 °C the substance is well below that, and above its melting point, so it is simply a liquid."
            ] },
          contexts: [
            { label: "Old thermometer", q: "An old-style thermometer contains a silver metal that melts at −39 °C and boils at 357 °C. What state is the metal in at room temperature, 25 °C?" },
            { label: "Store cupboard", q: "A bottle in the store cupboard is labelled 'melting point −39 °C, boiling point 357 °C'. The cupboard is at 25 °C. What state is the substance inside the bottle?" }
          ],
          levels: {
            support: {
              steps: ["Sketch a thermometer and mark the melting point (−39 °C) and the boiling point (357 °C).", "Mark the temperature you are asked about, 25 °C. Remember that −39 is colder than 25.", "Below the melting point: solid. Between: liquid. Above the boiling point: gas."],
              example: { q: "Bromine melts at −7 °C and boils at 59 °C. What state is it in at 25 °C?", steps: ["25 °C is above −7 °C, so bromine has melted.", "25 °C is below 59 °C, so it has not boiled.", "Between the two points it is a liquid."], answer: "Liquid" }
            },
            core: { hint: "Is 25 °C above or below −39 °C? Then is it above or below 357 °C?" },
            stretch: { extend: "The same substance is taken to −50 °C and then to 400 °C. Give its state at each temperature and describe how the arrangement and movement of its particles change along the way." }
          },
          why: "At 25 °C the substance is above its melting point and below its boiling point, so it is a liquid.",
          explain: "Say how you decided that −39 °C counts as colder than room temperature."
        },
        {
          title: "From ice to steam",
          task: { kind: "order", q: "Put these stages in order, from a block of ice being heated to water boiling.", items: [
            "The particles in the solid vibrate faster and faster",
            "At the melting point the particles overcome the forces holding them in place and the solid melts",
            "The particles in the liquid move around one another, gaining more energy as the liquid is heated",
            "At the boiling point particles gain enough energy to escape from the surface and the liquid boils"
          ] },
          levels: {
            support: {
              steps: ["Start with what the particles do in a solid: they vibrate.", "Melting comes before boiling, so the melting stage comes next.", "In the liquid the particles move around one another.", "The last stage is particles escaping as a gas."],
              example: { q: "Put these in order for a gas being cooled until it freezes: particles lock into a regular pattern; particles slow down; particles come close together and move around one another.", steps: ["Cooling slows the gas particles first.", "At the boiling point they come close together as a liquid.", "At the melting point they lock into a regular pattern as a solid."], answer: "particles slow down; particles come close together and move around one another; particles lock into a regular pattern" }
            },
            core: { hint: "Solid, then liquid, then gas. Which two of the stages are the actual changes of state?" },
            stretch: { extend: "Explain why the temperature of the ice-and-water mixture stays at 0 °C while the ice is melting, even though the heater is still on." }
          },
          why: "Heating makes the solid's particles vibrate faster; at the melting point they break free and move around one another; heating the liquid speeds them up; at the boiling point they escape as a gas.",
          explain: "Say what the energy from the heater is doing while the ice is melting, if it is not raising the temperature."
        },
        {
          title: "Cooling hydrogen",
          task: { kind: "numeric", q: "Hydrogen melts at −259 °C and boils at −252 °C. A sample of hydrogen gas is at 25 °C. By how many degrees must it be cooled before it condenses into a liquid?", answer: 277, tolerance: 0, units: "°C", check: "25 - (-252)", why: "Condensing happens at the boiling point, −252 °C. From 25 °C down to −252 °C is 25 − (−252) = 277 degrees. Whole-number data, so a whole-number answer.",
            misconceptions: [
              { answer: 227, check: "252 - 25", says: "You subtracted 25 from 252, as if the boiling point were +252 °C. It is −252 °C, below zero, so the gap from 25 °C is 25 + 252 = 277 degrees." },
              { answer: 284, check: "25 - (-259)", says: "You cooled it all the way to the melting point, −259 °C. A gas condenses into a liquid at the boiling point, −252 °C, so the cooling needed is 25 − (−252) = 277 degrees." },
              { answer: 7, check: "-252 - (-259)", says: "That is the size of hydrogen's liquid range, from −259 °C to −252 °C. The question asks how far the gas at 25 °C must be cooled to reach the boiling point: 277 degrees." }
            ] },
          contexts: [
            { label: "Rocket fuel", q: "Some rockets burn liquid hydrogen. Hydrogen melts at −259 °C and boils at −252 °C. Hydrogen gas delivered to the launch site is at 25 °C. By how many degrees must it be cooled before it condenses into a liquid?" },
            { label: "Hydrogen bus", q: "A hydrogen bus stores its fuel as a gas at 25 °C. Hydrogen melts at −259 °C and boils at −252 °C. By how many degrees would the gas have to be cooled before it condensed into a liquid?" }
          ],
          levels: {
            support: {
              steps: ["A gas condenses into a liquid at its boiling point. Find that temperature in the question.", "The gap from a positive temperature down to a negative one is the two numbers added together.", "Write the answer as a number of degrees."],
              example: { q: "Oxygen boils at −183 °C. By how many degrees must oxygen gas at 20 °C be cooled to condense it?", steps: ["Condensing happens at the boiling point, −183 °C.", "From 20 °C down to −183 °C is 20 + 183.", "That is 203 degrees."], answer: "203 degrees", checks: [{ expr: "20 - (-183)", value: 203, tol: 0 }] }
            },
            core: { hint: "Which temperature is the one where gas becomes liquid: the melting point or the boiling point?" },
            stretch: { extend: "Hydrogen is a liquid over only 7 degrees, while water is a liquid over 100 degrees. Suggest what this tells you about the forces between hydrogen molecules compared with water molecules." }
          },
          why: "The gas condenses at its boiling point, −252 °C. Cooling from 25 °C to −252 °C is 277 degrees.",
          explain: "Say why you used the boiling point and not the melting point in this calculation."
        }
      ]
    },

    /* ───────────── 2 · atoms into ions ───────────── */
    {
      key: "atoms-into-ions", n: 2, title: "Atoms into ions",
      lead: "This chapter shows how an atom becomes an ion by losing or gaining electrons, and how the periodic table tells you the charge.",
      covers: [2],
      pretext: {
        words: [
          { word: "electron", means: "a tiny negative particle that moves around the nucleus of an atom", sentence: "A sodium atom has eleven electrons." },
          { word: "outer shell", means: "the shell of electrons furthest from the nucleus", sentence: "Sodium has just one electron in its outer shell." },
          { word: "ion", means: "an atom that has lost or gained electrons and so has a charge", sentence: "When sodium loses an electron it becomes a sodium ion." },
          { word: "charge", means: "being positive or negative", sentence: "A sodium ion has a positive charge." },
          { word: "group", means: "a column of the periodic table", sentence: "Sodium and lithium are both in Group 1." }
        ],
        passage: [
          "An atom has a nucleus in the middle and electrons in shells around it.",
          "Atoms have no overall charge.",
          "The number of protons equals the number of electrons.",
          "Atoms are more stable with a full outer shell of electrons.",
          "A metal atom can lose its outer electrons.",
          "Then it has more protons than electrons, so it is positive.",
          "A non-metal atom can gain electrons to fill its outer shell.",
          "Then it has more electrons than protons, so it is negative.",
          "An ion is an atom that has lost or gained electrons.",
          "Sodium loses one electron to form a sodium ion, Na⁺.",
          "Chlorine gains one electron to form a chloride ion, Cl⁻.",
          "The group number tells you what charge the ion will have."
        ]
      },
      sections: [
        {
          heading: "What is an ion?",
          paragraphs: [
            "An atom is neutral: it has the same number of positive protons in its nucleus as negative electrons in its shells, so the charges cancel. An ion is an atom that has lost or gained electrons. The number of protons does not change, so the charges no longer cancel and the ion is charged.",
            "A sodium atom has 11 protons and 11 electrons, arranged 2,8,1. If it loses the one electron in its outer shell it still has 11 protons but only 10 electrons: one more positive than negative. It is now a sodium ion with a charge of 1+, written Na⁺.",
            "A chlorine atom has 17 protons and 17 electrons, arranged 2,8,7. If it gains one electron it has 17 protons and 18 electrons: one more negative than positive. It is now a chloride ion with a charge of 1−, written Cl⁻. Notice the name changes: the ion of a non-metal ends in -ide."
          ],
          worked: {
            q: "A magnesium atom has 12 electrons, arranged 2,8,2. It loses its 2 outer-shell electrons to form a magnesium ion. How many electrons does the ion have, and what is its charge?",
            steps: [
              "Electrons in the atom: 12. Electrons lost: 2.",
              "Electrons in the ion: 12 − 2 = 10.",
              "Protons do not change: still 12.",
              "Charge = protons − electrons = 12 − 10 = 2+. The ion is Mg²⁺."
            ],
            answer: "10 electrons; the charge is 2+, so the ion is Mg²⁺.",
            checks: [{ expr: "12 - 2", value: 10, tol: 0 }, { expr: "12 - 10", value: 2, tol: 0 }]
          },
          tip: "Losing electrons makes an ion positive. The electrons are negative, so taking them away leaves extra positive charge behind."
        },
        {
          heading: "Why lose, why gain?",
          paragraphs: [
            "Atoms are more stable with a full outer shell of electrons, like the atoms of Group 0. There are two ways to get one: lose the electrons in a nearly empty outer shell, or gain electrons to fill a nearly full one. Atoms take whichever route involves fewer electrons.",
            "Sodium has one outer electron. It is far easier to lose that one than to gain seven, so sodium loses one electron. Chlorine has seven outer electrons, so it is far easier to gain one than to lose seven. In general, metals (on the left of the periodic table) lose electrons and form positive ions; non-metals (on the right) gain electrons and form negative ions.",
            "A dot and cross diagram shows this. Draw only the outer shell. Draw the atom's electrons as crosses, show the electron that moves with an arrow, and draw the ion in square brackets with its charge outside: [Na]⁺ with an empty outer shell, [Cl]⁻ with eight electrons, seven crosses and one dot for the electron that came from sodium."
          ],
          tip: "Metals lose, non-metals gain. The number of electrons that move equals the size of the charge."
        },
        {
          heading: "Group number and charge",
          paragraphs: [
            "The group number of an element is the number of electrons in its outer shell, so it tells you what ion it forms. Group 1 atoms (lithium, sodium, potassium) have one outer electron and lose it: 1+ ions. Group 2 atoms (magnesium, calcium) lose two: 2+ ions. Aluminium, in Group 3, loses three: Al³⁺.",
            "On the right of the table, Group 6 atoms (oxygen, sulfur) have six outer electrons and gain two: 2− ions, oxide O²⁻ and sulfide S²⁻. Group 7 atoms (fluorine, chlorine, bromine, iodine) have seven and gain one: 1− ions, fluoride, chloride, bromide, iodide. Group 0 atoms already have full outer shells, so they do not form ions.",
            "Count carefully. The electrons an ion has is the atom's electrons minus the number lost, or plus the number gained. Oxygen has 8 electrons (2,6); the oxide ion has 8 + 2 = 10, the same as a neon atom. Sodium's ion also has 10. Ions with the same electron arrangement as a Group 0 atom are stable."
          ],
          worked: {
            q: "Oxygen is in Group 6 and an oxygen atom has 8 electrons. What ion does it form, and how many electrons does the ion have?",
            steps: [
              "Group 6 means 6 outer electrons: it needs 2 more for a full shell of 8.",
              "A non-metal gains electrons, so oxygen gains 2 and the charge is 2−.",
              "Electrons in the ion: 8 + 2 = 10.",
              "The ion is called oxide and written O²⁻."
            ],
            answer: "O²⁻, the oxide ion, with 10 electrons.",
            checks: [{ expr: "8 - 6", value: 2, tol: 0 }, { expr: "8 + 2", value: 10, tol: 0 }]
          },
          tip: "Group 1: 1+. Group 2: 2+. Group 6: 2−. Group 7: 1−. Group 0: no ions."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is an ion?", options: ["An atom that has lost or gained electrons, so it has a charge", "An atom that has lost or gained protons", "A group of atoms with no charge", "An atom with a full outer shell and no charge"], answer: 0, why: "Ions form when atoms lose or gain electrons. The protons stay the same, so the charges no longer cancel.",
          feedback: [
            "",
            "Protons stay in the nucleus and never move in a chemical change. It is electrons that are lost or gained, and that is what gives an ion its charge.",
            "A group of atoms with no charge is a molecule. An ion is charged: it has lost or gained electrons.",
            "A full outer shell is what the ion ends up with, but an ion is never neutral. It has a charge because it has lost or gained electrons."
          ] },
        { kind: "numeric", q: "A lithium atom has 3 electrons. It loses 1 electron to form a lithium ion. How many electrons does the lithium ion have?", answer: 2, tolerance: 0, units: "electrons", check: "3 - 1", why: "Losing an electron takes the count down: 3 − 1 = 2 electrons. Whole-number counts, so the answer is exact.",
          misconceptions: [
            { answer: 4, check: "3 + 1", says: "You added an electron. Lithium is a metal, so it loses its outer electron: 3 − 1 = 2 electrons left." },
            { answer: 1, check: "3 - 2", says: "You took away two electrons. Lithium is in Group 1 and has one outer electron, so it loses just one: 3 − 1 = 2." }
          ] },
        { kind: "gap", q: "Fluorine is in Group 7, so a fluoride ion has a charge of ___.", answer: "1−", options: ["1−", "1+", "7−"], why: "Group 7 atoms have seven outer electrons and gain one, giving a charge of 1−.",
          feedback: {
            "1+": "A 1+ charge means an electron has been lost, which is what Group 1 metals do. Fluorine is a non-metal with seven outer electrons: it gains one, so its ion is 1−.",
            "7−": "You used the group number as the charge. Group 7 atoms already have seven outer electrons; they gain just one more to reach eight, so the charge is 1−."
          } }
      ],
      modules: [
        {
          title: "Count the electrons",
          task: { kind: "numeric", q: "A chlorine atom has 17 electrons. It gains 1 electron to form a chloride ion. How many electrons does the chloride ion have?", answer: 18, tolerance: 0, units: "electrons", check: "17 + 1", why: "Gaining an electron adds one to the count: 17 + 1 = 18 electrons. The ion now has 17 protons and 18 electrons, so its charge is 1−. Whole-number counts, so the answer is exact.",
            misconceptions: [
              { answer: 16, check: "17 - 1", says: "You took an electron away. Chlorine is a non-metal, so it gains an electron to fill its outer shell: 17 + 1 = 18 electrons." },
              { answer: 7, check: "17 - 10", says: "That is the number of electrons in the chlorine atom's outer shell. The question asks for the total number of electrons in the ion: 17 + 1 = 18." },
              { answer: 8, check: "17 - 10 + 1", says: "That is the number of electrons in the ion's outer shell, now full. The question asks for the total in the whole ion, including the inner shells: 17 + 1 = 18." }
            ] },
          contexts: [
            { label: "Sea salt", q: "Sea salt contains chloride ions. A chlorine atom has 17 electrons and gains 1 electron to become a chloride ion. How many electrons does the chloride ion have?" },
            { label: "Swimming pool", q: "Chlorine used to keep a swimming pool clean ends up as chloride ions in the water. A chlorine atom has 17 electrons and gains 1 electron to form a chloride ion. How many electrons does the ion have?" },
            { label: "PVC pipe", q: "PVC pipes are made using chlorine. If a chlorine atom, which has 17 electrons, gains 1 electron to form a chloride ion, how many electrons does the ion have?" }
          ],
          levels: {
            support: {
              steps: ["Write down the number of electrons in the atom.", "Decide: metal (loses) or non-metal (gains). Chlorine is a non-metal.", "Gaining means adding: atom's electrons + electrons gained."],
              example: { q: "A sulfur atom has 16 electrons. It gains 2 electrons to form a sulfide ion. How many electrons does the sulfide ion have?", steps: ["Sulfur is a non-metal, so it gains.", "16 + 2 = 18 electrons."], answer: "18 electrons", checks: [{ expr: "16 + 2", value: 18, tol: 0 }] }
            },
            core: { hint: "Does a non-metal lose or gain electrons? Then add or subtract." },
            stretch: { extend: "A sodium ion also has 10 electrons fewer than this chloride ion has. Explain why Na⁺ and Cl⁻ have different charges even though both have a full outer shell." }
          },
          why: "Chlorine gains one electron: 17 + 1 = 18. With 17 protons and 18 electrons the ion's charge is 1−.",
          explain: "Say why the chloride ion is negative even though it has a full outer shell."
        },
        {
          title: "Which ion?",
          task: { kind: "mcq", q: "Calcium is in Group 2 of the periodic table. Which ion does a calcium atom form?", options: ["Ca²⁺, by losing 2 electrons", "Ca²⁻, by gaining 2 electrons", "Ca⁺, by losing 1 electron", "Ca⁶⁻, by gaining 6 electrons"], answer: 0, why: "Group 2 atoms have two outer electrons. Calcium is a metal, so it loses both, leaving a 2+ charge.",
            feedback: [
              "",
              "You have the right number but the wrong sign. Calcium is a metal, so it loses its two outer electrons rather than gaining two. Losing electrons leaves a positive charge: Ca²⁺.",
              "Group 2 atoms have two outer electrons, not one. Calcium loses both of them, so its charge is 2+, not 1+.",
              "Gaining six electrons would be far harder than losing two, and calcium is a metal, which loses electrons. It loses its two outer electrons to form Ca²⁺."
            ] },
          contexts: [
            { label: "Bones and teeth", q: "Calcium, which strengthens bones and teeth, is in Group 2 of the periodic table. Which ion does a calcium atom form?" },
            { label: "Limestone", q: "Limestone contains calcium ions. Calcium is in Group 2 of the periodic table. Which ion does a calcium atom form?" }
          ],
          levels: {
            support: {
              steps: ["The group number tells you the number of outer electrons: Group 2 means two.", "Decide: metal or non-metal? Calcium is a metal, so it loses electrons.", "Losing two electrons leaves a charge of 2+."],
              example: { q: "Potassium is in Group 1. Which ion does it form?", steps: ["Group 1: one outer electron.", "Potassium is a metal, so it loses it.", "Losing one electron gives K⁺."], answer: "K⁺, by losing one electron" }
            },
            core: { hint: "Metals lose electrons. How many outer electrons does a Group 2 atom have?" },
            stretch: { extend: "Explain why calcium does not simply gain six electrons to fill its outer shell, and why its ion has the same electron arrangement as an argon atom." }
          },
          why: "Group 2 means two outer electrons; a metal loses them, giving Ca²⁺.",
          explain: "Say how the group number tells you the size of the charge on a metal ion."
        },
        {
          title: "Group to charge",
          task: { kind: "match", q: "Match each group of the periodic table to the ion its atoms form.", pairs: [
            ["Group 1 (for example sodium)", "1+"],
            ["Group 2 (for example magnesium)", "2+"],
            ["Group 6 (for example oxygen)", "2−"],
            ["Group 7 (for example chlorine)", "1−"],
            ["Group 0 (for example neon)", "no ion: the outer shell is already full"]
          ] },
          levels: {
            support: {
              steps: ["Groups 1 and 2 are metals: they lose electrons and form positive ions, one or two.", "Groups 6 and 7 are non-metals: they gain electrons to reach eight, so they form negative ions.", "Group 0 atoms already have a full outer shell, so they have no reason to form ions."],
              example: { q: "Which ion does aluminium, in Group 3, form?", steps: ["Group 3: three outer electrons.", "Aluminium is a metal, so it loses all three.", "The charge is 3+."], answer: "Al³⁺" }
            },
            core: { hint: "Left of the table: positive, size = group number. Right of the table: negative, size = 8 − group number." },
            stretch: { extend: "Sulfur forms S²⁻ and magnesium forms Mg²⁺. Predict the formula of magnesium sulfide and explain why the two ions pair up one to one." }
          },
          why: "Group 1: 1+. Group 2: 2+. Group 6: 2−. Group 7: 1−. Group 0 atoms have full outer shells and do not form ions.",
          explain: "Say why the charge on a Group 7 ion is 1− and not 7−."
        }
      ]
    },

    /* ───────────── 3 · ionic bonding and giant ionic structures ───────────── */
    {
      key: "ionic-bonding", n: 3, title: "Ionic bonding and giant ionic structures",
      lead: "This chapter explains how a metal and a non-metal bond by transferring electrons, how to work out the formula of the compound, and why ionic compounds behave the way they do.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "transfer", means: "to move something from one place to another", sentence: "Sodium transfers one electron to chlorine." },
          { word: "ionic bond", means: "the strong pull between a positive ion and a negative ion", sentence: "An ionic bond holds the sodium ion and the chloride ion together." },
          { word: "lattice", means: "a huge regular pattern of ions", sentence: "A grain of salt is a lattice of millions of ions." },
          { word: "electrostatic", means: "to do with the pull between positive and negative charges", sentence: "The electrostatic attraction between the ions is very strong." },
          { word: "formula", means: "the symbols that show which atoms or ions are in a compound and in what ratio", sentence: "The formula of sodium chloride is NaCl." }
        ],
        passage: [
          "A metal atom and a non-metal atom can react together.",
          "The metal atom gives one or more electrons to the non-metal atom.",
          "This is called electron transfer.",
          "The metal becomes a positive ion.",
          "The non-metal becomes a negative ion.",
          "Opposite charges attract, so the ions pull towards each other.",
          "This strong pull is called an ionic bond.",
          "Millions of ions pack together in a regular pattern called a giant lattice.",
          "Table salt, sodium chloride, is a giant ionic lattice.",
          "It needs a lot of energy to pull the ions apart, so it melts at 801 °C.",
          "Solid salt cannot conduct electricity, because its ions cannot move.",
          "When salt melts or dissolves, the ions are free to move, so it conducts."
        ]
      },
      sections: [
        {
          heading: "Electron transfer",
          paragraphs: [
            "When sodium reacts with chlorine, each sodium atom transfers its one outer electron to a chlorine atom. The sodium atom becomes a sodium ion, Na⁺, with the stable arrangement 2,8. The chlorine atom becomes a chloride ion, Cl⁻, with the stable arrangement 2,8,8. Both ions now have full outer shells.",
            "The two ions have opposite charges, and opposite charges attract. This strong electrostatic attraction between oppositely charged ions is an ionic bond. Ionic bonding happens between metals and non-metals: the metal loses electrons and the non-metal gains them.",
            "When a question says 'describe, in terms of electrons', it wants four things: which atom loses electrons and how many, which atom gains them and how many, the ions that form with their charges, and the attraction between them. A dot and cross diagram of the compound shows the outer shells of both ions, in square brackets, with the charges outside."
          ],
          worked: {
            q: "Describe, in terms of electrons, what happens when a lithium atom reacts with a fluorine atom to form lithium fluoride.",
            steps: [
              "Lithium is in Group 1: it has 1 outer electron and loses it, forming a lithium ion, Li⁺.",
              "Fluorine is in Group 7: it has 7 outer electrons and gains the 1 electron from lithium, forming a fluoride ion, F⁻.",
              "Both ions now have full outer shells.",
              "The oppositely charged ions are held together by strong electrostatic attraction: an ionic bond."
            ],
            answer: "Lithium loses one electron to form Li⁺; fluorine gains that electron to form F⁻; the oppositely charged ions attract strongly, forming an ionic bond."
          },
          tip: "Lose, gain, ions with charges, attraction. Four ideas, usually four marks."
        },
        {
          heading: "Working out the formula",
          paragraphs: [
            "An ionic compound has no overall charge, so the positive and negative charges must cancel. Sodium chloride is NaCl: one Na⁺ (1+) balances one Cl⁻ (1−). Magnesium chloride needs two chloride ions to balance one Mg²⁺, so its formula is MgCl₂. The small 2 after Cl means two chloride ions for every magnesium ion.",
            "The method is the same every time. Write down the two ions and their charges. Find the smallest numbers of each that make the total positive charge equal to the total negative charge. Write the metal first, then the non-metal, with the numbers as subscripts. Never write the charges in the formula of the compound.",
            "When the charges are the same size, the ions pair up one to one: Mg²⁺ and O²⁻ give MgO; Ca²⁺ and S²⁻ give CaS. When they are different, cross them over: Na⁺ and O²⁻ need two sodium ions, Na₂O; Al³⁺ and O²⁻ need two aluminium ions and three oxide ions, Al₂O₃."
          ],
          worked: {
            q: "Aluminium ions are Al³⁺ and oxide ions are O²⁻. Work out the formula of aluminium oxide.",
            steps: [
              "Find the smallest total that both charges can reach: 3 and 2 both go into 6.",
              "Positive: 2 aluminium ions give 2 × 3 = 6+.",
              "Negative: 3 oxide ions give 3 × 2 = 6−.",
              "6+ and 6− cancel. Two Al and three O: Al₂O₃."
            ],
            answer: "Al₂O₃",
            checks: [{ expr: "2 * 3", value: 6, tol: 0 }, { expr: "3 * 2", value: 6, tol: 0 }]
          },
          tip: "Charges must cancel. Same size: one to one. Different sizes: swap the numbers over."
        },
        {
          heading: "Reading a formula",
          paragraphs: [
            "You can also read a formula backwards to find which ions are in a compound and how many. Na₂O contains two sodium ions and one oxide ion. Use the periodic table for the charges: sodium is in Group 1, so Na⁺; oxygen is in Group 6, so O²⁻. Check that the charges cancel: 2 × (1+) and 1 × (2−). They do.",
            "MgBr₂ contains one magnesium ion, Mg²⁺, and two bromide ions, Br⁻. CaO contains one Ca²⁺ and one O²⁻. The formula of an ionic compound gives the ratio of ions in the lattice, not a single unit: there is no such thing as a single NaCl molecule, only a lattice in which Na⁺ and Cl⁻ ions are present one for one."
          ],
          worked: {
            q: "What ions are in lithium oxide, Li₂O, and how many of each does the formula show?",
            steps: [
              "Elements: lithium (Li) and oxygen (O). The 2 shows two lithium ions for each oxide ion.",
              "Charges from the periodic table: lithium is Group 1, Li⁺; oxygen is Group 6, O²⁻.",
              "Check: 2 × (1+) = 2+ and 1 × (2−) = 2−. The charges cancel."
            ],
            answer: "Two Li⁺ ions and one O²⁻ ion.",
            checks: [{ expr: "2 * 1", value: 2, tol: 0 }]
          },
          tip: "A subscript number belongs to the symbol just before it."
        },
        {
          heading: "Giant lattices and their properties",
          paragraphs: [
            "Ionic compounds do not form small molecules. The ions pack into a giant ionic lattice: a regular, repeating structure in which every positive ion is surrounded by negative ions and every negative ion by positive ions, with strong electrostatic forces acting in all directions. A single grain of salt contains millions of ions.",
            "Because those forces are strong and act in every direction, a lot of energy is needed to pull the ions apart. So ionic compounds have high melting and boiling points: sodium chloride melts at 801 °C. The bigger the charges on the ions, the stronger the attraction: calcium oxide (Ca²⁺ and O²⁻) melts at 2572 °C, far higher than sodium oxide (Na⁺ and O²⁻) at 1132 °C.",
            "Solid ionic compounds do not conduct electricity, because the ions are locked in place in the lattice and cannot move. When the compound melts, or dissolves in water, the lattice breaks up and the ions are free to move. Moving charged particles carry a current, so molten and dissolved (aqueous) ionic compounds do conduct. Many ionic compounds dissolve in water: the water molecules pull the ions away from the lattice and they spread out, which is why dissolved salt seems to disappear."
          ],
          worked: {
            q: "Calcium oxide melts at 2572 °C and sodium oxide at 1132 °C. How much higher is the melting point of calcium oxide, and why?",
            steps: [
              "Difference: 2572 − 1132 = 1440 degrees.",
              "Both compounds contain O²⁻ ions. The difference is the metal ion: Ca²⁺ against Na⁺.",
              "A 2+ ion attracts the 2− oxide ions more strongly than a 1+ ion does.",
              "Stronger electrostatic forces need more energy to overcome, so the melting point is higher."
            ],
            answer: "1440 degrees higher, because the Ca²⁺ ions attract the oxide ions more strongly than Na⁺ ions do.",
            checks: [{ expr: "2572 - 1132", value: 1440, tol: 0 }]
          },
          tip: "Solid: ions fixed, no conduction. Molten or dissolved: ions free to move, conducts."
        }
      ],
      gate: [
        { kind: "mcq", q: "When sodium reacts with chlorine, what happens to the electrons?", options: ["Each sodium atom transfers one electron to a chlorine atom", "Sodium and chlorine share a pair of electrons", "Each chlorine atom transfers one electron to a sodium atom", "Both atoms lose electrons into a shared sea"], answer: 0, why: "Ionic bonding is electron transfer from the metal to the non-metal: sodium loses one electron, chlorine gains it.",
          feedback: [
            "",
            "Sharing electrons is covalent bonding, which happens between two non-metals. Sodium is a metal, so it transfers its outer electron to chlorine instead.",
            "You have the direction the wrong way round. Metals lose electrons and non-metals gain them: sodium gives its one outer electron to chlorine.",
            "A sea of electrons is metallic bonding, found in a pure metal. In sodium chloride the electron moves from the sodium atom to the chlorine atom."
          ] },
        { kind: "mcq", q: "Calcium ions are Ca²⁺ and chloride ions are Cl⁻. What is the formula of calcium chloride?", options: ["CaCl₂", "CaCl", "Ca₂Cl", "Ca₂Cl₂"], answer: 0, why: "One 2+ ion needs two 1− ions to cancel its charge, so the formula is CaCl₂.",
          feedback: [
            "",
            "CaCl would have a 2+ charge and only a 1− charge, which do not cancel. One calcium ion needs two chloride ions: CaCl₂.",
            "You put the 2 on the wrong ion. Two calcium ions would be 4+ against 1−. It is the chloride ions that are needed twice: CaCl₂.",
            "Ca₂Cl₂ does balance, but formulae use the smallest whole numbers. Divide both by 2 to get CaCl₂."
          ] },
        { kind: "gap", q: "Solid sodium chloride does not conduct electricity because its ions cannot ___.", answer: "move", options: ["move", "vibrate", "dissolve"], why: "In the solid lattice the ions are fixed in position. A current needs charged particles that are free to move.",
          feedback: {
            "vibrate": "The ions in a solid do vibrate, on the spot. What they cannot do is move through the structure, and moving charged particles are what carry a current.",
            "dissolve": "Dissolving is one way to free the ions, but melting works too, so dissolving is not the point. The solid cannot conduct because its ions are fixed and cannot move."
          } }
      ],
      modules: [
        {
          title: "Balance the charges",
          task: { kind: "numeric", q: "Aluminium oxide contains aluminium ions with a 3+ charge and oxide ions with a 2− charge. How many oxide ions are needed to balance the charge on 2 aluminium ions?", answer: 3, tolerance: 0, units: "oxide ions", check: "2 * 3 / 2", why: "Two aluminium ions give 2 × 3 = 6+. Each oxide ion is 2−, so 6 ÷ 2 = 3 oxide ions are needed. The formula is Al₂O₃. Whole-number counts, so the answer is exact.",
            misconceptions: [
              { answer: 2, check: "2 * 1", says: "You matched one oxide ion to each aluminium ion. Count the charge instead: 2 ions × 3+ = 6+, and each oxide ion is only 2−, so you need 6 ÷ 2 = 3 of them." },
              { answer: 6, check: "2 * 3", says: "That is the total positive charge, 6+. Each oxide ion carries 2−, so divide: 6 ÷ 2 = 3 oxide ions." },
              { answer: 1, check: "3 - 2", says: "You subtracted the charges. The negative charges must add up to the positive total: 2 × 3 = 6+, so 6 ÷ 2 = 3 oxide ions." }
            ] },
          contexts: [
            { label: "Ruby", q: "A ruby is mostly aluminium oxide. Its aluminium ions have a 3+ charge and its oxide ions a 2− charge. How many oxide ions are needed to balance the charge on 2 aluminium ions?" },
            { label: "Sandpaper", q: "The hard grit on sandpaper is aluminium oxide, made of aluminium ions with a 3+ charge and oxide ions with a 2− charge. How many oxide ions balance the charge on 2 aluminium ions?" },
            { label: "Drinks can", q: "Aluminium drinks cans are coated with a thin layer of aluminium oxide, which contains aluminium ions with a 3+ charge and oxide ions with a 2− charge. How many oxide ions are needed to balance the charge on 2 aluminium ions?" }
          ],
          levels: {
            support: {
              steps: ["Work out the total positive charge: number of metal ions × charge on each.", "Each negative ion cancels its own charge. Divide the positive total by the size of the negative charge.", "Check: positive total and negative total must be equal."],
              example: { q: "Sodium oxide contains Na⁺ (1+) and O²⁻ (2−). How many sodium ions are needed to balance one oxide ion?", steps: ["One oxide ion gives 2−.", "Each sodium ion gives only 1+, so 2 ÷ 1 = 2 sodium ions.", "Formula: Na₂O."], answer: "2 sodium ions", checks: [{ expr: "2 / 1", value: 2, tol: 0 }] }
            },
            core: { hint: "Total positive charge first. Then how many 2− ions does it take to cancel it?" },
            stretch: { extend: "Write the formula of aluminium oxide, then predict the formula of aluminium sulfide (sulfide is S²⁻) and of aluminium chloride (Cl⁻). Explain the pattern." }
          },
          why: "2 × 3 = 6+, so three 2− ions are needed: 3 × 2 = 6−. Formula Al₂O₃.",
          explain: "Say why the number of oxide ions is not simply the same as the number of aluminium ions."
        },
        {
          title: "When does salt conduct?",
          task: { kind: "mcq", q: "Solid sodium chloride does not conduct electricity, but molten sodium chloride does. Why?", options: ["When molten, the ions are free to move and carry charge", "When molten, the ions gain electrons and become neutral atoms", "When molten, the ionic bonds turn into covalent bonds", "When molten, the electrons are free to move between the ions"], answer: 0, why: "A current needs charged particles that can move. In the solid the ions are fixed in the lattice; when molten the lattice has broken up and the ions move freely.",
            feedback: [
              "",
              "Melting does not change the ions back into atoms; it only gives them enough energy to break out of the lattice. The ions keep their charges and, now free to move, carry the current.",
              "Melting does not change the type of bonding. The ionic bonds are overcome so the lattice falls apart, and the free-moving ions carry the charge.",
              "In an ionic compound the electrons have already been transferred and belong to the ions. The particles that move and carry charge in molten salt are the ions themselves."
            ] },
          contexts: [
            { label: "Molten salt", q: "Sodium chloride is heated until it melts. Why does the molten salt conduct electricity when the solid did not?" },
            { label: "Sea water", q: "A block of dry rock salt does not conduct electricity, but sea water, in which salt is dissolved, conducts well. Why?" }
          ],
          levels: {
            support: {
              steps: ["A current is carried by charged particles that are free to move.", "In a solid lattice the ions are locked in position.", "Melting or dissolving breaks up the lattice: what can the ions do now?"],
              example: { q: "Why does a solution of potassium fluoride in water conduct electricity?", steps: ["Dissolving separates the K⁺ and F⁻ ions from the lattice.", "The ions spread out through the water and are free to move.", "Moving charged particles carry the current."], answer: "The dissolved ions are free to move and carry charge." }
            },
            core: { hint: "What carries the charge in an ionic compound, and what stops it in the solid?" },
            stretch: { extend: "Explain why distilled water is a poor conductor while sea water is a good one, and why the electrolysis of sodium chloride (which you will meet later) must be done on molten or dissolved salt." }
          },
          why: "Molten ions are free to move. Moving charged particles carry a current; fixed ones cannot.",
          explain: "Say what is different about the ions in molten salt compared with the ions in solid salt."
        },
        {
          title: "Explain the properties",
          task: { kind: "written", q: "Sodium chloride has a melting point of 801 °C. It does not conduct electricity when solid but does when molten. Explain both properties in terms of the structure and bonding of sodium chloride.", marks: 6,
            criteria: [
              "Sodium chloride is a giant ionic lattice of Na⁺ and Cl⁻ ions in a regular arrangement.",
              "The oppositely charged ions are held by strong electrostatic forces of attraction (ionic bonds) acting in all directions.",
              "A lot of energy is needed to overcome these forces, so the melting point is high.",
              "In the solid the ions are fixed in position and cannot move, so no charge can flow.",
              "When molten, the lattice has broken up and the ions are free to move.",
              "Moving ions carry the charge, so the molten compound conducts."
            ],
            model: "Sodium chloride is made of sodium ions and chloride ions packed into a giant lattice. The positive and negative ions attract each other strongly, with electrostatic forces acting in every direction through the lattice. It takes a lot of energy to overcome all of those forces, which is why sodium chloride does not melt until 801 °C. In the solid the ions are locked in their places in the lattice. Electricity is a flow of charged particles, and because the ions cannot move, the solid cannot conduct. Once the salt has melted the lattice has broken up and the ions can move freely, so they carry the charge and the molten salt conducts electricity." },
          levels: {
            support: {
              steps: ["Start with the structure: what particles, in what arrangement?", "Melting point: name the force between the ions, say it is strong, and link strong force to lots of energy.", "Conduction: say what the ions can and cannot do in the solid and in the liquid, and that moving charged particles carry a current."],
              example: { q: "Explain why magnesium oxide has a very high melting point.", steps: ["Magnesium oxide is a giant ionic lattice of Mg²⁺ and O²⁻ ions.", "The oppositely charged ions attract with strong electrostatic forces in all directions.", "The 2+ and 2− charges make the attraction especially strong.", "A great deal of energy is needed to overcome the forces, so the melting point is very high."], answer: "Strong electrostatic attraction between the doubly charged ions throughout the giant lattice needs a lot of energy to overcome." }
            },
            core: { hint: "Six marks: structure, force, energy, solid ions fixed, molten ions free, moving charge." },
            stretch: { extend: "Magnesium oxide melts at a much higher temperature than sodium chloride. Extend your answer to explain why, using the charges on the ions." }
          },
          why: "A full answer names the giant ionic lattice, the strong electrostatic forces between oppositely charged ions, the energy needed to overcome them, and the difference between fixed ions in the solid and free-moving ions in the liquid.",
          explain: "Say which single idea links the high melting point and the conduction: what does melting do to the ions?"
        }
      ]
    },

    /* ───────────── 4 · covalent bonding and simple molecules ───────────── */
    {
      key: "covalent-bonding", n: 4, title: "Covalent bonding and simple molecules",
      lead: "This chapter shows how non-metal atoms bond by sharing electrons, how to draw the molecules they make, and why small molecules have low melting and boiling points while polymers do not.",
      covers: [5, 6],
      pretext: {
        words: [
          { word: "share", means: "to use together", sentence: "Two hydrogen atoms share a pair of electrons." },
          { word: "covalent bond", means: "a pair of electrons shared between two atoms", sentence: "A covalent bond holds the two hydrogen atoms together." },
          { word: "molecule", means: "a small group of atoms joined by covalent bonds", sentence: "A water molecule has one oxygen atom and two hydrogen atoms." },
          { word: "intermolecular forces", means: "the weak forces between one molecule and the next", sentence: "Intermolecular forces are easy to overcome, so water boils at a low temperature." },
          { word: "polymer", means: "a very long molecule made of many small molecules joined together", sentence: "A plastic bag is made of a polymer." }
        ],
        passage: [
          "Non-metal atoms do not give electrons away.",
          "Instead, two non-metal atoms share a pair of electrons.",
          "A shared pair of electrons is a covalent bond.",
          "Each atom counts the shared pair as its own, so both get a full outer shell.",
          "A small group of atoms joined by covalent bonds is a molecule.",
          "Water, H₂O, is a molecule: one oxygen atom shares with two hydrogen atoms.",
          "Covalent bonds are strong.",
          "But the forces between one molecule and the next are weak.",
          "These weak forces are called intermolecular forces.",
          "Only a little energy is needed to pull molecules apart.",
          "So small molecules have low melting and boiling points.",
          "Many are gases at room temperature.",
          "Molecules have no charge, so they do not conduct electricity.",
          "A polymer is a very long molecule made from thousands of small molecules joined together."
        ]
      },
      sections: [
        {
          heading: "Sharing electrons",
          paragraphs: [
            "Two non-metal atoms both need electrons to fill their outer shells, and neither will give any away. Instead they share. A covalent bond is a shared pair of electrons between two atoms. Each atom counts the shared pair as part of its own outer shell, so both end up full. The atoms are held together because both nuclei attract the shared electrons.",
            "Hydrogen has one electron and needs two for a full first shell. Two hydrogen atoms share one pair, making a hydrogen molecule, H₂, with a single covalent bond, drawn H–H. Chlorine has seven outer electrons and needs eight: two chlorine atoms share one pair to make Cl₂. In hydrogen chloride, HCl, one hydrogen shares with one chlorine.",
            "The number of bonds an atom forms is the number of electrons it needs. Group 7 atoms need one, so they form one bond. Group 6 atoms (oxygen) need two: in water, H₂O, oxygen forms one bond to each of two hydrogen atoms. Group 5 atoms (nitrogen) need three: ammonia is NH₃. Group 4 atoms (carbon) need four: methane is CH₄. In a dot and cross diagram you draw only the outer shells, with the shared electrons in the overlap."
          ],
          worked: {
            q: "Oxygen is in Group 6. How many covalent bonds does an oxygen atom form in a water molecule, and why?",
            steps: [
              "Group 6 means 6 outer electrons.",
              "A full outer shell has 8, so oxygen needs 8 − 6 = 2 more electrons.",
              "Each covalent bond gives oxygen one shared electron it can count as its own, so it forms 2 bonds.",
              "In water each bond is to a hydrogen atom: H–O–H."
            ],
            answer: "Two bonds, one to each hydrogen atom, because oxygen needs two more electrons for a full outer shell.",
            checks: [{ expr: "8 - 6", value: 2, tol: 0 }]
          },
          tip: "Bonds needed = 8 − group number (for hydrogen, 1). Carbon 4, nitrogen 3, oxygen 2, chlorine 1."
        },
        {
          heading: "Double and triple bonds",
          paragraphs: [
            "Sometimes two atoms share more than one pair of electrons. In an oxygen molecule, O₂, each oxygen atom needs two electrons, so the two atoms share two pairs: a double bond, drawn O=O, with four electrons in the overlap. In a nitrogen molecule, N₂, each atom needs three electrons, so they share three pairs: a triple bond, N≡N, with six shared electrons.",
            "Carbon dioxide, CO₂, has a carbon atom in the middle with a double bond to each oxygen atom: O=C=O. Carbon shares two pairs with each oxygen, four pairs in all, which gives carbon its full shell of eight.",
            "A single line in a displayed formula always means one shared pair, two electrons. Count the lines to count the shared pairs; double the lines to count the shared electrons."
          ],
          worked: {
            q: "Nitrogen is in Group 5. Explain why a nitrogen molecule, N₂, has a triple bond, and say how many electrons are shared.",
            steps: [
              "Group 5 means 5 outer electrons; a full shell has 8, so each atom needs 8 − 5 = 3 more.",
              "The only other atom available is the second nitrogen, so each atom shares 3 of its electrons with the other.",
              "Three shared pairs is a triple bond.",
              "Shared electrons: 2 × 3 = 6."
            ],
            answer: "Each nitrogen atom needs three more electrons, so the two atoms share three pairs (a triple bond): 6 electrons in all.",
            checks: [{ expr: "8 - 5", value: 3, tol: 0 }, { expr: "2 * 3", value: 6, tol: 0 }]
          },
          tip: "Single bond: 2 electrons. Double: 4. Triple: 6."
        },
        {
          heading: "Why small molecules have low melting and boiling points",
          paragraphs: [
            "Substances made of small molecules, such as water, oxygen, methane and carbon dioxide, have low melting and boiling points. Many are gases at room temperature and most of the rest are liquids. The reason is not that the covalent bonds are weak. They are strong. The reason is what happens between the molecules.",
            "Between one molecule and the next there are only weak intermolecular forces. When a molecular substance melts or boils, it is these weak forces that are overcome, so only a little energy is needed. The molecules separate from each other, but each molecule stays whole: the covalent bonds inside it are not broken. Steam is still made of H₂O molecules.",
            "Intermolecular forces get stronger as molecules get bigger, so larger molecules have higher melting and boiling points. Molecules have no overall charge, and there are no free electrons or ions, so substances made of simple molecules do not conduct electricity, whether solid, liquid or dissolved."
          ],
          tip: "Melting a molecular substance overcomes intermolecular forces. It does not break covalent bonds. Examiners look for this distinction."
        },
        {
          heading: "Polymers, and the limits of our models",
          paragraphs: [
            "A polymer is a very long molecule made by joining thousands of small molecules, called monomers, into a chain. Poly(ethene), used for plastic bags, is made from ethene monomers. Within the chain, the atoms are joined by strong covalent bonds. Because the molecules are so long, the intermolecular forces between the chains add up and are relatively strong, so polymers are solids at room temperature with higher melting points than small molecules. A repeating unit shows the part of the chain that repeats over and over.",
            "Chemists use several models for molecules, and each leaves something out. A dot and cross diagram shows which electrons are shared but not the shape of the molecule. A two-dimensional ball and stick model shows which atoms are bonded but not the true shape or the angles between the bonds. A three-dimensional model shows the shape better, but the sticks exaggerate the gaps between atoms and no model shows the electrons as they really are. Choose the model that shows what the question is asking about."
          ],
          tip: "Monomer: one small molecule. Polymer: many monomers joined in a chain."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is a covalent bond?", options: ["A shared pair of electrons between two atoms", "The transfer of an electron from one atom to another", "The attraction between oppositely charged ions", "A weak force between two molecules"], answer: 0, why: "A covalent bond is a shared pair of electrons, formed between non-metal atoms.",
          feedback: [
            "",
            "Transferring an electron is ionic bonding, which happens between a metal and a non-metal. Non-metal atoms share electrons instead: a covalent bond is a shared pair.",
            "Attraction between oppositely charged ions is an ionic bond. A covalent bond has no ions: it is a pair of electrons shared between two atoms.",
            "The weak force between molecules is an intermolecular force, not a bond. A covalent bond is the strong link inside a molecule: a shared pair of electrons."
          ] },
        { kind: "numeric", q: "An oxygen molecule, O₂, has a double bond: 2 shared pairs of electrons. How many electrons are shared between the two atoms in total?", answer: 4, tolerance: 0, units: "electrons", check: "2 * 2", why: "Each shared pair is 2 electrons, so 2 pairs are 2 × 2 = 4 electrons. Whole-number counts, so the answer is exact.",
          misconceptions: [
            { answer: 2, check: "2 * 1", says: "You counted the pairs, not the electrons. Each pair is two electrons, so a double bond shares 2 × 2 = 4 electrons." },
            { answer: 12, check: "2 * 6", says: "You counted all the outer-shell electrons of both oxygen atoms. Only the electrons in the overlap are shared: 2 pairs, which is 4 electrons." }
          ] },
        { kind: "gap", q: "Simple molecules have low boiling points because the ___ forces between the molecules are weak.", answer: "intermolecular", options: ["intermolecular", "covalent", "ionic"], why: "The weak forces between molecules are intermolecular forces. The covalent bonds inside the molecules are strong and are not broken when the substance boils.",
          feedback: {
            "covalent": "Covalent bonds are the strong bonds inside each molecule, and they stay intact when a substance boils. It is the weak intermolecular forces between molecules that are overcome.",
            "ionic": "Simple molecules contain no ions, so there are no ionic forces. The weak forces between molecules are called intermolecular forces."
          } }
      ],
      modules: [
        {
          title: "How many bonds?",
          task: { kind: "numeric", q: "A nitrogen atom has 5 electrons in its outer shell. How many covalent bonds does it form to reach a full outer shell of 8?", answer: 3, tolerance: 0, units: "bonds", check: "8 - 5", why: "Nitrogen needs 8 − 5 = 3 more electrons. Each covalent bond gives it one shared electron to count as its own, so it forms 3 bonds, as in ammonia, NH₃. Whole-number counts, so the answer is exact.",
            misconceptions: [
              { answer: 5, check: "5", says: "You gave the number of outer-shell electrons nitrogen already has. The number of bonds is the number it still needs: 8 − 5 = 3." },
              { answer: 13, check: "8 + 5", says: "You added the full-shell number to the outer electrons. The bonds needed are the gap between them: 8 − 5 = 3." },
              { answer: 6, check: "2 * 3", says: "That is the number of electrons shared in three bonds. The question asks for the number of bonds, which is 3." }
            ] },
          contexts: [
            { label: "Ammonia", q: "In ammonia, NH₃, a nitrogen atom bonds to hydrogen atoms. The nitrogen atom has 5 electrons in its outer shell. How many covalent bonds does it form to reach a full outer shell of 8?" },
            { label: "Nitrogen in the air", q: "Most of the air is nitrogen gas, N₂. Each nitrogen atom has 5 electrons in its outer shell. How many covalent bonds does each atom form to reach a full outer shell of 8?" }
          ],
          levels: {
            support: {
              steps: ["Write down the number of outer-shell electrons.", "A full outer shell is 8. Subtract to find how many more electrons are needed.", "Each bond supplies one, so bonds needed = electrons needed."],
              example: { q: "An oxygen atom has 6 outer-shell electrons. How many covalent bonds does it form?", steps: ["Needs 8 − 6 = 2 more electrons.", "So it forms 2 bonds, as in water."], answer: "2 bonds", checks: [{ expr: "8 - 6", value: 2, tol: 0 }] }
            },
            core: { hint: "How many more electrons does nitrogen need to make 8?" },
            stretch: { extend: "Nitrogen forms three single bonds in ammonia but one triple bond in N₂. Explain how both molecules give nitrogen a full outer shell." }
          },
          why: "8 − 5 = 3 electrons needed, so 3 covalent bonds.",
          explain: "Say why the number of bonds an atom forms is linked to its group number."
        },
        {
          title: "Why is it a gas?",
          task: { kind: "mcq", q: "Methane, CH₄, is a gas at room temperature. Which statement explains why its boiling point is so low?", options: ["Only weak intermolecular forces between the molecules have to be overcome", "The covalent bonds inside the molecules are weak and break easily", "The molecules carry a charge that pushes them apart", "Methane has a giant structure with very few bonds"], answer: 0, why: "Boiling separates the molecules from each other. Only the weak intermolecular forces are overcome, which needs little energy, so the boiling point is low. The covalent bonds stay intact.",
            feedback: [
              "",
              "This is the most common mistake in this topic. The covalent bonds inside a methane molecule are strong and are not broken when it boils. Boiling only separates the molecules, overcoming the weak intermolecular forces between them.",
              "Molecules have no overall charge. Nothing pushes them apart; they are simply held together only weakly, by intermolecular forces that need little energy to overcome.",
              "Methane is a simple molecule, not a giant structure. Giant structures have very high boiling points because many strong bonds must be broken. Methane's low boiling point comes from its weak intermolecular forces."
            ] },
          contexts: [
            { label: "Camping stove", q: "The fuel in a camping stove, butane, is made of small molecules and is a gas at room temperature. Which statement explains why its boiling point is so low?" },
            { label: "Oxygen in the air", q: "Oxygen, O₂, is a gas at room temperature. Which statement explains why its boiling point is so low?" }
          ],
          levels: {
            support: {
              steps: ["Ask what boiling does: it separates the molecules from each other.", "What holds one molecule to the next? Weak intermolecular forces.", "Weak forces need little energy to overcome, so the boiling point is low. The covalent bonds are not involved."],
              example: { q: "Why is chlorine, Cl₂, a gas at room temperature?", steps: ["Chlorine is made of small Cl₂ molecules.", "Between the molecules there are only weak intermolecular forces.", "Little energy is needed to overcome them, so the boiling point is low."], answer: "Weak intermolecular forces between the Cl₂ molecules are easily overcome." }
            },
            core: { hint: "What is separated when a molecular substance boils: atoms, or molecules?" },
            stretch: { extend: "Water (H₂O) is a liquid at room temperature while methane (CH₄) is a gas, although the molecules are a similar size. Suggest what this tells you about the intermolecular forces in water." }
          },
          why: "Only the weak intermolecular forces between methane molecules are overcome when it boils, so little energy is needed and the boiling point is low.",
          explain: "Say what stays the same about a methane molecule when methane boils."
        },
        {
          title: "Inside the molecule",
          task: { kind: "match", q: "Match each molecule to the bonds inside it.", pairs: [
            ["H₂", "one single bond (one shared pair)"],
            ["O₂", "one double bond (two shared pairs)"],
            ["N₂", "one triple bond (three shared pairs)"],
            ["H₂O", "two single bonds, each to a hydrogen atom"],
            ["CH₄", "four single bonds, each to a hydrogen atom"]
          ] },
          levels: {
            support: {
              steps: ["Hydrogen needs one electron, so it always forms one single bond.", "For two of the same atom, the number of shared pairs equals the number of electrons each needs: oxygen 2, nitrogen 3.", "Oxygen needs two electrons and carbon needs four, so count the hydrogens they bond to."],
              example: { q: "Describe the bonds in hydrogen chloride, HCl, and in ammonia, NH₃.", steps: ["HCl: hydrogen and chlorine each need one electron, so one single bond.", "NH₃: nitrogen needs three, so three single bonds, one to each hydrogen."], answer: "HCl: one single bond. NH₃: three single bonds to hydrogen." }
            },
            core: { hint: "Electrons needed: H 1, O 2, N 3, C 4. Two of the same atom share that many pairs." },
            stretch: { extend: "Draw the dot and cross diagram for carbon dioxide, CO₂, and explain why it has two double bonds rather than four single ones." }
          },
          why: "H₂ single; O₂ double; N₂ triple; water has two O–H single bonds; methane has four C–H single bonds.",
          explain: "Say how you can tell from a displayed formula how many electrons are shared in a bond."
        }
      ]
    },

    /* ───────────── 5 · giant covalent structures ───────────── */
    {
      key: "giant-covalent", n: 5, title: "Giant covalent structures",
      lead: "This chapter explains diamond, graphite and silicon dioxide: structures in which every atom is covalently bonded to its neighbours, and why that makes them behave so differently from small molecules.",
      covers: [7],
      pretext: {
        words: [
          { word: "giant structure", means: "a structure of millions of atoms all bonded together", sentence: "Diamond is a giant structure of carbon atoms." },
          { word: "diamond", means: "a very hard form of carbon in which each atom bonds to four others", sentence: "Diamond is used on the tips of drills." },
          { word: "graphite", means: "a soft form of carbon made of layers", sentence: "The 'lead' in a pencil is graphite." },
          { word: "layer", means: "a flat sheet of atoms", sentence: "In graphite, one layer can slide over the next." },
          { word: "delocalised electron", means: "an electron that is free to move through the whole structure", sentence: "Delocalised electrons let graphite conduct electricity." }
        ],
        passage: [
          "Some substances are made of millions of atoms all joined by covalent bonds.",
          "These are called giant covalent structures.",
          "Diamond is made of carbon atoms.",
          "Each carbon atom is joined to four other carbon atoms.",
          "This makes diamond very hard, with a very high melting point.",
          "Diamond does not conduct electricity.",
          "Graphite is also made of carbon atoms.",
          "But each carbon atom is joined to only three others.",
          "The atoms form flat layers.",
          "The layers can slide over each other, so graphite is soft and slippery.",
          "Each carbon atom has one spare electron that is free to move.",
          "These free electrons let graphite conduct electricity.",
          "Sand is mostly silicon dioxide, another giant covalent structure."
        ]
      },
      sections: [
        {
          heading: "What makes a structure giant?",
          paragraphs: [
            "In a simple molecular substance, strong covalent bonds hold a few atoms together in a molecule, and weak forces hold the molecules to each other. In a giant covalent structure there are no separate molecules at all. Every atom is covalently bonded to its neighbours, and the network of bonds runs through the whole solid.",
            "To melt a giant covalent structure you have to break those strong covalent bonds, millions of them. That needs a huge amount of energy, so giant covalent substances have very high melting and boiling points. They are also usually hard and insoluble in water, and most do not conduct electricity, because there are no charged particles free to move.",
            "Silicon dioxide, the main substance in sand and quartz, is a giant covalent structure of silicon and oxygen atoms. It is hard, has a very high melting point, does not dissolve in water and does not conduct electricity."
          ],
          tip: "Giant covalent: many strong bonds to break, so a very high melting point. Simple molecule: weak forces to overcome, so a low one."
        },
        {
          heading: "Diamond",
          paragraphs: [
            "Diamond is a form of carbon. A carbon atom has four outer electrons, and in diamond every carbon atom uses all four to form covalent bonds to four other carbon atoms. The result is a rigid three-dimensional network in which every atom is locked in place.",
            "Because every bond is strong and the network is rigid, diamond is extremely hard and has a very high melting point. It is used for cutting tools and drill tips. All four of each atom's outer electrons are held in bonds, so there are no free electrons and diamond does not conduct electricity."
          ],
          worked: {
            q: "Explain why diamond is very hard.",
            steps: [
              "Diamond is a giant covalent structure of carbon atoms.",
              "Each carbon atom is bonded to four others by strong covalent bonds.",
              "The bonds form a rigid network in three dimensions, so the atoms cannot slide past each other.",
              "A lot of force is needed to break the bonds and scratch or deform the structure."
            ],
            answer: "Every carbon atom is held by four strong covalent bonds in a rigid three-dimensional network, so the atoms cannot move past one another."
          },
          tip: "Diamond: 4 bonds per atom, no free electrons, hard, does not conduct."
        },
        {
          heading: "Graphite",
          paragraphs: [
            "Graphite is also pure carbon, but arranged differently. Each carbon atom forms covalent bonds to only three other carbon atoms. The atoms join into flat layers of hexagons, like sheets of chicken wire stacked on top of one another.",
            "Within a layer the covalent bonds are strong, so graphite still has a very high melting point. But between the layers there are no covalent bonds, only weak forces, so the layers can slide over one another. That makes graphite soft and slippery: it rubs off onto paper as pencil 'lead' and is used as a lubricant.",
            "Each carbon atom has four outer electrons but uses only three in bonds. The fourth electron is delocalised: it is free to move along the layer. Because these delocalised electrons can move and carry charge, graphite conducts electricity, and they also carry energy, so it conducts heat. Graphite is used for electrodes for this reason."
          ],
          worked: {
            q: "A carbon atom has 4 outer electrons. In graphite each atom bonds to 3 others. Explain why graphite conducts electricity but diamond does not.",
            steps: [
              "In graphite each carbon atom uses 3 of its 4 outer electrons in covalent bonds.",
              "That leaves 4 − 3 = 1 electron per atom that is not in a bond: it is delocalised and free to move through the layer.",
              "Moving electrons carry charge, so graphite conducts.",
              "In diamond every atom uses all 4 electrons in bonds, leaving 4 − 4 = 0 free electrons, so diamond cannot conduct."
            ],
            answer: "Graphite has one delocalised electron per carbon atom, free to move and carry charge; diamond has none.",
            checks: [{ expr: "4 - 3", value: 1, tol: 0 }, { expr: "4 - 4", value: 0, tol: 0 }]
          },
          tip: "Graphite: 3 bonds per atom, layers slide, 1 delocalised electron per atom, conducts."
        },
        {
          heading: "Comparing the structures",
          paragraphs: [
            "Diamond and graphite are both made only of carbon, both are giant covalent structures and both have very high melting points. Everything that differs between them comes from the number of bonds each atom makes. Four bonds give a rigid 3D network: hard, no free electrons. Three bonds give layers: soft and slippery, with one delocalised electron per atom.",
            "When you compare structures in an exam answer, deal with one property at a time and give the reason from the structure each time: 'Diamond is hard because each atom is held by four strong covalent bonds in a rigid network, whereas graphite is soft because its layers are held only by weak forces and can slide.' Models of these structures have the same limits as models of molecules: a drawing shows a few dozen atoms when the real crystal contains millions, and the sticks exaggerate the space between atoms."
          ],
          tip: "Same element, different structure, different properties. Always say how many bonds each atom makes."
        }
      ],
      gate: [
        { kind: "numeric", q: "A carbon atom has 4 electrons in its outer shell. In graphite each carbon atom uses 3 of them in covalent bonds. How many electrons per carbon atom are delocalised?", answer: 1, tolerance: 0, units: "electron per atom", check: "4 - 3", why: "4 outer electrons, 3 used in bonds: 4 − 3 = 1 electron per atom is delocalised. Whole-number counts, so the answer is exact.",
          misconceptions: [
            { answer: 7, check: "4 + 3", says: "You added the two numbers. The delocalised electrons are the ones left over after bonding: 4 − 3 = 1 per atom." },
            { answer: 3, check: "4 - 1", says: "That is the number of bonds each atom makes. The delocalised electron is the one not used in a bond: 4 − 3 = 1." }
          ] },
        { kind: "mcq", q: "Which property do diamond and graphite share?", options: ["A very high melting point", "They conduct electricity", "They are soft and slippery", "They are made of small molecules"], answer: 0, why: "Both are giant covalent structures of carbon with many strong covalent bonds to break, so both have very high melting points.",
          feedback: [
            "",
            "Only graphite conducts, because of its delocalised electrons. In diamond all four outer electrons are used in bonds, so it does not conduct.",
            "Only graphite is soft and slippery, because its layers slide. Diamond is one of the hardest substances known.",
            "Neither is made of molecules. Both are giant covalent structures in which every carbon atom is bonded to its neighbours."
          ] },
        { kind: "gap", q: "In graphite, the ___ can slide over each other, which makes graphite soft and slippery.", answer: "layers", options: ["layers", "electrons", "molecules"], why: "Graphite's carbon atoms are bonded into flat layers with only weak forces between them, so the layers slide.",
          feedback: {
            "electrons": "Graphite's delocalised electrons do move, but that explains why it conducts, not why it is soft. It is soft because the layers of atoms slide over each other.",
            "molecules": "Graphite has no molecules; it is a giant structure. The parts that slide are the flat layers of carbon atoms, held together only by weak forces."
          } }
      ],
      modules: [
        {
          title: "Why graphite conducts",
          task: { kind: "mcq", q: "Why can graphite conduct electricity?", options: ["Each carbon atom has one delocalised electron that is free to move through the structure", "Graphite contains ions that are free to move", "The layers of graphite slide over each other and carry the current", "Graphite is made of small molecules that pass electrons along"], answer: 0, why: "Each carbon atom bonds to three others and its fourth outer electron is delocalised. These free electrons move through the layers and carry charge.",
            feedback: [
              "",
              "Graphite has no ions; it is made of neutral carbon atoms covalently bonded together. The charge carriers are the delocalised electrons, one per atom.",
              "The sliding layers explain why graphite is soft and slippery, not why it conducts. Conduction needs charged particles that move: graphite's delocalised electrons.",
              "Graphite is a giant covalent structure, not small molecules, and molecular substances do not conduct. Graphite conducts because each atom has one delocalised electron free to move."
            ] },
          contexts: [
            { label: "Pencil line", q: "A thick pencil line drawn on paper can complete a simple circuit and light a bulb. Why can the graphite in the pencil conduct electricity?" },
            { label: "Electrodes", q: "Graphite rods are used as electrodes in electrolysis because they conduct electricity. Why can graphite conduct?" }
          ],
          levels: {
            support: {
              steps: ["Conduction needs charged particles that are free to move.", "Each carbon atom in graphite makes three bonds, using three of its four outer electrons.", "The fourth electron is delocalised: free to move through the layer and carry charge."],
              example: { q: "Why does diamond not conduct electricity?", steps: ["Each carbon atom in diamond makes four bonds, using all four outer electrons.", "There are no delocalised electrons and no ions.", "No charged particles are free to move, so no current can flow."], answer: "Diamond has no delocalised electrons: all four outer electrons of each atom are in bonds." }
            },
            core: { hint: "How many outer electrons does carbon have, and how many does each graphite atom use in bonds?" },
            stretch: { extend: "Graphite conducts electricity along its layers much better than across them. Use the structure to suggest why." }
          },
          why: "One delocalised electron per carbon atom moves through the structure and carries charge.",
          explain: "Say where graphite's free electron comes from."
        },
        {
          title: "Name the structure",
          task: { kind: "match", q: "Match each description to the substance it describes.", pairs: [
            ["Each carbon atom bonded to four others in a rigid three-dimensional network", "diamond"],
            ["Each carbon atom bonded to three others, in flat layers that can slide", "graphite"],
            ["Silicon and oxygen atoms joined in a giant covalent structure", "silicon dioxide"],
            ["Weak forces between small molecules, so a low boiling point", "water"]
          ] },
          levels: {
            support: {
              steps: ["Two of the substances are pure carbon: four bonds means diamond, three bonds and layers means graphite.", "Silicon dioxide is the giant structure that is not carbon.", "The one with molecules and weak forces is the small-molecule substance."],
              example: { q: "Which substance is this: hard, very high melting point, made only of carbon, does not conduct?", steps: ["Made only of carbon: diamond or graphite.", "Does not conduct: not graphite.", "Hard: diamond."], answer: "diamond" }
            },
            core: { hint: "Count the bonds per carbon atom, then look for the one that is not carbon at all." },
            stretch: { extend: "Add a fifth row for a metal such as copper: describe its structure in one sentence and say which of the four substances it most resembles, and why." }
          },
          why: "Four bonds in a rigid network: diamond. Three bonds in sliding layers: graphite. Silicon and oxygen: silicon dioxide. Small molecules with weak forces: water.",
          explain: "Say which single number tells diamond and graphite apart, and what it is counting."
        },
        {
          title: "Diamond and graphite compared",
          task: { kind: "written", q: "Diamond is used in cutting tools; graphite is used as a lubricant and for electrodes. Explain, in terms of structure and bonding, why diamond and graphite have such different properties even though both are made only of carbon atoms.", marks: 6,
            criteria: [
              "Both are giant covalent structures of carbon atoms with strong covalent bonds (so both have very high melting points).",
              "In diamond each carbon atom is bonded to four others in a rigid three-dimensional network.",
              "This makes diamond very hard, so it can cut; it has no free electrons, so it does not conduct.",
              "In graphite each carbon atom is bonded to three others, forming flat layers.",
              "There are only weak forces between the layers, so they slide over each other: graphite is soft and slippery, which makes it a lubricant.",
              "Each carbon atom in graphite has one delocalised electron, free to move and carry charge, so graphite conducts electricity and can be used for electrodes."
            ],
            model: "Diamond and graphite are both giant covalent structures made of carbon atoms, and in both the covalent bonds are strong, which is why both have very high melting points. In diamond, every carbon atom is bonded to four others, making a rigid network in three dimensions. The atoms cannot move past each other, so diamond is extremely hard and is used for cutting. All four outer electrons of each atom are in bonds, so there are no free electrons and diamond does not conduct electricity. In graphite, each carbon atom is bonded to only three others, so the atoms form flat layers. Between the layers there are only weak forces, so the layers slide over each other and graphite is soft and slippery, which is why it works as a lubricant. The fourth outer electron of each carbon atom is delocalised and free to move through the layers, carrying charge, so graphite conducts electricity and can be used as an electrode." },
          levels: {
            support: {
              steps: ["Start with what they have in common: giant covalent structures of carbon, strong bonds, high melting points.", "Diamond: how many bonds per atom, what shape that makes, and which two properties follow (hardness, no conduction).", "Graphite: how many bonds per atom, what shape that makes, and which properties follow (soft and slippery from the layers; conducts from the delocalised electrons)."],
              example: { q: "Explain why silicon dioxide has a very high melting point and does not conduct electricity.", steps: ["Silicon dioxide is a giant covalent structure of silicon and oxygen atoms.", "Many strong covalent bonds must be broken to melt it, which needs a lot of energy.", "All the outer electrons are used in bonds and there are no ions, so no charged particles can move."], answer: "Many strong covalent bonds to break gives a very high melting point; no free electrons or ions means it does not conduct." }
            },
            core: { hint: "Six marks: shared structure; diamond 4 bonds, rigid, hard, no free electrons; graphite 3 bonds, layers slide, delocalised electrons conduct." },
            stretch: { extend: "Graphene is a single layer of graphite. Predict two of its properties from what you know about graphite's layers, and explain each prediction." }
          },
          why: "The difference is the number of bonds per carbon atom. Four bonds give a rigid network and no free electrons; three bonds give sliding layers and one delocalised electron per atom.",
          explain: "Say why graphite's weak forces between layers do not give it a low melting point."
        }
      ]
    },

    /* ───────────── 6 · metals and alloys (nanoparticles: Chemistry only) ───────────── */
    {
      key: "metals-and-alloys", n: 6, title: "Metals and alloys",
      lead: "This chapter explains how the atoms in a metal are held together, why metals conduct and bend, and why mixing in other elements makes an alloy harder. It ends with nanoparticles, which are Chemistry only.",
      covers: [8, 9],
      pretext: {
        words: [
          { word: "metallic bonding", means: "the attraction between metal ions and the free electrons around them", sentence: "Metallic bonding holds the atoms in a copper wire together." },
          { word: "delocalised", means: "not fixed to one atom; free to move through the whole structure", sentence: "The delocalised electrons in a metal carry the electric current." },
          { word: "malleable", means: "able to be hammered or pressed into a new shape without breaking", sentence: "Gold is so malleable it can be beaten into thin sheets." },
          { word: "conductor", means: "a material that lets electricity or heat pass through it", sentence: "Copper is a very good conductor of electricity." },
          { word: "alloy", means: "a mixture of a metal with other elements", sentence: "Steel is an alloy of iron and carbon." }
        ],
        passage: [
          "Metals are made of giant structures of atoms arranged in layers.",
          "Each metal atom lets go of its outer-shell electrons.",
          "The atoms become positive metal ions.",
          "The electrons are free to move through the whole metal.",
          "We call them a sea of delocalised electrons.",
          "The attraction between the positive ions and the electrons is metallic bonding.",
          "It is strong, so most metals have high melting points.",
          "The free electrons carry charge, so metals conduct electricity.",
          "They also carry energy, so metals conduct heat.",
          "The layers of ions can slide over each other.",
          "This is why metals can be bent and hammered into shape.",
          "An alloy is a mixture of a metal with other elements.",
          "The different sized atoms stop the layers sliding, so alloys are harder."
        ]
      },
      sections: [
        {
          heading: "Metallic bonding",
          paragraphs: [
            "A piece of metal is a giant structure of atoms packed closely together in a regular pattern, in layers. Each metal atom gives up the electrons in its outer shell. Those electrons are not transferred to another atom, as in ionic bonding, and not shared between two atoms, as in covalent bonding. Instead they become delocalised: free to move anywhere through the whole structure, like a sea of electrons washing around the atoms.",
            "Once an atom has given up its outer electrons it is a positive metal ion. The structure is therefore a regular lattice of positive ions in a sea of delocalised electrons. The strong electrostatic attraction between the positive ions and the negative electrons is metallic bonding, and it acts throughout the structure.",
            "Because metallic bonding is strong and holds every ion in place, a lot of energy is needed to separate the ions, so most metals have high melting and boiling points. Copper melts at 1085 °C and iron at 1535 °C."
          ],
          worked: {
            q: "Describe the structure and bonding in a metal such as copper.",
            steps: [
              "The metal atoms are arranged in a regular pattern, in layers, in a giant structure.",
              "Each atom gives up its outer-shell electrons, becoming a positive ion.",
              "The electrons are delocalised: free to move through the whole structure.",
              "Strong electrostatic attraction between the positive ions and the delocalised electrons holds the structure together."
            ],
            answer: "A regular lattice of positive metal ions in layers, held together by strong electrostatic attraction to a sea of delocalised electrons."
          },
          tip: "Four words for metallic bonding: ions, layers, delocalised electrons, attraction."
        },
        {
          heading: "Properties of metals",
          paragraphs: [
            "Metals conduct electricity because the delocalised electrons are free to move through the structure and carry charge. They conduct heat for the same reason: the moving electrons carry energy quickly from the hot part of the metal to the cooler part. A saucepan and the wires in a plug both rely on this.",
            "Metals are malleable (they can be hammered into shape) and ductile (they can be drawn out into wires). The ions are arranged in layers, and in a pure metal the layers can slide over one another without breaking the metallic bonding, because the sea of electrons moves with them. The metal changes shape but stays in one piece.",
            "(Higher) Not all metals have the same melting point, and the metallic bonding explains why. Aluminium, in Group 3, gives three electrons per atom to the sea and forms Al³⁺ ions; sodium, in Group 1, gives one electron per atom and forms Na⁺ ions. Aluminium's ions have a bigger charge and there are three times as many delocalised electrons, so the attraction is much stronger and aluminium melts at 660 °C while sodium melts at 98 °C."
          ],
          worked: {
            q: "Aluminium is in Group 3 and sodium is in Group 1. Explain why aluminium has a higher melting point than sodium.",
            steps: [
              "Each aluminium atom gives 3 electrons to the sea of delocalised electrons and forms an Al³⁺ ion; each sodium atom gives 1 and forms Na⁺.",
              "Aluminium has 3 ÷ 1 = 3 times as many delocalised electrons per ion, and its ions carry a bigger charge.",
              "So the electrostatic attraction between the ions and the electrons is stronger in aluminium.",
              "More energy is needed to overcome the stronger attraction, so aluminium's melting point is higher."
            ],
            answer: "Al³⁺ ions with three delocalised electrons each attract more strongly than Na⁺ ions with one, so more energy is needed to melt aluminium.",
            checks: [{ expr: "3 / 1", value: 3, tol: 0 }]
          },
          tip: "Conducts: delocalised electrons move. Bends: layers slide."
        },
        {
          heading: "Alloys",
          paragraphs: [
            "Pure metals are often too soft for the jobs we want them to do. Pure iron bends easily and pure gold scratches. An alloy is a mixture of a metal with one or more other elements, usually other metals or carbon. Steel is iron mixed with a small amount of carbon; bronze is copper and tin; a £1 coin is made from copper, zinc and nickel.",
            "Alloys are harder than pure metals because of the layers. In a pure metal all the ions are the same size, so the layers are regular and slide easily. In an alloy the added atoms are a different size. They distort the layers, so the layers can no longer slide over each other easily, and the alloy is harder and stronger. That is why car wheels and tools are made from alloys rather than pure metals."
          ],
          worked: {
            q: "Explain why steel is harder than pure iron.",
            steps: [
              "Pure iron has layers of iron ions, all the same size, in a regular arrangement.",
              "Those layers can slide over each other easily, so pure iron is soft and bends.",
              "Steel contains carbon atoms, which are a different size from iron ions.",
              "They distort the layers so the layers cannot slide as easily, which makes steel harder."
            ],
            answer: "Carbon atoms of a different size distort the regular layers of iron ions, so the layers cannot slide as easily."
          },
          tip: "Alloy = mixture, not compound. Different sized atoms distort the layers."
        },
        {
          heading: "Nanoparticles (Chemistry only)",
          paragraphs: [
            "This section is Chemistry only: it is examined in GCSE Chemistry (8462) but not in Combined Science. A nanometre, nm, is one billionth of a metre: 1 nm = 1 × 10⁻⁹ m, or 0.000000001 m. A human hair is about 80 000 nm across. Nanoparticles are between 1 nm and 100 nm in size, only a few hundred atoms each, far smaller than the fine dust in smoke but bigger than a single atom.",
            "What makes nanoparticles special is their surface area to volume ratio. For a cube, the surface area is 6 × side × side and the volume is side × side × side. Make the side 10 times smaller and the surface area to volume ratio becomes 10 times bigger. A nanoparticle is nearly all surface, so a tiny mass of material has a huge surface for reactions, which makes nanoparticles useful as catalysts and very reactive.",
            "Nanoparticles of titanium dioxide are used in sunscreens, because they block ultraviolet light while staying invisible on the skin, and in self-cleaning glass, where they break down dirt in sunlight. Silver nanoparticles kill bacteria and are used in wound dressings and on some fridges and clothes. Researchers are testing nanoparticles that carry medicines straight to a tumour. The possible risks are not yet fully understood: nanoparticles can be breathed in or absorbed through the skin, and their long-term effects on health and the environment need more research before some uses are approved."
          ],
          worked: {
            q: "Work out the surface area to volume ratio of a cube with sides of 1 nm and of a cube with sides of 10 nm.",
            steps: [
              "Side 1 nm: surface area = 6 × 1 × 1 = 6; volume = 1 × 1 × 1 = 1; ratio = 6 ÷ 1 = 6.",
              "Side 10 nm: surface area = 6 × 10 × 10 = 600; volume = 10 × 10 × 10 = 1000; ratio = 600 ÷ 1000 = 0.6.",
              "Compare: 6 ÷ 0.6 = 10. The smaller cube's ratio is 10 times bigger."
            ],
            answer: "6 for the 1 nm cube and 0.6 for the 10 nm cube: making the side 10 times smaller makes the ratio 10 times bigger.",
            checks: [{ expr: "6*1*1/(1*1*1)", value: 6, tol: 0 }, { expr: "6*10*10/(10*10*10)", value: 0.6, tol: 0 }, { expr: "6 / 0.6", value: 10, tol: 1e-9 }]
          },
          tip: "Chemistry only. Side ÷ 10 means surface area to volume ratio × 10."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is metallic bonding?", options: ["The attraction between positive metal ions and a sea of delocalised electrons", "The sharing of pairs of electrons between metal atoms", "The transfer of electrons from a metal atom to a non-metal atom", "Weak forces between layers of metal atoms"], answer: 0, why: "In a metal the outer electrons are delocalised. The strong attraction between the positive ions left behind and those electrons is metallic bonding.",
          feedback: [
            "",
            "Sharing pairs of electrons is covalent bonding, between non-metal atoms. In a metal the outer electrons are not shared between two atoms; they are delocalised through the whole structure and attract the positive ions.",
            "Transfer of electrons to a non-metal is ionic bonding. In a pure metal there is no non-metal: the electrons leave the atoms but stay in the structure as a delocalised sea.",
            "Metallic bonding is strong, which is why most metals have high melting points. It is the attraction between the positive ions and the delocalised electrons, not a weak force."
          ] },
        { kind: "gap", q: "Metals can be bent and shaped because the layers of ions can ___ over each other.", answer: "slide", options: ["slide", "break", "bond"], why: "The regular layers of ions in a pure metal slide over one another, so the metal changes shape without breaking.",
          feedback: {
            "break": "If the layers broke apart the metal would snap. Metals bend without breaking because the layers slide over each other while the delocalised electrons keep holding them together.",
            "bond": "The layers are already held together by metallic bonding. Bending works because the layers can slide past each other, not because new bonds form."
          } },
        { kind: "mcq", q: "What is an alloy?", options: ["A mixture of a metal with one or more other elements", "A compound of two metals joined by covalent bonds", "A pure metal that has been heated and cooled", "A metal coated in a layer of plastic"], answer: 0, why: "An alloy is a mixture, not a compound: a metal with other elements mixed in, such as iron with carbon in steel.",
          feedback: [
            "",
            "Metals do not form covalent bonds with each other, and an alloy is not a compound at all. It is a mixture of a metal with other elements.",
            "Heating and cooling a pure metal leaves it a pure metal. An alloy has other elements mixed in, which is what changes its properties.",
            "A coating sits on the surface. An alloy is mixed all the way through: a metal with other elements among its atoms."
          ] }
      ],
      modules: [
        {
          title: "Why metals conduct",
          task: { kind: "mcq", q: "Why do metals conduct electricity?", options: ["Delocalised electrons are free to move through the structure and carry charge", "The metal ions are free to move and carry charge", "The layers of ions slide and carry the current along", "Metals contain molecules that pass electrons from one to the next"], answer: 0, why: "The outer electrons of the metal atoms are delocalised. They move freely through the lattice of positive ions and carry the charge.",
            feedback: [
              "",
              "The metal ions are fixed in their layers; they only vibrate. It is the delocalised electrons that move through the structure and carry the charge. Moving ions carry current in molten salt, not in a metal.",
              "Sliding layers explain why a metal can be bent, not why it conducts. The current is carried by the delocalised electrons moving through the structure.",
              "Metals are giant structures of ions, not molecules, and substances made of molecules do not conduct. The charge carriers in a metal are the delocalised electrons."
            ] },
          contexts: [
            { label: "House wiring", q: "The wires inside the walls of a house are made of copper. Why can copper conduct electricity?" },
            { label: "Power lines", q: "Overhead power lines are made of aluminium. Why can aluminium conduct electricity?" }
          ],
          levels: {
            support: {
              steps: ["Conduction needs charged particles that are free to move.", "In a metal the ions are fixed in layers, so it is not them.", "The outer electrons have left the atoms and are delocalised: they move and carry charge."],
              example: { q: "Why does a copper saucepan conduct heat well?", steps: ["The delocalised electrons are free to move through the copper.", "They move quickly from the hot base and carry energy with them.", "The energy is transferred through the pan."], answer: "Delocalised electrons move through the metal and carry energy from the hot part to the cooler part." }
            },
            core: { hint: "Which particles in a metal are free to move: the ions or the electrons?" },
            stretch: { extend: "Graphite and copper both conduct because of delocalised electrons. Compare where those electrons come from in each structure, and explain why graphite is not a metal." }
          },
          why: "Delocalised electrons move freely through the metal and carry the charge.",
          explain: "Say why the metal ions themselves cannot carry the current in a solid wire."
        },
        {
          title: "Harder than the pure metal",
          task: { kind: "written", q: "Steel is an alloy of iron with a small amount of carbon. Explain why steel is harder than pure iron.", marks: 3,
            criteria: [
              "In pure iron the ions are all the same size and arranged in regular layers that can slide over each other easily.",
              "Carbon atoms are a different size from iron ions, so they distort the layers.",
              "The layers can no longer slide over each other easily, so steel is harder."
            ],
            model: "Pure iron is made of layers of iron ions that are all the same size, so the layers are regular and can slide over one another easily, which makes pure iron soft. In steel, carbon atoms are mixed in with the iron. They are a different size, so they distort the regular layers. The distorted layers cannot slide over each other as easily, so steel is harder than pure iron." },
          levels: {
            support: {
              steps: ["Describe the layers in the pure metal and what they can do (slide).", "Say what is different about the added atoms (their size).", "Say what the different size does to the layers, and what that does to the hardness."],
              example: { q: "Explain why bronze, an alloy of copper and tin, is harder than pure copper.", steps: ["Pure copper has regular layers of copper ions that slide easily.", "Tin atoms are a different size from copper ions.", "They distort the layers so the layers cannot slide easily, making bronze harder."], answer: "Tin atoms of a different size distort the layers of copper ions so they cannot slide easily." }
            },
            core: { hint: "Three marks: regular layers slide; different sized atoms; layers distorted so they cannot slide." },
            stretch: { extend: "Suggest why adding too much carbon to iron can make the steel brittle rather than just harder, using the same picture of layers." }
          },
          why: "Different sized atoms distort the regular layers of the pure metal, so the layers cannot slide as easily and the alloy is harder.",
          explain: "Say why the layers in a pure metal slide so easily in the first place."
        },
        {
          title: "Surface area to volume (Chemistry only)",
          task: { kind: "numeric", q: "Chemistry only. A cube-shaped nanoparticle has sides of 2 nm. Work out its surface area to volume ratio (surface area ÷ volume). Give the number only.", answer: 3, tolerance: 0, units: "", check: "6*2*2/(2*2*2)", why: "Surface area = 6 × 2 × 2 = 24 nm². Volume = 2 × 2 × 2 = 8 nm³. Ratio = 24 ÷ 8 = 3. The answer is exact.",
            misconceptions: [
              { answer: 24, check: "6*2*2", says: "That is the surface area, 24 nm². The question asks for the ratio: divide by the volume, 8 nm³, to get 3." },
              { answer: 8, check: "2*2*2", says: "That is the volume, 8 nm³. The ratio is surface area ÷ volume = 24 ÷ 8 = 3." },
              { answer: 0.33, check: "(2*2*2)/(6*2*2)", says: "You divided the wrong way up, volume ÷ surface area. The ratio asked for is surface area ÷ volume = 24 ÷ 8 = 3." }
            ] },
          contexts: [
            { label: "Sunscreen", q: "Chemistry only. A cube-shaped titanium dioxide nanoparticle in a sunscreen has sides of 2 nm. Work out its surface area to volume ratio (surface area ÷ volume). Give the number only." },
            { label: "Wound dressing", q: "Chemistry only. A cube-shaped silver nanoparticle in a wound dressing has sides of 2 nm. Work out its surface area to volume ratio (surface area ÷ volume). Give the number only." }
          ],
          levels: {
            support: {
              steps: ["Surface area of a cube = 6 × side × side.", "Volume of a cube = side × side × side.", "Ratio = surface area ÷ volume."],
              example: { q: "A cube has sides of 3 nm. Work out its surface area to volume ratio.", steps: ["Surface area = 6 × 3 × 3 = 54.", "Volume = 3 × 3 × 3 = 27.", "Ratio = 54 ÷ 27 = 2."], answer: "2", checks: [{ expr: "6*3*3/(3*3*3)", value: 2, tol: 0 }] }
            },
            core: { hint: "Six faces, each side × side. Then divide by side × side × side." },
            stretch: { extend: "Show that for any cube the ratio is 6 ÷ side, and use this to explain why nanoparticles are so much more reactive than the same material in larger pieces." }
          },
          why: "24 ÷ 8 = 3. For any cube the ratio is 6 ÷ side, so smaller particles have a bigger ratio.",
          explain: "Say why a smaller particle has a bigger surface area to volume ratio, using the cube as your example."
        }
      ]
    }
  ],

  sources: {
    deckDump: "sc_ks4_chem_c3_structure_and_bonding.txt",
    decksUsed: [
      "3.1 States of matter 3.2 Atoms into ions 2018.pptx",
      "3.3 Ionic bonding 3.4 Giant ionic structures 2018.pptx",
      "3.5 - 3.7 Covalent bonding, simple and giant structures 2018.pptx",
      "3.9 Metallic bonding and structures.pptx",
      "3.11 Nanoparticles and application.pptx",
      "Ionic-Bonding-Dot-and-Cross-Worksheet.pptx"
    ],
    notes: "Sequence, lesson titles, learning outcomes, key words, the examples (Na/Cl, Li/F, Mg/O, Al₂O₃, H₂ Cl₂ O₂ N₂ HCl H₂O NH₃ CH₄, diamond/graphite/silicon dioxide, steel, Al vs Na) and the melting/boiling data (water, ethanol, mercury, hydrogen, iron, NaCl 801 °C, CaO 2572 °C, Na₂O 1132 °C) are from the five teaching decks and the dot-and-cross worksheet. All questions are original; no answer slide, mark scheme or past-paper wording was copied. The nanoparticles lesson is Chemistry-only (8462) and is marked as such wherever it appears. Lesson 3.8 (graphene and fullerenes), which is on 8464, is not in the dump and is not taught here. See NOTES.md for deck statements corrected and open questions."
  }
};
