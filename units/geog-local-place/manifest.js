// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 Geography · Year 7 Unit 1 · My Local Place and the World (foundations for AQA GCSE Geography 8035) · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression; the FACTS names held in verify.py are allowed) and are recomputed.
//   worked examples / support examples with a calculation carry `checks:[{expr, value, tol}]`.
//   every "order" task is compared with the canonical sequences held in verify.py (the department deck's own sequences).
//   every mcq / gap / match answer is compared with the independent answer key held in verify.py.
//   every fact with a number (the census years, the five population figures, the 100 small squares, the deck's grid references,
//   the OS scales, the map dates, the Crossrail cost, the city populations) is checked against the independent FACTS table.
//   passage sentences are counted (≤ 20 words) and all text is linted for known misconceptions, deck errors and copyright fingerprints.
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions`; every module carries
//   `explain`; ≥ 1 module per chapter carries `contexts` that never redefine the answer; `connections` ⊂ glossary;
//   meta.constellation is omitted (the engine lays the stars out); no pretext.l1 (translation is a separate pass).
// Maps and grids are described in words; no widget exists for them.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["geog-local-place"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "geog-local-place",
    subjectKey: "geography",
    subject: "Geography",
    board: "AQA",
    spec: "KS3 → 8035",
    specRef: "KS3 Year 7 Unit 1: My Local Place and the World — what geography is, four- and six-figure grid references, Hayes and how places change, map scale and contours, the United Kingdom, latitude and longitude, London over time. Foundations for AQA GCSE Geography 8035 geographical skills (3.4) and Paper 3 fieldwork",
    year: 7,
    tier: "KS3",
    title: "My Local Place and the World",
    sub: "From the room you are sitting in to the whole globe: what geographers do, how to find any place on a map, what makes Hayes the place it is, and where the UK sits in the world.",
    bigQuestion: "What makes a place, how do we find and describe it on a map, and how does my local place connect to the rest of the world?",
    lessonCount: 10,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  // The department's four decks (WK1and2_Introduction, WK3_How can find our way round the sch, WK4and5_WHAT IS MY LOCAL TOWN
  // FAMOUS FOR, Week6_The United kingdom_yr7), in teaching order. Titles are the decks' own slide titles or learning objectives;
  // questions are those objectives rephrased. See NOTES.md section 2 for the slide ranges.
  lessons: [
    { n: 1, title: "What is geography all about? Who is a geographer?", question: "What does a geographer study, what questions do they ask, and what are the SEE factors?", keywords: ["geographer", "SEE analysis", "social", "economic", "environmental", "continents", "oceans"] },
    { n: 2, title: "What is geography? The three types of geography", question: "What is the difference between human, physical and environmental geography?", keywords: ["human geography", "physical geography", "environmental geography", "landforms", "pollution"] },
    { n: 3, title: "How can we find our way round the school? Four-figure grid references", question: "How do four-figure grid references help us find a square on a map, and which number comes first?", keywords: ["grid reference", "four-figure", "grid square", "along the corridor", "up the stairs"] },
    { n: 4, title: "Six-figure grid references, compass points and OS symbols", question: "How does dividing a square into 100 give a more accurate grid reference, and how do we read symbols and directions?", keywords: ["six-figure", "100 small squares", "OS symbols", "compass points", "north-west"] },
    { n: 5, title: "What is my local town famous for? Hayes, before and after", question: "Where is Hayes, how has it changed since the early 1900s, and what are the impacts of Crossrail?", keywords: ["Hayes", "Hillingdon", "census", "population", "Heathrow", "Crossrail", "Elizabeth line"] },
    { n: 6, title: "How do we use maps to tell local history?", question: "How do blue plaques, time capsules and old maps tell us about the history of a place?", keywords: ["blue plaque", "time capsule", "old maps", "contour lines", "local history"] },
    { n: 7, title: "Map scale and compass directions", question: "What is scale, how do stated, linear and ratio scales work, and how do we give compass directions?", keywords: ["scale", "stated scale", "linear scale", "ratio scale", "compass rose", "Never Eat Shredded Wheat"] },
    { n: 8, title: "What is the rest of the United Kingdom like?", question: "What are the countries, capitals, landmarks and main features of the UK, and how is it governed?", keywords: ["British Isles", "Great Britain", "United Kingdom", "capital cities", "landmarks", "population"] },
    { n: 9, title: "Map skills: latitude and longitude", question: "What are lines of latitude and longitude, and how are they used to give an exact location?", keywords: ["latitude", "longitude", "equator", "Greenwich Meridian", "degrees", "north", "south", "east", "west"] },
    { n: 10, title: "How has London changed over time?", question: "How has London grown over time, and what does London mean to different people?", keywords: ["London", "1677", "1843", "Firstspace", "Secondspace", "Thirdspace", "perception"] }
  ],

  // 16 terms; Connections uses all 16 (four groups, each one chapter's idea). Chapters 2 and 5 teach their key words
  // through pretext.words and the text instead (grid-reference words, UK words).
  glossary: [
    { term: "geographer", means: "Someone who investigates the world: where places are, what they are like, why, and how they are changing.", chapter: "what-is-geography" },
    { term: "human geography", means: "The study of where and how people live: towns, jobs, transport and the way of life.", chapter: "what-is-geography" },
    { term: "physical geography", means: "The study of natural features and events, such as landforms, rivers, weather and earthquakes.", chapter: "what-is-geography" },
    { term: "environmental geography", means: "Where human and physical geography link together, for example pollution and global warming.", chapter: "what-is-geography" },
    { term: "census", means: "An official count of everyone in the country, taken every ten years since 1801 (apart from 1941).", chapter: "hayes" },
    { term: "blue plaque", means: "A round sign on a building showing where a famous person lived or a famous event happened.", chapter: "hayes" },
    { term: "time capsule", means: "A container of everyday objects that is sealed and opened at a date far in the future.", chapter: "hayes" },
    { term: "Elizabeth line", means: "The name of the Crossrail railway, running from Reading and Heathrow through Hayes to Shenfield and Abbey Wood.", chapter: "hayes" },
    { term: "scale", means: "The link between a distance on a map and the real distance on the ground.", chapter: "map-scale" },
    { term: "ratio scale", means: "A scale written as two numbers, such as 1:50 000, meaning one unit on the map is 50 000 of the same unit on the ground.", chapter: "map-scale" },
    { term: "contour line", means: "A brown line on an OS map joining places of the same height above sea level.", chapter: "map-scale" },
    { term: "compass rose", means: "The diagram on a map that shows north, east, south and west, and the points between them.", chapter: "map-scale" },
    { term: "latitude", means: "Imaginary lines drawn parallel around the globe that tell you how far north or south you are.", chapter: "world" },
    { term: "longitude", means: "Imaginary lines running from the North Pole to the South Pole that tell you how far east or west you are.", chapter: "world" },
    { term: "equator", means: "The line of 0 degrees latitude, halfway between the North and South Poles.", chapter: "world" },
    { term: "Greenwich Meridian", means: "The line of 0 degrees longitude, which passes through Greenwich in London.", chapter: "world" }
  ],

  connections: [
    { group: "Kinds of geography", terms: ["geographer", "human geography", "physical geography", "environmental geography"] },
    { group: "Telling the story of a place", terms: ["census", "blue plaque", "time capsule", "Elizabeth line"] },
    { group: "Reading an OS map", terms: ["scale", "ratio scale", "contour line", "compass rose"] },
    { group: "Lines around the globe", terms: ["latitude", "longitude", "equator", "Greenwich Meridian"] }
  ],

  chapters: [
    /* ───────────── 1 · what geography is ───────────── */
    {
      key: "what-is-geography", n: 1, title: "What geography is, and who a geographer is",
      lead: "What geographers study, the three types of geography, the questions a geographer asks about any place, and the continents and oceans you will need all year.",
      covers: [1, 2],
      pretext: {
        words: [
          { word: "geographer", means: "a person who investigates places and the world", sentence: "A geographer asks where a place is and why it is like that." },
          { word: "human geography", means: "the study of where and how people live", sentence: "Cities, roads and airports are human geography." },
          { word: "physical geography", means: "the study of natural features and events", sentence: "Rivers, mountains and earthquakes are physical geography." },
          { word: "environmental geography", means: "where people and nature affect each other", sentence: "Pollution in a river is environmental geography." },
          { word: "continent", means: "one of the seven huge areas of land on Earth", sentence: "Asia is the largest continent." },
          { word: "ocean", means: "one of the huge areas of salt water that cover most of the Earth", sentence: "The Atlantic Ocean lies west of the UK." }
        ],
        passage: [
          "Geography is the study of the world we live in.",
          "It looks at landscapes, people, places and environments.",
          "A geographer asks where a place is and what it is like.",
          "Then they ask why it is like that and how it is changing.",
          "There are three types of geography.",
          "Human geography is about where and how people live.",
          "Physical geography is about natural features and events, like rivers and weather.",
          "Environmental geography is where human and physical geography link together.",
          "Pollution and global warming are environmental geography.",
          "Geographers also think about social, economic and environmental factors.",
          "We call this SEE analysis.",
          "The world has seven continents and five oceans.",
          "You will need their names all year."
        ]
      },
      sections: [
        {
          heading: "The study of the world we live in",
          paragraphs: [
            "You already did geography at primary school. You may have learnt the continents and oceans, the four capital cities of the UK, and the four compass directions. All of that is geography. Put simply, geography is the study of the world we live in: its landscapes, its people, its places and its environments. In your first lesson you wrote a definition like that in your book.",
            "Geography joins up with every other subject on your timetable. History asks what a place used to be like; geography asks what it is like now and why. Maths gives you graphs, data and grid references. Art gives you maps and field sketches. English gives you descriptions, explanations and arguments. Science shares the study of the Earth. Even PE counts: have you ever climbed a mountain or measured a river?",
            "So what makes a good geographer? The deck gives three things. A good geographer investigates and understands the world around them. They build locational knowledge, which means knowing where places are. And they ask questions, then use a wide range of geographical data to investigate places. Keep those three in mind: investigate, locate, question."
          ],
          tip: "When someone asks what geography is, give the short answer first: the study of the world we live in. Then add an example."
        },
        {
          heading: "Three types of geography",
          paragraphs: [
            "Geographers sort their subject into three types. Human geography is about where and how people live: cities, roads, railways, schools, shops and jobs. Physical geography is about natural features and natural events: rivers, mountains, rain, earthquakes, volcanoes and the seaside. Environmental geography is where the two are linked together: the effect people have on the natural world, and the effect it has on us. Pollution, litter, waste and global warming are all environmental geography.",
            "Some things fit more than one type. In class you sorted twenty pictures. Roads, cities, buildings and schools were human. Rain, rivers, mountains, earthquakes and volcanoes were physical. Pollution, waste, litter and global warming were environmental. An airport was both human and environmental, because people build it and its noise and fumes affect the environment. Trees and grass were both physical and environmental.",
            "Try the odd-one-out game from the deck. River, mountain, school: the school is the odd one out, because it is human and the other two are physical. Sewage, dirty beach, house: the house is the odd one out, because it is human, while the other two are people harming the natural world, which is environmental. If you can say which type each word belongs to, and why, you have understood the idea."
          ],
          worked: {
            q: "Is an earthquake human, physical or environmental geography? Explain your answer in one sentence.",
            steps: [
              "Ask: is it made by people, made by nature, or about how people and nature affect each other?",
              "An earthquake is a natural event. Nobody builds one.",
              "So it is physical geography.",
              "If the question asked about the damage an earthquake does to a city, that would bring people in, and you could argue for human geography too. Always answer the question that was asked."
            ],
            answer: "Physical geography, because an earthquake is a natural event, not something made by people."
          },
          tip: "Ask one question: is it people, nature, or people and nature together? That gives you human, physical or environmental."
        },
        {
          heading: "A geographer asks questions",
          paragraphs: [
            "Geographers investigate places by asking questions. The deck gives six, and you used them on a photograph of the Fjallsjokull glacier in Iceland. Where is this place? What is it like? Why is it like this? How is it changing? Who is affected by the changes? How do I feel about it? Ask those six about any photograph, any town or any country and you have started a geographical enquiry.",
            "Geographers also look at three kinds of factor in every place. Social factors are about people and their way of life. Economic factors are about money and ways to earn money through working, such as businesses and jobs. Environmental factors are about the land, the air and everything that affects them. Together these are called SEE analysis: Social, Economic, Environmental. You will meet SEE in every unit from now until GCSE.",
            "Geography is happening every minute of the day. Your homework asked you to find a news report and explain why it is geographical. A flood, a new railway, a factory closing, a heatwave: each one is a story about a place, and each one can be sorted as human, physical or environmental and as social, economic or environmental."
          ],
          tip: "SEE: Social is people, Economic is money and jobs, Environmental is land and air. Learn the three words in that order."
        },
        {
          heading: "Continents and oceans",
          paragraphs: [
            "A geographer needs to know where places are. Start with the biggest pieces. The world has seven continents: North America, South America, Europe, Asia, Africa, Australasia (also called Oceania) and Antarctica. On the satellite image you labelled in class, Europe and Asia are joined together in one huge piece of land, but geographers count them as two continents.",
            "Between the continents are the oceans. The deck's satellite image labelled four: the Atlantic Ocean, the Pacific Ocean, the Indian Ocean and the Southern Ocean around Antarctica. At primary school you learnt five oceans; the fifth is the Arctic Ocean, around the North Pole at the very top of the globe. The UK sits on the eastern edge of the Atlantic Ocean, off the north-west coast of Europe.",
            "Learn these names now. Later in this unit you will use latitude and longitude to find countries on the globe, and you will need to know which continent each country is in."
          ],
          worked: {
            q: "On the deck's satellite image, numbers 1 to 11 label the continents and oceans. How many of the eleven labels are oceans?",
            steps: [
              "There are seven continents, so seven labels are continents.",
              "11 − 7 = 4.",
              "Four labels are oceans: Atlantic, Pacific, Indian and Southern.",
              "Check: the image does not label the Arctic Ocean, which is why you learnt five oceans at primary school but counted four here."
            ],
            answer: "4 oceans (Atlantic, Pacific, Indian, Southern).",
            checks: [{ expr: "LABELS-CONTINENTS", value: 4, tol: 0 }]
          },
          tip: "Seven continents, five oceans. If a map shows only four oceans, the missing one is almost always the Arctic."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is an example of physical geography?", options: ["A volcano erupting", "A new motorway", "Litter on a beach", "A shopping centre"], answer: 0, why: "A volcano is a natural event, so it is physical geography. The motorway and shopping centre are built by people (human); litter is people affecting nature (environmental).",
          feedback: [
            "",
            "A motorway is built by people, so it is human geography. Physical geography is about natural features and events, such as a volcano.",
            "Litter is people harming the natural world, so it is environmental geography. Physical geography is about nature itself, such as a volcano erupting.",
            "A shopping centre is built and used by people: human geography. The natural event in the list is the volcano."
          ] },
        { kind: "gap", q: "Environmental geography is where human and ___ geography are linked together.", answer: "physical", options: ["physical", "economic", "local"], why: "Environmental geography links people (human) with nature (physical), for example pollution of a river.",
          feedback: {
            "economic": "Economic is one of the SEE factors, about money and jobs. The three types of geography are human, physical and environmental, and environmental links human with physical.",
            "local": "Local describes a place near you, not a type of geography. Environmental geography is where human geography and physical geography meet."
          } },
        { kind: "numeric", q: "How many continents are there in the world?", answer: 7, tolerance: 0, units: "", check: "CONTINENTS", why: "Seven: North America, South America, Europe, Asia, Africa, Australasia (Oceania) and Antarctica.",
          misconceptions: [
            { answer: 5, says: "Five is the number of oceans. There are seven continents: North America, South America, Europe, Asia, Africa, Australasia and Antarctica.", check: "OCEANS" },
            { answer: 6, says: "You may have counted Europe and Asia as one, or forgotten Antarctica. Geographers count seven continents.", check: "CONTINENTS-1" },
            { answer: 11, says: "Eleven is the number of labels on the satellite image: seven continents and four oceans. Continents alone are seven.", check: "LABELS" }
          ] }
      ],
      modules: [
        {
          title: "Three types of geography",
          task: {
            kind: "match",
            q: "Match each type of geography, and SEE analysis, to what it means.",
            pairs: [
              ["Human geography", "Where and how people live"],
              ["Physical geography", "Natural features and events, such as landforms and weather"],
              ["Environmental geography", "Human and physical geography linked together, such as pollution"],
              ["SEE analysis", "Looking at the social, economic and environmental factors of a place"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Human means people. Find the meaning that is about people.",
                "Physical means nature. Find the meaning that is about natural features.",
                "Environmental is the one where people and nature are linked.",
                "SEE is made of three words: Social, Economic, Environmental. Find the meaning that lists three factors."
              ],
              example: {
                q: "Match: desert, school. Choices: a natural, very dry landscape; a building where people learn.",
                steps: ["A desert is natural, so it is a natural landscape: physical.", "A school is built and used by people, and the deck sorted School as human."],
                answer: "Desert: a natural, very dry landscape (physical). School: a building where people learn (human)."
              }
            },
            core: { hint: "People, nature, people-and-nature, and the three factors. Which meaning fits which?" },
            stretch: { extend: "An airport was sorted as both human and environmental in class. Explain why, and give one more example that fits two types." }
          },
          explain: "Say, in one sentence, how environmental geography is different from the other two types.",
          why: "Human geography is about people; physical geography is about nature; environmental geography is where the two link, such as pollution. SEE analysis looks at a place through social, economic and environmental factors."
        },
        {
          title: "Which SEE factor?",
          task: {
            kind: "mcq",
            q: "A new factory opens in a town and gives jobs to 300 people. Which SEE factor does this describe?",
            options: ["Economic", "Social", "Environmental", "Physical"],
            answer: 0,
            feedback: [
              "",
              "Social factors are about people and their way of life, such as health, housing and community. Jobs and money are economic factors.",
              "Environmental factors are about the land and air, such as pollution from the factory. Jobs are about earning money, so they are economic.",
              "Physical is one of the three types of geography, not one of the SEE factors. The factors are Social, Economic and Environmental; jobs are economic."
            ]
          },
          contexts: [
            { label: "New shop", q: "A new supermarket opens in Hayes and 300 local people get work there. Which SEE factor does this describe?" },
            { label: "Railway jobs", q: "Building a new railway line creates 300 jobs for engineers and builders. Which SEE factor does this describe?" },
            { label: "Farm", q: "A farm starts selling its vegetables to 300 restaurants and earns much more money. Which SEE factor does this describe?" }
          ],
          explain: "Say, in one sentence, how you can tell an economic factor from a social one.",
          levels: {
            support: {
              steps: [
                "SEE stands for Social, Economic, Environmental.",
                "Social is people and their way of life. Economic is money and ways to earn money through working. Environmental is land and air.",
                "Jobs are a way to earn money.",
                "So this is the economic factor."
              ],
              example: {
                q: "Smoke from a power station makes the air in a town dirty. Which SEE factor is this?",
                steps: ["Dirty air is about the environment, the air around us.", "So it is an environmental factor."],
                answer: "Environmental, because it is about the air and the land."
              }
            },
            core: { hint: "Which of the three factors is about money and work?" },
            stretch: { extend: "The same factory also makes the air dirtier and brings new families to the town. Write one sentence for each SEE factor about this factory." }
          },
          why: "Economic factors are about money and ways to earn money through working, such as business and jobs. Three hundred new jobs is an economic change."
        },
        {
          title: "The geographer's questions, in order",
          task: {
            kind: "order",
            q: "Put the six geographical enquiry questions into the order the deck gives them, starting with the question about location.",
            items: [
              "Where is this place?",
              "What is it like?",
              "Why is it like this?",
              "How is it changing?",
              "Who is affected by the changes?",
              "How do I feel about it?"
            ]
          },
          contexts: [
            { label: "Glacier photo", q: "You are given a photograph of the Fjallsjokull glacier in Iceland. Put the six enquiry questions you would ask about it into the deck's order, starting with location." },
            { label: "Local park", q: "You are investigating a park near your school. Put the six geographical enquiry questions into the deck's order, starting with where it is." }
          ],
          explain: "Say, in one sentence, why the questions start with where before they ask why.",
          levels: {
            support: {
              steps: [
                "Start by finding the place: where is it?",
                "Then describe it: what is it like?",
                "Then explain it: why is it like this?",
                "Then look at change: how is it changing, and who is affected by the changes?",
                "Finish with your own view: how do I feel about it?"
              ],
              example: {
                q: "Put these three questions about a river in a sensible order: Why does it flood? Where is the river? How do I feel about the flooding?",
                steps: ["Find it first: Where is the river?", "Explain next: Why does it flood?", "Your own view comes last: How do I feel about the flooding?"],
                answer: "Where is the river? Why does it flood? How do I feel about the flooding?"
              }
            },
            core: { hint: "Where, what, why, how changing, who, how I feel. Location first, your opinion last." },
            stretch: { extend: "Choose a place you know well and write one sentence answering each of the six questions about it." }
          },
          why: "The deck's order moves from finding the place (where) to describing it (what), explaining it (why), looking at change (how, who) and finally your own view (how do I feel)."
        }
      ]
    },

    /* ───────────── 2 · grid references ───────────── */
    {
      key: "grid-references", n: 2, title: "Finding our way: four- and six-figure grid references",
      lead: "Why maps have numbered grid lines, how to read a four-figure reference along the corridor and up the stairs, how six figures pin a point down to one hundredth of a square, and how to read symbols and compass points.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "grid reference", means: "the numbers that name a square or a point on a map", sentence: "The grid reference of the school hall is 0665." },
          { word: "grid square", means: "one of the squares made by the lines on a map", sentence: "The church is in grid square 1324." },
          { word: "eastings", means: "the numbered lines that run up the map and are read along the bottom", sentence: "Read the eastings first, along the corridor." },
          { word: "northings", means: "the numbered lines that run across the map and are read up the side", sentence: "Then read the northings, up the stairs." },
          { word: "symbol", means: "a small picture on a map that stands for a real thing", sentence: "The symbol for a school on an OS map is Sch." },
          { word: "key", means: "the list that tells you what each map symbol means", sentence: "Check the key if you do not know a symbol." }
        ],
        passage: [
          "Maps can cover hundreds of miles.",
          "Grid references let us find a specific place quickly.",
          "The lines on a map make squares.",
          "Each line has a two-digit number.",
          "The rule is: do the bottom numbers first, then the numbers up the side.",
          "Along the corridor, then up the stairs.",
          "A four-figure grid reference names one square.",
          "You read the line to the left of the square, then the line below it.",
          "A six-figure grid reference names one point inside a square.",
          "Each square is divided into 100 small squares.",
          "You count tenths across, then tenths up.",
          "The extra number goes after each pair.",
          "So 028 014 means 2 across, 8 tenths more, then 1 up, 4 tenths more."
        ]
      },
      sections: [
        {
          heading: "Why do we use grid references?",
          paragraphs: [
            "Imagine telling a friend where to find a bench in a huge park. You could say near the big tree, but there are hundreds of trees. A map has the same problem: it can cover hundreds of miles, so pointing is no use. Grid references solve it. The map is covered by numbered lines that make squares, and every square has its own code. Grid references allow us to find a specific place on a map quite quickly, by narrowing down the area we need to look in.",
            "On an Ordnance Survey (OS) map, the lines are blue and each one carries a two-digit number. The lines that run up and down the map have their numbers along the bottom (and top) edge; these are the eastings, because their numbers get bigger as you go east. The lines that run across the map have their numbers up the side; these are the northings, because their numbers get bigger as you go north. In class you practised on a grid of the school, with eastings 07 to 14 and northings 20 to 25."
          ],
          tip: "Eastings go east (along), northings go north (up). The names tell you the direction the numbers grow."
        },
        {
          heading: "Four-figure grid references: along the corridor and up the stairs",
          paragraphs: [
            "A four-figure grid reference names one whole square. The rule is that you do the bottom numbers first and the numbers up the side second. The deck's way of remembering it is along the corridor and then up the stairs. First find the line on the left-hand side of your square and read its number from the bottom edge. Then find the line along the bottom of your square and read its number from the side. Write the two numbers together, with no gap.",
            "Take the square whose left-hand line is 08 and whose bottom line is 21. Along the corridor gives 08; up the stairs gives 21; the grid reference is 0821. The square to the right of it is 0921, and the square above it is 0822. Notice that the reference always names the bottom-left corner of the square. Everything inside that square shares the same four-figure reference.",
            "The most common mistake is to read the numbers the wrong way round. 0821 and 2108 are different squares, and on a real map 2108 may be miles away or not on the sheet at all. The second most common mistake is to read the line on the right of the square instead of the left. Always use the corner nearest the bottom left."
          ],
          worked: {
            q: "A symbol sits in the square to the right of easting line 13 and above northing line 24. What is its four-figure grid reference?",
            steps: [
              "Along the corridor first: the line on the left of the square is 13.",
              "Up the stairs second: the line along the bottom of the square is 24.",
              "Put them together, eastings first: 1324.",
              "Check: 2413 would be the wrong way round. Corridor before stairs."
            ],
            answer: "1324",
            checks: [{ expr: "13*100+24", value: 1324, tol: 0 }]
          },
          tip: "Say it out loud as you do it: along the corridor (bottom numbers), up the stairs (side numbers)."
        },
        {
          heading: "Six-figure grid references: 100 small squares",
          paragraphs: [
            "A four-figure reference finds a square, but a square on a 1:50 000 OS map is one kilometre across. To give a more accurate location we use six-figure grid references. Imagine each square divided into 100 small squares: ten across and ten up. Now you can say how many tenths across and how many tenths up your point is. The first two numbers of the easting and the first two of the northing are the same as before; the extra number is read across and then up, exactly as before.",
            "In the deck's example, the star sits in square 02 01. It is 8 tenths of the way across the square and 4 tenths of the way up. So the easting becomes 028 and the northing becomes 014, and the six-figure grid reference for the star is 028 014. You can write it with a space in the middle or as one six-digit number: 028014. Either way, the first three digits are always the easting.",
            "The deck's trick question asks: is it 285137 or 137285? Only one can be right. Find which pair of lines is along the bottom. If the eastings are 28 and 29, then the reference must start with 28, so 285137 is right and 137285 is the same point written backwards, which is wrong. When you answer the fifteen practice questions, write the easting first every time."
          ],
          worked: {
            q: "A point is 5 tenths across from easting line 28 and 7 tenths up from northing line 13. What is its six-figure grid reference?",
            steps: [
              "Easting: the line to the left is 28. Count tenths across: 5. Easting = 285.",
              "Northing: the line below is 13. Count tenths up: 7. Northing = 137.",
              "Write easting then northing: 285 137, or 285137.",
              "Check: six digits, and it begins with the easting pair 28."
            ],
            answer: "285 137",
            checks: [{ expr: "(28*10+5)*1000+(13*10+7)", value: 285137, tol: 0 }]
          },
          tip: "Six figures = four figures with one extra digit tucked after each pair. Across digit after the easting, up digit after the northing."
        },
        {
          heading: "Symbols and compass points on the map",
          paragraphs: [
            "Maps use symbols: small pictures or letters that stand for real things, so the map does not get crowded with words. On the OS map of Bewdley you saw symbols for the station and the school, and the different shading for settlements. If you do not know a symbol, use the key: it lists every symbol and what it means. You drew the OS symbols in your book and played Geodoku, a sudoku with map symbols instead of numbers, to learn them.",
            "The practice questions also ask for direction: what is north-west of the rocket, what is east of the house, what is south-east of the moon. North is at the top of an OS map, so east is to the right, south is down and west is to the left. The four points in between are north-east, south-east, south-west and north-west. Chapter 4 takes compass directions further; for now, remember that north is up on the map."
          ],
          tip: "Grid reference first, direction second: find the square, then say which way the other thing is from it."
        }
      ],
      gate: [
        { kind: "gap", q: "The rule for grid references is: along the corridor and then up the ___.", answer: "stairs", options: ["stairs", "road", "hill"], why: "The deck's rule is along the corridor (the bottom numbers first) and then up the stairs (the side numbers second).",
          feedback: {
            "road": "The saying is about a building, not a journey: you walk along the corridor and then go up the stairs. Bottom numbers first, side numbers second.",
            "hill": "Close, because you do go up, but the deck's phrase is up the stairs. Corridor along the bottom first, stairs up the side second."
          } },
        { kind: "numeric", q: "A square has the four-figure grid reference 1324. What is its easting (the number you read along the bottom)?", answer: 13, tolerance: 0, units: "", check: "1324//100", why: "The first two digits of a four-figure reference are the easting, read along the corridor: 13. The last two, 24, are the northing.",
          misconceptions: [
            { answer: 24, says: "24 is the northing, the number read up the side. The easting comes first in a grid reference, so it is 13.", check: "1324%100" },
            { answer: 1324, says: "That is the whole grid reference. The question asks only for the easting, which is the first pair of digits: 13.", check: "1324" },
            { answer: 31, says: "You have the right digits but reversed. Read the easting from left to right as written: 13.", check: "(DECK_FOUR_B//100%10)*10+DECK_FOUR_B//1000" }
          ] },
        { kind: "mcq", q: "To give a six-figure grid reference, how many small squares do we imagine each grid square divided into?", options: ["100", "10", "6", "1000"], answer: 0, why: "Each square is divided into 100 small squares: ten across and ten up. That gives one extra digit for the easting and one for the northing.",
          feedback: [
            "",
            "Ten is the number of small squares along one side. Ten across and ten up make 10 × 10 = 100 small squares altogether.",
            "Six is the number of digits in the grid reference, not the number of small squares. The square is divided into 100 small squares, ten by ten.",
            "A thousand would need a hundred divisions along each side. Six-figure references use ten divisions each way, so 100 small squares."
          ] }
      ],
      modules: [
        {
          title: "Write the six-figure reference",
          task: {
            kind: "numeric",
            q: "A church symbol is 5 tenths across from easting line 28 and 7 tenths up from northing line 13. Give its six-figure grid reference as one number.",
            answer: 285137, tolerance: 0, units: "", check: "(28*10+5)*1000+(13*10+7)",
            why: "Easting 28 plus 5 tenths is 285; northing 13 plus 7 tenths is 137. Easting first: 285137.",
            misconceptions: [
              { answer: 137285, says: "You have written the northing first. A grid reference always starts with the easting, the number along the bottom: 285137.", check: "(13*10+7)*1000+(28*10+5)" },
              { answer: 2813, says: "That is the four-figure reference for the square. The question asks for six figures, so add the tenths: 5 across after 28 and 7 up after 13, giving 285137.", check: "28*100+13" },
              { answer: 285713, says: "You put the two extra digits together at the end. Each extra digit goes straight after its own pair: 28 then 5, 13 then 7, so 285137.", check: "(28*10+5)*1000+(7*100+13)" }
            ]
          },
          contexts: [
            { label: "Treasure chest", q: "On a treasure map, the chest is 5 tenths across from easting line 28 and 7 tenths up from northing line 13. Give its six-figure grid reference as one number.", check: "(28*10+5)*1000+(13*10+7)" },
            { label: "School library", q: "On the school map, the library is 5 tenths across from easting line 28 and 7 tenths up from northing line 13. Give its six-figure grid reference as one number.", check: "(28*10+5)*1000+(13*10+7)" },
            { label: "Bus stop", q: "A bus stop symbol is 5 tenths across from easting line 28 and 7 tenths up from northing line 13. Give its six-figure grid reference as one number.", check: "(28*10+5)*1000+(13*10+7)" }
          ],
          explain: "Say, in one sentence, why the reference must start with 28 and not 13.",
          levels: {
            support: {
              steps: [
                "Start with the easting line on the left of the point: 28.",
                "Count the tenths across to the point: 5. Write 285.",
                "Now the northing line below the point: 13. Count tenths up: 7. Write 137.",
                "Join them, easting first: 285137. Check it has six digits."
              ],
              example: {
                q: "A star is 2 tenths across from easting line 33 and 2 tenths up from northing line 15. Give its six-figure grid reference.",
                steps: ["Easting 33 plus 2 tenths: 332.", "Northing 15 plus 2 tenths: 152.", "Easting first: 332 152."],
                answer: "332152",
                checks: [{ expr: "(33*10+2)*1000+(15*10+2)", value: 332152, tol: 0 }]
              }
            },
            core: { hint: "Easting pair, then its tenths; northing pair, then its tenths. Along the corridor before up the stairs." },
            stretch: { extend: "The deck asks whether the answer is 285137 or 137285. Explain how a person reading the map could tell which one is impossible." }
          },
          why: "The easting is read first: line 28 plus 5 tenths gives 285. The northing is read second: line 13 plus 7 tenths gives 137. Together: 285137."
        },
        {
          title: "Which part of the reference is which?",
          task: {
            kind: "match",
            q: "Match each part of a grid reference to what it tells you.",
            pairs: [
              ["The 13 in 1324", "The easting: which line you read along the bottom"],
              ["The 24 in 1324", "The northing: which line you read up the side"],
              ["The 5 in 285137", "Tenths across the square from the easting line"],
              ["The 7 in 285137", "Tenths up the square from the northing line"]
            ]
          },
          levels: {
            support: {
              steps: [
                "In a four-figure reference, the first pair is the easting and the second pair is the northing.",
                "In a six-figure reference, each pair has one extra digit after it.",
                "The third digit (after 28) is tenths across; the sixth digit (after 13) is tenths up.",
                "Corridor words (along, bottom, across) go with eastings; stairs words (up, side) go with northings."
              ],
              example: {
                q: "In the grid reference 0821, which pair is read along the bottom and which up the side?",
                steps: ["The first pair, 08, is read along the bottom: the easting.", "The second pair, 21, is read up the side: the northing."],
                answer: "08 is the easting (along the bottom); 21 is the northing (up the side)."
              }
            },
            core: { hint: "First pair along, second pair up. Extra digits are tenths, and each one belongs to the pair just before it." },
            stretch: { extend: "Each square is divided into 100 small squares, ten across and ten up. Explain how that lets a six-figure reference pin a point down to one tenth of a square in each direction." }
          },
          explain: "Say, in one sentence, what the extra digit in a six-figure reference measures.",
          why: "13 is the easting and 24 the northing of square 1324. In 285137 the 5 counts tenths across from line 28 and the 7 counts tenths up from line 13."
        },
        {
          title: "Six-figure reference, step by step",
          task: {
            kind: "order",
            q: "Put the steps for giving a six-figure grid reference into the correct order.",
            items: [
              "Find the easting line to the left of the point and read its two-digit number along the bottom",
              "Count how many tenths across the square the point is and add that digit to the easting",
              "Find the northing line below the point and read its two-digit number up the side",
              "Count how many tenths up the square the point is and add that digit to the northing",
              "Write the six digits with the easting first and the northing second"
            ]
          },
          contexts: [
            { label: "Mouse on the map", q: "You need the six-figure grid reference of the mouse picture on the practice map. Put the steps into the correct order." },
            { label: "Harlington on the OS map", q: "You are locating the school on the OS map and giving its six-figure grid reference. Put the steps into the correct order." }
          ],
          explain: "Say, in one sentence, why counting tenths across comes before anything to do with the northing.",
          levels: {
            support: {
              steps: [
                "Everything about the easting comes first: the line, then its tenths.",
                "Then everything about the northing: the line, then its tenths.",
                "Writing the answer down is the last step.",
                "Check: the order is along, across, up, up-tenths, write."
              ],
              example: {
                q: "Put these three steps for a four-figure reference in order: write the four digits; read the line on the left; read the line below.",
                steps: ["Left line first (along the corridor).", "Line below second (up the stairs).", "Write the digits last."],
                answer: "Read the line on the left; read the line below; write the four digits."
              }
            },
            core: { hint: "Corridor first, stairs second, pen last. Each line is followed by its own tenths." },
            stretch: { extend: "Write the same steps for a four-figure reference, and explain which two steps disappear and why." }
          },
          why: "The deck's method is the four-figure method with one extra digit after each pair: easting line, tenths across, northing line, tenths up, then write it down easting first."
        }
      ]
    },

    /* ───────────── 3 · Hayes ───────────── */
    {
      key: "hayes", n: 3, title: "My local town: what is Hayes famous for?",
      lead: "Where Hayes is, how its streets, chapel and factories have changed since the early 1900s, what the census tells us about its growing population, why it is famous for an airport and a railway, and how plaques, time capsules and old maps keep a place's history.",
      covers: [5, 6],
      pretext: {
        words: [
          { word: "borough", means: "one of the areas London is divided into for local government", sentence: "Hayes is in the borough of Hillingdon." },
          { word: "census", means: "a count of everyone living in the country", sentence: "The census is taken every ten years." },
          { word: "population", means: "the number of people living in a place", sentence: "The population of Hayes has grown." },
          { word: "industry", means: "making things in factories", sentence: "Chocolate and records were important industries in Hayes." },
          { word: "blue plaque", means: "a sign showing where a famous person lived or a famous event happened", sentence: "A blue plaque marks the house of a famous writer." },
          { word: "time capsule", means: "a sealed container of objects to be opened far in the future", sentence: "We buried a time capsule under the playground." }
        ],
        passage: [
          "Hayes is a town in west London.",
          "It is in the borough of Hillingdon.",
          "Old photographs show how Hayes has changed.",
          "Station Road looked very different in the early 1900s.",
          "The town chapel was moved 100 yards from its old place.",
          "A big factory made records for HMV and EMI.",
          "A chocolate company stood beside the canal in the 1920s.",
          "The census counts everyone in the country every ten years.",
          "It shows that more people live in Hayes now than in 1981.",
          "Hayes is famous for Heathrow airport and for its railway.",
          "The new railway is called Crossrail, or the Elizabeth line.",
          "Blue plaques and time capsules keep the history of a place.",
          "Old maps show what a place used to look like."
        ]
      },
      sections: [
        {
          heading: "Where is Hayes, and how has it changed?",
          paragraphs: [
            "Hayes is a town in west London, in the borough of Hillingdon. A borough is one of the areas London is divided into for local government. Your starter asked you to find Hillingdon on a map of London: it is on the western edge, where London meets the countryside beyond. To describe where a place is, name the country, the city, the borough, and something nearby, such as the airport or the canal.",
            "The deck's before-and-after photographs show how Hayes has changed. Station Road in the early 1900s and in 2013 is the same street, but the shops, vehicles and road surface are all different. Hayes town chapel was photographed in the 1900s and again in 2012, standing 100 yards from its former location. The HMV and EMI factory at Bourne's Bridge was photographed in the 1930s and in 2003; HMV stood for His Master's Voice and EMI for Electric and Musical Industries, and the factory made records and electrical goods.",
            "Chocolate was one of the important industries in the history of Hayes. One photograph shows the Hayes Cocoa Company seen from the canal in the early 1920s; another shows the Nestlé factory on the same site, seen from the canal in 2003. The railway bridge over the canal appears in both, which is how you know it is the same place. Describing change means saying what has stayed the same as well as what is different."
          ],
          tip: "For a before-and-after pair, name one thing that has changed and one thing that has stayed the same. Both count as describing change."
        },
        {
          heading: "Counting people: the census",
          paragraphs: [
            "The census is a fantastic source of information. The first census was carried out in 1801 and one has been taken every 10 years since then, apart from 1941, because of the Second World War. A census return gives information about the population, including the names, ages and occupations of the people living in each household. Historians and geographers use census returns to see who lived in a place and what work they did.",
            "The deck's own table gives population figures for Hayes in five years: 233 610 in 1981, 236 047 in 1990, 245 911 in 2000, 269 465 in 2010 and 298 370 in 2015. Reading down the table, the population rose every time, and the rises got bigger: about 2 400 between 1981 and 1990, about 9 900 between 1990 and 2000, about 23 600 between 2000 and 2010 and about 28 900 between 2010 and 2015. Altogether the population increased by about 65 000 from 1981 to 2015.",
            "To compare growth fairly we use percentage increase. The rule is: new number minus original number, divided by the original number, times 100. For Hayes that is 298 370 − 233 610 = 64 760, then 64 760 ÷ 233 610 × 100, which is about 27.7 %. Be careful: if you divide by the new number instead of the original, you get about 21.7 %, which is wrong. Always divide by the number you started with. Why are more people living in Hayes? Jobs at Heathrow, good transport into London and new housing all draw people in, many of them moving from other parts of London and from abroad."
          ],
          worked: {
            q: "The population of Hayes was 233 610 in 1981 and 298 370 in 2015. Work out the percentage increase.",
            steps: [
              "Find the increase: 298 370 − 233 610 = 64 760.",
              "Divide by the original number: 64 760 ÷ 233 610 = 0.277 (to three decimal places).",
              "Multiply by 100: about 27.7 %.",
              "Check the sense: 64 760 is a bit more than a quarter of 233 610, and a quarter is 25 %, so 27.7 % is reasonable."
            ],
            answer: "About 27.7 %",
            checks: [
              { expr: "POP_2015-POP_1981", value: 64760, tol: 0 },
              { expr: "(POP_2015-POP_1981)/POP_1981*100", value: 27.7, tol: 0.05 },
              { expr: "(POP_2015-POP_1981)/POP_2015*100", value: 21.7, tol: 0.05 }
            ]
          },
          tip: "Percentage increase: (new − original) ÷ original × 100. The word original appears twice for a reason."
        },
        {
          heading: "Famous for an airport and a railway",
          paragraphs: [
            "Look at a map of Hayes and two symbols stand out: an airport and a railway station. Hayes is famous for Heathrow airport, which lies just to the south, and for Hayes railway station. A 1930s map in the deck shows the site of Heathrow as fields; the airport was built in 1946. Heathrow brings jobs, noise and traffic to the whole area, and it is one reason the population has grown.",
            "Hayes is now even more famous for a new railway: Crossrail, which is called the Elizabeth line. It is a new railway for London and the South East, running from Reading and Heathrow in the west to Shenfield and Abbey Wood in the east, and it runs through Hayes. The deck gives its cost as £15 billion. When you studied it, the line was still being built; it has since opened, so check the latest news for how it is being used.",
            "A new railway has benefits and costs. The benefits the deck lists are faster and easier travel between London and the South East, jobs for people, growth in businesses, and a rise in house prices for owners and developers. The costs are a rise in house prices for tenants and new movers, loss of green spaces, loss of homes, the bill for taxpayers, and more expensive travel on the new line. Notice that rising house prices appear on both sides: good if you own a home, bad if you rent or want to buy."
          ],
          tip: "Advantages and disadvantages depend on who you are. Say who gains and who loses, and you have written a geographer's answer."
        },
        {
          heading: "Marking local history: plaques, capsules and old maps",
          paragraphs: [
            "Places keep their history in several ways. A blue plaque is a sign which shows where famous people lived or where famous events happened. In class you searched a website for blue plaques within 100 miles of the school and marked them on a sketch map, with the person's name and dates in a key. A time capsule is a container in which artefacts are put, to be opened at a date in the future. The deck shows one in New York that will be opened in the year 6939 to tell people of the future what life is like today. You designed your own with five objects that tell the story of your local area now.",
            "Old maps tell local history too. Two maps of Bristol, from 1866 and 1946, show the city growing to the north and west, so the map with less growth is the older one. A 1925 OS map of Catstye Cam and Helvellyn in the Lake District would look almost the same today, because a glaciated landscape with no settlements takes thousands of years to change. The name Liverpool means pool or creek with thick or muddy water, and the pool can be seen on an old map of the city. A 1946 map of the River Severn shows a railway crossing the river, with a station on the northern bank called Severn Bridge station; today two road bridges cross there instead.",
            "At the end of the unit you designed a mural, a large work of art on a wall, telling the story of the local area, in the spirit of the Bayeux Tapestry: a piece of embroidered cloth about 50 cm high and 70 m long that tells the story of the Norman invasion of England in 1066. A good mural, like a good map, shows what has changed and what has stayed the same."
          ],
          tip: "To date an old map, look for what is missing: no airport, no motorway, a railway that has since closed."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which London borough is Hayes in?", options: ["Hillingdon", "Ealing", "Hounslow", "Harrow"], answer: 0, why: "Hayes is located in the borough of Hillingdon, on the western edge of London.",
          feedback: [
            "",
            "Ealing is the borough to the east of Hillingdon. Hayes is in Hillingdon, the borough on the western edge of London.",
            "Hounslow is the borough to the south-east, on the other side of Heathrow. Hayes is in Hillingdon.",
            "Harrow is a borough to the north-east. Hayes is in Hillingdon, the borough that includes Heathrow airport."
          ] },
        { kind: "numeric", q: "The population of Hayes was 233 610 in 1981 and 298 370 in 2015. By how many people did it increase?", answer: 64760, tolerance: 0, units: "people", check: "POP_2015-POP_1981", why: "298 370 − 233 610 = 64 760, which the deck rounds to about 65 000.",
          misconceptions: [
            { answer: 531980, says: "You added the two figures. An increase is the difference, so subtract: 298 370 − 233 610 = 64 760.", check: "POP_2015+POP_1981" },
            { answer: 28905, says: "That is the increase from 2010 to 2015 only. The question asks for 1981 to 2015: 298 370 − 233 610 = 64 760.", check: "POP_2015-POP_2010" },
            { answer: 65000, says: "The deck says about 65 000, which is a good rounded answer. The exact increase is 298 370 − 233 610 = 64 760.", check: "round(POP_2015-POP_1981,-3)" }
          ] },
        { kind: "gap", q: "The first census was carried out in ___, and one has been taken every ten years since, apart from 1941.", answer: "1801", options: ["1801", "1901", "1941"], why: "The first census was in 1801. It has been repeated every ten years since, except in 1941 because of the Second World War.",
          feedback: {
            "1901": "There was a census in 1901, but it was not the first. The census began a hundred years earlier, in 1801.",
            "1941": "1941 is the one year the census was NOT taken, because of the Second World War. The first census was in 1801."
          } }
      ],
      modules: [
        {
          title: "Percentage increase, done properly",
          task: {
            kind: "numeric",
            q: "The population of Hayes was 233 610 in 1981 and 298 370 in 2015. Work out the percentage increase, to one decimal place.",
            answer: 27.7, tolerance: 0.1, units: "%", check: "(POP_2015-POP_1981)/POP_1981*100",
            why: "Increase 298 370 − 233 610 = 64 760. Divide by the original, 233 610, and multiply by 100: 27.7 %.",
            misconceptions: [
              { answer: 21.7, says: "You divided by the new number, 298 370. Percentage increase divides by the ORIGINAL number, 233 610, which gives 27.7 %.", check: "(POP_2015-POP_1981)/POP_2015*100" },
              { answer: 64760, says: "That is the increase in people, not the percentage. Divide 64 760 by the original 233 610 and multiply by 100 to get 27.7 %.", check: "POP_2015-POP_1981" },
              { answer: 127.7, says: "That is what the new population is as a percentage of the old one. The increase is the part above 100 %, so 27.7 %.", check: "POP_2015/POP_1981*100" }
            ]
          },
          contexts: [
            { label: "Local history project", q: "For a project on Hayes, you compare the 1981 census figure of 233 610 with the 2015 figure of 298 370. What is the percentage increase, to one decimal place?", check: "(POP_2015-POP_1981)/POP_1981*100" },
            { label: "Council report", q: "A council report says Hayes grew from 233 610 people in 1981 to 298 370 in 2015. Work out the percentage increase it should quote, to one decimal place.", check: "(POP_2015-POP_1981)/POP_1981*100" },
            { label: "Newspaper", q: "A local newspaper wants a headline about growth in Hayes from 233 610 people in 1981 to 298 370 in 2015. What percentage increase should it print, to one decimal place?", check: "(POP_2015-POP_1981)/POP_1981*100" }
          ],
          explain: "Say, in one sentence, why you divide by the original number and not the new one.",
          levels: {
            support: {
              steps: [
                "Find the increase: new number minus original number.",
                "Divide the increase by the ORIGINAL number (the 1981 figure).",
                "Multiply by 100 to turn it into a percentage.",
                "Round to one decimal place. Check: the answer should be a bit more than 25 %, because the increase is a bit more than a quarter of the original."
              ],
              example: {
                q: "A village grew from 2 000 people to 2 500. What is the percentage increase?",
                steps: ["Increase: 2 500 − 2 000 = 500.", "Divide by the original: 500 ÷ 2 000 = 0.25.", "Multiply by 100: 25 %."],
                answer: "25 %",
                checks: [{ expr: "(2500-2000)/2000*100", value: 25, tol: 0 }]
              }
            },
            core: { hint: "(new − original) ÷ original × 100. The original is the 1981 figure." },
            stretch: { extend: "The deck's answer slide gives 21.7 %. Show exactly which number was used as the divisor to get that figure, and explain why it is wrong." }
          },
          why: "Percentage increase compares the change with where you started. 64 760 ÷ 233 610 × 100 = 27.7 %. Dividing by the new figure gives 21.7 %, which understates the growth."
        },
        {
          title: "Benefit or cost?",
          task: {
            kind: "mcq",
            q: "Which of these is a cost (disadvantage) of Crossrail for people who rent their homes in Hayes?",
            options: ["Rising house prices and rents for tenants and new movers", "Faster and easier travel into London", "Jobs for people building and running the railway", "Growth in local businesses"],
            answer: 0,
            feedback: [
              "",
              "Faster travel is a benefit that the deck lists on the advantages side. For renters the disadvantage is rising house prices, which push rents up.",
              "Jobs are a benefit for people. The deck lists rising house prices as the cost for tenants and new movers.",
              "Business growth is on the benefits side. The cost that hits renters is rising house prices and rents."
            ]
          },
          explain: "Say, in one sentence, why rising house prices can be a benefit for one person and a cost for another.",
          levels: {
            support: {
              steps: [
                "Think about who the person is: a renter does not own a home.",
                "Which change makes life harder for someone who pays rent? Higher house prices mean higher rents.",
                "The other three options help people: travel, jobs, business.",
                "So the cost for renters is rising house prices."
              ],
              example: {
                q: "Which is a cost of Crossrail for someone who loves the local park: loss of green spaces, or faster travel to work?",
                steps: ["Loss of green spaces harms the park lover.", "Faster travel is a benefit."],
                answer: "Loss of green spaces is the cost."
              }
            },
            core: { hint: "Three of the options help people. Which one makes it harder to afford a home if you rent?" },
            stretch: { extend: "Rising house prices appear on both the benefits and the costs side of the deck's table. Explain who gains and who loses, in two sentences." }
          },
          why: "The deck lists a rise in house prices as a benefit for owners and developers but a cost for tenants and new movers. Travel, jobs and business growth are benefits."
        },
        {
          title: "How has Hayes changed?",
          task: {
            kind: "written",
            q: "Describe how Hayes has changed since the early 1900s. Use two before-and-after examples from the lesson and the census figures for 1981 and 2015. Write one paragraph of four to six sentences.",
            marks: 4,
            criteria: [
              "I name two before-and-after examples (Station Road, the town chapel, the HMV and EMI factory, or the Hayes Cocoa Company and Nestlé factory) with their dates.",
              "I say what changed in each example and one thing that stayed the same.",
              "I use the deck's population figures (233 610 in 1981, 298 370 in 2015) and say that the population increased by about 65 000.",
              "I give one reason for the growth, such as Heathrow airport or the new railway."
            ],
            model: "Hayes has changed a great deal since the early 1900s. Station Road in the early 1900s had old shops and no cars, but by 2013 it was a busy modern street, although it is still the same road. The HMV and EMI factory at Bourne's Bridge, photographed in the 1930s and in 2003, shows how industry grew up around the railway and canal. The deck's population table shows that the population rose from 233 610 in 1981 to 298 370 in 2015, an increase of about 65 000 people. One reason is the jobs at Heathrow airport nearby, and the new Elizabeth line is likely to bring even more people to Hayes."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: say that Hayes has changed a lot since the early 1900s.",
                "Sentences 2 and 3: describe two before-and-after examples, with their dates. Say what changed and what stayed the same.",
                "Sentence 4: give the census figures and the increase.",
                "Sentence 5: give one reason for the growth.",
                "Read it back: do you have two examples, two dates, two numbers and one reason?"
              ],
              example: {
                q: "In two sentences, describe how the Hayes Cocoa Company site changed between the 1920s and 2003.",
                steps: ["Say what was there before and what is there now, with the dates.", "Say what stayed the same: the canal and the railway bridge."],
                answer: "In the early 1920s the Hayes Cocoa Company stood beside the canal, and by 2003 the Nestlé factory stood on the same site. The canal and the railway bridge over it appear in both photographs, so the setting has stayed the same while the factory has changed."
              }
            },
            core: { hint: "Two examples with dates, the two census figures and the increase, one reason. Change and continuity both count." },
            stretch: { extend: "Add a sentence predicting how Hayes might change by 2040, using the Elizabeth line and the deck's list of benefits and costs." }
          },
          explain: "Say, in one sentence, what a geographer means by change over time.",
          why: "A good description of change names specific examples with dates, uses figures, says what stayed the same as well as what changed, and gives a reason."
        }
      ]
    },

    /* ───────────── 4 · scale, contours and compass ───────────── */
    {
      key: "map-scale", n: 4, title: "Scale, contours and compass directions",
      lead: "What scale means and the three ways of writing it, the scales Ordnance Survey uses, how brown contour lines show the height and shape of the land, and how to give a direction with a four- or eight-point compass.",
      covers: [7],
      pretext: {
        words: [
          { word: "scale", means: "the link between a distance on the map and the real distance on the ground", sentence: "The scale tells you how far it really is." },
          { word: "stated scale", means: "a scale written in words, such as 1 cm = 500 m", sentence: "The stated scale says one centimetre is half a kilometre." },
          { word: "linear scale", means: "a scale drawn as a bar you can measure against", sentence: "Hold your ruler against the linear scale." },
          { word: "ratio scale", means: "a scale written as two numbers, such as 1:50 000", sentence: "A ratio scale of 1:50 000 means 1 cm is 50 000 cm." },
          { word: "contour line", means: "a brown line on a map joining places of the same height", sentence: "Contour lines close together mean a steep slope." },
          { word: "compass rose", means: "the diagram showing north, east, south and west", sentence: "Draw the compass rose in your book." }
        ],
        passage: [
          "A map is much smaller than the real land.",
          "Scale is the link between a distance on the map and the real distance.",
          "Scale lets us draw something that would never fit on paper.",
          "There are three ways to show scale.",
          "A stated scale uses words: 1 cm = 500 m.",
          "A linear scale is a bar you can measure with a ruler.",
          "A ratio scale uses two numbers: 1:50 000.",
          "Ordnance Survey maps often use 1:50 000, 1:25 000 and 1:10 000.",
          "Brown lines on an OS map are called contour lines.",
          "They show the height of the land.",
          "Close together means steep; far apart means gentle or flat.",
          "A compass rose shows north, east, south and west.",
          "Never Eat Shredded Wheat helps you remember the order."
        ]
      },
      sections: [
        {
          heading: "What is scale?",
          paragraphs: [
            "Scale is the link between a distance on a map and its real distance on the ground. Using scale allows us to draw something that would not normally fit on paper: a whole town, a whole country, even the whole world. Every proper map tells you its scale, usually in the corner, and you must read it before you measure anything.",
            "There are three ways to show the same scale. A stated scale says it in words and numbers: 1 cm = 2 m means one centimetre on the map is two metres on the ground. A linear scale is a bar drawn on the map and marked off, for example 0, 2, 4 m; you lay your ruler or a strip of paper against it. A ratio scale gives the same information as two numbers: 1:200 means one unit on the map is 200 of the same units on the ground, so 1 cm is 200 cm, which is 2 m. In class you completed a table turning each scale into the other two: 1 cm = 50 m is the same as 1:5 000, and 1 cm = 100 m is the same as 1:10 000."
          ],
          worked: {
            q: "A plan has a stated scale of 1 cm = 50 m. Write it as a ratio scale.",
            steps: [
              "A ratio scale must use the same unit on both sides, so change 50 m into centimetres.",
              "1 m = 100 cm, so 50 m = 50 × 100 = 5 000 cm.",
              "So 1 cm on the map is 5 000 cm on the ground: the ratio scale is 1:5 000.",
              "Check against the deck's table: 1 cm = 50 m sits in the same row as 1:5 000."
            ],
            answer: "1:5 000",
            checks: [{ expr: "50*CM_PER_M", value: 5000, tol: 0 }, { expr: "100*CM_PER_M", value: 10000, tol: 0 }, { expr: "2*CM_PER_M", value: 200, tol: 0 }]
          },
          tip: "A ratio scale has no units, so both numbers must be in the same unit. Turn metres into centimetres first."
        },
        {
          heading: "The scales Ordnance Survey uses",
          paragraphs: [
            "Ordnance Survey often uses three ratio scales: 1:50 000, 1:25 000 and 1:10 000. To turn each into a simple stated scale, remember that 1 cm on the map is that many centimetres on the ground, then change to metres by dividing by 100. On a 1:50 000 map, 1 cm = 50 000 cm = 500 m. On a 1:25 000 map, 1 cm = 25 000 cm = 250 m. On a 1:10 000 map, 1 cm = 10 000 cm = 100 m. The bigger the second number, the more land each centimetre covers and the less detail the map can show.",
            "Once you know the stated scale you can measure real distances. Measure the map distance in centimetres with a ruler, then multiply by the stated scale. On a 1:25 000 map, 4 cm is 4 × 250 m = 1 000 m, which is 1 km. That is the scale of the map in your homework, where 4 cm on the map was 1 km on the ground. On a 1:50 000 map the same 4 cm would be 4 × 500 m = 2 000 m, or 2 km."
          ],
          worked: {
            q: "On a 1:50 000 OS map, a footpath measures 6 cm. How long is the real footpath, in kilometres?",
            steps: [
              "Stated scale first: 1:50 000 means 1 cm = 50 000 cm = 500 m.",
              "Multiply: 6 × 500 m = 3 000 m.",
              "Change to kilometres: 3 000 m = 3 km.",
              "Check: on a 1:50 000 map, 2 cm is 1 km, so 6 cm is 3 km."
            ],
            answer: "3 km",
            checks: [{ expr: "6*OS_50K_M/M_PER_KM", value: 3, tol: 0 }, { expr: "4*OS_25K_M/M_PER_KM", value: 1, tol: 0 }]
          },
          tip: "On a 1:50 000 map, 2 cm is 1 km. On a 1:25 000 map, 4 cm is 1 km. Learn those two and you can check any answer."
        },
        {
          heading: "Contour lines: height and shape",
          paragraphs: [
            "Look at an OS map of hills and you will see thin brown lines curving across it. The brown lines on an OS map are called contour lines, and they are used to show height. A contour line joins places that are the same height above sea level; the height is printed on some of the lines. The deck's hill has contour lines marked at 10 metre intervals, so each line is 10 m higher than the one below it.",
            "Contour lines also show the shape of the land. Seen from above, lines that are close together mean the slope is steep, because the land rises 10 m in a short distance. Lines that are far apart mean the slope is gentle or flat. A ring of contours with no lines inside is a hill top. In class you matched drawings of hills to their contour patterns: a pointed hill gives small tight rings, a long ridge gives long thin loops, and a flat-topped hill has a wide empty space inside the top ring.",
            "The 1925 map of Helvellyn in the Lake District was full of contour lines packed closely together, because the mountains there are steep. That is also why the deck says the map would look almost the same today: steep rock changes very slowly."
          ],
          worked: {
            q: "A hill is drawn with contour lines at 10 m intervals. The lowest line is labelled 50 m and there are four more lines inside it. What height is the highest contour line?",
            steps: [
              "Each line is 10 m higher than the one before.",
              "Four more lines means four steps of 10 m: 4 × 10 = 40 m.",
              "Add to the lowest line: 50 + 40 = 90 m.",
              "Check by counting: 60, 70, 80, 90. Four lines, the last one is 90 m."
            ],
            answer: "90 m",
            checks: [{ expr: "50+4*CONTOUR_INTERVAL", value: 90, tol: 0 }]
          },
          tip: "Count the lines, multiply by the interval, add to the starting height. Close lines are steep; wide gaps are gentle."
        },
        {
          heading: "Compass directions",
          paragraphs: [
            "A compass rose is the diagram on a map that shows direction. The four main points, going clockwise from the top, are north, east, south and west. The deck's way to remember the order is Never Eat Shredded Wheat. On almost every map, including all OS maps, north is at the top, so east is on the right, south at the bottom and west on the left.",
            "A four-point compass rose is often not precise enough, so geographers use eight points. Between north and east is north-east; between south and east is south-east; between south and west is south-west; and between north and west is north-west. The first word is always north or south, the second always east or west. In class you placed a cow and an owl on your compass rose and completed sentences like the cow is in the north-east, and the cow is north-east of the owl.",
            "Direction questions on a map always ask where one thing is from another. Put your finger on the from thing (the owl, the rocket, the house), face north, and say which way you move to reach the other thing. Combine this with grid references and you can describe any place on the map: the church is in square 1324, north-east of the station."
          ],
          tip: "Never Eat Shredded Wheat: N, E, S, W clockwise. The in-between points always say north or south first."
        }
      ],
      gate: [
        { kind: "numeric", q: "On a 1:25 000 Ordnance Survey map, how many metres on the ground does 1 cm on the map represent?", answer: 250, tolerance: 0, units: "m", check: "OS_25K_M", why: "1:25 000 means 1 cm on the map is 25 000 cm on the ground. 25 000 cm ÷ 100 = 250 m.",
          misconceptions: [
            { answer: 25000, says: "That is the distance in centimetres. The question asks for metres, so divide by 100: 25 000 cm = 250 m.", check: "OS_25K_M*CM_PER_M" },
            { answer: 25, says: "You have divided by 1 000 instead of 100. There are 100 cm in a metre, so 25 000 cm = 250 m.", check: "25000/1000" },
            { answer: 500, says: "500 m is the stated scale for a 1:50 000 map. On a 1:25 000 map, 1 cm is 25 000 cm, which is 250 m.", check: "OS_50K_M" }
          ] },
        { kind: "gap", q: "The brown lines on an OS map that show the height of the land are called ___ lines.", answer: "contour", options: ["contour", "grid", "latitude"], why: "Contour lines are the brown lines joining places of the same height. They are close together where the slope is steep.",
          feedback: {
            "grid": "Grid lines are the blue numbered lines used for grid references. The brown lines that show height are contour lines.",
            "latitude": "Lines of latitude run around the globe and show how far north or south you are. On an OS map, the brown height lines are contour lines."
          } },
        { kind: "mcq", q: "On an OS map, what do contour lines that are very close together tell you about the land?", options: ["The slope is steep", "The slope is gentle or flat", "The land is below sea level", "There is a river"], answer: 0, why: "Close contour lines mean the land rises a lot in a short distance, so the slope is steep. Lines far apart mean gentle or flat land.",
          feedback: [
            "",
            "Gentle or flat land has contour lines far apart, because the height changes slowly. Lines packed close together mean the slope is steep.",
            "Contour lines show height above sea level, and how close they are shows how steep the land is. Close lines mean a steep slope, not low land.",
            "Rivers are drawn as blue lines, not brown ones. Brown contour lines close together mean a steep slope."
          ] }
      ],
      modules: [
        {
          title: "How far is it really?",
          task: {
            kind: "numeric",
            q: "On a 1:50 000 OS map, the distance between two villages measures 4 cm. How far apart are they on the ground, in kilometres?",
            answer: 2, tolerance: 0, units: "km", check: "4*OS_50K_M/M_PER_KM",
            why: "On a 1:50 000 map, 1 cm = 500 m. So 4 cm = 4 × 500 m = 2 000 m = 2 km.",
            misconceptions: [
              { answer: 2000, says: "2 000 is right, but in metres. The question asks for kilometres: 2 000 m = 2 km.", check: "4*OS_50K_M" },
              { answer: 1, says: "1 km is what 4 cm would be on a 1:25 000 map. This map is 1:50 000, so 1 cm = 500 m and 4 cm = 2 km.", check: "4*OS_25K_M/M_PER_KM" },
              { answer: 20, says: "You seem to have used 1 cm = 5 km. On a 1:50 000 map, 1 cm = 50 000 cm = 500 m, so 4 cm = 2 km.", check: "4*5" }
            ]
          },
          contexts: [
            { label: "Cycle ride", q: "You plan a cycle ride on a 1:50 000 OS map. The road between home and the lake measures 4 cm. How far will you cycle, in kilometres?", check: "4*OS_50K_M/M_PER_KM" },
            { label: "River", q: "On a 1:50 000 OS map, a stretch of river from the bridge to the weir measures 4 cm. How long is it on the ground, in kilometres?", check: "4*OS_50K_M/M_PER_KM" },
            { label: "School to station", q: "On a 1:50 000 OS map, the straight-line distance from the school to the railway station is 4 cm. How far is that on the ground, in kilometres?", check: "4*OS_50K_M/M_PER_KM" }
          ],
          explain: "Say, in one sentence, why you must change 50 000 cm into metres before you multiply.",
          levels: {
            support: {
              steps: [
                "Turn the ratio into a stated scale: 1:50 000 means 1 cm = 50 000 cm = 500 m.",
                "Multiply the map distance by 500 m: 4 × 500 m.",
                "You get 2 000 m.",
                "Change to kilometres: 1 000 m = 1 km, so 2 000 m = 2 km."
              ],
              example: {
                q: "On a 1:25 000 OS map, a path measures 8 cm. How long is it in kilometres?",
                steps: ["1:25 000 means 1 cm = 250 m.", "8 × 250 m = 2 000 m.", "2 000 m = 2 km."],
                answer: "2 km",
                checks: [{ expr: "8*OS_25K_M/M_PER_KM", value: 2, tol: 0 }]
              }
            },
            core: { hint: "1 cm = 500 m on this map. Multiply by 4, then change metres to kilometres." },
            stretch: { extend: "The same two villages are shown on a 1:25 000 map. How many centimetres apart would they be, and why is that map more detailed?" }
          },
          why: "1:50 000 means 1 cm on the map is 50 000 cm, or 500 m, on the ground. 4 cm is 4 × 500 = 2 000 m, which is 2 km."
        },
        {
          title: "Which way is it?",
          task: {
            kind: "mcq",
            q: "On a map with north at the top, the cow is above and to the right of the owl. Which compass direction is the cow from the owl?",
            options: ["North-east", "North-west", "South-east", "South-west"],
            answer: 0,
            feedback: [
              "",
              "West is to the left on a map with north at the top. The cow is to the right, which is east, and above, which is north: north-east.",
              "South is downwards on the map. The cow is above the owl, so it is north, and to the right, so east: north-east.",
              "South-west would be below and to the left. The cow is above (north) and to the right (east): north-east."
            ]
          },
          contexts: [
            { label: "Rocket and star", q: "On the practice map, with north at the top, the star is above and to the right of the rocket. In which compass direction is the star from the rocket?" },
            { label: "School and station", q: "On the OS map, with north at the top, the railway station is above and to the right of the school. In which direction is the station from the school?" },
            { label: "Treasure", q: "On a treasure map with north at the top, the chest is above and to the right of the palm tree. In which compass direction is the chest from the palm tree?" }
          ],
          explain: "Say, in one sentence, why the answer begins with north and not east.",
          levels: {
            support: {
              steps: [
                "Put your finger on the owl, because the question asks where the cow is FROM the owl.",
                "Above means north; below means south.",
                "Right means east; left means west.",
                "Above and right is north and east together: north-east. North or south always comes first."
              ],
              example: {
                q: "On a map with north at the top, the lion is below and to the left of the flag. Which direction is the lion from the flag?",
                steps: ["Below is south.", "Left is west.", "South and west together: south-west."],
                answer: "South-west"
              }
            },
            core: { hint: "Up is north, right is east. Join them, north first." },
            stretch: { extend: "Explain why saying the owl is south-west of the cow is the same fact, and write the rule for turning a direction round." }
          },
          why: "On a map with north at the top, above is north and right is east. Above and to the right is north-east, and the north or south word always comes first."
        },
        {
          title: "Three kinds of scale",
          task: {
            kind: "match",
            q: "Match each way of showing scale, and one other map feature, to its example.",
            pairs: [
              ["Stated scale", "1 cm = 2 m, written in words and numbers"],
              ["Linear scale", "A bar drawn on the map marked 0, 2, 4 m"],
              ["Ratio scale", "1:200, two numbers in the same unit"],
              ["Contour line", "A brown line joining places 50 m above sea level"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Stated means said: look for the one written as a sentence with units.",
                "Linear means a line: look for the bar you measure against.",
                "Ratio means two numbers with a colon between them.",
                "The one left over is not a scale at all: it shows height."
              ],
              example: {
                q: "Match: 1 cm = 500 m, 1:50 000. Choices: a ratio scale; a stated scale.",
                steps: ["1 cm = 500 m has units and words: stated.", "1:50 000 is two numbers: ratio."],
                answer: "1 cm = 500 m is the stated scale; 1:50 000 is the ratio scale."
              }
            },
            core: { hint: "Words with units, a bar, two numbers with a colon, and a brown height line." },
            stretch: { extend: "Show that 1 cm = 2 m, the 0-2-4 m bar and 1:200 are all the same scale, with the working." }
          },
          explain: "Say, in one sentence, what all three kinds of scale have in common.",
          why: "Stated, linear and ratio scales are three ways of writing the same link between map distance and real distance. A contour line is different: it shows height, not distance."
        }
      ]
    },

    /* ───────────── 5 · the United Kingdom ───────────── */
    {
      key: "united-kingdom", n: 5, title: "What is the rest of the United Kingdom like?",
      lead: "The difference between the British Isles, Great Britain and the UK, the four countries with their capitals, governments, traditions and landmarks, the UK's main physical and human features, and how its cities compare in size.",
      covers: [8],
      pretext: {
        words: [
          { word: "British Isles", means: "all the islands of Britain and Ireland together", sentence: "The British Isles include the Republic of Ireland." },
          { word: "Great Britain", means: "the large island made up of England, Scotland and Wales", sentence: "Great Britain does not include Northern Ireland." },
          { word: "United Kingdom", means: "England, Scotland, Wales and Northern Ireland together", sentence: "The United Kingdom has four countries." },
          { word: "capital city", means: "the city where a country's government meets", sentence: "Cardiff is the capital city of Wales." },
          { word: "landmark", means: "a famous building or natural feature that people recognise", sentence: "Stonehenge is a famous landmark in England." },
          { word: "settlement", means: "a place where people live, such as a village, town or city", sentence: "Bewdley is a small settlement on a river." }
        ],
        passage: [
          "The United Kingdom is made up of four countries.",
          "They are England, Scotland, Wales and Northern Ireland.",
          "Their capital cities are London, Edinburgh, Cardiff and Belfast.",
          "Great Britain is the big island: England, Scotland and Wales.",
          "The British Isles also include the island of Ireland.",
          "The Republic of Ireland is not part of the UK.",
          "Each country has its own traditions, food and music.",
          "Each has famous landmarks, like Stonehenge and the Giant's Causeway.",
          "The UK has coasts, rivers, towns, cities and transport links.",
          "London is by far the biggest city.",
          "It has over eight million people.",
          "Birmingham is next, with just over one million."
        ]
      },
      sections: [
        {
          heading: "British Isles, Great Britain, United Kingdom",
          paragraphs: [
            "Three names are easy to mix up, and each means something different. The British Isles is the whole group of islands off the north-west coast of Europe: Great Britain, the island of Ireland and all the smaller islands around them. Great Britain is the largest island, and the three countries on it: England, Scotland and Wales. The United Kingdom (UK) is a country made of four countries: England, Scotland, Wales and Northern Ireland. Its full name is the United Kingdom of Great Britain and Northern Ireland, which tells you exactly what it contains.",
            "So which country on the map is in the British Isles but not in the United Kingdom? The Republic of Ireland. It shares the island of Ireland with Northern Ireland, but it is an independent country with its own government in Dublin. When you shaded your UK map in three colours for Scotland, England and Wales and wrote in their capitals, you were colouring Great Britain; Northern Ireland, across the sea, completes the UK."
          ],
          tip: "Smallest to biggest: Great Britain (one island, three countries), United Kingdom (four countries), British Isles (all the islands, five countries if you count the Republic)."
        },
        {
          heading: "Four countries, four capitals, four governments",
          paragraphs: [
            "England's capital is London; Scotland's is Edinburgh; Wales's is Cardiff; Northern Ireland's is Belfast. Each country has its own flag, traditional food, music and traditions. The deck shows Scotland's haggis, pipers and Highland dancing, and the Loch Ness Monster; Wales's Welsh rarebit, the harp and the daffodil; Northern Ireland's soda farls, uilleann pipes and the beach below Mussenden Temple; and England's own food and music, including the Beatles.",
            "The four countries are governed in different ways. The UK Parliament meets in the Houses of Parliament in London and is led by the Prime Minister, who is the political head of the whole United Kingdom. Scotland has its own Scottish Parliament in Edinburgh, led by a First Minister. Wales has its own parliament in Cardiff, which the deck calls the National Assembly for Wales and which is now called the Senedd, led by a First Minister. Northern Ireland has an Assembly at Stormont, in Belfast, led by a First Minister. In class you filled a table of each country's political head and iconic landmark.",
            "The landmarks are worth learning because exam questions often ask you to name a place in each country. England: the London Eye, Stonehenge and York Minster. Scotland: Edinburgh Castle and the Isle of Skye. Wales: Snowdonia and Conwy Castle. Northern Ireland: the Giant's Causeway and the Dark Hedges."
          ],
          tip: "Learn the four capitals as one list, clockwise from the top: Edinburgh, London, Cardiff, Belfast."
        },
        {
          heading: "Physical and human features of the UK",
          paragraphs: [
            "The UK's key physical features are its coasts and rivers. The deck's coastal example is Lulworth Cove in Dorset, a rounded bay cut into the cliffs on the south coast. Its river example is the River Thames, which flows east across southern England and through London to the sea. You will study coasts and rivers properly later in Key Stage 3 and at GCSE.",
            "Human features are the ones people have made. Settlements are places where people live: villages, towns and cities. On the OS map of Bewdley you found the symbols for the station and the school and saw how the built-up area of the town is shaded. Economic activity means the work people do: farming, factories, shops and offices. Transport links join the settlements together: airports, ferry ports, railways and motorways, and inside London the Underground and Overground railways.",
            "Where you find each feature is not random. Big cities grew where rivers could be crossed or ships could land; motorways and railways run between the big cities; airports sit on flat land near them. Geographers call this pattern distribution, and describing it means using compass directions and place names: for example, most of the UK's largest cities are in England, and the biggest, London, is in the south-east."
          ],
          tip: "Physical means made by nature; human means made by people. A coast is physical, a port is human."
        },
        {
          heading: "The UK's cities and their populations",
          paragraphs: [
            "The deck's table gives the population of eleven UK cities in millions. London, in England, has 8.25 million people, far more than anywhere else. Birmingham, also in England, has 1.09 million. Then come Glasgow in Scotland with 0.6 million, Liverpool with 0.55, Bristol with 0.53, Sheffield with 0.52, Manchester with 0.51 and Leeds with 0.47 million, all in England except Glasgow. Edinburgh, the capital of Scotland, has 0.46 million; Cardiff, the capital of Wales, 0.35 million; and Belfast, the capital of Northern Ireland, 0.33 million. Be careful with Leeds: the deck's table lists it twice, once as 0.47 million and once as 0.44 million, so we leave Leeds out of the sums below and the department will tell you which figure is right.",
            "A table like this lets you do geography with numbers. The deck's question asked by how much the population of London and Manchester together is more than Edinburgh and Glasgow together. Step 1: 8.25 + 0.51 = 8.76 million. Step 2: 0.46 + 0.6 = 1.06 million. Step 3: 8.76 − 1.06 = 7.7 million. Set your working out in steps like that and you will not lose track. Notice too that the capital city is not always the biggest city: Glasgow is bigger than Edinburgh."
          ],
          worked: {
            q: "Using the deck's table, by how much is the population of London (8.25 million) and Manchester (0.51 million) more than Edinburgh (0.46 million) and Glasgow (0.6 million)?",
            steps: [
              "Add the first pair: 8.25 + 0.51 = 8.76 million.",
              "Add the second pair: 0.46 + 0.6 = 1.06 million.",
              "Subtract: 8.76 − 1.06 = 7.7 million.",
              "Check the sense: London alone is about eight times the two Scottish cities together, so an answer near 7.7 million is right."
            ],
            answer: "7.7 million",
            checks: [
              { expr: "LONDON_M+MANCHESTER_M", value: 8.76, tol: 0.001 },
              { expr: "EDINBURGH_M+GLASGOW_M", value: 1.06, tol: 0.001 },
              { expr: "(LONDON_M+MANCHESTER_M)-(EDINBURGH_M+GLASGOW_M)", value: 7.7, tol: 0.001 }
            ]
          },
          tip: "Population figures in a table are usually in millions. 0.51 million is 510 000 people, so write the unit in your answer."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which country is part of the British Isles but NOT part of the United Kingdom?", options: ["Republic of Ireland", "Northern Ireland", "Wales", "Scotland"], answer: 0, why: "The Republic of Ireland is an independent country on the island of Ireland. Northern Ireland, Wales and Scotland are all part of the UK.",
          feedback: [
            "",
            "Northern Ireland IS part of the United Kingdom; it is the fourth country in the UK's full name. The independent country on the same island is the Republic of Ireland.",
            "Wales is one of the four countries of the UK, and one of the three on Great Britain. The country outside the UK is the Republic of Ireland.",
            "Scotland is part of both Great Britain and the UK. The country in the British Isles but outside the UK is the Republic of Ireland."
          ] },
        { kind: "gap", q: "The capital city of Wales is ___.", answer: "Cardiff", options: ["Cardiff", "Swansea", "Belfast"], why: "Cardiff is the capital of Wales, where the Welsh parliament meets. Belfast is the capital of Northern Ireland.",
          feedback: {
            "Swansea": "Swansea is a large city in Wales, but the capital, where the Welsh parliament sits, is Cardiff.",
            "Belfast": "Belfast is the capital of Northern Ireland, across the sea from Wales. The capital of Wales is Cardiff."
          } },
        { kind: "numeric", q: "How many countries make up the United Kingdom?", answer: 4, tolerance: 0, units: "", check: "UK_COUNTRIES", why: "Four: England, Scotland, Wales and Northern Ireland.",
          misconceptions: [
            { answer: 3, says: "Three is the number of countries on the island of Great Britain: England, Scotland and Wales. The UK adds Northern Ireland, making four.", check: "UK_COUNTRIES-1" },
            { answer: 5, says: "You have counted the Republic of Ireland, which is in the British Isles but not in the UK. The UK has four countries.", check: "UK_COUNTRIES+1" },
            { answer: 2, says: "Great Britain and Ireland are two islands, but the UK is four countries: England, Scotland, Wales and Northern Ireland.", check: "MAIN_ISLANDS" }
          ] }
      ],
      modules: [
        {
          title: "Countries and capitals",
          task: {
            kind: "match",
            q: "Match each country of the United Kingdom to its capital city.",
            pairs: [
              ["England", "London"],
              ["Scotland", "Edinburgh"],
              ["Wales", "Cardiff"],
              ["Northern Ireland", "Belfast"]
            ]
          },
          contexts: [
            { label: "Flag quiz", q: "A quiz shows the four flags of the UK's countries. Match each country to its capital city." },
            { label: "Weather map", q: "A weather forecaster points to the four capital cities on a map of the UK. Match each country to its capital." }
          ],
          explain: "Say, in one sentence, which capital is on a different island from the other three.",
          levels: {
            support: {
              steps: [
                "London is the capital of England and of the whole UK.",
                "Edinburgh is in Scotland, in the north of Great Britain.",
                "Cardiff is in south Wales, in the west.",
                "Belfast is the only capital not on Great Britain: it is in Northern Ireland."
              ],
              example: {
                q: "Match: Republic of Ireland, France. Choices: Paris; Dublin.",
                steps: ["Dublin is the capital of the Republic of Ireland.", "Paris is the capital of France."],
                answer: "Republic of Ireland: Dublin. France: Paris."
              }
            },
            core: { hint: "Clockwise from the top of the map: Edinburgh, London, Cardiff, then across the sea to Belfast." },
            stretch: { extend: "Explain why the capital city is not always the biggest city, using Edinburgh and Glasgow as your example." }
          },
          why: "London (England), Edinburgh (Scotland), Cardiff (Wales) and Belfast (Northern Ireland) are the four capitals. Each is where that country's parliament or assembly meets."
        },
        {
          title: "Comparing cities with numbers",
          task: {
            kind: "numeric",
            q: "The deck's table gives London's population as 8.25 million and Birmingham's as 1.09 million. How many million more people live in London than in Birmingham?",
            answer: 7.16, tolerance: 0.001, units: "million", check: "LONDON_M-BIRMINGHAM_M",
            why: "8.25 − 1.09 = 7.16 million. London is more than seven million people bigger than the UK's second city.",
            misconceptions: [
              { answer: 9.34, says: "You added the two populations. The question asks how many MORE, so subtract: 8.25 − 1.09 = 7.16 million.", check: "LONDON_M+BIRMINGHAM_M" },
              { answer: 7.34, says: "You added the decimal parts instead of subtracting them: 8 − 1 = 7, then 0.25 + 0.09 = 0.34. Take the decimals away as well: 8.25 − 1.09 = 7.16 million.", check: "(LONDON_M//1-BIRMINGHAM_M//1)+(round(LONDON_M%1,2)+round(BIRMINGHAM_M%1,2))" },
              { answer: 7.7, says: "7.7 million is the answer to the deck's question about London and Manchester against Edinburgh and Glasgow. Here it is just London minus Birmingham: 7.16 million.", check: "(LONDON_M+MANCHESTER_M)-(EDINBURGH_M+GLASGOW_M)" }
            ]
          },
          contexts: [
            { label: "Newspaper headline", q: "A newspaper compares the two biggest UK cities: London with 8.25 million people and Birmingham with 1.09 million. How many million more people live in London?", check: "LONDON_M-BIRMINGHAM_M" },
            { label: "Bar chart", q: "On a bar chart, London's bar reaches 8.25 million and Birmingham's reaches 1.09 million. What is the difference between the two bars, in millions?", check: "LONDON_M-BIRMINGHAM_M" },
            { label: "Train journey", q: "A train runs from Birmingham (population 1.09 million) to London (population 8.25 million). How many million more people live at the London end?", check: "LONDON_M-BIRMINGHAM_M" }
          ],
          explain: "Say, in one sentence, what the word million does to your answer when you write it down.",
          levels: {
            support: {
              steps: [
                "Write the two figures with their decimal points lined up: 8.25 and 1.09.",
                "Subtract the whole numbers: 8 − 1 = 7.",
                "Subtract the decimals: 0.25 − 0.09 = 0.16.",
                "Put them together: 7.16 million. Say million in your answer."
              ],
              example: {
                q: "Glasgow has 0.6 million people and Edinburgh 0.46 million. How many million more people live in Glasgow?",
                steps: ["Line up the decimals: 0.60 and 0.46.", "0.60 − 0.46 = 0.14.", "0.14 million, which is 140 000 people."],
                answer: "0.14 million",
                checks: [{ expr: "GLASGOW_M-EDINBURGH_M", value: 0.14, tol: 0.001 }]
              }
            },
            core: { hint: "Subtract the smaller from the larger, keeping the decimal points lined up. The answer is in millions." },
            stretch: { extend: "Roughly how many times bigger is London than Birmingham? Show your working and comment on what that means for jobs and transport." }
          },
          why: "8.25 − 1.09 = 7.16. Keep the decimal points lined up and remember the unit: 7.16 million people."
        },
        {
          title: "Physical or human feature?",
          task: {
            kind: "mcq",
            q: "Which of these UK features is a physical feature?",
            options: ["Lulworth Cove on the Dorset coast", "The Houses of Parliament in London", "The M25 motorway", "Bewdley town centre"],
            answer: 0,
            feedback: [
              "",
              "The Houses of Parliament are a building made by people: a human feature and a landmark. The natural feature in the list is Lulworth Cove, a bay shaped by the sea.",
              "A motorway is built by people, so it is a human feature: a transport link. Lulworth Cove is the physical feature, made by nature.",
              "A town centre is a settlement, which is a human feature. Lulworth Cove, a bay cut by the sea, is physical."
            ]
          },
          explain: "Say, in one sentence, the test you used to tell a physical feature from a human one.",
          levels: {
            support: {
              steps: [
                "Physical features are made by nature: coasts, rivers, hills.",
                "Human features are made by people: buildings, roads, towns.",
                "Which option was not built by anyone?",
                "A cove is a bay cut by the sea, so it is physical."
              ],
              example: {
                q: "Is the River Thames a physical or a human feature? What about Hayes railway station?",
                steps: ["A river is made by nature: physical.", "A station is built by people: human."],
                answer: "The River Thames is physical; Hayes railway station is human."
              }
            },
            core: { hint: "Three of these were built. One was shaped by the sea." },
            stretch: { extend: "Choose one physical and one human feature of the UK and explain how they are connected, for example a river and a city built beside it." }
          },
          why: "Lulworth Cove is a bay shaped by the sea, so it is physical. Parliament, a motorway and a town centre were all made by people, so they are human features."
        }
      ]
    },

    /* ───────────── 6 · the UK in the world ───────────── */
    {
      key: "world", n: 6, title: "The UK in the world: latitude, longitude and a changing London",
      lead: "How the imaginary lines of latitude and longitude give every place on Earth an exact address, how to use them to find a country, how London has grown since 1677, and three ways of seeing what London means to different people.",
      covers: [9, 10],
      pretext: {
        words: [
          { word: "latitude", means: "imaginary lines drawn parallel around the globe", sentence: "Lines of latitude tell you how far north or south you are." },
          { word: "longitude", means: "imaginary lines running from the North Pole to the South Pole", sentence: "Lines of longitude tell you how far east or west you are." },
          { word: "equator", means: "the line of 0 degrees latitude around the middle of the Earth", sentence: "Countries near the equator are hot all year." },
          { word: "Greenwich Meridian", means: "the line of 0 degrees longitude, through Greenwich in London", sentence: "Time zones are measured from the Greenwich Meridian." },
          { word: "degrees", means: "the units used to measure latitude and longitude", sentence: "The UK is about 50 degrees north of the equator." },
          { word: "perceive", means: "to see or imagine something in a particular way", sentence: "Tourists perceive London as exciting." }
        ],
        passage: [
          "Lines of latitude and longitude are imaginary lines on maps and globes.",
          "They divide the world up so you can give an exact location.",
          "Lines of latitude run around the Earth, like flat rings.",
          "The equator is 0 degrees latitude.",
          "Other lines of latitude are north or south of the equator.",
          "Lines of longitude run over the top, from pole to pole.",
          "The Greenwich Meridian is 0 degrees longitude.",
          "Other lines of longitude are east or west of it.",
          "Both are measured in degrees.",
          "London has changed over time too.",
          "Maps from 1677, 1720, 1730 and 1843 show it growing bigger.",
          "London also means different things to different people.",
          "There is the real built city, the imagined city, and the city people live in."
        ]
      },
      sections: [
        {
          heading: "Lines around and lines over",
          paragraphs: [
            "Grid references find a place on one map. To find a place anywhere on Earth, geographers use a grid that covers the whole globe: lines of latitude and longitude. They are imaginary lines, drawn on maps and globes, that divide the world up so you can give an exact location. They measure the angular position of a place in degrees, written with a small circle: 50°.",
            "Lines which are drawn parallel around the globe are called lines of latitude. The line of 0 degrees latitude is called the equator, halfway between the poles. Other lines of latitude are north or south of the equator, so latitude tells you how far north or south you are. The deck's song calls them flat-itude, because the lines are flat rings around the Earth.",
            "Lines which connect the North and South Poles are called lines of longitude. The line of 0 degrees longitude is called the Greenwich Meridian, because it passes through Greenwich in London. Other lines of longitude are west or east of the Greenwich Meridian, so longitude tells you how far east or west you are. Latitude goes around; longitude goes over the top. On the globe sheet in class you labelled four things: a line of latitude, a line of longitude, the Prime Meridian (another name for the Greenwich Meridian) and the equator."
          ],
          tip: "Latitude: flat rings, north or south of the equator. Longitude: long lines pole to pole, east or west of Greenwich."
        },
        {
          heading: "Finding the treasure",
          paragraphs: [
            "A location is written as latitude first, then longitude, each with its direction letter. The treasure map task gave six coordinates and asked which country each one points to. 50°N 0°W is the United Kingdom, because the Greenwich Meridian runs through London and the UK lies around 50 to 60 degrees north. 40°N 100°W is the United States of America, in the middle of the country. 30°S 150°E is Australia, on its east coast. 10°S 60°W is Brazil, in the Amazon. 20°N 80°E is India. 30°S 25°E is South Africa.",
            "To find a coordinate, read the latitude first: find the line marked with that number of degrees north or south of the equator, and run your finger along it. Then read the longitude: find the line that many degrees east or west of Greenwich, and run your finger up or down it. Where your two fingers meet is the place. N or S always goes with latitude; E or W always goes with longitude."
          ],
          worked: {
            q: "Which country is at 40°N 100°W, and how do you find it?",
            steps: [
              "Latitude first: 40°N. Find the line 40 degrees north of the equator and follow it round the globe.",
              "Longitude second: 100°W. Find the line 100 degrees west of the Greenwich Meridian, which is in the Americas.",
              "Where the two lines cross is in the middle of North America.",
              "That is the United States of America, matching the deck's treasure map answer."
            ],
            answer: "The United States of America.",
            checks: [{ expr: "USA_LAT", value: 40, tol: 0 }, { expr: "USA_LON", value: 100, tol: 0 }]
          },
          tip: "Latitude then longitude, like along the corridor and up the stairs: but this time the up-and-down number comes first."
        },
        {
          heading: "How has London changed over time?",
          paragraphs: [
            "London is in the south-east of England, on the River Thames. In class you placed a post-it note for London on the UK map. It is easy to put the note too far north or too far west, so find the Thames first and work from there. Finding the biggest city correctly is the first step in describing anywhere else.",
            "The deck asked you to guess the year of four maps of London: 1677, 1720, 1730 and 1843. You date a map the way you dated the two maps of Bristol in chapter 3: by how much of it has been built on. The earliest of the four shows the smallest built-up area, with fields where much of today's London now stands. Each later map shows more streets and a larger built-up area, so the four can be put in order even with the dates covered up. From 1677 to 1843 is 166 years, and in that time the city grew many times over."
          ],
          worked: {
            q: "How many years passed between the deck's oldest London map (1677) and its newest (1843)?",
            steps: [
              "Subtract the earlier year from the later one: 1843 − 1677.",
              "1843 − 1600 = 243; 243 − 77 = 166.",
              "166 years passed.",
              "Check: 1677 + 166 = 1843."
            ],
            answer: "166 years",
            checks: [{ expr: "LONDON_MAP_4-LONDON_MAP_1", value: 166, tol: 0 }, { expr: "LONDON_MAP_3-LONDON_MAP_2", value: 10, tol: 0 }]
          },
          tip: "When maps have dates, work out the gap between them. Growth in a short gap means fast change."
        },
        {
          heading: "Different Londons: three ways of seeing a place",
          paragraphs: [
            "What does London mean to you? The answer depends on who you are. The deck gives three ways of seeing a place. The first is the physical built environment: the real streets, buildings, parks and railways. This can be mapped and measured. The deck calls it Firstspace. The second is the imagined environment: how a place is perceived, sold and marketed, in posters, films, websites and the pictures in people's heads. The deck calls it Secondspace. The third is the reality of living in a place: the lived experience, shaped by what people expected and by their own circumstances. The deck calls it Thirdspace.",
            "Think about the people in the deck's task. A Japanese student researching London for a project on cities knows the imagined London of websites and photographs: Secondspace. A homeless person who has lived on the streets for two years knows the lived London of cold pavements and doorways: Thirdspace. A primary school pupil visiting the Science Museum, a shop worker in Covent Garden, a driver on the Central Line, a pensioner in Camden, a commuter from Hitchin, a wealthy visitor from Canada: each one experiences a different London, and each one's London is real to them.",
            "This matters for geographers because a place is not just its map. The same street can be exciting for a tourist, exhausting for a shop worker and frightening for someone with nowhere to sleep. When you describe a place, say whose view you are describing."
          ],
          tip: "Firstspace is the city you can measure; Secondspace is the city people imagine; Thirdspace is the city people actually live."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is the name of the line of 0 degrees latitude?", options: ["The equator", "The Greenwich Meridian", "The North Pole", "The Tropic of Cancer"], answer: 0, why: "The equator is 0 degrees latitude. Other lines of latitude are measured north or south of it.",
          feedback: [
            "",
            "The Greenwich Meridian is 0 degrees LONGITUDE, the line running from pole to pole through London. The line of 0 degrees latitude, round the middle of the Earth, is the equator.",
            "The North Pole is a point at 90 degrees north, the top of the globe. The line of 0 degrees latitude is the equator, halfway between the poles.",
            "The Tropic of Cancer is a line of latitude north of the equator, not 0 degrees. The 0 degree line is the equator itself."
          ] },
        { kind: "gap", q: "Lines of longitude are measured east or west of the ___ Meridian, which passes through London.", answer: "Greenwich", options: ["Greenwich", "Equator", "London"], why: "The line of 0 degrees longitude is the Greenwich Meridian, also called the Prime Meridian, which passes through Greenwich in London.",
          feedback: {
            "Equator": "The equator is a line of latitude, not longitude, and it runs around the Earth, nowhere near London. The 0 degree line of longitude is the Greenwich Meridian.",
            "London": "Close: the line does pass through London, but it is named after Greenwich, the part of London it runs through. It is the Greenwich Meridian."
          } },
        { kind: "mcq", q: "A travel website shows photographs of London's landmarks to persuade tourists to visit. Which of the deck's three spaces is this?", options: ["Secondspace: the imagined environment", "Firstspace: the physical built environment", "Thirdspace: the lived experience"], answer: 0, why: "How a city is sold, marketed and imagined is Secondspace. The real buildings are Firstspace; actually living there is Thirdspace.",
          feedback: [
            "",
            "Firstspace is the real, physical city that can be mapped and measured. A website selling an image of London is about how the city is perceived and marketed: Secondspace.",
            "Thirdspace is the reality of living in London day to day. Photographs chosen to persuade tourists are the imagined, marketed city: Secondspace."
          ] }
      ],
      modules: [
        {
          title: "Treasure map coordinates",
          task: {
            kind: "match",
            q: "Match each set of coordinates from the treasure map to the country it points to.",
            pairs: [
              ["50°N 0°W", "United Kingdom"],
              ["40°N 100°W", "United States of America"],
              ["30°S 150°E", "Australia"],
              ["10°S 60°W", "Brazil"],
              ["20°N 80°E", "India"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read the latitude first. N means north of the equator; S means south.",
                "Read the longitude second. W means west of Greenwich (towards the Americas); E means east (towards Asia and Australia).",
                "0°W is on the Greenwich Meridian itself, so that coordinate must be in the UK.",
                "Two coordinates are in the south (S): one far east (Australia) and one west (Brazil). Two are north and far from Greenwich: one west (USA) and one east (India)."
              ],
              example: {
                q: "Which of these is more likely to be in Africa: 30°S 25°E or 40°N 100°W?",
                steps: ["Africa is south of Europe and only a little east of Greenwich.", "30°S 25°E fits: south of the equator, slightly east. That is South Africa.", "40°N 100°W is far to the west, in North America."],
                answer: "30°S 25°E is South Africa; 40°N 100°W is in North America."
              }
            },
            core: { hint: "0°W must be on the Greenwich line. S means southern hemisphere. Large W means the Americas; large E means Asia or Australia." },
            stretch: { extend: "Write the approximate coordinates of Hayes, to the nearest 10 degrees, and explain how you worked out each half." }
          },
          explain: "Say, in one sentence, how the letter W or E told you which side of the world to look.",
          why: "Latitude gives north or south of the equator; longitude gives east or west of Greenwich. 0°W puts the UK on the Greenwich line; 100°W is the Americas (USA); 60°W south of the equator is Brazil; 150°E in the south is Australia; 80°E in the north is India."
        },
        {
          title: "London's maps in order",
          task: {
            kind: "order",
            q: "Put the deck's four maps of London in order from oldest to newest.",
            items: [
              "The 1677 map: the earliest of the four, with the smallest built-up area",
              "The 1720 map: a larger built-up area than the earliest map",
              "The 1730 map: ten years later again, with more streets",
              "The 1843 map: the largest built-up area of the four"
            ]
          },
          contexts: [
            { label: "Museum display", q: "A museum wants to hang the deck's four London maps along a wall so visitors walk forward in time. Put them in order from oldest to newest." },
            { label: "Timeline", q: "You are drawing a timeline of London's growth using the deck's four maps. Put them in date order, oldest first." }
          ],
          explain: "Say, in one sentence, how the size of the built-up area helps you date a map of London.",
          levels: {
            support: {
              steps: [
                "Find the smallest year number: 1677. That is the oldest.",
                "1720 comes before 1730, because 20 is less than 30.",
                "1843 is the largest year number, so it is the newest.",
                "Check: the built-up area should get bigger as you go along the sequence."
              ],
              example: {
                q: "Put these maps of Bristol in order, oldest first: 1946, 1866.",
                steps: ["1866 is the smaller year, so it is older.", "1946 comes after it."],
                answer: "1866, then 1946."
              }
            },
            core: { hint: "Smallest year first. The two maps ten years apart sit in the middle." },
            stretch: { extend: "Explain two reasons why London grew so much between 1730 and 1843, using what you know about industry, railways and the Thames." }
          },
          why: "The maps run 1677, 1720, 1730, 1843. Each later map shows a larger built-up area, so the size of the city confirms the date order."
        },
        {
          title: "What does London mean to different people?",
          task: {
            kind: "written",
            q: "Choose two people from the deck's list (for example a tourist researching London, a homeless person, a shop worker in Covent Garden, a commuter from Hitchin). Explain what London means to each of them, and which of the three spaces each one mostly experiences. Write one paragraph of six to eight sentences.",
            marks: 6,
            criteria: [
              "I name two different people from the list and describe the London each one experiences.",
              "I say which space each person mostly experiences (Firstspace, Secondspace or Thirdspace) and explain why.",
              "I use one detail about London's physical built environment, such as a named place, railway line or landmark.",
              "I explain how expectations and personal circumstances shape the lived experience of at least one person.",
              "I finish with a sentence saying why a geographer needs more than a map to understand a place."
            ],
            model: "A Japanese student researching London for a project on cities mostly experiences Secondspace, the imagined London: the websites and photographs she reads show the London Eye, red buses and Covent Garden, and that is how she perceives the city. A homeless person who has lived on the streets for two years experiences Thirdspace, the lived reality: the same Covent Garden means cold doorways, crowds who walk past without looking, and the need to find somewhere safe each night. Both are looking at the same Firstspace, the physical city of streets and buildings that can be mapped and measured, but what London means to each of them is completely different. Their circumstances, not the buildings, shape their experience. This is why a geographer needs more than a map to understand a place: a map shows the Firstspace, but a place is also how it is imagined and how it is lived."
          },
          levels: {
            support: {
              steps: [
                "Pick two people whose Londons will be very different, for example a tourist and a homeless person.",
                "Sentences 1 and 2: who the first person is and what London is like for them. Name their space.",
                "Sentences 3 and 4: the same for the second person.",
                "Sentence 5: say that both see the same real city (Firstspace) but experience it differently.",
                "Sentence 6: explain how circumstances or expectations shape one person's experience. Sentence 7: say why a map alone is not enough."
              ],
              example: {
                q: "In two sentences, say what London means to a commuter who travels in from Hitchin every weekday, and which space that is.",
                steps: ["Describe the commuter's daily London: trains, stations, the office.", "That is lived experience, so Thirdspace."],
                answer: "For a commuter from Hitchin, London is a crowded train, a rush through King's Cross station and an office, five days a week. That is Thirdspace, the lived experience of the city, shaped by the routine of work."
              }
            },
            core: { hint: "Two people, two spaces, one real city they share, one reason their experiences differ, one closing sentence about maps." },
            stretch: { extend: "Add a third person whose London is mostly Firstspace, such as a town planner measuring the streets, and explain what they would miss." }
          },
          explain: "Say, in one sentence, the difference between Secondspace and Thirdspace.",
          why: "A strong answer names two people, matches each to a space with a reason, shows that they share the same physical city, and explains that expectations and circumstances make the lived experience different."
        }
      ]
    }
  ],

  sources: {
    deckDump: "gg_y07_unit_1_my_local_place_and_the_world.txt",
    decksUsed: ["WK1and2_Introduction.pptx", "WK3_How can find our way round the sch.pptx", "WK4and5_WHAT IS MY LOCAL TOWN FAMOUS FOR.pptx", "Week6_The United kingdom_yr7.pptx"],
    notes: "Lesson titles, sequence, key words, definitions, grid-reference examples, scales, census figures, Hayes history and UK facts come from the four department decks only. House furniture (dated title slides, seating plans, bell work, homework and Kerboodle reading slides, the Prior Learning/Components sheet, the end-of-topic test and DIT slides) was used only to fix the lesson sequence. Answer slides (Intro 33; WK3 60, 75, 81, 82; WK4and5 12, 17, 27, 34; Week6 30, 65) were read to see what the deck teaches; none is reproduced as pupil work and verify.py bans their distinctive wording. The Royal Geographical Society definition on WK1and2 slide 18 is paraphrased, not quoted. Every number is held in the FACTS table in verify.py and recomputed; the deck's percentage-increase figure (21.7 %) is corrected to 27.7 %, and that correction and the deck's other faults (HMI for HMV, Conway for Conwy, Giants for Giant's, Prime Minister of England, Leeds listed twice so eleven cities not twelve) are recorded in NOTES.md section 4. The five population figures are attributed to the deck's own table rather than to the census, because 1990, 2000, 2010 and 2015 are not census years (NOTES.md open question 1). No pretext.l1 (translation is a separate pass) and no meta.constellation. No text is quoted from any source."
  }
};
