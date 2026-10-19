// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE Geography 8035 · 3.1.1 The challenge of natural hazards: weather hazards · Year 10 · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression; the FACTS names held in verify.py are allowed) and are recomputed.
//   worked examples / support examples with a calculation carry `checks:[{expr, value, tol}]`.
//   every "order" task is compared with the canonical sequences held in verify.py (the department deck's own sequences:
//   formation of a tropical storm, passage of a tropical storm, the Typhoon Haiyan timeline).
//   every mcq / gap / match answer is compared with the independent answer key held in verify.py.
//   every case-study number (storm dimensions, Saffir-Simpson wind speeds, Haiyan's dates and figures, the St Jude storm,
//   the Birmingham tornado, Somerset rainfall, houses, farms, hectares, the £20 million plan, 8 km dredged) is checked
//   against the independent FACTS table in verify.py, each entry with its slide reference.
//   passage sentences are counted (≤ 20 words) and all text is linted for known misconceptions, deck model-answer and
//   textbook fingerprints, facts the deck does not give (death tolls), and the seating-plan names on the UK deck.
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions`; every module carries
//   `explain`; ≥ 1 module per chapter carries `contexts` that never redefine the answer; `connections` ⊂ glossary;
//   meta.constellation is omitted (the engine lays the stars out); no pretext.l1 (translation is a separate pass).
//   verify.py also holds a TRACE table: every number in pupil text must be a FACTS value, a value it recomputes from
//   FACTS, or a declared non-deck curriculum constant (the Ferrel cell's 30 and 60 degrees; see NOTES.md sections 5-6).
//   verify.py ends with an always-on mutation self-test: twenty-five deliberate faults on a copy of the manifest must
//   each raise a failure the clean manifest does not.
// Diagrams (the three-cell model, the storm cross-section, the choropleth map, the UK weather roundabout) are described in
// words; no widget exists for them.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["geog-weather-hazards"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "geog-weather-hazards",
    subjectKey: "geography",
    subject: "Geography",
    board: "AQA",
    spec: "8035",
    specRef: "3.1.1 The challenge of natural hazards: 3.1.1.3 Weather hazards (global atmospheric circulation, tropical storms, UK weather hazards) (Paper 1, Section A)",
    year: 10,
    tier: "GCSE (AQA Geography is a single-tier qualification)",
    title: "The Challenge of Natural Hazards: Weather Hazards",
    sub: "From the great loops of air that drive the world's weather to a typhoon in the Philippines and a flooded Somerset village: how weather becomes a hazard, and how people reduce the risk.",
    bigQuestion: "Why do tropical storms form where they do, why do they hurt some places more than others, and is the UK's own weather becoming more extreme?",
    lessonCount: 15,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  // The department's three teaching decks (Weather hazards.pptx, Weather hazards2.pptx, Weather-Hazards-in-the-UK.pptx), in
  // teaching order. Titles are the decks' own slide titles or learning objectives; questions are those objectives rephrased.
  // See NOTES.md section 2 for the slide ranges. The GIS HW.pptx file is a homework sheet, not a lesson.
  lessons: [
    { n: 1, title: "Weather hazards: atmospheric circulation", question: "How does the movement of air between the equator and the poles control the world's weather?", keywords: ["atmospheric circulation", "Hadley cell", "Ferrel cell", "Polar cell", "high pressure", "low pressure"] },
    { n: 2, title: "Global distribution of tropical storms", question: "Where do tropical storms form, what do they need to form, and how is this linked to atmospheric circulation?", keywords: ["distribution", "latitude", "sea surface temperature", "hurricane", "cyclone", "typhoon"] },
    { n: 3, title: "How do tropical storms form?", question: "What is the sequence of events that turns warm, moist air over a tropical ocean into a tropical storm?", keywords: ["evaporation", "low pressure", "condensation", "cumulonimbus", "Coriolis effect", "eye"] },
    { n: 4, title: "Structure and features of tropical storms", question: "What does a cross-section of a tropical storm show, and what is it like when one passes overhead?", keywords: ["cross-section", "eye", "eye wall", "rain bands", "anticlockwise", "passage"] },
    { n: 5, title: "Hurricane Katrina: a HIC tropical storm case study", question: "How did Hurricane Katrina form and strengthen as it crossed the Gulf of Mexico in August 2005?", keywords: ["Hurricane Katrina", "Gulf of Mexico", "New Orleans", "HIC", "cause", "effect", "response"] },
    { n: 6, title: "Effects of tropical storms and the Saffir-Simpson scale", question: "What are the primary and secondary effects of a tropical storm, and how does the Saffir-Simpson scale measure its strength?", keywords: ["primary effect", "secondary effect", "Saffir-Simpson scale", "category", "wind speed", "storm surge"] },
    { n: 7, title: "Typhoon Haiyan: a LIC tropical storm case study", question: "Where, when and how hard did Typhoon Haiyan strike the Philippines?", keywords: ["Typhoon Haiyan", "Yolanda", "Philippines", "Leyte", "Tacloban", "timeline"] },
    { n: 8, title: "Effects of and responses to Typhoon Haiyan; factors affecting vulnerability", question: "What were the effects of and responses to Typhoon Haiyan, and why do some places suffer more than others?", keywords: ["immediate response", "long-term response", "vulnerability", "level of development", "choropleth map"] },
    { n: 9, title: "Reducing the effects of tropical storms", question: "How do monitoring, prediction, protection and planning reduce the effects of tropical storms?", keywords: ["monitoring", "prediction", "protection", "planning", "cyclone shelter", "warning"] },
    { n: 10, title: "Weather hazards in the UK", question: "What is the difference between weather and climate, which weather hazards does the UK face, and why?", keywords: ["weather", "climate", "depression", "prevailing wind", "weather roundabout", "drought"] },
    { n: 11, title: "Is the UK's weather becoming more extreme?", question: "What is extreme weather, and what is the evidence for and against the UK's weather becoming more extreme?", keywords: ["extreme weather", "evidence", "heatwave", "rainfall records", "variability"] },
    { n: 12, title: "The Somerset Levels floods, 2014: location, causes and impacts", question: "Where are the Somerset Levels, why did they flood in the winter of 2013 to 2014, and what were the social, economic and environmental impacts?", keywords: ["Somerset Levels", "River Tone", "River Parrett", "depression", "dredging", "impacts"] },
    { n: 13, title: "Managing the Somerset Levels floods: immediate and long-term responses", question: "How did the immediate and long-term responses to the Somerset Levels floods reduce the risk?", keywords: ["immediate response", "long-term response", "Flood Action Plan", "dredging", "tidal barrage"] },
    { n: 14, title: "Climate change and extreme weather in the UK", question: "How might climate change be making extreme weather more common in the UK and elsewhere?", keywords: ["climate change", "atmospheric circulation", "Arctic", "IPCC", "energy in the atmosphere"] },
    { n: 15, title: "Case study: the UK heat wave of June 2017", question: "What caused the June 2017 heat wave, what were its social, economic and environmental impacts, and how was the risk managed?", keywords: ["heat wave", "air mass", "social", "economic", "environmental", "management"] }
  ],

  // 16 terms; Connections uses all 16 (four groups, each one chapter's idea). Chapters 4 and 5 teach their key words
  // through pretext.words and the text instead (Haiyan words, UK weather words).
  glossary: [
    { term: "Hadley cell", means: "The loop of air between the equator and the tropics: warm air rises at the equator and sinks again over the tropics.", chapter: "atmospheric-circulation" },
    { term: "Ferrel cell", means: "The loop of air between the tropics and the Arctic or Antarctic circle, driven by the cells either side of it.", chapter: "atmospheric-circulation" },
    { term: "Polar cell", means: "The loop of air between the Arctic or Antarctic circle and the pole, where cold, dense air sinks.", chapter: "atmospheric-circulation" },
    { term: "high pressure", means: "The weight of the atmosphere where cool, dense air is sinking; it brings clear skies and dry weather.", chapter: "atmospheric-circulation" },
    { term: "eye", means: "The calm, cloud-free centre of a tropical storm, where cold air sinks; it is 16 to 48 km across.", chapter: "storm-formation" },
    { term: "eye wall", means: "The ring of towering cloud around the eye of a tropical storm, where the wind and rain are at their most intense.", chapter: "storm-formation" },
    { term: "cumulonimbus", means: "A towering storm cloud with a flat base and often a flat top, which brings torrential rain and thunder.", chapter: "storm-formation" },
    { term: "Coriolis effect", means: "The bending of winds caused by the spin of the Earth; it makes a tropical storm rotate.", chapter: "storm-formation" },
    { term: "primary effect", means: "Something that happens immediately as a result of the hazard itself, such as buildings blown down or people injured by debris.", chapter: "effects-responses" },
    { term: "secondary effect", means: "Something that happens later as a result of a primary effect, such as disease spreading from contaminated water.", chapter: "effects-responses" },
    { term: "immediate response", means: "Help given straight after a hazard to deal with the primary effects, such as search and rescue, shelter and medical supplies.", chapter: "effects-responses" },
    { term: "long-term response", means: "Help given over weeks, months and years to recover from the secondary effects, such as rebuilding homes, roads and schools.", chapter: "effects-responses" },
    { term: "dredging", means: "Removing silt from a river bed so that the channel can hold more water before it floods.", chapter: "somerset-floods" },
    { term: "depression", means: "An area of low atmospheric pressure, which brings cloud, heavy rain and strong winds to the UK.", chapter: "somerset-floods" },
    { term: "flood", means: "When a river's discharge is greater than its channel can hold and water spills onto the land around it.", chapter: "somerset-floods" },
    { term: "evacuation", means: "Moving people away from danger to a place of safety, such as temporary accommodation.", chapter: "somerset-floods" }
  ],

  connections: [
    { group: "The global circulation of air", terms: ["Hadley cell", "Ferrel cell", "Polar cell", "high pressure"] },
    { group: "Inside a tropical storm", terms: ["eye", "eye wall", "cumulonimbus", "Coriolis effect"] },
    { group: "Effects and responses", terms: ["primary effect", "secondary effect", "immediate response", "long-term response"] },
    { group: "Words from the Somerset Levels", terms: ["dredging", "depression", "flood", "evacuation"] }
  ],

  chapters: [
    /* ───────────── 1 · atmospheric circulation and the distribution of tropical storms ───────────── */
    {
      key: "atmospheric-circulation", n: 1, title: "The restless atmosphere",
      lead: "Why warm air rising and cold air sinking drives the world's weather, how the atmosphere is organised into three great cells in each hemisphere, and why tropical storms are found only in certain places.",
      covers: [1, 2],
      pretext: {
        words: [
          { word: "atmosphere", means: "the layer of gases that surrounds the Earth", sentence: "All of our weather happens in the lowest part of the atmosphere." },
          { word: "pressure", means: "the weight of the air pressing down on the ground", sentence: "Rising air makes low pressure, and sinking air makes high pressure." },
          { word: "equator", means: "the imaginary line around the middle of the Earth", sentence: "The equator is the hottest part of the Earth, so air rises there." },
          { word: "Hadley cell", means: "the loop of air between the equator and the tropics", sentence: "The Hadley cell carries warm air up at the equator and down over the tropics." },
          { word: "tropical storm", means: "a huge spinning storm that forms over warm tropical seas", sentence: "A tropical storm brings very strong winds and heavy rain." },
          { word: "latitude", means: "how far north or south of the equator a place is, measured in degrees", sentence: "Tropical storms form at a latitude of 5 to 20 degrees from the equator." }
        ],
        passage: [
          "The weather is controlled by the movement of air.",
          "Warm air is light, so it rises.",
          "Rising air makes low pressure, and brings clouds and rain.",
          "Cold air is heavy, so it sinks.",
          "Sinking air makes high pressure, and brings dry, clear weather.",
          "Air rises at the hot equator and sinks over the tropics.",
          "This loop is called the Hadley cell.",
          "There are two more loops in each half of the Earth.",
          "They are the Ferrel cell and the Polar cell.",
          "Tropical storms form over warm seas near the tropics.",
          "They need sea water warmer than 26 degrees Celsius.",
          "They are called hurricanes, cyclones or typhoons, depending on where they are.",
          "They do not form on the equator itself."
        ]
      },
      sections: [
        {
          heading: "Warm air rises, cold air sinks",
          paragraphs: [
            "Everything in this unit starts with one idea from Year 7: the weather is controlled by the movement of air. When air is warmed it expands, becomes less dense (lighter) and rises. Rising air leaves less weight pressing on the ground beneath it, so an area of low atmospheric pressure forms. As the rising air climbs it cools, the water vapour in it condenses into clouds, and we get rain. That is the water cycle you learned in Year 7: warm air rises, condenses, forms clouds, and precipitation falls.",
            "When air is cooled it becomes more dense (heavier) and sinks. Sinking air presses down harder on the ground, so an area of high atmospheric pressure forms. Sinking air is dry and it stops clouds from building, so high pressure means fine, settled weather with no rain.",
            "Put the two together and you get a loop. Hot air rises; high up it cools; the cool air sinks somewhere else; and at the surface the cool air flows back to replace the hot air that rose. This loop of rising and sinking air is the engine of the atmosphere, and the same pattern happens all over the world."
          ],
          tip: "Remember the pairs: warm, rising, low pressure, wet. Cold, sinking, high pressure, dry."
        },
        {
          heading: "Three cells in each hemisphere",
          paragraphs: [
            "Because the Earth is a sphere, the equator gets the most direct sunshine and the poles the least. The air above the equator is heated most, rises, and spreads out towards the poles high in the atmosphere. It cannot travel all the way in one go. Instead the atmosphere is organised into three giant loops of air, called cells, in each hemisphere. What happens in the northern hemisphere is mirrored in the southern hemisphere.",
            "The Hadley cell is the loop between the equator and the tropics (the Tropic of Cancer in the north, the Tropic of Capricorn in the south). Warm, moist air rises at the equator, giving a belt of low pressure, cloud and heavy rain. High up it cools and moves away from the equator, then sinks as cooler, dry air over the tropics, giving a belt of high pressure and dry weather. The Ferrel cell is the loop between the tropics and the Arctic or Antarctic circle; the UK sits under it. The Polar cell is the loop between the circles and the poles, where very cold, dense air sinks, giving high pressure at the poles.",
            "The three cells meet at belts of rising and sinking air. Where air rises, between the Hadley and Ferrel cells at about 60 degrees, there is low pressure and unsettled weather; where air sinks, at the tropics and the poles, there is high pressure. Read a world map of deserts and rainforests and you are reading the cells: rainforests sit under the rising air of the equator and many deserts under the sinking air of the tropics."
          ],
          worked: {
            q: "Describe and explain how the circulation of air within the atmosphere causes areas of high and low pressure. (6 marks)",
            steps: [
              "Start with the cause: the equator is heated most by the Sun, so the air there is warmed, expands and rises.",
              "Link rising air to pressure: rising air takes weight off the surface, so a belt of low pressure forms at the equator, with cloud and rain.",
              "Follow the air: high in the atmosphere it moves away from the equator and cools. Cool air is dense, so it sinks over the tropics.",
              "Link sinking air to pressure: sinking air presses on the surface, so a belt of high pressure forms at the tropics, with dry weather. Name the loop: the Hadley cell.",
              "Finish the pattern: air rises again at about 60 degrees (low pressure) and sinks at the poles (high pressure), forming the Ferrel and Polar cells.",
              "Six marks need both describe (where the belts are) and explain (why rising means low and sinking means high), with the cells named."
            ],
            answer: "A six-mark answer traces heated air rising at the equator (low pressure, rain), cooling and sinking over the tropics (high pressure, dry), names the Hadley, Ferrel and Polar cells, and explains that rising air lowers pressure at the surface while sinking air raises it."
          },
          tip: "Describe and explain is two jobs. Describe where the high and low pressure belts are; explain them with rising and sinking air."
        },
        {
          heading: "Where tropical storms happen",
          paragraphs: [
            "Tropical storms are huge rotating storms that form over warm oceans. They form in a band between about 5 and 20 degrees of latitude north and south of the equator, over seas whose surface is warmer than 26 degrees Celsius, and they generally travel westwards, carried by the prevailing winds. The same kind of storm has a different name in each part of the world. In the Caribbean, the Atlantic and the eastern Pacific it is a hurricane. In the Indian Ocean, around South East Asia and off north-east Australia it is a cyclone. In the north-west Pacific, near Japan and the Philippines, it is a typhoon.",
            "Notice where tropical storms do not form. They are not found on the equator itself, even though the sea there is warm. The spinning that a tropical storm needs comes from the Coriolis effect, the bending of winds caused by the rotation of the Earth, and that effect is too weak at the equator to set a storm turning. Nor are they found far from the tropics, where the sea is too cool to supply the energy.",
            "This distribution is a direct result of atmospheric circulation. The storms form under the Hadley cell, where the sea is warmest and warm, moist air is already rising. The deck's own map task asks you to label each continent with the number of storms it receives a year and to describe the pattern: use compass directions, name the oceans, give the latitude band and quote the sea temperature."
          ],
          tip: "A describe-the-distribution answer wants a pattern, not a list. Give the latitude band, the oceans, the names used in each region, and one exception (not on the equator)."
        },
        {
          heading: "Two maps, one link",
          paragraphs: [
            "In class you compared two world maps: one of the tracks of every recorded tropical storm, coloured by strength on the Saffir-Simpson scale, and one of average sea surface temperature, where blues and purples show seas below 14 degrees, greens and yellows 15 to 25 degrees, and oranges and reds above 26 degrees. The question was: what is the link?",
            "The storm tracks begin only where the second map is red, that is, over seas above 26 degrees. They avoid the equator and fade out as they move over cooler water or over land. So the link is that tropical storms need warm sea water, warmer than 26 degrees Celsius, because that warm water provides the energy and the evaporation that feed the storm. The two-mark version of this answer states the link (storms form where the sea is warmest) and explains it (warm water provides energy and moisture)."
          ],
          tip: "For a two-mark explain the link question: one mark for stating the pattern, one mark for giving the reason."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which cell of the atmosphere lies between the equator and the tropics?", options: ["The Hadley cell", "The Ferrel cell", "The Polar cell", "The equatorial cell"], answer: 0, why: "The Hadley cell is the loop nearest the equator: air rises at the equator and sinks over the Tropics of Cancer and Capricorn.",
          feedback: [
            "",
            "The Ferrel cell is the middle loop, between the tropics and the Arctic or Antarctic circle. The loop that starts at the equator is the Hadley cell.",
            "The Polar cell is the loop nearest the poles, between the Arctic or Antarctic circle and the pole. The loop next to the equator is the Hadley cell.",
            "There is no cell called the equatorial cell. The three cells are Hadley, Ferrel and Polar, and the Hadley cell is the one that begins at the equator."
          ] },
        { kind: "gap", q: "When warm air rises it creates an area of ___ pressure at the surface, bringing clouds and rain.", answer: "low", options: ["low", "high", "normal"], why: "Rising air takes weight off the surface, so pressure falls. Low pressure goes with rising air, cloud and rain.",
          feedback: {
            "high": "High pressure is made by sinking air, which presses down on the surface and gives dry, clear weather. Rising air does the opposite: it creates low pressure.",
            "normal": "Rising air changes the pressure; it does not leave it the same. Air leaving the surface means less weight pressing down, so the pressure becomes low."
          } },
        { kind: "mcq", q: "Between which latitudes do tropical storms usually form?", options: ["5 to 20 degrees north and south of the equator", "On the equator itself", "30 to 60 degrees north and south", "At the Arctic and Antarctic circles"], answer: 0, why: "Tropical storms form over warm seas between about 5 and 20 degrees of latitude, where the water is warm and the Coriolis effect is strong enough to make them spin.",
          feedback: [
            "",
            "The sea at the equator is warm, but the Coriolis effect is too weak there to set a storm spinning, so tropical storms do not form on the equator itself. They form a little further away, between 5 and 20 degrees.",
            "30 to 60 degrees is the band of the Ferrel cell, where the UK sits; the sea there is too cool to feed a tropical storm. Tropical storms belong to the tropics, between 5 and 20 degrees.",
            "The Arctic and Antarctic circles are cold regions of sinking air. Tropical storms need sea water above 26 degrees Celsius, which is only found near the tropics."
          ] }
      ],
      modules: [
        {
          title: "Three cells, three places",
          task: {
            kind: "match",
            q: "Match each cell of the atmosphere to the part of the Earth it covers.",
            pairs: [
              ["Hadley cell", "Between the equator and the tropics"],
              ["Ferrel cell", "Between the tropics and the Arctic or Antarctic circle"],
              ["Polar cell", "Between the Arctic or Antarctic circle and the pole"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Picture the Earth from the equator to the pole: equator, tropic, circle, pole. That gives three gaps.",
                "The Hadley cell is the one that begins at the equator, where the hottest air rises.",
                "The Polar cell is named after the poles, so it is the one that ends at the pole.",
                "The Ferrel cell is the one left in the middle."
              ],
              example: {
                q: "Match: Tropic of Cancer, Arctic Circle. Choices: the line where the Ferrel cell meets the Polar cell in the north; the line where the Hadley cell meets the Ferrel cell in the north.",
                steps: ["The tropics are the edge of the Hadley cell, so the Tropic of Cancer is where Hadley meets Ferrel.", "The circles are the edge of the Polar cell, so the Arctic Circle is where Ferrel meets Polar."],
                answer: "Tropic of Cancer: where the Hadley cell meets the Ferrel cell. Arctic Circle: where the Ferrel cell meets the Polar cell."
              }
            },
            core: { hint: "Equator, tropic, circle, pole: three gaps, three cells, in the order Hadley, Ferrel, Polar." },
            stretch: { extend: "Explain why the Hadley cell gives both a rainforest belt and a desert belt." }
          },
          explain: "Say, in one sentence, why there are three cells and not one big loop from equator to pole.",
          why: "The Hadley cell runs from the equator to the tropics, the Ferrel cell from the tropics to the Arctic or Antarctic circle, and the Polar cell from the circle to the pole. The same three cells appear in both hemispheres."
        },
        {
          title: "What is this storm called?",
          task: {
            kind: "mcq",
            q: "A tropical storm forms in the north-west Pacific Ocean and heads towards Japan. What is it called in that part of the world?",
            options: ["A typhoon", "A hurricane", "A cyclone", "A tornado"],
            answer: 0,
            feedback: [
              "",
              "Hurricane is the name used in the Caribbean, the Atlantic and the eastern Pacific. In the north-west Pacific, near Japan and the Philippines, the same kind of storm is a typhoon.",
              "Cyclone is the name used in the Indian Ocean, around South East Asia and off north-east Australia. In the north-west Pacific it is a typhoon.",
              "A tornado is a small, violent spinning column of air over land, not a tropical storm hundreds of kilometres across. The storm in the question is a typhoon."
            ]
          },
          contexts: [
            { label: "The Philippines", q: "A tropical storm forms in the north-west Pacific and strikes the Philippines. What is it called in that region?" },
            { label: "Heading for China", q: "A tropical storm crosses the north-west Pacific and makes landfall in southern China. What name is used for it there?" },
            { label: "Weather report", q: "A weather report from Tokyo warns of a powerful tropical storm approaching from the Pacific. What will the report call it?" }
          ],
          explain: "Say, in one sentence, what hurricanes, cyclones and typhoons have in common.",
          levels: {
            support: {
              steps: [
                "All three names describe the same kind of storm; the name depends only on where it is.",
                "Hurricane: Caribbean, Atlantic, eastern Pacific. Cyclone: Indian Ocean, South East Asia, north-east Australia. Typhoon: north-west Pacific.",
                "Find Japan on a map: it is in the north-west Pacific.",
                "Check that the option you choose is a tropical storm at all; a tornado is a different hazard."
              ],
              example: {
                q: "A tropical storm forms in the Caribbean Sea and heads for the Gulf of Mexico. What is it called there?",
                steps: ["The Caribbean is in the Atlantic region.", "The Atlantic and Caribbean name is hurricane."],
                answer: "A hurricane."
              }
            },
            core: { hint: "Japan is in the north-west Pacific. Which of the three regional names belongs to that ocean?" },
            stretch: { extend: "Explain why the same storm can be called by two different names in one week, using Typhoon Haiyan and its Philippine name as your example." }
          },
          why: "The north-west Pacific, including Japan, the Philippines and southern China, uses the name typhoon. Hurricane belongs to the Atlantic and eastern Pacific and cyclone to the Indian Ocean and Australia."
        },
        {
          title: "Why high, why low?",
          task: {
            kind: "written",
            q: "Describe and explain how the circulation of air within the atmosphere causes areas of high and low pressure. Refer to at least two of the three cells in your answer. (6 marks)",
            marks: 6,
            criteria: [
              "Explains that warm air at the equator rises and that rising air creates low pressure at the surface",
              "Explains that the air cools high up, moves away from the equator and sinks over the tropics, creating high pressure",
              "Names the cells correctly (Hadley, Ferrel, Polar) and places at least two of them between the right latitudes",
              "Links each pressure belt to its weather (low: cloud and rain; high: dry, clear)",
              "Writes in a clear sequence from the equator outwards, using the words rise, sink, dense, pressure"
            ],
            model: "The Sun heats the equator more than anywhere else, so the air above it is warmed, expands, becomes less dense and rises. Rising air takes weight off the surface, so a belt of low pressure forms along the equator, with cloud and heavy rain as the rising air cools and condenses. High in the atmosphere this air spreads out towards the poles and cools. Cool, dense air sinks, and it comes down over the tropics at about 30 degrees north and south, pressing on the surface and creating a belt of high pressure with dry, clear weather. This loop from the equator to the tropics is the Hadley cell. Beyond it the Ferrel cell carries air from the tropics to about 60 degrees, where air rises again and pressure is low, and the Polar cell carries very cold, dense air that sinks over the poles, giving high pressure there. So low pressure is found wherever air is rising and high pressure wherever it is sinking."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: where the Sun heats most, and what the warm air does.",
                "Sentence 2: what rising air does to pressure, and what weather that brings.",
                "Sentences 3 and 4: where the air goes next, why it sinks, and what sinking does to pressure. Name the Hadley cell.",
                "Sentence 5: one more cell, with its own rising or sinking and its pressure.",
                "Final sentence: the rule. Rising air means low pressure; sinking air means high pressure."
              ],
              example: {
                q: "In two sentences, explain why the poles are areas of high pressure.",
                steps: ["Say what the air at the poles is like and what it does.", "Say what that does to the pressure."],
                answer: "The air over the poles is very cold and dense, so it sinks towards the ground. Sinking air presses down on the surface, which creates high pressure and dry, settled weather."
              }
            },
            core: { hint: "Follow one parcel of air: heated at the equator, rises (low), cools aloft, sinks at the tropics (high). Then name the cells and add the weather each belt brings." },
            stretch: { extend: "Add a paragraph explaining how this circulation decides where the world's tropical storms can and cannot form." }
          },
          explain: "Say, in one sentence, the rule that links rising or sinking air to the pressure at the surface.",
          why: "Top answers follow the air: heated and rising at the equator (low pressure, rain), cooling and sinking at the tropics (high pressure, dry), rising again at about 60 degrees and sinking at the poles, with the Hadley, Ferrel and Polar cells named and placed."
        }
      ]
    },

    /* ───────────── 2 · formation, structure and passage of a tropical storm ───────────── */
    {
      key: "storm-formation", n: 2, title: "Anatomy of a tropical storm",
      lead: "The eight-step sequence that builds a tropical storm, what a cross-section of one shows, and what the weather does as a storm passes overhead.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "evaporation", means: "water turning into water vapour", sentence: "Warm seas cause a lot of evaporation, which feeds the storm with moisture." },
          { word: "condensation", means: "water vapour turning back into liquid water droplets", sentence: "Condensation in the rising air builds the storm clouds." },
          { word: "cumulonimbus", means: "a towering storm cloud that brings heavy rain", sentence: "Cumulonimbus clouds tower more than 13 kilometres into the sky." },
          { word: "eye", means: "the calm, clear centre of a tropical storm", sentence: "In the eye the wind drops and the Sun comes out." },
          { word: "Coriolis effect", means: "the bending of winds caused by the spin of the Earth", sentence: "The Coriolis effect makes the storm rotate." },
          { word: "landfall", means: "the moment a storm moves from the sea onto the land", sentence: "After landfall the storm loses its supply of warm water and weakens." }
        ],
        passage: [
          "A tropical storm begins over a warm ocean.",
          "The sea heats the air above it, and water evaporates.",
          "The warm, moist air rises fast, making low pressure.",
          "Air rushes in from all around to fill the gap.",
          "This makes strong winds.",
          "The spin of the Earth bends the winds, so the storm starts to rotate.",
          "The rising air cools, and water vapour condenses into huge clouds.",
          "Condensing water gives out heat, and that heat powers the storm.",
          "In the middle, cold air sinks and forms a calm, clear eye.",
          "The storm drifts across the ocean on the prevailing wind.",
          "When it reaches land it loses its fuel and dies away.",
          "A storm can be more than 300 kilometres across."
        ]
      },
      sections: [
        {
          heading: "Eight steps to a storm",
          paragraphs: [
            "In class you sorted eight statements into the sequence that explains how a tropical storm forms. Here is that sequence, in your own words. Step one: air is heated above the surface of a warm tropical ocean. Once the sea reaches around 27 degrees Celsius, evaporation increases sharply. Step two: the evaporation and heating make the warm, moist air rise rapidly, and this creates low pressure at the surface. Step three: the atmosphere tries to even out the pressure, so air rushes in from the surrounding areas of higher pressure towards the centre of the storm. This inrushing air is the storm's strong wind.",
            "Step four: the Coriolis effect, caused by the spin of the Earth, bends the inrushing winds so that they spiral upwards and around the low-pressure centre. A calm eye forms in the middle. Step five: as the air rises it cools, and its water vapour condenses to form huge, towering cumulonimbus clouds that release torrential rain. Condensation gives out heat (the heat that was taken in when the water evaporated), and this released heat is what powers the storm and keeps it growing. Step six: the air reaches its highest point around the eye, where it becomes cold and sinks back down inside the eye. Sinking air cannot form cloud, so the eye is dry, clear and much calmer.",
            "Step seven: the whole storm travels slowly across the ocean in the direction of the prevailing wind, usually westwards, picking up more moisture as it goes. Step eight: when the storm meets land it loses its source of moisture and heat from the ocean, so it loses power and weakens. The key words an examiner looks for are evaporation, rising air, low pressure, condensation, cumulonimbus, Coriolis effect, eye and landfall."
          ],
          tip: "Learn the sequence as a chain of causes: warm sea makes evaporation; evaporation makes rising air; rising air makes low pressure; low pressure pulls in wind; the Earth's spin makes it rotate; condensation releases the heat that powers it."
        },
        {
          heading: "Inside the storm: the cross-section",
          paragraphs: [
            "A cross-section of a tropical storm is a slice through it from side to side. Across the middle is the eye, a cloud-free area 16 to 48 kilometres wide where dry air flows down from the upper atmosphere. Around the eye is the eye wall, a ring of the tallest cloud where the winds and rain are at their most intense. Beyond the eye wall are the rain bands, spiralling arms of cumulonimbus cloud that bring bursts of torrential rain. The whole storm is typically 240 to 320 kilometres across and its clouds may tower more than 13 kilometres high.",
            "At the surface the winds spiral in anticlockwise (in the northern hemisphere) towards the low pressure of the eye. The storm sits over water warmer than 27 degrees Celsius, which is its fuel supply, and the whole system moves slowly across the ocean at about 16 to 24 kilometres per hour. Some storms are so powerful that their energy registers on the seismographs used to record earthquakes.",
            "When you draw the cross-section, label five things: the eye, the eye wall, the rain bands, the flow of dry air sinking into the eye, and the direction of movement with its speed. Add the two measurements the deck gives: the width of the storm and the width of the eye."
          ],
          worked: {
            q: "A tropical storm is moving at 24 kilometres per hour, the top of the usual range. How far will it travel in 10 hours?",
            steps: [
              "Distance = speed × time.",
              "24 km/h × 10 h = 240 km.",
              "Check the sense: 240 km is about the width of a whole storm, so in ten hours the storm has moved roughly its own width."
            ],
            answer: "240 km",
            checks: [{ expr: "SPEED_HIGH*10", value: 240, tol: 0 }]
          },
          tip: "Learn four numbers: eye 16 to 48 km across, storm 240 to 320 km across, cloud more than 13 km high, movement 16 to 24 km/h."
        },
        {
          heading: "Living through the passage of a storm",
          paragraphs: [
            "Imagine standing still while a tropical storm passes over you. First the temperature and the air pressure start to fall, air rises, clouds begin to form and it becomes windy. Then the pressure falls more and more rapidly, the wind increases, cumulonimbus cloud builds and heavy rain begins. Next comes the eye: a strange period of calm with no wind or rain, the Sun appears and it gets warmer, and the pressure is at its very lowest.",
            "The calm does not last. The other side of the eye wall arrives, so wind and heavy rain increase dramatically again, the temperature drops and the pressure begins to rise. Finally, as the storm moves away, the pressure and temperature rise back to normal and the wind and rain subside. A barometer trace of the passage looks like a deep V: falling, falling, lowest in the eye, then rising."
          ],
          tip: "The eye is the trap in exam questions: it is the calmest moment but the lowest pressure. Do not confuse calm with high pressure."
        }
      ],
      gate: [
        { kind: "numeric", q: "The eye of a tropical storm is between 16 and 48 kilometres across. How much wider, in kilometres, is the widest eye than the narrowest?", answer: 32, tolerance: 0, units: "km", check: "EYE_HIGH-EYE_LOW", why: "48 − 16 = 32 km. The eye can be three times wider in one storm than another.",
          misconceptions: [
            { answer: 64, says: "You added the two widths. The question asks how much wider, which is a difference, so subtract: 48 − 16 = 32 km.", check: "EYE_HIGH+EYE_LOW" },
            { answer: 3, says: "That is how many times wider, 48 ÷ 16. The question asks for the difference in kilometres: 48 − 16 = 32 km.", check: "EYE_HIGH/EYE_LOW" },
            { answer: 48, says: "48 km is the width of the widest eye itself. The difference between it and the narrowest eye is 48 − 16 = 32 km.", check: "EYE_HIGH" }
          ] },
        { kind: "gap", q: "In the eye of a tropical storm the air ___, so there is no cloud and the weather is calm.", answer: "sinks", options: ["sinks", "rises", "spins faster"], why: "Air that has risen to the top of the storm cools and sinks back down inside the eye. Sinking air cannot form cloud, so the eye is dry and calm.",
          feedback: {
            "rises": "Rising air is what makes the towering clouds of the eye wall and rain bands. In the eye itself the air does the opposite: it sinks, which is why the eye is clear and calm.",
            "spins faster": "The fastest winds are in the eye wall around the eye, not in the eye itself. Inside the eye the air sinks gently and the wind drops."
          } },
        { kind: "mcq", q: "What provides the energy that powers a tropical storm once it has started?", options: ["Heat released when water vapour condenses into cloud", "Friction between the wind and the sea surface", "Heat from the Earth's core rising through the sea bed", "The pull of the Moon on the ocean"], answer: 0, why: "Warm sea water evaporates, the vapour rises and condenses, and condensation releases heat. That released heat keeps the air rising and the storm growing.",
          feedback: [
            "",
            "Friction with the sea surface slows the wind down; it does not add energy. The storm's power comes from the heat released when the water vapour it has sucked up condenses into cloud.",
            "The Earth's core plays no part in the weather. The heat that drives a tropical storm comes from warm surface water evaporating and then condensing high in the storm.",
            "The Moon causes tides, not storms. A tropical storm is powered by the heat released when water vapour from the warm ocean condenses into cloud."
          ] }
      ],
      modules: [
        {
          title: "Build the storm",
          task: {
            kind: "order",
            q: "Put these stages in the correct order to explain how a tropical storm forms.",
            items: [
              "Air is heated above a warm tropical ocean (around 27 degrees Celsius) and evaporation increases",
              "The warm, moist air rises rapidly and low pressure forms at the surface",
              "Air rushes in from the surrounding higher-pressure areas, causing strong winds",
              "The Coriolis effect makes the winds spiral upwards around the low pressure, and a calm eye forms",
              "The rising air cools and condenses into towering cumulonimbus clouds, releasing torrential rain and the heat that powers the storm",
              "Air at the top cools and sinks back down in the eye, which stays clear, dry and calm",
              "The storm travels across the ocean in the direction of the prevailing wind",
              "The storm reaches land, loses its supply of moisture and heat, and weakens"
            ]
          },
          contexts: [
            { label: "Caribbean hurricane", q: "A hurricane is forming over the warm Caribbean Sea. Put the stages in the correct order to explain how it forms." },
            { label: "Pacific typhoon", q: "A typhoon is forming in the north-west Pacific, east of the Philippines. Put the stages in the correct order to explain how it forms." }
          ],
          levels: {
            support: {
              steps: [
                "Start with the fuel: a warm sea and evaporation. Nothing happens before that.",
                "Then follow the air upwards: rising air, low pressure, air rushing in.",
                "Now the storm takes shape: the Coriolis effect makes it spin and the eye forms; the rising air condenses into cloud; air sinks in the eye.",
                "Finish with the journey: the storm travels on the prevailing wind and finally dies over land."
              ],
              example: {
                q: "Put in order the three stages of a simple thunderstorm forming on a hot afternoon: cloud builds and rain falls; the ground heats the air above it; the warm air rises and cools.",
                steps: ["Heating comes first.", "Rising comes next.", "Cloud and rain come last."],
                answer: "The ground heats the air above it; the warm air rises and cools; cloud builds and rain falls."
              }
            },
            core: { hint: "Fuel first (warm sea, evaporation), then rising air and low pressure, then wind, spin and cloud, then the eye, then the journey and the landfall." },
            stretch: { extend: "Explain why a tropical storm weakens over land but can strengthen again if it moves back out over warm sea." }
          },
          explain: "Say, in one sentence, why the storm cannot start until the sea is warm enough.",
          why: "Warm sea, evaporation and rising air come first, creating low pressure that pulls in wind. The Coriolis effect spins the storm and forms the eye, condensation builds the clouds and releases the heat that powers it, air sinks in the eye, and the storm travels on the prevailing wind until landfall cuts off its fuel."
        },
        {
          title: "The storm passes over",
          task: {
            kind: "order",
            q: "Put these five descriptions in order to show the changes as a tropical storm passes over a place.",
            items: [
              "Temperature and air pressure start to fall, air rises, clouds begin to form and it becomes windy",
              "Pressure falls more rapidly, the wind increases, cumulonimbus cloud forms and there is heavy rain",
              "A period of calm with no wind or rain: the Sun appears, it gets warmer and the pressure is very low",
              "Wind and heavy rain increase dramatically again, the temperature drops and the pressure begins to rise",
              "The pressure and temperature rise, and the wind and rainfall subside as the storm ends"
            ]
          },
          levels: {
            support: {
              steps: [
                "Follow the pressure: it falls, falls faster, reaches its lowest, then starts to rise, then returns to normal.",
                "The lowest pressure is the eye, which is the calm stage in the middle.",
                "The two stormy stages sit either side of the calm eye: one before it, one after it.",
                "The gentle stages are the first and the last."
              ],
              example: {
                q: "Put in order these three stages of walking through a tunnel: daylight fades; it is completely dark; daylight returns.",
                steps: ["Fading comes first.", "Darkness is the middle.", "Returning light is last."],
                answer: "Daylight fades; it is completely dark; daylight returns."
              }
            },
            core: { hint: "Think of the pressure as a V shape: falling, falling fast, lowest in the calm eye, rising, back to normal." },
            stretch: { extend: "Explain why the temperature rises in the eye even though the pressure is at its lowest there." }
          },
          explain: "Say, in one sentence, how you can tell from the weather that the eye has arrived.",
          why: "The passage is symmetrical around the eye: pressure and temperature fall and wind builds; the storm intensifies; the eye brings calm, sun and the lowest pressure; the second half of the storm brings the wind and rain back as pressure starts to rise; then everything subsides."
        },
        {
          title: "Where is the worst weather?",
          task: {
            kind: "mcq",
            q: "In which part of a tropical storm are the winds strongest and the rain heaviest?",
            options: ["The eye wall, the ring of cloud around the eye", "The eye, at the very centre", "The outer edge of the storm", "The area the storm has already passed over"],
            answer: 0,
            feedback: [
              "",
              "The eye is the calm part: air sinks there, there is no cloud and the wind drops. The violent weather is in the eye wall that surrounds it.",
              "The outer edge is where the storm is weakest, with scattered rain bands. The most intense wind and rain are in the eye wall around the centre.",
              "Once the storm has passed, the pressure rises and the wind and rain subside. The worst weather is in the eye wall while the storm is overhead."
            ]
          },
          levels: {
            support: {
              steps: [
                "Picture the cross-section: eye in the middle, eye wall around it, rain bands further out.",
                "The eye is calm because air sinks there.",
                "The tallest clouds and strongest winds are packed into the ring right next to the eye.",
                "So the worst weather is just outside the calm centre, not in it and not at the edge."
              ],
              example: {
                q: "Which part of a tropical storm has no cloud, and why?",
                steps: ["Cloud needs rising air.", "In the eye the air is sinking."],
                answer: "The eye has no cloud because the air there is sinking, and sinking air cannot form cloud."
              }
            },
            core: { hint: "Not the calm centre, not the weak edge: the ring in between." },
            stretch: { extend: "Explain why a town hit by a tropical storm experiences the most dangerous weather twice." }
          },
          explain: "Say, in one sentence, why the eye wall and not the eye has the worst weather.",
          why: "The eye wall is the ring of the tallest cumulonimbus cloud surrounding the calm eye; the air rises fastest there, so it has the most intense wind and rain. The eye itself is calm because air sinks in it."
        }
      ]
    },

    /* ───────────── 3 · effects, responses, Katrina and reducing the risk ───────────── */
    {
      key: "effects-responses", n: 3, title: "Effects, responses and reducing the risk",
      lead: "How to sort a storm's effects into primary and secondary, how the Saffir-Simpson scale grades a storm, what Hurricane Katrina shows about a storm in a HIC, and how monitoring, prediction, protection and planning cut the damage.",
      covers: [5, 6, 9],
      pretext: {
        words: [
          { word: "primary effect", means: "something that happens straight away because of the hazard itself", sentence: "A roof torn off by the wind is a primary effect." },
          { word: "secondary effect", means: "something that happens later because of a primary effect", sentence: "Disease spreading from dirty flood water is a secondary effect." },
          { word: "immediate response", means: "help given straight after the hazard", sentence: "Search and rescue is an immediate response." },
          { word: "long-term response", means: "help given over the months and years after the hazard", sentence: "Rebuilding schools and roads is a long-term response." },
          { word: "Saffir-Simpson scale", means: "the scale from 1 to 5 that grades a tropical storm by its wind speed", sentence: "A category 5 storm on the Saffir-Simpson scale causes catastrophic damage." },
          { word: "storm surge", means: "a rise in sea level pushed onto the coast by a storm", sentence: "The storm surge flooded the streets of the town." }
        ],
        passage: [
          "A tropical storm does damage in two stages.",
          "Primary effects happen at once, caused by the wind, rain and storm surge.",
          "Secondary effects come later, caused by the primary effects.",
          "A flooded road is primary; the shop that closes because no one can reach it is secondary.",
          "The Saffir-Simpson scale grades a storm from category 1 to category 5.",
          "It uses the speed of the wind.",
          "Category 1 starts at 119 kilometres per hour.",
          "Category 5 is above 252 kilometres per hour.",
          "After a storm, people respond.",
          "Immediate responses save lives in the first hours and days.",
          "Long-term responses rebuild homes and roads over months and years.",
          "Before a storm, monitoring, prediction, protection and planning can reduce the damage."
        ]
      },
      sections: [
        {
          heading: "Primary and secondary effects",
          paragraphs: [
            "The effects of a tropical storm can be primary or secondary. Primary effects happen immediately, when the hazard occurs: they are caused directly by the wind, the torrential rain and the storm surge. Buildings lose their roofs or collapse, trees are uprooted, power cables come down, people and livestock are injured or killed by flying debris, and low-lying coasts are flooded by the surge. Secondary effects happen afterwards and are caused by the primary effects. Flooded, contaminated water spreads disease; destroyed crops lead to food shortages and higher prices; blocked roads stop aid arriving; power cuts shut factories and shops so people lose their jobs and income.",
            "The test is always the same: did the storm itself do this, or did something the storm did cause it? A fallen power line is primary. The food that rots in a fridge with no electricity is secondary. In an exam you are expected to classify effects and, in a nine-mark answer, to weigh up which mattered more for people and for the environment.",
            "Geographers also sort effects into social (on people and their lives), economic (on money, jobs and property) and environmental (on land, water and wildlife). An effect can be both primary and economic, or both secondary and social: the two ways of sorting cut across each other."
          ],
          tip: "Primary or secondary asks WHEN and WHY an effect happened. Social, economic or environmental asks WHO or WHAT it happened to. Use both in a nine-mark answer."
        },
        {
          heading: "The Saffir-Simpson scale",
          paragraphs: [
            "The Saffir-Simpson scale measures the strength of a tropical storm from its sustained wind speed and places it in one of five categories. Category 1, with winds of 119 to 153 km/h, does low damage: roof coverings partly removed, mobile homes and carports destroyed, branches broken, power cables damaged. Category 2, 154 to 177 km/h, does moderate damage: flimsy structures destroyed and roofs ripped from poorly built houses. Category 3, 178 to 208 km/h, does extensive damage: older buildings collapse, windows are blown out, trees are uprooted.",
            "Category 4, 209 to 251 km/h, does extreme damage: well-built homes damaged and poorly built ones destroyed, signs and fences ripped out, significant power cuts and water shortages. Category 5, with winds above 252 km/h, is catastrophic: complete devastation, total destruction of homes whatever their age or type, and people at risk even indoors. Typhoon Haiyan, which you meet in the next chapter, was a category 5.",
            "The scale measures the storm, not the disaster. A category 3 storm hitting a crowded, low-lying, poor coast can kill far more people than a category 5 that stays at sea. That is why the next chapter asks what makes a place vulnerable."
          ],
          worked: {
            q: "A storm's sustained wind speed increases from 150 km/h to 210 km/h as it crosses warm water. By how many categories does it rise on the Saffir-Simpson scale?",
            steps: [
              "Find the category for 150 km/h: it lies in 119 to 153, so category 1.",
              "Find the category for 210 km/h: it lies in 209 to 251, so category 4.",
              "Subtract: 4 − 1 = 3 categories.",
              "Check the sense: the damage description moves from low (roof coverings, branches) to extreme (well-built homes damaged)."
            ],
            answer: "3 categories (from category 1 to category 4)",
            checks: [{ expr: "4-1", value: 3, tol: 0 }, { expr: "SS1_LOW", value: 119, tol: 0 }, { expr: "SS4_LOW", value: 209, tol: 0 }]
          },
          tip: "Learn the lower limit of each category: 119, 154, 178, 209, 252 km/h. Everything else follows."
        },
        {
          heading: "Responses, and Hurricane Katrina",
          paragraphs: [
            "Responses are the help available after a hazard to reduce its effects. Immediate (short-term) responses come in the first hours and days and deal mainly with the primary effects: search and rescue, temporary shelters, medical supplies, food and clean water. Long-term responses come over weeks, months and years and deal mainly with the secondary effects: rebuilding damaged homes, factories, roads and schools, and restoring electricity and water supplies.",
            "Hurricane Katrina is your HIC (high income country) case study. The deck follows its formation on satellite images: warm, humid air rose over the Gulf of Mexico, cooled and condensed into cloud, and more air spiralled in to fill the gap left by the rising air; the Coriolis effect gave it the anticlockwise spiral that every northern-hemisphere tropical storm has; air sank in the calm eye, ringed by bands of heavy rain and very high winds. Katrina travelled westwards across the Gulf of Mexico, gaining moisture and speed, and the satellite image you labelled shows it approaching New Orleans on 29 August 2005.",
            "In class you sorted statements about Katrina into cause, effect and response, and you built a mind-map of a tropical storm case study: when and where, the causes, the primary and secondary effects (social, economic and environmental), and the immediate and long-term responses. Use your own notes and the textbook for Katrina's effects and responses; the statements themselves are not reproduced here. Then ask the comparison question the two case studies set up: how did a wealthy country's experience differ from a poorer country's?"
          ],
          tip: "Immediate responses answer the question: what is needed right now to keep people alive? Long-term responses answer: what is needed to get life back to normal?"
        },
        {
          heading: "Reducing the effects: the three Ps and M",
          paragraphs: [
            "The effects of tropical storms can be reduced by four kinds of management, which the deck calls the three Ps and M: prediction, protection, planning and monitoring. Monitoring means tracking a storm as it develops, using the satellites, aircraft and weather stations that modern technology provides. Prediction uses that monitoring to forecast where and when the storm will strike. Because tropical storms can now be predicted and monitored accurately, warnings can be issued in good time: in the North Atlantic, for example, America's national hurricane centre in Miami issues two levels of warning as a storm approaches.",
            "Protection means building to withstand the storm: shutters over windows, houses built on stilts or on raised ground, roofs of strong concrete, and cyclone shelters, strong raised buildings where whole communities can take refuge, as in Bangladesh. Planning means getting people ready before the storm comes: communities are educated about the dangers and how to respond, as in the USA's annual National Hurricane Preparedness Week, and evacuation routes and emergency supplies are organised in advance.",
            "The four work together. Monitoring feeds prediction; prediction gives time for the plans to be put into action; protection means that when the storm arrives there is somewhere safe to be. The deck notes that monitoring and prediction overlap so much for tropical storms that its table simply says one is the same as the other; keep them separate in your answer, with monitoring as the watching and prediction as the forecasting."
          ],
          tip: "For a six-mark management question give all four: one sentence each, with an example (Miami warnings, Bangladesh shelters, Preparedness Week)."
        }
      ],
      gate: [
        { kind: "mcq", q: "A bridge is swept away by the storm surge during a tropical storm. Which kind of effect is this?", options: ["A primary effect", "A secondary effect", "An immediate response", "A long-term response"], answer: 0, why: "The storm surge is part of the hazard itself, and the bridge was destroyed at once, so this is a primary effect.",
          feedback: [
            "",
            "A secondary effect is caused by a primary effect later on, such as a town running short of food because the bridge has gone. The bridge being swept away by the surge itself happened immediately, so it is primary.",
            "A response is help given to people after the hazard. The bridge being destroyed is damage, which is an effect, and it happened at once, so it is a primary effect.",
            "A long-term response is rebuilding over months and years, such as building a new bridge. The destruction of the bridge is an effect, and it is primary because the surge did it directly."
          ] },
        { kind: "numeric", q: "A tropical storm's sustained winds rise from 150 km/h to 210 km/h. By how many categories does it rise on the Saffir-Simpson scale?", answer: 3, tolerance: 0, units: "categories", check: "4-1", why: "150 km/h is category 1 (119 to 153); 210 km/h is category 4 (209 to 251). From 1 to 4 is a rise of 3 categories.",
          misconceptions: [
            { answer: 60, says: "60 is the rise in wind speed in km/h (210 − 150). The question asks about categories: 150 km/h is category 1 and 210 km/h is category 4, so the rise is 3 categories.", check: "210-150" },
            { answer: 4, says: "Category 4 is where the storm ends up, not how many categories it rose. It started at category 1, so the rise is 4 − 1 = 3.", check: "4" },
            { answer: 2, says: "Check the category of 210 km/h again: category 3 ends at 208 km/h, so 210 km/h is category 4. From category 1 that is a rise of 3.", check: "3-1" }
          ] },
        { kind: "gap", q: "Cyclone shelters in Bangladesh and houses built on stilts are examples of ___.", answer: "protection", options: ["protection", "prediction", "monitoring"], why: "Protection means building structures that keep people safe when the storm arrives. Shelters and stilts are protection.",
          feedback: {
            "prediction": "Prediction is forecasting where and when a storm will strike so that warnings can be given. Building a shelter does not forecast anything; it protects people, so it is protection.",
            "monitoring": "Monitoring is tracking a storm with satellites and aircraft as it develops. A cyclone shelter is a building that keeps people safe, which is protection."
          } }
      ],
      modules: [
        {
          title: "Five categories",
          task: {
            kind: "match",
            q: "Match each Saffir-Simpson category to its range of sustained wind speeds.",
            pairs: [
              ["Category 1", "119 to 153 km/h"],
              ["Category 2", "154 to 177 km/h"],
              ["Category 3", "178 to 208 km/h"],
              ["Category 4", "209 to 251 km/h"],
              ["Category 5", "Above 252 km/h"]
            ]
          },
          levels: {
            support: {
              steps: [
                "The categories go up as the wind speed goes up, so the lowest speeds belong to category 1.",
                "Put the five ranges in order from slowest to fastest.",
                "Match them to categories 1 to 5 in that order.",
                "Check that category 5 is the one with no upper limit: above 252 km/h."
              ],
              example: {
                q: "Match these three levels of damage to categories 1, 3 and 5: catastrophic; low; extensive.",
                steps: ["Low damage goes with the weakest storm.", "Catastrophic goes with the strongest.", "Extensive sits in between."],
                answer: "Category 1: low. Category 3: extensive. Category 5: catastrophic."
              }
            },
            core: { hint: "Order the speed ranges from slowest to fastest; the categories follow in the same order." },
            stretch: { extend: "Explain why the Saffir-Simpson category alone is a poor guide to how many people a storm will kill." }
          },
          explain: "Say, in one sentence, what the Saffir-Simpson scale measures and what it does not.",
          why: "Category 1 is 119 to 153 km/h, category 2 is 154 to 177, category 3 is 178 to 208, category 4 is 209 to 251 and category 5 is above 252 km/h. The scale grades the wind, not the damage done to a particular place."
        },
        {
          title: "Primary or secondary?",
          task: {
            kind: "mcq",
            q: "After a tropical storm, flood water contaminated with sewage stands in the streets for days and people begin to fall ill with disease. Which kind of effect is the disease?",
            options: ["A secondary effect, caused by a primary effect", "A primary effect, caused directly by the storm", "An immediate response to the storm", "A long-term response to the storm"],
            answer: 0,
            feedback: [
              "",
              "The storm did not make people ill directly. It caused the flooding (primary), and the dirty flood water then caused the disease. Something caused by a primary effect is a secondary effect.",
              "A response is help given to people, such as medical supplies. Disease is harm, so it is an effect, and because it was caused by the flooding it is a secondary effect.",
              "A long-term response is rebuilding over months and years. Disease spreading is an effect of the storm, not a response to it; it is secondary because the flooding caused it."
            ]
          },
          contexts: [
            { label: "Rotting food", q: "A tropical storm brings down the power lines. With no electricity, food in fridges and freezers rots and shops have nothing to sell. Which kind of effect is the lost food?" },
            { label: "Food prices", q: "A tropical storm flattens the rice fields. In the following weeks there is a shortage of rice and prices in the markets double. Which kind of effect is the rise in prices?" },
            { label: "Lost jobs", q: "A tropical storm destroys a factory's roof. The factory stays shut for months and its workers have no wages. Which kind of effect is the loss of wages?" }
          ],
          levels: {
            support: {
              steps: [
                "Ask: did the wind, rain or surge do this directly, at the moment of the storm?",
                "If yes, it is a primary effect. If it happened later because of something the storm did, it is a secondary effect.",
                "Responses are help given to people, so if the sentence describes harm it is an effect, not a response.",
                "Name the primary effect that led to this secondary one: flooding, power cut, destroyed crops."
              ],
              example: {
                q: "A tropical storm uproots trees across a town. Which kind of effect is this?",
                steps: ["The wind did it directly, at the moment of the storm.", "So it is primary."],
                answer: "A primary effect: the wind uprooted the trees directly."
              }
            },
            core: { hint: "Harm done later because of earlier damage is secondary. Harm done by the storm itself at the time is primary." },
            stretch: { extend: "Explain why secondary effects are often worse in a low income country than in a high income country, using responses in your answer." }
          },
          explain: "Say, in one sentence, the question you ask to decide whether an effect is primary or secondary.",
          why: "Disease, rotting food, higher prices and lost wages all happen after the storm because of something the storm did first (flooding, power cuts, destroyed crops, a wrecked factory). Effects caused by other effects are secondary."
        },
        {
          title: "Three Ps and M",
          task: {
            kind: "match",
            q: "Match each way of reducing the effects of tropical storms to its example.",
            pairs: [
              ["Monitoring", "Tracking a storm with satellites and aircraft as it develops"],
              ["Prediction", "Forecasting the storm's path and issuing two levels of warning, as in Miami"],
              ["Protection", "Building cyclone shelters and houses on stilts, as in Bangladesh"],
              ["Planning", "Educating communities about the dangers, as in National Hurricane Preparedness Week"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Protection is about buildings: anything built to keep people safe.",
                "Planning is about people getting ready in advance: education, drills, evacuation routes.",
                "Monitoring is watching the storm; prediction is using what you watched to forecast and warn.",
                "The example with a warning in it is prediction; the one with watching or tracking is monitoring."
              ],
              example: {
                q: "Match: a hazard map showing which streets would flood in a storm surge; a weather satellite photographing the storm every hour. Choices: monitoring; planning.",
                steps: ["The satellite watches the storm, so that is monitoring.", "The map is prepared in advance so people know where is safe, so that is planning."],
                answer: "Satellite photographs: monitoring. Hazard map: planning."
              }
            },
            core: { hint: "Buildings are protection; education is planning; watching is monitoring; forecasting and warning is prediction." },
            stretch: { extend: "Explain why monitoring and prediction are of little use to a community that has no planning or protection." }
          },
          explain: "Say, in one sentence, how monitoring and prediction are different.",
          why: "Monitoring tracks the storm, prediction forecasts its path and issues warnings, protection builds structures that keep people safe, and planning prepares and educates communities in advance."
        }
      ]
    },

    /* ───────────── 4 · Typhoon Haiyan ───────────── */
    {
      key: "typhoon-haiyan", n: 4, title: "Typhoon Haiyan: a storm in a low income country",
      lead: "The facts and timeline of Typhoon Haiyan, its effects on the Philippines and the responses to it, why some places were hit so much harder than others, and how a choropleth map shows the pattern.",
      covers: [7, 8],
      pretext: {
        words: [
          { word: "typhoon", means: "the name for a tropical storm in the north-west Pacific", sentence: "Typhoon Haiyan struck the Philippines in November 2013." },
          { word: "province", means: "a region of a country, like a county", sentence: "The full force of the storm hit the province of Leyte." },
          { word: "homeless", means: "left without a home to live in", sentence: "In Tacloban, 220 000 people were left homeless." },
          { word: "evacuation", means: "moving people away from danger to a safe place", sentence: "Vietnam ordered the evacuation of more than 600 000 people as the storm approached." },
          { word: "vulnerability", means: "how easily a place and its people are harmed by a hazard", sentence: "Poverty and weak buildings increase a place's vulnerability." },
          { word: "choropleth map", means: "a map that uses darker and lighter shades to show how much of something each area has", sentence: "The choropleth map showed the Visayas in the darkest shade." }
        ],
        passage: [
          "Typhoon Haiyan was one of the strongest tropical storms ever recorded.",
          "In the Philippines it is known as Typhoon Yolanda.",
          "It began as an area of low pressure near Micronesia on 2 November 2013.",
          "It grew into a category 5 storm on the Saffir-Simpson scale.",
          "On 8 November it made landfall in the Philippines, in the province of Leyte.",
          "Its winds reached more than 275 kilometres per hour.",
          "A storm surge about 5 metres high swept into the city of Tacloban.",
          "About 220 000 people in Tacloban were left homeless.",
          "The storm then moved on towards Vietnam and China.",
          "The Philippines is a low income country, so recovery was hard.",
          "Poor people in weak houses on low ground were hit hardest.",
          "Good warnings and strong buildings would have saved many lives."
        ]
      },
      sections: [
        {
          heading: "The storm in numbers",
          paragraphs: [
            "Typhoon Haiyan is your LIC (low income country) case study: a tropical storm hitting a country with far less money to prepare and to recover than the USA had for Katrina. In the Philippines the storm is called Typhoon Yolanda, because each country in the region gives storms its own local name. Haiyan was one of the strongest tropical storms on record, the equivalent of a category 5 on the Saffir-Simpson scale.",
            "The storm formed on 2 November 2013 over the warm western Pacific Ocean, well east of the Philippines. Its wind speeds reached more than 275 kilometres per hour. The full force of the storm hit the province of Leyte in the central Philippines. One of the worst-affected places was the coastal city of Tacloban, where about 220 000 inhabitants were left homeless. Much of the destruction was caused not by the wind but by a storm surge about 5 metres high, a wall of sea water pushed onto the land by the storm.",
            "Why did the storm form where it did? Go back to chapter 1: the western Pacific near Micronesia lies in the tropical band, about 5 to 20 degrees north of the equator, over some of the warmest sea water on Earth. It is exactly where typhoons are expected. The Philippines is used to them: on average eight or nine tropical storms make landfall there every year."
          ],
          tip: "Learn six Haiyan facts: category 5; 2 November 2013; winds over 275 km/h; Leyte; Tacloban, 220 000 homeless; a 5 metre storm surge."
        },
        {
          heading: "A timeline of Typhoon Haiyan",
          paragraphs: [
            "On 2 November a low pressure area developed east of the Pacific islands of Micronesia. On 4 November the system was upgraded to a tropical storm and named Haiyan, as it intensified and headed towards Palau; forecasters warned that it would then travel towards the Philippines. On 7 November the storm entered the Philippines area of responsibility and was given its local name, Yolanda. On 8 November Typhoon Haiyan made landfall in the Philippines at 4.40 am local time, with sustained winds of up to 306 kilometres per hour. On 9 November it left the Philippines and headed towards Vietnam, where more than 600 000 people were evacuated.",
            "The storm then travelled north-westwards and made landfall in southern China, where it died away: over land it had lost its supply of warm, moist air. A map of its track shows the storm's position at six-hour intervals, so you can work out how much warning each country had. Counting the dots is a maths skill the exam can test, and the worked example shows how.",
            "Notice how the timeline shows prediction working. From 4 November, forecasters knew where the storm was heading, which gave the Philippines four days of warning and Vietnam time to evacuate more than 600 000 people. What the warning could not do was make the buildings of Tacloban strong enough or lift the city above a five-metre surge."
          ],
          worked: {
            q: "A map shows the track of Typhoon Haiyan from where it formed to where it reached China as 33 dots, one every six hours. For how many days could the authorities in China watch the storm approaching?",
            steps: [
              "33 dots mark the positions, but the time is in the gaps between them: 33 dots have 32 gaps.",
              "Each gap is six hours: 32 × 6 = 192 hours.",
              "Convert to days: 192 ÷ 24 = 8 days.",
              "Check the sense: the timeline runs from 2 November to about 10 November, which is eight days. The arithmetic agrees with the dates."
            ],
            answer: "8 days",
            checks: [{ expr: "(DOTS-1)*DOT_INTERVAL_H", value: 192, tol: 0 }, { expr: "(DOTS-1)*DOT_INTERVAL_H/HOURS_PER_DAY", value: 8, tol: 0 }]
          },
          tip: "Dots mark moments; time lives in the gaps. Count the gaps (one fewer than the dots) before you multiply."
        },
        {
          heading: "Effects, responses and the choropleth map",
          paragraphs: [
            "The primary effects you have from the deck are the ones the storm did itself: winds above 275 kilometres per hour wrecked buildings across Leyte, and the five-metre storm surge swept through Tacloban, leaving 220 000 people homeless. The deck sends you to the textbook for the full list of effects and for the responses; in class you chose the two most impactful primary effects, the two most impactful secondary effects, the two most important immediate responses and the two most important long-term responses. Use your own notes for those: the point of the exercise was to judge which mattered most, and to be able to explain why.",
            "Responses follow the pattern from chapter 3. Immediate responses deal with the primary effects in the first days: search and rescue, shelter, medical supplies, food and clean water. Long-term responses deal with the secondary effects over months and years: rebuilding homes, roads and schools, restoring power and water, and helping farmers and fishermen earn a living again. In a LIC, much of both kinds of help comes from other countries and from aid agencies.",
            "A choropleth map shows how many people were affected in each region of the Philippines. You chose a scale of colours from lightest (fewest people) to darkest (most), leaving No data areas white, and shaded each region. Eastern Visayas and Central Visayas, the regions the storm crossed, had more than 500 001 people affected and took the darkest shade; Western Visayas had 100 001 to 500 000; Northern Mindanao 10 001 to 100 000; and regions far from the track, such as Central Luzon, under 1000. The map's strength is that the pattern jumps out: the darkest band follows the storm track. Its limits are that a region is coloured as if everyone in it was affected equally, that the ranges hide big differences within a band, and that one region had no data at all."
          ],
          tip: "On a choropleth map the colour shows an amount for the whole area. Describe the pattern (where the darkest areas are), then suggest reasons (the storm track, population, low-lying coasts)."
        },
        {
          heading: "Why were so many people affected?",
          paragraphs: [
            "The most important factor deciding how badly a tropical storm hurts a place is its level of development: a country's wealth decides the quality of its buildings, warnings, roads and emergency services. But the deck lists many other factors, and you sorted them into those that mean more people will be affected and those that mean fewer. More people are affected where there is a lack of communications and warnings, where buildings are lightweight, where the coast is low-lying with no cliffs, where there is a lack of aid, where population density is high, where wind speeds and the storm surge are high, and where the storm's path was not as predicted.",
            "Fewer people are affected where communications and warnings are good, where buildings are sturdy, where there are cliffs or higher land, where short- and long-term aid is available, where population density is low, where the storm is weak or cold air joins it and reduces its energy, where roads stay open and electricity is restored quickly, where the economy is strong, where people have transport to move inland, and where the storm's path was as predicted.",
            "Match these to Haiyan and the pattern makes sense. Tacloban is a crowded, low-lying coastal city in a low income country, hit by a category 5 storm with a five-metre surge: almost every factor on the more side was present. The warning was accurate, which is why so many people in Vietnam could be evacuated, but a warning cannot move a city."
          ],
          tip: "Group the factors in threes for the exam: physical (land height, cliffs, storm strength), human (buildings, population density, wealth) and management (warnings, aid, transport)."
        }
      ],
      gate: [
        { kind: "mcq", q: "What category was Typhoon Haiyan on the Saffir-Simpson scale?", options: ["Category 5", "Category 4", "Category 3", "Category 1"], answer: 0, why: "Haiyan was one of the strongest tropical storms on record, the equivalent of a category 5, with winds above 275 km/h.",
          feedback: [
            "",
            "Category 4 covers winds of 209 to 251 km/h. Haiyan's winds were above 275 km/h, well into category 5, the top of the scale.",
            "Category 3 covers winds of 178 to 208 km/h. Haiyan's winds were above 275 km/h, which makes it a category 5, the strongest kind of storm.",
            "Category 1 is the weakest kind of tropical storm, with winds of 119 to 153 km/h. Haiyan was one of the strongest storms ever recorded: category 5."
          ] },
        { kind: "numeric", q: "Typhoon Haiyan formed as an area of low pressure on 2 November 2013 and made landfall in the Philippines on 8 November. How many days did it take to reach the Philippines?", answer: 6, tolerance: 0, units: "days", check: "HAIYAN_LANDFALL_DAY-HAIYAN_FORM_DAY", why: "From 2 November to 8 November is 8 − 2 = 6 days.",
          misconceptions: [
            { answer: 10, says: "You added the two dates. The time between them is a difference, so subtract: 8 − 2 = 6 days.", check: "HAIYAN_LANDFALL_DAY+HAIYAN_FORM_DAY" },
            { answer: 4, says: "4 days is the time from the storm being named on 4 November to landfall on 8 November. The question starts from when it formed on 2 November: 8 − 2 = 6 days.", check: "HAIYAN_LANDFALL_DAY-HAIYAN_NAMED_DAY" },
            { answer: 8, says: "8 is the date of landfall, not the number of days. Subtract the date it formed: 8 − 2 = 6 days.", check: "HAIYAN_LANDFALL_DAY" }
          ] },
        { kind: "gap", q: "The Philippines is a ___, which is the main reason Typhoon Haiyan did so much harm.", answer: "low income country", options: ["low income country", "high income country", "country with no coastline"], why: "The deck classes the Philippines as a LIC. Level of development is the most important factor deciding how badly a storm hurts a place.",
          feedback: {
            "high income country": "A high income country, like the USA when Katrina struck, has money for strong buildings, warnings and rescue services. The Philippines is a low income country, and that is why Haiyan was so destructive.",
            "country with no coastline": "The Philippines is a group of islands with thousands of kilometres of coast; the storm surge hit Tacloban from the sea. It is a low income country, and that, not its geography, is the main reason for the scale of the harm."
          } }
      ],
      modules: [
        {
          title: "Haiyan day by day",
          task: {
            kind: "order",
            q: "Put the events of Typhoon Haiyan in the order they happened.",
            items: [
              "A low pressure area develops east of the Pacific islands of Micronesia (2 November)",
              "The system is upgraded to a tropical storm, named Haiyan, and heads towards Palau (4 November)",
              "The storm enters the Philippines area of responsibility and is given the local name Yolanda (7 November)",
              "Haiyan makes landfall in the Philippines at 4.40 am with winds of up to 306 km/h (8 November)",
              "Haiyan leaves the Philippines for Vietnam, where more than 600 000 people are evacuated (9 November)"
            ]
          },
          levels: {
            support: {
              steps: [
                "A storm has to exist before it can be named: low pressure area first, then named storm.",
                "It has to reach the Philippines area before it can be given its Philippine name.",
                "Landfall comes after the storm arrives in the area, and leaving comes after landfall.",
                "Check with the dates in brackets: they should run 2, 4, 7, 8, 9."
              ],
              example: {
                q: "Put in order these three stages of a storm's life: it is named; it dies out over land; a low pressure area forms over the sea.",
                steps: ["The low pressure area must form first.", "Naming happens once it is a storm.", "Dying out is the end."],
                answer: "A low pressure area forms over the sea; it is named; it dies out over land."
              }
            },
            core: { hint: "Form, name, arrive, strike, leave. The dates run 2, 4, 7, 8, 9 November." },
            stretch: { extend: "Explain what the gap between 4 November and 8 November shows about the value of prediction, and what it could not change." }
          },
          explain: "Say, in one sentence, why the storm was given a second name on 7 November.",
          why: "The low pressure area formed on 2 November, became the named storm Haiyan on 4 November, entered the Philippines area of responsibility as Yolanda on 7 November, made landfall on 8 November and left for Vietnam on 9 November."
        },
        {
          title: "Counting the warning",
          task: {
            kind: "numeric",
            q: "A map of Typhoon Haiyan's track shows its position as 33 dots at six-hour intervals, from where it formed to where it reached China. How many days of warning does the map give the authorities in China? Give your answer in days.",
            answer: 8, tolerance: 0, units: "days", check: "(DOTS-1)*DOT_INTERVAL_H/HOURS_PER_DAY",
            why: "33 dots have 32 gaps between them. 32 × 6 = 192 hours, and 192 ÷ 24 = 8 days.",
            misconceptions: [
              { answer: 8.25, says: "You multiplied all 33 dots by six hours (198 hours). Time lies in the gaps between the dots, and 33 dots have 32 gaps: 32 × 6 = 192 hours = 8 days.", check: "DOTS*DOT_INTERVAL_H/HOURS_PER_DAY" },
              { answer: 192, says: "192 is the number of hours. The question asks for days, so divide by 24: 192 ÷ 24 = 8 days.", check: "(DOTS-1)*DOT_INTERVAL_H" },
              { answer: 32, says: "32 is the number of six-hour gaps. Each gap is six hours, so multiply by 6 to get 192 hours, then divide by 24 to get 8 days.", check: "DOTS-1" }
            ]
          },
          contexts: [
            { label: "Vietnam", q: "A tracking map shows Typhoon Haiyan as 33 dots at six-hour intervals between its formation and the Vietnamese coast. How many days does the map cover? Give your answer in days.", check: "(DOTS-1)*DOT_INTERVAL_H/HOURS_PER_DAY" },
            { label: "Weather forecaster", q: "A forecaster plots a typhoon's position every six hours. By the time it reaches land she has plotted 33 dots. For how many days has she been tracking it? Give your answer in days.", check: "(DOTS-1)*DOT_INTERVAL_H/HOURS_PER_DAY" },
            { label: "Classroom map", q: "On the classroom wall map a storm's path is marked with 33 dots, one every six hours from formation to landfall. How many days did the storm take? Give your answer in days.", check: "(DOTS-1)*DOT_INTERVAL_H/HOURS_PER_DAY" }
          ],
          levels: {
            support: {
              steps: [
                "Count the gaps, not the dots: 33 dots have 32 gaps.",
                "Each gap is six hours, so multiply: 32 × 6.",
                "That gives hours. A day is 24 hours, so divide by 24.",
                "Check the sense against the timeline: 2 November to about 10 November is eight days."
              ],
              example: {
                q: "A storm's track is shown as 13 dots at six-hour intervals. How many days does it cover?",
                steps: ["13 dots have 12 gaps.", "12 × 6 = 72 hours.", "72 ÷ 24 = 3 days."],
                answer: "3 days",
                checks: [{ expr: "(13-1)*6/24", value: 3, tol: 0 }]
              }
            },
            core: { hint: "Gaps are one fewer than dots. Multiply the gaps by six hours, then divide by 24." },
            stretch: { extend: "Explain why eight days of warning helped China far more than it could help Tacloban, which was struck on day six." }
          },
          explain: "Say, in one sentence, why you subtract one from the number of dots before multiplying.",
          why: "33 dots have 32 six-hour gaps between them: 32 × 6 = 192 hours, which is 192 ÷ 24 = 8 days. The common slip is to multiply by 33 or to forget to convert hours to days."
        },
        {
          title: "The nine-mark case study",
          task: {
            kind: "written",
            q: "Choose a tropical storm you have studied. Describe the effects of the storm on people and on the environment, and judge which effects were most significant. (9 marks)",
            marks: 9,
            criteria: [
              "Names the storm, the country and the date (Typhoon Haiyan, the Philippines, November 2013) and gives its category",
              "Describes at least two primary effects with specific detail (winds over 275 km/h, the 5 metre storm surge, Leyte, Tacloban's 220 000 homeless)",
              "Describes at least two secondary effects and explains how a primary effect caused each",
              "Separates effects on people (social and economic) from effects on the environment, with an example of each",
              "Reaches a judgement about which effects were most significant and links it to the Philippines being a low income country"
            ],
            model: "Typhoon Haiyan, known locally as Yolanda, struck the Philippines on 8 November 2013 as a category 5 storm with winds above 275 kilometres per hour. Its primary effects on people were immediate: the full force of the storm hit the province of Leyte, and a storm surge about five metres high swept through the coastal city of Tacloban, destroying homes and leaving around 220 000 people homeless. The surge and wind also damaged the environment directly, stripping trees, flooding farmland with salt water and burying the coast in debris. The secondary effects followed from these. Homeless families crowded into shelters where disease could spread; with roads blocked and power cut, food and clean water ran short and prices rose; farmers and fishermen whose fields and boats were destroyed lost their income for months. In my judgement the effects on people were the most significant. The environment of a tropical coast recovers over the years, but 220 000 people losing their homes in a low income country, where there is little money for strong buildings or quick rebuilding, meant the secondary effects of homelessness, disease and lost income lasted long after the storm had gone, and that is why the Philippines needed so much aid from other countries."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1: name, place, date, category. One sentence.",
                "Paragraph 2: two primary effects on people, with the deck's numbers (wind speed, surge height, homeless in Tacloban).",
                "Paragraph 3: two secondary effects, each introduced with because: because homes were destroyed, because roads were blocked.",
                "Paragraph 4: one effect on the environment, primary or secondary.",
                "Conclusion: say which effects were most significant and give one reason linked to the Philippines being a LIC."
              ],
              example: {
                q: "In three sentences, describe one primary and one secondary effect of a flood on a village, and say which was more significant.",
                steps: ["Primary: what the water did at once.", "Secondary: what followed because of that.", "Judge, with a reason."],
                answer: "The flood water filled the ground floor of every house in the village, which was a primary effect. Because the houses were soaked, families had to live in temporary accommodation for months while they dried out, which was a secondary effect. The secondary effect was more significant because it lasted far longer and cost the families more."
              }
            },
            core: { hint: "Facts first (category, date, Leyte, Tacloban, surge, homeless), then primary versus secondary, people versus environment, then a judgement that mentions LIC." },
            stretch: { extend: "Add a paragraph comparing Haiyan's effects with those of Hurricane Katrina in the USA, and explain the difference using level of development." }
          },
          explain: "Say, in one sentence, why a nine-mark answer needs a judgement as well as a description.",
          why: "Top answers give specific detail (category 5, 275 km/h, Leyte, Tacloban, 220 000 homeless, a 5 metre surge), separate primary from secondary and people from environment, and end with a reasoned judgement that uses the country's level of development."
        }
      ]
    },

    /* ───────────── 5 · weather hazards in the UK ───────────── */
    {
      key: "uk-weather", n: 5, title: "Weather hazards in the UK",
      lead: "Weather and climate, the four directions the UK's weather comes from, the hazards it brings, the evidence for and against the UK's weather becoming more extreme, and what climate change may have to do with it.",
      covers: [10, 11, 14, 15],
      pretext: {
        words: [
          { word: "weather", means: "the conditions in the atmosphere from day to day", sentence: "Today's weather is wet and windy." },
          { word: "climate", means: "the average weather of a place over a long time, usually 30 years", sentence: "The UK has a mild, wet climate." },
          { word: "depression", means: "an area of low pressure that brings cloud, rain and wind", sentence: "A depression crossing from the Atlantic brought a day of heavy rain." },
          { word: "heatwave", means: "a long spell of unusually hot weather", sentence: "The 2003 heatwave brought record temperatures to Kent." },
          { word: "drought", means: "a long period with much less rain than normal", sentence: "The drought left reservoirs low and crops dying." },
          { word: "extreme weather", means: "weather that is far outside what is normal for a place and can cause serious harm", sentence: "Record floods and record heat are both extreme weather." }
        ],
        passage: [
          "Weather is what the atmosphere does from day to day.",
          "Climate is the average weather over about 30 years.",
          "The UK has a mild climate, but it still gets extreme weather.",
          "The UK sits where weather from four directions meets.",
          "Arctic air from the north brings snow and bitter cold.",
          "Winter weather from the east can be severe.",
          "Hot air from the south brings heatwaves and drought.",
          "Storms from the Atlantic bring heavy rain and strong winds to the west.",
          "Depressions are areas of low pressure that cross the UK from the west.",
          "They bring most of our storms and floods.",
          "Some people think the UK's weather is becoming more extreme.",
          "There is evidence for this view and evidence against it."
        ]
      },
      sections: [
        {
          heading: "Weather, climate and the UK's roundabout",
          paragraphs: [
            "Weather is a description of the day-to-day conditions of the atmosphere: today's temperature, rain, wind and cloud. Climate is the average weather over a long period of time, usually 30 years. Weather hazards are extreme weather events, and even though the UK has a moderate climate, it experiences extreme weather. Most of the UK's weather is driven towards it by south-westerly prevailing winds, fuelled by the warm, moist Atlantic Ocean, so strong winds and heavy rain batter the exposed western side of the country most often.",
            "The deck pictures the UK as a weather roundabout, because it sits at the meeting point of several kinds of weather from different directions. From the north, Arctic air brings heavy snow and bitterly cold conditions. From the east, continental air brings severe winter weather. From the south, hot and sunny weather can lead to heatwaves and droughts. From the west, storms from the Atlantic bring heavy rain and strong winds. Which weather the UK gets depends on which direction the air is coming from.",
            "Depressions are the key word for the west. A depression is an area of low atmospheric pressure, and depressions cross the UK regularly, bringing heavy rain that can trigger river floods and winds that can cause great storm damage, especially on the west coast. When depressions are not passing over as usual, cold conditions from the north or east take over instead."
          ],
          tip: "Give the four directions and a hazard for each: north, snow; east, severe winter; south, heatwave and drought; west, Atlantic storms."
        },
        {
          heading: "The UK's weather hazards",
          paragraphs: [
            "Storms. A cluster of strong depressions caused widespread wind damage in late 2013. During the St Jude storm of 28 October 2013, winds of 160 km/h killed 5 people, felled trees and toppled lorries; further storms in the week before Christmas brought more deaths and disruption, with thousands losing power and travellers stranded at Gatwick airport. The UK also gets tornadoes: in 2005 a tornado in Birmingham caused 19 injuries and damage costing £40 million.",
            "Cold. The winters of 1946 to 1947, 1962 to 1963 and 1978 to 1979 were exceptionally cold, and 2010 to 2011 and 2014 to 2015 were also unusually cold. Frost of around −10 °C can kill crops and cattle; freezing conditions cancelled over 17 000 trains in January 2014; blizzards bring transport to a halt and cause costly airline delays. Prolonged rainfall. Rain over a long period leads to river floods, especially in late winter and early spring when melting snow adds to the problem; in the very wet winter of 2014, flooding was widespread across much of the south of England.",
            "Heatwaves and drought. A drought is an extended period of low or absent rainfall compared with the expected average for the region. The 2003 drought and heatwave affected large parts of Europe, where it was linked to 20 000 deaths, and brought what was then the UK's highest recorded temperature, 38.5 °C at Faversham in Kent. The same deck slide puts 2000 deaths in the UK down to the 2003 heat. Each hazard also triggers secondary hazards: a storm can cause floods and power cuts, a drought can cause crop failure and wildfires."
          ],
          tip: "For a four-mark outline the evidence question, give two hazards and one piece of evidence for each, with a date and a number. A list without evidence earns at most two marks."
        },
        {
          heading: "Is the UK's weather becoming more extreme?",
          paragraphs: [
            "A weather event is extreme when it is well outside what is normal for the place and the time of year, and when it can cause serious harm to people or the economy. Thunderstorms, prolonged rainfall, drought, extreme heat, heavy snow and extreme cold can all be extreme weather. The deck's examples: the 2003 heatwave, when temperatures in Kent reached 38.5 °C and 2000 deaths in the UK were linked to the heat; the summer of 2007, the wettest on record, when 414 mm of rain fell between June and August; and the Beast from the East in March 2018, when extreme cold and blizzards cost businesses about £300 million over four days. Your timeline of UK extreme weather runs: heatwave 2003, floods 2007, floods 2008, floods and heavy snow 2009, heavy snow 2010, floods 2013 to 2014 and floods 2015 to 2016.",
            "In class you sorted statements into evidence for and against the UK's weather becoming more extreme. For: UK temperatures seem to follow the global warming pattern, and the top ten hottest years on record have all occurred in the last 20 years; there have been many extreme events in the past two decades, including heatwaves, droughts and major flooding; parts of Cumbria around Carlisle have been hit repeatedly in the last decade by floods that should statistically happen only once every 100 years; and rainfall records for 2004 to 2007 show several months with more than 150 per cent of the national average.",
            "Against: some kinds of extreme weather are rarer than 30 years ago, since heavy snowfall and cold winters have declined and the River Thames, which iced over every year in the nineteenth century, no longer does; weather is naturally highly variable and extreme events have always happened, but they are far more publicised in the media now, so awareness is growing; the statement about El Niño doubling the chance of extreme weather is about America and Asia, not the UK; and the Met Office inviting the public to name storms tells us about publicity, not about the weather itself. A good answer uses two pieces of evidence on each side and reaches its own conclusion."
          ],
          worked: {
            q: "In the summer of 2007, 414 mm of rain fell between June and August. What was the average rainfall per month?",
            steps: [
              "June, July and August are three months.",
              "414 ÷ 3 = 138 mm per month.",
              "Check the sense: the UK's typical summer month has well under 100 mm in many places, so 138 mm every month explains why 2007 was the wettest summer on record."
            ],
            answer: "138 mm per month",
            checks: [{ expr: "WET_SUMMER_MM/3", value: 138, tol: 0 }]
          },
          tip: "Evidence needs a number and a date. The wettest summer on record is a claim; 414 mm between June and August 2007 is evidence."
        },
        {
          heading: "Climate change, extreme weather and the June 2017 heat wave",
          paragraphs: [
            "Extreme weather is not only a UK story. There have been devastating floods in Pakistan (2010), intense heatwaves in Russia (2010) and severe droughts in the western USA (2014). No single extreme weather event can be blamed on climate change, but scientists believe that a trend over many years could be linked to a warming world. More energy in the atmosphere could lead to more intense storms, and atmospheric circulation may change, bringing floods to normally dry regions and heatwaves to normally cooler ones. In 2011 the Intergovernmental Panel on Climate Change (IPCC) concluded that extreme weather would become more common as global warming heats the planet.",
            "One suggested mechanism links back to chapter 1. German scientists have suggested that weather patterns have in recent years stayed in place for long periods, giving prolonged heatwaves and droughts or prolonged heavy rain and floods. The Arctic is currently warming at twice the global average rate. As the Hadley and Ferrel cells expand towards the poles, the atmospheric circulation in the northern hemisphere's middle latitudes, where the UK sits, may slow down, so that weather lingers instead of moving on. This could help to explain recent UK heatwaves and floods. A four-mark suggest answer gives this chain: climate change, a warming Arctic, slower circulation, weather lingering, more extreme events.",
            "Your extreme weather case study is the UK heat wave of June 2017, which you researched independently. The deck gives you the frame, not the facts: the location and dates of the heat wave and the places that recorded the highest temperatures; the causes, including the air masses involved; the social impacts on people such as health problems; the economic impacts such as businesses closing and transport disruption; the environmental impacts such as wildfires, thunderstorms and flash flooding, drought and damage to farming; and the management strategies used to reduce the risk. Fill the frame from your own research notes and keep the six headings in that order."
          ],
          tip: "Causes of a UK extreme weather event always involve where the air came from: name the direction and the air mass."
        }
      ],
      gate: [
        { kind: "mcq", q: "From which direction do the storms that bring heavy rain and strong winds to the UK usually come?", options: ["From the west, off the Atlantic Ocean", "From the north, out of the Arctic", "From the east, across the continent", "From the south, out of Africa"], answer: 0, why: "South-westerly prevailing winds carry depressions in from the Atlantic, bringing heavy rain and strong winds, especially to the west coast.",
          feedback: [
            "",
            "Arctic air from the north brings heavy snow and bitter cold, not the UK's rain-bearing storms. Storms arrive from the west, carried by Atlantic depressions.",
            "Air from the east brings severe winter weather, dry and cold. The heavy rain and strong winds come from Atlantic depressions in the west.",
            "Hot air from the south brings heatwaves and drought. The UK's storms, with their heavy rain and strong winds, come off the Atlantic from the west."
          ] },
        { kind: "gap", q: "Climate is the average weather of a place over a long period, usually ___ years.", answer: "30", options: ["30", "3", "300"], why: "Climate is measured as the average weather over about 30 years. Weather is what happens day to day.",
          feedback: {
            "3": "Three years is far too short: a few unusual years would change the climate every time. Climate is averaged over a long period, usually 30 years.",
            "300": "Three hundred years is longer than reliable weather records have been kept in most places. The usual period for working out a climate average is 30 years."
          } },
        { kind: "numeric", q: "In the summer of 2007, 414 mm of rain fell between June and August. What was the average rainfall per month, in millimetres?", answer: 138, tolerance: 0, units: "mm", check: "WET_SUMMER_MM/3", why: "June, July and August are three months: 414 ÷ 3 = 138 mm per month.",
          misconceptions: [
            { answer: 1242, says: "You multiplied by three instead of dividing. 414 mm is the total for three months, so each month averages 414 ÷ 3 = 138 mm.", check: "WET_SUMMER_MM*3" },
            { answer: 207, says: "You divided by two, but June to August is three months. 414 ÷ 3 = 138 mm per month.", check: "WET_SUMMER_MM/2" },
            { answer: 414, says: "414 mm is the total for the whole summer. The question asks for the average per month: 414 ÷ 3 = 138 mm.", check: "WET_SUMMER_MM" }
          ] }
      ],
      modules: [
        {
          title: "The weather roundabout",
          task: {
            kind: "match",
            q: "Match each direction the UK's weather comes from to the hazard it brings.",
            pairs: [
              ["From the north (Arctic air)", "Heavy snow and bitterly cold conditions"],
              ["From the east (the continent)", "Severe winter weather"],
              ["From the south", "Heatwaves and droughts"],
              ["From the west (the Atlantic)", "Storms with heavy rain and strong winds"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Think about what lies in each direction: ice to the north, a big land mass to the east, hot countries to the south, a warm ocean to the west.",
                "Cold places send cold air: north gives snow and the east gives harsh winters.",
                "Hot places send hot air: the south gives heat and drought.",
                "An ocean sends wet, windy air: the west gives storms."
              ],
              example: {
                q: "Match: a summer of drought; a week of blizzards. Choices: hot air from the south; Arctic air from the north.",
                steps: ["Drought needs hot, dry air, which comes from the south.", "Blizzards need bitterly cold air, which comes from the north."],
                answer: "Drought: hot air from the south. Blizzards: Arctic air from the north."
              }
            },
            core: { hint: "What is in each direction decides the air: ice, continent, hot land, warm ocean." },
            stretch: { extend: "Explain why the west of the UK gets more rain than the east, using prevailing winds and the Atlantic." }
          },
          explain: "Say, in one sentence, why the UK gets so many different kinds of weather.",
          why: "The UK sits where air from four directions meets: Arctic air from the north brings snow and cold, continental air from the east brings severe winters, air from the south brings heat and drought, and Atlantic depressions from the west bring storms."
        },
        {
          title: "Evidence for or against?",
          task: {
            kind: "mcq",
            q: "Which of these statements did the class sort as evidence AGAINST the UK's weather becoming more extreme?",
            options: [
              "Heavy snowfall and cold winters have declined over the last 30 years, and the Thames no longer freezes",
              "The top ten hottest years on record have all occurred in the last 20 years",
              "Parts of Cumbria around Carlisle have been hit repeatedly by floods that should happen once every 100 years",
              "Rainfall records for 2004 to 2007 show several months above 150 per cent of the national average"
            ],
            answer: 0,
            feedback: [
              "",
              "Record-breaking hot years are evidence FOR the weather becoming more extreme. The statement about cold winters declining was sorted as evidence against, because one kind of extreme weather is becoming rarer.",
              "Floods that should be once-a-century events happening repeatedly in Cumbria is evidence FOR more extreme weather. The statement sorted as against was the one about cold winters and snow declining.",
              "Months with more than 150 per cent of average rainfall is evidence FOR more extreme weather. The statement about heavy snow and cold winters declining was sorted as evidence against."
            ]
          },
          contexts: [
            { label: "Debate", q: "In a class debate, one side argues that the UK's weather is NOT becoming more extreme. Which of these statements would that side use as its evidence?" },
            { label: "Exam answer", q: "A pupil writing the against paragraph of a six-mark answer needs one piece of evidence. Which of these statements belongs in that paragraph?" }
          ],
          levels: {
            support: {
              steps: [
                "Evidence FOR more extreme weather describes extreme things happening more often: record heat, record rain, repeated floods.",
                "Evidence AGAINST describes extreme things happening less often, or explains the events away.",
                "Look for the statement that says something extreme has declined or become rarer.",
                "Check the other three: each describes a record or a repeat, which is evidence for."
              ],
              example: {
                q: "Is this statement evidence for or against the UK's weather becoming more extreme: extreme events are reported far more in the media now, so people are more aware of them?",
                steps: ["It does not say the weather has changed.", "It explains why we notice extreme weather more."],
                answer: "Against: it suggests awareness has grown, not the weather itself."
              }
            },
            core: { hint: "Three of the statements describe records or repeats. One describes something extreme becoming rarer." },
            stretch: { extend: "Argue that the decline in cold winters could in fact be used as evidence of a changing climate, and explain why the deck still sorts it as against." }
          },
          explain: "Say, in one sentence, what makes a statement evidence against the weather becoming more extreme.",
          why: "Declining snow and cold winters, with the Thames no longer freezing, show one kind of extreme weather becoming rarer, so the class sorted it as evidence against. The other three statements describe records and repeats, which are evidence for."
        },
        {
          title: "Is the UK's weather becoming more extreme?",
          task: {
            kind: "written",
            q: "Extreme weather is becoming more common in the UK. Use evidence to discuss this statement and reach your own conclusion. (6 marks)",
            marks: 6,
            criteria: [
              "Defines extreme weather in your own words in the introduction",
              "Gives two pieces of evidence that support the statement, each with a date or figure (for example 2003 heat, 2007 rainfall, Carlisle floods, hottest years)",
              "Gives two pieces of evidence or arguments against it (declining cold winters, natural variability and media attention)",
              "Explains each piece of evidence rather than listing it (uses because or which shows)",
              "Ends with a clear conclusion that states your own view"
            ],
            model: "Extreme weather is weather that is far outside what is normal for a place and time of year and that can cause serious harm. There is strong evidence that it is becoming more common in the UK. The top ten hottest years on record have all occurred in the last 20 years, and in 2003 temperatures in Kent reached 38.5 °C, with 2000 deaths linked to the heat, which shows that record heat is now happening in our lifetimes. Rainfall is also breaking records: 414 mm fell in the summer of 2007, the wettest on record, and parts of Cumbria around Carlisle have been flooded repeatedly by events that should statistically happen only once in 100 years. On the other hand, some extreme weather is becoming rarer: heavy snow and cold winters have declined and the Thames, which froze every year in the nineteenth century, no longer does, so the pattern is one of change rather than simply more extremes. Weather is also naturally variable, and extreme events are reported far more in the media now, so part of the impression may be increased awareness. Overall I agree with the statement: the evidence of record heat and record rainfall is measured and dated, while the arguments against explain why we notice extremes, not why they are happening less."
          },
          levels: {
            support: {
              steps: [
                "Introduction: define extreme weather in one sentence.",
                "Paragraph for: two pieces of evidence, each with a date and a number, each followed by which shows that.",
                "Paragraph against: two arguments, each explained.",
                "Conclusion: one sentence that says what you think and why one side is stronger."
              ],
              example: {
                q: "In two sentences, give one piece of evidence that UK rainfall is becoming more extreme and explain what it shows.",
                steps: ["State the evidence with its number and date.", "Say what it shows."],
                answer: "In the summer of 2007, 414 mm of rain fell between June and August, the wettest summer on record. This shows that rainfall totals far above the normal average are now being recorded in the UK."
              }
            },
            core: { hint: "Define, two for, two against, conclude. Every piece of evidence needs a date or a number and a sentence saying what it shows." },
            stretch: { extend: "Add a paragraph suggesting how climate change might explain the evidence for, using the warming Arctic and the slowing of atmospheric circulation." }
          },
          explain: "Say, in one sentence, the difference between a piece of evidence and a claim.",
          why: "Top answers define the term, give dated and numbered evidence on both sides, explain what each piece shows, and conclude with a clear personal view."
        }
      ]
    },

    /* ───────────── 6 · the Somerset Levels floods ───────────── */
    {
      key: "somerset-floods", n: 6, title: "The Somerset Levels floods, 2014",
      lead: "Where the Somerset Levels are, why they flooded in the winter of 2013 to 2014, the social, economic and environmental impacts, and how the immediate and long-term responses reduced the risk.",
      covers: [12, 13],
      pretext: {
        words: [
          { word: "low-lying", means: "land that is only a little above sea level", sentence: "The Somerset Levels are low-lying, so water drains away slowly." },
          { word: "wetland", means: "land that is often wet or covered in shallow water", sentence: "The Levels are a mix of farmland and wetland." },
          { word: "dredging", means: "digging silt out of a river bed so the river can hold more water", sentence: "Dredging the River Parrett gave the water more room." },
          { word: "contaminated", means: "made dirty or dangerous by something mixed into it", sentence: "The flood water was contaminated with sewage and oil." },
          { word: "Flood Action Plan", means: "the £20 million plan to reduce flooding on the Levels in future", sentence: "The Flood Action Plan included dredging and raising roads." },
          { word: "tidal barrage", means: "a barrier across a river mouth that controls the flow of the tide", sentence: "A tidal barrage could stop high tides pushing water up the rivers." }
        ],
        passage: [
          "The Somerset Levels are in south-west England.",
          "They are low, flat farmland and wetland.",
          "The Rivers Tone and Parrett drain the Levels into the Severn Estuary.",
          "In the winter of 2013 to 2014 it rained for weeks.",
          "January 2014 was the wettest January since records began in 1910.",
          "High tides pushed sea water up the rivers.",
          "The rivers had not been dredged for at least 20 years.",
          "They burst their banks, and the Levels flooded.",
          "More than 600 houses flooded and 16 farms were evacuated.",
          "Villages such as Moorland and Muchelney were cut off.",
          "Rescue boats and giant pumps were the immediate response.",
          "A £20 million plan to dredge rivers and raise roads was the long-term response."
        ]
      },
      sections: [
        {
          heading: "Where are the Somerset Levels?",
          paragraphs: [
            "Somerset is a county in south-west England. The Somerset Levels and the Somerset Moors form an extensive area of low-lying farmland and wetland, with the Bristol Channel and the Quantock Hills to the west and the Mendip Hills to the north. Several rivers drain the area, most notably the Tone and the Parrett, which flow north to the Severn Estuary through the town of Bridgwater.",
            "Flooding has happened naturally here for centuries: the Levels are a flat basin only a little above sea level, and in winter the rivers have always spilled across them. What has changed is that the area has been developed for farming and for settlement, so many more people and properties are now at risk from an extreme flood."
          ],
          tip: "Locate means place it: south-west England, Somerset, between the Quantock and Mendip Hills, drained by the Tone and Parrett to the Severn Estuary."
        },
        {
          heading: "What caused the floods?",
          paragraphs: [
            "The floods of December 2013 and January 2014 had both physical and human causes. The weather came first. January 2014 was the wettest January since records began in 1910. A succession of depressions, areas of low pressure driven across the Atlantic Ocean by the prevailing winds, brought wet weather lasting several weeks. About 350 mm of rain fell in January and February, roughly 100 mm above the average for those two months.",
            "The sea made it worse. High tides and storm surges swept water up the rivers from the Bristol Channel. That stopped the fresh water from the rivers reaching the sea, so the rivers backed up and burst their banks. The human cause was neglect: the rivers had not been dredged for at least 20 years, so their channels had become clogged with sediment and could hold far less water than before.",
            "So the causes link together: record rainfall on a low, flat basin, rivers whose capacity had shrunk because they were not dredged, and tides blocking the way out. Any one of them would have caused problems; all three together caused the worst flooding the Levels had seen."
          ],
          worked: {
            q: "About 350 mm of rain fell on the Somerset Levels in January and February 2014, about 100 mm above average. What is the average rainfall for January and February?",
            steps: [
              "Above average means the actual total was bigger than the average by 100 mm.",
              "Average = actual − the extra: 350 − 100 = 250 mm.",
              "Check the sense: 350 mm is 350 ÷ 250 = 1.4 times the average, that is, 40 per cent more rain than normal. The wettest January on record should be well above average, and it is."
            ],
            answer: "250 mm",
            checks: [{ expr: "SOM_RAIN_MM-SOM_ABOVE_MM", value: 250, tol: 0 }, { expr: "SOM_RAIN_MM/(SOM_RAIN_MM-SOM_ABOVE_MM)", value: 1.4, tol: 0.001 }]
          },
          tip: "Causes come in two kinds: physical (rainfall, tides, low land) and human (no dredging, building on the floodplain). Give both."
        },
        {
          heading: "Impacts: social, economic and environmental",
          paragraphs: [
            "Social impacts are the effects on people's lives. Over 600 houses were flooded. Residents were evacuated to temporary accommodation for several months. Villages such as Moorland and Muchelney were cut off, local roads were under water and many people had their power supplies cut off. Economic impacts are the effects on money, jobs and property. The estimated cost of the flood damage was over £10 million. Sixteen farms were evacuated and over 14 000 hectares of agricultural land were under water for three to four weeks, ruining crops and grazing. The Bristol to Taunton railway line was closed at Bridgwater, cutting an important transport link.",
            "Environmental impacts are the effects on land, water and wildlife. The flood water was heavily contaminated with sewage and with other pollutants such as oil and chemicals. A huge amount of debris had to be cleared. Stagnant water that had collected for months had to be treated before it could be pumped back into the rivers, because water that has stood still for weeks is low in oxygen and would harm river life.",
            "Many impacts belong in more than one column: a flooded farm is economic for the farmer and social for the family that lives there. In a nine-mark answer that asks whether the economic effects were more significant than the social ones, make a judgement and support it with comparative language: whereas, on the other hand, more significant because."
          ],
          tip: "Social is people, economic is money and property, environmental is land, water and wildlife. Put at least one dated fact in each column."
        },
        {
          heading: "Responses: immediate and long-term",
          paragraphs: [
            "The immediate responses dealt with the primary effects in the first days. Rescue boats were deployed to help stranded people, which reduced the risk of drowning and of villages being left completely isolated. Royal Marines were sent in to help with flood relief such as sandbags and clean water, which reduced the risk of further flooding and of illness from drinking contaminated water. The Environment Agency installed giant pumps from the Netherlands to lower the water levels, which reduced the time villages were cut off and the risk of yet more flooding.",
            "The long-term responses aim to reduce the risk of future floods. Somerset County Council launched a £20 million Flood Action Plan, working with agencies such as the Environment Agency. In March 2014, 8 km of the Rivers Tone and Parrett were dredged to increase the capacity of their channels, so they can hold more water before they burst their banks. Road levels have been raised in places so that communications can be maintained and businesses can keep going during future floods. Further flood defences were planned, including the idea of a tidal barrage: a barrier that lets water flow into a river during high tide and releases it during low tide, so that high tides can no longer push sea water up the rivers and block the fresh water trying to get out.",
            "The six-mark question asks how the responses reduced the risk. For each response, say what it was, whether it was immediate or long-term, and then explain the risk it reduced. Dredging, for example, deepened the rivers so that they could carry more water, which reduced the risk of them bursting their banks in the next wet winter."
          ],
          tip: "Response, timing, risk reduced. Three parts for every response you name."
        }
      ],
      gate: [
        { kind: "numeric", q: "About 350 mm of rain fell on the Somerset Levels in January and February 2014, about 100 mm above average. What is the average rainfall for those two months, in millimetres?", answer: 250, tolerance: 0, units: "mm", check: "SOM_RAIN_MM-SOM_ABOVE_MM", why: "Above average by 100 mm means the average is 100 mm less than the total: 350 − 100 = 250 mm.",
          misconceptions: [
            { answer: 450, says: "You added the 100 mm. The rainfall was 100 mm above the average, so the average is smaller: 350 − 100 = 250 mm.", check: "SOM_RAIN_MM+SOM_ABOVE_MM" },
            { answer: 350, says: "350 mm is what actually fell, not the average. The average is 100 mm less: 350 − 100 = 250 mm.", check: "SOM_RAIN_MM" },
            { answer: 100, says: "100 mm is how much above average the rainfall was, not the average itself. Subtract it from the total: 350 − 100 = 250 mm.", check: "SOM_ABOVE_MM" }
          ] },
        { kind: "mcq", q: "Which of these was an environmental impact of the Somerset Levels floods?", options: ["Flood water contaminated with sewage, oil and chemicals", "Over 600 houses flooded", "Damage estimated at over £10 million", "The Bristol to Taunton railway closed at Bridgwater"], answer: 0, why: "Pollution of the water and land is an environmental impact. The others affect people (social) or money, property and transport (economic).",
          feedback: [
            "",
            "Houses flooding is an impact on people and their homes, which makes it a social impact. The environmental impact in this list is the contaminated flood water.",
            "A cost in pounds is an economic impact. The environmental impact here is the pollution of the flood water with sewage, oil and chemicals.",
            "A closed railway line is a transport and business problem, so it is an economic impact. The environmental impact is the contaminated water."
          ] },
        { kind: "gap", q: "The rivers of the Somerset Levels had not been dredged for at least ___ years, so they were clogged with sediment.", answer: "20", options: ["20", "2", "200"], why: "At least 20 years without dredging let sediment build up and shrink the channels, so they held less water.",
          feedback: {
            "2": "Two years without dredging would not clog a river. The deck says the rivers had not been dredged for at least 20 years, which is why they were so full of sediment.",
            "200": "Two hundred years is far too long; the Levels have been drained and managed for centuries. The rivers had gone at least 20 years without dredging."
          } }
      ],
      modules: [
        {
          title: "Social, economic or environmental?",
          task: {
            kind: "match",
            q: "Match each impact of the Somerset Levels floods to the kind of impact it is.",
            pairs: [
              ["Social", "Residents evacuated to temporary accommodation for several months"],
              ["Economic", "Over 14 000 hectares of farmland under water for three to four weeks"],
              ["Environmental", "Stagnant flood water had to be treated before being pumped back into the rivers"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Social is about people and how they live: homes, health, being cut off.",
                "Economic is about money, jobs, property and farming.",
                "Environmental is about land, water, wildlife and pollution.",
                "Ask of each impact: who or what is harmed here?"
              ],
              example: {
                q: "Sort these two impacts: a village shop lost a month's trade; power supplies were cut to many homes. Choices: social; economic.",
                steps: ["Lost trade is money, so economic.", "Homes without power is about people's daily lives, so social."],
                answer: "Lost trade: economic. Homes without power: social."
              }
            },
            core: { hint: "People, money, or the natural world: which one does each impact harm most directly?" },
            stretch: { extend: "Argue whether the economic impacts of the Somerset floods were more significant than the social ones, using one fact from each column." }
          },
          explain: "Say, in one sentence, why one impact can belong in two columns.",
          why: "Evacuation to temporary accommodation affects people's lives (social); farmland under water costs farmers money (economic); treating polluted stagnant water is about the health of the rivers (environmental)."
        },
        {
          title: "Immediate or long-term?",
          task: {
            kind: "mcq",
            q: "In March 2014, 8 km of the Rivers Tone and Parrett were dredged to increase the capacity of their channels. Which kind of response is this?",
            options: ["A long-term response, reducing the risk of future floods", "An immediate response, dealing with the primary effects", "A primary effect of the flood", "A secondary effect of the flood"],
            answer: 0,
            feedback: [
              "",
              "Immediate responses are the rescue boats, Royal Marines and pumps that helped people in the first days. Dredging came afterwards and is designed to stop the next flood, so it is a long-term response.",
              "A primary effect is damage done by the flood itself, such as houses filling with water. Dredging is something people did in response, and because it aims at future floods it is long-term.",
              "A secondary effect is harm that follows from the flooding, such as lost farm income. Dredging is a response, not an effect, and it is long-term because it reduces future risk."
            ]
          },
          contexts: [
            { label: "Raising roads", q: "After the floods, road levels on the Somerset Levels were raised in places so that businesses could keep going during future floods. Which kind of response is this?" },
            { label: "The £20 million plan", q: "Somerset County Council launched a £20 million Flood Action Plan with the Environment Agency to reduce the risk of future flooding. Which kind of response is this?" },
            { label: "Tidal barrage", q: "A tidal barrage was proposed so that high tides could no longer push sea water up the rivers in future winters. Which kind of response is this?" }
          ],
          levels: {
            support: {
              steps: [
                "Ask: did this happen in the first days to help people in danger, or later to stop it happening again?",
                "Rescue, sandbags, clean water and pumps are immediate.",
                "Dredging, raising roads, the Flood Action Plan and the tidal barrage are long-term.",
                "Check that the sentence describes a response (something people did), not an effect (something the flood did)."
              ],
              example: {
                q: "The Environment Agency installed giant pumps from the Netherlands to lower the water levels. Which kind of response is this?",
                steps: ["It happened during the flood, to get the water down quickly.", "So it is immediate."],
                answer: "An immediate response: it lowered the water while the flood was happening."
              }
            },
            core: { hint: "Now or next time? Help given now is immediate; work done to prevent the next flood is long-term." },
            stretch: { extend: "Explain why dredging alone could not stop the Levels flooding again, using the causes of the 2014 floods." }
          },
          explain: "Say, in one sentence, how you tell a long-term response from an immediate one.",
          why: "Dredging, raising roads, the Flood Action Plan and the tidal barrage all came after the flood and aim to reduce the risk of future floods, so they are long-term responses. Rescue boats, Royal Marines and pumps dealt with the emergency itself."
        },
        {
          title: "How the responses reduced the risk",
          task: {
            kind: "written",
            q: "Using an example of a recent extreme weather event in the UK, explain how the immediate and long-term responses helped to reduce risk. (6 marks)",
            marks: 6,
            criteria: [
              "Names the event (the Somerset Levels floods, winter 2013 to 2014)",
              "Describes at least one immediate response and says it was immediate",
              "Describes at least one long-term response and says it was long-term, with a figure (8 km dredged, £20 million plan)",
              "Explains for each response the risk it reduced (drowning, isolation, illness, future flooding, lost business)",
              "Links each explanation to a cause or effect of the flood (clogged rivers, cut-off villages, contaminated water)"
            ],
            model: "In the winter of 2013 to 2014 the Somerset Levels flooded after the wettest January since records began, high tides blocking the rivers and twenty years without dredging. The immediate responses reduced the risk to people straight away. Rescue boats were sent to stranded residents, which reduced the risk of drowning and of villages such as Muchelney being completely isolated, and Royal Marines brought sandbags and clean water, which reduced the risk of homes flooding further and of illness from drinking contaminated water. The Environment Agency installed giant pumps from the Netherlands, lowering the water so that roads reopened sooner. The long-term responses reduce the risk of the next flood. In March 2014, 8 km of the Rivers Tone and Parrett were dredged, which increased the capacity of the channels so they can hold more water before bursting their banks. Somerset County Council launched a £20 million Flood Action Plan with the Environment Agency, and road levels were raised in places so that communications and businesses can carry on during future floods, reducing the risk of lost income. Together, the immediate responses saved lives and health during the flood and the long-term responses tackle its causes."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: name the event and its date, and one cause.",
                "Immediate responses: name two, label them immediate, and for each write which reduced the risk of.",
                "Long-term responses: name two with their figures, label them long-term, and for each write which reduced the risk of.",
                "Final sentence: immediate saved lives now; long-term tackles the causes for the future."
              ],
              example: {
                q: "In two sentences, explain how one immediate response to a flood could reduce risk.",
                steps: ["Name the response and say it was immediate.", "Say which risk it reduced and how."],
                answer: "Rescue boats were sent out as an immediate response to collect people trapped in flooded homes. This reduced the risk of drowning and meant that people cut off from food and medicine could be reached."
              }
            },
            core: { hint: "Name it, time it, explain the risk it reduced. Two immediate, two long-term, each with the which reduced the risk of pattern." },
            stretch: { extend: "Evaluate which single response did most to reduce future risk on the Levels, and explain why dredging on its own might not be enough." }
          },
          explain: "Say, in one sentence, why the examiner wants the risk reduced and not just the response named.",
          why: "Top answers name the event, give immediate responses (boats, Marines, pumps) and long-term responses (8 km dredged, the £20 million plan, raised roads), label each, and explain the specific risk each one reduced."
        }
      ]
    }
  ],

  sources: {
    deckDump: "gg_y10_unit_3_the_challenge_of_natural_hazards_weather_hazards.txt",
    decksUsed: ["Weather hazards.pptx", "Weather hazards2.pptx", "Weather-Hazards-in-the-UK.pptx"],
    notes: "Lesson titles, sequence, key words, definitions, case-study facts and numbers come from the three department teaching decks only (Weather hazards.pptx slides 4-121; Weather hazards2.pptx slides 2-23 and 40-87; Weather-Hazards-in-the-UK.pptx slides 3-65). GIS HW.pptx is an ArcGIS homework sheet and was not used. House furniture (dated title slides, homework and Kerboodle reading slides, Prior Learning/Components sheets, revision lists, the seating plan, the tectonic-hazards slides that sit at the end of two decks) was used only to fix the lesson sequence or ignored. The decks' model answers and mark schemes (Weather hazards 18-19, 37, 49, 92; Weather-Hazards-in-the-UK 19, 37, 52) were read to see what the deck teaches; none is reproduced and verify.py bans their distinctive phrases. Where the deck gives only a textbook page reference (Haiyan's full effects and responses, Katrina's cause/effect/response statements, the June 2017 heat wave, Bangladesh), the manifest teaches only what the slides themselves state and tells the pupil to use their class notes; see NOTES.md. Every number is held in the FACTS table in verify.py with its slide reference and recomputed. No pretext.l1 (translation is a separate pass) and no meta.constellation. No text is quoted from any source."
  }
};
