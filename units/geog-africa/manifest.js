// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 Geography · Year 7 Unit 2 · Africa (foundations for AQA GCSE Geography 8035) · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression; the FACTS names held in verify.py are allowed) and are recomputed.
//   worked examples / support examples with a calculation carry `checks:[{expr, value, tol}]`.
//   every "order" task is compared with the canonical sequences held in verify.py (the deck's own sequences and dates).
//   every mcq / gap / match answer is compared with the independent answer key held in verify.py.
//   every case-study number (continent areas, country counts and populations from the deck's ranking task, Kilimanjaro's
//   5896 m, the four climate-graph totals, 3 % of Africa independent in 1913, the deck's years 1850 / 1884 / 1900 / 1914)
//   is checked against the independent FACTS table in verify.py.
//   passage sentences are counted (≤ 20 words) and all text is linted for known misconceptions, the deck's misspellings and
//   errors, non-deck facts, and the deck's model-answer fingerprints.
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions`; every module carries
//   `explain`; ≥ 1 module per chapter carries `contexts` that never redefine the answer; `connections` ⊂ glossary;
//   meta.constellation is omitted (the engine lays the stars out); no pretext.l1 (translation is a separate pass).
// KS3: written tasks carry success criteria, not marks. Maps, climate graphs and population maps are described in words;
// no widget exists for them.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["geog-africa"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "geog-africa",
    subjectKey: "geography",
    subject: "Geography",
    board: "AQA",
    spec: "KS3 → 8035",
    specRef: "KS3 Year 7 Unit 2: Africa — locational and place knowledge, map and graph skills; foundations for GCSE Geography 8035 section 3.2.2 The changing economic world (uneven development, the development gap, Nigeria)",
    year: 7,
    tier: "KS3",
    title: "Africa: A Continent, Not a Country",
    sub: "From the Sahara to the Zambezi and from Lagos to the Maasai: where Africa's places and people are, how the continent's climate varies, and how development, colonisation and globalisation have shaped it.",
    bigQuestion: "What is Africa really like, and how have its physical geography, its people and its history shaped the continent today?",
    lessonCount: 11,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  // The department's five decks, in teaching order. Titles are the decks' own slide titles or learning objectives; questions
  // are those objectives rephrased. See NOTES.md section 2 for the slide ranges and the lesson-count decision.
  lessons: [
    { n: 1, title: "Africa: continents, oceans and what geography is", question: "What is geography, and where does Africa sit among the seven continents?", keywords: ["continent", "ocean", "human geography", "physical geography", "environmental geography"] },
    { n: 2, title: "What are my perceptions of Africa?", question: "What do I already think about Africa, and does the evidence in the photographs support it?", keywords: ["perception", "evidence", "continent not a country", "Africa or not Africa"] },
    { n: 3, title: "Physical features of Africa", question: "Where are Africa's great rivers, lakes, mountains and deserts, and which lines of latitude cross the continent?", keywords: ["River Nile", "River Zambezi", "Lake Victoria", "Sahara Desert", "Mount Kilimanjaro", "Equator", "Tropic of Cancer"] },
    { n: 4, title: "African climate", question: "How does climate vary across Africa, and how do climate graphs show it?", keywords: ["climate", "climate graph", "rainfall", "temperature", "biome", "relief"] },
    { n: 5, title: "Human features of Africa: population distribution", question: "Where do people live in Africa, and why are some places crowded and others almost empty?", keywords: ["population", "population distribution", "population density", "capital city", "Sahara", "West Africa"] },
    { n: 6, title: "The human geography of Africa: museum stall", question: "What makes a country what it is, and how can you present one African country to visitors?", keywords: ["location", "population structure", "life expectancy", "GDP", "culture", "exports"] },
    { n: 7, title: "Africa in the wider world: development", question: "How do we measure how developed a country is, and why is there a development gap?", keywords: ["development", "HIC", "LIC", "NEE", "development gap", "debt"] },
    { n: 8, title: "The colonisation of Africa", question: "How and why did European countries colonise Africa, and how did the map of Africa change?", keywords: ["colonialism", "independence", "1884", "1914", "straight borders"] },
    { n: 9, title: "The impacts of colonialism", question: "What were the impacts of colonial rule on Africa, and which European country ruled where?", keywords: ["impacts", "SEEP", "land", "labour", "missionaries", "legacy"] },
    { n: 10, title: "Tribes in Africa", question: "Who are some of the peoples of Africa, and where does each live?", keywords: ["Maasai", "Zulu", "Yoruba", "Hausa", "culture", "language"] },
    { n: 11, title: "Globalisation", question: "What is globalisation, what causes it, and what does your mobile phone have to do with the Congo?", keywords: ["globalisation", "interconnected", "ICT", "trade", "transnational corporation", "coltan"] }
  ],

  // 16 terms; Connections uses all 16 (four groups, each one chapter's idea). Chapters 1 and 3 teach their key words through
  // pretext.words and the text instead (continent, the three kinds of geography, climate, climate graph).
  glossary: [
    { term: "relief", means: "The height and slope of the land: how high it is and how steeply it rises and falls.", chapter: "physical-africa" },
    { term: "gulf", means: "A large bay that is an arm of an ocean or sea, such as the Gulf of Aden.", chapter: "physical-africa" },
    { term: "island", means: "A piece of land surrounded by water, such as Madagascar.", chapter: "physical-africa" },
    { term: "biome", means: "A very large area with its own community of plants and animals, such as a desert or a tropical rainforest.", chapter: "physical-africa" },
    { term: "population", means: "The people who live in a place: a country, a city or a region.", chapter: "people-of-africa" },
    { term: "population distribution", means: "The spread of people across an area: where people live and where they do not.", chapter: "people-of-africa" },
    { term: "population density", means: "The number of people living in each square kilometre of an area.", chapter: "people-of-africa" },
    { term: "capital city", means: "The city where a country's government is based, such as Abuja in Nigeria.", chapter: "people-of-africa" },
    { term: "HIC", means: "A high income country: a rich country such as the United Kingdom or Japan. The older name was MEDC.", chapter: "wider-world" },
    { term: "LIC", means: "A low income country: a poor country such as Ethiopia or Somalia. The older name was LEDC.", chapter: "wider-world" },
    { term: "NEE", means: "A newly emerging economy: a country getting richer fast, such as Nigeria, South Africa or India.", chapter: "wider-world" },
    { term: "development gap", means: "The difference in wealth and quality of life between the richest and poorest countries, or between groups in one country.", chapter: "wider-world" },
    { term: "colonialism", means: "Taking control of another country, settling people there and using its land, people and resources for your own benefit.", chapter: "colonisation" },
    { term: "colony", means: "A country or area ruled by another, more powerful country.", chapter: "colonisation" },
    { term: "independence", means: "When a country governs itself, after a period of being ruled by another country.", chapter: "colonisation" },
    { term: "exploit", means: "To make use of a place, a people or a thing for your own benefit, without fair return.", chapter: "colonisation" }
  ],

  connections: [
    { group: "Key terms in physical geography", terms: ["relief", "gulf", "island", "biome"] },
    { group: "Where people live", terms: ["population", "population distribution", "population density", "capital city"] },
    { group: "Sorting the world's countries", terms: ["HIC", "LIC", "NEE", "development gap"] },
    { group: "The language of colonisation", terms: ["colonialism", "colony", "independence", "exploit"] }
  ],

  chapters: [
    /* ───────────── 1 · Africa on the map ───────────── */
    {
      key: "africa-on-the-map", n: 1, title: "Africa on the map: a continent, not a country",
      lead: "What geography is, where Africa sits among the seven continents, how it compares with them, and why your first ideas about Africa need testing against evidence.",
      covers: [1, 2],
      pretext: {
        words: [
          { word: "continent", means: "one of the world's seven very large areas of land", sentence: "Africa is a continent with more than fifty countries in it." },
          { word: "ocean", means: "one of the huge areas of salt water between the continents", sentence: "The Atlantic Ocean lies to the west of Africa." },
          { word: "human geography", means: "the study of where and how people live", sentence: "Cities, farms and roads are part of human geography." },
          { word: "physical geography", means: "the study of natural features and events, such as mountains, rivers and weather", sentence: "A volcano is part of physical geography." },
          { word: "perception", means: "what you believe a place is like before you check the evidence", sentence: "My perception of Africa changed when I saw the photographs." }
        ],
        passage: [
          "Geography is the study of the world we live in.",
          "It looks at landscapes, people, places and environments.",
          "Physical geography is about natural features, like mountains, rivers and weather.",
          "Human geography is about where and how people live.",
          "Environmental geography links the two, for example pollution.",
          "The world has seven continents.",
          "Africa is one of them.",
          "Africa is a continent, not a country.",
          "It has more than fifty countries inside it.",
          "Only Asia is bigger than Africa.",
          "Many people have fixed ideas about Africa.",
          "Photographs show cities, railways, schools and stadiums as well as villages.",
          "A good geographer checks ideas against evidence."
        ]
      },
      sections: [
        {
          heading: "What is geography?",
          paragraphs: [
            "Geography is the subject that studies the Earth and everything on it: the landscapes, the peoples, the places and the environments they share. The definition your teacher asked you to copy into your book puts it more simply still: geography is the study of the world we live in. A geographer is someone who tries to make sense of that world, asking where things are, why they are there and how they are changing.",
            "There are three main types of geography. Physical geography is about natural features and events, including landforms such as mountains and rivers, and the weather. Human geography is about where and how people live: their towns, farms, jobs and journeys. Environmental geography is where the two meet: how people and the natural world affect each other, including problems such as pollution.",
            "This unit uses all three. You will map Africa's rivers and deserts (physical), find out where its people live (human), and ask how mining for mobile phones affects forests and gorillas in the Congo (environmental)."
          ],
          tip: "If a question says physical, think natural: land, water and weather. If it says human, think people."
        },
        {
          heading: "Seven continents and the oceans around them",
          paragraphs: [
            "The land of the Earth is divided into seven continents: Asia, Africa, North America, South America, Antarctica, Europe and Australasia (also called Oceania). Between and around them lie the oceans. The map in your first lesson labels four of them: the Atlantic, Pacific, Indian and Southern Oceans. Africa has the Atlantic Ocean to its west and the Indian Ocean to its east, with the Mediterranean Sea to the north.",
            "The continents are very different in size. In area, Asia is the biggest at 43.8 million km², then Africa at 30.2 million km², North America at 24.5 million km², South America at 17.8 million km², Antarctica at 14 million km², Europe at 10.1 million km² and Oceania at 9 million km². Africa is the second largest continent on Earth, and only Asia is bigger.",
            "Africa also has more countries than any other continent: 53 in the lesson's table, against 48 in Asia and 46 in Europe. Its population in the table is 830 million, second only to Asia's 3,780 million and ahead of Europe's 730 million. These figures come from your department's resource and are rounded; the exact numbers change as populations grow and as new countries are recognised."
          ],
          worked: {
            q: "Put Europe, Africa and North America in order of area, biggest first.",
            steps: [
              "Find the three areas in the table: Europe 10.1 million km², Africa 30.2 million km², North America 24.5 million km².",
              "Compare the whole numbers first: 30 is bigger than 24, which is bigger than 10.",
              "Write the order with the biggest first: Africa, North America, Europe.",
              "Check: Africa is 30.2 − 24.5 = 5.7 million km² bigger than North America, so the order is right."
            ],
            answer: "Africa (30.2 million km²), North America (24.5 million km²), Europe (10.1 million km²).",
            checks: [{ expr: "AREA_AFRICA-AREA_NAM", value: 5.7, tol: 0.000001 }]
          },
          tip: "Ranking means putting things in order. Always say which way: biggest first or smallest first."
        },
        {
          heading: "Africa is a continent, not a country",
          paragraphs: [
            "Many people talk about Africa as if it were one place with one kind of landscape and one way of life. It is not. Africa is a continent of more than fifty countries, from Egypt and Morocco in the north to South Africa in the south, and the differences between them are as big as the differences between countries in Europe.",
            "In your perceptions lesson you saw fifteen photographs and had to decide whether each was taken in Africa or not. Twelve were: lorry drivers in Sudan, teenage girls in South Africa, a modern electric railway in Morocco, a classroom in a school in Nigeria, a football stadium in Ghana, the skyscrapers of Victoria Island in Lagos, primary school children in Kenya, straw houses in northern Nigeria, a red carpet at an airport in Malawi, a modern city building in Equatorial Guinea and Zuma Rock near Abuja in Nigeria. Three were not: a market in Brixton in London, Sheedi men in Pakistan and a man in Maasai dress working at a wildlife park in California.",
            "The point of the task is that your perception, what you expect Africa to look like, is not the same as the evidence. Cities, railways, airports and stadiums are as much a part of Africa as villages and wildlife. A geographer uses evidence, such as clues in a photograph, to test ideas rather than simply believing them."
          ],
          tip: "If you catch yourself writing Africa when you mean one country, stop and name the country."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is the correct description of Africa?", options: ["A continent made up of many countries", "A single large country", "An ocean to the south of Europe", "A city in Nigeria"], answer: 0, why: "Africa is one of the seven continents. It contains more than fifty separate countries, each with its own government, flag and capital.",
          feedback: [
            "",
            "This is the most common mistake in the unit. Africa is not one country; it is a continent with more than fifty countries, such as Nigeria, Kenya and Egypt.",
            "An ocean is a huge area of salt water. Africa is land: a continent. The water to the south of Europe is the Mediterranean Sea, with Africa on its far shore.",
            "Nigeria is a country inside Africa, and its cities include Lagos and Abuja. Africa itself is the whole continent that Nigeria is part of."
          ] },
        { kind: "gap", q: "Physical geography is the study of ___ features such as mountains, rivers and weather.", answer: "natural", options: ["natural", "human", "political"], why: "Physical geography is about natural features and events: landforms, water and weather. People belong to human geography.",
          feedback: {
            "human": "Human features are things people make and do, such as towns, roads and farms. Mountains, rivers and weather are natural, so they belong to physical geography.",
            "political": "Political features are about governments and borders, which is part of human geography. Mountains, rivers and weather are natural features, so the word you need is natural."
          } },
        { kind: "mcq", q: "Which continent is the only one bigger than Africa?", options: ["Asia", "Europe", "North America", "Antarctica"], answer: 0, why: "Asia is 43.8 million km² and Africa 30.2 million km². Every other continent is smaller than Africa.",
          feedback: [
            "",
            "Europe is one of the smallest continents, at 10.1 million km², about a third of the size of Africa. The only continent bigger than Africa is Asia.",
            "North America, at 24.5 million km², is the third largest continent, smaller than Africa. The only continent bigger than Africa is Asia.",
            "Antarctica, at 14 million km², is less than half the size of Africa. The only continent bigger than Africa is Asia."
          ] }
      ],
      modules: [
        {
          title: "Three kinds of geography",
          task: {
            kind: "match",
            q: "Match each type of geography, and the word continent, to its meaning.",
            pairs: [
              ["Human geography", "Where and how people live"],
              ["Physical geography", "Natural features and events, including landforms and weather"],
              ["Environmental geography", "Human and physical geography linked together, including pollution"],
              ["Continent", "One of the world's seven very large areas of land"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the word human. Human means people, so human geography is about people.",
                "Physical means to do with the natural world: land, water and weather.",
                "Environmental geography is the one that joins the other two together.",
                "The word left over is continent: it is a place, not a type of geography."
              ],
              example: {
                q: "Match: weather, landscape. Choices: the shape and look of an area of land; the conditions in the air today, such as rain or sun.",
                steps: ["Weather is what the air is doing today: rain, sun, wind.", "Landscape is the shape and look of the land."],
                answer: "Weather: the conditions in the air today. Landscape: the shape and look of an area of land."
              }
            },
            core: { hint: "One is about people, one about nature, one joins the two, and one is a place." },
            stretch: { extend: "Give one example from Africa for each of the three types of geography, and say which type a photograph of a flooded city would belong to." }
          },
          explain: "Say, in one sentence, what makes environmental geography different from the other two types.",
          why: "Human geography is where and how people live; physical geography is natural features and events; environmental geography links the two, for example pollution. A continent is one of the seven great land areas."
        },
        {
          title: "How much bigger is Asia?",
          task: {
            kind: "numeric",
            q: "Asia has an area of 43.8 million km² and Africa has an area of 30.2 million km². How many million km² bigger is Asia than Africa?",
            answer: 13.6, tolerance: 0.01, units: "million km²",
            check: "AREA_ASIA-AREA_AFRICA",
            why: "Bigger by how much means subtract: 43.8 − 30.2 = 13.6 million km².",
            misconceptions: [
              { answer: 74, says: "You added the two areas together. The question asks how much bigger Asia is, so you subtract: 43.8 − 30.2 = 13.6.", check: "AREA_ASIA+AREA_AFRICA" },
              { answer: 13.4, says: "You slipped in the decimal part. 0.8 − 0.2 = 0.6, not 0.4, so the answer is 13.6 million km².", check: "AREA_ASIA-30.4" }
            ]
          },
          contexts: [
            { label: "Classroom poster", q: "A poster shows Asia as 43.8 million km² and Africa as 30.2 million km². How many million km² more does the poster give Asia than Africa?", check: "AREA_ASIA-AREA_AFRICA" },
            { label: "Quiz night", q: "In a quiz, a team is told that Asia covers 43.8 million km² and Africa covers 30.2 million km². What is the difference between the two, in million km²?", check: "AREA_ASIA-AREA_AFRICA" }
          ],
          levels: {
            support: {
              steps: [
                "Write the bigger number on top: 43.8.",
                "Write the smaller number underneath, lining up the decimal points: 30.2.",
                "Subtract the whole numbers: 43 − 30 = 13. Subtract the decimals: 0.8 − 0.2 = 0.6.",
                "Put them together: 13.6 million km²."
              ],
              example: {
                q: "North America is 24.5 million km² and South America is 17.8 million km². How many million km² bigger is North America?",
                steps: ["Bigger by how much means subtract.", "24.5 − 17.8: take away 17 to get 7.5, then take away 0.8 to get 6.7."],
                answer: "6.7 million km²",
                checks: [{ expr: "AREA_NAM-AREA_SAM", value: 6.7, tol: 0.000001 }]
              }
            },
            core: { hint: "How much bigger means find the difference. Line up the decimal points before you subtract." },
            stretch: { extend: "Africa is 30.2 million km² and Europe is 10.1 million km². About how many times bigger than Europe is Africa? Explain how you worked it out." }
          },
          explain: "Say, in one sentence, why this question needs subtraction and not addition.",
          why: "The difference between two sizes is found by subtraction. 43.8 − 30.2 = 13.6, so Asia is 13.6 million km² bigger than Africa."
        },
        {
          title: "Perception against evidence",
          task: {
            kind: "written",
            q: "Explain why it is wrong to call Africa a country, and give two pieces of evidence from the photographs in your lesson that challenge a common perception of Africa.",
            criteria: [
              "Says clearly that Africa is a continent made up of more than fifty countries",
              "Names at least two African countries to show the variety",
              "Gives two photographs from the lesson as evidence and says what each shows",
              "Explains what perception the evidence challenges, and ends with a sentence about why geographers use evidence"
            ],
            model: "Africa is not a country but a continent of more than fifty countries, such as Nigeria, Kenya, Egypt and Morocco, and they are as different from each other as the countries of Europe. A common perception is that Africa is all villages and wildlife. The photographs challenge that. One shows a modern electric railway in Morocco, and another shows the skyscrapers of Victoria Island in Lagos, Nigeria. Both are as much a part of Africa as the straw houses in northern Nigeria. Geographers use evidence like this to test their ideas, instead of trusting what they expect to see."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: say what Africa is (a continent) and roughly how many countries it has.",
                "Sentence 2: name two or three of those countries.",
                "Sentence 3: say what many people expect Africa to look like.",
                "Sentences 4 and 5: give two photographs from the lesson and say what each shows.",
                "Last sentence: say why a geographer trusts evidence more than first ideas."
              ],
              example: {
                q: "In two sentences, explain why it would be wrong to say that Europe is a country, using two named places as evidence.",
                steps: ["Say what Europe is.", "Name two places that show it is made of different countries."],
                answer: "Europe is a continent, not a country, and it contains many separate countries. France and Poland, for example, have their own governments, languages and capital cities."
              }
            },
            core: { hint: "Continent, named countries, a perception, two photographs, and why evidence matters: one sentence for each." },
            stretch: { extend: "Add a sentence explaining where you think your own perceptions of Africa came from, such as television, charity adverts or films, and whether they were fair." }
          },
          explain: "Say, in one sentence, what the difference is between a perception and a piece of evidence.",
          why: "A strong answer says Africa is a continent of many countries, names some, states the perception being tested, uses two named photographs as evidence, and ends by saying why geographers rely on evidence."
        }
      ]
    },

    /* ───────────── 2 · physical Africa ───────────── */
    {
      key: "physical-africa", n: 2, title: "Africa's physical features",
      lead: "The great rivers, lakes, mountains and deserts of Africa, the seas around it, the lines of latitude that cross it, and the key words geographers use to describe them.",
      covers: [3],
      pretext: {
        words: [
          { word: "relief", means: "the height and slope of the land", sentence: "The relief of East Africa is high, with mountains and plateaus." },
          { word: "desert", means: "a large, dry area with sandy or rocky ground and few plants", sentence: "The Sahara is a hot desert in North Africa." },
          { word: "lake", means: "a large area of water surrounded by land", sentence: "Lake Victoria is the biggest lake in Africa." },
          { word: "Equator", means: "the imaginary line around the middle of the Earth, at 0 degrees", sentence: "The Equator crosses Africa, so the middle of the continent is hot." },
          { word: "tropic", means: "one of two imaginary lines, 23.5 degrees north and south of the Equator", sentence: "The Tropic of Cancer runs through the Sahara." }
        ],
        passage: [
          "Africa has some of the biggest physical features on Earth.",
          "The River Nile flows north through Egypt to the Mediterranean Sea.",
          "The River Zambezi flows past Zambia, Zimbabwe, Mozambique and Malawi.",
          "Victoria Falls is on the Zambezi.",
          "Lake Victoria is the biggest lake in Africa.",
          "Lake Tanganyika and Lake Nyasa are long, deep lakes.",
          "The Sahara Desert covers much of North Africa.",
          "It is the largest hot desert in the world.",
          "Mount Kilimanjaro in Tanzania is Africa's highest mountain.",
          "It is 5896 metres high and has ice on top.",
          "The Equator crosses the middle of Africa.",
          "The Tropic of Cancer crosses the north and the Tropic of Capricorn crosses the south."
        ]
      },
      sections: [
        {
          heading: "Rivers and lakes",
          paragraphs: [
            "Africa's rivers are enormous. The River Nile flows north through Egypt to the Mediterranean Sea, and Ancient Egypt grew up along its banks. The River Niger loops through West Africa, passing through the countries of Niger and Nigeria. The River Congo drains the great forests of Central Africa. In the south, the River Zambezi flows past Zambia, Zimbabwe, Mozambique and Malawi, and plunges over Victoria Falls on the border between Zambia and Zimbabwe. Further south still are the River Limpopo and the River Orange.",
            "The lakes of East Africa are among the largest in the world. Lake Victoria is the biggest lake in Africa. Lake Tanganyika and Lake Nyasa are long, narrow and very deep. In the south-west, the Okavango River spreads out into the Okavango Delta, a huge wetland that the lesson's spelling list calls one of the wonders of the world.",
            "When you draw these on a map, name each one and get the direction right: the Nile flows north, towards the Mediterranean, not south. Use your textbook maps on pages 108 and 112 to check your work, as the lesson asked."
          ],
          worked: {
            q: "Write two sentences describing the physical landscape of Africa, using compass directions.",
            steps: [
              "Start in the north: the north of Africa is mainly desert, the Sahara.",
              "Say where the high land is: the highest mountains, including Kilimanjaro, are found towards the east and south.",
              "Say where the lowlands are: along the coasts and in the river basins, such as the Congo and Niger.",
              "Join the ideas into two clear sentences, each with a compass direction in it."
            ],
            answer: "The north of Africa is mainly hot desert, the Sahara, while the highest mountains, such as Kilimanjaro, are found towards the east and south. Lowlands lie along the coasts and in the great river basins of the Congo and the Niger."
          },
          tip: "A description with compass directions and named features scores; a description that only says big and hot does not."
        },
        {
          heading: "Mountains, deserts and seas",
          paragraphs: [
            "Mount Kilimanjaro, in Tanzania, is the highest mountain in Africa at 5896 metres. Tanzania's capital city is Dodoma. Kilimanjaro stands close to the Equator, yet its summit is covered in ice. The reason is height: the higher you go, the colder the air becomes, so the top of the mountain is cold enough for snow to fall and glaciers to form, even in the tropics. The Atlas Mountains run along the north of the continent, near the Mediterranean coast.",
            "The Sahara Desert covers most of North Africa. It is the largest hot desert in the world. Be careful with that word hot: the lesson's true-or-false quiz points out that the Sahara is not the largest desert of all, because the frozen polar lands count as deserts too. In the south-west lies a second, smaller desert, the Kalahari.",
            "Water surrounds the continent. The Mediterranean Sea lies to the north, the Atlantic Ocean to the west and the Indian Ocean to the east. The Red Sea separates Africa from Asia, joined to the Mediterranean by the Suez Canal, and opens into the Gulf of Aden. The large island of Madagascar lies off the south-east coast."
          ],
          tip: "Kilimanjaro has ice on top because of height, not because it is far from the Equator. Higher means colder."
        },
        {
          heading: "Lines of latitude and key terms",
          paragraphs: [
            "Three important lines of latitude cross Africa. The Equator, at 0 degrees, runs through the middle of the continent. The Tropic of Cancer, at 23.5 degrees north, crosses the Sahara. The Tropic of Capricorn, at 23.5 degrees south, crosses southern Africa. Almost the whole continent lies between the two tropics, which is why so much of it is hot.",
            "Your lesson asked you to match key terms to their meanings. Relief is the height and slope of the land. A gulf is a large bay that is an arm of an ocean or sea, like the Gulf of Aden. An island is land surrounded by water, like Madagascar. A desert is a large, dry region with little or no vegetation. A biome is a very large area with its own community of plants and animals, such as a desert or a tropical rainforest. Climate is the average temperature, rainfall and other weather of an area over many years."
          ],
          tip: "Learn the tropics as a pair: Cancer in the north, Capricorn in the south, both 23.5 degrees from the Equator."
        }
      ],
      gate: [
        { kind: "numeric", q: "Mount Kilimanjaro is the highest mountain in Africa. How high is it, in metres?", answer: 5896, tolerance: 0, units: "m", check: "KILI_M", why: "The lesson's progress check gives Mount Kilimanjaro as 5896 m, in Tanzania.",
          misconceptions: [
            { answer: 5869, says: "You have the right digits in the wrong order. Kilimanjaro is 5896 m high: five thousand, eight hundred and ninety-six.", check: "5869" },
            { answer: 5986, says: "The hundreds and tens have been swapped. Kilimanjaro is 5896 m: 5000, then 800, then 96.", check: "5986" }
          ] },
        { kind: "mcq", q: "Which is the biggest lake in Africa?", options: ["Lake Victoria", "Lake Tanganyika", "Lake Nyasa", "The Okavango Delta"], answer: 0, why: "Lake Victoria is Africa's biggest lake. Tanganyika and Nyasa are long and deep but smaller in area.",
          feedback: [
            "",
            "Lake Tanganyika is one of the long, deep lakes of East Africa, but it is not the biggest. Africa's biggest lake is Lake Victoria.",
            "Lake Nyasa is another long, deep East African lake, but the biggest lake in Africa is Lake Victoria.",
            "The Okavango is a delta, a wetland where a river spreads out, in the south-west. It is not a lake. Africa's biggest lake is Lake Victoria."
          ] },
        { kind: "gap", q: "The Sahara is the largest ___ desert in the world.", answer: "hot", options: ["hot", "cold", "wet"], why: "The Sahara is the largest hot desert. The quiz in your lesson says it is not the largest desert of all, because the frozen polar lands are deserts too.",
          feedback: {
            "cold": "The Sahara is anything but cold: it is a hot desert in North Africa. The largest cold deserts are the frozen polar lands. The word you need is hot.",
            "wet": "A desert is dry by definition, so a wet desert makes no sense. The Sahara is the largest hot desert in the world."
          } }
      ],
      modules: [
        {
          title: "Rivers and mountains: who is where?",
          task: {
            kind: "match",
            q: "Match each physical feature to its description.",
            pairs: [
              ["River Zambezi", "Flows past Zambia, Zimbabwe, Mozambique and Malawi, with Victoria Falls on it"],
              ["River Nile", "Flows north through Egypt to the Mediterranean Sea"],
              ["River Niger", "Passes through the countries of Niger and Nigeria in West Africa"],
              ["Mount Kilimanjaro", "Africa's highest mountain, in Tanzania, with ice on its summit"]
            ]
          },
          levels: {
            support: {
              steps: [
                "One of these is not a river. Find the mountain first.",
                "Two rivers share their name with a country: Niger with Niger, and Zambezi with Zambia. Use the name as a clue.",
                "Victoria Falls is in the south, so it belongs with the southern river.",
                "The river left over is the one that flows north through Egypt."
              ],
              example: {
                q: "Match: Lake Victoria, Sahara Desert. Choices: the largest hot desert in the world, in North Africa; the biggest lake in Africa, in East Africa.",
                steps: ["A lake is water; a desert is dry land.", "The Sahara is in the north; Lake Victoria is in the east."],
                answer: "Lake Victoria: the biggest lake in Africa, in East Africa. Sahara Desert: the largest hot desert in the world, in North Africa."
              }
            },
            core: { hint: "Use the names: Niger and Zambezi share letters with the countries they pass. Egypt gives away the Nile." },
            stretch: { extend: "Explain why the names of the River Niger, the country Niger and the country Nigeria are so easily confused, and give one way to keep them apart." }
          },
          explain: "Say, in one sentence, which direction the Nile flows and how you know.",
          why: "The Zambezi flows past Zambia, Zimbabwe, Mozambique and Malawi and over Victoria Falls; the Nile flows north through Egypt to the Mediterranean; the Niger passes through Niger and Nigeria; Kilimanjaro is the highest mountain, in Tanzania."
        },
        {
          title: "North to south across Africa",
          task: {
            kind: "order",
            q: "Put these in order from north to south, as you would meet them travelling down a map of Africa.",
            items: [
              "Mediterranean Sea, on Africa's north coast",
              "Tropic of Cancer, 23.5 degrees north",
              "Equator, 0 degrees",
              "Tropic of Capricorn, 23.5 degrees south"
            ]
          },
          contexts: [
            { label: "A long flight", q: "A plane flies from Europe straight down the length of Africa. Put the sea and the three lines of latitude it crosses in order, from north to south." },
            { label: "Drawing a map", q: "You are labelling a blank map of Africa from the top down. Put the Mediterranean Sea and the three lines of latitude in the order you would draw them, north to south." }
          ],
          levels: {
            support: {
              steps: [
                "North is the top of the map. The sea on the north coast comes first.",
                "The Equator is the middle line, at 0 degrees.",
                "The Tropic of Cancer is north of the Equator, so it comes before it.",
                "The Tropic of Capricorn is south of the Equator, so it comes last."
              ],
              example: {
                q: "Put in order from north to south: Sahara Desert, Kalahari Desert, Atlas Mountains.",
                steps: ["The Atlas Mountains are near the Mediterranean coast, in the far north.", "The Sahara is south of them, across North Africa.", "The Kalahari is in the south-west."],
                answer: "Atlas Mountains, Sahara Desert, Kalahari Desert."
              }
            },
            core: { hint: "Sea first, then north tropic, Equator, south tropic. Cancer is north; Capricorn is south." },
            stretch: { extend: "Explain why almost all of Africa is hot, using the positions of the two tropics in your answer." }
          },
          explain: "Say, in one sentence, how you remember which tropic is north and which is south.",
          why: "Travelling south you cross the Mediterranean coast, then the Tropic of Cancer at 23.5 degrees north, then the Equator at 0 degrees, then the Tropic of Capricorn at 23.5 degrees south."
        },
        {
          title: "Describe the physical landscape of Africa",
          task: {
            kind: "written",
            q: "Describe the physical landscape of Africa in a short paragraph. Use compass directions and name at least four physical features.",
            criteria: [
              "Uses at least three compass directions (north, south, east, west or combinations such as south-west)",
              "Names at least four physical features correctly (rivers, lakes, mountains, deserts or seas)",
              "Says where the desert is and where the highest land is",
              "Is written as a flowing paragraph, not a list"
            ],
            model: "The north of Africa is mostly covered by the Sahara, the largest hot desert in the world, with the Atlas Mountains near the Mediterranean coast. The River Nile flows north from the lakes of East Africa through Egypt. The highest land is in the east and south, where Mount Kilimanjaro rises to 5896 metres in Tanzania, and the long, deep lakes Tanganyika and Nyasa lie nearby. In the south the River Zambezi flows over Victoria Falls, and in the south-west the Kalahari Desert and the Okavango Delta are found. The large island of Madagascar lies off the south-east coast."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: the north. What covers it? Name the desert and the mountains there.",
                "Sentence 2: the east. Name the highest mountain and a lake.",
                "Sentence 3: the south and south-west. Name a river and a desert.",
                "Sentence 4: the coasts. Name a sea or an island.",
                "Read it back: at least three compass directions and four named features."
              ],
              example: {
                q: "Describe the physical landscape of the United Kingdom in two sentences, using compass directions.",
                steps: ["Say where the high land is.", "Say where the low, flat land is."],
                answer: "The highest land in the UK is in the north and west, in the mountains of Scotland and Wales. The south and east are lower and flatter, with wide river valleys."
              }
            },
            core: { hint: "Go round the compass: north (desert), east (mountain and lakes), south (river and falls), coasts (seas and an island)." },
            stretch: { extend: "Add a sentence explaining how the relief of East Africa might affect its climate and where people choose to live." }
          },
          explain: "Say, in one sentence, why a good description uses compass directions.",
          why: "A strong description moves round the map with compass directions, names real features (Sahara, Atlas, Nile, Kilimanjaro, Tanganyika, Zambezi, Kalahari, Madagascar) and says where the deserts and the high land are."
        }
      ]
    },

    /* ───────────── 3 · climate ───────────── */
    {
      key: "climate", n: 3, title: "Africa's climate",
      lead: "The difference between weather and climate, how to read a climate graph, how climate varies from the Sahara to South Africa, and what the rainfall means for people.",
      covers: [4],
      pretext: {
        words: [
          { word: "climate", means: "the usual weather of a place, averaged over many years", sentence: "Egypt has a hot, dry climate." },
          { word: "climate graph", means: "a graph showing monthly rainfall as bars and monthly temperature as a line", sentence: "The climate graph showed almost no rain all year." },
          { word: "rainfall", means: "the amount of rain that falls, measured in millimetres", sentence: "Total rainfall for the year was 831 mm." },
          { word: "temperature", means: "how hot or cold it is, measured in degrees Celsius", sentence: "The average temperature was 28 degrees Celsius." },
          { word: "biome", means: "a very large area with its own plants and animals", sentence: "The savanna is a biome of grassland with scattered trees." }
        ],
        passage: [
          "Weather is what the sky is doing today.",
          "Climate is the usual weather of a place over many years.",
          "Africa is so big that its climate is very different from place to place.",
          "A climate graph shows two things at once.",
          "Bars show how much rain falls in each month.",
          "A line shows the average temperature in each month.",
          "One place in your lesson has only 29 mm of rain in a whole year.",
          "Another has 1120 mm.",
          "Deserts are dry all year.",
          "Near the Equator it is hot and wet.",
          "Some places have a rainy season and a dry season.",
          "In Mali, most rain falls in August.",
          "In South Africa, August is colder than December.",
          "A biome is a large area with its own plants and animals, like a desert or a rainforest."
        ]
      },
      sections: [
        {
          heading: "Weather, climate and climate graphs",
          paragraphs: [
            "Weather is the condition of the air at one moment: sunny this morning, raining this afternoon. Climate is different. It is the average temperature, rainfall and other weather conditions of a place, worked out over many years. Weather changes by the hour; climate changes very slowly.",
            "Geographers show climate on a climate graph. The months run along the bottom. Bars show the rainfall in each month, read against the scale in millimetres on one side. A line shows the average temperature in each month, read against the scale in degrees Celsius on the other side. One graph tells you how wet and how warm a place is, and when.",
            "To find the total rainfall for the year, add up the twelve bars. To find the maximum and minimum monthly temperature, look for the highest and lowest points on the line. To find when the rainy season is, look for the tallest bars."
          ],
          worked: {
            q: "A desert climate graph shows 0 mm of rain for nine months of the year, then 10 mm, 12 mm and 7 mm in the other three. What is the total rainfall for the year?",
            steps: [
              "Total rainfall means add up every month.",
              "Nine months of 0 mm add nothing.",
              "Add the three wet months: 10 + 12 = 22, and 22 + 7 = 29.",
              "Give the units: 29 mm for the whole year, which is a true desert."
            ],
            answer: "29 mm",
            checks: [{ expr: "10+12+7", value: 29, tol: 0 }]
          },
          tip: "Bars are rain; the line is temperature. Rain comes down in bars, temperature goes up and down in a line."
        },
        {
          heading: "Four climates across one continent",
          paragraphs: [
            "Your lesson gave you four climate graphs from four African countries: Zimbabwe, Mali, Egypt and South Africa. Their yearly totals could hardly be more different. One place receives just 29 mm of rain in a whole year with an average temperature of 28 °C: a hot desert climate, dry in every month. Another receives 1120 mm with an average of 35 °C: very hot, with heavy rain in a wet season. The other two receive 509 mm with an average of 21 °C, and 831 mm with an average of 25 °C.",
            "Working out which graph belongs to which country is the skill the lesson teaches, and you do it with clues. Think about where each country is: the Sahara covers North Africa, so a desert graph belongs to a northern country. Think about the seasons: your lesson's quiz tells you that in Mali the most rain falls in August, so Mali's graph has its tallest bar in August.",
            "Think about the hemisphere too. South Africa lies south of the Equator, so its seasons are the opposite of ours: the lesson's quiz confirms that in South Africa, August is colder than December. On its graph the temperature line dips in the middle of the year. Use the climate map in your atlas, as the lesson asked, to confirm your matches."
          ],
          tip: "South of the Equator the seasons flip: June to August is winter in South Africa."
        },
        {
          heading: "Biomes, and what the rain means for people",
          paragraphs: [
            "A biome is a very large area with its own community of plants and animals. Africa has several. The Sahara and the Kalahari are hot desert biomes. Near the Equator, where it is hot and wet all year, there is tropical rainforest. Between the forest and the desert lies the savanna, a biome of grassland with scattered trees; the Serengeti in Tanzania is a famous savanna ecosystem.",
            "Rainfall totals matter to people. Where only 29 mm falls in a year, there is almost no water for farming, so very few people can live there. Where 1120 mm falls, crops can grow, but if most of it arrives in a few months there can be floods, and the long dry season that follows can bring water shortages. Climate helps to explain where Africa's people live, which is the subject of the next chapter."
          ],
          tip: "Too little rain means drought; a lot of rain in a short season can mean floods. Both are problems for farmers."
        }
      ],
      gate: [
        { kind: "mcq", q: "On a climate graph, what do the bars show?", options: ["Rainfall in each month", "Temperature in each month", "The height of the land", "The number of people"], answer: 0, why: "Bars show monthly rainfall in millimetres. The line shows the average monthly temperature.",
          feedback: [
            "",
            "Temperature is shown by the line, which goes up and down through the year. The bars show rainfall in each month.",
            "A climate graph does not show relief. The height of the land appears on a physical map. The bars show rainfall in each month.",
            "Population is shown on a population map, not a climate graph. The bars show rainfall in each month."
          ] },
        { kind: "numeric", q: "One of the lesson's climate graphs shows 1120 mm of rain in a year and another shows 29 mm. What is the difference between them, in mm?", answer: 1091, tolerance: 0, units: "mm", check: "RAIN_MAX-RAIN_MIN", why: "Difference means subtract: 1120 − 29 = 1091 mm.",
          misconceptions: [
            { answer: 1149, says: "You added the two totals. The difference between them is found by subtracting: 1120 − 29 = 1091 mm.", check: "RAIN_MAX+RAIN_MIN" },
            { answer: 1101, says: "Check the last digit. 1120 − 20 = 1100, and then you still have 9 more to take away: 1100 − 9 = 1091 mm.", check: "RAIN_MAX-19" }
          ] },
        { kind: "gap", q: "In South Africa, August is ___ than December.", answer: "colder", options: ["colder", "hotter", "wetter"], why: "South Africa is south of the Equator, so its winter is in the middle of the year. The lesson's quiz confirms August is colder than December there.",
          feedback: {
            "hotter": "That is true in the United Kingdom, which is north of the Equator. South Africa is south of it, so the seasons are the other way round and August is colder than December.",
            "wetter": "The quiz statement is about temperature, not rain. South Africa lies south of the Equator, so August is in its winter and is colder than December."
          } }
      ],
      modules: [
        {
          title: "Which climate is this?",
          task: {
            kind: "mcq",
            q: "A climate graph shows just 29 mm of rain in the whole year and an average temperature of 28 °C. Which kind of climate is this?",
            options: [
              "A hot desert climate",
              "A hot, wet climate near the Equator",
              "A cool, wet climate",
              "A climate with a long rainy season"
            ],
            answer: 0,
            feedback: [
              "",
              "Near the Equator it is hot and very wet, with well over 1000 mm of rain a year. A place with only 29 mm in a year is a desert.",
              "An average of 28 °C is hot, not cool, and 29 mm in a year is almost no rain at all. This is a hot desert climate.",
              "A rainy season would show tall bars for several months. Only 29 mm in a whole year means there is no real rainy season: this is a desert."
            ]
          },
          contexts: [
            { label: "A traveller's notes", q: "A traveller writes that in a whole year only 29 mm of rain fell, and the average temperature was 28 °C. Which kind of climate is she describing?" },
            { label: "A pupil's graph", q: "A pupil's climate graph has tiny bars adding up to 29 mm for the year, and a temperature line averaging 28 °C. Which kind of climate has the pupil drawn?" }
          ],
          levels: {
            support: {
              steps: [
                "Look at the rain first. Is 29 mm in a whole year a lot or almost nothing? It is almost nothing.",
                "Almost no rain in a year means a desert.",
                "Look at the temperature. 28 °C on average is hot.",
                "Hot and very dry: which option says that?"
              ],
              example: {
                q: "A climate graph shows 1120 mm of rain, mostly in a few months, and an average temperature of 35 °C. Which kind of climate is this?",
                steps: ["1120 mm is a lot of rain.", "If it falls in a few months, there is a wet season and a dry season.", "35 °C is very hot."],
                answer: "A very hot climate with a wet season and a dry season."
              }
            },
            core: { hint: "Decide wet or dry from the rainfall total, then hot or cool from the temperature." },
            stretch: { extend: "Explain how you could tell from the shape of a climate graph whether a place is north or south of the Equator." }
          },
          explain: "Say, in one sentence, which figure told you this was a desert.",
          why: "29 mm in a year is almost no rain, so the place is a desert, and an average of 28 °C makes it a hot desert. Equatorial climates are hot and wet; cool, wet climates are not 28 °C on average."
        },
        {
          title: "The temperature range between two places",
          task: {
            kind: "numeric",
            q: "The hottest of the lesson's four climate graphs has an average temperature of 35 °C and the coolest has 21 °C. How many degrees warmer is the hottest place than the coolest?",
            answer: 14, tolerance: 0, units: "°C",
            check: "TEMP_MAX-TEMP_MIN",
            why: "Warmer by how much means subtract: 35 − 21 = 14 °C.",
            misconceptions: [
              { answer: 56, says: "You added the two temperatures. To find how much warmer one place is, subtract: 35 − 21 = 14 °C.", check: "TEMP_MAX+TEMP_MIN" },
              { answer: 15, says: "You counted both 21 and 35 as steps. Counting from 21 up to 35 takes 14 steps: 35 − 21 = 14 °C.", check: "TEMP_MAX-TEMP_MIN+1" }
            ]
          },
          contexts: [
            { label: "Holiday brochure", q: "A brochure says one resort averages 35 °C and another averages 21 °C. How many degrees warmer is the first resort than the second?", check: "TEMP_MAX-TEMP_MIN" },
            { label: "Weather report", q: "A report gives an average of 35 °C for one city and 21 °C for another. By how many degrees is the first city warmer?", check: "TEMP_MAX-TEMP_MIN" }
          ],
          levels: {
            support: {
              steps: [
                "Find the two temperatures: 35 °C and 21 °C.",
                "Warmer by how much means find the difference, so subtract the smaller from the larger.",
                "35 − 21: take away 20 to get 15, then take away 1 more to get 14.",
                "Give the units: 14 °C."
              ],
              example: {
                q: "Two places have average temperatures of 28 °C and 25 °C. How many degrees warmer is the first?",
                steps: ["Subtract the smaller from the larger.", "28 − 25 = 3."],
                answer: "3 °C",
                checks: [{ expr: "TEMP_A-TEMP_D", value: 3, tol: 0 }]
              }
            },
            core: { hint: "Difference means subtract. Count up from 21 to 35 if that is easier." },
            stretch: { extend: "The 35 °C place has 1120 mm of rain and the 21 °C place has 509 mm. Suggest why the hotter place might still be the better one for growing crops." }
          },
          explain: "Say, in one sentence, why subtracting gives the right answer here.",
          why: "The difference between two temperatures is found by subtraction: 35 − 21 = 14, so the hottest place is 14 °C warmer than the coolest."
        },
        {
          title: "What rainfall means for people",
          task: {
            kind: "written",
            q: "One African country receives only 29 mm of rain a year; another receives 1120 mm, most of it in a few months. Explain one problem or benefit of each rainfall pattern for the people who live there.",
            criteria: [
              "Uses both rainfall figures correctly and says which is very dry and which is very wet",
              "Explains one problem or benefit of almost no rain, such as drought or not being able to farm",
              "Explains one problem or benefit of heavy rain in a short season, such as flooding or good harvests followed by a dry season",
              "Links each point to people, not just to the weather"
            ],
            model: "A place with only 29 mm of rain a year is a desert. There is almost no water for crops or animals, so farming is nearly impossible and very few people can live there. A place with 1120 mm has plenty of water, which is a benefit because crops can grow and harvests can be good. But because most of the rain falls in a few months, rivers can flood homes and fields in the wet season, and in the long dry season that follows people may run short of water."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: say that 29 mm is a desert amount of rain.",
                "Sentence 2: say what that means for farming and for the number of people who can live there.",
                "Sentence 3: say that 1120 mm is a lot of rain and name one benefit.",
                "Sentence 4: say what can go wrong when most of it falls in a few months."
              ],
              example: {
                q: "In two sentences, explain one problem for people living somewhere that gets 509 mm of rain, all of it in three months.",
                steps: ["Say what happens in the three wet months.", "Say what happens in the nine dry months."],
                answer: "When all 509 mm falls in three months, rivers can rise quickly and flood fields and roads. For the other nine months there is no rain, so people must store water or go without."
              }
            },
            core: { hint: "Too little rain: drought and no farming. Too much at once: floods, then a long dry season. Say what each does to people." },
            stretch: { extend: "Suggest two ways a country with a short rainy season could make its water last through the dry season." }
          },
          explain: "Say, in one sentence, why the timing of rain matters as much as the total.",
          why: "A good answer uses both figures, explains that 29 mm means drought and little farming, that 1120 mm allows good harvests but can bring floods when it falls in a few months, and keeps the focus on what this means for people."
        }
      ]
    },

    /* ───────────── 4 · people of Africa ───────────── */
    {
      key: "people-of-africa", n: 4, title: "Where people live: the human geography of Africa",
      lead: "Countries and capitals, how population is spread across the continent and why, how to present one country to visitors, and some of the many peoples of Africa.",
      covers: [5, 6, 10],
      pretext: {
        words: [
          { word: "population", means: "the people who live in a place", sentence: "The population of Nigeria is the largest in Africa." },
          { word: "population density", means: "how many people live in each square kilometre", sentence: "Population density is low in the Sahara Desert." },
          { word: "population distribution", means: "where people live and where they do not", sentence: "The map shows an uneven population distribution." },
          { word: "capital city", means: "the city where a country's government is based", sentence: "Abuja is the capital city of Nigeria." },
          { word: "culture", means: "the language, food, music, clothes and beliefs of a group of people", sentence: "Each people of Africa has its own culture." }
        ],
        passage: [
          "More than fifty countries make up Africa.",
          "Each country has a capital city.",
          "Abuja is the capital of Nigeria.",
          "Kinshasa is the capital of the Democratic Republic of Congo.",
          "Dodoma is the capital of Tanzania.",
          "Population means the people who live in a place.",
          "Population distribution is where people live.",
          "Population density is how many people live in each square kilometre.",
          "Few people live in the Sahara Desert, because it is so dry.",
          "Many people live in West Africa, near the coast.",
          "Africa's people belong to thousands of different groups.",
          "Each group has its own language, food, music and way of life.",
          "The Maasai live in Kenya and the Zulu live in South Africa."
        ]
      },
      sections: [
        {
          heading: "Countries and capitals",
          paragraphs: [
            "Africa's fifty-plus countries range from giants such as Algeria, Sudan and the Democratic Republic of Congo to tiny states such as Gambia, Djibouti, Rwanda, Burundi, Togo, Benin, Lesotho and Eswatini (which older maps, including the one in your lesson, call Swaziland). Madagascar is a large island country off the south-east coast. Niger is a country to the north of Nigeria, and the River Niger flows through both: three different things with almost the same name.",
            "Every country has a capital city, where its government is based. Abuja is the capital of Nigeria. Kinshasa is the capital and largest city of the Democratic Republic of Congo. Dodoma is the capital of Tanzania. Be careful with the famous cities: Johannesburg is the largest city in South Africa, nicknamed the city of gold, but it is not the capital, and Lagos is the biggest city in Nigeria but Abuja is the capital.",
            "Your lesson asked you to name as many countries and capitals as you could, using the map on page 108 of your textbook, and to draw three flags. Learning the spellings matters: the keyword test included Ethiopia, Egypt, Morocco, Djibouti, Guinea, Madagascar, Johannesburg, Kinshasa and Abuja."
          ],
          tip: "Capital does not mean biggest. Abuja, not Lagos; Dodoma, not the biggest Tanzanian city."
        },
        {
          heading: "Population: distribution and density",
          paragraphs: [
            "Population is the number of people living in a place. Population distribution is the spread of people across an area: where people live, and where they do not. Population density is the number of people living in a particular area, normally given per square kilometre (km²). On a population density map, the darker the colour, the more people live there.",
            "People are not spread evenly across Africa. Some places are densely populated and others are very sparsely populated. Population density is low in the deserts: the Sahara, in Algeria, Libya, Mali and Niger in north Africa, has very few people because it is so dry. The most densely populated areas are in west Africa, close to the seas and oceans: Nigeria, Ghana and Cameroon all border the Atlantic Ocean and have many people.",
            "The reason is the link between physical and human geography. Where there is water, fertile land and a coast for trade and fishing, people can farm, work and travel, so many people live there. Where there is no water, as in a hot desert, few can. In your lesson you explained population density using exactly this link, with the physical features map and the biomes map from your textbook."
          ],
          worked: {
            q: "A region has 300 000 people and an area of 1500 km². What is its population density?",
            steps: [
              "Population density is people divided by area.",
              "Write the division: 300 000 ÷ 1500.",
              "Simplify: 300 000 ÷ 1500 is the same as 3000 ÷ 15, which is 200.",
              "Give the units: 200 people per km²."
            ],
            answer: "200 people per km²",
            checks: [{ expr: "300000/1500", value: 200, tol: 0 }]
          },
          tip: "Density is always people per km²: divide people by area, never the other way round."
        },
        {
          heading: "Presenting a country: the museum stall",
          paragraphs: [
            "In the museum lesson, your class imagined that the British Museum's African archives had been destroyed by a burst pipe, and each group rebuilt one country's display. The seven countries were Sierra Leone, Kenya, South Africa, Nigeria, Egypt, Morocco and Ethiopia.",
            "A good stall answers the questions a geographer asks about any country. Location: a geographical description of where it is, using compass directions, neighbours and coasts. Population: how many people, and the population structure, meaning whether most are young or old, male or female. Life expectancy: how long people live on average. Wealth: the country's GDP. Culture: famous attractions and unique ways of life. Resources and trade: the main exports. Conflicts: any issues the country faces.",
            "The success criteria rewarded the same things any good geography does: information taken from real sources, in-depth understanding shown in an imaginative way, and a display that visitors could engage with. You will meet life expectancy and GDP again in the next chapter, where they become measures of development."
          ],
          tip: "Describe a location with three things: the continent and compass direction, the neighbours, and the sea or ocean it touches."
        },
        {
          heading: "The peoples of Africa",
          paragraphs: [
            "Africa is so big that thousands of different groups of people live there, in different areas and countries, each with its own culture: language, clothing, food, music and dance, beliefs and ways of life. Your lesson used the word tribe for these groups; many geographers today prefer to say peoples or ethnic groups, because tribe can sound as if the groups are small or old-fashioned, when some number tens of millions of people.",
            "The lesson named ten well-known peoples and the country each is mostly linked with: the Zulu and the Xhosa in South Africa, the Maasai and the Kalenjin in Kenya, the San in Botswana, the Yoruba in Nigeria, the Hausa in Niger (and Hausa is also one of the main languages of northern Nigeria), the Himba in Namibia, the Oromo in Ethiopia and the Chaga in Tanzania. Your research poster had to cover location, language, clothing, food, music, beliefs, links to other parts of the world, famous people and whether the group is growing or shrinking.",
            "Remember the perceptions lesson. A man in Maasai dress working at a wildlife park in California is not evidence about Kenya, and a photograph of one people's traditional clothing tells you nothing about how most people in that country dress every day."
          ],
          tip: "Learn the ten with a mnemonic, as the homework asked, but always pair each people with its country."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which city is the capital of Nigeria?", options: ["Abuja", "Lagos", "Kinshasa", "Johannesburg"], answer: 0, why: "Abuja is Nigeria's capital city. Lagos is its biggest city, but not the capital.",
          feedback: [
            "",
            "Lagos is the biggest city in Nigeria and one of the biggest in Africa, but the government is based in Abuja, which is the capital.",
            "Kinshasa is the capital of the Democratic Republic of Congo, a different country. Nigeria's capital is Abuja.",
            "Johannesburg is the largest city in South Africa, and not even that country's capital. Nigeria's capital is Abuja."
          ] },
        { kind: "gap", q: "Population ___ is the number of people living in each square kilometre.", answer: "density", options: ["density", "distribution", "structure"], why: "Density is people per km². Distribution is where people live; structure is the mix of ages and sexes.",
          feedback: {
            "distribution": "Population distribution is the spread of people across an area, where they live. The number of people in each square kilometre is population density.",
            "structure": "Population structure is the mix of young and old, male and female, in a population. The number of people in each square kilometre is population density."
          } },
        { kind: "mcq", q: "Where is population density lowest in Africa?", options: ["In the Sahara Desert in the north", "On the coast of West Africa", "Around Lagos in Nigeria", "In Ghana and Cameroon"], answer: 0, why: "The Sahara, in Algeria, Libya, Mali and Niger, is too dry for farming, so very few people live there.",
          feedback: [
            "",
            "The coast of West Africa is one of the most densely populated parts of Africa, with water, fertile land and sea trade. The emptiest area is the Sahara Desert in the north.",
            "Lagos is a huge city, so its population density is very high. The lowest density is in the Sahara Desert in the north.",
            "Ghana and Cameroon are on the Atlantic coast of West Africa, where density is high. The lowest density is in the Sahara Desert in the north."
          ] }
      ],
      modules: [
        {
          title: "Working out population density",
          task: {
            kind: "numeric",
            q: "A country has 24 million people and an area of 240 000 km². What is its population density, in people per km²?",
            answer: 100, tolerance: 0, units: "people per km²",
            check: "24000000/240000",
            why: "Density is people divided by area: 24 000 000 ÷ 240 000 = 100 people per km².",
            misconceptions: [
              { answer: 0.01, says: "You divided the area by the people. Population density is people divided by area: 24 000 000 ÷ 240 000 = 100 people per km².", check: "240000/24000000" },
              { answer: 10, says: "A zero has gone missing. 24 million is 24 000 000, and 24 000 000 ÷ 240 000 = 100, not 10.", check: "2400000/240000" }
            ]
          },
          contexts: [
            { label: "A region", q: "A region of Africa has 24 million people living in 240 000 km². How many people are there per km²?", check: "24000000/240000" },
            { label: "An island", q: "An island has a population of 24 million and covers 240 000 km². What is its population density, in people per km²?", check: "24000000/240000" }
          ],
          levels: {
            support: {
              steps: [
                "Write 24 million as a number: 24 000 000.",
                "Population density is people divided by area, so write 24 000 000 ÷ 240 000.",
                "Cancel zeros: knock four zeros off each number to get 2400 ÷ 24.",
                "2400 ÷ 24 = 100. The answer is 100 people per km²."
              ],
              example: {
                q: "A city has 3 million people and an area of 1000 km². What is its population density?",
                steps: ["People divided by area: 3 000 000 ÷ 1000.", "Knock three zeros off each: 3000 ÷ 1 = 3000."],
                answer: "3000 people per km²",
                checks: [{ expr: "3000000/1000", value: 3000, tol: 0 }]
              }
            },
            core: { hint: "People divided by area. Cancel the zeros before you divide." },
            stretch: { extend: "A country with the same area has a density of 4 people per km². How many people live there, and what kind of landscape might explain such a low figure?" }
          },
          explain: "Say, in one sentence, what the number 100 tells you about this country.",
          why: "Density is people per unit of area. 24 000 000 people ÷ 240 000 km² = 100 people living in each square kilometre, on average."
        },
        {
          title: "Why is Africa's population so uneven?",
          task: {
            kind: "written",
            q: "Explain why population density is low in the Sahara Desert but high on the coast of West Africa. Name two countries for each area.",
            criteria: [
              "Names two countries in the Sahara (from Algeria, Libya, Mali, Niger) and two on the West African coast (from Nigeria, Ghana, Cameroon)",
              "Gives a physical reason for low density in the desert, such as very little rain and no water for farming",
              "Gives at least one reason for high density on the coast, such as water, fertile land, fishing or trade across the Atlantic",
              "Uses compass directions and the words density and distribution correctly"
            ],
            model: "Population density is low in the north of Africa, in the Sahara Desert, which covers parts of Algeria, Libya, Mali and Niger. The desert receives almost no rain, so there is no water for crops or animals and very few people can live there. Population density is high in west Africa, close to the seas and oceans, in countries such as Nigeria, Ghana and Cameroon, which border the Atlantic Ocean. There is enough rain to farm, the land near the rivers is fertile, and the coast allows fishing and trade, so many people live there. The population distribution follows the water."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: say where density is low, with two country names.",
                "Sentence 2: give the physical reason: a desert has almost no rain, so no farming.",
                "Sentence 3: say where density is high, with two country names and the ocean they border.",
                "Sentence 4: give the reasons: rain, fertile land, fishing and trade.",
                "Last sentence: sum up with the word distribution."
              ],
              example: {
                q: "In two sentences, explain why few people live high in a mountain range but many live in the river valley below it.",
                steps: ["Say what makes the mountains hard to live in.", "Say what the valley offers."],
                answer: "High in the mountains it is cold, steep and hard to farm or build, so few people live there. The valley below has flat, fertile land and a river for water, so many people live there."
              }
            },
            core: { hint: "Desert in the north: no water, so few people. Coast in the west: water, farmland and trade, so many people. Two countries each." },
            stretch: { extend: "Explain one other place in Africa where you would expect high population density, using the physical features map, and justify your choice." }
          },
          explain: "Say, in one sentence, what links where people live to physical geography.",
          why: "A strong answer names Algeria, Libya, Mali or Niger for the Sahara and Nigeria, Ghana or Cameroon for the coast, explains that lack of water keeps density low in the desert, and that rain, fertile land, fishing and trade make the Atlantic coast crowded."
        },
        {
          title: "Peoples and their countries",
          task: {
            kind: "match",
            q: "Match each people of Africa to the country your lesson linked it with.",
            pairs: [
              ["Maasai", "Kenya"],
              ["Zulu", "South Africa"],
              ["Yoruba", "Nigeria"],
              ["Oromo", "Ethiopia"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Use your mnemonic from the homework to recall the list of ten.",
                "The Zulu and the Xhosa are both from the far south of the continent.",
                "The Maasai and the Kalenjin share a country in East Africa.",
                "The Yoruba live in West Africa's most populous country; the Oromo live in the Horn of Africa."
              ],
              example: {
                q: "Match: Himba, Chaga. Choices: Tanzania; Namibia.",
                steps: ["The Himba live in the south-west of Africa, in Namibia.", "The Chaga live near Kilimanjaro, in Tanzania."],
                answer: "Himba: Namibia. Chaga: Tanzania."
              }
            },
            core: { hint: "South, east, west, Horn of Africa: one people for each. Which country is in each place?" },
            stretch: { extend: "Explain why saying the Maasai live in Kenya is only part of the story, and why a photograph of traditional dress tells you little about everyday life in that country." }
          },
          explain: "Say, in one sentence, why geographers often say peoples rather than tribes.",
          why: "The lesson linked the Maasai with Kenya, the Zulu with South Africa, the Yoruba with Nigeria and the Oromo with Ethiopia. Each is a large people with its own language and culture inside a country shared with many others."
        }
      ]
    },

    /* ───────────── 5 · Africa in the wider world ───────────── */
    {
      key: "wider-world", n: 5, title: "Africa in the wider world: development and globalisation",
      lead: "How development is measured, what HIC, LIC and NEE mean, why there is a development gap and why it grows, what globalisation is, and what your phone has to do with the Congo.",
      covers: [7, 11],
      pretext: {
        words: [
          { word: "development", means: "how rich or poor a country is, and how good life is for its people", sentence: "Development improves health, education and jobs." },
          { word: "HIC", means: "a high income country, a rich country", sentence: "The United Kingdom and Japan are HICs." },
          { word: "LIC", means: "a low income country, a poor country", sentence: "Ethiopia and Somalia are LICs." },
          { word: "NEE", means: "a newly emerging economy, a country getting richer fast", sentence: "Nigeria, South Africa and India are NEEs." },
          { word: "development gap", means: "the difference between the richest and poorest countries", sentence: "Debt can make the development gap bigger." },
          { word: "globalisation", means: "the way the world is becoming more connected through trade, travel and communication", sentence: "Globalisation means a phone designed in one country is built in another." }
        ],
        passage: [
          "Development is a measure of how rich or poor a country is.",
          "It is also about health, education and quality of life.",
          "Life expectancy is how long people live, on average.",
          "GDP is how much money a country makes.",
          "Rich countries are called HICs, high income countries.",
          "Poor countries are called LICs, low income countries.",
          "Countries getting richer fast are NEEs, newly emerging economies.",
          "Nigeria and South Africa are NEEs.",
          "The development gap is the difference between the richest and poorest countries.",
          "Debt, corruption and natural hazards can make the gap bigger.",
          "Globalisation means the world is becoming more connected.",
          "We trade, travel and share ideas across the world more easily than before.",
          "The metal coltan from the Congo is used in mobile phones."
        ]
      },
      sections: [
        {
          heading: "Measuring development",
          paragraphs: [
            "Development is a measure of how rich or poor a country is. As a country develops, the standard of living and quality of life of its people improve. Geographers measure development with indicators. Gross Domestic Product (GDP) totals the money a country makes in a year, so it tells you roughly what people there earn. Life expectancy is the average age people reach. Infant mortality counts the babies and small children who die. Calorie consumption shows whether people have enough to eat. The adult literacy rate is the share of grown-ups who can read and write. Counting the doctors for every 1000 people shows how good medical care is. Standard of living sums up people's overall wellbeing. Your lesson suggested others too, such as safety and the right to vote.",
            "Using these measures, countries are sorted into groups. HIC means high income country: the rich countries, such as the United Kingdom, Germany, the USA, Japan, Canada, Australia and New Zealand. LIC means low income country: the poorest countries, such as Somalia, Ethiopia, Angola and the Democratic Republic of Congo. The older names were MEDC (more economically developed country) for an HIC and LEDC (less economically developed country) for an LIC; you may still see them.",
            "Some countries are neither. NEE means newly emerging economy: a country whose industry and wealth are growing fast, such as Nigeria, South Africa, Brazil, India, Mexico and China. Many African countries are LICs, but Nigeria and South Africa are NEEs, and this is one reason you should never treat Africa as one place."
          ],
          worked: {
            q: "Sort these three countries into HIC, LIC and NEE: Japan, Ethiopia, Brazil.",
            steps: [
              "Ask of each country: is it rich, poor, or getting richer fast?",
              "Japan is one of the world's richest countries: HIC.",
              "Ethiopia is one of the poorest: LIC.",
              "Brazil has fast-growing industry and cities but also many poor people: NEE."
            ],
            answer: "Japan: HIC. Ethiopia: LIC. Brazil: NEE."
          },
          tip: "MEDC is the old name for HIC and LEDC is the old name for LIC. NEE sits in between."
        },
        {
          heading: "The development gap, and why it grows",
          paragraphs: [
            "The development gap is the difference between the world's richest countries (HICs) and poorest countries (LICs). It can also mean the difference between rich and poor groups inside one country. Lagos, the biggest city in Nigeria and one of the largest in Africa, shows both sides: gleaming towers on Victoria Island and crowded, poor neighbourhoods close by.",
            "Your lesson gave three reasons why the gap gets bigger. Debt: poorer countries borrow large sums from rich countries to build industry and infrastructure, but the interest charged is so high that they end up owing more than they borrowed. Corruption: some of the borrowed money or aid goes missing, so the poor never see the benefit and the gap inside the country widens too. Natural hazards: droughts and famines hit LICs harder; aid often arrives for the emergency and then stops, leaving the country to pay for the long clean-up.",
            "The lesson's card sort grouped the reasons into four kinds. Historical reasons are to do with the past, such as having been a colony or having had millions of people taken away and enslaved. Environmental reasons are to do with the natural surroundings and climate, such as yearly floods, disease spread by a warm damp climate, or mountains that make transport hard. Economic reasons are to do with money, such as interest on loans or the price of a crop like coffee collapsing. Social reasons are to do with people, such as too few schools or a war that stops businesses investing."
          ],
          tip: "When you explain the development gap, give the reason and then say which type it is: historical, environmental, economic or social."
        },
        {
          heading: "Globalisation",
          paragraphs: [
            "People say we live in a shrinking world. They do not mean the Earth is getting smaller; they mean that places feel closer together. Globalisation is the process by which the world is becoming more and more interconnected: we communicate, trade, travel and share each other's cultures more easily than ever before. A football match is watched on every continent, a brand name is recognised everywhere, and a television series made in one country is copied in a dozen others.",
            "Your lesson identified four factors that drive globalisation. ICT, information and communication technology, lets people talk and do business instantly across the world. Increased trade means goods are bought and sold between countries more than ever. Transport developments, such as container ships and cheap flights, move goods and people quickly. Transnational corporations (TNCs) are companies that operate in many countries at once, designing a product in one place, making it in another and selling it everywhere.",
            "Globalisation has advantages and disadvantages, and it affects almost everyone. Your own life is global: where your parents were born, where your clothes were made, the music you listen to and the companies your family works for all connect you to other countries. The journey of a mobile phone, from the minerals in it to the shop where it is sold, crosses many borders."
          ],
          tip: "Four causes of globalisation: ICT, trade, transport, TNCs. All four start with the idea of things moving faster and further."
        },
        {
          heading: "Your phone and the Congo",
          paragraphs: [
            "Inside almost every mobile phone is a metal made from a mineral called coltan (columbite-tantalite). Much of the world's coltan is mined in the Democratic Republic of Congo, in Central Africa, at mines such as Fungamwaka. This is globalisation at its sharpest: a phone used in London depends on a mine thousands of kilometres away, and what happens at that mine is shaped by the demand for phones.",
            "Your lesson asked you to sort seven impacts into social, economic and environmental. The social impacts are the gravest. The Congo is still recovering from civil war in which millions of people died, mostly from starvation and disease; fighting has been fuelled by the country's coltan wealth, as armed groups try to control the supplies and use the money to pay for their militias, so the chance of peace shrinks. The economic impact falls on ordinary families: farmers can no longer grow food where mining has taken the land, and must look for other food and other work. The environmental impacts are on the forest: land is cleared to make mining easier, the natural habitat is destroyed, and gorillas are killed for meat or driven out when their forest disappears.",
            "Geographers do not use this to make anyone feel guilty for owning a phone. They use it to show that the choices of people, companies and governments in one place have real effects on people, animals and forests in another, and that knowing where things come from is the first step to changing how they are made."
          ],
          tip: "Social is about people and communities; economic is about money and jobs; environmental is about land, water, plants and animals."
        }
      ],
      gate: [
        { kind: "mcq", q: "Nigeria has fast-growing industry and cities, but also many poor people. Which group does the lesson place it in?", options: ["NEE: a newly emerging economy", "HIC: a high income country", "LIC: a low income country", "A country with no development at all"], answer: 0, why: "Nigeria is an NEE, a newly emerging economy, along with South Africa, Brazil, India, Mexico and China.",
          feedback: [
            "",
            "HICs are the richest countries, such as the United Kingdom and Japan. Nigeria is getting richer fast but is not yet in that group: it is an NEE.",
            "LICs are the poorest countries, such as Somalia and Ethiopia. Nigeria has growing industry and big cities, so the lesson places it in between, as an NEE.",
            "Every country has some development; the question is how much. Nigeria's growing industry and cities make it an NEE, a newly emerging economy."
          ] },
        { kind: "gap", q: "The development ___ is the difference between the world's richest and poorest countries.", answer: "gap", options: ["gap", "indicator", "goal"], why: "The development gap is the difference between HICs and LICs, or between rich and poor within one country.",
          feedback: {
            "indicator": "An indicator is a single measure of development, such as life expectancy or GDP. The difference between the richest and poorest countries is the development gap.",
            "goal": "A goal is a target you aim for. The difference between the richest and poorest countries is called the development gap."
          } },
        { kind: "mcq", q: "Which of these is a cause of globalisation?", options: ["Cheaper transport and better ICT", "Countries trading less with each other", "Fewer companies working across borders", "Slower ships and aeroplanes"], answer: 0, why: "The lesson's four factors are ICT, increased trade, transport developments and transnational corporations: all make the world more connected.",
          feedback: [
            "",
            "Less trade would make countries less connected, the opposite of globalisation. Increased trade is one of the lesson's four causes.",
            "Transnational corporations, companies working in many countries, are a cause of globalisation. Fewer of them would slow it down.",
            "Slower transport would push places further apart. Transport developments, faster and cheaper ships and planes, are a cause of globalisation."
          ] }
      ],
      modules: [
        {
          title: "What each measure of development tells you",
          task: {
            kind: "match",
            q: "Match each measure of development to what it tells you.",
            pairs: [
              ["Life expectancy", "How long people live, on average"],
              ["Gross Domestic Product (GDP)", "How much money a country makes, and so how much people earn"],
              ["Infant mortality", "How many children die young"],
              ["Adult literacy rate", "How many adults can read and write"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Take the words apart. Life expectancy: how long you can expect to live.",
                "Infant means baby or young child; mortality means death.",
                "Literacy means reading and writing.",
                "The one left, GDP, is about money."
              ],
              example: {
                q: "Match: calorie consumption, doctors per 1000 people. Choices: how good medical care is; how much people get to eat.",
                steps: ["Calories are in food, so calorie consumption is about eating.", "Doctors are about medical care."],
                answer: "Calorie consumption: how much people get to eat. Doctors per 1000 people: how good medical care is."
              }
            },
            core: { hint: "Three are about people's lives and health; one is about money." },
            stretch: { extend: "Explain why GDP on its own can hide a big development gap inside a country, using Lagos as your example." }
          },
          explain: "Say, in one sentence, why geographers use more than one measure of development.",
          why: "Life expectancy is how long people live; GDP is how much money a country makes; infant mortality is how many children die young; adult literacy is how many adults can read and write. Together they give a fuller picture than money alone."
        },
        {
          title: "Social, economic or environmental?",
          task: {
            kind: "match",
            q: "Sort each impact of coltan mining in the Congo into the type of impact it is.",
            pairs: [
              ["Land is cleared to make mining easier and the natural habitat is destroyed", "Environmental"],
              ["Farmers can no longer grow food on mined land and must look for other food and work", "Economic"],
              ["Armed groups fight to control the coltan, and the money pays for their militias", "Social"]
            ]
          },
          contexts: [
            { label: "A new mine", q: "A new coltan mine has opened in the forest. Sort each of these impacts into the type of impact it is." },
            { label: "A news report", q: "A news report describes three effects of mining for phone minerals in the Congo. Sort each into the type of impact it is." }
          ],
          levels: {
            support: {
              steps: [
                "Environmental means land, water, plants and animals. Which impact is about the forest?",
                "Economic means money, jobs and making a living. Which impact is about losing a livelihood?",
                "Social means people, communities and safety. Which impact is about fighting?",
                "Check each one by asking: who or what is harmed?"
              ],
              example: {
                q: "Sort: gorillas are killed for meat or leave because their habitat has gone; millions of people have died in the civil war, mostly through starvation and disease.",
                steps: ["Gorillas and habitat are the natural world: environmental.", "People dying in a war is about people and communities: social."],
                answer: "Gorillas and habitat: environmental. Deaths in the civil war: social."
              }
            },
            core: { hint: "Forest and animals: environmental. Jobs and food to sell: economic. People, fighting and communities: social." },
            stretch: { extend: "One of the lesson's impacts, that the chance to make money reduces the chance of peace, was labelled both economic and social. Explain why it fits both." }
          },
          explain: "Say, in one sentence, how you decide whether an impact is social, economic or environmental.",
          why: "Clearing land and destroying habitat harms the natural world: environmental. Farmers losing their land and livelihood is about money and work: economic. Fighting over the coltan and funding militias is about people and communities: social."
        },
        {
          title: "Why does the development gap get bigger?",
          task: {
            kind: "written",
            q: "Explain two reasons why the development gap between rich and poor countries gets bigger. For each reason, say what type it is: historical, environmental, economic or social.",
            criteria: [
              "Gives two different reasons from the lesson (debt, corruption, natural hazards, colonial past, few schools, war, falling crop prices)",
              "Explains how each reason makes the gap bigger, not just names it",
              "Labels each reason correctly as historical, environmental, economic or social",
              "Uses the terms HIC, LIC or development gap correctly"
            ],
            model: "One reason the development gap grows is debt, an economic reason. LICs borrow large sums from HICs to build industry and roads, but the interest is so high that they end up owing more than they borrowed, so money that could pay for schools and hospitals goes on repayments. A second reason is natural hazards, an environmental reason. Droughts and famines are more common in LICs and affect millions of people; aid arrives for the emergency but often stops before the expensive clean-up, so the country falls further behind while HICs carry on growing."
          },
          levels: {
            support: {
              steps: [
                "Pick two reasons from the lesson: for example debt and natural hazards.",
                "For each, write one sentence saying what happens.",
                "Then write one sentence saying why that makes the poor country poorer compared with rich countries.",
                "Finish each reason with its type: economic, environmental, historical or social."
              ],
              example: {
                q: "In two sentences, explain how having too few schools can widen the development gap, and say what type of reason it is.",
                steps: ["Say what too few schools means for people.", "Say why that holds the country back, and label the type."],
                answer: "With too few schools, people cannot learn the skills the country needs, so there are fewer teachers, doctors and engineers. The country cannot develop its industry as fast as richer countries, so the gap widens; this is a social reason."
              }
            },
            core: { hint: "Reason, how it works, why it widens the gap, type. Twice." },
            stretch: { extend: "Explain how one historical reason, colonisation, might still be affecting a country's development today." }
          },
          explain: "Say, in one sentence, why a loan can leave a country poorer than before.",
          why: "A strong answer picks two reasons, explains the chain of cause and effect for each, labels them correctly (debt is economic, hazards are environmental, colonial history is historical, war and schools are social) and uses the words HIC, LIC and development gap."
        }
      ]
    },

    /* ───────────── 6 · colonisation ───────────── */
    {
      key: "colonisation", n: 6, title: "The colonisation of Africa",
      lead: "Africa's long history before Europeans arrived, how European countries divided the continent between 1850 and 1914, who ruled where, the impacts of colonial rule, and why straight lines on the map still matter.",
      covers: [8, 9],
      pretext: {
        words: [
          { word: "colonialism", means: "taking control of another country, settling people there and using its resources for your own benefit", sentence: "European colonialism changed the map of Africa." },
          { word: "colony", means: "a country ruled by another, more powerful country", sentence: "Kenya was a British colony." },
          { word: "independence", means: "when a country governs itself", sentence: "Most African countries won independence in the twentieth century." },
          { word: "exploit", means: "to make use of a people, place or thing for your own benefit", sentence: "Colonial powers exploited Africa's gold and ivory." },
          { word: "border", means: "the line where one country ends and another begins", sentence: "Many African borders are straight lines drawn in Europe." }
        ],
        passage: [
          "Africa has a long history.",
          "The earliest humans lived in East Africa, in what is now Ethiopia.",
          "Ancient Egypt grew up along the River Nile.",
          "The Mali Empire and the Kingdom of Kongo were rich trading states.",
          "In the 1800s, European countries began to take control of Africa.",
          "This is called colonialism.",
          "A colony is a country ruled by another country.",
          "By 1914, almost all of Africa was ruled from Europe.",
          "Only Ethiopia and Liberia stayed independent.",
          "Britain and France took the most land.",
          "Europeans wanted Africa's gold, ivory and other resources.",
          "They drew straight borders on the map that cut through peoples.",
          "In the twentieth century, African countries became independent.",
          "Independence means a country governs itself."
        ]
      },
      sections: [
        {
          heading: "Africa before the colonisers",
          paragraphs: [
            "Your lesson began by asking what link we all share with Africa. The answer is that the first humans appeared there: the lesson dates the earliest human species to around 2 million years ago in present-day Ethiopia. Africa has a long and rich history. Ancient Egypt was based around the River Nile. Later, the Mali Empire in West Africa and the Kingdom of Kongo in Central Africa grew wealthy on trade in ivory, metals such as gold, and, tragically, enslaved people.",
            "From the fifteenth century onwards, Europeans arrived on Africa's coasts. Over the following centuries, during the Atlantic slave trade, millions of Africans were taken across the ocean by Europeans and enslaved. Your textbook (pages 102 and 103) gives the figures and the dates; the lesson asked you to find a fact for the fifteenth century, the nineteenth century, the year 1884 and the year 1914.",
            "The important idea is that Africa was not empty or silent before Europeans came. It had empires, cities, trade routes and thousands of peoples with their own languages and ways of life, and some of those peoples you met in the last chapter."
          ],
          tip: "Say enslaved people. People were enslaved; it is something that was done to them, not what they were."
        },
        {
          heading: "The scramble for Africa: 1850 to 1914",
          paragraphs: [
            "Colonialism means taking control of another country: sending your own settlers to live there, and running its land and its resources for the benefit of your own country. To exploit means to make use of a people, place or thing for your own benefit. The opposite of colonialism is independence: when a country governs itself.",
            "Your lesson showed three maps. Before 1850, most of Africa was ruled by Africans. By around 1900, almost the whole continent had been divided between European powers. By 1914 the process was complete: the lesson's quiz says that in 1913 only 3% of Africa was independent. Just two countries kept their independence throughout: Ethiopia and Liberia. The United Kingdom and France were the two biggest colonisers, taking about two-thirds of Africa between them. Portugal, Spain, Germany, Belgium and Italy took the rest.",
            "Why did European countries do this? The lesson's answer is economic. They wanted Africa's natural resources, such as ivory and gold, and they wanted people to enslave and to work for them, so that they could trade more and grow richer. Britain, which colonised much of Africa between the 1870s and the 1900s, also colonised land in Asia, Oceania, North America and South America."
          ],
          worked: {
            q: "In 1913 only 3% of Africa was independent. What percentage of the continent was ruled by European countries?",
            steps: [
              "The whole continent is 100%.",
              "The part that was independent was 3%.",
              "The rest was colonised: 100% − 3% = 97%.",
              "Check: 97% + 3% = 100%."
            ],
            answer: "97%",
            checks: [{ expr: "100-INDEP_1913_PCT", value: 97, tol: 0 }]
          },
          tip: "Three maps, three dates: before 1850 (African rule), around 1900 (European rule), today (independent countries)."
        },
        {
          heading: "Who ruled where, and straight lines on the map",
          paragraphs: [
            "The lesson's answer map lists the colonies by European power. Britain ruled Gambia, Egypt, Sudan, Botswana, Kenya, South Africa, northern Somalia, Uganda, Malawi, Ghana, Zimbabwe, Lesotho, Eswatini and Nigeria, among others. France ruled most of West and North-West Africa, including Algeria, Mali, Mauritania, Niger, Chad, Senegal, Ivory Coast, Burkina Faso, Benin and Cameroon, as well as the island of Madagascar. Belgium ruled the Democratic Republic of Congo. Portugal ruled Angola, Mozambique and Guinea-Bissau. Germany ruled Namibia and Togo, and Tanzania until the First World War. Italy ruled Libya, Somalia and Eritrea, and Spain ruled Equatorial Guinea and Western Sahara. Ethiopia and Liberia stayed independent.",
            "Look at a map of Africa today and you will see borders that are perfectly straight, as if drawn with a ruler. They were. European leaders drew the lines in Europe, often without ever visiting the land, and the lines cut straight through the territories of African peoples. Forcing different ethnic, cultural and religious groups together inside one border, and splitting others between two countries, has created tension, clashes and conflict that continue today.",
            "The lesson's straight-line question is a good one to practise: which countries have borders that look drawn with a ruler, and why are there so many? The legacy of colonial rule is also visible in language and religion: French is widely spoken in the countries France ruled, and English in those Britain ruled."
          ],
          tip: "Straight border, European ruler. The line was drawn for the convenience of the colonisers, not the people living there."
        },
        {
          heading: "The impacts of colonialism",
          paragraphs: [
            "Your lesson asked you to sort cards describing the impacts of colonialism into negatives and positives, and then into SEEP categories: social, economic, environmental and political. Most of the cards were negative. Colonial governments took much of the land from Africans for mining and for large farms; Europeans took the best land and called it their own, with Belgium and Britain mainly responsible, for example British settlers in Kenya and South Africa. Africans were used as cheap labour on farms and in mines, in horrible conditions that often included physical punishment, for very low wages. The European countries gave little money to their colonies and instead raised taxes on Africans. After the two world wars, when fewer workers were available, Africans were forced to work, moved away from their home towns and families, mostly men sent to mines and farms, which broke up families and traditions.",
            "Three cards described things the colonisers introduced: Western medicine, which helped the African population to grow; formal education; and missionaries who brought Christianity and ran schools and health care. These changes were real, but they were brought on the colonisers' terms, and they do not cancel the loss of land, freedom and lives. Your lesson's reflection asked whether colonialism brought any benefits; a careful geographer weighs the evidence on both sides and reaches a judgement, rather than assuming either that everything was bad or that the benefits made up for the harm.",
            "African countries wanted independence because they wanted to govern their own land and their own people and decide their own laws. In the twentieth century they won it, and the map changed for a third time, into the Africa of more than fifty countries you have studied in this unit."
          ],
          tip: "SEEP: social (people), economic (money), environmental (land and nature), political (power and government)."
        }
      ],
      gate: [
        { kind: "gap", q: "Taking control of another country, settling people there and using its resources for your own benefit is called ___.", answer: "colonialism", options: ["colonialism", "independence", "globalisation"], why: "That is the lesson's definition of colonialism. Independence is its opposite; globalisation is the world becoming more connected.",
          feedback: {
            "independence": "Independence is the opposite: it is when a country governs itself. Taking control of another country and using its resources is colonialism.",
            "globalisation": "Globalisation is the process of the world becoming more connected through trade, travel and communication. Taking control of another country is colonialism."
          } },
        { kind: "mcq", q: "Which two African countries were still independent in 1914?", options: ["Ethiopia and Liberia", "Nigeria and Kenya", "Egypt and Algeria", "Ghana and Senegal"], answer: 0, why: "The lesson's map shows every African country under European rule except Ethiopia and Liberia.",
          feedback: [
            "",
            "Nigeria and Kenya were both British colonies in 1914. The two countries that stayed independent were Ethiopia and Liberia.",
            "Egypt was ruled by Britain and Algeria by France in 1914. The two countries that stayed independent were Ethiopia and Liberia.",
            "Ghana was a British colony and Senegal a French one in 1914. The two countries that stayed independent were Ethiopia and Liberia."
          ] },
        { kind: "numeric", q: "In 1913, only 3% of Africa was independent. What percentage of the continent was ruled by European countries?", answer: 97, tolerance: 0, units: "%", check: "100-INDEP_1913_PCT", why: "100% − 3% = 97% of Africa was colonised by 1913.",
          misconceptions: [
            { answer: 3, says: "3% is the part that was independent. The question asks for the part ruled by Europeans, which is the rest: 100 − 3 = 97%.", check: "INDEP_1913_PCT" },
            { answer: 103, says: "You added 3 to 100, but a continent cannot be more than 100%. Take the 3% away from 100% to get 97%.", check: "100+INDEP_1913_PCT" }
          ] }
      ],
      modules: [
        {
          title: "Who ruled where?",
          task: {
            kind: "match",
            q: "Match each European power to the African colonies it ruled, according to your lesson's map.",
            pairs: [
              ["Britain", "Kenya, Nigeria, Ghana and South Africa"],
              ["France", "Algeria, Mali, Niger and Senegal"],
              ["Belgium", "The Democratic Republic of Congo"],
              ["Portugal", "Angola and Mozambique"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the power that had just one colony on the list: Belgium.",
                "France took most of West and North-West Africa. Which group of countries is in the north-west?",
                "Britain's colonies are spread out, from West Africa to the far south.",
                "The pair of countries left over, on opposite coasts of southern Africa, were Portuguese."
              ],
              example: {
                q: "Match: Italy, Spain. Choices: Equatorial Guinea and Western Sahara; Libya, Somalia and Eritrea.",
                steps: ["Italy ruled Libya on the Mediterranean and Somalia and Eritrea in the Horn of Africa.", "Spain ruled the two smaller territories."],
                answer: "Italy: Libya, Somalia and Eritrea. Spain: Equatorial Guinea and Western Sahara."
              }
            },
            core: { hint: "Belgium had one huge colony in the centre. France took the north-west. Portugal had two on the southern coasts. Britain had the rest on the list." },
            stretch: { extend: "Using the languages spoken in these countries today, explain one way the colonial past is still visible." }
          },
          explain: "Say, in one sentence, why so many West African countries speak French today.",
          why: "Britain ruled Kenya, Nigeria, Ghana and South Africa; France ruled Algeria, Mali, Niger and Senegal; Belgium ruled the Democratic Republic of Congo; Portugal ruled Angola and Mozambique."
        },
        {
          title: "Africa's story in order",
          task: {
            kind: "order",
            q: "Put these events in the history of Africa in the correct order, earliest first.",
            items: [
              "The earliest humans live in East Africa, in what is now Ethiopia",
              "Ancient Egypt grows up along the River Nile",
              "The Mali Empire and the Kingdom of Kongo grow rich on trade in ivory and gold",
              "By 1914, European countries have colonised almost all of Africa",
              "African countries win their independence in the twentieth century"
            ]
          },
          contexts: [
            { label: "A museum timeline", q: "A museum is building a timeline of Africa for its new gallery. Put these events in the correct order, earliest first." },
            { label: "Your revision notes", q: "You are making a revision timeline for the end-of-unit test. Put these five events in the correct order, earliest first." }
          ],
          levels: {
            support: {
              steps: [
                "Humans had to exist before anything else could happen, so the earliest humans come first.",
                "Ancient Egypt is one of the oldest civilisations in the world, so it comes next.",
                "The Mali Empire and the Kingdom of Kongo were trading long before Europeans took control.",
                "Colonisation came before independence, because a country can only win independence after being ruled by someone else."
              ],
              example: {
                q: "Put in order, earliest first: Africa around 1900, divided between European powers; Africa today, independent countries; Africa before 1850, ruled by Africans.",
                steps: ["Before 1850 is the earliest date.", "Around 1900 comes next.", "Today is last."],
                answer: "Africa before 1850; Africa around 1900; Africa today."
              }
            },
            core: { hint: "People, then Egypt, then the trading empires, then European rule, then independence." },
            stretch: { extend: "Explain why the order matters: what does it tell you about the claim that Africa had no history before Europeans arrived?" }
          },
          explain: "Say, in one sentence, why independence must come after colonisation in the sequence.",
          why: "The earliest humans came first, then Ancient Egypt on the Nile, then the trading empires of Mali and Kongo, then European colonisation complete by 1914, and finally independence in the twentieth century."
        },
        {
          title: "Weighing the impacts of colonialism",
          task: {
            kind: "written",
            q: "Explain two negative impacts of colonial rule on African people and one change that the colonial powers introduced. Then explain why the borders drawn by European countries still cause problems today.",
            criteria: [
              "Explains two negative impacts from the lesson (land taken, cheap or forced labour, higher taxes, families broken up) and says who was affected",
              "Describes one change the colonisers introduced (medicine, formal education, missionary schools and health care) without claiming it made up for the harm",
              "Explains that straight borders were drawn in Europe and cut through ethnic, cultural and religious groups",
              "Links the borders to conflict or tension today, and uses the words colonialism and independence correctly"
            ],
            model: "Colonialism harmed African people in many ways. Colonial governments took much of the best land for mines and large farms, so African families lost the land they had farmed for generations. Africans were then used as cheap labour on those farms and mines, with low wages and harsh punishment, and after the world wars many men were forced to work far from home, which broke up families. The colonisers also introduced Western medicine and formal education, which helped the population grow and some children to go to school, but these came on the colonisers' terms and do not cancel out the loss of land and freedom. The borders are a lasting problem because they were drawn in Europe as straight lines that cut through the homelands of different ethnic, cultural and religious groups. When countries won independence they kept these borders, so groups who had never shared a government were forced together and others were split, which has caused tension and conflict ever since."
          },
          levels: {
            support: {
              steps: [
                "Sentences 1 and 2: choose two negative impacts from the cards and say who was harmed and how.",
                "Sentence 3: name one thing the colonisers introduced, and add a sentence saying why it does not make up for the harm.",
                "Sentence 4: say how the borders were drawn and what they cut through.",
                "Sentence 5: say what that means for people today."
              ],
              example: {
                q: "In two sentences, explain one impact of colonial rule in Kenya and one reason Kenyans wanted independence.",
                steps: ["Say what the British did with the land in Kenya.", "Say what Kenyans wanted to control for themselves."],
                answer: "In Kenya, British settlers took the best farmland and called it their own, leaving Kenyan farmers without land. Kenyans wanted independence so that they could govern their own land and people and make their own laws."
              }
            },
            core: { hint: "Two harms with who was affected; one introduction with a but; borders drawn in Europe; what that means now." },
            stretch: { extend: "The lesson asked whether colonialism was a wholly bad thing or brought some benefits. Write your own judgement in three sentences, using evidence from the cards on both sides." }
          },
          explain: "Say, in one sentence, why a straight line on a map can cause a conflict a hundred years later.",
          why: "A strong answer names two harms (land, labour, taxes, broken families) and who suffered them, describes one introduction without treating it as a balance, explains that ruler-straight borders drawn in Europe cut through peoples, and links that to tension and conflict after independence."
        }
      ]
    }
  ],

  sources: {
    deckDump: "gg_y07_unit_2_africa.txt",
    decksUsed: ["Introduction andPhysical geography of Africa.pptx", "Nigeria in the wider world and globalisation.pptx", "Tribes in Africa.pptx", "Year 07__Unit 2 - Africa__Africa in the wider world and development.pptx", "Year 07__Unit 2 - Africa__The European colonisation of Africa.pptx"],
    notes: "Lesson titles, sequence, key words, definitions and every place name and figure come from the five department decks only (Introduction and Physical geography slides 3-105; Globalisation slides 1-26; Tribes slides 1-13, the two duplicate copies Tribes in Africa1.pptx and Tribes in Africa2.pptx being identical; Development slides 1-31; Colonisation slides 1-39). House furniture (seating plans, dated title slides, homework and Kerboodle slides, the Prior Learning/Components sheet, brain breaks, the end-of-topic test instructions) was used only to fix the lesson sequence. Answer slides (Introduction 4, 12, 52, 63-66, 88, 92; Globalisation 20; Development 8, 14, 26; Colonisation 23, 36, 38) were read to see what the deck teaches; none is reproduced and verify.py bans their distinctive phrases. Where the deck only points to textbook pages (geog.1 pages 102-103, 108-114, 118-131) or to videos, the manifest teaches only what the slides themselves state and tells the pupil to use their class notes; see NOTES.md. Every number is held in the FACTS table in verify.py and recomputed. The pupil-facing text says peoples rather than tribes except in the department's own lesson title, and enslaved people rather than the deck's noun. No pretext.l1 (translation is a separate pass) and no meta.constellation. No text is quoted from any source."
  }
};
