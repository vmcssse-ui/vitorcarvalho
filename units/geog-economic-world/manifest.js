// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE Geography 8035 · 3.2.2 The changing economic world · Year 10 · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression; the FACTS names held in verify.py are allowed) and are recomputed.
//   worked examples / support examples with a calculation carry `checks:[{expr, value, tol}]`.
//   every "order" task is compared with the canonical sequences held in verify.py (the department deck's own sequences:
//   the five DTM stages, the positive multiplier effect, Nigeria's political history, the UK government's three policy eras).
//   every mcq / gap / match answer is compared with the independent answer key held in verify.py.
//   every case-study number (Dyson's £9 and £3 an hour, Jamaica's 220 000 tourism workers, Tanzania's 2000 and 2015 figures,
//   Rwanda's 1.74 % to 11.18 %, Nigeria's 1960 / 1970 / 1999 dates, 37.2 billion barrels, 94.5 % of exports, Shell's 65 000
//   workers, the Bonga and Bodo spills, the UK's 2 / 8 / 78 / 12 employment structure, Torr Quarry's 7.5 million tonnes, the
//   regional unemployment table) is checked against the independent FACTS table in verify.py, slide by slide.
//   passage sentences are counted (≤ 20 words) and all text is linted for known misconceptions, the deck's own errors (goat aid
//   called multilateral, sweet oil at 42 % sulphur, the 1883 Berlin Conference) and the deck's model-answer fingerprints.
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions`; every module carries
//   `explain`; ≥ 1 module per chapter carries `contexts` that never redefine the answer; `connections` ⊂ glossary;
//   meta.constellation is omitted (the engine lays the stars out); no pretext.l1 (translation is a separate pass).
// Diagrams (the DTM graph, population pyramids, pie charts of employment structure, the Gapminder bubbles) are described in words.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["geog-economic-world"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "geog-economic-world",
    subjectKey: "geography",
    subject: "Geography",
    board: "AQA",
    spec: "8035",
    specRef: "3.2.2 The changing economic world: 3.2.2.1 the global variation in economic development and quality of life, 3.2.2.2 strategies to reduce the development gap and a case study of an LIC or NEE (Nigeria), 3.2.2.3 major changes in the economy of the UK (Paper 2, Section B)",
    year: 10,
    tier: "GCSE (AQA Geography is a single-tier qualification)",
    title: "The Changing Economic World",
    sub: "Why some countries are richer than others, how the gap can be narrowed, how Nigeria is changing, and how the UK's own economy has been transformed.",
    bigQuestion: "Why is the world's wealth so unevenly shared, and what can countries such as Nigeria and the UK do about the gaps between them and within them?",
    lessonCount: 27,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  // The department's decks in teaching order: CEW_Development.pptx (slides 1-247), the Nigeria decks (Nigeria.pptx 1-105 with the
  // two booklet decks) and The changing UK economy.pptx (slides 2-188). Titles are the decks' own slide titles or learning
  // objectives; questions are those objectives rephrased. See NOTES.md section 2 for the slide ranges.
  lessons: [
    { n: 1, title: "Development: what it is and how wealth is measured", question: "What do development, standard of living, quality of life and the development gap mean, and why is total wealth a poor measure?", keywords: ["development", "standard of living", "quality of life", "development gap", "total wealth", "GNI"] },
    { n: 2, title: "Classifying countries and the factors that affect development", question: "How are countries classified as HIC, NEE or LIC, what are the BRICS and MINT groups, and which factors speed up or slow down development?", keywords: ["HIC", "LIC", "NEE", "BRICS", "MINT", "environmental", "economic", "political", "social"] },
    { n: 3, title: "HDI and other indicators: strengths, weaknesses and correlation", question: "What does the HDI measure, how does it compare with GNI, and what does a scattergraph of two indicators show?", keywords: ["HDI", "life expectancy", "literacy rate", "birth rate", "infant mortality", "correlation", "scattergraph"] },
    { n: 4, title: "The demographic transition model", question: "What is the demographic transition model and what happens to birth rate, death rate and population in each of its five stages?", keywords: ["demographic transition model", "birth rate", "death rate", "natural increase", "stage"] },
    { n: 5, title: "Reasons for population change and the limits of the DTM", question: "Why do birth and death rates rise and fall, and what are the limitations of the demographic transition model?", keywords: ["high birth rate", "low death rate", "pensions", "healthcare", "migration", "limitations"] },
    { n: 6, title: "Population pyramids", question: "What does a population pyramid show, and how do the pyramids of HICs and LICs differ?", keywords: ["population pyramid", "age group", "life expectancy", "infant mortality", "dependency ratio"] },
    { n: 7, title: "Human and physical causes of uneven development", question: "What makes a country poor: which physical, economic and historical factors hold development back?", keywords: ["landlocked", "extreme weather", "disease", "clean water", "colony", "primary products", "corruption"] },
    { n: 8, title: "Consequences of uneven development: wealth, health and migration", question: "How does uneven development lead to disparities in wealth and health and to international migration?", keywords: ["disparity", "wealth", "health", "migration", "refugee", "economic migrant", "displaced person"] },
    { n: 9, title: "Reducing the gap: investment and industrial development", question: "How can investment by TNCs and the growth of industry reduce the development gap, as Dyson and Proton have in Malaysia?", keywords: ["investment", "TNC", "Dyson", "Malaysia", "industrial development", "Proton", "multiplier effect"] },
    { n: 10, title: "Reducing the gap: tourism in Jamaica and Tanzania", question: "How has the growth of tourism helped Jamaica and Tanzania to develop, and what are its downsides?", keywords: ["tourism", "Jamaica", "Tanzania", "Kilimanjaro", "leakage", "seasonal jobs", "foreign exchange"] },
    { n: 11, title: "Reducing the gap: aid and goat aid", question: "What is aid, what types of aid exist, and is Oxfam's goat aid a sustainable way to help?", keywords: ["aid", "bilateral", "multilateral", "voluntary", "tied", "short-term", "long-term", "goat aid", "NGO"] },
    { n: 12, title: "Reducing the gap: intermediate technology, fair trade, debt relief and microfinance", question: "How do intermediate technology, fair trade, debt relief and microfinance loans help to reduce the development gap?", keywords: ["intermediate technology", "sustainable", "fair trade", "debt relief", "microfinance loans", "HIPC"] },
    { n: 13, title: "Nigeria: a newly emerging economy", question: "Where is Nigeria, what makes it an NEE rather than an LIC or HIC, and why is it important in Africa and the world?", keywords: ["Nigeria", "NEE", "west Africa", "Gulf of Guinea", "Lagos", "Abuja", "oil"] },
    { n: 14, title: "Nigeria's political, social, cultural and environmental context", question: "How has economic change in Nigeria been shaped by its history, its people, its culture and its environment?", keywords: ["colonialism", "independence", "civil war", "Boko Haram", "Nollywood", "Jos Plateau", "Niger Delta"] },
    { n: 15, title: "Nigeria's changing relationship with the wider world", question: "How have Nigeria's trade, oil exports and political links with other countries changed since independence?", keywords: ["exports", "imports", "crude oil", "OPEC", "ECOWAS", "African Union", "United Nations"] },
    { n: 16, title: "TNCs in Nigeria: Shell, Unilever and sweet oil", question: "What advantages and disadvantages do transnational corporations such as Shell bring to Nigeria?", keywords: ["TNC", "Shell", "Unilever", "Niger Delta", "sweet oil", "taxes", "oil spills"] },
    { n: 17, title: "The impacts of international aid in Nigeria", question: "What aid does Nigeria receive, what has it achieved, and why is aid not always used effectively?", keywords: ["emergency aid", "developmental aid", "malaria nets", "corruption", "tied aid", "NGO"] },
    { n: 18, title: "Managing environmental issues in Nigeria", question: "How has rapid economic growth damaged Nigeria's environment, and how can oil spills be prevented?", keywords: ["pollution", "deforestation", "desertification", "Bonga oil spill", "Bodo oil spill", "regulation"] },
    { n: 19, title: "Quality of life in Nigeria", question: "To what extent has economic development improved the quality of life of Nigerian people?", keywords: ["quality of life", "life expectancy", "GDP", "north-south inequality", "multiplier effect"] },
    { n: 20, title: "The changing UK economy: employment structure", question: "What are the four employment sectors, and how has the UK's employment structure changed from 1800 to 2015?", keywords: ["primary", "secondary", "tertiary", "quaternary", "employment structure", "pie chart"] },
    { n: 21, title: "Why the UK economy has changed", question: "How have deindustrialisation, globalisation and government policies changed the UK economy?", keywords: ["deindustrialisation", "globalisation", "privatisation", "state-run industries", "rebalancing", "HS2", "Crossrail"] },
    { n: 22, title: "A post-industrial economy: services, business and science parks", question: "What is a post-industrial economy, which services does the UK sell abroad, and where do service companies locate?", keywords: ["post-industrial economy", "service industry", "information technology", "business park", "science park"] },
    { n: 23, title: "Industry and the environment: Torr Quarry", question: "What impacts does a quarry have on the physical environment, and how is Torr Quarry made more sustainable?", keywords: ["Torr Quarry", "Mendip Hills", "limestone", "habitat loss", "landscaping", "sustainability"] },
    { n: 24, title: "Social and economic change in rural Britain", question: "What are the social and economic impacts of population growth in South Cambridgeshire and population decline in the Outer Hebrides?", keywords: ["South Cambridgeshire", "Outer Hebrides", "population growth", "population decline", "commuter", "affordable housing"] },
    { n: 25, title: "Changing transport infrastructure: roads, rail, ports and airports", question: "How are the UK's roads, railways, ports and airports being improved, and why does this matter for the economy?", keywords: ["smart motorway", "A303", "HS2", "Crossrail", "Liverpool2", "Heathrow"] },
    { n: 26, title: "The north-south divide", question: "What is the evidence for a north-south divide in the UK, why does it exist, and how are enterprise zones, HS2 and LEPs meant to reduce it?", keywords: ["north-south divide", "unemployment", "enterprise zone", "HS2", "Local Enterprise Partnership", "infrastructure"] },
    { n: 27, title: "The UK in the wider world", question: "How is the UK linked to the rest of the world through trade, culture, transport, electronic communications, the EU and the Commonwealth?", keywords: ["trade", "exports", "imports", "culture", "submarine cables", "European Union", "Commonwealth"] }
  ],

  // 16 terms; Connections uses all 16 (four groups, each one chapter's idea). Chapters 3 and 5 teach their key words
  // through pretext.words and the text instead (causes-of-poverty words, migration words, Nigeria words).
  glossary: [
    { term: "GNI", means: "Gross national income: the total value of goods and services a country produces plus money earned from trade, usually given per person.", chapter: "measuring-development" },
    { term: "HDI", means: "Human development index: a score from 0 to 1 that combines life expectancy, years in education and GNI per capita.", chapter: "measuring-development" },
    { term: "life expectancy", means: "The average number of years a person in a country is expected to live.", chapter: "measuring-development" },
    { term: "infant mortality rate", means: "The number of babies who die before their first birthday, per 1000 live births.", chapter: "measuring-development" },
    { term: "birth rate", means: "The number of babies born in a year for every 1000 people in the population.", chapter: "population-change" },
    { term: "death rate", means: "The number of people who die in a year for every 1000 people in the population.", chapter: "population-change" },
    { term: "natural increase", means: "The growth of a population when the birth rate is higher than the death rate, found by subtracting one from the other.", chapter: "population-change" },
    { term: "dependency ratio", means: "The proportion of people below working age (0 to 14) and above it (over 65) compared with those of working age.", chapter: "population-change" },
    { term: "intermediate technology", means: "Simple, low-cost technology that local people can use, repair and afford, suited to their needs and skills.", chapter: "reducing-the-gap" },
    { term: "fair trade", means: "A system that pays producers in poorer countries a fair price for goods such as cocoa, coffee and cotton.", chapter: "reducing-the-gap" },
    { term: "debt relief", means: "Cancelling part or all of the money a poor country owes, so it can spend on development instead of repayments.", chapter: "reducing-the-gap" },
    { term: "microfinance loans", means: "Very small loans given to people in LICs who cannot use banks, so they can start a small business.", chapter: "reducing-the-gap" },
    { term: "deindustrialisation", means: "The decline of manufacturing industry in a country, with factory closures and growth in service jobs instead.", chapter: "uk-economy" },
    { term: "post-industrial economy", means: "An economy in which making goods has become less important and services, information and research have grown.", chapter: "uk-economy" },
    { term: "business park", means: "A large area of office space for many companies, usually on the edge of a city where land is cheaper.", chapter: "uk-economy" },
    { term: "north-south divide", means: "The economic and cultural differences between southern England and the rest of the UK, seen in wages, house prices and jobs.", chapter: "uk-economy" }
  ],

  connections: [
    { group: "Ways to measure development", terms: ["GNI", "HDI", "life expectancy", "infant mortality rate"] },
    { group: "Words on a population graph", terms: ["birth rate", "death rate", "natural increase", "dependency ratio"] },
    { group: "Ways to close the development gap", terms: ["intermediate technology", "fair trade", "debt relief", "microfinance loans"] },
    { group: "The UK's changing economy", terms: ["deindustrialisation", "post-industrial economy", "business park", "north-south divide"] }
  ],

  chapters: [
    /* ───────────── 1 · measuring development ───────────── */
    {
      key: "measuring-development", n: 1, title: "Measuring development: our unequal world",
      lead: "What development means, why total wealth is a poor guide, how GNI and HDI measure a country, how the world is sorted into HICs, NEEs and LICs, and the factors that speed development up or hold it back.",
      covers: [1, 2, 3],
      pretext: {
        words: [
          { word: "development", means: "positive change that makes people's lives better", sentence: "Development means more children in school and fewer babies dying young." },
          { word: "standard of living", means: "how much money and material comfort people have", sentence: "A high standard of living means people can afford food, housing and goods." },
          { word: "quality of life", means: "how good people's lives are, including health, safety and freedom", sentence: "Clean air and the right to vote are part of quality of life." },
          { word: "GNI", means: "gross national income, the money a country earns in a year", sentence: "GNI per capita is the GNI divided by the number of people." },
          { word: "HDI", means: "human development index, a score from 0 to 1", sentence: "The HDI combines health, education and income in one number." },
          { word: "development gap", means: "the difference in living standards between the richest and poorest countries", sentence: "The development gap between Somalia and the UK is very wide." }
        ],
        passage: [
          "Development means positive change that makes life better.",
          "It usually means a higher standard of living and a better quality of life.",
          "Standard of living is about money and the things it buys.",
          "Quality of life is wider: health, safety, education and freedom.",
          "The development gap is the difference between the richest and poorest countries.",
          "Total wealth is not a good way to measure it.",
          "A big country with many people can be rich in total but poor per person.",
          "GNI per capita is an economic measure: income divided by population.",
          "HDI is a social measure that combines life expectancy, education and income.",
          "It gives every country a score between 0 and 1.",
          "Rich countries are called HICs, poor countries LICs.",
          "Fast-growing countries in between, such as India and China, are NEEs."
        ]
      },
      sections: [
        {
          heading: "What development means, and why total wealth misleads",
          paragraphs: [
            "Development means positive change that makes things better. For a country it usually means that people's standard of living and quality of life improve. The two ideas are not the same. Standard of living is about wealth: how much money people have and whether they can afford food, housing and goods. Quality of life is wider and harder to measure: it includes health, education, safety, the quality of the environment and rights such as the vote. A country can raise its standard of living while its quality of life lags behind, for example if factories bring wages but also pollution.",
            "The development gap is the difference in standard of living and wellbeing between the richest and poorest countries in the world. When your class listed the ten richest countries, you probably reached for total wealth. On that measure the United States comes first, then China, Japan and the United Kingdom. But total wealth hides more than it shows. It can hide big differences within a country, where some regions are very rich and others very poor. It ignores the size of the country and its population, so a huge country looks richer than a small one with the same income per person. It ignores national debt, and it says nothing about whether the wealth has come at a cost to the environment.",
            "So geographers use indicators instead: measurable figures that point to how developed a country is. Some are economic, such as GNI. Many are social, such as literacy rate, birth rate, death rate, infant mortality rate and life expectancy. Each has strengths and weaknesses, which is why the exam asks you to use a range of them."
          ],
          tip: "Odd-one-out check: of GDP, GNI, HDI and infant mortality rate, the infant mortality rate is the only purely social indicator. The other three involve wealth."
        },
        {
          heading: "GNI: the economic measure",
          paragraphs: [
            "GNI, gross national income, is the economic measure of development. It is the total value of the goods and services a country produces in a year, plus the extra money it earns from trade with other countries. On its own that favours big countries, so it is nearly always given per capita: the total divided by the population, which gives an average income per person. Comparing GNI per capita is how the World Bank sorts countries into income groups.",
            "GNI per capita has real strengths. It is a single, useful figure for comparing countries, and it is often used to rank them so that aid can be shared fairly. It is fairly easy to calculate from official government figures, and it is a good indicator of the state of the economy and of the services a country can afford. But it also has weaknesses. It is an average, so it hides inequality: it does not show how wealth is distributed between rich and poor people. It can be manipulated by governments that want to appear poor in order to collect more aid. And it leaves out subsistence farming and the informal economy, where people grow their own food or trade without records, which matter enormously in less developed countries."
          ],
          worked: {
            q: "A country has a GNI of 60 billion dollars and a population of 5 million. Work out its GNI per capita.",
            steps: [
              "Per capita means per person, so divide the total income by the number of people.",
              "Write both numbers in full: 60 billion = 60 000 000 000; 5 million = 5 000 000.",
              "Divide: 60 000 000 000 ÷ 5 000 000 = 12 000.",
              "Give the units: the GNI per capita is 12 000 dollars per person."
            ],
            answer: "12 000 dollars per person",
            checks: [{ expr: "60e9/5e6", value: 12000, tol: 0 }]
          },
          tip: "Billions divided by millions gives thousands. If your answer for a GNI per capita is a few dollars or a few billion, the zeros have gone wrong."
        },
        {
          heading: "HDI and the social indicators",
          paragraphs: [
            "The HDI, human development index, is a social measure of development produced by the United Nations. Every country gets a score between 0 and 1, where 1 is the highest. The score combines three things: life expectancy, the number of years people spend in education, and GNI per capita. Because it includes health and education as well as wealth, it is a better guide to quality of life than GNI alone, and it is widely used to compare countries and reveal clear global patterns. An increase in education and health also shows that a country's infrastructure, its schools and hospitals, is improving.",
            "The HDI has its critics too. Data from some developing countries may not be reliable or easy to confirm. Its education figure says nothing about whether all groups in society have access to school. And, like GNI, it is an average for a whole country, so it cannot show unequal distribution between regions or groups. When you compare a world map of HDI with a map of GNI per capita, the two patterns are broadly similar: the richest countries have the highest HDI. The interesting places are where they differ, where a country's income is higher or lower than its health and education would suggest.",
            "Other social indicators are quicker to read. Birth rate is the number of babies born per 1000 people a year; death rate is the number of deaths per 1000 people a year; infant mortality rate is the number of babies who die before the age of one, per 1000 live births; life expectancy is the average age a person is expected to reach; literacy rate is the percentage of adults who can read and write. Plot one of these against another on a scattergraph and you can look for a correlation, a relationship between the two. If the points rise together the correlation is positive; if one falls as the other rises it is negative; a line of best fit shows the trend. HDI and birth rate, for instance, show a negative correlation: as HDI rises, birth rate falls."
          ],
          tip: "When a question says use a range of indicators, name at least two, say what each measures, and say whether it is economic or social."
        },
        {
          heading: "HICs, NEEs and LICs, and what speeds development up",
          paragraphs: [
            "Countries are grouped by their level of development. High income countries (HICs) such as the UK have a high GNI per capita; low income countries (LICs) such as Afghanistan and Somalia have a very low one. In 2013 the World Bank drew the lines at a GNI per capita of 1045 dollars or below for low income and 12 746 dollars or above for high income. Between them sit the newly emerging economies (NEEs), countries such as India and China that have begun to experience rapid economic development, usually through fast industrial growth. Two acronyms name groups of NEEs. BRICS is Brazil, Russia, India, China and South Africa, all at a similar stage of newly advanced development. MINT is Malaysia, Indonesia, Nigeria and Turkey, four countries expected to grow strongly over the coming decade.",
            "Why does one country develop faster than another? Geographers group the factors under four headings. Environmental factors include natural hazards such as earthquakes and hurricanes, which destroy infrastructure and cost money to rebuild. Economic factors include trade and debt: a country that owes a lot or sells only cheap raw materials struggles to invest. Political factors include whether a country has a stable government or is at war. Social factors include access to safe water and education, without which people cannot stay healthy or gain skills. A four-mark question may ask you how countries are grouped by their economic development and their quality of life. Give one way of grouping them, for example income bands worked out from GNI per capita, and say what that tells you about a country; then give a second way, for example HDI, and say what that tells you."
          ],
          tip: "Describe the distribution of LICs on a world map with compass directions and named regions: most low and lower-middle income countries are in sub-Saharan Africa and parts of south and south-east Asia."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these development indicators is a purely social measure, not based on wealth?", options: ["Infant mortality rate", "GDP", "GNI per capita", "Total wealth"], answer: 0, why: "Infant mortality rate counts babies who die before the age of one; it measures health, not money. GDP, GNI and total wealth are all economic.",
          feedback: [
            "",
            "GDP, gross domestic product, is the value of what a country produces: an economic measure. The only indicator here that does not involve money is the infant mortality rate.",
            "GNI per capita is income per person, which is the main economic measure of development. The social measure in this list is the infant mortality rate.",
            "Total wealth is money, so it is economic, and the lesson showed it is not even a good economic measure. The social indicator here is the infant mortality rate."
          ] },
        { kind: "numeric", q: "A country has a GNI of 40 billion dollars and a population of 8 million. What is its GNI per capita, in dollars per person?", answer: 5000, tolerance: 0, units: "dollars per person", check: "40e9/8e6", why: "Per capita means divide by the population: 40 000 000 000 ÷ 8 000 000 = 5000 dollars per person.",
          misconceptions: [
            { answer: 5, says: "You divided 40 by 8 but forgot that one number is in billions and the other in millions. 40 billion ÷ 8 million = 5000 dollars per person.", check: "40/8" },
            { answer: 48, says: "You added the two numbers. Per capita means divide the income by the population: 40 billion ÷ 8 million = 5000.", check: "40+8" },
            { answer: 0.2, says: "You divided the population by the income, the wrong way round. GNI per capita is income ÷ population: 40 billion ÷ 8 million = 5000 dollars per person.", check: "8/40" }
          ] },
        { kind: "gap", q: "The HDI gives every country a score between 0 and ___.", answer: "1", options: ["1", "10", "100"], why: "The human development index runs from 0 (lowest) to 1 (highest), so a country scoring 0.9 is highly developed.",
          feedback: {
            "10": "The HDI is not a mark out of ten. It is a decimal score between 0 and 1, so a very developed country scores around 0.9.",
            "100": "You may be thinking of a percentage, such as a literacy rate. The HDI runs from 0 to 1, so the highest possible score is 1."
          } }
      ],
      modules: [
        {
          title: "Which indicator measures what?",
          task: {
            kind: "match",
            q: "Match each development indicator to what it measures.",
            pairs: [
              ["GNI per capita", "A country's income in a year divided by its population"],
              ["Life expectancy", "The average age a person in the country is expected to live to"],
              ["Infant mortality rate", "The number of babies per 1000 born who die before the age of one"],
              ["Literacy rate", "The percentage of adults who can read and write"],
              ["HDI", "A score from 0 to 1 combining health, education and income"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Look for the word per capita: it always means divided by the population.",
                "Two indicators are about length of life or death: one is an average age, the other counts babies.",
                "Literacy is about reading and writing.",
                "The one that combines three things into a single score is the composite measure."
              ],
              example: {
                q: "Match: birth rate, death rate. Choices: the number of deaths per 1000 people a year; the number of babies born per 1000 people a year.",
                steps: ["Birth rate counts births, so it is the babies born per 1000.", "Death rate counts deaths per 1000 people."],
                answer: "Birth rate: babies born per 1000 people a year. Death rate: deaths per 1000 people a year."
              }
            },
            core: { hint: "Three of these are single social measures, one is a single economic measure, and one combines several measures in one score." },
            stretch: { extend: "Explain which of these five indicators would be most useful for comparing the quality of life, rather than the standard of living, of two countries, and why." }
          },
          explain: "Say, in one sentence, why the HDI is called a composite measure.",
          why: "GNI per capita is the economic measure: income divided by population. Life expectancy, infant mortality and literacy are single social measures. The HDI combines life expectancy, years in education and GNI per capita into one score between 0 and 1."
        },
        {
          title: "HIC, NEE or LIC?",
          task: {
            kind: "mcq",
            q: "Which pair of countries are both newly emerging economies (NEEs)?",
            options: [
              "India and China",
              "The United Kingdom and Afghanistan",
              "Somalia and Afghanistan",
              "The United Kingdom and China"
            ],
            answer: 0,
            feedback: [
              "",
              "The UK is a high income country and Afghanistan a low income country; neither is an NEE. The two NEEs in the list are India and China, both members of BRICS.",
              "Somalia and Afghanistan are both LICs, with very low GNI per capita and little industry. NEEs are the fast-industrialising countries in between, such as India and China.",
              "China is an NEE but the UK is an HIC. The pair that are both NEEs is India and China."
            ]
          },
          contexts: [
            { label: "BRICS", q: "A news report mentions two members of the BRICS group, which are all at a similar stage of newly advanced economic development. Which pair of countries are both NEEs?" },
            { label: "Factory growth", q: "Two countries have moved from farming towards fast-growing manufacturing and are attracting investment, but their incomes are still well below Europe's. Which pair are both NEEs?" },
            { label: "Classifying a map", q: "You are shading a world map of HICs, NEEs and LICs. Which pair of countries should both be shaded as NEEs?" }
          ],
          explain: "Say, in one sentence, what makes a country an NEE rather than an LIC.",
          levels: {
            support: {
              steps: [
                "Recall the three groups: HIC (high income, such as the UK), LIC (low income, such as Afghanistan and Somalia), NEE (in between and growing fast).",
                "Cross out any pair that includes the UK: it is an HIC.",
                "Cross out any pair made only of LICs.",
                "The pair left are both members of BRICS."
              ],
              example: {
                q: "Brazil and the UK: are they both NEEs?",
                steps: ["Brazil is the B in BRICS, so it is an NEE.", "The UK is a high income country.", "So the pair is one NEE and one HIC, not two NEEs."],
                answer: "No: Brazil is an NEE but the UK is an HIC."
              }
            },
            core: { hint: "BRICS and MINT list NEEs. Which pair are both in BRICS?" },
            stretch: { extend: "Nigeria is in MINT but has a GNI per capita far below China's. Explain why it can still be classed as an NEE rather than an LIC." }
          },
          why: "India and China are both in BRICS: newly emerging economies that have moved from agriculture towards rapid industrial growth. The UK is an HIC; Afghanistan and Somalia are LICs."
        },
        {
          title: "Why GNI alone is not enough",
          task: {
            kind: "written",
            q: "Using at least two development indicators, explain why GNI per capita on its own can give a misleading picture of a country's development. (6 marks)",
            marks: 6,
            criteria: [
              "Explains what GNI per capita measures and that it is an economic average",
              "Gives at least one weakness of GNI per capita (hides inequality, ignores the informal economy, can be manipulated)",
              "Names at least one social indicator (for example HDI, life expectancy, infant mortality rate, literacy) and says what it shows",
              "Explains how the social indicator reveals something about quality of life that GNI misses",
              "Uses accurate geographical terms and a clear, logical sequence"
            ],
            model: "GNI per capita is a country's income in a year divided by its population, so it is an economic average. It is useful for ranking countries, but as an average it hides inequality: a country can have a high GNI per capita while most people stay poor, because wealth is concentrated in a few regions or groups. It also leaves out subsistence farming and the informal economy, which are large in many LICs, so it can understate how people really live. Social indicators fill the gap. Infant mortality rate shows how many babies die before the age of one per 1000 births, which reflects healthcare and clean water rather than money. The HDI combines life expectancy, years in education and GNI per capita in a score from 0 to 1, so it describes quality of life as well as standard of living. Two countries with similar GNI per capita can have very different HDI scores, which is why a range of indicators is needed."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: define GNI per capita and call it an economic average.",
                "Sentence 2: give one weakness, for example that an average hides inequality.",
                "Sentence 3: name a social indicator and say what it measures.",
                "Sentence 4: say what that indicator shows that GNI cannot.",
                "Last sentence: conclude that a range of indicators gives a fuller picture."
              ],
              example: {
                q: "In two sentences, explain one weakness of using total wealth to measure development, and one indicator that helps.",
                steps: ["Say what total wealth ignores.", "Name a better indicator and why."],
                answer: "Total wealth ignores population size, so a huge country looks richer than a small one with the same income per person. GNI per capita divides by population, so it compares countries more fairly."
              }
            },
            core: { hint: "Structure: what GNI per capita is, one thing it hides, one social indicator and what it shows, then a one-line conclusion." },
            stretch: { extend: "Add a sentence on a weakness that GNI per capita and the HDI share, and suggest one way a geographer could get round it." }
          },
          explain: "Say, in one sentence, what an average such as GNI per capita cannot show.",
          why: "A top answer separates standard of living (GNI) from quality of life (social indicators), names a specific weakness of GNI per capita, and uses a named social indicator to show what it misses."
        }
      ]
    },

    /* ───────────── 2 · population change ───────────── */
    {
      key: "population-change", n: 2, title: "Population change and the five stages",
      lead: "How a population changes as a country develops: the demographic transition model stage by stage, why birth and death rates rise and fall, what a population pyramid shows, and what the model cannot tell you.",
      covers: [4, 5, 6],
      pretext: {
        words: [
          { word: "birth rate", means: "the number of babies born each year for every 1000 people", sentence: "A high birth rate means many babies are born each year." },
          { word: "death rate", means: "the number of people who die each year for every 1000 people", sentence: "Better healthcare makes the death rate fall." },
          { word: "natural increase", means: "population growth when more people are born than die", sentence: "Natural increase is the birth rate minus the death rate." },
          { word: "model", means: "a simple picture of how something usually changes", sentence: "A model shows the general pattern, not one real country." },
          { word: "population pyramid", means: "a graph showing how many people are in each age group", sentence: "A population pyramid has two bars for every age group, male and female." }
        ],
        passage: [
          "The demographic transition model shows how a population changes over time.",
          "It is called the DTM for short.",
          "It is a model, so it does not follow one real country.",
          "The DTM has five stages.",
          "In stage 1 the birth rate and the death rate are both high.",
          "The population stays low and steady.",
          "In stage 2 the death rate falls but the birth rate stays high.",
          "The population grows quickly.",
          "In stage 3 the birth rate falls too, so growth slows down.",
          "In stage 4 both rates are low and the population is high and steady.",
          "In stage 5 the birth rate drops below the death rate.",
          "The population begins to fall.",
          "A population pyramid shows how many people are in each age group."
        ]
      },
      sections: [
        {
          heading: "The five stages of the demographic transition model",
          paragraphs: [
            "The demographic transition model, or DTM, is a way of showing how a population alters as a country develops. Demographic means to do with people and numbers; transition means a change from one state to another. It is a model, which means it is not designed to follow one specific country or area: it shows the pattern that populations usually follow. It is broken into five stages, each with its own conditions, and you can judge a country's level of development by working out where it would sit on the model.",
            "In stage 1 the birth rate is high, with many babies being born, and the death rate is high too, with many people dying young. Because the two cancel each other out, the total population stays low and steady; it may rise and fall with war, famine or disease. Very few places in the world are still at this stage, although small groups living in the Amazon rainforest may be. In stage 2 the death rate falls while the birth rate stays high, so the total population begins to grow rapidly. Afghanistan is a stage 2 country, and this is common in many low income countries. In stage 3 the birth rate falls as well, and the death rate keeps falling but more slowly. The population still grows, but more slowly than before. Nigeria, a newly emerging economy, is the example to remember.",
            "In stage 4 the birth rate stays low and the death rate is low, so the population is high and steady. The birth rate can rise and fall with the economy: when times are good, families feel they can afford more children. The United States is a stage 4 country, with healthcare available at a cost and a high number of women following careers. In stage 5 the birth rate drops under the death rate for the first time. The death rate creeps up because the population is ageing, and the overall population starts to fall. There may be migration into the country to make up the shortfall. Japan is the example to remember, and Germany is at this stage too."
          ],
          tip: "Learn the stages by what the two lines are doing, not by the numbers: stage 1 both high, stage 2 death rate falling, stage 3 birth rate falling, stage 4 both low, stage 5 birth rate below death rate."
        },
        {
          heading: "Birth rates, death rates and natural increase",
          paragraphs: [
            "Birth rate is the number of births in a year for every 1000 people in the population. Death rate is the number of deaths in a year for every 1000 people. Natural increase is what you get when you subtract the death rate from the birth rate: it is the growth of the population from births and deaths alone, with migration left out. If the death rate is larger than the birth rate the answer is negative, and geographers call it natural decrease. That is what has happened in stage 5.",
            "Why are birth rates high in some countries and low in others? A birth rate stays high where children are needed to work on the land, and where having children gives parents added status in the community. A birth rate falls where it costs a lot to feed, clothe and educate children, and where the government looks after people through pensions and healthcare, so families do not need children to support them in old age. Death rates are high where there is a lack of food and clean water, and fall as healthcare, diet and sanitation improve. Education matters in both columns: as women become educated and take up careers, the birth rate falls."
          ],
          worked: {
            q: "A country has a birth rate of 38 per 1000 and a death rate of 14 per 1000. Work out its natural increase per 1000 people.",
            steps: [
              "Natural increase means births minus deaths, so set up a subtraction.",
              "Both rates are already per 1000 people, so you can subtract them directly.",
              "Work it out: 38 − 14 = 24.",
              "Give the units: the natural increase is 24 per 1000 people per year."
            ],
            answer: "24 per 1000 people",
            checks: [{ expr: "38-14", value: 24, tol: 0 }]
          },
          tip: "If your natural increase comes out larger than the birth rate, you have added instead of subtracting."
        },
        {
          heading: "Reading a population pyramid",
          paragraphs: [
            "A population pyramid shows the structure of a population. The bars are age groups, stacked from the youngest at the bottom to the oldest at the top, and they are split down the middle into males on one side and females on the other. The length of each bar is the percentage of the whole population in that age and sex group, so you can read a figure straight off it: a bar reaching 4 on the female side at ages 25 to 29 tells you that 4 in every 100 people in the country are women of that age.",
            "A pyramid for a high income country has a narrow base, bulges in the middle and stays fairly wide right at the top. The narrow base means the birth rate is low; the wide middle means people are living longer and fewer babies are dying; the wide top means a long life expectancy, with more older women than men. Italy and Japan have pyramids this shape. A pyramid for a low income country has a wide base, which means a large proportion of young people, and becomes narrow very quickly towards the top, which means few elderly people and a lower life expectancy. Kenya, Ethiopia and Vietnam have pyramids this shape.",
            "The dependency ratio compares the people who are not of working age, those aged 0 to 14 and those over 65, with the people who are. A wide-based pyramid and a wide-topped pyramid both give a high dependency ratio, but for opposite reasons: in the first case a country has many children to feed and educate, and in the second it has many pensioners to support. That is why the shape of the pyramid matters so much to a government planning schools, hospitals and pensions."
          ],
          tip: "Describe a pyramid in three moves: the base, the middle, the top. For each one say what the shape is and what it tells you about births, deaths or life expectancy."
        },
        {
          heading: "What the model cannot show",
          paragraphs: [
            "The demographic transition model is useful, but it has real limitations and the exam likes to ask about them. It was developed after studying high income countries, so some low income countries may not follow the same pattern. It assumes that every country will pass through the same five stages, and that the reasons for high and low birth and death rates are the same everywhere, which they are not. It has no time scale, so it cannot tell you how long a stage lasts. It leaves out migration altogether, even though migration can change a population faster than births and deaths. It cannot show sudden swings caused by war, famine, a natural disaster or a disease epidemic such as AIDS, and it says nothing about the part a government plays, for good or ill.",
            "Japan shows why stage 5 is more than a line on a graph. Its population is shrinking and ageing at the same time, so the number of elderly people who depend on the state is rising while the number of workers paying tax is falling. That is a problem for pensions, for healthcare and for the economy as a whole. It can also be an opportunity: fewer children can mean more spent on each one, and businesses that serve older people grow. Japanese families face real barriers to having more children, from the cost of housing to long working hours, and governments are often reluctant to encourage immigration to fill the gap."
          ],
          tip: "A six-mark question on the model wants the pattern and the exception: describe what the stage shows, name a country at that stage, then say why a real country might not fit."
        }
      ],
      gate: [
        { kind: "mcq", q: "A country has a high birth rate and a high death rate, so its population stays low and does not grow much. Which stage of the demographic transition model is it in?", options: ["Stage 1", "Stage 2", "Stage 3", "Stage 5"], answer: 0, why: "In stage 1 both rates are high, so they cancel out and the population stays low and steady. Only a few groups in the world, such as people living deep in the Amazon rainforest, are still at this stage.",
          feedback: [
            "",
            "In stage 2 the death rate has already fallen while the birth rate stays high, which is why the population grows rapidly. Here both rates are still high, so this is stage 1.",
            "In stage 3 the birth rate has begun to fall and growth is slowing. A population that is not growing at all, with both rates high, is in stage 1.",
            "In stage 5 the birth rate has fallen below the death rate and the population is shrinking. A steady, low population with both rates high is stage 1."
          ] },
        { kind: "numeric", q: "A country has a birth rate of 32 per 1000 and a death rate of 11 per 1000. What is its natural increase, per 1000 people?", answer: 21, tolerance: 0, units: "per 1000 people", check: "32-11", why: "Natural increase is the birth rate minus the death rate: 32 − 11 = 21 per 1000 people a year.",
          misconceptions: [
            { answer: 43, says: "You added the two rates. Natural increase is births minus deaths, so 32 − 11 = 21 per 1000 people.", check: "32+11" },
            { answer: -21, says: "You subtracted the other way round, death rate minus birth rate. Births come first: 32 − 11 = 21 per 1000 people.", check: "11-32" },
            { answer: 0.34375, says: "You divided one rate by the other. Natural increase is a subtraction, not a ratio: 32 − 11 = 21 per 1000 people.", check: "11/32" }
          ] },
        { kind: "gap", q: "A population pyramid with a wide base shows that the country has a large proportion of ___ people.", answer: "young", options: ["young", "elderly", "working"], why: "The bars at the bottom of a pyramid are the youngest age groups, so a wide base means a large proportion of children and a high birth rate.",
          feedback: {
            "elderly": "The elderly are at the top of a pyramid, not the bottom. A wide top means a long life expectancy; a wide base means many children.",
            "working": "People of working age sit in the middle of a pyramid. The base is the youngest age groups, so a wide base means many young people."
          } }
      ],
      modules: [
        {
          title: "Put the five stages in order",
          task: {
            kind: "order",
            q: "Put the five stages of the demographic transition model in the correct order, from stage 1 to stage 5.",
            items: [
              "Stage 1: the birth rate and the death rate are both high, so the population stays low and steady.",
              "Stage 2: the death rate falls while the birth rate stays high, so the population grows quickly.",
              "Stage 3: the birth rate falls as well, so the population still grows but more slowly.",
              "Stage 4: the birth rate and the death rate are both low, so the population is high and steady.",
              "Stage 5: the birth rate falls below the death rate, so the population begins to fall."
            ]
          },
          contexts: [
            { label: "A country's story", q: "A country's records show its deaths falling first, then its births, until recently more people died than were born. Put the five stages in the order that story passes through them.", why: "Reading the model as a story helps: deaths fall before births, every time." },
            { label: "An unlabelled graph", q: "You are given the demographic transition graph with its stage numbers rubbed out. Put the five stage descriptions in order so they match the graph from left to right." },
            { label: "Sorting cards", q: "You have five cards, one for each stage of the demographic transition model, face down on the desk. Put them in order from the least developed stage to the most developed." }
          ],
          levels: {
            support: {
              steps: [
                "Find the stage where nothing is growing and both rates are high: that is the start.",
                "Next comes the stage where only the death rate has fallen, which is why growth is fastest.",
                "Then the birth rate starts to fall too, so growth slows.",
                "Then both rates are low and the population levels off.",
                "Last comes the stage where the birth rate drops below the death rate and the population falls."
              ],
              example: {
                q: "Put these three stages of a country's healthcare in order: hospitals and clean water for everyone; no doctors and no clean water; clean water for most people but few doctors.",
                steps: ["Start with the least developed situation.", "Then the partial improvement.", "Then the full improvement."],
                answer: "No doctors and no clean water; clean water for most people but few doctors; hospitals and clean water for everyone."
              }
            },
            core: { hint: "The death rate always falls before the birth rate. That single rule fixes stages 2 and 3." },
            stretch: { extend: "Explain why the gap between the two lines, not the height of either, tells you how fast the population is growing." }
          },
          explain: "Say, in one sentence, why the population grows fastest in stage 2 and not in stage 1.",
          why: "The order is stage 1 (both rates high, population low and steady), stage 2 (death rate falls, population grows quickly), stage 3 (birth rate falls, growth slows), stage 4 (both rates low, population high and steady), stage 5 (birth rate below death rate, population falls). The death rate always falls first, because healthcare, food and clean water improve before family sizes change."
        },
        {
          title: "Which country is at stage 5?",
          task: {
            kind: "mcq",
            q: "Which country is the example of a population at stage 5, where the birth rate has fallen below the death rate and the total population is falling?",
            options: ["Japan", "Afghanistan", "Nigeria", "The United States"],
            answer: 0,
            feedback: [
              "",
              "Afghanistan is the stage 2 example: its death rate has fallen but its birth rate is still high, so its population is growing rapidly. The stage 5 country is Japan.",
              "Nigeria is the stage 3 example, a newly emerging economy whose birth rate has started to fall but whose population is still growing. The stage 5 country is Japan.",
              "The United States is the stage 4 example, with both rates low and a steady population. The country whose population is actually falling is Japan."
            ]
          },
          levels: {
            support: {
              steps: [
                "Stage 5 means the population is falling, not just growing slowly.",
                "Cross out any country whose population is still growing quickly.",
                "Cross out the country used as the stage 4 example, where the population is steady.",
                "The one left has an ageing population and a shrinking total."
              ],
              example: {
                q: "Which country is the example of a stage 2 population, where the death rate has fallen but the birth rate is still high?",
                steps: ["Stage 2 means fast growth.", "Look for the low income country in the list."],
                answer: "Afghanistan."
              }
            },
            core: { hint: "Only one of these four countries has more deaths than births each year." },
            stretch: { extend: "Germany is also placed at stage 5. Explain what Germany and Japan have in common that puts them there, and name one thing a government in that position can do about it." }
          },
          explain: "Say, in one sentence, what happens to the two lines on the model at stage 5.",
          why: "Japan is the stage 5 example: its birth rate has fallen below its death rate, the death rate has risen slightly because the population is ageing, and the total population is falling. Afghanistan is stage 2, Nigeria stage 3 and the United States stage 4."
        },
        {
          title: "Reading a stage from the evidence",
          task: {
            kind: "written",
            q: "A country's birth rate is falling slowly, its death rate has already fallen a long way, and its population is still growing but more slowly than it was. Explain what this tells you about the country's stage on the demographic transition model and about its level of development. (6 marks)",
            marks: 6,
            criteria: [
              "Names the stage (stage 3) and justifies it from the evidence given",
              "Explains what is happening to the birth rate and the death rate at that stage",
              "Explains why the population is still growing even though the birth rate is falling",
              "Links the stage to a level of development, naming the newly emerging economy example",
              "Uses accurate terms (birth rate, death rate, natural increase) and a clear sequence"
            ],
            model: "The country is at stage 3 of the demographic transition model. The death rate fell first, as healthcare, diet and clean water improved, and it is now low. The birth rate has begun to fall as well, because children cost money to feed, clothe and educate and because more women are educated and working, but it is still above the death rate. That is why the population is still growing: natural increase is positive, just smaller than it was in stage 2. A country at stage 3 is usually a newly emerging economy, moving from farming towards industry, and Nigeria is the example to use. Its large young population is entering working age, which is one reason industry can grow quickly there."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: name the stage.",
                "Sentence 2: say what the death rate has done, and why.",
                "Sentence 3: say what the birth rate is doing, and why.",
                "Sentence 4: explain why the population still grows, using the words natural increase.",
                "Last sentence: say what kind of country is usually at that stage and name the example."
              ],
              example: {
                q: "In two sentences, say which stage has a steady, high population with both rates low, and name the country used as the example.",
                steps: ["Both low and steady means the population has levelled off.", "Name the high income example."],
                answer: "Stage 4, where the birth rate and the death rate are both low and the population is high and steady. The United States is the example."
              }
            },
            core: { hint: "Work from the evidence to the stage, then from the stage to the level of development. The phrase natural increase will earn you a mark." },
            stretch: { extend: "Add a sentence explaining one reason a real country might not fit the stage you have chosen, using one limitation of the model." }
          },
          explain: "Say, in one sentence, how you can tell stage 3 from stage 2 using only the birth rate.",
          why: "A top answer reads the evidence into the model: death rate already low (so not stage 1 or 2), birth rate falling but still higher than the death rate (so not stage 4 or 5), population still growing but more slowly. That is stage 3, typical of a newly emerging economy such as Nigeria."
        }
      ]
    },

    /* ───────────── 3 · uneven development ───────────── */
    {
      key: "uneven-development", n: 3, title: "Why development is uneven, and what follows",
      lead: "The physical and human reasons some countries stay poor, and the three consequences the course asks you to know: disparities in wealth, disparities in health, and international migration.",
      covers: [7, 8],
      pretext: {
        words: [
          { word: "landlocked", means: "having no coastline of its own", sentence: "A landlocked country must send its exports through a neighbour." },
          { word: "primary products", means: "raw materials sold just as they come out of the ground or field", sentence: "Cocoa, copper and timber are primary products." },
          { word: "colony", means: "a country that was ruled and used by another country", sentence: "Nigeria was a colony of the United Kingdom." },
          { word: "disparity", means: "a large and unfair difference between two things", sentence: "There is a disparity in health between rich and poor countries." },
          { word: "refugee", means: "someone forced to leave their country by war or disaster", sentence: "A refugee has crossed a border to find safety." }
        ],
        passage: [
          "Some countries are much poorer than others.",
          "The reasons are partly physical and partly human.",
          "Physical reasons include being landlocked, with no coast for trade.",
          "Drought, floods and storms ruin crops and destroy roads.",
          "Disease and pests kill livestock and weaken the workforce.",
          "A lack of clean water keeps people ill and away from school.",
          "Human reasons include being ruled as a colony in the past.",
          "After independence, some countries had civil wars and corrupt governments.",
          "Many poorer countries sell primary products at prices that rise and fall.",
          "That makes it hard to plan for the future.",
          "Uneven development has three main results.",
          "Wealth and health are very unequal between countries.",
          "Many people also move to another country to find a better life."
        ]
      },
      sections: [
        {
          heading: "Physical causes: what the land itself does",
          paragraphs: [
            "Development is uneven partly because the physical world is uneven. A landlocked country has no coastline of its own, so it is cut off from sea trade, and sea trade matters enormously for economic growth: goods must cross a neighbour's territory and pay for the privilege. Extreme weather is the second physical cause. Drought, floods and tropical storms ruin crops and wreck infrastructure, and it is expensive both to protect an area beforehand and to rebuild afterwards. You could argue that human-caused climate change is making this worse, which shows how easily a physical cause becomes partly human.",
            "Disease and pests are the third. Climate-related diseases and pests destroy livestock and cause early deaths among people, which shrinks the workforce. Humans may be partly to blame for spreading pests, and technology can help to solve the problem, so again the line is blurred. The fourth is a lack of adequate supplies of clean water, which affects farming and the people who live there. Where families must travel to collect clean water, there is less time left for work or school, and dirty water causes illness, which damages the economy in turn. In an area with very low rainfall this is a physical problem; in an area with rain but no pipes or treatment works it is a human one.",
            "When a keyword starter asks you to spot the odd one out from landlocked, climatic hazards, natural resources and governance, the answer is governance: it is the human factor and the other three are physical."
          ],
          tip: "If a cause could be either, say so and explain why. Examiners reward a pupil who writes that clean water shortage is physical in a dry region but human where the pipes were never built."
        },
        {
          heading: "Human and historical causes",
          paragraphs: [
            "The deepest human cause is history. Many low income countries and newly emerging economies were once colonies, ruled and used by another country, and they can struggle after gaining independence. Power struggles and corrupt political systems have led to civil wars, and the fallout from war has a devastating effect on a country's ability to build its own economy. Money that should pay for schools and hospitals disappears, and foreign companies will not invest where the rules keep changing.",
            "Trade is the second human cause. Exporting primary products, raw materials sold as they come, tends to be one of the main ways low income countries earn money. It is a volatile market: prices rise and fall often, and supply and demand for raw materials are unpredictable, so a government cannot be sure of next year's income and cannot plan. Manufacturing can be just as hard a bargain. Many low income countries rely on making goods for companies based elsewhere. The work is often low skilled and low paid, rich countries keep their costs down by having products made in low income countries and newly emerging economies, and the profit returns to the high income country. Debt makes everything harder, because repayments take money that could have been invested.",
            "Notice how the causes feed each other. A country held back by colonial rule may have borrowed heavily at independence; the debt forces it to export cheap primary products; the volatile price leaves nothing to spend on education; and without education it cannot move into better-paid industry. This is sometimes called a cycle of poverty, and breaking into it is what the strategies in the next chapter try to do."
          ],
          tip: "Learn one physical and one human cause really well, with an example each, rather than eight you can only name."
        },
        {
          heading: "Disparities in wealth and health",
          paragraphs: [
            "The first consequence of uneven development is a disparity in wealth, and the figures are startling. In 2014 the fastest growth in wealth was in North America, which holds 35% of total global wealth, and that wealth is owned by just over 5% of the world's adult population. Africa's share of global wealth is very small, about 1%. Personal wealth in India and China has quadrupled since 2000, yet their share of global wealth is still well below their share of the world's people, and China has had the highest recorded growth of any newly emerging economy since 2000. The most developed countries enjoy the greatest levels of wealth, measured in GNI. The United States is not the world's richest country per person, but it is the world's most important economic engine, above all for creating jobs.",
            "The second consequence is a disparity in health, and the clearest way to see it is to ask who dies. In low income countries 4 in every 10 deaths are among children under 15 years old, and only 2 in every 10 are among people aged 70 and over. In high income countries the pattern is almost exactly reversed: 7 in every 10 deaths are among people aged 70 and over, and only 1 in every 100 deaths is a child under 15. The causes differ too. In high income countries the main causes of death are chronic diseases such as heart and lung disease, cancer, dementia and diabetes, and lung infections are the only major infectious cause. In low income countries infectious diseases are the main cause: lung infections, diarrhoea-related diseases, malaria and tuberculosis together account for about a third of all deaths, and complications in childbirth are one of the main causes of death among children under 5.",
            "Malaria is the example to hold on to. It is carried by mosquitoes, it is preventable and it is curable, yet in Africa one child dies of it every minute, and of the half a million or more deaths it caused in 2013, Africa accounted for 80%."
          ],
          worked: {
            q: "In low income countries about 4 in every 10 deaths are of children under 15. In high income countries only about 1 in every 100 deaths is. Work out each as a percentage of all deaths, and then how many times larger the first is.",
            steps: [
              "Turn 4 in 10 into a percentage: 4 ÷ 10 × 100 = 40%.",
              "Turn 1 in 100 into a percentage: 1 ÷ 100 × 100 = 1%.",
              "Compare the two by dividing: 40 ÷ 1 = 40.",
              "Write it as a sentence: 40% against 1%, which is 40 times larger."
            ],
            answer: "40% in low income countries against 1% in high income countries, which is 40 times larger",
            checks: [{ expr: "(4/10*100)/(1/100*100)", value: 40, tol: 0 }]
          },
          tip: "Turn every out-of-ten and out-of-a-hundred figure into a percentage before you compare it. Mixing the two is the commonest slip in this topic."
        },
        {
          heading: "The third consequence: international migration",
          paragraphs: [
            "Where development is uneven, people move. Migration is simply the movement of people from one place to another. An immigrant is someone who moves into a country and an emigrant is someone who moves out of one. An economic migrant moves voluntarily to seek a better life, such as better-paid work, education or healthcare. A refugee is forced to leave their country by civil war or a natural disaster. A displaced person is also forced from home but stays inside their own country. Those last two are easy to confuse and the exam rewards getting them right.",
            "The course uses recent movements as its examples. In the last few years hundreds of thousands of refugees have left Syria, Afghanistan and Iraq looking for a better life in Europe; 4 million people have fled Syria's civil war since 2011, many of them housed in temporary camps in Turkey, Jordan and Lebanon where there is little work and little prospect of anything better. An estimated 1.1 million migrants entered Germany in 2015, after Germany announced that it would offer asylum to Syrian refugees who reached it. Since 2004 over 1.5 million migrants have moved to the United Kingdom, around two thirds of them from Poland, where wages are about one fifth of British wages.",
            "What follows for the country they arrive in? Most migrants pay taxes into their new country's economy and are willing to do manual work that others will not. The United Kingdom has a long history of accepting migrants and has gained from being multicultural in many areas. On the other hand, migrants often send part of their wages home to support family, so that money leaves the country they are working in, and where large numbers settle in one place they can put pressure on healthcare and education services. A good answer gives both sides."
          ],
          tip: "Refugee means across a border; displaced person means still inside the country. Say the word border out loud when you are deciding."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is a physical cause of uneven development?", options: ["Being landlocked", "A corrupt government", "Having been ruled as a colony", "Selling primary products cheaply"], answer: 0, why: "Being landlocked is a feature of the land itself: no coastline means no sea trade of a country's own. The other three are human causes, political or economic.",
          feedback: [
            "",
            "Corruption is a political problem, made by people, so it is a human cause. The physical cause in this list is being landlocked, which is about the shape of the land.",
            "Colonial rule is a historical and political cause, made by people. Being landlocked is the one caused by the physical geography of the country.",
            "Selling primary products cheaply is an economic cause: it is about trade and prices, not about the land. Being landlocked is the physical cause here."
          ] },
        { kind: "numeric", q: "In high income countries about 7 in every 10 deaths are of people aged 70 or over. In low income countries the figure is about 2 in every 10. Write both as percentages of all deaths and work out the difference, in percentage points.", answer: 50, tolerance: 0, units: "percentage points", check: "7/10*100 - 2/10*100", why: "7 in 10 is 70% and 2 in 10 is 20%, so the difference is 70 − 20 = 50 percentage points.",
          misconceptions: [
            { answer: 5, says: "You subtracted 2 from 7 without turning the figures into percentages first. 7 in 10 is 70% and 2 in 10 is 20%, so the difference is 50 percentage points.", check: "7-2" },
            { answer: 90, says: "You added the two percentages instead of finding the difference between them. 70% − 20% = 50 percentage points.", check: "7/10*100 + 2/10*100" },
            { answer: 3.5, says: "You divided 7 by 2, which tells you how many times larger one is, not the difference. The difference is 70% − 20% = 50 percentage points.", check: "7/2" }
          ] },
        { kind: "gap", q: "A person who is forced to leave home but stays inside their own country is called a ___ person.", answer: "displaced", options: ["displaced", "economic", "voluntary"], why: "A displaced person is forced from home but has not crossed a border. Someone forced to leave the country altogether is a refugee.",
          feedback: {
            "economic": "An economic migrant moves by choice, to find better pay, education or healthcare, and usually crosses a border. Someone forced from home who stays in their own country is a displaced person.",
            "voluntary": "Voluntary describes a move someone chooses to make, which is the opposite of being forced. Someone forced from home but still inside their own country is a displaced person."
          } }
      ],
      modules: [
        {
          title: "Six words for moving",
          task: {
            kind: "match",
            q: "Match each migration word to its meaning.",
            pairs: [
              ["Migration", "The movement of people from one place to another"],
              ["Immigrant", "A person who moves into a country"],
              ["Emigrant", "A person who moves out of a country"],
              ["Economic migrant", "A person who moves by choice to seek a better life, such as better pay or schooling"],
              ["Refugee", "A person forced to leave their country by civil war or a natural disaster"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the widest word: one of them simply means people moving, with no reason attached.",
                "Two of them are a pair: one means moving in, one means moving out. The letter i starts both in and immigrant.",
                "One of them says the person had a choice.",
                "One of them says the person had no choice and left the country."
              ],
              example: {
                q: "Match: displaced person, asylum. Choices: safety given by a country to someone fleeing danger; a person forced from home who stays inside their own country.",
                steps: ["A displaced person has not crossed a border.", "Asylum is what a country grants."],
                answer: "Displaced person: a person forced from home who stays inside their own country. Asylum: safety given by a country to someone fleeing danger."
              }
            },
            core: { hint: "Two of these are about direction (in and out), one is about choice, one is about force, and one is the general word." },
            stretch: { extend: "A family leaves Syria because of the civil war and settles in Germany, where both parents find work. Explain which two of these words could fairly be used about them, and why one of them fits better." }
          },
          explain: "Say, in one sentence, the difference between a refugee and a displaced person.",
          why: "Migration is the movement of people from one place to another. An immigrant moves in, an emigrant moves out. An economic migrant chooses to move for a better life; a refugee is forced to leave the country by war or disaster. A displaced person, which is not in this list, is forced from home but stays inside their own country."
        },
        {
          title: "How far apart are the shares?",
          task: {
            kind: "numeric",
            q: "Africa's share of the world's wealth is about 1%. North America's share is 35%. How many times bigger is North America's share than Africa's?",
            answer: 35,
            tolerance: 0,
            units: "times",
            check: "NAM_WEALTH_PCT/AFRICA_WEALTH_PCT",
            why: "Divide the larger share by the smaller: 35 ÷ 1 = 35, so North America's share of global wealth is 35 times Africa's.",
            misconceptions: [
              { answer: 34, says: "You found the difference by subtracting. How many times bigger needs a division: 35 ÷ 1 = 35.", check: "35-1" },
              { answer: 36, says: "You added the two shares. How many times bigger means divide the larger by the smaller: 35 ÷ 1 = 35.", check: "35+1" }
            ]
          },
          contexts: [
            { label: "A pie chart", q: "A pie chart of global wealth gives Africa a slice of about 1% and North America a slice of 35%. How many times bigger is the North American slice?", check: "NAM_WEALTH_PCT/AFRICA_WEALTH_PCT", why: "Reading the two slices off the chart and dividing gives the same answer: 35 ÷ 1 = 35 times." },
            { label: "A headline", q: "A news report says Africa holds about 1% of the world's wealth while North America holds 35%. A pupil asks how many times richer that makes North America's share. What is the answer?", check: "NAM_WEALTH_PCT/AFRICA_WEALTH_PCT" },
            { label: "Exam data table", q: "An exam resource lists the share of global wealth held by each continent: Africa about 1%, North America 35%. Calculate how many times bigger North America's share is.", check: "NAM_WEALTH_PCT/AFRICA_WEALTH_PCT" }
          ],
          levels: {
            support: {
              steps: [
                "How many times bigger always means divide, never subtract.",
                "Put the larger number on top: 35 ÷ 1.",
                "Work it out: 35.",
                "Say it as a sentence, with the word times in it."
              ],
              example: {
                q: "One region holds 24% of the world's wealth and another holds 3%. How many times bigger is the first share?",
                steps: ["Divide the larger by the smaller.", "24 ÷ 3 = 8."],
                answer: "8 times bigger",
                checks: [{ expr: "24/3", value: 8, tol: 0 }]
              }
            },
            core: { hint: "How many times bigger is a division, not a subtraction. Larger number on top." },
            stretch: { extend: "Africa holds about 1% of global wealth but far more than 1% of the world's people. Explain why comparing shares of wealth with shares of population tells you more than either figure on its own." }
          },
          explain: "Say, in one sentence, why how many times bigger needs a division and not a subtraction.",
          why: "35 ÷ 1 = 35. North America's share of global wealth is 35 times Africa's, even though Africa has far more people. That gap is what geographers mean by a disparity in wealth."
        },
        {
          title: "From uneven development to migration",
          task: {
            kind: "written",
            q: "Explain how uneven development between countries leads people to migrate from one country to another, and describe the effects this has on the country they move to. (9 marks)",
            marks: 9,
            criteria: [
              "Defines uneven development or the development gap and names migration as one of its consequences",
              "Explains at least two reasons people move, separating a forced move from a chosen one",
              "Uses at least one named example with a figure from the course",
              "Gives at least two effects on the receiving country, one positive and one negative",
              "Reaches a judgement rather than stopping at a list",
              "Uses accurate terms (economic migrant, refugee, displaced person) and a clear structure"
            ],
            model: "Uneven development means that standards of living and wellbeing differ sharply between the richest and poorest countries, and one consequence is that people move between them. Some moves are chosen. An economic migrant moves voluntarily for better-paid work, education or healthcare: since 2004 over 1.5 million migrants have moved to the United Kingdom, around two thirds of them from Poland, where wages are roughly a fifth of British wages, so the pull of higher pay is clear. Other moves are forced. A refugee leaves because of civil war or disaster, and 4 million people have fled Syria since 2011, many into camps in Turkey, Jordan and Lebanon where there is no work. An estimated 1.1 million migrants entered Germany in 2015. For the receiving country the effects cut both ways. Most migrants pay taxes and are willing to do manual work that is otherwise hard to fill, and areas with many migrants have gained culturally. At the same time migrants often send wages home to support family, so some of the money earned leaves the economy, and where large numbers settle in one area they can add pressure to healthcare and schools. On balance the receiving country gains economically, because it gains workers and taxpayers it did not have to educate, but the gains and the pressures fall on different places, which is why the effects are argued about locally rather than nationally."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1: define uneven development and say that migration is one of its three consequences.",
                "Paragraph 2: explain a chosen move, with a named example and a figure.",
                "Paragraph 3: explain a forced move, with a named example and a figure.",
                "Paragraph 4: give one positive and one negative effect on the receiving country.",
                "Last sentence: reach a judgement about whether the receiving country gains overall."
              ],
              example: {
                q: "In three sentences, explain why a doctor might emigrate from a low income country to a high income one, and name one effect on the country she leaves.",
                steps: ["Give the pull factor.", "Give the push factor.", "Name the effect on the country of origin."],
                answer: "She can earn far more and work in a better-equipped hospital, which is a pull factor. Pay and equipment at home may be poor, which is a push factor. Her own country loses a trained doctor it paid to educate, which makes its health disparity worse."
              }
            },
            core: { hint: "Nine marks needs four paragraphs and a judgement. Make one paragraph about a chosen move and one about a forced move, each with a named example and a number." },
            stretch: { extend: "Add a short paragraph on the effects on the country people leave, and explain why those effects can be both good and bad for development there." }
          },
          explain: "Say, in one sentence, which push factor and which pull factor you would use if you had only one of each.",
          why: "The strongest answers separate forced migration from chosen migration, attach a named example and a figure to each, and then give both sides of the effect on the receiving country before judging. Listing countries without reasons stays in the bottom level."
        }
      ]
    },

    /* ───────────── 4 · reducing the development gap ───────────── */
    {
      key: "reducing-the-gap", n: 4, title: "Closing the gap: investment, tourism and aid",
      lead: "The eight strategies the course asks you to weigh up, with the named examples: Dyson and Proton in Malaysia, tourism in Jamaica and Tanzania, Oxfam's goat aid, and the four smaller strategies that keep working after the money has gone.",
      covers: [9, 10, 11, 12],
      pretext: {
        words: [
          { word: "investment", means: "putting money into a place or business so it grows", sentence: "Investment by a foreign company can bring new roads and power." },
          { word: "TNC", means: "a transnational corporation, a company working in more than one country", sentence: "A TNC may have its head office in one country and its factories in another." },
          { word: "multiplier effect", means: "one new job leading to more spending, more tax and more jobs", sentence: "The multiplier effect spreads the benefit of a new factory." },
          { word: "leakage", means: "money earned from tourism going back to a foreign company", sentence: "Leakage means the money leaves the country that earned it." },
          { word: "aid", means: "help given by a country or an organisation", sentence: "Aid can be money, food, equipment or skilled people." }
        ],
        passage: [
          "Closing the development gap needs investment in health and education.",
          "A country then has healthier, better-trained workers.",
          "They earn more, spend more and pay more tax.",
          "That tax can be spent on developing the country further.",
          "This is called the positive multiplier effect.",
          "Money for investment can come from several places.",
          "A TNC may build a factory, as Dyson did in Malaysia.",
          "Industry can grow, as car making has in Malaysia.",
          "Tourists can bring money, as they do in Jamaica and Tanzania.",
          "Aid can come from governments, from charities or from the public.",
          "Smaller strategies can work very well too.",
          "Fair trade, debt relief, microfinance loans and simple technology all help.",
          "None of them is a complete answer on its own."
        ]
      },
      sections: [
        {
          heading: "Investment and industrial development",
          paragraphs: [
            "Reducing the development gap needs investment in health and education. A country with more skilled and healthier workers has people who can earn more and pay more tax, and that tax can be used to develop the country further. The money for that investment has to come from somewhere, and the course lists seven sources: industrial development, tourism, aid, intermediate technology, fair trade, debt relief and microfinance loans, with investment by transnational corporations running through all of them.",
            "Investment is the first strategy. Transnational corporations put money and skills into low income countries by setting up businesses there. That helps develop infrastructure such as roads and power, can improve access to water and electricity, brings improvements to transport such as ports and airports, and encourages other businesses to follow. Dyson is the example. In around 2003 Dyson moved its manufacturing from Malmesbury in Wiltshire to Malaysia. Malaysia gained inward investment; workers' earnings boosted the Malaysian economy, because as earnings rise, so does spending, and so does the tax collected; and other companies followed Dyson and opened factories nearby, which led to roads and other services being improved. The United Kingdom gained too: Dyson's profits rose, higher corporate taxes meant more money for public services such as health and education, and new opportunities opened up for scientists working on design and research at home.",
            "Industrial development is the second strategy. Growing industry brings employment on a large scale; as more people work, incomes rise and investment follows; and that starts the multiplier effect. It is the pattern of the BRICS nations. Malaysia again: since 1970 it has seen a dramatic growth in its wealth and in the quality of life of its people, with a thriving manufacturing sector whose leading products include Proton cars. As manufacturing grows the workforce becomes more skilled, the products become better, and sales income rises, which pays for the next round of growth."
          ],
          worked: {
            q: "A factory worker is paid £9 an hour in the United Kingdom and £3 an hour in Malaysia. How much less does a company pay for one worker over a 40-hour week?",
            steps: [
              "Find the difference in the hourly rate first: £9 − £3 = £6 an hour.",
              "Multiply the difference by the number of hours: £6 × 40.",
              "Work it out: 6 × 40 = 240.",
              "Answer with the unit of money: the company pays £240 less a week for that worker."
            ],
            answer: "£240 less a week",
            checks: [{ expr: "(DYSON_UK_WAGE-DYSON_MY_WAGE)*40", value: 240, tol: 0 }]
          },
          tip: "When you use the Dyson example, always give a benefit for Malaysia and a benefit for the United Kingdom. A one-sided answer loses the evaluation marks."
        },
        {
          heading: "Tourism in Jamaica and Tanzania",
          paragraphs: [
            "Tourism is the third strategy. Some countries use it to generate income and narrow the gap. It grows where there is remarkable scenery, history or entertainment, and it needs little capital investment to start: no large factories and no highly skilled workforce. Jamaica, the Bahamas and other Caribbean countries are highly dependent on tourist arrivals. In Jamaica the tourism industry earns over half of the country's total foreign exchange earnings and provides about one quarter of all jobs; 220 000 Jamaicans work in it, in jobs ranging from building hotels to cleaning, bar work and caddying on golf courses. Most tourist activity is on the island's northern coast, around Montego Bay, Ocho Rios and Port Antonio, and at Negril on the western tip. Tourists spend money in bars, restaurants and other local businesses, those businesses pay tax, and the government spends the tax on essential services such as healthcare and education. That is the positive multiplier effect at work. The downside is dependence: if tourist numbers fall, the whole economy suffers.",
            "Tanzania is the second tourism example. Visitors come for Lake Victoria, the beaches and Stone Town of Zanzibar, safari, the Great Rift Valley and Mount Kilimanjaro. Between 2000 and 2015 the figures moved a long way: gross domestic product rose from 308.41 to 842.4 US dollars, the share of children in primary education from 67.9% to 83.7%, life expectancy at birth from 50.4 to 65.5 years, and unemployment fell from 12.9% to 10.3%. In 2014 tourism generated around 2 billion US dollars, 25% of all Tanzania's foreign exchange earnings, and tourist spending and services made up 17% of its GDP, the equivalent of 43 extra dollars for every person in the country. Tourism employs about 600 000 people directly and up to 2 million indirectly. Workers in tourism earn between 3.50 and 10.60 dollars a day, far above the 0.60 dollars a day typical of domestic work, and the guides and porters on Kilimanjaro, who come from poor backgrounds, are lifted above the poverty line of 2 dollars a day. Almost a third of Tanzania's land is now protected national park, and about 47% of the income from climbing Kilimanjaro goes straight back into the park to maintain species, guard against poachers and look after the land. The area around Kilimanjaro has the country's highest school enrolment rate, at 100%, and its highest adult literacy rate, at 85%.",
            "Tourism is not a cure-all, and the course wants both sides. Against it: jobs may be seasonal; many are poorly paid and low skilled; leakage means foreign companies that run the tourist business send profits home; traditional ways of life can be lost and cultures clash; the environment can be destroyed to build facilities; water shortages, waste disposal problems, noise, traffic and overcrowding follow the crowds; and the whole industry is vulnerable to natural disasters and terror attacks. Tanzania shows it plainly: tourism is growing by 10% a year but tourists are spending half what they used to; big game hunters come to poach, and rhinos could become extinct there; plastic waste from climbers kills birds; and in rural areas where tourism is not the main employer, people still live in poor housing with limited education, while around 12 million Tanzanians remain below the poverty line. Rwanda shows how a government can turn protection into income: a mountain gorilla permit costs 1500 dollars, and travel and tourism rose from 1.74% of Rwanda's GDP in 1997 to 11.18% in 2016."
          ],
          tip: "For a tourism evaluation, pick two positives and two negatives and attach a figure to each. Examiners credit named figures far more than general statements."
        },
        {
          heading: "Aid, and the kinds there are",
          paragraphs: [
            "Aid is when a country or an organisation donates resources to help a country develop. It can be money, as loans or grants; emergency supplies such as tents and blankets; basic food such as bags of grain and rice; or skilled people such as doctors and engineers. The course names six types and you need to be able to tell them apart. Short-term aid is an emergency response. Long-term aid is sustainable aid that aims to improve resilience. Bilateral aid goes from one country to another. Multilateral aid is where rich countries give money to organisations, which then distribute the funds. Voluntary aid is money donated by the public. Tied aid comes with restrictions on what it can be used for.",
            "Oxfam's goat project is the example the course uses to test whether aid is sustainable. Non-governmental organisations such as Oxfam and World Vision run it. A member of the public donates about £25, Oxfam buys a goat, and the goat goes to a family in a low income country. Because the money comes from the public rather than from a government, this is voluntary aid. In favour: the goat gives milk and meat, so protein arrives immediately; manure can be used as fertiliser, which raises crop production; extra milk, cheese and fur can be sold to bring in income; goats breed, so the kids can be sold and the benefit keeps growing, which is what makes it sustainable; goats are easy to look after and need no special skills; and looking after one brings a village together and teaches children to care for an animal.",
            "Against it: transporting a goat can be expensive and difficult; veterinary care is expensive if the animal falls ill; goats need food, water and shelter that the poorest families may not be able to afford; and the family needs teaching first. Charitable aid of this kind has particular strengths, which the course asks you to describe: the money is donated, so there are no obligations afterwards; it is more likely to be community based, and so to reflect what the community actually wants; smaller amounts are easier to monitor, so less is wasted; the benefit is felt directly by the community; and it is more likely to use technology that suits the place."
          ],
          tip: "Learn the six aid types as three pairs: short-term against long-term, bilateral against multilateral, voluntary against tied."
        },
        {
          heading: "Four smaller strategies that keep working",
          paragraphs: [
            "Intermediate technology is sustainable technology that suits the needs, skills, knowledge and wealth of local people. Sending tablet computers and tractors may not help if nobody can use or maintain them. It is right for the people: it is what they actually need, it is labour intensive so it uses and creates local employment, and it works with the tools and knowledge they already have. It is right for the place: it uses local technology and expertise and works in harmony with the local environment. It is sustainable, lasting a long time without damaging the environment, and affordable, because the first cost is low and parts and repairs can be handled locally once people are trained, rather than being imported and expensive. A water project at Adis Nifas in Ethiopia is the case study.",
            "Fair trade is a system in which agricultural producers in poorer countries are paid a fair price for what they grow, such as cocoa, coffee and cotton, so they can reach a reasonable standard of living. Be careful not to confuse it with free trade, which means countries not using tariffs or quotas to restrict trade: the two words look alike and mean different things. Debt relief is forgiving a debt in part or in full, in other words writing it off, so a country can spend on development instead of repayments; the highly indebted poor countries, the 38 countries with the largest debts, are the group this is aimed at. Microfinance loans provide financial help, mainly money, to small businesses and private enterprises that cannot get to banking services, so that someone with no collateral can still start a market stall or a workshop.",
            "Which strategy works best? That is the exam question, and there is no single answer. Large-scale investment and industry can lift a whole economy but the profits may leak abroad. Tourism brings foreign currency but makes a country dependent. Aid can save lives but may be tied, or lost to corruption, or stop when the donor loses interest. The four smaller strategies here are slower, but they put control into local hands and keep working after the money has gone, which is what sustainable means."
          ],
          tip: "Rank the eight strategies for yourself and write one sentence on why your top choice beats your second. A judgement you can defend is worth more than a list."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which type of aid is given directly by the government of one country to the government of another?", options: ["Bilateral aid", "Multilateral aid", "Voluntary aid", "Tied aid"], answer: 0, why: "Bilateral means two sides: aid from one country to another. The other three are defined by who collects it or what conditions come with it.",
          feedback: [
            "",
            "Multilateral aid is where rich countries give money to an organisation, such as the World Bank, which then distributes the funds. Aid passed straight from one government to another is bilateral.",
            "Voluntary aid is money donated by the public, usually through a charity. Aid from one government to another is bilateral.",
            "Tied aid is defined by its conditions, the restrictions on what the money may be spent on, not by who gives it. Aid from one government directly to another is bilateral, and it may or may not be tied."
          ] },
        { kind: "numeric", q: "Office space costs £114 per square metre in the United Kingdom and £38 per square metre in Malaysia. How many times more expensive is the United Kingdom?", answer: 3, tolerance: 0, units: "times", check: "DYSON_UK_RENT/DYSON_MY_RENT", why: "How many times means divide: 114 ÷ 38 = 3, so office space in the United Kingdom costs three times as much.",
          misconceptions: [
            { answer: 76, says: "You found the difference by subtracting. How many times more expensive needs a division: 114 ÷ 38 = 3.", check: "114-38" },
            { answer: 152, says: "You added the two rents. To compare them, divide the larger by the smaller: 114 ÷ 38 = 3.", check: "114+38" }
          ] },
        { kind: "gap", q: "Technology that local people can afford, use and repair themselves is called ___ technology.", answer: "intermediate", options: ["intermediate", "imported", "advanced"], why: "Intermediate technology sits between the simplest tools and expensive machinery: it suits the needs, skills and wealth of local people, so it keeps working.",
          feedback: {
            "imported": "Imported technology is brought in from abroad, and is often the problem rather than the answer, because parts and repairs are not available locally. The term wanted here is intermediate technology.",
            "advanced": "Advanced technology is usually expensive and needs specialist training and spare parts. Technology that local people can afford, use and repair is intermediate technology."
          } }
      ],
      modules: [
        {
          title: "The positive multiplier effect",
          task: {
            kind: "order",
            q: "Put the steps of the positive multiplier effect in order, starting with the arrival of tourists.",
            items: [
              "Tourists arrive, and hotels, restaurants and tour companies take on more workers.",
              "Those workers earn wages and spend them in local shops, bars and other businesses.",
              "Those local businesses grow and pay more tax to the government.",
              "The government spends the tax on essential services such as healthcare and education.",
              "A healthier, better-educated workforce can earn more still, and the whole cycle goes round again."
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the money arriving from outside the country.",
                "Follow the money: who receives it first, and where do they spend it?",
                "Ask what the government takes from a growing business.",
                "Ask what a government spends tax on in this topic.",
                "The last step closes the loop back to earning."
              ],
              example: {
                q: "Put these three steps of a factory multiplier effect in order: the town's shops take on extra staff; a factory opens and hires 200 workers; the workers spend their wages in the town.",
                steps: ["The money has to arrive before it can be spent.", "Wages are spent locally.", "Local businesses then grow."],
                answer: "A factory opens and hires 200 workers; the workers spend their wages in the town; the town's shops take on extra staff."
              }
            },
            core: { hint: "Follow one pound through the chain: who earns it, who they spend it with, who taxes it, what the tax buys." },
            stretch: { extend: "Explain how leakage breaks this chain, and say at which step in the order it does the damage." }
          },
          contexts: [
            { label: "A new factory", q: "A transnational corporation opens a factory in a newly emerging economy. Put the steps of the positive multiplier effect in order, starting with the new jobs at the factory.", why: "The chain is the same whether the money arrives with tourists or with a factory: wages, local spending, tax, services, better workers." },
            { label: "A safari lodge", q: "A safari lodge opens near a national park and begins hiring guides, drivers and cooks. Put the steps of the positive multiplier effect into the right order." },
            { label: "Drawing the flow chart", q: "You have to draw the positive multiplier effect as a flow chart with five boxes and arrows between them. Put the five statements in the order the arrows should follow." }
          ],
          explain: "Say, in one sentence, why this is called a multiplier effect rather than simply a benefit.",
          why: "Tourists arrive and local businesses take on workers to serve them; those workers spend their wages locally; local businesses grow and pay tax; the government spends that tax on healthcare and education; and a healthier, better-educated workforce earns more again. Each pound is spent several times over, which is why the effect multiplies."
        },
        {
          title: "Rwanda's tourism share",
          task: {
            kind: "numeric",
            q: "Travel and tourism grew from 1.74% of Rwanda's GDP in 1997 to 11.18% in 2016. By how many percentage points did its share rise?",
            answer: 9.44,
            tolerance: 0.001,
            units: "percentage points",
            check: "RWANDA_GDP_2016-RWANDA_GDP_1997",
            why: "Subtract the earlier share from the later one: 11.18 − 1.74 = 9.44 percentage points.",
            misconceptions: [
              { answer: 12.92, says: "You added the two shares together. A rise is found by subtracting the earlier figure from the later one: 11.18 − 1.74 = 9.44 percentage points.", check: "11.18+1.74" },
              { answer: -9.44, says: "You subtracted the other way round, taking the later share from the earlier one. The share rose, so the answer is positive: 11.18 − 1.74 = 9.44 percentage points.", check: "1.74-11.18" }
            ]
          },
          contexts: [
            { label: "A line graph", q: "A line graph of Rwanda's economy shows travel and tourism at 1.74% of GDP in 1997, rising to 11.18% in 2016. Read off the rise in percentage points.", check: "RWANDA_GDP_2016-RWANDA_GDP_1997", why: "Reading the two points off the graph and subtracting gives 11.18 − 1.74 = 9.44 percentage points." },
            { label: "A government report", q: "A Rwandan government report states that travel and tourism contributed 1.74% of GDP in 1997 and 11.18% in 2016. How many percentage points is that rise?", check: "RWANDA_GDP_2016-RWANDA_GDP_1997" },
            { label: "Comparing two years", q: "You are comparing Rwanda in two years. In 1997 travel and tourism were 1.74% of GDP; in 2016 they were 11.18%. Calculate the increase in percentage points.", check: "RWANDA_GDP_2016-RWANDA_GDP_1997" }
          ],
          levels: {
            support: {
              steps: [
                "A rise is always the later figure take away the earlier figure.",
                "Line the decimal points up: 11.18 − 1.74.",
                "Subtract carefully: 11.18 − 1.74 = 9.44.",
                "Use the right unit: these are percentage points, not percentages."
              ],
              example: {
                q: "A country's tourism share of GDP rose from 2.5% to 8.5%. By how many percentage points did it rise?",
                steps: ["Later take away earlier.", "8.5 − 2.5 = 6."],
                answer: "6 percentage points",
                checks: [{ expr: "8.5-2.5", value: 6, tol: 0 }]
              }
            },
            core: { hint: "Later figure minus earlier figure. Keep the decimal points in a column so the 8 and the 4 line up." },
            stretch: { extend: "Rwanda's share rose by 9.44 percentage points, but it also rose to more than six times what it was. Explain which of those two statements is more useful to a geographer, and why." }
          },
          explain: "Say, in one sentence, why a rise from 1.74 to 11.18 is written in percentage points rather than as a percentage.",
          why: "11.18 − 1.74 = 9.44. Travel and tourism grew by 9.44 percentage points as a share of Rwanda's whole economy between 1997 and 2016, largely because the government turned wildlife protection into income by charging for permits."
        },
        {
          title: "Is one goat sustainable?",
          task: {
            kind: "written",
            q: "A charity sends one goat to a family in a low income country. Explain why this kind of aid can keep on helping the family for years, and give one reason it might not. (6 marks)",
            marks: 6,
            criteria: [
              "Says what kind of aid this is (voluntary aid from a non-governmental organisation) and roughly what it costs",
              "Gives at least two ways the goat helps immediately (food, manure, income from sales)",
              "Explains clearly why breeding makes it sustainable, not just useful once",
              "Gives at least one reason it might fail, linked to cost, care or training",
              "Uses the word sustainable accurately and finishes with a short judgement"
            ],
            model: "This is voluntary aid: a member of the public donates about £25 to a non-governmental organisation such as Oxfam, which buys the goat. The help starts at once, because the goat gives milk and meat, so the family has protein, and its manure can be used as fertiliser, which raises the crop yield on their land. Anything the family does not need, such as extra milk, cheese or fur, can be sold, which brings in money. The reason it keeps working is that the goat breeds: the kids can be sold or kept, so one animal becomes a small herd and the income grows year after year without any further donation. That is what makes it sustainable rather than a single gift. It can still fail. The goat needs food, water and shelter, which the poorest families may not be able to afford, veterinary care is expensive if the animal falls ill, and the family has to be taught how to look after it properly first. On balance it is a sustainable form of aid as long as the training and the shelter come with the goat."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: name the type of aid and who gives it.",
                "Sentence 2: give two things the goat provides straight away.",
                "Sentence 3: explain what happens when the goat breeds.",
                "Sentence 4: use the word sustainable and say why this fits it.",
                "Last sentence: give one reason it might not work, and judge."
              ],
              example: {
                q: "In two sentences, explain why giving a village a tractor may be less sustainable than giving it a pair of oxen.",
                steps: ["Think about fuel, parts and training for the tractor.", "Think about what the oxen need and what they produce."],
                answer: "A tractor needs fuel, spare parts and a trained mechanic, none of which may be available locally, so it stops working. Oxen eat local feed, can be cared for with local knowledge and breed, so the help continues."
              }
            },
            core: { hint: "Sustainable means it keeps working after the donation. Breeding is the word that earns you that mark." },
            stretch: { extend: "Compare goat aid with debt relief. Explain which does more to reduce the development gap for a whole country, and why." }
          },
          explain: "Say, in one sentence, what makes a form of aid sustainable rather than simply helpful.",
          why: "The mark is in the breeding. Food, manure and income are immediate benefits, but the reason this counts as sustainable aid is that one animal becomes several and the benefit grows without further donations. A full answer also names the costs of feed, shelter, veterinary care and training."
        }
      ]
    },

    /* ───────────── 5 · Nigeria, a newly emerging economy ───────────── */
    {
      key: "nigeria", n: 5, title: "Nigeria: a newly emerging economy",
      lead: "The course's case study of rapid economic development in a newly emerging economy: where Nigeria is, the history and geography behind its economy, oil and the transnational corporations, the aid it receives, the damage growth has done, and what it has meant for people's lives.",
      covers: [13, 14, 15, 16, 17, 18, 19],
      pretext: {
        words: [
          { word: "NEE", means: "a newly emerging economy, growing fast through industry", sentence: "Nigeria is an NEE, not a low income country." },
          { word: "colonialism", means: "one country taking control of another and using it", sentence: "Colonialism took resources and people out of Nigeria." },
          { word: "independence", means: "when a country governs itself", sentence: "Nigeria gained independence from the United Kingdom in 1960." },
          { word: "crude oil", means: "oil as it comes out of the ground, before refining", sentence: "Crude oil is Nigeria's biggest export by far." },
          { word: "oil spill", means: "oil leaking from a pipeline or a rig into the land or sea", sentence: "An oil spill ruins farmland and fishing grounds." }
        ],
        passage: [
          "Nigeria is in west Africa.",
          "It borders Niger, Chad, Cameroon and Benin.",
          "Its coast is on the Gulf of Guinea, part of the Atlantic Ocean.",
          "Nigeria has the largest population and the largest economy in Africa.",
          "It is a newly emerging economy, or NEE.",
          "Farming is shrinking there while industry and services grow.",
          "Crude oil from the Niger Delta is its biggest export.",
          "Nigeria was ruled by the United Kingdom until 1960.",
          "A civil war ended in 1970, and then dictators ruled for years.",
          "Governments have been stable since 1999.",
          "Companies from China, South Africa and the United States now invest there.",
          "Oil has brought money, but also spills and pollution.",
          "The south of the country is far richer than the north."
        ]
      },
      sections: [
        {
          heading: "Where Nigeria is, and why it counts as an NEE",
          paragraphs: [
            "Nigeria is in west Africa. Its neighbours are Niger to the north, Chad to the north-east, Cameroon to the east and Benin to the west, and its southern coast is on the Gulf of Guinea, part of the Atlantic Ocean. The capital is Abuja, in the centre of the country; Lagos, on the coast, is the largest city. The physical features to know are the Niger Delta in the south, the rivers Niger and Benue, Lake Chad in the north-east and the Kainji Reservoir. The north is semi-desert on the southern edge of the Sahara; the centre rises to the Jos Plateau; the south has high temperatures and high rainfall.",
            "A newly emerging economy is a country that has begun to experience high rates of economic development, usually with rapid industrialisation. NEEs differ from low income countries because they no longer rely mainly on agriculture, they have made gains in infrastructure and industrial growth, and their incomes and levels of investment are rising. The sign to look for is growth in GDP, with rising average income and standard of living. Government is usually more stable than in a low income country, with less corruption and fewer violent changes of power, although still well behind the standards of a high income country. Nigeria is often grouped with the MINT countries, alongside Malaysia, Indonesia and Turkey.",
            "The evidence that Nigeria belongs in that group is strong. It has the largest population and the largest economy in Africa, and the highest farm output on the continent; its population was 182.2 million in 2015, up from 95.6 million in 1990. The United Nations ranked it 30th in the world by GDP in 2017. It has a diverse economy, not only oil: financial services, telecommunications and the media all matter, and the centre of Lagos is a global economic centre. It supplies the world with a share of its oil and plays a large political role, as one of the largest contributors to United Nations peacekeeping missions. Against that, it has real problems: corruption, poor infrastructure such as bad roads in remote areas, and power cuts. Without Nigeria, Africa as a whole would find it much harder to develop."
          ],
          tip: "To justify Nigeria as an NEE, say why it is not a low income country (industry, infrastructure, rising incomes) and why it is not a high income country (corruption, power cuts, poverty) before you give the growth figures."
        },
        {
          heading: "The political, social, cultural and environmental context",
          paragraphs: [
            "Political context first, because it explains most of the rest. In the 1880s the European powers met and divided control of Africa between themselves, which is why so many African borders are straight lines. Nigeria was ruled by the United Kingdom, and colonial rule held development back because resources were taken out of the country and people were taken as slaves. Nigeria became fully independent in 1960. In the 1960s and 1970s it was ruled by dictators and fought a civil war, which began with the attempt to create Biafra in 1967 and ended in 1970. Corruption meant money was stolen by those in power, so nobody wanted to invest. Only since 1999 has Nigeria had stable government, and the elections of 2011 and 2015 were seen as free and fair. Investment followed: China is a major investor in construction, South Africa in business and banking, and American companies in new power plants, while General Electric, IBM, Microsoft, Oracle and others have put money into the country.",
            "Social context. Nigeria is multi-ethnic and multi-faith: Christianity, Islam and traditional African religions are all widely practised, and the four major ethnic groups are the Yoruba, the Hausa, the Fulani and the Igbo. That diversity is a great strength, but it has also led to conflict, including the Biafra war and the Boko Haram uprising in the north, both of which have held development back. Economic inequality between the poorer north and the wealthier south lies behind much of this tension, and urban areas are more developed than rural ones. Cultural context: the film industry known as Nollywood is the second largest in the world, Nigerian music is popular across Africa, the writer Chimamanda Ngozi Adichie is read internationally, and the national football team has won the African Cup of Nations three times, with many Nigerians playing in the English Premier League. Each of these brings investment of its own, into studios, stadiums and training camps.",
            "Environmental context. Nigeria has high temperatures and a high annual rainfall, but the rainfall decreases towards the north. The high rainfall in the south means much of it is forest, and it can grow cocoa, palm oil and rubber. The same conditions make cattle farming difficult in the south, because the tsetse fly carries disease, which is one reason cattle rearing is a northern activity. So climate shapes which crops grow where, which shapes where processing industries are built, which shapes where people work. Geography and economy are not two topics here; they are one."
          ],
          tip: "Learn the four contexts as four short stories, each ending in because: political instability deterred investors because the rules kept changing; northern rainfall is lower because it is nearer the Sahara, so fewer crops grow there."
        },
        {
          heading: "Oil, trade and the transnational corporations",
          paragraphs: [
            "Nigeria has 37.2 billion barrels of oil reserves, the tenth largest reserves of crude oil in the world, and is responsible for 2.9% of global oil production. Oil dominates what it sells. In 2015 mineral fuels including oil earned 50.8 billion US dollars, which was 94.5% of all Nigeria's exports; cocoa came second at 1%, then wood and oil seeds. What it buys is much more varied: in 2014 its biggest imports were oil at 15.3% of the total, then machines, engines and pumps at 12.6%, electronic equipment at 9.3% and vehicles at 8.4%. Buying oil while selling oil looks strange until you realise that Nigeria exports crude and has to import refined fuel. Nigeria's political and trading links have grown since independence: it belongs to the African Union, an organisation of 54 countries that plans economically and keeps the peace; to ECOWAS, the trading group of west African states, whose headquarters are in Abuja; to CEN-SAD, a trading group of states bordering the Sahara that also builds sporting links; to the United Nations, where it is a major contributor of peacekeeping troops; to OPEC, which aims to stabilise oil prices and keep supply regular; and to the Commonwealth, a voluntary association of 53 states, most of them former British colonies.",
            "A transnational corporation is a company with operations, such as factories, offices, research and shops, in more than one country. Shell is the one to know in Nigeria. Its oil fields are mainly in the Niger Delta in the south, much of the drilling is offshore in deep water, and the oil has to be brought ashore by pipeline. The benefits to Nigeria are large: Shell contributes to taxes and export revenue, employs 65 000 people in oil itself and a further 250 000 in related industries, has given 91% of its contracts to Nigerian companies, and has encouraged the growth of the whole Nigerian energy sector. Unilever is the other example: TNCs such as Unilever promote improvements in healthcare and water supply that benefit local communities as well as the company, offer consumers more choice and sometimes lower prices, and provide accommodation, education facilities and better conditions of employment for their workers.",
            "The costs are just as real. Pay may be low and working conditions poor, with little regard for health and safety or for the environment; management may not be Nigerian; much of the profit goes overseas, which geographers call leakage; oil spills cause water pollution and soil degradation, which disrupts agriculture and fishing; toxic fumes from flaring cause air pollution; installations are liable to attack from militant groups; and oil theft and sabotage cost both the government and the companies. One detail explains why Nigerian crude is in demand: it is known as sweet oil because its sulphur content is very low, which makes it higher quality than oil from the Middle East and cheaper to refine into petrol. Sour crude has to have its impurities stripped out first, which raises the cost of processing and the price of the fuel made from it. Higher demand for sweet oil means a better price, which is why crude is Nigeria's largest export earner and a direct contributor to its growth."
          ],
          worked: {
            q: "Shell employs 65 000 people in Nigeria's oil industry and 250 000 in industries related to it. How many jobs is that in total, and what fraction of them are in the oil industry itself?",
            steps: [
              "Add the two figures: 65 000 + 250 000.",
              "That gives 315 000 jobs altogether.",
              "For the fraction, put the oil-industry figure over the total: 65 000 ÷ 315 000.",
              "That is about 0.21, so roughly a fifth of the jobs are in oil itself and the rest are in related industries."
            ],
            answer: "315 000 jobs in total, of which about a fifth are in the oil industry itself",
            checks: [
              { expr: "SHELL_OIL_WORKERS+SHELL_RELATED_WORKERS", value: 315000, tol: 0 },
              { expr: "SHELL_OIL_WORKERS/(SHELL_OIL_WORKERS+SHELL_RELATED_WORKERS)", value: 0.21, tol: 0.005 }
            ]
          },
          tip: "The multiplier effect is the reason the related-industry figure matters. Quote both numbers and then say that the 250 000 jobs exist because the 65 000 exist."
        },
        {
          heading: "Aid, the environment and quality of life",
          paragraphs: [
            "Nigeria receives both emergency aid, which is short-term help in the form of food, water, medical supplies and shelter, and developmental aid, which is long-term support from charities, governments and multilateral organisations aimed at improving quality of life. Its three main donors together give roughly 375 million US dollars, one of them a global vaccine fund. Aid has achieved real things: malaria deaths have been cut by providing nets and teaching people about the disease, the spread of HIV has been slowed by education and healthcare, orphans have been looked after so that children have better futures, and long-term loans to businesses outside oil have begun to reduce the country's dependence on it. Aid given to governments may not help development, because there may be corruption so that people take the money, the government may spend it on things that do not help development, or the donor may say how the aid must be used in ways that suit the donor more than Nigeria. Small-scale projects work better: they need little money, no high technical skill and no expensive maintenance, they reach remote areas, they target aid where it is needed, and experts from non-governmental organisations work with local communities to identify what those communities actually want. United Kingdom aid to Nigeria has gone to security against Boko Haram, to moving energy and water supply out of state control, to education and communication technology for teachers and students, to training and funding for young people starting businesses, to greater gender equality and girls' secondary education in Muslim areas, and to a football partnership that develops young Nigerians' skills.",
            "Rapid growth has damaged the environment. Many illegal small-scale industries have grown up with no pollution control: chemical waste is dumped and pollutes water, and factory chimneys pollute the air. Large areas of forest have been cleared, and dams and irrigation schemes have made desertification worse. Rubbish, mainly plastic packaging and old electrical goods, piles up because there are no formal waste disposal or recycling facilities, polluting water supplies and letting rats spread disease. Oil spills destroy ecosystems and pollute water supplies, and burning oil releases carbon dioxide and causes acid rain. Gas flaring sends toxic fumes into the air and has covered the city of Port Harcourt, the centre of exploration in the Niger Delta, in soot. Two spills are named in the course. The Bonga spill, on 20 December 2011, released 1.68 million gallons and created a slick 185 km long off the coast, the worst in the area for ten years, and 350 communities in the Niger Delta were affected; legal action by the Nigerian government began in May 2016 against Shell seeking compensation for the fishermen and communities affected. At Bodo, heavy leakage from a pipeline continued for six months, and because nearly 80% of local people are fishermen they had to leave to find new fishing grounds; in 2015 compensation of £35 million went to individuals and £20 million to the community, with £2100 for each individual, and Shell agreed to clean up the area.",
            "Spills can be prevented. Infrastructure should be maintained so that pipelines do not leak, pipelines should be protected against sabotage and other criminal behaviour, oil exploration should be prohibited in sensitive areas where a fragile ecosystem could be destroyed, and there should be strict pollution regulation with heavy fines for companies that do not take every necessary precaution. Meanwhile quality of life has improved for many Nigerians through the multiplier effect: taxes from oil and from TNCs have paid for hospitals, schools, roads and energy, which creates more jobs again; healthier people can be educated; better-educated women have smaller families and lower rates of HIV; life expectancy and GDP have risen. But the gains are very unequal. Measured as GDP per person, the south of the country stands at about 8343 US dollars and the north at about 292. The north has a harsher climate, areas far from the coast and lower rates of school enrolment, and the number of girls entering secondary school there remains low. The population is still growing faster than the economy is developing, so many people are missing out on the benefits altogether."
          ],
          tip: "For the nine-mark quality-of-life question, give one paragraph of improvements with figures, one paragraph of problems with figures, and then judge. A judgement with no figures cannot reach the top level."
        }
      ],
      gate: [
        { kind: "mcq", q: "In which part of Africa is Nigeria?", options: ["West Africa", "North Africa", "East Africa", "Southern Africa"], answer: 0, why: "Nigeria is in west Africa, bordered by Niger, Chad, Cameroon and Benin, with its southern coast on the Gulf of Guinea.",
          feedback: [
            "",
            "North Africa is the belt of countries along the Mediterranean and across the Sahara, such as Egypt and Algeria. Nigeria is further south and west, on the Gulf of Guinea.",
            "East Africa includes Kenya and Tanzania, on the Indian Ocean side of the continent. Nigeria is on the Atlantic side, in west Africa.",
            "Southern Africa includes South Africa and its neighbours. Nigeria is much further north, in west Africa."
          ] },
        { kind: "numeric", q: "Nigeria became fully independent in 1960 and its civil war ended in 1970. How many years passed between those two events?", answer: 10, tolerance: 0, units: "years", check: "NIG_CIVIL_WAR_END-NIG_INDEPENDENCE", why: "Subtract the earlier date from the later one: 1970 − 1960 = 10 years.",
          misconceptions: [
            { answer: 39, says: "You used 1999, the year stable government began, instead of 1970, the year the civil war ended. 1970 − 1960 = 10 years.", check: "NIG_STABLE_SINCE-NIG_INDEPENDENCE" },
            { answer: 7, says: "You used 1967, the year the war began, instead of 1970, the year it ended. From independence to the end of the war is 1970 − 1960 = 10 years.", check: "BIAFRA_WAR_START-NIG_INDEPENDENCE" }
          ] },
        { kind: "gap", q: "Most of Nigeria's oil is found in the ___ Delta, in the south of the country.", answer: "Niger", options: ["Niger", "Nile", "Benue"], why: "The Niger Delta, where the River Niger reaches the Gulf of Guinea, is where Nigeria's oil fields are, much of the drilling being offshore in deep water.",
          feedback: {
            "Nile": "The Nile is in north-east Africa and does not flow through Nigeria at all. Nigeria's oil comes from the Niger Delta.",
            "Benue": "The Benue is a real Nigerian river, and it joins the Niger inside the country, but the oil region is named after the larger river: the Niger Delta."
          } }
      ],
      modules: [
        {
          title: "Nigeria's political story",
          task: {
            kind: "order",
            q: "Put these five stages of Nigeria's political history in the right order, earliest first.",
            items: [
              "European powers divide Africa between themselves at a conference, drawing many borders as straight lines.",
              "Nigeria is ruled as a colony by the United Kingdom, which takes out its resources and takes its people as slaves.",
              "Nigeria becomes fully independent in 1960.",
              "Military dictators rule, corruption is widespread and a civil war is fought that ends in 1970.",
              "Stable government returns from 1999, and the elections of 2011 and 2015 are judged free and fair."
            ]
          },
          contexts: [
            { label: "A timeline", q: "You are drawing a timeline of Nigeria from the 1880s to today, with five events on it. Put the five events in order from left to right.", why: "The dates in the statements fix the order: colonial rule, then 1960, then 1970, then 1999." },
            { label: "An investor's view", q: "A company is deciding whether to invest in Nigeria and wants to know why nobody would invest there for so long. Put the five stages of Nigeria's political history in order and the reason becomes clear." },
            { label: "Explaining the borders", q: "A pupil asks why so many African borders are dead straight. Put the five stages of Nigeria's political history in order, and say which stage answers the question." }
          ],
          levels: {
            support: {
              steps: [
                "Three of the statements carry a date. Put those in date order first: 1960, then 1970, then 1999.",
                "Two carry no date. Both are earlier than 1960, because they describe how the colony came about.",
                "The conference that drew the borders came before the rule that followed it.",
                "Read your order through: does each stage explain the next?"
              ],
              example: {
                q: "Put these three stages of Malaysia's economy in order: Proton cars are made and exported; manufacturing begins to grow after 1970; wealth and quality of life rise sharply.",
                steps: ["Growth has to start before products appear.", "Products bring the income that raises living standards."],
                answer: "Manufacturing begins to grow after 1970; Proton cars are made and exported; wealth and quality of life rise sharply."
              }
            },
            core: { hint: "Three of the five statements carry a year. Put those three in order and the other two can only go at the start." },
            stretch: { extend: "Explain how each stage in this sequence made the next one harder or easier, and pick the stage that did most to hold Nigeria's development back." }
          },
          explain: "Say, in one sentence, why investors stayed away from Nigeria before 1999.",
          why: "The order runs: the European carve-up of Africa in the 1880s; colonial rule by the United Kingdom; independence in 1960; dictatorship, corruption and a civil war ending in 1970; stable government from 1999, with free and fair elections in 2011 and 2015. Each stage explains the next: colonial borders left ethnic groups divided, division fed the civil war, instability kept investors away, and stability brought them back."
        },
        {
          title: "What Nigeria sells",
          task: {
            kind: "mcq",
            q: "Mineral fuels, almost all of it crude oil, make up what share of Nigeria's exports?",
            options: ["94.5%", "15.3%", "50.8%", "2.9%"],
            answer: 0,
            feedback: [
              "",
              "15.3% is the share of Nigeria's imports made up of oil, not its exports. Nigeria exports crude and buys refined fuel back, which is why oil appears on both lists. Its export share is 94.5%.",
              "50.8 is the value of those exports in billions of US dollars, not a percentage. As a share of all exports, mineral fuels are 94.5%.",
              "2.9% is Nigeria's share of world oil production, which is a different measure altogether. Within Nigeria's own exports, mineral fuels make up 94.5%."
            ]
          },
          levels: {
            support: {
              steps: [
                "Read the question again: it asks for a share of Nigeria's exports, not of world production.",
                "Cross out any figure that is a value in dollars rather than a percentage.",
                "Cross out the figure that belongs to imports.",
                "Cross out the figure that is Nigeria's share of world oil output. One is left."
              ],
              example: {
                q: "Cocoa is Nigeria's second largest export. Is its share of all Nigeria's exports closest to 1%, 10% or 30%?",
                steps: ["Oil takes nearly all of the total.", "That leaves very little for everything else."],
                answer: "About 1%."
              }
            },
            core: { hint: "Three of these four figures are real Nigerian statistics, but only one is a share of exports. Check what each number actually measures." },
            stretch: { extend: "Explain why depending on one product for almost all export earnings is dangerous for a country, and name one thing Nigeria is doing about it." }
          },
          explain: "Say, in one sentence, why Nigeria both exports and imports oil.",
          why: "Mineral fuels including oil earned 50.8 billion US dollars in 2015, which was 94.5% of all Nigeria's exports; cocoa, the next largest, was about 1%. The other figures in the list are real but measure different things: 15.3% is oil's share of imports and 2.9% is Nigeria's share of world oil production."
        },
        {
          title: "Have the transnational corporations done more good than harm?",
          task: {
            kind: "written",
            q: "Shell and other transnational corporations have worked in Nigeria for decades. Using what you know about Nigeria, discuss whether they have done more good than harm to the country and its people. (9 marks)",
            marks: 9,
            criteria: [
              "Defines a transnational corporation and names at least two that operate in Nigeria",
              "Gives at least three benefits with figures or named detail (jobs, contracts, taxes, the energy sector, community services)",
              "Gives at least three costs with figures or named detail (spills, pollution, leakage, low pay, sabotage)",
              "Uses at least one named spill as evidence, with a date or a figure",
              "Weighs the two sides against each other rather than listing them",
              "Reaches a judgement and justifies it, using accurate terms such as leakage and the multiplier effect"
            ],
            model: "A transnational corporation is a company with operations in more than one country; Shell and Unilever are the two that the Nigeria case study names. The benefits are substantial. Shell's oil fields in the Niger Delta contribute to Nigeria's taxes and export revenue, provide work for 65 000 people in the oil industry and 250 000 in related industries, and 91% of Shell's contracts go to Nigerian companies, which has grown the whole Nigerian energy sector. Those wages and taxes set the multiplier effect going, paying for hospitals, schools, roads and power, and companies such as Unilever have improved healthcare and water supply for local communities. The costs are equally clear. Pay can be low and conditions poor, management is often not Nigerian, and much of the profit leaves the country, which is leakage. Oil spills have been severe: the Bonga spill of 20 December 2011 released 1.68 million gallons and left a slick 185 km long, affecting 350 communities, and at Bodo a pipeline leaked for six months in a place where nearly 80% of people fish for a living, with £35 million paid to individuals and £20 million to the community in 2015. Gas flaring has coated Port Harcourt in soot, farming and fishing yields have fallen, and the anger that followed has produced militant attacks, kidnappings, oil theft and sabotage, which cost the government and the companies still more. Weighing the two, the TNCs have been the engine of Nigeria's growth, so a country without them would be poorer; but the people who have borne the environmental cost in the Delta are not the people who have gained most from the taxes. My judgement is that TNCs have done more good than harm at national level and more harm than good locally, and that the balance would change if pollution regulation and fines were enforced as the course says they could be."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1: define a transnational corporation and name Shell and Unilever.",
                "Paragraph 2: three benefits, each with a number or a named detail.",
                "Paragraph 3: three costs, each with a number or a named detail, including one named oil spill.",
                "Paragraph 4: weigh them against each other. Ask who gains and who pays.",
                "Last sentence: judge, and say what would change your judgement."
              ],
              example: {
                q: "In three sentences, give one benefit and one cost of a transnational corporation opening a factory in a newly emerging economy, and say which matters more.",
                steps: ["Name a benefit for local people.", "Name a cost for local people.", "Judge, and give a reason."],
                answer: "The factory brings regular wages, which local people spend in the area and which the government can tax. It may also pay low wages and send most of its profit abroad, which is leakage. The wages matter more at first, because without them there is no local spending at all, but the leakage limits how much the country can gain in the long run."
              }
            },
            core: { hint: "Nine marks means four paragraphs and a judgement. Who gains and who pays is the question that turns a list into an evaluation." },
            stretch: { extend: "Explain how the measures for preventing oil spills could change your judgement, and say which of them you think would do most and why." }
          },
          explain: "Say, in one sentence, who gains most and who pays most when a transnational corporation extracts oil in Nigeria.",
          why: "This question is marked on the weighing, not the listing. The strongest answers separate national gains (taxes, export revenue, 65 000 oil jobs and 250 000 related jobs, 91% of contracts, the growth of the energy sector) from local costs (spills at Bonga and Bodo, soot over Port Harcourt, lost fishing and farming, leakage of profit), then judge and say what would change the judgement."
        }
      ]
    },

    /* ───────────── 6 · the changing UK economy ───────────── */
    {
      key: "uk-economy", n: 6, title: "The changing UK economy",
      lead: "How the United Kingdom's economy was transformed: the four employment sectors and how their shares changed, why factory work fell away, what a post-industrial economy looks like, Torr Quarry and sustainable industry, rural change, transport, the north-south divide and the UK's place in the world.",
      covers: [20, 21, 22, 23, 24, 25, 26, 27],
      pretext: {
        words: [
          { word: "employment structure", means: "the share of a country's workers in each kind of job", sentence: "A pie chart is a good way to show employment structure." },
          { word: "deindustrialisation", means: "the decline of factory work in a country", sentence: "Deindustrialisation closed mines and factories across the north." },
          { word: "globalisation", means: "ideas, money, goods and people spreading around the world", sentence: "Globalisation made it cheap to have goods made far away." },
          { word: "privatisation", means: "selling a state-run industry to private companies", sentence: "Privatisation sold the state-run railways to private companies." },
          { word: "post-industrial economy", means: "an economy that lives on services, information and research", sentence: "The United Kingdom now has a post-industrial economy." }
        ],
        passage: [
          "Jobs are grouped into four sectors.",
          "Primary jobs take raw materials from the land or the sea.",
          "Secondary jobs make things in factories.",
          "Tertiary jobs provide services, such as nursing or shop work.",
          "Quaternary jobs are research, software and the media.",
          "In 1800 most people in Britain worked in primary and secondary jobs.",
          "By 2015 only two in every hundred worked in primary jobs.",
          "Seventy-eight in every hundred worked in tertiary jobs.",
          "Factory work fell away. This is called deindustrialisation.",
          "Goods could be made more cheaply in other countries.",
          "The United Kingdom now sells services, research and ideas instead.",
          "Wages and house prices are higher in the south than the north.",
          "That difference is called the north-south divide."
        ]
      },
      sections: [
        {
          heading: "Four sectors, and how the UK's structure changed",
          paragraphs: [
            "Every job belongs to one of four sectors. The primary sector takes raw materials from the land or the sea: farming, fishing, mining and quarrying. The secondary sector makes things by processing those raw materials: manufacturing. The tertiary sector provides services, such as healthcare, offices, financial services and retailing. The quaternary sector is the newest: research, information technology, hi-tech industry and the media. Put together, the shares of a country's workers in each sector make up its employment structure, which is usually shown as a pie chart.",
            "The United Kingdom's structure in 2015 was primary 2%, secondary 8%, tertiary 78% and quaternary 12%. Compare that with 1800, when most people worked in the primary and secondary sectors: farming employed huge numbers and the new factories of the industrial revolution employed huge numbers more. Through the nineteenth and twentieth centuries the primary share collapsed as machines replaced farm and mine labour, the secondary share rose and then fell away, and the tertiary share grew until it dominated everything. The quaternary sector barely existed in 1800 and now employs more people than the primary and secondary sectors put together.",
            "That is not a story about Britain working less hard. It is a story about what the work is. A country whose workers are mostly in services, research and information has to have an educated workforce, reliable communications and businesses willing to buy expertise rather than goods. Each of those conditions is itself the result of earlier development, which is why employment structure is such a good indicator of how developed a country is."
          ],
          worked: {
            q: "The UK's employment structure in 2015 was primary 2%, secondary 8%, tertiary 78% and quaternary 12%. What angle should the tertiary slice have on a pie chart?",
            steps: [
              "Check the percentages add up to 100: 2 + 8 + 78 + 12 = 100.",
              "A whole pie chart is 360 degrees, so each 1% is 3.6 degrees.",
              "Multiply: 78 × 3.6.",
              "That gives 280.8, so the tertiary slice is 280.8 degrees, well over three quarters of the circle."
            ],
            answer: "280.8 degrees",
            checks: [
              { expr: "UK_PRIMARY_PCT+UK_SECONDARY_PCT+UK_TERTIARY_PCT+UK_QUATERNARY_PCT", value: 100, tol: 0 },
              { expr: "UK_TERTIARY_PCT/100*360", value: 280.8, tol: 0.001 }
            ]
          },
          tip: "Each 1% is 3.6 degrees on a pie chart. Check your four angles add to 360 before you draw."
        },
        {
          heading: "Why the economy changed",
          paragraphs: [
            "Three causes, and you need all three. The first is deindustrialisation and the decline of traditional industries. Deindustrialisation is the decline in manufacturing, the secondary sector, and the growth in tertiary and quaternary employment that followed it. In the United Kingdom it happened because machines and technology replaced many people in modern industries such as car production; because other countries, including China, Malaysia and Indonesia, can make cheaper goods where labour costs less; and because a lack of investment, high labour costs and outdated machinery made British products too expensive. Traditional industries such as coal mining, engineering and manufacturing have declined, and instead the United Kingdom has become a world centre for financial services, media, research and the creative industries.",
            "The second cause is globalisation, the growth and spread of ideas around the world, which can also involve the movement of cultures, people, money, goods and information. The internet and mobile technology allow far greater communication between countries. Larger ships have cut the cost of moving goods between them, and transport improvements mean goods and people travel more quickly. Economies of scale mean the cost of each item falls when you make more of them. Organisations such as the World Trade Organisation promote free trade and help remove barriers between countries. And countries such as India combine labour costs of about a third of the United Kingdom's with high skill levels, so labour-intensive industries such as clothing move there to take advantage of cheaper labour and fewer legal restrictions.",
            "The third cause is government policy, in three eras. From 1945 to 1979 the government created and ran state industries such as the National Coal Board and British Rail, and used public money to support declining industries; old equipment, outdated working practices and too many employees made them unprofitable, and the 1970s brought strikes, social unrest, factory closures and power cuts. From 1979 to 2010 those state-run industries were sold off to create a more competitive business environment, which is called privatisation; many older industries closed and many jobs were lost, but new private companies brought innovation, and derelict industrial areas were transformed into financial centres with offices and modern retail outlets. From 2010 the aim has been to rebalance the economy: to rebuild manufacturing and rely less on services, especially financial services, through improvements to transport infrastructure such as Crossrail and HS2, more investment in manufacturing, easier access to loans and finance for small businesses, and encouragement for global firms to locate in the United Kingdom."
          ],
          tip: "A six-mark question on deindustrialisation wants causes and impacts. Impacts include lost skills as older workers retire, well-paid skilled jobs replaced by lower-paid work, and derelict buildings left behind."
        },
        {
          heading: "A post-industrial economy, and industry in the landscape",
          paragraphs: [
            "A post-industrial economy is a period of growth in an industrialised nation in which the importance of manufacturing falls while services, information and research grow. Its characteristics are a declining manufacturing sector, because of competition from abroad and cheap labour in newly emerging economies and low income countries such as China, Brazil and Bangladesh, where working conditions and environmental laws are relaxed to attract foreign investment; a large services sector, made possible by the internet and digital data sharing, which in the United Kingdom covers scientific research and development, information technology support and banking and financial services; and a growing amount of information technology, leading to an information age in which knowledge and creativity are the core skills, which the United Kingdom can supply because its workforce is highly skilled and educated. Services are now close to 80% of the whole United Kingdom economy.",
            "Where do service companies work from? Many of them locate in business parks: large areas of office space to rent, usually sited on the edges of big cities, London, Edinburgh and Manchester among them, in what geographers call the urban-rural fringe, where land is cheaper. New business parks are opening nationwide to house the growth of the service industry, and they deliberately put many companies close together so that ideas and information can be shared, which is crucial to how those companies succeed. A science park is a related idea: a collection of scientific and technical knowledge-based businesses on a single site, often beside a university.",
            "Industry still touches the physical environment, and Torr Quarry is the case study. It is a limestone quarry in the Mendip Hills, owned by Aggregate Industries, producing 7.5 million tonnes a year. It covers 205 hectares, employs 250 people, generates £15 million a year for the local economy, and moves its limestone out by rail. Large-scale extraction brings serious impacts: air and water pollution as waste products spill into nearby water sources; waste taken to landfill, where it contaminates land and soil; noise and air pollution from the heavy vehicles that carry raw materials in and out; a scarred landscape, with deforestation as soil is stripped to reach the rock beneath and habitats lost as a result; and an eyesore for local people whose view and peace are disturbed. Torr Quarry answers these in five ways: 60 acres of the site have been landscaped to blend into the surroundings, with grass, trees and wildlife lakes for recreation; characteristic limestone features are being created to mimic the natural scenery; limestone travels by rail on the Mendip Rail network rather than by road; strict environmental targets have been set, with regular monitoring of noise, vibration, dust emissions and water quality; and in 2010 a planning decision was taken to deepen the quarry rather than widen it. Across the United Kingdom the same ideas appear as backfilling a worked-out quarry to create a more natural landscape, siting quarries away from large settlements to limit noise and air pollution, planting trees around the edges as a screen so the quarry is not an eyesore, heavy fines for contaminating groundwater or rivers, and assessing a site for ecological importance before planning permission is given, so that habitats and threatened species are preserved."
          ],
          tip: "For the Torr Quarry answer, pair each action with the kind of sustainability it serves: landscaping is environmental and social, rail transport is environmental, deepening rather than widening is environmental and economic."
        },
        {
          heading: "Rural change, transport and the north-south divide",
          paragraphs: [
            "Migration is the driving force behind population growth and decline in the countryside, and the course compares two places: South Cambridgeshire, which is growing, and the Outer Hebrides, which is declining. South Cambridgeshire is close to a prosperous city with good connections, so people move in and commute. The social and economic impacts of that growth include a lack of affordable housing for first-time buyers because demand is so high; council tax rising as demand on public services increases; and more car owners on the road, which increases traffic and, oddly, reduces the demand for bus routes and services, so the people without cars are worse off. The Outer Hebrides are remote islands a long way from work and services, so young people leave. Draw the impacts of each as a Venn diagram, with social on one side, economic on the other, and the impacts that are both in the overlap: lost housing affordability is both, because it is about money and about where a family can live.",
            "Transport is being improved to support the economy. The course asks you to know what a smart motorway is and why several motorways are being upgraded to become smart; the planned improvements to the A303 and the reasons for them; the plans for high-speed rail, HS2, and whether high-speed rail matters for the United Kingdom; how road and rail improvements boost the national and local economy; why the United Kingdom's port industry is the largest in Europe, and what the Liverpool2 development at Liverpool will bring to its region; the pattern of United Kingdom air transport routes; and the recommendation of a third runway at Heathrow. Crossrail, the new railway built under London from east to west, is the other named project, and the argument for it is that it cuts travel times and congestion by getting more people onto public transport.",
            "The north-south divide is the economic and cultural difference between southern England and the rest of the United Kingdom. A newspaper headline in 2008 said it was the widest for 60 years. The reasons are that economic investment and jobs are concentrated in London and the places near it; that London is a global city and a financial services centre, well connected to the European continent by rail, road and airport links, so southern England has higher wages, higher house prices and generally better quality-of-life indicators; and that deindustrialisation in the northern towns and cities in the 1970s and 1980s left unemployment and weaker economic growth behind. The evidence the course gives is a table of the percentage of people unemployed by region: Scotland 7.7%, Wales 3.4%, Northern Ireland 2.1%, north-west England 6.9%, south-east England 4.4%, south-west England 4.9% and the East Midlands 5.5%. Three initiatives are meant to narrow the gap: enterprise zones, which attract businesses to chosen areas; HS2, which is intended to encourage investment and jobs in the north; and Local Enterprise Partnerships, voluntary partnerships between local authorities and businesses that identify what local businesses need and encourage companies to invest. Beyond its own borders the United Kingdom is tied to the world by trade, with Ireland, the United States and China among its most important partners; by culture, with television programmes as a major export; by transport links; by the submarine cables that carry its electronic communications; and by its membership of political groupings, including its relationship with the European Union and the Commonwealth."
          ],
          tip: "When you use the unemployment table, read what it actually says: it supports the divide for Scotland and the north-west but not for Wales and Northern Ireland. Saying so is a Level 3 move, not a mistake."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which employment sector covers research, software development and the media?", options: ["Quaternary", "Primary", "Secondary", "Tertiary"], answer: 0, why: "The quaternary sector is the knowledge sector: hi-tech industry, research, information technology and the media. It is the newest of the four.",
          feedback: [
            "",
            "The primary sector takes raw materials from the land or sea: farming, fishing, mining and quarrying. Research and software belong to the quaternary sector.",
            "The secondary sector makes goods by processing raw materials, in other words manufacturing. Research, software and the media are quaternary.",
            "The tertiary sector provides services such as healthcare, offices, financial services and retailing. Research and software development are a step beyond that, in the quaternary sector."
          ] },
        { kind: "numeric", q: "In the table of regional unemployment, the highest figure is 7.7% in Scotland and the lowest is 2.1% in Northern Ireland. What is the range?", answer: 5.6, tolerance: 0.001, units: "percentage points", check: "UNEMP_SCOTLAND-UNEMP_NI", why: "Range means highest minus lowest: 7.7 − 2.1 = 5.6 percentage points.",
          misconceptions: [
            { answer: 9.8, says: "You added the highest and the lowest. A range is the highest take away the lowest: 7.7 − 2.1 = 5.6 percentage points.", check: "UNEMP_SCOTLAND+UNEMP_NI" },
            { answer: -5.6, says: "You subtracted the other way round, lowest minus highest. A range is never negative: 7.7 − 2.1 = 5.6 percentage points.", check: "UNEMP_NI-UNEMP_SCOTLAND" },
            { answer: 4.9, says: "That is the middle value of the seven regions, which is the median, not the range. The range is 7.7 − 2.1 = 5.6 percentage points.", check: "UNEMP_SW_ENGLAND" }
          ] },
        { kind: "gap", q: "Selling off state-run industries such as British Rail to private companies is called ___.", answer: "privatisation", options: ["privatisation", "globalisation", "deindustrialisation"], why: "Privatisation was the policy from 1979 to 2010: state industries were sold to create a more competitive business environment, which closed many older industries but brought new private investment.",
          feedback: {
            "globalisation": "Globalisation is the spread of ideas, money, goods and people around the world. Selling a state industry to private owners within one country is privatisation.",
            "deindustrialisation": "Deindustrialisation is the decline of manufacturing itself, which was one result of the policy. The policy of selling state industries to private companies is privatisation."
          } }
      ],
      modules: [
        {
          title: "Four phases of the UK economy",
          task: {
            kind: "order",
            q: "Put these four phases of the United Kingdom's economy in order, earliest first.",
            items: [
              "Traditional industries such as coal mining, engineering and manufacturing employ most of the country's workers.",
              "Between 1945 and 1979 the government runs industries such as the National Coal Board and British Rail and props them up with public money.",
              "Between 1979 and 2010 those state-run industries are privatised, many of them close, and derelict industrial sites become offices and shops.",
              "From 2010 the government tries to rebalance the economy by rebuilding manufacturing and improving transport."
            ]
          },
          contexts: [
            { label: "A family's jobs", q: "A family's four generations worked in a colliery, for the National Coal Board, in a new retail park on the colliery site, and now on a rail project. Put the four phases of the United Kingdom's economy in order to match them.", why: "Each generation's work belongs to one phase, and the dates in the statements fix the order." },
            { label: "A revision timeline", q: "You are drawing a revision timeline of the United Kingdom's economy with four boxes on it. Put the four phases in order from left to right." },
            { label: "Explaining a derelict site", q: "An old steelworks site in a northern town is now a shopping centre. Put the four phases of the United Kingdom's economy in order, and say which phase explains the change." }
          ],
          levels: {
            support: {
              steps: [
                "Three of the four statements carry dates. Put those three in date order.",
                "The statement with no date describes the time before the government took the industries over, so it goes first.",
                "Remember the pattern: the state takes industries on, then sells them off, then tries to rebuild.",
                "Read your order through and check the dates run forwards."
              ],
              example: {
                q: "Put these three stages of a coal mine's life in order: the pithead buildings are cleared for houses; the mine closes after privatisation; the mine employs 900 men.",
                steps: ["The mine has to be working before it can close.", "Clearance comes after closure."],
                answer: "The mine employs 900 men; the mine closes after privatisation; the pithead buildings are cleared for houses."
              }
            },
            core: { hint: "The state takes industries on, sells them off, then tries to rebuild manufacturing. Three dates and one undated statement that must come first." },
            stretch: { extend: "Explain why the policy of each phase was a reaction to the problems of the phase before it." }
          },
          explain: "Say, in one sentence, what problem the 2010 policy of rebalancing was trying to solve.",
          why: "The order is traditional industries; state-run industries supported by public money from 1945 to 1979; privatisation from 1979 to 2010, with closures and the reuse of derelict sites; and rebalancing from 2010 onwards. Each policy answered the one before: nationalisation protected failing industries, privatisation exposed them to competition, and rebalancing tries to rebuild the manufacturing those closures removed."
        },
        {
          title: "Mean unemployment in England",
          task: {
            kind: "numeric",
            q: "The four English regions in the table have unemployment of 6.9%, 4.4%, 4.9% and 5.5%. What is the mean unemployment rate for England in that table?",
            answer: 5.425,
            tolerance: 0.001,
            units: "per cent",
            check: "(UNEMP_NW_ENGLAND+UNEMP_SE_ENGLAND+UNEMP_SW_ENGLAND+UNEMP_EAST_MIDLANDS)/4",
            why: "Add the four figures and divide by how many there are: 6.9 + 4.4 + 4.9 + 5.5 = 21.7, and 21.7 ÷ 4 = 5.425.",
            misconceptions: [
              { answer: 21.7, says: "You added the four figures but did not divide. A mean needs the total shared between the number of values: 21.7 ÷ 4 = 5.425.", check: "6.9+4.4+4.9+5.5" },
              { answer: 5.2, says: "You found the median instead: the middle of the four values once they are in order. The mean adds all four and divides by 4, giving 5.425.", check: "(4.9+5.5)/2" },
              { answer: 3.1, says: "You divided the total by 7, the number of regions in the whole table, rather than by 4, the number of English regions: 21.7 ÷ 4 = 5.425.", check: "21.7/7" }
            ]
          },
          levels: {
            support: {
              steps: [
                "A mean is the total divided by how many values there are.",
                "Add the four: 6.9 + 4.4 + 4.9 + 5.5 = 21.7.",
                "Count the values: there are four English regions in the table.",
                "Divide: 21.7 ÷ 4 = 5.425."
              ],
              example: {
                q: "Three regions have unemployment of 5.0%, 6.0% and 7.0%. What is the mean?",
                steps: ["Add them: 5 + 6 + 7 = 18.", "Divide by 3: 18 ÷ 3 = 6."],
                answer: "6 per cent",
                checks: [{ expr: "(5.0+6.0+7.0)/3", value: 6, tol: 0 }]
              }
            },
            core: { hint: "Add all four, then divide by four. Do not include Scotland, Wales or Northern Ireland: the question says England only." },
            stretch: { extend: "The mean for England is lower than Scotland's figure but higher than Wales's. Explain why a mean can hide the very inequality the north-south divide is about, and suggest a better statistic to use instead." }
          },
          explain: "Say, in one sentence, why only four of the seven figures in the table belong in this calculation.",
          why: "6.9 + 4.4 + 4.9 + 5.5 = 21.7, and 21.7 ÷ 4 = 5.425 per cent. The commonest errors are forgetting to divide and dividing by 7 instead of 4, because the table lists seven regions but only four of them are in England."
        },
        {
          title: "Can a railway close the gap?",
          task: {
            kind: "written",
            q: "A new high-speed railway is planned between London and cities in the north of England. Using what you know about the north-south divide, explain how better transport links might reduce the difference in wealth between the two halves of the country. (6 marks)",
            marks: 6,
            criteria: [
              "Defines the north-south divide accurately",
              "Gives at least one reason the divide exists, linked to London's connections or to deindustrialisation",
              "Explains how faster links could bring investment or jobs to northern cities",
              "Uses the multiplier effect to carry the explanation beyond the first new job",
              "Names at least one other strategy (enterprise zones or Local Enterprise Partnerships) or one limitation of the railway",
              "Keeps a clear sequence and uses accurate geographical terms"
            ],
            model: "The north-south divide is the economic and cultural difference between southern England and the rest of the United Kingdom, seen in wages, house prices and quality-of-life indicators. One reason it exists is that London is a global city and a financial centre with excellent rail, road and air connections to Europe, so investment and jobs concentrate there, while northern towns and cities lost their traditional industries to deindustrialisation in the 1970s and 1980s and have grown more slowly ever since. A high-speed railway attacks that reason directly. If a firm in a northern city can reach London and its customers in half the time, locating there costs it less than it used to, so investment that would have gone south may go north instead. New jobs bring wages that are spent in local shops and businesses, those businesses grow and pay more tax, and the government can spend that tax on local services: the positive multiplier effect. Building the line itself employs people along its route. A railway on its own is not enough, which is why the government also uses enterprise zones to attract businesses to particular areas and Local Enterprise Partnerships to find out what local businesses actually need. The risk is the opposite outcome: faster links can also make it easier for business to be drawn into London, so the line reduces the divide only if investment in the north goes with it."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: define the north-south divide.",
                "Sentence 2: give one reason it exists.",
                "Sentence 3: say what a faster journey changes for a business.",
                "Sentence 4: use the multiplier effect to carry it further.",
                "Last sentence: name one other strategy or one risk."
              ],
              example: {
                q: "In two sentences, explain how a new bypass could help a small town's economy.",
                steps: ["Say what the bypass changes.", "Say what that means for businesses and jobs."],
                answer: "A bypass takes through traffic out of the town centre, so deliveries arrive faster and the streets are pleasanter to shop in. More customers and cheaper deliveries mean local businesses can grow and take on staff."
              }
            },
            core: { hint: "Six marks: definition, reason, mechanism, multiplier, and one other strategy or risk. The multiplier effect is the sentence that lifts the answer." },
            stretch: { extend: "Argue the other side: explain why a high-speed railway might widen the divide rather than narrow it, and say what would have to happen for your first answer to be right." }
          },
          explain: "Say, in one sentence, how a faster journey time can turn into new jobs in a northern city.",
          why: "The marks are in the chain, not the list: faster links lower the cost of locating in the north, investment follows, wages are spent locally, local businesses grow and pay tax, and the tax pays for services. Naming enterprise zones or Local Enterprise Partnerships, or the risk that better links pull business towards London instead, shows the evaluation the top level wants."
        }
      ]
    },

  ],

  sources: {
    deckDump: "gg_y10_unit_2_the_changing_economic_world.txt",
    decksUsed: [
      "CEW_Development.pptx (slides 1-247): development, measuring development, the DTM, population pyramids, causes and consequences of uneven development, and the strategies for reducing the development gap",
      "CEW_DIT.pptx (slides 1-4): the end-of-unit 9-mark plan and the 6/9-mark writing frame",
      "CEW_Revision.pptx (slides 1-16): the Year 10 revision list and repeats of the GNI and HDI slides",
      "NIGERIA BOOKLET_DIT.pptx (slides 1-17): the Nigeria case-study booklet, question by question",
      "Nigeria booklet.pptx (slides 1-5): the booklet answers and the 9-mark quality-of-life model answer",
      "Nigeria.pptx (slides 1-105): Nigeria as an NEE, its contexts, trade and oil, TNCs, aid, the environment and quality of life",
      "The changing UK economy.pptx (slides 2-188): employment structure, why the economy changed, the post-industrial economy, Torr Quarry, rural change, transport, the north-south divide and the UK in the wider world"
    ],
    notes: "The dump is the only content source: no textbook, website or AQA paper was consulted. Where a deck gives only a textbook page reference or a blank task table (Banbury-style gaps: the UK transport lessons, the Outer Hebrides Venn diagram, the Nigeria trade pie charts), the manifest teaches the method and the named examples the slides do state, and NOTES.md records the gap. Every case-study number is held with its slide reference in the FACTS table in verify.py. Diagrams (the DTM graph, population pyramids, employment pie charts, the Gapminder bubbles) are described in words."
  }
};
