// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 History · Year 9 Topic 5 · Medieval Medicine, c1250–c1500 (bridge to AQA GCSE History 8145,
// Britain: Health and the People, Part one "Medicine stands still") · schema astra/2
//
// Convention for ideas: the Four Humours, miasma, astrology and God-sent disease are taught as what people BELIEVED, never as
// true claims. verify.py lints every pupil-facing sentence that makes a cause-of-disease claim for a belief marker
// (believed / thought / idea / theory / taught / said ...). Capitalised names mark named ideas: the Four Humours, the Theory of Opposites.
//
// Quotation convention: curly double quotes “…” are used ONLY for the one primary source quoted (John of Gaddesden, Rosa Anglica,
// 14th century, in the English translation printed in the department's deck). verify.py checks every “…” against the CORPUS it
// holds and bans distinctive phrases from the deck's revision-guide text, teacher model and the two modern historians it names.
// Curly single quotes ‘…’ mark terms and never quotations.
//
// MACHINE CHECKS (run `python3 verify.py` in this folder): every date and number against the CHRONOLOGY / FACTS tables; every
// numeric item recomputed from `check`; every mcq / gap / order / match against an independent key; passage sentences ≤ 20 words;
// feedback / misconceptions / explain = 100 %; contexts never redefine the answer; connections ⊂ glossary; no pretext.l1; no widgets.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["hist-medicine"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "hist-medicine",
    subjectKey: "history",
    subject: "History",
    board: "AQA",
    spec: "KS3 → 8145",
    specRef: "KS3 Year 9 Topic 5: Medieval Medicine, c1250–c1500 — foundations for AQA GCSE History 8145, Britain: Health and the People c1000 to the present day, Part one: Medicine stands still (medieval medicine; the Church; Hippocrates and Galen; the Black Death)",
    year: 9,
    tier: "KS3",
    title: "Medieval Medicine",
    sub: "From a village harvest to the Black Death: what people in medieval England believed made them ill, how they tried to get better, and why so little changed in 250 years.",
    bigQuestion: "Why was there so little change in medicine in medieval England between c1250 and c1500?",
    lessonCount: 10,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Life in Medieval England", question: "What does the village of Walsham tell us about medieval England?", keywords: ["medieval period", "peasant", "harvest", "feudal system", "famine", "the Church"] },
    { n: 2, title: "Ideas about the Cause of Disease", question: "Why did people think they got sick in medieval England?", keywords: ["supernatural", "religion", "astrology", "miasma", "urine"] },
    { n: 3, title: "The Four Humours", question: "How did the Four Humours explain disease?", keywords: ["Hippocrates", "Galen", "Four Humours", "rational explanation", "Theory of Opposites"] },
    { n: 4, title: "Four Humours Popularity", question: "Why was the Theory of the Four Humours so popular?", keywords: ["the Church", "universities", "dissection", "factors"] },
    { n: 5, title: "Medieval Treatments and Preventions", question: "What treatments and preventions were used in medieval England?", keywords: ["treatment", "prevention", "bloodletting", "purging", "remedy", "pilgrimage"] },
    { n: 6, title: "Medieval Medics", question: "Who provided care and treatment in medieval England?", keywords: ["wise woman", "physician", "apothecary", "barber surgeon"] },
    { n: 7, title: "Medieval Hospitals", question: "How important were medieval hospitals in providing care and treatment?", keywords: ["hospital", "care", "cure", "conclusion", "judgement"] },
    { n: 8, title: "The Black Death", question: "How did England react to the Black Death between 1348 and 1349?", keywords: ["Black Death", "bubonic plague", "flagellant", "quarantine", "case study"] },
    { n: 9, title: "Review: factors and continuity", question: "Why was there so little change in medicine in the Middle Ages?", keywords: ["factor", "continuity", "the Church", "attitudes", "individuals", "government"] },
    { n: 10, title: "End of topic assessment", question: "What were the key features of medieval medicine, 1250–1500?", keywords: ["chronology", "evidence", "explain why", "PEEL"] }
  ],

  glossary: [
    { term: "medieval period", means: "The Middle Ages in England: from the Norman Conquest in 1066 to the start of the Tudors in 1485.", chapter: "medieval-england" },
    { term: "feudal system", means: "The way medieval society was organised: the king at the top, lords below him, and peasants at the bottom with few rights.", chapter: "medieval-england" },
    { term: "famine", means: "A lack of food that leads to widespread starvation and death, usually after a failed harvest.", chapter: "medieval-england" },
    { term: "tithe", means: "A tax paid to the Church by local people, usually a tenth of what they produced.", chapter: "medieval-england" },
    { term: "supernatural", means: "Beyond the natural world: God, the devil, spirits and the stars. Supernatural ideas about disease blamed these.", chapter: "causes-of-disease" },
    { term: "miasma", means: "The belief that bad air and bad smells, from dirt and rotting matter, carried disease.", chapter: "causes-of-disease" },
    { term: "astrology", means: "The belief that the positions of the stars and planets affected life on Earth, including health.", chapter: "causes-of-disease" },
    { term: "Four Humours", means: "The theory that the body held four liquids (blood, phlegm, yellow bile, black bile) that had to stay in balance.", chapter: "four-humours" },
    { term: "Theory of Opposites", means: "Galen's idea that an illness should be treated with its opposite: a hot cure for a cold illness.", chapter: "four-humours" },
    { term: "dissection", means: "Cutting open a dead body to study it. The Church discouraged dissecting humans, so Galen's ideas went unchallenged.", chapter: "four-humours" },
    { term: "bloodletting", means: "Removing blood from a patient with a knife, leeches or cupping, meant to drain an excess humour.", chapter: "treatment-prevention" },
    { term: "purging", means: "Making a patient vomit or empty their bowels, meant to remove an excess humour.", chapter: "treatment-prevention" },
    { term: "remedy", means: "A medicine, usually herbal, that was drunk, sniffed or rubbed on the skin.", chapter: "treatment-prevention" },
    { term: "physician", means: "A university-trained doctor who diagnosed illness and prescribed treatment. Rare and very expensive.", chapter: "care" },
    { term: "apothecary", means: "A medic who mixed and sold medicines and ointments. Trained, but with no university qualification.", chapter: "care" },
    { term: "barber surgeon", means: "A medic with no formal training who let blood, pulled teeth, lanced boils and did small operations, and also cut hair.", chapter: "care" }
  ],

  // astra/2: the Connections game. Four groups of four, all sixteen drawn from the glossary above.
  connections: [
    { group: "Life in medieval England", terms: ["medieval period", "feudal system", "famine", "tithe"] },
    { group: "Ideas about the cause of disease", terms: ["supernatural", "miasma", "astrology", "Four Humours"] },
    { group: "Galen's medicine", terms: ["Theory of Opposites", "dissection", "bloodletting", "purging"] },
    { group: "Medieval medics and their wares", terms: ["remedy", "physician", "apothecary", "barber surgeon"] }
  ],

  chapters: [
    // ───────────────────────────── CHAPTER 1 ─────────────────────────────
    {
      key: "medieval-england", n: 1,
      title: "Life in medieval England",
      lead: "This chapter sets the scene: when the medieval period was, what life was like in a village, and the big story of medicine you are about to follow.",
      covers: [1],
      pretext: {
        words: [
          { word: "medieval period", means: "the Middle Ages in England, from 1066 to 1485", sentence: "The medieval period began when the Normans conquered England." },
          { word: "peasant", means: "a poor person who worked on the land for a lord", sentence: "Most people in medieval England were peasants." },
          { word: "harvest", means: "gathering in the crops at the end of summer", sentence: "A good harvest meant the village would eat through the winter." },
          { word: "feudal system", means: "the way society was organised, with the king at the top and peasants at the bottom", sentence: "Under the feudal system, peasants had few rights and freedoms." },
          { word: "famine", means: "a lack of food that leads to starvation and death", sentence: "A failed harvest could bring famine to a whole region." },
          { word: "tithe", means: "a tax paid to the Church", sentence: "Every family paid a tithe to the Church each year." }
        ],
        passage: [
          "The medieval period in England began in 1066.",
          "That year the Normans conquered England.",
          "It ended in 1485, when the Tudor kings and queens began.",
          "Most people were peasants who worked on the land.",
          "The harvest was the most important event of the year.",
          "A bad harvest meant hunger, and sometimes famine.",
          "Under the feudal system, peasants had few rights and freedoms.",
          "The Church was at the centre of village life.",
          "People paid a tithe, a tax, to the Church.",
          "Most people could not read, so the Church told them what to believe.",
          "Illness and disease were a constant worry.",
          "In this unit you will ask why medicine changed so little in these years."
        ]
      },
      sections: [
        {
          heading: "The big story of medicine",
          paragraphs: [
            "Over this year you will follow the history of medicine across four periods: medieval medicine (1250–1500), Renaissance medicine (1500–1700), medicine in eighteenth- and nineteenth-century Britain, and medicine in modern Britain (1900 to the present). For each period you will ask the same three questions. What did people think caused disease? How did they treat it? How did they try to prevent it?",
            "Asking the same three questions each time lets you spot change and continuity. A turning point is a moment when something changes for good; continuity is when things stay the same. The surprising thing about the medieval period is how much continuity there was. Ideas about disease in 1500 were nearly the same as in 1250, and nearly the same as in Ancient Greece.",
            "Historians explain change and continuity with factors. Your department uses six: attitudes and beliefs (such as the Church, respect for tradition, or a wish to improve); individuals; war; science and technology; government; and improved communications. Keep a list. You will add to it all year."
          ],
          tip: "Continuity is not the same as nothing happening. People were busy treating the sick all through the Middle Ages; what did not change were the ideas behind the treatments."
        },
        {
          heading: "Walsham in the 1340s",
          paragraphs: [
            "Your lesson read a story about Walsham, a real village in Suffolk, in the 1340s. Walsham stands for thousands of villages like it. Most of its people were peasants. They did not own the land they farmed; it belonged to the lord of the manor, and they owed him work and rent. This is the feudal system: the king at the top, lords below him, and peasants at the bottom with few rights and freedoms.",
            "The year turned on the harvest, gathered in the autumn. A good harvest meant bread and pottage, a thick vegetable stew, through the winter. A bad one meant hunger. Two or three bad years in a row meant famine, and famine killed. The Great Famine of the early fourteenth century, a generation before the Black Death, was still in living memory for the oldest villagers.",
            "Even in a good year, health was fragile. There was no clean piped water, there were no sewers, and nobody had any idea of germs. Cuts turned bad, childbirth was dangerous, and a fever could carry off a child in days. Illness was a part of life that everyone expected to meet."
          ],
          worked: {
            q: "Put these four periods in chronological order: the Industrial Revolution, the twentieth century, the Middle Ages, the Renaissance.",
            steps: [
              "Chronological order means earliest first. Find the oldest: the Middle Ages (the medieval period) come before all the others.",
              "The Renaissance follows the Middle Ages: it is the period from about 1500 to 1700.",
              "The Industrial Revolution came next, in the eighteenth and nineteenth centuries.",
              "The twentieth century is the most recent of the four."
            ],
            answer: "The Middle Ages, the Renaissance, the Industrial Revolution, the twentieth century."
          }
        },
        {
          heading: "The Church at the centre",
          paragraphs: [
            "Ask a medieval villager why the Church mattered and you would get more than one answer. First, it explained the world. The Church taught people where they came from, why bad things happened and what would happen when they died. Heaven and hell were real places to medieval people, and the Church held the keys.",
            "Second, the Church was part of everyday life. Its bells told the time. Its feast days were the holidays. It collected a tithe, a tenth of what each family produced. Monks and priests were almost the only people who could read and write, so the Church kept the books and ran the schools and universities. Many hospitals were run by monks and nuns.",
            "This matters for medicine. If the Church explained everything else, it would explain disease too. And if the Church taught what to believe, then the ideas it approved of would last. Hold on to this: it is the single most important factor in the whole unit."
          ],
          tip: "When you write about the Church, give it a capital C: it means the Christian Church as an organisation, not a building."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which event marks the beginning of the medieval period in England?", options: ["The Norman Conquest in 1066", "The Black Death in 1348", "The start of the Tudor dynasty in 1485", "Henry VIII's split from the Catholic Church in 1534"], answer: 0, why: "The medieval period in England runs from the Norman Conquest of 1066 to the start of the Tudor dynasty in 1485.",
          feedback: [
            "",
            "The Black Death came in the middle of the period, not at its start. You may have picked the most famous medieval event. The period began with the Norman Conquest in 1066, nearly three hundred years earlier.",
            "You have chosen the end of the period, not the beginning. The Tudors taking the throne in 1485 is where the medieval period stops; it started with the Norman Conquest in 1066.",
            "Henry VIII's break with Rome in 1534 is a Tudor event, after the medieval period had already ended. The medieval period began with the Norman Conquest in 1066."
          ] },
        { kind: "gap", q: "Most medieval people were ___ who worked on the land for a lord.", answer: "peasants", options: ["peasants", "physicians", "monks"], why: "Most of the population were peasants, farming land they did not own under the feudal system.",
          feedback: {
            "physicians": "Physicians were university-trained doctors and were very rare; only the wealthy could afford one. The ordinary people who farmed the land were peasants.",
            "monks": "Monks lived in monasteries and could read and write, but they were a small group. The great majority of people were peasants working the land."
          } },
        { kind: "mcq", q: "Why was the harvest the most important event of the year for a village such as Walsham?", options: ["A bad harvest meant hunger for the winter and, after several bad years, famine", "It was the only time the Church collected the tithe", "It was when the lord of the manor chose a new king", "It was the only time physicians visited the village"], answer: 0, why: "The village lived on what it grew. A failed harvest meant hunger, and repeated failure meant famine and death.",
          feedback: [
            "",
            "The tithe was linked to what people produced, but it is not why the harvest mattered so much. The harvest mattered because the village had to live on it all winter: a bad one meant hunger and possibly famine.",
            "Lords did not choose kings, and the harvest had nothing to do with it. The harvest mattered because a failed one meant hunger and, in the worst years, famine.",
            "Physicians rarely visited villages at all; most people were cared for at home. The harvest mattered because the whole village depended on it for food through the winter."
          ] }
      ],
      modules: [
        {
          title: "The four periods of medicine",
          task: {
            kind: "order",
            q: "Put the four periods of the history of medicine in chronological order, earliest first.",
            items: [
              "Medieval medicine (1250–1500)",
              "Renaissance medicine (1500–1700)",
              "Medicine in eighteenth- and nineteenth-century Britain",
              "Medicine in modern Britain (1900 to the present)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Chronological order means earliest first. Look for the dates in each label.",
                "Which label has the smallest starting date? That goes first.",
                "Eighteenth century means the 1700s and nineteenth century means the 1800s.",
                "The period that reaches the present day must be last."
              ],
              example: {
                q: "Practice: put these three events in chronological order: the Black Death (1348), the Norman Conquest (1066), the start of the Tudor dynasty (1485).",
                steps: ["Find the smallest year: 1066.", "Next comes 1348.", "The largest year, 1485, goes last."],
                answer: "The Norman Conquest (1066); the Black Death (1348); the start of the Tudor dynasty (1485)."
              }
            },
            core: { hint: "Each period starts where the one before it ends: 1250, 1500, 1700, 1900." },
            stretch: { extend: "Say which period you expect to show the most change in medicine, and which the least, and give one reason for each prediction. You will test these predictions over the year." }
          },
          why: "The department's four periods run medieval (1250–1500), Renaissance (1500–1700), eighteenth and nineteenth centuries, then modern (1900 to the present). Each begins where the last one ends.",
          explain: "Say, in one sentence, how you can tell which of two periods came first when you only know their dates."
        },
        {
          title: "Name that factor",
          task: {
            kind: "match",
            q: "Match each factor of change to the example that fits it best.",
            pairs: [
              ["Attitudes and beliefs", "Respect for tradition and trust in what the Church taught"],
              ["Individuals", "One person whose ideas were followed for centuries, such as Galen"],
              ["Science and technology", "New tools and knowledge, such as printing books with pictures"],
              ["Government", "Kings and town councils choosing whether to spend money or pass laws"],
              ["War", "Fighting that brought injuries and a demand for surgeons"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read each example and ask: who or what is doing the changing here?",
                "If it is a single person, that is Individuals. If it is a way of thinking, that is Attitudes and beliefs.",
                "If it is rulers making decisions or spending money, that is Government.",
                "Tools, machines and discoveries belong to Science and technology; battles and armies belong to War."
              ],
              example: {
                q: "Practice: a new, faster way of sending letters and books across Europe spreads a medical idea. Which factor is this?",
                steps: ["Ask what is doing the changing: a way of sending information.", "That is about how ideas travel.", "The factor is improved communications."],
                answer: "Improved communications."
              }
            },
            core: { hint: "Two of the factors are about people (one person; everyone's way of thinking). The others are about rulers, tools and fighting." },
            stretch: { extend: "The sixth factor, improved communications, is missing from the list. Write an example of your own for it, and explain why there was so little of it in medieval England." }
          },
          why: "Attitudes and beliefs are ways of thinking, such as respect for tradition; Individuals are single people like Galen; Science and technology covers tools such as printing; Government is rulers and councils; War is fighting and its injuries.",
          explain: "Say, in one sentence, the difference between the factor Individuals and the factor Attitudes and beliefs."
        },
        {
          title: "How long was the medieval period?",
          task: {
            kind: "numeric",
            q: "The medieval period in England ran from the Norman Conquest in 1066 to the start of the Tudor dynasty in 1485. How many years is that?",
            answer: 419, tolerance: 0, units: "years",
            check: "1485-1066",
            misconceptions: [
              { answer: 2551, says: "You added the two dates together. To find how long something lasted, subtract the start date from the end date: 1485 − 1066.", check: "1485+1066" },
              { answer: 409, says: "You lost a ten when you subtracted. Check the tens column: 1485 − 1066 = 419, not 409. Try the subtraction again in columns.", check: "1485-1066-10" },
              { answer: 429, says: "You gained a ten somewhere in the subtraction. 1485 − 1066 = 419. Try counting on from 1066 to 1485 in jumps of 100, then 10, then 1.", check: "1485-1066+10" }
            ],
            why: "Length of a period = end date − start date: 1485 − 1066 = 419 years, a little over four centuries."
          },
          levels: {
            support: {
              steps: [
                "Write the end date on top and the start date underneath: 1485 over 1066.",
                "Subtract in columns, or count on from 1066 to 1485.",
                "Counting on: 1066 to 1466 is 400; 1466 to 1485 is 19.",
                "Add the jumps: 400 + 19 = 419."
              ],
              example: {
                q: "Practice: the medieval medicine period your course studies runs from 1250 to 1500. How many years is that?",
                steps: ["End date minus start date: 1500 − 1250.", "1250 to 1500 is 250."],
                answer: "250 years",
                checks: [{ expr: "1500-1250", value: 250, tol: 0 }]
              }
            },
            core: { hint: "End date minus start date. Count on from 1066 in hundreds, then tens, then ones." },
            stretch: { extend: "The Black Death reached England in 1348. Work out how far through the medieval period that was, and say whether it falls nearer the start or the end." }
          },
          why: "1485 − 1066 = 419. The medieval period in England lasted 419 years: long enough for twenty generations to live and die with almost the same medical ideas.",
          explain: "Say, in one sentence, why you subtract rather than add when you want to know how long a period lasted."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 2 ─────────────────────────────
    {
      key: "causes-of-disease", n: 2,
      title: "Why did people think they got sick?",
      lead: "This chapter gives you the ideas medieval people held about the causes of disease: God, the stars, bad air and the body's own fluids, and how to tell a supernatural idea from a rational one.",
      covers: [2],
      pretext: {
        words: [
          { word: "supernatural", means: "beyond the natural world: God, spirits and the stars", sentence: "Blaming an illness on the devil is a supernatural explanation." },
          { word: "sin", means: "doing wrong in the eyes of God", sentence: "People believed God punished sin with illness." },
          { word: "miasma", means: "bad air that people believed carried disease", sentence: "They thought the miasma from the rubbish heap made the children ill." },
          { word: "astrology", means: "the belief that the stars and planets affect life on Earth", sentence: "The physician used astrology to decide when to treat her." },
          { word: "Doom painting", means: "a church painting showing souls going to hell", sentence: "The Doom painting above the altar frightened the villagers." },
          { word: "rational", means: "based on reasons that seem to make sense", sentence: "Miasma was a rational idea, even though it was wrong." }
        ],
        passage: [
          "In medieval England, nobody knew about germs.",
          "People had other ideas about why they got sick.",
          "The Church taught that God sent disease.",
          "People believed it was a punishment for sin, or a test of faith.",
          "Some thought the devil or evil spirits could make you ill.",
          "Others blamed the stars and planets.",
          "This idea is called astrology.",
          "Many believed that bad air, called miasma, caused disease.",
          "Bad smells seemed to prove it.",
          "Physicians also studied a patient's urine to find out what was wrong.",
          "These ideas were not based on science.",
          "But to people at the time, they made sense."
        ]
      },
      sections: [
        {
          heading: "God, sin and the Doom painting",
          paragraphs: [
            "The Church taught that God controlled everything, and that included illness. People believed that God sent disease either as a punishment for sin or as a test of a person's faith. If you fell ill, the first question was not ‘what have I caught?’ but ‘what have I done?’ Illness could also be blamed on the devil, or on evil spirits, which were just as real to medieval people as God was.",
            "Many churches carried a Doom painting on the wall facing the congregation. It showed the Day of Judgement: the saved rising to heaven on one side and the damned being dragged into hell on the other. Villagers saw it every Sunday. Historians think these paintings were meant to be frightening, and that fear kept people obedient to the Church.",
            "This belief had a long shadow. If God had sent the disease, people reasoned, then there was no point searching for any other cause. The way to get better was to pray, confess and live a good life. This is one reason why, for 250 years, so few new ideas about the causes of disease appeared."
          ],
          tip: "Always write ‘people believed that God sent disease’, never ‘God sent disease’. You are reporting an idea, not stating a fact."
        },
        {
          heading: "Miasma, astrology and urine",
          paragraphs: [
            "Miasma is the idea that disease was carried by bad air. Rotting rubbish, animal dung, open drains and dead bodies all gave off foul smells, and people believed that breathing in that corrupted air made you ill. The idea seemed to make sense: filthy places really were unhealthy, even though the true reason was germs, not smell. Bad smells were also linked to sin, so miasma fitted neatly with religion.",
            "Astrology is the belief that the positions of the stars and planets affect life on Earth. Physicians used astrological charts to help diagnose what was wrong with a patient and to choose the best moment to treat them. Astrology was not new in 1250, but its use grew during the period, especially after the Black Death.",
            "Physicians also studied urine. They looked at its colour, smelt it and sometimes tasted it, then compared it with a urine chart in their handbook, called a vademecum. Different colours were thought to show different problems inside the body. This at least involved looking closely at the patient, which is why your lesson grouped it with the more rational ideas."
          ],
          tip: "Miasma, astrology, urine, religion and the Four Humours: five ideas. Learn all five, because exam questions love to ask you to compare them."
        },
        {
          heading: "Supernatural or rational?",
          paragraphs: [
            "Your lesson sorted these ideas into two groups. Supernatural explanations look beyond the natural world: God, the devil, spirits and the influence of the stars. Religion and astrology belong here. Rational explanations are ideas that seem to make sense and are backed by reasoning, even though they were not backed by science. Miasma, urine charts and the Four Humours belong here.",
            "Be careful with the word rational. It does not mean correct. Miasma was wrong, but a medieval person could point to a stinking ditch and a sick family beside it and say, reasonably, that one caused the other. A rational idea is one you can argue for from what you can see.",
            "Why were ideas based on logic and not on science? Because the tools of science did not exist. Nobody had a microscope, so nobody could see a germ. And because the Church approved of the old ideas, nobody was encouraged to test them. That is the subject of the next chapter."
          ],
          worked: {
            q: "A medieval physician says a merchant fell ill because Mars and Saturn were lined up on the night he was born. Is this a supernatural or a rational explanation, and why?",
            steps: [
              "Ask: does the explanation look beyond the natural world? The planets are being given a power over a human body.",
              "That power cannot be seen or reasoned from everyday experience: it belongs to the stars.",
              "So it is astrology, which your lesson classed as supernatural.",
              "Compare: blaming the merchant's illness on a stinking cellar would be miasma, a rational idea, because he could point to the smell."
            ],
            answer: "Supernatural: it is astrology, giving the planets a power that cannot be seen or reasoned from everyday life."
          }
        }
      ],
      gate: [
        { kind: "mcq", q: "What did the Church teach was the cause of disease?", options: ["God sent it as a punishment for sin or as a test of faith", "Fleas living on black rats spread it", "Dirty water from rivers carried it", "Tiny living things called germs caused it"], answer: 0, why: "The Church taught that God sent disease to punish sin or to test faith. Nobody in medieval England knew about germs.",
          feedback: [
            "",
            "Fleas and rats are what historians today think spread the Black Death, but nobody in medieval England knew that. The Church taught that God sent disease as a punishment or a test.",
            "Dirty water does carry disease, but that is a modern discovery, not a medieval teaching. The Church taught that God sent disease to punish sin or to test faith.",
            "Germs were not discovered until the nineteenth century; no one in the Middle Ages had heard of them. The Church taught that disease came from God as a punishment or a test."
          ] },
        { kind: "gap", q: "The idea that bad air and bad smells caused disease is called ___.", answer: "miasma", options: ["miasma", "astrology", "dissection"], why: "Miasma means bad or corrupted air. People believed breathing it in made you ill.",
          feedback: {
            "astrology": "Astrology blames the stars and planets, not the air. The idea that bad smells and corrupted air carried disease is called miasma.",
            "dissection": "Dissection is cutting open a dead body to study it; it is not an idea about the cause of disease at all. The idea of bad air as a cause of disease is called miasma."
          } },
        { kind: "mcq", q: "Which of these counts as a rational explanation of disease?", options: ["Miasma: bad smells from dirt and rotting matter carried disease", "God sent disease as a punishment for sin", "The planets lined up in an unlucky way", "The devil put a curse on the village"], answer: 0, why: "Rational explanations seem to make sense from what people could see, even though they were not scientific. Miasma pointed to real dirt and real smells.",
          feedback: [
            "",
            "Blaming God is a religious explanation, which your lesson classed as supernatural because it looks beyond the natural world. The rational idea in the list is miasma.",
            "The planets lining up is astrology, a supernatural idea, because it gives the stars a hidden power. Miasma is the rational one: it argued from smells you could actually smell.",
            "A curse from the devil is supernatural: it cannot be seen or reasoned from everyday experience. Miasma, which pointed to dirt and bad smells, is the rational explanation here."
          ] }
      ],
      modules: [
        {
          title: "Five ideas about disease",
          task: {
            kind: "match",
            q: "Match each idea about the cause of disease to what people believed.",
            pairs: [
              ["Religion", "God sent disease as a punishment for sin or a test of faith"],
              ["Astrology", "The positions of the stars and planets affected a person's health"],
              ["Miasma", "Bad air and foul smells from rotting matter carried disease"],
              ["Urine", "The colour, smell and taste of urine showed what was wrong inside the body"],
              ["The Four Humours", "The body's four liquids had fallen out of balance"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the idea you know best and find its partner.",
                "Religion is about God; astrology is about the sky.",
                "Miasma is about smell; urine is about what the physician examined.",
                "The Four Humours is about liquids inside the body."
              ],
              example: {
                q: "Practice: a villager says his fever came because he walked past the tannery, where the hides stank. Which idea is he using?",
                steps: ["Find the clue word: stank, a smell.", "Smell and bad air belong to miasma."],
                answer: "Miasma."
              }
            },
            core: { hint: "Four of the five point to something outside the body: God, the sky, the air, the chamber pot. Only one points inside." },
            stretch: { extend: "Two of these five ideas were classed as supernatural and three as rational. Sort them, then explain which rational idea came closest to the truth and why it was still wrong." }
          },
          why: "Religion: God as punisher or tester. Astrology: the stars and planets. Miasma: bad air and smells. Urine: a sign of what was wrong inside. The Four Humours: the body's liquids thought to be out of balance.",
          explain: "Say, in one sentence, which of the five ideas you think medieval people found most convincing, and why."
        },
        {
          title: "Spot the idea",
          task: {
            kind: "mcq",
            q: "A physician in the 1340s says a villager's fever was caused by the stink from the ditch behind her house. Which idea about disease is he using?",
            options: ["Miasma", "Astrology", "Religion", "The Four Humours"],
            answer: 0,
            feedback: [
              "",
              "Astrology would blame the stars or planets, and nothing in the story mentions the sky. The physician blames a smell, which is the miasma idea.",
              "A religious explanation would blame the villager's sins or God's will. This physician blames a stinking ditch, so he is using the idea of miasma, bad air.",
              "The Four Humours would blame an imbalance of liquids inside her body. This physician points to something outside: the smell from the ditch, which is miasma."
            ],
            why: "The clue is the smell. Blaming foul air from dirt or rotting matter is the miasma idea."
          },
          contexts: [
            { label: "A town council", q: "In 1349 a town council orders every household to clear the rotting rubbish from the street outside, to protect the town from disease. Which idea about disease is behind the order?", why: "Clearing rubbish was meant to remove the bad smells, and so the bad air, that people believed carried disease: miasma." },
            { label: "A mother", q: "A mother hangs bunches of sweet-smelling herbs by the door and keeps her children away from the marsh so that they stay well. Which idea about disease is she using?", why: "Sweet smells to drive out foul air, and keeping away from a stinking marsh: both come from the belief in miasma." }
          ],
          explain: "Say, in one sentence, what clue in the story told you which idea was being used.",
          levels: {
            support: {
              steps: [
                "Underline the thing being blamed for the illness.",
                "Ask: is it God, the sky, a smell, or the liquids inside the body?",
                "A smell or bad air always points to miasma.",
                "Check that none of the other three ideas fits the clue."
              ],
              example: {
                q: "Practice: a priest tells a sick farmer that his illness is God's way of testing him. Which idea is the priest using?",
                steps: ["The thing being blamed is God.", "God's punishment or test is the religious explanation."],
                answer: "Religion."
              }
            },
            core: { hint: "What is being blamed: something you can smell, something in the sky, something you did wrong, or something inside you?" },
            stretch: { extend: "Rewrite the story so that the physician uses a different one of the four ideas, and say what he would tell the villager to do about it." }
          },
          why: "Each story blames something different. A smell, foul air or rotting rubbish is miasma; the stars are astrology; sin is religion; liquids inside the body are the Four Humours."
        },
        {
          title: "Explain one effect of the Church's teaching",
          task: {
            kind: "written",
            q: "Explain one way in which the Church's teaching about disease held back new ideas about its causes in medieval England. (4 marks)",
            marks: 4,
            criteria: [
              "States the Church's teaching: people believed that God sent disease as a punishment or a test",
              "Gives a specific detail, such as Doom paintings or the advice to pray and confess",
              "Explains the effect: if God was the cause, there was no reason to look for another one",
              "Links back to the question: this is why few new ideas about causes appeared, c1250–c1500"
            ],
            model: "The Church taught that God sent disease, and people believed that illness was a punishment for sin or a test of their faith. Doom paintings in every church reminded them what waited for sinners, so most people took this teaching seriously. This held back new ideas because, if God had sent the disease, the only sensible response was to pray and confess; there was no reason to search for a natural cause. As a result, ideas about the causes of disease stayed almost the same from 1250 to 1500."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: say what the Church taught, using ‘people believed that’.",
                "Sentence 2: give one detail that shows the teaching was powerful, such as the Doom painting.",
                "Sentence 3: start with ‘This held back new ideas because…’ and explain why nobody looked for another cause.",
                "Sentence 4: link back with ‘As a result…’ and mention the dates."
              ],
              example: {
                q: "Practice: explain one way in which the lack of microscopes held back new ideas about disease. (4 marks)",
                steps: [
                  "State the problem: no microscope existed in medieval England.",
                  "Give the detail: germs are far too small to see with the eye.",
                  "Explain: so nobody could discover the true cause of disease.",
                  "Link: people kept the old ideas because they had no evidence against them."
                ],
                answer: "Nobody in medieval England had a microscope. Germs are far too small to see, so nobody could discover that they caused disease. This meant there was no evidence against the old ideas, so people kept believing in miasma, the humours and God's punishment."
              }
            },
            core: { hint: "Teaching, detail, effect, link. The effect sentence should contain the word ‘because’." },
            stretch: { extend: "Add a second paragraph explaining one way the same teaching could be said to help the sick, using what you know about hospitals and care." }
          },
          why: "Four marks reward a clear point, a specific detail, a developed explanation of the effect, and a link back to the question. Notice that the model never says God sent disease; it says people believed he did.",
          explain: "Say, in one sentence, why a historian writes ‘people believed that’ in front of a medieval idea."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 3 ─────────────────────────────
    {
      key: "four-humours", n: 3,
      title: "The Four Humours: Hippocrates, Galen and the Church",
      lead: "This chapter explains the most popular medieval theory of disease, where it came from, how Galen built on it, and why the Church made sure it was never challenged.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "Hippocrates", means: "a doctor in Ancient Greece, fifth century BC", sentence: "Hippocrates set out the Theory of the Four Humours." },
          { word: "Galen", means: "a Greek doctor who worked in Ancient Rome, second century AD", sentence: "Galen developed the ideas of Hippocrates." },
          { word: "humour", means: "one of four liquids people believed made up the body", sentence: "Blood was thought to be the hot, wet humour." },
          { word: "Theory of Opposites", means: "Galen's idea of treating an illness with its opposite", sentence: "By the Theory of Opposites, a cold illness needed a hot cure." },
          { word: "dissection", means: "cutting open a dead body to study it", sentence: "The Church discouraged the dissection of human bodies." },
          { word: "Latin", means: "the language of the Church and of learning", sentence: "Galen's books were translated into Latin around the year 1000." }
        ],
        passage: [
          "The most popular idea about disease was the Theory of the Four Humours.",
          "It came from Hippocrates, a doctor in Ancient Greece.",
          "He lived in the fifth century BC.",
          "He thought the body held four liquids, called humours.",
          "They were blood, phlegm, yellow bile and black bile.",
          "If the humours were out of balance, he believed, you became ill.",
          "Galen was a doctor in Ancient Rome, about five hundred years later.",
          "He added the Theory of Opposites.",
          "A cold illness, he said, needed a hot cure.",
          "Around the year 1000, their books were translated into Latin.",
          "The Church liked their ideas and taught them in its universities.",
          "For hundreds of years, nobody was allowed to prove them wrong."
        ]
      },
      sections: [
        {
          heading: "Hippocrates and the four liquids",
          paragraphs: [
            "Hippocrates was a doctor in Ancient Greece who lived from about 460 to 370 BC. He rejected the idea that the gods caused disease. Illness, he argued, had a physical cause and needed a physical cure. He watched his patients closely, wrote down their symptoms and compared them with other cases before deciding what was wrong. That method, clinical observation, is still how a doctor works today.",
            "His most famous idea was the Theory of the Four Humours. The Greeks thought the world was made of four elements: earth, air, fire and water. Hippocrates reasoned that the body must also be made of four things. These were the humours: blood, phlegm, yellow bile and black bile. Each was linked to an element and to two qualities. Blood was hot and wet like air; phlegm cold and wet like water; yellow bile hot and dry like fire; black bile cold and dry like earth.",
            "In a healthy person, the humours were believed to be in balance. Illness meant that one humour had grown too strong or too weak. A runny nose was too much phlegm; a fever was too much blood. Treatment meant putting the balance right, mostly through diet, rest and exercise, but sometimes by bleeding or purging."
          ],
          tip: "Four elements, four liquids, two qualities each. Draw the diagram from memory until you can do it in under a minute."
        },
        {
          heading: "Galen and the Theory of Opposites",
          paragraphs: [
            "Galen was a Greek doctor who worked in Ancient Rome in the second century AD, from 129 to about 216. He took the Four Humours from Hippocrates and developed them. His great addition was the Theory of Opposites: if an illness was caused by too much of a cold, wet humour, the cure was something hot and dry. A patient with too much phlegm might be told to eat hot peppers. A patient with a fever, hot and red, might be given cucumber, or bled.",
            "Galen also studied the body. He treated wounded gladiators, which let him see inside living people, and he dissected animals, mostly pigs and apes, because human dissection was not allowed in Rome. From this he drew detailed diagrams. Some were accurate. Some were wrong: he believed the liver made the blood and pumped it round the body, which it does not.",
            "Galen wrote a great many books, and that is the key to his power. When his work was translated into Latin around the year 1000, roughly 800 years after his death, it became the basis of medical training in Europe. For medieval students, Galen was not an opinion; he was the textbook."
          ],
          tip: "Hippocrates set out the humours; Galen developed them and added the Theory of Opposites. Exam questions often ask you to tell the two apart."
        },
        {
          heading: "Why the Church backed Galen",
          paragraphs: [
            "The Four Humours were popular for 250 years because the Church promoted them. Galen's ideas fitted Christian beliefs: he wrote that the body had a soul, and that every part of it was designed to work together, which matched the teaching that God had created the body. The Church adopted Hippocrates and Galen as the approved explanation of disease.",
            "The Church then made sure the theory was not challenged. It controlled the universities where physicians were trained, so students learned Galen and nothing else. Books were copied by hand by monks, so the Church chose which books existed. Most people could not read, so they believed what they were told. And the Church discouraged the dissection of human bodies, so nobody could check Galen's anatomy against a real one.",
            "The few dissections that did happen prove the point. A painting in the Fasciculus Medicinae, printed in 1491 and the first medical book printed with pictures, shows a physician reading aloud from Galen while a barber surgeon cuts open the body of an executed criminal. The purpose was not to discover anything new. It was to show students that Galen was right."
          ],
          worked: {
            q: "Explain one way in which the Church helped to keep the Four Humours popular. Plan it as point, evidence, explanation.",
            steps: [
              "Point: choose one way the Church acted. The Church controlled medical training.",
              "Evidence: name something specific. The Church ran the universities where physicians studied, and the course was based on Galen's books.",
              "Explanation: say what this meant. Every trained physician left university believing in the Four Humours, and nobody taught an alternative.",
              "Check the belief words: the plan says physicians believed in the humours; it does not say the humours were real."
            ],
            answer: "Point: the Church controlled training. Evidence: Church-run universities taught Galen. Explanation: every physician was trained to believe the Four Humours and no other theory was taught."
          }
        }
      ],
      gate: [
        { kind: "mcq", q: "Who first set out the Theory of the Four Humours?", options: ["Hippocrates, in Ancient Greece", "Galen, in Ancient Rome", "John of Gaddesden, in England", "William the Conqueror, in Normandy"], answer: 0, why: "Hippocrates, a doctor in fifth-century BC Greece, set out the Four Humours. Galen developed the theory about five hundred years later.",
          feedback: [
            "",
            "Galen is the name most linked to the humours, because his books were the medieval textbook, but he developed the theory rather than inventing it. Hippocrates set it out about five hundred years earlier in Ancient Greece.",
            "John of Gaddesden was a fourteenth-century English physician who used the Four Humours, long after they were invented. The theory came from Hippocrates in Ancient Greece.",
            "William the Conqueror was the Norman who invaded England in 1066; he had nothing to do with medicine. The Four Humours came from Hippocrates in Ancient Greece."
          ] },
        { kind: "gap", q: "Galen's ___ said that an illness should be treated with its opposite: a hot cure for a cold illness.", answer: "Theory of Opposites", options: ["Theory of Opposites", "miasma", "feudal system"], why: "The Theory of Opposites was Galen's addition to the Four Humours: balance a cold, wet illness with something hot and dry.",
          feedback: {
            "miasma": "Miasma is the idea that bad air carried disease; it is about causes, not treatment, and it was not Galen's. Treating an illness with its opposite is Galen's Theory of Opposites.",
            "feudal system": "The feudal system is how medieval society was organised, with the king at the top and peasants at the bottom. It has nothing to do with medicine. Galen's treatment idea is the Theory of Opposites."
          } },
        { kind: "mcq", q: "Which four liquids did the Theory of the Four Humours say made up the body?", options: ["Blood, phlegm, yellow bile and black bile", "Blood, water, sweat and tears", "Blood, phlegm, urine and bile", "Water, air, fire and earth"], answer: 0, why: "The humours were blood, phlegm, yellow bile and black bile, each linked to one of the four elements.",
          feedback: [
            "",
            "Sweat and tears are liquids the body makes, but they were not humours. The humours were blood, phlegm, yellow bile and black bile.",
            "Urine was examined by physicians, but it was a sign of illness, not a humour. The humours were blood, phlegm and two kinds of bile: yellow and black.",
            "Water, air, fire and earth are the four elements of the Greek world, not the humours. Each humour was linked to an element, but the humours themselves were blood, phlegm, yellow bile and black bile."
          ] }
      ],
      modules: [
        {
          title: "A chronology of the humours",
          task: {
            kind: "order",
            q: "Put these events in chronological order, earliest first.",
            items: [
              "Hippocrates sets out the Four Humours in Ancient Greece (fifth century BC)",
              "Galen develops the theory in Ancient Rome (second century AD)",
              "Latin translations of Hippocrates and Galen appear in Europe (around 1000)",
              "The Normans conquer England (1066)",
              "The Fasciculus Medicinae is printed with pictures of a dissection (1491)"
            ]
          },
          levels: {
            support: {
              steps: [
                "BC dates come before AD dates, and a bigger BC number is earlier.",
                "The fifth century BC is before the second century AD.",
                "Around 1000 is before 1066, which is before 1491.",
                "Read the dates in the brackets and arrange from smallest to largest, BC first."
              ],
              example: {
                q: "Practice: put in order: the Norman Conquest (1066), the Black Death (1348), Hippocrates (fifth century BC).",
                steps: ["BC comes first: Hippocrates.", "Then the smaller AD date: 1066.", "Then 1348."],
                answer: "Hippocrates; the Norman Conquest; the Black Death."
              }
            },
            core: { hint: "Greece before Rome; both before the Middle Ages. Within the Middle Ages, around 1000 comes before 1066, and 1491 is near the very end." },
            stretch: { extend: "About 800 years separate Galen's death and the Latin translations of his work. Explain why that gap matters for the question of why the Four Humours were still believed in 1500." }
          },
          why: "Hippocrates (fifth century BC), then Galen (second century AD), then the Latin translations around 1000, then the Norman Conquest in 1066, then the printed Fasciculus Medicinae in 1491.",
          explain: "Say, in one sentence, why a date of 460 BC is earlier than a date of 370 BC."
        },
        {
          title: "Using the Theory of Opposites",
          task: {
            kind: "mcq",
            q: "A patient has a fever: he is hot and red. Following Galen's Theory of Opposites, what would a medieval physician most likely advise?",
            options: ["Something cold and wet, such as cucumber", "Something hot and dry, such as peppers", "A pilgrimage to a holy shrine", "Clearing the rubbish from the street outside"],
            answer: 0,
            feedback: [
              "",
              "Hot peppers would be the cure for a cold, wet illness such as a runny nose. A fever is hot, so by the Theory of Opposites the physician gives the opposite: something cold and wet, like cucumber.",
              "A pilgrimage is a religious treatment, asking God for help. The question asks what the Theory of Opposites would advise, and that theory balances a hot illness with a cold cure such as cucumber.",
              "Clearing rubbish comes from the idea of miasma, bad air. The Theory of Opposites is about the humours: a hot illness is treated with something cold and wet, like cucumber."
            ],
            why: "The Theory of Opposites treats an illness with its opposite quality. A fever is hot, so the cure was something cold and wet, such as cucumber, or bleeding to remove hot blood."
          },
          contexts: [
            { label: "A knight", q: "A knight comes home from a tournament burning with fever: hot and red. Following Galen's Theory of Opposites, what would a medieval physician most likely advise?" },
            { label: "A miller's daughter", q: "A miller's daughter lies in bed with a fever, her face flushed and hot. Following Galen's Theory of Opposites, what would a medieval physician most likely advise?" },
            { label: "An abbot", q: "An abbot sends for a physician because he is hot, red and feverish. Following Galen's Theory of Opposites, what would a medieval physician most likely advise?" }
          ],
          explain: "Say, in one sentence, how the Theory of Opposites decided which cure to give.",
          levels: {
            support: {
              steps: [
                "Name the quality of the illness: a fever is hot.",
                "The Theory of Opposites says: give the opposite quality.",
                "The opposite of hot is cold, so look for a cold, wet food.",
                "Rule out anything that is not about the humours at all, such as prayer or clearing rubbish."
              ],
              example: {
                q: "Practice: a patient has a runny nose and shivers, which physicians classed as cold and wet. By the Theory of Opposites, what would they give?",
                steps: ["The illness is cold and wet.", "Give the opposite: hot and dry.", "Hot peppers or chillies fit."],
                answer: "Something hot and dry, such as hot peppers."
              }
            },
            core: { hint: "Hot illness, cold cure. Which option is cold?" },
            stretch: { extend: "The same patient also has a runny nose, which physicians classed as cold and wet. Explain the problem a physician faced in treating both symptoms at once, and what this tells you about the theory." }
          },
          why: "By the Theory of Opposites, a hot illness needs a cold remedy. Whoever the patient is, a fever is hot and red, so the advice is cold and wet: cucumber, or bleeding."
        },
        {
          title: "Explain one way the Church kept the theory popular",
          task: {
            kind: "written",
            q: "Explain one way in which the Church helped to keep the Theory of the Four Humours popular in medieval England. (4 marks)",
            marks: 4,
            criteria: [
              "Names one specific way the Church acted: controlling universities, copying books, discouraging dissection, or teaching people who could not read",
              "Gives precise detail, such as Galen's books forming the university course, or monks copying books by hand",
              "Explains why this kept the theory popular: no alternative was taught, or nobody could check Galen against a real body",
              "Links back to the question and the period c1250–c1500"
            ],
            model: "One way the Church kept the Four Humours popular was by discouraging the dissection of human bodies. Galen had drawn his diagrams from animals and from wounded gladiators, and some of them were wrong, such as his belief that the liver pumped the blood. Because dissection was discouraged, medieval physicians could not open a human body and compare it with Galen's drawings, so his mistakes were never found. The rare dissections that did happen, like the one pictured in the Fasciculus Medicinae in 1491, were used to confirm Galen rather than to test him. This meant that the Four Humours went unchallenged from 1250 to 1500."
          },
          levels: {
            support: {
              steps: [
                "Choose one way: universities, book copying, dissection, or control of what people were told.",
                "Give a detail that proves it: a name, a date or an object.",
                "Write ‘Because of this…’ and explain why no one could challenge the theory.",
                "Finish with ‘This meant that…’ and the dates c1250–c1500."
              ],
              example: {
                q: "Practice: explain one way in which hand-copying of books kept old ideas alive. (4 marks)",
                steps: [
                  "Way: books were copied by hand by monks.",
                  "Detail: the Church chose which books were copied, and Galen's were among them.",
                  "Because of this, new or rival books were rarely copied and hardly anyone saw them.",
                  "This meant that the old ideas were the only ideas most people ever met."
                ],
                answer: "Books were copied by hand by monks, and the Church decided which books were worth copying. Galen's were copied again and again; rival ideas were not. Because of this, almost nobody ever read an alternative, so the old ideas stayed the only ideas available for 250 years."
              }
            },
            core: { hint: "Pick the way you can give the most precise detail for. Dissection has a date (1491) and a wrong fact (the liver) you can use." },
            stretch: { extend: "Which factor from your list of six does the Church belong to? Write a sentence arguing that it could belong to two different factors at once." }
          },
          why: "A top answer picks one way, proves it with a precise detail, explains the mechanism (no alternative, no checking), and links back to the dates. The model uses dissection because it gives a date and a concrete mistake.",
          explain: "Say, in one sentence, which of the Church's four methods you think was the most powerful, and why."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 4 ─────────────────────────────
    {
      key: "treatment-prevention", n: 4,
      title: "Treatments and preventions",
      lead: "This chapter shows you what medieval people did when they were ill, what they did to avoid illness, and how every method followed from an idea about causes.",
      covers: [5],
      pretext: {
        words: [
          { word: "treatment", means: "what you do when you already have an illness", sentence: "Bloodletting was a common medieval treatment." },
          { word: "prevention", means: "what you do to avoid getting an illness", sentence: "Keeping clean was a form of prevention." },
          { word: "bloodletting", means: "removing blood from a patient", sentence: "The barber surgeon carried out the bloodletting with a small knife." },
          { word: "purging", means: "making a patient vomit or empty their bowels", sentence: "Purging was meant to remove an excess humour." },
          { word: "remedy", means: "a medicine, usually made from herbs", sentence: "The apothecary mixed a remedy of honey and herbs." },
          { word: "pilgrimage", means: "a journey to a holy place to ask for God's help", sentence: "She went on a pilgrimage to pray for her sick son." }
        ],
        passage: [
          "Treatment is what you do when you are already ill.",
          "Prevention is what you do to avoid getting ill.",
          "Medieval treatments followed the ideas about causes.",
          "If the humours seemed out of balance, physicians tried to put them right.",
          "Bloodletting removed blood, using a knife, leeches or cupping.",
          "Purging made the patient vomit or empty their bowels.",
          "Herbal remedies were drunk, sniffed or rubbed on the skin.",
          "If God had sent the disease, people believed, prayer and pilgrimage might cure it.",
          "Prevention mattered, because treatments often failed.",
          "People were told to live a clean, Christian life.",
          "They washed, exercised and avoided bad smells.",
          "Some of these habits we still keep today, for different reasons."
        ]
      },
      sections: [
        {
          heading: "Treating the humours",
          paragraphs: [
            "Medieval physicians believed that disease came from an imbalance of the humours, so most treatments aimed to restore the balance. Bloodletting was the most common. Blood was drained from a vein with a small knife, drawn out by leeches, or pulled to the surface by heated cups pressed on the skin. Different points on the body were bled for different illnesses. Physicians rarely did it themselves; barber surgeons, or anyone with a steady hand, did the cutting.",
            "Purging was the other way to remove an excess humour. The patient was given an emetic to make them vomit, or a laxative or enema to empty the bowels. Apothecaries and wise women mixed these; physicians prescribed them. Remedies were mostly herbal: plants mixed with honey, wine or vinegar, drunk, sniffed, or spread on the skin as an ointment. Some foods were chosen to rebalance the humours: cucumber to cool a fever, hot peppers to dry out a cold.",
            "Here is the problem your lesson spotted. Physicians believed each symptom was a separate imbalance and treated it on its own. A winter flu brings a fever (hot and red) and a runny nose with shivers (cold and wet). The physician would prescribe cucumber or bleeding for the fever and hot peppers for the shivers. Two opposite cures, for one illness, at the same time."
          ],
          tip: "Bloodletting was the most common treatment, but it was usually done by a barber surgeon, not a physician. Examiners notice when you get the right person."
        },
        {
          heading: "Religious and supernatural treatments",
          paragraphs: [
            "If God had sent the illness, then the cure had to come from God too. People prayed, fasted, went on pilgrimage to the shrine of a saint, or paid a priest to say a special mass for them. These were not seen as desperate measures. To someone who believed that sin caused sickness, confession was the logical medicine.",
            "Alongside these were supernatural cures that had little to do with the Church: lucky charms, chants, and remedies for particular complaints, such as hanging a magpie's beak round your neck to cure toothache. Many people used all three kinds at once: a herbal remedy from the apothecary, a prayer in church, and a charm under the pillow.",
            "A fourteenth-century English physician, John of Gaddesden, wrote a popular medical book called the Rosa Anglica. His cure for lethargy, extreme tiredness, included having people talk loudly round the patient, rubbing their hands and feet, and arranging to “cause pigs to squeal in their ears”. It also used two humoural treatments: an enema, which is purging, and the advice to “open the vein of the head”, which is bloodletting. A respected physician really did write this down as medicine."
          ],
          quote: { text: "cause pigs to squeal in their ears", source: "John of Gaddesden, Rosa Anglica (14th century), on curing lethargy; translation as printed in the department's deck" },
          tip: "When you use John of Gaddesden, say what his advice tells you about medieval thinking: symptoms were attacked one at a time, and bleeding and purging were the standard tools."
        },
        {
          heading: "Prevention: a clean body and a clean soul",
          paragraphs: [
            "Treatments were not guaranteed to work, so physicians put great weight on not getting ill in the first place. Prevention came in two kinds, matching the two kinds of cause. Religious prevention meant living a Christian life: praying, going to church and obeying the Commandments. Some went further, carrying charms, chanting, or whipping themselves in public so that God would not need to punish them.",
            "Rational prevention meant keeping the body and the air clean: bathing and washing, exercising, not overeating, keeping the streets free of rubbish, and purifying the air with fires or sweet-smelling herbs. People were also bled or purged while healthy, to keep the humours balanced before anything went wrong.",
            "Each method follows from an idea about causes. Bleeding and diet follow from the Four Humours. Clean streets and sweet herbs follow from miasma. Prayer and pilgrimage follow from God's punishment. Notice that several of these habits survive today: we wash, exercise, eat sensibly and clear away rubbish. We do them for different reasons, but medieval people were not wrong that they helped."
          ],
          worked: {
            q: "Sort these three methods into treatment or prevention, and name the idea about causes each one follows: carrying a pomander of sweet herbs; bleeding a patient with a fever; going on pilgrimage when your child is ill.",
            steps: [
              "Ask of each: is the person already ill, or trying to stay well? Already ill means treatment.",
              "Sweet herbs are carried to stay well, so prevention. Smell means the idea is miasma.",
              "Bleeding a feverish patient is treatment. Draining blood means the idea is the Four Humours.",
              "A pilgrimage for a sick child is treatment. Asking God for help means the idea is religion."
            ],
            answer: "Sweet herbs: prevention, miasma. Bleeding: treatment, Four Humours. Pilgrimage: treatment, religion."
          }
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is a treatment, not a prevention?", options: ["Bleeding a patient who has a fever", "Going to church every Sunday", "Keeping the streets clear of rubbish", "Not overeating"], answer: 0, why: "Treatment is what you do when you are already ill. Bleeding a feverish patient treats an illness; the other three are done to stay well.",
          feedback: [
            "",
            "Going to church was a way of living a good Christian life so that God would not send illness: that is prevention. The treatment in the list is bleeding a patient who is already ill.",
            "Clearing rubbish was meant to stop bad air before anyone fell ill, so it is prevention. Bleeding a feverish patient is the treatment: the person is already sick.",
            "Not overeating keeps the humours balanced in a healthy person, so it is prevention. The treatment is bleeding a patient who already has a fever."
          ] },
        { kind: "gap", q: "___ meant making a patient vomit or empty their bowels to remove an excess humour.", answer: "Purging", options: ["Purging", "Bloodletting", "Pilgrimage"], why: "Purging used emetics, laxatives or enemas to empty the body; bloodletting removed blood instead.",
          feedback: {
            "Bloodletting": "Bloodletting removes blood with a knife, leeches or cups. Making a patient vomit or empty their bowels is purging.",
            "Pilgrimage": "A pilgrimage is a journey to a holy place to ask God for help; it is a religious treatment, not a way of emptying the body. Vomiting or emptying the bowels is purging."
          } },
        { kind: "mcq", q: "Why did medieval physicians often give several different remedies for one illness?", options: ["They believed each symptom was a separate imbalance of the humours", "They were paid for every remedy they prescribed", "The Church ordered them to use at least three cures", "They had read about germs and wanted to be safe"], answer: 0, why: "Physicians treated each symptom separately, believing each was its own imbalance, so one illness could get several, even contradictory, remedies.",
          feedback: [
            "",
            "Physicians were expensive, but the number of remedies came from their theory, not their fees: they believed each symptom was a separate imbalance of the humours and treated each on its own.",
            "The Church promoted Galen's ideas but gave no rule about the number of cures. The several remedies came from the belief that each symptom was a separate imbalance of the humours.",
            "Nobody in medieval England knew about germs. The several remedies came from the belief that each symptom was its own imbalance of the humours, needing its own cure."
          ] }
      ],
      modules: [
        {
          title: "From cause to cure",
          task: {
            kind: "match",
            q: "Match each treatment or prevention to the idea about the cause of disease that it followed from.",
            pairs: [
              ["Bleeding a patient", "Four Humours: draining an excess of blood"],
              ["Clearing rubbish from the streets", "Miasma: removing the source of bad smells"],
              ["Going on a pilgrimage", "Religion: asking God to lift a punishment"],
              ["Carrying sweet-smelling herbs", "Miasma: keeping corrupted air away from the nose"],
              ["Eating hot peppers for a runny nose", "Theory of Opposites: a hot, dry cure for a cold, wet illness"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask of each method: what is it trying to get rid of, or keep away?",
                "Blood or a body fluid points to the humours.",
                "Smell or air points to miasma.",
                "God, saints or sin points to religion. A hot cure for a cold symptom is the Theory of Opposites."
              ],
              example: {
                q: "Practice: a town lights fires in the streets during an outbreak of disease. Which idea about causes is behind it?",
                steps: ["Ask what the fires are for: to move and clean the air.", "Air and smell point to miasma."],
                answer: "Miasma."
              }
            },
            core: { hint: "Two methods are about air, one about blood, one about God, and one about hot versus cold." },
            stretch: { extend: "Choose the method you think did the most real good, and explain why it helped even though the idea behind it was wrong." }
          },
          why: "Bleeding follows from the Four Humours; clearing rubbish and carrying herbs both follow from miasma; pilgrimage follows from religion; hot peppers for a cold symptom follow from the Theory of Opposites.",
          explain: "Say, in one sentence, why knowing the idea about causes lets you predict the treatment."
        },
        {
          title: "Name the treatment",
          task: {
            kind: "mcq",
            q: "A barber surgeon opens a vein in a patient's arm and lets the blood run into a bowl. Which treatment is this, and which idea is it based on?",
            options: ["Bloodletting, to remove excess blood and rebalance the humours", "Purging, to empty the stomach and rebalance the humours", "Flagellation, to show God the patient is sorry", "Purifying the air, to drive away miasma"],
            answer: 0,
            feedback: [
              "",
              "Purging empties the stomach or bowels by vomiting or laxatives; nothing here is being swallowed or passed. Draining blood from a vein is bloodletting, meant to rebalance the humours.",
              "Flagellation is people whipping themselves to show God they are sorry; it is religious and draws no blood from a vein on purpose. Opening a vein to drain blood is bloodletting, based on the humours.",
              "Purifying the air uses fires or sweet herbs and is about miasma, not the body. Draining blood from a vein is bloodletting, based on the Four Humours."
            ],
            why: "Blood is being removed from the body on purpose. That is bloodletting, and the idea behind it is that an excess humour, here blood, must be drained to restore balance."
          },
          contexts: [
            { label: "Leeches", q: "An apothecary places several leeches on a patient's back and leaves them to feed. Which treatment is this, and which idea is it based on?" },
            { label: "Cupping", q: "A barber surgeon presses heated cups onto a patient's skin so that blood is drawn to the surface and released. Which treatment is this, and which idea is it based on?" }
          ],
          explain: "Say, in one sentence, what all three methods (knife, leeches, cups) have in common.",
          levels: {
            support: {
              steps: [
                "Ask: what is leaving the body? Blood, vomit, or nothing?",
                "If blood is leaving, the treatment is bloodletting, whatever tool is used.",
                "Bloodletting always rests on the Four Humours: too much blood must be drained.",
                "Rule out the religious and miasma options: nobody is praying and nobody is cleaning the air."
              ],
              example: {
                q: "Practice: a physician gives a patient a drink that makes him vomit. Which treatment is this, and which idea is it based on?",
                steps: ["What leaves the body? The contents of the stomach.", "That is purging.", "Purging rests on the humours: an excess is being removed."],
                answer: "Purging, based on the Four Humours."
              }
            },
            core: { hint: "Knife, leeches and cups are three tools for the same job. What is the job?" },
            stretch: { extend: "Bloodletting was still used in the nineteenth century. Suggest two reasons a treatment that did not work could survive for so long." }
          },
          why: "Knife, leeches and heated cups are three ways of doing the same thing: removing blood. All three are bloodletting, based on the belief that an excess humour had to be drained."
        },
        {
          title: "Why prevention mattered",
          task: {
            kind: "written",
            q: "Explain why prevention was so important to people in medieval England. Include examples of the methods people used to avoid getting ill. (4 marks)",
            marks: 4,
            criteria: [
              "States the reason: treatments were unreliable, so it was safer not to fall ill at all",
              "Gives at least one religious method of prevention, such as prayer, church-going or obeying the Commandments",
              "Gives at least one rational method, such as bathing, exercise, clean streets or purifying the air",
              "Links each method to the idea about causes it followed from, and back to the question"
            ],
            model: "Prevention mattered because medieval treatments could not be relied on. Bleeding, purging and herbal remedies often failed, and people knew it, so it was far better not to fall ill in the first place. Because many believed that God sent disease, one kind of prevention was religious: praying, going to church and keeping the Commandments so that God would have no reason to punish you. Because others believed in miasma and the humours, there was rational prevention too: washing, exercising, not overeating, and keeping the streets clean so that bad air did not build up. Prevention was important, then, because it was the only part of medicine that people felt they could trust."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: say why prevention mattered. Begin ‘Prevention mattered because…’ and mention that treatments often failed.",
                "Sentence 2: give a religious method and say which belief it came from.",
                "Sentence 3: give a rational method and say which belief it came from.",
                "Sentence 4: link back to the question with ‘Prevention was important, then, because…’."
              ],
              example: {
                q: "Practice: explain why bloodletting was so common in medieval England. Include who carried it out. (4 marks)",
                steps: [
                  "Reason: physicians believed most illness was an excess of a humour.",
                  "Detail: blood was the easiest humour to remove, with a knife, leeches or cups.",
                  "Who: barber surgeons usually did it, cheaply.",
                  "Link: so it was the first treatment most people met."
                ],
                answer: "Bloodletting was common because physicians believed that most illnesses came from an excess of a humour, and blood was the easiest humour to remove. It could be done with a knife, leeches or heated cups, and barber surgeons did it cheaply, so it was the treatment most people could afford and the first one they met."
              }
            },
            core: { hint: "Reason, religious example, rational example, link. Each example should name the belief it came from." },
            stretch: { extend: "Pick two medieval preventions we still use today. For each, explain the medieval reason and the modern reason, and say what this tells you about how medicine changes." }
          },
          why: "Four marks reward the reason (treatments were unreliable), one religious and one rational example, and the link between each method and the belief behind it.",
          explain: "Say, in one sentence, how an idea about causes shaped a method of prevention."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 5 ─────────────────────────────
    {
      key: "care", n: 5,
      title: "Who cared for the sick?",
      lead: "This chapter introduces the four medieval medics, shows where most care really happened, weighs up the hospitals, and teaches you to write a conclusion that gives a judgement.",
      covers: [6, 7],
      pretext: {
        words: [
          { word: "physician", means: "a university-trained doctor", sentence: "Only the rich could afford a physician." },
          { word: "apothecary", means: "someone who mixed and sold medicines", sentence: "The apothecary sold her an ointment for the rash." },
          { word: "barber surgeon", means: "a medic who let blood, pulled teeth and cut hair", sentence: "The barber surgeon lanced the boil on his neck." },
          { word: "wise woman", means: "a village woman who treated people at home, often for free", sentence: "The wise woman knew which herbs eased a cough." },
          { word: "hospital", means: "a place, usually run by the Church, that cared for the sick", sentence: "The hospital gave him a clean bed and food." },
          { word: "judgement", means: "a clear decision about how important something was", sentence: "A conclusion must give a judgement." }
        ],
        passage: [
          "Four main kinds of medic worked in medieval England.",
          "Physicians trained at university and were very expensive.",
          "Apothecaries mixed medicines and ointments and cost less.",
          "Barber surgeons pulled teeth, let blood and did small operations.",
          "Wise women treated people in their homes, often for free.",
          "Most sick people were cared for at home by women in the family.",
          "So women were the main providers of care.",
          "Hospitals were usually run by the Church.",
          "They cared for the soul as much as the body.",
          "Patients got rest, clean beds and fresh food.",
          "People with infectious diseases were often turned away.",
          "Hospitals offered care, not cure."
        ]
      },
      sections: [
        {
          heading: "The four medics",
          paragraphs: [
            "Physicians were trained at university, where they studied Galen for years and passed exams. There were very few of them, almost all men, and they were expensive, so only the wealthy used them. A physician's visit followed a routine. He observed the symptoms and checked the pulse, the colour of the skin and the urine, by colour and by taste. He compared the urine with the charts in his vademecum, his handbook. He consulted zodiac charts to help diagnose the illness and pick the best time to treat it. Then he prescribed, and usually sent the patient on to someone else to carry it out.",
            "Apothecaries mixed and sold medicines and ointments, following the physician's instructions or their own knowledge of herbs. They had training but no university qualification, and they cost less than a physician. Barber surgeons had no formal training at all. They let blood, pulled teeth, lanced boils and did small operations such as amputations, with a very low success rate, and they cut hair. They were cheaper still.",
            "The fourth medic was the wise woman: a village woman, often the lady of the manor, who went to people's homes and treated them with remedies, usually for free. She had no training that anyone wrote down, but she had experience, and she was there."
          ],
          tip: "Learn the four in order of cost, dearest first: physician, apothecary, barber surgeon, wise woman. It also happens to be the order of how rarely ordinary people saw them."
        },
        {
          heading: "Care at home",
          paragraphs: [
            "Medical advice was expensive, so most sick people never saw a physician at all. They were nursed at home by a female relative: a mother, a wife, a daughter. Women grew herbs, made remedies, dressed wounds, delivered babies and sat up through fevers. When the family could not cope, they sent for the wise woman.",
            "This means something important for your enquiry. Women were the main providers of care and treatment in medieval England. Yet women were almost never physicians, and the Church-run universities did not admit them. The people who did most of the medicine were the people with the least say in what medicine was.",
            "The Church still shaped care even in the home. Physicians were trained in its universities on Galen's books, apothecaries followed physicians, and the prayers said over the sick came from the Church. There was no path to medical training that did not run through it."
          ],
          tip: "A strong answer on care always mentions women. Exam questions about medics are often really questions about who was actually doing the work."
        },
        {
          heading: "Hospitals: care over cure",
          paragraphs: [
            "The number of hospitals grew during the Middle Ages, and most were run by the Church, attached to monasteries and nunneries. Because the Church taught that Christians should follow Jesus in caring for the sick, a hospital was a religious act as much as a medical one. The emphasis was on God and on the patient's soul. Prayer filled the day.",
            "Inside, hospitals were clean. Patients had fresh food, rest and clean surroundings, which did real good to someone worn down by hunger or cold. But hospitals were places to recover, not places to be treated. Few offered any treatment beyond prayer, and people with infectious or incurable diseases were usually turned away, although some hospitals were set up for one disease only, such as leprosy. Many beds were taken by travellers and pilgrims needing a night's rest.",
            "So how important were hospitals? That depends on what you count. If care means a clean bed, food and kindness, hospitals mattered. If treatment means trying to cure the disease, they barely figured, and the real work happened at home. You will weigh this up in the module below."
          ],
          worked: {
            q: "Plan a conclusion to: ‘How important were hospitals in providing care and treatment in medieval England?’ Use the scale: extremely, considerably, moderately, partially, not important at all.",
            steps: [
              "Pick a word from the scale that matches your judgement. ‘Partially’ fits: hospitals did some things well and others not at all.",
              "Name your key reason: the real providers of treatment were women at home, and hospitals offered care rather than cure.",
              "Acknowledge the other side in one line: hospitals did give clean beds, food and rest.",
              "Say why your key reason outweighs it: a clean bed is care, but it is not a treatment, and most people never reached one."
            ],
            answer: "Judgement: partially important. Key reason: treatment happened at home, led by women; hospitals offered care, not cure. Counter: clean beds, food and rest. Weighing: care without cure, and out of reach for most, so only partial."
          }
        }
      ],
      gate: [
        { kind: "mcq", q: "Which medic trained at university and was the most expensive?", options: ["The physician", "The apothecary", "The barber surgeon", "The wise woman"], answer: 0, why: "Physicians studied Galen at university, passed exams and charged fees only the wealthy could pay.",
          feedback: [
            "",
            "Apothecaries had training in mixing medicines but no university qualification, and they cost less than a physician. The university-trained, most expensive medic was the physician.",
            "Barber surgeons had no formal training; they let blood, pulled teeth and cut hair, and were cheap. The university-trained medic was the physician.",
            "Wise women treated people at home, often for free, and had no formal training at all. The university-trained, expensive medic was the physician."
          ] },
        { kind: "gap", q: "Most sick people in medieval England were treated at home by ___ in the family.", answer: "women", options: ["women", "physicians", "priests"], why: "A mother, wife or daughter nursed the sick at home; physicians were far too expensive for most families.",
          feedback: {
            "physicians": "Physicians were rare and expensive, so most families never saw one. The everyday nursing was done by women in the family.",
            "priests": "Priests prayed with the sick, but the nursing, remedies and wound care at home were done by women in the family."
          } },
        { kind: "mcq", q: "What did medieval hospitals mainly provide?", options: ["Care: rest, clean surroundings, fresh food and prayer", "Surgery by trained physicians", "Cures for infectious diseases such as plague", "Free medicines from an apothecary"], answer: 0, why: "Hospitals focused on care over cure. They gave rest, cleanliness, food and prayer, and usually turned away the infectious.",
          feedback: [
            "",
            "Physicians did not do surgery, and hospitals offered almost no treatment beyond prayer. What they provided was care: rest, clean beds, food and prayer.",
            "People with infectious diseases were usually not admitted at all, and hospitals had no cure for plague. They provided care, not cure: rest, cleanliness, food and prayer.",
            "Hospitals were not dispensaries; apothecaries sold medicines from their own shops. A hospital provided care: a clean bed, food, rest and prayer."
          ] }
      ],
      modules: [
        {
          title: "A physician's visit",
          task: {
            kind: "order",
            q: "Put the stages of a medieval physician's visit in the order they happened.",
            items: [
              "Observe the patient's symptoms and check the pulse, skin colour and urine",
              "Compare the urine with the charts in the vademecum",
              "Consult zodiac charts to diagnose the illness and choose the best time to treat",
              "Treat the patient, or send them on to a barber surgeon or apothecary"
            ]
          },
          levels: {
            support: {
              steps: [
                "A physician has to look before he can compare anything: observing comes first.",
                "He cannot compare the urine with a chart until he has examined it.",
                "Diagnosis and timing come before any treatment is chosen.",
                "The last stage is deciding what to do and who will do it."
              ],
              example: {
                q: "Practice: put a modern doctor's visit in order: write a prescription; listen to the patient describe the problem; examine the patient.",
                steps: ["Listening comes first.", "Then the examination.", "The prescription comes last."],
                answer: "Listen; examine; prescribe."
              }
            },
            core: { hint: "Look, compare, diagnose, act." },
            stretch: { extend: "Say which of the four stages is still part of a doctor's visit today, which has vanished completely, and why Hippocrates would have approved of the first stage." }
          },
          why: "Observe (symptoms, pulse, skin, urine); compare the urine with the vademecum charts; consult the zodiac to diagnose and choose a time; then treat or refer to a barber surgeon or apothecary.",
          explain: "Say, in one sentence, which stage of the visit a modern doctor would recognise, and which they would not."
        },
        {
          title: "Which medic is which?",
          task: {
            kind: "match",
            q: "Match each medieval medic to the correct description.",
            pairs: [
              ["Physician", "University-trained; diagnosed and prescribed; very expensive and rare"],
              ["Apothecary", "Mixed and sold medicines and ointments; trained but no university qualification"],
              ["Barber surgeon", "No formal training; let blood, pulled teeth, lanced boils, did small operations and cut hair"],
              ["Wise woman", "Treated villagers in their homes with remedies, usually for free"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the clue words: university means physician; medicines and ointments means apothecary.",
                "Cutting hair as well as bleeding means barber surgeon.",
                "Free, and in people's homes, means the wise woman.",
                "Check that each description is used once."
              ],
              example: {
                q: "Practice: a villager has a rotten tooth and a shilling to spare. Which medic does he visit, and why not a physician?",
                steps: ["Pulling teeth was a barber surgeon's job.", "A physician would not pull teeth, and would cost far more than a shilling."],
                answer: "The barber surgeon; physicians did not pull teeth and were too expensive."
              }
            },
            core: { hint: "Training, price and haircuts. Those three clues separate all four." },
            stretch: { extend: "Argue which of the four medics was the most important provider of treatment to ordinary people, and whether training and qualifications made any difference to how useful a medic was." }
          },
          why: "Physician: university, expensive, prescribed. Apothecary: medicines, trained, no degree. Barber surgeon: untrained, bleeding, teeth, haircuts. Wise woman: home visits, remedies, free.",
          explain: "Say, in one sentence, why qualifications did not decide who gave most of the treatment in medieval England."
        },
        {
          title: "Your conclusion on hospitals",
          task: {
            kind: "written",
            q: "How important were hospitals in providing care and treatment to people in medieval England? Write a conclusion that gives a clear judgement and explains your key reason.",
            criteria: [
              "Opens with a conclusion starter (‘In conclusion’, ‘To conclude’, ‘In summary’) and a judgement word from the scale: extremely, considerably, moderately, partially, not important at all",
              "States a key reason for the judgement, with a specific detail",
              "Acknowledges another view in one line and explains why the key reason outweighs it",
              "Summarises an overall argument rather than listing every point again"
            ],
            model: "In conclusion, hospitals were only partially important in providing care and treatment in medieval England. The key reason is that they offered care rather than cure: a patient got a clean bed, fresh food, rest and prayer, but almost no treatment for the disease itself, and anyone with an infectious illness was usually turned away at the door. It is true that this care did real good to people worn down by hunger and cold, and that the number of hospitals grew through the period. But most sick people never reached one. They were nursed at home by the women of the family or by the local wise woman, who gave the remedies, dressed the wounds and sat through the fevers. The home, not the hospital, was where medieval medicine happened."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: ‘In conclusion, hospitals were … important because …’. Pick your scale word.",
                "Sentence 2: give the key reason with one precise detail (who was turned away; what a patient actually received).",
                "Sentence 3: ‘It is true that …’ and give the other side in one line.",
                "Sentence 4: ‘But …’ and explain why your reason wins. Finish with a sentence that sums up the whole argument."
              ],
              example: {
                q: "Practice: write a two-sentence conclusion to ‘How important were physicians in treating ordinary people in medieval England?’",
                steps: ["Choose a scale word: not very important, because most people never saw one.", "Key reason: they were rare and expensive; counter: they led the thinking.", "Weigh: leading the thinking is not the same as treating a peasant."],
                answer: "In conclusion, physicians were not very important in treating ordinary people, because they were so rare and so expensive that most families never saw one. Although their training made them the leaders of medical thinking, the actual treating of ordinary people was done at home by women and wise women."
              }
            },
            core: { hint: "Judgement word, key reason, one line for the other side, then why your reason wins. A conclusion is a verdict, not a second essay." },
            stretch: { extend: "Rewrite your conclusion to argue the opposite judgement (considerably important) as convincingly as you can. Then say which version you believe, and why." }
          },
          why: "A good conclusion gives a judgement, backs it with a key reason and a detail, admits the other side, and explains why the key reason wins. It summarises; it does not repeat the essay.",
          explain: "Say, in one sentence, why a conclusion that only lists points again does not count as a judgement."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 6 ─────────────────────────────
    {
      key: "black-death-factors", n: 6,
      title: "The Black Death, and why medicine stood still",
      lead: "This chapter takes the case study of 1348–49, uses it to test every idea in the unit, and then pulls the factors together for the 12-mark question.",
      covers: [8, 9, 10],
      pretext: {
        words: [
          { word: "Black Death", means: "the plague that reached England in 1348", sentence: "The Black Death killed about a third of the population." },
          { word: "bubonic plague", means: "the disease most historians think the Black Death was", sentence: "Bubonic plague is spread by fleas that live on rats." },
          { word: "buboes", means: "painful swellings filled with pus", sentence: "Buboes appeared in the armpits and groin." },
          { word: "flagellant", means: "a person who whipped themselves to show God they were sorry", sentence: "Flagellants whipped themselves in public to show God they were sorry." },
          { word: "factor", means: "a cause of change or continuity, such as the Church or war", sentence: "The Church was the most important factor in medieval medicine." },
          { word: "continuity", means: "things staying the same over time", sentence: "There was great continuity in medical ideas from 1250 to 1500." }
        ],
        passage: [
          "In 1347 a new disease reached Europe on trading ships.",
          "In 1348 it reached England.",
          "We call it the Black Death.",
          "Most historians today think it was bubonic plague.",
          "It was carried by fleas living on black rats.",
          "Victims had painful swellings called buboes, fever and vomiting.",
          "Most died within a few days.",
          "About one third of the population died.",
          "People believed God had sent the plague as a punishment.",
          "Others blamed bad air, the planets or strangers.",
          "They prayed, fasted and carried sweet herbs.",
          "Some towns shut their gates to outsiders.",
          "The old ideas were tested, and none of them worked."
        ]
      },
      sections: [
        {
          heading: "A new disease, 1348–49",
          paragraphs: [
            "In 1347 ships returning from trade with the East brought a new disease to Europe. In 1348 it reached the shores of England. Nothing like it had been seen before. Victims developed buboes, large painful swellings in the armpits and groin, along with fever, chills, headache, vomiting and stomach pain. Most who caught it were dead within about five days. By 1349 about one third of the population of Britain had died.",
            "Most historians today think the disease was bubonic plague, carried by fleas that lived on black rats. The rats travelled on trading ships, and the plague passed to a person when an infected flea bit them. Nobody in 1348 knew any of this. What people did have were the ideas you have studied, and they reached for all of them at once.",
            "Many believed that God had sent the plague as a punishment for the sins of the world. Others blamed the planets: Mars, Jupiter and Saturn were said to be in an unusual position. Many blamed miasma, bad air rising from rotting rubbish, or poisonous gases released by earthquakes and volcanoes. Most physicians put it down to an imbalance of the humours. And some blamed outsiders, strangers in the town, which led to fear and cruelty towards people who had done nothing."
          ],
          tip: "Keep ‘what historians think’ (fleas, rats, bubonic plague) and ‘what people at the time believed’ (God, planets, bad air) in separate sentences. Mixing them is the most common error in this topic."
        },
        {
          heading: "How people tried to stay safe",
          paragraphs: [
            "Because so many believed the plague was God's punishment, the first response was to say sorry. People prayed and fasted. Flagellants whipped themselves in public, reasoning that if they punished themselves God would not need to. Priests led processions through the streets.",
            "Those who feared miasma attacked the air. Town councils ordered rubbish cleared from the streets. People carried herbs and spices to their noses, lit fires in their rooms, rang bells or let birds fly round the room to keep the air moving. Some even stood over their toilets, believing that one strong smell would drive out another. And towns began to keep strangers out, refusing entry to anyone unknown, an early form of the isolation that later became quarantine.",
            "Treatments were just as mixed. Patients prayed and held lucky charms. Buboes were cut open to drain the pus. Bread was pressed against the swellings and then buried in the ground. Patients were given cool food and cold baths, following the Theory of Opposites against a hot fever. None of it worked. Some historians see the Black Death as a turning point even so: it shook people's faith in the old answers, and the use of astrology grew as the Church became more accepting of it."
          ]
        },
        {
          heading: "Why so little change? The factors",
          paragraphs: [
            "Step back from the plague and ask the unit's enquiry question: why was there so much continuity in medicine between 1250 and 1500? Your review lesson gave you the factors. The Church did not want change. It controlled medical learning, chose which books were copied, and strongly discouraged anyone from criticising the Four Humours. Science and technology were weak: with no microscope and no printing until the very end of the period, there was no way to find new knowledge, and when something odd was discovered, physicians fitted it into the old theory rather than testing it.",
            "Attitudes in society reinforced this. People believed in God and feared hell, so criticising the Church was dangerous. Most also felt that medicine had always been done this way, so there was no need to change it. Individuals mattered too, but in the wrong direction: Hippocrates and Galen were so respected, and Galen so popular with the Church, that their authority blocked new ideas instead of inspiring them. Government spent no money on medicine, so there was nothing to pay for a breakthrough.",
            "At GCSE, in AQA 8145 Britain: Health and the People, this period is called ‘Medicine stands still’, and it will also ask you about Islamic medicine, which your lessons did not cover. While Galen was copied in Europe, scholars in the Islamic world such as Ibn Sina (980–1037), known in Europe as Avicenna, kept his work alive, organised it and added to it, and wrote the Canon of Medicine, an encyclopaedia that European universities later used. Hold that comparison ready for Year 10."
          ],
          tip: "Factors work together. The Church shaped attitudes, controlled education and promoted the individuals it liked. The best answers show the links, not just the list."
        },
        {
          heading: "The 12-mark ‘explain why’ answer",
          paragraphs: [
            "Section D of your assessment asks: explain why there was limited progress in medieval medicine, c1250–c1500. Twelve marks, two paragraphs, one factor per paragraph. Use PEEL. Point: there was limited progress because of a named factor. Evidence: a specific, detailed example. Explanation: what this meant for medicine. Link: back to the question. Then begin paragraph two with ‘However, … was also influential because…’ and do it again with a second factor.",
            "Section C is a smaller skill with the same muscle: proving a statement. Given ‘God was important in the Middle Ages’, you prove it with precise evidence: the Church taught that God sent disease, Doom paintings showed the fate of sinners, prayer and pilgrimage were treatments, and hospitals were run by monks and nuns. Precise means a name, a date, an object or a number, not ‘people were very religious’.",
            "Two habits earn marks. Start your answer in the language of the question (‘There was limited progress in medieval medicine because…’) rather than copying the question out. And keep your belief words: Galen's theory was followed; people believed God sent disease; physicians thought the humours were out of balance."
          ],
          worked: {
            q: "Plan paragraph one of: ‘Explain why there was limited progress in medieval medicine, c1250–c1500.’ (12 marks) Use the Church as your factor.",
            steps: [
              "Point: there was limited progress because of the Church, which did not want medical ideas to change.",
              "Evidence: the Church ran the universities, had Galen's books copied by hand, and discouraged human dissection; the 1491 Fasciculus Medicinae dissection was held to confirm Galen, not to test him.",
              "Explanation: this meant that no physician was trained in any other theory and nobody could check Galen's anatomy, so his mistakes, such as the liver pumping blood, survived.",
              "Link: so the Four Humours were still the accepted explanation in 1500, exactly as they had been in 1250."
            ],
            answer: "Point: the Church blocked change. Evidence: universities, hand-copied books, dissection discouraged, 1491 dissection confirming Galen. Explanation: no alternative taught, no checking possible, mistakes survived. Link: same ideas in 1500 as in 1250."
          }
        }
      ],
      gate: [
        { kind: "numeric", q: "In which year did the Black Death reach England?", answer: 1348, tolerance: 0, units: "", check: "1348",
          misconceptions: [
            { answer: 1347, says: "1347 is the year the disease arrived in Europe on the trading ships. It reached England the following year, 1348.", check: "1348-1" },
            { answer: 1349, says: "The outbreak in England ran from 1348 to 1349, which is why you see ‘1348–49’. It arrived in 1348; 1349 is when the first wave ended.", check: "1348+1" },
            { answer: 1066, says: "1066 is the Norman Conquest, the start of the medieval period. The Black Death came nearly three hundred years later, in 1348.", check: "1066" }
          ],
          why: "The disease reached Europe in 1347 and England in 1348. The English outbreak is dated 1348–49." },
        { kind: "mcq", q: "What did most people at the time believe had caused the Black Death?", options: ["God had sent it as a punishment for people's sins", "Fleas living on black rats had spread it", "A new germ had arrived from Asia", "Dirty drinking water had spread it"], answer: 0, why: "The most widespread belief was that the plague was God's punishment. Fleas and rats are what historians think today, not what people believed then.",
          feedback: [
            "",
            "Fleas and rats are the explanation historians give today. Nobody in 1348 knew it. The question asks what people at the time believed, and most believed God had sent the plague as a punishment.",
            "Germs were not discovered until the nineteenth century, so no one in 1348 could have blamed them. Most people believed God had sent the plague to punish sin.",
            "Dirty water as a cause of disease was discovered in the nineteenth century, five hundred years too late for 1348. In 1348 most people believed the plague was God's punishment; others blamed bad air or the planets."
          ] },
        { kind: "gap", q: "Most historians today think the Black Death was ___ plague, spread by fleas living on black rats.", answer: "bubonic", options: ["bubonic", "Roman", "humoural"], why: "Bubonic plague is named after the buboes, the swellings it causes. It passes to people through the bite of an infected flea.",
          feedback: {
            "Roman": "Rome has nothing to do with the plague's name. The disease is named after its most obvious symptom, the buboes, so it is bubonic plague.",
            "humoural": "Humoural is what medieval physicians would have said: an imbalance of the humours. Historians today name the disease after its swellings: bubonic plague."
          } }
      ],
      modules: [
        {
          title: "Factors that held medicine back",
          task: {
            kind: "match",
            q: "Match each factor to the way it held back change in medieval medicine.",
            pairs: [
              ["The Church", "Controlled medical learning and discouraged anyone from criticising the Four Humours"],
              ["Science and technology", "Without microscopes or printing, new discoveries were fitted into old theories instead of tested"],
              ["Attitudes in society", "Fear of hell and respect for tradition made people unwilling to question what had always been done"],
              ["Individuals", "Galen and Hippocrates were so respected that their authority blocked new ideas"],
              ["Government", "Spent no money on medicine, so there was nothing to fund a breakthrough"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Look for the clue in each description: who or what is doing the holding back?",
                "Learning, books and criticism of the humours point to the Church.",
                "Microscopes and printing are technology; money is government.",
                "Named people are Individuals; everyone's fear and habit are Attitudes."
              ],
              example: {
                q: "Practice: ‘Most people could not read, so they believed what they were told.’ Which factor is this closest to, and which second factor does it connect to?",
                steps: ["Not being able to read is about education, which the Church controlled.", "Believing what you are told is an attitude.", "So: the Church, connecting to attitudes in society."],
                answer: "The Church (through education), connecting to attitudes in society."
              }
            },
            core: { hint: "One factor is about money, one about tools, one about two famous names, one about everyone's fears, and one about who ran the universities." },
            stretch: { extend: "Rank the five factors from most to least important in explaining continuity, and justify your top choice in two sentences that show how it influenced at least two of the others." }
          },
          why: "The Church controlled learning and silenced criticism; weak science and technology meant no new knowledge; attitudes of fear and tradition resisted change; Galen's and Hippocrates' authority blocked rivals; government spent nothing.",
          explain: "Say, in one sentence, how the Church as a factor is linked to at least one other factor."
        },
        {
          title: "Build a PEEL paragraph",
          task: {
            kind: "order",
            q: "Put the parts of a 12-mark ‘explain why’ answer in the order you should write them.",
            items: [
              "Point: there was limited progress because of a named factor",
              "Evidence: a specific example with a name, date or object",
              "Explanation: what this meant for medicine, using ‘this meant that’",
              "Link: back to the question and the period c1250–c1500",
              "However: a second factor was also influential, starting paragraph two"
            ]
          },
          levels: {
            support: {
              steps: [
                "Every paragraph begins by answering the question: that is the Point.",
                "A point needs proof straight after it: Evidence.",
                "Then say what the evidence meant: Explanation.",
                "Tie it back to the question: Link. Only then move to the second factor with ‘However’."
              ],
              example: {
                q: "Practice: put these in order: ‘This meant that nobody could check Galen's anatomy.’ ‘The Church discouraged human dissection.’ ‘So the Four Humours survived unchallenged to 1500.’",
                steps: ["The statement of what happened is the evidence: dissection discouraged.", "What it meant comes next.", "The link to the period comes last."],
                answer: "The Church discouraged human dissection; this meant that nobody could check Galen's anatomy; so the Four Humours survived unchallenged to 1500."
              }
            },
            core: { hint: "P, E, E, L, then However. The explanation always contains ‘this meant that’." },
            stretch: { extend: "Write the first sentence of each of the five parts for the factor ‘attitudes in society’, in no more than 15 words each." }
          },
          why: "Point, Evidence, Explanation, Link, then However for the second factor. The examiner is looking for a developed explanation, which lives in the E-E-L, not in the Point alone.",
          explain: "Say, in one sentence, why the Explanation is worth more marks than the Point."
        },
        {
          title: "Explain why there was limited progress (12 marks)",
          task: {
            kind: "written",
            q: "Explain why there was limited progress in medicine in medieval England, c1250–c1500. (12 marks)",
            marks: 12,
            criteria: [
              "Two paragraphs, each on a different named factor, each opening in the language of the question",
              "Each paragraph gives specific, detailed evidence: a name, date, object or practice",
              "Each paragraph explains what the evidence meant for medicine, using ‘this meant that’",
              "Each paragraph links back to the question and the period c1250–c1500",
              "Paragraph two begins ‘However, … was also influential because…’ and the two factors are connected",
              "Ideas are reported as beliefs, never as facts: ‘people believed that’, ‘Galen taught that’"
            ],
            model: "There was limited progress in medieval medicine because of the Church. The Church ran the universities where physicians trained, had Galen's books copied by hand in its monasteries, and discouraged the dissection of human bodies; the rare dissections that did happen, such as the one pictured in the Fasciculus Medicinae in 1491, were staged to confirm Galen rather than to test him. This meant that every physician was taught the Four Humours and nothing else, and that nobody could check Galen's anatomy against a real body, so his mistakes, such as the belief that the liver pumped the blood, survived for centuries. As a result, the accepted explanation of disease in 1500 was the same as it had been in 1250. However, attitudes in society were also influential because people believed in God and feared hell, so questioning what the Church taught felt dangerous. When the Black Death struck in 1348, most people believed it was God's punishment and responded by praying, fasting and whipping themselves rather than looking for a new cause; others fell back on miasma and the humours, and when none of these worked, the usual conclusion was that God had not yet been satisfied. This meant that even a disaster that killed a third of the population did not shake the old ideas loose, because the habit of trusting tradition was stronger than the evidence. The Church and these attitudes fed each other, which is why there was so much continuity in medicine throughout the period c1250–c1500."
          },
          contexts: [
            { label: "The Church and attitudes", q: "Use the Church as your first factor and attitudes in society as your second. Explain why there was limited progress in medicine in medieval England, c1250–c1500. (12 marks)", why: "The Church shaped attitudes directly, so these two factors link easily in the ‘However’ paragraph." },
            { label: "Individuals and science", q: "Use individuals (Hippocrates and Galen) as your first factor and science and technology as your second. Explain why there was limited progress in medicine in medieval England, c1250–c1500. (12 marks)", why: "Galen's authority and the lack of tools to test him belong together: without microscopes or dissection, nobody could prove him wrong." },
            { label: "Government and the Church", q: "Use government as your first factor and the Church as your second. Explain why there was limited progress in medicine in medieval England, c1250–c1500. (12 marks)", why: "Government spent nothing on medicine and left learning to the Church, so the two factors connect through who controlled education and money." }
          ],
          levels: {
            support: {
              steps: [
                "Choose two factors from the list of five. Write them at the top of your page.",
                "Paragraph one: Point (name the factor), Evidence (a date, name or object), Explanation (‘this meant that’), Link (back to 1250–1500).",
                "Paragraph two: start ‘However, … was also influential because…’ and repeat the four steps.",
                "Final sentence: say how the two factors worked together. Check every idea is written as a belief."
              ],
              example: {
                q: "Practice: write a single PEEL paragraph on the factor ‘government’ for the question ‘Explain why there was limited progress in medieval medicine’.",
                steps: [
                  "Point: there was limited progress because government took no interest in medicine.",
                  "Evidence: kings and councils spent no money on medical research or training; medical learning was left entirely to the Church.",
                  "Explanation: this meant that there was nothing to pay for new discoveries and no one outside the Church with the power to challenge Galen.",
                  "Link: so medicine in 1500 was still built on ideas from Ancient Greece and Rome."
                ],
                answer: "There was limited progress in medieval medicine because government took no interest in it. Kings and town councils spent no money on medical research or training, leaving medical learning entirely to the Church. This meant that there was nothing to pay for a breakthrough and nobody outside the Church with the authority to question Galen. So, in 1500, medicine still rested on ideas from Ancient Greece and Rome."
              }
            },
            core: { hint: "Two factors, two PEEL paragraphs, one ‘However’. The best evidence in this unit has a date (1348, 1491) or a name (Galen, Hippocrates)." },
            stretch: { extend: "Add a short third paragraph that weighs the two factors and argues which mattered more, using the Black Death as your test case." }
          },
          why: "Twelve marks reward two developed PEEL paragraphs on two different factors, precise evidence, explanation with ‘this meant that’, links to the period, and a ‘However’ that connects the factors. The model keeps every idea as a belief.",
          explain: "Say, in one sentence, how your two factors are connected to each other."
        }
      ]
    }
  ],

  sources: {
    deckDump: "hi_y09_topic_5_medieval_medicine.txt",
    decksUsed: [
      "L1 Life in Medieval England.pptx",
      "L2 Ideas about the Cause of Disease.pptx",
      "L3 The Four Humours.pptx",
      "L4 Four Humours Popularity.pptx",
      "L5 Medieval Treatments & Preventions.pptx",
      "L6 Medieval Medics.pptx",
      "L7 Medieval Hospitals.pptx",
      "L8 The Black Death.pptx",
      "Medieval medicine review updated.pptx (and the earlier 'Medieval medicine review.pptx')",
      "Medieval Medicine assessment Powerpoint.pptx",
      "Medieval Medicine-in-Britain-Revision.pptx (revision summary; paraphrased only)"
    ],
    notes: "Lesson titles, enquiry questions, sequence, the three themes and four periods, the six factors, the five ideas about cause, the Hippocrates/Galen chronology, the Church's four methods of promoting the Four Humours, the winter-flu example, the treatment and prevention lists, the four medics and the physician's routine, the hospital facts, the Black Death causes/avoidance/treatments, the factors table, the conclusion scale and the PEEL structure are taken from the department's decks. All explanations, questions, examples and model paragraphs are original; the deck's model conclusion (L7 slide 10) and the revision deck's summary text are paraphrased, never reproduced. The only quotation is from John of Gaddesden's Rosa Anglica (14th century), in the English translation as printed on L5 slide 14; the translation's own source is unverified (see NOTES.md). Modern historians named in the deck (Sean Martin, David Herlihy) are paraphrased, not quoted. The 'Russian revolution assessment.pptx' that appears in the dump belongs to Topic 1 and was ignored. Islamic medicine (Ibn Sina) is mentioned once as a GCSE bridge and is not from the deck. astra/2: per-option feedback on every mcq and gap, misconceptions on both numeric items, explain prompts on every module, four context modules (ch2, ch3, ch4, ch6), glossary chapters, Connections and spacing; no widgets and no pretext.l1 (translation is a separate pass)."
  }
};
