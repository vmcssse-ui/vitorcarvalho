// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — Geography KS3 · Year 8 Unit 4: Glaciers and Landforms · board AQA, spec "KS3 → 8035" · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression; the FACTS names held in verify.py are allowed) and are recomputed.
//   worked examples / support examples with a calculation carry `checks:[{expr, value, tol}]`.
//   every "order" task is compared with the canonical sequences held in verify.py (the department deck's own sequences:
//   glacier-ice formation, Glaciers_year8 slide 16; corrie formation, slides 76-79; freeze-thaw, slides 32-34).
//   every mcq / gap / match answer is compared with the independent answer key held in verify.py.
//   every stated number (10 per cent of the Earth's surface, 20 000 years ago, up to 20 years to form glacier ice, drumlins a
//   kilometre or more long, 500 m wide and over 50 m high, four main types of moraine, three or more corries for a pyramidal
//   peak) is checked against the independent FACTS table in verify.py, each entry carrying its slide reference.
//   passage sentences are counted (<= 20 words) and all text is linted for known misconceptions, deck errors and deck-text fingerprints.
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions`; every module carries
//   `explain`; >= 1 module per chapter carries `contexts` that never redefine the answer; `connections` ⊂ glossary;
//   meta.constellation is omitted (the engine lays the stars out); no pretext.l1 (translation is a separate pass).
// Diagrams (the glacier system, the glacier budget, corrie formation, moraine positions) are described in words; no widget exists for them.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["geog-glaciers"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "geog-glaciers",
    subjectKey: "geography",
    subject: "Geography",
    board: "AQA",
    spec: "KS3 → 8035",
    specRef: "KS3 Year 8 Unit 4: Glaciers and Landforms (the Ice Age, where ice is found, how glacier ice forms, the glacier system and budget, glacial weathering and erosion, landforms of erosion and deposition, people and glaciers). Foundations for AQA GCSE Geography 8035, 3.1.3 Physical landscapes in the UK (glacial landscapes option)",
    year: 8,
    tier: "KS3",
    title: "Glaciers and Landforms",
    sub: "From the Ice Age that buried most of Britain to the corries, moraines and drumlins it left behind: how ice forms, how it works like a bulldozer, and why the world's glaciers are shrinking.",
    bigQuestion: "How does ice shape the land, and what happens to the landscape and to people when glaciers grow or shrink?",
    lessonCount: 10,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  // The department's deck (Glaciers_year8.pptx), in teaching order. Titles are the deck's own slide titles or learning
  // objectives; questions are those objectives rephrased. See NOTES.md section 2 for the slide ranges.
  lessons: [
    { n: 1, title: "Glaciers: the Ice Age", question: "Which parts of Europe, including the UK, were covered by ice about 20 000 years ago, and what was the Ice Age like?", keywords: ["Ice Age", "glacier", "ice sheet", "ice cap", "isostatic change", "woolly mammoth"] },
    { n: 2, title: "Ice formation and location: where is ice found?", question: "Where in the world is ice found today, and what is the difference between land ice and sea ice?", keywords: ["land ice", "sea ice", "distribution", "Greenland", "Antarctica", "Arctic Ocean"] },
    { n: 3, title: "How do glaciers form?", question: "How does fresh snow turn into glacier ice, and how long does it take?", keywords: ["snow layers", "compaction", "névé", "glacier ice"] },
    { n: 4, title: "The glacier system and glacier budget", question: "What are the inputs, stores, flows and outputs of a glacier, and when does it advance or retreat?", keywords: ["system", "input", "store", "flow", "output", "accumulation", "ablation", "advance", "retreat"] },
    { n: 5, title: "What does ice do to the landscape?", question: "How does a glacier erode, transport and deposit, and how does it turn a V-shaped valley into a U-shaped valley?", keywords: ["erosion", "weathering", "freeze-thaw", "plucking", "abrasion", "V-shaped valley", "U-shaped valley"] },
    { n: 6, title: "Landforms created by glacial erosion", question: "What are corries, arêtes, pyramidal peaks and tarns, and how are they linked?", keywords: ["corrie", "arête", "pyramidal peak", "tarn", "Matterhorn"] },
    { n: 7, title: "Glacial depositional features", question: "How do moraines, drumlins and erratics form from the material a glacier carries?", keywords: ["till", "moraine", "lateral", "medial", "ground", "terminal", "recessional", "drumlin", "erratic", "swarm"] },
    { n: 8, title: "Formation of glacial landforms: the corrie", question: "How is a corrie formed, step by step?", keywords: ["corrie", "plucking", "rotation", "back wall", "tarn", "Ben Lui"] },
    { n: 9, title: "Human uses of glaciers and glacial landscapes", question: "How do people use glaciers and glaciated landscapes?", keywords: ["glaciated valley", "land use", "spider diagram"] },
    { n: 10, title: "Human impacts on glaciers: climate change and the glacial budget", question: "How is climate change affecting the glacial budget, what is the evidence, and why should we worry?", keywords: ["climate change", "glacial budget", "retreat", "evidence", "newspaper article"] }
  ],

  // 16 terms; Connections uses all 16 (four groups, each one chapter's idea). Chapters 1 and 6 teach their key words
  // through pretext.words and the text instead (Ice Age words; people-and-climate words).
  glossary: [
    { term: "accumulation", means: "Snow being added to a glacier, mostly near the top in winter when it is coldest.", chapter: "glacier-ice" },
    { term: "ablation", means: "Ice being lost from a glacier by melting, mostly near the bottom in summer when it is warmest.", chapter: "glacier-ice" },
    { term: "advance", means: "A glacier growing, so that its snout moves further down the valley, because accumulation is greater than ablation.", chapter: "glacier-ice" },
    { term: "retreat", means: "A glacier shrinking, so that its snout moves back up the valley, because ablation is greater than accumulation.", chapter: "glacier-ice" },
    { term: "freeze-thaw weathering", means: "Water filling a crack in rock, freezing and expanding, then thawing, again and again until the rock breaks apart.", chapter: "ice-at-work" },
    { term: "plucking", means: "A glacier tearing blocks of rock away from the ground as it moves.", chapter: "ice-at-work" },
    { term: "abrasion", means: "Rocks frozen into the base of a glacier scraping the ground underneath like sandpaper.", chapter: "ice-at-work" },
    { term: "deposition", means: "A glacier dropping the rock it has been carrying, usually when the ice melts.", chapter: "ice-at-work" },
    { term: "corrie", means: "An armchair-shaped hollow carved high into a mountainside by a glacier, with a steep back wall and a flatter floor.", chapter: "erosion-landforms" },
    { term: "arête", means: "A narrow, knife-edged ridge left between two corries that have formed back to back.", chapter: "erosion-landforms" },
    { term: "pyramidal peak", means: "A pointed mountain top left where three or more corries have cut back into the same mountain.", chapter: "erosion-landforms" },
    { term: "tarn", means: "A lake in the bottom of a corrie, filling the hollow after the ice has melted.", chapter: "erosion-landforms" },
    { term: "till", means: "The jumble of unsorted, angular rocks of all sizes that a glacier deposits.", chapter: "deposition-landforms" },
    { term: "moraine", means: "A mound or ridge of till left by a glacier: lateral, medial, ground, terminal or recessional.", chapter: "deposition-landforms" },
    { term: "drumlin", means: "A long, low, egg-shaped hill of till, often found in groups called swarms.", chapter: "deposition-landforms" },
    { term: "erratic", means: "A boulder carried and dropped by a glacier, so that it is a different rock from the bedrock it sits on.", chapter: "deposition-landforms" }
  ],

  connections: [
    { group: "The glacier budget", terms: ["accumulation", "ablation", "advance", "retreat"] },
    { group: "What ice does to rock", terms: ["freeze-thaw weathering", "plucking", "abrasion", "deposition"] },
    { group: "Carved by ice in the mountains", terms: ["corrie", "arête", "pyramidal peak", "tarn"] },
    { group: "Dropped by melting ice", terms: ["till", "moraine", "drumlin", "erratic"] }
  ],

  chapters: [
    /* ───────────── 1 · the Ice Age and where ice is found ───────────── */
    {
      key: "ice-age", n: 1, title: "The Ice Age and where ice is found",
      lead: "What a glacier is, what the Ice Age did to Europe and Britain 20 000 years ago, and where land ice and sea ice are found in the world today.",
      covers: [1, 2],
      pretext: {
        words: [
          { word: "glacier", means: "a large mass of ice that flows very slowly downhill", sentence: "A glacier moves so slowly that you cannot see it flow." },
          { word: "ice sheet", means: "a huge area of ice that covers a whole land mass", sentence: "Antarctica is covered by an ice sheet." },
          { word: "Ice Age", means: "a long cold period when ice covered much more of the Earth", sentence: "During the Ice Age, ice covered most of Britain." },
          { word: "land ice", means: "ice that rests on land, such as glaciers and ice sheets", sentence: "Greenland has a great deal of land ice." },
          { word: "sea ice", means: "frozen sea water that floats on the ocean", sentence: "Sea ice covers much of the Arctic Ocean in winter." },
          { word: "distribution", means: "where something is found across the world", sentence: "The distribution of ice shows it is mostly near the poles and on high mountains." }
        ],
        passage: [
          "Ice covers about 10 per cent of the surface of the Earth.",
          "It is found as glaciers, ice caps and ice sheets.",
          "A glacier is a large mass of ice that flows very slowly downhill, pulled by gravity.",
          "Many glaciers are shaped like a river of ice.",
          "About 20 000 years ago, the Earth was in an Ice Age.",
          "Ice covered much of Europe, including most of the United Kingdom.",
          "Animals such as the woolly mammoth lived on the cold land near the ice.",
          "Today, land ice is found in Greenland, Antarctica, North America, the Alps and the Himalayas.",
          "Sea ice floats on the Arctic Ocean, the North Atlantic and the Southern Ocean.",
          "Land ice sits on rock, but sea ice floats on water.",
          "When land ice melts, the water runs into the sea and sea level rises.",
          "Glaciers grow and shrink as the seasons change."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "كتلة جليد كبيرة تتدفّق ببطء شديد نزولًا في المنحدر (glacier)",
            "منطقة جليد ضخمة تغطّي كتلة يابسة كاملة (ice sheet)",
            "مدّة باردة طويلة غطّى فيها الجليد جزءًا أكبر كثيرًا من الأرض (Ice Age)",
            "جليد يستقرّ على اليابسة، كالأنهار الجليدية والصفائح الجليدية (land ice)",
            "ماء بحر متجمّد يطفو على المحيط (sea ice)",
            "أين يوجد الشيء في أنحاء العالم (distribution)"
          ],
          "passage": [
            "يغطّي الجليد نحو 10 في المئة من سطح الأرض.",
            "ويوجد على هيئة أنهار جليدية وقِباب جليدية وصفائح جليدية.",
            "والنهر الجليدي (glacier) كتلة جليد كبيرة تتدفّق ببطء شديد نزولًا في المنحدر تجذبها الجاذبية.",
            "وكثير من الأنهار الجليدية يشبه في شكله نهرًا من الجليد.",
            "وقبل نحو 20 000 سنة كانت الأرض في عصر جليدي.",
            "وغطّى الجليد جزءًا كبيرًا من أوروبا، ومنه معظم المملكة المتّحدة.",
            "وعاشت حيوانات كالماموث الصوفي على الأرض الباردة قرب الجليد.",
            "واليوم يوجد جليد اليابسة في غرينلاند وأنتاركتيكا وأمريكا الشمالية وجبال الألب والهيمالايا.",
            "ويطفو جليد البحر على المحيط المتجمّد الشمالي وشمال الأطلسي والمحيط الجنوبي.",
            "فجليد اليابسة يستقرّ على الصخر، أمّا جليد البحر فيطفو على الماء.",
            "وعندما يذوب جليد اليابسة يجري الماء إلى البحر فيرتفع مستوى سطح البحر.",
            "والأنهار الجليدية تكبر وتصغر مع تغيّر الفصول."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "wielka masa lodu, która bardzo wolno spływa w dół (glacier)",
            "ogromny obszar lodu, który pokrywa cały ląd (ice sheet)",
            "długi zimny okres, kiedy lód pokrywał znacznie większą część Ziemi (Ice Age)",
            "lód, który leży na lądzie, na przykład lodowce i lądolody (land ice)",
            "zamarznięta woda morska, która pływa po oceanie (sea ice)",
            "to, gdzie na świecie coś występuje (distribution)"
          ],
          "passage": [
            "Lód pokrywa około 10 procent powierzchni Ziemi.",
            "Występuje jako lodowce, czapy lodowe i lądolody.",
            "Lodowiec (glacier) to wielka masa lodu, która bardzo wolno spływa w dół, ciągnięta przez grawitację.",
            "Wiele lodowców ma kształt rzeki z lodu.",
            "Około 20 000 lat temu Ziemia była w epoce lodowej.",
            "Lód pokrywał dużą część Europy, w tym większość Zjednoczonego Królestwa.",
            "Zwierzęta takie jak mamut włochaty żyły na zimnym lądzie blisko lodu.",
            "Dziś lód lądowy występuje na Grenlandii, w Antarktydzie, w Ameryce Północnej, w Alpach i w Himalajach.",
            "Lód morski pływa po Oceanie Arktycznym, po północnym Atlantyku i po Oceanie Południowym.",
            "Lód lądowy leży na skale, a lód morski pływa po wodzie.",
            "Kiedy lód lądowy się topi, woda spływa do morza i poziom morza się podnosi.",
            "Lodowce rosną i maleją w miarę zmiany pór roku."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma grande massa de gelo que desce a encosta muito lentamente (glacier, glaciar/geleira)",
            "uma enorme área de gelo que cobre uma massa de terra inteira (ice sheet, manto de gelo)",
            "um longo período frio em que o gelo cobria muito mais da Terra (Ice Age, Idade do Gelo)",
            "gelo que assenta em terra, como os glaciares/geleiras e os mantos de gelo (land ice)",
            "água do mar congelada que flutua no oceano (sea ice, gelo marinho)",
            "onde uma coisa se encontra pelo mundo (distribution, distribuição)"
          ],
          "passage": [
            "O gelo cobre cerca de 10 por cento da superfície da Terra.",
            "Encontra-se como glaciares/geleiras, calotas de gelo e mantos de gelo.",
            "Um glaciar/geleira é uma grande massa de gelo que desce a encosta muito lentamente, puxada pela gravidade.",
            "Muitos glaciares/geleiras têm a forma de um rio de gelo.",
            "Há cerca de 20 000 anos, a Terra estava numa Idade do Gelo.",
            "O gelo cobria grande parte da Europa, incluindo quase todo o Reino Unido.",
            "Animais como o mamute-lanudo viviam na terra fria perto do gelo.",
            "Hoje, o gelo em terra encontra-se na Groenlândia, na Antártida, na América do Norte, nos Alpes e nos Himalaias.",
            "O gelo marinho flutua no oceano Ártico, no Atlântico Norte e no oceano Antártico.",
            "O gelo em terra assenta em rocha, mas o gelo marinho flutua na água.",
            "Quando o gelo em terra derrete, a água escorre para o mar e o nível do mar sobe.",
            "Os glaciares/geleiras crescem e encolhem conforme as estações mudam."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "baraf weyn oo si aad u gaabis ah buurta hoos uga qulqulaya",
            "meel baraf ah oo aad u weyn oo dhul-weyn oo dhan qariya",
            "muddo dheer oo qabow ah markii barafku qariyay dhul aad uga badan Dhulka",
            "baraf dhulka ku fadhiya, sida glaciers iyo ice sheets",
            "biyo badeed barafoobay oo badweynta ku dul sabbaynaya",
            "halka wax laga helo dunida oo dhan"
          ],
          "passage": [
            "Barafku wuxuu qariyaa qiyaastii 10 boqolkiiba dusha Dhulka.",
            "Waxaa laga helaa glaciers, ice caps iyo ice sheets.",
            "Glacier waa baraf weyn oo si aad u gaabis ah buurta hoos uga qulqulaya, oo cuf-jiidadku jiidayo.",
            "Glaciers badan waxay u eg yihiin webi baraf ah.",
            "Qiyaastii 20 000 sano ka hor, Dhulku wuxuu ku jiray Xilligii Barafka (Ice Age).",
            "Barafku wuxuu qariyay inta badan Yurub, oo ay ku jirto inta badan Boqortooyada Midowday.",
            "Xayawaan sida woolly mammoth waxay ku noolaayeen dhulka qabow ee barafka u dhow.",
            "Maanta, barafka dhulka waxaa laga helaa Greenland, Antarctica, Waqooyiga Ameerika, Buuraha Alps iyo Buuraha Himalaya.",
            "Barafka badda wuxuu dul sabbaynayaa Badweynta Arctic, Waqooyiga Atlantic iyo Badweynta Koonfureed.",
            "Barafka dhulka dhagax ayuu ku fadhiistaa, barafka baddase biyo ayuu ku sabbaynayaa.",
            "Marka barafka dhulka dhalaalo, biyuhu badda ayay u qulqulaan, heerka baddana wuu kacaa.",
            "Glaciers way kordhaan oo way yaraadaan sida xilliyadu u isbeddelaan."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "велика маса льоду, яка дуже повільно тече вниз схилом (glacier)",
            "величезний простір льоду, що покриває цілий масив землі (ice sheet)",
            "довгий холодний період, коли лід покривав значно більшу частину Землі (Ice Age)",
            "лід, що лежить на землі, як-от льодовики і льодові щити (land ice)",
            "замерзла морська вода, що плаває на океані (sea ice)",
            "те, де щось зустрічається у світі (distribution)"
          ],
          "passage": [
            "Лід покриває приблизно 10 відсотків поверхні Землі.",
            "Він зустрічається як льодовики, льодові шапки і льодові щити.",
            "Льодовик (glacier) — це велика маса льоду, яка дуже повільно тече вниз схилом, тягнена силою тяжіння.",
            "Багато льодовиків мають форму річки з льоду.",
            "Близько 20 000 років тому Земля була в льодовиковому періоді.",
            "Лід покривав значну частину Європи, зокрема більшу частину Об’єднаного Королівства.",
            "Такі тварини, як волохатий мамонт, жили на холодній землі біля льоду.",
            "Сьогодні наземний лід є у Ґренландії, Антарктиді, Північній Америці, Альпах і Гімалаях.",
            "Морський лід плаває в Арктичному океані, Північній Атлантиці та Південному океані.",
            "Наземний лід лежить на скелі, а морський лід плаває на воді.",
            "Коли наземний лід тане, вода стікає в море і рівень моря піднімається.",
            "Льодовики ростуть і зменшуються зі зміною сезонів."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "برف کا ایک بڑا تودہ جو بہت آہستہ ڈھلان پر بہتا ہے (glacier)",
            "برف کا ایک بہت بڑا علاقہ جو پوری خشکی کو ڈھانپ لے (ice sheet)",
            "ایک لمبا سرد دور جب برف زمین کے بہت زیادہ حصے پر تھی (Ice Age)",
            "وہ برف جو خشکی پر ٹکی ہو، جیسے glaciers اور ice sheets",
            "جمے ہوئے سمندری پانی کی برف جو سمندر پر تیرتی ہے (sea ice)",
            "کوئی چیز دنیا بھر میں کہاں کہاں پائی جاتی ہے (distribution)"
          ],
          "passage": [
            "برف زمین کی سطح کے تقریباً 10 فیصد حصے پر ہے۔",
            "یہ glaciers، ice caps اور ice sheets کی شکل میں پائی جاتی ہے۔",
            "glacier برف کا بڑا تودہ ہے جو کششِ ثقل کے کھینچنے سے بہت آہستہ ڈھلان پر بہتا ہے۔",
            "بہت سے glaciers کی شکل برف کے دریا جیسی ہوتی ہے۔",
            "تقریباً 20 000 سال پہلے زمین Ice Age میں تھی۔",
            "برف نے یورپ کا بڑا حصہ ڈھانپ لیا تھا، جس میں برطانیہ کا بھی زیادہ تر حصہ شامل تھا۔",
            "اونی میمتھ (woolly mammoth) جیسے جانور برف کے قریب اس سرد زمین پر رہتے تھے۔",
            "آج land ice گرین لینڈ، انٹارکٹکا، شمالی امریکہ، الپس اور ہمالیہ میں ہے۔",
            "sea ice بحرِ منجمد شمالی (Arctic Ocean)، شمالی بحرِ اوقیانوس اور جنوبی سمندر پر تیرتی ہے۔",
            "land ice چٹان پر بیٹھی ہوتی ہے، مگر sea ice پانی پر تیرتی ہے۔",
            "جب land ice پگھلتی ہے تو پانی سمندر میں جاتا ہے اور سمندر کی سطح بلند ہو جاتی ہے۔",
            "موسم بدلنے کے ساتھ glaciers بڑھتے اور سکڑتے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What is a glacier?",
          paragraphs: [
            "Look at a globe and you will see white at the top and the bottom. Ice covers about 10 per cent of the surface of the Earth. It comes in three forms. An ice sheet is a vast, thick layer of ice that buries a whole land mass; Antarctica and Greenland are covered by ice sheets. An ice cap is a smaller dome of ice that sits on top of a mountain range or an island. A glacier is a large mass of ice, often shaped like a river, that flows very slowly downhill under the force of gravity.",
            "A glacier really does flow, even though it is solid. The ice at the bottom is squeezed by the enormous weight above it, and the whole mass creeps down the valley a few centimetres or metres a day. You would not see it move if you stood and watched, but over hundreds of years a glacier can travel many kilometres.",
            "Glaciers grow and shrink with the seasons. In winter, snow piles up and the glacier gets bigger. In summer, the warmer air melts ice at the lower end, and the glacier gets smaller. Chapter 2 looks at this balance in detail."
          ],
          tip: "Three forms of ice, from biggest to smallest: ice sheet, ice cap, glacier. If you can picture Antarctica, the Alps and a river of ice, you have all three."
        },
        {
          heading: "The Ice Age",
          paragraphs: [
            "About 20 000 years ago, the Earth was in an Ice Age. The climate was far colder than today, and ice sheets spread south from the Arctic until they covered much of the continent of Europe, including most of the United Kingdom. Scotland, northern England and Wales lay under ice hundreds of metres thick. The land to the south was a cold, treeless plain, something like the tundra of northern Russia today.",
            "Animals that could cope with the cold lived there: the woolly mammoth and the sabre-toothed cat are the famous examples. Plants were small and tough, because the growing season was short. When the climate warmed and the ice melted, these animals either moved north or died out.",
            "The ice changed the shape of the land itself. So much water was locked up as ice that sea level was much lower than today, and Britain was joined to the rest of Europe by dry land. The weight of the ice also pressed the Earth's crust downwards. When the ice melted, the crust slowly rose back up again. Geographers call this isostatic change. Parts of Scotland are still rising today, thousands of years after the ice left."
          ],
          tip: "Two kinds of level change to remember from the Ice Age: sea level fell because water was locked up as ice, and the land itself was pressed down by the weight of the ice and rose again afterwards."
        },
        {
          heading: "Land ice and sea ice",
          paragraphs: [
            "Where is ice found today? Geographers split it into two kinds. Land ice rests on land, and it includes glaciers, ice caps and ice sheets. It is found in Greenland, Antarctica, the mountains of North America, the Alps and the Himalayas. Scotland had land ice in the Ice Age, and its mountains still show the hollows and ridges the glaciers carved, but today it has no glaciers.",
            "Sea ice is frozen sea water that floats on the ocean. It is found on the Arctic Ocean, in the North Atlantic near Greenland, and on the Southern Ocean around Antarctica. It grows in winter and shrinks in summer.",
            "The difference matters for sea level. When sea ice melts, the water was already in the sea, so the level barely changes, just as a melting ice cube does not make a full glass overflow. When land ice melts, the meltwater runs off the land into the sea and adds to it, so sea level rises. That is why scientists watch the ice sheets of Greenland and Antarctica so closely."
          ],
          worked: {
            q: "Describe the distribution of sea ice in the world today. Use the names of oceans. (2 marks)",
            steps: [
              "A describe question asks for the pattern and the names, not the reasons.",
              "Pattern first: sea ice floats on the oceans closest to the two poles.",
              "Then the names from this chapter: the Arctic Ocean, the North Atlantic beside Greenland, the Southern Ocean around Antarctica.",
              "A pattern plus named oceans earns both marks."
            ],
            answer: "Sea ice is found on the oceans closest to the two poles. In the far north it floats on the Arctic Ocean and reaches the North Atlantic beside Greenland; in the far south it surrounds Antarctica on the Southern Ocean."
          },
          tip: "Describe means say where, using names and directions. You do not need to explain why the ice is there."
        }
      ],
      gate: [
        { kind: "numeric", q: "About what percentage of the surface of the Earth is covered by ice?", answer: 10, tolerance: 0, units: "%", check: "ICE_COVER_PCT", why: "Ice covers about 10 per cent of the surface of the Earth, as glaciers, ice caps and ice sheets.",
          misconceptions: [
            { answer: 20, says: "You may be thinking of 20 000 years ago, the time of the Ice Age. Today ice covers about 10 per cent of the surface of the Earth.", check: "ICE_AGE_YEARS_AGO/1000" },
            { answer: 50, says: "Half the Earth would be a world in a deep Ice Age. Today ice covers about 10 per cent of the surface.", check: "50" },
            { answer: 1, says: "That is too little. The ice sheets of Antarctica and Greenland alone cover a great deal of land; the total is about 10 per cent of the surface.", check: "1" }
          ] },
        { kind: "mcq", q: "Which of these is a place where sea ice is found?", options: ["The Arctic Ocean", "Greenland", "Antarctica", "The Alps"], answer: 0, why: "Sea ice is frozen sea water floating on the ocean. The Arctic Ocean, the North Atlantic and the Southern Ocean are the deck's three examples.",
          feedback: [
            "",
            "Greenland is a land mass covered by an ice sheet, so its ice is land ice. Sea ice floats on an ocean, such as the Arctic Ocean.",
            "Antarctica is a continent, and the ice on it is land ice. The sea ice is on the Southern Ocean around it, not on Antarctica itself.",
            "The Alps are mountains, so their glaciers are land ice. Sea ice can only form on the sea, such as the Arctic Ocean."
          ] },
        { kind: "gap", q: "About ___ years ago, during the Ice Age, ice covered much of Europe and most of the United Kingdom.", answer: "20 000", options: ["20 000", "2000", "200"], why: "The deck dates the Ice Age ice cover to about 20 000 years ago, long before any towns or farms existed in Britain.",
          feedback: {
            "2000": "2000 years ago is Roman Britain, which had no ice sheets. The Ice Age ice cover was about 20 000 years ago, ten times further back.",
            "200": "200 years ago is the time of the first railways; Britain looked much as it does now. The Ice Age ice cover was about 20 000 years ago."
          } }
      ],
      modules: [
        {
          title: "Four kinds of ice",
          task: {
            kind: "match",
            q: "Match each kind of ice to its description.",
            pairs: [
              ["Glacier", "A large mass of ice that flows slowly downhill under gravity"],
              ["Ice sheet", "A vast layer of ice that buries a whole land mass, such as Antarctica"],
              ["Sea ice", "Frozen sea water floating on the ocean"],
              ["Land ice", "Any ice resting on land, including glaciers and ice sheets"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Two of the names tell you where the ice is: land or sea. Match those first.",
                "Of the two left, one is the biggest kind of ice there is and buries whole continents.",
                "The other flows downhill like a very slow river.",
                "Check: a glacier is a kind of land ice, so land ice must be the wider group."
              ],
              example: {
                q: "Match: iceberg, ice cap. Choices: a smaller dome of ice on top of a mountain range or island; a chunk of ice that has broken off a glacier and floats in the sea.",
                steps: ["An iceberg floats, so it is the chunk broken off into the sea.", "An ice cap sits on top of something, so it is the dome on a mountain range or island."],
                answer: "Iceberg: a chunk of ice broken off a glacier, floating in the sea. Ice cap: a smaller dome of ice on a mountain range or island."
              }
            },
            core: { hint: "Where is the ice: on land or on the sea? Then: is it moving like a river, or sitting on a whole continent?" },
            stretch: { extend: "Explain why a glacier counts as land ice but an iceberg that has broken off it does not." }
          },
          explain: "Say, in one sentence, the difference between land ice and sea ice.",
          why: "A glacier flows slowly downhill under gravity. An ice sheet is the biggest kind of ice and covers a whole land mass. Sea ice is frozen sea water floating on the ocean. Land ice is the wider group: any ice on land, so glaciers and ice sheets both belong to it."
        },
        {
          title: "Which melting ice raises the sea?",
          task: {
            kind: "mcq",
            q: "Which kind of melting ice makes sea level rise, and why?",
            options: [
              "Land ice, because its meltwater runs off the land into the sea",
              "Sea ice, because it is already floating in the sea",
              "Both equally, because all melting ice adds water to the sea",
              "Neither, because melted ice turns into rain"
            ],
            answer: 0,
            feedback: [
              "",
              "Sea ice is already floating in the sea, so its water is already counted. When it melts, the level hardly changes, like an ice cube melting in a full glass. Land ice adds new water from the land.",
              "The two are not equal. Sea ice is already in the sea, so melting it adds almost nothing. Only land ice brings new water down into the sea.",
              "Meltwater does not vanish into rain. From land ice it runs off into rivers and the sea, and that extra water raises sea level."
            ]
          },
          contexts: [
            { label: "Greenland", q: "The Greenland ice sheet is losing ice every summer. Which kind of ice is this, and why does its melting make sea level rise?" },
            { label: "Arctic summer", q: "In an Arctic summer, a great deal of ice floating on the Arctic Ocean melts, yet sea level hardly changes. Which kind of ice does raise sea level when it melts, and why?" },
            { label: "Alpine glacier", q: "A glacier in the Alps has shrunk, and its meltwater runs down a river to the sea. Which kind of melting ice makes sea level rise, and why?" }
          ],
          explain: "Say, in one sentence, why melting sea ice hardly changes sea level.",
          levels: {
            support: {
              steps: [
                "Ask where the ice is before it melts: on land, or already floating in the sea?",
                "Ice already floating in the sea is already part of the sea, so melting it changes little.",
                "Ice on land is extra water that has not reached the sea yet. When it melts, it runs down to the sea.",
                "So the ice that raises sea level is the ice that starts on land."
              ],
              example: {
                q: "A glass is full to the brim with water and ice cubes. When the cubes melt, does the glass overflow? Now pour in an extra cup of water. What happens?",
                steps: ["The floating cubes are already part of the water in the glass, so melting them does not overflow it.", "The extra cup is new water from outside, so the glass overflows."],
                answer: "The melting cubes do not make it overflow, like sea ice. The extra cup does, like meltwater from land ice."
              }
            },
            core: { hint: "Is the ice already in the sea before it melts, or does its water have to travel down to the sea?" },
            stretch: { extend: "Explain why scientists are more worried about the Antarctic and Greenland ice sheets than about Arctic sea ice when they think about sea level." }
          },
          why: "Sea ice is already floating in the ocean, so melting it adds almost nothing to sea level. Land ice, such as the Greenland and Antarctic ice sheets and mountain glaciers, is water held on land; when it melts, that water runs into the sea and sea level rises."
        },
        {
          title: "Describe where the ice is",
          task: {
            kind: "written",
            q: "Describe the distribution of ice in the world today. Use the names of continents and oceans in your answer. (4 marks)",
            marks: 4,
            criteria: [
              "Gives the overall pattern: most ice is near the poles and on high mountains",
              "Names at least two places with land ice, including a continent",
              "Names at least one ocean with sea ice",
              "Uses the words land ice and sea ice correctly"
            ],
            model: "Most of the world's ice is found near the North and South Poles and on high mountains. The largest areas of land ice are the ice sheets covering Antarctica and Greenland, and there are glaciers in the mountains of North America, the Alps in Europe and the Himalayas in Asia. Sea ice floats on the Arctic Ocean in the north, on the North Atlantic near Greenland, and on the Southern Ocean around Antarctica in the south."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: give the big pattern. Ice is near the poles and on high mountains.",
                "Sentence 2: name the land ice. Antarctica, Greenland, then the mountain ranges.",
                "Sentence 3: name the sea ice. The Arctic Ocean, the North Atlantic, the Southern Ocean.",
                "Check you have used both terms, land ice and sea ice, and at least one continent and one ocean."
              ],
              example: {
                q: "In two sentences, describe the distribution of deserts in the world, using continent names. (You may know: the Sahara in Africa, the Arabian Desert in Asia, the Australian deserts.)",
                steps: ["Give the pattern first: deserts lie in hot bands either side of the Equator.", "Then name places on named continents."],
                answer: "Most hot deserts lie in two bands either side of the Equator. They include the Sahara in Africa, the Arabian Desert in Asia and the deserts of central Australia."
              }
            },
            core: { hint: "Pattern first, then names. Land ice: two continents and some mountains. Sea ice: three oceans." },
            stretch: { extend: "Add a sentence explaining why most ice is found near the poles and on high mountains, using the word temperature." }
          },
          explain: "Say, in one sentence, what a describe question asks you to do that an explain question does not.",
          why: "A good description gives the pattern, then the named places. Land ice: Antarctica, Greenland, the mountains of North America, the Alps and the Himalayas. Sea ice: the Arctic Ocean, the North Atlantic and the Southern Ocean. It does not need to say why the ice is there."
        }
      ]
    },

    /* ───────────── 2 · from snow to ice: the glacier system and budget ───────────── */
    {
      key: "glacier-ice", n: 2, title: "From snow to ice: how a glacier forms and works",
      lead: "How layers of snow are squeezed into glacier ice, how a glacier works as a system with inputs, stores, flows and outputs, and how its budget decides whether it grows or shrinks.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "compaction", means: "being squeezed tightly together by weight from above", sentence: "Compaction turns loose snow into hard ice." },
          { word: "névé", means: "hard, packed snow that is on its way to becoming glacier ice", sentence: "Dig down through fresh snow and you reach névé." },
          { word: "accumulation", means: "snow being added to a glacier", sentence: "Accumulation is greatest near the top of the glacier in winter." },
          { word: "ablation", means: "ice being lost from a glacier by melting", sentence: "Ablation is greatest near the bottom of the glacier in summer." },
          { word: "snout", means: "the end of a glacier, where the ice stops", sentence: "A stream of meltwater runs out from the snout." },
          { word: "system", means: "a set of parts with inputs, stores, flows and outputs", sentence: "A bath with its tap and plughole is a simple system." }
        ],
        passage: [
          "Glacier ice begins as snow.",
          "Each year, new snow falls on top of the old snow.",
          "The snow builds up in layers, with the oldest at the bottom.",
          "The weight of new snow presses down on the layers underneath.",
          "Air is squeezed out, and the snow becomes more like ice.",
          "Hard, packed snow is called névé.",
          "When all the air has gone, it is glacier ice.",
          "This can take as long as 20 years.",
          "A glacier works like a system, with inputs, stores, flows and outputs.",
          "Snow is the main input, and ice is the store.",
          "The glacier flows slowly downhill, and meltwater is the main output.",
          "Snow added to a glacier is called accumulation.",
          "Ice lost by melting is called ablation."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "أن يُضغَط الشيء ضغطًا شديدًا بثِقَل ما فوقه (compaction)",
            "ثلج صلب متراصّ في طريقه إلى أن يصير جليدًا نهريًّا (névé)",
            "إضافة الثلج إلى النهر الجليدي (accumulation)",
            "فقدان النهر الجليدي جليدَه بالذوبان (ablation)",
            "طرف النهر الجليدي حيث يتوقّف الجليد (snout)",
            "مجموعة من الأجزاء لها مُدخلات ومخازن وتدفّقات ومُخرجات (system)"
          ],
          "passage": [
            "يبدأ جليد النهر الجليدي ثلجًا.",
            "وفي كلّ سنة يسقط ثلج جديد فوق الثلج القديم.",
            "فيتراكم الثلج طبقاتٍ، أقدمها في الأسفل.",
            "ويضغط ثِقَل الثلج الجديد على الطبقات التي تحته.",
            "فيُطرَد الهواء، ويصير الثلج أشبه بالجليد.",
            "ويُسمّى الثلج الصلب المتراصّ نيفي (névé).",
            "وعندما يذهب الهواء كلّه يصير جليدًا نهريًّا.",
            "وقد يستغرق هذا 20 سنة.",
            "والنهر الجليدي يعمل كنظام، له مُدخلات ومخازن وتدفّقات ومُخرجات.",
            "فالثلج هو المُدخَل الرئيس، والجليد هو المخزن.",
            "ويتدفّق النهر الجليدي ببطء نزولًا، وماء الذوبان هو المُخرَج الرئيس.",
            "ويُسمّى الثلج المضاف إلى النهر الجليدي تراكمًا (accumulation).",
            "ويُسمّى الجليد المفقود بالذوبان تآكلًا جليديًّا (ablation)."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "ściśnięcie w jedno pod ciężarem z góry (compaction)",
            "twardy, zbity śnieg, który zmienia się w lód lodowcowy (névé)",
            "śnieg, który dokłada się do lodowca (accumulation)",
            "ubytek lodu z lodowca przez topienie (ablation)",
            "koniec lodowca, tam gdzie lód się zatrzymuje (snout)",
            "zestaw części z wejściami, magazynami, przepływami i wyjściami (system)"
          ],
          "passage": [
            "Lód lodowcowy zaczyna się od śniegu.",
            "Każdego roku nowy śnieg spada na stary.",
            "Śnieg narasta warstwami, a najstarsza warstwa jest na dole.",
            "Ciężar nowego śniegu naciska na warstwy pod nim.",
            "Powietrze zostaje wyciśnięte, a śnieg staje się coraz bardziej podobny do lodu.",
            "Twardy, zbity śnieg nazywamy névé.",
            "Kiedy całe powietrze zniknie, mamy lód lodowcowy.",
            "Może to zająć nawet 20 lat.",
            "Lodowiec działa jak system, z wejściami, magazynami, przepływami i wyjściami.",
            "Śnieg jest głównym wejściem, a lód jest magazynem.",
            "Lodowiec wolno spływa w dół, a woda z topienia jest głównym wyjściem.",
            "Śnieg dołożony do lodowca nazywamy akumulacją (accumulation).",
            "Lód utracony przez topienie nazywamy ablacją (ablation)."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "ser apertado com muita força pelo peso que está em cima (compaction, compactação)",
            "neve dura e compactada que está a caminho de se tornar gelo de glaciar/geleira (névé)",
            "neve que se junta a um glaciar/geleira (accumulation, acumulação)",
            "gelo que um glaciar/geleira perde por derretimento (ablation, ablação)",
            "a ponta de um glaciar/geleira, onde o gelo acaba (snout, frente glaciar)",
            "um conjunto de partes com entradas, reservas, fluxos e saídas (system, sistema)"
          ],
          "passage": [
            "O gelo de um glaciar/geleira começa como neve.",
            "Todos os anos cai neve nova por cima da neve velha.",
            "A neve acumula-se em camadas, com a mais antiga no fundo.",
            "O peso da neve nova pressiona as camadas que estão por baixo.",
            "O ar é expulso, e a neve fica mais parecida com gelo.",
            "A neve dura e compactada chama-se névé.",
            "Quando já saiu todo o ar, é gelo de glaciar/geleira.",
            "Isto pode levar até 20 anos.",
            "Um glaciar/geleira funciona como um sistema, com entradas, reservas, fluxos e saídas.",
            "A neve é a entrada principal, e o gelo é a reserva.",
            "O glaciar/geleira corre devagar pela encosta, e a água de degelo é a saída principal.",
            "A neve que se junta a um glaciar/geleira chama-se acumulação (accumulation).",
            "O gelo perdido por derretimento chama-se ablação (ablation)."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "in la isku riixo si adag culayska kor ka imaanaya",
            "baraf adag oo isku riixan oo ku socda inuu noqdo barafka glacier-ka",
            "baraf lagu dara glacier",
            "baraf glacier ka lumaya dhalaalid",
            "dhammaadka glacier-ka, meesha barafku ku joogsado",
            "urur qaybo ah oo leh waxa gudaha u socda, waxa lagu kaydiya, socodka iyo waxa dibadda u baxa"
          ],
          "passage": [
            "Barafka glacier-ka wuxuu ku bilaabmaa baraf-roob.",
            "Sano kasta, baraf cusub wuxuu ku dul da'aa barafkii hore.",
            "Barafku lakabyo ayuu isugu tuulmaa, kii ugu duqoobayna hoosta ayuu ku jiraa.",
            "Culayska barafka cusub wuxuu hoos u riixaa lakabyada hoostiisa.",
            "Hawadu dibadda ayay u baxdaa, barafkuna wuxuu noqdaa mid baraf adag u eg.",
            "Barafka adag ee isku riixan waxaa loo yiraahdaa névé.",
            "Marka hawada oo dhan baxdo, waa barafka glacier-ka.",
            "Tan waxay qaadan kartaa ilaa 20 sano.",
            "Glacier wuxuu u shaqeeyaa sidii nidaam, leh waxa gudaha u socda, waxa lagu kaydiya, socodka iyo waxa dibadda u baxa.",
            "Barafka baraf-roobku waa waxa ugu weyn gudaha u socda, barafka adagna waa kaydka.",
            "Glacier-ku si tartiib ah buurta hoos ayuu uga qulqulaa, biyaha dhalaalayana waa waxa ugu weyn dibadda u baxa.",
            "Barafka glacier lagu daro waxaa loo yiraahdaa accumulation.",
            "Barafka dhalaalidda ku lumaya waxaa loo yiraahdaa ablation."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "бути щільно стиснутим вагою згори (compaction)",
            "твердий злежаний сніг, який перетворюється на льодовиковий лід (névé)",
            "сніг, що додається до льодовика (accumulation)",
            "лід, що втрачається льодовиком через таяння (ablation)",
            "кінець льодовика, де лід зупиняється (snout)",
            "набір частин із входами, запасами, потоками і виходами (system)"
          ],
          "passage": [
            "Льодовиковий лід починається як сніг.",
            "Кожного року новий сніг падає на старий сніг.",
            "Сніг накопичується шарами, і найстаріший — на дні.",
            "Вага нового снігу тисне на шари під ним.",
            "Повітря витискається, і сніг стає більше схожим на лід.",
            "Твердий злежаний сніг називають фірном (névé).",
            "Коли все повітря зникло, це льодовиковий лід.",
            "Це може тривати аж 20 років.",
            "Льодовик працює як система (system), з входами, запасами, потоками і виходами.",
            "Сніг — головний вхід, а лід — запас.",
            "Льодовик повільно тече вниз схилом, а вода від таяння — головний вихід.",
            "Сніг, що додається до льодовика, називають акумуляцією (accumulation).",
            "Лід, що втрачається через таяння, називають абляцією (ablation)."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "اوپر کے وزن سے زور سے دب کر آپس میں بھنچ جانا (compaction)",
            "سخت، دبی ہوئی برف جو glacier کی برف بننے کی راہ پر ہے (névé)",
            "glacier میں نئی برف کا شامل ہونا (accumulation)",
            "پگھلنے سے glacier کی برف کا کم ہونا (ablation)",
            "glacier کا سرا، جہاں برف رک جاتی ہے (snout)",
            "ایسے حصوں کا مجموعہ جس میں inputs، stores، flows اور outputs ہوں (system)"
          ],
          "passage": [
            "glacier کی برف کا آغاز برفباری سے ہوتا ہے۔",
            "ہر سال پرانی برف کے اوپر نئی برف گرتی ہے۔",
            "برف تہوں میں جمع ہوتی ہے، سب سے پرانی تہہ سب سے نیچے۔",
            "نئی برف کا وزن نیچے کی تہوں پر دباؤ ڈالتا ہے۔",
            "ہوا نچڑ کر باہر نکل جاتی ہے، اور برف زیادہ سخت برف جیسی ہو جاتی ہے۔",
            "سخت، دبی ہوئی برف کو névé کہتے ہیں۔",
            "جب ساری ہوا نکل جاتی ہے تو یہ glacier کی برف بن جاتی ہے۔",
            "اس میں 20 سال تک لگ سکتے ہیں۔",
            "glacier ایک system کی طرح کام کرتا ہے، جس میں inputs، stores، flows اور outputs ہوتے ہیں۔",
            "برفباری بڑا input ہے، اور برف store ہے۔",
            "glacier آہستہ آہستہ ڈھلان پر بہتا ہے، اور پگھلا ہوا پانی بڑا output ہے۔",
            "glacier میں شامل ہونے والی برف کو accumulation کہتے ہیں۔",
            "پگھلنے سے کم ہونے والی برف کو ablation کہتے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Snow becomes ice",
          paragraphs: [
            "A glacier does not start as ice. It starts as snow, falling year after year in a place so cold that the snow never fully melts. Each year's snowfall makes a new layer, so the fresh snow is at the surface and the older snow lies deeper down. The weight of each new snowfall presses on the layers beneath it. This squeezing is called compaction.",
            "As the snow is compressed, the air trapped between the flakes is forced out, and the snow becomes more and more like ice. Hard, packed snow is called névé. It is the first sign that glacier ice is near. When all the air has been forced out by compaction, the névé has become glacier ice. The deck says this can take as long as 20 years.",
            "Think of making a snowball. Loose snow is light and full of air. Squeeze it hard in your hands and it becomes a small, heavy, icy lump. A glacier is the same process on a giant scale, with the weight of many winters doing the squeezing."
          ],
          tip: "Six stages, in order: new layer each year; fresh snow on top, old snow below; weight presses the layers; air is forced out; névé forms; glacier ice when all the air has gone."
        },
        {
          heading: "The glacier as a system",
          paragraphs: [
            "Geographers describe a glacier as a system: a set of parts with inputs (what comes in), stores (what is held), flows (what moves through) and outputs (what leaves). A bath is a simple system. The tap is the input, the water in the bath is the store, water moving across the bath is the flow, and the plughole is the output.",
            "In a glacier, the inputs are snow falling at the top of the glacier, in the zone of accumulation, and snow and ice tumbling onto it in avalanches from the slopes above. The store is the ice itself, together with the snow and névé on top of it. The flow (the deck also calls it the transfer) is the glacier moving slowly downhill under gravity. The outputs are meltwater, which runs out from the snout, and a small amount of water that evaporates straight into the air.",
            "Thinking of a glacier as a system is useful because it lets you predict what happens when one part changes. Less snow in, or more melting out, and the store of ice must get smaller."
          ],
          worked: {
            q: "Give one input, one store, one flow and one output of a glacier system. (4 marks)",
            steps: [
              "Input: what comes into the glacier? Snow falling at the top.",
              "Store: what does the glacier hold? Ice.",
              "Flow: what moves? The glacier itself, creeping downhill under gravity.",
              "Output: what leaves? Meltwater from the snout.",
              "One correct example for each part earns the four marks."
            ],
            answer: "Input: snow falling on the top of the glacier. Store: the ice. Flow: the glacier moving slowly downhill. Output: meltwater leaving the snout."
          },
          tip: "If you forget which is which, go back to the bath: tap (in), bath water (store), water moving (flow), plughole (out)."
        },
        {
          heading: "The glacier budget",
          paragraphs: [
            "A budget balances what comes in against what goes out. A glacier's budget balances accumulation against ablation. Accumulation is snow being added. It is greatest near the top of the glacier, in winter, when it is coldest. Ablation is ice being lost by melting. It is greatest at the bottom of the mountain, around the snout, in summer, when it is warmest. The upper part of a glacier is the zone of accumulation; the lower part is the zone of ablation.",
            "If accumulation is greater than ablation, more ice is added than is lost, so the glacier gets bigger and its snout pushes further down the valley. This is called an advance. If ablation is greater than accumulation, more ice melts than is added, so the glacier shrinks and its snout moves back up the valley. This is called a retreat. If the two are equal, the glacier stays the same size, even though the ice inside it is still flowing downhill.",
            "Most glaciers in the world today are retreating. Chapter 6 asks why, and what it means for people."
          ],
          tip: "Accumulation adds; ablation takes away. Both start with a, so link them to their place and season: accumulation at the top in winter, ablation at the bottom in summer."
        }
      ],
      gate: [
        { kind: "gap", q: "Hard, compacted snow that is on its way to becoming glacier ice is called ___.", answer: "névé", options: ["névé", "meltwater", "sleet"], why: "Névé is the hard, packed snow you reach when most of the air has been squeezed out. When all the air has gone, it is glacier ice.",
          feedback: {
            "meltwater": "Meltwater is an output of the glacier, water that has melted from the ice. The hard, packed snow on its way to becoming ice is called névé.",
            "sleet": "Sleet is a mixture of rain and snow falling from the sky, so it is a kind of precipitation. The hard, packed snow inside the glacier is called névé."
          } },
        { kind: "mcq", q: "Which of these is an output of the glacier system?", options: ["Meltwater running out of the snout", "Snow falling on the top of the glacier", "The ice held in the glacier", "An avalanche falling onto the glacier"], answer: 0, why: "An output is what leaves the system. Meltwater leaves the glacier at the snout; a little water also leaves by evaporation.",
          feedback: [
            "",
            "Snow falling on the glacier is coming in, so it is an input, not an output. The output is what leaves, such as meltwater from the snout.",
            "The ice is what the glacier holds, so it is the store. An output is something that leaves the system, such as meltwater.",
            "An avalanche brings snow and ice onto the glacier from the slopes above, so it is an input. Meltwater leaving the snout is the output."
          ] },
        { kind: "numeric", q: "Glacier ice may take as long as how many years to form from snow?", answer: 20, tolerance: 0, units: "years", check: "GLACIER_ICE_YEARS", why: "The deck says glacier ice may take as long as 20 years to form, as the weight of new snow squeezes all the air out of the layers beneath.",
          misconceptions: [
            { answer: 2, says: "Two winters of snow would still be light and full of air. The deck says glacier ice may take as long as 20 years to form.", check: "GLACIER_ICE_YEARS/10" },
            { answer: 200, says: "A glacier can be thousands of years old, but the snow at its surface turns to ice much sooner than that: as long as 20 years, says the deck.", check: "GLACIER_ICE_YEARS*10" },
            { answer: 6, says: "Six is the number of stages in the deck's sequence, not the number of years. Glacier ice may take as long as 20 years to form.", check: "ICE_FORMATION_STEPS" }
          ] }
      ],
      modules: [
        {
          title: "From snowflake to glacier ice",
          task: {
            kind: "order",
            q: "Put these stages in the correct order to explain how glacier ice is formed.",
            items: [
              "Each year snow falls and makes a new, separate layer",
              "Fresh snow lies at the surface, and the deeper you dig, the older the snow",
              "The weight of each new snowfall presses on the layers beneath",
              "As the air is forced out, the snow becomes more and more like ice",
              "Hard, packed snow called névé forms",
              "When all the air has been forced out by compaction, glacier ice has formed"
            ]
          },
          contexts: [
            { label: "The Alps", q: "High in the Alps, snow falls every winter and never fully melts. Put these stages in the correct order to explain how that snow becomes glacier ice." },
            { label: "Antarctica", q: "On the Antarctic ice sheet, snow has been falling for thousands of years. Put these stages in the correct order to explain how each year's snow becomes glacier ice." },
            { label: "The Ice Age", q: "Imagine the first snows of the Ice Age settling on the mountains of Scotland. Put these stages in the correct order to explain how they became glacier ice." }
          ],
          levels: {
            support: {
              steps: [
                "Start with the snow arriving: a new layer each year. Then say where the new and old snow are.",
                "Next comes the cause of the change: the weight of new snow pressing down.",
                "Then the effect: air is forced out and the snow becomes more like ice.",
                "Finish with the two names: névé first, glacier ice last, when all the air has gone."
              ],
              example: {
                q: "Put in order: the clay is fired in a kiln and becomes hard; soft clay is shaped into a pot; the pot is left to dry.",
                steps: ["First the material arrives and is shaped: soft clay into a pot.", "Then the slow change: drying.", "Last the final product: fired, hard pottery."],
                answer: "Soft clay is shaped into a pot; the pot is left to dry; the clay is fired and becomes hard."
              }
            },
            core: { hint: "Arrive, pile up, squeeze, lose air, névé, ice. The two named materials come last, in that order." },
            stretch: { extend: "Explain why glacier ice can only form in places where some of each winter's snow survives the summer." }
          },
          explain: "Say, in one sentence, what does the squeezing that turns snow into ice.",
          why: "Snow falls in yearly layers, fresh on top and old below. The weight of new snow compresses the layers beneath, forcing out air so the snow becomes more like ice. Hard, packed snow is névé; when all the air has gone, it is glacier ice, which may take as long as 20 years."
        },
        {
          title: "Parts of the glacier system",
          task: {
            kind: "match",
            q: "Match each part of the glacier system to its example.",
            pairs: [
              ["Input", "Snow falling on the top of the glacier"],
              ["Store", "The ice held in the glacier"],
              ["Flow", "The glacier moving slowly downhill under gravity"],
              ["Output", "Meltwater leaving the snout"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Input means coming in. What arrives at the glacier from outside? Snow.",
                "Store means held. What does the glacier keep? Ice.",
                "Flow means moving through. What moves? The glacier itself, creeping downhill.",
                "Output means leaving. What leaves the glacier? Meltwater."
              ],
              example: {
                q: "Match the parts of a bath system: input, store, flow, output. Choices: water running out of the plughole; water moving across the bath; water from the tap; the water held in the bath.",
                steps: ["Tap = in, so input.", "Water held in the bath = store.", "Water moving across the bath = flow.", "Plughole = out, so output."],
                answer: "Input: water from the tap. Store: the water held in the bath. Flow: water moving across the bath. Output: water running out of the plughole."
              }
            },
            core: { hint: "Think of the bath: tap, bath water, water moving, plughole. Which glacier part plays each role?" },
            stretch: { extend: "Explain what would happen to the store if the input increased for ten years while the output stayed the same." }
          },
          explain: "Say, in one sentence, why geographers call a glacier a system.",
          why: "Snow is the input because it arrives from outside. Ice is the store because the glacier holds it. The glacier moving downhill is the flow. Meltwater leaving the snout is the output, with a little evaporation."
        },
        {
          title: "Reading a glacier budget",
          task: {
            kind: "numeric",
            q: "In one year, a glacier gains the equivalent of 8 metres of ice in its zone of accumulation and loses 11 metres of ice in its zone of ablation. How many metres more did it lose than it gained?",
            answer: 3, tolerance: 0, units: "m", check: "11-8",
            misconceptions: [
              { answer: 19, says: "You added the two figures. The question asks how much more was lost than gained, so subtract: 11 − 8 = 3 metres.", check: "11+8" },
              { answer: 8, says: "8 metres is the accumulation, what the glacier gained. Take it away from the 11 metres lost: 11 − 8 = 3 metres more lost.", check: "8" },
              { answer: 11, says: "11 metres is the ablation, what the glacier lost. The question asks how much MORE it lost than it gained, so subtract the 8 gained: 3 metres.", check: "11" }
            ]
          },
          contexts: [
            { label: "Alpine glacier", q: "A glacier in the Alps gains the equivalent of 8 metres of ice from winter snow and loses 11 metres by summer melting. How many metres more did it lose than it gained?", check: "11-8" },
            { label: "Himalayan glacier", q: "A glacier in the Himalayas has a budget of 8 metres of accumulation and 11 metres of ablation in one year. How many metres more did it lose than it gained?", check: "11-8" },
            { label: "Greenland", q: "At one spot on the Greenland ice sheet, 8 metres of ice were added in a year and 11 metres were lost. How many metres more were lost than added?", check: "11-8" }
          ],
          levels: {
            support: {
              steps: [
                "Accumulation is what is added: 8 metres.",
                "Ablation is what is lost: 11 metres.",
                "Lost more than gained means find the difference: take the smaller from the larger.",
                "11 − 8 = 3. Then decide: is this glacier advancing or retreating?"
              ],
              example: {
                q: "A glacier gains 6 metres of ice in winter and loses 10 metres in summer. How many metres more did it lose than it gained, and is it advancing or retreating?",
                steps: ["Gained 6, lost 10.", "Difference: 10 − 6 = 4 metres.", "Ablation is greater than accumulation, so it is retreating."],
                answer: "4 metres more lost than gained; the glacier is retreating.",
                checks: [{ expr: "10-6", value: 4, tol: 0 }]
              }
            },
            core: { hint: "Gained 8, lost 11. The difference between them is what the question wants." },
            stretch: { extend: "Explain what this result tells you about the glacier's snout over the next few years, using the word retreat." }
          },
          explain: "Say, in one sentence, whether this glacier is advancing or retreating, and why.",
          why: "The glacier lost 11 metres and gained 8, so it lost 11 − 8 = 3 metres more than it gained. Ablation is greater than accumulation, so the glacier is shrinking: a retreat."
        }
      ]
    },

    /* ───────────── 3 · what ice does to the landscape ───────────── */
    {
      key: "ice-at-work", n: 3, title: "What ice does to the landscape",
      lead: "The three jobs a glacier does, how freeze-thaw weathering loosens rock for it, how plucking and abrasion carve the ground, and how a V-shaped valley becomes a U-shaped valley.",
      covers: [5],
      pretext: {
        words: [
          { word: "erosion", means: "the wearing away of the land", sentence: "Erosion by ice carved the deep valleys of Scotland." },
          { word: "weathering", means: "rock breaking up where it stands, because of the weather", sentence: "Weathering loosens rock before the glacier carries it away." },
          { word: "freeze-thaw", means: "water in a crack freezing, expanding and breaking the rock", sentence: "Freeze-thaw weathering leaves sharp, jagged mountain tops." },
          { word: "plucking", means: "a glacier tearing blocks of rock away as it moves", sentence: "Plucking makes the back wall of a corrie steep." },
          { word: "abrasion", means: "rocks frozen into the glacier scraping the ground like sandpaper", sentence: "Abrasion leaves long scratches on the valley floor." },
          { word: "U-shaped valley", means: "a valley with a wide, flat floor and steep sides, carved by a glacier", sentence: "After the ice melted, a U-shaped valley was left behind." }
        ],
        passage: [
          "A glacier does three jobs.",
          "It picks up rock, which is erosion.",
          "It carries the rock away, which is transport.",
          "It drops the rock, which is deposition.",
          "A glacier is like a huge bulldozer pushing through the land.",
          "Weathering breaks rock while it is still in place.",
          "In freeze-thaw weathering, water fills cracks in the rock.",
          "The water freezes and expands, and in time the rock breaks apart.",
          "Plucking is when a glacier tears blocks of rock away as it moves.",
          "Abrasion is when rocks frozen into the bottom of the glacier scrape the ground.",
          "Before glaciation, a valley is V-shaped, with rounded hills.",
          "After glaciation, the valley is U-shaped, with steep sides and a flat floor."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "بَري الأرض وزوالها شيئًا فشيئًا (erosion)",
            "تفتّت الصخر في موضعه بسبب الطقس (weathering)",
            "تجمّد الماء في شقّ فيتمدّد فيكسر الصخر (freeze-thaw)",
            "انتزاع النهر الجليدي كتل الصخر وهو يتحرّك (plucking)",
            "صخور متجمّدة في النهر الجليدي تحكّ الأرض كورق الصنفرة (abrasion)",
            "وادٍ قاعه عريض مستوٍ وجانباه شديدا الانحدار، حفره نهر جليدي (U-shaped valley)"
          ],
          "passage": [
            "للنهر الجليدي ثلاثة أعمال.",
            "فهو يرفع الصخر، وهذه هي التعرية (erosion).",
            "وهو يحمل الصخر بعيدًا، وهذا هو النقل.",
            "وهو يُسقط الصخر، وهذا هو الترسيب.",
            "والنهر الجليدي كجرّافة ضخمة تدفع في الأرض.",
            "والتجوية (weathering) تفتّت الصخر وهو في موضعه.",
            "وفي تجوية التجمّد والذوبان (freeze-thaw) يملأ الماء شقوق الصخر.",
            "فيتجمّد الماء ويتمدّد، فينكسر الصخر بعد حين.",
            "والاقتلاع (plucking) هو أن ينتزع النهر الجليدي كتل الصخر وهو يتحرّك.",
            "والبَري (abrasion) هو أن تحكّ الصخور المتجمّدة في قاع النهر الجليدي الأرضَ.",
            "وقبل التجلّد يكون الوادي على شكل حرف V، وتلاله مستديرة.",
            "وبعد التجلّد يكون الوادي على شكل حرف U، جانباه شديدا الانحدار وقاعه مستوٍ."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "ścieranie i niszczenie lądu (erosion)",
            "rozpad skały na miejscu, pod wpływem pogody (weathering)",
            "woda w szczelinie zamarza, rozszerza się i rozsadza skałę (freeze-thaw)",
            "lodowiec odrywa bloki skalne, kiedy się przesuwa (plucking)",
            "skały wmarznięte w lodowiec szorują po podłożu jak papier ścierny (abrasion)",
            "dolina o szerokim, płaskim dnie i stromych zboczach, wyrzeźbiona przez lodowiec (U-shaped valley)"
          ],
          "passage": [
            "Lodowiec wykonuje trzy prace.",
            "Zabiera skałę, a to jest erozja (erosion).",
            "Przenosi skałę dalej, a to jest transport.",
            "Zostawia skałę, a to jest akumulacja materiału (deposition).",
            "Lodowiec jest jak ogromny spychacz, który przepycha się przez teren.",
            "Wietrzenie (weathering) rozbija skałę, kiedy ta jest jeszcze na swoim miejscu.",
            "W wietrzeniu mrozowym (freeze-thaw) woda wypełnia szczeliny w skale.",
            "Woda zamarza i rozszerza się, a z czasem skała pęka.",
            "Odrywanie (plucking) to sytuacja, w której lodowiec odrywa bloki skalne, kiedy się przesuwa.",
            "Abrazja (abrasion) to sytuacja, w której skały wmarznięte w spód lodowca szorują po podłożu.",
            "Przed zlodowaceniem dolina ma kształt litery V, a wzgórza są zaokrąglone.",
            "Po zlodowaceniu dolina ma kształt litery U, ze stromymi zboczami i płaskim dnem."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o desgaste do terreno (erosion, erosão)",
            "rocha que se desfaz no próprio lugar, por causa do tempo (weathering, meteorização/intemperismo)",
            "água numa fenda que congela, se expande e parte a rocha (freeze-thaw, gelo-degelo)",
            "um glaciar/geleira a arrancar blocos de rocha enquanto se move (plucking)",
            "rochas presas no gelo a raspar o solo como lixa (abrasion, abrasão)",
            "um vale com fundo largo e plano e encostas íngremes, escavado por um glaciar/geleira (U-shaped valley, vale em U)"
          ],
          "passage": [
            "Um glaciar/geleira faz três coisas.",
            "Levanta rocha, e isso é erosão (erosion).",
            "Transporta a rocha, e isso é transporte.",
            "Deixa cair a rocha, e isso é deposição.",
            "Um glaciar/geleira é como uma enorme escavadora/escavadeira a abrir caminho pelo terreno.",
            "A meteorização/intemperismo (weathering) desfaz a rocha enquanto ela ainda está no lugar.",
            "Na meteorização por gelo-degelo (freeze-thaw), a água enche as fendas da rocha.",
            "A água congela e expande-se, e com o tempo a rocha parte-se.",
            "O plucking é quando um glaciar/geleira arranca blocos de rocha enquanto se move.",
            "A abrasão (abrasion) é quando as rochas presas no fundo do glaciar/geleira raspam o solo.",
            "Antes da glaciação, um vale tem a forma de V, com colinas arredondadas.",
            "Depois da glaciação, o vale tem a forma de U, com encostas íngremes e fundo plano."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "duugmidda dhulka",
            "dhagaxa oo meeshiisa ku burburo, hawada sababtu tahay",
            "biyo dildillaac ku jira oo barafooba, fida oo dhagaxa jebiya",
            "glacier oo dhagaxyo xoqa oo la tagaya markuu socdo",
            "dhagaxyo barafka ku barafoobay oo dhulka xoqaya sidii warqad-xoqid",
            "dooxo leh salka ballaaran oo siman iyo dhinacyo kacsan, oo glacier qoday"
          ],
          "passage": [
            "Glacier wuxuu saddex shaqo qabtaa.",
            "Dhagax wuu qaadaa, taasina waa nabaad-guur (erosion).",
            "Dhagaxa wuu la tagaa, taasina waa gaadiidka.",
            "Dhagaxa wuu dejiyaa, taasina waa dejin (deposition).",
            "Glacier wuxuu la mid yahay baaboor dhul-qodis weyn oo dhulka dhex riixaya.",
            "Weathering waxay dhagaxa burburisaa isagoo weli meeshiisa jooga.",
            "Weathering-ka freeze-thaw, biyo waxay buuxiyaan dildillaacyada dhagaxa.",
            "Biyuhu way barafoobaan oo way fidaan, muddo ka dibna dhagaxu wuu kala jabaa.",
            "Plucking waa marka glacier uu dhagaxyo xoqo oo la tago intii uu socdo.",
            "Abrasion waa marka dhagaxyada hoosta glacier-ka ku barafoobay ay dhulka xoqaan.",
            "Glaciation-ka ka hor, dooxadu waa V-shaped, oo kuro wareegsan leh.",
            "Glaciation-ka ka dib, dooxadu waa U-shaped, oo leh dhinacyo kacsan iyo sal siman."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "зношування землі (erosion)",
            "руйнування породи на місці через погоду (weathering)",
            "вода в тріщині замерзає, розширюється і розриває породу (freeze-thaw)",
            "льодовик відриває блоки породи, коли рухається (plucking)",
            "каміння, вмерзле в льодовик, шкрябає землю, наче шліфувальний папір (abrasion)",
            "долина з широким плоским дном і крутими схилами, вирізана льодовиком (U-shaped valley)"
          ],
          "passage": [
            "Льодовик виконує три роботи.",
            "Він підбирає породу — це ерозія (erosion).",
            "Він переносить породу — це транспорт.",
            "Він скидає породу — це відкладання.",
            "Льодовик — наче величезний бульдозер, що проштовхується крізь землю.",
            "Вивітрювання (weathering) руйнує породу, коли вона ще на місці.",
            "У морозному вивітрюванні (freeze-thaw) вода заповнює тріщини в породі.",
            "Вода замерзає і розширюється, і з часом порода розривається.",
            "Відривання (plucking) — це коли льодовик відриває блоки породи, рухаючись.",
            "Абразія (abrasion) — це коли каміння, вмерзле в дно льодовика, шкрябає землю.",
            "До зледеніння долина має V-подібну форму, з округлими пагорбами.",
            "Після зледеніння долина U-подібна, з крутими схилами і плоским дном."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "زمین کا گھستے گھستے ختم ہونا (erosion)",
            "چٹان کا اپنی جگہ پر ہی موسم کے اثر سے ٹوٹنا (weathering)",
            "دراز میں پانی جم کر پھیلتا ہے اور چٹان توڑ دیتا ہے (freeze-thaw)",
            "glacier چلتے ہوئے چٹان کے ٹکڑے نوچ کر اکھاڑ لے (plucking)",
            "glacier میں جمی ہوئی چٹانیں زمین کو ریگ مال کی طرح رگڑتی ہیں (abrasion)",
            "وہ وادی جس کا فرش چوڑا اور ہموار اور کنارے کھڑے ہوں، جو glacier نے تراشی ہو (U-shaped valley)"
          ],
          "passage": [
            "glacier تین کام کرتا ہے۔",
            "یہ چٹان اٹھاتا ہے، جو erosion ہے۔",
            "یہ چٹان کو دور لے جاتا ہے، جو transport ہے۔",
            "یہ چٹان کو گرا دیتا ہے، جو deposition ہے۔",
            "glacier ایک بہت بڑے بلڈوزر کی طرح زمین میں سے گزرتا ہے۔",
            "weathering چٹان کو اسی کی جگہ پر توڑتا ہے۔",
            "freeze-thaw weathering میں پانی چٹان کی درازوں کو بھر دیتا ہے۔",
            "پانی جم کر پھیلتا ہے، اور وقت کے ساتھ چٹان ٹوٹ جاتی ہے۔",
            "plucking یہ ہے کہ glacier چلتے ہوئے چٹان کے ٹکڑے نوچ کر اکھاڑ لیتا ہے۔",
            "abrasion یہ ہے کہ glacier کی تہہ میں جمی ہوئی چٹانیں زمین کو رگڑتی ہیں۔",
            "glaciation سے پہلے وادی V کی شکل کی ہوتی ہے، اور پہاڑیاں گول۔",
            "glaciation کے بعد وادی U کی شکل کی ہوتی ہے، کھڑے کناروں اور ہموار فرش کے ساتھ۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Three jobs: erode, transport, deposit",
          paragraphs: [
            "A glacier changes the landscape in three ways, and you need all three words. It erodes: it picks up rock from the ground it moves over. It transports: it carries that rock along, frozen into the ice or riding on top of it. It deposits: it drops the rock when the ice melts. Erosion is the wearing away of the land, and deposition is the opposite, the laying down of material.",
            "The deck's picture for this is a bulldozer. A bulldozer scrapes up earth with its blade, pushes it along, and dumps it in a heap somewhere else. A glacier does exactly the same with rock, only far more slowly and on a far bigger scale, over hundreds or thousands of years.",
            "Weathering is different from erosion. Weathering is rock breaking up where it stands, because it is exposed to the weather: to frost, rain, heat and cold. Nothing carries the pieces away. Weathering works first, loosening the rock; the glacier then erodes and transports the loosened pieces."
          ],
          tip: "Erode, transport, deposit: pick up, carry, drop. Weathering is none of these; it breaks the rock in place, ready for the glacier."
        },
        {
          heading: "Freeze-thaw weathering",
          paragraphs: [
            "Freeze-thaw weathering is the kind of weathering that matters most in cold mountains. During the day, water from rain or melting snow fills the cracks in a rock face. At night, the temperature drops below freezing and the water turns to ice. Ice takes up more room than water, so as it freezes it expands and pushes against the sides of the crack.",
            "In the morning the ice thaws, the water sinks a little deeper, and the next night it freezes again. Each freeze widens the crack a little more. After many cycles of freezing and thawing, the rock breaks apart, and pieces fall away. On a mountain above a glacier, this frost action is what makes the peaks sharp and jagged. The broken pieces fall onto the glacier or into the hollow where it forms, and become part of the load the ice carries."
          ],
          tip: "Water in, freeze and expand, thaw, repeat, break. The word to use in an answer is expands."
        },
        {
          heading: "Plucking and abrasion",
          paragraphs: [
            "Glaciers erode in two main ways. Plucking is the tearing away of blocks of rock as the glacier moves. Meltwater at the bottom of the glacier seeps into cracks in the rock beneath and freezes, so the rock is frozen onto the base of the ice. As the glacier moves on, it pulls, or plucks, the block of rock out of the ground and carries it away. Plucking leaves a rough, steep, jagged surface behind.",
            "Abrasion is the scraping that follows. The rocks that have been plucked are frozen into the base of the glacier, and as the ice slides forward they scrape across the ground underneath like sandpaper on wood. Abrasion wears the ground smooth and leaves long scratches, called striations, in the direction the ice was moving.",
            "The two processes work together. Plucking gives the glacier its tools; abrasion uses them. Freeze-thaw weathering on the slopes above keeps adding sharp new rock to the load."
          ],
          tip: "Plucking tears; abrasion scrapes. If a rock surface is rough and broken it was plucked; if it is smooth and scratched it was abraded."
        },
        {
          heading: "Before, during and after glaciation",
          paragraphs: [
            "Before glaciation, a mountain valley is carved by a river. It is V-shaped, with a narrow valley floor and very steep sides, and the hills around it are rounded. During glaciation, a glacier fills the valley, and plucking, abrasion and freeze-thaw weathering begin to change the shape of the landscape. The ice is far bigger and heavier than a river, so it widens and deepens the valley rather than cutting a narrow slot.",
            "After glaciation, when the ice has melted, the valley is U-shaped: it has a wide, flat valley floor and steep valley sides. The mountains around it are steep-sided and jagged. Many valleys in Scotland, northern England and Wales have this shape, and it is the clearest sign that ice was once there."
          ],
          worked: {
            q: "Describe two differences between a V-shaped valley and a U-shaped valley. (2 marks)",
            steps: [
              "Pick the valley floor first: a V-shaped valley has a narrow floor, whereas a U-shaped valley has a wide, flat floor.",
              "Pick a second feature: how the valley was made. A V-shaped valley is carved by a river, whereas a U-shaped valley is carved by a glacier.",
              "Two differences, each stated for both valleys, earns both marks."
            ],
            answer: "A V-shaped valley has a narrow floor and very steep sides, whereas a U-shaped valley has a wide, flat floor with steep sides. A V-shaped valley is carved by a river before glaciation, whereas a U-shaped valley is carved by a glacier."
          },
          tip: "Before: V-shaped valleys and rounded hills. After: U-shaped valleys and steep-sided mountains. The three processes in between are plucking, abrasion and freeze-thaw weathering."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is plucking?", options: ["A glacier tearing blocks of rock away from the ground as it moves", "Rocks frozen into the glacier scraping the ground underneath", "Water freezing in a crack and breaking the rock apart", "A glacier dropping the rock it has been carrying"], answer: 0, why: "Plucking is the tearing away of blocks of rock as a glacier moves: meltwater freezes the rock onto the base of the ice, and the moving glacier pulls it out.",
          feedback: [
            "",
            "Rocks frozen into the glacier scraping the ground is abrasion, the sandpaper process. Plucking is the tearing away of blocks of rock as the glacier moves.",
            "Water freezing in a crack and breaking the rock is freeze-thaw weathering, which happens on the rock face, not under the moving ice. Plucking is the glacier tearing blocks away as it moves.",
            "Dropping rock is deposition, the opposite of erosion. Plucking is an erosion process: the glacier tears blocks of rock away as it moves."
          ] },
        { kind: "gap", q: "In freeze-thaw weathering, water in a crack freezes and ___, forcing the rock apart.", answer: "expands", options: ["expands", "shrinks", "evaporates"], why: "Ice takes up more room than the water it came from, so as the water freezes it expands and pushes the sides of the crack apart.",
          feedback: {
            "shrinks": "Most things shrink when they get cold, but water is unusual: it expands when it freezes into ice. That expansion is what pushes the crack open.",
            "evaporates": "Evaporating water turns into vapour and leaves the crack, so it could not push on the rock. Freezing water expands, and that expansion forces the rock apart."
          } },
        { kind: "mcq", q: "What shape is a valley after a glacier has moved through it?", options: ["U-shaped, with a wide, flat floor and steep sides", "V-shaped, with a narrow floor", "Round, like a bowl", "Flat, with no sides at all"], answer: 0, why: "A glacier widens and deepens the river valley it fills, leaving a U-shaped valley with a wide, flat floor and steep sides after the ice melts.",
          feedback: [
            "",
            "V-shaped, with a narrow floor, describes the valley before glaciation, carved by a river. The glacier widens and flattens the floor to make it U-shaped.",
            "A round, bowl-shaped hollow is a corrie, which forms high on a mountainside, not along a whole valley. A glaciated valley is U-shaped.",
            "A glacier deepens the valley as well as widening it, so it has steep sides. The shape is a U: wide, flat floor and steep sides."
          ] }
      ],
      modules: [
        {
          title: "Freeze-thaw, step by step",
          task: {
            kind: "order",
            q: "Put the stages of freeze-thaw weathering in the correct order.",
            items: [
              "Water fills cracks in the rock",
              "The water freezes and expands, pushing the crack wider",
              "After many freezes and thaws, the rock breaks apart",
              "Broken pieces of rock fall and can be picked up by the glacier"
            ]
          },
          levels: {
            support: {
              steps: [
                "Nothing can happen until there is water in the crack, so that is the start.",
                "The water has to freeze before it can push; that is the second stage.",
                "Pushing many times is what finally breaks the rock.",
                "Only broken rock can fall, so falling comes last."
              ],
              example: {
                q: "Put in order: the bottle cracks; the water inside freezes and expands; a full bottle of water is left outside on a frosty night.",
                steps: ["The bottle has to be outside first.", "Then the water freezes and expands.", "The crack is the result."],
                answer: "A full bottle of water is left outside on a frosty night; the water inside freezes and expands; the bottle cracks."
              }
            },
            core: { hint: "Water in, freeze and expand, break, fall. Cause before effect each time." },
            stretch: { extend: "Explain why freeze-thaw weathering is faster on a mountain where the temperature crosses freezing point every day than in a place that stays frozen all winter." }
          },
          explain: "Say, in one sentence, why water freezing in a crack can break solid rock.",
          why: "Water fills the crack, freezes and expands, and the expansion pushes the crack wider. Repeated freezing and thawing weakens the rock until it breaks apart, and the pieces fall where the glacier can pick them up."
        },
        {
          title: "Name the process",
          task: {
            kind: "match",
            q: "Match each process to its description.",
            pairs: [
              ["Freeze-thaw weathering", "Water in a crack freezes, expands and breaks the rock apart"],
              ["Plucking", "The moving glacier tears blocks of rock away from the ground"],
              ["Abrasion", "Rocks frozen into the base of the glacier scrape the ground like sandpaper"],
              ["Deposition", "The glacier drops the rock it has been carrying"]
            ]
          },
          levels: {
            support: {
              steps: [
                "One process is weathering, not erosion: it happens in a crack and involves ice forming. Match that first.",
                "Of the erosion processes, one tears and one scrapes. Tearing is plucking; scraping is abrasion.",
                "The one left is the opposite of erosion: dropping rock.",
                "Check that each left-hand name appears once."
              ],
              example: {
                q: "Match: transport, erosion. Choices: picking rock up from the ground; carrying rock along inside or on top of the ice.",
                steps: ["Erosion is picking up or wearing away.", "Transport is carrying."],
                answer: "Transport: carrying rock along inside or on top of the ice. Erosion: picking rock up from the ground."
              }
            },
            core: { hint: "Tear, scrape, freeze, drop. Which name goes with each verb?" },
            stretch: { extend: "Explain how plucking makes abrasion possible." }
          },
          explain: "Say, in one sentence, the difference between plucking and abrasion.",
          why: "Freeze-thaw weathering breaks rock in place by freezing water. Plucking is the glacier tearing blocks away as it moves. Abrasion is those rocks, frozen into the base of the ice, scraping the ground. Deposition is the glacier dropping its load."
        },
        {
          title: "Which process left this mark?",
          task: {
            kind: "mcq",
            q: "A valley floor has long, straight scratches in the bare rock where a glacier once flowed. Which process made them?",
            options: ["Abrasion", "Plucking", "Freeze-thaw weathering", "Deposition"],
            answer: 0,
            feedback: [
              "",
              "Plucking tears whole blocks out of the ground and leaves a rough, broken surface, not fine scratches. Scratches are made by rocks dragged across the floor: abrasion.",
              "Freeze-thaw weathering splits rock on a cold rock face; it does not drag anything across a surface. Scratches along the valley floor are made by abrasion.",
              "Deposition drops material on the floor; it does not scratch it. The scratches were cut by rocks frozen into the moving ice: abrasion."
            ]
          },
          contexts: [
            { label: "Scratched boulder", q: "A large boulder in a glaciated valley has deep parallel scratches all running the same way across its top. Which process made them?" },
            { label: "Smooth rock, Scotland", q: "On a Scottish mountainside, a rock surface has been worn smooth and marked with long straight grooves. Which glacial process did this?" },
            { label: "Alpine valley", q: "Where a glacier in the Alps has recently retreated, the newly exposed rock is polished and scored with fine lines. Which process did this?" }
          ],
          explain: "Say, in one sentence, what the scratches tell you about the direction the ice moved.",
          levels: {
            support: {
              steps: [
                "Ask: is the rock broken and torn, or scraped and scratched? Scratched.",
                "Scratches are made by something hard being dragged across the surface.",
                "In a glacier, the hard things being dragged are rocks frozen into the base of the ice.",
                "Rocks in the ice scraping the ground is abrasion."
              ],
              example: {
                q: "A cliff face above a glacier has a rough, jagged surface where a block of rock has clearly been torn away, leaving a fresh scar. Which process did this?",
                steps: ["Torn away, not scraped.", "Tearing blocks away is plucking."],
                answer: "Plucking: the moving ice froze onto the block and tore it away, leaving a rough scar."
              }
            },
            core: { hint: "Scratches mean something was dragged across the rock. What does a glacier drag across the ground?" },
            stretch: { extend: "Explain how a geographer could use the direction of the scratches to work out which way the glacier flowed." }
          },
          why: "Long straight scratches on a rock floor are made by rocks frozen into the base of the moving ice scraping across it, like sandpaper. That is abrasion. The scratches run in the direction the ice moved."
        }
      ]
    },

    /* ───────────── 4 · landforms of glacial erosion ───────────── */
    {
      key: "erosion-landforms", n: 4, title: "Corries, arêtes and pyramidal peaks",
      lead: "The landforms a glacier carves high in the mountains: how a corrie forms step by step, how a tarn fills it, and how corries side by side make arêtes and pyramidal peaks.",
      covers: [6, 8],
      pretext: {
        words: [
          { word: "corrie", means: "a rounded, armchair-shaped hollow with a steep back wall, on a mountainside", sentence: "A glacier once filled the corrie on Ben Lui." },
          { word: "arête", means: "a narrow, knife-edged ridge between two corries", sentence: "Walkers follow the arête with a steep drop on each side." },
          { word: "pyramidal peak", means: "a pointed mountain top left where three or more corries meet", sentence: "The Matterhorn is a famous pyramidal peak." },
          { word: "tarn", means: "a lake in the bottom of a corrie", sentence: "A cold, round tarn fills the floor of the corrie." },
          { word: "back wall", means: "the steep cliff at the back of a corrie", sentence: "Plucking makes the back wall steeper and steeper." },
          { word: "rotate", means: "to turn in a circle", sentence: "The ice in a corrie rotates as it moves, scooping out the floor." }
        ],
        passage: [
          "High in the mountains, glaciers carve special landforms.",
          "A corrie is a rounded hollow on the side of a mountain, shaped like an armchair.",
          "It has a steep back wall.",
          "A corrie begins where snow gathers in a hollow and is squeezed into ice.",
          "The ice becomes heavy and starts to move downhill.",
          "Plucking makes the back wall steeper.",
          "The ice rotates and scoops out the floor of the hollow.",
          "When the ice melts, water may fill the floor to make a lake called a tarn.",
          "When two corries form back to back, a knife-edged ridge is left between them.",
          "This ridge is an arête.",
          "When three or more corries cut back into one mountain, a pointed pyramidal peak is left.",
          "The Matterhorn in the Alps is a pyramidal peak.",
          "Ben Lui in Scotland has a corrie."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "حفرة مستديرة على شكل كرسيّ ذي مسندين، لها جدار خلفي شديد الانحدار، على جانب الجبل (corrie)",
            "حرف ضيّق حادّ كحدّ السكّين بين حوضين جليديّين (arête)",
            "قمّة جبل مدبّبة تبقى حيث تلتقي ثلاثة أحواض جليدية أو أكثر (pyramidal peak)",
            "بحيرة في قاع الحوض الجليدي (tarn)",
            "الجُرف شديد الانحدار في مؤخّرة الحوض الجليدي (back wall)",
            "أن يدور في دائرة (rotate)"
          ],
          "passage": [
            "عاليًا في الجبال تحفر الأنهار الجليدية أشكالًا أرضية خاصّة.",
            "والحوض الجليدي (corrie) حفرة مستديرة على جانب الجبل، شكلها كشكل كرسيّ ذي مسندين.",
            "وله جدار خلفي شديد الانحدار.",
            "ويبدأ الحوض الجليدي حيث يتجمّع الثلج في حفرة فيُضغَط حتى يصير جليدًا.",
            "فيثقل الجليد ويبدأ بالتحرّك نزولًا.",
            "والاقتلاع يجعل الجدار الخلفي أشدّ انحدارًا.",
            "والجليد يدور ويجرف قاع الحفرة.",
            "وعندما يذوب الجليد قد يملأ الماء القاع فيصنع بحيرة تُسمّى تارن (tarn).",
            "وعندما يتكوّن حوضان جليديّان ظهرًا لظهر يبقى بينهما حرف حادّ كحدّ السكّين.",
            "وهذا الحرف يُسمّى أريت (arête).",
            "وعندما تقطع ثلاثة أحواض جليدية أو أكثر في جبل واحد تبقى قمّة هرمية مدبّبة.",
            "وجبل ماترهورن (Matterhorn) في الألب قمّة هرمية.",
            "وفي جبل بن لوي (Ben Lui) في اسكتلندا حوض جليدي."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "zaokrąglone wgłębienie w kształcie fotela, ze stromą ścianą z tyłu, na zboczu góry (corrie)",
            "wąska, ostra jak nóż grań między dwoma karami (arête)",
            "ostry szczyt góry, który zostaje tam, gdzie zbiegają się trzy albo więcej karów (pyramidal peak)",
            "jeziorko na dnie karu (tarn)",
            "strome urwisko z tyłu karu (back wall)",
            "obracać się w kółko"
          ],
          "passage": [
            "Wysoko w górach lodowce rzeźbią szczególne formy terenu.",
            "Kar (corrie) to zaokrąglone wgłębienie na zboczu góry, w kształcie fotela.",
            "Ma stromą ścianę z tyłu.",
            "Kar zaczyna się tam, gdzie śnieg zbiera się w zagłębieniu i jest ściskany w lód.",
            "Lód staje się ciężki i zaczyna przesuwać się w dół.",
            "Odrywanie (plucking) sprawia, że tylna ściana staje się bardziej stroma.",
            "Lód obraca się i wygarnia dno zagłębienia.",
            "Kiedy lód się stopi, woda może wypełnić dno i utworzyć jeziorko zwane tarn.",
            "Kiedy dwa kary powstaną tyłem do siebie, zostaje między nimi ostra grań.",
            "Ta grań to arête.",
            "Kiedy trzy albo więcej karów wcina się w jedną górę, zostaje ostry szczyt piramidalny (pyramidal peak).",
            "Matterhorn w Alpach to szczyt piramidalny.",
            "Ben Lui w Szkocji ma kar."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma depressão arredondada em forma de poltrona, com uma parede traseira íngreme, na encosta de uma montanha (corrie, circo glaciar)",
            "uma crista estreita e afiada entre dois circos glaciares (arête)",
            "um cume pontiagudo que fica onde três ou mais circos glaciares se encontram (pyramidal peak, pico piramidal)",
            "um lago no fundo de um circo glaciar (tarn)",
            "a falésia íngreme no fundo de um circo glaciar (back wall, parede traseira)",
            "girar em círculo (rotate, rodar/girar)"
          ],
          "passage": [
            "Lá no alto das montanhas, os glaciares/geleiras escavam formas de relevo especiais.",
            "Um corrie (circo glaciar) é uma depressão arredondada na encosta de uma montanha, com a forma de uma poltrona.",
            "Tem uma parede traseira íngreme.",
            "Um corrie começa onde a neve se junta numa depressão e é apertada até se tornar gelo.",
            "O gelo fica pesado e começa a descer a encosta.",
            "O plucking torna a parede traseira mais íngreme.",
            "O gelo roda/gira e escava o fundo da depressão.",
            "Quando o gelo derrete, a água pode encher o fundo e formar um lago chamado tarn.",
            "Quando se formam dois corries costas com costas, fica entre eles uma crista afiada.",
            "Essa crista é um arête.",
            "Quando três ou mais corries cortam para dentro da mesma montanha, fica um pico piramidal pontiagudo.",
            "O Matterhorn, nos Alpes, é um pico piramidal.",
            "O Ben Lui, na Escócia, tem um corrie."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "god wareegsan oo u eg kursi gacmo leh oo leh jar toosan gadaal, oo buur dhinac ku yaal",
            "kor-dheer cidhiidhi ah oo sida mindi afeysan oo u dhexeeya laba corrie",
            "buur-dhaladh af leh oo ka tagay meesha saddex corrie ama ka badan ay ku kulmaan",
            "haro ku jirta salka corrie",
            "jarka toosan ee gadaasha corrie",
            "inuu goobo ku wareego"
          ],
          "passage": [
            "Buuraha meelaha sare, glaciers waxay qodaan qaabab dhul gaar ah.",
            "Corrie waa god wareegsan oo buur dhinac ku yaal, oo u eg kursi gacmo leh.",
            "Wuxuu leeyahay jar toosan gadaal.",
            "Corrie wuxuu ku bilaabmaa meesha barafku god ku urursan yahay oo baraf adag loo riixay.",
            "Barafku wuu culus noqdaa oo wuxuu bilaabaa inuu buurta hoos u socdo.",
            "Plucking waxay jarka gadaasha ka dhigtaa mid ka sii toosan.",
            "Barafku wuu wareegaa oo wuxuu salka godka ka xaaqaa.",
            "Marka barafku dhalaalo, biyo waxay salka buuxin karaan oo waxay samaysaa haro la yiraahdo tarn.",
            "Marka laba corrie dhabar-ka-dhabar u samaysmaan, kor-dheer cidhiidhi ah ayaa u dhexeeya.",
            "Kor-dheerahaas afeysan waa arête.",
            "Marka saddex corrie ama ka badan hal buur gadaal uga gooyaan, waxaa ka tagaa pyramidal peak af leh.",
            "Buurta Matterhorn ee silsiladda Alps waa pyramidal peak.",
            "Buurta Ben Lui ee Scotland waxay leedahay corrie."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "округла заглибина у формі крісла з крутою задньою стінкою на схилі гори (corrie)",
            "вузький, гострий як ніж хребет між двома карами (arête)",
            "загострена вершина гори, що залишається там, де сходяться три або більше карів (pyramidal peak)",
            "озеро на дні кара (tarn)",
            "крута скеля в задній частині кара (back wall)",
            "обертатися по колу (rotate)"
          ],
          "passage": [
            "Високо в горах льодовики вирізають особливі форми рельєфу.",
            "Кар (corrie) — це округла заглибина на схилі гори, формою схожа на крісло.",
            "Він має круту задню стінку.",
            "Кар починається там, де сніг збирається в заглибині і стискається в лід.",
            "Лід важчає і починає рухатися вниз схилом.",
            "Відривання робить задню стінку крутішою.",
            "Лід обертається і вигрібає дно заглибини.",
            "Коли лід тане, вода може заповнити дно й утворити карове озеро (tarn).",
            "Коли два кари утворюються спина до спини, між ними залишається гострий як ніж хребет.",
            "Цей хребет — це арет (arête).",
            "Коли три або більше карів врізаються в одну гору, залишається загострена пірамідальна вершина.",
            "Матергорн (Matterhorn) в Альпах — це пірамідальна вершина.",
            "Бен-Луї (Ben Lui) у Шотландії має кар."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "پہاڑ کی ڈھلان پر گول، آرام کرسی جیسی گہرائی جس کی پچھلی دیوار کھڑی ہو (corrie)",
            "دو corries کے درمیان چھری کی دھار جیسی تنگ پہاڑی لکیر (arête)",
            "نوکیلی پہاڑی چوٹی جو تین یا زیادہ corries کے ملنے پر بچ جاتی ہے (pyramidal peak)",
            "corrie کی تہہ میں بنی جھیل (tarn)",
            "corrie کے پیچھے کی کھڑی چٹانی دیوار (back wall)",
            "گول گھومنا"
          ],
          "passage": [
            "پہاڑوں میں بہت اوپر glaciers خاص شکلیں تراشتے ہیں۔",
            "corrie پہاڑ کی ڈھلان پر ایک گول گہرائی ہے، جس کی شکل آرام کرسی جیسی ہوتی ہے۔",
            "اس کی پچھلی دیوار کھڑی ہوتی ہے۔",
            "corrie وہاں بننا شروع ہوتا ہے جہاں برف کسی گہرائی میں جمع ہو کر دب کر سخت برف بن جاتی ہے۔",
            "برف بھاری ہو جاتی ہے اور ڈھلان پر سرکنے لگتی ہے۔",
            "plucking پچھلی دیوار کو زیادہ کھڑا کر دیتا ہے۔",
            "برف گول گھومتی ہے اور گہرائی کے فرش کو کھود کر گہرا کرتی ہے۔",
            "جب برف پگھلتی ہے تو پانی اس فرش کو بھر کر ایک جھیل بنا سکتا ہے، جسے tarn کہتے ہیں۔",
            "جب دو corries پیٹھ سے پیٹھ ملا کر بنتے ہیں تو ان کے درمیان چھری کی دھار جیسی لکیر بچ جاتی ہے۔",
            "یہی لکیر arête ہے۔",
            "جب تین یا زیادہ corries ایک ہی پہاڑ کو کاٹتے ہوئے پیچھے بڑھتے ہیں تو ایک نوکیلی pyramidal peak بچ جاتی ہے۔",
            "الپس میں Matterhorn ایک pyramidal peak ہے۔",
            "سکاٹ لینڈ میں Ben Lui پر ایک corrie ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "The corrie",
          paragraphs: [
            "Walk up a mountain in Scotland and high on its side you may find a great rounded hollow, like a giant armchair cut into the slope. It has a steep cliff at the back, the back wall, and a flatter floor, and often a small round lake sits in the bottom. This hollow is a corrie. The deck's example is Ben Lui in Scotland.",
            "A corrie is a landform of glacial erosion. It is where a mountain glacier is born. In the Ice Age, each corrie held a small glacier of its own, which spilled over the lip of the hollow and fed the much larger glacier in the valley below. When the climate warmed and the ice melted, the hollow was left behind.",
            "The lake in the bottom of a corrie is called a tarn. It fills the deepest part of the hollow, which the ice scooped out, and is held in by the rock lip at the front."
          ],
          tip: "Corrie is the Scottish word. You may also meet cwm (Welsh) and cirque (French) for the same landform."
        },
        {
          heading: "How a corrie forms",
          paragraphs: [
            "A corrie starts as a small hollow on a shady mountainside where snow gathers and does not melt in summer. As the snow piles up, the pressure of the layers above turns it into ice, just as in chapter 2. When the ice is thick and heavy enough, it starts to move downhill under gravity.",
            "Now erosion begins. Meltwater seeps into cracks in the back wall and freezes onto the ice, so as the glacier moves it plucks blocks of rock away. Plucking makes the back wall steeper and steeper. At the same time, the ice in the hollow does not slide straight downhill; it rotates, turning like the ice cream in a scoop, and the rocks frozen into its base scrape out the floor of the hollow by abrasion, making it deeper. Above the glacier, frost action, freeze-thaw weathering, keeps the mountain top sharp and jagged and drops fresh rock onto the ice.",
            "When the climate warms and the ice melts, the armchair-shaped hollow is left behind. Water may gather on its floor, held in by the rock lip at the front, and this lake is a tarn."
          ],
          worked: {
            q: "Explain how a corrie is formed. (4 marks)",
            steps: [
              "Start: snow gathers in a mountainside hollow and is compressed into ice, which begins to move downhill.",
              "Back wall: plucking tears rock from the back of the hollow and makes it steeper.",
              "Floor: the ice rotates and scoops out the floor by abrasion, deepening the hollow.",
              "End: when the ice melts, an armchair-shaped hollow is left, often with a tarn in the bottom.",
              "Four linked steps, each naming a process, earns the four marks."
            ],
            answer: "Snow gathers in a hollow on a mountainside and is compressed into ice, which starts to move downhill. Plucking tears blocks from the back of the hollow and steepens the back wall. The ice rotates as it moves and scoops out the floor by abrasion, deepening the hollow. When the ice melts, an armchair-shaped hollow with a steep back wall is left, and water may fill the floor to form a tarn."
          },
          tip: "Explain means give the processes. Use plucking for the back wall and rotation with abrasion for the floor."
        },
        {
          heading: "Arêtes and pyramidal peaks",
          paragraphs: [
            "Corries rarely form alone. Where two corries form back to back on opposite sides of a ridge, each one eats backwards into the mountain. As their back walls get steeper and closer together, the ridge between them is narrowed into a sharp, knife-edged ridge. This is an arête. Walking along one, you have a steep drop into a corrie on each side.",
            "Where three or more corries cut backwards into the same mountain from different sides, their back walls meet at the top and leave a sharp, pointed summit with several steep faces. This is a pyramidal peak. The deck's example is the Matterhorn in the Alps, whose famous pointed shape was carved by corrie glaciers on each of its sides.",
            "So the three landforms are linked. One corrie is a hollow. Two corries back to back make an arête between them. Three or more corries around one summit make a pyramidal peak."
          ],
          tip: "Count the corries: one makes a corrie, two make an arête, three or more make a pyramidal peak."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is a corrie?", options: ["An armchair-shaped hollow with a steep back wall, carved high on a mountainside", "A knife-edged ridge between two hollows", "A pointed peak where three hollows meet", "A lake on the floor of a U-shaped valley"], answer: 0, why: "A corrie is a rounded, armchair-shaped hollow with a steep back wall, carved into a mountainside by a glacier.",
          feedback: [
            "",
            "A knife-edged ridge between two hollows is an arête. The hollow itself, shaped like an armchair with a steep back wall, is the corrie.",
            "A pointed peak where three or more hollows meet is a pyramidal peak. Each of those hollows is a corrie.",
            "A corrie is high on a mountainside, not on a valley floor. The lake in the bottom of a corrie is a tarn, but the corrie is the hollow itself."
          ] },
        { kind: "numeric", q: "What is the smallest number of corries that must cut back into a mountain to leave a pyramidal peak?", answer: 3, tolerance: 0, units: "corries", check: "CORRIES_FOR_PEAK", why: "A pyramidal peak forms where three or more corries cut backwards into the same mountain, so their back walls meet in a point.",
          misconceptions: [
            { answer: 2, says: "Two corries back to back leave a ridge between them, which is an arête, not a peak. A pyramidal peak needs three or more corries.", check: "CORRIES_FOR_ARETE" },
            { answer: 4, says: "Four corries can make a pyramidal peak, but the question asks for the smallest number. Three corries are enough to leave a pointed summit.", check: "CORRIES_FOR_PEAK+1" },
            { answer: 1, says: "One corrie is just a hollow on a mountainside. For a pointed peak, back walls must meet from several sides: three or more corries.", check: "1" }
          ] },
        { kind: "gap", q: "A lake that forms in the bottom of a corrie is called a ___.", answer: "tarn", options: ["tarn", "arête", "snout"], why: "When the ice melts, water gathers on the scooped-out floor of the corrie, held in by the rock lip at the front. This lake is a tarn.",
          feedback: {
            "arête": "An arête is the knife-edged ridge between two corries, high and dry. The lake on the corrie floor is a tarn.",
            "snout": "The snout is the end of a glacier, where the ice stops and meltwater runs out. The lake left in a corrie after the ice has gone is a tarn."
          } }
      ],
      modules: [
        {
          title: "How a corrie forms",
          task: {
            kind: "order",
            q: "Put these stages in the correct order to explain how a corrie forms.",
            items: [
              "Snow gathers in a hollow on the mountainside and is pressed into ice",
              "The ice becomes heavy enough to start moving downhill",
              "Plucking tears rock from the back wall and makes it steeper",
              "The ice rotates and scoops out the floor of the hollow by abrasion",
              "When the ice melts, water gathers on the floor to form a tarn"
            ]
          },
          contexts: [
            { label: "Ben Lui", q: "Ben Lui in Scotland has a corrie on its side. Put these stages in the correct order to explain how it formed during the Ice Age." },
            { label: "An Alpine mountain", q: "A shady hollow high on a mountain in the Alps still holds a small glacier today. Put these stages in the correct order to explain how it is carving a corrie." },
            { label: "Any high mountain", q: "A geographer is annotating a diagram of a corrie. Put these stages in the correct order so that the annotations tell the story from first snow to tarn." }
          ],
          levels: {
            support: {
              steps: [
                "Nothing can happen without ice, so snow turning to ice comes first, and the ice must start moving before it can erode.",
                "Erosion comes next: the back wall first (plucking), then the floor (rotation and abrasion).",
                "The tarn can only form after the ice has melted, so it comes last.",
                "Read your order back as a story: snow, ice moves, back wall steepens, floor deepens, ice melts and a lake fills the hollow."
              ],
              example: {
                q: "Put in order: the pothole fills with rainwater; a lorry tyre keeps hitting the same weak spot; the weak spot breaks and deepens into a pothole.",
                steps: ["The repeated force comes first.", "The hollow forms as a result.", "Water filling it comes last."],
                answer: "A lorry tyre keeps hitting the same weak spot; the weak spot breaks and deepens into a pothole; the pothole fills with rainwater."
              }
            },
            core: { hint: "Make the ice, move the ice, steepen the back, deepen the floor, melt and fill." },
            stretch: { extend: "Explain why corries in the UK are usually found on the north-facing or north-east-facing sides of mountains." }
          },
          explain: "Say, in one sentence, which process steepens the back wall and which deepens the floor.",
          why: "Snow collects in a hollow and is compressed into ice, which begins to move downhill. Plucking steepens the back wall. The rotating ice scoops out the floor by abrasion. When the ice melts, water gathers on the floor and forms a tarn."
        },
        {
          title: "Four landforms of glacial erosion",
          task: {
            kind: "match",
            q: "Match each landform to its description.",
            pairs: [
              ["Corrie", "An armchair-shaped hollow with a steep back wall on a mountainside"],
              ["Arête", "A knife-edged ridge left between two corries"],
              ["Pyramidal peak", "A pointed summit left where three or more corries meet"],
              ["Tarn", "A lake in the bottom of a corrie"]
            ]
          },
          levels: {
            support: {
              steps: [
                "One of these is water, not rock. Match the lake first.",
                "One is a hollow: the armchair shape. That is the corrie.",
                "Of the two left, one is a ridge (a line) and one is a peak (a point).",
                "Count the corries in each description: two for the ridge, three or more for the peak."
              ],
              example: {
                q: "Match: U-shaped valley, striations. Choices: long scratches left on rock by abrasion; a valley with a wide, flat floor and steep sides carved by a glacier.",
                steps: ["Striations are the scratches.", "The U-shaped valley is the valley shape."],
                answer: "U-shaped valley: a valley with a wide, flat floor and steep sides carved by a glacier. Striations: long scratches left on rock by abrasion."
              }
            },
            core: { hint: "Hollow, ridge, point, lake. Which word is which?" },
            stretch: { extend: "Explain why an arête and a pyramidal peak cannot form without corries forming first." }
          },
          explain: "Say, in one sentence, how a corrie, an arête and a pyramidal peak are linked.",
          why: "A corrie is the hollow. An arête is the ridge between two corries. A pyramidal peak is the point where three or more corries meet. A tarn is the lake left in the bottom of a corrie."
        },
        {
          title: "From hollow to peak",
          task: {
            kind: "written",
            q: "Explain how corries, arêtes and pyramidal peaks are linked. Use a named example in your answer. (6 marks)",
            marks: 6,
            criteria: [
              "Describes a corrie as an armchair-shaped hollow with a steep back wall, and names the processes that form it (plucking and abrasion)",
              "Explains that an arête forms where two corries cut back to back and narrow the ridge between them",
              "Explains that a pyramidal peak forms where three or more corries cut back into the same mountain",
              "Gives a named example from the unit (the Matterhorn in the Alps, or Ben Lui in Scotland)",
              "Uses the key words corrie, arête, pyramidal peak and back wall correctly, in a clear order"
            ],
            model: "A corrie is an armchair-shaped hollow carved high on a mountainside by a small glacier. Plucking steepens its back wall and the rotating ice scoops out its floor by abrasion, so the hollow grows deeper and cuts further back into the mountain. When two corries form back to back on opposite sides of a ridge, their back walls get closer together until only a narrow, knife-edged ridge is left between them: an arête. When three or more corries cut backwards into the same mountain from different sides, their back walls meet at the top and leave a sharp, pointed summit: a pyramidal peak. The Matterhorn in the Alps is a pyramidal peak formed in this way, and Ben Lui in Scotland shows a corrie."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: say what a corrie is and name the two processes that make it (plucking at the back, abrasion on the floor).",
                "Sentence 2: two corries back to back. What happens to the ridge between them? Name it.",
                "Sentence 3: three or more corries around one summit. What is left at the top? Name it.",
                "Sentence 4: give your named example and say which landform it is.",
                "Read it back: hollow, ridge, peak, example. Each landform named and explained."
              ],
              example: {
                q: "In two sentences, explain how a tarn is linked to a corrie.",
                steps: ["Say what each one is.", "Say how one leads to the other."],
                answer: "A corrie is the armchair-shaped hollow a glacier scoops out of a mountainside. When the ice melts, water gathers on the deepened floor and is held in by the rock lip, forming a lake called a tarn."
              }
            },
            core: { hint: "Count the corries: one is a hollow, two make a ridge, three make a peak. Explain each step and finish with the Matterhorn or Ben Lui." },
            stretch: { extend: "Add a sentence predicting what will happen to an arête if the two corries on either side keep cutting backwards for thousands more years." }
          },
          explain: "Say, in one sentence, why a pyramidal peak needs at least three corries.",
          why: "A top answer moves from one landform to the next: the corrie and its processes, then two corries making an arête, then three or more making a pyramidal peak, with the Matterhorn or Ben Lui as the named example."
        }
      ]
    },

    /* ───────────── 5 · landforms of glacial deposition ───────────── */
    {
      key: "deposition-landforms", n: 5, title: "Moraines, drumlins and erratics",
      lead: "What happens to the rock a glacier carries when the ice melts: till, the five kinds of moraine and where each forms, drumlin swarms, and the boulders called erratics that show which way the ice flowed.",
      covers: [7],
      pretext: {
        words: [
          { word: "till", means: "the jumble of unsorted, angular rocks a glacier drops", sentence: "The field is full of till left by the Ice Age glacier." },
          { word: "moraine", means: "a mound or ridge of till left by a glacier", sentence: "A line of moraine marks where the glacier ended." },
          { word: "lateral", means: "at the side", sentence: "Lateral moraines run along the sides of the valley." },
          { word: "medial", means: "in the middle", sentence: "A medial moraine forms where two glaciers join." },
          { word: "drumlin", means: "a long, low hill made of till", sentence: "From the air, a drumlin looks like an upturned boat." },
          { word: "erratic", means: "a boulder that is different from the rock it sits on", sentence: "The glacier carried the erratic many kilometres before dropping it." }
        ],
        passage: [
          "A glacier carries a huge load of rock.",
          "When the ice melts, the glacier drops this load.",
          "The dropped material is called till.",
          "Till is a jumble of angular rocks of all sizes.",
          "A moraine is a mound or ridge of till.",
          "Lateral moraines form along the sides of a glacier.",
          "A medial moraine forms down the middle, where two glaciers join.",
          "A terminal moraine marks the furthest point the snout reached.",
          "Ground moraine is spread under the glacier.",
          "Drumlins are long, low hills made of till.",
          "A group of drumlins is called a swarm.",
          "An erratic is a boulder that is different from the rock it sits on.",
          "The glacier carried it there, so erratics show which way the ice flowed."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "خليط من الصخور الحادّة غير المصنّفة يُسقطه النهر الجليدي (till)",
            "رُكام أو حرف من الطين الجليدي يتركه النهر الجليدي (moraine)",
            "على الجانب (lateral)",
            "في الوسط (medial)",
            "تلّ طويل منخفض مصنوع من الطين الجليدي (drumlin)",
            "صخرة كبيرة تختلف عن الصخر الذي تستقرّ عليه (erratic)"
          ],
          "passage": [
            "يحمل النهر الجليدي حِملًا ضخمًا من الصخر.",
            "وعندما يذوب الجليد يُسقط النهر الجليدي هذا الحِمل.",
            "وتُسمّى المادّة المُسقَطة طينًا جليديًّا (till).",
            "والطين الجليدي خليط من صخور حادّة بكلّ الأحجام.",
            "والمورين (moraine) رُكام أو حرف من الطين الجليدي.",
            "والمورين الجانبي يتكوّن على جانبي النهر الجليدي.",
            "والمورين الأوسط يتكوّن في الوسط، حيث يلتقي نهران جليديّان.",
            "والمورين الطرفي يحدّد أبعد نقطة وصل إليها أنف النهر الجليدي.",
            "والمورين الأرضي ينتشر تحت النهر الجليدي.",
            "والدرملينات (drumlins) تلال طويلة منخفضة مصنوعة من الطين الجليدي.",
            "وتُسمّى مجموعة الدرملينات سِربًا.",
            "والصخرة الشاردة (erratic) صخرة كبيرة تختلف عن الصخر الذي تستقرّ عليه.",
            "وقد حملها النهر الجليدي إلى هناك، فالصخور الشاردة تبيّن الجهة التي تدفّق إليها الجليد."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "mieszanina nieposortowanych, ostrokrawędzistych skał, którą zostawia lodowiec (till)",
            "pagórek albo wał z materiału zostawionego przez lodowiec (moraine)",
            "z boku (lateral)",
            "w środku (medial)",
            "długie, niskie wzgórze zbudowane z materiału till (drumlin)",
            "wielki kamień, który różni się od skały, na której leży (erratic)"
          ],
          "passage": [
            "Lodowiec niesie ogromny ładunek skał.",
            "Kiedy lód się topi, lodowiec zostawia ten ładunek.",
            "Zostawiony materiał nazywamy till.",
            "Till to mieszanina ostrokrawędzistych skał we wszystkich rozmiarach.",
            "Morena (moraine) to pagórek albo wał z materiału till.",
            "Moreny boczne (lateral moraines) powstają po bokach lodowca.",
            "Morena środkowa (medial moraine) powstaje w środku, tam gdzie dwa lodowce się łączą.",
            "Morena czołowa (terminal moraine) wyznacza najdalszy punkt, do którego dotarło czoło lodowca.",
            "Morena denna (ground moraine) jest rozłożona pod lodowcem.",
            "Drumliny (drumlins) to długie, niskie wzgórza zbudowane z materiału till.",
            "Grupę drumlinów nazywamy rojem.",
            "Eratyk (erratic) to wielki kamień, który różni się od skały, na której leży.",
            "Lodowiec go tam przyniósł, więc eratyki pokazują, w którą stronę płynął lód."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a mistura desordenada de rochas angulosas que um glaciar/geleira deixa cair (till)",
            "um monte ou uma crista de till deixados por um glaciar/geleira (moraine, morena)",
            "ao lado (lateral)",
            "no meio (medial)",
            "uma colina comprida e baixa feita de till (drumlin)",
            "um bloco de pedra diferente da rocha em que está assente (erratic, bloco errático)"
          ],
          "passage": [
            "Um glaciar/geleira transporta uma enorme carga de rocha.",
            "Quando o gelo derrete, o glaciar/geleira deixa cair essa carga.",
            "O material que cai chama-se till.",
            "O till é uma mistura desordenada de rochas angulosas de todos os tamanhos.",
            "Uma moraine (morena) é um monte ou uma crista de till.",
            "As moraines laterais formam-se ao longo dos lados de um glaciar/geleira.",
            "Uma moraine medial forma-se pelo meio, onde dois glaciares/geleiras se juntam.",
            "Uma moraine terminal marca o ponto mais longe a que a frente glaciar chegou.",
            "A moraine de fundo fica espalhada por baixo do glaciar/geleira.",
            "Os drumlins são colinas compridas e baixas feitas de till.",
            "A um grupo de drumlins chama-se enxame (swarm).",
            "Um erratic (bloco errático) é um bloco de pedra diferente da rocha em que está assente.",
            "Foi o glaciar/geleira que o levou até lá, por isso os erratics mostram para onde o gelo corria."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "isku qasnaanta dhagaxyada aan la kala soocin oo gees leh ee glacier dejiyo",
            "tuulmo ama kor-dheer oo till ah oo glacier ka tagay",
            "dhinaca",
            "dhexda",
            "kur dheer oo hooseeya oo till laga sameeyay",
            "dhagax weyn oo ka duwan dhagaxa uu ku dul fadhiyo"
          ],
          "passage": [
            "Glacier wuxuu qaadaa dhagax aad u culus.",
            "Marka barafku dhalaalo, glacier-ku culayskaas wuu dejiyaa.",
            "Waxa la dejiyay waxaa loo yiraahdaa till.",
            "Till waa isku qasnaan dhagaxyo gees leh oo cabbir kasta leh.",
            "Moraine waa tuulmo ama kor-dheer oo till ah.",
            "Lateral moraines waxay samaysmaan dhinacyada glacier-ka.",
            "Medial moraine wuxuu samaysmaa dhexda, meesha laba glacier ay isku biiraan.",
            "Terminal moraine wuxuu calaamadeeyaa meeshii ugu fog ee snout-ku gaaray.",
            "Ground moraine waxaa hoosta glacier-ka lagu kala firdhiyay.",
            "Drumlins waa kuro dhaadheer oo hooseeya oo till laga sameeyay.",
            "Koox drumlins ah waxaa loo yiraahdaa swarm.",
            "Erratic waa dhagax weyn oo ka duwan dhagaxa uu ku dul fadhiyo.",
            "Glacier-ku halkaas ayuu u qaaday, markaa erratics waxay muujiyaan jihada barafku u qulqulay."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "мішанина неперебраних гострокутних уламків, які скидає льодовик (till)",
            "насип або гряда з таких уламків, залишена льодовиком (moraine)",
            "збоку (lateral)",
            "посередині (medial)",
            "довгий низький пагорб із морених уламків (drumlin)",
            "валун, який відрізняється від породи, на якій лежить (erratic)"
          ],
          "passage": [
            "Льодовик несе величезний вантаж породи.",
            "Коли лід тане, льодовик скидає цей вантаж.",
            "Скинутий матеріал називають мореним матеріалом (till).",
            "Цей матеріал — мішанина гострокутних уламків усіх розмірів.",
            "Морена (moraine) — це насип або гряда з таких уламків.",
            "Бічні морени (lateral) утворюються вздовж боків льодовика.",
            "Серединна морена (medial) утворюється посередині, там, де сходяться два льодовики.",
            "Кінцева морена позначає найдальшу точку, якої досяг язик льодовика.",
            "Донна морена розстелена під льодовиком.",
            "Друмліни (drumlins) — це довгі низькі пагорби з морених уламків.",
            "Групу друмлінів називають роєм.",
            "Ератичний валун (erratic) — це валун, який відрізняється від породи, на якій лежить.",
            "Льодовик приніс його туди, тому ератичні валуни показують, у який бік рухався лід."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "بے ترتیب، کونے دار چٹانوں کا وہ ملغوبہ جو glacier گرا دیتا ہے (till)",
            "glacier کے چھوڑے ہوئے till کا ٹیلہ یا بند (moraine)",
            "کنارے پر (lateral)",
            "بیچ میں (medial)",
            "till سے بنی لمبی، نیچی پہاڑی (drumlin)",
            "ایک بڑا پتھر جو اُس چٹان سے مختلف ہو جس پر وہ پڑا ہے (erratic)"
          ],
          "passage": [
            "glacier چٹان کا بہت بڑا بوجھ اٹھا کر چلتا ہے۔",
            "جب برف پگھلتی ہے تو glacier یہ بوجھ گرا دیتا ہے۔",
            "گرائے ہوئے مادے کو till کہتے ہیں۔",
            "till ہر ناپ کی کونے دار چٹانوں کا ملغوبہ ہے۔",
            "moraine، till کا ٹیلہ یا بند ہوتا ہے۔",
            "lateral moraines، glacier کے کناروں کے ساتھ ساتھ بنتے ہیں۔",
            "medial moraine بیچ میں بنتا ہے، جہاں دو glaciers آ ملتے ہیں۔",
            "terminal moraine اُس آخری حد کو ظاہر کرتا ہے جہاں تک snout پہنچا تھا۔",
            "ground moraine، glacier کے نیچے پھیلا ہوتا ہے۔",
            "drumlins، till سے بنی لمبی، نیچی پہاڑیاں ہیں۔",
            "drumlins کے جھنڈ کو swarm کہتے ہیں۔",
            "erratic ایک بڑا پتھر ہے جو اُس چٹان سے مختلف ہوتا ہے جس پر وہ پڑا ہے۔",
            "glacier اسے وہاں لے کر آیا تھا، اس لیے erratics بتاتے ہیں کہ برف کس طرف بہی تھی۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Till and moraine",
          paragraphs: [
            "Everything a glacier plucks, scrapes and collects from the slopes above has to go somewhere. While the ice is moving, the rock is transported, frozen into the ice or carried on top of it. When the ice melts, the glacier deposits its load. This dropped material is called till. Because the ice simply lets go of everything at once, till is unsorted: boulders, stones, gravel and fine rock dust are all mixed together. The pieces are angular, with sharp edges, because they have been carried in ice rather than rolled along a river bed.",
            "Where does all the material come from? From the glacier's own erosion of its bed by plucking and abrasion, and from freeze-thaw weathering on the valley sides, which drops broken rock onto the ice. The glacier is a bulldozer, and till is the heap it leaves.",
            "A moraine is a landform made when a glacier deposits till as a mound or ridge. The deck names four main types, lateral, medial, ground and terminal, and adds a fifth, recessional, in the worksheet. Each one forms in a different place, and you need to know where."
          ],
          tip: "Till is the material; moraine is the landform made of it. Unsorted and angular are the two words that describe till."
        },
        {
          heading: "Where each moraine forms",
          paragraphs: [
            "Lateral moraines form at the side edges of the glacier, as ridges running along the valley. Rock weathered from the valley sides falls onto the edges of the ice and is dropped there. Medial moraines form when two glaciers meet and their lateral moraines combine into a single ridge running along the middle of the joined glacier. Ground moraine is the till spread out under the glacier, left as a layer across the valley floor when the ice melts.",
            "The end of a glacier is called its snout, terminus or toe. A terminal moraine is a ridge of till pushed up across the valley at the snout. It marks the maximum extent of the glacier, the furthest point the ice ever reached. As a glacier retreats, it may pause for a time and build a smaller ridge across the valley at each resting place. These are recessional moraines, and they mark the stages of the retreat.",
            "So the direction of each ridge tells you what it is. Along the valley: lateral at the sides, medial in the middle. Across the valley: terminal at the furthest point, recessional at each stage of retreat behind it."
          ],
          tip: "Along the valley: lateral and medial. Across the valley: terminal and recessional. Underneath everything: ground moraine."
        },
        {
          heading: "Drumlins and erratics",
          paragraphs: [
            "Drumlins are hills made of till, shaped like an upturned boat or half an egg, with a steep, blunt end facing the way the ice came from and a long, gentle tail pointing the way it went. They are elongated, much longer than they are wide. The deck gives their size: a kilometre or more in length, about 500 m in width, and over 50 m in height. Drumlins are usually found in groups, and a group of drumlins is called a swarm.",
            "An erratic is a boulder that is a different kind of rock from the bedrock it is sitting on. It did not form there. A glacier picked it up somewhere else, carried it, perhaps for hundreds of kilometres, and dropped it when the ice melted. Because geologists can often work out where a particular rock type comes from, erratics are useful clues to the patterns of former ice flow: they show where the ice came from and which way it moved."
          ],
          worked: {
            q: "A drumlin is 1000 m long and 500 m wide. How much longer is it than it is wide?",
            steps: [
              "Length: 1000 m. Width: 500 m.",
              "How much longer means find the difference: 1000 − 500.",
              "1000 − 500 = 500, so the drumlin is 500 m longer than it is wide, twice as long as it is wide."
            ],
            answer: "500 m longer than it is wide.",
            checks: [{ expr: "DRUMLIN_LENGTH_M-DRUMLIN_WIDTH_M", value: 500, tol: 0 }]
          },
          tip: "A drumlin's steep end faces the way the ice came from; its long tail points the way the ice went. An erratic tells you where the ice came from."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which type of moraine forms where two glaciers meet and their side moraines join into one ridge along the middle?", options: ["Medial moraine", "Lateral moraine", "Terminal moraine", "Ground moraine"], answer: 0, why: "Medial means in the middle. When two glaciers meet, their lateral moraines combine into one medial moraine running along the middle of the joined glacier.",
          feedback: [
            "",
            "Lateral means at the side. Lateral moraines run along the edges of a glacier; when two glaciers join, their lateral moraines combine to make a medial moraine in the middle.",
            "A terminal moraine is across the valley at the snout, marking the furthest point the ice reached. The ridge along the middle of a joined glacier is a medial moraine.",
            "Ground moraine is the till spread underneath the glacier, not a ridge. The ridge in the middle where two glaciers meet is a medial moraine."
          ] },
        { kind: "numeric", q: "According to the deck, a typical drumlin is about how many metres wide?", answer: 500, tolerance: 0, units: "m", check: "DRUMLIN_WIDTH_M", why: "The deck gives drumlins as a kilometre or more long, 500 m or so wide and over 50 m high.",
          misconceptions: [
            { answer: 50, says: "50 m is the height of a drumlin (over 50 m). Its width is about 500 m, ten times more.", check: "DRUMLIN_HEIGHT_M" },
            { answer: 1000, says: "1000 m, a kilometre, is the length of a drumlin. It is about half as wide as it is long: 500 m.", check: "DRUMLIN_LENGTH_M" },
            { answer: 5, says: "A 5 m wide mound would be a garden feature, not a hill. Drumlins are about 500 m wide.", check: "DRUMLIN_WIDTH_M/100" }
          ] },
        { kind: "gap", q: "A group of drumlins is called a ___.", answer: "swarm", options: ["swarm", "ridge", "field"], why: "Drumlins are usually found in groups, and the deck's word for a group of drumlins is a swarm.",
          feedback: {
            "ridge": "A ridge is a single long line of high ground, such as a moraine or an arête. Many drumlins together are called a swarm.",
            "field": "Drumlins do often cover a wide area, but the geographical word for a group of them is a swarm, as the deck says."
          } }
      ],
      modules: [
        {
          title: "Where does each moraine form?",
          task: {
            kind: "match",
            q: "Match each type of moraine to where it forms.",
            pairs: [
              ["Lateral moraine", "Along the side edges of the glacier"],
              ["Medial moraine", "Along the middle, where two glaciers meet and their side moraines combine"],
              ["Terminal moraine", "Across the valley at the snout, marking the furthest point the ice reached"],
              ["Recessional moraine", "Across the valley behind the terminal moraine, marking a stage in the glacier's retreat"],
              ["Ground moraine", "Spread over the valley floor beneath the ice"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Use the first word of each name. Lateral means side; medial means middle; terminal means end.",
                "Recessional comes from recede, to move back, so it marks the glacier moving back.",
                "Ground moraine is the only one that is not a ridge: it is spread underneath.",
                "Check: two run along the valley, two run across it, one lies under it."
              ],
              example: {
                q: "Match: terminus, zone of ablation. Choices: the lower part of a glacier, where melting is greatest; another word for the snout, the end of the glacier.",
                steps: ["Terminus means end.", "Ablation means melting, so the zone of ablation is where melting is greatest."],
                answer: "Terminus: another word for the snout, the end of the glacier. Zone of ablation: the lower part of a glacier, where melting is greatest."
              }
            },
            core: { hint: "Side, middle, end, stepping back, underneath. The names tell you the places." },
            stretch: { extend: "Explain how a geographer could use terminal and recessional moraines to work out the history of a glacier that has now disappeared." }
          },
          explain: "Say, in one sentence, the difference between a terminal moraine and a recessional moraine.",
          why: "Lateral moraines run along the sides; a medial moraine runs along the middle where two glaciers have joined; a terminal moraine runs across the valley at the furthest point the ice reached; recessional moraines run across the valley at each pause in the retreat; ground moraine is spread beneath the ice."
        },
        {
          title: "How big is a drumlin?",
          task: {
            kind: "numeric",
            q: "A drumlin is 1000 m long and 50 m high. How many times longer is it than it is high?",
            answer: 20, tolerance: 0, units: "times", check: "DRUMLIN_LENGTH_M/DRUMLIN_HEIGHT_M",
            misconceptions: [
              { answer: 950, says: "You subtracted the height from the length. How many times longer asks you to divide: 1000 ÷ 50 = 20.", check: "DRUMLIN_LENGTH_M-DRUMLIN_HEIGHT_M" },
              { answer: 50000, says: "You multiplied the two figures. How many times longer means divide the length by the height: 1000 ÷ 50 = 20.", check: "DRUMLIN_LENGTH_M*DRUMLIN_HEIGHT_M" },
              { answer: 2, says: "2 is what you get if you divide the length by the width, 1000 ÷ 500. The question uses the height, 50 m: 1000 ÷ 50 = 20.", check: "DRUMLIN_LENGTH_M/DRUMLIN_WIDTH_M" }
            ]
          },
          contexts: [
            { label: "Field sketch", q: "A geographer sketches a drumlin that is 1000 m long and 50 m high. How many times longer than it is high should she draw it?", check: "DRUMLIN_LENGTH_M/DRUMLIN_HEIGHT_M" },
            { label: "Drumlin swarm", q: "Every drumlin in a swarm is about 1000 m long and 50 m high. How many times longer than its height is each one?", check: "DRUMLIN_LENGTH_M/DRUMLIN_HEIGHT_M" },
            { label: "Model drumlin", q: "A class builds a model of a drumlin that is 1000 m long and 50 m high. To keep the shape right, how many times longer than its height must the model be?", check: "DRUMLIN_LENGTH_M/DRUMLIN_HEIGHT_M" }
          ],
          levels: {
            support: {
              steps: [
                "Write the two measurements: length 1000 m, height 50 m.",
                "How many times longer means how many 50s fit into 1000, so divide.",
                "1000 ÷ 50: there are two 50s in 100, so twenty 50s in 1000.",
                "Answer: 20 times longer than it is high. A drumlin is a long, low hill."
              ],
              example: {
                q: "A drumlin is 1200 m long and 60 m high. How many times longer is it than it is high?",
                steps: ["Length 1200, height 60.", "Divide: 1200 ÷ 60.", "There are two 60s in 120, so twenty 60s in 1200."],
                answer: "20 times longer than it is high.",
                checks: [{ expr: "1200/60", value: 20, tol: 0 }]
              }
            },
            core: { hint: "How many times means divide. Which number goes on top?" },
            stretch: { extend: "Explain what the result tells you about the shape of a drumlin, and why it is described as elongated." }
          },
          explain: "Say, in one sentence, why the answer tells you a drumlin is a low hill rather than a mountain.",
          why: "How many times longer means divide the length by the height: 1000 ÷ 50 = 20. A drumlin is twenty times longer than it is high, which is why it is a long, low, elongated hill."
        },
        {
          title: "Reading an erratic",
          task: {
            kind: "written",
            q: "Explain how an erratic can tell geographers which way a glacier flowed in the past. (4 marks)",
            marks: 4,
            criteria: [
              "Defines an erratic as a boulder that is a different rock type from the bedrock it sits on",
              "Explains that it was transported by a glacier and deposited when the ice melted",
              "Explains that geologists can work out where that rock type comes from",
              "Links the two places (where the rock came from and where it was dropped) to the direction of ice flow"
            ],
            model: "An erratic is a large boulder made of a different kind of rock from the bedrock it is sitting on, so it cannot have formed where it now lies. It was picked up by a glacier, carried along frozen in the ice, and dropped when the ice melted. Geologists can often identify exactly where a particular type of rock comes from. By drawing a line from the place the rock came from to the place the erratic now sits, geographers can see which direction the ice was flowing, so erratics are useful indicators of former ice flow."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: define an erratic. Different rock from the bedrock, so it did not form there.",
                "Sentence 2: how did it get there? Carried by a glacier, dropped when the ice melted.",
                "Sentence 3: geologists can tell where a rock type comes from.",
                "Sentence 4: from where it came from to where it lies now is the direction the ice flowed."
              ],
              example: {
                q: "In two sentences, explain how the scratches on a glaciated rock floor can show which way the ice flowed.",
                steps: ["Say what made the scratches.", "Say what their direction shows."],
                answer: "The scratches were made by rocks frozen into the base of the glacier scraping the floor as the ice moved. They run in the direction the ice was moving, so their line shows the direction of flow."
              }
            },
            core: { hint: "Different rock, carried by ice, dropped when the ice melted, trace it back to its source. Four ideas, four marks." },
            stretch: { extend: "Explain why a field full of angular, unsorted till with erratics in it is strong evidence of past glaciation rather than of a river." }
          },
          explain: "Say, in one sentence, why an erratic cannot have formed where it is found.",
          why: "An erratic is out of place: a different rock from the bedrock beneath it. It was carried there by ice and dropped when the ice melted. Knowing where that rock comes from and where it was dropped gives the direction the glacier flowed."
        }
      ]
    },

    /* ───────────── 6 · glaciers and people ───────────── */
    {
      key: "people-and-ice", n: 6, title: "Glaciers and people",
      lead: "How people use glaciers and glaciated landscapes, what the difference between advance and retreat really means, and how climate change is tipping the glacial budget towards retreat.",
      covers: [9, 10],
      pretext: {
        words: [
          { word: "glaciated", means: "shaped by glaciers in the past", sentence: "The Scottish Highlands are a glaciated landscape." },
          { word: "land use", means: "what people use an area of land for", sentence: "Farming and tourism are two kinds of land use in a glaciated valley." },
          { word: "climate change", means: "a long-term change in the Earth's weather patterns, now mainly warming", sentence: "Climate change is making glaciers melt faster." },
          { word: "fossil fuels", means: "coal, oil and gas, which release warming gases when burned", sentence: "Burning fossil fuels is the main human cause of climate change." },
          { word: "evidence", means: "facts that show something is true", sentence: "Old photographs are evidence that the glacier has retreated." },
          { word: "retreat", means: "a glacier shrinking, so that its snout moves back up the valley", sentence: "Most of the world's glaciers are in retreat." }
        ],
        passage: [
          "Today the UK has no glaciers, but it has glaciated landscapes.",
          "People use these landscapes in many ways.",
          "Visitors come to walk, climb and enjoy the views.",
          "Farmers graze animals on the valley floors and hillsides.",
          "Water collects in the deep valleys and can be stored and used.",
          "Glaciers in other parts of the world are used by people too.",
          "But glaciers are changing.",
          "Burning fossil fuels releases gases that warm the planet.",
          "This is climate change.",
          "Warmer summers mean more ablation, so glaciers lose more ice than they gain.",
          "Most glaciers are now retreating.",
          "Old photographs show snouts that were once much further down the valley.",
          "Melting land ice adds water to the sea, so sea level rises."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "شكّلته الأنهار الجليدية في الماضي (glaciated)",
            "ما يستخدم الناس منطقة الأرض من أجله (land use)",
            "تغيّر طويل الأجل في أنماط طقس الأرض، وهو اليوم احترار في الأساس (climate change)",
            "الفحم والنفط والغاز، وهي تُطلق غازات مُدفئة عند حرقها (fossil fuels)",
            "وقائع تُظهر أنّ شيئًا صحيح (evidence)",
            "تقهقر النهر الجليدي، فيرتدّ أنفه صاعدًا في الوادي (retreat)"
          ],
          "passage": [
            "ليس في المملكة المتّحدة اليوم أنهار جليدية، ولكن فيها مناظر شكّلها الجليد.",
            "والناس يستخدمون هذه المناظر استخدامات كثيرة.",
            "فالزوّار يأتون للمشي والتسلّق والتمتّع بالمشاهد.",
            "والمزارعون يرعون حيواناتهم في قيعان الأودية وعلى سفوح التلال.",
            "والماء يتجمّع في الأودية العميقة، فيمكن تخزينه واستخدامه.",
            "والأنهار الجليدية في أنحاء أخرى من العالم يستخدمها الناس أيضًا.",
            "ولكنّ الأنهار الجليدية تتغيّر.",
            "فحرق الوقود الأحفوري يُطلق غازات تُدفئ الكوكب.",
            "وهذا هو تغيّر المناخ.",
            "والصيف الأدفأ يعني تآكلًا جليديًّا أكثر، فتفقد الأنهار الجليدية من الجليد أكثر ممّا تكسب.",
            "ومعظم الأنهار الجليدية يتقهقر اليوم.",
            "والصور القديمة تُظهر أنوفًا كانت يومًا أبعد كثيرًا نزولًا في الوادي.",
            "وذوبان جليد اليابسة يضيف ماءً إلى البحر، فيرتفع مستوى سطح البحر."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "ukształtowany przez lodowce w przeszłości (glaciated)",
            "to, do czego ludzie używają danego obszaru ziemi (land use)",
            "długotrwała zmiana pogody na Ziemi, dziś głównie ocieplenie (climate change)",
            "węgiel, ropa i gaz, które przy spalaniu wydzielają gazy ocieplające klimat (fossil fuels)",
            "fakty, które pokazują, że coś jest prawdą",
            "cofanie się lodowca, przy którym jego czoło przesuwa się w górę doliny (retreat)"
          ],
          "passage": [
            "Dziś w Zjednoczonym Królestwie nie ma lodowców, ale są krajobrazy ukształtowane przez lód.",
            "Ludzie wykorzystują te krajobrazy na wiele sposobów.",
            "Przyjeżdżają tu turyści, żeby chodzić po górach, wspinać się i podziwiać widoki.",
            "Rolnicy wypasają zwierzęta na dnach dolin i na zboczach.",
            "W głębokich dolinach zbiera się woda, którą można magazynować i wykorzystywać.",
            "Lodowce w innych częściach świata też są wykorzystywane przez ludzi.",
            "Ale lodowce się zmieniają.",
            "Spalanie paliw kopalnych wydziela gazy, które ocieplają planetę.",
            "To jest zmiana klimatu (climate change).",
            "Cieplejsze lata znaczą więcej ablacji, więc lodowce tracą więcej lodu, niż zyskują.",
            "Większość lodowców obecnie się cofa.",
            "Stare zdjęcia pokazują czoła lodowców, które były kiedyś znacznie dalej w dole doliny.",
            "Topniejący lód lądowy dodaje wody do morza, więc poziom morza się podnosi."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "moldado por glaciares/geleiras no passado (glaciated, glaciado)",
            "aquilo para que as pessoas usam uma área de terreno (land use, uso do solo)",
            "uma mudança de longo prazo nos padrões do tempo da Terra, hoje sobretudo de aquecimento (climate change, mudanças climáticas)",
            "carvão, petróleo e gás, que libertam/liberam gases de aquecimento quando são queimados (fossil fuels, combustíveis fósseis)",
            "factos/fatos que mostram que uma coisa é verdade (evidence, provas)",
            "um glaciar/geleira a encolher, de modo que a sua frente recua pelo vale (retreat, recuo)"
          ],
          "passage": [
            "Hoje o Reino Unido não tem glaciares/geleiras, mas tem paisagens glaciadas.",
            "As pessoas usam estas paisagens de muitas maneiras.",
            "Há visitantes que vêm caminhar, escalar e apreciar as vistas.",
            "Os agricultores põem os animais a pastar nos fundos dos vales e nas encostas.",
            "A água junta-se nos vales profundos e pode ser armazenada e usada.",
            "Os glaciares/geleiras de outras partes do mundo também são usados pelas pessoas.",
            "Mas os glaciares/geleiras estão a mudar / estão mudando.",
            "Queimar combustíveis fósseis liberta/libera gases que aquecem o planeta.",
            "Isto são as mudanças climáticas (climate change).",
            "Verões mais quentes querem dizer mais ablação, por isso os glaciares/geleiras perdem mais gelo do que ganham.",
            "Quase todos os glaciares/geleiras estão agora a recuar / recuando.",
            "Fotografias antigas mostram frentes glaciares que estavam muito mais abaixo no vale.",
            "O gelo em terra que derrete junta água ao mar, por isso o nível do mar sobe."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "waagii hore glaciers ayaa qaabeeyay",
            "waxa dadku meel dhul ah u isticmaalaan",
            "isbeddel muddo dheer socda oo ku dhaca qaababka hawada Dhulka, oo hadda inta badan kululaansho yahay",
            "dhuxul, saliid iyo gaas, kuwaasoo marka la gubo sii daaya gaasas kululeeya",
            "xaqiiqooyin muujinaya in wax run yahay",
            "glacier oo yaraada, sidaas darteedna snout-kiisu dooxada kor ugu noqdo"
          ],
          "passage": [
            "Maanta Boqortooyada Midowday glaciers ma leh, laakiin waxay leedahay muuqaallo dhul oo glaciers qaabeeyeen.",
            "Dadku muuqaalladan waxay siyaabo badan u isticmaalaan.",
            "Booqdayaashu waxay u yimaaddaan socod, buur-fuulid iyo u raaxaysiga muuqaalka.",
            "Beeraleydu waxay xoolahooda daajiyaan salka dooxooyinka iyo dhinacyada kuraha.",
            "Biyo waxay ku urursamaan dooxooyinka moolka dheer, waana la kaydsan karaa oo la isticmaali karaa.",
            "Glaciers meelo kale oo dunida ah dadku waxay sidoo kale isticmaalaan.",
            "Laakiin glaciers way isbeddelayaan.",
            "Gubidda shidaalka fosil waxay sii daysaa gaasas kululeeya meeraha.",
            "Tan waa isbeddelka cimilada.",
            "Xagaa kulul macnaheedu waa ablation badan, markaa glaciers baraf badan ayay ka lumiyaan intay helaan.",
            "Inta badan glaciers hadda way yaraanayaan.",
            "Sawirrada hore waxay muujinayaan snouts oo mar hore dooxada aad hoos uga jiray.",
            "Dhalaalidda barafka dhulka waxay biyo badda ku dartaa, sidaa darteed heerka baddu wuu kacaa."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "сформований льодовиками в минулому (glaciated)",
            "те, для чого люди використовують ділянку землі (land use)",
            "довготривала зміна погодних умов Землі, тепер переважно потепління (climate change)",
            "вугілля, нафта і газ, які під час спалювання випускають гази, що нагрівають планету (fossil fuels)",
            "факти, які показують, що щось є правдою (evidence)",
            "зменшення льодовика, так що його язик відступає вгору долиною (retreat)"
          ],
          "passage": [
            "Сьогодні в Об’єднаному Королівстві немає льодовиків, але є льодовикові ландшафти.",
            "Люди використовують ці ландшафти багатьма способами.",
            "Відвідувачі приїжджають гуляти, лазити по скелях і милуватися видами.",
            "Фермери випасають тварин на дні долин і на схилах.",
            "Вода збирається в глибоких долинах, і її можна зберігати й використовувати.",
            "Льодовики в інших частинах світу люди теж використовують.",
            "Але льодовики змінюються.",
            "Спалювання викопного палива випускає гази, які нагрівають планету.",
            "Це зміна клімату (climate change).",
            "Тепліші літа означають більшу абляцію, тому льодовики втрачають більше льоду, ніж набирають.",
            "Більшість льодовиків тепер відступає.",
            "Старі фотографії показують язики, які колись були значно нижче в долині.",
            "Таяння наземного льоду додає води в море, тому рівень моря піднімається."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "جسے ماضی میں glaciers نے تراشا ہو (glaciated)",
            "لوگ کسی علاقے کی زمین کس کام میں لاتے ہیں (land use)",
            "زمین کے موسمی نمونوں میں طویل مدت کی تبدیلی، جو اب زیادہ تر گرمی کی طرف ہے (climate change)",
            "کوئلہ، تیل اور گیس، جو جلنے پر زمین کو گرم کرنے والی گیسیں چھوڑتے ہیں (fossil fuels)",
            "وہ حقائق جو دکھاتے ہیں کہ کوئی بات سچ ہے (evidence)",
            "glacier کا سکڑنا، جس سے اس کا snout وادی میں پیچھے ہٹ جاتا ہے (retreat)"
          ],
          "passage": [
            "آج برطانیہ میں کوئی glacier نہیں، مگر glaciated مناظر موجود ہیں۔",
            "لوگ ان مناظر کو کئی طرح سے استعمال کرتے ہیں۔",
            "سیر کرنے والے پیدل چلنے، چڑھائی کرنے اور نظارے دیکھنے آتے ہیں۔",
            "کسان وادیوں کے فرش اور ڈھلانوں پر جانور چراتے ہیں۔",
            "گہری وادیوں میں پانی جمع ہوتا ہے، جسے ذخیرہ کر کے استعمال کیا جا سکتا ہے۔",
            "دنیا کے دوسرے حصوں کے glaciers بھی لوگوں کے کام آتے ہیں۔",
            "مگر glaciers بدل رہے ہیں۔",
            "fossil fuels جلانے سے ایسی گیسیں نکلتی ہیں جو زمین کو گرم کرتی ہیں۔",
            "یہی climate change ہے۔",
            "گرم گرمیوں کا مطلب زیادہ ablation ہے، اس لیے glaciers جتنی برف پاتے ہیں اس سے زیادہ کھو دیتے ہیں۔",
            "زیادہ تر glaciers اب پیچھے ہٹ رہے ہیں۔",
            "پرانی تصویروں میں snouts وادی میں بہت نیچے تک نظر آتے ہیں۔",
            "پگھلتی ہوئی land ice سمندر میں پانی بڑھاتی ہے، اس لیے سمندر کی سطح بلند ہوتی ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Using glaciated landscapes",
          paragraphs: [
            "The deck asks a question and hands it to you: what different ways could a glaciated valley be used by humans? Your answer is a spider diagram, and this section helps you build it. A glaciated valley has a wide, flat floor, steep sides, lakes and tarns, fast streams and dramatic views. Each of those features invites a different land use.",
            "Think in groups. People visit: walkers, climbers and skiers come for the mountains, the lakes and the scenery, and the villages that serve them earn money from tourism. People farm: the flat valley floor and the lower slopes are grazed by sheep and cattle, because the land is too steep and wet for crops. People use the water: the deep valleys and lakes hold rain and meltwater, which can be stored behind dams for drinking water and used to turn turbines for electricity. People build: roads and railways follow the flat valley floors, and settlements sit on the dry land above the floodplain.",
            "In the Alps and the Himalayas, where glaciers still exist, the ice itself is a resource: the meltwater feeds rivers that millions of people depend on, and the glaciers draw climbers and tourists. Add any other uses you can think of to your spider diagram, as the deck's stretch task asks."
          ],
          tip: "Four headings for your spider diagram: visit, farm, water, build. Give an example under each."
        },
        {
          heading: "Advance and retreat",
          paragraphs: [
            "Chapter 2 introduced the glacier budget. Now put it to work. As precipitation adds snow to the top of a glacier, in the zone of accumulation, the glacier gains mass. If this accumulation is greater than the melting in the zone of ablation, the glacier's total volume grows. It gets thicker and longer, and its snout pushes further down the valley than before. This is an advance.",
            "If the glacier melts faster in the zone of ablation than snow is added in the zone of accumulation, its total volume shrinks. The glacier gets thinner and shorter, and its snout moves back up the valley. This is a retreat. Notice that the ice inside a retreating glacier is still flowing downhill; it is the snout that moves back, because the ice melts before it can get as far as it used to.",
            "A glacier can also be in balance, with accumulation equal to ablation, so that the snout stays in the same place year after year while the ice keeps flowing through."
          ],
          worked: {
            q: "Describe the difference between glacier advance and glacier retreat. Use the key words accumulation and ablation in your answer. (4 marks)",
            steps: [
              "Define the two key words first: accumulation is snow being added; ablation is ice being lost by melting.",
              "Advance: accumulation is greater than ablation, so the glacier grows and its snout moves down the valley.",
              "Retreat: ablation is greater than accumulation, so the glacier shrinks and its snout moves back up the valley.",
              "Both terms used correctly and both directions of the snout given earns the four marks."
            ],
            answer: "Accumulation is snow being added to a glacier and ablation is ice being lost by melting. When accumulation is greater than ablation the glacier grows and its snout moves further down the valley, which is an advance. When ablation is greater than accumulation the glacier shrinks and its snout moves back up the valley, which is a retreat."
          },
          tip: "Advance: snout goes down the valley. Retreat: snout comes back up. Always say which is bigger, accumulation or ablation."
        },
        {
          heading: "Climate change and the glacial budget",
          paragraphs: [
            "The deck's final task is a newspaper article about climate change and the glacial budget, and it gives you three questions to answer. First, what are humans doing that is causing climate change? Burning fossil fuels, coal, oil and gas, in power stations, factories, cars and planes releases carbon dioxide and other gases into the air. These gases trap heat, like a blanket round the planet, so the Earth's average temperature is rising. Cutting down forests makes it worse, because trees take carbon dioxide out of the air.",
            "Second, what is the evidence that climate change is happening? Glaciers are some of the clearest evidence. Old photographs and maps show glacier snouts far down valleys that are now bare rock; the ice has retreated hundreds of metres or more in a lifetime. Temperature records show warmer summers, which means more ablation. With more melting and no extra snow, ablation is greater than accumulation, the budget is in deficit, and most of the world's glaciers are shrinking.",
            "Third, why should we worry? Glaciers are land ice, so when they melt, the water runs down to the sea and sea level rises, threatening low-lying coasts and cities. Millions of people in Asia depend on rivers fed by Himalayan glacier meltwater; smaller glaciers mean less reliable water. And the landscapes, wildlife and tourism that depend on ice are changing too. Your article should answer all three questions, with evidence for each."
          ],
          tip: "Three questions for the article: what humans are doing, what the evidence is, why we should worry. Use accumulation and ablation when you explain the budget."
        }
      ],
      gate: [
        { kind: "mcq", q: "A glacier is retreating. What does this mean?", options: ["Its snout is moving back up the valley because the glacier is shrinking", "It is flowing downhill faster than before", "It is gaining more snow than it loses", "Its ice is getting thicker at the top"], answer: 0, why: "Retreat means the glacier is losing more ice by ablation than it gains by accumulation, so it shrinks and its snout moves back up the valley.",
          feedback: [
            "",
            "Retreat is about size, not speed. The ice in a retreating glacier still flows downhill; it is the snout that moves back up the valley because the glacier is shrinking.",
            "Gaining more snow than it loses would make the glacier grow and advance. Retreat is the opposite: it loses more than it gains and shrinks.",
            "Thicker ice at the top means accumulation is winning, which leads to advance. A retreating glacier is getting thinner and shorter."
          ] },
        { kind: "gap", q: "If ablation is greater than accumulation, the glacier will ___.", answer: "retreat", options: ["retreat", "advance", "speed up"], why: "Ablation is loss by melting. When more is lost than is added, the glacier shrinks and its snout moves back: a retreat.",
          feedback: {
            "advance": "Advance happens when accumulation (snow added) is greater than ablation (ice melted). Here ablation is greater, so the glacier loses ice and retreats.",
            "speed up": "The budget decides how big the glacier is, not how fast it flows. More ablation than accumulation means the glacier shrinks and retreats."
          } },
        { kind: "mcq", q: "Which of these is evidence that a glacier is retreating?", options: ["Its snout is further up the valley than in old photographs", "Its surface is covered in fresh snow after a storm", "It has a medial moraine down its middle", "It is flowing slowly downhill under gravity"], answer: 0, why: "Comparing the position of the snout now with old photographs or maps shows whether the glacier has shrunk. A snout further up the valley means retreat.",
          feedback: [
            "",
            "Fresh snow after one storm is a single input; it does not tell you the yearly budget. Evidence of retreat is the snout being further up the valley than it used to be.",
            "A medial moraine shows that two glaciers have joined. It says nothing about whether the glacier is growing or shrinking.",
            "All glaciers flow downhill under gravity, whether they are advancing, retreating or in balance. Retreat shows in where the snout is compared with the past."
          ] }
      ],
      modules: [
        {
          title: "What will happen to this glacier?",
          task: {
            kind: "mcq",
            q: "A glacier has had several warm summers with a great deal of melting, while its winter snowfall has stayed the same. What will happen to it?",
            options: [
              "Ablation is greater than accumulation, so it will shrink and retreat",
              "Accumulation is greater than ablation, so it will grow and advance",
              "Nothing, because glaciers only change over thousands of years",
              "It will stop flowing until the summers get cooler again"
            ],
            answer: 0,
            feedback: [
              "",
              "You have the two words the wrong way round. Snowfall (accumulation) has not changed, but melting (ablation) has increased, so ablation is now the bigger one and the glacier shrinks.",
              "Glaciers respond within years, not thousands of years. Several warm summers tip the budget: more ablation than accumulation, so the glacier retreats.",
              "A glacier keeps flowing downhill under gravity whatever the weather. What changes is its size: more melting than snowfall means it shrinks and retreats."
            ]
          },
          contexts: [
            { label: "The Alps", q: "A glacier in the Alps has had a run of hot summers, with much more melting than usual, while its winter snowfall has stayed the same. What will happen to it?" },
            { label: "The Himalayas", q: "In the Himalayas, summer temperatures have risen for several years and melting has increased, but the winter snow has not changed. What will happen to the glaciers there?" },
            { label: "Greenland", q: "At the edge of the Greenland ice sheet, warm summers have melted far more ice than before, while winter snowfall is unchanged. What will happen to the ice there?" }
          ],
          explain: "Say, in one sentence, which side of the budget changed and what that did to the glacier.",
          levels: {
            support: {
              steps: [
                "Write the two sides of the budget: accumulation (snow added) and ablation (ice melted).",
                "Which side has changed? Snowfall is the same, so accumulation is unchanged. Melting has increased, so ablation has gone up.",
                "Ablation is now greater than accumulation.",
                "More lost than gained means the glacier shrinks, and a shrinking glacier retreats."
              ],
              example: {
                q: "A glacier has had several very snowy winters, while its summers have stayed as cool as before. What will happen to it?",
                steps: ["Accumulation has gone up; ablation is unchanged.", "Accumulation is now greater than ablation.", "The glacier gains more than it loses, so it grows and advances."],
                answer: "Accumulation is greater than ablation, so it will grow and advance."
              }
            },
            core: { hint: "Only one side of the budget changed. Which one, and which way?" },
            stretch: { extend: "Explain why a glacier can keep flowing downhill while it is retreating." }
          },
          why: "Winter snowfall is unchanged, so accumulation is the same, but hotter summers mean more melting, so ablation has increased. Ablation is now greater than accumulation; the glacier loses more than it gains, shrinks, and its snout retreats up the valley."
        },
        {
          title: "Four budget words",
          task: {
            kind: "match",
            q: "Match each glacier budget word to its meaning.",
            pairs: [
              ["Accumulation", "Snow added to the glacier, mostly near the top in winter"],
              ["Ablation", "Ice lost by melting, mostly near the snout in summer"],
              ["Advance", "The glacier grows and its snout moves further down the valley"],
              ["Retreat", "The glacier shrinks and its snout moves back up the valley"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Two of the words are about ice coming and going; two are about the glacier getting bigger or smaller. Sort them into those pairs first.",
                "Accumulate means pile up, so accumulation is snow being added.",
                "Ablation is the other one: ice being lost by melting.",
                "Advance means move forward (down the valley); retreat means move back (up the valley)."
              ],
              example: {
                q: "Match: zone of accumulation, zone of ablation. Choices: the lower part of a glacier, where melting is greatest; the upper part of a glacier, where snow is added.",
                steps: ["Accumulation is adding, which happens at the top.", "Ablation is melting, which happens at the bottom."],
                answer: "Zone of accumulation: the upper part, where snow is added. Zone of ablation: the lower part, where melting is greatest."
              }
            },
            core: { hint: "Add, lose, grow, shrink. Pair each word with a season and a direction." },
            stretch: { extend: "Explain how a glacier can be in balance, with its snout staying in the same place, even though ice is flowing through it all the time." }
          },
          explain: "Say, in one sentence, how accumulation and ablation together decide whether a glacier advances or retreats.",
          why: "Accumulation is snow added at the top in winter; ablation is ice melted near the snout in summer. If accumulation wins the glacier advances, its snout moving down the valley; if ablation wins it retreats, its snout moving back up."
        },
        {
          title: "Front page: the shrinking glaciers",
          task: {
            kind: "written",
            q: "Write the opening of a newspaper article explaining how climate change is affecting the glacial budget of the world's glaciers. Answer the deck's three questions: what humans are doing to cause climate change, what evidence there is that it is happening, and why we should worry. (6 marks)",
            marks: 6,
            criteria: [
              "Explains what humans are doing that causes climate change (burning fossil fuels, and deforestation), and how this warms the planet",
              "Gives evidence that climate change is happening, including evidence from glaciers (retreating snouts, old photographs or maps, warmer temperatures)",
              "Explains the effect on the glacial budget using the words accumulation and ablation correctly",
              "Explains why we should worry (sea level rise from melting land ice, water supplies, landscapes)",
              "Is written as a newspaper article: a headline, a clear opening and a named local paper"
            ],
            model: "ICE IN RETREAT, reports the Valley Herald. For a hundred years, people in power stations, factories and cars have burned coal, oil and gas. These fossil fuels release gases that trap heat around the Earth, and the planet is warming. The clearest evidence is in the mountains. Old photographs show glacier snouts far down valleys that are now bare rock, and temperature records show hotter summers every decade. Hotter summers mean more ablation, the melting of ice, while winter snowfall, the accumulation, has not kept up. With ablation greater than accumulation, the glacial budget is in deficit and most of the world's glaciers are shrinking. We should worry. Glaciers are land ice, so their meltwater runs into the sea and sea level rises, threatening coastal towns. Millions of people in Asia drink from rivers fed by Himalayan glaciers. And the mountain landscapes we visit are changing before our eyes."
          },
          levels: {
            support: {
              steps: [
                "Headline and newspaper name first; keep the headline short.",
                "Paragraph 1: what humans are doing. Name fossil fuels and say the gases trap heat.",
                "Paragraph 2: the evidence. Old photographs, retreating snouts, warmer summers. Then link it to the budget: more ablation than accumulation.",
                "Paragraph 3: why worry. Sea level, water supplies, landscapes.",
                "Read it back as a journalist would: does each paragraph answer one of the three questions?"
              ],
              example: {
                q: "Write two sentences of a newspaper article explaining why a town beside a river should worry about more frequent floods, giving one cause and one effect.",
                steps: ["Cause: heavier rain, or more concrete that stops water soaking in.", "Effect: homes and shops flooded, people moved out."],
                answer: "Heavier storms and more concrete mean rain reaches the river faster than ever, say engineers. Last winter two hundred homes along Mill Street were flooded, and residents fear the next storm."
              }
            },
            core: { hint: "Three paragraphs for three questions: causes, evidence, worry. Use accumulation and ablation in the evidence paragraph." },
            stretch: { extend: "Add a final paragraph suggesting two things people could do to slow climate change, and say which would make the bigger difference and why." }
          },
          explain: "Say, in one sentence, how climate change changes the glacial budget.",
          why: "A strong article answers all three of the deck's questions in order: humans burn fossil fuels and release heat-trapping gases; glaciers retreating, old photographs and warmer summers are the evidence, and the budget shows it as ablation greater than accumulation; the worry is sea level, water supplies and changing landscapes."
        }
      ]
    }
  ],

  sources: {
    deckDump: "gg_y08_unit_4_glaciers_and_landforms.txt",
    decksUsed: ["Glaciers_year8.pptx", "End of topic- glaciers_Revision.pptx"],
    notes: "Lesson titles, sequence, key words, definitions, step sequences and every number come from the department deck Glaciers_year8.pptx (slides 1-106; slides 65, 93 and 107 are absent from the extraction; slides 108-111 are a Year 8 end-of-year revision guide and an enrichment project, not this unit). End of topic- glaciers_Revision.pptx is a copy of slides 1-44 of the main deck and was used only to confirm the sequence. House furniture (starters, homework and Kerboodle page references, assessment and test instructions, class codes) was used only to fix the lesson sequence. The deck's worksheet answers and model text (slides 16, 25, 28, 43, 53-56, 58, 63-64, 68, 76-79) were read to see what the deck teaches; none is reproduced and verify.py bans their distinctive phrases. Where the deck gives only a question or a textbook page (human uses of glaciated landscapes, the causes and evidence of climate change), the manifest frames the question at Year 8 level and NOTES.md flags the content for the Head of Department. No pretext.l1 (translation is a separate pass) and no meta.constellation. No text is quoted from any source."
  }
};
