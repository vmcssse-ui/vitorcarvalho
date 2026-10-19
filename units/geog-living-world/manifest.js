// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE Geography 8035 · 3.1.2 The Living World (ecosystems, tropical rainforests, hot deserts) · Year 9 · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression; the FACTS names held in verify.py are allowed) and are recomputed.
//   worked examples / support examples with a calculation carry `checks:[{expr, value, tol}]`.
//   every "order" task is compared with the canonical sequences held in verify.py (the department deck's own sequences).
//   every mcq / gap / match answer is compared with the independent answer key held in verify.py.
//   every case-study number (Epping Forest species counts, the 1976–77 drought and the 15 million trees of 1987, the biome
//   table, the rainforest climate table and its 2360 mm total, Malaysia's 99 % → 60 %, the football-pitch arithmetic, the
//   Sahara's 9 million km², the 250 mm desert threshold, the wild dog count) is checked against the independent FACTS table.
//   passage sentences are counted (≤ 20 words) and all pupil-facing prose (not the arithmetic in `check`) is linted for
//   known misconceptions, the decks' own errors and misspellings (Imozan, Dam gazelle, 3500 square miles, the 13.1 °C
//   winter mean, the 55 % plant-species card), deck model-answer fingerprints, the 29 pupil names on the debate-groups
//   slide, classroom furniture, facts that are not in these decks, and the three other units mixed into the same dump.
//   Pupil-facing text says "your lessons", never "the deck". Corrections to the decks are listed in NOTES.md section 4.
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions`; every module carries
//   `explain`; ≥ 1 module per chapter carries `contexts` that never redefine the answer; `connections` ⊂ glossary;
//   meta.constellation is omitted (the engine lays the stars out); no pretext.l1 (translation is a separate pass).
//   verify.py also runs a mutation self-test: it tampers with a copy of this manifest in eight ways and must catch every one.
// Diagrams (food webs, biome maps, climate graphs, soil profiles, rainforest layers) are described in words; no widget exists for them.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["geog-living-world"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "geog-living-world",
    subjectKey: "geography",
    subject: "Geography",
    board: "AQA",
    spec: "8035",
    specRef: "3.1.2 The Living World: 3.1.2.1 Ecosystems, 3.1.2.2 Tropical rainforests, 3.1.2.3 Hot deserts (Paper 1, Section B)",
    year: 9,
    tier: "GCSE (AQA Geography is a single-tier qualification), taught in Year 9",
    title: "The Living World: Ecosystems",
    sub: "From a pond and an East London forest to the rainforests of Malaysia and the sands of the Sahara: how living things and their surroundings depend on each other, and what happens when people change the balance.",
    bigQuestion: "How do ecosystems work, why are the world's great biomes where they are, and how can people use rainforests and deserts without destroying them?",
    lessonCount: 17,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  // The department's three decks (Ecosystems.pptx, Tropical rainforest.pptx, Hot deserts.pptx), in the order they were taught
  // (November 2022 → December 2022/January 2023 → January/February 2023, which is also the order of spec 3.1.2). Titles are the
  // decks' own slide titles or learning objectives; questions are those objectives rephrased. See NOTES.md section 2 for slide ranges.
  lessons: [
    { n: 1, title: "Introducing a small-scale ecosystem in the UK", question: "What is an ecosystem, what are its components, and how do they depend on each other at different scales?", keywords: ["ecosystem", "biotic", "abiotic", "interdependence", "biome", "Epping Forest"] },
    { n: 2, title: "Food chains and food webs in Epping Forest", question: "How does energy pass from producers to consumers and decomposers in a woodland food web?", keywords: ["producer", "consumer", "herbivore", "carnivore", "decomposer", "food chain", "food web"] },
    { n: 3, title: "Change in ecosystems", question: "How can natural events and human activities unbalance an ecosystem, and how can an ecosystem be restored?", keywords: ["drought", "storm", "deforestation", "climate change", "knock-on effect", "resilience", "restoration"] },
    { n: 4, title: "Global ecosystems: distribution and characteristics", question: "Where are the world's biomes, what are their climates like, and why do they form belts by latitude?", keywords: ["biome", "latitude", "tundra", "tropical rainforest", "desert", "deciduous woodland", "atmospheric circulation"] },
    { n: 5, title: "The tropical rainforest: location and layers", question: "Where are tropical rainforests found, and what are the four layers of the forest?", keywords: ["equator", "tropics", "emergent layer", "canopy", "understorey", "forest floor"] },
    { n: 6, title: "Climate and soils of the tropical rainforest", question: "What is the rainforest climate like, and why are its soils so infertile?", keywords: ["climate graph", "range", "latosol", "leaching", "humus", "shallow roots"] },
    { n: 7, title: "Plant adaptations and biodiversity", question: "How have rainforest plants adapted to heat, heavy rain and competition for light?", keywords: ["biodiversity", "buttress roots", "drip tips", "lianas", "epiphytes", "fast-growing trees"] },
    { n: 8, title: "Animal adaptations in the tropical rainforest", question: "How are the toucan, the anteater and the red-eyed tree frog adapted to life in the rainforest?", keywords: ["toucan", "anteater", "red-eyed tree frog", "adaptation", "predator", "camouflage"] },
    { n: 9, title: "Causes of deforestation in Malaysia", question: "What is deforestation, and why is Malaysia's rainforest being cut down?", keywords: ["Malaysia", "NEE", "deforestation", "palm oil", "logging", "mineral extraction", "subsistence farming", "transmigration"] },
    { n: 10, title: "Impacts of deforestation in the Malaysian rainforest", question: "How does deforestation cause soil erosion, loss of biodiversity and climate change, and what are the economic gains and losses?", keywords: ["soil erosion", "biodiversity", "climate change", "economic gains", "economic losses", "local impacts", "global impacts"] },
    { n: 11, title: "Sustainable management of the Amazon rainforest", question: "How can selective logging, agroforestry, forest reserves, afforestation and satellite monitoring make rainforest use sustainable?", keywords: ["sustainable development", "selective logging", "agroforestry", "forest reserves", "afforestation", "satellite monitoring"] },
    { n: 12, title: "The rainforest stakeholders debate", question: "Who has a stake in the future of the rainforest, and how should its use be decided?", keywords: ["stakeholder", "government", "indigenous people", "cattle ranching", "national park", "conservation"] },
    { n: 13, title: "Locations and distribution of hot deserts", question: "Where are the world's hot deserts, why are they found around 30° north and south, and what is their climate like?", keywords: ["arid", "30 degrees", "high pressure", "Sahara", "climate graph", "temperature range"] },
    { n: 14, title: "Characteristics of hot deserts and the adaptations of plants and animals", question: "How do the climate, soil, plants and animals of a hot desert depend on each other, and how are living things adapted to survive there?", keywords: ["biotic", "abiotic", "succulent", "endemic", "biodiversity", "camel", "cactus"] },
    { n: 15, title: "The challenge of developing hot deserts", question: "What physical and human challenges face anyone trying to develop a hot desert?", keywords: ["extreme heat", "arid climate", "inaccessibility", "salinisation", "thin soils", "nomadic populations"] },
    { n: 16, title: "Opportunities and challenges in the Sahara Desert", question: "What opportunities does the Sahara offer, and what barriers stand in the way of developing them?", keywords: ["aquifer", "groundwater", "minerals", "fossil fuels", "desert agriculture", "agroforestry", "infrastructure"] },
    { n: 17, title: "Desertification: causes, effects and solutions", question: "What is desertification, what causes it, and how can it be reduced sustainably?", keywords: ["desertification", "overgrazing", "over-cultivation", "soil erosion", "appropriate technology", "contour traps", "sustainability"] }
  ],

  // 16 terms; Connections uses all 16 (four groups, each one chapter's idea). Chapters 2 and 5 teach their key words
  // through pretext.words and the text instead (biome and latitude words; desert climate words).
  glossary: [
    { term: "producer", means: "A plant that makes its own food from sunlight by photosynthesis; the start of every food chain.", chapter: "what-is-an-ecosystem" },
    { term: "consumer", means: "A living thing that gets its energy by eating plants or other animals.", chapter: "what-is-an-ecosystem" },
    { term: "decomposer", means: "An organism, such as a fungus or an earthworm, that breaks down dead plant and animal material and returns nutrients to the soil.", chapter: "what-is-an-ecosystem" },
    { term: "food web", means: "Many food chains in one ecosystem linked together, showing all the ways energy passes between living things.", chapter: "what-is-an-ecosystem" },
    { term: "buttress roots", means: "Wide ridges at the base of a rainforest tree trunk that keep a very tall tree standing in shallow soil.", chapter: "rainforest-characteristics" },
    { term: "drip tips", means: "Pointed ends on rainforest leaves that let heavy rain run off quickly so the leaves do not break.", chapter: "rainforest-characteristics" },
    { term: "lianas", means: "Woody creeper plants rooted in the ground that climb other trees to reach sunlight in the canopy.", chapter: "rainforest-characteristics" },
    { term: "epiphytes", means: "Plants that live on the branches of trees, high above the ground, taking their water and nutrients from the air.", chapter: "rainforest-characteristics" },
    { term: "selective logging", means: "Cutting only trees that have reached a certain height, so younger trees are left and the forest recovers.", chapter: "deforestation-and-management" },
    { term: "agroforestry", means: "Growing crops such as coffee and cacao under the shade of existing trees instead of clearing the forest for fields.", chapter: "deforestation-and-management" },
    { term: "forest reserve", means: "A large protected area of rainforest, such as a national park, where no logging is allowed.", chapter: "deforestation-and-management" },
    { term: "afforestation", means: "Planting trees to replace those that have been cut down, so the canopy grows back; the opposite of deforestation.", chapter: "deforestation-and-management" },
    { term: "desertification", means: "The spread of desert-like conditions into land on the edge of a desert, so it can no longer grow crops or feed animals.", chapter: "desert-development" },
    { term: "overgrazing", means: "Keeping too many animals on the land for too long, so the plants are eaten faster than they can regrow.", chapter: "desert-development" },
    { term: "salinisation", means: "A build-up of salt on the land surface, often where irrigation water evaporates in the heat, which makes the soil infertile.", chapter: "desert-development" },
    { term: "appropriate technology", means: "Simple, low-cost methods suited to the skills, needs and wealth of local people, such as earth embankments that trap soil and water.", chapter: "desert-development" }
  ],

  connections: [
    { group: "Who eats whom in an ecosystem", terms: ["producer", "consumer", "decomposer", "food web"] },
    { group: "How rainforest plants cope", terms: ["buttress roots", "drip tips", "lianas", "epiphytes"] },
    { group: "Using the rainforest without losing it", terms: ["selective logging", "agroforestry", "forest reserve", "afforestation"] },
    { group: "Trouble at the desert edge", terms: ["desertification", "overgrazing", "salinisation", "appropriate technology"] }
  ],

  chapters: [
    /* ───────────── 1 · what is an ecosystem? ───────────── */
    {
      key: "what-is-an-ecosystem", n: 1, title: "Ecosystems: a community and its home",
      lead: "What an ecosystem is, how its living and non-living parts depend on each other, what lives in the layers of Epping Forest, and how energy passes along a food chain and around a food web.",
      covers: [1, 2],
      pretext: {
        words: [
          { word: "ecosystem", means: "a community of plants and animals and the place they live in, all linked together", sentence: "A pond is a small ecosystem with plants, insects, fish and water." },
          { word: "biotic", means: "living", sentence: "The trees, birds and fungi are the biotic parts of a forest." },
          { word: "abiotic", means: "non-living", sentence: "Soil, water, sunlight and air are the abiotic parts of a forest." },
          { word: "interdependence", means: "two or more things depending on each other", sentence: "There is interdependence between plants and animals: each needs the other." },
          { word: "producer", means: "a plant that makes its own food from sunlight", sentence: "An oak tree is a producer, so a food chain can start with it." },
          { word: "decomposer", means: "a living thing that breaks down dead material", sentence: "An earthworm is a decomposer that feeds on dead leaves." }
        ],
        passage: [
          "An ecosystem is a community of plants and animals and the place where they live.",
          "The living parts are called biotic.",
          "The non-living parts, such as soil, water and sunlight, are called abiotic.",
          "All the parts depend on each other.",
          "This is called interdependence.",
          "Some ecosystems are small, like a pond or a hedgerow.",
          "Others are huge, like a tropical rainforest or a desert.",
          "A huge ecosystem is called a biome.",
          "Epping Forest in East London is a small-scale ecosystem.",
          "It has layers: the tree tops, a shrub layer and the forest floor.",
          "A food chain shows who eats whom.",
          "It starts with a plant, the producer, which gets its energy from the sun.",
          "The arrows show which way the energy goes.",
          "Many food chains joined together make a food web."
        ]
      },
      sections: [
        {
          heading: "Ecosystems at every scale",
          paragraphs: [
            "An ecosystem is a community of plants and animals that interact with each other and with their physical surroundings. Your lessons split it into three components: plants, animals and the environment they live in. Geographers also sort the parts into biotic (living: plants, animals, fungi) and abiotic (non-living: soil, water, air, sunlight, temperature). None of these parts works alone. Plants need water, light and nutrients from the soil; animals need plants, or other animals, for food; dead plants and animals feed the fungi and worms that return nutrients to the soil. Depending on each other like this is called interdependence. Your lesson gave a simple example: we depend on plants for oxygen and food, and plants depend on us for the carbon dioxide we breathe out.",
            "Ecosystems come at different scales. A local, small-scale ecosystem might be a pond, a hedgerow or a patch of woodland. A global, large-scale ecosystem is called a biome: a tropical rainforest, a deciduous woodland or a hot desert stretching across whole regions of the Earth. The same ideas (components, interdependence, food chains) work at both scales, which is why the unit starts small, in a forest on the edge of London, before going global.",
            "When a question asks you to describe an ecosystem, name its scale, name its biotic and abiotic components, and give one link between them. That is the kit for the first marks."
          ],
          tip: "Biotic has the letter b, like biology, the study of living things. Abiotic begins with a, which here means not: not living."
        },
        {
          heading: "Case study: Epping Forest, East London",
          paragraphs: [
            "Epping Forest lies in East London. It is what remains of a much larger forest that colonised England at the end of the last Ice Age. Your class annotated a profile of the forest in three layers. In the tree foliage at the top grow the native trees: oak, elm, ash and beech. This layer supports 38 species of birds. Below it is a shrub layer of holly and hazel at about 5 m, and under that a field layer of grasses, brambles, bracken, ferns and flowering plants. The shrub layer is where you might find 20 species of dragonfly. The forest is also home to 177 species of moss and lichen.",
            "On the forest floor, among the dead leaves and wood, live 700 species of fungi. Mammals, amphibians and reptiles live close to the floor and in the shrub layer. Each layer is a home for different living things, and each depends on the layer above and below: the trees shade the shrubs, the shrubs shelter the insects, and the fungi on the floor recycle everything that falls.",
            "The forest is your named example of a small-scale UK ecosystem. For a describe question you need its location (East London), its layers, its named species and at least two of the numbers. Learn them; they are the detail that earns the top marks."
          ],
          tip: "Learn the Epping Forest numbers as a ladder from the ground up: 700 fungi on the floor, 177 mosses and lichens, 20 dragonflies in the shrubs, 38 birds in the trees."
        },
        {
          heading: "Food chains and food webs",
          paragraphs: [
            "A food chain links plants and animals that rely on each other for food. It always starts with a producer: a plant, such as an oak tree or grass, that converts energy from the sun into sugars by photosynthesis. Everything else is a consumer, a living thing that gets its energy by eating plants or other animals. A herbivore eats plants; a carnivore eats other animals. Decomposers, such as fungi, earthworms and woodlice, break down dead plant and animal material and return the nutrients to the soil, where producers can use them again.",
            "In your Epping Forest work, the chain was oak tree, then caterpillar, then sparrow, then fox. The arrows in a food chain point from the thing being eaten to the thing that eats it, because they show the direction the energy flows. Energy goes from the oak leaves into the caterpillar, from the caterpillar into the sparrow, and from the sparrow into the fox. Nothing in the forest eats the fox or the deer; your fact files note that they are killed only by humans.",
            "A food web is many food chains joined together. The fact files you used showed that an oak tree is eaten by caterpillars, squirrels and woodpeckers; that mice and rabbits eat grass and are eaten by foxes and owls; that earthworms eat dead leaves and woodlice eat dead wood, and both are eaten by sparrows. One animal can be in many chains at once, and that is exactly why a change in one species spreads through the whole web (chapter 2)."
          ],
          worked: {
            q: "Outline the difference between a food chain and a food web. (2 marks)",
            steps: [
              "Say what a food chain is: a single line of links showing who eats whom, starting with a producer.",
              "Say what a food web is: many food chains in the same ecosystem joined together.",
              "Make the difference clear with a contrast word: a chain shows one route for energy, whereas a web shows all the routes at once."
            ],
            answer: "A food chain is a single line of links showing energy passing from a producer to one consumer after another, whereas a food web joins many food chains together to show all the feeding links in an ecosystem at once."
          },
          tip: "Arrows mean eaten by. Draw the arrow from the food to the eater, never the other way round."
        }
      ],
      gate: [
        { kind: "mcq", q: "What does abiotic mean?", options: ["Non-living", "Living", "A large-scale ecosystem", "Eating other animals"], answer: 0, why: "Abiotic means non-living: the soil, water, air and sunlight in an ecosystem. Biotic means living.",
          feedback: [
            "",
            "You have the two words the wrong way round. Biotic means living; abiotic (a- means not) means non-living, such as soil, water and sunlight.",
            "A large-scale ecosystem is a biome. Abiotic is a word for the non-living components of any ecosystem, whatever its size.",
            "Eating other animals describes a carnivore. Abiotic describes the non-living parts of an ecosystem: soil, water, air, light."
          ] },
        { kind: "numeric", q: "How many species of fungi can be found in Epping Forest?", answer: 700, tolerance: 0, units: "species", check: "EPPING_FUNGI", why: "Your lesson gives 700 species of fungi, most of them on the forest floor where dead leaves and wood are decomposed.",
          misconceptions: [
            { answer: 38, says: "38 is the number of bird species supported in the tree foliage. The fungi, on the forest floor, number 700 species.", check: "EPPING_BIRDS" },
            { answer: 177, says: "177 is the number of species of moss and lichen in the forest. The fungi count is 700.", check: "EPPING_MOSS" },
            { answer: 20, says: "20 is the number of dragonfly species in the shrub layer. Fungi are far more numerous: 700 species.", check: "EPPING_DRAGONFLY" }
          ] },
        { kind: "gap", q: "A large-scale ecosystem, such as a tropical rainforest, is called a ___.", answer: "biome", options: ["biome", "habitat", "food web"], why: "Global, large-scale ecosystems are called biomes. Small-scale ecosystems such as ponds and hedgerows are local.",
          feedback: {
            "habitat": "A habitat is the place where one species lives, which can be as small as a log. The word for a large-scale ecosystem covering a region of the Earth is biome.",
            "food web": "A food web is a diagram of feeding links, not a type of ecosystem. A large-scale ecosystem such as a rainforest is called a biome."
          } }
      ],
      modules: [
        {
          title: "An Epping Forest food chain",
          task: {
            kind: "order",
            q: "Put these living things in the order energy flows along the food chain, starting with the producer.",
            items: [
              "Oak tree: the producer, making food from sunlight",
              "Caterpillar: eats the oak leaves",
              "Sparrow: eats the caterpillar",
              "Fox: eats the sparrow"
            ]
          },
          contexts: [
            { label: "Drawing arrows", q: "You are drawing this food chain with arrows that show where the energy goes. Put the four living things in the correct order, from the first arrow to the last." },
            { label: "Fact files", q: "The fact files say the oak tree is eaten by caterpillars, caterpillars by sparrows and sparrows by foxes. Put the four in food-chain order, starting with the producer." },
            { label: "Energy from the sun", q: "Energy from the sun enters this chain through one living thing and ends in another. Put the four in order from where the energy enters to where it finishes." }
          ],
          levels: {
            support: {
              steps: [
                "Every food chain starts with a producer: the only living thing that makes its own food from sunlight. Which one is a plant?",
                "Next comes the herbivore, the animal that eats the plant.",
                "Then the animal that eats the herbivore.",
                "Last is the animal that nothing else in the forest eats."
              ],
              example: {
                q: "Put these in food-chain order: ladybird, greenfly, oak leaves, sparrow.",
                steps: ["The producer is the plant: oak leaves.", "Greenfly eat leaves; ladybirds eat greenfly.", "Sparrows eat ladybirds, so they come last."],
                answer: "Oak leaves, greenfly, ladybird, sparrow."
              }
            },
            core: { hint: "Start with the only one that uses sunlight. Then ask of each animal: what does it eat?" },
            stretch: { extend: "Explain what would happen to the fox if a disease killed most of the caterpillars, and why the fox might be affected less than the sparrow." }
          },
          explain: "Say, in one sentence, why the arrows in a food chain point towards the animal that does the eating.",
          why: "The oak tree is the producer, so it comes first. The caterpillar eats its leaves, the sparrow eats the caterpillar and the fox eats the sparrow. Each arrow shows energy passing from food to eater."
        },
        {
          title: "Roles in a food web",
          task: {
            kind: "match",
            q: "Match each role in an ecosystem to its meaning.",
            pairs: [
              ["Producer", "A plant that uses sunlight to make its own food by photosynthesis"],
              ["Herbivore", "An animal that eats plants"],
              ["Carnivore", "An animal that eats other animals"],
              ["Decomposer", "An organism that breaks down dead plant and animal material"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Only one of these is a plant. Producers produce their own food from sunlight.",
                "Herb is the clue in herbivore: it eats plants (herbs).",
                "Carn means flesh (think of carnival meat feasts): a carnivore eats other animals.",
                "The one left deals with dead things and recycles them."
              ],
              example: {
                q: "Match: consumer, food chain. Choices: a line of links showing who eats whom; a living thing that gets its energy by eating plants or animals.",
                steps: ["A consumer consumes, that is eats, plants or animals.", "A food chain is the line of links."],
                answer: "Consumer: a living thing that gets its energy by eating plants or animals. Food chain: a line of links showing who eats whom."
              }
            },
            core: { hint: "One makes food, two eat different kinds of food, and one cleans up after everything else." },
            stretch: { extend: "Your fact file lists the woodpecker as eating both insects and acorns. Explain which role it plays, and why some ecologists would call it an omnivore." }
          },
          explain: "Say, in one sentence, why an ecosystem could not keep going without decomposers.",
          why: "Producers (plants) make food from sunlight; herbivores eat plants; carnivores eat animals; decomposers break down dead material and return the nutrients to the soil for producers to use again."
        },
        {
          title: "Describing Epping Forest",
          task: {
            kind: "written",
            q: "Describe the main features of a small-scale ecosystem in the UK that you have studied. (4 marks)",
            marks: 4,
            criteria: [
              "Names and locates the ecosystem (Epping Forest, East London) and says it is small-scale",
              "Describes its layers (tree foliage, shrub layer, forest floor) with named plants",
              "Gives at least two specific facts about its living things (species counts or named animals)",
              "Mentions both biotic and abiotic components or a link between them"
            ],
            model: "Epping Forest in East London is a small-scale woodland ecosystem, the remains of a much larger forest from the end of the last Ice Age. Its tree foliage is made up of native oak, elm, ash and beech, and supports 38 species of birds. Below is a shrub layer of holly and hazel at about 5 m, where around 20 species of dragonfly live, and a field layer of grasses, brambles, bracken and ferns with 177 species of moss and lichen. On the forest floor 700 species of fungi decompose dead leaves and wood, returning nutrients to the soil that the trees depend on."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: name the forest, say where it is and say it is small-scale.",
                "Sentence 2: the top layer. Which trees grow there and how many bird species do they support?",
                "Sentence 3: the shrub layer and field layer, with their plants and one number.",
                "Sentence 4: the forest floor, the fungi, and what they do for the soil."
              ],
              example: {
                q: "In two sentences, describe the main features of a garden pond as a small-scale ecosystem.",
                steps: ["Say where it is, how big, and what the water and mud (abiotic) are like.", "Name some living things in it and one link between them."],
                answer: "A garden pond is a small-scale ecosystem of a few square metres of still water over mud. Pondweed produces food from sunlight, snails and tadpoles graze on it, and dragonfly larvae eat the tadpoles."
              }
            },
            core: { hint: "Location, layers, named species, numbers. Describe means say what is there, not why." },
            stretch: { extend: "Add one sentence explaining how the forest floor and the tree foliage depend on each other." }
          },
          explain: "Say, in one sentence, what makes a describe answer score full marks for this question.",
          why: "A top answer names and locates the forest, works through its layers with named plants and animals, and uses your lesson's numbers (38 birds, 20 dragonflies, 177 mosses and lichens, 700 fungi) as specific detail."
        }
      ]
    },

    /* ───────────── 2 · change in ecosystems and the world's biomes ───────────── */
    {
      key: "change-and-biomes", n: 2, title: "When ecosystems change, and the biomes of the world",
      lead: "How a drought, a storm or a chainsaw can unbalance a woodland and how it recovers, how a change to one species ripples through a food web, and why the Earth's great biomes lie in belts by latitude.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "resilience", means: "the ability of an ecosystem to recover after it is damaged", sentence: "The regrowth of English woodland after the 1987 storm shows resilience." },
          { word: "drought", means: "a long period with much less rain than normal", sentence: "The drought of 1976 to 1977 killed many trees in England." },
          { word: "deforestation", means: "cutting down and clearing a forest", sentence: "Deforestation leaves the soil bare, so rain can wash it away." },
          { word: "knock-on effect", means: "a change that happens because of an earlier change", sentence: "Fewer beetles had a knock-on effect on the woodpeckers that eat them." },
          { word: "biome", means: "a large-scale ecosystem, such as a desert or a rainforest", sentence: "The tundra is the coldest biome on Earth." },
          { word: "latitude", means: "how far north or south of the equator a place is", sentence: "Hot deserts lie at a latitude of about 30 degrees." }
        ],
        passage: [
          "Ecosystems are balanced, but the balance can be upset.",
          "Extreme weather can do it.",
          "In 1976 and 1977 a drought in England killed many trees.",
          "In 1987 a great storm blew down 15 million more.",
          "Animals that fed on those trees lost their food, and their numbers fell.",
          "But new trees grew, and the animals came back.",
          "This recovery is called resilience.",
          "People can upset the balance too, by cutting down forests.",
          "Bare soil is washed away by rain, so the forest may never recover.",
          "A change to one species spreads through the food web.",
          "Fewer beetles means fewer meals for woodpeckers, so there are fewer woodpeckers.",
          "Then the owls and hawks that eat woodpeckers go hungry too.",
          "Across the world, the biggest ecosystems are called biomes.",
          "They lie in belts by latitude, because latitude controls the climate."
        ]
      },
      sections: [
        {
          heading: "Natural change: drought and storm",
          paragraphs: [
            "The UK's natural biome is deciduous forest, which is why your unit studied a woodland. A healthy woodland is in balance: the numbers of trees, insects, birds and mammals stay roughly steady from year to year. Periods of extreme weather, and climate change, can disturb that balance. In 1976 to 1977 England experienced a drought that killed many trees. Then, in 1987, a great storm felled a further 15 million trees.",
            "Losing so many trees changed the species mix of the ecosystem, and population numbers declined for many of the food species in the food chain: fewer leaves and acorns meant fewer caterpillars and squirrels, and so on up the web. But woodlands can recover. Secondary forest growth took place as new trees grew up in the gaps, and the consumer species migrated back. Your lesson calls the recovery of the English woodlands an example of ecosystem resilience: the ability of an ecosystem to bounce back after a shock.",
            "Resilience has limits. An ecosystem recovers from a one-off storm because the soil, the seeds and the neighbouring habitats are still there. Take those away and recovery may be impossible, which is where human change comes in."
          ],
          tip: "Two dates and one number carry this story: drought 1976 to 1977, storm 1987, 15 million trees. Natural causes first, then human."
        },
        {
          heading: "Human change and knock-on effects",
          paragraphs: [
            "Ecosystems are sometimes damaged in permanent ways, especially when human forces such as deforestation are involved. Removing the forest exposes the soil beneath to rainfall, so it can be washed away, making it impossible for the ecosystem to recover. In the long term, climate change could have an impact too: changing temperature and precipitation patterns in southern England might make it harder for ecosystems like Epping Forest to survive in their current form.",
            "Because everything in a food web is linked, a change to one species has knock-on effects on others. Your lesson used an oak woodland web in which beetles are eaten by woodpeckers, and woodpeckers by owls and hawks. Suppose disease reduces the beetle population. The direct effect: woodpeckers have fewer meals, so their numbers may decline, while the oak trees may grow better because fewer beetles are feeding on them. The indirect effects: owl and hawk numbers may fall because they feed on woodpeckers; or the woodpeckers, which have several food sources, may simply eat more caterpillars, which would then cause problems for the blue tits that also depend on caterpillars.",
            "Ecosystems can also be restored deliberately. In Epping Forest, cattle grazing has been reintroduced to encourage the growth of vegetation, including veteran trees such as oak, whose numbers fell between 1976 and 1988 because of drought and storm damage. Grazing animals keep the grass short and their hooves open up bare ground, which lets low-growing flowers such as bird's-foot trefoil thrive in a way that mowing would not. More oak means more food for the animals that depend on it, so the number of species is kept up or increased."
          ],
          worked: {
            q: "In an oak woodland, beetles are eaten by woodpeckers, and woodpeckers are eaten by owls. Explain one direct and one indirect effect of a disease that kills most of the beetles. (4 marks)",
            steps: [
              "Find the species that eats the beetles directly: the woodpecker. Fewer beetles means fewer meals, so woodpecker numbers may fall. That is the direct effect.",
              "Follow the chain one link further: owls eat woodpeckers. Fewer woodpeckers means less food for owls, so owl numbers may fall. That is the indirect effect.",
              "Use the word because to link each effect to its cause, and the word may, since the web could adjust (woodpeckers might switch to other food).",
              "Two effects, each explained with a reason, earns the four marks."
            ],
            answer: "Direct effect: woodpecker numbers may fall because they have fewer beetles to eat. Indirect effect: owl numbers may then fall because there are fewer woodpeckers for them to eat."
          },
          tip: "Direct means the next link in the chain; indirect means two or more links away. Say which is which in your answer."
        },
        {
          heading: "The world's biomes",
          paragraphs: [
            "Global ecosystems, or biomes, are defined by their dominant vegetation: forest, grassland, scrub, desert or tundra. Each has its own climate. Your class built a table of them in your lessons. Tropical rainforest lies close to the equator and is hot (25 to 30°C) and wet (around 2000 to 3000 mm a year) all year round. Deserts lie at roughly 30° north and south of the equator, very hot throughout the year (over 30°C) with very little rain (less than about 300 mm). Mediterranean woodland and scrub lies at about 40 to 45° north and south, with hot summers (20 to 25°C), mild winters (10 to 15°C), dry summers and wet winters (about 800 mm).",
            "Further north, at roughly 50 to 60°, come the temperate forests. Deciduous woodland, the UK's biome, has warm summers (15 to 20°C), reasonably cold winters (3 to 7°C) and precipitation throughout the year (about 1000 mm). Coniferous woodland has warm summers (12 to 18°C), very cold winters (below 0°C for up to half the year), low rainfall (about 500 mm, mainly in summer) and winter snow. Tundra stretches from the Arctic Circle to about 60 to 70° north, for example in Canada: Arctic winters, warmest months of only 0 to 10°C, and yearly precipitation, including melting snow, of just 15 to 25 cm.",
            "Why do biomes form broad belts across the world? Because climate is controlled above all by latitude. The sun's energy is strongest at the equator and weakest at the poles, and the way air circulates around the globe (rising at the equator, sinking at about 30°, rising again further north) decides where it rains and where it does not. Match the climate belts to the vegetation belts and you have the map of the world's biomes. Mountains, ocean currents and distance from the sea tweak the pattern, which is why the belts are not perfectly straight."
          ],
          tip: "Learn the table as a journey from the equator to the pole: rainforest, desert, Mediterranean, deciduous and coniferous woodland, tundra."
        },
        {
          heading: "Describing a distribution",
          paragraphs: [
            "Describe questions about distribution ask where, not why. A four-mark answer should give the hemisphere, the latitude belt, the continents and some named countries or regions, moving from the general to the specific. For the tundra, for example: it is found in the northern hemisphere, in a ring around the North Pole that extends south until it meets the coniferous forest; it covers the northern and western coasts of Alaska, northern Canada and its Arctic islands, coastal Greenland, northern Sweden and Finland, and the northern coast of Russia across Siberia.",
            "The command word is describe, so an explanation (sinking cold air, low sunlight) earns nothing here. Save it for an explain question. A good habit is to picture the world map, start at one edge and travel round, naming places as you go."
          ],
          tip: "Hemisphere, latitude belt, continents, named places. Four steps, four marks."
        }
      ],
      gate: [
        { kind: "numeric", q: "A great storm in 1987 felled a further how many million trees in England?", answer: 15, tolerance: 0, units: "million", check: "STORM_TREES_M", why: "Your lesson says a further 15 million trees were felled by a great storm in 1987, after the drought of 1976 to 1977 had already killed many.",
          misconceptions: [
            { answer: 1987, says: "1987 is the year of the storm, not the number of trees. The storm felled 15 million trees.", check: "STORM_YEAR" },
            { answer: 1976, says: "1976 is the year the drought began. The 1987 storm felled 15 million trees.", check: "DROUGHT_START" },
            { answer: 150, says: "That is ten times too many; a zero has crept in. The storm felled 15 million trees.", check: "STORM_TREES_M*10" }
          ] },
        { kind: "mcq", q: "Which of these is a natural cause of change in a woodland ecosystem?", options: ["A drought", "Deforestation for farmland", "Building a road through the forest", "Overgrazing by farm animals"], answer: 0, why: "Drought is extreme weather, a natural cause. Deforestation, road building and overgrazing are human activities.",
          feedback: [
            "",
            "Deforestation is people cutting the forest down, so it is a human cause. A natural cause is one that happens without people, such as a drought or a storm.",
            "Road building is a human activity. Natural causes of change are things like extreme weather: the drought of 1976 to 1977 or the storm of 1987.",
            "Overgrazing happens when farmers keep too many animals on the land, so it is a human cause. Drought is the natural one here."
          ] },
        { kind: "gap", q: "Hot deserts are found at roughly ___ north and south of the equator.", answer: "30 degrees", options: ["30 degrees", "60 degrees", "10 degrees"], why: "The desert belt lies at about 30° north and south, where air that rose at the equator sinks and gives clear, dry skies.",
          feedback: {
            "60 degrees": "At 50 to 60 degrees north you find the deciduous and coniferous woodlands, with tundra beyond. Deserts are much closer to the equator, at about 30 degrees.",
            "10 degrees": "Within about 10 degrees of the equator the climate is hot and wet all year, which gives tropical rainforest, not desert. Deserts lie at about 30 degrees."
          } }
      ],
      modules: [
        {
          title: "Knock-on effects in a food web",
          task: {
            kind: "order",
            q: "A disease kills many beetles in an oak woodland. Put the knock-on effects in the order they would happen.",
            items: [
              "Disease reduces the number of beetles",
              "Woodpeckers have fewer meals",
              "Woodpecker numbers decline",
              "Owls and hawks, which feed on woodpeckers, have less food and may decline"
            ]
          },
          contexts: [
            { label: "Epping Forest", q: "Imagine a beetle disease spreading through Epping Forest, where woodpeckers eat beetles and owls and hawks eat woodpeckers. Put the knock-on effects in order." },
            { label: "Exam question", q: "An exam question asks you to explain the direct and indirect effects of a fall in beetle numbers. Put the effects in the order you would write them, from first cause to last effect." },
            { label: "Any oak wood", q: "In any oak woodland with beetles, woodpeckers, owls and hawks, a sudden loss of beetles ripples up the food web. Put the stages in order." }
          ],
          levels: {
            support: {
              steps: [
                "Start with the cause: the thing that changed first.",
                "Who eats the beetles? That animal feels the change next, as a shortage of food.",
                "A shortage of food leads to a fall in numbers of that animal.",
                "Finally, whatever eats that animal is affected: the indirect effect."
              ],
              example: {
                q: "Put in order: rabbits are hunted until few are left; foxes have less to eat; fox numbers fall; grass grows longer because fewer rabbits graze it.",
                steps: ["The first change is the hunting of rabbits.", "The direct effect on predators (foxes have less to eat, then fox numbers fall) and on the grass (it grows longer) follow."],
                answer: "Rabbits are hunted; foxes have less to eat; fox numbers fall; grass grows longer."
              }
            },
            core: { hint: "Cause, then less food, then fewer animals, then the animals one link further up the web." },
            stretch: { extend: "Explain why the woodpeckers might not decline at all, and what the consequence of that would be for blue tits." }
          },
          explain: "Say, in one sentence, why a change to one species in a food web is never felt by that species alone.",
          why: "The beetles change first; the woodpeckers that eat them have fewer meals and decline; the owls and hawks that eat woodpeckers then have less food. Direct effect, then indirect effect."
        },
        {
          title: "Which biome has which climate?",
          task: {
            kind: "match",
            q: "Match each biome to its climate.",
            pairs: [
              ["Tropical rainforest", "Hot all year (25 to 30°C) and wet all year (2000 to 3000 mm)"],
              ["Hot desert", "Very hot (over 30°C) with very little rain (less than 300 mm)"],
              ["Tundra", "Very cold: Arctic winters, warmest months only 0 to 10°C, 15 to 25 cm of precipitation"],
              ["Deciduous woodland", "Warm summers (15 to 20°C), cool winters (3 to 7°C), rain all year (about 1000 mm)"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Two biomes are hot. One is wet and one is dry: which is the forest and which the desert?",
                "The coldest climate must belong to the biome nearest the pole.",
                "The one with warm summers and cool winters is the UK's own biome.",
                "Check the rainfall figures: forests need plenty, deserts very little."
              ],
              example: {
                q: "Match: Mediterranean scrub, coniferous woodland. Choices: hot dry summers and mild wet winters, about 800 mm; warm summers, very cold snowy winters, about 500 mm.",
                steps: ["Mediterranean holidays are hot and dry in summer, so that is the first.", "Coniferous forests are the snowy ones."],
                answer: "Mediterranean scrub: hot dry summers, mild wet winters, about 800 mm. Coniferous woodland: warm summers, very cold snowy winters, about 500 mm."
              }
            },
            core: { hint: "Hot and wet, hot and dry, mild and damp, bitterly cold: which words go with which plants?" },
            stretch: { extend: "Explain why the hot desert and the tropical rainforest are both hot, yet one is wet and the other dry, using the movement of air between the equator and 30°." }
          },
          explain: "Say, in one sentence, what decides which biome grows in a place.",
          why: "Rainforest is hot and wet all year; hot desert is very hot and very dry; tundra is bitterly cold with little precipitation; deciduous woodland has warm summers, cool winters and rain all year."
        },
        {
          title: "Where is the tundra?",
          task: {
            kind: "written",
            q: "Describe where in the world the tundra biome is found. (4 marks)",
            marks: 4,
            criteria: [
              "States the hemisphere and the latitude belt (northern hemisphere, from the Arctic Circle to about 60 to 70° north)",
              "Describes the pattern (a ring around the North Pole, extending south to the coniferous forest)",
              "Names at least two continents or regions (North America, northern Europe, Siberia)",
              "Names specific places (Alaska, northern Canada, coastal Greenland, northern Sweden and Finland, northern Russia) and does not explain"
            ],
            model: "The tundra is found in the northern hemisphere, in a belt from the Arctic Circle to roughly 60 to 70° north. It forms a ring around the North Pole and extends south until it meets the coniferous forest. In North America it covers the northern and western coasts of Alaska, northern Canada and the Arctic islands; across the Atlantic it covers coastal Greenland and the far north of Sweden and Finland; and in Asia it runs along the northern coast of Russia and across Siberia."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: which hemisphere, and between which latitudes?",
                "Sentence 2: what shape does the distribution make on the map, and what biome lies to the south of it?",
                "Sentence 3: travel round the map naming continents and countries.",
                "Check: have you explained anything? If so, cross it out. Describe means where, not why."
              ],
              example: {
                q: "In two sentences, describe where tropical rainforests are found.",
                steps: ["Latitude belt first: on and near the equator, inside the tropics.", "Then the continents and example countries."],
                answer: "Tropical rainforests are found on and near the equator, inside the tropics. The largest are in South America (Brazil), central Africa (the Democratic Republic of the Congo) and South East Asia (Indonesia)."
              }
            },
            core: { hint: "Hemisphere, latitude belt, shape of the pattern, then named places. No explanation." },
            stretch: { extend: "Explain why there is almost no tundra in the southern hemisphere." }
          },
          explain: "Say, in one sentence, the difference between describing a distribution and explaining it.",
          why: "Full marks need the hemisphere and latitude belt, the ring-shaped pattern, and named places on more than one continent, with no explanation of why."
        }
      ]
    },

    /* ───────────── 3 · tropical rainforests: characteristics and adaptations ───────────── */
    {
      key: "rainforest-characteristics", n: 3, title: "Tropical rainforests: hot, wet and crowded with life",
      lead: "Where the rainforests are, the four layers of the forest, a climate with no seasons, a red soil that is rich and poor at the same time, and the clever ways plants and animals have adapted to it all.",
      covers: [5, 6, 7, 8],
      pretext: {
        words: [
          { word: "equator", means: "the imaginary line around the middle of the Earth", sentence: "The equator passes through the middle of the world's rainforests." },
          { word: "canopy", means: "the thick, leafy layer formed by the tops of most of the trees", sentence: "The canopy blocks most of the sunlight from the layers below." },
          { word: "emergent", means: "the tallest trees, which poke out above the canopy", sentence: "An emergent tree can be taller than a block of flats." },
          { word: "latosol", means: "the red rainforest soil, rich in iron and aluminium", sentence: "Latosol is red because of the iron in it." },
          { word: "leaching", means: "rain washing nutrients down out of the soil", sentence: "Heavy rain causes leaching, so the soil below the surface is poor." },
          { word: "biodiversity", means: "the range of different plants and animals in a place", sentence: "The rainforest has the greatest biodiversity of any biome." }
        ],
        passage: [
          "Tropical rainforests grow on and near the equator.",
          "The biggest are in South America, Africa and South East Asia.",
          "The forest has four layers.",
          "The tallest trees poke out above the rest: the emergent layer.",
          "Below them, the tree tops join to make the canopy, where most of the animals live.",
          "Under the canopy is the understorey, where climbing plants reach for light.",
          "The forest floor is dark, because only a little light gets through.",
          "It is hot all year, about 27 degrees, and it rains every month.",
          "The soil is red and deep, but the rain washes the goodness out of it.",
          "Only the top layer, made of rotting leaves, is rich.",
          "So the trees have shallow roots and wide buttress roots to hold them up.",
          "Leaves have drip tips so the rain runs off.",
          "Animals are adapted too: the tree frog has suction cups on its toes for climbing."
        ]
      },
      sections: [
        {
          heading: "Where the rainforests are, and their four layers",
          paragraphs: [
            "The tropical rainforest is a hot, wet biome found on and near the equator, inside the tropics. The largest rainforests are in South America (for example Brazil, which has the biggest area of all), Africa (the Democratic Republic of the Congo) and South East Asia (Indonesia, and the case-study country Malaysia). Many areas of the world's rainforests are being cut down: that is deforestation, the subject of chapter 4.",
            "The forest grows in four layers. At the top, the emergent layer is made of the tallest trees, which poke out above everything else; your lessons give heights of 50 m and even up to 75 m. Below them the crowns of most trees join to form the canopy, the densest layer, which blocks out the sunlight to the layers beneath and is home to eagles, butterflies and bats. Your lessons give a striking figure for the canopy: it is often said to hold about half of all the species on Earth. The understorey (also called the undercanopy) lies between the canopy and the ground; birds, insects and snakes are found there in abundance, and lianas climb up the trunks of larger trees to reach the light.",
            "At the bottom is the forest floor, or shrub layer. It receives the least light, only about 5 % of what falls on the canopy, so few plants grow there. Fungi feed on the decaying leaves and branches that rain down from above, and larger animals such as deer move about on the floor. Each layer has its own light, moisture and food, and so its own community."
          ],
          tip: "From the top down: emergent, canopy, understorey, forest floor. From the bottom up, the light increases at every step."
        },
        {
          heading: "The climate: hot and wet, every month",
          paragraphs: [
            "Your class drew a climate graph from a typical rainforest table. Temperature was 27°C in January, February and March, 28°C in April and May, 27°C in June and July, 26°C in August, 27°C in September, 28°C in October and 27°C in November and December. Rainfall, in mm, ran 225, 175, 180, 200, 165, 175, 185, 200, 185, 210, 230, 230 from January to December. Two things stand out. The temperature barely moves: the range is only 2°C, from 26 to 28°C. And rain falls heavily in every month: the driest month still has 165 mm, the wettest 230 mm, and the whole year adds up to 2360 mm, well inside the 2000 to 3000 mm your biome table gives.",
            "There are no seasons as the UK knows them, because the equator receives strong sunshine all year. Hot air rises over the equator every day, cools, and drops its moisture as heavy afternoon rain. That is why the rainforest is hot and wet throughout the year.",
            "To describe a climate graph, your lessons use TRASH: Trend (the overall pattern), Range (highest minus lowest), Anomaly (anything that breaks the pattern), Smallest and Highest (with the month and the figure). Always quote numbers and units: 230 mm, not just lots of rain."
          ],
          worked: {
            q: "Using the climate table, work out the total annual rainfall, the temperature range and the mean temperature of a typical tropical rainforest.",
            steps: [
              "Total rainfall: add the twelve monthly figures. 225 + 175 + 180 + 200 + 165 + 175 + 185 + 200 + 185 + 210 + 230 + 230 = 2360 mm.",
              "Temperature range: highest minus lowest. 28 − 26 = 2°C.",
              "Mean temperature: add the twelve monthly temperatures (326) and divide by 12. 326 ÷ 12 = 27.2°C, to one decimal place.",
              "Check the sense: 2360 mm sits inside the 2000 to 3000 mm the biome table gives, and 27°C sits inside its 25 to 30°C."
            ],
            answer: "Total rainfall 2360 mm; temperature range 2°C; mean temperature about 27°C.",
            checks: [
              { expr: "sum(TRF_RAIN)", value: 2360, tol: 0 },
              { expr: "TRF_T_MAX-TRF_T_MIN", value: 2, tol: 0 },
              { expr: "sum(TRF_TEMP)", value: 326, tol: 0 },
              { expr: "sum(TRF_TEMP)/12", value: 27.17, tol: 0.01 }
            ]
          },
          tip: "Range always means highest minus lowest, and it always has units: 2°C, 65 mm."
        },
        {
          heading: "Soils: red, deep and poor",
          paragraphs: [
            "Rainforest soils are called latosols. They are rich in iron and aluminium, which is why they are red. Despite the lush forest growing on them, they are very infertile. The heavy rain leaches (washes) the nutrients down and out of the soil, so below the surface there is little for roots to feed on.",
            "The most fertile part of the soil is right at the surface. There is a constant supply of dead leaves falling from the canopy, and in the heat and damp the decomposers break them down quickly into a thick layer of humus. Nutrients are released, taken up by roots and used by the trees before the rain can wash them away. That is the answer to your stretch question: the latosol is infertile, yet it grows an abundance of plants, because the nutrients are recycled so fast at the surface that the trees never need to rely on the poor soil beneath.",
            "It also explains a plant adaptation. Because the nutrients are at the surface, trees have shallow roots to absorb them. Shallow roots cannot anchor a 50 m tree on their own, so the tree grows buttress roots as well."
          ],
          tip: "Red because of iron; poor because of leaching; rich at the top because of humus. Three facts, three reasons."
        },
        {
          heading: "Adaptations of plants and animals",
          paragraphs: [
            "Plants have adapted to heat, heavy rain and fierce competition for light. Buttress roots are massive ridges at the base of the trunk that support tall trees and stop them toppling, and increase the surface area through which the tree exchanges gases. Drip tip leaves let the heavy rain run off so the leaves do not snap. Lianas are woody creepers that root in the ground but climb other trees to be carried up to the canopy where there is more sunlight. Epiphytes live on branches; they do not root in the ground but take their nutrients from the air and rain. Fast-growing trees race upwards to compete for light, since so little reaches the floor; the winners become emergents. Thin, smooth bark lets water flow down the trunk easily, and many flexible leaves can turn to face the sun to maximise photosynthesis.",
            "Animals are adapted too. The toucan nests in tree holes to hide from predators; its large, colourful bill helps to deter predators and its bright colours attract a mate, and strong claws grip the branches. The anteater has a long, sticky tongue to pull ants and termites out of their nests, huge clawed paws to break the nests open, and a long tail for climbing and balance. The red-eyed tree frog has suction cups on its toes so it can climb trees and cling to leaves; it feeds on smaller frogs, insects and crickets, and when it sleeps it hides its bright red eyes and blue and orange markings so it is harder to spot.",
            "In an explain answer, always pair the feature with the problem it solves: drip tips because of heavy rain; buttress roots because of shallow soil and great height; suction toes because the frog must climb wet, smooth leaves."
          ],
          tip: "Feature plus reason equals an explanation. A feature on its own is only a description."
        }
      ],
      gate: [
        { kind: "numeric", q: "In the typical rainforest climate table, the warmest months were 28°C and the coolest month 26°C. What is the annual temperature range, in °C?", answer: 2, tolerance: 0, units: "°C", check: "TRF_T_MAX-TRF_T_MIN", why: "Range is highest minus lowest: 28 − 26 = 2°C. The rainforest is hot all year with almost no seasonal change.",
          misconceptions: [
            { answer: 54, says: "You added the two temperatures. Range means the difference, so subtract: 28 − 26 = 2°C.", check: "TRF_T_MAX+TRF_T_MIN" },
            { answer: 27, says: "27°C is the typical (mean) temperature, not the range. Range is highest minus lowest: 28 − 26 = 2°C.", check: "round(sum(TRF_TEMP)/12)" },
            { answer: 26, says: "26°C is the lowest monthly temperature. The range is the gap between highest and lowest: 28 − 26 = 2°C.", check: "TRF_T_MIN" }
          ] },
        { kind: "mcq", q: "Why are rainforest soils (latosols) so infertile?", options: ["Heavy rain leaches the nutrients out of the soil", "There are no decomposers in the rainforest", "The soil is too cold for plants to grow", "The red colour poisons the plants"], answer: 0, why: "The heavy, year-round rain washes (leaches) nutrients down out of the soil. Only the surface layer, fed by rotting leaves, is fertile.",
          feedback: [
            "",
            "The rainforest is full of decomposers; the heat and damp make them work fast, which is why the surface humus layer is rich. The soil below is poor because rain leaches the nutrients out.",
            "Rainforest soil is warm all year (about 27°C). The problem is not cold but heavy rain, which leaches the nutrients away.",
            "The red colour comes from iron and aluminium and does no harm. The soil is infertile because heavy rain leaches its nutrients out."
          ] },
        { kind: "gap", q: "The tallest rainforest trees poke out above the canopy to form the ___ layer.", answer: "emergent", options: ["emergent", "understorey", "shrub"], why: "The emergent layer is the topmost layer, made of the tallest trees that emerge above the canopy.",
          feedback: {
            "understorey": "The understorey is below the canopy, between it and the forest floor, where lianas climb towards the light. The trees above the canopy form the emergent layer.",
            "shrub": "The shrub layer is another name for the forest floor, the lowest and darkest layer. The tallest trees above the canopy form the emergent layer."
          } }
      ],
      modules: [
        {
          title: "Wettest and driest",
          task: {
            kind: "numeric",
            q: "In the typical rainforest climate table, the wettest month has 230 mm of rain and the driest month 165 mm. What is the difference between them, in mm?",
            answer: 65, tolerance: 0, units: "mm", check: "TRF_R_MAX-TRF_R_MIN",
            why: "230 − 165 = 65 mm. Even the driest month gets 165 mm, which is more than many UK months, so the rainforest has no real dry season.",
            misconceptions: [
              { answer: 395, says: "You added the two months. A difference means subtract: 230 − 165 = 65 mm.", check: "TRF_R_MAX+TRF_R_MIN" },
              { answer: -65, says: "You subtracted the wettest from the driest and got a negative number. Take the smaller from the larger: 230 − 165 = 65 mm.", check: "TRF_R_MIN-TRF_R_MAX" },
              { answer: 75, says: "Check your subtraction: 230 − 165 is 65, not 75. Try 230 − 160 = 70, then take off 5 more.", check: "TRF_R_MAX-TRF_R_MIN+10" }
            ]
          },
          contexts: [
            { label: "Climate graph", q: "On your rainforest climate graph the tallest rainfall bar is 230 mm and the shortest is 165 mm. What is the range of monthly rainfall, in mm?", check: "TRF_R_MAX-TRF_R_MIN" },
            { label: "Field diary", q: "A researcher in the rainforest records 230 mm of rain in the wettest month of the year and 165 mm in the driest. By how many mm do the two months differ?", check: "TRF_R_MAX-TRF_R_MIN" },
            { label: "TRASH", q: "You are writing the R for Range in a TRASH description of rainfall. The highest month is 230 mm and the smallest is 165 mm. What figure do you write, in mm?", check: "TRF_R_MAX-TRF_R_MIN" }
          ],
          levels: {
            support: {
              steps: [
                "Difference, or range, means the larger figure minus the smaller.",
                "Write the larger first: 230.",
                "Take away the smaller: 230 − 165.",
                "Do it in steps if it helps: 230 − 100 = 130, 130 − 60 = 70, 70 − 5 = 65."
              ],
              example: {
                q: "A desert climate graph shows 35°C in the hottest month and 13°C in the coolest. What is the temperature range?",
                steps: ["Range is highest minus lowest.", "35 − 13 = 22."],
                answer: "22°C",
                checks: [{ expr: "35-13", value: 22, tol: 0 }]
              }
            },
            core: { hint: "Range means the gap between highest and lowest, so subtract the smaller from the larger." },
            stretch: { extend: "The temperature range is 2°C and the rainfall range is 65 mm. Explain what each range tells you about seasons in the rainforest." }
          },
          explain: "Say, in one sentence, why a small range tells you the rainforest has no real seasons.",
          why: "Range is highest minus lowest: 230 − 165 = 65 mm. A gap of 65 mm between the wettest and driest months, when the driest still has 165 mm, means it is wet all year."
        },
        {
          title: "Plant adaptations and what they are for",
          task: {
            kind: "match",
            q: "Match each rainforest plant adaptation to what it does.",
            pairs: [
              ["Buttress roots", "Wide ridges at the base of the trunk that support a very tall tree in shallow soil"],
              ["Drip tips", "Pointed leaf ends that let heavy rain run off so the leaves do not snap"],
              ["Lianas", "Woody creepers that root in the ground but climb other trees to reach the light"],
              ["Epiphytes", "Plants that live on branches and take their nutrients from the air instead of the soil"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Two of these are parts of a tree (roots and leaves); two are whole plants that live on or up other trees.",
                "Roots are about holding the tree up. Leaves are about water running off.",
                "Of the two climbing or perching plants, one is rooted in the ground and climbs; one never touches the ground.",
                "Check each pair: does the description solve a rainforest problem (height, heavy rain, lack of light)?"
              ],
              example: {
                q: "Match: thin smooth bark, fast-growing trees. Choices: race upwards to compete for the light; let water flow easily down the trunk.",
                steps: ["Smooth bark is about water running down.", "Growing fast is about reaching light first."],
                answer: "Thin smooth bark: let water flow easily down the trunk. Fast-growing trees: race upwards to compete for the light."
              }
            },
            core: { hint: "Roots hold, leaves drain, lianas climb, epiphytes perch." },
            stretch: { extend: "Explain how the latosol soil and the buttress roots are linked." }
          },
          explain: "Say, in one sentence, which rainforest condition each of these adaptations is a response to.",
          why: "Buttress roots support tall trees with shallow roots; drip tips shed heavy rain; lianas climb to the light; epiphytes live on branches and feed from the air."
        },
        {
          title: "Adapted to the rainforest",
          task: {
            kind: "written",
            q: "Explain how two plants and one animal are adapted to life in the tropical rainforest. (6 marks)",
            marks: 6,
            criteria: [
              "Names two plant adaptations and explains the rainforest problem each one solves",
              "Names one animal and explains how at least two of its features help it survive",
              "Links every feature to a reason using because or so that",
              "Uses accurate rainforest vocabulary (canopy, emergent, latosol, nutrients, predators)",
              "Gives specific detail (heights, light levels, named species) rather than vague statements"
            ],
            model: "Rainforest trees have buttress roots, massive ridges at the base of the trunk, because their roots are shallow to reach the nutrients in the surface humus and a tree of 50 m or more would otherwise topple. Their leaves have drip tips so that the heavy daily rain runs off quickly and the leaves do not snap or rot. Lianas are woody creepers that root in the soil but climb the trunks of other trees so that they are carried up to the canopy, where there is light for photosynthesis. The red-eyed tree frog has suction cups on its toes so it can climb trees and cling to wet leaves, and when it sleeps it hides its bright eyes and markings so that predators do not spot it. Each adaptation matches a condition of the forest: shallow soil, heavy rain, deep shade and many predators."
          },
          levels: {
            support: {
              steps: [
                "Plant 1: name a feature of the roots and the problem it solves (height, shallow nutrients).",
                "Plant 2: name a feature of the leaves or a climbing plant, and link it to rain or light.",
                "Animal: pick the toucan, the anteater or the red-eyed tree frog. Give two features and what each is for.",
                "Read it back: every feature should be followed by because or so that."
              ],
              example: {
                q: "In two sentences, explain one adaptation of the anteater.",
                steps: ["Feature: a long, sticky tongue.", "Reason: to pull ants and termites out of their nests."],
                answer: "The anteater has a long, sticky tongue. This lets it reach deep into ant and termite nests and pull out the insects it eats, which it could not do with a short tongue."
              }
            },
            core: { hint: "Feature, then because. Two plants, one animal, every feature explained." },
            stretch: { extend: "Explain why rainforest animals are so often brightly coloured, when bright colours could attract predators." }
          },
          explain: "Say, in one sentence, why an adaptation question needs a reason after every feature.",
          why: "The marks come from pairing each feature with the condition it answers: buttress roots with shallow nutrients and height, drip tips with heavy rain, lianas with the race for light, suction toes with climbing wet leaves."
        }
      ]
    },

    /* ───────────── 4 · deforestation in Malaysia and managing rainforests ───────────── */
    {
      key: "deforestation-and-management", n: 4, title: "Malaysia's rainforest: why it is cut down, and how rainforests can be managed",
      lead: "Why a country that was almost all forest fifty years ago has lost two fifths of it, what the clearing does to soil, wildlife, climate and money, and five ways the Amazon is being managed so that the forest and the people who need it can both carry on.",
      covers: [9, 10, 11, 12],
      pretext: {
        words: [
          { word: "deforestation", means: "cutting down and clearing forests", sentence: "Deforestation for palm oil has removed huge areas of Malaysia's forest." },
          { word: "NEE", means: "a newly emerging economy: a country growing richer fast", sentence: "Malaysia is an NEE, so it needs money from its land and resources." },
          { word: "selective logging", means: "cutting only the trees that have reached a certain height", sentence: "With selective logging, the young trees are left to grow." },
          { word: "agroforestry", means: "growing crops under the shade of forest trees", sentence: "Agroforestry lets farmers grow coffee without clearing the forest." },
          { word: "afforestation", means: "planting trees where they have been cut down", sentence: "Afforestation in Brazil aims to plant a billion trees." },
          { word: "sustainable", means: "meeting our needs now without spoiling things for the future", sentence: "Sustainable use of the forest leaves it standing for the next generation." }
        ],
        passage: [
          "Malaysia is a country in South East Asia.",
          "Fifty years ago, 99 % of it was covered in rainforest.",
          "Today it is 60 %.",
          "The forest is cut down for timber, for palm oil farms, for mines and for roads and dams.",
          "Poor families also clear small plots to grow food.",
          "Cutting the forest has local and global effects.",
          "Without tree roots, rain washes the soil away.",
          "Animals and plants lose their homes, so biodiversity falls.",
          "Trees store carbon, so burning them adds to climate change.",
          "But logging and farming also bring jobs and money to a growing country.",
          "Sustainable management tries to use the forest without destroying it.",
          "Loggers can take only the tall trees and leave the young ones.",
          "Farmers can grow crops under the trees instead of clearing them.",
          "Satellites can watch the forest and catch illegal loggers."
        ]
      },
      sections: [
        {
          heading: "Malaysia: a rainforest country",
          paragraphs: [
            "Malaysia is a country in South East Asia with its capital at Kuala Lumpur. Its natural vegetation is tropical rainforest. It is an NEE, a newly emerging economy, not a high-income country, which matters: it is growing fast and under pressure to make money from its land. Your starter gave two environment facts. Fifty years ago, 99 % of the country was covered in rainforest. Today the figure is 60 %. That is a loss of 39 percentage points, more than a third of the country, in half a century.",
            "The forest that remains is rich in biodiversity. Peninsular Malaysia, the mainland part of the country, is home to around 600 species of bird, among them the mountain peacock-pheasant and the Malayan whistling thrush, and to over 25 % of all the plant species found in Malaysia (not 55 %, as one of your true-or-false cards claimed). Malaysia has 850 species of orchid. Researchers believe many plants are still undiscovered and could have important medicinal value, perhaps providing cures for diseases. Lose the forest and those cures are lost before they are found.",
            "In the exam, Malaysia is your named example for both causes and impacts of deforestation. Learn the two percentages, the 600 birds, the 25 % of plants and the 850 orchids: they are the specific facts that lift an answer into the top level."
          ],
          tip: "99 to 60 in fifty years. Say it with both numbers and the time span, and the examiner knows you know the case study."
        },
        {
          heading: "Why rainforests are cut down",
          paragraphs: [
            "Deforestation is the action or process of clearing forests. Your keyword list gives the main causes in Malaysia. Commercial logging removes valuable hardwood timber for export; enormous quantities of tropical hardwood are shipped from South East Asia to industrial countries such as Japan. Palm oil plantations replace forest with a single crop whose oil goes into food, soap and fuel. Mineral extraction (mining) clears forest and digs it up. Subsistence farming by poor families clears small plots, often by slash and burn: cutting the trees and burning them to release nutrients into the soil for a few years of crops. Transmigration is a government moving people from crowded areas into forest areas to farm. Roads, settlements and hydroelectric power (HEP) dams clear or flood more.",
            "Your card sort added the wider reasons behind the clearing, using examples from South America as well as Asia. Cattle ranchers growing meat for home markets and for export (the beef burger market of North America) have cleared huge areas. Poor families, for example from the dry north east of Brazil, face a choice between moving to overcrowded cities, clearing forest for farmland, or going hungry. In 27 tropical countries, a quarter of all export earnings goes to repay debt to banks and governments in rich countries, so the forest is sold to pay the bills. Mineral wealth draws in more than 200 000 gold miners in the Brazilian Amazon, and the Carajas iron ore project, part-funded by the World Bank, threatens 16 % of the Amazonian rainforest. Huge HEP projects, funded from rich countries, have flooded large areas, drowning forest and poisoning rivers.",
            "Notice that almost every cause is economic. Timber, oil palm, minerals, beef and electricity all earn money, and a country repaying debt needs money fast. That is why stopping deforestation is so hard, and why chapter 4 ends with ways of earning from the forest without destroying it."
          ],
          worked: {
            q: "An area of rainforest the size of a football pitch, about 0.7 hectares, is destroyed every second. How much is lost in a minute, an hour, a day and a year?",
            steps: [
              "A minute has 60 seconds: 0.7 × 60 = 42 hectares a minute.",
              "An hour has 60 minutes: 42 × 60 = 2520 hectares an hour.",
              "A day has 24 hours: 2520 × 24 = 60 480 hectares a day.",
              "A year has 365 days: 60 480 × 365 = 22 075 200 hectares a year.",
              "Make sense of it: 100 hectares is 1 km², so that is 220 752 km² a year, nearly a quarter of a million square kilometres, which is about the area of the UK."
            ],
            answer: "42 hectares a minute; 2520 an hour; 60 480 a day; about 22 million hectares (roughly 220 000 km², about the size of the UK) a year.",
            checks: [
              { expr: "PITCH_HA*60", value: 42, tol: 1e-9 },
              { expr: "PITCH_HA*60*60", value: 2520, tol: 1e-9 },
              { expr: "PITCH_HA*60*60*24", value: 60480, tol: 1e-9 },
              { expr: "PITCH_HA*60*60*24*365", value: 22075200, tol: 1e-6 },
              { expr: "PITCH_HA*60*60*24*365/100", value: 220752, tol: 1e-6 }
            ]
          },
          tip: "Keep multiplying by the number of smaller units in the bigger one: 60, 60, 24, 365. Write the units at every step."
        },
        {
          heading: "Impacts: local and global",
          paragraphs: [
            "Your lesson set four objectives on the impacts of deforestation in Malaysia, and the first is soil erosion. Tree roots hold the soil together and the canopy breaks the force of the rain. Remove them and the heavy tropical rain hits bare ground, washes the soil into rivers and leaches out what nutrients remain. The land quickly becomes useless for farming, so farmers clear more forest, and the silt chokes the rivers. The second impact is on biodiversity. Clearing destroys habitats; species that live only in that forest have nowhere else to go, and plants that might have given us medicines are lost.",
            "The third impact is global: climate change. Trees take in carbon dioxide as they grow and store the carbon in their wood. When forest is burned, that carbon goes straight back into the atmosphere as carbon dioxide, adding to global warming, and the lost trees can no longer absorb carbon in future. Forests also return moisture to the air, so large-scale clearing can make the regional climate drier.",
            "The fourth objective is economic, and it has two sides. Deforestation brings gains: jobs in logging, mining and plantations, export income from timber and palm oil, electricity from HEP dams, and tax for an NEE that needs to develop. It also brings losses: soil that can no longer be farmed, flooding and silted rivers that cost money to repair, and the loss of future income from tourism and medicines. Your lesson asked you to sort impacts into social, environmental, economic and political, and into positive and negative. A top answer does both."
          ],
          tip: "Local impacts: soil, water, wildlife, people nearby. Global impacts: carbon and climate. Name which is which."
        },
        {
          heading: "Managing rainforests sustainably",
          paragraphs: [
            "Sustainable development means meeting the needs of the present without compromising the needs of the future. For a rainforest it means using its resources in a way that keeps the forest for the future, while still allowing economic development and protecting the health of the people who live there. Your Amazon lesson looked at five strategies. Selective logging cuts trees only when they reach a particular height, so younger trees are left with a guaranteed life span and the forest regains full maturity after around 30 to 50 years; the canopy is protected, parent trees drop seeds and the roots keep the topsoil healthy, yet money is still made from timber. Its weakness: illegal loggers do not follow the rules. Agroforestry grows valuable crops such as coffee and cacao under the canopy; nothing is cleared, leaf litter keeps the soil fertile so less fertiliser is needed, and fruit trees such as avocado and guava go on producing year after year. The main drawback is the risk from introduced non-native species.",
            "Forest reserves, also called national parks, are large protected areas where no logging is allowed, preserving untouched forest for the future. In 2002 Brazil created the largest in the world, the Tumucumaque National Park, covering nearly 4 million hectares in the state of Amapa and home to jaguars, sloths and freshwater turtles. Critics worry that corruption and a lack of funding mean poaching and illegal logging continue; park staff on very low wages may be open to bribery, so the park seeks money from the World Wildlife Fund and the World Bank. Afforestation is the opposite of deforestation: replanting trees to restore the canopy. The Brazilian state of Para set a goal of replanting 1 billion trees to replace those lost to logging, funded by government and private companies, aiming to cut greenhouse gases by 5 %. But a tropical tree takes around 30 years to mature, so a rainforest ecosystem is slow to re-establish. Satellite monitoring uses satellite images, aerial photography and GIS to track changes in the forest, spot where deforestation is speeding up and send teams to challenge illegal logging. A non-profit organisation (Imazon) working with the Brazilian government used real-time images and a system of sanctions and rewards, and in 2013 the deforestation rate fell by 70 % compared with the previous year.",
            "Why is sustainable management so hard in the Amazon? Your class listed the barriers: it covers nine South American countries, which must co-operate; poverty means the need to develop outweighs protection; illegal logging is hard to stop; people need education; patrolling a vast area costs money; and the growing demand for food, farmland and palm oil is difficult to resist. Your stakeholder debate (government, indigenous people, a meat company, an environmental campaigner) showed that each group values the forest differently, and that is why a conclusion must weigh the sides rather than pick one."
          ],
          tip: "Five strategies, five examples: height limit (30 to 50 years), coffee under the canopy, Tumucumaque 2002, a billion trees in Para, satellites and a 70 % fall."
        }
      ],
      gate: [
        { kind: "numeric", q: "Fifty years ago 99 % of Malaysia was covered in rainforest; today it is 60 %. By how many percentage points has the forest cover fallen?", answer: 39, tolerance: 0, units: "percentage points", check: "MAL_FOREST_THEN-MAL_FOREST_NOW", why: "99 − 60 = 39 percentage points. More than a third of the country has lost its forest cover in half a century.",
          misconceptions: [
            { answer: 60, says: "60 % is the forest cover today, not the fall. The question asks how much it has dropped: 99 − 60 = 39 percentage points.", check: "MAL_FOREST_NOW" },
            { answer: 40, says: "40 % is the share of the country that is NOT forest today (100 − 60). The fall in forest cover is 99 − 60 = 39 percentage points.", check: "100-MAL_FOREST_NOW" },
            { answer: 159, says: "You added the two percentages. To find a fall, subtract the later figure from the earlier one: 99 − 60 = 39.", check: "MAL_FOREST_THEN+MAL_FOREST_NOW" }
          ] },
        { kind: "mcq", q: "How is Malaysia best described?", options: ["A newly emerging economy (NEE) in South East Asia", "A high-income country (HIC) in South East Asia", "A low-income country (LIC) in South America", "An NEE in West Africa"], answer: 0, why: "Malaysia is a newly emerging economy in South East Asia. Your true-or-false task corrected the card that called it an HIC.",
          feedback: [
            "",
            "Malaysia is in South East Asia, but it is not a high-income country. Your true-or-false task corrected this card: Malaysia is an NEE, a newly emerging economy.",
            "Malaysia is in South East Asia, not South America, and it is an NEE rather than a low-income country. Brazil is the South American rainforest country in your lessons.",
            "NEE is right, but the continent is wrong. Malaysia is in South East Asia; the African rainforest country in your lessons is the Democratic Republic of the Congo."
          ] },
        { kind: "gap", q: "Cutting down only the trees that have reached a certain height, and leaving the younger ones, is called ___ logging.", answer: "selective", options: ["selective", "illegal", "clear-fell"], why: "Selective logging selects only mature trees, so the canopy survives and the forest regains maturity in 30 to 50 years.",
          feedback: {
            "illegal": "Illegal logging is logging without permission and usually ignores any rules about which trees to take. Choosing only trees above a certain height is selective logging.",
            "clear-fell": "Clear-felling means cutting down every tree in an area, which is the opposite of what is described. Taking only the tall trees is selective logging."
          } }
      ],
      modules: [
        {
          title: "Forest lost every hour",
          task: {
            kind: "numeric",
            q: "About 42 hectares of rainforest are cleared every minute. How many hectares are cleared in one hour?",
            answer: 2520, tolerance: 0, units: "hectares", check: "HA_PER_MIN*60",
            why: "There are 60 minutes in an hour, so 42 × 60 = 2520 hectares an hour.",
            misconceptions: [
              { answer: 102, says: "You added 60 to 42. The 42 hectares happen every minute, and there are 60 minutes, so multiply: 42 × 60 = 2520.", check: "HA_PER_MIN+60" },
              { answer: 1008, says: "You multiplied by 24, the number of hours in a day. An hour has 60 minutes, so 42 × 60 = 2520 hectares.", check: "HA_PER_MIN*24" },
              { answer: 60480, says: "That is the figure for a whole day (42 × 60 × 24). For one hour, stop after multiplying by 60: 42 × 60 = 2520.", check: "HA_PER_MIN*60*24" }
            ]
          },
          contexts: [
            { label: "Lesson time", q: "Rainforest is being cleared at about 42 hectares every minute. How many hectares disappear during a lesson lasting exactly one hour?", check: "HA_PER_MIN*60" },
            { label: "Football match", q: "A football pitch of forest goes every second, which is about 42 hectares a minute. How many hectares are cleared during one hour of football?", check: "HA_PER_MIN*60" },
            { label: "News report", q: "A news report says 42 hectares of rainforest are lost every minute. The reporter wants the figure for one hour. What is it, in hectares?", check: "HA_PER_MIN*60" }
          ],
          levels: {
            support: {
              steps: [
                "Ask: how many minutes are there in one hour? 60.",
                "The 42 hectares happens once every minute, so it happens 60 times in an hour.",
                "Multiply: 42 × 60.",
                "Check with a simpler sum: 40 × 60 = 2400, then add 2 × 60 = 120."
              ],
              example: {
                q: "About 0.7 hectares of forest are cleared every second. How many hectares are cleared in one minute?",
                steps: ["A minute has 60 seconds.", "0.7 × 60 = 42."],
                answer: "42 hectares",
                checks: [{ expr: "PITCH_HA*60", value: 42, tol: 1e-9 }]
              }
            },
            core: { hint: "Per minute to per hour means multiply by the number of minutes in an hour." },
            stretch: { extend: "Carry the calculation on to a day and a year, convert to square kilometres (100 hectares = 1 km²) and compare the result with the area of the UK, which your lessons say is about the same." }
          },
          explain: "Say, in one sentence, why you multiply rather than add when changing from per minute to per hour.",
          why: "42 hectares every minute, 60 minutes in an hour: 42 × 60 = 2520 hectares an hour. Over a day that becomes 60 480 hectares, and over a year about 22 million."
        },
        {
          title: "Five ways to manage a rainforest",
          task: {
            kind: "match",
            q: "Match each sustainable management strategy to its description.",
            pairs: [
              ["Selective logging", "Only trees above a certain height are cut, so the forest regains maturity in 30 to 50 years"],
              ["Agroforestry", "Growing crops such as coffee and cacao under the shade of the existing trees"],
              ["Forest reserves", "Large protected areas, such as national parks, where no logging is allowed"],
              ["Afforestation", "Replanting trees to replace those that have been cut down"],
              ["Satellite monitoring", "Using satellite images and GIS to track forest loss and catch illegal logging"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Two strategies are about trees being cut or planted: one cuts carefully, one plants.",
                "One is about farming without clearing.",
                "One is about protecting an area by law.",
                "One is about watching from space."
              ],
              example: {
                q: "Match: ecotourism, international agreements. Choices: countries agreeing together to protect forests or ban hardwood imports; small-scale tourism that earns money from the forest while leaving it standing.",
                steps: ["Tourism is the one about visitors.", "Agreements are between countries."],
                answer: "Ecotourism: small-scale tourism that earns money from the forest while leaving it standing. International agreements: countries agreeing together to protect forests."
              }
            },
            core: { hint: "Cut carefully, farm underneath, protect by law, plant again, watch from above." },
            stretch: { extend: "Rank the five strategies for sustainability, as you did on your radar graph, and justify your top and bottom choices with an advantage and a disadvantage of each." }
          },
          explain: "Say, in one sentence, what all five strategies have in common.",
          why: "Selective logging cuts only mature trees; agroforestry farms under the canopy; forest reserves protect areas by law; afforestation replants; satellite monitoring watches for illegal clearing. Each lets people use or protect the forest without destroying it."
        },
        {
          title: "Worth more standing?",
          task: {
            kind: "written",
            q: "Tropical rainforests are worth more to a country left standing than cut down. To what extent do you agree? Use a named example in your answer. (9 marks)",
            marks: 9,
            criteria: [
              "Introduces the named example (Malaysia) with specific facts (99 % to 60 %, around 600 bird species, 25 % of plant species, 850 orchids)",
              "Explains at least two reasons why the forest is cut down and the economic gains that result",
              "Explains at least two impacts of deforestation (soil erosion, biodiversity loss, climate change, economic losses), local and global",
              "Considers how sustainable management (for example selective logging or agroforestry) could let the country gain from the forest without losing it",
              "Reaches a clear, justified conclusion that answers to what extent"
            ],
            model: "Malaysia, an NEE in South East Asia, has cut its rainforest cover from 99 % fifty years ago to 60 % today. The forest has been cleared for hardwood timber exported to countries such as Japan, for palm oil plantations, for mining and for HEP dams, and these bring jobs, export income and tax to a developing country, so the forest clearly has value when cut. However, the costs are large and lasting. Without roots and canopy the heavy rain erodes the soil and silts the rivers, so the land soon becomes useless; Peninsular Malaysia's 600 or so bird species and over 25 % of the country's plants, including 850 orchid species, lose their habitat, and undiscovered medicines are lost with them; and burning the forest releases stored carbon, adding to global climate change. The standing forest also earns money through tourism and could be used sustainably: selective logging still produces timber while the forest recovers in 30 to 50 years, and agroforestry grows coffee and cacao under the canopy. Overall I agree to a large extent: cutting the forest brings quick income, but a standing, sustainably managed forest keeps its soil, wildlife, climate role and future income, which is worth more in the long run."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1: define deforestation and introduce Malaysia with two or three numbers.",
                "Paragraph 2: the case for cutting. Why is it happening and what does the country gain?",
                "Paragraph 3: the case for leaving it standing. Two impacts of clearing (one local, one global) and what the forest is worth alive.",
                "Paragraph 4: can sustainable management give both? Name one strategy.",
                "Conclusion: answer the question with to a large or small extent, and say why."
              ],
              example: {
                q: "In three sentences, argue whether a hedgerow on a farm is worth more left standing or grubbed out to enlarge a field.",
                steps: ["Give the gain from removing it (a bigger field, easier machinery).", "Give what is lost (wildlife habitat, shelter from wind, soil held in place).", "Conclude with to what extent."],
                answer: "Removing a hedgerow gives the farmer a bigger field that is quicker to plough. But the hedge is a habitat for birds and insects, shelters the crops from wind and holds the soil in place. To a large extent it is worth more standing, because the extra few metres of field do not make up for the soil and wildlife lost."
              }
            },
            core: { hint: "Both sides with facts, then a judgement. Numbers from Malaysia on every side of the argument." },
            stretch: { extend: "Add a paragraph on the barriers to sustainable management in the Amazon, and explain why what works in theory is hard to deliver in practice." }
          },
          explain: "Say, in one sentence, what a to what extent question needs at the end that a describe question does not.",
          why: "A level 3 answer uses Malaysia's facts on both sides, separates local from global impacts, brings in a sustainable alternative and ends with a judgement that says how far it agrees and why."
        }
      ]
    },

    /* ───────────── 5 · hot deserts: location, climate, life ───────────── */
    {
      key: "hot-desert-characteristics", n: 5, title: "Hot deserts: a land of extremes",
      lead: "Why the world's hot deserts sit in two belts around 30° north and south, what a climate of 50°C days and freezing nights does to soil and water, and how cacti, camels and foxes manage to live there.",
      covers: [13, 14],
      pretext: {
        words: [
          { word: "arid", means: "very dry, with little or no rain", sentence: "The Sahara has an arid climate: some months have no rain at all." },
          { word: "high pressure", means: "sinking air that gives clear skies and no rain", sentence: "High pressure over the desert keeps the sky cloudless." },
          { word: "succulent", means: "a plant that stores water in thick, fleshy leaves or stems", sentence: "A cactus is a succulent that swells up after rain." },
          { word: "endemic", means: "found naturally in one place and nowhere else", sentence: "The addax is an endemic desert antelope that is now at risk." },
          { word: "biodiversity", means: "the range of plants and animals living in a place", sentence: "Desert biodiversity is clustered around rare sources of water." },
          { word: "nocturnal", means: "active at night", sentence: "Many desert animals are nocturnal, to avoid the daytime heat." }
        ],
        passage: [
          "A hot desert is a place of extreme heat and extreme dryness.",
          "It gets less than 250 mm of rain a year, and the rain is unreliable.",
          "Days can reach 50 degrees, but nights can fall below freezing.",
          "Most hot deserts lie about 30 degrees north and south of the equator.",
          "Air that rose at the equator sinks there, so the skies stay clear and dry.",
          "The Sahara in North Africa is the largest hot desert.",
          "Desert soil is sandy or stony, with little goodness in it.",
          "Even so, plants and animals live there.",
          "A cactus stores water in its thick stem and has spines instead of leaves.",
          "A camel has wide feet for the sand and a fatty hump for energy.",
          "The fennec fox has big ears to lose heat.",
          "Many desert animals come out only at night.",
          "Desert wildlife is under threat from farming, water use and climate change."
        ]
      },
      sections: [
        {
          heading: "Where hot deserts are, and why",
          paragraphs: [
            "Hot deserts are arid areas of land with poor, sandy soil, typically receiving less than 25 cm (250 mm) of precipitation a year. Summer daytime temperatures can reach or exceed 50°C, yet nights can be very cold. Most lie in two belts, roughly 30° north and 30° south of the equator, usually in dry continental interiors. Your lessons name the Sahara (North Africa), the Colorado Desert and the Great Basin Desert in the USA (an unusual one, because most of its precipitation falls as snow), the Mojave, the Thar Desert in India and Pakistan, and the Gobi in Asia.",
            "Why 30°? Air that was heated at the equator rises, cools and spreads out towards the poles high in the atmosphere. At around 30° it sinks back towards the ground. Sinking air forms a persistent belt of high pressure, and sinking air does not make cloud or rain, so the skies stay clear and the ground bakes. The same lack of cloud lets the heat escape at night, which is why desert nights are so cold. Two other factors help to form deserts: mountain ranges create rain shadows, so only very dry air moves beyond them, and cold ocean currents offshore chill the air so that it carries little moisture inland.",
            "The Sahara is the largest hot desert in the world. It blankets much of the northern third of Africa, about 9 million square kilometres, stretching some 3000 miles from the Atlantic Ocean to the Nile and the Red Sea and more than 1000 miles south from the Atlas Mountains to the Sahel. It is more than 16 times the size of France and covers all or part of countries including Mauritania, Algeria, Libya, Egypt, Niger, Tunisia, Mali, Chad and Sudan."
          ],
          tip: "Explain the location in three moves: rising air at the equator, sinking air at 30°, high pressure with no cloud or rain. Then add rain shadows and cold currents for extra depth."
        },
        {
          heading: "Climate and soils",
          paragraphs: [
            "Desert climates have an extreme temperature range. During the day the temperature may reach 50°C; at night it can fall below 0°C, because there is no cloud to hold the heat in. There is very little rainfall, less than 250 mm a year, and it is unreliable: months of arid conditions are broken by sudden stormy downpours. Winters are mild and summers very hot. Your Sahara climate graph showed a peak temperature of 35°C in July and August, a winter average of about 13°C from December to February, just 2 mm of rain in December, and no rain at all in June, July and September. The conclusion your class wrote: the lower the rainfall, the higher the temperature, and the higher the rainfall, the lower the temperature.",
            "Desert soils are sandy or stony, with little organic matter because there is so little vegetation to rot into them. They are dry, but can soak up water rapidly after rain. Evaporation draws salts to the surface, often leaving a white residue on the ground. All of this means that desert soils are not particularly fertile, and strong winds blow away layers of topsoil, leaving them thin.",
            "The components of a desert ecosystem are tightly interdependent. The climate (abiotic) is dry, dries out the soil and decides which plants and animals can survive the heat. The soil (abiotic) is dry and thin because of the heat and wind. The vegetation (biotic) is sparse and low-growing because of the lack of rain and the infertile soil. The animals (biotic) have adapted to the harsh climate by storing water, and because the vegetation is so sparse they must roam large areas to find enough to eat."
          ],
          worked: {
            q: "On the Sahara climate graph the winter months of December, January and February have average temperatures of 14°C, 12°C and 14°C. What is the average winter temperature?",
            steps: [
              "Add the three monthly figures: 14 + 12 + 14 = 40.",
              "Divide by the number of months: 40 ÷ 3 = 13.333…",
              "Round sensibly and give the unit: about 13.3°C.",
              "Check the sense: the answer must sit between the lowest (12) and highest (14) of the three figures, and it does."
            ],
            answer: "About 13.3°C",
            checks: [
              { expr: "(14+12+14)", value: 40, tol: 0 },
              { expr: "(14+12+14)/3", value: 13.33, tol: 0.01 }
            ]
          },
          tip: "An average must land between the smallest and largest value you added. If it does not, you have slipped."
        },
        {
          heading: "Biodiversity and its threats",
          paragraphs: [
            "There is plenty of life in the desert if you know where to look. Deserts can be home to a large number of endemic species, plants and animals found naturally in that place and nowhere else. They are usually clustered together in very small areas, often around temporary sources of water such as oases, seasonal rivers and lakes. Biodiversity, the range of plant and animal life in a place, is therefore low across the desert as a whole but concentrated where there is water.",
            "That makes it fragile. Human activities such as farming, irrigation and pumping out groundwater threaten those water sources. Climate change is reducing the snowpack and melting the glaciers that feed water to desert communities and wildlife, and longer droughts dry up supplies faster still. The result is habitat loss, and deserts are losing their biodiversity. In the Sahara, animals such as the addax, the cheetah and the dama gazelle are at risk of extinction. The African wild dog is one of the most endangered mammals in the world, with only about 6600 left, most of them in southern Africa and the southern Sahara in Niger; its threats are habitat loss and being killed to protect farm livestock, because when its prey disappears it turns to goats and sheep.",
            "What is being done? Protected areas are being created, including wildlife corridors that link them, and game reserves protect animals from hunting. But there is still conflict with farmers whose animals are attacked, and protection costs money in some of the poorest regions on Earth."
          ],
          tip: "Endemic means found only here. Lose the habitat and the species has nowhere else on Earth to go."
        },
        {
          heading: "Adaptations: surviving heat and drought",
          paragraphs: [
            "Plants have adapted to overcome extreme heat and the lack of water. Cacti such as the saguaro have large stems that store water, collected by their roots, for the long summer drought; the stem swells after rain. They have spines instead of leaves, which lose far less water and protect the plant from herbivores, and a waxy coating on the stem; their pores close in the heat of the day and open at night. Many desert plants, like the desert holly, have small waxy leaves or needles, and some shrubs simply drop their leaves and go dormant in summer. Flowering plants bloom and set seed quickly after any rain. A succulent is any plant that stores water in thick, fleshy leaves or stems.",
            "Animals are adapted too. The camel has thick fur on top of its body for shade and thin fur elsewhere to lose heat; large, flat feet that spread its weight on sand; a fatty hump that provides energy when food is short; slit-like nostrils and two rows of eyelashes to keep out wind-blown sand; and it loses very little water through urine or sweat, so it can go a long time without drinking. The fennec fox has large ears that give off heat. The cottontail rabbit avoids the heat by being nocturnal, active only at night. Other desert animals in your worksheet include the addax, the jerboa and the thorny devil lizard.",
            "As with the rainforest, an explain answer pairs each feature with the problem it solves: wide feet because of soft sand; big ears because of heat; night-time activity because of the daytime sun; stored water because rain is rare."
          ],
          tip: "Heat, drought, sand. Sort every adaptation under one of those three headings and you will never run out of things to explain."
        }
      ],
      gate: [
        { kind: "numeric", q: "Your hot deserts lesson defined a hot desert as receiving less than 25 cm of precipitation a year. How many millimetres is 25 cm?", answer: 250, tolerance: 0, units: "mm", check: "DESERT_RAIN_CM*10", why: "There are 10 mm in 1 cm, so 25 cm = 250 mm. Climate graphs use mm, so you need both forms.",
          misconceptions: [
            { answer: 25, says: "You have left the figure in centimetres. There are 10 mm in a centimetre, so 25 cm = 250 mm.", check: "DESERT_RAIN_CM" },
            { answer: 2500, says: "You multiplied by 100, as if converting metres to centimetres. Centimetres to millimetres is times 10: 25 cm = 250 mm.", check: "DESERT_RAIN_CM*100" },
            { answer: 300, says: "300 mm is the rounded figure your global ecosystems table used for deserts. The hot deserts lesson gives 25 cm, which is 250 mm.", check: "BIOME_DESERT_RAIN_MM" }
          ] },
        { kind: "mcq", q: "Why are most hot deserts found at about 30° north and south of the equator?", options: ["Air that rose at the equator sinks there, forming high pressure with little cloud or rain", "The sun is directly overhead at 30° all year", "Warm ocean currents dry out the coasts at 30°", "The equator is too cold for deserts to form"], answer: 0, why: "Air heated at the equator rises, moves towards the poles and sinks at about 30°. Sinking air gives high pressure, clear skies and almost no rain.",
          feedback: [
            "",
            "The sun is overhead at the equator and the tropics, not at 30°, and overhead sun on its own gives the hot, wet rainforest. Deserts form where air sinks: at about 30°.",
            "It is cold ocean currents, not warm ones, that help form some deserts by chilling the air so it holds little moisture. The main reason is sinking air and high pressure at about 30°.",
            "The equator is the hottest part of the Earth, but its rising air makes it wet, so it has rainforest, not desert. Deserts form where that air sinks again, at about 30°."
          ] },
        { kind: "gap", q: "A plant such as a cactus that stores water in its thick, fleshy stems or leaves is called a ___.", answer: "succulent", options: ["succulent", "epiphyte", "decomposer"], why: "Succulent is the keyword your lessons give for desert plants that store water in thick fleshy leaves or stems.",
          feedback: {
            "epiphyte": "An epiphyte is a rainforest plant that lives on the branches of trees and feeds from the air. A water-storing desert plant is a succulent.",
            "decomposer": "A decomposer is a fungus or animal that breaks down dead material; it is a role in a food web, not a type of plant. A water-storing desert plant is a succulent."
          } }
      ],
      modules: [
        {
          title: "Why desert nights are cold",
          task: {
            kind: "mcq",
            q: "Why does the temperature in a hot desert fall so far at night, sometimes below 0°C?",
            options: [
              "There is almost no cloud, so the heat of the day escapes quickly into space",
              "The sand freezes because it holds so much water",
              "Cold air sinks down from the mountains every night",
              "The high pressure disappears at night and lets rain in"
            ],
            answer: 0,
            feedback: [
              "",
              "Desert sand holds very little water; dryness is the whole point of a desert. Nights are cold because clear skies let the heat escape quickly.",
              "Some deserts have mountains and some do not, yet all have cold nights. The reason is the lack of cloud, which lets the daytime heat escape into space.",
              "The high pressure stays put day and night; that is why there is no rain. Its clear skies are the reason the heat escapes so fast after sunset."
            ]
          },
          contexts: [
            { label: "Desert camp", q: "Travellers camping in the Sahara need thick blankets even after a day of 50°C. Why does the temperature drop so sharply at night?" },
            { label: "Climate table", q: "Your desert climate notes say that days may reach 50°C while nights can fall below 0°C. What causes such a huge daily range?" },
            { label: "Fennec fox", q: "The fennec fox shelters in a burrow at night as well as by day, because the desert gets bitterly cold after dark. Why does the night get so cold?" }
          ],
          explain: "Say, in one sentence, how the same thing (no cloud) makes desert days hot and desert nights cold.",
          levels: {
            support: {
              steps: [
                "Think of cloud as a blanket. On a cloudy night in the UK it stays mild; on a clear night it gets frosty.",
                "Hot deserts sit under high pressure with sinking air, so there is almost never any cloud.",
                "By day the sun heats the ground with nothing in the way; by night the heat escapes with nothing in the way.",
                "Pick the option that mentions the missing cloud."
              ],
              example: {
                q: "Why is a clear, still night in the UK more likely to bring frost than a cloudy one?",
                steps: ["Cloud traps heat near the ground like a blanket.", "With no cloud, the heat radiates away and the ground cools fast."],
                answer: "Without cloud to trap it, the heat of the day escapes into space and the ground cools enough for frost to form."
              }
            },
            core: { hint: "What is missing from the desert sky, both day and night, and what does that do to heat?" },
            stretch: { extend: "Explain how a large daily temperature range affects desert soils and the plants that grow in them." }
          },
          why: "Hot deserts lie under high pressure, so the sky is almost always clear. By day the sun heats the ground fiercely; by night, with no cloud to trap it, that heat escapes quickly into space and the temperature plunges."
        },
        {
          title: "Adaptations and their jobs",
          task: {
            kind: "match",
            q: "Match each desert adaptation to the job it does.",
            pairs: [
              ["Fatty hump (camel)", "Stores energy for times when food is short"],
              ["Large flat feet (camel)", "Spread the animal's weight so it does not sink into the sand"],
              ["Large ears (fennec fox)", "Give off heat to keep the animal cool"],
              ["Spines instead of leaves (cactus)", "Lose less water than leaves and protect the plant from herbivores"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Sort the problems first: heat, drought, sand, being eaten.",
                "Feet are about the ground: sand.",
                "Ears are thin and full of blood vessels: heat.",
                "A hump is a store, but of what? Not water. Spines replace leaves, so think about what leaves lose."
              ],
              example: {
                q: "Match: two rows of eyelashes, thick fur on top of the body. Choices: shade from the fierce sun; keep wind-blown sand out of the eyes.",
                steps: ["Eyelashes protect the eyes from sand.", "Fur on top acts as a sunshade."],
                answer: "Two rows of eyelashes: keep wind-blown sand out of the eyes. Thick fur on top of the body: shade from the fierce sun."
              }
            },
            core: { hint: "Energy, sand, heat, water. Which word belongs with each body part?" },
            stretch: { extend: "A camel's hump stores fat, not water. Explain why storing fat is still a good adaptation to a place with very little water." }
          },
          explain: "Say, in one sentence, why the camel needs so many different adaptations rather than just one.",
          why: "The hump stores energy as fat; wide feet spread weight on sand; the fennec fox's large ears radiate heat; cactus spines lose little water and deter herbivores."
        },
        {
          title: "Explaining the desert belts",
          task: {
            kind: "written",
            q: "Explain why most of the world's hot deserts are found in two belts around 30° north and south of the equator. (6 marks)",
            marks: 6,
            criteria: [
              "States the location (belts at roughly 30° north and south, often in continental interiors) with named examples such as the Sahara",
              "Explains that air heated at the equator rises, travels towards the poles and sinks at about 30°",
              "Explains that sinking air forms high pressure, giving clear skies and very little rain",
              "Adds at least one further factor (rain shadows behind mountain ranges, cold ocean currents) with a reason",
              "Uses the words because or so that to link each cause to its effect"
            ],
            model: "Most hot deserts, such as the Sahara in North Africa and the Thar Desert in India and Pakistan, lie in two belts at roughly 30° north and 30° south of the equator, usually in dry continental interiors. Air at the equator is strongly heated, so it rises, cools and drops its moisture as rain over the rainforests. High in the atmosphere this now-dry air spreads out towards the poles and, at about 30°, sinks back to the ground. Sinking air forms a persistent belt of high pressure, and because sinking air does not form cloud, there is almost no rain and the ground is heated fiercely by day. Other factors add to the pattern: mountain ranges create rain shadows so that only very dry air moves beyond them, and cold ocean currents offshore chill the air so that it carries little moisture inland. Together these explain why the desert belts sit where they do."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: where the deserts are, with one named example.",
                "Sentence 2: what happens to air at the equator (it is heated, rises, loses its rain).",
                "Sentence 3: what happens to that air at 30° (it sinks and forms high pressure).",
                "Sentence 4: why sinking air means no rain and clear skies.",
                "Sentence 5: one extra factor (rain shadow or cold current) with because."
              ],
              example: {
                q: "In two sentences, explain why the equator has rainforest rather than desert.",
                steps: ["Say what the strong sun does to the air.", "Say what rising air does."],
                answer: "At the equator the sun is strongest, so the air is heated and rises. Rising air cools and its moisture condenses into cloud and heavy rain every day, which is why the equator has rainforest."
              }
            },
            core: { hint: "Rise at the equator, sink at 30°, high pressure, no cloud, no rain. Then one extra factor." },
            stretch: { extend: "Explain why the Great Basin Desert in the USA gets most of its precipitation as snow, and whether it counts as a hot desert." }
          },
          explain: "Say, in one sentence, why sinking air means dry weather.",
          why: "Full marks link the location to the circulation of the air: rising at the equator, sinking at 30°, high pressure, clear skies, little rain, with a named desert and one extra factor such as a rain shadow or cold current."
        }
      ]
    },

    /* ───────────── 6 · developing hot deserts and desertification ───────────── */
    {
      key: "desert-development", n: 6, title: "Developing the desert and holding back the sand",
      lead: "What the Sahara has to offer, what makes it so hard to develop, how the desert is spreading into the land around it, and the simple, local solutions that can hold it back.",
      covers: [15, 16, 17],
      pretext: {
        words: [
          { word: "aquifer", means: "an underground store of water in rock", sentence: "Huge aquifers lie under the Sahara, far below the sand." },
          { word: "infrastructure", means: "roads, pipes, power lines and other basic services", sentence: "The desert has little infrastructure, so building anything costs a lot." },
          { word: "inaccessible", means: "hard to reach", sentence: "Many parts of the Sahara are inaccessible, with no roads at all." },
          { word: "desertification", means: "the spread of desert-like conditions into land at the desert edge", sentence: "Desertification is turning farmland in the Sahel into dust." },
          { word: "overgrazing", means: "keeping too many animals on the land, so the plants cannot regrow", sentence: "Overgrazing by goats strips the ground bare." },
          { word: "salinisation", means: "a build-up of salt in the soil, which makes it infertile", sentence: "Salinisation ruined the irrigated fields." }
        ],
        passage: [
          "The Sahara is not empty.",
          "Under the sand lie huge stores of water called aquifers.",
          "There are minerals, oil and gas, and strong sunshine.",
          "Crops such as sorghum can grow, and trees can shade the fields.",
          "But developing the desert is hard.",
          "It is hot, dry and remote, with few roads.",
          "Water costs a lot to supply, and salt builds up in watered soil.",
          "People who move with their herds already live there.",
          "On the edge of the desert, the land is turning to dust.",
          "This is called desertification.",
          "Too many animals, too many crops and too few trees wear the soil out.",
          "The rains become less reliable too.",
          "Simple ideas can help: low walls that trap soil and water, and ponds that store the rain.",
          "These are called appropriate technology, because local people can build and mend them."
        ]
      },
      sections: [
        {
          heading: "Opportunities: what the Sahara offers",
          paragraphs: [
            "Your Sahara case study asked what the desert offers for development. The keyword list points to its natural resources: water, minerals and fossil fuels. Beneath the Sahara lie huge underground reserves of water in aquifers, which your class mapped using a GIS website. The rocks hold minerals, and North Africa has large deposits of oil and gas that earn export income for the countries that own them. Desert agriculture farms crops well suited to arid conditions, such as sorghum. Agroforestry grows crops with the support of trees, which provide shade and keep the soil stable. The mark scheme also credits recreation and tourism, and the economic benefits that follow: jobs, spending in the local economy and improved infrastructure.",
            "Each opportunity can solve a challenge, which is how your worksheet asked you to match them. Groundwater from aquifers answers the arid climate; agroforestry answers thin soils and wind erosion; income from fossil fuels pays for the roads and pipelines the desert lacks. The pattern is the same as in the rainforest: the resources are real, but using them costs money and risks damage.",
            "For a six-mark discuss question on the Sahara, your lessons want three developed points, each describing an opportunity to exploit a natural resource and explaining the barrier or challenge to doing so. Balance is the key word: every opportunity has a catch."
          ],
          tip: "Three resources (water, minerals, fossil fuels), two farming ideas (desert agriculture, agroforestry), one word for the catch: inaccessibility."
        },
        {
          heading: "Challenges: physical and human",
          paragraphs: [
            "The challenges of developing hot deserts can be physical or human. Your recall list of physical challenges ran: an arid climate, extreme heat, floods (sudden downpours on hard, bare ground), a hostile ecosystem, salty soils, thin soils, shifting sands, wind erosion and dust storms, and thin vegetation. These are problems the desert itself sets.",
            "The human challenges were the cards in your diamond nine: the high cost of providing water, salinisation, population growth, lack of roads, pollution threats, existing nomadic populations, the need for conservation, remoteness and desertification. The desert is inaccessible, so infrastructure (roads, pipes, power lines) must be built from scratch at great cost. Supplying water means pumping it from deep aquifers or piping it long distances, and irrigating with it brings its own problem: in the heat the water evaporates and leaves its salts behind, so the soil becomes saline and infertile. People already live there: nomadic herders move their camels and goats to find grazing in a land where plants are sparse, and development can take away their land and water.",
            "Your six-mark model on how the desert climate affects people made three developed points: heat and dryness mean sparse vegetation, so herders must keep moving; long summer droughts mean people must store food and water for months; and sandy, infertile soil plus dust storms that flatten fields make crop farming hard and keep farmers poor. Each point goes from climate to plants or soil to people, which is what the examiner means by developed."
          ],
          worked: {
            q: "Plan a six-mark answer to the question: Discuss the extent of the opportunities available to develop the Sahara Desert.",
            steps: [
              "Point 1: water. Opportunity: vast aquifers under the desert could irrigate farmland. Challenge: pumping and piping it is expensive, and irrigation causes salinisation.",
              "Point 2: minerals and fossil fuels. Opportunity: oil, gas and minerals earn export income. Challenge: the desert is remote and inaccessible, so roads, pipelines and workers all cost extra.",
              "Point 3: farming. Opportunity: desert agriculture (sorghum) and agroforestry. Challenge: thin, infertile soils, extreme heat and unreliable rain limit yields.",
              "Finish with a judgement: the opportunities are real but each is limited by cost and inaccessibility, so development is possible only to a moderate extent."
            ],
            answer: "Three developed points, each pairing an opportunity with its barrier, ending with a judgement on the extent."
          },
          tip: "Discuss and to what extent both need a judgement at the end. Decide how far, then say why."
        },
        {
          heading: "Desertification: causes and effects",
          paragraphs: [
            "Desertification is the spread of typical desert conditions, landscapes and processes into areas where they did not occur in the recent past. It happens in the arid zones bordering the deserts, places with an average annual rainfall of about 100 to 300 mm, such as the Sahel on the southern edge of the Sahara. The land does not become sand dunes overnight; it loses its plants and its topsoil until it can no longer grow crops or feed animals.",
            "Your card sort separated causes, effects and solutions. The causes are partly natural and partly human. Rainfall at the desert edge is unreliable, and climate change is making droughts longer. Population growth puts more pressure on the land. Overgrazing, feeding too many livestock for too long on the land so that it cannot recover its vegetation, strips the ground bare. Over-cultivation, growing crops so intensively that the soil is exhausted, leaves it barren. Trees are cut for fuelwood, so there are no roots to hold the soil. Together these leave the soil exposed to sun, wind and the occasional downpour.",
            "The effects follow. Soil erosion removes topsoil faster than it can be replaced, by wind and by water. Salinisation, a build-up of salt on the surface where irrigation water evaporates, makes the remaining soil infertile. Crops fail, animals die, and people face hunger and poverty; many leave the land and migrate to towns. Your lesson asked you to sort causes and effects into social, economic and environmental (SEE) and to rank them: which should be tackled first?"
          ],
          tip: "Desertification is not the desert advancing like a tide. It is land at the edge being worn out, mostly by people, until it looks like desert."
        },
        {
          heading: "Solutions that last",
          paragraphs: [
            "Sustainability means meeting the needs of the present without reducing the ability of future generations to meet theirs. For the desert edge, sustainable solutions tend to be small, cheap and local. Appropriate technology is technology suited to the needs, skills, knowledge and wealth of local people and their environment: things a village can build and mend itself. Contour traps are embankments built along the contours of slopes to stop soil being washed down during heavy rainfall; they hold the soil and the water where crops can use them. In the Thar Desert your lessons name johads, small man-made water stores, and tobas, natural depressions that fill with rain and provide drinking water.",
            "Other solutions attack the causes directly: planting trees to shelter fields and hold the soil, managing the number of animals so grazing land can recover, and resting fields so they are not over-cultivated. Adaptation means adjusting to natural events such as climate change to reduce the damage, limit the impacts and cope with the consequences, rather than hoping the rains return.",
            "To evaluate a solution, as your lesson asked, test it against SEE. Is it socially acceptable: can local people use it, and does it fit how they live? Is it economically possible: can a poor community afford to build and maintain it? Is it environmentally sound: does it restore soil and water rather than use them up? A contour trap built by villagers from local earth and stone passes all three, which is why it counts as appropriate technology."
          ],
          tip: "Appropriate means right for the people: cheap, simple, local, and fixable without an engineer."
        }
      ],
      gate: [
        { kind: "numeric", q: "The Sahara is the world's largest hot desert. Roughly how many million square kilometres does it cover?", answer: 9, tolerance: 0, units: "million km²", check: "SAHARA_MKM2", why: "Your lessons give the Sahara as about 9 million square kilometres, covering much of the northern third of Africa.",
          misconceptions: [
            { answer: 3.5, says: "3.5 million is the Sahara's area in square miles, not square kilometres. A square mile is about 2.6 km², which gives roughly 9 million km².", check: "SAHARA_MSQMI" },
            { answer: 16, says: "16 is how many times bigger than France the Sahara is, not its area. The desert covers about 9 million km².", check: "SAHARA_X_FRANCE" },
            { answer: 3000, says: "3000 miles is how far the Sahara stretches from the Atlantic to the Nile and Red Sea. Its area is about 9 million km².", check: "SAHARA_EW_MILES" }
          ] },
        { kind: "mcq", q: "Which of these is a physical challenge to developing a hot desert?", options: ["Shifting sands", "A lack of roads", "Population growth", "The high cost of providing water"], answer: 0, why: "Shifting sands are set by the desert itself, so they are a physical challenge. Roads, population and costs are human challenges.",
          feedback: [
            "",
            "A lack of roads is a human challenge: roads are something people build (or have not built). Physical challenges come from the desert itself, such as shifting sands or extreme heat.",
            "Population growth is about people, so it is a human challenge. A physical challenge is a feature of the desert environment, such as shifting sands.",
            "Cost is a human, economic matter. The physical challenge in this list is shifting sands, a feature of the desert itself."
          ] },
        { kind: "gap", q: "Feeding too many livestock on the land for too long, so that its vegetation cannot recover, is called ___.", answer: "overgrazing", options: ["overgrazing", "over-cultivation", "salinisation"], why: "Overgrazing is the keyword your lessons give for too many animals eating the plants faster than they can regrow, a major cause of desertification.",
          feedback: {
            "over-cultivation": "Over-cultivation is about crops: growing them so intensively that the soil is exhausted. Too many grazing animals is overgrazing.",
            "salinisation": "Salinisation is a build-up of salt in the soil, usually from irrigation water evaporating; it is an effect, not a way of farming animals. Too many livestock on the land is overgrazing."
          } }
      ],
      modules: [
        {
          title: "Spotting appropriate technology",
          task: {
            kind: "mcq",
            q: "A village on the edge of the Sahara wants to stop its soil washing away. Which solution is the best example of appropriate technology?",
            options: [
              "Low embankments of earth and stone built along the contours of the slope by the villagers themselves",
              "A desalination plant on the coast pumping sea water hundreds of kilometres inland",
              "A motorway built across the desert to bring in lorries of fertiliser",
              "A large concrete dam built and run by a foreign engineering company"
            ],
            answer: 0,
            feedback: [
              "",
              "A desalination plant costs millions and needs engineers and electricity the village does not have. Appropriate technology is cheap and simple enough for local people to build and maintain, such as contour traps.",
              "A motorway is huge, expensive infrastructure and does nothing to hold the soil in place. Appropriate technology is small, local and aimed at the problem: contour embankments that trap soil and water.",
              "A large dam built and run by outsiders cannot be maintained by the village when the company leaves. Appropriate technology matches the skills and wealth of local people, like earth and stone contour traps."
            ]
          },
          contexts: [
            { label: "Thar Desert", q: "Farmers in the Thar Desert lose topsoil every time a storm hits their sloping fields. Which solution is the best example of appropriate technology?" },
            { label: "Aid charity", q: "A small charity with a tiny budget wants to help a Sahel village keep its soil and rainwater on the fields. Which of these is the appropriate-technology choice?" },
            { label: "Exam question", q: "An exam question asks for an example of appropriate technology used to reduce desertification. Which option would earn the mark?" }
          ],
          levels: {
            support: {
              steps: [
                "Appropriate technology is suited to the needs, skills, knowledge and wealth of local people.",
                "Cross out anything the village could not afford.",
                "Cross out anything the village could not build or repair itself.",
                "Of what is left, pick the one that actually solves the problem of soil washing downhill."
              ],
              example: {
                q: "A village needs reliable drinking water. Which is appropriate technology: a hand-dug pond that collects the rains, or a computer-controlled pumping station?",
                steps: ["The pond is cheap, uses local labour and can be repaired by the village.", "The pumping station needs electricity, spare parts and experts."],
                answer: "The hand-dug pond, because it matches what the village can build, afford and maintain."
              }
            },
            core: { hint: "Cheap, simple, local, and it must deal with soil on a slope." },
            stretch: { extend: "Evaluate contour traps using SEE: give one social, one economic and one environmental reason they are sustainable, and one limitation." }
          },
          explain: "Say, in one sentence, what makes a technology appropriate for a poor desert-edge community.",
          why: "Contour traps are embankments built along the contours of a slope to stop soil being washed down. They are cheap, use local materials and skills, and can be maintained by the village, so they are appropriate technology."
        },
        {
          title: "Desertification keywords",
          task: {
            kind: "match",
            q: "Match each keyword to its meaning.",
            pairs: [
              ["Over-cultivation", "Growing crops so intensively that the soil is exhausted and left barren"],
              ["Salinisation", "A build-up of salt on the land surface, often where irrigation water evaporates"],
              ["Soil erosion", "Topsoil removed faster than it can be replaced, by wind, water, animals or people"],
              ["Contour traps", "Embankments built along the contours of slopes to stop soil washing down in heavy rain"],
              ["Aquifer", "An underground store of water"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Two of these are causes, two are effects or problems, and one is a solution. Sort them first.",
                "Cultivation means growing crops; over- means too much.",
                "Saline means salty.",
                "A trap along a contour holds something back on a slope. Aqua means water."
              ],
              example: {
                q: "Match: overgrazing, arid. Choices: dry, with little or no rainfall; too many animals feeding on the land for too long.",
                steps: ["Grazing is animals eating grass.", "Arid describes a dry climate."],
                answer: "Overgrazing: too many animals feeding on the land for too long. Arid: dry, with little or no rainfall."
              }
            },
            core: { hint: "Crops, salt, lost topsoil, a wall on a slope, water underground." },
            stretch: { extend: "Explain how over-cultivation leads to soil erosion, and how irrigation meant to solve one problem can cause salinisation." }
          },
          explain: "Say, in one sentence, how two of these keywords are linked as cause and effect.",
          why: "Over-cultivation exhausts the soil; salinisation is salt left behind by evaporating irrigation water; soil erosion is topsoil lost faster than it forms; contour traps hold soil and water on slopes; an aquifer is water stored underground."
        },
        {
          title: "Opportunities or challenges?",
          task: {
            kind: "written",
            q: "For a hot desert you have studied, to what extent does the environment offer more opportunities than challenges for development? (9 marks)",
            marks: 9,
            criteria: [
              "Names the desert (the Sahara) and locates it (northern third of Africa, about 9 million km², roughly 30° north)",
              "Explains at least two opportunities with specific resources (aquifers and groundwater, minerals, oil and gas, desert agriculture such as sorghum, agroforestry, tourism)",
              "Explains at least two challenges, both physical (extreme heat, arid climate, thin or salty soils, shifting sands) and human (cost of water, inaccessibility and lack of infrastructure, nomadic populations, desertification)",
              "Links opportunities to the challenges that limit them (for example irrigation leading to salinisation; remoteness raising costs)",
              "Reaches a clear, justified conclusion that answers to what extent"
            ],
            model: "The Sahara covers about 9 million km² of the northern third of Africa, at roughly 30° north of the equator. It offers real opportunities. Vast aquifers beneath the sand could supply water for farming; the rocks hold minerals, and oil and gas earn large export incomes for countries such as Algeria and Libya; desert agriculture can grow drought-resistant crops such as sorghum, and agroforestry uses trees to shade crops and hold the soil. However, the challenges are severe. Physically, temperatures reach 50°C by day and fall below freezing at night, rainfall is under 250 mm a year and unreliable, soils are thin, sandy and salty, and shifting sands and dust storms bury fields and roads. Human challenges add to this: the desert is remote and inaccessible, so roads, pipelines and power lines must be built at great cost; pumping water from deep aquifers is expensive, and irrigating with it causes salinisation that ruins the soil; nomadic herders already depend on the land and water; and desertification is spreading along the edges. Many opportunities therefore create their own challenges. Overall, I agree only to a small extent: the Sahara offers valuable resources, but the cost, heat, dryness and inaccessibility mean that development is possible only in a few places and with heavy investment."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1: name and locate the Sahara with two numbers.",
                "Paragraph 2: opportunities. Pick two or three resources and say how each could be used.",
                "Paragraph 3: challenges. One physical, one human, each explained with because.",
                "Paragraph 4: link them. Show how an opportunity (irrigation) creates a challenge (salinisation).",
                "Conclusion: to a large or small extent? Say which, and give the deciding reason."
              ],
              example: {
                q: "In three sentences, weigh up whether a steep hillside offers more opportunities than challenges for a new housing estate.",
                steps: ["One opportunity (views, land available).", "One challenge (building costs, landslides).", "A judgement with to a ... extent."],
                answer: "A steep hillside offers fine views and land that nobody else wants, so it is cheap to buy. But foundations, roads and drains cost far more on a slope, and heavy rain can trigger landslips. To a small extent it offers more opportunities, because the extra building cost and risk outweigh the views."
              }
            },
            core: { hint: "Two opportunities, two challenges (one physical, one human), one link between them, and a judgement on the extent." },
            stretch: { extend: "Compare the Sahara with a hot desert in a high-income country, such as the south-west USA, and explain why wealth changes the balance between opportunities and challenges." }
          },
          explain: "Say, in one sentence, why an opportunity in the desert so often creates a new challenge.",
          why: "A level 3 answer locates the Sahara, gives named resources as opportunities, gives physical and human challenges, shows how they are linked (irrigation and salinisation, remoteness and cost) and ends with a judgement on how far the opportunities outweigh the challenges."
        }
      ]
    }
  ],

  sources: {
    deckDump: "gg_y09_unit_2_the_living_world_ecosystems.txt",
    decksUsed: ["Ecosystems.pptx", "Tropical rainforest.pptx (and its duplicate Tropical rainforest - Copy 17TH JAN .pptx)", "Hot deserts.pptx"],
    notes: "Whole dump read (2,614 lines). Content, named examples and numbers come only from the decks; see NOTES.md."
  }
};
