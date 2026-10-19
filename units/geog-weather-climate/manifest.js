// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 Geography · Year 7 · Unit 4 Weather and Climate (KS3 → AQA GCSE 8035 3.1.1) · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression; the FACTS names held in verify.py are allowed) and are recomputed.
//   worked examples / support examples with a calculation carry `checks:[{expr, value, tol}]`.
//   every "order" task is compared with the canonical sequences held in verify.py (rain formation, the pressure chain, the
//   life cycle of a tropical cyclone).
//   every mcq / gap / match answer is compared with the independent answer key held in verify.py.
//   every case-study number (the 12 mph and 6 mph winds and 1 degree Celsius on the symbol slide, three cells, three types of
//   rainfall, two types of cloud, Hurricane Dorian 2019, ice about 20 000 years ago covering most of the UK, ice on about 10 per
//   cent of the surface today, seven causes of climate change sorted 3 human / 4 natural, 14 ranked effects, five climate factors)
//   is checked against the independent FACTS table in verify.py, each with its slide reference.
//   passage sentences are counted (≤ 20 words) and all text is linted for known misconceptions, deck errors, staff names,
//   textbook page references and facts that are NOT in the deck (Dorian figures, cell latitudes).
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions`; every module carries
//   `explain`; ≥ 1 module per chapter carries `contexts` that never redefine the answer; `connections` ⊂ glossary;
//   meta.constellation is omitted (the engine lays the stars out); no pretext.l1 (translation is a separate pass).
// Diagrams (the three-cell model, the rain flow diagram, the cyclone life cycle) are described in words; no widget exists for them.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["geog-weather-climate"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "geog-weather-climate",
    subjectKey: "geography",
    subject: "Geography",
    board: "AQA",
    spec: "KS3 → 8035",
    specRef: "KS3 National Curriculum: physical geography, weather and climate, including the change in climate from the Ice Age to the present → AQA GCSE Geography 8035 3.1.1 The challenge of natural hazards (weather hazards, climate change)",
    year: 7,
    tier: "KS3",
    title: "Weather and Climate",
    sub: "Why the air moves, where the UK's weather comes from, how rain and storms are made, and how the climate has changed from the Ice Age to today.",
    bigQuestion: "What makes our weather, and why is the climate changing?",
    lessonCount: 12,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  // The department's single deck (Weather and climate_Year7.pptx), in teaching order. Titles are the deck's own slide titles or
  // learning objectives; questions are those objectives rephrased. The mid-topic test and its two DIT sessions are assessment,
  // not taught content, and are not counted. See NOTES.md section 2 for the slide ranges.
  lessons: [
    { n: 1, title: "Introduction to Weather and Climate", question: "What do you already know about weather and climate, and what do the weather symbols mean?", keywords: ["weather", "climate", "weather symbol", "temperature", "wind speed", "wind direction"] },
    { n: 2, title: "Global atmospheric circulation", question: "How does the movement of air create high and low pressure, and how is air circulated around the globe?", keywords: ["air pressure", "dense", "Hadley cell", "Ferrel cell", "Polar cell", "Equator"] },
    { n: 3, title: "The UK weather roundabout", question: "Why is the UK like a weather roundabout, and can you write a forecast for it?", keywords: ["Arctic air", "Atlantic", "heatwave", "drought", "forecast", "region"] },
    { n: 4, title: "How is rain formed?", question: "How does water in the air become rain?", keywords: ["evaporation", "condensation", "cloud", "precipitation", "depression"] },
    { n: 5, title: "Types of rainfall", question: "What are the three types of rainfall, and how is each one made?", keywords: ["convectional rainfall", "relief rainfall", "frontal rainfall", "rising air"] },
    { n: 6, title: "What is a tropical cyclone?", question: "What is a tropical cyclone, how does it live and die, and what happened in Hurricane Dorian in 2019?", keywords: ["tropical cyclone", "hurricane", "life cycle", "Hurricane Dorian", "case study"] },
    { n: 7, title: "Extreme weather: tropical cyclones and types of clouds", question: "What does a case study tell us, and what forms in the sky before the rain?", keywords: ["case study", "cumulus", "stratus", "cloud"] },
    { n: 8, title: "Climate and climate factors", question: "What is the difference between weather and climate, and what affects the climate of a place?", keywords: ["climate", "weather", "climate factor", "isobar", "air mass"] },
    { n: 9, title: "The Ice Age", question: "Which parts of Europe were covered by ice 20 000 years ago, what was the climate like, and what happened to the land and sea?", keywords: ["Ice Age", "glacier", "ice sheet", "sea level", "isostatic change"] },
    { n: 10, title: "Causes of climate change", question: "Which causes of climate change are natural, and which are human?", keywords: ["fossil fuels", "deforestation", "agriculture", "volcanic eruptions", "ocean currents", "solar output", "orbital changes"] },
    { n: 11, title: "Causes of climate change: greenhouse gases", question: "What are greenhouse gases, and where do carbon dioxide and methane come from?", keywords: ["greenhouse gas", "carbon dioxide", "methane", "CH4"] },
    { n: 12, title: "The effects of climate change", question: "What range of effects does climate change have on people and the environment, and which are the most serious?", keywords: ["effect", "migration", "agricultural yields", "rank", "justify"] }
  ],

  // 16 terms; Connections uses all 16 (four groups, each one chapter's idea). Chapters 1 and 5 teach their key words
  // through pretext.words and the text instead (weather and climate words, cyclone words).
  glossary: [
    { term: "high pressure", means: "Where cold, dense air sinks and presses down on the ground; it usually brings settled, dry weather with few clouds.", chapter: "pressure-and-circulation" },
    { term: "low pressure", means: "Where warm, less dense air rises away from the ground; it usually brings clouds and rain.", chapter: "pressure-and-circulation" },
    { term: "isobar", means: "A line on a weather map that joins places with the same air pressure.", chapter: "pressure-and-circulation" },
    { term: "Hadley cell", means: "The loop of circulating air nearest the Equator, where hot air rises and spreads out towards the tropics.", chapter: "pressure-and-circulation" },
    { term: "air mass", means: "A huge body of air that has much the same temperature and moisture all the way through, and brings that weather with it.", chapter: "uk-roundabout" },
    { term: "depression", means: "An area of low pressure that forms where warm air meets cold air, bringing cloud, rain and wind to the UK.", chapter: "uk-roundabout" },
    { term: "heatwave", means: "A spell of weather that is much hotter than usual for several days, often brought to the UK by air from the south.", chapter: "uk-roundabout" },
    { term: "drought", means: "A long period with much less rain than usual, so that rivers, reservoirs and soil dry out.", chapter: "uk-roundabout" },
    { term: "convectional rainfall", means: "Rain made when the sun heats the ground, the warm air above it rises, cools and its water vapour condenses.", chapter: "rain-and-clouds" },
    { term: "relief rainfall", means: "Rain made when moving air is forced to rise over hills or mountains, cooling as it climbs.", chapter: "rain-and-clouds" },
    { term: "frontal rainfall", means: "Rain made where a warm air mass meets a cold one and the lighter warm air is pushed up over the cold air.", chapter: "rain-and-clouds" },
    { term: "condensation", means: "Water vapour in the air cooling and turning back into tiny liquid droplets, which is how clouds form.", chapter: "rain-and-clouds" },
    { term: "glacier", means: "A large mass of ice, often shaped like a river, that flows very slowly downhill under the force of gravity.", chapter: "ice-age-and-climate-change" },
    { term: "isostatic change", means: "The land sinking under the weight of an ice sheet and slowly rising again after the ice has melted.", chapter: "ice-age-and-climate-change" },
    { term: "greenhouse gas", means: "A gas in the atmosphere, such as carbon dioxide or methane, that traps heat and keeps the Earth warmer.", chapter: "ice-age-and-climate-change" },
    { term: "fossil fuels", means: "Coal, oil and gas, formed from living things that died millions of years ago; burning them releases carbon dioxide.", chapter: "ice-age-and-climate-change" }
  ],

  connections: [
    { group: "Pressure and the moving air", terms: ["high pressure", "low pressure", "isobar", "Hadley cell"] },
    { group: "What comes round the UK roundabout", terms: ["air mass", "depression", "heatwave", "drought"] },
    { group: "How rain is made", terms: ["convectional rainfall", "relief rainfall", "frontal rainfall", "condensation"] },
    { group: "Ice and a warming world", terms: ["glacier", "isostatic change", "greenhouse gas", "fossil fuels"] }
  ],

  chapters: [
    /* ───────────── 1 · weather, climate and the forecast ───────────── */
    {
      key: "weather-and-climate", n: 1, title: "Weather, climate and the forecast",
      lead: "The difference between the weather you can see today and the climate a place has over many years, how to read the symbols on a weather map, and how to write a forecast of your own.",
      covers: [1, 3, 8],
      pretext: {
        words: [
          { word: "weather", means: "what the air is like outside at one place and one time", sentence: "Today the weather in London is cloudy with light rain." },
          { word: "climate", means: "the usual weather of a place, measured over many years", sentence: "The climate of the UK is mild and wet." },
          { word: "forecast", means: "a prediction of what the weather will be like soon", sentence: "The forecast says it will snow on Friday." },
          { word: "temperature", means: "how hot or cold the air is, measured in degrees Celsius", sentence: "The temperature fell to 1 degree Celsius overnight." },
          { word: "symbol", means: "a small picture that stands for a type of weather on a map", sentence: "A sun symbol means it will be sunny." }
        ],
        passage: [
          "Weather is what the air is like right now, at one place.",
          "It can be sunny, cloudy, rainy, windy, snowy or stormy.",
          "The weather can change from hour to hour.",
          "Climate is different.",
          "Climate is the usual weather of a place over many years.",
          "The UK has a mild, wet climate, even when one day is hot and dry.",
          "Weather maps use symbols to show the weather.",
          "A sun means sunny, and a cloud with drops means rain.",
          "A number tells you the temperature in degrees Celsius.",
          "An arrow shows the wind, with its speed in miles per hour.",
          "The arrow points the way the wind is blowing.",
          "A forecast uses these symbols to predict the weather for the days ahead."
        ]
      },
      sections: [
        {
          heading: "Weather or climate?",
          paragraphs: [
            "Weather is the state of the air around you at a particular place and a particular time. It includes the temperature, whether it is raining or snowing, how cloudy it is, how sunny it is and how hard the wind is blowing. Weather changes quickly: a morning can start frosty and end in warm sunshine, and tomorrow may be nothing like today. When you look out of the window, you are looking at the weather.",
            "Climate is the pattern of weather a place usually has, worked out from measurements taken over many years. It tells you what to expect in a typical January or a typical July, not what will happen this afternoon. The UK, for example, has a mild, wet climate: winters are rarely very cold and summers rarely very hot, and rain can fall in any month. A single hot day does not change the climate, just as a single goal does not change a team's record for the season.",
            "Geographers also study what controls the climate of a place: why the Equator is hot, why mountains are cold, why coasts are milder than inland areas. In class you read about five factors that affect the climate and listed them in your book. The lesson slides do not list the five, so use your own class notes when you revise them."
          ],
          worked: {
            q: "Explain the difference between weather and climate, giving one example of each. (2 marks)",
            steps: [
              "Start with weather: say that it is the condition of the air at one place and one time, and that it changes from day to day.",
              "Give a weather example that is tied to a time: it is raining in Birmingham this afternoon.",
              "Now climate: say that it is the average weather of a place over many years.",
              "Give a climate example that covers a long time: the UK has mild, wet winters."
            ],
            answer: "Weather is what the air is like at one place and one time, such as rain in Birmingham this afternoon. Climate is the usual weather of a place over many years, such as the mild, wet winters of the UK."
          },
          tip: "A quick test: if the sentence has a day or a time in it, it is about weather. If it says usually or on average, it is about climate."
        },
        {
          heading: "Reading weather symbols",
          paragraphs: [
            "A weather map is crowded, so forecasters use symbols instead of words. The ones you matched in class were sunny, sunny intervals, light cloud, low level cloud, light rain, light snow and thunderstorms. A full sun means sunny; a sun peeping from behind a cloud means sunny intervals; a white cloud means light cloud and a grey one means low level cloud; a cloud with drops means light rain; a cloud with flakes means light snow; a dark cloud with a lightning flash means thunderstorms.",
            "Numbers on the map tell you how hot or cold it is. The symbol slide showed a temperature of 1 degree Celsius, which is just above freezing. Wind is shown with an arrow and a number. The number is the wind speed in miles per hour (mph), and the arrow points in the direction the wind is blowing towards, so the wind comes from the opposite end. On the slide, one arrow showed a 12 mph wind from the north east and another a 6 mph wind from the west.",
            "Direction matters as much as speed. A wind from the north east has travelled across cold northern Europe, so it feels bitter; a wind from the west has crossed the Atlantic, so it is milder and damper. Later in this unit you will see that the direction the air comes from is the key to the UK's weather."
          ],
          worked: {
            q: "The map shows a 12 mph wind from the north east over Scotland and a 6 mph wind from the west over Wales. How much stronger is the wind over Scotland?",
            steps: [
              "Write down both speeds with their units: 12 mph and 6 mph.",
              "The question asks how much stronger, so subtract the smaller from the larger: 12 − 6 = 6.",
              "Keep the unit: the Scottish wind is 6 mph stronger.",
              "Check it makes sense: 6 mph is half of 12 mph, so the Welsh wind is half as strong."
            ],
            answer: "6 mph stronger",
            checks: [{ expr: "WIND_NE_MPH-WIND_W_MPH", value: 6, tol: 0 }, { expr: "WIND_W_MPH/WIND_NE_MPH", value: 0.5, tol: 0 }]
          },
          tip: "Winds are named after where they come FROM. A north-easterly wind blows out of the north east, towards the south west."
        },
        {
          heading: "Writing your own forecast",
          paragraphs: [
            "In class you created a weather forecast map and script for the UK. A good forecast splits the country into regions using compass directions: the north east, the south west, the Midlands, Northern Ireland and so on. For each region it gives the temperature and the general conditions, using the symbols you have learned. An even better forecast adds the wind speed and direction and names specific places from the atlas.",
            "A forecast script should sound like a story that moves across the map. Start in one corner, say what the weather is doing there, then travel: cloud in the north east will clear by the afternoon; the south west stays mild with a light 6 mph westerly wind. Forecasters also link the weather to its cause, which is what the rest of this unit teaches you to do."
          ],
          tip: "In a forecast, give a region, a temperature, a condition and a wind. Four things for every part of the map."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these statements is about weather, not climate?", options: ["It is raining in Manchester this afternoon", "The UK has mild, wet winters", "Deserts are dry all year round", "The Arctic is cold for most of the year"], answer: 0, why: "Weather is what the air is like at one place and one time. This afternoon is a time, so this is weather. The other three describe what a place is usually like over years: climate.",
          feedback: [
            "",
            "Mild, wet winters describes what the UK is usually like, year after year. That is the long-term pattern, so it is climate. Look for the statement tied to one time, such as this afternoon.",
            "All year round is a long-term pattern, so this describes the climate of deserts. Weather is about one place at one time, like rain this afternoon.",
            "Most of the year tells you about the usual pattern, so it is climate. The statement about one afternoon in Manchester is the weather."
          ] },
        { kind: "gap", q: "On a weather map the number beside a wind arrow gives the wind speed, and the wind is named after the direction it is blowing ___.", answer: "from", options: ["from", "around", "at random"], why: "Winds are named after where they come from. A north-easterly wind blows out of the north east.",
          feedback: {
            "around": "Wind does not circle around on a weather map; the arrow points one way. Winds are named for the direction they come from, so a north-easterly wind blows out of the north east.",
            "at random": "Wind direction is not random: the arrow shows it clearly. Geographers name a wind by the direction it comes from, so a westerly wind comes from the west."
          } },
        { kind: "numeric", q: "On the symbol slide, one arrow showed a wind of 12 mph from the north east and another a wind of 6 mph from the west. How much faster, in mph, was the north-easterly wind?", answer: 6, tolerance: 0, units: "mph", check: "WIND_NE_MPH-WIND_W_MPH", why: "How much faster means find the difference: 12 − 6 = 6 mph.",
          misconceptions: [
            { answer: 18, says: "You added the two speeds. The question asks how much faster one wind is than the other, so subtract: 12 − 6 = 6 mph.", check: "WIND_NE_MPH+WIND_W_MPH" },
            { answer: 2, says: "You divided 12 by 6, which tells you the first wind is twice as fast. How much faster asks for the difference in mph: 12 − 6 = 6.", check: "WIND_NE_MPH/WIND_W_MPH" },
            { answer: 12, says: "That is the speed of the north-easterly wind itself. The question asks how much faster it is than the 6 mph wind: 12 − 6 = 6 mph.", check: "WIND_NE_MPH" }
          ] }
      ],
      modules: [
        {
          title: "Which symbol is which?",
          task: {
            kind: "match",
            q: "Match each weather symbol to the weather it stands for.",
            pairs: [
              ["A cloud with a few drops falling from it", "Light rain"],
              ["A dark cloud with a lightning flash", "Thunderstorms"],
              ["A cloud with snowflakes beneath it", "Light snow"],
              ["A sun partly hidden behind a cloud", "Sunny intervals"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Look at what is falling from the cloud, if anything. Drops mean rain; flakes mean snow.",
                "A lightning flash always means a thunderstorm.",
                "If there is a sun in the picture, the word sunny must be in the answer.",
                "Sunny intervals means sunny spells broken by cloud, so the sun is partly hidden."
              ],
              example: {
                q: "Match: a full yellow sun; a plain white cloud. Choices: light cloud; sunny.",
                steps: ["A full sun with nothing in front of it means sunny.", "A plain white cloud with nothing falling from it means light cloud."],
                answer: "Full yellow sun: sunny. Plain white cloud: light cloud."
              }
            },
            core: { hint: "Two symbols show something falling from a cloud; one shows something flashing; one shows a sun." },
            stretch: { extend: "Explain why a forecaster would use a different symbol for light cloud and low level cloud, and what difference the two make to a day out." }
          },
          explain: "Say, in one sentence, how you can tell a rain symbol from a snow symbol.",
          why: "Drops falling mean light rain, flakes falling mean light snow, a lightning flash means thunderstorms, and a sun half behind a cloud means sunny intervals."
        },
        {
          title: "Weather and climate in your own words",
          task: {
            kind: "written",
            q: "Explain the difference between weather and climate. Give one example of each. (4 marks)",
            marks: 4,
            criteria: [
              "Says that weather is the condition of the air at one place and one time, and changes quickly",
              "Says that climate is the usual or average weather of a place over many years",
              "Gives a weather example tied to a particular day or time",
              "Gives a climate example that describes a place over a long period"
            ],
            model: "Weather is what the air is like at one place at one time, and it can change from hour to hour; for example, it was foggy in Leeds this morning. Climate is the usual weather a place has, worked out over many years; for example, the UK has a mild, wet climate with rain in every month. So the weather is what happens on a single day, and the climate is the pattern those days make over a long time."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: Weather is ... at one place and one time. Add that it changes quickly.",
                "Sentence 2: give a weather example with a time in it, such as this morning or last Tuesday.",
                "Sentence 3: Climate is ... over many years.",
                "Sentence 4: give a climate example that uses the word usually or on average."
              ],
              example: {
                q: "In two sentences, explain the difference between a single football result and a team's record over a season.",
                steps: ["A single result is one match on one day.", "A record is the pattern across all the matches in the season."],
                answer: "A single result is what happened in one match on one day, like a 2–1 win last Saturday. A record is the pattern over the whole season, like a team that usually wins at home."
              }
            },
            core: { hint: "Weather needs the words one time; climate needs the words many years. Then one example for each." },
            stretch: { extend: "Add a sentence explaining why one very hot day in the UK does not prove that the climate has changed." }
          },
          explain: "Say, in one sentence, which word belongs with a single day and which belongs with many years.",
          why: "Full marks need both definitions and both examples: weather is the air at one place and time and changes fast; climate is the average over many years. The examples must match: a dated day for weather, a long-term pattern for climate."
        },
        {
          title: "Where is the wind coming from?",
          task: {
            kind: "mcq",
            q: "A forecaster says there is a 12 mph wind from the north east over Scotland. Which way is the air moving?",
            options: [
              "Out of the north east, towards the south west",
              "Out of the south west, towards the north east",
              "Round and round above the north east",
              "Straight up from the ground in the north east"
            ],
            answer: 0,
            feedback: [
              "",
              "You have the wind the wrong way round. Winds are named after where they come from, so a wind from the north east starts in the north east and travels towards the south west.",
              "Wind on a weather map moves in one direction, shown by the arrow; it does not circle one spot. A wind from the north east blows out of the north east towards the south west.",
              "Air rising straight up is what happens in low pressure, not what a wind arrow shows. A wind from the north east moves across the map from the north east towards the south west."
            ]
          },
          contexts: [
            { label: "Kite day", q: "You are flying a kite and the forecast gives a 12 mph wind from the north east. Which way is the air moving past you?" },
            { label: "Sailing lesson", q: "A sailing instructor reads out a 12 mph wind from the north east before the lesson. Which way is the air moving across the lake?" },
            { label: "Football match", q: "The match report mentions a 12 mph wind from the north east blowing across the pitch. Which way is the air moving?" }
          ],
          explain: "Say, in one sentence, what the name of a wind tells you.",
          levels: {
            support: {
              steps: [
                "Winds are named after the direction they come FROM.",
                "So a wind from the north east starts in the north east.",
                "Air moving away from the north east must be heading towards the opposite corner of the compass.",
                "The opposite of north east is south west."
              ],
              example: {
                q: "A 6 mph wind from the west is blowing over Wales. Which way is the air moving?",
                steps: ["From the west means it starts in the west.", "The opposite of west is east.", "So the air moves from west to east."],
                answer: "Out of the west, towards the east."
              }
            },
            core: { hint: "From the north east means it started in the north east. Where is it heading?" },
            stretch: { extend: "Explain why a wind from the north east usually feels colder in the UK than a wind from the west, thinking about where each has travelled." }
          },
          why: "A wind is named after the direction it comes from. A north-easterly wind begins in the north east and blows towards the south west, which is why it brings cold air from northern Europe to the UK."
        }
      ]
    },

    /* ───────────── 2 · air pressure and the global circulation ───────────── */
    {
      key: "pressure-and-circulation", n: 2, title: "Air pressure and the global circulation",
      lead: "Why warm air rises and cold air sinks, what high and low pressure do to the weather, how isobars show pressure on a map, and the three giant loops of air that move heat around the planet.",
      covers: [2, 8],
      pretext: {
        words: [
          { word: "air pressure", means: "how hard the air is pressing down on the ground", sentence: "Sinking cold air gives high air pressure." },
          { word: "dense", means: "heavy for its size, with its particles packed closely together", sentence: "Cold air is more dense than warm air, so it sinks." },
          { word: "expand", means: "to spread out and take up more space", sentence: "When air is heated it expands and rises." },
          { word: "Equator", means: "the imaginary line around the middle of the Earth", sentence: "The Equator gets the strongest sunshine." },
          { word: "hemisphere", means: "one half of the Earth, north or south of the Equator", sentence: "The UK is in the northern hemisphere." },
          { word: "cell", means: "one giant loop of circulating air", sentence: "The Hadley cell is the loop nearest the Equator." }
        ],
        passage: [
          "The weather is controlled by the movement of air.",
          "When air is warm it expands and rises.",
          "Warm air is less dense, so it is lighter.",
          "Rising air leaves low pressure at the ground.",
          "Low pressure brings clouds and rain.",
          "When air is cold it is more dense, so it is heavier.",
          "Cold air sinks and presses down on the ground.",
          "This gives high pressure.",
          "High pressure brings settled weather with no clouds or rain.",
          "This pattern of rising and sinking air happens all over the world.",
          "The Earth has three giant loops of air in each hemisphere.",
          "They are called the Hadley cell, the Ferrel cell and the Polar cell.",
          "What happens north of the Equator also happens south of it."
        ]
      },
      sections: [
        {
          heading: "Warm air rises, cold air sinks",
          paragraphs: [
            "Everything in this unit comes back to one idea: the weather is controlled by the movement of air. When the sun warms the ground, the air just above it warms too. Warm air expands, which means its particles spread out and it takes up more room. That makes it less dense than the cooler air around it, so, like a hot-air balloon, it rises. As the air lifts away from the ground, it presses down less, and we call this low atmospheric pressure. Rising air cools, its water vapour condenses, and low pressure brings clouds and rain.",
            "Cold air does the opposite. Its particles are packed closer together, so it is more dense and heavier, and it sinks towards the ground. Sinking air presses down harder, which we call high atmospheric pressure. Sinking air is also drying out rather than cooling, so clouds cannot form: high pressure brings settled, dry weather with clear skies. In summer that means sunshine and warmth; in winter it can mean cold, frosty nights, because there are no clouds to keep the heat in.",
            "So temperature, air movement and pressure are linked in a chain. Warm leads to rising, rising leads to low pressure, and low pressure leads to cloud and rain. Cold leads to sinking, sinking leads to high pressure, and high pressure leads to dry, clear weather. Learn the chain in both directions and most of the weather will make sense."
          ],
          worked: {
            q: "Describe the weather you would expect in an area of high pressure, and explain why. (3 marks)",
            steps: [
              "Describe first: high pressure brings settled, dry weather with clear skies and little wind.",
              "Explain the cause: high pressure forms where cold, dense air is sinking.",
              "Link sinking to the weather: sinking air does not cool and its water vapour does not condense, so clouds cannot form and there is no rain.",
              "Describe, then cause, then link. Three steps, three marks."
            ],
            answer: "High pressure brings dry, settled weather with clear skies. It forms where cold, dense air sinks towards the ground. Sinking air does not cool and condense, so no clouds form and there is no rain."
          },
          tip: "Think of the letters: Low pressure, Lifting air, Lots of cloud. High pressure, Heavy sinking air, Hardly a cloud."
        },
        {
          heading: "Isobars on a weather map",
          paragraphs: [
            "Forecasters measure air pressure at hundreds of weather stations and draw the results on a map. An isobar is a line that joins up all the places with the same air pressure, in the same way that a contour line on an OS map joins places of the same height. The isobars make rings around areas of high pressure, marked H, and areas of low pressure, marked L.",
            "Once you can read isobars you can read the weather. A big H sitting over the UK means sinking air and a run of dry, settled days. An L approaching from the Atlantic means rising air, cloud and rain on the way. Where the isobars are packed close together the pressure changes quickly over a short distance, and that is where the wind blows hardest; where they are far apart the air is calm."
          ],
          tip: "Isobar: iso means equal, bar means pressure. A line of equal pressure."
        },
        {
          heading: "Three cells that circulate the globe",
          paragraphs: [
            "The pattern of rising and sinking air does not happen only in one place. It happens all over the world, in a pattern geographers call the global atmospheric circulation model. The Earth can be divided into three sections in each hemisphere, and each section has its own giant loop of moving air, called a cell. In each cell, air rises in one place, travels high above the ground, sinks in another place and flows back along the surface.",
            "The cell nearest the Equator is the Hadley cell. It fills the gap between the Equator and the tropics, the Tropic of Cancer in the north and the Tropic of Capricorn in the south. The Equator receives the strongest sunshine, so air there is heated, expands and rises, giving low pressure, towering clouds and heavy rain; the air then spreads out and sinks around the tropics. The middle cell is the Ferrel cell, which lies between the tropics and the polar circles, the Arctic Circle and the Antarctic Circle. The UK sits in this middle cell, which is one reason its weather is so changeable. The cell nearest the poles is the Polar cell, between the circles and the North or South Pole, where cold, dense air sinks.",
            "The Earth is round, or very nearly, so the pattern is a mirror image on each side of the Equator. Whatever happens in the northern hemisphere is happening in the southern hemisphere too: three cells in the north, three cells in the south. When you draw the model, draw the Equator first and then copy each cell above and below it."
          ],
          tip: "Order the cells from the Equator outwards: Hadley, Ferrel, Polar. H-F-P: Hot, Further, Polar."
        }
      ],
      gate: [
        { kind: "mcq", q: "What happens to air when it is warmed?", options: ["It expands, becomes less dense and rises", "It shrinks, becomes more dense and sinks", "It expands, becomes more dense and sinks", "It stays the same but moves sideways"], answer: 0, why: "Warm air expands, so its particles spread out and it becomes less dense (lighter). Lighter air rises, leaving low pressure at the ground.",
          feedback: [
            "",
            "Shrinking, getting denser and sinking is what happens to air when it is cooled, not warmed. Warm air does the opposite: it expands, becomes less dense and rises.",
            "Expanding air spreads its particles out, so it becomes less dense, not more. Less dense air is lighter, so warm air rises.",
            "Warming changes the air itself: it expands and becomes less dense. That makes it rise, which is what creates low pressure and rain."
          ] },
        { kind: "gap", q: "Cold air is more dense, so it sinks and creates ___ pressure at the ground.", answer: "high", options: ["high", "low", "no"], why: "Sinking cold air presses down on the ground, so the pressure is high. High pressure brings dry, settled weather.",
          feedback: {
            "low": "Low pressure is made when air rises away from the ground. Cold air is dense and sinks, pressing down harder, so it makes high pressure.",
            "no": "There is always some air pressure, because the air always has weight. Sinking cold air presses down more than usual, so the pressure is high."
          } },
        { kind: "numeric", q: "In the global atmospheric circulation model, how many cells are there in each hemisphere?", answer: 3, tolerance: 0, units: "cells", check: "CELLS", why: "Each hemisphere has three cells: the Hadley cell, the Ferrel cell and the Polar cell. The pattern is mirrored across the Equator.",
          misconceptions: [
            { answer: 6, says: "Six is the total for the whole Earth, three in the north and three in the south. The question asks about one hemisphere, which has three cells: Hadley, Ferrel and Polar.", check: "CELLS*2" },
            { answer: 2, says: "You may be thinking of the two hemispheres. Each hemisphere has three cells: the Hadley cell by the Equator, the Ferrel cell in the middle and the Polar cell by the pole.", check: "2" },
            { answer: 1, says: "There is more than one loop of air. Each hemisphere has three cells, named Hadley, Ferrel and Polar, from the Equator towards the pole.", check: "1" }
          ] }
      ],
      modules: [
        {
          title: "The pressure chain",
          task: {
            kind: "order",
            q: "Put the steps in the correct order to show how warm air leads to rain.",
            items: [
              "The sun heats the ground and the air above it warms up",
              "The warm air expands and becomes less dense",
              "The lighter air rises away from the ground",
              "Low pressure is created at the surface",
              "The rising air cools, clouds form and rain falls"
            ]
          },
          contexts: [
            { label: "Over the Equator", q: "At the Equator the sun is strongest and it rains almost every day. Put the steps in the correct order to show how the strong sunshine leads to rain." },
            { label: "Hot summer afternoon", q: "On a hot summer afternoon in the UK, the sky often turns dark by teatime. Put the steps in the correct order to show how the afternoon heat leads to rain." },
            { label: "Over a warm sea", q: "Air drifts over a warm patch of sea and a shower builds. Put the steps in the correct order to show how the warm surface leads to rain." }
          ],
          levels: {
            support: {
              steps: [
                "Everything starts with heat. Which step is about the sun?",
                "Heat changes the air before the air moves: expanding comes before rising.",
                "Rising air leaves a gap at the ground. That gap is the low pressure.",
                "Clouds and rain are always the last thing to happen."
              ],
              example: {
                q: "Put these steps for cold air in order: high pressure forms at the surface; the air is cooled; the dense air sinks; the air becomes more dense; the sky stays clear and dry.",
                steps: ["Cooling comes first.", "Cooling makes the air denser, and dense air sinks.", "Sinking creates high pressure, and clear skies are the result."],
                answer: "The air is cooled; the air becomes more dense; the dense air sinks; high pressure forms at the surface; the sky stays clear and dry."
              }
            },
            core: { hint: "Heat, expand, rise, low pressure, rain. Each step causes the next one." },
            stretch: { extend: "Write the matching chain for cold air, from cooling to clear skies, and explain why no clouds form in it." }
          },
          explain: "Say, in one sentence, why warm air rises.",
          why: "Heating comes first; the warm air expands and becomes less dense; being lighter, it rises; its rising leaves low pressure at the surface; and as it climbs it cools, so clouds form and rain falls."
        },
        {
          title: "Where is each cell?",
          task: {
            kind: "match",
            q: "Match each cell of the global atmospheric circulation model to where it is found.",
            pairs: [
              ["Hadley cell", "Between the Equator and the tropics"],
              ["Ferrel cell", "Between the tropics and the Arctic or Antarctic Circle"],
              ["Polar cell", "Between the polar circles and the North or South Pole"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start at the Equator and work outwards towards the pole.",
                "The Hadley cell is the first one, next to the Equator.",
                "The Polar cell must be the one touching the pole; its name tells you.",
                "The Ferrel cell is whatever is left, in the middle."
              ],
              example: {
                q: "Match: Tropic of Cancer, Arctic Circle. Choices: the line where the Polar cell begins in the north; the line where the Hadley cell ends in the north.",
                steps: ["The tropics are the edge of the Hadley cell.", "The polar circles are the edge of the Polar cell."],
                answer: "Tropic of Cancer: where the Hadley cell ends in the north. Arctic Circle: where the Polar cell begins in the north."
              }
            },
            core: { hint: "Equator first, pole last. The names Polar and Hadley give away two of them." },
            stretch: { extend: "Explain why the UK, which sits in the Ferrel cell, has such changeable weather compared with a place under the sinking air of the Hadley cell." }
          },
          explain: "Say, in one sentence, which cell the UK sits in and how you know.",
          why: "The Hadley cell runs from the Equator to the tropics, the Ferrel cell from the tropics to the polar circles, and the Polar cell from the circles to the poles. The same three repeat in the southern hemisphere."
        },
        {
          title: "Pressure and weather, matched up",
          task: {
            kind: "mcq",
            q: "Which option correctly links a type of pressure to its air movement and its weather?",
            options: [
              "High pressure: cold, dense air sinks, giving clear skies and dry weather",
              "High pressure: warm air rises, giving clouds and rain",
              "Low pressure: cold air sinks, giving clouds and rain",
              "Low pressure: warm air rises, giving clear skies and dry weather"
            ],
            answer: 0,
            feedback: [
              "",
              "Warm rising air is the cause of low pressure, not high. High pressure is made by cold, dense air sinking, and sinking air gives clear, dry weather.",
              "Sinking cold air makes high pressure, and it gives dry weather. Low pressure comes from warm air rising, and it is the rising air that brings clouds and rain.",
              "You have the air movement right for low pressure, but the weather wrong. Rising air cools and its water vapour condenses, so low pressure brings clouds and rain, not clear skies."
            ]
          },
          levels: {
            support: {
              steps: [
                "Decide the movement first: warm air rises, cold air sinks.",
                "Rising air leaves low pressure; sinking air makes high pressure.",
                "Rising air cools and makes clouds; sinking air stays clear.",
                "Check all three parts of the option agree: pressure, movement, weather."
              ],
              example: {
                q: "Fill the chain for a rainy day in the UK: ___ pressure, air is ___, weather is ___.",
                steps: ["Rain means clouds, so the air must be rising.", "Rising air means low pressure."],
                answer: "Low pressure, air is rising, weather is cloudy and wet."
              }
            },
            core: { hint: "Sinking goes with high and dry. Rising goes with low and wet. Find the option where all three agree." },
            stretch: { extend: "Explain why a high pressure in winter can bring frosty nights even though it brings sunshine by day." }
          },
          explain: "Say, in one sentence, why high pressure brings dry weather.",
          why: "High pressure is made by cold, dense air sinking. Sinking air does not cool and condense, so no clouds form and the weather is clear and dry. Low pressure is the reverse: rising warm air, clouds and rain."
        }
      ]
    },

    /* ───────────── 3 · the UK weather roundabout and how rain forms ───────────── */
    {
      key: "uk-roundabout", n: 3, title: "The UK weather roundabout and how rain forms",
      lead: "Why the UK gets weather from four directions, what an air mass and a depression are, and the chain of steps that turns water on the ground into rain from a cloud.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "air mass", means: "a huge body of air that is much the same temperature all the way through", sentence: "A cold air mass from the Arctic brought snow to Scotland." },
          { word: "Arctic", means: "the frozen region around the North Pole", sentence: "Arctic air is bitterly cold." },
          { word: "Atlantic", means: "the ocean to the west of the UK", sentence: "Storms from the Atlantic bring heavy rain." },
          { word: "heatwave", means: "several days of weather much hotter than usual", sentence: "The heatwave made the classrooms very warm." },
          { word: "drought", means: "a long time with far less rain than usual", sentence: "In the drought, the reservoir dried up." },
          { word: "depression", means: "an area of low pressure where warm air meets cold air", sentence: "A depression crossed the UK and brought a wet weekend." }
        ],
        passage: [
          "The UK is like a roundabout for weather.",
          "Air arrives from several directions, and each brings its own weather.",
          "Arctic air from the north brings heavy snow and bitter cold.",
          "Severe winter weather can come from the east.",
          "Hot, sunny air from the south can bring heatwaves and droughts.",
          "Storms from the Atlantic bring heavy rain and strong winds.",
          "A huge body of air like this is called an air mass.",
          "Where warm air meets cold air, a depression forms.",
          "A depression is an area of low pressure with cloud, rain and wind.",
          "Rain starts when the sun heats water and it evaporates.",
          "The warm, damp air rises and cools.",
          "The water vapour condenses into tiny droplets, which make clouds.",
          "The droplets join together, grow heavy and fall as rain."
        ]
      },
      sections: [
        {
          heading: "Four directions, four kinds of weather",
          paragraphs: [
            "Picture the UK sitting in the middle of a roundabout. Traffic comes in from every road, and so does the weather: the UK is at the meeting point of several different types of weather arriving from different directions. That is why one week can be frosty and the next mild and wet. Which weather you get depends on where the air has come from and what it travelled over on the way.",
            "From the north, Arctic air can bring heavy snow and bitterly cold conditions, because it has travelled over the frozen Arctic. From the east, severe winter weather can arrive after crossing the cold continent of Europe. From the south, hot and sunny weather can lead to heatwaves and droughts, because the air has come up from hot lands. From the west, storms from the Atlantic bring heavy rain and strong winds, because the air has picked up moisture from thousands of miles of ocean.",
            "In class you matched these four statements to the arrows on your roundabout diagram. When you forecast or explain UK weather, start with the compass: name the direction, say what the air crossed, and then say what weather it brings."
          ],
          tip: "North: snow and cold. East: severe winter weather. South: heatwaves and droughts. West: Atlantic storms, rain and wind."
        },
        {
          heading: "Air masses and depressions",
          paragraphs: [
            "Each road onto the roundabout carries an air mass. An air mass is a huge body of air, often bigger than the UK itself, that has much the same temperature and moisture all the way through. It picks up the character of the surface it forms over: an air mass from the Arctic is cold and dry, one from the Atlantic is mild and damp, one from the south is warm. When an air mass reaches the UK, it brings that character with it.",
            "The interesting weather happens where two air masses meet. In your bell work you completed the sentence beginning: a depression forms when. The answer is that a depression forms when a warm air mass meets a cold air mass. The warm air is lighter, so it is pushed up over the cold air; rising air means low pressure, and low pressure means cloud, rain and wind. A depression is therefore an area of low pressure that travels across the UK, usually from the Atlantic, bringing a spell of unsettled weather as it passes.",
            "On a weather map a depression shows up as a set of rings of isobars around an L, often with the lines close together, which is why depressions are windy. When you hear the forecaster say that a low is moving in from the west, that is a depression on its way round the roundabout."
          ],
          worked: {
            q: "Explain why a depression brings rain to the UK. (3 marks)",
            steps: [
              "Say what a depression is: an area of low pressure that forms where a warm air mass meets a cold air mass.",
              "Explain the movement: the warm air is lighter, so it is forced to rise over the cold air.",
              "Link rising air to rain: as the warm air rises it cools, its water vapour condenses into clouds, and rain falls.",
              "Definition, movement, result: three linked sentences for three marks."
            ],
            answer: "A depression is an area of low pressure that forms where warm air meets cold air. The warm air is lighter, so it rises over the cold air. As it rises it cools and its water vapour condenses into clouds, which bring rain."
          },
          tip: "Depression, low pressure, rising air, rain. If you can say those four in order, you can explain any wet day in the UK."
        },
        {
          heading: "How rain forms",
          paragraphs: [
            "Rain is water that has been on a journey. In class you copied a flow diagram showing the steps, and every type of rain in the next chapter follows the same chain. It begins when the sun heats water in the sea, lakes, rivers and soil. Some of the water evaporates, turning into an invisible gas called water vapour that mixes with the warm air above the surface.",
            "Warm air rises, and it carries the water vapour up with it. The higher the air climbs, the cooler it gets. Cool air cannot hold as much water vapour as warm air, so the vapour condenses: it turns back into tiny liquid droplets. Billions of these droplets floating together are what you see as a cloud. Inside the cloud the droplets bump into each other and join up, growing bigger and heavier, until the air can no longer hold them up and they fall as rain. If it is cold enough, they fall as snow instead.",
            "So the chain is: heat, evaporation, rising air, cooling, condensation, cloud, droplets growing, rain. Every step causes the next one, and the two words to spell correctly are evaporation and condensation."
          ],
          tip: "Evaporation turns liquid into vapour on the way up. Condensation turns vapour back into liquid at the top. Up: evaporate. Top: condense."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which direction brings hot, sunny weather that can lead to heatwaves and droughts in the UK?", options: ["The south", "The north", "The east", "The west"], answer: 0, why: "Air from the south has come up from hot lands, so it brings hot, sunny weather and, if it stays, heatwaves and droughts.",
          feedback: [
            "",
            "Air from the north has crossed the Arctic, so it brings heavy snow and bitter cold, not heat. Heatwaves come with air from the south.",
            "Air from the east brings severe winter weather after crossing the cold continent. Hot, sunny weather that leads to heatwaves and droughts comes from the south.",
            "Air from the west has crossed the Atlantic and brings storms with heavy rain and strong winds. Hot, dry heatwave weather comes from the south."
          ] },
        { kind: "gap", q: "Storms from the ___ bring heavy rain and strong winds to the UK.", answer: "Atlantic", options: ["Atlantic", "Arctic", "east"], why: "Storms cross the Atlantic Ocean to the west of the UK, picking up moisture on the way, so they bring heavy rain and strong winds.",
          feedback: {
            "Arctic": "Arctic air comes from the frozen north and brings heavy snow and bitterly cold conditions. The stormy, wet and windy weather comes from the Atlantic to the west.",
            "east": "Weather from the east brings severe winter cold after crossing the continent. The storms with heavy rain and strong winds come across the Atlantic from the west."
          } },
        { kind: "mcq", q: "What is the name for water vapour cooling and turning back into tiny liquid droplets?", options: ["Condensation", "Evaporation", "Precipitation", "Expansion"], answer: 0, why: "Condensation is vapour turning back into liquid. It happens when rising air cools, and it is how clouds form.",
          feedback: [
            "",
            "Evaporation is the opposite: liquid water turning into vapour when it is heated. Vapour turning back into droplets as it cools is condensation.",
            "Precipitation is the water that falls from the cloud, as rain or snow. The step before that, when vapour becomes droplets in the cloud, is condensation.",
            "Expansion is what warm air does when it spreads out and rises. Vapour turning into droplets is condensation."
          ] }
      ],
      modules: [
        {
          title: "Round the roundabout",
          task: {
            kind: "match",
            q: "Match each direction the air comes from to the weather it brings to the UK.",
            pairs: [
              ["From the north (Arctic air)", "Heavy snow and bitterly cold conditions"],
              ["From the east", "Severe winter weather"],
              ["From the south", "Hot, sunny weather, heatwaves and droughts"],
              ["From the west (the Atlantic)", "Storms with heavy rain and strong winds"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask where the air has travelled from. The Arctic is frozen, so northern air is the coldest and snowiest.",
                "The Atlantic is an ocean, so western air is full of moisture: rain and wind.",
                "Hot lands lie to the south, so southern air brings heat.",
                "The one left, the east, brings severe winter cold from the continent."
              ],
              example: {
                q: "A wind reaches the UK after crossing thousands of miles of ocean. Will it be dry or damp, and why?",
                steps: ["Air picks up the character of what it crosses.", "An ocean is water, so the air picks up moisture."],
                answer: "Damp, because it has picked up moisture from the ocean on the way."
              }
            },
            core: { hint: "Frozen Arctic, wet ocean, hot south, cold continent. Each surface gives the air its weather." },
            stretch: { extend: "Explain why the UK's position on the weather roundabout makes its weather harder to forecast than the weather of a place deep inside a continent." }
          },
          explain: "Say, in one sentence, why air from the Atlantic brings rain.",
          why: "Arctic air from the north brings snow and bitter cold; air from the east brings severe winter weather; air from the south brings heat, heatwaves and droughts; Atlantic air from the west brings storms, heavy rain and strong winds."
        },
        {
          title: "From puddle to cloud to rain",
          task: {
            kind: "order",
            q: "Put the steps of how rain forms in the correct order.",
            items: [
              "The sun heats water on the surface and some of it evaporates into water vapour",
              "The warm, damp air rises",
              "The rising air cools",
              "The water vapour condenses into tiny droplets, which form a cloud",
              "The droplets join together, grow heavy and fall as rain"
            ]
          },
          contexts: [
            { label: "A puddle", q: "After a shower, a puddle in the playground slowly disappears in the sunshine, and later that week it rains again. Put the steps of how that water becomes rain in the correct order." },
            { label: "Over the sea", q: "The sun shines on the Atlantic, and two days later rain falls on Cornwall. Put the steps of how that sea water becomes rain in the correct order." },
            { label: "A warm lake", q: "On a warm afternoon a mist lifts off a lake and a cloud builds above it. Put the steps of how the lake water becomes rain in the correct order." }
          ],
          levels: {
            support: {
              steps: [
                "Start at the ground, with water and sunshine. Which step mentions the sun?",
                "Water vapour has to go up before anything else can happen.",
                "Going up makes the air cooler, and cooling comes before condensing.",
                "A cloud must exist before rain can fall from it."
              ],
              example: {
                q: "Put the steps for a steamy bathroom mirror in order: the mirror is cold; hot water evaporates from the shower; droplets form on the glass; the vapour touches the cold mirror and cools.",
                steps: ["Evaporation from the hot shower comes first.", "The vapour has to meet something cold before it can condense.", "Droplets are the result."],
                answer: "Hot water evaporates from the shower; the mirror is cold; the vapour touches the cold mirror and cools; droplets form on the glass."
              }
            },
            core: { hint: "Heat and evaporate, rise, cool, condense, fall. Up first, then down." },
            stretch: { extend: "Explain what would be different about the last step on a very cold day, and why." }
          },
          explain: "Say, in one sentence, why rising air makes clouds.",
          why: "The sun evaporates water into vapour; the warm damp air rises; it cools as it climbs; the vapour condenses into droplets that make a cloud; the droplets grow heavy and fall as rain."
        },
        {
          title: "Why is UK weather so changeable?",
          task: {
            kind: "written",
            q: "Explain why the weather in the UK is so changeable. Use the idea of the weather roundabout in your answer. (6 marks)",
            marks: 6,
            criteria: [
              "Explains that the UK is at the meeting point of air arriving from several different directions",
              "Describes the weather brought by at least two named directions, such as Arctic air from the north and storms from the Atlantic",
              "Explains that each air mass takes its character from the surface it has crossed",
              "Explains that where warm and cold air meet a depression forms, bringing cloud, rain and wind",
              "Uses accurate key words: air mass, depression, low pressure"
            ],
            model: "The UK is like a weather roundabout because it sits at the meeting point of air masses arriving from different directions, and each one brings different weather. Arctic air from the north has crossed frozen seas, so it brings heavy snow and bitter cold, while air from the west has crossed the Atlantic and picked up moisture, so it brings storms with heavy rain and strong winds. Air from the south brings hot, sunny weather and can cause heatwaves and droughts, and air from the east brings severe winter cold from the continent. Because these air masses keep replacing each other, the weather changes from week to week. Where a warm air mass meets a cold one, a depression forms: the warm air rises over the cold air, pressure falls, and cloud, rain and wind follow. So the UK's changeable weather comes from its position between many different sources of air."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: the UK is at the meeting point of air from several directions, like a roundabout.",
                "Sentences 2 and 3: pick two directions and say what weather each brings and why (what the air crossed).",
                "Sentence 4: say that the air masses keep replacing each other, so the weather keeps changing.",
                "Sentence 5: explain a depression, where warm meets cold, to show you know the key word.",
                "Last sentence: sum up in one line."
              ],
              example: {
                q: "In two sentences, explain why a town where the wind always comes from the same direction would have steady weather.",
                steps: ["Weather depends on where the air has come from.", "If the direction never changes, the weather never changes."],
                answer: "The weather a place gets depends on where its air has come from. If the air always arrives from the same direction, over the same surface, it always brings the same weather, so there is little change."
              }
            },
            core: { hint: "Roundabout, two directions with their weather, air masses replacing each other, a depression. That is the whole answer." },
            stretch: { extend: "Add a sentence explaining how the UK's position in the Ferrel cell, between the tropics and the polar circle, helps to explain why warm and cold air meet over it so often." }
          },
          explain: "Say, in one sentence, what the word roundabout is standing for in this chapter.",
          why: "A strong answer names the roundabout idea, gives at least two directions with their weather and the surface that caused it, explains that the air masses keep changing places, and uses the word depression correctly for the place where warm and cold air meet."
        }
      ]
    },

    /* ───────────── 4 · three types of rainfall and two types of cloud ───────────── */
    {
      key: "rain-and-clouds", n: 4, title: "Three types of rainfall and two types of cloud",
      lead: "Convectional, relief and frontal rainfall all follow the same chain of rising, cooling and condensing air, but something different makes the air rise in each; and the two cloud types that form before the rain.",
      covers: [5, 7],
      pretext: {
        words: [
          { word: "convectional", means: "caused by warm air rising from a heated surface", sentence: "Convectional rainfall is common on hot afternoons." },
          { word: "relief", means: "the shape of the land, such as hills and mountains", sentence: "Relief rainfall falls on the hills of Wales." },
          { word: "frontal", means: "happening along the front where warm air meets cold air", sentence: "Frontal rainfall falls as a depression passes." },
          { word: "cumulus", means: "a heaped, fluffy cloud with a flat base", sentence: "Cumulus clouds look like cotton wool." },
          { word: "stratus", means: "a flat, grey sheet of cloud", sentence: "Stratus cloud covered the whole sky." }
        ],
        passage: [
          "There are three types of rainfall.",
          "All three happen because air rises, cools and its water vapour condenses.",
          "What is different is the reason the air rises.",
          "In convectional rainfall, the sun heats the ground.",
          "The warm air above it rises, cools and makes a cloud.",
          "This often brings heavy showers and thunderstorms on hot afternoons.",
          "In relief rainfall, moving air meets hills or mountains.",
          "The air is forced to rise over the high land, so it cools and rain falls.",
          "In frontal rainfall, a warm air mass meets a cold air mass.",
          "The lighter warm air is pushed up over the cold air and rain falls along the front.",
          "Before the rain, clouds form.",
          "There are two main types of cloud.",
          "Cumulus clouds are heaped and fluffy.",
          "Stratus clouds are flat, grey sheets."
        ]
      },
      sections: [
        {
          heading: "Convectional rainfall",
          paragraphs: [
            "You already know the chain: rising air cools, water vapour condenses, clouds form and rain falls. The three types of rainfall are three different reasons for the air to rise in the first place. The first is convectional rainfall, and the reason is heat. On a hot day the sun heats the ground strongly, and the ground heats the air above it. That warm air expands, becomes less dense and rises quickly, carrying water vapour with it.",
            "As the air rises it cools, and the vapour condenses into a towering cumulus cloud that grows taller through the afternoon. By late afternoon the cloud is heavy with droplets and heavy rain falls, often with thunder and lightning. Convectional rainfall is why hot summer days in the UK sometimes end in a thunderstorm, and it is the everyday rain of places near the Equator, where the sun is strongest.",
            "The clue in the name is convection: the movement of heat by warm air rising. If a question describes a hot surface, a sunny afternoon or the Equator, the answer is convectional."
          ],
          tip: "Convectional: the sun does the lifting. Think of a hot afternoon that ends in a storm."
        },
        {
          heading: "Relief rainfall",
          paragraphs: [
            "The second reason for air to rise is the shape of the land, which geographers call relief. When moist air blowing in from the sea meets a range of hills or mountains, it cannot go through them, so it is forced to rise up the slope. As it rises it cools, the water vapour condenses, clouds form and rain falls on the side of the hills facing the wind.",
            "Once the air has passed over the top it sinks down the far side. Sinking air warms up and dries out, so the far side of the hills is much drier. This is why the west of the UK, where Atlantic air first meets the mountains of Wales, the Lake District and Scotland, is wetter than the east. Relief rainfall is the mountains doing the lifting.",
            "Describe it in three moves: air is forced up over high land, it cools and condenses, rain falls on the windward side. Then add the fourth move for extra credit: the far side is drier because the air sinks and warms."
          ],
          worked: {
            q: "Explain how relief rainfall forms. (3 marks)",
            steps: [
              "Say what forces the air up: moist air from the sea meets hills or mountains and is forced to rise over them.",
              "Give the cooling step: as the air rises it cools.",
              "Give the result: the water vapour condenses, clouds form and rain falls on the side facing the wind.",
              "Lifting, cooling, condensing: the same chain as every type of rain, with the hills as the reason."
            ],
            answer: "Moist air blowing in from the sea meets hills or mountains and is forced to rise over them. As it rises it cools. The water vapour condenses into clouds and rain falls on the side of the hills facing the wind."
          },
          tip: "Relief rainfall: the hills do the lifting. Wet on the windward side, drier on the far side."
        },
        {
          heading: "Frontal rainfall",
          paragraphs: [
            "The third reason for air to rise is another air mass. Frontal rainfall happens where a warm air mass meets a cold air mass. The boundary between them is called a front. Warm air is lighter than cold air, so at the front the warm air is pushed up and slides over the top of the cold air. As the warm air rises it cools, its water vapour condenses, and a long band of cloud and rain forms along the front.",
            "This is the rain that depressions bring to the UK, which is why frontal rainfall is the type you see most often. A depression carries its fronts across the country from the Atlantic, so a day of frontal rain often starts with thickening cloud, gives steady rain for several hours, and then clears as the front passes. Frontal rainfall is the cold air doing the lifting.",
            "To tell the three types apart, ask one question: what made the air rise? Heat from the ground means convectional, hills mean relief, and a meeting of warm and cold air means frontal."
          ],
          tip: "Convectional: heat lifts. Relief: hills lift. Frontal: cold air lifts the warm air. Same chain, different lift."
        },
        {
          heading: "Two types of cloud",
          paragraphs: [
            "Before the rain comes the cloud, so in class you read about the two main types. Cumulus clouds are the heaped, fluffy ones that look like cotton wool, with a flat base and a rounded top. Small cumulus clouds drift across a sunny sky and mean fair weather, but on a hot afternoon a cumulus cloud can keep growing upwards until it becomes a towering storm cloud, which is where convectional rain comes from.",
            "Stratus clouds are the opposite shape: flat, grey sheets that spread across the whole sky in a layer. Stratus means layer. A sky full of stratus is dull and grey, and it often brings drizzle or steady light rain. The flat layers of cloud that arrive with a front are a type of stratus. Heaped means cumulus; layered means stratus."
          ],
          tip: "Cumulus: a pile (think accumulate). Stratus: a layer (think strata of rock)."
        }
      ],
      gate: [
        { kind: "mcq", q: "Moist air from the sea is forced to rise over a range of mountains, cools and rain falls. Which type of rainfall is this?", options: ["Relief rainfall", "Convectional rainfall", "Frontal rainfall", "Depression rainfall"], answer: 0, why: "Relief means the shape of the land. When hills or mountains force air to rise, the rain that follows is relief rainfall.",
          feedback: [
            "",
            "Convectional rainfall happens when the sun heats the ground and the warm air rises. Here the air is lifted by mountains, which makes it relief rainfall.",
            "Frontal rainfall happens where a warm air mass meets a cold one. Here nothing is said about two air masses; the mountains do the lifting, so it is relief rainfall.",
            "Depression rainfall is not one of the three types. A depression brings frontal rainfall; air forced up by mountains gives relief rainfall."
          ] },
        { kind: "gap", q: "In ___ rainfall, the sun heats the ground, the warm air above it rises and cools, and heavy showers or thunderstorms follow.", answer: "convectional", options: ["convectional", "relief", "frontal"], why: "Convection is heat moving by warm air rising. Heating from the ground is the cause, so this is convectional rainfall.",
          feedback: {
            "relief": "Relief rainfall needs hills or mountains to force the air up. Here the air rises because the ground has been heated by the sun, so it is convectional rainfall.",
            "frontal": "Frontal rainfall needs a warm air mass meeting a cold one. Here the lifting is done by heat from the sunny ground, which is convectional rainfall."
          } },
        { kind: "mcq", q: "Which type of cloud is a flat, grey sheet spread across the sky?", options: ["Stratus", "Cumulus", "Cotton-wool cloud", "Thunder cloud"], answer: 0, why: "Stratus means layer. Stratus clouds are flat grey sheets that often bring drizzle.",
          feedback: [
            "",
            "Cumulus clouds are the heaped, fluffy ones with a flat base and a rounded top. A flat grey sheet across the whole sky is stratus.",
            "Cotton wool is how we describe cumulus clouds, which are heaped and fluffy. A flat grey layer is stratus.",
            "A thunder cloud is a cumulus cloud that has grown very tall. The flat grey sheet that covers the sky is stratus."
          ] }
      ],
      modules: [
        {
          title: "What made the air rise?",
          task: {
            kind: "match",
            q: "Match each type of rainfall to the reason the air rises.",
            pairs: [
              ["Convectional rainfall", "The sun heats the ground and the warm air above it rises"],
              ["Relief rainfall", "Moving air is forced up over hills or mountains"],
              ["Frontal rainfall", "A warm air mass meets a cold air mass and is pushed up over it"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Every type of rain needs rising air. The match is about what does the lifting.",
                "Convection is heat rising, so convectional goes with the heated ground.",
                "Relief means the shape of the land, so relief goes with hills and mountains.",
                "A front is where two air masses meet, so frontal goes with warm meeting cold."
              ],
              example: {
                q: "A pupil says: the rain today came because a depression crossed from the Atlantic. Which type of rainfall is that, and why?",
                steps: ["A depression forms where warm air meets cold air.", "Warm meeting cold is a front."],
                answer: "Frontal rainfall, because a depression is made of warm air meeting cold air along a front."
              }
            },
            core: { hint: "Heat, hills, or a meeting of warm and cold air. The name of each type tells you which." },
            stretch: { extend: "Explain why the west of the UK gets more relief rainfall than the east, and more frontal rainfall too." }
          },
          explain: "Say, in one sentence, what all three types of rainfall have in common.",
          why: "Convectional rainfall is lifted by heat from the ground, relief rainfall by hills and mountains, and frontal rainfall by cold air pushing warm air upwards. In all three the rising air cools and condenses."
        },
        {
          title: "Name that rain",
          task: {
            kind: "mcq",
            q: "It has been a hot, sunny afternoon in the UK. By late afternoon a huge cumulus cloud has built up and a thunderstorm breaks. Which type of rainfall is this, and why?",
            options: [
              "Convectional, because the heated ground made the warm air rise",
              "Relief, because the cloud was forced up over high ground",
              "Frontal, because a cold air mass pushed the warm air up",
              "Convectional, because a mountain forced the air to rise"
            ],
            answer: 0,
            feedback: [
              "",
              "Nothing in the story mentions hills or mountains. The lifting came from the sun heating the ground on a hot afternoon, which is convectional rainfall.",
              "There is no meeting of two air masses here, just a hot afternoon and a growing cloud. Heat from the ground made the air rise, so it is convectional.",
              "You have the right name but the wrong reason. Convectional rainfall is caused by the sun heating the ground, not by a mountain; mountains cause relief rainfall."
            ]
          },
          contexts: [
            { label: "Rainforest", q: "Near the Equator the sun blazes down every morning, clouds tower up by midday and heavy rain falls every afternoon. Which type of rainfall is this, and why?" },
            { label: "Summer barbecue", q: "A family barbecue on a blazing hot afternoon is interrupted at five o'clock by a sudden thunderstorm from a cloud that grew all afternoon. Which type of rainfall is this, and why?" },
            { label: "Hot city", q: "Tarmac and roofs in a city have baked in the sun all day, and by evening a storm cloud has built up overhead and a downpour starts. Which type of rainfall is this, and why?" }
          ],
          levels: {
            support: {
              steps: [
                "Find what made the air rise. Is there heat from the ground, a hill, or a meeting of air masses?",
                "A hot afternoon with a growing cloud is heat from the ground.",
                "Heat lifting the air is convection, so the type is convectional.",
                "Check the reason in the option matches: heated ground, not a mountain or a front."
              ],
              example: {
                q: "Rain is falling steadily all day as a depression moves across from the Atlantic, with a long band of cloud. Which type of rainfall is this, and why?",
                steps: ["A depression is where warm air meets cold air.", "Warm air pushed up over cold air is a front."],
                answer: "Frontal rainfall, because a depression lifts warm air over cold air along a front."
              }
            },
            core: { hint: "Hot afternoon, heated ground, cloud growing taller. Which type of rain has heat as the lift?" },
            stretch: { extend: "Explain why convectional thunderstorms in the UK happen in the late afternoon rather than in the morning." }
          },
          explain: "Say, in one sentence, why convectional rain usually comes in the afternoon.",
          why: "The lifting here comes from the sun heating the ground, so the warm air above it rises, cools and condenses into a towering cumulus cloud: convectional rainfall."
        },
        {
          title: "Explaining frontal rainfall",
          task: {
            kind: "written",
            q: "Explain how frontal rainfall forms. (4 marks)",
            marks: 4,
            criteria: [
              "States that frontal rainfall happens where a warm air mass meets a cold air mass",
              "Explains that the warm air is lighter and so is pushed up over the cold air",
              "Explains that the rising warm air cools and its water vapour condenses into cloud",
              "States that rain falls along the front, and links it to depressions over the UK"
            ],
            model: "Frontal rainfall forms where a warm air mass meets a cold air mass; the boundary between them is called a front. The warm air is lighter than the cold air, so it is pushed up and slides over the top of the cold air. As the warm air rises it cools, and its water vapour condenses into a long band of cloud along the front. The droplets grow and fall as rain. This is the rain that depressions bring to the UK as they cross from the Atlantic."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: say where it happens, where a warm air mass meets a cold one, and name the boundary a front.",
                "Sentence 2: say which air goes up (the warm, lighter air) and over what (the cold air).",
                "Sentence 3: the rising air cools and condenses into cloud.",
                "Sentence 4: rain falls along the front; mention that depressions bring this to the UK."
              ],
              example: {
                q: "In two sentences, explain how convectional rainfall forms.",
                steps: ["Say what does the lifting: the sun heating the ground.", "Then the usual chain: rise, cool, condense, rain."],
                answer: "The sun heats the ground and the warm air above it rises. As it rises it cools, its water vapour condenses into a cumulus cloud, and heavy rain falls."
              }
            },
            core: { hint: "Warm meets cold, warm goes up, up means cool, cool means condense, condense means rain. Five links." },
            stretch: { extend: "Add a sentence explaining why frontal rain tends to last for hours while convectional rain is often a short, heavy shower." }
          },
          explain: "Say, in one sentence, why the warm air is the one that rises at a front.",
          why: "Full marks need the meeting of two air masses, the warm air rising over the cold because it is lighter, cooling and condensation, and rain along the front, ideally linked to a depression over the UK."
        }
      ]
    },

    /* ───────────── 5 · extreme weather: tropical cyclones ───────────── */
    {
      key: "tropical-cyclones", n: 5, title: "Extreme weather: tropical cyclones",
      lead: "What a tropical cyclone is, the different names it has around the world, how one is born, grows and dies, and why geographers use a real event such as Hurricane Dorian in 2019 as a case study.",
      covers: [6, 7],
      pretext: {
        words: [
          { word: "tropical cyclone", means: "a huge spinning storm that forms over warm tropical oceans", sentence: "A tropical cyclone brings very strong winds and heavy rain." },
          { word: "hurricane", means: "the name for a tropical cyclone in the Atlantic Ocean", sentence: "Hurricane Dorian struck in 2019." },
          { word: "life cycle", means: "the stages something goes through from its start to its end", sentence: "The life cycle of a cyclone ends when it reaches land." },
          { word: "case study", means: "a real-life example of something we study in geography", sentence: "Our case study of a tropical cyclone is Hurricane Dorian." },
          { word: "extreme weather", means: "weather that is far more severe than usual", sentence: "Tropical cyclones are a type of extreme weather." }
        ],
        passage: [
          "Some weather is far more severe than usual.",
          "We call it extreme weather.",
          "A tropical cyclone is one example.",
          "It is a huge spinning storm with very strong winds and heavy rain.",
          "Tropical cyclones form over warm oceans near the tropics.",
          "The same kind of storm has different names in different places.",
          "In the Atlantic it is called a hurricane.",
          "A tropical cyclone has a life cycle.",
          "It is born over warm water, grows stronger, and dies when it reaches land or cold water.",
          "Geographers study real storms to understand them.",
          "A real-life example is called a case study.",
          "Our case study is Hurricane Dorian, which happened in 2019."
        ]
      },
      sections: [
        {
          heading: "What is a tropical cyclone?",
          paragraphs: [
            "Most of the weather in this unit is ordinary. Extreme weather is weather that is much more severe than usual, and a tropical cyclone is one of the most powerful kinds. A tropical cyclone is an enormous rotating storm, hundreds of kilometres across, that forms over warm oceans in the tropics. It brings winds strong enough to tear roofs off buildings, rain heavy enough to flood whole towns, and it pushes the sea up onto the land as it arrives.",
            "The same type of storm is given different names depending on where in the world it forms, and your revision list asks you to know them. Over the Atlantic Ocean it is called a hurricane. Over the western Pacific it is called a typhoon. Over the Indian Ocean and around Australia it is simply called a cyclone. Hurricane, typhoon and cyclone are three names for one kind of storm: the tropical cyclone.",
            "The word tropical is the clue to where they form. They need very warm sea water, which is found only near the tropics, in the belt of the Hadley cell where the sun is strongest. The UK is far too cool to make one, although the remains of Atlantic hurricanes sometimes cross the ocean and reach us as ordinary, if very windy, depressions."
          ],
          tip: "Three names, one storm. Hurricane: Atlantic. Typhoon: western Pacific. Cyclone: Indian Ocean and Australia."
        },
        {
          heading: "The life cycle of a tropical cyclone",
          paragraphs: [
            "In class you drew the life cycle of a tropical cyclone with arrows between the stages. Like a living thing, a cyclone is born, grows, reaches full strength and dies. It is born when the sun heats the surface of a tropical ocean so strongly that huge amounts of warm, moist air rise. That rising air leaves very low pressure at the surface, and more air rushes in from all sides to replace it. Because the Earth is spinning, the inrushing air is bent into a spiral, and the storm begins to rotate.",
            "As the storm drifts across the warm ocean it keeps feeding on warm, moist air, so it grows larger and its winds grow stronger. The rising air cools and condenses into vast towering clouds that pour out heavy rain. At full strength the storm is a spinning wheel of cloud with very fast winds near its centre.",
            "The storm dies when its food supply is cut off. If it moves over land, or over cooler water, there is no longer a warm sea surface to feed it with warm, moist air. The winds slow, the rain eases and the cyclone fades into an ordinary storm. That is why the worst damage happens right at the coast, where the storm arrives at full strength, and why places far inland suffer much less."
          ],
          worked: {
            q: "Explain why a tropical cyclone loses its strength when it moves over land. (2 marks)",
            steps: [
              "Say what feeds the storm: warm, moist air rising from a warm ocean surface.",
              "Say what changes over land: there is no warm sea surface, so the supply of warm, moist air is cut off.",
              "Link to the result: without its energy supply, the winds weaken and the storm fades.",
              "Cause, change, result: two linked sentences for two marks."
            ],
            answer: "A tropical cyclone is fed by warm, moist air rising from a warm ocean. Over land there is no warm sea surface, so the supply of warm, moist air is cut off, the winds weaken and the storm fades."
          },
          tip: "Born over warm sea, fed by warm sea, dies without warm sea. Warm sea water is the whole story."
        },
        {
          heading: "Case study: Hurricane Dorian, 2019",
          paragraphs: [
            "In geography a case study is a real-life example of the thing we are studying. It turns a general idea, such as a tropical cyclone, into a real event with a place, a date and real people, and it lets you back up an answer with evidence instead of guesswork. Whenever an exam asks you to use an example you have studied, it is asking for a case study.",
            "Your case study for this unit is Hurricane Dorian, which happened in 2019. It was a hurricane, so it formed over the Atlantic Ocean. In the cover lesson you read the textbook account and made notes under the headings what tropical cyclones are, Hurricane Dorian 2019, and the life cycle of a tropical cyclone, and then you wrote a paragraph in your own words describing what happened. This deck does not state the figures for Dorian, so when you revise, the facts you need (where it struck, how strong it was, what it did to people and places) must come from your own notes.",
            "When you write about a case study, follow a simple order: name it and date it, say where it happened, describe what the weather did, and then explain the effects on people and on the environment. One well-chosen fact for each is worth more than a long list."
          ],
          tip: "Case study answers need a name, a date, a place and at least one specific fact. Dorian, 2019, the Atlantic, and one effect from your notes."
        }
      ],
      gate: [
        { kind: "mcq", q: "Where do tropical cyclones form?", options: ["Over warm oceans in the tropics", "Over cold oceans near the poles", "Over hot deserts", "Over the mountains of the UK"], answer: 0, why: "Tropical cyclones are fed by warm, moist air rising from a warm sea surface, which is found over tropical oceans.",
          feedback: [
            "",
            "Cold water cannot supply the warm, moist rising air that a cyclone feeds on. Tropical cyclones form over warm oceans in the tropics, which is why they are called tropical.",
            "Deserts are hot but dry, and land cannot feed a cyclone. These storms need a warm sea surface, so they form over warm tropical oceans.",
            "The UK is far too cool, and cyclones need warm ocean water, not mountains. They form over warm oceans in the tropics."
          ] },
        { kind: "gap", q: "A tropical cyclone that forms over the Atlantic Ocean is called a ___.", answer: "hurricane", options: ["hurricane", "typhoon", "tornado"], why: "Hurricane is the Atlantic name for a tropical cyclone. The same storm over the western Pacific is a typhoon.",
          feedback: {
            "typhoon": "A typhoon is the same kind of storm, but that name is used over the western Pacific. Over the Atlantic a tropical cyclone is called a hurricane.",
            "tornado": "A tornado is a different hazard altogether: a narrow spinning funnel of wind that forms over land and lasts minutes, not days. The huge ocean storm over the Atlantic is a hurricane."
          } },
        { kind: "mcq", q: "What does the term case study mean in geography?", options: ["A real-life example of something we study", "A test at the end of a topic", "A diagram with arrows showing stages", "A list of key words to learn"], answer: 0, why: "A case study is a real event or place that gives a real example of the idea being studied, such as Hurricane Dorian in 2019 for tropical cyclones.",
          feedback: [
            "",
            "A test checks what you have learned; it is not a case study. A case study is a real-life example, such as a real storm, used to understand an idea.",
            "A diagram with arrows is how you drew the life cycle of a cyclone, but that is a model, not a case study. A case study is a real-life example of the thing being studied.",
            "Key words help you describe things, but a case study is a real event or place used as an example, such as Hurricane Dorian in 2019."
          ] }
      ],
      modules: [
        {
          title: "Born, grows, dies",
          task: {
            kind: "order",
            q: "Put the stages in the life cycle of a tropical cyclone in the correct order.",
            items: [
              "The sun heats a tropical ocean and huge amounts of warm, moist air rise",
              "Very low pressure forms, more air rushes in and the spinning Earth bends it into a spiral",
              "The storm feeds on more warm, moist air as it crosses the ocean, growing larger and stronger",
              "The storm reaches land or cooler water and its supply of warm, moist air is cut off",
              "The winds weaken, the rain eases and the cyclone fades away"
            ]
          },
          contexts: [
            { label: "In the Atlantic", q: "A hurricane like Dorian begins over the Atlantic and ends over land. Put the stages of its life cycle in the correct order." },
            { label: "A Pacific typhoon", q: "A typhoon forms over the western Pacific and later fades. Put the stages of its life cycle in the correct order." },
            { label: "A cyclone near Australia", q: "A cyclone grows over the warm sea north of Australia and dies as it crosses the coast. Put the stages of its life cycle in the correct order." }
          ],
          levels: {
            support: {
              steps: [
                "Every storm starts with heat and rising air over the sea.",
                "Rising air leaves low pressure, which pulls in more air and starts the spin.",
                "Growing comes before dying: find the stage about feeding and growing.",
                "The storm cannot die until something cuts off its warm, moist air."
              ],
              example: {
                q: "Put the stages of a campfire in order: the fire burns down to embers; a match lights dry kindling; the wood runs out; bigger logs are added and the fire grows.",
                steps: ["Lighting comes first.", "Feeding the fire makes it grow.", "When the fuel runs out, it dies down."],
                answer: "A match lights dry kindling; bigger logs are added and the fire grows; the wood runs out; the fire burns down to embers."
              }
            },
            core: { hint: "Born over warm sea, starts to spin, feeds and grows, loses its food, fades. Five stages." },
            stretch: { extend: "Explain why a coastal town suffers more from a tropical cyclone than a town 200 kilometres inland on the same path." }
          },
          explain: "Say, in one sentence, what a tropical cyclone needs in order to keep growing.",
          why: "Heat over a tropical ocean makes warm, moist air rise; the low pressure draws in more air, which spirals; the storm grows as it feeds on warm sea; land or cooler water cuts off the supply; the winds weaken and the storm fades."
        },
        {
          title: "Why does it die?",
          task: {
            kind: "mcq",
            q: "A hurricane crosses the coast and moves inland. Within a day its winds have dropped and it is an ordinary storm. Why?",
            options: [
              "Over land it loses the warm ocean water that fed it with warm, moist air",
              "The land is warmer than the sea, so the storm overheats and breaks apart",
              "Buildings and trees physically block the wind and stop the spinning",
              "The rain has all fallen, so there is no water left in the storm"
            ],
            answer: 0,
            feedback: [
              "",
              "A cyclone does not overheat. Its energy comes from warm, moist air rising off a warm sea surface, and over land that supply is cut off, so the storm weakens.",
              "Buildings and trees are far too small to stop a storm hundreds of kilometres across. The storm dies because the land gives it no warm, moist air to feed on.",
              "A cyclone can keep making rain as long as it is fed with moist air. The real reason it fades is that land, unlike a warm ocean, cannot feed it with warm, moist air."
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask what feeds a cyclone: warm, moist air rising from a warm sea.",
                "Ask what land has that the sea does not, and what it lacks. Land has no warm sea surface.",
                "No warm sea means no new supply of warm, moist air.",
                "Without its supply the storm weakens, like a fire without fuel."
              ],
              example: {
                q: "A hurricane drifts north over colder parts of the Atlantic and weakens. Why?",
                steps: ["The sea is still there, but it is cold.", "Cold water does not give off the warm, moist air the storm needs."],
                answer: "Colder water cannot supply the warm, moist rising air that feeds the storm, so it weakens."
              }
            },
            core: { hint: "Think of the storm as a fire. What is its fuel, and why is there none over land?" },
            stretch: { extend: "Explain why a cyclone that stalls over very warm sea for several days can become much more dangerous." }
          },
          explain: "Say, in one sentence, why the sea matters so much to a tropical cyclone.",
          why: "A tropical cyclone is fed by warm, moist air rising from a warm ocean. Land cannot supply that, so once the storm moves inland its energy supply is cut off and it weakens."
        },
        {
          title: "Using a case study",
          task: {
            kind: "written",
            q: "Using Hurricane Dorian as your example, explain what a case study is and why geographers use case studies. (4 marks)",
            marks: 4,
            criteria: [
              "Defines a case study as a real-life example of something studied in geography",
              "Names the case study correctly: Hurricane Dorian, a tropical cyclone in 2019",
              "Explains that a case study gives evidence, with a real place, date and real effects on people",
              "Explains that it helps us understand the general idea, such as how tropical cyclones form and what they do"
            ],
            model: "A case study is a real-life example of something we study in geography. Hurricane Dorian, a tropical cyclone that happened in 2019, is our case study for extreme weather. Geographers use case studies because a real event has a real place, a real date and real effects on people, which gives evidence to support an answer instead of a guess. Studying what Dorian did also helps us understand the general idea: how a tropical cyclone forms over warm ocean, how powerful its winds and rain can be, and why the damage is worst at the coast."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: a case study is a real-life example of something we study.",
                "Sentence 2: name yours, Hurricane Dorian, and say it was a tropical cyclone in 2019.",
                "Sentence 3: say why real examples help, because they give evidence from a real place and time.",
                "Sentence 4: say what the example teaches about tropical cyclones in general."
              ],
              example: {
                q: "In two sentences, explain why a science teacher might show a real experiment rather than only describing one.",
                steps: ["A real example shows the idea actually happening.", "It gives evidence that the idea is true."],
                answer: "A real experiment shows the idea actually happening, not just described. It gives evidence pupils can see, so they understand and remember the idea better."
              }
            },
            core: { hint: "Define it, name it, say why real examples give evidence, say what it teaches about cyclones in general." },
            stretch: { extend: "Add one specific fact about Hurricane Dorian from your class notes and explain which part of the life cycle it illustrates." }
          },
          explain: "Say, in one sentence, the difference between a case study and a diagram of a life cycle.",
          why: "Full marks need the definition, the named example with its date, the idea that real events give evidence, and a link back to what the example teaches about tropical cyclones."
        }
      ]
    },

    /* ───────────── 6 · from the Ice Age to climate change ───────────── */
    {
      key: "ice-age-and-climate-change", n: 6, title: "From the Ice Age to climate change",
      lead: "What the UK was like under the ice about 20 000 years ago, how the land sank and rose again, the natural and human causes of climate change, the greenhouse gases behind it, and the effects it has on people and the environment.",
      covers: [9, 10, 11, 12],
      pretext: {
        words: [
          { word: "glacier", means: "a large mass of ice that flows very slowly downhill", sentence: "A glacier moves so slowly you cannot see it move." },
          { word: "ice sheet", means: "a huge layer of ice covering a whole region", sentence: "An ice sheet once covered most of the UK." },
          { word: "isostatic change", means: "the land sinking under ice and rising again after it melts", sentence: "Isostatic change is still lifting Scotland today." },
          { word: "greenhouse gas", means: "a gas that traps heat in the atmosphere", sentence: "Carbon dioxide is a greenhouse gas." },
          { word: "fossil fuel", means: "coal, oil or gas, made from living things that died long ago", sentence: "Burning a fossil fuel releases carbon dioxide." },
          { word: "climate change", means: "a long-term change in the Earth's usual weather", sentence: "Climate change is making heatwaves more common." }
        ],
        passage: [
          "The Earth's climate has not always been the same.",
          "About 20 000 years ago there was an Ice Age.",
          "Ice covered much of Europe, including most of the United Kingdom.",
          "Today ice covers about 10 per cent of the Earth's land surface.",
          "This ice is in glaciers, ice caps and ice sheets.",
          "A glacier is a large mass of ice that flows very slowly, like a frozen river.",
          "The weight of the ice pushed the land down.",
          "When the ice melted, the land slowly rose again.",
          "This is called isostatic change.",
          "Today the climate is changing again, and it is getting warmer.",
          "Some causes are natural, such as volcanic eruptions.",
          "Some causes are human, such as burning fossil fuels.",
          "Greenhouse gases like carbon dioxide trap heat in the air.",
          "Climate change affects people and the environment all over the world."
        ]
      },
      sections: [
        {
          heading: "The last Ice Age",
          paragraphs: [
            "Climate is the usual weather over many years, but over thousands of years even the climate changes. About 20 000 years ago the Earth was in the grip of an Ice Age. The climate was far colder than today, and ice covered much of the continent of Europe, including most of the United Kingdom. Where you are sitting now may have been under hundreds of metres of ice, with only the south of England left as a cold, treeless land where few plants could grow and animals adapted to the cold roamed.",
            "The ice is still with us, but there is far less of it. Today ice covers about 10 per cent of the Earth's land surface, in the form of glaciers, ice caps and ice sheets. A glacier is a large mass of ice, often shaped like a river, that flows very slowly downhill under the force of gravity. Glaciers grow and shrink with the seasons: they thicken when winter snow piles up and thin when summer melts it.",
            "An Ice Age changes the sea as well as the land. The water locked up in the ice sheets had to come from somewhere, and it came from the oceans, so sea level was much lower than it is now. As the ice melted at the end of the Ice Age, that water returned to the sea and sea level rose. When you link the timeline of the Ice Age to sea level, remember: more ice means lower seas, less ice means higher seas."
          ],
          worked: {
            q: "The last Ice Age was about 20 000 years ago. About how many centuries is that? And if ice covers about 10 per cent of the Earth's land surface today, what percentage of the land is not covered by ice?",
            steps: [
              "A century is 100 years, so divide the years by 100: 20 000 ÷ 100 = 200 centuries.",
              "Check by multiplying back: 200 × 100 = 20 000.",
              "The whole land surface is 100 per cent. Take away the 10 per cent that is ice: 100 − 10 = 90 per cent.",
              "Two different questions, two different units: centuries for the first, per cent for the second."
            ],
            answer: "About 200 centuries; about 90 per cent of the land surface is not covered by ice.",
            checks: [{ expr: "ICE_AGE_YEARS_AGO/100", value: 200, tol: 0 }, { expr: "100-ICE_PERCENT", value: 90, tol: 0 }]
          },
          tip: "Two numbers to remember from this lesson: about 20 000 years ago, and about 10 per cent of the land surface is ice today."
        },
        {
          heading: "The land that sank and rose again",
          paragraphs: [
            "Ice is heavy. An ice sheet hundreds of metres thick weighs so much that it pushes the Earth's crust down beneath it, the way a mattress sinks under you when you sit on it. During the Ice Age the land under the ice was pressed downwards. When the ice melted and the weight was lifted, the crust slowly began to rise back up, and in the north of the UK it is still rising today, a few millimetres a year.",
            "This sinking and rising of the land is called isostatic change. It explains some odd features of the UK coast. In class you looked at a photograph from Paignton in Devon. In places you can find old beaches now standing well above the sea, and in others land that was once dry is now under water, because the land and the sea have both moved since the ice went. When a question asks what happened to the Earth's crust during and after the Ice Age, give both halves: pressed down by the weight of the ice, then rising again after the ice melted."
          ],
          tip: "Isostatic: down under the ice, up after the melt. Draw it as a see-saw of land and ice."
        },
        {
          heading: "Causes of climate change: natural and human",
          paragraphs: [
            "The climate is changing again, and this time it is getting warmer. In class you sorted seven causes of climate change into two columns. The three human causes are fossil fuels, deforestation and agriculture. Burning fossil fuels (coal, oil and gas) in power stations, factories, cars and homes releases carbon dioxide. Deforestation, cutting down forests, removes trees that would otherwise take carbon dioxide out of the air, and burning the cleared trees releases even more. Agriculture adds methane, a gas given off by cattle and by flooded rice fields, and more carbon dioxide from clearing land and running machinery.",
            "The four natural causes are volcanic eruptions, ocean currents, solar output and orbital changes. Volcanic eruptions throw ash and gases high into the atmosphere, which can block sunlight and cool the Earth for a year or two. Ocean currents move heat around the planet, and when they shift, the climate of whole regions shifts with them. Solar output, the amount of energy the sun gives out, rises and falls slightly over the years. Orbital changes are slow wobbles in the Earth's path around the sun that alter how much sunlight reaches us, and they are thought to be behind the coming and going of Ice Ages.",
            "The link between the human causes and a warming world is greenhouse gases. Carbon dioxide and methane (its chemical formula is CH4) are greenhouse gases: they let sunlight in but trap the heat that would otherwise escape back into space, like the glass of a greenhouse. Some greenhouse gas in the atmosphere is natural and keeps the Earth warm enough to live on. The problem is that fossil fuels, deforestation and agriculture are pumping out far more than before, so more heat is trapped and the Earth warms."
          ],
          tip: "Human: fossil fuels, deforestation, agriculture (three). Natural: volcanic eruptions, ocean currents, solar output, orbital changes (four). Seven in all."
        },
        {
          heading: "The effects of climate change",
          paragraphs: [
            "A warming climate has a wide range of effects on people and on the environment, and not all of them are equally serious. In class you ranked fourteen effects from most important to least important and justified your top and bottom choices. There is no single right order, but a good ranking explains its reasons: how many people are affected, how badly, and whether anything can be done about it.",
            "Two of the effects you discussed show how different they can be. Increased migration happens when climate change makes places harder to live in, through drought, flooding or failed harvests, so people are forced to move; large movements of people can put pressure on the countries they move to and raise tension between nations. Changes to agricultural yields mean that crops grow better in some places and worse in others as temperatures and rainfall shift; this effect can be reduced by using technology and new types of crop, which is why some people rank it lower.",
            "The Ice Age chapter gives you a third effect to think about. The ice sheets are a store of frozen water, and as a warming climate melts them that water returns to the sea. Just as the end of the Ice Age raised sea level, a warming world raises it again, and low-lying coasts are the first to feel it. When you write about effects, say who or what is affected, how, and how serious you judge it to be."
          ],
          tip: "For any effect: who or what is affected, how, and how serious. Then you can justify a ranking."
        }
      ],
      gate: [
        { kind: "numeric", q: "About what percentage of the Earth's land surface is covered by ice today?", answer: 10, tolerance: 0, units: "per cent", check: "ICE_PERCENT", why: "Ice covers about 10 per cent of the Earth's land surface today, as glaciers, ice caps and ice sheets.",
          misconceptions: [
            { answer: 90, says: "90 per cent is the part of the land surface that is NOT covered by ice. Ice covers about 10 per cent of the Earth's land surface.", check: "100-ICE_PERCENT" },
            { answer: 20, says: "You may be mixing this up with the 20 000 years since the Ice Age. Ice covers about 10 per cent of the Earth's land surface today.", check: "ICE_AGE_YEARS_AGO/1000" },
            { answer: 50, says: "Half the Earth is not ice; during the Ice Age ice covered much of Europe, but today it covers only about 10 per cent of the land surface.", check: "50" }
          ] },
        { kind: "gap", q: "Fossil fuels, deforestation and agriculture are the ___ causes of climate change.", answer: "human", options: ["human", "natural", "ancient"], why: "All three are things people do: burning fuels, cutting down forests and farming. They are the human causes.",
          feedback: {
            "natural": "Volcanic eruptions, ocean currents, solar output and orbital changes are the natural causes. Burning fossil fuels, cutting down forests and farming are all done by people, so they are human causes.",
            "ancient": "Ancient is not one of the two groups. The causes are sorted into human and natural, and these three are all things people do, so they are human causes."
          } },
        { kind: "mcq", q: "Which of these is a natural cause of climate change?", options: ["Volcanic eruptions", "Burning fossil fuels", "Deforestation", "Agriculture"], answer: 0, why: "Volcanic eruptions happen without people. The other three are human activities that release greenhouse gases.",
          feedback: [
            "",
            "Burning fossil fuels is done by people in power stations, cars and homes, so it is a human cause. The natural cause in the list is volcanic eruptions.",
            "Deforestation is people cutting down forests, so it is a human cause. Volcanic eruptions happen without people and are a natural cause.",
            "Agriculture is farming, a human activity that releases methane and carbon dioxide. The natural cause here is volcanic eruptions."
          ] }
      ],
      modules: [
        {
          title: "Cause and explanation",
          task: {
            kind: "match",
            q: "Match each cause of climate change to its explanation.",
            pairs: [
              ["Fossil fuels", "Burning coal, oil and gas releases carbon dioxide into the atmosphere"],
              ["Deforestation", "Cutting down forests removes the trees that take carbon dioxide out of the air"],
              ["Volcanic eruptions", "Ash and gases thrown into the atmosphere can block sunlight and change the climate"],
              ["Orbital changes", "Slow changes in the Earth's path around the sun alter how much sunlight reaches it"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Two of these are human and two are natural. Sort them first.",
                "Fossil fuels are burned, so look for the explanation about burning.",
                "Deforestation is about trees, so look for the one that mentions trees.",
                "Of the two natural causes, one is about a volcano and one is about the Earth moving around the sun."
              ],
              example: {
                q: "Match: agriculture, solar output. Choices: the sun giving out slightly more or less energy; cattle and rice fields giving off methane.",
                steps: ["Agriculture is farming, so cattle and rice fields.", "Solar means the sun."],
                answer: "Agriculture: cattle and rice fields giving off methane. Solar output: the sun giving out slightly more or less energy."
              }
            },
            core: { hint: "Burning, trees, ash, and the Earth's path round the sun. Each explanation has one giveaway word." },
            stretch: { extend: "Explain why deforestation counts twice: what is lost when the trees go, and what is released if they are burned." }
          },
          explain: "Say, in one sentence, how you can tell a human cause from a natural one.",
          why: "Fossil fuels release carbon dioxide when burned; deforestation removes the trees that absorb it; volcanic eruptions throw ash and gas into the air; orbital changes alter how much sunlight the Earth receives."
        },
        {
          title: "Counting back to the ice",
          task: {
            kind: "numeric",
            q: "The last Ice Age was at its height about 20 000 years ago. A century is 100 years. About how many centuries ago was that?",
            answer: 200, tolerance: 0, units: "centuries", check: "ICE_AGE_YEARS_AGO/100",
            why: "A century is 100 years, so 20 000 ÷ 100 = 200 centuries. Check: 200 × 100 = 20 000.",
            misconceptions: [
              { answer: 2000, says: "You divided by 10, not 100. A century is 100 years, so 20 000 ÷ 100 = 200 centuries.", check: "ICE_AGE_YEARS_AGO/10" },
              { answer: 20, says: "That is the number of thousands of years, not centuries. A century is 100 years, so 20 000 ÷ 100 = 200.", check: "ICE_AGE_YEARS_AGO/1000" },
              { answer: 20000, says: "That is the number of years. The question asks for centuries, and each century is 100 years, so divide: 20 000 ÷ 100 = 200.", check: "ICE_AGE_YEARS_AGO" }
            ]
          },
          contexts: [
            { label: "Family tree", q: "Suppose each generation of a family is about 100 years apart on a very long family tree, and the Ice Age was about 20 000 years ago. About how many generations back would the Ice Age be?", check: "ICE_AGE_YEARS_AGO/100" },
            { label: "Timeline", q: "A classroom timeline uses one square for every 100 years. The last Ice Age was about 20 000 years ago. How many squares back from today is the Ice Age?", check: "ICE_AGE_YEARS_AGO/100" },
            { label: "Ice core", q: "Scientists read the climate from ice cores, and suppose each centimetre of one core holds 100 years of snowfall. How many centimetres down is the ice from 20 000 years ago?", check: "ICE_AGE_YEARS_AGO/100" }
          ],
          levels: {
            support: {
              steps: [
                "Write down the number of years: 20 000.",
                "Write down how many years are in a century: 100.",
                "Divide the years by 100. Dividing by 100 takes two zeros off the end.",
                "Check by multiplying your answer by 100; you should get 20 000 back."
              ],
              example: {
                q: "A castle is 600 years old. How many centuries is that?",
                steps: ["A century is 100 years.", "600 ÷ 100 = 6."],
                answer: "6 centuries",
                checks: [{ expr: "600/100", value: 6, tol: 0 }]
              }
            },
            core: { hint: "A century is 100 years. How many hundreds are there in 20 000?" },
            stretch: { extend: "Suppose written history goes back about 50 centuries. Explain how many times longer ago the Ice Age was than the start of written history." }
          },
          explain: "Say, in one sentence, why dividing by 100 turns years into centuries.",
          why: "There are 100 years in a century, so 20 000 years is 20 000 ÷ 100 = 200 centuries. Multiplying back, 200 × 100 = 20 000, confirms it."
        },
        {
          title: "Which effect matters most?",
          task: {
            kind: "written",
            q: "Choose one effect of climate change that you think is the most serious and one that you think is the least serious. Explain both choices. (6 marks)",
            marks: 6,
            criteria: [
              "Names a specific effect as the most serious and describes who or what it affects and how",
              "Justifies the choice with a reason, such as how many people are affected or how hard it is to reverse",
              "Names a different effect as the least serious and describes it",
              "Justifies that choice, for example because the effect can be reduced with technology or affects fewer people",
              "Uses accurate geographical language and clear, connected sentences"
            ],
            model: "I think the most serious effect of climate change is increased migration. As droughts, floods and failed harvests make some places harder to live in, people are forced to leave their homes, and large movements of people put pressure on the countries they move to and can raise tension between nations. It is the most serious because it affects millions of people at once and is very hard to reverse once people have lost their homes. I think changes to agricultural yields are less serious. Crops will grow better in some places and worse in others as the climate shifts, but farmers can respond by using technology and growing new types of crop, so the damage can be reduced. Both effects matter, but one can be managed and the other cannot easily be undone."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: name your most serious effect and say who or what it affects.",
                "Sentence 2: give the reason it is most serious. Think: how many people, how badly, can it be undone?",
                "Sentence 3: name your least serious effect and describe it.",
                "Sentence 4: give the reason it is least serious, for example because it can be reduced with technology.",
                "Last sentence: compare the two in one line."
              ],
              example: {
                q: "In two sentences, say which is more serious for a school, a broken window or a flooded ground floor, and why.",
                steps: ["Name the more serious one and say what it affects.", "Give a reason: how many people, how hard to fix."],
                answer: "A flooded ground floor is more serious because it affects every class on that floor and takes weeks to repair. A broken window affects one room and can be fixed in a day."
              }
            },
            core: { hint: "Most serious: lots of people, hard to undo. Least serious: fewer people, or a fix exists. Name, describe, justify, twice." },
            stretch: { extend: "Explain how the sea level change you studied in the Ice Age chapter could become one of the most serious effects, and for whom." }
          },
          explain: "Say, in one sentence, what makes one effect of climate change more serious than another.",
          why: "A strong answer names two different effects, describes each, and justifies the ranking with reasons about how many people are affected, how badly, and whether the effect can be reduced or reversed."
        }
      ]
    }
  ],

  sources: {
    deckDump: "gg_y07_unit_4_weather_and_climate.txt",
    decksUsed: ["Weather and climate_Year7.pptx"],
    notes: "Lesson titles, sequence, key words and every stated fact come from the department's single deck (Weather and climate_Year7.pptx, slides 1-122 as extracted; many slide numbers are absent from the extraction). House furniture (dated title slides, bell-work instructions, homework slides, the mid-topic test and DIT sessions, revision checklists) was used only to fix the lesson sequence. The deck teaches mostly by pointing to textbook pages; where a slide states content (pressure and air movement, the three cells, the UK weather roundabout, the three types of rainfall, two types of cloud, Hurricane Dorian 2019 as case study, the Ice Age figures, the seven causes of climate change, two of the ranked effects) the manifest teaches that; where it gives only a heading (how rain forms, the cyclone life cycle, the five climate factors, isobar, air mass, depression, Dorian's facts) the manifest teaches the standard KS3 explanation at Year 7 level and NOTES.md flags it. The deck's one model answer (slide 104, isostatic change) was read to see what is taught; it is not reproduced and verify.py bans its phrasing. The staff name and class code on the cover-lesson slides are not carried anywhere. Every number is held in the FACTS table in verify.py and recomputed. No pretext.l1 (translation is a separate pass) and no meta.constellation. No text is quoted from any source."
  }
};
