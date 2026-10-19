// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 History · Year 7 Topic 5: The Tudors (religious policies) · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   every date, name and sequence is held in an independent CHRONOLOGY table in verify.py; every four-digit year in
//   pupil text must be in that table (or the small PARALLEL set used in non-Tudor support examples); every "order" task
//   is compared with the canonical sequences held there and dated sequences must be chronological; every mcq / gap /
//   match answer is compared with the independent answer key; numeric items carry `check` and `misconceptions` (each
//   with its own `check`); worked examples with arithmetic carry `checks`; contexts share the task's answer by
//   construction. Quotation guard: NOTHING is quoted — the department's deck prints no primary source, so no “…” text is
//   allowed anywhere in pupil text; the deck's own model paragraphs, its two textbook sources on Mary, its invented
//   first-person speech for Henry and its "churches could be whatever they wanted" gloss on the Act of Uniformity are
//   fingerprinted and banned. Language guard: Protestant / Catholic / Pope capitalised; Henry is never a Protestant,
//   Edward never a Catholic, Mary never a Protestant; Supreme Head is Henry's title and Supreme Governor Elizabeth's;
//   the deck's slips (Beckett, War of the Roses, Ann Boleyn, Act of Restraints, Phillip, "first Englishmen", "Anglo
//   meaning British", "heretics would be hanged", 30,000 men) are banned; British spelling. A mutation self-test
//   tampers with a scratch copy of this manifest and asserts that each of 19 tampers produces at least one FAIL.
//   astra/2: per-wrong-option `feedback` on every mcq/gap; `misconceptions` on every numeric; `explain` on every module;
//   `glossary[].chapter`; `connections` 4 × 4 ⊂ glossary; `meta.spacing [2,7,30]`; no constellation; no pretext.l1.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["hist-tudors"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "hist-tudors",
    subjectKey: "history",
    subject: "History",
    board: "AQA",
    spec: "KS3 → 8145",
    specRef: "KS3 Year 7 Topic 5: The Tudors — religious policies of Henry VIII, Edward VI, Mary I and Elizabeth I; foundations for GCSE History 8145 (change and continuity, causation, explaining and judging)",
    year: 7,
    tier: "KS3",
    title: "The Tudors",
    sub: "How Luther's protest split the Church, why Henry VIII broke with the Pope, and how Edward, Mary and Elizabeth each changed religion in England.",
    bigQuestion: "Which Tudor monarch made the biggest religious changes in England?",
    lessonCount: 6,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Martin Luther and the Reformation", question: "Why did Luther write the 95 Theses, how were his ideas different, and why did they spread like wildfire?", keywords: ["monarch", "Pope", "heresy", "indulgences", "95 Theses", "Reformation", "Protestant"] },
    { n: 2, title: "Henry VIII and the split from the Church", question: "Why did Henry VIII split from the Catholic Church, and what was the impact?", keywords: ["heir", "Catherine of Aragon", "Anne Boleyn", "Act of Supremacy", "Dissolution of the Monasteries", "excommunication"] },
    { n: 3, title: "Edward VI: a Protestant England", question: "How did Edward VI transform England into a Protestant country, and who really held the power?", keywords: ["regent", "Protestant", "Catholic", "prayer book", "Church of England"] },
    { n: 4, title: "Mary I: Bloody Mary?", question: "What religious changes did Mary make, and has history misjudged her?", keywords: ["Lady Jane Grey", "Philip II of Spain", "heresy", "propaganda", "Bloody Mary"] },
    { n: 5, title: "Elizabeth I: was the Middle Way a success?", question: "What were the key features of Elizabeth's reign, and was her Middle Way a success?", keywords: ["Middle Way", "Religious Settlement", "Supreme Governor", "Act of Uniformity", "Golden Age", "Spanish Armada"] },
    { n: 6, title: "The Tudors: review lesson", question: "Which Tudor monarch made the biggest religious changes in England?", keywords: ["policy", "impact", "long-lasting", "judgement", "success criteria"] }
  ],

  glossary: [
    { term: "monarch", means: "A king or queen: the person who rules the country.", chapter: "luther" },
    { term: "heir", means: "The person who will succeed the monarch and become the next king or queen.", chapter: "henry-split" },
    { term: "reign", means: "The time during which a king or queen rules the country.", chapter: "luther" },
    { term: "regent", means: "A person appointed to act on the monarch's behalf, for example while the monarch is a child.", chapter: "edward" },
    { term: "Pope", means: "The head of the Roman Catholic Church, based in Rome.", chapter: "luther" },
    { term: "heresy", means: "Believing or teaching something that goes against the religion of the Church or the monarch. In Tudor times it was a crime.", chapter: "mary" },
    { term: "indulgence", means: "A payment to the Church that was said to reduce the punishment for a person's sins. Luther attacked this idea.", chapter: "luther" },
    { term: "excommunication", means: "Being thrown out of the Catholic Church by the Pope. Henry VIII was excommunicated in 1538.", chapter: "henry-split" },
    { term: "Reformation", means: "The great change in the Christian Church that began when Luther challenged the Pope in 1517 and led to the Protestant churches.", chapter: "luther" },
    { term: "Protestant", means: "A Christian who followed the new ideas of the Reformation: the Bible first, simple churches, no Pope.", chapter: "edward" },
    { term: "Catholic", means: "A Christian who followed the traditional Church led by the Pope in Rome.", chapter: "mary" },
    { term: "Middle Way", means: "Elizabeth I's Religious Settlement of 1559, which tried to find a compromise that Catholics and Protestants could both live with.", chapter: "elizabeth" },
    { term: "annulment", means: "A ruling that a marriage was never valid, so it is cancelled. Henry VIII asked the Pope for one in 1527; your lesson sometimes calls it a divorce.", chapter: "henry-split" },
    { term: "Act of Supremacy", means: "The law of 1534 that made Henry VIII Supreme Head of the Church of England instead of the Pope.", chapter: "henry-split" },
    { term: "Dissolution of the Monasteries", means: "Henry VIII's closing of the monasteries from 1536, taking their land and wealth for the Crown.", chapter: "biggest-change" },
    { term: "Supreme Head", means: "The title Henry VIII took as leader of the Church of England. Elizabeth later chose the softer title Supreme Governor.", chapter: "biggest-change" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 glossary terms used exactly once.
  connections: [
    { group: "Words about ruling", terms: ["monarch", "heir", "reign", "regent"] },
    { group: "The power of the Church", terms: ["Pope", "heresy", "indulgence", "excommunication"] },
    { group: "Sides and settlements", terms: ["Reformation", "Protestant", "Catholic", "Middle Way"] },
    { group: "Henry's break with Rome", terms: ["annulment", "Act of Supremacy", "Dissolution of the Monasteries", "Supreme Head"] }
  ],

  chapters: [
    /* ───────────── 1 · Luther and the Reformation ───────────── */
    {
      key: "luther", n: 1, title: "Martin Luther and the Reformation",
      lead: "Who the Tudors were, why the Catholic Church was so powerful, what Luther said that was different, and why his ideas spread like wildfire.",
      covers: [1],
      pretext: {
        words: [
          { word: "monarch", means: "a king or queen", sentence: "Every Tudor monarch decided what religion England would follow." },
          { word: "Pope", means: "the head of the Catholic Church, in Rome", sentence: "For hundreds of years the Pope was the head of the Church in England." },
          { word: "heresy", means: "going against the teachings of the Church", sentence: "In the Middle Ages, heresy was a crime that could be punished by death." },
          { word: "indulgence", means: "a payment to the Church that was meant to reduce punishment for sins", sentence: "Luther said that selling an indulgence was wrong." },
          { word: "Reformation", means: "the great change that split the Christian Church in the 1500s", sentence: "The Reformation began with Luther's protest in 1517." },
          { word: "Protestant", means: "a Christian who followed Luther's new ideas", sentence: "A Protestant believed the Bible mattered more than the Pope." }
        ],
        passage: [
          "The Tudors ruled England from 1485 to 1603.",
          "Before the Tudors, almost everyone in England was Catholic.",
          "The Pope in Rome was the head of the Catholic Church.",
          "Most people could not read, and the Bible was written in Latin.",
          "So people trusted the Church to tell them about God, heaven and hell.",
          "Going against the teachings of the Church was a crime called heresy.",
          "In October 1517, a German monk called Martin Luther wrote the 95 Theses.",
          "He said the Church was wrong to sell indulgences, which were payments to forgive sins.",
          "Luther believed Christians should follow only what the Bible says.",
          "He wanted the Bible printed in languages people could understand.",
          "His ideas spread like wildfire across Europe.",
          "People who followed his ideas were called Protestants.",
          "This great change is called the Reformation."
        ]
      },
      sections: [
        {
          heading: "Who were the Tudors?",
          paragraphs: [
            "The Tudors were a royal family who ruled England from 1485 to 1603. The first Tudor king was Henry VII, who won the crown at the end of the Wars of the Roses. After him came his son Henry VIII, and then Henry's three children: Edward VI, Mary I and Elizabeth I. Your lesson's homework reading on Henry VII tells you how the family came to power.",
            "You will need a few words to talk about kings and queens. A monarch is a king or queen. The monarch's heir is the person who will succeed them, that is, take the throne next. A reign is the time a monarch rules. Nobles were rich landowners with titles such as Lord or Duke. The Pope was the head of the Catholic Church in Rome.",
            "The big question of this unit is: which Tudor monarch made the biggest religious changes in England? Earlier this year you saw how William the Conqueror took control of England, and how Mughal emperors used religion to rule. Now you will see four Tudor monarchs do the same, each in a different way."
          ],
          tip: "Learn the five Tudor monarchs in order: Henry VII, Henry VIII, Edward VI, Mary I, Elizabeth I. The last four are the ones your assessment is about."
        },
        {
          heading: "Why was the Catholic Church so powerful?",
          paragraphs: [
            "In the Middle Ages the Catholic Church was the most powerful organisation in Europe, and your lesson gives five reasons. First, most people could not read, so those who could were trusted completely. Second, the Bible was written in Latin, which even most readers could not understand, so only the Church could say what it meant.",
            "Third, there were no schools for ordinary people, so the Church gave people all the information about the world they had. Fourth, people were taught about heaven and hell and believed it. To question the Church felt like questioning God. Fifth, going against the ideas of the Church was a crime called heresy, and heretics could be put to death.",
            "Put these together and you can see why nobody argued with the Church. It controlled what people knew, what they believed, and what happened to them if they disagreed."
          ],
          worked: {
            q: "Explain one reason why the Catholic Church was so powerful in the Middle Ages.",
            steps: [
              "Point: make your reason clear in one sentence. One reason the Church was so powerful was that the Bible was written in Latin.",
              "Evidence: give a fact from the lesson. Most people could not read at all, and those who could read usually could not read Latin.",
              "Explain: say why this gave the Church power. Only priests could say what the Bible meant, so people had to trust the Church's word.",
              "Link: finish by answering the question. This made the Church powerful because it controlled what people knew about God."
            ],
            answer: "Point, evidence, explain, link: the Latin Bible meant only the Church could read God's word, so people depended on priests to tell them what to believe."
          },
          tip: "In this unit every explanation paragraph follows the same shape: Point, Evidence, Explain, Link. Your teacher calls it PEE or PEEL."
        },
        {
          heading: "What did Luther believe?",
          paragraphs: [
            "Martin Luther was a German monk. In October 1517 he wrote the 95 Theses, a list of complaints against the Church. His biggest complaint was about indulgences: payments to the Church that were supposed to reduce the punishment for a person's sins. Luther said nobody could buy forgiveness.",
            "For Luther, Christianity rested on scripture and nothing else. If a practice could not be found in the Bible, he held that it had no business in the Church. This was a direct challenge to the Pope, because many of the Pope's powers were not set out in the Bible. Luther also said that faith was personal: each person could read the Bible and understand it for themselves, so the Church did not need to tell them what to think.",
            "To make this possible, Luther wanted the Bible printed in languages ordinary people spoke. Until then it was printed only in Latin. Luther translated it into German; your lesson dates his German Bible to 1525. When he was called to a hearing he refused to take back his words, and while hiding in a friend's castle he kept writing and translating."
          ],
          tip: "Three Luther ideas to remember: the Bible comes first; faith is personal; no paying for forgiveness."
        },
        {
          heading: "Why did his ideas spread like wildfire?",
          paragraphs: [
            "Your lesson sorts the reasons into four factors. The weaknesses of the Church: it was rich, it sold indulgences, and many people already felt it had lost its way. The role of Luther himself: he was a brave and clever debater who argued with leading Catholics in public and won people over.",
            "European monarchs: some rulers backed Luther because they wanted to be free of the Pope's power and to keep Church money for themselves. New technologies: the printing press meant Luther's pamphlets and his German Bible could be copied by the thousand and carried across Europe in weeks.",
            "Catholics and Protestants came to disagree on many things. Catholics said the Pope should lead the Church, the Bible should stay in Latin, churches should be richly decorated, priests should wear magnificent robes, and people could pay indulgences. Protestants said the monarch should lead the Church in their country, the Bible should be in the people's language, churches should be plain, priests should wear simple robes, and nobody should pay for forgiveness."
          ],
          tip: "When you rank the four factors, ask which one the others depended on. Could Luther's ideas have travelled so fast without printing?"
        }
      ],
      gate: [
        { kind: "mcq", q: "What was heresy?", options: ["Going against the teachings of the Church", "Paying the Church money to forgive your sins", "Translating the Bible into German", "Refusing to pay taxes to the monarch"], answer: 0, why: "Heresy meant believing or teaching something that went against the Church. In the Middle Ages it was a crime that could be punished by death.",
          feedback: [
            "",
            "Paying the Church to forgive sins is an indulgence, the practice Luther attacked. Heresy is the crime of going against the Church's teaching.",
            "Translating the Bible was something Luther did, and the Church disliked it, but the word heresy means any belief that goes against the Church's teaching, not one particular act.",
            "Refusing taxes is a crime against the monarch, not the Church. Heresy is a religious crime: holding beliefs the Church says are wrong."
          ] },
        { kind: "gap", q: "Before the Reformation, the Bible was written in ___, so most people could not read it for themselves.", answer: "Latin", options: ["Latin", "English", "German"], why: "The Bible was in Latin, a language only priests and scholars could read, which is one reason the Church was so powerful.",
          feedback: {
            "English": "An English Bible came later, under the Protestants. Before the Reformation the Bible was in Latin, and that is exactly why ordinary people had to rely on priests.",
            "German": "German is the language Luther translated the Bible into, as part of the Reformation. Before his work it was only available in Latin."
          } },
        { kind: "mcq", q: "Which of these was a Protestant idea?", options: ["The Bible should be written in the language people speak", "The Pope in Rome should be the Head of the Church", "Churches should be highly decorated", "People can pay indulgences for their sins"], answer: 0, why: "Protestants wanted the Bible in the people's own language so that everyone could read it. The other three are traditional Catholic ways from your lesson's table.",
          feedback: [
            "",
            "Protestants rejected the Pope's leadership. They said the monarch of each country should be the Head of the Church there. Keeping the Pope in charge is the Catholic way.",
            "Richly decorated churches are the traditional Catholic way. Protestants wanted plain, simply decorated churches so that people focused on the Bible.",
            "Paying indulgences is the practice Luther attacked in the 95 Theses. Protestants said nobody should have to pay for forgiveness."
          ] }
      ],
      modules: [
        {
          title: "Catholic ways and Protestant ways",
          task: {
            kind: "match",
            q: "Match each traditional Catholic way to the new Protestant way that replaced it.",
            pairs: [
              ["The Pope in Rome should be the Head of the Church", "The monarch of a country should be the Head of the Church"],
              ["The Bible should be written in Latin", "The Bible should be written in the people's own language, such as English"],
              ["Churches should be highly decorated and inspiring", "Churches should be plain and simply decorated"],
              ["Priests should wear magnificent robes to show their status", "Priests should wear simple robes"],
              ["People can pay indulgences for their sins", "People should not have to pay indulgences for their sins"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Each Catholic way has an opposite on the Protestant side. Look for the pair that talks about the same thing: who leads, which language, how churches look, what priests wear, paying for sins.",
                "Who leads: the Catholic answer is the Pope; the Protestant answer is the monarch.",
                "Language: Catholic Latin; Protestant the language people speak.",
                "The two about appearance (churches, robes) both go from rich to plain. The one about indulgences goes from yes to no."
              ],
              example: {
                q: "Match the old way to the new way: letters carried by horse; news printed in a newspaper; news passed by word of mouth; letters sent by email.",
                steps: ["Find the two about letters: horse (old) goes with email (new).", "Find the two about news: word of mouth (old) goes with newspaper (new)."],
                answer: "Letters by horse → letters by email; news by word of mouth → news in a newspaper."
              }
            },
            core: { hint: "Pair the items that are about the same topic. On every topic the Protestant side is simpler, plainer or more local than the Catholic side." },
            stretch: { extend: "Explain which of these five differences would have mattered most to an ordinary villager who could not read, and why." }
          },
          explain: "Say, in one sentence, what all five Protestant ways have in common.",
          why: "Protestants wanted the monarch, not the Pope, to lead the Church; the Bible in the people's language; plain churches; simple robes; and no indulgences. On every point the Protestant way took power away from the Church and gave it to ordinary readers of the Bible."
        },
        {
          title: "Which factor is this?",
          task: {
            kind: "mcq",
            q: "A printer in Germany makes thousands of copies of Luther's pamphlets in a few weeks, and they are carried to towns all over Europe. Which factor helped Luther's ideas spread here?",
            options: ["New technologies", "The role of Luther himself", "European monarchs", "The weaknesses of the Church"],
            answer: 0,
            why: "The printing press is the new technology. It let one text be copied by the thousand, so ideas travelled faster than ever before.",
            feedback: [
              "",
              "Luther wrote the pamphlets, but the question is about what happened next: thousands of copies in a few weeks. That speed came from the printing press, a new technology.",
              "No king or prince appears in this story. Monarchs helped when they protected Luther or kept Church money for themselves. Here the help came from printing.",
              "The Church's weaknesses explain why people were ready to listen, but they do not explain how the pamphlets reached towns all over Europe. That was printing."
            ]
          },
          contexts: [
            { label: "Pictures for people who could not read", q: "Luther's supporters print woodcut pictures that mock the Pope, so even people who cannot read get the message. Thousands are sold at markets. Which factor helped Luther's ideas spread here?", why: "Printed pictures, like printed pamphlets, are the new technology at work: one design copied by the thousand." },
            { label: "A cheap German Bible", q: "Luther's German Bible is printed in large numbers and sold cheaply, so ordinary families can own a copy and read it at home. Which factor helped Luther's ideas spread here?", why: "The Bible in German was Luther's idea, but it reached ordinary homes because the printing press made cheap copies possible: new technology." }
          ],
          levels: {
            support: {
              steps: [
                "Read the story and underline the words that tell you HOW the ideas moved: copies, printed, carried, sold.",
                "Ask: is this about a machine or a method (technology), about Luther's own actions, about a king or prince, or about something wrong with the Church?",
                "Thousands of copies in weeks is only possible with the printing press.",
                "So the factor is new technologies."
              ],
              example: {
                q: "A prince in Germany protects Luther in his castle so the Pope cannot arrest him. Which factor is this?",
                steps: ["Who is acting? A prince, a ruler.", "Rulers who helped Luther count as the European monarchs factor."],
                answer: "European monarchs."
              }
            },
            core: { hint: "Ask who or what is doing the work in the story: a machine, Luther, a ruler, or the Church's own faults." },
            stretch: { extend: "Argue which of the four factors was the most important, and explain how it depended on at least one of the others." }
          },
          explain: "Say, in one sentence, why printing mattered so much to the spread of new ideas.",
          why: "Printing let a single text become thousands of copies in days. Without it, Luther's ideas would have moved only as fast as a traveller on foot or horseback."
        },
        {
          title: "Why did Luther's ideas spread?",
          task: {
            kind: "written",
            q: "Explain one reason why Martin Luther's ideas spread like wildfire across Europe. Write one paragraph using Point, Evidence, Explain and Link.",
            criteria: [
              "Point: I name one of the four factors clearly in my first sentence.",
              "Evidence: I give a specific example from the lesson that shows this factor at work.",
              "Explain: I say how this example helped the ideas spread quickly, using the word because.",
              "Link: my last sentence answers the question and uses the words spread like wildfire."
            ],
            model: "One reason Martin Luther's ideas spread like wildfire across Europe was the weaknesses of the Church. For example, the Church sold indulgences, which were payments that were supposed to reduce the punishment for sins, and it had grown very rich. This helped Luther's ideas spread because many ordinary people already felt the Church cared more about money than about God, so when Luther attacked indulgences in the 95 Theses they were ready to agree with him. Therefore the weaknesses of the Church meant Luther's message landed with people who were already looking for change, and that is why it spread like wildfire."
          },
          levels: {
            support: {
              steps: [
                "Choose ONE factor: the weaknesses of the Church, the role of Luther, European monarchs, or new technologies.",
                "Sentence 1 (Point): One reason Luther's ideas spread like wildfire was…",
                "Sentences 2 and 3 (Evidence and Explain): For example… This helped because…",
                "Sentence 4 (Link): Therefore… spread like wildfire."
              ],
              example: {
                q: "Explain one reason why William the Conqueror was able to control England after 1066.",
                steps: ["Point: one reason was castle building.", "Evidence: the Normans built castles in towns across England.", "Explain: this helped because soldiers in a castle could control the land around it.", "Link: therefore castles helped William keep control."],
                answer: "Point, evidence, explain, link on castle building."
              }
            },
            core: { hint: "Stay with one factor all the way through. Your evidence must be a specific example, not a repeat of the point." },
            stretch: { extend: "Add a second paragraph on a different factor and finish with one sentence saying which of the two mattered more." }
          },
          explain: "Say, in one sentence, how your evidence sentence is different from your point sentence.",
          why: "A strong paragraph names one factor, gives a specific example of it, explains how that example made the ideas spread faster, and links back to the question. The best answers show how factors worked together, for example printing carrying Luther's words."
        }
      ]
    },
    /* ───────────── 2 · Henry VIII and the split from Rome ───────────── */
    {
      key: "henry-split", n: 2, title: "Henry VIII: why did he split from the Catholic Church?",
      lead: "The king who needed a son, the Pope who said no, and the three problems of marriage, money and power that Henry solved by making himself head of the Church.",
      covers: [2, 3],
      pretext: {
        words: [
          { word: "heir", means: "the person who will be the next king or queen", sentence: "Henry wanted a son to be his heir." },
          { word: "annulment", means: "a ruling that a marriage was never valid, so it is cancelled", sentence: "Henry asked the Pope for an annulment of his marriage to Catherine." },
          { word: "Supreme Head", means: "the leader of the Church of England", sentence: "The Act of Supremacy made Henry Supreme Head of the Church of England." },
          { word: "Act of Supremacy", means: "the law of 1534 that made Henry head of the Church", sentence: "After the Act of Supremacy, the Pope had no power in England." },
          { word: "Dissolution of the Monasteries", means: "the closing of the monasteries and the taking of their wealth", sentence: "The Dissolution of the Monasteries made Henry very rich." },
          { word: "excommunication", means: "being thrown out of the Catholic Church by the Pope", sentence: "Henry's excommunication came in 1538." }
        ],
        passage: [
          "Henry VIII became king in 1509, aged just 17.",
          "He married Catherine of Aragon, his dead brother's wife.",
          "Henry wanted a son to be his heir and keep the Tudors in power.",
          "After many years, Catherine had given him only a daughter, Mary.",
          "Henry fell in love with Anne Boleyn.",
          "In 1527 he asked the Pope to annul his marriage, which means to cancel it.",
          "The Pope said no.",
          "So Henry took the Pope's power in England for himself.",
          "In January 1533 he married Anne Boleyn.",
          "In 1534 the Act of Supremacy made Henry Supreme Head of the Church of England.",
          "Henry also closed the monasteries and took their land and money.",
          "In 1538 the Pope excommunicated Henry, throwing him out of the Catholic Church.",
          "Yet Henry still thought of himself as a Catholic."
        ]
      },
      sections: [
        {
          heading: "The king who needed a son",
          paragraphs: [
            "Henry VIII became king in 1509, aged just 17, after the death of his father Henry VII. He inherited a rich kingdom, but he was a lavish spender and he enjoyed going to war. He is famous for having six wives. In 1509 he married his first wife, Catherine of Aragon, who had been married to his older brother before his brother died.",
            "Henry wanted a male heir. A son, he believed, would rule strongly after him and keep the Tudor line in power. After nearly twenty years of marriage Catherine had given him only one living child, a daughter called Mary, and she was now too old to have more children. Henry had also fallen in love with a young woman at court, Anne Boleyn.",
            "Henry had choices. He could ask the Pope to end his marriage, or he could wait. In 1527 he asked the Pope to annul his marriage to Catherine: to rule that it had never been valid. Your lesson sometimes calls this a divorce. The Pope refused. Henry's answer was to take the Pope's power in England for himself and set up his own church, the Church of England."
          ],
          tip: "Henry did not become a Protestant. He wanted the Pope's power, not Luther's ideas. Keep those two things apart in your writing."
        },
        {
          heading: "Three problems: marriage, money and power",
          paragraphs: [
            "Your lesson's worksheet sorts Henry's reasons into three problems, each with the law or action that solved it. Marriage: the Pope would not annul Henry's marriage. In January 1533 Henry married Anne Boleyn anyway, and the Act in Restraint of Appeals, 1533, meant that religious cases in England were no longer the Pope's to judge, so Henry's own bishops could end the marriage to Catherine.",
            "Money: the Church was enormously rich. Your lesson says it owned about 25 per cent of the land in England, and Protestants criticised its wealth. Henry began closing the monasteries from 1536, taking their land and treasure for the Crown; this is the Dissolution of the Monasteries. In 1538 he destroyed the shrine of St Thomas Becket at Canterbury and took its gold and jewels.",
            "Power: in 1534 the Act of Supremacy made Henry Supreme Head of the Church of England, so the Pope had no authority in England at all. The Treasons Act of the same year made it treason, punishable by death, to deny the king's new title. Some historians argue that power, not love or religion, was Henry's real reason for the split."
          ],
          worked: {
            q: "Explain how the problem of money helped cause Henry's split from the Catholic Church.",
            steps: [
              "Point: One reason Henry split from the Catholic Church was money.",
              "Evidence: The Church owned about 25 per cent of the land in England, and Henry, a lavish spender who loved war, was short of money.",
              "Explain: Once Henry was head of the Church he could close the monasteries and take their land and treasure, which he began to do from 1536.",
              "Link: Therefore money was a reason for the split, because breaking with the Pope let Henry take the Church's wealth for himself."
            ],
            answer: "Point, evidence, explain, link: the Church's wealth (about 25 per cent of the land) became Henry's once he was head of the Church, through the Dissolution of the Monasteries from 1536."
          },
          tip: "Learn the three problems with their solutions: Marriage → Act in Restraint of Appeals, 1533; Money → Dissolution of the Monasteries; Power → Act of Supremacy, 1534."
        },
        {
          heading: "What changed, and what did not",
          paragraphs: [
            "England was no longer under the Pope, but it did not become a Protestant country under Henry. Your lesson calls the result an Anglo-Catholic country: Catholic in its beliefs and services, but English-led rather than led from Rome. Henry did not force anyone to become Protestant. He did not change the way mass was held and he did not produce a prayer book in English.",
            "Henry's family life kept changing too. In 1536 he used his new powers as Supreme Head to have his marriage to Anne Boleyn annulled, and she was executed for treason. He married his third wife, Jane Seymour, and in October 1537 she gave birth to a boy, Edward. Henry finally had his male heir.",
            "The Pope finally excommunicated Henry in December 1538, throwing him out of the Catholic Church. England was officially no longer a Catholic country, yet Henry himself still saw himself as a Catholic and, your lesson says, died a committed one. Henry VIII died in January 1547, leaving one son and two daughters."
          ],
          tip: "A good answer on impact says what changed (the Pope's power, the monasteries) AND what stayed the same (Catholic services, a Catholic king)."
        }
      ],
      gate: [
        { kind: "mcq", q: "Who was Henry VIII's first wife?", options: ["Catherine of Aragon", "Anne Boleyn", "Jane Seymour", "Lady Jane Grey"], answer: 0, why: "Henry married Catherine of Aragon in 1509, the year he became king. She was the mother of Mary.",
          feedback: [
            "",
            "Anne Boleyn was Henry's second wife, the woman he split from the Pope in order to marry. His first wife, from 1509, was Catherine of Aragon.",
            "Jane Seymour was Henry's third wife and the mother of Edward. His first wife was Catherine of Aragon.",
            "Lady Jane Grey was never Henry's wife. She was Edward's cousin, who was briefly made queen in 1553. Henry's first wife was Catherine of Aragon."
          ] },
        { kind: "numeric", q: "In which year did the Act of Supremacy make Henry VIII Supreme Head of the Church of England?", answer: 1534, tolerance: 0, units: "", why: "The Act of Supremacy was passed in 1534. The Treasons Act of the same year made it a crime to deny Henry's new title.", check: "1534",
          misconceptions: [
            { answer: 1533, says: "1533 is the year Henry married Anne Boleyn and the Act in Restraint of Appeals took the Pope's power to judge religious matters in England. The Act of Supremacy, which made Henry Supreme Head, came the next year, 1534.", check: "1534 - 1" },
            { answer: 1536, says: "1536 is when Henry began closing the monasteries. He could only do that because he was already Supreme Head, which the Act of Supremacy made him in 1534.", check: "1534 + 2" },
            { answer: 1538, says: "1538 is when the Pope excommunicated Henry and when Becket's shrine was destroyed. The Act of Supremacy came four years earlier, in 1534.", check: "1534 + 4" }
          ] },
        { kind: "gap", q: "Henry wanted a male ___ so that a son would rule after him and keep the Tudor line in power.", answer: "heir", options: ["heir", "regent", "Pope"], why: "An heir is the person who takes the throne next. Henry believed only a son could rule strongly enough to keep the Tudors in power.",
          feedback: {
            "regent": "A regent rules on behalf of a monarch who cannot rule, for example a child. Henry was not looking for someone to rule for him; he wanted a son to rule after him: an heir.",
            "Pope": "The Pope was the head of the Catholic Church in Rome, the man Henry fell out with. Henry wanted a son to succeed him: a male heir."
          } }
      ],
      modules: [
        {
          title: "How Henry split from Rome, step by step",
          task: {
            kind: "order",
            q: "Put these events in chronological order to show how Henry VIII split from the Catholic Church.",
            items: [
              "Henry becomes king and marries Catherine of Aragon (1509)",
              "Henry asks the Pope to annul his marriage to Catherine, and the Pope refuses (1527)",
              "Henry marries Anne Boleyn (January 1533)",
              "The Act in Restraint of Appeals takes the Pope's power over religious matters in England (1533)",
              "The Act of Supremacy makes Henry Supreme Head of the Church of England (1534)",
              "Henry begins the Dissolution of the Monasteries (1536)",
              "The Pope excommunicates Henry (December 1538)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Every event has a year in brackets. Read all seven years first and find the smallest.",
                "Two events are in 1533. The marriage was in January, the law came later in the year, so the marriage goes first.",
                "Check the story makes sense: the Pope says no BEFORE Henry acts; Henry becomes head of the Church BEFORE he closes the monasteries.",
                "The last step is the Pope's reaction: excommunication."
              ],
              example: {
                q: "Put in order: the Domesday Book (1086); the Battle of Hastings (1066); William is crowned (December 1066); the Harrying of the North (1069).",
                steps: ["Two events are in 1066: the battle was in October, the coronation in December, so the battle goes first.", "Then 1069, then 1086."],
                answer: "Hastings; William crowned; Harrying of the North; Domesday Book"
              }
            },
            core: { hint: "Smallest year first. In 1533 the January marriage comes before the Act. Excommunication is the Pope's final answer, so it goes last." },
            stretch: { extend: "Your homework asks which event was the final nail in the coffin between Henry and the Pope. Choose one, and explain why the Pope might have waited until 1538 to excommunicate Henry." }
          },
          explain: "Say, in one sentence, why the Act of Supremacy had to come before the Dissolution of the Monasteries.",
          why: "1509 marriage to Catherine; 1527 the Pope refuses an annulment; January 1533 Henry marries Anne; 1533 the Act in Restraint of Appeals; 1534 the Act of Supremacy; 1536 the monasteries begin to close; December 1538 the Pope excommunicates Henry."
        },
        {
          title: "Three problems, three solutions",
          task: {
            kind: "match",
            q: "Match each of Henry's problems to the law or action that solved it.",
            pairs: [
              ["Marriage: the Pope would not annul Henry's marriage to Catherine", "The Act in Restraint of Appeals, 1533, so Henry's own bishops could end the marriage"],
              ["Money: the Church was rich and Henry was short of money", "The Dissolution of the Monasteries, taking their land and treasure for the Crown"],
              ["Power: the Pope, not the king, had the final say on religion in England", "The Act of Supremacy, 1534, making Henry Supreme Head of the Church of England"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read each problem and ask what Henry needed: a way to end a marriage, a way to get money, or a way to be in charge.",
                "A law about appeals (asking a higher court) is about who decides the marriage case.",
                "Closing monasteries and taking their land is about money.",
                "A law that gives Henry a new title, Supreme Head, is about power."
              ],
              example: {
                q: "Match the problem to the solution: a school has too few books; a school's roof leaks. Choices: a repair fund; a library grant.",
                steps: ["Too few books is solved by the library grant.", "A leaking roof is solved by the repair fund."],
                answer: "Books → library grant; roof → repair fund."
              }
            },
            core: { hint: "Appeals are about who judges the marriage; monasteries are about wealth; supremacy means being on top." },
            stretch: { extend: "Rank the three problems from most to least important as a cause of the split, and explain your number one in two sentences." }
          },
          explain: "Say, in one sentence, which of the three problems you think Henry cared about most, and why.",
          why: "Marriage was solved by the Act in Restraint of Appeals (1533), money by the Dissolution of the Monasteries (from 1536) and power by the Act of Supremacy (1534)."
        },
        {
          title: "Explain one reason for the split",
          task: {
            kind: "written",
            q: "Explain one reason why Henry VIII broke away from the Catholic Church. Write one paragraph using Point, Evidence, Explain and Link.",
            criteria: [
              "SC1: I clearly state one reason why Henry broke away from the Catholic Church.",
              "SC2: I include a correct historical fact, example or person to support my point.",
              "SC3: I explain how my evidence supports the reason for the break.",
              "SC4: I link back to the question in my final sentence."
            ],
            model: "One reason why Henry VIII broke away from the Catholic Church was that he wanted power over religion in England for himself. For example, in 1534 the Act of Supremacy made Henry Supreme Head of the Church of England, and the Treasons Act made it a crime to deny his new title. This supports the point because Henry did not simply leave the Pope's Church; he replaced the Pope with himself, so that every decision about religion in England now came from the king. Therefore Henry broke away from the Catholic Church because being head of his own church gave him a power that no English king had held before."
          },
          levels: {
            support: {
              steps: [
                "Choose ONE reason: marriage (Catherine, Anne Boleyn, the Pope's refusal), money (the Church's land, the monasteries) or power (Supreme Head, the Pope's authority).",
                "SC1, sentence 1: One reason why Henry VIII broke away from the Catholic Church was…",
                "SC2 and SC3, sentences 2 and 3: For example, in [year]… This shows… because…",
                "SC4, sentence 4: Therefore Henry broke away from the Catholic Church because…"
              ],
              example: {
                q: "Explain one reason why Luther challenged the Catholic Church.",
                steps: ["Point: one reason was the sale of indulgences.", "Evidence: in 1517 he listed his complaints in the 95 Theses.", "Explain: he believed nobody could buy forgiveness, so the Church was misleading people.", "Link: therefore indulgences were a reason for his challenge."],
                answer: "A PEEL paragraph on indulgences, with 1517 and the 95 Theses as evidence."
              }
            },
            core: { hint: "One reason only. Your evidence needs a date, a law or a name. Your explain sentence must use because." },
            stretch: { extend: "Some historians say Henry only split to increase his own power. Write a second paragraph giving one piece of evidence for that claim and one against it." }
          },
          explain: "Say, in one sentence, why a date or a law makes your evidence stronger than a general statement.",
          why: "The progress check rewards one clear reason (SC1), a specific fact such as a law with its year (SC2), an explanation that uses because (SC3) and a final sentence that answers the question (SC4)."
        }
      ]
    },
    /* ───────────── 3 · Edward VI ───────────── */
    {
      key: "edward", n: 3, title: "Edward VI: how did a boy king make England Protestant?",
      lead: "How Edward came to the throne at nine, the regents who ruled for him, the changes that made churches plain and services English, and who really held the power.",
      covers: [3],
      pretext: {
        words: [
          { word: "regent", means: "a person appointed to rule on behalf of the monarch", sentence: "Because Edward was a child, a regent ruled for him." },
          { word: "Protestant", means: "a Christian who followed the new ideas of the Reformation", sentence: "Edward was the first Protestant king of England." },
          { word: "Catholic", means: "a Christian who followed the traditional Church led by the Pope", sentence: "Many Catholic villagers were unhappy with the changes." },
          { word: "prayer book", means: "the book that sets out the words of church services", sentence: "Under Edward, the prayer book was written in English." },
          { word: "convert", means: "to change from one religion or belief to another", sentence: "Catholics were expected to convert to the new Protestant ways." }
        ],
        passage: [
          "Henry VIII died in January 1547.",
          "His son Edward became King Edward VI at the age of nine.",
          "A child could not rule alone, so regents ruled for him.",
          "A regent is a person chosen to act on the monarch's behalf.",
          "Unlike his father, Edward was a committed Protestant.",
          "He was the first Protestant king of England.",
          "Under Edward, England became a Protestant country.",
          "Churches were made plain and simple.",
          "Paintings and decorations were taken down or destroyed.",
          "A new prayer book was written in English, not Latin.",
          "Many Catholics were unhappy with these changes.",
          "Edward died in 1553, aged only 15."
        ]
      },
      sections: [
        {
          heading: "A boy on the throne",
          paragraphs: [
            "Edward was the son Henry VIII had waited for. He was born in October 1537 to Henry's third wife, Jane Seymour. Henry had split from the Pope with the Act of Supremacy in 1534, so Edward was raised in the new Church of England, and his tutors brought him up as a Protestant.",
            "Henry VIII died in January 1547, and Edward became King Edward VI at the age of nine. Imagine being asked to run a country when you are in Year 5. Because he was so young, regents ruled for him. A regent is a person appointed to act on the monarch's behalf. Edward's regents were powerful nobles, and they made the big decisions in his name.",
            "Unlike his father, Edward was a committed Protestant. He was the first Protestant king of England, and under him the country's religion changed far more than it had under Henry."
          ],
          worked: {
            q: "Edward became king in 1547 and died in 1553. How many years did he reign?",
            steps: [
              "Write the later year first: 1553.",
              "Subtract the earlier year: 1553 − 1547.",
              "The 15 hundreds cancel, so work out 53 − 47 = 6.",
              "Check it makes sense: he was nine when he became king and 15 when he died, and 15 − 9 = 6."
            ],
            answer: "6 years",
            checks: [{ expr: "1553 - 1547", value: 6, tol: 0 }, { expr: "15 - 9", value: 6, tol: 0 }]
          },
          tip: "Two ways to check a reign length: subtract the years, and subtract the ages. They should agree."
        },
        {
          heading: "How Edward's England changed the churches",
          paragraphs: [
            "Your lesson gives you pictures of a Catholic church and a Protestant church to compare. The Catholic church is richly decorated: paintings, statues, coloured glass, gold on the altar, a priest in magnificent robes. The Protestant church is plain: whitewashed walls, no statues, a simple table, a priest in a plain robe. Under Edward, churches across England were changed from the first kind into the second.",
            "Paintings and decorations were taken down or destroyed. Services were no longer in Latin. A new prayer book was published in English, so that people could follow and understand what was being said. These were the changes Henry had refused to make. For the first time, England was a Protestant country in practice, not only in name.",
            "Not everyone welcomed this. Catholics had worshipped in the same way for hundreds of years. Being told to convert, and watching the images they loved being destroyed, made many of them angry. Your lesson asks you to think about how Catholic worshippers would respond to being forced to change."
          ],
          tip: "Edward's two headline changes: plain churches and an English prayer book. If a question asks what Edward changed, start with those."
        },
        {
          heading: "Who really held the power?",
          paragraphs: [
            "Edward was a child, so the real decisions were taken by his regents and advisers. The Duke of Northumberland, whom you will meet again in the story of Mary, was one of the most powerful men in Edward's England. Historians ask whether the Protestant changes were really Edward's, or whether they belonged to the men who ruled in his name.",
            "There are two sides. Edward was a committed Protestant who agreed with the changes and, as he grew older, pushed for them. On the other hand, the laws were written and enforced by adults, and a nine-year-old could not have governed England alone.",
            "Your lesson ends with a statement to test: Edward VI transformed England into a Protestant country. To say how far you agree, weigh the size of the changes against the question of who made them."
          ],
          tip: "How far do you agree means give both sides, then decide. Agree with evidence, disagree with evidence, then your judgement."
        }
      ],
      gate: [
        { kind: "numeric", q: "How old was Edward VI when he became king in 1547?", answer: 9, tolerance: 0, units: "years", why: "Edward was nine when his father died in January 1547. That is why regents ruled for him.", check: "9",
          misconceptions: [
            { answer: 15, says: "Fifteen is the age at which Edward died, in 1553. He became king six years earlier, aged nine.", check: "9 + 6" },
            { answer: 17, says: "Seventeen is the age at which Henry VIII, Edward's father, became king in 1509. Edward was only nine.", check: "17" },
            { answer: 10, says: "Edward was born in October 1537 and became king in January 1547, so he had not yet had his tenth birthday. He was nine.", check: "9 + 1" }
          ] },
        { kind: "mcq", q: "Why did regents rule for Edward VI?", options: ["He was too young to rule alone", "He was away fighting a war", "He was a Catholic and refused to rule a Protestant country", "The Pope had excommunicated him"], answer: 0, why: "Edward was nine when he became king. A regent is a person appointed to act on the monarch's behalf, and regents governed until he was old enough.",
          feedback: [
            "",
            "Edward never went to war. He was a child of nine when he became king, and that is why regents ruled on his behalf.",
            "Edward was the opposite: a committed Protestant, the first Protestant king of England. Regents ruled for him because of his age, not his religion.",
            "It was Henry VIII, Edward's father, who was excommunicated by the Pope in 1538. Edward had regents because he was only nine."
          ] },
        { kind: "gap", q: "Under Edward VI, a new prayer book was published in ___ so that ordinary people could understand the service.", answer: "English", options: ["English", "Latin", "German"], why: "The English prayer book is one of Edward's two headline changes. Latin services had kept worship in the hands of priests.",
          feedback: {
            "Latin": "Latin was the language of the Catholic services Edward replaced. Mary later brought Latin prayer books back. Edward's prayer book was in English.",
            "German": "German was the language of Luther's Bible in Germany. In England, Edward's new prayer book was in English, the language people here spoke."
          } }
      ],
      modules: [
        {
          title: "From Henry's heir to Protestant king",
          task: {
            kind: "order",
            q: "Put these events in chronological order.",
            items: [
              "Anne Boleyn is executed and Henry marries Jane Seymour (1536)",
              "Jane Seymour gives birth to Edward, Henry's male heir (October 1537)",
              "The Pope excommunicates Henry VIII (December 1538)",
              "Henry VIII dies and Edward becomes King Edward VI, aged nine (January 1547)",
              "Edward VI dies after a short illness, aged 15 (1553)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the years in brackets and start with the smallest.",
                "Edward has to be born before he can become king, and he has to become king before he can die as king.",
                "The excommunication belongs to Henry's story and sits between Edward's birth and Henry's death.",
                "Check the gaps: just over nine years from Edward's birth to his crowning, six years of reign."
              ],
              example: {
                q: "Put in order: William is crowned (1066); William dies (1087); the Domesday Book is made (1086); William lands in England (September 1066).",
                steps: ["Two events are in 1066: the landing in September comes before the crowning in December.", "Then 1086, then 1087."],
                answer: "William lands; William is crowned; Domesday Book; William dies"
              }
            },
            core: { hint: "Smallest year first. Birth before crowning, crowning before death." },
            stretch: { extend: "Explain why Henry's excommunication in 1538 made it more likely that his son would be raised as a Protestant." }
          },
          explain: "Say, in one sentence, why Edward's birth in 1537 mattered so much to Henry.",
          why: "1536 Anne executed and Jane Seymour married; October 1537 Edward born; December 1538 Henry excommunicated; January 1547 Henry dies and Edward is king; 1553 Edward dies."
        },
        {
          title: "How long did Edward reign?",
          task: {
            kind: "numeric",
            q: "Edward VI became king in 1547 and died in 1553. How many years did he reign?",
            answer: 6, tolerance: 0, units: "years",
            why: "1553 − 1547 = 6. Six years was long enough to make England Protestant, and short enough for Mary to try to undo it.",
            check: "1553 - 1547",
            misconceptions: [
              { answer: 7, says: "You may have counted both 1547 and 1553 as whole years. A reign length is the difference between the years: 1553 − 1547 = 6.", check: "1553 - 1547 + 1" },
              { answer: 9, says: "Nine is Edward's age when he became king, not the length of his reign. Subtract the years: 1553 − 1547 = 6.", check: "9" },
              { answer: 15, says: "Fifteen is Edward's age when he died. The question asks how long he reigned: from 1547 to 1553 is 6 years.", check: "15" }
            ]
          },
          contexts: [
            { label: "A village church", q: "A village church began using the English prayer book in 1547, when Edward became king, and kept using it until he died in 1553. For how many years did the village hear the English service?", check: "1553 - 1547" },
            { label: "A child born in 1547", q: "A girl was born in 1547, the year Edward VI became king. How old was she, in years, when Edward died in 1553?", check: "1553 - 1547" },
            { label: "A regent's service", q: "A nobleman joined Edward's council in 1547 and served until the king's death in 1553. For how many years did he serve?", check: "1553 - 1547" }
          ],
          levels: {
            support: {
              steps: [
                "Write the later year first: 1553.",
                "Subtract the earlier year: 1553 − 1547.",
                "The hundreds cancel, so work out 53 − 47 = 6.",
                "Check with ages: Edward was 9 at the start and 15 at the end, and 15 − 9 = 6."
              ],
              example: {
                q: "Henry VIII became king in 1509 and died in 1547. How many years did he reign?",
                steps: ["Later year first: 1547.", "1547 − 1509: the hundreds cancel, 47 − 9 = 38."],
                answer: "38 years",
                checks: [{ expr: "1547 - 1509", value: 38, tol: 0 }]
              }
            },
            core: { hint: "Later year minus earlier year. Do not add one for the end year." },
            stretch: { extend: "Edward's six-year reign is often called short. Compare it with Henry VIII's, and explain why length of reign might affect how big a monarch's religious changes could be." }
          },
          explain: "Say, in one sentence, how you can check a reign length using the monarch's ages.",
          why: "Reign length is the later year minus the earlier year: 1553 − 1547 = 6. The age check agrees: 15 − 9 = 6."
        },
        {
          title: "Edward on trial",
          task: {
            kind: "written",
            q: "Edward VI transformed England into a Protestant country. How far do you agree? Write one paragraph giving your view, with at least two pieces of evidence from the chapter.",
            criteria: [
              "I say clearly how far I agree in my first sentence.",
              "I give at least two pieces of evidence, such as the changes to churches, the English prayer book, or the role of the regents.",
              "I explain how each piece of evidence supports my view, using the word because.",
              "I use the key words Protestant, Catholic and regent correctly."
            ],
            model: "I mostly agree that Edward VI transformed England into a Protestant country, although the change was not his alone. Under Edward, churches were stripped of paintings and statues and made plain, and a new prayer book in English replaced the Latin service. These were real transformations because they changed what every person in England saw and heard in church each Sunday, which Henry VIII had never done. However, Edward was only nine when he became king, so the laws were made by his regents, and a Catholic villager would have blamed those powerful nobles as much as the boy king. Overall, England did become Protestant in Edward's reign, so the statement is largely true, but the transformation was carried out in his name by others."
          },
          levels: {
            support: {
              steps: [
                "Decide first: agree, mostly agree, or disagree. Say it in sentence 1.",
                "Evidence 1: name a change (plain churches, images destroyed, English prayer book) and explain why it was a transformation.",
                "Evidence 2: say who made the decisions (regents) and what that means for the statement.",
                "Finish with Overall… to give your judgement."
              ],
              example: {
                q: "William the Conqueror transformed England after 1066. How far do you agree? Plan one paragraph.",
                steps: ["Judgement: mostly agree.", "Evidence 1: castles built across England changed the landscape and control.", "Evidence 2: but most ordinary villagers kept farming the same land, so daily life changed less.", "Overall: a big transformation at the top, smaller at the bottom."],
                answer: "A planned paragraph with a judgement, two pieces of evidence and an overall sentence."
              }
            },
            core: { hint: "Use at least two pieces of evidence. One can support the statement and one can question it; that is what how far means." },
            stretch: { extend: "Was Edward really responsible for the changes, or were his regents more important? Write a second paragraph that answers this with evidence." }
          },
          explain: "Say, in one sentence, why the age of the king matters when judging who transformed England.",
          why: "The statement is largely true: plain churches and an English prayer book made England Protestant in practice. A strong answer also notes that regents governed for a child, so the transformation was made in Edward's name rather than by Edward alone."
        }
      ]
    },
    /* ───────────── 4 · Mary I ───────────── */
    {
      key: "mary", n: 4, title: "Mary I: does she deserve the name Bloody Mary?",
      lead: "How Mary beat Lady Jane Grey to the throne, how she turned England Catholic again, why about 300 Protestants were burned, and whether the nickname is fair.",
      covers: [4],
      pretext: {
        words: [
          { word: "succeed", means: "to take the throne after the previous monarch", sentence: "Edward feared that his sister Mary would succeed him." },
          { word: "heresy", means: "believing something that goes against the religion of the monarch", sentence: "Under Mary, heresy was punished by burning." },
          { word: "propaganda", means: "information designed to mislead people", sentence: "Some historians say the nickname Bloody Mary is Protestant propaganda." },
          { word: "dynasty", means: "a family of rulers who pass the throne from one to the next", sentence: "With no children, Mary feared the Tudor dynasty would end." },
          { word: "rebel", means: "to rise up against the ruler", sentence: "Some people chose to rebel against Mary's Spanish marriage." }
        ],
        passage: [
          "Edward VI died in 1553, aged 15, with no children.",
          "He feared his sister Mary would undo his Protestant changes.",
          "So he tried to make his Protestant cousin, Lady Jane Grey, queen.",
          "Jane had not been told, and she wept when she heard the news.",
          "Within days her support melted away.",
          "Mary rode into London and was declared Queen Mary I.",
          "Mary was 37 and a committed Catholic.",
          "She married King Philip II of Spain, a Catholic king.",
          "Many people in England were unhappy, and some rebelled.",
          "Mary brought back Latin prayer books and decorated churches.",
          "She made heresy a crime again.",
          "About 300 Protestants were burned at the stake.",
          "Later, Protestants called her Bloody Mary.",
          "Mary died in 1558, and people in London celebrated."
        ]
      },
      sections: [
        {
          heading: "A troubled early life and a race for the crown",
          paragraphs: [
            "Henry VIII was Mary's father, and her mother was his first wife, Catherine of Aragon. When Henry ended that marriage, Mary lost her title of Princess and was separated from her mother. She stayed a committed Catholic all her life, and she pleaded with her brother Edward not to make his Protestant changes. Her father had disowned her when he split from Rome.",
            "In 1553 Edward lay dying, aged 15, with no children. He and his advisers feared Mary would reverse his Protestant reforms, so he named his cousin Lady Jane Grey, a committed Protestant, as the next queen. The Duke of Northumberland backed the plan for his own reasons: Jane was married to his son, so his family would become the most powerful in England.",
            "In July 1553 Jane was taken to Syon House and told she was queen. Nobody had warned her or prepared her, and she broke down in tears. Within days her support melted away. Mary gathered her own supporters, rode into London almost unopposed, and was declared Queen Mary I."
          ],
          tip: "Your lesson asks which factor mattered most in making Mary queen: Edward's death, Jane's failure, Mary's support from the people, or Mary's own determination. Have a reason ready for your choice."
        },
        {
          heading: "Mary's religious changes",
          paragraphs: [
            "Mary was 37 when she became queen, unmarried and childless, so the Tudor dynasty was at risk of ending with her. She married King Philip II of Spain, ruler of the most powerful Catholic country in Europe, to strengthen England's ties with Catholic Spain and to support the return of Catholicism. Many English people were unhappy about a Spanish king, and some rebelled against the marriage.",
            "Mary set out to make England Catholic again. She overturned Edward's changes: the English prayer book went, and Latin prayer books and highly decorated churches came back. She went further and made heresy, which now meant disagreeing with Catholicism, a crime once more.",
            "People found guilty of heresy who would not give up their Protestant beliefs were burned at the stake. Your lesson says about 300 Protestants were executed in this way. It is because of these burnings that Protestants later gave her the name Bloody Mary."
          ],
          worked: {
            q: "Mary became queen in 1553 and died in 1558. How many years did she reign?",
            steps: [
              "Later year first: 1558.",
              "Subtract the earlier year: 1558 − 1553.",
              "The hundreds cancel, so 58 − 53 = 5.",
              "Check it makes sense: a short reign, shorter even than Edward's six years."
            ],
            answer: "5 years",
            checks: [{ expr: "1558 - 1553", value: 5, tol: 0 }]
          },
          tip: "Mary's changes are the mirror image of Edward's: English prayer book → Latin; plain churches → decorated; Protestant country → Catholic."
        },
        {
          heading: "Has history misjudged Mary?",
          paragraphs: [
            "Your lesson gives two views for you to weigh. One view says Mary wanted England Catholic again, married the king of Catholic Spain, brought back Latin prayer books and decorated churches, made heresy a crime and had Protestants burned who would not give up their faith. On this view the nickname describes what she did.",
            "The other view says the nickname is unfair. It calls Bloody Mary Protestant propaganda: information designed to mislead, written by her enemies after her death, which painted Mary as an evil queen and the Protestants she executed as heroes. Propaganda is a key word in this lesson. Ask who gave Mary the name, and what they wanted people to think.",
            "There is a harder question underneath. Henry VIII also executed people for their religion, and Edward's changes also caused suffering, yet neither is remembered as bloody. Your lesson asks why Mary is held to a different standard, and whether that is fair."
          ],
          tip: "When you judge a nickname, separate two questions: did the events happen, and who chose the words to describe them?"
        }
      ],
      gate: [
        { kind: "mcq", q: "Who did Edward VI want to become queen instead of his sister Mary?", options: ["Lady Jane Grey", "Elizabeth", "Catherine of Aragon", "Jane Seymour"], answer: 0, why: "Edward named his Protestant cousin Lady Jane Grey so that his religious changes would not be undone by the Catholic Mary.",
          feedback: [
            "",
            "Elizabeth was Mary's half-sister and did become queen, but only after Mary's death in 1558. In 1553 Edward chose his cousin Lady Jane Grey.",
            "Catherine of Aragon was Henry VIII's first wife and Mary's mother. She had died long before 1553. Edward chose Lady Jane Grey.",
            "Jane Seymour was Edward's own mother, Henry's third wife, who died soon after his birth. The Jane Edward named as queen was his cousin Lady Jane Grey."
          ] },
        { kind: "gap", q: "Mary married King Philip II of ___, the ruler of the most powerful Catholic country in Europe.", answer: "Spain", options: ["Spain", "France", "Scotland"], why: "Philip II of Spain was Mary's husband. The marriage was meant to strengthen ties with Catholic Spain, and it was unpopular in England.",
          feedback: {
            "France": "France was also Catholic, but Mary's husband was Philip II of Spain. Spain was the most powerful Catholic country in Europe at the time.",
            "Scotland": "Scotland comes into the story later, through Mary Queen of Scots in Elizabeth's reign. Mary I married Philip II of Spain."
          } },
        { kind: "mcq", q: "What does the word propaganda mean?", options: ["Information designed to mislead people", "A law that makes a belief a crime", "A ceremony to crown a new monarch", "A tax paid to the Church"], answer: 0, why: "Propaganda is information made to mislead people. Your lesson uses the word about the nickname Bloody Mary.",
          feedback: [
            "",
            "A law that makes a belief a crime is a heresy law. Propaganda is about information: material designed to mislead people into thinking a certain way.",
            "A crowning ceremony is a coronation. Propaganda has nothing to do with ceremonies; it is information designed to mislead.",
            "A tax to the Church is not propaganda. Propaganda means information designed to mislead people, for example writing that paints an enemy as evil."
          ] }
      ],
      modules: [
        {
          title: "From Edward's death to Mary's",
          task: {
            kind: "order",
            q: "Put these events in chronological order.",
            items: [
              "Edward VI dies after a short illness, aged 15 (1553)",
              "Lady Jane Grey is taken to Syon House and told she is queen (July 1553)",
              "Jane's support melts away and Mary is declared Queen Mary I (1553)",
              "Mary marries Philip II of Spain and brings back Catholic services",
              "Mary dies without an heir, and Elizabeth becomes queen (17 November 1558)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Three events are in 1553. Think about the story: a king must die before anyone can replace him.",
                "Jane is told she is queen before her support melts away.",
                "Mary can only marry as queen and change the churches as queen, so that comes after she is declared queen.",
                "Her death is the end of the story."
              ],
              example: {
                q: "Put in order: Luther's German Bible (your lesson's date, 1525); the 95 Theses (October 1517); Luther refuses to take back his words at his hearing.",
                steps: ["The 95 Theses start the story.", "The hearing follows the protest.", "The German Bible comes after he has gone into hiding."],
                answer: "95 Theses; the hearing; the German Bible"
              }
            },
            core: { hint: "Death of the king; Jane told; Mary declared; Mary rules; Mary dies." },
            stretch: { extend: "Explain why Jane's support melted away so quickly, using what the chapter says about who had planned her reign and who had not." }
          },
          explain: "Say, in one sentence, why Edward's advisers were worried about Mary becoming queen.",
          why: "1553 Edward dies; July 1553 Jane is told she is queen; days later Mary is declared queen; Mary marries Philip and restores Catholic services; 17 November 1558 Mary dies and Elizabeth succeeds."
        },
        {
          title: "Why do some historians call the nickname unfair?",
          task: {
            kind: "mcq",
            q: "Which of these is the reason your lesson gives for saying the nickname Bloody Mary might be unfair?",
            options: [
              "It was Protestant propaganda, written by her enemies to paint her as evil and her victims as heroes",
              "Mary never executed anyone for their religion",
              "Mary was secretly a Protestant all along",
              "Mary reigned for more than forty years, so a few executions hardly mattered"
            ],
            answer: 0,
            why: "The second source in your lesson says the name is Protestant propaganda. It does not deny the burnings; it questions who chose the words and why.",
            feedback: [
              "",
              "Your lesson is clear that about 300 Protestants were burned under Mary. The argument is not that it did not happen, but that the name was chosen by her enemies as propaganda.",
              "Mary was a committed Catholic all her life and pleaded with Edward not to make Protestant changes. The unfairness argument is about propaganda, not about her beliefs.",
              "Mary reigned for only five years, from 1553 to 1558. The argument in your lesson is about propaganda, not about the length of her reign."
            ]
          },
          levels: {
            support: {
              steps: [
                "Remember the key word from the lesson: propaganda, information designed to mislead.",
                "Ask who gave Mary the nickname: Protestants, after her death.",
                "Ask what they wanted people to think: that Mary was evil and the people she burned were heroes.",
                "The option that mentions propaganda and her enemies is the lesson's argument."
              ],
              example: {
                q: "A football team's rivals call its captain the Butcher because of two hard tackles. Which argument says the name is unfair: the tackles never happened, or the rivals chose the name to make him look bad?",
                steps: ["The tackles did happen, so the first argument fails.", "The second argument is about who chose the name and why: that is the propaganda argument."],
                answer: "The rivals chose the name to make him look bad."
              }
            },
            core: { hint: "Three options deny or shrink the facts. One accepts the facts and questions who told the story." },
            stretch: { extend: "Henry VIII also executed people for religion. Explain why Mary might be remembered more negatively than her father, giving at least one reason." }
          },
          explain: "Say, in one sentence, the difference between saying an event did not happen and saying the words used about it are propaganda.",
          why: "The lesson's unfairness argument is about propaganda: the nickname was given by Protestants after Mary's death to paint her as evil and her victims as heroes. It does not deny that about 300 Protestants were burned."
        },
        {
          title: "Does Mary deserve the nickname?",
          task: {
            kind: "written",
            q: "Do you think Mary I deserves the nickname Bloody Mary? Write one paragraph using Point, Evidence, Explain and Link, with evidence from this chapter.",
            criteria: [
              "Point: I say clearly whether Mary does or does not deserve the nickname.",
              "Evidence: I give at least one specific fact, such as the heresy law, the burnings, or who gave her the name.",
              "Explain: I show how my evidence supports my view, using the word because.",
              "Link: I finish with Overall, I think history has / has not misjudged Mary because…"
            ],
            model: "I think Mary I only partly deserves the nickname Bloody Mary. For example, Mary made heresy a crime again and about 300 Protestants who would not give up their faith were burned at the stake, which is a terrible record for a reign of only five years. This supports the nickname because the deaths were real and they were ordered in her name. However, the name itself was given by Protestants after her death, and your lesson calls it propaganda because it was designed to make Mary look evil and her victims look like heroes, while Henry VIII, who also executed people for religion, was never called bloody. Overall, I think history has partly misjudged Mary because the executions happened, but the nickname was chosen by her enemies to tell only one side of the story."
          },
          levels: {
            support: {
              steps: [
                "Decide: deserves it, does not deserve it, or partly.",
                "Point: I think Mary I does / does not deserve the nickname Bloody Mary because…",
                "Evidence and Explain: For example… This shows that Mary… because…",
                "Link: Overall, I think history has / has not misjudged Mary because…"
              ],
              example: {
                q: "Does William the Conqueror deserve the name the Conqueror? Plan a PEEL paragraph.",
                steps: ["Point: yes, he deserves it.", "Evidence: he won at Hastings in 1066 and took control of England.", "Explain: because he took the country by force, the name describes what he did.", "Link: overall the name fits."],
                answer: "A PEEL plan with a clear judgement, one fact and an explanation."
              }
            },
            core: { hint: "Use the propaganda idea on one side and the burnings on the other, then decide. Partly is a valid judgement if you explain it." },
            stretch: { extend: "Why is Mary held to a different standard from Henry VIII and Edward VI? Write a second paragraph that suggests two reasons and says whether this is fair." }
          },
          explain: "Say, in one sentence, who gave Mary her nickname and why that matters to your judgement.",
          why: "A strong answer accepts the facts (heresy law, about 300 burnings) and also weighs who chose the name and why (Protestant propaganda), then gives a clear judgement with because."
        }
      ]
    },
    /* ───────────── 5 · Elizabeth I ───────────── */
    {
      key: "elizabeth", n: 5, title: "Elizabeth I: was the Middle Way a success?",
      lead: "How Elizabeth came to the throne after years of upheaval, the Religious Settlement of 1559 and whether it was Catholic, Protestant or a compromise, and the Golden Age that followed.",
      covers: [5],
      pretext: {
        words: [
          { word: "Supreme Governor", means: "Elizabeth's title as leader of the Church of England, softer than Supreme Head", sentence: "Elizabeth chose to be Supreme Governor, not Supreme Head, of the Church." },
          { word: "Middle Way", means: "Elizabeth's religious compromise between Catholics and Protestants", sentence: "The Middle Way tried to give both sides something they could accept." },
          { word: "settlement", means: "an agreement that settles an argument", sentence: "Elizabeth's Religious Settlement was passed by Parliament in 1559." },
          { word: "uniformity", means: "everyone doing the same thing", sentence: "The Act of Uniformity meant everyone had to go to the same church services." },
          { word: "compromise", means: "a deal in which each side gives up something", sentence: "The English prayer book was worded as a compromise." },
          { word: "Armada", means: "a large fleet of warships", sentence: "Spain sent an Armada to invade England in 1588." }
        ],
        passage: [
          "Mary died on 17 November 1558 without an heir.",
          "Her half-sister Elizabeth became queen the same day, aged 25.",
          "Elizabeth was the daughter of Henry VIII and Anne Boleyn.",
          "She had been raised a Protestant, but she had learned to keep a low profile.",
          "England had suffered years of religious upheaval.",
          "Elizabeth wanted a new way that both sides could accept.",
          "In 1559 Parliament passed her Religious Settlement.",
          "It became known as the Middle Way.",
          "Elizabeth was Supreme Governor of the Church, not Supreme Head.",
          "Everyone had to go to church, and the prayer book was in English.",
          "Under Elizabeth, England grew strong and explored the world.",
          "In 1588 England defeated the Spanish Armada.",
          "Historians call her reign a Golden Age."
        ]
      },
      sections: [
        {
          heading: "A new queen after years of upheaval",
          paragraphs: [
            "Mary died on 17 November 1558 without leaving an heir. Her marriage to Philip of Spain had not been a success; he spent little time with her in England. By the end, Mary had accepted that her half-sister Elizabeth would be the next queen. Elizabeth had survived Mary's reign by staying quiet and avoiding the violence towards Protestants.",
            "Elizabeth became queen on the day Mary died, aged 25. She was the daughter of Henry VIII and his second wife, Anne Boleyn. She had been raised a Protestant, but she had watched her father, her brother and her sister each make swift religious changes, and she had learned to keep a low profile.",
            "England had been Catholic without the Pope under Henry, Protestant under Edward, and Catholic again under Mary, all within 25 years. Elizabeth wanted to stop the swinging. Her answer, the Religious Settlement, became known as the Middle Way."
          ],
          tip: "Elizabeth's problem in one line: how do you choose a religion for a country that has just changed it three times?"
        },
        {
          heading: "The Religious Settlement of 1559",
          paragraphs: [
            "Elizabeth acted quickly. In 1559 a new Parliament met and passed her Religious Settlement, which had four parts. Elizabeth's Act of Supremacy (1559) removed the Pope as head of the Church in England once more, but Elizabeth took the title Supreme Governor rather than Supreme Head, a softer word chosen to keep some Catholics happy. Your lesson calls this mostly a Protestant solution with a nod to Catholics.",
            "The Act of Uniformity (1559) said that everyone must attend church, and both Catholics and Protestants were fined if they stayed away. Your lesson calls this mostly a compromise: the aim was one shared church that both sides would come to, rather than a victory for either. The Common Prayer Book (1559) was rewritten and worded vaguely so that both sides could use it; your lesson calls it a compromise too, but notes that it favoured Protestants because it was in English.",
            "So was the Middle Way really in the middle? On your lesson's dial, it sits a little to the Protestant side: no Pope, an English prayer book, a Protestant queen. But it left room for Catholics in a way that Edward's and Mary's changes never did."
          ],
          worked: {
            q: "Was Elizabeth's Act of Supremacy (1559) a Catholic solution, a Protestant solution or a compromise?",
            steps: [
              "Ask what the law did: it removed the Pope as head of the Church in England. That is what Protestants wanted.",
              "Ask what it kept or softened: Elizabeth took the title Supreme Governor, not Supreme Head, to reassure Catholics.",
              "Weigh the two: the main change is Protestant; the softening is small.",
              "Judgement: mostly a Protestant solution, with a small compromise in the title."
            ],
            answer: "Mostly Protestant: it removed the Pope, but the title Supreme Governor was a small compromise for Catholics."
          },
          tip: "For each change ask two questions: what did it do, and who would have been happier? Then judge: Catholic, Protestant or compromise."
        },
        {
          heading: "A Golden Age and the Spanish Armada",
          paragraphs: [
            "Under Elizabeth, historians say, England entered a Golden Age and became a major power in the world. In 1580 Sir Francis Drake became the first Englishman to sail all the way round the globe. In 1585 Sir Walter Raleigh set up a colony in the newly discovered land of North America. Trade and exploration made England richer and raised its status.",
            "Elizabeth's success, and her return of England to the Protestant side, did not please Catholic Europe. In 1587 Mary Queen of Scots, a Catholic with a claim to the English throne, was executed. Philip II of Spain, Mary I's widower, launched an Armada, a great fleet of warships, to invade England in 1588 and make it Catholic again. England defeated the Spanish Armada in 1588, and the victory made Elizabeth look stronger than ever.",
            "Your lesson shows you a painting of Elizabeth made after the victory. Her hand rests on a globe, her dress is covered in pearls and jewels, and ships fill the background. Each detail is a message: England rules the seas, the queen is rich and powerful, and God has given her the victory."
          ],
          tip: "Elizabeth's reign leads straight into your next topics: the growth of the Empire began under her, and in the early 1600s she granted the East India Company its charter to trade with India."
        },
        {
          heading: "Was the Middle Way a success?",
          paragraphs: [
            "There is a case for yes. The swinging between Catholic and Protestant stopped. Catholics were fined rather than burned for staying away from church. England did not have the religious wars that tore apart other European countries at this time. Elizabeth reigned for many years, and her settlement outlived her.",
            "There is also a case for no, or not entirely. The settlement was closer to Protestant than to the middle: the Pope was gone, the prayer book was English, and committed Catholics could not worship as they wished in public. Catholic Europe did not accept it, which is one reason Spain sent the Armada.",
            "Your lesson asks you to draw a dial from Catholic to Protestant and mark where Elizabeth's changes sit, then to say whether Middle Way is an accurate name. A good answer uses the three changes of 1559 as evidence and gives a reason for where the needle stops."
          ],
          tip: "Success for whom? A settlement can be a success for the queen and the country while still disappointing both Catholics and strict Protestants."
        }
      ],
      gate: [
        { kind: "gap", q: "Elizabeth took the title Supreme ___ of the Church of England, a softer title than her father's.", answer: "Governor", options: ["Governor", "Head", "Pope"], why: "Henry had been Supreme Head. Elizabeth chose Supreme Governor to keep some Catholics happy while still removing the Pope.",
          feedback: {
            "Head": "Supreme Head was Henry VIII's title from the Act of Supremacy of 1534. Elizabeth deliberately chose the softer title Supreme Governor in 1559 to reassure Catholics.",
            "Pope": "The Pope was the head of the Catholic Church in Rome, the very authority Elizabeth's settlement removed from England. Her own title was Supreme Governor."
          } },
        { kind: "numeric", q: "In which year did England defeat the Spanish Armada?", answer: 1588, tolerance: 0, units: "", why: "Philip II of Spain sent the Armada to invade England in 1588, and it was defeated. The victory made Elizabeth appear stronger than ever.", check: "1588",
          misconceptions: [
            { answer: 1558, says: "1558 is the year Elizabeth became queen, on 17 November, the day Mary died. The Armada came thirty years later, in 1588.", check: "1588 - 30" },
            { answer: 1587, says: "1587 is the year Mary Queen of Scots was executed, one of the events that led Philip to send the Armada. The Armada itself was defeated the next year, 1588.", check: "1588 - 1" },
            { answer: 1559, says: "1559 is the year of Elizabeth's Religious Settlement, passed by Parliament. The Spanish Armada was defeated in 1588.", check: "1559" }
          ] },
        { kind: "mcq", q: "Who was Elizabeth I's mother?", options: ["Anne Boleyn", "Catherine of Aragon", "Jane Seymour", "Lady Jane Grey"], answer: 0, why: "Elizabeth was the daughter of Henry VIII and his second wife, Anne Boleyn. That is one reason she was raised a Protestant.",
          feedback: [
            "",
            "Catherine of Aragon was Henry's first wife and the mother of Mary I, Elizabeth's half-sister. Elizabeth's mother was Henry's second wife, Anne Boleyn.",
            "Jane Seymour was Henry's third wife and the mother of Edward VI. Elizabeth's mother was Anne Boleyn, the second wife.",
            "Lady Jane Grey was Edward's cousin, briefly made queen in 1553. She was not Henry's wife. Elizabeth's mother was Anne Boleyn."
          ] }
      ],
      modules: [
        {
          title: "The four parts of the Settlement",
          task: {
            kind: "match",
            q: "Match each part of Elizabeth's Religious Settlement to what it did.",
            pairs: [
              ["A new Parliament, 1559", "Met to pass the laws of the Religious Settlement"],
              ["The Act of Supremacy, 1559", "Removed the Pope and made Elizabeth Supreme Governor, not Supreme Head, of the Church"],
              ["The Act of Uniformity, 1559", "Said everyone must attend church, with fines for Catholics and Protestants who stayed away"],
              ["The Common Prayer Book, 1559", "Rewrote the service in English, worded vaguely so that both sides could use it"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the easy one: Parliament makes laws, so Parliament goes with passing the laws.",
                "Supremacy means being on top: who is on top of the Church? That one is about the Pope and Elizabeth's title.",
                "Uniformity means everyone the same: everyone must attend church.",
                "The Prayer Book is a book, so it goes with the words of the service."
              ],
              example: {
                q: "Match Henry's laws to what they did: the Act of Supremacy, 1534; the Treasons Act, 1534. Choices: made it a crime to deny the king's new title; made the king Supreme Head of the Church.",
                steps: ["Supremacy is about being head of the Church.", "Treason is a crime against the king, so the Treasons Act is about denying his title."],
                answer: "Act of Supremacy → Supreme Head; Treasons Act → crime to deny the title."
              }
            },
            core: { hint: "Use the names: Parliament passes; Supremacy is about who is on top; Uniformity means everyone the same; a prayer book holds the words of the service." },
            stretch: { extend: "For each of the three laws, say whether it was a Catholic solution, a Protestant solution or a compromise, and give one reason each." }
          },
          explain: "Say, in one sentence, why Elizabeth chose the title Supreme Governor rather than Supreme Head.",
          why: "Parliament passed the laws; the Act of Supremacy removed the Pope and made Elizabeth Supreme Governor; the Act of Uniformity made church attendance compulsory with fines for both sides; the Common Prayer Book put a vaguely worded service into English."
        },
        {
          title: "Elizabeth's reign in order",
          task: {
            kind: "order",
            q: "Put these events from Elizabeth's reign in chronological order.",
            items: [
              "Mary dies and Elizabeth becomes queen, aged 25 (17 November 1558)",
              "Parliament passes the Religious Settlement, the Middle Way (1559)",
              "Sir Francis Drake becomes the first Englishman to sail round the globe (1580)",
              "Sir Walter Raleigh sets up a colony in North America (1585)",
              "Mary Queen of Scots is executed (1587)",
              "England defeats the Spanish Armada (1588)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Every event has a year. Start with the smallest.",
                "Elizabeth has to become queen before she can pass any laws, so 1558 comes before 1559.",
                "The exploration events come in the middle of the reign: 1580 then 1585.",
                "The two dangers come last: Mary Queen of Scots in 1587, then the Armada in 1588."
              ],
              example: {
                q: "Put in order: Edward dies (1553); Henry VIII dies (January 1547); Edward is born (October 1537).",
                steps: ["Smallest year first: 1537.", "Then 1547, then 1553."],
                answer: "Edward born; Henry dies; Edward dies"
              }
            },
            core: { hint: "Queen first, then the law, then the two explorers, then the two dangers. The Armada is last." },
            stretch: { extend: "Explain how the execution of Mary Queen of Scots in 1587 and the defeat of the Armada in 1588 are connected." }
          },
          explain: "Say, in one sentence, why the Religious Settlement came so early in Elizabeth's reign.",
          why: "17 November 1558 Elizabeth becomes queen; 1559 the Settlement; 1580 Drake; 1585 Raleigh's colony; 1587 Mary Queen of Scots executed; 1588 the Armada defeated."
        },
        {
          title: "Was the Middle Way really in the middle?",
          task: {
            kind: "written",
            q: "Is it accurate to call Elizabeth's Religious Settlement the Middle Way? Write one paragraph using Point, Evidence, Explain and Link, with evidence from the three laws of 1559.",
            criteria: [
              "Point: I say clearly whether I think Middle Way is an accurate name.",
              "Evidence: I use at least two of the changes of 1559 as evidence.",
              "Explain: for each piece of evidence I say who would have been happier, Catholics or Protestants, and why.",
              "Link: I finish with a judgement that answers the question."
            ],
            model: "I think Middle Way is only partly an accurate name for Elizabeth's Religious Settlement. For example, the Act of Uniformity of 1559 made everyone attend the same church and fined Catholics and Protestants alike if they stayed away, which was a real compromise because it treated both sides the same instead of punishing one of them. However, the Act of Supremacy of 1559 removed the Pope and made Elizabeth Supreme Governor of the Church, and the Common Prayer Book was in English, which Protestants wanted and Catholics did not, so the needle on the dial sits closer to the Protestant side. Therefore the settlement was a middle way in its tone, because it softened titles and wording to keep Catholics calm, but in its main decisions it was a Protestant settlement."
          },
          levels: {
            support: {
              steps: [
                "Decide: accurate, not accurate, or partly.",
                "Point: I think Middle Way is / is not an accurate name because…",
                "Evidence and Explain: pick two of the Act of Supremacy, the Act of Uniformity and the Common Prayer Book. For each, say what it did and who would have been happier.",
                "Link: Therefore the settlement was… because…"
              ],
              example: {
                q: "Was Henry VIII's England really a Catholic country? Plan a PEEL paragraph.",
                steps: ["Point: partly.", "Evidence 1: services stayed Catholic and Henry died a Catholic.", "Evidence 2: but the Pope was gone and the monasteries were closed.", "Link: Catholic in worship, not in leadership."],
                answer: "A PEEL plan with a partly judgement and two pieces of evidence."
              }
            },
            core: { hint: "Use the dial from your lesson. Two laws lean Protestant; one is a compromise. Say where the needle stops and why." },
            stretch: { extend: "Argue whether the Middle Way was a success for the country even if it was not truly in the middle. Use the Armada and the absence of religious war as evidence." }
          },
          explain: "Say, in one sentence, which of the three laws of 1559 was closest to a true compromise, and why.",
          why: "A strong answer judges each law: Supremacy mostly Protestant with a softened title, Uniformity a compromise that treated both sides alike, the Prayer Book a compromise in wording but Protestant in language. The needle stops a little to the Protestant side."
        }
      ]
    },
    /* ───────────── 6 · which Tudor made the biggest religious change? ───────────── */
    {
      key: "biggest-change", n: 6, title: "Which Tudor monarch made the biggest religious changes?",
      lead: "The four monarchs and their policies side by side, the three tests historians use to measure change, and how to build the assessment answer.",
      covers: [6],
      pretext: {
        words: [
          { word: "policy", means: "a plan of action chosen by a ruler or government", sentence: "Each Tudor monarch had a different religious policy." },
          { word: "impact", means: "the effect something has on people", sentence: "Historians judge a change by its impact." },
          { word: "long-lasting", means: "still felt a long time afterwards", sentence: "Elizabeth's settlement was long-lasting because it outlived her." },
          { word: "judgement", means: "your decision after weighing the evidence", sentence: "Your conclusion must give a clear judgement." },
          { word: "evidence", means: "facts that support a point", sentence: "The more specific your evidence, the stronger your paragraph." }
        ],
        passage: [
          "You have now met four Tudor monarchs who changed religion in England.",
          "Henry VIII broke from the Pope and made himself Supreme Head of the Church.",
          "He closed the monasteries, but kept Catholic services.",
          "Edward VI made England Protestant, with plain churches and an English prayer book.",
          "Mary I brought back the Catholic faith and burned about 300 Protestants.",
          "Elizabeth I chose the Middle Way to end the fighting.",
          "Your assessment asks which monarch made the biggest religious changes.",
          "Historians judge a change by its impact.",
          "They ask how many people it affected.",
          "They ask how long it lasted.",
          "They ask whether it was something brand new.",
          "Use these three tests to make your own judgement."
        ]
      },
      sections: [
        {
          heading: "Four monarchs, four policies",
          paragraphs: [
            "Henry VIII (code H in your bell work): the Act of Supremacy of 1534 made him Supreme Head of the Church of England; he began the Dissolution of the Monasteries from 1536; he destroyed Becket's shrine; the Pope excommunicated him in 1538. Yet services stayed Catholic and Henry died a Catholic. Edward VI (E): the first Protestant king; plain churches with paintings and decorations destroyed; a new prayer book in English.",
            "Mary I (M): heresy laws; Latin prayer books and decorated churches brought back; about 300 Protestants burned at the stake; marriage to Philip II of Spain. Elizabeth I (EL): the Middle Way; the Act of Supremacy of 1559 making her Supreme Governor; the Act of Uniformity; the Common Prayer Book in English.",
            "Your review sheet lists nine changes for a Diamond of 9: Act of Supremacy, Excommunication, Dissolution of the Monasteries, English Prayer Book, Heresy Laws, Burning Protestants, Act of Uniformity, Supreme Governor, Middle Way. Before you rank them, make sure you can say which monarch each belongs to."
          ],
          tip: "Bingo words to recognise: Excommunication (Henry), English (Edward's prayer book), Burnt at the Stake (Mary), Supreme Governor and the Middle Way (Elizabeth), Lady Jane Grey (1553), Jane Seymour (Edward's mother)."
        },
        {
          heading: "How do historians measure change?",
          paragraphs: [
            "Your lesson gives three prompts for judging how big a change was. Impact: how many people did it affect, and how deeply? A change that altered what every villager saw in church each Sunday had a bigger impact than a change to a title. How long-lasting: did it survive the monarch who made it, or was it undone by the next one? Brand new: was it the first time anything like this had happened, or did it copy or reverse an earlier change?",
            "Apply the tests and the answer is not obvious. Henry's break with Rome was brand new and it lasted, but its impact on ordinary worship was small. Edward's changes had a huge impact on worship but lasted only six years before Mary reversed them. Mary's burnings had a terrible impact on about 300 people and their families, but her changes lasted only five years. Elizabeth's settlement was partly a copy of earlier laws, yet it lasted longest of all.",
            "This is why the assessment question is a how far question. Any of the four monarchs can be argued for, as long as you use the tests and give specific evidence."
          ],
          worked: {
            q: "Use the three tests to judge how big a change Henry VIII's Act of Supremacy was.",
            steps: [
              "Impact: it removed the Pope's authority over every church in England, so it affected the whole country, but ordinary services did not change.",
              "Long-lasting: apart from Mary's five years, the monarch has led the Church of England ever since, so it lasted.",
              "Brand new: no English king had ever been head of the Church before, so it was completely new.",
              "Judgement: a very big change in who held power, a smaller change in how people worshipped."
            ],
            answer: "Big on long-lasting and brand new; smaller on day-to-day impact. A strong candidate for the biggest change, but not the only one."
          },
          tip: "Impact, lasting, new. Run every change through all three before you rank it."
        },
        {
          heading: "Building the assessment answer",
          paragraphs: [
            "The practice question is: Henry VIII introduced the biggest religious changes in Tudor England. How far do you agree? Your lesson sets a three-paragraph structure. Paragraph 1 agrees with the statement, using Henry's changes. Paragraph 2 disagrees, arguing that a different monarch made bigger changes. Paragraph 3 is a conclusion that makes a judgement about which Tudor made the biggest religious change. So you write about two of the four monarchs.",
            "Each paragraph follows the success criteria. SC1: state clearly whether you agree or disagree. SC2: give a reason, your point. SC3: give evidence, and the more specific the knowledge the better: a law, a year, a number. SC4: explain how your evidence answers the question about who made the biggest changes. SC5: link back to the question.",
            "Your lesson's sentence starters help: I agree that… / I disagree that… instead it was…; For example…; This shows big religious change because…; Therefore… The conclusion begins Overall, I agree or disagree… and names whose changes were bigger and why."
          ],
          tip: "Specific knowledge wins marks: not Henry changed the Church but the Act of Supremacy of 1534 made Henry Supreme Head."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which Tudor monarch ordered the Dissolution of the Monasteries?", options: ["Henry VIII", "Edward VI", "Mary I", "Elizabeth I"], answer: 0, why: "Henry VIII began closing the monasteries from 1536 and took their land and treasure for the Crown.",
          feedback: [
            "",
            "Edward VI's changes were to churches and services: plain churches and an English prayer book. The monasteries had already been closed by his father, Henry VIII, from 1536.",
            "Mary I tried to bring Catholic ways back, not to close Catholic monasteries. The Dissolution was Henry VIII's policy, from 1536.",
            "Elizabeth I's policy was the Middle Way of 1559. The monasteries had been closed a generation earlier by her father, Henry VIII."
          ] },
        { kind: "gap", q: "Elizabeth I's Religious Settlement of 1559 became known as the ___ Way.", answer: "Middle", options: ["Middle", "Catholic", "Protestant"], why: "The Middle Way was Elizabeth's attempt at a compromise that both Catholics and Protestants could live with.",
          feedback: {
            "Catholic": "Elizabeth removed the Pope and used an English prayer book, so her settlement was not a Catholic way. It was called the Middle Way because it tried to sit between the two sides.",
            "Protestant": "The settlement leaned Protestant, but its name describes what it tried to be: a compromise between the two sides. Your lesson calls it the Middle Way."
          } },
        { kind: "mcq", q: "Under which monarch was a new prayer book in English first introduced?", options: ["Edward VI", "Henry VIII", "Mary I", "Elizabeth I"], answer: 0, why: "Edward VI's England produced the first English prayer book. Henry had refused to; Mary brought Latin back; Elizabeth's 1559 book was a revised English version.",
          feedback: [
            "",
            "Henry VIII kept Catholic services and did not produce a prayer book in English; your lesson makes this point about how little he changed worship. The first English prayer book came under Edward VI.",
            "Mary I did the opposite: she brought back Latin prayer books. The first English prayer book came under her brother Edward VI.",
            "Elizabeth's Common Prayer Book of 1559 was in English, but it was a rewritten version. The first English prayer book had come under Edward VI."
          ] }
      ],
      modules: [
        {
          title: "Whose policy was it?",
          task: {
            kind: "match",
            q: "Match each religious policy to the Tudor monarch who introduced it.",
            pairs: [
              ["Dissolution of the Monasteries", "Henry VIII"],
              ["English Prayer Book, plain churches", "Edward VI"],
              ["Heresy laws and the burning of Protestants", "Mary I"],
              ["Supreme Governor and the Middle Way", "Elizabeth I"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Think about what each monarch wanted. Henry wanted the Pope's power and the Church's money.",
                "Edward wanted England Protestant: plain churches and English services.",
                "Mary wanted England Catholic again and punished Protestants as heretics.",
                "Elizabeth wanted peace between the sides and chose a softer title."
              ],
              example: {
                q: "Match the leader to the change: Luther; William the Conqueror. Choices: built castles across England; wrote the 95 Theses.",
                steps: ["Luther was a monk who protested against the Church: the 95 Theses.", "William was a conqueror who needed control: castles."],
                answer: "Luther → 95 Theses; William → castles."
              }
            },
            core: { hint: "Money and monasteries: Henry. Plain and English: Edward. Heresy and burning: Mary. Governor and Middle: Elizabeth." },
            stretch: { extend: "Rank the four policies from biggest to smallest religious change using the three tests (impact, lasting, new), and justify your top choice." }
          },
          explain: "Say, in one sentence, which of the four policies affected ordinary people most directly.",
          why: "Henry closed the monasteries; Edward brought the English prayer book and plain churches; Mary brought heresy laws and burnings; Elizabeth became Supreme Governor and chose the Middle Way."
        },
        {
          title: "Which monarch made this change?",
          task: {
            kind: "mcq",
            q: "A monarch closes the monasteries and takes their land and treasure for the Crown. Which Tudor monarch made this change?",
            options: ["Henry VIII", "Edward VI", "Mary I", "Elizabeth I"],
            answer: 0,
            why: "The Dissolution of the Monasteries was Henry VIII's policy, begun in 1536 once the Act of Supremacy had made him head of the Church.",
            feedback: [
              "",
              "Edward VI changed churches and services, but the monasteries were already gone. Closing them was Henry VIII's policy from 1536.",
              "Mary I was a Catholic who wanted the old Church back; she would not have closed monasteries. This was Henry VIII.",
              "Elizabeth I inherited a country without monasteries. Her father Henry VIII had closed them from 1536."
            ]
          },
          contexts: [
            { label: "A new title", q: "A monarch passes a law making himself Supreme Head of the Church of England, so that the Pope has no power in England. Which Tudor monarch made this change?", why: "Supreme Head is Henry VIII's title from the Act of Supremacy of 1534. Elizabeth later chose Supreme Governor instead." },
            { label: "A shrine destroyed", q: "A monarch has the shrine of St Thomas Becket at Canterbury pulled down and takes its gold and jewels. Which Tudor monarch made this change?", why: "Henry VIII destroyed Becket's shrine in 1538 as part of taking the Church's wealth." },
            { label: "Thrown out by the Pope", q: "A monarch refuses to accept the Pope's authority over the Church in his country, and the Pope throws him out of the Catholic Church. Which Tudor monarch made this change?", why: "Henry VIII refused the Pope's authority and was excommunicated in December 1538, the Pope's final answer to the break with Rome." }
          ],
          levels: {
            support: {
              steps: [
                "Ask what the change is about: money and land, how services look, punishing heretics, or compromise.",
                "Money, land, the Pope's power and new titles for the king all point to Henry VIII.",
                "Plain churches and English services point to Edward; Latin and burnings to Mary; Governor and compromise to Elizabeth.",
                "Monasteries are land and treasure, so this is Henry."
              ],
              example: {
                q: "A monarch brings back Latin prayer books and decorated churches. Which Tudor monarch made this change?",
                steps: ["Latin and decoration are Catholic ways.", "The Tudor who restored Catholic ways was Mary I."],
                answer: "Mary I."
              }
            },
            core: { hint: "Who gained from this change? If the king gained money or power, think Henry." },
            stretch: { extend: "Explain why Henry could only close the monasteries after the Act of Supremacy, and what that tells you about the order of his changes." }
          },
          explain: "Say, in one sentence, how you can tell a Henry VIII change from an Edward VI change.",
          why: "Henry's changes were about power and money: the Pope's authority, the title Supreme Head, the monasteries, Becket's shrine. Edward's were about how people worshipped."
        },
        {
          title: "Assessment practice: the disagree paragraph",
          task: {
            kind: "written",
            q: "Henry VIII introduced the biggest religious changes in Tudor England. Write ONE paragraph disagreeing with this statement, arguing that a different Tudor monarch made bigger changes. Use the success criteria SC1 to SC5.",
            criteria: [
              "SC1: I state clearly that I disagree, and name the monarch I think made bigger changes.",
              "SC2: I give a reason (point) why that monarch's changes were bigger.",
              "SC3: I give specific evidence: a law, a year, a number or a named change.",
              "SC4: I explain how my evidence shows big religious change, using the tests of impact, how long-lasting and brand new.",
              "SC5: I link back to the question in my final sentence."
            ],
            model: "I disagree that Henry VIII introduced the biggest religious changes in Tudor England; instead it was Edward VI, because his changes altered the way ordinary people worshipped every week. For example, under Edward churches were stripped of their paintings and statues and made plain, and a new prayer book in English replaced the Latin service, so that for the first time people could understand what was said in church. This shows big religious change because the impact reached every village in England, whereas Henry had kept Catholic services and only changed who was in charge at the top. Therefore I disagree that Henry introduced the biggest religious changes, because Edward VI changed what people actually saw and heard in church, even though his changes lasted only six years."
          },
          levels: {
            support: {
              steps: [
                "Choose your monarch: Edward (impact on worship), Mary (burnings and reversal) or Elizabeth (long-lasting settlement).",
                "SC1 and SC2: I disagree that Henry VIII made the biggest religious change in Tudor England; instead it was… This was because they…",
                "SC3 and SC4: For example… This shows big religious change because… (use impact, lasting or new).",
                "SC5: Therefore, I disagree that Henry introduced the biggest religious changes because…"
              ],
              example: {
                q: "Luther was the most important reason the Reformation spread. Plan a paragraph disagreeing, arguing for new technologies.",
                steps: ["SC1: I disagree; instead it was new technologies.", "SC2: because printing carried the ideas.", "SC3: thousands of pamphlets copied in weeks.", "SC4: this shows importance because without printing the ideas would have moved at walking pace.", "SC5: therefore technology mattered more."],
                answer: "A five-step plan that disagrees and argues for one alternative factor."
              }
            },
            core: { hint: "Name your alternative monarch in sentence one. Use one of the three tests in your explain sentence. End with Therefore." },
            stretch: { extend: "Write the conclusion paragraph: Overall, I agree or disagree that Henry VIII introduced the biggest religious change. Name whose changes were bigger and give the deciding test." }
          },
          explain: "Say, in one sentence, which of the three tests (impact, long-lasting, brand new) decided your judgement.",
          why: "A strong disagree paragraph names one alternative monarch, gives specific evidence with a law, year or number, explains the size of the change using impact, how long-lasting or brand new, and links back to the question."
        }
      ]
    }
  ],

  sources: {
    deckDump: "hi_y07_topic_5_the_tudors.txt",
    decksUsed: [
      "Lesson 1 - Luther and the Reformation / L1 Luther & the Reformation.pptx",
      "Lesson 1 - Luther and the Reformation / Why did Luther's Ideas Spread so fast_.pptx",
      "Lesson 2 - Henry the 8th / Homework Single Slide.pptx",
      "Lesson 2 - Henry the 8th / NEW L2 Henry VIII & Split from the Church - Copy.pptx",
      "Lesson 2 - Henry the 8th / Why did Henry VIII Split from the Church.pptx",
      "Lesson 3 - Edward / NEW L3 Edward VI.pptx",
      "Lesson 4 - Mary / 0. L4 Mary I.pptx",
      "Lesson 5 - Elizabeth / L5 Elizabeth I.pptx",
      "Lesson 6 - Review Lesson / L6 Tudors Review.pptx"
    ],
    notes: "Lesson titles, sequence, learning objectives, key words (monarch, reign, succeeded to the throne, heir, nobles, Pope; propaganda, heresy), the five reasons for the Church's power, Luther's ideas (Bible first, faith personal, German Bible dated 1525 by the deck), the four spread factors, the Catholic/Protestant ways table, Henry's biography (1509 aged 17, lavish spender, six wives, war), the three problems and solutions worksheet (Dissolution; Becket's shrine 1538; Act in Restraint of Appeals 1533; marriage to Anne January 1533; Act of Supremacy 1534; Treasons Act 1534), the MWB quiz facts (25 per cent of land; 1536; 1538), the Anglo-Catholic point, the Edward timeline (1536, October 1537, December 1538, January 1547, aged 9, regents, first Protestant king), the L4 bell-work facts (plain churches with paintings destroyed; English prayer book), Mary's story (1553, aged 15; Lady Jane Grey, Syon House, Northumberland; aged 37; Philip II of Spain; rebellion; Latin prayer books; heresy; about 300 Protestants burned; Bloody Mary as propaganda; London celebrated), Elizabeth (17 November 1558, aged 25, Anne Boleyn; Middle Way; the four 1559 changes and the deck's judgements on them; Drake 1580; Raleigh 1585; Mary Queen of Scots 1587; Armada 1588; the painting), and the review lesson (policy codes, bingo words, Diamond of 9, the assessment question, SC1–SC5, the three tests of change, the sentence starters) are taken from the department's decks. The tenth deck in the dump (Lesson 4 '1. Mary Reading.pptx') is empty in the dump and could not be used. Nothing is quoted: the deck prints no primary source, and its model paragraphs, its two textbook sources on Mary and its first-person speech for Henry are fingerprinted and banned in verify.py; all explanations, questions, worked examples and model paragraphs are original. Two dates not printed in the dump (1485 and 1603, the limits of the Tudor period asked for in the L1 bell work) and two video answers (Luther refusing to take back his words at his hearing; translating while in hiding) are from standard reference knowledge and are listed in NOTES.md for the Head of History to confirm. The deck's 'Act of Restraints & Appeals' is given its proper title, Act in Restraint of Appeals; the deck's 'Anglo meaning British' is rendered as English-led; the deck's 'heretics would be hanged' is rendered as 'could be put to death'; the deck's description of the Act of Uniformity is softened to what it certainly did (compulsory attendance, fines for both sides); the deck's 'Phillip II', 'Thomas Beckett', 'War of the Roses', 'Ann Boleyn' and 'first Englishmen' are spelt correctly; the deck's '30,000 men' (which contradicts its own 'relatively unopposed') is not used; the deck's '20 years' of marriage by 1527 is given as 'nearly twenty years'; the deck's 'he spent no time with her in England' is given as 'he spent little time with her in England': each is recorded in NOTES.md section 4. astra/2: per-option feedback on every mcq and gap, misconceptions with checks on all four numeric items, explain prompts on every module, three context modules (ch1, ch3 numeric, ch6), glossary chapters, four Connections groups, spacing; no widgets, no constellation, no pretext.l1."
  }
};
