// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE Geography 8035 · 3.2.1 Urban issues and challenges · Year 9 · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression; the FACTS names held in verify.py are allowed) and are recomputed.
//   worked examples / support examples with a calculation carry `checks:[{expr, value, tol}]`.
//   every "order" task is compared with the canonical sequences held in verify.py (the department deck's own sequences).
//   every mcq / gap / match answer is compared with the independent answer key held in verify.py.
//   every case-study number (world urban percentages by year, megacity counts, Shenzhen's growth, urban growth per hour,
//   the UK's 41 to 64 million, 82 per cent urban, 243 000 migrants a year, Bristol's £100 million grant, the 1996 Defence
//   Procurement Agency site, 25 per cent of Rio in favelas, the 2015 recession) is checked against the independent FACTS
//   table in verify.py, with the slide each comes from.
//   passage sentences are counted (≤ 20 words) and all text is linted for known misconceptions, deck misspellings, deck
//   exam-question wording, personal data from the deck's seating plan, and facts that are NOT in the deck.
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions`; every module carries
//   `explain`; ≥ 1 module per chapter carries `contexts` that never redefine the answer; `connections` ⊂ glossary;
//   meta.constellation is omitted (the engine lays the stars out); no pretext.l1 (translation is a separate pass).
// Maps, graphs and photographs (the UK city map, the population density map, the Shenzhen bar graph, the Rio location
// map, the Harry Stoke OS extract) are described in words; no widget exists for them.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["geog-urban"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "geog-urban",
    subjectKey: "geography",
    subject: "Geography",
    board: "AQA",
    spec: "8035",
    specRef: "3.2.1 Urban issues and challenges: the global pattern of urban change, a case study of a major city in an LIC or NEE (Rio de Janeiro), a case study of a major city in the UK (Bristol), urban sustainability (Paper 2, Section A)",
    year: 9,
    tier: "GCSE (AQA Geography is a single-tier qualification); taught in Year 9 as the first GCSE unit",
    title: "Urban Issues and Challenges: Rio de Janeiro and Bristol",
    sub: "Why more and more of the world lives in cities, what that means for a fast-growing city like Rio de Janeiro and a changing UK city like Bristol, and how the challenges can be managed.",
    bigQuestion: "As the world's cities grow, who gains, who loses, and how can a city be made a better place for everyone who lives in it?",
    lessonCount: 19,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  // The department's lesson sequence across its five decks (the two Year 9 Rio-and-Bristol decks, the Urban issues and
  // challenges deck, the Urban Change in the UK deck and the Bristol revision deck), in teaching order. Titles are the
  // decks' own slide titles or learning objectives; questions are those objectives rephrased. See NOTES.md section 2.
  lessons: [
    { n: 1, title: "The urban world: the global pattern of urban change", question: "Why is a growing share of the world's population living in towns and cities, and where is urban growth fastest?", keywords: ["urban", "urbanisation", "urban growth", "push factor", "pull factor", "natural increase", "rural to urban migration"] },
    { n: 2, title: "The emergence of megacities", question: "What are millionaire cities and megacities, and how has their number and location changed since 1950?", keywords: ["millionaire city", "megacity", "HIC", "LIC", "NEE", "distribution"] },
    { n: 3, title: "Introducing Rio de Janeiro", question: "Where is Rio de Janeiro, and how and why has the city grown?", keywords: ["Rio de Janeiro", "Brazil", "NEE", "location", "rural to urban migration", "Atlantic Ocean"] },
    { n: 4, title: "Rio's social and economic opportunities", question: "How does a growing city like Rio offer social and economic opportunities to its people?", keywords: ["social opportunity", "economic opportunity", "health care", "education", "Sepetiba", "PEEL"] },
    { n: 5, title: "Social challenges and solutions in Rio de Janeiro", question: "What problems does Rio face in health care, education, water supply and energy supply, and what has been done about them?", keywords: ["health care", "education", "water supply", "energy supply", "hydropower", "drought"] },
    { n: 6, title: "Economic challenges faced in Rio de Janeiro", question: "Why are unemployment, the informal sector and crime such big challenges in Rio, and how is the city responding?", keywords: ["informal sector", "formal sector", "unemployment", "recession", "crime", "pacifying police unit"] },
    { n: 7, title: "Environmental challenges in Rio de Janeiro", question: "How do rapid urbanisation and industrialisation lead to air, water and waste pollution in Rio?", keywords: ["air pollution", "water pollution", "waste pollution", "anoxic water", "industrialisation"] },
    { n: 8, title: "Rio's favelas: the challenges of squatter settlements", question: "What is a favela, why do favelas grow, and what challenges do the people who live in them face?", keywords: ["favela", "squatter settlement", "Rocinha", "construction", "services", "crime", "health"] },
    { n: 9, title: "Improving squatter settlements: the Favela Bairro project", question: "How has the Favela Bairro project tried to improve Rio's favelas, and is demolishing favelas ever the answer?", keywords: ["Favela Bairro project", "successes", "problems", "evaluate", "demolish", "community"] },
    { n: 10, title: "Urban change in the UK: where do people live in the UK?", question: "How has the UK's population changed, where do people live, and why did the major cities grow where they did?", keywords: ["population distribution", "population density", "industrial revolution", "capital city", "port", "counter-urbanisation"] },
    { n: 11, title: "Bristol: how can urban change create social opportunities?", question: "How has urban change in Bristol created social opportunities in culture, sport and shopping?", keywords: ["Bristol", "culture", "leisure and recreation", "sport", "shopping", "cultural mix"] },
    { n: 12, title: "Bristol: how can urban change create economic opportunities?", question: "Why did Bristol's port decline, and what attracted high-tech industries to the city?", keywords: ["port", "high-tech industry", "silicon design", "Aardman Animations", "aerospace", "university"] },
    { n: 13, title: "Environmental opportunities in Bristol", question: "How is Bristol improving its environment through energy, an integrated transport system and urban greening?", keywords: ["energy efficiency", "renewable energy", "integrated transport system", "urban greening", "green space"] },
    { n: 14, title: "Environmental challenges in Bristol", question: "Why does Bristol have derelict inner-city areas and urban sprawl, and what is being done about them?", keywords: ["dereliction", "urban sprawl", "inner city", "brownfield site", "housing demand"] },
    { n: 15, title: "Creating a clean environment in Bristol", question: "How is Bristol reducing its waste and cleaning its air?", keywords: ["waste", "landfill", "recycling", "resource recovery", "emissions", "atmospheric pollution"] },
    { n: 16, title: "Social inequality in Bristol", question: "How are social variations measured, and how do Filwood and Stoke Bishop compare?", keywords: ["social inequality", "social deprivation", "affluent", "Filwood", "Stoke Bishop", "life expectancy"] },
    { n: 17, title: "New housing in Bristol", question: "What is the green belt for, and should Bristol's new homes go on greenfield or brownfield sites?", keywords: ["green belt", "rural-urban fringe", "commuter settlement", "greenfield site", "brownfield site", "Harry Stoke"] },
    { n: 18, title: "The Temple Quarter regeneration (1)", question: "What are the pros and cons of regenerating run-down areas, and why did the Temple Quarter need it?", keywords: ["regeneration", "dereliction", "Temple Quarter", "Temple Meads", "brownfield site", "first impression"] },
    { n: 19, title: "The Temple Quarter regeneration (2)", question: "What has the Temple Quarter regeneration built, and how can its success be measured?", keywords: ["new building", "re-use", "Bristol arena", "Temple Meads", "success", "historic buildings"] }
  ],

  // 16 terms; Connections uses all 16 (four groups, each one chapter's idea). Chapters 2, 4 and 6 also teach their key
  // words (favela, squatter settlement, regeneration, dereliction, social deprivation) through pretext.words and the text.
  glossary: [
    { term: "urbanisation", means: "The increase in the proportion (percentage) of a country's people who live in towns and cities rather than the countryside.", chapter: "urban-world" },
    { term: "urban growth", means: "The expansion of a city: more people and more buildings, so the city gets bigger in size.", chapter: "urban-world" },
    { term: "natural increase", means: "The birth rate minus the death rate; when more babies are born than people die, the population grows.", chapter: "urban-world" },
    { term: "megacity", means: "A city with a population of more than 10 million people, such as Shanghai, Lagos or Mumbai.", chapter: "urban-world" },
    { term: "informal sector", means: "The part of an economy that is not taxed or monitored by the government: street vendors, cleaners, labourers and others paid cash in hand.", chapter: "rio-challenges" },
    { term: "formal sector", means: "Jobs with a contract and regular pay, where the worker and the employer pay tax to the government.", chapter: "rio-challenges" },
    { term: "recession", means: "A period when a country's economy shrinks, businesses close and unemployment rises; Brazil had a deep one in 2015.", chapter: "rio-challenges" },
    { term: "anoxic water", means: "Sea, river or groundwater that has lost its dissolved oxygen, so fish and other water life die.", chapter: "rio-challenges" },
    { term: "population density", means: "The number of people living in an area, found by dividing the population by the area, usually in people per square kilometre.", chapter: "uk-bristol" },
    { term: "counter-urbanisation", means: "People moving out of cities to live in rural areas, for example when they retire.", chapter: "uk-bristol" },
    { term: "integrated transport system", means: "A plan that links different forms of transport, such as buses, trains and cycle routes, so that one journey can use several of them easily.", chapter: "uk-bristol" },
    { term: "urban greening", means: "A policy of improving and increasing a city's green spaces, such as parks, trees and gardens.", chapter: "uk-bristol" },
    { term: "green belt", means: "The area of countryside around the edge of a city with strict planning controls to stop houses being built on it.", chapter: "bristol-challenges" },
    { term: "greenfield site", means: "A plot of land, often in the countryside or on the edge of a city, that has never been built on before.", chapter: "bristol-challenges" },
    { term: "brownfield site", means: "Land that has been used and abandoned and now waits to be used again; usually found inside a city.", chapter: "bristol-challenges" },
    { term: "urban sprawl", means: "The unplanned growth of a city outwards into the surrounding countryside.", chapter: "bristol-challenges" }
  ],

  connections: [
    { group: "A growing urban world", terms: ["urbanisation", "urban growth", "natural increase", "megacity"] },
    { group: "Rio's economic and environmental challenges", terms: ["informal sector", "formal sector", "recession", "anoxic water"] },
    { group: "Changing UK cities", terms: ["population density", "counter-urbanisation", "integrated transport system", "urban greening"] },
    { group: "Where to build Bristol's new homes", terms: ["green belt", "greenfield site", "brownfield site", "urban sprawl"] }
  ],

  chapters: [
    /* ───────────── 1 · an increasingly urban world ───────────── */
    {
      key: "urban-world", n: 1, title: "An increasingly urban world",
      lead: "How the share of people living in cities has grown since 1800, why cities in Asia and Africa are growing fastest, and what makes a city a millionaire city or a megacity.",
      covers: [1, 2],
      pretext: {
        words: [
          { word: "urban", means: "to do with towns and cities", sentence: "London, Lagos and Shanghai are all urban areas." },
          { word: "rural", means: "to do with the countryside", sentence: "Farms and small villages are rural areas." },
          { word: "urbanisation", means: "a growing share of people living in towns and cities", sentence: "Urbanisation means a bigger percentage of people live in cities than before." },
          { word: "push factor", means: "something that makes people want to leave a place", sentence: "Drought and a lack of jobs are push factors in the countryside." },
          { word: "pull factor", means: "something that attracts people to a place", sentence: "Jobs, schools and hospitals are pull factors in a city." },
          { word: "megacity", means: "a city with more than 10 million people", sentence: "Shanghai is a megacity with over 24 million people." }
        ],
        passage: [
          "More and more of the world's people live in towns and cities.",
          "In 1800, only about 3% of people lived in urban areas.",
          "By 2014 it was 54%, more than half.",
          "By 2050 it is expected to reach 66%.",
          "This change is called urbanisation.",
          "Cities grow for two reasons.",
          "People move in from the countryside, pushed by hardship and pulled by jobs.",
          "And cities have more births than deaths, which is called natural increase.",
          "The fastest growth today is in Asia and Africa.",
          "Lagos in Nigeria gains about 85 people every hour.",
          "A city with more than 1 million people is a millionaire city.",
          "A city with more than 10 million people is a megacity.",
          "In 1950 there were only three megacities.",
          "By 2014 there were 28."
        ]
      },
      sections: [
        {
          heading: "A world that is moving to the city",
          paragraphs: [
            "An urban area is a town or a city; a rural area is the countryside. For most of history almost everyone lived in rural areas. In 1800, only about 3% of the world's population lived in towns and cities. By 1950 it was about 30%. In 2008 the United Nations estimated that, for the first time, half of the world's people were urban. In 2014 it was 54%, and by 2050 it is expected to reach 66%, two-thirds of everyone on Earth.",
            "Two words sound alike here and you must keep them apart. Urbanisation is the increase in the proportion, the percentage, of people living in towns and cities. Urban growth is the expansion of a city: more people and more buildings. A country can have a high level of urbanisation but slow urban growth, which is what we see in HICs (higher income countries) such as the UK, where over 80% of people already live in urban areas and the cities are not growing fast. In LICs (lower income countries) and NEEs (newly emerging economies) the percentage is lower but the cities are growing very quickly in absolute numbers.",
            "The pattern across the world is uneven. HICs have a higher percentage of their population in towns and cities than LICs. But almost all of today's rapid urban growth, counted in actual people, is in the poorer regions of the world, above all in Asia and Africa."
          ],
          tip: "Urbanisation is a percentage going up; urban growth is a city getting bigger. If a question gives you a percentage, it is about urbanisation."
        },
        {
          heading: "Why cities grow: migration and natural increase",
          paragraphs: [
            "Cities grow in two ways. The first is rural to urban migration: people leaving the countryside to live in the city. Geographers explain this with push and pull factors. Push factors are the things that make life in a rural area hard enough to leave: drought, poor harvests, few jobs, no secondary school, no doctor. Pull factors are the things that attract people to the city: paid work, schools and hospitals, electricity, entertainment and the hope of a better life. The people most likely to move are the young, especially young men, and their families often follow later.",
            "The second way is natural increase. The birth rate is the number of babies born per thousand people per year; the death rate is the number of deaths per thousand people per year. Natural increase is the birth rate minus the death rate. Cities full of young migrants have many births and relatively few deaths, so the population grows even with no new arrivals. Life expectancy, the average number of years a person can expect to live, is often higher in cities too, because health care is closer.",
            "Put the two together and a city can grow at astonishing speed. A striking example is Shenzhen, in the Pearl River Delta of south-east China, next to Hong Kong. In 1950 Shenzhen was a fishing village of 3,148 people. By 1995 it had 2.39 million; by 2000, 6.55 million; and the United Nations predicted it would pass 12 million by 2025. That growth is unusual, but it is not unique."
          ],
          worked: {
            q: "Shenzhen grew from 2.39 million people in 1995 to 6.55 million in 2000. By how many million did it grow in those five years?",
            steps: [
              "Write down the later figure and the earlier figure: 6.55 million and 2.39 million.",
              "Subtract the earlier from the later: 6.55 − 2.39.",
              "6.55 − 2.39 = 4.16.",
              "Give the unit the question used: 4.16 million people."
            ],
            answer: "4.16 million",
            checks: [{ expr: "SHENZHEN_2000_M - SHENZHEN_1995_M", value: 4.16, tol: 0.001 }]
          },
          tip: "Natural increase is birth rate MINUS death rate. If deaths were higher than births it would be a natural decrease."
        },
        {
          heading: "Where growth is fastest: people per hour",
          paragraphs: [
            "A vivid way to compare cities is to ask how many people each one gains every hour. One table of twenty cities puts Lagos in Nigeria at the top with 85 extra people every hour, then Delhi (79), Dhaka (74), Kinshasa (63), Shanghai (53) and Mumbai (51). London gains about 9 people an hour, New York and Rio de Janeiro about 10, and Berlin just 1. Tokyo is the odd one out at −1: it is losing a person an hour, so its population is slowly falling.",
            "Sort the twenty cities by continent and the pattern jumps out: ten are in Asia, three each in Africa, Europe and South America, one in North America and none in Oceania. Istanbul sits in both Europe and Asia, so it can be counted either way. The fastest-growing cities in the world today are in Asia and Africa: places like Suzhou and Guangzhou in China, Surat and Bangalore in India, Luanda in Angola, Kinshasa and Lagos."
          ],
          tip: "When you describe a pattern from a table, name the top and bottom, give a figure for each, and then say which part of the world dominates."
        },
        {
          heading: "Millionaire cities and megacities",
          paragraphs: [
            "Urbanisation has produced more and bigger cities. A millionaire city has a population of more than 1 million. In 1850 there were only two in the world, London and Paris. By 1950 there were 83, and by 2015 there were about 500. Before 1950 most millionaire cities were in HICs, in the temperate latitudes north of the Equator; now they are found across the world.",
            "A megacity is a city with more than 10 million people. In 1950 there were only three: London, New York and Tokyo. In 2014 there were 28: 16 in Asia, 4 in South America, 3 in Africa, 3 in Europe and 2 in North America. By 2030 the world is projected to have 41. In a 2014 list of the world's largest cities, Shanghai leads with 24.1 million, then Beijing and Karachi with 21.1 million each, Lagos with 16.1 million and Istanbul with 14.2 million; Shenzhen, the former fishing village, is there at 10.5 million. Notice that the pattern has shifted: most megacities are now in LICs and NEEs, not HICs.",
            "Population figures like these are never exact. There are two good reasons: it is impossible to count a city's people one by one in real time, and the data may be out of date or copied wrongly. When you quote a city's population, give the year as well as the number."
          ],
          tip: "Millionaire city: more than 1 million. Megacity: more than 10 million. A megacity is always a millionaire city, but not the other way round."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which statement defines urbanisation?", options: ["The increase in the proportion of people living in towns and cities", "The expansion of a city as more buildings are put up", "The movement of people out of cities to the countryside", "The number of babies born per thousand people per year"], answer: 0, why: "Urbanisation is about the share, the percentage, of a country's people who are urban. The physical expansion of a city is urban growth.",
          feedback: [
            "",
            "A city getting bigger is urban growth, the second key word of the lesson. Urbanisation is the percentage of people who live in towns and cities going up.",
            "People leaving cities for the countryside is counter-urbanisation, the opposite movement. Urbanisation is a growing share of people living in towns and cities.",
            "Babies born per thousand per year is the birth rate, one of the population key words. Urbanisation is about where people live, not how many are born."
          ] },
        { kind: "numeric", q: "About 30% of the world's population lived in urban areas in 1950, and 54% in 2014. By how many percentage points did the urban share rise between those two years?", answer: 24, tolerance: 0, units: "percentage points", check: "URBAN_PCT_2014 - URBAN_PCT_1950", why: "54 − 30 = 24 percentage points. The share almost doubled in 64 years.",
          misconceptions: [
            { answer: 84, says: "You added the two percentages. The question asks for the rise, so subtract the earlier from the later: 54 − 30 = 24.", check: "URBAN_PCT_2014 + URBAN_PCT_1950" },
            { answer: 64, says: "64 is the number of years between 1950 and 2014, not the change in the percentage. The urban share rose from 30% to 54%, a rise of 24 percentage points.", check: "2014 - 1950" },
            { answer: 36, says: "That is 66 − 30, using the 2050 prediction instead of the 2014 figure. The question compares 1950 with 2014: 54 − 30 = 24.", check: "URBAN_PCT_2050 - URBAN_PCT_1950" }
          ] },
        { kind: "gap", q: "A megacity is a city with a population of more than ___ people.", answer: "10 million", options: ["10 million", "1 million", "100 000"], why: "Megacities have over 10 million people; the smaller threshold of 1 million makes a millionaire city.",
          feedback: {
            "1 million": "More than 1 million people makes a millionaire city, of which there are about 500. A megacity is ten times bigger: more than 10 million people.",
            "100 000": "A city of 100 000 is a modest town by world standards; there are thousands of them. A megacity has more than 10 million people, like Shanghai or Lagos."
          } }
      ],
      modules: [
        {
          title: "Population key words",
          task: {
            kind: "match",
            q: "Match each population key word to its meaning.",
            pairs: [
              ["Birth rate", "The number of babies born per thousand people per year"],
              ["Death rate", "The number of deaths per thousand people per year"],
              ["Natural increase", "The birth rate minus the death rate"],
              ["Life expectancy", "The average number of years a person can expect to live in a given country"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Two of the meanings are rates: they say per thousand per year. Match births to birth rate and deaths to death rate.",
                "Natural increase is worked out FROM the two rates: one minus the other.",
                "The one left over is about how long a life lasts: that is life expectancy."
              ],
              example: {
                q: "Match: infant mortality rate, migration. Choices: people moving from one place to live in another; the number of babies who die before their first birthday, per thousand born.",
                steps: ["Infant means baby, and mortality means death.", "Migration is movement from one place to another."],
                answer: "Infant mortality rate: babies who die before their first birthday per thousand born. Migration: people moving from one place to live in another."
              }
            },
            core: { hint: "Two are measured per thousand per year; one is a subtraction of those two; one is measured in years of life." },
            stretch: { extend: "A city has a birth rate of 24 per thousand and a death rate of 7 per thousand. Work out its natural increase and explain why a city full of young migrants tends to have a high one." }
          },
          explain: "Say, in one sentence, why a city can keep growing even if nobody new moves in.",
          why: "Birth rate and death rate are both per thousand people per year. Natural increase is the gap between them, and it is one of the two reasons cities grow. Life expectancy is the average length of a life in a country."
        },
        {
          title: "People per hour",
          task: {
            kind: "numeric",
            q: "Lagos gains about 85 people every hour. At that rate, how many extra people does Lagos gain in one full day of 24 hours?",
            answer: 2040, tolerance: 0, units: "people", check: "LAGOS_PER_HOUR * 24",
            why: "85 people an hour × 24 hours = 2040 people a day. That is a small town's worth of people arriving or being born every week.",
            misconceptions: [
              { answer: 1020, says: "That is 85 × 12. A full day has 24 hours, not 12, so double it: 85 × 24 = 2040.", check: "LAGOS_PER_HOUR * 12" },
              { answer: 109, says: "You added 85 and 24. The city gains 85 people in EVERY hour, so multiply by the number of hours: 85 × 24 = 2040.", check: "LAGOS_PER_HOUR + 24" },
              { answer: 5100, says: "That is 85 × 60, as if the figure were per minute. The table gives people per HOUR, and a day has 24 hours: 85 × 24 = 2040.", check: "LAGOS_PER_HOUR * 60" }
            ]
          },
          contexts: [
            { label: "A week of growth", q: "A geographer notes that Lagos gains about 85 people every hour. Before working out a week, she first finds the daily figure. How many extra people does Lagos gain in one day of 24 hours?", check: "LAGOS_PER_HOUR * 24" },
            { label: "A new arrival", q: "A family arriving in Lagos reads that the city gains about 85 people every hour. How many people, at that rate, will have joined the city in the 24 hours after they arrive?", check: "LAGOS_PER_HOUR * 24" },
            { label: "Planning a school", q: "A planner in Lagos uses the figure of 85 extra people every hour to estimate how many more people the city must provide for in one day of 24 hours. What is the answer?", check: "LAGOS_PER_HOUR * 24" }
          ],
          levels: {
            support: {
              steps: [
                "Find the rate: 85 people for every one hour.",
                "Find how many hours: one day is 24 hours.",
                "Multiply the rate by the number of hours: 85 × 24.",
                "Check it is sensible: a bit more than 80 × 25 = 2000."
              ],
              example: {
                q: "Delhi gains about 79 people every hour. How many extra people does Delhi gain in 10 hours?",
                steps: ["The rate is 79 people per hour.", "There are 10 hours.", "79 × 10 = 790."],
                answer: "790 people",
                checks: [{ expr: "DELHI_PER_HOUR * 10", value: 790, tol: 0 }]
              }
            },
            core: { hint: "The figure is per hour and the question asks about a day. How many hours are in a day?" },
            stretch: { extend: "Tokyo's figure is −1 person per hour. Work out its change over a day and explain what a negative figure tells you about the city. Then suggest why a rich city in an HIC might be losing people while Lagos gains them." }
          },
          explain: "Say, in one sentence, why multiplying by 24 is the right step here.",
          why: "The table gives a rate per hour. A day has 24 hours, so the daily gain is 85 × 24 = 2040 people. Rates per hour, per day and per year are all ways of describing the same growth; always check which one you are given."
        },
        {
          title: "The rise of the megacity",
          task: {
            kind: "order",
            q: "Put these facts about the world's biggest cities in date order, earliest first.",
            items: [
              "In 1850 there are only two millionaire cities in the world: London and Paris",
              "In 1950 there are 83 millionaire cities and just three megacities: London, New York and Tokyo",
              "In 2014 there are 28 megacities, 16 of them in Asia",
              "In 2015 there are about 500 millionaire cities",
              "By 2030 the world is projected to have 41 megacities"
            ]
          },
          contexts: [
            { label: "A timeline for the wall", q: "You are making a classroom timeline of how the world's biggest cities have multiplied. Put these facts in date order, earliest first." },
            { label: "Revision cards", q: "Your revision cards about millionaire cities and megacities have got shuffled. Put the facts back in date order, earliest first." }
          ],
          levels: {
            support: {
              steps: [
                "Find the year in each statement first and write them down.",
                "Order the years from smallest to largest: 1850, 1950, 2014, 2015, 2030.",
                "Check the numbers make sense: the counts of cities should get bigger as the years go on.",
                "The one that says projected is a prediction, so it must be the latest."
              ],
              example: {
                q: "Put in date order: the world was 54% urban in 2014; about 3% urban in 1800; about 30% urban in 1950.",
                steps: ["Pick out the years: 2014, 1800, 1950.", "Smallest year first: 1800, 1950, 2014."],
                answer: "1800 (3%), 1950 (30%), 2014 (54%)."
              }
            },
            core: { hint: "Every statement has a year in it. The counts rise over time: 2, then 83 and 3, then 28, then 500, then 41 projected." },
            stretch: { extend: "Explain why most of the new megacities since 1950 have appeared in Asia, Africa and South America rather than in Europe and North America. Use the ideas of natural increase and rural to urban migration." }
          },
          explain: "Say, in one sentence, what the shift from three megacities to 28 tells you about where people live now.",
          why: "Millionaire cities went from 2 in 1850 to 83 in 1950 to about 500 in 2015. Megacities went from 3 in 1950 to 28 in 2014, with 41 projected for 2030. Most of the new ones are in LICs and NEEs, especially in Asia."
        }
      ]
    },

    /* ───────────── 2 · Rio de Janeiro: a growing city and its opportunities ───────────── */
    {
      key: "rio-opportunities", n: 2, title: "Rio de Janeiro: a growing city full of opportunities",
      lead: "Where Rio de Janeiro is and why it has grown, the social and economic opportunities the city offers, and how to build a six-mark answer with PEEL.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "NEE", means: "a newly emerging economy: a country getting richer fast, like Brazil", sentence: "Brazil is an NEE, so Rio is a case study of a city in an NEE." },
          { word: "social opportunity", means: "a chance to improve quality of life", sentence: "A new school or hospital is a social opportunity." },
          { word: "economic opportunity", means: "a chance to earn money through a job", sentence: "A new factory brings economic opportunities." },
          { word: "steelworks", means: "a factory where steel is made", sentence: "The steelworks at Sepetiba employs thousands of people." },
          { word: "PEEL", means: "Point, Evidence, Explanation, Link: a way to build a paragraph", sentence: "Use PEEL so that every paragraph makes a point and backs it up." }
        ],
        passage: [
          "Rio de Janeiro is a city in Brazil, in South America.",
          "It sits on the south-east coast of Brazil, next to the Atlantic Ocean.",
          "It lies just north of the Tropic of Capricorn.",
          "Brazil is a newly emerging economy, or NEE.",
          "Rio has grown because people moved there from the countryside.",
          "Many came from Amazonia and from the drought-hit north-east of Brazil.",
          "They hoped for a better life in the city.",
          "Rio offers social opportunities: health care, education, water and energy.",
          "Rio has six hospitals, so health care is easier to reach than in rural areas.",
          "Rio also offers economic opportunities: jobs.",
          "The largest steelworks in South America is at Sepetiba, in Rio.",
          "It gives work in manufacturing, construction, sales and cleaning."
        ]
      },
      sections: [
        {
          heading: "Where is Rio, and why has it grown?",
          paragraphs: [
            "When an exam asks you to describe the location of a city, work from large to small. Rio de Janeiro is in South America. It is on the south-eastern coast of Brazil, next to the Atlantic Ocean, and it lies just north of the Tropic of Capricorn. Use compass directions and the names of the ocean, the country and the continent, and you have a full-mark description.",
            "Brazil is an NEE, a newly emerging economy: a country that is industrialising quickly and getting richer, but where many people are still poor. Rio has grown for the two reasons you met in chapter 1. The first is rural to urban migration: people leave Amazonia and the drought-hit areas of north-east Brazil in the hope of finding a better life in Brazil's main cities. Drought and a lack of work are push factors; jobs and services in Rio are pull factors. The second is natural increase, because a city of young migrants has far more births than deaths."
          ],
          tip: "Describe the location in three steps: continent, country and coast, then a line of latitude or a nearby ocean."
        },
        {
          heading: "Social opportunities: a better quality of life",
          paragraphs: [
            "A social opportunity is a chance to improve your quality of life. Rio offers four big ones compared with the Brazilian countryside: health care, education, water supply and energy supply. Health care is the clearest example. Rio has six hospitals, and it is far easier to reach a doctor in the city than in a rural village many hours away. Schools and colleges are also closer and more plentiful, so children have the chance of an education that may not exist at home.",
            "Water and energy count as social opportunities too. In the city there is a piped water supply and an electricity network, even if they do not yet reach everyone. For a family arriving from a village with no electricity and a distant well, these are real improvements in daily life. Keep the four headings in your head: health care, education, water supply, energy supply. They come back as challenges in chapter 3."
          ],
          tip: "Social = quality of life. If you can picture it making someone healthier, better educated or more comfortable at home, it is social."
        },
        {
          heading: "Economic opportunities: the chance to earn",
          paragraphs: [
            "An economic opportunity is a chance to make money through a job. Rio's biggest single example is the steelworks at Sepetiba, the largest in South America. A plant like that does not only employ steelworkers: it creates jobs in manufacturing, construction, management, organising, sales and cleaning, and it keeps shops, transport and suppliers busy around it. The city also has formal jobs in offices, ports, tourism and services that simply do not exist in a rural area.",
            "This is why people move. A job in the formal sector, with regular pay, is the strongest pull factor a city has. You will see in chapter 3 that not everyone who arrives finds one, and that many end up in the informal sector instead. But the chance is there, and that is what an opportunity means."
          ],
          worked: {
            q: "Using Rio de Janeiro, explain one economic opportunity that a growing city offers. (2 marks)",
            steps: [
              "Point: name the opportunity. Rio's growth has brought large employers such as the Sepetiba steelworks, the largest in South America.",
              "Explain: say why that is an opportunity. It creates jobs in manufacturing, construction and sales, so migrants can earn a regular wage they could not earn in a rural area.",
              "Two linked sentences, one naming and one explaining, earn both marks."
            ],
            answer: "Rio offers jobs at large employers such as the Sepetiba steelworks, the largest in South America. This is an economic opportunity because it provides thousands of paid jobs, from manufacturing to sales and cleaning, so people can earn a regular income that was not available in the countryside."
          },
          tip: "Economic = money and jobs. Social = quality of life. Many things are both: a hospital gives patients care (social) and nurses a wage (economic)."
        },
        {
          heading: "Building a six-mark answer with PEEL",
          paragraphs: [
            "Six-mark questions in this unit ask you to explain, using a case study. The method taught in class is PEEL. Point: make a clear statement that answers the question. Evidence: give a specific fact from Rio, with a number or a name. Explanation: say why that evidence answers the question. Link: tie the paragraph back to the question, or on to the next point.",
            "A strong answer opens by naming the case study and the country, says it is an NEE, and then gives at least three social and three economic opportunities, each with evidence. Specific evidence is what lifts an answer: six hospitals is better than lots of hospitals; the Sepetiba steelworks is better than factories. A six-mark explain question does not need a conclusion; a nine-mark evaluate question does."
          ],
          tip: "Balance matters. If the question says social and economic, give both; an answer with only one side cannot reach the top marks."
        }
      ],
      gate: [
        { kind: "mcq", q: "Where is Rio de Janeiro?", options: ["On the south-east coast of Brazil, by the Atlantic Ocean", "On the north coast of Brazil, by the Amazon", "In the centre of Brazil, far from the sea", "On the west coast of South America, by the Pacific Ocean"], answer: 0, why: "Rio is on Brazil's south-eastern coast, next to the Atlantic Ocean and just north of the Tropic of Capricorn.",
          feedback: [
            "",
            "The Amazon reaches the sea on Brazil's north coast; Rio is far to the south-east, on the Atlantic coast near the Tropic of Capricorn.",
            "Rio is a coastal city, which is why it grew as a port and attracts tourists. It is on the south-east coast, not in the centre of the country.",
            "Brazil has no Pacific coast at all; its whole coastline is on the Atlantic. Rio is on the south-east coast of Brazil."
          ] },
        { kind: "gap", q: "The largest steelworks in South America is at ___, in Rio de Janeiro.", answer: "Sepetiba", options: ["Sepetiba", "Rocinha", "Amazonia"], why: "The Sepetiba steelworks is Rio's flagship economic opportunity, providing jobs from manufacturing to cleaning.",
          feedback: {
            "Rocinha": "Rocinha is the name of Rio's largest favela, which you meet in chapter 4. The steelworks is at Sepetiba.",
            "Amazonia": "Amazonia is the rainforest region that many migrants have left to come to Rio. The steelworks is at Sepetiba, in Rio itself."
          } },
        { kind: "mcq", q: "Which of these is a SOCIAL opportunity that Rio offers?", options: ["Easier access to health care, with six hospitals in the city", "Jobs at the Sepetiba steelworks", "Work in sales and cleaning for a large company", "Higher wages than in the countryside"], answer: 0, why: "A social opportunity improves quality of life: health care, education, water and energy. Jobs and wages are economic opportunities.",
          feedback: [
            "",
            "Jobs at the steelworks are a chance to earn money, so they are an economic opportunity. A social opportunity improves quality of life, such as access to a hospital.",
            "Work of any kind is about earning, so it is economic. The social opportunities in Rio are health care, education, water supply and energy supply.",
            "Wages are money, so this is economic. Social opportunities are about quality of life: the four taught are health care, education, water and energy."
          ] }
      ],
      modules: [
        {
          title: "Social or economic?",
          task: {
            kind: "mcq",
            q: "A family moves from a village in north-east Brazil to Rio. The father finds work in construction at Sepetiba, and the children start at a secondary school for the first time. Which statement is correct?",
            options: [
              "The job is an economic opportunity and the school is a social opportunity",
              "Both the job and the school are economic opportunities",
              "The job is a social opportunity and the school is an economic opportunity",
              "Both the job and the school are social opportunities"
            ],
            answer: 0,
            feedback: [
              "",
              "The school does not earn the family money; it improves the children's quality of life and their future. That makes it a social opportunity. Only the job is economic.",
              "You have the two the wrong way round. A job is about earning money, so it is economic; a school improves quality of life, so it is social.",
              "The job brings in a wage, which is money, so it is an economic opportunity, not a social one. The school is the social opportunity."
            ]
          },
          contexts: [
            { label: "Hospital nurse", q: "A woman moves to Rio and gets a paid job as a nurse in one of the city's six hospitals; her mother can now see a doctor nearby for the first time. Which is correct: the nurse's job is an economic opportunity and the mother's access to a doctor is a social one, both are economic, the job is social and the doctor is economic, or both are social?" },
            { label: "Market stall", q: "A man moves to Rio and earns money from a stall selling food, while his family's new home has electricity for the first time. Which is correct: the stall income is an economic opportunity and the electricity is a social one, both are economic, the stall is social and the electricity is economic, or both are social?" }
          ],
          levels: {
            support: {
              steps: [
                "Ask of each thing: does it earn money? If yes, it is economic.",
                "Ask: does it improve quality of life (health, education, water, energy)? If yes, it is social.",
                "A job earns money, so it is economic.",
                "A school improves quality of life, so it is social."
              ],
              example: {
                q: "A migrant to Rio gets piped water at home and finds work at the port. Which is social and which is economic?",
                steps: ["Piped water improves daily life: social.", "Work at the port earns money: economic."],
                answer: "Piped water is a social opportunity; work at the port is an economic opportunity."
              }
            },
            core: { hint: "Economic means money and jobs. Social means quality of life. Decide for the job first, then the school." },
            stretch: { extend: "Explain why the two kinds of opportunity are linked: how might the father's wage lead to more social opportunities for the family, and how might the children's education lead to economic opportunities later?" }
          },
          explain: "Say, in one sentence, the test you use to tell a social opportunity from an economic one.",
          why: "Economic opportunities are chances to earn money through a job: the construction work. Social opportunities are chances to improve quality of life: health care, education, water and energy, so the school. Keep the two apart in your answers."
        },
        {
          title: "Build a PEEL paragraph",
          task: {
            kind: "order",
            q: "Put the four parts of a PEEL paragraph in the order you should write them.",
            items: [
              "Point: Rio's growth has created economic opportunities for people",
              "Evidence: the Sepetiba steelworks, the largest in South America, employs thousands",
              "Explanation: these jobs give migrants a regular wage they could not earn in rural north-east Brazil",
              "Link: so the growth of the city has improved people's chances of making a living"
            ]
          },
          contexts: [
            { label: "Health care paragraph", q: "You are writing a PEEL paragraph about health care as a social opportunity in Rio. Put the four parts of a PEEL paragraph in the order you should write them." },
            { label: "Marking a friend's work", q: "A friend has written the four parts of a PEEL paragraph on separate lines in a muddle. Put the parts in the order a PEEL paragraph should go." }
          ],
          levels: {
            support: {
              steps: [
                "PEEL spells the order: P, E, E, L.",
                "P is Point: the sentence that answers the question in general terms.",
                "The first E is Evidence: a specific fact with a name or number. The second E is Explanation: why that fact answers the question.",
                "L is Link: the sentence that ties back to the question."
              ],
              example: {
                q: "Order these for a PEEL paragraph about Shenzhen: Explanation (jobs in new factories pulled in migrants); Link (so Shenzhen shows how urban growth happens); Point (Shenzhen grew incredibly fast); Evidence (3,148 people in 1950, 6.55 million in 2000).",
                steps: ["Point first: Shenzhen grew incredibly fast.", "Then Evidence, then Explanation, then Link."],
                answer: "Point, Evidence (3,148 to 6.55 million), Explanation (factory jobs pulled in migrants), Link."
              }
            },
            core: { hint: "The letters of PEEL give you the order. The general statement comes first; the specific fact comes second." },
            stretch: { extend: "Write a second PEEL paragraph of your own about a social opportunity in Rio, using the six hospitals as your evidence, and then write a one-sentence conclusion that answers the question how far Rio offers opportunities." }
          },
          explain: "Say, in one sentence, why the evidence should come straight after the point.",
          why: "Point, Evidence, Explanation, Link. The point answers the question; the evidence proves it with a specific fact; the explanation shows why the evidence matters; the link brings the paragraph back to the question."
        },
        {
          title: "The six-mark answer",
          task: {
            kind: "written",
            q: "Using Rio de Janeiro, explain how the growth of a city in an NEE has created social and economic opportunities for the people who live there. (6 marks)",
            marks: 6,
            criteria: [
              "Names Rio de Janeiro and Brazil and says that Brazil is an NEE",
              "Gives at least two social opportunities with specific evidence (for example the six hospitals; education; water and energy supply)",
              "Gives at least two economic opportunities with specific evidence (for example the Sepetiba steelworks and the range of jobs it creates)",
              "Explains WHY each piece of evidence is an opportunity, comparing the city with the rural areas migrants have left",
              "Uses PEEL paragraphs and keeps a balance between social and economic"
            ],
            model: "Rio de Janeiro is a city on the south-east coast of Brazil, an NEE, and its rapid growth has brought both social and economic opportunities. Socially, Rio has six hospitals, so a family arriving from a village in the drought-hit north-east can reach a doctor in minutes rather than hours, and there are far more schools, so children can gain an education that was not available at home. The city also has a piped water supply and an electricity network, which improve daily life compared with a rural well and no power. Economically, the city has created jobs: the steelworks at Sepetiba is the largest in South America and employs people in manufacturing, construction, management, sales and cleaning, giving migrants a regular wage they could not earn from farming. These opportunities are the pull factors that have made Rio grow, and they have improved life for many of the people who moved there."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: name the city, the country and NEE, and say the city offers both kinds of opportunity.",
                "Paragraph 2 (social): pick two of health care, education, water, energy. Give the evidence (six hospitals) and explain why it is better than the countryside.",
                "Paragraph 3 (economic): name the Sepetiba steelworks and list the kinds of job it creates. Explain why a regular wage matters to a migrant.",
                "Last sentence: link back to the question by saying these opportunities are why people have moved to Rio."
              ],
              example: {
                q: "In two sentences, explain one social opportunity that a growing city in an NEE offers, using the idea of education.",
                steps: ["Point and evidence: the city has many more schools than a rural village.", "Explanation: so children can get an education that leads to better jobs later."],
                answer: "A growing city has many more secondary schools than a rural village, so children who move there can carry on their education. This is a social opportunity because it improves their quality of life now and their chances of a good job later."
              }
            },
            core: { hint: "Three paragraphs: introduction, social with evidence, economic with evidence. Explain each piece of evidence against life in the countryside." },
            stretch: { extend: "Add a fourth paragraph that argues the opportunities are not open to everyone: who is likely to miss out, and why? Then say whether the question would need a conclusion if the command word were evaluate instead of explain." }
          },
          explain: "Say, in one sentence, what makes a piece of evidence specific rather than vague.",
          why: "A top answer names the case study, keeps social and economic in balance, uses specific evidence (six hospitals, Sepetiba) and explains each fact against life in a rural area. An explain question needs no conclusion, but it does need a link back to the question."
        }
      ]
    },

    /* ───────────── 3 · Rio's challenges ───────────── */
    {
      key: "rio-challenges", n: 3, title: "Rio's challenges: social, economic and environmental",
      lead: "Why Rio struggles to provide health care, schools, water and energy for everyone, why so many of its people work in the informal sector, and how rapid growth has polluted the city's air, water and land.",
      covers: [5, 6, 7],
      pretext: {
        words: [
          { word: "informal sector", means: "work that is not taxed or checked by the government", sentence: "A street vendor selling food works in the informal sector." },
          { word: "formal sector", means: "jobs with a contract, regular pay and tax", sentence: "A teacher or a bank worker has a job in the formal sector." },
          { word: "recession", means: "a time when a country's economy shrinks and jobs are lost", sentence: "Brazil was hit by a deep recession in 2015." },
          { word: "hydropower", means: "electricity made from the force of flowing river water", sentence: "A drought means less water in the rivers, so less hydropower." },
          { word: "anoxic", means: "without oxygen", sentence: "Anoxic water cannot support fish." },
          { word: "industrialisation", means: "the growth of factories and industry", sentence: "Industrialisation brings jobs but also pollution." }
        ],
        passage: [
          "A fast-growing city struggles to keep up with its people.",
          "Rio has four social challenges: health care, education, water supply and energy supply.",
          "Not everyone can reach a hospital or a school.",
          "Droughts and a fast-growing population mean there is not enough water.",
          "Much of Rio's electricity comes from hydropower, which needs river water.",
          "Less water in the rivers means less electricity.",
          "Rio also has economic challenges.",
          "Brazil's economy was hit by a deep recession in 2015.",
          "In the favelas, more than 20% of people are unemployed.",
          "Many people work in the informal sector, where pay is poor and irregular.",
          "Street crime and drug gangs are a serious problem.",
          "Rapid growth and industry have polluted Rio's air, water and land.",
          "Some of its water has become anoxic: it has lost its oxygen, so fish die."
        ]
      },
      sections: [
        {
          heading: "Social challenges: four services under strain",
          paragraphs: [
            "The same four headings that were opportunities in chapter 2 are also Rio's social challenges: health care, education, water supply and energy supply. The problem is scale. A city that gains people every hour cannot build hospitals, schools, pipes and power lines fast enough, and the newest, poorest neighbourhoods are the last to be served. Health care is hard to reach for people living far from the six hospitals; many children, especially in the poorest areas, do not finish school.",
            "Water and energy are linked, and the chain is worth learning. Rio's population is growing fast and dense, so it uses an unsustainable amount of water. Droughts, made worse by climate change, cut the supply further. Much of Rio's electricity comes from hydropower, which depends on river water. When droughts and heavy use by industry and homes leave less water in the rivers, less hydropower is generated, and there is less electricity for people. So a water shortage becomes an energy shortage as well.",
            "The city has worked on solutions for each of the four, such as new local health centres. In an answer, describe the challenge, name the solution and say how far it helped; that is the three-column structure the lesson used."
          ],
          tip: "When a question says social challenges, run through the four: health care, education, water supply, energy supply. Pick two and explain each."
        },
        {
          heading: "Economic challenges: the informal sector",
          paragraphs: [
            "Rio's economy was hit hard by Brazil's deep recession in 2015. People have protested about high taxes, poor education and inadequate health care. In the favelas, unemployment is over 20%. The lesson sorted the economic challenges under three headings: lack of economic growth, unemployment and crime.",
            "Many people who cannot find a formal job work in the informal sector. The informal sector is the part of the economy that is neither taxed nor monitored by any form of government: people simply trying to make money by any means they can. Typical informal jobs are street vendors selling food, drivers, labourers, handicraft workers, sewing and maids. The pay is poor and the work is irregular; workers are usually paid cash in hand and pay no tax, so the government gets no money from them to spend on services. Compare the formal sector: jobs with contracts, regular wages and tax, such as the jobs at the steelworks, in offices or at the port.",
            "Crime is a big issue in Rio. There are many gangs trafficking drugs in the favelas, and street crime affects everyone. One response has been pacifying police units, which aim to reduce crime in the favelas. Another is education: with a better education, young people have more career options and can adapt to change, which helps to reduce youth unemployment."
          ],
          worked: {
            q: "In 1975 about 25% of Africa's population and 66% of Europe's population lived in urban areas. What was the difference between the two percentages?",
            steps: [
              "Pick out the two figures: Africa 25%, Europe 66%.",
              "Difference means subtract the smaller from the larger: 66 − 25.",
              "66 − 25 = 41.",
              "Answer in percentage points: 41."
            ],
            answer: "41 percentage points",
            checks: [{ expr: "EUROPE_URBAN_1975 - AFRICA_URBAN_1975", value: 41, tol: 0 }]
          },
          tip: "Informal sector: no tax, no contract, irregular pay. Formal sector: contract, regular pay, tax paid. Say which you mean."
        },
        {
          heading: "Environmental challenges: air, water and waste",
          paragraphs: [
            "Rapid urbanisation and industrialisation in poorer parts of the world lead to pollution, and Rio shows all three kinds the lesson named: air pollution, water pollution and waste pollution. More people means more cars and buses, more factories, more sewage and more rubbish, and the services to deal with them have not grown as fast as the city.",
            "Water pollution is the most striking. Sewage from homes that are not connected to the drains, and waste from industry, flow into the rivers and the bay. The water can become anoxic: depleted of dissolved oxygen, so that fish and other water life die. Waste pollution comes from rubbish that is never collected, especially in the favelas, which the city does not serve. Air pollution comes from traffic and industry.",
            "When you explain pollution in Rio, build the chain: more people and more industry, more waste of a certain kind, not enough treatment or collection, then the effect on the environment and on people's health."
          ],
          tip: "Anoxic = no oxygen. It is the result of pollution, not a kind of pollution: sewage causes the water to lose its oxygen."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is one of the FOUR social challenges Rio faces?", options: ["Water supply", "Unemployment", "Air pollution", "Lack of economic growth"], answer: 0, why: "The four social challenges are health care, education, water supply and energy supply. Unemployment and lack of growth are economic; air pollution is environmental.",
          feedback: [
            "",
            "Unemployment is about jobs and money, so the lesson sorted it as an economic challenge. The social challenges are health care, education, water supply and energy supply.",
            "Air pollution is one of the three environmental challenges, with water and waste pollution. The social challenges are the four services: health care, education, water and energy.",
            "Lack of economic growth is, as its name says, economic. The social challenges are health care, education, water supply and energy supply."
          ] },
        { kind: "numeric", q: "Brazil's economy was hit by a deep recession. In which year?", answer: 2015, tolerance: 0, units: "", check: "RECESSION_YEAR", why: "The recession hit Brazil in 2015. The lesson's quiz used 2005 as the false alternative.",
          misconceptions: [
            { answer: 2005, says: "2005 was the false statement in the true-or-false quiz. Brazil's deep recession was ten years later, in 2015.", check: "RECESSION_YEAR - 10" },
            { answer: 2014, says: "2014 is the year of the megacity count in chapter 1, not the recession. Brazil's recession hit in 2015.", check: "RECESSION_YEAR - 1" },
            { answer: 2008, says: "2008 is when the world passed half urban. Brazil's deep recession came in 2015.", check: "RECESSION_YEAR - 7" }
          ] },
        { kind: "gap", q: "Work that is neither taxed nor monitored by the government, such as selling food on the street, is part of the ___ sector.", answer: "informal", options: ["informal", "formal", "primary"], why: "The informal sector is untaxed and unmonitored, with poor and irregular cash-in-hand pay.",
          feedback: {
            "formal": "Formal jobs have contracts, regular pay and tax, like a job at the steelworks. Street selling with no tax and no contract is the informal sector.",
            "primary": "Primary means getting raw materials from the land or sea, such as farming or mining. The word you need describes whether the work is taxed and regulated: informal."
          } }
      ],
      modules: [
        {
          title: "Sort the challenges",
          task: {
            kind: "match",
            q: "Match each challenge in Rio to the category the lesson put it in.",
            pairs: [
              ["Not enough hospitals for the people who need them", "Social"],
              ["Unemployment of over 20% in the favelas", "Economic"],
              ["Anoxic water in the rivers and bay", "Environmental"]
            ]
          },
          contexts: [
            { label: "Three newspaper headlines", q: "Three headlines from Rio: Patients wait days for a hospital bed; One in five out of work in the favelas; Fish die as river loses its oxygen. Match each challenge to the lesson's category." },
            { label: "Revision sort", q: "Your revision cards for Rio need sorting into the lesson's three categories. Match each challenge to its category." }
          ],
          levels: {
            support: {
              steps: [
                "Social challenges are about the four services: health care, education, water, energy.",
                "Economic challenges are about money and jobs: lack of growth, unemployment, crime.",
                "Environmental challenges are about the air, water and land: the three kinds of pollution.",
                "A hospital is a service; unemployment is jobs; oxygen-free water is the environment."
              ],
              example: {
                q: "Sort: rubbish left uncollected in the streets; children with no secondary school nearby. Social or environmental?",
                steps: ["Uncollected rubbish is waste pollution: environmental.", "No school is an education challenge: social."],
                answer: "Rubbish: environmental. No school nearby: social."
              }
            },
            core: { hint: "Services, money or the natural environment? Each challenge belongs to exactly one of the three." },
            stretch: { extend: "Explain why a favela is described as a social challenge that creates environmental challenges, and give one example of how an economic challenge in Rio can lead to a social one." }
          },
          explain: "Say, in one sentence, how you decide whether a challenge is social, economic or environmental.",
          why: "Social challenges are the four services: health care, education, water and energy. Economic challenges are lack of growth, unemployment and crime. Environmental challenges are air, water and waste pollution. Many real problems cross the lines, but the exam expects you to sort them."
        },
        {
          title: "From drought to blackout",
          task: {
            kind: "order",
            q: "Put the stages of Rio's energy problem in the correct order.",
            items: [
              "Droughts linked to climate change, and heavy water use by a fast-growing population and industry, reduce the amount of water in the rivers",
              "Less water flows through the hydropower stations that make much of Rio's electricity",
              "Less electricity is generated by hydropower",
              "There is less electricity for Rio's people, and the fast-growing, dense population needs more than ever"
            ]
          },
          contexts: [
            { label: "A dry year", q: "In a year of drought, Rio's lights go out more often. Put the stages that connect the dry weather to the power cuts in the correct order." },
            { label: "Explaining to a friend", q: "A friend asks why a shortage of water in Rio can mean a shortage of electricity. Put the stages of the explanation in the correct order." }
          ],
          levels: {
            support: {
              steps: [
                "Start with the cause in the natural world: drought and heavy use mean less water.",
                "Ask what Rio makes its electricity from: hydropower, which needs flowing river water.",
                "Less water in, less electricity out.",
                "End with the effect on people: less electricity for a population that is growing."
              ],
              example: {
                q: "Order the chain for water shortage: fast-growing population uses an unsustainable amount of water; there is not enough water for everyone; droughts cut the supply further.",
                steps: ["Begin with the demand: a growing population using too much water.", "Add the supply problem: drought.", "End with the result: not enough for everyone."],
                answer: "Growing population uses too much water; droughts cut the supply; not enough water for everyone."
              }
            },
            core: { hint: "Water, then the machines that turn water into power, then the power, then the people." },
            stretch: { extend: "Suggest two ways Rio could break this chain, one on the water side and one on the energy side, and explain which would be more sustainable." }
          },
          explain: "Say, in one sentence, why a drought in Rio is an energy problem as well as a water problem.",
          why: "Much of Rio's electricity is hydropower, so it depends on river water. Drought and heavy use leave less water in the rivers, so less hydropower is made and there is less electricity for a growing population. That is why the lesson treated water supply and energy supply together."
        },
        {
          title: "Reading the urbanisation graph",
          task: {
            kind: "numeric",
            q: "In 1950 about 16% of Asia's population lived in urban areas. By 2000 it was 36%. By how many percentage points did Asia's urban population share rise between 1950 and 2000?",
            answer: 20, tolerance: 0, units: "percentage points", check: "ASIA_URBAN_2000 - ASIA_URBAN_1950",
            why: "36 − 16 = 20 percentage points. Asia is also the continent expected to have the greatest urban growth from 2000 to 2030.",
            misconceptions: [
              { answer: 52, says: "You added the two percentages. The rise is the later figure minus the earlier one: 36 − 16 = 20.", check: "ASIA_URBAN_2000 + ASIA_URBAN_1950" },
              { answer: 50, says: "50 is the number of years between 1950 and 2000, not the change in the percentage. The share rose from 16% to 36%: a rise of 20 percentage points.", check: "2000 - 1950" },
              { answer: 2.25, says: "You divided 36 by 16, which tells you the share grew to 2.25 times its size. The question asks by how many percentage points it rose: 36 − 16 = 20.", check: "ASIA_URBAN_2000 / ASIA_URBAN_1950" }
            ]
          },
          contexts: [
            { label: "Exam maths skills", q: "A graph in the exam shows Asia at 16% urban in 1950 and 36% urban in 2000. By how many percentage points did the urban share rise between 1950 and 2000?", check: "ASIA_URBAN_2000 - ASIA_URBAN_1950" },
            { label: "Homework check", q: "Your homework says Asia was 16% urban in 1950 and 36% urban in 2000. Your friend says the rise is 52 percentage points. Work out the correct rise between 1950 and 2000.", check: "ASIA_URBAN_2000 - ASIA_URBAN_1950" }
          ],
          levels: {
            support: {
              steps: [
                "Write the later figure first: 36%.",
                "Write the earlier figure: 16%.",
                "Subtract: 36 − 16.",
                "The answer is in percentage points, because you are comparing two percentages."
              ],
              example: {
                q: "The UK was 82% urban in a recent year. If a graph showed it at 70% a century earlier, by how many percentage points had the share risen?",
                steps: ["Later figure 82, earlier figure 70.", "82 − 70 = 12."],
                answer: "12 percentage points",
                checks: [{ expr: "UK_URBAN_PCT - 70", value: 12, tol: 0 }]
              }
            },
            core: { hint: "Later minus earlier. Do not add, and do not use the years." },
            stretch: { extend: "Asia is the continent expected to have the greatest urban growth from 2000 to 2030. Explain why that is, using natural increase, rural to urban migration and the megacity list from chapter 1." }
          },
          explain: "Say, in one sentence, why the answer is in percentage points rather than per cent.",
          why: "Reading two values from a graph and finding the difference is a standard maths skill in this paper. 36 − 16 = 20 percentage points. Always subtract the earlier value from the later one and say percentage points when you compare two percentages."
        }
      ]
    },

    /* ───────────── 4 · favelas and the Favela Bairro project ───────────── */
    {
      key: "favelas", n: 4, title: "Rio's favelas and the Favela Bairro project",
      lead: "What a favela is and why favelas grow, the challenges of living in one, how the Favela Bairro project has tried to improve them, and how to weigh up the argument that favelas should simply be demolished.",
      covers: [8, 9],
      pretext: {
        words: [
          { word: "favela", means: "the Brazilian name for a squatter settlement, a shanty town in or near a city", sentence: "Rocinha is the largest favela in Rio." },
          { word: "squatter settlement", means: "homes built by people on land they do not own or rent", sentence: "A squatter settlement grows without planning or permission." },
          { word: "amenities", means: "basic services such as running water, toilets and electricity", sentence: "Many favela homes have few amenities." },
          { word: "rural-urban migration", means: "people moving from the countryside to the city", sentence: "Rural-urban migration from north-east Brazil has filled Rio's favelas." },
          { word: "evaluate", means: "give both sides and reach a judgement", sentence: "To evaluate the statement, weigh the positives against the negatives." }
        ],
        passage: [
          "A favela is a shanty town, or slum, in or near a city.",
          "People build their homes from basic materials on land they do not own or rent.",
          "About 25% of Rio's people live in favelas.",
          "The largest favela in Rio is called Rocinha.",
          "Favelas grow because of rural-urban migration.",
          "People arrive from Amazonia and the drought-hit north-east with little money.",
          "The government does not provide services in the favelas.",
          "There is often no rubbish collection, no running water and no toilets.",
          "Diseases like cholera and dysentery spread easily.",
          "Many people have no formal job, and drug gangs bring crime.",
          "The Favela Bairro project has tried to improve the favelas.",
          "It has brought new local health centres and other services.",
          "Some people say favelas should be demolished.",
          "Others say they are people's homes and communities."
        ]
      },
      sections: [
        {
          heading: "What is a favela, and why do favelas grow?",
          paragraphs: [
            "A favela is a shanty town or slum area in or near a city; the general name for the same thing anywhere in the world is a squatter settlement. People build their houses out of basic materials on land they do not own or rent. About 25% of Rio's population lives in favelas, and the largest of them is Rocinha. The lesson described a favela as a social challenge that creates environmental challenges, and the sections below show why.",
            "Favelas grow because of rural-urban migration. People leave Amazonia and the drought-hit areas of north-east Brazil in the hope of finding a better life in Brazil's main cities. They arrive with very little money and there is no cheap formal housing for them, so they build their own homes on whatever land is free, often steep hillsides or land close to the city's edge. The favelas have a long history too: one video the class watched named two factors behind their beginnings and growth: slavery and migration."
          ],
          tip: "Favela is the Brazilian word; squatter settlement is the geographical term. Use both so the examiner knows you know."
        },
        {
          heading: "The challenges of life in a favela",
          paragraphs: [
            "Favelas are not catered for by the government, so the services the rest of the city takes for granted are missing. The lesson grouped the challenges under five headings. Construction: homes are built from basic materials, often on steep, unstable slopes. Services: there is often no running water, no toilets and no rubbish collection. Health: with no clean water or sanitation, diseases like cholera and dysentery are common, and there is no hospital in the favela. Unemployment: many residents have no formal job, so they work in the informal sector. Crime: drug gangs operate in many favelas, and the police have struggled to control them.",
            "The two halves of the picture the class discussed show the inequality clearly. On one side are the formal homes with electricity, water and nearby health care; on the other the favela, where each of those things is uncertain. When you explain the challenges, link them: no sanitation leads to disease; no formal jobs lead to informal work and sometimes to crime."
          ],
          worked: {
            q: "Explain one challenge facing people who live in Rio's favelas. (2 marks)",
            steps: [
              "Name a challenge from the five headings: services, for example a lack of running water and toilets.",
              "Explain the consequence: without clean water and sanitation, diseases such as cholera and dysentery spread.",
              "One sentence to name it and one to explain the effect earns two marks."
            ],
            answer: "Many favela homes have no running water or toilets, because the government does not provide services in the favelas. This is a serious challenge because dirty water and poor sanitation allow diseases such as cholera and dysentery to spread."
          },
          tip: "Five headings for favela challenges: construction, services, health, unemployment, crime. Learn them as a list."
        },
        {
          heading: "Improving the favelas: the Favela Bairro project",
          paragraphs: [
            "Rather than clearing the favelas, the city has tried to improve them. The case study you studied is the Favela Bairro project, an urban planning strategy aimed at improving the quality of life of the urban poor. Among its successes are new local health centres in the favelas, bringing health care to people who could not reach the city's hospitals. The project has also worked to upgrade services and the environment of the favelas so that they become proper neighbourhoods, which is what bairro means.",
            "Your class task was to record at least four successes and four problems of the project from the textbook, and you will need those notes. The exam question for this topic is an evaluation: has the project improved the quality of life for the urban poor? Evaluate means discuss two sides of an issue and make a judgement in your conclusion, so you need the project's advantages and its disadvantages, and then a clear decision about whether it has, overall, been a success or a failure.",
            "Alongside Favela Bairro, pacifying police units have been sent into some favelas to reduce crime, which the lesson treated as an economic challenge because it drives away investment and jobs."
          ],
          tip: "For a nine-mark evaluate question: introduction, a paragraph for each side, then a conclusion that actually decides. No conclusion, no top marks."
        },
        {
          heading: "Should favelas be demolished?",
          paragraphs: [
            "Some people argue that favelas are no good to anyone and should be knocked down. The class examined this claim from both sides. The negatives are the challenges above: lack of services, health problems and crime. High crime causes the police serious problems, and clearing a favela can look like the easiest way to deal with it. Some favelas were bulldozed to make way for stadiums for the Olympic Games.",
            "But favelas also have positives. They are people's homes, often built and improved by the families themselves over many years. They have a strong sense of community. Some, such as Rocinha, now attract tourism, with residents working as guides. People who live in favelas see them as home, and when favelas are demolished the residents are moved away from their work, their neighbours and their schools, so they are unhappy about it. An honest evaluation sets the two sides against each other and then decides: is getting rid of favelas really the best thing for everyone?"
          ],
          tip: "An evaluation must represent the people who live there. Ask who gains and who loses from demolition, and say so."
        }
      ],
      gate: [
        { kind: "numeric", q: "About what percentage of Rio's population lives in favelas?", answer: 25, tolerance: 0, units: "%", check: "FAVELA_PCT", why: "About 25%, one person in four. The largest favela is Rocinha.",
          misconceptions: [
            { answer: 20, says: "20% is the unemployment figure for the favelas (over 20% out of work). The share of Rio's population living in favelas is about 25%.", check: "FAVELA_UNEMPLOYMENT_PCT" },
            { answer: 50, says: "Half would mean every other person in Rio lived in a favela, which is too high. The figure is about 25%, one in four.", check: "FAVELA_PCT * 2" },
            { answer: 4, says: "Four is the number of people one favela resident stands for (one in four), not the percentage. As a percentage it is 25%.", check: "100 / FAVELA_PCT" }
          ] },
        { kind: "gap", q: "Rio's largest favela is called ___.", answer: "Rocinha", options: ["Rocinha", "Sepetiba", "Bairro"], why: "Rocinha is the largest favela in Rio and is well known for its tourist guides.",
          feedback: {
            "Sepetiba": "Sepetiba is where the steelworks is, Rio's economic opportunity from chapter 2. The largest favela is Rocinha.",
            "Bairro": "Bairro is part of the name of the improvement project, Favela Bairro, and it means neighbourhood. The largest favela is Rocinha."
          } },
        { kind: "mcq", q: "Why do favelas grow?", options: ["Rural-urban migration brings people who cannot afford formal housing", "The government builds them to house workers", "Wealthy families move there for the sea views", "Tourists come to stay in them"], answer: 0, why: "Migrants from Amazonia and the drought-hit north-east arrive with little money and build homes on land they do not own.",
          feedback: [
            "",
            "Favelas are the opposite of government housing: people build them themselves on land they do not own, and the government does not provide services there. They grow because of rural-urban migration.",
            "Favelas are home to the poorest people in Rio, not the wealthy, even though some are on hillsides with views. They grow because migrants arrive with little money and no formal housing.",
            "Some favelas, like Rocinha, do attract tourists today, but that is not why they grew. They grew through rural-urban migration from Amazonia and north-east Brazil."
          ] }
      ],
      modules: [
        {
          title: "Favela facts",
          task: {
            kind: "match",
            q: "Match each name or number to what it tells you about Rio's favelas.",
            pairs: [
              ["Rocinha", "The largest favela in Rio"],
              ["25%", "The share of Rio's population that lives in favelas"],
              ["Favela Bairro", "The project to improve the favelas, with new local health centres"],
              ["Pacifying police units", "Sent into favelas to reduce crime"],
              ["Rural-urban migration", "The main reason favelas have grown"]
            ]
          },
          contexts: [
            { label: "Quiz night", q: "A geography quiz asks about Rio's favelas. Match each name or number to what it tells you about them." },
            { label: "Case study card", q: "You are filling in a case study card on Rio's favelas. Match each name or number to the fact it stands for." }
          ],
          levels: {
            support: {
              steps: [
                "Start with the number: a percentage must describe a share of people.",
                "Two of the names are things done TO the favelas: a project and a police unit. One improves services; one tackles crime.",
                "One name is a place: it must be the largest favela.",
                "The one left describes people moving: that is why the favelas grew."
              ],
              example: {
                q: "Match: Sepetiba, 2015. Choices: the year of Brazil's deep recession; the site of the largest steelworks in South America.",
                steps: ["A year must be the recession.", "A place name must be the steelworks."],
                answer: "Sepetiba: the steelworks. 2015: the recession."
              }
            },
            core: { hint: "A place, a percentage, a project, a police unit and a movement of people. Each matches exactly one fact." },
            stretch: { extend: "Explain how rural-urban migration, the informal sector and the growth of favelas are linked in a chain, starting with a drought in north-east Brazil." }
          },
          explain: "Say, in one sentence, why the Favela Bairro project and the pacifying police units tackle different problems.",
          why: "Rocinha is the largest favela; about 25% of Rio's people live in favelas; Favela Bairro is the improvement project, with new local health centres among its successes; pacifying police units target crime; and rural-urban migration is why the favelas grew."
        },
        {
          title: "How a favela grows",
          task: {
            kind: "order",
            q: "Put the stages in the growth of a favela in the correct order.",
            items: [
              "Drought and a lack of work in Amazonia and north-east Brazil push people to leave",
              "They migrate to Rio hoping for a better life, with very little money",
              "There is no formal housing they can afford, so they build homes from basic materials on land they do not own",
              "The government does not provide services, so there is no running water, no toilets and no rubbish collection",
              "Disease, informal work and crime follow, and the favela keeps growing as more migrants arrive"
            ]
          },
          contexts: [
            { label: "A new arrival", q: "A family leaves a drought-hit farm in north-east Brazil for Rio. Put the stages that lead from their journey to life in a growing favela in the correct order." },
            { label: "Explaining Rocinha", q: "A visitor asks how Rocinha became the largest favela in Rio. Put the stages of the explanation in the correct order." }
          ],
          levels: {
            support: {
              steps: [
                "Start in the countryside: what pushes people out?",
                "Then the journey: arriving in Rio poor.",
                "Then the housing problem: nothing affordable, so build your own.",
                "Then the missing services, and finally the problems those cause while the favela keeps growing."
              ],
              example: {
                q: "Order the chain: factories pollute the river; more people and industry arrive in the city; the water becomes anoxic and fish die.",
                steps: ["Start with the cause: people and industry arrive.", "Then the pollution, then its effect."],
                answer: "More people and industry arrive; factories pollute the river; the water becomes anoxic and fish die."
              }
            },
            core: { hint: "Push, move, build, go without, suffer. Cause always comes before effect." },
            stretch: { extend: "Explain how the Favela Bairro project tries to break this chain at the services stage, and why that is more sustainable than demolition." }
          },
          explain: "Say, in one sentence, why people build homes on land they do not own.",
          why: "Push factors in the countryside drive migration; migrants arrive poor; with no affordable formal housing they build their own homes on land they do not own; the government does not provide services; and the lack of water, sanitation and jobs leads to disease, informal work and crime."
        },
        {
          title: "Weighing up demolition",
          task: {
            kind: "written",
            q: "Some people say the best way to deal with Rio's favelas is to knock them down. Assess this view. (9 marks)",
            marks: 9,
            criteria: [
              "Opens by saying what a favela is and what demolition would mean for the people who live there",
              "Gives at least two arguments for demolition, using the challenges (lack of services, health problems, crime; the problems crime causes the police)",
              "Gives at least two arguments against, using the positives (people's homes, community, tourism such as Rocinha, residents' unhappiness when favelas are bulldozed)",
              "Refers to an alternative, the Favela Bairro project, as a way of improving favelas rather than removing them",
              "Reaches a clear, justified judgement about how far demolition is the best thing for everyone"
            ],
            model: "A favela is a squatter settlement built by people on land they do not own, and about 25% of Rio's people live in one, so knocking them down would mean moving a quarter of the city. There are reasons people argue for demolition. Favelas lack services such as running water, toilets and rubbish collection, so diseases like cholera and dysentery spread, and drug gangs make crime a serious problem that the police struggle to control. Clearing a favela removes those conditions at a stroke, which is why some were bulldozed for Olympic stadiums. However, favelas are people's homes, built and improved by families over many years, with a strong sense of community, and some, such as Rocinha, now bring in money through tourism. When favelas are demolished the residents lose their homes, their neighbours and their nearby work, and they are unhappy about it. The Favela Bairro project shows a different approach: bringing new local health centres and services into the favelas so that they become proper neighbourhoods. Overall, demolition is not the best thing for everyone: it may suit the police and developers, but it harms the people who live there, so improving favelas is a fairer and more lasting answer."
          },
          levels: {
            support: {
              steps: [
                "Introduction: define a favela and give the 25% figure, so the reader knows how many people are affected.",
                "Paragraph for demolition: use the challenges list (services, health, crime). Say who would gain, for example the police.",
                "Paragraph against: homes, community, tourism at Rocinha, and how residents feel when favelas are bulldozed.",
                "Mention the alternative: the Favela Bairro project improves rather than removes.",
                "Conclusion: decide. Is it the best thing for everyone, or only for some people?"
              ],
              example: {
                q: "In three sentences, assess the view that street vendors in Rio should be banned.",
                steps: ["One sentence for: they pay no tax and the pavements get crowded.", "One sentence against: they are the only income for many poor families.", "One sentence judging: banning them would hurt the poorest, so regulation is better."],
                answer: "Banning street vendors would mean more tax collected and clearer pavements. But informal selling is the only income for many of the poorest families, who have no formal job to turn to. So a ban would do more harm than good; it would be better to help vendors move into the formal sector."
              }
            },
            core: { hint: "Four paragraphs: what a favela is; the case for knocking them down; the case against, including who loses; a conclusion that decides. Name Rocinha and Favela Bairro." },
            stretch: { extend: "Add a paragraph on what might happen to land cleared of favelas for Olympic stadiums once the stadiums are no longer needed, and use it to strengthen or soften your conclusion." }
          },
          explain: "Say, in one sentence, who gains and who loses when a favela is demolished.",
          why: "Assess and evaluate both mean give two sides and judge. The strongest answers put the residents at the centre: favelas have real problems, but they are homes and communities, and the Favela Bairro project shows improvement is possible without demolition."
        }
      ]
    },

    /* ───────────── 5 · urban change in the UK and Bristol's opportunities ───────────── */
    {
      key: "uk-bristol", n: 5, title: "Urban change in the UK: where people live, and Bristol's opportunities",
      lead: "How the UK's population has grown and where it lives, why the big cities grew where they did, and how urban change in Bristol has created social, economic and environmental opportunities.",
      covers: [10, 11, 12, 13],
      pretext: {
        words: [
          { word: "distribution", means: "the way something is spread over an area", sentence: "The distribution of UK cities is uneven." },
          { word: "population density", means: "the number of people living in each square kilometre", sentence: "London has a very high population density." },
          { word: "sparsely populated", means: "with few people", sentence: "Northern Scotland is sparsely populated." },
          { word: "densely populated", means: "with many people", sentence: "The south-east of England is densely populated." },
          { word: "counter-urbanisation", means: "people moving out of cities to the countryside", sentence: "Retired people often take part in counter-urbanisation." },
          { word: "high-tech industry", means: "businesses that use advanced technology, such as computer chip design", sentence: "Bristol has attracted high-tech industry." }
        ],
        passage: [
          "The UK's population grew from 41 million in 1900 to 64 million in 2015.",
          "People are not spread evenly across the country.",
          "82% of people live in urban areas.",
          "London and the south-east are densely populated.",
          "Much of Scotland and Wales is sparsely populated.",
          "Many big cities grew in the industrial revolution, near coal and iron ore.",
          "Capital cities like London and Edinburgh grew as centres of government.",
          "Ports like Liverpool and Bristol grew through trade.",
          "Bristol is the UK case study for this unit.",
          "Urban change there has created social opportunities in culture, sport and shopping.",
          "It has created economic opportunities in high-tech industries.",
          "And it has created environmental opportunities: cleaner energy, better transport and more green space."
        ]
      },
      sections: [
        {
          heading: "Where do people live in the UK?",
          paragraphs: [
            "The UK's population has increased rapidly, from 41 million in 1900 to 64 million in 2015. It is not distributed evenly. Distribution means the way something is spread over an area, and population density is the measurement that captures it: the number of people in an area, found by dividing the number of people by the area and given as people per square kilometre. Places with many people per square kilometre are densely populated; places with few are sparsely populated.",
            "In the UK, 82% of people live in urban areas. London and the south-east are densely populated because of their pull factors: financial, business and cultural attractions, and jobs. Much of Scotland and Wales is sparsely populated; the lesson gives harsh climatic conditions as the reason, and the upland relief of these areas is part of the same story. The highest densities are found in the major cities, and as you move north through the UK population density generally falls, with a dense corridor between Edinburgh and Glasgow as the main exception.",
            "The distribution will keep changing. Job opportunities attract migrants from other parts of the world to settle in the larger cities, adding an average of 243,000 people a year between 2009 and 2014. At the same time, some people move the other way, from urban to rural areas, for retirement or because city life is too expensive; this is counter-urbanisation."
          ],
          worked: {
            q: "A town has a population of 50,000 people and covers an area of 25 square kilometres. Calculate its population density.",
            steps: [
              "Population density = number of people ÷ area.",
              "50,000 ÷ 25 = 2000.",
              "Give the unit: people per square kilometre.",
              "Check it is sensible: a town of 2000 people per km² is fairly dense, which fits a town."
            ],
            answer: "2000 people per square kilometre",
            checks: [{ expr: "50000 / 25", value: 2000, tol: 0 }]
          },
          tip: "Describe a distribution with compass directions and place names: dense in the south-east and the big cities, sparse in northern Scotland and mid Wales."
        },
        {
          heading: "Why the major cities grew where they did",
          paragraphs: [
            "The twenty largest UK cities are mostly in England, with a cluster in the Midlands and the north. London is by far the biggest, with 7.2 million people in the city itself in the list the class used, followed by Birmingham with 992,000 and Leeds with 720,000; Bristol is tenth with 380,000. The population of a city depends on where you draw the line: the Greater London built-up area in the 2011 Census had 9,787,426 people, far more than the city figure. That is why two lists of UK cities can look so different.",
            "The distribution of the cities is largely due to the industrial revolution of the eighteenth century onwards. Industries grew where there were raw materials like coal and iron ore, and people moved to live near the work: Glasgow, Newcastle, Manchester, Leeds and Cardiff all grew this way. The capital cities, London, Belfast, Cardiff and Edinburgh, developed because of their political and administrative functions; London in particular is a global city and a financial centre. Birmingham grew because of its central position and the industrial inventions linked to it. Trade through the ports of London, Liverpool and Bristol made those cities grow too."
          ],
          tip: "Four reasons for a city's growth: raw materials (coal and iron ore), capital functions, a central position, and a port. Give one named city for each."
        },
        {
          heading: "Bristol: social and economic opportunities",
          paragraphs: [
            "Bristol is the UK city you study. Urban change there has created social opportunities in culture, with a diverse cultural mix, and in leisure and recreation, both sport and shopping. New venues, teams and shopping areas give people more to do and more reasons to visit, which raises quality of life.",
            "The economic story starts with decline. Bristol was a traditional port town, importing tobacco from the West Indies and sherry from Bordeaux, and most jobs were in the primary and secondary sectors, building and loading ships. When the city-centre port was eventually closed to commercial use it left a huge void: unemployment and empty warehouses. Urban change has since filled that void with high-tech industries: silicon design businesses, Aardman Animations and aerospace. These industries have created jobs for a growing number of people.",
            "Why did high-tech firms choose Bristol? A government grant of £100 million to become a super-connected city with the fastest download speeds in the country. Two excellent local universities producing an educated, skilled workforce, with facilities that let companies carry out advanced research. A large mix of companies able to work together on research and development. Good transport links, and a clean, unpolluted environment. One big employer, the Defence Procurement Agency, set up on a greenfield site in Bristol in 1996 with over 10,000 employees, supplying the army, air force and navy with everything from boots to aircraft. More workers needed more homes, so a private housing development, the largest in Europe, was built for around 21,000 people, and the city sprawled outwards."
          ],
          tip: "The Bristol economic story has a shape: port decline, then high-tech growth. Name all three high-tech industries and at least two reasons they came."
        },
        {
          heading: "Bristol: environmental opportunities",
          paragraphs: [
            "Urban change can improve the environment as well. Bristol made a plan to improve transport, energy efficiency and the use of renewable energy by 2020, along with other environmental initiatives. The lesson picked out three. First, improved energy efficiency and renewable energy development, so the city uses less energy and more of it comes from clean sources. Second, an integrated transport system, linking different forms of transport, such as buses, trains and cycle routes, so that people can leave the car at home. Third, urban greening: a policy that has led to a number of initiatives for improving the city's green spaces.",
            "These three are the environmental opportunities you should name in a nine-mark answer about Bristol, alongside the social and economic ones. Together they let you argue that urban change has created social, economic and environmental opportunities, before you turn to the challenges in chapter 6."
          ],
          tip: "Three environmental opportunities in Bristol: energy efficiency and renewables, the integrated transport system, urban greening. Learn them as a trio."
        }
      ],
      gate: [
        { kind: "numeric", q: "The UK's population was 41 million in 1900 and 64 million in 2015. By how many million did it grow?", answer: 23, tolerance: 0, units: "million", check: "UK_POP_2015_M - UK_POP_1900_M", why: "64 − 41 = 23 million more people in 115 years.",
          misconceptions: [
            { answer: 105, says: "You added the two figures. Growth is the later figure minus the earlier one: 64 − 41 = 23 million.", check: "UK_POP_2015_M + UK_POP_1900_M" },
            { answer: 115, says: "115 is the number of years between 1900 and 2015, not the growth in population. The population rose from 41 to 64 million: 23 million.", check: "2015 - 1900" },
            { answer: 33, says: "Check the subtraction: 64 − 41 is 23, not 33. Line the digits up: 64 take away 41.", check: "UK_POP_2015_M - UK_POP_1900_M + 10" }
          ] },
        { kind: "mcq", q: "Which three high-tech industries did the lesson name as creating economic opportunities in Bristol?", options: ["Silicon design, Aardman Animations and aerospace", "Shipbuilding, tobacco and sherry", "Coal mining, steel and textiles", "Farming, fishing and forestry"], answer: 0, why: "Silicon design businesses, Aardman Animations and the aerospace industry are the three high-tech industries that have created jobs for a growing number of people.",
          feedback: [
            "",
            "Shipbuilding and importing tobacco and sherry were Bristol's OLD port economy, which declined. The new high-tech industries are silicon design, Aardman Animations and aerospace.",
            "Coal, steel and textiles were the industries of the industrial revolution in cities like Glasgow and Leeds. Bristol's new industries are high-tech: silicon design, Aardman Animations and aerospace.",
            "Those are primary industries, which take things from the land and sea. Bristol's economic opportunities come from high-tech industries: silicon design, Aardman Animations and aerospace."
          ] },
        { kind: "gap", q: "Bristol's plan to link different forms of transport, such as buses, trains and cycle routes, is called an ___ transport system.", answer: "integrated", options: ["integrated", "informal", "industrial"], why: "Integrated means joined up: the different forms of transport work together, so people need the car less.",
          feedback: {
            "informal": "Informal describes untaxed work in Rio's economy, not transport. Bristol's plan joins up buses, trains and cycling: an integrated transport system.",
            "industrial": "Industrial means to do with factories. The transport plan is about linking forms of transport together, so it is integrated."
          } }
      ],
      modules: [
        {
          title: "Why did each city grow?",
          task: {
            kind: "match",
            q: "Match each group of UK cities to the main reason for its growth.",
            pairs: [
              ["Glasgow, Newcastle, Manchester and Leeds", "Industries grew near raw materials such as coal and iron ore"],
              ["London, Belfast and Edinburgh", "Capital cities with political and administrative functions"],
              ["Liverpool and Bristol", "Ports that grew through trade"],
              ["Birmingham", "A central position and the industrial inventions linked to it"]
            ]
          },
          contexts: [
            { label: "Map labels", q: "You are labelling a map of the UK's major cities with the reason each group grew. Match each group of cities to the main reason for its growth." },
            { label: "Four-mark answer", q: "A four-mark question asks you to explain the distribution of major UK cities. To plan it, match each group of cities to the main reason for its growth." }
          ],
          levels: {
            support: {
              steps: [
                "Capital cities are the easiest: which cities are the capitals of the UK's nations?",
                "Coal and iron ore were in the north and in South Wales: which group is the northern industrial cities?",
                "Which two cities are famous for their docks and trade?",
                "The one city on its own sits in the middle of England."
              ],
              example: {
                q: "Match: Cardiff, Hull. Choices: a port on the east coast; the capital of Wales (it also had coal nearby).",
                steps: ["Cardiff is the capital of Wales.", "Hull is a port on the east coast."],
                answer: "Cardiff: the capital of Wales. Hull: a port on the east coast."
              }
            },
            core: { hint: "Four reasons: raw materials, capital functions, trade by sea, a central position. Match the group that fits each." },
            stretch: { extend: "Cardiff appears in two of the lesson's groups: an industrial city near coal and a capital city. Explain why a city can grow for more than one reason, and suggest which reason matters most for Cardiff today." }
          },
          explain: "Say, in one sentence, why the industrial revolution explains where so many of the UK's big cities are.",
          why: "Glasgow, Newcastle, Manchester and Leeds grew near coal and iron ore; London, Belfast and Edinburgh (and Cardiff) are capitals with political and administrative functions; Liverpool and Bristol (and London) grew as trading ports; Birmingham grew because of its central position and its industrial inventions."
        },
        {
          title: "Migration and the UK's cities",
          task: {
            kind: "numeric",
            q: "Migrants from other parts of the world have added an average of 243,000 people a year to the UK's larger cities. At that rate, how many people would be added over four years?",
            answer: 972000, tolerance: 0, units: "people", check: "MIGRATION_PER_YEAR * 4",
            why: "243,000 × 4 = 972,000, close to a million people in four years: more than the whole population of Birmingham in the class list.",
            misconceptions: [
              { answer: 1215000, says: "That is 243,000 × 5. The question asks about four years, so multiply by 4: 972,000.", check: "MIGRATION_PER_YEAR * 5" },
              { answer: 1458000, says: "That is 243,000 × 6, perhaps because 2009 to 2014 covers six calendar years. The question asks for FOUR years at that rate: 243,000 × 4 = 972,000.", check: "MIGRATION_PER_YEAR * 6" },
              { answer: 243004, says: "You added 4 to 243,000. The 243,000 happens EVERY year, so for four years you multiply: 243,000 × 4 = 972,000.", check: "MIGRATION_PER_YEAR + 4" }
            ]
          },
          contexts: [
            { label: "Housing planner", q: "A planner uses the figure of 243,000 migrants a year arriving in the UK's larger cities to estimate how many extra people will need homes over four years. At that rate, what is the figure?", check: "MIGRATION_PER_YEAR * 4" },
            { label: "School places", q: "A council reads that migration adds an average of 243,000 people a year to the UK's larger cities. At that rate, how many people would be added over four years?", check: "MIGRATION_PER_YEAR * 4" }
          ],
          levels: {
            support: {
              steps: [
                "The rate is 243,000 people for every ONE year.",
                "The question asks for four years.",
                "Multiply: 243,000 × 4.",
                "Check: 250,000 × 4 would be a million, so the answer should be a little under a million."
              ],
              example: {
                q: "If a city gained 20,000 people a year from migration, how many would it gain in three years?",
                steps: ["Rate 20,000 per year.", "Three years.", "20,000 × 3 = 60,000."],
                answer: "60,000 people",
                checks: [{ expr: "20000 * 3", value: 60000, tol: 0 }]
              }
            },
            core: { hint: "A yearly figure over several years means multiply. Four years, so times four." },
            stretch: { extend: "Explain why migration into the larger cities and counter-urbanisation out of them could happen at the same time, and what each does to the population density of a city like London." }
          },
          explain: "Say, in one sentence, why the yearly figure is multiplied rather than added.",
          why: "243,000 a year for four years is 243,000 × 4 = 972,000. A rate per year is multiplied by the number of years. Migration is one of the factors that will keep changing where the UK's people live."
        },
        {
          title: "Bristol's opportunities, sorted",
          task: {
            kind: "match",
            q: "Match each change in Bristol to the kind of opportunity it created.",
            pairs: [
              ["A diverse cultural mix, and new sport and shopping venues", "Social opportunity"],
              ["Silicon design, Aardman Animations and aerospace creating jobs", "Economic opportunity"],
              ["An integrated transport system and urban greening", "Environmental opportunity"]
            ]
          },
          contexts: [
            { label: "Planning the nine-marker", q: "You are planning the nine-mark answer on Bristol and need one example of each kind of opportunity. Match each change in Bristol to the kind of opportunity it created." },
            { label: "Open evening display", q: "A display about Bristol's changes is being sorted into three boards: social, economic and environmental. Match each change to its board." }
          ],
          levels: {
            support: {
              steps: [
                "Social means quality of life and things to do: culture, sport, shopping.",
                "Economic means money and jobs: industries that employ people.",
                "Environmental means the air, land, energy and green space of the city.",
                "Each change in the list fits exactly one of the three."
              ],
              example: {
                q: "Sort: a £100 million grant for fast internet that attracted companies; a plan to use more renewable energy. Economic or environmental?",
                steps: ["The grant attracted companies and jobs: economic.", "Renewable energy is about the environment: environmental."],
                answer: "Grant: economic. Renewable energy plan: environmental."
              }
            },
            core: { hint: "People and leisure; jobs and money; air, transport and green space. SEE: social, economic, environmental." },
            stretch: { extend: "Explain why the Defence Procurement Agency's arrival in 1996 can be seen as an economic opportunity and an environmental challenge at the same time." }
          },
          explain: "Say, in one sentence, what SEE stands for and why examiners like answers organised that way.",
          why: "Culture, sport and shopping improve quality of life, so they are social. High-tech industries create jobs, so they are economic. The integrated transport system, urban greening and cleaner energy improve the environment, so they are environmental. SEE gives a nine-mark answer its shape."
        }
      ]
    },

    /* ───────────── 6 · Bristol's challenges and the response ───────────── */
    {
      key: "bristol-challenges", n: 6, title: "Bristol's challenges: dereliction, sprawl, inequality and new homes",
      lead: "The environmental challenges urban change has left Bristol, how the city is cleaning its waste and air, the gap between Filwood and Stoke Bishop, where new homes should go, and the regeneration of the Temple Quarter.",
      covers: [14, 15, 16, 17, 18, 19],
      pretext: {
        words: [
          { word: "dereliction", means: "abandoned buildings and wasteland", sentence: "Old factories left empty are an example of dereliction." },
          { word: "urban sprawl", means: "the unplanned spread of a city into the countryside", sentence: "New housing estates on the edge of Bristol add to urban sprawl." },
          { word: "social deprivation", means: "when people lack the basic things most others have, such as decent housing, education and health", sentence: "Filwood has high levels of social deprivation." },
          { word: "affluent", means: "wealthy", sentence: "Stoke Bishop is a very affluent area." },
          { word: "regeneration", means: "improving a run-down area by improving its housing and environment", sentence: "The Temple Quarter regeneration has changed the area around the station." },
          { word: "landfill", means: "a site where rubbish is buried in the ground", sentence: "Bristol wants to send less waste to landfill." }
        ],
        passage: [
          "Urban change has brought Bristol challenges as well as opportunities.",
          "When industries closed, they left derelict buildings and wasteland in the inner city.",
          "A growing population needs new homes, and new estates have spread the city outwards.",
          "This unplanned spread into the countryside is called urban sprawl.",
          "Bristol is cleaning its environment too.",
          "It sends less waste to landfill and recycles more.",
          "It cuts air pollution with lower speed limits, walking, cycling, electric vehicles and public transport.",
          "Bristol also has social inequality.",
          "Filwood has high levels of social deprivation, while Stoke Bishop is very affluent.",
          "The green belt around Bristol and Bath stops the two cities merging.",
          "Most new homes in Bristol are built on brownfield sites, land that was used before.",
          "Some are built on greenfield sites, such as Harry Stoke, which has never been built on.",
          "The Temple Quarter, by Temple Meads station, is Bristol's biggest regeneration project."
        ]
      },
      sections: [
        {
          heading: "Dereliction, urban sprawl and a cleaner city",
          paragraphs: [
            "Changes in Bristol's economy and industry have created two environmental challenges: derelict industrial buildings and urban sprawl. Dereliction means abandoned buildings and wasteland. When the port closed and old industries declined, warehouses and factories in the inner city were left empty. Urban sprawl is the unplanned growth of urban areas into the surrounding rural areas. Bristol's growing population, and the demolition of older slum areas, increased the demand for new homes, and new housing developments have extended the city outwards. One answer has been to build on brownfield sites instead, and Bristol has been successful in using them for new housing to reduce sprawl.",
            "Bristol is also tackling waste and air pollution. The waste problem is being tackled by reducing the amount of waste generated and sent to landfill, and increasing the amount recycled. Recycling rates have been raised by setting higher targets, educating residents, improving collection services and recycling facilities, and technological improvements. Some waste is handled by resource recovery, also called energy recovery: burning part or all of the waste to generate heat or electricity instead of burying it.",
            "Air pollution, mainly nitrogen dioxide from vehicles, is being reduced by lowering speed limits and encouraging walking, cycling, the use of electric vehicles and public transport. Together these measures let you describe how Bristol is creating a clean environment: less to landfill, more recycling, and fewer emissions from traffic."
          ],
          tip: "Urban sprawl has effects on people (longer journeys, loss of countryside for recreation) and on the environment (loss of habitat and farmland, more car travel). Give both in a six-mark answer."
        },
        {
          heading: "Social inequality: Filwood and Stoke Bishop",
          paragraphs: [
            "There are great social variations and inequalities between different areas of Bristol. Social variations are measured by factors such as housing, education and health. The class table compared two areas under eight headings: housing, education, health care, life expectancy, crime, security, employment and access to shopping facilities.",
            "Some areas of Bristol, such as Filwood, have high levels of social deprivation: people lack the decent housing, education, health and jobs that most others have. Others, such as Stoke Bishop, are very affluent, which means wealthy. The lesson's extension task asked why the number and types of crime differ between the two areas; unemployment, income and the quality of housing all play a part. Social inequality matters for the nine-mark question because it shows that the opportunities created by urban change are not available to everyone: growth has brought benefits to suburbs like Stoke Bishop while inner areas like Filwood remain deprived."
          ],
          tip: "Filwood = deprived; Stoke Bishop = affluent. Measure the gap with the factors: housing, education, health, life expectancy, employment."
        },
        {
          heading: "New housing: the green belt, greenfield and brownfield",
          paragraphs: [
            "Where should Bristol's new homes go? Around the edge of the city is the green belt, an area of countryside with strict planning controls to stop houses being built. The Bristol and Bath green belt was set up to prevent the two cities merging and to prevent development on the rural-urban fringe, the zone of transition between the built-up area and the countryside where land uses compete. Even so, Bristol's role as a regional centre has led to the growth of commuter settlements, places where many residents travel into the city to work, to the north and south of the city on the green belt.",
            "A greenfield site is a plot of land, often rural or on the edge of a city, that has never been built on before. A national housing shortage has led to greenfield sites being used for new housing, for example at Harry Stoke and Bradley Stoke, but there is considerable opposition. Greenfield sites are cheaper, need no time or money to clear, and can be planned as a whole; but they need new infrastructure such as roads and services, they take open space and countryside, they contribute to urban sprawl and they can lead to piecemeal development.",
            "A brownfield site is land that has been used, abandoned and now awaits reuse, usually in an urban area: former office buildings, factories, dockyards, pubs, coach depots and listed buildings. Most new homes in Bristol are built on brownfield sites, partly because of the demand for student accommodation; the new flats on Bristol Harbourside are an example. Brownfield sites improve contaminated land and derelict buildings, let people live and work in the city centre and make use of historic buildings; but they may take a lot of time and money to make clear and safe, and old listed buildings may not suit modern use."
          ],
          worked: {
            q: "Give one advantage and one disadvantage of building new homes on a brownfield site. (2 marks)",
            steps: [
              "Advantage: pick one from the lesson's list, for example it improves contaminated land and derelict buildings.",
              "Disadvantage: pick one, for example it may take a lot of time and money to make the site clear and safe.",
              "State each in a full sentence; one mark for each."
            ],
            answer: "An advantage is that building on a brownfield site improves contaminated land and derelict buildings, giving them a new use. A disadvantage is that the site may take a lot of time and money to make clear and safe before building can start."
          },
          tip: "Greenfield: never built on, cheap to start, adds to sprawl. Brownfield: used before, in the city, costly to clear. The advantages of one are the disadvantages of the other."
        },
        {
          heading: "Regeneration and the Temple Quarter",
          paragraphs: [
            "Regeneration means improving run-down areas by improving the housing and the environment. It has advantages and disadvantages. On the plus side, multiple land uses can be created from existing buildings; derelict, abandoned or waste land is given a new use; old and shabby urban environments are improved; sprawl is reduced because the site is already developed land; and car use may fall as new buildings go up inside the city. On the minus side, sites are more expensive to build on because the land may need clearing, and the land may have been contaminated by previous industrial use, so it needs professional clean-up.",
            "Bristol's Temple Quarter needed regeneration for three linked reasons. It was a brownfield site, land previously used for industry, which had grown up around the river, the harbour and the railway station. It is the area most visitors see first when they arrive in Bristol by road or rail. And so it gave a bad image of the city: for people arriving at Bristol's main railway station, Temple Meads, the derelict Temple Quarter was their first impression. The station itself is a historic building linked to the engineer Isambard Kingdom Brunel, and historic buildings shape what a regeneration can do.",
            "The second Temple Quarter lesson asked you to find examples of a new building and of an old building re-used, to assess the importance of the Bristol arena and Temple Meads station to the project, and to suggest how the success of a regeneration can be measured: new jobs, new homes, visitors, the state of the buildings, and what local people think. Regeneration has winners, such as developers, builders, landowners, investors and the government, and it can have losers, such as local people priced out or moved on; a good evaluation names both."
          ],
          tip: "Three reasons the Temple Quarter needed regeneration: brownfield land; the first area visitors see; a bad first impression at Temple Meads."
        }
      ],
      gate: [
        { kind: "gap", q: "The unplanned growth of a city outwards into the surrounding countryside is called urban ___.", answer: "sprawl", options: ["sprawl", "greening", "regeneration"], why: "Urban sprawl is one of Bristol's two environmental challenges, with dereliction.",
          feedback: {
            "greening": "Urban greening is the opposite kind of change: improving a city's green spaces, one of Bristol's environmental opportunities. Unplanned spread into the countryside is urban sprawl.",
            "regeneration": "Regeneration is improving a run-down area inside the city, like the Temple Quarter. The city spreading outwards into the countryside is urban sprawl."
          } },
        { kind: "mcq", q: "Which pair of Bristol areas did the lesson use to show social inequality, and which is the deprived one?", options: ["Filwood (deprived) and Stoke Bishop (affluent)", "Stoke Bishop (deprived) and Filwood (affluent)", "Harry Stoke (deprived) and Harbourside (affluent)", "Temple Quarter (deprived) and Bradley Stoke (affluent)"], answer: 0, why: "Filwood has high levels of social deprivation; Stoke Bishop is very affluent.",
          feedback: [
            "",
            "You have the two the wrong way round. Filwood is the area with high social deprivation; Stoke Bishop is the very affluent one.",
            "Harry Stoke is a greenfield housing site and Harbourside a brownfield one; they are from the new housing lesson. The inequality pair is Filwood (deprived) and Stoke Bishop (affluent).",
            "The Temple Quarter is the regeneration case study and Bradley Stoke a greenfield housing site. The inequality pair is Filwood (deprived) and Stoke Bishop (affluent)."
          ] },
        { kind: "mcq", q: "Which of these is a BROWNFIELD site?", options: ["A former dockyard in the city centre awaiting reuse", "A field on the edge of the city that has never been built on", "Countryside protected by the green belt", "A commuter settlement north of Bristol"], answer: 0, why: "Brownfield land has been used and abandoned and now awaits reuse; it is usually in the urban area.",
          feedback: [
            "",
            "Land that has never been built on is a greenfield site, like Harry Stoke. A brownfield site has been used before and is waiting to be used again.",
            "Green belt is protected countryside where strict planning controls stop housing. A brownfield site is used land inside the city, such as an old dockyard.",
            "A commuter settlement is a place where people live and travel into the city to work. A brownfield site is abandoned, previously used land such as a former dockyard."
          ] }
      ],
      modules: [
        {
          title: "Housing key words",
          task: {
            kind: "match",
            q: "Match each key word from the new housing lesson to its meaning.",
            pairs: [
              ["Green belt", "The area of countryside around the edge of a city with strict planning controls to stop houses being built"],
              ["Rural-urban fringe", "A zone of transition between a built-up area and the countryside, where there is often competition for land use"],
              ["Brownfield site", "Land that has been used, abandoned and now awaits reuse, often found in urban areas"],
              ["Greenfield site", "A plot of land, often rural or on the edge of an urban area, that has not been built on before"],
              ["Commuter settlement", "A town or village where many residents travel into a nearby city to work"]
            ]
          },
          contexts: [
            { label: "Glossary check", q: "You are checking your glossary for the new housing lesson. Match each key word to its meaning." },
            { label: "Planning meeting", q: "At a planning meeting about Bristol's new homes, five terms keep coming up. Match each key word to its meaning." }
          ],
          levels: {
            support: {
              steps: [
                "Two terms contain field: one has never been built on (green), one has been used before (brown).",
                "Green belt is not a field but a whole ring of protected countryside around the city.",
                "Fringe means edge: the zone where town meets country.",
                "Commuters are people who travel to work, so a commuter settlement is where they live."
              ],
              example: {
                q: "Match: dereliction, regeneration. Choices: improving a run-down area by improving housing and the environment; abandoned buildings and wasteland.",
                steps: ["Derelict means abandoned.", "Regenerate means make new again."],
                answer: "Dereliction: abandoned buildings and wasteland. Regeneration: improving a run-down area."
              }
            },
            core: { hint: "Never built on; built on before; protected ring; the edge zone; where commuters live." },
            stretch: { extend: "Explain why the growth of commuter settlements on the green belt is a sign that the green belt is both working and under pressure." }
          },
          explain: "Say, in one sentence, the difference between the green belt and a greenfield site.",
          why: "Green belt is the protected ring of countryside; the rural-urban fringe is the edge zone where town meets country; a greenfield site has never been built on; a brownfield site has been used and abandoned; a commuter settlement is where people live who travel into the city to work."
        },
        {
          title: "Greenfield or brownfield?",
          task: {
            kind: "mcq",
            q: "Bristol needs more homes for students. Which option best explains why the city has chosen to build most of them on brownfield sites rather than greenfield sites?",
            options: [
              "Brownfield sites let people live and work in the city centre and reuse derelict land, so they reduce urban sprawl",
              "Brownfield sites are cheaper and need no time or money to clear",
              "Brownfield sites are in the countryside, so students get more open space",
              "Brownfield sites are protected by the green belt, so building there is always allowed"
            ],
            answer: 0,
            feedback: [
              "",
              "Cheap land that needs no clearing describes a GREENFIELD site. Brownfield sites may be expensive to clear; their advantage is reusing land in the city and avoiding sprawl.",
              "Brownfield sites are usually inside the city, on former docks, factories and offices; greenfield sites are the ones on the edge or in the countryside. The advantage of brownfield is being central.",
              "The green belt is protected countryside where building is restricted, not a brownfield site. Brownfield sites are abandoned urban land, which can be reused without taking countryside."
            ]
          },
          contexts: [
            { label: "Council decision", q: "A council officer must explain to residents why new flats are going on a former dockyard rather than a field on the city edge. Which option best explains the choice of a brownfield site over a greenfield one?" },
            { label: "Six-mark plan", q: "You are planning a six-mark answer on how Bristol reduces urban sprawl. Which option best explains why the city builds most new homes on brownfield sites rather than greenfield sites?" }
          ],
          levels: {
            support: {
              steps: [
                "Recall where each kind of site is: brownfield inside the city, greenfield on the edge.",
                "Recall the brownfield advantages: reuses derelict land, lets people live and work centrally, uses historic buildings.",
                "Recall the greenfield advantages: cheaper, nothing to clear, planned as a whole. Any option giving these to brownfield is wrong.",
                "Pick the option that links brownfield's advantages to reducing sprawl."
              ],
              example: {
                q: "A developer chooses a greenfield site at Harry Stoke. Which of these is a genuine advantage of that choice: the land is cheaper and needs no clearing, or the development reuses derelict buildings?",
                steps: ["Reusing derelict buildings is a brownfield advantage.", "Cheap, uncleared land is the greenfield advantage."],
                answer: "The land is cheaper and needs no clearing."
              }
            },
            core: { hint: "Which option gives brownfield its OWN advantages, not greenfield's? And which links to Bristol's aim of reducing sprawl?" },
            stretch: { extend: "Attempt to justify the use of greenfield sites for new housing at Harry Stoke and Bradley Stoke, then explain why there is considerable opposition to it." }
          },
          explain: "Say, in one sentence, why building on brownfield sites reduces urban sprawl.",
          why: "Brownfield sites are inside the city, so building there reuses derelict land, lets people live and work centrally and takes no countryside: that is how Bristol has reduced sprawl. The downside is the time and cost of making old sites clear and safe."
        },
        {
          title: "Who wins and who loses from regeneration?",
          task: {
            kind: "written",
            q: "Regeneration of a run-down urban area creates winners and losers. Using Bristol as your example, assess how far this is true. (9 marks)",
            marks: 9,
            criteria: [
              "Defines regeneration and names the Bristol example (the Temple Quarter) and why it needed regenerating",
              "Explains who wins and what they gain: for example developers, builders, landowners, investors and the government, and the city's image at Temple Meads",
              "Explains who may lose and what they lose: for example local people and businesses moved on or priced out, and the cost of clearing contaminated land",
              "Uses the advantages and disadvantages of regenerating run-down areas from the lesson",
              "Reaches a justified conclusion on whether regeneration with winners and losers is still worth doing"
            ],
            model: "Regeneration means improving a run-down area by improving its housing and environment, and Bristol's Temple Quarter is the example: a derelict brownfield area of old industry around the river, harbour and Temple Meads station that gave visitors a bad first impression of the city. There are clear winners. Developers, builders, landowners and investors gain from new buildings and rising land values, and the government and the city gain because derelict land is given a new use, the shabby environment around the main station is improved and the Temple Quarter now gives a far better image to people arriving by road or rail. Because the site was already developed land, regeneration also reduces urban sprawl, which benefits everyone. But there can be losers. Local people and small businesses in a run-down area may be moved on or priced out as the area improves, and the land, contaminated by past industry, is expensive to clear, so the cost falls on the public or on buyers. Overall, it is true that regeneration creates winners and losers, but the losers can be protected if local people are included, so regeneration of areas like the Temple Quarter is still worth doing; the alternative, leaving dereliction in place, helps nobody."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1: define regeneration, name the Temple Quarter and give the three reasons it needed regenerating.",
                "Paragraph 2 (winners): list who gains (developers, builders, landowners, investors, government) and say what each gains. Use the advantages from the lesson.",
                "Paragraph 3 (losers): say who might lose (local people) and what they lose. Add the disadvantages: cost of clearing, contaminated land.",
                "Conclusion: decide whether regeneration is still justified when it has both winners and losers, and say why."
              ],
              example: {
                q: "In three sentences, assess whether building the Harry Stoke greenfield estate created winners and losers.",
                steps: ["One sentence on winners: people who needed homes, the builders.", "One on losers: people who lost countryside and open space.", "One judging."],
                answer: "Families who needed homes and the companies that built them gained from the Harry Stoke development. People living nearby lost open countryside and saw the city sprawl towards them. So it did create winners and losers, though the housing shortage made the homes necessary."
              }
            },
            core: { hint: "Introduction with definition and example; winners paragraph; losers paragraph; conclusion that judges. Four PEEL paragraphs for nine marks." },
            stretch: { extend: "Add a paragraph suggesting how the success of the Temple Quarter regeneration could be measured, and argue which measure matters most to the people of Bristol." }
          },
          explain: "Say, in one sentence, why a nine-mark answer always needs a conclusion.",
          why: "Nine-mark questions use command words such as assess, evaluate and to what extent, so they always need a judgement. Regeneration has winners (developers, investors, the city's image) and can have losers (local people, the public purse for clearing contaminated land); the best answers name both and decide."
        }
      ]
    }
  ],

  sources: {
    deckDump: "gg_y09_unit_3_urban_issues_and_challenges.txt",
    decksUsed: ["Year 9_urban issues_Rio and Bristol.pptx", "Year 9_urban issues.pptx", "Urban issues and challenges_year9.pptx", "Urban Change in the UK_Year9.pptx", "Bristol end of topic test_Revision.pptx"],
    notes: "Lesson titles, sequence, key words, definitions and every case-study fact come from the five department decks only (the 2026 Rio-and-Bristol deck, slides 1-197; its 2024 predecessor, slides 1-130; the Urban issues and challenges deck, slides 1-28; the Urban Change in the UK deck, slides 1-9; the Bristol revision deck, slides 1-31). House furniture (dated title slides, homework and Kerboodle slides, the Prior Learning/Components sheets, DIT slides, the seating plan) was used only to fix the lesson sequence; no pupil or staff name from the seating plan appears anywhere and verify.py bans them. The decks' model answers and exam-question stems (Rio location model, the 6- and 9-mark plans, the favela demolition statement, the who-wins-and-loses plan) were read to see what the decks teach; none is reproduced and verify.py bans their distinctive phrases. Where a deck gives only a task or a textbook page reference (the Favela Bairro successes and problems, the Filwood/Stoke Bishop table, the Temple Quarter buildings), the manifest teaches only what the slides themselves state and tells the pupil to use their class notes; see NOTES.md. Every number is held in the FACTS table in verify.py with its slide reference and recomputed. No pretext.l1 (translation is a separate pass) and no meta.constellation. No text is quoted from any source."
  }
};
