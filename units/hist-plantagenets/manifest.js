// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 History · Year 7 Topic 4: The Plantagenets · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   every date, name and sequence is held in an independent CHRONOLOGY table in verify.py; every four-digit year in
//   pupil text must be in that table; every "order" task is compared with the canonical sequences held there and any
//   dated sequence must be chronological; every mcq / gap / numeric / match answer is compared with the independent
//   answer key; numeric items carry `check` and `misconceptions` (each with its own `check`); worked examples carry
//   `checks`; mcq contexts end with the task's question so the answer is shared by construction.
//   Quotation guard: the ONLY quoted words are the words attributed to Henry II in 1170, as the department's deck
//   prints them on its answer slides; the deck's own bell-work text, DIT model answers and colourful asides are
//   fingerprinted and banned. The deck's "ordered the murder" claim (L1 slide 10) is not carried: L2 teaches the
//   murder as a question of blame, and so does this unit.
//   astra/2: per-wrong-option `feedback` on every mcq/gap; `misconceptions` on every numeric; `explain` on every module;
//   `glossary[].chapter`; `connections` 4 × 4 ⊂ glossary; `meta.spacing [2,7,30]`; no constellation; no pretext.l1.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["hist-plantagenets"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "hist-plantagenets",
    subjectKey: "history",
    subject: "History",
    board: "AQA",
    spec: "KS3 → 8145",
    specRef: "KS3 Year 7 Topic 4: The Plantagenets, 1154–1399 — foundations for GCSE History 8145 (Norman England and the medieval monarchy; change and continuity; causation)",
    year: 7,
    tier: "KS3",
    title: "The Plantagenets",
    sub: "Who the Plantagenet kings were, what made a medieval king successful, why Henry II and Thomas Becket fell out, and whether the Church or the Crown held the real power in England.",
    bigQuestion: "How did the Plantagenets change England, 1154–1399?",
    lessonCount: 2,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Introduction to the Plantagenets", question: "Who were the Plantagenets, how were their kings similar and different, and which Plantagenet king was the most successful?", keywords: ["monarch", "royal house", "the Anarchy", "Plantagenet", "territory", "barons", "law and order"] },
    { n: 2, title: "The Church versus the Crown: Henry II and Thomas Becket", question: "How powerful were the Church and the Crown in medieval England, why did Henry II and Becket fall out, and was there change or continuity between the Church and the king?", keywords: ["clergy", "Chancellor", "Archbishop of Canterbury", "excommunicate", "short-term and long-term causes", "change and continuity", "the Pope"] }
  ],

  glossary: [
    { term: "monarch", means: "A king or queen: the person who rules a country.", chapter: "before-1154" },
    { term: "royal house", means: "A ruling family. The Normans and the Plantagenets were royal houses of England.", chapter: "before-1154" },
    { term: "heir", means: "The person who will take the throne when the monarch dies.", chapter: "before-1154" },
    { term: "Plantagenet", means: "The family name of the kings who ruled England from Henry II in 1154 to 1399.", chapter: "before-1154" },
    { term: "baron", means: "A powerful lord who held land from the king and was expected to be loyal to him.", chapter: "four-kings" },
    { term: "rebellion", means: "Rising up against the ruler. The barons rebelled against John and twice against Henry III.", chapter: "four-kings" },
    { term: "civil war", means: "A war between people of the same country. The war between Stephen and Matilda was later called the Anarchy.", chapter: "before-1154" },
    { term: "Magna Carta", means: "The agreement the barons forced King John to accept. It limited the monarch's powers.", chapter: "four-kings" },
    { term: "clergy", means: "Religious leaders: the people who ran the Church, from the Archbishop down to the parish priest.", chapter: "church-and-crown" },
    { term: "Archbishop", means: "The most senior churchman in a country. The Archbishop of Canterbury led the Church in England.", chapter: "church-and-crown" },
    { term: "Pope", means: "The head of the whole Church in western Europe, based in Rome.", chapter: "john-and-the-pope" },
    { term: "excommunicate", means: "To officially shut someone out of the services and sacraments of the Church.", chapter: "church-and-crown" },
    { term: "contemporary", means: "From the actual time. A contemporary picture of Henry II was made while he was alive.", chapter: "four-kings" },
    { term: "inference", means: "Something you work out from a source that it does not say directly.", chapter: "four-kings" },
    { term: "change", means: "Something that became different over a period of time.", chapter: "john-and-the-pope" },
    { term: "continuity", means: "Something that stayed the same over a period of time.", chapter: "john-and-the-pope" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 glossary terms used exactly once.
  connections: [
    { group: "Who ruled", terms: ["monarch", "royal house", "heir", "Plantagenet"] },
    { group: "Trouble for a king", terms: ["baron", "rebellion", "civil war", "Magna Carta"] },
    { group: "The Church", terms: ["clergy", "Archbishop", "Pope", "excommunicate"] },
    { group: "A historian's words", terms: ["contemporary", "inference", "change", "continuity"] }
  ],

  chapters: [
    /* ───────────── 1 · before 1154 ───────────── */
    {
      key: "before-1154", n: 1, title: "Before the Plantagenets: the Normans, the White Ship and the Anarchy",
      lead: "What you already know about the Norman Conquest, the four Norman kings who followed William, the shipwreck that started a civil war, and how a new royal house took the throne in 1154.",
      covers: [1],
      pretext: {
        words: [
          { word: "monarch", means: "a king or queen who rules a country", sentence: "William the Conqueror became the monarch of England in 1066." },
          { word: "royal house", means: "a ruling family", sentence: "The Normans were the royal house of England from 1066 to 1154." },
          { word: "heir", means: "the person who will take the throne next", sentence: "Henry I lost his heir when the White Ship sank." },
          { word: "civil war", means: "a war between people of the same country", sentence: "Stephen and Matilda fought a civil war over who should be monarch." },
          { word: "the Anarchy", means: "the name later given to the civil war between Stephen and Matilda", sentence: "Ordinary people suffered during the Anarchy." }
        ],
        passage: [
          "In 1066 the Normans conquered England.",
          "William the Conqueror was crowned king.",
          "He built castles, used terror and made the Domesday Book to keep control.",
          "William died in 1087.",
          "His son William II became king, and then another son, Henry I, in 1100.",
          "In 1120 a ship called the White Ship sank.",
          "Henry I's only son drowned, so Henry had no heir.",
          "Henry wanted his daughter Matilda to rule after him.",
          "But when Henry died in 1135, his nephew Stephen took the throne.",
          "Stephen and Matilda fought a long civil war.",
          "People later called it the Anarchy.",
          "In 1154 Matilda's son, Henry II, was crowned king.",
          "He was the first king of a new royal house: the Plantagenets."
        ]
      },
      sections: [
        {
          heading: "How much did the Normans change England?",
          paragraphs: [
            "Your last topic was the Norman Conquest. You learnt how William kept control of England: he built castles, often on hills, so that his soldiers could see an enemy coming and so that everyone could see how powerful he was. He used terror, such as the Harrying of the North, so that people were too afraid to rebel. He used the feudal system, giving land in exchange for loyalty. And he had the Domesday Book written, so that he knew what everyone owned and how much tax they could pay.",
            "Historians still argue about how much all this changed England. One view says the Conquest changed who ruled, but not how ordinary people lived: they wore the same clothes, farmed the same fields and worried most about the weather and the harvest. Another view says that castles, a new French-speaking ruling class and the Domesday Book changed the country deeply. When you read a view like this, ask: how far do I agree, and what evidence have I got?",
            "This topic picks up the story where the Normans leave it. The Norman kings ruled from 1066 until 1154. Then a new family took the throne and held it for almost two and a half centuries. Your big question for the whole topic is: how did the Plantagenets change England between 1154 and 1399?"
          ],
          tip: "When a question asks how far you agree, give one piece of evidence for and one against before you decide."
        },
        {
          heading: "Four Norman kings, 1066 to 1154",
          paragraphs: [
            "Here is the line of kings you need. William the Conqueror was crowned in 1066 and died in 1087. His son William II was crowned next. In 1100 another son, Henry I, became king. Henry I ruled for thirty-five years, but a disaster in 1120 changed everything: a ship called the White Ship sank in the Channel, and Henry's only son was drowned. Henry had no male heir.",
            "Henry I decided that his daughter Matilda should rule after him, and he made his barons promise to support her. But when Henry died in 1135, his nephew Stephen moved fast and had himself crowned instead. Matilda fought back. For years the two sides fought a civil war across England. Castles changed hands, villages were burned and people went hungry. The war was later given a name: the Anarchy, which means a time with no proper rule.",
            "Historians today often call Matilda the forgotten queen. She was never crowned, but it was her son who finally won. In 1154 Stephen died and Matilda's son was crowned Henry II. The civil war was over, and England had a new royal house."
          ],
          worked: {
            q: "How many years passed between the sinking of the White Ship and the crowning of Henry II?",
            steps: [
              "Find the two dates in the chapter: the White Ship sank in 1120 and Henry II was crowned in 1154.",
              "Subtract the earlier date from the later one: 1154 − 1120.",
              "1154 − 1120 = 34. The gap is 34 years.",
              "Check it makes sense: Henry I ruled another 15 years after the shipwreck, then the Anarchy lasted through Stephen's reign of 19 years. 15 + 19 = 34."
            ],
            answer: "34 years",
            checks: [{ expr: "1154 - 1120", value: 34, tol: 0 }, { expr: "(1135 - 1120) + (1154 - 1135)", value: 34, tol: 0 }]
          },
          tip: "To find how long between two dates, subtract the earlier year from the later one. Do not add one: a reign from 1100 to 1135 is 35 years long."
        },
        {
          heading: "Who were the Plantagenets?",
          paragraphs: [
            "Plantagenet was the family name of Henry II, in the way that Tudor was the family name of Henry VIII. Henry II was the great-grandson of William the Conqueror. The line runs through Matilda: William was the father of Henry I, Henry I was the father of Matilda, and Matilda was the mother of Henry II. So the Plantagenets were not invaders. They were the Norman family under a new name.",
            "The Plantagenets ruled England from 1154 to 1399. That is far longer than the Normans ruled. In this topic you will meet the first four Plantagenet kings, Henry II, Richard I, John and Henry III, and the Edwards who came after them. You will judge each one against the same question: what makes a successful medieval king?",
            "You will also follow one long argument that ran through the whole period: who held the real power in England, the king or the Church? That argument cost an Archbishop his life in 1170, and it put a king at war with the Pope. Keep the big question in mind as you read: how did these kings change England?"
          ],
          tip: "Learn the dates 1066, 1154 and 1399 by heart. They mark the start of the Normans, the start of the Plantagenets and the end of the Plantagenets."
        }
      ],
      gate: [
        { kind: "mcq", q: "What was the Anarchy?", options: ["The civil war between Stephen and Matilda over who should rule England", "The Norman invasion of England in 1066", "The rebellion of the barons against King John", "The quarrel between Henry II and Thomas Becket"], answer: 0, why: "The Anarchy is the name later given to the civil war between Stephen and Matilda, which lasted until Henry II was crowned in 1154.",
          feedback: [
            "",
            "You have gone back one topic. The Norman invasion of 1066 was William the Conqueror's conquest. The Anarchy came almost seventy years later, when Stephen and Matilda fought over the throne.",
            "The barons' rebellion against John came later still, in the Plantagenet period, and it ended with Magna Carta. The Anarchy was the civil war between Stephen and Matilda before Henry II became king.",
            "Henry II and Becket quarrelled after Henry was already king. The Anarchy was the civil war that came before his reign, between his mother Matilda and Stephen."
          ] },
        { kind: "gap", q: "Henry I wanted his daughter ___ to rule after him, but his nephew Stephen took the throne.", answer: "Matilda", options: ["Matilda", "Eleanor", "Edith"], why: "Matilda was Henry I's daughter. Her son Henry II became the first Plantagenet king.",
          feedback: {
            "Eleanor": "Eleanor is a name you may meet later in the medieval period, but she is not in this story. Henry I's daughter, the woman Stephen pushed aside, was Matilda.",
            "Edith": "Edith is an Anglo-Saxon royal name from your earlier topic, not from this one. Henry I's daughter, who fought Stephen in the Anarchy, was Matilda."
          } },
        { kind: "numeric", q: "In what year did William the Conqueror die?", answer: 1087, tolerance: 0, units: "", why: "William the Conqueror was crowned in 1066 and died in 1087. His son William II was crowned the same year.", check: "1087",
          misconceptions: [
            { answer: 1066, check: "1066", says: "1066 is the year William conquered England and was crowned, not the year he died. He ruled for twenty-one more years and died in 1087." },
            { answer: 1100, check: "1100", says: "1100 is the year Henry I, William's son, was crowned. William the Conqueror had died earlier, in 1087, and William II had ruled in between." }
          ] }
      ],
      modules: [
        {
          title: "The line of kings, 1066 to 1154",
          task: {
            kind: "order",
            q: "Put the five kings of England in the order they were crowned, from 1066 to 1154.",
            items: [
              "William the Conqueror is crowned after the Norman Conquest (1066)",
              "William II, son of the Conqueror, is crowned (1087)",
              "Henry I, another son of the Conqueror, is crowned (1100)",
              "Stephen, nephew of Henry I, is crowned (1135)",
              "Henry II, son of Matilda and first Plantagenet king, is crowned (1154)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the conquest itself: the first king is the one who won in 1066.",
                "Two of the Conqueror's sons ruled next. A second king called William comes before the first king called Henry.",
                "The nephew who took the throne when Henry I died comes after Henry I.",
                "The first Plantagenet king comes last, because the Plantagenets came after the Normans."
              ],
              example: {
                q: "Put these three Tudor rulers in order: Elizabeth I, Henry VII, Henry VIII.",
                steps: ["Henry VII founded the Tudor royal house, so he is first.", "Henry VIII was his son, so he comes second.", "Elizabeth I was Henry VIII's daughter, so she comes last."],
                answer: "Henry VII; Henry VIII; Elizabeth I"
              }
            },
            core: { hint: "Conqueror, then his two sons in the order William then Henry, then the nephew, then the Plantagenet." },
            stretch: { extend: "Explain why the crowning of Stephen in 1135 led to a civil war, and why the crowning of Henry II in 1154 did not." }
          },
          explain: "Say, in one sentence, how you can tell which of the two Williams came first.",
          why: "William the Conqueror was crowned in 1066, his son William II in 1087, his son Henry I in 1100, Henry's nephew Stephen in 1135, and Matilda's son Henry II in 1154."
        },
        {
          title: "How long did the Normans rule?",
          task: {
            kind: "numeric",
            q: "The Normans conquered England in 1066. The first Plantagenet king was crowned in 1154. For how many years did Norman kings rule England?",
            answer: 88, tolerance: 0, units: "years",
            check: "1154 - 1066",
            why: "1154 − 1066 = 88. Norman kings ruled England for 88 years: William the Conqueror, William II, Henry I and Stephen.",
            misconceptions: [
              { answer: 89, check: "1154 - 1066 + 1", says: "You have counted both 1066 and 1154 as whole years. A gap between two dates is the later year minus the earlier one: 1154 − 1066 = 88." },
              { answer: 67, check: "1154 - 1087", says: "You subtracted from 1087, the year William the Conqueror died. But Norman rule began when he was crowned in 1066, so the gap is 1154 − 1066 = 88." },
              { answer: 54, check: "1154 - 1100", says: "You subtracted from 1100, the year Henry I was crowned. Norman rule began with the Conquest in 1066, not with Henry I, so the gap is 1154 − 1066 = 88." }
            ]
          },
          levels: {
            support: {
              steps: [
                "Write down the year Norman rule started: 1066.",
                "Write down the year it ended, when the first Plantagenet was crowned: 1154.",
                "Take the earlier year from the later year: 1154 − 1066.",
                "Count on from 1066: add 34 to reach 1100, then 54 more to reach 1154. 34 + 54 = 88."
              ],
              example: {
                q: "Henry I was crowned in 1100 and died in 1135. For how many years did he reign?",
                steps: ["Start year 1100, end year 1135.", "Later minus earlier: 1135 − 1100.", "1135 − 1100 = 35."],
                answer: "35 years",
                checks: [{ expr: "1135 - 1100", value: 35, tol: 0 }]
              }
            },
            core: { hint: "Later year minus earlier year. Do not add one for the first year." },
            stretch: { extend: "The Plantagenets ruled from 1154 to 1399. Work out how many years that is, and say how many times longer than the Normans they ruled, to the nearest whole number." }
          },
          explain: "Say, in one sentence, why you subtract the two dates rather than add them.",
          why: "1154 − 1066 = 88. Four Norman kings ruled across those 88 years; the Plantagenets then ruled for 245 years, from 1154 to 1399, almost three times as long."
        }
      ]
    },

    /* ───────────── 2 · the first Plantagenet kings ───────────── */
    {
      key: "four-kings", n: 2, title: "The first Plantagenet kings: successes and failures",
      lead: "What makes a successful medieval king, how Henry II, Richard I, John and Henry III measure up, and what the first Edward did with the throne.",
      covers: [1],
      pretext: {
        words: [
          { word: "territory", means: "land that a ruler controls", sentence: "Richard I fought wars in France and increased his territory." },
          { word: "baron", means: "a powerful lord who held land from the king", sentence: "The barons rebelled against King John." },
          { word: "rebellion", means: "rising up against the ruler", sentence: "Henry III faced two rebellions from his barons." },
          { word: "Crusade", means: "a war fought by Christian armies to control the Holy Land", sentence: "Richard I won important battles in the Third Crusade." },
          { word: "law and order", means: "keeping the country peaceful and punishing crime fairly", sentence: "Henry II improved law and order in England." },
          { word: "inference", means: "something you work out from a source that it does not say directly", sentence: "From the crown and robes in the picture you can make an inference about the king's power." }
        ],
        passage: [
          "Henry II became king in 1154.",
          "He already ruled Normandy and Anjou in France.",
          "He improved law and order and had a peaceful reign until the 1170s.",
          "But his quarrel with Archbishop Thomas Becket damaged his reign.",
          "His son Richard I ruled from 1189 to 1199.",
          "Richard spent only six months in England during his ten-year reign.",
          "He won battles in the Third Crusade and gained land in France.",
          "Richard's brother John ruled from 1199 to 1216.",
          "John lost almost all of England's lands in France and fell out with the Church.",
          "His barons rebelled and made him agree to Magna Carta.",
          "John's son Henry III ruled from 1216 to 1272.",
          "He gave royal land to his favourites, and his barons rebelled twice.",
          "Then came Edward I, who created the Model Parliament but taxed people heavily."
        ]
      },
      sections: [
        {
          heading: "What makes a successful medieval king?",
          paragraphs: [
            "Before you judge the Plantagenet kings, decide what you are judging them against. Your lesson gave you a grid with six tests. Did the king gain territory, or lose it? Did he face rebellions from his barons? Did he fall out with the Church? Did he improve law and order, or fail to? A medieval king who kept his land, kept his barons loyal, worked with the Church and kept the peace was doing his job well.",
            "Historians also use pictures. The portraits of the first four Plantagenet kings were made long ago, and some are contemporary, which means made in the king's own lifetime. A picture never tells you everything, but you can make inferences from it. A king shown with a sword suggests a warrior; a king shown with a church may want to be seen as holy. Always say what in the picture led you to your inference.",
            "Remember that similarities matter as much as differences. All four kings wear crowns and rich robes, because every king wanted to look powerful. What makes one stand out is the detail that is different."
          ],
          tip: "When you compare pictures, write two sentences: The pictures are similar because… The pictures are different because… Then say who stands out and why."
        },
        {
          heading: "Henry II and Richard I",
          paragraphs: [
            "Henry II ruled from 1154 to 1189. He came to the throne already ruling Normandy and Anjou in France, so he held a huge amount of territory from the start. In England he improved law and order after the chaos of the Anarchy, and his reign was peaceful until the 1170s. His great failure was his quarrel with the Church. His friend Thomas Becket, the Archbishop of Canterbury, was murdered in 1170 by knights who had heard the king rage against him. You will study that story in the next two chapters.",
            "Richard I ruled from 1189 to 1199. He is famous as a warrior: he won some important battles in the Third Crusade, and he fought wars in France and increased his territory. But he spent only six months in England during his ten-year reign. For most of those years England was ruled by other people in his name, while the money to pay for his wars came from English taxes.",
            "So the same fact can be a success and a failure. Gaining territory in France looks like success. Being away from England for more than nine years out of ten looks like a king who was not doing the job at home."
          ],
          worked: {
            q: "Richard I spent six months in England during his ten-year reign. What fraction of his reign was that, and what percentage?",
            steps: [
              "Turn both amounts into the same unit. Six months is half a year: 0.5 years.",
              "Write the fraction: 0.5 out of 10 years, which is 0.5 ÷ 10 = 0.05.",
              "0.05 as a fraction is 1/20. As a percentage it is 5 %.",
              "Check: 1/20 of 120 months is 6 months. That matches."
            ],
            answer: "One twentieth of his reign, which is 5 %",
            checks: [{ expr: "0.5 / 10", value: 0.05, tol: 1e-9 }, { expr: "120 / 20", value: 6, tol: 0 }, { expr: "1199 - 1189", value: 10, tol: 0 }]
          },
          tip: "Richard's ten-year reign is easy to check: 1199 − 1189 = 10."
        },
        {
          heading: "John and Henry III",
          paragraphs: [
            "John ruled from 1199 to 1216. On the grid he fails almost every test. He lost almost all of England's lands in France, the territory his father and brother had held. He fell out with Church leaders, as you will see in chapter 5. And his barons rebelled against him and forced him to agree to Magna Carta. Magna Carta was an agreement that limited the monarch's powers. For a medieval king, being made to sign away power by his own barons was a humiliation.",
            "Henry III, John's son, ruled from 1216 to 1272, one of the longest reigns in English history. But a long reign is not the same as a good one. Henry gave away royal land to his favourites, which angered the barons who felt they deserved it. His barons rebelled against him twice. And he did little to improve law and order.",
            "Put the four kings side by side and a pattern appears. The barons were a problem for John and Henry III but not for Henry II or Richard. The Church was a problem for Henry II and John. Only Henry II is credited with improving law and order. Patterns like this are what your judgement should rest on."
          ],
          tip: "Successes and failures should be specific. Not John was a bad king, but John lost almost all of England's lands in France."
        },
        {
          heading: "The Edwards",
          paragraphs: [
            "After Henry III came three kings in a row called Edward. Your lesson sheet covers all three; the slide in your lesson gives detail on the first, Edward I, who ruled from 1272 to 1307. His successes were in government. He created the Model Parliament, which shaped how England was governed for centuries, and he improved law and governance, which means the way the country was run.",
            "His failures were in how he treated people. He was a harsh ruler, and his harshness led to resistance in Scotland. He taxed people heavily, which caused discontent at home. Notice that, like Richard, Edward I shows that one king can succeed on some tests and fail on others.",
            "This is why your lesson ended with a plenary: what makes a good king? To answer it well, refer to two Plantagenet kings. Say what you believe a good king needs to be, then show how one king did that and another did not."
          ],
          tip: "Governance means how a country is run: its laws, courts, taxes and parliament. It is a useful word in a judgement."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which Plantagenet king lost almost all of England's lands in France?", options: ["John", "Henry II", "Richard I", "Edward I"], answer: 0, why: "John lost almost all of England's lands in France, the territory his father Henry II and his brother Richard had held.",
          feedback: [
            "",
            "Henry II did the opposite: he already ruled Normandy and Anjou when he became king, so he brought French territory with him. It was his son John who lost almost all of it.",
            "Richard I fought wars in France and increased his territory. The lands were lost under the next king, his brother John.",
            "Edward I came later and is known for the Model Parliament, his harsh rule and trouble in Scotland. The French lands had already been lost by John."
          ] },
        { kind: "gap", q: "Richard I spent only ___ months in England during his ten-year reign.", answer: "six", options: ["six", "ten", "eighteen"], why: "Richard spent six months in England in ten years. The rest of the time he was on Crusade or fighting in France.",
          feedback: {
            "ten": "You have mixed up the two numbers in the sentence. Ten is the number of years Richard reigned; the time he spent in England was far shorter: six months.",
            "eighteen": "Eighteen months would be a year and a half, which is still short but is three times the real figure. Your lesson says Richard spent six months in England in ten years."
          } },
        { kind: "mcq", q: "Which Plantagenet king improved law and order and had a peaceful reign until the 1170s?", options: ["Henry II", "Henry III", "John", "Richard I"], answer: 0, why: "Henry II improved law and order after the Anarchy and his reign was peaceful until the 1170s, when the Becket quarrel and family troubles began.",
          feedback: [
            "",
            "The two Henrys are easy to confuse. Henry III did little to improve law and order and faced two rebellions. It was Henry II, the first Plantagenet, who improved law and order.",
            "John's reign was the opposite of peaceful: he lost lands in France, quarrelled with the Church and faced a rebellion that ended in Magna Carta. The king who improved law and order was his father, Henry II.",
            "Richard I was hardly in England long enough to improve its law and order: six months in ten years. The king credited with it is his father, Henry II."
          ] }
      ],
      modules: [
        {
          title: "Which king is this?",
          task: {
            kind: "match",
            q: "Match each Plantagenet king to the fact about his reign.",
            pairs: [
              ["Henry II", "Already ruled Normandy and Anjou when he became king, and improved law and order"],
              ["Richard I", "Spent six months in England during a ten-year reign and won battles in the Third Crusade"],
              ["John", "Lost almost all of England's lands in France and was forced to agree to Magna Carta"],
              ["Henry III", "Gave away royal land to his favourites and faced two rebellions from his barons"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the fact that mentions a Crusade. Only one king is famous for the Third Crusade.",
                "Magna Carta was forced on one king by his barons. Find that king.",
                "Two Henrys are left. The first Plantagenet brought French lands with him and improved law and order.",
                "The remaining Henry is the one who gave away land and faced two rebellions."
              ],
              example: {
                q: "Match two Norman kings to the facts: William the Conqueror; Henry I. Facts: lost his only son when the White Ship sank; won the Battle of Hastings and had the Domesday Book made.",
                steps: ["The Battle of Hastings and the Domesday Book belong to the Conqueror.", "The White Ship sank in 1120, in Henry I's reign, so the lost son is his."],
                answer: "William the Conqueror: Hastings and the Domesday Book. Henry I: lost his son in the White Ship."
              }
            },
            core: { hint: "Crusade goes with the warrior king; Magna Carta with the king who lost France; law and order with the first Plantagenet." },
            stretch: { extend: "For each king, say whether the fact you matched is a success, a failure, or both, and explain one that is both." }
          },
          explain: "Say, in one sentence, which fact you were surest about and what made you sure.",
          why: "Henry II brought Normandy and Anjou and improved law and order; Richard I was the Crusader who spent six months in England; John lost France and was forced to accept Magna Carta; Henry III gave land to favourites and faced two rebellions."
        },
        {
          title: "How long did Henry II reign?",
          task: {
            kind: "numeric",
            q: "Henry II was crowned in 1154 and died in 1189. For how many years did he reign?",
            answer: 35, tolerance: 0, units: "years",
            check: "1189 - 1154",
            why: "1189 − 1154 = 35. Henry II reigned for 35 years, the longest of the first three Plantagenet kings.",
            misconceptions: [
              { answer: 36, check: "1189 - 1154 + 1", says: "You have counted both the first year and the last year. The length of a reign is the end year minus the start year: 1189 − 1154 = 35." },
              { answer: 45, check: "1199 - 1154", says: "1199 is the year Richard I died, not Henry II. Henry II died in 1189, so his reign was 1189 − 1154 = 35 years." },
              { answer: 25, check: "1189 - 1164", says: "You started from 1164, the year Becket fled to France. Henry II became king earlier, in 1154, so his reign was 1189 − 1154 = 35 years." }
            ]
          },
          levels: {
            support: {
              steps: [
                "Write the start of the reign: 1154.",
                "Write the end of the reign: 1189.",
                "Take the smaller year from the larger: 1189 − 1154.",
                "Count on if it helps: 1154 to 1184 is 30 years, then 5 more to 1189. 30 + 5 = 35."
              ],
              example: {
                q: "Henry III was crowned in 1216 and died in 1272. For how many years did he reign?",
                steps: ["Start 1216, end 1272.", "1272 − 1216.", "1216 to 1266 is 50 years, then 6 more. 50 + 6 = 56."],
                answer: "56 years",
                checks: [{ expr: "1272 - 1216", value: 56, tol: 0 }]
              }
            },
            core: { hint: "End year minus start year. No adding one." },
            stretch: { extend: "Work out the reign lengths of Richard I and John as well, then explain why a long reign is not the same as a successful one, using Henry III as your example." }
          },
          explain: "Say, in one sentence, which two dates you used and where in the chapter you found them.",
          why: "1189 − 1154 = 35. For comparison, Richard I reigned 10 years, John 17 and Henry III 56; length alone tells you nothing about success."
        },
        {
          title: "The most successful Plantagenet king",
          task: {
            kind: "written",
            q: "Which of the first four Plantagenet kings was the most successful? Write one paragraph of four to six sentences. Name your king, give two specific successes, admit one failure, and explain why the successes matter more.",
            criteria: [
              "I name one king and say clearly that he was the most successful.",
              "I give two specific successes from the chapter, such as territory gained or law and order improved.",
              "I admit one failure of the same king, so my judgement is balanced.",
              "I explain why the successes outweigh the failure, using the word because.",
              "I compare him briefly with at least one other Plantagenet king."
            ],
            model: "I believe Henry II was the most successful of the first four Plantagenet kings. His first success was that he already ruled Normandy and Anjou when he became king, so England gained a huge amount of territory in France. His second success was that he improved law and order after the Anarchy, and his reign was peaceful until the 1170s. His great failure was his quarrel with Thomas Becket, which ended in the Archbishop's murder and damaged his relationship with the Church. Even so, his successes matter more because they lasted: England kept the French lands until John lost them, and the peace he built is what let the country recover. Compared with John, who lost France, fell out with the Church and faced a rebellion, Henry II did far more of a king's job well."
          },
          levels: {
            support: {
              steps: [
                "Choose your king by counting ticks on the grid: which king has the most successes and the fewest failures?",
                "Sentence 1: I believe … was the most successful Plantagenet king.",
                "Sentences 2 and 3: His first success was… His second success was… Use exact facts from the chapter.",
                "Sentence 4: However, one failure was…",
                "Sentences 5 and 6: His successes matter more because… Compared with …, he…"
              ],
              example: {
                q: "Who was the more successful Norman king, William the Conqueror or Stephen? Write a short balanced judgement.",
                steps: ["Name your choice: William the Conqueror.", "Two successes: he won England in 1066 and kept control with castles and the Domesday Book.", "One failure: the Harrying of the North caused famine.", "Judge: his successes matter more because his control lasted; under Stephen, England fell into civil war."],
                answer: "William was more successful: he conquered and kept England, despite the suffering he caused in the North, while Stephen's reign collapsed into the Anarchy."
              }
            },
            core: { hint: "Two successes, one failure, then because. Specific facts, not adjectives." },
            stretch: { extend: "Argue the opposite case for one paragraph: pick the king you think was least successful and show that even he had one real success." }
          },
          explain: "Say, in one sentence, which test on the grid mattered most to your judgement and why.",
          why: "A strong judgement names a king, backs it with two specific successes, admits a failure, and explains with because why the successes outweigh it. Comparing with another king shows you have weighed the evidence."
        }
      ]
    },

    /* ───────────── 3 · the Church and the Crown ───────────── */
    {
      key: "church-and-crown", n: 3, title: "The Church and the Crown: Henry II and Thomas Becket",
      lead: "Who stood above the king in medieval England, how Henry II's best friend became his enemy, and why an Archbishop was killed in his own cathedral in 1170.",
      covers: [2],
      pretext: {
        words: [
          { word: "clergy", means: "religious leaders, the people who ran the Church", sentence: "The clergy were a powerful group below the king." },
          { word: "Chancellor", means: "the person in charge of the country when the king was away", sentence: "Henry made Becket his Chancellor because he trusted him." },
          { word: "Archbishop", means: "the most senior churchman in a country", sentence: "The Archbishop of Canterbury led the Church in England." },
          { word: "excommunicate", means: "to officially shut someone out of the Church", sentence: "Becket excommunicated the bishops who had helped Henry." },
          { word: "contemporary", means: "from the actual time", sentence: "A contemporary picture shows Henry and Becket talking." }
        ],
        passage: [
          "In medieval England, people believed God was above the king.",
          "Below the king came the barons, the knights and the peasants.",
          "There was another powerful group: the clergy, who ran the Church.",
          "In 1154 Henry II became king.",
          "His best friend was Thomas Becket.",
          "Henry made Becket his Chancellor, in charge when the king was away.",
          "Then Henry made him Archbishop of Canterbury.",
          "But Becket became very religious and put the Church first.",
          "He refused to let the king punish priests who broke the law.",
          "In 1164 Becket fled to France and stayed for six years.",
          "He came back in 1170 and the quarrel started again.",
          "Henry raged against him, and four knights rode to Canterbury.",
          "They killed Becket in his own cathedral.",
          "Soon afterwards the Pope made Becket a saint."
        ]
      },
      sections: [
        {
          heading: "Who was above the king?",
          paragraphs: [
            "Think back to the feudal system. At the top sat the king, then the barons, then the knights, then the peasants. But was there anyone higher than the monarch? Medieval people would have answered at once: God. The king ruled, they believed, because God allowed him to. And God's representatives on earth were the clergy, the religious leaders who ran the Church.",
            "The clergy were a separate group below the king, but a powerful one. The Church owned a great deal of land. It had its own courts, where priests accused of crimes were tried by other churchmen rather than by the king's judges. And at its head, far away in Rome, was the Pope, who led the whole Church in western Europe and could give orders to kings.",
            "So medieval England had two great powers: the Crown and the Church. Most of the time they worked together. But when a king and an Archbishop disagreed about who had the final say, the result could be deadly."
          ],
          tip: "Clergy is the group word. One member of the clergy is a priest, a bishop or an archbishop."
        },
        {
          heading: "Best friends: Henry and Becket",
          paragraphs: [
            "It is 1154, and Henry II has become King of England. He is William the Conqueror's great-grandson — the line runs through Matilda, the Conqueror's granddaughter — and he is the first Plantagenet king. He is popular, but he has a very short temper: when he is angry, his eyes go bloodshot and he flies into a rage.",
            "One of Henry's best friends is Thomas Becket. They hunt together and feast together, and both love expensive food and wine. Henry trusts Thomas so much that he makes him Chancellor, the person in charge of the country when the king is away. Then Henry goes further and makes his friend Archbishop of Canterbury, the head of the Church in England. He expects an Archbishop who will do what the king wants.",
            "That is not what he gets. Becket becomes very religious and starts to put the Church before the king. Henry believes the Church courts are too soft on priests who break the law, and he wants to punish them himself. Becket refuses to let him. In 1164 Becket agrees to change the rules of the Church courts, then changes his mind. Henry is furious, and Becket runs away to France. He stays there for six years."
          ],
          worked: {
            q: "Becket fled to France in 1164 and returned in 1170. Check the chapter's claim that he was away for six years.",
            steps: [
              "Find the two dates: he left in 1164 and came back in 1170.",
              "Later year minus earlier year: 1170 − 1164.",
              "1170 − 1164 = 6. The claim is right: six years.",
              "This is also a good check on your lesson, which says both six years and the dates 1164 and 1170. The three numbers agree."
            ],
            answer: "Six years",
            checks: [{ expr: "1170 - 1164", value: 6, tol: 0 }]
          },
          tip: "When a source gives you a length of time and two dates, check that they agree. If they do not, one of them is wrong."
        },
        {
          heading: "The quarrel and the murder, 1170",
          paragraphs: [
            "While Becket was in France, Henry did something that made the quarrel worse. In 1170 he asked the Archbishop of York to crown his son as the next king. Crowning a king was the Archbishop of Canterbury's job, and Becket was furious. Even so, the two men eventually agreed to work together again, and Becket returned to England in 1170.",
            "As soon as he was back, Becket excommunicated the bishops who had helped Henry run the Church while he was away, including the Archbishop of York. To excommunicate someone is to shut them out of the Church officially. For medieval people this was terrifying: an excommunicated person could not take part in Church services, and many believed it put their soul in danger.",
            "When Henry heard the news he flew into one of his rages. Your lesson records the words he is said to have shouted: “Will no one rid me of this troublesome priest?” Four knights were standing nearby. They decided the king wanted Becket gone, and they set off for Canterbury at once, without asking him. Henry sent a messenger after them, but it was too late. The knights found Becket in Canterbury Cathedral, and when he refused to leave, they killed him."
          ],
          quote: { text: "Will no one rid me of this troublesome priest?", source: "Words attributed to Henry II in 1170, as your lesson records them" },
          tip: "Whether Henry meant his words as an order is exactly the question the next chapter asks. Do not decide yet."
        },
        {
          heading: "Becket becomes a saint",
          paragraphs: [
            "The murder shocked Europe. Soon after Becket's death in 1170, Pope Alexander made him a saint. Becket's shrine at Canterbury became the most important place in the country for pilgrims to visit. People travelled for days to pray where he had died.",
            "Ask what this tells you about the power of the Church. A king had lost his temper, and the result was that his enemy was honoured as a saint and the king himself was blamed across Europe. Henry had wanted to make the Church obey the Crown. Instead the murder made the Church, and Becket's memory, stronger.",
            "So who held the power now, the Church or the king? Henry was still king, and no one took his throne away. But he had learnt that there were limits to what a king could do to the Church. Keep this question open: you will return to it in chapter 5 with another king and another quarrel."
          ],
          tip: "A shrine is a holy place built around a saint's remains. A pilgrim is someone who travels to a shrine to pray."
        }
      ],
      gate: [
        { kind: "mcq", q: "What does it mean to excommunicate someone?", options: ["To shut them out of the services and sacraments of the Church officially", "To send them to prison for a crime against the king", "To make them a saint after their death", "To give them a job running the country while the king is away"], answer: 0, why: "Excommunication officially excluded a person from the Church's services and sacraments. Becket used it against the bishops who had helped Henry.",
          feedback: [
            "",
            "Prison was the king's punishment, handed out by the king's courts. Excommunication was the Church's punishment, and it shut a person out of the Church rather than locking them up.",
            "You have the Church's actions the wrong way round. Making someone a saint is the Church's highest honour, which is what happened to Becket. Excommunication is the opposite: being shut out of the Church.",
            "That describes the job of Chancellor, which Henry gave to Becket. Excommunicating is something the Church did to people, not a job."
          ] },
        { kind: "gap", q: "Henry II made his friend Thomas Becket ___ of Canterbury, the head of the Church in England.", answer: "Archbishop", options: ["Archbishop", "Chancellor", "Pope"], why: "Becket was first Chancellor of England, then Archbishop of Canterbury, the most senior churchman in England.",
          feedback: {
            "Chancellor": "Becket was Chancellor first, but that was a royal job: running the country when the king was away. The Church job Henry gave him afterwards, the head of the Church in England, was Archbishop of Canterbury.",
            "Pope": "The Pope led the whole Church from Rome and was not chosen by the king of England. The Church job in England that Henry gave Becket was Archbishop of Canterbury."
          } },
        { kind: "numeric", q: "In what year was Thomas Becket murdered in Canterbury Cathedral?", answer: 1170, tolerance: 0, units: "", why: "Becket returned from France in 1170 and was killed in Canterbury Cathedral the same year.", check: "1164 + 6",
          misconceptions: [
            { answer: 1164, check: "1164", says: "1164 is the year Becket fled to France after changing his mind about the Church courts. He was away six years and was killed after he came back, in 1170." },
            { answer: 1154, check: "1154", says: "1154 is the year Henry II became king and the two men were still friends. The murder came sixteen years later, in 1170." }
          ] }
      ],
      modules: [
        {
          title: "From friends to murder: the order of events",
          task: {
            kind: "order",
            q: "Put the events of the Henry and Becket story in chronological order.",
            items: [
              "Henry and Becket become best friends and Henry makes Becket Chancellor of England",
              "Henry makes Becket Archbishop of Canterbury",
              "Becket becomes very religious and refuses to let the king punish priests who break the law",
              "Becket runs away to France for six years (1164)",
              "Becket returns to England and excommunicates the bishops who helped Henry (1170)",
              "Four knights kill Becket in Canterbury Cathedral (1170)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with friendship: the story begins before any quarrel.",
                "Henry gave Becket two jobs. The royal job came before the Church job.",
                "The quarrel about Church courts could only start once Becket was head of the Church.",
                "Running away comes before coming back, and the murder is the very last event."
              ],
              example: {
                q: "Put these events from chapter 1 in order: Stephen is crowned; the White Ship sinks; Henry II is crowned; Henry I is crowned.",
                steps: ["Henry I must be crowned before his son can drown in the White Ship.", "Henry I's death leads to Stephen's crowning.", "The civil war ends with Henry II's crowning."],
                answer: "Henry I is crowned (1100); the White Ship sinks (1120); Stephen is crowned (1135); Henry II is crowned (1154)"
              }
            },
            core: { hint: "Friends, Chancellor, Archbishop, quarrel, France, return, murder." },
            stretch: { extend: "Pick the one event in the sequence that you think made the murder most likely, and explain why the story could still have ended differently after it." }
          },
          explain: "Say, in one sentence, why Becket could not have refused Henry over the Church courts before he was made Archbishop.",
          why: "Friendship and the Chancellorship came first; then the Archbishopric; then Becket's new religious seriousness and his refusal over the Church courts; then exile in 1164, return in 1170, and the murder in 1170."
        },
        {
          title: "What Becket did when he came back",
          task: {
            kind: "mcq",
            q: "What did Becket do as soon as he returned from France in 1170?",
            options: [
              "He excommunicated the bishops who had helped Henry run the Church while he was away",
              "He gave up being Archbishop and went back to being Chancellor",
              "He crowned Henry's son as the next king",
              "He asked the Pope to make him a saint"
            ],
            answer: 0,
            why: "Becket excommunicated the bishops who had helped Henry in his absence, including the Archbishop of York. This is what sent Henry into the rage the knights overheard.",
            feedback: [
              "",
              "Becket never gave up the Archbishopric. He came back as Archbishop, and he used an Archbishop's power straight away by excommunicating the bishops who had helped Henry.",
              "The crowning of Henry's son had already happened, and it was the Archbishop of York who did it, which is one reason Becket was so angry. On his return Becket punished those bishops by excommunicating them.",
              "A person cannot ask to be made a saint; it happened to Becket only after his death. What he did in 1170 was excommunicate the bishops who had helped Henry."
            ]
          },
          levels: {
            support: {
              steps: [
                "Remember what had made Becket furious while he was in France: another churchman had done his job.",
                "Ask what power an Archbishop has that a king does not: he can shut people out of the Church.",
                "Becket used that power on the churchmen who had sided with Henry.",
                "Rule out anything that happened after Becket's death or that Becket could not do himself."
              ],
              example: {
                q: "What did Henry do in 1170 while Becket was still in France? Choose: made Becket Chancellor; asked the Archbishop of York to crown his son; fled to France himself.",
                steps: ["Becket had been Chancellor years earlier, before he was Archbishop.", "Henry was the king and did not flee anywhere.", "Henry asked the Archbishop of York to crown his son, which was Becket's job."],
                answer: "He asked the Archbishop of York to crown his son."
              }
            },
            core: { hint: "It was a Church punishment, aimed at churchmen who had helped the king." },
            stretch: { extend: "Explain why Henry saw the excommunications as an attack on himself, even though the bishops, not the king, were the ones punished." }
          },
          explain: "Say, in one sentence, why this action made Henry so angry.",
          why: "Becket excommunicated the bishops who had helped Henry, including the Archbishop of York. Henry saw this as Becket breaking their agreement and attacking the men who had served the Crown."
        }
      ]
    },

    /* ───────────── 4 · who was to blame ───────────── */
    {
      key: "who-was-to-blame", n: 4, title: "Who was to blame for the murder of Thomas Becket?",
      lead: "How historians sort the causes of the murder by person and by time, the difference between a short-term and a long-term cause, and how to write a judgement in a PEE paragraph.",
      covers: [2],
      pretext: {
        words: [
          { word: "cause", means: "something that makes an event happen", sentence: "Henry's temper was one cause of the murder." },
          { word: "short-term cause", means: "a cause that happens just before the event", sentence: "The knights setting off at once was a short-term cause." },
          { word: "long-term cause", means: "a cause that builds up over a long time", sentence: "The quarrel over the Church courts was a long-term cause." },
          { word: "blame", means: "to say that someone is responsible for something bad", sentence: "Historians still argue about who deserves the blame." },
          { word: "judgement", means: "your decision, backed by reasons", sentence: "A good judgement names the person most to blame and explains why." }
        ],
        passage: [
          "Four knights killed Thomas Becket in 1170.",
          "But were they the only ones to blame?",
          "Henry had a terrible temper and shouted about the troublesome priest.",
          "He had also asked the Archbishop of York to crown his son, which was Becket's job.",
          "Becket had broken his promises when he came back from France.",
          "He had refused to let the king punish priests.",
          "And he refused to leave the cathedral when the knights threatened him.",
          "The knights set off straight away, without asking Henry.",
          "They chose to kill Becket instead of making him leave the country.",
          "Some causes built up over years: these are long-term causes.",
          "Some happened in the final hours: these are short-term causes.",
          "Historians sort the causes, then make a judgement.",
          "You will do the same."
        ]
      },
      sections: [
        {
          heading: "Three suspects",
          paragraphs: [
            "Your lesson gave you nine causes of the murder and asked you to sort them into three columns, one for each person who might be blamed: King Henry, Thomas Becket, or the knights. Here they are, grouped the way your lesson's answer slide grouped them.",
            "Henry: he was well known for a terrible temper. In 1170 he had the Archbishop of York crown the next king — a job that belonged to Becket. And he shouted the words about the troublesome priest in front of the knights. Becket: when he returned from France in 1170 he broke his promises to Henry by excommunicating other bishops and the Archbishop of York. He refused to let the king punish priests who broke the law, and in 1164 he changed his mind about the Church court rules and fled to France. In the cathedral, he refused to leave when the knights threatened him. The knights: they set off for Canterbury straight away without asking Henry whether he wanted Becket killed. Henry sent a messenger after them, but it was too late. And they chose to kill Becket, and to kill him brutally, rather than simply drive him out of the country.",
            "Notice the warning your lesson gave: some causes fit more than one column. Henry's shout belongs to Henry, but the knights' decision to act on it belongs to them. You have to decide who is most to blame, and that means weighing the causes, not just counting them."
          ],
          tip: "Nine causes, three columns. Before you judge, make sure you can place every cause and say why it sits where it does."
        },
        {
          heading: "Short-term and long-term causes",
          paragraphs: [
            "Historians also sort causes by time. A long-term cause builds up over months or years before the event. A short-term cause happens just before it, in the final days or hours. Both kinds are needed for an event to happen: the long-term causes load the gun, and the short-term causes pull the trigger.",
            "Your lesson's answer slide sorted the nine causes like this. Long-term: Henry's terrible temper; Henry asking the Archbishop of York to crown the next king; Becket breaking his promises on his return in 1170; Becket refusing to let the king punish the priests; Becket running away to France. Short-term: Henry shouting about the troublesome priest; Becket refusing to leave the cathedral; the knights deciding to kill Becket brutally; the knights setting off for Canterbury straight away.",
            "You may disagree with one or two of these, and that is allowed, as long as you can argue it. Becket's return and the excommunications happened in 1170, the same year as the murder, yet the slide calls them long-term. A historian might say they were the last step in a quarrel that had lasted six years, and so belong with the long-term causes. Another might say they were the spark. State your reason either way."
          ],
          worked: {
            q: "Is this a short-term or a long-term cause? In 1170, with Becket still in France, Henry had his son crowned by the Archbishop of York.",
            steps: [
              "Ask when it happened in relation to the murder. It happened while Becket was still in France, before his return and before the final quarrel.",
              "Ask whether it is part of a build-up or a final spark. It added to a quarrel that had been running since 1164, so it is part of the build-up.",
              "Your lesson's answer slide agrees: it marks this cause LT.",
              "Write the judgement in a sentence: This is a long-term cause because it deepened the quarrel months before the murder rather than triggering it."
            ],
            answer: "A long-term cause: it deepened the quarrel before Becket returned, rather than triggering the murder itself."
          },
          tip: "ST = short-term, LT = long-term. Write the letters next to each cause, then check your pattern: the short-term causes should all come from the last few days."
        },
        {
          heading: "Writing your judgement: PEE",
          paragraphs: [
            "Your lesson asked you to finish the sentence: I think the murder of Thomas Becket was … fault. The best answers use PEE. Point: say who you think was most to blame. Evidence: give two or three causes from the columns, with the detail your lesson gave. Explanation: say why those causes matter more than the others.",
            "A good explanation does one more thing: it deals with the other suspects. If you blame Henry, say why the knights' choice does not let him off. If you blame the knights, admit that Henry's words gave them the idea. A judgement that ignores the other side is only half an argument.",
            "There is one trap to avoid. Your first lesson's summary of Henry II says he ordered the murder. Your second lesson tells a more careful story: he shouted in a rage, and the knights acted without asking him. Good historians notice when two accounts differ, and say which one the evidence supports."
          ],
          tip: "P: I think … was most to blame. E: For example, … E: This matters most because …"
        }
      ],
      gate: [
        { kind: "mcq", q: "Who actually killed Thomas Becket?", options: ["Four knights who had heard Henry rage against him", "King Henry II himself", "The Archbishop of York", "The Pope's soldiers"], answer: 0, why: "Four knights who had heard the king's words rode to Canterbury and killed Becket in the cathedral.",
          feedback: [
            "",
            "Henry was not in Canterbury and did not strike a blow. He shouted in a rage and four knights acted on what they heard. Whether that makes him to blame is the question, but he did not do the killing.",
            "The Archbishop of York was one of the bishops Becket excommunicated; he was a victim of the quarrel, not the killer. Four knights killed Becket.",
            "The Pope was on Becket's side: after the murder he made him a saint. The killers were four of Henry's knights."
          ] },
        { kind: "gap", q: "A cause that builds up over months or years before an event is called a ___-term cause.", answer: "long", options: ["long", "short", "first"], why: "Long-term causes build up over a long time; short-term causes happen just before the event.",
          feedback: {
            "short": "You have the two the wrong way round. Short-term causes happen in the final days or hours before an event. A cause that builds up over months or years is long-term.",
            "first": "Historians do not talk about first-term causes. The pair you need is long-term, for causes that build up over years, and short-term, for causes in the final days."
          } },
        { kind: "mcq", q: "Which of these is a reason some historians say Becket himself was partly to blame?", options: ["He refused to leave the cathedral when the knights threatened him", "He asked the Archbishop of York to crown the next king", "He sent a messenger after the knights, but too late", "He had a terrible temper and shouted at the knights"], answer: 0, why: "Becket refused to leave the cathedral when the knights threatened him. Your lesson puts this in the column Thomas Becket was to blame.",
          feedback: [
            "",
            "It was Henry, not Becket, who asked the Archbishop of York to crown the next king. That cause sits in the King Henry column. Becket's own choices include refusing to leave the cathedral.",
            "The messenger was Henry's: he sent one after the knights when he realised what they might do. That cause tells you about Henry. Becket's share of the blame includes refusing to leave the cathedral.",
            "The terrible temper and the shouting were Henry's, not Becket's. The causes in Becket's column include breaking his promises, refusing to let the king punish priests, and refusing to leave the cathedral."
          ] }
      ],
      modules: [
        {
          title: "Short-term or long-term?",
          task: {
            kind: "mcq",
            q: "Henry shouted the words about the troublesome priest in front of the knights, days before the murder. Is this a short-term or a long-term cause?",
            options: ["A short-term cause", "A long-term cause", "Not a cause at all"],
            answer: 0,
            why: "The shout came in the final days before the murder and set the knights off. That is a short-term cause, and your lesson's answer slide marks it ST.",
            feedback: [
              "",
              "A long-term cause builds up over months or years. The shout happened in the final days and directly set the knights riding to Canterbury, so it is a short-term cause.",
              "The shout is exactly what the knights overheard and acted on, so it is a cause of the murder. Because it came in the last few days, it is a short-term cause."
            ]
          },
          contexts: [
            { label: "The knights ride", q: "The knights set off for Canterbury Cathedral straight away, without asking Henry whether he wanted Becket killed. Is this a short-term or a long-term cause?", why: "The knights left within hours of hearing the king's words, so this is a short-term cause. Your lesson marks it ST." },
            { label: "In the cathedral", q: "When the knights threatened him in Canterbury Cathedral, Becket refused to leave. Is this a short-term or a long-term cause?", why: "This happened in the final minutes before the murder, so it is a short-term cause. Your lesson marks it ST." }
          ],
          levels: {
            support: {
              steps: [
                "Ask when the cause happened: years before the murder, or in the last few days?",
                "Ask what it did: did it build up the quarrel, or did it set the final events going?",
                "Days before, and it set the knights moving, means short-term.",
                "Check against the pattern: all the short-term causes come from the last few days in 1170."
              ],
              example: {
                q: "Is this short-term or long-term? Becket refused for years to let the king punish priests who broke the law.",
                steps: ["It ran for years, from before 1164 to 1170.", "It built up the quarrel rather than triggering the murder.", "So it is a long-term cause, which is how your lesson marks it."],
                answer: "A long-term cause"
              }
            },
            core: { hint: "Years of build-up is long-term. Final days, and it sets things moving, is short-term." },
            stretch: { extend: "Explain why the murder needed both kinds of cause: what would have happened if the shout had come with no long-term quarrel behind it?" }
          },
          explain: "Say, in one sentence, the rule you used to decide between short-term and long-term.",
          why: "Short-term causes are the ones from the final days: the shout, the knights riding at once, Becket refusing to leave. Everything that built up the quarrel over years is long-term."
        },
        {
          title: "Whose column?",
          task: {
            kind: "match",
            q: "Match each cause of the murder to the person your lesson's answer slide blames for it.",
            pairs: [
              ["Was well known for having a terrible temper", "King Henry"],
              ["Broke his promises on returning from France in 1170 by excommunicating other bishops", "Thomas Becket"],
              ["Set off for Canterbury straight away without asking whether the king wanted the murder", "The knights"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask who did each action. Who had the temper? Who excommunicated people? Who rode to Canterbury?",
                "Only an Archbishop could excommunicate bishops.",
                "Only the people who did the killing could set off to do it.",
                "The temper belongs to the man famous for his rages."
              ],
              example: {
                q: "Match these two causes to Henry or Becket: asked the Archbishop of York to crown the next king; refused to leave the cathedral.",
                steps: ["Only the king could ask someone to crown his son.", "The man in the cathedral who was threatened was Becket."],
                answer: "Asked the Archbishop of York: Henry. Refused to leave the cathedral: Becket."
              }
            },
            core: { hint: "Who could do each thing? Only a king, only an Archbishop, only the men with swords." },
            stretch: { extend: "Your lesson warns that some causes fit more than one column. Pick one cause and argue that it could sit in two columns, then say which column you would finally choose and why." }
          },
          explain: "Say, in one sentence, how you worked out which column the excommunications belong in.",
          why: "The temper is Henry's; the excommunications on his return are Becket's; riding off without asking is the knights'. Each cause is matched to the person who did the action."
        },
        {
          title: "Your judgement",
          task: {
            kind: "written",
            q: "Who was most to blame for the murder of Thomas Becket: Henry II, Thomas Becket or the knights? Write a PEE paragraph of five to seven sentences. Make your point, give at least two causes as evidence, explain why they matter most, and deal with one other suspect.",
            criteria: [
              "Point: I name the person I think was most to blame in my first sentence.",
              "Evidence: I give at least two causes from the chapter, with the detail my lesson gave.",
              "I use the words short-term or long-term about at least one cause.",
              "Explanation: I say why my causes matter more than the others, using the word because.",
              "I deal with one other suspect and explain why they are less to blame."
            ],
            model: "I think the murder of Thomas Becket was mostly King Henry's fault. The most important evidence is that Henry shouted the words about the troublesome priest in front of four knights, a short-term cause that set them riding to Canterbury. Behind that lay a long-term cause: Henry was well known for his terrible temper, and he had already angered Becket in 1170 by asking the Archbishop of York to crown his son. These causes matter most because without the king's words the knights would have had no reason to act; they believed they were doing what he wanted. It is true that the knights chose to kill Becket brutally instead of forcing him to leave the country, and that choice was theirs. But they were acting on the king's rage, and a king must take responsibility for what his words set in motion. That is why I place most of the blame on Henry."
          },
          levels: {
            support: {
              steps: [
                "Choose your suspect by looking at your three columns: whose causes would have stopped the murder if they were removed?",
                "Sentence 1: I think the murder of Thomas Becket was mostly … fault.",
                "Sentences 2 and 3: The most important evidence is … Another cause was … Label one short-term or long-term.",
                "Sentences 4 and 5: These causes matter most because …",
                "Sentences 6 and 7: It is true that … However, …"
              ],
              example: {
                q: "Write a short PEE judgement on this question from chapter 1: who was most to blame for the Anarchy, Stephen or the barons who broke their promise to Matilda?",
                steps: ["Point: Stephen was most to blame.", "Evidence: he had himself crowned in 1135 even though Henry I had named Matilda as heir.", "Explain: because without his seizing the throne there was nothing to fight over.", "Deal with the other side: the barons broke their promise, but they followed where Stephen led."],
                answer: "Stephen was most to blame because he seized a throne that had been promised to Matilda; the barons were wrong to follow him, but he led."
              }
            },
            core: { hint: "Point, two causes with detail, because, then one sentence on another suspect." },
            stretch: { extend: "Write a second paragraph from the opposite side, blaming a different suspect, then a final sentence saying which paragraph you find more convincing and why." }
          },
          explain: "Say, in one sentence, which single cause tipped your judgement.",
          why: "A strong PEE paragraph names a suspect, backs the choice with specific causes labelled by time, explains with because why they outweigh the rest, and answers the strongest point against it."
        }
      ]
    },

    /* ───────────── 5 · King John and the Pope ───────────── */
    {
      key: "john-and-the-pope", n: 5, title: "King John and the Pope: change or continuity?",
      lead: "A second king quarrels with the Church, this time with the Pope himself; what changed and what stayed the same; and who held the ultimate power in England, the Church or the Crown.",
      covers: [2],
      pretext: {
        words: [
          { word: "Pope", means: "the head of the whole Church in western Europe, based in Rome", sentence: "King John quarrelled with the Pope over who should be Archbishop." },
          { word: "dispute", means: "a serious disagreement", sentence: "The dispute was about who could choose the next Archbishop of Canterbury." },
          { word: "authority", means: "the right to give orders and be obeyed", sentence: "The king and the Pope both claimed authority over the English Church." },
          { word: "change", means: "something that became different", sentence: "The Pope having more say in English Church matters was a change." },
          { word: "continuity", means: "something that stayed the same", sentence: "John staying on as king was continuity." },
          { word: "Magna Carta", means: "the agreement the barons forced John to accept, limiting the monarch's powers", sentence: "Magna Carta limited what the king could do." }
        ],
        passage: [
          "A generation after Becket's murder, another king fell out with the Church.",
          "King John and the Pope disagreed about who should choose the next Archbishop of Canterbury.",
          "John wanted his own man.",
          "The Pope wanted his.",
          "The Pope punished John by excommunicating him.",
          "In the end John gave way, and the Pope lifted the excommunication.",
          "After this, the Pope had more say in English Church matters.",
          "But John remained King of England.",
          "He could still choose who helped him lead the country.",
          "And the Church remained wealthy and powerful, as it had always been.",
          "Historians call what became different change, and what stayed the same continuity.",
          "John's barons later made him agree to Magna Carta, which limited his power too.",
          "So who really held the power in England?"
        ]
      },
      sections: [
        {
          heading: "Another king, another quarrel",
          paragraphs: [
            "Henry II's quarrel with Becket was not the last fight between the Crown and the Church. His son John, who ruled from 1199 to 1216, fell out with the Church too, and this time the other side was the Pope himself. The dispute was about who should be able to choose the next Archbishop of Canterbury. John believed the king should choose the head of the Church in England. The Pope believed that was his decision.",
            "The Pope had a weapon that no king had: excommunication. He used it on John, shutting the King of England out of the Church. For a medieval king this was a serious blow. It told his people that God's Church had rejected him, and it gave his enemies an excuse to turn against him.",
            "In the end John gave way. He accepted the Pope's choice of Archbishop, and the Pope lifted the excommunication, so John was no longer shut out of the Church. Compare this with Henry II. Henry's quarrel ended with an Archbishop dead and the king blamed. John's ended with the king backing down. In both cases the Church did not lose."
          ],
          tip: "Your lesson's worksheet gives the detail of John's dispute. Read it with one question in mind: what changed, and what stayed the same?"
        },
        {
          heading: "Change and continuity",
          paragraphs: [
            "Historians use two words to describe what happens over time. Change means something became different. Continuity means something stayed the same. Almost every event brings some of each, and a good historian notices both.",
            "Your lesson gave you five statements about England after John's dispute with the Pope. The Pope had more say in English Church matters. John remained King of England. King John was able to choose who helped him lead the country. King John was now no longer excommunicated. The Church remained wealthy and powerful. Your task was to decide which show change and which show continuity.",
            "The test is simple. Ask: was this true before the dispute as well? If yes, it is continuity: John was king before and after; he chose his own helpers before and after; the Church was wealthy and powerful before and after. If no, it is change: before the dispute the Pope had less say in English Church matters, and before the quarrel John had not been excommunicated at all, so being no longer excommunicated is a change back from a change."
          ],
          worked: {
            q: "The Pope had more say in English Church matters. Is this evidence of change or continuity? Explain your answer in two sentences.",
            steps: [
              "Ask the test question: was this true before the dispute as well?",
              "Before the dispute, John expected to choose the Archbishop himself, so the Pope had less say. Afterwards the Pope's choice stood.",
              "Something that became different is a change.",
              "Write it up: This statement shows change, because before the dispute the king expected to choose the Archbishop and afterwards the Pope's choice stood. The balance of power over the English Church had shifted towards Rome."
            ],
            answer: "Change: the Pope's say in English Church matters grew because of the dispute; it had not been as great before."
          },
          tip: "Remained, still and continued signal continuity. More, now and no longer signal change."
        },
        {
          heading: "Who held the ultimate power?",
          paragraphs: [
            "Now put the two quarrels together. Henry II tried to make the Church obey the Crown, and the result was that Becket was made a saint and Canterbury became the greatest pilgrim site in England. John tried to choose his own Archbishop, was excommunicated, and gave way. In both cases the Church kept its wealth and power, and the Pope's authority was shown to reach into England.",
            "Yet both men stayed king. No one took Henry's throne for the murder, and John remained King of England and went on choosing who helped him lead the country. The Church could humble a king, but it did not rule the country for him. And John's power was limited again, this time by his own barons, who forced him to agree to Magna Carta in 1215. That was a different kind of limit: not the Church above the king, but the barons beside him.",
            "So your lesson's final question is a real one, and historians still argue about it. Who had the ultimate power in medieval England, the Church or the king? Decide, and write it as a PEE paragraph: your point, your evidence from the two quarrels, and your explanation of how that power was demonstrated."
          ],
          tip: "Ultimate means final: who won when the two powers clashed? Use both quarrels as evidence, not just one."
        }
      ],
      gate: [
        { kind: "mcq", q: "What was the dispute between King John and the Pope about?", options: ["Who should be able to choose the next Archbishop of Canterbury", "Whether John should go on a Crusade", "Who should rule England's lands in France", "Whether Becket should be made a saint"], answer: 0, why: "John and the Pope disagreed about who had the right to choose the next Archbishop of Canterbury.",
          feedback: [
            "",
            "Crusades belong to Richard I's story, not John's. John's quarrel with the Pope was about choosing the next Archbishop of Canterbury.",
            "The lands in France were lost to the King of France, not disputed with the Pope. The Pope and John quarrelled over who should choose the Archbishop of Canterbury.",
            "Becket had already been made a saint by the Pope soon after 1170, before John was king. John's dispute was about who should choose the next Archbishop of Canterbury."
          ] },
        { kind: "gap", q: "When something stays the same over a period of time, historians call it ___.", answer: "continuity", options: ["continuity", "change", "chronology"], why: "Continuity means staying the same; change means becoming different.",
          feedback: {
            "change": "You have the pair the wrong way round. Change is when something becomes different. When something stays the same, historians call it continuity.",
            "chronology": "Chronology means the order in which events happened. It is a useful word, but the word for something staying the same over time is continuity."
          } },
        { kind: "mcq", q: "Which of these statements is evidence of CHANGE after John's dispute with the Pope?", options: ["The Pope had more say in English Church matters", "John remained King of England", "The Church remained wealthy and powerful", "King John was able to choose who helped him lead the country"], answer: 0, why: "Before the dispute the king expected to choose the Archbishop; afterwards the Pope's say had grown. That is change. The other three were true before and after.",
          feedback: [
            "",
            "Remained is a continuity word. John was king before the dispute and king after it, so nothing had changed. The change was in how much say the Pope had.",
            "The Church was wealthy and powerful before the dispute and still was afterwards: that is continuity. The statement about the Pope having more say is the one that describes something new.",
            "John chose his own helpers before the dispute and still did afterwards, so this is continuity. The Pope having more say in Church matters is what changed."
          ] }
      ],
      modules: [
        {
          title: "Change or continuity?",
          task: {
            kind: "mcq",
            q: "After the dispute, the Church remained wealthy and powerful. Is this statement evidence of change or continuity?",
            options: ["Continuity", "Change", "Neither: it has nothing to do with the dispute"],
            answer: 0,
            why: "The Church was wealthy and powerful before the dispute and still was after it. Nothing had become different, so this is continuity.",
            feedback: [
              "",
              "Change means something became different. The Church's wealth and power were the same before and after the dispute, so this is continuity. Look for the word remained.",
              "It has everything to do with the dispute: it tells you the quarrel did not weaken the Church. Because that was true before and after, it is evidence of continuity."
            ]
          },
          contexts: [
            { label: "Still king", q: "After the dispute, John remained King of England. Is this statement evidence of change or continuity?", why: "John was king before and after the quarrel; the Pope humbled him but did not remove him. That is continuity." },
            { label: "His own helpers", q: "After the dispute, King John was still able to choose who helped him lead the country. Is this statement evidence of change or continuity?", why: "John chose his own ministers before the dispute and went on doing so. Nothing became different, so this is continuity." }
          ],
          levels: {
            support: {
              steps: [
                "Ask the test question: was this true before the dispute as well?",
                "If it was true before and is still true after, nothing has become different.",
                "Something that stays the same is continuity.",
                "Check the signal words: remained, still and continued point to continuity."
              ],
              example: {
                q: "After the dispute, King John was no longer excommunicated. Change or continuity?",
                steps: ["Before the dispute John was not excommunicated; during it he was; afterwards he was not again.", "His position had changed twice, so something became different.", "The signal words now and no longer point to change."],
                answer: "Change"
              }
            },
            core: { hint: "Was it true before as well? Yes means continuity. Look for remained." },
            stretch: { extend: "Explain why a historian might say this continuity is the most important fact of all about John's quarrel with the Pope." }
          },
          explain: "Say, in one sentence, the question you ask to tell change from continuity.",
          why: "The Church was wealthy and powerful before and after the dispute; John stayed king and kept choosing his helpers. All three are continuity. The Pope's greater say, and John's excommunication being lifted, are the changes."
        },
        {
          title: "Two quarrels, one lesson",
          task: {
            kind: "mcq",
            q: "What do the quarrels of Henry II and John with the Church have in common?",
            options: [
              "In both, the king stayed on the throne but the Church kept its power and the king was humbled",
              "In both, the king won and the Church lost its wealth",
              "In both, the Archbishop of Canterbury was murdered",
              "In both, the Pope removed the king from the throne"
            ],
            answer: 0,
            why: "Henry was blamed across Europe and Becket became a saint; John was excommunicated and gave way. Yet both remained king, and the Church kept its wealth and power.",
            feedback: [
              "",
              "Neither king won. Henry's enemy became a saint and John had to accept the Pope's Archbishop. And the Church remained wealthy and powerful after both quarrels.",
              "Only one Archbishop was murdered: Becket, in 1170. John's quarrel ended with him accepting the Pope's choice of Archbishop, not with a killing.",
              "The Pope never removed either king. Henry stayed on the throne after the murder, and John remained King of England after he was excommunicated and then forgiven."
            ]
          },
          levels: {
            support: {
              steps: [
                "List how each quarrel ended: Henry blamed, Becket a saint; John excommunicated, then gave way.",
                "Ask who was still king afterwards. Both men were.",
                "Ask whether the Church lost anything. It did not: it remained wealthy and powerful.",
                "The option that says both of those things is the one you want."
              ],
              example: {
                q: "What did the rebellions against John and Henry III have in common? Choose: both were by the barons; both were led by the Pope; both ended with the king removed.",
                steps: ["Your lesson says the barons rebelled against John and twice against Henry III.", "The Pope led neither, and neither king lost his throne."],
                answer: "Both were rebellions by the barons."
              }
            },
            core: { hint: "Who kept the throne? Who kept their wealth and power? The answer names both." },
            stretch: { extend: "Explain one important difference between the two quarrels, and say whether it shows change in the relationship between the Church and the Crown between 1170 and John's reign." }
          },
          explain: "Say, in one sentence, what the two quarrels tell you about the limits of a king's power.",
          why: "Both kings kept their thrones, and in both cases the Church came out with its power intact: Becket a saint and Canterbury a great shrine; John forced to accept the Pope's Archbishop."
        },
        {
          title: "Church or king: who had the ultimate power?",
          task: {
            kind: "written",
            q: "Who had the ultimate power in medieval England, the Church or the king? Write a PEE paragraph of five to seven sentences, using evidence from both Henry II's quarrel with Becket and John's quarrel with the Pope, and explain how that power was demonstrated.",
            criteria: [
              "Point: I say clearly in my first sentence whether the Church or the king had the ultimate power.",
              "Evidence: I use at least one fact from Henry II's quarrel and one from John's quarrel.",
              "I explain how the power was demonstrated, using the word because.",
              "I use the words change or continuity correctly at least once.",
              "I deal with one piece of evidence for the other side."
            ],
            model: "I believe the Church had the ultimate power in medieval England. When Henry II's knights killed Thomas Becket in 1170, it was the king who was blamed across Europe, and the Pope made Becket a saint, so that Canterbury became the most important pilgrim site in the country. When John tried to choose his own Archbishop of Canterbury, the Pope excommunicated him and John gave way, and afterwards the Pope had more say in English Church matters. This shows the Church's power because in both quarrels the king was the one who had to back down or take the blame, and in both the Church remained wealthy and powerful, which is a striking continuity. It is true that both men remained king, and John still chose who helped him lead the country. However, keeping the throne is not the same as having the final say, and when the two powers clashed it was the Church that won."
          },
          levels: {
            support: {
              steps: [
                "Decide your answer by asking: when the two powers clashed, who backed down?",
                "Sentence 1: I believe the Church / the king had the ultimate power because…",
                "Sentences 2 and 3: one fact from the Becket quarrel, one from the John quarrel.",
                "Sentences 4 and 5: This shows … because … Use change or continuity.",
                "Sentences 6 and 7: It is true that … However, …"
              ],
              example: {
                q: "Write a short PEE paragraph on this question from chapter 2: who had more power in England, King John or his barons?",
                steps: ["Point: the barons had more power than John by the end of his reign.", "Evidence: they rebelled and forced him to agree to Magna Carta, which limited the monarch's powers.", "Explain: because a king who can be made to sign away power is not the final authority.", "Other side: John remained king, so his power was limited, not ended."],
                answer: "The barons had the upper hand because they forced Magna Carta on John, though he stayed king."
              }
            },
            core: { hint: "One fact from each quarrel, then because, then one sentence for the other side." },
            stretch: { extend: "Add a final sentence that uses Magna Carta to argue that the real limit on a king's power came not from the Church but from his own barons, and say whether that changes your judgement." }
          },
          explain: "Say, in one sentence, which piece of evidence most convinced you.",
          why: "A strong answer takes a side, uses both quarrels as evidence, explains how the power was shown, names a change or a continuity, and answers the best point for the other side."
        }
      ]
    }
  ],

  sources: {
    deckDump: "hi_y07_topic_4_the_plantagenets.txt",
    decksUsed: [
      "Lesson 1 2026 / L1 Introduction to the Plantagenets 2026.pptx",
      "Lesson 2 2026 / Lesson 2 - Henry and the church 2026.pptx"
    ],
    notes: "The dump holds two decks (L1 Introduction to the Plantagenets; L2 Henry and the Church). Its 'Components' slide lists six lessons (Introduction; Henry II and the Church; King John and Magna Carta; Progress check and the Black Death; the Edwards; Review and Assessment) but only the first two are in the dump, so lessonCount is 2. Everything taught comes from those two decks: the 1066–1154 timeline of kings (900s Anglo-Saxons, 1066, 1087, 1100, 1135, 1154), the White Ship (1120), Matilda and the Anarchy, Henry II as William's great-grandson through Matilda, the enquiry question 1154–1399, the successes-and-failures grid for Henry II (1154–89), Richard I (1189–99), John (1199–1216) and Henry III (1216–72), Edward I's Model Parliament, law and governance, harshness, Scotland and taxes, the feudal pyramid with God above the king and the clergy as a separate group, the Henry–Becket story (Chancellor, Archbishop, Church courts, 1164, six years in France, the Archbishop of York crowning the next king, return in 1170, excommunications, the words about the troublesome priest, four knights, the murder), the nine causes sorted by person and by short-/long-term exactly as the deck's answer slide sorts them, Pope Alexander making Becket a saint and Canterbury's shrine, the John–Pope dispute over choosing the Archbishop of Canterbury and the five change/continuity statements. Added from standard reference knowledge and flagged in NOTES.md: Edward I's reign dates 1272–1307 (the deck prints 1239–1307, which are his birth and death), Magna Carta's year 1215, that John accepted the Pope's choice of Archbishop, the family relationships Richard–John–Henry III, the Church's land and courts, and that Henry I made his barons promise to support Matilda. All explanations, questions, worked examples and model paragraphs are original; the deck's bell-work text on the Norman Conquest and its DIT model answers are not reproduced and are fingerprinted in verify.py. The only quotation is the sentence attributed to Henry II in 1170, as the deck's answer slides print it. The deck's L1 claim that Henry II 'ordered the murder' is not carried, because L2 teaches the murder as a question of blame. astra/2: per-option feedback on every mcq and gap, misconceptions with checks on every numeric item, explain prompts on every module, two context modules (ch4 short-/long-term; ch5 change/continuity), glossary chapters, four Connections groups, spacing; no widgets, no constellation, no pretext.l1."
  }
};
