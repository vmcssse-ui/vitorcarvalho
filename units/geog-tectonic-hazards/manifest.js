// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE Geography 8035 · 3.1.1 The challenge of natural hazards: natural hazards and tectonic hazards · Year 11 · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression; the FACTS names held in verify.py are allowed) and are recomputed.
//   worked examples / support examples with a calculation carry `checks:[{expr, value, tol}]`.
//   every "order" task is compared with the canonical sequences held in verify.py (the department deck's own sequences).
//   every mcq / gap / match answer is compared with the independent answer key held in verify.py.
//   every case-study number (magnitudes 9 / 8.8 / 7.9 / 9.3 / 5.7, the 2014 deaths percentages, Chile's $30 billion and Nepal's
//   $5 billion, the 500 and 9000 deaths, Wegener's 1912, the Earth's 4.54 billion years, Rotorua's 68,000 people and 35 %,
//   the geyser's 35 dormant years) is checked against the independent FACTS table in verify.py, each with its slide reference.
//   passage sentences are counted (≤ 20 words) and all text is linted for known misconceptions, the deck's own errors and
//   deck-model fingerprints; verify.py also runs a mutation self-test (tampered copies of this manifest must fail).
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions`; every module carries
//   `explain`; ≥ 1 module per chapter carries `contexts` that never redefine the answer; `connections` ⊂ glossary;
//   meta.constellation is omitted (the engine lays the stars out); no pretext.l1 (translation is a separate pass).
// Diagrams (plate boundaries, focus and epicentre, the structure of the Earth, the geyser cycle) are described in words; no widget exists for them.
// This is the GCSE unit. The Year 8 unit `geog-tectonics` covers the KS3 introduction and is not copied here.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["geog-tectonic-hazards"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "geog-tectonic-hazards",
    subjectKey: "geography",
    subject: "Geography",
    board: "AQA",
    spec: "8035",
    specRef: "3.1.1 The challenge of natural hazards: 3.1.1.1 Natural hazards, 3.1.1.2 Tectonic hazards (Paper 1, Section A)",
    year: 11,
    tier: "GCSE (AQA Geography is a single-tier qualification)",
    title: "The Challenge of Natural Hazards: Tectonic Hazards",
    sub: "From the moving plates under our feet to the earthquakes in Chile and Nepal: what makes a natural event a hazard, why the ground shakes, and how people live with and reduce the risk.",
    bigQuestion: "Why do tectonic hazards hurt some places far more than others, and how far can people reduce the risk?",
    lessonCount: 11,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  // The department's four decks (Natural-Hazards.pptx, Tectonic hazards.pptx, Causes, effects and responses of earthquakes.pptx,
  // Reducing the risk of tectonic hazards.pptx) in teaching order, cut at the dated lesson slides of autumn 2022. Titles are the
  // decks' own slide titles or learning objectives; questions are those objectives rephrased. See NOTES.md section 2 for slide ranges.
  lessons: [
    { n: 1, title: "Natural hazards: what they are and the three main groups", question: "What is a natural hazard, when does a natural event become one, and what are the three main groups of natural hazard?", keywords: ["natural hazard", "natural event", "geological", "atmospheric", "hydrological"] },
    { n: 2, title: "Hazard risk and the factors that increase it", question: "What is hazard risk, and which human developments make people more likely to be affected by a natural hazard?", keywords: ["hazard risk", "probability", "floodplain", "steep slopes", "coastal settlement", "command word"] },
    { n: 3, title: "Plate tectonics: the age and structure of the Earth and plate tectonic theory", question: "How old is the Earth, what is it made of, and what did Alfred Wegener notice about the continents?", keywords: ["4.54 billion years", "crust", "mantle", "core", "convection current", "Alfred Wegener", "Pangaea"] },
    { n: 4, title: "Different plate boundaries: landforms and examples", question: "What happens at constructive, destructive, conservative and collision boundaries, and where is an example of each?", keywords: ["constructive", "destructive", "conservative", "collision", "subduction", "Mid-Atlantic Ridge", "San Andreas Fault"] },
    { n: 5, title: "Tectonic plates, boundaries and processes", question: "Which plates and boundaries lie under the earthquakes you have studied, and is magnitude linked to the type of margin?", keywords: ["seven major plates", "Nazca", "Indo-Australian", "Eurasian", "Pacific", "magnitude", "correlation"] },
    { n: 6, title: "Earthquakes: what, where and why; focus, epicentre and measuring", question: "What causes an earthquake, where is its focus and epicentre, and how is it measured?", keywords: ["focus", "epicentre", "seismic waves", "seismometer", "Richter scale", "Mercalli scale", "tsunami"] },
    { n: 7, title: "Effects of earthquakes: case studies Chile 2010 and Nepal 2015", question: "What were the primary and secondary effects of the Chile and Nepal earthquakes, and which country is the HIC and which the LIC?", keywords: ["primary effect", "secondary effect", "HIC", "LIC", "Chile 2010", "Nepal 2015"] },
    { n: 8, title: "Responses to earthquakes and why the effects differed: Chile and Nepal", question: "How did Chile and Nepal respond, and why was the lower-magnitude earthquake far deadlier?", keywords: ["immediate response", "long-term response", "wealth", "building standards", "population density", "recovery"] },
    { n: 9, title: "Living in the shadow of volcanoes: Vesuvius, Hawaii and Iceland", question: "Why do people choose to live near volcanoes, and are the benefits worth the risks?", keywords: ["fertile soil", "geothermal energy", "building materials", "tourism", "hot spot", "constructive margin"] },
    { n: 10, title: "New Zealand geysers mystery: Rotorua", question: "How do geysers form, why did Rotorua's Te Whakarewarewa geyser stop, and why did it spring back to life?", keywords: ["geyser", "geothermal", "tourism", "bore hole", "sustainable"] },
    { n: 11, title: "Reducing the risk from tectonic hazards: the 3Ps and M", question: "How far can prediction, protection, planning and monitoring reduce the risk from earthquakes and volcanoes?", keywords: ["prediction", "protection", "planning", "monitoring", "hazard map", "Eyjafjallajokull", "Mount Etna"] }
  ],

  // 16 terms; Connections uses all 16 (four groups, each one chapter's idea). Chapters 1 and 2 teach their key words through
  // pretext.words and the text instead (hazard words; the Earth's layers and plates).
  glossary: [
    { term: "constructive", means: "A plate boundary where two plates move apart; magma rises to fill the gap and cools to make new crust.", chapter: "plate-boundaries" },
    { term: "destructive", means: "A plate boundary where a denser oceanic plate is forced under a continental plate and destroyed in the mantle.", chapter: "plate-boundaries" },
    { term: "conservative", means: "A plate boundary where two plates slide past each other along a fault; crust is neither made nor destroyed.", chapter: "plate-boundaries" },
    { term: "collision", means: "A plate boundary where two continental plates of the same density meet head on and are pushed up into fold mountains.", chapter: "plate-boundaries" },
    { term: "focus", means: "The point deep below the surface where an earthquake starts and the rocks first move.", chapter: "earthquakes" },
    { term: "epicentre", means: "The point on the surface directly above the focus, where the shaking is usually felt most strongly.", chapter: "earthquakes" },
    { term: "seismic waves", means: "The waves of energy that spread out from the focus of an earthquake and shake the ground.", chapter: "earthquakes" },
    { term: "aftershock", means: "A smaller earthquake that follows the main, larger one as the rocks settle.", chapter: "earthquakes" },
    { term: "primary effect", means: "Something that happens immediately because of the hazard itself, such as buildings collapsing in the shaking.", chapter: "chile-nepal" },
    { term: "secondary effect", means: "Something caused by the primary effects, such as a tsunami, a landslide or disease spreading after the event.", chapter: "chile-nepal" },
    { term: "immediate response", means: "Help given just after a hazard to reduce its primary effects, such as search and rescue, shelters and medical supplies.", chapter: "chile-nepal" },
    { term: "long-term response", means: "Help given over weeks, months and years to recover from the losses, such as rebuilding homes, roads and schools.", chapter: "chile-nepal" },
    { term: "prediction", means: "Saying in advance when and where a hazard will happen; possible for volcanoes by monitoring, still inaccurate for earthquakes.", chapter: "living-with-risk" },
    { term: "protection", means: "Building and engineering so that people and property can withstand a hazard, such as reinforced buildings and tsunami walls.", chapter: "living-with-risk" },
    { term: "planning", means: "Using hazard maps and evacuation plans so that the most at-risk areas are ready before a hazard happens.", chapter: "living-with-risk" },
    { term: "monitoring", means: "Watching a hazard area for warning signs, such as tremors, ground deformation and gases escaping from a volcano.", chapter: "living-with-risk" }
  ],

  connections: [
    { group: "Four kinds of plate boundary", terms: ["constructive", "destructive", "conservative", "collision"] },
    { group: "Anatomy of an earthquake", terms: ["focus", "epicentre", "seismic waves", "aftershock"] },
    { group: "Effects and responses in a case study", terms: ["primary effect", "secondary effect", "immediate response", "long-term response"] },
    { group: "The 3Ps and M", terms: ["prediction", "protection", "planning", "monitoring"] }
  ],

  chapters: [
    /* ───────────── 1 · natural hazards ───────────── */
    {
      key: "natural-hazards", n: 1, title: "When does a natural event become a hazard?",
      lead: "The definition of a natural hazard, the three groups of hazard and what drives each, what hazard risk means, and why the number of people at risk keeps rising.",
      covers: [1, 2],
      pretext: {
        words: [
          { word: "natural event", means: "something that happens in nature, such as an earthquake or a flood", sentence: "An earthquake in an empty desert is a natural event, not a hazard." },
          { word: "natural hazard", means: "a natural event that puts people and property at risk", sentence: "The same earthquake under a city is a natural hazard." },
          { word: "hazard risk", means: "the chance of being affected by a natural event", sentence: "People who live near the coast accept a higher hazard risk." },
          { word: "geological", means: "driven by energy from inside the Earth", sentence: "Earthquakes and volcanoes are geological hazards." },
          { word: "atmospheric", means: "driven by processes in the air around the Earth", sentence: "Tropical storms and droughts are atmospheric hazards." },
          { word: "hydrological", means: "driven by water, mainly the oceans", sentence: "Floods and tsunamis are hydrological hazards." }
        ],
        passage: [
          "A natural event is something that happens in nature.",
          "An earthquake, a flood or a storm is a natural event.",
          "If no one lives nearby, it harms no one.",
          "It becomes a natural hazard when it puts people and property at risk.",
          "There are three main groups of natural hazard.",
          "Geological hazards are driven by energy from inside the Earth, like earthquakes and volcanoes.",
          "Atmospheric hazards are driven by the air, like tropical storms and droughts.",
          "Hydrological hazards are driven by water, like floods and tsunamis.",
          "Hazard risk is the chance of being affected by a natural event.",
          "People often accept the risk because the benefits of a place are great.",
          "Some people have little choice about where they live.",
          "As cities grow, more people live in risky places.",
          "So the number of people at risk keeps rising."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "شيء يحدث في الطبيعة، كالزلزال أو السيل (natural event)",
            "حدث طبيعي يُعرّض الناس والممتلكات للخطر (natural hazard)",
            "احتمال أن يتأثّر المرء بحدث طبيعي (hazard risk)",
            "تدفعه طاقة من داخل الأرض (geological)",
            "تدفعه عمليات في الهواء المحيط بالأرض (atmospheric)",
            "يدفعه الماء، والمحيطات في الأساس (hydrological)"
          ],
          "passage": [
            "الحدث الطبيعي شيء يحدث في الطبيعة.",
            "والزلزال أو السيل أو العاصفة حدث طبيعي.",
            "فإن لم يكن أحد يعيش قريبًا منه لم يضرّ أحدًا.",
            "ويصير خطرًا طبيعيًّا عندما يُعرّض الناس والممتلكات للخطر.",
            "وللمخاطر الطبيعية ثلاث مجموعات رئيسة.",
            "فالمخاطر الجيولوجية تدفعها طاقة من داخل الأرض، كالزلازل والبراكين.",
            "والمخاطر الجوّية يدفعها الهواء، كالعواصف المدارية وموجات الجفاف.",
            "والمخاطر المائية يدفعها الماء، كالسيول وأمواج التسونامي.",
            "وخطر التعرّض هو احتمال أن يتأثّر المرء بحدث طبيعي.",
            "والناس يقبلون الخطر غالبًا لأنّ منافع المكان كبيرة.",
            "وبعض الناس ليس له خيار كبير في مكان عيشه.",
            "وكلّما كبرت المدن عاش ناس أكثر في أماكن خطرة.",
            "فعدد الناس المعرّضين للخطر يزداد باستمرار."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "coś, co dzieje się w przyrodzie, na przykład trzęsienie ziemi albo powódź (natural event)",
            "zdarzenie przyrodnicze, które naraża ludzi i ich mienie (natural hazard)",
            "prawdopodobieństwo, że dotknie nas zdarzenie przyrodnicze (hazard risk)",
            "napędzany energią z wnętrza Ziemi (geological)",
            "napędzany procesami w powietrzu wokół Ziemi (atmospheric)",
            "napędzany wodą, głównie oceanami (hydrological)"
          ],
          "passage": [
            "Zdarzenie przyrodnicze to coś, co dzieje się w przyrodzie.",
            "Trzęsienie ziemi, powódź albo burza to zdarzenia przyrodnicze.",
            "Jeśli nikt nie mieszka w pobliżu, nikomu to nie szkodzi.",
            "Staje się zagrożeniem naturalnym (natural hazard), kiedy naraża ludzi i ich mienie.",
            "Są trzy główne grupy zagrożeń naturalnych.",
            "Zagrożenia geologiczne napędza energia z wnętrza Ziemi, jak trzęsienia ziemi i wulkany.",
            "Zagrożenia atmosferyczne napędza powietrze, jak burze tropikalne i susze.",
            "Zagrożenia hydrologiczne napędza woda, jak powodzie i tsunami.",
            "Ryzyko zagrożenia (hazard risk) to prawdopodobieństwo, że dotknie nas zdarzenie przyrodnicze.",
            "Ludzie często przyjmują to ryzyko, bo korzyści z danego miejsca są duże.",
            "Niektórzy ludzie mają niewielki wybór co do tego, gdzie mieszkają.",
            "W miarę jak miasta rosną, coraz więcej ludzi mieszka w miejscach ryzykownych.",
            "Dlatego liczba narażonych ludzi stale rośnie."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "algo que acontece na natureza, como um sismo/terremoto ou uma cheia/enchente (natural event, acontecimento/evento natural)",
            "um acontecimento natural que põe em risco as pessoas e os seus bens (natural hazard, risco natural)",
            "a probabilidade de ser afetado por um acontecimento natural (hazard risk)",
            "movido por energia que vem do interior da Terra (geological, geológico)",
            "movido por processos no ar que envolve a Terra (atmospheric, atmosférico)",
            "movido pela água, sobretudo pelos oceanos (hydrological, hidrológico)"
          ],
          "passage": [
            "Um acontecimento natural é algo que acontece na natureza.",
            "Um sismo/terremoto, uma cheia/enchente ou uma tempestade é um acontecimento natural.",
            "Se não vive ninguém ali perto, não faz mal a ninguém.",
            "Torna-se um risco natural (natural hazard) quando põe em risco as pessoas e os seus bens.",
            "Há três grandes grupos de riscos naturais.",
            "Os riscos geológicos são movidos por energia do interior da Terra, como os sismos/terremotos e os vulcões.",
            "Os riscos atmosféricos são movidos pelo ar, como as tempestades tropicais e as secas.",
            "Os riscos hidrológicos são movidos pela água, como as cheias/enchentes e os tsunamis.",
            "O hazard risk é a probabilidade de ser afetado por um acontecimento natural.",
            "As pessoas aceitam muitas vezes o risco porque um lugar traz grandes vantagens.",
            "Há pessoas que têm pouca escolha sobre onde vivem.",
            "À medida que as cidades crescem, mais pessoas vivem em lugares de risco.",
            "Por isso o número de pessoas em risco continua a subir."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "wax dabeecadda ka dhaca, sida dhulgariir ama fatahaad",
            "dhacdo dabiici ah oo dadka iyo hantida halis gelisa",
            "fursadda in dhacdo dabiici ah ay ku saamayso",
            "waxaa wada tamar ka timid Dhulka gudihiisa",
            "waxaa wada hawlo ka dhacaya hawada Dhulka ku wareegsan",
            "waxaa wada biyo, badweynaha inta badan"
          ],
          "passage": [
            "Dhacdo dabiici ah waa wax dabeecadda ka dhaca.",
            "Dhulgariir, fatahaad ama duufaan waa dhacdo dabiici ah.",
            "Haddii qofna agteeda ku noolayn, cidna ma waxyeelleyso.",
            "Waxay noqotaa khatar dabiici ah marka ay dadka iyo hantida halis geliso.",
            "Saddex koox waaweyn oo khatar dabiici ah ayaa jira.",
            "Khataraha geological waxaa wada tamarta Dhulka gudihiisa, sida dhulgariirrada iyo foolkaanaha.",
            "Khataraha atmospheric waxaa wada hawada, sida duufaannada kulaylaha iyo abaaraha.",
            "Khataraha hydrological waxaa wada biyaha, sida fatahaadaha iyo tsunami-yada.",
            "Hazard risk waa fursadda in dhacdo dabiici ah ay ku saamayso.",
            "Dadku inta badan khatarta way aqbalaan maxaa yeelay faa'iidooyinka meeshu waaweyn yihiin.",
            "Dadka qaar doorasho yar ayay ka haystaan meesha ay ku noolaadaan.",
            "Marka magaalooyinku koraan, dad badan ayaa ku nool meelo khatar leh.",
            "Markaa tirada dadka halista ku jira way sii kordhaysaa."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "те, що відбувається в природі, як-от землетрус або повінь (natural event)",
            "природна подія, яка ставить людей і майно під загрозу (natural hazard)",
            "ймовірність того, що на вас подіє природна подія (hazard risk)",
            "рухомий енергією з глибин Землі (geological)",
            "рухомий процесами в повітрі навколо Землі (atmospheric)",
            "рухомий водою, переважно океанами (hydrological)"
          ],
          "passage": [
            "Природна подія — це те, що відбувається в природі.",
            "Землетрус, повінь або шторм — це природна подія.",
            "Якщо поблизу ніхто не живе, вона нікому не шкодить.",
            "Вона стає природною небезпекою (natural hazard), коли ставить людей і майно під загрозу.",
            "Є три головні групи природних небезпек.",
            "Геологічні небезпеки рухає енергія з глибин Землі, як-от землетруси й вулкани.",
            "Атмосферні небезпеки рухає повітря, як-от тропічні шторми й засухи.",
            "Гідрологічні небезпеки рухає вода, як-от повені й цунамі.",
            "Ризик небезпеки (hazard risk) — це ймовірність того, що на вас подіє природна подія.",
            "Люди часто приймають цей ризик, бо вигоди від місця великі.",
            "Деякі люди мають мало вибору щодо того, де їм жити.",
            "Що більше зростають міста, то більше людей живе в небезпечних місцях.",
            "Тому кількість людей під загрозою й далі зростає."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ چیز جو قدرت میں پیش آئے، جیسے زلزلہ یا سیلاب (natural event)",
            "ایسا قدرتی واقعہ جو لوگوں اور املاک کو خطرے میں ڈال دے (natural hazard)",
            "کسی قدرتی واقعے سے متاثر ہونے کا امکان (hazard risk)",
            "زمین کے اندر کی توانائی سے چلنے والا (geological)",
            "زمین کے گرد ہوا میں ہونے والے عمل سے چلنے والا (atmospheric)",
            "پانی سے، خاص کر سمندروں سے، چلنے والا (hydrological)"
          ],
          "passage": [
            "natural event وہ چیز ہے جو قدرت میں پیش آتی ہے۔",
            "زلزلہ، سیلاب یا طوفان ایک natural event ہے۔",
            "اگر قریب کوئی نہ رہتا ہو تو اس سے کسی کو نقصان نہیں ہوتا۔",
            "یہ natural hazard اس وقت بنتا ہے جب لوگوں اور املاک کو خطرے میں ڈال دے۔",
            "natural hazards کے تین بڑے گروہ ہیں۔",
            "geological hazards زمین کے اندر کی توانائی سے چلتے ہیں، جیسے زلزلے اور آتش فشاں۔",
            "atmospheric hazards ہوا سے چلتے ہیں، جیسے اشنکٹبندی طوفان اور droughts۔",
            "hydrological hazards پانی سے چلتے ہیں، جیسے سیلاب اور tsunami۔",
            "hazard risk کسی قدرتی واقعے سے متاثر ہونے کا امکان ہے۔",
            "لوگ اکثر یہ خطرہ قبول کر لیتے ہیں، کیونکہ اس جگہ کے فائدے بڑے ہوتے ہیں۔",
            "کچھ لوگوں کے پاس یہ انتخاب بہت کم ہوتا ہے کہ وہ کہاں رہیں۔",
            "شہر بڑھتے ہیں تو زیادہ لوگ خطرے والی جگہوں پر رہنے لگتے ہیں۔",
            "اس لیے خطرے میں رہنے والے لوگوں کی تعداد بڑھتی جا رہی ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Event or hazard?",
          paragraphs: [
            "Your class started with a photograph of a road torn apart by the Alaska earthquake of 1964 and one question: what is the difference between a natural event and a natural hazard? The answer is people. A natural hazard is a naturally occurring event that poses a risk to humans and property. The Earth shakes, rivers rise and storms spin whether or not anyone is there. If that happens in a remote area, far from people and property, geographers call it a natural event. It only counts as a hazard when it will have an impact on society.",
            "The diagram you drew in your book shows this as two paths. Path one: a natural event, no people or property in the way, no hazard. Path two: the same natural event, but people and property are in its way, so it is a natural hazard and a possible disaster. The definition your class used goes one step further: a natural hazard officially becomes a natural disaster when it causes more than 10 deaths, injures more than 100 people, or does more than 16 million US dollars of damage.",
            "Keep this idea for the whole unit. Later you will meet the idea that tectonic events are natural physical processes that nobody causes, yet they only become hazards when people and property are affected. Where people live, and how well protected they are, decides how severe the effects will be."
          ],
          tip: "In a definition question, write both halves: a naturally occurring event AND the risk to people and property. Without the people, it is just an event."
        },
        {
          heading: "Three groups of natural hazard",
          paragraphs: [
            "Natural hazards are sorted by what drives them. Geological hazards, also called geophysical hazards, are driven by the Earth's own internal energy: plate tectonics, volcanoes and seismic activity (earthquakes). Atmospheric hazards are driven by processes at work in the atmosphere: tropical storms and droughts. Hydrological hazards are driven by water bodies, mainly the oceans: floods, storm surges and tsunamis. Notice where a tsunami sits. It is set off by an undersea earthquake, which is geological, but the hazard that arrives on the coast is a wall of water, so it is classed as hydrological.",
            "Your class looked at data on deaths from natural hazards in 2014. Hydrological hazards such as floods caused 66 % of the deaths, meteorological hazards such as storms 17 %, geophysical hazards such as earthquakes 11 % and climatological hazards such as drought 6 %. The data source splits the atmospheric group into two: meteorological (short-lived weather events) and climatological (long-lasting ones such as drought). Put together, atmospheric hazards caused 23 % of deaths that year, still well behind water.",
            "This matters for exam answers. The deadliest hazards are not always the most dramatic ones. In 2014 far more people died in floods than in earthquakes, partly because flooding happens in more places, more often, and in the lowland areas where most people live."
          ],
          worked: {
            q: "The 2014 data gives deaths by hazard group as hydrological 66 %, meteorological 17 %, geophysical 11 % and climatological 6 %. Check that the data is complete, and find the share of deaths caused by atmospheric hazards.",
            steps: [
              "Add the four percentages: 66 + 17 + 11 + 6 = 100. The data covers all deaths, so a pie chart or divided bar would be complete.",
              "Atmospheric hazards are the meteorological and climatological groups together: 17 + 6 = 23 %.",
              "Compare: hydrological 66 % is almost three times the atmospheric 23 %, and six times the geophysical 11 %.",
              "In a divided bar chart of 10 cm, each 1 % is 1 mm, so the hydrological section is 66 mm long."
            ],
            answer: "The percentages total 100, so the data is complete. Atmospheric hazards caused 23 % of deaths in 2014.",
            checks: [
              { expr: "DEATHS_HYDRO+DEATHS_METEO+DEATHS_GEO+DEATHS_CLIM", value: 100, tol: 0 },
              { expr: "DEATHS_METEO+DEATHS_CLIM", value: 23, tol: 0 },
              { expr: "DEATHS_HYDRO/DEATHS_GEO", value: 6, tol: 0 },
              { expr: "DEATHS_HYDRO*100/100", value: 66, tol: 0 }
            ]
          },
          tip: "When you present percentage data, check it adds to 100 before you draw anything. Geographers always check the total."
        },
        {
          heading: "Hazard risk, and why people accept it",
          paragraphs: [
            "Hazard risk is the probability of being affected by a natural event. It is not the same as the event itself: a huge volcano with nobody near it is a low risk, while a small flood through a crowded city is a high one. People raise their own hazard risk by living near rivers, on coasts or beside volcanoes. Why? Because they weigh up the costs and the benefits. The soil is fertile, the land is cheap, the jobs are there, the view is good, and because big events do not happen often, people decide to accept the risk. Some people have little choice: they live where they can afford to live.",
            "Your class sorted the reasons people are exposed to hazards into factors, and then studied an exam-style question about human developments that increase the risk. The developments the model answer used were these. Cities grow onto floodplains to meet the demand for homes, which raises the flood risk. In poorer countries, informal housing is built on steep slopes, where heavy rain can bring mudflows that destroy houses. In Indonesia, farmers work the fertile slopes of active volcanoes, so an eruption can wipe out people and livelihoods. And pressure on land pushes settlement onto coasts, which brings tsunami risk, as around the Indian Ocean.",
            "The stretch question asked why more people will be at risk in future. Build your answer from the same ideas: the world's population is growing, cities are growing fastest in the lowlands and on the coasts where hazards strike, and poverty pushes people onto the most dangerous land."
          ],
          tip: "An explain question about human developments needs two specific developments and a clear link from each to the risk. A general point such as a bigger population scores low."
        },
        {
          heading: "Reading an exam question",
          paragraphs: [
            "Before you write, deconstruct the question. Find the command word: describe means say what is there; explain means give reasons, make clear how or why; assess or evaluate means weigh up and reach a judgement. Count the marks and work out how many minutes the question deserves, as your exam-question sheet asks you to do. Then list the five things your answer must include: key words, concepts, knowledge, examples and, for the high-tariff questions, a conclusion.",
            "The four assessment objectives tell you what the examiner is looking for. AO1 is your knowledge of locations, places, processes and environments at different scales. AO2 is your understanding of concepts and how they link to that knowledge. AO3 is applying your knowledge and understanding to interpret, analyse and evaluate. AO4 is selecting and using skills and techniques, such as reading a map or a graph. A four-mark explain question is mostly AO1 and AO2; a nine-mark assess question leans on AO3."
          ],
          tip: "Explain two developments (4 marks) is not a list. Two developments, each with a because, is the whole answer."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is a geological (geophysical) natural hazard?", options: ["A volcanic eruption", "A tropical storm", "A river flood", "A drought"], answer: 0, why: "Geological hazards are driven by the Earth's own internal energy: plate tectonics, volcanoes and earthquakes. Storms and drought are atmospheric; floods are hydrological.",
          feedback: [
            "",
            "A tropical storm is driven by processes in the atmosphere, so it is an atmospheric hazard. Geological hazards come from energy inside the Earth, like a volcanic eruption.",
            "A river flood is driven by water, so it is a hydrological hazard. The geological group is earthquakes and volcanoes, driven by the Earth's internal energy.",
            "A drought is a long-lasting atmospheric (climatological) hazard. Geological hazards are driven by the Earth's internal energy, such as a volcanic eruption."
          ] },
        { kind: "gap", q: "A natural event becomes a natural hazard when it poses a risk to ___.", answer: "people and property", options: ["people and property", "the environment", "other natural events"], why: "A natural hazard is a naturally occurring event that poses a risk to humans and property. Without people in its way, it is only a natural event.",
          feedback: {
            "the environment": "Natural events change the environment all the time without being hazards: a volcano on an empty island harms no one. It is the risk to people and property that makes an event a hazard.",
            "other natural events": "One natural event can trigger another, such as an earthquake causing a tsunami, but that does not make it a hazard. A hazard is defined by the risk to people and property."
          } },
        { kind: "mcq", q: "What does hazard risk mean?", options: ["The probability of being affected by a natural event", "The size of a natural event on the Richter scale", "The number of people killed by a natural event", "The cost of repairing damage after a natural event"], answer: 0, why: "Hazard risk is the probability (chance) of being affected by a natural event. People weigh this chance against the benefits of living in a place.",
          feedback: [
            "",
            "The Richter scale measures the strength of an earthquake, not the chance of people being affected. Hazard risk is a probability: how likely people are to be affected.",
            "Deaths are an effect of a hazard that has already happened. Hazard risk looks forward: it is the probability of being affected by a natural event.",
            "Repair costs are an economic effect after the event. Hazard risk is the probability of being affected in the first place."
          ] }
      ],
      modules: [
        {
          title: "Three groups, three drivers",
          task: {
            kind: "match",
            q: "Match each group of natural hazards to what drives it.",
            pairs: [
              ["Geological", "Driven by energy from inside the Earth: plate tectonics, volcanoes and earthquakes"],
              ["Atmospheric", "Driven by processes at work in the atmosphere: tropical storms and droughts"],
              ["Hydrological", "Driven by water bodies, mainly the oceans: floods, storm surges and tsunamis"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Look inside each group name. Geo means Earth, so geological hazards come from the Earth itself.",
                "Atmosphere is the air around the planet, so atmospheric hazards are weather and climate events.",
                "Hydro means water, so hydrological hazards are floods, surges and tsunamis.",
                "Check the examples in each description against the group name before you confirm."
              ],
              example: {
                q: "Match: a wildfire sweeping through dry forest; a hailstorm damaging crops. Choices: an atmospheric event; an event driven by heat and drought conditions on the land surface.",
                steps: ["A hailstorm forms in the atmosphere.", "A wildfire needs dry conditions on the ground, so it is driven by what happens on the land surface."],
                answer: "Hailstorm: an atmospheric event. Wildfire: an event driven by heat and drought conditions on the land surface."
              }
            },
            core: { hint: "Earth, air, water. Each group name tells you where the energy comes from." },
            stretch: { extend: "A tsunami is triggered by an earthquake but classed as a hydrological hazard. Explain why geographers class it by the hazard that arrives, not by its trigger." }
          },
          explain: "Say, in one sentence, why a tsunami is classed as hydrological even though an earthquake causes it.",
          why: "Geological hazards are driven by the Earth's internal energy (earthquakes, volcanoes); atmospheric hazards by processes in the atmosphere (storms, droughts); hydrological hazards by water, mainly the oceans (floods, storm surges, tsunamis)."
        },
        {
          title: "Reading the 2014 deaths data",
          task: {
            kind: "numeric",
            q: "In 2014, hydrological hazards such as floods caused 66 % of all deaths from natural hazards. What percentage of deaths were caused by all the other groups together?",
            answer: 34, tolerance: 0, units: "%", check: "100-DEATHS_HYDRO",
            misconceptions: [
              { answer: 66, says: "66 % is the hydrological share itself. The question asks for everything else, so subtract it from the whole: 100 − 66 = 34 %.", check: "DEATHS_HYDRO" },
              { answer: 44, says: "You have subtracted 66 from 110, or slipped a digit. The whole is 100 %, so 100 − 66 = 34 %.", check: "110-DEATHS_HYDRO" },
              { answer: 17, says: "17 % is the meteorological share alone. The other groups together are meteorological, geophysical and climatological: 17 + 11 + 6 = 34 %, which is 100 − 66.", check: "DEATHS_METEO" }
            ]
          },
          contexts: [
            { label: "Pie chart", q: "A pie chart of deaths from natural hazards in 2014 gives the hydrological slice as 66 %. What percentage of the pie do the other three slices make up together?", check: "100-DEATHS_HYDRO" },
            { label: "Divided bar", q: "On a divided bar chart of 2014 hazard deaths, the hydrological section is 66 % of the bar. What percentage of the bar is left for the other groups?", check: "100-DEATHS_HYDRO" },
            { label: "News report", q: "A report says 66 % of people killed by natural hazards in 2014 died in floods and other hydrological events. What percentage died in all other kinds of hazard?", check: "100-DEATHS_HYDRO" }
          ],
          explain: "Say, in one sentence, why the other groups must add up to the number you found.",
          levels: {
            support: {
              steps: [
                "Percentages of a whole always add to 100.",
                "You know one part: hydrological is 66 %.",
                "Everything else is the whole minus that part: 100 − 66.",
                "Check against the data: meteorological 17 + geophysical 11 + climatological 6 should give the same answer."
              ],
              example: {
                q: "In another year, atmospheric hazards caused 40 % of deaths. What percentage was caused by all the other groups together?",
                steps: ["The whole is 100 %.", "Subtract the known part: 100 − 40 = 60."],
                answer: "60 %",
                checks: [{ expr: "100-40", value: 60, tol: 0 }]
              }
            },
            core: { hint: "The four groups make the whole. Take the hydrological share away from 100." },
            stretch: { extend: "Explain why floods killed far more people than earthquakes in 2014, using the ideas of frequency, where people live and hazard risk." }
          },
          why: "The four groups make up 100 % of deaths. Taking away the hydrological 66 % leaves 34 % for the rest, which matches 17 + 11 + 6."
        },
        {
          title: "Why more people are at risk",
          task: {
            kind: "written",
            q: "Suggest two reasons why the number of people at risk from natural hazards is likely to increase in the future. (4 marks)",
            marks: 4,
            criteria: [
              "Gives two different reasons, not one reason said twice",
              "Links each reason clearly to more people being exposed to a hazard (a because or so that)",
              "Uses a specific development or place rather than a general statement such as more people",
              "Uses the key words natural hazard, hazard risk or exposed correctly"
            ],
            model: "One reason is that cities keep growing onto floodplains to meet the demand for homes, so every new estate beside a river puts more people and property in the path of floods and raises the hazard risk. A second reason is that in poorer countries people who cannot afford safe land build informal housing on steep slopes or on coasts, as around the Indian Ocean, so more people are exposed to mudflows and tsunamis than before."
          },
          levels: {
            support: {
              steps: [
                "Reason 1: pick a human development from the lesson (building on floodplains, housing on steep slopes, farming on volcano slopes, settling on coasts).",
                "Add the link: because of this, more people are in the path of which hazard?",
                "Reason 2: pick a different development and do the same.",
                "Read it back: two developments, two links. That is four marks."
              ],
              example: {
                q: "In one sentence, suggest one reason why more people are at risk from volcanic eruptions in Indonesia than fifty years ago.",
                steps: ["Name the development: farming on the fertile slopes of active volcanoes.", "Link it: more farmers live on the slopes, so an eruption affects more people."],
                answer: "More people farm the fertile slopes of Indonesia's active volcanoes than fifty years ago, so when a volcano erupts, more people and their livelihoods are in its path."
              }
            },
            core: { hint: "Development plus link, twice. Floodplain housing and coastal settlement are the easiest pair to explain." },
            stretch: { extend: "Add a third sentence arguing that wealth can lower hazard risk even as population rises, using an example of protection from later in the unit." }
          },
          explain: "Say, in one sentence, why a general answer such as the population is growing scores fewer marks than a named development.",
          why: "The marks come from two specific developments, each linked to exposure: floodplain housing raises flood risk; informal housing on slopes or coasts raises mudflow and tsunami risk. Generic points about population size stay at the lowest level."
        }
      ]
    },

    /* ───────────── 2 · plate tectonics ───────────── */
    {
      key: "plate-tectonics", n: 2, title: "A restless planet: the Earth's structure and moving plates",
      lead: "How old the Earth is and how we know, the layers inside it, why its plates move, and the jigsaw clue that made Alfred Wegener suggest the continents had drifted apart.",
      covers: [3],
      pretext: {
        words: [
          { word: "crust", means: "the thin, solid outer layer of the Earth that we live on", sentence: "The crust is broken into pieces called plates." },
          { word: "mantle", means: "the thick layer of very hot rock under the crust", sentence: "Hot rock in the mantle moves very slowly." },
          { word: "convection current", means: "the slow circling movement of hot material rising and cooler material sinking", sentence: "Convection currents in the mantle drag the plates along." },
          { word: "tectonic plate", means: "one of the huge slabs of crust and upper mantle that fit together like a jigsaw", sentence: "The Pacific plate is the largest tectonic plate." },
          { word: "oceanic plate", means: "a plate with ocean on top, made of denser rock", sentence: "An oceanic plate sinks under a continental plate when they meet." },
          { word: "continental plate", means: "a plate with land on top, made of lighter rock", sentence: "The Eurasian plate is a continental plate." }
        ],
        passage: [
          "The Earth is about 4.54 billion years old.",
          "Scientists worked this out by studying rocks.",
          "The Earth has layers.",
          "The thin outer layer is the crust.",
          "Under it is the mantle, a thick layer of very hot rock.",
          "At the centre are the outer core and the inner core.",
          "The crust and the top of the mantle are broken into huge pieces called tectonic plates.",
          "They fit together like an uneven jigsaw.",
          "Hot rock in the mantle rises, spreads out, cools and sinks.",
          "These convection currents move the plates very slowly.",
          "Oceanic plates are denser than continental plates.",
          "In 1912 Alfred Wegener said the continents had once been joined together.",
          "Few people believed him until the 1950s."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الطبقة الخارجية الصلبة الرقيقة من الأرض التي نعيش عليها (crust)",
            "الطبقة السميكة من الصخر الحارّ جدًّا تحت القشرة (mantle)",
            "حركة دائرية بطيئة ترتفع فيها المادّة الحارّة وتهبط المادّة الأبرد (convection current)",
            "واحدة من الألواح الضخمة من القشرة وأعلى الوشاح التي تتلاقى كقطع أحجية (tectonic plate)",
            "صفيحة فوقها محيط، وصخرها أكثف (oceanic plate)",
            "صفيحة فوقها يابسة، وصخرها أخفّ (continental plate)"
          ],
          "passage": [
            "عمر الأرض نحو 4.54 مليار سنة.",
            "وقد توصّل العلماء إلى هذا بدراسة الصخور.",
            "وللأرض طبقات.",
            "فالطبقة الخارجية الرقيقة هي القشرة.",
            "وتحتها الوشاح، وهو طبقة سميكة من الصخر الحارّ جدًّا.",
            "وفي المركز اللبّ الخارجي واللبّ الداخلي.",
            "والقشرة وأعلى الوشاح مكسورة إلى قطع ضخمة تُسمّى الصفائح التكتونية.",
            "وهي تتلاقى كأحجية غير منتظمة.",
            "والصخر الحارّ في الوشاح يرتفع وينتشر ويبرد ويهبط.",
            "وتيّارات الحمل هذه تحرّك الصفائح ببطء شديد.",
            "والصفائح المحيطية أكثف من الصفائح القارّية.",
            "وفي 1912 قال ألفريد فيغنر (Alfred Wegener) إنّ القارّات كانت يومًا متّصلة.",
            "ولم يصدّقه إلّا قليل من الناس حتى سنوات 1950."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "cienka, twarda zewnętrzna warstwa Ziemi, na której żyjemy (crust)",
            "gruba warstwa bardzo gorących skał pod skorupą (mantle)",
            "powolny ruch po okręgu, w którym gorący materiał unosi się, a chłodniejszy opada (convection current)",
            "jeden z ogromnych bloków skorupy i górnego płaszcza, które pasują do siebie jak puzzle (tectonic plate)",
            "płyta z oceanem na górze, zbudowana z gęstszych skał (oceanic plate)",
            "płyta z lądem na górze, zbudowana z lżejszych skał (continental plate)"
          ],
          "passage": [
            "Ziemia ma około 4.54 miliarda lat.",
            "Naukowcy wyliczyli to, badając skały.",
            "Ziemia ma warstwy.",
            "Cienka warstwa zewnętrzna to skorupa.",
            "Pod nią jest płaszcz, gruba warstwa bardzo gorących skał.",
            "W samym środku są jądro zewnętrzne i jądro wewnętrzne.",
            "Skorupa i górna część płaszcza są popękane na ogromne kawałki zwane płytami tektonicznymi.",
            "Pasują do siebie jak nierówne puzzle.",
            "Gorąca skała w płaszczu unosi się, rozpływa, stygnie i opada.",
            "Te prądy konwekcyjne (convection currents) przesuwają płyty bardzo wolno.",
            "Płyty oceaniczne są gęstsze niż płyty kontynentalne.",
            "W 1912 roku Alfred Wegener powiedział, że kontynenty były kiedyś połączone.",
            "Niewielu mu wierzyło aż do lat pięćdziesiątych XX wieku (the 1950s)."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a camada exterior da Terra, fina e sólida, onde vivemos (crust, crosta)",
            "a camada espessa de rocha muito quente debaixo da crosta (mantle, manto)",
            "o movimento lento e circular de material quente a subir e de material mais frio a descer (convection current, corrente de convecção)",
            "uma das enormes lajes de crosta e de manto superior que encaixam como um puzzle/quebra-cabeça (tectonic plate, placa tectónica/tectônica)",
            "uma placa com oceano por cima, feita de rocha mais densa (oceanic plate, placa oceânica)",
            "uma placa com terra por cima, feita de rocha mais leve (continental plate, placa continental)"
          ],
          "passage": [
            "A Terra tem cerca de 4.54 mil milhões/bilhões de anos.",
            "Os cientistas descobriram isto estudando as rochas.",
            "A Terra tem camadas.",
            "A camada exterior, fina, é a crosta.",
            "Debaixo dela está o manto, uma camada espessa de rocha muito quente.",
            "No centro estão o núcleo externo e o núcleo interno.",
            "A crosta e o topo do manto estão partidos em pedaços enormes chamados placas tectónicas/tectônicas.",
            "Encaixam como um puzzle/quebra-cabeça irregular.",
            "A rocha quente do manto sobe, espalha-se, arrefece/esfria e desce.",
            "Estas correntes de convecção (convection currents) movem as placas muito lentamente.",
            "As placas oceânicas são mais densas do que as placas continentais.",
            "Em 1912 Alfred Wegener disse que os continentes já tinham estado unidos.",
            "Poucas pessoas acreditaram nele até aos anos 1950."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "lakabka dibadda ee khafiifka oo adag ee Dhulka oo aan ku noolnahay",
            "lakabka qaro weyn ee dhagax aad u kulul oo crust-ka hoostiisa yaal",
            "socodka tartiib ah oo wareegaya ee walxaha kulul ay kacaan oo kuwa qabow hoos u degaan",
            "mid ka mid ah dhejisyada waaweyn ee crust-ka iyo mantle-ka sare oo sida jigsaw isugu habboon",
            "plate badweyn ku dul yaal, oo laga sameeyay dhagax ka cufan",
            "plate dhul ku dul yaal, oo laga sameeyay dhagax ka fudud"
          ],
          "passage": [
            "Dhulku wuxuu jiraa qiyaastii 4.54 bilyan oo sano.",
            "Saynisyahannadu tan waxay ku ogaadeen baritaanka dhagaxyada.",
            "Dhulku wuxuu leeyahay lakabyo.",
            "Lakabka dibadda ee khafiifka waa crust-ka.",
            "Hoostiisa waa mantle-ka, oo ah lakab qaro weyn oo dhagax aad u kulul ah.",
            "Dhexda waxaa yaalla outer core-ka iyo inner core-ka.",
            "Crust-ka iyo mantle-ka sare waxaa loo kala jabiyay qaybo waaweyn oo la yiraahdo tectonic plates.",
            "Waxay isugu habboon yihiin sidii jigsaw aan siman.",
            "Dhagaxa kulul ee mantle-ka ku jira wuu kacaa, wuu fidaa, wuu qaboowdaa oo wuu hoos u degaa.",
            "Convection currents-kan waxay plates-ka si aad u gaabis ah u dhaqaajiyaan.",
            "Oceanic plates way ka cufan yihiin continental plates.",
            "1912-kii Alfred Wegener wuxuu yiri qaaraduhu mar hore way isku xirnaayeen.",
            "Dad yar ayaa rumeeyay ilaa 1950-meeyadii."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "тонкий твердий зовнішній шар Землі, на якому ми живемо (crust)",
            "товстий шар дуже гарячої породи під корою (mantle)",
            "повільний круговий рух, у якому гарячий матеріал піднімається, а холодніший опускається (convection current)",
            "одна з величезних плит кори і верхньої мантії, які складаються разом, наче пазл (tectonic plate)",
            "плита, на якій лежить океан, із щільнішої породи (oceanic plate)",
            "плита, на якій лежить суходіл, із легшої породи (continental plate)"
          ],
          "passage": [
            "Землі приблизно 4.54 мільярда років.",
            "Науковці з’ясували це, вивчаючи породи.",
            "Земля має шари.",
            "Тонкий зовнішній шар — це кора.",
            "Під нею мантія, товстий шар дуже гарячої породи.",
            "У центрі — зовнішнє ядро і внутрішнє ядро.",
            "Кора і верх мантії розбиті на величезні частини, які називають тектонічними плитами.",
            "Вони складаються разом, наче нерівний пазл.",
            "Гаряча порода в мантії піднімається, розтікається, охолоджується й опускається.",
            "Ці конвекційні течії (convection currents) рухають плити дуже повільно.",
            "Океанічні плити щільніші за континентальні.",
            "У 1912 році Альфред Веґенер (Alfred Wegener) сказав, що континенти колись були з’єднані разом.",
            "Мало хто вірив йому до 1950-х років."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "زمین کی پتلی، ٹھوس بیرونی تہہ جس پر ہم رہتے ہیں (crust)",
            "crust کے نیچے بہت گرم چٹان کی موٹی تہہ (mantle)",
            "گرم مادے کے اوپر اٹھنے اور ٹھنڈے مادے کے نیچے بیٹھنے کی آہستہ گول حرکت (convection current)",
            "crust اور اوپر کے mantle کے اُن بہت بڑے تختوں میں سے ایک جو جگ سا پزل کی طرح آپس میں جڑے ہیں (tectonic plate)",
            "وہ plate جس کے اوپر سمندر ہو، اور جو زیادہ کثیف چٹان سے بنی ہو (oceanic plate)",
            "وہ plate جس کے اوپر خشکی ہو، اور جو ہلکی چٹان سے بنی ہو (continental plate)"
          ],
          "passage": [
            "زمین تقریباً 4.54 ارب سال پرانی ہے۔",
            "سائنس دانوں نے چٹانوں کا مطالعہ کر کے یہ معلوم کیا۔",
            "زمین کی تہیں ہیں۔",
            "پتلی بیرونی تہہ crust ہے۔",
            "اس کے نیچے mantle ہے، بہت گرم چٹان کی ایک موٹی تہہ۔",
            "بیچ میں outer core اور inner core ہیں۔",
            "crust اور mantle کا اوپر کا حصہ بہت بڑے ٹکڑوں میں ٹوٹا ہوا ہے، جنھیں tectonic plates کہتے ہیں۔",
            "یہ ایک بے ترتیب جگ سا پزل کی طرح آپس میں جڑے ہیں۔",
            "mantle کی گرم چٹان اوپر اٹھتی ہے، پھیلتی ہے، ٹھنڈی ہوتی ہے اور نیچے بیٹھ جاتی ہے۔",
            "یہی convection currents، plates کو بہت آہستہ سرکاتے ہیں۔",
            "oceanic plates، continental plates سے زیادہ کثیف ہوتی ہیں۔",
            "1912 میں الفریڈ ویگنر (Alfred Wegener) نے کہا کہ براعظم ایک زمانے میں آپس میں جڑے ہوئے تھے۔",
            "1950 کی دہائی تک بہت کم لوگ ان کی بات مانتے تھے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "How old is the Earth?",
          paragraphs: [
            "Your lesson began with a question that sits beside the biggest questions people ask: how old is the Earth, and what evidence can you use to support your answer? Until quite recently, people could only guess. Scientists now put the Earth's age at approximately 4.54 billion years. That is 4,540 million years, a number so large that the whole of human history is a thin line at the very end of it.",
            "The evidence comes from rocks. By studying how rock layers formed on top of one another and how the minerals in them have changed over time, geologists have built a geological timescale, a calendar of the Earth's past. The same rocks hold the clue to how the surface has changed: the continents have not always been where they are now.",
            "A number this large is a maths skill as well as a fact. One billion is a thousand million, so 4.54 billion is 4.54 × 1000 million = 4540 million. Being able to move between billions and millions matters when you compare the age of the Earth with the time since the plates last moved a continent."
          ],
          worked: {
            q: "The Earth is about 4.54 billion years old. Write this age in millions of years, and as a full number.",
            steps: [
              "One billion is one thousand million, so multiply the billions by 1000 to get millions: 4.54 × 1000 = 4540 million years.",
              "One million is 1,000,000 (six zeros), so 4540 million is 4540 followed by six zeros: 4,540,000,000.",
              "Check the sense: a billion has nine zeros, and 4,540,000,000 has nine digits after the 4. It matches 4.54 billion."
            ],
            answer: "4540 million years, or 4,540,000,000 years.",
            checks: [
              { expr: "EARTH_AGE_BN*1000", value: 4540, tol: 0 },
              { expr: "EARTH_AGE_BN*1000000000", value: 4540000000, tol: 0 }
            ]
          },
          tip: "Billion to million: multiply by 1000. Million to billion: divide by 1000. Write the units every time."
        },
        {
          heading: "Inside the Earth",
          paragraphs: [
            "The Earth is built in layers. On the outside is the crust, the thin solid shell we live on. Under it is the mantle, a very thick layer of hot rock that can flow extremely slowly. Beneath that is the outer core, and at the centre the inner core, the hottest part of the planet. Every tectonic hazard begins with processes deep inside the Earth, so you need the layers in order from the surface inwards: crust, mantle, outer core, inner core.",
            "A tectonic plate is the crust plus the upper part of the mantle, moving as one slab. What moves it is convection: heat from deep inside the Earth makes material in the mantle rise, spread out beneath the plates, cool and sink again. This slow circling drags the plates along a few centimetres a year. Your class notes put these currents in the core; in fact they are in the mantle, the layer directly beneath the plates, which the core heats from below.",
            "Everything tectonic comes from this movement. Plates move towards each other, away from each other or side by side, and each kind of movement makes its own hazards and landforms. That is the subject of the next chapter."
          ],
          tip: "Learn the layers as a journey inwards: crust, mantle, outer core, inner core. The plates are crust plus upper mantle, not crust alone."
        },
        {
          heading: "Wegener's jigsaw",
          paragraphs: [
            "Plate tectonic theory says that the huge pieces of rock that make up the Earth's surface are moving: apart, towards or against one another. The first person to put the idea forward was Alfred Wegener, in 1912. Hardly anyone believed him, and the theory was not accepted until the 1950s, long after his death.",
            "Wegener's evidence was simple to see and hard to explain any other way. The shapes of the continents seem to fit together like a jigsaw: the east coast of South America tucks into the west coast of Africa. And the same species of plants and animals, including fossils, are found on continents now separated by thousands of kilometres of ocean. The simplest explanation was that the continents were once joined in a single landmass, which your video called Pangaea, and have drifted apart since.",
            "Why the long wait? Wegener could not explain what force could move a continent. Once scientists understood convection currents in the mantle and found the new crust forming along ocean ridges, the mechanism was there and the theory was accepted."
          ],
          tip: "For Wegener, learn one date (1912), one decade of acceptance (the 1950s) and two pieces of evidence (the jigsaw fit and matching species)."
        },
        {
          heading: "Plates and where the hazards are",
          paragraphs: [
            "The Earth's crust is divided into plates that fit together like an uneven jigsaw. There are two types. Oceanic plates have ocean on top and are made of denser rock. Continental plates carry the land and are made of lighter, less dense rock. The difference in density decides what happens when two plates meet: the denser oceanic plate is the one that sinks.",
            "In class you named the seven major plates on a globe. The ones that run through this unit are the Pacific, North American, South American, Eurasian, African, Nazca and Indo-Australian plates. The place where two plates meet is called a plate boundary or plate margin. Look at a map of the world's volcanoes and nearly all the red dots sit along these boundaries; earthquakes cluster along them too. How the plates are moving at a boundary decides which hazard occurs there."
          ],
          tip: "On a blank map, draw the plate boundaries first. The volcanoes and earthquakes will almost all fall on your lines."
        }
      ],
      gate: [
        { kind: "mcq", q: "What causes the Earth's tectonic plates to move?", options: ["Convection currents in the mantle", "The pull of the Moon on the oceans", "Winds in the atmosphere", "Rivers eroding the crust"], answer: 0, why: "Heat from inside the Earth sets up convection currents in the mantle: hot material rises, spreads out, cools and sinks, dragging the plates above it.",
          feedback: [
            "",
            "The Moon pulls the oceans and makes tides, but it does not move the solid plates. The plates ride on convection currents in the mantle.",
            "Wind works on the surface of the Earth and is far too weak to shift a plate. The force comes from below: convection currents in the mantle.",
            "Rivers wear away the surface of the crust, but they cannot move a plate. Plates are moved by convection currents in the hot mantle beneath them."
          ] },
        { kind: "numeric", q: "In which year did Alfred Wegener first put forward his theory that the continents had moved?", answer: 1912, tolerance: 0, units: "", check: "WEGENER_YEAR", why: "Wegener proposed the theory in 1912, but it was not accepted until the 1950s.",
          misconceptions: [
            { answer: 1950, says: "The 1950s is when the theory was finally accepted, not when Wegener first proposed it. He put the idea forward in 1912.", check: "ACCEPTED_FROM" },
            { answer: 1921, says: "You have the right digits in the wrong order. Wegener put the theory forward in 1912.", check: "1921" },
            { answer: 1912+100, says: "That is a century too late. Wegener was writing before the First World War, in 1912.", check: "WEGENER_YEAR+100" }
          ] },
        { kind: "gap", q: "Oceanic plates are ___ than continental plates, so they sink beneath them when the two meet.", answer: "denser", options: ["denser", "lighter", "thicker"], why: "Oceanic plates are made of denser rock than continental plates, so at a destructive boundary the oceanic plate is the one forced down into the mantle.",
          feedback: {
            "lighter": "If oceanic plates were lighter they would float over the continental plate, not sink beneath it. They are denser, which is why they are forced down.",
            "thicker": "Thickness is not what decides which plate sinks; density is. Oceanic plates are made of denser rock, so they are the ones forced down into the mantle."
          } }
      ],
      modules: [
        {
          title: "A journey to the centre",
          task: {
            kind: "order",
            q: "Put the Earth's layers in order, starting at the surface and travelling inwards.",
            items: [
              "The crust: the thin, solid outer layer we live on",
              "The mantle: a very thick layer of hot rock that moves slowly",
              "The outer core",
              "The inner core: the hottest part, at the very centre"
            ]
          },
          contexts: [
            { label: "Drilling down", q: "Imagine a drill that could reach the centre of the Earth. Put the layers in the order the drill would pass through them, from the surface inwards." },
            { label: "Cross-section", q: "You are labelling a cross-section diagram of the Earth from the outside edge to the middle. Put the layers in order from the outside in." }
          ],
          levels: {
            support: {
              steps: [
                "Start where you are standing: the layer under your feet is the first one.",
                "Next comes the thick hot layer that the plates ride on.",
                "The core is in the middle and has two parts. Outer means further from the centre, so it comes before inner.",
                "The last one is the hottest point, right at the centre."
              ],
              example: {
                q: "Put these parts of an apple in order from the outside to the middle: core, skin, flesh.",
                steps: ["The skin is the outside.", "The flesh is under the skin.", "The core is in the middle."],
                answer: "Skin, flesh, core."
              }
            },
            core: { hint: "Thin and cold on the outside, hot and heavy in the middle. Outer before inner." },
            stretch: { extend: "Explain which two layers make up a tectonic plate, and why the layer beneath them is the one that moves the plates." }
          },
          explain: "Say, in one sentence, which layer the convection currents that move the plates are found in.",
          why: "From the surface inwards: crust, mantle, outer core, inner core. The plates are crust plus upper mantle, carried along by convection currents in the mantle."
        },
        {
          title: "The long wait for Wegener",
          task: {
            kind: "numeric",
            q: "Alfred Wegener put forward his theory in 1912. It was not accepted until the 1950s. Taking 1950 as the earliest year of acceptance, how many years did the world take to believe him?",
            answer: 38, tolerance: 0, units: "years", check: "ACCEPTED_FROM-WEGENER_YEAR",
            misconceptions: [
              { answer: 48, says: "That is counting from 1912 to the end of the 1950s, or a slip of ten years. From 1912 to 1950 is 1950 − 1912 = 38 years.", check: "ACCEPTED_FROM+10-WEGENER_YEAR" },
              { answer: 42, says: "You may have subtracted 1908 or 1912 from 1950 wrongly. Check: 1950 − 1912 = 38 years.", check: "ACCEPTED_FROM-WEGENER_YEAR+4" },
              { answer: 3862, says: "You have added the two years. The gap between them is the difference: 1950 − 1912 = 38 years.", check: "ACCEPTED_FROM+WEGENER_YEAR" }
            ]
          },
          contexts: [
            { label: "Timeline", q: "On a timeline, Wegener's theory is marked at 1912 and its acceptance at 1950. How many years apart are the two marks?", check: "ACCEPTED_FROM-WEGENER_YEAR" },
            { label: "Documentary", q: "A documentary says Wegener published in 1912 and that scientists finally accepted plate tectonics around 1950. For how many years was his idea rejected?", check: "ACCEPTED_FROM-WEGENER_YEAR" },
            { label: "A scientist's lifetime", q: "A scientist born in 1912, the year Wegener spoke out, lived to see the theory accepted in 1950. How old was she then?", check: "ACCEPTED_FROM-WEGENER_YEAR" }
          ],
          explain: "Say, in one sentence, why scientists took so long to accept Wegener's theory.",
          levels: {
            support: {
              steps: [
                "Write the later year first: 1950.",
                "Subtract the earlier year: 1950 − 1912.",
                "Do it in steps: 1950 − 1900 = 50, then 50 − 12 = 38.",
                "Check by adding back: 1912 + 38 = 1950."
              ],
              example: {
                q: "An idea proposed in 1859 was accepted in 1900. How many years did that take?",
                steps: ["Later year minus earlier year: 1900 − 1859.", "1900 − 1800 = 100, then 100 − 59 = 41."],
                answer: "41 years",
                checks: [{ expr: "1900-1859", value: 41, tol: 0 }]
              }
            },
            core: { hint: "Later year minus earlier year. The 1950s starts at 1950." },
            stretch: { extend: "Explain what evidence, found after Wegener's death, finally convinced scientists that the plates move." }
          },
          why: "1950 − 1912 = 38 years. Wegener had the evidence (the jigsaw fit and matching species) but not the mechanism; convection currents in the mantle supplied it later."
        },
        {
          title: "Words for a moving planet",
          task: {
            kind: "match",
            q: "Match each key word to its meaning.",
            pairs: [
              ["Crust", "The thin, solid outer layer of the Earth"],
              ["Mantle", "The thick layer of very hot, slowly moving rock beneath the crust"],
              ["Tectonic plate", "A huge slab of crust and upper mantle that moves on convection currents"],
              ["Plate margin", "The place where two tectonic plates meet, also called a plate boundary"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Crust is the word for the outside of a loaf; here it is the outside of the Earth.",
                "The mantle is the big layer under the crust.",
                "A plate is a piece; a tectonic plate is a piece of the Earth's surface that moves.",
                "A margin is an edge. A plate margin is where the edges of two plates meet."
              ],
              example: {
                q: "Match: magma, lava. Choices: molten rock that has reached the surface; molten rock that is still underground.",
                steps: ["Magma is underground.", "Lava is the name once it erupts onto the surface."],
                answer: "Magma: molten rock still underground. Lava: molten rock that has reached the surface."
              }
            },
            core: { hint: "Two layers, one piece, one edge." },
            stretch: { extend: "Explain why oceanic and continental plates behave differently when they meet, using the word density." }
          },
          explain: "Say, in one sentence, what a tectonic plate is made of.",
          why: "The crust is the outer layer; the mantle is the hot layer beneath it; a tectonic plate is crust plus upper mantle moving on convection currents; a plate margin or boundary is where two plates meet."
        }
      ]
    },

    /* ───────────── 3 · plate boundaries ───────────── */
    {
      key: "plate-boundaries", n: 3, title: "Four kinds of plate boundary",
      lead: "What happens at constructive, destructive, conservative and collision boundaries, the hazards and landforms each makes, a named example of every one, and what the case-study table shows about margins and magnitude.",
      covers: [4, 5],
      pretext: {
        words: [
          { word: "subduction", means: "one plate being forced down under another into the mantle", sentence: "Subduction destroys the oceanic plate and makes volcanoes." },
          { word: "magma", means: "melted rock below the surface", sentence: "Magma rises through the gap where two plates pull apart." },
          { word: "ocean trench", means: "a deep valley in the sea floor where a plate bends down", sentence: "A deep ocean trench forms at the point of subduction." },
          { word: "fold mountains", means: "mountains made by plates pushing the crust upwards", sentence: "The Himalayas are fold mountains." },
          { word: "fault", means: "a crack in the crust where two blocks of rock slide past each other", sentence: "San Francisco sits on the San Andreas Fault." },
          { word: "ocean ridge", means: "a long underwater mountain chain where new crust forms", sentence: "The Mid-Atlantic Ridge runs through Iceland." }
        ],
        passage: [
          "There are four kinds of plate boundary.",
          "At a constructive boundary two plates move apart.",
          "Magma rises into the gap and cools to make new crust.",
          "The Mid-Atlantic Ridge runs through Iceland.",
          "At a destructive boundary an oceanic plate meets a continental plate.",
          "The denser oceanic plate is forced down and destroyed.",
          "This makes volcanoes and earthquakes, like the Andes and Chile.",
          "At a conservative boundary two plates slide past each other.",
          "They lock, pressure builds, and then they jolt, causing an earthquake.",
          "The San Andreas Fault in California is one.",
          "At a collision boundary two continental plates meet head on.",
          "They are pushed up into fold mountains like the Himalayas.",
          "There are earthquakes but no volcanoes."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "دفع صفيحة إلى أسفل تحت صفيحة أخرى إلى الوشاح (subduction)",
            "صخر منصهر تحت السطح (magma)",
            "وادٍ عميق في قاع البحر حيث تنثني الصفيحة إلى أسفل (ocean trench)",
            "جبال تكوّنت بدفع الصفائح القشرة إلى أعلى (fold mountains)",
            "شقّ في القشرة تنزلق عنده كتلتا صخر إحداهما بجانب الأخرى (fault)",
            "سلسلة جبال طويلة تحت الماء تتكوّن عندها قشرة جديدة (ocean ridge)"
          ],
          "passage": [
            "لحدود الصفائح أربعة أنواع.",
            "فعند الحدّ البنّاء تتباعد صفيحتان.",
            "فترتفع الصهارة في الفُرجة وتبرد فتصنع قشرة جديدة.",
            "وحيد وسط الأطلسي (Mid-Atlantic Ridge) يمرّ بأيسلندا.",
            "وعند الحدّ الهدّام تلتقي صفيحة محيطية بصفيحة قارّية.",
            "فتُدفع الصفيحة المحيطية الأكثف إلى أسفل وتُدمَّر.",
            "وهذا يصنع براكين وزلازل، كما في الأنديز وتشيلي.",
            "وعند الحدّ المحافظ تنزلق صفيحتان إحداهما بجانب الأخرى.",
            "فتتشابكان ويتراكم الضغط، ثم تنتفضان فيحدث زلزال.",
            "وصدع سان أندرياس (San Andreas Fault) في كاليفورنيا واحد منها.",
            "وعند حدّ التصادم تلتقي صفيحتان قارّيتان وجهًا لوجه.",
            "فتُدفعان إلى أعلى فتصيران جبالًا التوائية كالهيمالايا.",
            "وفيها زلازل ولكن لا براكين."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "wciskanie jednej płyty pod drugą, w głąb płaszcza (subduction)",
            "stopiona skała pod powierzchnią (magma)",
            "głęboka dolina w dnie morza, gdzie płyta zagina się w dół (ocean trench)",
            "góry powstałe przez wypychanie skorupy w górę przez płyty (fold mountains)",
            "pęknięcie w skorupie, gdzie dwa bloki skał przesuwają się obok siebie (fault)",
            "długi podwodny łańcuch górski, w którym powstaje nowa skorupa (ocean ridge)"
          ],
          "passage": [
            "Są cztery rodzaje granic płyt.",
            "Na granicy konstruktywnej dwie płyty rozsuwają się od siebie.",
            "Magma wznosi się w szczelinę i stygnie, tworząc nową skorupę.",
            "Grzbiet Śródatlantycki (Mid-Atlantic Ridge) przechodzi przez Islandię.",
            "Na granicy destruktywnej płyta oceaniczna spotyka płytę kontynentalną.",
            "Gęstsza płyta oceaniczna jest wciskana w dół i niszczona.",
            "Tak powstają wulkany i trzęsienia ziemi, jak w Andach i w Chile.",
            "Na granicy konserwatywnej dwie płyty przesuwają się obok siebie.",
            "Zacinają się, rośnie napięcie, a potem szarpią, co wywołuje trzęsienie ziemi.",
            "Takim miejscem jest uskok San Andreas w Kalifornii.",
            "Na granicy kolizyjnej dwie płyty kontynentalne spotykają się czołowo.",
            "Zostają wypchnięte w górę w góry fałdowe, takie jak Himalaje.",
            "Są tam trzęsienia ziemi, ale nie ma wulkanów."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma placa a ser forçada para baixo, por baixo de outra, até ao manto (subduction, subducção)",
            "rocha derretida que está debaixo da superfície (magma)",
            "um vale profundo no fundo do mar, onde uma placa se dobra para baixo (ocean trench, fossa oceânica)",
            "montanhas feitas pelas placas que empurram a crosta para cima (fold mountains, montanhas de dobramento)",
            "uma fenda na crosta onde dois blocos de rocha deslizam um pelo outro (fault, falha)",
            "uma longa cadeia de montanhas debaixo do mar, onde se forma crosta nova (ocean ridge, dorsal oceânica)"
          ],
          "passage": [
            "Há quatro tipos de limite de placas (plate boundary).",
            "Num limite construtivo, duas placas afastam-se.",
            "O magma sobe para o espaço aberto e arrefece/esfria, formando crosta nova.",
            "A dorsal Meso-Atlântica (Mid-Atlantic Ridge) atravessa a Islândia.",
            "Num limite destrutivo, uma placa oceânica encontra uma placa continental.",
            "A placa oceânica, mais densa, é forçada para baixo e destruída.",
            "Isto forma vulcões e sismos/terremotos, como nos Andes e no Chile.",
            "Num limite conservativo, duas placas deslizam uma pela outra.",
            "Elas prendem-se, a pressão acumula-se e depois dão um salto, causando um sismo/terremoto.",
            "A falha de San Andreas, na Califórnia, é um destes limites.",
            "Num limite de colisão, duas placas continentais encontram-se de frente.",
            "São empurradas para cima e formam montanhas de dobramento, como os Himalaias.",
            "Há sismos/terremotos, mas não há vulcões."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "plate oo lagu qasbo inuu mid kale hoos uga galo mantle-ka",
            "dhagax dhalaalay oo dusha hoosteeda ku jira",
            "dooxo mool dheer oo salka badda ku jira halkaasoo plate-ku hoos u qalloocdo",
            "buuro laga sameeyay plates oo crust-ka kor u riixaya",
            "dildillaac crust-ka ku jira oo laba dhejis dhagax ah isku dhaafaan",
            "silsilad buuro dheer oo badda hoostiisa ah halkaasoo crust cusub ka samaysmo"
          ],
          "passage": [
            "Afar nooc oo plate boundary ah ayaa jira.",
            "Constructive boundary laba plate way kala fogaadaan.",
            "Magma wuxuu godka kor ugu kacaa oo wuu qaboowdaa si uu crust cusub u sameeyo.",
            "Mid-Atlantic Ridge wuxuu dhex maraa Iceland.",
            "Xadka destructive boundary, oceanic plate wuxuu kula kulmaa continental plate.",
            "Oceanic plate-ka ka cufan waxaa hoos loo riixaa oo waa la baabbi'iyaa.",
            "Tan waxay samaysaa foolkaano iyo dhulgariirro, sida Andes iyo Chile.",
            "Conservative boundary laba plate way isku dhaafaan.",
            "Way is qabsadaan, cadaadis wuu kordhaa, kadibna way ruxmaan, taasoo dhulgariir keenta.",
            "San Andreas Fault ee California waa mid.",
            "Collision boundary laba continental plate ayaa madax-ku-madax isku yimaadda.",
            "Waxaa kor loo riixaa oo fold mountains waxay noqdaan sida Buuraha Himalaya.",
            "Dhulgariirro way jiraan laakiin foolkaano ma jiro."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "одна плита втискається вниз під іншу в мантію (subduction)",
            "розплавлена порода під поверхнею (magma)",
            "глибока долина на дні моря, де плита загинається вниз (ocean trench)",
            "гори, утворені плитами, які виштовхують кору вгору (fold mountains)",
            "тріщина в корі, де два блоки породи зсуваються один відносно одного (fault)",
            "довгий підводний гірський ланцюг, де утворюється нова кора (ocean ridge)"
          ],
          "passage": [
            "Є чотири види межі плит.",
            "На конструктивній межі дві плити розходяться.",
            "Магма піднімається в розрив і охолоджується, утворюючи нову кору.",
            "Серединно-Атлантичний хребет проходить через Ісландію.",
            "На деструктивній межі океанічна плита зустрічається з континентальною.",
            "Щільнішу океанічну плиту втискає вниз, і вона руйнується.",
            "Через це утворюються вулкани і землетруси, як-от Анди і Чилі.",
            "На консервативній межі дві плити зсуваються одна відносно одної.",
            "Вони зчіплюються, тиск наростає, а потім вони смикаються, спричиняючи землетрус.",
            "Розлом Сан-Андреас (San Andreas Fault) у Каліфорнії — саме такий.",
            "На межі зіткнення дві континентальні плити сходяться лоб у лоб.",
            "Їх виштовхує вгору у складчасті гори, як-от Гімалаї.",
            "Там бувають землетруси, але немає вулканів."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایک plate کا دوسری کے نیچے دب کر mantle میں چلا جانا (subduction)",
            "سطح کے نیچے پگھلی ہوئی چٹان (magma)",
            "سمندر کی تہہ میں گہری وادی، جہاں کوئی plate نیچے مڑ جاتی ہے (ocean trench)",
            "وہ پہاڑ جو plates کے crust کو اوپر دھکیلنے سے بنتے ہیں (fold mountains)",
            "crust میں ایک دراز جہاں چٹان کے دو حصے ایک دوسرے کے پاس سے سرکتے ہیں (fault)",
            "پانی کے نیچے پہاڑوں کی ایک لمبی قطار جہاں نئی crust بنتی ہے (ocean ridge)"
          ],
          "passage": [
            "plate boundary کی چار قسمیں ہیں۔",
            "constructive boundary پر دو plates ایک دوسرے سے دور ہٹتی ہیں۔",
            "magma اس خلا میں اوپر آتی ہے اور ٹھنڈی ہو کر نئی crust بناتی ہے۔",
            "Mid-Atlantic Ridge آئس لینڈ میں سے گزرتا ہے۔",
            "destructive boundary پر ایک oceanic plate کسی continental plate سے ملتی ہے۔",
            "زیادہ کثیف oceanic plate نیچے دھکیل دی جاتی ہے اور ختم ہو جاتی ہے۔",
            "اس سے آتش فشاں اور زلزلے بنتے ہیں، جیسے Andes اور چلی میں۔",
            "conservative boundary پر دو plates ایک دوسرے کے پاس سے سرکتی ہیں۔",
            "یہ پھنس جاتی ہیں، دباؤ بڑھتا ہے، اور پھر جھٹکے سے ہلتی ہیں، جس سے زلزلہ آتا ہے۔",
            "کیلیفورنیا میں San Andreas Fault ایسی ہی ایک جگہ ہے۔",
            "collision boundary پر دو continental plates آمنے سامنے ٹکراتی ہیں۔",
            "یہ اوپر دھکیل دی جاتی ہیں اور ہمالیہ جیسے fold mountains بن جاتے ہیں۔",
            "وہاں زلزلے آتے ہیں مگر آتش فشاں نہیں ہوتے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Constructive boundaries: plates moving apart",
          paragraphs: [
            "At a constructive boundary (you may also see it called a divergent boundary) two plates move away from each other, pulled apart by convection currents in the mantle. As they separate, magma rises out of the mantle and fills the gap. It cools to create new crust, so the boundary constructs new rock. Where the magma reaches the surface there are volcanic eruptions, usually gentle ones, and the small movements of the separating plates cause earthquakes, but these are generally very small.",
            "Most constructive boundaries are between two oceanic plates, and the new crust builds an ocean ridge along the line of the boundary. The example to learn is the Mid-Atlantic Ridge, which runs the whole length of the Atlantic Ocean between the Eurasian and North American plates and rises above the sea in Iceland. Iceland is literally being made wider by this boundary.",
            "In your progress check you were asked to explain the physical processes at a constructive margin for four marks. The chain is: plates move apart, magma rises into the gap, it cools to form new crust and volcanoes, and the ridge grows."
          ],
          tip: "Constructive constructs. New crust, ocean ridge, volcanoes, small earthquakes, Mid-Atlantic Ridge and Iceland."
        },
        {
          heading: "Destructive boundaries: one plate forced under another",
          paragraphs: [
            "A destructive boundary (also called convergent) forms where an oceanic plate and a continental plate move towards each other. The oceanic plate is denser, so when they meet it is forced underneath the continental plate and down into the mantle. This is subduction. As the plate sinks it is destroyed, melting back into molten rock, and a deep ocean trench forms along the line where it bends down.",
            "Two hazards come from this one process. As the plates grind together, friction builds up and is released as earthquakes; these are the most powerful earthquakes on Earth. Because the melting plate is lighter than the mantle around it, magma rises through cracks in the crust to the surface and forms volcanoes. Over millions of years the volcanoes and the crumpling of the continental edge build fold mountains.",
            "The example that runs through this unit is the boundary between the Nazca plate (oceanic) and the South American plate (continental). It created the Andes Mountains, and it caused the Chile earthquake of 2010, magnitude 8.8. Japan 2011 and Sumatra 2004 were also destructive-margin earthquakes."
          ],
          tip: "Destructive destroys. The oceanic plate is subducted because it is denser. Both earthquakes and volcanoes, an ocean trench, fold mountains, the Andes."
        },
        {
          heading: "Conservative and collision boundaries",
          paragraphs: [
            "At a conservative boundary (transform boundary) two plates slide past each other, either in opposite directions or in the same direction at different speeds. Crust is neither created nor destroyed, so there are no volcanoes. But the movement is not smooth. Friction makes the plates lock together while they are still trying to move, so energy builds up. When it becomes too much, the plates jolt forward, releasing the energy as an earthquake. San Francisco sits on a boundary like this, the San Andreas Fault, where the North American and Pacific plates slide past each other.",
            "At a collision boundary two continental plates meet head on. They are both the same density, so neither can be subducted and no crust is destroyed. Instead the plates are pushed upwards into fold mountains. There are no volcanoes, because there is no gap for magma to rise through, but there are powerful earthquakes. The Himalayas were created by the collision of the Indo-Australian plate with the Eurasian plate, and that boundary caused the Nepal earthquake of 2015.",
            "Watch two traps. A collision boundary is not where two plates grind past one another; that is the conservative boundary. And new crust is made only where plates move apart, at a constructive boundary: a destructive boundary destroys crust, even though the volcanoes above it build new rock at the surface. Your homework answer sheet lists new rock under both margins, which is why the word crust matters in an answer."
          ],
          worked: {
            q: "Explain why there are earthquakes but no volcanoes at a conservative plate boundary. (2 marks)",
            steps: [
              "Earthquakes first: the plates slide past each other, friction locks them, pressure builds and is released in a sudden jolt, which is the earthquake.",
              "Volcanoes second: no crust is created or destroyed, so there is no gap for magma to rise through and no melting plate to supply it.",
              "Two linked points, each with a because, earns both marks."
            ],
            answer: "The plates slide past each other and lock together through friction, so pressure builds until they jolt free and release it as an earthquake. No crust is made or destroyed at this boundary, so no magma rises and there are no volcanoes."
          },
          tip: "Two boundaries have no volcanoes: conservative (plates slide past) and collision (both plates continental). Both have earthquakes."
        },
        {
          heading: "Reading the case-study table",
          paragraphs: [
            "Your stretch task filled a table of seven earthquakes with their plate margins and magnitudes. The secure rows are these. Japan 2011: destructive, the Pacific plate subducting under the Eurasian plate, magnitude 9. Chile 2010: destructive, the Nazca plate subducting under the South American plate, 8.8. Sumatra 2004 (the Indian Ocean earthquake and tsunami): destructive, the Indian plate subducting under the Burma plate, 9.3. Nepal 2015: collision, the Indo-Australian and Eurasian plates, 7.9. San Francisco 1957, on the San Andreas Fault: conservative, the North American and Pacific plates moving past each other, 5.7. The table also lists Italy 2016 (6.2) and Haiti 2010 (7), both classed in your table as conservative margins.",
            "Then the task asked you to comment on the correlation between margin type and magnitude. The pattern is clear: the three highest magnitudes, 9, 8.8 and 9.3, all happened at destructive margins, while the conservative-margin earthquakes were lower. The reason is the weight and force of a whole oceanic plate being dragged down against the continental plate, with enormous friction, so far more energy is stored and released. Remember, though, that magnitude is not the same as deaths: the deadliest earthquakes in your map task were not always the biggest."
          ],
          worked: {
            q: "Use the table to compare the mean magnitude of the three destructive-margin earthquakes (Japan 2011, 9; Chile 2010, 8.8; Sumatra 2004, 9.3) with the mean of the three conservative-margin earthquakes (Italy 2016, 6.2; Haiti 2010, 7; San Francisco 1957, 5.7).",
            steps: [
              "Destructive: add the three magnitudes, 9 + 8.8 + 9.3 = 27.1, and divide by 3: 27.1 ÷ 3 = 9.03 (to 2 decimal places).",
              "Conservative: 6.2 + 7 + 5.7 = 18.9, and 18.9 ÷ 3 = 6.3.",
              "Compare: the destructive mean is 9.03 − 6.3 = 2.73 higher. Every destructive earthquake in the table is bigger than every conservative one.",
              "Comment: higher magnitudes are associated with destructive margins, where a heavy oceanic plate is forced down with great friction."
            ],
            answer: "Destructive mean 9.03; conservative mean 6.3; the destructive margins average about 2.7 higher on the scale.",
            checks: [
              { expr: "MAG_JAPAN_2011+MAG_CHILE_2010+MAG_SUMATRA_2004", value: 27.1, tol: 0.001 },
              { expr: "(MAG_JAPAN_2011+MAG_CHILE_2010+MAG_SUMATRA_2004)/3", value: 9.03, tol: 0.01 },
              { expr: "MAG_ITALY_2016+MAG_HAITI_2010+MAG_SF_1957", value: 18.9, tol: 0.001 },
              { expr: "(MAG_ITALY_2016+MAG_HAITI_2010+MAG_SF_1957)/3", value: 6.3, tol: 0.001 },
              { expr: "(MAG_JAPAN_2011+MAG_CHILE_2010+MAG_SUMATRA_2004)/3-(MAG_ITALY_2016+MAG_HAITI_2010+MAG_SF_1957)/3", value: 2.73, tol: 0.01 }
            ]
          },
          tip: "When a question says comment on the correlation, give the pattern, a figure from each side, and a reason."
        }
      ],
      gate: [
        { kind: "mcq", q: "At which type of plate boundary is new crust created?", options: ["Constructive", "Destructive", "Conservative", "Collision"], answer: 0, why: "At a constructive boundary the plates move apart and magma rises into the gap, cooling to form new crust along an ocean ridge.",
          feedback: [
            "",
            "A destructive boundary destroys crust: the oceanic plate is subducted into the mantle. It makes volcanoes, but the new crust comes from constructive boundaries where plates move apart.",
            "At a conservative boundary the plates slide past each other and crust is neither made nor destroyed. New crust forms where plates move apart: a constructive boundary.",
            "At a collision boundary the plates are pushed up into mountains; no crust is made or destroyed. New crust forms at constructive boundaries."
          ] },
        { kind: "gap", q: "At a destructive boundary the denser ___ plate is forced down into the mantle and destroyed.", answer: "oceanic", options: ["oceanic", "continental", "collision"], why: "Oceanic plates are denser than continental plates, so when the two meet the oceanic plate is subducted and destroyed.",
          feedback: {
            "continental": "The continental plate is the lighter one, so it stays on top. It is the denser oceanic plate that is forced down and destroyed.",
            "collision": "Collision is a type of boundary, not a type of plate. At a destructive boundary the plate that sinks is the denser oceanic plate."
          } },
        { kind: "mcq", q: "The Himalayas were formed by the Indo-Australian and Eurasian plates. What kind of boundary is this?", options: ["Collision", "Constructive", "Conservative", "Destructive"], answer: 0, why: "Two continental plates meet head on; neither can be subducted, so the crust is pushed up into fold mountains. The same boundary caused the Nepal earthquake of 2015.",
          feedback: [
            "",
            "Constructive boundaries are where plates move apart and make new crust, as at the Mid-Atlantic Ridge. The Himalayas were pushed up where two continental plates met head on: a collision boundary.",
            "At a conservative boundary plates slide past each other and no mountains are built. The Himalayas are fold mountains made where two continental plates collided.",
            "A destructive boundary needs an oceanic plate to be subducted. Both plates under the Himalayas are continental, so neither sinks: it is a collision boundary."
          ] }
      ],
      modules: [
        {
          title: "Name that boundary",
          task: {
            kind: "match",
            q: "Match each type of plate boundary to its named example.",
            pairs: [
              ["Constructive", "The Mid-Atlantic Ridge, which runs through Iceland"],
              ["Destructive", "The Andes, where the Nazca plate meets the South American plate"],
              ["Conservative", "The San Andreas Fault in California"],
              ["Collision", "The Himalayas, where the Indo-Australian plate meets the Eurasian plate"]
            ]
          },
          levels: {
            support: {
              steps: [
                "A ridge is built by new crust, so the ridge goes with the boundary that constructs.",
                "The Andes have volcanoes AND earthquakes, so an oceanic plate must be sinking there.",
                "A fault where plates slide past each other with no volcanoes is the conservative boundary.",
                "The highest mountains with no volcanoes are two continental plates colliding."
              ],
              example: {
                q: "Match: Iceland, Japan. Choices: an island made by plates moving apart; islands made by an oceanic plate subducting.",
                steps: ["Iceland sits on the Mid-Atlantic Ridge, where plates move apart.", "Japan sits above the Pacific plate subducting beneath it."],
                answer: "Iceland: made by plates moving apart. Japan: made by an oceanic plate subducting."
              }
            },
            core: { hint: "Ridge, Andes, fault, Himalayas: new crust, subduction, sliding, head-on collision." },
            stretch: { extend: "Explain why the Andes and the Himalayas are both fold mountains but only the Andes have volcanoes." }
          },
          explain: "Say, in one sentence, why the Mid-Atlantic Ridge is making Iceland wider.",
          why: "Constructive: the Mid-Atlantic Ridge through Iceland. Destructive: the Andes, Nazca under South American. Conservative: the San Andreas Fault. Collision: the Himalayas, Indo-Australian against Eurasian."
        },
        {
          title: "Margins and magnitude",
          task: {
            kind: "numeric",
            q: "The three destructive-margin earthquakes in your table were Japan 2011 (magnitude 9), Chile 2010 (8.8) and Sumatra 2004 (9.3). What was their mean magnitude? Give your answer to 2 decimal places.",
            answer: 9.03, tolerance: 0.01, units: "", check: "(MAG_JAPAN_2011+MAG_CHILE_2010+MAG_SUMATRA_2004)/3",
            misconceptions: [
              { answer: 27.1, says: "27.1 is the total of the three magnitudes. A mean is the total shared between the three events, so divide by 3: 27.1 ÷ 3 = 9.03.", check: "MAG_JAPAN_2011+MAG_CHILE_2010+MAG_SUMATRA_2004" },
              { answer: 6.3, says: "6.3 is the mean of the three conservative-margin earthquakes (6.2, 7 and 5.7). The destructive ones are 9, 8.8 and 9.3, whose mean is 9.03.", check: "(MAG_ITALY_2016+MAG_HAITI_2010+MAG_SF_1957)/3" },
              { answer: 9, says: "9 is the middle value, or Japan alone. The mean uses all three: (9 + 8.8 + 9.3) ÷ 3 = 9.03.", check: "MAG_JAPAN_2011" }
            ]
          },
          contexts: [
            { label: "Homework graph", q: "For your magnitude-against-deaths graph you note the three destructive-margin earthquakes: Japan 2011 at magnitude 9, Chile 2010 at 8.8 and Sumatra 2004 at 9.3. What is their mean magnitude, to 2 decimal places?", check: "(MAG_JAPAN_2011+MAG_CHILE_2010+MAG_SUMATRA_2004)/3" },
            { label: "Revision card", q: "A revision card lists the subduction-zone earthquakes you studied: Japan 2011 (9), Chile 2010 (8.8) and Sumatra 2004 (9.3). Work out their mean magnitude to 2 decimal places.", check: "(MAG_JAPAN_2011+MAG_CHILE_2010+MAG_SUMATRA_2004)/3" }
          ],
          explain: "Say, in one sentence, why destructive margins produce the biggest earthquakes.",
          levels: {
            support: {
              steps: [
                "Add the three magnitudes: 9 + 8.8 + 9.3.",
                "9 + 8.8 = 17.8, then 17.8 + 9.3 = 27.1.",
                "Divide by the number of earthquakes, 3: 27.1 ÷ 3 = 9.033…",
                "Round to 2 decimal places: 9.03."
              ],
              example: {
                q: "Three earthquakes measured 6.2, 7 and 5.7. What is their mean magnitude, to 1 decimal place?",
                steps: ["Add: 6.2 + 7 + 5.7 = 18.9.", "Divide by 3: 18.9 ÷ 3 = 6.3."],
                answer: "6.3",
                checks: [{ expr: "(6.2+7+5.7)/3", value: 6.3, tol: 0.001 }]
              }
            },
            core: { hint: "Mean = total ÷ how many. Three earthquakes, so divide the total by 3." },
            stretch: { extend: "Your lesson says higher magnitudes are associated with destructive margins. Use the table to argue whether three earthquakes are enough to prove a correlation." }
          },
          why: "(9 + 8.8 + 9.3) ÷ 3 = 27.1 ÷ 3 = 9.03. Destructive margins store the most energy because a whole oceanic plate is dragged down against the continental plate with huge friction."
        },
        {
          title: "Processes at a destructive margin",
          task: {
            kind: "written",
            q: "Explain the physical processes at work at a destructive plate margin. (4 marks)",
            marks: 4,
            criteria: [
              "States which two kinds of plate meet and which one is forced down, and why (density)",
              "Explains how the subducted plate is destroyed and how magma rises to form volcanoes",
              "Explains how friction between the plates causes earthquakes",
              "Names a landform (ocean trench or fold mountains) or a located example such as the Nazca and South American plates"
            ],
            model: "At a destructive margin an oceanic plate and a continental plate move towards each other. The oceanic plate is denser, so it is forced beneath the continental plate and down into the mantle, where it is destroyed and melts; this is subduction, and a deep ocean trench marks the line where the plate bends down. As the two plates grind past each other, friction builds and is released as powerful earthquakes. The melting plate is less dense than the mantle around it, so magma rises through cracks in the crust to form volcanoes, which over millions of years help build fold mountains such as the Andes where the Nazca plate meets the South American plate."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: which two plates meet, and which one sinks? Say why (denser).",
                "Sentence 2: what happens to the sinking plate? (destroyed, melts) What forms at the surface above the bend? (ocean trench)",
                "Sentence 3: how do the earthquakes happen? (friction between the plates)",
                "Sentence 4: how do the volcanoes happen? (magma rises through cracks) Finish with an example: Nazca and South American plates, the Andes."
              ],
              example: {
                q: "In two sentences, explain what happens at a constructive plate margin.",
                steps: ["Say how the plates move and what rises into the gap.", "Say what the magma becomes and what landform results."],
                answer: "At a constructive margin two plates move apart, so magma rises from the mantle into the gap between them. It cools to form new crust, building an ocean ridge such as the Mid-Atlantic Ridge, with gentle volcanic eruptions and small earthquakes."
              }
            },
            core: { hint: "Four sentences: who sinks and why, what happens to it, where the earthquakes come from, where the volcanoes come from." },
            stretch: { extend: "Add a sentence explaining why the Chile 2010 earthquake was so much more powerful than a typical conservative-margin earthquake." }
          },
          explain: "Say, in one sentence, why the oceanic plate is the one that sinks.",
          why: "A full answer has the density reason for subduction, the destruction of the plate, friction giving earthquakes and rising magma giving volcanoes, tied to a named example such as the Nazca and South American plates."
        }
      ]
    },

    /* ───────────── 4 · earthquakes ───────────── */
    {
      key: "earthquakes", n: 4, title: "Earthquakes: what, where and why",
      lead: "What an earthquake is and what causes it, the difference between focus and epicentre, how seismometers and the Richter and Mercalli scales measure it, how tsunamis start, and why the biggest earthquakes are not always the deadliest.",
      covers: [6],
      pretext: {
        words: [
          { word: "magnitude", means: "how strong an earthquake is, measured on the Richter scale", sentence: "The Chile earthquake had a magnitude of 8.8." },
          { word: "Richter scale", means: "the scale that measures the strength of an earthquake", sentence: "Each step up the Richter scale is a much bigger earthquake." },
          { word: "Mercalli scale", means: "the scale that measures an earthquake's intensity, its impact on people and buildings", sentence: "The Mercalli scale rates the damage people see." },
          { word: "seismometer", means: "the instrument that records the shaking of the ground", sentence: "A seismometer records the seismic waves as a seismogram." },
          { word: "seismogram", means: "the record of seismic waves drawn by a seismometer", sentence: "Big spikes on a seismogram mean strong shaking." },
          { word: "tsunami", means: "a huge sea wave set off by an undersea earthquake", sentence: "A tsunami can cross an ocean and flood a distant coast." }
        ],
        passage: [
          "An earthquake is the shaking of the Earth's crust.",
          "It happens when the plates move.",
          "Plates can lock together, so pressure builds up.",
          "When the pressure is released, the ground shakes.",
          "The focus is the point underground where the earthquake starts.",
          "The epicentre is the point on the surface directly above the focus.",
          "The shaking is usually felt most strongly at the epicentre.",
          "A seismometer records the shaking as a seismogram.",
          "The Richter scale measures the strength, or magnitude, of an earthquake.",
          "The Mercalli scale measures its intensity, the impact on people.",
          "Smaller earthquakes called aftershocks follow the main one.",
          "An undersea earthquake can set off a tsunami.",
          "The biggest earthquakes are not always the deadliest."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "مدى قوّة الزلزال، ويُقاس على مقياس ريختر (magnitude)",
            "المقياس الذي يقيس قوّة الزلزال (Richter scale)",
            "المقياس الذي يقيس شدّة الزلزال، أي أثره في الناس والأبنية (Mercalli scale)",
            "الجهاز الذي يسجّل اهتزاز الأرض (seismometer)",
            "السجلّ الذي يرسمه مقياس الزلازل للموجات الزلزالية (seismogram)",
            "موجة بحرية ضخمة يُطلقها زلزال تحت البحر (tsunami)"
          ],
          "passage": [
            "الزلزال اهتزاز قشرة الأرض.",
            "وهو يحدث عندما تتحرّك الصفائح.",
            "وقد تتشابك الصفائح، فيتراكم الضغط.",
            "وعندما يُطلَق الضغط تهتزّ الأرض.",
            "والبؤرة هي النقطة تحت الأرض التي يبدأ عندها الزلزال.",
            "والمركز السطحي هو النقطة على السطح فوق البؤرة مباشرةً.",
            "والاهتزاز يُحَسّ عادةً أقوى ما يكون عند المركز السطحي.",
            "ومقياس الزلازل (seismometer) يسجّل الاهتزاز مخطّطًا زلزاليًّا.",
            "ومقياس ريختر (Richter) يقيس قوّة الزلزال، أي قدره.",
            "ومقياس مركالي (Mercalli) يقيس شدّته، أي أثره في الناس.",
            "وتتبع الزلزالَ الرئيس زلازل أصغر تُسمّى التوابع.",
            "والزلزال تحت البحر قد يُطلق تسونامي.",
            "وأكبر الزلازل ليست دائمًا أكثرها فتكًا."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "jak silne jest trzęsienie ziemi, mierzone w skali Richtera (magnitude)",
            "skala, która mierzy siłę trzęsienia ziemi (Richter scale)",
            "skala, która mierzy intensywność trzęsienia ziemi, czyli jego wpływ na ludzi i budynki (Mercalli scale)",
            "przyrząd, który zapisuje drgania gruntu (seismometer)",
            "zapis fal sejsmicznych narysowany przez sejsmometr (seismogram)",
            "ogromna fala morska wywołana trzęsieniem ziemi pod wodą (tsunami)"
          ],
          "passage": [
            "Trzęsienie ziemi to drżenie skorupy ziemskiej.",
            "Zdarza się, kiedy płyty się przesuwają.",
            "Płyty mogą się zaciąć, więc rośnie napięcie.",
            "Kiedy napięcie zostaje uwolnione, grunt drży.",
            "Ognisko (focus) to punkt pod ziemią, w którym zaczyna się trzęsienie.",
            "Epicentrum (epicentre) to punkt na powierzchni dokładnie nad ogniskiem.",
            "Drgania czuje się zwykle najmocniej w epicentrum.",
            "Sejsmometr zapisuje drgania jako sejsmogram.",
            "Skala Richtera mierzy siłę, czyli magnitudę trzęsienia ziemi.",
            "Skala Mercallego mierzy jego intensywność, czyli wpływ na ludzi.",
            "Po głównym wstrząsie następują słabsze trzęsienia zwane wstrząsami wtórnymi.",
            "Trzęsienie ziemi pod morzem może wywołać tsunami.",
            "Największe trzęsienia ziemi nie zawsze są najbardziej zabójcze."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a força de um sismo/terremoto, medida na escala de Richter (magnitude)",
            "a escala que mede a força de um sismo/terremoto (Richter scale, escala de Richter)",
            "a escala que mede a intensidade de um sismo, o seu impacto nas pessoas e nos edifícios (Mercalli scale, escala de Mercalli)",
            "o aparelho que registra/regista o tremor do solo (seismometer, sismómetro/sismômetro)",
            "o registo/registro das ondas sísmicas desenhado por um sismómetro (seismogram, sismograma)",
            "uma onda gigante do mar provocada por um sismo debaixo do mar (tsunami)"
          ],
          "passage": [
            "Um sismo/terremoto é o tremor da crosta da Terra.",
            "Acontece quando as placas se movem.",
            "As placas podem prender-se uma à outra, por isso a pressão acumula-se.",
            "Quando a pressão é libertada/liberada, o solo abana.",
            "O foco é o ponto, debaixo do solo, onde o sismo começa.",
            "O epicentro é o ponto na superfície diretamente por cima do foco.",
            "O tremor sente-se normalmente com mais força no epicentro.",
            "Um sismómetro/sismômetro regista/registra o tremor como um sismograma.",
            "A escala de Richter mede a força, ou magnitude, de um sismo/terremoto.",
            "A escala de Mercalli mede a sua intensidade, o impacto nas pessoas.",
            "Depois do sismo principal vêm sismos mais pequenos, chamados tremores secundários (aftershocks).",
            "Um sismo debaixo do mar pode provocar um tsunami.",
            "Os sismos maiores não são sempre os mais mortíferos."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "sida dhulgariir u xoog leh, oo lagu cabbiro Richter scale",
            "cabbirka qiyaasa xooggii dhulgariir",
            "cabbirka qiyaasa darnaanta dhulgariir, oo ah saameyntiisa dadka iyo dhismayaasha",
            "qalabka duuba ruxitaanka dhulka",
            "diiwaanka seismic waves ee seismometer sawiro",
            "mawjad badeed aad u weyn oo dhulgariir badda hoostiisa ka kacay"
          ],
          "passage": [
            "Dhulgariir waa ruxitaanka crust-ka Dhulka.",
            "Wuxuu dhacaa marka plates-ku dhaqaaqaan.",
            "Plates way is qabsan karaan, markaa cadaadis wuu kordhaa.",
            "Marka cadaadiska la sii daayo, dhulku wuu ruxmaa.",
            "Focus-ku waa barta dhulka hoostiisa halkaasoo dhulgariirku ka bilaabmo.",
            "Epicentre-ku waa barta dusha sare oo focus-ka si toos ah ka korreysa.",
            "Ruxitaanka inta badan aadka looga dareemaa epicentre-ka.",
            "Seismometer wuxuu ruxitaanka u duubaa seismogram.",
            "Richter scale wuxuu cabbiraa xooggii, ama magnitude-ka, dhulgariir.",
            "Mercalli scale wuxuu cabbiraa darnaantiisa, oo ah saameynta dadka.",
            "Dhulgariirro yaryar oo la yiraahdo aftershocks ayaa kii weyn ka daba yimaadda.",
            "Dhulgariir badda hoostiisa wuxuu tsunami kicin karaa.",
            "Dhulgariirrada ugu waaweyn had iyo jeer kuwa ugu dilaa badan maaha."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "наскільки сильний землетрус, виміряний за шкалою Рихтера (magnitude)",
            "шкала, яка вимірює силу землетрусу (Richter scale)",
            "шкала, яка вимірює інтенсивність землетрусу, тобто його вплив на людей і будівлі (Mercalli scale)",
            "прилад, який записує тряску землі (seismometer)",
            "запис сейсмічних хвиль, зроблений сейсмометром (seismogram)",
            "величезна морська хвиля, яку спричиняє підводний землетрус (tsunami)"
          ],
          "passage": [
            "Землетрус — це тряска земної кори.",
            "Він відбувається, коли рухаються плити.",
            "Плити можуть зчіплюватися, тому тиск наростає.",
            "Коли тиск вивільняється, земля трясеться.",
            "Фокус (focus) — це точка під землею, де землетрус починається.",
            "Епіцентр (epicentre) — це точка на поверхні прямо над фокусом.",
            "Тряску зазвичай відчувають найсильніше в епіцентрі.",
            "Сейсмометр записує тряску як сейсмограму.",
            "Шкала Рихтера вимірює силу, або магнітуду (magnitude), землетрусу.",
            "Шкала Меркаллі вимірює його інтенсивність, тобто вплив на людей.",
            "Після головного землетрусу йдуть слабші, які називають афтершоками.",
            "Підводний землетрус може спричинити цунамі.",
            "Найбільші землетруси не завжди найсмертоносніші."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "زلزلہ کتنا زوردار ہے، جو Richter scale پر ناپا جاتا ہے (magnitude)",
            "وہ پیمانہ جو زلزلے کی طاقت ناپتا ہے (Richter scale)",
            "وہ پیمانہ جو زلزلے کی شدت، یعنی لوگوں اور عمارتوں پر اس کا اثر ناپتا ہے (Mercalli scale)",
            "وہ آلہ جو زمین کے ہلنے کو ریکارڈ کرتا ہے (seismometer)",
            "seismometer کا بنایا ہوا seismic waves کا ریکارڈ (seismogram)",
            "سمندر کے نیچے آنے والے زلزلے سے اٹھنے والی ایک بہت بڑی سمندری لہر (tsunami)"
          ],
          "passage": [
            "زلزلہ زمین کی crust کا ہلنا ہے۔",
            "یہ اس وقت آتا ہے جب plates سرکتی ہیں۔",
            "plates آپس میں پھنس سکتی ہیں، جس سے دباؤ بڑھتا جاتا ہے۔",
            "جب یہ دباؤ نکلتا ہے تو زمین ہلتی ہے۔",
            "focus زمین کے نیچے وہ نقطہ ہے جہاں سے زلزلہ شروع ہوتا ہے۔",
            "epicentre سطح پر وہ نقطہ ہے جو بالکل focus کے اوپر ہوتا ہے۔",
            "ہلنا عموماً epicentre پر سب سے زیادہ محسوس ہوتا ہے۔",
            "seismometer اس ہلنے کو seismogram کی صورت میں ریکارڈ کرتا ہے۔",
            "Richter scale زلزلے کی طاقت، یعنی magnitude، ناپتا ہے۔",
            "Mercalli scale اس کی شدت، یعنی لوگوں پر اثر، ناپتا ہے۔",
            "بڑے زلزلے کے بعد چھوٹے زلزلے آتے ہیں، جنھیں aftershocks کہتے ہیں۔",
            "سمندر کے نیچے آنے والا زلزلہ tsunami اٹھا سکتا ہے۔",
            "سب سے بڑے زلزلے ہمیشہ سب سے جان لیوا نہیں ہوتے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What causes an earthquake?",
          paragraphs: [
            "An earthquake is the shaking and vibration of the Earth's crust caused by the movement of the Earth's plates. The cause is pressure. Where two plates meet, their movement is not smooth: the rough edges lock together while the plates keep trying to move, so pressure builds up between the locked plates. Eventually the pressure is too great. The plates jerk free, the stored energy is released, and that sudden release is the earthquake.",
            "Earthquakes can happen along any type of plate boundary, constructive, destructive, conservative or collision. Most are interplate, between tectonic plates, but some are intraplate, happening within a plate far from its edges. Earthquakes can also be caused by volcanic eruptions, by collapsing mines, by explosions and by the pressure of water held behind a reservoir dam, though these are small compared with the great plate-boundary earthquakes.",
            "Put the chain of events in order and you have a four-mark explanation: plates meet at a margin; they try to move past each other but the movement is not smooth; they lock and pressure builds; the pressure is suddenly released in a jerky movement; that release of energy is the earthquake."
          ],
          tip: "Cause of earthquakes in one line: pressure builds between locked plates and is suddenly released."
        },
        {
          heading: "Focus and epicentre",
          paragraphs: [
            "An earthquake's focus is its central point, deep below the surface, where the rocks first move and the earthquake begins. Seismic waves spread out from the focus in all directions through the rock, like ripples from a stone dropped in a pond. The point on the surface directly above the focus is the epicentre. It is the place on the surface nearest to the focus, so it is where the greatest effects are usually felt.",
            "Your stretch question showed a diagram with a town and a forest at different distances from the epicentre and asked where the earthquake would be felt most strongly. The answer is the place nearest the epicentre, because the seismic waves have travelled least far and lost least energy there. The second question asked about depth. If the focus is deeper in the crust, the waves have further to travel before they reach the surface, so they spread out and weaken; the shaking at the surface is less violent and the effects are smaller, though they may be felt over a wider area. A shallow focus under a city is the most dangerous combination.",
            "Aftershocks are smaller earthquakes that follow the main, large one, as the rocks around the focus settle into their new positions. They can bring down buildings already weakened by the main shock, which is why rescuers work in danger for days afterwards."
          ],
          tip: "Focus underground, epicentre on the surface above it. Nearest the epicentre and shallowest focus means the strongest shaking."
        },
        {
          heading: "Measuring an earthquake",
          paragraphs: [
            "A seismometer, also called a seismograph, is the instrument that measures the shaking of the ground. The record it draws of the seismic waves is a seismogram: a line that jumps and spikes as the waves arrive, the bigger the spikes, the stronger the shaking. From seismograms at several stations, scientists work out the location of the focus and the size of the earthquake.",
            "Two scales describe an earthquake, and they measure different things. The Richter scale measures the strength of the earthquake, its magnitude, from the energy released: Japan 2011 was magnitude 9, Chile 2010 was 8.8, Nepal 2015 was 7.9, San Francisco 1957 was 5.7. The Mercalli scale measures intensity, the impact on people and buildings, from what observers see and feel: dishes rattling at the low end, total destruction at the top. One earthquake has one magnitude but many intensities, higher near the epicentre and lower far away.",
            "This is why magnitude alone does not tell you how many people will be hurt. A magnitude 7.9 earthquake under a city of poorly built homes can kill far more people than a magnitude 8.8 under well-built ones, as the Chile and Nepal case studies in the next chapter show."
          ],
          worked: {
            q: "The Sumatra 2004 earthquake had a magnitude of 9.3 and the San Francisco 1957 earthquake a magnitude of 5.7. How many points higher on the Richter scale was Sumatra, and does that mean it was about twice as strong?",
            steps: [
              "Subtract: 9.3 − 5.7 = 3.6 points higher.",
              "The Richter scale is not a simple count. Each whole step up the scale means roughly ten times more ground shaking, so 3.6 steps is thousands of times more shaking, not twice as much.",
              "Write the comparison in geography words: Sumatra 2004 was 3.6 points higher on the Richter scale, a far more powerful earthquake, which is why it could set off an ocean-wide tsunami."
            ],
            answer: "3.6 points higher; far more than twice as strong, because each step on the scale is about ten times more shaking.",
            checks: [{ expr: "MAG_SUMATRA_2004-MAG_SF_1957", value: 3.6, tol: 0.001 }]
          },
          tip: "Richter is for the earthquake (strength); Mercalli is for the people (intensity). R for rocks, M for me."
        },
        {
          heading: "Tsunamis, and the biggest and the deadliest",
          paragraphs: [
            "A tsunami has three stages. First, an undersea earthquake, usually at a destructive margin, suddenly lifts or drops the sea floor and the water above it. Second, the wave propagates: it travels outwards across the ocean at great speed, low and almost unnoticed in deep water. Third, it arrives on a coast, where the shallowing sea floor slows the front of the wave and piles the water up into a wall that surges inland. Sumatra 2004 and Japan 2011 both caused devastating tsunamis.",
            "Your map task pinned the biggest earthquakes ever recorded in yellow and the deadliest in red, with half-and-half pins for earthquakes that were both. The pins included Alaska 1964, Kamchatka 1952, the Andreanof Islands, Sumatra 2004, Chile 2010 and Great Tohoku (Japan) 2011 among the biggest, and Shaanxi 1556, Ningxia 1920, Kanto 1923, Tangshan 1976 and Haiti 2010 among the deadliest. The two lists do not match. The biggest earthquakes often strike under the ocean or in thinly populated places; the deadliest strike crowded cities with weak buildings.",
            "Your homework plotted magnitude against deaths and asked whether there is a correlation. Expect a weak one at best. Magnitude matters, but so do the depth of the focus, the distance of towns from the epicentre, how many people live there, how well their buildings are made and how quickly help arrives. Those human factors are the heart of the next chapter."
          ],
          tip: "A tsunami question wants the sequence: undersea earthquake, wave travels across the ocean, wave arrives on the coast."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is the epicentre of an earthquake?", options: ["The point on the surface directly above the focus", "The point deep underground where the earthquake starts", "The instrument that records the shaking", "A smaller earthquake after the main one"], answer: 0, why: "The epicentre is the point on the surface directly above the focus, the place nearest the focus and so usually where the shaking is strongest.",
          feedback: [
            "",
            "The point underground where the earthquake starts is the focus. The epicentre is the point on the surface directly above it.",
            "The instrument that records the shaking is a seismometer. The epicentre is a place, the point on the surface directly above the focus.",
            "A smaller earthquake after the main one is an aftershock. The epicentre is the point on the surface directly above the focus."
          ] },
        { kind: "gap", q: "The Richter scale measures an earthquake's strength; the Mercalli scale measures its ___, the impact on people.", answer: "intensity", options: ["intensity", "magnitude", "depth"], why: "Magnitude (strength) is measured on the Richter scale; intensity (the impact on people and buildings) is measured on the Mercalli scale.",
          feedback: {
            "magnitude": "Magnitude is the strength of the earthquake, and that is what the Richter scale measures. The Mercalli scale measures intensity: the impact on people and buildings.",
            "depth": "Depth is where the focus lies below the surface; it is not what the Mercalli scale measures. The Mercalli scale measures intensity, the impact on people."
          } },
        { kind: "numeric", q: "What was the magnitude of the Japan 2011 earthquake on the Richter scale, according to your case-study table?", answer: 9, tolerance: 0, units: "", check: "MAG_JAPAN_2011", why: "Japan 2011 was magnitude 9: the Pacific plate subducting under the Eurasian plate at a destructive margin, and the trigger for the Tohoku tsunami.",
          misconceptions: [
            { answer: 9.3, says: "9.3 was Sumatra 2004, the Indian Ocean earthquake. Japan 2011 was magnitude 9 in your table.", check: "MAG_SUMATRA_2004" },
            { answer: 8.8, says: "8.8 was Chile 2010. Japan 2011 was magnitude 9.", check: "MAG_CHILE_2010" },
            { answer: 7.9, says: "7.9 was Nepal 2015, at a collision margin. Japan 2011, at a destructive margin, was magnitude 9.", check: "MAG_NEPAL_2015" }
          ] }
      ],
      modules: [
        {
          title: "How an earthquake happens",
          task: {
            kind: "order",
            q: "Put the stages that cause an earthquake in the correct order.",
            items: [
              "Two plates meet at a plate margin and try to move past each other",
              "The movement is not smooth: the plates lock together",
              "Pressure builds up between the locked plates",
              "The pressure is suddenly released in a jerky movement",
              "The release of energy shakes the ground: this is the earthquake"
            ]
          },
          contexts: [
            { label: "San Andreas", q: "Along the San Andreas Fault the North American and Pacific plates slide past each other. Put the stages that lead to an earthquake there in the correct order." },
            { label: "Istanbul", q: "Istanbul lies on a conservative margin between the Eurasian and Anatolian plates. Put the stages that lead to an earthquake there in the correct order." },
            { label: "Any margin", q: "Earthquakes can happen at any type of plate margin. Put the stages of how one happens in the correct order." }
          ],
          levels: {
            support: {
              steps: [
                "Start with the plates meeting: nothing can happen until they are in contact.",
                "Locking comes before pressure: the plates stick first, then the pressure grows.",
                "Pressure has to build before it can be released.",
                "The earthquake is the last thing: it is the effect of the release."
              ],
              example: {
                q: "Put these stages of snapping a dry twig in order: the twig bends; you push both ends; it snaps with a crack; the bend gets tighter.",
                steps: ["You push first.", "It bends, then bends more.", "The snap is the release at the end."],
                answer: "You push both ends; the twig bends; the bend gets tighter; it snaps with a crack."
              }
            },
            core: { hint: "Meet, lock, build, release, shake." },
            stretch: { extend: "Explain why earthquakes at a conservative margin can be large even though no crust is created or destroyed there." }
          },
          explain: "Say, in one sentence, what the pressure between locked plates has to do with the shaking.",
          why: "Plates meet and try to move; they lock; pressure builds; it is released in a sudden jerk; the energy released shakes the crust, which is the earthquake."
        },
        {
          title: "Earthquake words",
          task: {
            kind: "match",
            q: "Match each earthquake word to its meaning.",
            pairs: [
              ["Focus", "The point underground where the rocks first move and the earthquake starts"],
              ["Epicentre", "The point on the surface directly above the focus"],
              ["Magnitude", "How strong an earthquake is, measured on the Richter scale"],
              ["Aftershock", "A smaller earthquake that follows the main, large one"],
              ["Seismometer", "The instrument that records the shaking as a seismogram"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Two of the words are places: one underground, one on the surface above it.",
                "One word is a measurement of size.",
                "One word is a thing that happens afterwards: after is in its name.",
                "One word is a machine: the ending -meter means it measures."
              ],
              example: {
                q: "Match: seismogram, Mercalli scale. Choices: the scale of an earthquake's intensity, its impact on people; the record of seismic waves drawn by a seismometer.",
                steps: ["A gram is a drawing or record, so the seismogram is the record.", "The Mercalli scale rates impact on people."],
                answer: "Seismogram: the record of seismic waves. Mercalli scale: the scale of intensity, the impact on people."
              }
            },
            core: { hint: "Where it starts, where it is felt most, how big, what follows, what measures." },
            stretch: { extend: "Explain why an earthquake has one magnitude but many different intensities." }
          },
          explain: "Say, in one sentence, the difference between the focus and the epicentre.",
          why: "Focus: where the earthquake starts underground. Epicentre: the surface point above it. Magnitude: strength on the Richter scale. Aftershock: a smaller later earthquake. Seismometer: the recording instrument."
        },
        {
          title: "Who feels it most?",
          task: {
            kind: "mcq",
            q: "Two earthquakes have the same magnitude. One has a shallow focus, 10 km below a town. The other has a deep focus, 300 km below a town. Which town suffers the worse shaking, and why?",
            options: [
              "The town above the shallow focus, because the seismic waves reach the surface having travelled less far and lost less energy",
              "The town above the deep focus, because waves gain energy as they travel upwards through the rock",
              "Both towns equally, because the magnitude is the same",
              "Neither town, because shaking is only felt at the epicentre itself"
            ],
            answer: 0,
            feedback: [
              "",
              "Seismic waves lose energy as they travel, they do not gain it. The shallow focus is closer to the surface, so its waves arrive stronger and the town above it suffers more.",
              "Magnitude measures the energy released at the focus, not the shaking at any one place. The depth of the focus changes how much of that energy reaches the surface: shallower means worse shaking.",
              "Shaking is felt over a wide area around the epicentre, not at a single point. The town directly above a shallow focus feels it worst because the waves have the shortest distance to travel."
            ]
          },
          contexts: [
            { label: "Two villages", q: "Two earthquakes of the same magnitude strike two villages. Under one the focus is 10 km deep; under the other it is 300 km deep. Which village is shaken more violently, and why?" },
            { label: "Exam diagram", q: "An exam diagram shows two earthquakes of equal magnitude, one with its focus 10 km down and one with its focus 300 km down, each directly beneath a town. Which town has the worse shaking, and why?" }
          ],
          explain: "Say, in one sentence, why a deeper focus usually means less damage at the surface.",
          levels: {
            support: {
              steps: [
                "Seismic waves start at the focus and spread out through the rock.",
                "The further they travel, the more they spread out and the more energy they lose.",
                "A shallow focus is close to the surface, so its waves arrive strong.",
                "Same magnitude, different depth: the shallow one does more damage at the surface."
              ],
              example: {
                q: "A firework explodes 5 metres above a crowd; an identical one explodes 500 metres up. Which is louder for the crowd, and why?",
                steps: ["Sound spreads out and weakens with distance.", "The close one has travelled less far when it reaches the crowd."],
                answer: "The one 5 metres up is louder, because the sound has travelled a shorter distance and lost less energy."
              }
            },
            core: { hint: "Think about distance travelled. Waves weaken as they spread." },
            stretch: { extend: "Explain why a deep-focus earthquake might be felt over a wider area even though it causes less damage at any one place." }
          },
          why: "Seismic waves weaken as they spread out from the focus. A shallow focus means a short journey to the surface, so the town above it is shaken harder than a town above a deep focus of the same magnitude."
        }
      ]
    },

    /* ───────────── 5 · chile and nepal ───────────── */
    {
      key: "chile-nepal", n: 5, title: "Two earthquakes, two worlds: Chile 2010 and Nepal 2015",
      lead: "Primary and secondary effects, immediate and long-term responses, the two case studies the exam expects you to compare, and why a weaker earthquake killed far more people in the poorer country.",
      covers: [7, 8],
      pretext: {
        words: [
          { word: "HIC", means: "a high income country, a wealthy country such as Chile or Japan", sentence: "Chile is an HIC with strong building standards." },
          { word: "LIC", means: "a low income country, a poor country such as Nepal", sentence: "Nepal is an LIC that could not afford earthquake-proof buildings." },
          { word: "case study", means: "a real example you learn in detail to use in exam answers", sentence: "Chile 2010 and Nepal 2015 are your two earthquake case studies." },
          { word: "effect", means: "something the hazard does to people, property or the environment", sentence: "Collapsed buildings were the worst effect in Nepal." },
          { word: "response", means: "the help given after a hazard to reduce its effects", sentence: "Search and rescue is an immediate response." },
          { word: "recovery", means: "getting back to normal life after a hazard", sentence: "Chile's recovery was quicker because it is wealthier." }
        ],
        passage: [
          "Earthquake effects can be primary or secondary.",
          "Primary effects happen immediately, like buildings collapsing.",
          "Secondary effects are caused by the primary effects, like a tsunami or disease.",
          "Responses are the help given after a hazard.",
          "Immediate responses come straight away: search and rescue, shelters and medical supplies.",
          "Long-term responses take months or years: rebuilding homes, roads and schools.",
          "Chile is an HIC. Its earthquake in 2010 was magnitude 8.8.",
          "About 500 people died and the damage cost 30 billion dollars.",
          "Nepal is an LIC. Its earthquake in 2015 was magnitude 7.9.",
          "About 9000 people died and the damage cost 5 billion dollars.",
          "The weaker earthquake killed far more people.",
          "Chile could afford strong buildings and planning. Nepal could not.",
          "Wealth makes the biggest difference to how badly a country is hurt."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "بلد مرتفع الدخل، أي بلد غنيّ كتشيلي أو اليابان (HIC)",
            "بلد منخفض الدخل، أي بلد فقير كنيبال (LIC)",
            "مثال حقيقي تدرسه بالتفصيل لتستخدمه في أجوبة الامتحان (case study)",
            "شيء يفعله الخطر بالناس أو الممتلكات أو البيئة (effect)",
            "المساعدة التي تُقدَّم بعد الخطر لتقليل آثاره (response)",
            "العودة إلى الحياة الطبيعية بعد الخطر (recovery)"
          ],
          "passage": [
            "آثار الزلزال قد تكون أوّلية أو ثانوية.",
            "فالآثار الأوّلية تحدث في الحال، كانهيار الأبنية.",
            "والآثار الثانوية تسبّبها الآثار الأوّلية، كالتسونامي أو المرض.",
            "والاستجابات هي المساعدة التي تُقدَّم بعد الخطر.",
            "فالاستجابات الفورية تأتي مباشرةً: البحث والإنقاذ والمآوي واللوازم الطبّية.",
            "والاستجابات طويلة الأجل تأخذ شهورًا أو سنوات: إعادة بناء البيوت والطرق والمدارس.",
            "وتشيلي بلد مرتفع الدخل. وكان قدر زلزالها في 2010 يبلغ 8.8.",
            "ومات نحو 500 شخص وكلّف الضرر 30 مليار دولار.",
            "ونيبال بلد منخفض الدخل. وكان قدر زلزالها في 2015 يبلغ 7.9.",
            "ومات نحو 9000 شخص وكلّف الضرر 5 مليارات دولار.",
            "فالزلزال الأضعف قتل ناسًا أكثر كثيرًا.",
            "وتشيلي كانت تستطيع أن تتحمّل كلفة أبنية قويّة وتخطيط. ونيبال لم تستطع.",
            "فالثروة تصنع أكبر فرق في مدى تضرّر البلد."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "kraj o wysokich dochodach, czyli kraj zamożny, taki jak Chile albo Japonia (HIC)",
            "kraj o niskich dochodach, czyli kraj biedny, taki jak Nepal (LIC)",
            "prawdziwy przykład, który poznaje się szczegółowo, żeby użyć go w odpowiedziach na egzaminie (case study)",
            "coś, co zagrożenie robi ludziom, mieniu albo środowisku (effect)",
            "pomoc udzielona po zagrożeniu, żeby zmniejszyć jego skutki (response)",
            "powrót do normalnego życia po zagrożeniu (recovery)"
          ],
          "passage": [
            "Skutki trzęsienia ziemi mogą być pierwotne albo wtórne.",
            "Skutki pierwotne dzieją się natychmiast, jak zawalenie się budynków.",
            "Skutki wtórne są wywołane przez skutki pierwotne, jak tsunami albo choroba.",
            "Reakcje to pomoc udzielona po zagrożeniu.",
            "Reakcje natychmiastowe przychodzą od razu: poszukiwania i ratownictwo, schronienia i środki medyczne.",
            "Reakcje długofalowe trwają miesiące albo lata: odbudowa domów, dróg i szkół.",
            "Chile jest krajem HIC. Jego trzęsienie ziemi w 2010 roku miało magnitudę 8.8.",
            "Zginęło około 500 ludzi, a szkody kosztowały 30 miliardów dolarów.",
            "Nepal jest krajem LIC. Jego trzęsienie ziemi w 2015 roku miało magnitudę 7.9.",
            "Zginęło około 9000 ludzi, a szkody kosztowały 5 miliardów dolarów.",
            "Słabsze trzęsienie ziemi zabiło o wiele więcej ludzi.",
            "Chile mogło sobie pozwolić na mocne budynki i planowanie. Nepal nie mógł.",
            "Zamożność najbardziej decyduje o tym, jak mocno kraj zostanie dotknięty."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um país de rendimento/renda alto, um país rico como o Chile ou o Japão (HIC)",
            "um país de rendimento/renda baixo, um país pobre como o Nepal (LIC)",
            "um exemplo real que estudas em detalhe para usar nas respostas do exame (case study, estudo de caso)",
            "algo que o risco natural faz às pessoas, aos bens ou ao ambiente (effect, efeito)",
            "a ajuda dada depois de um risco natural para reduzir os seus efeitos (response, resposta)",
            "voltar à vida normal depois de um risco natural (recovery, recuperação)"
          ],
          "passage": [
            "Os efeitos de um sismo/terremoto podem ser primários ou secundários.",
            "Os efeitos primários acontecem logo, como os edifícios a desabar.",
            "Os efeitos secundários são causados pelos efeitos primários, como um tsunami ou uma doença.",
            "As respostas são a ajuda dada depois de um risco natural.",
            "As respostas imediatas vêm logo: busca e salvamento, abrigos e material médico.",
            "As respostas de longo prazo levam meses ou anos: reconstruir casas, estradas e escolas.",
            "O Chile é um HIC. O seu sismo de 2010 teve magnitude 8.8.",
            "Morreram cerca de 500 pessoas e os estragos custaram 30 mil milhões/bilhões de dólares.",
            "O Nepal é um LIC. O seu sismo de 2015 teve magnitude 7.9.",
            "Morreram cerca de 9000 pessoas e os estragos custaram 5 mil milhões/bilhões de dólares.",
            "O sismo mais fraco matou muito mais pessoas.",
            "O Chile podia pagar edifícios resistentes e planeamento/planejamento. O Nepal não podia.",
            "É a riqueza que faz a maior diferença na gravidade com que um país é atingido."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "dal dakhli sare leh, dal hodan ah sida Chile ama Jabaan",
            "dal dakhli hooseeya leh, dal faqiir ah sida Nepal",
            "tusaale dhab ah oo si qoto dheer aad u barato oo imtixaanka ku isticmaasho",
            "wax khatartu ku samayso dadka, hantida ama deegaanka",
            "caawimada la bixiyo khatarta ka dib si saameyntiisa loo yareeyo",
            "ku soo noqoshada nolosha caadiga ah khatarta ka dib"
          ],
          "passage": [
            "Saameynta dhulgariir waxay noqon kartaa primary ama secondary.",
            "Saameynta primary isla markiiba way dhacdaa, sida dhismayaal dumaya.",
            "Saameynta secondary waxaa keena saameynta primary, sida tsunami ama cudur.",
            "Jawaabuhu waa caawimada la bixiyo khatarta ka dib.",
            "Jawaabaha degdegga ah isla markiiba way yimaaddaan: baadi-goob iyo samatabbixin, hoy iyo sahay caafimaad.",
            "Jawaabaha muddada dheer waxay qaataan bilo ama sanado: dhisidda guryaha, waddooyinka iyo iskuullada.",
            "Chile waa HIC. Dhulgariirkeeda 2010-kii magnitude-kiisu wuxuu ahaa 8.8.",
            "Qiyaastii 500 qof ayaa dhintay, waxyeelladuna waxay ku kacday 30 bilyan doollar.",
            "Nepal waa LIC. Dhulgariirkeeda 2015-kii magnitude-kiisu wuxuu ahaa 7.9.",
            "Qiyaastii 9000 qof ayaa dhintay, waxyeelladuna waxay ku kacday 5 bilyan doollar.",
            "Dhulgariirkii ka tabar yaraa dad aad u badan ayuu dilay.",
            "Chile waxay awooday dhismayaal adag iyo qorsheyn. Nepal way kari weyday.",
            "Maalku wuxuu farqiga ugu weyn sameeyaa sida dal loo waxyeelleeyo."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "країна з високим доходом, заможна країна, як-от Чилі або Японія (HIC)",
            "країна з низьким доходом, бідна країна, як-от Непал (LIC)",
            "справжній приклад, який ви вивчаєте докладно, щоб використати у відповідях на екзамені (case study)",
            "те, що небезпека робить людям, майну або довкіллю (effect)",
            "допомога, надана після небезпеки, щоб зменшити її наслідки (response)",
            "повернення до звичайного життя після небезпеки (recovery)"
          ],
          "passage": [
            "Наслідки землетрусу можуть бути первинними або вторинними.",
            "Первинні наслідки настають відразу, як-от руйнування будівель.",
            "Вторинні наслідки спричинені первинними, як-от цунамі або хвороба.",
            "Дії у відповідь (responses) — це допомога, надана після небезпеки.",
            "Негайні дії приходять відразу: пошук і порятунок, прихистки й медичні засоби.",
            "Довготривалі дії тривають місяці або роки: відбудова житла, доріг і шкіл.",
            "Чилі — це HIC. Її землетрус у 2010 році мав магнітуду 8.8.",
            "Загинуло близько 500 людей, а шкода коштувала 30 мільярдів доларів.",
            "Непал — це LIC. Його землетрус у 2015 році мав магнітуду 7.9.",
            "Загинуло близько 9000 людей, а шкода коштувала 5 мільярдів доларів.",
            "Слабший землетрус убив значно більше людей.",
            "Чилі могла дозволити собі міцні будівлі й планування. Непал не міг.",
            "Багатство найбільше впливає на те, наскільки сильно постраждає країна."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "اونچی آمدنی والا ملک، یعنی خوشحال ملک، جیسے چلی یا جاپان (HIC)",
            "کم آمدنی والا ملک، یعنی غریب ملک، جیسے نیپال (LIC)",
            "ایک حقیقی مثال جو آپ تفصیل سے پڑھتے ہیں تاکہ امتحان کے جواب میں استعمال کریں (case study)",
            "وہ کام جو hazard لوگوں، املاک یا ماحول کے ساتھ کرتا ہے (effect)",
            "hazard کے بعد دی جانے والی مدد، جو اس کے اثر کم کرے (response)",
            "hazard کے بعد عام زندگی کی طرف واپس آنا (recovery)"
          ],
          "passage": [
            "زلزلے کے effects بنیادی (primary) یا ضمنی (secondary) ہو سکتے ہیں۔",
            "primary effects فوراً ہوتے ہیں، جیسے عمارتوں کا گر جانا۔",
            "secondary effects، primary effects کی وجہ سے ہوتے ہیں، جیسے tsunami یا بیماری۔",
            "responses، hazard کے بعد دی جانے والی مدد ہیں۔",
            "immediate responses فوراً آتے ہیں: تلاش اور بچاؤ، عارضی رہائش اور طبی سامان۔",
            "long-term responses میں مہینے یا سال لگتے ہیں: گھروں، سڑکوں اور سکولوں کی دوبارہ تعمیر۔",
            "چلی ایک HIC ہے۔ 2010 میں اس کے زلزلے کی magnitude 8.8 تھی۔",
            "تقریباً 500 لوگ فوت ہوئے اور نقصان کی لاگت 30 ارب ڈالر رہی۔",
            "نیپال ایک LIC ہے۔ 2015 میں اس کے زلزلے کی magnitude 7.9 تھی۔",
            "تقریباً 9000 لوگ فوت ہوئے اور نقصان کی لاگت 5 ارب ڈالر رہی۔",
            "کمزور زلزلے نے بہت زیادہ لوگوں کی جان لی۔",
            "چلی مضبوط عمارتوں اور منصوبہ بندی کا خرچ اٹھا سکتا تھا۔ نیپال نہیں اٹھا سکتا تھا۔",
            "کسی ملک کو کتنا نقصان پہنچتا ہے، اس میں سب سے بڑا فرق دولت ڈالتی ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Primary and secondary effects",
          paragraphs: [
            "The effects of an earthquake are everything it does to people, property and the environment. Primary effects happen immediately, when the earthquake occurs: the ground shakes, buildings and bridges collapse, roads crack, people are killed and injured by falling masonry. Secondary effects are caused by the primary effects, and they follow afterwards: a tsunami set off by the shaking, landslides from loosened slopes, fires from broken gas pipes, liquefaction of soft ground, disease spreading in crowded camps, businesses and tourism losing income. As a rule, secondary effects make the earthquake last longer, and some of them, a tsunami above all, carry its damage far beyond the area that was shaken.",
            "Geographers also sort effects into social (people: deaths, injuries, homelessness), economic (money: buildings, businesses, the cost of damage) and environmental (land and water: landslides, pollution, cracked ground). Your mind-map task used both sortings at once: primary social, primary economic, primary environmental, then the same three for secondary effects.",
            "Your lesson gave four examples of where primary and secondary effects were each more significant. In Japan 2011 it was not the shaking but the secondary tsunami that did most of the killing, with almost 20,000 deaths along the east coast. In Haiti 2010 a cholera outbreak followed the earthquake, but most deaths came from collapsing buildings, a primary effect. In Christchurch, New Zealand, in 2011, 181 people died, most from collapsing buildings, yet the longer disruption came from the secondary effect of liquefaction, which killed no one but drove more than 70,000 people out of the city. At Kaikoura, New Zealand, only two people died, but landslides and a tsunami closed the coast road and railway for months, with a lasting economic impact."
          ],
          tip: "Primary: in the moment, by the shaking. Secondary: afterwards, because of the primary effects. If you can put the word because before it, it is probably secondary."
        },
        {
          heading: "Immediate and long-term responses",
          paragraphs: [
            "Responses are the help made available after a hazard to reduce its effects. Immediate (short-term) responses are the help given just after the hazard, aimed at the primary effects: search and rescue teams digging survivors out of rubble, temporary shelters for people whose homes have gone, medical supplies and field hospitals, food and clean water, restoring power and communications where possible.",
            "Long-term responses are the help provided over weeks, months and years to recover from the losses, mostly the secondary effects: rebuilding damaged homes, factories, roads, schools and hospitals, restoring electricity and water supplies permanently, bringing businesses and tourism back, and often rebuilding to higher standards so that the next earthquake does less damage.",
            "Your case-study worksheet had one row for each: location, causes, primary effects, secondary effects, immediate response, long-term response, for Chile and again for Nepal. The stretch task asked for the most important immediate and long-term response in your own opinion. There is no single right answer, but a strong one explains why: for example, search and rescue saves the most lives in the first days, while rebuilding to earthquake-proof standards saves the most lives in the long run."
          ],
          tip: "Match the response to the effect: immediate responses tackle primary effects; long-term responses recover from secondary effects."
        },
        {
          heading: "Chile 2010 and Nepal 2015",
          paragraphs: [
            "Chile, on the west coast of South America, is a high income country (HIC). Its earthquake in 2010 was caused by the Nazca plate subducting under the South American plate at a destructive margin, and it measured 8.8 on the Richter scale, one of the most powerful earthquakes ever recorded. About 500 people died. The cost of the damage was around 30 billion US dollars. Chile lost power, water supply and communications too, but as the richer country it put them back faster and suffered fewer knock-on effects.",
            "Nepal, in the Himalayas between India and China, is a low income country (LIC). Its earthquake in 2015 was caused by the collision of the Indo-Australian plate with the Eurasian plate, and it measured 7.9. About 9000 people died. The cost of the damage was around 5 billion US dollars. Nepal also lost power, water and communications, but many of its buildings were not earthquake-proof, there was little temporary housing to prevent homelessness, and recovery has taken far longer.",
            "Set the two side by side and the lesson is stark. The Chile earthquake was 0.9 higher on the Richter scale, yet it killed about one eighteenth as many people. The damage bill was six times higher in Chile, because it costs far more to rebuild high-standard buildings. Magnitude did not decide the death toll; development did."
          ],
          worked: {
            q: "Chile 2010: magnitude 8.8, about 500 deaths, damage 30 billion dollars. Nepal 2015: magnitude 7.9, about 9000 deaths, damage 5 billion dollars. Compare the two earthquakes using figures.",
            steps: [
              "Magnitude: 8.8 − 7.9 = 0.9. Chile's earthquake was 0.9 higher on the Richter scale, so it was the more powerful.",
              "Deaths: 9000 ÷ 500 = 18. Eighteen times as many people died in Nepal as in Chile.",
              "Cost: 30 ÷ 5 = 6. The damage in Chile cost six times as much as in Nepal, because its buildings were more expensive to replace.",
              "Comment: the stronger earthquake caused fewer deaths but a higher bill. Wealth protected people in Chile; poverty exposed them in Nepal."
            ],
            answer: "Chile was 0.9 higher in magnitude; Nepal had 18 times the deaths; Chile had 6 times the damage cost.",
            checks: [
              { expr: "MAG_CHILE_2010-MAG_NEPAL_2015", value: 0.9, tol: 0.001 },
              { expr: "NEPAL_DEATHS/CHILE_DEATHS", value: 18, tol: 0 },
              { expr: "CHILE_COST_BN/NEPAL_COST_BN", value: 6, tol: 0 }
            ]
          },
          tip: "For each case study learn four numbers: the year, the magnitude, the deaths and the cost. Then you can compare in every answer."
        },
        {
          heading: "Why the effects were so different",
          paragraphs: [
            "Nobody makes an earthquake happen: the shaking comes from processes in the crust that no one controls. It turns into a hazard only where people and property are in its way, so what decides the severity of the effects is where people live and how well they and their buildings are protected. The clearest link is with wealth. Earthquakes themselves rarely kill; collapsing buildings do. An HIC such as Chile can afford buildings with reinforced concrete columns and steel frames that stay standing, and can plan, prepare and protect, so it sees far fewer deaths. An LIC such as Nepal cannot afford to reinforce its buildings or to provide temporary housing, so the same shaking brings down homes and leaves people homeless.",
            "Wealth also decides the speed of recovery. A country that already enjoyed a higher quality of life before the earthquake has the money, equipment and organisation to rebuild quickly, so secondary effects are fewer and shorter. A poorer country recovers slowly, and the secondary effects, homelessness, disease, lost income, stretch out for years.",
            "Wealth is the biggest factor but not the only one. A densely populated area, or one close to the epicentre, will suffer more deaths if its buildings are not protected. A shallow focus does more damage than a deep one. And if a government is corrupt, so that money is not spent on planning, preparation and protection, even a rich country can suffer severe effects. Your nine-mark answer should say that wealth matters most, and then weigh the other factors against it."
          ],
          tip: "The exam phrase is contrasting levels of wealth. Name the HIC and the LIC, give a figure for each, then add one other factor such as population density or distance from the epicentre."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is a secondary effect of an earthquake?", options: ["An outbreak of cholera in the weeks after the shaking", "Buildings collapsing as the ground shakes", "People injured by falling masonry", "Roads cracking during the earthquake"], answer: 0, why: "A cholera outbreak is caused by the primary effects (broken water supplies, crowded camps), so it is a secondary effect. The other three happen immediately, in the shaking: primary effects.",
          feedback: [
            "",
            "Buildings collapse during the shaking itself, so that is a primary effect. A secondary effect comes afterwards, because of the primary effects, like disease spreading in the weeks after.",
            "Injuries from falling masonry happen in the moment of the earthquake: a primary effect. Secondary effects follow later as a result, such as a cholera outbreak.",
            "Roads crack as the ground shakes, which is immediate and so primary. Secondary effects are the later consequences, such as disease spreading after water supplies are broken."
          ] },
        { kind: "gap", q: "Search and rescue, temporary shelters and medical supplies are examples of ___ responses.", answer: "immediate", options: ["immediate", "long-term", "secondary"], why: "Immediate (short-term) responses are the help given just after the hazard to reduce its primary effects. Rebuilding homes and roads is a long-term response.",
          feedback: {
            "long-term": "Long-term responses take weeks, months and years: rebuilding homes, factories, roads and schools. Search and rescue, shelters and medical supplies are needed in the first hours and days, so they are immediate responses.",
            "secondary": "Secondary describes effects, not responses: the effects caused by the primary effects. Help given straight after the hazard is an immediate response."
          } },
        { kind: "numeric", q: "What was the magnitude of the Chile 2010 earthquake on the Richter scale?", answer: 8.8, tolerance: 0, units: "", check: "MAG_CHILE_2010", why: "Chile 2010 was magnitude 8.8, at the destructive margin where the Nazca plate subducts under the South American plate.",
          misconceptions: [
            { answer: 7.9, says: "7.9 was the Nepal 2015 earthquake. Chile 2010 was the stronger of the two, at 8.8.", check: "MAG_NEPAL_2015" },
            { answer: 9, says: "9 was Japan 2011. Chile 2010 was 8.8, just below it.", check: "MAG_JAPAN_2011" },
            { answer: 0.9, says: "0.9 is the difference between Chile (8.8) and Nepal (7.9), not Chile's magnitude. Chile 2010 was 8.8.", check: "MAG_CHILE_2010-MAG_NEPAL_2015" }
          ] }
      ],
      modules: [
        {
          title: "Sorting a case study",
          task: {
            kind: "match",
            q: "Match each case-study heading to the example that belongs under it.",
            pairs: [
              ["Primary effect", "Homes collapse as the ground shakes, killing and injuring people inside"],
              ["Secondary effect", "A tsunami set off by the shaking floods the coast hours later"],
              ["Immediate response", "Rescue teams search the rubble and set up temporary shelters"],
              ["Long-term response", "Homes, schools and roads are rebuilt to higher standards over the following years"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Two headings are effects (what the earthquake does); two are responses (what people do about it).",
                "An effect that happens in the shaking is primary; one caused by it afterwards is secondary.",
                "A response in the first hours and days is immediate; one over months and years is long-term.",
                "Look for time words in each example: as the ground shakes, hours later, following years."
              ],
              example: {
                q: "Sort: a landslide blocks a mountain road two days after the earthquake; a field hospital treats the injured on the first night. Choices: secondary effect; immediate response.",
                steps: ["The landslide is caused by the shaking and comes later, so it is a secondary effect.", "The field hospital is help on the first night, so it is an immediate response."],
                answer: "Landslide: secondary effect. Field hospital: immediate response."
              }
            },
            core: { hint: "Effects are what happens; responses are what people do. Then ask: straight away, or later?" },
            stretch: { extend: "Explain why a long-term response such as rebuilding to higher standards is also a form of protection against the next earthquake." }
          },
          explain: "Say, in one sentence, how you tell a primary effect from a secondary one.",
          why: "Primary effect: collapse in the shaking. Secondary effect: the tsunami caused by it. Immediate response: search, rescue and shelter. Long-term response: rebuilding over years."
        },
        {
          title: "The cost of the damage",
          task: {
            kind: "numeric",
            q: "The damage from the Chile 2010 earthquake cost about 30 billion US dollars; the damage in Nepal 2015 cost about 5 billion. How many billion dollars more did the damage cost in Chile than in Nepal?",
            answer: 25, tolerance: 0, units: "billion dollars", check: "CHILE_COST_BN-NEPAL_COST_BN",
            misconceptions: [
              { answer: 35, says: "You have added the two costs. The question asks how much more Chile's cost was, so subtract: 30 − 5 = 25 billion dollars.", check: "CHILE_COST_BN+NEPAL_COST_BN" },
              { answer: 6, says: "6 is how many times bigger Chile's bill was (30 ÷ 5). The question asks for the difference in billions: 30 − 5 = 25.", check: "CHILE_COST_BN/NEPAL_COST_BN" },
              { answer: 150, says: "You have multiplied the two figures. The difference between them is 30 − 5 = 25 billion dollars.", check: "CHILE_COST_BN*NEPAL_COST_BN" }
            ]
          },
          contexts: [
            { label: "News report", q: "A news report puts the earthquake damage in Chile in 2010 at 30 billion dollars and in Nepal in 2015 at 5 billion dollars. By how many billion dollars was Chile's bill the larger?", check: "CHILE_COST_BN-NEPAL_COST_BN" },
            { label: "Exam figure", q: "An exam figure gives damage costs of 30 billion dollars for Chile 2010 and 5 billion dollars for Nepal 2015. How many billion dollars more was the damage in Chile?", check: "CHILE_COST_BN-NEPAL_COST_BN" },
            { label: "Revision table", q: "Your revision table lists damage of 30 billion dollars (Chile 2010) and 5 billion dollars (Nepal 2015). Work out the difference in billions of dollars.", check: "CHILE_COST_BN-NEPAL_COST_BN" }
          ],
          explain: "Say, in one sentence, why the richer country had the higher damage bill even though far fewer people died.",
          levels: {
            support: {
              steps: [
                "Write the larger cost first: 30 billion.",
                "Subtract the smaller: 30 − 5.",
                "30 − 5 = 25. Keep the units: billion dollars.",
                "Check it makes sense: Chile's bill should be much bigger, and 25 billion more is."
              ],
              example: {
                q: "One earthquake caused 12 billion dollars of damage and another 4 billion. How many billion dollars more did the first cost?",
                steps: ["Larger minus smaller: 12 − 4.", "12 − 4 = 8 billion dollars."],
                answer: "8 billion dollars",
                checks: [{ expr: "12-4", value: 8, tol: 0 }]
              }
            },
            core: { hint: "How many more means subtract. Larger cost minus smaller cost." },
            stretch: { extend: "Explain why the cost of damage in dollars is a poor way to compare how badly two countries were affected." }
          },
          why: "30 − 5 = 25 billion dollars. Chile's bill was higher because its buildings and infrastructure were worth more and cost more to replace; the human toll was far lower."
        },
        {
          title: "The weaker earthquake that killed more",
          task: {
            kind: "written",
            q: "Using the Chile 2010 and Nepal 2015 earthquakes, explain why the earthquake with the lower magnitude caused far more deaths. (6 marks)",
            marks: 6,
            criteria: [
              "Names both case studies with their magnitudes (8.8 and 7.9) and approximate death tolls (500 and 9000)",
              "Identifies Chile as the HIC and Nepal as the LIC and links wealth to building standards",
              "Explains how earthquake-proof buildings reduce deaths (reinforced concrete, steel frames) and how their absence raises them",
              "Mentions planning, preparation or protection that Chile could afford and Nepal could not",
              "Ends with a conclusion that development, not magnitude, decided the death toll",
              "Uses the key words primary effect, HIC, LIC and development correctly"
            ],
            model: "Chile is an HIC and Nepal is an LIC, and that difference explains the death tolls better than magnitude does. The Chile earthquake of 2010 measured 8.8 and killed about 500 people; the Nepal earthquake of 2015 measured 7.9 and killed about 9000. Earthquakes themselves rarely kill people; collapsing buildings do. Chile could afford buildings with reinforced concrete columns and steel frames that stayed standing, so the primary effect of collapse was limited, and it had planned and prepared so that help and temporary housing were available. Nepal could not afford to reinforce its buildings, so homes collapsed on the people inside, and there was little temporary housing to prevent homelessness, which lengthened the secondary effects. Therefore the level of development, not the strength of the shaking, decided how many people died."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: name both earthquakes with year, magnitude and deaths. Say which is the HIC and which the LIC.",
                "Sentence 2: the key idea: shaking does not kill, collapsing buildings do.",
                "Sentence 3: what Chile could afford (strong buildings, planning, preparation) and what happened as a result.",
                "Sentence 4: what Nepal could not afford and what happened as a result.",
                "Last sentence: therefore development decided the death toll, not magnitude."
              ],
              example: {
                q: "In two sentences, explain why an earthquake of the same magnitude would kill more people in a city of unreinforced brick homes than in a city of steel-framed buildings.",
                steps: ["Say what each kind of building does in the shaking.", "Link it to deaths."],
                answer: "Unreinforced brick homes crack and collapse when the ground shakes, burying the people inside, whereas steel-framed buildings flex and stay standing. So the same shaking causes far more deaths in the city of brick homes."
              }
            },
            core: { hint: "Two case studies, four numbers, one idea (buildings kill), and a conclusion about development." },
            stretch: { extend: "Add a sentence weighing one other factor, such as population density or distance from the epicentre, and say whether it changes your conclusion." }
          },
          explain: "Say, in one sentence, why collapsing buildings, not the shaking itself, explain the difference between the two death tolls.",
          why: "A top answer pairs the figures (8.8 and 500; 7.9 and 9000), explains the wealth gap through building standards and preparation, and concludes that development decided the toll."
        }
      ]
    },

    /* ───────────── 6 · living with the risk ───────────── */
    {
      key: "living-with-risk", n: 6, title: "Living with the risk, and reducing it",
      lead: "Why people choose to live beside volcanoes, what Rotorua's geysers taught you about geothermal energy, and how far prediction, protection, planning and monitoring (the 3Ps and M) can reduce the risk from earthquakes and volcanoes.",
      covers: [9, 10, 11],
      pretext: {
        words: [
          { word: "fertile", means: "good for growing crops", sentence: "Volcanic ash makes the soil around Vesuvius fertile." },
          { word: "geothermal", means: "heat from inside the Earth", sentence: "Iceland uses geothermal energy to make cheap electricity." },
          { word: "hot spot", means: "a place where very hot mantle rises under a plate, making volcanoes away from a boundary", sentence: "Hawaii sits on a hot spot in the middle of the Pacific plate." },
          { word: "geyser", means: "a spring that shoots hot water and steam into the air", sentence: "Rotorua's geysers attract millions of tourists." },
          { word: "hazard map", means: "a map showing which areas a hazard is most likely to affect", sentence: "A hazard map helps a town plan where to evacuate from." },
          { word: "evacuation", means: "moving people out of danger before a hazard strikes", sentence: "Monitoring the volcano gave time for evacuation." }
        ],
        passage: [
          "Millions of people live near volcanoes.",
          "Volcanic ash makes the soil fertile, so farming is good.",
          "Heat from underground gives cheap geothermal energy.",
          "Volcanic rock makes strong building materials.",
          "Volcanoes bring tourists and jobs.",
          "In Rotorua, New Zealand, hot water from underground feeds geysers and hot pools.",
          "People drilled too many wells and the geysers began to stop.",
          "When drilling was controlled, a geyser came back to life.",
          "The risk from tectonic hazards can be reduced in four ways.",
          "Prediction means saying when and where a hazard will happen.",
          "Protection means building so that people and property survive.",
          "Planning means using hazard maps and practising what to do.",
          "Monitoring means watching for warning signs.",
          "Volcanoes can be predicted by monitoring; earthquakes still cannot."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "صالح لزراعة المحاصيل (fertile)",
            "حرارة من داخل الأرض (geothermal)",
            "مكان يرتفع عنده وشاح حارّ جدًّا تحت صفيحة، فيصنع براكين بعيدًا عن حدود الصفائح (hot spot)",
            "عين تقذف ماءً حارًّا وبخارًا في الهواء (geyser)",
            "خريطة تبيّن المناطق التي يُرجَّح أن يصيبها الخطر (hazard map)",
            "نقل الناس بعيدًا عن الخطر قبل أن يضرب (evacuation)"
          ],
          "passage": [
            "ملايين الناس يعيشون قرب البراكين.",
            "فالرماد البركاني يجعل التربة خصبة، فالزراعة جيّدة.",
            "والحرارة من تحت الأرض تعطي طاقة حرارية أرضية رخيصة.",
            "والصخر البركاني يصنع موادّ بناء قويّة.",
            "والبراكين تجلب السيّاح والأعمال.",
            "وفي روتوروا (Rotorua) في نيوزيلندا يغذّي الماء الحارّ من تحت الأرض نوافير حارّة وبِرَكًا حارّة.",
            "وقد حفر الناس آبارًا أكثر من اللازم فبدأت النوافير تتوقّف.",
            "وعندما ضُبِط الحفر عادت إحدى النوافير إلى الحياة.",
            "ويمكن تقليل خطر المخاطر التكتونية بأربع طرق.",
            "فالتوقّع يعني أن تقول متى يحدث الخطر وأين.",
            "والحماية تعني أن تبني بناءً ينجو به الناس والممتلكات.",
            "والتخطيط يعني استخدام خرائط المخاطر والتدرّب على ما يجب عمله.",
            "والرصد يعني مراقبة علامات الإنذار.",
            "والبراكين يمكن توقّعها بالرصد، أمّا الزلازل فلا يمكن توقّعها بعد."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "dobry do uprawy roślin",
            "ciepło z wnętrza Ziemi (geothermal)",
            "miejsce, gdzie bardzo gorący płaszcz unosi się pod płytą i tworzy wulkany daleko od granicy płyt (hot spot)",
            "źródło, które wyrzuca w powietrze gorącą wodę i parę (geyser)",
            "mapa pokazująca, które obszary zagrożenie dotknie najprawdopodobniej (hazard map)",
            "wywożenie ludzi z miejsca zagrożenia, zanim ono uderzy (evacuation)"
          ],
          "passage": [
            "Miliony ludzi mieszkają blisko wulkanów.",
            "Popiół wulkaniczny czyni glebę żyzną, więc uprawa dobrze się udaje.",
            "Ciepło z głębi ziemi daje tanią energię geotermalną.",
            "Skała wulkaniczna daje mocne materiały budowlane.",
            "Wulkany przywożą turystów i dają pracę.",
            "W Rotorua w Nowej Zelandii gorąca woda z głębi ziemi karmi gejzery i gorące sadzawki.",
            "Ludzie wywiercili za dużo odwiertów i gejzery zaczęły zamierać.",
            "Kiedy wiercenie ograniczono, jeden gejzer wrócił do życia.",
            "Ryzyko zagrożeń tektonicznych można zmniejszyć na cztery sposoby.",
            "Prognozowanie znaczy mówienie, kiedy i gdzie zagrożenie się zdarzy.",
            "Zabezpieczanie znaczy budowanie tak, żeby ludzie i mienie przetrwali.",
            "Planowanie znaczy korzystanie z map zagrożeń i ćwiczenie, co robić.",
            "Obserwowanie znaczy wypatrywanie znaków ostrzegawczych.",
            "Wulkany można przewidzieć przez obserwację, a trzęsień ziemi nadal nie można."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "bom para cultivar plantas (fertile, fértil)",
            "calor que vem do interior da Terra (geothermal, geotérmico)",
            "um lugar onde manto muito quente sobe por baixo de uma placa e forma vulcões longe de um limite (hot spot, ponto quente)",
            "uma nascente que lança água quente e vapor para o ar (geyser, géiser)",
            "um mapa que mostra quais são as áreas que um risco natural tem mais probabilidade de afetar (hazard map)",
            "levar as pessoas para fora do perigo antes de um risco natural acontecer (evacuation, evacuação)"
          ],
          "passage": [
            "Há milhões de pessoas a viver perto de vulcões.",
            "As cinzas vulcânicas tornam o solo fértil, por isso a agricultura é boa.",
            "O calor do subsolo dá energia geotérmica barata.",
            "A rocha vulcânica dá materiais de construção resistentes.",
            "Os vulcões trazem turistas e empregos.",
            "Em Rotorua, na Nova Zelândia, a água quente do subsolo alimenta géiseres e lagoas quentes.",
            "As pessoas abriram poços a mais e os géiseres começaram a parar.",
            "Quando a perfuração passou a ser controlada, um géiser voltou à vida.",
            "O risco dos riscos naturais tectónicos/tectônicos pode ser reduzido de quatro maneiras.",
            "A previsão é dizer quando e onde um risco natural vai acontecer.",
            "A proteção é construir de maneira a que as pessoas e os bens sobrevivam.",
            "O planeamento/planejamento é usar mapas de risco e treinar o que fazer.",
            "A vigilância é estar atento aos sinais de aviso.",
            "Os vulcões podem ser previstos com vigilância; os sismos/terremotos ainda não."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "u fiican beeridda dalagga",
            "kulayl ka yimid Dhulka gudihiisa",
            "meel ay mantle aad u kulul ay plate hoostiisa ka kacdo, taasoo foolkaano samaysa meel boundary ka fog",
            "il biyo oo biyo kulul iyo uumi hawada kor ugu tuurta",
            "khariidad muujinaysa meelaha khatartu ugu badan tahay inay saameyso",
            "dadka laga saaro halis khatarta ka hor"
          ],
          "passage": [
            "Malaayiin dad ayaa ku nool foolkaanaha agtooda.",
            "Dambaska foolkaanaha wuxuu ciidda ka dhigaa barwaaqo, markaa beeridda way fiican tahay.",
            "Kulaylka dhulka hoostiisa wuxuu bixiyaa tamar geothermal jaban.",
            "Dhagaxa foolkaanaha wuxuu samaysaa alaab dhisme adag.",
            "Foolkaanuhu waxay keenaan dalxiisayaal iyo shaqo.",
            "Rotorua, ee New Zealand, biyo kulul oo dhulka hoostiisa ka yimid waxay quudiyaan geysers iyo balliyo kulul.",
            "Dadku waxay qodeen godad aad u badan, geysers-kuna waxay bilaabeen inay joogsadaan.",
            "Markii qodista la xakameeyay, geyser ayaa dib u soo noolaaday.",
            "Khatarta tectonic hazards waxaa afar siyaabood lagu yareyn karaa.",
            "Saadaalinta macnaheedu waa inaad sheegto goorta iyo meesha khatartu ka dhacayso.",
            "Ilaalintu macnaheedu waa in si loo dhiso oo dadka iyo hantidu badbaadaan.",
            "Qorsheyntu macnaheedu waa isticmaalka hazard maps iyo tababbarka waxa la sameeyo.",
            "La socodku macnaheedu waa raadraaca calaamadaha digniinta.",
            "Foolkaanaha waxaa lagu saadaalin karaa la socodka; dhulgariirrada weli lama saadaalin karo."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "добрий для вирощування врожаю (fertile)",
            "тепло з глибин Землі (geothermal)",
            "місце, де дуже гаряча мантія піднімається під плитою, утворюючи вулкани далеко від межі (hot spot)",
            "джерело, яке вистрілює гарячу воду і пару в повітря (geyser)",
            "карта, яка показує, на які райони небезпека найімовірніше подіє (hazard map)",
            "виведення людей із небезпеки до того, як вона вдарить (evacuation)"
          ],
          "passage": [
            "Мільйони людей живуть біля вулканів.",
            "Вулканічний попіл робить ґрунт родючим, тому землеробство добре.",
            "Тепло з-під землі дає дешеву геотермальну енергію.",
            "Вулканічна порода дає міцні будівельні матеріали.",
            "Вулкани приносять туристів і робочі місця.",
            "У Роторуа (Rotorua) в Новій Зеландії гаряча вода з-під землі живить гейзери й гарячі озерця.",
            "Люди пробурили надто багато свердловин, і гейзери почали зникати.",
            "Коли буріння взяли під контроль, один гейзер повернувся до життя.",
            "Ризик від тектонічних небезпек можна зменшити чотирма способами.",
            "Прогноз означає сказати, коли і де небезпека станеться.",
            "Захист означає будувати так, щоб люди й майно вціліли.",
            "Планування означає використовувати карти небезпек і відпрацьовувати, що робити.",
            "Спостереження означає пильнувати за ознаками попередження.",
            "Вулкани можна передбачити спостереженням; землетруси досі не можна."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "فصلیں اگانے کے لیے اچھی (fertile)",
            "زمین کے اندر سے آنے والی حرارت (geothermal)",
            "وہ جگہ جہاں بہت گرم mantle کسی plate کے نیچے اوپر اٹھتا ہے، اور boundary سے دور آتش فشاں بناتا ہے (hot spot)",
            "وہ چشمہ جو گرم پانی اور بھاپ ہوا میں اچھالتا ہے (geyser)",
            "وہ نقشہ جو دکھاتا ہے کہ کون سے علاقے کسی hazard سے سب سے زیادہ متاثر ہو سکتے ہیں (hazard map)",
            "hazard آنے سے پہلے لوگوں کو خطرے سے باہر لے جانا (evacuation)"
          ],
          "passage": [
            "لاکھوں لوگ آتش فشانوں کے قریب رہتے ہیں۔",
            "آتش فشاں کی راکھ مٹی کو زرخیز بناتی ہے، اس لیے کھیتی اچھی ہوتی ہے۔",
            "زمین کے نیچے سے آنے والی حرارت سستی geothermal توانائی دیتی ہے۔",
            "آتش فشانی چٹان سے مضبوط تعمیراتی مواد بنتا ہے۔",
            "آتش فشاں سیر کرنے والوں اور روزگار کو لاتے ہیں۔",
            "نیوزی لینڈ کے Rotorua میں زمین کے نیچے سے آنے والا گرم پانی geysers اور گرم تالابوں کو بھرتا ہے۔",
            "لوگوں نے بہت زیادہ کنویں کھود لیے اور geysers رکنے لگے۔",
            "جب کھدائی پر قابو پایا گیا تو ایک geyser دوبارہ زندہ ہو گیا۔",
            "tectonic hazards کے خطرے کو چار طریقوں سے کم کیا جا سکتا ہے۔",
            "prediction کا مطلب یہ بتانا ہے کہ کوئی hazard کب اور کہاں آئے گا۔",
            "protection کا مطلب ایسی تعمیر ہے جس سے لوگ اور املاک بچ جائیں۔",
            "planning کا مطلب hazard maps استعمال کرنا اور مشق کرنا ہے کہ کیا کرنا ہے۔",
            "monitoring کا مطلب خطرے کی نشانیوں پر نظر رکھنا ہے۔",
            "آتش فشانوں کی پیشین گوئی monitoring سے ہو سکتی ہے؛ زلزلوں کی اب بھی نہیں ہو سکتی۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Living in the shadow of volcanoes",
          paragraphs: [
            "Tomatoes grow on the slopes of Mount Vesuvius in Italy because the soil, made from volcanic ash, is so fertile. That one fact opens the question your class debated: why do people expose themselves to the risk of living near a volcano? Your lesson gives four benefits. Fertile soil for farming. Renewable and cheaper energy, because geothermal heat from underground can generate electricity. Durable construction materials from volcanic rock. And jobs from tourism, because people travel a long way to see a volcano.",
            "Your case studies were Hawaii and Iceland, and they are volcanic for different reasons. Iceland sits on a constructive margin, the Mid-Atlantic Ridge, where the North American and Eurasian plates pull apart and magma rises between them. Hawaii sits in the middle of the Pacific plate, far from any boundary, above a hot spot where a plume of very hot mantle rises and burns through the plate. Both are also hot spots in the everyday sense: geothermal energy heats homes and pools and powers the electricity grid, and tourism brings in money.",
            "The task asked whether you would rather live in Hawaii or Iceland, and to what extent a volcano is a blessing to each. Build your judgement from the benefits sorted into economic (energy, building materials, farming income, tourist jobs) and environmental (fertile soil, geothermal heat), set against the risks: eruptions, poisonous gases and the chance that the land you farm is buried in ash."
          ],
          tip: "Learn the four benefits as a list: soil, energy, building materials, tourism. Then attach each to Hawaii or Iceland for a located answer."
        },
        {
          heading: "The Rotorua geyser mystery",
          paragraphs: [
            "Rotorua, on the North Island of New Zealand, is famous for its geysers, its hot springs and hot pools, and the smell of sulphur. It attracts around 3 million visitors each year; its own population is about 68,000, of whom 35 % are Maori. For centuries Maori people have used these natural hot springs to heat their homes, cook, bathe, wash clothes and heal, and have tried to respect what the land offered. A geyser forms when rainwater sinks deep into the Earth and is heated far past boiling point. Hot water is lighter than cold water, so it rises; pressure builds in an underground reservoir, and when the superheated water is forced up a narrow vent it flashes to steam and erupts, like a pressure cooker letting go. Then the cycle begins again.",
            "The mystery was Te Whakarewarewa, a geyser that had been dormant for 35 years and sprang back into life at 11:35 am on Saturday 12 October 2013. The cards solved it. In the 1950s electricity restrictions led people to drill their own bore holes to heat their homes; the wells were inefficient and wasted heat. Through the 1970s the geothermal field beneath Rotorua dropped, and the geysers and springs began to decline. Since 1991 extraction has been managed: communal systems in which 10 or more homes share a single well are now required. With less water taken out, pressure and water levels recovered, and the geyser returned.",
            "The stretch question asked whether geothermal power is sustainable. The cards give both sides. A geothermal field can keep going as long as the water level and the pressure underground are kept up, and with less drilling the geysers and springs recover. But the fields are fragile, human pressure has been the biggest problem, and the gases that come with the heat, carbon dioxide and hydrogen sulphide, can build up to deadly levels in poorly ventilated pools and homes, especially where built-up areas stop them venting. Evaluate means discuss the good and the bad and make a judgement."
          ],
          worked: {
            q: "Rotorua has about 68,000 residents and attracts around 3 million visitors a year. Roughly how many visitors is that for every resident?",
            steps: [
              "Write the division: visitors ÷ residents = 3,000,000 ÷ 68,000.",
              "Simplify by cancelling three zeros from each: 3000 ÷ 68.",
              "3000 ÷ 68 ≈ 44.1, so about 44 visitors for every resident each year.",
              "Comment: tourism on that scale is a major income, which is why protecting the geysers matters economically as well as environmentally."
            ],
            answer: "About 44 visitors per resident each year.",
            checks: [{ expr: "ROTORUA_VISITORS/ROTORUA_POP", value: 44.1, tol: 0.1 }]
          },
          tip: "Geyser cycle in four words: seep, heat, pressure, erupt. The mystery's answer in four: drilling, decline, management, recovery."
        },
        {
          heading: "Reducing the risk from earthquakes: the 3Ps and M",
          paragraphs: [
            "There are four management strategies for reducing the risk from tectonic hazards: prediction, protection, planning and monitoring, which your class called the 3Ps and M. For earthquakes, prediction is inaccurate, because there are no clear warning signs that an earthquake is about to happen. What scientists can do is use the frequency of past earthquakes to identify areas at high risk: Istanbul in Turkey, for example, lies on the conservative margin between the Eurasian and Anatolian plates and is known to be at risk, even though no one can say when.",
            "Protection means constructing buildings and bridges that withstand the ground shaking. In Chile, new buildings have reinforced concrete columns held inside a steel frame, which is one reason its 2010 earthquake killed so few. Tsunami walls can be built along coasts to stop the water surging inland. Planning uses maps of past earthquakes, with dates, so that the frequency of earthquakes in an area can be calculated and the most at-risk areas identified, and emergency plans and drills prepared for them.",
            "Monitoring of earthquakes is still unreliable. Instruments can detect changes in water pressure, ground deformation and tremors, but scientists still cannot turn those warnings into a reliable forecast of when an earthquake will strike. So for earthquakes the weight falls on protection and planning: you cannot stop the shaking or know its date, but you can make sure the buildings stay up and people know what to do."
          ],
          tip: "For earthquakes: prediction weak, monitoring unreliable, protection and planning strong. Give Istanbul for risk mapping and Chile for building design."
        },
        {
          heading: "Reducing the risk from volcanoes",
          paragraphs: [
            "Volcanoes are different: their eruptions can be predicted, because prediction is based on monitoring, and volcanoes give warning signs. In 2010 the eruption of Eyjafjallajokull in Iceland was accurately predicted by scientists before it erupted in March and April, because the earthquakes under the volcano increased and were closely monitored. Volcanoes are monitored for signs of eruption in several ways: remote sensing from satellites, seismicity (the small earthquakes caused by rising magma), ground deformation as the volcano swells, and the release of gases into the atmosphere or dissolved in water.",
            "Protection against volcanoes is harder than against earthquakes, because little can stand up to an eruption. Earth embankments and explosives have been used on the slopes of Mount Etna in Italy to steer lava flows away from property, but the power of an eruption can make it impossible to protect people and property. Planning therefore matters most. Hazard maps showing the areas an eruption is likely to affect are produced for volcanic regions, and they are used to plan, for example, the evacuation of the areas most at risk.",
            "So how far can the 3Ps and M reduce the risk? For volcanoes, a long way: monitoring gives prediction, prediction gives time, and planning turns time into evacuation. For earthquakes, the strategies reduce the effects rather than the event: protection keeps buildings standing and planning gets help moving fast. Either way, they cost money, which is why, as the Chile and Nepal comparison showed, an HIC can reduce its risk far more than an LIC."
          ],
          tip: "A nine-mark assess question on the 3Ps and M needs both hazards, at least one located example for each strategy, and a judgement that depends on the hazard and the country's wealth."
        }
      ],
      gate: [
        { kind: "mcq", q: "How were scientists able to predict the 2010 eruption of Eyjafjallajokull in Iceland?", options: ["By monitoring the increasing earthquakes under the volcano", "By studying the frequency of past eruptions on a hazard map", "By measuring changes in sea temperature around Iceland", "By using tsunami walls along the Icelandic coast"], answer: 0, why: "Volcanic prediction is based on monitoring. The earthquake events under Eyjafjallajokull increased and were closely watched, so scientists predicted the eruption before it happened in March and April 2010.",
          feedback: [
            "",
            "Hazard maps of past events are a planning tool and cannot say when the next eruption will come. The 2010 prediction came from monitoring: the earthquakes under the volcano increased before it erupted.",
            "Sea temperature is used for predicting tropical storms, not eruptions. Eyjafjallajokull was predicted by monitoring the increasing earthquakes beneath it.",
            "Tsunami walls are a protection strategy against earthquakes at the coast; they predict nothing. The eruption was predicted by monitoring the earthquakes under the volcano."
          ] },
        { kind: "gap", q: "On the slopes of Mount Etna, earth embankments and explosives have been used to divert ___ away from property.", answer: "lava flows", options: ["lava flows", "earthquakes", "tourists"], why: "Earth embankments and explosives can divert lava flows away from property; it was used on Mount Etna in Italy, though the power of an eruption can make protection impossible.",
          feedback: {
            "earthquakes": "Nothing can divert an earthquake; the shaking comes from the plates deep below. The embankments on Etna were built to steer lava flows away from property.",
            "tourists": "Tourists are a benefit of a volcano, not something to divert with explosives. The embankments and explosives on Etna were used to divert lava flows."
          } },
        { kind: "mcq", q: "Iceland is volcanic because it sits on which plate boundary?", options: ["The constructive margin between the North American and Eurasian plates", "The destructive margin between the Nazca and South American plates", "The conservative margin between the North American and Pacific plates", "The collision margin between the Indo-Australian and Eurasian plates"], answer: 0, why: "Iceland lies on the Mid-Atlantic Ridge, a constructive margin where the North American and Eurasian plates pull apart and magma rises to form volcanoes; it is also helped by a hot spot.",
          feedback: [
            "",
            "The Nazca and South American plates meet under the Andes in South America, not under Iceland. Iceland sits on the Mid-Atlantic Ridge where the North American and Eurasian plates pull apart.",
            "The North American and Pacific plates slide past each other along the San Andreas Fault in California, a conservative margin with no volcanoes. Iceland is on the constructive Mid-Atlantic Ridge.",
            "The Indo-Australian and Eurasian plates collide under the Himalayas, with no volcanoes. Iceland is volcanic because it sits on the constructive margin between the North American and Eurasian plates."
          ] }
      ],
      modules: [
        {
          title: "Which strategy is this?",
          task: {
            kind: "match",
            q: "Match each management strategy to its example from the lesson.",
            pairs: [
              ["Prediction", "Using the frequency of past earthquakes to identify Istanbul as a high-risk city on the Eurasian and Anatolian plate margin"],
              ["Protection", "Building new homes in Chile with reinforced concrete columns held inside a steel frame"],
              ["Planning", "Producing hazard maps of volcanic regions and using them to plan the evacuation of the most at-risk areas"],
              ["Monitoring", "Measuring ground deformation, seismicity and gas release at a volcano for signs of an eruption"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Prediction is about saying where or when something will happen, so look for the example about risk and the future.",
                "Protection is about buildings and structures that survive the hazard.",
                "Planning is about maps and what people will do: evacuation routes and drills.",
                "Monitoring is about measuring instruments and watching for warning signs."
              ],
              example: {
                q: "Sort: a tsunami wall built along a coast; a school practising an earthquake drill. Choices: planning; protection.",
                steps: ["A wall is a structure that holds back the hazard, so it is protection.", "A drill prepares people for what to do, so it is planning."],
                answer: "Tsunami wall: protection. Earthquake drill: planning."
              }
            },
            core: { hint: "Future risk, strong structures, maps and evacuation, instruments watching." },
            stretch: { extend: "Explain why monitoring leads to prediction for volcanoes but not for earthquakes." }
          },
          explain: "Say, in one sentence, the difference between planning and protection.",
          why: "Prediction: identifying Istanbul's risk from past frequency. Protection: Chile's reinforced buildings. Planning: hazard maps for evacuation. Monitoring: ground deformation, seismicity and gases at a volcano."
        },
        {
          title: "Rotorua by numbers",
          task: {
            kind: "numeric",
            q: "Rotorua has a population of about 68,000 people, of whom 35 % are Maori. About how many Maori people live in Rotorua?",
            answer: 23800, tolerance: 0, units: "people", check: "ROTORUA_POP*MAORI_PCT/100",
            misconceptions: [
              { answer: 2380, says: "That is 3.5 %, not 35 %; a decimal place has slipped. 35 % of 68,000 is 0.35 × 68,000 = 23,800.", check: "ROTORUA_POP*MAORI_PCT/1000" },
              { answer: 44200, says: "44,200 is the other 65 %, the people who are not Maori. The question asks for the 35 %: 0.35 × 68,000 = 23,800.", check: "ROTORUA_POP*(100-MAORI_PCT)/100" },
              { answer: 238000, says: "That is more than three times the whole population. You have multiplied by 35 without dividing by 100. 35 % of 68,000 = 23,800.", check: "ROTORUA_POP*MAORI_PCT/10" }
            ]
          },
          contexts: [
            { label: "Census", q: "A census gives Rotorua's population as 68,000 and records that 35 % of residents are Maori. How many residents does that represent?", check: "ROTORUA_POP*MAORI_PCT/100" },
            { label: "Tourist guide", q: "A tourist guide says Rotorua is home to 68,000 people and that 35 % of them are Maori, whose culture draws many visitors. How many people is 35 % of 68,000?", check: "ROTORUA_POP*MAORI_PCT/100" },
            { label: "Mystery card", q: "One of your mystery cards gives Rotorua's population as 68,000 with 35 % Maori. Work out how many people that is.", check: "ROTORUA_POP*MAORI_PCT/100" }
          ],
          explain: "Say, in one sentence, how you turn a percentage into a number of people.",
          levels: {
            support: {
              steps: [
                "Turn the percentage into a decimal: 35 % = 35 ÷ 100 = 0.35.",
                "Multiply the whole population by the decimal: 68,000 × 0.35.",
                "Break it up: 68,000 × 0.3 = 20,400 and 68,000 × 0.05 = 3,400.",
                "Add: 20,400 + 3,400 = 23,800 people."
              ],
              example: {
                q: "A town of 40,000 people has 15 % living in a flood-risk zone. How many people is that?",
                steps: ["15 % = 0.15.", "40,000 × 0.15 = 6,000."],
                answer: "6,000 people",
                checks: [{ expr: "40000*0.15", value: 6000, tol: 0 }]
              }
            },
            core: { hint: "Per cent means out of 100. Find 1 % of 68,000 first, then multiply by 35." },
            stretch: { extend: "Explain why Maori knowledge of the geothermal field matters to the debate about whether Rotorua's geothermal energy is sustainable." }
          },
          why: "35 % of 68,000 = 0.35 × 68,000 = 23,800 people. Percent means out of 100, so divide by 100 and multiply by 35."
        },
        {
          title: "How far can the risk be reduced?",
          task: {
            kind: "written",
            q: "To what extent can monitoring and prediction reduce the risk from tectonic hazards? Use examples of both earthquakes and volcanoes in your answer. (9 marks)",
            marks: 9,
            criteria: [
              "Explains what monitoring and prediction are and how they are linked",
              "Uses a located volcanic example where monitoring gave an accurate prediction (Eyjafjallajokull 2010) and says what the warning allowed",
              "Explains why earthquake prediction is inaccurate and monitoring unreliable, with a located example of what is possible instead (Istanbul risk mapping)",
              "Weighs monitoring and prediction against protection and planning",
              "Reaches a judgement that depends on the hazard type and on wealth (HIC and LIC)",
              "Is organised into an introduction, developed paragraphs and a conclusion using therefore, overall or in conclusion"
            ],
            model: "Monitoring means watching a hazard area for warning signs, and prediction means using those signs to say when and where a hazard will strike; one depends on the other. For volcanoes they reduce the risk a great deal. Rising magma causes small earthquakes, ground deformation and gas release, and in 2010 scientists monitoring the increasing earthquakes under Eyjafjallajokull predicted its eruption before it happened in March and April, giving time to warn and evacuate. For earthquakes, however, monitoring is still unreliable: changes in water pressure, ground deformation and tremors can all be measured, but they do not tell scientists when an earthquake will strike, so prediction is inaccurate. The most that can be done is to use the frequency of past earthquakes to identify high-risk places such as Istanbul, on the margin between the Eurasian and Anatolian plates, and then rely on protection and planning: Chile's reinforced buildings with steel frames kept its death toll near 500 in 2010, while Nepal, which could not afford them, lost about 9000 people in 2015. Overall, monitoring and prediction reduce the risk from volcanoes to a large extent but from earthquakes only to a small extent, and in both cases they only work alongside protection and planning, which an HIC can afford far more easily than an LIC."
          },
          levels: {
            support: {
              steps: [
                "Introduction: define monitoring and prediction and say that they are linked.",
                "Paragraph 1, volcanoes: monitoring (seismicity, ground deformation, gases) gives prediction; Eyjafjallajokull 2010; what the warning allowed.",
                "Paragraph 2, earthquakes: no clear warning signs, so prediction inaccurate and monitoring unreliable; Istanbul risk mapping; protection and planning do the work instead (Chile versus Nepal).",
                "Conclusion: to a large extent for volcanoes, a small extent for earthquakes; always alongside the other Ps; depends on wealth."
              ],
              example: {
                q: "In two sentences, assess how far monitoring can reduce the risk from a volcano.",
                steps: ["Say what is monitored and what it allows.", "Add a limit."],
                answer: "Monitoring a volcano's earthquakes, swelling and gases lets scientists predict an eruption, as at Eyjafjallajokull in 2010, so people can be evacuated in time. It reduces the risk a long way, but it cannot stop the eruption, so protection and planning are still needed."
              }
            },
            core: { hint: "Volcanoes yes, earthquakes mostly no; one located example for each; then weigh against protection and planning before you judge." },
            stretch: { extend: "Add a paragraph arguing that for an LIC, planning may reduce the risk more than monitoring ever could, and say why." }
          },
          explain: "Say, in one sentence, why prediction works for volcanoes but not yet for earthquakes.",
          why: "The best answers separate the two hazards, give Eyjafjallajokull and Istanbul as located examples, weigh monitoring and prediction against protection and planning, and conclude with a judgement that depends on the hazard and on wealth."
        }
      ]
    }
  ],

  sources: {
    deckDump: "gg_y11_unit_1_the_challenge_of_natural_hazards_tectonic_hazard.txt",
    decksUsed: ["Natural-Hazards.pptx", "Tectonic hazards.pptx", "Causes, effects and responses of earthquakes.pptx", "Reducing the risk of tectonic hazards.pptx"],
    notes: "Lesson titles, sequence, key words, definitions, case-study facts and figures come from the four department decks only (Natural-Hazards.pptx slides 1-20; Tectonic hazards.pptx slides 2-153; Causes, effects and responses of earthquakes.pptx slides 1-67; Reducing the risk of tectonic hazards.pptx slides 1-5). House furniture (dated title slides, seating plan, homework and Kerboodle reading slides, the Prior Learning/Components sheets, test instructions, the 2021 and 2018 slides) was used only to fix the lesson sequence. The deck's model answers and notes for answers (Tectonic hazards 7, 43, 87, 95, 102, 104, 146, 152; Causes 64-67) were read to see what the deck teaches and which case-study figures it uses; none is reproduced and verify.py bans their distinctive phrases. Where the deck gives only a task or a textbook page reference (the Chile and Nepal worksheets, the deadliest-earthquakes map, the hazard-risk factor sort), the manifest teaches only what the slides themselves state. Every number is held in the FACTS table in verify.py with its slide reference and recomputed. The deck's own errors (convection currents placed in the core, the North Atlantic plate, crust destroyed at a collision margin, new rock created at a destructive margin, an opening for magma at a collision margin, Iceland's hot spot on the African plate) are corrected in the text and listed in NOTES.md section 4. No pretext.l1 (translation is a separate pass) and no meta.constellation. No text is quoted from any source."
  }
};
