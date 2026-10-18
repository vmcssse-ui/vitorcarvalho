// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE Geography 8035 · 3.1.3 Physical landscapes in the UK (coasts, rivers) · Year 10 · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression; the FACTS names held in verify.py are allowed) and are recomputed.
//   worked examples / support examples with a calculation carry `checks:[{expr, value, tol}]`.
//   every "order" task is compared with the canonical sequences held in verify.py (the department deck's own sequences).
//   every mcq / gap / match answer is compared with the independent answer key held in verify.py.
//   every case-study number (costs per metre, lifespans, the 154 km Jurassic Coast, the 2001 inscription, Lyme Regis phase
//   dates, Pevensey's £30 million over 25 years) is checked against the independent FACTS table in verify.py.
//   passage sentences are counted (≤ 20 words) and all text is linted for known misconceptions and deck-model fingerprints.
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions`; every module carries
//   `explain`; ≥ 1 module per chapter carries `contexts` that never redefine the answer; `connections` ⊂ glossary;
//   meta.constellation is omitted (the engine lays the stars out); no pretext.l1 (translation is a separate pass).
// Diagrams (hydrographs, meanders, headland sequences) are described in words; no widget exists for them.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["geog-landscapes"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "geog-landscapes",
    subjectKey: "geography",
    subject: "Geography",
    board: "AQA",
    spec: "8035",
    specRef: "3.1.3 Physical landscapes in the UK: 3.1.3.1 UK physical landscapes, 3.1.3.2 Coastal landscapes in the UK, 3.1.3.3 River landscapes in the UK (Paper 1, Section C)",
    year: 10,
    tier: "GCSE (AQA Geography is a single-tier qualification)",
    title: "Physical Landscapes in the UK: Rivers and Coasts",
    sub: "From the rocks under your feet to the waves at Swanage and the River Tees: how the UK's coasts and valleys are shaped, and how people try to manage them.",
    bigQuestion: "How do waves and rivers shape the UK's coasts and valleys, and how should we manage the risks they bring?",
    lessonCount: 20,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  // The department's two decks (Coasts.pptx, Rivers.pptx), in teaching order. Titles are the decks' own slide titles or
  // learning objectives; questions are those objectives rephrased. See NOTES.md section 2 for the slide ranges.
  lessons: [
    { n: 1, title: "UK physical landscapes: rock types", question: "How do the UK's four main rock types create its different landscapes, and where is each found?", keywords: ["granite", "chalk", "clay", "carboniferous limestone", "tor", "karst"] },
    { n: 2, title: "Coastal processes: waves and weathering", question: "How is the coast shaped by waves and by weathering?", keywords: ["constructive wave", "destructive wave", "swash", "backwash", "weathering", "freeze-thaw"] },
    { n: 3, title: "Mass movement, coastal erosion and longshore drift", question: "How does material move down a cliff, how does the sea erode it, and how is it carried along the beach?", keywords: ["mass movement", "rockfall", "landslide", "hydraulic power", "abrasion", "attrition", "solution", "longshore drift"] },
    { n: 4, title: "Coastal transportation and deposition", question: "How does the sea carry its load, and when does it drop it?", keywords: ["traction", "saltation", "suspension", "solution", "deposition", "fetch"] },
    { n: 5, title: "Coastal erosional landforms", question: "How are headlands, bays, caves, arches, stacks and stumps formed?", keywords: ["headland", "bay", "cave", "arch", "stack", "stump"] },
    { n: 6, title: "Coastal deposition landforms", question: "How are beaches, sand dunes, spits and bars formed, and how do you write a six-mark landform answer?", keywords: ["beach", "sand dune", "spit", "bar", "PEEL"] },
    { n: 7, title: "Coastal landforms at Swanage (1)", question: "Where is Swanage, why is the Jurassic Coast important, and how have rock type and structure shaped its coastline?", keywords: ["Swanage", "Jurassic Coast", "discordant", "concordant", "Durlston Head", "Swanage Bay"] },
    { n: 8, title: "Coastal landforms at Swanage (2)", question: "How do you read the Swanage coastline from an OS map and photographs?", keywords: ["OS map", "grid reference", "Old Harry", "The Foreland", "Studland Bay", "high tide"] },
    { n: 9, title: "Coastal management: soft and hard engineering", question: "What are the costs and benefits of hard and soft engineering strategies for managing the coast?", keywords: ["hard engineering", "soft engineering", "sea wall", "groyne", "rock armour", "gabion", "beach nourishment", "dune regeneration"] },
    { n: 10, title: "Managing the coast: managed retreat", question: "What is managed retreat, and is it a sustainable way to manage a coastline?", keywords: ["managed retreat", "Medmerry", "sustainable", "buffer"] },
    { n: 11, title: "Coastal management case study: Lyme Regis", question: "Why did Lyme Regis need coastal management, what was done, and how successful has it been?", keywords: ["Lyme Regis", "phases", "interest groups", "conflict", "success"] },
    { n: 12, title: "River landscapes: the drainage basin and the river's three stages", question: "What is a drainage basin, and how do a river and its valley change from source to mouth?", keywords: ["drainage basin", "source", "tributary", "confluence", "watershed", "mouth", "long profile", "cross profile"] },
    { n: 13, title: "River processes", question: "How does a river erode, transport and deposit material, and where along its course does each happen?", keywords: ["hydraulic action", "abrasion", "attrition", "solution", "vertical erosion", "lateral erosion", "traction", "saltation"] },
    { n: 14, title: "River landforms: the upper course", question: "How do velocity and discharge change downstream, and how are V-shaped valleys, interlocking spurs, waterfalls and gorges formed?", keywords: ["velocity", "discharge", "V-shaped valley", "interlocking spurs", "waterfall", "gorge", "plunge pool"] },
    { n: 15, title: "Middle course river landforms", question: "How are meanders and ox-bow lakes formed?", keywords: ["meander", "river cliff", "slip-off slope", "ox-bow lake", "neck"] },
    { n: 16, title: "Lower course river landforms and the River Tees", question: "How are floodplains, levees and estuaries formed, and what landforms does the River Tees show from source to mouth?", keywords: ["floodplain", "levee", "alluvium", "estuary", "River Tees", "North Pennines"] },
    { n: 17, title: "River flooding and hydrographs", question: "What causes a river to flood, and how does a hydrograph show a river's response to rainfall?", keywords: ["flooding", "physical causes", "human causes", "hydrograph"] },
    { n: 18, title: "Factors increasing flood risk and hydrographs", question: "Which physical and human factors increase flood risk, and what makes a hydrograph flashy or gentle?", keywords: ["precipitation", "geology", "relief", "urbanisation", "deforestation", "lag time", "peak discharge"] },
    { n: 19, title: "Flood management strategies", question: "What hard and soft engineering strategies are used to manage river floods, and what are their costs and benefits?", keywords: ["dam", "reservoir", "channel straightening", "embankment", "flood relief channel", "floodplain zoning", "afforestation", "flood warning"] },
    { n: 20, title: "Case study of flood management at Banbury", question: "Where is Banbury, what has been done to reduce its flood risk, and what are the social, economic and environmental issues?", keywords: ["Banbury", "flood management", "social", "economic", "environmental"] }
  ],

  // 16 terms; Connections uses all 16 (four groups, each one chapter's idea). Chapters 1 and 5 teach their key words
  // through pretext.words and the text instead (rock types, waves, drainage-basin words, meander words).
  glossary: [
    { term: "hydraulic action", means: "Waves or river water forcing air and water into cracks in rock; the pressure widens the crack and breaks off pieces.", chapter: "coastal-processes" },
    { term: "abrasion", means: "Rocks and sand carried by waves or a river grinding against a cliff or river bed like sandpaper.", chapter: "coastal-processes" },
    { term: "attrition", means: "Rocks and pebbles carried by the water knocking into each other and becoming smaller, smoother and rounder.", chapter: "coastal-processes" },
    { term: "solution", means: "Water slowly dissolving minerals from rocks such as chalk and limestone, and carrying them away dissolved.", chapter: "coastal-processes" },
    { term: "cave", means: "A hollow eroded into the base of a headland where waves have opened up a crack or joint.", chapter: "coastal-landforms" },
    { term: "arch", means: "A passage eroded right through a headland, so that daylight can be seen through it.", chapter: "coastal-landforms" },
    { term: "stack", means: "A pillar of rock left standing in the sea after the roof of an arch has collapsed.", chapter: "coastal-landforms" },
    { term: "stump", means: "The low remains of a stack, worn down by waves and weathering until it is covered at high tide.", chapter: "coastal-landforms" },
    { term: "sea wall", means: "A concrete or rock barrier at the foot of a cliff or the top of a beach, often with a curved face that reflects waves back to sea.", chapter: "managing-coasts" },
    { term: "groyne", means: "A barrier built out across a beach to trap sand and shingle moving by longshore drift, so the beach grows.", chapter: "managing-coasts" },
    { term: "rock armour", means: "Large boulders piled at the foot of a cliff or along a beach to absorb wave energy.", chapter: "managing-coasts" },
    { term: "gabion", means: "A steel wire mesh cage filled with rocks, used as a cheap coastal defence.", chapter: "managing-coasts" },
    { term: "hydrograph", means: "A graph showing how a river's discharge changes over time in response to a storm.", chapter: "flooding" },
    { term: "discharge", means: "The amount of water passing a point on a river each second, measured in cubic metres per second (cumecs).", chapter: "flooding" },
    { term: "peak discharge", means: "The highest discharge a river reaches after a period of rainfall.", chapter: "flooding" },
    { term: "lag time", means: "The time between peak rainfall and peak discharge.", chapter: "flooding" }
  ],

  connections: [
    { group: "How water wears rock away", terms: ["hydraulic action", "abrasion", "attrition", "solution"] },
    { group: "What is left of a headland", terms: ["cave", "arch", "stack", "stump"] },
    { group: "Hard engineering at the coast", terms: ["sea wall", "groyne", "rock armour", "gabion"] },
    { group: "Reading a hydrograph", terms: ["hydrograph", "discharge", "peak discharge", "lag time"] }
  ],

  chapters: [
    /* ───────────── 1 · rocks and waves ───────────── */
    {
      key: "rocks-and-waves", n: 1, title: "The UK's rocks and the restless coast",
      lead: "Why the UK has so many different landscapes, what the two kinds of wave do to a beach, and how weathering and mass movement weaken and move the rock of a cliff.",
      covers: [1, 2, 3],
      pretext: {
        words: [
          { word: "permeable", means: "lets water soak through it", sentence: "Chalk is permeable, so rain soaks into it instead of running off." },
          { word: "impermeable", means: "does not let water through", sentence: "Clay is impermeable, so water stays on the surface and forms streams." },
          { word: "tor", means: "a pile of bare granite rock sticking out of a hillside", sentence: "A famous tor stands on the top of Dartmoor." },
          { word: "swash", means: "the water that rushes up the beach when a wave breaks", sentence: "A strong swash carries sand up the beach." },
          { word: "backwash", means: "the water that drains back down the beach to the sea", sentence: "A strong backwash drags sand back out to sea." },
          { word: "weathering", means: "the breakdown of rock where it stands", sentence: "Frost, rain and plant roots all cause weathering of the cliff." }
        ],
        passage: [
          "The UK has many different landscapes.",
          "They are shaped by the rock underneath them.",
          "Granite is a hard rock that forms rocky tors, like those on Dartmoor.",
          "Chalk is softer and lets water soak through it.",
          "It forms gentle hills inland and white cliffs at the coast.",
          "Clay is soft and easily worn away, so it forms low, flat vales.",
          "Carboniferous limestone is cracked into blocks and makes limestone pavements.",
          "At the coast, waves do most of the work.",
          "Constructive waves have a strong swash and build up the beach.",
          "Destructive waves have a strong backwash and wear the beach away.",
          "Weathering breaks rock down where it stands, by frost, chemicals or living things.",
          "Weakened rock can slide or fall down the cliff.",
          "This is called mass movement."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "يسمح للماء بالتسرّب من خلاله (permeable)",
            "لا يسمح للماء بالمرور (impermeable)",
            "كتلة من صخور الغرانيت العارية تبرز من جانب التلّ (tor)",
            "الماء الذي يندفع إلى أعلى الشاطئ عندما تتكسّر الموجة (swash)",
            "الماء الذي ينساب عائدًا إلى أسفل الشاطئ نحو البحر (backwash)",
            "تفتّت الصخور في مكانها (weathering)"
          ],
          "passage": [
            "في المملكة المتّحدة مناظر طبيعية مختلفة كثيرة.",
            "تشكّلها الصخور التي تحتها.",
            "الغرانيت (granite) صخر صلب يكوّن كتلًا صخرية بارزة تُسمّى tors، مثل تلك التي في دارتمور (Dartmoor).",
            "الطباشير (chalk) أليَن ويسمح للماء بالتسرّب من خلاله.",
            "وهو يكوّن تلالًا لطيفة في الداخل وجروفًا بيضاء على الساحل.",
            "الطين (clay) ليّن ويتآكل بسهولة، لذلك يكوّن أودية منخفضة منبسطة.",
            "الحجر الجيري الكربوني (Carboniferous limestone) متشقّق إلى كتل ويصنع أرصفة جيرية (limestone pavements).",
            "على الساحل، تقوم الأمواج بمعظم العمل.",
            "الأمواج البنّاءة (constructive waves) لها اندفاع قوي (swash) وتبني الشاطئ.",
            "الأمواج الهدّامة (destructive waves) لها ارتداد قوي (backwash) وتُؤكّل الشاطئ.",
            "التجوية (weathering) تفتّت الصخور في مكانها، بالصقيع أو بالموادّ الكيميائية أو بالكائنات الحيّة.",
            "الصخور الضعيفة يمكن أن تنزلق أو تسقط من الجرف.",
            "يُسمّى هذا الحركة الكتلية (mass movement)."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "przepuszcza wodę, która przez nią przesiąka (permeable)",
            "nie przepuszcza wody (impermeable)",
            "stos nagich granitowych skał wystający ze zbocza wzgórza (tor)",
            "woda, która wbiega na plażę, kiedy fala się załamuje (swash)",
            "woda, która spływa z plaży z powrotem do morza (backwash)",
            "rozpad skały w miejscu, w którym się znajduje (weathering)"
          ],
          "passage": [
            "Wielka Brytania (UK) ma wiele różnych krajobrazów.",
            "Kształtuje je skała, która leży pod nimi.",
            "Granit to twarda skała, która tworzy skaliste ostańce (tors), jak te na Dartmoor.",
            "Kreda jest bardziej miękka i przepuszcza wodę.",
            "Tworzy łagodne wzgórza w głębi lądu i białe klify na wybrzeżu.",
            "Glina (clay) jest miękka i łatwo się ściera, więc tworzy niskie, płaskie doliny.",
            "Wapień karboński jest popękany na bloki i tworzy chodniki wapienne (limestone pavements).",
            "Na wybrzeżu większość pracy wykonują fale.",
            "Fale konstruktywne (constructive waves) mają silny napływ (swash) i budują plażę.",
            "Fale destruktywne (destructive waves) mają silny odpływ (backwash) i niszczą plażę.",
            "Wietrzenie (weathering) rozkłada skałę w miejscu, w którym stoi: przez mróz, chemikalia lub żywe organizmy.",
            "Osłabiona skała może zsunąć się lub spaść z klifu.",
            "To nazywamy ruchami masowymi (mass movement)."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "deixa a água passar/infiltrar-se através dela (permeable, permeável)",
            "não deixa a água passar (impermeable, impermeável)",
            "um monte de rocha de granito nua que sobressai numa encosta (tor)",
            "a água que sobe depressa pela praia quando uma onda rebenta/quebra (swash)",
            "a água que escorre de volta pela praia até ao mar (backwash)",
            "a quebra da rocha no lugar onde ela está (weathering, meteorização/intemperismo)"
          ],
          "passage": [
            "O Reino Unido tem muitas paisagens diferentes.",
            "Elas são moldadas pela rocha que está por baixo delas.",
            "O granito (granite) é uma rocha dura que forma tors rochosos, como os de Dartmoor.",
            "O calcário cré/giz (chalk) é mais macio e deixa a água passar através dele.",
            "Forma colinas suaves no interior e falésias/penhascos brancos na costa.",
            "A argila (clay) é macia e desgasta-se facilmente, por isso forma vales baixos e planos.",
            "O calcário carbonífero (Carboniferous limestone) está rachado em blocos e forma pavimentos calcários.",
            "Na costa, as ondas fazem a maior parte do trabalho.",
            "As ondas construtivas (constructive) têm um swash forte e fazem crescer a praia.",
            "As ondas destrutivas (destructive) têm um backwash forte e desgastam a praia.",
            "A meteorização/o intemperismo (weathering) quebra a rocha no lugar onde ela está, por causa do gelo, de produtos químicos ou de seres vivos.",
            "A rocha enfraquecida pode deslizar ou cair pela falésia/pelo penhasco.",
            "A isto chama-se movimento de massa (mass movement)."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "biyo u oggolaada inay dhex maraan (permeable)",
            "biyo u oggolaan inay dhex maraan (impermeable)",
            "tuulmo dhagax granite qaawan oo buur dhinaceeda ka soo baxay (tor)",
            "biyaha kor ugu ordaya xeebta marka hir jabo (swash)",
            "biyaha dib ugu dareeraya xeebta hoos badda xaggeeda (backwash)",
            "burburka dhagax meesha uu taagan yahay (weathering)"
          ],
          "passage": [
            "UK waxay leedahay muuqaalo dhul oo badan oo kala duwan.",
            "Waxaa qaabeeya dhagaxa hoostooda ku jira.",
            "Granite waa dhagax adag oo samaysta tors dhagaxaysan, sida kuwa Dartmoor ku yaal.",
            "Chalk wuu ka jilicsan yahay, biyana wuu u oggolaadaa inay dhex maraan.",
            "Wuxuu samaystaa buuro fudud oo gudaha ah iyo jarar cad oo xeebta ah.",
            "Dhoobadu (clay) way jilicsan tahay oo si fudud ayay u nabaad-guurtaa, sidaas darteed waxay samaysaa dooxooyin hooseeya oo siman.",
            "Carboniferous limestone wuxuu u dillaacay qaybo, wuxuuna samaystaa limestone pavements.",
            "Xeebta, hirarku (waves) shaqada badankeeda ayay qabtaan.",
            "Constructive waves waxay leeyihiin swash xooggan, xeebtana way dhisaan.",
            "Destructive waves waxay leeyihiin backwash xooggan, xeebtana way nabaad-guuriyaan.",
            "Weathering dhagaxa meesha uu taagan yahay ayay ku burburisaa, baraf-dhaxan, kiimiko ama noolayaal.",
            "Dhagax daciifay wuxuu jarka ka simbiriirixan karaa ama ka dhici karaa.",
            "Tan waxaa la yiraahdaa mass movement."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "пропускає воду крізь себе (permeable)",
            "не пропускає воду (impermeable)",
            "купа голої гранітної породи, що виступає зі схилу пагорба (tor)",
            "вода, що накочується на пляж, коли хвиля розбивається (swash)",
            "вода, що стікає з пляжу назад у море (backwash)",
            "руйнування породи на тому місці, де вона лежить (weathering)"
          ],
          "passage": [
            "У Великій Британії багато різних ландшафтів.",
            "Їх формує порода, що лежить під ними.",
            "Граніт — тверда порода, яка утворює скелясті виступи (tors), як-от на Дартмурі (Dartmoor).",
            "Крейда м’якша і пропускає воду крізь себе.",
            "Вона утворює пологі пагорби всередині країни та білі скелі на узбережжі.",
            "Глина м’яка і легко руйнується, тому утворює низькі рівні долини.",
            "Кам’яновугільний вапняк розтрісканий на блоки і утворює вапнякові «бруківки» (limestone pavements).",
            "На узбережжі більшу частину роботи виконують хвилі.",
            "Конструктивні хвилі (constructive waves) мають сильний накат (swash) і нарощують пляж.",
            "Деструктивні хвилі (destructive waves) мають сильний відкат (backwash) і розмивають пляж.",
            "Вивітрювання (weathering) руйнує породу на місці — морозом, хімічними речовинами або живими істотами.",
            "Ослаблена порода може сповзти або впасти зі скелі.",
            "Це називається масовим рухом (mass movement)."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "جو پانی کو اپنے اندر سے گزرنے دے (permeable)",
            "جو پانی کو اپنے اندر سے نہ گزرنے دے (impermeable)",
            "ننگی گرینائٹ چٹان کا ڈھیر جو پہاڑی سے باہر نکلا ہوا ہو (tor)",
            "وہ پانی جو لہر ٹوٹنے پر ساحل پر اوپر کی طرف دوڑتا ہے (swash)",
            "وہ پانی جو ساحل سے واپس نیچے سمندر کی طرف بہتا ہے (backwash)",
            "چٹان کا اپنی جگہ پر ہی ٹوٹ کر بکھرنا (weathering)"
          ],
          "passage": [
            "برطانیہ (UK) میں بہت سے الگ الگ طرح کے مناظر ہیں۔",
            "ان کی شکل نیچے کی چٹان بناتی ہے۔",
            "گرینائٹ (granite) ایک سخت چٹان ہے جو پتھریلے tors بناتی ہے، جیسے ڈارٹمور (Dartmoor) پر۔",
            "چاک (chalk) زیادہ نرم ہے اور پانی کو اپنے اندر سے گزرنے دیتا ہے۔",
            "یہ اندرونِ ملک ہموار پہاڑیاں اور ساحل پر سفید چٹانی دیواریں بناتا ہے۔",
            "چکنی مٹی (clay) نرم ہے اور آسانی سے گھس جاتی ہے، اس لیے یہ نیچی، ہموار وادیاں بناتی ہے۔",
            "Carboniferous limestone بلاکوں میں ٹوٹا ہوا ہوتا ہے اور limestone pavements بناتا ہے۔",
            "ساحل پر زیادہ تر کام لہریں کرتی ہیں۔",
            "constructive لہروں کا swash طاقت ور ہوتا ہے اور وہ ساحل کو بناتی ہیں۔",
            "destructive لہروں کا backwash طاقت ور ہوتا ہے اور وہ ساحل کو گھسا دیتی ہیں۔",
            "weathering چٹان کو اس کی اپنی جگہ پر توڑتی ہے: پالے، کیمیائی مادوں یا جانداروں کے ذریعے۔",
            "کمزور چٹان چٹانی دیوار سے سرک یا گر سکتی ہے۔",
            "اسے mass movement کہتے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Four rocks, four landscapes",
          paragraphs: [
            "Look at a map of the UK's rocks and you see that they are spread unevenly. Four rock types matter most for this unit. Granite is an igneous rock, formed from magma deep inside the Earth. It is hard and impermeable, so water cannot soak into it: granite areas have surface streams and boggy ground. Granite is cracked by joints, and freeze-thaw and chemical weathering attack these joints until only the toughest blocks are left standing as tors. Dartmoor, in south-west England, is the classic example.",
            "Chalk and clay are sedimentary rocks, and they are often found together in the south and east of England. Chalk is made of calcium carbonate and is porous and permeable: rain soaks in, so there are few surface rivers and many dry valleys, cut by fast-flowing streams towards the end of the last Ice Age. Chalk resists erosion well enough to stand higher than the land around it, forming gentle hills inland (the South Downs) and steep white cliffs at the coast (the Seven Sisters in East Sussex). Where permeable chalk meets impermeable clay, springs appear and rivers begin to flow at the surface. Clay is soft and impermeable: it is easily eroded, so it is left as low, flat clay vales with surface streams, such as the vale below Devil's Dyke in West Sussex.",
            "Carboniferous limestone is a hard grey rock cut by many joints, horizontal and vertical cracks that separate it into blocks. Water drains down the joints, so the rock is permeable and surface streams disappear underground. Slightly acidic rainwater slowly dissolves the limestone along the joints (chemical weathering), opening caves and caverns where dripping water builds stalactites and stalagmites. On the surface, the joints widen into a limestone pavement: flat slabs called clints separated by deep gaps called grykes. Landscapes like this are called karst. The limestone pavement above Malham Cove, in the Yorkshire Dales, is the famous UK example."
          ],
          tip: "When you describe the distribution of a rock type, use compass directions and named places: granite in the south-west (Dartmoor) and other parts of the north and west; chalk across the south and east (the Downs); carboniferous limestone in the Yorkshire Dales."
        },
        {
          heading: "Two kinds of wave",
          paragraphs: [
            "Waves are made by the wind blowing across the sea. The further the wind has blown over open water (the fetch), the bigger the waves. When a wave breaks on a beach, the water that rushes up the sand is the swash, and the water that drains back down to the sea is the backwash. Everything a wave does to a beach comes down to which of these two is stronger.",
            "Constructive waves are low, with a long wavelength and a gentle gradient. Their swash is strong and their backwash is weak, so each wave carries sand and shingle up the beach and leaves most of it there. Constructive waves build the beach up by deposition. Destructive waves are tall, with a short wavelength and a steep gradient. Their swash is weak and their backwash is strong, so each wave drags more material back down than it brought up. Destructive waves erode the beach.",
            "Which kind of wave you see depends on the weather. Calm weather and a sheltered coast give constructive waves; storms with a long fetch give destructive waves. Many UK beaches gain sand in a calm summer and lose it again in winter storms."
          ],
          worked: {
            q: "Describe two differences between a constructive wave and a destructive wave. (2 marks)",
            steps: [
              "Pick a feature that is different for the two waves: the swash and backwash.",
              "State it for both waves in one sentence: a constructive wave has a strong swash and weak backwash, whereas a destructive wave has a weak swash and strong backwash.",
              "Pick a second feature: shape. A constructive wave is low with a long wavelength, whereas a destructive wave is tall with a short wavelength.",
              "Two clear differences, each stated for both waves, earns both marks."
            ],
            answer: "Constructive waves have a strong swash and weak backwash, whereas destructive waves have a weak swash and strong backwash. Constructive waves are low with a long wavelength, whereas destructive waves are tall with a short wavelength."
          },
          tip: "Describe asks for what is true, not why. Save the explanation for an explain question."
        },
        {
          heading: "Weathering: breaking rock where it stands",
          paragraphs: [
            "Weathering is the breakdown of rock in situ, which means in place. The rock is weakened and broken into pieces, but nothing carries the pieces away. That is the difference between weathering and erosion: erosion wears rock away and removes it. A cliff is weathered from above and eroded by the sea from below, and the two work together.",
            "There are three kinds of weathering. Mechanical (or physical) weathering breaks rock apart without changing what it is made of; the main example is freeze-thaw, where water in a crack freezes, expands, thaws and refreezes until fragments split off. Chemical weathering happens when chemicals in rain or sea water alter the structure of the rock; slightly acidic water dissolves chalk and limestone. Biological weathering is caused by living things: plant roots growing into cracks and animals burrowing into the cliff.",
            "Weathering matters at the coast because it prepares the rock. A cliff face loosened by frost, rain and roots is far easier for the waves to remove."
          ],
          tip: "Weathering weakens; erosion removes. If a question says weathering, do not write about waves."
        },
        {
          heading: "Mass movement",
          paragraphs: [
            "Once rock has been weakened by weathering, gravity can pull it down the slope. Geographers call this mass movement, and it happens in several ways. In a rockfall, fragments of rock break away and fall from the cliff face, often after freeze-thaw. In a landslide, large blocks of rock slide downhill along a slope. In a mudflow, soil or weak rock that has become saturated with water flows down the slope like thick liquid. In a rotational slip, or slump, saturated soil or weak rock slumps down along a curved surface.",
            "Mass movement delivers material to the foot of the cliff and the beach. The sea then erodes and transports it, which means weathering and mass movement are the start of the whole coastal system."
          ],
          tip: "Match the word to the movement: fall (rockfall), slide (landslide), flow (mudflow), slump along a curve (rotational slip)."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which rock type forms the tors found on Dartmoor?", options: ["Granite", "Chalk", "Clay", "Carboniferous limestone"], answer: 0, why: "Tors are blocks of hard granite left standing after weathering has attacked the joints around them. Dartmoor is the UK example.",
          feedback: [
            "",
            "Chalk is a soft, porous rock that forms gentle rounded hills and white sea cliffs, not rocky outcrops on a moor. Tors are made of granite, a hard igneous rock.",
            "Clay is soft and easily eroded, so it forms low vales, never hilltop outcrops. Tors are made of granite.",
            "Carboniferous limestone forms limestone pavements and caves, as at Malham Cove. The bare rock piles on Dartmoor are granite tors."
          ] },
        { kind: "gap", q: "Weathering is the breakdown of rock ___, without it being carried away.", answer: "in place", options: ["in place", "by the sea", "downstream"], why: "Weathering happens in situ, in place. Once the pieces are carried away, that is erosion and transportation.",
          feedback: {
            "by the sea": "Breakdown by the sea is erosion, where waves wear rock away and remove it. Weathering is different: it breaks rock down in place, by frost, chemicals or living things.",
            "downstream": "Material moving downstream has been transported, which is a river process. Weathering does not move anything: it breaks rock down in place."
          } },
        { kind: "mcq", q: "Which pair of features describes a destructive wave?", options: ["Weak swash and strong backwash", "Strong swash and weak backwash", "Long wavelength and low height", "Gentle gradient and strong swash"], answer: 0, why: "A destructive wave's strong backwash drags more material down the beach than its weak swash brings up, so the beach is eroded.",
          feedback: [
            "",
            "A strong swash and weak backwash build the beach up: that is a constructive wave. A destructive wave is the other way round, with a weak swash and a strong backwash.",
            "Low waves with a long wavelength are constructive waves. Destructive waves are tall with a short wavelength.",
            "A gentle gradient and strong swash describe a constructive wave. Destructive waves are steep, and their backwash is the strong part."
          ] }
      ],
      modules: [
        {
          title: "Which rock makes which landscape?",
          task: {
            kind: "match",
            q: "Match each rock type to the landscape it creates.",
            pairs: [
              ["Granite", "Tors on Dartmoor"],
              ["Chalk", "Gentle hills and steep white cliffs, such as the Seven Sisters"],
              ["Clay", "Low, flat vales with surface streams"],
              ["Carboniferous limestone", "Limestone pavement at Malham Cove"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the hardest rock. Hard rock is left standing when softer rock is worn away.",
                "Ask: does water soak in (permeable) or stay on the surface (impermeable)? Surface streams mean impermeable rock.",
                "Think about the named places: Dartmoor, the Seven Sisters, Malham Cove. Which rock did the lesson link to each?",
                "The one left over is the soft rock that forms low ground."
              ],
              example: {
                q: "Match: sandstone, slate. Choices: a rock that splits into thin sheets used for roofs; a rock made of sand grains cemented together.",
                steps: ["Sandstone is named after what it is made of: sand grains.", "Slate is the rock that splits into thin sheets."],
                answer: "Sandstone: sand grains cemented together. Slate: splits into thin sheets used for roofs."
              }
            },
            core: { hint: "Two of these rocks are permeable and form high ground; one is impermeable and soft; one is impermeable and very hard." },
            stretch: { extend: "Explain why chalk and clay are often found side by side in the landscape, and what happens where the two meet." }
          },
          explain: "Say, in one sentence, why hard rock ends up as the high ground in a landscape.",
          why: "Granite is hard and impermeable and weathers along its joints to leave tors. Chalk is permeable and resistant, so it stands as hills and cliffs. Clay is soft and impermeable, so it is eroded to low vales with streams. Carboniferous limestone is dissolved along its joints into pavements and caves."
        },
        {
          title: "Which wave built this beach?",
          task: {
            kind: "mcq",
            q: "A beach has been growing all summer, with more sand each week. Which type of wave has been breaking on it?",
            options: [
              "Constructive waves, with a strong swash and weak backwash",
              "Destructive waves, with a weak swash and strong backwash",
              "Destructive waves, with a strong swash and strong backwash",
              "Constructive waves, with a weak swash and strong backwash"
            ],
            answer: 0,
            feedback: [
              "",
              "A weak swash and strong backwash would drag sand down the beach faster than it arrives, so the beach would shrink. A growing beach means the swash is winning: constructive waves.",
              "Destructive waves do not have a strong swash; their swash is weak and their backwash strong, which erodes the beach. A growing beach is the work of constructive waves.",
              "You have the right wave but the wrong description. Constructive waves have a strong swash and a weak backwash; that is exactly why they leave sand on the beach."
            ]
          },
          contexts: [
            { label: "Sheltered bay", q: "In a sheltered bay the waves are low and far apart, and the beach is slowly getting bigger. Which type of wave is at work?" },
            { label: "Calm week", q: "After a week of calm weather, the beach in Swanage Bay has gained a fresh layer of sand. Which type of wave has been breaking on it?" },
            { label: "Summer holiday", q: "A family notices that the beach they visit is wider at the end of August than it was in June. Which type of wave has been breaking on it over the summer?" }
          ],
          explain: "Say, in one sentence, which part of the wave leaves sand on the beach and which part takes it away.",
          levels: {
            support: {
              steps: [
                "Ask: is the beach gaining or losing material? Gaining means deposition.",
                "Deposition happens when the swash (up the beach) is stronger than the backwash (back down).",
                "Which wave has a strong swash and a weak backwash?",
                "Check the whole option: the wave name AND the swash and backwash description must both be right."
              ],
              example: {
                q: "After a winter storm, a shingle beach is much smaller than before. Which wave type has been at work, and why?",
                steps: ["The beach has lost material, so it has been eroded.", "Erosion happens when the backwash is stronger than the swash.", "That is a destructive wave."],
                answer: "Destructive waves: their strong backwash dragged shingle down the beach faster than their weak swash brought it up."
              }
            },
            core: { hint: "A growing beach means more material comes up than goes back down. Which part of the wave carries material up?" },
            stretch: { extend: "Explain why the same beach might gain sand in summer and lose it in winter, using fetch and the weather in your answer." }
          },
          why: "The beach is gaining sand, so deposition is happening. Constructive waves have a strong swash that carries sand up the beach and a weak backwash that leaves most of it there."
        },
        {
          title: "Four kinds of mass movement",
          task: {
            kind: "match",
            q: "Match each type of mass movement to its description.",
            pairs: [
              ["Rockfall", "Fragments of rock break away and fall from the cliff face"],
              ["Landslide", "Large blocks of rock slide downhill along a slope"],
              ["Mudflow", "Saturated soil or weak rock flows down a slope like a thick liquid"],
              ["Rotational slip", "Saturated material slumps down along a curved surface"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Use the second half of each name: fall, slide, flow, slip.",
                "Fall means pieces drop through the air; slide means a block moves as a whole along the slope.",
                "Flow means the material moves like a liquid, so it must be saturated with water.",
                "Rotational means turning: the material moves along a curved surface."
              ],
              example: {
                q: "Match: avalanche, soil creep. Choices: a very slow downhill movement of soil; a sudden rush of snow down a mountain.",
                steps: ["An avalanche is sudden and made of snow.", "Soil creep is, as the name says, very slow movement of soil."],
                answer: "Avalanche: a sudden rush of snow down a mountain. Soil creep: a very slow downhill movement of soil."
              }
            },
            core: { hint: "Two of these need the material to be saturated with water. One of those moves along a curve." },
            stretch: { extend: "Explain how weathering, mass movement and erosion work together to make a cliff retreat inland." }
          },
          explain: "Say, in one sentence, what all four kinds of mass movement have in common.",
          why: "All four are material moving downhill under gravity after weathering has weakened it. A rockfall drops fragments; a landslide slides blocks; a mudflow is saturated material flowing; a rotational slip is saturated material slumping along a curved surface."
        }
      ]
    },

    /* ───────────── 2 · coastal processes ───────────── */
    {
      key: "coastal-processes", n: 2, title: "Erosion, transport and deposition at the coast",
      lead: "The four ways the sea wears rock away, how longshore drift moves sand along a beach, the four ways the sea carries its load, and when it lets go.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "hydraulic action", means: "the force of waves pushing air and water into cracks in rock", sentence: "Hydraulic action widens the cracks in a cliff until pieces break off." },
          { word: "abrasion", means: "rocks and sand in the waves grinding against the cliff", sentence: "Abrasion wears the base of the cliff away like sandpaper." },
          { word: "attrition", means: "pebbles knocking against each other and getting smaller and rounder", sentence: "Attrition is why beach pebbles are smooth and round." },
          { word: "longshore drift", means: "the movement of sand and shingle along a beach by the waves", sentence: "Longshore drift carries sand along the coast in a zig-zag." },
          { word: "fetch", means: "the distance of open sea the wind has blown across to make a wave", sentence: "A long fetch makes bigger, more powerful waves." },
          { word: "deposition", means: "waves dropping the sand and pebbles they are carrying", sentence: "Deposition happens in sheltered bays where the waves lose energy." }
        ],
        passage: [
          "The sea wears away the coast in four ways.",
          "Hydraulic action is the force of waves pushing air into cracks in the cliff.",
          "Abrasion is rocks and sand in the waves grinding against the cliff like sandpaper.",
          "Attrition is pebbles knocking against each other and getting smaller and rounder.",
          "Solution is sea water slowly dissolving rocks such as chalk and limestone.",
          "Waves also move sediment along the beach.",
          "They usually arrive at an angle, pushed by the prevailing wind.",
          "The swash carries sand up the beach at that angle.",
          "The backwash drags it straight back down.",
          "Over time the sand zig-zags along the coast.",
          "This is called longshore drift.",
          "When waves lose energy, they drop what they are carrying.",
          "This is called deposition."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "قوّة الأمواج وهي تدفع الهواء والماء في شقوق الصخور (hydraulic action)",
            "صخور ورمل في الأمواج تحتكّ بالجرف (abrasion)",
            "حصى تتصادم بعضها ببعض فتصغر وتستدير (attrition)",
            "حركة الرمل والحصى على طول الشاطئ بفعل الأمواج (longshore drift)",
            "مسافة البحر المفتوح التي هبّت عليها الرياح لتصنع موجة (fetch)",
            "أمواج تُلقي ما تحمله من رمل وحصى (deposition)"
          ],
          "passage": [
            "يُؤكّل البحر الساحل بأربع طرق.",
            "الفعل الهيدروليكي (hydraulic action) هو قوّة الأمواج وهي تدفع الهواء في شقوق الجرف.",
            "البَري (abrasion) هو صخور ورمل في الأمواج تحتكّ بالجرف مثل ورق الصنفرة.",
            "التحاتّ (attrition) هو حصى تتصادم بعضها ببعض فتصغر وتستدير.",
            "الإذابة (solution) هي ماء البحر وهو يذيب ببطء صخورًا مثل الطباشير والحجر الجيري.",
            "تحرّك الأمواج أيضًا الرواسب على طول الشاطئ.",
            "وهي تصل عادةً بزاوية، تدفعها الرياح السائدة.",
            "يحمل الاندفاع (swash) الرمل إلى أعلى الشاطئ بتلك الزاوية.",
            "ويجرّه الارتداد (backwash) عائدًا إلى الأسفل في خطّ مستقيم.",
            "ومع الوقت يتحرّك الرمل متعرّجًا على طول الساحل.",
            "يُسمّى هذا الانجراف الساحلي (longshore drift).",
            "عندما تفقد الأمواج طاقتها، تُلقي ما تحمله.",
            "يُسمّى هذا الترسيب (deposition)."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "siła fal wpychających powietrze i wodę w szczeliny skał (hydraulic action)",
            "skały i piasek niesione przez fale, które trą o klif (abrasion)",
            "kamyki uderzające o siebie, które stają się mniejsze i bardziej okrągłe (attrition)",
            "przenoszenie piasku i żwiru wzdłuż plaży przez fale (longshore drift)",
            "odległość otwartego morza, nad którą wiał wiatr, tworząc falę (fetch)",
            "fale upuszczające piasek i kamyki, które niosły (deposition)"
          ],
          "passage": [
            "Morze niszczy wybrzeże na cztery sposoby.",
            "Działanie hydrauliczne (hydraulic action) to siła fal wpychających powietrze w szczeliny klifu.",
            "Abrazja (abrasion) to skały i piasek w falach, które trą o klif jak papier ścierny.",
            "Atrycja (attrition) to kamyki uderzające o siebie, które stają się mniejsze i bardziej okrągłe.",
            "Rozpuszczanie (solution) to woda morska powoli rozpuszczająca skały takie jak kreda i wapień.",
            "Fale przenoszą też osad wzdłuż plaży.",
            "Zwykle nadchodzą pod kątem, pchane przez przeważający wiatr.",
            "Napływ (swash) niesie piasek w górę plaży pod tym kątem.",
            "Odpływ (backwash) ściąga go prosto w dół.",
            "Z czasem piasek przesuwa się zygzakiem wzdłuż wybrzeża.",
            "To nazywamy dryfem wzdłużbrzegowym (longshore drift).",
            "Kiedy fale tracą energię, upuszczają to, co niosą.",
            "To nazywamy depozycją (deposition)."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a força das ondas a empurrar/empurrando ar e água para dentro das fendas da rocha (hydraulic action, ação hidráulica)",
            "rochas e areia nas ondas a raspar/raspando contra a falésia (abrasion, abrasão)",
            "seixos/pedras a bater/batendo umas nas outras e a ficar/ficando mais pequenas e redondas (attrition, atrito)",
            "o movimento de areia e cascalho ao longo de uma praia, feito pelas ondas (longshore drift, deriva litoral)",
            "a distância de mar aberto que o vento percorreu para formar uma onda (fetch)",
            "ondas a largar/largando a areia e os seixos que levavam (deposition, deposição)"
          ],
          "passage": [
            "O mar desgasta a costa de quatro maneiras.",
            "A ação hidráulica (hydraulic action) é a força das ondas a empurrar/empurrando ar para dentro das fendas da falésia.",
            "A abrasão (abrasion) são rochas e areia nas ondas a raspar/raspando contra a falésia como uma lixa.",
            "O atrito (attrition) são seixos a bater/batendo uns nos outros e a ficar/ficando mais pequenos e redondos.",
            "A dissolução (solution) é a água do mar a dissolver/dissolvendo devagar rochas como o calcário cré e o calcário.",
            "As ondas também movem sedimentos ao longo da praia.",
            "Normalmente chegam de lado, empurradas pelo vento dominante.",
            "O swash leva a areia pela praia acima nesse ângulo.",
            "O backwash arrasta-a a direito para baixo.",
            "Com o tempo, a areia vai em ziguezague ao longo da costa.",
            "A isto chama-se deriva litoral (longshore drift).",
            "Quando as ondas perdem energia, largam o que estão a levar/levando.",
            "A isto chama-se deposição (deposition)."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "xoogga hirarka oo hawo iyo biyo ku riixa dillaacyada dhagaxa (hydraulic action)",
            "dhagaxyo iyo ciid hirarka ku jira oo jarka xoqaya (abrasion)",
            "dhagaxyo yaryar oo is garaacaya oo sii yaraanaya oo sii wareegsanaya (attrition)",
            "dhaqdhaqaaqa ciidda iyo dhagaxyada yaryar xeebta dhinaceeda oo hirarku keenaan (longshore drift)",
            "masaafada bad furan oo dabayshu ka soo dul dhacday si ay hir u samayso (fetch)",
            "hirarka oo dejiya ciidda iyo dhagaxyada yaryar ee ay sidaan (deposition)"
          ],
          "passage": [
            "Baddu xeebta afar siyaabood ayay u nabaad-guurisaa.",
            "Hydraulic action waa xoogga hirarka oo hawo ku riixa dillaacyada jarka.",
            "Abrasion waa dhagaxyo iyo ciid hirarka ku jira oo jarka xoqaya sida warqad-xoqeed.",
            "Attrition waa dhagaxyo yaryar oo is garaacaya oo sii yaraanaya oo sii wareegsanaya.",
            "Solution waa biyo bad oo si tartiib ah u milaya dhagaxyo sida chalk iyo limestone.",
            "Hirarku sidoo kale sediment ayay xeebta dhinaceeda u dhaqaajiyaan.",
            "Inta badan xagal ayay ku yimaadaan, oo dabaysha caadiga ah (prevailing wind) ayaa riixda.",
            "Swash-ku ciidda xagashaas ayuu xeebta kor ugu qaadaa.",
            "Backwash-ku si toosan hoos ayuu dib ugu jiidaa.",
            "Waqti ka dib ciiddu si leexleexan ayay xeebta dhinaceeda u socotaa.",
            "Tan waxaa la yiraahdaa longshore drift.",
            "Marka hirarku tamar lumiyaan, waxay dejiyaan waxa ay sidaan.",
            "Tan waxaa la yiraahdaa deposition."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "сила хвиль, що заганяють повітря і воду в тріщини породи (hydraulic action)",
            "каміння й пісок у хвилях, що труться об скелю (abrasion)",
            "камінці, що б’ються один об одного і стають меншими та круглішими (attrition)",
            "рух піску і гальки вздовж пляжу під дією хвиль (longshore drift)",
            "відстань відкритого моря, над якою дув вітер, щоб утворити хвилю (fetch)",
            "хвилі скидають пісок і камінці, які вони несуть (deposition)"
          ],
          "passage": [
            "Море руйнує узбережжя чотирма способами.",
            "Гідравлічна дія (hydraulic action) — це сила хвиль, що заганяють повітря в тріщини скелі.",
            "Абразія (abrasion) — це каміння й пісок у хвилях, що труться об скелю, як наждачний папір.",
            "Стирання (attrition) — це камінці, що б’ються один об одного і стають меншими та круглішими.",
            "Розчинення (solution) — це морська вода, яка повільно розчиняє породи, такі як крейда і вапняк.",
            "Хвилі також переносять осад уздовж пляжу.",
            "Зазвичай вони підходять під кутом, бо їх жене панівний вітер.",
            "Накат (swash) несе пісок угору по пляжу під цим кутом.",
            "Відкат (backwash) тягне його прямо назад униз.",
            "З часом пісок рухається зигзагом уздовж узбережжя.",
            "Це називається вздовжбереговим переміщенням (longshore drift).",
            "Коли хвилі втрачають енергію, вони скидають те, що несуть.",
            "Це називається відкладанням (deposition)."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "لہروں کی قوت جو ہوا اور پانی کو چٹان کی دراڑوں میں دھکیلتی ہے (hydraulic action)",
            "لہروں میں موجود پتھر اور ریت جو چٹانی دیوار کو رگڑتے ہیں (abrasion)",
            "کنکر ایک دوسرے سے ٹکرا کر چھوٹے اور گول ہوتے جاتے ہیں (attrition)",
            "لہروں کے ذریعے ریت اور بجری کی ساحل کے ساتھ ساتھ حرکت (longshore drift)",
            "کھلے سمندر کا وہ فاصلہ جس پر ہوا چل کر لہر بناتی ہے (fetch)",
            "لہریں اپنی اٹھائی ہوئی ریت اور کنکر گرا دیتی ہیں (deposition)"
          ],
          "passage": [
            "سمندر ساحل کو چار طریقوں سے گھساتا ہے۔",
            "hydraulic action لہروں کی وہ قوت ہے جو ہوا کو چٹانی دیوار کی دراڑوں میں دھکیلتی ہے۔",
            "abrasion یہ ہے کہ لہروں میں موجود پتھر اور ریت چٹانی دیوار کو ریگ مال کی طرح رگڑتے ہیں۔",
            "attrition یہ ہے کہ کنکر ایک دوسرے سے ٹکرا کر چھوٹے اور گول ہوتے جاتے ہیں۔",
            "solution یہ ہے کہ سمندری پانی چاک اور limestone جیسی چٹانوں کو آہستہ آہستہ گھلا دیتا ہے۔",
            "لہریں ساحل کے ساتھ ساتھ تلچھٹ (sediment) کو بھی حرکت دیتی ہیں۔",
            "وہ عام طور پر ایک زاویے پر آتی ہیں، غالب ہوا (prevailing wind) کے دھکیلنے سے۔",
            "swash ریت کو اسی زاویے پر ساحل کے اوپر لے جاتا ہے۔",
            "backwash اسے سیدھا واپس نیچے کھینچ لیتا ہے۔",
            "وقت کے ساتھ ریت ساحل کے ساتھ ساتھ ٹیڑھی میڑھی چال میں آگے بڑھتی ہے۔",
            "اسے longshore drift کہتے ہیں۔",
            "جب لہریں توانائی کھو دیتی ہیں تو جو کچھ لے جا رہی ہوتی ہیں، گرا دیتی ہیں۔",
            "اسے deposition کہتے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Four ways the sea erodes",
          paragraphs: [
            "Erosion is the wearing away and removal of rock. At the coast it is done by waves in four ways, and you need all four names. Hydraulic action (the deck also calls it hydraulic power) happens when a breaking wave traps air and water in the joints and cracks of a cliff; the trapped air is compressed, the pressure weakens the rock, and over many waves the crack widens and pieces break off. Abrasion happens when the waves pick up sand and bits of rock and throw them against the cliff, grinding its surface down like sandpaper.",
            "Attrition does not attack the cliff at all. It is what happens to the load the sea is carrying: rocks and pebbles are knocked against one another until they break into smaller, smoother, rounder pieces. That is why beach pebbles are round. Solution is chemical: sea water slowly dissolves minerals from rocks such as chalk and limestone and carries them away in the water.",
            "How fast a coast erodes depends on the energy of the waves and the strength of the rock. Big destructive waves with a long fetch erode fastest. Soft rocks like clay, and rocks full of joints, give way quickly; hard, solid rocks like granite resist for centuries. Weathering and mass movement speed things up by loosening the cliff before the waves arrive."
          ],
          tip: "Attrition is the odd one out: it wears down the load, not the cliff. Abrasion uses the load to wear down the cliff."
        },
        {
          heading: "Longshore drift",
          paragraphs: [
            "Waves rarely arrive straight on. The prevailing wind pushes them towards the beach at an angle. When a wave breaks, its swash runs up the beach at that same angle, carrying sand and shingle with it. The backwash, pulled by gravity, drains straight back down the beach at right angles to the shoreline.",
            "Each wave therefore moves a little material up the beach at a slant and back down straight. Repeated thousands of times, this zig-zag carries sediment slowly along the coast in the direction of the prevailing wind. This process of transportation is called longshore drift. It is why a beach can be starved of sand at one end and piled up at the other, and why groynes are built across beaches to trap the drifting sand."
          ],
          worked: {
            q: "Explain how longshore drift moves sand along a beach. (4 marks)",
            steps: [
              "Start with the cause: the prevailing wind makes waves approach the beach at an angle.",
              "Describe the swash: it carries sand up the beach at the same angle as the waves.",
              "Describe the backwash: gravity pulls it straight back down the beach at right angles to the shore.",
              "Finish with the result: the repeated zig-zag moves sand slowly along the beach in the direction of the prevailing wind."
            ],
            answer: "Waves driven by the prevailing wind approach at an angle. The swash carries sand up the beach at that angle; the backwash drains straight back down under gravity. Repeated many times, this zig-zag moves sand along the beach in the direction of the prevailing wind."
          },
          tip: "Four marks, four ideas: angle, swash, backwash, zig-zag. Name the prevailing wind to show the cause."
        },
        {
          heading: "Carrying the load: four kinds of transport",
          paragraphs: [
            "The sea carries eroded material in four ways, and the same four words are used for rivers in Chapter 5. Traction is when large stones and boulders are rolled along the sea bed by the waves; it needs a lot of energy, so it mostly happens in storms. Saltation is when small pebbles and stones are bounced along the sea bed.",
            "Suspension is when fine, light material, such as sand and silt, is carried along within the water itself; it is what makes the sea look cloudy after a storm. Solution is when dissolved minerals are carried along, invisible, in the water. The more energy the waves have, the bigger the material they can move."
          ],
          tip: "Think size order: traction (boulders rolled), saltation (pebbles bounced), suspension (sand and silt floated), solution (dissolved)."
        },
        {
          heading: "Deposition: when the sea lets go",
          paragraphs: [
            "When waves do not have enough energy to carry their load, they drop it. This is deposition, and it builds beaches, spits and bars. Deposition happens where the swash is stronger than the backwash, which means constructive waves.",
            "You can predict where deposition will happen. It is most likely where there is little wind or the waves enter a sheltered area such as a bay; where the fetch is small; where waves run into shallow water and lose power; and where there is a large supply of eroded material to drop. The sheltered sandy beach inside Swanage Bay, which you will meet in the next chapter, is a result of exactly these conditions."
          ],
          tip: "Erosion needs energy; deposition is what happens when the energy runs out. Say so in your answer."
        }
      ],
      gate: [
        { kind: "mcq", q: "Pebbles carried by the waves knock against each other and become smaller and rounder. Which process is this?", options: ["Attrition", "Abrasion", "Hydraulic action", "Solution"], answer: 0, why: "Attrition is the load wearing itself down: pebbles knocking into each other and becoming smaller, smoother and rounder.",
          feedback: [
            "",
            "Abrasion is pebbles and sand being thrown against the cliff, wearing the cliff down. When the pebbles wear each other down, that is attrition.",
            "Hydraulic action is the force of water and trapped air in cracks in the cliff; no pebbles are involved. Pebbles knocking together is attrition.",
            "Solution is rock being dissolved by sea water, which does not make pebbles rounder. Pebbles knocking together and rounding off is attrition."
          ] },
        { kind: "gap", q: "Longshore drift moves sediment along the beach in a ___ pattern.", answer: "zig-zag", options: ["zig-zag", "straight", "circular"], why: "Swash at an angle, backwash straight back: repeated, this makes a zig-zag along the beach.",
          feedback: {
            "straight": "The sediment does end up further along the beach, but it does not travel in a straight line. The angled swash and straight backwash make a zig-zag.",
            "circular": "A circle would bring the sediment back to where it started. Longshore drift moves it along the coast in a zig-zag, a little further with each wave."
          } },
        { kind: "mcq", q: "Where is deposition most likely to happen?", options: ["Where waves enter a sheltered bay and lose energy", "Where a storm brings tall destructive waves", "Where there is a long fetch and a strong wind", "Where the backwash is stronger than the swash"], answer: 0, why: "Waves deposit when they lose energy: in sheltered bays, with a small fetch, in shallow water and where there is plenty of material.",
          feedback: [
            "",
            "Tall destructive waves have lots of energy and a strong backwash, so they erode and carry material away rather than drop it. Deposition needs waves that have lost energy.",
            "A long fetch and strong wind make big, powerful waves that erode. Deposition happens where waves are small and have lost their energy, such as in a sheltered bay.",
            "A backwash stronger than the swash drags material away from the beach: that is erosion by destructive waves. Deposition happens when the swash is the stronger one."
          ] }
      ],
      modules: [
        {
          title: "Four ways the sea erodes",
          task: {
            kind: "match",
            q: "Match each process of coastal erosion to its description.",
            pairs: [
              ["Hydraulic action", "Breaking waves trap and compress air in cracks in the cliff, weakening the rock"],
              ["Abrasion", "Sand and rock in the waves are thrown against the cliff and grind it down"],
              ["Attrition", "Rocks and pebbles carried by the waves hit each other and break into smaller, rounder pieces"],
              ["Solution", "Sea water dissolves minerals from rocks such as chalk and limestone"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the one about dissolving: that is a chemical process.",
                "Find the one about air and pressure in cracks: hydraulic means to do with water pressure.",
                "Two are left and both involve rock hitting rock. Ask: is the cliff being hit, or are pebbles hitting each other?",
                "Hitting the cliff is abrasion (think sandpaper); pebbles hitting each other is attrition."
              ],
              example: {
                q: "A river bank is being worn away by stones hurled against it in a flood. Which process is this?",
                steps: ["Stones are hitting the bank, not each other.", "Rock material wearing a surface down is abrasion."],
                answer: "Abrasion."
              }
            },
            core: { hint: "One process is chemical, one is about trapped air, and two involve rock hitting something. Which of those hits the cliff?" },
            stretch: { extend: "Explain which two of these processes would be strongest on a chalk headland, and why the rock type matters." }
          },
          explain: "Say, in one sentence, the difference between abrasion and attrition.",
          why: "Hydraulic action is trapped, compressed air in cracks; abrasion is the load thrown at the cliff; attrition is the load wearing itself down; solution is dissolving."
        },
        {
          title: "Longshore drift, step by step",
          task: {
            kind: "order",
            q: "Put the stages of longshore drift in the correct order.",
            items: [
              "The prevailing wind makes waves approach the beach at an angle",
              "The swash carries sediment up the beach at the same angle as the waves",
              "The backwash drags the sediment straight back down the beach, at right angles to the shore",
              "Swash and backwash repeat, moving the sediment in a zig-zag along the beach",
              "Over time the sediment slowly travels along the coast in the direction of the prevailing wind"
            ]
          },
          contexts: [
            { label: "Swanage Bay", q: "Sand is slowly moving along the beach in Swanage Bay. Put the stages of the longshore drift that moves it in the correct order." },
            { label: "A beach with groynes", q: "Sand is piling up against one side of each groyne on a beach. Put the stages of the longshore drift that caused this in the correct order." }
          ],
          levels: {
            support: {
              steps: [
                "Start with the cause: what makes the waves arrive at an angle?",
                "A wave breaks: first the water goes up the beach (swash), then it comes back down (backwash).",
                "After one wave, think about many waves: what shape does the path make?",
                "End with the long-term result along the coast."
              ],
              example: {
                q: "Put these stages of a tide in order: the sea reaches high tide; the sea rises up the beach; the sea falls back down the beach; the sea reaches low tide.",
                steps: ["Start with the sea low, then rising.", "It reaches its highest point, then falls back."],
                answer: "Low tide; rises up the beach; high tide; falls back down the beach."
              }
            },
            core: { hint: "Cause first (wind and angle), then one wave (swash before backwash), then many waves, then the result." },
            stretch: { extend: "Explain how a groyne interrupts longshore drift, and what happens to the beach on the far side of it." }
          },
          explain: "Say, in one sentence, why the backwash goes straight down the beach when the swash went up at an angle.",
          why: "The wind sets the angle; the swash carries material up at that angle; gravity pulls the backwash straight back; many repeats make a zig-zag; the sediment ends up moving along the coast."
        },
        {
          title: "How is this load being carried?",
          task: {
            kind: "mcq",
            q: "Small pebbles are being bounced along the sea bed by the waves. Which type of transportation is this?",
            options: ["Saltation", "Traction", "Suspension", "Solution"],
            answer: 0,
            feedback: [
              "",
              "Traction is large stones and boulders being rolled along the bed, which needs a lot of energy. Small pebbles bouncing along the bed is saltation.",
              "Suspension is fine material such as sand and silt carried within the water, making it cloudy. Pebbles are too heavy to float; bouncing along the bed is saltation.",
              "Solution is dissolved minerals carried invisibly in the water. Pebbles are solid and bounce along the bed, which is saltation."
            ]
          },
          contexts: [
            { label: "River", q: "In a river in flood, small stones hop along the bed, landing and knocking other stones loose as they go. Which type of transportation is this?" },
            { label: "Storm beach", q: "During a storm, waves lift small pebbles off the sea bed and drop them a short distance further on, again and again. Which type of transportation is this?" },
            { label: "Stream after rain", q: "After heavy rain, a stream bounces gravel along its bed in short hops. Which type of transportation is this?" }
          ],
          explain: "Say, in one sentence, why saltation needs more energy than suspension but less than traction.",
          levels: {
            support: {
              steps: [
                "Ask how big the material is: boulders, pebbles, sand and silt, or dissolved?",
                "Ask how it moves: rolled, bounced, floated or dissolved.",
                "Pebbles are mid-sized, and they bounce.",
                "The word for bouncing along the bed starts with S but is not suspension."
              ],
              example: {
                q: "After a storm the sea near the shore looks brown and cloudy with sand and silt. Which type of transportation is this?",
                steps: ["The material is very fine: sand and silt.", "It is carried within the water, not along the bed.", "Fine material carried in the water is suspension."],
                answer: "Suspension."
              }
            },
            core: { hint: "Rolled, bounced, floated or dissolved: which word describes pebbles hopping along the bed?" },
            stretch: { extend: "Explain how the type of transportation along a stretch of coast might change between a calm day and a storm." }
          },
          why: "Saltation is small pebbles and stones bounced along the bed. Traction rolls boulders, suspension floats fine material, solution carries dissolved minerals."
        }
      ]
    },

    /* ───────────── 3 · coastal landforms and Swanage ───────────── */
    {
      key: "coastal-landforms", n: 3, title: "Landforms of the coast, and the Swanage case study",
      lead: "How headlands and bays, caves, arches, stacks and stumps are carved by erosion, how beaches, dunes, spits and bars are built by deposition, and how the coast at Swanage shows them all.",
      covers: [5, 6, 7, 8],
      pretext: {
        words: [
          { word: "headland", means: "a point of harder rock that sticks out into the sea", sentence: "Waves attack a headland from three sides." },
          { word: "discordant", means: "a coast where bands of hard and soft rock meet the sea at right angles", sentence: "On a discordant coast, soft rock is eroded into bays between hard headlands." },
          { word: "stack", means: "a pillar of rock left standing in the sea when an arch collapses", sentence: "Old Harry is a chalk stack near Swanage." },
          { word: "spit", means: "a long, narrow ridge of sand and shingle built out from the coast by longshore drift", sentence: "A spit often has a curved end where the wind bends it." },
          { word: "marram grass", means: "a tough grass planted to hold sand dunes together", sentence: "Marram grass stops the wind blowing the dunes away." },
          { word: "grid reference", means: "numbers that give a place on an OS map", sentence: "A six-figure grid reference pins a place down to a single point." }
        ],
        passage: [
          "Some coasts have bands of hard and soft rock that meet the sea at right angles.",
          "Soft rock wears away faster and forms bays.",
          "Hard rock is left sticking out as headlands.",
          "Waves attack the headland and open cracks into caves.",
          "A cave may cut right through to make an arch.",
          "When the arch roof falls, a stack is left standing in the sea.",
          "The stack is worn down to a stump.",
          "In sheltered places the sea deposits sand and shingle to form beaches.",
          "Wind blows dry sand inland to form sand dunes.",
          "Longshore drift can build a spit out across a river mouth or bay.",
          "Swanage, in Dorset, shows many of these landforms.",
          "Its coast is part of the Jurassic Coast, a World Heritage Site."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "رأس من صخور أصلب يبرز في البحر (headland)",
            "ساحل تلتقي فيه شرائط الصخور الصلبة والليّنة بالبحر بزوايا قائمة (discordant)",
            "عمود من الصخر يبقى واقفًا في البحر عندما ينهار القوس (stack)",
            "حافّة طويلة ضيّقة من الرمل والحصى يبنيها الانجراف الساحلي خارجةً من الساحل (spit)",
            "عشب قوي يُزرع ليثبّت الكثبان الرملية (marram grass)",
            "أرقام تحدّد مكانًا على خريطة OS (grid reference)"
          ],
          "passage": [
            "في بعض السواحل شرائط من الصخور الصلبة والليّنة تلتقي بالبحر بزوايا قائمة.",
            "تتآكل الصخور الليّنة أسرع فتكوّن الخلجان (bays).",
            "وتبقى الصخور الصلبة بارزةً على شكل رؤوس (headlands).",
            "تهاجم الأمواج الرأس فتوسّع الشقوق إلى كهوف (caves).",
            "قد يخترق الكهف الرأس كلّه فيصنع قوسًا (arch).",
            "عندما يسقط سقف القوس، يبقى عمود صخري (stack) واقفًا في البحر.",
            "ويتآكل العمود الصخري حتى يصير جذعًا (stump).",
            "في الأماكن المحميّة يرسّب البحر الرمل والحصى فتتكوّن الشواطئ.",
            "تحمل الرياح الرمل الجافّ إلى الداخل فتتكوّن الكثبان الرملية (sand dunes).",
            "يمكن للانجراف الساحلي أن يبني لسانًا رمليًا (spit) عبر مصبّ نهر أو خليج.",
            "سوانيج (Swanage)، في دورست (Dorset)، تُظهر كثيرًا من هذه الأشكال الأرضية.",
            "ساحلها جزء من الساحل الجوراسي (Jurassic Coast)، وهو موقع تراث عالمي."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "cypel z twardszej skały, który wystaje w morze (headland)",
            "wybrzeże, na którym pasy twardej i miękkiej skały dochodzą do morza pod kątem prostym (discordant)",
            "słup skalny, który zostaje w morzu, kiedy zawali się łuk (stack)",
            "długi, wąski grzbiet z piasku i żwiru zbudowany od brzegu w morze przez dryf wzdłużbrzegowy (spit)",
            "twarda trawa sadzona po to, by utrzymać wydmy w całości (marram grass)",
            "liczby, które wskazują miejsce na mapie OS (grid reference)"
          ],
          "passage": [
            "Na niektórych wybrzeżach pasy twardej i miękkiej skały dochodzą do morza pod kątem prostym.",
            "Miękka skała ściera się szybciej i tworzy zatoki (bays).",
            "Twarda skała zostaje i wystaje jako cyple (headlands).",
            "Fale atakują cypel i poszerzają szczeliny w jaskinie (caves).",
            "Jaskinia może przebić się na wylot i utworzyć łuk (arch).",
            "Kiedy strop łuku się zawali, w morzu zostaje słup skalny (stack).",
            "Słup jest ścierany, aż zostaje z niego kikut (stump).",
            "W osłoniętych miejscach morze osadza piasek i żwir, tworząc plaże.",
            "Wiatr wywiewa suchy piasek w głąb lądu i tworzy wydmy (sand dunes).",
            "Dryf wzdłużbrzegowy może zbudować mierzeję (spit) w poprzek ujścia rzeki lub zatoki.",
            "Swanage w hrabstwie Dorset pokazuje wiele z tych form terenu.",
            "Jego wybrzeże jest częścią Wybrzeża Jurajskiego (Jurassic Coast), miejsca światowego dziedzictwa (World Heritage Site)."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma ponta de rocha mais dura que avança para o mar (headland, promontório)",
            "uma costa onde faixas de rocha dura e macia encontram o mar em ângulo reto (discordant, discordante)",
            "um pilar de rocha que fica de pé no mar quando um arco desaba (stack)",
            "uma faixa comprida e estreita de areia e cascalho construída a partir da costa pela deriva litoral (spit, restinga)",
            "uma erva/grama resistente plantada para segurar as dunas de areia (marram grass)",
            "números que indicam um lugar num mapa OS (grid reference, referência de quadrícula)"
          ],
          "passage": [
            "Algumas costas têm faixas de rocha dura e macia que encontram o mar em ângulo reto.",
            "A rocha macia desgasta-se mais depressa e forma baías.",
            "A rocha dura fica a sobressair como promontórios (headlands).",
            "As ondas atacam o promontório e abrem fendas que se tornam grutas (caves).",
            "Uma gruta pode atravessar a rocha de lado a lado e formar um arco (arch).",
            "Quando o teto do arco cai, fica um pilar de rocha de pé no mar, um stack.",
            "O stack desgasta-se até ficar um toco (stump).",
            "Em lugares abrigados, o mar deposita areia e cascalho e forma praias.",
            "O vento sopra a areia seca para o interior e forma dunas de areia.",
            "A deriva litoral pode construir uma restinga (spit) através da foz de um rio ou de uma baía.",
            "Swanage, em Dorset, mostra muitas destas formas de relevo.",
            "A sua costa faz parte da Costa Jurássica (Jurassic Coast), um sítio do Património/Patrimônio Mundial."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "fiiq dhagax adag oo badda dhex gala (headland)",
            "xeeb ay xarriijimo dhagax adag iyo jilicsan badda xagal qumman kula kulmaan (discordant)",
            "tiir dhagax oo badda dhexdeeda taagan oo hara marka arch dumo (stack)",
            "qaanso dheer oo cidhiidhi ah oo ciid iyo dhagaxyo yaryar ah oo longshore drift xeebta ka dhisay (spit)",
            "caws adag oo la beero si ay u isku hayso buuraleyda ciidda (marram grass)",
            "tirooyin meel ka tilmaama khariidadda OS (grid reference)"
          ],
          "passage": [
            "Xeebaha qaarkood waxay leeyihiin xarriijimo dhagax adag iyo jilicsan oo badda xagal qumman kula kulma.",
            "Dhagax jilicsan si dhaqso badan ayuu u nabaad-guuraa oo wuxuu samaystaa gacano (bays).",
            "Dhagax adag wuxuu hara isagoo soo fiiqan sida headlands.",
            "Hirarku headland-ka ayay weeraraan oo dillaacyada ayay godad (caves) ka furaan.",
            "God wuxuu gebi ahaanba dhex-goyn karaa oo samayn karaa arch.",
            "Marka saqafka arch-ka dumo, stack ayaa badda dhexdeeda taagan hara.",
            "Stack-ku wuu nabaad-guuraa ilaa uu noqdo stump.",
            "Meelo gabbaad leh baddu ciid iyo dhagaxyo yaryar ayay dejisaa oo xeebo (beaches) ayay samaysaa.",
            "Dabayshu ciid qalalan gudaha ayay u afuuftaa oo waxay samaysaa buuraley ciid (sand dunes).",
            "Longshore drift wuxuu spit ka dhisi karaa af webi ama gacan hortooda.",
            "Swanage, oo Dorset ku taal, waxay muujisaa landforms-kan badankood.",
            "Xeebteeda waa qayb ka mid ah Jurassic Coast, oo ah World Heritage Site."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "виступ твердішої породи, що виходить у море (headland)",
            "узбережжя, де смуги твердої і м’якої породи виходять до моря під прямим кутом (discordant)",
            "стовп породи, що залишається стояти в морі, коли арка руйнується (stack)",
            "довгий вузький гребінь із піску й гальки, який вздовжберегове переміщення нарощує від берега (spit)",
            "жорстка трава, яку садять, щоб утримувати піщані дюни (marram grass)",
            "числа, які вказують місце на карті OS (grid reference)"
          ],
          "passage": [
            "На деяких узбережжях смуги твердої і м’якої породи виходять до моря під прямим кутом.",
            "М’яка порода руйнується швидше і утворює бухти (bays).",
            "Тверда порода залишається виступати як миси (headlands).",
            "Хвилі атакують мис і розширюють тріщини до печер.",
            "Печера може пройти наскрізь і утворити арку (arch).",
            "Коли дах арки падає, у морі залишається стояти стовп — стек (stack).",
            "Стек руйнується до пенька (stump).",
            "У захищених місцях море відкладає пісок і гальку, утворюючи пляжі.",
            "Вітер здуває сухий пісок на суходіл і утворює піщані дюни.",
            "Вздовжберегове переміщення може нарощувати косу (spit) через гирло річки або бухту.",
            "Свонідж (Swanage) у Дорсеті показує багато з цих форм рельєфу.",
            "Його узбережжя — частина Юрського узбережжя (Jurassic Coast), об’єкта Світової спадщини."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "سخت چٹان کا ایک کونا جو سمندر میں باہر نکلا ہوا ہو (headland)",
            "ایسا ساحل جہاں سخت اور نرم چٹان کی پٹیاں سمندر سے قائمہ زاویے پر ملتی ہیں (discordant)",
            "چٹان کا ایک ستون جو arch گرنے پر سمندر میں کھڑا رہ جاتا ہے (stack)",
            "ریت اور بجری کی ایک لمبی، تنگ پٹی جو longshore drift ساحل سے باہر بناتی ہے (spit)",
            "ایک سخت گھاس جو ریت کے ٹیلوں کو جوڑے رکھنے کے لیے لگائی جاتی ہے (marram grass)",
            "وہ نمبر جو OS نقشے پر کسی جگہ کا پتہ دیتے ہیں (grid reference)"
          ],
          "passage": [
            "کچھ ساحلوں پر سخت اور نرم چٹان کی پٹیاں سمندر سے قائمہ زاویے پر ملتی ہیں۔",
            "نرم چٹان جلدی گھس جاتی ہے اور خلیجیں (bays) بناتی ہے۔",
            "سخت چٹان باہر نکلی ہوئی رہ جاتی ہے اور headlands بناتی ہے۔",
            "لہریں headland پر حملہ کرتی ہیں اور دراڑوں کو کھول کر غار (caves) بنا دیتی ہیں۔",
            "غار پوری چٹان کے آر پار کٹ کر ایک arch بنا سکتا ہے۔",
            "جب arch کی چھت گر جاتی ہے تو ایک stack سمندر میں کھڑا رہ جاتا ہے۔",
            "stack گھس کر ایک stump بن جاتا ہے۔",
            "محفوظ جگہوں پر سمندر ریت اور بجری جمع کر کے ساحل (beaches) بناتا ہے۔",
            "ہوا خشک ریت کو اندرونِ ملک اڑا کر ریت کے ٹیلے (sand dunes) بناتی ہے۔",
            "longshore drift دریا کے دہانے یا خلیج کے آر پار ایک spit بنا سکتا ہے۔",
            "ڈورسیٹ (Dorset) کا سوانیج (Swanage) ان میں سے بہت سے landforms دکھاتا ہے۔",
            "اس کا ساحل Jurassic Coast کا حصہ ہے، جو ایک World Heritage Site ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Headlands and bays",
          paragraphs: [
            "The shape of a coastline depends on its geology: the rock type and the geological structure, which is the way the layers of rock are folded or tilted. Where bands of harder and softer rock run at right angles to the coast, the sea erodes the soft rock (such as clay and sands) quickly into bays, and leaves the harder rock (such as chalk and limestone) sticking out as headlands. A coast like this is called discordant.",
            "Where the bands of rock run parallel to the coast, a single band of hard rock faces the sea and protects the softer rock behind it. This is a concordant coast: it is straighter, with fewer bays, until the sea breaks through the hard band. Swanage, in Dorset, has a discordant coast, which is why its headlands and bays are so clear on the map.",
            "Once a headland exists, it takes the full force of the waves from three sides, while the bay behind it is sheltered. So erosion concentrates on the headland and deposition builds a beach in the bay. Over time this evens the coast out again."
          ],
          tip: "Geology means rock type AND structure. Mention both when you explain why a coastline has the shape it does."
        },
        {
          heading: "Caves, arches, stacks and stumps",
          paragraphs: [
            "A headland is attacked by hydraulic action and abrasion where the waves break against its base. Any joint or crack in the rock is a weakness, and the waves widen it first into a small cave and then into a large cave. If the cave is eroded right through the headland, or two caves on opposite sides meet, the result is an arch, a passage you can see daylight through.",
            "The arch is attacked from both sides. Erosion widens it at the base while weathering (freeze-thaw, rain and roots) weakens the roof. A point comes when the roof cannot support itself and it collapses, leaving a pillar of rock standing in the sea, cut off from the headland: a stack. The waves keep working at the base of the stack until it topples and is worn down into a low stump, often only visible at low tide.",
            "The same attack at the base of any cliff cuts a wave-cut notch. As the notch deepens, the cliff above becomes unstable and collapses, so the cliff retreats inland and leaves a flat, rocky wave-cut platform at its foot, exposed at low tide."
          ],
          worked: {
            q: "Explain how a stack is formed. (4 marks)",
            steps: [
              "Begin at the headland: name the weakness (a joint or crack) and the processes that attack it (hydraulic action and abrasion).",
              "Say what the crack becomes: the waves widen it into a cave.",
              "Say how the cave becomes an arch: it is eroded right through the headland, or meets a cave from the other side.",
              "Finish with the collapse: weathering weakens the arch roof and erosion widens the base until the roof falls, leaving an isolated pillar of rock, the stack. Name a UK example: Old Harry, near Swanage."
            ],
            answer: "Waves erode a crack in a headland by hydraulic action and abrasion, widening it into a cave. The cave is eroded through the headland to form an arch. Weathering weakens the arch roof and erosion widens its base until the roof collapses, leaving a pillar of rock standing in the sea: a stack, such as Old Harry near Swanage."
          },
          tip: "Sequence words earn marks: first, then, over time, eventually. Add one process word to each step and one named example at the end."
        },
        {
          heading: "Landforms of deposition",
          paragraphs: [
            "A beach is a store of sand and shingle deposited between the high and low tide marks, usually in a sheltered bay where constructive waves bring in more than they take away. At the back of a sandy beach, the wind blows dry sand inland until it is trapped by an obstacle such as driftwood or a plant. Sand dunes build up in ridges. Marram grass, which is adapted to windy, exposed conditions, roots into the sand and holds the dunes together.",
            "A spit is a long, narrow stretch of sand and shingle that juts out from the coast into the sea. It forms where longshore drift carries material along the coast and the coastline suddenly changes direction, for example at a river mouth or the entrance to a bay; the drift carries on in a straight line and the sediment is deposited in the calmer water beyond. Strong winds or tidal currents bend the end of the spit into a recurved end. Behind the spit, sheltered water fills with fine sediment: mudflats that, over time, develop into a salt marsh.",
            "If a spit grows right across a bay and joins the land on the other side, it becomes a bar. The bay behind it is cut off from the sea and becomes a lagoon."
          ],
          tip: "Spit, bar, lagoon: a spit is open at one end; a bar closes the bay; the trapped water behind a bar is a lagoon."
        },
        {
          heading: "Case study: the coast at Swanage",
          paragraphs: [
            "Swanage is a seaside town on the Dorset coast in southern England. Its coastline is part of the Jurassic Coast, a 154 km stretch of coast in East Devon and Dorset that was made a World Heritage Site in 2001 because of its geological importance. The coast around Swanage is discordant: bands of harder and softer rock meet the sea at right angles, so headlands and bays alternate along it.",
            "To the north of the town, The Foreland is a headland of chalk. At its tip stand the chalk stacks called Old Harry Rocks, with the white chalk cliffs behind them: a textbook sequence of cave, arch, stack and stump. Between The Foreland and the headland of Peveril Point, the softer rock has been eroded back to form Swanage Bay. The bay is sheltered, so the sea has deposited a wide sandy beach that made Swanage a popular tourist resort. South of Peveril Point lies another headland of harder rock, Durlston Head. Further north, Studland Bay has a sandy beach backed by sand dunes, stabilised by marram grass, and Studland Heath behind it is a protected natural environment.",
            "You studied this coast on an OS map, the highly accurate maps drawn by Ordnance Survey. A four-figure grid reference, such as 0376, names one whole grid square; a six-figure reference, such as 032789, pins down a point inside a square to the nearest 100 metres. Always give the easting (the number along the bottom of the map) before the northing (the number up the side). You also used the scale to estimate the width of Swanage Bay, and photographs to tell whether the tide was in or out."
          ],
          tip: "For a named example question, give the place, the landform and one specific detail: Old Harry Rocks are chalk stacks at The Foreland, near Swanage, on the Jurassic Coast."
        }
      ],
      gate: [
        { kind: "mcq", q: "Old Harry Rocks, near Swanage, are a famous UK example of which landform?", options: ["Stacks", "A spit", "A bar", "Sand dunes"], answer: 0, why: "Old Harry Rocks are chalk stacks at the tip of The Foreland headland, left standing when arches collapsed.",
          feedback: [
            "",
            "A spit is a ridge of sand and shingle built by deposition. Old Harry Rocks are pillars of chalk left by erosion of a headland: stacks.",
            "A bar is a ridge of deposited sand that closes off a bay. Old Harry Rocks are chalk pillars standing in the sea, carved by erosion: stacks.",
            "Sand dunes are ridges of wind-blown sand behind a beach, as at Studland. Old Harry Rocks are chalk stacks at the end of a headland."
          ] },
        { kind: "numeric", q: "The Jurassic Coast stretches along the coast of East Devon and Dorset. How long is it, in kilometres?", answer: 154, tolerance: 0, units: "km", check: "JURASSIC_KM", why: "The Jurassic Coast is a 154 km stretch of coast that was made a World Heritage Site in 2001.",
          misconceptions: [
            { answer: 2001, says: "2001 is the year the Jurassic Coast became a World Heritage Site, not its length. The coast is 154 km long.", check: "WHS_YEAR" },
            { answer: 1540, says: "That is ten times too long; a zero has crept in. The Jurassic Coast is 154 km.", check: "JURASSIC_KM*10" },
            { answer: 145, says: "You have the right digits in the wrong order. The Jurassic Coast is 154 km long.", check: "145" }
          ] },
        { kind: "gap", q: "Marram grass is planted on sand dunes to ___ them.", answer: "stabilise", options: ["stabilise", "erode", "flood"], why: "Marram grass is adapted to windy, exposed conditions; its roots bind the sand and stop the wind blowing the dunes away.",
          feedback: {
            "erode": "Erode means wear away, which is the opposite of what the grass does. Marram grass roots hold the sand in place, so it stabilises the dunes.",
            "flood": "Grass cannot flood a dune, and nobody would plant it to do so. Marram grass is planted because its roots bind the sand and stabilise the dunes."
          } }
      ],
      modules: [
        {
          title: "From headland to stump",
          task: {
            kind: "order",
            q: "Put the stages in the formation of a stack and stump in the correct order.",
            items: [
              "Waves attack a joint or crack in the headland by hydraulic action and abrasion",
              "The crack is widened into a cave",
              "The cave is eroded right through the headland to form an arch",
              "Weathering weakens the arch roof and erosion widens its base until the roof collapses, leaving a stack",
              "Waves erode the base of the stack until it topples and is worn down to a stump"
            ]
          },
          contexts: [
            { label: "Old Harry", q: "The chalk headland of The Foreland, near Swanage, ends in the stacks called Old Harry Rocks. Put the stages that formed them, and will one day reduce them to stumps, in the correct order." },
            { label: "A limestone headland", q: "A headland of jointed carboniferous limestone is being attacked by the sea. Put the stages that will turn it into a stack and then a stump in the correct order." },
            { label: "Any resistant headland", q: "Any headland of resistant rock with a weakness in it will eventually be cut into a stack and stump. Put the stages in the correct order." }
          ],
          levels: {
            support: {
              steps: [
                "Start with the headland still whole. What is the first weakness the waves find?",
                "Each stage makes the hole bigger: crack, then cave, then right through.",
                "Something has to collapse before a stack can stand on its own.",
                "The last stage is the smallest thing left."
              ],
              example: {
                q: "Put these stages of a cliff retreating in order: the cliff collapses; waves cut a notch at the base; a wave-cut platform is left; the notch deepens and the cliff overhangs.",
                steps: ["The waves act first, at the base.", "The notch gets deeper until the cliff above is unsupported.", "Collapse, then the flat platform is what remains."],
                answer: "Waves cut a notch; the notch deepens and the cliff overhangs; the cliff collapses; a wave-cut platform is left."
              }
            },
            core: { hint: "Crack, cave, arch, stack, stump: each one is what the last one becomes." },
            stretch: { extend: "Explain the different jobs that erosion and weathering do in turning an arch into a stack." }
          },
          explain: "Say, in one sentence, why the roof of an arch eventually collapses.",
          why: "Hydraulic action and abrasion open a crack into a cave; the cave becomes an arch; weathering above and erosion below bring the roof down to leave a stack; the stack is worn to a stump."
        },
        {
          title: "Landforms built by deposition",
          task: {
            kind: "match",
            q: "Match each depositional landform to its description.",
            pairs: [
              ["Beach", "Sand and shingle deposited between the high and low tide marks, usually in a sheltered bay"],
              ["Sand dunes", "Ridges of wind-blown sand at the back of a beach, held together by marram grass"],
              ["Spit", "A long, narrow ridge of sand and shingle built out from the coast by longshore drift, often with a recurved end"],
              ["Bar", "A ridge of sand and shingle that has grown right across a bay, trapping a lagoon behind it"]
            ]
          },
          levels: {
            support: {
              steps: [
                "One landform is made by wind, not waves. Which one grows behind the beach?",
                "One is the basic store of sand that the others grow from.",
                "Two are long ridges built by longshore drift. One is still open at the end; one has closed off a bay.",
                "A lagoon is trapped water, so it goes with the one that has closed the bay."
              ],
              example: {
                q: "Match: salt marsh, lagoon. Choices: a shallow stretch of water cut off from the sea by a bar; an area of mudflats behind a spit that has been colonised by plants.",
                steps: ["A lagoon is water cut off by a bar.", "Salt marsh develops on sheltered mudflats behind a spit."],
                answer: "Salt marsh: mudflats behind a spit colonised by plants. Lagoon: water cut off from the sea by a bar."
              }
            },
            core: { hint: "Beach first, dunes behind it; spit and bar are both ridges, but only one has closed off a bay." },
            stretch: { extend: "Explain why a spit forms where the coastline changes direction, and what makes its end curve." }
          },
          explain: "Say, in one sentence, what has to happen to the waves before any of these landforms can form.",
          why: "All four are built where the sea or wind loses energy and drops its load: a beach in a sheltered bay, dunes where wind-blown sand is trapped, a spit where longshore drift carries on past a bend in the coast, a bar where a spit closes a bay."
        },
        {
          title: "Geology and the shape of a coast",
          task: {
            kind: "written",
            q: "Using a named UK coastline you have studied, explain how geology has influenced the landforms found there. (6 marks)",
            marks: 6,
            criteria: [
              "Names the coastline and at least two specific landforms found there",
              "Explains how rock type (harder and softer rock) has produced headlands and bays",
              "Explains how geological structure (the way the bands of rock lie) makes the coast discordant or concordant",
              "Links a named landform of erosion or deposition to the processes that formed it",
              "Uses accurate geographical vocabulary and a clear, logical sequence"
            ],
            model: "The coast around Swanage in Dorset, part of the Jurassic Coast, is discordant: bands of harder and softer rock meet the sea at right angles. The softer rock between The Foreland and Peveril Point has been eroded by hydraulic action and abrasion into Swanage Bay, while the harder chalk and limestone have been left as headlands. At the tip of the chalk headland of The Foreland, waves have widened joints into caves and arches, and the collapse of arch roofs has left the chalk stacks of Old Harry Rocks. Because the bay is sheltered, constructive waves have deposited a wide sandy beach, and at Studland wind-blown sand has formed dunes stabilised by marram grass. So rock type decides which parts of the coast are eroded and which are left standing, and rock structure decides the pattern."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: name the coast and say whether it is discordant or concordant.",
                "Sentence 2: say which rock is soft and what it has become (a bay), and which rock is hard and what it has become (a headland).",
                "Sentence 3: pick one headland landform (a stack) and explain the processes that made it.",
                "Sentence 4: pick one deposition landform (the beach) and say why deposition happened there.",
                "Last sentence: sum up. Rock type decides what is eroded; rock structure decides the pattern."
              ],
              example: {
                q: "In two sentences, explain how geology has influenced the landforms of a chalk coast with bands of clay, where the bands run at right angles to the sea.",
                steps: ["Say which rock forms which landform.", "Say what the arrangement of the bands is called."],
                answer: "The soft clay is eroded faster to form bays, and the harder chalk is left as headlands. Because the bands meet the sea at right angles, the coast is discordant and headlands and bays alternate."
              }
            },
            core: { hint: "Geology means rock type and structure. Give one landform for each, and name the processes that made it." },
            stretch: { extend: "Add a sentence predicting how the Swanage coast will change over the next few thousand years as the headlands are eroded and the bays fill with sediment." }
          },
          explain: "Say, in one sentence, why a discordant coast has headlands and bays while a concordant coast is straighter.",
          why: "A top answer names the coast and its landforms, separates rock type from rock structure, and ties each landform to a process. Swanage gives you headlands (hard rock), a bay (soft rock), stacks (erosion) and a beach and dunes (deposition)."
        }
      ]
    },

    /* ───────────── 4 · managing the coast ───────────── */
    {
      key: "managing-coasts", n: 4, title: "Managing the coast: hard, soft and managed retreat",
      lead: "The hard and soft engineering strategies used to protect UK coasts, what each costs and who gains or loses, managed retreat at Medmerry, and the Lyme Regis case study.",
      covers: [9, 10, 11],
      pretext: {
        words: [
          { word: "hard engineering", means: "building structures to hold back the sea", sentence: "A sea wall is a type of hard engineering." },
          { word: "soft engineering", means: "working with natural processes to protect the coast", sentence: "Planting marram grass on dunes is soft engineering." },
          { word: "sea wall", means: "a concrete or rock barrier that reflects waves back to sea", sentence: "The sea wall has a curved face and a walkway on top." },
          { word: "groyne", means: "a barrier built out across the beach to trap drifting sand", sentence: "Sand piles up on one side of each groyne." },
          { word: "beach nourishment", means: "adding sand or shingle to make a beach wider", sentence: "Beach nourishment uses sand dredged from the sea bed." },
          { word: "managed retreat", means: "letting the sea flood low-value land on purpose", sentence: "Managed retreat at Medmerry created a new wildlife habitat." }
        ],
        passage: [
          "Coasts are managed to protect people, homes and businesses from erosion and flooding.",
          "Hard engineering means building structures to hold back the sea.",
          "A sea wall is a concrete barrier with a curved face that reflects waves.",
          "Groynes are barriers built out across the beach to trap sand moving by longshore drift.",
          "Rock armour is a pile of large boulders at the foot of a cliff.",
          "Gabions are wire cages filled with rocks.",
          "Hard engineering is expensive and can spoil the look of the coast.",
          "Soft engineering works with nature and is usually cheaper.",
          "Beach nourishment adds sand to make the beach wider.",
          "Dune regeneration plants marram grass to hold the sand dunes together.",
          "Managed retreat lets the sea flood low-value land on purpose.",
          "At Medmerry, in West Sussex, this created a new wildlife habitat.",
          "Lyme Regis, in Dorset, has used several schemes to protect its town."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "بناء منشآت لصدّ البحر (hard engineering)",
            "العمل مع العمليات الطبيعية لحماية الساحل (soft engineering)",
            "حاجز من الخرسانة أو الصخر يعكس الأمواج إلى البحر (sea wall)",
            "حاجز يُبنى عبر الشاطئ ليحبس الرمل المنجرف (groyne)",
            "إضافة رمل أو حصى لجعل الشاطئ أعرض (beach nourishment)",
            "ترك البحر يغمر أرضًا قليلة القيمة عن قصد (managed retreat)"
          ],
          "passage": [
            "تُدار السواحل لحماية الناس والمنازل والأعمال من التعرية والفيضان.",
            "الهندسة الصلبة (hard engineering) تعني بناء منشآت لصدّ البحر.",
            "الجدار البحري (sea wall) حاجز خرساني بوجه منحنٍ يعكس الأمواج.",
            "الحواجز الشاطئية (groynes) حواجز تُبنى عبر الشاطئ لتحبس الرمل الذي يحرّكه الانجراف الساحلي.",
            "الدرع الصخري (rock armour) كومة من الصخور الكبيرة عند أسفل الجرف.",
            "الأقفاص الصخرية (gabions) أقفاص من الأسلاك مملوءة بالصخور.",
            "الهندسة الصلبة مكلفة ويمكن أن تُفسد منظر الساحل.",
            "الهندسة الليّنة (soft engineering) تعمل مع الطبيعة وهي عادةً أرخص.",
            "تغذية الشاطئ (beach nourishment) تضيف رملًا لجعل الشاطئ أعرض.",
            "تجديد الكثبان (dune regeneration) يزرع عشب المرام (marram grass) ليثبّت الكثبان الرملية.",
            "التراجع المُدار (managed retreat) يترك البحر يغمر أرضًا قليلة القيمة عن قصد.",
            "في ميدميري (Medmerry)، في ويست ساسكس (West Sussex)، خلق هذا موطنًا جديدًا للحياة البرّية.",
            "استخدمت لايم ريجيس (Lyme Regis)، في دورست، عدّة مشروعات لحماية مدينتها."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "budowanie konstrukcji, które powstrzymują morze (hard engineering)",
            "współpraca z naturalnymi procesami, by chronić wybrzeże (soft engineering)",
            "betonowa lub skalna bariera, która odbija fale z powrotem w morze (sea wall)",
            "bariera zbudowana w poprzek plaży, żeby zatrzymać przesuwający się piasek (groyne)",
            "dosypywanie piasku lub żwiru, żeby plaża była szersza (beach nourishment)",
            "celowe pozwolenie morzu na zalanie terenów o małej wartości (managed retreat)"
          ],
          "passage": [
            "Wybrzeżami zarządza się po to, by chronić ludzi, domy i firmy przed erozją i powodzią.",
            "Twarda inżynieria (hard engineering) oznacza budowanie konstrukcji, które powstrzymują morze.",
            "Mur morski (sea wall) to betonowa bariera z zakrzywioną ścianą, która odbija fale.",
            "Ostrogi (groynes) to bariery zbudowane w poprzek plaży, żeby zatrzymać piasek przesuwany przez dryf wzdłużbrzegowy.",
            "Narzut kamienny (rock armour) to stos wielkich głazów u podnóża klifu.",
            "Gabiony (gabions) to kosze z siatki wypełnione kamieniami.",
            "Twarda inżynieria jest droga i może zepsuć wygląd wybrzeża.",
            "Miękka inżynieria (soft engineering) współpracuje z naturą i zwykle jest tańsza.",
            "Zasilanie plaży (beach nourishment) to dosypywanie piasku, żeby plaża była szersza.",
            "Odbudowa wydm (dune regeneration) to sadzenie trawy marram (marram grass), która utrzymuje wydmy w całości.",
            "Kontrolowany odwrót (managed retreat) celowo pozwala morzu zalać tereny o małej wartości.",
            "W Medmerry w West Sussex stworzyło to nowe siedlisko dla dzikiej przyrody.",
            "Lyme Regis w hrabstwie Dorset użyło kilku sposobów, żeby chronić swoje miasto."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "construir estruturas para travar/segurar o mar (hard engineering, engenharia pesada)",
            "trabalhar com os processos naturais para proteger a costa (soft engineering, engenharia leve)",
            "uma barreira de betão/concreto ou de rocha que reflete as ondas de volta para o mar (sea wall, paredão)",
            "uma barreira construída através da praia para prender a areia que vai à deriva (groyne, esporão)",
            "juntar areia ou cascalho para tornar uma praia mais larga (beach nourishment, alimentação da praia)",
            "deixar o mar inundar de propósito terras de pouco valor (managed retreat, recuo controlado)"
          ],
          "passage": [
            "As costas são geridas/gerenciadas para proteger as pessoas, as casas e os negócios da erosão e das inundações.",
            "Engenharia pesada (hard engineering) quer dizer construir estruturas para travar o mar.",
            "Um paredão (sea wall) é uma barreira de betão/concreto com uma face curva que reflete as ondas.",
            "Os esporões (groynes) são barreiras construídas através da praia para prender a areia movida pela deriva litoral.",
            "A armadura de rocha (rock armour) é um monte de grandes blocos de pedra ao pé de uma falésia.",
            "Os gabiões (gabions) são gaiolas de arame cheias de pedras.",
            "A engenharia pesada é cara e pode estragar o aspeto/aspecto da costa.",
            "A engenharia leve (soft engineering) trabalha com a natureza e costuma ser mais barata.",
            "A alimentação da praia (beach nourishment) junta areia para tornar a praia mais larga.",
            "A regeneração das dunas (dune regeneration) planta marram grass para segurar as dunas de areia.",
            "O recuo controlado (managed retreat) deixa o mar inundar de propósito terras de pouco valor.",
            "Em Medmerry, em West Sussex, isto criou um novo habitat para a vida selvagem.",
            "Lyme Regis, em Dorset, usou vários projetos para proteger a sua cidade."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "dhisidda dhismayaal si badda dib loogu celiyo (hard engineering)",
            "la shaqaynta hababka dabiiciga ah si xeebta loo ilaaliyo (soft engineering)",
            "caqabad shub ama dhagax ah oo hirarka dib badda ugu celisa (sea wall)",
            "caqabad xeebta dhexdeeda laga dhisay si ay u qabato ciidda socota (groyne)",
            "ku daridda ciid ama dhagaxyo yaryar si xeebta loo ballaariyo (beach nourishment)",
            "u oggolaanshaha badda inay si ula kac ah fatahaad ku sameyso dhul qiimo yar (managed retreat)"
          ],
          "passage": [
            "Xeebaha waa la maareeyaa si dadka, guryaha iyo ganacsiyada looga ilaaliyo nabaad-guur iyo fatahaad.",
            "Hard engineering macnaheedu waa dhisidda dhismayaal si badda dib loogu celiyo.",
            "Sea wall waa caqabad shub ah oo wejigeedu qalloocan yahay oo hirarka dib u celisa.",
            "Groynes waa caqabado xeebta dhexdeeda laga dhisay si ay u qabtaan ciidda longshore drift dhaqaajiyo.",
            "Rock armour waa tuulmo dhagaxyo waaweyn oo jar hoostiisa la dhigay.",
            "Gabions waa qafisyo silig ah oo dhagaxyo ka buuxaan.",
            "Hard engineering qaali ayay tahay, waxayna kharribi kartaa muuqaalka xeebta.",
            "Soft engineering dabeecadda ayay la shaqaysaa, inta badanna way jaban tahay.",
            "Beach nourishment ciid ayay ku dartaa si xeebta loo ballaariyo.",
            "Dune regeneration marram grass ayay beertaa si buuraleyda ciidda loo isku hayo.",
            "Managed retreat badda ayay u oggolaataa inay si ula kac ah fatahaad ku samayso dhul qiimo yar.",
            "Medmerry, oo West Sussex ku taal, tani waxay abuurtay deegaan cusub oo xayawaan duurjoog ah.",
            "Lyme Regis, oo Dorset ku taal, dhowr mashruuc ayay isticmaashay si magaaladeeda u ilaaliso."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "будівництво споруд, щоб стримувати море (hard engineering)",
            "робота з природними процесами, щоб захистити узбережжя (soft engineering)",
            "бетонний або кам’яний бар’єр, який відбиває хвилі назад у море (sea wall)",
            "бар’єр, побудований поперек пляжу, щоб затримувати пісок, що переміщується (groyne)",
            "додавання піску або гальки, щоб зробити пляж ширшим (beach nourishment)",
            "навмисне дозволити морю затопити землю низької цінності (managed retreat)"
          ],
          "passage": [
            "Узбережжями керують, щоб захистити людей, домівки й бізнес від ерозії та затоплення.",
            "Жорстка інженерія (hard engineering) означає будівництво споруд, щоб стримувати море.",
            "Морська стіна (sea wall) — це бетонний бар’єр із вигнутою поверхнею, який відбиває хвилі.",
            "Буни (groynes) — це бар’єри поперек пляжу, які затримують пісок, що рухається вздовжбереговим переміщенням.",
            "Кам’яний захист (rock armour) — це купа великих валунів біля підніжжя скелі.",
            "Габіони (gabions) — це дротяні клітки, наповнені камінням.",
            "Жорстка інженерія дорога і може зіпсувати вигляд узбережжя.",
            "М’яка інженерія (soft engineering) працює разом із природою і зазвичай дешевша.",
            "Підсипання пляжу (beach nourishment) додає пісок, щоб зробити пляж ширшим.",
            "Відновлення дюн (dune regeneration) — це висаджування трави marram, щоб утримувати піщані дюни.",
            "Керований відступ (managed retreat) навмисно дозволяє морю затопити землю низької цінності.",
            "У Медмеррі (Medmerry), Західний Сассекс, це створило нове середовище для дикої природи.",
            "Лайм-Реджис (Lyme Regis) у Дорсеті використав кілька схем, щоб захистити своє місто."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "سمندر کو روکنے کے لیے ڈھانچے بنانا (hard engineering)",
            "ساحل کی حفاظت کے لیے قدرتی عملوں کے ساتھ مل کر کام کرنا (soft engineering)",
            "کنکریٹ یا پتھر کی ایک رکاوٹ جو لہروں کو واپس سمندر کی طرف پلٹا دیتی ہے (sea wall)",
            "ساحل کے آر پار بنائی گئی رکاوٹ جو بہتی ہوئی ریت کو روک لیتی ہے (groyne)",
            "ساحل کو چوڑا کرنے کے لیے ریت یا بجری ڈالنا (beach nourishment)",
            "کم قیمت زمین کو جان بوجھ کر سمندر کے پانی میں ڈوبنے دینا (managed retreat)"
          ],
          "passage": [
            "ساحلوں کا انتظام لوگوں، گھروں اور کاروباروں کو گھسائی اور سیلاب سے بچانے کے لیے کیا جاتا ہے۔",
            "hard engineering کا مطلب ہے سمندر کو روکنے کے لیے ڈھانچے بنانا۔",
            "sea wall کنکریٹ کی ایک رکاوٹ ہے جس کا خم دار رخ لہروں کو پلٹا دیتا ہے۔",
            "groynes ساحل کے آر پار بنائی گئی رکاوٹیں ہیں جو longshore drift سے حرکت کرتی ریت کو روک لیتی ہیں۔",
            "rock armour چٹانی دیوار کے دامن میں بڑے بڑے پتھروں کا ڈھیر ہے۔",
            "gabions تار کے پنجرے ہیں جن میں پتھر بھرے ہوتے ہیں۔",
            "hard engineering مہنگی ہے اور ساحل کی خوبصورتی خراب کر سکتی ہے۔",
            "soft engineering قدرت کے ساتھ مل کر کام کرتی ہے اور عام طور پر سستی ہوتی ہے۔",
            "beach nourishment ریت ڈال کر ساحل کو چوڑا کرتی ہے۔",
            "dune regeneration میں marram grass لگائی جاتی ہے تاکہ ریت کے ٹیلے جڑے رہیں۔",
            "managed retreat کم قیمت زمین کو جان بوجھ کر سمندر کے پانی میں ڈوبنے دیتا ہے۔",
            "ویسٹ سسیکس (West Sussex) کے میڈمیری (Medmerry) میں اس سے جنگلی حیات کا ایک نیا مسکن بنا۔",
            "ڈورسیٹ کے لائم ریجس (Lyme Regis) نے اپنے شہر کی حفاظت کے لیے کئی منصوبے استعمال کیے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Hard engineering",
          paragraphs: [
            "Hard engineering means building artificial structures to resist the sea. It tends to be expensive, can have a high impact on the landscape and the environment, and is often unsustainable, but it works quickly and people trust it. Four structures matter here. A sea wall is a concrete or rock barrier at the foot of a cliff or the top of a beach, usually with a curved face to reflect waves back out to sea; it costs around £5000 to £10 000 per metre. It gives people a sense of security and often carries a walkway, and if well maintained it lasts many years. But it is very expensive to build and maintain, it looks ugly from the beach, it can destroy habitats, it restricts access to the beach, and if waves overtop it the land behind can flood. It does not stop sediment moving along the coast, so it does not starve beaches further along.",
            "Groynes are barriers, of wood or rock, built out across the beach at right angles to the shore. They trap sand and shingle moving by longshore drift, so the beach on the up-drift side grows wider; a bigger beach absorbs wave energy and attracts tourists. Groynes are relatively cheap, around £5000 each, and can last up to 40 years if maintained. Against them: they block people walking along the beach, they are dangerous to climb on because the water is deep on one side and shallow on the other, old ones look unattractive, and the beach beyond the last groyne is starved of sand. Rock groynes at Sandbanks, in Poole, have concrete tops that people use as walkways and fishing points.",
            "Rock armour is large, resistant boulders dumped at the foot of a cliff or along a beach to absorb wave energy. At around £1000 to £3000 per metre it is cheaper than a sea wall, but the rock is often imported from Norway and Sweden, which raises the cost and means it does not match the local geology. It covers large areas of beach, traps litter and driftwood, is awkward and sometimes dangerous to clamber over, and can be shifted by big storms, so it needs maintenance. Gabions are steel wire mesh cages filled with rocks. They are cheap, around £110 per metre, easy to build and last 20 to 25 years, so they are good value. But they only suit sandy beaches (shingle would smash them), they are easily damaged, broken wire is dangerous to people and to seabirds' feet, and they look unattractive unless vegetation grows over them. In 2010 one scheme spent £30 000 repairing gabions damaged by storms."
          ],
          worked: {
            q: "A council wants to protect 200 metres of coast. Gabions cost about £110 per metre and a sea wall about £5000 per metre. How much would each option cost, and what is the difference?",
            steps: [
              "Gabions: 200 × £110 = £22 000.",
              "Sea wall: 200 × £5000 = £1 000 000.",
              "Difference: £1 000 000 − £22 000 = £978 000.",
              "Check the sense of it: the sea wall costs about 45 times as much, but it will last far longer and gives much better protection. Cost is only one side of the decision."
            ],
            answer: "Gabions £22 000; sea wall £1 000 000; the sea wall costs £978 000 more.",
            checks: [
              { expr: "200*GABION_PER_M", value: 22000, tol: 0 },
              { expr: "200*SEA_WALL_LOW", value: 1000000, tol: 0 },
              { expr: "200*SEA_WALL_LOW-200*GABION_PER_M", value: 978000, tol: 0 },
              { expr: "SEA_WALL_LOW/GABION_PER_M", value: 45, tol: 1 }
            ]
          },
          tip: "For every strategy learn one cost, one advantage, one disadvantage and one place. That is the kit for a four-mark comparison."
        },
        {
          heading: "Soft engineering",
          paragraphs: [
            "Soft engineering works with natural processes instead of fighting them. It is usually much cheaper than hard engineering, because natural materials are used, and it is usually more sustainable, with less impact on the environment: it can be kept going for a long time without harming the coast. Beach nourishment adds sand or shingle to a beach, usually dredged from the sea bed, to make it wider. A wider beach absorbs wave energy, protects the sea front from flooding, looks natural and attracts more tourists. It is cheaper than hard engineering overall, but it has high overheads: hiring a dredger costs around £300 000, and the new sand drifts away, so it has to be repeated. At Sandbanks, the nourished beach protects some very expensive properties.",
            "Beach reprofiling reshapes the beach using material already there. Destructive winter waves lower a beach; after the storms, bulldozers push the sand and shingle back up the beach to rebuild it as a buffer between land and sea. It keeps the beach looking fairly natural and makes the residents behind it feel safe, but a steep, high-crested beach can look unnatural and uninviting, and major reprofiling is expensive. At Pevensey, in East Sussex, beach nourishment and reprofiling together cost £30 million over 25 years, about £1.2 million a year.",
            "Dune regeneration, or dune stabilising, plants marram grass and fences off the dunes so the grass can take hold. Dunes protect the land behind them, and once established they are popular for walking and picnics. At Studland, dune regeneration has kept a habitat for rare Dartford warblers and nightjars and for six species of reptile, including lizards and adders. Small projects use volunteers and local grass, so costs are minimal. But the dunes must be checked twice a year and fertilised, fencing and signs to stop trampling are expensive, and keep-out signs can put tourists off."
          ],
          tip: "Sustainable means it can carry on for a long time without using up resources or damaging the environment. Say that in the exam, then give an example."
        },
        {
          heading: "Managed retreat",
          paragraphs: [
            "Managed retreat (also called coastal realignment) means deliberately allowing the sea to flood or erode an area of low-value land, instead of defending it. The old defences are removed or breached, and a new line of defence is set further inland. The flooded land becomes a natural buffer that absorbs wave energy and protects the coast behind it, and in time a wildlife habitat. Your case study is Medmerry, in West Sussex, where farmland and a caravan site were given up to the sea to create a new wildlife habitat and a natural buffer.",
            "Arguments for: it creates a buffer that protects the coastline; it is cheap, because replacing farmland and caravans costs little and it uses natural processes; it creates a wildlife habitat that can attract tourists in the future; and it is sustainable and environmentally friendly. Arguments against: the area can look unattractive at first; it risks properties and businesses if used near residential areas; it takes a long time to create protection, so it cannot be used everywhere; it can cause conflict between the local authority and residents; it causes an immediate loss of income to farmers and holiday businesses; and it litters the sea if not properly managed.",
            "So should we manage the coast or adapt to it? The honest answer is that it depends on where you are protecting. A town full of homes and businesses justifies expensive hard engineering; a stretch of farmland may not. Geographers monitor the coastline so that each decision is based on how fast it is really changing."
          ],
          tip: "A nine-mark discuss question needs both sides, a named example and a conclusion that says it depends on what is being protected."
        },
        {
          heading: "Case study: Lyme Regis",
          paragraphs: [
            "Lyme Regis is a small seaside town in Dorset on the Jurassic Coast. In class you used the textbook to describe its location and importance and to find out why it needed coastal management. The reasons were both natural (the physical processes of erosion and mass movement acting on the coast) and human (the homes, businesses and tourist economy of the town sitting right on the sea front). Both kinds of factor made coastal defences necessary.",
            "The town has been protected in phases. Phase 1, in the 1990s, combined hard engineering (a sea wall) with soft engineering (beach reprofiling). Phase 2 ran from 2005 to 2007, and Phase 4 from 2013 to 2015; Phase 3 was never undertaken. Each phase mixed hard and soft methods, and each had costs and benefits that you recorded in your table.",
            "Not everyone agreed. Some local residents argued against more defences, fearing that they would increase visitor numbers and so bring traffic congestion and litter and spoil the natural look of the coastline. Tourists, the local government, and scientists (geologists, archaeologists and geographers) each had their own reasons for wanting defences or not, and their own preferred solutions. When you evaluate the scheme, weigh its success in protecting the town against the conflict it caused."
          ],
          tip: "For Lyme Regis, learn the four phases and their dates, one hard and one soft method, and one interest group that disagreed."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is a soft engineering strategy?", options: ["Beach nourishment", "Sea wall", "Rock armour", "Gabions"], answer: 0, why: "Beach nourishment adds natural sand to the beach and works with natural processes. The other three are built structures: hard engineering.",
          feedback: [
            "",
            "A sea wall is a concrete structure built to resist the sea, which is the definition of hard engineering. Soft engineering works with natural processes, such as adding sand to a beach.",
            "Rock armour is boulders dumped to absorb wave energy: an artificial structure, so hard engineering. Beach nourishment is the soft option here.",
            "Gabions are wire cages filled with rock, a built structure and so hard engineering, even though they are cheap. Beach nourishment is the soft strategy."
          ] },
        { kind: "numeric", q: "Gabions cost about £110 per metre. How much would it cost to protect 50 metres of beach with gabions? Give your answer in pounds.", answer: 5500, tolerance: 0, units: "£", check: "50*GABION_PER_M", why: "50 × £110 = £5500. Cheap compared with £5000 for a single metre of sea wall.",
          misconceptions: [
            { answer: 550, says: "That is 50 × 11, so a zero has been lost somewhere. 50 × £110 = £5500.", check: "50*11" },
            { answer: 160, says: "You added 50 and 110. The cost is £110 for every metre, so multiply: 50 × £110 = £5500.", check: "50+110" },
            { answer: 250000, says: "That is 50 × £5000, the cost of 50 metres of sea wall. Gabions are £110 per metre, so 50 × £110 = £5500.", check: "50*SEA_WALL_LOW" }
          ] },
        { kind: "gap", q: "Managed retreat means allowing the sea to flood low-value land so that the coastline moves ___.", answer: "inland", options: ["inland", "out to sea", "nowhere"], why: "Retreat means moving back. The defences are set further inland and the sea is allowed in.",
          feedback: {
            "out to sea": "Moving the coast out to sea would mean reclaiming land, the opposite of retreat. Managed retreat lets the sea come in, so the coastline moves inland.",
            "nowhere": "Holding the line in place is what hard engineering does. Retreat means the coast is allowed to move back: inland."
          } }
      ],
      modules: [
        {
          title: "Hard engineering: which is which?",
          task: {
            kind: "match",
            q: "Match each hard engineering structure to its description.",
            pairs: [
              ["Sea wall", "A concrete or rock barrier with a curved face that reflects waves back out to sea"],
              ["Groynes", "Barriers built out across the beach to trap sand moving by longshore drift"],
              ["Rock armour", "Large boulders, often imported, piled up to absorb wave energy"],
              ["Gabions", "Steel wire mesh cages filled with rocks"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the one made of wire: cages of rock.",
                "Find the one that is loose rock without any cage.",
                "Of the two left, one is solid concrete and one is built out across the beach to catch sand.",
                "Check: the one that traps longshore drift must stick out across the beach."
              ],
              example: {
                q: "Match: revetment, breakwater. Choices: a structure built offshore so waves break before they reach the beach; a sloping wooden or concrete fence-like structure that absorbs wave energy.",
                steps: ["A breakwater breaks the waves offshore.", "A revetment is the sloping fence-like structure on the shore."],
                answer: "Revetment: sloping fence-like structure that absorbs wave energy. Breakwater: built offshore so waves break early."
              }
            },
            core: { hint: "Wire cages, loose boulders, a solid wall, and barriers across the beach. Which one deals with longshore drift?" },
            stretch: { extend: "Explain why a groyne protects one beach but can harm the beach further along the coast." }
          },
          explain: "Say, in one sentence, what all four hard engineering structures have in common.",
          why: "A sea wall reflects waves; groynes trap drifting sand to build the beach; rock armour absorbs wave energy; gabions are rock-filled cages. All are artificial structures that resist the sea."
        },
        {
          title: "Counting the cost",
          task: {
            kind: "numeric",
            q: "Rock armour costs about £2000 per metre (the middle of the usual range) and a sea wall about £5000 per metre. A town needs 300 metres of protection. How much more, in pounds, would the sea wall cost than the rock armour?",
            answer: 900000, tolerance: 0, units: "£", check: "300*SEA_WALL_LOW-300*ROCK_ARMOUR_MID",
            why: "Sea wall 300 × £5000 = £1 500 000; rock armour 300 × £2000 = £600 000; the difference is £900 000. Or find the difference per metre first: £3000 × 300 = £900 000.",
            misconceptions: [
              { answer: 1500000, says: "That is the total cost of the sea wall. The question asks how much MORE it costs than the rock armour, so subtract the rock armour cost: £1 500 000 − £600 000 = £900 000.", check: "300*SEA_WALL_LOW" },
              { answer: 600000, says: "That is the total cost of the rock armour. Subtract it from the sea wall cost: £1 500 000 − £600 000 = £900 000.", check: "300*ROCK_ARMOUR_MID" },
              { answer: 3000, says: "That is the difference for one metre. The town needs 300 metres, so multiply: £3000 × 300 = £900 000.", check: "SEA_WALL_LOW-ROCK_ARMOUR_MID" }
            ]
          },
          contexts: [
            { label: "Seaside town", q: "A seaside town wants to protect 300 metres of sea front. Rock armour costs about £2000 per metre and a sea wall about £5000 per metre. How much more, in pounds, would the sea wall cost?", check: "300*(SEA_WALL_LOW-ROCK_ARMOUR_MID)" },
            { label: "Caravan park", q: "A caravan park sits behind 300 metres of eroding cliff. Rock armour would cost about £2000 per metre and a sea wall about £5000 per metre. How much more, in pounds, is the sea wall?", check: "300*(SEA_WALL_LOW-ROCK_ARMOUR_MID)" },
            { label: "Coastal road", q: "A coastal road is threatened along a 300 metre stretch. Engineers price rock armour at about £2000 per metre and a sea wall at about £5000 per metre. How much more, in pounds, would the sea wall cost?", check: "300*(SEA_WALL_LOW-ROCK_ARMOUR_MID)" }
          ],
          levels: {
            support: {
              steps: [
                "Work out the sea wall: 300 × £5000.",
                "Work out the rock armour: 300 × £2000.",
                "Subtract the smaller from the larger.",
                "Check with a shortcut: the difference per metre is £3000, and 300 × £3000 should give the same answer."
              ],
              example: {
                q: "Gabions cost about £110 per metre and rock armour about £2000 per metre. For 100 metres, how much more does the rock armour cost?",
                steps: ["Rock armour: 100 × £2000 = £200 000.", "Gabions: 100 × £110 = £11 000.", "Difference: £200 000 − £11 000 = £189 000."],
                answer: "£189 000",
                checks: [{ expr: "100*ROCK_ARMOUR_MID-100*GABION_PER_M", value: 189000, tol: 0 }]
              }
            },
            core: { hint: "Find the cost of each option for 300 metres, then subtract. Or subtract per metre first, then multiply by 300." },
            stretch: { extend: "The sea wall may last far longer than the rock armour. Explain why the cheaper option is not always the better value over 50 years." }
          },
          explain: "Say, in one sentence, why finding the difference per metre first gives the same answer.",
          why: "300 × £5000 = £1 500 000 and 300 × £2000 = £600 000, so the sea wall costs £900 000 more. The per-metre difference of £3000 times 300 metres gives the same £900 000."
        },
        {
          title: "Is managed retreat the answer?",
          task: {
            kind: "written",
            q: "Managed retreat is the most sustainable way to manage a coastline. To what extent do you agree with this statement? Use a named example in your answer. (9 marks)",
            marks: 9,
            criteria: [
              "Explains what managed retreat is and gives a named UK example (Medmerry, West Sussex)",
              "Gives at least two arguments for managed retreat, linked to sustainability (cost, natural processes, habitat)",
              "Gives at least two arguments against it (loss of land and income, conflict, time to work, unsuitable near homes)",
              "Compares it with hard or soft engineering alternatives, with a cost or example",
              "Reaches a clear, justified conclusion that says how far you agree and under what conditions"
            ],
            model: "Managed retreat means deliberately letting the sea flood low-value land, as at Medmerry in West Sussex, where farmland and a caravan site were given up to create a natural buffer and a new wildlife habitat. It is highly sustainable: it is cheap because it uses natural processes rather than concrete, it does not need constant repair like a sea wall at £5000 or more per metre, and it created a wildlife habitat that may attract visitors. However, it is not sustainable for the people who lose out. Farmers and holiday businesses lose income straight away, the land looks unattractive at first, and the new buffer takes years to give protection, so it cannot be used where homes and businesses are at immediate risk; that is why Lyme Regis chose sea walls and beach reprofiling instead. I agree to a large extent that managed retreat is the most sustainable option for low-value land, but the most sustainable choice depends on what is being protected: for a town, well-maintained hard engineering combined with soft methods is more sustainable than letting the sea in."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1: define managed retreat and name Medmerry. Say why it is used.",
                "Paragraph 2: arguments for. Pick two from the lesson and link each to sustainability.",
                "Paragraph 3: arguments against. Pick two and say who loses.",
                "Paragraph 4: compare briefly with another strategy (a sea wall, with its cost).",
                "Conclusion: say how far you agree, and finish with: it depends on where you are protecting."
              ],
              example: {
                q: "In three sentences, argue for and against building a sea wall to protect a village, and reach a conclusion.",
                steps: ["For: it protects homes quickly and lasts for years.", "Against: it is very expensive (about £5000 per metre) and looks ugly.", "Conclude with a condition."],
                answer: "A sea wall gives the village quick, long-lasting protection and makes people feel safe. But at around £5000 per metre it is very expensive and it spoils the look of the beach. It is worth it only where there are enough homes and businesses to justify the cost."
              }
            },
            core: { hint: "Both sides, a named example, a comparison, and a conclusion that says it depends on what is being protected." },
            stretch: { extend: "Add a paragraph on who should decide: residents, the local authority or scientists who monitor the coast. Justify your view." }
          },
          explain: "Say, in one sentence, what makes a coastal management strategy sustainable.",
          why: "Level 3 answers in a discuss question explain both sides with specific evidence, compare with alternatives, and reach a judgement with conditions. Medmerry shows the case for; Lyme Regis shows where hard engineering was chosen instead."
        }
      ]
    },

    /* ───────────── 5 · a river's journey ───────────── */
    {
      key: "river-journey", n: 5, title: "A river's journey: processes and landforms",
      lead: "The drainage basin, how a river and its valley change from source to mouth, the processes that shape them, and the landforms of the upper, middle and lower course, with the River Tees as your example.",
      covers: [12, 13, 14, 15, 16],
      pretext: {
        words: [
          { word: "drainage basin", means: "the area of land drained by a river and its tributaries", sentence: "Rain falling anywhere in the drainage basin ends up in the river." },
          { word: "tributary", means: "a smaller river that joins a larger one", sentence: "Each tributary adds more water to the main river." },
          { word: "confluence", means: "the point where two rivers meet", sentence: "The town was built at the confluence of two rivers." },
          { word: "vertical erosion", means: "a river cutting downwards into its bed", sentence: "Vertical erosion in the upper course makes the valley deep and steep." },
          { word: "lateral erosion", means: "a river cutting sideways into its banks", sentence: "Lateral erosion widens the valley in the middle course." },
          { word: "meander", means: "a bend in a river", sentence: "The river swings from side to side in a series of meanders." }
        ],
        passage: [
          "A river collects water from an area of land called its drainage basin.",
          "The river begins at its source, often high in the hills.",
          "Smaller rivers called tributaries join it at a confluence.",
          "It ends at its mouth, where it meets the sea or a lake.",
          "In the upper course the river cuts downwards and makes a steep V-shaped valley.",
          "Here you find waterfalls, gorges and interlocking spurs.",
          "In the middle course the river erodes sideways and begins to meander.",
          "A meander is a bend in the river.",
          "Over time a meander can be cut off to leave an ox-bow lake.",
          "In the lower course the river is wide and deep and flows across a flat floodplain.",
          "Floods leave layers of silt that build up levees along the banks.",
          "The River Tees flows from the North Pennines to the North Sea.",
          "You studied its landforms from source to mouth."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "مساحة الأرض التي يصرّف ماءها نهر وروافده (drainage basin)",
            "نهر أصغر يلتحق بنهر أكبر (tributary)",
            "النقطة التي يلتقي فيها نهران (confluence)",
            "نهر يحفر إلى الأسفل في قاعه (vertical erosion)",
            "نهر يحفر جانبيًا في ضفافه (lateral erosion)",
            "انحناء في النهر (meander)"
          ],
          "passage": [
            "يجمع النهر الماء من مساحة من الأرض تُسمّى حوض التصريف (drainage basin).",
            "يبدأ النهر من منبعه (source)، وغالبًا ما يكون عاليًا في التلال.",
            "تلتحق به أنهار أصغر تُسمّى الروافد (tributaries) عند ملتقى (confluence).",
            "وينتهي عند مصبّه (mouth)، حيث يلتقي بالبحر أو ببحيرة.",
            "في المجرى الأعلى يحفر النهر إلى الأسفل فيصنع واديًا شديد الانحدار على شكل حرف V.",
            "هنا تجد الشلّالات والخوانق (gorges) والنتوءات المتشابكة (interlocking spurs).",
            "في المجرى الأوسط يُؤكّل النهر جانبيًا ويبدأ في التعرّج.",
            "المنعطف (meander) انحناء في النهر.",
            "ومع الوقت يمكن أن يُقطع المنعطف فيترك بحيرة هلالية (ox-bow lake).",
            "في المجرى الأدنى يكون النهر عريضًا وعميقًا ويجري عبر سهل فيضي منبسط.",
            "تترك الفيضانات طبقات من الطمي تبني حواجز طبيعية (levees) على طول الضفاف.",
            "يجري نهر التيز (River Tees) من شمال البنينز (North Pennines) إلى بحر الشمال.",
            "وقد درست أشكاله الأرضية من المنبع إلى المصبّ."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "obszar lądu odwadniany przez rzekę i jej dopływy (drainage basin)",
            "mniejsza rzeka, która wpada do większej (tributary)",
            "miejsce, gdzie dwie rzeki się łączą (confluence)",
            "rzeka wcinająca się w dół, w swoje dno (vertical erosion)",
            "rzeka wcinająca się na boki, w swoje brzegi (lateral erosion)",
            "zakręt rzeki (meander)"
          ],
          "passage": [
            "Rzeka zbiera wodę z obszaru lądu zwanego jej dorzeczem (drainage basin).",
            "Rzeka zaczyna się u źródła (source), często wysoko na wzgórzach.",
            "Mniejsze rzeki, zwane dopływami (tributaries), łączą się z nią w miejscu zbiegu (confluence).",
            "Kończy się przy ujściu (mouth), gdzie spotyka się z morzem lub jeziorem.",
            "W górnym biegu rzeka wcina się w dół i tworzy stromą dolinę V-kształtną (V-shaped valley).",
            "Tu znajdziesz wodospady, wąwozy i zazębiające się ostrogi (interlocking spurs).",
            "W środkowym biegu rzeka eroduje na boki i zaczyna meandrować.",
            "Meander to zakręt rzeki.",
            "Z czasem meander może zostać odcięty i zostawić starorzecze (ox-bow lake).",
            "W dolnym biegu rzeka jest szeroka i głęboka i płynie przez płaską równinę zalewową (floodplain).",
            "Powodzie zostawiają warstwy mułu, które budują wały (levees) wzdłuż brzegów.",
            "Rzeka Tees płynie z gór North Pennines do Morza Północnego.",
            "Poznawaliście jej formy terenu od źródła do ujścia."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a área de terra drenada por um rio e pelos seus afluentes (drainage basin, bacia hidrográfica)",
            "um rio mais pequeno/menor que se junta a um maior (tributary, afluente)",
            "o ponto onde dois rios se encontram (confluence, confluência)",
            "um rio a cortar/cortando para baixo no seu leito (vertical erosion, erosão vertical)",
            "um rio a cortar/cortando para os lados nas suas margens (lateral erosion, erosão lateral)",
            "uma curva num rio (meander, meandro)"
          ],
          "passage": [
            "Um rio recolhe água de uma área de terra chamada bacia hidrográfica (drainage basin).",
            "O rio começa na sua nascente (source), muitas vezes no alto das colinas.",
            "Rios mais pequenos chamados afluentes (tributaries) juntam-se a ele numa confluência (confluence).",
            "Termina na sua foz (mouth), onde encontra o mar ou um lago.",
            "No curso superior o rio corta para baixo e faz um vale em V íngreme.",
            "Aqui encontram-se quedas de água/cachoeiras, gargantas e esporões (interlocking spurs).",
            "No curso médio o rio erode para os lados e começa a serpentear.",
            "Um meandro (meander) é uma curva no rio.",
            "Com o tempo um meandro pode ser cortado e deixar um lago em ferradura (ox-bow lake).",
            "No curso inferior o rio é largo e fundo e corre por uma planície de inundação plana.",
            "As cheias deixam camadas de lodo que vão formando diques naturais (levees) ao longo das margens.",
            "O rio Tees corre dos North Pennines até ao Mar do Norte.",
            "Você estudou as suas formas de relevo da nascente até à foz."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "aagga dhulka oo webi iyo tributaries-kiisa biyo ka qaadaan (drainage basin)",
            "webi ka yar oo ku biira webi ka weyn (tributary)",
            "barta laba webi ku kulmaan (confluence)",
            "webi hoos u goynaya sariirtiisa (vertical erosion)",
            "webi dhinac u goynaya darafkiisa (lateral erosion)",
            "leexo webi ku jirta (meander)"
          ],
          "passage": [
            "Webi biyo wuxuu ka ururiyaa aag dhul oo la yiraahdo drainage basin-kiisa.",
            "Webigu wuxuu ka bilaabmaa ishiisa (source), inta badan buuraha meel sare.",
            "Webiyo ka yaryar oo la yiraahdo tributaries waxay ku biiraan confluence.",
            "Wuxuu ku dhammaadaa afkiisa (mouth), halkaas oo uu badda ama haro la kulmo.",
            "Qaybta sare webigu hoos ayuu u gooyaa oo wuxuu samaystaa V-shaped valley dheer.",
            "Halkan waxaad ka heli kartaa biyo-dhacyo, gorges iyo interlocking spurs.",
            "Qaybta dhexe webigu dhinac ayuu u nabaad-guuriyaa oo wuxuu bilaabaa inuu leexleexdo (meander).",
            "Meander waa leexo webiga ku jirta.",
            "Waqti ka dib meander waa la goyn karaa oo wuxuu ka tagaa ox-bow lake.",
            "Qaybta hoose webigu wuu ballaaran yahay oo qoto dheer yahay, wuxuuna ku socdaa floodplain siman.",
            "Fatahaaduhu waxay ka tagaan lakabyo dhoobo (silt) oo levees ka dhisa darafka.",
            "Webiga Tees wuxuu ka socdaa North Pennines ilaa North Sea.",
            "Landforms-kiisa waxaad ka baratay isha ilaa afka."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "ділянка землі, з якої збирає воду річка та її притоки (drainage basin)",
            "менша річка, що впадає в більшу (tributary)",
            "точка, де зустрічаються дві річки (confluence)",
            "річка врізається вниз у своє дно (vertical erosion)",
            "річка врізається вбік у свої береги (lateral erosion)",
            "вигин річки (meander)"
          ],
          "passage": [
            "Річка збирає воду з ділянки землі, яка називається її річковим басейном (drainage basin).",
            "Річка починається біля свого витоку (source), часто високо в горах.",
            "Менші річки, які називаються притоками (tributaries), впадають у неї біля злиття (confluence).",
            "Вона закінчується біля свого гирла (mouth), де зустрічається з морем або озером.",
            "У верхній течії річка врізається вниз і утворює круту V-подібну долину.",
            "Тут ви знайдете водоспади, ущелини та interlocking spurs.",
            "У середній течії річка розмиває береги вбік і починає утворювати меандри.",
            "Меандр (meander) — це вигин річки.",
            "З часом меандр може відрізатися і залишити озеро-старицю (ox-bow lake).",
            "У нижній течії річка широка й глибока і тече по рівній заплаві (floodplain).",
            "Повені залишають шари мулу, які нарощують природні вали (levees) уздовж берегів.",
            "Річка Тіс (River Tees) тече від Північних Пеннін до Північного моря.",
            "Ви вивчали її форми рельєфу від витоку до гирла."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "زمین کا وہ علاقہ جس کا پانی ایک دریا اور اس کے معاون دریا بہا کر لے جاتے ہیں (drainage basin)",
            "ایک چھوٹا دریا جو بڑے دریا میں مل جاتا ہے (tributary)",
            "وہ جگہ جہاں دو دریا آپس میں ملتے ہیں (confluence)",
            "دریا کا اپنے تلے میں نیچے کی طرف کاٹنا (vertical erosion)",
            "دریا کا اپنے کناروں میں پہلو کی طرف کاٹنا (lateral erosion)",
            "دریا کا ایک موڑ (meander)"
          ],
          "passage": [
            "دریا زمین کے ایک علاقے سے پانی جمع کرتا ہے جسے اس کا drainage basin کہتے ہیں۔",
            "دریا اپنے منبع (source) سے شروع ہوتا ہے، جو اکثر پہاڑیوں میں اونچائی پر ہوتا ہے۔",
            "چھوٹے دریا، جنھیں tributaries کہتے ہیں، ایک confluence پر اس میں مل جاتے ہیں۔",
            "یہ اپنے دہانے (mouth) پر ختم ہوتا ہے، جہاں یہ سمندر یا جھیل سے ملتا ہے۔",
            "بالائی حصے میں دریا نیچے کی طرف کاٹتا ہے اور ایک ڈھلوان V-shaped valley بناتا ہے۔",
            "یہاں آپ کو آبشاریں، gorges اور interlocking spurs ملتے ہیں۔",
            "درمیانی حصے میں دریا پہلو کی طرف گھسائی کرتا ہے اور موڑ کھانے لگتا ہے۔",
            "meander دریا کا ایک موڑ ہے۔",
            "وقت کے ساتھ ایک meander کٹ کر الگ ہو سکتا ہے اور ایک ox-bow lake چھوڑ جاتا ہے۔",
            "زیریں حصے میں دریا چوڑا اور گہرا ہوتا ہے اور ایک ہموار floodplain پر بہتا ہے۔",
            "سیلاب گاد (silt) کی تہیں چھوڑ جاتے ہیں جو کناروں کے ساتھ levees بنا دیتی ہیں۔",
            "دریائے ٹیز (River Tees) شمالی پینائنز (North Pennines) سے بحیرۂ شمال (North Sea) تک بہتا ہے۔",
            "آپ نے اس کے landforms کا منبع سے دہانے تک مطالعہ کیا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "The drainage basin and the three courses",
          paragraphs: [
            "A drainage basin is the area of land drained by a river and its tributaries. The river starts at its source, usually in high ground. Tributaries (smaller rivers) join it at confluences. The edge of the basin, the high ground that separates it from the next basin, is the watershed. The river ends at its mouth, where it meets the sea or a lake. Rain falling anywhere inside the watershed will eventually reach the river.",
            "A river is split into three stages, or courses. The long profile is a side view from source to mouth: steep in the upper course, gentler in the middle course and almost flat in the lower course. The cross profile is a slice across the valley. In the upper course it is a narrow, steep-sided V shape with a narrow, shallow channel. In the middle course the valley is wider with gentler sides and the channel is wider and deeper. In the lower course the valley is very wide and flat, with a wide, deep channel winding across a floodplain.",
            "Velocity (the speed of the water) and discharge (the amount of water) both increase along the course. That surprises people, because an upland stream looks fast. But in the upper course the channel is shallow and narrow and full of boulders, so a lot of the water is in contact with the bed and banks and friction slows it down. In the lower course the channel is wide and deep and smooth, there is less friction, and all the tributaries have added their discharge, so the river flows faster and carries more water."
          ],
          tip: "Learn the six drainage-basin words as a set: source, tributary, confluence, watershed, mouth, drainage basin. Draw and label them from memory."
        },
        {
          heading: "River processes",
          paragraphs: [
            "Rivers erode in the same four ways as the sea. Hydraulic action is the force of the moving water forcing air into cracks in the banks and bed, weakening them. Abrasion is rocks carried by the river scraping and scouring the bed and banks like sandpaper. Attrition is rocks in the load smashing together and breaking into smaller, smoother, rounder pieces. Solution is weak acids in the river water dissolving minerals from rocks such as chalk and limestone. Erosion can be vertical (downwards) or lateral (sideways). Vertical erosion happens mostly in the upper course, where it cuts V-shaped valleys and waterfalls; lateral erosion happens in the middle and lower courses, where it widens the valley and forms meanders and ox-bow lakes.",
            "Rivers transport their load in four ways too. Traction rolls large stones and boulders along the bed, mainly when discharge and energy are high. Saltation bounces small pebbles and stones along the bed; as each one lands it dislodges others. Suspension carries fine sand and silt within the flow, which is what gives a river its brown colour. Solution carries dissolved minerals. A river needs energy to carry material: with high energy it moves boulders; with low energy only small particles move, if any.",
            "Deposition happens when the river no longer has enough energy to carry its load. That happens when the gradient reduces, for example where the river meets the sea or a lake; when discharge falls in a dry spell, so there is less water to carry the load; where the channel is shallow and friction is high, such as the inside of a meander bend; and when the river floods and spreads across its floodplain, so the water slows down. The largest material is dropped first, and smaller particles are carried further downstream."
          ],
          tip: "Upper course: vertical erosion and landforms of erosion. Middle course: lateral erosion and deposition together. Lower course: mostly deposition."
        },
        {
          heading: "Upper course landforms",
          paragraphs: [
            "The upper course landforms are all made by erosion: V-shaped valleys, interlocking spurs, rapids, waterfalls and gorges. A V-shaped valley forms in four steps. A small stream naturally follows small dips in the landscape. As it flows steeply downhill, its bedload scrapes away the bottom of the channel: vertical erosion. This deepens the valley and leaves the sides steep and exposed. Over time, weathering and gravity wear away the steep sides and feed material into the stream, which the stream uses to cut the valley deeper still.",
            "In the upper course the channel often winds around ridges of harder rock called spurs. The river does not have enough energy to erode through them, so it swings round each one, and the spurs from either side of the valley appear to interlock when you look down the valley. These are interlocking spurs.",
            "A waterfall forms where a band of hard rock lies over softer rock. The river erodes the soft rock faster, by hydraulic action and abrasion, undercutting the hard rock and leaving it as an overhang. Water falling over the step swirls at the bottom and erodes a deep plunge pool. Eventually the overhang cannot support its own weight and collapses into the plunge pool, where the fallen rock is used as a tool for more abrasion. The waterfall has now moved back upstream a little. Repeated over thousands of years, this retreat leaves a steep-sided gorge downstream of the waterfall."
          ],
          worked: {
            q: "Explain how a waterfall forms. (4 marks)",
            steps: [
              "Set the scene: a band of hard rock lies over softer rock.",
              "Name the processes and what they do: hydraulic action and abrasion erode the soft rock faster, undercutting the hard rock to leave an overhang, and a plunge pool is eroded at the base.",
              "Give the collapse: the unsupported overhang collapses into the plunge pool.",
              "Finish with the result: the waterfall retreats upstream, and over time a gorge is left downstream."
            ],
            answer: "Hard rock lies over soft rock. Hydraulic action and abrasion erode the soft rock faster, undercutting the hard rock and forming a plunge pool at the base. The unsupported hard rock overhang collapses. The waterfall moves back upstream and, over time, leaves a gorge."
          },
          tip: "Use all the key words: hard rock, soft rock, undercutting, overhang, plunge pool, collapses, moves back, gorge. Each is a mark-earning step."
        },
        {
          heading: "Middle and lower course landforms, and the River Tees",
          paragraphs: [
            "In the middle course the river begins to meander. Where the channel bends even slightly, the fastest current swings to the outside of the bend, where the water is deeper. Here lateral erosion undercuts the bank to form a steep river cliff. On the inside of the bend the current is slower and the water shallower, so sand and shingle are deposited to form a gentle slip-off slope. Because erosion and deposition carry on at the same time, the meander grows more and more exaggerated, and the neck of land between two bends gets narrower. In a flood, the river cuts straight through the neck, taking the shortest route. Deposition seals off the old bend, which is left as an ox-bow lake. The lake slowly dries out in times of drought.",
            "In the lower course the landforms are made by deposition. The floodplain is the wide area of flat land on either side of the river. Each time the river floods it deposits silt, and the layers build up into a thick layer of fertile alluvium that makes floodplains excellent farmland. Levees are raised river banks built up by many floods: when the river overflows its banks the velocity drops and sediment is deposited, with the coarser sands dropped closest to the channel and the finer silts carried further. Over the years the banks are raised above the floodplain. Where the river meets the sea, its mouth widens into an estuary, where river water mixes with the tide and fine sediment is deposited as mudflats.",
            "Your named UK river is the River Tees, in the north-east of England. It rises in the North Pennines and flows east to its mouth in the North Sea, with the North York Moors to the south of its lower valley. Using the OS map and video clips, you traced its downstream changes: landforms of erosion in its upper course, meanders in its middle course, and the wide floodplain and estuary of its lower course. When an exam question asks for a named example, the Tees is yours."
          ],
          tip: "Meander words: fastest current, outside, river cliff, erosion; slowest current, inside, slip-off slope, deposition. Say which side you mean every time."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is the name for the point where a tributary joins the main river?", options: ["Confluence", "Source", "Watershed", "Mouth"], answer: 0, why: "A confluence is where two rivers meet. Con- means together.",
          feedback: [
            "",
            "The source is where a river begins, usually in high ground; no joining happens there. Where a tributary joins the main river is a confluence.",
            "The watershed is the high ground around the edge of a drainage basin that separates it from the next one. Where two rivers join is a confluence.",
            "The mouth is where the river ends, meeting the sea or a lake. Where a tributary joins the river is a confluence."
          ] },
        { kind: "gap", q: "In the upper course a river mainly erodes ___, cutting down into its bed.", answer: "vertically", options: ["vertically", "laterally", "upstream"], why: "Vertical erosion, cutting downwards, deepens the valley into a V shape. Lateral erosion comes later, in the middle and lower courses.",
          feedback: {
            "laterally": "Lateral means sideways, into the banks. That is the main erosion of the middle and lower courses, where it makes meanders. In the upper course the river cuts downwards: vertically.",
            "upstream": "A river cannot erode upstream in general; the water is flowing the other way (a waterfall retreats upstream, but that is one landform). In the upper course the river cuts down into its bed: vertically."
          } },
        { kind: "mcq", q: "On the outside of a meander bend, the water...", options: ["flows fastest and erodes the bank to form a river cliff", "flows slowest and deposits sand to form a slip-off slope", "stops moving and dries out", "flows fastest and deposits a levee"], answer: 0, why: "The fastest current swings to the outside of the bend, where lateral erosion undercuts the bank into a river cliff.",
          feedback: [
            "",
            "Slow water and a slip-off slope belong to the inside of the bend. On the outside the current is fastest and it erodes a river cliff.",
            "Water never stops moving in a flowing river; the part that dries out is an ox-bow lake after it has been cut off. On the outside of the bend the water is fastest and erodes.",
            "Fast water erodes, it does not deposit, and levees form along straight banks during floods, not on meander bends. The outside of the bend is eroded into a river cliff."
          ] }
      ],
      modules: [
        {
          title: "How a V-shaped valley forms",
          task: {
            kind: "order",
            q: "Put the stages in the formation of a V-shaped valley in the correct order.",
            items: [
              "A small stream naturally follows small depressions in the landscape",
              "As the stream flows steeply downhill, its bedload scrapes away the bottom of the channel (vertical erosion)",
              "This vertical erosion deepens the valley, making the sides steeper and exposed",
              "Over time, weathering and gravity wear away the steep valley sides, feeding material into the stream, which it uses to cut the valley deeper"
            ]
          },
          contexts: [
            { label: "Moorland stream", q: "A stream runs off open moorland in the Pennines. Put the stages that will carve its valley into a V shape in the correct order." },
            { label: "The upper Tees", q: "In its upper course in the North Pennines, the River Tees flows through a V-shaped valley. Put the stages that formed it in the correct order." },
            { label: "Mountain stream", q: "A mountain stream in the hills is cutting a V-shaped valley. Put the stages in the correct order." }
          ],
          levels: {
            support: {
              steps: [
                "Start before any erosion: where does a small stream choose to flow?",
                "Then the stream cuts down. What is the word for cutting downwards?",
                "Cutting down makes the sides steep. What happens to steep, exposed sides?",
                "The material from the sides goes into the stream and helps it cut deeper: that is the last stage."
              ],
              example: {
                q: "Put these stages of a pothole forming in a road in order: traffic breaks up the cracked surface; water seeps into a small crack; the water freezes and widens the crack; a hole is left that gets bigger with every car.",
                steps: ["Water gets in first.", "Freezing widens the crack.", "Traffic breaks the surface, then the hole grows."],
                answer: "Water seeps into a crack; freezing widens it; traffic breaks up the surface; the hole gets bigger."
              }
            },
            core: { hint: "Stream first, then cutting down, then steep sides, then the sides wearing away into the stream." },
            stretch: { extend: "Explain why the valley is V-shaped rather than a narrow slot with vertical sides. What part do weathering and mass movement play?" }
          },
          explain: "Say, in one sentence, why the valley gets deeper faster once the sides start to wear away.",
          why: "The stream follows a dip; vertical erosion by the bedload deepens the channel; the sides become steep and exposed; weathering and gravity wear the sides into the stream, which uses the material to cut deeper. The result is a V."
        },
        {
          title: "From meander to ox-bow lake",
          task: {
            kind: "order",
            q: "Put the stages in the formation of an ox-bow lake in the correct order.",
            items: [
              "At a slight bend, water flows faster on the outside (erosion) and slower on the inside (deposition)",
              "Continued erosion and deposition make the meander more and more exaggerated, so the neck narrows",
              "In a flood, the river cuts through the neck, taking the shortest route, and deposition seals off the old meander",
              "The old meander is cut off completely: the river has a new course and an ox-bow lake is left, which dries out in drought"
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with a river that has only a slight bend. Which side is fast and which is slow?",
                "Fast water erodes and slow water deposits, so the bend grows. What happens to the land between two bends?",
                "Something dramatic is needed to cut through the neck: a flood.",
                "Finish with what is left behind once the river takes its new course."
              ],
              example: {
                q: "Put these stages of a spit forming in order: the coastline changes direction; longshore drift carries sediment along the coast; the end of the spit is curved by the wind; sediment is deposited in a line out into calmer water.",
                steps: ["Drift moves sediment first.", "The coast turns, but the drift carries on.", "Deposition builds the ridge; the wind curves its end."],
                answer: "Longshore drift carries sediment; the coastline changes direction; sediment is deposited out into calmer water; the end is curved by the wind."
              }
            },
            core: { hint: "Slight bend, exaggerated bend with a narrow neck, flood cuts through, lake left behind." },
            stretch: { extend: "Explain why the ox-bow lake is sealed off by deposition rather than staying connected to the new channel." }
          },
          explain: "Say, in one sentence, why the neck of a meander gets narrower over time.",
          why: "Fast water on the outside erodes and slow water on the inside deposits, so the bend grows and the neck narrows; a flood cuts through; deposition seals the old bend as an ox-bow lake."
        },
        {
          title: "Parts of a drainage basin",
          task: {
            kind: "match",
            q: "Match each drainage-basin term to its meaning.",
            pairs: [
              ["Source", "Where the river begins, usually in high ground"],
              ["Tributary", "A smaller river that joins the main river"],
              ["Confluence", "The point where two rivers meet"],
              ["Watershed", "The high ground that forms the edge of the drainage basin"],
              ["Mouth", "Where the river ends, meeting the sea or a lake"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start and finish first: the source is the start, the mouth is the end.",
                "A tributary is a river; a confluence is a place. Which description is a river and which is a place where rivers meet?",
                "The one left is the boundary: high ground around the edge."
              ],
              example: {
                q: "Match: estuary, floodplain. Choices: the flat land beside a river that is covered when it floods; the wide tidal mouth of a river where it meets the sea.",
                steps: ["An estuary is at the mouth, and tidal.", "A floodplain is the flat land that floods."],
                answer: "Estuary: the wide tidal mouth of a river. Floodplain: the flat land beside a river that floods."
              }
            },
            core: { hint: "Two words are places on the river (start, end), one is a joining point, one is a smaller river, one is the boundary." },
            stretch: { extend: "Explain why rain falling just outside the watershed never reaches this river." }
          },
          explain: "Say, in one sentence, the difference between a tributary and a confluence.",
          why: "Source is the start; tributaries join at confluences; the watershed is the high boundary; the mouth is the end."
        }
      ]
    },

    /* ───────────── 6 · flooding and flood management ───────────── */
    {
      key: "flooding", n: 6, title: "Flooding, hydrographs and managing the river",
      lead: "Why rivers flood, how a hydrograph shows a river's response to a storm, which drainage basins flood fastest, and the hard and soft ways of managing floods, with Banbury as your case study.",
      covers: [17, 18, 19, 20],
      pretext: {
        words: [
          { word: "discharge", means: "the amount of water passing a point on a river each second", sentence: "After the storm the river's discharge doubled." },
          { word: "hydrograph", means: "a graph showing how a river's discharge changes after rain", sentence: "The hydrograph showed a sharp peak six hours after the storm." },
          { word: "lag time", means: "the time between the heaviest rain and the highest discharge", sentence: "A short lag time means the river rises quickly." },
          { word: "peak discharge", means: "the highest discharge the river reaches after rain", sentence: "Peak discharge was far above the level of the banks." },
          { word: "floodplain zoning", means: "deciding what may be built on land that could flood", sentence: "Floodplain zoning keeps houses away from the riverside." },
          { word: "afforestation", means: "planting trees", sentence: "Afforestation in the upper basin slows water reaching the river." }
        ],
        passage: [
          "A river floods when more water enters it than its channel can hold.",
          "Heavy rain, steep slopes and impermeable rock all make floods more likely.",
          "Melting ice and snow can add to the water too.",
          "People make floods worse by building towns and cutting down trees.",
          "Hard surfaces and drains send rain into the river quickly.",
          "A hydrograph is a graph showing how a river responds to a storm.",
          "Discharge is the amount of water passing a point, measured in cumecs.",
          "Lag time is the gap between the heaviest rain and the highest discharge.",
          "A flashy hydrograph has a short lag time and a high peak.",
          "Floods can be managed with hard engineering, such as dams and embankments.",
          "Soft engineering includes planting trees and flood warnings.",
          "Banbury is your case study of flood management in the UK."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "كمّية الماء التي تمرّ بنقطة على النهر في كلّ ثانية (discharge)",
            "رسم بياني يُظهر كيف يتغيّر تصريف النهر بعد المطر (hydrograph)",
            "الوقت بين أشدّ المطر وأعلى تصريف (lag time)",
            "أعلى تصريف يصل إليه النهر بعد المطر (peak discharge)",
            "تحديد ما يجوز بناؤه على أرض قد تغمرها المياه (floodplain zoning)",
            "زراعة الأشجار (afforestation)"
          ],
          "passage": [
            "يفيض النهر عندما يدخله ماء أكثر ممّا يستطيع مجراه أن يحمل.",
            "المطر الشديد والمنحدرات الحادّة والصخور غير المنفذة كلّها تجعل الفيضان أكثر احتمالًا.",
            "ذوبان الجليد والثلج يمكن أن يزيد الماء أيضًا.",
            "يزيد الناس الفيضانات سوءًا ببناء المدن وقطع الأشجار.",
            "الأسطح الصلبة والمصارف ترسل المطر إلى النهر بسرعة.",
            "الهيدروغراف (hydrograph) رسم بياني يُظهر كيف يستجيب النهر للعاصفة.",
            "التصريف (discharge) هو كمّية الماء التي تمرّ بنقطة ما، ويُقاس بالمتر المكعّب في الثانية (cumecs).",
            "زمن التأخّر (lag time) هو الفجوة بين أشدّ المطر وأعلى تصريف.",
            "الهيدروغراف الحادّ (flashy) له زمن تأخّر قصير وذروة عالية.",
            "يمكن إدارة الفيضانات بالهندسة الصلبة، مثل السدود والسدود الترابية (embankments).",
            "تشمل الهندسة الليّنة زراعة الأشجار وتحذيرات الفيضان.",
            "بانبري (Banbury) هي دراسة الحالة عندك عن إدارة الفيضانات في المملكة المتّحدة."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "ilość wody przepływającej przez dany punkt rzeki w każdej sekundzie (discharge)",
            "wykres pokazujący, jak zmienia się przepływ rzeki po deszczu (hydrograph)",
            "czas między najsilniejszym deszczem a najwyższym przepływem (lag time)",
            "najwyższy przepływ, jaki rzeka osiąga po deszczu (peak discharge)",
            "decydowanie, co można budować na terenie, który może zostać zalany (floodplain zoning)",
            "sadzenie drzew (afforestation)"
          ],
          "passage": [
            "Rzeka wylewa, kiedy wpływa do niej więcej wody, niż mieści jej koryto.",
            "Ulewny deszcz, strome zbocza i nieprzepuszczalna (impermeable) skała sprawiają, że powódź jest bardziej prawdopodobna.",
            "Topniejący lód i śnieg też mogą dodać wody.",
            "Ludzie pogarszają powodzie, budując miasta i wycinając drzewa.",
            "Twarde powierzchnie i kanały szybko odprowadzają deszcz do rzeki.",
            "Hydrogram (hydrograph) to wykres pokazujący, jak rzeka reaguje na burzę.",
            "Przepływ (discharge) to ilość wody przepływającej przez dany punkt, mierzona w kumekach (cumecs).",
            "Czas opóźnienia (lag time) to odstęp między najsilniejszym deszczem a najwyższym przepływem.",
            "Gwałtowny hydrogram (flashy hydrograph) ma krótki czas opóźnienia i wysoki szczyt.",
            "Powodziami można zarządzać za pomocą twardej inżynierii, takiej jak tamy i wały.",
            "Miękka inżynieria obejmuje sadzenie drzew i ostrzeżenia powodziowe.",
            "Banbury to wasze studium przypadku zarządzania powodzią w Wielkiej Brytanii."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a quantidade de água que passa num ponto de um rio a cada segundo (discharge, caudal/vazão)",
            "um gráfico que mostra como o caudal de um rio muda depois da chuva (hydrograph, hidrograma)",
            "o tempo entre a chuva mais forte e o caudal mais alto (lag time, tempo de atraso)",
            "o caudal mais alto que o rio atinge depois da chuva (peak discharge, caudal de ponta/vazão de pico)",
            "decidir o que pode ser construído em terras que podem inundar (floodplain zoning, zonamento da planície de inundação)",
            "plantar árvores (afforestation, florestação/florestamento)"
          ],
          "passage": [
            "Um rio inunda quando entra nele mais água do que o seu canal consegue conter.",
            "Chuva forte, encostas íngremes e rocha impermeável tornam as cheias mais prováveis.",
            "O gelo e a neve a derreter/derretendo também podem juntar mais água.",
            "As pessoas pioram as cheias ao construir cidades e cortar árvores.",
            "As superfícies duras e os esgotos mandam a chuva depressa para o rio.",
            "Um hidrograma (hydrograph) é um gráfico que mostra como um rio responde a uma tempestade.",
            "O caudal/a vazão (discharge) é a quantidade de água que passa num ponto, medida em cumecs.",
            "O tempo de atraso (lag time) é o intervalo entre a chuva mais forte e o caudal mais alto.",
            "Um hidrograma de resposta rápida (flashy) tem um tempo de atraso curto e um pico alto.",
            "As cheias podem ser geridas com engenharia pesada, como barragens e diques.",
            "A engenharia leve inclui plantar árvores e avisos de cheia.",
            "Banbury é o seu estudo de caso sobre a gestão de cheias no Reino Unido."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "tirada biyaha ilbiriqsi kasta bar webi ku taal dhaafaya (discharge)",
            "garaaf muujinaya sida discharge-ka webi roob ka dib isu beddelo (hydrograph)",
            "waqtiga u dhexeeya roobka ugu culus iyo discharge-ka ugu sarreeya (lag time)",
            "discharge-ka ugu sarreeya ee webi gaaro roob ka dib (peak discharge)",
            "go'aaminta waxa laga dhisi karo dhul fatahaad ku dhici karto (floodplain zoning)",
            "geed-beerid (afforestation)"
          ],
          "passage": [
            "Webi wuxuu fatahaad sameeyaa marka biyo ka badan inta marinkiisu qaadi karo galaan.",
            "Roob culus, jiirar dheer iyo dhagax impermeable dhammaantood fatahaadaha ayay u badnaan kartaa.",
            "Baraf dhalaalaya iyo baraf-roobna biyaha ku dari karaan.",
            "Dadku fatahaadaha way ka sii daraan iyagoo magaalooyin dhisaya oo geedo jaraya.",
            "Dusha adag iyo bullaacaduhu roobka si dhaqso ah ayay webiga u geeyaan.",
            "Hydrograph waa garaaf muujinaya sida webi uga jawaabo duufaan.",
            "Discharge waa tirada biyaha bar dhaafaya, oo lagu cabbiro cumecs.",
            "Lag time waa farqiga u dhexeeya roobka ugu culus iyo discharge-ka ugu sarreeya.",
            "Flashy hydrograph wuxuu leeyahay lag time gaaban iyo peak sare.",
            "Fatahaadaha waxaa lagu maarayn karaa hard engineering, sida dams iyo embankments.",
            "Soft engineering waxaa ka mid ah geed-beerid iyo digniinaha fatahaadda.",
            "Banbury waa case study-gaaga maaraynta fatahaadda ee UK."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "кількість води, що проходить через точку на річці за секунду (discharge)",
            "графік, який показує, як змінюється витрата води в річці після дощу (hydrograph)",
            "час між найсильнішим дощем і найбільшою витратою води (lag time)",
            "найбільша витрата води, якої досягає річка після дощу (peak discharge)",
            "вирішення того, що можна будувати на землі, яку може затопити (floodplain zoning)",
            "висаджування дерев (afforestation)"
          ],
          "passage": [
            "Річка розливається, коли в неї надходить більше води, ніж може вмістити її русло.",
            "Сильний дощ, круті схили і водонепроникна (impermeable) порода роблять повені ймовірнішими.",
            "Танення льоду і снігу теж може додати води.",
            "Люди погіршують повені, будуючи міста і вирубуючи дерева.",
            "Тверді поверхні та стоки швидко відправляють дощову воду в річку.",
            "Гідрограф (hydrograph) — це графік, який показує, як річка реагує на бурю.",
            "Витрата води (discharge) — це кількість води, що проходить через точку, вимірюється в cumecs.",
            "Час запізнення (lag time) — це проміжок між найсильнішим дощем і найбільшою витратою води.",
            "Різкий (flashy) гідрограф має короткий час запізнення і високий пік.",
            "Повенями можна керувати за допомогою жорсткої інженерії, такої як дамби і насипи.",
            "М’яка інженерія включає висаджування дерев і попередження про повінь.",
            "Банбері (Banbury) — ваш кейс-стаді з керування повенями у Великій Британії."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "پانی کی وہ مقدار جو دریا کے کسی نقطے سے ہر سیکنڈ گزرتی ہے (discharge)",
            "ایک گراف جو دکھاتا ہے کہ بارش کے بعد دریا کا discharge کیسے بدلتا ہے (hydrograph)",
            "سب سے تیز بارش اور سب سے زیادہ discharge کے بیچ کا وقت (lag time)",
            "بارش کے بعد دریا کا سب سے زیادہ discharge (peak discharge)",
            "یہ فیصلہ کرنا کہ ایسی زمین پر کیا بنایا جا سکتا ہے جہاں سیلاب آ سکتا ہو (floodplain zoning)",
            "درخت لگانا (afforestation)"
          ],
          "passage": [
            "دریا میں سیلاب تب آتا ہے جب اس میں اتنا پانی داخل ہو جتنا اس کی نالی سنبھال نہ سکے۔",
            "تیز بارش، ڈھلوان زمین اور impermeable چٹان، یہ سب سیلاب کا امکان بڑھا دیتے ہیں۔",
            "پگھلتی برف اور یخ بھی پانی میں اضافہ کر سکتے ہیں۔",
            "لوگ شہر بنا کر اور درخت کاٹ کر سیلاب کو اور بُرا بنا دیتے ہیں۔",
            "سخت سطحیں اور نالے بارش کو جلدی سے دریا میں پہنچا دیتے ہیں۔",
            "hydrograph ایک گراف ہے جو دکھاتا ہے کہ دریا طوفان پر کیسے ردِعمل دیتا ہے۔",
            "discharge پانی کی وہ مقدار ہے جو کسی نقطے سے گزرتی ہے، اور یہ cumecs میں ناپی جاتی ہے۔",
            "lag time سب سے تیز بارش اور سب سے زیادہ discharge کے بیچ کا وقفہ ہے۔",
            "flashy hydrograph کا lag time چھوٹا اور peak اونچا ہوتا ہے۔",
            "سیلاب کا انتظام hard engineering سے کیا جا سکتا ہے، جیسے ڈیم اور embankments۔",
            "soft engineering میں درخت لگانا اور سیلاب کی وارننگ شامل ہیں۔",
            "بینبری (Banbury) برطانیہ میں سیلاب کے انتظام کی آپ کی case study ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Why rivers flood",
          paragraphs: [
            "A river floods when its discharge is greater than its channel can hold, so water overflows the banks onto the floodplain. Some of the causes are physical. Precipitation is the main one: heavy or prolonged rain, or a sudden thaw of snow and ice (an indirect cause, because the melt adds water that did not fall as rain that day). Geology matters: impermeable rock such as granite or clay does not let water soak in, so it runs straight off into the river. The relief of the drainage basin matters: on steep slopes water reaches the river quickly. A high drainage density, with many streams in the basin, delivers water to the main river faster.",
            "Other causes are human. Urbanisation covers the land in impermeable concrete and tarmac, and drains and sewers carry rain straight to the river. Deforestation removes trees that would intercept rain on their leaves and take up water through their roots, so more water reaches the river faster. Agriculture can leave soil bare or compacted, so rain runs off rather than soaking in. Your sorting task in class put precipitation, rock type, relief, drainage density and ice melt in the physical column, and urbanisation, deforestation and agriculture in the human column.",
            "Flood risk is the combination of these factors. A steep, impermeable, deforested basin with a town in it floods quickly and badly after heavy rain. A gentle, permeable, forested basin soaks the same rain up and releases it slowly."
          ],
          tip: "Sort first, explain second. Say whether a factor is physical or human, then say how it gets water into the river faster."
        },
        {
          heading: "Reading a hydrograph",
          paragraphs: [
            "A hydrograph is a graph that shows how a river responds to a storm. Time runs along the bottom. Rainfall is shown as bars, and the river's discharge as a line. Discharge is the amount of water passing a given point on the river, measured in cubic metres per second, written cumecs. The line rises after the rain (the rising limb), reaches its peak discharge, the highest discharge after the rainfall, and then falls (the falling limb). Lag time is the difference in time between peak rainfall and peak discharge.",
            "A flashy hydrograph has a short lag time and a high peak discharge: the river rises fast and high, so flooding is likely. A gentle hydrograph has a longer lag time and a lower peak: the water arrives slowly and the river copes. Which one a basin produces depends on the same factors as flood risk. Basin A, with the flashy hydrograph, has steep slopes, impermeable rock, very thin soil, thin grass and moorland, urban land use, limited use of the river and a high drainage density. Basin B, with the gentle hydrograph, has gentle slopes, permeable rock, deep soil, forest, rural land use, a river used for industry with a dam built on it, and a low drainage density."
          ],
          worked: {
            q: "On a hydrograph, peak rainfall was at 03:00 and peak discharge was at 11:00. What was the lag time?",
            steps: [
              "Lag time is the time from peak rainfall to peak discharge, not from the start of the rain.",
              "Peak rainfall 03:00; peak discharge 11:00.",
              "11 − 3 = 8.",
              "Lag time = 8 hours. A lag time this short, on a big storm, suggests a fairly flashy basin."
            ],
            answer: "8 hours",
            checks: [{ expr: "11-3", value: 8, tol: 0 }]
          },
          tip: "Read the two peaks, not the start of the rain. Lag time is peak to peak."
        },
        {
          heading: "Managing floods: hard and soft engineering",
          paragraphs: [
            "As at the coast, flood management divides into hard and soft engineering. The hard strategies are dams and reservoirs, which hold water back in the upper course and release it slowly; channel straightening, which cuts off meanders so water leaves the area faster; embankments, which raise the banks so the channel holds more water; and flood relief channels, which carry excess water around a town. Hard engineering is expensive, can look unnatural and can simply move the flood problem downstream, but it protects valuable property reliably.",
            "The soft strategies are floodplain zoning, which restricts building on land likely to flood so that only low-value uses such as playing fields sit beside the river; afforestation, planting trees to intercept rain and slow its journey to the river; flood warnings, which give people time to move belongings and themselves; and river restoration, which returns a straightened river to a natural meandering course so its floodplain can store water. Soft strategies are cheaper and more sustainable, but they do not stop a flood on their own, and zoning cannot help a town that is already built.",
            "In your lesson you rated each strategy on a thermometer for its costs and benefits and added case studies where you could. The best schemes, like the one at Banbury, combine hard and soft methods."
          ],
          tip: "Four hard, four soft: dams, straightening, embankments, relief channels; zoning, afforestation, warnings, restoration. Learn one cost and one benefit for each."
        },
        {
          heading: "Case study: flood management at Banbury",
          paragraphs: [
            "Banbury is your named example of a UK flood management scheme. In class you used pages 130 and 131 of the textbook to answer four questions, and those four questions are exactly what the exam can ask: where is Banbury; why did it need protecting from floods; what has been done to reduce the flood risk; and what are the social, economic and environmental issues of the scheme.",
            "Use your notes to build a one-page summary with those four headings. Under what has been done, sort the measures into hard and soft engineering. Under the issues, give one social (people and homes), one economic (money and jobs) and one environmental (wildlife and landscape) point, and say whether each is a cost or a benefit of the scheme.",
            "A case-study answer scores when it is specific. Name the town, name a measure, give a number or a place, and then make the geographical point. A general answer about flood management with Banbury written at the top will not reach the top level."
          ],
          tip: "Where, why, what, and the social, economic and environmental issues: four headings for every management case study in this unit."
        }
      ],
      gate: [
        { kind: "numeric", q: "On a hydrograph, peak rainfall was at 06:00 and peak discharge was at 15:00. What was the lag time, in hours?", answer: 9, tolerance: 0, units: "hours", check: "15-6", why: "Lag time is the time between peak rainfall and peak discharge: 15:00 − 06:00 = 9 hours.",
          misconceptions: [
            { answer: 21, says: "You added the two times. Lag time is the gap between them, so subtract: 15 − 6 = 9 hours.", check: "15+6" },
            { answer: 15, says: "15:00 is the time of peak discharge, not the lag time. Lag time is how long after peak rainfall it came: 15 − 6 = 9 hours.", check: "15" },
            { answer: 6, says: "06:00 is the time of peak rainfall. Lag time is the gap from then to peak discharge at 15:00, which is 9 hours.", check: "6" }
          ] },
        { kind: "mcq", q: "Which of these is a human cause of flooding?", options: ["Urbanisation", "Precipitation", "Relief of the drainage basin", "Rock type"], answer: 0, why: "Urbanisation is people covering the land in impermeable surfaces and drains, so rain reaches the river fast. The other three are physical.",
          feedback: [
            "",
            "Precipitation is rain and snow, which people do not control: a physical cause. Urbanisation is the human cause here.",
            "The relief, or shape and steepness of the land, is physical. Urbanisation, building on the land, is the human cause.",
            "Rock type is part of the geology of the basin, a physical cause. Urbanisation is the human one."
          ] },
        { kind: "gap", q: "A flashy hydrograph has a ___ lag time and a high peak discharge.", answer: "short", options: ["short", "long", "zero"], why: "Flashy means the river responds quickly: the peak discharge comes soon after the peak rainfall.",
          feedback: {
            "long": "A long lag time means the water arrives slowly, which gives a gentle hydrograph with a low peak. Flashy hydrographs have a short lag time.",
            "zero": "Even the fastest basin takes some time for rain to reach the river, so lag time is never zero. A flashy hydrograph has a short lag time."
          } }
      ],
      modules: [
        {
          title: "Hydrograph words",
          task: {
            kind: "match",
            q: "Match each hydrograph term to its meaning.",
            pairs: [
              ["Hydrograph", "A graph showing how a river responds to a storm"],
              ["Discharge", "The amount of water passing a point on the river, in cumecs"],
              ["Peak discharge", "The highest discharge the river reaches after the rainfall"],
              ["Lag time", "The time between peak rainfall and peak discharge"]
            ]
          },
          levels: {
            support: {
              steps: [
                "One term is the whole graph.",
                "One term is a time, so its meaning must mention time.",
                "Two terms contain the word discharge: one is the amount in general, one is the highest point.",
                "The unit cumecs goes with the general measurement."
              ],
              example: {
                q: "Match: rising limb, falling limb. Choices: the part of the line where discharge is going down after the peak; the part of the line where discharge is going up towards the peak.",
                steps: ["Rising goes up, before the peak.", "Falling goes down, after the peak."],
                answer: "Rising limb: discharge going up towards the peak. Falling limb: discharge going down after the peak."
              }
            },
            core: { hint: "One is the graph, one is a time, and two are amounts of water (one of them the biggest)." },
            stretch: { extend: "Explain what a short lag time tells you about the drainage basin, giving two possible reasons." }
          },
          explain: "Say, in one sentence, how you would find the lag time on a hydrograph.",
          why: "The hydrograph is the graph; discharge is the amount of water per second (cumecs); peak discharge is its highest value; lag time is peak rainfall to peak discharge."
        },
        {
          title: "How much water is that?",
          task: {
            kind: "numeric",
            q: "A river's discharge is 240 cumecs (cubic metres per second). How many cubic metres of water pass the gauging station in one minute?",
            answer: 14400, tolerance: 0, units: "m³", check: "240*60",
            why: "Cumecs means cubic metres every second. In a minute there are 60 seconds, so 240 × 60 = 14 400 cubic metres.",
            misconceptions: [
              { answer: 240, says: "240 is the amount in one second. A minute is 60 seconds, so multiply: 240 × 60 = 14 400 cubic metres.", check: "240" },
              { answer: 4, says: "You divided by 60. Cumecs is per second, and a minute has more seconds than that, so you need to multiply: 240 × 60 = 14 400.", check: "240/60" },
              { answer: 864000, says: "That is the amount in an hour (240 × 3600). The question asks for one minute: 240 × 60 = 14 400 cubic metres.", check: "240*3600" }
            ]
          },
          contexts: [
            { label: "After a storm", q: "After a storm, the discharge of the River Tees at a gauging station is 240 cumecs. How many cubic metres of water pass the station in one minute?", check: "240*60" },
            { label: "Flood warning", q: "A flood warning is issued when a river reaches 240 cumecs. At that discharge, how many cubic metres of water pass the gauge in one minute?", check: "240*60" },
            { label: "Reservoir release", q: "A dam releases water at 240 cubic metres per second to lower the reservoir. How many cubic metres leave the reservoir in one minute?", check: "240*60" }
          ],
          levels: {
            support: {
              steps: [
                "Cumecs means cubic metres per second: 240 cubic metres go past every second.",
                "How many seconds are there in a minute? 60.",
                "Multiply: 240 × 60.",
                "240 × 6 = 1440, so 240 × 60 = 14 400."
              ],
              example: {
                q: "A stream has a discharge of 15 cumecs. How many cubic metres pass in one minute?",
                steps: ["15 cubic metres every second.", "60 seconds in a minute.", "15 × 60 = 900."],
                answer: "900 cubic metres",
                checks: [{ expr: "15*60", value: 900, tol: 0 }]
              }
            },
            core: { hint: "Per second to per minute: multiply by 60." },
            stretch: { extend: "A swimming pool holds about 2 500 cubic metres. Estimate how long the river at 240 cumecs would take to fill it, and show your working." }
          },
          explain: "Say, in one sentence, what the unit cumecs measures.",
          why: "240 cubic metres pass every second; 60 seconds make a minute; 240 × 60 = 14 400 cubic metres."
        },
        {
          title: "People and floods",
          task: {
            kind: "written",
            q: "Explain how human activities can increase the risk of a river flooding. (6 marks)",
            marks: 6,
            criteria: [
              "Names at least two human activities (urbanisation, deforestation, agriculture)",
              "Explains, for each, the chain of cause and effect that gets water into the river faster or in greater amounts",
              "Uses the right vocabulary: impermeable surfaces, interception, surface run-off, lag time, discharge",
              "Links the explanation to the hydrograph (shorter lag time, higher peak discharge) or to a drainage basin example"
            ],
            model: "Urbanisation increases flood risk because towns cover the land with impermeable tarmac and concrete, so rain cannot soak into the ground; instead it runs off into drains and sewers that carry it straight to the river. More water arrives more quickly, so the lag time is shorter and the peak discharge is higher, which makes the river more likely to overflow its banks. Deforestation has a similar effect further up the basin. Trees intercept rain on their leaves and take up water through their roots; when they are cut down, more rain reaches the ground and runs off the surface, especially on steep slopes. Farming can add to this when heavy machinery compacts the soil or fields are left bare, so water runs off rather than soaking in. Together these activities turn a gentle hydrograph into a flashy one."
          },
          levels: {
            support: {
              steps: [
                "Choose two human activities from the lesson.",
                "For each, write a chain: the activity, what it does to the land, what that does to the rainwater, what that does to the river.",
                "Use at least one hydrograph word: lag time or peak discharge.",
                "Finish by saying what the river is now more likely to do."
              ],
              example: {
                q: "In two sentences, explain how a steep drainage basin (a physical factor) increases flood risk.",
                steps: ["Say what steep slopes do to rainwater.", "Say what that does to the river's discharge."],
                answer: "On steep slopes rainwater runs quickly downhill to the river instead of soaking in. The river's discharge rises fast, giving a short lag time and a high peak, so it is more likely to flood."
              }
            },
            core: { hint: "Activity, land, water, river: four links in each chain. Two chains is six marks." },
            stretch: { extend: "Add a paragraph explaining which soft engineering strategy would best reverse one of the human causes you described, and why." }
          },
          explain: "Say, in one sentence, why covering the ground with concrete makes a river rise faster after rain.",
          why: "Top answers explain the chain from activity to river: impermeable surfaces and drains speed run-off; fewer trees mean less interception; compacted soil reduces infiltration. Each shortens lag time and raises peak discharge."
        }
      ]
    }
  ],

  sources: {
    deckDump: "gg_y10_unit_1_physical_landscapes_rivers_and_coasts.txt",
    decksUsed: ["Coasts.pptx", "Rivers.pptx"],
    notes: "Lesson titles, sequence, key words, definitions, costs and case-study facts come from the two department decks only (Coasts.pptx slides 1-141, Rivers.pptx slides 1-97). House furniture (dated title slides, seating plans, homework and Kerboodle reading slides, the Prior Learning/Components sheets, end-of-topic revision lists) was used only to fix the lesson sequence. Board answers on the deck's model-answer slides (Coasts 5, 54, 67, 107; Rivers 21-23, 30, 46, 54) were read to see what the deck teaches; none is reproduced and verify.py bans their distinctive phrases. Where the deck gives only a task or a textbook page reference (Lyme Regis phases, Banbury, the River Tees), the manifest teaches only what the slides themselves state and tells the pupil to use their class notes; see NOTES.md. Every number is held in the FACTS table in verify.py and recomputed. No pretext.l1 (translation is a separate pass) and no meta.constellation. No text is quoted from any source."
  }
};
