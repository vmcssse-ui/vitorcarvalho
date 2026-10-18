// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 Geography · Year 8 Unit 2 · Tectonic Processes (foundations for AQA GCSE Geography 8035,
// 3.1.1 The challenge of natural hazards: tectonic hazards) · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression) and are recomputed; their misconceptions carry `check` too.
//   every number that appears in pupil-facing text is matched against the FACTS table held in verify.py (deck-only facts).
//   every "order" task is compared with the canonical sequences held in verify.py; every match task with canonical pairs.
//   every mcq / gap answer is compared with the independent answer key held in verify.py.
//   passage sentences are counted (8–14 per chapter, ≤ 20 words each) and all text is linted for known misconceptions
//   (lava/magma swapped, "plates float on the core", "earthquakes only at boundaries", carbon dating of rocks, American spelling).
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions`; every module carries
//   `explain`; one module per chapter carries `contexts` that never redefine the answer; `connections` ⊂ glossary;
//   no `pretext.l1`, no `meta.constellation`, no widget (no plate-boundary widget exists yet; diagrams are described in words).
// No text is quoted from any source: there are no “…” quotations anywhere in this file (verify.py fails if one appears).
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["geog-tectonics"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "geog-tectonics",
    subjectKey: "geography",
    subject: "Geography",
    board: "AQA",
    spec: "KS3 → 8035",
    specRef: "KS3 Year 8 Unit 2: Tectonic Processes — foundations for AQA GCSE Geography 8035, 3.1.1 The challenge of natural hazards (tectonic hazards: plate tectonics theory, plate margins, earthquakes, living with the risk)",
    year: 8,
    tier: "KS3",
    title: "Tectonic Processes",
    sub: "From the hot centre of the Earth to the shaking ground above it: how moving plates make earthquakes and volcanoes, and why people still live beside them.",
    bigQuestion: "What moves the ground beneath our feet, where do earthquakes and volcanoes happen, and why do millions of people choose to live near them?",
    lessonCount: 5,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  // The department's own lesson sequence. Lessons 1 and 2 have a deck each; lessons 3, 4 and 5 share one deck
  // (Tectonic processes_Year8_Lesson345.pptx), whose title slide names lessons 3 and 4 and whose last slides teach lesson 5.
  lessons: [
    { n: 1, title: "Structure of the Earth: layers, two types of crust, lava and magma, convection currents", question: "What is the Earth made of, and how do convection currents in the mantle move its plates?", keywords: ["crust", "mantle", "core", "magma", "lava", "convection current"] },
    { n: 2, title: "Plate tectonic theory: tectonic plates and plate boundaries", question: "Where are earthquakes and volcanoes in the world, and why do they occur in these places?", keywords: ["Alfred Wegener", "tectonic plate", "constructive", "destructive", "conservative", "collision"] },
    { n: 3, title: "What is an earthquake? What is a tsunami?", question: "What is an earthquake, where do earthquakes happen, and why do they happen there?", keywords: ["focus", "epicentre", "seismic waves", "magnitude", "Richter scale", "tsunami"] },
    { n: 4, title: "Case study: the Sichuan earthquake, 2008 (an NEE)", question: "What caused the Sichuan earthquake, what were its effects, and how did people respond?", keywords: ["case study", "NEE", "social, economic and environmental effects", "response"] },
    { n: 5, title: "Living in the shadow of volcanoes: Vesuvius, Hawaii and Iceland", question: "If volcanoes are so dangerous, why do people live near them?", keywords: ["fertile soil", "geothermal energy", "tourism", "hot spot"] }
  ],

  glossary: [
    { term: "crust", means: "The thin, solid outer layer of the Earth. We live on it.", chapter: "inside-the-earth" },
    { term: "mantle", means: "The thick layer of very hot rock under the crust. It moves very slowly.", chapter: "inside-the-earth" },
    { term: "core", means: "The centre of the Earth, with an outer core and an inner core. It is the hottest part.", chapter: "inside-the-earth" },
    { term: "magma", means: "Melted rock that is still under the ground.", chapter: "inside-the-earth" },
    { term: "convection current", means: "The slow movement of hot mantle rock: it rises, spreads out, cools and sinks. This drags the plates along.", chapter: "inside-the-earth" },
    { term: "tectonic plate", means: "One of the huge pieces that the Earth's crust is broken into. The plates move very slowly.", chapter: "moving-plates" },
    { term: "Pangaea", means: "The name for all the land on Earth when it was joined together as one piece, long ago.", chapter: "moving-plates" },
    { term: "plate boundary", means: "The place where two plates meet. Also called a plate margin. Earthquakes and volcanoes happen here.", chapter: "moving-plates" },
    { term: "constructive", means: "A boundary where two plates move apart. Magma rises and makes new crust.", chapter: "plate-boundaries" },
    { term: "destructive", means: "A boundary where two plates move towards each other. One is forced under the other and destroyed.", chapter: "plate-boundaries" },
    { term: "conservative", means: "A boundary where two plates slide past each other along a fault. The plates are not changed.", chapter: "plate-boundaries" },
    { term: "collision", means: "A boundary where two continental plates meet head on and the land is pushed upwards into mountains.", chapter: "plate-boundaries" },
    { term: "focus", means: "The point deep underground where an earthquake starts.", chapter: "earthquakes" },
    { term: "epicentre", means: "The point on the surface directly above the focus. The shaking is strongest here.", chapter: "earthquakes" },
    { term: "magnitude", means: "How strong an earthquake is.", chapter: "earthquakes" },
    { term: "aftershock", means: "A smaller earthquake that comes after the main, large one.", chapter: "earthquakes" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 glossary terms used exactly once. "Convection current" is taught in
  // chapter 1 but belongs with the moving-plates group: it is the engine that moves them.
  connections: [
    { group: "Inside the Earth", terms: ["crust", "mantle", "core", "magma"] },
    { group: "Moving plates", terms: ["tectonic plate", "Pangaea", "plate boundary", "convection current"] },
    { group: "Types of plate boundary", terms: ["constructive", "destructive", "conservative", "collision"] },
    { group: "Earthquake words", terms: ["focus", "epicentre", "magnitude", "aftershock"] }
  ],

  chapters: [
    /* ───────────── 1 · inside the Earth ───────────── */
    {
      key: "inside-the-earth", n: 1, title: "Inside the Earth",
      lead: "How old the Earth is, what its layers are made of, and why the rock deep inside it never stops moving.",
      covers: [1],
      pretext: {
        words: [
          { word: "crust", means: "the thin, solid outer layer of the Earth", sentence: "We live on the crust, the thin outer layer of the Earth." },
          { word: "mantle", means: "the thick layer of very hot rock under the crust", sentence: "The mantle is so hot that its rock moves very slowly." },
          { word: "core", means: "the centre of the Earth, the hottest part", sentence: "The core is at the very centre of the Earth." },
          { word: "magma", means: "melted rock that is still under the ground", sentence: "Magma is melted rock that has not reached the surface yet." },
          { word: "lava", means: "melted rock that has come out onto the surface", sentence: "Lava poured down the side of the volcano." },
          { word: "convection current", means: "the slow rising, spreading, cooling and sinking of hot rock", sentence: "A convection current in the mantle drags the plates along." }
        ],
        passage: [
          "The Earth is about 4.54 billion years old.",
          "Scientists work this out by studying rocks.",
          "The Earth is made of layers, a bit like an onion.",
          "The thin outer layer is the crust, and we live on it.",
          "Under the crust is the mantle, a thick layer of very hot rock.",
          "At the centre is the core, which has an outer part and an inner part.",
          "The core is the hottest part of the Earth.",
          "Melted rock under the ground is called magma.",
          "When magma comes out at the surface, we call it lava.",
          "Heat from the core makes the rock in the mantle move very slowly.",
          "Hot rock rises, spreads out, cools and sinks again.",
          "These slow movements are called convection currents.",
          "They drag the pieces of crust above them along, a few centimetres a year."
        ]
      },
      sections: [
        {
          heading: "How old is the Earth?",
          paragraphs: [
            "How old is the Earth? For most of history people could only guess. Today scientists put the answer at about 4.54 billion years. That is 4,540 million years, far longer than any human mind can picture.",
            "The evidence comes from rocks. Rocks form in layers over huge stretches of time, and by studying those layers scientists have built up a geological timescale, a kind of calendar of the Earth's past. Rocks also hold tiny clues inside them that let scientists measure their age.",
            "That raises a harder question. If the Earth is so old, what has changed in all that time? The answer, as this unit will show, is almost everything: the oceans, the continents and even the mountains have moved."
          ],
          tip: "Billion and million are easy to mix up. One billion is one thousand million, so 4.54 billion years is 4,540 million years."
        },
        {
          heading: "The layers of the Earth",
          paragraphs: [
            "The Earth is not the same all the way through. It is made of layers. The outside layer is the crust: the solid rock we live on. Compared with the whole Earth it is very thin, like the shell of an egg.",
            "Under the crust is the mantle. This is a very thick layer of hot rock. It is mostly solid, but it is so hot that over long periods it can flow very slowly, like thick treacle. Below the mantle is the core, which has two parts: the outer core and the inner core. The core is the hottest part of the Earth.",
            "Nobody has ever seen these layers. The deepest hole people have drilled only scratches the crust. Scientists know about the mantle and the core from the way earthquake waves travel through the Earth and from rocks that volcanoes bring up from deep down."
          ],
          worked: {
            q: "Describe the structure of the Earth. (3 marks)",
            steps: [
              "Start at the outside and work inwards, so the order is clear.",
              "Name each layer and say one thing about it: the crust is the thin, solid outer layer; the mantle is the thick layer of hot rock under the crust.",
              "Finish at the centre: the core, with an outer core and an inner core, is the hottest part."
            ],
            answer: "The Earth has three main layers. The crust is the thin, solid outer layer we live on. Under it is the mantle, a thick layer of very hot rock that moves slowly. At the centre is the core, made of an outer core and an inner core, which is the hottest part of the Earth."
          }
        },
        {
          heading: "Two kinds of crust",
          paragraphs: [
            "The crust is not all the same. There are two kinds. Oceanic crust is the crust under the oceans. Continental crust is the crust that makes up the land, the continents.",
            "The two behave differently. Oceanic crust is thinner and denser (heavier for its size). Continental crust is thicker and less dense. This difference matters in Chapter 3, because when the two kinds meet, it is the denser oceanic crust that is forced down.",
            "Most tectonic plates carry some of each: a continent and the ocean floor around it. The Pacific Plate is the exception. It is almost all oceanic crust."
          ],
          tip: "Oceanic: thin, dense, under the sea. Continental: thick, less dense, makes the land."
        },
        {
          heading: "Magma, lava and convection currents",
          paragraphs: [
            "Deep in the Earth, rock gets hot enough to melt. Melted rock that is still underground is called magma. When magma reaches the surface and pours out of a volcano, we call it lava. Same stuff, different place.",
            "The heat of the core does something else. It warms the rock at the bottom of the mantle, and hot rock is less dense, so it slowly rises. Near the top of the mantle it spreads out sideways, cools, becomes denser and sinks back down. Then it is warmed again and the loop repeats. This slow loop is called a convection current.",
            "You can see the same thing in a pan of soup on a hob: the hot soup rises in the middle, spreads to the edges, cools and sinks. In the mantle the loop takes millions of years, but it is strong enough to drag the pieces of crust above it along. That is what moves the tectonic plates, and it is why the Earth has earthquakes and volcanoes."
          ],
          tip: "Magma is underground; lava is on the surface. If you can see it, it is lava."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which layer of the Earth is the thin, solid outer layer that we live on?", options: ["Crust", "Mantle", "Outer core", "Inner core"], answer: 0, why: "The crust is the thin outer layer of solid rock. The mantle and the two parts of the core lie underneath it.",
          feedback: [
            "",
            "The mantle is the thick layer of hot rock under the crust, not the surface we stand on. The outer layer we live on is the crust.",
            "The outer core is deep inside the Earth, below the mantle. The word outer only means it is outside the inner core. We live on the crust.",
            "The inner core is at the very centre of the Earth and is the hottest part. The thin outer layer we live on is the crust."
          ] },
        { kind: "gap", q: "Melted rock that is still under the ground is called ___.", answer: "magma", options: ["magma", "lava", "crust"], why: "Magma is melted rock underground. Once it comes out at the surface it is called lava.",
          feedback: {
            "lava": "Lava is the name for melted rock once it has come out onto the surface, for example from a volcano. While it is still underground the same melted rock is called magma.",
            "crust": "The crust is the solid outer layer of the Earth, not melted rock. Melted rock that is still underground is magma."
          } },
        { kind: "numeric", q: "The Earth is about 4.54 billion years old. Write this age in millions of years.", answer: 4540, tolerance: 0, units: "million years", check: "4.54*1000", why: "One billion is one thousand million, so 4.54 billion is 4.54 × 1,000 = 4,540 million.",
          misconceptions: [
            { answer: 454, check: "4.54*100", says: "That is 4.54 × 100. One billion is a thousand million, not a hundred million, so multiply by 1,000: 4,540 million years." },
            { answer: 45400, check: "4.54*10000", says: "That is 4.54 × 10,000, which is ten times too big. One billion is one thousand million, so 4.54 billion is 4,540 million." },
            { answer: 4.54, check: "4.54", says: "You have written the number in billions again. The question asks for millions: 4.54 billion is 4.54 × 1,000 = 4,540 million years." }
          ] }
      ],
      modules: [
        {
          title: "Layer by layer",
          task: {
            kind: "order",
            q: "Put the Earth's layers in order, starting from the surface and going down to the centre.",
            items: ["Crust", "Mantle", "Outer core", "Inner core"]
          },
          contexts: [
            { label: "A drill", q: "Imagine a drill that could go all the way from the surface to the centre of the Earth. Put the layers in the order the drill would reach them." },
            { label: "A labelled diagram", q: "A diagram of the Earth is cut in half like an apple. Put the labels in order from the outside edge to the middle." },
            { label: "A journey", q: "A story character travels down through the Earth to its centre. Put the layers in the order the character passes through them." }
          ],
          levels: {
            support: {
              steps: [
                "Start with the layer you are standing on. That is the outside.",
                "The next layer down is the thick layer of hot rock.",
                "The core comes last, and it has two parts. The outer part is reached before the inner part.",
                "Check: the hottest part, the inner core, should be at the very end."
              ],
              example: {
                q: "Put the parts of a boiled egg in order from the outside to the middle: yolk, shell, white.",
                steps: ["The shell is on the outside, so it comes first.", "The white is under the shell.", "The yolk is in the middle, so it comes last."],
                answer: "shell, white, yolk"
              }
            },
            core: { hint: "Outside to centre: the layer you live on first, the hottest layer last. Outer comes before inner." },
            stretch: { extend: "Explain why the crust is often compared to the shell of an egg, and say one way the comparison is not quite right." }
          },
          explain: "Say, in one sentence, how you knew which part of the core comes first.",
          why: "From the surface down: the crust (thin, solid), the mantle (thick, hot rock), the outer core and then the inner core at the centre."
        },
        {
          title: "Magma or lava?",
          task: {
            kind: "mcq",
            q: "Which statement about magma and lava is correct?",
            options: [
              "Magma is melted rock underground; lava is melted rock that has reached the surface",
              "Lava is melted rock underground; magma is melted rock that has reached the surface",
              "Magma and lava are two names for the solid rock of the crust",
              "Lava is the hot rock found in the Earth's core"
            ],
            answer: 0,
            feedback: [
              "",
              "You have the two words the right way round in meaning but swapped the names. Melted rock underground is magma; once it comes out at the surface it is called lava.",
              "Neither word means solid rock. Magma and lava are both melted rock; the difference is only where the melted rock is, underground or at the surface.",
              "Lava is melted rock that has come out onto the surface from a volcano. The core is deep inside the Earth and its hot rock is not called lava."
            ]
          },
          levels: {
            support: {
              steps: [
                "Both words mean melted rock. The difference is where the melted rock is.",
                "Ask: has it come out at the surface yet?",
                "Underground means magma. At the surface means lava.",
                "Pick the option that puts magma underground and lava on the surface."
              ],
              example: {
                q: "Water falls as rain, then collects in a lake. Is it still called rain once it is in the lake?",
                steps: ["It is the same water, but the name depends on where it is.", "Falling from the sky it is rain; sitting in the lake it is lake water.", "Magma and lava work the same way: same melted rock, different place."],
                answer: "No. The water is the same, but the name changes with the place, just as magma becomes lava when it reaches the surface."
              }
            },
            core: { hint: "Same melted rock, different place. Which place goes with which word?" },
            stretch: { extend: "A volcano erupts and the lava cools into solid rock. Explain, in two sentences, what that rock was before the eruption and where it came from." }
          },
          explain: "Say, in one sentence, the one difference between magma and lava.",
          why: "Magma and lava are the same melted rock. Underground it is magma; once it reaches the surface it is lava."
        },
        {
          title: "What moves the plates?",
          task: {
            kind: "written",
            q: "Explain how convection currents in the mantle move the Earth's tectonic plates. (4 marks)",
            marks: 4,
            criteria: [
              "Says where the heat comes from: the core heats the rock at the bottom of the mantle",
              "Describes the loop: hot rock rises, spreads out near the top, cools and sinks, then is heated again",
              "Links the loop to the plates: the moving mantle rock drags the plates above it along",
              "Uses the key words mantle, convection current and tectonic plate correctly"
            ],
            model: "Heat from the core warms the rock at the bottom of the mantle. The hot rock is less dense, so it slowly rises towards the crust. Near the top of the mantle it spreads out sideways, cools, becomes denser and sinks back down, where it is heated again. This slow loop is a convection current. As the mantle rock moves sideways under the crust, it drags the tectonic plates above it along, so the plates move very slowly across the Earth's surface."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: where does the heat come from? Name the core.",
                "Sentences 2 and 3: describe the loop in order. Rises, spreads out, cools, sinks.",
                "Sentence 4: say what the moving rock does to the plates above it. Use the word drag.",
                "Read it back and check you have used mantle, convection current and tectonic plate."
              ],
              example: {
                q: "Explain how a radiator warms a whole room, not just the air next to it. (3 marks)",
                steps: ["Say where the heat comes from: the radiator warms the air touching it.", "Describe the loop: warm air rises, spreads across the ceiling, cools and sinks on the far side.", "Finish: the loop keeps going, so warm air is carried around the whole room."],
                answer: "The radiator heats the air next to it. Warm air is less dense, so it rises, spreads across the ceiling, cools and sinks on the far side of the room, then flows back to be heated again. This convection current carries warmth around the whole room."
              }
            },
            core: { hint: "Four steps: heat source, rising, spreading and sinking, and what that does to the plates." },
            stretch: { extend: "Convection currents in the mantle move at only a few centimetres a year. Explain why that is still fast enough to have moved whole continents over the age of the Earth." }
          },
          explain: "Say, in one sentence, why hot mantle rock rises and cool mantle rock sinks.",
          why: "A full answer names the core as the heat source, describes the rise, spread, cool and sink loop, and then links that loop to the plates being dragged along above it."
        }
      ]
    },

    /* ───────────── 2 · moving plates ───────────── */
    {
      key: "moving-plates", n: 2, title: "Plates that move: Wegener's big idea",
      lead: "Alfred Wegener's theory of plate tectonics, the seven major plates, and why earthquakes and volcanoes line up along their edges.",
      covers: [2],
      pretext: {
        words: [
          { word: "tectonic plate", means: "one of the huge pieces that the Earth's crust is broken into", sentence: "Each tectonic plate moves a few centimetres every year." },
          { word: "theory", means: "a big idea that explains the evidence and can be tested", sentence: "Wegener's theory explained why the continents fit together." },
          { word: "continent", means: "one of the seven great areas of land on Earth", sentence: "Africa is a continent, and so is Europe." },
          { word: "Pangaea", means: "the name for all the land when it was joined as one piece", sentence: "Long ago all the continents were joined together as Pangaea." },
          { word: "evidence", means: "facts that support an idea", sentence: "The jigsaw fit of the coastlines was Wegener's first piece of evidence." }
        ],
        passage: [
          "Look at a map of the world.",
          "The east coast of South America and the west coast of Africa seem to fit together.",
          "A scientist called Alfred Wegener noticed this.",
          "In 1912 he said the continents had once been joined together.",
          "He called this one great piece of land Pangaea.",
          "He also noticed that the same kinds of living things are found on different continents.",
          "Those continents are now separated by wide oceans.",
          "Hardly anyone believed him until the 1950s.",
          "Today we know he was right.",
          "The Earth's crust is broken into huge pieces called tectonic plates.",
          "There are seven major plates and some smaller ones.",
          "The plates move towards each other, away from each other, or side by side.",
          "Where two plates meet is called a plate boundary.",
          "Nearly all earthquakes and volcanoes happen along plate boundaries."
        ]
      },
      sections: [
        {
          heading: "Alfred Wegener's idea",
          paragraphs: [
            "In 1912 a German scientist named Alfred Wegener put forward a bold idea. He said that the continents are not fixed in place. Long ago they were all joined together in one giant piece of land, which we now call Pangaea, and since then they have slowly drifted apart.",
            "He had two main pieces of evidence. First, the shapes of the continents seem to fit together like pieces of a jigsaw, especially South America and Africa. Second, the same kinds of plants and animals are found on continents that are now separated by wide oceans. How could they have crossed, unless the land was once joined?",
            "Hardly anyone believed him. Scientists could not see what could possibly move a whole continent. It was not until the 1950s, when new evidence came from the ocean floor, that his idea was accepted. Today it is the theory of plate tectonics, and it explains where earthquakes and volcanoes happen."
          ],
          worked: {
            q: "Give two pieces of evidence that Wegener used to support his idea that the continents were once joined. (2 marks)",
            steps: [
              "Think of the map: what did he notice about the shapes of the coastlines?",
              "Think of living things: what did he notice about where the same species are found?",
              "Write each piece of evidence as a full sentence, and say what it suggests."
            ],
            answer: "First, the coastlines of continents such as South America and Africa fit together like jigsaw pieces, which suggests they were once joined. Second, the same species are found on continents now separated by oceans, which suggests the land was once connected so living things could spread."
          }
        },
        {
          heading: "The seven major plates",
          paragraphs: [
            "The Earth's crust is broken into huge pieces called tectonic plates. They fit together like an uneven jigsaw. There are seven major plates: the North American, South American, Eurasian, African, Indo-Australian, Pacific and Antarctic plates. There are also a number of smaller, minor plates.",
            "Most plates carry a continent and some of the ocean floor around it, so they are made of both continental and oceanic crust. The Pacific Plate is different: it is almost entirely oceanic crust, under the Pacific Ocean.",
            "The plates sit on the slowly moving mantle and are dragged along by its convection currents (Chapter 1). They move only a few centimetres a year, about as fast as your fingernails grow, but over millions of years that adds up to thousands of kilometres."
          ],
          tip: "To remember the seven: two Americas, Eurasian, African, Indo-Australian, Pacific, Antarctic. Six carry continents; the Pacific is the ocean one."
        },
        {
          heading: "Where do earthquakes and volcanoes happen?",
          paragraphs: [
            "Where two plates meet is called a plate boundary, or plate margin. The plates can move towards each other, away from each other, or slide side by side. Each kind of movement does something different to the crust, and that is what makes tectonic hazards: earthquakes and volcanoes.",
            "Put the world's volcanoes on a map as red dots and a pattern jumps out. Nearly all of them lie along the plate boundaries, in long, narrow belts. Earthquakes follow the same lines. Far from the boundaries, in the middle of a plate, both are rare.",
            "So if you know where the plate boundaries are, you know where most tectonic hazards will be. The kind of hazard depends on how the plates are moving at that boundary, which is the subject of Chapter 3."
          ],
          tip: "Volcano map question? Answer in two parts: where (along plate boundaries, in narrow belts) and why (plates meeting and moving there)."
        }
      ],
      gate: [
        { kind: "numeric", q: "How many major tectonic plates are there?", answer: 7, tolerance: 0, units: "plates", check: "7", why: "There are seven major plates: North American, South American, Eurasian, African, Indo-Australian, Pacific and Antarctic.",
          misconceptions: [
            { answer: 4, check: "4", says: "Four is the number of types of plate boundary (constructive, destructive, conservative, collision), not the number of major plates. There are seven major plates." },
            { answer: 8, check: "7+1", says: "You may have counted the Indian and Australian parts as two plates. In this unit they are one plate, the Indo-Australian Plate, so there are seven major plates." },
            { answer: 11, check: "7+4", says: "Eleven is the number of continents and oceans you labelled in the recall task. The major plates are different: there are seven." }
          ] },
        { kind: "mcq", q: "Who first put forward the theory of plate tectonics, in 1912?", options: ["Alfred Wegener", "Charles Darwin", "Isaac Newton", "Marie Curie"], answer: 0, why: "Alfred Wegener suggested in 1912 that the continents had once been joined and had drifted apart.",
          feedback: [
            "",
            "Charles Darwin worked on how living things change over time, not on moving continents. Wegener did use evidence from living things, but the theory was his, put forward in 1912.",
            "Isaac Newton worked on gravity and motion, long before anyone thought the continents could move. Plate tectonics was first proposed by Alfred Wegener in 1912.",
            "Marie Curie worked on radioactivity, not on the Earth's crust. The scientist who proposed that the continents were once joined was Alfred Wegener, in 1912."
          ] },
        { kind: "gap", q: "The name for all the land on Earth when it was joined together as one piece is ___.", answer: "Pangaea", options: ["Pangaea", "Eurasia", "Antarctica"], why: "Pangaea is the name given to the single landmass that later split into today's continents.",
          feedback: {
            "Eurasia": "Eurasia is the name for Europe and Asia together, which are joined today. The single piece of land that held all the continents long ago is called Pangaea.",
            "Antarctica": "Antarctica is one of today's seven continents, the one around the South Pole. The name for all the land when it was joined together is Pangaea."
          } }
      ],
      modules: [
        {
          title: "A long wait",
          task: {
            kind: "numeric",
            q: "Wegener shared his idea in 1912. Most scientists did not accept it until the 1950s. Taking 1950 as the earliest year of acceptance, how many years did his idea wait?",
            answer: 38, tolerance: 0, units: "years", check: "1950-1912",
            misconceptions: [
              { answer: 50, check: "50", says: "You have taken the 1950s to mean fifty years. The question asks how many years passed from 1912 to 1950, which is 1950 − 1912 = 38 years." },
              { answer: 28, check: "1940-1912", says: "That is 1940 − 1912. Check the second year: it is 1950, so the answer is 1950 − 1912 = 38 years." },
              { answer: 48, check: "1960-1912", says: "That is 1960 − 1912. The question says to take 1950 as the year of acceptance, so it is 1950 − 1912 = 38 years." }
            ],
            why: "1950 − 1912 = 38. Wegener's idea waited at least 38 years to be accepted."
          },
          contexts: [
            { label: "A scientist's age", q: "A geographer was born in 1912, the year Wegener shared his idea. How old was she in 1950, when scientists began to accept it?", check: "1950-1912" },
            { label: "A map", q: "A school atlas printed in 1912 showed fixed continents. A new atlas printed in 1950 showed moving plates. How many years apart were the two atlases printed?", check: "1950-1912" },
            { label: "A museum", q: "A museum display about Wegener covers the years 1912 to 1950, from his idea to its acceptance. How many years does the display cover?", check: "1950-1912" }
          ],
          levels: {
            support: {
              steps: [
                "Write down the two years: the idea in 1912, acceptance in 1950.",
                "The number of years between them is the later year take away the earlier year.",
                "Work out 1950 − 1912. Try 1950 − 1900 = 50, then take away the extra 12.",
                "Check your answer: it must be smaller than 50, because 1912 is after 1900."
              ],
              example: {
                q: "A bridge was designed in 1905 and finally built in 1931. How many years did the design wait?",
                steps: ["Later year take away earlier year: 1931 − 1905.", "1931 − 1900 = 31, then take away 5 more.", "31 − 5 = 26."],
                answer: "26 years",
                checks: [{ expr: "1931-1905", value: 26, tol: 0 }]
              }
            },
            core: { hint: "Later year minus earlier year. Watch the second year: the question fixes it at 1950." },
            stretch: { extend: "Suggest two reasons why scientists in 1912 found it so hard to believe that whole continents could move." }
          },
          explain: "Say, in one sentence, which year you took away from which, and why.",
          why: "Years between two dates = later year − earlier year = 1950 − 1912 = 38."
        },
        {
          title: "What the evidence says",
          task: {
            kind: "match",
            q: "Match each piece of evidence to what it suggests.",
            pairs: [
              ["The coastlines of South America and Africa fit together like jigsaw pieces", "The continents were once joined together"],
              ["The same species are found on continents separated by wide oceans", "The land was once connected, so living things could spread across it"],
              ["Earthquakes and volcanoes line up in narrow belts across the world", "The crust is split into plates, with boundaries between them"],
              ["Nobody accepted Wegener's idea until the 1950s", "Scientists need strong evidence before they accept a new theory"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read each piece of evidence and ask: what would have to be true for this to happen?",
                "Jigsaw shapes only fit if the pieces were once one piece.",
                "Living things cannot cross oceans on their own, so the land must once have been joined.",
                "Lines of earthquakes mark the edges of something: the edges of plates."
              ],
              example: {
                q: "Match the clue to what it suggests. Clue: wet footprints lead from the pool to the changing room.",
                steps: ["Ask what must be true for wet footprints to be there.", "Someone has just walked from the pool to the changing room."],
                answer: "Wet footprints from the pool suggest that someone has just got out of the pool and walked to the changing room."
              }
            },
            core: { hint: "Each piece of evidence points to one idea: joined land, connected land, plate edges, or careful scientists." },
            stretch: { extend: "Wegener could not explain what moved the continents. Explain which idea from Chapter 1 answers that question today." }
          },
          explain: "Say, in one sentence, why the jigsaw fit of the coastlines counts as evidence and not just a coincidence.",
          why: "Jigsaw coastlines suggest the continents were joined; shared species suggest the land was connected; belts of earthquakes mark plate edges; and the long wait shows how much evidence a new theory needs."
        },
        {
          title: "Where the hazards are",
          task: {
            kind: "mcq",
            q: "Where do nearly all of the world's earthquakes and volcanoes happen?",
            options: [
              "Along plate boundaries, where two plates meet",
              "In the middle of plates, far from their edges",
              "Spread out evenly across the whole Earth",
              "Only in the oceans, never on land"
            ],
            answer: 0,
            feedback: [
              "",
              "The middle of a plate is the quietest place to be. The plates are moving against each other at their edges, so that is where nearly all earthquakes and volcanoes happen: along plate boundaries.",
              "If hazards were spread evenly, a volcano map would look like scattered dots. Instead the red dots form narrow belts, because volcanoes and earthquakes happen along the plate boundaries.",
              "Many plate boundaries run under the oceans, but many run across land too, for example through the Himalayas. Hazards happen wherever the plates meet, on land or at sea."
            ]
          },
          contexts: [
            { label: "A volcano map", q: "On a world map every volcano is marked with a red dot. The dots form long, narrow lines rather than being scattered. Where are the volcanoes?" },
            { label: "A news report", q: "A geographer keeps a list of every large earthquake reported in a year. When she plots them on a map they follow the same lines as the volcanoes. Where do they happen?" },
            { label: "Planning a city", q: "A country wants to build a new city with the lowest risk of earthquakes and volcanoes. Which kind of place should it avoid, because that is where nearly all tectonic hazards happen?" }
          ],
          levels: {
            support: {
              steps: [
                "Remember what causes earthquakes and volcanoes: plates moving against each other.",
                "Ask: where do plates move against each other? Only where they meet.",
                "The place where two plates meet is called a plate boundary.",
                "Choose the option that names plate boundaries."
              ],
              example: {
                q: "Two people carry a long table and keep bumping into each other. Where do the bumps happen: in the middle of the table or where the two people are?",
                steps: ["The bumps happen where the two people meet the table and each other, not in the empty middle.", "In the same way, hazards happen where plates meet, not in the middle of a plate."],
                answer: "Where the two people are, at the ends; the middle of the table is not where the bumping happens."
              }
            },
            core: { hint: "Hazards happen where plates move against each other. Where is that?" },
            stretch: { extend: "Explain why a few earthquakes still happen in the middle of a plate, far from any boundary, and suggest one cause." }
          },
          explain: "Say, in one sentence, why volcanoes form lines on a map instead of being scattered.",
          why: "Earthquakes and volcanoes are caused by plates moving against each other, which only happens where plates meet, so they line up along plate boundaries."
        }
      ]
    },

    /* ───────────── 3 · plate boundaries ───────────── */
    {
      key: "plate-boundaries", n: 3, title: "Four kinds of plate boundary",
      lead: "Constructive, destructive, conservative and collision boundaries: how the plates move at each one and what that does to the ground.",
      covers: [2],
      pretext: {
        words: [
          { word: "plate boundary", means: "the place where two plates meet, also called a plate margin", sentence: "Most volcanoes are found along a plate boundary." },
          { word: "constructive", means: "a boundary where two plates move apart and new crust is made", sentence: "Iceland sits on a constructive boundary." },
          { word: "destructive", means: "a boundary where two plates move together and one is forced under the other", sentence: "At a destructive boundary the oceanic plate is destroyed." },
          { word: "conservative", means: "a boundary where two plates slide past each other", sentence: "At a conservative boundary the plates are not changed." },
          { word: "collision", means: "a boundary where two continental plates meet head on and push up mountains", sentence: "The Himalayas were made at a collision boundary." },
          { word: "fault", means: "a crack in the crust where the rock on each side has moved", sentence: "The plates slide past each other along a fault." }
        ],
        passage: [
          "Where two plates meet is called a plate boundary, or plate margin.",
          "There are four types of plate boundary.",
          "At a constructive boundary, two plates move apart.",
          "Magma rises up from below, makes volcanoes, and forms new crust.",
          "At a destructive boundary, two plates move towards each other.",
          "One plate is forced under the other and is destroyed.",
          "At a conservative boundary, two plates slide past each other along a fault.",
          "The plates are not changed, but the ground shakes.",
          "At a collision boundary, two continental plates meet head on.",
          "The land is pushed upwards into mountains.",
          "The Himalayas were made like this.",
          "Earthquakes happen at all four types of boundary.",
          "Volcanoes happen where magma can rise: at constructive and destructive boundaries."
        ]
      },
      sections: [
        {
          heading: "Constructive: plates move apart",
          paragraphs: [
            "At a constructive boundary two plates move away from each other. As they separate, a gap opens and magma rises up from the mantle to fill it. The magma cools and hardens into new rock. New crust is being built, which is why the boundary is called constructive.",
            "Some of the rising magma breaks through as volcanoes, so constructive boundaries have volcanoes and earthquakes, though the eruptions are usually gentler than at destructive boundaries. Most constructive boundaries run along the middle of the ocean floor.",
            "Iceland is one place where a constructive boundary comes up above the sea. It sits where the North American Plate and the Eurasian Plate are moving apart, and the island is slowly growing wider."
          ],
          tip: "Constructive = constructing (building) new crust. Think apart, magma rises, new rock."
        },
        {
          heading: "Destructive: plates move together",
          paragraphs: [
            "At a destructive boundary two plates move towards each other. Something has to give. The denser plate, which is the oceanic one, is forced down underneath the other plate and back into the mantle, where it melts and is destroyed. That is why the boundary is called destructive.",
            "Forcing one plate under another is not smooth. The plates stick, pressure builds up and then releases suddenly, which causes strong earthquakes. The melting plate also makes magma, which rises through the crust above and erupts as volcanoes. These are often violent, explosive eruptions.",
            "So a destructive boundary gives you both main tectonic hazards: large earthquakes and dangerous volcanoes."
          ]
        },
        {
          heading: "Conservative: plates slide past",
          paragraphs: [
            "At a conservative boundary two plates slide past each other sideways along a fault. No crust is made and none is destroyed; the plates are conserved, which gives the boundary its name.",
            "The sliding is not smooth. The two edges catch and lock, pressure builds up over years, and then the rock suddenly jerks free. That jerk is an earthquake, and because the plates are moving a long way at once, these earthquakes can be very strong.",
            "There are no volcanoes at a conservative boundary, because no magma rises: the plates are moving sideways, not apart or down. The San Andreas Fault in the western United States is the most famous conservative boundary."
          ],
          tip: "Conservative: slide past, no volcanoes, big earthquakes. If a question mentions a fault, think conservative first."
        },
        {
          heading: "Collision: two continents meet",
          paragraphs: [
            "At a collision boundary two continental plates move towards each other and meet head on. Neither can sink, because continental crust is too thick and not dense enough to be forced down into the mantle. Instead the rock is crumpled, folded and pushed upwards.",
            "This is how the world's highest mountains were made. The Himalayas, with Mount Everest, were pushed up where the Indo-Australian Plate collided with the Eurasian Plate. The plates are still pushing, so the mountains are still rising, very slowly, and the region has frequent earthquakes.",
            "Compare this with a destructive boundary. Both involve plates moving together. The difference is what kind of crust meets: oceanic against continental gives destructive; continental against continental gives collision."
          ],
          worked: {
            q: "Explain how the Himalayas were formed. (3 marks)",
            steps: [
              "Name the boundary and the plates: a collision boundary where the Indo-Australian Plate meets the Eurasian Plate.",
              "Say what happens to the crust: both plates are continental, so neither sinks; the rock is pushed upwards instead.",
              "Finish with the result: the crumpled, folded rock forms the Himalayan mountains, which are still rising."
            ],
            answer: "The Himalayas are at a collision boundary, where the Indo-Australian Plate moves towards the Eurasian Plate. Both plates are continental, so neither is forced down into the mantle. Instead the rock between them is crumpled, folded and pushed upwards, forming the mountains, which are still slowly rising today."
          }
        }
      ],
      gate: [
        { kind: "mcq", q: "At which type of plate boundary do two plates move apart, so that magma rises and forms new crust?", options: ["Constructive", "Destructive", "Conservative", "Collision"], answer: 0, why: "Constructive boundaries build new crust as the plates move apart and magma rises to fill the gap.",
          feedback: [
            "",
            "At a destructive boundary the plates move towards each other and one is destroyed, not made. Plates moving apart with new crust forming is a constructive boundary.",
            "At a conservative boundary the plates slide past each other and no crust is made or lost. Plates moving apart with magma rising is a constructive boundary.",
            "At a collision boundary two continental plates push together and the land rises into mountains. Plates moving apart with new crust forming is a constructive boundary."
          ] },
        { kind: "gap", q: "At a ___ boundary two plates slide past each other along a fault, and the plates are not changed.", answer: "conservative", options: ["conservative", "constructive", "collision"], why: "Conservative boundaries conserve the plates: they slide past each other sideways with no crust made or destroyed.",
          feedback: {
            "constructive": "Constructive and conservative sound alike, but at a constructive boundary the plates move apart and new crust is made. Sliding past along a fault with no change is conservative.",
            "collision": "At a collision boundary two continental plates push together and the land is forced upwards, so the plates are very much changed. Sliding past each other with no change is conservative."
          } },
        { kind: "mcq", q: "Which type of plate boundary formed the Himalayas?", options: ["Collision", "Constructive", "Conservative", "Destructive"], answer: 0, why: "Two continental plates, the Indo-Australian and the Eurasian, met head on and pushed the land up into the Himalayas.",
          feedback: [
            "",
            "Constructive boundaries make new crust where plates move apart, mostly under the oceans; they do not push up high mountains. The Himalayas formed where two continental plates collided.",
            "Conservative boundaries slide sideways and leave the crust unchanged, so they cannot build mountains. The Himalayas formed at a collision boundary.",
            "Destructive is close: the plates do move together. But at a destructive boundary an oceanic plate sinks under the other. In the Himalayas two continental plates met and neither could sink, so it is a collision boundary."
          ] }
      ],
      modules: [
        {
          title: "Name that boundary",
          task: {
            kind: "match",
            q: "Match each type of plate boundary to how the plates move there.",
            pairs: [
              ["Constructive", "Two plates move apart and magma rises to form new crust"],
              ["Destructive", "Two plates move together and one is forced under the other and destroyed"],
              ["Conservative", "Two plates slide past each other along a fault and are not changed"],
              ["Collision", "Two continental plates meet head on and the land is pushed upwards"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Use the names. Constructive builds; destructive destroys; conservative keeps things the same.",
                "Collision is the odd one: think of two cars meeting head on and crumpling upwards.",
                "Match the two that are about moving together first (destructive, collision), then apart (constructive).",
                "The one left, sliding past, is conservative."
              ],
              example: {
                q: "Match the word to its meaning: construct, destroy, conserve. Meanings: to keep the same; to build; to break down.",
                steps: ["Construct means to build.", "Destroy means to break down.", "Conserve means to keep the same."],
                answer: "construct: to build; destroy: to break down; conserve: to keep the same"
              }
            },
            core: { hint: "Apart, together with sinking, sideways, together without sinking. Which name fits each?" },
            stretch: { extend: "Explain why volcanoes are found at constructive and destructive boundaries but not at conservative ones." }
          },
          explain: "Say, in one sentence, how the names constructive and destructive help you remember what happens at each.",
          why: "Constructive: apart, new crust. Destructive: together, one plate forced under and destroyed. Conservative: slide past along a fault, unchanged. Collision: two continental plates meet and push up mountains."
        },
        {
          title: "Reading the diagram",
          task: {
            kind: "mcq",
            q: "A diagram shows two plates moving towards each other. The oceanic plate is being forced down under the other plate and into the mantle. What type of plate boundary is this?",
            options: ["Destructive", "Constructive", "Conservative", "Collision"],
            answer: 0,
            feedback: [
              "",
              "At a constructive boundary the plates move apart, not towards each other, and new crust is made rather than destroyed. A plate being forced down and destroyed is a destructive boundary.",
              "At a conservative boundary the plates move sideways past each other and neither goes down. A plate being forced under another is a destructive boundary.",
              "Collision is close, because the plates are moving together, but at a collision boundary both plates are continental and neither sinks. When an oceanic plate is forced down under the other, it is destructive."
            ]
          },
          contexts: [
            { label: "A coastline", q: "Along a coast, the ocean floor is moving towards the land and sinking beneath it. The coast has a line of explosive volcanoes and strong earthquakes. What type of plate boundary is this?" },
            { label: "A model", q: "In a class model, one strip of card slides down under another strip and disappears beneath the table, with the top strip buckling. The teacher says the lower strip is the oceanic plate. What type of plate boundary does the model show?" },
            { label: "A description", q: "A textbook says that at this boundary the denser plate is pushed down into the mantle and melts, and the melted rock rises to feed volcanoes. What type of plate boundary is being described?" }
          ],
          levels: {
            support: {
              steps: [
                "First decide the direction: are the plates moving apart, together, or sideways? Here they move together.",
                "Together gives two options: destructive or collision.",
                "Ask: does one plate sink? If an oceanic plate goes down and is destroyed, it is destructive.",
                "Collision is only when two continental plates meet and neither sinks."
              ],
              example: {
                q: "A diagram shows two plates moving apart, with magma rising in the gap between them. What type of boundary is it?",
                steps: ["Direction first: apart.", "Only one boundary type has plates moving apart.", "Magma rising to make new crust confirms it: constructive."],
                answer: "Constructive"
              }
            },
            core: { hint: "Direction first, then ask whether a plate sinks. Together plus sinking means one particular type." },
            stretch: { extend: "Explain why it is always the oceanic plate, never the continental plate, that is forced down at this type of boundary." }
          },
          explain: "Say, in one sentence, what tells you this is destructive and not collision.",
          why: "Plates moving together with the oceanic plate forced down and destroyed is the definition of a destructive boundary. Collision has no sinking plate."
        },
        {
          title: "Constructive versus conservative",
          task: {
            kind: "written",
            q: "Compare what happens at a constructive plate boundary with what happens at a conservative plate boundary. (4 marks)",
            marks: 4,
            criteria: [
              "States the movement at each: constructive plates move apart; conservative plates slide past each other sideways",
              "States what happens to the crust: constructive makes new crust from rising magma; conservative leaves the plates unchanged",
              "Compares the hazards: both have earthquakes; only constructive has volcanoes",
              "Uses comparing words such as whereas, both, but or however to link the two"
            ],
            model: "At a constructive boundary the two plates move apart, whereas at a conservative boundary they slide past each other sideways along a fault. At a constructive boundary magma rises into the gap and cools to form new crust, but at a conservative boundary no crust is made or destroyed, so the plates are unchanged. Both types of boundary have earthquakes, because the movement is not smooth. However, only the constructive boundary has volcanoes, because magma can only rise where the plates are moving apart."
          },
          levels: {
            support: {
              steps: [
                "Make two columns: constructive and conservative. Fill in movement, crust, volcanoes, earthquakes for each.",
                "Write one sentence per row, joining the two columns with whereas or but.",
                "For earthquakes, say both have them. For volcanoes, say only one does and why.",
                "Check every sentence mentions both boundaries. A compare answer never talks about just one."
              ],
              example: {
                q: "Compare a destructive boundary with a collision boundary. (3 marks)",
                steps: ["Movement: at both the plates move together.", "Crust: at destructive the oceanic plate sinks and is destroyed, whereas at collision neither plate sinks and the land is pushed up.", "Hazards: both have earthquakes, but only destructive has volcanoes."],
                answer: "At both boundaries the plates move towards each other. However, at a destructive boundary the oceanic plate is forced down and destroyed, whereas at a collision boundary both plates are continental, neither sinks and the land is pushed up into mountains. Both have earthquakes, but only the destructive boundary has volcanoes."
              }
            },
            core: { hint: "Four rows: movement, crust, earthquakes, volcanoes. Each sentence needs both boundaries and a comparing word." },
            stretch: { extend: "Add a sentence explaining why the earthquakes at a conservative boundary can be as strong as those at a destructive one, even though no magma is involved." }
          },
          explain: "Say, in one sentence, why only one of these two boundaries has volcanoes.",
          why: "A good compare answer puts the two boundaries side by side in every sentence: apart versus sideways, new crust versus unchanged, volcanoes at one but earthquakes at both."
        }
      ]
    },

    /* ───────────── 4 · earthquakes ───────────── */
    {
      key: "earthquakes", n: 4, title: "Earthquakes: what, where and why",
      lead: "What an earthquake is, how locked plates cause one, the words geographers use to describe it, and how an undersea earthquake becomes a tsunami.",
      covers: [3],
      pretext: {
        words: [
          { word: "earthquake", means: "the shaking of the Earth's crust caused by moving plates", sentence: "The earthquake shook the buildings for nearly a minute." },
          { word: "focus", means: "the point deep underground where an earthquake starts", sentence: "The focus of the earthquake was many kilometres below the ground." },
          { word: "epicentre", means: "the point on the surface directly above the focus", sentence: "The town at the epicentre felt the strongest shaking." },
          { word: "seismic waves", means: "the shaking that spreads out from the focus through the ground", sentence: "Seismic waves travelled out from the focus in every direction." },
          { word: "magnitude", means: "how strong an earthquake is", sentence: "A high magnitude earthquake can knock down buildings." },
          { word: "tsunami", means: "a huge sea wave caused by an earthquake under the sea", sentence: "The tsunami reached the coast about an hour after the earthquake." }
        ],
        passage: [
          "An earthquake is the shaking of the Earth's crust.",
          "It is caused by the movement of the Earth's plates.",
          "At a plate boundary, the plates do not move smoothly past each other.",
          "Sometimes they lock together.",
          "Pressure builds up between the locked plates, year after year.",
          "Then the pressure is suddenly released in a jerky movement.",
          "That sudden release is the earthquake.",
          "The point underground where the earthquake starts is the focus.",
          "The point on the surface directly above the focus is the epicentre.",
          "Shaking spreads out from the focus as seismic waves.",
          "The strongest shaking is felt at the epicentre.",
          "How strong an earthquake is, is called its magnitude.",
          "If an earthquake happens under the sea, it can cause a huge wave called a tsunami."
        ]
      },
      sections: [
        {
          heading: "What is an earthquake, and why does it happen?",
          paragraphs: [
            "An earthquake is the shaking and vibration of the Earth's crust. It is caused by the movement of the Earth's plates. At a plate boundary the plates are always moving, but the movement is not smooth: the rough edges catch and lock together.",
            "While the plates are locked, pressure builds up in the rock, sometimes for many years. Eventually the rock cannot hold any more. It snaps free in one sudden, jerky movement, and the stored pressure is released all at once. That release of pressure is the earthquake.",
            "Most earthquakes happen like this, at plate boundaries. A few have other causes. Volcanic eruptions can shake the ground; so can the collapse of old mines, large explosions, and the weight of water pressing down behind a reservoir dam."
          ],
          worked: {
            q: "Explain how the movement of plates causes an earthquake. (3 marks)",
            steps: [
              "Start with the movement: the plates at a boundary move, but not smoothly.",
              "Describe the locking: the plates stick, and pressure builds up in the rock.",
              "Finish with the release: the pressure is suddenly released in a jerky movement, and this shaking is the earthquake."
            ],
            answer: "At a plate boundary the plates move past each other, but the movement is not smooth. The plates lock together and pressure builds up in the rock over time. When the rock can no longer hold, the pressure is suddenly released in a jerky movement, and the shaking this causes is the earthquake."
          }
        },
        {
          heading: "Focus and epicentre",
          paragraphs: [
            "Geographers use two words for where an earthquake is. The focus is the point deep below the surface where the earthquake actually starts: the place in the Earth where the rocks suddenly move.",
            "The epicentre is the point on the surface directly above the focus. It is the place on the ground nearest to the focus, so it is where the shaking is felt most strongly and where the damage is usually worst.",
            "From the focus, the shaking spreads out in every direction through the ground as seismic waves. Imagine a stone dropped into a pond: the focus is where the stone lands, and the seismic waves are the ripples. The further the waves travel, the weaker they become."
          ],
          tip: "Focus is below, epicentre is above. The epicentre is on the surface, where people are, so that is where the damage is worst."
        },
        {
          heading: "Measuring an earthquake",
          paragraphs: [
            "How strong an earthquake is, is called its magnitude. Scientists measure it with an instrument called a seismometer, which records the shaking of the ground. The strength is then given as a number on a scale. The scale your textbook uses is the Richter scale.",
            "Earthquakes with a high magnitude release far more energy than those with a low one, so even a small step up the scale means much stronger shaking. Low magnitude earthquakes happen every day and are hardly noticed. High magnitude ones can bring down buildings.",
            "A large earthquake is often followed by aftershocks: smaller earthquakes that happen after the main one as the rocks settle. Aftershocks can bring down buildings that the main earthquake had already weakened, which makes rescue work dangerous."
          ],
          tip: "Magnitude is the measurement; the seismometer is the instrument; the Richter scale is the scale the number is read on."
        },
        {
          heading: "Where earthquakes happen, and tsunamis",
          paragraphs: [
            "Earthquakes can happen at any of the four types of plate boundary, because at all four the plates move against each other. Earthquakes between two plates, at a boundary, are called interplate earthquakes. The rarer earthquakes that happen within a plate are called intraplate earthquakes.",
            "When a large earthquake happens under the sea, the sudden movement of the sea floor pushes the water above it. This starts a huge wave, a tsunami. The wave travels, or propagates, across the open ocean, where it is low and fast and hardly noticed by ships.",
            "As the tsunami reaches shallow water near a coast it slows down and piles up, becoming a wall of water that floods far inland. Your unit names the Indian Ocean tsunami of 2004 as an example of how deadly this can be."
          ],
          tip: "Tsunami in three steps: undersea earthquake, wave travels across the ocean, wave arrives at the coast."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is the focus of an earthquake?", options: ["The point deep underground where the earthquake starts", "The point on the surface directly above where it starts", "The instrument that measures the shaking", "A smaller earthquake after the main one"], answer: 0, why: "The focus is the point below the surface where the rocks first move. The point above it on the surface is the epicentre.",
          feedback: [
            "",
            "That is the epicentre, the point on the surface directly above the focus. The focus itself is the point deep underground where the earthquake starts.",
            "The instrument that measures the shaking is a seismometer. The focus is a place, not an instrument: the point underground where the earthquake starts.",
            "A smaller earthquake after the main one is an aftershock. The focus is the point underground where an earthquake starts."
          ] },
        { kind: "gap", q: "The point on the surface directly above the focus is called the ___.", answer: "epicentre", options: ["epicentre", "focus", "magnitude"], why: "The epicentre is on the surface, directly above the focus, and is where the shaking is strongest.",
          feedback: {
            "focus": "The focus is the point deep underground where the earthquake starts. The point on the surface directly above it has its own name: the epicentre.",
            "magnitude": "Magnitude is how strong an earthquake is, a measurement rather than a place. The point on the surface above the focus is the epicentre."
          } },
        { kind: "mcq", q: "What causes a tsunami?", options: ["An earthquake under the sea", "Heavy rain over the ocean", "A volcano erupting on land", "Strong winds blowing across the sea"], answer: 0, why: "An undersea earthquake moves the sea floor suddenly, pushing the water above it into a huge wave that travels to the coast.",
          feedback: [
            "",
            "Rain adds water to the sea very slowly and spread out; it cannot shove a whole column of ocean at once. A tsunami is started by the sudden movement of the sea floor in an undersea earthquake.",
            "A volcano on land can cause shaking, but a tsunami needs the sea floor itself to move suddenly. That happens when an earthquake occurs under the sea.",
            "Wind makes ordinary waves at the surface, but a tsunami moves the whole depth of the water. It is caused by an undersea earthquake, not by wind."
          ] }
      ],
      modules: [
        {
          title: "How an earthquake happens",
          task: {
            kind: "order",
            q: "Put the statements in the correct order to explain how an earthquake happens.",
            items: [
              "Earthquakes happen at plate boundaries, where two plates meet",
              "As the plates move past each other, the movement is not smooth",
              "The plates sometimes lock together, and pressure builds up",
              "The pressure is suddenly released in a jerky movement",
              "This sudden release of pressure is the earthquake"
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with where: the statement about plate boundaries sets the scene.",
                "Then the movement: the plates move, but not smoothly.",
                "Next, what the rough movement leads to: locking and building pressure.",
                "Then what pressure does when it cannot build any more: sudden release. Finally, name that release."
              ],
              example: {
                q: "Put in order: the balloon pops; you blow more air in; the rubber stretches tight; you tie the balloon and squeeze it.",
                steps: ["Blow air in first.", "The rubber stretches tight (pressure builds).", "You tie it and squeeze (more pressure).", "It pops (sudden release)."],
                answer: "you blow more air in; the rubber stretches tight; you tie the balloon and squeeze it; the balloon pops"
              }
            },
            core: { hint: "Where, then movement, then locking and pressure, then release, then the name for the release." },
            stretch: { extend: "Explain why the longer two plates stay locked, the stronger the earthquake is likely to be when they finally move." }
          },
          explain: "Say, in one sentence, why pressure has to build up before an earthquake can happen.",
          why: "Boundary first, then rough movement, then locking and pressure, then the sudden jerky release, which is the earthquake."
        },
        {
          title: "Earthquake words",
          task: {
            kind: "match",
            q: "Match each earthquake word to its meaning.",
            pairs: [
              ["Magnitude", "How strong an earthquake is"],
              ["Seismometer", "An instrument that measures the shaking of the ground"],
              ["Richter scale", "The scale on which the strength of an earthquake is given"],
              ["Epicentre", "The point on the surface directly above the focus"],
              ["Aftershock", "A smaller earthquake that comes after the main one"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Sort the words first: which are places, which are measurements, which are instruments, which are events?",
                "Epicentre is a place. Aftershock is an event (a smaller earthquake).",
                "Magnitude is the measurement itself; the seismometer is the instrument; the Richter scale is the scale.",
                "Think of a thermometer: the instrument measures, the number is read off a scale."
              ],
              example: {
                q: "Match: thermometer, temperature, degrees Celsius. Meanings: the scale the number is given on; how hot something is; the instrument that measures it.",
                steps: ["Temperature is how hot something is: the measurement.", "The thermometer is the instrument.", "Degrees Celsius is the scale."],
                answer: "temperature: how hot something is; thermometer: the instrument; degrees Celsius: the scale"
              }
            },
            core: { hint: "Measurement, instrument, scale, place, event. Each word is exactly one of these." },
            stretch: { extend: "Explain why aftershocks make rescue work after a big earthquake more dangerous." }
          },
          explain: "Say, in one sentence, the difference between magnitude and the Richter scale.",
          why: "Magnitude is the strength; the seismometer measures it; the Richter scale is the scale the strength is given on; the epicentre is the surface point above the focus; an aftershock is a smaller earthquake afterwards."
        },
        {
          title: "Who feels it most?",
          task: {
            kind: "mcq",
            q: "During an earthquake, which place on the surface feels the strongest shaking?",
            options: [
              "The epicentre, directly above the focus",
              "The place furthest away from the focus",
              "The focus itself, because that is where people live",
              "The coast, because that is where the tsunami arrives"
            ],
            answer: 0,
            feedback: [
              "",
              "Seismic waves get weaker the further they travel, so the place furthest from the focus feels the least shaking. The strongest shaking is at the epicentre, the nearest point on the surface to the focus.",
              "The focus is deep underground where the earthquake starts, so nobody lives there. The surface point directly above it, the epicentre, is where the shaking is strongest.",
              "A tsunami only happens if the earthquake is under the sea, and it arrives later. The shaking itself is strongest at the epicentre, directly above the focus."
            ]
          },
          contexts: [
            { label: "Three villages", q: "Three villages lie at different distances from an earthquake's focus. One is directly above it, one is a short way off, one is far away. Which village feels the strongest shaking?" },
            { label: "A seismometer network", q: "Seismometers in several towns record the same earthquake. The town recording the strongest shaking is in which position?" },
            { label: "A news map", q: "A news report shows a map with a star where the earthquake struck and rings spreading out from it. Which place on the map felt the strongest shaking?" }
          ],
          levels: {
            support: {
              steps: [
                "The shaking spreads out from the focus like ripples from a stone dropped in a pond.",
                "Ripples are biggest near where the stone landed and get smaller further away.",
                "The nearest point on the surface to the focus is directly above it: the epicentre.",
                "Pick the option that names the epicentre."
              ],
              example: {
                q: "Someone drops a heavy book on a wooden floor. Who feels the thump most: the person standing next to it or the person at the far end of the room?",
                steps: ["The thump spreads out through the floor from where the book lands.", "It gets weaker as it travels.", "The person nearest feels it most."],
                answer: "The person standing next to where the book landed."
              }
            },
            core: { hint: "Shaking gets weaker with distance. Which surface point is closest to the focus?" },
            stretch: { extend: "Two earthquakes have the same magnitude, but one has a much deeper focus. Explain which one is likely to cause more damage at its epicentre, and why." }
          },
          explain: "Say, in one sentence, why the epicentre and not the focus is the place where people feel the most shaking.",
          why: "Seismic waves weaken as they spread from the focus, so the nearest surface point, the epicentre directly above the focus, shakes most."
        }
      ]
    },

    /* ───────────── 5 · living with hazards ───────────── */
    {
      key: "living-with-hazards", n: 5, title: "Living with earthquakes and volcanoes",
      lead: "How geographers study a real earthquake as a case study, why the same earthquake can hurt one country more than another, and why people choose to live beside volcanoes.",
      covers: [4, 5],
      pretext: {
        words: [
          { word: "case study", means: "a real example studied in detail to understand a topic", sentence: "Our case study of an earthquake is Sichuan, China, in 2008." },
          { word: "NEE", means: "a newly emerging economy: a country that is getting richer quickly", sentence: "China is an NEE, a country whose economy is growing fast." },
          { word: "effect", means: "something that happens because of an event", sentence: "One effect of the earthquake was that many people lost their homes." },
          { word: "response", means: "what people do to help after a disaster", sentence: "Sending rescue teams was the first response to the earthquake." },
          { word: "fertile", means: "good for growing crops", sentence: "Volcanic ash makes the soil fertile." },
          { word: "hot spot", means: "a place where very hot rock rises from deep in the mantle and makes volcanoes", sentence: "Hawaii sits on a hot spot in the middle of the Pacific Plate." }
        ],
        passage: [
          "Geographers learn about hazards by studying real events in detail.",
          "This is called a case study.",
          "Our case study is the Sichuan earthquake in China, in 2008.",
          "China is an NEE, a country whose economy is growing fast.",
          "A case study asks what caused the event and when it happened.",
          "It asks what the effects were on people, on money and on the land.",
          "It asks how people responded and what help was given.",
          "Earthquakes do not kill people directly.",
          "Falling buildings, landslides and fires do.",
          "So the time of day and the strength of the buildings matter a great deal.",
          "Volcanoes are dangerous too, yet millions of people live near them.",
          "Volcanic ash makes the soil fertile, so crops grow well.",
          "Heat from under the ground can make cheap electricity.",
          "Volcanic rock makes strong building material, and tourists bring jobs."
        ]
      },
      sections: [
        {
          heading: "A case study: the Sichuan earthquake, 2008",
          paragraphs: [
            "A case study is a real event studied in detail. For earthquakes, your case study is the Sichuan earthquake, which struck Sichuan province in China in 2008. China is an NEE, a newly emerging economy: a country that is becoming richer quickly but still has many poorer areas.",
            "Every earthquake case study answers the same set of questions. What caused it? The movement of plates, releasing pressure that had built up. When did it happen, on what date and at what time of day? What were the effects: how many people died, were injured or lost their homes, and what happened to buildings, roads, businesses and the land? And what was the response: what help was given, by whom, and how quickly?",
            "Geographers sort effects into three groups. Social effects are about people: deaths, injuries, lost homes, closed schools. Economic effects are about money: damaged factories, roads and shops, and the cost of rebuilding. Environmental effects are about the land: landslides, blocked rivers, damaged farmland. The figures for Sichuan are in your textbook, in the case study pages, and you will need them for the progress check."
          ],
          tip: "Case study answers need specific detail. Always give the place, the year and at least one real figure from your textbook."
        },
        {
          heading: "Do earthquakes kill people?",
          paragraphs: [
            "It sounds like an odd question, but it is an important one. The shaking of the ground does not itself kill anyone. People are killed by what the shaking does: buildings that collapse on top of them, landslides that bury roads and villages, fires that start from broken gas pipes, and, near the coast, tsunamis.",
            "That is why the same magnitude of earthquake can kill a handful of people in one country and tens of thousands in another. In a richer country, an HIC, buildings are often designed to sway rather than fall, and emergency services arrive quickly. In an NEE such as China, cities may have strong modern buildings while poorer rural areas have older ones that collapse. In the poorest countries, LICs, weak buildings and slow rescue make the death toll far higher.",
            "Time of day matters too. Think about where people are at different hours. In the middle of the afternoon, children are in school and adults are at work or in the fields. In the middle of the night, almost everyone is asleep indoors. Which buildings people are inside, and whether rescuers can see what they are doing, changes how many are hurt and how many are found in time."
          ],
          worked: {
            q: "Explain why an earthquake of the same magnitude can cause more deaths in one country than in another. (4 marks)",
            steps: [
              "Make the key point first: the shaking does not kill directly; collapsing buildings do.",
              "Compare building quality: richer countries can afford buildings designed not to collapse.",
              "Compare the response: richer countries have more rescue teams, hospitals and equipment, so help arrives faster.",
              "Finish with a link: so a poorer country suffers more deaths from the same shaking."
            ],
            answer: "The shaking itself does not kill people; collapsing buildings, landslides and fires do. A richer country can afford buildings designed to withstand shaking, so fewer collapse. It also has more rescue teams, hospitals and equipment, so trapped people are found and treated faster. In a poorer country buildings are weaker and help is slower to arrive, so the same magnitude of earthquake causes far more deaths."
          }
        },
        {
          heading: "Living in the shadow of a volcano",
          paragraphs: [
            "Volcanoes can destroy towns, yet millions of people live beside them. Around Mount Vesuvius in Italy, farmers grow tomatoes on the slopes of a volcano that buried a Roman city. Why take the risk? Because living near a volcano brings real benefits.",
            "There are four main ones. Fertile soil: volcanic ash is full of minerals, so crops grow well. Energy: heat from under the ground can be used to make electricity, which is renewable and cheaper than importing fuel. Building materials: volcanic rock is hard and lasting, so it makes durable houses and roads. Jobs: tourists come to see the volcano, the hot springs and the dramatic scenery, and that brings work to hotels, shops and guides.",
            "For many families, these benefits every day outweigh a danger that may come once in a lifetime, or never. Geographers call this weighing up of risk and reward living with the hazard."
          ],
          tip: "Four benefits, remember SEBT: Soil, Energy, Building materials, Tourism."
        },
        {
          heading: "Hot spots: Hawaii and Iceland",
          paragraphs: [
            "Most volcanoes sit on plate boundaries, but Hawaii is in the middle of the Pacific Plate, thousands of kilometres from any boundary. Its volcanoes come from a hot spot: a place where unusually hot rock rises from deep in the mantle, melts through the plate above and feeds volcanoes at the surface.",
            "Iceland is doubly volcanic. It sits on the constructive boundary where the North American Plate and the Eurasian Plate are moving apart (Chapter 3), and it also sits on a hot spot. Together they give Iceland frequent eruptions, hot springs and steaming ground.",
            "Both places show the benefits of living near volcanoes. Iceland uses its underground heat to warm homes and make electricity, and its volcanic landscape draws visitors from around the world. Hawaii's rich volcanic soil and spectacular scenery support farming and tourism."
          ],
          tip: "Hawaii: hot spot only, mid-plate. Iceland: constructive boundary plus hot spot."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is a benefit of living near a volcano?", options: ["Fertile soil for growing crops", "Frequent earthquakes", "Ash that blocks roads", "Lava that destroys homes"], answer: 0, why: "Volcanic ash is rich in minerals, so the soil around a volcano is fertile and good for farming.",
          feedback: [
            "",
            "Earthquakes are one of the dangers of living near a volcano, not a benefit. The benefits are fertile soil, cheap energy, building materials and tourism.",
            "Ash blocking roads is a harm caused by an eruption. Over time, though, ash does bring a benefit: it breaks down into fertile soil for farming.",
            "Lava destroying homes is a danger, not a benefit. People stay despite it because of the fertile soil, cheap energy, building materials and jobs from tourism."
          ] },
        { kind: "numeric", q: "The Indian Ocean tsunami happened in 2004 and the Sichuan earthquake in 2008. How many years apart were the two events?", answer: 4, tolerance: 0, units: "years", check: "2008-2004", why: "2008 − 2004 = 4 years.",
          misconceptions: [
            { answer: 5, check: "2008-2004+1", says: "You have counted both years, 2004 and 2008, as if counting fingers. Years apart is a difference: 2008 − 2004 = 4 years." },
            { answer: 3, check: "2008-2004-1", says: "You have taken one off, perhaps counting the years in between only. The difference between 2004 and 2008 is 2008 − 2004 = 4 years." },
            { answer: 12, check: "2008+2004-4000", says: "That is the two years added together, less 4,000. The question asks how far apart they are, so take one from the other: 2008 − 2004 = 4 years." }
          ] },
        { kind: "gap", q: "A place where very hot rock rises from deep in the mantle and makes volcanoes away from a plate boundary is called a ___.", answer: "hot spot", options: ["hot spot", "fault", "epicentre"], why: "Hawaii sits on a hot spot in the middle of the Pacific Plate, far from any boundary.",
          feedback: {
            "fault": "A fault is a crack in the crust where rock has moved, found for example at a conservative boundary. A place where hot mantle rock rises to make volcanoes in the middle of a plate is a hot spot.",
            "epicentre": "The epicentre is an earthquake word: the point on the surface above the focus. A place where hot rock rises to make volcanoes away from a boundary is a hot spot."
          } }
      ],
      modules: [
        {
          title: "Sorting a case study",
          task: {
            kind: "match",
            q: "Match each heading of an earthquake case study to the example that belongs under it.",
            pairs: [
              ["Cause", "Moving plates released pressure that had built up between them"],
              ["Social effect", "Thousands of people lost their homes and schools were destroyed"],
              ["Economic effect", "Factories, roads and shops were damaged and cost a great deal to rebuild"],
              ["Environmental effect", "Landslides buried hillsides and blocked rivers"],
              ["Response", "Rescue teams, tents and medical help were sent to the affected area"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Cause is what made it happen; everything else is what happened afterwards.",
                "Effects are sorted by what they hit: people (social), money (economic) or the land (environmental).",
                "Response is what people did to help after the event.",
                "Read each example and ask: is this before (cause), what was hit (effect), or help afterwards (response)?"
              ],
              example: {
                q: "Sort these for a flood: heavy rain for a week; a bridge washed away; sandbags handed out. Headings: cause, economic effect, response.",
                steps: ["The rain came before and made it happen: cause.", "The bridge is costly to replace: economic effect.", "Sandbags are help given afterwards: response."],
                answer: "heavy rain: cause; bridge washed away: economic effect; sandbags: response"
              }
            },
            core: { hint: "Before, what was hit (people, money or land), and help afterwards." },
            stretch: { extend: "Many effects fit more than one heading. Explain why a destroyed school could count as both a social and an economic effect." }
          },
          explain: "Say, in one sentence, how you tell a social effect from an economic effect.",
          why: "Cause comes first; social effects are on people, economic on money and property, environmental on the land; the response is the help given afterwards."
        },
        {
          title: "Twelve hours later",
          task: {
            kind: "written",
            q: "An earthquake strikes a city in the middle of the afternoon. Explain how the damage and loss of life might have been different if it had struck 12 hours later, in the middle of the night. (4 marks)",
            marks: 4,
            criteria: [
              "Says where people are at each time: in the afternoon at school, at work or outside; at night asleep at home",
              "Links where people are to the buildings they are in and how those buildings cope with shaking",
              "Considers the rescue: darkness makes it harder to find and reach trapped people",
              "Reaches a clear judgement (more or less loss of life) and gives a reason for it"
            ],
            model: "In the middle of the afternoon most children are in school and many adults are at work or outside, so whether people are hurt depends on how well schools, offices and factories stand up to shaking. Twelve hours later, in the middle of the night, almost everyone is asleep at home, so it is the strength of houses that matters most, and people are slower to react because they are woken suddenly. Rescue is also harder in the dark, as teams cannot see collapsed buildings or trapped people easily. Overall I think a night-time earthquake could cause more loss of life if homes are weaker than the daytime buildings, but if schools were poorly built the afternoon would be worse, so the answer depends on which buildings are the weakest."
          },
          contexts: [
            { label: "A city in an HIC", q: "An earthquake strikes a city in a rich country (an HIC) in the middle of the afternoon. Most buildings are modern and designed to resist shaking. Explain how the damage and loss of life might have been different if it had struck 12 hours later, in the middle of the night. (4 marks)" },
            { label: "A city in an NEE", q: "An earthquake strikes a city in an NEE in the middle of the afternoon. The city centre has strong new buildings, but the older districts and villages around it have weaker ones. Explain how the damage and loss of life might have been different if it had struck 12 hours later, in the middle of the night. (4 marks)" },
            { label: "A village in an LIC", q: "An earthquake strikes a farming village in a poor country (an LIC) in the middle of the afternoon, when most people are working in the fields. The homes are old and weak. Explain how the damage and loss of life might have been different if it had struck 12 hours later, in the middle of the night. (4 marks)" }
          ],
          levels: {
            support: {
              steps: [
                "Sentence 1: where are people in the afternoon? Schools, workplaces, outside.",
                "Sentence 2: where are people at night? Asleep at home. Say what that means for the buildings they are in.",
                "Sentence 3: think about the rescuers. What is harder in the dark?",
                "Sentence 4: decide. More or less loss of life at night? Give your reason."
              ],
              example: {
                q: "A big storm hits a seaside town on a Sunday in summer. Explain how the effects might have been different on a weekday in winter. (3 marks)",
                steps: ["Where are people? On a summer Sunday, crowds are on the beach and the promenade; on a winter weekday, most are at work or school indoors.", "Link to danger: people outside in a storm are at more risk than people indoors.", "Judgement: the summer Sunday is likely to see more injuries, because more people are outside and exposed."],
                answer: "On a summer Sunday the beach and promenade are crowded, so many people are outside when the storm hits and are at risk from wind and waves. On a winter weekday most people are indoors at work or school, where they are safer. So the summer Sunday storm would probably cause more injuries, because more people are exposed to it."
              }
            },
            core: { hint: "Where people are, what buildings they are in, how rescue is affected, then your judgement." },
            stretch: { extend: "Explain why the answer to this question might be different for a rich country and a poor one, using the idea that earthquakes do not kill people directly." }
          },
          explain: "Say, in one sentence, why the time of day changes how many people an earthquake hurts.",
          why: "A strong answer follows people through the day, links where they are to the buildings around them, remembers that rescuers work less well in the dark, and ends with a reasoned judgement rather than a guess."
        },
        {
          title: "Why farm on a volcano?",
          task: {
            kind: "mcq",
            q: "Farmers grow tomatoes on the slopes of Mount Vesuvius in Italy, even though it is an active volcano. Why?",
            options: [
              "Volcanic ash has made the soil very fertile, so crops grow well",
              "The heat from the lava keeps the plants warm all year",
              "There are never any earthquakes near a volcano",
              "The land there is free because nobody else wants it"
            ],
            answer: 0,
            feedback: [
              "",
              "Lava is far too hot for any plant and only appears during an eruption. The benefit for farmers is the fertile soil made from volcanic ash, which is rich in minerals.",
              "Volcanoes and earthquakes often happen in the same places, because both are caused by moving plates. The reason farmers stay is the fertile soil, not an absence of earthquakes.",
              "Land near Vesuvius is valuable, not free, precisely because the soil is so good. Farmers choose it for the fertile soil made from volcanic ash."
            ]
          },
          levels: {
            support: {
              steps: [
                "Think about what a volcano leaves on the ground after an eruption: ash.",
                "Ash is full of minerals, which plants need.",
                "So over time the soil becomes fertile, and crops grow well.",
                "Choose the option about fertile soil."
              ],
              example: {
                q: "Why do farmers in Iceland grow vegetables in greenhouses heated by water from under the ground?",
                steps: ["Think about what the volcano provides: heat under the ground.", "Hot water from underground is cheap heating.", "So the benefit is cheap energy from the volcano."],
                answer: "The volcanic heat under the ground gives them cheap, renewable energy to warm the greenhouses."
              }
            },
            core: { hint: "What does ash do to soil over time?" },
            stretch: { extend: "Give two other benefits of living near a volcano and explain which one you think matters most to a country like Iceland." }
          },
          explain: "Say, in one sentence, how a volcano can be dangerous and useful at the same time.",
          why: "Volcanic ash breaks down into mineral-rich, fertile soil, so the slopes of Vesuvius are excellent farmland despite the risk."
        }
      ]
    }
  ],

  sources: {
    deckDump: "gg_y08_unit_2_tectonic_processes.txt",
    decksUsed: [
      "Tectonic processes_Year8_202223_L1.pptx",
      "Tectonic processes_Year8_202223_L2.pptx",
      "Tectonic processes_Year8_Lesson345.pptx"
    ],
    notes: "Lesson titles and order from the three department decks (lessons 3, 4 and 5 share one deck). House furniture skipped: the DIT slides from the previous units (TNCs/Foxconn; Asia and China test), the Prior/Future Learning sheets, timers, Kerboodle login slides and class codes. The deck's own facts used: Earth 4.54 billion years; four layers; two crust types; lava versus magma; convection currents; Wegener 1912, accepted 1950s, jigsaw and species evidence; seven major plates; four boundary types with their movements; Himalayas as collision; Iceland on the North American/Eurasian constructive margin plus a hot spot; earthquake definition, causes, focus/epicentre, Richter scale, magnitude, seismometer, aftershock; interplate/intraplate; tsunami in three steps; Sichuan 2008 as the NEE case study (the deck gives the questions, not the figures, which are in the textbook); the four benefits of living near volcanoes; Vesuvius tomatoes; Hawaii and Iceland hot spots. Where the dump defers to textbook pages (Geog.3 pp. 86-103) the manifest uses standard KS3 statements and NOTES.md flags each one. No text is quoted from any source. No pupil or staff names, no login details."
  }
};
