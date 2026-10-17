// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE Physics 8463 · 4.8 Space physics (Physics only) · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   numeric items carry `check` (a Python arithmetic expression; `pi` allowed) and are recomputed.
//   worked examples / support examples with a calculation carry `checks:[{expr, value, tol}]`.
//   every "order" task is compared with the canonical sequences held in verify.py.
//   every mcq / gap answer is compared with the independent answer key held in verify.py.
//   passage sentences are counted (≤ 20 words) and all text is linted for known misconceptions.
//   astra/2: every mcq/gap carries per-wrong-option `feedback`; every module carries `explain`;
//   `contexts` never redefine the answer; speeds quoted in contexts are recomputed; `connections` ⊂ glossary;
//   `meta.constellation` stays in the empty upper-right band of the celestial plate.
// (Higher) marks AQA Physics HT-only content (8463 4.8.2: velocity/speed and radius/speed in orbits).
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["triple-space"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "triple-space",
    subjectKey: "triple",
    subject: "Physics (Triple Science)",
    board: "AQA",
    spec: "8463",
    specRef: "4.8 Space physics (solar system; life cycle of a star; orbital motion, natural and artificial satellites; red-shift)",
    year: 11,
    tier: "GCSE Higher and Foundation (Physics only; not in Combined Science)",
    title: "Space Physics",
    sub: "From a cloud of dust to a star, from a falling Moon to a stretching universe: how gravity and light tell the story of space.",
    bigQuestion: "How did the Sun, the planets and the elements in your own body come to exist, and how do we know the universe is still growing?",
    lessonCount: 5,
    spacing: [2, 7, 30],
    // Five stars of an invented asterism on the empty upper-right of the celestial plate (plate viewBox 1600 × 900:
    // the Sun sits at about x 0.32, y 0.52; the comet lower right). Kept inside x 0.55–0.92, y 0.12–0.45.
    constellation: [[0.60, 0.42], [0.68, 0.28], [0.74, 0.19], [0.84, 0.23], [0.90, 0.36]]
  },

  lessons: [
    { n: 1, title: "P16.1 Formation of the Solar System", question: "How did our solar system form from dust and gas, and why does the Sun stay stable?", keywords: ["solar system", "nebula", "protostar", "nuclear fusion", "main sequence star", "equilibrium"] },
    { n: 2, title: "P16.2 The life history of a star", question: "How does a star's mass decide its life cycle, and how do stars make new elements?", keywords: ["red giant", "white dwarf", "black dwarf", "red supergiant", "supernova", "neutron star", "black hole"] },
    { n: 3, title: "P16.3 Planets, satellites, and orbits", question: "How does gravity keep planets, moons and artificial satellites in orbit?", keywords: ["orbit", "satellite", "period", "velocity", "centripetal force", "geostationary orbit"] },
    { n: 4, title: "P16.4 The expanding universe", question: "What does the red-shift of light from distant galaxies tell us about how they are moving?", keywords: ["galaxy", "spectrum", "wavelength", "frequency", "red-shift"] },
    { n: 5, title: "P16.5 The beginning and future of the Universe", question: "How does red-shift support the Big Bang theory, and what about the universe is still not understood?", keywords: ["Big Bang theory", "red-shift", "expanding universe", "radio telescope"] }
  ],

  glossary: [
    { term: "nebula", means: "A huge cloud of dust and gas in space, where stars form.", chapter: "solar-system" },
    { term: "protostar", means: "A young star: a ball of gas pulled together by gravity, getting hotter, before fusion starts.", chapter: "solar-system" },
    { term: "nuclear fusion", means: "Small nuclei joining to make a bigger nucleus, giving out energy. In stars, hydrogen nuclei fuse into helium.", chapter: "solar-system" },
    { term: "main sequence star", means: "A stable star, like the Sun, fusing hydrogen into helium in its core.", chapter: "solar-system" },
    { term: "equilibrium", means: "A balance: in a main sequence star, gravity pulling in balances the outward pressure from fusion energy.", chapter: "solar-system" },
    { term: "red giant", means: "The large, cooler star that a star about the mass of the Sun becomes when the hydrogen in its core runs out.", chapter: "star-life" },
    { term: "white dwarf", means: "The small, hot, dense core left behind by a red giant.", chapter: "star-life" },
    { term: "black dwarf", means: "A white dwarf that has cooled so much it no longer gives out light. None exist yet.", chapter: "star-life" },
    { term: "red supergiant", means: "The huge star that a star much more massive than the Sun becomes when its core hydrogen runs out.", chapter: "star-life" },
    { term: "supernova", means: "The explosion of a massive star at the end of its life. It makes elements heavier than iron and scatters them.", chapter: "star-life" },
    { term: "neutron star", means: "The very dense core left after a supernova.", chapter: "star-life" },
    { term: "black hole", means: "What is left after a supernova of the most massive stars: gravity so strong that not even light escapes.", chapter: "star-life" },
    { term: "orbit", means: "The curved path one object takes around another, held by gravity.", chapter: "orbits" },
    { term: "satellite", means: "An object that orbits a larger object. Moons are natural satellites; people build artificial satellites.", chapter: "orbits" },
    { term: "period", means: "The time taken for one complete orbit. The Earth's period around the Sun is about 365 days.", chapter: "orbits" },
    { term: "geostationary orbit", means: "An orbit above the equator with a period of 24 hours, so the satellite stays above the same point on the Earth.", chapter: "orbits" },
    { term: "galaxy", means: "A huge group of billions of stars held together by gravity. Our galaxy is the Milky Way.", chapter: "red-shift" },
    { term: "wavelength", means: "The distance from one point on a wave to the same point on the next wave. Red light has a longer wavelength than blue.", chapter: "red-shift" },
    { term: "red-shift", means: "The increase in wavelength of light from a galaxy that is moving away from us.", chapter: "red-shift" },
    { term: "Big Bang theory", means: "The idea that the universe began from a very small region that was extremely hot and dense, and has expanded ever since.", chapter: "red-shift" }
  ],

  // Connections game: 4 groups × 4 terms, all drawn from the glossary. The four terms not used in a group
  // (equilibrium, red giant, white dwarf, black dwarf) still appear in the word game.
  connections: [
    { group: "How a star begins", terms: ["nebula", "protostar", "nuclear fusion", "main sequence star"] },
    { group: "How a massive star ends", terms: ["red supergiant", "supernova", "neutron star", "black hole"] },
    { group: "Orbit words", terms: ["orbit", "satellite", "period", "geostationary orbit"] },
    { group: "The expanding universe", terms: ["galaxy", "wavelength", "red-shift", "Big Bang theory"] }
  ],

  chapters: [
    /* ───────────── 1 · solar system ───────────── */
    {
      key: "solar-system", n: 1, title: "Our solar system and how it formed",
      lead: "What is in our solar system, how the Sun was born from a cloud of dust and gas, and why it now stays the same size.",
      covers: [1],
      pretext: {
        words: [
          { word: "nebula", means: "a huge cloud of dust and gas in space", sentence: "The Sun formed from a nebula that gravity slowly pulled together." },
          { word: "protostar", means: "a young star that is getting hotter but has not started fusion", sentence: "As the gas was squeezed together, it became a hot protostar." },
          { word: "nuclear fusion", means: "small nuclei joining to make a bigger nucleus, giving out energy", sentence: "Nuclear fusion in the Sun's core joins hydrogen nuclei to make helium." },
          { word: "equilibrium", means: "a balance between two things pulling opposite ways", sentence: "The Sun is in equilibrium, so it stays the same size." },
          { word: "dwarf planet", means: "a small, round body that orbits the Sun but is not a full planet", sentence: "Pluto is a dwarf planet at the edge of our solar system." },
          { word: "natural satellite", means: "a moon: an object that orbits a planet and was not made by people", sentence: "The Moon is the Earth's only natural satellite." }
        ],
        passage: [
          "Our solar system is the Sun and everything that orbits it.",
          "There is only one star in it: the Sun.",
          "Eight planets orbit the Sun.",
          "There are also dwarf planets, such as Pluto.",
          "A moon is a natural satellite that orbits a planet.",
          "Our solar system is a tiny part of a galaxy called the Milky Way.",
          "The Sun formed from a huge cloud of dust and gas, called a nebula.",
          "Gravity pulled the dust and gas together.",
          "The cloud became denser and hotter, and formed a protostar.",
          "In time it was hot enough for hydrogen nuclei to fuse into helium.",
          "Fusion gives out energy, and the Sun began to shine.",
          "Gravity pulls the Sun inwards, and fusion energy pushes it outwards.",
          "These two balance, so the Sun stays the same size."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "سحابة ضخمة من الغبار والغاز في الفضاء (nebula)",
            "نجم صغير السن يزداد سخونة لكنه لم يبدأ الاندماج بعد (protostar)",
            "اتحاد أنوية صغيرة لتكوين نواة أكبر مع إطلاق طاقة (nuclear fusion)",
            "توازن بين شيئين يشدّان في اتجاهين متعاكسين (equilibrium)",
            "جسم صغير مستدير يدور حول الشمس لكنه ليس كوكباً كاملاً (dwarf planet)",
            "قمر: جسم يدور حول كوكب ولم يصنعه البشر (natural satellite)"
          ],
          "passage": [
            "نظامنا الشمسي هو الشمس وكل ما يدور حولها.",
            "فيه نجم واحد فقط: الشمس.",
            "ثمانية كواكب تدور حول الشمس.",
            "وهناك أيضاً كواكب قزمة، مثل بلوتو.",
            "القمر هو تابع طبيعي (natural satellite) يدور حول كوكب.",
            "نظامنا الشمسي جزء صغير جداً من مجرّة تُسمّى درب التبّانة (Milky Way).",
            "تكوّنت الشمس من سحابة ضخمة من الغبار والغاز، تُسمّى سديماً (nebula).",
            "شدّت الجاذبية الغبار والغاز بعضها إلى بعض.",
            "صارت السحابة أكثر كثافة وأكثر سخونة، وتكوّن منها نجم أوّلي (protostar).",
            "ومع الوقت صارت ساخنة بما يكفي لتندمج أنوية الهيدروجين وتكوّن الهيليوم.",
            "يُطلق الاندماج طاقة، فبدأت الشمس تُضيء.",
            "تشدّ الجاذبية الشمس إلى الداخل، وتدفعها طاقة الاندماج إلى الخارج.",
            "تتوازن هاتان القوتان، فتبقى الشمس بالحجم نفسه."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "ogromna chmura pyłu i gazu w kosmosie (nebula, mgławica)",
            "młoda gwiazda, która robi się coraz gorętsza, ale nie zaczęła jeszcze fuzji (protostar, protogwiazda)",
            "małe jądra łączą się w większe jądro, oddając energię (nuclear fusion, fuzja jądrowa)",
            "równowaga między dwiema rzeczami ciągnącymi w przeciwne strony (equilibrium)",
            "małe, okrągłe ciało, które krąży wokół Słońca, ale nie jest pełną planetą (dwarf planet, planeta karłowata)",
            "księżyc: obiekt, który krąży wokół planety i nie został zrobiony przez ludzi (natural satellite, naturalny satelita)"
          ],
          "passage": [
            "Nasz Układ Słoneczny to Słońce i wszystko, co wokół niego krąży.",
            "Jest w nim tylko jedna gwiazda: Słońce.",
            "Wokół Słońca krąży osiem planet.",
            "Są też planety karłowate, takie jak Pluton.",
            "Księżyc to naturalny satelita, który krąży wokół planety.",
            "Nasz Układ Słoneczny to maleńka część galaktyki zwanej Drogą Mleczną.",
            "Słońce powstało z ogromnej chmury pyłu i gazu, zwanej mgławicą (nebula).",
            "Grawitacja ściągnęła pył i gaz do siebie.",
            "Chmura stała się gęstsza i gorętsza i utworzyła protogwiazdę (protostar).",
            "Z czasem była na tyle gorąca, że jądra wodoru zaczęły łączyć się w hel.",
            "Fuzja oddaje energię i Słońce zaczęło świecić.",
            "Grawitacja ciągnie Słońce do środka, a energia fuzji pcha je na zewnątrz.",
            "Te dwie siły się równoważą, więc Słońce zachowuje ten sam rozmiar."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma nuvem enorme de poeira e gás no espaço (nebula, nebulosa)",
            "uma estrela jovem que fica cada vez mais quente mas ainda não começou a fusão (protostar, protoestrela)",
            "núcleos pequenos que se juntam para formar um núcleo maior, produzindo energia (nuclear fusion, fusão nuclear)",
            "um equilíbrio entre duas coisas que puxam em sentidos opostos (equilibrium)",
            "um corpo pequeno e redondo que orbita o Sol mas não é um planeta completo (dwarf planet, planeta anão)",
            "uma lua: um objeto que orbita um planeta e não foi feito por pessoas (natural satellite, satélite natural)"
          ],
          "passage": [
            "O nosso sistema solar é o Sol e tudo o que orbita em torno dele.",
            "Há só uma estrela nele: o Sol.",
            "Oito planetas orbitam o Sol.",
            "Também há planetas anões, como Plutão.",
            "Uma lua é um satélite natural que orbita um planeta.",
            "O nosso sistema solar é uma parte muito pequena de uma galáxia chamada Via Láctea.",
            "O Sol nasceu de uma nuvem enorme de poeira e gás, chamada nebulosa (nebula).",
            "A gravidade puxou a poeira e o gás para o mesmo lugar.",
            "A nuvem ficou mais densa e mais quente, e formou uma protoestrela (protostar).",
            "Com o tempo, ficou quente o suficiente para os núcleos de hidrogénio/hidrogênio se fundirem em hélio.",
            "A fusão produz energia, e o Sol começou a brilhar.",
            "A gravidade puxa o Sol para dentro, e a energia da fusão empurra o Sol para fora.",
            "As duas ficam em equilíbrio, por isso o Sol mantém o mesmo tamanho."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "daruur aad u weyn oo boodh iyo gaas ah oo hawada sare ku jirta (nebula)",
            "xiddig da'yar oo sii kululaanaysa laakiin aan weli bilaabin fusion (protostar)",
            "nuclei yaryar oo isku biira si ay u samaystaan nucleus ka weyn, iyagoo tamar sii daaya (nuclear fusion)",
            "dheelitir u dhexeeya laba wax oo jihooyin iska soo horjeeda u jiidaya (equilibrium)",
            "jir yar oo goobaaban oo Qorraxda ku wareega laakiin aan meere buuxa ahayn (dwarf planet)",
            "dayax: jir meere ku wareega oo aan dad samayn (natural satellite)"
          ],
          "passage": [
            "Nidaamka qorraxda (solar system) waa Qorraxda iyo wax walba oo ku wareega.",
            "Hal xiddig keliya ayaa ku jirta: Qorraxda.",
            "Siddeed meere (planets) ayaa Qorraxda ku wareega.",
            "Waxaa sidoo kale jira meerayaal yaryar (dwarf planets), sida Pluto.",
            "Dayax waa satellite dabiici ah (natural satellite) oo meere ku wareega.",
            "Nidaamka qorraxda waa qayb aad u yar oo galaxy la yiraahdo Milky Way.",
            "Qorraxdu waxay ka samaysantay daruur aad u weyn oo boodh iyo gaas ah, oo la yiraahdo nebula.",
            "Cuf-isjiidadku (gravity) wuxuu isu soo jiiday boodhka iyo gaaska.",
            "Daruurtu way sii cufnaatay oo kululaatay, waxayna samaysatay protostar.",
            "Waqti kadib way ku kululaatay heer nuclei hydrogen isku biiraan oo noqdaan helium.",
            "Fusion wuxuu tamar sii daayaa, Qorraxduna waxay bilowday inay iftiinto.",
            "Cuf-isjiidadku Qorraxda gudaha ayuu u jiidaa, tamarta fusion-na dibadda ayay u riixdaa.",
            "Labadaas way isku dheelitiran yihiin, sidaas darteed Qorraxdu isla cabbirkaas ayay ku sii jirtaa."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "величезна хмара пилу і газу в космосі",
            "молода зоря, яка нагрівається, але в якій ще не почався термоядерний синтез (fusion)",
            "малі ядра з’єднуються в більше ядро, виділяючи енергію",
            "рівновага між двома силами, що тягнуть у протилежні боки",
            "мале кругле тіло, яке обертається навколо Сонця, але не є повноцінною планетою",
            "супутник (місяць): об’єкт, який обертається навколо планети і не був створений людьми"
          ],
          "passage": [
            "Наша Сонячна система — це Сонце і все, що обертається навколо нього.",
            "У ній є лише одна зоря: Сонце.",
            "Навколо Сонця обертаються вісім планет.",
            "Є також карликові планети, наприклад Плутон.",
            "Місяць — це природний супутник (natural satellite), який обертається навколо планети.",
            "Наша Сонячна система — це крихітна частина галактики, яка називається Молочний Шлях (Milky Way).",
            "Сонце утворилося з величезної хмари пилу і газу, яка називається туманністю (nebula).",
            "Гравітація стягнула пил і газ разом.",
            "Хмара стала щільнішою і гарячішою та утворила протозорю (protostar).",
            "З часом вона стала досить гарячою, щоб ядра водню зливалися в гелій.",
            "Синтез виділяє енергію, і Сонце почало світити.",
            "Гравітація стягує Сонце всередину, а енергія синтезу штовхає його назовні.",
            "Ці дві сили врівноважують одна одну, тому Сонце зберігає свій розмір."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "خلا میں گرد اور گیس کا ایک بہت بڑا بادل (nebula)",
            "ایک نوجوان ستارہ جو گرم ہو رہا ہے مگر ابھی fusion شروع نہیں ہوا (protostar)",
            "چھوٹے مرکزوں (nuclei) کا مل کر ایک بڑا مرکزہ بنانا، جس سے توانائی نکلتی ہے (nuclear fusion)",
            "دو مخالف سمتوں میں کھینچنے والی چیزوں کے درمیان توازن (equilibrium)",
            "ایک چھوٹا گول جسم جو سورج کے گرد چکر لگاتا ہے مگر پورا سیارہ نہیں (dwarf planet)",
            "چاند: ایک ایسی چیز جو سیارے کے گرد چکر لگاتی ہے اور انسانوں نے نہیں بنائی (natural satellite)"
          ],
          "passage": [
            "ہمارا نظامِ شمسی (solar system) سورج اور وہ سب کچھ ہے جو اس کے گرد چکر لگاتا ہے۔",
            "اس میں صرف ایک ستارہ ہے: سورج۔",
            "آٹھ سیارے سورج کے گرد چکر لگاتے ہیں۔",
            "اس میں بونے سیارے (dwarf planets) بھی ہیں، جیسے پلوٹو۔",
            "چاند ایک قدرتی سیٹلائٹ (natural satellite) ہے جو سیارے کے گرد چکر لگاتا ہے۔",
            "ہمارا نظامِ شمسی Milky Way نامی کہکشاں (galaxy) کا ایک ننھا سا حصہ ہے۔",
            "سورج گرد اور گیس کے ایک بہت بڑے بادل سے بنا، جسے nebula کہتے ہیں۔",
            "کششِ ثقل (gravity) نے گرد اور گیس کو ایک ساتھ کھینچ لیا۔",
            "بادل گھنا اور گرم ہوتا گیا، اور ایک protostar بن گیا۔",
            "وقت کے ساتھ یہ اتنا گرم ہو گیا کہ ہائیڈروجن کے مرکزے مل کر ہیلیم بنانے لگے۔",
            "fusion سے توانائی نکلتی ہے، اور سورج چمکنے لگا۔",
            "کششِ ثقل سورج کو اندر کی طرف کھینچتی ہے، اور fusion کی توانائی اسے باہر کی طرف دھکیلتی ہے۔",
            "یہ دونوں برابر ہو جاتے ہیں، اس لیے سورج ایک ہی سائز کا رہتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "What is in our solar system?",
          paragraphs: [
            "Our solar system has one star, the Sun, at its centre. Eight planets orbit it: Mercury, Venus, Earth and Mars are small and rocky; Jupiter, Saturn, Uranus and Neptune are giant planets made mostly of gas and ice. Between Mars and Jupiter is a belt of rocky asteroids.",
            "There are also dwarf planets, such as Pluto, which orbit the Sun but are too small to count as full planets. Many planets have moons. A moon is a natural satellite: an object that orbits a planet and was not made by people.",
            "The whole solar system is a very small part of the Milky Way, a galaxy of billions of stars. The Sun is about 1.4 million km across, but the Milky Way is about 100 000 light years across."
          ],
          tip: "In the exam, say the solar system has ONE star. The planets do not give out their own light; they reflect the Sun's."
        },
        {
          heading: "From nebula to protostar to star",
          paragraphs: [
            "The Sun began as part of a nebula, a huge cloud of dust and gas, mostly hydrogen. Gravity pulled the dust and gas together. As the cloud fell inwards it became denser, and the gas at the centre became hotter.",
            "This hot, dense ball is called a protostar. When its core became hot enough and dense enough, hydrogen nuclei were forced together so hard that they fused to make helium nuclei. This is nuclear fusion, and it releases a great deal of energy.",
            "Once fusion started, the Sun began to shine as a main sequence star. Dust and gas further out from the centre was pulled together by gravity into larger and larger lumps, which became the planets."
          ],
          worked: {
            q: "Describe how the Sun formed. (4 marks)",
            steps: [
              "Start at the beginning: name the cloud. The Sun formed from a nebula, a cloud of dust and gas.",
              "Name the force: gravity pulled the dust and gas together.",
              "Say what happened to it: it became denser and hotter and formed a protostar.",
              "Finish with fusion: when it was hot enough, hydrogen nuclei fused into helium nuclei, releasing energy, and it became a main sequence star."
            ],
            answer: "A nebula of dust and gas was pulled together by gravity; it became denser and hotter, forming a protostar; when hot enough, hydrogen nuclei fused into helium nuclei and the Sun became a main sequence star."
          }
        },
        {
          heading: "A star in balance",
          paragraphs: [
            "The Sun has been about the same size for billions of years. Two effects are acting on it. Gravity pulls all of its material inwards, trying to make it collapse. The energy released by fusion in the core heats the gas, which pushes outwards, trying to make it expand.",
            "In a main sequence star these two effects are balanced. Scientists call this an equilibrium. While the star has hydrogen to fuse in its core, the balance holds and the star stays stable.",
            "When the hydrogen in the core runs out, the balance changes, and the next part of the star's life begins. That is Chapter 2."
          ],
          tip: "Use both halves of the balance: inward = gravity (gravitational collapse); outward = expansion due to fusion energy. One half on its own does not earn the mark."
        }
      ],
      gate: [
        { kind: "mcq", q: "How many stars are there in our solar system?", options: ["One", "Eight", "Nine", "Millions"], answer: 0, why: "There is one star, the Sun. The planets orbit it; they are not stars.",
          feedback: [
            "",
            "Eight is the number of planets, and planets are not stars: they give out no light of their own, they reflect the Sun's. The solar system has one star.",
            "Nine counts the planets with Pluto added, and counts planets rather than stars. Pluto is a dwarf planet, and no planet is a star. There is one star, the Sun.",
            "Millions (in fact billions) is the number of stars in our galaxy, the Milky Way. Our solar system is just the Sun and what orbits it: one star."
          ] },
        { kind: "gap", q: "The Sun formed from a cloud of dust and gas called a ___.", answer: "nebula", options: ["nebula", "protostar", "galaxy"], why: "A nebula is the cloud. A protostar is what forms when gravity pulls the cloud together.",
          feedback: {
            "protostar": "A protostar is what the cloud becomes after gravity has pulled it together and heated it. The cloud itself, before that, is a nebula.",
            "galaxy": "A galaxy is a group of billions of stars, like the Milky Way. The cloud of dust and gas that one star forms from is a nebula."
          } },
        { kind: "mcq", q: "Which force pulled the dust and gas together to form the Sun?", options: ["Gravity", "Magnetism", "Friction", "Fusion"], answer: 0, why: "Gravity attracts every piece of matter to every other piece, so it pulls the cloud together.",
          feedback: [
            "",
            "Magnetism acts only on magnetic materials and could not draw a whole cloud of hydrogen gas together. Gravity acts on all matter, so gravity pulled the nebula together.",
            "Friction slows things that rub against each other; it cannot pull material inwards from across a cloud. Gravity did that.",
            "Fusion is what started once the core was hot and dense enough: it is the result of the collapse, not its cause. Gravity pulled the cloud together first."
          ] }
      ],
      modules: [
        {
          title: "How the Sun was born",
          task: {
            kind: "order",
            q: "Put the stages in the formation of the Sun in the correct order.",
            items: [
              "A cloud of dust and gas (a nebula) drifts in space",
              "Gravity pulls the dust and gas together",
              "The cloud gets denser and hotter and forms a protostar",
              "Hydrogen nuclei start to fuse into helium nuclei",
              "The Sun becomes a stable main sequence star"
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the stage that has to come first: the raw material, before anything has happened to it.",
                "Find the force that starts the change.",
                "Ask: what does that force make? Then: what happens when it is hot enough?",
                "The last stage is the one where the star is stable."
              ],
              example: {
                q: "Put these stages of a human life in order: adult, baby, teenager, child.",
                steps: ["Start with the youngest stage: baby.", "Next comes child, then teenager.", "The last stage of these four is adult."],
                answer: "baby, child, teenager, adult"
              }
            },
            core: { hint: "Gravity has to act before anything heats up, and fusion has to start before the star is stable." },
            stretch: { extend: "Explain why the protostar gets hotter as gravity pulls it together, and why fusion cannot start until the core is very hot and dense." }
          },
          explain: "Say, in one sentence, why gravity has to act on the cloud before fusion can start.",
          why: "Nebula first; gravity pulls it together; it becomes a hot, dense protostar; fusion of hydrogen into helium starts; the star settles into the stable main sequence."
        },
        {
          title: "Why the Sun stays the same size",
          task: {
            kind: "mcq",
            q: "Why does a main sequence star, such as the Sun, stay the same size?",
            options: [
              "The inward pull of gravity is balanced by the outward pressure from fusion energy",
              "Fusion has stopped, so nothing inside the star is changing",
              "Gravity does not act inside a star",
              "The star has used up all of its hydrogen"
            ],
            answer: 0,
            feedback: [
              "",
              "The Sun has not stopped fusing: it shines because fusion is releasing energy right now. A star in which fusion had stopped would collapse under gravity, not stay the same size.",
              "Gravity acts on all matter, including the gas inside a star; it is gravity that pulls the star inwards. The star keeps its size because this inward pull is balanced by the outward pressure from fusion energy.",
              "A star that has used up the hydrogen in its core leaves the main sequence and changes size, swelling into a red giant or red supergiant. The Sun is stable because it still has hydrogen to fuse, with gravity and fusion pressure in balance."
            ]
          },
          contexts: [
            { label: "The Sun", q: "The Sun has been a main sequence star for billions of years and has stayed about the same size all that time. Why?" },
            { label: "A massive star", q: "A main sequence star with ten times the mass of the Sun also keeps the same size while it is fusing hydrogen in its core. Why?" },
            { label: "A small, cool star", q: "Most stars in the Milky Way are main sequence stars smaller and cooler than the Sun. They too stay the same size for a very long time. Why?" }
          ],
          explain: "Say, in one sentence, what pulls the Sun inwards and what pushes it outwards.",
          levels: {
            support: {
              steps: [
                "Think of two teams in a tug of war pulling equally hard: the rope does not move.",
                "Name the force pulling the star inwards.",
                "Name what is pushing the star outwards.",
                "If they are equal, the star's size does not change."
              ],
              example: {
                q: "A balloon is blown up and tied. Why does it stay the same size?",
                steps: ["The stretched rubber pulls inwards.", "The air inside pushes outwards.", "The two are balanced, so the size stays the same."],
                answer: "The inward pull of the rubber is balanced by the outward push of the air inside."
              }
            },
            core: { hint: "One effect pulls in, one pushes out. Which option names both?" },
            stretch: { extend: "Predict what happens to this balance when the hydrogen in the core runs out, and say which stage of the star's life comes next for a star like the Sun." }
          },
          why: "In a main sequence star there is an equilibrium: gravitational collapse inwards is balanced by expansion outwards caused by the energy released by fusion."
        },
        {
          title: "Who's who in the solar system",
          task: {
            kind: "match",
            q: "Match each object to what it is.",
            pairs: [
              ["The Sun", "The one star in our solar system"],
              ["Earth", "A rocky planet that orbits the Sun"],
              ["Jupiter", "A giant planet made mostly of gas"],
              ["Pluto", "A dwarf planet"],
              ["The Moon", "A natural satellite of the Earth"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the one you are surest of.",
                "Ask: does it give out its own light? Only a star does.",
                "Ask: what does it orbit? Planets orbit the Sun; moons orbit planets.",
                "Use the size clue: giant planet, rocky planet or dwarf planet."
              ],
              example: {
                q: "Match: Mars, Saturn. Choices: a giant planet with rings; a small rocky planet.",
                steps: ["Mars is one of the four inner planets, which are rocky.", "Saturn is one of the four outer giant planets."],
                answer: "Mars: a small rocky planet. Saturn: a giant planet with rings."
              }
            },
            core: { hint: "Inner planets are rocky; outer planets are giants. Moons orbit planets, not the Sun directly." },
            stretch: { extend: "Explain why the inner planets are rocky and the outer planets are mostly gas, using the idea of temperature in the early solar system." }
          },
          explain: "Say, in one sentence, how you can tell a moon from a planet.",
          why: "The Sun is our only star; Earth is one of the four rocky inner planets; Jupiter is a gas giant; Pluto is a dwarf planet; the Moon is a natural satellite."
        }
      ]
    },

    /* ───────────── 2 · life cycle of a star ───────────── */
    {
      key: "star-life", n: 2, title: "The life cycle of a star",
      lead: "How a star's mass decides how it lives and dies, and how fusion inside stars made the elements you are made of.",
      covers: [1, 2],
      pretext: {
        words: [
          { word: "main sequence star", means: "a stable star fusing hydrogen into helium", sentence: "The Sun is a main sequence star and will be for billions of years." },
          { word: "red giant", means: "a large, cooler star formed when a Sun-sized star runs out of core hydrogen", sentence: "One day the Sun will swell up into a red giant." },
          { word: "white dwarf", means: "a small, hot, dense star left behind by a red giant", sentence: "A white dwarf is about the size of the Earth." },
          { word: "red supergiant", means: "a huge star formed from a star much more massive than the Sun", sentence: "A red supergiant is far bigger than a red giant." },
          { word: "supernova", means: "the explosion of a massive star", sentence: "A supernova can shine more brightly than a whole galaxy for a short time." },
          { word: "neutron star", means: "the very dense core left after a supernova", sentence: "A teaspoon of a neutron star would have a mass of billions of tonnes." }
        ],
        passage: [
          "Every star goes through a life cycle.",
          "The life cycle depends on the size, or mass, of the star.",
          "In a main sequence star, hydrogen nuclei fuse into helium nuclei.",
          "For a star like the Sun, this stage lasts for billions of years.",
          "When the hydrogen in the core runs out, the star swells up.",
          "A star about the size of the Sun becomes a red giant.",
          "Then it becomes a small, hot white dwarf.",
          "Over a very long time, a white dwarf cools into a black dwarf.",
          "A star much more massive than the Sun becomes a red supergiant.",
          "A red supergiant collapses and then explodes as a supernova.",
          "It leaves a neutron star or, for the most massive stars, a black hole.",
          "Fusion inside stars makes new elements.",
          "A supernova makes elements heavier than iron and spreads them through space."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "نجم مستقر يُدمج الهيدروجين ليكوّن الهيليوم (main sequence star)",
            "نجم كبير أقل حرارة يتكوّن عندما ينفد الهيدروجين من قلب نجم بحجم الشمس (red giant)",
            "نجم صغير ساخن كثيف يتبقّى بعد العملاق الأحمر (white dwarf)",
            "نجم ضخم يتكوّن من نجم كتلته أكبر بكثير من كتلة الشمس (red supergiant)",
            "انفجار نجم ضخم الكتلة (supernova)",
            "القلب الكثيف جداً الذي يتبقّى بعد المستعر الأعظم (neutron star)"
          ],
          "passage": [
            "كل نجم يمرّ بدورة حياة.",
            "تعتمد دورة الحياة على حجم النجم، أي كتلته.",
            "في نجم التتابع الرئيسي (main sequence star)، تندمج أنوية الهيدروجين لتكوّن أنوية الهيليوم.",
            "في نجم مثل الشمس، تستمر هذه المرحلة مليارات السنين.",
            "عندما ينفد الهيدروجين في القلب، يتضخّم النجم.",
            "النجم الذي حجمه قريب من حجم الشمس يصبح عملاقاً أحمر (red giant).",
            "ثم يصبح قزماً أبيض (white dwarf) صغيراً وساخناً.",
            "وعلى مدى زمن طويل جداً، يبرد القزم الأبيض ليصبح قزماً أسود (black dwarf).",
            "النجم الذي كتلته أكبر بكثير من الشمس يصبح عملاقاً أحمر هائلاً (red supergiant).",
            "ينهار العملاق الأحمر الهائل ثم ينفجر على شكل مستعر أعظم (supernova).",
            "ويترك وراءه نجماً نيوترونياً (neutron star)، أو ثقباً أسود (black hole) في حالة أضخم النجوم.",
            "الاندماج داخل النجوم يصنع عناصر جديدة.",
            "يصنع المستعر الأعظم عناصر أثقل من الحديد وينشرها في الفضاء."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "stabilna gwiazda, która łączy wodór w hel (main sequence star, gwiazda ciągu głównego)",
            "duża, chłodniejsza gwiazda, która powstaje, gdy gwieździe wielkości Słońca kończy się wodór w jądrze (red giant, czerwony olbrzym)",
            "mała, gorąca, gęsta gwiazda, która zostaje po czerwonym olbrzymie (white dwarf, biały karzeł)",
            "ogromna gwiazda powstała z gwiazdy o wiele masywniejszej niż Słońce (red supergiant, czerwony nadolbrzym)",
            "wybuch masywnej gwiazdy (supernova, supernowa)",
            "bardzo gęste jądro, które zostaje po supernowej (neutron star, gwiazda neutronowa)"
          ],
          "passage": [
            "Każda gwiazda przechodzi cykl życia.",
            "Cykl życia zależy od rozmiaru, czyli masy, gwiazdy.",
            "W gwieździe ciągu głównego jądra wodoru łączą się w jądra helu.",
            "Dla gwiazdy takiej jak Słońce ten etap trwa miliardy lat.",
            "Kiedy wodór w jądrze się kończy, gwiazda się rozdyma.",
            "Gwiazda mniej więcej wielkości Słońca staje się czerwonym olbrzymem.",
            "Potem staje się małym, gorącym białym karłem.",
            "Przez bardzo długi czas biały karzeł stygnie i staje się czarnym karłem.",
            "Gwiazda o wiele masywniejsza niż Słońce staje się czerwonym nadolbrzymem.",
            "Czerwony nadolbrzym zapada się, a potem wybucha jako supernowa.",
            "Zostawia po sobie gwiazdę neutronową albo, w przypadku najmasywniejszych gwiazd, czarną dziurę.",
            "Fuzja wewnątrz gwiazd tworzy nowe pierwiastki.",
            "Supernowa tworzy pierwiastki cięższe od żelaza i rozsiewa je po kosmosie."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma estrela estável que funde hidrogénio/hidrogênio em hélio (main sequence star)",
            "uma estrela grande e mais fria que se forma quando uma estrela do tamanho do Sol gasta o hidrogénio/hidrogênio do centro (red giant, gigante vermelha)",
            "uma estrela pequena, quente e densa que fica depois de uma gigante vermelha (white dwarf, anã branca)",
            "uma estrela enorme formada a partir de uma estrela com muito mais massa do que o Sol (red supergiant, supergigante vermelha)",
            "a explosão de uma estrela de grande massa (supernova)",
            "o centro muito denso que fica depois de uma supernova (neutron star, estrela de neutrões/nêutrons)"
          ],
          "passage": [
            "Todas as estrelas passam por um ciclo de vida.",
            "O ciclo de vida depende do tamanho, ou massa, da estrela.",
            "Numa estrela da sequência principal (main sequence), a fusão transforma núcleos de hidrogénio/hidrogênio em núcleos de hélio.",
            "Numa estrela como o Sol, esta fase dura milhares de milhões de anos.",
            "Quando o hidrogénio/hidrogênio do centro acaba, a estrela incha.",
            "Uma estrela mais ou menos do tamanho do Sol passa a ser uma gigante vermelha (red giant).",
            "Depois, passa a ser uma anã branca (white dwarf), pequena e quente.",
            "Ao longo de muito tempo, uma anã branca vai perdendo calor até se tornar uma anã negra.",
            "Uma estrela com muito mais massa do que o Sol passa a ser uma supergigante vermelha (red supergiant).",
            "Uma supergigante vermelha colapsa e depois explode numa supernova.",
            "Fica uma estrela de neutrões/nêutrons ou, nas estrelas de maior massa, um buraco negro.",
            "A fusão dentro das estrelas cria novos elementos.",
            "Uma supernova cria elementos mais pesados do que o ferro e espalha esses elementos pelo espaço."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "xiddig deggan oo hydrogen u beddelaysa helium (main sequence star)",
            "xiddig weyn oo ka qabow, oo samaysanta marka xiddig cabbirka Qorraxda leh hydrogen-ka bartamaha ka dhammaato (red giant)",
            "xiddig yar, kulul oo cufan oo red giant ka tagto (white dwarf)",
            "xiddig aad u weyn oo ka samaysanta xiddig aad uga cuf badan Qorraxda (red supergiant)",
            "qaraxa xiddig aad u cuf badan (supernova)",
            "bartamaha aad u cufan ee ka hara supernova kadib (neutron star)"
          ],
          "passage": [
            "Xiddig kastaa waxay martaa wareeg nololeed (life cycle).",
            "Wareegga nololeed wuxuu ku xiran yahay cabbirka, ama cufka (mass), ee xiddigta.",
            "Xiddig main sequence, nuclei hydrogen waxay isku biiraan oo noqdaan nuclei helium.",
            "Xiddig Qorraxda u eg, heerkan wuxuu socdaa balaayiin sannadood.",
            "Marka hydrogen-ka bartamaha dhammaado, xiddigtu way barartaa.",
            "Xiddig cabbirka Qorraxda u dhow waxay noqotaa red giant.",
            "Kadibna waxay noqotaa white dwarf yar oo kulul.",
            "Waqti aad u dheer kadib, white dwarf way qaboowdaa oo noqotaa black dwarf.",
            "Xiddig aad uga cuf badan Qorraxda waxay noqotaa red supergiant.",
            "Red supergiant way burburtaa kadibna way qaraxdaa sida supernova.",
            "Waxay ka tagtaa neutron star ama, xiddigaha ugu cuf badan, black hole.",
            "Fusion-ka xiddigaha gudahooda ka dhaca wuxuu samaysaa curiyeyaal (elements) cusub.",
            "Supernova waxay samaysaa curiyeyaal ka culus birta oo ku kala firdhisaa hawada sare."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "стабільна зоря, яка перетворює водень на гелій",
            "велика, холодніша зоря, яка утворюється, коли в зорі розміром із Сонце закінчується водень у ядрі",
            "мала, гаряча, щільна зоря, що залишається після червоного гіганта",
            "величезна зоря, яка утворюється із зорі, набагато масивнішої за Сонце",
            "вибух масивної зорі",
            "дуже щільне ядро, яке залишається після наднової"
          ],
          "passage": [
            "Кожна зоря проходить життєвий цикл.",
            "Життєвий цикл залежить від розміру, або маси, зорі.",
            "У зорі головної послідовності (main sequence star) ядра водню зливаються в ядра гелію.",
            "Для зорі, подібної до Сонця, цей етап триває мільярди років.",
            "Коли водень у ядрі закінчується, зоря роздувається.",
            "Зоря розміром приблизно із Сонце стає червоним гігантом (red giant).",
            "Потім вона стає малим, гарячим білим карликом (white dwarf).",
            "За дуже довгий час білий карлик остигає і стає чорним карликом.",
            "Зоря, набагато масивніша за Сонце, стає червоним надгігантом (red supergiant).",
            "Червоний надгігант стискається, а потім вибухає як наднова (supernova).",
            "Після неї залишається нейтронна зоря або, для наймасивніших зір, чорна діра.",
            "Синтез усередині зір створює нові елементи.",
            "Наднова створює елементи, важчі за залізо, і розносить їх по космосу."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایک مستحکم ستارہ جو ہائیڈروجن کو ہیلیم میں بدل رہا ہے (main sequence star)",
            "ایک بڑا، نسبتاً ٹھنڈا ستارہ جو اس وقت بنتا ہے جب سورج جتنے ستارے کے مرکز کی ہائیڈروجن ختم ہو جائے (red giant)",
            "ایک چھوٹا، گرم، گھنا ستارہ جو red giant کے بعد باقی رہ جاتا ہے (white dwarf)",
            "ایک بہت بڑا ستارہ جو سورج سے کہیں زیادہ کمیت والے ستارے سے بنتا ہے (red supergiant)",
            "ایک بھاری ستارے کا دھماکا (supernova)",
            "supernova کے بعد باقی رہ جانے والا بہت گھنا مرکز (neutron star)"
          ],
          "passage": [
            "ہر ستارہ ایک زندگی کے چکر (life cycle) سے گزرتا ہے۔",
            "یہ چکر ستارے کے سائز، یعنی کمیت (mass)، پر منحصر ہے۔",
            "main sequence ستارے میں ہائیڈروجن کے مرکزے مل کر ہیلیم کے مرکزے بنتے ہیں۔",
            "سورج جیسے ستارے کے لیے یہ مرحلہ اربوں سال چلتا ہے۔",
            "جب مرکز کی ہائیڈروجن ختم ہو جاتی ہے، ستارہ پھول جاتا ہے۔",
            "سورج جتنا ستارہ red giant بن جاتا ہے۔",
            "پھر یہ ایک چھوٹا، گرم white dwarf بن جاتا ہے۔",
            "بہت لمبے وقت میں white dwarf ٹھنڈا ہو کر black dwarf بن جاتا ہے۔",
            "سورج سے کہیں زیادہ کمیت والا ستارہ red supergiant بن جاتا ہے۔",
            "red supergiant سکڑ کر گر جاتا ہے اور پھر supernova کی شکل میں پھٹ جاتا ہے۔",
            "اس کے بعد neutron star رہ جاتا ہے، یا سب سے بھاری ستاروں کی صورت میں black hole۔",
            "ستاروں کے اندر fusion نئے عناصر (elements) بناتا ہے۔",
            "supernova لوہے سے بھاری عناصر بناتا ہے اور انھیں خلا میں پھیلا دیتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Two paths: it depends on mass",
          paragraphs: [
            "Every star starts the same way: a nebula is pulled together by gravity into a protostar, fusion starts, and it becomes a main sequence star. What happens next depends on the mass of the star.",
            "A star about the same size as the Sun becomes a red giant when the hydrogen in its core runs out. Its outer layers drift away, leaving a white dwarf. A white dwarf slowly cools and fades, and will eventually become a black dwarf.",
            "A star much more massive than the Sun swells into a red supergiant. It then collapses and explodes as a supernova. What is left is a neutron star or, if enough mass remains, a black hole."
          ],
          worked: {
            q: "A star has about 20 times the mass of the Sun. Describe what happens to it after its main sequence stage.",
            steps: [
              "Decide which path: 20 times the Sun's mass is much more massive than the Sun, so use the massive-star path.",
              "When the hydrogen in its core runs out, it swells into a red supergiant.",
              "The red supergiant collapses and explodes as a supernova.",
              "The remains form a neutron star or, if enough mass is left, a black hole."
            ],
            answer: "Red supergiant, then supernova, then a neutron star or a black hole."
          },
          tip: "Learn the two paths as two lines that share the same start: nebula, protostar, main sequence star. They split after the main sequence."
        },
        {
          heading: "Fusion and the making of elements",
          paragraphs: [
            "In the main sequence, stars fuse hydrogen nuclei into helium nuclei. When the core hydrogen runs out, the core gets hotter, and helium nuclei start to fuse into heavier nuclei such as carbon and oxygen.",
            "Bigger nuclei have more protons, which repel each other more strongly. So it takes higher temperatures to fuse them. The most massive stars get hot enough to keep fusing heavier and heavier elements, all the way up to iron.",
            "Elements heavier than iron are made in a supernova, where far more energy is available. The explosion then scatters all of these elements out through space."
          ],
          tip: "The key fact to remember: elements heavier than iron are produced in a supernova."
        },
        {
          heading: "Stardust and black dwarfs",
          paragraphs: [
            "The elements thrown out by supernovae mix into new clouds of dust and gas. New stars and planets form from these clouds. The Sun, the Earth and you all contain elements that were made inside stars that lived and died before the Sun was born.",
            "A black dwarf is a white dwarf that has cooled so much that it no longer gives out light or heat. This takes longer than the universe has existed, about 13.8 billion years, so scientists think no black dwarfs exist yet.",
            "This is a good example of science predicting something that has not yet been observed, from the way stars are known to behave."
          ]
        }
      ],
      gate: [
        { kind: "mcq", q: "In a main sequence star, what does nuclear fusion turn hydrogen into?", options: ["Helium", "Iron", "Carbon", "Oxygen"], answer: 0, why: "Main sequence stars fuse hydrogen nuclei into helium nuclei. Heavier elements come later in a star's life.",
          feedback: [
            "",
            "Iron is the heaviest element that fusion in the most massive stars can make, and only late in their lives. In the main sequence, hydrogen fuses into helium.",
            "Carbon is made later, when helium nuclei fuse after the core hydrogen has run out, in the red giant or red supergiant stage. A main sequence star fuses hydrogen into helium.",
            "Oxygen is made in later stages, from helium and carbon, not in the main sequence. A main sequence star fuses hydrogen into helium."
          ] },
        { kind: "mcq", q: "What decides which life cycle a star follows?", options: ["Its mass", "Its colour today", "Its distance from Earth", "How many planets orbit it"], answer: 0, why: "The life cycle is determined by the size (mass) of the star.",
          feedback: [
            "",
            "A star's colour tells you about its surface temperature now, not which path it will follow. The life cycle depends on the star's mass.",
            "Distance from Earth only changes how the star looks to us; it has no effect on the star itself. The life cycle depends on the star's mass.",
            "Planets are far too small to affect how a star lives and dies. The life cycle depends on the star's mass."
          ] },
        { kind: "gap", q: "Elements heavier than ___ are made in a supernova.", answer: "iron", options: ["iron", "helium", "hydrogen"], why: "Fusion in the most massive stars goes up to iron. Heavier elements need the energy of a supernova.",
          feedback: {
            "helium": "Elements heavier than helium, such as carbon and oxygen and on up to iron, are made by fusion inside stars themselves. A supernova is needed only for the elements heavier than iron.",
            "hydrogen": "Helium is heavier than hydrogen, and every main sequence star makes it by fusion. Fusion in stars goes all the way up to iron; a supernova makes the elements heavier than iron."
          } }
      ],
      modules: [
        {
          title: "The life of a star like the Sun",
          task: {
            kind: "order",
            q: "Put the life cycle of a star about the same mass as the Sun in order.",
            items: ["Nebula", "Protostar", "Main sequence star", "Red giant", "White dwarf", "Black dwarf"]
          },
          levels: {
            support: {
              steps: [
                "The first two stages are the same for every star: the cloud, then the young star.",
                "Next is the long, stable stage where hydrogen fuses into helium.",
                "When the core hydrogen runs out, the star swells up.",
                "Then it shrinks to a small, hot star, which slowly cools and fades."
              ],
              example: {
                q: "Put the life cycle of a butterfly in order: butterfly, egg, chrysalis, caterpillar.",
                steps: ["Start with the egg.", "The egg hatches into a caterpillar.", "The caterpillar forms a chrysalis.", "A butterfly comes out of the chrysalis."],
                answer: "egg, caterpillar, chrysalis, butterfly"
              }
            },
            core: { hint: "A Sun-sized star never explodes as a supernova. Its last two stages are both called dwarfs." },
            stretch: { extend: "Explain why no black dwarfs have been observed, even though scientists are confident they will exist." }
          },
          explain: "Say, in one sentence, what happens to a star like the Sun when the hydrogen in its core runs out.",
          why: "Nebula, protostar, main sequence star, red giant, white dwarf, black dwarf. The Sun will follow this path."
        },
        {
          title: "The life of a massive star",
          task: {
            kind: "order",
            q: "Put the life cycle of a star much more massive than the Sun in order.",
            items: ["Nebula", "Protostar", "Main sequence star", "Red supergiant", "Supernova", "Neutron star or black hole"]
          },
          levels: {
            support: {
              steps: [
                "The first three stages are the same as for the Sun.",
                "A massive star swells into something bigger than a red giant.",
                "That huge star collapses and explodes.",
                "The last stage is what is left after the explosion."
              ],
              example: {
                q: "Put the life cycle of a star about the same mass as the Sun in order, starting from the nebula.",
                steps: ["Nebula, then protostar.", "Main sequence star.", "Red giant.", "White dwarf, which cools to a black dwarf."],
                answer: "nebula, protostar, main sequence star, red giant, white dwarf, black dwarf"
              }
            },
            core: { hint: "Super-sized stars become supergiants, and supergiants end in a supernova." },
            stretch: { extend: "Explain how a supernova makes it possible for planets like the Earth to contain elements heavier than iron." }
          },
          explain: "Say, in one sentence, why a massive star ends in a supernova but the Sun will not.",
          why: "Nebula, protostar, main sequence star, red supergiant, supernova, then a neutron star or, for the most massive stars, a black hole."
        },
        {
          title: "Where the elements come from",
          task: {
            kind: "mcq",
            q: "Why are elements heavier than iron made in a supernova and not in a main sequence star?",
            options: [
              "Only a supernova releases enough energy to make nuclei heavier than iron",
              "There is no iron inside stars",
              "Heavier elements are made when a white dwarf cools down",
              "Heavier elements fall into stars from their planets"
            ],
            answer: 0,
            feedback: [
              "",
              "There is iron inside the most massive stars: it is the heaviest element their fusion can make. What those stars cannot do is fuse beyond iron; only a supernova releases enough energy for that.",
              "A white dwarf is a cooling core in which fusion has stopped, so it makes no new elements at all. Elements heavier than iron need the energy of a supernova.",
              "Planets form from elements that stars have already made; they are not the source of a star's elements. Elements heavier than iron come from a supernova."
            ]
          },
          explain: "Say, in one sentence, why fusing bigger nuclei needs more energy than fusing hydrogen.",
          levels: {
            support: {
              steps: [
                "Remember: bigger nuclei have more protons, and protons repel each other.",
                "So fusing bigger nuclei needs more energy and higher temperatures.",
                "Even the most massive stars stop fusing at iron.",
                "Ask: which event has far more energy than any star's core?"
              ],
              example: {
                q: "Why can a star like the Sun fuse hydrogen into helium, but never fuse its way up to iron?",
                steps: ["Hydrogen nuclei have one proton each, so they need the least energy to fuse.", "Fusing heavier nuclei needs much higher temperatures.", "Only the most massive stars get hot enough to fuse elements up to iron."],
                answer: "Fusing heavier nuclei needs higher temperatures than a Sun-sized star ever reaches; only the most massive stars reach iron."
              }
            },
            core: { hint: "Think about what makes a supernova different from the steady fusion inside a star." },
            stretch: { extend: "Explain how a supernova 'distributes' elements, and why this means new stars and planets contain heavier elements than the first stars did." }
          },
          why: "Fusion in stars produces elements up to iron. Elements heavier than iron are produced in a supernova, and the explosion spreads them through the universe."
        }
      ]
    },

    /* ───────────── 3 · orbits ───────────── */
    {
      key: "orbits", n: 3, title: "Orbits: planets, moons and satellites",
      lead: "How gravity keeps planets, moons and artificial satellites moving in orbit, and why a closer orbit means a faster one.",
      covers: [3],
      pretext: {
        words: [
          { word: "orbit", means: "the curved path one object takes around another", sentence: "The Earth takes about 365 days to orbit the Sun once." },
          { word: "artificial satellite", means: "a satellite built by people and launched into orbit", sentence: "An artificial satellite sends television signals to dishes on houses." },
          { word: "period", means: "the time taken to go round an orbit once", sentence: "The Moon's period is about 27 days." },
          { word: "velocity", means: "speed in a given direction", sentence: "When the Moon changes direction, its velocity changes too." },
          { word: "centripetal force", means: "a force pulling an object towards the centre of a circle", sentence: "For a satellite, gravity is the centripetal force." }
        ],
        passage: [
          "An orbit is the path one object takes around another.",
          "The Earth orbits the Sun, and the Moon orbits the Earth.",
          "Gravity is the force that keeps them in orbit.",
          "A satellite is any object that orbits a larger object.",
          "The Moon is a natural satellite.",
          "People build artificial satellites and launch them into orbit.",
          "Gravity pulls a satellite towards the centre of its orbit.",
          "In a circular orbit, the satellite's speed stays the same.",
          "Its direction keeps changing, so its velocity keeps changing.",
          "A satellite in a closer orbit must move faster to stay in orbit.",
          "A satellite further away moves more slowly.",
          "The time for one orbit is called the period."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "المسار المنحني الذي يسلكه جسم حول جسم آخر (orbit)",
            "قمر صناعي يبنيه البشر ويُطلقونه في مدار (artificial satellite)",
            "الزمن اللازم لإتمام دورة واحدة في المدار (period)",
            "السرعة في اتجاه معيّن (velocity)",
            "قوة تشدّ الجسم نحو مركز الدائرة (centripetal force)"
          ],
          "passage": [
            "المدار (orbit) هو المسار الذي يسلكه جسم حول جسم آخر.",
            "تدور الأرض حول الشمس، ويدور القمر حول الأرض.",
            "الجاذبية هي القوة التي تُبقيها في مدارها.",
            "التابع (satellite) هو أي جسم يدور حول جسم أكبر.",
            "القمر تابع طبيعي.",
            "يبني البشر أقماراً صناعية (artificial satellites) ويُطلقونها في مدارات.",
            "تشدّ الجاذبية التابع نحو مركز مداره.",
            "في المدار الدائري، تبقى سرعة التابع ثابتة.",
            "لكن اتجاهه يتغيّر باستمرار، لذلك تتغيّر سرعته المتّجهة (velocity) باستمرار.",
            "التابع في مدار أقرب يجب أن يتحرك أسرع ليبقى في مداره.",
            "والتابع الأبعد يتحرك أبطأ.",
            "الزمن اللازم لدورة واحدة يُسمّى الدور (period)."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "zakrzywiona droga, którą jeden obiekt pokonuje wokół drugiego (orbit)",
            "satelita zbudowany przez ludzi i wystrzelony na orbitę (artificial satellite, sztuczny satelita)",
            "czas potrzebny na jedno okrążenie orbity (period, okres)",
            "szybkość w określonym kierunku (velocity, prędkość)",
            "siła ciągnąca obiekt do środka okręgu (centripetal force, siła dośrodkowa)"
          ],
          "passage": [
            "Orbita to droga, którą jeden obiekt pokonuje wokół drugiego.",
            "Ziemia krąży wokół Słońca, a Księżyc krąży wokół Ziemi.",
            "Grawitacja to siła, która utrzymuje je na orbicie.",
            "Satelita to każdy obiekt, który krąży wokół większego obiektu.",
            "Księżyc jest naturalnym satelitą.",
            "Ludzie budują sztuczne satelity i wystrzeliwują je na orbitę.",
            "Grawitacja ciągnie satelitę do środka jego orbity.",
            "Na orbicie kołowej szybkość satelity pozostaje taka sama.",
            "Jego kierunek ciągle się zmienia, więc jego prędkość (velocity) ciągle się zmienia.",
            "Satelita na bliższej orbicie musi poruszać się szybciej, żeby utrzymać się na orbicie.",
            "Satelita dalej od planety porusza się wolniej.",
            "Czas jednego okrążenia nazywa się okresem (period)."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o caminho curvo que um objeto faz em torno de outro (orbit, órbita)",
            "um satélite construído por pessoas e lançado para a órbita (artificial satellite, satélite artificial)",
            "o tempo que demora a dar uma volta completa na órbita (period, período)",
            "a rapidez numa certa direção (velocity, velocidade)",
            "uma força que puxa um objeto para o centro de um círculo (centripetal force, força centrípeta)"
          ],
          "passage": [
            "Uma órbita é o caminho que um objeto faz em torno de outro.",
            "A Terra orbita o Sol, e a Lua orbita a Terra.",
            "A gravidade é a força que os mantém em órbita.",
            "Um satélite é qualquer objeto que orbita um objeto maior.",
            "A Lua é um satélite natural.",
            "As pessoas constroem satélites artificiais e colocam esses satélites em órbita.",
            "A gravidade puxa um satélite para o centro da sua órbita.",
            "Numa órbita circular, a rapidez (speed) do satélite não muda.",
            "A direção do satélite muda o tempo inteiro, por isso a sua velocidade (velocity) também muda.",
            "Um satélite numa órbita mais próxima tem de andar mais rápido para ficar em órbita.",
            "Um satélite mais distante anda mais devagar.",
            "O tempo de uma volta completa tem o nome de período (period)."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "waddada qalloocan ee jir ku wareego jir kale (orbit)",
            "satellite dad sameeyeen oo hawada sare loo diray (artificial satellite)",
            "waqtiga ay qaadato in hal mar la wareego orbit (period)",
            "xawaare jiho gaar ah leh (velocity)",
            "xoog jir u jiida dhanka bartamaha goobo (centripetal force)"
          ],
          "passage": [
            "Orbit waa waddada jir ku wareego jir kale.",
            "Dhulku wuxuu ku wareegaa Qorraxda, Dayaxuna wuxuu ku wareegaa Dhulka.",
            "Cuf-isjiidadku (gravity) waa xoogga ku haya orbit-ka.",
            "Satellite waa jir kasta oo ku wareega jir ka weyn.",
            "Dayaxu waa satellite dabiici ah (natural satellite).",
            "Dadku waxay dhisaan dayax-gacmeedyo (artificial satellites) oo hawada sare u diraan si ay orbit ugu wareegaan.",
            "Cuf-isjiidadku satellite wuxuu u jiidaa dhanka bartamaha orbit-kiisa.",
            "Orbit goobaaban, xawaaraha satellite isku mid ayuu ahaanayaa.",
            "Jihadiisu waxay sii isbeddelaysaa, sidaas darteed velocity-giisuna wuu sii isbeddelayaa.",
            "Satellite orbit u dhow ku jira waa inuu si dhakhso leh u dhaqaaqaa si uu orbit-ka ugu sii jiro.",
            "Satellite ka fog si tartiib ah ayuu u dhaqaaqaa.",
            "Waqtiga hal wareeg qaato waxaa la yiraahdaa period."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "вигнутий шлях, яким один об’єкт рухається навколо іншого",
            "супутник, побудований людьми і запущений на орбіту",
            "час, за який об’єкт робить один оберт по орбіті",
            "швидкість у певному напрямку",
            "сила, яка тягне об’єкт до центра кола"
          ],
          "passage": [
            "Орбіта — це шлях, яким один об’єкт рухається навколо іншого.",
            "Земля обертається навколо Сонця, а Місяць — навколо Землі.",
            "Гравітація — це сила, яка утримує їх на орбіті.",
            "Супутник — це будь-який об’єкт, який обертається навколо більшого об’єкта.",
            "Місяць — це природний супутник.",
            "Люди будують штучні супутники і запускають їх на орбіту.",
            "Гравітація тягне супутник до центра його орбіти.",
            "На круговій орбіті швидкість супутника залишається незмінною.",
            "Його напрямок весь час змінюється, тому його швидкість як вектор (velocity) весь час змінюється.",
            "Супутник на ближчій орбіті має рухатися швидше, щоб залишатися на орбіті.",
            "Супутник, що далі, рухається повільніше.",
            "Час одного оберту називається періодом (period)."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ خم دار راستہ جو ایک چیز دوسری کے گرد لیتی ہے (orbit)",
            "انسانوں کا بنایا ہوا سیٹلائٹ جو مدار میں بھیجا گیا ہو (artificial satellite)",
            "ایک مدار کا پورا چکر لگانے میں لگنے والا وقت (period)",
            "کسی خاص سمت میں رفتار (velocity)",
            "وہ قوت جو کسی چیز کو دائرے کے مرکز کی طرف کھینچتی ہے (centripetal force)"
          ],
          "passage": [
            "مدار (orbit) وہ راستہ ہے جو ایک چیز دوسری کے گرد لیتی ہے۔",
            "زمین سورج کے گرد چکر لگاتی ہے، اور چاند زمین کے گرد۔",
            "کششِ ثقل وہ قوت ہے جو انھیں مدار میں رکھتی ہے۔",
            "سیٹلائٹ کوئی بھی ایسی چیز ہے جو کسی بڑی چیز کے گرد چکر لگاتی ہے۔",
            "چاند ایک قدرتی سیٹلائٹ (natural satellite) ہے۔",
            "لوگ مصنوعی سیٹلائٹ (artificial satellites) بناتے ہیں اور انھیں مدار میں بھیجتے ہیں۔",
            "کششِ ثقل سیٹلائٹ کو اس کے مدار کے مرکز کی طرف کھینچتی ہے۔",
            "دائرے والے مدار میں سیٹلائٹ کی رفتار (speed) ایک جیسی رہتی ہے۔",
            "اس کی سمت بدلتی رہتی ہے، اس لیے اس کی velocity بدلتی رہتی ہے۔",
            "قریبی مدار والے سیٹلائٹ کو مدار میں رہنے کے لیے زیادہ تیز چلنا پڑتا ہے۔",
            "دور والا سیٹلائٹ زیادہ آہستہ چلتا ہے۔",
            "ایک چکر کے وقت کو period کہتے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Gravity holds every orbit",
          paragraphs: [
            "Gravity provides the force that keeps planets and satellites in their orbits. The Sun's gravity keeps the planets moving round the Sun. The Earth's gravity keeps the Moon, and every artificial satellite, moving round the Earth. Most of these orbits are very close to circles.",
            "Planets, moons and artificial satellites have a lot in common. They all orbit a larger body, and gravity keeps every one of them in orbit. The differences are in what they orbit and where they came from: planets orbit the Sun, moons are natural satellites that orbit planets, and artificial satellites are built by people.",
            "Artificial satellites do jobs for us: communications, weather forecasting, satellite navigation and observing the Earth or space. A geostationary satellite orbits above the equator once every 24 hours, so it stays above the same point on the Earth. That is why a satellite dish can point at one spot in the sky."
          ],
          tip: "Astronauts on the space station feel weightless because they are in free fall. Gravity still pulls on them: they and the station are falling around the Earth together."
        },
        {
          heading: "Changing velocity, steady speed (Higher)",
          paragraphs: [
            "Imagine a hammer thrower spinning a hammer on a wire. The wire pulls the hammer inwards, towards the thrower. If the wire snapped, the hammer would fly off in a straight line. For a satellite, gravity does the job of the wire.",
            "In a circular orbit, gravity always pulls towards the centre of the circle. This force is at right angles to the direction the satellite is moving. So it changes the satellite's direction, but not its speed.",
            "Velocity is speed in a given direction. Because the direction keeps changing, the velocity keeps changing, even though the speed stays the same. A change in velocity is an acceleration, so an orbiting satellite is always accelerating towards the centre of its orbit."
          ],
          tip: "Speed is a scalar (size only). Velocity is a vector (size and direction). A satellite in a circular orbit has a constant speed but a changing velocity."
        },
        {
          heading: "Closer means faster (Higher)",
          paragraphs: [
            "Gravity gets weaker the further you go from the Earth. A satellite in a close orbit feels a strong pull, so it must move fast to stay in that orbit. A satellite further away feels a weaker pull, and moves more slowly.",
            "This means that for a stable orbit, speed and radius go together. If a satellite's speed changes, the radius of its orbit must change too. A smaller orbit needs a higher speed.",
            "A satellite further out also has further to travel and moves more slowly, so it takes longer to go round. Its period is longer. The same is true of the planets: Jupiter takes about 4 300 days to orbit the Sun, and Neptune about 60 000 days."
          ],
          worked: {
            q: "The Moon orbits about 384 000 km from the centre of the Earth. One orbit takes about 27.3 days. Estimate the Moon's orbital speed in m/s. (Distance round a circle = 2 × π × radius.)",
            steps: [
              "Convert to SI units: 384 000 km = 384 000 000 m; 27.3 days = 27.3 × 24 × 60 × 60 = 2 358 720 s.",
              "Distance travelled in one orbit = 2 × π × 384 000 000 m ≈ 2 413 000 000 m.",
              "Speed = distance ÷ time = 2 413 000 000 ÷ 2 358 720.",
              "Speed ≈ 1 020 m/s, which is about 1 km/s."
            ],
            answer: "about 1 020 m/s (about 1 km/s)",
            checks: [{ expr: "2*pi*384000e3/(27.3*86400)", value: 1023, tol: 3 }]
          }
        }
      ],
      gate: [
        { kind: "mcq", q: "Which force keeps the Moon in orbit around the Earth?", options: ["Gravity", "Friction", "Magnetism", "Air resistance"], answer: 0, why: "Gravity provides the force that keeps planets and satellites in their orbits. There is no air in space to give air resistance.",
          feedback: [
            "",
            "Friction needs surfaces rubbing together, and there is nothing for the Moon to rub against in space. Gravity provides the force that keeps it in orbit.",
            "The Earth does have a magnetic field, but the Moon is not a magnet and the field is far too weak to hold it. Gravity keeps the Moon in orbit.",
            "There is no air between the Earth and the Moon, so there is no air resistance. Gravity is the force that keeps the Moon in orbit."
          ] },
        { kind: "gap", q: "The time a satellite takes to make one complete orbit is called its ___.", answer: "period", options: ["period", "velocity", "radius"], why: "The period is the time for one orbit. The Earth's period around the Sun is about 365 days.",
          feedback: {
            "velocity": "Velocity is the satellite's speed in a given direction; it is not a time. The time for one complete orbit is the period.",
            "radius": "The radius is the distance from the centre of the orbit to the satellite; it is not a time. The time for one complete orbit is the period."
          } },
        { kind: "mcq", q: "In which direction does gravity pull a satellite in a circular orbit?", options: ["Towards the centre of the orbit", "Forwards, in the direction it is moving", "Outwards, away from the planet", "Backwards, against its motion"], answer: 0, why: "Gravity pulls the satellite towards the centre of the planet, which is the centre of the circular orbit.",
          feedback: [
            "",
            "A forward pull would make the satellite speed up, but in a circular orbit the speed stays the same. Gravity pulls towards the planet, which is the centre of the orbit, and changes only the direction.",
            "Nothing pushes a satellite away from the Earth: there is no outward force on it. The pull is inwards, towards the centre, and that is what bends the path into a circle. The feeling of being 'flung outwards' is really the satellite's tendency to carry on in a straight line.",
            "A backward pull would slow the satellite down, but in a circular orbit the speed stays the same. Gravity pulls at right angles to the motion, towards the centre."
          ] }
      ],
      modules: [
        {
          title: "Steady speed, changing velocity (Higher)",
          task: {
            kind: "mcq",
            q: "A satellite moves in a circular orbit at a steady speed. Which statement is correct?",
            options: [
              "Its velocity is changing because its direction is changing",
              "Its velocity is constant because its speed is constant",
              "There is no resultant force on it",
              "It is not accelerating"
            ],
            answer: 0,
            feedback: [
              "",
              "Velocity includes direction, and the direction of motion changes all the way round a circle. So the speed is constant but the velocity is not.",
              "There is a resultant force: gravity, pulling the satellite towards the centre. Gravity does not stop acting in orbit; without it the satellite would move off in a straight line.",
              "The satellite is accelerating, because its velocity (its direction) is changing even though its speed is not. The acceleration is towards the centre of the orbit."
            ]
          },
          contexts: [
            { label: "The space station", q: "The International Space Station circles the Earth at a steady speed of about 7.7 km/s, once every 90 minutes or so. Which statement is correct?" },
            { label: "The Moon", q: "The Moon moves round the Earth in a near-circular orbit at a steady speed of about 1 km/s. Which statement is correct?" },
            { label: "A weather satellite", q: "A geostationary weather satellite circles the Earth above the equator at a steady speed of about 3.1 km/s. Which statement is correct?" }
          ],
          explain: "Say, in one sentence, how the velocity of a satellite can change while its speed stays the same.",
          levels: {
            support: {
              steps: [
                "Recall: speed is how fast; velocity is how fast AND which way.",
                "In a circle, which way the satellite is moving changes all the time.",
                "So which of speed or velocity is changing?",
                "A changing velocity means the satellite is accelerating, so there must be a resultant force: gravity."
              ],
              example: {
                q: "A car drives round a roundabout at a steady 20 mph. Is its velocity constant?",
                steps: ["Its speed stays at 20 mph.", "Its direction changes as it goes round.", "Velocity includes direction, so the velocity changes."],
                answer: "No: its speed is constant, but its velocity changes because its direction changes."
              }
            },
            core: { hint: "Velocity is a vector. What happens to the direction of motion in a circle?" },
            stretch: { extend: "Explain why gravity can change the satellite's velocity without changing its speed. Use the direction of the force compared with the direction of motion." }
          },
          why: "Gravity acts towards the centre, at right angles to the motion. It changes the direction, so the velocity changes, but the speed stays the same. The satellite is accelerating towards the centre."
        },
        {
          title: "Closer orbit, faster satellite (Higher)",
          task: {
            kind: "mcq",
            q: "A satellite is moved into a new stable orbit closer to the Earth. What must happen to its speed?",
            options: ["It must increase", "It must decrease", "It must stay the same", "It must fall to zero"],
            answer: 0,
            feedback: [
              "",
              "It feels as if a lower orbit should be a slower one, but it is the other way round. Closer to the Earth gravity is stronger, so a satellite there must move faster to stay in a stable orbit. The outer planets are the slow ones.",
              "The speed cannot stay the same: for a stable orbit, speed and radius go together, so changing the radius means changing the speed. A satellite needs no fuel to keep orbiting, but it does need the right speed for its radius.",
              "A satellite with no speed would simply fall straight down to the Earth. It stays in orbit because it is moving sideways fast enough, and closer in it must move even faster."
            ]
          },
          contexts: [
            { label: "The space station", q: "Drag from the very thin air at its height slowly lowers the orbit of the International Space Station. If the station settles into a lower stable orbit, what must happen to its speed?" },
            { label: "The Moon", q: "Suppose the Moon moved into a stable orbit closer to the Earth than its orbit today. What must happen to its orbital speed?" },
            { label: "A weather satellite", q: "A geostationary weather satellite, about 42 000 km from the centre of the Earth, is moved to a stable orbit closer to the Earth. What must happen to its speed?" }
          ],
          explain: "Say, in one sentence, why a closer orbit needs a higher speed.",
          levels: {
            support: {
              steps: [
                "Closer to the Earth, the pull of gravity is stronger.",
                "A stronger pull would drag a slow satellite down towards the Earth.",
                "To stay in a stable orbit with a stronger pull, the satellite must move faster.",
                "So: smaller radius, higher speed."
              ],
              example: {
                q: "The International Space Station orbits about 6 770 km from the centre of the Earth and goes round once every 5 550 s. A geostationary satellite orbits about 42 200 km from the centre and goes round once every 86 400 s. Use speed = distance ÷ time to show which one moves faster.",
                steps: [
                  "Space station: distance = 2 × π × 6 770 000 m ≈ 42 540 000 m; speed ≈ 42 540 000 ÷ 5 550 ≈ 7 660 m/s.",
                  "Geostationary satellite: distance = 2 × π × 42 200 000 m ≈ 265 150 000 m; speed ≈ 265 150 000 ÷ 86 400 ≈ 3 070 m/s.",
                  "The space station is much closer to the Earth, and it moves more than twice as fast."
                ],
                answer: "Space station about 7 700 m/s; geostationary satellite about 3 100 m/s. The closer satellite moves faster.",
                checks: [
                  { expr: "2*pi*6770e3/5550", value: 7664, tol: 5 },
                  { expr: "2*pi*42200e3/86400", value: 3069, tol: 5 }
                ]
              }
            },
            core: { hint: "Gravity is stronger closer to the Earth. What speed does a satellite need to keep from falling inwards?" },
            stretch: { extend: "Explain what would happen to the satellite's period in the new, closer orbit, and why." }
          },
          why: "For a stable orbit, if the radius changes the speed must change. Closer to the Earth gravity is stronger, so the satellite must move faster to stay in orbit."
        },
        {
          title: "Planets, moons and artificial satellites",
          task: {
            kind: "match",
            q: "Match each orbiting object to the correct description.",
            pairs: [
              ["Planet", "A large body that orbits the Sun"],
              ["Moon", "A natural satellite that orbits a planet"],
              ["Artificial satellite", "Built by people and launched into orbit"],
              ["Geostationary satellite", "Orbits once every 24 hours above the equator, so it stays over one point"]
            ]
          },
          levels: {
            support: {
              steps: [
                "For each object, ask: what does it orbit?",
                "Then ask: was it made by people, or is it natural?",
                "Use the clue '24 hours': the Earth spins once in 24 hours.",
                "Match the one you are surest of first."
              ],
              example: {
                q: "Match: Earth, the Hubble Space Telescope. Choices: a natural body that orbits the Sun; a telescope built by people that orbits the Earth.",
                steps: ["Earth is natural and orbits the Sun: it is a planet.", "The Hubble Space Telescope was built and launched by people: it is an artificial satellite of the Earth."],
                answer: "Earth: a natural body that orbits the Sun. Hubble: a telescope built by people that orbits the Earth."
              }
            },
            core: { hint: "Planets orbit the Sun; moons orbit planets; anything built by people is artificial." },
            stretch: { extend: "Give one similarity and two differences between the Moon and a geostationary satellite." }
          },
          explain: "Say, in one sentence, what every planet, moon and artificial satellite has in common.",
          why: "All of them are kept in orbit by gravity. Planets orbit the Sun; moons are natural satellites of planets; artificial satellites are made by people; a geostationary satellite has a 24-hour period, matching the Earth's spin."
        }
      ]
    },

    /* ───────────── 4 · red-shift ───────────── */
    {
      key: "red-shift", n: 4, title: "Red-shift and the expanding universe",
      lead: "How stretched light from distant galaxies shows that space is expanding, why this supports the Big Bang theory, and what scientists still cannot explain.",
      covers: [4, 5],
      pretext: {
        words: [
          { word: "galaxy", means: "a huge group of billions of stars held together by gravity", sentence: "Our galaxy, the Milky Way, is about 100 000 light years across." },
          { word: "wavelength", means: "the distance from one wave to the next", sentence: "Red light has a longer wavelength than blue light." },
          { word: "red-shift", means: "an increase in the wavelength of light from a galaxy moving away", sentence: "The light from that distant galaxy shows a large red-shift." },
          { word: "Big Bang theory", means: "the idea that the universe began very small, hot and dense, and has expanded since", sentence: "Red-shift is evidence that supports the Big Bang theory." },
          { word: "dark matter", means: "matter scientists think is there, from its gravity, but cannot see", sentence: "No one yet knows what dark matter is made of." },
          { word: "dark energy", means: "the unknown cause of the universe expanding ever faster", sentence: "Dark energy is one of the biggest puzzles in physics." }
        ],
        passage: [
          "A galaxy is a huge group of billions of stars.",
          "Light from a galaxy has a pattern of dark lines in its spectrum.",
          "In light from distant galaxies, these lines are shifted towards the red end.",
          "This means the wavelength of the light has increased.",
          "We call this red-shift.",
          "Red-shift shows that the galaxy is moving away from us.",
          "The further away a galaxy is, the bigger its red-shift.",
          "So more distant galaxies are moving away faster.",
          "This tells us that space itself is expanding.",
          "It supports the Big Bang theory.",
          "The universe began from a very small region that was extremely hot and dense.",
          "Since 1998, observations of supernovae suggest distant galaxies are moving away ever faster.",
          "Scientists still do not understand dark matter and dark energy."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "مجموعة ضخمة من مليارات النجوم تربطها الجاذبية معاً (galaxy)",
            "المسافة من موجة إلى الموجة التالية (wavelength)",
            "زيادة في الطول الموجي للضوء الآتي من مجرّة تبتعد عنا (red-shift)",
            "فكرة أن الكون بدأ صغيراً جداً وساخناً وكثيفاً، ثم ظل يتمدّد منذ ذلك الحين (Big Bang theory)",
            "مادة يعتقد العلماء بوجودها بسبب جاذبيتها، لكنهم لا يستطيعون رؤيتها (dark matter)",
            "السبب غير المعروف لتمدّد الكون بسرعة متزايدة (dark energy)"
          ],
          "passage": [
            "المجرّة (galaxy) مجموعة ضخمة من مليارات النجوم.",
            "الضوء الآتي من مجرّة فيه نمط من الخطوط الداكنة في طيفه.",
            "في الضوء الآتي من المجرّات البعيدة، تنزاح هذه الخطوط نحو الطرف الأحمر.",
            "هذا يعني أن الطول الموجي للضوء قد زاد.",
            "نسمّي هذا الانزياح الأحمر (red-shift).",
            "يُبيّن الانزياح الأحمر أن المجرّة تبتعد عنا.",
            "كلما كانت المجرّة أبعد، كان انزياحها الأحمر أكبر.",
            "إذن المجرّات الأبعد تبتعد بسرعة أكبر.",
            "هذا يخبرنا أن الفضاء نفسه يتمدّد.",
            "وهو يدعم نظرية الانفجار العظيم (Big Bang theory).",
            "بدأ الكون من منطقة صغيرة جداً كانت شديدة الحرارة والكثافة.",
            "منذ عام 1998، تشير مشاهدات المستعرات العظمى (supernovae) إلى أن المجرّات البعيدة تبتعد بسرعة متزايدة.",
            "ما زال العلماء لا يفهمون المادة المظلمة (dark matter) والطاقة المظلمة (dark energy)."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "ogromna grupa miliardów gwiazd, które trzyma razem grawitacja (galaxy, galaktyka)",
            "odległość od jednej fali do następnej (wavelength, długość fali)",
            "wzrost długości fali światła z galaktyki, która się oddala (red-shift, przesunięcie ku czerwieni)",
            "pogląd, że Wszechświat zaczął się bardzo mały, gorący i gęsty i od tego czasu się rozszerza (Big Bang theory, teoria Wielkiego Wybuchu)",
            "materia, o której naukowcy sądzą, że istnieje, bo widać jej grawitację, ale której nie widzą (dark matter, ciemna materia)",
            "nieznana przyczyna tego, że Wszechświat rozszerza się coraz szybciej (dark energy, ciemna energia)"
          ],
          "passage": [
            "Galaktyka to ogromna grupa miliardów gwiazd.",
            "Światło z galaktyki ma w swoim widmie wzór ciemnych linii.",
            "W świetle z dalekich galaktyk te linie są przesunięte w stronę czerwonego końca.",
            "To znaczy, że długość fali światła wzrosła.",
            "Nazywamy to przesunięciem ku czerwieni (red-shift).",
            "Przesunięcie ku czerwieni pokazuje, że galaktyka się od nas oddala.",
            "Im dalej jest galaktyka, tym większe jest jej przesunięcie ku czerwieni.",
            "Więc dalsze galaktyki oddalają się szybciej.",
            "To mówi nam, że sama przestrzeń się rozszerza.",
            "To wspiera teorię Wielkiego Wybuchu (Big Bang).",
            "Wszechświat zaczął się od bardzo małego obszaru, który był niezwykle gorący i gęsty.",
            "Od 1998 roku obserwacje supernowych sugerują, że dalekie galaktyki oddalają się coraz szybciej.",
            "Naukowcy nadal nie rozumieją ciemnej materii i ciemnej energii."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um grupo enorme de milhares de milhões de estrelas unidas pela gravidade (galaxy, galáxia)",
            "a distância entre uma onda e a seguinte (wavelength, comprimento de onda)",
            "um aumento no comprimento de onda da luz de uma galáxia que se afasta (red-shift, desvio para o vermelho)",
            "a ideia de que o universo começou muito pequeno, quente e denso, e desde então tem estado em expansão (Big Bang theory, teoria do Big Bang)",
            "matéria que os cientistas pensam existir, por causa da sua gravidade, mas que não conseguem ver (dark matter, matéria escura)",
            "a causa desconhecida de o universo expandir cada vez mais rápido (dark energy, energia escura)"
          ],
          "passage": [
            "Uma galáxia é um grupo enorme de milhares de milhões de estrelas.",
            "A luz de uma galáxia, separada nas suas cores (o seu spectrum), tem um padrão de linhas escuras.",
            "Na luz de galáxias distantes, essas linhas estão deslocadas para o lado vermelho.",
            "Isso significa que o comprimento de onda da luz aumentou.",
            "Isso tem o nome de desvio para o vermelho (red-shift).",
            "O desvio para o vermelho mostra que a galáxia se afasta de nós.",
            "Quanto mais distante está uma galáxia, maior é o seu desvio para o vermelho.",
            "Por isso, as galáxias mais distantes afastam-se mais rápido.",
            "Isso mostra que o próprio espaço está em expansão.",
            "Isso apoia a teoria do Big Bang.",
            "O universo começou a partir de uma região muito pequena, extremamente quente e densa.",
            "Desde 1998, observações de supernovas sugerem que as galáxias distantes se afastam cada vez mais rápido.",
            "Os cientistas ainda não entendem a matéria escura nem a energia escura."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "koox aad u weyn oo balaayiin xiddigood ah oo cuf-isjiidad isku haya (galaxy)",
            "masaafada u dhexeysa hir iyo kan ku xiga (wavelength)",
            "kororka wavelength-ka iftiinka ka imaanaya galaxy sii fogaanaysa (red-shift)",
            "fikradda ah in koonku bilaabmay isagoo aad u yar, kulul oo cufan, oo tan iyo markaas sii fidayo (Big Bang theory)",
            "maaddo saynisyahannadu u malaynayaan inay jirto, cuf-isjiidadkeeda dartiis, laakiin aan arki karin (dark matter)",
            "sababta aan la garanayn ee koonku si sii dhakhso badan u fidayo (dark energy)"
          ],
          "passage": [
            "Galaxy waa koox aad u weyn oo balaayiin xiddigood ah.",
            "Iftiinka galaxy ka imaanaya wuxuu leeyahay hannaan xariiqo madow oo spectrum-kiisa ku jira.",
            "Iftiinka ka imaanaya galaxies-ka fog, xariiqadaas waxay u wareegaan dhanka casaanka.",
            "Tan macnaheedu waa wavelength-ka iftiinka wuu kordhay.",
            "Tan waxaan ugu yeedhnaa red-shift (u-wareegidda casaanka).",
            "Red-shift wuxuu muujinayaa in galaxy-du naga sii fogaanayso.",
            "Inta galaxy ka sii fog tahay, red-shift-keeda ayaa sii weynaata.",
            "Sidaas darteed galaxies-ka ka sii fog si dhakhso badan ayay u sii fogaanayaan.",
            "Tan waxay inoo sheegaysaa in hawada sare lafteeda sii fidayso.",
            "Tani waxay taageeraysaa aragtida la yiraahdo Big Bang theory.",
            "Koonku wuxuu ka bilaabmay goob aad u yar oo aad u kulul oo cufan ahayd.",
            "Tan iyo 1998, daawashada supernovae waxay tilmaamaysaa in galaxies-ka fog si sii dhakhso badan u sii fogaanayaan.",
            "Saynisyahannadu weli ma fahmin dark matter iyo dark energy."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "величезна група з мільярдів зір, які утримує разом гравітація",
            "відстань від однієї хвилі до наступної",
            "збільшення довжини хвилі світла від галактики, яка віддаляється",
            "ідея, що Всесвіт почався дуже малим, гарячим і щільним, і з того часу розширюється",
            "речовина, про існування якої науковці здогадуються за її гравітацією, але не можуть побачити",
            "невідома причина того, що Всесвіт розширюється дедалі швидше"
          ],
          "passage": [
            "Галактика — це величезна група з мільярдів зір.",
            "Світло від галактики має візерунок темних ліній у своєму спектрі.",
            "У світлі від далеких галактик ці лінії зміщені до червоного кінця спектра.",
            "Це означає, що довжина хвилі світла збільшилася.",
            "Ми називаємо це червоним зміщенням (red-shift).",
            "Червоне зміщення показує, що галактика віддаляється від нас.",
            "Чим далі галактика, тим більше її червоне зміщення.",
            "Отже, більш далекі галактики віддаляються швидше.",
            "Це говорить нам, що сам космос розширюється.",
            "Це підтверджує теорію Великого вибуху (Big Bang theory).",
            "Всесвіт почався з дуже малої області, яка була надзвичайно гарячою і щільною.",
            "З 1998 року спостереження наднових показують, що далекі галактики віддаляються дедалі швидше.",
            "Науковці досі не розуміють темну матерію і темну енергію."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "اربوں ستاروں کا ایک بہت بڑا گروہ جسے کششِ ثقل جوڑے رکھتی ہے (galaxy)",
            "ایک لہر سے اگلی لہر تک کا فاصلہ (wavelength)",
            "دور جاتی ہوئی کہکشاں کی روشنی کی wavelength میں اضافہ (red-shift)",
            "یہ نظریہ کہ کائنات بہت چھوٹی، گرم اور گھنی شروع ہوئی اور تب سے پھیل رہی ہے (Big Bang theory)",
            "ایسا مادہ جس کے بارے میں سائنس دان اس کی کششِ ثقل سے سمجھتے ہیں کہ وہ موجود ہے، مگر دیکھ نہیں سکتے (dark matter)",
            "کائنات کے مسلسل تیزی سے پھیلنے کی نامعلوم وجہ (dark energy)"
          ],
          "passage": [
            "کہکشاں (galaxy) اربوں ستاروں کا ایک بہت بڑا گروہ ہے۔",
            "کہکشاں کی روشنی کے spectrum میں سیاہ لکیروں کا ایک پیٹرن ہوتا ہے۔",
            "دور کی کہکشاؤں کی روشنی میں یہ لکیریں سرخ سرے کی طرف ہٹی ہوتی ہیں۔",
            "اس کا مطلب ہے کہ روشنی کی wavelength بڑھ گئی ہے۔",
            "ہم اسے red-shift کہتے ہیں۔",
            "red-shift دکھاتا ہے کہ کہکشاں ہم سے دور جا رہی ہے۔",
            "کہکشاں جتنی دور ہو، اس کا red-shift اتنا ہی زیادہ ہوتا ہے۔",
            "اس لیے زیادہ دور کی کہکشائیں زیادہ تیزی سے دور جا رہی ہیں۔",
            "یہ ہمیں بتاتا ہے کہ خلا خود پھیل رہی ہے۔",
            "یہ Big Bang theory کی تائید کرتا ہے۔",
            "کائنات ایک بہت چھوٹے خطے سے شروع ہوئی جو بے حد گرم اور گھنا تھا۔",
            "1998 سے supernovae کے مشاہدے بتاتے ہیں کہ دور کی کہکشائیں مسلسل تیز ہوتی رفتار سے دور جا رہی ہیں۔",
            "سائنس دان ابھی تک dark matter اور dark energy کو نہیں سمجھ پائے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Stretched light: what red-shift means",
          paragraphs: [
            "You have heard a siren change pitch as an ambulance races past. As it moves away, the sound waves reaching you are stretched out, so the pitch sounds lower. Light from a source that is moving away from you is stretched in the same way: its wavelength gets longer.",
            "When light from a galaxy is split into a spectrum, it shows a pattern of dark lines. For light from most distant galaxies, this whole pattern is shifted towards the red end of the spectrum, the end with the longest wavelengths.",
            "This observed increase in the wavelength of light is called red-shift. It shows that the galaxy is moving away from us. The pattern of lines is the same; it has simply moved along."
          ],
          tip: "Red-shift does not mean the galaxy looks red. It means the wavelength of its light has increased, so its spectral lines have moved towards the red end."
        },
        {
          heading: "Further away, faster away",
          paragraphs: [
            "In the 1920s, the astronomer Edwin Hubble measured the light from many galaxies. Almost all of them showed red-shift, so almost all were moving away from us.",
            "The further away a galaxy is, the bigger its red-shift. So the more distant galaxies are moving away faster than nearer ones. This change of each galaxy's speed with distance is evidence that space itself, the universe, is expanding.",
            "It is not that we are at the centre. If space is stretching everywhere, an observer in any galaxy would see the other galaxies moving away from them."
          ],
          worked: {
            q: "Galaxy A has a bigger red-shift than galaxy B. What can you say about galaxy A compared with galaxy B?",
            steps: [
              "Bigger red-shift means a bigger increase in wavelength.",
              "A bigger increase in wavelength means the galaxy is moving away faster.",
              "Galaxies that are moving away faster are further away."
            ],
            answer: "Galaxy A is moving away from us faster than galaxy B, and it is further away."
          }
        },
        {
          heading: "The Big Bang, and what we still do not know",
          paragraphs: [
            "If the universe is expanding now, then in the past everything was much closer together. Running the expansion backwards leads to the Big Bang theory: the universe began from a very small region that was extremely hot and dense, and has been expanding ever since, for about 13.8 billion years.",
            "Science moves on as new observations are made. Since 1998, observations of distant supernovae suggest that distant galaxies are moving away ever faster, so the expansion is speeding up. This is how scientists build theories: they collect observations, look for patterns and test explanations against new data.",
            "There is still much about the universe that is not understood. Galaxies seem to have far more mass than we can see, which scientists call dark matter (AQA calls it 'dark mass'). The unknown cause of the expansion speeding up is called dark energy. No one yet knows what either of them is."
          ],
          tip: "Avoid calling the Big Bang an explosion in empty space. Say the universe began from a very small, extremely hot and dense region, and space itself has been expanding ever since."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is red-shift?", options: ["An increase in the wavelength of light from a galaxy moving away from us", "A decrease in the wavelength of light from a galaxy moving away from us", "Light from a star turning red as the star cools", "Light bending as it passes a black hole"], answer: 0, why: "Red-shift is the observed increase in wavelength of light from galaxies that are moving away.",
          feedback: [
            "",
            "A decrease in wavelength would be a shift towards the blue end of the spectrum. Light from a galaxy moving away is stretched, so its wavelength increases.",
            "Red-shift is not about a galaxy's colour or temperature: a red-shifted galaxy does not look red. It is a shift of the dark spectral lines towards longer wavelengths, caused by the galaxy moving away.",
            "Light bending near a very massive object is a different effect, not red-shift. Red-shift is an increase in the wavelength of light from a galaxy moving away."
          ] },
        { kind: "gap", q: "The further away a galaxy is, the ___ it is moving away from us.", answer: "faster", options: ["faster", "slower", "more steadily"], why: "More distant galaxies have bigger red-shifts, so they are moving away faster.",
          feedback: {
            "slower": "The pattern is the other way round: more distant galaxies have bigger red-shifts, so they are moving away faster. That is the evidence that space itself is expanding.",
            "more steadily": "Red-shift tells us about speed, not about steadiness. The further away a galaxy is, the bigger its red-shift, so the faster it is moving away."
          } },
        { kind: "mcq", q: "According to the Big Bang theory, how did the universe begin?", options: ["From a very small region that was extremely hot and dense", "From a cold, empty space that slowly filled with stars", "From a cloud of dust and gas around the Sun", "From the supernova of a single giant star"], answer: 0, why: "The Big Bang theory suggests the universe began from a very small region that was extremely hot and dense.",
          feedback: [
            "",
            "The early universe was extremely hot and dense, not cold and empty, and space itself has been expanding since. Stars formed later, from the expanding, cooling matter.",
            "That describes how our solar system formed, from a nebula, long after the universe began. The universe is far older and far bigger; the Big Bang theory says it began from a very small, extremely hot and dense region.",
            "A supernova is the explosion of one star inside space that already exists. The Big Bang was not something exploding into empty space: space itself began very small, hot and dense and has expanded ever since."
          ] }
      ],
      modules: [
        {
          title: "From observation to conclusion",
          task: {
            kind: "match",
            q: "Match each observation to what it tells scientists.",
            pairs: [
              ["Light from distant galaxies is red-shifted", "Those galaxies are moving away from us"],
              ["More distant galaxies show bigger red-shifts", "Space itself is expanding"],
              ["Supernovae observed since 1998", "Distant galaxies are moving away ever faster"],
              ["The expansion is traced backwards in time", "The universe began from a very small, hot, dense region"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read each observation and ask: what is being measured?",
                "Red-shift on its own tells you about direction: moving away.",
                "Red-shift that grows with distance tells you about the whole universe: expanding.",
                "Going backwards in time from an expanding universe leads to its beginning."
              ],
              example: {
                q: "An ambulance siren sounds lower in pitch than normal. What does this tell you?",
                steps: ["A lower pitch means the sound waves reaching you are stretched.", "Waves are stretched when the source moves away from you."],
                answer: "The ambulance is moving away from you."
              }
            },
            core: { hint: "One pair is about one galaxy, one is about all of space, one is about speeding up, and one is about the beginning." },
            stretch: { extend: "Explain why the observation that red-shift increases with distance is stronger evidence for an expanding universe than red-shift alone." }
          },
          explain: "Say, in one sentence, why red-shift that grows with distance points to an expanding universe.",
          why: "Red-shift shows galaxies are receding; bigger red-shift with distance shows space is expanding; supernova data since 1998 suggest the expansion is speeding up; tracing it back supports the Big Bang."
        },
        {
          title: "Comparing two galaxies",
          task: {
            kind: "gap",
            q: "Galaxy X is much further away than galaxy Y. The red-shift of light from galaxy X will be ___ than the red-shift of light from galaxy Y.",
            answer: "bigger",
            options: ["bigger", "smaller", "bluer"],
            feedback: {
              "smaller": "Further away means moving away faster, which stretches the light more, so the red-shift is bigger, not smaller.",
              "bluer": "A shift towards the blue would mean the galaxy was moving towards us. Almost all distant galaxies are moving away, and the more distant one is stretched more, so its red-shift is bigger."
            }
          },
          contexts: [
            { label: "Galaxies A and B", q: "Galaxy A is about three times as far from us as galaxy B. The red-shift of light from galaxy A will be ___ than the red-shift of light from galaxy B." },
            { label: "Galaxies C and D", q: "Astronomers find that galaxy C is moving away from us faster than galaxy D. The red-shift of light from galaxy C will be ___ than the red-shift of light from galaxy D." }
          ],
          explain: "Say, in one sentence, the chain of reasoning from 'further away' to 'bigger red-shift'.",
          levels: {
            support: {
              steps: [
                "Recall the pattern: further away means moving away faster.",
                "Moving away faster means the light is stretched more.",
                "Light stretched more means a bigger increase in wavelength, which is a bigger red-shift."
              ],
              example: {
                q: "Galaxy P is moving away faster than galaxy Q. Which galaxy shows the smaller red-shift?",
                steps: ["Faster away means a bigger red-shift.", "Q is moving away more slowly, so its red-shift is smaller."],
                answer: "Galaxy Q"
              }
            },
            core: { hint: "Further away means faster away. What does faster away do to the stretching of the light?" },
            stretch: { extend: "Explain how measurements like these, for thousands of galaxies, led scientists to the idea that the universe is expanding." }
          },
          why: "The further away a galaxy is, the faster it is moving away and the bigger the observed increase in wavelength, so galaxy X shows the bigger red-shift."
        },
        {
          title: "What we still do not understand",
          task: {
            kind: "mcq",
            q: "Which statement about dark matter and dark energy is correct?",
            options: [
              "They are names for things scientists have evidence for but do not yet understand",
              "Dark matter is the dust left behind by supernovae",
              "Dark energy is the energy given out by fusion in stars",
              "Scientists fully understand both and use them to power satellites"
            ],
            answer: 0,
            feedback: [
              "",
              "Dust from supernovae can be seen and is ordinary matter. Dark matter is called 'dark' because it cannot be seen at all: scientists know it is there only from its gravity, and do not yet know what it is.",
              "Fusion energy is well understood and comes from stars. Dark energy is the name for the unknown cause of the universe's expansion speeding up.",
              "Satellites are powered by solar panels and batteries, not by dark energy. Neither dark matter nor dark energy is yet understood; they are names for observations science cannot yet explain."
            ]
          },
          explain: "Say, in one sentence, what the word 'dark' means in dark matter and dark energy.",
          levels: {
            support: {
              steps: [
                "Remember the spec's point: there is still much about the universe that is not understood.",
                "Dark matter: galaxies behave as if they have far more mass than we can see.",
                "Dark energy: something is making the expansion speed up, and no one knows what.",
                "Look for the option that says scientists do not yet understand them."
              ],
              example: {
                q: "Before 1998, many scientists expected the expansion of the universe to be slowing down. What changed their minds?",
                steps: ["New observations were made of distant supernovae.", "They suggested distant galaxies are moving away ever faster.", "Scientists changed their ideas to fit the new evidence."],
                answer: "Observations of distant supernovae, which suggested the expansion is speeding up."
              }
            },
            core: { hint: "The word 'dark' here means 'unknown', not 'black dust'." },
            stretch: { extend: "Explain why it is good science, not a weakness, for scientists to say openly that dark matter and dark energy are not yet understood." }
          },
          why: "Dark matter and dark energy are names for unexplained observations: extra mass we cannot see, and the cause of the expansion speeding up. Scientists do not yet understand them."
        }
      ]
    },

    /* ───────────── 5 · exam skills ───────────── */
    {
      key: "exam-skills", n: 5, title: "Exam skills: the 6-mark answer",
      lead: "How to read the command word, plan in key words and write a linked 6-mark answer on any part of Space Physics.",
      covers: [1, 2, 3, 4, 5],
      pretext: {
        words: [
          { word: "command word", means: "the word in a question that tells you what to do", sentence: "The command word 'explain' means you must give reasons." },
          { word: "describe", means: "say what happens, in order, without reasons", sentence: "Describe the life cycle of the Sun, stage by stage." },
          { word: "explain", means: "give reasons, using linking words like because and so", sentence: "Explain why the Sun stays the same size." },
          { word: "compare", means: "say what is the same and what is different", sentence: "Compare the life cycles of two stars of different mass." },
          { word: "levels of response", means: "marking the whole answer for its quality, not counting single facts", sentence: "A 6-mark answer is marked using levels of response." }
        ],
        passage: [
          "Some exam questions are worth 6 marks.",
          "They test whether you can write a clear, linked answer.",
          "First, read the command word carefully.",
          "Describe means say what happens, in order.",
          "Explain means give reasons, using words like because and so.",
          "Compare means say what is the same and what is different.",
          "Next, plan your answer in three or four quick points.",
          "Use the key words from this unit, spelled correctly.",
          "Write in full sentences and keep the steps in order.",
          "Examiners mark the whole answer, not just single facts.",
          "A top answer is detailed, accurate and logical."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الكلمة في السؤال التي تخبرك بما يجب أن تفعله (command word)",
            "قول ما يحدث، بالترتيب، دون ذكر الأسباب (describe)",
            "إعطاء الأسباب، باستخدام كلمات ربط مثل because و so (explain)",
            "قول ما هو متشابه وما هو مختلف (compare)",
            "تقييم الإجابة كلها حسب جودتها، لا عدّ الحقائق المنفردة (levels of response)"
          ],
          "passage": [
            "بعض أسئلة الامتحان تساوي 6 درجات.",
            "وهي تختبر هل تستطيع أن تكتب إجابة واضحة ومترابطة.",
            "أولاً، اقرأ كلمة الأمر (command word) بعناية.",
            "Describe تعني: قل ما يحدث، بالترتيب.",
            "Explain تعني: أعطِ الأسباب، باستخدام كلمات مثل because و so.",
            "Compare تعني: قل ما هو متشابه وما هو مختلف.",
            "بعد ذلك، خطّط لإجابتك في ثلاث أو أربع نقاط سريعة.",
            "استخدم الكلمات المفتاحية من هذه الوحدة، مكتوبة إملائياً بشكل صحيح.",
            "اكتب جملاً كاملة وحافظ على ترتيب الخطوات.",
            "يقيّم المصحّحون الإجابة كلها، لا الحقائق المنفردة فقط.",
            "الإجابة الممتازة مفصّلة ودقيقة ومنطقية."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "słowo w pytaniu, które mówi ci, co masz zrobić (command word)",
            "powiedz, co się dzieje, po kolei, bez podawania przyczyn (describe)",
            "podaj przyczyny, używając słów łączących, takich jak „because” i „so” (explain)",
            "powiedz, co jest takie samo, a co inne (compare)",
            "ocenianie całej odpowiedzi za jej jakość, a nie liczenie pojedynczych faktów (levels of response)"
          ],
          "passage": [
            "Niektóre pytania egzaminacyjne są warte 6 punktów.",
            "Sprawdzają, czy potrafisz napisać jasną, spójną odpowiedź.",
            "Najpierw uważnie przeczytaj słowo polecenia (command word).",
            "Describe (opisz) znaczy: powiedz, co się dzieje, po kolei.",
            "Explain (wyjaśnij) znaczy: podaj przyczyny, używając słów takich jak „because” i „so”.",
            "Compare (porównaj) znaczy: powiedz, co jest takie samo, a co inne.",
            "Potem zaplanuj odpowiedź w trzech lub czterech krótkich punktach.",
            "Używaj kluczowych słów z tej lekcji, poprawnie napisanych.",
            "Pisz pełnymi zdaniami i zachowuj kolejność kroków.",
            "Egzaminatorzy oceniają całą odpowiedź, a nie tylko pojedyncze fakty.",
            "Najlepsza odpowiedź jest szczegółowa, dokładna i logiczna."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a palavra numa pergunta que diz o que você deve fazer (command word)",
            "dizer o que acontece, em ordem, sem dar razões (describe)",
            "dar razões, usando palavras de ligação como because e so (explain)",
            "dizer o que é igual e o que é diferente (compare)",
            "avaliar a resposta inteira pela sua qualidade, em vez de contar cada informação isolada (levels of response)"
          ],
          "passage": [
            "Algumas perguntas do exame valem 6 pontos.",
            "Elas testam se você consegue escrever uma resposta clara e bem ligada.",
            "Primeiro, leia a palavra de comando (command word) com atenção.",
            "Describe quer dizer: diga o que acontece, em ordem.",
            "Explain quer dizer: dê razões, usando palavras como because (porque) e so (por isso).",
            "Compare quer dizer: diga o que é igual e o que é diferente.",
            "Depois, faça um plano da resposta em três ou quatro pontos rápidos.",
            "Use as palavras-chave desta unidade, escritas corretamente.",
            "Escreva frases completas e mantenha os passos em ordem.",
            "Os examinadores avaliam a resposta inteira, não apenas informações isoladas.",
            "Uma resposta excelente é detalhada, exata e lógica."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "erayga su'aasha ku jira oo kuu sheega waxa aad samayso (command word)",
            "sheeg waxa dhaca, si isku xigta, sabab la'aan (describe)",
            "bixi sababo, adigoo isticmaalaya erayo isku xira sida because iyo so (explain)",
            "sheeg waxa isku mid ah iyo waxa kala duwan (compare)",
            "u dhibcayn jawaabta oo dhan tayadeeda, iyadoo aan la tirinayn xaqiiqooyin keli keli ah (levels of response)"
          ],
          "passage": [
            "Su'aalaha imtixaanka qaarkood waxay u dhigmaan 6 dhibcood.",
            "Waxay tijaabiyaan haddii aad qori karto jawaab cad oo isku xiran.",
            "Marka hore, si taxaddar leh u akhri erayga amarka (command word).",
            "Describe macnaheedu waa sheeg waxa dhaca, si isku xigta.",
            "Explain macnaheedu waa bixi sababo, adigoo isticmaalaya erayo sida because iyo so.",
            "Compare macnaheedu waa sheeg waxa isku mid ah iyo waxa kala duwan.",
            "Xigga, jawaabtaada ku qorshee saddex ama afar qodob oo degdeg ah.",
            "Isticmaal erayada muhiimka ah ee cutubkan, si sax ah u higgaadsan.",
            "Ku qor jumlado dhammaystiran oo tallaabooyinka siday u kala horreeyaan u hay.",
            "Imtixaan-bixiyeyaashu waxay dhibcaynayaan jawaabta oo dhan, ma aha xaqiiqooyin keli keli ah oo keliya.",
            "Jawaab heer sare ah waa mid faahfaahsan, sax ah oo caqli-gal ah."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "слово в запитанні, яке каже вам, що робити",
            "сказати, що відбувається, по порядку, без пояснення причин",
            "навести причини, використовуючи сполучні слова, як because (тому що) і so (тому)",
            "сказати, що однакове, а що різне",
            "оцінювання всієї відповіді за її якістю, а не підрахунок окремих фактів"
          ],
          "passage": [
            "Деякі екзаменаційні запитання оцінюються в 6 балів.",
            "Вони перевіряють, чи вмієте ви писати чітку, зв’язну відповідь.",
            "Спочатку уважно прочитайте командне слово (command word).",
            "Describe (опишіть) означає: скажіть, що відбувається, по порядку.",
            "Explain (поясніть) означає: наведіть причини, використовуючи слова because і so.",
            "Compare (порівняйте) означає: скажіть, що однакове, а що різне.",
            "Далі сплануйте відповідь у трьох-чотирьох коротких пунктах.",
            "Використовуйте ключові слова з цього розділу, написані правильно.",
            "Пишіть повними реченнями і дотримуйтесь порядку кроків.",
            "Екзаменатори оцінюють усю відповідь, а не лише окремі факти.",
            "Найкраща відповідь — детальна, точна і логічна."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "سوال کا وہ لفظ جو بتاتا ہے کہ آپ کو کیا کرنا ہے (command word)",
            "بتانا کہ کیا ہوتا ہے، ترتیب سے، بغیر وجوہات کے (describe)",
            "وجوہات دینا، جوڑنے والے لفظوں جیسے because اور so کے ساتھ (explain)",
            "بتانا کہ کیا ایک جیسا ہے اور کیا الگ (compare)",
            "پورے جواب کو اس کے معیار پر نمبر دینا، الگ الگ حقائق گننے کے بجائے (levels of response)"
          ],
          "passage": [
            "امتحان کے کچھ سوال 6 نمبر کے ہوتے ہیں۔",
            "یہ جانچتے ہیں کہ آپ ایک صاف اور جڑا ہوا جواب لکھ سکتے ہیں یا نہیں۔",
            "سب سے پہلے، command word کو دھیان سے پڑھیں۔",
            "Describe کا مطلب ہے بتانا کہ کیا ہوتا ہے، ترتیب سے۔",
            "Explain کا مطلب ہے وجوہات دینا، because اور so جیسے لفظوں کے ساتھ۔",
            "Compare کا مطلب ہے بتانا کہ کیا ایک جیسا ہے اور کیا الگ۔",
            "پھر اپنے جواب کا منصوبہ تین یا چار مختصر نکتوں میں بنائیں۔",
            "اس یونٹ کے اہم لفظ استعمال کریں، صحیح ہجوں کے ساتھ۔",
            "پورے جملوں میں لکھیں اور مراحل کو ترتیب میں رکھیں۔",
            "ممتحن پورے جواب کو نمبر دیتے ہیں، صرف الگ الگ حقائق کو نہیں۔",
            "سب سے اچھا جواب تفصیلی، درست اور منطقی ہوتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Read the command word",
          paragraphs: [
            "The command word tells you what kind of answer to write. 'Describe' wants the stages or features, in a sensible order. 'Explain' wants reasons: each point should be linked to the next with words such as because, so, which means and therefore.",
            "'Compare' wants similarities and differences, and the best answers put them side by side: 'Both stars…', 'However, a massive star…'. Writing two separate descriptions is not the same as comparing.",
            "Underline the command word and the topic before you write anything. Many lost marks come from answering a different question from the one that was asked."
          ],
          tip: "For 'compare', use 'both' for similarities and 'whereas' or 'however' for differences."
        },
        {
          heading: "Plan before you write",
          paragraphs: [
            "Spend a minute on a plan. Write the key stages or ideas as single words down the margin, in order. This stops you missing a stage, and it keeps your answer logical.",
            "Then turn each plan word into a full sentence using the key words from the unit: nebula, protostar, fusion, red supergiant, red-shift, wavelength. Using the right word in the right place is what makes an answer accurate."
          ],
          worked: {
            q: "Plan an answer to: 'Describe how the Sun formed and explain why it now stays the same size.' (6 marks)",
            steps: [
              "Command words: describe (stages, in order) and explain (reasons).",
              "Plan, describe: nebula → gravity → denser and hotter → protostar → fusion of hydrogen into helium → main sequence star.",
              "Plan, explain: gravity pulls inwards; fusion energy causes outward expansion; they are balanced (equilibrium).",
              "Write it up in full sentences, in this order, linking the explanation with 'because' and 'so'."
            ],
            answer: "A plan of six linked points: nebula, gravity, protostar, fusion, main sequence, balance between gravity and fusion energy."
          }
        },
        {
          heading: "Check against the mark scheme",
          paragraphs: [
            "Six-mark answers are marked using levels of response. The examiner reads the whole answer and decides its level. A top-level answer is detailed and accurate, uses the correct key words and is set out in a clear, logical order.",
            "When you have finished, check your answer against the criteria: Have I answered the command word? Have I covered every stage? Are my facts correct? Have I linked my ideas? A long answer with mistakes in it can score less than a shorter, accurate one."
          ],
          tip: "Re-read your first and last sentences: the first should go straight to the question, and the last should finish the sequence or the argument."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which command word asks you to give reasons for something?", options: ["Explain", "Describe", "Name", "State"], answer: 0, why: "'Explain' wants reasons, linked with words such as because and so. 'Describe' wants what happens, without reasons.",
          feedback: [
            "",
            "'Describe' asks what happens, in order, without reasons. Many pupils describe when asked to explain and lose the reasoning marks. 'Explain' is the command word that asks for reasons.",
            "'Name' asks for a single word or term and no reasons. 'Explain' asks why.",
            "'State' asks for a short factual answer with no reasons. 'Explain' asks for reasons, linked with because and so."
          ] },
        { kind: "gap", q: "In a 'compare' question you must say what is the same and what is ___.", answer: "different", options: ["different", "correct", "longest"], why: "Comparing means giving similarities and differences side by side.",
          feedback: {
            "correct": "Being correct is expected in every answer; it is not what 'compare' asks for. Compare means giving similarities and differences.",
            "longest": "A compare answer is not about length. It needs what is the same and what is different, set side by side."
          } },
        { kind: "mcq", q: "How are 6-mark answers marked?", options: ["On the quality of the whole answer, using levels", "One mark for each key word, however it is used", "Only on spelling", "Only on the final sentence"], answer: 0, why: "They are marked by levels of response: the examiner judges the whole answer for detail, accuracy and logic.",
          feedback: [
            "",
            "Key words earn credit only when they are used correctly in a linked answer; a list of words on its own scores in the lowest level. The examiner judges the whole answer by levels.",
            "Spelling of key words matters, but 6-mark answers are judged on detail, accuracy and logic across the whole answer, not on spelling alone.",
            "The whole answer is read and placed in a level; no single sentence decides the mark."
          ] }
      ],
      modules: [
        {
          title: "Compare two life cycles (6 marks)",
          task: {
            kind: "written",
            q: "Compare the life cycle of a star about the same mass as the Sun with the life cycle of a star much more massive than the Sun. (6 marks)",
            marks: 6,
            criteria: [
              "States that both stars form from a nebula pulled together by gravity into a protostar",
              "States that both become main sequence stars, fusing hydrogen into helium",
              "Sun-sized star: red giant, then white dwarf, then black dwarf",
              "Massive star: red supergiant, then supernova, then neutron star or black hole",
              "Uses comparison words (both, whereas, however) to set the stages side by side",
              "Stages are in the correct order and the key words are used accurately"
            ],
            model: "Both stars begin in the same way. A nebula of dust and gas is pulled together by gravity to form a protostar. When it is hot and dense enough, hydrogen nuclei fuse into helium nuclei and both become main sequence stars. After the main sequence, their paths are different. When a star about the mass of the Sun runs out of hydrogen in its core, it swells into a red giant, then becomes a white dwarf, which slowly cools into a black dwarf. However, a much more massive star swells into a red supergiant. It then collapses and explodes as a supernova, leaving a neutron star or, if enough mass remains, a black hole."
          },
          levels: {
            support: {
              steps: [
                "Write 'Both' and list the stages the two stars share: nebula, protostar, main sequence.",
                "Write 'After the main sequence, their paths are different.'",
                "Give the three stages for the Sun-sized star in order.",
                "Start the next sentence with 'However, a massive star…' and give its three stages."
              ],
              example: {
                q: "Compare natural and artificial satellites. (4 marks)",
                steps: [
                  "Similarity: both orbit a larger body, and both are kept in orbit by gravity.",
                  "Difference: a natural satellite, such as the Moon, was not made by people, whereas an artificial satellite is built and launched by people.",
                  "Difference: artificial satellites do jobs for us, such as communications and weather forecasting."
                ],
                answer: "Both orbit a larger body and are kept in orbit by gravity, whereas natural satellites such as the Moon are not made by people and artificial satellites are built and launched by people to do jobs such as communications."
              }
            },
            core: { hint: "The two life cycles share their first three stages and split after the main sequence." },
            stretch: { extend: "Add one sentence explaining why only the massive star can produce elements heavier than iron, and what happens to those elements." }
          },
          explain: "Say, in one sentence, where the two life cycles split and what decides which path a star takes.",
          why: "A top answer gives the shared start, both separate endings in the correct order, and uses comparison words so the two paths are set side by side."
        },
        {
          title: "Red-shift and the Big Bang (6 marks)",
          task: {
            kind: "written",
            q: "Explain how red-shift provides evidence for the Big Bang theory. (6 marks)",
            marks: 6,
            criteria: [
              "Red-shift is an observed increase in the wavelength of light from distant galaxies",
              "Red-shift shows the galaxies are moving away from us",
              "The further away a galaxy is, the bigger its red-shift, so the faster it is moving away",
              "This shows that space itself (the universe) is expanding",
              "If the universe is expanding, it must have been smaller in the past",
              "Links this to the Big Bang: the universe began from a very small region that was extremely hot and dense"
            ],
            model: "Light from distant galaxies is red-shifted. This means the wavelength of the light we observe has increased, so the dark lines in its spectrum are shifted towards the red end. This shows that the galaxies are moving away from us. The further away a galaxy is, the bigger its red-shift, so the more distant galaxies are moving away faster. This pattern shows that space itself is expanding. If the universe is expanding now, then in the past everything was closer together. Tracing the expansion backwards suggests that the universe began from a very small region that was extremely hot and dense, which is what the Big Bang theory states."
          },
          levels: {
            support: {
              steps: [
                "Say what red-shift is: an increase in wavelength.",
                "Say what it shows about one galaxy: it is moving away.",
                "Say what the pattern with distance shows: further means faster, so space is expanding.",
                "Finish with 'so in the past…' and link to the Big Bang."
              ],
              example: {
                q: "Explain why a main sequence star stays the same size. (4 marks)",
                steps: [
                  "Gravity pulls the material of the star inwards.",
                  "Fusion in the core releases energy, which causes the star to expand outwards.",
                  "In a main sequence star these are balanced (in equilibrium).",
                  "So the star does not collapse or expand, and its size stays the same."
                ],
                answer: "Gravity pulls the star inwards while energy from fusion causes it to expand outwards; these are balanced in a main sequence star, so its size stays the same."
              }
            },
            core: { hint: "Build a chain: wavelength → moving away → further means faster → expanding → smaller and denser in the past." },
            stretch: { extend: "Add what has been observed since 1998, and explain why scientists say there is still much about the universe that is not understood." }
          },
          explain: "Say, in one sentence, which step in your chain moves from one galaxy to the whole universe.",
          why: "The marks come from the chain of reasoning: increased wavelength, galaxies receding, speed increasing with distance, an expanding universe, and so a very small, hot, dense beginning."
        },
        {
          title: "Staying in orbit (6 marks, Higher)",
          task: {
            kind: "written",
            q: "Explain how gravity keeps a satellite in a circular orbit around the Earth, and why a satellite in a closer orbit must move faster. (6 marks, Higher)",
            marks: 6,
            criteria: [
              "Gravity pulls the satellite towards the centre of the Earth, the centre of the orbit",
              "The force is at right angles to the direction of motion, so it changes direction, not speed",
              "Velocity changes because direction changes, so the satellite accelerates towards the centre, while its speed stays the same",
              "Gravity is stronger closer to the Earth",
              "In a closer orbit the satellite must move faster to stay in a stable orbit",
              "States the link: if the speed changes, the radius of a stable orbit must change"
            ],
            model: "Gravity pulls the satellite towards the centre of the Earth, which is the centre of its orbit. This force acts at right angles to the direction the satellite is moving, so it changes the satellite's direction but not its speed. Because its direction keeps changing, its velocity keeps changing even though its speed stays the same, so the satellite is accelerating towards the centre. Closer to the Earth, the pull of gravity is stronger. To stay in a stable orbit at a smaller radius, the satellite must move faster. So for a stable orbit, if the speed of a satellite changes, the radius of its orbit must change too."
          },
          levels: {
            support: {
              steps: [
                "Say which way gravity pulls: towards the centre.",
                "Say what this does: changes the direction, not the speed.",
                "Use the word velocity: direction changes, so velocity changes, so it is accelerating.",
                "Then: closer means stronger gravity, so the satellite must go faster."
              ],
              example: {
                q: "Explain why a hammer thrower must keep pulling on the wire to keep the hammer moving in a circle. (3 marks)",
                steps: [
                  "The wire pulls the hammer inwards, towards the thrower at the centre.",
                  "This inward force keeps changing the hammer's direction.",
                  "If the pull stopped, the hammer would fly off in a straight line."
                ],
                answer: "An inward force towards the centre is needed to keep changing the hammer's direction; without it the hammer would move off in a straight line."
              }
            },
            core: { hint: "Two halves: first, steady speed but changing velocity; second, stronger gravity closer in means higher speed." },
            stretch: { extend: "Add a sentence explaining why a satellite in a closer orbit also has a shorter period." }
          },
          explain: "Say, in one sentence, why gravity can change a satellite's velocity without changing its speed.",
          why: "A top answer explains both halves: gravity changes direction (so velocity, not speed), and closer orbits need higher speeds because gravity is stronger there."
        }
      ]
    }
  ],

  sources: {
    deckDump: "sc_ks4_phys_p16_space.txt",
    decksUsed: [
      "P16.1 Formation of the Solar System .pptx",
      "P16.2 The life history of a star.pptx",
      "P16.3 Planets, satellites, and orbits  .pptx",
      "P16.4 The expanding universe.pptx",
      "P16.5 The beginning and future of the Universe  .pptx"
    ],
    notes: "Lesson titles and order from the five department decks. House furniture skipped (blue Prior Learning/Components sheet, 'To do' slide, the P15 magnetism Recall rounds and the P15.8 transformer plenary carried over from the previous unit). Board answers on the Grade 3-4 to 7-8 question slides were used only to see what the deck teaches; no answer slide is reproduced. Copyright quotation on P16.1 slide 21 (Sagan, 1994) not used. Where a deck statement is inaccurate or beyond AQA 8463 4.8 it was corrected or left out: see NOTES.md. Explanations are original and written to AQA 8463 4.8.1 to 4.8.3; HT-only content (4.8.2 velocity/speed and radius/speed) is marked (Higher). astra/2 (17 Oct 2026): misconception feedback, explain prompts, contexts, glossary chapters, connections, spacing and constellation added; no v1 question, answer, passage or lesson text was changed. Speeds quoted in contexts (ISS 7.7 km/s, Moon 1 km/s, geostationary 3.1 km/s) are recomputed by verify.py from the radii and periods in the Ch3 examples."
  }
};
