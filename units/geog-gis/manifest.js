// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 Geography · Year 8 Unit 3 · Geographic Information Systems (GIS) (foundations for AQA GCSE
// Geography 8035, 3.4 Geographical skills: cartographic skills, including the use of GIS) · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression) and are recomputed; their misconceptions carry `check` too.
//   every number that appears in pupil-facing text is matched against the FACTS table held in verify.py (deck-only facts,
//   grid-reference exercise numbers held as DERIVED, small counts and mark allocations).
//   every "order" task is compared with the canonical sequence held in verify.py (the deck's own ArcGIS steps, slides 19–23);
//   every match task with canonical pairs; every mcq / gap answer with the independent answer key.
//   passage sentences are counted (8–14 per chapter, ≤ 20 words each) and all text is linted for known misconceptions
//   (a heat map shows temperature; latitude lines run pole to pole; northing before easting; the Equator as 0° longitude),
//   for facts the deck does not give (the year, street or district of Dr Snow's map; the school's coordinates) and for
//   deck residue (the YouTube link, teacher asides, slide furniture).
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions`; every module carries
//   `explain`; one module per chapter carries `contexts` that never redefine the answer; `connections` ⊂ glossary;
//   no `pretext.l1`, no `meta.constellation`, no widget (no map widget exists; the ArcGIS screens are described in words).
// No text is quoted from any source: there are no curly-quoted passages anywhere in this file (verify.py fails if one appears).
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["geog-gis"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "geog-gis",
    subjectKey: "geography",
    subject: "Geography",
    board: "AQA",
    spec: "KS3 → 8035",
    specRef: "KS3 Year 8 Unit 3: Geographic Information Systems (GIS) — foundations for AQA GCSE Geography 8035, 3.4 Geographical skills (cartographic skills: maps, grid references, latitude and longitude, and the use of GIS)",
    year: 8,
    tier: "KS3",
    title: "Geographic Information Systems (GIS)",
    sub: "How a computer turns data about places into layered maps, and how you build your own maps of your school and the world in ArcGIS Online.",
    bigQuestion: "How does a GIS turn data about places into maps that help people make decisions, and how do you make one yourself?",
    lessonCount: 3,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  // The department's own lesson sequence, from the single deck GIS lesson_year8.pptx. The deck marks three lessons:
  // Lesson 1 (slides 3–12, Introduction to GIS), Lesson 2 (slides 13–25, Creating maps in GIS: Harlington School) and
  // Lesson 3 (slides 26–40, the world maps from the Living Atlas, revision and the half-term progress check).
  lessons: [
    { n: 1, title: "Introduction to GIS", question: "What is a GIS, what are its four components, and why does every piece of data need its latitude and longitude?", keywords: ["GIS", "latitude", "longitude", "GIS layer", "heat map", "Dr Snow"] },
    { n: 2, title: "Creating maps in GIS: Harlington School with its surrounding streets", question: "How do you create a map with human features in ArcGIS Online, measure a distance and read a latitude and longitude?", keywords: ["ArcGIS Online", "map notes", "human features", "measure tool", "location tool", "My Content"] },
    { n: 3, title: "World maps from the Living Atlas, revision and the progress check", question: "How do you add Living Atlas layers for earthquakes, volcanoes and ecosystems, and what will the progress check ask?", keywords: ["Living Atlas", "layer", "legend", "earthquakes", "volcanic eruptions", "ecosystems"] }
  ],

  glossary: [
    { term: "latitude", means: "How far north or south of the Equator a place is, measured in degrees.", chapter: "finding-places" },
    { term: "longitude", means: "How far east or west of the Greenwich Meridian a place is, measured in degrees.", chapter: "finding-places" },
    { term: "Equator", means: "The line of 0° latitude that runs around the middle of the Earth.", chapter: "finding-places" },
    { term: "grid reference", means: "A number code that names a square or a point on a map. Read along the bottom first, then up the side.", chapter: "finding-places" },
    { term: "GIS", means: "Geographic Information System: a computer system that stores data about places and shows it on a map.", chapter: "what-is-gis" },
    { term: "layer", means: "One set of data in a GIS, such as roads or earthquakes. Layers can be stacked on one map.", chapter: "what-is-gis" },
    { term: "data", means: "The information a GIS stores about places. In a GIS map the data is held as layers.", chapter: "what-is-gis" },
    { term: "heat map", means: "A map that uses colour to show where there is more or less of something, such as crime.", chapter: "what-is-gis" },
    { term: "human feature", means: "Something people have built or made, such as a road, a school or a shop.", chapter: "uses-of-gis" },
    { term: "physical feature", means: "A natural part of the landscape, such as a river, a hill or a coast.", chapter: "uses-of-gis" },
    { term: "census", means: "The official count of everyone in the country, which gives data such as the number of births.", chapter: "uses-of-gis" },
    { term: "hazard", means: "Something natural that can harm people, such as an earthquake or a volcano.", chapter: "uses-of-gis" },
    { term: "map notes", means: "The ArcGIS Online tool that lets you add your own symbols and labels for features to a map.", chapter: "making-a-map" },
    { term: "measure tool", means: "The ArcGIS Online tool that finds the distance between two points on the map.", chapter: "making-a-map" },
    { term: "Living Atlas", means: "A library of ready-made data layers that you can add to your map in ArcGIS Online.", chapter: "world-maps" },
    { term: "legend", means: "The part of a map that tells the reader what each symbol and colour means.", chapter: "world-maps" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 glossary terms used exactly once. The fourth group mixes chapters 4 and 5
  // on purpose: it is the set of ArcGIS Online tools the pupil uses, whichever map they are building.
  connections: [
    { group: "Finding a place", terms: ["latitude", "longitude", "Equator", "grid reference"] },
    { group: "Inside a GIS", terms: ["GIS", "layer", "data", "heat map"] },
    { group: "What a GIS can show", terms: ["human feature", "physical feature", "census", "hazard"] },
    { group: "Tools in ArcGIS Online", terms: ["map notes", "measure tool", "Living Atlas", "legend"] }
  ],

  chapters: [
    /* ───────────── 1 · finding places before GIS ───────────── */
    {
      key: "finding-places", n: 1, title: "Finding places before GIS",
      lead: "The map skills a GIS is built on: latitude and longitude, grid references, and how Dr Snow found a pattern on a paper map long before computers.",
      covers: [1],
      pretext: {
        words: [
          { word: "latitude", means: "how far north or south of the Equator a place is", sentence: "The latitude of a place tells you how far north or south it is." },
          { word: "longitude", means: "how far east or west of the Greenwich Meridian a place is", sentence: "London has a longitude close to 0° because the Greenwich Meridian runs through it." },
          { word: "Equator", means: "the line of 0° latitude around the middle of the Earth", sentence: "Countries on the Equator are hot all year round." },
          { word: "grid reference", means: "a number code that names a square or a point on a map", sentence: "Give the four-figure grid reference of the square with the church in it." },
          { word: "pattern", means: "something that repeats or clusters, so that you can spot it", sentence: "The marks on the map made a pattern around one street." }
        ],
        passage: [
          "Every place on Earth has an address made of two numbers.",
          "The first number is its latitude.",
          "Latitude tells you how far north or south of the Equator a place is.",
          "The Equator is the 0° line of latitude.",
          "The second number is its longitude.",
          "Longitude tells you how far east or west of the Greenwich Meridian a place is.",
          "The Greenwich Meridian is the 0° line of longitude, and it runs through London.",
          "On a local map we use grid references instead.",
          "Read the number along the bottom first, then the number up the side.",
          "Long before computers, Dr Snow used a paper map to study a deadly disease.",
          "He marked where each person had died and looked for a pattern.",
          "His map showed that the deaths were clustered around one water pump."
        ]
      },
      sections: [
        {
          heading: "Latitude and longitude: the Earth's address system",
          paragraphs: [
            "Imagine trying to tell a computer where your school is. You cannot say near the shops or just past the park: a computer needs numbers. The Earth has an address system made of two numbers for every place, and you met it in Year 7. The first is latitude. Lines of latitude run around the Earth from east to west, parallel to the Equator, and they measure how far north or south of the Equator a place is, in degrees. The Equator itself is 0° latitude.",
            "The second number is longitude. Lines of longitude run the long way, from the North Pole to the South Pole. They measure how far east or west a place is from the Greenwich Meridian, the line of 0° longitude, which passes through Greenwich in London. Put the two numbers together and you have pinned down one single point on the planet.",
            "Hold on to this idea, because the whole unit depends on it. A GIS is a computer system, and a computer can only put a piece of information on a map if it knows the latitude and longitude of the place it belongs to. In Chapter 2 you will see that every piece of GIS data carries these two numbers."
          ],
          tip: "Latitude is flat: its lines lie flat around the Earth like the rungs of a ladder. Longitude is long: its lines run the long way from pole to pole."
        },
        {
          heading: "Grid references: along the corridor, then up the stairs",
          paragraphs: [
            "On a local map, such as an Ordnance Survey map or a street map of a town, we do not usually use latitude and longitude. We use a grid of numbered lines instead. The lines that run up the map are numbered along the bottom; the lines that run across the map are numbered up the side. A four-figure grid reference names one whole square. A six-figure grid reference names a point inside a square, and you learned both in Year 7.",
            "The rule is the one in the mnemonic your teacher asked you to remember: along the corridor, then up the stairs. Read the number along the bottom first, then the number up the side. A square whose bottom-left corner sits where the bottom number 23 meets the side number 45 has the grid reference 2345. Swap them round and you land in a completely different square.",
            "You will need this skill again in Chapter 3, where the police use a GIS map of crimes and your deck asks for the four-figure grid reference of the place where a mugging is being investigated. A GIS can show the grid lines for you, but reading them is still your job."
          ],
          worked: {
            q: "On a map, a square's bottom-left corner is where the number 23 along the bottom meets the number 45 up the side. Give the four-figure grid reference of the square. (1 mark)",
            steps: [
              "Along the corridor first: the number along the bottom is 23, so the grid reference starts 23.",
              "Then up the stairs: the number up the side is 45, so the grid reference ends 45.",
              "Write the two numbers together, with no space or comma: 2345."
            ],
            answer: "2345",
            checks: [{ expr: "23*100+45", value: 2345, tol: 0 }]
          },
          tip: "Bottom first, side second. If you get them the wrong way round, you point to a different square."
        },
        {
          heading: "Dr Snow's map: finding a pattern without a computer",
          paragraphs: [
            "Your deck opens the unit with a case study from long before computers existed. Dr Snow was a doctor in London at a time when cholera, a deadly disease, was killing people in one part of the city. Nobody knew for certain how it spread, and many people believed it was carried in bad air.",
            "Dr Snow did something that geographers still do today. He collected the data himself: he went to the streets where people were dying and recorded the address of each death. Then he marked every death on a paper map of the area and looked for a pattern. This took days of walking and careful writing. There was no computer to do it for him.",
            "The pattern was clear once it was on the map. The deaths were clustered around one water pump. The map showed that the disease was spreading through the water people drank, not through the air. Hold this story in your mind as you read Chapter 2: data about places, each piece tied to its location, put on a map so a pattern shows. That is exactly what a GIS does, only much faster."
          ],
          tip: "For a case-study answer, cover three things: who Dr Snow was, what he did, and what his map showed."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which line is at 0° latitude?", options: ["The Greenwich Meridian", "The Equator", "The North Pole", "The International Date Line"], answer: 1, why: "The Equator is the 0° line of latitude, running around the middle of the Earth. The Greenwich Meridian is the 0° line of longitude.",
          feedback: [
            "The Greenwich Meridian is the 0° line of longitude, not latitude. It runs from pole to pole through London. The 0° line of latitude is the Equator.",
            "",
            "The North Pole is a point at the very top of the Earth, not a line of latitude. The 0° line of latitude is the Equator, around the middle of the Earth.",
            "The International Date Line is a line of longitude on the far side of the Earth from Greenwich. The 0° line of latitude is the Equator."
          ] },
        { kind: "gap", q: "Lines of latitude tell you how far ___ or south of the Equator a place is.", answer: "north", options: ["north", "east", "west"], why: "Latitude measures distance north or south of the Equator. East and west belong to longitude.",
          feedback: {
            "east": "East and west are measured by longitude, from the Greenwich Meridian. Latitude measures how far north or south of the Equator a place is.",
            "west": "West, like east, is measured by longitude, from the Greenwich Meridian. Latitude measures how far north or south of the Equator a place is."
          } },
        { kind: "numeric", q: "A map square has its bottom-left corner where the number 23 along the bottom meets the number 45 up the side. Give the four-figure grid reference of the square.", answer: 2345, tolerance: 0, units: "", check: "23*100+45", why: "Along the corridor first (23), then up the stairs (45): 2345.",
          misconceptions: [
            { answer: 4523, check: "45*100+23", says: "You read the number up the side first. The rule is along the corridor, then up the stairs: the bottom number 23 comes first, so the grid reference is 2345." },
            { answer: 2346, check: "23*100+46", says: "You used the top-left corner of the square. A four-figure grid reference always uses the bottom-left corner, so the side number is 45, not 46: 2345." },
            { answer: 2446, check: "24*100+46", says: "You used the top-right corner of the square. A four-figure grid reference uses the bottom-left corner, where 23 meets 45: 2345." }
          ] }
      ],
      modules: [
        {
          title: "Snow's method, step by step",
          task: {
            kind: "order",
            q: "Put the steps of Dr Snow's method in the order he did them, from first to last.",
            items: ["Go to the streets where people are falling ill", "Record the address of every death", "Mark each death on a paper map", "Look for a pattern in the marks", "Draw a conclusion about the cause"]
          },
          contexts: [
            { label: "A litter survey", q: "Your class wants to find out why one part of the school is always littered. Put the same five steps, used for litter instead of a disease, in order from first to last." },
            { label: "A lost phone", q: "Phones keep going missing in one year group. The head of year uses Dr Snow's method. Put the five steps in the order she would do them." },
            { label: "A nature club", q: "A nature club wants to know where frogs are found around the school pond. Put Dr Snow's five steps in the order the club should follow." }
          ],
          levels: {
            support: {
              steps: [
                "Start where the information comes from: you cannot record anything until you are in the right place.",
                "Collecting comes before plotting: you need the addresses before you can put them on a map.",
                "Plotting comes before spotting: the pattern only appears once the marks are on the map.",
                "The conclusion is always last. It is the answer, and you cannot reach it until you have seen the pattern."
              ],
              example: {
                q: "Put the steps of a traffic survey in order: draw a bar chart, choose a spot by the road, count the vehicles for ten minutes.",
                steps: ["You cannot count anything until you are standing by the road, so choosing the spot comes first.", "Counting the vehicles is the collecting step, so it comes second.", "The bar chart shows the pattern, so it comes last."],
                answer: "choose a spot by the road, count the vehicles for ten minutes, draw a bar chart"
              }
            },
            core: { hint: "Collect, then plot, then look, then decide. Where does the walking fit?" },
            stretch: { extend: "A GIS does three of these five steps for you in seconds. Say which three, and explain which two steps still need a person." }
          },
          explain: "Say, in one sentence, why the pattern could not be seen before the deaths were put on the map.",
          why: "Dr Snow went to the streets, recorded each death, marked the deaths on a map, saw the pattern around one pump and then concluded that the water was spreading the disease."
        },
        {
          title: "What did the map show?",
          task: {
            kind: "mcq",
            q: "What did Dr Snow's map show?",
            options: [
              "The deaths were spread evenly across the whole city",
              "The deaths happened only on rainy days",
              "The deaths were clustered around one water pump",
              "The deaths were all in the newest houses"
            ],
            answer: 2,
            feedback: [
              "If the deaths had been spread evenly there would have been no pattern to find. The map was useful because the deaths were clustered around one water pump.",
              "A paper map cannot show the weather on each day. What it showed was where the deaths were, and they were clustered around one water pump.",
              "",
              "The map showed where the deaths were, not how new the houses were. The deaths were clustered around one water pump, which pointed to the water as the cause."
            ]
          },
          levels: {
            support: {
              steps: [
                "Remember what Dr Snow put on his map: one mark for every death.",
                "A pattern means the marks are not spread out evenly. They gather in one place.",
                "Ask: what was in the middle of the gathering? Something people used every day.",
                "Pick the option that names a cluster and the water pump."
              ],
              example: {
                q: "A teacher marks on a plan of the school where every lost jumper was found. Nearly all the marks are in the sports hall. What does the plan show?",
                steps: ["The marks are not spread out evenly, so there is a pattern.", "The marks gather in the sports hall.", "So the plan shows that jumpers are mostly lost during PE, in the sports hall."],
                answer: "Lost jumpers are clustered in the sports hall, so that is where most of them are left."
              }
            },
            core: { hint: "Clustered, not spread out. What were the deaths clustered around?" },
            stretch: { extend: "Explain why a list of the same addresses, written in a notebook, would not have shown Dr Snow what the map showed." }
          },
          explain: "Say, in one sentence, what a cluster of marks on a map tells a geographer.",
          why: "The deaths were clustered around one water pump, so the map pointed to the water from that pump as the way the disease was spreading."
        },
        {
          title: "Reading the crime map",
          task: {
            kind: "numeric",
            q: "On the police GIS map, the mugging is in the square whose bottom-left corner is where the number 61 along the bottom meets the number 32 up the side. Give the four-figure grid reference of the square.",
            answer: 6132, tolerance: 0, units: "", check: "61*100+32",
            misconceptions: [
              { answer: 3261, check: "32*100+61", says: "You read the number up the side first. Along the corridor first: the bottom number 61, then the side number 32, gives 6132." },
              { answer: 6133, check: "61*100+33", says: "You used the top-left corner of the square. A four-figure grid reference uses the bottom-left corner, so the side number is 32: 6132." },
              { answer: 6233, check: "62*100+33", says: "You used the top-right corner. A four-figure grid reference always uses the bottom-left corner of the square, where 61 meets 32: 6132." }
            ]
          },
          contexts: [
            { label: "A treasure map", q: "On a treasure map, the chest is in the square whose bottom-left corner is where the number 61 along the bottom meets the number 32 up the side. Give the four-figure grid reference of the square.", check: "61*100+32" },
            { label: "A school trip", q: "On the map for a school trip, the picnic field is in the square whose bottom-left corner is where the number 61 along the bottom meets the number 32 up the side. Give the four-figure grid reference of the square.", check: "61*100+32" },
            { label: "A weather station", q: "A weather station stands in the square whose bottom-left corner is where the number 61 along the bottom meets the number 32 up the side. Give the four-figure grid reference of the square.", check: "61*100+32" }
          ],
          levels: {
            support: {
              steps: [
                "Find the bottom-left corner of the square. That corner gives you both numbers.",
                "Along the corridor: write the number from along the bottom first.",
                "Up the stairs: write the number from up the side straight after it.",
                "Check you have four figures and no space between them."
              ],
              example: {
                q: "A church is in the square whose bottom-left corner is where the number 17 along the bottom meets the number 58 up the side. Give the four-figure grid reference.",
                steps: ["Bottom number first: 17.", "Side number second: 58.", "Together: 1758."],
                answer: "1758",
                checks: [{ expr: "17*100+58", value: 1758, tol: 0 }]
              }
            },
            core: { hint: "Along the corridor (bottom number), then up the stairs (side number). Bottom-left corner only." },
            stretch: { extend: "Explain why a six-figure grid reference would help the police more than a four-figure one when they go to the scene." }
          },
          explain: "Say, in one sentence, why the bottom number is always written before the side number.",
          why: "Along the corridor first (61), then up the stairs (32): the square is 6132. The GIS draws the grid, but reading it is the same skill you learned in Year 7."
        }
      ]
    },

    /* ───────────── 2 · what is a GIS? ───────────── */
    {
      key: "what-is-gis", n: 2, title: "What is a GIS?",
      lead: "A Geographic Information System: its four components, data stored as layers you can stack, why every piece of data needs its latitude and longitude, and what a heat map is.",
      covers: [1],
      pretext: {
        words: [
          { word: "GIS", means: "Geographic Information System: a computer system that stores data about places and shows it on a map", sentence: "The police used a GIS to see where the car thefts were happening." },
          { word: "data", means: "information, often numbers or facts, that has been collected", sentence: "The data showed how many babies were born in each area." },
          { word: "layer", means: "one set of data in a GIS, laid over the map", sentence: "She added a layer of earthquakes on top of the world map." },
          { word: "heat map", means: "a map that uses colour to show where there is more or less of something", sentence: "The heat map was dark red where most of the crimes happened." },
          { word: "software", means: "the program that runs on a computer", sentence: "ArcGIS Online is the GIS software we use at school." },
          { word: "hardware", means: "the computer or tablet itself, the part you can touch", sentence: "Our hardware is the laptop trolley in the geography room." }
        ],
        passage: [
          "GIS stands for Geographic Information System.",
          "It is a computer system that stores information about places and shows it on a map.",
          "A GIS has four components.",
          "The hardware is the computer itself.",
          "The software is the program that draws the maps.",
          "The data is the information about places.",
          "The people are the users who ask questions and read the maps.",
          "In a GIS, each set of data is called a layer.",
          "You can stack many layers on one map, like sheets of clear plastic.",
          "Every piece of data needs its latitude and longitude.",
          "That is how the computer knows where to put it on the map.",
          "A heat map uses colour to show where there is more or less of something.",
          "In the UK, a company called Esri makes the GIS software ArcGIS."
        ]
      },
      sections: [
        {
          heading: "Four components, one system",
          paragraphs: [
            "GIS stands for Geographic Information System. It is a computer system that stores information about places and displays it on a map. Notice that a GIS is more than a map. A paper map shows you what somebody else chose to draw. A GIS holds the data behind the map, so you can ask it questions: show me only the schools, show me where the earthquakes were this year, show me the streets with the most crime.",
            "Your textbook describes a GIS as having four components, and the progress check will ask you to use them. The hardware is the computer or tablet the GIS runs on. The software is the program that stores the data and draws the map. The data is the information about places. The people are the users who collect the data, ask the questions and read the results. Take any one away and there is no GIS: a computer with no data is an empty map, and data with no software is just a list.",
            "Your deck's stretch question asks which company provides GIS software in the UK and what the software is called. The company is Esri, and the software is ArcGIS. The version you use at school, through a web browser, is ArcGIS Online. When you log in to it, you are one of the people, your laptop is the hardware, ArcGIS Online is the software, and the layers you add are the data."
          ],
          worked: {
            q: "Describe how to use a GIS to display a map on a computer, using the four components of a GIS. (2 marks)",
            steps: [
              "Name all four components somewhere in your answer: hardware, software, data and people.",
              "Put them in the order they are used: a person opens the software on the computer, then adds data.",
              "Finish with what the software does with the data: it places each piece by its latitude and longitude and draws the map."
            ],
            answer: "A person (the people) opens the GIS software on a computer (the hardware) and adds the data as layers. The software uses the latitude and longitude of each piece of data to place it in the right spot and draws the map on the screen."
          },
          tip: "Hardware, software, data, people. Say them in that order and you will not forget one."
        },
        {
          heading: "Layers: data you can stack",
          paragraphs: [
            "In a GIS, the data is organised into layers. One layer holds one kind of information: a layer of roads, a layer of rivers, a layer of schools, a layer of earthquakes. Each layer is drawn on top of the base map, and you can switch any layer on or off. When the progress check asks what the information or data in a GIS map is called, the answer is layers.",
            "The best way to picture layers is as sheets of clear plastic. Draw the roads on one sheet, the rivers on another and the schools on a third. Lay them on top of each other and you see all three at once. Lift one off and it disappears without disturbing the others. A GIS does the same thing on a screen, and you can stack as many layers as you like.",
            "Stacking is where a GIS becomes powerful. On their own, a layer of crimes and a layer of street lights are two separate facts. Laid on top of each other, they might show that the crimes happen where the lights are missing. That is a question a paper map could never answer so quickly. You will use this idea in Chapter 3, and you will build layers yourself in Chapters 4 and 5."
          ],
          tip: "One layer, one kind of data. Stack layers to compare them."
        },
        {
          heading: "Why latitude and longitude, and what is a heat map?",
          paragraphs: [
            "Here is the link back to Chapter 1. Every piece of data in a GIS needs its latitude and longitude recorded. A death, a crime or an earthquake is only useful on the map if the computer knows exactly where it happened. The latitude and longitude are the address the software reads, so that the data shows up in the right place. This is why, when your teacher asks you to collect data for a GIS, you record the coordinates of each place too. The progress check asks how we make sure our data appears in the right place, and this is the answer.",
            "A heat map is one of the clearest things a GIS can draw. Instead of a dot for every piece of data, it colours the map to show where there is more or less of something. A heat map of crime might be dark red on the streets with the most crimes and pale yellow where there are few. A heat map of a disease, such as Covid-19, shows where the most cases are, which helps scientists study where it is spreading.",
            "One warning. A heat map is not about heat. The name comes from the colours, which run from cool to hot, not from temperature. A heat map could show births, car thefts, earthquakes or litter. Whatever the data, the darkest colour means the most."
          ],
          tip: "A heat map is not about heat: the colour shows how much, not how hot. Always give an example when you define it."
        }
      ],
      gate: [
        { kind: "mcq", q: "In a GIS, what are the sets of information or data shown on the map called?", options: ["Templates", "Layers", "Legends", "Grid squares"], answer: 1, why: "The data in a GIS is held as layers, each one showing one kind of information, which can be stacked on the map.",
          feedback: [
            "A template is a ready-made set of symbols you choose when you add map notes. The data itself is held as layers.",
            "",
            "A legend tells the reader what the symbols and colours mean. The data shown on the map is held as layers.",
            "Grid squares are part of the map's grid for reading grid references. The data a GIS shows is held as layers."
          ] },
        { kind: "gap", q: "Every piece of data in a GIS needs its latitude and ___ so that it appears in the right place on the map.", answer: "longitude", options: ["longitude", "legend", "layer"], why: "Latitude and longitude together give the exact position, so the software knows where to put the data.",
          feedback: {
            "legend": "A legend explains the symbols and colours on a finished map. It does not place the data. Position comes from latitude and longitude.",
            "layer": "A layer is the set of data itself. For the software to put each piece of that layer in the right place it needs the latitude and longitude of each piece."
          } },
        { kind: "numeric", q: "How many components does a GIS have?", answer: 4, tolerance: 0, units: "components", check: "4", why: "Four: hardware, software, data and people.",
          misconceptions: [
            { answer: 3, check: "4-1", says: "You have probably left out the people. The four components are hardware, software, data and people, and without a user nobody asks the questions." },
            { answer: 2, check: "4-2", says: "Hardware and software are only two of the four. A GIS also needs data (the information about places) and people (the users)." },
            { answer: 5, check: "4+1", says: "You have added one too many. Your textbook names four components: hardware, software, data and people." }
          ] }
      ],
      modules: [
        {
          title: "The four components",
          task: {
            kind: "match",
            q: "Match each component of a GIS to its description.",
            pairs: [
              ["Hardware", "The computer or tablet the GIS runs on"],
              ["Software", "The program that stores the layers and draws the map"],
              ["Data", "The information about places, held as layers"],
              ["People", "The users who collect data, ask questions and read the map"]
            ]
          },
          contexts: [
            { label: "In the geography room", q: "Your class opens ArcGIS Online on the laptops to look at an earthquake layer. Match each component of the GIS you are using to its description." },
            { label: "A police station", q: "The police map last month's car thefts on a GIS. Match each component of their GIS to its description." },
            { label: "A hospital", q: "A hospital team maps where patients with a disease live. Match each component of the GIS to its description." }
          ],
          levels: {
            support: {
              steps: [
                "Hardware is anything you can touch: the computer itself.",
                "Software is the program running on it, the part that draws.",
                "Data is the information, the facts about places, kept as layers.",
                "People are the users. If a description mentions asking or reading, it is the people."
              ],
              example: {
                q: "Match the parts of a school library to their jobs: the building, the catalogue computer program, the books, the librarian.",
                steps: ["The building is the part you can touch, like hardware.", "The catalogue program runs on a computer, like software.", "The books hold the information, like data.", "The librarian asks and answers questions, like the people."],
                answer: "Building: the place it all happens. Catalogue program: finds and shows the books. Books: the information. Librarian: the person who uses it all."
              }
            },
            core: { hint: "Touch it, run it, know it, use it: hardware, software, data, people." },
            stretch: { extend: "Dr Snow had no computer, yet he still had data and a person. Explain which two components he was missing and what he used instead of them." }
          },
          explain: "Say, in one sentence, why a GIS with no people would be useless.",
          why: "Hardware is the computer, software is the program, data is the information held as layers, and people are the users who ask the questions and read the answers."
        },
        {
          title: "Spot the heat map",
          task: {
            kind: "mcq",
            q: "Which of these is a heat map?",
            options: [
              "A map with one red dot marking the hottest town in the country",
              "A map that uses colour to show where crimes are most and least common across a city",
              "A map that shows the height of the land with brown shading",
              "A map of bus routes, each route drawn in a different colour"
            ],
            answer: 1,
            feedback: [
              "This is the trap in the name. A heat map is not about temperature. It uses colour to show where there is more or less of something, such as crime.",
              "",
              "Shading for the height of the land is relief shading on an ordinary map. A heat map colours the map by how much of something there is in each place.",
              "Colouring each bus route differently just tells them apart. A heat map uses colour to show where there is more or less of something, from few to many."
            ]
          },
          contexts: [
            { label: "The news", q: "A news website shows four maps during an election week. Which of them is a heat map?" },
            { label: "A geography display", q: "Your teacher pins four maps on the wall and asks the class to find the heat map. Which one is it?" }
          ],
          levels: {
            support: {
              steps: [
                "Ignore the word heat. Ask instead: does the colour show how much of something there is?",
                "A heat map runs from a pale colour for few to a dark colour for many.",
                "Cross out any option where the colour means something else, such as height or a route.",
                "Choose the option where the colour shows more or less of something."
              ],
              example: {
                q: "A map is coloured dark green where lots of trees grow and pale green where there are few. Is it a heat map?",
                steps: ["The colour shows how many trees there are in each place.", "Dark means many, pale means few.", "So yes: it is a heat map of trees, even though trees have nothing to do with heat."],
                answer: "Yes. The colour shows how much of something there is, so it is a heat map."
              }
            },
            core: { hint: "Heat map: colour shows how much, from few to many. Which option does that?" },
            stretch: { extend: "Describe a heat map that would help the head teacher decide where to put a new bike shelter, and say what the darkest colour would mean." }
          },
          explain: "Say, in one sentence, what the darkest colour on a heat map means.",
          why: "A heat map uses colour to show where there is more or less of something. The crime map does this; the others use colour or dots for temperature, height or routes."
        },
        {
          title: "Heat maps and the right place",
          task: {
            kind: "written",
            q: "Explain what a heat map is and give an example. Then explain how we make sure our data shows up in the right place on a GIS map. (4 marks)",
            marks: 4,
            criteria: [
              "Defines a heat map: a map that uses colour to show where there is more or less of something",
              "Gives a clear example, such as crime in a city or cases of a disease",
              "Says that each piece of data has its latitude and longitude recorded",
              "Explains that the software uses these two numbers to place the data in the right spot on the map"
            ],
            model: "A heat map uses colour to show where there is more or less of something, with the darkest colour where there is most. For example, a heat map of crime in a city is dark red on the streets with the most crimes and pale where there are few. To make sure our data shows up in the right place, we record the latitude and longitude of every piece of data when we collect it. The GIS software reads these two numbers and places each piece exactly where it belongs on the map."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: define a heat map. Use the words colour and more or less.",
                "Sentence 2: give one example. Crime, births or a disease all work.",
                "Sentence 3: say what we record with every piece of data: its latitude and longitude.",
                "Sentence 4: say what the software does with those two numbers."
              ],
              example: {
                q: "Explain what a layer is and give an example. Then explain why you might stack two layers. (4 marks)",
                steps: ["Define: a layer is one set of data in a GIS, drawn over the map.", "Example: a layer of earthquakes.", "Stacking: two layers on one map let you compare them.", "Finish: for example, earthquakes over plate boundaries show that they line up."],
                answer: "A layer is one set of data in a GIS, drawn over the base map, such as a layer showing recent earthquakes. You stack two layers to compare them on the same map. For example, an earthquake layer over a plate boundary layer shows that most earthquakes happen along the boundaries."
              }
            },
            core: { hint: "Two halves, two marks each: define plus example, then latitude and longitude plus what the software does with them." },
            stretch: { extend: "Explain what would go wrong on a heat map of crime if half the crimes were recorded with their latitude and longitude swapped round." }
          },
          explain: "Say, in one sentence, why a heat map needs latitude and longitude as much as a dot map does.",
          why: "Both halves need a definition and a reason. A heat map colours the map by how much; data appears in the right place because its latitude and longitude are recorded and read by the software."
        }
      ]
    },

    /* ───────────── 3 · uses of GIS ───────────── */
    {
      key: "uses-of-gis", n: 3, title: "What is GIS used for?",
      lead: "Human and physical features on one map; births, diseases, crimes and natural hazards; and how the police use a GIS to see where crime clusters and why.",
      covers: [1],
      pretext: {
        words: [
          { word: "human feature", means: "something people have built or made, such as a road or a school", sentence: "The railway station is a human feature on the map." },
          { word: "physical feature", means: "a natural part of the landscape, such as a river or a hill", sentence: "The River Thames is a physical feature." },
          { word: "census", means: "the official count of everyone living in the country", sentence: "The census tells us how many babies were born in each area." },
          { word: "cluster", means: "a group of things gathered close together in one place", sentence: "There was a cluster of car thefts on one street." },
          { word: "hazard", means: "something natural that can harm people, such as an earthquake", sentence: "A GIS can map every hazard in a region." }
        ],
        passage: [
          "A GIS can show human features and physical features.",
          "Human features are things people have built, like roads, schools and shops.",
          "Physical features are natural, like rivers, hills and coasts.",
          "A GIS can show the number of births in each area from the census.",
          "It can show where people have died from a disease, like Covid-19 or cholera.",
          "That helps scientists study where the disease is spreading and why.",
          "The police use a GIS to map where crimes happen.",
          "If many car thefts cluster on one street, the police know where to look.",
          "A GIS can map earthquakes, volcanoes and other hazards.",
          "That helps people study the causes, reduce the impacts and improve the response.",
          "You could add a layer, like street lights, to help explain a pattern.",
          "Every use starts with the same question: where is it happening?"
        ]
      },
      sections: [
        {
          heading: "Human and physical on the same map",
          paragraphs: [
            "Geographers split the world into human features and physical features. Human features are the things people have built or made: roads, houses, schools, shops, railway stations, factories. Physical features are the natural parts of the landscape: rivers, hills, coasts, forests, lakes. You can see both kinds through the window of any bus.",
            "A GIS can display either kind, and this is where layers earn their keep. A layer of rivers and a layer of houses on the same map shows you which homes are close to the water. A layer of schools and a layer of busy roads shows you which crossings matter most. Human and physical features, compared on one screen.",
            "Your deck asks you to give examples of human and physical features that could be displayed on a GIS map. In Chapter 4 you will add human features to a map of Harlington School with map notes. In Chapter 5 you will add physical features, such as earthquakes, volcanoes and ecosystems, from ready-made layers."
          ],
          worked: {
            q: "Give one human feature and one physical feature you could display on a GIS map of your local area. (2 marks)",
            steps: [
              "Human means built by people: choose something you walk past, such as a school or a railway station.",
              "Physical means natural: choose something that was there before the town, such as a river or a hill.",
              "Write one of each and label which is which."
            ],
            answer: "Human feature: the railway station. Physical feature: the river that runs through the park."
          },
          tip: "If people made it, it is human. If it was there before people, it is physical."
        },
        {
          heading: "Births, diseases and hazards",
          paragraphs: [
            "The census is the official count of everyone in the country. Put its data on a GIS and you can show the number of births in each area, or the birth rate. Planners use this to decide where new nursery places and schools will be needed in a few years' time. The map tells them where, which a table of numbers cannot do so clearly.",
            "A GIS can also show where people have died from a disease, such as Covid-19 or cholera. That is exactly what Dr Snow did by hand in Chapter 1. Mapping the deaths helps scientists study where a disease is spreading and what might be causing it, which is the first step towards fighting it.",
            "Finally, a GIS can map earthquakes, volcanoes and other natural hazards. In your Tectonic Processes unit you learned that earthquakes line up along plate boundaries; a GIS layer of recent earthquakes shows that line in seconds. Mapping hazards helps people study their causes, reduce their impacts and improve the response when one happens. You will build this exact map in Chapter 5."
          ],
          tip: "Three uses from your deck, in three words: births, deaths, hazards. Say where each one helps."
        },
        {
          heading: "GIS and the police",
          paragraphs: [
            "The police use a GIS to investigate crime. Every reported crime is a piece of data with a type, a time and a location. Put a month of crimes on a map and patterns appear: a cluster of car thefts on one street, muggings around one square, shoplifting along one road. The police then know where to patrol and where to look for the cause.",
            "Your deck gives you a GIS crime map to read. It asks for the four-figure grid reference of the place where a mugging is being investigated, the name of the street where the GIS has helped the police detect a number of car thefts, and the types of crime shown in Central Square. These are the same map skills as Chapter 1, used on a screen instead of paper.",
            "The stretch question is the clever part. The deck asks you to suggest a layer that could be added to help the police know the cause of these crimes. Think about what might explain a pattern: a layer of street lights could show that muggings happen where it is dark; a layer of pubs and bars could explain late-night trouble; a layer of CCTV cameras could show which streets are watched. The GIS does not solve the crime, but by stacking the right layers it helps the police ask the right question."
          ],
          tip: "To explain a pattern, add a layer that might cause it. Then see if the two line up."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is a human feature?", options: ["A river", "A hill", "A beach", "A railway station"], answer: 3, why: "A railway station was built by people, so it is a human feature. Rivers, hills and beaches are natural, so they are physical features.",
          feedback: [
            "A river is a natural part of the landscape, so it is a physical feature. Human features are things people have built, such as a railway station.",
            "A hill is natural, so it is a physical feature. A human feature is something people have made, such as a railway station.",
            "A beach is made by the sea, not by people, so it is a physical feature. The railway station is the human feature here.",
            ""
          ] },
        { kind: "gap", q: "The police use a GIS to see where crimes ___ in one area, so they know where to patrol and where to look for the cause.", answer: "cluster", options: ["cluster", "disappear", "cost"], why: "A cluster is a group of crimes close together. Seeing the cluster on the map tells the police where to focus.",
          feedback: {
            "disappear": "Crimes do not disappear on a GIS map; the point of the map is to show where they happen. The police look for where crimes cluster, meaning gather together in one place.",
            "cost": "A GIS crime map shows where crimes happen, not what they cost. The police look for where crimes cluster, meaning many happen close together."
          } },
        { kind: "mcq", q: "Why might geographers put earthquakes on a GIS map?", options: ["To predict the exact day of the next earthquake", "To study where they happen, reduce their impacts and improve the response", "To measure the temperature of the Earth's core", "To show which countries have the most people"], answer: 1, why: "Mapping hazards helps people study where and why they happen, plan to reduce the damage and respond better when one strikes.",
          feedback: [
            "No map can give the exact day of an earthquake. A GIS map of earthquakes helps people study where they happen, reduce their impacts and improve the response.",
            "",
            "A GIS maps where things happen on the surface; it does not measure the core. Earthquake maps help people study the causes, reduce the impacts and improve the response.",
            "Population is a different layer, from the census. An earthquake layer is used to study the hazard, reduce its impacts and improve the response."
          ] }
      ],
      modules: [
        {
          title: "Match the use to the example",
          task: {
            kind: "match",
            q: "Match each use of a GIS to the example from your deck.",
            pairs: [
              ["Census data", "The number of births in each area"],
              ["Disease", "Deaths from cholera or Covid-19, mapped to study the cause"],
              ["Crime", "Car thefts clustered on one street"],
              ["Hazards", "Earthquakes and volcanoes, mapped to improve the response"]
            ]
          },
          contexts: [
            { label: "A poster", q: "You are making a poster for the geography corridor called What is GIS used for? Match each use to the example that goes under it." },
            { label: "A quiz", q: "Your partner reads out a use of GIS and you answer with an example. Match each use to its example." },
            { label: "Revision cards", q: "You write each use of GIS on the front of a card and an example on the back. Match each front to its back." }
          ],
          levels: {
            support: {
              steps: [
                "Census is about people being counted, so look for births.",
                "Disease means illness, so look for deaths from cholera or Covid-19.",
                "Crime is what the police deal with, so look for thefts.",
                "Hazards are natural dangers, so look for earthquakes and volcanoes."
              ],
              example: {
                q: "Match each school subject to an example: Science, History, Music, PE. Examples: a Roman coin, a violin, a football, a test tube.",
                steps: ["Science uses equipment: the test tube.", "History studies the past: the Roman coin.", "Music is instruments: the violin.", "PE is sport: the football."],
                answer: "Science: test tube. History: Roman coin. Music: violin. PE: football."
              }
            },
            core: { hint: "Births, deaths, thefts, earthquakes. Which use does each belong to?" },
            stretch: { extend: "Choose two of the four uses and explain one layer you would add to each map to help explain the pattern it shows." }
          },
          explain: "Say, in one sentence, what all four uses of a GIS have in common.",
          why: "Census data shows births; disease mapping shows deaths from cholera or Covid-19; crime mapping shows clusters such as car thefts; hazard mapping shows earthquakes and volcanoes."
        },
        {
          title: "Which layer would help the police?",
          task: {
            kind: "mcq",
            q: "Several muggings have happened on one street after dark. Which GIS layer would most help the police understand why?",
            options: ["The height of the land above sea level", "Average rainfall for each month", "Street lighting", "The age of the buildings"],
            answer: 2,
            feedback: [
              "The height of the land does not explain why people are mugged after dark. A street lighting layer could show whether the street is dark where the muggings happen.",
              "Rainfall changes month by month and across whole regions, not street by street. A layer of street lights would show whether the muggings happen where it is dark.",
              "",
              "The age of the buildings is unlikely to explain muggings after dark. A street lighting layer would show whether the street is poorly lit where the crimes happen."
            ]
          },
          levels: {
            support: {
              steps: [
                "Read the clue in the question: the muggings happen after dark.",
                "Ask which layer has something to do with darkness.",
                "Cross out the layers that are about weather, height or how old things are.",
                "Choose the layer that could show whether the street is dark where the crimes happen."
              ],
              example: {
                q: "Shoplifting is high in one shopping centre on Saturday afternoons. Which layer would help most: bus stops nearby, the depth of the nearest river, or the colour of the shop signs?",
                steps: ["The clue is Saturday afternoons, when the centre is busiest.", "Bus stops bring crowds, so that layer connects to the clue.", "River depth and sign colours have nothing to do with it."],
                answer: "Bus stops nearby, because they show where the crowds arrive on busy afternoons."
              }
            },
            core: { hint: "After dark is the clue. Which layer is about light?" },
            stretch: { extend: "Suggest a second layer the police could add to the same map, and explain what pattern it might reveal that the lighting layer cannot." }
          },
          explain: "Say, in one sentence, how stacking two layers can suggest the cause of a pattern.",
          why: "The muggings happen after dark, so a layer of street lighting could show that they cluster where the lights are missing or broken. The other layers do not connect to the clue."
        },
        {
          title: "Explain two uses of GIS",
          task: {
            kind: "written",
            q: "Explain two uses of a GIS: one in human geography and one in physical geography. (4 marks)",
            marks: 4,
            criteria: [
              "Names a human use from the deck, such as census births or police crime mapping, and says who uses it",
              "Explains what the map lets that user do, such as see where crimes cluster",
              "Names a physical use, such as mapping earthquakes or volcanoes",
              "Explains what that map helps people do, such as study the causes, reduce the impacts or improve the response"
            ],
            model: "One human use of a GIS is crime mapping. The police put every reported crime on the map as a piece of data, so they can see where crimes such as car thefts cluster and decide where to patrol. One physical use is mapping earthquakes. Geographers add a layer of recent earthquakes to a world map, which shows where they happen and helps people study the causes, reduce the impacts and improve the response when the next one strikes."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: name a human use and who uses it. Crime and the police is the easiest.",
                "Sentence 2: say what the map lets them do. Use the word cluster.",
                "Sentence 3: name a physical use. Earthquakes or volcanoes.",
                "Sentence 4: say what that map helps people do. Use the deck's three words: causes, impacts, response."
              ],
              example: {
                q: "Explain two uses of a map in the school: one for visitors and one for the caretaker. (4 marks)",
                steps: ["Name the first use and the user: visitors finding reception.", "Say what it lets them do: follow the route from the gate.", "Name the second use: the caretaker checking fire exits.", "Say what it helps: make sure every exit is clear."],
                answer: "Visitors use a map of the school to find reception, because it shows the route from the gate to the front door. The caretaker uses a map of the fire exits to check that every exit is clear, because it shows where each one is."
              }
            },
            core: { hint: "Two uses, two marks each: name the use and the user, then say what the map lets them do." },
            stretch: { extend: "For your human example, suggest one extra layer that would make the map more useful and explain why." }
          },
          explain: "Say, in one sentence, why each use needs the data to be tied to a place.",
          why: "Two marks for each use: name it and its user, then explain what the map lets them do. The deck's examples are census births, disease deaths, crime and hazards."
        }
      ]
    },

    /* ───────────── 4 · making your first map ───────────── */
    {
      key: "making-a-map", n: 4, title: "Making your first map: Harlington School",
      lead: "Log in to ArcGIS Online, find Pinkwell Lane, add map notes for human features, measure a distance, read a latitude and longitude, and save your map where you can find it again.",
      covers: [2],
      pretext: {
        words: [
          { word: "ArcGIS Online", means: "the GIS software you use through a web browser", sentence: "Log in to ArcGIS Online with the account your teacher gave you." },
          { word: "map notes", means: "the tool that lets you add your own symbols and labels to a map", sentence: "Use map notes to put a school symbol on the map." },
          { word: "template", means: "a ready-made set of symbols to choose from", sentence: "The general infrastructure template has symbols for roads and buildings." },
          { word: "measure tool", means: "the tool that finds the distance between two points on the map", sentence: "The measure tool showed the distance from the school to the junction." },
          { word: "location tool", means: "the tool that shows the latitude and longitude of a point", sentence: "Click the location tool to read the coordinates of the school." },
          { word: "My Content", means: "the place in ArcGIS Online where your saved maps are kept", sentence: "All your saved maps are listed in My Content." }
        ],
        passage: [
          "ArcGIS Online is the GIS software you use in this unit.",
          "You log in, go to Maps and open the map viewer.",
          "Type Pinkwell Lane in the address box and choose the full address that appears.",
          "Zoom in until you can see the school and the nearby streets.",
          "Click Add, then Add Map Notes.",
          "Name your map notes human features and choose the general infrastructure template.",
          "Scroll through the symbols until you find the school.",
          "Click the symbol, then click on the school to place it.",
          "Change the title to Harlington School and write a short description.",
          "Use the measure tool to find the distance between two places.",
          "Use the location tool to read the latitude and longitude of the school.",
          "Click Save As and name your map Harlington School.",
          "Your saved maps are kept in My Content."
        ]
      },
      sections: [
        {
          heading: "Finding the place",
          paragraphs: [
            "Now you build a GIS map yourself. The software is ArcGIS Online, which runs in a web browser, so the first step is to log in with the account your teacher gave you. From the home page go to Maps and open the map viewer. You will see a base map of the world with a search box, a toolbar along the top and an Add button.",
            "Type Pinkwell Lane into the address box. A list of full addresses appears underneath; click the one for the school. The map jumps to the right part of west London. Then zoom in, using the mouse wheel or the plus button, until you can see the whole school site and the streets around it, as in the sample map on your deck.",
            "Zooming in matters more than it seems. In Chapter 2 you learned that every piece of GIS data must sit in the right place. When you add a symbol in the next step, the software records the latitude and longitude of the exact spot you click. If you are zoomed out, a tiny slip of the mouse puts your school in the wrong street."
          ],
          tip: "Search, then zoom. Never place a symbol while you are zoomed out."
        },
        {
          heading: "Adding human features with map notes",
          paragraphs: [
            "Click Add, then Add Map Notes. Map notes are the tool for drawing your own data on the map: symbols, lines, areas and labels. Name your map notes human features, because that is what this layer will hold. Then choose the general infrastructure template, which is a ready-made set of symbols for the things people build: roads, buildings, schools, shops and more. Click Create and your new layer is ready.",
            "Scroll through the symbols until you reach the school. Click the symbol, then click on the school's location on your map. A small box opens: change the title to Harlington School and write a description you choose. Click Close. Then take two minutes to place as many other human features as you can: the primary school, shops, the bus stops, the main roads. Every symbol must match the correct feature in the correct location.",
            "That last sentence is the whole of GIS in one rule. A symbol is a piece of data, and the place you click is its latitude and longitude. A shop symbol on the school field is wrong data, however nice the symbol looks. In Chapter 1 Dr Snow's map worked because every mark was in the right place; yours works the same way."
          ],
          worked: {
            q: "A pupil places a hospital symbol on the school playing field because they like the symbol. Explain why this is a problem on a GIS map. (2 marks)",
            steps: [
              "Say what the symbol is: a piece of data with a location.",
              "Say what is wrong: there is no hospital at that location, so the data is false.",
              "Say why it matters: anyone using the map, or stacking a layer on it, would be misled."
            ],
            answer: "On a GIS map every symbol is a piece of data tied to a latitude and longitude, so the symbol says there is a hospital on the playing field. That is not true, so the map now holds false data, and anyone reading the map or comparing it with another layer would be misled."
          },
          tip: "Right symbol, right place. If the feature is not really there, do not place it."
        },
        {
          heading: "Measuring, locating and saving",
          paragraphs: [
            "Two tools on the top bar turn your map from a picture into a GIS. The measure tool finds the distance between two points: click one place, click another, and the distance appears. Your deck asks you to measure from Pinkwell Primary School to the junction of Mildred Avenue and Seaton Road, to practise, and to record the reading in your book. The location tool shows the latitude and longitude of any point you click. Use it on the school and record the two numbers. They are the school's address in the Earth's own system from Chapter 1.",
            "Spend a few minutes trying every tool on the top bar, so none of them is a surprise in the next lesson. Then click Save As and name your map Harlington School. Saving gives the map a title and keeps it in your account.",
            "To see your saved map, click the three lines beside the map name and choose Content. Every map you save is listed under its title in My Content. Your teacher will mark the maps from here, so the rule is simple: if it is not in My Content, it is not saved. Print the finished map and stick it in your book with the right title."
          ],
          tip: "Save As, then check My Content. If you cannot see it there, your teacher cannot either."
        }
      ],
      gate: [
        { kind: "mcq", q: "What do map notes let you do in ArcGIS Online?", options: ["Change the colour of the sea on the base map", "Print the map in black and white", "Add your own symbols and labels for features to the map", "Delete the base map"], answer: 2, why: "Map notes are the tool for adding your own data to a map: symbols, lines, areas and labels for the features you choose.",
          feedback: [
            "The base map's colours are fixed. Map notes are for adding your own data on top: symbols and labels for features.",
            "Printing is done after the map is saved, not with map notes. Map notes let you add your own symbols and labels for features.",
            "",
            "You cannot delete the base map, and map notes do not remove anything. They let you add your own symbols and labels for features."
          ] },
        { kind: "gap", q: "The ___ tool shows the latitude and longitude of a point on the map.", answer: "location", options: ["measure", "location", "search"], why: "The location tool reads off the coordinates of the point you click; the measure tool gives distances.",
          feedback: {
            "measure": "The measure tool finds the distance between two points. The tool that shows the latitude and longitude of one point is the location tool.",
            "search": "The search, or address box, finds a place from its name. To read the latitude and longitude of a point you click, use the location tool."
          } },
        { kind: "mcq", q: "Where do you find the maps you have saved in ArcGIS Online?", options: ["In the address box", "In My Content", "In the legend", "In the template list"], answer: 1, why: "Saved maps are listed under their titles in My Content, reached through the Content menu.",
          feedback: [
            "The address box is for finding a place by name. Your saved maps are listed in My Content.",
            "",
            "The legend explains the symbols on one map. Your saved maps are kept, under their titles, in My Content.",
            "The template list is where you choose a set of symbols for map notes. Saved maps are kept in My Content."
          ] }
      ],
      modules: [
        {
          title: "The steps in order",
          task: {
            kind: "order",
            q: "Put the steps for making the Harlington School map in the order you do them.",
            items: [
              "Log in to ArcGIS Online and open the map viewer",
              "Type Pinkwell Lane in the address box and choose the full address",
              "Zoom in to the school and the nearby streets",
              "Click Add, then Add Map Notes, and choose the general infrastructure template",
              "Click the school symbol and place it on the school",
              "Click Save As and name the map Harlington School"
            ]
          },
          contexts: [
            { label: "A help sheet", q: "A pupil who missed the lesson needs a help sheet. Put the six steps for the Harlington School map in the order they should follow." },
            { label: "A video script", q: "You are recording a short how-to video for Year 7. Put the six steps for the Harlington School map in the order you would show them." },
            { label: "A checklist", q: "Make a tick-list for your own map. Put the six steps in the order you tick them off." }
          ],
          levels: {
            support: {
              steps: [
                "You cannot do anything until you are logged in and the map viewer is open.",
                "Find before you zoom: search the address, then zoom in to the school.",
                "Make the layer before you fill it: add map notes and pick the template, then place the symbol.",
                "Saving is always last. Nothing is kept until you click Save As."
              ],
              example: {
                q: "Put the steps for sending a photo to a friend in order: take the photo, open the messages app, choose the friend, attach the photo and send.",
                steps: ["You need the photo first, so take it.", "Open the app before you can choose anyone.", "Choose the friend, then attach and send."],
                answer: "take the photo, open the messages app, choose the friend, attach the photo and send"
              }
            },
            core: { hint: "Open, find, zoom, make the layer, place the symbol, save." },
            stretch: { extend: "Explain what would go wrong if you placed the school symbol before zooming in, and say which rule from Chapter 2 it would break." }
          },
          explain: "Say, in one sentence, why the map notes layer is created before any symbol is placed.",
          why: "Log in and open the viewer, search the address, zoom in, add map notes with the template, place the school symbol, then save as Harlington School."
        },
        {
          title: "Which tool does the job?",
          task: {
            kind: "match",
            q: "Match each part of ArcGIS Online to the job it does.",
            pairs: [
              ["Measure tool", "Finds the distance between two points"],
              ["Location tool", "Shows the latitude and longitude of a point"],
              ["Address box", "Finds a place from its street name"],
              ["Save As", "Keeps your map in My Content under a title"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Measure means how far, so look for distance.",
                "Location means where, so look for latitude and longitude.",
                "The address box takes a name and finds the place.",
                "Save As keeps the map. Where does it keep it?"
              ],
              example: {
                q: "Match each part of a kitchen to its job: the scales, the timer, the recipe book, the fridge.",
                steps: ["Scales measure how much.", "The timer tells you when.", "The recipe book tells you how.", "The fridge keeps food for later."],
                answer: "Scales: measure how much. Timer: tell you when. Recipe book: tell you how. Fridge: keep food for later."
              }
            },
            core: { hint: "How far, where, which place, keep it: four tools, four jobs." },
            stretch: { extend: "Your friend measured the distance to the junction but forgot to use the location tool. Explain what they are missing from their book and why it matters for a GIS." }
          },
          explain: "Say, in one sentence, the difference between the measure tool and the location tool.",
          why: "The measure tool gives a distance, the location tool gives a latitude and longitude, the address box finds a place by name, and Save As keeps the map in My Content."
        }
      ]
    },

    /* ───────────── 5 · world maps and the progress check ───────────── */
    {
      key: "world-maps", n: 5, title: "World maps from the Living Atlas, and the progress check",
      lead: "Ready-made layers for earthquakes, volcanoes and ecosystems, a legend so other people can read your map, and what the end-of-unit check will ask.",
      covers: [3],
      pretext: {
        words: [
          { word: "Living Atlas", means: "a library of ready-made data layers you can add to your map", sentence: "She found an earthquake layer in the Living Atlas." },
          { word: "legend", means: "the part of a map that explains what the symbols and colours mean", sentence: "Add a legend so a reader knows what the red dots are." },
          { word: "eruption", means: "when a volcano throws out lava, ash or gas", sentence: "The eruption layer shows every recent volcanic eruption." },
          { word: "ecosystem", means: "a community of living things and the place they live in", sentence: "A rainforest is one kind of ecosystem." },
          { word: "progress check", means: "the short written test at the end of the unit", sentence: "The progress check on GIS is worth 10 marks." }
        ],
        passage: [
          "For the world maps you do not draw the features yourself.",
          "Instead you add ready-made layers from the Living Atlas.",
          "Repeat the first six steps, but this time use the world map.",
          "At step six, choose Living Atlas Layers instead of map notes.",
          "Search for earthquakes and add the recent earthquakes or major earthquakes layer.",
          "Search for volcanic eruptions and add the eruption layer, not the wildfire layer.",
          "Search for ecosystems and add the world terrestrial ecosystems layer.",
          "Always add a legend so a reader knows what the symbols and colours mean.",
          "Save each map in My Content with the right title.",
          "Five maps are marked, with 10 marks for each, so 50 marks in total.",
          "The progress check is a short written test worth 10 marks.",
          "Revise your notes on what a GIS is, its four components, layers, heat maps and uses."
        ]
      },
      sections: [
        {
          heading: "Ready-made data: the Living Atlas",
          paragraphs: [
            "For the Harlington School map you drew the data yourself with map notes. For the world maps you use data other people have already collected. The Living Atlas is a library of ready-made layers inside ArcGIS Online: earthquakes recorded by scientists, volcanic eruptions, ecosystems, and thousands more. You search for a layer and add it to your map, and the software places every piece of data by its latitude and longitude, just as Chapter 2 promised.",
            "Start with the earthquake map. Repeat the first six steps from Chapter 4, but this time stay on the world map. At step six, when you click Add, choose Living Atlas Layers instead of map notes. Search for earthquakes. Two useful layers appear: recent earthquakes and major earthquakes. Add one of them. For the stretch task, add both to the same map and compare them: where do the recent small earthquakes line up with the major ones?",
            "Then make the volcano map and the ecosystems map the same way. For volcanoes, search for volcanic eruptions and add the eruption layer, not the wildfire layer that appears beside it; read the layer name carefully before you click. For ecosystems, search for ecosystems and add the world terrestrial ecosystems layer, which colours the land by the kind of ecosystem found there."
          ],
          tip: "Map notes for data you draw yourself; Living Atlas for data that already exists."
        },
        {
          heading: "Legends and saving",
          paragraphs: [
            "A world map covered in coloured dots is a puzzle until you know what the dots mean. That is the job of the legend. Your deck reminds you to add a legend to every map by clicking the legend button in the map viewer; it lists each symbol and colour on your map with its meaning. A map without a legend may look finished, but nobody else can read it.",
            "Save each map in My Content with the right title: Harlington School, recent earthquakes, major earthquakes, volcanoes and ecosystems. Five maps are marked, with 10 marks for each, so the map work is worth 50 marks in total. Your teacher marks them from My Content, so check the list before the deadline. You also print the maps, or send them to your teacher, and stick them in your book with the right title.",
            "Look at what you have made. Five layers of data, each tied to the Earth by latitude and longitude, each readable by anyone with the legend, and all saved where they can be found and compared. That is a GIS, built by you."
          ],
          worked: {
            q: "Explain why every GIS map you save needs a legend. (2 marks)",
            steps: [
              "Say what a legend does: it tells the reader what each symbol and colour means.",
              "Say what happens without one: the map cannot be read by anyone who did not make it.",
              "Link to the purpose: a GIS map is for sharing information, so it must be readable."
            ],
            answer: "A legend tells the reader what each symbol and colour on the map means. Without it, someone who did not make the map cannot tell what the dots or colours show, so the information cannot be shared, which is the whole point of a GIS map."
          },
          tip: "Layer, legend, save, check My Content. Four words for every map."
        },
        {
          heading: "The progress check: what it asks",
          paragraphs: [
            "The half-term progress check on GIS is a short written test worth 10 marks. Your deck shows the six questions it asks, and every one of them is covered in this unit. It asks what a GIS is; how to use a GIS to display a map on a computer using the four components; how we make sure our location or data shows up in the right place; what the information or data in a GIS map is called; what a heat map is, with an example; and two uses of a GIS.",
            "Prepare one clear answer for each. A GIS is a computer system that stores data about places and shows it on a map. The four components are hardware, software, data and people: a person opens the software on the computer and adds data, which the software draws. Data appears in the right place because its latitude and longitude are recorded. The data in a GIS map is held as layers. A heat map uses colour to show where there is more or less of something, such as crime. Two uses: the police mapping crime, and geographers mapping earthquakes.",
            "The pattern of marks helps you plan. The one-mark questions want a definition or a word. The two-mark questions want two points: a description plus an example, or two reasons, or two uses. Use the key words from the glossary, because they are what the marker is looking for."
          ],
          tip: "One mark, one point. Two marks, two points. Use the key words every time."
        }
      ],
      gate: [
        { kind: "mcq", q: "What are Living Atlas layers?", options: ["Symbols you draw yourself with map notes", "Ready-made data layers that you can add to your map", "Paper atlases kept in the school library", "The street names printed on the base map"], answer: 1, why: "The Living Atlas is a library of ready-made data layers, such as recent earthquakes, that you search for and add to your map.",
          feedback: [
            "Drawing symbols yourself is what map notes are for. Living Atlas layers are ready-made data, collected by others, that you add to your map.",
            "",
            "The Living Atlas is inside ArcGIS Online, not on a shelf. It is a library of ready-made data layers you can add to a digital map.",
            "Street names belong to the base map. Living Atlas layers are extra sets of data, such as earthquakes or ecosystems, that you lay on top."
          ] },
        { kind: "numeric", q: "Five maps are marked, with 10 marks for each. How many marks is the map work worth in total?", answer: 50, tolerance: 0, units: "marks", check: "5*10", why: "Five maps × 10 marks = 50 marks.",
          misconceptions: [
            { answer: 40, check: "4*10", says: "You have counted four maps. Recent earthquakes and major earthquakes are marked as two separate maps, so there are five: 5 × 10 = 50 marks." },
            { answer: 15, check: "5+10", says: "You added 5 and 10. Each of the five maps is worth 10 marks, so multiply: 5 × 10 = 50 marks." },
            { answer: 60, check: "6*10", says: "You have counted six maps. There are five: the school, recent earthquakes, major earthquakes, volcanoes and ecosystems, so 5 × 10 = 50 marks." }
          ] },
        { kind: "gap", q: "A ___ tells the reader what the symbols and colours on a map mean.", answer: "legend", options: ["legend", "layer", "template"], why: "The legend lists each symbol and colour with its meaning, so anyone can read the map.",
          feedback: {
            "layer": "A layer is a set of data drawn on the map. The part of the map that explains what the symbols and colours mean is the legend.",
            "template": "A template is the set of symbols you choose when you add map notes. The part that explains the symbols to the reader is the legend."
          } }
      ],
      modules: [
        {
          title: "Pick the right layer",
          task: {
            kind: "mcq",
            q: "You search the Living Atlas for volcanic eruptions and two layers appear. Which one do you add to your volcano map?",
            options: ["The wildfire layer", "The eruption layer", "Both, because they are both about heat", "Neither; draw the volcanoes with map notes instead"],
            answer: 1,
            feedback: [
              "Wildfires are fires in forests and grassland, not volcanoes. The deck tells you to add the eruption layer and not the wildfire layer.",
              "",
              "Heat is not the point; the map is about volcanoes. Only the eruption layer shows volcanic eruptions, so the wildfire layer does not belong on this map.",
              "Drawing hundreds of volcanoes by hand would take hours and would not be accurate. The Living Atlas eruption layer already holds the data, placed by latitude and longitude."
            ]
          },
          contexts: [
            { label: "A friend asks", q: "Your friend searches for volcanic eruptions and sees a wildfire layer and an eruption layer. Which one should they add to their volcano map?" },
            { label: "Marking day", q: "Your teacher is marking the volcano maps in My Content and checks which Living Atlas layer each pupil added. Which layer should be on your map?" }
          ],
          levels: {
            support: {
              steps: [
                "Read the name of each layer slowly. The map is about volcanoes.",
                "An eruption is what a volcano does. A wildfire is a fire in a forest or grassland.",
                "Only one layer matches the map's purpose.",
                "Choose the layer whose name says eruption."
              ],
              example: {
                q: "You search the Living Atlas for rivers and see a layer called world rivers and a layer called shipping routes. Which do you add to a map of the world's rivers?",
                steps: ["The map is about rivers.", "Shipping routes are paths taken by ships, not rivers.", "So add the world rivers layer."],
                answer: "The world rivers layer, because its name matches the purpose of the map."
              }
            },
            core: { hint: "Eruption is what a volcano does. Which layer says it?" },
            stretch: { extend: "Explain why adding the wrong layer is worse on a GIS map than drawing one wrong symbol with map notes." }
          },
          explain: "Say, in one sentence, why you should read a layer's full name before adding it.",
          why: "The deck says to add the eruption layer and not the wildfire layer. A volcano map should hold volcanic data only, so the wildfire layer would put the wrong data on the map."
        },
        {
          title: "The progress check, in writing",
          task: {
            kind: "written",
            q: "Describe how to use a GIS to display a map on a computer, using the four components of a GIS. Then explain how we make sure our data shows up in the right place on the map. (4 marks)",
            marks: 4,
            criteria: [
              "Names all four components: hardware, software, data and people",
              "Describes the process in order: a person opens the software on the computer and adds the data, which the software draws as a map",
              "Says that the latitude and longitude of each piece of data is recorded when it is collected",
              "Explains that the software uses those two numbers to place each piece of data in the right spot"
            ],
            model: "A person, who is the people part of the GIS, opens the GIS software on a computer, which is the hardware. They add the data they want to show as layers, and the software draws the layers on a map on the screen. To make sure the data shows up in the right place, we record the latitude and longitude of every piece of data when we collect it. The software reads these two numbers and places each piece of data exactly where it belongs on the map."
          },
          levels: {
            support: {
              steps: [
                "Sentences 1 and 2: walk through the four components in the order they are used. Person, computer, software, data.",
                "Make sure all four words appear: hardware, software, data, people.",
                "Sentence 3: say what we record with every piece of data when we collect it.",
                "Sentence 4: say what the software does with those two numbers."
              ],
              example: {
                q: "Describe how to use a library to find a book, using its four parts: the building, the catalogue computer, the books and the librarian. Then explain how the library makes sure each book is on the right shelf. (4 marks)",
                steps: ["Walk through the four parts in order: you go into the building, use the catalogue, ask the librarian, find the book.", "Name all four parts.", "Say what the library records for each book: a shelf number.", "Say how that number is used: the book is put on the shelf with that number."],
                answer: "You go into the library building and use the catalogue computer to search for the book, and the librarian helps you find it on the shelves. Each book has a shelf number recorded when it arrives, and the librarian puts it on the shelf with that number, so every book is in the right place."
              }
            },
            core: { hint: "First half: four components in the order they are used. Second half: latitude and longitude, recorded then read." },
            stretch: { extend: "Explain which of the four components Dr Snow had and which he did not, and say what difference a GIS would have made to how long his map took." }
          },
          explain: "Say, in one sentence, which of the four components holds the latitude and longitude.",
          why: "Two marks for the four components used in order, and two for latitude and longitude: recorded with each piece of data when it is collected, then read by the software to place it."
        }
      ]
    }
  ],

  sources: {
    deckDump: "gg_y08_unit_3_geographic_information_system_gis.txt",
    decksUsed: ["GIS lesson_year8.pptx"],
    notes: "One department deck of 40 slides, three marked lessons. Lesson titles and order from the deck. Deck facts used: GIS as Geographic Information System; four components; data held as layers; latitude and longitude so data shows in the right place; heat maps; the UK GIS company and its software (the deck's stretch question); Dr Snow and his cholera map as the pre-GIS case study (the deck gives only the questions and points to Geog.2 pages 6-7); the uses of GIS (census births, disease deaths including Covid-19 and cholera, police crime detection, earthquakes and volcanoes); the ArcGIS Online steps for the Harlington School map (slides 19-23); the Living Atlas layers for recent and major earthquakes, volcanic eruptions and world terrestrial ecosystems; the legend; My Content; five maps at 10 marks each (50); the 10-mark progress check and its six questions. Where the deck defers to the textbook (the four components by name; what Dr Snow's map showed; the grid-reference mnemonic) the manifest uses the standard KS3 statement and NOTES.md flags each one. House furniture skipped: Prior/Future Learning sheets, timers, the YouTube link, homework due dates, teacher asides. No text is quoted from any source. No pupil or staff names, no login details."
  }
};
