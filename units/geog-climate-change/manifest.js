// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE Geography 8035 · 3.1.1 The challenge of natural hazards: Climate change · Year 11 · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression; the FACTS names held in verify.py are allowed) and are recomputed.
//   worked examples / support examples with a calculation carry `checks:[{expr, value, tol}]`.
//   every "order" task is compared with the canonical sequences held in verify.py (the deck's own sequences: the three
//   agreements by date, the carbon-capture process on slide 48).
//   every mcq / gap / match answer is compared with the independent answer key held in verify.py.
//   every digit string in pupil-facing text is matched against ALLOWED_NUM in verify.py, which names the slide or the
//   arithmetic step each figure comes from; the one figure no slide gives (the Sun's cycle of about eleven years) is held
//   apart in NON_DECK and flagged in NOTES.md section 5. Every year written beside an agreement's name is checked too.
//   every case-study number (the 2000-year record, 10 000 years of tree rings, the 1.5-million-year ice, Kyoto / Copenhagen /
//   Paris dates and country counts, the UK energy mix 1980 and 2015, Thanet's turbines and homes, UK forest cover 1920-2020,
//   the Don Valley carbon-capture figures, the 2011 / 2015 farming table, the 2016 UK weather, Beckton's 180 million litres,
//   the Maldives and Thames figures) is checked against the independent FACTS table in verify.py, each with its slide number.
//   passage sentences are counted (≤ 20 words) and all text is linted for known misconceptions, the deck's own errors
//   (the sun's orbit, permeable cap rock, nuclear as renewable) and the deck's model-answer fingerprints.
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every numeric carries `misconceptions`; every module carries
//   `explain`; ≥ 1 module per chapter carries `contexts` that never redefine the answer; `connections` ⊂ glossary;
//   meta.constellation is omitted (the engine lays the stars out); no pretext.l1 (translation is a separate pass).
//   a mutation self-test injects nine faults into a scratch copy (wrong gap/mcq/numeric answer, swapped order stages,
//   swapped match pairs, a misconception in a tip, a quietly edited case-study number, missing feedback, a wrong
//   agreement date) and fails if any of them goes uncaught.
// Graphs (the 2000-year temperature record, the 1880-2015 trend, pie charts of the energy mix, the forest-cover line graph)
// are described in words; no widget exists for them.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["geog-climate-change"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "geog-climate-change",
    subjectKey: "geography",
    subject: "Geography",
    board: "AQA",
    spec: "8035",
    specRef: "3.1.1 The challenge of natural hazards: 3.1.1.4 Climate change (evidence, causes, effects, managing climate change by mitigation and adaptation) (Paper 1, Section A)",
    year: 11,
    tier: "GCSE (AQA Geography is a single-tier qualification)",
    title: "Climate Change: Evidence, Causes, Effects and Management",
    sub: "How we know the climate is changing, why it is changing, what it does to people and places, and how the UK and the world are cutting the causes and living with the effects.",
    bigQuestion: "How do we know the climate is changing, what is causing it, and should we spend our effort on cutting the causes or on adapting to the effects?",
    lessonCount: 7,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  // The department's one deck (Climate change.pptx, 81 slides), in teaching order. Titles are the deck's own slide titles or
  // learning objectives; questions are those objectives rephrased. See NOTES.md section 2 for the slide ranges.
  lessons: [
    { n: 1, title: "Evidence for climate change", question: "What is the evidence that the global climate has changed over the last 2000 years, and how good is it?", keywords: ["climate", "weather", "tree rings", "ice cores", "glacial retreat", "Medieval Warm Period", "Little Ice Age"] },
    { n: 2, title: "The causes of climate change", question: "What are the natural and human causes of climate change, and which matter most?", keywords: ["fossil fuels", "deforestation", "agriculture", "volcanic eruptions", "ocean currents", "solar output", "orbital change"] },
    { n: 3, title: "Managing climate change: mitigation and international agreements", question: "What is the difference between mitigation and adaptation, and how do international agreements help to slow the causes of climate change?", keywords: ["mitigation", "adaptation", "global common", "Kyoto Protocol", "Copenhagen agreement", "Paris agreement", "carbon emissions"] },
    { n: 4, title: "Mitigation: alternative energy, planting trees and carbon capture", question: "How are the UK and other countries reducing the causes of climate change?", keywords: ["renewable energy", "energy mix", "Thanet offshore wind farm", "carbon sink", "afforestation", "carbon capture"] },
    { n: 5, title: "The effects of climate change", question: "What effects does climate change have on people and the environment, and which are the most significant?", keywords: ["sea level rise", "habitat", "extreme weather", "migration", "agricultural yields", "disease"] },
    { n: 6, title: "Adapting to climate change: agriculture and water supply", question: "How can changing farming and managing the water supply help countries adapt to climate change?", keywords: ["adaptation", "agricultural systems", "desalination", "reservoir", "water transfer", "Kielder Water"] },
    { n: 7, title: "Adapting to climate change: rising sea levels, and the 9-mark question", question: "How can countries reduce the risk from rising sea levels, and how do you write a 9-mark answer on managing climate change?", keywords: ["sea level rise", "Maldives", "Thames Barrier", "storm surge", "barrage", "mitigation and adaptation"] }
  ],

  // 16 terms; Connections uses all 16 (four groups). Chapter 3 (effects) teaches its key words through pretext.words and the
  // text instead, and the adaptation strands of chapter 6 are carried by its pretext.words.
  glossary: [
    { term: "ice core", means: "A long sample drilled from layers of snow and ice that built up over thousands of years; the layers record past temperature and the gases in the air.", chapter: "evidence" },
    { term: "tree ring", means: "The layer of new wood a tree adds each year; a wide ring means a warm, wet growing season, a narrow ring a poor one.", chapter: "evidence" },
    { term: "glacial retreat", means: "A glacier shrinking back up its valley because more ice melts each year than is added by snow; evidence of warming.", chapter: "evidence" },
    { term: "Little Ice Age", means: "A cooler period in the last 2000 years that shows up as a dip in the temperature record, after the Medieval Warm Period.", chapter: "evidence" },
    { term: "orbital change", means: "Slow, regular changes in the shape of the Earth's path round the Sun and in its tilt, which alter how much of the Sun's energy reaches us.", chapter: "causes" },
    { term: "solar output", means: "The amount of energy the Sun gives out, which rises and falls over cycles of about eleven years; more sunspots mean more energy.", chapter: "causes" },
    { term: "volcanic eruption", means: "A natural cause of climate change: ash and sulphur dioxide thrown high into the atmosphere reflect sunlight and cool the Earth for a year or two.", chapter: "causes" },
    { term: "ocean current", means: "A large flow of water through the oceans that moves heat around the planet; shifts such as El Niño change weather across the world.", chapter: "causes" },
    { term: "mitigation", means: "Actions taken to reduce the causes of climate change, such as cutting carbon emissions.", chapter: "mitigation-agreements" },
    { term: "international agreement", means: "A deal between many countries to act together, for example to cut their carbon emissions by an agreed date.", chapter: "mitigation-agreements" },
    { term: "renewable energy", means: "Energy from sources that do not run out and do not release carbon dioxide when used, such as wind, solar, tidal and hydro-electric power.", chapter: "mitigation-uk" },
    { term: "carbon capture", means: "Catching carbon dioxide from the exhaust gases of a power station, turning it into a liquid and storing it deep underground in old oil fields.", chapter: "mitigation-uk" },
    { term: "adaptation", means: "Actions taken to respond to climate change and live with its effects, rather than to reduce its causes.", chapter: "adaptation" },
    { term: "desalination", means: "Taking the salt out of sea water so that it can be used as fresh water.", chapter: "adaptation" },
    { term: "water transfer", means: "Moving water by pipeline or canal from a region with a surplus to a region with a shortage.", chapter: "adaptation" },
    { term: "storm surge", means: "A rise in sea level pushed up by a storm's low pressure and strong winds, which can flood a coast or estuary.", chapter: "adaptation" }
  ],

  connections: [
    { group: "Reading the climate record", terms: ["ice core", "tree ring", "glacial retreat", "Little Ice Age"] },
    { group: "Natural causes of climate change", terms: ["orbital change", "solar output", "volcanic eruption", "ocean current"] },
    { group: "Cutting the causes", terms: ["mitigation", "international agreement", "renewable energy", "carbon capture"] },
    { group: "Living with the effects", terms: ["adaptation", "desalination", "water transfer", "storm surge"] }
  ],

  chapters: [
    /* ───────────── 1 · evidence ───────────── */
    {
      key: "evidence", n: 1, title: "How do we know the climate is changing?",
      lead: "The difference between weather and climate, why one hot summer proves nothing, and the four kinds of evidence geographers use to read the climate of the last 2000 years and beyond.",
      covers: [1],
      pretext: {
        words: [
          { word: "weather", means: "the rainfall and temperature of a place from day to day", sentence: "The weather today is cold and wet, but tomorrow it may be sunny." },
          { word: "climate", means: "the pattern of weather in a place over many years", sentence: "The climate of the UK is mild and damp." },
          { word: "trend", means: "the overall direction a graph is going in", sentence: "The trend of the temperature graph is upwards." },
          { word: "ice core", means: "a long sample drilled from old layers of snow and ice", sentence: "An ice core from Antarctica holds a record of the past climate." },
          { word: "tree ring", means: "the layer of wood a tree adds each year", sentence: "A wide tree ring means the tree had a good growing season." },
          { word: "glacial retreat", means: "a glacier shrinking back up its valley", sentence: "Photographs show the glacial retreat of Helheim Glacier in Greenland." }
        ],
        passage: [
          "Weather is what happens from day to day.",
          "Climate is the pattern of weather in a place over many years.",
          "Climate change is a long-term change in that pattern.",
          "One hot summer or one dry spring does not prove the climate has changed.",
          "We can only be sure when the figures change and stay changed for many years.",
          "Thermometer records go back to about 1880 and show the world getting warmer.",
          "For earlier times, scientists read the clues that nature leaves behind.",
          "Trees add a new ring every year, and a wide ring means a warm, wet year.",
          "Ice cores hold layers of snow that fell thousands of years ago.",
          "Glaciers that are shrinking tell us the ice is melting faster than it forms.",
          "Put together, these records show temperatures are higher now than at any time in the last 2000 years."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "مطر المكان وحرارته من يوم إلى يوم (weather)",
            "نمط الطقس في مكان ما على سنوات كثيرة (climate)",
            "الاتّجاه العامّ الذي يسير إليه الرسم البياني (trend)",
            "عيّنة طويلة تُستخرج بالحفر من طبقات قديمة من الثلج والجليد (ice core)",
            "طبقة الخشب التي تضيفها الشجرة كلّ سنة (tree ring)",
            "تقهقر النهر الجليدي صاعدًا في واديه (glacial retreat)"
          ],
          "passage": [
            "الطقس هو ما يحدث من يوم إلى يوم.",
            "والمناخ هو نمط الطقس في مكان ما على سنوات كثيرة.",
            "وتغيّر المناخ تغيّر طويل الأجل في ذلك النمط.",
            "وصيف حارّ واحد أو ربيع جافّ واحد لا يُثبت أنّ المناخ تغيّر.",
            "ولا نستطيع أن نتيقّن إلّا عندما تتغيّر الأرقام وتبقى متغيّرة سنوات كثيرة.",
            "وسجلّات الحرارة بالمِحرار تعود إلى نحو 1880، وهي تُظهر العالم وهو يزداد حرارةً.",
            "وللأزمنة الأسبق يقرأ العلماء القرائن التي تتركها الطبيعة.",
            "فالأشجار تضيف حلقة جديدة كلّ سنة، والحلقة العريضة تعني سنة دافئة رطبة.",
            "واللُّبّات الجليدية تحفظ طبقات من ثلج سقط قبل آلاف السنين.",
            "والأنهار الجليدية التي تصغر تخبرنا أنّ الجليد يذوب أسرع ممّا يتكوّن.",
            "وهذه السجلّات مجتمعةً تُظهر أنّ الحرارة اليوم أعلى منها في أيّ وقت في آخر 2000 سنة."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "opady i temperatura w danym miejscu z dnia na dzień (weather)",
            "układ pogody w danym miejscu przez wiele lat (climate)",
            "ogólny kierunek, w którym idzie wykres (trend)",
            "długa próbka wywiercona ze starych warstw śniegu i lodu (ice core)",
            "warstwa drewna, którą drzewo dokłada każdego roku (tree ring)",
            "lodowiec cofający się w górę swojej doliny (glacial retreat)"
          ],
          "passage": [
            "Pogoda to to, co dzieje się z dnia na dzień.",
            "Klimat to układ pogody w danym miejscu przez wiele lat.",
            "Zmiana klimatu to długotrwała zmiana tego układu.",
            "Jedno gorące lato albo jedna sucha wiosna nie dowodzą, że klimat się zmienił.",
            "Pewni możemy być tylko wtedy, gdy liczby się zmienią i pozostaną zmienione przez wiele lat.",
            "Zapisy z termometrów sięgają około 1880 roku i pokazują, że świat się ociepla.",
            "O dawniejszych czasach naukowcy czytają ze śladów, które zostawia przyroda.",
            "Drzewa dokładają co roku nowy pierścień, a szeroki pierścień znaczy ciepły i wilgotny rok.",
            "Rdzenie lodowe trzymają warstwy śniegu, który spadł tysiące lat temu.",
            "Lodowce, które się zmniejszają, mówią nam, że lód topi się szybciej, niż powstaje.",
            "Razem te zapisy pokazują, że temperatury są dziś wyższe niż kiedykolwiek w ostatnich 2000 lat."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a chuva e a temperatura de um lugar de dia para dia (weather, o tempo)",
            "o padrão do tempo num lugar ao longo de muitos anos (climate, clima)",
            "a direção geral que um gráfico está a seguir (trend, tendência)",
            "uma amostra comprida retirada de camadas antigas de neve e gelo (ice core, testemunho de gelo)",
            "a camada de madeira que uma árvore acrescenta cada ano (tree ring, anel de crescimento)",
            "um glaciar/geleira a encolher e a recuar pelo seu vale (glacial retreat, recuo glaciar)"
          ],
          "passage": [
            "O tempo é o que acontece de dia para dia.",
            "O clima é o padrão do tempo num lugar ao longo de muitos anos.",
            "As mudanças climáticas são uma mudança de longo prazo nesse padrão.",
            "Um verão quente ou uma primavera seca não provam que o clima mudou.",
            "Só podemos ter a certeza quando os números mudam e ficam mudados durante muitos anos.",
            "Os registos/registros de termómetro/termômetro vão até cerca de 1880 e mostram o mundo a ficar mais quente.",
            "Para os tempos mais antigos, os cientistas leem as pistas que a natureza deixa.",
            "As árvores acrescentam um anel novo cada ano, e um anel largo quer dizer um ano quente e chuvoso.",
            "Os testemunhos de gelo guardam camadas de neve que caiu há milhares de anos.",
            "Os glaciares/geleiras que estão a encolher dizem-nos que o gelo derrete mais depressa do que se forma.",
            "Juntos, estes registos/registros mostram que as temperaturas estão hoje mais altas do que em qualquer momento dos últimos 2000 anos."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "roobka iyo heerkulka meel maalin ka maalin",
            "qaabka hawada meel sanado badan",
            "jihada guud ee garaafku u socdo",
            "tusaale dheer oo laga qoday lakabyo baraf duugoobay",
            "lakabka alwaax ee geedku sanad kasta ku daro",
            "glacier oo dooxadiisa kor ugu yaraanaya"
          ],
          "passage": [
            "Hawadu waa waxa maalin ka maalin dhaca.",
            "Cimiladu waa qaabka hawada meel sanado badan.",
            "Isbeddelka cimiladu waa isbeddel muddo dheer socda oo qaabkaas ku dhaca.",
            "Hal xagaa kulul ama hal gu' qallalan ma caddeyn karo in cimiladu isbeddeshay.",
            "Waxaan hubin karnaa kaliya marka tirooyinku isbeddelaan oo sanado badan sidaas sii ahaadaan.",
            "Diiwaannada heerkul-cabbirka waxay dib u socdaan qiyaastii 1880-kii waxayna muujinayaan dunida oo sii kululaanaysa.",
            "Waqtiyadii ka hor, saynisyahannadu waxay akhriyaan tilmaamaha dabeecaddu ka tagto.",
            "Geeduhu waxay sanad kasta siddo cusub ku daraan, siddo ballaaranna macnaheedu waa sanad diirran oo qoyan.",
            "Ice cores waxay hayaan lakabyo baraf oo kumanaan sano ka hor da'ay.",
            "Glaciers-ka yaraanayaa waxay noo sheegayaan in barafku si ka dhaqso ah u dhalaalayo intuu samaysmayo.",
            "Marka la isku geeyo, diiwaannadan waxay muujinayaan in heerkulku hadda ka sarreeyo waqti kasta oo 2000 sano ee la soo dhaafay."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "опади і температура місця день за днем (weather)",
            "порядок погоди в якомусь місці за багато років (climate)",
            "загальний напрямок, у який іде графік (trend)",
            "довгий зразок, пробурений зі старих шарів снігу і льоду (ice core)",
            "шар дерева, який дерево додає щороку (tree ring)",
            "льодовик, що відступає вгору своєю долиною (glacial retreat)"
          ],
          "passage": [
            "Погода — це те, що відбувається день за днем.",
            "Клімат — це порядок погоди в якомусь місці за багато років.",
            "Зміна клімату — це довготривала зміна цього порядку.",
            "Одне гаряче літо або одна суха весна не доводять, що клімат змінився.",
            "Ми можемо бути впевнені лише тоді, коли показники змінюються і залишаються зміненими багато років.",
            "Записи термометрів ідуть приблизно з 1880 року і показують, що світ теплішає.",
            "Про давніші часи науковці читають підказки, які залишає природа.",
            "Дерева додають нове кільце щороку, і широке кільце означає теплий, вологий рік.",
            "Льодові колонки (ice cores) тримають шари снігу, який упав тисячі років тому.",
            "Льодовики, які зменшуються, кажуть нам, що лід тане швидше, ніж утворюється.",
            "Разом ці записи показують, що температури тепер вищі, ніж будь-коли за останні 2000 років."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "کسی جگہ کی دن بہ دن کی بارش اور درجۂ حرارت (weather)",
            "کسی جگہ میں کئی برسوں کے موسم کا نمونہ (climate)",
            "گراف جس مجموعی رخ پر جا رہا ہو (trend)",
            "برف اور برفباری کی پرانی تہوں سے کھود کر نکالا گیا لمبا نمونہ (ice core)",
            "لکڑی کی وہ تہہ جو درخت ہر سال بڑھاتا ہے (tree ring)",
            "glacier کا سکڑ کر اپنی وادی میں پیچھے ہٹ جانا (glacial retreat)"
          ],
          "passage": [
            "weather وہ ہے جو دن بہ دن ہوتا ہے۔",
            "climate کسی جگہ میں کئی برسوں کے موسم کا نمونہ ہے۔",
            "climate change اُس نمونے میں طویل مدت کی تبدیلی ہے۔",
            "ایک گرم گرمی یا ایک خشک بہار یہ ثابت نہیں کرتی کہ climate بدل گیا ہے۔",
            "ہم صرف اس وقت یقین کر سکتے ہیں جب اعداد بدلیں اور کئی برس بدلے ہی رہیں۔",
            "تھرمامیٹر کے ریکارڈ تقریباً 1880 تک جاتے ہیں اور دکھاتے ہیں کہ دنیا گرم ہو رہی ہے۔",
            "اس سے پہلے کے زمانوں کے لیے سائنس دان وہ اشارے پڑھتے ہیں جو قدرت پیچھے چھوڑ جاتی ہے۔",
            "درخت ہر سال ایک نیا حلقہ بڑھاتے ہیں، اور چوڑے حلقے کا مطلب گرم، نم سال ہے۔",
            "ice cores میں وہ برف کی تہیں موجود ہیں جو ہزاروں سال پہلے گری تھیں۔",
            "سکڑتے ہوئے glaciers ہمیں بتاتے ہیں کہ برف بننے سے زیادہ تیزی سے پگھل رہی ہے۔",
            "یہ سب ریکارڈ ملا کر دکھاتے ہیں کہ درجۂ حرارت اب پچھلے 2000 سال کے کسی بھی وقت سے زیادہ ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Weather, climate and climate change",
          paragraphs: [
            "Start with two words that people mix up. Weather is what is happening in the air today: the rainfall and temperature of a place right now. Climate is the pattern of that weather over many years, the normal you would expect for a place in each season. The UK's weather changes by the hour; its climate, mild and damp, changes very slowly. Climate change means a long-term change in that pattern, lasting decades rather than days.",
            "That is why climate change is hard to spot from where you stand. Every place has some extreme weather now and then: a drought, a heatwave, a flood. One bad year is weather, not climate. We can only be sure that the climate has changed when the rainfall and temperature figures of a place shift and then stay shifted for many years. To see that, you need long records and a graph.",
            "Your deck also made one more point that runs through this whole unit. Some causes of climate change are natural, such as changes in the Earth's orbit and volcanic activity, and we cannot do anything about them. So when people talk about reducing climate change, they are talking about the human causes, above all burning fossil fuels. Keep that distinction in mind: it comes back in chapter 2 and again in chapter 4."
          ],
          tip: "If a question asks for the difference between weather and climate, use the word pattern and the phrase over many years. Those are the marks."
        },
        {
          heading: "Reading a temperature graph",
          paragraphs: [
            "The first piece of evidence is the simplest: thermometers. Reliable temperature measurements exist for most of the world from about 1880, so the graph you studied in class runs from 1880 to 2015. It wobbles up and down from year to year, because weather is noisy, but the overall direction, the trend, is upwards, and the rise gets steeper towards the end. The second graph in your lesson covered the last 100 years and showed the same thing.",
            "When you describe a trend, do three things. Give the overall direction (temperatures have risen). Give the size of the change with figures from the axes (from about this value to about that value). Then point out anything that breaks the pattern, such as a flat spell or a dip. A description with no numbers is only worth half the marks.",
            "Is a thermometer record good evidence? Its strength is that it is a direct measurement. Its weakness is that 135 years is a very short time in the history of the climate, and early readings came from fewer places. That is why scientists look for evidence that reaches further back."
          ],
          worked: {
            q: "A graph shows global average temperature from 1880 to 2015. Describe the trend it shows. (2 marks)",
            steps: [
              "State the overall direction first: temperatures have risen over the period.",
              "Add the time span and shape: the rise covers 135 years (2015 − 1880) and is steepest after about 1980.",
              "Mention what breaks the pattern: there are short dips and flat spells, because the line shows weather from year to year as well as climate.",
              "Two clear points, one of them with a figure, earns both marks."
            ],
            answer: "Global temperature has risen overall across the 135 years from 1880 to 2015. The rise is not steady: there are short dips and flat spells, and the line climbs most steeply in the last few decades.",
            checks: [{ expr: "GRAPH_END-GRAPH_START", value: 135, tol: 0 }]
          },
          tip: "Describe means say what the graph shows, with figures. Do not explain why until the question asks."
        },
        {
          heading: "Tree rings, ice cores and shrinking glaciers",
          paragraphs: [
            "To see further back than thermometers, scientists read records that nature keeps. Trees add a new ring every year, in a layer of cells just under the bark. A good growing season, with plenty of rain and warm temperatures, makes a wide ring; a poor one makes a narrow ring. Measuring tree rings is called dendrochronology, and by matching rings from living trees, old timbers and preserved wood it can give data for the last 10 000 years.",
            "Ice cores reach back far further. In Antarctica and Greenland, snow has fallen on snow for hundreds of thousands of years and been squeezed into ice. A core drilled down through it is a stack of yearly layers. Each layer records the temperature when it fell and holds tiny bubbles of the air the snow fell through, so it tells us about the atmosphere as well. The Vostok core in Antarctica is the famous example, and scientists believe the oldest ice they could date is 1.5 million years old.",
            "Glaciers are a third record. Photographs, maps and old paintings show whether a glacier has advanced or retreated, and ice that is retreating is evidence that temperatures have risen. Your deck showed Greenland's Helheim Glacier pulling back between 2001 and 2005. Other sources you listed in class include measurements of ice cover, changes in the oceans and the amount of rainfall."
          ],
          tip: "Order the evidence by how far back it reaches: thermometers (about 1880), tree rings (10 000 years), ice cores (over a million years)."
        },
        {
          heading: "The last 2000 years, and is the evidence enough?",
          paragraphs: [
            "Put the records together and you get the graph of the last 2000 years, drawn with several coloured lines, one for each kind of evidence: ice cores, tree rings, preserved pollen, boreholes, corals, and the mud at the bottom of lakes and oceans. The lines do not agree exactly, but they tell the same story. There was a warmer spell in the Middle Ages, the Medieval Warm Period, and a cooler spell afterwards, the Little Ice Age. Then, at the end of the record, every line turns sharply upwards. Temperatures today are higher than at any point in the last 2000 years.",
            "Your class discussed whether this is enough to prove climate change, and whether anyone could argue the other way. The strongest point for the evidence is agreement: several independent methods, measuring different things, all show the same recent rise. The honest points against are that natural records are indirect, that old measurements are patchy, and that the climate has varied naturally before. A good geographer weighs both and reaches a judgement, which is exactly what an evaluate question asks you to do."
          ],
          tip: "Evaluate means weigh up. Give a strength, a weakness and a judgement: the evidence is strong because the different sources agree."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which statement gives the correct meaning of climate?", options: ["The rainfall and temperature of a place on a particular day", "The pattern of weather in a place over many years", "A long, hot summer", "The amount of rain that falls in one month"], answer: 1, why: "Climate is the pattern of weather over many years. Weather is what happens on a particular day, and one summer or one month is weather, not climate.",
          feedback: [
            "That describes the weather, which is what happens from day to day. Climate is the pattern of that weather averaged over many years.",
            "",
            "A single hot summer is a spell of weather. Climate is the usual pattern over many years, and one summer cannot change it on its own.",
            "One month's rainfall is a weather figure. Climate is the pattern of rainfall and temperature over many years, not one month."
          ] },
        { kind: "gap", q: "Trees add a new ___ every year, and a wide one means a warm, wet growing season.", answer: "ring", options: ["ring", "root", "leaf"], why: "Trees grow a new ring of wood each year in a layer of cells near the bark. Measuring the rings is called dendrochronology.",
          feedback: {
            "root": "Roots grow all the time and do not leave a yearly record. It is the rings of wood under the bark, one for each year, that scientists measure.",
            "leaf": "Leaves fall and are lost, so they cannot record past years. The record is in the tree rings, one new ring of wood each year."
          } },
        { kind: "numeric", q: "Tree ring data can give an accurate record of the climate for about how many years into the past?", answer: 10000, tolerance: 0, units: "years", check: "TREE_RING_YEARS", why: "By matching rings from living trees, old timbers and preserved wood, dendrochronology gives data for the last 10 000 years.",
          misconceptions: [
            { answer: 1000, says: "A zero has gone missing. Tree rings reach back about 10 000 years, not 1000; 1000 years is only half of the 2000-year graph you studied.", check: "TREE_RING_YEARS/10" },
            { answer: 2000, says: "2000 years is the span of the temperature graph in your lesson, not the limit of tree-ring data. Tree rings reach back about 10 000 years.", check: "RECORD_YEARS" },
            { answer: 1500000, says: "1.5 million years is the age of the oldest ice that could be dated from ice cores. Tree rings reach back about 10 000 years.", check: "ICE_OLDEST_YEARS" }
          ] }
      ],
      modules: [
        {
          title: "Four kinds of evidence",
          task: {
            kind: "match",
            q: "Match each source of evidence to what it tells us about past climate.",
            pairs: [
              ["Ice cores", "Layers of old snow record the temperature and the gases in the air when each layer fell"],
              ["Tree rings", "Wide rings show warm, wet growing seasons; narrow rings show poor ones"],
              ["Glacial retreat", "Ice shrinking back up its valley shows that melting is beating snowfall"],
              ["Temperature measurements", "Direct thermometer readings since about 1880 show the recent rise"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the direct one. Only one source uses an instrument that measures temperature itself.",
                "Two sources are layers that build up year by year. One is wood, one is ice. Which one holds bubbles of air?",
                "The one left over is about a thing getting smaller.",
                "Check each pair reads as a sensible sentence before you move on."
              ],
              example: {
                q: "Match: coral, lake sediment. Choices: mud that settles on a lake bed in yearly layers; a sea creature whose skeleton grows in bands that record sea temperature.",
                steps: ["Coral lives in the sea and grows in bands.", "Sediment is the mud that settles at the bottom of water."],
                answer: "Coral: skeleton bands that record sea temperature. Lake sediment: yearly layers of mud on a lake bed."
              }
            },
            core: { hint: "Thermometers measure; rings and cores record year by year; glaciers show change by their size." },
            stretch: { extend: "Explain why scientists trust the evidence more when several of these sources agree than when only one shows a change." }
          },
          explain: "Say, in one sentence, why thermometer records alone are not enough to show how the climate has changed.",
          why: "Thermometers give direct readings but only since about 1880. Tree rings and ice cores are yearly layers that record the growing season and the ancient air. A retreating glacier shows that the ice is melting faster than snow replaces it."
        },
        {
          title: "What the 2000-year graph shows",
          task: {
            kind: "mcq",
            q: "A graph of global temperature over the last 2000 years is drawn from ice cores, tree rings, pollen, corals and sediments. Which statement does it support?",
            options: [
              "Temperatures have stayed the same for 2000 years and only started to rise in 2015",
              "Temperatures have gone up and down, but today they are higher than at any point in the last 2000 years",
              "Temperatures were highest during the Little Ice Age",
              "Temperatures rose steadily every single year without any variation"
            ],
            answer: 1,
            feedback: [
              "The graph is not flat. It shows a warmer Medieval Warm Period and a cooler Little Ice Age before the recent sharp rise, and the rise began well before 2015.",
              "",
              "The Little Ice Age was a cooler period, so it is a dip in the graph, not a peak. The highest temperatures on the graph are the most recent ones.",
              "The lines wobble, with warmer and cooler spells such as the Medieval Warm Period and the Little Ice Age. The point is that today's temperatures are higher than any of them."
            ]
          },
          contexts: [
            { label: "Museum display", q: "A museum display shows the temperature of the last 2000 years, reconstructed from ice cores, tree rings and corals. Which statement about the display is correct?" },
            { label: "Homework research", q: "For your homework you find a graph of global temperature reconstructed over the last 2000 years from several natural records. Which statement does the graph support?" },
            { label: "Class debate", q: "In a class debate, a pupil holds up the 2000-year temperature graph built from ice cores, tree rings and sediments. Which statement can they correctly make from it?" }
          ],
          explain: "Say, in one sentence, why the graph is drawn with several coloured lines rather than one.",
          levels: {
            support: {
              steps: [
                "Remember the two named spells: the Medieval Warm Period (warmer) and the Little Ice Age (cooler). So the graph is not flat and not steady.",
                "Ask what the deck said about today: higher than at any point in the last 2000 years.",
                "Rule out any option that says the graph is flat, steady, or peaks in the Little Ice Age.",
                "The right option mentions both the ups and downs and today's record high."
              ],
              example: {
                q: "A graph of a town's rainfall over 100 years goes up and down but ends at its highest ever value. Which is the best one-sentence description?",
                steps: ["Say that it varies.", "Say where it ends: at a record high."],
                answer: "Rainfall has varied from year to year, but it is now higher than at any point in the 100 years."
              }
            },
            core: { hint: "Two named spells break the pattern, but where does the line finish?" },
            stretch: { extend: "Explain why the Medieval Warm Period is sometimes used to argue against human-caused climate change, and how a geographer would answer that argument." }
          },
          why: "The record shows natural variation, including the Medieval Warm Period and the Little Ice Age, but every line turns sharply upwards at the end of the record, and today's temperatures are the highest in the 2000 years."
        },
        {
          title: "Is the evidence enough?",
          task: {
            kind: "written",
            q: "Using evidence you have studied, assess how far scientists can be sure that the global climate is changing. (6 marks)",
            marks: 6,
            criteria: [
              "Names at least two kinds of evidence (for example thermometer records, tree rings, ice cores, glacial retreat) and says what each shows",
              "Explains a strength of the evidence, such as several independent sources agreeing",
              "Explains a weakness or limit, such as the short thermometer record or the indirect nature of natural records",
              "Reaches a clear judgement about how sure scientists can be",
              "Uses figures or named examples (1880, 10 000 years, the 2000-year record, Helheim Glacier)"
            ],
            model: "Scientists can be very sure, because different kinds of evidence agree. Thermometer records since about 1880 show global temperature rising, with the steepest climb in recent decades. Tree rings, which give a yearly record for about 10 000 years, and ice cores, which reach back over a million years, both show that today is warmer than at any time in the last 2000 years. Glaciers such as Helheim in Greenland are retreating, which only happens when more ice melts than is added. The limits are real: thermometer records are short, and natural records are indirect and have to be interpreted. But because several independent methods measuring different things all point the same way, the overall judgement is that the evidence for a changing climate is strong."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: give your judgement straight away (very sure, fairly sure) and the reason in five words: the sources agree.",
                "Sentences 2 and 3: name two kinds of evidence and say what each shows, with a figure for each.",
                "Sentence 4: give one weakness of the evidence.",
                "Last sentence: come back to your judgement and say why the strength outweighs the weakness."
              ],
              example: {
                q: "In two sentences, assess how far one old photograph of a glacier proves that the climate has warmed.",
                steps: ["Say what the photograph shows and why that is evidence.", "Say its limit: one glacier, one moment."],
                answer: "A photograph showing the glacier much further down its valley than today is evidence that ice has melted, which happens when temperatures rise. On its own it is weak, because one glacier at one moment could be affected by local conditions, so it needs other evidence beside it."
              }
            },
            core: { hint: "Assess needs both sides and a judgement. Two sources, one strength, one weakness, one verdict." },
            stretch: { extend: "Add a sentence explaining why a sceptic might point to the Medieval Warm Period, and what the 2000-year graph says in reply." }
          },
          explain: "Say, in one sentence, what makes evidence from several sources stronger than evidence from one.",
          why: "A top answer names the evidence, gives figures, admits the limits and still reaches a judgement. The key idea is agreement between independent sources, which is the strongest kind of scientific evidence."
        }
      ]
    },

    /* ───────────── 2 · causes ───────────── */
    {
      key: "causes", n: 2, title: "Natural and human causes of climate change",
      lead: "The four natural causes that have always moved the climate, the three human causes that are moving it now, and how to decide which matter most.",
      covers: [2],
      pretext: {
        words: [
          { word: "natural cause", means: "a cause that would happen without people", sentence: "A volcanic eruption is a natural cause of climate change." },
          { word: "human cause", means: "a cause that comes from what people do", sentence: "Burning fossil fuels is the main human cause of climate change." },
          { word: "fossil fuels", means: "coal, oil and gas, made from ancient plants and animals", sentence: "Power stations burn fossil fuels to make electricity." },
          { word: "deforestation", means: "cutting down forests and not replacing them", sentence: "Deforestation releases the carbon stored in the trees." },
          { word: "greenhouse gas", means: "a gas that traps heat in the atmosphere", sentence: "Carbon dioxide and methane are greenhouse gases." },
          { word: "sunspot", means: "a dark patch on the Sun; many of them mean the Sun is more active", sentence: "Lots of sunspots mean a slightly warmer Earth." }
        ],
        passage: [
          "The climate has always changed, long before there were people.",
          "Four natural causes do this.",
          "The Earth's orbit round the Sun slowly changes shape and tilt.",
          "The Sun's output rises and falls, and more sunspots mean more energy.",
          "Big volcanic eruptions throw ash high into the air and cool the Earth for a while.",
          "Ocean currents move heat around the planet, and when they shift, the weather shifts too.",
          "Today, three human causes are adding to the natural ones.",
          "Burning fossil fuels such as coal, oil and gas releases carbon dioxide.",
          "Deforestation cuts down the trees that would have soaked that carbon up.",
          "Agriculture releases methane from cattle and rice fields.",
          "These gases trap heat in the atmosphere, so the Earth warms.",
          "Burning fossil fuels is the biggest cause of all."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "سبب يحدث من غير الناس (natural cause)",
            "سبب يأتي من عمل الناس (human cause)",
            "الفحم والنفط والغاز، وقد تكوّنت من نباتات وحيوانات قديمة (fossil fuels)",
            "قطع الغابات دون أن تُزرع من جديد (deforestation)",
            "غاز يحبس الحرارة في الغلاف الجوّي (greenhouse gas)",
            "بقعة مظلمة على الشمس، وكثرتها تعني أنّ الشمس أنشط (sunspot)"
          ],
          "passage": [
            "المناخ تغيّر على مرّ الأزمنة، قبل أن يكون هناك ناس بزمن طويل.",
            "وأربعة أسباب طبيعية تفعل هذا.",
            "فمدار الأرض حول الشمس يتغيّر شكله وميله ببطء.",
            "وإنتاج الشمس يرتفع ويهبط، وكثرة البقع الشمسية تعني طاقة أكثر.",
            "والانفجارات البركانية الكبيرة تقذف الرماد عاليًا في الهواء فتبرّد الأرض حينًا.",
            "وتيّارات المحيط تنقل الحرارة حول الكوكب، وعندما تتحرّك يتحرّك الطقس معها.",
            "واليوم تضيف ثلاثة أسباب بشرية إلى الأسباب الطبيعية.",
            "فحرق الوقود الأحفوري كالفحم والنفط والغاز يُطلق ثاني أكسيد الكربون.",
            "وقطع الغابات يقضي على الأشجار التي كانت ستمتصّ ذلك الكربون.",
            "والزراعة تُطلق الميثان من الأبقار وحقول الأرزّ.",
            "وهذه الغازات تحبس الحرارة في الغلاف الجوّي، فتسخن الأرض.",
            "وحرق الوقود الأحفوري أكبر الأسباب كلّها."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "przyczyna, która zdarzyłaby się i bez ludzi (natural cause)",
            "przyczyna, która bierze się z tego, co robią ludzie (human cause)",
            "węgiel, ropa i gaz, powstałe z dawnych roślin i zwierząt (fossil fuels)",
            "wycinanie lasów bez sadzenia nowych (deforestation)",
            "gaz, który zatrzymuje ciepło w atmosferze (greenhouse gas)",
            "ciemna plama na Słońcu; wiele plam znaczy, że Słońce jest bardziej aktywne (sunspot)"
          ],
          "passage": [
            "Klimat zmieniał się zawsze, na długo przed pojawieniem się ludzi.",
            "Robią to cztery przyczyny naturalne.",
            "Orbita Ziemi wokół Słońca powoli zmienia kształt, a Ziemia zmienia nachylenie.",
            "Moc Słońca rośnie i spada, a więcej plam słonecznych znaczy więcej energii.",
            "Wielkie wybuchy wulkanów wyrzucają popiół wysoko w powietrze i na jakiś czas ochładzają Ziemię.",
            "Prądy oceaniczne przenoszą ciepło po planecie, a kiedy się przesuwają, przesuwa się też pogoda.",
            "Dziś do przyczyn naturalnych dochodzą trzy przyczyny ludzkie.",
            "Spalanie paliw kopalnych, takich jak węgiel, ropa i gaz, wydziela dwutlenek węgla.",
            "Wycinanie lasów usuwa drzewa, które wchłonęłyby ten węgiel.",
            "Rolnictwo wydziela metan z bydła i z pól ryżowych.",
            "Te gazy zatrzymują ciepło w atmosferze, więc Ziemia się ociepla.",
            "Spalanie paliw kopalnych jest największą przyczyną ze wszystkich."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma causa que aconteceria mesmo sem as pessoas (natural cause, causa natural)",
            "uma causa que vem daquilo que as pessoas fazem (human cause, causa humana)",
            "carvão, petróleo e gás, feitos de plantas e animais antigos (fossil fuels, combustíveis fósseis)",
            "cortar florestas e não as substituir (deforestation, desflorestação/desmatamento)",
            "um gás que retém o calor na atmosfera (greenhouse gas, gás com efeito de estufa / gás de efeito estufa)",
            "uma mancha escura no Sol; muitas delas querem dizer que o Sol está mais ativo (sunspot, mancha solar)"
          ],
          "passage": [
            "O clima sempre mudou, muito antes de haver pessoas.",
            "Há quatro causas naturais que fazem isso.",
            "A órbita da Terra em volta do Sol muda lentamente de forma e de inclinação.",
            "A energia que o Sol emite sobe e desce, e mais manchas solares querem dizer mais energia.",
            "As grandes erupções vulcânicas lançam cinzas muito alto no ar e arrefecem/esfriam a Terra por algum tempo.",
            "As correntes oceânicas levam o calor pelo planeta, e quando mudam, o tempo também muda.",
            "Hoje, há três causas humanas que se somam às naturais.",
            "Queimar combustíveis fósseis como o carvão, o petróleo e o gás liberta/libera dióxido de carbono.",
            "A desflorestação/desmatamento corta as árvores que teriam absorvido esse carbono.",
            "A agricultura liberta/libera metano do gado e dos campos de arroz.",
            "Estes gases retêm o calor na atmosfera, por isso a Terra aquece.",
            "Queimar combustíveis fósseis é a maior causa de todas."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "sabab dhacaysa haddii dadku jiri waayaanba",
            "sabab ka timid waxa dadku sameeyaan",
            "dhuxul, saliid iyo gaas, oo laga sameeyay dhir iyo xayawaan hore",
            "jaridda keymaha iyadoon wax lagu beddelin",
            "gaas kulaylka ku xanniba jawiga",
            "bar madow oo Qorraxda ku taal; haddii ay badan yihiin Qorraxdu way firfircoon tahay"
          ],
          "passage": [
            "Cimiladu weligeed way isbeddeshay, dadku ka hor wakhti dheer.",
            "Afar sabab dabiici ah ayaa tan sameeya.",
            "Wareegga Dhulka ee Qorraxda ku xeeran si tartiib ah ayuu qaabkiisa iyo janjeerkiisa beddelaa.",
            "Waxa Qorraxdu soo saarto wuu kacaa oo wuu dhacaa, sunspots badanna macnaheedu waa tamar badan.",
            "Qaraxyo foolkaano waaweyn waxay dambas hawada sare u tuuraan oo Dhulka muddo ayay qaboojiyaan.",
            "Socodyada badweynta waxay kulaylka meeraha ku wareejiyaan, marka ay beddelaanna hawaduna way beddelantaa.",
            "Maanta, saddex sabab bani'aadmi ah ayaa kuwa dabiiciga lagu darayaa.",
            "Gubidda shidaalka fosil sida dhuxusha, saliidda iyo gaaska waxay sii daysaa kaarboon dioksaydh.",
            "Deforestation waxay jartaa geedihii kaarboonkaas nuugi lahaa.",
            "Beeruhu waxay methane ka sii daayaan lo'da iyo beeraha bariiska.",
            "Gaasaskan waxay kulaylka ku xannibaan jawiga, markaa Dhulku wuu kululaadaa.",
            "Gubidda shidaalka fosil waa sababta ugu weyn oo dhan."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "причина, яка діяла б і без людей (natural cause)",
            "причина, яка походить від того, що роблять люди (human cause)",
            "вугілля, нафта і газ, утворені з давніх рослин і тварин (fossil fuels)",
            "вирубування лісів без їхнього відновлення (deforestation)",
            "газ, який затримує тепло в атмосфері (greenhouse gas)",
            "темна пляма на Сонці; багато їх означає, що Сонце активніше (sunspot)"
          ],
          "passage": [
            "Клімат завжди змінювався, задовго до того, як з’явилися люди.",
            "Це роблять чотири природні причини.",
            "Орбіта Землі навколо Сонця поволі змінює форму і нахил.",
            "Віддача Сонця зростає і падає, і більше сонячних плям означає більше енергії.",
            "Великі вулканічні виверження закидають попіл високо в повітря і на якийсь час охолоджують Землю.",
            "Океанічні течії переносять тепло по планеті, і коли вони зсуваються, погода теж зсувається.",
            "Сьогодні до природних причин додаються три людські.",
            "Спалювання викопного палива, як-от вугілля, нафти і газу, випускає вуглекислий газ.",
            "Вирубування лісів зводить дерева, які поглинули б цей вуглець.",
            "Землеробство випускає метан від худоби і з рисових полів.",
            "Ці гази затримують тепло в атмосфері, тому Земля теплішає.",
            "Спалювання викопного палива — найбільша причина з усіх."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ سبب جو لوگوں کے بغیر بھی پیش آتا (natural cause)",
            "وہ سبب جو لوگوں کے کاموں سے آتا ہے (human cause)",
            "کوئلہ، تیل اور گیس، جو پرانے پودوں اور جانوروں سے بنے (fossil fuels)",
            "جنگلوں کو کاٹ دینا اور ان کی جگہ نئے درخت نہ لگانا (deforestation)",
            "وہ گیس جو فضا میں حرارت روک لیتی ہے (greenhouse gas)",
            "سورج پر ایک کالا دھبہ؛ ان کی زیادہ تعداد کا مطلب ہے کہ سورج زیادہ متحرک ہے (sunspot)"
          ],
          "passage": [
            "climate ہمیشہ بدلتا رہا ہے، لوگوں کے وجود سے بھی بہت پہلے۔",
            "چار قدرتی اسباب ایسا کرتے ہیں۔",
            "سورج کے گرد زمین کا مدار آہستہ آہستہ اپنی شکل اور جھکاؤ بدلتا ہے۔",
            "سورج کی پیداوار بڑھتی گھٹتی ہے، اور زیادہ sunspots کا مطلب زیادہ توانائی ہے۔",
            "آتش فشاں کے بڑے دھماکے راکھ کو ہوا میں بہت اوپر پھینک دیتے ہیں اور کچھ عرصے کے لیے زمین کو ٹھنڈا کر دیتے ہیں۔",
            "سمندری دھارے حرارت کو کرّے پر گھماتے ہیں، اور جب وہ رخ بدلتے ہیں تو موسم بھی بدل جاتا ہے۔",
            "آج تین انسانی اسباب ان قدرتی اسباب کے ساتھ شامل ہو گئے ہیں۔",
            "کوئلہ، تیل اور گیس جیسے fossil fuels جلانے سے کاربن ڈائی آکسائیڈ نکلتی ہے۔",
            "deforestation وہ درخت کاٹ دیتی ہے جو اس کاربن کو جذب کر لیتے۔",
            "کھیتی باڑی سے مویشیوں اور چاول کے کھیتوں سے میتھین نکلتی ہے۔",
            "یہ گیسیں فضا میں حرارت روک لیتی ہیں، اس لیے زمین گرم ہو جاتی ہے۔",
            "fossil fuels جلانا سب سے بڑا سبب ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Sorting the causes",
          paragraphs: [
            "In class you sorted a set of cards into two columns. The natural causes were volcanic eruptions, ocean currents, solar output and orbital changes. The human causes were fossil fuels, deforestation and agriculture. Learn the two lists first, because the exam often starts with a simple sorting question before it asks you to explain anything.",
            "The difference matters for what we can do. Natural causes have always been there and we cannot switch them off. Human causes are new, they are growing, and they are the ones we can change. That is why the rest of this unit is about managing the human causes and living with the effects.",
            "One more idea sits under all of this. Gases such as carbon dioxide and methane let sunlight in but trap the heat that tries to leave, like the glass of a greenhouse. Human causes add more of these gases, so more heat is trapped. The odd-one-out puzzle in your deck was built on this: fossil fuels and carbon dioxide belong together, water is the odd one; methane and agriculture belong together, sulphur dioxide is the odd one."
          ],
          worked: {
            q: "Outline one natural cause of climate change. (2 marks)",
            steps: [
              "Name the cause: volcanic eruptions.",
              "Say what it does to the climate and how: ash and sulphur dioxide reach high into the atmosphere and reflect sunlight, so the Earth cools for a year or two.",
              "Name plus mechanism is the pattern for every two-mark outline."
            ],
            answer: "Volcanic eruptions. A large eruption throws ash and sulphur dioxide high into the atmosphere, where they reflect sunlight away and cool the Earth for a year or two."
          },
          tip: "Seven causes: four natural (volcanoes, oceans, Sun, orbit), three human (fuels, forests, farming). Say them in that order and you will not miss one."
        },
        {
          heading: "The four natural causes",
          paragraphs: [
            "Orbital change. The Earth's path round the Sun is not fixed. Over tens of thousands of years its shape stretches and relaxes, its tilt rocks a little, and the way it wobbles changes. Each of these alters how much of the Sun's energy reaches different parts of the Earth and in which season. These slow cycles are thought to have driven the ice ages and the warm periods between them.",
            "Solar output. The Sun does not shine at a perfectly steady rate. Over a cycle of about eleven years its energy rises and falls, and dark patches called sunspots are the sign of a more active Sun: lots of sunspots mean slightly more energy and a slightly warmer Earth. This is why cooler temperatures was the odd one out in the row with increasing solar output and lots of sunspots.",
            "Volcanic eruptions and ocean currents. A big eruption throws ash and sulphur dioxide high into the atmosphere, where they spread around the world and reflect sunlight back into space, cooling the Earth for a year or two. Ocean currents carry heat from the tropics towards the poles; when they shift, as in the El Niño and La Niña patterns in the Pacific, weather changes across the world for a season or more. Warmer oceans, El Niño and La Niña were the fourth row of your odd-one-out table."
          ],
          tip: "Volcanoes cool, the Sun warms when it is active, the orbit works over thousands of years, the oceans work over a season. Get the time scale right and the mechanism follows."
        },
        {
          heading: "The three human causes",
          paragraphs: [
            "Fossil fuels. Coal, oil and gas are the remains of plants and animals that lived millions of years ago, and they are full of carbon. When we burn them in power stations, vehicles, factories and homes, that carbon joins with oxygen and goes into the air as carbon dioxide. Your deck is clear that this is the main cause of climate change today, and it is the cause every strategy in chapter 4 and chapter 5 is trying to cut.",
            "Deforestation. Trees take in carbon dioxide as they grow and store the carbon in their wood. Cutting a forest down does two things at once: it stops that storage, and if the trees are burned or left to rot, the carbon they held goes back into the air. Agriculture. Farming releases methane, a greenhouse gas that traps heat even more strongly than carbon dioxide, from the digestion of cattle and from flooded rice fields. Fertilisers and clearing land for farms add to the total.",
            "Which cause matters most? Your lesson asked you to make a decision about significance. The usual answer is fossil fuels, because they release the most carbon dioxide and because every country depends on them for energy. But a good answer also notes that the causes are linked: forests are often cleared to make farmland, and farms use fuel."
          ],
          tip: "For each human cause give the gas it releases: fossil fuels and deforestation release carbon dioxide; agriculture releases methane."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is a natural cause of climate change?", options: ["Burning fossil fuels", "Deforestation", "Volcanic eruptions", "Agriculture"], answer: 2, why: "Volcanic eruptions happen without people and have always affected the climate. Fossil fuels, deforestation and agriculture are the three human causes.",
          feedback: [
            "Burning fossil fuels is a human activity, and the deck names it as the main human cause of climate change. The natural causes are volcanoes, oceans, the Sun and the Earth's orbit.",
            "Deforestation means people cutting down forests, so it is a human cause. Look for the cause that would happen with no people on Earth.",
            "",
            "Agriculture is farming, which is something people do, so it is a human cause. The natural cause in this list is the volcano."
          ] },
        { kind: "gap", q: "Burning ___ releases carbon dioxide, and it is the main cause of climate change today.", answer: "fossil fuels", options: ["fossil fuels", "methane", "sunspots"], why: "Coal, oil and gas are fossil fuels. Burning them releases the carbon they hold as carbon dioxide, the biggest human cause of climate change.",
          feedback: {
            "methane": "Methane is a greenhouse gas, not a fuel we burn for energy; it comes mainly from agriculture. The fuels we burn are coal, oil and gas: fossil fuels.",
            "sunspots": "Sunspots are patches on the Sun and belong to the natural cause called solar output. Nobody burns them. The main human cause is burning fossil fuels."
          } },
        { kind: "mcq", q: "Which greenhouse gas is released by agriculture, from cattle and flooded rice fields?", options: ["Sulphur dioxide", "Methane", "Oxygen", "Water vapour"], answer: 1, why: "Agriculture releases methane, a powerful greenhouse gas. In the odd-one-out table, methane and agriculture went together and sulphur dioxide was the odd one.",
          feedback: [
            "Sulphur dioxide is the gas thrown out by volcanic eruptions, and it cools the Earth. The farming gas, from cattle and rice fields, is methane.",
            "",
            "Oxygen is what animals breathe in, not a greenhouse gas they release. The gas that cattle and rice fields give off is methane.",
            "Water vapour is in the air everywhere and is not what farming adds. Agriculture's greenhouse gas is methane, from cattle and flooded rice fields."
          ] }
      ],
      modules: [
        {
          title: "How each natural cause works",
          task: {
            kind: "match",
            q: "Match each natural cause of climate change to how it works.",
            pairs: [
              ["Orbital change", "Slow changes in the shape and tilt of the Earth's path round the Sun alter the energy we receive over thousands of years"],
              ["Solar output", "The Sun's energy rises and falls in cycles; more sunspots mean a slightly warmer Earth"],
              ["Volcanic eruptions", "Ash and sulphur dioxide high in the atmosphere reflect sunlight and cool the Earth for a year or two"],
              ["Ocean currents", "Shifts in the flow of heat through the oceans, such as El Niño, change weather across the world"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the cooling one first: only one of the four makes the Earth cooler, and it involves ash.",
                "Find the slowest one: thousands of years means the Earth's path round the Sun.",
                "Sunspots belong with the Sun. Which cause is about the Sun's energy?",
                "The one left is about water moving heat around."
              ],
              example: {
                q: "Match: deforestation, agriculture. Choices: methane from cattle and rice fields; cutting trees that would have stored carbon.",
                steps: ["Deforestation is about trees.", "Agriculture is farming, which includes cattle and rice."],
                answer: "Deforestation: cutting trees that would have stored carbon. Agriculture: methane from cattle and rice fields."
              }
            },
            core: { hint: "One cools, one is about the Sun, one is about the oceans, one takes thousands of years." },
            stretch: { extend: "Explain why natural causes cannot account for the sharp rise in temperature since 1880 shown in chapter 1." }
          },
          explain: "Say, in one sentence, which natural cause works over the longest time and which over the shortest.",
          why: "Orbital change works over thousands of years; solar output over cycles of about eleven years; volcanic eruptions cool the Earth for a year or two; ocean currents change the weather for a season or more."
        },
        {
          title: "What a big eruption does",
          task: {
            kind: "mcq",
            q: "A huge volcanic eruption throws ash and sulphur dioxide high into the atmosphere. What is the most likely effect on global temperature over the next year or two?",
            options: [
              "Temperatures rise, because the ash traps heat like a greenhouse gas",
              "Temperatures fall, because the ash and sulphur dioxide reflect sunlight back into space",
              "No change, because volcanoes only affect the local area",
              "Temperatures rise, because lava heats the atmosphere directly"
            ],
            answer: 1,
            feedback: [
              "Ash and sulphur dioxide do not act like greenhouse gases. They form a haze high in the atmosphere that reflects sunlight away before it reaches the ground, so the Earth cools.",
              "",
              "A big eruption pushes material high enough to spread around the whole planet, so the effect is global, not local. The result is a cooler year or two.",
              "Lava is hot but there is far too little of it to warm the whole atmosphere. The important effect is the haze of ash and sulphur dioxide, which reflects sunlight and cools the Earth."
            ]
          },
          contexts: [
            { label: "Island volcano", q: "A volcano on a remote island erupts so violently that ash and sulphur dioxide reach high into the atmosphere and spread around the world. What is the most likely effect on global temperature over the next year or two?" },
            { label: "News report", q: "A news report says that a major eruption has sent a cloud of ash and sulphur dioxide high into the atmosphere. What is the most likely effect on global temperature over the next year or two?" },
            { label: "Ice core clue", q: "An ice core shows a layer of volcanic ash from a huge eruption. What would you expect the temperature record to show for the year or two after that layer?" }
          ],
          explain: "Say, in one sentence, why the cooling after an eruption lasts only a year or two.",
          levels: {
            support: {
              steps: [
                "Ask what the ash does to sunlight: it blocks and reflects it.",
                "Less sunlight reaching the ground means less heating.",
                "Rule out any option that says the ash traps heat; that is what greenhouse gases do, not ash.",
                "Rule out local only: a huge eruption spreads its haze round the world."
              ],
              example: {
                q: "During a period with very few sunspots, what would you expect to happen to global temperature, and why?",
                steps: ["Few sunspots mean a less active Sun.", "A less active Sun gives out slightly less energy."],
                answer: "Temperatures would be slightly lower, because fewer sunspots mean the Sun is giving out slightly less energy."
              }
            },
            core: { hint: "Think about what happens to sunlight when there is a haze between the Sun and the ground." },
            stretch: { extend: "Explain why a volcanic eruption can cool the planet even though it also releases carbon dioxide." }
          },
          why: "Ash and sulphur dioxide thrown high into the atmosphere spread around the world and reflect sunlight back into space, so less energy reaches the ground and the Earth cools for a year or two until the haze settles out."
        },
        {
          title: "Why people are changing the climate",
          task: {
            kind: "written",
            q: "Explain how human activities are causing the climate to change. (6 marks)",
            marks: 6,
            criteria: [
              "Names at least two human causes (fossil fuels, deforestation, agriculture)",
              "For each cause, names the gas it releases and explains how it releases it",
              "Explains how these gases change the climate by trapping heat in the atmosphere",
              "Links the causes to each other or judges which is most significant",
              "Uses accurate geographical vocabulary in a clear, logical sequence"
            ],
            model: "The biggest human cause is burning fossil fuels. Coal, oil and gas hold carbon from ancient plants and animals, and burning them in power stations, vehicles and homes releases that carbon as carbon dioxide. Carbon dioxide is a greenhouse gas: it lets sunlight in but traps the heat trying to escape, so more of it means a warmer Earth. Deforestation adds to this in two ways, because the felled trees stop taking carbon dioxide out of the air and, if they are burned, release the carbon they stored. Agriculture releases methane, an even stronger greenhouse gas, from cattle and flooded rice fields. These causes are linked, since forests are often cleared to make farmland, but fossil fuels are the most significant because every country burns them for energy and they release the most carbon dioxide."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: name the biggest cause (fossil fuels) and say what is burned.",
                "Sentence 2: say what gas is released and what that gas does to heat in the atmosphere.",
                "Sentences 3 and 4: add deforestation and agriculture, each with its gas.",
                "Last sentence: say which cause is most significant and why."
              ],
              example: {
                q: "In two sentences, explain how deforestation contributes to climate change.",
                steps: ["Say what trees do with carbon while they are alive.", "Say what happens to that carbon when they are cut down or burned."],
                answer: "Trees take carbon dioxide out of the air and store the carbon in their wood. When forests are cut down the storage stops, and if the trees are burned the stored carbon goes back into the atmosphere as carbon dioxide."
              }
            },
            core: { hint: "Cause, gas, mechanism: say what people do, which gas it releases, and what the gas does to heat." },
            stretch: { extend: "Add a sentence explaining why a developing country might find it harder than the UK to cut its use of fossil fuels." }
          },
          explain: "Say, in one sentence, what carbon dioxide and methane do to heat in the atmosphere.",
          why: "A full answer names the causes, gives each its gas, explains the trapping of heat and makes a judgement. Fossil fuels are the deck's main cause; deforestation and agriculture complete the picture."
        }
      ]
    },

    /* ───────────── 3 · effects ───────────── */
    {
      key: "effects", n: 3, title: "The effects of climate change on people and the environment",
      lead: "The long list of effects your deck gave you, sorted into effects on the environment and effects on people, and how to decide which are the most significant.",
      covers: [5],
      pretext: {
        words: [
          { word: "effect", means: "something that happens as a result of a change", sentence: "Rising sea levels are an effect of climate change." },
          { word: "habitat", means: "the natural home of a plant or animal", sentence: "Melting sea ice destroys the habitat of the polar bear." },
          { word: "yield", means: "the amount of crop a farm produces", sentence: "Drought lowers the yield of wheat." },
          { word: "migration", means: "people moving to live in another place", sentence: "Floods and drought can force migration." },
          { word: "extreme weather", means: "very severe weather such as floods, heatwaves and droughts", sentence: "Extreme weather is becoming more common." },
          { word: "significant", means: "important, with big consequences", sentence: "Rising sea levels are a significant effect for low-lying countries." }
        ],
        passage: [
          "A warmer world changes many things at once.",
          "Ice sheets and glaciers melt, and the sea level rises.",
          "Low-lying coasts and islands are at risk of flooding.",
          "Natural habitats are destroyed, and animals such as polar bears lose their homes.",
          "Extreme weather, such as floods, heatwaves and droughts, becomes more common.",
          "Farmers find that their crops give different yields as rainfall and temperature change.",
          "Some places run short of water.",
          "Diseases spread into new areas as they get warmer.",
          "Health risks rise, and more people may have to migrate.",
          "There may be more conflict over land and water.",
          "Energy supplies and transport networks come under strain.",
          "Some of these effects hit the environment first; others hit people first."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "شيء يحدث نتيجةً لتغيّر ما (effect)",
            "البيت الطبيعي للنبات أو الحيوان (habitat)",
            "مقدار المحصول الذي تنتجه المزرعة (yield)",
            "انتقال الناس ليعيشوا في مكان آخر (migration)",
            "طقس شديد جدًّا، كالسيول وموجات الحرّ والجفاف (extreme weather)",
            "مهمّ، له نتائج كبيرة (significant)"
          ],
          "passage": [
            "العالم الأدفأ يغيّر أشياء كثيرة في وقت واحد.",
            "فالصفائح الجليدية والأنهار الجليدية تذوب، ويرتفع مستوى سطح البحر.",
            "والسواحل والجزر المنخفضة معرّضة لخطر الغرق.",
            "والبيوت الطبيعية تُدمَّر، وحيوانات كالدِّببة القطبية تفقد بيوتها.",
            "والطقس المتطرّف، كالسيول وموجات الحرّ والجفاف، يصير أكثر شيوعًا.",
            "والمزارعون يجدون محاصيلهم تعطي غِلالًا مختلفة مع تغيّر المطر والحرارة.",
            "وبعض الأماكن يَشُحّ فيه الماء.",
            "والأمراض تنتشر إلى مناطق جديدة كلّما ازدادت حرارتها.",
            "ومخاطر الصحّة ترتفع، وقد يُجبر ناس أكثر على الهجرة.",
            "وقد يزيد الصراع على الأرض والماء.",
            "وموارد الطاقة وشبكات النقل تتعرّض للإجهاد.",
            "وبعض هذه الآثار يصيب البيئة أوّلًا، وبعضها يصيب الناس أوّلًا."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "coś, co dzieje się w wyniku jakiejś zmiany (effect)",
            "naturalny dom rośliny albo zwierzęcia (habitat)",
            "ilość plonu, którą daje gospodarstwo (yield)",
            "przenoszenie się ludzi, żeby mieszkać w innym miejscu (migration)",
            "bardzo gwałtowna pogoda, taka jak powodzie, fale upałów i susze (extreme weather)",
            "ważny, mający duże następstwa (significant)"
          ],
          "passage": [
            "Cieplejszy świat zmienia wiele rzeczy naraz.",
            "Lądolody i lodowce topią się, a poziom morza się podnosi.",
            "Niskie wybrzeża i wyspy są narażone na zalanie.",
            "Naturalne siedliska są niszczone, a zwierzęta takie jak niedźwiedzie polarne tracą swoje domy.",
            "Pogoda ekstremalna, taka jak powodzie, fale upałów i susze, zdarza się częściej.",
            "Rolnicy widzą, że ich uprawy dają inne plony, bo zmieniają się opady i temperatura.",
            "W niektórych miejscach zaczyna brakować wody.",
            "Choroby rozprzestrzeniają się na nowe obszary, które się ocieplają.",
            "Rośnie ryzyko dla zdrowia i więcej ludzi może być zmuszonych do przeprowadzki.",
            "Może być więcej konfliktów o ziemię i wodę.",
            "Dostawy energii i sieci transportowe są pod coraz większym obciążeniem.",
            "Część tych skutków uderza najpierw w środowisko, a część najpierw w ludzi."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "algo que acontece em consequência de uma mudança (effect, efeito)",
            "a casa natural de uma planta ou de um animal (habitat)",
            "a quantidade de colheita que uma exploração agrícola produz (yield, rendimento)",
            "pessoas que se mudam para viver noutro lugar (migration, migração)",
            "tempo muito severo, como cheias/enchentes, ondas de calor e secas (extreme weather)",
            "importante, com grandes consequências (significant, significativo)"
          ],
          "passage": [
            "Um mundo mais quente muda muitas coisas ao mesmo tempo.",
            "Os mantos de gelo e os glaciares/geleiras derretem, e o nível do mar sobe.",
            "As costas baixas e as ilhas correm risco de inundação.",
            "Os habitats naturais são destruídos, e animais como os ursos polares perdem as suas casas.",
            "O tempo extremo, como as cheias/enchentes, as ondas de calor e as secas, fica mais frequente.",
            "Os agricultores notam que as suas culturas dão rendimentos diferentes à medida que a chuva e a temperatura mudam.",
            "Há lugares que ficam com falta de água.",
            "As doenças espalham-se por áreas novas, à medida que elas aquecem.",
            "Os riscos para a saúde aumentam, e mais pessoas podem ter de migrar.",
            "Pode haver mais conflitos por causa da terra e da água.",
            "O fornecimento de energia e as redes de transportes ficam sob pressão.",
            "Alguns destes efeitos atingem primeiro o ambiente; outros atingem primeiro as pessoas."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "wax dhacay isbeddel dartii",
            "hoyga dabiiciga ah ee dhir ama xayawaan",
            "inta dalag ah oo beer soo saarto",
            "dad oo meel kale u guuraya si ay ku noolaadaan",
            "hawo aad u daran sida fatahaad, mowjado kulayl iyo abaaro",
            "muhiim, oo cawaaqib waaweyn leh"
          ],
          "passage": [
            "Dunida sii kululaanaysa waxay waxyaalo badan isku mar beddeshaa.",
            "Ice sheets iyo glaciers way dhalaalaan, heerka baddana wuu kacaa.",
            "Xeebaha hooseeya iyo jasiiradaha waxay khatar fatahaad ku jiraan.",
            "Hoyga dabiiciga ah waa la burburiyaa, xayawaanka sida polar bears-kana hoygooda way lumiyaan.",
            "Hawada aad u daran, sida fatahaad, mowjado kulayl iyo abaaro, way sii caan noqonaysaa.",
            "Beeraleydu waxay arkaan in dalagyadoodu wax kala duwan soo saaraan marka roobka iyo heerkulku isbeddelaan.",
            "Meelo qaar biyo ayay ka yaraadaan.",
            "Cudurro waxay meelo cusub gelaan marka ay sii kululaadaan.",
            "Khataraha caafimaadka way kordhaan, dad badanna waxay qasbanaan karaan inay guuraan.",
            "Waxaa noqon kara khilaaf badan oo dhulka iyo biyaha ah.",
            "Sahayda tamarta iyo shabakadaha gaadiidka cadaadis ayay la kulmaan.",
            "Saameynta qaar deegaanka ayay marka hore saamaysaa; qaarna dadka ayay marka hore saamaysaa."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "те, що відбувається внаслідок якоїсь зміни (effect)",
            "природний дім рослини або тварини (habitat)",
            "кількість врожаю, яку дає господарство (yield)",
            "люди, які переїжджають жити в інше місце (migration)",
            "дуже сувора погода, як-от повені, хвилі спеки й засухи (extreme weather)",
            "важливий, із великими наслідками (significant)"
          ],
          "passage": [
            "Тепліший світ змінює багато речей водночас.",
            "Льодові щити й льодовики тануть, і рівень моря піднімається.",
            "Низькі береги й острови під загрозою затоплення.",
            "Природні оселі руйнуються, і такі тварини, як полярні ведмеді, втрачають свої домівки.",
            "Екстремальна погода, як-от повені, хвилі спеки й засухи, стає частішою.",
            "Фермери бачать, що їхні культури дають інші врожаї, бо змінюються опади й температура.",
            "У деяких місцях бракує води.",
            "Хвороби поширюються в нові місця, коли ті теплішають.",
            "Загрози здоров’ю зростають, і більше людей може бути змушене переїхати.",
            "Може бути більше конфліктів за землю й воду.",
            "Постачання енергії й транспортні мережі потрапляють під навантаження.",
            "Деякі з цих наслідків б’ють спершу по довкіллю; інші — спершу по людях."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ بات جو کسی تبدیلی کے نتیجے میں پیش آئے (effect)",
            "کسی پودے یا جانور کا قدرتی گھر (habitat)",
            "کسی کھیت سے حاصل ہونے والی فصل کی مقدار (yield)",
            "لوگوں کا کسی دوسری جگہ رہنے کے لیے جانا (migration)",
            "بہت سخت موسم، جیسے سیلاب، heatwaves اور قحط (extreme weather)",
            "اہم، جس کے بڑے نتیجے ہوں (significant)"
          ],
          "passage": [
            "گرم تر دنیا ایک ہی وقت میں بہت کچھ بدل دیتی ہے۔",
            "ice sheets اور glaciers پگھلتے ہیں، اور سمندر کی سطح بلند ہو جاتی ہے۔",
            "نچلے ساحل اور جزیرے سیلاب کے خطرے میں ہیں۔",
            "قدرتی habitats تباہ ہو جاتے ہیں، اور قطبی ریچھ جیسے جانور اپنے گھر کھو دیتے ہیں۔",
            "extreme weather، جیسے سیلاب، heatwaves اور قحط، زیادہ عام ہو جاتا ہے۔",
            "بارش اور درجۂ حرارت بدلنے سے کسانوں کو اپنی فصلوں کے yields مختلف ملتے ہیں۔",
            "کچھ جگہوں پر پانی کم پڑ جاتا ہے۔",
            "جیسے جیسے نئے علاقے گرم ہوتے ہیں، بیماریاں وہاں پھیل جاتی ہیں۔",
            "صحت کے خطرے بڑھتے ہیں، اور زیادہ لوگوں کو ہجرت کرنا پڑ سکتی ہے۔",
            "زمین اور پانی پر جھگڑے زیادہ ہو سکتے ہیں۔",
            "توانائی کی رسد اور آمد و رفت کے نظام پر دباؤ آ جاتا ہے۔",
            "ان میں سے کچھ اثر پہلے ماحول پر پڑتے ہیں؛ کچھ پہلے لوگوں پر۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Fourteen effects",
          paragraphs: [
            "Your deck gave you a long list, and it is worth having it in front of you. Warmer temperatures. Rising sea levels. Destruction of natural habitats, for example the sea ice that polar bears hunt from. Melting ice and glaciers. Changes to agricultural yields. More extreme weather events such as flooding, heatwaves and drought. Increased migration. Lack of water. Increased health risks. Increased spread of disease. Increased levels of conflict. Increased vulnerability of energy sources. Increased maintenance of transport networks. Reduction in forest coverage.",
            "Fourteen items is too many to learn as a list, so sort them. Some are effects on the environment: warmer temperatures, melting ice, rising seas, lost habitats, shrinking forests. Some are effects on people: migration, health, disease, conflict, water shortage, energy and transport. Some sit in the middle, because they start in the environment and end with people: extreme weather and changing crop yields.",
            "Notice too that the effects form chains. Warmer temperatures melt ice; melting ice raises the sea; a higher sea floods low coasts; flooded homes push people to migrate; migration can lead to conflict. When you explain an effect in the exam, show the chain, not just the end of it."
          ],
          tip: "Sort the fourteen effects into environment, people and both. A sorted list is easier to recall and gives you a ready-made paragraph plan."
        },
        {
          heading: "Effects on the environment",
          paragraphs: [
            "The first effect is the one all the others grow from: the world is getting warmer. Warmer air melts ice, both the glaciers in mountain valleys, which you met as evidence in chapter 1, and the great ice sheets of Greenland and Antarctica. Water from melting land ice flows into the sea, and warmer sea water also takes up more room, so sea levels rise.",
            "Habitats change faster than many species can cope with. Sea ice that polar bears hunt from forms later and melts earlier. Coral reefs are damaged by warmer water. Plants and animals that need cool conditions have to move uphill or towards the poles, and some have nowhere to go. Forest coverage can fall as drought and fire increase, which matters twice over, because forests also store carbon.",
            "Extreme weather becomes more frequent. A warmer atmosphere holds more water, so when it rains it can rain harder, bringing floods. Hotter summers bring heatwaves and, where rain fails, droughts. These events are the point where effects on the environment turn into effects on people."
          ],
          tip: "Melting ice is both evidence of climate change (chapter 1) and an effect of it. Use the same fact in both places."
        },
        {
          heading: "Effects on people, and which matter most",
          paragraphs: [
            "Farming depends on rainfall and temperature, so as these change, yields change too. In some places harvests fall and food prices rise; in others new crops become possible, as you will see with vines in southern England in chapter 6. Where droughts become common there is a lack of water for homes, farms and industry. Warmer conditions let insects that carry diseases spread into new areas, so the spread of disease and health risks rise, and heatwaves are dangerous to the old and the very young.",
            "When land floods, crops fail or water runs out, people move. Increased migration puts pressure on the places people move to, and competition for land and water can raise the level of conflict. Energy sources become more vulnerable, for example when power stations need cooling water in a drought, and transport networks need more maintenance as roads buckle in heat and railways flood.",
            "Your lesson ended with a continuum: a line from most significant to least significant on which you placed the effects and justified your choices. There is no single right order, but there are good reasons. Rising sea levels are often placed near the top because they threaten whole countries and cannot be reversed. Extreme weather ranks high because it kills people now. The skill the examiner wants is the justification: say who is affected, how many, how badly and for how long."
          ],
          worked: {
            q: "Which is more significant, rising sea levels or increased maintenance of transport networks? Justify your answer. (4 marks)",
            steps: [
              "Pick a judgement first: rising sea levels are more significant.",
              "Give a reason about scale: whole low-lying countries and millions of people on coasts are at risk, whereas transport maintenance is a cost that can be paid.",
              "Give a reason about time: sea level rise cannot be reversed for centuries, whereas a damaged road can be repaired.",
              "Finish by linking the two: higher seas will themselves damage coastal roads and railways, so one effect causes the other."
            ],
            answer: "Rising sea levels are more significant. They threaten whole low-lying countries and millions of people living on coasts, and they cannot be reversed for centuries, whereas extra transport maintenance is a cost that can be paid and a road can be repaired. In fact, higher seas will themselves flood coastal roads and railways, so the first effect causes the second."
          },
          tip: "Justify means give reasons for your choice. Use scale (how many people), severity (how badly) and time (how long) as your three reasons."
        }
      ],
      gate: [
        { kind: "mcq", q: "Why does climate change cause sea levels to rise?", options: ["Because more rain falls into the sea", "Because melting ice on land flows into the sea and warmer water expands", "Because rivers flow faster", "Because the Moon pulls harder on a warmer ocean"], answer: 1, why: "Warmer temperatures melt glaciers and ice sheets on land, adding water to the oceans, and warmer sea water takes up more space.",
          feedback: [
            "Rain that falls into the sea came from the sea in the first place, through evaporation, so it does not add water overall. The extra water comes from melting ice on land.",
            "",
            "Faster rivers move water to the sea more quickly but do not add any that was not already in the water cycle. Melting land ice is new water for the oceans.",
            "The Moon causes tides, and its pull does not change with temperature. Sea level rise comes from melting land ice and from warmer water expanding."
          ] },
        { kind: "gap", q: "When sea ice melts, polar bears lose their natural ___.", answer: "habitat", options: ["habitat", "yield", "migration"], why: "A habitat is the natural home of a plant or animal. Melting sea ice destroys the polar bear's hunting ground, which is the destruction of a natural habitat.",
          feedback: {
            "yield": "Yield is the amount of crop a farm produces, a farming word. The polar bear's home on the sea ice is its habitat.",
            "migration": "Migration is people moving to live somewhere else. The word for an animal's natural home is habitat."
          } },
        { kind: "mcq", q: "Which of these effects of climate change is mainly an effect on people rather than on the environment?", options: ["Melting glaciers", "Destruction of natural habitats", "Increased migration", "Reduction in forest coverage"], answer: 2, why: "Migration is people moving home because of floods, drought or failed harvests. Melting glaciers, lost habitats and shrinking forests are effects on the environment.",
          feedback: [
            "Melting glaciers is a change to the physical environment. The effect in the list that is about people is increased migration.",
            "Habitats are the homes of plants and animals, so their destruction is an environmental effect. The effect on people here is increased migration.",
            "",
            "Forest coverage is part of the natural environment. People migrating is the effect that is mainly about people."
          ] }
      ],
      modules: [
        {
          title: "Chains of effects",
          task: {
            kind: "match",
            q: "Match each effect of climate change to the chain that leads to it.",
            pairs: [
              ["Rising sea levels", "Warmer temperatures melt ice on land, and the water flows into the sea"],
              ["Changes to agricultural yields", "Rainfall and temperature change, so crops grow better or worse than before"],
              ["Increased spread of disease", "Warmer conditions let insects that carry disease move into new areas"],
              ["Increased migration", "People leave places hit by flooding, drought or failed harvests"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Work backwards from each effect: ask what must have happened just before it.",
                "Sea level is about water; which chain adds water to the sea?",
                "Yields are about crops; disease is about insects; migration is about people moving.",
                "Read each finished pair as a because sentence to check it makes sense."
              ],
              example: {
                q: "Match: lack of water, increased conflict. Choices: groups compete for scarce land and water; droughts become more frequent so rivers and reservoirs run low.",
                steps: ["Lack of water comes from drought.", "Conflict comes from competition over what is scarce."],
                answer: "Lack of water: droughts become more frequent so rivers and reservoirs run low. Increased conflict: groups compete for scarce land and water."
              }
            },
            core: { hint: "Each chain ends with the thing it explains: water into the sea, crops, insects, people moving." },
            stretch: { extend: "Join two of the chains together to show how an effect on the environment becomes an effect on people." }
          },
          explain: "Say, in one sentence, why examiners want the chain and not just the final effect.",
          why: "Each effect has a cause behind it: melting land ice raises the sea; changing rainfall and temperature change yields; warmth lets disease-carrying insects spread; disasters push people to move. Showing the chain is what turns a list into an explanation."
        },
        {
          title: "The most significant effect",
          task: {
            kind: "mcq",
            q: "A small country is made of low-lying islands only a few metres above the sea. Which effect of climate change is most significant for it, and why?",
            options: [
              "Increased maintenance of transport networks, because roads cost money",
              "Rising sea levels, because they threaten to flood the whole country and cannot be reversed",
              "Reduction in forest coverage, because trees store carbon",
              "Melting glaciers, because the islands will lose their ice"
            ],
            answer: 1,
            feedback: [
              "Road repairs are a real cost, but a cost can be paid. For islands only a few metres above the sea, the threat that could remove the whole country is rising sea levels.",
              "",
              "Forest loss matters for the climate as a whole, but it is not the effect that threatens a low island nation's existence. That is rising sea levels.",
              "Low-lying tropical islands have no glaciers to lose. Melting glaciers elsewhere matter to them only because the water raises the sea around them."
            ]
          },
          contexts: [
            { label: "Coastal city", q: "A large city is built on a river delta barely above sea level. Which effect of climate change is most significant for it, and why?" },
            { label: "Island village", q: "A fishing village sits on a coral island whose highest point is two metres above the sea. Which effect of climate change is most significant for the village, and why?" },
            { label: "Continuum task", q: "You are placing effects on a continuum for a nation of low-lying islands. Which effect goes at the most significant end, and why?" }
          ],
          explain: "Say, in one sentence, what makes an effect significant for a particular place.",
          levels: {
            support: {
              steps: [
                "Ask what the place is like: low-lying islands, a few metres above the sea.",
                "Ask which effect could remove the country altogether. That is the most significant.",
                "Check the reason in the option matches: a threat to the whole country that cannot be undone.",
                "Rule out effects the place does not have, such as glaciers on a tropical island."
              ],
              example: {
                q: "For a farming region that depends on summer rain, which effect of climate change is likely to be most significant, and why?",
                steps: ["Ask what the region depends on: rain for crops.", "Which effect attacks that directly?"],
                answer: "Changes to agricultural yields caused by more frequent drought, because the region's food and income depend on summer rain."
              }
            },
            core: { hint: "Significance depends on the place. What is the one thing a few metres of sea could take away from an island nation?" },
            stretch: { extend: "Explain why the same effect, rising sea levels, might be placed low on the continuum by a country in the middle of a continent." }
          },
          why: "Significance depends on who is affected, how badly and for how long. For islands a few metres above the sea, rising sea levels threaten the whole country and cannot be reversed, which places them at the top of the continuum."
        },
        {
          title: "Effects on people",
          task: {
            kind: "written",
            q: "Explain how climate change can affect people's lives. (6 marks)",
            marks: 6,
            criteria: [
              "Names at least three effects on people (for example food supply, water, health and disease, migration, conflict)",
              "Explains the chain from a change in climate to each effect, not just the effect",
              "Shows that some effects begin in the environment, such as extreme weather or rising seas, and end with people",
              "Judges which effect is most significant, with a reason",
              "Uses accurate vocabulary and a clear, logical sequence"
            ],
            model: "Climate change affects people through a chain of effects. As rainfall and temperature change, crop yields change, so in many regions harvests fall and food becomes more expensive. More frequent droughts leave homes, farms and industry short of water, while warmer conditions let insects that carry disease spread into new areas, raising health risks. Extreme weather, such as floods and heatwaves, destroys homes and kills people directly. When land floods or harvests fail, people are forced to migrate, and the pressure on land and water where they arrive can raise the level of conflict. The most significant effect is probably the loss of homes to flooding and rising seas, because it is permanent and forces every other change at once."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: say that the effects come in chains, starting from a change in rainfall or temperature.",
                "Sentences 2 to 4: pick three effects on people (food, water, health) and give the chain for each.",
                "Sentence 5: add migration or conflict as a knock-on effect.",
                "Last sentence: say which is most significant and why."
              ],
              example: {
                q: "In two sentences, explain how a heatwave can affect people's health.",
                steps: ["Say who is most at risk and why.", "Add a second knock-on effect, such as water or power."],
                answer: "In a heatwave the old and the very young struggle to keep cool, so illness and deaths rise. Hospitals and water supplies come under strain at the same time, which makes the risk worse."
              }
            },
            core: { hint: "Three effects on people, each as a chain: climate change leads to X, which leads to Y for people." },
            stretch: { extend: "Add a sentence contrasting how the effects differ for a rich country and a poor country." }
          },
          explain: "Say, in one sentence, how an effect that starts in the environment ends up affecting people.",
          why: "A good answer shows the chains: changing climate alters yields, water supply, disease and extreme weather, and these push people to move and compete. The judgement at the end turns a description into an explanation."
        }
      ]
    },

    /* ───────────── 4 · mitigation and international agreements ───────────── */
    {
      key: "mitigation-agreements", n: 4, title: "Managing climate change: mitigation and international agreements",
      lead: "The two ways of managing climate change, why the atmosphere is a global common that no country can protect alone, and the three agreements, Kyoto, Copenhagen and Paris, that tried to get the world to act together.",
      covers: [3],
      pretext: {
        words: [
          { word: "mitigation", means: "actions that reduce the causes of climate change", sentence: "Building wind farms instead of coal power stations is mitigation." },
          { word: "adaptation", means: "actions that respond to climate change and its effects", sentence: "Building a higher sea wall is adaptation." },
          { word: "carbon emissions", means: "the carbon dioxide released into the air by burning fuels", sentence: "Countries agreed to cut their carbon emissions." },
          { word: "global common", means: "something shared by every country, such as the atmosphere", sentence: "Because the atmosphere is a global common, one country's pollution affects all." },
          { word: "international agreement", means: "a deal between many countries to act together", sentence: "The Paris agreement is an international agreement on climate change." },
          { word: "climate finance", means: "money from richer countries to help poorer ones deal with climate change", sentence: "Climate finance pays for solar power and flood defences in poorer nations." }
        ],
        passage: [
          "There are two ways to manage climate change.",
          "Mitigation means reducing the causes, such as cutting carbon emissions.",
          "Adaptation means responding to the change, such as building higher sea walls.",
          "This chapter is about mitigation.",
          "The atmosphere is shared by every country on Earth.",
          "Carbon dioxide released in one place warms the whole planet.",
          "So no country can fix the problem on its own.",
          "Countries have to agree to act together.",
          "In 1997, at Kyoto, 162 countries agreed to cut their carbon emissions.",
          "In 2009, at Copenhagen, 183 countries agreed to try to limit warming to 2 degrees.",
          "In 2015, in Paris, 194 countries agreed to keep the rise below 2 degrees and to help poorer nations.",
          "Each agreement went further than the one before."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "أعمال تقلّل أسباب تغيّر المناخ (mitigation)",
            "أعمال تستجيب لتغيّر المناخ وآثاره (adaptation)",
            "ثاني أكسيد الكربون الذي يُطلق في الهواء بحرق الوقود (carbon emissions)",
            "شيء تتشارك فيه كلّ البلدان، كالغلاف الجوّي (global common)",
            "اتّفاق بين بلدان كثيرة على العمل معًا (international agreement)",
            "مال من البلدان الأغنى لمساعدة الأفقر على مواجهة تغيّر المناخ (climate finance)"
          ],
          "passage": [
            "هناك طريقتان لإدارة تغيّر المناخ.",
            "فالتخفيف (mitigation) يعني تقليل الأسباب، كخفض انبعاثات الكربون.",
            "والتكيّف (adaptation) يعني الاستجابة للتغيّر، كبناء جُدُر بحرية أعلى.",
            "وهذا الفصل عن التخفيف.",
            "والغلاف الجوّي يتشارك فيه كلّ بلد على الأرض.",
            "وثاني أكسيد الكربون الذي يُطلق في مكان واحد يُدفئ الكوكب كلّه.",
            "فلا يستطيع بلد واحد أن يُصلح المشكلة وحده.",
            "وعلى البلدان أن تتّفق على العمل معًا.",
            "وفي 1997 في كيوتو اتّفق 162 بلدًا على خفض انبعاثات الكربون.",
            "وفي 2009 في كوبنهاغن اتّفق 183 بلدًا على السعي لحدّ الاحترار عند 2 درجتين.",
            "وفي 2015 في باريس اتّفق 194 بلدًا على إبقاء الارتفاع تحت 2 درجتين وعلى مساعدة الأمم الأفقر.",
            "وكلّ اتّفاق ذهب أبعد من الذي قبله."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "działania, które zmniejszają przyczyny zmiany klimatu (mitigation)",
            "działania, które odpowiadają na zmianę klimatu i jej skutki (adaptation)",
            "dwutlenek węgla wypuszczany do powietrza przez spalanie paliw (carbon emissions)",
            "coś, co jest wspólne dla każdego kraju, na przykład atmosfera (global common)",
            "umowa między wieloma krajami, żeby działać razem (international agreement)",
            "pieniądze od bogatszych krajów na pomoc biedniejszym w radzeniu sobie ze zmianą klimatu (climate finance)"
          ],
          "passage": [
            "Są dwa sposoby zarządzania zmianą klimatu.",
            "Łagodzenie (mitigation) znaczy zmniejszanie przyczyn, na przykład ograniczanie emisji dwutlenku węgla.",
            "Adaptacja (adaptation) znaczy odpowiadanie na tę zmianę, na przykład budowanie wyższych murów nadmorskich.",
            "Ten rozdział jest o łagodzeniu.",
            "Atmosfera jest wspólna dla każdego kraju na Ziemi.",
            "Dwutlenek węgla wypuszczony w jednym miejscu ociepla całą planetę.",
            "Dlatego żaden kraj nie naprawi tego problemu sam.",
            "Kraje muszą się umówić, że będą działać razem.",
            "W 1997 roku w Kioto 162 kraje zgodziły się ograniczyć swoje emisje dwutlenku węgla.",
            "W 2009 roku w Kopenhadze 183 kraje zgodziły się próbować ograniczyć ocieplenie do 2 stopni.",
            "W 2015 roku w Paryżu 194 kraje zgodziły się utrzymać wzrost poniżej 2 stopni i pomagać biedniejszym państwom.",
            "Każda umowa posuwała się dalej niż poprzednia."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "ações que reduzem as causas das mudanças climáticas (mitigation, mitigação)",
            "ações que respondem às mudanças climáticas e aos seus efeitos (adaptation, adaptação)",
            "o dióxido de carbono lançado no ar pela queima de combustíveis (carbon emissions, emissões de carbono)",
            "algo que é partilhado/compartilhado por todos os países, como a atmosfera (global common, bem comum global)",
            "um acordo entre muitos países para agirem em conjunto (international agreement, acordo internacional)",
            "dinheiro dos países mais ricos para ajudar os mais pobres a lidar com as mudanças climáticas (climate finance)"
          ],
          "passage": [
            "Há duas maneiras de gerir as mudanças climáticas.",
            "Mitigação quer dizer reduzir as causas, como cortar as emissões de carbono.",
            "Adaptação quer dizer responder à mudança, como construir muros do mar mais altos.",
            "Este capítulo é sobre a mitigação.",
            "A atmosfera é partilhada/compartilhada por todos os países da Terra.",
            "O dióxido de carbono lançado num lugar aquece o planeta todo.",
            "Por isso nenhum país consegue resolver o problema sozinho.",
            "Os países têm de concordar em agir em conjunto.",
            "Em 1997, em Quioto (Kyoto), 162 países concordaram em cortar as suas emissões de carbono.",
            "Em 2009, em Copenhaga/Copenhague, 183 países concordaram em tentar limitar o aquecimento a 2 graus.",
            "Em 2015, em Paris, 194 países concordaram em manter a subida abaixo dos 2 graus e em ajudar as nações mais pobres.",
            "Cada acordo foi mais longe do que o anterior."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "tallaabooyin yareeya sababaha isbeddelka cimilada",
            "tallaabooyin ka jawaabaya isbeddelka cimilada iyo saameyntiisa",
            "kaarboon dioksaydhka hawada loo sii daayo gubidda shidaalka",
            "wax dal kasta wadaago, sida jawiga",
            "heshiis dalal badan ah oo ay wada tallaabsadaan",
            "lacag ka timid dalalka hodanka si loo caawiyo kuwa faqiirka ah ee isbeddelka cimilada la ildaran"
          ],
          "passage": [
            "Laba siyaabood ayaa jira oo isbeddelka cimilada lagu maamulo.",
            "Mitigation macnaheedu waa yareynta sababaha, sida gooynta carbon emissions.",
            "Adaptation macnaheedu waa ka jawaabidda isbeddelka, sida dhisidda darbiyo badda ka sarreeya.",
            "Cutubkan wuxuu ku saabsan yahay mitigation.",
            "Jawiga waxaa wadaagta dal kasta oo Dhulka ku yaal.",
            "Kaarboon dioksaydh meel laga sii daayay wuxuu meeraha oo dhan kululeeyaa.",
            "Markaa dalna kali ahaantii dhibaatada ma xallin karo.",
            "Dalalku waa inay isku raacaan inay wada tallaabsadaan.",
            "1997-kii, Kyoto, 162 dal waxay isku raaceen inay carbon emissions-kooda gooyaan.",
            "2009-kii, Copenhagen, 183 dal waxay isku raaceen inay isku dayaan inay kululaanshaha 2 darajo ku xadeeyaan.",
            "2015-kii, Paris, 194 dal waxay isku raaceen inay kor u kaca ka hooseysiiyaan 2 darajo oo ay dalalka faqiirka caawiyaan.",
            "Heshiis kastaa wuxuu intii ka horreysay ka sii fogaaday."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "дії, які зменшують причини зміни клімату (mitigation)",
            "дії, які відповідають на зміну клімату і її наслідки (adaptation)",
            "вуглекислий газ, випущений у повітря через спалювання палива (carbon emissions)",
            "те, що спільне для кожної країни, як-от атмосфера (global common)",
            "угода між багатьма країнами діяти разом (international agreement)",
            "гроші від багатших країн, щоб допомогти біднішим країнам справлятися зі зміною клімату (climate finance)"
          ],
          "passage": [
            "Є два способи керувати зміною клімату.",
            "Мітигація (mitigation) означає зменшення причин, як-от скорочення викидів вуглецю.",
            "Адаптація (adaptation) означає відповідь на зміну, як-от будівництво вищих захисних стін від моря.",
            "Цей розділ — про мітигацію.",
            "Атмосфера є спільною для кожної країни на Землі.",
            "Вуглекислий газ, випущений в одному місці, нагріває всю планету.",
            "Тому жодна країна не може вирішити цю проблему сама.",
            "Країни мусять домовитися діяти разом.",
            "У 1997 році в Кіото 162 країни домовилися скоротити свої викиди вуглецю.",
            "У 2009 році в Копенгагені 183 країни домовилися спробувати обмежити потепління до 2 градусів.",
            "У 2015 році в Парижі 194 країни домовилися втримати зростання нижче за 2 градуси і допомагати біднішим країнам.",
            "Кожна угода йшла далі за попередню."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ کام جو climate change کے اسباب کم کرتے ہیں (mitigation)",
            "وہ کام جو climate change اور اس کے اثروں کا جواب دیتے ہیں (adaptation)",
            "ایندھن جلانے سے ہوا میں چھوڑی جانے والی کاربن ڈائی آکسائیڈ (carbon emissions)",
            "وہ چیز جو ہر ملک کی مشترکہ ہے، جیسے فضا (global common)",
            "بہت سے ملکوں کے درمیان مل کر کام کرنے کا معاہدہ (international agreement)",
            "امیر ملکوں کا وہ پیسہ جو غریب ملکوں کو climate change سے نمٹنے میں مدد دے (climate finance)"
          ],
          "passage": [
            "climate change سے نمٹنے کے دو طریقے ہیں۔",
            "mitigation کا مطلب اسباب کم کرنا ہے، جیسے carbon emissions گھٹانا۔",
            "adaptation کا مطلب تبدیلی کا جواب دینا ہے، جیسے اونچی سمندری دیواریں بنانا۔",
            "یہ باب mitigation کے بارے میں ہے۔",
            "فضا زمین کے ہر ملک کی مشترکہ ہے۔",
            "ایک جگہ چھوڑی ہوئی کاربن ڈائی آکسائیڈ پورے کرّے کو گرم کرتی ہے۔",
            "اس لیے کوئی ملک یہ مسئلہ اکیلا حل نہیں کر سکتا۔",
            "ملکوں کو مل کر کام کرنے پر رضامند ہونا پڑتا ہے۔",
            "1997 میں کیوٹو (Kyoto) میں 162 ملکوں نے اپنی carbon emissions کم کرنے پر اتفاق کیا۔",
            "2009 میں کوپن ہیگن (Copenhagen) میں 183 ملکوں نے گرمی کو 2 درجے تک محدود رکھنے کی کوشش پر اتفاق کیا۔",
            "2015 میں پیرس میں 194 ملکوں نے اتفاق کیا کہ اضافہ 2 درجے سے نیچے رکھا جائے اور غریب ملکوں کی مدد کی جائے۔",
            "ہر معاہدہ پچھلے سے آگے گیا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Mitigation and adaptation",
          paragraphs: [
            "Managing climate change involves two very different kinds of action, and the exam will expect you to tell them apart every time. Mitigation is anything that reduces the causes of climate change: cutting carbon emissions by using renewable energy, capturing carbon, planting trees, and agreeing with other countries to do the same. Your deck calls this the globally responsible approach, because the whole world benefits from every tonne of carbon that is not released.",
            "Adaptation is anything that responds to climate change that is already happening or already certain: changing what farmers grow, managing water supplies for a drier future, and reducing the risk from rising sea levels. Your deck calls this the locally responsible approach, because the benefit is felt in the place that adapts. Chapter 6 is about adaptation; this chapter and the next are about mitigation.",
            "Why do we need both? Mitigation works slowly, because the carbon dioxide already in the atmosphere will keep warming the planet for decades. Adaptation protects people now, but it does nothing to stop the problem growing. A country that only adapts will have to adapt again and again; a country that only mitigates will suffer the effects that are already on their way."
          ],
          tip: "Mitigation attacks the cause; adaptation copes with the effect. If you can swap in the word prevent, it is mitigation; if you can swap in cope, it is adaptation."
        },
        {
          heading: "The atmosphere as a global common",
          paragraphs: [
            "The atmosphere is a global common: it is shared by all countries, and nobody owns it. Carbon dioxide released by a power station in one country does not stay above that country. It mixes through the whole atmosphere and warms the whole planet. Every country is already feeling the effects, from more extreme weather to rising sea levels, and every country's emissions add to them.",
            "That creates a problem. If one country cuts its emissions at great cost while its neighbours carry on, it pays the price and shares the benefit with everyone else. So countries have little reason to act alone and every reason to act together. The main cause of climate change is burning fossil fuels, and fossil fuels are burned everywhere, so cutting carbon emissions only works if countries agree to do it at the same time. That is why international agreements exist.",
            "There is a fairness question too. Richer countries built their wealth by burning fossil fuels for two centuries; poorer countries are now being asked not to. The agreements you will meet in the next section try to deal with this by asking richer countries to help poorer ones with money and technology, which is what the Paris agreement calls climate finance."
          ],
          worked: {
            q: "Explain why it is important for all countries, not just a few, to agree to reduce their carbon emissions. (4 marks)",
            steps: [
              "Point 1: the atmosphere is a global common, shared by every country, so emissions from one place warm the whole planet.",
              "Point 2: if only some countries cut emissions, the others carry on and the total barely falls, and the countries that acted have paid for nothing.",
              "Develop each point with an example or consequence: the effects (extreme weather, rising seas) fall on everyone, including the countries that cut.",
              "Two points, each developed, earns the four marks. The Kyoto Protocol first bound countries to cut emissions in 1997; by the Paris agreement in 2015, 18 years later, 194 countries had signed up."
            ],
            answer: "The atmosphere is a global common, so carbon dioxide released anywhere warms the whole planet and its effects, such as more extreme weather and rising seas, fall on every country. If only a few countries cut their emissions while others carry on burning fossil fuels, the total barely falls and the countries that acted have paid the cost for no benefit. Only when all countries agree, as 194 did in Paris in 2015, do the cuts add up to a real reduction.",
            checks: [{ expr: "PARIS_YEAR-KYOTO_YEAR", value: 18, tol: 0 }]
          },
          tip: "The phrase global common is worth a mark on its own. Then show the consequence: shared air means shared responsibility."
        },
        {
          heading: "Kyoto, Copenhagen and Paris",
          paragraphs: [
            "The Kyoto Protocol, 1997. At Kyoto in Japan, 162 countries including the UK agreed to cut their carbon emissions. The target was to bring emissions down by an average of 5.2% below 1990 levels by 2012. It was the first agreement with binding targets, but not every major emitter took part, and the target was small.",
            "The Copenhagen agreement, 2009. At Copenhagen in Denmark, 183 countries, the UK among them, promised to bring their carbon emissions down so that global temperature would climb no more than 2°C, to help developing nations cope with the impacts of climate change, and to explore carbon markets and carbon trading, in which permission to emit can be bought and sold so that cuts are made where they are cheapest.",
            "The Paris agreement, 2015. At the United Nations conference in Paris, 194 countries, the UK among them, promised to hold the warming of the planet to below 2.0°C; to limit the greenhouse gases emitted by human activity to the levels that trees, soil and oceans can absorb naturally; and for richer countries to help poorer nations with climate finance, so they can adapt to climate change and switch to renewable energy. The stretch task in your deck asked you to add COP 26, the conference held in 2021, to your notes: its location, its date, why it was needed and what was agreed."
          ],
          tip: "Three agreements, three dates, three country counts: Kyoto 1997 and 162; Copenhagen 2009 and 183; Paris 2015 and 194. The numbers rise each time, which is itself a point you can make."
        },
        {
          heading: "Do agreements work? Writing the discuss answer",
          paragraphs: [
            "A discuss question wants both sides and a judgement. On the plus side, agreements set shared targets, so no country is acting alone; they bring in money for poorer nations through climate finance; they create carbon markets that make cuts cheaper; and each agreement has been bigger than the last, from 162 countries at Kyoto to 194 in Paris. The Paris target of staying below 2.0°C gives every country the same goal to plan towards.",
            "On the minus side, targets are only promises. Kyoto's 5.2% cut was small, and the countries that did not take part carried on emitting. Agreements take years to negotiate, and the atmosphere keeps warming while they are argued over. Poorer countries say the burden should fall on the richer ones that caused most of the problem, and richer countries worry about the cost to their industries. Measuring whether a country has kept its promise is hard.",
            "So can agreements slow down the causes of climate change? A fair judgement is that they are necessary but not sufficient: without them no country has a reason to act, but on their own they change nothing unless countries actually switch to renewable energy, capture carbon and plant trees, which is the subject of the next chapter."
          ],
          tip: "For nine marks, structure as for, against, judgement, with a named agreement and a figure in each paragraph."
        }
      ],
      gate: [
        { kind: "mcq", q: "What does mitigation mean, when we talk about managing climate change?", options: ["Responding to the effects of climate change, such as building higher sea walls", "Reducing the causes of climate change, such as cutting carbon emissions", "Measuring how much the climate has changed", "Moving people away from flooded coasts"], answer: 1, why: "Mitigation is action that reduces the causes of climate change. Responding to the effects is adaptation.",
          feedback: [
            "Responding to the effects, such as building sea walls, is adaptation. Mitigation goes for the causes: cutting the carbon emissions that drive climate change.",
            "",
            "Measuring the change is how we gather evidence, which was chapter 1. Mitigation is action to reduce the causes of the change.",
            "Moving people out of harm's way is a way of responding to the effects, which is adaptation. Mitigation means reducing the causes, above all carbon emissions."
          ] },
        { kind: "numeric", q: "In which year did 194 countries, including the UK, sign the United Nations Paris agreement to keep the rise in global temperatures below 2.0°C?", answer: 2015, tolerance: 0, units: "", check: "PARIS_YEAR", why: "The Paris agreement was signed in 2015 by 194 countries, after Kyoto in 1997 and Copenhagen in 2009.",
          misconceptions: [
            { answer: 1997, says: "1997 is the Kyoto Protocol, when 162 countries first agreed to cut their carbon emissions. Paris came later, in 2015.", check: "KYOTO_YEAR" },
            { answer: 2009, says: "2009 is the Copenhagen agreement, signed by 183 countries. The Paris agreement, with 194 countries, was 2015.", check: "COPENHAGEN_YEAR" },
            { answer: 2021, says: "2021 is COP 26, the conference your deck asked you to research. The Paris agreement itself was signed in 2015.", check: "COP26_YEAR" }
          ] },
        { kind: "gap", q: "The atmosphere is a global ___, which means it is shared by all countries.", answer: "common", options: ["common", "market", "border"], why: "A global common is something shared by everyone and owned by no one. Because the atmosphere is one, emissions anywhere affect the whole planet.",
          feedback: {
            "market": "A carbon market is where permission to emit is bought and sold, one of the Copenhagen ideas. The atmosphere itself is described as a global common: shared by all.",
            "border": "The whole point is that the atmosphere has no borders: carbon released in one country spreads everywhere. The deck's phrase is global common, meaning shared by all countries."
          } }
      ],
      modules: [
        {
          title: "Three agreements in order",
          task: {
            kind: "order",
            q: "Put these international agreements on climate change in the order they were made, earliest first.",
            items: [
              "The Kyoto Protocol: 162 countries agree to cut their carbon emissions",
              "The Copenhagen agreement: 183 countries agree to aim to limit warming to 2°C and to explore carbon trading",
              "The Paris agreement: 194 countries agree to keep warming below 2.0°C and to provide climate finance",
              "COP 26: the conference your deck asked you to research and add to your notes"
            ]
          },
          contexts: [
            { label: "Timeline poster", q: "You are making a timeline poster of the world's climate agreements. Put these in date order, earliest at the top." },
            { label: "Revision cards", q: "Your revision cards for the agreements have been shuffled. Put them back in chronological order, earliest first." },
            { label: "Country counts", q: "Each agreement was signed by more countries than the last. Put them in order from the smallest number of countries to the largest, which is also date order." }
          ],
          levels: {
            support: {
              steps: [
                "Recall the three dates: 1997, 2009, 2015. Then COP 26 is 2021.",
                "Match each date to a place: Kyoto first, then Copenhagen, then Paris.",
                "Check with the country counts: 162, then 183, then 194. The numbers go up over time.",
                "COP 26 is the most recent, so it goes last."
              ],
              example: {
                q: "Put these in date order: the Thames Barrier is completed (1984); the 1953 floods; a new barrage would be built if seas rise by 4 m (future).",
                steps: ["The floods came first and caused the barrier to be built.", "The future plan goes last."],
                answer: "The 1953 floods; the Thames Barrier completed in 1984; a future barrage if seas rise by 4 m."
              }
            },
            core: { hint: "The country counts rise with each agreement: 162, 183, 194. Which is which?" },
            stretch: { extend: "Explain one way the Paris agreement went further than Kyoto, and one problem that all three agreements share." }
          },
          explain: "Say, in one sentence, what pattern you notice in the number of countries signing each agreement.",
          why: "Kyoto came first in 1997 with 162 countries; Copenhagen followed in 2009 with 183; Paris in 2015 brought 194 countries; COP 26 in 2021 is the most recent."
        },
        {
          title: "How many more countries?",
          task: {
            kind: "numeric",
            q: "The Paris agreement was signed by 194 countries and the Kyoto Protocol by 162. How many more countries signed in Paris than at Kyoto?",
            answer: 32, tolerance: 0, units: "countries", check: "PARIS_COUNTRIES-KYOTO_COUNTRIES",
            misconceptions: [
              { answer: 356, says: "You added the two figures. The question asks how many more, so subtract: 194 − 162 = 32 countries.", check: "PARIS_COUNTRIES+KYOTO_COUNTRIES" },
              { answer: 11, says: "That is the gap between Paris (194) and Copenhagen (183). The question compares Paris with Kyoto: 194 − 162 = 32.", check: "PARIS_COUNTRIES-COPENHAGEN_COUNTRIES" },
              { answer: 42, says: "A slip in the subtraction. 194 − 162: take 162 up to 194 in two jumps, 162 to 192 is 30, then 2 more, so 32.", check: "32+10" }
            ]
          },
          contexts: [
            { label: "Two conferences", q: "At the 1997 Kyoto conference 162 countries signed the agreement. At the 2015 Paris conference 194 did. How many more countries signed in Paris than at Kyoto?", check: "PARIS_COUNTRIES-KYOTO_COUNTRIES" },
            { label: "Revision statistic", q: "A revision guide says the climate agreements have grown: 162 countries at Kyoto, 194 in Paris. How many more countries is that?", check: "PARIS_COUNTRIES-KYOTO_COUNTRIES" },
            { label: "Classroom chart", q: "Your class draws a bar chart of countries signing each agreement: Kyoto 162, Paris 194. By how many countries is the Paris bar taller than the Kyoto bar?", check: "PARIS_COUNTRIES-KYOTO_COUNTRIES" }
          ],
          levels: {
            support: {
              steps: [
                "Write the two figures down: Paris 194, Kyoto 162.",
                "How many more means the difference, so subtract the smaller from the larger.",
                "194 − 162: count up from 162 to 194. 162 to 192 is 30, then 2 more.",
                "State the answer with its unit: 32 countries."
              ],
              example: {
                q: "The Copenhagen agreement was signed by 183 countries and the Kyoto Protocol by 162. How many more signed at Copenhagen?",
                steps: ["The difference is 183 − 162.", "162 to 182 is 20, then 1 more."],
                answer: "21 countries",
                checks: [{ expr: "COPENHAGEN_COUNTRIES-KYOTO_COUNTRIES", value: 21, tol: 0 }]
              }
            },
            core: { hint: "How many more is a subtraction. Which figure is the larger one?" },
            stretch: { extend: "Suggest two reasons why more countries were willing to sign in 2015 than in 1997." }
          },
          explain: "Say, in one sentence, why a bigger number of countries makes an agreement more effective.",
          why: "194 − 162 = 32. Each agreement has been signed by more countries than the one before, which matters because the atmosphere is a global common and cuts only add up when most countries make them."
        },
        {
          title: "Can agreements slow climate change?",
          task: {
            kind: "written",
            q: "Using named examples, assess how far international agreements can reduce the causes of climate change. (9 marks)",
            marks: 9,
            criteria: [
              "Names at least two agreements with their dates and a figure (for example Kyoto 1997, 162 countries, 5.2%; Paris 2015, 194 countries, below 2.0°C)",
              "Explains why agreements are needed: the atmosphere is a global common, so countries must act together",
              "Gives at least two ways agreements help (shared targets, climate finance, carbon trading, growing membership)",
              "Gives at least two limits (small or missed targets, countries not taking part, slow negotiation, promises not kept)",
              "Reaches a clear, balanced judgement that answers how far",
              "Is well structured, with accurate vocabulary and a conclusion"
            ],
            model: "International agreements are needed because the atmosphere is a global common: carbon released anywhere warms everywhere, so no country gains by cutting emissions alone. The Kyoto Protocol of 1997 was the first to set binding targets, with 162 countries agreeing to cut emissions to 5.2% below 1990 levels by 2012. Copenhagen in 2009 brought 183 countries together behind a 2°C limit and agreed to explore carbon trading, and the Paris agreement of 2015 went further, with 194 countries agreeing to keep warming below 2.0°C and richer nations promising climate finance to help poorer ones switch to renewable energy. These agreements help because they give every country the same target and bring in money and technology for those who cannot afford to act. Their limits are real, though. Kyoto's target was small and not every major emitter took part; negotiations take years while emissions continue; and a target is only a promise unless a country actually builds the wind farms and plants the trees. My judgement is that agreements are necessary but not sufficient: they make action possible by getting countries to move together, but the causes of climate change are only reduced when the promises turn into renewable energy, carbon capture and afforestation on the ground."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1: why agreements are needed. Use the phrase global common and explain it in one sentence.",
                "Paragraph 2: two or three named agreements with date and one figure each, and what each one promised.",
                "Paragraph 3: the limits. Small targets, countries missing, slow talks, promises not kept.",
                "Paragraph 4: your judgement. Answer the question how far with a phrase such as necessary but not sufficient, and say why."
              ],
              example: {
                q: "In three sentences, assess how far a school recycling agreement between all its classes can reduce the school's waste.",
                steps: ["Say why an agreement is needed: one class alone makes little difference.", "Give a limit: a promise is not the same as action.", "Judge."],
                answer: "An agreement is needed because one class recycling alone makes little difference to the school's total waste, so every class has to join in. But signing up is not the same as doing it, and some classes may not keep to the promise. So the agreement is the necessary first step, but the waste only falls if every class actually recycles."
              }
            },
            core: { hint: "Need, agreements, limits, judgement: four paragraphs. Put a date and a figure in every paragraph." },
            stretch: { extend: "Add a paragraph on fairness: who caused most of the problem, who is being asked to act, and how the Paris agreement tries to balance the two." }
          },
          explain: "Say, in one sentence, why an agreement with no follow-up action cannot reduce the causes of climate change.",
          why: "A top answer explains the need (global common), names agreements with figures, weighs help against limits and reaches a judgement that actually answers how far. The strongest judgement links agreements to the real actions in chapter 5."
        }
      ]
    },

    /* ───────────── 5 · mitigation in the UK ───────────── */
    {
      key: "mitigation-uk", n: 5, title: "Mitigation in action: energy, trees and carbon capture",
      lead: "How the UK's energy mix has changed, what Thanet offshore wind farm does, why planting trees cuts carbon, and how carbon capture would bury the carbon dioxide from power stations under the sea.",
      covers: [4],
      pretext: {
        words: [
          { word: "renewable energy", means: "energy from sources that do not run out and release no carbon dioxide", sentence: "Wind, solar and tidal power are renewable energy." },
          { word: "energy mix", means: "the share of each energy source a country uses", sentence: "The UK's energy mix has far less coal than it had in 1980." },
          { word: "offshore wind farm", means: "a group of wind turbines standing in the sea", sentence: "Thanet offshore wind farm is off the coast of Kent." },
          { word: "carbon sink", means: "something that takes carbon dioxide out of the air and stores it", sentence: "A forest is a carbon sink." },
          { word: "afforestation", means: "planting new forests where there were none", sentence: "Afforestation is one way the UK is mitigating climate change." },
          { word: "carbon capture", means: "catching carbon dioxide from a power station and storing it underground", sentence: "Carbon capture would store the gas in old oil fields under the North Sea." }
        ],
        passage: [
          "Mitigation means cutting the causes of climate change.",
          "The biggest cause is burning fossil fuels for energy.",
          "So the first step is to make electricity another way.",
          "Wind, solar, tidal, hydro-electric and geothermal power release no carbon dioxide.",
          "In 1980, fossil fuels made 91 per cent of the UK's energy.",
          "By 2015 that had fallen to 50 per cent.",
          "Thanet offshore wind farm, off Margate in Kent, has 100 turbines.",
          "It makes enough electricity for about 220 000 homes a year.",
          "Trees are carbon sinks: they take in carbon dioxide as they grow and store the carbon.",
          "Forest covered 5 per cent of the UK in 1920 and 13 per cent in 2020.",
          "Carbon capture catches carbon dioxide from a power station before it reaches the air.",
          "The gas is turned into a liquid and stored deep under the sea in old oil fields."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "طاقة من مصادر لا تنفد ولا تُطلق ثاني أكسيد الكربون (renewable energy)",
            "نصيب كلّ مصدر طاقة يستخدمه البلد (energy mix)",
            "مجموعة من عَنَفات الريح قائمة في البحر (offshore wind farm)",
            "شيء يأخذ ثاني أكسيد الكربون من الهواء ويخزّنه (carbon sink)",
            "غرس غابات جديدة في مواضع لم تكن فيها غابات (afforestation)",
            "التقاط ثاني أكسيد الكربون من محطّة الكهرباء وتخزينه تحت الأرض (carbon capture)"
          ],
          "passage": [
            "التخفيف يعني خفض أسباب تغيّر المناخ.",
            "وأكبر سبب هو حرق الوقود الأحفوري للطاقة.",
            "فالخطوة الأولى أن نولّد الكهرباء بطريقة أخرى.",
            "وطاقة الريح والشمس والمدّ والكهرباء المائية والحرارة الأرضية لا تُطلق ثاني أكسيد الكربون.",
            "وفي 1980 كان الوقود الأحفوري يصنع 91 في المئة من طاقة المملكة المتّحدة.",
            "وبحلول 2015 هبطت النسبة إلى 50 في المئة.",
            "ومزرعة ريح ثانيت (Thanet) البحرية، قبالة مارغيت في كنت، فيها 100 عَنَفة.",
            "وهي تولّد كهرباءً تكفي نحو 220 000 بيت في السنة.",
            "والأشجار مصارف للكربون: فهي تأخذ ثاني أكسيد الكربون وهي تنمو وتخزّن الكربون.",
            "وكانت الغابة تغطّي 5 في المئة من المملكة المتّحدة في 1920 و13 في المئة في 2020.",
            "والتقاط الكربون يلتقط ثاني أكسيد الكربون من محطّة الكهرباء قبل أن يصل إلى الهواء.",
            "ويُحوّل الغاز سائلًا ويُخزّن في عمق البحر في حقول نفط قديمة."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "energia ze źródeł, które się nie wyczerpują i nie wydzielają dwutlenku węgla (renewable energy)",
            "udział każdego źródła energii, z którego korzysta kraj (energy mix)",
            "grupa turbin wiatrowych stojących w morzu (offshore wind farm)",
            "coś, co zabiera dwutlenek węgla z powietrza i go magazynuje (carbon sink)",
            "sadzenie nowych lasów tam, gdzie ich nie było (afforestation)",
            "wychwytywanie dwutlenku węgla z elektrowni i magazynowanie go pod ziemią (carbon capture)"
          ],
          "passage": [
            "Łagodzenie znaczy ograniczanie przyczyn zmiany klimatu.",
            "Największą przyczyną jest spalanie paliw kopalnych na energię.",
            "Dlatego pierwszym krokiem jest wytwarzanie prądu w inny sposób.",
            "Energia wiatru, słońca, pływów, wody i ciepła Ziemi nie wydziela dwutlenku węgla.",
            "W 1980 roku paliwa kopalne dawały 91 procent energii Zjednoczonego Królestwa.",
            "Do roku 2015 spadło to do 50 procent.",
            "Morska farma wiatrowa Thanet, u brzegów Margate w Kent, ma 100 turbin.",
            "Wytwarza dość prądu dla około 220 000 domów na rok.",
            "Drzewa są pochłaniaczami węgla (carbon sinks): rosnąc, wchłaniają dwutlenek węgla i magazynują węgiel.",
            "Las pokrywał 5 procent Zjednoczonego Królestwa w 1920 roku i 13 procent w 2020 roku.",
            "Wychwytywanie węgla łapie dwutlenek węgla z elektrowni, zanim dotrze on do powietrza.",
            "Gaz zamienia się w ciecz i magazynuje głęboko pod morzem, w starych złożach ropy."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "energia de fontes que não se esgotam e não libertam/liberam dióxido de carbono (renewable energy, energia renovável)",
            "a parte de cada fonte de energia que um país usa (energy mix)",
            "um conjunto de turbinas eólicas instaladas no mar (offshore wind farm, parque eólico no mar)",
            "algo que retira dióxido de carbono do ar e o guarda (carbon sink, sumidouro de carbono)",
            "plantar florestas novas onde não havia nenhuma (afforestation, florestação/reflorestamento)",
            "apanhar o dióxido de carbono de uma central elétrica e guardá-lo no subsolo (carbon capture, captura de carbono)"
          ],
          "passage": [
            "Mitigação quer dizer cortar as causas das mudanças climáticas.",
            "A maior causa é queimar combustíveis fósseis para dar energia.",
            "Por isso o primeiro passo é fazer eletricidade de outra maneira.",
            "A energia do vento, solar, das marés, hidroelétrica e geotérmica não liberta/libera dióxido de carbono.",
            "Em 1980, os combustíveis fósseis faziam 91 por cento da energia do Reino Unido.",
            "Em 2015 isso já tinha descido para 50 por cento.",
            "O parque eólico no mar de Thanet, ao largo de Margate, em Kent, tem 100 turbinas.",
            "Faz eletricidade suficiente para cerca de 220 000 casas por ano.",
            "As árvores são sumidouros de carbono: absorvem dióxido de carbono enquanto crescem e guardam o carbono.",
            "A floresta cobria 5 por cento do Reino Unido em 1920 e 13 por cento em 2020.",
            "A captura de carbono apanha o dióxido de carbono de uma central elétrica antes de ele chegar ao ar.",
            "O gás é transformado em líquido e guardado bem fundo debaixo do mar, em antigos campos de petróleo."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "tamar ka timid ilo aan dhammaan oo aan kaarboon dioksaydh sii dayn",
            "saamiga il tamar kasta oo dal isticmaalo",
            "koox turbines dabeyl ah oo badda dhexdeeda taagan",
            "wax kaarboon dioksaydh hawada ka qaada oo kaydiya",
            "beeridda keymo cusub meelo aan hore keymo lahayn",
            "qabashada kaarboon dioksaydh warshad koronto oo dhulka hoostiisa lagu kaydiyo"
          ],
          "passage": [
            "Mitigation macnaheedu waa gooynta sababaha isbeddelka cimilada.",
            "Sababta ugu weyn waa gubidda shidaalka fosil ee tamarta.",
            "Markaa tallaabada koowaad waa in korontada si kale loo sameeyo.",
            "Tamarta dabeysha, qorraxda, mawjadaha, biyaha iyo geothermal kaarboon dioksaydh ma sii dayso.",
            "1980-kii, shidaalka fosil wuxuu sameeyay 91 boqolkiiba tamarta Boqortooyada Midowday.",
            "2015-kii taasi waxay hoos u dhacday ilaa 50 boqolkiiba.",
            "Beerta dabeysha ee Thanet, oo Margate ee Kent ka baxsan, waxay leedahay 100 turbine.",
            "Waxay samaysaa koronto ku filan qiyaastii 220 000 oo guri sanadkii.",
            "Geeduhu waa carbon sinks: kaarboon dioksaydh ayay nuugaan markay koraan oo kaarboonka way kaydiyaan.",
            "Keyntu waxay qarisay 5 boqolkiiba Boqortooyada Midowday 1920-kii iyo 13 boqolkiiba 2020-kii.",
            "Carbon capture waxay kaarboon dioksaydh ka qabataa warshad koronto intaanu hawada gaarin.",
            "Gaaska waxaa dareere laga dhigaa oo waxaa lagu kaydiyaa badda hoosta fog ee beeraha saliidda duugoobay."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "енергія з джерел, які не закінчуються і не випускають вуглекислого газу (renewable energy)",
            "частка кожного джерела енергії, яку використовує країна (energy mix)",
            "група вітрових турбін, що стоять у морі (offshore wind farm)",
            "те, що забирає вуглекислий газ із повітря і зберігає його (carbon sink)",
            "висаджування нових лісів там, де їх не було (afforestation)",
            "уловлювання вуглекислого газу з електростанції і його зберігання під землею (carbon capture)"
          ],
          "passage": [
            "Мітигація означає скорочення причин зміни клімату.",
            "Найбільша причина — спалювання викопного палива для енергії.",
            "Тому перший крок — виробляти електроенергію інакше.",
            "Вітрова, сонячна, припливна, гідроелектрична і геотермальна енергія не випускають вуглекислого газу.",
            "У 1980 році викопне паливо давало 91 відсоток енергії Об’єднаного Королівства.",
            "До 2015 року це впало до 50 відсотків.",
            "Морська вітрова ферма Thanet біля Маргейта в Кенті має 100 турбін.",
            "Вона виробляє достатньо електроенергії приблизно для 220 000 домівок на рік.",
            "Дерева — це поглиначі вуглецю (carbon sinks): вони вбирають вуглекислий газ, коли ростуть, і зберігають вуглець.",
            "Ліс покривав 5 відсотків Об’єднаного Королівства у 1920 році і 13 відсотків у 2020 році.",
            "Уловлювання вуглецю (carbon capture) ловить вуглекислий газ з електростанції, перш ніж він потрапить у повітря.",
            "Газ перетворюють на рідину і зберігають глибоко під морем у старих нафтових родовищах."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایسے ذریعوں سے توانائی جو ختم نہ ہوں اور کاربن ڈائی آکسائیڈ نہ چھوڑیں (renewable energy)",
            "کوئی ملک توانائی کے ہر ذریعے کا کتنا حصہ استعمال کرتا ہے (energy mix)",
            "سمندر میں کھڑے wind turbines کا ایک گروہ (offshore wind farm)",
            "وہ چیز جو ہوا سے کاربن ڈائی آکسائیڈ لے کر اپنے اندر رکھ لے (carbon sink)",
            "ایسی جگہوں پر نئے جنگل لگانا جہاں پہلے جنگل نہ تھے (afforestation)",
            "بجلی گھر سے کاربن ڈائی آکسائیڈ پکڑ کر زمین کے نیچے جمع کرنا (carbon capture)"
          ],
          "passage": [
            "mitigation کا مطلب climate change کے اسباب کم کرنا ہے۔",
            "سب سے بڑا سبب توانائی کے لیے fossil fuels جلانا ہے۔",
            "اس لیے پہلا قدم یہ ہے کہ بجلی کسی اور طریقے سے بنائی جائے۔",
            "ہوا، شمسی، جوار بھاٹا، hydro-electric اور geothermal بجلی کاربن ڈائی آکسائیڈ نہیں چھوڑتیں۔",
            "1980 میں برطانیہ کی توانائی کا 91 فیصد fossil fuels سے بنتا تھا۔",
            "2015 تک یہ 50 فیصد پر آ گیا۔",
            "کینٹ میں Margate کے قریب Thanet کے offshore wind farm میں 100 turbines ہیں۔",
            "یہ سال میں تقریباً 220 000 گھروں کے لیے کافی بجلی بناتا ہے۔",
            "درخت carbon sinks ہیں: وہ بڑھتے ہوئے کاربن ڈائی آکسائیڈ لیتے ہیں اور کاربن اپنے اندر رکھ لیتے ہیں۔",
            "1920 میں برطانیہ کے 5 فیصد حصے پر جنگل تھا اور 2020 میں 13 فیصد پر۔",
            "carbon capture، بجلی گھر سے نکلنے والی کاربن ڈائی آکسائیڈ کو ہوا تک پہنچنے سے پہلے پکڑ لیتی ہے۔",
            "یہ گیس مائع میں بدل کر سمندر کے نیچے پرانے تیل کے ذخیروں میں گہرائی میں رکھ دی جاتی ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Alternative energy and the UK's energy mix",
          paragraphs: [
            "Burning coal, oil and gas releases carbon dioxide. Generating electricity another way does not. Renewable sources such as hydro-electric, solar, wind, tidal and geothermal power produce no carbon dioxide when they run, and nuclear power, although not renewable, is also low-carbon. Every unit of electricity made this way is a unit that was not made by burning fossil fuel, which is why switching the energy supply is the most direct form of mitigation.",
            "The UK's energy mix shows how far this has gone. In 1980 fossil fuels supplied 91% of the UK's energy, nuclear 6%, renewables 3% and imports 0%. By 2015 fossil fuels had fallen to 50%, nuclear had risen to 19%, renewables (wind, solar and hydro-electric) to 23%, and imports to 8%. Fossil fuels are the only source that fell; renewables grew the most, from 3% to 23%. The fall in fossil fuels was 41 percentage points in 35 years, which your deck judged to be a reduction to a large extent, made up for mainly by the rise in renewables.",
            "In class you drew these figures as two pie charts. To turn a percentage into an angle, multiply by 3.6, because 360 degrees divided by 100 is 3.6. So 91% becomes 327.6 degrees, 50% becomes 180 degrees, and 23% becomes 82.8 degrees. Check that each pie adds up to 360."
          ],
          worked: {
            q: "Using the 1980 and 2015 figures, by how many percentage points did the UK's use of fossil fuels fall, and by how many did renewable energy rise?",
            steps: [
              "Fossil fuels: 91% in 1980, 50% in 2015. The fall is 91 − 50 = 41 percentage points.",
              "Renewables: 3% in 1980, 23% in 2015. The rise is 23 − 3 = 20 percentage points.",
              "Nuclear rose 19 − 6 = 13 and imports rose 8 − 0 = 8. The three rises, 20 + 13 + 8 = 41, exactly match the fall, as they must when the mix always totals 100.",
              "To say how far the UK is reducing fossil fuels, give the figure, the time (35 years, 1980 to 2015) and a judgement."
            ],
            answer: "Fossil fuels fell by 41 percentage points (91% to 50%); renewables rose by 20 percentage points (3% to 23%).",
            checks: [
              { expr: "FOSSIL_1980-FOSSIL_2015", value: 41, tol: 0 },
              { expr: "RENEW_2015-RENEW_1980", value: 20, tol: 0 },
              { expr: "(RENEW_2015-RENEW_1980)+(NUCLEAR_2015-NUCLEAR_1980)+(IMPORTS_2015-IMPORTS_1980)", value: 41, tol: 0 },
              { expr: "MIX_END-MIX_START", value: 35, tol: 0 },
              { expr: "FOSSIL_1980*3.6", value: 327.6, tol: 0.01 }
            ]
          },
          tip: "When two percentages are compared, say percentage points, not per cent. A fall from 91% to 50% is a fall of 41 percentage points."
        },
        {
          heading: "Case study: Thanet offshore wind farm",
          paragraphs: [
            "Thanet offshore wind farm stands in the sea about 7.4 miles (12 km) off the coast at Margate, in Kent. It currently has 100 turbines and produces enough renewable energy to power around 220 000 UK homes a year. A further 34 giant turbines were planned, which would raise the supply to enough electricity for 430 000 homes.",
            "How does a wind farm mitigate climate change? Each turbine turns wind into electricity without burning anything, so every home it powers is a home whose electricity did not come from a gas or coal power station. The carbon dioxide that power station would have released is never produced. Putting the turbines offshore gives them stronger, steadier winds than on land and keeps them away from homes.",
            "For a four-mark answer using a named example, give the place and two figures, then the mechanism: no fuel is burned, so no carbon dioxide is released, so the cause of climate change is reduced."
          ],
          worked: {
            q: "If the planned 34 extra turbines are built at Thanet, how many turbines will it have, and how many more homes will it be able to supply?",
            steps: [
              "Turbines: 100 now plus 34 planned is 134 turbines.",
              "Homes: 430 000 after the extension minus 220 000 now is 210 000 more homes.",
              "Notice that 34 new turbines add almost as many homes as the first 100 did, because the new turbines are much bigger."
            ],
            answer: "134 turbines; about 210 000 more homes.",
            checks: [
              { expr: "THANET_TURBINES+THANET_EXTRA_TURBINES", value: 134, tol: 0 },
              { expr: "THANET_HOMES_AFTER-THANET_HOMES_NOW", value: 210000, tol: 0 }
            ]
          },
          tip: "Thanet: 12 km off Margate, Kent; 100 turbines; 220 000 homes. Three facts are enough for a four-mark example."
        },
        {
          heading: "Planting trees",
          paragraphs: [
            "Trees are carbon sinks. During photosynthesis they take in carbon dioxide from the air and store the carbon in their trunks, branches and roots, where it stays for as long as the tree stands. Reforestation means replanting forests that have been cut down; afforestation means planting new forests where there were none. Doing both, protecting old forests and halting deforestation around the world, takes carbon dioxide out of the atmosphere and so mitigates the root cause of climate change.",
            "The UK has far less forest than most of Europe: forest covers 13% of its land area against a European average of 39%. But the area is growing. Forest covered 5% of the UK in 1920, 6% in 1940, 8% in 1960, 9% in 1980, 11% in 2000 and 13% in 2020. Your deck's example was Thames Chase Community Woodland, on the edge of east London, where new woodland was being planted in the early 2000s.",
            "Describing the forest graph is a two-step job: the overall trend (a steady rise), then figures (from 5% to 13%, a rise of 8 percentage points in 100 years, half of it added in the 40 years since 1980). To judge how far planting trees is mitigating climate change, set that 8-point rise against the 39% European average: real progress, but from a low base."
          ],
          tip: "Trees cut carbon only while they stand. Say store as well as absorb, and mention protecting old forests as well as planting new ones."
        },
        {
          heading: "Carbon capture",
          paragraphs: [
            "Carbon capture tackles the problem at the chimney. At a large fossil-fuel power station the fuel is burned as usual, but the carbon dioxide is captured from the exhaust gases instead of going up into the air. The gas is pumped through pipelines to old oil fields, converted into a liquid and injected into the sedimentary rocks deep underground that once held the oil. A layer of impermeable cap rock above stops the carbon dioxide escaping, so it stays locked away.",
            "Your deck's UK example is a project planned for Yorkshire, taking carbon dioxide from the power stations of the Don Valley, near Sheffield. As much as 18% of the UK's carbon emissions might be trapped there and pumped into a worked-out oil field beneath the North Sea. The scheme was costed at £3 billion and would allow one million homes to use low-carbon electricity. The carbon dioxide would first be used to recover hard-to-reach oil before being stored permanently 3 km under the sea bed.",
            "Carbon capture lets a country keep using fossil fuels while cutting what reaches the atmosphere, which is why it is attractive. The arguments against are its cost, the fact that it only works at large single sources such as power stations, and the worry that it lets us carry on burning fuel instead of switching to renewables."
          ],
          tip: "Describe the process as a chain of four: capture at the power station, pipeline, liquid, injection under cap rock. A chain in order is what a describe-the-process question wants."
        }
      ],
      gate: [
        { kind: "numeric", q: "In 1980 fossil fuels supplied 91% of the UK's energy; in 2015 they supplied 50%. By how many percentage points did the fossil fuel share fall?", answer: 41, tolerance: 0, units: "percentage points", check: "FOSSIL_1980-FOSSIL_2015", why: "91 − 50 = 41 percentage points, over 35 years. The fall was made up for mainly by the rise in renewable energy.",
          misconceptions: [
            { answer: 141, says: "You added the two percentages. A fall is a difference, so subtract: 91 − 50 = 41 percentage points.", check: "FOSSIL_1980+FOSSIL_2015" },
            { answer: 59, says: "That is 100 − 41, worked out from the fall instead of from the two shares. The question asks for the fall itself: 91 − 50 = 41 percentage points.", check: "100-41" },
            { answer: 50, says: "50% is the 2015 share itself, not the fall. Subtract it from the 1980 share: 91 − 50 = 41 percentage points.", check: "FOSSIL_2015" }
          ] },
        { kind: "mcq", q: "Thanet offshore wind farm stands in the sea about 12 km from the coast at which town?", options: ["Sheffield", "Margate, in Kent", "Beckton, in east London", "Scaynes Hill, in West Sussex"], answer: 1, why: "Thanet offshore wind farm is about 7.4 miles (12 km) off Margate, on the Kent coast. It has 100 turbines.",
          feedback: [
            "Sheffield is inland in Yorkshire and is the deck's example for carbon capture in the Don Valley. The wind farm is off the Kent coast at Margate.",
            "",
            "Beckton on the Thames Estuary is where the desalination plant stands, which you meet in chapter 6. Thanet wind farm is off Margate in Kent.",
            "Scaynes Hill in West Sussex is where vines are grown, an example of adaptation in farming. The wind farm is off Margate in Kent."
          ] },
        { kind: "gap", q: "Trees are carbon ___: they take in carbon dioxide as they grow and store the carbon in their trunks, branches and roots.", answer: "sinks", options: ["sinks", "sources", "markets"], why: "A carbon sink takes carbon out of the air and stores it. A carbon source, such as a power station, releases it.",
          feedback: {
            "sources": "A carbon source releases carbon dioxide, which is what a power station or a car does. Trees do the opposite: they take carbon in and store it, so they are carbon sinks.",
            "markets": "Carbon markets are where permission to emit carbon is bought and sold, an idea from the Copenhagen agreement. Trees are carbon sinks because they absorb and store carbon."
          } }
      ],
      modules: [
        {
          title: "Percentages to pie chart",
          task: {
            kind: "numeric",
            q: "Renewable energy makes up 23% of the UK's energy mix. To draw this on a pie chart, how many degrees should the renewable sector be? (Multiply the percentage by 3.6.)",
            answer: 82.8, tolerance: 0.01, units: "degrees", check: "RENEW_2015*3.6",
            misconceptions: [
              { answer: 23, says: "23 is the percentage, not the angle. A pie chart is 360 degrees for 100%, so each 1% is 3.6 degrees: 23 × 3.6 = 82.8 degrees.", check: "RENEW_2015" },
              { answer: 6.4, says: "You divided by 3.6 instead of multiplying. One per cent is 3.6 degrees, so 23% is 23 × 3.6 = 82.8 degrees.", check: "round(RENEW_2015/3.6,1)" },
              { answer: 828, says: "A decimal point has slipped. 23 × 3.6 = 82.8, not 828; a sector cannot be bigger than the whole 360-degree circle.", check: "RENEW_2015*36" }
            ]
          },
          contexts: [
            { label: "Energy pie chart", q: "You are drawing the 2015 UK energy pie chart. Renewable energy is 23%. How many degrees is its sector, if 1% is 3.6 degrees?", check: "RENEW_2015*3.6" },
            { label: "Class survey", q: "In a class survey 23% of pupils said wind power was the best energy source. To show this on a pie chart, how many degrees is the sector? (1% = 3.6 degrees.)", check: "RENEW_2015*3.6" },
            { label: "School energy", q: "A school finds that 23% of its electricity comes from solar panels on its roof. How many degrees would this be on a pie chart? (Multiply the percentage by 3.6.)", check: "RENEW_2015*3.6" }
          ],
          levels: {
            support: {
              steps: [
                "A full circle is 360 degrees and stands for 100%.",
                "So 1% is 360 ÷ 100 = 3.6 degrees.",
                "Multiply the percentage by 3.6: 23 × 3.6.",
                "Work it as 20 × 3.6 = 72 and 3 × 3.6 = 10.8, then add: 82.8 degrees."
              ],
              example: {
                q: "In 2015 nuclear power was 19% of the UK's energy mix. How many degrees is its pie chart sector?",
                steps: ["1% is 3.6 degrees.", "19 × 3.6: 10 × 3.6 = 36, 9 × 3.6 = 32.4, total 68.4."],
                answer: "68.4 degrees",
                checks: [{ expr: "NUCLEAR_2015*3.6", value: 68.4, tol: 0.01 }]
              }
            },
            core: { hint: "360 degrees is the whole pie, so what is one per cent worth?" },
            stretch: { extend: "Work out the angles for all four 2015 sectors and show that they add up to 360 degrees." }
          },
          explain: "Say, in one sentence, why you multiply a percentage by 3.6 to get a pie chart angle.",
          why: "A pie chart's 360 degrees stand for 100%, so 1% is 3.6 degrees and 23% is 23 × 3.6 = 82.8 degrees."
        },
        {
          title: "How carbon capture works",
          task: {
            kind: "order",
            q: "Put the stages of carbon capture and storage in the correct order.",
            items: [
              "Fossil fuel is burnt at a large power station",
              "Carbon dioxide is captured from the exhaust gases",
              "The carbon dioxide is pumped through pipelines to an old oil field",
              "It is converted into a liquid and injected into sedimentary rocks deep underground",
              "A layer of impermeable cap rock stops the carbon dioxide escaping"
            ]
          },
          contexts: [
            { label: "Don Valley", q: "The planned Don Valley project would take carbon dioxide from power stations near Sheffield to an old North Sea oil field. Put the stages of the process in the correct order." },
            { label: "Diagram labels", q: "The labels have fallen off a carbon capture diagram. Put them back in the order the carbon dioxide travels, from power station to storage." },
            { label: "Four-mark describe", q: "You are describing the process of carbon capture for a four-mark question. Put the stages in the order you would write them." }
          ],
          levels: {
            support: {
              steps: [
                "Start where the carbon dioxide is made: the power station burning fuel.",
                "Before anything can be moved it has to be caught. Capture comes next.",
                "Then it travels: pipelines to the oil field.",
                "Then it is stored: liquid, injected, and sealed in by the cap rock above."
              ],
              example: {
                q: "Put the stages of the Beckton desalination process in order: salt is removed through membranes; water is pumped from the river; water is filtered through sand; calcium and magnesium are added before disinfecting.",
                steps: ["Water has to arrive first.", "Clean out solids before removing salt.", "Finish by adding minerals and disinfecting."],
                answer: "Water is pumped from the river; filtered through sand; salt removed through membranes; calcium and magnesium added before disinfecting."
              }
            },
            core: { hint: "Make it, catch it, move it, bury it, seal it." },
            stretch: { extend: "Explain why carbon capture is described as mitigation even though the power station still burns fossil fuel." }
          },
          explain: "Say, in one sentence, why the cap rock has to be impermeable.",
          why: "The fuel is burned, the carbon dioxide is captured from the exhaust, pumped by pipeline to an old oil field, turned into a liquid and injected into the rock, and sealed in by impermeable cap rock above."
        },
        {
          title: "Why planting trees cuts carbon",
          task: {
            kind: "written",
            q: "Explain how planting more trees in the UK can help to reduce the causes of climate change. (6 marks)",
            marks: 6,
            criteria: [
              "Explains that trees are carbon sinks: photosynthesis takes in carbon dioxide and the carbon is stored in trunks, branches and roots",
              "Links the removal of carbon dioxide to reducing the main cause of climate change",
              "Uses figures from the UK: forest cover 5% in 1920 to 13% in 2020, against a European average of 39%",
              "Names an example (Thames Chase Community Woodland) or distinguishes afforestation from reforestation",
              "Shows a limit or judgement, such as the low starting point or the need to protect old forests too"
            ],
            model: "Trees are carbon sinks. As they grow they take in carbon dioxide through photosynthesis and store the carbon in their trunks, branches and roots, where it stays for as long as the tree stands. Because carbon dioxide from burning fossil fuels is the main cause of climate change, every tree planted removes some of that gas from the atmosphere and so attacks the cause rather than the effects. The UK is doing this through afforestation, planting new woods such as Thames Chase Community Woodland on the edge of east London, and forest cover has risen from 5% of the land in 1920 to 13% in 2020. The limit is the starting point: 13% is still far below the European average of 39%, and trees only help while they stand, so protecting old forests and stopping deforestation matter as much as planting new ones."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: trees are carbon sinks. Say what photosynthesis does with carbon dioxide and where the carbon is stored.",
                "Sentence 2: link that to the cause of climate change: less carbon dioxide in the air means less heat trapped.",
                "Sentence 3: give the UK figures: 5% in 1920, 13% in 2020, and the 39% European average.",
                "Sentence 4: name Thames Chase Community Woodland and finish with a limit or judgement."
              ],
              example: {
                q: "In two sentences, explain how switching a power station from coal to wind power reduces the causes of climate change.",
                steps: ["Say what coal releases and why that matters.", "Say what wind does not release."],
                answer: "Burning coal releases carbon dioxide, which traps heat and is the main cause of climate change. A wind turbine makes electricity without burning anything, so the carbon dioxide the coal would have released is never produced."
              }
            },
            core: { hint: "Sink, store, cause, figures, example, limit. Six ideas for six marks." },
            stretch: { extend: "Add a sentence weighing planting trees against carbon capture: which removes more carbon for the money, and which is more certain to last?" }
          },
          explain: "Say, in one sentence, why a forest that is later cut down has not mitigated climate change.",
          why: "A full answer explains the carbon sink mechanism, links it to the main cause, uses the UK figures and example, and shows a limit. Trees mitigate only while they stand, which is why protection matters as much as planting."
        }
      ]
    },

    /* ───────────── 6 · adaptation ───────────── */
    {
      key: "adaptation", n: 6, title: "Adapting to climate change: farming, water and the rising sea",
      lead: "The three ways countries adapt to a climate that is already changing, with the UK's vineyards, the Beckton desalination plant, the Thames Barrier and the Maldives as your examples, and the nine-mark question that puts mitigation and adaptation side by side.",
      covers: [6, 7],
      pretext: {
        words: [
          { word: "adaptation", means: "changing how we live to cope with climate change", sentence: "Growing new crops is a form of adaptation." },
          { word: "agricultural system", means: "the type of farming in a place and the crops it grows", sentence: "A warmer climate changes the agricultural system of southern England." },
          { word: "desalination", means: "taking the salt out of sea water to make fresh water", sentence: "The desalination plant at Beckton supplies London in a drought." },
          { word: "reservoir", means: "a large artificial lake that stores water", sentence: "Kielder Water is the UK's largest reservoir." },
          { word: "water transfer", means: "moving water from a region with plenty to a region with a shortage", sentence: "A water transfer scheme carries water through pipes and canals." },
          { word: "barrage", means: "a barrier built right across an estuary to hold back the sea", sentence: "A new barrage could be built across the Thames if seas rise by 4 m." }
        ],
        passage: [
          "Adaptation means responding to climate change, not stopping it.",
          "There are three main ways to adapt.",
          "The first is to change farming.",
          "Rice grows in hot, wet places, and oats grow in cooler ones.",
          "As the climate warms, farmers change what they grow, and vines now grow in West Sussex.",
          "The second is to manage the water supply as droughts become more common.",
          "Countries use water more carefully, build reservoirs and move water from wet areas to dry ones.",
          "At Beckton, on the Thames Estuary, a plant takes the salt out of river water.",
          "The third is to reduce the risk from rising sea levels.",
          "The Maldives has built sea walls, including a 3 m wall around its capital.",
          "The Thames Barrier protects London, and its defences are being raised.",
          "Adaptation protects people now, while mitigation works on the causes."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "تغيير طريقة حياتنا لنتعامل مع تغيّر المناخ (adaptation)",
            "نوع الزراعة في مكان ما والمحاصيل التي تُزرع فيه (agricultural system)",
            "إزالة الملح من ماء البحر لصنع ماء عذب (desalination)",
            "بحيرة صناعية كبيرة تخزّن الماء (reservoir)",
            "نقل الماء من منطقة عندها كثير إلى منطقة عندها نقص (water transfer)",
            "سدّ يُبنى عبر مصبّ النهر كلّه ليحجز البحر (barrage)"
          ],
          "passage": [
            "التكيّف يعني الاستجابة لتغيّر المناخ، لا إيقافه.",
            "وهناك ثلاث طرق رئيسة للتكيّف.",
            "فالأولى تغيير الزراعة.",
            "فالأرزّ ينمو في الأماكن الحارّة الرطبة، والشوفان ينمو في الأبرد منها.",
            "وكلّما دَفِئ المناخ غيّر المزارعون ما يزرعون، فالعنب ينمو اليوم في ويست سسكس (West Sussex).",
            "والثانية إدارة مَورد الماء كلّما صار الجفاف أكثر شيوعًا.",
            "فالبلدان تستخدم الماء بعناية أكثر وتبني خزّانات وتنقل الماء من المناطق الرطبة إلى الجافّة.",
            "وفي بيكتون (Beckton) على مصبّ التيمز يُزيل مصنع الملح من ماء النهر.",
            "والثالثة تقليل خطر ارتفاع مستوى سطح البحر.",
            "وجزر المالديف بنت جُدُرًا بحرية، منها جدار بارتفاع 3 أمتار حول عاصمتها.",
            "وحاجز التيمز (Thames Barrier) يحمي لندن، ودفاعاته تُرفَع اليوم.",
            "والتكيّف يحمي الناس اليوم، أمّا التخفيف فيعمل على الأسباب."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "zmienianie tego, jak żyjemy, żeby poradzić sobie ze zmianą klimatu (adaptation)",
            "rodzaj rolnictwa w danym miejscu i rośliny, które się tam uprawia (agricultural system)",
            "usuwanie soli z wody morskiej, żeby zrobić wodę słodką (desalination)",
            "duże sztuczne jezioro, które magazynuje wodę (reservoir)",
            "przesyłanie wody z regionu, gdzie jest jej dużo, do regionu, gdzie jej brakuje (water transfer)",
            "zapora zbudowana w poprzek całego estuarium, żeby powstrzymać morze (barrage)"
          ],
          "passage": [
            "Adaptacja znaczy odpowiadanie na zmianę klimatu, a nie zatrzymywanie jej.",
            "Są trzy główne sposoby przystosowania się.",
            "Pierwszy to zmiana rolnictwa.",
            "Ryż rośnie w miejscach gorących i wilgotnych, a owies w chłodniejszych.",
            "W miarę ocieplania się klimatu rolnicy zmieniają to, co uprawiają, i winorośl rośnie teraz w West Sussex.",
            "Drugi to zarządzanie dostawami wody, bo susze zdarzają się coraz częściej.",
            "Kraje gospodarują wodą uważniej, budują zbiorniki i przesyłają wodę z obszarów wilgotnych do suchych.",
            "W Beckton, nad estuarium Tamizy, zakład usuwa sól z wody rzecznej.",
            "Trzeci to zmniejszanie ryzyka od podnoszącego się poziomu morza.",
            "Malediwy zbudowały mury nadmorskie, w tym mur wysoki na 3 m wokół swojej stolicy.",
            "Thames Barrier chroni Londyn, a jego zabezpieczenia są podnoszone.",
            "Adaptacja chroni ludzi teraz, a łagodzenie pracuje nad przyczynami."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "mudar a maneira como vivemos para lidar com as mudanças climáticas (adaptation, adaptação)",
            "o tipo de agricultura de um lugar e as culturas que lá se cultivam (agricultural system, sistema agrícola)",
            "retirar o sal da água do mar para fazer água doce (desalination, dessalinização)",
            "um grande lago artificial que guarda água (reservoir, reservatório/represa)",
            "levar água de uma região com muita para uma região com falta (water transfer, transferência de água)",
            "uma barreira construída de lado a lado de um estuário para travar o mar (barrage)"
          ],
          "passage": [
            "Adaptação quer dizer responder às mudanças climáticas, não travá-las.",
            "Há três maneiras principais de nos adaptarmos.",
            "A primeira é mudar a agricultura.",
            "O arroz cresce em lugares quentes e húmidos/úmidos, e a aveia cresce em lugares mais frescos.",
            "À medida que o clima aquece, os agricultores mudam o que cultivam, e já há vinhas a crescer em West Sussex.",
            "A segunda é gerir o fornecimento de água, à medida que as secas ficam mais frequentes.",
            "Os países usam a água com mais cuidado, constroem reservatórios/represas e levam água das áreas chuvosas para as secas.",
            "Em Beckton, no estuário do Tamisa, uma estação retira o sal da água do rio.",
            "A terceira é reduzir o risco da subida do nível do mar.",
            "As Maldivas construíram muros do mar, incluindo um muro de 3 m em volta da sua capital.",
            "A Barreira do Tamisa (Thames Barrier) protege Londres, e as suas defesas estão a ser levantadas.",
            "A adaptação protege as pessoas agora, enquanto a mitigação trabalha nas causas."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "beddelidda sida aan u noolnahay si aan isbeddelka cimilada ula qabsanno",
            "nooca beeridda meel iyo dalagga ay beerto",
            "ka saaridda cusbada biyaha badda si biyo macaan loo sameeyo",
            "haro weyn oo la dhisay oo biyo kaydisa",
            "u raridda biyaha gobol ay ka badan yihiin ilaa gobol ay ka yar yihiin",
            "xanniban oo af webi oo dhan laga dhisay si baddu dib loo hayo"
          ],
          "passage": [
            "Adaptation macnaheedu waa ka jawaabidda isbeddelka cimilada, ma aha joojintiisa.",
            "Saddex siyaabo waaweyn ayaa jira oo lagu la qabsado.",
            "Tan koowaad waa in beeridda la beddelo.",
            "Bariisku wuxuu ku baxaa meelo kulul oo qoyan, oats-kuna meelo ka qabow.",
            "Marka cimiladu kululaato, beeraleydu waxay beddelaan waxa ay beertaan, canabkuna hadda West Sussex ayuu ka baxaa.",
            "Tan labaad waa in sahayda biyaha la maareeyo marka abaartu sii caan noqonayso.",
            "Dalalku biyaha si taxaddar leh ayay u isticmaalaan, berkedo way dhisaan oo biyo waxay ka raraan meelaha qoyan ilaa kuwa qalalan.",
            "Beckton, oo ku taal Thames Estuary, warshad ayaa cusbada ka saarta biyaha webiga.",
            "Tan saddexaad waa in khatarta kor u kaca heerka badda la yareeyo.",
            "Maldives waxay dhistay darbiyo badda, oo ay ku jiro darbi 3 m ah oo caasimaddeeda ku wareegsan.",
            "Thames Barrier waxay ilaalisaa London, difaacyadeedana kor loo qaadayaa.",
            "Adaptation waxay dadka hadda ilaalisaa, halka mitigation uu sababaha ka shaqeeyo."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "зміна того, як ми живемо, щоб давати раду зі зміною клімату (adaptation)",
            "вид господарства в якомусь місці і культури, які воно вирощує (agricultural system)",
            "видалення солі з морської води, щоб отримати свіжу воду (desalination)",
            "велике штучне озеро, яке зберігає воду (reservoir)",
            "перекидання води з регіону, де її багато, до регіону, де її брак (water transfer)",
            "загорожа, побудована через усе устя річки, щоб стримувати море (barrage)"
          ],
          "passage": [
            "Адаптація означає відповідь на зміну клімату, а не її припинення.",
            "Є три головні способи адаптуватися.",
            "Перший — змінити господарство.",
            "Рис росте в гарячих, вологих місцях, а овес росте в прохолодніших.",
            "Що тепліше стає клімат, то більше фермери змінюють те, що вирощують, і виноград тепер росте в Західному Сассексі.",
            "Другий — керувати постачанням води, бо засухи стають частішими.",
            "Країни використовують воду обережніше, будують водосховища і перекидають воду з вологих районів у сухі.",
            "У Бектоні (Beckton) на Темзькому усті завод видаляє сіль із річкової води.",
            "Третій — зменшити ризик від підняття рівня моря.",
            "Мальдіви побудували захисні стіни від моря, зокрема стіну 3 m навколо своєї столиці.",
            "Бар’єр на Темзі (Thames Barrier) захищає Лондон, і його укріплення нарощують.",
            "Адаптація захищає людей зараз, а мітигація працює над причинами."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "climate change سے نمٹنے کے لیے اپنے رہنے سہنے کے طریقے بدلنا (adaptation)",
            "کسی جگہ کی کھیتی کی قسم اور وہاں اگنے والی فصلیں (agricultural system)",
            "سمندری پانی سے نمک نکال کر میٹھا پانی بنانا (desalination)",
            "پانی جمع کرنے کے لیے بنائی گئی ایک بڑی مصنوعی جھیل (reservoir)",
            "پانی کو اُس علاقے سے، جہاں بہت ہے، اُس علاقے میں لے جانا جہاں کمی ہے (water transfer)",
            "دریا کے دہانے کے آڑے بنا وہ بند جو سمندر کو روکتا ہے (barrage)"
          ],
          "passage": [
            "adaptation کا مطلب climate change کا جواب دینا ہے، اسے روکنا نہیں۔",
            "ڈھلنے کے تین بڑے طریقے ہیں۔",
            "پہلا یہ کہ کھیتی بدلی جائے۔",
            "چاول گرم، نم جگہوں پر اگتا ہے، اور oats ٹھنڈی جگہوں پر۔",
            "جیسے جیسے climate گرم ہوتا ہے، کسان اپنی فصلیں بدل لیتے ہیں، اور اب West Sussex میں انگور کی بیلیں اگتی ہیں۔",
            "دوسرا یہ کہ قحط عام ہوتے جانے کے ساتھ پانی کی رسد کو سنبھالا جائے۔",
            "ملک پانی زیادہ احتیاط سے استعمال کرتے ہیں، reservoirs بناتے ہیں اور گیلے علاقوں سے خشک علاقوں تک پانی لے جاتے ہیں۔",
            "Thames Estuary پر Beckton میں ایک پلانٹ دریا کے پانی سے نمک نکالتا ہے۔",
            "تیسرا یہ کہ سمندر کی بلند ہوتی سطح کا خطرہ کم کیا جائے۔",
            "مالدیپ نے سمندری دیواریں بنائی ہیں، جن میں اس کے دارالحکومت کے گرد 3 m کی دیوار بھی شامل ہے۔",
            "Thames Barrier لندن کی حفاظت کرتا ہے، اور اس کے دفاع کو اونچا کیا جا رہا ہے۔",
            "adaptation لوگوں کو ابھی بچاتی ہے، جبکہ mitigation اسباب پر کام کرتی ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Changing agricultural systems",
          paragraphs: [
            "The type of farming found in a place depends on its rainfall and temperature. Some crops grow well in hot, wet climates, such as rice; others suit cooler climates, such as oats. As rainfall and temperature rise or fall, farmers have to change the crops they grow, or switch to a different land use altogether, such as woodland. Your deck's pictures were a vineyard at Scaynes Hill in West Sussex and a wheat field in Buckinghamshire: grapes are a crop that southern England's warming climate now allows.",
            "The figures show change already under way. Between 2011 and 2015, in thousands of hectares, cereals rose from 3000 to 3100 and woodland from 786 to 961, while oilseeds fell from 742 to 670, potatoes from 142 to 129 and horticultural crops from 175 to 174. So more cereals are being grown and the area of woodland is increasing, while oilseeds and potatoes shrink. In 2016 the UK mean temperature was 9.2°C, which is 0.4°C above the 1981 to 2010 long-term average, and rainfall was 1272 mm, 110% of that average. Climate change could mean a UK that is warmer and wetter than before.",
            "Changing what is grown helps a country adapt because food keeps coming even as the climate shifts, farmers keep their income, and land that no longer suits one crop is put to a use that fits the new conditions. The cost is that change is expensive and uncertain for the farmer, and some traditional crops and landscapes are lost."
          ],
          worked: {
            q: "The UK's mean temperature in 2016 reached 9.2°C, 0.4°C above the 1981 to 2010 average, and its rainfall came to 1272 mm, 110% of that average. What were the long-term average temperature and rainfall?",
            steps: [
              "Temperature: 2016 was 0.4°C above the average, so the average is 9.2 − 0.4 = 8.8°C.",
              "Rainfall: 1272 mm is 110% of the average, so the average is 1272 ÷ 1.10, which is about 1156 mm.",
              "Check the sense: 1156 mm is lower than 1272 mm, as it should be if 2016 was wetter than usual.",
              "Use both figures to say what the data suggests: a year that was both warmer and wetter than the long-term normal."
            ],
            answer: "Average temperature 8.8°C; average rainfall about 1156 mm.",
            checks: [
              { expr: "TEMP_2016-TEMP_ANOMALY", value: 8.8, tol: 0.001 },
              { expr: "RAIN_2016/(RAIN_PCT/100)", value: 1156, tol: 1 }
            ]
          },
          tip: "For agriculture, pair a trend with a figure: more cereals (3000 to 3100 thousand hectares) and more woodland (786 to 961), fewer oilseeds and potatoes."
        },
        {
          heading: "Managing the water supply",
          paragraphs: [
            "As droughts become more frequent, managing the supply of water matters more. Countries are using a mix of measures to make sure people have enough water all year round: using water more efficiently in homes, farming and industry; building desalination plants that take the salt out of sea water; building more reservoirs to store water, such as Kielder Water in Northumberland, the UK's largest reservoir; and building water transfer schemes that move water from areas of surplus to areas of deficit.",
            "The UK example is the Thames Gateway Water Treatment Works at Beckton, on the Thames Estuary, built by Thames Water to give London a reliable supply of fresh water in a drought. Up to 180 million litres of water a day are pumped from the river. Chemicals are added to bind together any suspended material, the water is filtered through sand in steel containers, then pumped through membranes to remove the salt, and finally calcium and magnesium are added before it is disinfected.",
            "Managing water helps a country adapt because it breaks the link between a dry year and a water shortage: stored, transferred or desalinated water is there when the rain is not. Against this, desalination uses a great deal of energy, which can add to carbon emissions unless the energy is renewable, reservoirs flood valleys, and transfer schemes are expensive and can cause conflict between the regions that give and the regions that receive."
          ],
          tip: "Four ways to manage water: use less, desalinate, store, transfer. One UK example for each strand earns the application marks."
        },
        {
          heading: "Reducing the risk from rising sea levels",
          paragraphs: [
            "As the world gets warmer, ice on land melts and the sea rises, by up to 2 m by 2100 on the projection your deck used. Low-lying countries are preparing by building new, better flood defences. The other option is to change the land use along the coast so that, if the sea does come in, only farmland is lost rather than homes and businesses.",
            "The Maldives is the sharpest example. Its roughly 1000 islands are very low-lying, and many places are only 2.5 m above sea level, so a 2 m rise would flood much of the country. Sea walls have been built to hold the water back and protect property. After the islands were flooded by the 2004 tsunami, a 3 m high wall was built around the capital, Malé, paid for by Japan, and land is being reclaimed from the sea.",
            "In the UK, sea levels in the Thames Estuary could rise by up to 2 m by 2100. The Thames Barrier, built after the 1953 floods and completed in 1984, protects the estuary from flooding; its huge steel gates can be raised in 45 minutes. Along the river, defences are being built higher and new basins dug to hold flood water back, keeping London safe from future floods caused by higher seas, higher and more frequent storm surges and higher river flows. If sea levels rise by 4 m, a new barrage would be built across the estuary."
          ],
          tip: "Give the Maldives figures (2.5 m, 2 m, 3 m wall) and the Thames figures (1953, 1984, 45 minutes, 2 m, 4 m). Numbers turn a description into a case study."
        },
        {
          heading: "Mitigation and adaptation side by side: the nine-mark question",
          paragraphs: [
            "The exam question your deck ended with gave you two pictures, a new community woodland in east London and a vineyard in West Sussex, and asked you to use them and your own knowledge to discuss the ways of mitigating and adapting to climate change for nine marks. The trick is to see what each picture is for. The woodland is mitigation: planting trees removes carbon dioxide and attacks the cause. The vineyard is adaptation: a new crop that a warmer climate allows, responding to the change.",
            "The mark scheme rewarded three things. First, correctly identifying one way to mitigate (planting trees) and one way to adapt (changing the crops grown) from the figures, which is the basic level. Second, using both figures and your own knowledge to cover both mitigation and adaptation clearly, the middle level. Third, a detailed and well-organised answer that names examples and backs every one of them with figures, for the top level.",
            "So build the answer in four parts: what mitigation is, with the woodland and two more examples (renewable energy such as Thanet, international agreements, carbon capture); what adaptation is, with the vineyard and two more (managing water at Beckton, the Thames Barrier); a sentence on how the two differ in who benefits, globally against locally; and a judgement about whether a country needs both. Nine marks, four paragraphs, a figure in each."
          ],
          tip: "Globally responsible against locally responsible: mitigation helps everyone a little, adaptation helps the place that does it a lot. That contrast is worth a paragraph."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is an example of adaptation to climate change?", options: ["Building an offshore wind farm", "Signing the Paris agreement", "Growing grapes in West Sussex, which a warmer climate now allows", "Capturing carbon dioxide from a power station"], answer: 2, why: "Changing the crops grown to suit a warmer climate is adaptation: responding to the change. The other three reduce the causes, so they are mitigation.",
          feedback: [
            "A wind farm replaces fossil fuel and so cuts carbon emissions. That reduces the cause of climate change, which is mitigation, not adaptation.",
            "An international agreement to cut emissions tackles the cause of climate change, so it is mitigation. Adaptation responds to the effects, such as changing what farmers grow.",
            "",
            "Carbon capture stops carbon dioxide reaching the atmosphere, so it reduces the cause: mitigation. Adaptation is responding to the change, such as switching crops."
          ] },
        { kind: "numeric", q: "The area of woodland in the UK rose from 786 thousand hectares in 2011 to 961 thousand hectares in 2015. By how many thousand hectares did it increase?", answer: 175, tolerance: 0, units: "thousand hectares", check: "WOOD_2015-WOOD_2011", why: "961 − 786 = 175 thousand hectares. Woodland and cereals were the two land uses that grew between 2011 and 2015.",
          misconceptions: [
            { answer: 1747, says: "You added the two figures. An increase is the difference, so subtract: 961 − 786 = 175 thousand hectares.", check: "WOOD_2015+WOOD_2011" },
            { answer: 225, says: "A slip in the subtraction. 786 up to 961: 786 to 886 is 100, 886 to 961 is 75, total 175.", check: "175+50" },
            { answer: 100, says: "100 is the rise in cereals (3000 to 3100), not woodland. Woodland went from 786 to 961, a rise of 175 thousand hectares.", check: "CEREALS_2015-CEREALS_2011" }
          ] },
        { kind: "gap", q: "A desalination plant takes the ___ out of sea water so that it can be used as fresh water.", answer: "salt", options: ["salt", "carbon", "oxygen"], why: "Desalination removes salt from sea water, at Beckton by pumping the water through membranes. The fresh water can then be used in a drought.",
          feedback: {
            "carbon": "Taking carbon out of gases is carbon capture, a mitigation strategy from chapter 5. Desalination is about water: it removes the salt so sea water becomes fresh.",
            "oxygen": "Water needs its oxygen; nobody would remove it. The problem with sea water is that it is salty, and desalination removes the salt."
          } }
      ],
      modules: [
        {
          title: "Three ways to adapt, four UK examples",
          task: {
            kind: "match",
            q: "Match each way of adapting to climate change to its UK example.",
            pairs: [
              ["Changing agricultural systems", "Vines growing at Scaynes Hill in West Sussex"],
              ["Managing water supply by desalination", "The Thames Water plant at Beckton on the Thames Estuary"],
              ["Managing water supply by storage", "Kielder Water in Northumberland, the UK's largest reservoir"],
              ["Reducing the risk from rising sea levels", "The Thames Barrier, completed in 1984 and now being backed by raised defences"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Farming means crops. Which example is a crop?",
                "Desalination removes salt, so its example is a treatment works on an estuary where river meets sea.",
                "Storage means a reservoir: a big artificial lake.",
                "Sea level means a barrier against the sea."
              ],
              example: {
                q: "Match: Thanet offshore wind farm, Thames Chase Community Woodland. Choices: planting trees as carbon sinks; renewable electricity for 220 000 homes.",
                steps: ["A wind farm makes electricity.", "A woodland is trees."],
                answer: "Thanet offshore wind farm: renewable electricity for 220 000 homes. Thames Chase Community Woodland: planting trees as carbon sinks."
              }
            },
            core: { hint: "Crop, salt, store, sea: four words, four examples." },
            stretch: { extend: "For each example, write one sentence saying what effect of climate change it responds to." }
          },
          explain: "Say, in one sentence, what all four examples have in common that makes them adaptation rather than mitigation.",
          why: "Vines at Scaynes Hill show farming changing with a warmer climate; Beckton desalinates estuary water for drought; Kielder Water stores it; the Thames Barrier holds back a rising sea. All four respond to the effects of climate change rather than reducing its causes."
        },
        {
          title: "How much margin is left?",
          task: {
            kind: "numeric",
            q: "Many places in the Maldives are only 2.5 m above sea level. If the sea rises by 2 m by 2100, as your deck's projection says, how many metres above the sea would those places be left?",
            answer: 0.5, tolerance: 0.001, units: "m", check: "MALDIVES_HEIGHT-SEA_RISE_2100",
            misconceptions: [
              { answer: 4.5, says: "You added the sea rise to the height. A rising sea eats into the margin, so subtract: 2.5 − 2 = 0.5 m left.", check: "MALDIVES_HEIGHT+SEA_RISE_2100" },
              { answer: 2, says: "2 m is the predicted rise in the sea, not what is left. Take it away from the 2.5 m height: 2.5 − 2 = 0.5 m.", check: "SEA_RISE_2100" },
              { answer: 5, says: "You multiplied 2.5 by 2. The question asks how much height is left after a 2 m rise, so subtract: 2.5 − 2 = 0.5 m.", check: "MALDIVES_HEIGHT*SEA_RISE_2100" }
            ]
          },
          contexts: [
            { label: "Island home", q: "A family's home in the Maldives stands 2.5 m above the sea. If the sea rises by 2 m by 2100, how many metres above the water would the home be?", check: "MALDIVES_HEIGHT-SEA_RISE_2100" },
            { label: "Airport runway", q: "An island runway is 2.5 m above sea level. With a 2 m rise in the sea by 2100, how many metres of height would be left?", check: "MALDIVES_HEIGHT-SEA_RISE_2100" },
            { label: "Planning report", q: "A planning report says a coastal village lies 2.5 m above the sea and that the sea could rise 2 m by 2100. How many metres of margin would remain?", check: "MALDIVES_HEIGHT-SEA_RISE_2100" }
          ],
          levels: {
            support: {
              steps: [
                "Write down the height now: 2.5 m above the sea.",
                "Write down the rise: 2 m.",
                "A rising sea reduces the gap, so subtract: 2.5 − 2.",
                "Answer: 0.5 m, which is half a metre. Say what that means: one storm surge away from flooding."
              ],
              example: {
                q: "The 3 m wall around Malé was built after the 2004 tsunami. If the sea rose by 2 m, how much of the wall would still stand above the new sea level?",
                steps: ["The wall is 3 m high.", "Take away the 2 m rise."],
                answer: "1 m",
                checks: [{ expr: "MALE_WALL-SEA_RISE_2100", value: 1, tol: 0 }]
              }
            },
            core: { hint: "The sea comes up; the land does not. Which way does the gap go?" },
            stretch: { extend: "Explain why a 3 m wall around the capital is not a complete answer for a country of about 1000 low-lying islands." }
          },
          explain: "Say, in one sentence, why half a metre of margin is not safe even if the land is still above the sea.",
          why: "2.5 − 2 = 0.5 m. Half a metre of margin would be wiped out by a storm surge or a high tide, which is why the Maldives is building sea walls and reclaiming land now."
        },
        {
          title: "Mitigation and adaptation together",
          task: {
            kind: "written",
            q: "Using examples you have studied, discuss how the UK is both mitigating climate change and adapting to it. (9 marks)",
            marks: 9,
            criteria: [
              "Defines mitigation (reducing the causes) and adaptation (responding to the change) correctly",
              "Gives at least two UK examples of mitigation with figures (for example Thanet, the energy mix, forest cover, carbon capture)",
              "Gives at least two UK examples of adaptation with figures (for example vineyards and the farming table, Beckton, the Thames Barrier)",
              "Explains why mitigation is globally responsible and adaptation locally responsible, or otherwise contrasts the two",
              "Reaches a judgement about whether the UK needs both and how far it is succeeding",
              "Is well structured, with accurate vocabulary and a conclusion"
            ],
            model: "Managing climate change means both mitigation, which reduces the causes, and adaptation, which responds to the change already happening. The UK is mitigating by changing its energy mix: fossil fuels fell from 91% of energy in 1980 to 50% in 2015 while renewables rose from 3% to 23%, and Thanet offshore wind farm off Margate powers around 220 000 homes with its 100 turbines. It is also planting trees, with forest cover up from 5% in 1920 to 13% in 2020, and planning carbon capture that could store 18% of UK emissions under the North Sea. At the same time the UK is adapting. Farmers are changing what they grow, with vineyards in West Sussex and woodland up from 786 to 961 thousand hectares between 2011 and 2015. Thames Water's Beckton plant can desalinate 180 million litres a day for London in a drought, and the Thames Barrier, completed in 1984, is being backed by raised defences against a sea that could rise 2 m by 2100. Mitigation is globally responsible, because every tonne of carbon the UK does not emit helps the whole world a little, while adaptation is locally responsible, protecting London and British farms directly. The UK needs both: mitigation alone leaves it exposed to changes already on the way, and adaptation alone lets the problem keep growing. The energy figures show real progress, but 13% forest and a sea still rising show how much remains to do."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1: define both words in one sentence each.",
                "Paragraph 2: mitigation in the UK. Two examples with a figure each (energy mix, Thanet, forest, carbon capture).",
                "Paragraph 3: adaptation in the UK. Two examples with a figure each (vineyards, Beckton, Thames Barrier).",
                "Paragraph 4: contrast them (global against local benefit) and judge whether the UK needs both and how well it is doing."
              ],
              example: {
                q: "In three sentences, discuss how a low-lying island nation might both mitigate and adapt to climate change.",
                steps: ["One sentence of mitigation with an example.", "One of adaptation with an example.", "One judgement."],
                answer: "The islands could mitigate by generating electricity from solar and wind power instead of imported fuel, cutting their small share of carbon emissions. They must also adapt, building sea walls like the 3 m wall around Malé and reclaiming land, because the sea is already rising. Adaptation matters most for them, since their own emissions are tiny but the effects are a threat to the whole country."
              }
            },
            core: { hint: "Define, mitigate, adapt, judge: four paragraphs, two examples each, a figure in every example." },
            stretch: { extend: "Add a paragraph on the cost of each approach and who should pay, using climate finance from the Paris agreement in your answer." }
          },
          explain: "Say, in one sentence, why a country that only adapts will have to keep adapting.",
          why: "A top answer defines both terms, gives UK examples with figures for each, contrasts global and local benefit, and judges. The best judgements see that mitigation and adaptation are not rivals: one slows the problem while the other protects people from the part that cannot be stopped."
        }
      ]
    }
  ],

  sources: {
    deckDump: "gg_y11_unit_2_climate_change.txt",
    decksUsed: ["Climate change.pptx"],
    notes: "Lesson titles, sequence, key words, definitions and every case-study figure come from the department's one deck (Climate change.pptx, slides 1-81; slide 61 absent from the extraction). House furniture (dated title slides, recall-and-retention starters, homework and Kerboodle reading slides, the Prior Learning/Components sheet, plenaries, website lists) was used only to fix the lesson sequence. The deck's model answers (slides 5-6 and 63 on weather and climate, slide 41 on the energy mix, slide 48 on carbon capture, slide 81 on the 9-mark question) and its mark scheme (slide 80) were read to see what the deck teaches; none is reproduced and verify.py bans their distinctive phrases. The United Nations statement quoted on slides 33-34 is modern text and is paraphrased, not quoted. Where the deck gives only names (the causes card sort, slide 24) the manifest explains them at GCSE level and NOTES.md says so. Every number is held in the FACTS table in verify.py with its slide number and recomputed. One figure the manifest uses is on no slide (the Sun's cycle of about eleven years, used to explain solar output); it is held apart in verify.py's NON_DECK table, listed in NOTES.md section 5 and raised as open question 5. No pretext.l1 (translation is a separate pass) and no meta.constellation. No text is quoted from any source."
  }
};
