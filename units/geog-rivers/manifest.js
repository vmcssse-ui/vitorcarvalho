// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 Geography · Year 7 · Unit 3 Water on Land: Rivers (foundations for AQA GCSE Geography 8035,
// 3.1.3 Physical landscapes in the UK: rivers) · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression) and are recomputed; every misconception carries its own `check`.
//   every mcq / gap answer is compared with the independent answer key held in verify.py, written from the deck.
//   every "order" task is compared with the canonical sequences held in verify.py; every "match" task with its canonical pairs.
//   every case-study number (river lengths, Bangladesh 1998, Thames Barrier) is compared with the FACTS table held in verify.py,
//   which was written from the department's decks, not from this file. Diagrams (long profile, waterfall, meander, the flood
//   sequence) are described in words; no widget exists for them and none is used.
//   passage sentences are counted (≤ 20 words); all text is linted for the deck's misspellings and for American spelling.
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions`; every module carries
//   `explain`; four modules carry `contexts` that never redefine the answer; `connections` ⊂ glossary; no `meta.constellation`;
//   no `pretext.l1` (translation is a separate pass).
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["geog-rivers"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "geog-rivers",
    subjectKey: "geography",
    subject: "Geography",
    board: "AQA",
    spec: "KS3 → 8035",
    specRef: "KS3 Year 7 Unit 3: Water on Land — Rivers (the water cycle, drainage basins, river processes and landforms, flooding and its management). Foundations for AQA GCSE Geography 8035, 3.1.3 Physical landscapes in the UK: rivers",
    year: 7,
    tier: "KS3",
    title: "Water on Land: Rivers",
    sub: "From a drop of rain to a river in flood: how water moves over the land, how rivers shape it, and how people live beside them.",
    bigQuestion: "How does water shape the land, why do rivers flood, and what can people do to reduce the risk and the damage?",
    lessonCount: 13,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Water on land: the water cycle and the world's major rivers", question: "Where does water come from, and where are the world's major rivers?", keywords: ["evaporation", "condensation", "precipitation", "transpiration", "infiltration", "water table"] },
    { n: 2, title: "What is a river drainage basin?", question: "What are the parts of a river drainage basin system?", keywords: ["drainage basin", "source", "tributary", "confluence", "mouth", "watershed"] },
    { n: 3, title: "Where are the world's longest rivers?", question: "Where do the world's longest rivers start and finish, and how long are they?", keywords: ["source", "mouth", "length", "atlas", "continent"] },
    { n: 4, title: "A river's journey", question: "What are the common features of a river from its source to the sea?", keywords: ["source", "stream", "waterfall", "meander", "estuary", "mouth"] },
    { n: 5, title: "The water cycle dance: the journey of a water droplet", question: "Can you tell the story of a water droplet's journey round the water cycle?", keywords: ["evaporation", "condensation", "precipitation", "surface run-off", "accumulation"] },
    { n: 6, title: "River processes: erosion", question: "How does a river wear away the land along its course?", keywords: ["erosion", "hydraulic action", "abrasion", "attrition", "solution"] },
    { n: 7, title: "River processes: transportation and deposition", question: "How does a river carry its load, and why does it drop it?", keywords: ["transportation", "traction", "saltation", "suspension", "solution", "deposition"] },
    { n: 8, title: "River courses and landforms", question: "What are the three stages of a river, and which landforms are made in each?", keywords: ["long profile", "cross section", "upper course", "V-shaped valley", "interlocking spurs"] },
    { n: 9, title: "Waterfalls and meanders", question: "How are a waterfall, a gorge, a meander and an oxbow lake formed?", keywords: ["hard rock", "soft rock", "plunge pool", "gorge", "meander", "oxbow lake"] },
    { n: 10, title: "Causes of flooding", question: "What causes a river to flood, and which factors increase the risk?", keywords: ["flood", "floodplain", "flash flood", "saturated", "physical factors", "human factors"] },
    { n: 11, title: "Comparing flooding in the UK and Bangladesh", question: "How do the causes and effects of flooding differ between an HIC and an LIC?", keywords: ["HIC", "LIC", "Somerset Levels 2014", "Bangladesh 1998", "cause", "effect"] },
    { n: 12, title: "Flood defence systems", question: "How can people cope with floods in the short term and the long term?", keywords: ["short-term", "long-term", "flood defence", "Thames Barrier"] },
    { n: 13, title: "Revision, end-of-unit test and feedback", question: "Can you describe and explain what you have learned about rivers and flooding?", keywords: ["describe", "explain", "SEE", "DIT", "WWW and EBI"] }
  ],

  glossary: [
    { term: "evaporation", means: "When the sun heats liquid water and it turns into water vapour, an invisible gas that rises into the air.", chapter: "water-cycle" },
    { term: "condensation", means: "When water vapour cools and turns back into tiny droplets of liquid water, forming clouds.", chapter: "water-cycle" },
    { term: "precipitation", means: "Water falling from clouds to the ground as rain, hail, sleet or snow.", chapter: "water-cycle" },
    { term: "transpiration", means: "When plants give off water vapour from their leaves into the air.", chapter: "water-cycle" },
    { term: "source", means: "The place where a river starts, usually in high land such as hills or mountains.", chapter: "drainage-basin" },
    { term: "mouth", means: "The place where a river ends by flowing into the sea or a lake.", chapter: "drainage-basin" },
    { term: "tributary", means: "A smaller river or stream that joins a bigger river.", chapter: "drainage-basin" },
    { term: "confluence", means: "The point where two rivers meet and join.", chapter: "drainage-basin" },
    { term: "hydraulic action", means: "Erosion by the sheer force of the water hitting the river's banks and bed.", chapter: "river-at-work" },
    { term: "abrasion", means: "Erosion when rocks carried by the river scrape and rub against the banks and bed, like sandpaper.", chapter: "river-at-work" },
    { term: "attrition", means: "Erosion when rocks carried by the river knock into each other and break into smaller, rounder pieces.", chapter: "river-at-work" },
    { term: "solution", means: "Erosion when rock is dissolved by slightly acidic river water. Also the name for carrying dissolved minerals.", chapter: "river-at-work" },
    { term: "floodplain", means: "The flat area of land on either side of a river that is covered with water when the river floods.", chapter: "why-rivers-flood" },
    { term: "saturated", means: "When the ground has soaked up so much water that it cannot hold any more.", chapter: "why-rivers-flood" },
    { term: "infiltration", means: "Water soaking down into the soil and rock.", chapter: "why-rivers-flood" },
    { term: "surface run-off", means: "Water flowing over the top of the ground, usually downhill towards a river, instead of soaking in.", chapter: "why-rivers-flood" }
  ],

  // Connections game: 4 groups × 4 terms, all drawn from the glossary and each group inside one chapter.
  // "solution" is the intended red herring: it is an erosion process here but also a way a river carries its load.
  connections: [
    { group: "The water cycle", terms: ["evaporation", "condensation", "precipitation", "transpiration"] },
    { group: "Parts of a river", terms: ["source", "mouth", "tributary", "confluence"] },
    { group: "How a river erodes", terms: ["hydraulic action", "abrasion", "attrition", "solution"] },
    { group: "Why rivers flood", terms: ["floodplain", "saturated", "infiltration", "surface run-off"] }
  ],

  chapters: [
    /* ───────────── 1 · the water cycle ───────────── */
    {
      key: "water-cycle", n: 1, title: "Water on the move: the water cycle",
      lead: "Where the water in a river comes from, how it goes round and round, and where the world's great rivers are.",
      covers: [1, 5],
      pretext: {
        words: [
          { word: "evaporation", means: "when the sun heats water and it turns into water vapour", sentence: "On a hot day, evaporation makes puddles disappear." },
          { word: "condensation", means: "when water vapour cools and turns back into tiny droplets", sentence: "Condensation high in the sky makes clouds." },
          { word: "precipitation", means: "water falling from clouds as rain, hail, sleet or snow", sentence: "Precipitation fell all night, so the river rose." },
          { word: "transpiration", means: "when plants give off water vapour from their leaves", sentence: "A forest adds water to the air by transpiration." },
          { word: "surface run-off", means: "water flowing over the ground towards a river", sentence: "After the storm, surface run-off poured down the hill." }
        ],
        passage: [
          "Water never stays still.",
          "It moves round and round in the water cycle.",
          "The sun heats water in the sea, in lakes and in rivers.",
          "The water turns into water vapour and rises into the air.",
          "This is called evaporation.",
          "Plants give off water vapour too, from their leaves.",
          "This is called transpiration.",
          "High in the sky the air is cold, so the vapour turns into tiny droplets.",
          "This is condensation, and it makes clouds.",
          "The droplets join up, get heavy and fall as rain, hail, sleet or snow.",
          "This is precipitation.",
          "Some water soaks into the ground, and some runs over the surface into rivers.",
          "The rivers carry the water back to the sea, and the cycle starts again."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "عندما تسخّن الشمس الماء فيتحوّل إلى بخار ماء (evaporation)",
            "عندما يبرد بخار الماء ويعود قطرات صغيرة جدًا (condensation)",
            "ماء يسقط من الغيوم على شكل مطر أو بَرَد أو مطر ثلجي أو ثلج (precipitation)",
            "عندما تُخرج النباتات بخار الماء من أوراقها (transpiration)",
            "ماء يجري فوق سطح الأرض نحو النهر (surface run-off)"
          ],
          "passage": [
            "الماء لا يبقى ساكنًا أبدًا.",
            "إنه يتحرّك دورةً بعد دورة في دورة الماء (water cycle).",
            "تسخّن الشمس الماء في البحر وفي البحيرات وفي الأنهار.",
            "يتحوّل الماء إلى بخار ماء ويرتفع في الهواء.",
            "يُسمّى هذا التبخّر (evaporation).",
            "النباتات أيضًا تُخرج بخار الماء من أوراقها.",
            "يُسمّى هذا النتح (transpiration).",
            "عاليًا في السماء يكون الهواء باردًا، فيتحوّل البخار إلى قطرات صغيرة جدًا.",
            "هذا هو التكاثف (condensation)، وهو الذي يصنع الغيوم.",
            "تتجمّع القطرات وتثقل وتسقط على شكل مطر أو بَرَد أو مطر ثلجي أو ثلج.",
            "هذا هو الهطول (precipitation).",
            "بعض الماء يتسرّب إلى داخل الأرض، وبعضه يجري فوق السطح إلى الأنهار.",
            "تحمل الأنهار الماء عائدةً به إلى البحر، وتبدأ الدورة من جديد."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "kiedy słońce ogrzewa wodę i zamienia się ona w parę wodną (evaporation)",
            "kiedy para wodna stygnie i zamienia się z powrotem w maleńkie kropelki (condensation)",
            "woda spadająca z chmur jako deszcz, grad, deszcz ze śniegiem lub śnieg (precipitation)",
            "kiedy rośliny oddają parę wodną przez swoje liście (transpiration)",
            "woda płynąca po powierzchni ziemi w stronę rzeki (surface run-off)"
          ],
          "passage": [
            "Woda nigdy nie stoi w miejscu.",
            "Krąży w kółko w obiegu wody (water cycle).",
            "Słońce ogrzewa wodę w morzu, w jeziorach i w rzekach.",
            "Woda zamienia się w parę wodną i unosi się w powietrze.",
            "To nazywamy parowaniem (evaporation).",
            "Rośliny też oddają parę wodną, przez swoje liście.",
            "To nazywamy transpiracją (transpiration).",
            "Wysoko na niebie powietrze jest zimne, więc para zamienia się w maleńkie kropelki.",
            "To jest kondensacja (condensation) i tak powstają chmury.",
            "Kropelki łączą się, stają się ciężkie i spadają jako deszcz, grad, deszcz ze śniegiem lub śnieg.",
            "To są opady (precipitation).",
            "Część wody wsiąka w ziemię, a część spływa po powierzchni do rzek.",
            "Rzeki niosą wodę z powrotem do morza i obieg zaczyna się od nowa."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "quando o sol aquece a água e ela se transforma em vapor de água (evaporation, evaporação)",
            "quando o vapor de água arrefece/esfria e volta a transformar-se em gotinhas minúsculas (condensation, condensação)",
            "água que cai das nuvens como chuva, granizo, chuva com neve ou neve (precipitation, precipitação)",
            "quando as plantas libertam/liberam vapor de água pelas folhas (transpiration, transpiração)",
            "água que escorre sobre o solo em direção a um rio (surface run-off, escoamento superficial)"
          ],
          "passage": [
            "A água nunca fica parada.",
            "Ela anda às voltas, sem parar, no ciclo da água.",
            "O sol aquece a água no mar, nos lagos e nos rios.",
            "A água transforma-se em vapor de água e sobe para o ar.",
            "A isto chama-se evaporação (evaporation).",
            "As plantas também libertam/liberam vapor de água, pelas folhas.",
            "A isto chama-se transpiração (transpiration).",
            "Lá no alto do céu o ar é frio, por isso o vapor transforma-se em gotinhas minúsculas.",
            "Isto é a condensação (condensation), e é assim que se formam as nuvens.",
            "As gotinhas juntam-se, ficam pesadas e caem como chuva, granizo, chuva com neve ou neve.",
            "Isto é a precipitação (precipitation).",
            "Parte da água infiltra-se no solo, e parte escorre pela superfície até aos rios.",
            "Os rios levam a água de volta ao mar, e o ciclo começa outra vez."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "marka qorraxdu biyaha kululayso oo ay uumi biyo isu beddelaan (evaporation)",
            "marka uumiga biyuhu qaboobo oo uu dib ugu noqdo dhibco yaryar (condensation)",
            "biyo daruuraha ka soo dhacaya sida roob, roob-dhagax, baraf-roob ama baraf (precipitation)",
            "marka dhirtu uumi biyo ka sii daayaan caleemahooda (transpiration)",
            "biyo dusha dhulka kor ku socda oo webi u socda (surface run-off)"
          ],
          "passage": [
            "Biyuhu weligood meel ma fariistaan.",
            "Waxay wareeg-wareeg ku socdaan wareegga biyaha (water cycle).",
            "Qorraxdu waxay kululaysaa biyaha badda, harooyinka iyo webiyada.",
            "Biyuhu waxay isu beddelaan uumi biyo oo hawada kor ugu baxaan.",
            "Tan waxaa la yiraahdaa evaporation.",
            "Dhirtuna uumi biyo waa sii daayaan, caleemahooda ayuu ka baxaa.",
            "Tan waxaa la yiraahdaa transpiration.",
            "Cirka meel sare hawadu way qabow tahay, sidaas darteed uumigu wuxuu isu beddelaa dhibco yaryar.",
            "Tani waa condensation, waxayna samaysaa daruuro.",
            "Dhibcuhu way isku biiraan, way culus noqdaan oo waxay u soo dhacaan roob, roob-dhagax, baraf-roob ama baraf.",
            "Tan waxaa la yiraahdaa precipitation.",
            "Biyaha qaarkood dhulka ayay dhex galaan, qaarna dusha dhulka ayay ku ordaan oo webiyada galaan.",
            "Webiyadu biyaha dib ayay badda ugu celiyaan, wareegguna mar kale ayuu bilaabmaa."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "коли сонце нагріває воду і вона перетворюється на водяну пару (evaporation)",
            "коли водяна пара охолоджується і знову перетворюється на крихітні крапельки (condensation)",
            "вода, що падає з хмар як дощ, град, мокрий сніг або сніг (precipitation)",
            "коли рослини виділяють водяну пару зі своїх листків (transpiration)",
            "вода, що тече по поверхні землі до річки (surface run-off)"
          ],
          "passage": [
            "Вода ніколи не стоїть на місці.",
            "Вона рухається по колу у кругообігу води (water cycle).",
            "Сонце нагріває воду в морі, в озерах і в річках.",
            "Вода перетворюється на водяну пару і піднімається в повітря.",
            "Це називається випаровуванням (evaporation).",
            "Рослини теж виділяють водяну пару — зі своїх листків.",
            "Це називається транспірацією (transpiration).",
            "Високо в небі повітря холодне, тому пара перетворюється на крихітні крапельки.",
            "Це конденсація (condensation), і вона утворює хмари.",
            "Крапельки з’єднуються, важчають і падають як дощ, град, мокрий сніг або сніг.",
            "Це опади (precipitation).",
            "Частина води просочується в землю, а частина стікає по поверхні в річки.",
            "Річки несуть воду назад до моря, і кругообіг починається знову."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "جب سورج پانی کو گرم کرتا ہے اور وہ آبی بخارات بن جاتا ہے (evaporation)",
            "جب آبی بخارات ٹھنڈے ہو کر دوبارہ ننھی بوندوں میں بدل جاتے ہیں (condensation)",
            "بادلوں سے گرنے والا پانی: بارش، ژالہ، برفیلی بارش یا برف (precipitation)",
            "جب پودے اپنے پتوں سے آبی بخارات خارج کرتے ہیں (transpiration)",
            "زمین کی سطح پر بہتا ہوا پانی جو دریا کی طرف جاتا ہے (surface run-off)"
          ],
          "passage": [
            "پانی کبھی ایک جگہ ٹھہرا نہیں رہتا۔",
            "یہ آبی چکر (water cycle) میں گھومتا ہی رہتا ہے۔",
            "سورج سمندر، جھیلوں اور دریاؤں کے پانی کو گرم کرتا ہے۔",
            "پانی آبی بخارات بن کر ہوا میں اوپر اٹھتا ہے۔",
            "اسے بخارات بننا (evaporation) کہتے ہیں۔",
            "پودے بھی اپنے پتوں سے آبی بخارات خارج کرتے ہیں۔",
            "اسے transpiration کہتے ہیں۔",
            "آسمان میں بہت اوپر ہوا ٹھنڈی ہوتی ہے، اس لیے بخارات ننھی بوندوں میں بدل جاتے ہیں۔",
            "یہ condensation ہے، اور اس سے بادل بنتے ہیں۔",
            "بوندیں آپس میں مل کر بھاری ہو جاتی ہیں اور بارش، ژالہ، برفیلی بارش یا برف کی صورت میں گرتی ہیں۔",
            "اسے precipitation کہتے ہیں۔",
            "کچھ پانی زمین میں جذب ہو جاتا ہے، اور کچھ سطح پر بہہ کر دریاؤں میں چلا جاتا ہے۔",
            "دریا پانی کو واپس سمندر تک لے جاتے ہیں، اور چکر دوبارہ شروع ہو جاتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Where does the water in a river come from?",
          paragraphs: [
            "Every river is fed by the water cycle. The cycle has no real start or finish, but a good place to begin is the sea. The sun heats the surface of the sea, and some of the water turns into water vapour, a gas you cannot see. This is evaporation. The vapour rises because warm air rises.",
            "High in the sky the air is much colder. The water vapour cools and turns back into tiny droplets of liquid water. This is condensation, and billions of these droplets together make a cloud. Inside the cloud the droplets bump into each other and join up. When they are too heavy to float, they fall.",
            "Water falling from a cloud is called precipitation. It can be rain, hail, sleet or snow, depending on how cold the air is. Most precipitation falls back into the sea, but some falls on the land. That is the water that will end up in a river."
          ],
          tip: "Evaporation goes UP (water to vapour). Condensation comes together (vapour to droplets, making clouds). Precipitation falls DOWN."
        },
        {
          heading: "Water in plants and in the ground",
          paragraphs: [
            "Not all water vapour comes from the sea. Plants take in water through their roots and give it off from their leaves as vapour. This is transpiration. A large forest can add a huge amount of water to the air each day, which is one reason forests are often cloudy and wet.",
            "When precipitation reaches the ground, it has two choices. It can soak down into the soil and rock: this is infiltration, and the water that collects underground is called groundwater. The top of the groundwater is the water table. Or it can flow over the top of the ground, usually downhill, towards a stream or river: this is surface run-off.",
            "Both routes lead to the same place. Groundwater seeps slowly into rivers and lakes; run-off reaches them quickly. Water collecting in a river, a lake or the sea is called accumulation. From there the sun heats it again, and the cycle goes round once more."
          ],
          worked: {
            q: "Describe the journey of a drop of water from a river to a cloud and back to the ground. (4 marks)",
            steps: [
              "Start in the river and name the process that lifts the water: the sun heats the river and the drop evaporates, rising as water vapour.",
              "Say what happens high up: the vapour cools and condenses into tiny droplets, forming a cloud.",
              "Say how it comes down: the droplets join, grow heavy and fall as precipitation, such as rain or snow.",
              "Finish on the ground: the water infiltrates the soil or runs over the surface as run-off back towards a river."
            ],
            answer: "The sun heats the river, so the drop evaporates and rises as vapour; it cools and condenses into a cloud; it falls as precipitation; then it infiltrates the ground or runs off the surface back towards a river."
          }
        },
        {
          heading: "The world's great rivers",
          paragraphs: [
            "Rivers carry the water that falls on the land back to the sea. Every continent except Antarctica has great rivers. In Africa there are the Nile, the Congo and the Niger. In South America there is the Amazon, which has more water in it than any other river. In North America there is the Mississippi.",
            "In Europe the Rhine rises in Switzerland and flows north to the sea. In Australia the Murray-Darling drains a huge area of dry land. In Asia there are the Yangtze and the Yellow River in China, the Ganges in India and the Yenisey, which flows north through Russia to the Arctic.",
            "When you find these rivers in an atlas, notice that each one starts in high land and ends at the coast. Water always flows downhill. That simple fact explains almost everything a river does, as you will see in the next chapters."
          ],
          tip: "An atlas index gives a page number and a grid square. Find the square first, then look for the thin blue line with the river's name along it."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which process turns liquid water into water vapour?", options: ["Evaporation", "Condensation", "Precipitation", "Infiltration"], answer: 0, why: "Evaporation is liquid water turning into water vapour when the sun heats it.",
          feedback: [
            "",
            "Condensation is the opposite change: water vapour cooling and turning back into liquid droplets to make clouds. Turning liquid into vapour is evaporation.",
            "Precipitation is water falling from a cloud as rain, hail, sleet or snow. It is already liquid or solid. The change from liquid to vapour is evaporation.",
            "Infiltration is water soaking down into the soil. It stays liquid. The change from liquid to vapour is evaporation."
          ] },
        { kind: "gap", q: "Water vapour cools and turns back into tiny droplets, forming clouds. This is called ___.", answer: "condensation", options: ["condensation", "evaporation", "precipitation"], why: "Condensation is vapour becoming liquid droplets; it is how clouds form.",
          feedback: {
            "evaporation": "Evaporation is the change the other way, from liquid water to vapour, when the sun heats water. Vapour cooling into droplets is condensation.",
            "precipitation": "Precipitation is the water falling out of the cloud as rain, hail, sleet or snow. The step before that, when the cloud forms from cooling vapour, is condensation."
          } },
        { kind: "mcq", q: "Which of these rivers is in South America?", options: ["The Nile", "The Amazon", "The Mississippi", "The Murray-Darling"], answer: 1, why: "The Amazon flows across Brazil, in South America, to the Atlantic Ocean.",
          feedback: [
            "The Nile is in Africa, flowing north to the Mediterranean Sea. The South American river on the list is the Amazon.",
            "",
            "The Mississippi is in North America, in the USA, flowing to the Gulf of Mexico. The South American river on the list is the Amazon.",
            "The Murray-Darling is in Australia. The South American river on the list is the Amazon."
          ] }
      ],
      modules: [
        {
          title: "Round and round: the water cycle in order",
          task: {
            kind: "order",
            q: "Put the stages of the water cycle in order, starting with the sun heating the sea.",
            items: [
              "The sun heats water in the sea, lakes and rivers",
              "Water evaporates and rises as water vapour",
              "The vapour cools and condenses into clouds",
              "Water falls as precipitation: rain, hail, sleet or snow",
              "Water runs over the land as surface run-off or soaks in",
              "Water collects again in rivers, lakes and the sea"
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the stage with the sun in it. Heat starts everything, so that comes first.",
                "Ask: what does heat do to water? It makes it evaporate and rise.",
                "Vapour has to cool into a cloud before anything can fall. Then it falls.",
                "Once on the ground, water moves towards a river, and the last stage is where it collects."
              ],
              example: {
                q: "Put these stages of making a cup of tea in order: pour the water, boil the kettle, drink the tea, add a tea bag.",
                steps: ["Nothing can happen until the kettle is boiled.", "Then the tea bag goes in and the water is poured.", "Drinking is last."],
                answer: "boil the kettle, add a tea bag, pour the water, drink the tea"
              }
            },
            core: { hint: "Up, together, down, along: evaporate, condense, fall, flow." },
            stretch: { extend: "The cycle has no true beginning. Explain why you could also start it with precipitation, and say what would be different about the order you wrote." }
          },
          explain: "Say, in one sentence, why water has to rise and cool before it can fall as rain.",
          why: "Heat causes evaporation; vapour rises and condenses into clouds; the droplets fall as precipitation; the water runs off or infiltrates; it collects in rivers, lakes and the sea, ready to evaporate again."
        },
        {
          title: "Which continent?",
          task: {
            kind: "match",
            q: "Match each great river to the continent it flows through.",
            pairs: [
              ["The Nile", "Africa"],
              ["The Amazon", "South America"],
              ["The Mississippi", "North America"],
              ["The Murray-Darling", "Australia"],
              ["The Rhine", "Europe"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the one you are surest of, perhaps from a film or a book.",
                "The Nile is famous for Ancient Egypt, and Egypt is in Africa.",
                "The Amazon rainforest is in Brazil. Brazil is in South America.",
                "The Mississippi is in the USA; the Rhine rises in Switzerland; that leaves the Murray-Darling for Australia."
              ],
              example: {
                q: "Match: the Congo, the Yangtze. Choices: Asia, Africa.",
                steps: ["The Congo rainforest is in central Africa.", "The Yangtze is the longest river in China, which is in Asia."],
                answer: "The Congo: Africa. The Yangtze: Asia."
              }
            },
            core: { hint: "Think of a country each river is famous for, then ask which continent that country is in." },
            stretch: { extend: "Pick one of these rivers and explain, using the water cycle, why it carries so much water: where does its rain come from?" }
          },
          explain: "Say, in one sentence, how you worked out one of the pairs you were least sure of.",
          why: "Nile: Africa (Egypt, Sudan, Uganda). Amazon: South America (Brazil, Peru). Mississippi: North America (USA). Murray-Darling: Australia. Rhine: Europe (Switzerland, Germany, the Netherlands)."
        },
        {
          title: "Water from leaves",
          task: {
            kind: "mcq",
            q: "A plant's leaves give off water vapour into the air. What is this process called?",
            options: ["Transpiration", "Evaporation", "Infiltration", "Condensation"],
            answer: 0,
            feedback: [
              "",
              "Evaporation is water turning to vapour from a surface such as the sea, a lake or a puddle. When the vapour comes from a plant's leaves, the process has its own name: transpiration.",
              "Infiltration is water soaking down into the soil. Water leaving a leaf is going up into the air, not down into the ground. That is transpiration.",
              "Condensation is vapour turning back into droplets, as in a cloud. A leaf is releasing vapour, not making droplets, so this is transpiration."
            ],
            why: "Transpiration is the water cycle's word for water vapour given off by plants. It is like evaporation, but from leaves."
          },
          contexts: [
            { label: "A rainforest", q: "In the Amazon rainforest, millions of trees give off water vapour from their leaves every day, helping to make clouds. What is this process called?" },
            { label: "A wheat field", q: "On a warm afternoon a field of wheat gives off water vapour from its leaves into the air. What is this process called?" },
            { label: "A houseplant", q: "You put a clear plastic bag over a houseplant for a day and find droplets inside the bag. The water came from the leaves as vapour. What is that process called?" }
          ],
          levels: {
            support: {
              steps: [
                "Ask where the vapour is coming from: a surface of water, or a living plant?",
                "If it comes from a plant, the process has its own special name.",
                "Rule out words about water going down (infiltration) or vapour turning back into droplets (condensation).",
                "The word that is left is the answer."
              ],
              example: {
                q: "A puddle in the playground disappears on a sunny afternoon. What is this process called?",
                steps: ["The water is turning into vapour.", "It is coming from a surface of water, not from a plant.", "So this is evaporation."],
                answer: "Evaporation"
              }
            },
            core: { hint: "Plants have their own word for giving off water vapour. It begins with t." },
            stretch: { extend: "Explain why cutting down a forest might make the local area drier, using the words transpiration and condensation." }
          },
          explain: "Say, in one sentence, how transpiration is like evaporation and how it is different.",
          why: "Transpiration is water vapour given off by plants through their leaves. Evaporation is from a water surface; infiltration is water soaking into the ground; condensation is vapour becoming droplets."
        }
      ]
    },

    /* ───────────── 2 · drainage basins and the world's rivers ───────────── */
    {
      key: "drainage-basin", n: 2, title: "Drainage basins and the world's longest rivers",
      lead: "The parts of a river system from source to mouth, where the longest rivers start and finish, and what rivers give people.",
      covers: [2, 3],
      pretext: {
        words: [
          { word: "drainage basin", means: "the area of land where water flows into one river", sentence: "Rain that falls anywhere in a drainage basin ends up in the same river." },
          { word: "source", means: "where a river starts", sentence: "The source of the river is a spring high in the hills." },
          { word: "tributary", means: "a smaller river that joins a bigger one", sentence: "A tributary joined the river and made it wider." },
          { word: "confluence", means: "the point where two rivers meet", sentence: "The town was built at the confluence of two rivers." },
          { word: "mouth", means: "where a river flows into the sea", sentence: "Ships wait at the mouth of the river before sailing in." },
          { word: "watershed", means: "the high land around the edge of a drainage basin", sentence: "On one side of the watershed, rain flows to a different river." }
        ],
        passage: [
          "Every river has its own area of land that feeds it.",
          "This area is called a drainage basin.",
          "Rain that falls inside the basin flows into that river.",
          "The edge of the basin is high land called the watershed.",
          "A river starts at its source, often a spring or a bog in the hills.",
          "Small streams join it on the way down.",
          "A small river that joins a bigger one is a tributary.",
          "The place where they meet is a confluence.",
          "The river flows in a channel, with a bed below and banks at each side.",
          "At last it reaches the sea at its mouth.",
          "The Nile, the Amazon and the Yangtze are the three longest rivers in the world.",
          "People fish in rivers, farm beside them, travel on them and pray in them."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "مساحة الأرض التي يجري ماؤها إلى نهر واحد (drainage basin)",
            "المكان الذي يبدأ منه النهر (source)",
            "نهر أصغر يلتحق بنهر أكبر (tributary)",
            "النقطة التي يلتقي فيها نهران (confluence)",
            "المكان الذي يصبّ فيه النهر في البحر (mouth)",
            "الأرض المرتفعة حول حافّة حوض التصريف (watershed)"
          ],
          "passage": [
            "لكلّ نهر مساحة من الأرض خاصّة به تغذّيه بالماء.",
            "تُسمّى هذه المساحة حوض التصريف (drainage basin).",
            "المطر الذي يسقط داخل الحوض يجري إلى ذلك النهر.",
            "حافّة الحوض أرض مرتفعة تُسمّى خطّ تقسيم المياه (watershed).",
            "يبدأ النهر من منبعه (source)، وغالبًا ما يكون نبعًا أو مستنقعًا في التلال.",
            "تلتحق به جداول صغيرة في طريقه إلى الأسفل.",
            "النهر الصغير الذي يلتحق بنهر أكبر يُسمّى رافدًا (tributary).",
            "المكان الذي يلتقيان فيه يُسمّى ملتقى (confluence).",
            "يجري النهر في مجرى، له قاع من الأسفل وضفّة على كلّ جانب.",
            "وفي النهاية يصل إلى البحر عند مصبّه (mouth).",
            "النيل والأمازون واليانغتسي هي أطول ثلاثة أنهار في العالم.",
            "يصطاد الناس السمك في الأنهار، ويزرعون بجانبها، ويسافرون عليها، ويصلّون فيها."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "obszar lądu, z którego woda spływa do jednej rzeki (drainage basin)",
            "miejsce, gdzie rzeka się zaczyna (source)",
            "mniejsza rzeka, która wpada do większej (tributary)",
            "miejsce, gdzie dwie rzeki się łączą (confluence)",
            "miejsce, gdzie rzeka wpada do morza (mouth)",
            "wysoki teren wokół krawędzi dorzecza (watershed)"
          ],
          "passage": [
            "Każda rzeka ma swój własny obszar lądu, który ją zasila.",
            "Ten obszar nazywamy dorzeczem (drainage basin).",
            "Deszcz, który spada w obrębie dorzecza, spływa do tej rzeki.",
            "Krawędź dorzecza to wysoki teren zwany wododziałem (watershed).",
            "Rzeka zaczyna się u źródła (source), często jest to źródełko albo bagno na wzgórzach.",
            "Po drodze w dół wpadają do niej małe strumienie.",
            "Mała rzeka, która wpada do większej, to dopływ (tributary).",
            "Miejsce, gdzie się spotykają, to zbieg rzek (confluence).",
            "Rzeka płynie w korycie (channel), z dnem na dole i brzegami po obu stronach.",
            "W końcu dociera do morza przy swoim ujściu (mouth).",
            "Nil, Amazonka i Jangcy to trzy najdłuższe rzeki świata.",
            "Ludzie łowią w rzekach ryby, uprawiają przy nich ziemię, podróżują po nich i modlą się w nich."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a área de terra onde a água escorre para um só rio (drainage basin, bacia hidrográfica)",
            "o lugar onde um rio começa (source, nascente)",
            "um rio mais pequeno/menor que se junta a um maior (tributary, afluente)",
            "o ponto onde dois rios se encontram (confluence, confluência)",
            "o lugar onde um rio desagua/deságua no mar (mouth, foz)",
            "as terras altas à volta/ao redor de uma bacia hidrográfica (watershed, linha divisória de águas)"
          ],
          "passage": [
            "Cada rio tem a sua própria área de terra que o alimenta.",
            "Essa área chama-se bacia hidrográfica (drainage basin).",
            "A chuva que cai dentro da bacia escorre para esse rio.",
            "A borda da bacia é uma zona de terras altas chamada linha divisória de águas (watershed).",
            "Um rio começa na sua nascente (source), muitas vezes uma fonte ou um pântano nas colinas.",
            "Pequenos ribeiros/riachos juntam-se a ele pelo caminho.",
            "Um rio pequeno que se junta a um maior é um afluente (tributary).",
            "O lugar onde eles se encontram é uma confluência (confluence).",
            "O rio corre num canal, com um leito por baixo e margens de cada lado.",
            "Por fim, chega ao mar na sua foz (mouth).",
            "O Nilo, o Amazonas e o Yangtzé (Yangtze) são os três rios mais longos do mundo.",
            "As pessoas pescam nos rios, cultivam a terra ao lado deles, viajam por eles e rezam neles."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "aagga dhulka oo biyihiisu hal webi galaan (drainage basin)",
            "meesha webi ka bilaabmo (source)",
            "webi ka yar oo ku biira webi ka weyn (tributary)",
            "barta laba webi ku kulmaan (confluence)",
            "meesha webi badda ku shubmo (mouth)",
            "dhulka sare ee ku wareegsan cidhifka drainage basin-ka (watershed)"
          ],
          "passage": [
            "Webi kastaa wuxuu leeyahay aag dhul oo u gaar ah oo biyo siiya.",
            "Aaggan waxaa la yiraahdaa drainage basin.",
            "Roobka ku da'a gudaha basin-ka wuxuu u qulqulaa webigaas.",
            "Cidhifka basin-ka waa dhul sare oo la yiraahdo watershed.",
            "Webi wuxuu ka bilaabmaa isha (source), inta badan il biyood ama dhul qoyan oo buuraha ku yaal.",
            "Togag yaryar ayaa ku biira intuu hoos u socdo.",
            "Webi yar oo ku biira webi ka weyn waa tributary.",
            "Meesha ay ku kulmaan waa confluence.",
            "Webigu wuxuu ku socdaa marin (channel), hoos ka leh sariir (bed) iyo daraf (banks) dhinac walba ka ah.",
            "Ugu dambayn wuxuu badda ku gaaraa afkiisa (mouth).",
            "Niil, Amazon iyo Yangtze waa saddexda webi ee ugu dheer adduunka.",
            "Dadku webiyada ayay kalluun ka qabtaan, agtooda ayay beeraan, dushooda ayay ku safraan, dhexdoodana ayay ku tukadaan."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "ділянка землі, з якої вода стікає в одну річку (drainage basin)",
            "місце, де річка починається (source)",
            "менша річка, що впадає в більшу (tributary)",
            "точка, де зустрічаються дві річки (confluence)",
            "місце, де річка впадає в море (mouth)",
            "підвищена земля по краю річкового басейну (watershed)"
          ],
          "passage": [
            "Кожна річка має свою ділянку землі, яка її живить.",
            "Ця ділянка називається річковим басейном (drainage basin).",
            "Дощ, що падає всередині басейну, стікає в цю річку.",
            "Край басейну — це підвищена земля, яку називають вододілом (watershed).",
            "Річка починається біля свого витоку (source), часто це джерело або болото в горах.",
            "Дорогою вниз до неї приєднуються малі струмки.",
            "Мала річка, що впадає в більшу, — це притока (tributary).",
            "Місце, де вони зустрічаються, — це злиття (confluence).",
            "Річка тече в руслі (channel): унизу дно, а з кожного боку береги.",
            "Нарешті вона досягає моря біля свого гирла (mouth).",
            "Ніл, Амазонка та Янцзи — три найдовші річки у світі.",
            "Люди ловлять у річках рибу, обробляють землю біля них, подорожують ними і моляться в них."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "زمین کا وہ علاقہ جہاں سے پانی بہہ کر ایک دریا میں جاتا ہے (drainage basin)",
            "جہاں سے دریا شروع ہوتا ہے (source)",
            "ایک چھوٹا دریا جو بڑے دریا میں مل جاتا ہے (tributary)",
            "وہ جگہ جہاں دو دریا آپس میں ملتے ہیں (confluence)",
            "جہاں دریا سمندر میں گرتا ہے (mouth)",
            "drainage basin کے کنارے کی اونچی زمین (watershed)"
          ],
          "passage": [
            "ہر دریا کا اپنا زمین کا ایک علاقہ ہوتا ہے جو اسے پانی دیتا ہے۔",
            "اس علاقے کو drainage basin کہتے ہیں۔",
            "جو بارش basin کے اندر گرتی ہے وہ بہہ کر اسی دریا میں جاتی ہے۔",
            "basin کے کنارے کی اونچی زمین کو watershed کہتے ہیں۔",
            "دریا اپنے منبع (source) سے شروع ہوتا ہے، جو اکثر پہاڑیوں میں کوئی چشمہ یا دلدل ہوتی ہے۔",
            "نیچے آتے ہوئے چھوٹی چھوٹی ندیاں اس میں مل جاتی ہیں۔",
            "ایک چھوٹا دریا جو بڑے دریا میں مل جائے، معاون دریا (tributary) کہلاتا ہے۔",
            "جہاں وہ آپس میں ملتے ہیں، وہ جگہ confluence ہے۔",
            "دریا ایک نالی (channel) میں بہتا ہے، جس کے نیچے تلا اور دونوں طرف کنارے ہوتے ہیں۔",
            "آخر میں یہ اپنے دہانے (mouth) پر سمندر تک پہنچ جاتا ہے۔",
            "نیل (Nile)، ایمیزون (Amazon) اور یانگسی (Yangtze) دنیا کے تین سب سے لمبے دریا ہیں۔",
            "لوگ دریاؤں میں مچھلی پکڑتے ہیں، ان کے کنارے کھیتی کرتے ہیں، ان پر سفر کرتے ہیں اور ان میں عبادت کرتے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What is a drainage basin?",
          paragraphs: [
            "Imagine a huge bowl made of hills. Any rain that falls inside the bowl runs down to the lowest line in the middle, which is the river. Geographers call this bowl a drainage basin: the area of land where water flows into a river. The Thames has a drainage basin, and so does the tiny stream at the end of your road.",
            "The rim of the bowl is the watershed. It is the high land that separates one drainage basin from the next. A drop of rain that lands just on one side of the watershed goes to one river; a drop that lands just on the other side goes to a completely different one.",
            "Drainage basins fit together like the pieces of a jigsaw. A large river's basin is made of the smaller basins of all its tributaries. That is why a storm far away in the hills can make a river rise in a town many kilometres downstream."
          ],
          tip: "Drainage basin = the whole area of land. Channel = the river itself. Do not mix them up in a test."
        },
        {
          heading: "The parts of a river system",
          paragraphs: [
            "A river starts at its source, usually in high land where a lot of rain falls. Near the source it is small and fast, and we call it a stream. As it flows downhill, other streams and small rivers join it. Each one is a tributary, and the point where two rivers join is a confluence.",
            "The river flows in its channel. The bottom of the channel is the bed, and the sides are the banks. Stones and sand rolled along the bottom are the bed load. The flat land either side of the channel, which gets covered when the river floods, is the floodplain. You will meet it again in Chapter 5.",
            "At the end of its journey the river reaches the sea at its mouth. Many rivers widen into an estuary just before the sea, where fresh water and salt water mix and the tide comes in and out. From source to mouth, a river only ever does one thing: it flows downhill."
          ],
          worked: {
            q: "Describe the main parts of a river drainage basin from source to mouth. (4 marks)",
            steps: [
              "Begin at the edge and the top: the watershed is the high land around the basin; the source is where the river starts.",
              "Describe the river joining up: tributaries are smaller rivers that join it at confluences.",
              "Describe the river itself: it flows in a channel with a bed and two banks.",
              "Finish at the end: the river reaches the sea at its mouth."
            ],
            answer: "The basin is bounded by the watershed; the river starts at its source in high land; tributaries join it at confluences; it flows in a channel with a bed and banks; and it ends at its mouth, where it flows into the sea."
          }
        },
        {
          heading: "The world's longest rivers",
          paragraphs: [
            "Your atlas lists the world's longest rivers. The Nile is usually listed first, at about 6695 km. It starts at Lake Victoria in East Africa and flows north through Egypt to the Mediterranean Sea. The Amazon is next, at about 6516 km. It starts in the Andes Mountains in Peru and crosses Brazil to the Atlantic Ocean.",
            "The Yangtze, about 6380 km, rises in the Tanggula Mountains and crosses China to the East China Sea near Shanghai. The Mississippi, about 6020 km, flows from Lake Itasca in Minnesota through the USA to the Gulf of Mexico near New Orleans. The Yenisey, about 5539 km, flows from Mongolia across Russia to the Kara Sea. The Yellow River, about 5464 km, rises in the Bayan Har Mountains and reaches the Bohai Sea.",
            "These lengths are measured along the winding channel, not in a straight line, and geographers do not all agree on exactly where some rivers start. That is why different books give slightly different numbers, and why some say the Amazon, not the Nile, is the longest. For your test, use the figures your atlas gives."
          ],
          tip: "In a table of rivers, read the headings first: source, countries, mouth, length. Then fill the gaps one column at a time."
        },
        {
          heading: "What rivers give people",
          paragraphs: [
            "People have always lived beside rivers. The Amazon is home to more than 3000 kinds of fish, and fishing feeds many of the communities along it. In Ancient Egypt the Nile flooded every year and left behind a layer of fine mud called silt, which made the land along its banks very fertile. Farmers could grow wheat and other crops in a desert, and one of the world's first great civilisations grew up there.",
            "Rivers are also roads. The Yangtze is one of the busiest waterways in the world, carrying coal, factory goods and passengers. The Danube, the second-longest river in Europe after the Volga, is part of a waterway that links the Black Sea to Rotterdam on the North Sea, since a canal joined it to the Rhine and the Main in 1992.",
            "For some people a river is holy. The Ganges begins in the Himalayas in India and flows to the Bay of Bengal. Hindus honour it as the goddess Ganga, and many believe that bathing in it at least once is an important part of life. Water, food, transport and faith: rivers give all four."
          ]
        }
      ],
      gate: [
        { kind: "gap", q: "The point where two rivers meet and join is called a ___.", answer: "confluence", options: ["confluence", "tributary", "mouth"], why: "A confluence is the meeting point; the smaller river that joins is the tributary.",
          feedback: {
            "tributary": "A tributary is the smaller river that does the joining. The point where it meets the bigger river is the confluence.",
            "mouth": "The mouth is where a river ends by flowing into the sea or a lake. The point where two rivers meet is a confluence."
          } },
        { kind: "mcq", q: "Where does a river start?", options: ["At its source, usually in high land", "At its mouth, by the sea", "At a confluence", "On the floodplain"], answer: 0, why: "The source is the start of a river, usually in hills or mountains where rain is heaviest.",
          feedback: [
            "",
            "The mouth is where the river ends, flowing into the sea. Rivers flow downhill, so they start high up at the source and finish low down at the mouth.",
            "A confluence is where two rivers meet partway along their journey. A river starts before that, at its source in high land.",
            "The floodplain is the flat, low land beside a river in its lower course. A river starts high up, at its source."
          ] },
        { kind: "numeric", q: "The Nile is listed as 6695 km long and the Amazon as 6516 km. How many kilometres longer is the Nile?", answer: 179, tolerance: 0, units: "km", check: "6695 - 6516", why: "6695 − 6516 = 179 km.",
          misconceptions: [
            { answer: 13211, says: "You added the two lengths. The question asks how much longer one is than the other, so subtract: 6695 − 6516 = 179 km.", check: "6695 + 6516" },
            { answer: 200, says: "You rounded both rivers to the nearest hundred (6700 and 6500) before subtracting. Subtract the exact lengths: 6695 − 6516 = 179 km.", check: "6700 - 6500" }
          ] }
      ],
      modules: [
        {
          title: "Name the parts",
          task: {
            kind: "match",
            q: "Match each part of a river system to its meaning.",
            pairs: [
              ["Source", "Where the river starts"],
              ["Mouth", "Where the river flows into the sea"],
              ["Tributary", "A smaller river that joins a bigger one"],
              ["Confluence", "The point where two rivers meet"],
              ["Watershed", "The high land around the edge of a drainage basin"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start and finish first: one word means where the river begins, one means where it ends.",
                "Two words are about rivers joining: one is the small river, one is the meeting point.",
                "Confluence has flu in it, like fluid flowing together: it is the meeting point.",
                "Watershed is the edge, the high land that sheds water into the basin."
              ],
              example: {
                q: "Match: bed, bank. Choices: the side of a river channel; the bottom of a river channel.",
                steps: ["You lie on a bed, so the bed is the bottom.", "A river bank is the side you stand on."],
                answer: "Bed: the bottom of the channel. Bank: the side of the channel."
              }
            },
            core: { hint: "A tributary is a thing (a river); a confluence is a place (a point)." },
            stretch: { extend: "Draw a simple drainage basin from memory and label all five parts, then add the channel, bed and banks. Explain why a town is often built at a confluence." }
          },
          explain: "Say, in one sentence, the difference between a tributary and a confluence.",
          why: "Source: start. Mouth: end at the sea. Tributary: a smaller joining river. Confluence: the meeting point. Watershed: the high boundary of the basin."
        },
        {
          title: "How much longer?",
          task: {
            kind: "numeric",
            q: "The Amazon is listed as 6516 km long and the Yenisey as 5539 km. How many kilometres longer is the Amazon?",
            answer: 977, tolerance: 0, units: "km", check: "6516 - 5539",
            misconceptions: [
              { answer: 12055, says: "You added the lengths. To find how much longer one river is, subtract the shorter from the longer: 6516 − 5539 = 977 km.", check: "6516 + 5539" },
              { answer: 1023, says: "You subtracted each column of digits separately without borrowing. Use column subtraction carefully: 6516 − 5539 = 977 km.", check: "abs(6 - 5) * 1000 + abs(5 - 5) * 100 + abs(1 - 3) * 10 + abs(6 - 9)" },
              { answer: 877, says: "You lost 100 somewhere, probably when borrowing across the hundreds. Check it another way: 5539 + 977 = 6516, so 977 is right.", check: "6516 - 5539 - 100" }
            ],
            why: "6516 − 5539 = 977 km. Check by adding back: 5539 + 977 = 6516."
          },
          levels: {
            support: {
              steps: [
                "Write the longer length on top and the shorter underneath, lining up the digits.",
                "Subtract column by column from the right, borrowing when the top digit is smaller.",
                "Check your answer by adding it to the shorter length: you should get the longer length.",
                "Give the units: kilometres."
              ],
              example: {
                q: "The Yangtze is listed as 6380 km and the Mississippi as 6020 km. How much longer is the Yangtze?",
                steps: ["6380 − 6020.", "Units: 0 − 0 = 0. Tens: 8 − 2 = 6. Hundreds: 3 − 0 = 3. Thousands: 6 − 6 = 0.", "So the Yangtze is 360 km longer. Check: 6020 + 360 = 6380."],
                answer: "360 km",
                checks: [{ expr: "6380 - 6020", value: 360, tol: 0 }, { expr: "6020 + 360", value: 6380, tol: 0 }]
              }
            },
            core: { hint: "Longer minus shorter. Then add your answer back to the shorter one to check." },
            stretch: { extend: "The Yenisey ends in the Kara Sea in the Arctic and the Amazon ends in the Atlantic near the Equator. Suggest one way the two rivers might be different because of where they are, and explain why." }
          },
          explain: "Say, in one sentence, how you checked your subtraction was right.",
          why: "The difference between two lengths is found by subtraction: 6516 − 5539 = 977 km."
        },
        {
          title: "Why farm beside the Nile?",
          task: {
            kind: "written",
            q: "Explain why the land beside the River Nile was such a good place for the Ancient Egyptians to farm, even though it is in a desert. Write one paragraph of four to six sentences.",
            marks: 4,
            criteria: [
              "I say that the Nile flooded every year and explain what the flood water left behind (silt).",
              "I explain why silt made the land fertile and name a crop that was grown.",
              "I mention that the river also gave water in a dry place.",
              "I use the word because at least once to link a cause to an effect."
            ],
            model: "The Nile was a good place to farm because it flooded every year. When the flood water went down it left behind a layer of fine mud called silt. Silt is full of nutrients, so the soil along the banks was very fertile and farmers could grow wheat and other crops. The river also gave water for drinking and for watering fields, which mattered because the land around it is desert. Because of the river, a great civilisation could grow in a place that would otherwise have been too dry to live in."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: say what the Nile did every year (it flooded).",
                "Sentence 2: say what the flood left behind and what that did to the soil.",
                "Sentence 3: name a crop and say the river also gave water.",
                "Sentence 4: finish with because, linking the river to why people could live there."
              ],
              example: {
                q: "Explain in two sentences why many towns are built on rivers.",
                steps: ["Give a reason: rivers give water for drinking and for crops.", "Give a second reason with because: boats could carry goods, because a river is a natural road."],
                answer: "Towns grew up on rivers because people needed water for drinking and for their fields. Rivers were also useful because boats could carry heavy goods much more easily than carts on land."
              }
            },
            core: { hint: "Flood, silt, fertile, crops, water. Link them with because." },
            stretch: { extend: "The yearly flood could also be a danger. Suggest one problem the flood might have caused and one way the Egyptians might have coped with it." }
          },
          explain: "Say, in one sentence, why a flood could be good news for a farmer.",
          why: "A top answer links the yearly flood to the silt it left, the silt to fertile soil and crops such as wheat, and the river to water in a desert, using because to show cause and effect."
        }
      ]
    },

    /* ───────────── 3 · a river at work ───────────── */
    {
      key: "river-at-work", n: 3, title: "A river at work: erosion, transportation and deposition",
      lead: "A river's journey from the hills to the sea, and the three jobs it does on the way: picking material up, carrying it and dropping it.",
      covers: [4, 6, 7],
      pretext: {
        words: [
          { word: "erosion", means: "wearing away the land and picking material up", sentence: "Erosion by the river made the valley deeper." },
          { word: "transportation", means: "carrying material along the river", sentence: "Transportation moves sand and pebbles downstream." },
          { word: "deposition", means: "dropping material the river was carrying", sentence: "Deposition builds up mud near the mouth of a river." },
          { word: "load", means: "all the material a river carries", sentence: "After a storm the river's load was full of mud and stones." },
          { word: "hydraulic action", means: "the sheer force of the water hitting the banks and bed", sentence: "Hydraulic action forces air and water into cracks in the bank." }
        ],
        passage: [
          "A river has its source in the hills, where most rain falls.",
          "Near the source it is small, fast and often has a waterfall.",
          "As it flows downstream it gets wider and deeper.",
          "This is because the river erodes the land.",
          "Erosion means wearing away and picking material up.",
          "The river erodes in four ways: hydraulic action, abrasion, attrition and solution.",
          "The material a river carries is called its load.",
          "A river carries its load in four ways: traction, saltation, suspension and solution.",
          "When a river slows down it loses energy.",
          "Then it drops its load.",
          "This is called deposition.",
          "Erosion, transportation, deposition: a river is always at work."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "تآكل الأرض وحمل موادّها (erosion)",
            "حمل الموادّ مع مجرى النهر (transportation)",
            "إلقاء الموادّ التي كان النهر يحملها (deposition)",
            "كلّ الموادّ التي يحملها النهر (load)",
            "قوّة الماء نفسها وهي تضرب الضفاف والقاع (hydraulic action)"
          ],
          "passage": [
            "منبع النهر في التلال، حيث يسقط أكثر المطر.",
            "قرب المنبع يكون النهر صغيرًا وسريعًا، وغالبًا ما يكون فيه شلّال.",
            "وكلّما جرى في اتّجاه المصبّ صار أعرض وأعمق.",
            "وذلك لأنّ النهر يُؤكّل الأرض.",
            "التعرية (erosion) تعني تآكل الأرض وحمل موادّها.",
            "يُؤكّل النهر الأرض بأربع طرق: الفعل الهيدروليكي (hydraulic action)، والبَري (abrasion)، والتحاتّ (attrition)، والإذابة (solution).",
            "الموادّ التي يحملها النهر تُسمّى حِمله (load).",
            "يحمل النهر حِمله بأربع طرق: الجرّ (traction)، والوثب (saltation)، والتعليق (suspension)، والإذابة (solution).",
            "عندما يبطئ النهر يفقد طاقته.",
            "وعندئذٍ يُلقي حِمله.",
            "يُسمّى هذا الترسيب (deposition).",
            "تعرية، ونقل، وترسيب: النهر يعمل دائمًا."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "ścieranie lądu i podrywanie materiału (erosion)",
            "niesienie materiału wzdłuż rzeki (transportation)",
            "upuszczanie materiału, który rzeka niosła (deposition)",
            "cały materiał, który niesie rzeka (load)",
            "sama siła wody uderzającej w brzegi i dno (hydraulic action)"
          ],
          "passage": [
            "Rzeka ma swoje źródło na wzgórzach, gdzie pada najwięcej deszczu.",
            "Blisko źródła jest mała, szybka i często ma wodospad.",
            "Płynąc w dół, staje się coraz szersza i głębsza.",
            "Dzieje się tak, ponieważ rzeka niszczy ląd, czyli go eroduje.",
            "Erozja (erosion) oznacza ścieranie i podrywanie materiału.",
            "Rzeka eroduje na cztery sposoby: działanie hydrauliczne (hydraulic action), abrazja (abrasion), atrycja (attrition) i rozpuszczanie (solution).",
            "Materiał, który niesie rzeka, nazywamy jej ładunkiem (load).",
            "Rzeka niesie swój ładunek na cztery sposoby: trakcja (traction), saltacja (saltation), zawieszenie (suspension) i rozpuszczanie (solution).",
            "Kiedy rzeka zwalnia, traci energię.",
            "Wtedy upuszcza swój ładunek.",
            "To nazywamy depozycją, czyli osadzaniem (deposition).",
            "Erozja, transport, depozycja: rzeka zawsze pracuje."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "desgastar a terra e arrancar material (erosion, erosão)",
            "levar o material ao longo do rio (transportation, transporte)",
            "largar o material que o rio levava (deposition, deposição)",
            "todo o material que um rio leva (load, carga)",
            "a pura força da água a bater/batendo nas margens e no leito (hydraulic action, ação hidráulica)"
          ],
          "passage": [
            "Um rio tem a sua nascente nas colinas, onde cai mais chuva.",
            "Perto da nascente ele é pequeno, rápido e muitas vezes tem uma queda de água/cachoeira.",
            "À medida que corre para jusante, vai ficando mais largo e mais fundo.",
            "Isto acontece porque o rio erode a terra.",
            "Erosão (erosion) quer dizer desgastar e arrancar material.",
            "O rio erode de quatro maneiras: ação hidráulica (hydraulic action), abrasão (abrasion), atrito (attrition) e dissolução (solution).",
            "O material que um rio leva chama-se a sua carga (load).",
            "Um rio leva a sua carga de quatro maneiras: tração (traction), saltação (saltation), suspensão (suspension) e dissolução (solution).",
            "Quando um rio abranda/desacelera, perde energia.",
            "Então larga a sua carga.",
            "A isto chama-se deposição (deposition).",
            "Erosão, transporte, deposição: um rio está sempre a trabalhar/trabalhando."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "nabaad-guurka dhulka iyo qaadista waxyaabaha (erosion)",
            "qaadista waxyaabaha oo webiga lala socdo (transportation)",
            "dejinta waxyaabaha webigu siday (deposition)",
            "dhammaan waxyaabaha webi sido (load)",
            "xooggii biyaha oo daraafka iyo sariirta ku dhufta (hydraulic action)"
          ],
          "passage": [
            "Webi ishiisa (source) buuraha ayay ku taal, halkaas oo roobka badankiisu ku da'o.",
            "Isha agteeda wuxuu yar yahay, dhaqso badan yahay, inta badanna biyo-dhac (waterfall) leeyahay.",
            "Markuu hoos u socdo wuxuu sii ballaadhaa oo sii qoto dheeraadaa.",
            "Sababtu waxay tahay webigu dhulka ayuu nabaad-guuriyaa (erode).",
            "Erosion macnaheedu waa nabaad-guur iyo qaadista waxyaabaha.",
            "Webigu wuxuu ku nabaad-guuriyaa afar siyaabood: hydraulic action, abrasion, attrition iyo solution.",
            "Waxyaabaha webigu sido waxaa la yiraahdaa load-kiisa.",
            "Webi load-kiisa afar siyaabood ayuu u sidaa: traction, saltation, suspension iyo solution.",
            "Marka webi gaabiyo tamar ayuu lumiyaa.",
            "Markaas load-kiisa ayuu dejiyaa.",
            "Tan waxaa la yiraahdaa deposition.",
            "Erosion, transportation, deposition: webi mar walba shaqo ayuu ku jiraa."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "руйнування землі та підхоплення матеріалу (erosion)",
            "перенесення матеріалу вздовж річки (transportation)",
            "скидання матеріалу, який річка несла (deposition)",
            "увесь матеріал, який несе річка (load)",
            "сама сила води, що б’є в береги та дно (hydraulic action)"
          ],
          "passage": [
            "Витік річки лежить у горах, де випадає найбільше дощу.",
            "Біля витоку річка мала, швидка і часто має водоспад.",
            "Коли вона тече вниз за течією, то стає ширшою і глибшою.",
            "Це тому, що річка руйнує землю.",
            "Ерозія (erosion) означає руйнування землі та підхоплення матеріалу.",
            "Річка руйнує чотирма способами: гідравлічна дія (hydraulic action), абразія (abrasion), стирання (attrition) і розчинення (solution).",
            "Матеріал, який несе річка, називається її наносами (load).",
            "Річка несе свої наноси чотирма способами: волочіння (traction), підскакування (saltation), у зваженому стані (suspension) і в розчині (solution).",
            "Коли річка сповільнюється, вона втрачає енергію.",
            "Тоді вона скидає свої наноси.",
            "Це називається відкладанням (deposition).",
            "Ерозія, перенесення, відкладання: річка завжди працює."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "زمین کو گھسانا اور مٹی پتھر اٹھا لینا (erosion)",
            "مٹی اور پتھر کو دریا کے ساتھ لے جانا (transportation)",
            "جو مٹی پتھر دریا لے جا رہا تھا، اسے گرا دینا (deposition)",
            "وہ سارا مادہ جو دریا اپنے ساتھ لے جاتا ہے (load)",
            "پانی کی خالص قوت جو کناروں اور تلے پر ٹکراتی ہے (hydraulic action)"
          ],
          "passage": [
            "دریا کا منبع پہاڑیوں میں ہوتا ہے، جہاں سب سے زیادہ بارش ہوتی ہے۔",
            "منبع کے قریب یہ چھوٹا اور تیز ہوتا ہے، اور اکثر اس میں کوئی آبشار ہوتی ہے۔",
            "جیسے جیسے یہ نیچے کی طرف بہتا ہے، چوڑا اور گہرا ہوتا جاتا ہے۔",
            "اس کی وجہ یہ ہے کہ دریا زمین کو گھساتا ہے۔",
            "گھسائی (erosion) کا مطلب ہے زمین کو گھسانا اور مٹی پتھر اٹھا لینا۔",
            "دریا چار طریقوں سے گھسائی کرتا ہے: hydraulic action، abrasion، attrition اور solution۔",
            "جو مادہ دریا اپنے ساتھ لے جاتا ہے، اسے اس کا load کہتے ہیں۔",
            "دریا اپنا load چار طریقوں سے لے جاتا ہے: traction، saltation، suspension اور solution۔",
            "جب دریا کی رفتار کم ہوتی ہے تو اس کی توانائی کم ہو جاتی ہے۔",
            "تب وہ اپنا load گرا دیتا ہے۔",
            "اسے deposition کہتے ہیں۔",
            "گھسائی، منتقلی، جمع کرنا: دریا ہر وقت کام میں لگا رہتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "A river's journey",
          paragraphs: [
            "A river begins its journey at its source in the hills or mountains. This is where most rain falls, and the ground is often boggy. The young river is narrow, shallow and fast, tumbling over rocks. This first part of its journey is the upper course, and it is here that you find waterfalls.",
            "As the river flows downstream into its middle course, tributaries join it and it carries more water. It becomes wider and deeper, partly because it is wearing away its own channel. It starts to swing from side to side in large bends called meanders.",
            "In the lower course the river is at its widest and deepest, moving slowly across flat land. Finally it flows into the sea at its mouth, often through a wide estuary. Along the whole journey the river has been doing three jobs: eroding, transporting and depositing."
          ],
          worked: {
            q: "Describe how a river changes from its source to its mouth. (4 marks)",
            steps: [
              "Start at the source: in the hills, narrow, shallow and fast, with waterfalls in the upper course.",
              "Give the reason for change: tributaries add water and the river erodes its channel, so it grows.",
              "Describe the middle course: wider, deeper, with meanders.",
              "Finish at the mouth: widest, deepest and slowest, flowing into the sea, often through an estuary."
            ],
            answer: "At its source in the hills the river is narrow, shallow and fast, with waterfalls. Downstream, tributaries join it and it erodes its channel, so it becomes wider and deeper and forms meanders. In the lower course it is widest and slowest, and it flows into the sea at its mouth."
          }
        },
        {
          heading: "Erosion: four ways a river wears away the land",
          paragraphs: [
            "Erosion means wearing away the land and picking the material up. A river erodes its bed and its banks in four ways. Hydraulic action is the sheer force of the moving water hitting the banks and bed. It forces water and air into cracks and breaks pieces off.",
            "Abrasion (some books call it corrasion) is when rocks and sand carried by the river scrape against the banks and bed, wearing them away like sandpaper. Attrition is when rocks carried by the river knock into each other and break into smaller, smoother, rounder pieces. Attrition wears down the load, not the banks.",
            "Solution (also called corrosion) is when river water, which is slightly acidic, dissolves rocks such as limestone and chalk. You cannot see it happening, but over thousands of years it carves out caves and gorges."
          ],
          tip: "Attrition is the odd one out: it wears down the stones the river carries. The other three wear away the banks and bed."
        },
        {
          heading: "Transportation: four ways a river carries its load",
          paragraphs: [
            "Everything a river carries is its load: boulders, pebbles, sand, mud and dissolved minerals. The river moves this load in four ways, and the way depends on size. Traction is when large stones are rolled along the bed by the current. Saltation is when sand-sized particles bounce along the bed in a leap-frog movement.",
            "Suspension is when very small particles, such as silt and clay, float along in the water. This is what makes a river look brown after heavy rain. Solution is when minerals are dissolved in the water and carried along invisibly.",
            "Notice that solution appears twice in this chapter. As an erosion process it means dissolving rock; as a transportation process it means carrying the dissolved minerals away. Same word, two jobs."
          ],
          tip: "Big stuff rolls (traction), medium stuff hops (saltation), small stuff floats (suspension), dissolved stuff is invisible (solution)."
        },
        {
          heading: "Deposition: when the river lets go",
          paragraphs: [
            "A river needs energy to carry its load, and it gets that energy from flowing fast. When a river slows down it loses energy and can no longer carry everything. It drops its load. This is deposition.",
            "The heaviest material is dropped first, so boulders are left in the upper course and only fine mud reaches the sea. Deposition usually happens where the river is slowest: near its mouth, on the inside of bends, and across the floodplain when a flood spreads out and slows down.",
            "Erosion, transportation and deposition work together. Material eroded in the hills is transported downstream and deposited near the sea. Over thousands of years this shapes every landform you will meet in Chapter 4."
          ]
        }
      ],
      gate: [
        { kind: "mcq", q: "Which erosion process is the sheer force of the water hitting the river's banks and bed?", options: ["Hydraulic action", "Abrasion", "Attrition", "Solution"], answer: 0, why: "Hydraulic action is erosion by the force of the water itself.",
          feedback: [
            "",
            "Abrasion is when rocks carried by the river scrape the banks and bed, like sandpaper. The force of the water itself, with no rocks involved, is hydraulic action.",
            "Attrition is rocks in the load knocking into each other and breaking up. It does not wear away the banks. The force of water hitting the banks and bed is hydraulic action.",
            "Solution is rock being dissolved by slightly acidic water. It is slow and invisible, not a force hitting the banks. The force of the water is hydraulic action."
          ] },
        { kind: "gap", q: "Rocks carried by the river knock into each other and break into smaller, rounder pieces. This is ___.", answer: "attrition", options: ["attrition", "abrasion", "saltation"], why: "Attrition is load hitting load; it makes pebbles smaller and smoother.",
          feedback: {
            "abrasion": "Abrasion is rocks scraping against the banks and bed. When rocks hit each other instead, and break up, that is attrition.",
            "saltation": "Saltation is a way of carrying the load: sand bouncing along the bed. Rocks breaking each other into smaller pieces is attrition, an erosion process."
          } },
        { kind: "mcq", q: "When does a river deposit its load?", options: ["When it slows down and loses energy", "When it speeds up and gains energy", "When it reaches a waterfall", "When it rains heavily"], answer: 0, why: "A river needs energy to carry material; when it slows and loses energy, it drops the load.",
          feedback: [
            "",
            "A faster river has more energy, so it can carry more, not less. It is when the river slows down and loses energy that it has to drop its load.",
            "At a waterfall the river is fast and powerful, so it erodes rather than deposits. Deposition happens where the river is slow, such as near the mouth or on the inside of bends.",
            "Heavy rain makes a river faster and fuller, so it carries more load, not less. Deposition happens when the river slows down and loses energy."
          ] }
      ],
      modules: [
        {
          title: "Four ways to erode",
          task: {
            kind: "match",
            q: "Match each erosion process to what happens.",
            pairs: [
              ["Hydraulic action", "The sheer force of the water hits the banks and bed"],
              ["Abrasion", "Rocks carried by the river scrape the banks and bed like sandpaper"],
              ["Attrition", "Rocks in the load knock into each other and break into smaller pieces"],
              ["Solution", "Slightly acidic water dissolves rocks such as limestone"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask of each description: is it the water doing the work, or rocks?",
                "Water alone, with force, is hydraulic action. Water dissolving rock quietly is solution.",
                "Rocks against the banks is abrasion (think sandpaper). Rocks against rocks is attrition.",
                "Check: the only process that wears down the load itself is attrition."
              ],
              example: {
                q: "A sea cliff is being worn away. Match: waves smash into cracks in the cliff; pebbles thrown by waves scrape the cliff. Choices: abrasion, hydraulic action.",
                steps: ["Waves smashing into cracks is the force of water: hydraulic action.", "Pebbles scraping the cliff is abrasion."],
                answer: "Waves smashing: hydraulic action. Pebbles scraping: abrasion."
              }
            },
            core: { hint: "Hydraulic means water. Solution means dissolving. The other two involve rocks: against the bank, or against each other." },
            stretch: { extend: "Explain why pebbles in the lower course of a river are usually small, smooth and round, naming the process responsible." }
          },
          explain: "Say, in one sentence, how abrasion and attrition are different.",
          why: "Hydraulic action: force of water. Abrasion: load scraping banks and bed. Attrition: load hitting load. Solution: acidic water dissolving rock."
        },
        {
          title: "Hop, roll, float or dissolve?",
          task: {
            kind: "mcq",
            q: "A sand-sized grain is bounced along the river bed in a leap-frog movement. Which transportation process is this?",
            options: ["Saltation", "Traction", "Suspension", "Solution"],
            answer: 0,
            feedback: [
              "",
              "Traction is large stones being rolled along the bed; they are too heavy to bounce. A sand grain bouncing in hops is saltation.",
              "Suspension is very small particles, such as silt, floating along inside the water without touching the bed. A grain bouncing along the bed is saltation.",
              "Solution is minerals dissolved in the water, so there is nothing solid to see. A sand grain is solid and bouncing, so this is saltation."
            ],
            why: "Saltation is the leap-frog movement of sand-sized particles along the bed."
          },
          contexts: [
            { label: "The River Thames", q: "On the bed of the River Thames, sand grains are being bounced along in a leap-frog movement by the current. Which transportation process is this?" },
            { label: "A stream in the park", q: "You watch a small stream in a park. Grains of sand hop along the bottom, lift up, then land a little further on. Which transportation process is this?" },
            { label: "A model river", q: "In a tray of sand with water poured down it, you see sand grains hopping along the bottom of the little channel. Which transportation process is this?" }
          ],
          levels: {
            support: {
              steps: [
                "Decide the size: is it a boulder, a sand grain, fine mud or something dissolved?",
                "Decide the movement: rolling, bouncing, floating or invisible?",
                "Sand-sized plus bouncing points to one process only.",
                "Rule out the others: rolling is traction, floating is suspension, dissolved is solution."
              ],
              example: {
                q: "A large stone is rolled slowly along the bed of a fast river. Which transportation process is this?",
                steps: ["It is large, so it is too heavy to bounce or float.", "It is rolling along the bed.", "Large stones rolled along the bed is traction."],
                answer: "Traction"
              }
            },
            core: { hint: "Saltation comes from a Latin word meaning to jump." },
            stretch: { extend: "Predict what happens to the same sand grain when the river slows down near its mouth, and name the process." }
          },
          explain: "Say, in one sentence, how the size of a particle decides the way the river carries it.",
          why: "Saltation: sand-sized particles bouncing along the bed. Traction: large stones rolled. Suspension: fine particles floating. Solution: dissolved minerals."
        },
        {
          title: "From the hills to the sea",
          task: {
            kind: "order",
            q: "Put the stages of a river's journey in order, from source to mouth.",
            items: [
              "The river starts at its source in boggy high land where most rain falls",
              "In the upper course the small, fast river tumbles over a waterfall",
              "Tributaries join and the river becomes wider and deeper",
              "In the middle course the river swings in large bends called meanders",
              "In the lower course the wide, slow river flows into the sea at its mouth"
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the stage with the word source: that is always first.",
                "Find the stage with the word mouth: that is always last.",
                "Waterfalls belong to the upper course, near the start, so that comes second.",
                "The river must get bigger before it meanders, so wider and deeper comes before meanders."
              ],
              example: {
                q: "Put these stages of a school day in order: lunch, registration, going home, first lesson.",
                steps: ["The day begins with registration.", "First lesson comes before lunch.", "Going home is last."],
                answer: "registration, first lesson, lunch, going home"
              }
            },
            core: { hint: "Source, upper course, growing, middle course, lower course and mouth." },
            stretch: { extend: "Explain why the river gets wider and deeper as it travels, using at least two of the words erosion, tributary and load." }
          },
          explain: "Say, in one sentence, why waterfalls are found near the source and not near the mouth.",
          why: "Source in the hills; waterfall in the upper course; tributaries make it wider and deeper; meanders in the middle course; mouth at the sea in the lower course."
        }
      ]
    },

    /* ───────────── 4 · landforms ───────────── */
    {
      key: "landforms", n: 4, title: "Landforms: valleys, waterfalls and meanders",
      lead: "The shapes a river carves and builds along its course, and the step-by-step stories of how a waterfall and a meander are made.",
      covers: [8, 9],
      pretext: {
        words: [
          { word: "long profile", means: "a side view of a river from source to mouth", sentence: "The long profile shows the river is steep near its source." },
          { word: "V-shaped valley", means: "a steep, narrow valley in the upper course", sentence: "The stream has cut a V-shaped valley into the hillside." },
          { word: "plunge pool", means: "the deep pool at the bottom of a waterfall", sentence: "The falling water has worn out a deep plunge pool." },
          { word: "gorge", means: "a narrow, steep-sided valley left behind by a retreating waterfall", sentence: "Downstream of the waterfall is a rocky gorge." },
          { word: "meander", means: "a large bend in a river", sentence: "The river swings round a wide meander." },
          { word: "oxbow lake", means: "a curved lake left when a meander is cut off", sentence: "An oxbow lake sits beside the river where a bend used to be." }
        ],
        passage: [
          "A river can be looked at in two ways.",
          "The long profile is a side view from source to mouth.",
          "It is steep near the source and gentle near the mouth.",
          "A cross section is a slice across the valley.",
          "In the upper course the valley is narrow and steep: a V-shaped valley.",
          "The river winds between fingers of high land called interlocking spurs.",
          "Where hard rock lies over soft rock, a waterfall forms.",
          "The waterfall slowly moves back upstream and leaves a gorge.",
          "In the middle course the river bends from side to side.",
          "Each bend is a meander.",
          "Sometimes a meander is cut off from the river.",
          "It becomes a curved oxbow lake."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "منظر جانبي للنهر من المنبع إلى المصبّ (long profile)",
            "وادٍ ضيّق شديد الانحدار في المجرى الأعلى (V-shaped valley)",
            "البركة العميقة في أسفل الشلّال (plunge pool)",
            "وادٍ ضيّق جوانبه شديدة الانحدار يتركه الشلّال وهو يتراجع (gorge)",
            "انحناء كبير في النهر (meander)",
            "بحيرة منحنية تبقى عندما يُقطع المنعطف عن النهر (oxbow lake)"
          ],
          "passage": [
            "يمكن النظر إلى النهر بطريقتَين.",
            "المقطع الطولي (long profile) منظر جانبي من المنبع إلى المصبّ.",
            "يكون شديد الانحدار قرب المنبع ولطيف الانحدار قرب المصبّ.",
            "المقطع العرضي (cross section) شريحة عبر الوادي.",
            "في المجرى الأعلى يكون الوادي ضيّقًا وشديد الانحدار: وادٍ على شكل حرف V (V-shaped valley).",
            "يتلوّى النهر بين أصابع من الأرض المرتفعة تُسمّى النتوءات المتشابكة (interlocking spurs).",
            "حيث تقع صخور صلبة فوق صخور ليّنة، يتكوّن شلّال.",
            "يتراجع الشلّال ببطء نحو أعلى المجرى ويترك خلفه خانقًا (gorge).",
            "في المجرى الأوسط ينحني النهر من جانب إلى جانب.",
            "كلّ انحناء يُسمّى منعطفًا (meander).",
            "وأحيانًا يُقطع المنعطف عن النهر.",
            "فيصبح بحيرة منحنية تُسمّى البحيرة الهلالية (oxbow lake)."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "widok rzeki z boku, od źródła do ujścia (long profile)",
            "stroma, wąska dolina w górnym biegu rzeki (V-shaped valley)",
            "głębokie zagłębienie z wodą u podnóża wodospadu (plunge pool)",
            "wąska dolina o stromych zboczach, pozostawiona przez cofający się wodospad (gorge)",
            "duży zakręt rzeki (meander)",
            "zakrzywione jezioro, które zostaje, gdy meander zostanie odcięty (oxbow lake)"
          ],
          "passage": [
            "Na rzekę można patrzeć na dwa sposoby.",
            "Profil podłużny (long profile) to widok z boku, od źródła do ujścia.",
            "Jest stromy blisko źródła i łagodny blisko ujścia.",
            "Przekrój poprzeczny (cross section) to przecięcie doliny w poprzek.",
            "W górnym biegu dolina jest wąska i stroma: to dolina V-kształtna (V-shaped valley).",
            "Rzeka wije się między wysuniętymi wzgórzami, zwanymi zazębiającymi się ostrogami (interlocking spurs).",
            "Tam, gdzie twarda skała leży na miękkiej, powstaje wodospad.",
            "Wodospad powoli cofa się w górę rzeki i zostawia za sobą wąwóz (gorge).",
            "W środkowym biegu rzeka zakręca raz w jedną, raz w drugą stronę.",
            "Każdy taki zakręt to meander.",
            "Czasami meander zostaje odcięty od rzeki.",
            "Staje się wtedy zakrzywionym starorzeczem (oxbow lake)."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma vista de lado de um rio, da nascente até à foz (long profile, perfil longitudinal)",
            "um vale estreito e íngreme no curso superior (V-shaped valley, vale em V)",
            "a poça/o poço fundo ao pé de uma queda de água (plunge pool)",
            "um vale estreito, de paredes íngremes, deixado por uma queda de água que recuou (gorge, garganta)",
            "uma grande curva num rio (meander, meandro)",
            "um lago curvo que fica quando um meandro é cortado do rio (oxbow lake, lago em ferradura)"
          ],
          "passage": [
            "Podemos olhar para um rio de duas maneiras.",
            "O perfil longitudinal (long profile) é uma vista de lado, da nascente até à foz.",
            "É íngreme perto da nascente e suave perto da foz.",
            "Um corte transversal (cross section) é uma fatia atravessando o vale.",
            "No curso superior o vale é estreito e íngreme: um vale em V (V-shaped valley).",
            "O rio serpenteia entre dedos de terra alta chamados esporões (interlocking spurs).",
            "Onde há rocha dura por cima de rocha macia, forma-se uma queda de água/cachoeira (waterfall).",
            "A queda de água recua devagar para montante e deixa uma garganta (gorge).",
            "No curso médio o rio faz curvas de um lado para o outro.",
            "Cada curva é um meandro (meander).",
            "Às vezes um meandro é cortado do rio.",
            "Transforma-se num lago curvo em ferradura (oxbow lake)."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "muuqaalka dhinaca ee webi laga eego isha ilaa afka (long profile)",
            "dooxo dheer oo cidhiidhi ah oo qaybta sare ku taal (V-shaped valley)",
            "balli qoto dheer oo biyo-dhac hoostii ah (plunge pool)",
            "dooxo cidhiidhi ah oo dhinacyo dheer leh oo biyo-dhac dib u guuray ka tagay (gorge)",
            "leexo weyn oo webi ku jirta (meander)",
            "haro qalloocan oo hartay marka meander la gooyo (oxbow lake)"
          ],
          "passage": [
            "Webi laba siyaabood ayaa loo eegi karaa.",
            "Long profile waa muuqaal dhinaca ah oo isha ilaa afka laga eego.",
            "Isha agteeda wuxuu dheer yahay, afka agtiisana wuu fudud yahay.",
            "Cross section waa gooyn dooxada laga sameeyo.",
            "Qaybta sare dooxadu way cidhiidhi tahay oo dheer tahay: V-shaped valley.",
            "Webigu wuxuu dhex maraa faro dhul sare oo la yiraahdo interlocking spurs.",
            "Meesha dhagax adag dhagax jilicsan dul saaran yahay, biyo-dhac (waterfall) ayaa samaysma.",
            "Biyo-dhacu si tartiib ah dib ayuu u guuraa oo wuxuu ka tagaa gorge.",
            "Qaybta dhexe webigu dhinac ilaa dhinac ayuu u leexleexdaa.",
            "Leexo kasta waa meander.",
            "Mararka qaar meander webiga ayaa laga gooyaa.",
            "Wuxuu noqdaa haro qalloocan oo la yiraahdo oxbow lake."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "вигляд річки збоку від витоку до гирла (long profile)",
            "крута вузька долина у верхній течії (V-shaped valley)",
            "глибока водойма біля підніжжя водоспаду (plunge pool)",
            "вузька долина з крутими схилами, яку залишає водоспад, що відступає (gorge)",
            "великий вигин річки (meander)",
            "вигнуте озеро, що залишається, коли меандр відрізається від річки (oxbow lake)"
          ],
          "passage": [
            "На річку можна дивитися двома способами.",
            "Поздовжній профіль (long profile) — це вигляд збоку від витоку до гирла.",
            "Він крутий біля витоку і пологий біля гирла.",
            "Поперечний переріз (cross section) — це зріз через долину.",
            "У верхній течії долина вузька і крута: це V-подібна долина (V-shaped valley).",
            "Річка в’ється між виступами підвищеної землі, які називаються interlocking spurs.",
            "Там, де тверда порода лежить над м’якою, утворюється водоспад.",
            "Водоспад повільно відступає вгору за течією і залишає ущелину (gorge).",
            "У середній течії річка вигинається з боку в бік.",
            "Кожен вигин — це меандр (meander).",
            "Іноді меандр відрізається від річки.",
            "Він стає вигнутим озером-старицею (oxbow lake)."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "منبع سے دہانے تک دریا کا ایک پہلو سے منظر (long profile)",
            "بالائی حصے کی ایک ڈھلوان، تنگ وادی (V-shaped valley)",
            "آبشار کے نیچے کا گہرا تالاب (plunge pool)",
            "ایک تنگ، کھڑی دیواروں والی وادی جو پیچھے ہٹتی آبشار چھوڑ جاتی ہے (gorge)",
            "دریا کا ایک بڑا موڑ (meander)",
            "ایک خم دار جھیل جو meander کے کٹ جانے پر رہ جاتی ہے (oxbow lake)"
          ],
          "passage": [
            "دریا کو دو طرح سے دیکھا جا سکتا ہے۔",
            "long profile منبع سے دہانے تک پہلو کا منظر ہے۔",
            "یہ منبع کے قریب ڈھلوان اور دہانے کے قریب ہموار ہوتا ہے۔",
            "cross section وادی کے آر پار ایک قاش ہے۔",
            "بالائی حصے میں وادی تنگ اور ڈھلوان ہوتی ہے: ایک V-shaped valley۔",
            "دریا اونچی زمین کی انگلیوں جیسی شاخوں کے بیچ سے گزرتا ہے، جنھیں interlocking spurs کہتے ہیں۔",
            "جہاں سخت چٹان نرم چٹان کے اوپر ہو، وہاں آبشار بنتی ہے۔",
            "آبشار آہستہ آہستہ پیچھے کی طرف ہٹتی جاتی ہے اور ایک gorge چھوڑ جاتی ہے۔",
            "درمیانی حصے میں دریا ایک طرف سے دوسری طرف موڑ کھاتا ہے۔",
            "ہر موڑ ایک meander ہے۔",
            "کبھی کبھی کوئی meander دریا سے کٹ کر الگ ہو جاتا ہے۔",
            "وہ ایک خم دار oxbow lake بن جاتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Two ways to look at a river",
          paragraphs: [
            "Geographers draw a river in two ways. The long profile is a side view of the whole river from source to mouth. It looks like a slide: steep at the top in the upper course, flattening out through the middle course, and almost level in the lower course near the sea.",
            "A cross section is a slice straight across the valley, as if you had cut it with a knife. In the upper course the cross section is a narrow, steep-sided V. In the middle course it is wider, with a flat floor. In the lower course it is very wide and flat, with the river winding across a floodplain.",
            "Each course has its own landforms. The upper course is shaped mostly by erosion: V-shaped valleys, interlocking spurs, waterfalls and gorges. The middle and lower courses are shaped by erosion and deposition together: meanders, oxbow lakes and floodplains."
          ],
          tip: "Long profile = side view, source to mouth. Cross section = a slice across. Learn which is which before you draw them."
        },
        {
          heading: "The upper course: V-shaped valleys, spurs and waterfalls",
          paragraphs: [
            "In the upper course the river is small but fast, and it cuts down into the land. Hydraulic action and abrasion deepen the channel, and the steep sides above it slip and wash down, making a V-shaped valley. The river is not strong enough to cut sideways through the ridges of hard land, so it winds between them. These ridges are interlocking spurs.",
            "A waterfall forms where a band of hard rock lies on top of softer rock. The river erodes the soft rock faster, by hydraulic action and abrasion, so a step appears. Water pours over the step and swirls at the bottom, carving a deep plunge pool. The soft rock behind the pool is worn away, leaving the hard rock sticking out as an overhang.",
            "In time the overhang has nothing holding it up, and it collapses into the plunge pool. The fallen rocks are swirled around and help to deepen the pool. The waterfall is now a little further upstream. This happens again and again, so the waterfall retreats upstream and leaves behind a steep, narrow, rocky valley: a gorge."
          ],
          worked: {
            q: "Explain how a waterfall and a gorge are formed. (4 marks)",
            steps: [
              "Set the scene: hard rock lies on top of soft rock.",
              "Name the processes: the river erodes the soft rock faster by hydraulic action and abrasion, forming a step and then a plunge pool.",
              "Describe the overhang: soft rock is cut back behind the pool, so the hard rock overhangs, then collapses.",
              "Finish with retreat: this repeats, the waterfall moves upstream, and a gorge is left behind."
            ],
            answer: "Hard rock over soft rock; the soft rock erodes faster by hydraulic action and abrasion, forming a step and a plunge pool; the soft rock is undercut so the hard rock overhangs and collapses; the process repeats, the waterfall retreats upstream and leaves a gorge."
          }
        },
        {
          heading: "The middle course: meanders and oxbow lakes",
          paragraphs: [
            "In the middle course the river has more water and a gentler slope, so it starts to swing from side to side in large bends called meanders. On the outside of each bend the water is fastest and deepest, so it erodes the bank, making it steep. On the inside the water is slowest, so it deposits sand and pebbles, making a gentle slope.",
            "Because the outer bank is eroded and the inner bank is built up, the bend grows bigger and moves outwards over time. Two bends can grow towards each other until only a narrow neck of land separates them.",
            "During a flood the river has extra power and cuts straight through the neck. It now takes the shorter route. Deposition seals off the ends of the old bend, and the curved loop of water left behind is an oxbow lake. Slowly it fills with mud and plants, until only a curved mark in the field shows where the river once flowed."
          ],
          tip: "Outside of the bend: fast, deep, erosion. Inside of the bend: slow, shallow, deposition. Say both halves in an explain question."
        },
        {
          heading: "Which landform, which course?",
          paragraphs: [
            "You can sort every river landform by two questions: which course is it in, and was it made by erosion, deposition or both? The V-shaped valley, interlocking spurs, the waterfall and the gorge are all upper-course landforms made by erosion.",
            "Meanders are made by erosion on the outer bank and deposition on the inner bank, so they need both. Oxbow lakes are made in the same way. They are found in the middle and lower courses. The floodplain is a lower-course landform built by deposition when flood water spreads out, slows down and drops its load.",
            "If a test asks you to label a picture of a river, start with the easy ones: the waterfall and the gorge in the hills, the big bends and the oxbow lake on the flat land. Then fit the others around them."
          ]
        }
      ],
      gate: [
        { kind: "mcq", q: "In which course of a river would you expect to find a waterfall?", options: ["The upper course", "The middle course", "The lower course", "At the mouth"], answer: 0, why: "Waterfalls form in the steep upper course, near the source.",
          feedback: [
            "",
            "The middle course is where the river bends in meanders on a gentler slope. Waterfalls need a steep drop, which you find in the upper course near the source.",
            "The lower course is wide, slow and flat, where the river deposits its load. A waterfall needs a steep slope, so it belongs to the upper course.",
            "At the mouth the river is at its flattest and slowest as it meets the sea. Waterfalls are in the steep upper course, near the source."
          ] },
        { kind: "gap", q: "The deep pool worn out at the bottom of a waterfall is called a ___ pool.", answer: "plunge", options: ["plunge", "oxbow", "meander"], why: "Falling water carves out a plunge pool at the base of the waterfall.",
          feedback: {
            "oxbow": "An oxbow is a curved lake left when a meander is cut off, in the middle or lower course. The pool at the foot of a waterfall is a plunge pool.",
            "meander": "A meander is a large bend in a river, not a pool. The deep pool carved out where the water lands at the foot of a waterfall is a plunge pool."
          } },
        { kind: "mcq", q: "What is a meander?", options: ["A large bend in a river", "A waterfall that has moved upstream", "A small river that joins a bigger one", "The flat land beside a river"], answer: 0, why: "A meander is a large winding bend in a river's middle or lower course.",
          feedback: [
            "",
            "A waterfall that has moved upstream leaves a gorge behind it. A meander has nothing to do with waterfalls: it is a large bend in the river.",
            "A small river that joins a bigger one is a tributary. A meander is a bend in the river itself.",
            "The flat land beside a river is the floodplain. A meander is a large bend in the river that winds across it."
          ] }
      ],
      modules: [
        {
          title: "How a waterfall is made",
          task: {
            kind: "order",
            q: "Put the stages in the formation of a waterfall and gorge in the correct order.",
            items: [
              "A band of hard rock lies on top of softer rock",
              "The river erodes the soft rock faster, making a step",
              "Falling water carves a deep plunge pool",
              "Soft rock is cut back behind the pool, leaving an overhang of hard rock",
              "The overhang collapses into the plunge pool",
              "The waterfall retreats upstream, leaving a gorge"
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the rocks, before the river has done anything: hard over soft.",
                "The river must erode the soft rock before there is a step, and there must be a step before water can fall and make a pool.",
                "An overhang can only form once there is a pool to cut back from, and it can only collapse once it exists.",
                "Retreat and the gorge come last, because they are the result of many collapses."
              ],
              example: {
                q: "Put these stages of a sandcastle being washed away in order: the castle collapses; waves reach the base; the sea comes in; the base is hollowed out.",
                steps: ["First the sea has to come in.", "Then waves reach the base and hollow it out.", "Only then can the castle collapse."],
                answer: "the sea comes in, waves reach the base, the base is hollowed out, the castle collapses"
              }
            },
            core: { hint: "Rocks, step, pool, overhang, collapse, retreat." },
            stretch: { extend: "Explain why the plunge pool gets deeper after the overhang collapses, naming the erosion process involved." }
          },
          explain: "Say, in one sentence, why the waterfall moves upstream rather than staying in one place.",
          why: "Hard rock over soft; soft rock eroded to make a step; plunge pool carved; undercutting leaves an overhang; the overhang collapses; repeated collapse makes the waterfall retreat and leaves a gorge."
        },
        {
          title: "From meander to oxbow lake",
          task: {
            kind: "order",
            q: "Put the stages in the formation of an oxbow lake in the correct order.",
            items: [
              "The river flows round a meander: erosion on the outer bank, deposition on the inner bank",
              "The bend grows and the neck of land between two bends gets narrower",
              "In a flood the river cuts straight through the neck",
              "The river takes the new, shorter route",
              "Deposition seals off the old bend, leaving an oxbow lake"
            ]
          },
          levels: {
            support: {
              steps: [
                "Begin with the ordinary meander, before anything dramatic happens.",
                "The neck has to get narrow before the river can break through it.",
                "The break-through comes in a flood; then the river uses the new route.",
                "The old bend is only a lake once it has been sealed off, so that is last."
              ],
              example: {
                q: "Put these stages of a shortcut being made across a field in order: a path is worn across the corner; the gate is left open; everyone uses the path; the old long way round grows over.",
                steps: ["The gate is left open first.", "A path is worn across the corner, then everyone uses it.", "The old route grows over last."],
                answer: "the gate is left open, a path is worn across the corner, everyone uses the path, the old long way round grows over"
              }
            },
            core: { hint: "Bend, narrow neck, break through, new route, sealed off." },
            stretch: { extend: "Explain why the outer bank of a meander is eroded while the inner bank is built up, using the words fast, slow, energy and deposition." }
          },
          explain: "Say, in one sentence, why a flood is usually needed for the river to cut through the neck.",
          why: "Outer bank erodes and inner bank builds up; the neck narrows; a flood breaks through; the river takes the shorter route; deposition seals the old bend as an oxbow lake."
        },
        {
          title: "Name that landform",
          task: {
            kind: "match",
            q: "Match each river landform to its description.",
            pairs: [
              ["V-shaped valley", "A narrow, steep-sided valley cut by a fast river in the upper course"],
              ["Interlocking spurs", "Ridges of high land that the river winds between in the upper course"],
              ["Gorge", "A steep, narrow, rocky valley left behind as a waterfall retreats"],
              ["Meander", "A large bend in the river's middle or lower course"],
              ["Oxbow lake", "A curved lake left when a meander is cut off from the river"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Two landforms are valleys: one is cut by a young river (V-shaped), one is left by a waterfall (gorge).",
                "Spurs are fingers of high land; interlocking means they fit together like clasped fingers.",
                "A meander is a bend you can still sail round.",
                "An oxbow lake used to be a bend but is now cut off."
              ],
              example: {
                q: "Match: waterfall, floodplain. Choices: flat land beside a river built by deposition; a step in the river where water falls over hard rock.",
                steps: ["Water falls at a waterfall, over the hard rock step.", "A floodplain is the flat land that floods and is built by deposition."],
                answer: "Waterfall: the step where water falls. Floodplain: flat land built by deposition."
              }
            },
            core: { hint: "Upper course first: valley, spurs, gorge. Then the two bend words: still a bend, or cut off?" },
            stretch: { extend: "For each of the five landforms, say whether it was made by erosion, deposition or both, and which course it is in." }
          },
          explain: "Say, in one sentence, how a gorge and a V-shaped valley are different, even though both are steep valleys.",
          why: "V-shaped valley: cut downwards by a young river. Interlocking spurs: ridges the river winds between. Gorge: left by a retreating waterfall. Meander: a bend. Oxbow lake: a cut-off bend."
        }
      ]
    },

    /* ───────────── 5 · why rivers flood ───────────── */
    {
      key: "why-rivers-flood", n: 5, title: "Why rivers flood",
      lead: "What a flood is, the chain of events that causes one, the physical and human factors that raise the risk, and what happened in Somerset in 2014 and Bangladesh in 1998.",
      covers: [10, 11],
      pretext: {
        words: [
          { word: "flood", means: "when a river has more water than its channel can hold", sentence: "After a week of rain the river burst its banks in a flood." },
          { word: "floodplain", means: "the flat land on either side of a river that floods", sentence: "The houses on the floodplain were the first to get wet." },
          { word: "saturated", means: "so full of water that it cannot hold any more", sentence: "The ground was saturated, so the rain ran straight off it." },
          { word: "infiltration", means: "water soaking down into the soil", sentence: "Infiltration slows down when the soil is already wet." },
          { word: "surface run-off", means: "water flowing over the ground into a river", sentence: "Surface run-off from the car park rushed into the stream." },
          { word: "flash flood", means: "a sudden flood after a burst of very heavy rain", sentence: "A flash flood swept down the high street within an hour." }
        ],
        passage: [
          "A flood happens when a river gets more water than its channel can hold.",
          "The water flows over the banks onto the floodplain.",
          "The floodplain is the flat land on either side of the river.",
          "Floods usually start with heavy rain that goes on for a long time.",
          "The soil soaks up water until it is saturated.",
          "Then infiltration slows down, because the ground is full.",
          "More water flows over the surface as run-off.",
          "The river rises quickly and spills over its banks.",
          "Some causes of flooding are physical, like heavy rain and steep slopes.",
          "Some are human, like cutting down trees and building on floodplains.",
          "In 2014 the Somerset Levels in England flooded for weeks.",
          "In 1998 most of Bangladesh was under water.",
          "A flood in a poorer country often hurts people much more."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "عندما يكون في النهر ماء أكثر ممّا يستطيع مجراه أن يحمل (flood)",
            "الأرض المنبسطة على جانبَي النهر التي تغمرها المياه (floodplain)",
            "مملوء بالماء حتى إنه لا يستطيع أن يحمل المزيد (saturated)",
            "تسرّب الماء إلى داخل التربة (infiltration)",
            "ماء يجري فوق سطح الأرض إلى النهر (surface run-off)",
            "فيضان مفاجئ بعد هطول مطر شديد جدًا (flash flood)"
          ],
          "passage": [
            "يحدث الفيضان (flood) عندما يصل إلى النهر ماء أكثر ممّا يستطيع مجراه أن يحمل.",
            "يفيض الماء فوق الضفاف إلى السهل الفيضي.",
            "السهل الفيضي (floodplain) هو الأرض المنبسطة على جانبَي النهر.",
            "تبدأ الفيضانات عادةً بمطر شديد يستمرّ وقتًا طويلًا.",
            "تمتصّ التربة الماء حتى تتشبّع (saturated).",
            "عندئذٍ يبطئ التسرّب (infiltration)، لأنّ الأرض مملوءة.",
            "فيجري ماء أكثر فوق السطح على شكل جريان سطحي (run-off).",
            "يرتفع النهر بسرعة ويفيض فوق ضفافه.",
            "بعض أسباب الفيضان طبيعية، مثل المطر الشديد والمنحدرات الحادّة.",
            "وبعضها بشرية، مثل قطع الأشجار والبناء على السهول الفيضية.",
            "في عام 2014 غمرت المياه منطقة سومرست ليفلز (Somerset Levels) في إنجلترا أسابيع عدّة.",
            "وفي عام 1998 كان معظم بنغلاديش تحت الماء.",
            "الفيضان في بلد أفقر غالبًا ما يُلحق بالناس ضررًا أكبر بكثير."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "kiedy w rzece jest więcej wody, niż mieści jej koryto (flood)",
            "płaski teren po obu stronach rzeki, który zalewa woda (floodplain)",
            "tak pełny wody, że nie może już przyjąć więcej (saturated)",
            "wsiąkanie wody w głąb gleby (infiltration)",
            "woda płynąca po powierzchni ziemi do rzeki (surface run-off)",
            "nagła powódź po bardzo gwałtownej ulewie (flash flood)"
          ],
          "passage": [
            "Powódź (flood) zdarza się, kiedy do rzeki trafia więcej wody, niż mieści jej koryto.",
            "Woda przelewa się przez brzegi na równinę zalewową (floodplain).",
            "Równina zalewowa to płaski teren po obu stronach rzeki.",
            "Powodzie zwykle zaczynają się od ulewnego deszczu, który pada przez długi czas.",
            "Gleba wchłania wodę, aż będzie nasycona (saturated).",
            "Wtedy infiltracja (infiltration) zwalnia, bo ziemia jest już pełna.",
            "Więcej wody płynie po powierzchni jako spływ powierzchniowy (run-off).",
            "Rzeka szybko się podnosi i przelewa przez brzegi.",
            "Niektóre przyczyny powodzi są naturalne, jak ulewny deszcz i strome zbocza.",
            "Inne są związane z człowiekiem, jak wycinanie drzew i budowanie na równinach zalewowych.",
            "W 2014 roku Somerset Levels w Anglii były zalane przez wiele tygodni.",
            "W 1998 roku większość Bangladeszu znalazła się pod wodą.",
            "Powódź w biedniejszym kraju często krzywdzi ludzi o wiele bardziej."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "quando um rio tem mais água do que o seu canal consegue conter (flood, cheia/enchente)",
            "a terra plana de cada lado de um rio que fica inundada (floodplain, planície de inundação)",
            "tão cheio de água que já não consegue conter mais (saturated, saturado)",
            "água a infiltrar-se/se infiltrando no solo (infiltration, infiltração)",
            "água que escorre sobre o solo para um rio (surface run-off, escoamento superficial)",
            "uma cheia repentina depois de uma chuva muito forte (flash flood, enxurrada)"
          ],
          "passage": [
            "Uma cheia/enchente (flood) acontece quando um rio recebe mais água do que o seu canal consegue conter.",
            "A água passa por cima das margens e espalha-se pela planície de inundação (floodplain).",
            "A planície de inundação é a terra plana de cada lado do rio.",
            "As cheias costumam começar com chuva forte que dura muito tempo.",
            "O solo absorve a água até ficar saturado (saturated).",
            "Então a infiltração (infiltration) abranda, porque o solo está cheio.",
            "Mais água escorre pela superfície como escoamento (run-off).",
            "O rio sobe depressa e transborda das margens.",
            "Algumas causas das cheias são físicas, como chuva forte e encostas íngremes.",
            "Outras são humanas, como cortar árvores e construir em planícies de inundação.",
            "Em 2014, os Somerset Levels, em Inglaterra, ficaram inundados durante semanas.",
            "Em 1998, a maior parte do Bangladesh/Bangladeche ficou debaixo de água.",
            "Uma cheia num país mais pobre costuma fazer muito mais mal às pessoas."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "marka webi haysto biyo ka badan inta marinkiisu qaadi karo (flood)",
            "dhulka siman ee webi labada dhinac ka ah oo fatahaada (floodplain)",
            "aad u buuxa oo biyo dheeraad ah qaadi karin (saturated)",
            "biyo hoos ugu dhex gala ciidda (infiltration)",
            "biyo dusha dhulka ku socda oo webi gala (surface run-off)",
            "fatahaad kedis ah oo ka dambaysa roob aad u culus (flash flood)"
          ],
          "passage": [
            "Fatahaad (flood) waxay dhacdaa marka webi helo biyo ka badan inta marinkiisu qaadi karo.",
            "Biyuhu darafka ayay ka soo buux-dhaafaan oo floodplain-ka ayay galaan.",
            "Floodplain waa dhulka siman ee webiga labada dhinac ka ah.",
            "Fatahaadaha inta badan waxay ku bilaabmaan roob culus oo waqti dheer socda.",
            "Ciiddu biyo ayay nuugtaa ilaa ay buuxsanto (saturated).",
            "Markaas infiltration-ku wuu gaabiyaa, sababtoo ah dhulku wuu buuxaa.",
            "Biyo badan ayaa dusha dhulka ku socda sida run-off.",
            "Webigu si dhaqso ah ayuu kor u kacaa oo darafkiisa ka soo buux-dhaafaa.",
            "Sababaha fatahaadda qaarkood waa dabiici, sida roob culus iyo jiirar dheer.",
            "Qaarna waa dad-sameeye, sida geed-jarista iyo floodplain-ka wax ka dhisidda.",
            "Sannadkii 2014 Somerset Levels oo England ku taal toddobaadyo ayay fatahaad ku jirtay.",
            "Sannadkii 1998 Bangladesh badankeeda biyo ayaa hoos joogay.",
            "Fatahaad ka dhacda dal saboolsan inta badan dadka si aad u daran ayay u dhaawacdaa."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "коли в річці більше води, ніж може вмістити її русло (flood)",
            "рівна земля по обидва боки річки, яку заливає вода (floodplain)",
            "настільки повний води, що більше не може вмістити (saturated)",
            "просочування води вниз у ґрунт (infiltration)",
            "вода, що тече по поверхні землі в річку (surface run-off)",
            "раптова повінь після дуже сильної зливи (flash flood)"
          ],
          "passage": [
            "Повінь (flood) трапляється, коли в річку надходить більше води, ніж може вмістити її русло.",
            "Вода переливається через береги на заплаву (floodplain).",
            "Заплава — це рівна земля по обидва боки річки.",
            "Повені зазвичай починаються з сильного дощу, який триває довго.",
            "Ґрунт вбирає воду, доки не стане насиченим (saturated).",
            "Тоді просочування (infiltration) сповільнюється, бо земля вже повна.",
            "Більше води тече по поверхні як стік (run-off).",
            "Річка швидко піднімається і переливається через береги.",
            "Деякі причини повеней природні, наприклад сильний дощ і круті схили.",
            "Деякі причини людські, наприклад вирубування дерев і будівництво на заплавах.",
            "У 2014 році рівнина Somerset Levels в Англії була затоплена кілька тижнів.",
            "У 1998 році більша частина Бангладеш була під водою.",
            "Повінь у біднішій країні часто шкодить людям набагато більше."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "جب دریا میں اتنا پانی آ جائے جتنا اس کی نالی سنبھال نہ سکے (flood)",
            "دریا کے دونوں طرف کی ہموار زمین جو سیلاب میں ڈوب جاتی ہے (floodplain)",
            "پانی سے اتنی بھری ہوئی کہ اور پانی نہ لے سکے (saturated)",
            "پانی کا مٹی کے اندر جذب ہونا (infiltration)",
            "زمین کی سطح پر بہتا ہوا پانی جو دریا میں جاتا ہے (surface run-off)",
            "بہت تیز بارش کے جھونکے کے بعد اچانک آنے والا سیلاب (flash flood)"
          ],
          "passage": [
            "سیلاب تب آتا ہے جب دریا میں اتنا پانی آ جائے جتنا اس کی نالی سنبھال نہ سکے۔",
            "پانی کناروں سے باہر floodplain پر بہہ نکلتا ہے۔",
            "floodplain دریا کے دونوں طرف کی ہموار زمین ہے۔",
            "سیلاب عام طور پر ایسی تیز بارش سے شروع ہوتا ہے جو بہت دیر تک جاری رہے۔",
            "مٹی پانی جذب کرتی رہتی ہے یہاں تک کہ وہ بھر جاتی ہے (saturated)۔",
            "پھر infiltration سست ہو جاتا ہے، کیونکہ زمین بھر چکی ہوتی ہے۔",
            "زیادہ پانی run-off کی صورت میں سطح پر بہنے لگتا ہے۔",
            "دریا تیزی سے چڑھتا ہے اور کناروں سے باہر بہہ نکلتا ہے۔",
            "سیلاب کی کچھ وجوہات طبعی ہیں، جیسے تیز بارش اور ڈھلوان زمین۔",
            "کچھ انسانی ہیں، جیسے درخت کاٹنا اور floodplain پر عمارتیں بنانا۔",
            "2014 میں انگلینڈ کے سمرسیٹ لیولز (Somerset Levels) کئی ہفتوں تک سیلاب میں ڈوبے رہے۔",
            "1998 میں بنگلہ دیش کا بڑا حصہ پانی کے نیچے تھا۔",
            "غریب ملک میں سیلاب اکثر لوگوں کو کہیں زیادہ نقصان پہنچاتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What is a flood, and how does one happen?",
          paragraphs: [
            "A river normally flows along its channel, between its banks. A flood happens when the river gets more water than its channel can hold. The water rises over the banks and spreads across the floodplain, the flat land on either side. A flash flood is a sudden flood caused by a short burst of very heavy rain, often with little warning.",
            "Floodplains are flat and fertile, close to water and easy to build on, so for thousands of years people have farmed and built towns on them. That is exactly why floods cause so much damage: the land that floods is the land people most want to use. To reduce the damage, geographers first need to understand the chain of events that turns rain into a flood.",
            "Most river floods follow the same six steps. First, it rains heavily for a long time. Second, the soil soaks up water until it is saturated: it cannot hold any more. Third, infiltration slows down, because water can no longer soak into ground that is already full. Fourth, more and more water flows over the top of the ground as surface run-off, straight into streams and rivers. Fifth, the river level rises quickly. Sixth, the water overflows the banks onto the floodplain. That is the flood."
          ],
          worked: {
            q: "Explain how a long period of heavy rain can cause a river to flood. (4 marks)",
            steps: [
              "Start with the rain and what it does to the soil: heavy rain for a long time saturates the soil.",
              "Link to infiltration: because the soil is full, infiltration slows down.",
              "Link to run-off: so more water flows over the surface as run-off into the river.",
              "Finish with the river: the river rises quickly and overflows its banks onto the floodplain."
            ],
            answer: "Heavy rain for a long time saturates the soil, so infiltration slows down. Because less water can soak in, more flows over the surface as run-off into the river. The river rises quickly and, when it has more water than its channel can hold, it overflows its banks onto the floodplain."
          }
        },
        {
          heading: "Physical and human factors",
          paragraphs: [
            "Some things that increase the risk of flooding are physical factors: caused by natural features. Heavy or long-lasting rain is the most obvious. Snow melting in spring adds a lot of water at once. Steep slopes make run-off faster. Impermeable rock, which does not let water through, stops infiltration. Soil that is already saturated from earlier rain cannot soak up any more.",
            "Other things are human factors: caused by what people do. Cutting down trees (deforestation) removes the roots and leaves that soak up and hold back rain, so run-off increases. Building towns covers the ground with impermeable concrete and tarmac, and drains carry the rain to the river fast. Building on the floodplain puts homes exactly where the water will go.",
            "In a question, sort the factors first, then explain one of each with because. For example: a car park increases flood risk because tarmac is impermeable, so rain cannot infiltrate and runs straight off into the river."
          ],
          tip: "Physical = nature did it (rain, snow, slopes, rock). Human = people did it (trees cut down, concrete, building on floodplains)."
        },
        {
          heading: "A flood in a rich country: the Somerset Levels, 2014",
          paragraphs: [
            "Geographers divide countries by wealth. A high income country (HIC), such as the UK, Japan or Canada, has more money, better hospitals and stronger buildings. A low income country (LIC), such as Bangladesh, Mali or Haiti, has much less money to spend on protecting people. Older books call them MEDCs and LEDCs. A flood of the same size can affect the two very differently.",
            "The Somerset Levels are low, flat farmland in the south-west of England. In the winter of 2014, after weeks of rain, villages, farms and roads were flooded for weeks. People were rescued by boat, homes and farmland were damaged, and the cost ran into millions of pounds.",
            "Because the UK is an HIC, there were emergency services to help, insurance to pay for repairs and government money to improve the defences afterwards. The flood was serious, but nobody went without clean water or medical care for long."
          ],
          tip: "HIC = high income country (UK, Japan, Canada). LIC = low income country (Bangladesh, Mali, Haiti). It is about money, not size."
        },
        {
          heading: "A flood in a poor country: Bangladesh, 1998",
          paragraphs: [
            "Bangladesh is a low, flat LIC on the delta of the Ganges and Brahmaputra rivers, at the head of the Bay of Bengal. About 80% of the country is floodplain and delta, and most of it lies less than 5 m above sea level. From July to September 1998 the monsoon brought weeks of heavy rain. At the same time, melting snow from the Himalayas poured extra water down the rivers. Deforestation in Nepal and Tibet had increased soil erosion, and the washed-down soil had silted up river channels so they held less water.",
            "Flood water covered about 80% of the land. In the capital, Dhaka, the water was 2 m deep and covered 75% of the city. Seven million homes were destroyed and millions of people were left homeless. Wells were flooded and polluted, so there was no safe water to drink, and many people died, some from disease. Electricity was cut off for weeks, transport and communication broke down, and emergency help could not get through. Shops, hospitals and pharmacies were flooded, so food and medicine ran short.",
            "Geographers sort effects like these into social (people), economic (money) and environmental (the land and water): SEE for short. Homes destroyed is social; shops flooded and jobs lost is economic; farmland under polluted water is environmental. Remember that behind every number there are people and families."
          ],
          tip: "Cause = what made the flood happen (before). Effect = what the flood did (after). Then sort effects into Social, Economic, Environmental."
        }
      ],
      gate: [
        { kind: "gap", q: "A flood happens when a river has more water than its ___ can hold.", answer: "channel", options: ["channel", "floodplain", "source"], why: "The channel is the river's normal pathway; when it is too full, water spills onto the floodplain.",
          feedback: {
            "floodplain": "The floodplain is where the water goes once the river has overflowed. The part that is too full is the channel, the river's normal pathway between its banks.",
            "source": "The source is where a river starts, in the hills. The part of the river that fills up and overflows is its channel."
          } },
        { kind: "mcq", q: "Which of these is a HUMAN factor that increases the risk of flooding?", options: ["Cutting down trees", "Heavy rain for several days", "Steep slopes", "Snow melting in spring"], answer: 0, why: "Deforestation is done by people; it removes trees that would soak up and slow down rain.",
          feedback: [
            "",
            "Heavy rain is weather, so it is a physical factor: nature did it. A human factor is something people do, such as cutting down trees.",
            "Steep slopes are a natural feature of the land, so they are a physical factor. The human factor on the list is cutting down trees.",
            "Snow melting is a natural event, so it is a physical factor. The human factor on the list is cutting down trees."
          ] },
        { kind: "numeric", q: "In 1998, flood water covered about 80% of Bangladesh. What percentage of the country was NOT under water?", answer: 20, tolerance: 0, units: "%", check: "100 - 80", why: "The whole country is 100%, so 100 − 80 = 20% stayed dry.",
          misconceptions: [
            { answer: 80, says: "You gave the percentage that WAS flooded. The question asks for the part that stayed dry: 100 − 80 = 20%.", check: "80" },
            { answer: 180, says: "You added 80 to 100. The whole country is 100%, and the dry part is what is left after the flooded part: 100 − 80 = 20%.", check: "100 + 80" }
          ] }
      ],
      modules: [
        {
          title: "From rain to flood",
          task: {
            kind: "order",
            q: "Put the steps that lead to a river flood in the correct order.",
            items: [
              "Heavy rain falls for a long time",
              "The soil becomes saturated",
              "Infiltration slows down",
              "More water flows over the ground as surface run-off",
              "The river level rises quickly",
              "Water overflows the banks onto the floodplain"
            ]
          },
          levels: {
            support: {
              steps: [
                "Rain has to fall before anything else can happen, so rain is first.",
                "The soil fills up (saturated) before soaking in can slow down (infiltration).",
                "Once water cannot soak in, it must run over the surface; run-off comes before the river rises.",
                "The flood itself, water over the banks, is the very last step."
              ],
              example: {
                q: "Put these steps of a sink overflowing in order: water spills onto the floor; the plug is in; the tap is left running; the sink fills to the top.",
                steps: ["The plug is in first, then the tap runs.", "The sink fills to the top.", "Only then does water spill onto the floor."],
                answer: "the plug is in, the tap is left running, the sink fills to the top, water spills onto the floor"
              }
            },
            core: { hint: "Rain, soaked, slower soaking, run-off, rising, overflow." },
            stretch: { extend: "Which single step would change if the rain fell on a town centre instead of farmland, and why? Name the human factor involved." }
          },
          explain: "Say, in one sentence, why infiltration slows down after a long period of rain.",
          why: "Rain saturates the soil; infiltration slows; run-off increases; the river rises; it overflows its banks. Each step causes the next."
        },
        {
          title: "Cause or effect?",
          task: {
            kind: "mcq",
            q: "Here is a statement about the 1998 flood in Bangladesh: monsoon rains fell heavily for weeks. Which of these best describes it?",
            options: ["A physical cause of the flood", "A human cause of the flood", "A social effect of the flood", "An economic effect of the flood"],
            answer: 0,
            feedback: [
              "",
              "Monsoon rain is weather, which nature produces; no person made it rain. A cause made by nature is a physical cause.",
              "An effect is something the flood did afterwards, such as homes being destroyed. Heavy rain happened before the flood and helped to cause it, so it is a cause, and a physical one.",
              "An economic effect is about money and jobs after the flood. Heavy rain came before the flood and helped to cause it, so it is a physical cause."
            ],
            why: "The rain happened before the flood and helped to make it happen, so it is a cause; it was produced by nature, so it is physical."
          },
          contexts: [
            { label: "Snow in the Himalayas", q: "Here is a statement about the 1998 flood in Bangladesh: in spring, snow melted in the Himalayas and poured extra water into the rivers. Which of these best describes it?" },
            { label: "Low, flat land", q: "Here is a statement about the 1998 flood in Bangladesh: most of the country is low, flat delta land, less than 5 m above sea level. Which of these best describes it?" },
            { label: "Rain in Somerset", q: "Here is a statement about the 2014 flood on the Somerset Levels: it rained heavily for weeks during the winter. Which of these best describes it?" }
          ],
          levels: {
            support: {
              steps: [
                "Ask: did this happen before the flood (a cause) or after it (an effect)?",
                "If it is a cause, ask: did nature do it (physical) or did people do it (human)?",
                "If it is an effect, ask: is it about people (social), money (economic) or the land and water (environmental)?",
                "Pick the option that matches both answers."
              ],
              example: {
                q: "Statement: seven million homes were destroyed. Cause or effect, and which kind?",
                steps: ["Homes were destroyed by the flood water, so this happened after: an effect.", "It is about people and where they live, so it is a social effect."],
                answer: "A social effect of the flood"
              }
            },
            core: { hint: "Before the flood = cause. Then: nature or people?" },
            stretch: { extend: "Deforestation in Nepal and Tibet was also a cause of the 1998 flood. Explain why it counts as a human cause even though the trees were cut down in a different country." }
          },
          explain: "Say, in one sentence, how you can tell a cause from an effect.",
          why: "Causes come before the flood and are physical (nature) or human (people). Effects come after and are social, economic or environmental."
        },
        {
          title: "Why did the 1998 flood hurt Bangladesh so badly?",
          task: {
            kind: "written",
            q: "Explain why the 1998 flood had such serious effects on the people of Bangladesh. Use at least one social, one economic and one environmental effect, and say why an LIC finds it harder to cope. Write one paragraph of six to eight sentences.",
            marks: 6,
            criteria: [
              "I give at least one social effect, one economic effect and one environmental effect, using facts from the case study.",
              "I explain why a low income country finds it harder to cope than a high income country.",
              "I link my points with because or so, rather than just listing them.",
              "I write about people first, with respect, and keep my facts accurate."
            ],
            model: "The 1998 flood hurt Bangladesh so badly because it covered about 80% of the country, so almost nobody could escape its effects. Socially, seven million homes were destroyed and millions of people were left homeless, and because wells were flooded and polluted, many people had no safe water and some became ill or died. Economically, shops, hospitals and pharmacies were flooded, so food and medicine ran short, and roads and electricity were cut off for weeks, so people could not work or trade. Environmentally, farmland was covered in water and polluted. Bangladesh is a low income country, so it had less money for flood defences, strong buildings and emergency services, and because transport and communication broke down, help could not reach people who needed it. A richer country like the UK could repair the damage from the Somerset floods with insurance and government money; Bangladesh had far less to fall back on."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: say how much of the country flooded (about 80%).",
                "Sentences 2 to 4: one social effect (homes, water, health), one economic effect (shops, hospitals, electricity, transport) and one environmental effect (land covered, water polluted).",
                "Sentences 5 to 6: say Bangladesh is an LIC and explain, with because, why that made coping harder.",
                "Finish by comparing briefly with the UK in 2014."
              ],
              example: {
                q: "Write two sentences explaining one social effect of the 2014 Somerset Levels flood and why the UK could cope.",
                steps: ["Give the effect: people had to leave their homes and were rescued by boat.", "Explain coping with because: the UK is an HIC, so it had emergency services and insurance to repair the damage."],
                answer: "On the Somerset Levels in 2014, families had to leave flooded homes and some were rescued by boat. Because the UK is a high income country, there were emergency services to help and insurance and government money to repair the damage afterwards."
              }
            },
            core: { hint: "SEE: Social (people), Economic (money), Environmental (land and water). Then: LIC, less money, harder to cope." },
            stretch: { extend: "Some of the causes of the 1998 flood (deforestation, snowmelt) were outside Bangladesh. Argue whether this makes it fair to expect Bangladesh to solve the problem alone." }
          },
          explain: "Say, in one sentence, why the same size of flood does more harm in an LIC than in an HIC.",
          why: "A top answer uses the case-study facts (80% flooded, 7 million homes, 2 m of water in Dhaka, polluted wells, cut-off electricity and transport), sorts them into SEE, and explains that an LIC has less money for defences, services and repairs."
        }
      ]
    },

    /* ───────────── 6 · managing floods ───────────── */
    {
      key: "managing-floods", n: 6, title: "Managing floods: protecting people and places",
      lead: "Short-term and long-term ways of coping with floods, how the Thames Barrier protects London, how to choose a defence, and how to show what you know in the test.",
      covers: [12, 13],
      pretext: {
        words: [
          { word: "short-term", means: "done just before or during a flood to cope with it", sentence: "Sandbags are a short-term way to keep water out of a house." },
          { word: "long-term", means: "built or planned to protect people for many years", sentence: "A flood barrier is a long-term defence." },
          { word: "flood defence", means: "anything built or done to stop flooding or reduce the damage", sentence: "The town council paid for a new flood defence." },
          { word: "embankment", means: "a raised bank built along a river so it can hold more water", sentence: "The embankment kept the river off the road." },
          { word: "evaluate", means: "to weigh up how good something is, using criteria", sentence: "We had to evaluate three flood defences and choose the best." }
        ],
        passage: [
          "People cannot stop the rain, but they can protect themselves from floods.",
          "Short-term methods are used just before or during a flood.",
          "Sandbags, flood warnings and moving people to safety are short-term.",
          "Long-term methods take years to build but last for a long time.",
          "Walls, embankments, dams, barriers and planting trees are long-term.",
          "London is protected by the Thames Barrier.",
          "Its ten steel gates stretch about 500 m across the river.",
          "It was first used in 1983.",
          "When a high tide threatens London, the gates are raised.",
          "Choosing a flood defence means weighing up cost, time and how well it works.",
          "In your test, describe means say what, and explain means say why."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "يُنفَّذ قبل الفيضان مباشرةً أو أثناءه لمواجهته (short-term)",
            "يُبنى أو يُخطَّط له لحماية الناس سنوات طويلة (long-term)",
            "أيّ شيء يُبنى أو يُفعل لمنع الفيضان أو تقليل أضراره (flood defence)",
            "ضفّة مرتفعة تُبنى على طول النهر ليحمل ماءً أكثر (embankment)",
            "أن تُقدّر مدى جودة شيء ما باستخدام معايير (evaluate)"
          ],
          "passage": [
            "لا يستطيع الناس أن يمنعوا المطر، لكنّهم يستطيعون أن يحموا أنفسهم من الفيضانات.",
            "تُستخدم الطرق القصيرة المدى (short-term) قبل الفيضان مباشرةً أو أثناءه.",
            "أكياس الرمل وتحذيرات الفيضان ونقل الناس إلى مكان آمن طرق قصيرة المدى.",
            "الطرق الطويلة المدى (long-term) يستغرق بناؤها سنوات، لكنّها تدوم وقتًا طويلًا.",
            "الجدران والسدود الترابية (embankments) والسدود والحواجز وزراعة الأشجار طرق طويلة المدى.",
            "لندن يحميها حاجز التيمز (Thames Barrier).",
            "تمتدّ بوّاباته الفولاذية العشر نحو 500 م عبر النهر.",
            "استُخدم لأوّل مرّة في عام 1983.",
            "عندما يهدّد مدّ عالٍ لندن، تُرفع البوّابات.",
            "اختيار وسيلة الحماية من الفيضان يعني الموازنة بين الكلفة والوقت ومدى نجاحها.",
            "في اختبارك، «صِف» (describe) تعني قُل ماذا، و«اشرح» (explain) تعني قُل لماذا."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "robione tuż przed powodzią lub w jej trakcie, żeby sobie z nią poradzić (short-term)",
            "zbudowane lub zaplanowane tak, by chronić ludzi przez wiele lat (long-term)",
            "wszystko, co zbudowano lub zrobiono, żeby zatrzymać powódź albo zmniejszyć szkody (flood defence)",
            "podwyższony wał zbudowany wzdłuż rzeki, żeby mieściła więcej wody (embankment)",
            "ocenić, jak dobre jest coś, używając kryteriów (evaluate)"
          ],
          "passage": [
            "Ludzie nie mogą zatrzymać deszczu, ale mogą chronić się przed powodziami.",
            "Metody krótkoterminowe (short-term) stosuje się tuż przed powodzią lub w jej trakcie.",
            "Worki z piaskiem, ostrzeżenia powodziowe i ewakuacja ludzi w bezpieczne miejsce to metody krótkoterminowe.",
            "Metody długoterminowe (long-term) buduje się latami, ale służą przez długi czas.",
            "Mury, wały (embankments), tamy, zapory i sadzenie drzew to metody długoterminowe.",
            "Londyn chroni zapora Thames Barrier.",
            "Jej dziesięć stalowych wrót rozciąga się na około 500 m przez rzekę.",
            "Po raz pierwszy użyto jej w 1983 roku.",
            "Kiedy wysoki przypływ zagraża Londynowi, wrota są podnoszone.",
            "Wybór zabezpieczenia przeciwpowodziowego (flood defence) oznacza rozważenie kosztu, czasu i tego, jak dobrze działa.",
            "Na sprawdzianie „opisz” (describe) znaczy powiedz co, a „wyjaśnij” (explain) znaczy powiedz dlaczego."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "feito mesmo antes de uma cheia, ou durante, para lidar com ela (short-term, a curto prazo)",
            "construído ou planeado/planejado para proteger as pessoas durante muitos anos (long-term, a longo prazo)",
            "qualquer coisa construída ou feita para impedir as cheias ou reduzir os danos (flood defence, defesa contra cheias)",
            "uma margem elevada construída ao longo de um rio para ele conter mais água (embankment, dique)",
            "pesar os prós e os contras de algo, usando critérios (evaluate, avaliar)"
          ],
          "passage": [
            "As pessoas não podem parar a chuva, mas podem proteger-se das cheias.",
            "Os métodos a curto prazo (short-term) usam-se mesmo antes de uma cheia, ou durante.",
            "Sacos de areia, avisos de cheia e levar as pessoas para um lugar seguro são a curto prazo.",
            "Os métodos a longo prazo (long-term) levam anos a construir, mas duram muito tempo.",
            "Muros, diques, barragens, barreiras e plantar árvores são a longo prazo.",
            "Londres é protegida pela Barreira do Tamisa (Thames Barrier).",
            "As suas dez comportas de aço estendem-se por cerca de 500 m através do rio.",
            "Foi usada pela primeira vez em 1983.",
            "Quando uma maré alta ameaça Londres, as comportas são levantadas.",
            "Escolher uma defesa contra cheias significa pesar o custo, o tempo e o quão bem funciona.",
            "No seu teste, describe quer dizer dizer o quê, e explain quer dizer dizer porquê/por quê."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "wax la sameeyo wax yar ka hor ama inta fatahaaddu socoto si loola qabsado (short-term)",
            "wax la dhiso ama la qorsheeyo si dadka loo ilaaliyo sannado badan (long-term)",
            "wax kasta oo la dhiso ama la sameeyo si fatahaadda loo joojiyo ama khasaaraha loo yareeyo (flood defence)",
            "daraf kor loo qaaday oo webi dhinaciisa laga dhiso si uu biyo badan u qaado (embankment)",
            "miisaamidda sida wax u wanaagsan yihiin, iyadoo la isticmaalayo shuruudo (evaluate)"
          ],
          "passage": [
            "Dadku roobka ma joojin karaan, laakiin fatahaadaha way iska ilaalin karaan.",
            "Hababka short-term waxaa la isticmaalaa wax yar ka hor ama inta fatahaaddu socoto.",
            "Kiishash ciid (sandbags), digniinaha fatahaadda iyo dadka meel ammaan ah u raridda waa short-term.",
            "Hababka long-term sannado ayay qaadataa in la dhiso, laakiin waqti dheer ayay adkaystaan.",
            "Darbiyo, embankments, biyo-xireenno (dams), caqabado iyo geed-beerid waa long-term.",
            "London waxaa ilaaliya Thames Barrier.",
            "Tobankeeda albaab ee birta ah waxay webiga ku fidsan yihiin qiyaastii 500 m.",
            "Markii ugu horraysay waxaa la isticmaalay 1983.",
            "Marka mowjad sare London hanjabto, albaabbada kor ayaa loo qaadaa.",
            "Doorashada flood defence macnaheedu waa in la miisaamo kharashka, waqtiga iyo sida ay u shaqayso.",
            "Imtixaankaaga, describe macnaheedu waa sheeg waxa, explain-na macnaheedu waa sheeg sababta."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "те, що роблять перед повінню або під час неї, щоб із нею впоратися (short-term)",
            "те, що будують або планують, щоб захищати людей багато років (long-term)",
            "усе, що будують або роблять, щоб зупинити повінь або зменшити шкоду (flood defence)",
            "підвищений насип уздовж річки, щоб вона вміщувала більше води (embankment)",
            "зважити, наскільки щось добре, за певними критеріями (evaluate)"
          ],
          "passage": [
            "Люди не можуть зупинити дощ, але можуть захистити себе від повеней.",
            "Короткострокові (short-term) методи застосовують перед повінню або під час неї.",
            "Мішки з піском, попередження про повінь і вивезення людей у безпечне місце — це короткострокові методи.",
            "Довгострокові (long-term) методи будують роками, але вони служать довго.",
            "Стіни, насипи, дамби, бар’єри та висаджування дерев — це довгострокові методи.",
            "Лондон захищає бар’єр на Темзі (Thames Barrier).",
            "Його десять сталевих воріт простягаються приблизно на 500 m через річку.",
            "Уперше його використали в 1983 році.",
            "Коли високий приплив загрожує Лондону, ворота піднімають.",
            "Вибрати захист від повені означає зважити вартість, час і те, наскільки добре він працює.",
            "У вашому тесті describe означає сказати що, а explain означає сказати чому."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "سیلاب سے ذرا پہلے یا اس کے دوران کیا جانے والا کام تاکہ اس سے نمٹا جا سکے (short-term)",
            "ایسا کام جو کئی سالوں تک لوگوں کی حفاظت کے لیے بنایا یا منصوبہ بنایا جائے (long-term)",
            "کوئی بھی چیز جو سیلاب روکنے یا نقصان کم کرنے کے لیے بنائی یا کی جائے (flood defence)",
            "دریا کے ساتھ بنایا گیا اونچا کنارہ تاکہ وہ زیادہ پانی سنبھال سکے (embankment)",
            "کسوٹیوں کی مدد سے یہ جانچنا کہ کوئی چیز کتنی اچھی ہے (evaluate)"
          ],
          "passage": [
            "لوگ بارش کو نہیں روک سکتے، لیکن سیلاب سے اپنی حفاظت کر سکتے ہیں۔",
            "قلیل مدتی (short-term) طریقے سیلاب سے ذرا پہلے یا اس کے دوران استعمال ہوتے ہیں۔",
            "ریت کی بوریاں، سیلاب کی وارننگ اور لوگوں کو محفوظ جگہ لے جانا قلیل مدتی طریقے ہیں۔",
            "طویل مدتی (long-term) طریقے بننے میں سال لگتے ہیں لیکن بہت دیر تک کام دیتے ہیں۔",
            "دیواریں، embankments، ڈیم، بیریئر اور درخت لگانا طویل مدتی طریقے ہیں۔",
            "لندن کی حفاظت ٹیمز بیریئر (Thames Barrier) کرتا ہے۔",
            "اس کے دس فولادی دروازے دریا کے آر پار تقریباً 500 m تک پھیلے ہیں۔",
            "یہ پہلی بار 1983 میں استعمال ہوا تھا۔",
            "جب اونچی لہر (high tide) لندن کے لیے خطرہ بنتی ہے تو دروازے اوپر اٹھا دیے جاتے ہیں۔",
            "flood defence چننے کا مطلب ہے لاگت، وقت اور اس کی کارآمدی کو تولنا۔",
            "آپ کے ٹیسٹ میں describe کا مطلب ہے بتائیں کہ کیا ہوا، اور explain کا مطلب ہے بتائیں کہ کیوں ہوا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Short-term and long-term ways of coping",
          paragraphs: [
            "There are two kinds of flood protection. Short-term methods are used just before or during a flood to cope with it. Flood warnings tell people a flood is coming. Sandbags across doorways keep water out of homes. People move valuables upstairs and, if needed, leave their homes for a safe place. Emergency services rescue people and bring food and clean water.",
            "Long-term methods take years to plan and build, but protect people for a long time. Embankments and flood walls raise the sides of the channel so it can hold more water. Dams hold water back upstream and let it out slowly. Barriers like the Thames Barrier close against high water. Dredging deepens the channel. Planting trees in the drainage basin increases infiltration and slows run-off. Planning rules can stop new homes being built on the floodplain.",
            "Notice the difference between reducing the risk of a flood happening (trees, dams, dredging) and reducing the damage when it does (warnings, sandbags, walls around homes). The best plans do both."
          ],
          tip: "Short-term = during the emergency, cheap and quick. Long-term = built to last, expensive and slow. A good answer names one of each."
        },
        {
          heading: "The Thames Barrier",
          paragraphs: [
            "London lies on the River Thames close to the sea, so a very high tide pushed up the river by a storm could flood the city. The Thames Barrier was built to stop this. It was first used in 1983 and stands about 15 km downstream of the Houses of Parliament, at a spot chosen because the river banks are straight and the river bed is firm enough to build on.",
            "The barrier has ten gates made of steel, stretching about 500 m across the river. Normally the gates lie flat on the river bed so ships can pass. When a dangerous tide is forecast, they are rotated up to form a wall across the river. Closing can take between 15 and 90 minutes. The gates are hollow, and in an underspill position they can let a little water through, so that water does not pour over the top.",
            "Engineers have thought about what could go wrong. If the computer that drives the barrier fails, the gates can be raised by hand with cranks. An extra piston can lift each gate right out of the water so it can be checked for rust and damage. The barrier is a long-term defence: expensive to build, but protecting millions of people for decades."
          ],
          worked: {
            q: "Explain how the Thames Barrier protects London from flooding. (4 marks)",
            steps: [
              "Say what the danger is: a very high tide pushed up the river could flood London.",
              "Describe the barrier: ten steel gates about 500 m across the river, normally flat on the bed.",
              "Explain the action: when a high tide is forecast the gates are raised to make a wall, so the water cannot reach the city.",
              "Add a detail that shows understanding: closing takes 15 to 90 minutes, and the gates can be cranked by hand if the computer fails."
            ],
            answer: "A storm tide coming up the Thames could flood London. The barrier's ten steel gates, about 500 m across, normally lie flat so ships can pass; when a high tide is forecast they are raised in 15 to 90 minutes to form a wall, so the water is held back. If the computer fails, the gates can be cranked by hand."
          }
        },
        {
          heading: "You are in charge: choosing a flood defence",
          paragraphs: [
            "Imagine a new town is being planned near a river, and you have to protect it. You cannot choose everything, because every defence has a cost. Geographers use criteria to decide. Cost: is it cheap or expensive to build and look after? Time: can it be done quickly, or will it take years? Effectiveness: does it reduce the risk of flooding, reduce the damage, or both?",
            "Two more criteria matter just as much. Sustainability: will it still work well in the future, as the climate changes and the town grows? Who benefits: homes, farms, transport, wildlife, or only some of these? An embankment may protect the town but push the flood water onto farms downstream.",
            "A strong decision names the methods chosen, gives a reason for each with because, and uses the words run-off, infiltration or overflow to explain how it works. For example: we chose to plant trees upstream because they increase infiltration, so less run-off reaches the river."
          ],
          tip: "Decision questions reward reasons, not choices. Every method you pick needs a because."
        },
        {
          heading: "Ready for the test",
          paragraphs: [
            "The end-of-unit test covers the whole unit: the water cycle and its key words, waterfalls and meanders, the physical and human causes of flooding, the effects of flooding in an LIC and an HIC, and the uses of rivers. It is marked out of 50, including spelling, punctuation and grammar, and lasts 60 minutes. Read the marks for each question and give that many points.",
            "Two command words do most of the work. Describe means say what something is like or what happens, in order. Explain means say why, using because. If a question says explain and you only describe, you lose most of the marks. For effects of a flood, sort your points into social, economic and environmental.",
            "After the test you will get feedback. WWW means What Went Well, and EBI means Even Better If. Use the model answers to correct your work in green pen, and write out any spelling you got wrong three times. That is how a mark becomes learning."
          ],
          tip: "Spell the key words correctly: precipitation, infiltration, saturated, hydraulic, meander, floodplain. SPaG marks count."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is a SHORT-term way of coping with a flood?", options: ["Putting sandbags across doorways", "Building a flood wall along the river", "Planting trees in the drainage basin", "Building the Thames Barrier"], answer: 0, why: "Sandbags are put down just before or during a flood; the others take years to build or grow.",
          feedback: [
            "",
            "A flood wall takes years to plan and build and then lasts for decades, so it is a long-term method. Sandbags, which are put down as the flood arrives, are short-term.",
            "Trees take years to grow before they make a difference to infiltration, so planting them is long-term. Sandbags across doorways are the short-term method here.",
            "The Thames Barrier took years to build and protects London for decades, so it is a long-term method. The short-term method on the list is sandbags."
          ] },
        { kind: "numeric", q: "The Thames Barrier's gates can take between 15 and 90 minutes to close. What is the difference, in minutes, between the slowest and the quickest closing time?", answer: 75, tolerance: 0, units: "minutes", check: "90 - 15", why: "90 − 15 = 75 minutes.",
          misconceptions: [
            { answer: 105, says: "You added the two times. A difference is found by subtracting the smaller from the larger: 90 − 15 = 75 minutes.", check: "90 + 15" },
            { answer: 1, says: "You gave the answer in hours, rounded. The question asks for minutes: 90 − 15 = 75 minutes, which is 1 hour 15 minutes.", check: "round((90 - 15) / 60)" }
          ] },
        { kind: "gap", q: "The Thames Barrier has ___ gates.", answer: "ten", options: ["ten", "five", "twenty"], why: "The barrier has ten steel gates stretching about 500 m across the river.",
          feedback: {
            "five": "That is half the real number. The Thames Barrier has ten gates, stretching about 500 m across the river.",
            "twenty": "That is double the real number. The Thames Barrier has ten gates, stretching about 500 m across the river."
          } }
      ],
      modules: [
        {
          title: "Built to last",
          task: {
            kind: "mcq",
            q: "A town beside a river wants protection that will last for many years. Which of these is a LONG-term flood defence?",
            options: ["Building an embankment along the river", "Putting sandbags in front of doors", "Sending out a flood warning", "Moving furniture upstairs"],
            answer: 0,
            feedback: [
              "",
              "Sandbags are put down as a flood approaches and taken away afterwards, so they are a short-term method. A defence built to last for years, such as an embankment, is long-term.",
              "A flood warning is sent out just before a flood to help people cope with it, so it is short-term. The long-term defence on the list is the embankment.",
              "Moving furniture upstairs is something people do during a flood to reduce damage, so it is short-term. The long-term defence on the list is the embankment."
            ],
            why: "An embankment is built once and protects the town for decades: long-term. The other three are things done just before or during a flood: short-term."
          },
          contexts: [
            { label: "A village in Somerset", q: "A village on the Somerset Levels wants protection that will still be working in fifty years' time. Which of these is a LONG-term flood defence?" },
            { label: "A town on the Thames", q: "A town upstream of London on the Thames wants a defence that lasts for many years. Which of these is a LONG-term flood defence?" },
            { label: "A city in Bangladesh", q: "A city in Bangladesh is planning how to protect its people for decades to come. Which of these is a LONG-term flood defence?" }
          ],
          levels: {
            support: {
              steps: [
                "Ask of each option: is it done in the hours before or during a flood, or built to stay for years?",
                "Warnings, sandbags and moving things are all done as the flood arrives: short-term.",
                "Something built along the river that stays there is long-term.",
                "Pick the one that is built, not done."
              ],
              example: {
                q: "Which of these is a long-term flood defence: planting trees in the drainage basin, or rescuing people by boat?",
                steps: ["Rescuing people happens during the flood: short-term.", "Trees take years to grow and then slow run-off for decades: long-term."],
                answer: "Planting trees in the drainage basin"
              }
            },
            core: { hint: "Long-term things are built or grown. Short-term things are done." },
            stretch: { extend: "Explain one disadvantage of an embankment for people living further downstream, and suggest a long-term method that avoids it." }
          },
          explain: "Say, in one sentence, how you tell a long-term flood defence from a short-term one.",
          why: "Long-term defences are built or grown to last for years (embankments, walls, dams, barriers, trees). Short-term methods are used just before or during a flood (warnings, sandbags, evacuation, moving valuables)."
        },
        {
          title: "Years apart",
          task: {
            kind: "numeric",
            q: "The Thames Barrier was first used in 1983. The Somerset Levels flooded in 2014. How many years apart are these two dates?",
            answer: 31, tolerance: 0, units: "years", check: "2014 - 1983",
            misconceptions: [
              { answer: 3997, says: "You added the two years together. To find how far apart two dates are, subtract the earlier from the later: 2014 − 1983 = 31 years.", check: "2014 + 1983" },
              { answer: 17, says: "You counted from 1983 up to 2000 and stopped. Carry on to 2014: 17 more to 2000, then 14 more, which is 31 years.", check: "2000 - 1983" },
              { answer: 41, says: "You lost ten years somewhere, perhaps subtracting 1973 instead of 1983. Check: 1983 + 31 = 2014, so the answer is 31.", check: "2014 - 1973" }
            ],
            why: "2014 − 1983 = 31 years. Check: 1983 + 31 = 2014."
          },
          levels: {
            support: {
              steps: [
                "Write the later year first: 2014. Then the earlier year: 1983.",
                "Count on from 1983 to 2000: that is 17 years.",
                "Count on from 2000 to 2014: that is 14 more years.",
                "Add the two parts: 17 + 14 = 31. Check: 1983 + 31 = 2014."
              ],
              example: {
                q: "Bangladesh flooded in 1998. The Somerset Levels flooded in 2014. How many years apart are these dates?",
                steps: ["From 1998 to 2000 is 2 years.", "From 2000 to 2014 is 14 years.", "2 + 14 = 16 years. Check: 1998 + 16 = 2014."],
                answer: "16 years",
                checks: [{ expr: "2014 - 1998", value: 16, tol: 0 }, { expr: "1998 + 16", value: 2014, tol: 0 }]
              }
            },
            core: { hint: "Later year minus earlier year. Count on to 2000 first if it helps." },
            stretch: { extend: "The barrier was designed in the 1970s to protect London for decades. Explain why engineers might now be planning what comes after it, using the word sustainability." }
          },
          explain: "Say, in one sentence, how you checked that your answer was right.",
          why: "The gap between two dates is the later year minus the earlier year: 2014 − 1983 = 31."
        },
        {
          title: "You are in charge",
          task: {
            kind: "written",
            q: "A new town is being planned near a river. Choose TWO long-term flood defences and ONE short-term method for the town. Explain why you chose each one, using at least two of the words run-off, infiltration and overflow, and comment on cost or sustainability. Write one paragraph of six to eight sentences.",
            marks: 6,
            criteria: [
              "I name two long-term defences and one short-term method, and get the two types the right way round.",
              "I give a reason for each choice using because, and explain how it works with run-off, infiltration or overflow.",
              "I weigh up at least one choice using cost, time, effectiveness, sustainability or who benefits.",
              "I write in full sentences with correct key-word spellings."
            ],
            model: "For the new town I would choose two long-term defences and one short-term method. First, I would plant trees across the drainage basin upstream because their roots and leaves increase infiltration, so less run-off reaches the river and the risk of flooding falls; this is cheap and sustainable, although it takes years to work. Second, I would build an embankment along the river beside the town because it makes the channel deeper, so the river can hold more water before it overflows; this is expensive but protects homes, roads and shops for decades. For my short-term method I would set up a flood warning system because it gives people time to move valuables upstairs and get to safety when a flood is coming. Together these reduce both the risk of a flood and the damage when one happens, and they benefit the whole town rather than just a few streets."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: say you will choose two long-term and one short-term.",
                "Sentences 2 and 3: name one long-term defence, say because, and use run-off, infiltration or overflow to explain how it works. Repeat for the second.",
                "Sentence 4: name the short-term method and say what it lets people do.",
                "Sentence 5 or 6: comment on cost, time or sustainability, and who benefits."
              ],
              example: {
                q: "Write two sentences choosing one long-term defence for a farm beside a river and explaining why.",
                steps: ["Name the defence and say because: a dam upstream because it holds water back.", "Explain how with a key word: it lets the water out slowly, so the river does not overflow; then add a cost comment."],
                answer: "I would build a dam upstream because it holds flood water back and lets it out slowly, so the river does not overflow onto the farm. It is expensive to build, but it also stores water for the farm to use in dry summers."
              }
            },
            core: { hint: "Two built, one done. Each with because. Trees = infiltration; walls and embankments = overflow; warnings = time to act." },
            stretch: { extend: "Explain who might lose out from your plan (for example, farmers downstream of an embankment or people who want to build on the floodplain) and how you would answer them." }
          },
          explain: "Say, in one sentence, why a plan needs both long-term and short-term methods.",
          why: "A top answer picks two long-term defences (built or grown) and one short-term method (done during a flood), gives a because for each, explains the mechanism with run-off, infiltration or overflow, and weighs cost, sustainability or who benefits."
        }
      ]
    }
  ],

  sources: {
    deckDump: "gg_y07_unit_3_water_on_land_rivers.txt",
    decksUsed: [
      "Water on land_Rivers_year7.pptx (water cycle and world rivers, drainage basin, longest rivers, a river's journey, water droplet story, river processes, river courses and landforms, waterfalls and meanders; slides 1–106)",
      "Flooding_Year7.pptx (causes of flooding, comparing the UK and Bangladesh, flood defence systems and the Thames Barrier, revision, end-of-unit test and DIT; slides 1–59)",
      "Floods_Year7_Lesson_100min.pptx (a 100-minute version of the flooding lessons: flood definition and sequence, natural v human factors, River Thames case study, Bangladesh, short-term v long-term protection, decision task; slides 1–20)"
    ],
    notes: "Lesson titles, sequence and objectives, the unit's Components list, every key word, the water-cycle terms, the drainage-basin terms, the longest-rivers table (Nile 6695, Amazon 6516, Yangtze 6380, Mississippi 6020, Yenisey 5539, Yellow 5464 km, with sources and mouths), the uses-of-rivers facts, the four erosion and four transportation processes and their definitions, the landform list and table, the flood definitions and the six-step flood sequence, the physical/human factor split, the HIC/LIC vocabulary, the Somerset Levels 2014 and Bangladesh 1998 case-study facts, the Thames Barrier quiz facts, the short-term/long-term split, the decision-task evaluation grid and the test format (50 marks including SPaG, 60 minutes; WWW/EBI, green pen) are taken from the department's decks. All explanations, questions, examples and model paragraphs are original; the deck's gap-fill answer paragraphs (river's journey, deposition, key words) and the Danny Droplet story are not reproduced. The seating plan on slide 14 of the Rivers deck was ignored and no pupil name appears anywhere. The lists of short-term and long-term methods are standard KS3 examples because the deck refers to the textbook (geog.1 pp. 98–99) rather than listing them: see NOTES.md. Case-study numbers are the deck's and are held in the FACTS table of verify.py; several look dated or disputed and are flagged in NOTES.md for the Head of Geography. No text still in copyright is quoted (the deck quotes none). astra/2: per-option feedback on every mcq and gap item, misconceptions on every numeric item, explain prompts on every module, four context-choice modules (ch1, ch3, ch5, ch6), glossary chapters, Connections groups and spacing; no widgets and no pretext.l1 (translation is a separate pass)."
  }
};
