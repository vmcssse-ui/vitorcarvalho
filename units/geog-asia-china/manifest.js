// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 Geography · Year 8 Unit 1 Asia and China · board AQA, spec "KS3 → 8035" · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression; the FACTS names held in verify.py are allowed) and are recomputed.
//   worked examples / support examples with a calculation carry `checks:[{expr, value, tol}]`.
//   every "order" task is compared with the canonical sequences held in verify.py (the deck's writing frame, Liu's story).
//   every mcq / gap / match answer is compared with the independent answer key held in verify.py.
//   every deck figure (the population table 1950–2030, 48 countries, 17 of 30 megacities, Foxconn's 230 000 employees, US$130
//   a month, 36 hours of overtime, the Beijing/London/New York pollution table, 100 million migrants) is checked against the
//   independent FACTS table in verify.py, with the slide each comes from.
//   passage sentences are counted (≤ 20 words) and all text is linted for known misconceptions, the deck's misspellings and the
//   copyright quotations the deck reproduces (none is used here).
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions`; every module carries
//   `explain`; ≥ 1 module per chapter carries `contexts` that never redefine the answer; `connections` ⊂ glossary;
//   meta.constellation is omitted (the engine lays the stars out); no pretext.l1 (translation is a separate pass).
// Maps, photographs, line graphs and the China-in-Africa evidence cards are described in words; no widget exists for them.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["geog-asia-china"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "geog-asia-china",
    subjectKey: "geography",
    subject: "Geography",
    board: "AQA",
    spec: "KS3 → 8035",
    specRef: "KS3 National Curriculum: locational and place knowledge of Asia (China); human geography (population, urbanisation, international development) → feeds AQA 8035 3.2.1 Urban issues and challenges and 3.2.2 The changing economic world",
    year: 8,
    tier: "KS3",
    title: "Asia and China",
    sub: "From the whole continent to one country: where Asia and China are, how China's population and cities have grown, what happens inside a Shenzhen factory, and what China's rise means for its environment and the wider world.",
    bigQuestion: "What is the global importance of Asia, and what has China's rapid growth meant for its people, its environment and the wider world?",
    lessonCount: 10,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  // The department's five decks (Asia.pptx; Shenzen_year8.pptx; China rural urban migration_year8.pptx; China_Environment
  // problems_year8.pptx; China in Africa_year8.pptx) in teaching order. Titles are the decks' own slide titles or learning
  // objectives; questions are those objectives rephrased. See NOTES.md section 2 for the slide ranges.
  lessons: [
    { n: 1, title: "Asia: From Boom to Bustees — the geography of Asia", question: "What is the global importance of the continent of Asia, and where in the world are the megacities?", keywords: ["continent", "Asia", "48 countries", "megacity", "distribution", "Pacific Ocean", "Indian Ocean"] },
    { n: 2, title: "Introducing China", question: "Where is China, and how do you write a good geographical description of its location and features?", keywords: ["locate", "description", "cities", "surrounding countries", "seas", "characteristics"] },
    { n: 3, title: "The Physical Geography of China", question: "What are China's key physical features, and how do you map them with symbols, shading and a key?", keywords: ["physical geography", "human geography", "rivers", "mountain ranges", "plateaus", "deserts", "key", "symbol"] },
    { n: 4, title: "China's population", question: "How has China's population grown since 1950, where do its people live, and is a large population an advantage or a disadvantage?", keywords: ["population growth", "line graph", "trend", "anomaly", "distribution", "densely populated", "sparsely populated"] },
    { n: 5, title: "Growing factories in China: case study Apple industry in Shenzhen", question: "Why do transnational corporations such as Apple have their products made in Shenzhen, how are the workers treated, and who benefits?", keywords: ["industrialisation", "transnational corporation", "TNC", "Shenzhen", "Foxconn", "minimum wage", "overtime"] },
    { n: 6, title: "TNCs: advantages and disadvantages (half-term progress check)", question: "To what extent do transnational corporations care only about their profits?", keywords: ["TNC", "advantages", "disadvantages", "PEE", "SEEP", "judgement", "9 marks"] },
    { n: 7, title: "Rural to urban migration in China", question: "Why did 100 million people move from the countryside to cities in China over the last decade?", keywords: ["urbanisation", "rural-urban migration", "push factor", "pull factor", "Sichuan", "Shanghai"] },
    { n: 8, title: "China and the environmental problems", question: "What environmental problems has China's economic growth caused, and can its development be sustainable?", keywords: ["air pollution", "deforestation", "landslide", "soil erosion", "Three Gorges Dam", "sustainable development"] },
    { n: 9, title: "China in Africa (1): investment or exploitation?", question: "What links China and Africa, and why has China invested in some African countries much more than others?", keywords: ["investment", "exploitation", "trade", "map", "opinion line", "hypothesis"] },
    { n: 10, title: "China in Africa (2): friend or foe?", question: "Is China's growing trade with Africa good or bad for African countries, and what could they do about it?", keywords: ["evidence", "Venn diagram", "justify", "Pan-African", "conditions", "cartoon"] }
  ],

  // 16 terms; Connections uses all 16 (four groups, each one chapter's idea). Chapters 1 and 2 teach their key words
  // through pretext.words and the text instead (continent, megacity, distribution; locate, physical, human, key).
  glossary: [
    { term: "trend", means: "The general direction a graph takes over time, such as a steady rise in population.", chapter: "population" },
    { term: "anomaly", means: "A point or period on a graph that does not fit the general pattern.", chapter: "population" },
    { term: "densely populated", means: "An area where a lot of people live in each square kilometre, such as eastern China.", chapter: "population" },
    { term: "sparsely populated", means: "An area where very few people live in each square kilometre, such as western China.", chapter: "population" },
    { term: "industrialisation", means: "The period of change when a society moves from farming jobs to factory work.", chapter: "shenzhen-tncs" },
    { term: "transnational corporation", means: "A firm, also called a TNC, that produces goods or services in one or more countries other than its home country.", chapter: "shenzhen-tncs" },
    { term: "minimum wage", means: "The lowest pay an employer is legally allowed to give a worker; at Foxconn it was US$130 a month.", chapter: "shenzhen-tncs" },
    { term: "overtime", means: "Hours worked beyond the normal working week; Chinese law allowed 36 hours of it a month.", chapter: "shenzhen-tncs" },
    { term: "urbanisation", means: "When an increasing proportion of a country's population lives in cities, and so fewer live in rural areas.", chapter: "rural-urban" },
    { term: "rural-urban migration", means: "The movement of people from the countryside to towns and cities.", chapter: "rural-urban" },
    { term: "push factor", means: "Something about a place that makes people want to leave it, such as hard labour in farming.", chapter: "rural-urban" },
    { term: "pull factor", means: "Something about a place that makes people want to move there, such as better medical facilities.", chapter: "rural-urban" },
    { term: "air pollution", means: "Harmful particles and gases in the air, mostly from power stations, factories and traffic.", chapter: "environment-world" },
    { term: "deforestation", means: "Cutting down forests, usually for farmland, timber or building, so the trees are not replaced.", chapter: "environment-world" },
    { term: "hydroelectric power", means: "Electricity made from the energy of falling water held back by a dam, as at the Three Gorges Dam.", chapter: "environment-world" },
    { term: "sustainable development", means: "Development that meets the needs of people today without stopping future generations from meeting their own needs.", chapter: "environment-world" }
  ],

  connections: [
    { group: "Reading China's population graph", terms: ["trend", "anomaly", "densely populated", "sparsely populated"] },
    { group: "Inside a Shenzhen factory", terms: ["industrialisation", "transnational corporation", "minimum wage", "overtime"] },
    { group: "Why people move to cities", terms: ["urbanisation", "rural-urban migration", "push factor", "pull factor"] },
    { group: "Growth and its costs", terms: ["air pollution", "deforestation", "hydroelectric power", "sustainable development"] }
  ],

  chapters: [
    /* ───────────── 1 · Asia and its megacities ───────────── */
    {
      key: "asia-megacities", n: 1, title: "Asia: the giant continent and its megacities",
      lead: "Where Asia is and what makes it different from every other continent, what a megacity is, and how to describe the way the world's biggest cities are spread out.",
      covers: [1],
      pretext: {
        words: [
          { word: "continent", means: "one of the world's seven great land masses", sentence: "Asia is the largest continent on Earth." },
          { word: "border", means: "the line where one country meets another", sentence: "China shares a border with Russia in the north." },
          { word: "megacity", means: "a city with more than 10 million people", sentence: "Tokyo is a megacity with many millions of people." },
          { word: "distribution", means: "how things are spread out across an area", sentence: "The distribution of megacities is uneven, with most in Asia." },
          { word: "ocean", means: "one of the huge areas of salt water that cover most of the Earth", sentence: "The Pacific Ocean lies to the east of Asia." }
        ],
        passage: [
          "Asia is the largest continent in the world.",
          "It has 48 countries, from Turkey in the west to Japan in the east.",
          "The Pacific Ocean lies to the east of Asia and the Indian Ocean to the south.",
          "More people live in Asia than on any other continent.",
          "Some of its cities are enormous.",
          "A city with more than 10 million people is called a megacity.",
          "Around 2015 there were 30 megacities in the world.",
          "Seventeen of them were in Asia.",
          "Tokyo and Shanghai are two of the largest.",
          "Africa had only two megacities.",
          "Geographers call this pattern the distribution of megacities.",
          "Describing a distribution means saying where things are, and where they are not."
        ]
      },
      sections: [
        {
          heading: "Where is Asia?",
          paragraphs: [
            "Asia is the largest of the world's seven continents, and the one with the most people. It stretches from Turkey in the west to Japan in the east, and from the frozen north of Russia to the tropical islands of Indonesia. The Pacific Ocean lies to its east and the Indian Ocean to its south. To the west it joins Europe, and to the south-west it touches Africa.",
            "Asia has 48 countries. The six with the most people are China, India, Indonesia, Pakistan, Bangladesh and Japan. Some, like Russia and Kazakhstan, are enormous; others, like Singapore, the Maldives and Bahrain, are tiny. Turkey and Russia lie partly in Europe too, so where Asia ends is a decision geographers have made, not a line drawn by nature.",
            "In this unit you look at the whole continent first, then at one country, China. The questions you keep asking are the lesson's success criteria: where is each place, what are the key facts about each country, and where in the world are the biggest cities?"
          ],
          worked: {
            q: "Describe the location of Asia. (3 marks)",
            steps: [
              "Start big: name it as a continent and say which part of the world it is in (the northern and eastern hemispheres).",
              "Add the water around it: the Pacific Ocean to the east and the Indian Ocean to the south.",
              "Add the land it touches: Europe to the west and Africa to the south-west.",
              "Finish with named countries at its edges: Turkey in the west, Japan in the east."
            ],
            answer: "Asia is a continent in the northern and eastern hemispheres. The Pacific Ocean lies to its east and the Indian Ocean to its south. It joins Europe in the west and Africa in the south-west, and stretches from Turkey to Japan."
          },
          tip: "A good location description moves from big to small: hemisphere, continent, oceans, neighbours, then named places."
        },
        {
          heading: "What makes Asia different?",
          paragraphs: [
            "Every continent is different, but Asia is extreme in almost every way. It has the world's highest mountains and some of its hottest deserts. It has tropical rainforests, frozen tundra and vast grasslands. More than half of all the people on Earth live there.",
            "Asia is also a continent of contrasts in wealth. Japan, Singapore and South Korea are among the richest countries in the world; Afghanistan, Nepal and Yemen are among the poorest. Inside one city you can find glittering towers and crowded slums within a few streets of each other. The unit title, From Boom to Bustees, points to exactly this: economic boom beside bustees, a South Asian word for poor, crowded housing.",
            "When you compare Asia with Europe, Africa, North America, South America and Oceania, think about size, population, landscapes and wealth. A strong answer gives a fact for each, not just an opinion."
          ],
          tip: "Compare means say how two things are alike and how they differ. Use a fact for each side."
        },
        {
          heading: "Megacities",
          paragraphs: [
            "A megacity is a city with a population of more than 10 million people. That is more people in one city than live in many whole countries.",
            "Megacities are not spread evenly across the world. Around 2015 there were 30 of them, and 17 of them were in Asia. Tokyo in Japan and Shanghai in China are two of the largest in the world. Africa had only two megacities. Asia's megacities grew as millions of people moved from the countryside to find work in factories and offices, a story you follow in China later in this unit.",
            "Your homework fact-file asks you to research one Asian megacity: its country, average climate, life expectancy, literacy rate and the country's GDP, plus the issues the city faces, such as pollution, traffic, shanty towns and poverty. Those headings are the ones geographers use to compare places fairly."
          ],
          tip: "Ten million is the line. A city of 9 million is huge, but it is not a megacity."
        },
        {
          heading: "How to describe a distribution",
          paragraphs: [
            "Distribution means how things are spread out: close together or far apart, and which countries or continents have the most and the least. When you describe a distribution, you describe the pattern on the map, not the reasons for it.",
            "Use the three-part writing frame. Generally: give the overall pattern (the spread is uneven, and most megacities are in Asia). Specifically: name places and give figures (17 of the 30 are in Asia, including Tokyo and Shanghai). On the other hand: say where there are few or none (Africa has only two). Numbers turn a vague answer into a precise one."
          ],
          tip: "Describe means say what the map shows. Save why for an explain question."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is a megacity?", options: ["A city with a population of more than 10 million people", "A city with a population of more than 1 million people", "The capital city of a country", "A city that covers more than 100 square kilometres"], answer: 0, why: "The lesson's definition is a city with a population over 10 million people. Size of land and capital status have nothing to do with it.",
          feedback: [
            "",
            "One million is a big city, but the line for a megacity is ten times higher: more than 10 million people. Many ordinary cities have over a million.",
            "A capital is where a government sits, and many capitals are small. A megacity is defined by population: more than 10 million people.",
            "Megacities are defined by how many people live there, not by area. The line is a population of more than 10 million."
          ] },
        { kind: "numeric", q: "How many countries are there in Asia, according to the list you used in class?", answer: 48, tolerance: 0, units: "countries", check: "ASIA_COUNTRIES", why: "The class list numbers 48 countries, from China at the top to Brunei at the bottom.",
          misconceptions: [
            { answer: 30, says: "30 is the number of megacities in the world around 2015, not the number of countries. Asia has 48 countries.", check: "MEGACITIES_TOTAL" },
            { answer: 17, says: "17 is how many of the world's megacities were in Asia. The continent has 48 countries.", check: "MEGACITIES_ASIA" },
            { answer: 44, says: "You stopped at Timor-Leste. Russia, Bhutan, the Maldives and Brunei complete the list of 48.", check: "ASIA_COUNTRIES-4" }
          ] },
        { kind: "gap", q: "Megacities are not ___ spread across the world: 17 of the 30 are in Asia.", answer: "evenly", options: ["evenly", "widely", "rarely"], why: "An even spread would put a similar number on each continent. Seventeen of thirty in Asia and only two in Africa is uneven.",
          feedback: {
            "widely": "Megacities are found widely, on most continents, so that is not the point. The point is that the spread is uneven: 17 of 30 in Asia, two in Africa. The word is evenly.",
            "rarely": "Thirty megacities is not rare, and the sentence is about the pattern of where they are, not how common they are. They are not evenly spread."
          } }
      ],
      modules: [
        {
          title: "Writing a distribution description",
          task: {
            kind: "order",
            q: "Put the steps of a good distribution description in the order you would write them.",
            items: [
              "Read the map and its key to find the overall pattern",
              "Generally: state the overall pattern in one sentence",
              "Specifically: name places and give figures",
              "On the other hand: describe where there are few or none"
            ]
          },
          levels: {
            support: {
              steps: [
                "You cannot write anything until you have looked at the map, so reading it comes first.",
                "The writing frame goes from the big picture to the detail: Generally, then Specifically.",
                "On the other hand introduces the exception, so it comes after the main pattern has been given.",
                "Check: does your order move from general to specific to exception?"
              ],
              example: {
                q: "Put these steps for describing the distribution of deserts in order: name the Sahara and the Gobi; say that deserts lie mostly along the tropics; say that Europe has none; look at the world map.",
                steps: ["Look first.", "General pattern: along the tropics.", "Specific places: Sahara, Gobi.", "Exception: Europe has none."],
                answer: "Look at the world map; say deserts lie mostly along the tropics; name the Sahara and the Gobi; say that Europe has none."
              }
            },
            core: { hint: "Look, then Generally, then Specifically, then On the other hand." },
            stretch: { extend: "Write the three sentences for the world's megacities, using the figures 17, 30 and 2 and naming two cities." }
          },
          explain: "Say, in one sentence, why the Specifically step needs numbers and place names.",
          why: "A distribution description starts from the map, gives the general pattern, supports it with named places and figures, and then gives the exception. That is the order the writing frame follows."
        },
        {
          title: "How many megacities are outside Asia?",
          task: {
            kind: "numeric",
            q: "Of the world's 30 megacities, 17 were in Asia. How many megacities were outside Asia?",
            answer: 13, tolerance: 0, units: "megacities", check: "MEGACITIES_TOTAL-MEGACITIES_ASIA",
            misconceptions: [
              { answer: 17, says: "17 is the number inside Asia. The question asks for the rest of the world, so subtract: 30 − 17 = 13.", check: "MEGACITIES_ASIA" },
              { answer: 47, says: "You added the two numbers. The 17 Asian megacities are part of the 30, so subtract them: 30 − 17 = 13.", check: "MEGACITIES_TOTAL+MEGACITIES_ASIA" },
              { answer: 2, says: "Two is the number in Africa alone. Outside Asia also includes the Americas and Europe: 30 − 17 = 13.", check: "MEGACITIES_AFRICA" }
            ],
            why: "The 17 in Asia are part of the 30, so the rest of the world had 30 − 17 = 13 megacities."
          },
          contexts: [
            { label: "Class map", q: "Your class map shows 30 megacities, and the key says 17 of them are in Asia. How many megacities are shown outside Asia?", check: "MEGACITIES_TOTAL-MEGACITIES_ASIA" },
            { label: "News report", q: "A news report says that of the world's 30 megacities, 17 are in Asia. How many megacities does that leave for the rest of the world?", check: "MEGACITIES_TOTAL-MEGACITIES_ASIA" },
            { label: "Fact-file", q: "For your megacity fact-file you read that Asia has 17 of the world's 30 megacities. How many are on the other continents put together?", check: "MEGACITIES_TOTAL-MEGACITIES_ASIA" }
          ],
          levels: {
            support: {
              steps: [
                "Write down the total number of megacities in the world.",
                "Write down how many of those are in Asia. They are part of the total, not extra.",
                "Outside Asia means total minus Asia. Subtract.",
                "Check your answer is smaller than the total."
              ],
              example: {
                q: "Asia has 48 countries. If 12 of them are in the Middle East, how many Asian countries are not in the Middle East?",
                steps: ["Total: 48.", "In the Middle East: 12, which are part of the 48.", "48 − 12 = 36."],
                answer: "36 countries",
                checks: [{ expr: "ASIA_COUNTRIES-12", value: 36, tol: 0 }]
              }
            },
            core: { hint: "Asia's 17 are included in the world's 30. Take them away." },
            stretch: { extend: "Africa had 2 of those 13. Work out how many were in the Americas and Europe together, and say what that tells you about the distribution." }
          },
          explain: "Say, in one sentence, why you subtracted rather than added.",
          why: "Asia's 17 megacities are part of the world total of 30, so the number outside Asia is 30 − 17 = 13."
        },
        {
          title: "Describe the distribution of megacities",
          task: {
            kind: "written",
            q: "Describe the distribution of the world's megacities. (4 marks)",
            marks: 4,
            criteria: [
              "Generally: states the overall pattern (the spread is uneven, with most megacities in Asia)",
              "Specifically: gives a figure (17 of the 30 are in Asia) and names at least two megacities",
              "On the other hand: says where there are few or none (Africa has only two)",
              "Uses the word distribution or uneven and sticks to describing, not explaining"
            ],
            model: "Generally, the distribution of megacities is very uneven: Asia holds far more of them than any other continent. Specifically, 17 of the world's 30 megacities are in Asia, and they include Tokyo and Shanghai, both among the largest cities on Earth. On the other hand, Africa has only two, so the remaining 13 megacities are shared between all the other continents put together."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1 starts Generally and gives the overall pattern: most are in Asia.",
                "Sentence 2 starts Specifically and gives the figure 17 of 30, then names Tokyo and Shanghai.",
                "Sentence 3 starts On the other hand and says Africa has only two.",
                "Read it back: have you said where, not why?"
              ],
              example: {
                q: "In three sentences, describe the distribution of the world's deserts (most lie near the tropics; the Sahara and the Gobi are the largest; Europe has none).",
                steps: ["Generally: near the tropics.", "Specifically: the Sahara and the Gobi.", "On the other hand: none in Europe."],
                answer: "Generally, deserts are found near the tropics on most continents. Specifically, the Sahara in Africa and the Gobi in Asia are the largest. On the other hand, Europe has no deserts at all."
              }
            },
            core: { hint: "Generally, Specifically, On the other hand: one sentence each, with the figures 17, 30 and 2." },
            stretch: { extend: "Add a fourth sentence that begins to explain the pattern: why have so many of Asia's cities grown past 10 million?" }
          },
          explain: "Say, in one sentence, what the word distribution means.",
          why: "A full-mark answer follows the frame: the general pattern, a figure with named cities, then the exception. It describes where the megacities are without explaining why."
        }
      ]
    },
    /* ───────────── 2 · locating and mapping China ───────────── */
    {
      key: "mapping-china", n: 2, title: "Locating China and mapping its physical geography",
      lead: "How to describe exactly where China is, the difference between physical and human geography, China's main physical features, and how to draw a map that someone else can read.",
      covers: [2, 3],
      pretext: {
        words: [
          { word: "locate", means: "to say exactly where a place is", sentence: "Use the atlas to locate China and its neighbours." },
          { word: "physical geography", means: "the natural features of the Earth, like rivers, mountains and deserts", sentence: "The Yangtze River is part of China's physical geography." },
          { word: "human geography", means: "the features people make, like cities, farms and factories", sentence: "Beijing and its factories are part of China's human geography." },
          { word: "symbol", means: "a small picture or shape on a map that stands for a feature", sentence: "A triangle is a common symbol for a mountain peak." },
          { word: "key", means: "the box on a map that explains what each symbol and colour means", sentence: "Check the key before you read the map." },
          { word: "latitude", means: "how far north or south of the Equator a place is", sentence: "The Tropic of Cancer is an important line of latitude." }
        ],
        passage: [
          "China is a huge country in the east of Asia.",
          "To its east lies the Pacific Ocean.",
          "It shares borders with many countries, including Russia, Mongolia, India and Vietnam.",
          "Its capital city is Beijing.",
          "Shanghai, on the coast, is one of the world's largest megacities.",
          "Physical geography is about natural features like rivers, mountains and deserts.",
          "Human geography is about people and the things they build.",
          "China has high mountains and plateaus in the west.",
          "It has deserts in the north and wide lowlands and rivers in the east.",
          "The Yangtze is China's longest river.",
          "When you map these features, use symbols and colour shading.",
          "Always add a key so others can read your map."
        ]
      },
      sections: [
        {
          heading: "Describing where China is",
          paragraphs: [
            "China is in the east of Asia. Its long coastline faces the Pacific Ocean, with the Yellow Sea, the East China Sea and the South China Sea along its shore. Inland it shares borders with many countries, including Russia and Mongolia to the north, Kazakhstan to the north-west, India, Nepal and Bhutan to the south-west, and Myanmar, Laos and Vietnam to the south. North Korea lies to its north-east.",
            "China sits in the northern hemisphere. The Tropic of Cancer, an important line of latitude, crosses its southern provinces, so the far south is tropical while the north has cold winters. Its capital is Beijing, in the north-east. Shanghai, on the east coast, is one of the world's largest megacities. Shenzhen, in the far south, is the factory city you study later in this unit.",
            "When you describe China's location in as much detail as possible, use all of these: continent and part of continent, hemisphere and line of latitude, oceans and seas, neighbouring countries with compass directions, and named cities."
          ],
          worked: {
            q: "Describe the location of China in detail. (4 marks)",
            steps: [
              "Continent and part: China is in the east of Asia.",
              "Hemisphere and latitude: it is in the northern hemisphere, and the Tropic of Cancer crosses its south.",
              "Water: the Pacific Ocean lies to its east, with the Yellow Sea, East China Sea and South China Sea along the coast.",
              "Neighbours with directions, then cities: Russia and Mongolia to the north, India to the south-west, Vietnam to the south; Beijing is the capital, Shanghai the largest coastal city."
            ],
            answer: "China is a large country in the east of Asia, in the northern hemisphere, with the Tropic of Cancer crossing its south. The Pacific Ocean lies to its east. It borders Russia and Mongolia to the north, India to the south-west and Vietnam to the south. Its capital is Beijing and Shanghai is its great coastal city."
          },
          tip: "Compass directions and named neighbours turn a 1-mark answer into a 4-mark one."
        },
        {
          heading: "Physical or human?",
          paragraphs: [
            "Physical geography is about the natural features of the Earth: rivers, lakes, mountains, plateaus, deserts, seas, oceans, islands and climate. Human geography is about people and what they build and do: cities, roads, farms, factories, trade and population. Most places have both: the Yangtze is physical, but the dam built across it is human.",
            "Your map task asks for two to five named examples of each physical category: lakes, rivers, mountain peaks, gulfs, channels, important lines of latitude, mountain ranges, plateaus, deserts, seas, oceans and islands. The atlas is your source. Even better if you can name an example of each inside China."
          ],
          tip: "If it would still be there with no people on Earth, it is physical."
        },
        {
          heading: "China's physical features",
          paragraphs: [
            "China's land rises from east to west like a giant staircase. In the west is the Tibetan Plateau, the highest and largest plateau on Earth, and along its southern edge the Himalayas, the world's highest mountain range. The north is dry: the Gobi Desert stretches along the border with Mongolia.",
            "China's two great rivers, the Yangtze and the Yellow River (Huang He), rise in the western highlands and flow east across wide lowlands to the sea. The Yangtze is China's longest river; the Three Gorges Dam, which you meet in the last chapter, is built across it. Most of China's people and cities are on these eastern lowlands and the coast. Hainan, in the far south, is a large tropical island.",
            "Check each of these against the atlas and the map you drew in class. The point of the lesson is the pattern: high and dry in the west and north, low, wet and crowded in the east."
          ],
          tip: "West high, north dry, east low and crowded. Say the pattern before you list the places."
        },
        {
          heading: "Making a map others can read",
          paragraphs: [
            "A good map does three things: it locates features accurately, it shows them clearly, and it explains itself. Decide for each feature whether a symbol (a triangle for a peak, a blue line for a river) or colour shading (brown for mountains, yellow for deserts) will work best. Shading suits areas; symbols suit points and lines.",
            "Every map needs a key, so a reader knows what each symbol and colour means, and a title. Labels must be neat and easy to read. The gold-standard map in the peer assessment could pass for an atlas page: two or more features accurately located in every category, and a complete, neat key."
          ],
          tip: "Title, key, neat labels, accurate locations: the four things every map is marked on."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is a physical feature of China?", options: ["The Yangtze River", "The city of Beijing", "The Three Gorges Dam", "The factories of Shenzhen"], answer: 0, why: "A river is a natural feature, so it belongs to physical geography. Cities, dams and factories are built by people: human geography.",
          feedback: [
            "",
            "A city is built by people, so it is a human feature. Physical features are natural, like the Yangtze River.",
            "A dam is built by people across a river. The dam is human; the river it crosses, the Yangtze, is physical.",
            "Factories are built and run by people, so they are human geography. The natural feature here is the Yangtze River."
          ] },
        { kind: "gap", q: "A map's ___ explains what each symbol and colour means.", answer: "key", options: ["key", "title", "scale"], why: "The key is the box that decodes the symbols and shading. The title says what the map shows; the scale says how big it is.",
          feedback: {
            "title": "The title tells you what the map is about, but not what a triangle or a brown patch means. That is the job of the key.",
            "scale": "The scale tells you how far a centimetre on the map is on the ground. The symbols and colours are explained by the key."
          } },
        { kind: "mcq", q: "Which ocean lies to the east of China?", options: ["The Pacific Ocean", "The Indian Ocean", "The Atlantic Ocean", "The Arctic Ocean"], answer: 0, why: "China's coast faces east onto the Pacific Ocean. The Indian Ocean is to the south of Asia, not next to China.",
          feedback: [
            "",
            "The Indian Ocean lies to the south of Asia, below India. China's coast faces the Pacific Ocean to the east.",
            "The Atlantic is on the other side of the world, between Europe and the Americas. China's coast faces the Pacific.",
            "The Arctic Ocean is at the top of the world, north of Russia. China's coastline faces east onto the Pacific Ocean."
          ] }
      ],
      modules: [
        {
          title: "Name the category",
          task: {
            kind: "match",
            q: "Match each of China's physical features to its category.",
            pairs: [
              ["Yangtze", "River"],
              ["Himalayas", "Mountain range"],
              ["Gobi", "Desert"],
              ["Tibetan Plateau", "Plateau"],
              ["Hainan", "Island"]
            ]
          },
          levels: {
            support: {
              steps: [
                "One name has its category inside it. Match that one first.",
                "Think of the map: which feature is a long blue line flowing to the sea?",
                "Which is a line of the highest peaks on Earth, and which is a dry yellow area in the north?",
                "The one left is a piece of land surrounded by sea."
              ],
              example: {
                q: "Match: Sahara, Nile, Alps. Categories: river, desert, mountain range.",
                steps: ["The Nile is the long river of Africa.", "The Sahara is the great desert of North Africa.", "The Alps are the mountain range of Europe."],
                answer: "Sahara: desert. Nile: river. Alps: mountain range."
              }
            },
            core: { hint: "Two are high land: one is a line of peaks, one is a wide flat area. One flows, one is dry, one is in the sea." },
            stretch: { extend: "For each feature, say whether it is in the east or the west of China, and what that tells you about where people live." }
          },
          explain: "Say, in one sentence, how a plateau differs from a mountain range.",
          why: "The Yangtze is a river, the Himalayas a mountain range, the Gobi a desert, the Tibetan Plateau a plateau (a high, fairly flat area) and Hainan an island off the south coast."
        },
        {
          title: "Spot the human feature",
          task: {
            kind: "mcq",
            q: "A pupil labels four features on a map of China: the Yangtze River, the Gobi Desert, Beijing and the Himalayas. Which label is a human feature?",
            options: ["Beijing", "The Yangtze River", "The Gobi Desert", "The Himalayas"],
            answer: 0,
            feedback: [
              "",
              "A river is a natural feature of the land, so it is physical geography. The human feature in the list is the city, Beijing.",
              "A desert is a natural, dry area, so it is physical. The feature people built is the city of Beijing.",
              "Mountains are natural, so the Himalayas are physical geography. The human feature is Beijing, a city built by people."
            ],
            why: "Beijing is a city, built and lived in by people: human geography. The river, desert and mountains are natural: physical geography."
          },
          contexts: [
            { label: "Photo album", q: "A travel photo album from China shows the Yangtze River, the Gobi Desert, Beijing and the Himalayas. Which photograph shows a human feature?" },
            { label: "Quiz cards", q: "In a quiz-quiz-trade game the cards say the Yangtze River, the Gobi Desert, Beijing and the Himalayas. Which card names a human feature?" },
            { label: "Atlas index", q: "An atlas index for China lists the Yangtze River, the Gobi Desert, Beijing and the Himalayas. Which entry is a human feature?" }
          ],
          levels: {
            support: {
              steps: [
                "Ask of each feature: would it still be there if there were no people on Earth?",
                "Rivers, deserts and mountains would still be there. They are physical.",
                "A city only exists because people built it. That makes it human.",
                "Pick the one that people made."
              ],
              example: {
                q: "Which of these is a human feature: the South China Sea, the Three Gorges Dam, Hainan island?",
                steps: ["A sea and an island are natural.", "A dam is built by people."],
                answer: "The Three Gorges Dam"
              }
            },
            core: { hint: "Three of the four would exist without people. One would not." },
            stretch: { extend: "Give one example of a feature in China that is both physical and human at once, and explain why." }
          },
          explain: "Say, in one sentence, the test you used to decide whether a feature is physical or human.",
          why: "Beijing was built by people, so it is a human feature. The river, desert and mountains are natural and belong to physical geography."
        },
        {
          title: "From big to small: describing a location",
          task: {
            kind: "order",
            q: "Put the parts of a detailed location description in the order you would write them, from biggest to smallest.",
            items: [
              "Name the continent and the part of it the country is in",
              "Give the hemisphere and any important line of latitude",
              "Name the oceans and seas, and the neighbouring countries with compass directions",
              "Name the capital and other major cities"
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the biggest thing you can say: which continent.",
                "Hemisphere and latitude place the country on the globe, so they come next.",
                "Then zoom in to what is around the country: oceans, seas and neighbours.",
                "Finish inside the country with its cities, the smallest level."
              ],
              example: {
                q: "Put these parts of a description of the UK in order: London is the capital; it is in the northern hemisphere; it is in the north-west of Europe; the Atlantic lies to its west and France to its south.",
                steps: ["Continent first.", "Globe position second.", "Surroundings third.", "Cities last."],
                answer: "North-west of Europe; northern hemisphere; Atlantic to the west and France to the south; London is the capital."
              }
            },
            core: { hint: "Continent, globe, surroundings, cities: zoom in one step at a time." },
            stretch: { extend: "Write the full four-part description for China in four sentences, with at least three neighbours and their compass directions." }
          },
          explain: "Say, in one sentence, why a location description should go from big to small.",
          why: "Zooming in step by step (continent, hemisphere and latitude, surroundings, cities) means a reader who has never seen the map can picture where the country is."
        }
      ]
    },

    /* ───────────── 3 · China's population ───────────── */
    {
      key: "population", n: 3, title: "China's population: growth and distribution",
      lead: "How to read and describe China's population graph from 1950 to 2030, why the rate of growth changed, where the people live and why, and whether a huge population is a strength or a problem.",
      covers: [4],
      pretext: {
        words: [
          { word: "population", means: "the number of people living in a place", sentence: "China's population grew quickly after 1950." },
          { word: "trend", means: "the general direction of a graph over time", sentence: "The trend of the graph is a steady rise." },
          { word: "anomaly", means: "a point that does not fit the pattern", sentence: "A sudden fall would be an anomaly on this graph." },
          { word: "densely populated", means: "many people living in each square kilometre", sentence: "The east coast of China is densely populated." },
          { word: "sparsely populated", means: "very few people living in each square kilometre", sentence: "The deserts of the north are sparsely populated." },
          { word: "rate of growth", means: "how fast something increases", sentence: "The rate of growth slowed down after 2000." }
        ],
        passage: [
          "In 1950 China had about 550 million people.",
          "By 2020 it had about 1390 million, or 1.39 billion.",
          "That is 840 million more people in 70 years.",
          "The population grew fastest in the 1970s.",
          "Since 2000 the growth has slowed down.",
          "By 2030 the population is expected to be about 1400 million.",
          "The people are not spread evenly.",
          "The east of China is densely populated.",
          "Most big cities are there, near the coast and the great rivers.",
          "The west is sparsely populated.",
          "It has high mountains, cold plateaus and dry deserts.",
          "A large population has advantages and disadvantages."
        ]
      },
      sections: [
        {
          heading: "Reading the growth table",
          paragraphs: [
            "The table your class turned into a line graph gives China's population in millions: 1950, 550; 1960, 660; 1970, 815; 1980, 1000; 1990, 1150; 2000, 1270; 2010, 1340; 2020, 1390; and a projection of 1400 for 2030. Plot the years along the bottom and the population up the side, label both axes, and join the points with a ruler in pencil.",
            "To describe the graph, give the overall trend with data, then any anomalies. The trend is a rise from 550 million in 1950 to 1390 million in 2020, an increase of 840 million. The rise is not steady. Work out the growth in each decade by subtracting: 110, 155, 185, 150, 120, 70, 50 and then only 10 million for the 2020s. The 1970s saw the biggest jump; after 2000 the line flattens.",
            "A trend is the general direction of a graph. An anomaly is a point or period that does not fit the pattern. Here there is no sudden fall, so the change worth commenting on is the rate of growth: fast, then slow."
          ],
          worked: {
            q: "By how much did China's population grow between 1970 and 1980?",
            steps: [
              "Find the two values in the table: 1970, 815 million; 1980, 1000 million.",
              "Growth means the difference, so subtract the earlier from the later: 1000 − 815.",
              "1000 − 815 = 185. Keep the units: millions."
            ],
            answer: "185 million",
            checks: [{ expr: "POP_1980-POP_1970", value: 185, tol: 0 }]
          },
          tip: "Describe the graph with three things: the trend, a figure from the start and the end, and any change in the rate."
        },
        {
          heading: "Why did the rate of growth change?",
          paragraphs: [
            "After 1950 China's population grew quickly. Better health care and food meant fewer babies died and people lived longer, while families stayed large. In the 1970s alone the country added 185 million people.",
            "From 1980 the government limited most families to one child, a rule that lasted until 2015. At the same time, more people moved to cities, where children are expensive and families are smaller. Growth slowed to 70 million in the 2000s and 50 million in the 2010s, and the projection for the 2020s is just 10 million.",
            "A country of about 1.4 billion people living in an area smaller than the USA puts huge pressure on land, water and resources. That is one reason the government tried to slow growth, and one reason this unit ends with China's environmental problems."
          ],
          tip: "Explain why means give a cause for each change: faster growth needs a cause, and so does the slowdown."
        },
        {
          heading: "Where are the people?",
          paragraphs: [
            "China's people are not spread evenly. The east is densely populated: a lot of people live in each square kilometre. The west is sparsely populated: very few people per square kilometre, with large almost empty areas.",
            "The pattern follows the physical geography from chapter 2. The east has low, flat land, a mild wet climate, rich soils along the Yangtze and the Yellow River, and a coast for trade. The big cities, Beijing, Shanghai and Shenzhen, are all there. The west has the Tibetan Plateau, the Himalayas and the Gobi Desert: high, cold, dry and hard to farm.",
            "When you explain a distribution, link each physical factor to the human result: flat land, so easy to build on; rivers, so water for farms and cities; a coast, so ports, trade and factories."
          ],
          tip: "Dense means crowded; sparse means thinly spread. Both are about people per square kilometre, not total numbers."
        },
        {
          heading: "Is a big population good or bad?",
          paragraphs: [
            "A large population has advantages. It gives China an enormous workforce for its factories, farms and services, and a huge home market: well over a billion customers. Many people also means many inventors, engineers and entrepreneurs, which has helped the economy grow fast.",
            "It also has disadvantages. More people need more food, water, housing, schools, hospitals and jobs. Cities become crowded, land is used up, and the pollution from so much industry and traffic harms health. These pressures are hardest in the densely populated east.",
            "Your green pen response asks whether China's dense population is a positive or a negative, and why. The best answers give one point for each side, then make a decision and support it with a figure from the table."
          ],
          tip: "Because is the most important word in the plenary sentence. Give the reason, then the evidence."
        }
      ],
      gate: [
        { kind: "numeric", q: "China's population was 550 million in 1950 and 1390 million in 2020. By how many million did it grow over those 70 years?", answer: 840, tolerance: 0, units: "million", check: "POP_2020-POP_1950", why: "Growth is the difference between the two values: 1390 − 550 = 840 million.",
          misconceptions: [
            { answer: 1940, says: "You added the two populations. Growth is the difference, so subtract: 1390 − 550 = 840 million.", check: "POP_2020+POP_1950" },
            { answer: 850, says: "You used the 2030 projection of 1400 instead of the 2020 figure. The question asks about 2020: 1390 − 550 = 840 million.", check: "POP_2030-POP_1950" },
            { answer: 1390, says: "1390 million is the population in 2020, not the growth. Subtract the 1950 figure: 1390 − 550 = 840 million.", check: "POP_2020" }
          ] },
        { kind: "mcq", q: "Which part of China is the most densely populated?", options: ["The east, along the coast and the great rivers", "The west, on the Tibetan Plateau", "The north, in the Gobi Desert", "The people are spread evenly across the country"], answer: 0, why: "The eastern lowlands and coast have the flat land, water, mild climate and cities that attract people. The west and north are high, cold or dry.",
          feedback: [
            "",
            "The Tibetan Plateau is high, cold and hard to farm, so it is sparsely populated. The crowded part of China is the east, along the coast and the rivers.",
            "A desert has little water and poor soil, so very few people live in the Gobi. The densely populated region is the eastern lowlands and coast.",
            "China's people are very unevenly spread: the east is crowded and the west almost empty. The densely populated part is the east."
          ] },
        { kind: "gap", q: "Since 2000, the rate of China's population growth has ___.", answer: "slowed", options: ["slowed", "doubled", "stopped"], why: "Growth fell from 120 million in the 1990s to 70, then 50, then a projected 10 million a decade. It is still growing, but slowly.",
          feedback: {
            "doubled": "The decade increases after 2000 are 70, 50 and 10 million: each smaller than the last. The rate has slowed, not doubled.",
            "stopped": "The population is still rising, from 1270 million in 2000 to a projected 1400 million in 2030. The growth has slowed, not stopped."
          } }
      ],
      modules: [
        {
          title: "Growth in a decade",
          task: {
            kind: "numeric",
            q: "In 1980 China's population was 1000 million and in 1990 it was 1150 million. By how many million did it grow in that decade?",
            answer: 150, tolerance: 0, units: "million", check: "POP_1990-POP_1980",
            misconceptions: [
              { answer: 2150, says: "You added the two values. Growth in a decade is the later figure minus the earlier one: 1150 − 1000 = 150 million.", check: "POP_1990+POP_1980" },
              { answer: 185, says: "185 million is the growth of the decade before, 1970 to 1980. For 1980 to 1990 subtract 1000 from 1150: 150 million.", check: "POP_1980-POP_1970" },
              { answer: 15, says: "A zero has gone missing. 1150 − 1000 = 150, not 15. Check the place value.", check: "(POP_1990-POP_1980)/10" }
            ],
            why: "Growth in a decade is the difference between the two values: 1150 − 1000 = 150 million."
          },
          contexts: [
            { label: "Class graph", q: "On your class line graph the point for 1980 is at 1000 million and the point for 1990 is at 1150 million. By how many million did China's population rise between the two points?", check: "POP_1990-POP_1980" },
            { label: "Textbook table", q: "A textbook table gives China's population as 1000 million in 1980 and 1150 million in 1990. How many million people were added in those ten years?", check: "POP_1990-POP_1980" },
            { label: "News report", q: "A report says China had 1000 million people in 1980 and 1150 million by 1990. By how many million did the population grow in the decade?", check: "POP_1990-POP_1980" }
          ],
          levels: {
            support: {
              steps: [
                "Write the earlier value and the later value side by side.",
                "Growth means how much was added, so take the earlier away from the later.",
                "Line up the digits and subtract carefully.",
                "Give the units: millions."
              ],
              example: {
                q: "China's population was 1270 million in 2000 and 1340 million in 2010. By how many million did it grow?",
                steps: ["Earlier: 1270. Later: 1340.", "1340 − 1270 = 70."],
                answer: "70 million",
                checks: [{ expr: "POP_2010-POP_2000", value: 70, tol: 0 }]
              }
            },
            core: { hint: "Later value minus earlier value." },
            stretch: { extend: "Work out the growth for every decade in the table and say which decade was the anomaly in the pattern of slowing growth." }
          },
          explain: "Say, in one sentence, why you subtract the earlier value from the later one to find growth.",
          why: "The population rose from 1000 million to 1150 million, so 1150 − 1000 = 150 million people were added in the 1980s."
        },
        {
          title: "The decade of fastest growth",
          task: {
            kind: "mcq",
            q: "Using the table (1950, 550; 1960, 660; 1970, 815; 1980, 1000; 1990, 1150; 2000, 1270; 2010, 1340), in which decade did China's population grow by the most?",
            options: ["The 1970s", "The 1950s", "The 1960s", "The 2000s"],
            answer: 0,
            feedback: [
              "",
              "The 1950s added 660 − 550 = 110 million. The 1970s added 1000 − 815 = 185 million, the biggest rise.",
              "The 1960s added 815 − 660 = 155 million, a big rise but not the biggest. The 1970s added 185 million.",
              "The 2000s added only 1340 − 1270 = 70 million, one of the smallest rises. The biggest was the 1970s, with 185 million."
            ],
            why: "Subtracting each decade gives 110, 155, 185, 150, 120 and 70 million. The largest, 185 million, is 1970 to 1980."
          },
          levels: {
            support: {
              steps: [
                "For each decade, subtract the start value from the end value.",
                "Write the six differences in a row.",
                "Circle the largest difference.",
                "Name the decade it belongs to by its starting year."
              ],
              example: {
                q: "A town had 20 000 people in 1990, 26 000 in 2000 and 29 000 in 2010. Which decade saw the bigger growth?",
                steps: ["1990s: 26 000 − 20 000 = 6000.", "2000s: 29 000 − 26 000 = 3000.", "6000 is bigger."],
                answer: "The 1990s",
                checks: [{ expr: "26000-20000", value: 6000, tol: 0 }, { expr: "29000-26000", value: 3000, tol: 0 }]
              }
            },
            core: { hint: "Find the steepest part of the graph: the decade where the line climbs most." },
            stretch: { extend: "Explain why the rate of growth fell after 1980, giving at least two causes." }
          },
          explain: "Say, in one sentence, how the steepness of a line graph shows the rate of growth.",
          why: "The decade differences are 110, 155, 185, 150, 120 and 70 million. The 1970s added 185 million, more than any other decade."
        },
        {
          title: "Positive or negative?",
          task: {
            kind: "written",
            q: "Is China's large population a positive or a negative for the country? Give both sides, then your own view. (6 marks)",
            marks: 6,
            criteria: [
              "Gives at least one clear advantage of a large population and explains it (workforce, market, ideas)",
              "Gives at least one clear disadvantage and explains it (pressure on food, water, housing, jobs; pollution)",
              "Uses a figure from the table or the lesson (for example 1.4 billion people, 840 million added since 1950)",
              "Makes a clear decision and supports it with a because sentence",
              "Uses the key words densely populated, resources or rate of growth correctly"
            ],
            model: "China's large population is a positive in some ways. About 1.4 billion people give the country an enormous workforce and a huge home market, which has helped its factories and economy grow fast. On the other hand it is a negative because so many people need food, water, housing and jobs, and in the densely populated east the cities are crowded and polluted. Overall I think it is more of a negative, because the population grew by 840 million between 1950 and 2020 and the country has to feed and house all of them on an area smaller than the USA."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: one advantage, with because.",
                "Sentence 2: one disadvantage, with because.",
                "Sentence 3: a figure from the table (1.4 billion, or 840 million added).",
                "Sentence 4: Overall I think… because…"
              ],
              example: {
                q: "In two sentences, give one advantage and one disadvantage of a small village having a very small population.",
                steps: ["Advantage with because.", "Disadvantage with because."],
                answer: "A small population is a positive because there is plenty of space and little traffic or pollution. It is a negative because there may not be enough people to keep a school, a shop or a bus service running."
              }
            },
            core: { hint: "One side, the other side, a figure, a decision." },
            stretch: { extend: "Add a sentence about the future: what might happen if growth slows to 10 million a decade and the population starts to age?" }
          },
          explain: "Say, in one sentence, the strongest reason for the side you chose.",
          why: "A balanced answer explains an advantage and a disadvantage, backs them with a figure from the table, and ends with a clear decision and a reason."
        }
      ]
    },
    /* ───────────── 4 · Shenzhen, Foxconn and the TNCs ───────────── */
    {
      key: "shenzhen-tncs", n: 4, title: "Shenzhen, Foxconn and the transnational corporations",
      lead: "How a fishing town became a factory megacity, what a TNC is and why Apple has its products made in China, what life is like inside the Foxconn factory, and how to weigh who gains and who loses.",
      covers: [5, 6],
      pretext: {
        words: [
          { word: "industrialisation", means: "when a society moves from farming jobs to factory work", sentence: "Industrialisation turned Shenzhen from a fishing town into a factory city." },
          { word: "transnational corporation", means: "a firm that makes goods or services in more than one country", sentence: "Apple is a transnational corporation based in the USA." },
          { word: "wage", means: "the money a worker is paid for their work", sentence: "The minimum wage at Foxconn was US$130 a month." },
          { word: "overtime", means: "extra hours worked beyond the normal working week", sentence: "Chinese law allowed 36 hours of overtime a month." },
          { word: "dormitory", means: "a large building where many workers sleep", sentence: "Many workers live in a dormitory next to the factory." },
          { word: "subsidise", means: "when a government pays part of a firm's costs to help it", sentence: "The Chinese government subsidises many industries." }
        ],
        passage: [
          "In 1970 Shenzhen was a small fishing town in the south of China.",
          "Today it is a city of many millions of people.",
          "It grew because factories were built there.",
          "Industrialisation means a society moving from farming jobs to factory work.",
          "Many of the factories make goods for transnational corporations, or TNCs.",
          "A TNC is a firm that makes goods or services in more than one country.",
          "Apple is a TNC based in the USA.",
          "Its iPhones are put together by a company called Foxconn in Shenzhen.",
          "Foxconn employs about 230 000 people in Shenzhen.",
          "Workers often work six days a week, up to 12 hours a day.",
          "The pay is low, about US$130 a month.",
          "This has brought jobs to China, but also hard lives for many workers."
        ]
      },
      sections: [
        {
          heading: "From fishing village to megacity",
          paragraphs: [
            "In 1970 Shenzhen was a small fishing town on the south coast of China, in Guangdong province, just across the border from Hong Kong. Today it is a megacity of tall towers, ports and thousands of factories. Its population has two parts: permanent residents, and a large unregistered population of workers who have moved in from the countryside without officially settling there.",
            "Shenzhen grew because of industrialisation: the period of change when a society moves from farming jobs to factory work. China's government opened Shenzhen to foreign firms as a place to build factories and subsidised the industries that moved in, and millions of young people came for the jobs.",
            "When you describe how Shenzhen has changed since 1970, compare the two photographs point by point: buildings, transport, land use, population, and the jobs people do. Then is small, low and quiet; now is tall, dense and busy."
          ],
          tip: "Describe a change with then and now in the same sentence: In 1970 it was… but today it is…"
        },
        {
          heading: "What is a TNC, and why China?",
          paragraphs: [
            "A transnational corporation, or TNC (also called an MNC), is a firm that produces goods or services in one or more countries other than its home country. The home is usually a high income country (HIC); the factories are often in lower income countries (LICs) or newly emerging economies (NEEs), where costs are lower. Apple is the example in this unit. It was founded by Steve Jobs in California in 1976, and by 2004 it had largely moved its manufacturing abroad.",
            "An iPhone is a world product. Apple buys memory chips from Korea and Japan, display panels and circuitry from Korea and Taiwan, advanced semiconductors from Germany and Taiwan, and rare metals from Africa and Asia. About 90 percent of iPhone components are made outside the USA. Almost all of the 70 million iPhones, 30 million iPads and 59 million other products Apple sold in one year were manufactured overseas.",
            "Why China? Semi-skilled workers are cheaper; the Chinese government subsidises industries to make them more competitive; factories can change plans and hire thousands of workers at great speed; and firms build dormitories on site so that workers are available around the clock. Paying American wages would add up to US$65 to the shop price of each iPhone."
          ],
          worked: {
            q: "Many Foxconn employees work six days a week, up to 12 hours a day. How many hours is that in a week?",
            steps: [
              "Hours in a week = days worked × hours each day.",
              "6 × 12 = 72.",
              "Compare: a full-time week in the UK is around 37 to 40 hours, so this is almost double."
            ],
            answer: "72 hours a week",
            checks: [{ expr: "DAYS_PER_WEEK*HOURS_PER_DAY", value: 72, tol: 0 }]
          },
          tip: "TNC: trans means across, national means countries. A firm that works across countries."
        },
        {
          heading: "Inside Foxconn",
          paragraphs: [
            "Foxconn is the company that assembles Apple's products. It has around one million employees and dozens of factories in Asia, Eastern Europe, Mexico and Brazil, and it makes an estimated 40 percent of the world's consumer electronics for customers including Amazon, Dell, Nintendo, Samsung and Sony. Its Shenzhen factory alone has 230 000 employees and nearly 300 guards. It pays the Chinese legal minimum wage of US$130 a month, and many workers earn less than US$17 a day.",
            "Many employees work six days a week, often up to 12 hours a day. Chinese law allows 36 hours of overtime a month, but reporters found that more was routinely demanded. Over a quarter of the workforce lives in company barracks. In 2010, 14 workers at the Shenzhen factory took their own lives. Reporters linked the deaths to excessive shift-work, a very fast assembly line and military-style discipline.",
            "Your lesson's case study is Ma Xiang Qian, a 19-year-old who moved from his family's farm to Shenzhen looking for work. Foxconn gave him an 11-hour night shift, seven nights a week, making plastic and metal parts for electronics. He took his own life after working 286 hours in one month, far beyond the legal limit. Afterwards Foxconn raised wages, fitted safety nets to its buildings, arranged prayer sessions and asked workers to sign new contracts. Even so, around 8000 people still apply to work there every day: for many young migrants, it is still a better chance than the farm."
          ],
          tip: "Treated is the key word in the question: it asks about hours, pay, housing and pressure, with a figure for each."
        },
        {
          heading: "Who benefits? Thinking in SEEP",
          paragraphs: [
            "To judge the impacts of a TNC, geographers sort them into Social, Economic, Environmental and Political: SEEP. Social impacts are about people's lives: jobs for migrants, but long hours, low pay and life in barracks. Economic impacts are about money: wages sent home to villages, growth for China, and huge profits for Apple, whose revenue topped US$183 billion in 2014 and which earned over US$400 000 in profit per employee. In 2010 Apple's chief executive, Tim Cook, earned US$59 million; a Foxconn worker on the minimum wage earned US$130 a month.",
            "Environmental impacts include the pollution and waste from thousands of factories and the power stations that run them, which you see in Beijing's air in the last chapter. Political impacts are about governments and power: the Chinese government subsidises industries to attract firms, and it sets the minimum wage and the overtime law that firms are supposed to follow.",
            "A balanced judgement weighs both sides. Jobs, skills and income are real advantages; the hours, the pay and the pressure are real disadvantages. Your progress check asks how far you agree that TNCs care only about their profits. Introduce and define, write a PEE paragraph for each side using Foxconn as evidence, then conclude with a judgement: to a large or a small extent."
          ],
          tip: "PEE: Point, Evidence, Explanation. Evidence means a figure from Shenzhen, not a feeling."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is a transnational corporation (TNC)?", options: ["A firm that produces goods or services in countries other than its home country", "A firm that makes and sells goods only in its home country", "A government department that owns a country's factories", "A trade union that represents factory workers"], answer: 0, why: "A TNC produces in one or more countries other than its home country: Apple is based in the USA but has its products made in China.",
          feedback: [
            "",
            "A firm working only at home is a national company. Transnational means across nations: a TNC produces in other countries too, as Apple does in China.",
            "A TNC is a private firm, not a government department, and it is the Chinese government that subsidises industry, not owns Apple. A TNC produces in countries other than its home.",
            "A trade union represents workers; a TNC is the firm that employs them. A TNC produces goods or services in more than one country."
          ] },
        { kind: "numeric", q: "In one year Apple sold 70 million iPhones, 30 million iPads and 59 million other products, almost all made overseas. How many million products is that altogether?", answer: 159, tolerance: 0, units: "million", check: "IPHONES_M+IPADS_M+OTHER_M", why: "Add the three figures: 70 + 30 + 59 = 159 million products.",
          misconceptions: [
            { answer: 100, says: "70 + 30 = 100 covers only the iPhones and iPads. Add the 59 million other products too: 159 million.", check: "IPHONES_M+IPADS_M" },
            { answer: 129, says: "You left out the 30 million iPads. 70 + 30 + 59 = 159 million.", check: "IPHONES_M+OTHER_M" },
            { answer: 89, says: "You left out the 70 million iPhones, the biggest group. 70 + 30 + 59 = 159 million.", check: "IPADS_M+OTHER_M" }
          ] },
        { kind: "gap", q: "Industrialisation is the period of change when a society moves from farming jobs to ___ work.", answer: "factory", options: ["factory", "office", "farm"], why: "The lesson's definition: from farming jobs to factory work. That is what happened in Shenzhen after 1970.",
          feedback: {
            "office": "Office jobs grow later, once a country is rich. Industrialisation is the first step: from farming to factory work.",
            "farm": "Farming is where people start, not where they move to. Industrialisation is the move from farming jobs to factory work."
          } }
      ],
      modules: [
        {
          title: "Sort the impacts: SEEP",
          task: {
            kind: "match",
            q: "Match each type of impact to the example from the Foxconn case study.",
            pairs: [
              ["Social", "Workers do 12-hour shifts six days a week and many live in company barracks"],
              ["Economic", "Migrants earn wages to send home, while Apple makes over US$400 000 profit per employee"],
              ["Environmental", "Thousands of factories and the power stations that run them pollute the air"],
              ["Political", "The Chinese government subsidises industries and sets the minimum wage and overtime law"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Social is about people's daily lives: hours, housing, health, family.",
                "Economic is about money: wages, profits, prices, growth.",
                "Environmental is about air, water, land and living things.",
                "Political is about governments, laws and power."
              ],
              example: {
                q: "Sort these impacts of a new airport: noise disturbs sleep; it creates 2000 jobs; the council changes the planning law; wildlife loses habitat.",
                steps: ["Sleep is daily life: social.", "Jobs are money: economic.", "Planning law is government: political.", "Habitat is nature: environmental."],
                answer: "Noise: social. Jobs: economic. Planning law: political. Habitat: environmental."
              }
            },
            core: { hint: "People, money, nature, government: in that order the letters spell SEEP." },
            stretch: { extend: "For each of the four impacts, decide whether it is positive or negative, and for whom." }
          },
          explain: "Say, in one sentence, why sorting impacts into SEEP makes an evaluation fairer.",
          why: "Social covers how workers live; economic covers wages and profits; environmental covers pollution from factories and power stations; political covers what the government does with subsidies and laws."
        },
        {
          title: "A year on the minimum wage",
          task: {
            kind: "numeric",
            q: "Foxconn paid the Chinese legal minimum wage of US$130 a month. How much is that for 12 months, in US dollars?",
            answer: 1560, tolerance: 0, units: "US$", check: "MIN_WAGE_MONTH*12",
            misconceptions: [
              { answer: 1300, says: "That is 130 × 10. A year has 12 months, so 130 × 12 = 1560.", check: "MIN_WAGE_MONTH*10" },
              { answer: 142, says: "You added 12 to 130. The wage is paid every month, so multiply: 130 × 12 = 1560.", check: "MIN_WAGE_MONTH+12" },
              { answer: 6760, says: "That is 130 × 52, as if US$130 were a weekly wage. It is a monthly wage, so 130 × 12 = 1560.", check: "MIN_WAGE_MONTH*52" }
            ],
            why: "A monthly wage is paid 12 times a year: 130 × 12 = US$1560. Apple's chief executive earned US$59 million in 2010."
          },
          contexts: [
            { label: "Liu's cousin", q: "Liu's cousin takes a factory job in Shenzhen on the minimum wage of US$130 a month. How much will she earn in 12 months, in US dollars?", check: "MIN_WAGE_MONTH*12" },
            { label: "Fact-file", q: "For a fact-file you note that the Chinese legal minimum wage at Foxconn was US$130 a month. What is that over 12 months, in US dollars?", check: "MIN_WAGE_MONTH*12" },
            { label: "Comparing pay", q: "To compare a worker's pay with a chief executive's, you need a yearly figure. A Foxconn worker earned US$130 a month. What is that for 12 months, in US dollars?", check: "MIN_WAGE_MONTH*12" }
          ],
          levels: {
            support: {
              steps: [
                "The wage is given per month.",
                "A year has 12 months, so multiply the monthly wage by 12.",
                "130 × 12: do 130 × 10 and 130 × 2, then add.",
                "Give the units: US dollars."
              ],
              example: {
                q: "A worker is paid US$2 an hour and works 11 hours. How much does the shift pay?",
                steps: ["Pay per hour × hours.", "2 × 11 = 22."],
                answer: "US$22",
                checks: [{ expr: "WAGE_PER_HOUR*11", value: 22, tol: 0 }]
              }
            },
            core: { hint: "Monthly means 12 times a year." },
            stretch: { extend: "Apple's chief executive earned US$59 million in 2010. Roughly how many years would a minimum-wage worker need to earn US$1 million? Show your working." }
          },
          explain: "Say, in one sentence, why you multiplied by 12 and not by 52.",
          why: "US$130 a month for 12 months is 130 × 12 = US$1560 a year."
        },
        {
          title: "Do TNCs care only about profit?",
          task: {
            kind: "written",
            q: "Transnational corporations bring more benefits than problems to China. How far do you agree? Use the Foxconn factory in Shenzhen as your evidence. (9 marks)",
            marks: 9,
            criteria: [
              "Introduction defines a TNC and names Apple and Foxconn in Shenzhen",
              "PEE paragraph on benefits with a figure (jobs for 230 000 people in Shenzhen; wages sent home; China's growth)",
              "PEE paragraph on problems with a figure (US$130 a month; 12-hour days, six days a week; overtime beyond the 36-hour limit; the deaths of 2010)",
              "Sorts at least two impacts using SEEP (social, economic, environmental, political)",
              "Conclusion makes a judgement (to a large or small extent) and explains why one side outweighs the other"
            ],
            model: "A transnational corporation is a firm that produces goods in countries other than its home country, like Apple, whose products are assembled by Foxconn in Shenzhen. TNCs bring economic benefits: Foxconn employs 230 000 people in Shenzhen, migrants earn wages they can send home to their villages, and the factories helped turn a fishing town into a megacity. However, there are serious social problems. Workers earn the minimum wage of US$130 a month, many work 12 hours a day for six days a week, and overtime beyond the legal 36 hours a month was routinely demanded; in 2010, 14 workers at the factory took their own lives. Overall I agree only to a small extent, because although the jobs are real, most of the profit goes to Apple, which made over US$400 000 per employee, while the workers carry the costs."
          },
          levels: {
            support: {
              steps: [
                "Introduction: define TNC and say that Apple uses Foxconn in Shenzhen.",
                "Paragraph 2, benefits: Point, Evidence (a figure), Explanation of why that is a benefit and for whom.",
                "Paragraph 3, problems: Point, Evidence (a figure), Explanation of who is harmed.",
                "Conclusion: To a large or small extent I agree because… and say which side weighs more."
              ],
              example: {
                q: "In two sentences, give one benefit and one problem of a new clothing factory opening in a small town.",
                steps: ["Benefit with a figure.", "Problem with a figure."],
                answer: "The factory brings 500 jobs to a town where many people were unemployed, so families have a steady income. However, the workers are paid only the minimum wage and the factory's lorries have doubled the traffic through the town centre."
              }
            },
            core: { hint: "Define, benefits with a figure, problems with a figure, judge. Four paragraphs." },
            stretch: { extend: "Add a paragraph on what Foxconn changed after 2010 (wages, nets, contracts) and whether those changes answer the problems or only hide them." }
          },
          explain: "Say, in one sentence, the single piece of evidence that most shaped your judgement.",
          why: "A top answer defines the key term, gives a PEE paragraph for each side with figures from Shenzhen, labels the impacts with SEEP, and ends with a judgement that explains why one side outweighs the other."
        }
      ]
    },

    /* ───────────── 5 · rural to urban migration ───────────── */
    {
      key: "rural-urban", n: 5, title: "Moving to the city: rural to urban migration",
      lead: "What urbanisation is and what causes it, how push and pull factors explain why people move, Liu's journey from a rice farm in Sichuan to a factory in Shanghai, and whether city life is better.",
      covers: [7],
      pretext: {
        words: [
          { word: "rural", means: "the countryside: villages, farms and open land", sentence: "Liu grew up in a rural part of Sichuan Province." },
          { word: "urban", means: "towns and cities", sentence: "Shanghai is a huge urban area." },
          { word: "urbanisation", means: "when a bigger share of a country's people live in cities", sentence: "Urbanisation has been very fast in China." },
          { word: "migration", means: "people moving from one place to live in another", sentence: "Rural to urban migration has filled China's cities." },
          { word: "push factor", means: "something that makes people want to leave a place", sentence: "Hard work on the farm for little money is a push factor." },
          { word: "pull factor", means: "something that makes people want to move to a place", sentence: "Better hospitals in the city are a pull factor." }
        ],
        passage: [
          "Rural areas are the countryside; urban areas are towns and cities.",
          "Urbanisation is when a bigger share of the population lives in cities.",
          "In China, about 100 million people moved from the countryside to cities in ten years.",
          "This movement is called rural to urban migration.",
          "People move for many reasons.",
          "Push factors make people want to leave a place.",
          "Hard work on a farm for little money is a push factor.",
          "Pull factors make people want to move to a place.",
          "Better hospitals and higher wages are pull factors.",
          "Liu is 18 and lives on a small rice farm in Sichuan Province.",
          "She dreams of moving to Shanghai to earn money for her family.",
          "Life in the city brings new chances, but also long hours in a factory."
        ]
      },
      sections: [
        {
          heading: "Urbanisation and migration",
          paragraphs: [
            "Rural areas are the countryside: villages, farms and open land. Urban areas are towns and cities. Urbanisation is where an increasing proportion of a country's population lives in cities, and therefore a smaller proportion lives in rural areas. It is a result, not a movement: the share of people who are urban goes up.",
            "What causes urbanisation? Mostly rural to urban migration: the movement of people from the countryside to cities. In China, around 100 million people moved from the countryside to cities in a single decade. Cities also grow because babies are born in them, but in China the main cause has been migration.",
            "The key question of this lesson is why. To answer it, geographers separate the reasons into two kinds: push factors, which make people want to leave the countryside, and pull factors, which make them want to move to the city."
          ],
          tip: "Migration is the movement of people. Urbanisation is the result: a bigger share living in cities."
        },
        {
          heading: "Push and pull",
          paragraphs: [
            "A push factor is a characteristic of a place that makes you want to leave it. In rural China that might be hard labour in farming, low income, few jobs apart from farming, poor schools and clinics, or a bad harvest. A pull factor is a characteristic of a place that makes you want to move there: better medical facilities, higher wages, more jobs, schools and colleges, entertainment and the chance to send money home.",
            "Push and pull factors often come in pairs. Low pay on the farm pushes; a factory wage pulls. A village with no secondary school pushes; a city with colleges pulls. When you sort a list of reasons, ask: is this about the place being left (push) or the place being moved to (pull)?"
          ],
          worked: {
            q: "Sort these four reasons into push and pull factors: the rice harvest failed; Shanghai has hospitals; farm work is exhausting and badly paid; factories in Shanghai are hiring.",
            steps: [
              "Ask of each: is it about the farm (the place being left) or the city (the place being moved to)?",
              "The harvest failing and exhausting, badly paid farm work are about the farm: push.",
              "Hospitals and factories hiring are about Shanghai: pull."
            ],
            answer: "Push: the harvest failed; farm work is exhausting and badly paid. Pull: Shanghai has hospitals; factories in Shanghai are hiring."
          },
          tip: "Push is about the place you leave. Pull is about the place you go to."
        },
        {
          heading: "Liu's story",
          paragraphs: [
            "Liu is 18. She lives with her parents and her brother in a small farmhouse in Sichuan Province, in the south-west of China. The family are subsistence rice farmers: they grow rice mainly to feed themselves, with little left over to sell. Now that she is 18, Liu dreams of moving to Shanghai. She believes life will be better in a big city, and she hopes to earn money she can send home to help her family.",
            "Liu is one of millions of young people who have made the same journey. When she reaches Shanghai she finds a job in a mobile phone electronics factory. The work is long and repetitive, the hours are like those at Foxconn in the last chapter, and she lives far from her family. But she earns a wage, sees a city, and sends money home.",
            "Comparing rural and urban China through one person makes the push and pull factors concrete. Every reason Liu gives for leaving Sichuan is a push factor; every reason she gives for choosing Shanghai is a pull factor."
          ],
          tip: "A named person is evidence. Use Liu's story to support a point, not instead of one."
        },
        {
          heading: "Is city life better?",
          paragraphs: [
            "The positives of city life are real: a regular wage instead of a harvest that may fail, hospitals and schools, shops and entertainment, and independence. Money sent home can pay for a sibling's schooling or a better house in the village.",
            "The negatives are real too: 12-hour shifts, crowded dormitories, the cost of city living, pollution, and loneliness far from family. Many migrants plan to stay a few years and then go home. Whether the move is worth it depends on what the city delivers compared with what the farm could.",
            "Your extended writing asks you to compare Liu's life in Shanghai and the factory with her life in the farmhouse in Sichuan, using the evidence from the extract, with positives and negatives for each. The top level uses three or more points for each side and evaluates: it decides which life is better for Liu, and why."
          ],
          tip: "Compare means both places in every paragraph: in Sichuan…, whereas in Shanghai…"
        }
      ],
      gate: [
        { kind: "mcq", q: "What is a push factor?", options: ["Something about a place that makes people want to leave it", "Something about a place that makes people want to move there", "The movement of people from the countryside to cities", "The increase in the share of people living in cities"], answer: 0, why: "Push factors push people out of a place, such as hard labour in farming. Pull factors attract them to a new place.",
          feedback: [
            "",
            "Something that attracts people to a place is a pull factor. A push factor is the opposite: it makes people want to leave, like hard labour in farming.",
            "The movement itself is rural to urban migration. A push factor is one of its causes: something about the countryside that makes people want to leave.",
            "The increase in the share of people living in cities is urbanisation, the result. A push factor is a cause: something that makes people want to leave a place."
          ] },
        { kind: "gap", q: "Urbanisation is where an increasing ___ of the population lives in cities.", answer: "proportion", options: ["proportion", "number", "village"], why: "Urbanisation is about the share, or proportion, of people who are urban rather than rural, which is why fewer are left in the countryside.",
          feedback: {
            "number": "The number of city dwellers could rise while the countryside grows just as fast. Urbanisation means the share, or proportion, living in cities goes up and the rural share goes down.",
            "village": "Villages are rural, so moving to one is the opposite of urbanisation. The missing word is proportion: a bigger share of people living in cities."
          } },
        { kind: "mcq", q: "Which of these is a pull factor for moving to Shanghai?", options: ["Better medical facilities in the city", "Hard labour in farming", "A failed rice harvest in Sichuan", "Few jobs in the village apart from farming"], answer: 0, why: "Better medical facilities are a characteristic of the city that attracts people: a pull factor. The other three are about the countryside and push people out.",
          feedback: [
            "",
            "Hard labour in farming is about the place being left, so it pushes people out: a push factor. A pull factor describes the city, like better medical facilities.",
            "A failed harvest is a problem in Sichuan, the place being left, so it is a push factor. Better medical facilities in Shanghai are the pull.",
            "Few jobs in the village is a push factor: it is about the countryside. The pull factor is something the city offers, such as better medical facilities."
          ] }
      ],
      modules: [
        {
          title: "Push or pull?",
          task: {
            kind: "mcq",
            q: "Liu says the rice harvest on her family's farm has failed two years running and there is not enough money to live on. Is this a push factor or a pull factor?",
            options: ["A push factor", "A pull factor", "Neither: it is a result of migration"],
            answer: 0,
            feedback: [
              "",
              "A pull factor is something attractive about the place she would move to. A failed harvest is a problem with the place she is in, so it pushes her out: a push factor.",
              "Migration has not happened yet; this is one of its causes. A problem at home that makes someone want to leave is a push factor."
            ],
            why: "The failed harvest is a characteristic of the farm, the place Liu would leave. It makes her want to go, so it is a push factor."
          },
          contexts: [
            { label: "The clinic", q: "Liu says the nearest clinic to her village is a day's journey away, so her mother cannot get treatment. Is this a push factor or a pull factor?" },
            { label: "The school", q: "Liu says the village school stops at age 14 and there is no college anywhere near. Is this a push factor or a pull factor?" },
            { label: "The work", q: "Liu says planting rice is back-breaking work, for very little money. Is this a push factor or a pull factor?" }
          ],
          levels: {
            support: {
              steps: [
                "Ask: is this sentence about the farm, or about the city?",
                "If it is about the farm, it is about the place being left.",
                "A problem with the place being left makes people want to go: that is a push.",
                "Only something good about the city would be a pull."
              ],
              example: {
                q: "Liu's cousin writes that factory wages in Shanghai are three times what she earned on the farm. Push or pull?",
                steps: ["It is about Shanghai, the place being moved to.", "It is attractive, so it pulls."],
                answer: "A pull factor"
              }
            },
            core: { hint: "Is the sentence about the place she is leaving, or the place she is going to?" },
            stretch: { extend: "For each push factor you can think of for Liu, write the matching pull factor that Shanghai offers." }
          },
          explain: "Say, in one sentence, the question you ask to tell a push factor from a pull factor.",
          why: "The failed harvest describes the farm, the place Liu would leave, and makes staying harder. That is a push factor; a pull factor would describe something attractive about Shanghai."
        },
        {
          title: "Liu's journey",
          task: {
            kind: "order",
            q: "Put the stages of Liu's story in the order they happen.",
            items: [
              "Liu lives with her parents and brother on a small subsistence rice farm in Sichuan Province",
              "At 18 she dreams of moving to Shanghai, believing life will be better in a big city",
              "She moves to Shanghai and finds a job in a mobile phone electronics factory",
              "She works long hours and sends money home to help her family"
            ]
          },
          contexts: [
            { label: "A diary", q: "You are writing Liu's diary from her first entry to her latest. Put the stages of her story in order." },
            { label: "A storyboard", q: "A four-frame storyboard tells Liu's story from the farm to the factory. Put the frames in order." }
          ],
          levels: {
            support: {
              steps: [
                "Where does the story start? With her home and family on the farm.",
                "Before anyone moves, they decide to. Her dream comes before the move.",
                "She has to arrive in Shanghai before she can get a job there.",
                "Sending money home only happens once she has a wage."
              ],
              example: {
                q: "Put the stages of a different migrant's story in order: he gets a job on a building site; he hears that wages are higher in Shenzhen; he grows up in a fishing village; he saves money to send to his parents.",
                steps: ["Childhood first.", "Hearing about wages is the pull that comes next.", "Then the job, then the saving."],
                answer: "Grows up in a fishing village; hears wages are higher in Shenzhen; gets a job on a building site; saves money for his parents."
              }
            },
            core: { hint: "Home, dream, move and job, money home." },
            stretch: { extend: "Label each stage of Liu's story with the push or pull factors at work in it." }
          },
          explain: "Say, in one sentence, which stage of the story the pull factors belong to.",
          why: "The story runs from the farm, through the decision to leave, to the move and the job, and finally to the money sent home: the order the lesson's slides follow."
        },
        {
          title: "Why do so many move?",
          task: {
            kind: "written",
            q: "Explain why so many young people in China have moved from the countryside to the cities. (6 marks)",
            marks: 6,
            criteria: [
              "Explains at least two push factors about rural life (hard, badly paid farm work; few jobs; poor services)",
              "Explains at least two pull factors about the city (wages; jobs in factories; hospitals and schools; money to send home)",
              "Uses the key words push factor, pull factor and rural to urban migration correctly",
              "Uses Liu or a figure (100 million in a decade) as evidence",
              "Links cause to effect with because or so"
            ],
            model: "Around 100 million people moved from the countryside to China's cities in ten years, mostly because of push and pull factors. Push factors make people want to leave rural areas: farm work is hard labour for very little money, a harvest can fail, and villages have few jobs apart from farming and poor clinics and schools. Pull factors attract people to cities: factories in Shanghai and Shenzhen offer regular wages, there are hospitals and colleges, and migrants can send money home. Liu, an 18-year-old from a subsistence rice farm in Sichuan, left for Shanghai for exactly these reasons, so her story shows how push and pull work together to cause rural to urban migration."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: the fact. Around 100 million people moved in a decade.",
                "Sentences 2 and 3: two push factors, each with because.",
                "Sentences 4 and 5: two pull factors, each with so.",
                "Last sentence: use Liu as your example."
              ],
              example: {
                q: "In two sentences, explain one reason people leave a remote Scottish island and one reason they choose Glasgow.",
                steps: ["Push with because.", "Pull with so."],
                answer: "People leave the island because there are few jobs apart from fishing and the ferry makes everything expensive. They choose Glasgow because it has universities and thousands of jobs, so young people can study and work there."
              }
            },
            core: { hint: "Two pushes about the farm, two pulls about the city, Liu as evidence." },
            stretch: { extend: "Add a paragraph explaining what this migration has done to China's cities, using Shenzhen as your example." }
          },
          explain: "Say, in one sentence, why push and pull factors usually work together rather than alone.",
          why: "A full answer gives push factors about the countryside and pull factors about the city, names them as such, and uses Liu or the 100 million figure as evidence of the scale."
        }
      ]
    },
    /* ───────────── 6 · the environment and the wider world ───────────── */
    {
      key: "environment-world", n: 6, title: "China's growth: the environment and the wider world",
      lead: "The environmental price of China's boom, from Beijing's air to the Three Gorges Dam, what sustainable development would mean, and how to judge whether China's investment in Africa is friendship or exploitation.",
      covers: [8, 9, 10],
      pretext: {
        words: [
          { word: "air pollution", means: "harmful particles and gases in the air", sentence: "Air pollution in Beijing was far worse than in London." },
          { word: "deforestation", means: "cutting down forests without replacing them", sentence: "Deforestation leaves hillsides bare and loose." },
          { word: "hydroelectric", means: "making electricity from falling water held back by a dam", sentence: "The Three Gorges Dam is a hydroelectric power station." },
          { word: "sustainable", means: "able to carry on without using up what the future needs", sentence: "Clean energy is a more sustainable choice than coal." },
          { word: "investment", means: "putting money into a place or business to make it grow", sentence: "Chinese investment has built new railways in Africa." },
          { word: "exploitation", means: "using a place or people unfairly for your own gain", sentence: "Critics call China's deals in Africa exploitation." }
        ],
        passage: [
          "China's fast economic growth has come at a cost to the environment.",
          "Its main problems are air pollution, deforestation, landslides and soil erosion.",
          "In August 2010 Beijing's air scored 604 on a pollution measure.",
          "London's air scored only 38 in the same month.",
          "The Three Gorges Dam crosses the Yangtze River in Hubei province.",
          "It is the world's largest hydroelectric power station.",
          "It makes electricity without burning coal, but it has caused social, economic and environmental problems.",
          "Sustainable development meets today's needs without harming future generations.",
          "China also trades with and invests in many African countries.",
          "Some people see this as investment that builds roads and railways.",
          "Others see it as exploitation of Africa's resources.",
          "Geographers test ideas like these against evidence before deciding."
        ]
      },
      sections: [
        {
          heading: "The cost of growth: Beijing's air",
          paragraphs: [
            "Your class graph compared particles of pollution in the air of three cities each August. Beijing scored 604 in 2010, 157 in 2011, 162 in 2012, 409 in 2013 and 97 in 2014. London scored 38, 50, 49, 62 and 65. New York scored 24, 11, 19, 29 and 41. Beijing is by far the worst overall: even its best year, 2014, was higher than London's worst. New York's air was the cleanest.",
            "Why is Beijing's air so bad? China burns huge amounts of coal in power stations to run its factories and heat its cities, millions of new cars have filled its roads, and dust blows in from the dry north. Factory cities like Shenzhen have the same problem. A news report at the time compared a day breathing Beijing's air to smoking 40 cigarettes, and estimated that air pollution in China kills 4400 people every day.",
            "Notice the anomaly in Beijing's line: a big fall after 2010, then a jump back up in 2013. One month's reading depends on the weather as well as on how much is burned, which is why geographers look at several years before they draw conclusions."
          ],
          worked: {
            q: "How much higher was Beijing's August pollution score than London's in 2010?",
            steps: [
              "Read both values from the table: Beijing 604, London 38.",
              "Higher than means the difference, so subtract: 604 − 38.",
              "604 − 38 = 566."
            ],
            answer: "566 points higher",
            checks: [{ expr: "BJ_2010-LDN_2010", value: 566, tol: 0 }]
          },
          tip: "Use data to support your answer means quote a number from the table, then say what it shows."
        },
        {
          heading: "Deforestation, landslides and the Three Gorges Dam",
          paragraphs: [
            "China has cut down forests on a huge scale, for farmland to feed its people, for timber, and for land to build on. Deforestation leaves hillsides bare, so rain washes the soil away (soil erosion) and whole slopes can slide (landslides). The trees that held the soil and soaked up the rain are gone.",
            "The Three Gorges Dam is a hydroelectric dam across the Yangtze River by the town of Sandouping, in the Yiling District of Yichang, in Hubei province. It is the world's largest hydroelectric power station by the electricity it generates each year. Hydroelectric power makes electricity without burning coal, so it helps with air pollution. But the dam has created social, economic and environmental problems: the lake behind it flooded towns and farmland, so people had to leave their homes; it cost an enormous sum to build; and the flooded valley sides have suffered landslides and soil erosion.",
            "To decide whether the dam is good or bad, use the frame from the lesson: economically good or bad because…, environmentally good or bad because…, socially good or bad because…. The top level says whether the dam makes China's development more or less sustainable."
          ],
          tip: "Social is people, economic is money, environmental is nature. Say which you are using each time."
        },
        {
          heading: "Can China keep growing? Sustainable development",
          paragraphs: [
            "Sustainable development is development that meets the needs of people today without stopping future generations from meeting their own needs. Burning coal to make goods cheaply meets a need today; the dirty air and the warming climate are costs passed to the future.",
            "China has around 1.4 billion people living in an area smaller than the USA, a rapidly growing economy and enormous demand for energy, water and land. That is why many people see China as a major test of whether development in the twenty-first century can be sustainable. Because China is so big, what it does affects the rest of the world: the goods we buy, the air we share and the climate we all live in.",
            "What could make China's growth more sustainable? Replacing coal with wind, solar and hydroelectric power; planting trees on bare slopes; cleaner cars and better public transport; and stricter limits on what factories may release. When you write about these, use PEE: a point, a piece of evidence from the lesson, and an explanation of why it helps."
          ],
          tip: "Sustainable has two halves: needs now, and needs in the future. A good answer mentions both."
        },
        {
          heading: "China in Africa: investment or exploitation?",
          paragraphs: [
            "China's growth needs raw materials, and Africa has them: metals, oil and farmland. Chinese firms and the Chinese government have invested heavily in African countries, building roads, railways, ports, power stations and stadiums, and buying resources in return. The investment is uneven: a map of it shows some countries receiving far more than others, usually those with the resources China wants or the ports it needs. China's wider plan to build trade routes across Asia, Africa and Europe is known as the Belt and Road Initiative (BRI).",
            "Is this good or bad for Africa? One view says investment: new infrastructure, jobs and trade that African countries could not afford alone. The other says exploitation: resources leave cheaply, the best jobs go to Chinese workers, and the country gains little. The lesson's starter asks who holds the power in the conversation; the opinion line asks you to mark where you stand between the two.",
            "Geographers do not decide by feeling. The lesson sets a hypothesis (China in Africa: friend or foe?), tests it against evidence cards, sorts the evidence as friend or foe, and then reaches a joint decision with a partner, supported by an example. The follow-up questions are the hard ones: is the relationship unfair, what could African countries do to make it work better for them, and what would be the problem with a Pan-African approach, where Africa negotiates as one continent instead of as separate countries?"
          ],
          tip: "Justify means give your decision and the evidence that led you to it, including the evidence against."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which river does the Three Gorges Dam cross?", options: ["The Yangtze", "The Yellow River", "The Ganges", "The Mekong"], answer: 0, why: "The Three Gorges Dam spans the Yangtze River at Sandouping, in Hubei province.",
          feedback: [
            "",
            "The Yellow River is China's other great river, further north. The Three Gorges Dam is on the Yangtze, in Hubei province.",
            "The Ganges flows through India and Bangladesh, not China. The dam is on the Yangtze, China's longest river.",
            "The Mekong flows south through South-East Asia. The Three Gorges Dam is on the Yangtze, in central China."
          ] },
        { kind: "numeric", q: "In August 2010 Beijing's pollution score was 604 and London's was 38. How many points higher was Beijing's?", answer: 566, tolerance: 0, units: "points", check: "BJ_2010-LDN_2010", why: "Higher than means the difference: 604 − 38 = 566 points.",
          misconceptions: [
            { answer: 642, says: "You added the two scores. How many points higher asks for the difference: 604 − 38 = 566.", check: "BJ_2010+LDN_2010" },
            { answer: 604, says: "604 is Beijing's score, not the gap between the cities. Subtract London's 38: 566 points.", check: "BJ_2010" },
            { answer: 576, says: "You subtracted 28 instead of 38. London's score was 38, so 604 − 38 = 566.", check: "BJ_2010-28" }
          ] },
        { kind: "gap", q: "Sustainable development meets the needs of the present without harming the ability of ___ generations to meet their own needs.", answer: "future", options: ["future", "past", "wealthy"], why: "Sustainability is about the future: using what we need now without using up what people not yet born will need.",
          feedback: {
            "past": "Past generations have already lived; nothing we do now can change their needs. Sustainable development protects future generations.",
            "wealthy": "Sustainability is not about rich people in particular. It is about everyone who comes after us: future generations."
          } }
      ],
      modules: [
        {
          title: "Beijing's average score",
          task: {
            kind: "numeric",
            q: "Beijing's August pollution scores were 604, 157, 162, 409 and 97 for 2010 to 2014. What was the mean score over the five years?",
            answer: 285.8, tolerance: 0.05, units: "points", check: "(BJ_2010+BJ_2011+BJ_2012+BJ_2013+BJ_2014)/5",
            misconceptions: [
              { answer: 1429, says: "1429 is the total of the five scores. The mean shares that total between the five years, so divide by 5: 285.8.", check: "BJ_2010+BJ_2011+BJ_2012+BJ_2013+BJ_2014" },
              { answer: 357.25, says: "You divided by 4, but there are five years in the table. 1429 ÷ 5 = 285.8.", check: "(BJ_2010+BJ_2011+BJ_2012+BJ_2013+BJ_2014)/4" },
              { answer: 162, says: "162 is the middle value when the scores are put in order (the median). The mean is the total divided by 5: 285.8.", check: "BJ_2012" }
            ],
            why: "Add the five scores (604 + 157 + 162 + 409 + 97 = 1429) and divide by the number of years: 1429 ÷ 5 = 285.8."
          },
          contexts: [
            { label: "Class graph", q: "The five Beijing points on your class graph read 604, 157, 162, 409 and 97 for 2010 to 2014. What is the mean of the five readings?", check: "(BJ_2010+BJ_2011+BJ_2012+BJ_2013+BJ_2014)/5" },
            { label: "News graphic", q: "A news graphic lists Beijing's August pollution scores from 2010 to 2014 as 604, 157, 162, 409 and 97. What is the mean score?", check: "(BJ_2010+BJ_2011+BJ_2012+BJ_2013+BJ_2014)/5" },
            { label: "Scientist's table", q: "A scientist's table records Beijing's August readings as 604 in 2010, 157 in 2011, 162 in 2012, 409 in 2013 and 97 in 2014. What is the mean reading?", check: "(BJ_2010+BJ_2011+BJ_2012+BJ_2013+BJ_2014)/5" }
          ],
          levels: {
            support: {
              steps: [
                "The mean is the total shared equally between the years.",
                "Add the five scores carefully; a running total helps.",
                "Count the years: five.",
                "Divide the total by 5 and keep one decimal place."
              ],
              example: {
                q: "London's August scores were 38, 50, 49, 62 and 65. What was the mean?",
                steps: ["38 + 50 + 49 + 62 + 65 = 264.", "264 ÷ 5 = 52.8."],
                answer: "52.8 points",
                checks: [{ expr: "(LDN_2010+LDN_2011+LDN_2012+LDN_2013+LDN_2014)/5", value: 52.8, tol: 0.001 }]
              }
            },
            core: { hint: "Total of the five, divided by five." },
            stretch: { extend: "Work out New York's mean (24, 11, 19, 29, 41) and say roughly how many times higher Beijing's mean is." }
          },
          explain: "Say, in one sentence, why a mean of several years is fairer than one year's reading.",
          why: "The five scores total 1429; divided by five years that is a mean of 285.8, more than five times London's mean of 52.8."
        },
        {
          title: "Four problems, four causes",
          task: {
            kind: "match",
            q: "Match each of China's environmental problems to its description.",
            pairs: [
              ["Air pollution", "Coal power stations, factories and traffic fill the air with harmful particles"],
              ["Deforestation", "Forests are cut down for farmland, timber and building land"],
              ["Soil erosion", "Rain washes soil off slopes that have lost the trees that held it"],
              ["Landslides", "Bare or flooded valley sides give way and slide downhill"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Air pollution is the only problem about the air: look for particles.",
                "Deforestation is about trees being removed.",
                "Soil erosion and landslides both follow deforestation: one is soil washed away a little at a time, the other is a whole slope moving.",
                "Erosion is gradual; a slide is sudden."
              ],
              example: {
                q: "Match: water pollution, flooding. Descriptions: a river bursts its banks after heavy rain; chemicals from a factory poison a river.",
                steps: ["Pollution is about something harmful getting in.", "Flooding is about water going where it should not."],
                answer: "Water pollution: chemicals from a factory poison a river. Flooding: a river bursts its banks after heavy rain."
              }
            },
            core: { hint: "Air, trees, soil, slope: one each." },
            stretch: { extend: "Explain how the Three Gorges Dam links to two of these four problems." }
          },
          explain: "Say, in one sentence, how deforestation leads to soil erosion.",
          why: "Air pollution comes from what China burns; deforestation is the loss of trees; soil erosion is the slow washing-away that follows; landslides are the sudden failure of bare or flooded slopes."
        },
        {
          title: "Friend or foe?",
          task: {
            kind: "written",
            q: "China's investment in Africa is good for African countries. How far do you agree? (6 marks)",
            marks: 6,
            criteria: [
              "States a hypothesis or opinion clearly at the start (friend or foe; investment or exploitation)",
              "Gives at least one piece of evidence for investment (roads, railways, ports, power stations, jobs, trade)",
              "Gives at least one piece of evidence for exploitation (resources leaving cheaply, jobs going to Chinese workers, unfair deals, unequal power)",
              "Reaches a justified judgement that says to what extent, and suggests what African countries could do",
              "Uses the key words investment and exploitation correctly"
            ],
            model: "My hypothesis is that China is partly a friend and partly a foe to Africa. Chinese investment has built roads, railways, ports and power stations that many African countries could not afford, creating jobs and trade, which is good for them. However, much of the deal is exploitation: metals and oil leave Africa cheaply, many of the best jobs go to Chinese workers, and the country with the resources holds less power in the conversation than the country with the money. Overall I agree only to some extent, because the roads and railways are real but the profits mostly flow to China; African countries would gain more if they set conditions together, as a Pan-African group, rather than negotiating one by one."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: your hypothesis. Friend, foe, or both?",
                "Sentence 2: one piece of evidence for investment, and why it helps.",
                "Sentence 3: one piece of evidence for exploitation, and who loses.",
                "Sentence 4: Overall I agree to a … extent because…, plus one thing African countries could do."
              ],
              example: {
                q: "In two sentences, give one way a big supermarket opening in a small town is a friend to the town, and one way it is a foe.",
                steps: ["Friend: a benefit and who gains.", "Foe: a cost and who loses."],
                answer: "The supermarket is a friend because it creates jobs and sells cheap food to local families. It is a foe because small shops lose customers and the profits go to a company based far away."
              }
            },
            core: { hint: "Hypothesis, evidence for, evidence against, judgement with a condition." },
            stretch: { extend: "Write the set of conditions you would want all African leaders to agree that China must follow, and explain why agreeing them as one continent would be difficult." }
          },
          explain: "Say, in one sentence, which piece of evidence moved your opinion line the most.",
          why: "A strong answer tests a hypothesis against evidence on both sides, uses the words investment and exploitation precisely, and ends with a judgement that says to what extent and what could change."
        }
      ]
    }
  ],

  sources: {
    deckDump: "gg_y08_unit_1_asia_and_china.txt",
    decksUsed: ["Asia.pptx", "Shenzen_year8.pptx", "Year 08__Unit 1 - Asia and China__China rural urban migration_year8.pptx", "China_Environment problems_year8.pptx", "China in Africa_year8.pptx"],
    notes: "Lesson titles, sequence, key words, definitions and every figure come from the five department decks only (Asia.pptx slides 1-77 as extracted; Shenzen_year8.pptx 1-70; rural urban migration 1-21; China_Environment problems 1-12; China in Africa 1-25). House furniture (seating plan, homework and textbook-page slides, the spelling and progress sheets, peer-assessment placemats, Prior Learning/Components sheet) was used only to fix the lesson sequence. The deck's quoted material (Apple and Foxconn statements from a newspaper, the Foxconn founder, the Brundtland definition) is paraphrased, never quoted; verify.py bans its distinctive phrases. Where the deck gives only a task, a video or a worksheet that is not in the dump (China's physical features from the atlas, the deforestation sheet, the China-in-Africa evidence cards and map, Liu's push/pull reason cards on rural-urban slides 11-12, the Nokia factory extract on slide 18), the manifest teaches the method and the deck's own framing and says so in NOTES.md; a small number of atlas facts are stated and flagged there. Every number is held in the FACTS table in verify.py and recomputed. No pretext.l1 (translation is a separate pass) and no meta.constellation. No text is quoted from any source."
  }
};
