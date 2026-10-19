// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE Geography 8035 · 3.2.3 The challenge of resource management (3.2.3.1 Resource management,
// 3.2.3.4 Energy) · Year 9 · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression; the FACTS names held in verify.py are allowed) and are recomputed.
//   worked examples / support examples with a calculation carry `checks:[{expr, value, tol}]`.
//   every "order" task is compared with the canonical sequences held in verify.py (the department deck's own sequences).
//   every mcq / gap / match answer is compared with the independent answer key held in verify.py.
//   every case-study number (the 40 % of UK food imported, the 2000-2400 calories, the 1334 and 266 cubic metres, the 150 and 47
//   litres, the import-share table, the food-miles examples, the fracking cards, the Alaska cards, the carbon-footprint pie) is
//   checked against the independent FACTS table in verify.py, each with its slide reference.
//   passage sentences are counted (≤ 20 words) and all text is linted for known misconceptions, deck errors and quotations.
//   every percentage, four-digit number and million/billion/trillion figure in pupil-facing text must be in the sets derived
//   from FACTS, so a stray number fails; each case-study fact must also be stated in the form the deck gives it.
//   the pupil text is compared word by word with the whole dump: any run of 12+ shared words fails except six whitelisted
//   key-word definitions and the oil-producer map key (verify.py SHARED_OK), so nothing longer is reproduced from the deck.
//   a mutation self-test corrupts a scratch copy ten ways (wrong gap answer, wrong case-study number, swapped order items,
//   a misconception in a tip, a wrong numeric answer, a staff name, a missing feedback array, a verbatim deck run, a stray
//   year, a stray percentage) and fails unless every one is caught.
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions`; every module carries
//   `explain`; ≥ 1 module per chapter carries `contexts` that never redefine the answer; `connections` ⊂ glossary;
//   meta.constellation is omitted (the engine lays the stars out); no pretext.l1 (translation is a separate pass).
// Maps (choropleth, proportional circles, pictograms, flow lines) and pie charts are described in words; no widget exists for them.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["geog-resources"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "geog-resources",
    subjectKey: "geography",
    subject: "Geography",
    board: "AQA",
    spec: "8035",
    specRef: "3.2.3 The challenge of resource management: 3.2.3.1 Resource management (food, water and energy; the UK overview), 3.2.3.4 Energy (Paper 2, Section C)",
    year: 9,
    tier: "GCSE (AQA Geography is a single-tier qualification; taught in Year 9 at the start of the GCSE course)",
    title: "The Challenge of Resource Management",
    sub: "Why food, water and energy are shared out so unevenly across the world, how the UK feeds, waters and powers itself, and whether fracking, Arctic oil or renewable energy is the right way to keep the lights on.",
    bigQuestion: "Can the world supply enough food, water and energy for everyone without using up the planet, and how should the UK manage its own supply?",
    lessonCount: 11,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  // The department's deck (Resources.pptx, slides 1-169; the DIT deck adds nothing new), in teaching order. Titles are the deck's
  // own slide titles or learning objectives; questions are those objectives rephrased. See NOTES.md section 2 for the slide ranges.
  lessons: [
    { n: 1, title: "The global distribution of resources: what is a resource? Food and water", question: "What is a resource, why do food, water and energy matter most, and why are so many people short of food and water?", keywords: ["resource", "malnourished", "malnutrition", "calories", "water shortage", "climate"] },
    { n: 2, title: "Energy and the global pattern of food, water and energy", question: "Why do countries need energy, and how do world maps show the inequality in food, water and energy between high-income and low-income countries?", keywords: ["energy", "economic development", "consumption", "inequality", "HIC", "LIC", "describe a pattern"] },
    { n: 3, title: "The changing demand for food in the UK: imports, food miles and carbon footprint", question: "Why does the UK import so much of its food, and what do food miles and carbon footprints have to do with it?", keywords: ["import", "food miles", "carbon footprint", "agribusiness", "organic farming", "flow line map"] },
    { n: 4, title: "Water deficit and surplus in England", question: "Where in England is there too little water and too much, and why?", keywords: ["water stress", "water deficit", "water surplus", "water transfer", "choropleth map", "precipitation", "population density"] },
    { n: 5, title: "Energy security and the UK's changing energy mix", question: "What do energy security, surplus and insecurity mean, and how has the UK's energy mix changed?", keywords: ["energy security", "energy surplus", "energy insecurity", "energy mix", "pie chart"] },
    { n: 6, title: "Fracking: extracting shale gas in the UK", question: "How is shale gas extracted by fracking, and should the UK allow it?", keywords: ["fracking", "shale gas", "hydraulic fracturing", "borehole", "advantages", "disadvantages", "licence"] },
    { n: 7, title: "Global energy production and consumption; the causes of energy insecurity", question: "How do choropleth maps, proportional circles and pictograms show global energy inequality, and why do some countries suffer energy insecurity?", keywords: ["choropleth", "proportional circle", "pictogram", "oil production", "oil consumption", "economic", "physical", "political", "technological"] },
    { n: 8, title: "Oil drilling in Alaska: the Arctic National Wildlife Refuge", question: "Should oil be drilled in the Arctic National Wildlife Refuge, and what does the tundra have to lose?", keywords: ["Alaska", "Arctic National Wildlife Refuge", "tundra", "permafrost", "caribou", "oil spill", "Exxon Valdez", "pipeline"] },
    { n: 9, title: "Resources and conflict", question: "How and why can resources cause conflict?", keywords: ["conflict", "territory", "ownership", "exploitation", "struggle"] },
    { n: 10, title: "Types of renewable energy and a renewable energy case study", question: "What are the seven types of renewable energy, and how can a renewable energy scheme help a community develop sustainably?", keywords: ["renewable", "biomass", "wind", "tidal", "solar", "geothermal", "wave", "hydro-electric power", "sustainable development", "PEEL"] },
    { n: 11, title: "How to reduce our energy use: energy conservation and sustainable energy", question: "How can individuals, communities and governments cut energy use and carbon footprints, and what makes energy sustainable?", keywords: ["energy conservation", "carbon footprint", "direct emissions", "indirect emissions", "transition town", "sustainable energy", "think global, act local"] }
  ],

  // 16 terms; Connections uses all 16 (four groups, each one chapter's idea). Chapters 4, 5 and 6 teach their key words
  // (fracking, shale, permafrost, tundra, renewable, sustainable) through pretext.words and the text instead.
  glossary: [
    { term: "resource", means: "A stock or supply of something that has a value or a purpose, such as food, water or energy.", chapter: "what-is-a-resource" },
    { term: "resource management", means: "The control and monitoring of resources so that they do not become exhausted, or run out.", chapter: "what-is-a-resource" },
    { term: "malnourishment", means: "A food intake below the level needed to sustain a healthy life; too few calories.", chapter: "what-is-a-resource" },
    { term: "malnutrition", means: "A poorly balanced diet lacking the minerals and vitamins needed for energy, growth and a healthy immune system.", chapter: "what-is-a-resource" },
    { term: "food miles", means: "The distance food travels from where it is grown or made to the person who eats it.", chapter: "uk-food-and-water" },
    { term: "carbon footprint", means: "The total amount of greenhouse gases produced to support a person's activities, directly and indirectly, measured in tonnes of carbon dioxide.", chapter: "uk-food-and-water" },
    { term: "agribusiness", means: "Large-scale, intensive farming run on strictly commercial principles to produce as much food as possible.", chapter: "uk-food-and-water" },
    { term: "organic produce", means: "Food grown without artificial chemicals such as fertilisers and pesticides.", chapter: "uk-food-and-water" },
    { term: "water stress", means: "When the demand for water is greater than the amount available in a period, or when poor quality restricts its use.", chapter: "uk-food-and-water" },
    { term: "water surplus", means: "When the supply of water in an area is greater than the demand for it.", chapter: "uk-food-and-water" },
    { term: "water deficit", means: "When the demand for water in an area is greater than the supply.", chapter: "uk-food-and-water" },
    { term: "water transfer", means: "Matching supply with demand by moving water from an area of surplus to an area of deficit.", chapter: "uk-food-and-water" },
    { term: "energy security", means: "Having a reliable, uninterrupted and affordable supply of energy.", chapter: "energy-security" },
    { term: "energy surplus", means: "When a country's energy supply is greater than its demand.", chapter: "energy-security" },
    { term: "energy insecurity", means: "When the demand for energy is greater than the amount a country can produce or afford, so supply is unreliable.", chapter: "energy-security" },
    { term: "energy mix", means: "The range of energy sources a country uses, shown as the share each one contributes.", chapter: "energy-security" }
  ],

  connections: [
    { group: "Words from the first lesson", terms: ["resource", "resource management", "malnourishment", "malnutrition"] },
    { group: "The UK's food", terms: ["food miles", "carbon footprint", "agribusiness", "organic produce"] },
    { group: "The UK's water", terms: ["water stress", "water surplus", "water deficit", "water transfer"] },
    { group: "Energy supply and demand", terms: ["energy security", "energy surplus", "energy insecurity", "energy mix"] }
  ],

  chapters: [
    /* ───────────── 1 · what is a resource? ───────────── */
    {
      key: "what-is-a-resource", n: 1, title: "Food, water and energy: the resources every country needs",
      lead: "What a resource is, why food, water and energy are the three that matter most, and how world maps show that they are shared out very unevenly.",
      covers: [1, 2],
      pretext: {
        words: [
          { word: "resource", means: "a stock or supply of something that has a value or a purpose", sentence: "Water is a resource because every person and every farm needs it." },
          { word: "malnourished", means: "not getting enough food to stay healthy", sentence: "A malnourished child does not get enough calories each day." },
          { word: "malnutrition", means: "a poorly balanced diet that lacks minerals and vitamins", sentence: "Malnutrition can make people ill even when they eat enough calories." },
          { word: "consumption", means: "the amount of something that people use", sentence: "Energy consumption is highest in the richest countries." },
          { word: "development", means: "the progress of a country in economic growth, technology and human welfare", sentence: "Good supplies of food, water and energy help a country's development." },
          { word: "inequality", means: "when things are not shared out equally", sentence: "There is great inequality in who has enough water to drink." }
        ],
        passage: [
          "A resource is a stock or supply of something that has a value or a purpose.",
          "The three most important resources are food, water and energy.",
          "A country needs good supplies of all three to develop.",
          "The World Health Organisation says each person needs 2000 to 2400 calories a day.",
          "Over one billion people get less than this and are malnourished.",
          "Another two billion people have malnutrition, a diet lacking minerals and vitamins.",
          "Water is needed for drinking, for growing crops and for making energy.",
          "Rainfall and climate vary, so many poor countries, especially in Africa, are short of water.",
          "Energy powers factories, machines and transport.",
          "As the world develops, the demand for energy keeps rising.",
          "Maps show that food, water and energy are shared out very unevenly.",
          "High-income countries have the most; low-income countries have the least."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "مخزون أو مَورد من شيء له قيمة أو غاية (resource)",
            "لا يحصل على ما يكفيه من الغذاء ليبقى صحيحًا (malnourished)",
            "غذاء سيّئ التوازن تنقصه المعادن والفيتامينات (malnutrition)",
            "مقدار ما يستخدمه الناس من شيء ما (consumption)",
            "تقدّم البلد في النموّ الاقتصادي والتقنية ورفاه الناس (development)",
            "عندما لا تُقسَم الأشياء بالتساوي (inequality)"
          ],
          "passage": [
            "المَورد (resource) مخزون أو مَورد من شيء له قيمة أو غاية.",
            "وأهمّ ثلاثة موارد هي الغذاء والماء والطاقة.",
            "والبلد يحتاج إلى موارد جيّدة من الثلاثة كلّها حتى يتطوّر.",
            "وتقول منظّمة الصحّة العالمية إنّ كلّ شخص يحتاج إلى 2000 إلى 2400 سعرة حرارية في اليوم.",
            "وأكثر من مليار شخص يحصلون على أقلّ من هذا، فهم ناقصو التغذية.",
            "ومليارا شخص آخران عندهم سوء تغذية، أي غذاء تنقصه المعادن والفيتامينات.",
            "والماء لازم للشرب ولزراعة المحاصيل ولتوليد الطاقة.",
            "والمطر والمناخ يختلفان، فبلدان فقيرة كثيرة، وخاصّةً في أفريقيا، ينقصها الماء.",
            "والطاقة تشغّل المصانع والآلات والنقل.",
            "وكلّما تطوّر العالم ازداد الطلب على الطاقة.",
            "وتُظهر الخرائط أنّ الغذاء والماء والطاقة مقسومة قسمةً غير متساوية أبدًا.",
            "فالبلدان مرتفعة الدخل عندها أكثرها، والبلدان منخفضة الدخل عندها أقلّها."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "zapas albo dostawa czegoś, co ma wartość albo zastosowanie (resource)",
            "niedożywiony, czyli nie dostający dość jedzenia, żeby być zdrowym",
            "źle zrównoważona dieta, w której brakuje składników mineralnych i witamin (malnutrition)",
            "ilość czegoś, której ludzie używają (consumption)",
            "postęp kraju w gospodarce, technologii i dobrobycie ludzi (development)",
            "sytuacja, w której coś nie jest dzielone sprawiedliwie (inequality)"
          ],
          "passage": [
            "Zasób (resource) to zapas albo dostawa czegoś, co ma wartość albo zastosowanie.",
            "Trzy najważniejsze zasoby to jedzenie, woda i energia.",
            "Kraj potrzebuje dobrych dostaw wszystkich trzech, żeby się rozwijać.",
            "Światowa Organizacja Zdrowia podaje, że każdy człowiek potrzebuje od 2000 do 2400 kalorii na dobę.",
            "Ponad miliard ludzi dostaje mniej i jest niedożywionych.",
            "Kolejne dwa miliardy ludzi mają niedobory żywieniowe (malnutrition), czyli dietę bez składników mineralnych i witamin.",
            "Woda jest potrzebna do picia, do uprawy roślin i do wytwarzania energii.",
            "Opady i klimat są różne, więc wielu biednym krajom, szczególnie w Afryce, brakuje wody.",
            "Energia napędza fabryki, maszyny i transport.",
            "W miarę rozwoju świata zapotrzebowanie na energię stale rośnie.",
            "Mapy pokazują, że jedzenie, woda i energia są rozdzielone bardzo nierówno.",
            "Kraje o wysokich dochodach mają najwięcej, a kraje o niskich dochodach najmniej."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma reserva ou um fornecimento de algo que tem valor ou serve um fim (resource, recurso)",
            "que não recebe comida suficiente para se manter saudável (malnourished, subnutrido)",
            "uma alimentação mal equilibrada, a que faltam minerais e vitaminas (malnutrition, desnutrição)",
            "a quantidade de uma coisa que as pessoas usam (consumption, consumo)",
            "o progresso de um país no crescimento económico/econômico, na tecnologia e no bem-estar das pessoas (development, desenvolvimento)",
            "quando as coisas não são repartidas de maneira igual (inequality, desigualdade)"
          ],
          "passage": [
            "Um recurso é uma reserva ou um fornecimento de algo que tem valor ou serve um fim.",
            "Os três recursos mais importantes são a comida, a água e a energia.",
            "Um país precisa de bons fornecimentos dos três para se desenvolver.",
            "A Organização Mundial da Saúde diz que cada pessoa precisa de 2000 a 2400 calorias por dia.",
            "Mais de mil milhões/um bilhão de pessoas recebem menos do que isto e estão subnutridas.",
            "Outros dois mil milhões/bilhões de pessoas têm desnutrição, uma alimentação a que faltam minerais e vitaminas.",
            "A água é necessária para beber, para cultivar alimentos e para fazer energia.",
            "A chuva e o clima variam, por isso muitos países pobres, sobretudo na África, têm falta de água.",
            "A energia faz funcionar as fábricas, as máquinas e os transportes.",
            "À medida que o mundo se desenvolve, a procura de energia continua a aumentar.",
            "Os mapas mostram que a comida, a água e a energia estão repartidas de maneira muito desigual.",
            "Os países de rendimento/renda alto têm mais; os de rendimento/renda baixo têm menos."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "kayd ama sahay wax ah oo qiime ama ujeeddo leh",
            "in aadan cunto ku filan helin si aad caafimaad u sii yeelato",
            "cunto aan dheelli tirneyn oo macdan iyo fitamiino ka maqan yihiin",
            "inta wax ah oo dadku isticmaalaan",
            "horumarka dal ee korodhka dhaqaale, tignoolajiyada iyo nabadgelyada dadka",
            "marka waxyaalo si siman loo qaybin"
          ],
          "passage": [
            "Kheyraad waa kayd ama sahay wax ah oo qiime ama ujeeddo leh.",
            "Saddexda kheyraad ee ugu muhiimsan waa cunto, biyo iyo tamar.",
            "Dal wuxuu u baahan yahay sahay wanaagsan oo saddexdaas oo dhan si uu u horumaro.",
            "Ururka Caafimaadka Adduunka wuxuu leeyahay qof kastaa wuxuu u baahan yahay 2000 ilaa 2400 kaloori maalintii.",
            "In ka badan hal bilyan oo qof waxay helaan wax ka yar tan, nafaqo-darrona way qabaan.",
            "Laba bilyan oo qof kalena waxay qabaan nafaqo-darro, oo ay ka maqan yihiin macdan iyo fitamiino.",
            "Biyo waxaa loo baahan yahay cabbitaan, beeridda dalagga iyo samaynta tamarta.",
            "Roobka iyo cimiladu way kala duwan yihiin, markaa dalal faqiir ah oo badan, gaar ahaan Afrika, biyo ayay ka yar yihiin.",
            "Tamartu waxay shaqaajisaa warshadaha, mishiinnada iyo gaadiidka.",
            "Marka dunidu horumarto, baahida tamarta way sii kordhaysaa.",
            "Khariidadaha waxay muujiyaan in cuntada, biyaha iyo tamarta si aan siman ahayn loo qaybsan yahay.",
            "Dalalka dakhligooda sare leh waxay haystaan inta ugu badan; dalalka dakhligooda hooseeyana inta ugu yar."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "запас або постачання чогось, що має цінність або призначення (resource)",
            "той, хто не отримує достатньо їжі, щоб бути здоровим (malnourished)",
            "погано збалансоване харчування, у якому брак мінералів і вітамінів (malnutrition)",
            "кількість чогось, що люди використовують (consumption)",
            "поступ країни в економічному зростанні, технологіях і добробуті людей (development)",
            "коли речі розподілені не рівно (inequality)"
          ],
          "passage": [
            "Ресурс (resource) — це запас або постачання чогось, що має цінність або призначення.",
            "Три найважливіші ресурси — це їжа, вода й енергія.",
            "Країні потрібне добре постачання всіх трьох, щоб розвиватися.",
            "Всесвітня організація охорони здоров’я каже, що кожній людині потрібно від 2000 до 2400 калорій на день.",
            "Понад один мільярд людей отримує менше за це й недоїдає.",
            "Ще два мільярди людей мають погане харчування, у якому брак мінералів і вітамінів.",
            "Вода потрібна для пиття, для вирощування врожаю і для виробництва енергії.",
            "Опади і клімат різні, тому багатьом бідним країнам, особливо в Африці, бракує води.",
            "Енергія живить фабрики, машини і транспорт.",
            "Що більше світ розвивається, то більше зростає попит на енергію.",
            "Карти показують, що їжа, вода й енергія розподілені дуже нерівномірно.",
            "Країни з високим доходом мають найбільше; країни з низьким доходом — найменше."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "کسی ایسی چیز کا ذخیرہ یا رسد جس کی قیمت یا کوئی مقصد ہو (resource)",
            "صحت مند رہنے کے لیے کافی خوراک نہ ملنا (malnourished)",
            "ایسی غیر متوازن غذا جس میں معدنیات اور وٹامن کم ہوں (malnutrition)",
            "لوگ کسی چیز کی کتنی مقدار استعمال کرتے ہیں (consumption)",
            "کسی ملک کی معاشی بڑھوتری، ٹیکنالوجی اور لوگوں کی فلاح میں ترقی (development)",
            "جب چیزیں برابری سے نہ بانٹی جائیں (inequality)"
          ],
          "passage": [
            "resource کسی ایسی چیز کا ذخیرہ یا رسد ہے جس کی قیمت یا کوئی مقصد ہو۔",
            "تین سب سے اہم resources خوراک، پانی اور توانائی ہیں۔",
            "ترقی کے لیے ملک کو تینوں کی اچھی رسد چاہیے۔",
            "عالمی ادارۂ صحت کہتا ہے کہ ہر فرد کو روز 2000 سے 2400 کیلریاں چاہیے۔",
            "ایک ارب سے زیادہ لوگوں کو اس سے کم ملتا ہے اور وہ malnourished ہیں۔",
            "مزید دو ارب لوگوں کو malnutrition ہے، یعنی ایسی غذا جس میں معدنیات اور وٹامن کم ہیں۔",
            "پانی پینے، فصلیں اگانے اور توانائی بنانے کے لیے چاہیے۔",
            "بارش اور climate جگہ جگہ مختلف ہیں، اس لیے بہت سے غریب ملکوں میں، خاص کر افریقہ میں، پانی کم ہے۔",
            "توانائی کارخانے، مشینیں اور آمد و رفت چلاتی ہے۔",
            "دنیا ترقی کرتی جا رہی ہے، اس لیے توانائی کی طلب بڑھتی جا رہی ہے۔",
            "نقشے دکھاتے ہیں کہ خوراک، پانی اور توانائی بہت غیر برابری سے بٹی ہوئی ہیں۔",
            "اونچی آمدنی والے ملکوں کے پاس سب سے زیادہ ہے؛ کم آمدنی والے ملکوں کے پاس سب سے کم۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What is a resource?",
          paragraphs: [
            "Ask a class to name five natural resources and you will hear gold, oil, wood, fish and coal before anyone says bread or tap water. Yet a resource is simply a stock or supply of something that has a value or a purpose, and the three that matter most to every country are food, water and energy. Without adequate supplies of these three, a country cannot develop: its people cannot stay healthy, its farms cannot grow crops and its factories cannot run.",
            "Because resources can run out, they have to be looked after. Resource management means the control and monitoring of resources so that they do not become exhausted. Some resources are renewable: they cannot be used up, like wind, solar and tidal energy. Others, like coal, oil and gas, are finite, so every tonne burnt is a tonne gone.",
            "Development means how far a country has come in economic growth, in its use of technology and in the welfare of its people. Resources and development are tied together. A country with reliable food, clean water and affordable energy can build schools, hospitals and industries; a country without them spends its effort just getting by."
          ],
          tip: "Learn the definition word for word: a resource is a stock or supply of something that has a value or a purpose. Examiners give the mark for the idea of a supply with a use."
        },
        {
          heading: "Food: calories and nutrients",
          paragraphs: [
            "The World Health Organisation suggests that a person needs between 2000 and 2400 calories a day. More than a billion people get less than that, and are described as malnourished: they simply do not take in enough food to sustain a healthy life. Another two billion live with malnutrition, which is a different problem. Malnutrition is a poorly balanced diet lacking in minerals and vitamins, so a person can be eating plenty of calories and still lack the nutrients their body needs.",
            "Both problems damage health. Too few calories leaves people weak and children unable to grow properly. A poor balance of nutrients can bring on illnesses and diseases of many kinds, and obesity too, because cheap filling food is often the food that lacks vitamins. When you are asked to explain the difference between the two terms, make the contrast clear: one is about the amount of food, the other is about its quality."
          ],
          tip: "Malnourishment is about quantity (too few calories). Malnutrition is about quality (the wrong balance of nutrients). Keep the two apart in your answers."
        },
        {
          heading: "Water and energy",
          paragraphs: [
            "People and animals must have water to drink, and so must crops, which means the food supply depends on it. Water is also an important source of power for making energy, as you will see when you meet hydro-electric power later in the unit. As the global population grows, more people face a shortage of water. The imbalance comes mainly from differences in climate and rainfall: some parts of the world get far more rain than others. Many of the world's poorest countries are short of water, and a great many of those are in Africa.",
            "Economic development runs on energy. It drives factories and machinery, fuels transport, and lights and heats homes, offices and schools. Countries once relied on whatever energy lay inside their own borders. That is no longer the case: countries buy and sell energy to each other, so a country short of oil can import it, and a country with more gas than it needs can sell the surplus. As the world develops, the demand for energy keeps increasing.",
            "Put the three together and you see why this unit is called a challenge. The world has to feed, water and power a growing population from supplies that are limited, unevenly spread and, in the case of fossil fuels, running down."
          ],
          tip: "Water has three jobs in this unit: drinking, growing food and making energy. Name all three when a question asks why water is important."
        },
        {
          heading: "Describing the global pattern",
          paragraphs: [
            "In class you shaded three world maps: the countries that are most and least malnourished, the countries where water is most and least scarce, and the countries with the highest and lowest energy consumption. The same pattern appears on all three. High-income countries (HICs) have the least malnourishment, the least water scarcity and the highest energy consumption. Low-income countries (LICs) have the most malnourishment, the most water scarcity and the lowest energy consumption. The distribution of each resource is uneven.",
            "A six-mark describe question wants more than one sentence. The lesson gave you a structure: General, Specific, Anomaly. Start with the general pattern (most malnourished countries are low-income countries). Then give specific examples from the map, naming a continent and a country. Finish with an anomaly, an exception to the pattern, because spotting one shows you have looked closely rather than guessed. Comparing two places (a high-income example against a low-income one) lifts an answer into the top band.",
            "The lesson's maths skill asked you to work out a percentage increase from a graph of global energy consumption. The method is the same whatever the numbers: find the increase, divide it by the original value, and multiply by 100."
          ],
          worked: {
            q: "A graph shows that a region's energy consumption rose from 5000 units in 1970 to 9000 units in 2012. Calculate the percentage increase.",
            steps: [
              "Find the increase: 9000 − 5000 = 4000 units.",
              "Divide the increase by the ORIGINAL value, the 1970 figure: 4000 ÷ 5000 = 0.8.",
              "Multiply by 100 to turn it into a percentage: 0.8 × 100 = 80 %.",
              "Check it makes sense: 9000 is nearly double 5000, so an increase of a bit less than 100 % is right."
            ],
            answer: "80 % increase",
            checks: [{ expr: "(9000-5000)/5000*100", value: 80, tol: 0 }]
          },
          tip: "Percentage increase is always measured against the ORIGINAL (earlier) value, never the new one."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which three resources did the lesson call the most important for a country to develop?", options: ["Food, water and energy", "Gold, oil and diamonds", "Land, sunshine and coal", "Wood, iron and fish"], answer: 0, why: "A resource is a stock or supply of something with a value or purpose; food, water and energy are the three that every country needs adequate supplies of in order to develop.",
          feedback: [
            "",
            "Gold, oil and diamonds are valuable resources, and oil is a source of energy, but the lesson picked the three that every person needs to live: food, water and energy.",
            "Land, sunshine and coal appeared in the conflict lesson's card sort, not as the three most important resources. The lesson named food, water and energy.",
            "Wood, iron and fish are useful resources, but they are not the three the lesson called essential for development. Those are food, water and energy."
          ] },
        { kind: "numeric", q: "The World Health Organisation suggests a person needs between 2000 and how many calories a day?", answer: 2400, tolerance: 0, units: "calories", check: "CAL_HIGH", why: "The WHO figure in the lesson is 2000 to 2400 calories a day. People who get less than this are described as malnourished.",
          misconceptions: [
            { answer: 2000, says: "2000 is the lower end of the range. The question asks for the upper figure, which is 2400 calories a day.", check: "CAL_LOW" },
            { answer: 240, says: "A zero has gone missing. Nobody could live on 240 calories a day; the WHO upper figure is 2400.", check: "CAL_HIGH/10" },
            { answer: 4400, says: "You have added the two ends of the range together. The range is 2000 to 2400 calories, so the upper figure is 2400.", check: "CAL_LOW+CAL_HIGH" }
          ] },
        { kind: "gap", q: "A person whose diet is poorly balanced and lacks minerals and vitamins suffers from ___.", answer: "malnutrition", options: ["malnutrition", "malnourishment", "development"], why: "Malnutrition is about the quality of the diet: a poor balance of nutrients. Malnourishment is about quantity: too few calories.",
          feedback: {
            "malnourishment": "Malnourishment means a food intake below what is needed, so it is about too few calories. A diet that lacks minerals and vitamins is a problem of balance, which the lesson calls malnutrition.",
            "development": "Development is the progress of a country in economic growth, technology and welfare; it is not a condition a person suffers from. A diet lacking minerals and vitamins is malnutrition."
          } }
      ],
      modules: [
        {
          title: "The first four key words",
          task: {
            kind: "match",
            q: "Match each key word to its meaning.",
            pairs: [
              ["Resource", "A stock or supply of something that has a value or a purpose"],
              ["Resource management", "Controlling and monitoring resources so that they do not become exhausted"],
              ["Renewable energy", "A source of energy that cannot be exhausted, such as wind, solar or tidal power"],
              ["Development", "The progress of a country in economic growth, the use of technology and human welfare"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the word you know best. A resource is a supply of something useful.",
                "Management means looking after something. Which meaning is about looking after resources?",
                "Renewable means it can be renewed, so it never runs out. Which meaning says that?",
                "The meaning left over is about a whole country making progress."
              ],
              example: {
                q: "Match: finite resource, consumption. Choices: the amount of a resource that people use; a resource that will run out one day, such as coal.",
                steps: ["Finite means limited, so it is the one that runs out.", "Consumption comes from consume, to use up."],
                answer: "Finite resource: a resource that will run out one day, such as coal. Consumption: the amount of a resource that people use."
              }
            },
            core: { hint: "Two of the meanings are about resources themselves, one is about looking after them, and one is about a country." },
            stretch: { extend: "Explain, in two sentences, why good resource management is more urgent for finite resources than for renewable ones." }
          },
          explain: "Say, in one sentence, why a country's development depends on its resources.",
          why: "A resource is a stock or supply with a value or purpose; resource management keeps resources from being exhausted; renewable energy such as wind, solar and tidal cannot be used up; development is a country's progress in economic growth, technology and human welfare."
        },
        {
          title: "Working out a percentage increase",
          task: {
            kind: "numeric",
            q: "A graph of global energy consumption shows 5000 units in 1970 and 9000 units in 2012. What is the percentage increase from 1970 to 2012?",
            answer: 80, tolerance: 0, units: "%", check: "(9000-5000)/5000*100",
            why: "Increase = 9000 − 5000 = 4000. Divide by the original value: 4000 ÷ 5000 = 0.8. Multiply by 100: an 80 % increase.",
            misconceptions: [
              { answer: 4000, says: "4000 is the increase in units, not the percentage increase. Divide it by the original 5000 and multiply by 100 to get 80 %.", check: "9000-5000" },
              { answer: 44, says: "You divided the increase by the NEW value (4000 ÷ 9000). Percentage increase is measured against the original value: 4000 ÷ 5000 × 100 = 80 %.", check: "round((9000-5000)/9000*100)" },
              { answer: 180, says: "9000 ÷ 5000 × 100 = 180 % tells you the new value is 180 % of the old one. The INCREASE is the extra 80 %.", check: "9000/5000*100" }
            ]
          },
          contexts: [
            { label: "Energy consumption", q: "A graph of a country's energy consumption shows 5000 units in 1970 and 9000 units in 2012. By what percentage did consumption increase between 1970 and 2012?", check: "(9000-5000)/5000*100" },
            { label: "Water use", q: "A town's water use rose from 5000 cubic metres a day in 1970 to 9000 cubic metres a day in 2012. What was the percentage increase?", check: "(9000-5000)/5000*100" },
            { label: "Food imports", q: "A country imported 5000 tonnes of fruit in 1970 and 9000 tonnes in 2012. What is the percentage increase in fruit imports?", check: "(9000-5000)/5000*100" }
          ],
          levels: {
            support: {
              steps: [
                "Subtract to find the increase: new value − old value.",
                "Divide the increase by the OLD (1970) value.",
                "Multiply by 100 to make it a percentage.",
                "Sanity check: if the new value is nearly double, the increase should be nearly 100 %."
              ],
              example: {
                q: "Water use per house rose from 200 litres a day to 250 litres a day. What is the percentage increase?",
                steps: ["Increase: 250 − 200 = 50 litres.", "Divide by the original: 50 ÷ 200 = 0.25.", "Multiply by 100: 25 %."],
                answer: "25 % increase",
                checks: [{ expr: "(250-200)/200*100", value: 25, tol: 0 }]
              }
            },
            core: { hint: "Increase ÷ original × 100. The original is the earlier year." },
            stretch: { extend: "The lesson's own figure for water use per house was a 70 % rise over 30 years. If a house used 100 litres a day 30 years ago, how much does it use now? Then explain why the real figures in a graph need the same method." }
          },
          explain: "Say, in one sentence, why you divide by the 1970 figure and not the 2012 figure.",
          why: "Percentage increase compares the change with where you started. 4000 extra units on an original 5000 is 0.8 of the original, which is 80 %."
        },
        {
          title: "Describing global inequality",
          task: {
            kind: "written",
            q: "Using the world maps you studied, describe how the supply and consumption of ONE resource (food, water or energy) differs between high-income and low-income countries. (6 marks)",
            marks: 6,
            criteria: [
              "States the general pattern: the resource is unevenly distributed, with HICs having more and LICs having less",
              "Gives at least one specific example, naming a continent or country from the map",
              "Makes a comparison between a high-income and a low-income example",
              "Identifies an anomaly, an exception to the general pattern",
              "Describes rather than explains: says what the map shows, not why"
            ],
            model: "Energy consumption is unevenly distributed across the world. In general, high-income countries consume the most energy per person, while low-income countries consume the least. For example, North America and Europe are shaded as the highest consumers on the choropleth map, whereas most of sub-Saharan Africa falls into the lowest category. Comparing the two, a person in the United States uses many times more energy than a person in a low-income African country. There are anomalies: some oil-producing countries in the Middle East consume very large amounts of energy despite not being among the wealthiest economies, and some large emerging countries such as China now consume a great deal in total even though their consumption per person is lower than in Europe."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: General. Say the resource is unevenly distributed and which kind of country has more.",
                "Sentence 2: Specific. Name a continent and a country at each end of the pattern, using the map.",
                "Sentence 3: Compare. Put a high-income example and a low-income example side by side.",
                "Sentence 4: Anomaly. Name one place that does not fit the pattern.",
                "Check every sentence describes what the map shows. If you have written because, you have slipped into explaining."
              ],
              example: {
                q: "In two sentences, describe the pattern of water scarcity shown on a world map where northern Africa is darkly shaded and northern Europe is pale.",
                steps: ["General pattern first.", "Then a specific example from each end."],
                answer: "Water scarcity is unevenly distributed, with the most scarce areas in low-income regions and the least scarce in high-income regions. For example, northern Africa is shaded as highly scarce, whereas northern Europe is pale, showing little scarcity."
              }
            },
            core: { hint: "General, Specific, Anomaly. Name places from the map and compare an HIC with an LIC." },
            stretch: { extend: "Add a final sentence that EXPLAINS one reason for the pattern you described, and label it clearly so a reader can see where describing ends and explaining begins." }
          },
          explain: "Say, in one sentence, what an anomaly is and why mentioning one earns credit in a describe question.",
          why: "Top answers give the general pattern, name specific places, compare an HIC with an LIC and point out an anomaly, all without drifting into explanation. That is exactly the marking criteria your class used."
        }
      ]
    },

    /* ───────────── 2 · food and water in the UK ───────────── */
    {
      key: "uk-food-and-water", n: 2, title: "Food and water in the UK",
      lead: "Why the UK imports so much of its food and what that costs in food miles and carbon, then the water story: why rainy England still has areas of water stress, and where they are.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "import", means: "to buy goods from another country and bring them in", sentence: "The UK has to import bananas because they will not grow here." },
          { word: "food miles", means: "the distance food travels from where it is grown to the person who eats it", sentence: "Lamb from New Zealand has very high food miles." },
          { word: "carbon footprint", means: "the total greenhouse gases produced by a person's activities", sentence: "Flying food across the world adds to its carbon footprint." },
          { word: "agribusiness", means: "large-scale farming run as a business to produce as much food as possible", sentence: "Agribusiness uses big machines and large fields to grow food cheaply." },
          { word: "water stress", means: "when there is not enough water of good quality to meet demand", sentence: "Much of south-east England suffers from water stress." },
          { word: "water transfer", means: "moving water from an area with too much to an area with too little", sentence: "Water transfer could carry water from the wet north-west to the dry south-east." }
        ],
        passage: [
          "The UK imports about 40 % of the food it eats.",
          "Our climate cannot grow some foods, and people want seasonal food all year round.",
          "People also want more choice and more exotic foods.",
          "Food grown abroad is often cheaper than food grown in the UK.",
          "Imported food travels a long way, so it has high food miles.",
          "Transporting it burns fuel, which adds to our carbon footprint.",
          "England gets a lot of rain, but it also has a lot of people.",
          "In England and Wales there are only 1334 cubic metres of water per person each year.",
          "In southern England there are only 266 cubic metres per person.",
          "The average person in the UK uses 150 litres of water every day.",
          "The north and west have heavy rain and fewer people, so they have a water surplus.",
          "The south and east have less rain and many more people, so they have a water deficit."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "أن تشتري سلعًا من بلد آخر وتُدخلها إلى بلدك (import)",
            "المسافة التي يسافرها الغذاء من مكان زراعته إلى الشخص الذي يأكله (food miles)",
            "مجموع غازات الدفيئة التي تنتجها أنشطة شخص ما (carbon footprint)",
            "زراعة واسعة النطاق تُدار كعمل تجاري لتنتج أكبر قدر من الغذاء (agribusiness)",
            "عندما لا يكون هناك ماء جيّد يكفي لتلبية الطلب (water stress)",
            "نقل الماء من منطقة عندها أكثر من حاجتها إلى منطقة عندها أقلّ (water transfer)"
          ],
          "passage": [
            "تستورد المملكة المتّحدة نحو 40 % من الغذاء الذي تأكله.",
            "فمناخنا لا يصلح لزراعة بعض الأطعمة، والناس يريدون الغذاء الموسمي طوال السنة.",
            "والناس يريدون أيضًا خيارات أكثر وأطعمة أغرب.",
            "والغذاء المزروع في الخارج أرخص غالبًا من الغذاء المزروع في المملكة المتّحدة.",
            "والغذاء المستورد يسافر مسافة طويلة، فأميال غذائه (food miles) كبيرة.",
            "ونقله يحرق الوقود، وهذا يزيد أثرنا الكربوني (carbon footprint).",
            "وإنجلترا يسقط عليها مطر كثير، ولكن فيها أيضًا ناس كثيرون.",
            "وفي إنجلترا وويلز ليس إلّا 1334 مترًا مكعّبًا من الماء لكلّ شخص في السنة.",
            "وفي جنوب إنجلترا ليس إلّا 266 مترًا مكعّبًا لكلّ شخص.",
            "والشخص الوسطي في المملكة المتّحدة يستخدم 150 لترًا من الماء كلّ يوم.",
            "والشمال والغرب يسقط عليهما مطر غزير وفيهما ناس أقلّ، فعندهما فضل من الماء.",
            "والجنوب والشرق يسقط عليهما مطر أقلّ وفيهما ناس أكثر كثيرًا، فعندهما عجز في الماء."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "kupować towary z innego kraju i przywozić je do siebie",
            "odległość, jaką jedzenie przebywa od miejsca uprawy do człowieka, który je zje (food miles)",
            "wszystkie gazy cieplarniane powstałe przez to, co robi dana osoba (carbon footprint)",
            "rolnictwo na wielką skalę, prowadzone jak firma, żeby wyprodukować jak najwięcej jedzenia (agribusiness)",
            "sytuacja, w której nie ma dość wody dobrej jakości, żeby zaspokoić zapotrzebowanie (water stress)",
            "przesyłanie wody z obszaru, gdzie jest jej za dużo, do obszaru, gdzie jest jej za mało (water transfer)"
          ],
          "passage": [
            "Zjednoczone Królestwo sprowadza z zagranicy około 40 % jedzenia, które zjada.",
            "W naszym klimacie niektóre produkty nie wyrosną, a ludzie chcą sezonowego jedzenia przez cały rok.",
            "Ludzie chcą też większego wyboru i bardziej egzotycznych produktów.",
            "Jedzenie uprawiane za granicą jest często tańsze niż uprawiane w Zjednoczonym Królestwie.",
            "Sprowadzane jedzenie przebywa długą drogę, więc ma wysokie food miles.",
            "Przewożenie go spala paliwo, co powiększa nasz ślad węglowy (carbon footprint).",
            "W Anglii pada dużo deszczu, ale mieszka tam też dużo ludzi.",
            "W Anglii i Walii jest tylko 1334 metry sześcienne wody na osobę w roku.",
            "W południowej Anglii jest tylko 266 metrów sześciennych na osobę.",
            "Przeciętny mieszkaniec Zjednoczonego Królestwa zużywa 150 litrów wody na dobę.",
            "Północ i zachód mają obfite opady i mniej ludzi, więc mają nadwyżkę wody.",
            "Południe i wschód mają mniej deszczu i o wiele więcej ludzi, więc mają niedobór wody."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "comprar produtos de outro país e trazê-los para dentro (import, importar)",
            "a distância que a comida viaja de onde é cultivada até à pessoa que a come (food miles)",
            "o total de gases com efeito de estufa produzidos pelas atividades de uma pessoa (carbon footprint, pegada de carbono)",
            "agricultura em grande escala, feita como negócio para produzir o máximo de comida possível (agribusiness, agronegócio)",
            "quando não há água de boa qualidade em quantidade suficiente para a procura (water stress)",
            "levar água de uma área com demasiada para uma área com pouca (water transfer, transferência de água)"
          ],
          "passage": [
            "O Reino Unido importa cerca de 40 % da comida que come.",
            "O nosso clima não permite cultivar alguns alimentos, e as pessoas querem comida de estação durante todo o ano.",
            "As pessoas também querem mais escolha e alimentos mais exóticos.",
            "A comida cultivada no estrangeiro é muitas vezes mais barata do que a comida cultivada no Reino Unido.",
            "A comida importada viaja muito, por isso tem muitas food miles.",
            "Transportá-la queima combustível, o que aumenta a nossa pegada de carbono.",
            "A Inglaterra tem muita chuva, mas também tem muitas pessoas.",
            "Na Inglaterra e no País de Gales há só 1334 metros cúbicos de água por pessoa por ano.",
            "No sul de Inglaterra há só 266 metros cúbicos por pessoa.",
            "Em média, cada pessoa no Reino Unido usa 150 litros de água por dia.",
            "O norte e o oeste têm chuva forte e menos pessoas, por isso têm excedente de água.",
            "O sul e o leste têm menos chuva e muito mais pessoas, por isso têm défice/déficit de água."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "inaad badeeco dal kale ka iibsato oo gudaha soo gelisa",
            "masaafada cuntadu ka safarto meesha lagu beeray ilaa qofka cunaya",
            "wadarta gaasaska kulaylka xanniba ee ka dhasha waxyaalaha qof sameeyo",
            "beerid baaxad weyn leh oo sida ganacsi loo wado si cunto badan loo soo saaro",
            "marka biyo tayo leh oo ku filan la waayo si baahida loo buuxiyo",
            "u raridda biyaha meel ay ka badan yihiin ilaa meel ay ka yar yihiin"
          ],
          "passage": [
            "Boqortooyada Midowday waxay dibadda ka soo dejisaa qiyaastii 40 % cuntada ay cunto.",
            "Cimiladeennu cuntooyin qaar ma beeri karto, dadkuna waxay rabaan cunto xilliyeed sanadka oo dhan.",
            "Dadku sidoo kale waxay rabaan doorasho badan iyo cuntooyin yaab leh.",
            "Cuntada dibadda lagu beeray inta badan way ka jaban tahay cuntada Boqortooyada Midowday lagu beeray.",
            "Cuntada la soo dejiyay waxay safartaa masaafo dheer, markaa food miles sare ayay leedahay.",
            "Guridduna shidaal ayay gubtaa, taasoo carbon footprint-keenna kordhisa.",
            "England roob badan ayay heshaa, laakiin sidoo kale dad badan ayay leedahay.",
            "England iyo Wales waxaa jira 1334 mitir kuyuub oo biyo keliya qofkii sanadkii.",
            "Koonfurta England waxaa jira 266 mitir kuyuub oo keliya qofkii.",
            "Qofka caadiga ah ee Boqortooyada Midowday wuxuu isticmaalaa 150 litir biyo maalin kasta.",
            "Waqooyiga iyo galbeedka roob badan ayay leeyihiin oo dad yar, markaa biyo dheeraad ah ayay leeyihiin.",
            "Koonfurta iyo bariga roob yar ayay leeyihiin oo dad aad u badan, markaa biyo yaraan ayay leeyihiin."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "купувати товари в іншій країні і привозити їх до себе (import)",
            "відстань, яку їжа проїжджає від місця, де її вирощено, до людини, яка її їсть (food miles)",
            "усі парникові гази, утворені через діяльність однієї людини (carbon footprint)",
            "велике господарство, яке ведуть як бізнес, щоб виробити якнайбільше їжі (agribusiness)",
            "коли води доброї якості не досить, щоб задовольнити попит (water stress)",
            "перекидання води з району, де її надто багато, до району, де її надто мало (water transfer)"
          ],
          "passage": [
            "Об’єднане Королівство ввозить приблизно 40 % їжі, яку їсть.",
            "Наш клімат не дає вирощувати деякі продукти, а люди хочуть сезонної їжі цілий рік.",
            "Люди також хочуть більшого вибору і більше екзотичної їжі.",
            "Їжа, вирощена за кордоном, часто дешевша за їжу, вирощену в Об’єднаному Королівстві.",
            "Привезена їжа проїжджає довгий шлях, тому вона має високі food miles.",
            "Її перевезення спалює пальне, що збільшує наш вуглецевий слід (carbon footprint).",
            "В Англії багато дощу, але там також багато людей.",
            "В Англії й Уельсі на людину припадає лише 1334 кубічні метри води на рік.",
            "У південній Англії — лише 266 кубічних метрів на людину.",
            "Середня людина в Об’єднаному Королівстві використовує 150 літрів води щодня.",
            "На півночі й заході сильні дощі й менше людей, тому там надлишок води.",
            "На півдні й сході менше дощу і значно більше людей, тому там дефіцит води."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "کسی دوسرے ملک سے سامان خرید کر اپنے ملک میں لانا (import)",
            "خوراک اگنے کی جگہ سے کھانے والے تک جتنا فاصلہ طے کرتی ہے (food miles)",
            "کسی فرد کے کاموں سے پیدا ہونے والی کل greenhouse gases (carbon footprint)",
            "بڑے پیمانے کی کھیتی جو کاروبار کی طرح چلائی جائے تاکہ زیادہ سے زیادہ خوراک پیدا ہو (agribusiness)",
            "جب طلب پوری کرنے کے لیے اچھے معیار کا پانی کافی نہ ہو (water stress)",
            "پانی کو اس علاقے سے، جہاں زیادہ ہے، اُس علاقے میں لے جانا جہاں کم ہے (water transfer)"
          ],
          "passage": [
            "برطانیہ اپنی خوراک کا تقریباً 40 % باہر سے import کرتا ہے۔",
            "ہمارا climate کچھ خوراکیں اگا نہیں سکتا، اور لوگ موسمی خوراک سارا سال چاہتے ہیں۔",
            "لوگ زیادہ انتخاب اور زیادہ انوکھی خوراکیں بھی چاہتے ہیں۔",
            "باہر اگائی ہوئی خوراک اکثر برطانیہ میں اگائی ہوئی خوراک سے سستی ہوتی ہے۔",
            "import کی ہوئی خوراک لمبا سفر کرتی ہے، اس لیے اس کے food miles زیادہ ہوتے ہیں۔",
            "اسے لانے میں ایندھن جلتا ہے، جس سے ہمارا carbon footprint بڑھتا ہے۔",
            "انگلینڈ میں بارش بہت ہوتی ہے، مگر لوگ بھی بہت ہیں۔",
            "انگلینڈ اور ویلز میں ہر فرد کے لیے سال میں صرف 1334 مکعب میٹر پانی ہے۔",
            "جنوبی انگلینڈ میں ہر فرد کے لیے صرف 266 مکعب میٹر ہے۔",
            "برطانیہ میں ایک عام فرد روز 150 لیٹر پانی استعمال کرتا ہے۔",
            "شمال اور مغرب میں تیز بارش اور لوگ کم ہیں، اس لیے وہاں پانی زیادہ (surplus) ہے۔",
            "جنوب اور مشرق میں بارش کم اور لوگ بہت زیادہ ہیں، اس لیے وہاں پانی کی کمی (deficit) ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Why does the UK import so much food?",
          paragraphs: [
            "Open your fridge and read the labels. Prawns, bananas, blueberries, mangoes, rice: a great deal of what the UK eats was grown or caught somewhere else. The UK imports about 40 % of its food each year, and the lesson gave five linked reasons. The UK climate cannot grow some foods at all, and cannot grow others for most of the year. Shoppers demand seasonal produce all year round, so strawberries arrive in December from countries where it is summer. Shoppers also demand greater choice and more exotic foods than British farms can offer. Many foods are produced more cheaply abroad, where land, labour or sunshine is cheaper, and UK-produced food can be expensive by comparison.",
            "Where does it come from? The lesson's table of UK food imports by region shows that 55 % comes from the European Union's fifteen older member states (the EU15) and 8 % from the rest of Europe, so Europe supplies 63 % of the total. Latin America and the Caribbean send 27 %, Asia and Oceania 5 %, North America 3 %, and the Middle East and North Africa and sub-Saharan Africa 1 % each. Our food, in other words, mostly comes from near neighbours, with one big exception on the far side of the Atlantic.",
            "The UK also tries to grow more of its own. Agribusiness means farming run strictly as a commercial business: large, intensive, mechanised farms set up to produce as much food as they can. Organic farming takes the opposite approach, producing food without chemicals such as fertilisers and pesticides. Both are UK responses to the food challenge, and a question may ask you to weigh them against each other."
          ],
          tip: "Five reasons for importing: climate, seasonal demand, choice and exotic foods, cheaper abroad, expensive at home. Link each one to WHY we need or choose to import, as the lesson asked."
        },
        {
          heading: "Food miles and carbon footprint",
          paragraphs: [
            "Food miles are the distances travelled by food imported into the UK, from where it is produced to where it is eaten. The lesson's examples show how far apart those two places can be: tomatoes from Spain travel about 1,000 food miles; beans from Canada about 3,600; garlic from Argentina about 7,400; and lamb from New Zealand about 18,500 food miles, nearly half way round the world. Geographers show these journeys on a flow line map: lines join the origin and the destination of goods or people, and the width of each line is proportional to the amount moved. A good flow line map has a title, a key, a compass direction and clearly drawn flows.",
            "Food miles matter because moving food burns fuel. A carbon footprint is the total amount of greenhouse gases produced, directly and indirectly, to support a person's activities, usually expressed in tonnes of carbon dioxide. Every lorry, ship and aeroplane that carries food adds to the footprint of the person who eats it, so high food miles usually mean a higher carbon footprint. That is the link the end-of-unit revision list asks you to explain.",
            "This is also why locally produced food is argued over. Buying from local growers cuts food miles and supports local farms, but local food can cost more, may only be available in season, and a heated British greenhouse can produce more carbon than a sunny field abroad. Weigh both sides when a question asks about local food."
          ],
          worked: {
            q: "Lamb from New Zealand travels about 18,500 food miles and tomatoes from Spain about 1,000. How many times further does the lamb travel?",
            steps: [
              "The question asks how many TIMES further, so divide, do not subtract.",
              "Divide the longer distance by the shorter: 18,500 ÷ 1,000.",
              "18,500 ÷ 1,000 = 18.5.",
              "Answer in a sentence: the lamb travels about 18.5 times further than the tomatoes."
            ],
            answer: "About 18.5 times further",
            checks: [{ expr: "NZ_LAMB_MILES/SPAIN_TOMATO_MILES", value: 18.5, tol: 0 }]
          },
          tip: "Times further means divide; how much further means subtract. Read the question twice."
        },
        {
          heading: "The water story in England",
          paragraphs: [
            "It can seem as though it never stops raining in the UK, so it is a surprise to learn that England is short of water. In England and Wales there are only 1334 cubic metres of water available per person per year, about half the amount that hotter countries such as Spain have. In southern England, where most people live, the figure is only 266 cubic metres per person. Rain is not the whole story: what matters is how much water there is for each person who needs it.",
            "Demand has risen sharply. The amount of water used per house in England and Wales has risen by 70 % over the last 30 years. One reason is appliances: only 66 % of households owned a washing machine in 1972, but by 2010 the figure was 94 %. Most of the water goes on washing and on flushing the toilet; the rest on drinking, cooking, the car and the garden. The average person in the UK currently uses 150 litres of water every day; the lesson's comparison figure for someone in Africa is 47 litres a day, less than a third as much."
          ],
          tip: "Two numbers for England and Wales: 1334 cubic metres of water per person per year, and 150 litres used per person per day. Know which is supply and which is use."
        },
        {
          heading: "Water surplus and deficit: north and west against south and east",
          paragraphs: [
            "Water stress happens when the amount of water available is not enough to meet demand, or is of poor quality. Differences in the distribution of rainfall and of population lead to areas of deficit and surplus. Areas of water deficit do not have enough rainfall or water for the people who live there; areas of water surplus have more water than they need. A choropleth map of water stress, with counties shaded by level, shows the pattern clearly.",
            "The north and west of the UK have a water surplus. They receive heavy rainfall; their mountains and rivers make good sites for dams and reservoirs; they have natural lakes; and less of the population lives there, even though there are some relatively large cities and industries. The south and east have a water deficit. They receive less rain; higher summer temperatures mean more evaporation and transpiration; more of the population lives there at higher densities, in a greater number of larger cities such as London and Reading; and agriculture makes greater demands on water to irrigate crops.",
            "The county table from the lesson matches this. Serious water stress is found across the south and east: London, Kent, Essex, Surrey, Sussex, Hampshire, Berkshire, Oxfordshire, Buckinghamshire, Bedfordshire, Hertfordshire and Cambridgeshire. Low water stress is found in the north and west: Cumbria, Lancashire, Northumberland, Durham, Yorkshire, Cheshire, Devon, Dorset, Wiltshire, and Avon and Somerset. Humberside is listed as low as well, and it is worth naming as an anomaly, because it sits on the east coast. A band of moderate stress runs through the Midlands and East Anglia, and Cornwall and the Greater Manchester and Merseyside area are moderate too. One answer to the imbalance is water transfer: matching supply with demand by moving water from an area with a surplus to an area with a deficit."
          ],
          tip: "Explain water stress with a chain: less rain + hotter summers + more people + big cities + irrigated farms = demand greater than supply."
        }
      ],
      gate: [
        { kind: "numeric", q: "About what percentage of its food does the UK import each year?", answer: 40, tolerance: 0, units: "%", check: "FOOD_IMPORT_PCT", why: "The lesson's headline figure: the UK imports about 40 % of its food per year.",
          misconceptions: [
            { answer: 60, says: "60 % would be the share the UK grows itself if 40 % is imported. The question asks for the imported share, which is 40 %.", check: "100-FOOD_IMPORT_PCT" },
            { answer: 4, says: "A zero has gone missing. The UK imports about 40 % of its food, not 4 %.", check: "FOOD_IMPORT_PCT/10" },
            { answer: 55, says: "55 % is the share of our IMPORTS that comes from the EU15 countries, not the share of our food that is imported. That figure is 40 %.", check: "EU15_PCT" }
          ] },
        { kind: "mcq", q: "Which of these is a reason the lesson gave for the UK importing so much food?", options: ["Demand for seasonal produce all year round", "The UK has no farmland of its own", "Imported food always has lower food miles", "British farms are not allowed to grow fruit"], answer: 0, why: "Shoppers want strawberries in December, so food is imported from countries where it is in season. The other reasons were climate, choice and exotic foods, cheaper production abroad and expensive UK food.",
          feedback: [
            "",
            "The UK has a great deal of farmland and grows about 60 % of its own food. The reasons for importing were about climate, demand and cost, such as wanting seasonal produce all year round.",
            "Imported food has HIGHER food miles, not lower, because it travels further. The reasons for importing were about climate, demand and cost, such as wanting seasonal produce all year round.",
            "British farms grow plenty of fruit; nothing bans them. The lesson's reasons were climate, demand for seasonal produce all year, choice and exotic foods, cheaper production abroad and expensive UK food."
          ] },
        { kind: "gap", q: "Areas of water ___ have more water than they need.", answer: "surplus", options: ["surplus", "deficit", "stress"], why: "Surplus means extra. Areas of surplus, like the north and west of the UK, have more water than the people living there need.",
          feedback: {
            "deficit": "A deficit is a shortage, when demand is greater than supply. An area with more water than it needs has the opposite: a surplus.",
            "stress": "Water stress is when there is not enough water of good quality to meet demand, so it describes shortage, not plenty. An area with more water than it needs has a surplus."
          } }
      ],
      modules: [
        {
          title: "Reading the imports table",
          task: {
            kind: "numeric",
            q: "The UK's food imports table shows 55 % coming from the EU15 countries and 8 % from the rest of Europe. What percentage of the UK's food imports comes from Europe as a whole?",
            answer: 63, tolerance: 0, units: "%", check: "EU15_PCT+REST_EUROPE_PCT",
            why: "Europe as a whole is the EU15 plus the rest of Europe: 55 % + 8 % = 63 %. Nearly two thirds of our imported food comes from our own continent.",
            misconceptions: [
              { answer: 55, says: "55 % is the EU15 countries alone. Europe as a whole also includes the rest of Europe at 8 %, so add them: 55 + 8 = 63 %.", check: "EU15_PCT" },
              { answer: 47, says: "You subtracted 8 from 55. The two rows are both parts of Europe, so they add together: 55 + 8 = 63 %.", check: "EU15_PCT-REST_EUROPE_PCT" },
              { answer: 37, says: "37 % is what is left when you take Europe's 63 % away from 100 %, which is the share from outside Europe. The question asks for Europe's share: 63 %.", check: "100-(EU15_PCT+REST_EUROPE_PCT)" }
            ]
          },
          contexts: [
            { label: "Supermarket report", q: "A supermarket reports that 55 % of the food it imports comes from the EU15 countries and 8 % from the rest of Europe. What percentage of its imports comes from Europe altogether?", check: "EU15_PCT+REST_EUROPE_PCT" },
            { label: "Pie chart", q: "On a pie chart of UK food imports the EU15 slice is labelled 55 % and the rest of Europe slice 8 %. What percentage of the pie is Europe as a whole?", check: "EU15_PCT+REST_EUROPE_PCT" },
            { label: "Flow line map", q: "A flow line map of food imports shows 55 % arriving from the EU15 and 8 % from the rest of Europe. What percentage of the flows start in Europe?", check: "EU15_PCT+REST_EUROPE_PCT" }
          ],
          levels: {
            support: {
              steps: [
                "Find the two rows that are both part of Europe: EU15 and rest of Europe.",
                "Both are parts of the same whole, so add them.",
                "55 + 8.",
                "Check: Europe should be the biggest supplier, so the answer should be more than half."
              ],
              example: {
                q: "The same table shows 3 % from North America and 27 % from Latin America and the Caribbean. What percentage comes from the Americas as a whole?",
                steps: ["Both rows are parts of the Americas.", "Add them: 27 + 3 = 30 %."],
                answer: "30 %",
                checks: [{ expr: "LATAM_PCT+N_AMERICA_PCT", value: 30, tol: 0 }]
              }
            },
            core: { hint: "Europe as a whole means every row that is in Europe. There are two." },
            stretch: { extend: "The seven regions in the table add up to 100 %. Check this, then explain why food from Latin America (27 %) adds much more to the UK's carbon footprint than the same amount of food from the EU15." }
          },
          explain: "Say, in one sentence, why you add the two European rows rather than choosing the bigger one.",
          why: "The EU15 (55 %) and the rest of Europe (8 %) are both parts of Europe, so Europe as a whole supplies 63 % of the UK's imported food."
        },
        {
          title: "Water words",
          task: {
            kind: "match",
            q: "Match each water key word to its meaning.",
            pairs: [
              ["Water stress", "When demand for water is greater than the amount available in a period, or poor quality restricts its use"],
              ["Water surplus", "When the supply of water is greater than the demand for it"],
              ["Water deficit", "When the demand for water is greater than the supply"],
              ["Water quality", "Measured by the chemical, physical and biological content of the water"],
              ["Water transfer", "Moving water from an area with a surplus to an area with a deficit"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Surplus means extra; deficit means short. Which meaning says supply is bigger, and which says demand is bigger?",
                "Transfer means move. Which meaning is about moving water?",
                "Quality is about how good something is, so look for the meaning about what is IN the water.",
                "Stress is the broadest word: shortage OR poor quality."
              ],
              example: {
                q: "Match: reservoir, irrigation. Choices: watering crops with water brought from a river or store; an artificial lake built to store water behind a dam.",
                steps: ["A reservoir stores water.", "Irrigation waters crops."],
                answer: "Reservoir: an artificial lake built to store water behind a dam. Irrigation: watering crops with water brought from a river or store."
              }
            },
            core: { hint: "Surplus and deficit are opposites; stress covers both shortage and poor quality; transfer is the solution." },
            stretch: { extend: "Explain why a region could have a water surplus and still suffer water stress. Use the word quality in your answer." }
          },
          explain: "Say, in one sentence, the difference between water deficit and water stress.",
          why: "Surplus and deficit are the two sides of supply against demand; water stress adds the problem of quality; water quality is what the water contains; water transfer moves water from surplus to deficit."
        },
        {
          title: "North and west, or south and east?",
          task: {
            kind: "mcq",
            q: "Which statement describes the north and west of the UK?",
            options: [
              "Heavy rainfall, and mountains and rivers that make good sites for dams and reservoirs",
              "Less rain and higher summer temperatures, so more evaporation and transpiration",
              "More of the population living at higher densities, in larger cities such as London and Reading",
              "Greater demand from agriculture to water crops"
            ],
            answer: 0,
            feedback: [
              "",
              "Less rain and hotter summers describe the south and east, which is why it has a water deficit. The north and west have heavy rainfall and mountains suited to reservoirs.",
              "London and Reading are in the south and east, where population density is high and demand is greatest. The north and west have fewer people and heavy rainfall.",
              "Greater demand from farms to irrigate crops is a south and east factor, adding to its deficit. The north and west are described by heavy rainfall and reservoir-building mountains."
            ]
          },
          contexts: [
            { label: "Cumbria", q: "Cumbria, in north-west England, has low water stress on the choropleth map. Which statement describes its region?" },
            { label: "Northumberland", q: "Northumberland, in the far north-east, is shaded as low water stress. Which statement describes its part of the UK?" },
            { label: "Lancashire", q: "Lancashire, in the north-west, has low water stress. Which statement describes its region?" }
          ],
          explain: "Say, in one sentence, why fewer people plus more rain gives a water surplus.",
          levels: {
            support: {
              steps: [
                "Think about relief: where are the UK's mountains? In the north and west.",
                "Mountains bring heavy rain and give good sites for dams and reservoirs.",
                "Think about people: the big crowded cities, London and Reading, are in the south and east.",
                "Pick the statement with rain and mountains in it."
              ],
              example: {
                q: "Essex, in the south-east, is shaded as serious water stress. Which kind of statement would describe it: heavy rainfall and few people, or less rain and many people?",
                steps: ["Essex is in the south and east.", "The south and east have less rain and more people, so demand is greater than supply."],
                answer: "Less rain and many people: the south and east pattern, which is why Essex has serious water stress."
              }
            },
            core: { hint: "Water surplus comes from more supply (rain, mountains, lakes) and less demand (fewer people)." },
            stretch: { extend: "Explain how a water transfer scheme could use the geography of the north and west to help the south and east, and give one problem it might cause." }
          },
          why: "The north and west have a water surplus because heavy rainfall and mountainous land with rivers supply plenty of water, natural lakes store it, and fewer people live there to demand it. The other three statements describe the south and east and its deficit."
        }
      ]
    },

    /* ───────────── 3 · energy security ───────────── */
    {
      key: "energy-security", n: 3, title: "Energy security and the world's unequal energy",
      lead: "What energy security, surplus and insecurity mean, how the UK's energy mix is changing, how three kinds of map show who produces and consumes the world's energy, and why some countries cannot rely on their supply.",
      covers: [5, 7],
      pretext: {
        words: [
          { word: "energy security", means: "having a reliable, uninterrupted and affordable supply of energy", sentence: "A country with its own gas fields has more energy security." },
          { word: "energy mix", means: "the range of energy sources a country uses and the share of each", sentence: "The UK's energy mix includes gas, nuclear, wind and solar." },
          { word: "choropleth map", means: "a map that shades areas darker where the value is higher", sentence: "The choropleth map shaded the highest energy users dark red." },
          { word: "proportional circle", means: "a circle on a map whose size shows the amount at that place", sentence: "The biggest proportional circle sat over the biggest oil producer." },
          { word: "pictogram", means: "a chart that uses repeated picture symbols, each standing for a fixed amount", sentence: "On the pictogram, each barrel stood for a million barrels of oil a day." },
          { word: "fossil fuel", means: "coal, oil or gas, formed from ancient plants and animals, that releases carbon dioxide when burnt", sentence: "Oil is a fossil fuel that will one day run out." }
        ],
        passage: [
          "Energy security means having a reliable, uninterrupted and affordable supply of energy.",
          "A country has an energy surplus when its supply is greater than its demand.",
          "It has energy insecurity when demand is greater than what it can produce.",
          "A country's energy mix is the range of sources it uses, like gas, coal, nuclear and wind.",
          "The UK's mix has changed over time, and a pie chart shows each source's share.",
          "World energy consumption is unevenly distributed.",
          "A choropleth map shades the biggest consumers darkest.",
          "A proportional circle map draws bigger circles for bigger oil producers.",
          "A pictogram uses barrel symbols, each standing for one million barrels of oil a day.",
          "In 2008 the top five oil consumers were the United States, China, Japan, India and Russia.",
          "Energy insecurity has economic, physical, political and technological causes.",
          "Global energy consumption keeps increasing as the world develops."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "أن يكون لديك مَورد طاقة موثوق لا ينقطع ويمكن تحمّل كلفته (energy security)",
            "أنواع مصادر الطاقة التي يستخدمها البلد ونصيب كلّ منها (energy mix)",
            "خريطة تظلّل المناطق أغمق حيث تكون القيمة أعلى (choropleth map)",
            "دائرة على الخريطة يبيّن حجمها المقدار في ذلك المكان (proportional circle)",
            "رسم يستخدم رموزًا مصوّرة مكرّرة، كلّ رمز يمثّل مقدارًا ثابتًا (pictogram)",
            "الفحم أو النفط أو الغاز، وقد تكوّن من نباتات وحيوانات قديمة، ويُطلق ثاني أكسيد الكربون عند حرقه (fossil fuel)"
          ],
          "passage": [
            "أمن الطاقة (energy security) يعني أن يكون لديك مَورد طاقة موثوق لا ينقطع ويمكن تحمّل كلفته.",
            "وللبلد فضل في الطاقة عندما يكون مَورده أكبر من طلبه.",
            "وعنده انعدام أمن الطاقة عندما يكون الطلب أكبر من قدرته على الإنتاج.",
            "ومزيج الطاقة (energy mix) في البلد هو أنواع المصادر التي يستخدمها، كالغاز والفحم والطاقة النووية والريح.",
            "ومزيج المملكة المتّحدة تغيّر مع الزمن، والرسم الدائري يبيّن نصيب كلّ مصدر.",
            "واستهلاك الطاقة في العالم موزّع توزيعًا غير متساوٍ.",
            "وخريطة التظليل النسبي (choropleth map) تظلّل أكبر المستهلكين أغمق تظليل.",
            "وخريطة الدوائر المتناسبة ترسم دوائر أكبر لمنتجي النفط الأكبر.",
            "والرسم بالصور (pictogram) يستخدم رموز براميل، كلّ رمز يمثّل مليون برميل نفط في اليوم.",
            "وفي 2008 كان أكبر خمسة مستهلكين للنفط هم الولايات المتّحدة والصين واليابان والهند وروسيا.",
            "ولانعدام أمن الطاقة أسباب اقتصادية وطبيعية وسياسية وتقنية.",
            "واستهلاك الطاقة في العالم يزداد كلّما تطوّر العالم."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "posiadanie pewnych, nieprzerwanych i niedrogich dostaw energii (energy security)",
            "zestaw źródeł energii, z których korzysta kraj, i udział każdego z nich (energy mix)",
            "mapa, która ciemniej zamalowuje obszary o wyższej wartości (choropleth map)",
            "kółko na mapie, którego wielkość pokazuje ilość w danym miejscu (proportional circle)",
            "wykres z powtarzanymi obrazkami, z których każdy oznacza stałą ilość (pictogram)",
            "węgiel, ropa albo gaz, powstałe z dawnych roślin i zwierząt, które przy spalaniu wydzielają dwutlenek węgla (fossil fuel)"
          ],
          "passage": [
            "Bezpieczeństwo energetyczne (energy security) znaczy posiadanie pewnych, nieprzerwanych i niedrogich dostaw energii.",
            "Kraj ma nadwyżkę energii, kiedy jego dostawy są większe niż zapotrzebowanie.",
            "Ma niepewność energetyczną, kiedy zapotrzebowanie jest większe od tego, co potrafi wyprodukować.",
            "Miks energetyczny (energy mix) kraju to zestaw źródeł, z których korzysta: gaz, węgiel, energia jądrowa i wiatr.",
            "Miks Zjednoczonego Królestwa zmieniał się z czasem, a wykres kołowy pokazuje udział każdego źródła.",
            "Zużycie energii na świecie jest rozłożone nierówno.",
            "Mapa kartogramowa (choropleth map) zamalowuje największych odbiorców najciemniej.",
            "Mapa z kółkami proporcjonalnymi rysuje większe kółka dla większych producentów ropy.",
            "Piktogram używa symboli beczek, z których każdy oznacza milion baryłek ropy na dobę.",
            "W 2008 roku pięciu największych odbiorców ropy to Stany Zjednoczone, Chiny, Japonia, Indie i Rosja.",
            "Niepewność energetyczna ma przyczyny gospodarcze, fizyczne, polityczne i technologiczne.",
            "Światowe zużycie energii stale rośnie w miarę rozwoju świata."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "ter um fornecimento de energia fiável/confiável, sem interrupções e a um preço acessível (energy security, segurança energética)",
            "o conjunto de fontes de energia que um país usa e a parte que cabe a cada uma (energy mix)",
            "um mapa que pinta mais escuras as áreas onde o valor é mais alto (choropleth map, mapa de coropletas)",
            "um círculo num mapa cujo tamanho mostra a quantidade naquele lugar (proportional circle, círculo proporcional)",
            "um gráfico que usa símbolos repetidos, cada um a valer uma quantidade fixa (pictogram, pictograma)",
            "carvão, petróleo ou gás, formados de plantas e animais antigos, que libertam/liberam dióxido de carbono quando são queimados (fossil fuel, combustível fóssil)"
          ],
          "passage": [
            "Segurança energética quer dizer ter um fornecimento de energia fiável/confiável, sem interrupções e a um preço acessível.",
            "Um país tem excedente de energia quando o seu fornecimento é maior do que a sua procura.",
            "Tem insegurança energética quando a procura é maior do que aquilo que consegue produzir.",
            "O energy mix de um país é o conjunto de fontes que usa, como o gás, o carvão, a energia nuclear e o vento.",
            "O mix do Reino Unido mudou ao longo do tempo, e um gráfico circular mostra a parte de cada fonte.",
            "O consumo mundial de energia está distribuído de maneira desigual.",
            "Um mapa de coropletas (choropleth map) pinta mais escuros os maiores consumidores.",
            "Um mapa de círculos proporcionais desenha círculos maiores para os maiores produtores de petróleo.",
            "Um pictograma usa símbolos de barril, cada um a valer um milhão de barris de petróleo por dia.",
            "Em 2008 os cinco maiores consumidores de petróleo eram os Estados Unidos, a China, o Japão, a Índia e a Rússia.",
            "A insegurança energética tem causas económicas/econômicas, físicas, políticas e tecnológicas.",
            "O consumo mundial de energia continua a aumentar à medida que o mundo se desenvolve."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "in aad haysato sahay tamar lagu kalsoonaan karo, aan go'in oo qiime la bixin karo leh",
            "noocyada tamarta ee dal isticmaalo iyo saamiga mid kasta",
            "khariidad midab madow ku muujisa meelaha tirada ka sareyso",
            "goobo khariidad ku dul yaal oo cabbirkeedu muujiyo inta meeshaas ku jirta",
            "shax sawirro isku celcelinaya isticmaala, mid kastaana tiro go'an u taagan yahay",
            "dhuxul, saliid ama gaas, oo laga sameeyay dhir iyo xayawaan hore, oo marka la gubo sii daaya kaarboon dioksaydh"
          ],
          "passage": [
            "Energy security macnaheedu waa inaad haysato sahay tamar lagu kalsoonaan karo, aan go'in oo qiime la bixin karo leh.",
            "Dal wuxuu tamar dheeraad ah leeyahay marka sahaygiisu ka badan yahay baahidiisa.",
            "Wuxuu leeyahay energy insecurity marka baahidu ka badan tahay wuxuu soo saari karo.",
            "Energy mix-ka dal waa noocyada il uu isticmaalo, sida gaas, dhuxul, nuclear iyo dabeyl.",
            "Mix-ka Boqortooyada Midowday waqti ka waqti wuu isbeddelay, pie chart-na wuxuu muujiyaa saamiga il kasta.",
            "Isticmaalka tamarta aduunka si aan siman ahayn ayuu u qaybsan yahay.",
            "Khariidadda choropleth waxay kuwa ugu isticmaalka badan ugu madoobaysaa.",
            "Khariidadda proportional circle waxay goobo waaweyn u sawirtaa kuwa saliid badan soo saara.",
            "Pictogram wuxuu calaamado foosto u isticmaalaa, mid kastaana waxay u taagan tahay hal milyan foosto saliid maalintii.",
            "2008-dii shanta ugu badan ee saliid isticmaalay waxay ahaayeen Maraykanka, Shiinaha, Jabaan, Hindiya iyo Ruushka.",
            "Energy insecurity waxay leedahay sababo dhaqaale, jir, siyaasad iyo tignoolajiyo.",
            "Isticmaalka tamarta caalamiga wuu sii kordhayaa marka dunidu horumarto."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "наявність надійного, безперебійного і доступного постачання енергії (energy security)",
            "набір джерел енергії, які використовує країна, і частка кожного (energy mix)",
            "карта, яка затінює темніше ті райони, де значення вище (choropleth map)",
            "коло на карті, розмір якого показує кількість у цьому місці (proportional circle)",
            "діаграма з повторюваними малюнками-знаками, кожний з яких означає певну кількість (pictogram)",
            "вугілля, нафта або газ, утворені з давніх рослин і тварин, які під час спалювання випускають вуглекислий газ (fossil fuel)"
          ],
          "passage": [
            "Енергетична безпека (energy security) означає наявність надійного, безперебійного і доступного постачання енергії.",
            "Країна має надлишок енергії, коли її постачання більше за попит.",
            "Вона має енергетичну незабезпеченість, коли попит більший за те, що вона може виробити.",
            "Енергетичний мікс (energy mix) країни — це набір джерел, які вона використовує, як-от газ, вугілля, атом і вітер.",
            "Мікс Об’єднаного Королівства змінювався з часом, і кругова діаграма показує частку кожного джерела.",
            "Світове споживання енергії розподілене нерівномірно.",
            "Картограма (choropleth map) затінює найбільших споживачів найтемніше.",
            "Карта з пропорційними колами малює більші кола для більших виробників нафти.",
            "Піктограма використовує знаки-бочки, кожний з яких означає один мільйон барелів нафти на день.",
            "У 2008 році п’ятьма найбільшими споживачами нафти були Сполучені Штати, Китай, Японія, Індія і Росія.",
            "Енергетична незабезпеченість має економічні, фізичні, політичні й технологічні причини.",
            "Світове споживання енергії й далі зростає, поки світ розвивається."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "توانائی کی قابلِ بھروسہ، بغیر رکاوٹ اور سستی رسد ہونا (energy security)",
            "کوئی ملک توانائی کے جو ذریعے استعمال کرتا ہے اور ہر ایک کا حصہ (energy mix)",
            "وہ نقشہ جو زیادہ قیمت والے علاقوں کو گہرے رنگ سے بھرتا ہے (choropleth map)",
            "نقشے پر ایک دائرہ جس کا ناپ اُس جگہ کی مقدار دکھاتا ہے (proportional circle)",
            "وہ چارٹ جو دہرائی ہوئی تصویری علامتیں استعمال کرتا ہے، اور ہر علامت ایک مقررہ مقدار کی نمائندگی کرتی ہے (pictogram)",
            "کوئلہ، تیل یا گیس، جو پرانے پودوں اور جانوروں سے بنے اور جلنے پر کاربن ڈائی آکسائیڈ چھوڑتے ہیں (fossil fuel)"
          ],
          "passage": [
            "energy security کا مطلب توانائی کی قابلِ بھروسہ، بغیر رکاوٹ اور سستی رسد ہونا ہے۔",
            "کسی ملک کے پاس energy surplus ہوتا ہے جب اس کی رسد اس کی طلب سے زیادہ ہو۔",
            "اسے energy insecurity ہوتی ہے جب طلب اس سے زیادہ ہو جو وہ پیدا کر سکتا ہے۔",
            "ملک کا energy mix ان ذریعوں کا مجموعہ ہے جو وہ استعمال کرتا ہے، جیسے گیس، کوئلہ، نیوکلیئر اور ہوا۔",
            "برطانیہ کا mix وقت کے ساتھ بدلا ہے، اور pie chart ہر ذریعے کا حصہ دکھاتا ہے۔",
            "دنیا میں توانائی کی consumption غیر برابری سے بٹی ہوئی ہے۔",
            "choropleth map سب سے زیادہ استعمال کرنے والوں کو سب سے گہرے رنگ سے بھرتا ہے۔",
            "proportional circle والا نقشہ تیل زیادہ پیدا کرنے والوں کے لیے بڑے دائرے بناتا ہے۔",
            "pictogram میں پیپوں کی علامتیں ہوتی ہیں، اور ہر علامت روز دس لاکھ پیپے تیل کی نمائندگی کرتی ہے۔",
            "2008 میں تیل سب سے زیادہ استعمال کرنے والے پانچ ملک امریکہ، چین، جاپان، بھارت اور روس تھے۔",
            "energy insecurity کی معاشی، طبعی، سیاسی اور ٹیکنالوجی سے جڑی وجوہات ہوتی ہیں۔",
            "دنیا کی ترقی کے ساتھ عالمی سطح پر توانائی کی consumption بڑھتی جا رہی ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Security, surplus and insecurity",
          paragraphs: [
            "Three key words run through the rest of this unit. Energy security means having a reliable, uninterrupted and affordable supply of energy: the lights come on, the factories run and nobody is priced out of heating their home. A country has an energy surplus when its supply exceeds its demand, so it can store or sell the extra. It suffers energy insecurity when demand exceeds what it can produce, so it has to import energy, pay whatever the price is, and hope the supply is not cut off.",
            "Why is global energy consumption increasing? Three things are happening at once. The world's population is growing, so there are more people to heat, feed and move. Countries are developing, so more people own cars, fridges, phones and air conditioning, and more factories are built. And technology spreads: a device that only the richest owned thirty years ago is now in billions of homes. Supply has to keep up, and the factors that affect it (reserves of fossil fuels, the weather for renewables, the price of fuel, politics and technology) do not always cooperate."
          ],
          tip: "Security, surplus, insecurity: all three are about the balance between supply and demand. Say which is bigger in your definition."
        },
        {
          heading: "The UK's changing energy mix",
          paragraphs: [
            "A country's energy mix is the range of sources it uses and the share each contributes. The lesson asked you to describe three pie charts of the UK's energy mix in three different years and then compare them. The skill is the same for any set of pie charts. Describe each chart on its own first: name the biggest slice, the smallest slice and any slices that are roughly equal. Then compare across the charts: which slices have grown, which have shrunk, and which new slices have appeared. Finish with a sentence that sums up the overall change.",
            "The pattern your Year 7 work prepared you for is a mix still dominated by fossil fuels but with a growing share of renewable energy. The UK's own supplies of coal, oil and gas have declined, so the country imports more and has turned to wind, solar and other renewables. Use the actual figures from your three pie charts when you write about them; the numbers are what turn a description into evidence."
          ],
          worked: {
            q: "How do you structure a paragraph that compares three pie charts of a country's energy mix?",
            steps: [
              "Chart by chart: for each year, name the largest source and its share, then the smallest.",
              "Across the charts: pick one source and track it, saying whether its share rose or fell and by how much.",
              "Repeat for a second source that moved the other way.",
              "Sum up in one sentence: the mix has moved from X towards Y.",
              "Stretch: suggest a reason for the change, such as cheaper renewables or declining reserves."
            ],
            answer: "Describe each chart (largest and smallest slice), compare a rising source and a falling source across the years with figures, then summarise the overall shift in one sentence."
          },
          tip: "Compare means say how they are alike and how they differ. Use words like whereas, increased from, fell to, and quote the figures."
        },
        {
          heading: "Three maps of the world's energy",
          paragraphs: [
            "World energy consumption is unevenly distributed, and the lesson used three kinds of map or graph to show it. A choropleth map shades each country according to a category, with darker shading for higher values; the energy consumption map shaded the highest consumers darkest. It is useful because the pattern jumps out at a glance, but it can be misleading: a whole country gets one colour even if its regions differ, and a large country looks important simply because it covers more of the map.",
            "A proportional circle map draws a circle over each place, sized in proportion to the amount being measured. The lesson's map of the major oil producers in 2009 used five size classes measured in thousands of barrels per day: less than 500; 500 to 1,500; 1,500 to 4,000; 4,000 to 8,000; and more than 8,000. Circles show exact places and amounts, but they can overlap and hide each other, and the eye is poor at judging how much bigger one circle is than another.",
            "A pictogram uses a repeated picture symbol, each standing for a fixed amount. The lesson's pictogram compared oil consumption and oil production in 2008 for the top five oil-consuming countries, the United States, China, Japan, India and Russia, with each barrel symbol standing for 1,000,000 barrels of oil per day. Pictograms are easy to read and compare, but half a symbol is hard to judge, and they show totals for a country rather than how much each person uses."
          ],
          worked: {
            q: "On the pictogram each barrel symbol stands for 1,000,000 barrels of oil per day. A country's row shows eight and a half barrels. How much oil does it consume per day?",
            steps: [
              "Count the symbols, including the part symbol: 8.5.",
              "Multiply by the value of one symbol: 8.5 × 1,000,000.",
              "8.5 × 1,000,000 = 8,500,000 barrels per day.",
              "Write the units: barrels of oil per day."
            ],
            answer: "8,500,000 barrels of oil per day",
            checks: [{ expr: "8.5*PICTO_BARRELS", value: 8500000, tol: 0 }]
          },
          tip: "Every map question needs the key. Say what the shading, the circle size or the symbol stands for before you describe the pattern."
        },
        {
          heading: "Why do some countries suffer energy insecurity?",
          paragraphs: [
            "The lesson sorted the causes of energy insecurity under four headings. Physical causes are about what nature gave a country: it may have no coal, oil or gas of its own, little sunshine or wind, or no rivers suitable for hydro-electric power; a natural disaster can also wreck power stations and pipelines. Economic causes are about money: a poor country may not be able to afford to import fuel or to build power stations, and when the world price of oil rises it is the poorest buyers who go without.",
            "Political causes are about people and governments: war, unstable government or a dispute with a neighbouring country can cut off a pipeline or stop imports, and a country that depends on one supplier is at that supplier's mercy. Technological causes are about know-how: a country may have fuel beneath its soil but lack the technology to extract it, or the engineers and grid to distribute electricity once it is made. Most insecure countries suffer from several causes at once.",
            "A four-mark describe or explain question on this topic wants two causes, each developed. Name the cause, say which heading it belongs under, and explain how it leaves the country short of reliable, affordable energy."
          ],
          tip: "PEPT: Physical, Economic, Political, Technological. Two developed causes earn four marks; a list of four undeveloped ones does not."
        }
      ],
      gate: [
        { kind: "gap", q: "Energy ___ means having a reliable, uninterrupted and affordable supply of energy.", answer: "security", options: ["security", "surplus", "insecurity"], why: "The lesson's definition: energy security is a reliable, uninterrupted and affordable supply.",
          feedback: {
            "surplus": "An energy surplus is when supply exceeds demand, so a country has more than it needs. A reliable, uninterrupted and affordable supply is the definition of energy security.",
            "insecurity": "Energy insecurity is the opposite: when demand exceeds what a country can produce, so supply is unreliable. A reliable, uninterrupted and affordable supply is energy security."
          } },
        { kind: "mcq", q: "On a proportional circle map, what does the size of each circle show?", options: ["The amount being measured at that place, such as oil produced per day", "The land area of the country", "How far the place is from the equator", "How many years of data the map covers"], answer: 0, why: "Proportional means in proportion: the bigger the amount, the bigger the circle. On the oil map the biggest circles sat over the biggest producers.",
          feedback: [
            "",
            "The circle's size is nothing to do with the country's area; a small country with huge oil fields gets a huge circle. The size is proportional to the amount measured, such as barrels per day.",
            "Distance from the equator is shown by where the circle is drawn, not how big it is. Size shows the amount being measured.",
            "A proportional circle map shows one year's data. The size of each circle shows the amount measured at that place."
          ] },
        { kind: "numeric", q: "On the pictogram each barrel symbol stands for 1,000,000 barrels of oil per day. A row shows 6 whole barrels. How many barrels of oil per day is that?", answer: 6000000, tolerance: 0, units: "barrels per day", check: "6*PICTO_BARRELS", why: "6 symbols × 1,000,000 barrels each = 6,000,000 barrels of oil per day.",
          misconceptions: [
            { answer: 6, says: "You have counted the symbols but not used the key. Each barrel stands for 1,000,000 barrels, so 6 symbols mean 6,000,000 barrels per day.", check: "6" },
            { answer: 600000, says: "A zero has gone missing. 6 × 1,000,000 is 6,000,000, not 600,000.", check: "6*PICTO_BARRELS/10" },
            { answer: 60000000, says: "An extra zero has crept in. 6 × 1,000,000 is 6,000,000, not 60,000,000.", check: "6*PICTO_BARRELS*10" }
          ] }
      ],
      modules: [
        {
          title: "Which energy word?",
          task: {
            kind: "mcq",
            q: "A country produces more energy than its homes and industries use. Which term describes its situation?",
            options: ["Energy surplus", "Energy insecurity", "Energy deficit", "Energy mix"],
            answer: 0,
            feedback: [
              "",
              "Energy insecurity is when demand exceeds what a country can produce, so it is short. A country producing MORE than it uses has the opposite: an energy surplus.",
              "A deficit is a shortfall, when demand is greater than supply. Producing more than you use is a surplus, not a deficit.",
              "The energy mix is the range of sources a country uses; it does not say whether there is too much or too little. Producing more than you use is an energy surplus."
            ]
          },
          contexts: [
            { label: "Gas exporter", q: "A country has so much natural gas that it sells the extra to its neighbours every year. Which term describes its energy situation?" },
            { label: "Hydro-rich country", q: "A mountainous country generates more hydro-electric power than it can use at home. Which term describes its energy situation?" },
            { label: "Oil state", q: "An oil-producing state pumps far more oil than its own people burn. Which term describes its energy situation?" }
          ],
          explain: "Say, in one sentence, how an energy surplus can turn into energy security.",
          levels: {
            support: {
              steps: [
                "Ask: is supply bigger than demand, or smaller?",
                "Here the country produces MORE than it uses, so supply is bigger.",
                "Supply bigger than demand is a surplus; demand bigger than supply is insecurity.",
                "Energy mix is about the TYPES of energy, not the amount, so rule it out."
              ],
              example: {
                q: "A country has to import most of its fuel and its power cuts out when prices rise. Which term fits: energy surplus or energy insecurity?",
                steps: ["Demand is greater than what it can produce.", "That is insecurity."],
                answer: "Energy insecurity: demand exceeds its own production, so the supply is unreliable and unaffordable."
              }
            },
            core: { hint: "Surplus = supply greater than demand. Insecurity = demand greater than production." },
            stretch: { extend: "Explain why a country with an energy surplus from a single source, such as oil, might still worry about its long-term energy security." }
          },
          why: "Supply exceeds demand, which is the definition of an energy surplus. Insecurity and deficit both mean shortage, and the energy mix describes the types of energy used, not the balance."
        },
        {
          title: "Three ways to map the world's energy",
          task: {
            kind: "match",
            q: "Match each type of map or chart to how it shows the data.",
            pairs: [
              ["Choropleth map", "Each country is shaded, with darker colours for higher values"],
              ["Proportional circle map", "A circle is drawn at each place, sized in proportion to the amount"],
              ["Pictogram", "Repeated picture symbols, each standing for a fixed amount such as 1,000,000 barrels a day"]
            ]
          },
          contexts: [
            { label: "Energy consumption", q: "The lesson showed world energy consumption, oil production and oil consumption on three different kinds of map or chart. Match each type to how it shows the data." },
            { label: "Revision card", q: "You are making a revision card on graphical skills. Match each type of map or chart to the way it shows the data." }
          ],
          levels: {
            support: {
              steps: [
                "Picto means picture: which description mentions picture symbols?",
                "Proportional means in proportion: which description is about size matching amount?",
                "The one left is the shaded map. Choropleth maps always use shading."
              ],
              example: {
                q: "Match: flow line map, line graph. Choices: a line that rises and falls to show change over time; lines joining origin and destination, with width showing the amount moved.",
                steps: ["Flow lines join places and their width shows the flow.", "A line graph shows change over time."],
                answer: "Flow line map: lines joining origin and destination with width showing amount. Line graph: a line showing change over time."
              }
            },
            core: { hint: "Shading, circle size, repeated symbols: one each." },
            stretch: { extend: "For each of the three, give one way it can be misleading, and say which you would choose to show energy consumption PER PERSON and why." }
          },
          explain: "Say, in one sentence, what all three have in common that a table of numbers does not.",
          why: "Choropleth maps shade areas by category; proportional circle maps size a circle to the amount; pictograms repeat a symbol worth a fixed amount. Each shows the same uneven pattern in a different way."
        },
        {
          title: "Two causes of energy insecurity",
          task: {
            kind: "written",
            q: "Explain two reasons why a country might not have a reliable and affordable supply of energy. (4 marks)",
            marks: 4,
            criteria: [
              "Gives two different causes, from different headings (physical, economic, political, technological)",
              "Develops each cause: says HOW it leaves the country short of reliable or affordable energy",
              "Uses the key term energy insecurity correctly",
              "Keeps to two causes, developed, rather than a list of four"
            ],
            model: "One physical cause is that a country may have no fossil fuel reserves of its own, so it must import coal, oil or gas; if the price rises or a shipment is delayed, its supply is neither affordable nor reliable, which is energy insecurity. A second, political cause is conflict or a dispute with a neighbouring country: a pipeline that crosses the neighbour's territory can be shut off, cutting the supply overnight and forcing the country to pay far more for energy from elsewhere."
          },
          levels: {
            support: {
              steps: [
                "Pick two headings from PEPT: physical, economic, political, technological.",
                "For the first, write the cause in one sentence (for example, no reserves of its own).",
                "Add a second sentence beginning so that or which means, explaining how the supply becomes unreliable or expensive.",
                "Repeat for the second heading.",
                "Use the words energy insecurity once."
              ],
              example: {
                q: "In two sentences, explain how a technological cause can lead to energy insecurity.",
                steps: ["State the cause: lacking the technology to extract or distribute energy.", "Explain the effect on supply."],
                answer: "A country may have gas or oil underground but lack the technology and skilled engineers to extract it. So it cannot use its own resources and has to import energy instead, which is expensive and can be interrupted, leaving it energy insecure."
              }
            },
            core: { hint: "Cause, then consequence. Two of each. Different headings." },
            stretch: { extend: "Add a third paragraph arguing which of the four kinds of cause is hardest for a country to fix, and why." }
          },
          explain: "Say, in one sentence, why a developed point is worth more than a named cause on its own.",
          why: "Four marks means two causes, each explained. The strongest answers take causes from different headings and show the chain from cause to unreliable or unaffordable supply."
        }
      ]
    },

    /* ───────────── 4 · fracking ───────────── */
    {
      key: "fracking", n: 4, title: "Fracking: should the UK extract its shale gas?",
      lead: "How hydraulic fracturing gets gas out of shale rock, the arguments for and against doing it in the UK, and how to describe where the fracking licences are on a map.",
      covers: [6],
      pretext: {
        words: [
          { word: "fracking", means: "pumping water, sand and chemicals into rock at high pressure to crack it and release gas", sentence: "Fracking cracks the shale so the gas can escape up the well." },
          { word: "shale", means: "a rock formed from layers of mud, which can hold gas and oil trapped inside it", sentence: "There is a great deal of shale under northern England." },
          { word: "borehole", means: "a deep hole drilled into the ground", sentence: "Each fracking borehole needs millions of gallons of water." },
          { word: "fossil fuel", means: "coal, oil or gas, which release carbon dioxide when burnt", sentence: "Shale gas is still a fossil fuel." },
          { word: "tremor", means: "a small earthquake", sentence: "Small tremors were felt near Blackpool in 2011." },
          { word: "licence", means: "official permission to do something in a particular place", sentence: "Companies need a licence before they can explore for shale gas." }
        ],
        passage: [
          "Fracking is a way of getting gas out of shale rock deep underground.",
          "A well is drilled down into the shale.",
          "Water, sand and chemicals are pumped down the well at very high pressure.",
          "The pressure cracks the shale, and the gas trapped inside escapes.",
          "The gas flows back up the well to the surface.",
          "The UK has huge shale gas reserves, worth an estimated £1.5 trillion.",
          "Supporters say shale gas is cheaper, creates jobs and gives the UK more energy security.",
          "Burning gas releases half as much carbon dioxide as burning coal.",
          "Opponents say fracking can cause small earthquakes and poison drinking water.",
          "Each borehole needs around four million gallons of water.",
          "Shale gas is still a fossil fuel, so it adds to climate change.",
          "Fracking is banned in France and Bulgaria, and public opposition has stopped it in the UK."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "ضخّ الماء والرمل والمواد الكيميائية في الصخر بضغط عالٍ لتشقيقه وتحرير الغاز (fracking)",
            "صخر تكوّن من طبقات من الطين، وقد يحفظ الغاز والنفط محتجزين داخله (shale)",
            "حفرة عميقة تُحفر في الأرض (borehole)",
            "الفحم أو النفط أو الغاز، وهي تُطلق ثاني أكسيد الكربون عند حرقها (fossil fuel)",
            "زلزال صغير (tremor)",
            "إذن رسمي بعمل شيء في مكان معيّن (licence)"
          ],
          "passage": [
            "التكسير الهيدروليكي (fracking) طريقة لاستخراج الغاز من صخر السجيل (shale) في عمق الأرض.",
            "فتُحفر بئر نزولًا إلى السجيل.",
            "ويُضخّ الماء والرمل والمواد الكيميائية في البئر بضغط عالٍ جدًّا.",
            "فيشقّق الضغط السجيل، فيهرب الغاز المحتجز داخله.",
            "فيتدفّق الغاز عائدًا صاعدًا في البئر إلى السطح.",
            "وفي المملكة المتّحدة احتياطيات ضخمة من غاز السجيل، تُقدَّر قيمتها بنحو 1.5 تريليون جنيه إسترليني.",
            "ويقول المؤيّدون إنّ غاز السجيل أرخص ويخلق أعمالًا ويمنح المملكة المتّحدة أمن طاقة أكبر.",
            "وحرق الغاز يُطلق من ثاني أكسيد الكربون نصف ما يُطلقه حرق الفحم.",
            "ويقول المعارضون إنّ التكسير قد يسبّب زلازل صغيرة ويسمّم ماء الشرب.",
            "وكلّ بئر تحتاج إلى نحو أربعة ملايين غالون من الماء.",
            "وغاز السجيل وقود أحفوري على كلّ حال، فهو يزيد تغيّر المناخ.",
            "والتكسير محظور في فرنسا وبلغاريا، ومعارضة الناس أوقفته في المملكة المتّحدة."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "wpompowywanie wody, piasku i substancji chemicznych do skały pod wysokim ciśnieniem, żeby ją spękać i uwolnić gaz (fracking)",
            "skała powstała z warstw mułu, która może trzymać w sobie gaz i ropę (shale)",
            "głęboka dziura wywiercona w ziemi (borehole)",
            "węgiel, ropa albo gaz, które przy spalaniu wydzielają dwutlenek węgla (fossil fuel)",
            "małe trzęsienie ziemi",
            "oficjalne pozwolenie na zrobienie czegoś w określonym miejscu"
          ],
          "passage": [
            "Szczelinowanie (fracking) to sposób wydobywania gazu ze skał łupkowych głęboko pod ziemią.",
            "W łupkach wierci się odwiert w dół.",
            "Woda, piasek i substancje chemiczne są wpompowywane w odwiert pod bardzo wysokim ciśnieniem.",
            "Ciśnienie pęka łupek, a gaz uwięziony w środku ucieka.",
            "Gaz wraca odwiertem w górę, na powierzchnię.",
            "Zjednoczone Królestwo ma ogromne złoża gazu łupkowego, warte według szacunków 1.5 biliona funtów.",
            "Zwolennicy mówią, że gaz łupkowy jest tańszy, tworzy miejsca pracy i daje krajowi większe bezpieczeństwo energetyczne.",
            "Spalanie gazu wydziela o połowę mniej dwutlenku węgla niż spalanie węgla.",
            "Przeciwnicy mówią, że szczelinowanie może wywoływać małe trzęsienia ziemi i zatruwać wodę do picia.",
            "Każdy odwiert potrzebuje około czterech milionów galonów wody.",
            "Gaz łupkowy to nadal paliwo kopalne, więc pogłębia zmianę klimatu.",
            "Szczelinowanie jest zakazane we Francji i w Bułgarii, a w Zjednoczonym Królestwie zatrzymał je sprzeciw społeczny."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "bombear água, areia e produtos químicos para dentro da rocha a alta pressão, para a partir e libertar/liberar gás (fracking)",
            "uma rocha formada por camadas de lama, que pode ter gás e petróleo presos lá dentro (shale, xisto)",
            "um buraco fundo feito no solo (borehole, furo)",
            "carvão, petróleo ou gás, que libertam/liberam dióxido de carbono quando são queimados (fossil fuel, combustível fóssil)",
            "um pequeno sismo/terremoto (tremor)",
            "autorização oficial para fazer algo num certo lugar (licence, licença)"
          ],
          "passage": [
            "O fracking é uma maneira de tirar gás da rocha de xisto, bem fundo no subsolo.",
            "É feito um poço a descer até ao xisto.",
            "Água, areia e produtos químicos são bombeados poço abaixo a pressão muito alta.",
            "A pressão parte o xisto, e o gás que estava preso lá dentro escapa.",
            "O gás sobe pelo poço até à superfície.",
            "O Reino Unido tem enormes reservas de gás de xisto, estimadas em 1.5 biliões/trilhões de libras.",
            "Quem está a favor diz que o gás de xisto é mais barato, cria empregos e dá ao Reino Unido mais segurança energética.",
            "Queimar gás liberta/libera metade do dióxido de carbono que se liberta ao queimar carvão.",
            "Quem está contra diz que o fracking pode causar pequenos sismos/terremotos e envenenar a água de beber.",
            "Cada furo precisa de cerca de quatro milhões de galões de água.",
            "O gás de xisto continua a ser um combustível fóssil, por isso agrava as mudanças climáticas.",
            "O fracking é proibido na França e na Bulgária, e a oposição do público travou-o no Reino Unido."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "biyo, ciid iyo kiimikooyin cadaadis sare lagu geliyo dhagaxa si loo dillaaciyo oo gaas loo sii daayo",
            "dhagax laga sameeyay lakabyo dhoobo ah, oo gaas iyo saliid gudahiisa ku xanniban karo",
            "god dheer oo dhulka lagu qoday",
            "dhuxul, saliid ama gaas, kuwaasoo marka la gubo sii daaya kaarboon dioksaydh",
            "dhulgariir yar",
            "fasax rasmi ah oo wax lagu sameeyo meel gaar ah"
          ],
          "passage": [
            "Fracking waa hab gaas looga saaro dhagaxa shale ee dhulka hoostiisa fog.",
            "God ayaa hoos loo qodaa ilaa dhagaxa shale.",
            "Biyo, ciid iyo kiimikooyin waxaa godka hoos loogu riixaa cadaadis aad u sarreeya.",
            "Cadaadisku wuxuu dillaaciyaa shale-ka, gaaska gudaha ku xannibnaana wuu baxaa.",
            "Gaasku wuxuu godka kor uga soo qulqulaa ilaa dusha.",
            "Boqortooyada Midowday waxay leedahay kayd gaas shale aad u weyn, oo qiyaastii £1.5 tirillyan u qalma.",
            "Taageerayaashu waxay yiraahdaan gaaska shale wuu ka jaban yahay, shaqo wuu abuuraa oo tamar amni badan ayuu dalka siinayaa.",
            "Gubidda gaaska waxay sii daysaa kaarboon dioksaydh oo nus ka yar dhuxusha la gubay.",
            "Kuwa ka soo horjeedana waxay yiraahdaan fracking wuxuu dhulgariirro yaryar keeni karaa oo biyaha cabbitaanka sumoobi karaan.",
            "God kastaa wuxuu u baahan yahay qiyaastii afar milyan galan oo biyo.",
            "Gaaska shale weli waa shidaal fosil, markaa isbeddelka cimilada ayuu kordhiyaa.",
            "Fracking waxaa Faransiiska iyo Bulgaria lagu mamnuucay, mucaaradnimada dadweynahana waxay Boqortooyada Midowday ku joojisay."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "закачування води, піску і хімікатів у породу під високим тиском, щоб розтріскати її і випустити газ (fracking)",
            "порода, утворена з шарів глею, яка може тримати всередині газ і нафту (shale)",
            "глибока свердловина, пробурена в землю (borehole)",
            "вугілля, нафта або газ, які під час спалювання випускають вуглекислий газ (fossil fuel)",
            "невеликий землетрус (tremor)",
            "офіційний дозвіл робити щось у певному місці (licence)"
          ],
          "passage": [
            "Фрекінг (fracking) — це спосіб добути газ зі сланцевої породи глибоко під землею.",
            "У сланець бурять свердловину.",
            "Воду, пісок і хімікати закачують у свердловину під дуже високим тиском.",
            "Тиск розтріскує сланець, і газ, замкнений усередині, виходить.",
            "Газ піднімається свердловиною на поверхню.",
            "Об’єднане Королівство має величезні запаси сланцевого газу, які оцінюють у £1.5 трильйона.",
            "Прибічники кажуть, що сланцевий газ дешевший, створює робочі місця і дає Об’єднаному Королівству більшу енергетичну безпеку.",
            "Спалювання газу випускає вдвічі менше вуглекислого газу, ніж спалювання вугілля.",
            "Противники кажуть, що фрекінг може спричиняти невеликі землетруси й отруювати питну воду.",
            "Кожна свердловина (borehole) потребує близько чотирьох мільйонів галонів води.",
            "Сланцевий газ усе одно є викопним паливом, тому він додає до зміни клімату.",
            "Фрекінг заборонений у Франції та Болгарії, а в Об’єднаному Королівстві його зупинив спротив громадськості."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "پانی، ریت اور کیمیکل کو بہت زیادہ دباؤ سے چٹان میں پمپ کرنا تاکہ وہ چٹخے اور گیس نکلے (fracking)",
            "کیچڑ کی تہوں سے بنی ایک چٹان، جس کے اندر گیس اور تیل بند ہو سکتے ہیں (shale)",
            "زمین میں کھودا ہوا گہرا سوراخ (borehole)",
            "کوئلہ، تیل یا گیس، جو جلنے پر کاربن ڈائی آکسائیڈ چھوڑتے ہیں (fossil fuel)",
            "ایک چھوٹا زلزلہ (tremor)",
            "کسی خاص جگہ پر کوئی کام کرنے کی سرکاری اجازت (licence)"
          ],
          "passage": [
            "fracking زمین میں بہت گہری shale چٹان سے گیس نکالنے کا ایک طریقہ ہے۔",
            "shale تک ایک کنواں کھودا جاتا ہے۔",
            "پانی، ریت اور کیمیکل بہت زیادہ دباؤ سے کنویں میں نیچے پمپ کیے جاتے ہیں۔",
            "دباؤ سے shale چٹخ جاتی ہے، اور اس کے اندر بند گیس نکل آتی ہے۔",
            "گیس کنویں کے راستے واپس اوپر سطح تک آتی ہے۔",
            "برطانیہ میں shale gas کے بہت بڑے ذخائر ہیں، جن کی قیمت کا اندازہ £1.5 ٹریلین ہے۔",
            "حامی کہتے ہیں کہ shale gas سستی ہے، روزگار دیتی ہے اور برطانیہ کو زیادہ energy security دیتی ہے۔",
            "گیس جلانے سے کوئلہ جلانے کے مقابلے میں آدھی کاربن ڈائی آکسائیڈ نکلتی ہے۔",
            "مخالف کہتے ہیں کہ fracking سے چھوٹے زلزلے آ سکتے ہیں اور پینے کا پانی زہریلا ہو سکتا ہے۔",
            "ہر borehole کے لیے تقریباً چالیس لاکھ گیلن پانی چاہیے۔",
            "shale gas پھر بھی fossil fuel ہے، اس لیے یہ climate change کو بڑھاتی ہے۔",
            "فرانس اور بلغاریہ میں fracking پر پابندی ہے، اور برطانیہ میں عوامی مخالفت نے اسے روک دیا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What is fracking?",
          paragraphs: [
            "Fracking is short for hydraulic fracturing. It is a way of recovering gas, and sometimes oil, from shale rock. Shale is a rock made of compressed layers of mud, and the gas is held in tiny spaces inside it, so it cannot simply be pumped out like gas from a conventional field. Instead, engineers drill a well deep into the earth until it reaches the shale, often turning the drill to run sideways along the rock layer.",
            "Then a mixture of water, sand and chemicals is pumped down the well at very high pressure. The pressure fractures the shale, opening fissures, and the sand grains prop the cracks open. The gas trapped inside is released and flows back up the well to the wellhead at the surface, where it is collected and piped away. The whole operation happens far below the water table, but the well has to pass through it on the way down, which is where many of the worries begin.",
            "Shale gas is a fossil fuel like any other natural gas. What makes it different is where it sits and how it has to be extracted. The UK is thought to have enormous shale reserves, put at some £1.5 trillion in value, and the government has argued that using them could give the UK greater energy security, growth and jobs."
          ],
          tip: "Four steps, in order: drill the well; pump down water, sand and chemicals at high pressure; the shale fractures; gas flows back up. Practise saying them."
        },
        {
          heading: "The case for fracking",
          paragraphs: [
            "Supporters start with the size of the prize. The UK's shale gas reserves are very large, valued at about £1.5 trillion, and the government believes using them could bring greater energy security, growth and jobs. If fracking is successful the economic benefit could be massive, with gas sold to other countries as well as used at home, and more supply should mean cheaper energy for households and industry.",
            "There are local winners too. Landowners who sell or rent their land to fracking companies make a profit, and the companies bring work to the areas where they drill. Supporters also make an environmental argument: gas is cleaner than coal, releasing about half as much carbon dioxide when it is burnt, so replacing coal-fired power with gas would cut emissions while the country builds its renewable capacity."
          ],
          tip: "Sort every argument into economic, social or environmental. Supporters have strong economic points, one social point (landowners) and one environmental point (cleaner than coal)."
        },
        {
          heading: "The case against fracking",
          paragraphs: [
            "Opponents answer the environmental point first. Shale gas is one more high-carbon fossil fuel: cleaner than coal or not, burning it still adds to climate change, and money spent on fracking could be money taken from the greener, renewable sources we need instead. Each borehole swallows a great deal of water, around four million gallons, all of which has to be brought to the site, and the chemicals in the fracking fluid raise fears of poisoned drinking water supplies if they leak into the water table.",
            "Then there is the ground itself. Fracking can set off earthquakes: small tremors were reported near Blackpool in 2011, during test drilling. Add the high financial costs of extraction, the fall in local house prices near a site, and the fact that it is an issue people feel strongly about. Fracking is banned in France and Bulgaria, and in the UK public opposition has so far stopped it being used.",
            "A balanced answer classifies these impacts. Earthquakes, water use, water pollution and climate change are environmental; extraction costs, house prices and money diverted from renewables are economic; public opposition and the effect on local communities are social. Many points fit more than one heading, and saying so shows understanding."
          ],
          worked: {
            q: "Classify this argument as environmental, economic or social, and explain your choice: money spent on fracking could be money not spent on developing greener, renewable energy.",
            steps: [
              "Ask what kind of thing is at stake: money, people or the natural world?",
              "The argument is about where investment goes, so it is economic.",
              "It also has an environmental consequence: less renewable energy means more carbon in the long run.",
              "Classify it as economic, and note the environmental link in your explanation."
            ],
            answer: "Economic, because it is about where money is invested; it has an environmental consequence too, since less investment in renewables means slower progress on climate change."
          },
          tip: "Give the examiner at least two arguments on each side before you reach a decision. A one-sided answer caps your mark."
        },
        {
          heading: "Describing a distribution: where are the fracking licences?",
          paragraphs: [
            "Two exam-style tasks in this lesson used maps. The command word in both was describe, which means saying what the map shows, where, without explaining why. Distribution means the way something is spread out. A good description names where the largest areas are, where the smallest are, and whether there is a general pattern, using compass points and place names from the map.",
            "The UK map showed areas with existing licences for fracking and areas under consideration. The licensed areas are spread widely across England rather than bunched in one place. The largest blocks lie in eastern England, in the band of country between Kingston-upon-Hull and Nottingham, with other big areas to the south of London, in South Wales and in north-west England. Smaller patches are dotted around the country: in south-east Kent, around Bristol, and towards the Scottish border. A two-mark answer gives the basic pattern and then develops it with named places like these.",
            "The four-mark version asked about the global distribution of shale reserves, using a map with figures in trillion cubic feet. The sentence frame is the same: say whether the distribution is even or uneven; name the continent or country with the largest reserves and give its figure; name the one with the smallest and give its figure; then sum up the overall pattern. Numbers from the key are what earn the development marks."
          ],
          tip: "Describe a distribution in three moves: general pattern, largest areas with names, smaller areas with names. No because."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is pumped down the well at high pressure to fracture the shale?", options: ["A mixture of water, sand and chemicals", "Hot steam from a power station", "Liquid oil from a nearby well", "Compressed natural gas"], answer: 0, why: "Water, sand and chemicals are injected at high pressure; the pressure cracks the shale, the sand props the cracks open, and the gas flows out to the well head.",
          feedback: [
            "",
            "Steam is used in geothermal power, where it drives a turbine. Fracking pumps a mixture of water, sand and chemicals into the rock at high pressure.",
            "Oil is one of the things fracking recovers from shale, not what is pumped in. The fracking fluid is water, sand and chemicals at high pressure.",
            "Gas is what comes OUT of the well once the shale is fractured. What goes in is a high-pressure mixture of water, sand and chemicals."
          ] },
        { kind: "numeric", q: "In which year were small tremors reported near Blackpool, linked to fracking?", answer: 2011, tolerance: 0, units: "", check: "BLACKPOOL_TREMOR_YEAR", why: "The lesson's card: in 2011 small tremors near Blackpool were reported, the main evidence that fracking can cause earthquakes.",
          misconceptions: [
            { answer: 2017, says: "2017 is the year of the big Alaskan oil discovery in the next chapter, not the Blackpool tremors. Those were reported in 2011.", check: "ALASKA_DISCOVERY_YEAR" },
            { answer: 2015, says: "2015 is the year of the Paris Agreement on climate change, which you meet in the last chapter. The Blackpool tremors were in 2011.", check: "PARIS_YEAR" },
            { answer: 2001, says: "You are a decade too early. The small tremors near Blackpool were reported in 2011.", check: "BLACKPOOL_TREMOR_YEAR-10" }
          ] },
        { kind: "gap", q: "Burning shale gas releases about ___ as much carbon dioxide as burning coal.", answer: "half", options: ["half", "twice", "a tenth"], why: "Gas is cleaner than coal: it releases about half as much carbon dioxide for the same energy. That is a key argument FOR fracking, though gas is still a fossil fuel.",
          feedback: {
            "twice": "That would make gas dirtier than coal, which is the opposite of the lesson's card. Gas releases about half as much carbon dioxide as coal, which is why supporters call it cleaner.",
            "a tenth": "Gas is cleaner than coal, but not by that much. The card says it releases half as much carbon dioxide, so it is still a significant source of greenhouse gas."
          } }
      ],
      modules: [
        {
          title: "How fracking works",
          task: {
            kind: "order",
            q: "Put the stages of fracking in the correct order.",
            items: [
              "A well is drilled down into the earth to reach the shale rock",
              "A mixture of water, sand and chemicals is pumped down the well at high pressure",
              "The shale cracks (fractures), releasing the gas trapped inside it",
              "The gas flows back up the well to the surface"
            ]
          },
          contexts: [
            { label: "Lancashire site", q: "A company has a licence to frack for shale gas at a site in Lancashire. Put the stages it would go through in the correct order." },
            { label: "Explaining to a friend", q: "A friend asks you how fracking actually works. Put the stages in the correct order so you can explain it in four sentences." },
            { label: "Diagram labels", q: "You are labelling a cross-section diagram of a fracking well. Put the four labels in the correct order from first stage to last." }
          ],
          levels: {
            support: {
              steps: [
                "Nothing can happen until there is a hole. What has to be drilled first?",
                "Then something goes DOWN the well. What is pumped down, and how hard?",
                "The pumping has an effect on the rock. What happens to the shale?",
                "Finally something comes UP the well. What is it?"
              ],
              example: {
                q: "Put these stages of conventional gas extraction in order: gas is piped to homes; a well is drilled into a gas field; gas rises up the well under its own pressure.",
                steps: ["Drill first.", "Gas rises.", "Gas is piped away last."],
                answer: "A well is drilled into a gas field; gas rises up the well under its own pressure; gas is piped to homes."
              }
            },
            core: { hint: "Drill, pump, crack, flow. Down first, then up." },
            stretch: { extend: "Explain why the sand in the fracking fluid matters, and why the well passing through the water table worries opponents." }
          },
          explain: "Say, in one sentence, why the shale has to be fractured before any gas can be collected.",
          why: "Drill the well into the shale; pump water, sand and chemicals down at high pressure; the shale fractures and releases its gas; the gas flows back up the well to the surface."
        },
        {
          title: "How much water?",
          task: {
            kind: "numeric",
            q: "Each fracking borehole requires around four million gallons of water, which has to be transported to the site. How many million gallons would 5 boreholes need?",
            answer: 20, tolerance: 0, units: "million gallons", check: "5*FRACK_GALLONS_MILLION",
            why: "4 million gallons per borehole × 5 boreholes = 20 million gallons, all of it brought to the site by road.",
            misconceptions: [
              { answer: 4, says: "4 million gallons is the figure for ONE borehole. Five boreholes need five times as much: 4 × 5 = 20 million gallons.", check: "FRACK_GALLONS_MILLION" },
              { answer: 9, says: "You added 4 and 5. Each of the 5 boreholes needs 4 million gallons, so multiply: 4 × 5 = 20 million gallons.", check: "FRACK_GALLONS_MILLION+5" },
              { answer: 200, says: "An extra zero has crept in. 4 × 5 = 20 million gallons, not 200 million.", check: "5*FRACK_GALLONS_MILLION*10" }
            ]
          },
          contexts: [
            { label: "Planning application", q: "A planning application proposes 5 boreholes at one site. If each borehole requires around four million gallons of water, how many million gallons must be transported to the site in total?", check: "5*FRACK_GALLONS_MILLION" },
            { label: "Water company", q: "A water company is asked to supply a fracking site with 5 boreholes, each needing around four million gallons. How many million gallons is that altogether?", check: "5*FRACK_GALLONS_MILLION" },
            { label: "Protest leaflet", q: "A campaign leaflet points out that a site with 5 boreholes, each using around four million gallons of water, would consume how many million gallons in total?", check: "5*FRACK_GALLONS_MILLION" }
          ],
          levels: {
            support: {
              steps: [
                "Write down the amount for one borehole: 4 million gallons.",
                "Count the boreholes: 5.",
                "Same amount, five times: multiply 4 by 5.",
                "Keep the units: the answer is in million gallons."
              ],
              example: {
                q: "If each borehole needs around four million gallons, how many million gallons do 3 boreholes need?",
                steps: ["4 million per borehole.", "3 boreholes: 4 × 3 = 12."],
                answer: "12 million gallons",
                checks: [{ expr: "3*FRACK_GALLONS_MILLION", value: 12, tol: 0 }]
              }
            },
            core: { hint: "One borehole is 4 million gallons. Multiply by the number of boreholes." },
            stretch: { extend: "Explain why the water has to be transported to the site, and why that makes water use an economic as well as an environmental argument against fracking." }
          },
          explain: "Say, in one sentence, why you multiply rather than add here.",
          why: "Every borehole needs the same four million gallons, so five boreholes need 4 × 5 = 20 million gallons."
        },
        {
          title: "Should the UK allow fracking?",
          task: {
            kind: "written",
            q: "Should the UK allow fracking for shale gas? Use evidence from the arguments you studied to argue both sides and reach a decision. (9 marks)",
            marks: 9,
            criteria: [
              "Begins by explaining what fracking is in one or two sentences",
              "Gives at least two developed arguments FOR fracking in the UK, with evidence (reserves worth £1.5 trillion, energy security, jobs, half the carbon dioxide of coal)",
              "Gives at least two developed arguments AGAINST, with evidence (Blackpool tremors in 2011, four million gallons of water per borehole, water pollution, still a fossil fuel)",
              "Classifies impacts as economic, social or environmental",
              "Reaches a clear, justified decision that follows from the arguments given",
              "Uses accurate geographical vocabulary and paragraphs"
            ],
            model: "Fracking is the extraction of gas from shale rock by pumping water, sand and chemicals down a well at high pressure to fracture the rock. The case for fracking in the UK is mainly economic: the shale reserves are estimated to be worth £1.5 trillion, and the government has argued that using them would improve energy security, create jobs and lower energy prices, while landowners would profit from renting their land. There is also an environmental case, because gas releases about half as much carbon dioxide as coal. The case against is strong on environmental grounds: in 2011 small tremors near Blackpool were linked to test drilling, each borehole needs around four million gallons of water that must be transported in, and leaks could poison drinking water, while shale gas is still a fossil fuel that adds to climate change. Socially, public opposition has stopped fracking in the UK and it is banned in France and Bulgaria. Overall I think the UK should not allow fracking, because the economic gains are uncertain while the environmental risks are long-term, and the money would be better invested in renewable energy that improves security without adding carbon."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1: The term fracking means... (two sentences on the process).",
                "Paragraph 2: set out the case for fracking. Give two arguments, each with a fact from the cards, and label them economic, social or environmental.",
                "Paragraph 3: set out the case against. Give two arguments, each with a fact, and label them.",
                "Paragraph 4: give your decision and the reason for it, picking the side your evidence supports.",
                "Read it back: does every argument have a piece of evidence next to it?"
              ],
              example: {
                q: "Write a two-sentence paragraph giving ONE developed argument against a new coal mine, with evidence.",
                steps: ["State the argument.", "Add the evidence and the consequence."],
                answer: "A new coal mine would increase greenhouse gas emissions. Coal releases about twice as much carbon dioxide as gas for the same energy, so burning it would make it harder for the UK to meet its climate targets."
              }
            },
            core: { hint: "Define, for (two with facts), against (two with facts), decide. Label each impact economic, social or environmental." },
            stretch: { extend: "Add a counter-argument paragraph: take the strongest point from the side you disagree with and explain why it does not change your decision." }
          },
          explain: "Say, in one sentence, why a nine-mark answer must give evidence on both sides before it reaches a decision.",
          why: "The strongest answers define the process, give developed and evidenced arguments on both sides, classify the impacts, and reach a decision that follows from the evidence rather than from opinion alone."
        }
      ]
    },

    /* ───────────── 5 · Alaska and conflict ───────────── */
    {
      key: "alaska-and-conflict", n: 5, title: "Oil in the Arctic, and the conflicts resources cause",
      lead: "Why the tundra of Alaska is so fragile, the arguments for and against drilling for oil in the Arctic National Wildlife Refuge, and why resources so often lead to conflict.",
      covers: [8, 9],
      pretext: {
        words: [
          { word: "tundra", means: "a cold, treeless landscape where the ground is frozen for most of the year", sentence: "The Arctic tundra has a very short summer." },
          { word: "permafrost", means: "a layer of soil and dead plants that stays frozen all year", sentence: "Buildings can melt the permafrost beneath them." },
          { word: "refuge", means: "a protected area where wildlife is kept safe", sentence: "The Arctic National Wildlife Refuge is home to caribou and Native Alaskan villages." },
          { word: "caribou", means: "the North American reindeer, which migrates across the tundra", sentence: "Caribou stay away from areas with roads and buildings." },
          { word: "oil spill", means: "oil escaping from a tanker, pipeline or well into the environment", sentence: "The Exxon Valdez oil spill of 1989 still pollutes Alaskan beaches." },
          { word: "conflict", means: "a serious disagreement or prolonged struggle", sentence: "Fresh water and oil are resources that often cause conflict." }
        ],
        passage: [
          "Alaska is the largest state of the USA, in the far north-west of North America.",
          "Much of it is tundra: cold, treeless land with frozen soil called permafrost.",
          "The Arctic National Wildlife Refuge protects caribou, birds and the villages of Native Alaskans.",
          "There is a great deal of oil beneath Alaska.",
          "In 2017, 1.2 billion barrels were discovered, the biggest onshore find in the USA for thirty years.",
          "The oil industry supports a third of all jobs in Alaska.",
          "Oil money pays for schools, roads and hospitals in remote places.",
          "But drilling is risky in the cold.",
          "In 1989 the tanker Exxon Valdez spilled 11 million gallons of oil, and the beaches are still polluted.",
          "Roads and buildings melt the permafrost, and caribou stay away from developed areas.",
          "Burning the oil adds to climate change.",
          "Resources like oil, water and land can cause conflict between people who want them."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "منظر بارد بلا أشجار تبقى أرضه متجمّدة معظم السنة (tundra)",
            "طبقة من التربة والنبات الميّت تبقى متجمّدة طوال السنة (permafrost)",
            "منطقة محميّة تُحفظ فيها الحياة الفطرية آمنة (refuge)",
            "رنّة أمريكا الشمالية، وهي تهاجر عبر التندرا (caribou)",
            "هرب النفط من ناقلة أو أنبوب أو بئر إلى البيئة (oil spill)",
            "خلاف خطير أو صراع ممتدّ (conflict)"
          ],
          "passage": [
            "ألاسكا (Alaska) أكبر ولاية في الولايات المتّحدة، في أقصى شمال غرب أمريكا الشمالية.",
            "ومعظمها تندرا (tundra): أرض باردة بلا أشجار تربتها متجمّدة وتُسمّى التربة الصقيعية (permafrost).",
            "ومحمية الحياة الفطرية الوطنية القطبية تحمي الكاريبو (caribou) والطيور وقرى سكّان ألاسكا الأصليين.",
            "وتحت ألاسكا نفط كثير جدًّا.",
            "وفي 2017 اكتُشف 1.2 مليار برميل، وهو أكبر اكتشاف برّي في الولايات المتّحدة منذ ثلاثين سنة.",
            "وصناعة النفط تدعم ثلث الأعمال كلّها في ألاسكا.",
            "ومال النفط يدفع ثمن المدارس والطرق والمستشفيات في أماكن نائية.",
            "ولكنّ الحفر محفوف بالخطر في البرد.",
            "وفي 1989 سكبت الناقلة إكسون فالديز (Exxon Valdez) 11 مليون غالون من النفط، والشواطئ لا تزال ملوّثة.",
            "والطرق والأبنية تذيب التربة الصقيعية، والكاريبو يبتعد عن المناطق المعمورة.",
            "وحرق النفط يزيد تغيّر المناخ.",
            "والموارد كالنفط والماء والأرض قد تسبّب صراعًا بين الناس الذين يريدونها."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "zimny, bezdrzewny krajobraz, w którym ziemia jest zmarznięta przez większość roku (tundra)",
            "warstwa gleby i martwych roślin, która jest zmarznięta przez cały rok (permafrost)",
            "obszar chroniony, na którym dzikie zwierzęta są bezpieczne",
            "renifer północnoamerykański, który wędruje przez tundrę (caribou)",
            "ropa, która wydostaje się z tankowca, rurociągu albo odwiertu do środowiska (oil spill)",
            "poważny spór albo długa walka"
          ],
          "passage": [
            "Alaska jest największym stanem USA, na daleko wysuniętym północnym zachodzie Ameryki Północnej.",
            "Dużą jej część zajmuje tundra: zimny, bezdrzewny teren z zamarzniętą glebą zwaną permafrost.",
            "Arctic National Wildlife Refuge chroni karibu, ptaki i wsie rdzennych mieszkańców Alaski.",
            "Pod Alaską jest bardzo dużo ropy.",
            "W 2017 roku odkryto tam 1.2 miliarda baryłek, co było największym znaleziskiem na lądzie w USA od trzydziestu lat.",
            "Przemysł naftowy daje jedną trzecią wszystkich miejsc pracy na Alasce.",
            "Pieniądze z ropy płacą za szkoły, drogi i szpitale w odległych miejscach.",
            "Ale wiercenie w takim zimnie jest ryzykowne.",
            "W 1989 roku z tankowca Exxon Valdez wyciekło 11 milionów galonów ropy i plaże są wciąż zanieczyszczone.",
            "Drogi i budynki roztapiają permafrost, a karibu trzymają się z dala od zabudowanych terenów.",
            "Spalanie tej ropy pogłębia zmianę klimatu.",
            "Zasoby takie jak ropa, woda i ziemia mogą wywoływać konflikty między ludźmi, którzy ich chcą."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma paisagem fria e sem árvores, onde o solo está congelado quase todo o ano (tundra)",
            "uma camada de solo e plantas mortas que fica congelada todo o ano (permafrost)",
            "uma área protegida onde a vida selvagem é mantida em segurança (refuge, reserva)",
            "a rena da América do Norte, que migra pela tundra (caribou, caribu)",
            "petróleo que escapa de um navio, de um oleoduto ou de um poço para o ambiente (oil spill, derrame de petróleo)",
            "um desacordo grave ou uma luta prolongada (conflict, conflito)"
          ],
          "passage": [
            "O Alasca é o maior estado dos EUA, no extremo noroeste da América do Norte.",
            "Grande parte dele é tundra: terra fria e sem árvores, com solo congelado a que se chama permafrost.",
            "A Arctic National Wildlife Refuge protege caribus, aves e as aldeias dos nativos do Alasca.",
            "Há muito petróleo debaixo do Alasca.",
            "Em 2017 foram descobertos 1.2 mil milhões/bilhões de barris, a maior descoberta em terra nos EUA em trinta anos.",
            "A indústria do petróleo sustenta um terço de todos os empregos do Alasca.",
            "O dinheiro do petróleo paga escolas, estradas e hospitais em lugares remotos.",
            "Mas perfurar é arriscado no frio.",
            "Em 1989 o navio Exxon Valdez derramou 11 milhões de galões de petróleo, e as praias continuam poluídas.",
            "As estradas e os edifícios derretem o permafrost, e os caribus afastam-se das áreas construídas.",
            "Queimar o petróleo agrava as mudanças climáticas.",
            "Recursos como o petróleo, a água e a terra podem causar conflitos entre as pessoas que os querem."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "dhul qabow oo geedo la'aan ah oo dhulkiisu sanadka inta badan barafoobay yahay",
            "lakab ciid iyo dhir dhintay oo sanadka oo dhan barafoobay sii ahaada",
            "meel la ilaaliyo oo duurjoogtu ku badbaado",
            "deerada Waqooyiga Ameerika, taasoo tundra-da ka gudubta",
            "saliid oo markab, tuubo ama god ka baxaysa oo deegaanka gasha",
            "muran daran ama dagaal muddo dheer socda"
          ],
          "passage": [
            "Alaska waa gobolka ugu weyn Maraykanka, oo ku yaal waqooyi-galbeedka fog ee Waqooyiga Ameerika.",
            "Inta badan waa tundra: dhul qabow oo geedo la'aan ah oo ciiddiisu barafoobay oo la yiraahdo permafrost.",
            "Arctic National Wildlife Refuge waxay ilaalisaa caribou, shimbiro iyo tuulooyinka dadka asalka ah ee Alaska.",
            "Saliid aad u badan ayaa ku jirta Alaska hoostiisa.",
            "2017-kii, 1.2 bilyan oo foosto ayaa la helay, oo ahayd kaydka dhul-gudaha ugu weyn Maraykanka soddon sano.",
            "Warshadaha saliidda waxay taageeraan saddex-meelood meel shaqooyinka Alaska oo dhan.",
            "Lacagta saliidda waxay bixisaa iskuullada, waddooyinka iyo isbitaallada meelaha fogfog.",
            "Laakiin qodista halis ayay tahay qabowga.",
            "1989-kii markabkii Exxon Valdez wuxuu daadiyay 11 milyan galan oo saliid, xeebahuna weli way wasakhsan yihiin.",
            "Waddooyinka iyo dhismayaashu waxay permafrost-ka dhalaaliyaan, caribou-na waxay ka fogaadaan meelaha la horumariyay.",
            "Gubidda saliidda waxay isbeddelka cimilada kordhisaa.",
            "Kheyraadka sida saliidda, biyaha iyo dhulka waxay khilaaf keeni karaan dadka doonaya."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "холодний безлісий ландшафт, де ґрунт замерзлий більшу частину року (tundra)",
            "шар ґрунту й мертвих рослин, який залишається замерзлим цілий рік (permafrost)",
            "захищена територія, де дика природа в безпеці (refuge)",
            "північноамериканський олень, який мігрує через тундру (caribou)",
            "нафта, що витікає з танкера, трубопроводу або свердловини в довкілля (oil spill)",
            "серйозна незгода або тривала боротьба (conflict)"
          ],
          "passage": [
            "Аляска — найбільший штат США, на далекому північному заході Північної Америки.",
            "Більша її частина — тундра: холодна безліса земля із замерзлим ґрунтом, який називають мерзлотою (permafrost).",
            "Арктичний національний резерват дикої природи (Arctic National Wildlife Refuge) захищає карибу, птахів і селища корінних жителів Аляски.",
            "Під Аляскою дуже багато нафти.",
            "У 2017 році там знайшли 1.2 мільярда барелів — найбільше наземне відкриття у США за тридцять років.",
            "Нафтова галузь підтримує третину всіх робочих місць на Алясці.",
            "Гроші від нафти оплачують школи, дороги й лікарні у віддалених місцях.",
            "Але буріння на холоді ризиковане.",
            "У 1989 році танкер Exxon Valdez розлив 11 мільйонів галонів нафти, і пляжі досі забруднені.",
            "Дороги й будівлі розтоплюють мерзлоту, а карибу тримаються подалі від освоєних місць.",
            "Спалювання цієї нафти додає до зміни клімату.",
            "Ресурси, як-от нафта, вода й земля, можуть спричиняти конфлікт між людьми, які їх хочуть."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایک سرد، بے درخت منظر جہاں زمین سال کے زیادہ تر حصے میں جمی رہتی ہے (tundra)",
            "مٹی اور مرے ہوئے پودوں کی ایک تہہ جو سارا سال جمی رہتی ہے (permafrost)",
            "ایک محفوظ علاقہ جہاں جنگلی حیات کو بچا کر رکھا جاتا ہے (refuge)",
            "شمالی امریکہ کا رین ڈیئر، جو tundra کے آر پار ہجرت کرتا ہے (caribou)",
            "کسی جہاز، پائپ لائن یا کنویں سے تیل کا ماحول میں بہہ نکلنا (oil spill)",
            "سخت اختلاف یا لمبی کھینچا تانی (conflict)"
          ],
          "passage": [
            "الاسکا (Alaska) امریکہ کی سب سے بڑی ریاست ہے، جو شمالی امریکہ کے دور شمال مغرب میں ہے۔",
            "اس کا بڑا حصہ tundra ہے: سرد، بے درخت زمین جس کی جمی ہوئی مٹی کو permafrost کہتے ہیں۔",
            "Arctic National Wildlife Refuge، caribou، پرندوں اور مقامی الاسکن لوگوں کے گاؤں کی حفاظت کرتا ہے۔",
            "الاسکا کے نیچے بہت زیادہ تیل ہے۔",
            "2017 میں 1.2 ارب پیپے دریافت ہوئے، جو تیس سال میں امریکہ کی خشکی پر سب سے بڑی دریافت تھی۔",
            "تیل کی صنعت الاسکا کے تمام روزگار کے تیسرے حصے کو سہارا دیتی ہے۔",
            "تیل کے پیسوں سے دور دراز جگہوں پر سکول، سڑکیں اور ہسپتال بنتے ہیں۔",
            "مگر سردی میں کھدائی خطرے کا کام ہے۔",
            "1989 میں Exxon Valdez نامی جہاز سے 1 کروڑ 10 لاکھ گیلن تیل بہہ گیا، اور ساحل آج بھی آلودہ ہیں۔",
            "سڑکیں اور عمارتیں permafrost کو پگھلا دیتی ہیں، اور caribou تعمیر والے علاقوں سے دور رہتے ہیں۔",
            "تیل جلانا climate change کو بڑھاتا ہے۔",
            "تیل، پانی اور زمین جیسے resources ان لوگوں کے درمیان conflict پیدا کر سکتے ہیں جو انھیں چاہتے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "The tundra of Alaska",
          paragraphs: [
            "Alaska is a land of caribou running through Denali National Park, of Mount Denali (also called Mount McKinley), the highest point in North America, of remote tribes, oil pipelines and a state capital, Juneau. Much of the far north is tundra. In the Arctic tundra the average temperature is between −12 and −6 degrees Celsius, and the summer growing season lasts just 50 to 60 days, during which the sun shines for 24 hours a day. Precipitation is very low, but so is evaporation, and because the water cannot drain through the permafrost the ground becomes boggy in summer.",
            "Permafrost is a layer of frozen soil and dead plants that can extend 450 metres below the surface. In the southern parts of the Arctic the top layer thaws each summer, creating wet, soggy ground. Tundra plants hug the ground, out of the wind, and keep their roots shallow so that they can draw water from the thin soil lying on top of the permafrost. Because the growing season is so short, a tundra plant that is killed can take years to be replaced. The moisture breeds millions of mosquitoes and other insects, which feed the millions of migrating birds that nest in the Arctic each summer.",
            "The Arctic National Wildlife Refuge, in the north-east of Alaska, protects this environment. Its location map shows coastal areas, major rivers and mountain landscapes, and the refuge is home to several Alaska Native villages. Developing anything here is hard: cold temperatures, a remote landscape, difficult ground for transport, and wildlife and natural beauty that are easily disturbed. Vehicles are only allowed to cross the tundra when the snow is 6 inches deep and the ground is frozen to 30 cm."
          ],
          tip: "Fragile is the word. Slow-growing plants, permafrost that melts under heat and pressure, and animals that avoid development: damage here lasts for decades."
        },
        {
          heading: "The case for drilling",
          paragraphs: [
            "Oil is Alaska's economy. In 2017, 1.2 billion barrels of oil were discovered in Alaska, the biggest onshore discovery in the USA in three decades. The oil industry supports a third of all Alaska jobs, around 110 000 in the state, and accounts for 38 % of all wages; each direct oil and gas job is reckoned to create twenty more. The state derives 90 % of its revenue from oil and gas, which is how Alaska manages to have no state sales tax and no income tax: oil money pays for state troopers, roads, schools, airports, health facilities and high-speed internet in remote rural areas. The mayor of Point Hope has pointed out that oil and gas taxes gave his community warm homes, light and power that did not exist when he was growing up.",
            "That economy is under strain. Use of the Trans-Alaska Pipeline System has fallen by 39 % over the past 10 years as the older oil fields at Prudhoe Bay run down, and the state has faced a $3 billion budget deficit. OPEC supplies about a third of the world's oil, and its overproduction pushed prices down so far that Alaska lost $2.7 billion of oil profits in 2016. New drilling, supporters argue, would bring jobs, restore revenue and loosen America's reliance on oil bought abroad. Most Alaskans are in favour of offshore drilling in the Arctic, and some Alaska Native groups back it for the jobs and income it could bring their communities.",
            "Supporters also say the industry has learned to work with the tundra. The Trans-Alaska pipeline is raised off the ground, which avoids melting the permafrost and lets caribou migrate beneath it, and one oil company has suggested that spilled oil would become more viscous in the cold Arctic water and so would not spread as far."
          ],
          tip: "The strongest arguments for drilling are economic: jobs, wages, state revenue, no income tax. Quote the figures from the cards."
        },
        {
          heading: "The case against drilling",
          paragraphs: [
            "Opponents point first to the climate. Burning oil, like burning any fossil fuel, releases the greenhouse gases that drive climate change, so every new field makes the problem worse. Then there is the risk of a spill. In 1989 the oil tanker Exxon Valdez ran onto a reef in Prince William Sound, Alaska, and let 11 million gallons of oil into the sea. Oil from it is still on the beaches and in the shore ecosystem today, and a pod of orcas that lost 15 of its 22 members in the disaster has not produced a calf since. In Arctic conditions a clean-up would be even harder: the chemical dispersants used on spills may not work in cold temperatures, and spilled oil can become trapped within the ice and remain there until spring. In the Arctic Ocean, drilling itself is made difficult by hurricane-force winds, 30 ft waves, sub-zero temperatures and winter darkness.",
            "On land, the damage is quieter but lasting. Buildings and roads press down on the ground and warm it, and the permafrost beneath them melts. Caribou keep away from the developed parts of their habitat, which can leave them over-grazing the vegetation further off. Native Alaskans are worried that the noise of oil exploration will push bowhead whales further out to sea, so that whaling becomes dangerous for the hunters who follow them. A representative of the Gwich'in people has said that hunting for food, for clothing and for tools is part of who they are as Natives, and not something they can risk losing.",
            "The decision has swung with politics. One US president banned drilling for oil in the Arctic National Wildlife Refuge; the next reversed that decision in 2017, arguing that it would create many thousands of jobs and great wealth. The class debate took the roles of the oil company, residents of Prudhoe Bay and Juneau, a Native Alaskan tribe, a wildlife expert, public-service workers in remote Alaska and the state government, and that cast list is a reminder that a resource decision has many stakeholders with different stakes."
          ],
          worked: {
            q: "Sort these three cards into natural, economic and social impacts: caribou keep away from developed areas; the oil industry accounts for 38 % of all wages in Alaska; the noise of exploration may push bowhead whales out to sea, making whaling dangerous for hunters.",
            steps: [
              "Caribou avoiding developed land is about wildlife and habitat: natural (environmental).",
              "Wages are about money and jobs: economic.",
              "The whale card mentions an animal, but the impact described is on the hunters and their safety and way of life: social.",
              "Notice that the third card could also be filed as natural; say so, and explain which impact the card emphasises."
            ],
            answer: "Caribou: natural. Wages: economic. Whaling: social (with a natural link), because the card is about the danger to hunters and their way of life."
          },
          tip: "Natural, economic, social, political: label every point. The political point is the ban and its reversal."
        },
        {
          heading: "Resources and conflict",
          paragraphs: [
            "The lesson opened with three company logos and asked what word linked them. The answer was conflict: a serious disagreement, a struggle between people who oppose each other, which can turn into a fight and can last for years. Resources cause conflict because they are valuable, limited and unevenly spread. Where one group owns a resource and another needs it, or two groups claim the same territory, disagreement follows.",
            "Not every resource is equally likely to cause conflict. The class ranked nine: fresh water, oil, uranium, diamonds, gold, coal, food, land and sunshine. Resources that are essential and scarce, like fresh water and land, and resources that are enormously valuable, like oil and diamonds, sit near the top. Sunshine sits at the bottom: nobody can own it or run out of it. The reasoning behind your ranking matters more than the order itself, and a good explanation uses the lesson's words: ownership, territory, exploitation, culture, government, international and struggle.",
            "Alaska shows how a single resource can set groups against each other without a shot being fired: the state government and the oil company against wildlife experts; some Native groups against others; people who want jobs now against people who want the tundra protected for the future. Conflict over resources is not only about war. It is about who decides, who gains and who bears the cost."
          ],
          tip: "Conflict needs two sides who want the same thing. Name both sides and say what each wants when you explain a resource conflict."
        }
      ],
      gate: [
        { kind: "numeric", q: "How many million gallons of oil did the tanker Exxon Valdez release into the environment in 1989?", answer: 11, tolerance: 0, units: "million gallons", check: "EXXON_GALLONS_MILLION", why: "The Exxon Valdez struck a reef in Prince William Sound in 1989 and released 11 million gallons of oil; the beaches are still polluted today.",
          misconceptions: [
            { answer: 4, says: "Four million gallons is the water used by one fracking borehole, from the last chapter. The Exxon Valdez released 11 million gallons of oil.", check: "FRACK_GALLONS_MILLION" },
            { answer: 15, says: "15 is the number of orcas the pod lost after the spill, out of 22. The spill itself released 11 million gallons of oil.", check: "ORCA_LOST" },
            { answer: 1.2, says: "1.2 billion barrels is the oil discovered in Alaska in 2017. The Exxon Valdez spill was 11 million gallons.", check: "ALASKA_BARRELS_BILLION" }
          ] },
        { kind: "mcq", q: "What is permafrost?", options: ["A layer of frozen soil and dead plants beneath the surface that stays frozen all year", "The thick sea ice covering the Arctic Ocean", "Snow that falls in the Arctic summer", "A glacier that flows slowly down a mountain"], answer: 0, why: "Permafrost is permanently frozen ground: soil and dead plant material that can extend 450 metres down. Heat and pressure from buildings and roads make it melt.",
          feedback: [
            "",
            "Sea ice floats on the ocean. Permafrost is on land: a layer of frozen soil and dead plants beneath the surface that stays frozen all year.",
            "Snow is precipitation that falls and melts. Permafrost is the ground itself, frozen soil and dead plants that stay frozen year round, up to 450 metres deep.",
            "A glacier is a moving body of ice. Permafrost does not move; it is frozen soil and dead plants beneath the tundra surface."
          ] },
        { kind: "gap", q: "Conflict means a serious disagreement or a prolonged ___ between people who oppose each other.", answer: "struggle", options: ["struggle", "agreement", "celebration"], why: "The lesson gave several meanings for conflict: coming into disagreement, opposing someone, fighting, controversy, and a struggle that drags on.",
          feedback: {
            "agreement": "Agreement is the opposite of conflict. Conflict is a disagreement that can become a prolonged struggle or a fight.",
            "celebration": "A celebration brings people together; conflict sets them against each other. The lesson defined conflict as a prolonged struggle between those who oppose each other."
          } }
      ],
      modules: [
        {
          title: "Sorting the Alaska cards",
          task: {
            kind: "match",
            q: "Match each card about oil drilling in Alaska to the kind of impact it describes.",
            pairs: [
              ["Natural (environmental)", "Heat and pressure from buildings and roads make the permafrost beneath them melt"],
              ["Economic", "The oil industry supports a third of all Alaska jobs, around 110 000 in the state"],
              ["Social", "The refuge is home to several Alaska Native villages whose hunting is part of their identity"],
              ["Political", "One president banned drilling in the refuge and the next reversed the ban in 2017"]
            ]
          },
          contexts: [
            { label: "Town hall debate", q: "You are preparing a speech for the town hall debate and want to cover every kind of impact. Match each card about drilling in Alaska to the kind of impact it describes." },
            { label: "Report to government", q: "Your report to the government on drilling in the Arctic National Wildlife Refuge is organised by type of impact. Match each card to the kind of impact it describes." }
          ],
          levels: {
            support: {
              steps: [
                "Natural means the environment: land, water, plants, animals, climate. Which card is about the ground itself?",
                "Economic means money, jobs, taxes, prices. Which card counts jobs?",
                "Social means people, communities and their way of life. Which card is about villages and identity?",
                "Political means governments, laws and decisions. Which card is about presidents?"
              ],
              example: {
                q: "Sort these two fracking cards: fracking is banned in France and Bulgaria; fracking can devalue local house prices.",
                steps: ["A ban is a government decision: political.", "House prices are money: economic."],
                answer: "Ban in France and Bulgaria: political. House prices: economic."
              }
            },
            core: { hint: "Ground, jobs, villages, presidents: environment, economy, society, politics." },
            stretch: { extend: "Pick one card that fits two headings at once and explain both links. Then say which heading an examiner would most expect." }
          },
          explain: "Say, in one sentence, why classifying impacts helps you write a balanced nine-mark answer.",
          why: "Melting permafrost is damage to the natural environment; jobs are economic; the villages and their way of life are social; a presidential ban and its reversal are political. Most strong answers use all four."
        },
        {
          title: "Reading the unemployment card",
          task: {
            kind: "numeric",
            q: "In December 2016 the unemployment rate in Alaska was 6.7 %, which the card says was 2 percentage points higher than the USA average. What was the USA average unemployment rate?",
            answer: 4.7, tolerance: 0, units: "%", check: "ALASKA_UNEMP_PCT-UNEMP_GAP_PTS",
            why: "Alaska was 2 points higher than the USA, so the USA average was lower: 6.7 − 2 = 4.7 %.",
            misconceptions: [
              { answer: 8.7, says: "You added 2 instead of subtracting. Alaska's rate was HIGHER than the USA's, so the USA figure is lower: 6.7 − 2 = 4.7 %.", check: "ALASKA_UNEMP_PCT+UNEMP_GAP_PTS" },
              { answer: 2, says: "2 is the gap between the two rates, not the USA rate itself. Subtract the gap from Alaska's 6.7 % to get 4.7 %.", check: "UNEMP_GAP_PTS" },
              { answer: 3.35, says: "You halved 6.7. The card says Alaska was 2 percentage POINTS higher, so subtract 2: 6.7 − 2 = 4.7 %.", check: "ALASKA_UNEMP_PCT/2" }
            ]
          },
          contexts: [
            { label: "Debate speech", q: "In your debate speech you want to compare Alaska with the rest of the USA. Alaska's unemployment rate was 6.7 % in December 2016, 2 percentage points higher than the USA average. What was the USA average?", check: "ALASKA_UNEMP_PCT-UNEMP_GAP_PTS" },
            { label: "Newspaper graphic", q: "A newspaper graphic shows Alaska's unemployment at 6.7 % in December 2016 and notes this is 2 percentage points above the USA average. What figure should it show for the USA?", check: "ALASKA_UNEMP_PCT-UNEMP_GAP_PTS" },
            { label: "State government", q: "The state government argues that drilling is needed because Alaska's unemployment, 6.7 % in December 2016, is 2 percentage points higher than the USA average. What is the USA average it is comparing with?", check: "ALASKA_UNEMP_PCT-UNEMP_GAP_PTS" }
          ],
          levels: {
            support: {
              steps: [
                "Write down Alaska's rate: 6.7 %.",
                "Alaska is HIGHER than the USA by 2 points, so the USA must be LOWER.",
                "Lower means subtract: 6.7 − 2.",
                "Check: is 4.7 less than 6.7? Yes, so the direction is right."
              ],
              example: {
                q: "A town's unemployment rate is 5.5 %, which is 1.5 percentage points higher than the national average. What is the national average?",
                steps: ["The town is higher, so the nation is lower.", "5.5 − 1.5 = 4.0 %."],
                answer: "4.0 %",
                checks: [{ expr: "5.5-1.5", value: 4.0, tol: 0 }]
              }
            },
            core: { hint: "Higher than means the other figure is smaller. Subtract." },
            stretch: { extend: "Explain how the state government and a wildlife expert might each use this unemployment figure in the debate, and why the same number can support opposite conclusions." }
          },
          explain: "Say, in one sentence, how you decided whether to add or subtract.",
          why: "Alaska's 6.7 % was 2 points above the national figure, so the national figure was 6.7 − 2 = 4.7 %."
        },
        {
          title: "Should drilling be allowed in the refuge?",
          task: {
            kind: "written",
            q: "To what extent, if at all, should oil be drilled inside the Arctic National Wildlife Refuge? Use evidence from the cards to support your answer. (9 marks)",
            marks: 9,
            criteria: [
              "Explains why the tundra environment is valuable and fragile (permafrost, slow-growing plants, caribou, migrating birds)",
              "Gives at least two developed arguments FOR drilling with evidence (jobs, wages, state revenue, the 2017 discovery, the raised pipeline)",
              "Gives at least two developed arguments AGAINST with evidence (Exxon Valdez, permafrost melt, caribou, whaling, climate change)",
              "Covers natural, economic, social and political aspects",
              "Reaches a judgement on the extent (fully, partly, not at all) that follows from the evidence",
              "Uses PEEL paragraphs: point, evidence, explanation, link"
            ],
            model: "The Arctic National Wildlife Refuge is a fragile tundra environment: plants grow slowly in a 50 to 60 day season, the permafrost beneath melts under heat and pressure, and it is home to caribou, nesting birds and several Alaska Native villages. The case for drilling is economic. Oil supports a third of Alaska's jobs and 38 % of its wages, and 90 % of state revenue comes from oil and gas, paying for schools, roads and hospitals in remote areas; with the Prudhoe Bay fields declining and a $3 billion budget deficit, the 1.2 billion barrels discovered in 2017 look like a lifeline, and the raised Trans-Alaska pipeline shows the industry can protect permafrost and let caribou pass. The case against is environmental and social. The Exxon Valdez spill of 1989 released 11 million gallons of oil that still pollute the shore, and in Arctic ice a spill would be even harder to clean up; roads and buildings melt permafrost, caribou avoid developed areas and over-graze elsewhere, and noise could push bowhead whales offshore, endangering Native hunters whose culture depends on them. Burning the oil also adds to climate change. Politically the decision has flipped between presidents, showing how contested it is. To a limited extent drilling could be allowed: only outside the most sensitive areas, with raised pipelines, winter-only vehicle access and spill plans agreed with Native communities. The long-term damage to a landscape that takes decades to recover outweighs a short-term boost to an economy that in any case needs to move beyond oil."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1: describe the tundra and why it is fragile (two facts from the cards).",
                "Paragraph 2: PEEL for drilling. Point: the economy needs oil. Evidence: jobs, wages, revenue figures. Explain: what the money pays for. Link: so drilling helps Alaskans.",
                "Paragraph 3: PEEL against. Point: drilling damages the environment and communities. Evidence: Exxon Valdez, permafrost, caribou, whales. Explain the long-term harm. Link.",
                "Paragraph 4: your judgement on the EXTENT: fully, partly or not at all, and the conditions you would set.",
                "Check you have at least one natural, one economic, one social and one political point."
              ],
              example: {
                q: "Write one PEEL paragraph arguing against a new road across a tundra nature reserve.",
                steps: ["Point, then evidence, then explanation, then link back to the question."],
                answer: "A new road would damage the tundra for decades. Roads press on the ground and warm it, so the permafrost beneath melts, and tundra plants killed by construction can take years to regrow because the growing season is only 50 to 60 days. This means the damage would last long after the road was built. So the road should not be built across the reserve."
              }
            },
            core: { hint: "Fragile environment, economic case, environmental and social case, political context, judgement on extent. Evidence from the cards in every paragraph." },
            stretch: { extend: "Could oil be taken from this area sustainably? Add a paragraph that answers this directly, defining sustainable and testing the raised pipeline and winter-only access against your definition." }
          },
          explain: "Say, in one sentence, what the phrase to what extent asks you to do that a yes or no question does not.",
          why: "Top answers set the scene, argue both sides with card evidence across natural, economic, social and political aspects, and reach a judgement on the extent that follows from the evidence."
        }
      ]
    },

    /* ───────────── 6 · renewable and sustainable energy ───────────── */
    {
      key: "renewable-and-sustainable", n: 6, title: "Renewable energy and a sustainable future",
      lead: "The seven types of renewable energy and how each one works, how to write up a renewable energy case study, how to cut energy use at home and in your town, and what makes energy sustainable.",
      covers: [10, 11],
      pretext: {
        words: [
          { word: "renewable", means: "a source of energy that will not run out", sentence: "Wind and solar power are renewable." },
          { word: "turbine", means: "a machine with blades that spin to generate electricity", sentence: "Wind, water, steam and waves can all turn a turbine." },
          { word: "biomass", means: "wood, plants or animal waste burnt for energy or made into biofuel", sentence: "Some power stations burn biomass instead of coal." },
          { word: "geothermal", means: "using heat from deep inside the Earth", sentence: "Geothermal power stations turn underground heat into electricity." },
          { word: "sustainable", means: "meeting today's needs without stopping future generations from meeting theirs", sentence: "Sustainable energy does not run out or wreck the climate." },
          { word: "energy conservation", means: "using less energy by wasting less", sentence: "Insulating a loft is a simple form of energy conservation." }
        ],
        passage: [
          "Renewable energy comes from sources that will not run out.",
          "The lesson named seven types: biomass, wind, tidal, solar, geothermal, wave and hydro-electric power.",
          "Most of them work by turning a turbine to generate electricity.",
          "Wind turns the blades of a wind turbine on land or out at sea.",
          "Falling water from a dam turns the turbines of a hydro-electric power station.",
          "Solar panels use energy from the sun to heat water or make electricity.",
          "A good case study explains how a renewable scheme helps a community develop sustainably.",
          "We can also use less energy.",
          "Modern boilers, insulation and walking to the shops all cut our carbon footprint.",
          "Towns can build cycle lanes, recycle and buy food from local growers.",
          "Governments can tax carbon and invest in renewable energy.",
          "Sustainable energy provides energy today without preventing future generations from meeting their needs."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "مصدر طاقة لا ينفد (renewable)",
            "آلة لها ريشات تدور لتولّد الكهرباء (turbine)",
            "الخشب أو النبات أو فضلات الحيوان، تُحرق للطاقة أو تُحوّل وقودًا حيويًّا (biomass)",
            "استخدام الحرارة من عمق الأرض (geothermal)",
            "تلبية احتياجات اليوم دون أن تمنع الأجيال المقبلة من تلبية احتياجاتها (sustainable)",
            "استخدام طاقة أقلّ بتقليل الهدر (energy conservation)"
          ],
          "passage": [
            "الطاقة المتجدّدة تأتي من مصادر لا تنفد.",
            "وسمّى الدرس سبعة أنواع: الكتلة الحيوية والريح والمدّ والطاقة الشمسية والحرارة الأرضية والموج والطاقة الكهرمائية.",
            "ومعظمها يعمل بإدارة عَنَفة (turbine) لتوليد الكهرباء.",
            "فالريح تدير ريشات عَنَفة الريح في البرّ أو في البحر.",
            "والماء الساقط من سدّ يدير عَنَفات محطّة الكهرباء المائية.",
            "والألواح الشمسية تستخدم طاقة الشمس لتسخين الماء أو لتوليد الكهرباء.",
            "ودراسة الحالة الجيّدة تشرح كيف يساعد مشروع متجدّد مجتمعًا على التطوّر تطوّرًا مستدامًا.",
            "ويمكننا أيضًا أن نستخدم طاقة أقلّ.",
            "فالمراجل الحديثة والعزل والمشي إلى المتاجر كلّها تقلّل أثرنا الكربوني.",
            "والبلدات تستطيع أن تبني مسارات للدرّاجات وأن تعيد التدوير وأن تشتري الغذاء من المزارعين المحلّيين.",
            "والحكومات تستطيع أن تفرض ضريبة على الكربون وأن تستثمر في الطاقة المتجدّدة.",
            "والطاقة المستدامة توفّر الطاقة اليوم دون أن تمنع الأجيال المقبلة من تلبية احتياجاتها."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "źródło energii, które się nie wyczerpie (renewable)",
            "maszyna z łopatami, które się obracają, żeby wytworzyć prąd (turbine)",
            "drewno, rośliny albo odchody zwierząt spalane dla energii albo przerabiane na biopaliwo (biomass)",
            "korzystanie z ciepła z głębi Ziemi (geothermal)",
            "zaspokajanie dzisiejszych potrzeb tak, żeby przyszłe pokolenia też mogły zaspokoić swoje (sustainable)",
            "zużywanie mniej energii przez mniejsze jej marnowanie (energy conservation)"
          ],
          "passage": [
            "Energia odnawialna pochodzi ze źródeł, które się nie wyczerpią.",
            "Na lekcji wymieniono siedem rodzajów: biomasa, wiatr, energia pływów, słońce, energia geotermalna, fale i energia wodna.",
            "Większość z nich działa przez obracanie turbiny, która wytwarza prąd.",
            "Wiatr obraca łopaty turbiny wiatrowej na lądzie albo na morzu.",
            "Spadająca woda z zapory obraca turbiny elektrowni wodnej.",
            "Panele słoneczne używają energii słońca, żeby ogrzać wodę albo wytworzyć prąd.",
            "Dobre studium przypadku wyjaśnia, jak projekt odnawialny pomaga społeczności rozwijać się w sposób zrównoważony.",
            "Możemy też zużywać mniej energii.",
            "Nowoczesne piece, ocieplenie domu i chodzenie do sklepu pieszo zmniejszają nasz ślad węglowy.",
            "Miasta mogą budować ścieżki rowerowe, segregować odpady i kupować jedzenie od miejscowych rolników.",
            "Rządy mogą opodatkować emisję dwutlenku węgla i inwestować w energię odnawialną.",
            "Energia zrównoważona daje energię dziś, nie przeszkadzając przyszłym pokoleniom w zaspokajaniu ich potrzeb."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma fonte de energia que não se vai esgotar (renewable, renovável)",
            "uma máquina com pás que giram para gerar eletricidade (turbine, turbina)",
            "madeira, plantas ou dejetos de animais queimados para dar energia ou transformados em biocombustível (biomass, biomassa)",
            "usar o calor das profundezas da Terra (geothermal, geotérmico)",
            "responder às necessidades de hoje sem impedir as gerações futuras de responder às suas (sustainable, sustentável)",
            "usar menos energia desperdiçando menos (energy conservation, conservação de energia)"
          ],
          "passage": [
            "A energia renovável vem de fontes que não se vão esgotar.",
            "A aula nomeou sete tipos: biomassa, vento, energia das marés, solar, geotérmica, das ondas e hidroelétrica.",
            "Quase todas funcionam fazendo girar uma turbina para gerar eletricidade.",
            "O vento faz girar as pás de uma turbina eólica em terra ou no mar.",
            "A queda de água de uma barragem/represa faz girar as turbinas de uma central hidroelétrica.",
            "Os painéis solares usam a energia do sol para aquecer água ou fazer eletricidade.",
            "Um bom estudo de caso explica como um projeto de energia renovável ajuda uma comunidade a desenvolver-se de forma sustentável.",
            "Também podemos gastar menos energia.",
            "Caldeiras modernas, isolamento e ir às compras a pé reduzem todos a nossa pegada de carbono.",
            "As vilas e cidades podem construir ciclovias, reciclar e comprar comida a produtores locais.",
            "Os governos podem taxar o carbono e investir em energia renovável.",
            "A energia sustentável dá energia hoje sem impedir as gerações futuras de responder às suas necessidades."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "il tamar ah oo aan dhammaan doonin",
            "mishiin leh baallo wareegaya si koronto loo soo saaro",
            "qoryo, dhir ama saydhka xayawaanka oo tamar loo gubo ama shidaal looga sameeyo",
            "isticmaalka kulayl ka yimid Dhulka hoostiisa fog",
            "buuxinta baahiyaha maanta iyadoo jiilalka mustaqbalka aan laga hor istaagin kuwooda",
            "tamar yar isticmaalid iyadoo wax yar lumay"
          ],
          "passage": [
            "Tamarta renewable waxay ka timaaddaa ilo aan dhammaan doonin.",
            "Casharku wuxuu toddoba nooc magacaabay: biomass, dabeyl, mawjadaha baddu, qorrax, geothermal, hir iyo korontada biyaha.",
            "Inta badan waxay u shaqeeyaan iyagoo turbine wareejiya si koronto loo soo saaro.",
            "Dabeyshu waxay wareejisaa baallaha wind turbine ee dhulka ama badda dhexdeeda.",
            "Biyaha ka soo dhacaya biyo-xireen waxay wareejiyaan turbines-ka warshadda korontada biyaha.",
            "Solar panels waxay tamarta qorraxda u isticmaalaan kululaynta biyaha ama samaynta korontada.",
            "Case study wanaagsan wuxuu sharraxaa sida mashruuc renewable uu bulsho ka caawiyo horumar waarid kara.",
            "Waxaan sidoo kale isticmaali karnaa tamar ka yar.",
            "Boilers casri ah, insulation iyo lug-socod dukaanka waxay dhammaan carbon footprint-keenna yareeyaan.",
            "Magaalooyinku waxay dhisi karaan waddooyin baaskiil, wax dib u warshadeyn karaan oo cunto ka iibsan karaan beeraleyda maxalliga.",
            "Dowladuhu waxay canshuur ka saari karaan kaarboonka oo waxay maalgashi ku samayn karaan tamarta renewable.",
            "Tamarta sustainable waxay tamar maanta bixisaa iyadoon jiilalka mustaqbalka ka hor istaagin buuxinta baahidooda."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "джерело енергії, яке не закінчиться (renewable)",
            "машина з лопатями, які обертаються, щоб виробляти електроенергію (turbine)",
            "дерево, рослини або тваринні відходи, які спалюють для енергії або переробляють на біопаливо (biomass)",
            "використання тепла з глибин Землі (geothermal)",
            "задоволення сьогоднішніх потреб так, щоб майбутні покоління могли задовольнити свої (sustainable)",
            "використання меншої кількості енергії завдяки меншим втратам (energy conservation)"
          ],
          "passage": [
            "Відновлювана енергія походить із джерел, які не закінчаться.",
            "На уроці назвали сім типів: біомаса, вітрова, припливна, сонячна, геотермальна, хвильова і гідроелектрична енергія.",
            "Більшість із них працюють, обертаючи турбіну (turbine), щоб виробити електроенергію.",
            "Вітер обертає лопаті вітрової турбіни на землі або в морі.",
            "Вода, що падає з греблі, обертає турбіни гідроелектростанції.",
            "Сонячні панелі використовують енергію сонця, щоб нагрівати воду або виробляти електроенергію.",
            "Добре кейс-стаді пояснює, як відновлюваний проєкт допомагає громаді розвиватися сталим шляхом.",
            "Ми також можемо використовувати менше енергії.",
            "Сучасні котли, утеплення і походи до крамниці пішки — усе це зменшує наш вуглецевий слід.",
            "Містечка можуть будувати велодоріжки, переробляти відходи і купувати їжу в місцевих господарів.",
            "Уряди можуть оподатковувати вуглець і вкладати гроші у відновлювану енергію.",
            "Стала енергетика дає енергію сьогодні, не позбавляючи майбутні покоління можливості задовольнити свої потреби."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "توانائی کا ایسا ذریعہ جو ختم نہیں ہوگا (renewable)",
            "ایک مشین جس کے پر گھوم کر بجلی بناتے ہیں (turbine)",
            "لکڑی، پودے یا جانوروں کا فضلہ، جو توانائی کے لیے جلایا جائے یا biofuel بنایا جائے (biomass)",
            "زمین کے بہت اندر کی حرارت کو استعمال کرنا (geothermal)",
            "آج کی ضرورتیں پوری کرنا، مگر آنے والی نسلوں کو ان کی ضرورتیں پوری کرنے سے نہ روکنا (sustainable)",
            "کم ضائع کر کے کم توانائی استعمال کرنا (energy conservation)"
          ],
          "passage": [
            "renewable توانائی ان ذریعوں سے آتی ہے جو ختم نہیں ہوں گے۔",
            "سبق میں سات قسمیں بتائی گئیں: biomass، ہوا، جوار بھاٹا، شمسی، geothermal، لہر اور hydro-electric بجلی۔",
            "ان میں سے زیادہ تر بجلی بنانے کے لیے turbine گھماتے ہیں۔",
            "ہوا خشکی پر یا سمندر میں کھڑے wind turbine کے پر گھماتی ہے۔",
            "بند سے گرتا ہوا پانی hydro-electric بجلی گھر کے turbines گھماتا ہے۔",
            "solar panels سورج کی توانائی سے پانی گرم کرتے ہیں یا بجلی بناتے ہیں۔",
            "اچھا case study یہ بتاتا ہے کہ کوئی renewable منصوبہ کسی برادری کو پائیدار طریقے سے ترقی میں کیسے مدد دیتا ہے۔",
            "ہم توانائی کم بھی استعمال کر سکتے ہیں۔",
            "نئے boilers، insulation اور دکان تک پیدل جانا، سب ہمارا carbon footprint کم کرتے ہیں۔",
            "قصبے سائیکل کی پٹیاں بنا سکتے ہیں، recycle کر سکتے ہیں اور مقامی کسانوں سے خوراک خرید سکتے ہیں۔",
            "حکومتیں کاربن پر ٹیکس لگا سکتی ہیں اور renewable توانائی میں پیسہ لگا سکتی ہیں۔",
            "sustainable توانائی آج توانائی دیتی ہے مگر آنے والی نسلوں کو ان کی ضرورتیں پوری کرنے سے نہیں روکتی۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Seven types of renewable energy",
          paragraphs: [
            "Renewable energy is energy from a source that cannot be exhausted. The lesson's matching task gave seven types, and most of them share one idea: something moves a turbine, and the turbine generates electricity. Wind power uses turbines that take the energy of the wind, either on land or out at sea. Wave power uses the waves made by wind blowing across water to drive turbines. Tidal power uses the currents or changes in water level caused by the tides to turn turbines. Hydro-electric power (HEP) uses the energy of falling water: a dam holds back a reservoir, the water is let down through tunnels, and the force of it falling spins the turbines.",
            "Two types use heat. Solar power uses energy from the sun, either to heat water directly or to generate electricity using photovoltaic cells. Geothermal power sends water down into the ground, where heat deep in the Earth's crust boils it into steam; the steam then drives a turbine. The seventh type is biomass: wood, plants or animal waste burnt for power or used to produce biofuels. Biomass is renewable because new plants can be grown, but burning it still releases carbon dioxide, so it is the most argued-over of the seven.",
            "Which type suits a place depends on its geography. A windy coast, a sunny desert, a mountainous region with fast rivers, a volcanic island with hot rocks, or a farming area with crop waste each points to a different source. When a question asks which renewable would be best for an area, read the landscape first."
          ],
          tip: "Seven types: biomass, wind, tidal, solar, geothermal, wave, hydro. Five of them spin a turbine; solar and biomass are the odd ones out."
        },
        {
          heading: "Writing up a renewable energy case study",
          paragraphs: [
            "The department's case study of a local sustainable energy scheme is the Chambamontera micro-hydro scheme, which you were asked to read about in the textbook (pages 298 to 299) for homework; use your notes alongside this page, because the facts of the scheme are not repeated here. Whatever the scheme, the research grid from the lesson tells you what to find out: its location (a map and a brief description); when it started and what its main aim was; its short-term advantages and disadvantages for the environment, the economy and society; its long-term advantages and disadvantages under the same three headings; and whether you think it is a viable option for the future.",
            "The nine-mark question asks you to take one renewable energy case study and show how it can help a place develop sustainably. Plan it with PEEL. Point: introduce what a renewable energy source is and why energy for development needs to be sustainable. Evidence: where your case study is, why the community needed a new energy source, and what was built. Explanation: how the scheme has benefited the community, socially, economically and environmentally. Link: tie the benefits back to the question by showing why they add up to sustainability, meeting needs now without harming the future.",
            "The nine marks are awarded in three bands, and knowing what separates them tells you where to put your effort. The lowest band (1 to 3 marks) is for an answer that only lists points, with nothing joined up. The middle band (4 to 6 marks) is for an answer whose sentences are linked and partly developed, but which leaves the reader to work out for themselves how the scheme is sustainable. The top band (7 to 9 marks) needs two things together: real detail about your own named scheme, and a closing paragraph that states the link to sustainable development outright rather than hinting at it. Named places, dates and figures are what move an answer up a band."
          ],
          worked: {
            q: "Plan a PEEL answer to this: take one renewable energy case study and explain how it can help a place develop sustainably.",
            steps: [
              "Point: define renewable energy and sustainable development in two sentences.",
              "Evidence: name the scheme and its location; say why the community needed it; say what renewable technology was built.",
              "Explanation: give one social benefit, one economic benefit and one environmental benefit, each with a detail from your notes.",
              "Link: explain why those benefits meet needs now without harming future generations, which is what sustainable development means.",
              "Check against the bands: detail about your own named scheme plus a stated link to sustainability puts you in the top band."
            ],
            answer: "Four paragraphs: a definition, the named scheme with location and purpose, three developed benefits (social, economic, environmental) with details, and a conclusion that links the benefits explicitly to sustainable development."
          },
          tip: "The top band needs two things: real detail about your own named scheme AND a last paragraph that states the link to sustainable development outright."
        },
        {
          heading: "Cutting energy use at home",
          paragraphs: [
            "The cheapest energy is the energy you do not use. Energy conservation means cutting the amount of energy wasted, and the lesson asked you to annotate a house with ways to do it: a modern boiler is more efficient than an older model, so it uses less energy for the same heat; insulation in the loft and walls keeps heat in; double glazing stops it escaping through windows; low-energy bulbs and appliances use less electricity; turning the thermostat down a degree and wearing more layers when cold use less fuel; drying clothes outside rather than in a tumble dryer saves power. Every one of these cuts your carbon footprint.",
            "A carbon footprint adds up the greenhouse gases, carbon dioxide and methane among them, that one person's activities put into the air. Part of it is direct emissions, from fuel burnt as you use it, such as a flight or the heating; the rest is indirect emissions, released in making the things you buy, such as food and clothes. The lesson's data for the UK's individual average carbon footprint split it into recreation 18 %, heating 14 %, food 13 %, household 13 %, hygiene 12 %, clothing 9 %, commuting 7 %, air travel 6 %, education 4 %, phones 1 % and other 3 %. Most of these are indirect: the things we buy and do, not the fuel we burn ourselves.",
            "To draw this as a pie chart you convert each percentage into degrees. A full circle is 360 degrees and the whole is 100 %, so each 1 % is 3.6 degrees: multiply the percentage by 3.6."
          ],
          worked: {
            q: "Heating is 14 % of the UK's individual average carbon footprint. How many degrees is the heating slice on a pie chart?",
            steps: [
              "Each 1 % of a pie chart is 3.6 degrees, because 360 ÷ 100 = 3.6.",
              "Multiply the percentage by 3.6: 14 × 3.6.",
              "14 × 3.6 = 50.4 degrees.",
              "Check: 14 % is a bit more than an eighth of the circle, and an eighth is 45 degrees, so 50.4 is sensible."
            ],
            answer: "50.4 degrees",
            checks: [{ expr: "HEATING_PCT*DEG_PER_PCT", value: 50.4, tol: 1e-9 }, { expr: "360/100", value: 3.6, tol: 1e-9 }]
          },
          tip: "Percentages to degrees: multiply by 3.6. Check your slices add up to 360."
        },
        {
          heading: "Local to global: transition towns and sustainable energy",
          paragraphs: [
            "Individual actions add up, but communities can do more. A transition town is a community that sets out to reduce its carbon footprint together, and the lesson asked you to find strategies under four headings. Transport: cycle lanes, park and ride schemes, car sharing and electric or hybrid cars. Waste: recycling clothes and plastics, community recycling schemes and compost bins. Housing: insulation and efficient heating across whole estates. Food: buying from local growers and businesses, community allotments and garden-share schemes that cut food miles.",
            "The energy conservation grid sorted strategies by scale. Individual: wear more layers, dry clothes outside, walk to local shops, use a compost bin, car share to work. Local: councils building cycle lanes, park and ride, community recycling and allotments. Global: international agreements such as the Paris Agreement of 2015, governments investing in renewable energy to reduce reliance on fossil fuels, power stations fitted with carbon capture and storage (CCS) technology, and a carbon tax that raises the price of fossil fuels, with more tax on the fuels that produce more emissions, like coal.",
            "All of this serves one definition. Sustainable energy provides energy today without preventing future generations from meeting their energy needs. The lesson's last slide gave you the slogan that sums the unit up: think global, act local. The challenge of resource management is global, but the choices that meet it begin with a town, a school and a house."
          ],
          tip: "Three scales, one example each: individual (walk to the shops), local (cycle lanes), global (Paris Agreement 2015). Then the definition of sustainable energy, word for word."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which type of renewable energy sends water down into the ground, so that heat deep in the Earth's crust boils it into steam?", options: ["Geothermal", "Biomass", "Tidal", "Wave"], answer: 0, why: "Geo means Earth and thermal means heat. Geothermal power uses the heat of the Earth's crust to make steam that drives a turbine.",
          feedback: [
            "",
            "Biomass is wood, plants or animal waste burnt for power or made into biofuel. The one that uses heat from deep in the Earth's crust is geothermal.",
            "Tidal power uses currents and changes in water level caused by the tides to turn turbines. Heat from the Earth's crust is geothermal.",
            "Wave power uses waves made by wind blowing across water to drive turbines. Heat from inside the Earth is geothermal."
          ] },
        { kind: "numeric", q: "To convert a percentage into degrees for a pie chart, what number do you multiply the percentage by?", answer: 3.6, tolerance: 0, units: "", check: "DEG_PER_PCT", why: "A circle has 360 degrees and the whole is 100 %, so 1 % = 360 ÷ 100 = 3.6 degrees.",
          misconceptions: [
            { answer: 36, says: "A decimal point has slipped. 360 ÷ 100 is 3.6, not 36; multiplying by 36 would give a slice ten times too big.", check: "360/10" },
            { answer: 360, says: "360 is the number of degrees in the whole circle. To find the degrees for ONE per cent, divide 360 by 100 to get 3.6.", check: "360" },
            { answer: 100, says: "100 is the total percentage. Degrees per percent is 360 ÷ 100 = 3.6.", check: "100" }
          ] },
        { kind: "gap", q: "Sustainable energy provides energy today without preventing ___ generations from meeting their energy needs.", answer: "future", options: ["future", "past", "wealthy"], why: "Sustainability is about the future: meeting today's needs without using up or damaging what people will need later.",
          feedback: {
            "past": "Past generations have already met their needs; nothing we do now can affect them. Sustainability is about not harming FUTURE generations.",
            "wealthy": "Sustainability is not about rich or poor but about time: providing energy today without stopping future generations from meeting their needs."
          } }
      ],
      modules: [
        {
          title: "Match the renewable to how it works",
          task: {
            kind: "match",
            q: "Match each type of renewable energy to how it generates power.",
            pairs: [
              ["Biomass", "Wood, plants or animal waste burnt for power or used to produce biofuels"],
              ["Wind", "Turbines use the energy of moving air to generate electricity, on land or out at sea"],
              ["Tidal", "Currents or changes in water level caused by the tides turn turbines"],
              ["Solar", "Energy from the sun heats water or generates electricity in photovoltaic cells"],
              ["Hydro-electric power", "A dam holds water back; it falls through tunnels and the force of it spins turbines"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the names that describe themselves: solar is the sun, wind is moving air.",
                "Tidal is about the tides, so look for currents and changing water levels.",
                "Hydro means water, so look for a dam and falling water.",
                "The one that burns something is biomass."
              ],
              example: {
                q: "Match: geothermal, wave. Choices: wind blowing across water makes waves that drive turbines; water pumped underground is turned to steam by the heat of the Earth's crust.",
                steps: ["Geo and thermal: Earth heat.", "Wave: waves made by wind."],
                answer: "Geothermal: water pumped underground is turned to steam by the heat of the Earth's crust. Wave: wind blowing across water makes waves that drive turbines."
              }
            },
            core: { hint: "Sun, air, tides, dam, burning. Each description contains one of those ideas." },
            stretch: { extend: "Explain why biomass is counted as renewable even though burning it releases carbon dioxide, and why some geographers disagree." }
          },
          contexts: [
            { label: "Island planner", q: "You are advising an island on which renewable sources to build. Match each type of renewable energy to how it generates power so you can explain the options." },
            { label: "Revision card", q: "You are making a revision card for the seven types of renewable energy. Match each type to how it generates power." }
          ],
          explain: "Say, in one sentence, what most types of renewable energy have in common once the energy reaches the power station.",
          why: "Biomass burns organic material; wind and tidal power turn turbines with moving air and water; solar uses the sun's energy directly; hydro-electric power uses the pressure of water falling from a dam."
        },
        {
          title: "How hydro-electric power works",
          task: {
            kind: "order",
            q: "Put the stages of generating hydro-electric power in the correct order.",
            items: [
              "Water is held back behind a dam",
              "The water is let down through tunnels",
              "The force of the falling water spins the turbines",
              "The turbines generate electricity"
            ]
          },
          contexts: [
            { label: "Mountain village", q: "A mountain village builds a small dam on its river to make electricity. Put the stages of generating hydro-electric power in the correct order." },
            { label: "Micro-hydro scheme", q: "A micro-hydro scheme uses a small river and a small dam. Put the stages by which it generates electricity in the correct order." },
            { label: "Diagram labels", q: "You are labelling a diagram of a hydro-electric power station. Put the four labels in the correct order from first stage to last." }
          ],
          levels: {
            support: {
              steps: [
                "Hydro-electric power uses falling water. Before water can fall, it has to be stored up high. What stores it?",
                "Next the water is let go. Where does it go?",
                "Falling water pushes on something and makes it spin.",
                "The spinning thing is what makes the electricity."
              ],
              example: {
                q: "Put these stages of wind power in order: the turbine generates electricity; the wind blows across the blades; the blades spin a shaft.",
                steps: ["Wind first.", "Blades spin.", "Electricity last."],
                answer: "The wind blows across the blades; the blades spin a shaft; the turbine generates electricity."
              }
            },
            core: { hint: "Trap, fall, turn, generate." },
            stretch: { extend: "Explain why a micro-hydro scheme suits a remote mountain community better than a large dam, using the words sustainable and local in your answer." }
          },
          explain: "Say, in one sentence, where the energy in hydro-electric power originally comes from.",
          why: "Water is stored behind a dam; it is let down through tunnels; the force of the falling water spins the turbines; the turbines generate electricity."
        },
        {
          title: "Degrees on the carbon footprint pie",
          task: {
            kind: "numeric",
            q: "On the UK's individual average carbon footprint, heating is 14 % and household is 13 %. How many degrees would the two slices take up together on a pie chart?",
            answer: 97.2, tolerance: 0, units: "degrees", check: "(HEATING_PCT+HOUSEHOLD_PCT)*DEG_PER_PCT",
            why: "Add the percentages: 14 + 13 = 27 %. Convert to degrees: 27 × 3.6 = 97.2 degrees.",
            misconceptions: [
              { answer: 27, says: "27 is the combined PERCENTAGE. The question asks for degrees, so multiply by 3.6: 27 × 3.6 = 97.2 degrees.", check: "HEATING_PCT+HOUSEHOLD_PCT" },
              { answer: 50.4, says: "50.4 degrees is the heating slice on its own (14 × 3.6). Add the household slice too: 27 × 3.6 = 97.2 degrees.", check: "HEATING_PCT*DEG_PER_PCT" },
              { answer: 972, says: "A decimal point has slipped. 27 × 3.6 = 97.2, not 972; a slice cannot be bigger than the whole 360-degree circle.", check: "(HEATING_PCT+HOUSEHOLD_PCT)*DEG_PER_PCT*10" }
            ]
          },
          contexts: [
            { label: "Drawing the chart", q: "You are drawing the UK carbon footprint pie chart. Heating is 14 % and household is 13 %. How many degrees should you measure for the two slices together?", check: "(HEATING_PCT+HOUSEHOLD_PCT)*DEG_PER_PCT" },
            { label: "Checking a friend's chart", q: "A friend has drawn heating (14 %) and household (13 %) as one combined slice. How many degrees should that slice measure?", check: "(HEATING_PCT+HOUSEHOLD_PCT)*DEG_PER_PCT" },
            { label: "Home energy", q: "Heating (14 %) and household (13 %) are the two parts of the footprint that come from energy used at home. How many degrees do they take up together on the pie chart?", check: "(HEATING_PCT+HOUSEHOLD_PCT)*DEG_PER_PCT" }
          ],
          levels: {
            support: {
              steps: [
                "Add the two percentages: 14 + 13.",
                "Each 1 % is 3.6 degrees.",
                "Multiply the total percentage by 3.6.",
                "Check: 27 % is just over a quarter, and a quarter of 360 is 90, so the answer should be a bit more than 90."
              ],
              example: {
                q: "Food is 13 % and clothing is 9 % of the footprint. How many degrees do they take up together?",
                steps: ["13 + 9 = 22 %.", "22 × 3.6 = 79.2 degrees."],
                answer: "79.2 degrees",
                checks: [{ expr: "(FOOD_PCT+CLOTHING_PCT)*DEG_PER_PCT", value: 79.2, tol: 1e-9 }]
              }
            },
            core: { hint: "Add the percentages first, then multiply by 3.6." },
            stretch: { extend: "Work out the degrees for ALL eleven categories and check they total 360. Then explain which categories are direct emissions and which are indirect." }
          },
          explain: "Say, in one sentence, why a quarter of the pie should be about 90 degrees.",
          why: "14 % + 13 % = 27 %, and 27 × 3.6 = 97.2 degrees, a little more than a quarter of the circle."
        }
      ]
    }
  ],

  sources: {
    deckDump: "gg_y09_unit_1_the_challenge_of_resource_management.txt",
    decksUsed: ["Resources.pptx", "ResourcesEOU_DIT.pptx"],
    notes: "Lesson titles, sequence, key words, definitions and every case-study figure come from the department's Resources.pptx (slides 1-169) only; ResourcesEOU_DIT.pptx repeats the fracking cards and the progress-check question and adds nothing. House furniture (dated title slides, seating plans, homework and Kerboodle reading slides, the Prior Learning/Components sheet, the revision list) was used only to fix the lesson sequence. The deck's mark schemes and model fragments (slides 23, 95, 117/162) were read to see what the deck teaches; none is reproduced and verify.py bans their distinctive phrases. Where the deck gives only a textbook page (the UK energy mix pie charts p. 262, the Chambamontera micro-hydro scheme pp. 298-299, the global shale reserves map) the manifest teaches the method and tells the pupil to use their class notes; see NOTES.md. The percentage-increase and pictogram exercises use illustrative figures of my own, stated as such. Every number is held in the FACTS table in verify.py with its slide reference and recomputed. The deck's three modern quotations (slides 139-140) are paraphrased and attributed, not quoted; so are the Alaska cards, which the deck itself drew from 2016-17 journalism (slide 145 lists the URLs). Key-word definitions pupils are assessed on keep the department's wording; everything else is paraphrased, and verify.py fails any run of 12 or more words shared with the dump outside that whitelist. The deck never says where the Chambamontera scheme is (slide 91 asks the question), so this unit does not say either, and verify.py bans Peru and the Andes. No pretext.l1 (translation is a separate pass) and no meta.constellation."
  }
};
