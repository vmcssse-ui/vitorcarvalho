// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 History · Year 8 Topic 4: Whitechapel 1888 (the department's deck is titled "Jack the Ripper") · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   every year, 1888 date, name and sequence is held in an independent CHRONOLOGY / DATES table in verify.py, with the deck
//   slide each comes from; every four-digit year and every large number in pupil text must be in those tables or the FACTS
//   table; every "order" task is compared with the canonical sequences held there and dated sequences must run in date
//   order; every mcq / gap / match answer is compared with the independent answer key; numeric items carry `check` and
//   `misconceptions` (each with its own `check`); the one worked arithmetic carries `checks`; numeric contexts recompute to
//   the task answer and mcq contexts end with the task's question.
//   Care guard (Batch 4 addendum): the unit is the history of poverty, policing and the press in Whitechapel. The five women
//   are named as people (each name must appear at least three times); no word describing an injury may appear anywhere
//   (the verifier bans the deck's own graphic vocabulary); no "solve the case", "who was Jack", role-play or "imagine you
//   are" prompts; the killer is "the killer" and the name "Jack the Ripper" is capped; the label "prostitute" is banned
//   (the deck's own extension slide makes the point that labels erase the women); the anti-immigrant sources and the
//   witness description that names a religion are paraphrased, never quoted.
//   Quotation guard: the ONLY quoted words are two short primary-source fragments the deck prints (a newspaper article of
//   1888; The New York Times, 1880s), both out of copyright; nothing from the guided-reading sheet, the online case study,
//   Arthur Morrison or the BBC programme is quoted; the deck's five model answers are fingerprinted and banned.
//   astra/2: per-wrong-option `feedback` on every mcq/gap; `misconceptions` on every numeric; `explain` on every module;
//   `glossary[].chapter`; `connections` 4 × 4 ⊂ glossary; `meta.spacing [2,7,30]`; no constellation; no pretext.l1.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["hist-whitechapel"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "hist-whitechapel",
    subjectKey: "history",
    subject: "History",
    board: "AQA",
    spec: "KS3 → 8145",
    specRef: "KS3 Year 8 Topic 4: Whitechapel 1888 — poverty, policing and the press in the East End of London; foundations for GCSE History 8145 (historic environment and source skills)",
    year: 8,
    tier: "KS3",
    title: "Whitechapel 1888",
    sub: "What life was like in the poorest district of Victorian London, who the five women were, how the new police tried to catch a killer without the tools we have today, and how the press turned a local tragedy into a national story.",
    bigQuestion: "Why was the Whitechapel killer of 1888 never caught, and what does the case show us about poverty, policing and the press in Victorian London?",
    lessonCount: 5,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Conditions in Whitechapel in the 1880s", question: "What was Whitechapel like in the 1880s, and how did its conditions affect crime?", keywords: ["Victorian", "East End", "overcrowding", "doss house", "pea souper", "immigration"] },
    { n: 2, title: "The victims and the murders", question: "Who were the five women, and what did their lives have in common?", keywords: ["Canonical Five", "Mary Ann Nichols", "Annie Chapman", "Elizabeth Stride", "Catherine Eddowes", "Mary Jane Kelly", "double event"] },
    { n: 3, title: "The role of the police", question: "How did the police try to catch the killer, and why did their methods fail?", keywords: ["Metropolitan Police", "Sir Robert Peel", "Peelers", "decoys", "leaflets", "bloodhounds", "City of London Police"] },
    { n: 4, title: "Progress check and suspects", question: "How do you agree or disagree with a historian, and why could witnesses and suspects not help the police?", keywords: ["historian's opinion", "own knowledge", "witness statement", "credible", "suspect", "alibi"] },
    { n: 5, title: "The media and review", question: "How did the newspapers affect the case, and which factor mattered most?", keywords: ["media", "reliability", "sensational", "Charles Booth", "PEEL", "factors"] }
  ],

  glossary: [
    { term: "East End", means: "The poor, crowded eastern part of London, where about 900,000 people lived in the 1880s.", chapter: "whitechapel-1880s" },
    { term: "overcrowding", means: "Too many people living in too small a space. In Whitechapel an average house held seven people.", chapter: "whitechapel-1880s" },
    { term: "doss house", means: "A cheap lodging house where the poorest paid a few pennies for a bed for one night.", chapter: "whitechapel-1880s" },
    { term: "pea souper", means: "A thick, dirty, greenish fog made worse by smoke. At times you could not see your own hand.", chapter: "conditions-and-crime" },
    { term: "immigration", means: "Moving to another country to set up a new life. Many Irish and Jewish families moved to Whitechapel.", chapter: "conditions-and-crime" },
    { term: "prejudice", means: "Judging people as a group before you know them. Some locals blamed Jewish newcomers for their own hardship.", chapter: "conditions-and-crime" },
    { term: "Canonical Five", means: "The name historians give to the five women generally agreed to have been killed by the same person in 1888.", chapter: "the-five-women" },
    { term: "vulnerable", means: "Easy to harm because you have little protection. Poverty, drink and sleeping out made people vulnerable.", chapter: "the-five-women" },
    { term: "Metropolitan Police", means: "London's police force, set up by Sir Robert Peel in 1829. Its H Division covered Whitechapel.", chapter: "the-police" },
    { term: "beat", means: "The fixed route an officer walked again and again on patrol, passing each point every few minutes.", chapter: "the-police" },
    { term: "decoy", means: "Something used as bait. Male officers dressed as women to try to attract the killer.", chapter: "the-police" },
    { term: "bloodhound", means: "A dog with a strong sense of smell, trained to follow a scent. The police tried using them in 1888.", chapter: "the-police" },
    { term: "witness statement", means: "A description given to the police by someone who saw something.", chapter: "witnesses-and-suspects" },
    { term: "alibi", means: "Evidence that a person was somewhere else when a crime happened.", chapter: "witnesses-and-suspects" },
    { term: "provenance", means: "Where a source comes from: who made it, when, and why. Also called nature, origin and purpose.", chapter: "witnesses-and-suspects" },
    { term: "sensational", means: "Written to shock and excite readers rather than to inform them accurately.", chapter: "the-press" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 glossary terms used exactly once.
  connections: [
    { group: "Whitechapel's conditions", terms: ["East End", "overcrowding", "doss house", "pea souper"] },
    { group: "People of Whitechapel", terms: ["immigration", "prejudice", "Canonical Five", "vulnerable"] },
    { group: "Policing in 1888", terms: ["Metropolitan Police", "beat", "decoy", "bloodhound"] },
    { group: "Evidence and the press", terms: ["witness statement", "alibi", "provenance", "sensational"] }
  ],

  chapters: [
    /* ───────────── 1 · Whitechapel in the 1880s ───────────── */
    {
      key: "whitechapel-1880s", n: 1, title: "Whitechapel in the 1880s",
      lead: "Victorian Britain was rich and powerful, but its wealth stopped at the edge of the East End. This chapter takes you into Whitechapel: who lived there, how they lived, and why it was the poorest district in London.",
      covers: [1],
      pretext: {
        words: [
          { word: "Victorian", means: "from the time when Queen Victoria ruled, 1837 to 1901", sentence: "The Victorian period was a time of new inventions and a growing empire." },
          { word: "East End", means: "the poor, crowded eastern part of London", sentence: "About 900,000 people lived in the East End of London in the 1880s." },
          { word: "district", means: "an area of a town or city with its own name", sentence: "Whitechapel was a small district on the edge of the City of London." },
          { word: "overcrowding", means: "too many people living in too small a space", sentence: "Overcrowding meant seven people shared an average house." },
          { word: "doss house", means: "a cheap lodging house where you paid for a bed for one night", sentence: "A bed in a doss house cost four pence." },
          { word: "slum", means: "a run-down area of poor, crowded housing", sentence: "Whitechapel held some of the worst slums in London." }
        ],
        passage: [
          "In 1888 Britain was rich and powerful.",
          "Queen Victoria had ruled since 1837.",
          "London was the largest capital city in the world.",
          "But the wealth was not shared fairly.",
          "In the East End of London lived about 900,000 people.",
          "Whitechapel was the poorest district in the East End.",
          "About 78,000 people lived there, packed into a small area.",
          "On average, seven people lived in each house.",
          "About 8,000 people regularly slept rough on the streets.",
          "The poorest paid a few pennies for a bed in a doss house.",
          "Work was hard to find, especially for women.",
          "This is the place where the events of 1888 happened."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "من زمن حكم الملكة فيكتوريا، 1837 إلى 1901 (Victorian)",
            "الجزء الشرقي الفقير المزدحم من لندن (East End)",
            "منطقة في بلدة أو مدينة لها اسمها الخاصّ (district)",
            "ناس أكثر من اللازم يعيشون في حيّز أصغر من اللازم (overcrowding)",
            "بيت مبيت رخيص تدفع فيه ثمن سرير لليلة واحدة (doss house)",
            "منطقة متدهورة سكنها فقير مزدحم (slum)"
          ],
          "passage": [
            "في 1888 كانت بريطانيا غنيّة قويّة.",
            "وكانت الملكة فيكتوريا تحكم منذ 1837.",
            "وكانت لندن أكبر عاصمة في العالم.",
            "ولكنّ الثروة لم تكن مقسومة بعدل.",
            "وكان يعيش في إيست إند (East End) في لندن نحو 900,000 نسمة.",
            "وكانت وايتشابل (Whitechapel) أفقر منطقة في إيست إند.",
            "وكان يعيش فيها نحو 78,000 نسمة، محشورين في مساحة صغيرة.",
            "وكان يعيش في كلّ بيت سبعة أشخاص في المتوسّط.",
            "وكان نحو 8,000 شخص ينامون في الشوارع بانتظام.",
            "وكان أفقرهم يدفع بنسات قليلة لسرير في بيت مبيت.",
            "وكان العمل صعب المنال، وخاصّةً للنساء.",
            "وهذا هو المكان الذي حدثت فيه أحداث 1888."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "z czasów, kiedy rządziła królowa Victoria, od 1837 do 1901 roku (Victorian)",
            "biedna, zatłoczona wschodnia część Londynu (East End)",
            "obszar miasta, który ma własną nazwę (district)",
            "zbyt wielu ludzi mieszkających na zbyt małej przestrzeni (overcrowding)",
            "tani nocleg, w którym płaciło się za łóżko na jedną noc (doss house)",
            "zaniedbany obszar biednych, zatłoczonych domów (slum)"
          ],
          "passage": [
            "W 1888 roku Wielka Brytania była bogata i potężna.",
            "Królowa Victoria (Wiktoria) rządziła od 1837 roku.",
            "Londyn był największą stolicą na świecie.",
            "Ale bogactwo nie było dzielone sprawiedliwie.",
            "W East Endzie w Londynie mieszkało około 900,000 ludzi.",
            "Whitechapel był najbiedniejszą dzielnicą East Endu.",
            "Mieszkało tam około 78,000 ludzi, upchanych na małym obszarze.",
            "Średnio w każdym domu mieszkało siedem osób.",
            "Około 8,000 ludzi regularnie spało na ulicy.",
            "Najbiedniejsi płacili kilka pensów za łóżko w noclegowni.",
            "Pracę trudno było znaleźć, zwłaszcza kobietom.",
            "To jest miejsce, w którym zdarzyły się wydarzenia 1888 roku."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "do tempo em que a rainha Victoria governou, de 1837 a 1901 (Victorian, vitoriano)",
            "a parte leste de Londres, pobre e cheia de gente (East End)",
            "uma área de uma vila ou cidade com o seu próprio nome (district, bairro)",
            "demasiadas pessoas a viver num espaço demasiado pequeno (overcrowding, sobrelotação/superlotação)",
            "uma hospedaria barata onde se pagava uma cama por uma noite (doss house)",
            "uma área degradada, com casas pobres e cheias de gente (slum, bairro de lata/favela)"
          ],
          "passage": [
            "Em 1888 a Grã-Bretanha era rica e poderosa.",
            "A rainha Victoria (Vitória) governava desde 1837.",
            "Londres era a maior capital do mundo.",
            "Mas a riqueza não era repartida de forma justa.",
            "No East End de Londres viviam cerca de 900 000 pessoas.",
            "Whitechapel era o bairro mais pobre do East End.",
            "Viviam lá cerca de 78 000 pessoas, apertadas numa área pequena.",
            "Em média, viviam sete pessoas em cada casa.",
            "Cerca de 8 000 pessoas dormiam habitualmente na rua.",
            "Os mais pobres pagavam alguns tostões por uma cama numa doss house.",
            "O trabalho era difícil de encontrar, sobretudo para as mulheres.",
            "É este o lugar onde os acontecimentos de 1888 aconteceram."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "ka yimid waqtigii Boqorad Victoria xukumaysay, 1837 ilaa 1901",
            "qaybta bariga ee London oo faqiir iyo dad badan leh",
            "meel magaalo ah oo magac u gaar ah leh",
            "dad aad u badan oo meel aad u yar ku nool",
            "hoy jaban oo habeen kasta sariir lacag ku bixiso",
            "meel burbursan oo guryo faqiir ah oo dad badan ku jira"
          ],
          "passage": [
            "1888-kii Biritayn waxay ahayd hodan iyo awood weyn.",
            "Boqorad Victoria waxay xukumaysay ilaa 1837-dii.",
            "London waxay ahayd caasimadda ugu weyn dunida.",
            "Laakiin maalka si caddaalad ah looma wadaagin.",
            "East End ee London waxaa ku noolaa qiyaastii 900,000 oo qof.",
            "Whitechapel waxay ahayd degmada ugu faqiirsan East End.",
            "Qiyaastii 78,000 oo qof ayaa halkaas ku noolaa, oo meel yar ku cufnaa.",
            "Celcelis ahaan, toddoba qof ayaa guri kasta ku noolaa.",
            "Qiyaastii 8,000 oo qof si joogto ah waxay waddooyinka ku seexdeen.",
            "Kuwa ugu faqiirsan waxay bixiyeen dhowr penny oo sariir doss house ah.",
            "Shaqo way adkayd in la helo, gaar ahaan haweenka.",
            "Tan waa meeshii dhacdooyinkii 1888 ka dhaceen."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "з часу, коли правила королева Вікторія, з 1837 до 1901 року (Victorian)",
            "бідна, переповнена східна частина Лондона (East End)",
            "частина містечка або міста з власною назвою (district)",
            "надто багато людей, які живуть на надто малому просторі (overcrowding)",
            "дешева нічліжка, де платили за ліжко на одну ніч (doss house)",
            "занедбаний район бідного, переповненого житла (slum)"
          ],
          "passage": [
            "У 1888 році Британія була багатою й могутньою.",
            "Королева Вікторія правила з 1837 року.",
            "Лондон був найбільшою столицею у світі.",
            "Але багатство було розподілене несправедливо.",
            "У Іст-Енді (East End) Лондона жило близько 900,000 людей.",
            "Вайтчепел (Whitechapel) був найбіднішою частиною Іст-Енду.",
            "Там жило близько 78,000 людей, втиснутих у невелику площу.",
            "У середньому в кожному будинку жило сім людей.",
            "Близько 8,000 людей постійно спали просто на вулицях.",
            "Найбідніші платили кілька пенні за ліжко в нічліжці.",
            "Роботу було важко знайти, особливо жінкам.",
            "Це те місце, де сталися події 1888 року."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ملکہ وکٹوریہ کے دور کا، یعنی 1837 سے 1901 تک (Victorian)",
            "لندن کا غریب اور گنجان مشرقی حصہ (East End)",
            "کسی قصبے یا شہر کا ایک علاقہ جس کا اپنا نام ہو (district)",
            "بہت تھوڑی جگہ میں بہت زیادہ لوگوں کا رہنا (overcrowding)",
            "سستی سرائے جہاں آپ ایک رات کے بستر کے پیسے دیتے تھے (doss house)",
            "غریب، گنجان اور خستہ مکانوں کا علاقہ (slum)"
          ],
          "passage": [
            "1888 میں برطانیہ امیر اور طاقتور تھا۔",
            "ملکہ وکٹوریہ 1837 سے حکومت کر رہی تھیں۔",
            "لندن دنیا کا سب سے بڑا دارالحکومت تھا۔",
            "مگر یہ دولت انصاف سے نہیں بٹی تھی۔",
            "لندن کے East End میں تقریباً 900,000 لوگ رہتے تھے۔",
            "وائٹ چیپل (Whitechapel) East End کا سب سے غریب district تھا۔",
            "وہاں تقریباً 78,000 لوگ رہتے تھے، ایک چھوٹے سے علاقے میں بھنچے ہوئے۔",
            "اوسطاً ہر مکان میں سات لوگ رہتے تھے۔",
            "تقریباً 8,000 لوگ عام طور پر سڑکوں پر کھلے میں سوتے تھے۔",
            "سب سے غریب لوگ doss house میں بستر کے لیے چند پیسے دیتے تھے۔",
            "کام ملنا مشکل تھا، خاص کر عورتوں کے لیے۔",
            "یہی وہ جگہ ہے جہاں 1888 کے واقعات پیش آئے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Victorian Britain: rich, powerful and unequal",
          paragraphs: [
            "The Victorian period is the time when Queen Victoria was on the throne, from 1837 to 1901. You met it in Year 7 when you compared the Romans and the Victorians. It is famous for new inventions, for the growth of the British Empire, and for increased wealth. By 1888 London was the largest capital city in the world and the centre of that Empire.",
            "Victoria had been queen for over 50 years by 1888, and the public face of Britain copied her style: proud, dignified and proper. But this power and wealth was not spread fairly across society. A short walk east from the City of London, where the banks were, took you into the East End, the poorest part of the capital.",
            "This unit asks why a killer in the East End in 1888 was never caught. To answer that, your lesson begins not with the killer but with the place. The conditions in Whitechapel are the first factor, and you cannot judge the police, the witnesses or the newspapers without understanding them."
          ],
          tip: "When a question says Victorian, think 1837 to 1901. The events in this unit happened in 1888, in the second half of the period."
        },
        {
          heading: "Where was Whitechapel?",
          paragraphs: [
            "Whitechapel is a small district in the East End of London, on the border of the City of London. In the 1880s about 900,000 people lived in the East End, which was known for unemployment and crime. Whitechapel was the poorest district of all. By the end of the 1800s its population was over 78,000, and the wider area patrolled by the Metropolitan Police's H Division held about 176,000 people.",
            "A small area with a very big population means overcrowding. Each house in Whitechapel had, on average, seven people living in it. Homelessness was common: about 8,000 people regularly slept rough. Streets such as Thrawl Street, Flower and Dean Street and Dorset Street were lined with lodging houses, and your lesson says the police would only go down Dorset Street in teams of four.",
            "Whitechapel was also a mixture of places: lodging houses, sweatshops where people sewed for long hours, slaughterhouses, pubs, a few shops and warehouses, with a row or two of respectable cottages. Most of it was slum housing, and the poverty of the people who lived there shocked visitors."
          ],
          worked: {
            q: "Use two figures from your lesson to explain why overcrowding was common in Whitechapel.",
            steps: [
              "Make the point: Overcrowding was common in Whitechapel because a very large number of people lived in a very small area.",
              "Give the first figure: over 78,000 people lived in the district by the end of the 1800s.",
              "Give the second figure and link it: so, on average, seven people lived in each house.",
              "Explain what this meant: families shared rooms, and those who could not pay for a room slept in doss houses or on the street."
            ],
            answer: "Point, two figures, explanation: 78,000 people in a small district meant an average of seven to a house, so people shared rooms, used doss houses or slept rough."
          },
          tip: "Figures are evidence. Always say what a figure shows, not just what it is: 78,000 people shows how crowded the district was."
        },
        {
          heading: "Homes, work and the doss house",
          paragraphs: [
            "Your lesson's reading describes three groups of people in Whitechapel. The poor were builders, labourers, shopkeepers, dock workers and tailors. The very poor were often women and children working as seamstresses, weavers or clothes washers. The homeless had nothing steady at all. Men could sometimes find a day's work at the docks, unloading ships. For women, work was scarce and very badly paid.",
            "For anyone who could not rent a room, there was the doss house, a common lodging house. There were over 200 of them in Whitechapel. Four pence bought a narrow bed in a dormitory shared with up to 80 other people. For two pence you could lean against a rope stretched across the room. The landlords' rule was simple: no pay, no stay. Anyone without the pennies spent the night in a doorway or the churchyard.",
            "Sanitation hardly existed. Waste was thrown into the street, and the smell of the whole district was hard to bear. Cheap drink was everywhere, and for many people the pub was the only escape from this life. Keep these details in mind: the money for a doss-house bed, and the drink, will matter when you read about the five women in chapter 3."
          ],
          tip: "Four pence for a bed sounds tiny, but for the very poor it was the difference between a night indoors and a night on the street."
        }
      ],
      gate: [
        { kind: "mcq", q: "Where was Whitechapel?", options: ["In the East End of London, on the border of the City of London", "In the West End of London, near the royal palaces", "In the centre of Manchester, near the cotton mills", "On the south bank of the Thames, by the docks at Greenwich"], answer: 0, why: "Whitechapel is a small district in the East End of London, next to the City of London.",
          feedback: [
            "",
            "The West End was the wealthy side of London, with theatres and grand houses. Whitechapel was in the poor East End, on the border of the City of London.",
            "Manchester was a cotton town in the north of England. Whitechapel is in London, in the East End next to the City.",
            "Whitechapel is north of the river, not on the south bank, and Greenwich is much further east. Whitechapel sits right on the border of the City of London."
          ] },
        { kind: "gap", q: "Whitechapel was the ___ district in the East End of London.", answer: "poorest", options: ["poorest", "richest", "largest"], why: "The East End was the poorest part of London, and Whitechapel was the poorest district within it.",
          feedback: {
            "richest": "You have reversed it. The East End was the poorest part of London, and Whitechapel was the poorest district inside the East End; the wealth of Victorian Britain did not reach it.",
            "largest": "Whitechapel was a small area, which is exactly why 78,000 people in it meant overcrowding. It was not the largest district; it was the poorest."
          } },
        { kind: "numeric", q: "In which year did Queen Victoria come to the throne?", answer: 1837, tolerance: 0, units: "", why: "Victoria became queen in 1837 and reigned until 1901, so by 1888 she had been on the throne for over 50 years.", check: "1837",
          misconceptions: [
            { answer: 1888, says: "1888 is the year of the Whitechapel killings, not the start of Victoria's reign. She had already been queen for over 50 years by then: she came to the throne in 1837.", check: "1888" },
            { answer: 1901, says: "1901 is the year Victoria's reign ended. It began in 1837, 64 years earlier.", check: "1901" }
          ] }
      ],
      modules: [
        {
          title: "What each figure measures",
          task: {
            kind: "match",
            q: "Match each figure from your lesson to what it measures.",
            pairs: [
              ["900,000", "People living in the East End of London in the 1880s"],
              ["78,000", "People living in the district of Whitechapel by the end of the 1800s"],
              ["8,000", "People in Whitechapel who regularly slept rough"],
              ["7", "The average number of people living in one Whitechapel house"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the biggest number. The East End was a huge area, so it has the biggest population.",
                "Whitechapel was one small district inside the East End, so its figure is smaller than the East End's but still in the tens of thousands.",
                "The people sleeping rough were a part of Whitechapel's population, so that figure is smaller again.",
                "The smallest number describes one house, not a whole area."
              ],
              example: {
                q: "Match: 9 million, 1,500, 30. Choices: the people living in London today; the pupils in a large secondary school; the pupils in one class.",
                steps: ["The biggest number must be the biggest group of people: London today.", "1,500 is far too many for one class, so it must be the whole school.", "30 is one class."],
                answer: "9 million: London today; 1,500: the whole school; 30: one class."
              }
            },
            core: { hint: "Order the figures from biggest to smallest. Then order the places from biggest to smallest: the East End, Whitechapel, part of Whitechapel, one house." },
            stretch: { extend: "Work out roughly what fraction of Whitechapel's population slept rough, and explain what that tells you about the shortage of housing." }
          },
          explain: "Say, in one sentence, why the figure for Whitechapel has to be smaller than the figure for the East End.",
          why: "The East End held about 900,000 people; the small district of Whitechapel inside it held over 78,000; about 8,000 of those regularly slept rough; and the average house held seven people."
        },
        {
          title: "Describe the conditions",
          task: {
            kind: "written",
            q: "Describe two conditions of life in Whitechapel in the 1880s. For each one, give a detail or figure from your lesson and say what it meant for the people who lived there. Write one paragraph of four to six sentences.",
            criteria: [
              "I name two clear conditions, such as overcrowding, homelessness, poor sanitation, lack of work or the doss houses.",
              "For each condition I give one detail or figure from the lesson.",
              "For each condition I say what it meant for the people living there.",
              "I write in full sentences and use at least one key word from the chapter correctly."
            ],
            model: "One condition of life in Whitechapel was overcrowding. By the end of the 1800s over 78,000 people lived in the small district, and an average house held seven people, so families shared single rooms and had no privacy or quiet. A second condition was homelessness. About 8,000 people regularly slept rough, and those with four pence could buy a bed in a doss house for one night only. This meant that every day began with the same worry: how to earn the pennies for a bed, or face another night in a doorway."
          },
          levels: {
            support: {
              steps: [
                "Choose two conditions from the chapter: overcrowding, homelessness, poor sanitation, lack of work, the doss houses.",
                "Sentence 1: One condition of life in Whitechapel was…",
                "Sentence 2: Give a detail or figure: For example…",
                "Sentence 3: Say what it meant: This meant that people…",
                "Repeat the three sentences for your second condition."
              ],
              example: {
                q: "Describe one condition of life in a medieval village, with a detail and what it meant.",
                steps: ["Name it: One condition was that most villagers were peasants who had to work the lord's land.", "Detail: they worked two or three days a week for him without pay.", "What it meant: this left less time for their own crops, so a bad harvest meant hunger."],
                answer: "Condition, detail, what it meant: peasants owed work to the lord; two or three days a week; so their own food was at risk."
              }
            },
            core: { hint: "Condition, detail, meaning: three sentences for each condition. Use a figure for at least one of them." },
            stretch: { extend: "Add a third sentence to each condition explaining how it might have made it easier for a criminal to go unnoticed. You will build on this in chapter 2." }
          },
          explain: "Say, in one sentence, why a figure makes a description stronger than a general statement.",
          why: "A good description names the condition, proves it with a detail or figure from the lesson, and explains what it meant for real people. Overcrowding, homelessness, sanitation, scarce work and the doss houses are all good choices."
        },
        {
          title: "Why the doss house mattered",
          task: {
            kind: "mcq",
            q: "Why was the doss house so important to the poorest people of Whitechapel?",
            options: [
              "It was the only bed they could afford, and only if they had the pennies that night",
              "It was a free hostel run by the Metropolitan Police for the homeless",
              "It was where most people in Whitechapel owned their own rooms",
              "It was a hospital where the very poor were treated for free"
            ],
            answer: 0,
            why: "A doss house sold a bed for one night, four pence at a time. For people with no room of their own, it was the only alternative to the street, and only if they had earned the money that day.",
            feedback: [
              "",
              "Doss houses were not free and not run by the police. They were businesses run by landlords whose rule was no pay, no stay: four pence for a bed, or out onto the street.",
              "Nobody owned a room in a doss house. You paid for one night at a time, in a dormitory shared with up to 80 other people.",
              "A doss house was a lodging house, not a hospital. It offered a bed, not treatment, and only to those who could pay the pennies."
            ]
          },
          levels: {
            support: {
              steps: [
                "Remember the price: four pence for a bed, two pence for a place on the rope.",
                "Remember who ran it: landlords, not the police or a charity.",
                "Remember the rule: no pay, no stay.",
                "Which option fits all three facts?"
              ],
              example: {
                q: "Why was the village well so important to people in the Middle Ages: it was the only clean water nearby; the lord gave water away free; or it was where the market was held?",
                steps: ["Ask what people needed most: water they could reach.", "The lord did not hand out water, and the market was elsewhere.", "So the well mattered because it was the only clean water nearby."],
                answer: "The well was the only clean water nearby."
              }
            },
            core: { hint: "Three of the options describe something free, owned or medical. The doss house was none of those; it was a bed you paid for, night by night." },
            stretch: { extend: "Explain how the daily need to find four pence could push a person into danger, and why this matters for understanding the five women in chapter 3." }
          },
          explain: "Say, in one sentence, what the rule no pay, no stay meant for someone who had not earned enough that day.",
          why: "The doss house was the poorest person's only option indoors, and it had to be paid for every single night. That daily search for pennies is a thread that runs through the whole unit."
        }
      ]
    },

    /* ───────────── 2 · conditions and crime ───────────── */
    {
      key: "conditions-and-crime", n: 2, title: "How the conditions helped crime",
      lead: "Fog, narrow alleys, drink and desperate poverty made Whitechapel a hard place to police. This chapter sorts the conditions into physical and social, looks at the newcomers who were blamed, and shows you how to agree or disagree with a historian.",
      covers: [1, 4],
      pretext: {
        words: [
          { word: "pea souper", means: "a thick, dirty fog made worse by smoke", sentence: "In a pea souper you could not see your own hand in front of your face." },
          { word: "physical condition", means: "what the place itself was like", sentence: "Fog and narrow streets are physical conditions." },
          { word: "social condition", means: "what the people's lives were like", sentence: "Homelessness and drunkenness are social conditions." },
          { word: "immigration", means: "moving to another country to set up a new life", sentence: "Irish and Jewish immigration changed Whitechapel in the 1800s." },
          { word: "persecution", means: "cruel treatment of people because of who they are", sentence: "Many Jewish families fled persecution in Russia." },
          { word: "prejudice", means: "judging people as a group before you know them", sentence: "Prejudice made some locals blame the newcomers for everything." }
        ],
        passage: [
          "Whitechapel was a hard place to police.",
          "Its streets were narrow and joined up like a maze.",
          "At night they were lit by single gas lamps.",
          "Thick fog, called a pea souper, often filled the air.",
          "Animals were driven through the streets to the slaughterhouses.",
          "The streets were dirty and the noise never stopped.",
          "These were the physical conditions of the place.",
          "There were social conditions too.",
          "Many people were homeless, and many drank to forget their troubles.",
          "Fights were common, especially at night.",
          "Newcomers from Ireland and Eastern Europe moved in because rents were cheap.",
          "Some local people blamed them unfairly for their own hardship.",
          "All of this made crime easier to commit and harder to solve."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "ضباب كثيف قذر يزيده الدخان سوءًا (pea souper)",
            "كيف كان المكان نفسه (physical condition)",
            "كيف كانت حياة الناس (social condition)",
            "الانتقال إلى بلد آخر لبناء حياة جديدة (immigration)",
            "معاملة الناس معاملةً قاسية بسبب هويّتهم (persecution)",
            "أن تحكم على الناس جماعةً قبل أن تعرفهم (prejudice)"
          ],
          "passage": [
            "كانت وايتشابل مكانًا يصعب على الشرطة ضبطه.",
            "فشوارعها ضيّقة متّصلة كالمتاهة.",
            "وكانت تُضاء في الليل بمصابيح غاز مفردة.",
            "وكان الضباب الكثيف، ويُسمّى \"بي سوبر\" (pea souper)، يملأ الهواء كثيرًا.",
            "وكانت الحيوانات تُساق في الشوارع إلى المسالخ.",
            "وكانت الشوارع قذرة والضجيج لا يتوقّف.",
            "وهذه كانت الأحوال المادّية للمكان.",
            "وكانت هناك أحوال اجتماعية أيضًا.",
            "فكثير من الناس كان بلا بيت، وكثير منهم كان يشرب لينسى همومه.",
            "وكان الشِّجار شائعًا، وخاصّةً في الليل.",
            "وانتقل إليها قادمون جدد من أيرلندا وشرق أوروبا لأنّ الإيجارات رخيصة.",
            "وبعض أهل المكان لامهم بغير حقّ على شقائهم هم.",
            "وهذا كلّه جعل الجريمة أسهل وقوعًا وأصعب حلًّا."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "gęsta, brudna mgła, którą pogarszał dym (pea souper)",
            "to, jakie było samo miejsce (physical condition)",
            "to, jakie było życie ludzi (social condition)",
            "przeniesienie się do innego kraju, żeby zacząć tam nowe życie (immigration)",
            "okrutne traktowanie ludzi za to, kim są (persecution)",
            "ocenianie ludzi jako grupy, zanim się ich pozna (prejudice)"
          ],
          "passage": [
            "Whitechapel był trudnym miejscem do pilnowania porządku.",
            "Jego ulice były wąskie i łączyły się jak labirynt.",
            "W nocy świeciły tam pojedyncze lampy gazowe.",
            "Powietrze często wypełniała gęsta mgła zwana pea souper.",
            "Ulicami pędzono zwierzęta do rzeźni.",
            "Ulice były brudne, a hałas nigdy nie ustawał.",
            "To były warunki fizyczne tego miejsca.",
            "Były też warunki społeczne.",
            "Wielu ludzi nie miało domu, a wielu piło, żeby zapomnieć o kłopotach.",
            "Bójki były czymś zwyczajnym, zwłaszcza nocą.",
            "Przybysze z Irlandii i z Europy Wschodniej osiedlali się tam, bo czynsze były tanie.",
            "Część miejscowych niesprawiedliwie winiła ich za swoją własną biedę.",
            "Wszystko to sprawiało, że przestępstwa łatwiej było popełnić i trudniej wyjaśnić."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "um nevoeiro espesso e sujo, piorado pelo fumo (pea souper)",
            "como era o próprio lugar (physical condition, condição física)",
            "como era a vida das pessoas (social condition, condição social)",
            "mudar para outro país para começar uma vida nova (immigration, imigração)",
            "tratar pessoas com crueldade por causa de quem elas são (persecution, perseguição)",
            "julgar as pessoas como grupo antes de as conhecer (prejudice, preconceito)"
          ],
          "passage": [
            "Whitechapel era um lugar difícil de policiar.",
            "As suas ruas eram estreitas e ligavam-se umas às outras como um labirinto.",
            "De noite eram iluminadas por candeeiros de gás isolados.",
            "Um nevoeiro espesso, chamado pea souper, enchia muitas vezes o ar.",
            "Levavam-se animais pelas ruas até aos matadouros.",
            "As ruas eram sujas e o ruído nunca parava.",
            "Estas eram as condições físicas do lugar.",
            "Havia também condições sociais.",
            "Muitas pessoas não tinham casa, e muitas bebiam para esquecer os seus problemas.",
            "As brigas eram comuns, sobretudo de noite.",
            "Chegavam pessoas da Irlanda e da Europa de Leste, porque as rendas eram baratas.",
            "Havia moradores locais que as culpavam injustamente das suas próprias dificuldades.",
            "Tudo isto tornava o crime mais fácil de cometer e mais difícil de resolver."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "ceeryaamo qaro weyn oo wasakh ah oo qiiqu sii xumeeyay",
            "sida meeshu laftigeeda ahayd",
            "sida nolosha dadku ahayd",
            "guurista dal kale si nolol cusub loo bilaabo",
            "dad si naxariis-darro ah loola dhaqmo sababtoo ah cidda ay yihiin",
            "inaad dad koox ahaan u xukunto intaadan garanin"
          ],
          "passage": [
            "Whitechapel waxay ahayd meel ay booliisnimada ku adkeyd.",
            "Waddooyinkeedu waxay ahaayeen kuwo cidhiidhi ah oo sidii maaro isku xiran.",
            "Habeenkii waxaa iftiimiyay nalal gaas ah oo kali kali ah.",
            "Ceeryaamo qaro weyn, oo la yiraahdo pea souper, ayaa inta badan hawada buuxisay.",
            "Xoolo waxaa waddooyinka dhex loo kexeeyay goobaha gawraca.",
            "Waddooyinku way wasakhsanaayeen, buuqana weligii ma joogsan.",
            "Kuwan waxay ahaayeen xaaladaha jirka ee meesha.",
            "Xaalado bulshona way jireen.",
            "Dad badan waxay ahaayeen guri la'aan, qaar badanna waxay cabbeen si ay dhibaatooyinkooda u illoobaan.",
            "Dagaallo waa caadi ahaayeen, gaar ahaan habeenkii.",
            "Dad cusub oo ka yimid Ireland iyo bariga Yurub ayaa soo degay maxaa yeelay kirooyinku jaban yihiin.",
            "Dadka maxalliga qaar si aan caddaaladaysnayn ayay ugu eedeeyeen adkaantooda.",
            "Tan oo dhan waxay ka dhigtay in dembigu si fudud la galo oo si adag la xalliyo."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "густий брудний туман, гірший через дим (pea souper)",
            "те, яким було саме місце (physical condition)",
            "те, яким було життя людей (social condition)",
            "переїзд до іншої країни, щоб улаштувати нове життя (immigration)",
            "жорстоке ставлення до людей через те, хто вони є (persecution)",
            "судження про людей як про групу, перш ніж ви їх пізнали (prejudice)"
          ],
          "passage": [
            "Вайтчепел був важким місцем для поліції.",
            "Його вулиці були вузькі і сходилися, наче лабіринт.",
            "Уночі їх освітлювали одиночні газові лампи.",
            "Повітря часто наповнював густий туман, який називали pea souper.",
            "Вулицями гнали тварин до забійних дворів.",
            "Вулиці були брудні, а шум не припинявся ніколи.",
            "Це були фізичні умови цього місця.",
            "Були також суспільні умови.",
            "Багато людей не мало дому, і багато хто пив, щоб забути про свої клопоти.",
            "Бійки були звичайною справою, особливо вночі.",
            "Новоприбулі з Ірландії та Східної Європи селилися там, бо житло було дешеве.",
            "Деякі місцеві люди несправедливо звинувачували їх у власних злиднях.",
            "Усе це робило злочин легшим для скоєння і важчим для розкриття."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "گاڑھی، میلی دھند جسے دھواں مزید بگاڑ دیتا تھا (pea souper)",
            "خود وہ جگہ کیسی تھی (physical condition)",
            "وہاں کے لوگوں کی زندگی کیسی تھی (social condition)",
            "نئی زندگی بسانے کے لیے دوسرے ملک جانا (immigration)",
            "لوگوں کے ساتھ اس وجہ سے ظلم کرنا کہ وہ کون ہیں (persecution)",
            "لوگوں کو جاننے سے پہلے ہی ایک گروہ کے طور پر ان کے بارے میں فیصلہ کر لینا (prejudice)"
          ],
          "passage": [
            "وائٹ چیپل میں پولیس کا کام کرنا مشکل تھا۔",
            "اس کی گلیاں تنگ تھیں اور بھول بھلیوں کی طرح آپس میں جڑی ہوئی تھیں۔",
            "رات کو انھیں اکیلے اکیلے گیس کے لیمپ روشن کرتے تھے۔",
            "گاڑھی دھند، جسے pea souper کہتے تھے، اکثر ہوا میں چھا جاتی تھی۔",
            "جانوروں کو گلیوں میں سے گزار کر مذبح خانوں تک لے جایا جاتا تھا۔",
            "گلیاں گندی تھیں اور شور کبھی نہ رکتا تھا۔",
            "یہ اُس جگہ کے physical conditions تھے۔",
            "social conditions بھی تھے۔",
            "بہت لوگوں کے سر پر چھت نہ تھی، اور بہت سے اپنی مشکلیں بھلانے کے لیے شراب پیتے تھے۔",
            "لڑائی جھگڑا عام تھا، خاص کر رات کو۔",
            "آئرلینڈ اور مشرقی یورپ سے آنے والے نئے لوگ یہاں بس گئے، کیونکہ کرایہ سستا تھا۔",
            "کچھ مقامی لوگ ناانصافی سے اپنی تنگی کا الزام ان پر ڈالتے تھے۔",
            "ان سب باتوں نے جرم کرنا آسان اور حل کرنا مشکل بنا دیا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Physical conditions: fog, maze and dirt",
          paragraphs: [
            "Historians sort the conditions of Whitechapel into two kinds. Physical conditions describe what the area itself was like. The first was the layout. Overcrowding and a shortage of housing had created a maze of entries, alleyways and courtyards, lit at night by single gas lamps that gave out about six feet of light. A newspaper of 1888 complained that there were “hidden passageways and alleys that the police do not even know exist”.",
            "The second was the fog. Smoke from houses and factories mixed with the damp air to make a thick, greenish fog that locals called a pea souper. At times you could not see your own hand in front of your face. The third was dirt and noise: cattle and sheep were herded through the streets to the slaughterhouses, the streets were filthy, waste was thrown out of doors, and the smell was hard to bear.",
            "Each of these made crime easier. In the fog, nobody saw a crime happen, so there were no witnesses, and a criminal could step into the murk and vanish. In the maze, a person who knew the alleys could be streets away before anyone raised the alarm. The noise and dirt meant that a cry or a stain was nothing unusual."
          ],
          tip: "Physical means the place: fog, streets, lamps, dirt. If you could draw it on a map or a picture of the street, it is physical."
        },
        {
          heading: "Social conditions: homelessness, drink and desperation",
          paragraphs: [
            "Social conditions describe the people and their lives. Homelessness and overcrowding meant that thousands of people were on the streets at all hours, so a stranger stood out less. Drink was cheap, and drunkenness at any time of day or night led to fights and violence. One resident is reported to have said that cries of murder were nothing unusual in the street.",
            "Poverty hit women hardest. Work for women was scarce and very badly paid, and a woman who had not earned enough for a doss-house bed faced a night outside. Out of desperation some women turned to prostitution. In 1888 the Metropolitan Police estimated that just over 1,200 women in Whitechapel earned money this way, and the real number was probably higher. Your lesson lists this as a condition because it put women alone on dark streets at night, with strangers, which made them vulnerable.",
            "Notice how the social conditions link together. No work meant no pennies; no pennies meant no bed; no bed meant the street at night; and drink was both an escape from this and a reason people could not escape it. A historian looking for the cause of violence in Whitechapel could point at any link in that chain."
          ],
          tip: "Social means the people: work, money, drink, homes, newcomers. If it is about how people lived, it is social."
        },
        {
          heading: "Newcomers and prejudice",
          paragraphs: [
            "Whitechapel was also London's immigrant district, because rents were cheap and people who had nothing could at least afford a bed there. Many Irish families had arrived in the mid-1800s after the potato famine. Between 1881 and 1891, over 30,000 Jewish people arrived in London, many of them fleeing persecution, that is, attacks on them because of their religion, in Russia, Germany and Poland. They came to escape violence or to make a fresh start.",
            "Your lesson includes two sources from 1888: a Whitechapel resident who complained that the district no longer felt English, and a shoemaker who said Jewish workers worked 16 to 18 hours a day and sold goods so cheaply that his business was being ruined. Neither is quoted here, because both use insulting language about people. What they show is that some local people blamed the newcomers for low wages and for change, and resented their separate religion and customs.",
            "This is prejudice: judging people as a group before you know them. The sources do not show that Jewish immigration caused crime. They show that hostility towards Jewish neighbours existed, and your lesson asks how that hostility could itself lead to more crime, through fights, attacks and blame falling on newcomers rather than on the real culprit. Remember this when you meet the witness statements in chapter 5."
          ],
          tip: "When a source blames a group of people, ask what it tells you about the person who wrote it, not just about the people it describes."
        },
        {
          heading: "Agreeing or disagreeing with a historian",
          paragraphs: [
            "Your Year 8 progress checks now practise a skill rather than a quiz. The skill is this: a source gives a historian's opinion about Whitechapel, and you say whether you agree. Your department uses five success criteria. SC1: state the historian's opinion. SC2: give evidence or a short quotation from the source. SC3: say whether you agree or disagree. SC4: give examples from your own knowledge. SC5: explain how this factor affected the 1888 case.",
            "The order matters. Opinion first, evidence second, judgement third. Your own knowledge comes fourth because it is what you use to test the historian, and the link to the case comes last because it is the point of the whole paragraph."
          ],
          worked: {
            q: "A historian writes that the fog was the biggest problem the Whitechapel police faced. Build a paragraph that agrees, using the five success criteria.",
            steps: [
              "SC1: The historian's opinion is that the fog was the biggest problem the police faced.",
              "SC2: Give the evidence the source uses: it describes fog so thick that a hand could not be seen in front of a face.",
              "SC3: I agree that the fog was a very serious problem.",
              "SC4: From my own knowledge I know that the pea soupers were made worse by factory smoke, and that the streets were lit by single gas lamps giving only about six feet of light.",
              "SC5: This affected the case because in the fog nobody saw the killer come or go, so there were no useful witnesses."
            ],
            answer: "Opinion, evidence, agree, own knowledge, link to the case: five sentences in that order."
          },
          tip: "If you disagree, SC3 becomes: However, I disagree, because I think X was the bigger problem. Then SC4 proves X with your own knowledge."
        }
      ],
      gate: [
        { kind: "mcq", q: "What was a pea souper?", options: ["A thick, dirty, greenish fog that made it hard to see", "A cheap hot meal sold in the doss houses", "A nickname for a Whitechapel police officer", "A narrow alley connecting two courtyards"], answer: 0, why: "Pea souper was the local name for the thick, discoloured fog made by smoke and damp air.",
          feedback: [
            "",
            "The name sounds like food, but it described the fog, which was as thick and greenish as pea soup. Nobody was selling it in the doss houses.",
            "Police officers were nicknamed Peelers and Bobbies, after Sir Robert Peel. A pea souper was the thick fog that made their job harder.",
            "The alleys were part of the maze, a different physical condition. The pea souper was the fog that filled them."
          ] },
        { kind: "mcq", q: "Which of these is a SOCIAL condition of Whitechapel?", options: ["Drunkenness", "Fog", "Narrow streets", "Dirty streets"], answer: 0, why: "Social conditions describe the people and their lives, such as drink, homelessness and poverty. Fog, streets and dirt describe the place, so they are physical.",
          feedback: [
            "",
            "Fog describes the place, so it is a physical condition. Social conditions are about how people lived: drink, homelessness, overcrowding, poverty.",
            "Narrow streets are part of the physical layout of the area. A social condition is about the people, such as drunkenness.",
            "Dirty streets describe the place itself, so they are physical. Drunkenness describes the people's lives, so it is social."
          ] },
        { kind: "gap", q: "Many Jewish families came to Whitechapel to escape ___ in Russia and Eastern Europe.", answer: "persecution", options: ["persecution", "floods", "taxes"], why: "Jewish families fled persecution, that is, violent attacks on them because of their religion.",
          feedback: {
            "floods": "The reason was not the weather. Jewish families were fleeing persecution: attacks on them because of their religion, in Russia, Germany and Poland.",
            "taxes": "It was far worse than taxes. Jewish families in Russia and Eastern Europe faced persecution, violent attacks because of their religion, and came to London to be safe."
          } }
      ],
      modules: [
        {
          title: "How two conditions helped crime",
          task: {
            kind: "written",
            q: "Explain how TWO conditions in Whitechapel made crime easier to get away with. Do not use fog, which is the example in your lesson. For each condition: describe it, say whether it made crime easier to get away with, and explain how. Write one paragraph of six to eight sentences.",
            criteria: [
              "I name two conditions other than fog, such as narrow streets, homelessness, overcrowding, drink or dirty streets.",
              "For each condition I describe what it was like, with a detail from the chapter.",
              "For each condition I say clearly whether it made crime easier to get away with.",
              "For each condition I explain HOW it did this, using because or this meant that."
            ],
            model: "One condition that made crime easier to get away with was the narrow streets. Whitechapel was a maze of alleys and courtyards, lit at night by single gas lamps giving only about six feet of light. This made crime easier to get away with because a criminal who knew the alleys could be out of sight within seconds, while a police officer on his beat could only follow one route at a time. A second condition was homelessness. About 8,000 people regularly slept rough, so the streets were never empty, even in the middle of the night. This also made crime easier to get away with, because a stranger walking the streets at two in the morning did not stand out, and people sleeping in doorways were in no state to be reliable witnesses."
          },
          levels: {
            support: {
              steps: [
                "Choose two conditions that are not fog: narrow streets, homelessness, overcrowding, drink, dirty streets, animal noise.",
                "Sentence 1: One condition that made crime easier was… Describe it with a detail.",
                "Sentence 2: This made crime easier to get away with because…",
                "Sentence 3: Explain the how: what could a criminal do, or what could a witness or officer NOT do?",
                "Repeat for the second condition."
              ],
              example: {
                q: "Explain how one condition of a medieval town, the lack of street lighting, made crime easier.",
                steps: ["Describe: after dark there were no lamps at all, only the light from doorways.", "Judge: this made crime easier to get away with.", "Explain how: nobody could see a thief's face, so nobody could name him to the watchmen."],
                answer: "Describe, judge, explain how: no lamps; easier; faces could not be seen so no one could be named."
              }
            },
            core: { hint: "Describe, judge, explain how. The how is the mark that matters: what exactly could a criminal do, or a witness not do, because of this condition?" },
            stretch: { extend: "Decide whether the physical or the social conditions did more to help crime overall, and defend your choice in two sentences." }
          },
          explain: "Say, in one sentence, the difference between describing a condition and explaining how it helped crime.",
          why: "A strong answer picks two conditions, describes each with a detail, judges whether it made crime easier, and explains the mechanism: no witnesses, quick escape, strangers unnoticed, officers unable to follow."
        },
        {
          title: "Physical or social?",
          task: {
            kind: "mcq",
            q: "Which pair lists TWO social conditions of Whitechapel?",
            options: [
              "Homelessness and drunkenness",
              "Fog and narrow streets",
              "Dirty streets and animal noises",
              "Narrow streets and homelessness"
            ],
            answer: 0,
            why: "Homelessness and drunkenness both describe how people lived, so both are social. The other pairs include at least one physical condition.",
            feedback: [
              "",
              "Fog and narrow streets both describe the place, so both are physical conditions. Social conditions are about people's lives.",
              "Dirty streets and the noise of animals being driven to the slaughterhouses are both about the place, so both are physical.",
              "Homelessness is social, but narrow streets are physical. The question asks for a pair where both are social."
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask of each condition: is this about the place, or about the people?",
                "Fog, streets, dirt and noise are about the place: physical.",
                "Homelessness, drink, overcrowding and poverty are about the people: social.",
                "Find the pair where both words are about people."
              ],
              example: {
                q: "Sort these conditions of a Roman town into physical and social: stone roads, slavery, public baths, a rich and poor divide.",
                steps: ["Roads and baths are things in the place: physical.", "Slavery and the rich-poor divide are about people's lives: social."],
                answer: "Physical: stone roads, public baths. Social: slavery, rich and poor divide."
              }
            },
            core: { hint: "Three of the pairs contain at least one word that describes the streets themselves. Only one pair is entirely about people." },
            stretch: { extend: "Overcrowding is usually called a social condition, but it also changed the physical shape of the district. Explain how one condition can be both." }
          },
          explain: "Say, in one sentence, how you tell a social condition from a physical one.",
          why: "Physical conditions are the place: fog, maze of streets, dirt, noise. Social conditions are the people: homelessness, drink, overcrowding, poverty. Homelessness and drunkenness are the only pair with two social conditions."
        },
        {
          title: "Starting a source paragraph",
          task: {
            kind: "mcq",
            q: "A source says that drink was the biggest problem in Whitechapel. What is the FIRST thing your paragraph should do?",
            options: [
              "State the historian's opinion in your own words",
              "Say straight away whether you agree or disagree",
              "List everything you know about Whitechapel",
              "Explain how this factor affected the 1888 case"
            ],
            answer: 0,
            why: "SC1 is to state the historian's opinion. Evidence, judgement, own knowledge and the link to the case follow in that order.",
            feedback: [
              "",
              "Your judgement is SC3, the third step. Before you agree or disagree you must show you understand the opinion (SC1) and give the evidence the source uses (SC2).",
              "Your own knowledge is SC4, and it should be chosen to test the historian's view, not listed. First state what the historian thinks.",
              "The link to the case is SC5, the last step and the point of the paragraph. You cannot link a view to the case before you have stated the view."
            ]
          },
          contexts: [
            { label: "A source about housing", q: "A source says that overcrowded housing was the biggest problem in Whitechapel. What is the FIRST thing your paragraph should do?", why: "Whatever the topic, SC1 comes first: state the historian's opinion in your own words before you weigh it." },
            { label: "A source about the police", q: "A source says that too few police officers was the biggest problem in Whitechapel. What is the FIRST thing your paragraph should do?", why: "The first sentence always states the opinion you are about to test. Evidence and judgement come next." },
            { label: "A source about the fog", q: "A source says that the fog was the biggest problem in Whitechapel. What is the FIRST thing your paragraph should do?", why: "Start with SC1, the historian's opinion. Then SC2 evidence, SC3 agree or disagree, SC4 own knowledge, SC5 link to the case." }
          ],
          levels: {
            support: {
              steps: [
                "Say the five criteria in order: opinion, evidence, agree or disagree, own knowledge, link to the case.",
                "The question asks for the FIRST one.",
                "Opinion means the historian's opinion, not yours.",
                "Find the option that states what the source thinks."
              ],
              example: {
                q: "A source says that castles were the main reason the Normans kept control of England. What should the first sentence of your paragraph do?",
                steps: ["Opinion comes first.", "So: The historian argues that castles were the main reason the Normans kept control."],
                answer: "State the historian's opinion: that castles were the main reason for Norman control."
              }
            },
            core: { hint: "SC1 is about the historian, not about you. Your view comes third." },
            stretch: { extend: "Write SC1 and SC2 for the drink source in two sentences, then write a disagreeing SC3 that names a different biggest problem." }
          },
          explain: "Say, in one sentence, why the historian's opinion should come before your own judgement.",
          why: "The five success criteria run in order: state the opinion, give the source's evidence, agree or disagree, add your own knowledge, link to the case. The first step is always the historian's opinion."
        }
      ]
    },

    /* ───────────── 3 · the five women ───────────── */
    {
      key: "the-five-women", n: 3, title: "The five women",
      lead: "Mary Ann Nichols, Annie Chapman, Elizabeth Stride, Catherine Eddowes and Mary Jane Kelly were people before they were a case. This chapter asks who they were, what their lives had in common, and what the night of 30 September shows about the streets and the police.",
      covers: [2],
      pretext: {
        words: [
          { word: "Canonical Five", means: "the five women historians generally agree were killed by the same person", sentence: "The Canonical Five all died in or near Whitechapel in 1888." },
          { word: "victim", means: "a person who is harmed by a crime", sentence: "Each victim had a name, a family and a story of her own." },
          { word: "vulnerable", means: "easy to harm because you have little protection", sentence: "Poverty and drink made the women vulnerable on the streets at night." },
          { word: "lodging", means: "a place to sleep that you pay for", sentence: "Several of the women were trying to earn money for a night's lodging." },
          { word: "double event", means: "the night of 30 September 1888, when two women died within 45 minutes", sentence: "The double event shocked London." }
        ],
        passage: [
          "In the autumn of 1888, five women were killed in and around Whitechapel.",
          "Historians call them the Canonical Five.",
          "Their names were Mary Ann Nichols, Annie Chapman, Elizabeth Stride, Catherine Eddowes and Mary Jane Kelly.",
          "They were mothers, wives, daughters and friends.",
          "All of them were poor.",
          "Most had problems with drink.",
          "Several were out at night trying to earn the pennies for a bed.",
          "Mary Ann Nichols was the first, on 31 August.",
          "Elizabeth Stride and Catherine Eddowes died on the same night, 30 September.",
          "Mary Jane Kelly was the last, on 9 November.",
          "The killer was never caught.",
          "Historians today try to remember the women as people, not just as a case."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الخمس اللواتي يتّفق المؤرّخون عمومًا على أنّ الشخص نفسه قتلهنّ (Canonical Five)",
            "شخص تُصيبه جريمة بضرر (victim)",
            "سهل الإصابة لأنّ حمايته قليلة (vulnerable)",
            "مكان تدفع ثمنه لتنام فيه (lodging)",
            "ليلة 30 سبتمبر 1888، وقد ماتت فيها امرأتان في 45 دقيقة (double event)"
          ],
          "passage": [
            "في خريف 1888 قُتلت خمس نساء في وايتشابل وما حولها.",
            "ويسمّيهنّ المؤرّخون الخمس المتّفق عليهنّ (the Canonical Five).",
            "وأسماؤهنّ ماري آن نيكولز، وآني تشابمان، وإليزابيث سترايد، وكاثرين إيدوز، وماري جين كيلي.",
            "وكنّ أمّهات وزوجات وبنات وصديقات.",
            "وكنّ كلّهنّ فقيرات.",
            "ومعظمهنّ كان عنده مشكلة مع الشراب.",
            "وكانت عدّة منهنّ في الخارج ليلًا تحاول أن تكسب بنسات السرير.",
            "وكانت ماري آن نيكولز الأولى، في 31 أغسطس.",
            "وماتت إليزابيث سترايد وكاثرين إيدوز في الليلة نفسها، 30 سبتمبر.",
            "وكانت ماري جين كيلي الأخيرة، في 9 نوفمبر.",
            "ولم يُقبض على القاتل أبدًا.",
            "والمؤرّخون اليوم يحاولون أن يتذكّروا النساء أشخاصًا، لا قضيّةً فقط."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "pięć kobiet, co do których historycy zwykle się zgadzają, że zabiła je ta sama osoba (Canonical Five)",
            "osoba, której przestępstwo wyrządza krzywdę (victim)",
            "łatwy do skrzywdzenia, bo ma się małą ochronę (vulnerable)",
            "miejsce do spania, za które się płaci (lodging)",
            "noc 30 września 1888 roku, kiedy dwie kobiety zginęły w ciągu 45 minut (double event)"
          ],
          "passage": [
            "Jesienią 1888 roku w Whitechapel i okolicy zabito pięć kobiet.",
            "Historycy nazywają je Canonical Five.",
            "Nazywały się Mary Ann Nichols, Annie Chapman, Elizabeth Stride, Catherine Eddowes i Mary Jane Kelly.",
            "Były matkami, żonami, córkami i przyjaciółkami.",
            "Wszystkie były biedne.",
            "Większość miała kłopoty z alkoholem.",
            "Kilka z nich wychodziło nocą, próbując zarobić pensy na łóżko.",
            "Mary Ann Nichols była pierwszą, 31 sierpnia.",
            "Elizabeth Stride i Catherine Eddowes zginęły tej samej nocy, 30 września.",
            "Mary Jane Kelly była ostatnią, 9 listopada.",
            "Zabójcy nigdy nie schwytano.",
            "Historycy dzisiaj starają się pamiętać te kobiety jako ludzi, a nie tylko jako sprawę."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "as cinco mulheres que os historiadores geralmente concordam que foram mortas pela mesma pessoa (Canonical Five)",
            "uma pessoa que sofre um crime (victim, vítima)",
            "fácil de ser atingido porque tem pouca proteção (vulnerable, vulnerável)",
            "um lugar para dormir que se paga (lodging, dormida)",
            "a noite de 30 de setembro de 1888, em que duas mulheres morreram em 45 minutos (double event)"
          ],
          "passage": [
            "No outono de 1888, cinco mulheres foram mortas em Whitechapel e nos arredores.",
            "Os historiadores chamam-lhes as Canonical Five, as cinco canónicas/canônicas.",
            "Chamavam-se Mary Ann Nichols, Annie Chapman, Elizabeth Stride, Catherine Eddowes e Mary Jane Kelly.",
            "Eram mães, esposas, filhas e amigas.",
            "Todas elas eram pobres.",
            "Quase todas tinham problemas com a bebida.",
            "Várias andavam na rua de noite a tentar ganhar os tostões para uma cama.",
            "Mary Ann Nichols foi a primeira, a 31 de agosto.",
            "Elizabeth Stride e Catherine Eddowes morreram na mesma noite, a 30 de setembro.",
            "Mary Jane Kelly foi a última, a 9 de novembro.",
            "O assassino nunca foi apanhado.",
            "Os historiadores de hoje procuram recordar estas mulheres como pessoas, e não apenas como um caso."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "shanta haween ee taariikhyahannadu inta badan isku raacsan yihiin in isku qof dilay",
            "qof dembi waxyeelleeyay",
            "si fudud la waxyeelleyn karo maxaa yeelay ilaalin yar ayaad leedahay",
            "meel aad lacag ku bixiso oo seexato",
            "habeenkii 30 Sebtembar 1888, markii laba haween ay 45 daqiiqo gudahood dhinteen"
          ],
          "passage": [
            "Dayrtii 1888, shan haween ah waa la dilay Whitechapel iyo hareeraheeda.",
            "Taariikhyahannadu waxay ugu yeeraan Canonical Five.",
            "Shanta haween magacyadoodu waxay kala ahaayeen kuwan: Mary Ann Nichols, Annie Chapman, Elizabeth Stride, Catherine Eddowes iyo Mary Jane Kelly.",
            "Waxay ahaayeen hooyooyin, xaasas, gabdho iyo saaxiibo.",
            "Dhammaantood waxay ahaayeen faqiir.",
            "Badidood waxay dhibaato ka cabbitaanka lahaayeen.",
            "Dhowr ka mid ah habeenkii way baxeen iyagoo doonaya inay penny-ga sariirta kasbadaan.",
            "Mary Ann Nichols waxay ahayd tii ugu horreysay, 31 Agoosto.",
            "Elizabeth Stride iyo Catherine Eddowes waxay isku habeen dhinteen, 30 Sebtembar.",
            "Mary Jane Kelly waxay ahayd tii ugu dambeysay, 9 Noofembar.",
            "Dilaagii weligii lama qabtin.",
            "Taariikhyahannada maanta waxay isku dayaan inay haweenka u xasuustaan dad, ee ma aha oo keliya kiis."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "п’ять жінок, щодо яких історики загалом погоджуються, що їх убила та сама людина (Canonical Five)",
            "людина, якій злочин завдав шкоди (victim)",
            "той, кому легко завдати шкоди, бо він має мало захисту (vulnerable)",
            "місце для сну, за яке ви платите (lodging)",
            "ніч 30 вересня 1888 року, коли дві жінки загинули протягом 45 хвилин (double event)"
          ],
          "passage": [
            "Осінню 1888 року у Вайтчепелі та навколо нього вбили п’ять жінок.",
            "Історики називають їх «канонічною п’ятіркою» (the Canonical Five).",
            "Їх звали Мері Енн Ніколс (Mary Ann Nichols), Енні Чепмен, Елізабет Страйд, Кетрін Еддоус і Мері Джейн Келлі.",
            "Вони були матерями, дружинами, дочками і друзями.",
            "Усі вони були бідні.",
            "Більшість мала клопоти з питвом.",
            "Кілька з них були надворі вночі, намагаючись заробити кілька пенні на ліжко.",
            "Мері Енн Ніколс була першою, 31 серпня.",
            "Елізабет Страйд і Кетрін Еддоус загинули тієї самої ночі, 30 вересня.",
            "Мері Джейн Келлі була останньою, 9 листопада.",
            "Убивцю так і не схопили.",
            "Історики сьогодні намагаються пам’ятати цих жінок як людей, а не просто як справу."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ پانچ خواتین جن کے بارے میں مؤرخ عموماً متفق ہیں کہ انھیں ایک ہی شخص نے قتل کیا (Canonical Five)",
            "وہ شخص جسے کسی جرم سے نقصان پہنچے (victim)",
            "جسے نقصان پہنچانا آسان ہو، کیونکہ اس کے پاس حفاظت بہت کم ہے (vulnerable)",
            "سونے کی وہ جگہ جس کے آپ پیسے دیتے ہیں (lodging)",
            "30 ستمبر 1888 کی رات، جب 45 منٹ کے اندر دو خواتین فوت ہوئیں (double event)"
          ],
          "passage": [
            "1888 کے خزاں میں وائٹ چیپل اور اس کے آس پاس پانچ خواتین قتل کی گئیں۔",
            "مؤرخ انھیں Canonical Five کہتے ہیں۔",
            "ان کے نام میری این نکلز (Mary Ann Nichols)، اینی چیپمین (Annie Chapman)، الزبتھ سٹرائیڈ (Elizabeth Stride)، کیتھرین ایڈوز (Catherine Eddowes) اور میری جین کیلی (Mary Jane Kelly) تھے۔",
            "وہ مائیں، بیویاں، بیٹیاں اور سہیلیاں تھیں۔",
            "وہ سب غریب تھیں۔",
            "زیادہ تر کو شراب کا مسئلہ تھا۔",
            "کئی رات کو باہر نکلتی تھیں تاکہ بستر کے پیسے کما سکیں۔",
            "میری این نکلز پہلی تھیں، 31 اگست کو۔",
            "الزبتھ سٹرائیڈ اور کیتھرین ایڈوز ایک ہی رات، 30 ستمبر کو، فوت ہوئیں۔",
            "میری جین کیلی آخری تھیں، 9 نومبر کو۔",
            "قاتل کبھی نہ پکڑا گیا۔",
            "آج مؤرخ کوشش کرتے ہیں کہ ان خواتین کو انسانوں کے طور پر یاد رکھیں، صرف ایک مقدمے کے طور پر نہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Who were the Canonical Five?",
          paragraphs: [
            "There has always been debate about how many women the Whitechapel killer murdered. The Metropolitan Police file holds up to 11 possible victims, and historians have generally agreed on somewhere between four and eight. Your lesson follows the historian Martin Fido in naming five women as the Canonical Five: the five whose deaths, in the same area and in the same way within a few weeks, are generally agreed to be the work of one person.",
            "Mary Ann Nichols, known as Polly, was found in Buck's Row, Whitechapel, early on 31 August 1888. Annie Chapman was found in Hanbury Street, Whitechapel, on 8 September 1888. Elizabeth Stride was found in Dutfield's Yard, off Berner Street, at about one o'clock on the morning of 30 September 1888, and Catherine Eddowes was found 45 minutes later in Mitre Square, which lay just across the border in the City of London. Mary Jane Kelly was found in her own room in Miller's Court on 9 November 1888; she was the only one of the five not killed on the street.",
            "This unit does not describe how the women died. You do not need those details to answer the enquiry question, and your lesson's extension slide makes an important point: some historians argue that calling the women the killer's victims erases who they were and puts the spotlight on him. So we use their names, and we ask about their lives."
          ],
          tip: "Learn the five names and the order: Nichols, Chapman, Stride and Eddowes together, Kelly. Dates: 31 August, 8 September, 30 September, 9 November."
        },
        {
          heading: "What their lives had in common",
          paragraphs: [
            "Your lesson's information sheets show that the five women shared a great deal. All were poor. Most had problems with drink: your lesson's table records that Annie Chapman was known to be an alcoholic, that Catherine Eddowes could not hold a job because of alcohol, that Elizabeth Stride had a history of arrests for being drunk and disorderly, and that Mary Ann Nichols had spent her bed money on drink the night she died. Catherine Eddowes sold goods at the local market when she could. Several were out that night trying to earn the pennies for a lodging house; some earned that money through prostitution, which was often the only money available to a woman alone.",
            "A friend of Mary Ann Nichols, Ellen Holland, later told the police that she had met Polly in the early hours, that Polly had been turned away from her lodging house because she had no money, and that she had tried for ten minutes to persuade her to come in with her instead. Polly said she would go and earn the money, and walked off down Whitechapel Road. That is the last time a friend saw her.",
            "Put these facts beside chapter 1 and the pattern is clear. Scarce work, cheap drink, the four pence a night for a bed, and dark streets full of strangers made these women vulnerable. The pattern tells us more about Whitechapel than about the women themselves: it shows what poverty did to people, and why the killer could find women alone on the streets at night."
          ],
          worked: {
            q: "Explain why the five women were vulnerable, using two things their lives had in common.",
            steps: [
              "Point: The five women were vulnerable because of the conditions they lived in, not because of who they were.",
              "First thing in common: all five were poor and several were out at night trying to earn the pennies for a doss-house bed, which meant being alone with strangers in dark streets.",
              "Second thing in common: most had problems with drink, which made it harder to notice danger or to get away from it.",
              "Link back: these were the social conditions of Whitechapel from chapter 2, and they explain why the killer could find women alone at night."
            ],
            answer: "Point, two shared facts (bed money; drink), link to the conditions of Whitechapel: the women's vulnerability came from poverty."
          },
          tip: "When you write about the women, start with their names and their circumstances. Vulnerable is a word about their situation, not a judgement of them."
        },
        {
          heading: "The night of 30 September: what the double event shows",
          paragraphs: [
            "The night of 30 September 1888 is known as the double event, because Elizabeth Stride and Catherine Eddowes died within 45 minutes of each other. Your lesson uses it to show what the streets and the police were like. At about one in the morning a man drove his pony and cart into Dutfield's Yard. The pony stopped and would not go on. The man lit a match to see why, and in the moment before the wind blew it out he saw Elizabeth Stride on the ground. The police believed the killer had been interrupted and had slipped away unseen.",
            "At about the same time, Catherine Eddowes was being released from a police station, where she had been held for being drunk. She walked off to find somewhere to spend the night. Mitre Square, where she was found at 1.45am, had three entrances, two of them narrow alleyways. A City of London constable, PC Watkins, passed through the square about every 15 minutes on his beat. At 1.30am he saw nothing and nobody. At 1.45am he found her. Three plain-clothes officers were also in the area that night and saw nothing.",
            "Your lesson draws two conclusions. First, the killer knew the narrow streets well enough to leave a square with three exits in under 15 minutes and pass police officers without being noticed. Second, the police had released a woman who was drunk and alone onto the streets at one in the morning while a killer was at large; your lesson asks whether that was the right decision. Both points are about the streets and the policing of Whitechapel, which is where the next chapter goes."
          ],
          tip: "The double event is useful evidence for three factors at once: the maze of streets, the limits of a police beat, and the killer's speed and local knowledge."
        }
      ],
      gate: [
        { kind: "mcq", q: "Who was the first of the five women to be killed, on 31 August 1888?", options: ["Mary Ann Nichols", "Annie Chapman", "Elizabeth Stride", "Mary Jane Kelly"], answer: 0, why: "Mary Ann Nichols, known as Polly, was found in Buck's Row on 31 August 1888, the first of the Canonical Five.",
          feedback: [
            "",
            "Annie Chapman was the second of the five, found in Hanbury Street on 8 September. The first, on 31 August, was Mary Ann Nichols.",
            "Elizabeth Stride died on 30 September, the night of the double event. The first of the five, on 31 August, was Mary Ann Nichols.",
            "Mary Jane Kelly was the last of the five, on 9 November. The first, on 31 August, was Mary Ann Nichols."
          ] },
        { kind: "gap", q: "Catherine Eddowes was found in Mitre Square, which was in the ___ of London and so was policed by a different force.", answer: "City", options: ["City", "East End", "West End"], why: "Mitre Square lay just over the border in the City of London, which had its own police force, separate from the Metropolitan Police.",
          feedback: {
            "East End": "The other four women were found in Whitechapel, in the East End. Mitre Square was just across the border in the City of London, which is why the City of London Police became involved.",
            "West End": "The West End was the wealthy side of London, far from these events. Mitre Square was in the City of London, the business district on Whitechapel's western border."
          } },
        { kind: "mcq", q: "Which of the five women was NOT killed on the street?", options: ["Mary Jane Kelly", "Mary Ann Nichols", "Catherine Eddowes", "Elizabeth Stride"], answer: 0, why: "Mary Jane Kelly was found in her own room in Miller's Court on 9 November; the other four were found in the open.",
          feedback: [
            "",
            "Mary Ann Nichols was found in Buck's Row, a street. The only one of the five found indoors was Mary Jane Kelly, in her room in Miller's Court.",
            "Catherine Eddowes was found in Mitre Square, in the open. Mary Jane Kelly was the one found in her own room.",
            "Elizabeth Stride was found in Dutfield's Yard, off Berner Street. Mary Jane Kelly was the one found indoors, in Miller's Court."
          ] }
      ],
      modules: [
        {
          title: "The autumn of 1888 in order",
          task: {
            kind: "order",
            q: "Put the events of autumn 1888 in the order they happened.",
            items: [
              "Mary Ann Nichols is found in Buck's Row (31 August)",
              "Annie Chapman is found in Hanbury Street (8 September)",
              "Elizabeth Stride and Catherine Eddowes die on the same night, the double event (30 September)",
              "The police question more than 2,000 people after the double event (October)",
              "Mary Jane Kelly is found in Miller's Court (9 November)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Write the months in order: August, September, October, November.",
                "August has one event; it must be first.",
                "September has two: an early date and a late date. Put 8 before 30.",
                "What happened as a result of the double event? That comes straight after it.",
                "November is last."
              ],
              example: {
                q: "Put in order: the Battle of Hastings (October 1066); Harold crowned king (January 1066); the Battle of Stamford Bridge (September 1066).",
                steps: ["January comes first in the year.", "September comes before October.", "So: Harold crowned; Stamford Bridge; Hastings."],
                answer: "Harold crowned (January); Stamford Bridge (September); Hastings (October)"
              }
            },
            core: { hint: "Use the dates in brackets. Two events share a month: put the smaller day first. One event is the police response to another, so it follows it." },
            stretch: { extend: "Explain why the police effort grew so sharply after the double event, and what that tells you about how the case was being reported." }
          },
          explain: "Say, in one sentence, how you decided the order of the two September events.",
          why: "Mary Ann Nichols on 31 August; Annie Chapman on 8 September; the double event on 30 September; the mass questioning of more than 2,000 people in the weeks that followed; Mary Jane Kelly on 9 November."
        },
        {
          title: "Why were the women vulnerable?",
          task: {
            kind: "written",
            q: "Explain why the five women were vulnerable. Give two things their lives had in common, with an example from your lesson for each, and finish by saying what this tells us about Whitechapel rather than about the women. Write one paragraph of five to seven sentences.",
            criteria: [
              "I name at least two of the five women correctly.",
              "I give two things their lives had in common, such as poverty, the need to earn money for a bed, or problems with drink.",
              "I give an example from the lesson for each, such as Mary Ann Nichols being turned away from her lodging house, or Catherine Eddowes being released from a police station at one in the morning.",
              "I finish by linking the women's vulnerability to the conditions of Whitechapel, using a key word such as vulnerable, doss house or social condition."
            ],
            model: "The five women were vulnerable because of the conditions they lived in. One thing their lives had in common was poverty: all five were poor, and several were out at night trying to earn the four pence for a bed in a doss house. For example, Mary Ann Nichols was turned away from her lodging house because she had no money, and her friend Ellen Holland could not persuade her to come inside. A second thing in common was drink: most of the women had problems with alcohol, and Catherine Eddowes had been released from a police station at one in the morning after being held for being drunk, with nowhere to go. These shared facts tell us more about Whitechapel than about the women. They show that scarce work, cheap drink and the nightly search for bed money left women alone on dark streets, which is a social condition of the district, not a fault in the people."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: The five women were vulnerable because…",
                "Sentences 2 and 3: One thing they had in common was… For example, [name]…",
                "Sentences 4 and 5: A second thing they had in common was… For example, [name]…",
                "Sentence 6: This tells us more about Whitechapel than about the women, because…"
              ],
              example: {
                q: "Explain why peasants were vulnerable in a medieval famine, with one thing they had in common and an example.",
                steps: ["Point: peasants were vulnerable because they had no stored wealth.", "In common: they depended on one year's harvest.", "Example: when the harvest failed in a wet year, they had nothing to buy food with.", "Link: this tells us about the farming system, not about the peasants."],
                answer: "Point, shared fact, example, link to the system rather than the people."
              }
            },
            core: { hint: "Two shared facts, each with a named example. End with the conditions of Whitechapel, not with the women's choices." },
            stretch: { extend: "Some historians say that calling the women victims erases who they were. In two sentences, explain how your paragraph tries to avoid that, and whether you think it succeeds." }
          },
          explain: "Say, in one sentence, why the women's vulnerability tells us about Whitechapel rather than about them.",
          why: "The best answers name the women, show the pattern (poverty, bed money, drink) with real examples from the lesson, and then turn the pattern round to ask what kind of place leaves people in that position."
        },
        {
          title: "What the double event shows",
          task: {
            kind: "mcq",
            q: "What does the night of 30 September 1888 show about policing in Whitechapel?",
            options: [
              "An officer passed Mitre Square every 15 minutes and three more were nearby, yet nobody saw anything, so beats alone could not protect a maze of alleys",
              "The police had so many officers on the streets that the killer was almost certainly seen and let go",
              "The City of London Police refused to patrol Mitre Square, so it was left completely unguarded",
              "The police had closed every entrance to Mitre Square but the killer broke through a locked gate"
            ],
            answer: 0,
            why: "PC Watkins passed through the square about every 15 minutes, saw nothing at 1.30am and found Catherine Eddowes at 1.45am, while three plain-clothes officers nearby saw nothing. A regular beat could not cover a square with three exits in a maze of narrow streets.",
            feedback: [
              "",
              "The problem was the opposite: officers were too few and too spread out for a maze of alleys. There is no evidence the killer was seen that night; the point is that he was not.",
              "Mitre Square was patrolled. PC Watkins of the City of London Police passed through it about every 15 minutes. The trouble was that 15 minutes and three exits were enough for someone who knew the streets.",
              "There were no gates or closed entrances. Mitre Square had three open ways in and out, two of them narrow alleys, which is exactly why it was so hard to guard."
            ]
          },
          levels: {
            support: {
              steps: [
                "Recall the facts: PC Watkins passed every 15 minutes; nothing at 1.30; Catherine Eddowes found at 1.45; three plain-clothes officers nearby.",
                "Ask: was the square guarded? Yes, regularly.",
                "Ask: did that stop the killer? No.",
                "Which option says guarded, but not enough for this kind of place?"
              ],
              example: {
                q: "A night watchman walks round a medieval town wall every 20 minutes. Thieves get over the wall anyway. What does this show: the town had no watch; or that one man on a round could not watch every part of a long wall at once?",
                steps: ["There was a watch, so the first option is wrong.", "One man on a fixed round leaves gaps.", "So the second option is right."],
                answer: "One man on a round could not watch every part of the wall at once."
              }
            },
            core: { hint: "Three options claim there were no police, too many police, or a locked gate. The facts of the night say: police on a beat, three open exits, nothing seen." },
            stretch: { extend: "Explain how the physical conditions of chapter 2 and the limits of a beat worked together on 30 September, and suggest one change that might have made a difference." }
          },
          explain: "Say, in one sentence, why a beat every 15 minutes was not enough in Mitre Square.",
          why: "The square was patrolled regularly by PC Watkins and watched by plain-clothes officers, yet the killer came and went unseen within 15 minutes. The double event shows the limits of beat policing in a maze of narrow streets."
        }
      ]
    },

    /* ───────────── 4 · the police ───────────── */
    {
      key: "the-police", n: 4, title: "The police: new, limited and divided",
      lead: "London's police force was only 59 years old in 1888. This chapter looks at where it came from, the problems it had, the methods it tried in Whitechapel, and why two forces and a missing reward made things worse.",
      covers: [3],
      pretext: {
        words: [
          { word: "Metropolitan Police", means: "London's police force, set up in 1829", sentence: "The Metropolitan Police's H Division covered Whitechapel." },
          { word: "Peelers", means: "a nickname for the first police officers, after Sir Robert Peel", sentence: "People called the new officers Peelers or Bobbies." },
          { word: "beat", means: "the fixed route an officer walked again and again on patrol", sentence: "PC Watkins walked his beat round Mitre Square every 15 minutes." },
          { word: "forensic", means: "using science to find evidence of a crime", sentence: "In 1888 there was no forensic science and no fingerprinting." },
          { word: "decoy", means: "something used as bait to attract a criminal", sentence: "Male officers dressed as women to act as decoys." },
          { word: "bloodhound", means: "a dog trained to follow a scent", sentence: "The police tried bloodhounds, but the streets were full of smells." }
        ],
        passage: [
          "Before 1829, London had no police force.",
          "If there was trouble, the army was sent in.",
          "In 1829 Sir Robert Peel set up the Metropolitan Police.",
          "People nicknamed the officers Peelers and Bobbies.",
          "The new force had problems from the start.",
          "Officers had no proper training and were paid only one pound a week.",
          "Many local people did not trust them.",
          "In 1888 the police had no cameras, no fingerprints and no forensic science.",
          "To prove a murder, they had to catch the killer in the act or get a confession.",
          "In Whitechapel they tried decoys, leaflets, interviews and bloodhounds.",
          "None of these worked.",
          "Two different police forces were also investigating, and they did not work well together."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "قوّة شرطة لندن، وقد أُنشئت في 1829 (Metropolitan Police)",
            "لقب أوّل رجال الشرطة، نسبةً إلى السير روبرت بيل (Peelers)",
            "الطريق الثابت الذي كان الشرطي يمشيه مرّة بعد مرّة في دوريّته (beat)",
            "استخدام العلم لإيجاد أدلّة الجريمة (forensic)",
            "شيء يُستخدم طُعمًا لجذب مُجرم (decoy)",
            "كلب مدرَّب على تتبّع الأثر بالشمّ (bloodhound)"
          ],
          "passage": [
            "قبل 1829 لم تكن في لندن قوّة شرطة.",
            "فإذا وقع اضطراب أُرسل الجيش.",
            "وفي 1829 أنشأ السير روبرت بيل (Sir Robert Peel) شرطة العاصمة.",
            "ولقّب الناس رجالها بالبيلرز (Peelers) والبوبيز (Bobbies).",
            "وكانت للقوّة الجديدة مشكلات من أوّل أمرها.",
            "فلم يكن لرجالها تدريب صحيح، ولم يكونوا يُدفع لهم إلّا جنيه واحد في الأسبوع.",
            "وكثير من أهل المكان لم يكن يثق بهم.",
            "وفي 1888 لم يكن عند الشرطة آلات تصوير ولا بصمات ولا علم جنائي.",
            "ولإثبات جريمة قتل كان عليهم أن يضبطوا القاتل متلبّسًا أو أن يحصلوا على إقرار.",
            "وفي وايتشابل جرّبوا الطُّعوم والمنشورات والمقابلات وكلاب التتبّع.",
            "ولم ينجح شيء من ذلك.",
            "وكانت قوّتا شرطة مختلفتان تحقّقان أيضًا، ولم تكونا تعملان معًا عملًا جيّدًا."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "policja Londynu, utworzona w 1829 roku (Metropolitan Police)",
            "przezwisko pierwszych policjantów, od nazwiska sir Roberta Peela (Peelers)",
            "stała trasa, którą policjant obchodził raz po raz na patrolu (beat)",
            "korzystający z nauki, żeby znaleźć dowody przestępstwa (forensic)",
            "coś używanego jako przynęta, żeby zwabić przestępcę (decoy)",
            "pies wyszkolony do tropienia po zapachu (bloodhound)"
          ],
          "passage": [
            "Przed 1829 rokiem Londyn nie miał policji.",
            "Kiedy były kłopoty, wysyłano wojsko.",
            "W 1829 roku sir Robert Peel założył policję o nazwie Metropolitan Police.",
            "Ludzie przezwali policjantów Peelers i Bobbies.",
            "Nowa policja miała problemy od samego początku.",
            "Policjanci nie mieli porządnego szkolenia i zarabiali tylko jednego funta na tydzień.",
            "Wielu miejscowych im nie ufało.",
            "W 1888 roku policja nie miała aparatów, odcisków palców ani nauk sądowych.",
            "Żeby dowieść morderstwa, musiała przyłapać zabójcę na gorącym uczynku albo uzyskać przyznanie się.",
            "W Whitechapel próbowano przynęt, ulotek, przesłuchań i psów tropiących.",
            "Nic z tego nie zadziałało.",
            "Sprawę badały też dwie różne policje, które źle ze sobą współpracowały."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a força policial de Londres, criada em 1829 (Metropolitan Police)",
            "uma alcunha/apelido dos primeiros polícias, por causa de Sir Robert Peel (Peelers)",
            "o percurso fixo que um agente percorria outra e outra vez na sua patrulha (beat)",
            "que usa a ciência para encontrar provas de um crime (forensic, forense)",
            "algo usado como isca para atrair um criminoso (decoy, chamariz)",
            "um cão treinado para seguir um rasto (bloodhound, cão de rasto)"
          ],
          "passage": [
            "Antes de 1829, Londres não tinha força policial.",
            "Se houvesse problemas, era enviado o exército.",
            "Em 1829 Sir Robert Peel criou a Metropolitan Police.",
            "As pessoas deram aos agentes as alcunhas/apelidos de Peelers e Bobbies.",
            "A nova força teve problemas desde o início.",
            "Os agentes não tinham formação adequada e recebiam apenas uma libra por semana.",
            "Muitos moradores locais não confiavam neles.",
            "Em 1888 a polícia não tinha máquinas fotográficas, nem impressões digitais, nem ciência forense.",
            "Para provar um homicídio, tinham de apanhar o autor em flagrante ou obter uma confissão.",
            "Em Whitechapel tentaram chamarizes, panfletos, entrevistas e cães de rasto.",
            "Nada disto funcionou.",
            "Havia também duas forças policiais diferentes a investigar, e não trabalhavam bem juntas."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "ciidanka booliiska London, oo la aasaasay 1829-kii",
            "naaneys loo bixiyay saraakiisha booliis ee ugu horreeyay, oo ka timid Sir Robert Peel",
            "jidka go'an ee sarkaalku mar iyo mar ku lugeeyay intii uu ilaalinayay",
            "isticmaalka sayniska si caddayn dembi loo helo",
            "wax loo isticmaalo sidii dabin si dembiile loo soo jiito",
            "ey loo tababbaray inuu carafta raaco"
          ],
          "passage": [
            "1829-kii ka hor, London ciidan booliis ma lahayn.",
            "Haddii dhibaato dhacdo, ciidanka ayaa la soo dirayay.",
            "1829-kii Sir Robert Peel wuxuu aasaasay ciidanka Metropolitan Police.",
            "Dadku saraakiisha waxay ugu naaneysay Peelers iyo Bobbies.",
            "Ciidanka cusub dhibaato ayuu bilowgii ka lahaa.",
            "Saraakiishu tababbar habboon ma lahayn, waxaana lagu siiyay hal pound toddobaadkii.",
            "Dadka maxalliga qaar badan kuma kalsoonayn.",
            "1888-kii booliisku kamarado ma lahayn, calaamadaha farta ma lahayn, sayniska forensic-na ma lahayn.",
            "Si ay dil u caddeeyaan, waxay ku qasban yihiin inay dilaaga goobta ku qabtaan ama qirasho ka helaan.",
            "Whitechapel waxay isku dayeen decoys, warqado, waraysiyo iyo bloodhounds.",
            "Midkoodna ma shaqeyn.",
            "Laba ciidan booliis oo kala duwan ayaa sidoo kale baaraya, sina uma wada shaqeyn."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "поліція Лондона, створена у 1829 році (Metropolitan Police)",
            "прізвисько перших поліцейських, від імені сера Роберта Піля (Peelers)",
            "постійний маршрут, яким поліцейський ходив знову і знову на патрулі (beat)",
            "використання науки, щоб знайти свідчення злочину (forensic)",
            "те, що використовують як приманку, щоб привабити злочинця (decoy)",
            "собака, навчений іти по запаху (bloodhound)"
          ],
          "passage": [
            "До 1829 року Лондон не мав поліції.",
            "Якщо виникав неспокій, присилали військо.",
            "У 1829 році сер Роберт Піль створив Столичну поліцію (Metropolitan Police).",
            "Люди дали поліцейським прізвиська Peelers і Bobbies.",
            "Нова служба мала проблеми із самого початку.",
            "Поліцейські не мали належного навчання і отримували лише один фунт на тиждень.",
            "Багато місцевих людей їм не довіряло.",
            "У 1888 році поліція не мала ні фотоапаратів, ні відбитків пальців, ні криміналістики.",
            "Щоб довести вбивство, вони мусили схопити вбивцю на місці або отримати визнання.",
            "У Вайтчепелі вони пробували приманки, листівки, опитування і собак-шукачів.",
            "Ніщо з цього не подіяло.",
            "Крім того, справу розслідували дві різні поліційні служби, і вони погано працювали разом."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "لندن کی پولیس فورس، جو 1829 میں بنائی گئی (Metropolitan Police)",
            "پہلے پولیس افسروں کا عام نام، جو سر رابرٹ پِیل کے نام سے پڑا (Peelers)",
            "وہ مقررہ راستہ جس پر افسر گشت میں بار بار چلتا تھا (beat)",
            "جرم کی شہادت ڈھونڈنے کے لیے سائنس کا استعمال (forensic)",
            "وہ چیز جو مجرم کو لبھانے کے لیے چارے کے طور پر استعمال ہو (decoy)",
            "وہ کتا جو بو سونگھ کر پیچھا کرنے کی تربیت پا چکا ہو (bloodhound)"
          ],
          "passage": [
            "1829 سے پہلے لندن میں کوئی پولیس فورس نہ تھی۔",
            "اگر کوئی گڑبڑ ہوتی تو فوج بھیجی جاتی تھی۔",
            "1829 میں سر رابرٹ پِیل (Sir Robert Peel) نے Metropolitan Police بنائی۔",
            "لوگوں نے افسروں کو Peelers اور Bobbies کے نام دیے۔",
            "اس نئی فورس میں شروع ہی سے مسئلے تھے۔",
            "افسروں کی کوئی باقاعدہ تربیت نہ تھی اور انھیں ہفتے کا صرف ایک پاؤنڈ ملتا تھا۔",
            "بہت سے مقامی لوگ ان پر بھروسہ نہیں کرتے تھے۔",
            "1888 میں پولیس کے پاس نہ کیمرے تھے، نہ انگلیوں کے نشان، اور نہ forensic science۔",
            "قتل ثابت کرنے کے لیے انھیں قاتل کو کرتے ہوئے پکڑنا پڑتا تھا، یا اس سے اعتراف لینا پڑتا تھا۔",
            "وائٹ چیپل میں انھوں نے decoys، اشتہار، انٹرویو اور bloodhounds آزمائے۔",
            "ان میں سے کوئی بھی کام نہ آیا۔",
            "دو مختلف پولیس فورسیں بھی تحقیق کر رہی تھیں، اور ان کا باہمی تعاون اچھا نہ تھا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Where the police came from",
          paragraphs: [
            "Before 1829 London did not have a police force. When there was serious disorder, the army was used to restore order. But by 1829 London's population had grown so much that too many crimes were being committed for soldiers and local watchmen to cope with. In that year the politician Sir Robert Peel set up the Metropolitan Police Force, both to cut crime and to take the job of keeping order away from the army. The new officers were soon nicknamed Peelers and Bobbies, both after Peel.",
            "By 1888 the force was 59 years old, and Whitechapel was covered by its H Division. Officers patrolled on foot, walking a fixed route called a beat, again and again, through the night. This is the kind of policing you saw in Mitre Square in chapter 3.",
            "The early force had serious problems, and your lesson lists them. Officers had no formal training. They were paid about one pound a week. They were not trusted by local communities, and people regularly attacked them. Your lesson also says that many officers drank on duty. And there were simply not enough of them for a city of London's size."
          ],
          worked: {
            q: "How many years old was the Metropolitan Police in 1888?",
            steps: [
              "The force was set up in 1829.",
              "The case is in 1888.",
              "Subtract: 1888 − 1829 = 59.",
              "So the police force was 59 years old: still a young institution, with young habits."
            ],
            answer: "59 years",
            checks: [{ expr: "1888 - 1829", value: 59, tol: 0 }]
          },
          tip: "Peel, Peelers, Bobbies: three words that all point to 1829 and Sir Robert Peel."
        },
        {
          heading: "Limited methods",
          paragraphs: [
            "Begin your lesson's bell work in your head: how do the police solve crimes today? Interviewing witnesses and suspects; searching the scene for clues; forensic science and DNA; CCTV; tracing where people have been; working together across forces. Now take most of that away. In 1888 there was no CCTV, no fingerprinting and no forensic science. There was no way to prove from a scene who had been there.",
            "That left the police with two ways to prove someone guilty of murder: catch the killer in the act, or get a confession. In Whitechapel both were very hard. The maze of streets and the fog made catching anyone in the act unlikely, as the double event showed, and nobody was confessing.",
            "So when your lesson asks why the police did not catch the killer, part of the answer is not about the officers at all. It is about the tools that did not yet exist. A good answer separates what the police could have done better from what no police force of 1888 could have done."
          ],
          tip: "Ask of every method: would it work without forensic science? If the answer is no, the problem was the century, not just the officers."
        },
        {
          heading: "What the police tried, and why it failed",
          paragraphs: [
            "The Metropolitan Police tried very hard. Decoys: male officers dressed up as women and waited in the streets, hoping the killer would approach them. Local people laughed at them; the disguises were obvious and the plan did not work. Leaflets: officers handed out over 80,000 leaflets in the area asking for information. Your lesson says this did not work either; a likely reason is that many residents could not read well, and those who could had little to report, because the killings had happened unseen.",
            "Interviews: the police interviewed 76 butchers about their work and their employees, as well as sailors from the docks, and after the double event they questioned more than 2,000 people. Without forensic evidence, however, an interview could only help if someone confessed or named the killer, and nobody did. Bloodhounds: the Commissioner, Sir Charles Warren, had officers train dogs to follow the killer's scent. But Whitechapel was full of strong smells from the slaughterhouses and the streets, and the police had nothing belonging to the killer to give the dogs a scent to follow.",
            "Each method failed for a reason you can explain. The decoys failed because the disguise was poor and the plan was unsafe. The leaflets failed because the people who received them had nothing to tell. The interviews failed because questions alone cannot prove guilt. The bloodhounds failed because of the smells and the missing scent. Your department's success criteria for this task are: state the method, describe it, explain why it did not work."
          ],
          tip: "Method, description, reason it failed: three sentences. The reason is where the marks are."
        },
        {
          heading: "Two forces and no reward",
          paragraphs: [
            "Catherine Eddowes was found in the City of London, so two police forces were now investigating: the Metropolitan Police and the City of London Police. They did not work together well, and there were disagreements. The best-known example came on the night of the double event. A chalked message about Jewish people was found on a wall near a piece of evidence. The City of London Police wanted it photographed; the Metropolitan Commissioner, Sir Charles Warren, ordered it washed off before daylight, fearing it would start riots against Jewish residents. Your lesson's example calls this the fault of the police, because two forces investigating the same killings should have pooled what they knew instead of overruling each other.",
            "Your lesson also asks what the police could have offered the people of Whitechapel to get more evidence, and why this did not happen. The answer is a reward. Local people and newspapers asked for a government reward for information, but the Home Secretary refused to approve one. In a district where people were poor and did not trust the police, a reward might have loosened tongues.",
            "So your lesson's final question is a fair one: was it the police's fault that the killer was never caught? Some issues were theirs: poor cooperation between the forces, and clumsy methods such as the decoys. Others were outside their control: the conditions of Whitechapel, the lack of forensic science, and a Home Secretary who would not pay for information. The best answers weigh both."
          ],
          tip: "Fault or outside their control? Sort every issue into one column or the other before you write. Two forces: fault. No forensic science: outside their control."
        }
      ],
      gate: [
        { kind: "numeric", q: "In which year was the Metropolitan Police set up?", answer: 1829, tolerance: 0, units: "", why: "Sir Robert Peel set up the Metropolitan Police Force in 1829; the officers were nicknamed Peelers and Bobbies after him.", check: "1829",
          misconceptions: [
            { answer: 1837, says: "1837 is the year Queen Victoria came to the throne. The Metropolitan Police was set up eight years earlier, in 1829, by Sir Robert Peel.", check: "1837" },
            { answer: 1888, says: "1888 is the year of the Whitechapel case. By then the police force had existed for 59 years; it was set up in 1829.", check: "1888" }
          ] },
        { kind: "mcq", q: "Why did the bloodhounds fail to find the killer?", options: ["The streets were full of strong smells and the police had nothing of the killer's to give the dogs a scent", "The dogs were too old and too slow to run through the alleys", "The City of London Police refused to let the dogs cross the border", "The killer was caught before the dogs were needed"], answer: 0, why: "Whitechapel's slaughterhouses and dirty streets confused the dogs, and the police had no item belonging to the killer to start them on a scent.",
          feedback: [
            "",
            "The problem was not the dogs' age or speed. It was that Whitechapel smelt of slaughterhouses and waste, and the police had nothing belonging to the killer to give the dogs a scent.",
            "The two forces did argue, but not about the dogs. The bloodhounds failed because of the smells in the streets and because there was no scent of the killer to follow.",
            "The killer was never caught, so this cannot be right. The bloodhounds failed because of the smells and the missing scent."
          ] },
        { kind: "gap", q: "The first officers of the new force were nicknamed Peelers and ___.", answer: "Bobbies", options: ["Bobbies", "Coppers", "Watchmen"], why: "Both nicknames come from Sir Robert Peel: Peelers from his surname, Bobbies from his first name.",
          feedback: {
            "Coppers": "Coppers is a later slang word for the police. Your lesson gives two nicknames from 1829, both from Sir Robert Peel's name: Peelers and Bobbies.",
            "Watchmen": "Watchmen were the night guards London had before 1829, the men the new force replaced. The new officers were nicknamed Peelers and Bobbies, after Robert Peel."
          } }
      ],
      modules: [
        {
          title: "Method and reason it failed",
          task: {
            kind: "match",
            q: "Match each police method to the reason it did not work.",
            pairs: [
              ["Decoys", "Male officers in women's clothes were obvious, and local people laughed at them"],
              ["Leaflets", "Over 80,000 were handed out, but the people who received them had nothing useful to tell"],
              ["Interviews", "Hundreds were questioned, but questions alone could not prove guilt without forensic evidence"],
              ["Bloodhounds", "The streets were full of strong smells and the police had nothing of the killer's for a scent"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the dogs: what do dogs need to track someone? A scent. Find the reason that mentions smells.",
                "The decoys were people in disguise: find the reason about clothes and laughter.",
                "Leaflets are pieces of paper handed to residents: find the reason about what residents could tell.",
                "What is left must belong to the interviews."
              ],
              example: {
                q: "Match two ways a medieval village tried to stop thieves to why each failed: a night watchman; a hue and cry (shouting for neighbours to chase a thief). Reasons: the thief had already run into the woods by the time neighbours arrived; one man could not watch every lane.",
                steps: ["One man on duty matches the watchman.", "Neighbours arriving too late matches the hue and cry."],
                answer: "Watchman: one man could not watch every lane. Hue and cry: the thief had already escaped into the woods."
              }
            },
            core: { hint: "Each reason contains a clue word: laughed, 80,000, forensic, scent. Match the clue to the method it describes." },
            stretch: { extend: "For two of the methods, explain how the police could have acted differently to make the method work, and say whether it would have been enough." }
          },
          explain: "Say, in one sentence, which of the four failures was least the police's own fault, and why.",
          why: "Decoys failed because the disguises were obvious; leaflets because residents had nothing to tell; interviews because questions cannot prove guilt without forensic evidence; bloodhounds because of the smells and the missing scent."
        },
        {
          title: "How old was the force?",
          task: {
            kind: "numeric",
            q: "The Metropolitan Police was set up in 1829. How many years old was the force in 1888?",
            answer: 59, tolerance: 0, units: "years",
            why: "1888 − 1829 = 59. The force was less than 60 years old, still working out how to police a city.",
            check: "1888 - 1829",
            misconceptions: [
              { answer: 58, says: "You may have counted the years in between rather than subtracting. Take 1829 from 1888: 1888 − 1829 = 59.", check: "1888 - 1829 - 1" },
              { answer: 51, says: "That is 1888 − 1837, the length of Victoria's reign so far. The police were set up in 1829, eight years before she became queen, so the force was 59 years old.", check: "1888 - 1837" },
              { answer: 72, says: "That is 1901 − 1829, counting to the end of Victoria's reign. The question asks about 1888: 1888 − 1829 = 59.", check: "1901 - 1829" }
            ]
          },
          contexts: [
            { label: "A rulebook", q: "The first rulebook for London's police officers was written in 1829. How many years old was that rulebook in 1888?", check: "1888 - 1829" },
            { label: "A retired constable", q: "A man joined the new Metropolitan Police as a young constable in 1829. How many years had passed by the time of the Whitechapel case in 1888?", check: "1888 - 1829" },
            { label: "A Whitechapel pub", q: "A pub on Whitechapel Road opened in 1829, the year the police force was founded. How many years old was the pub in 1888?", check: "1888 - 1829" }
          ],
          levels: {
            support: {
              steps: [
                "Write down the two years: 1829 (set up) and 1888 (the case).",
                "Subtract the earlier year from the later year.",
                "1888 − 1829 is the same as 88 − 29, because both years begin with 18.",
                "88 − 29 = 59."
              ],
              example: {
                q: "The Battle of Hastings was in 1066 and the Domesday Book was finished in 1086. How many years apart were they?",
                steps: ["Later year minus earlier year.", "1086 − 1066 = 20."],
                answer: "20 years",
                checks: [{ expr: "1086 - 1066", value: 20, tol: 0 }]
              }
            },
            core: { hint: "Later year minus earlier year. Check your answer by adding it back to 1829." },
            stretch: { extend: "Victoria had reigned for 51 years by 1888 and the police had existed for 59. Explain what these two figures together tell you about how new the idea of a police force was to Victorian Londoners." }
          },
          explain: "Say, in one sentence, how you checked that your subtraction was right.",
          why: "1888 − 1829 = 59. A force not yet 60 years old, with untrained officers and no forensic science, was asked to catch a killer in the hardest district in London."
        },
        {
          title: "Fault, or outside their control?",
          task: {
            kind: "written",
            q: "Was it the police's fault that the Whitechapel killer was never caught? Explain ONE issue that was the fault of the police and ONE issue that was outside their control, then give your overall judgement. Write one paragraph of six to eight sentences.",
            criteria: [
              "I explain one issue that was the fault of the police, such as the two forces not working together or the decoys, and say why it was their fault.",
              "I explain one issue that was outside their control, such as the lack of forensic science, the conditions of Whitechapel or the refusal of a reward, and say why it was outside their control.",
              "I use the sentence pattern: This was an issue because… This was / was not the fault of the police because…",
              "I finish with an overall judgement that answers the question directly."
            ],
            model: "One issue that was the fault of the police was that two forces were investigating and did not work together. This was an issue because evidence found in the City of London, such as the chalked message, was dealt with by the Metropolitan Commissioner alone, who had it washed away before the City police could photograph it. This was the fault of the police because two forces working on the same killings should have agreed in advance how shared evidence would be handled. One issue that was outside their control was the lack of forensic science. This was an issue because, without fingerprints or any way to prove who had been at a scene, the police could only convict a killer by catching him in the act or getting a confession. This was not the fault of the police because no force in 1888 had those tools. Overall, I think the police deserve some blame for their divisions and clumsy methods, but the main reasons the killer escaped were the conditions of Whitechapel and the century they were working in."
          },
          levels: {
            support: {
              steps: [
                "Make two columns: fault of the police (two forces; decoys; releasing Catherine Eddowes at 1am) and outside their control (no forensic science; the conditions; no reward).",
                "Sentences 1 to 3: One issue that was the fault of the police was… This was an issue because… This was the fault of the police because…",
                "Sentences 4 to 6: One issue outside their control was… This was an issue because… This was not the fault of the police because…",
                "Sentence 7: Overall, I think… because…"
              ],
              example: {
                q: "Was it King Harold's fault that he lost the Battle of Hastings? Give one issue that was his fault and one outside his control.",
                steps: ["His fault: he marched south at once instead of resting his army after Stamford Bridge; he chose to.", "Outside his control: the wind changed and let William cross the Channel at the worst possible moment.", "Judge: partly his fault, but luck played a part."],
                answer: "Fault: marching too soon. Outside his control: the wind. Judgement: partly his fault."
              }
            },
            core: { hint: "Issue, why it was an issue, whose fault: three sentences for each side. Then one judgement sentence that says partly, mostly or not at all." },
            stretch: { extend: "Add a third issue and argue that it sits in both columns at once: partly the police's fault and partly not. Releasing Catherine Eddowes at one in the morning is a good test case." }
          },
          explain: "Say, in one sentence, how you decided whether an issue was the police's fault or outside their control.",
          why: "The question asks for a balanced judgement. Divisions between the forces and poor methods were the police's fault; the missing science, the conditions of Whitechapel and the refused reward were not. A good answer sorts the issues and then decides."
        }
      ]
    },

    /* ───────────── 5 · witnesses, suspects and a cartoon ───────────── */
    {
      key: "witnesses-and-suspects", n: 5, title: "Witnesses, suspects and a cartoon",
      lead: "Without science, the police depended on what people saw and said. This chapter asks why witnesses were so unreliable, why over 100 suspects were never proved, and how to judge a source that was made to mock the police.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "witness statement", means: "a description given to the police by someone who saw something", sentence: "A witness statement is only as good as the witness's view." },
          { word: "credible", means: "believable; able to be trusted", sentence: "A witness who had been drinking all evening was not very credible." },
          { word: "suspect", means: "a person the police think might have committed a crime", sentence: "There have been well over 100 suspects, and none has been proved." },
          { word: "alibi", means: "evidence that a person was somewhere else when a crime happened", sentence: "Prince Albert Victor is said to have had an alibi for the double event." },
          { word: "provenance", means: "who made a source, when, and why", sentence: "The provenance of the cartoon tells us its purpose was to mock." },
          { word: "limitation", means: "a way in which a source is less useful", sentence: "One limitation of the cartoon is that it shows only one side." }
        ],
        passage: [
          "The police in 1888 depended on witnesses.",
          "But the witnesses in Whitechapel were not very credible.",
          "They had seen people briefly, at night, in fog and dim gaslight.",
          "Many had been drinking.",
          "Some did not trust the police and may not have told the whole truth.",
          "Their descriptions did not agree with each other.",
          "Over the years, well over 100 suspects have been named.",
          "Not one has ever been proved to be the killer.",
          "Without forensic science, nothing could be proved either way.",
          "Newspapers and magazines mocked the police for failing.",
          "A cartoon in Punch showed a blindfolded officer surrounded by criminals.",
          "To use a source like that, you must ask who made it and why."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "وصف يعطيه للشرطة شخص رأى شيئًا (witness statement)",
            "قابل للتصديق؛ يمكن الثقة به (credible)",
            "شخص ترى الشرطة أنه قد يكون ارتكب جريمة (suspect)",
            "دليل على أنّ الشخص كان في مكان آخر حين وقعت الجريمة (alibi)",
            "مَن صنع المصدر، ومتى، ولماذا (provenance)",
            "وجه يكون فيه المصدر أقلّ نفعًا (limitation)"
          ],
          "passage": [
            "كانت الشرطة في 1888 تعتمد على الشهود.",
            "ولكنّ الشهود في وايتشابل لم يكونوا جديرين بالتصديق كثيرًا.",
            "فقد رأوا أشخاصًا لحظةً، في الليل، في الضباب وضوء الغاز الخفيف.",
            "وكثير منهم كان قد شرب.",
            "وبعضهم لم يكن يثق بالشرطة، وقد لا يكون قال الحقّ كلّه.",
            "وأوصافهم لم تتّفق بعضها مع بعض.",
            "وعلى مرّ السنين سُمّي أكثر من 100 مشتبه به بكثير.",
            "ولم يُثبت على أحد منهم أبدًا أنه القاتل.",
            "وبغير العلم الجنائي لم يكن يمكن إثبات شيء في أيّ اتّجاه.",
            "وسخرت الصحف والمجلّات من الشرطة لفشلها.",
            "ورسم كارتوني في مجلّة بَنْش (Punch) أظهر شرطيًّا معصوب العينين يحيط به المُجرمون.",
            "ولتستخدم مصدرًا كهذا عليك أن تسأل: مَن صنعه؟ ولماذا؟"
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "opis, który policji podaje ktoś, kto coś widział (witness statement)",
            "wiarygodny, czyli taki, któremu można zaufać (credible)",
            "osoba, o której policja myśli, że mogła popełnić przestępstwo (suspect)",
            "dowód, że dana osoba była gdzie indziej, kiedy zdarzyło się przestępstwo (alibi)",
            "kto zrobił źródło, kiedy i dlaczego (provenance)",
            "sposób, w jaki źródło jest mniej przydatne (limitation)"
          ],
          "passage": [
            "Policja w 1888 roku zależała od świadków.",
            "Ale świadkowie w Whitechapel nie byli bardzo wiarygodni.",
            "Widzieli ludzi przez chwilę, nocą, we mgle i w słabym świetle gazowym.",
            "Wielu z nich piło.",
            "Niektórzy nie ufali policji i mogli nie powiedzieć całej prawdy.",
            "Ich opisy nie zgadzały się ze sobą.",
            "Przez lata wymieniono grubo ponad 100 podejrzanych.",
            "Ani jednemu nigdy nie dowiedziono, że był zabójcą.",
            "Bez nauk sądowych nie można było niczego dowieść w żadną stronę.",
            "Gazety i czasopisma wyśmiewały policję za jej niepowodzenie.",
            "Rysunek w „Punchu” pokazywał policjanta z zasłoniętymi oczami, otoczonego przez przestępców.",
            "Żeby skorzystać z takiego źródła, musisz zapytać, kto je zrobił i dlaczego."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma descrição dada à polícia por alguém que viu algo (witness statement, depoimento de testemunha)",
            "acreditável; em que se pode confiar (credible, credível)",
            "uma pessoa que a polícia pensa que pode ter cometido um crime (suspect, suspeito)",
            "provas de que uma pessoa estava noutro lugar quando um crime aconteceu (alibi, álibi)",
            "quem fez uma fonte, quando e porquê (provenance)",
            "uma maneira em que uma fonte é menos útil (limitation, limitação)"
          ],
          "passage": [
            "A polícia de 1888 dependia das testemunhas.",
            "Mas as testemunhas de Whitechapel não eram muito credíveis.",
            "Tinham visto pessoas por pouco tempo, de noite, no nevoeiro e à luz fraca do gás.",
            "Muitas tinham estado a beber.",
            "Algumas não confiavam na polícia e podem não ter contado toda a verdade.",
            "As descrições delas não concordavam umas com as outras.",
            "Ao longo dos anos, já foram apontados bem mais de 100 suspeitos.",
            "Nunca se provou que algum deles fosse o autor.",
            "Sem ciência forense, nada se podia provar num sentido nem no outro.",
            "Os jornais e as revistas gozaram com a polícia pelo seu fracasso.",
            "Um desenho na revista Punch mostrava um agente com os olhos tapados, rodeado de criminosos.",
            "Para usares uma fonte como essa, tens de perguntar quem a fez e porquê."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "sharraxaad booliiska la siiyay oo qof wax arkay",
            "la rumaysan karo; lagu kalsoonaan karo",
            "qof booliisku u maleeyo inuu dembi galay",
            "caddayn sheegaysa in qof meel kale joogay markii dembigu dhacay",
            "cidda isha samaysay, goorta, iyo sababta",
            "sida il ay faa'iido yar u leedahay"
          ],
          "passage": [
            "Booliiska 1888-kii waxay ku tiirsanaayeen goobjoogayaasha.",
            "Laakiin goobjoogayaashii Whitechapel aad looma rumaysan karin.",
            "Dad ayay si degdeg ah u arkeen, habeenkii, ceeryaamada iyo iftiin gaas oo khafiif ah.",
            "Qaar badan waxay cabbeen.",
            "Qaar booliiska kuma kalsoonayn, suurtogalna ma ahayn inay runta oo dhan sheegeen.",
            "Sharraxaaddoodu isma waafaqsanayn.",
            "Sanadihii soo socday, in ka badan 100 tuhmane ayaa la magacaabay.",
            "Midna weligii lama caddeyn inuu dilaagii yahay.",
            "Sayniska forensic la'aan, waxba lama caddeyn karin dhinac kasta.",
            "Wargeysyada iyo majaladaha waxay booliiska ku majaajiloodeen guuldarradooda.",
            "Sawir majaajillo oo Punch ku soo baxay wuxuu muujiyay sarkaal indhaha la xidhay oo dembiilayaal ku wareegsan.",
            "Si aad il noocaas u isticmaasho, waa inaad weydiisaa cidda samaysay iyo sababta."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "опис, який поліції дає той, хто щось бачив (witness statement)",
            "той, якому можна вірити; той, якому можна довіряти (credible)",
            "людина, яку поліція вважає можливим виконавцем злочину (suspect)",
            "свідчення, що людина була в іншому місці, коли стався злочин (alibi)",
            "хто створив джерело, коли і чому (provenance)",
            "те, у чому джерело менш корисне (limitation)"
          ],
          "passage": [
            "Поліція у 1888 році залежала від свідків.",
            "Але свідки у Вайтчепелі не були дуже надійні.",
            "Вони бачили людей коротко, вночі, у тумані і тьмяному газовому світлі.",
            "Багато хто з них пив.",
            "Деякі не довіряли поліції і, можливо, не казали всієї правди.",
            "Їхні описи не узгоджувалися між собою.",
            "За ці роки назвали значно понад 100 підозрюваних.",
            "Жодного з них так і не довели як убивцю.",
            "Без криміналістики нічого не можна було довести ні так, ні інакше.",
            "Газети й журнали глузували з поліції за її невдачу.",
            "Карикатура в журналі Punch показувала поліцейського із зав’язаними очима, оточеного злочинцями.",
            "Щоб використати таке джерело, ви мусите спитати, хто його створив і чому."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ بیان جو کسی چیز کو دیکھنے والا شخص پولیس کو دے (witness statement)",
            "قابلِ یقین؛ جس پر بھروسہ کیا جا سکے (credible)",
            "وہ شخص جس کے بارے میں پولیس سمجھے کہ اس نے جرم کیا ہو سکتا ہے (suspect)",
            "وہ شہادت جو بتائے کہ جرم کے وقت وہ شخص کہیں اور تھا (alibi)",
            "کوئی source کس نے بنایا، کب بنایا، اور کیوں بنایا (provenance)",
            "وہ پہلو جس کی وجہ سے کوئی source کم کارآمد ہو (limitation)"
          ],
          "passage": [
            "1888 میں پولیس گواہوں پر انحصار کرتی تھی۔",
            "مگر وائٹ چیپل کے گواہ بہت credible نہ تھے۔",
            "انھوں نے لوگوں کو ذرا سی دیر کے لیے دیکھا تھا، رات کو، دھند اور مدھم گیس کی روشنی میں۔",
            "بہت سے شراب پیے ہوئے تھے۔",
            "کچھ پولیس پر بھروسہ نہیں کرتے تھے اور شاید انھوں نے پوری بات نہ بتائی۔",
            "ان کے بیان ایک دوسرے سے میل نہیں کھاتے تھے۔",
            "برسوں میں 100 سے بھی زیادہ suspects کے نام لیے گئے۔",
            "ان میں سے کسی ایک کے بارے میں کبھی ثابت نہ ہوا کہ وہ قاتل تھا۔",
            "forensic science کے بغیر کسی طرف کی بھی کوئی بات ثابت نہ ہو سکتی تھی۔",
            "اخباروں اور رسالوں نے ناکامی پر پولیس کا مذاق اڑایا۔",
            "Punch کے ایک کارٹون میں آنکھوں پر پٹی بندھا ایک افسر مجرموں میں گھرا دکھایا گیا۔",
            "ایسا source استعمال کرنے کے لیے آپ کو پوچھنا ہوگا کہ اسے کس نے اور کیوں بنایا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "A lack of credible witnesses",
          paragraphs: [
            "Your lesson asks what problem the police faced in finding out who the killer was, and answers: a lack of credible witnesses. Think about who was on the streets of Whitechapel between one and four in the morning. People who had been drinking. People sleeping rough. Women trying to earn their bed money. They saw strangers briefly, in the dark, in fog, under gas lamps that lit about six feet of pavement. Some had reasons not to trust the police, and that could shape what they chose to say.",
            "Take the statement of George Hutchinson, who lived near Mary Jane Kelly and said he saw her with a man on the night she died. His description is remarkably detailed: the man's age, height, pale complexion, dark eyes and moustache, a long dark coat, a light waistcoat, a felt hat, button boots, a thick gold watch chain and a horseshoe tie pin. Your lesson asks how this is helpful and how it is not. It is helpful because it is specific. It is not helpful because it was given at night in poor light, it would fit a great many well-dressed men, and it ended by guessing at the man's religion, which fed the prejudice you met in chapter 2 rather than giving the police anything they could check.",
            "The witnesses from the night of 30 September show the same thing. Their descriptions of men seen with Elizabeth Stride or Catherine Eddowes differ from one another, and your lesson asks you to think about why: the time of night, the fog and darkness, drink, and whether every witness would have trusted the police enough to speak freely."
          ],
          tip: "A detailed statement is not the same as a reliable one. Ask: how well could this person see, how clearly were they thinking, and did they have a reason to shape their story?"
        },
        {
          heading: "Over 100 suspects, none proved",
          paragraphs: [
            "There are well over 100 different suspects for who the Whitechapel killer really was. Some theories are far-fetched; some are more believable. Historians are still arguing, and each new book claims to have solved the biggest murder mystery in London's history. Your lesson's table names four: Prince Albert Victor, George Chapman, Montague John Druitt and John Pizer.",
            "Your lesson works through Prince Albert Victor as the class example. He was a grandson of Queen Victoria, and he was said to have visited the East End. Against him: he is said to have had alibis for the first four deaths, being in York during the first two and in Scotland at the time of the double event. Your lesson then asks the key question: can we trust those alibis? An alibi is only as strong as the evidence behind it.",
            "This unit does not ask you to decide who the killer was, because the evidence cannot bear it. That is the point. Without forensic science, no suspect in 1888 could be proved guilty or innocent, and nothing found since has changed that. Your lesson's challenge statement, that it was impossible to ever find out who the killer was, is a question about evidence, and the sections above give you the evidence for both sides."
          ],
          worked: {
            q: "A suspect is said to have an alibi for the double event. Show how to weigh that claim without deciding whether he was the killer.",
            steps: [
              "State the claim: the suspect is said to have been in Scotland on 30 September 1888.",
              "Ask what supports it: who says so, and is there a record such as a letter, a diary or a newspaper report?",
              "Ask what weakens it: is the claim made by a friend or family member, or written down long afterwards?",
              "Conclude about the evidence, not the person: the alibi is strong, weak or unproven, so the suspect cannot be ruled in or out."
            ],
            answer: "Claim, support, weakness, conclusion about the evidence. The conclusion is about how strong the alibi is, not about guilt."
          },
          tip: "In history, not proved is a real answer. Say what the evidence can and cannot show."
        },
        {
          heading: "How useful is the Punch cartoon?",
          paragraphs: [
            "Your lesson's source task uses a cartoon from Punch magazine, published after the first two deaths. It shows a police officer blindfolded, playing blind man's buff, while criminals move freely around him. The method your department teaches has four parts. Content: what the source shows. Own knowledge: what you know that supports or challenges it. Provenance, also called nature, origin and purpose: what kind of source it is, who made it, when, and why. Limitation: what the source cannot tell you.",
            "Content: the cartoon suggests the police cannot see the criminals right in front of them. Own knowledge: the police did try many methods, decoys, leaflets, interviews and bloodhounds, and all failed, so the cartoon's view was widely shared. Provenance: Punch was a magazine that made its money mocking the powerful, and this cartoon was drawn to criticise the police and sell copies, so it is useful for public attitudes to the police, which is what the question asks. Limitation: it blames only the police, and says nothing about the conditions of Whitechapel or the missing science; it shows one side on purpose.",
            "Your department's sentence starters follow the same order: Source A is useful because it suggests… This is supported by my own knowledge… Moreover, it is useful because of its nature, origin and purpose… However, a limitation is… Ultimately, the source is useful for… Learn the order and the paragraph writes itself."
          ],
          quote: { text: "The London Police Force is probably the stupidest in the World", source: "The New York Times, 1880s, as printed in your lesson" },
          tip: "Useful for what? A cartoon that mocks the police is very useful for attitudes to the police and much less useful for what the police actually did."
        },
        {
          heading: "Judging the police fairly",
          paragraphs: [
            "Your lesson ends with a quotation from The New York Times in the 1880s, calling the London police probably the stupidest in the world, and asks you to vote: was it the police's fault? A newspaper on the other side of the Atlantic, reporting a story that sold papers, is itself a source with a purpose. Treat it as you treated Punch.",
            "The fair judgement uses everything so far. Witnesses were not credible because of the conditions. Suspects could not be proved because of the missing science. The police made real mistakes, but the cartoonists and newspapers that mocked them had their own reasons for making the police look foolish. Chapter 6 turns to those newspapers."
          ],
          tip: "Whenever a source is rude about someone, ask what the source gains by being rude."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is an alibi?", options: ["Evidence that a person was somewhere else when a crime happened", "A nickname given to a suspect by the newspapers", "A written confession signed at a police station", "A description of a suspect given by a witness"], answer: 0, why: "An alibi places a person somewhere else at the time of the crime; if it is proved, it rules them out.",
          feedback: [
            "",
            "Newspapers did give nicknames, but an alibi is not one of them. An alibi is evidence that a suspect was somewhere else when the crime happened.",
            "A confession is the opposite: it is someone admitting guilt. An alibi is evidence that the person could not have been there.",
            "That is a witness statement. An alibi is evidence about where the suspect was, placing them away from the crime."
          ] },
        { kind: "mcq", q: "Why were witnesses in Whitechapel often NOT credible?", options: ["They saw people briefly, at night, in fog and dim gaslight, often after drinking", "They were all police officers who wanted to protect their colleagues", "They were paid large rewards and so invented stories", "They all gave exactly the same description, which proved they had copied each other"], answer: 0, why: "Poor light, fog, the hour, drink and distrust of the police all made witness statements unreliable, and their descriptions did not agree.",
          feedback: [
            "",
            "The witnesses were ordinary residents, not officers. The problem was the conditions in which they saw things: night, fog, dim gaslight, drink.",
            "No government reward was offered; the Home Secretary refused one. Witnesses were unreliable because of what they could see and the state they were in, not because they were paid.",
            "The descriptions did not agree with one another, which is one reason they were hard to use. The underlying cause was the conditions: night, fog, dim light and drink."
          ] },
        { kind: "gap", q: "The ___ of a source means who made it, when, and why.", answer: "provenance", options: ["provenance", "content", "limitation"], why: "Provenance, also called nature, origin and purpose, is where a source comes from: who made it, when and why.",
          feedback: {
            "content": "Content is what the source shows or says. Who made it, when and why is its provenance, also called nature, origin and purpose.",
            "limitation": "A limitation is a way the source is less useful. Who made it, when and why is its provenance."
          } }
      ],
      modules: [
        {
          title: "Building a source paragraph",
          task: {
            kind: "order",
            q: "Put the four parts of a how-useful-is-this-source paragraph in the order your department teaches them.",
            items: [
              "Content: say what the source shows or suggests",
              "Own knowledge: add what you know that supports or challenges it",
              "Provenance: say what kind of source it is, who made it, when and why",
              "Limitation and judgement: say what it cannot tell you, then decide how useful it is"
            ]
          },
          levels: {
            support: {
              steps: [
                "You cannot say anything about a source before you have looked at it, so content comes first.",
                "Next you test what it shows against what you know.",
                "Then you step back and ask who made it and why.",
                "Finally you say what it misses and give your judgement."
              ],
              example: {
                q: "Put these steps for judging a football match report in order: say what the report claims; say who wrote it and for which club's website; check it against the score and the highlights; say what it leaves out and how far to trust it.",
                steps: ["What it claims comes first.", "Check against what you know.", "Then who wrote it and why.", "Then what it leaves out, and a judgement."],
                answer: "What it claims; check against the score; who wrote it and why; what it leaves out and how far to trust it"
              }
            },
            core: { hint: "Look, test, ask who, judge. Your department's sentence starters go: useful because it suggests; supported by my own knowledge; moreover, because of its nature, origin and purpose; however, a limitation; ultimately." },
            stretch: { extend: "Explain why provenance can make a source MORE useful for one question and LESS useful for another, using the Punch cartoon as your example." }
          },
          explain: "Say, in one sentence, why content has to come before own knowledge.",
          why: "Content first, because you must describe what the source says before you can test it; own knowledge second, to test it; provenance third, to explain why it says what it says; limitation and judgement last."
        },
        {
          title: "How useful is the cartoon?",
          task: {
            kind: "written",
            q: "How useful is the Punch cartoon of the blindfolded police officer for learning about public attitudes to the police in Whitechapel? Write one paragraph of six to eight sentences using content, own knowledge, provenance and limitation, and finish with a judgement.",
            criteria: [
              "Content: I say what the cartoon shows and what it suggests about the police.",
              "Own knowledge: I support or challenge the cartoon with something I know about the police methods or the conditions.",
              "Provenance: I say that Punch was a magazine that mocked the powerful and that the cartoon was made after the first two deaths to criticise the police and sell copies, and I explain what that means for its usefulness.",
              "Limitation and judgement: I give one thing the cartoon cannot tell us and finish with a clear judgement about how useful it is for public attitudes."
            ],
            model: "The cartoon is useful because it suggests that people saw the police as helpless, like a blindfolded officer who cannot see the criminals around him. This is supported by my own knowledge, because the police tried decoys, leaflets, interviews and bloodhounds and none of them worked, so many Londoners had lost patience with them. Moreover, the cartoon is useful because of its provenance: it was drawn for Punch, a magazine that made its living by mocking the powerful, after the first two deaths, to criticise the police and to sell copies. That means it is good evidence of what readers wanted to see and were ready to believe about the police. However, a limitation is that it blames the police alone and shows nothing of the fog, the maze of streets or the missing forensic science that made the job so hard. Ultimately, the cartoon is very useful for public attitudes to the police, because showing those attitudes was exactly what it was made to do, but it is much less useful for judging how well the police actually performed."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: The cartoon is useful because it suggests… (what does a blindfold mean?)",
                "Sentence 2: This is supported by my own knowledge… (name two failed methods).",
                "Sentences 3 and 4: Moreover, it is useful because of its provenance… Punch, after the first two deaths, to mock and to sell. So it is good evidence of…",
                "Sentence 5: However, a limitation is… (what does it leave out?)",
                "Sentence 6: Ultimately, the cartoon is useful for… because…"
              ],
              example: {
                q: "How useful is a Victorian advert for a patent medicine for learning about attitudes to health? Sketch the four parts.",
                steps: ["Content: it claims one bottle cures every illness.", "Own knowledge: there was little real medicine and people feared disease, so such claims sold.", "Provenance: made by the seller to make money, so it shows what people hoped for rather than what worked.", "Limitation and judgement: it cannot tell us if anyone was cured; very useful for hopes and fears, not for medicine."],
                answer: "Content, own knowledge, provenance, limitation: useful for attitudes, not for facts about cures."
              }
            },
            core: { hint: "Useful for what? The question says public attitudes. A source made to mock the police is excellent evidence of attitudes, even if it is unfair to the police." },
            stretch: { extend: "Compare the Punch cartoon with the New York Times quotation as evidence of attitudes to the police. Which is more useful, and does distance from London make a source better or worse?" }
          },
          explain: "Say, in one sentence, why a source made to mock the police can still be very useful to a historian.",
          why: "Usefulness depends on the question. For public attitudes to the police, a cartoon made to express and sell those attitudes is strong evidence; its one-sidedness is a limitation only if you ask what the police actually did."
        },
        {
          title: "What the purpose tells you",
          task: {
            kind: "mcq",
            q: "A cartoon was drawn for a magazine whose purpose was to mock the police and sell copies. What does this purpose tell you about how far to trust the source on how well the police did?",
            options: [
              "It shows one side on purpose, so trust it less on how well the police did, though it still shows what people felt",
              "It proves the police were useless, because a magazine would not dare print something untrue",
              "It means the source is worthless and should not be used at all",
              "It makes no difference, because a picture cannot have a purpose"
            ],
            answer: 0,
            why: "A source made to mock will show the police at their worst. That lowers its value as evidence of what the police did, but it is good evidence of what people felt and wanted to read.",
            feedback: [
              "",
              "Magazines printed exaggerations all the time; that was how Punch made people laugh. A mocking purpose means the picture is one-sided, not that it is proof.",
              "One-sided does not mean worthless. The cartoon is very useful for attitudes to the police; its purpose just means you trust it less on the facts of policing.",
              "Every source has a purpose, pictures included. This one was drawn to mock and to sell, and that shapes what it shows."
            ]
          },
          contexts: [
            { label: "A newspaper", q: "A newspaper article was written to sell as many copies as possible by making the police look foolish. What does this purpose tell you about how far to trust the source on how well the police did?", why: "A purpose of selling copies by mockery means one side is shown on purpose: less trust on the facts of policing, good evidence of what readers wanted to believe." },
            { label: "A police report", q: "A report was written by a senior police officer to defend his force against criticism in the press. What does this purpose tell you about how far to trust the source on how well the police did?", why: "A purpose of defending the force also shows one side on purpose, this time the favourable side: trust it less on how well the police did, but it shows how the police saw themselves." },
            { label: "An angry letter", q: "A letter was written to a newspaper by a Whitechapel resident furious that the police had not caught the killer. What does this purpose tell you about how far to trust the source on how well the police did?", why: "An angry letter is written to blame, so it shows one side on purpose: less reliable on the facts of policing, strong evidence of local feeling." }
          ],
          levels: {
            support: {
              steps: [
                "Ask: what did the maker want? To mock and to sell.",
                "Ask: would they show the police fairly, or at their worst? At their worst.",
                "So on the facts of policing, trust it less.",
                "But it still shows what people felt. Find the option that says both."
              ],
              example: {
                q: "A football manager says the referee was terrible. His team lost. What does his purpose tell you?",
                steps: ["He wants to explain the defeat.", "So he shows the referee at his worst.", "Trust him less on the refereeing, but his words show how the losing side felt."],
                answer: "Less trustworthy on the referee; good evidence of how the losing side felt."
              }
            },
            core: { hint: "Two options go too far in opposite directions (proves it; worthless) and one denies purpose altogether. The careful answer says less trust on one thing, still useful for another." },
            stretch: { extend: "Explain how a historian could use the Punch cartoon and a police report together, so that the purpose of each cancels out the other's blind spot." }
          },
          explain: "Say, in one sentence, the difference between a source being less trustworthy and a source being useless.",
          why: "Purpose shapes content. A source made to mock shows one side on purpose, so it is weaker evidence of what the police did but strong evidence of what people felt. Less trustworthy is not the same as useless."
        }
      ]
    },

    /* ───────────── 6 · the press, and the big question ───────────── */
    {
      key: "the-press", n: 6, title: "The press, and why no one was caught",
      lead: "Newspapers turned five deaths in a poor district into a national sensation. This chapter asks why the press was so interested, how selling papers affected the truth, how reporting got in the way of the police, and then weighs all four factors to answer the enquiry question.",
      covers: [5],
      pretext: {
        words: [
          { word: "media", means: "newspapers, magazines and other ways news reaches people", sentence: "In 1888 the media meant newspapers and magazines." },
          { word: "sensational", means: "written to shock and excite readers", sentence: "Sensational headlines sold more copies." },
          { word: "reliability", means: "how far something can be trusted to be true", sentence: "The race to sell papers damaged the reliability of the reporting." },
          { word: "literacy", means: "the ability to read and write", sentence: "Rising literacy meant more people bought newspapers." },
          { word: "factor", means: "one of the causes that helps explain why something happened", sentence: "The media is one of four factors in this enquiry." },
          { word: "PEEL", means: "Point, Evidence, Explain, Link: a way to build a paragraph", sentence: "Use PEEL to argue which factor mattered most." }
        ],
        passage: [
          "In 1888 more people could read than ever before.",
          "Cheap newspapers were growing fast.",
          "The press jumped on the Whitechapel story.",
          "It became a national sensation.",
          "Newspapers wanted to sell copies.",
          "So some printed rumours and shocking stories as if they were facts.",
          "This created panic and false leads for the police to chase.",
          "Even Queen Victoria was unhappy with the Prime Minister's handling of the case.",
          "Historians weigh four factors: Whitechapel, the police, the killer and the media.",
          "Each one helps to explain why no one was caught.",
          "Your job is to decide which mattered most.",
          "Then you explain your choice with evidence."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الصحف والمجلّات وغيرها من طرق وصول الأخبار إلى الناس (media)",
            "مكتوب ليصدم القرّاء ويُثيرهم (sensational)",
            "مدى إمكان الثقة بصحّة الشيء (reliability)",
            "القدرة على القراءة والكتابة (literacy)",
            "واحد من الأسباب التي تساعد في تفسير حدوث شيء (factor)",
            "النقطة والدليل والشرح والربط: طريقة لبناء فقرة (PEEL)"
          ],
          "passage": [
            "في 1888 كان يقرأ من الناس أكثر ممّا كان في أيّ وقت قبلها.",
            "وكانت الصحف الرخيصة تنمو بسرعة.",
            "فوثبت الصحافة على قصّة وايتشابل.",
            "فصارت حديثًا يشغل البلد كلّه.",
            "وكانت الصحف تريد أن تبيع نسخًا.",
            "فطبع بعضها الإشاعات والقصص المصدّعة كأنها وقائع.",
            "وهذا خلق الذُّعر وخيوطًا كاذبة تتبعها الشرطة.",
            "وحتى الملكة فيكتوريا لم ترضَ بطريقة رئيس الوزراء في معالجة القضيّة.",
            "والمؤرّخون يزنون أربعة عوامل: وايتشابل، والشرطة، والقاتل، والإعلام.",
            "وكلّ عامل منها يساعد في تفسير سبب عدم القبض على أحد.",
            "وعملك أن تحكم أيّها كان الأهمّ.",
            "ثم تشرح اختيارك بالدليل."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "gazety, czasopisma i inne sposoby, którymi wiadomości dochodzą do ludzi (media)",
            "napisany tak, żeby czytelników zaszokować i podniecić (sensational)",
            "jak dalece można czemuś zaufać, że jest prawdą (reliability)",
            "umiejętność czytania i pisania (literacy)",
            "jedna z przyczyn, która pomaga wyjaśnić, dlaczego coś się stało (factor)",
            "Point, Evidence, Explain, Link: sposób budowania akapitu (PEEL)"
          ],
          "passage": [
            "W 1888 roku czytać umiało więcej ludzi niż kiedykolwiek wcześniej.",
            "Tanie gazety rosły bardzo szybko.",
            "Prasa rzuciła się na historię z Whitechapel.",
            "Stała się ona sensacją na całą Wielką Brytanię.",
            "Gazety chciały sprzedawać nakład.",
            "Dlatego niektóre drukowały plotki i szokujące opowieści, jakby były faktami.",
            "To wywołało panikę i fałszywe tropy, za którymi policja musiała gonić.",
            "Nawet królowa Victoria (Wiktoria) była niezadowolona z tego, jak premier prowadzi tę sprawę.",
            "Historycy rozważają cztery czynniki: Whitechapel, policję, zabójcę i prasę.",
            "Każdy z nich pomaga wyjaśnić, dlaczego nikogo nie schwytano.",
            "Twoim zadaniem jest zdecydować, który miał największe znaczenie.",
            "Potem wyjaśniasz swój wybór za pomocą dowodów."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "os jornais, as revistas e as outras maneiras como as notícias chegam às pessoas (media, os media / a mídia)",
            "escrito para chocar e excitar os leitores (sensational, sensacionalista)",
            "até que ponto se pode confiar que algo é verdade (reliability, fiabilidade/confiabilidade)",
            "a capacidade de ler e escrever (literacy, literacia/alfabetização)",
            "uma das causas que ajuda a explicar porque é que algo aconteceu (factor, fator)",
            "Point, Evidence, Explain, Link: uma maneira de construir um parágrafo (PEEL)"
          ],
          "passage": [
            "Em 1888 havia mais pessoas a saber ler do que nunca.",
            "Os jornais baratos cresciam depressa.",
            "A imprensa agarrou-se à história de Whitechapel.",
            "Tornou-se uma sensação nacional.",
            "Os jornais queriam vender exemplares.",
            "Por isso alguns imprimiram rumores e histórias chocantes como se fossem factos/fatos.",
            "Isto criou pânico e pistas falsas para a polícia andar atrás.",
            "Até a rainha Victoria ficou descontente com a maneira como o primeiro-ministro tratou o caso.",
            "Os historiadores pesam quatro fatores: Whitechapel, a polícia, o autor dos crimes e os media/a mídia.",
            "Cada um deles ajuda a explicar porque é que ninguém foi apanhado.",
            "A tua tarefa é decidir qual deles pesou mais.",
            "Depois explicas a tua escolha com provas."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "wargeysyo, majaladood iyo siyaabo kale oo warku dadka ku gaaro",
            "loo qoray in akhristaha lagu naxo oo lagu xiiseeyo",
            "inta wax lagu kalsoonaan karo inay run tahay",
            "awoodda akhriska iyo qoriska",
            "mid ka mid ah sababaha ka caawiya sharraxidda sababta wax u dhacay",
            "Point, Evidence, Explain, Link: hab cutub lagu dhiso"
          ],
          "passage": [
            "1888-kii dad ka badan sidii hore ayaa akhriyi karay.",
            "Wargeysyo jaban ayaa si dhaqso ah u korayay.",
            "Warbaahintu waxay ku booddeen sheekada Whitechapel.",
            "Waxay noqotay mid dalka oo dhan xiiseeyay.",
            "Wargeysyadu waxay rabeen inay nuqullo iibiyaan.",
            "Markaa qaar waxay daabaceen been-abuur iyo sheekooyin naxdin leh sidii ay xaqiiqo yihiin.",
            "Tan waxay abuurtay cabsi weyn iyo tilmaamo been ah oo booliisku raacaan.",
            "Xataa Boqorad Victoria waxay ka xumaatay sida Ra'iisul Wasaaruhu kiiska u maamulay.",
            "Taariikhyahannadu waxay miisaamaan afar arrin: Whitechapel, booliiska, dilaaga iyo warbaahinta.",
            "Mid kastaa waxay caawisaa sharraxidda sababta aan cidna loo qabtin.",
            "Shaqadaadu waa inaad go'aansato tee ugu muhiimsanayd.",
            "Kadibna doorashadaada waxaad ku sharraxaysaa caddayn."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "газети, журнали та інші способи, якими новини доходять до людей (media)",
            "написаний так, щоб вражати і збуджувати читачів (sensational)",
            "наскільки можна вірити, що щось є правдою (reliability)",
            "уміння читати й писати (literacy)",
            "одна з причин, яка допомагає пояснити, чому щось сталося (factor)",
            "Point, Evidence, Explain, Link: спосіб побудувати абзац (PEEL)"
          ],
          "passage": [
            "У 1888 році читати вміло більше людей, ніж будь-коли раніше.",
            "Дешеві газети швидко зростали.",
            "Преса вхопилася за історію Вайтчепела.",
            "Вона стала сенсацією всієї країни.",
            "Газети хотіли продавати примірники.",
            "Тому деякі друкували плітки й шокуючі історії так, ніби то були факти.",
            "Це створювало паніку і фальшиві сліди, за якими гналася поліція.",
            "Навіть королева Вікторія була незадоволена тим, як прем’єр-міністр вів цю справу.",
            "Історики зважують чотири чинники: Вайтчепел, поліцію, убивцю і медіа.",
            "Кожний із них допомагає пояснити, чому нікого не схопили.",
            "Ваше завдання — вирішити, який із них мав найбільше значення.",
            "Потім ви пояснюєте свій вибір свідченнями."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "اخبار، رسالے اور خبر لوگوں تک پہنچانے کے دوسرے ذریعے (media)",
            "جو پڑھنے والوں کو چونکانے اور جوش دلانے کے لیے لکھا جائے (sensational)",
            "کسی چیز کے سچ ہونے پر کتنا بھروسہ کیا جا سکتا ہے (reliability)",
            "پڑھنے اور لکھنے کی اہلیت (literacy)",
            "اُن اسباب میں سے ایک جو بتاتے ہیں کہ کوئی بات کیوں ہوئی (factor)",
            "Point, Evidence, Explain, Link: پیراگراف بنانے کا ایک طریقہ (PEEL)"
          ],
          "passage": [
            "1888 میں پہلے سے زیادہ لوگ پڑھ سکتے تھے۔",
            "سستے اخبار تیزی سے بڑھ رہے تھے۔",
            "اخباروں نے وائٹ چیپل کی کہانی پر جھپٹا مارا۔",
            "یہ پورے ملک کی سنسنی بن گئی۔",
            "اخبار اپنی کاپیاں بیچنا چاہتے تھے۔",
            "اس لیے کچھ نے افواہیں اور چونکانے والی کہانیاں حقائق کی طرح چھاپ دیں۔",
            "اس سے خوف پھیلا اور پولیس کو پیچھا کرنے کے لیے جھوٹے سراغ ملے۔",
            "خود ملکہ وکٹوریہ بھی وزیرِ اعظم کے اس معاملے کو سنبھالنے کے طریقے سے ناخوش تھیں۔",
            "مؤرخ چار factors کو تولتے ہیں: وائٹ چیپل، پولیس، قاتل اور media۔",
            "ہر ایک یہ سمجھنے میں مدد دیتا ہے کہ کوئی کیوں نہ پکڑا گیا۔",
            "آپ کا کام یہ طے کرنا ہے کہ سب سے زیادہ اہم کون سا تھا۔",
            "پھر آپ شہادت سے اپنے انتخاب کی وضاحت کریں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Why the press was so interested",
          paragraphs: [
            "By the 1880s, more people in Britain could read than ever before, and cheap newspapers had expanded to meet them. Your lesson's documentary clip makes the link: as literacy grew, so did the press, and a growing press needed stories that sold. Five deaths in one poor district, a killer never seen, and a police force that seemed helpless was exactly that kind of story.",
            "The press jumped on it and turned a local tragedy into a national phenomenon. Readers far from London followed every development. The pressure reached the very top: the documentary notes that Queen Victoria herself was not impressed with the Prime Minister and his handling of the case. Your lesson also asks why readers immersed themselves in stories of true crime; one answer is that reading about danger from a safe armchair was thrilling, and the papers knew it.",
            "The press also shaped how the women were seen. Your lesson asks how the papers portrayed the death of the first woman, Mary Ann Nichols, and what happened to Annie Chapman's life before she became vulnerable. Those are questions for your documentary notes. What matters here is that the papers chose how to tell the women's stories, and they chose what would sell."
          ],
          tip: "Literacy up, newspapers up, pressure on the police up. Keep that chain in your head; it is the media factor in one line."
        },
        {
          heading: "Selling papers or telling the truth?",
          paragraphs: [
            "Your lesson asks how the desire to sell more newspapers affected the reliability of what was reported. The answer is that it damaged it. A paper that printed the most shocking version of events sold more copies than a paper that waited for the facts, so rumours were reported as news, details were exaggerated, and every strange event in the East End was linked to the killer. This is what we mean by sensational reporting.",
            "Your lesson also asks why many Victorians had a negative attitude towards sex, and how the papers used that to sell copies. Victorian public life was proper and respectable, so stories that hinted at what the respectable did not talk about were both shocking and irresistible. The way the women earned their bed money became part of the story, and it sold.",
            "The documentary clip also mentions Charles Booth's poverty map, which coloured London's streets by how poor their people were; Whitechapel's streets were among the darkest. Booth's work shows that some Victorians were trying to measure poverty seriously, at the same time as the papers were selling it as drama."
          ],
          tip: "Reliability is about truth; sensational is about selling. The more a source is trying to sell, the harder you check it."
        },
        {
          heading: "How the reporting got in the way",
          paragraphs: [
            "Huge public interest sounds helpful: more eyes, more information. Your lesson asks you to explain how it began to have a negative effect on the case. Panic spread, and frightened people reported anything unusual, so the police were buried in false leads. Crowds gathered at every scene, making the streets even harder to patrol. Rumours in print, including blame aimed at Jewish residents, created tension that the police had to manage as well as the investigation. And every failure was reported, which made the police look foolish and made witnesses trust them less.",
            "Your lesson's extension asks how the newspapers may have helped the killer get away with murder. Put the pieces together: officers chasing false leads were not on their beats; crowds and panic made quiet observation impossible; and a killer who read the papers knew exactly what the police were doing and where."
          ],
          tip: "Negative effect of the press: false leads, crowds, tension, mistrust, and a killer who could read."
        },
        {
          heading: "Weighing the four factors",
          paragraphs: [
            "Your lesson's revision task asks you to rank four factors for why the killer was never caught: Whitechapel, the police, the skill of the killer, and the media. Each is real. Whitechapel: the maze of alleys, the fog, the crowds of strangers. The police: untrained, under-equipped, divided between two forces, without a reward to offer. The killer: fast, quiet and clearly at home in the streets, as the double event showed. The media: panic, false leads and pressure.",
            "The best answers do not just rank; they link. The conditions of Whitechapel made the killer's speed possible. The press made the police's job harder. The police's methods failed partly because of the century they lived in. When you choose your most important factor, show how it connects to at least one other."
          ],
          worked: {
            q: "Write a PEEL paragraph arguing that the conditions of Whitechapel were the most important reason the killer was never caught.",
            steps: [
              "Point: The most important reason the killer was never caught was the conditions of Whitechapel.",
              "Evidence: Whitechapel was a maze of narrow alleys and courtyards lit by single gas lamps, often filled with pea-souper fog, and Mitre Square alone had three exits.",
              "Explain: This contributed to the killer never being caught because he could leave a scene in seconds and be out of sight before anyone raised the alarm, as happened on 30 September when PC Watkins passed every 15 minutes and saw nothing.",
              "Link: The conditions also made the other factors worse: the police could not patrol a maze, witnesses could not see in the fog, and the newspapers filled the darkness with rumour."
            ],
            answer: "Point, evidence, explain, link: the conditions, proved with the maze and the fog, explained through the double event, linked to the other three factors."
          },
          tip: "In PEEL the Link is the top-level skill: show how your factor made the others stronger or weaker."
        }
      ],
      gate: [
        { kind: "mcq", q: "Why were the newspapers so interested in the Whitechapel case?", options: ["Dramatic crime stories sold papers to a growing number of readers", "The government paid them to report the case", "The police asked them to publish every detail", "Nobody in Whitechapel could read, so the papers had to tell the story for them"], answer: 0, why: "Rising literacy had created a large market for cheap newspapers, and a frightening, unsolved case was exactly the kind of story that sold.",
          feedback: [
            "",
            "The government did not pay the papers; if anything, the press attacked the government and the Prime Minister. The papers were interested because the story sold copies.",
            "The police did not control what the papers printed, and the reporting often got in their way. The newspapers chased the story because readers bought it.",
            "You have reversed the cause. More people than ever could read, which is why newspapers were growing; the case gave those readers a dramatic story."
          ] },
        { kind: "gap", q: "Reporting that exaggerates to shock and excite readers is called ___ reporting.", answer: "sensational", options: ["sensational", "reliable", "balanced"], why: "Sensational reporting puts shock and sales ahead of accuracy.",
          feedback: {
            "reliable": "Reliable means trustworthy and accurate, the opposite of what the question describes. Reporting that exaggerates to shock readers is sensational.",
            "balanced": "Balanced reporting gives more than one side fairly. Reporting that exaggerates to shock readers is sensational."
          } },
        { kind: "mcq", q: "According to your lesson's documentary, which monarch was unhappy with the Prime Minister's handling of the case?", options: ["Queen Victoria", "Queen Elizabeth I", "King George III", "King Edward VII"], answer: 0, why: "Queen Victoria was on the throne in 1888 and the documentary notes that she was not impressed with the Prime Minister's handling of the case.",
          feedback: [
            "",
            "Elizabeth I reigned in the 1500s, three centuries too early. The monarch in 1888 was Queen Victoria.",
            "George III reigned in the 1700s and early 1800s. In 1888 the monarch was Queen Victoria.",
            "Edward VII was Victoria's son and did not become king until 1901. In 1888 the monarch was Queen Victoria."
          ] }
      ],
      modules: [
        {
          title: "Factor and evidence",
          task: {
            kind: "match",
            q: "Match each factor to the evidence that supports it.",
            pairs: [
              ["Whitechapel", "A maze of narrow alleys and courtyards, dim gas lamps and pea-souper fog"],
              ["The police", "Two forces that did not work together, and a Home Secretary who refused a reward"],
              ["The killer", "Left Mitre Square unseen within 15 minutes of a constable's last pass"],
              ["The media", "Sensational stories that spread panic, rumours and false leads"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Whitechapel is the place: find the evidence about streets and fog.",
                "The police are the investigators: find the evidence about forces and a reward.",
                "The killer is one person's actions: find the evidence about leaving a square quickly.",
                "The media is the newspapers: find the evidence about stories and panic."
              ],
              example: {
                q: "Match two factors for the Norman victory at Hastings to evidence: Harold's mistakes; William's preparation. Evidence: he brought horses and archers across the Channel; he marched south without resting his army.",
                steps: ["Preparation is about what William brought.", "Mistakes are about what Harold did wrong."],
                answer: "William's preparation: horses and archers. Harold's mistakes: marching without rest."
              }
            },
            core: { hint: "Place, investigators, one person, newspapers. Each piece of evidence belongs to exactly one of those." },
            stretch: { extend: "Choose two of the factors and write one sentence showing how the first made the second more powerful." }
          },
          explain: "Say, in one sentence, why the evidence for the killer factor could also be used as evidence for the Whitechapel factor.",
          why: "Whitechapel: the maze and the fog. The police: two divided forces and no reward. The killer: out of Mitre Square unseen in under 15 minutes. The media: sensational stories, panic and false leads."
        },
        {
          title: "How the press hindered the police",
          task: {
            kind: "mcq",
            q: "How could newspaper reporting get in the way of the police investigation?",
            options: [
              "Rumours and false stories sent officers chasing leads that went nowhere, while panic and crowds made patrolling harder",
              "The newspapers printed the killer's name and address, but the police refused to read them",
              "The newspapers were banned in Whitechapel, so the police had no way to ask the public for help",
              "The reporting was so accurate that the police had nothing left to investigate"
            ],
            answer: 0,
            why: "Sensational reporting created panic, so frightened people reported everything; officers chased false leads, crowds filled the streets, and tension rose against Jewish residents.",
            feedback: [
              "",
              "No newspaper knew the killer's identity; nobody did. The damage the papers did was indirect: panic, false leads, crowds and mistrust.",
              "Newspapers were not banned; they were everywhere, which was the problem. The police did ask for help, with 80,000 leaflets, and got little back.",
              "The reporting was the opposite of accurate. Rumours and exaggerations were printed as facts, which created false leads rather than removing them."
            ]
          },
          levels: {
            support: {
              steps: [
                "Think about what a sensational story does to readers: it frightens them.",
                "Frightened people report everything, so the police get many useless leads.",
                "Frightened people also gather in crowds and lose trust in the police.",
                "Find the option that describes those effects."
              ],
              example: {
                q: "A school announces a lost phone and rumours spread that it was stolen. How could the rumours make it harder to find the phone?",
                steps: ["Rumours make people suspicious of each other.", "Many false reports waste the staff's time.", "The person who picked it up by mistake is now afraid to hand it in."],
                answer: "False reports waste time, suspicion spreads, and the truth becomes harder to hear."
              }
            },
            core: { hint: "Three options claim the papers knew the answer, were banned, or were perfectly accurate. None of those is true. The real harm was indirect." },
            stretch: { extend: "Explain how a killer who could read the newspapers might have used them, and what that adds to the media factor." }
          },
          explain: "Say, in one sentence, how panic can make a police investigation slower rather than faster.",
          why: "The press did not help the killer on purpose. But rumours produced false leads, panic produced crowds and mistrust, and prejudice in print produced tension, all of which pulled officers away from the streets where they were needed."
        },
        {
          title: "The most important reason",
          task: {
            kind: "written",
            q: "What was the most important reason the Whitechapel killer was never caught? Choose ONE of the four factors (Whitechapel, the police, the killer, the media) and write a PEEL paragraph of five to seven sentences. Your Link must show how your factor connected to at least one other factor.",
            criteria: [
              "Point: I state clearly which factor was the most important reason.",
              "Evidence: I give at least two specific pieces of evidence from the unit, such as the three exits of Mitre Square, the two police forces, the 80,000 leaflets or the refused reward.",
              "Explain: I say how this evidence contributed to the killer never being caught, using because or this meant that.",
              "Link: I show how my factor made at least one other factor stronger or weaker."
            ],
            model: "The most important reason the killer was never caught was the police. This can be seen in the fact that two forces, the Metropolitan Police and the City of London Police, investigated separately and disagreed, so that the chalked message found on the night of 30 September was washed away before it could be photographed, and in the fact that no government reward was ever offered to a district that badly needed a reason to talk. This contributed to the killer never being caught because evidence was lost and residents who might have known something had no reason to come forward to a force they did not trust. The police also had no forensic science, so their only hope was a witness or a confession, and their methods, from decoys to bloodhounds, failed to produce either. Whitechapel's maze of streets made this worse, because a divided and untrained force could not patrol it, but the conditions were the same for everyone; it was the police who had the job of overcoming them and did not. Overall, the police were the most important factor because every other factor could only matter if the police failed to deal with it."
          },
          levels: {
            support: {
              steps: [
                "Choose one factor. Write: The most important reason the killer was never caught was…",
                "Evidence: This can be seen by… Give two specific facts from the unit.",
                "Explain: This contributed to the killer never being caught because…",
                "Link: This factor made [another factor] worse because…",
                "Finish: Overall, this was the most important factor because…"
              ],
              example: {
                q: "Write a PEEL paragraph arguing that William's preparation was the most important reason the Normans won at Hastings.",
                steps: ["Point: William's preparation was the most important reason.", "Evidence: he brought horses, archers and prefabricated castle parts across the Channel.", "Explain: this meant his army could break the English shield wall and hold the ground it took.", "Link: Harold's tired army, the other factor, only mattered because William had the fresh cavalry to exploit it."],
                answer: "Point, two pieces of evidence, explain with because, link to another factor."
              }
            },
            core: { hint: "Two facts, one because, one link. The link is the hardest and most valuable sentence: how did your factor change another factor?" },
            stretch: { extend: "Write a second, shorter paragraph arguing for a different factor, then a final sentence saying why you still prefer your first choice. That is how a top-level judgement is built." }
          },
          explain: "Say, in one sentence, how your chosen factor connected to another factor.",
          why: "Any of the four factors can be argued well. What separates the best answers is specific evidence, a clear because, and a link that shows the factors working together rather than in isolation."
        }
      ]
    }
  ],

  sources: {
    deckDump: "hi_y08_topic_4_jack_the_ripper.txt",
    decksUsed: [
      "L1 Whitechapel / L1 Whitechapel 2026.pptx",
      "L1 Whitechapel / Whitechapel Conditions Guided Reading.pptx",
      "L1 Whitechapel / Whitechapel Sources.pptx",
      "L2 Murders & Victims / L2 Victims & Murders 2026.pptx",
      "L2 Murders & Victims / Stride & Eddowes Task.pptx",
      "L2 Murders & Victims / Victims Worksheet.pptx",
      "L3 Role of the Police / L3 Police 2026.pptx",
      "L3 Role of the Police / Police Methods Homework.pptx",
      "L4 Progress Check & Suspects / L4 Progress Check & Suspects.pptx",
      "L4 Progress Check & Suspects / Suspects Table.pptx",
      "L5 The Media & Review / L5 The Media & Review 2026.pptx",
      "L5 The Media & Review / Lucy Worsley - Clip Sheet.pptx"
    ],
    notes: "Lesson titles, sequence, learning objectives, the enquiry question, the nine conditions and the physical/social sort, the figures (Victoria 1837–1901; East End 900,000; H Division 176,000; Whitechapel over 78,000; seven per house; 8,000 sleeping rough; over 200 lodging houses; 4 pence and tuppence; up to 80 to a dormitory; 1,200 police estimate; 30,000 Jewish arrivals 1881–1891; six feet of gaslight; 1829 Peel; £1 a week; 80,000 leaflets; 76 butchers; over 2,000 questioned after the double event; well over 100 suspects; Met file up to 11, historians four to eight, Fido's Canonical Five), the five women's names, places and dates, the double event timeline (about 1am; PC Watkins every 15 minutes; 1.30 and 1.45; three entrances; three plain-clothes officers), the police methods and the reasons they failed, the two forces and the Warren decision, the reward question, the Hutchinson description, the four suspects and the Albert Victor alibis, the Punch cartoon and the department's content / own knowledge / NOP / limitation method with its sentence starters, the five progress-check success criteria, the New York Times line, the L5 media questions and the Lucy Worsley clip questions, and the four review factors with the PEEL starters are taken from the department's decks. The 'Diamond 9.pptx' deck in the dump has no extractable text. All explanations, questions, worked examples and model paragraphs are original; the deck's five model answers (L1 slide 15 fog example; L3 slide 10 decoys example; L3 slide 11 two-forces example; L3 slide 16 cartoon answer; L4 slides 5-6 alcohol paragraph) are not reproduced and their phrases are banned in verify.py. The only quotations are two short primary-source fragments the deck prints, both out of copyright: a newspaper article of 1888 (Whitechapel Sources, Source C; the deck names no title) and The New York Times (1880s). The guided-reading sheet, the online case study, Arthur Morrison (1896), the anti-immigrant sources, the Hutchinson statement, Ellen Holland's statement and the BBC programme are paraphrased, never quoted. Corrections applied and flagged in NOTES.md: Annie Chapman's date is 8 September 1888 (the deck's table says 6th); the Goulston Street message was chalked (the deck says 'left in blood'); the deck's 'Mary Anne' is spelt Mary Ann; the guided reading's Dorset Street sentence is missing a 'not' and is given as the police going down only in teams of four; the deck's source-skills sentence starter ends 'an enquiry into the Recovery', which belongs to another topic. Facts the deck's own questions need but does not print (why the leaflets failed; the Home Secretary's refusal of a reward; Booth's map) are supplied from reference knowledge and listed in NOTES.md for the Head of History to confirm. astra/2: per-option feedback on every mcq and gap, misconceptions with checks on all three numeric items, explain prompts on every module, three context modules (ch2, ch4 numeric, ch5), glossary chapters, four Connections groups, spacing; no widgets, no constellation, no pretext.l1."
  }
};
