// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 History · Year 7 Topic 3: William's Control of England · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   every date, name and sequence is held in an independent CHRONOLOGY table in verify.py (each entry carries its deck
//   slide reference, or is marked as reference knowledge and flagged in NOTES.md); every four-digit year in pupil text
//   must be a CHRONOLOGY year; every dated event must carry its CHRONOLOGY year; every "order" task is compared with the
//   canonical sequences held there; every number ≥ 100 in pupil text must be in the FACTS set taken from the deck;
//   every mcq / gap / match answer is compared with an independent answer key; numeric items carry `check` and
//   `misconceptions` (each with its own `check`); contexts share the task's answer by construction; feedback,
//   misconception and explain coverage are asserted at 24/24, 4/4 and 18/18; verify.py then mutates a copy of the
//   manifest twenty ways and fails unless every mutation is caught.
//   Quotation guard: the ONLY “…” text allowed anywhere is a verbatim fragment of the two chronicle passages the deck
//   prints (William of Poitiers, 1070s; Orderic Vitalis, 1120s), both medieval primary sources out of copyright; the
//   deck's own model answers are fingerprinted and banned; modern historians are not quoted.
//   Language guard: "enslaved people", never "slaves" as a noun; "groups" or "kingdoms", not "tribes"; the deck's
//   slips (Doomsday Book, Leofine, "conqueror" as a verb, "meters", "symbolize", "Holland", "Wessex and Mercia")
//   are banned; British spelling. The one lower-case "doomsday" in chapter 5 is deliberate: it is the etymology
//   that teaches the correct spelling, and the banned string is the deck's NAME for the record, "Doomsday Book".
//   astra/2: per-wrong-option `feedback` on every mcq/gap; `misconceptions` on every numeric; `explain` on every module;
//   `glossary[].chapter`; `connections` 4 × 4 ⊂ glossary; `meta.spacing [2,7,30]`; no constellation; no pretext.l1.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["hist-williams-control"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "hist-williams-control",
    subjectKey: "history",
    subject: "History",
    board: "AQA",
    spec: "KS3 → 8145",
    specRef: "KS3 Year 7 Topic 3: William's Control of England — foundations for AQA GCSE History 8145 (British depth study: Norman England, c1066–c1100) and the skills of chronology, causation and interpretations",
    year: 7,
    tier: "KS3",
    title: "William's Control of England",
    sub: "Hastings was won, but England was not. How a few thousand Normans took hold of a whole country: by making peace, by terror, by land and by castles.",
    bigQuestion: "How did William conquer and control England after 1066?",
    lessonCount: 5,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "What was England like before 1066?", question: "Who were the Anglo-Saxons, who held power in their England, and how did their society work?", keywords: ["Anglo-Saxons", "Witan", "earl", "thegn", "Godwinsons", "hierarchy"] },
    { n: 2, title: "What problems did William face after winning the Battle of Hastings?", question: "What problems did William face after Hastings, and how did he start to solve them?", keywords: ["submit", "lay waste", "surrender", "fortifications", "short-term", "long-term"] },
    { n: 3, title: "Terror: how did William put down challenges to his rule, 1066–70?", question: "How did William deal with the rebellions of 1067–69, and what do two chroniclers say about the Harrying of the North?", keywords: ["rebellion", "Northumbria", "Harrying of the North", "interpretation", "William of Poitiers", "Orderic Vitalis"] },
    { n: 4, title: "How did William use land for control?", question: "What were the Feudal System and the Domesday Book, and why did they help William control England?", keywords: ["homage", "Feudal System", "villeins", "Domesday Book", "barons"] },
    { n: 5, title: "Why did the Normans build so many castles?", question: "Why did William build castles, what were their key features, and how did they help him keep control?", keywords: ["Normans", "Norman Conquest", "castle", "motte", "bailey", "terror"] }
  ],

  glossary: [
    { term: "Anglo-Saxons", means: "The people who ruled England before the Normans. Their ancestors came from across the North Sea after the Romans left.", chapter: "england-before-1066" },
    { term: "Witan", means: "The council of nobles that chose the next king and helped him rule.", chapter: "england-before-1066" },
    { term: "earl", means: "One of the most powerful men in England after the king. An earl ruled a huge area called an earldom.", chapter: "england-before-1066" },
    { term: "thegn", means: "A local lord who owned land, lived in a manor house and fought for his earl or king.", chapter: "england-before-1066" },
    { term: "submit", means: "To give in and accept someone as your ruler. The English earls submitted to William in 1066.", chapter: "williams-problems" },
    { term: "lay waste", means: "To burn and destroy an area so that nobody can live or farm there.", chapter: "williams-problems" },
    { term: "rebellion", means: "Rising up and fighting against the ruler.", chapter: "rebellion-and-terror" },
    { term: "Harrying of the North", means: "William's campaign of 1069–70 to burn crops, animals, tools and food across the North so that rebels had nothing to live on.", chapter: "rebellion-and-terror" },
    { term: "Feudal System", means: "William's way of sharing out land: everyone held land from someone above them and owed loyalty and service in return.", chapter: "land-and-domesday" },
    { term: "homage", means: "A ceremony in which a lord knelt before the king and promised to be loyal to him.", chapter: "land-and-domesday" },
    { term: "villein", means: "A peasant at the bottom of the Feudal System who paid for land with work, food and services.", chapter: "land-and-domesday" },
    { term: "Domesday Book", means: "The record of William's great survey of 1086: who owned what, in about 13,000 villages.", chapter: "land-and-domesday" },
    { term: "motte", means: "The mound of earth a Norman castle stood on, about 15 metres high.", chapter: "castles" },
    { term: "bailey", means: "The fenced yard below the motte where the Normans lived and worked.", chapter: "castles" },
    { term: "keep", means: "The strong building on top of the motte where the baron lived.", chapter: "castles" },
    { term: "palisade", means: "The wooden fence around the bailey.", chapter: "castles" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 glossary terms used exactly once.
  connections: [
    { group: "England before the Normans", terms: ["Anglo-Saxons", "Witan", "earl", "thegn"] },
    { group: "Taking control by force", terms: ["submit", "lay waste", "rebellion", "Harrying of the North"] },
    { group: "Control through land", terms: ["Feudal System", "homage", "villein", "Domesday Book"] },
    { group: "Parts of a castle", terms: ["motte", "bailey", "keep", "palisade"] }
  ],

  chapters: [
    /* ───────────── 1 · England before 1066 ───────────── */
    {
      key: "england-before-1066", n: 1, title: "England before 1066",
      lead: "Who the Anglo-Saxons were, who really held power in Edward the Confessor's England, how society was arranged from king to enslaved person, and how people lived.",
      covers: [1],
      pretext: {
        words: [
          { word: "Anglo-Saxons", means: "the people who ruled England before the Normans came", sentence: "The Anglo-Saxons had ruled England for hundreds of years before 1066." },
          { word: "Witan", means: "the council of nobles that chose the king and helped him rule", sentence: "The Witan chose Edward the Confessor to be king." },
          { word: "earl", means: "a very powerful lord who ruled a huge area called an earldom", sentence: "Harold Godwinson was the most powerful earl in England." },
          { word: "thegn", means: "a local lord who owned land and fought for the king", sentence: "A thegn lived in a manor house and owned land called hides." },
          { word: "hierarchy", means: "a way of ranking people from most to least powerful", sentence: "The Anglo-Saxon hierarchy had the king at the top and enslaved people at the bottom." },
          { word: "fyrd", means: "the part-time army of ordinary men that a lord could call out", sentence: "The fyrd was not a professional army." }
        ],
        passage: [
          "Before the Normans came, England was ruled by the Anglo-Saxons.",
          "Their ancestors had arrived from across the North Sea after the Romans left in 410.",
          "By 1066 the king was Edward the Confessor.",
          "He had been king since 1042.",
          "He was religious and not a warrior, and he had no children.",
          "The most powerful family in England was the Godwinsons.",
          "Harold Godwinson was the greatest earl, and some thought him stronger than the king.",
          "Below the king came the earls, who ruled huge areas called earldoms.",
          "Below them came the thegns, local lords who owned land.",
          "Most people, about 85 in every 100, were peasant farmers.",
          "About one in ten were enslaved people, who could be bought and sold.",
          "Houses were made of wood, with thatched roofs and a fire in the middle.",
          "England had very few castles, so it was not well defended."
        ]
      },
      sections: [
        {
          heading: "Who were the Anglo-Saxons?",
          paragraphs: [
            "The Anglo-Saxons were not one people but several groups: the Angles, the Saxons and the Jutes. They came to England from across the North Sea, from the lands we now call Germany, Denmark and the Netherlands. After the Romans left Britain in 410, these groups began to invade and settle.",
            "At first they settled in separate groups in different parts of England, and these grew into small kingdoms. By 1066 those kingdoms had long since joined into one England with one king. The Anglo-Saxons were Christians, and nearly everyone worked on the land as a farmer.",
            "In your last topic you studied how William won the Battle of Hastings. This topic picks up from that moment. To understand what William had to control, you first need to know what he had conquered: a rich, well-organised country with its own way of doing things."
          ],
          tip: "Anglo-Saxon is the name for the people and their time. England before 1066 is Anglo-Saxon England; after 1066 we call it Norman England."
        },
        {
          heading: "Who held power? The king, the Witan and the Godwinsons",
          paragraphs: [
            "In 1066 the king was Edward the Confessor. He had been king since 1042 and was related to the old Anglo-Saxon king Ethelred the Unready. Edward was seen as a very religious man, not a warrior king. He had been chosen by the Witan, a council of nobles which helped the king to rule. Some historians have seen Edward as a weak king, and say the real power in England lay with one family: the Godwinsons.",
            "The Godwinsons held huge amounts of land, which made them almost as rich as the king and gave them a large force of thegns to fight for them. Harold Godwinson ruled Wessex and was the most powerful earl in England; many people thought him more powerful than the king himself. His brother Gyrth ruled East Anglia and his brother Leofwine ruled Kent.",
            "A fourth brother, Tostig, had been Earl of Northumbria since 1055, but he was not popular. The people of the North were of Viking descent and distrusted him as a southerner. He taxed them heavily, ruled very strictly and failed to avenge raids from Scotland. In the end they rebelled against him and King Edward was forced to banish him."
          ],
          worked: {
            q: "Explain how it could be argued that the Godwinsons were more powerful than the king.",
            steps: [
              "Make your point: It could be argued that the Godwinsons were more powerful than King Edward.",
              "Give evidence from the information sheet: they held huge amounts of land, which made them almost as rich as the king.",
              "Add a second piece of evidence: land gave them a large force of thegns to fight for them, and Harold, Gyrth, Leofwine and Tostig held four of the great earldoms between them.",
              "Explain the link: because Edward was religious rather than a warrior, the family with the land and the soldiers held the real power."
            ],
            answer: "Point, evidence, explain: the Godwinsons held the land, the money and the fighting men, while Edward was not a warrior, so the real power lay with them."
          },
          tip: "Point, Evidence, Explain. One sentence each is enough for a Year 7 paragraph; the explain sentence should use the word because."
        },
        {
          heading: "How society worked: the hierarchy",
          paragraphs: [
            "Anglo-Saxon society had a clear hierarchy, a ranking that showed how important and powerful each group was. At the top was the king. Below him came the earls, the second most important people in England, who owned vast areas of land called earldoms. Below the earls came the thegns, local lords who owned land measured in hides and lived in manor houses. By 1066 there were about 4,000 to 5,000 thegns.",
            "Most people were nowhere near the top. About 85 in every 100 were peasant farmers who rented small farms. Roughly one in ten were enslaved people. Your lesson sheet calls them slaves; we say enslaved people, because they were people first. They could be bought and sold and were treated more like property than like people.",
            "The hierarchy was not fixed for life. A peasant who gained five hides of land could become a thegn, and a thegn could be promoted to earl. But the king could also demote people, so everyone's position depended in the end on him."
          ],
          tip: "Learn the five levels in order from the top: king, earls, thegns, peasants, enslaved people. Draw them as a pyramid: the higher the level, the fewer the people."
        },
        {
          heading: "Everyday life and defence",
          paragraphs: [
            "Most houses were built of oak planks with wattle and daub (woven sticks covered in mud) filling the walls, and a roof of straw or reed thatch. In the middle of the room was an open hearth, a fire with a cooking pot over it. Raised platforms kept sleepers off the cold earth floor. Houses were cold, dark and smoky, with few windows if any, and a pen for animals outside.",
            "Much of southern England was forest, with clearings for farms and villages. The North was wild, heavily forested and had fewer people. About 90 in every 100 people lived in villages, and London was already the biggest and most important settlement. This is a difference from today, when most people live in towns and cities, but London being the largest settlement is a similarity.",
            "England was not well defended. Castles were very rare. Most towns were protected only by an open ditch and an earth bank; a fortified town like this was called a burh. If Vikings attacked, a local lord could call out the fyrd, a part-time army of ordinary men, but this was not a professional force. Remember this when you reach the castles chapter: William found a country with almost no castles in it."
          ],
          tip: "Similarity and difference questions want one of each, clearly labelled. Say which is which."
        }
      ],
      gate: [
        { kind: "mcq", q: "What was the Witan?", options: ["The council of nobles that chose the king and helped him rule", "The part-time army of ordinary men", "The land owned by a thegn", "The name for an earl's territory"], answer: 0, why: "The Witan was the council of nobles. It chose Edward the Confessor and helped him rule.",
          feedback: [
            "",
            "The part-time army was the fyrd. The Witan did not fight; it was the council of nobles that chose the king and advised him.",
            "A thegn's land was measured in hides. The Witan was not land at all but a council of nobles who chose and advised the king.",
            "An earl's territory was an earldom. The Witan was the council of nobles, which included earls, but it was a group of people, not a place."
          ] },
        { kind: "gap", q: "About 85 in every 100 Anglo-Saxons were ___ farmers who rented small farms.", answer: "peasant", options: ["peasant", "thegn", "earl"], why: "The great majority of Anglo-Saxons, about 85 per cent, were peasants who farmed rented land.",
          feedback: {
            "thegn": "Thegns were local lords who owned land, and there were only about 4,000 to 5,000 of them. The 85 in every 100 were the peasants who rented small farms from lords like these.",
            "earl": "There were only a handful of earls, each ruling a huge earldom. The 85 in every 100 at the bottom of the pyramid were peasant farmers."
          } },
        { kind: "mcq", q: "Which family was the most powerful in England in the years before 1066?", options: ["The Godwinsons", "The Normans", "The Vikings", "The Witan"], answer: 0, why: "The Godwinsons held four great earldoms and were almost as rich as the king.",
          feedback: [
            "",
            "The Normans were from Normandy in northern France and did not hold power in England until after Hastings. Before 1066 the most powerful English family was the Godwinsons.",
            "The Vikings had ruled parts of England in the past and many northerners were of Viking descent, but they were not a family holding power in 1066. That was the Godwinsons.",
            "The Witan was the council of nobles, not a family. The family that dominated England, with Harold as the greatest earl, was the Godwinsons."
          ] }
      ],
      modules: [
        {
          title: "The Anglo-Saxon pyramid",
          task: {
            kind: "match",
            q: "Match each level of Anglo-Saxon society to its description.",
            pairs: [
              ["King", "Chosen by the Witan; could promote or demote anyone below him"],
              ["Earls", "Second most important people; ruled huge areas called earldoms"],
              ["Thegns", "Local lords who owned hides of land and lived in manor houses"],
              ["Peasants", "About 85 in every 100 people; rented small farms"],
              ["Enslaved people", "About one in ten people; could be bought and sold like property"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start at the top and the bottom: the king was chosen by the Witan, and enslaved people could be bought and sold.",
                "Earldoms belong to earls: the word is inside the word.",
                "Thegns are the local lords with hides and manor houses.",
                "Whoever is left, the biggest group of all, must be the peasants."
              ],
              example: {
                q: "Match the school hierarchy from your lesson starter: headteacher, teachers, students. Descriptions: runs the school; teach the lessons; the largest group with the least power.",
                steps: ["The headteacher runs the school.", "Teachers teach the lessons.", "Students are the largest group with the least power."],
                answer: "Headteacher: runs the school. Teachers: teach the lessons. Students: largest group with the least power."
              }
            },
            core: { hint: "Two levels have a number in their description. The bigger number is the bigger group, and bigger groups sit lower in the pyramid." },
            stretch: { extend: "The deck's extension asks if anything in the hierarchy surprised you. Explain one thing it tells us about the Anglo-Saxons, for example that people could move up or down." }
          },
          explain: "Say, in one sentence, why there were fewer people at each level as you go up the pyramid.",
          why: "The king was at the top and chosen by the Witan; earls ruled earldoms; thegns owned hides; peasants were the largest group; enslaved people were treated as property at the bottom."
        },
        {
          title: "Who had the most power?",
          task: {
            kind: "written",
            q: "Who had the most power in Anglo-Saxon England in 1066: the king, the Godwinsons, the earls or the people? Write an introduction sentence and one PEE paragraph.",
            criteria: [
              "My introduction says who ruled England in 1066 and how the country was divided.",
              "I give my opinion clearly: in my opinion, X had the most power.",
              "I give one reason with evidence from the chapter (land, money, soldiers, the Witan).",
              "I explain why that made them powerful, using the word because."
            ],
            model: "Anglo-Saxon England in 1066 was ruled by King Edward the Confessor, and the country was divided into earldoms ruled by earls. In my opinion the Godwinsons had the most power. One reason the Godwinsons were the most powerful was that they held four of the great earldoms and owned almost as much land as the king. This made them powerful because land brought money and a large force of thegns to fight for them, while Edward was a religious man rather than a warrior and relied on the Witan and the earls to rule."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: Anglo-Saxon England in 1066 was ruled by… The country was divided into…",
                "Sentence 2: In my opinion [the king / the Godwinsons / the earls / the people] had the most power.",
                "Sentence 3: One reason this group was the most powerful was… (pick one fact: land, money, thegns, the Witan).",
                "Sentence 4: This made them powerful because…"
              ],
              example: {
                q: "Who has the most power in a football club: the owner, the manager or the players? Write a PEE paragraph.",
                steps: ["Point: the owner has the most power.", "Evidence: the owner can hire and fire the manager.", "Explain: because everyone else's job depends on the owner's decision."],
                answer: "The owner has the most power. The owner can hire and fire the manager. This makes the owner powerful because everyone else's job depends on that decision."
              }
            },
            core: { hint: "Pick one group and stick to it. Land, money and soldiers are the three kinds of power in this chapter." },
            stretch: { extend: "Add a second paragraph that argues the opposite case, then a final sentence saying which argument is stronger and why." }
          },
          explain: "Say, in one sentence, which piece of evidence you chose and why it proves power.",
          why: "A strong answer names the ruler and the earldoms, gives a clear opinion, supports it with one fact from the chapter, and explains the link with because."
        },
        {
          title: "Why Tostig lost Northumbria",
          task: {
            kind: "mcq",
            q: "Why did the people of Northumbria rebel against Earl Tostig?",
            options: [
              "He was a southerner who taxed them heavily, ruled strictly and failed to stop Scottish raids",
              "He was a Viking who refused to become a Christian",
              "He tried to make himself king in place of Edward",
              "He gave their land to Norman knights"
            ],
            answer: 0,
            why: "The Northumbrians, who were of Viking descent, distrusted Tostig as a southerner; he taxed them heavily, ruled strictly and did not avenge raids from Scotland.",
            feedback: [
              "",
              "You have it the wrong way round. The Northumbrians were the ones of Viking descent; Tostig was a southerner from the Godwinson family, and that was part of why they distrusted him.",
              "Tostig did not try to take the throne. His problems were local: heavy taxes, strict rule and his failure to deal with raids from Scotland.",
              "Norman knights did not hold English land until after 1066. Tostig was banished before that, because of taxes, strict rule and the Scottish raids."
            ]
          },
          levels: {
            support: {
              steps: [
                "Find Tostig in the chapter: which earldom did he hold, and where is it?",
                "Who were the people there descended from, and where was Tostig from?",
                "List the three complaints the information sheet gives against him.",
                "Choose the option that contains all three."
              ],
              example: {
                q: "Why might a new head of year be unpopular with a class? Pick the best answer: she is from a different school, sets more detentions and never sorts out the bullying; or she likes a different football team.",
                steps: ["One option gives three real complaints about how she treats the class.", "The other is a detail that would not make people rebel."],
                answer: "The three complaints: different school, more detentions, bullying not sorted."
              }
            },
            core: { hint: "Three of the options describe things Tostig never did. The right one lists three complaints from the information sheet." },
            stretch: { extend: "Tostig's banishment mattered in 1066. Explain how an angry, banished Godwinson might become a problem for his brother Harold." }
          },
          explain: "Say, in one sentence, why being a southerner was a problem for an Earl of Northumbria.",
          why: "Northumbria had a Viking past and did not trust a southern earl. Tostig made it worse with heavy taxes, strict rule and his failure to avenge Scottish raids, so the people rose against him and Edward banished him."
        }
      ]
    },
    /* ───────────── 2 · William's problems after Hastings ───────────── */
    {
      key: "williams-problems", n: 2, title: "William's problems after Hastings",
      lead: "Why winning a battle did not make William king, the six problems he faced in October 1066, how he dealt with London and Dover, and how he came to be crowned by Christmas.",
      covers: [2],
      pretext: {
        words: [
          { word: "submit", means: "to give in and accept someone as your ruler", sentence: "The English earls submitted to William after he laid waste the land around London." },
          { word: "lay waste", means: "to burn down and destroy an area", sentence: "William's army laid waste the land around London." },
          { word: "surrender", means: "to give up fighting and hand over to the enemy", sentence: "The soldiers in Dover surrendered unconditionally, without making any demands." },
          { word: "fortifications", means: "defences such as walls, towers and ditches", sentence: "William strengthened the fortifications at Dover." },
          { word: "short-term problem", means: "a problem that must be solved straight away", sentence: "Harold's soldiers in London were a short-term problem." },
          { word: "long-term problem", means: "a problem that will take years to solve", sentence: "Collecting taxes from a country he did not know was a long-term problem." }
        ],
        passage: [
          "On 14 October 1066 William defeated and killed King Harold at Hastings.",
          "Harold's brothers Gyrth and Leofwine died there too.",
          "William expected the English to offer him the crown.",
          "They did not.",
          "He faced six problems.",
          "Vikings from Norway might invade the north again, helped by English rebels.",
          "London, the capital, still held some of Harold's soldiers.",
          "Dover had a strong fort full of English soldiers who could cut off his way back to France.",
          "He needed taxes, but he knew nothing about England or its people.",
          "Many English lords did not accept him, and his own men wanted rewards.",
          "His soldiers would be attacked once the fighting stopped.",
          "William laid waste the land around London until the earls submitted.",
          "Dover surrendered, and he strengthened its defences.",
          "On Christmas Day 1066 he was crowned King William I."
        ]
      },
      sections: [
        {
          heading: "The morning after Hastings",
          paragraphs: [
            "On 14 October 1066 the English army led by King Harold fought William's Norman army from sunrise to nearly sunset. William, Duke of Normandy, defeated and killed Harold. Harold's brothers Gyrth and Leofwine, two important Anglo-Saxon earls, were killed as well. In one day the Godwinson family, the most powerful in England, had lost three of its leaders.",
            "William expected England to submit to him and offer him the crown. It did not happen. The surviving Anglo-Saxon earls did not come to William and accept him as their new king. He had won a battle, but he had not won the country.",
            "This is the point your topic picks up from. Winning at Hastings gave William a chance; the next ten weeks decided whether he could use it."
          ],
          tip: "Battle of Hastings, 14 October 1066; coronation, Christmas Day 1066. Two dates, one autumn. Learn them as a pair."
        },
        {
          heading: "Six problems, short and long",
          paragraphs: [
            "Your worksheet lists six problems. The first three were short-term, meaning they had to be solved at once. There was still a serious threat of invasion in the north from Norway, backed by an English rebellion. London, the capital, had to be controlled quickly, and some of Harold's troops were still there. And Dover had a strong fort full of English soldiers who could cut off the Normans' escape route to France if things went wrong.",
            "The other three were long-term, meaning they would take years. Taxes needed collecting, but William knew nothing about England: where people lived or how much they had. Many English lords did not accept him as king, so he needed a way to keep every region under control while rewarding his loyal men. And once the country was conquered, there would be places where his soldiers came under attack and needed protection.",
            "Keep this list. The rest of the topic is the story of how William solved each problem: by making peace, by terror, by sharing out land and by building castles."
          ],
          worked: {
            q: "Is the threat of a Norwegian invasion in the north a short-term or a long-term problem? Explain why.",
            steps: [
              "Ask: does this have to be dealt with now, or over years?",
              "An invasion could come at any moment, and an English rebellion is ready to help it.",
              "So it must be faced straight away: it is short-term.",
              "Write it with because: This was a short-term problem because an invasion could arrive at any time and William had to be ready for it at once."
            ],
            answer: "Short-term, because an invasion could come at any moment and had to be faced straight away."
          },
          tip: "Short-term: must be solved now. Long-term: will take years. Your worksheet marks them S and L."
        },
        {
          heading: "Solving London and Dover",
          paragraphs: [
            "William dealt with London by force. His army laid waste the land around the city: it burned and destroyed farms and villages so that the people inside could see what refusing him would cost. The English earls who had not offered him the crown now submitted, which means they accepted William as their new king. London was the most powerful and richest part of the country, so by controlling London William had secured his place on the throne.",
            "Dover was solved in a different way. The English soldiers there surrendered unconditionally, giving up without making any demands. William then strengthened the fortifications, the defences such as walls and towers. Dover mattered because of its position on the coast nearest to France: controlling it meant there was always a safe route back to Normandy for the Normans.",
            "With London and Dover in his hands, William controlled the South of England. But think about how he had done it. Forcing the earls and London to submit by laying waste the land might make them obey; it would not make them loyal. That is the problem the next chapter is about."
          ],
          tip: "The deck's extension question asks why forcing people to submit could create more problems. Answer: obedience from fear can turn into rebellion when the army moves on."
        },
        {
          heading: "King by Christmas",
          paragraphs: [
            "With the Anglo-Saxon army in retreat after the death of its king, William pushed on towards London with his army. After meeting some resistance, he reached London by December 1066. On 25 December, Christmas Day, 1066, he was crowned William I, King of England.",
            "So by the end of 1066 William was king. Yet look again at the problem list. He controlled the South, but the earls of the North had submitted in words only. He still knew nothing about the country he was supposed to tax. His few thousand Normans were surrounded by English people who had not chosen him.",
            "Your plenary asked whether William would conquer the rest of England through peace or terror. His actions after Hastings give clues both ways: he laid waste the land around London, but he also made peace with the earls who had opposed him. Keep the question in mind through the next chapters."
          ],
          tip: "When a question says by the end of 1066, it wants both halves: what William had achieved (crowned king) and what was still unsolved (the North, taxes, loyalty)."
        }
      ],
      gate: [
        { kind: "numeric", q: "In which year was William crowned King of England?", answer: 1066, check: "1066", tolerance: 0, units: "", why: "William was crowned on Christmas Day 1066, about ten weeks after the Battle of Hastings on 14 October 1066.",
          misconceptions: [
            { answer: 1067, check: "1066+1", says: "You have moved the coronation into the next year. It happened very quickly: Hastings was on 14 October 1066 and William was crowned on Christmas Day of the same year." },
            { answer: 1065, check: "1066-1", says: "That is the year before the invasion. Edward the Confessor was still alive in 1065. William was crowned on Christmas Day 1066, the same year as Hastings." }
          ] },
        { kind: "mcq", q: "What did it mean to lay waste the land around London?", options: ["To burn down and destroy the farms and villages around the city", "To build castles around the city", "To make peace with the people living there", "To collect taxes from the people living there"], answer: 0, why: "Laying waste meant burning and destroying, so that London could see the cost of refusing William.",
          feedback: [
            "",
            "Castles came later and were a way of protecting soldiers, not a way of punishing an area. Laying waste meant burning down and destroying the land around London.",
            "Laying waste is the opposite of making peace. William burned and destroyed the land so that London would submit; the peace with the earls came after they had given in.",
            "Taxes were a long-term problem William had not yet solved. Laying waste meant destroying farms and villages, not collecting money from them."
          ] },
        { kind: "gap", q: "Controlling Dover gave the Normans a safe route back to ___.", answer: "France", options: ["France", "Norway", "Scotland"], why: "Dover is on the coast nearest to France. Holding it meant the Normans could always get home to Normandy.",
          feedback: {
            "Norway": "Norway was where the Viking threat came from, far to the north-east. The Normans came from Normandy in France, and Dover is the port nearest to France.",
            "Scotland": "Scotland is to the north; Dover is on the south-east coast. It mattered because it faced France, where the Normans had come from."
          } }
      ],
      modules: [
        {
          title: "From Hastings to the crown",
          task: {
            kind: "order",
            q: "Put these events of autumn 1066 in the order they happened.",
            items: [
              "William defeats and kills King Harold at the Battle of Hastings (14 October 1066)",
              "William's army lays waste the land around London",
              "The English earls submit and accept William as their new king",
              "William is crowned King William I on Christmas Day 1066"
            ]
          },
          levels: {
            support: {
              steps: [
                "The battle has to come first: everything else follows from Harold's death.",
                "William could not be crowned until the earls accepted him, so the coronation is last.",
                "Did the earls submit before or after William laid waste the land? Think about what made them give in.",
                "Check the dates: 14 October comes before 25 December."
              ],
              example: {
                q: "Put a school day in order: lunch; register; afternoon lessons; home time.",
                steps: ["Register is first; nothing starts before it.", "Lunch comes in the middle of the day.", "Afternoon lessons follow lunch.", "Home time is last."],
                answer: "register; lunch; afternoon lessons; home time"
              }
            },
            core: { hint: "Two events carry dates. Fit the two undated ones between them: cause before effect." },
            stretch: { extend: "Explain why William could not simply have marched to Westminster on 15 October and had himself crowned." }
          },
          explain: "Say, in one sentence, why the earls submitted before the coronation and not after it.",
          why: "Harold died at Hastings on 14 October; William then laid waste the land around London; the earls submitted; and only then, on Christmas Day, could he be crowned."
        },
        {
          title: "Short-term or long-term?",
          task: {
            kind: "mcq",
            q: "William needs to collect taxes, but he knows nothing about England, where people live or how much they have. Is this a short-term or a long-term problem?",
            options: [
              "Long-term: it will take years to find out about the whole country",
              "Short-term: it must be solved in the next few weeks or he will lose the crown",
              "Short-term: it will solve itself as soon as he is crowned",
              "Neither: a king does not need to know about his country to tax it"
            ],
            answer: 0,
            why: "Learning who owns what across a whole country cannot be done in weeks. Your worksheet marks this problem L for long-term, and it took William until the Domesday Book of 1086 to solve it.",
            feedback: [
              "",
              "You have treated it like the London or Dover problem. Those had to be solved in weeks; finding out about every village in England took years. This is long-term.",
              "Being crowned did not tell William anything about where people lived or what they owned. The information still had to be collected, and that took years: long-term.",
              "Without knowing who owned what, William could not tax fairly or know his richest areas. It was a real problem, and a long-term one."
            ]
          },
          contexts: [
            { label: "Loyal lords", q: "Many English lords do not accept William as king, and he must keep every region under control while rewarding his loyal men. Is this a short-term or a long-term problem?", why: "Winning the loyalty of every region took years and a whole new way of sharing out land. Your worksheet marks it L." },
            { label: "Protecting soldiers", q: "Once the country is conquered, Norman soldiers in distant areas may come under attack and will need protecting. Is this a short-term or a long-term problem?", why: "Protecting soldiers across the whole country was an ongoing task for the rest of William's reign; the answer was castles. Your worksheet marks it L." }
          ],
          levels: {
            support: {
              steps: [
                "Ask: could this be solved in a few weeks?",
                "If the problem covers the whole country, it will take years.",
                "If the problem is one place or one army, it is short-term.",
                "Choose the option that says long-term and gives the right reason."
              ],
              example: {
                q: "Is some of Harold's troops are still in London a short-term or a long-term problem?",
                steps: ["It is one place and one group of soldiers.", "It can and must be dealt with at once.", "So it is short-term."],
                answer: "Short-term: one place, must be solved now."
              }
            },
            core: { hint: "Whole country and years go together. One place and weeks go together." },
            stretch: { extend: "Explain why a king who solves only the short-term problems could still lose his throne within a few years." }
          },
          explain: "Say, in one sentence, how you tell a long-term problem from a short-term one.",
          why: "Problems about one place or one army are short-term; problems about the whole country, such as taxes, loyalty and protecting soldiers everywhere, are long-term because they take years to solve."
        },
        {
          title: "Was laying waste a good solution?",
          task: {
            kind: "written",
            q: "William solved the problem of London by laying waste the land around it until the earls submitted. Was this an effective solution? Write one PEE paragraph that gives a judgement.",
            criteria: [
              "I say clearly whether I think it was effective, partly effective or not effective.",
              "I give evidence of what William did and what happened next (the earls submitted; he was crowned).",
              "I explain one way it helped William and one problem it might cause later.",
              "I use the words submit or lay waste correctly."
            ],
            model: "I think laying waste the land around London was partly effective. William burned and destroyed the farms and villages around the city, and as a result the English earls submitted and he was crowned on Christmas Day 1066. This helped William because it solved a short-term problem fast and gave him the richest part of the country. However, it may have caused problems later, because people who submit out of fear are not loyal, and the earls of the North soon rebelled against him."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: I think laying waste the land was [effective / partly effective / not effective].",
                "Sentence 2: William… and as a result the earls…",
                "Sentence 3: This helped William because…",
                "Sentence 4: However, it may have caused problems later because…"
              ],
              example: {
                q: "A teacher stops a noisy class by giving the whole class a detention. Was this effective? Write a PEE judgement.",
                steps: ["Judgement: partly effective.", "Evidence: the class went quiet at once.", "Explain the gain and the cost: it solved the noise now, but pupils who had been quiet felt it was unfair and trusted the teacher less."],
                answer: "Partly effective: it worked at once, but it cost trust later."
              }
            },
            core: { hint: "Effective at what, and for how long? A solution can work now and cost later. Say both." },
            stretch: { extend: "Compare laying waste with the way Dover was solved. Which solution was more likely to last, and why?" }
          },
          explain: "Say, in one sentence, the difference between making people obey and making them loyal.",
          why: "A judgement answer weighs the gain (the earls submitted; the crown by Christmas) against the cost (fear is not loyalty; the North rebelled). Partly effective, with reasons, is a strong Year 7 answer."
        }
      ]
    },

    /* ───────────── 3 · rebellion and terror ───────────── */
    {
      key: "rebellion-and-terror", n: 3, title: "Terror: rebellions and the Harrying of the North, 1067–70",
      lead: "The rebellions William faced in his first years as king, the disaster at Durham, the rising of the North with Danish help, and the terror William used to end it.",
      covers: [3],
      pretext: {
        words: [
          { word: "rebellion", means: "rising up and fighting against the ruler", sentence: "The first rebellion against William was led by Eadric the Wild." },
          { word: "terror", means: "using fear and cruelty to make people obey", sentence: "William used terror to end rebellion in the North." },
          { word: "Northumbria", means: "the great earldom of the North of England", sentence: "William gave Northumbria to his Norman friend Robert de Comines." },
          { word: "Danes", means: "Vikings from Denmark", sentence: "The Danes sailed to England to support the northern rebels." },
          { word: "harrying", means: "attacking an area again and again, destroying everything", sentence: "The harrying left the North without food." },
          { word: "famine", means: "a time when there is not enough food and many people starve", sentence: "Famine followed the burning of the crops." }
        ],
        passage: [
          "William was king, but England was not yet conquered.",
          "In 1067 a lord called Eadric the Wild rose against him.",
          "In 1068 Harold Godwinson's family rebelled in Exeter.",
          "William crushed both revolts with all his military strength.",
          "In 1068 he gave Northumbria to his Norman friend Robert de Comines.",
          "In January 1069 Robert marched into Durham, ignoring warnings.",
          "An army of angry northerners was waiting, and Robert and his men were killed.",
          "Later in 1069 the North rose again, helped by the Danes.",
          "William did not have enough soldiers to control the North all the time.",
          "So in the winter of 1069 to 1070 he used terror.",
          "His men burned crops, herds, tools and food across the North.",
          "This is called the Harrying of the North.",
          "Famine followed, and many thousands of people died."
        ]
      },
      sections: [
        {
          heading: "The first rebellions, 1067–68",
          paragraphs: [
            "After securing London and Dover, William controlled the South. He now had to turn to the rebellious English earls of the North and to anyone else who refused to accept him. The first rebellion William faced was led by Eadric the Wild, from 1067 to 1068. In 1068 the family of Harold Godwinson rebelled in Exeter.",
            "William used all of his military strength to destroy both revolts and end any opposition to his rule. Both were put down. But notice the pattern: each time William's army moved on, somebody else rose up behind it. A country cannot be held by one army marching from place to place.",
            "The deck's Bayeux Tapestry bell work shows Norman soldiers setting fire to an English house. Burning was how a medieval army punished an area, and William had already used it around London. In 1069 he would use it on a far greater scale."
          ],
          tip: "Learn the rebellions as a list with dates: Eadric the Wild 1067–68; Exeter 1068; Northumbria 1069. Three rebellions in three years."
        },
        {
          heading: "Durham, January 1069",
          paragraphs: [
            "In 1068 William gave control of Northumbria to his Norman friend Robert de Comines. In January 1069 Robert arrived in the North with his soldiers. He was warned that an army of angry northerners was gathering against him. He ignored the warnings and marched into Durham, the main city of Northumbria.",
            "The northerners attacked, and Robert and his men were killed in the city. For William this was a serious threat. His own chosen earl had been destroyed, and the North, which had never wanted a southern earl even when Tostig held it, had shown that it would not accept a Norman one either.",
            "Later in 1069 the North rose again, and this time a Danish fleet came to support the rebels. This was exactly the first problem on William's worksheet: an invasion from across the North Sea backed by an English rebellion."
          ],
          tip: "The deck's video covers the fighting in 1069. The key facts to carry are: Robert de Comines, Durham, January 1069, then a rising with Danish help later that year."
        },
        {
          heading: "The Harrying of the North, 1069–70",
          paragraphs: [
            "William did not have enough soldiers to control the North all the time. So in the winter of 1069 to 1070 he chose terror. His army laid waste the whole region north of the River Humber: crops and herds, tools and food of every kind were burned. Villages were destroyed. The aim was that the land could no longer give shelter or food to his enemies, so that rebellion became impossible. This is the Harrying of the North.",
            "The result was famine. With the harvest burned and the animals killed, people starved through the winter. A writer of the time believed that more than one hundred thousand people died of hunger, the innocent along with the guilty. The next chapter looks closely at what that writer and a Norman writer said about it.",
            "Why did William think this was necessary? The North had rebelled repeatedly and had joined with the Danes. He could not station an army there for ever. Destroying the food made another rising impossible for years. Whether that made it right is a different question, and one you will be asked to judge."
          ],
          worked: {
            q: "Explain one reason why William used terror in the North in 1069–70.",
            steps: [
              "Point: One reason William used terror was that he did not have enough soldiers to control the North all the time.",
              "Evidence: the North had rebelled in 1069 with Danish support, after Robert de Comines and his men had been killed at Durham.",
              "Explain: because he could not leave an army there for ever, burning the crops and food meant the rebels could not feed another army.",
              "Finish: so the Harrying was meant to end rebellion for good, not just to win one more battle."
            ],
            answer: "Point, evidence, explain: too few soldiers; repeated rebellion with Danish help; so burning the food made future rebellion impossible."
          }
        },
        {
          heading: "Peace or terror? What the Harrying achieved and cost",
          paragraphs: [
            "In the short term, the Harrying worked. The North could not rise again, the Danes left, and the land was brought under control. Your plenary question from the last chapter, peace or terror, now has part of its answer: in the North, William chose terror.",
            "In the long term the cost was enormous. Thousands of ordinary people who had never rebelled died of hunger. The North stayed poor and empty for many years. And a king who rules by terror has to keep proving he is to be feared, which is one reason the Normans went on to build so many castles.",
            "Historians still disagree about the Harrying. Some say William had no choice if Norman rule was to survive. Others say he went far beyond what was needed. You will meet both views, written by people who lived at the time or soon after, in the next chapter."
          ],
          tip: "When you judge the Harrying, separate two questions: did it work? and was it right? Good answers deal with both."
        }
      ],
      gate: [
        { kind: "mcq", q: "Where was the serious rebellion against William in 1069?", options: ["Northumbria, in the North of England", "Exeter, in the South-West", "London, the capital", "Normandy, in France"], answer: 0, why: "The 1069 rebellion was in Northumbria, after Robert de Comines was killed in Durham; the Danes came to support it.",
          feedback: [
            "",
            "Exeter was the 1068 rebellion by Harold Godwinson's family, and William crushed it. The serious rising of 1069, with Danish help, was in Northumbria.",
            "London had submitted to William in 1066 and was in his hands. The rebellion of 1069 was far to the north, in Northumbria.",
            "Normandy was William's own homeland and did not rebel. The 1069 rising was in Northumbria, in the North of England."
          ] },
        { kind: "gap", q: "In January 1069 Robert de Comines ignored warnings and marched into ___, the main city of Northumbria.", answer: "Durham", options: ["Durham", "York", "Exeter"], why: "Robert de Comines marched into Durham, where he and his men were killed by the northerners.",
          feedback: {
            "York": "York was also an important northern city, but the deck says Robert de Comines marched into Durham, the main city of Northumbria, and was killed there.",
            "Exeter": "Exeter is in the South-West and was where Harold's family rebelled in 1068. Robert de Comines marched into Durham, in the North."
          } },
        { kind: "mcq", q: "What happened during the Harrying of the North?", options: ["William's army burned crops, herds, tools and food across the North so that rebels had nothing to live on", "William gave the northern earls more land to win their loyalty", "William built a single great castle at Durham and left", "The Danes conquered the North and ruled it for William"], answer: 0, why: "Harrying meant destruction: everything that could feed or shelter a rebel army was burned, and famine followed.",
          feedback: [
            "",
            "That is the opposite of what happened. William did not reward the North; he laid it waste, burning crops, animals, tools and food so that it could not rebel again.",
            "Castles came as part of the answer later, but the Harrying itself was not a building programme. It was the burning of the whole region north of the Humber.",
            "The Danes came to support the rebels against William, not to rule for him. William destroyed the North so that neither the rebels nor the Danes could live off it."
          ] }
      ],
      modules: [
        {
          title: "Three years of rebellion",
          task: {
            kind: "order",
            q: "Put these events in the order they happened.",
            items: [
              "Eadric the Wild leads the first rebellion against William (1067)",
              "Harold Godwinson's family rebels in Exeter (1068)",
              "Robert de Comines marches into Durham and is killed with his men (January 1069)",
              "The North rises again with the support of the Danes (1069)",
              "William lays waste the land north of the Humber: the Harrying of the North (1069–70)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Every event carries a year. Put the years in order first: 1067, 1068, 1069, 1069, 1069–70.",
                "Two events are in 1069. Which happened in January, and which later in the year?",
                "The Harrying was William's answer to the rising, so it comes after it.",
                "Read your list from top to bottom and check it tells a story: rebellion, rebellion, disaster, rising, terror."
              ],
              example: {
                q: "Put in order: the Battle of Hastings (October 1066); Edward the Confessor dies (January 1066); William is crowned (December 1066).",
                steps: ["January comes first in the year.", "October is next.", "December is last."],
                answer: "Edward dies; Hastings; William crowned"
              }
            },
            core: { hint: "Years first; then, inside 1069, January before the rest of the year; the Harrying is the response, so it is last." },
            stretch: { extend: "Explain how the death of Robert de Comines in January led directly to the Harrying by the end of the year." }
          },
          explain: "Say, in one sentence, why the Harrying has to come after the rising of 1069 in your list.",
          why: "Eadric the Wild rose in 1067; Exeter followed in 1068; Robert de Comines was killed at Durham in January 1069; the North rose with Danish help later in 1069; and William answered with the Harrying in the winter of 1069–70."
        },
        {
          title: "Why 1069 was so dangerous",
          task: {
            kind: "written",
            q: "Explain why the rebellion of 1069 was a more serious threat to William than the rebellions of 1067 and 1068. Write one paragraph of four to six sentences.",
            criteria: [
              "I name the earlier rebellions (Eadric the Wild; Exeter) and say William crushed them.",
              "I explain what was different in 1069: Robert de Comines killed at Durham; the Danes supporting the rising.",
              "I link this to William's worksheet problem of invasion from Norway or Denmark backed by English rebels.",
              "I use the word because at least once."
            ],
            model: "The rebellions of 1067 and 1068, led by Eadric the Wild and by Harold's family in Exeter, were serious, but William crushed both with his army. The rebellion of 1069 was more dangerous because it began with the killing of William's own earl, Robert de Comines, and his men in Durham. Then the Danes sailed to support the rebels, so William faced an invasion from across the sea joined with an English rising, which was the first problem on his list after Hastings. Because he did not have enough soldiers to hold the North all the time, he could not simply crush it and move on as he had done before."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: The rebellions of 1067 and 1068 were led by… and William…",
                "Sentence 2: In 1069 something worse happened in Durham: …",
                "Sentence 3: Then the Danes… so William faced…",
                "Sentence 4: This was more serious because…"
              ],
              example: {
                q: "Explain why a fire in a school kitchen is more serious when the fire brigade is on strike than on a normal day.",
                steps: ["Say what is the same: a kitchen fire is always serious.", "Say what is different: no fire brigade can come.", "Explain: because the usual answer is not available, a small fire can spread."],
                answer: "Same danger, but the usual solution is missing, so the threat grows."
              }
            },
            core: { hint: "Two things were new in 1069: a Norman earl killed, and foreign help for the rebels. Build your paragraph around those two." },
            stretch: { extend: "Argue the other side: why might a historian say the Exeter rebellion of 1068 was just as dangerous, because it involved Harold's own family?" }
          },
          explain: "Say, in one sentence, what made the 1069 rising different from the earlier ones.",
          why: "The earlier rebellions were local and were crushed. In 1069 William's own earl was killed, the whole North rose, and the Danes came to help, so a rebellion became an invasion."
        },
        {
          title: "Why terror, not battle?",
          task: {
            kind: "mcq",
            q: "Why did William lay waste the North instead of simply defeating the rebels in battle and moving on?",
            options: [
              "He did not have enough soldiers to control the North all the time, so he destroyed the food that any future rebellion would need",
              "He wanted to farm the land himself and needed it cleared",
              "The rebels had already surrendered and he wanted to reward them",
              "He had run out of soldiers and could not fight at all"
            ],
            answer: 0,
            why: "William could not station an army in the North for ever. Burning crops, animals and food meant the region could not shelter or feed rebels or Danes for years.",
            feedback: [
              "",
              "William did not want the land for farming; he wanted it unable to feed an enemy. The point of the Harrying was that rebels and Danes could not live off the North.",
              "The rebels had not surrendered, and the Harrying was a punishment, not a reward. William chose terror because he could not keep an army in the North all the time.",
              "William had enough soldiers to fight; what he lacked was enough to stay. Terror was his way of controlling a region he could not garrison for ever."
            ]
          },
          levels: {
            support: {
              steps: [
                "Think about what happened after each earlier rebellion was crushed: another one started.",
                "Ask what an army needs to keep fighting: food and shelter.",
                "If the food is gone, can a rebellion start again next year?",
                "Choose the option that explains both the problem (too few soldiers) and the aim (no food for rebels)."
              ],
              example: {
                q: "A farmer cannot stand guard over her orchard every night, so she cuts down the branches that hang over the fence. Why?",
                steps: ["She cannot be there all the time.", "Removing what the thieves can reach solves the problem without her being there."],
                answer: "Because she cannot guard it all the time, she removes what makes the theft possible."
              }
            },
            core: { hint: "The key phrase in the chapter is not enough soldiers to control the North all the time. Which option follows from it?" },
            stretch: { extend: "Suggest one other way William might have tried to control the North without terror, and explain why he might have rejected it." }
          },
          explain: "Say, in one sentence, how destroying food could stop a rebellion that had not yet started.",
          why: "William's problem was holding the North after his army left. Destroying everything an enemy could eat or shelter in meant rebellion was impossible for years, without a Norman army having to stay."
        }
      ]
    },
    /* ───────────── 4 · two chroniclers ───────────── */
    {
      key: "two-chroniclers", n: 4, title: "Two writers, one event: interpretations of the Harrying",
      lead: "What a Norman supporter and a later monk each wrote about the Harrying of the North, why they disagree, and how to write about an interpretation using the five success criteria.",
      covers: [3],
      pretext: {
        words: [
          { word: "chronicler", means: "a writer who recorded events at the time or soon after", sentence: "Orderic Vitalis was a chronicler who wrote about the Harrying." },
          { word: "interpretation", means: "one writer's view of what happened and why", sentence: "The two writers give different interpretations of the Harrying." },
          { word: "evidence", means: "words or facts you use to back up a point", sentence: "Give evidence from the interpretation by quoting a short phrase." },
          { word: "opinion", means: "what someone thinks about something", sentence: "The first step is to state the writer's opinion." },
          { word: "treachery", means: "betraying your ruler or breaking a promise of loyalty", sentence: "William of Poitiers called the northern rebellions treachery." },
          { word: "own knowledge", means: "facts you already know that are not in the source", sentence: "Use your own knowledge of the rebellions of 1067 to 1069." }
        ],
        passage: [
          "Two writers described the Harrying of the North.",
          "William of Poitiers was a Norman who supported the king.",
          "He wrote that the Northumbrians had often rebelled and joined with the Danes.",
          "He said William laid waste the land to stop it sheltering his enemies.",
          "For him, the Harrying brought peace and control.",
          "Orderic Vitalis wrote about fifty years later.",
          "He said crops, herds, tools and food were burned to ashes.",
          "He wrote of a cruel hunger that hit the innocent and the guilty alike.",
          "He believed more than one hundred thousand people died.",
          "He could not praise what William did.",
          "Two writers, one event, two different views.",
          "Historians call these different views interpretations.",
          "Your job is to say what each writer thinks, give evidence, and then decide."
        ]
      },
      sections: [
        {
          heading: "Who were the two writers?",
          paragraphs: [
            "William of Poitiers was a Norman who supported King William and wrote in the 1070s, within a few years of the Harrying. He wrote to praise the king, and he explains the Harrying as something William had to do. Orderic Vitalis was a monk who wrote in the 1120s, about fifty years after the events. He had grown up in England, and he writes with sorrow about what happened to ordinary people.",
            "Your lesson calls both men historians and calls their writing interpretations, because each gives his own view of what happened and why. Both also lived close to the time, so historians today treat them as sources as well: evidence from the period, written by people with their own reasons for writing.",
            "That double nature is the point. When you read either passage, ask two questions at once: what does this writer think happened and why? And who was he, and why might he see it that way?"
          ],
          tip: "Poitiers: Norman, writing for William, 1070s. Orderic: monk, writing later, 1120s. Learn the pair and you can explain the disagreement."
        },
        {
          heading: "What William of Poitiers said",
          paragraphs: [
            "Poitiers begins with the rebels. The Northumbrians, he says, had often rebelled and had joined themselves with the Danes. In his view the king therefore decided to put an end to their treachery, their betrayal of their rightful ruler. He writes that William “laid waste the land so that it might no longer give shelter or food to his enemies”.",
            "Then comes his judgement: by this means, he says, peace was secured for the future and the land was brought under control. For Poitiers the Harrying had a clear military purpose and a good result. He does not mention famine or the deaths of ordinary people at all.",
            "Notice what the writer's position does to the writing. A Norman writing in William's lifetime, for a Norman audience, chooses to describe the rebels' treachery and the peace that followed. That is not lying; it is selecting. Spotting what a writer leaves out is part of reading an interpretation."
          ],
          tip: "To quote evidence, pick a short phrase of no more than a line and put it in quotation marks. Then say what it shows."
        },
        {
          heading: "What Orderic Vitalis said",
          paragraphs: [
            "Orderic describes the destruction itself. The king, he says, stopped at nothing to punish his enemies. He “ordered that crops and herds, tools and food of every kind should be burned to ashes”, and in this way the whole region north of the River Humber was laid waste.",
            "Then he turns to the people. He writes of a “cruel hunger which afflicted the innocent and the guilty alike”, and says that more than one hundred thousand people died of it, in his belief. His last words are a judgement: he cannot commend, meaning praise, this act.",
            "Orderic does not say the rebels were innocent, and he does not deny that William had enemies in the North. His point is about proportion: the punishment fell on everyone, guilty or not, and the suffering was too great to approve of. That is a different interpretation from Poitiers, built from the same event."
          ],
          quote: {
            text: "More than one hundred thousand people perished, I believe, from hunger. I cannot commend this act.",
            source: "Orderic Vitalis, writing in the 1120s, as printed in your lesson"
          },
          tip: "Orderic says I believe about his number. He is telling you it is an estimate, not a count. Say so when you use it."
        },
        {
          heading: "How to write about an interpretation: five steps",
          paragraphs: [
            "Your lesson gives five success criteria. SC1: state the writer's opinion. SC2: give evidence from the interpretation, a short quotation. SC3: say whether you agree or disagree. SC4: give examples from your own knowledge. SC5: explain why William did this, or whether he had to.",
            "The order matters. Opinion first, so the reader knows what you are discussing; evidence second, so they can see you read the passage; your view third; your own facts fourth, because your view needs support; and the explanation last, because it ties the writer's view and your knowledge together.",
            "Own knowledge for this topic means the events of chapter 3: the rebellions of 1067 and 1068, Robert de Comines killed at Durham in January 1069, the Danes arriving later in 1069, and William's shortage of soldiers. Use at least one of these."
          ],
          worked: {
            q: "Apply the five steps to William of Poitiers, in a sentence each, without copying the class example.",
            steps: [
              "SC1 opinion: Poitiers thinks the Harrying was a necessary answer to repeated treachery.",
              "SC2 evidence: he writes that William “laid waste the land so that it might no longer give shelter or food to his enemies”, which shows he saw it as a military plan, not revenge.",
              "SC3 view: I partly agree, because the aim he describes is real, but he leaves out the famine.",
              "SC4 own knowledge: the North had risen in 1069 after Robert de Comines was killed at Durham, and the Danes had come to help.",
              "SC5 explain: William could not keep an army in the North all the time, so he destroyed what a future rebellion would need; whether that was right is where Orderic disagrees."
            ],
            answer: "Five sentences, one per success criterion, ending with the explanation and a nod to the opposite view."
          }
        }
      ],
      gate: [
        { kind: "mcq", q: "Which writer supported King William and explained the Harrying as necessary?", options: ["William of Poitiers", "Orderic Vitalis", "Harold Godwinson", "Robert de Comines"], answer: 0, why: "William of Poitiers was a Norman supporter of the king who wrote that the Harrying secured peace and control.",
          feedback: [
            "",
            "Orderic Vitalis is the writer who described the cruel hunger and said he could not commend the act. The Norman supporter who defended William was William of Poitiers.",
            "Harold Godwinson died at Hastings in 1066, three years before the Harrying, and wrote nothing about it. The Norman supporter was William of Poitiers.",
            "Robert de Comines was the Norman earl killed at Durham in January 1069. He was not a writer. The Norman supporter who wrote about the Harrying was William of Poitiers."
          ] },
        { kind: "mcq", q: "How many people did Orderic Vitalis believe died of hunger after the Harrying?", options: ["More than one hundred thousand", "About five hundred", "About ten thousand", "He gives no number"], answer: 0, why: "Orderic wrote that more than one hundred thousand people perished from hunger, adding I believe to show it was his estimate.",
          feedback: [
            "",
            "Five hundred is the number of castles the Normans built, from the castles lesson. Orderic's figure for the dead was far larger: more than one hundred thousand.",
            "Ten thousand is roughly the number of Normans who settled in England. Orderic believed more than one hundred thousand people died of hunger.",
            "He does give a number, and he marks it as his own estimate with the words I believe: more than one hundred thousand."
          ] },
        { kind: "gap", q: "Orderic says the whole region north of the River ___ was laid waste.", answer: "Humber", options: ["Humber", "Thames", "Severn"], why: "The Humber is the river that marks the southern edge of the North of England; Orderic says everything north of it was laid waste.",
          feedback: {
            "Thames": "The Thames runs through London in the South. The Harrying was in the North, and Orderic names the River Humber as its southern edge.",
            "Severn": "The Severn is in the West, along the Welsh border. Orderic says the region north of the River Humber was laid waste."
          } }
      ],
      modules: [
        {
          title: "Whose words, and what they show",
          task: {
            kind: "match",
            q: "Match each phrase to the writer and what it shows.",
            pairs: [
              ["“laid waste the land so that it might no longer give shelter or food to his enemies”", "Poitiers: the destruction had a military purpose"],
              ["“peace was secured for the future”", "Poitiers: the Harrying had a good result"],
              ["“burned to ashes”", "Orderic: the scale of the destruction"],
              ["“the innocent and the guilty alike”", "Orderic: ordinary people suffered whether or not they had rebelled"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Poitiers defends William, so his phrases are about enemies, purpose and peace.",
                "Orderic is sorrowful, so his phrases are about destruction and suffering.",
                "Sort the four phrases into defending and sorrowful first.",
                "Then match each to what it shows: purpose, result, scale, who suffered."
              ],
              example: {
                q: "Two match reports on the same game. Match the phrase to the writer: a brave defensive display (the winning team's programme); ninety minutes of time-wasting (the losing team's fan site).",
                steps: ["The winners' writer chooses flattering words.", "The losers' writer chooses critical words for the same tactics."],
                answer: "Brave defensive display: the winners' programme. Time-wasting: the losers' fan site."
              }
            },
            core: { hint: "Enemies and peace belong to the Norman supporter. Ashes and the innocent belong to the monk." },
            stretch: { extend: "Both writers use the words laid waste. Explain how the same two words can carry approval in one passage and horror in the other." }
          },
          explain: "Say, in one sentence, how you can tell a defending phrase from a sorrowful one.",
          why: "Poitiers' phrases give the Harrying a purpose (denying shelter and food to enemies) and a result (peace). Orderic's phrases give its scale (burned to ashes) and its victims (the innocent and the guilty alike)."
        },
        {
          title: "Analyse Orderic: the five steps",
          task: {
            kind: "written",
            q: "Using Orderic Vitalis and your own knowledge, explain his interpretation of the Harrying of the North and say how far you agree with it. Follow the five success criteria.",
            criteria: [
              "SC1: I state Orderic's opinion of the Harrying in my first sentence.",
              "SC2: I quote one short phrase from Orderic as evidence and say what it shows.",
              "SC3: I say whether I agree or disagree with him, and how far.",
              "SC4: I give at least one fact from my own knowledge (the rebellions, Durham, the Danes, William's shortage of soldiers).",
              "SC5: I explain why William did this, and whether I think he had to."
            ],
            model: "Orderic Vitalis believes the Harrying of the North was cruel and that William went far beyond what was needed. He writes that the hunger afflicted “the innocent and the guilty alike”, which shows that ordinary people who had never rebelled starved along with the rebels. I agree with Orderic for the most part, because a punishment that kills people who had done nothing wrong cannot be fully justified. From my own knowledge, I know the North had rebelled in 1069 after Robert de Comines was killed at Durham, and that the Danes had arrived to help, so William faced a real danger. He laid waste the North because he did not have enough soldiers to hold it all the time, but Orderic shows that the cost of that choice fell on everyone, and I think a smaller punishment could have ended the rebellion without a famine."
          },
          levels: {
            support: {
              steps: [
                "SC1: Orderic Vitalis believes that the Harrying was…",
                "SC2: He writes that “…”, which shows that…",
                "SC3: I agree / disagree with Orderic because…",
                "SC4: From my own knowledge, I know that in 1069…",
                "SC5: William did this because… However / Therefore…"
              ],
              example: {
                q: "Apply the five steps to a school report that says a pupil talks too much in lessons.",
                steps: ["Opinion: the teacher thinks the pupil disrupts lessons.", "Evidence: quote the phrase talks too much.", "View: I partly agree.", "Own knowledge: the pupil was quiet in science all term.", "Explain: the teacher only sees one subject, so the report is true for that room but not for every room."],
                answer: "Five sentences: opinion, quote, view, own knowledge, explanation."
              }
            },
            core: { hint: "One sentence per success criterion, in order. Your quotation should be short and inside quotation marks." },
            stretch: { extend: "Add a sixth sentence that uses William of Poitiers to show the other side, then say which writer you find more convincing and why." }
          },
          explain: "Say, in one sentence, why your own knowledge belongs after your opinion and not before it.",
          why: "The five criteria build an argument in order: what the writer thinks, the words that prove it, your view, the facts that support your view, and finally the explanation of William's choice. A strong answer keeps to one sentence per step."
        },
        {
          title: "Why do they disagree?",
          task: {
            kind: "mcq",
            q: "Why do William of Poitiers and Orderic Vitalis give such different interpretations of the same event?",
            options: [
              "Poitiers was a Norman writing to support William in his lifetime; Orderic was a monk writing later who cared about the suffering of ordinary people",
              "One of them was lying about what happened",
              "They were describing two different events in two different years",
              "Orderic had never heard of the rebellions in the North"
            ],
            answer: 0,
            why: "Each writer's position shaped what he chose to describe: Poitiers the rebels' treachery and the peace that followed, Orderic the destruction and the hunger.",
            feedback: [
              "",
              "Neither needs to be lying. Both describe the land being laid waste. They differ in what they choose to include and how they judge it, and that comes from who they were and when they wrote.",
              "They describe the same event: the laying waste of the North in 1069–70. Orderic even names the region north of the Humber. The difference is in their viewpoint, not the event.",
              "Orderic knew about the rebellions; he does not say the North was innocent. His point is that the punishment fell on the innocent as well as the guilty."
            ]
          },
          levels: {
            support: {
              steps: [
                "Who was each writer, and when did he write? Find the two sentences in the first section.",
                "Who was Poitiers writing for? What would that audience want to hear?",
                "What did Orderic care about that Poitiers never mentions?",
                "Choose the option that explains the difference through the writers, not through the event."
              ],
              example: {
                q: "Why might a shop's advert and a customer's review describe the same jacket differently?",
                steps: ["The shop wants to sell the jacket, so it praises it.", "The customer has worn it and reports how it felt.", "Same jacket; different purpose and experience."],
                answer: "Because the writers have different purposes and positions, not because the jacket changed."
              }
            },
            core: { hint: "Position and purpose: a Norman writing for the king, and a monk writing later about the people who starved." },
            stretch: { extend: "Does writing fifty years later make Orderic more reliable, less reliable, or both? Give one reason each way." }
          },
          explain: "Say, in one sentence, how a writer's position can change an interpretation without anyone lying.",
          why: "Both men saw the same facts. Poitiers, a Norman supporter, chose the rebels' treachery and the peace that followed; Orderic, a monk writing later, chose the destruction and the hunger of the innocent. Position and purpose shaped the interpretation."
        }
      ]
    },

    /* ───────────── 5 · land and Domesday ───────────── */
    {
      key: "land-and-domesday", n: 5, title: "How William used land for control: the Feudal System and the Domesday Book",
      lead: "Why William changed who owned England, how the Feudal System tied every level of society to the king, what it cost him, and how the Domesday Book told him what his kingdom was worth.",
      covers: [4],
      pretext: {
        words: [
          { word: "Feudal System", means: "William's way of sharing out land in return for loyalty and service", sentence: "Under the Feudal System everyone held land from someone above them." },
          { word: "homage", means: "kneeling before the king and promising to be loyal", sentence: "A Norman lord paid homage to King William before he received his land." },
          { word: "tenant-in-chief", means: "a baron or bishop who held land directly from the king", sentence: "There were about 200 tenants-in-chief." },
          { word: "villein", means: "a peasant who paid for land with work, food and services", sentence: "A villein worked the land for his knight." },
          { word: "Domesday Book", means: "the record of William's great survey of England", sentence: "The Domesday Book listed who owned what in about 13,000 villages." },
          { word: "commissioners", means: "the officials William sent to ask questions in every village", sentence: "The commissioners asked how much land each man held." }
        ],
        passage: [
          "William could not be everywhere at once.",
          "He did not trust the English earls, so he took their land.",
          "He also had to reward the Normans who had fought for him.",
          "So he changed who owned the land in England.",
          "This is called the Feudal System.",
          "The king owned all the land.",
          "He granted land to about 200 barons and bishops, called tenants-in-chief.",
          "They promised loyalty and sent him knights for 40 days a year.",
          "The tenants-in-chief granted land to about 4,000 knights.",
          "The knights granted land to the villeins, the peasants.",
          "The villeins paid with work, food and services.",
          "In 1085 William ordered a great survey of England.",
          "Commissioners visited about 13,000 villages and asked who owned what.",
          "The answers were written down in the Domesday Book in 1086."
        ]
      },
      sections: [
        {
          heading: "Why change who owned the land?",
          paragraphs: [
            "William had three reasons. First, he did not trust the Saxon earls who ruled the land; they would have to be removed. Second, he needed to reward the men who had helped him win at Hastings and had been loyal since. They had risked their lives, and he would not have been king without them. Third, he knew he could not be everywhere at once and needed a system he could trust to rule all England for him.",
            "So William decided to change, drastically, the way land was shared out across England. The result was the Feudal System. The name comes from the Latin word feudum, which your lesson explains as giving land in return for services. Land was the reward, and loyalty and service were the price.",
            "Think back to your starter: how does a headteacher keep control of a school? Not alone. Heads of year, teachers and form tutors each take charge of a part, and each answers to the person above. William's system worked the same way, with land instead of a salary."
          ],
          tip: "Three reasons: trust, reward, and he could not be everywhere. Your lesson's sentence starter is William introduced the Feudal System because…"
        },
        {
          heading: "The pyramid of land and loyalty",
          paragraphs: [
            "At the top, the king owned all the land. He granted some of it to around 200 barons and bishops, called tenants-in-chief. In return they paid homage, kneeling before him and promising loyalty, and they had to send him knights for 40 days a year. The picture in your lesson of a Norman lord kneeling before William shows homage.",
            "The tenants-in-chief granted land to their knights, around 4,000 of them. The knights paid for their land by doing military service and giving loyalty. The knights in turn granted land to the villeins, the peasants, who paid for it in work, food and services. There were about 1.5 million villeins.",
            "Every level owed something to the level above and received land from it. That is why the system helped William. It gave him an army whenever he needed one, without paying wages. It let him collect tax, because every piece of land had a holder who owed him. And it bound the most powerful men in England to him by a personal promise."
          ],
          worked: {
            q: "Why did the Feudal System make ruling England easier for William? Use the hints army, tax and loyalty.",
            steps: [
              "Army: the tenants-in-chief owed him knights for 40 days a year, so he had soldiers without paying them.",
              "Tax: every piece of land had a holder who owed the king, so he knew whom to ask for money.",
              "Loyalty: each tenant-in-chief had paid homage, a personal promise, and could lose his land for breaking it.",
              "Write it with the starter: The Feudal System helped William control England by… Also, it allowed him to…"
            ],
            answer: "The Feudal System helped William control England by giving him an army of knights owed by his barons. Also, it allowed him to tax the land and to hold every lord to a promise of loyalty."
          },
          tip: "Learn the four levels with their numbers: king; about 200 tenants-in-chief; about 4,000 knights; about 1.5 million villeins."
        },
        {
          heading: "Were there disadvantages?",
          paragraphs: [
            "Your lesson's challenge asks whether the system had drawbacks for William. It did. A baron who held a great deal of land and commanded many knights could become powerful enough to challenge the king, as the Godwinsons had challenged Edward. William relied on the loyalty of men who were also his rivals.",
            "Loyalty bought with land lasts as long as the land does. A lord who felt he had been given too little, or who saw a chance of more from someone else, might break his promise. And the villeins at the bottom gained least and owed most, so the system rested on people who had every reason to resent it.",
            "Your lesson's sentence starters are: One disadvantage of the Feudal System was… This was a disadvantage for William because… Use them, and say which disadvantage you think mattered most."
          ],
          tip: "Evaluation means both sides. The deck's most and some objectives want reasons the system worked and reasons it might not."
        },
        {
          heading: "The Domesday Book",
          paragraphs: [
            "The Feudal System told William who held land from whom. It did not tell him what the land was worth. Remember problem four on his worksheet: taxes had to be collected, but William knew nothing about England, where people lived or how much they had. In 1085 he announced a plan to find out.",
            "He sent out commissioners, officials who travelled to every part of England, to ask questions in every village: who held the land, how much it was worth, how many people and animals there were. To check that people were not lying, a second group of commissioners visited later and asked the same questions again. The survey took only about a year and covered about 13,000 villages. The results were written down in 1086 in what became known as the Domesday Book.",
            "Was it a success? William now knew the population and resources of nearly every town and village. He knew whom to tax and how much, and he knew which areas were most valuable. Knowing is a kind of control: nobody could hide land or wealth from a king who had it written in a book."
          ],
          tip: "Domesday is the old spelling of doomsday, the day of judgement. People called it that because, like the final judgement, there was no arguing with what it said. Spell it Domesday."
        }
      ],
      gate: [
        { kind: "numeric", q: "The Battle of Hastings was in 1066 and the Domesday Book was completed in 1086. How many years apart are they?", answer: 20, check: "1086-1066", tolerance: 0, units: "years", why: "1086 − 1066 = 20. It took William twenty years to find out what his kingdom was worth.",
          misconceptions: [
            { answer: 21, check: "1086-1066+1", says: "You have counted both end years. From 1066 to 1086 is a gap of twenty years, the same as from age 6 to age 26. Subtract: 1086 − 1066 = 20." },
            { answer: 19, check: "1085-1066", says: "You have used 1085, the year the survey was announced. The question asks about 1086, when the Domesday Book was completed: 1086 − 1066 = 20." }
          ] },
        { kind: "mcq", q: "What did the tenants-in-chief have to give the king in return for their land?", options: ["Loyalty, and knights for 40 days a year", "Work in his fields and a share of their food", "Nothing: the land was a gift", "A castle each year"], answer: 0, why: "The barons and bishops paid homage and had to send knights to serve the king for 40 days a year.",
          feedback: [
            "",
            "Work, food and services were what the villeins paid, at the bottom of the pyramid. The tenants-in-chief at the top owed loyalty and knights for 40 days a year.",
            "Nothing in the Feudal System was free. The tenants-in-chief paid homage and owed the king knights for 40 days a year; that was the whole point of granting them land.",
            "Barons did build castles, but that is not what they owed for their land. The price of land was loyalty and knight service for 40 days a year."
          ] },
        { kind: "gap", q: "The peasants at the bottom of the Feudal System were called ___.", answer: "villeins", options: ["villeins", "knights", "barons"], why: "Villeins were the peasants who held land from the knights and paid for it in work, food and services.",
          feedback: {
            "knights": "Knights were the third level, who held land from the tenants-in-chief and did military service. The peasants below them were the villeins.",
            "barons": "Barons were tenants-in-chief at the top of the pyramid, just below the king. The peasants at the bottom were the villeins."
          } }
      ],
      modules: [
        {
          title: "Build the pyramid",
          task: {
            kind: "order",
            q: "Put the levels of the Feudal System in order from the top (most powerful) to the bottom.",
            items: [
              "The king, who owned all the land",
              "Tenants-in-chief: about 200 barons and bishops, who owed the king knights for 40 days a year",
              "Knights: about 4,000, who owed military service to their lords",
              "Villeins: about 1.5 million peasants, who paid for land with work, food and services"
            ]
          },
          levels: {
            support: {
              steps: [
                "The person who owns all the land must be at the top.",
                "Look at the numbers: the smaller the group, the higher it sits.",
                "Who grants land to whom? The giver is always above the receiver.",
                "The group that pays with work and food is the bottom."
              ],
              example: {
                q: "Put a school in order from the top: form tutor; headteacher; head of year; pupils.",
                steps: ["The headteacher is in charge of everyone.", "Heads of year answer to the head.", "Form tutors answer to heads of year.", "Pupils are the largest group and the bottom."],
                answer: "headteacher; head of year; form tutor; pupils"
              }
            },
            core: { hint: "200, 4,000, 1.5 million: the numbers get bigger as you go down." },
            stretch: { extend: "Compare this pyramid with the Anglo-Saxon one from chapter 1. What has changed, and what has stayed the same?" }
          },
          explain: "Say, in one sentence, why the numbers grow as you move down the pyramid.",
          why: "The king owned everything; about 200 tenants-in-chief held land from him; about 4,000 knights held land from them; and about 1.5 million villeins worked the land at the bottom."
        },
        {
          title: "Which worked better?",
          task: {
            kind: "written",
            q: "Which was more effective at controlling the people of England: the Feudal System or the Domesday Book? Write one PEE paragraph.",
            criteria: [
              "Point: I say which method I think was more effective.",
              "Evidence: I describe how that method worked, with at least one number from the chapter.",
              "Explain: I say how it helped William control England, using because.",
              "I mention the other method and give one reason it was less effective."
            ],
            model: "I think the Feudal System was more effective at controlling people. The Feudal System helped William control England by giving land to about 200 tenants-in-chief who paid homage and owed him knights for 40 days a year, with about 4,000 knights and 1.5 million villeins below them. This helped William control because every person in England now held land from someone who answered to him, so loyalty and an army were built into daily life. The Domesday Book was useful because it told him what the land was worth for tax, but a book cannot stop a rebellion, whereas the Feudal System gave him the knights to do so."
          },
          levels: {
            support: {
              steps: [
                "Point: I think the [Feudal System / Domesday Book] was the most effective at controlling people.",
                "Evidence: The [Feudal System / Domesday Book] helped William control England by…",
                "Explain: This helped William control because…",
                "Other side: The [other method] was less effective because…"
              ],
              example: {
                q: "Which is more effective at keeping a classroom calm: a seating plan or a register? Write a PEE paragraph.",
                steps: ["Point: the seating plan.", "Evidence: it decides who sits where, every lesson.", "Explain: because it separates the pupils who distract each other.", "Other side: the register tells the teacher who is present, but it does not change behaviour."],
                answer: "Seating plan: it changes behaviour every lesson; the register only records who is there."
              }
            },
            core: { hint: "Use your lesson's three starters: Point, Evidence, Explain. Then add one sentence on the other method." },
            stretch: { extend: "Argue that the two methods worked together: the Feudal System gave William the people, the Domesday Book gave him the information. Which is useless without the other?" }
          },
          explain: "Say, in one sentence, which number from the chapter you used and why it supports your point.",
          why: "Either answer can be strong. The Feudal System gave William loyalty and an army; the Domesday Book gave him knowledge for tax. A good paragraph picks one, proves it with a number, and gives the other method a fair sentence."
        },
        {
          title: "Why William needed the book",
          task: {
            kind: "mcq",
            q: "Why did William need the Domesday Book?",
            options: [
              "He knew nothing about England, so he needed to know who owned what in order to collect taxes fairly and know his most valuable areas",
              "He wanted a list of everyone who had fought against him at Hastings",
              "He needed to record the names of all 500 castles",
              "The Witan ordered him to write it"
            ],
            answer: 0,
            why: "Problem four on William's worksheet was that he could not tax a country he knew nothing about. The survey of 1085–86 gave him that knowledge.",
            feedback: [
              "",
              "The Domesday Book was not about the battle. It recorded land, people and animals in every village so that William knew what his kingdom was worth and whom to tax.",
              "Castles are the next chapter, and the book did not list them. It recorded who held land and what it was worth, so that taxes could be collected.",
              "The Witan was the Anglo-Saxon council and had no power over William. He ordered the survey himself, in 1085, because he needed to know what England was worth."
            ]
          },
          levels: {
            support: {
              steps: [
                "Go back to the six problems in chapter 2. Which one was about taxes and knowledge?",
                "Ask: what would a king need to know before he could tax a village?",
                "Which option is about knowing the land and its value?",
                "Reject the options about battles, castles or the Witan."
              ],
              example: {
                q: "Why does a new headteacher ask for a list of every class, its size and its room? Pick the best answer: to plan the timetable and staffing; to find out who was late last year.",
                steps: ["A new leader needs to know what they are in charge of.", "Class sizes and rooms are for planning, not punishment."],
                answer: "To plan the timetable and staffing."
              }
            },
            core: { hint: "Knowledge for taxation. Which option says that in other words?" },
            stretch: { extend: "The lesson's challenge asks whether knowing the population and resources of every town gave William more control. Argue yes, with one example of how he could use the information." }
          },
          explain: "Say, in one sentence, how knowing what every village was worth gave William more control.",
          why: "William could not tax or govern a country he did not know. The commissioners' questions, checked by a second visit, gave him the facts: who held the land, what it was worth, where the wealth was."
        }
      ]
    },

    /* ───────────── 6 · castles ───────────── */
    {
      key: "castles", n: 6, title: "Why did the Normans build so many castles?",
      lead: "How a few thousand Normans used castles to hold a country of nearly two million, the parts of a motte and bailey castle, why wood came before stone, and what the map of castles tells us about William's control.",
      covers: [5],
      pretext: {
        words: [
          { word: "motte", means: "the mound of earth a castle stood on", sentence: "The motte was about 15 metres high." },
          { word: "bailey", means: "the fenced yard where the Normans lived and worked", sentence: "The bailey held stables and a blacksmith's forge." },
          { word: "keep", means: "the strong building on top of the motte", sentence: "The baron lived safely in the keep." },
          { word: "palisade", means: "a wooden fence around the bailey", sentence: "A palisade wall protected the bailey." },
          { word: "moat", means: "a ditch around a castle, sometimes filled with water", sentence: "The moat made the castle harder to attack." },
          { word: "outnumbered", means: "having far fewer people than the other side", sentence: "The Normans were heavily outnumbered by the English." }
        ],
        passage: [
          "Only about 8,000 to 10,000 Normans settled in England with William.",
          "The English population was about 1.5 to 2 million.",
          "The Normans were heavily outnumbered.",
          "So wherever William's army went, it built castles.",
          "These were motte and bailey castles.",
          "The motte was a mound of earth about 15 metres high.",
          "On top stood the keep, where the baron lived.",
          "The bailey below was where the Normans lived and worked.",
          "A wooden palisade fence and a moat protected it.",
          "The first castles were wooden, so they were quick to build but could burn.",
          "Later they were rebuilt in stone.",
          "Castles were built where people had rebelled, and by key roads, rivers and ports.",
          "They were a symbol of Norman strength.",
          "In 21 years William's Normans built over 500 castles, about one every two weeks."
        ]
      },
      sections: [
        {
          heading: "Outnumbered: why castles were needed",
          paragraphs: [
            "Once William was crowned, he set about enforcing his control over the whole country. But he was hugely outnumbered. Only around 8,000 to 10,000 Normans settled in England with him, while the population of England in 1066 was around 1.5 to 2 million. Chapter 1 told you that Anglo-Saxon England had almost no castles. The Normans changed that.",
            "Wherever William's army went, it built castles, and barons were put in charge of them to make sure the Normans controlled key roads, ports, rivers and towns. Castles were normally built in areas that had rebelled or resisted. If a town rose up, the Normans built a castle to watch over it. The castle was a symbol of Norman strength and a visual reminder that rebellion was futile, meaning pointless.",
            "Castles worked both ways. They enforced William's rule on the people, and they protected the Norman soldiers from the unhappy English around them. Your lesson puts it in one line: castles meant that 10,000 Norman soldiers could control 500,000 Anglo-Saxon people."
          ],
          tip: "Two jobs for every castle: control the English outside, protect the Normans inside. Say both in any explanation."
        },
        {
          heading: "The parts of a motte and bailey castle",
          paragraphs: [
            "The Normans built a motte, a simple mound or hill about 15 metres high. On top of the motte stood the keep, a building in which the baron could live safely. Below was the bailey, a cleared space with a good view of the surrounding area, where the Normans lived and worked; it held buildings such as a blacksmith's forge and stables.",
            "The keep and the bailey were joined by a bridge. The bailey was surrounded by a wooden palisade wall, like a tall fence, for defence. Around the whole castle ran a moat, a ditch sometimes filled with water to make attack harder. Some castles had a drawbridge that could be lifted to stop invaders getting in.",
            "Your lesson's challenge asks which part mattered most. There is no single right answer, but you must give a reason: the motte for height and view, the keep for safety, the palisade and moat for keeping attackers out."
          ],
          tip: "Seven parts to label: motte, keep, bailey, bridge, palisade wall, moat, drawbridge. Motte is the mound; keep is the building on it."
        },
        {
          heading: "Wood first, then stone",
          paragraphs: [
            "At the start of William's reign, castles were built of wood. Wood was in good supply from England's forests, so a wooden castle could be built very quickly and easily, which mattered when a town had just rebelled. The disadvantage was obvious: a wooden castle would burn if set on fire.",
            "As time went on, the wooden castles were replaced by stronger stone castles, some of which still stand today. Stone took longer and cost more, but it did not burn and it lasted for centuries.",
            "The scale was enormous. In the 21 years of William's reign, from 1066 to 1087, the Normans built over 500 castles. That works out at roughly one castle every two weeks, for twenty-one years, without a break."
          ],
          worked: {
            q: "Check the lesson's claim that the Normans built a castle about every two weeks.",
            steps: [
              "William reigned for 21 years: 1087 − 1066 = 21.",
              "There are 52 weeks in a year, so 21 × 52 = 1,092 weeks.",
              "Over 500 castles in 1,092 weeks: 1,092 ÷ 500 ≈ 2.2 weeks per castle.",
              "So one castle roughly every two weeks is a fair summary of the figures."
            ],
            answer: "About 2.2 weeks per castle, so the claim of one every two weeks is fair.",
            checks: [
              { expr: "1087-1066", value: 21, tol: 0 },
              { expr: "21*52", value: 1092, tol: 0 },
              { expr: "21*52/500", value: 2.18, tol: 0.01 }
            ]
          }
        },
        {
          heading: "What the map of castles tells us",
          paragraphs: [
            "Your lesson shows a map with a dot for every castle built under William. Look at where the dots cluster. Castles are thickest where there was trouble: along the Welsh border, across the North that had rebelled, and around key towns, rivers and ports. The map is a map of William's problems as much as of his power.",
            "Some dots lie beyond England, towards Wales and Scotland. That tells you something about William's ambitions: castles were not only for holding what he had, but for pushing further.",
            "So, was William in complete control? The castles say yes and no at the same time. Over 500 of them meant he could hold the country. Needing over 500 of them meant the people never stopped being a problem to control. Keep both halves of that answer for your assessment."
          ],
          tip: "When a question gives you a map, say where the dots cluster, then say what that tells you. Description first, inference second."
        }
      ],
      gate: [
        { kind: "numeric", q: "William reigned from 1066 to 1087. How many years is that?", answer: 21, check: "1087-1066", tolerance: 0, units: "years", why: "1087 − 1066 = 21 years, the figure your lesson uses when it says a castle every two weeks.",
          misconceptions: [
            { answer: 20, check: "1087-1066-1", says: "You have taken one off, perhaps because you did not count the final year. The lesson gives 21 years: 1087 − 1066 = 21." },
            { answer: 22, check: "1087-1066+1", says: "You have counted both end years as whole years. The gap from 1066 to 1087 is 1087 − 1066 = 21 years." }
          ] },
        { kind: "gap", q: "The mound of earth that a Norman castle stood on was called the ___.", answer: "motte", options: ["motte", "bailey", "keep"], why: "The motte was the mound, about 15 metres high; the keep stood on top of it and the bailey lay below.",
          feedback: {
            "bailey": "The bailey was the yard below the mound where the Normans lived and worked. The mound itself was the motte.",
            "keep": "The keep was the building on top of the mound where the baron lived. The mound it stood on was the motte."
          } },
        { kind: "mcq", q: "Why were the first Norman castles built of wood?", options: ["Wood was plentiful in England's forests, so castles could be built quickly and easily", "Stone had not yet been discovered in England", "Wood was stronger than stone", "The English refused to let the Normans use stone"], answer: 0, why: "Speed mattered: a wooden castle could go up fast in a town that had just rebelled, and England's forests supplied the timber.",
          feedback: [
            "",
            "Stone was well known and was used for churches. Wood was chosen because it was quick and plentiful, not because stone was unknown.",
            "Wood is weaker than stone and burns, which is why the castles were later rebuilt in stone. Wood was chosen for speed, not strength.",
            "The English had no say in what the Normans built. Wood was simply quicker, and England's forests had plenty of it."
          ] }
      ],
      modules: [
        {
          title: "Label the castle",
          task: {
            kind: "match",
            q: "Match each part of a motte and bailey castle to its description.",
            pairs: [
              ["Motte", "A mound or hill of earth about 15 metres high"],
              ["Keep", "The building on top of the mound where the baron lived"],
              ["Bailey", "The main Norman living and working area, with stables and a blacksmith"],
              ["Palisade wall", "A wooden fence around the bailey"],
              ["Moat", "A ditch around the castle, sometimes filled with water for defence"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the two that are not buildings: the motte is earth, the moat is a ditch.",
                "The keep is the one building that sits on top of the motte.",
                "The bailey is the big yard: stables and blacksmith belong there.",
                "What is left is the fence: the palisade."
              ],
              example: {
                q: "Match the parts of a school site: playground, hall, fence. Descriptions: where everyone gathers indoors; the open space for break; the boundary that keeps the site enclosed.",
                steps: ["The hall is where everyone gathers indoors.", "The playground is the open space.", "The fence is the boundary."],
                answer: "Hall: gathers indoors. Playground: open space. Fence: boundary."
              }
            },
            core: { hint: "Earth, building, yard, fence, ditch. Each description is one of those five." },
            stretch: { extend: "Which part do you think mattered most to the baron inside, and which to the English outside? Explain the difference." }
          },
          explain: "Say, in one sentence, how the keep and the bailey were different.",
          why: "Motte: the mound. Keep: the baron's building on top. Bailey: the living and working yard. Palisade: the fence around the bailey. Moat: the ditch around everything."
        },
        {
          title: "How many English to each Norman?",
          task: {
            kind: "numeric",
            q: "Your lesson says castles let 10,000 Norman soldiers control 500,000 Anglo-Saxon people. How many Anglo-Saxons was that for each Norman soldier?",
            answer: 50, check: "500000/10000", tolerance: 0, units: "people per soldier",
            why: "500,000 ÷ 10,000 = 50. Each Norman soldier was, on average, holding down fifty English people. Without castles that would have been impossible.",
            misconceptions: [
              { answer: 500, check: "500000/1000", says: "You have divided by 1,000 instead of 10,000, so your answer is ten times too big. Count the zeros: 500,000 ÷ 10,000 = 50." },
              { answer: 5, check: "50000/10000", says: "You have dropped a zero from 500,000. Check the figure: it is five hundred thousand people, so 500,000 ÷ 10,000 = 50." },
              { answer: 0.02, check: "10000/500000", says: "You have divided the soldiers by the people, which gives soldiers per person. The question asks for people per soldier: 500,000 ÷ 10,000 = 50." }
            ]
          },
          contexts: [
            { label: "One town", q: "A castle garrison of 20 Norman soldiers watches over a town of 1,000 people. How many townspeople is that for each soldier?", check: "1000/20" },
            { label: "One baron's land", q: "A baron has 40 knights to control 2,000 villeins on his land. How many villeins is that for each knight?", check: "2000/40" },
            { label: "Crossing the map", q: "In one region, 100 Normans hold 5,000 English people in check from their castles. How many English is that for each Norman?", check: "5000/100" }
          ],
          levels: {
            support: {
              steps: [
                "Write the two numbers down: 500,000 people and 10,000 soldiers.",
                "People per soldier means people ÷ soldiers.",
                "Cancel the zeros: 500,000 ÷ 10,000 is the same as 50 ÷ 1.",
                "Check it makes sense: 50 people for each soldier is a lot, which is the point of the castles."
              ],
              example: {
                q: "A school has 1,200 pupils and 60 teachers. How many pupils is that for each teacher?",
                steps: ["Pupils per teacher means pupils ÷ teachers.", "1,200 ÷ 60 = 20.", "Twenty pupils for each teacher."],
                answer: "20",
                checks: [{ expr: "1200/60", value: 20, tol: 0 }]
              }
            },
            core: { hint: "Divide the people by the soldiers. Cancel matching zeros first." },
            stretch: { extend: "The population of England was about 1.5 to 2 million, not 500,000. Explain why the lesson's figure of 500,000 might be smaller than the whole population, and what difference it makes to your answer." }
          },
          explain: "Say, in one sentence, why a castle made it possible for one soldier to control fifty people.",
          why: "500,000 ÷ 10,000 = 50. The castle, not the soldier, did most of the work: height, walls and a moat meant a small garrison could see and hold a large area."
        },
        {
          title: "Why castles mattered",
          task: {
            kind: "written",
            q: "Why was it important for the Normans to build castles across England? Explain two reasons in a PEE-style paragraph.",
            criteria: [
              "I give two clear reasons (for example: the Normans were outnumbered; castles controlled key roads, rivers and ports; castles protected Norman soldiers; castles were a symbol of strength).",
              "I use at least one number from the chapter as evidence.",
              "I explain how each reason helped William control England, using because.",
              "I use at least two castle key words correctly: motte, bailey, keep, palisade, moat."
            ],
            model: "It was important for the Normans to build castles for two reasons. First, they were heavily outnumbered: only about 8,000 to 10,000 Normans settled in England among a population of 1.5 to 2 million. Castles helped because a small group of soldiers inside a keep on a motte, behind a palisade and a moat, could watch over and control a large town. Second, castles were a symbol of Norman strength. When a town rebelled, the Normans built a castle there, which helped William because it reminded people every day that rebellion was pointless and that the Normans were there to stay."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: It was important for the Normans to build castles for two reasons.",
                "Reason 1 (Point, Evidence, Explain): First, the Normans were outnumbered… only about 8,000 to 10,000… This helped because…",
                "Reason 2 (Point, Evidence, Explain): Second, castles were a symbol of strength… when a town rebelled… This helped because…",
                "Check you have used two castle key words and the word because twice."
              ],
              example: {
                q: "Why does a new school put up CCTV cameras? Explain two reasons in PEE style.",
                steps: ["Reason 1: staff cannot be everywhere, so cameras let a few people watch many places.", "Reason 2: the cameras are a visible reminder that bad behaviour will be seen.", "Explain each with because."],
                answer: "Few watching many; a visible reminder. Each explained with because."
              }
            },
            core: { hint: "Outnumbered is reason one. Pick your second from: key roads and rivers, protecting soldiers, or a symbol of strength." },
            stretch: { extend: "The lesson asks what building over 500 castles tells us about William's relationship with the English. Answer in two sentences: one about his power, one about their resistance." }
          },
          explain: "Say, in one sentence, which of your two reasons you think mattered more, and why.",
          why: "Strong answers pair a reason with a number (8,000 to 10,000 Normans; 1.5 to 2 million English; 500 castles) and explain the link with because. Two reasons, each with Point, Evidence and Explain."
        }
      ]
    }
  ],

  sources: {
    deckDump: "hi_y07_topic_3_william_s_control.txt",
    decksUsed: [
      "L1 England before 1066 / L1 England before 1066.pptx",
      "L1 England before 1066 / Information Sheet.pptx",
      "L1 England before 1066 / Anglo-Saxon Worksheet.pptx",
      "L2 William's Problems after Hastings / L2 William's Problems in 1066.pptx",
      "L2 William's Problems after Hastings / William Problems Worksheet.pptx",
      "L3 Terror - how did William put down challenges to his rule_ / L3 Terror - Harrying of the North and progress check.pptx",
      "L4 Land / L4 Land.pptx",
      "L4 Land / How Did WIlliam use Land for Control.pptx",
      "L5 Castles / L5 Castles.pptx",
      "L5 Castles / Castles GR.pptx",
      "L5 Castles / Label the Castle Diff.pptx"
    ],
    notes: "Lesson titles, sequence and learning objectives, the six-problem worksheet and its short/long-term coding, the Anglo-Saxon information sheet (Godwinsons, Tostig, Witan, Edward since 1042, hierarchy with 85 per cent and 10 per cent, 4,000 to 5,000 thegns, five hides, houses, burhs, the fyrd), the London and Dover solutions with their key words, the coronation on Christmas Day 1066, the rebellion sequence (Eadric the Wild 1067–68, Exeter 1068, Robert de Comines 1068 and Durham January 1069, Northumbria 1069), the two chronicle passages and the five success criteria, the Feudal System pyramid with its numbers (200, 4,000, 1.5 million, 40 days), the Domesday survey (one year, 13,000 villages), and the castle facts (8,000 to 10,000 Normans, 1.5 to 2 million population, 10,000 controlling 500,000, 15 metres, over 500 castles in 21 years, 1066–1087, wood then stone, the seven parts) are taken from the department's decks. The dump evidences five taught lessons (folders L1–L5); the component list printed on every lesson deck names a further item, Review and Assessment, for which no deck is in the dump, so lessonCount is 5 (open question 1). Lesson 3 is split across chapters 3 (events) and 4 (the chroniclers and the five-step analysis). Facts the deck's own questions need but the dump does not print are supplied from reference knowledge and flagged in NOTES.md: that Robert de Comines and his men were killed at Durham; the Domesday announcement in 1085 and completion in 1086; the second set of commissioners as the check against lying; the dates of the two chroniclers (1070s, 1120s); the meaning of Domesday. All explanations, questions, worked examples and model paragraphs are original; the deck's two model answers (L3 slides 13 and 20) are not reproduced and their phrases are banned in verify.py. The only quotations are short fragments of the William of Poitiers and Orderic Vitalis passages exactly as the deck prints them (medieval primary sources out of copyright; the deck's two missing spaces after full stops are restored). Pupil text says enslaved people where the information sheet says slaves, and groups or kingdoms where the L1 deck says tribes; the deck's spellings Doomsday and Leofine are corrected to Domesday and Leofwine and banned. astra/2: per-option feedback on every mcq and gap, misconceptions with checks on all four numeric items, explain prompts on every module, two context modules (ch2 mcq, ch6 numeric), glossary chapters, four Connections groups, spacing; no widgets, no constellation, no pretext.l1."
  }
};
