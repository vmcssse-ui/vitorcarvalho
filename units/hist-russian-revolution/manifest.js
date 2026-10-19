// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 History · Year 9 Topic 1: The Russian Revolution · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   every date, name and sequence is held in an independent CHRONOLOGY table in verify.py; every four-digit year and
//   every number ≥ 100 in pupil text must be in that table or the FACTS table; every "order" task is compared with a
//   canonical sequence whose steps carry sort keys, so the order is checked, not just the membership; every mcq / gap
//   answer is compared with an independent answer key; numeric items carry `check` and `misconceptions` (each with its
//   own `check`); contexts share the task's answer by construction.
//   CALENDAR GUARD: Russia used the Julian calendar ("Old Style") until February 1918, thirteen days behind the
//   Gregorian calendar we use ("New Style"). The department's decks mix the two without saying so: they call the
//   February Revolution the "March Revolution", date the abdication 15 March, and give the October Revolution as both
//   25 October and 7 November. Every dated string in this manifest names its calendar, and verify.py FAILS on any
//   Old-Style / New-Style date that does not.
//   Quotation guard: the ONLY quoted words are two short fragments printed on the department's October Revolution
//   slide — Lenin's message to the Bolshevik Central Committee (12 September 1917, Old Style) and the Committee's own
//   declaration. Both authors died more than 70 years ago. Nothing by a modern historian or textbook is quoted, and
//   the deck's own model narrative paragraph is fingerprinted and banned.
//   astra/2: per-wrong-option `feedback` on every mcq/gap; `misconceptions` on every numeric; `explain` on every
//   module; `glossary[].chapter`; `connections` 4 × 4 ⊂ glossary; `meta.spacing [2,7,30]`; no constellation; no
//   pretext.l1 (the home-language pass follows separately).
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["hist-russian-revolution"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "hist-russian-revolution",
    subjectKey: "history",
    subject: "History",
    board: "AQA",
    spec: "KS3 → 8145",
    specRef: "KS3 Year 9 Topic 1: The Russian Revolution — foundations for GCSE History 8145 (narrative accounts; causes, events and consequences; change and continuity)",
    year: 9,
    tier: "KS3",
    title: "The Russian Revolution",
    sub: "How one family ruled Russia for three hundred years, why the Tsar fell in 1917, how the Bolsheviks took power eight months later, and how much really changed.",
    bigQuestion: "To what extent did the Russian Revolution bring about change?",
    lessonCount: 7,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Life in Tsarist Russia", question: "What was life like in Tsarist Russia?", keywords: ["monarch", "peasant", "Empire", "feudal system", "autocrat", "Romanovs"] },
    { n: 2, title: "The 1905 Russian Revolution", question: "To what extent did the 1905 Revolution bring about change?", keywords: ["manifesto", "mutiny", "reforms", "riots", "Duma", "revolution"] },
    { n: 3, title: "The February 1917 Revolution", question: "What were the causes, events and consequences of the February Revolution?", keywords: ["Autocracy", "Bread", "Conspirators and Critics", "Duma", "Economy", "First World War", "Grigori Rasputin"] },
    { n: 4, title: "The October 1917 Revolution and progress check", question: "Why was there a second revolution in October 1917, and how do you write a narrative account?", keywords: ["Provisional Government", "Kerensky", "Kornilov", "Lenin", "Red Guards", "narrative"] },
    { n: 5, title: "Bolshevik rule and the creation of the Soviet Union, 1917–1922", question: "What changed in Russia under Bolshevik rule by 1922?", keywords: ["communism", "Karl Marx", "Marxists", "comrade", "former people", "Soviet Union"] },
    { n: 6, title: "Revision: preparing the narrative question", question: "Can you write a narrative account of the key events of the October 1917 Revolution?", keywords: ["cause", "event", "consequence", "sequence", "link", "evidence"] },
    { n: 7, title: "End-of-topic assessment", question: "Can you recall and use your knowledge of the Russian Revolutions under assessment conditions?", keywords: ["sequencing", "evidence", "narrative", "Winter Palace", "Soviet Union", "assessment"] }
  ],

  glossary: [
    { term: "Tsar", means: "The Russian word for king: the ruler of the Russian Empire.", chapter: "tsarist-russia" },
    { term: "autocracy", means: "A system in which one person holds all the political power.", chapter: "tsarist-russia" },
    { term: "dynasty", means: "A family that rules a country, passing power from parent to child. The Romanovs were Russia's dynasty from 1613.", chapter: "tsarist-russia" },
    { term: "peasant", means: "A person who worked the land, usually very poor. Your lesson says about 85 per cent of Russians were peasants.", chapter: "tsarist-russia" },
    { term: "industrialisation", means: "The building of factories, mines and railways, which turns farmers into city workers.", chapter: "tsarist-russia" },
    { term: "serf", means: "A peasant who was owned by a landowner. Serfdom was abolished, but peasants still had to work the land and pay the landowner.", chapter: "nineteen-five" },
    { term: "Duma", means: "The Russian word for a parliament: a group elected to help run the country.", chapter: "nineteen-five" },
    { term: "manifesto", means: "A published plan for running the country. The October Manifesto of 1905 is the one to remember.", chapter: "nineteen-five" },
    { term: "mutiny", means: "When soldiers or sailors refuse to obey orders.", chapter: "nineteen-five" },
    { term: "Okhrana", means: "The Tsar's secret police, used to spy on and remove his opponents.", chapter: "why-the-tsar-fell" },
    { term: "inflation", means: "A rise in prices, so the same wage buys less food. Your lesson says Russian prices rose 400 per cent between 1914 and 1917.", chapter: "why-the-tsar-fell" },
    { term: "abdicate", means: "To give up the throne. Nicholas II abdicated in 1917, ending three hundred years of Romanov rule.", chapter: "february-1917" },
    { term: "soviet", means: "A council of workers and soldiers, elected to speak and act for them.", chapter: "february-1917" },
    { term: "Provisional Government", means: "The temporary government set up by Duma politicians after the Tsar abdicated.", chapter: "february-1917" },
    { term: "Bolsheviks", means: "The revolutionary party led by Vladimir Lenin, which seized power in October 1917.", chapter: "october-1917" },
    { term: "communism", means: "The idea, developed by Karl Marx, that property should be owned by the whole community and everyone should be equal.", chapter: "bolshevik-rule" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 glossary terms used exactly once.
  connections: [
    { group: "How the Tsar ruled", terms: ["Tsar", "autocracy", "dynasty", "Okhrana"] },
    { group: "Russia's people and money", terms: ["peasant", "serf", "industrialisation", "inflation"] },
    { group: "Parliaments and promises", terms: ["Duma", "manifesto", "mutiny", "Provisional Government"] },
    { group: "Revolution and after", terms: ["abdicate", "soviet", "Bolsheviks", "communism"] }
  ],

  chapters: [
    /* ───────────── 1 · life in Tsarist Russia ───────────── */
    {
      key: "tsarist-russia", n: 1, title: "Life in Tsarist Russia",
      lead: "What the Russian Empire was like in the 1800s, who the Romanovs and the Tsars were, how autocracy worked, and why so many Russians were unhappy before any revolution began.",
      covers: [1],
      pretext: {
        words: [
          { word: "Tsar", means: "the Russian word for king: the ruler of the Russian Empire", sentence: "The Tsar ruled Russia without a parliament to answer to." },
          { word: "autocrat", means: "a ruler who holds all the political power himself", sentence: "Nicholas II was an autocrat, so no law could limit what he decided." },
          { word: "dynasty", means: "a family that rules a country, passing power from parent to child", sentence: "The Romanov dynasty held the Russian throne for three hundred years." },
          { word: "peasant", means: "a person who worked the land, usually very poor", sentence: "Most Russians were peasants who grew food on land they did not own." },
          { word: "industrialisation", means: "the building of factories, mines and railways", sentence: "Industrialisation turned peasants into city workers in a single generation." }
        ],
        passage: [
          "In the 1800s the Russian Empire was the largest country in the world.",
          "One family ruled it: the Romanovs.",
          "They had come to power in 1613.",
          "Their ruler was called the Tsar, the Russian word for king.",
          "The Tsar was an autocrat.",
          "That means one person held all the political power.",
          "There was no elected parliament and no lawful way to challenge him.",
          "Three pillars held him up: the army, the civil service and the Orthodox Church.",
          "About 85 per cent of Russians were peasants who farmed the land.",
          "Most of them were very poor.",
          "Nicholas II became Tsar in 1894.",
          "He was a quiet family man who had never wanted the job.",
          "When Russia built factories, a new group grew in the cities.",
          "These workers had long hours, low pay and no voice either."
        ]
      },
      sections: [
        {
          heading: "Russia in the 1800s: huge, cold and unequal",
          paragraphs: [
            "In the nineteenth century the Russian Empire was the largest country on earth. Your lesson asks you to look at a map and notice three things: its size, how far it reached, and how much of it was difficult land. The empire ran from Europe right across northern Asia. Your lesson gives the figure as roughly 95 times the area of the United Kingdom today.",
            "Your bell work asks you to study a picture of the order of Russian society. At the top sat the Tsar and his family. Below them came the nobles who owned the land, the officers of the army and the leaders of the Orthodox Church. At the bottom, and far more numerous than everyone else put together, were the peasants. Your lesson says about 85 per cent of Russians were peasants.",
            "The bell work also asks which system from Year 7 this looks like. The answer is the feudal system of medieval England: one ruler at the top, a small group of landowners below him, and a huge majority of farming people at the bottom with no say at all. Russia still looked like that centuries after England had changed."
          ],
          tip: "If a question asks where power lay in Russia in the 1800s, answer with the shape of the pyramid: nearly all of it sat at the very top, and almost none at the bottom."
        },
        {
          heading: "The Romanovs, the Tsars and autocracy",
          paragraphs: [
            "The Romanov dynasty came to power in 1613 and ruled until 1917: about three hundred years, which is the figure your lesson uses. A dynasty passes power down inside one family, so nobody chose the Tsar and nobody could vote him out.",
            "The Tsar ruled as an autocrat. Autocracy means one person holds all the political power. Nicholas II could appoint or sack any minister he liked, and he believed, as the Orthodox Church taught, that God had chosen him to rule. Russia was therefore not a democracy. Your lesson puts it plainly: the country was run by one man who acted as a dictator.",
            "To govern an empire that size, Nicholas leaned on what your lesson calls the three pillars of autocracy: the army, the civil service and the Orthodox Church. There was no elected parliament until 1905, there were no elections for government jobs, and there was no lawful method of challenging the Tsar's decisions."
          ],
          worked: {
            q: "Explain one reason why it was hard for people in Russia to change the way their country was run in 1900.",
            steps: [
              "Make the point in one sentence: it was hard to change Russia because the Tsar was an autocrat who held all the political power.",
              "Give the evidence from your lesson: there was no elected parliament before 1905, no elections for government posts, and no lawful way to challenge the Tsar.",
              "Explain the link: if there is no parliament to vote in and no court to appeal to, the only ways left to push for change are protest, strikes or violence.",
              "Finish with what this shows: it shows that autocracy itself was one of the causes of revolution, because it left people no peaceful route."
            ],
            answer: "Point, evidence, explain: the Tsar was an autocrat; there was no parliament, no elections and no legal challenge; so the only remaining routes were protest and force, which is why pressure built up instead of being settled."
          },
          tip: "Learn the three pillars as a list you can say in order: army, civil service, Church. Then add the missing fourth thing: no parliament."
        },
        {
          heading: "Nicholas II: the man who did not want the throne",
          paragraphs: [
            "Nicholas II became Tsar in 1894, when his father died, and he was crowned in a great ceremony in 1896. Your lesson uses both dates, so be careful: he was already ruling from 1894, and the coronation two years later was the public ceremony that confirmed it.",
            "Your lesson says something surprising about him. Nicholas never really wanted to rule. He was a quiet family man who would rather have lived in the countryside with his wife and children. He was Tsar only because he had been born into the Romanov dynasty, and a dynasty does not ask whether the next heir is any good at the job.",
            "That is the weakness at the heart of autocracy. If one person holds every decision, everything depends on that person's judgement, and nobody can correct him. Your lesson's verdict is that Nicholas was extremely powerful but not a very good leader. Keep that in mind: it will matter in 1905, and it will matter even more in 1917."
          ],
          tip: "Two dates, two different things: 1894 is when Nicholas became Tsar; 1896 is the coronation. Say which one you mean."
        },
        {
          heading: "Factories, cities and a new group of unhappy people",
          paragraphs: [
            "Towards the end of the 1800s Russia began to industrialise. New factories, mines and railways were built, and the empire grew richer. Peasants left the villages to work in the cities, and within a generation Russia had something it had never had before: a large industrial working class.",
            "Life for those workers was hard. They worked very long hours for very low pay and lived in cramped, unhealthy housing. They had left behind the poverty of the countryside and arrived at a different kind of poverty in the city.",
            "Your lesson's extension question asks how making Russia richer could create more problems for the Tsar. Here is the answer. Peasant anger was spread thinly across thousands of villages. Factory anger was concentrated: thousands of people with the same complaint, in the same street, able to talk to each other and to stop work on the same morning. Industrialisation did not create the unhappiness, but it gave the unhappiness a way to organise."
          ],
          tip: "When you write about causes, separate the social groups: peasants, city workers, middle classes, nobles. Each wanted something different, and that matters later."
        }
      ],
      gate: [
        { kind: "mcq", q: "What does the word autocrat mean?", options: ["A ruler who holds all the political power himself", "A ruler elected by the people every few years", "A king who must obey a written set of laws", "A government made up of several political parties"], answer: 0, why: "An autocrat holds all the political power. Nicholas II could appoint or sack any minister and no law or parliament could stop him.",
          feedback: [
            "",
            "That describes an elected leader, the opposite of an autocrat. Nobody voted for the Tsar; he inherited the throne and held all the power himself.",
            "A ruler limited by law is a constitutional monarch, like a modern king or queen. The Tsar was bound by no such laws, which is exactly what autocracy means.",
            "Several parties sharing power is a democracy. Russia had no elected parliament at all before 1905, and power sat with one man."
          ] },
        { kind: "gap", q: "The Romanov dynasty came to power in Russia in ___ and ruled for about three hundred years.", answer: "1613", options: ["1613", "1894", "1905"], why: "The Romanovs came to power in 1613 and the last Tsar abdicated in 1917, which is where your lesson's figure of three hundred years comes from.",
          feedback: {
            "1894": "1894 is the year Nicholas II himself became Tsar. His family, the Romanovs, had already held the throne since 1613.",
            "1905": "1905 is the year of the first revolution, which you will study next. The Romanov dynasty had been ruling since 1613, long before that."
          } },
        { kind: "mcq", q: "Which three institutions did your lesson call the pillars of autocracy that held up the Tsar's power?", options: ["The army, the civil service and the Orthodox Church", "The Duma, the courts and the newspapers", "The nobles, the merchants and the peasants", "The navy, the railways and the banks"], answer: 0, why: "Nicholas relied on the army to enforce his will, the civil service to run the empire and the Orthodox Church to teach that he was chosen by God.",
          feedback: [
            "",
            "There was no Duma before 1905, and courts and newspapers did not support the Tsar's power; the Church, the army and the civil service did.",
            "The nobles were powerful, but your lesson names three institutions rather than three social groups: army, civil service, Orthodox Church. The peasants held no power at all.",
            "Railways and banks mattered to the economy, not to the Tsar's political power. The three pillars were the army, the civil service and the Orthodox Church."
          ] }
      ],
      modules: [
        {
          title: "Key words for Tsarist Russia",
          task: {
            kind: "match",
            q: "Match each key word to its meaning.",
            pairs: [
              ["Tsar", "The Russian word for king: the ruler of the Russian Empire"],
              ["Autocracy", "A system in which one person holds all the political power"],
              ["Dynasty", "A family that rules a country, passing power from parent to child"],
              ["Peasant", "A person who worked the land, usually very poor"],
              ["Orthodox Church", "The Church that taught Russians their ruler was chosen by God"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Two of the five words are about how power is held. Which two?",
                "One word is a job title, one is a family, and one is a social group.",
                "Start with the word you are surest of and cross off its meaning.",
                "Check the last pair makes sense when you read it aloud."
              ],
              example: {
                q: "Match these Year 7 words: monarch, baron, villein. Meanings: a peasant tied to a lord's land; a king or queen; a great landowner who served the king.",
                steps: ["Monarch is the ruler, so that is the king or queen.", "A baron held land from the king, so that is the great landowner.", "The villein is the farming person at the bottom."],
                answer: "Monarch: a king or queen. Baron: a great landowner who served the king. Villein: a peasant tied to a lord's land."
              }
            },
            core: { hint: "Autocracy is a system, a dynasty is a family, and a Tsar is one person. Sort them by what kind of thing each word names." },
            stretch: { extend: "Explain how the Orthodox Church helped the Tsar stay in power, and why losing the Church's support would have been dangerous for him." }
          },
          explain: "Say, in one sentence, the difference between a dynasty and an autocracy.",
          why: "A Tsar is the ruler; autocracy is the system he ruled under; a dynasty is the family that handed the throne down; a peasant is one of the millions at the bottom; and the Orthodox Church taught that the whole arrangement came from God."
        },
        {
          title: "Why were the people of Russia unhappy?",
          task: {
            kind: "written",
            q: "Explain why many people in Russia were unhappy with the way their country was ruled in 1900. Write one paragraph of four to six sentences.",
            criteria: [
              "I name at least two groups of people and say what each one was unhappy about.",
              "I use the word autocracy or autocrat correctly, and explain what it meant for ordinary people.",
              "I support a point with a detail from the chapter, such as the 85 per cent figure or the lack of a parliament.",
              "I finish by linking the unhappiness to the lack of any peaceful way to change things."
            ],
            model: "By 1900 many different groups in Russia were unhappy, and for different reasons. About 85 per cent of Russians were peasants who worked land they did not own and lived in deep poverty, so they resented the landowners and the taxes they had to pay. In the cities a newer group, the industrial workers, had arrived from the villages to find long hours, low pay and cramped housing. Even wealthier Russians were frustrated, because Nicholas II ruled as an autocrat and did not have to listen to anyone's opinion but his own. The most important point is that there was no elected parliament before 1905 and no lawful way to challenge the Tsar, so people with a complaint had nowhere to take it. That is why the unhappiness built up instead of being settled."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: By 1900 many groups in Russia were unhappy.",
                "Sentence 2: pick the peasants. What did they not own, and how poor were they?",
                "Sentence 3: pick the city workers. What were their hours, pay and housing like?",
                "Last sentence: explain that there was no parliament and no lawful way to complain, so nothing was ever settled."
              ],
              example: {
                q: "Explain why many people in medieval England were unhappy with the feudal system. Write one paragraph.",
                steps: ["Name a group: the villeins, who farmed land they did not own.", "Give a detail: they owed days of work to the lord and could not leave the manor.", "Name a second group: the barons, who resented a king who ignored them.", "Finish: there was no way for an ordinary person to appeal against a lord."],
                answer: "Two groups, each with a detail, and a closing point about having no way to appeal."
              }
            },
            core: { hint: "Two groups at least, one detail each, then the point that matters most: there was no parliament and no lawful route to change." },
            stretch: { extend: "Explain which group you think was the most dangerous to the Tsar in 1900, and give one reason for your judgement." }
          },
          explain: "Say, in one sentence, which group's unhappiness you think mattered most, and why.",
          why: "A strong answer names more than one group, gives each a specific grievance, and ends on the structural point: autocracy left no peaceful route for any of them, so the pressure had nowhere to go."
        },
        {
          title: "Richer, and more dangerous",
          task: {
            kind: "mcq",
            q: "Russia built factories and railways at the end of the 1800s and grew richer. Why did this create a new problem for the Tsar?",
            options: [
              "It gathered a large working class into the cities, where they could organise strikes together",
              "It made Russia poorer, so the Tsar could no longer pay his army",
              "It gave the peasants the right to vote for the first time",
              "It ended the Orthodox Church's influence over ordinary Russians"
            ],
            answer: 0,
            why: "Industrialisation concentrated unhappy people. Thousands of workers with the same complaint, living in the same city, could stop work on the same morning in a way that scattered villages never could.",
            feedback: [
              "",
              "Industrialisation made Russia richer, not poorer; that is the point of the question. The new problem was political, not financial: a large working class gathered in the cities.",
              "Nobody in Russia could vote for a parliament before 1905, and the peasants gained very little even then. The change industrialisation brought was a new class of city workers.",
              "The Orthodox Church remained one of the three pillars of the Tsar's power. What was new was the industrial working class in the cities."
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask what industrialisation did to where people lived: it moved them from villages into cities.",
                "Ask what changes when angry people live close together rather than far apart.",
                "Three of the options describe things that did not happen. Cross those off.",
                "The remaining option is about organising. Check that it matches your answer to step two."
              ],
              example: {
                q: "Why was a nineteenth-century mill town harder for a government to control than a scattered farming district?",
                steps: ["In a mill town hundreds of workers share the same employer and the same grievance.", "They meet every day and can all stop work at once.", "In scattered villages the same anger never becomes one action."],
                answer: "Because concentration lets shared anger turn into one organised action, such as a strike."
              }
            },
            core: { hint: "Think about geography, not money. What does putting thousands of unhappy people in one place make possible?" },
            stretch: { extend: "Explain one thing the Tsar could have done to make industrial workers less likely to strike, and say whether you think it would have worked." }
          },
          explain: "Say, in one sentence, why workers in a city were harder for the Tsar to ignore than peasants in a village.",
          why: "Industrialisation made Russia richer and the Tsar's position weaker at the same time, because it turned scattered discontent into a concentrated, organised working class. That working class is who marches in 1905 and strikes in 1917."
        }
      ]
    },

    /* ───────────── 2 · the 1905 Revolution ───────────── */
    {
      key: "nineteen-five", n: 2, title: "The 1905 Revolution",
      lead: "The long-term and short-term causes of the first revolution, what happened on Bloody Sunday and across the year, what the October Manifesto promised, and whether anything really changed.",
      covers: [2],
      pretext: {
        words: [
          { word: "serf", means: "a peasant who was owned by a landowner", sentence: "Serfdom had ended, but peasants still had to work the landowner's fields and pay him." },
          { word: "mutiny", means: "when soldiers or sailors refuse to obey orders", sentence: "The mutiny on the battleship Potemkin showed the Tsar could not rely on his forces." },
          { word: "manifesto", means: "a published plan for running the country", sentence: "The October Manifesto was the Tsar's written promise of reform." },
          { word: "Duma", means: "the Russian word for a parliament", sentence: "The Tsar agreed to a Duma, then made sure it had very little power." },
          { word: "reforms", means: "changes a government makes to try to improve things", sentence: "The reforms of 1905 looked generous on paper and felt thin in practice." },
          { word: "revolution", means: "a quick change of government or social order", sentence: "Historians still argue whether 1905 was a real revolution." }
        ],
        passage: [
          "By 1905 many groups in Russia wanted change.",
          "Peasants were angry about land, rent and famine.",
          "Middle-class Russians wanted a say in decisions.",
          "Then Russia lost a war against Japan.",
          "Losing to a country they thought weak was humiliating.",
          "On 22 January 1905, New Style, workers marched to the Winter Palace.",
          "They carried a petition for the Tsar and brought their families.",
          "Soldiers opened fire and killed over 100 people.",
          "This day is called Bloody Sunday.",
          "Strikes, riots and mutinies spread across the empire.",
          "In October the Tsar published the October Manifesto.",
          "It promised free speech and an elected parliament, the Duma.",
          "Then he used the army to crush what was left of the revolt.",
          "Within months he took most of the promises back."
        ]
      },
      sections: [
        {
          heading: "Long-term causes: land, class and a weak Tsar",
          paragraphs: [
            "Your lesson's reading divides the causes of 1905 into long-term problems and one short-term trigger. Start with the peasants. Russia depended on farming, and the people who farmed were unhappy. They had once been serfs, owned by the landowner along with the land. Serfdom had been abolished, but the peasants still had to work the landowner's fields and keep paying him, and when harvests failed there was famine. Freedom on paper had not made them better off.",
            "The second long-term cause was the middle classes. Richer, educated Russians were angry at how decisions were made. The Tsar held all the power, and because Nicholas was a weak ruler he made poor choices and asked nobody's opinion. Notice what these people wanted, because it is easy to get wrong in an exam: they did not want to get rid of the Tsar. They wanted a parliament so that their views would count.",
            "Third, revolutionary parties were growing. The Liberals spoke for the middle classes and wanted to keep the Tsar but reduce his power by creating a Duma. The Socialist Revolutionaries wanted far more radical change, used violence, and aimed to give power to peasants and workers; your lesson says they carried out about 2,000 political assassinations, though they were poorly organised. Your lesson also records that the revolutionaries split in 1903 over a single question: start the revolution now, as Lenin wanted, or wait until the workers were ready?"
          ],
          tip: "Sort the causes into long-term (land, class, autocracy, revolutionary parties) and short-term (the lost war). Examiners reward that sorting."
        },
        {
          heading: "The short-term cause and the trigger: Japan, then Bloody Sunday",
          paragraphs: [
            "The short-term cause was the Russo-Japanese War of 1904 to 1905. Russia lost. Russians had believed their empire was a great military power and that Japan was weak, so defeat was a national embarrassment, and the blame landed on the Tsar personally. Humiliation abroad turned into fury at home.",
            "The trigger came on 22 January 1905, New Style. A priest, Father Gapon, led a peaceful march of workers and their families to the Tsar's Winter Palace to hand over a petition. They were not armed and they were not calling for revolution. Troops opened fire on them, and your lesson says over 100 people were killed. The day is remembered as Bloody Sunday.",
            "A note on the date. Russia still used the old Julian calendar, which was thirteen days behind the calendar we use. In Russia this was 9 January, Old Style; in Britain it was 22 January, New Style. Your lesson gives the New Style date. Both are the same day, and knowing that will stop you getting into a muddle when the dates for 1917 look strange."
          ],
          worked: {
            q: "Explain why the Russo-Japanese War was such an important cause of the 1905 Revolution.",
            steps: [
              "Point: the war mattered because it destroyed what was left of people's respect for the Tsar.",
              "Evidence from your lesson: Russia lost the war of 1904 to 1905 to a country Russians thought was weak, and the defeat was a national embarrassment.",
              "Explain: an autocrat's only real claim is that he is a strong, God-chosen ruler, so a humiliating defeat attacked the one thing holding his authority up.",
              "Link forward: that loss of respect is why a peaceful petition in January 1905 could turn into an empire-wide revolt."
            ],
            answer: "The defeat humiliated Russia and the blame fell on the Tsar personally, which stripped away the respect autocracy depended on, so the next grievance tipped the country into revolt."
          },
          tip: "Trigger and cause are different. The war and the land problems were causes; Bloody Sunday was the trigger that set them alight."
        },
        {
          heading: "Events: the year the empire stopped working",
          paragraphs: [
            "Bloody Sunday set off a chain of events that ran all year. Your lesson's account says the reaction spread fastest in the industrial areas, and that by the end of January 1905 there were hundreds of thousands of workers on strike in every major city of the empire. Students joined in; at Moscow University alone over 3,000 of them held a rally, burned a portrait of the Tsar and hung red flags from the buildings. In February the Tsar's uncle, Grand Duke Sergei, was assassinated.",
            "Different groups acted in different ways, and your lesson asks you to judge how dangerous each was. Peasants burned landowners' houses and took their food. Sailors on the battleship Potemkin mutinied against their officers over bad conditions. Workers in cities such as St Petersburg formed councils, called soviets, to organise their strikes, and in the autumn a general strike brought the country to a halt. The army and navy mattering most of all: once men in uniform refuse orders, an autocrat has nothing left.",
            "The Tsar first tried a small concession. In mid-February he offered the Bulygin Rescript, which promised an assembly that could advise but not decide, some religious tolerance and a cut in the peasants' redemption payments. It was not enough, and the revolution grew."
          ],
          tip: "Learn one example for each group: peasants burning estates, sailors on the Potemkin, workers forming soviets, a general strike. Specific examples lift a narrative answer."
        },
        {
          heading: "The October Manifesto: change, or no change?",
          paragraphs: [
            "In October 1905 Nicholas asked his minister Witte to draft a way out. The October Manifesto was published on 30 October 1905, New Style, which was 17 October in Russia's own Old Style calendar. It granted freedom of speech, religion, assembly and organisation, and it promised an elected national assembly, the Duma, which could approve or reject new laws.",
            "Your lesson then asks the hard question: did anything really change? Put the evidence in two columns. On the change side: the Tsar had to share power with a Duma, censorship was loosened, freedom of speech was extended, and a written promise of rights existed for the first time. On the no-change side: the Duma could be ignored, it was filled with rich men and nobles, no power was shared with the workers or the peasants, and the Tsar remained supreme leader with a harsh new prime minister, Stolypin.",
            "What happened next settles the argument for most historians. About six months after the Manifesto the Tsar issued the Fundamental Laws, which let him dissolve the Duma whenever he liked and stopped it introducing reforms without his approval. He closed the Duma when it displeased him, and after the second one the elections were rigged so that the third and fourth Dumas agreed with him. The liberals were fairly satisfied in 1905; the Bolsheviks and Mensheviks were not, because the Manifesto gave nothing to the workers and peasants they claimed to speak for."
          ],
          tip: "For a change-and-continuity question, give one point from each column and then judge. The strongest judgement uses what happened after the promise, not just the promise."
        }
      ],
      gate: [
        { kind: "mcq", q: "What happened on Bloody Sunday, 22 January 1905, New Style?", options: ["Soldiers opened fire on a peaceful march of workers and families taking a petition to the Tsar", "Sailors on the battleship Potemkin mutinied against their officers", "The Tsar published the October Manifesto promising a parliament", "Russia's navy was defeated by Japan in a single afternoon"], answer: 0, why: "Father Gapon led a peaceful, unarmed march to the Winter Palace with a petition. Troops fired on the crowd and your lesson says over 100 people were killed.",
          feedback: [
            "",
            "The Potemkin mutiny was a different event later in 1905. Bloody Sunday was the shooting of a peaceful march that was carrying a petition to the Tsar.",
            "The October Manifesto came at the end of the year, as the Tsar's response to the revolution. Bloody Sunday in January is what started it.",
            "Russia's defeat by Japan was a cause of the revolution, not the event of Bloody Sunday itself, which was the shooting of marchers in the capital."
          ] },
        { kind: "gap", q: "The Russian word for a parliament, promised in the October Manifesto, is the ___.", answer: "Duma", options: ["Duma", "manifesto", "soviet"], why: "A Duma is an elected parliament. The October Manifesto promised one that could approve or reject new laws.",
          feedback: {
            "manifesto": "A manifesto is a published plan for running the country, which is what the Tsar issued in October 1905. The parliament it promised was the Duma.",
            "soviet": "A soviet is a council of workers and soldiers, set up by the workers themselves, not by the Tsar. The parliament promised in the Manifesto was the Duma."
          } },
        { kind: "mcq", q: "Which of these is the strongest evidence that the 1905 Revolution did NOT really change Russia?", options: ["Within about six months the Tsar gave himself the power to dissolve the Duma whenever he liked", "The October Manifesto promised freedom of speech and freedom of religion", "Workers in St Petersburg formed soviets to organise their strikes", "Sailors on the battleship Potemkin mutinied against their officers"], answer: 0, why: "A promise only counts if it cannot be taken back. The Fundamental Laws let the Tsar dissolve the Duma at will, which is why most historians say the change was thin.",
          feedback: [
            "",
            "That is evidence on the other side: the Manifesto did promise real rights. The point against change is what the Tsar did afterwards, when he took the power to dissolve the Duma.",
            "Forming soviets shows workers organising themselves during the revolution. It does not show whether the settlement that ended it changed anything.",
            "The Potemkin mutiny is an event of the revolution, not a measure of what changed afterwards. Look for what the Tsar did to the Duma once the protests died down."
          ] }
      ],
      modules: [
        {
          title: "The 1905 Revolution in order",
          task: {
            kind: "order",
            q: "Put these stages of the 1905 Revolution in the order your lesson gives them.",
            items: [
              "Russia begins to lose the war against Japan, and the country is humiliated",
              "Father Gapon leads a peaceful march to the Winter Palace and troops open fire",
              "Strikes, peasant riots and mutinies spread across the empire",
              "The Tsar publishes the October Manifesto, promising rights and a Duma",
              "The army is used to crush the remaining strikes and arrest revolutionaries"
            ]
          },
          levels: {
            support: {
              steps: [
                "Your lesson uses four headings: causes, trigger, reaction, result. Match each item to one heading.",
                "The cause came before the trigger, so the war comes first.",
                "The reaction is what ordinary people did after the trigger.",
                "Two items are left: a promise and a crackdown. Which did the Tsar do first, while he was still frightened?"
              ],
              example: {
                q: "Put these stages of a school fire drill in order: the bell sounds; classes line up on the field; the register is called; a member of staff presses the alarm.",
                steps: ["Nothing happens until the alarm is pressed.", "Then the bell sounds.", "Then classes leave and line up.", "The register is called last, once everyone is outside."],
                answer: "a member of staff presses the alarm; the bell sounds; classes line up on the field; the register is called"
              }
            },
            core: { hint: "Cause, trigger, reaction, result. The Tsar promises first and crushes afterwards, once he feels safe again." },
            stretch: { extend: "Explain why the Tsar was able to crush the revolution after making his promises, and what that tells you about how much power he had really given away." }
          },
          explain: "Say, in one sentence, why the October Manifesto came before the crackdown rather than after it.",
          why: "Defeat by Japan was the cause; Bloody Sunday the trigger; strikes, riots and mutinies the reaction; the October Manifesto the result; and the army's crackdown is what the Tsar did once the danger had passed."
        },
        {
          title: "Who wanted what in 1905?",
          task: {
            kind: "match",
            q: "Match each group in 1905 to what it wanted or did.",
            pairs: [
              ["Peasants", "Land of their own, and an end to paying the landowner; some burned estates"],
              ["Middle-class Liberals", "To keep the Tsar but reduce his power by creating a Duma"],
              ["Socialist Revolutionaries", "Radical change and power for peasants and workers, using violence"],
              ["Urban workers", "Better pay and conditions; they struck and formed soviets"],
              ["Army and navy", "Better treatment; some units mutinied and stopped obeying orders"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Two groups wanted political change above all. Which two?",
                "Two groups wanted better daily conditions: one in the fields, one in the factories.",
                "One group is dangerous to the Tsar not because of what it wanted but because of what it stopped doing.",
                "Match that last group last, and read all five pairs back."
              ],
              example: {
                q: "Match these groups in a strike at a modern factory to what they want: the workers; the managers; the customers. Options: the goods delivered on time; higher pay and safer machines; the line running again at the lowest cost.",
                steps: ["The workers are striking, so they want pay and safety.", "The managers want production restarted cheaply.", "The customers only care that their order arrives."],
                answer: "Workers: higher pay and safer machines. Managers: the line running again at the lowest cost. Customers: the goods delivered on time."
              }
            },
            core: { hint: "Ask of each group: did it want political power, better conditions, or simply to stop being used? The answers are all different." },
            stretch: { extend: "Your lesson asks you to score how much of a threat each group was to the government, from one to ten. Choose the group you would score highest and justify it in two sentences." }
          },
          explain: "Say, in one sentence, why the Liberals and the Socialist Revolutionaries could never have joined forces easily.",
          why: "Peasants wanted land, Liberals wanted a parliament, Socialist Revolutionaries wanted radical change by force, workers wanted pay and conditions, and parts of the army and navy simply stopped obeying. The Tsar survived 1905 partly because these aims pulled in different directions."
        },
        {
          title: "Change or no change?",
          task: {
            kind: "mcq",
            q: "The October Manifesto promised an elected Duma. Did this mean the Tsar had given up his power?",
            options: [
              "No: he kept the right to ignore or dissolve the Duma, so the power stayed with him",
              "Yes: from 1905 no decision in Russia could be made without the Duma's consent",
              "Yes: the Duma was elected by all Russian men and women over the age of 21",
              "No: the Duma was never actually set up, so the promise meant nothing at all"
            ],
            answer: 0,
            why: "The Duma met, but the Fundamental Laws let the Tsar dissolve it when it displeased him and blocked it from passing reforms he disliked, so autocracy survived with a parliament attached.",
            feedback: [
              "",
              "That was what the Manifesto appeared to promise, but the Fundamental Laws reversed it within about six months. The Tsar could dissolve the Duma and block its reforms.",
              "Nothing like universal voting existed. Your lesson says the Duma was filled with rich men and nobility, because the right to vote was tied to wealth.",
              "The Duma was set up, and it did meet. The problem was not that it never existed but that the Tsar could ignore and dissolve it."
            ]
          },
          contexts: [
            { label: "Freedom of speech", q: "The October Manifesto promised freedom of speech, and censorship was loosened. Did this mean the Tsar had given up his power?", why: "Censorship eased, but the Tsar kept the Okhrana and the authority to arrest critics, as he did with revolutionaries such as Leon Trotsky in 1907." },
            { label: "The workers and peasants", q: "The October Manifesto was presented as a victory for the protesters. Did this mean the Tsar had given up his power?", why: "The Manifesto gave nothing directly to the workers and peasants who had struck and rioted, which is why the Bolsheviks and Mensheviks rejected it." },
            { label: "The second Duma", q: "Two Dumas were elected and then dismissed, and the rules were changed before the third. Did this mean the Tsar had given up his power?", why: "Changing the rules after an unwelcome result is the clearest sign that the power to decide still sat with the Tsar, not the voters." }
          ],
          levels: {
            support: {
              steps: [
                "Ask the test question: could the Tsar undo this promise by himself?",
                "If the answer is yes, he had not really given up power.",
                "Find the option that says he kept the right to dissolve the Duma.",
                "Check the other three options against what your lesson says actually happened."
              ],
              example: {
                q: "A head teacher sets up a school council but keeps the right to overrule any decision it makes. Has power moved to the pupils?",
                steps: ["The council can propose things, which is a real change.", "But any decision can be overruled by one person.", "So the final power has not moved."],
                answer: "No: consultation has moved, but the power to decide has not."
              }
            },
            core: { hint: "Real change means a power you cannot take back on your own. Ask whether the Tsar could undo it, and he could." },
            stretch: { extend: "Your lesson's stretch task asks whether 1905 should be called a real revolution at all. Give your answer with one piece of evidence on each side." }
          },
          explain: "Say, in one sentence, the test you would use to decide whether a promise of reform is a real change.",
          why: "1905 produced a parliament the Tsar could dismiss, rights he could withdraw and elections he could rig. That is why most historians treat 1905 as a warning that was ignored rather than a revolution that succeeded."
        }
      ]
    },

    /* ───────────── 3 · why the Tsar fell ───────────── */
    {
      key: "why-the-tsar-fell", n: 3, title: "Why the Tsar fell: the causes of February 1917",
      lead: "The seven causes your lesson remembers with the ABC formula, how to sort them into long-term and short-term, and why the First World War pulled all of them together.",
      covers: [3],
      pretext: {
        words: [
          { word: "Okhrana", means: "the Tsar's secret police, used to spy on and remove his opponents", sentence: "The Okhrana silenced the Tsar's critics but never fixed the problems they complained about." },
          { word: "inflation", means: "a rise in prices, so the same wage buys less food", sentence: "Inflation meant a factory wage that fed a family in 1914 bought almost nothing by 1917." },
          { word: "Petrograd", means: "the Russian capital, renamed from St Petersburg during the war", sentence: "The revolution began in the bread queues and factories of Petrograd." },
          { word: "conscript", means: "a man forced by law to join the army", sentence: "Most of the Tsar's new soldiers were conscript peasants who did not want to be there." },
          { word: "Rasputin", means: "a healer trusted by the Tsarina, whose influence caused a public scandal", sentence: "Rumours about Rasputin damaged what was left of respect for the royal family." }
        ],
        passage: [
          "By 1917 Russia had been at war for over two years.",
          "The First World War went badly from the start.",
          "Soldiers were sent to the front without enough rifles, bullets or food.",
          "Trains carried troops, not grain, so the cities ran short of bread.",
          "Prices rose 400 per cent between 1914 and 1917.",
          "In 1915 the Tsar made himself commander of the army.",
          "After that, every defeat was his fault.",
          "He left his wife, the Tsarina, in charge at home.",
          "She trusted a healer called Rasputin, and that caused a scandal.",
          "Rasputin was murdered in 1916, but the damage was done.",
          "The Duma turned against the Tsar.",
          "So did many of his own generals.",
          "The Okhrana had removed his critics, not his problems.",
          "By February 1917 the workers of Petrograd were starving."
        ]
      },
      sections: [
        {
          heading: "The ABC of the February Revolution",
          paragraphs: [
            "Your lesson gives seven causes of the February Revolution and a way of remembering them: Autocracy, Bread, Conspirators and Critics, Duma, Economy, First World War, Grigori Rasputin. That is the ABC formula, and it is worth learning as a list because the assessment rewards specific, named causes rather than a vague sense that people were fed up.",
            "As you meet each cause, your lesson asks you to decide whether it is long-term or short-term. A long-term cause had been building for years or generations: autocracy, poverty, the Duma's weakness, the state of the economy. A short-term cause belongs to the last months before the revolution: the bread shortage in Petrograd, Rasputin's scandal, the latest run of defeats.",
            "One warning before you start. Your lesson says clearly that the revolutionary parties, the Socialist Revolutionaries, the Mensheviks and the Bolsheviks, had spread their ideas widely by 1917 but were neither the leaders nor the instigators of the February Revolution. Nobody organised February. It began with bread queues and strikes, and the parties caught up with it afterwards."
          ],
          tip: "Write the seven causes down the margin as A to G before you plan a causes paragraph. Then pick the three you can explain best."
        },
        {
          heading: "Autocracy, the Duma and the critics",
          paragraphs: [
            "Autocracy is the oldest cause of all. Nicholas II still had complete control over the government and could appoint or sack any minister. For years, groups had tried to persuade or force him to share power, and his answer had been the Okhrana, the secret police, who spied on his opponents, arrested them and worse. That worked for a while. The cost was that by 1917 almost nobody felt any loyalty to him, so when the politicians and the generals turned against him, hardly anyone was prepared to stand in the way.",
            "The Duma was supposed to be the safety valve created after 1905, but your lesson is blunt about it: it had few real powers and its members were elected by the wealthy. In 1914 most of its politicians still supported the Tsar. By 1917 they had become sharply critical, and they saw the crisis in Petrograd as their chance. Their plan was not to abolish the monarchy. They wanted Nicholas to abdicate so that his successor would agree to share power with them, as monarchs did in Germany and Britain.",
            "Then there were the conspirators and critics: liberal aristocrats, middle-class politicians and radical socialists who wanted complete social change by force. They had been criticising the government for years and their ideas had spread. Remember that they fed the anger without directing it."
          ],
          tip: "Autocracy, Duma and Critics are all about politics. Group them together in one sentence and you have a whole strand of your answer."
        },
        {
          heading: "Bread and the economy",
          paragraphs: [
            "Most Russians were already poor before the war. Then the war took the peasants into the army and took the trains for the war effort, so the grain that fed the cities stopped arriving. By February 1917 the workers of Petrograd were, in your lesson's words, starving and desperate, and desperate people held strikes and demonstrations, such as the one at the Putilov factory.",
            "Behind the bread shortage sat the wider economy. Russia had industrialised fast at the end of the nineteenth century, so by 1917 there were more factory workers than ever, living in poor urban conditions and willing to listen to the Bolsheviks and other radical groups. The war opened still more factories and crowded the cities further.",
            "The figure to remember is inflation. Your lesson says prices rose 400 per cent between 1914 and 1917. That is the number that turns a political problem into a personal one: the same wage that fed a family in 1914 bought a fraction as much food three years later. It is also why bread, not voting rights, is the word on the banners in February."
          ],
          worked: {
            q: "Explain how the First World War caused the bread shortage in Petrograd by February 1917.",
            steps: [
              "Start with the farms: peasants were conscripted into the army, so there were fewer people left to grow food.",
              "Then the transport: the railways that had carried grain to the cities were needed to carry soldiers and supplies to the front.",
              "Then the prices: with less food arriving, prices rose, and your lesson gives inflation of 400 per cent between 1914 and 1917.",
              "Finish with the people: so city workers could neither find bread nor afford it, and they went on strike."
            ],
            answer: "Fewer farmers, fewer grain trains and 400 per cent inflation together emptied the shops and the wages, so Petrograd's workers struck for bread."
          },
          tip: "A good cause paragraph is a chain, not a list. Farms, then railways, then prices, then strikes: each link explained with the word so or because."
        },
        {
          heading: "The war and Rasputin: the last two causes",
          paragraphs: [
            "Your lesson calls the First World War probably the most important factor of all, and gives three reasons. Russia suffered defeat after defeat; the Tsar was popular at first but then blamed, and the blame settled on him personally once he took command of the armed forces in 1915; and the defeats killed the most loyal soldiers, the very men who had protected him from his critics. The casualty figures your lesson gives are hard to take in: over one million killed or wounded by the end of 1914, around 5.3 million by 1916, and about eight million by 1917. Each of those numbers is somebody's son or father.",
            "Taking command in 1915 was the decision that mattered most, and your lesson's decision-making activity shows why. Before it, defeats belonged to his generals. After it, every defeat belonged to him. On top of that he left the capital, handing the running of the country to the Tsarina, who was unpopular, suspected because she was a German princess, and mistrusted for the ministers she appointed.",
            "That is where Rasputin comes in. Rasputin was a healer the Tsarina believed could help her ill son, and she came to rely on his advice. Critics spread rumours about his relationship with her, and he was blamed for the weak ministers chosen during the war. To ordinary Russians he came to stand for everything wrong with the royal court. He was murdered in 1916, but by then the respect the Tsar needed had already gone."
          ],
          tip: "If you only have room for two causes, choose the war and autocracy, then use Rasputin as the detail that shows how little respect was left."
        }
      ],
      gate: [
        { kind: "mcq", q: "In your lesson's ABC formula for the causes of the February Revolution, what does the B stand for?", options: ["Bread", "Bolsheviks", "Battles", "Bribery"], answer: 0, why: "B is for Bread: the food shortage that drove the strikes and demonstrations in Petrograd by February 1917.",
          feedback: [
            "",
            "The Bolsheviks are part of the Conspirators and Critics cause, and your lesson says they did not lead the February Revolution. B is for Bread.",
            "Battles belong to the F cause, the First World War. B stands for Bread: the food shortage in the cities.",
            "Bribery is not one of the seven causes at all. The B in the formula is Bread."
          ] },
        { kind: "gap", q: "The Tsar's secret police, used to spy on his opponents and remove them, were called the ___.", answer: "Okhrana", options: ["Okhrana", "Duma", "Putilov"], why: "The Okhrana were the secret police. They silenced criticism, which is one reason so few people defended the Tsar in 1917.",
          feedback: {
            "Duma": "The Duma was the elected parliament created after 1905. The secret police who removed the Tsar's opponents were the Okhrana.",
            "Putilov": "Putilov was the huge Petrograd steel works whose strike helped start the February Revolution. The secret police were the Okhrana."
          } },
        { kind: "mcq", q: "Why did taking personal command of the army in 1915 damage the Tsar so badly?", options: ["Every defeat after that became his own fault, and he also left the capital in the Tsarina's hands", "It meant he could no longer appoint or sack his own ministers", "The Duma used the opportunity to abolish the monarchy at once", "He was captured by the Germans and had to be bought back"], answer: 0, why: "Before 1915 the generals carried the blame for defeats. Afterwards Nicholas carried it himself, and his absence from Petrograd left an unpopular Tsarina running the country.",
          feedback: [
            "",
            "He kept that power to the end; autocracy was never limited in that way. The damage was that defeats became his personal responsibility once he took command.",
            "The Duma did not abolish the monarchy in 1915. Its politicians only turned against him later, and even then they hoped for a different Tsar rather than no Tsar.",
            "Nicholas was never captured. The problem was that by commanding the army himself he owned every defeat, and by leaving Petrograd he left the Tsarina in charge."
          ] }
      ],
      modules: [
        {
          title: "Sorting the ABC causes",
          task: {
            kind: "match",
            q: "Match each of your lesson's causes to the right explanation.",
            pairs: [
              ["Autocracy", "The Tsar held all the power and used the Okhrana against his critics, so few defended him in 1917"],
              ["Bread", "Food stopped reaching the cities, and by February 1917 Petrograd's workers were starving"],
              ["Duma", "A parliament with few powers, elected by the wealthy, which turned against the Tsar by 1917"],
              ["First World War", "Defeat after defeat, which the Tsar owned personally once he took command in 1915"],
              ["Grigori Rasputin", "A healer trusted by the Tsarina whose influence became a public scandal"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Three of the five causes are about politics and two are about everyday life or people.",
                "Find the cause that is a person's name and match it first.",
                "Find the cause that is about food and match that second.",
                "You are left with three political causes: one is a parliament, one is a system of rule, one is a war."
              ],
              example: {
                q: "Match these causes of the First Indian War of Independence in 1857 to their explanations: new rifle cartridges; the annexation of Indian states; the East India Company's taxes. Options: land and titles taken from Indian rulers; demands for money that angered peasants and landowners; a change that offended soldiers' religious beliefs.",
                steps: ["The cartridges were a military and religious grievance.", "Annexation is about land and titles.", "Taxes are about money."],
                answer: "Cartridges: offended soldiers' religious beliefs. Annexation: land and titles taken from Indian rulers. Taxes: demands for money that angered peasants and landowners."
              }
            },
            core: { hint: "Sort the five into politics, food and people before you match any of them." },
            stretch: { extend: "Your lesson asks you to rank the five most important causes. Choose your top two, say which is long-term and which is short-term, and justify the order." }
          },
          explain: "Say, in one sentence, which of these causes you would call short-term, and why.",
          why: "Autocracy, the Duma's weakness and the economy were long-term problems; bread shortages, the latest defeats and the Rasputin scandal were short-term. The war is the cause that made every long-term problem urgent at once."
        },
        {
          title: "Was the war the most important cause?",
          task: {
            kind: "written",
            q: "Your lesson says the First World War was probably the most important cause of the February Revolution. Explain the war's part in the revolution, then explain one other cause, and say which you think mattered more. Write one paragraph of five to seven sentences.",
            criteria: [
              "I explain at least two ways the war weakened the Tsar, using a detail such as the 1915 command decision or a casualty figure.",
              "I explain one other named cause from the ABC list.",
              "I use a connective such as however, also or as a result to move between the two causes.",
              "I include one figure or date correctly, such as 400 per cent inflation or 1915.",
              "I finish with a judgement about which cause mattered more, and give a reason."
            ],
            model: "The First World War was probably the most important cause of the February Revolution because it attacked the Tsar from several directions at once. Militarily, Russia suffered defeat after defeat, and once Nicholas made himself commander of the armed forces in 1915 every one of those defeats became his personal failure. Economically, the war took peasants off the land and trains away from carrying grain, so food ran short in the cities and prices rose 400 per cent between 1914 and 1917. However, autocracy was a cause that had been building for far longer, because the Tsar had spent years refusing to share power and using the Okhrana against anyone who asked him to. In my judgement the war mattered more, not because autocracy was unimportant, but because autocracy had survived for three hundred years and only the war turned long-standing anger into empty bread shops and mutinying soldiers. That is the difference between a cause that makes a revolution possible and a cause that makes it happen now."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: The First World War was probably the most important cause because...",
                "Sentences 2 and 3: give one military effect (the 1915 command decision) and one economic effect (food and prices).",
                "Sentence 4: However, another cause was... Explain it in one sentence.",
                "Last sentence: In my judgement... mattered more because..."
              ],
              example: {
                q: "Explain why the Normans won at Hastings in 1066, giving one reason and one other factor, and judge between them.",
                steps: ["Reason one: Harold's army was exhausted after marching from Stamford Bridge.", "Reason two: William's cavalry and feigned retreat broke the shield wall.", "Judgement: the exhaustion mattered more, because a fresh army would have held the ridge all day."],
                answer: "Two factors, each explained, then a judgement with a reason."
              }
            },
            core: { hint: "Two effects of the war, then one other cause, then a judgement. The best judgements explain why one cause made the other urgent." },
            stretch: { extend: "Explain how you would answer someone who argued that the February Revolution would have happened sooner or later even without the First World War." }
          },
          explain: "Say, in one sentence, the difference between a cause that makes a revolution possible and one that makes it happen when it did.",
          why: "The strongest answers do not just list the war and one other cause: they explain how the war turned long-standing grievances into an immediate crisis, which is why most historians give it first place without dismissing autocracy."
        },
        {
          title: "Twelve years of warnings",
          task: {
            kind: "numeric",
            q: "How many years passed between the 1905 Revolution and the February Revolution of 1917?",
            answer: 12, tolerance: 0, units: "years",
            why: "1917 − 1905 = 12. The Tsar had twelve years to act on everything 1905 had shown him, and the Fundamental Laws show what he did with them instead.",
            check: "1917 - 1905",
            misconceptions: [
              { answer: 11, says: "You have probably counted the whole years in between rather than subtracting the dates. Take 1905 from 1917: 1917 − 1905 = 12.", check: "1917 - 1905 - 1" },
              { answer: 2, says: "That is 1917 − 1915, the gap since the Tsar took command of the army. The question asks about 1905, so the answer is 1917 − 1905 = 12.", check: "1917 - 1915" },
              { answer: 13, says: "Thirteen is the number of days Russia's Old Style calendar was behind ours, not a number of years. The gap between the revolutions is 1917 − 1905 = 12.", check: "1918 - 1905" }
            ]
          },
          contexts: [
            { label: "A Putilov worker", q: "A worker was a child in Petrograd when the marchers were shot in 1905, and joined the Putilov strike in February 1917. How many years separate the two events?", check: "1917 - 1905" },
            { label: "The first Duma", q: "The Duma was promised during the revolution of 1905 and the Tsar abdicated in 1917. For how many years did Russia have a Duma under the Tsar?", check: "1917 - 1905" },
            { label: "A soldier's life", q: "A conscript born in the year of the 1905 Revolution would have been how old, in years, when the Tsar abdicated in 1917?", check: "1917 - 1905" }
          ],
          levels: {
            support: {
              steps: [
                "Write the later year first: 1917.",
                "Subtract the earlier year: 1917 − 1905.",
                "Do it in two parts: the nineteen hundreds cancel, and 17 − 5 = 12.",
                "Check it sounds right: a little over a decade."
              ],
              example: {
                q: "How many years passed between the Battle of Hastings in 1066 and the Domesday Book in 1086?",
                steps: ["Later year first: 1086.", "Subtract: 1086 − 1066.", "1086 − 1066 = 20."],
                answer: "20 years",
                checks: [{ expr: "1086 - 1066", value: 20, tol: 0 }]
              }
            },
            core: { hint: "Later year minus earlier year. Do not use 1915 or the thirteen days of the calendar difference." },
            stretch: { extend: "Explain what the Tsar could have learned from 1905 that would have changed 1917, and why you think he did not learn it." }
          },
          explain: "Say, in one sentence, what the twelve-year gap tells you about the Tsar's response to the 1905 Revolution.",
          why: "1917 − 1905 = 12 years. Every cause in the ABC list except the war was visible in 1905, which is why historians treat February 1917 as the same crisis returning to a ruler who had not dealt with it."
        }
      ]
    },

    /* ───────────── 4 · February 1917 ───────────── */
    {
      key: "february-1917", n: 4, title: "February 1917: the Tsar falls",
      lead: "Why the dates look wrong, what happened in Petrograd across eight days, the moment the soldiers changed sides, and the two rival governments that were left behind.",
      covers: [3, 4],
      pretext: {
        words: [
          { word: "Old Style", means: "a date in the older Julian calendar Russia used until 1918", sentence: "The revolution began in late February, Old Style, which is why we call it the February Revolution." },
          { word: "New Style", means: "a date in the calendar we use, which was thirteen days ahead of Russia's", sentence: "Your lesson's information sheet gives the New Style dates in March." },
          { word: "abdicate", means: "to give up the throne", sentence: "Nicholas II agreed to abdicate from a railway carriage outside the capital." },
          { word: "soviet", means: "a council of workers and soldiers elected to act for them", sentence: "The Petrograd Soviet took charge of the city before any new government existed." },
          { word: "Provisional Government", means: "the temporary government set up by Duma politicians", sentence: "The Provisional Government was meant to run Russia only until elections could be held." }
        ],
        passage: [
          "In 1917 Russia used an older calendar than ours.",
          "It ran thirteen days behind, and we call its dates Old Style.",
          "So the February Revolution happened in March by our dates.",
          "Your lesson calls it both the February and the March Revolution.",
          "It began with strikes over bread in Petrograd.",
          "On 7 March, New Style, workers at the Putilov steel works walked out.",
          "The next day thousands of women joined them for International Women's Day.",
          "Soon 250,000 workers were on strike and the city stopped.",
          "The Tsar ordered the Duma to close and the army to restore order.",
          "Both refused him.",
          "Soldiers mutinied and took the side of the crowds.",
          "A Petrograd Soviet of workers and soldiers took charge of the city.",
          "On 15 March, New Style, Nicholas II abdicated.",
          "Three hundred years of Romanov rule were over."
        ]
      },
      sections: [
        {
          heading: "February or March? A note on the calendar",
          paragraphs: [
            "Open your lesson's information sheet on the February Revolution and something looks wrong: every date is in March. One of the slides even asks about the main causes of the March Revolution. Both names are used, and neither is a mistake, so here is the explanation you need.",
            "Until 1918, Russia used the old Julian calendar, which by then ran thirteen days behind the Gregorian calendar used in Britain and most of Europe. Historians call Russian dates Old Style and ours New Style. The revolution began on 23 February in Russia's own calendar, which was 8 March in ours. The Tsar abdicated on 2 March, Old Style, which was 15 March, New Style. The event is named February after the Russian date and dated in March after ours.",
            "Three rules will keep you out of trouble. First, always say which calendar you are using. Second, the February Revolution and the March Revolution are the same thing, so do not treat them as two events in a narrative. Third, remember that the same trick is waiting for you in the next chapter, where the October Revolution falls in November by our dates."
          ],
          tip: "Write N.S. or O.S. after any date from 1917. One letter stops a whole paragraph from falling apart."
        },
        {
          heading: "Eight days in Petrograd",
          paragraphs: [
            "Your lesson asks you to summarise the revolution into six key moments, and they are worth learning as a sequence. First, strikes begin: through January and February 1917 food shortages, bad conditions and the failing war brought one Petrograd factory out after another, and some soldiers were already sympathising with the protesters. Second, on 7 March, New Style, the huge Putilov steel works came out, and the next day thousands of women joined the marches for International Women's Day, demanding bread, peace and better conditions.",
            "Third, the strikes became general. Between 7 and 10 March, New Style, your lesson says the number of strikers rose to 250,000, which stopped all industry and transport in the capital; the police could not control the crowds and some officers joined them. Fourth, the Tsar lost control. Between 10 and 12 March, New Style, the Duma set up a Provisional Government. Nicholas ordered the Duma to disband and the army to restore order, and both refused him.",
            "Fifth, on 12 March, New Style, the Petrograd Soviet was re-established, a council of workers and soldiers that took charge of the city, with similar soviets forming across Russia. Sixth, on 15 March, New Style, with no support from either the army or the government, Nicholas II abdicated. The crown was offered next to his brother Michael, who refused it, and three hundred years of Romanov rule came to an end."
          ],
          tip: "Learn the six moments as a shape: strikes, women's march, general strike, orders refused, soviet takes the city, abdication."
        },
        {
          heading: "The turning point: when the soldiers refused",
          paragraphs: [
            "Your lesson asks you to identify the turning point, which it defines as the moment when it first looked as though the revolution would succeed. There is a strong case for one answer: the moment the soldiers refused to fire.",
            "Think about why. Petrograd had seen strikes before and the government had always broken them the same way, by sending in troops. In 1905 that worked. In February 1917 it did not. Officers joined the demonstrators, whole units mutinied and called for the Duma to take power, and the Tsar's order to restore order simply was not carried out. An autocrat with no army is not an autocrat.",
            "The end followed quickly and almost quietly. Nicholas tried to return to the capital, but railway workers refused to let his train through, and it was from that carriage that he agreed to give up the throne. A ruler who cannot reach his own capital has already lost it."
          ],
          worked: {
            q: "Write the opening of an events paragraph on the February Revolution, using your lesson's success criteria.",
            steps: [
              "Open with the event and a date: The February Revolution broke out in Petrograd in late February 1917, Old Style, when workers at the Putilov steel works went on strike.",
              "Add evidence: this was 7 March, New Style, by our calendar, and within days the number of strikers had risen to 250,000, stopping industry and transport in the capital.",
              "Explain why it mattered: this event was important because a strike that size could not be ignored or broken by the usual methods.",
              "Link to the next event: this led to the Tsar ordering the army to restore order, and when soldiers refused and mutinied instead, he lost the only pillar still holding him up."
            ],
            answer: "Event with a date, evidence with a figure, an explanation of why it mattered, and a linking sentence that hands the narrative on to the next event."
          },
          tip: "Your lesson's criteria want sequence, links, specific knowledge, and a final link onwards. Use the words this led to and as a result on purpose, not by accident."
        },
        {
          heading: "Dual power: two governments in one country",
          paragraphs: [
            "The Tsar had gone, but Russia did not get one new government. It got two. Duma politicians set up the Provisional Government, led first by Prince Georgy Lvov and later by Alexander Kerensky, and it was meant to govern only until a proper election could be held. Alongside it sat the Petrograd Soviet, the council of workers and soldiers. Historians call the arrangement dual power.",
            "The Soviet's strength was simple: it spoke for the people who actually did things, and your lesson records its Order Number One, which told soldiers and workers not to obey any government order they disagreed with. A government whose orders are optional is not fully a government.",
            "The Provisional Government then made the decision that destroyed it. In June it chose to stay in the First World War and organised a new attack on Germany's ally Austria, which failed badly. The war was the reason the bread had run out and the reason the soldiers had mutinied, so continuing it meant inheriting the Tsar's biggest problem on purpose. Your lesson's challenge question asks how similar the Provisional Government's problems were to the Tsar's. The honest answer is: almost identical, because they were the same problems."
          ],
          tip: "If you are asked why there was a second revolution in 1917, start here: dual power, Order Number One, and the decision to keep fighting."
        }
      ],
      gate: [
        { kind: "numeric", q: "Your lesson dates the Tsar's abdication 15 March 1917, New Style. Russia's own Old Style calendar ran thirteen days behind. What was the date of the month in Russia?", answer: 2, tolerance: 0, units: "", why: "15 − 13 = 2, so the abdication was 2 March, Old Style. The same day has two dates, which is why the February Revolution is dated in March.", check: "15 - 13",
          misconceptions: [
            { answer: 28, says: "You have added the thirteen days instead of subtracting them. Russia's calendar was behind ours, so the Russian date is earlier: 15 − 13 = 2.", check: "15 + 13" },
            { answer: 3, says: "You have counted the days in between rather than subtracting. Take thirteen from fifteen directly: 15 − 13 = 2.", check: "15 - 13 + 1" },
            { answer: 13, says: "Thirteen is the size of the gap between the two calendars, not the Russian date. Subtract it from the New Style date: 15 − 13 = 2.", check: "15 - 2" }
          ] },
        { kind: "gap", q: "When Nicholas II agreed to give up the throne in 1917, we say that he chose to ___.", answer: "abdicate", options: ["abdicate", "mutiny", "industrialise"], why: "To abdicate is to give up the throne. Nicholas abdicated from his railway carriage when he could not even reach the capital.",
          feedback: {
            "mutiny": "A mutiny is soldiers or sailors refusing to obey orders, which is what the Petrograd garrison did. The Tsar gave up his throne, which is to abdicate.",
            "industrialise": "To industrialise is to build factories and railways, which Russia did in the 1890s. Giving up a throne is to abdicate."
          } },
        { kind: "mcq", q: "Which moment is the strongest candidate for the turning point of the February Revolution?", options: ["Soldiers refused to fire on the crowds and mutinied instead", "The Putilov steel works went on strike", "Thousands of women marched for International Women's Day", "The Duma set up a Provisional Government"], answer: 0, why: "Strikes and marches had been broken by troops before, as in 1905. Once the troops would not obey, the Tsar had nothing left to break them with.",
          feedback: [
            "",
            "The Putilov strike started the revolution, but strikes alone had been crushed before. What was new in 1917 was that the soldiers would not put this one down.",
            "The women's march of 8 March, New Style, swelled the protest enormously, but it was still a protest. The decisive change was the soldiers refusing their orders.",
            "The Provisional Government was the result of the Tsar losing control, not the cause of it. The army's refusal to obey came first and made everything else possible."
          ] }
      ],
      modules: [
        {
          title: "The six moments of February",
          task: {
            kind: "order",
            q: "Put your lesson's six key moments of the February Revolution in order.",
            items: [
              "Strikes begin across Petrograd over bread, conditions and the failing war (January to February 1917, Old Style)",
              "The Putilov steel works strikes, and women march the next day for International Women's Day (7 to 8 March, New Style)",
              "Mass strikes shut down Petrograd as the number of strikers reaches 250,000 (7 to 10 March, New Style)",
              "The Duma sets up a Provisional Government, and the Tsar's orders are refused (10 to 12 March, New Style)",
              "The Petrograd Soviet of workers and soldiers takes control of the city (12 March, New Style)",
              "Nicholas II abdicates, ending three hundred years of Romanov rule (15 March, New Style)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Every moment carries its dates in brackets. Read all six sets of dates first.",
                "One moment is dated in January and February, so it comes first.",
                "Then work through March in order: the seventh, then the tenth, then the twelfth, then the fifteenth.",
                "Check the story makes sense: strikes grow, the Tsar's orders fail, a soviet takes over, the Tsar goes."
              ],
              example: {
                q: "Put these stages of a bus journey in order: the bus reaches the terminus; passengers board at the first stop; the driver starts the engine; the bus pulls away from the kerb.",
                steps: ["The engine starts before anything moves.", "Passengers board at the first stop.", "The bus pulls away.", "It reaches the terminus last."],
                answer: "the driver starts the engine; passengers board at the first stop; the bus pulls away from the kerb; the bus reaches the terminus"
              }
            },
            core: { hint: "Use the dates in brackets, and remember they are New Style. Two moments begin on the seventh, and your lesson puts the Putilov strike first." },
            stretch: { extend: "Explain which two of these six moments you could not leave out of a narrative account, and why the other four matter less." }
          },
          explain: "Say, in one sentence, why your lesson's dates for the February Revolution all fall in March.",
          why: "Strikes begin in January and February; Putilov and the women's march on 7 and 8 March, New Style; the general strike by 10 March; the Tsar's orders refused by 12 March; the Petrograd Soviet on 12 March; and the abdication on 15 March, New Style."
        },
        {
          title: "A narrative paragraph on the events",
          task: {
            kind: "written",
            q: "Write a narrative account of the key events of the February 1917 Revolution. Write one paragraph of five to seven sentences, in order, linking each event to the next.",
            criteria: [
              "My events are in a clear order, and I state at least one date with its calendar named.",
              "I link each event to the next with a phrase such as this led to or as a result.",
              "I use specific knowledge, such as the Putilov strike, the figure of 250,000 strikers, or the soldiers' mutiny.",
              "My last sentence links on to what came next, the abdication or the Provisional Government.",
              "I write about the people involved as people, not just as crowds and numbers."
            ],
            model: "The February Revolution began in Petrograd with strikes over bread, poor conditions and the failing war. On 7 March, New Style, workers at the huge Putilov steel works walked out, and the next day thousands of women joined the marches for International Women's Day, demanding bread and peace. This led to a general strike: within three days around 250,000 workers had stopped work, and industry and transport in the capital came to a halt. As a result the Tsar told the Duma to dissolve itself and ordered the army to put the protests down, and neither obeyed him; soldiers began to mutiny and join the crowds instead. This left him with nothing to rule with, so when he tried to return to Petrograd and railway workers stopped his train, he agreed on 15 March, New Style, to abdicate. His brother Michael refused the throne, which ended three hundred years of Romanov rule and left the Provisional Government and the Petrograd Soviet sharing power."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: The February Revolution began in Petrograd when...",
                "Sentence 2: give the Putilov strike and the women's march, with a date and its calendar.",
                "Sentence 3: This led to... Use the figure of 250,000 strikers.",
                "Sentences 4 and 5: As a result... the Tsar's orders were refused and the soldiers mutinied. Finish with the abdication."
              ],
              example: {
                q: "Write a narrative paragraph of three sentences on the events of the 1905 Revolution, linking each event to the next.",
                steps: ["Open with Bloody Sunday on 22 January 1905, New Style, and what happened to the marchers.", "Link: this led to strikes, peasant riots and mutinies across the empire.", "Finish: as a result the Tsar published the October Manifesto, promising rights and a Duma."],
                answer: "Three linked sentences: the trigger, the spreading reaction, and the Tsar's response."
              }
            },
            core: { hint: "Four events is plenty. What matters is the joins: this led to, as a result, which meant that." },
            stretch: { extend: "Add one sentence explaining why your final event made a second revolution likely later in 1917." }
          },
          explain: "Say, in one sentence, why a narrative account needs linking phrases and not just a list of events.",
          why: "Your lesson's criteria reward sequence, explained links, specific knowledge and a closing link onwards. The events themselves are easy to remember; the marks sit in the joins between them."
        },
        {
          title: "Why dual power was unstable",
          task: {
            kind: "mcq",
            q: "Why was the Provisional Government weak from the moment it was created?",
            options: [
              "It had to share power with the Petrograd Soviet, which told people to ignore orders it disagreed with",
              "It had no money, because the Tsar had taken the contents of the State Bank with him",
              "It was led by Vladimir Lenin, who did not want it to succeed",
              "It refused to govern until a new Tsar had been chosen"
            ],
            answer: 0,
            why: "Dual power meant two bodies claiming authority. Order Number One let soldiers and workers ignore government instructions they disliked, so the Provisional Government could not rely on being obeyed.",
            feedback: [
              "",
              "Money was tight, but that is not the structural problem your lesson describes. The Provisional Government's weakness was that it shared authority with the Petrograd Soviet.",
              "Lenin led the Bolsheviks, not the Provisional Government, and he was abroad when it was formed. It was led first by Prince Lvov and later by Kerensky.",
              "The Provisional Government did govern, and Michael had already refused the throne. Its problem was that its orders could be overruled by the Petrograd Soviet."
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask what a government needs most: to be obeyed.",
                "Find the body that could tell soldiers and workers not to obey.",
                "That body was the Petrograd Soviet, and the instruction was Order Number One.",
                "Check the other three options against what your lesson actually says happened."
              ],
              example: {
                q: "A school announces that prefects may overrule any instruction from the duty staff that they disagree with. Why does this weaken the duty staff?",
                steps: ["Staff instructions are now optional.", "Pupils will test which instructions stick.", "So authority has shifted even though the staff still hold the title."],
                answer: "Because authority depends on being obeyed, and an instruction that can be overruled is not really an instruction."
              }
            },
            core: { hint: "Look for the option about who could be obeyed, not the options about money or personalities." },
            stretch: { extend: "Explain why the Provisional Government decided to stay in the war in June 1917, and why that decision turned the Soviet and the soldiers further against it." }
          },
          explain: "Say, in one sentence, what dual power meant in Russia after February 1917.",
          why: "The Provisional Government held the title and the Petrograd Soviet held the loyalty of the workers and soldiers. Order Number One made that split official, and staying in the war in June 1917 made it fatal."
        }
      ]
    },

    /* ───────────── 5 · October 1917 ───────────── */
    {
      key: "october-1917", n: 5, title: "October 1917: the Bolsheviks seize power",
      lead: "Why Russia had a second revolution eight months after the first: the Provisional Government's mistakes, the Bolsheviks' promises, the Kornilov affair, and the nights the Red Guards took the capital.",
      covers: [4],
      pretext: {
        words: [
          { word: "Bolsheviks", means: "the revolutionary party led by Vladimir Lenin", sentence: "The Bolsheviks were the only party promising to leave the war at once." },
          { word: "Red Guards", means: "armed Bolshevik supporters, trained in secret", sentence: "The Red Guards were given weapons to defend the capital and never gave them back." },
          { word: "Winter Palace", means: "the Tsar's old palace in Petrograd, where the Provisional Government met", sentence: "Taking the Winter Palace meant taking the government." },
          { word: "propaganda", means: "information spread to make people believe something, true or not", sentence: "Kerensky used propaganda to accuse Lenin of working for Germany." },
          { word: "slogan", means: "a short phrase repeated to win support", sentence: "The Bolshevik slogan promised bread, peace and land in four words." }
        ],
        passage: [
          "After February, Russia had two rival sources of power.",
          "The Provisional Government kept Russia in the war.",
          "Food was still short and prices still rose.",
          "Vladimir Lenin led a party called the Bolsheviks.",
          "He returned from exile abroad in April 1917.",
          "His slogan was short: bread, peace and land.",
          "In July the government's new attack on Germany failed badly.",
          "Soldiers and sailors protested, and Lenin had to flee again.",
          "In August a general called Kornilov tried to seize power.",
          "Kerensky armed the Bolshevik Red Guards to stop him.",
          "They stopped Kornilov, and then they kept their guns.",
          "On 25 October, Old Style, the Red Guards surrounded the Winter Palace.",
          "By our calendar that was 7 November, New Style.",
          "The Provisional Government surrendered, and the Bolsheviks held the capital."
        ]
      },
      sections: [
        {
          heading: "Why a second revolution? The Provisional Government's mistakes",
          paragraphs: [
            "Your lesson sets the October Revolution up as a question with two possible answers: was there a second revolution because the Provisional Government made bad decisions, or because Lenin and the Bolsheviks made good ones? Work through the evidence and you will find the honest answer is both, with the government going first.",
            "Its worst decision was to stay in the First World War. The war was why the bread had run out, why the soldiers had mutinied and why the Tsar had fallen, and the new government chose to carry on with it. Its second failure was economic: prices went on rising and food stayed short, so for most people February had changed the people in charge and nothing else.",
            "Behind both sat the structural problem from the last chapter. Dual power meant the Provisional Government shared authority with the Petrograd Soviet, and Order Number One told soldiers and workers to ignore instructions they disagreed with. A government that cannot end the war, cannot feed the cities and cannot be sure of being obeyed is a government waiting for a successor."
          ],
          tip: "For a causes paragraph on October, pair each government mistake with the Bolshevik promise that answered it. War answered by peace, hunger by bread, land hunger by land."
        },
        {
          heading: "Lenin, the Bolsheviks and their promises",
          paragraphs: [
            "Vladimir Lenin, the leader of the Bolsheviks, had been living abroad in Switzerland. He returned to Russia in April 1917, travelling through enemy Germany, whose government let him pass because they expected him to cause trouble for Russia's war effort. Your lesson describes him as a powerful speaker and an excellent leader, and support for his party grew as it won more seats in the soviets.",
            "The Bolshevik message was short enough to shout and specific enough to matter: bread, peace and land, and all power to the soviets. Between May and June, Lenin promised the peasants land and claimed the Bolsheviks could solve the food shortages. Your lesson credits Trotsky, who joined him, with creating the Red Guards in March 1917 and with bringing remarkable organising skill to the party.",
            "It did not run smoothly. In July 1917 Kerensky, then the government's Minister for War, launched a large attack on the Germans, and it went badly wrong. Soldiers and sailors protested in the streets and many turned to the Bolsheviks as the only party that wanted the war stopped. Kerensky struck back with propaganda, accusing Lenin of being anti-Russian and of secretly wanting Germany to win, and Lenin had to flee abroad again. At that point it looked as though the Bolsheviks had missed their chance."
          ],
          tip: "Learn the three Bolshevik promises as a list, then learn which government failure each one answered. That gives you cause and effect in one move."
        },
        {
          heading: "The Kornilov affair: the guns the Bolsheviks kept",
          paragraphs: [
            "In the autumn of 1917 Kerensky made a general called Kornilov head of the army. Kornilov decided to end the protests for good and sent Cossack soldiers to Petrograd, and in August he attempted to seize power for himself. There was fighting and confusion in the streets of the capital.",
            "Kerensky panicked and did the thing that destroyed him. He handed weapons to the Red Guards, the Bolshevik supporters who had been training in secret to overthrow his own government, so that they could help defend the city. They did defend it, and your lesson says people treated them as heroes.",
            "Then they kept the guns. Within two months the Bolsheviks had a popular, armed force inside the capital, the liberal and conservative parties were demoralised by the whole affair, and the Provisional Government looked helpless. Your lesson lists exactly those three things among Lenin's reasons for thinking the moment had come."
          ],
          tip: "The Kornilov affair is the single best example of a government mistake handing a revolution to someone else. Use it when you are asked whose fault October was."
        },
        {
          heading: "Red October: the nights the capital changed hands",
          paragraphs: [
            "Lenin pressed for action. In a message to the Bolshevik Central Committee dated 12 September 1917, Old Style, he warned that the chance would not come again, and on 10 October, Old Style, he returned to Petrograd from exile in Finland and persuaded the Committee to back an armed seizure of power. The Committee declared that “an armed uprising is inevitable”. A Military Revolutionary Committee was set up to plan it, with Trotsky in charge, and it hardly bothered to hide its preparations: Kerensky knew, and details leaked by Kamenev and Zinoviev were printed in newspapers.",
            "The seizure itself took two days. In the early hours of 24 October, Old Style, soldiers loyal to the government raided the printing house of the Bolshevik newspaper and destroyed equipment and thousands of copies; by ten in the morning Bolshevik soldiers had taken it back. That evening the Bolsheviks occupied the railway stations, the telephone exchange and the State Bank, and made the Smolny Institute their headquarters. The Kronstadt sailors and most of the Petrograd garrison declared for them.",
            "On 25 October, Old Style, the Red Guards surrounded the Winter Palace, where most of the Cabinet was sitting; Kerensky had already escaped the city. The palace was defended by Cossacks, some junior officers and the Women's Battalion. The cruiser Aurora and the Peter and Paul Fortress opened fire in the evening, doing little damage but persuading most of the defenders to surrender, and by ten past two in the morning of 26 October, Old Style, the Bolsheviks were in control. In our calendar the night the palace fell was 7 November, New Style, which is why some books call this the November Revolution."
          ],
          quote: { text: "History will not forgive us", source: "Vladimir Lenin, message to the Bolshevik Central Committee (12 September 1917, Old Style), as printed in your lesson" },
          worked: {
            q: "Explain why the October Revolution met so little resistance compared with February.",
            steps: [
              "Point: by October there was hardly anyone left willing to fight for the Provisional Government.",
              "Evidence one: the Kronstadt sailors and most of the Petrograd garrison had already declared for the Bolsheviks.",
              "Evidence two: Kerensky had fled the city, and the Winter Palace was held only by Cossacks, junior officers and the Women's Battalion.",
              "Explain and contrast: February was a mass uprising against an army that eventually changed sides, while October was a planned takeover of key buildings that almost nobody defended."
            ],
            answer: "February was a popular rising that had to break the army; October was an organised seizure of a capital whose garrison had already joined the Bolsheviks and whose government had lost its leader and its supporters."
          },
          tip: "If you are asked how October differed from February, use the words planned and spontaneous. February had no leaders; October had a committee and a timetable."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which promise did the Bolsheviks use to win support in 1917?", options: ["An immediate end to the war, with bread for the cities and land for the peasants", "A return of the Tsar on condition that he shared power with a Duma", "Victory over Germany followed by a large empire in eastern Europe", "Higher wages for factory owners and lower taxes for landowners"], answer: 0, why: "Bread, peace and land answered the three things people wanted most, and the Bolsheviks were the only party offering to leave the war at once.",
          feedback: [
            "",
            "No major group wanted the Tsar back by the autumn of 1917, and the Bolsheviks least of all. Their promise was bread, peace and land.",
            "The Bolsheviks promised the opposite of victory: they promised to leave the war immediately, which is why war-weary soldiers and sailors supported them.",
            "The Bolsheviks spoke for workers and peasants, not owners and landowners. Their slogan was bread, peace and land."
          ] },
        { kind: "gap", q: "The armed Bolshevik supporters who seized the key buildings of Petrograd were called the Red ___.", answer: "Guards", options: ["Guards", "Cossacks", "Soviets"], why: "Trotsky created the Red Guards in March 1917, and Kerensky armed them during the Kornilov affair.",
          feedback: {
            "Cossacks": "The Cossacks were cavalry soldiers used against the protesters, and some of them defended the Winter Palace. The Bolsheviks' own force was the Red Guards.",
            "Soviets": "A soviet is a council of workers and soldiers, not an armed force. The armed Bolshevik supporters were the Red Guards."
          } },
        { kind: "mcq", q: "Why did the Kornilov affair in August 1917 end up helping the Bolsheviks?", options: ["Kerensky armed the Red Guards to stop Kornilov, and they kept their weapons afterwards", "Kornilov joined the Bolsheviks and brought the army with him", "Kornilov's attempt persuaded the Germans to stop fighting Russia", "The affair forced the Petrograd Soviet to close down"], answer: 0, why: "Kerensky handed weapons to the very people training to overthrow him. The Red Guards saved the city, kept the guns and gained a reputation as its defenders.",
          feedback: [
            "",
            "Kornilov was trying to seize power for himself and was defeated by the Red Guards. He never joined the Bolsheviks.",
            "The Germans fought on; peace came only after the Bolsheviks took power. What the affair changed was who held weapons inside Petrograd.",
            "The Petrograd Soviet was not closed down; it grew stronger, and the Bolsheviks won more and more seats in it."
          ] }
      ],
      modules: [
        {
          title: "The road to October, in order",
          task: {
            kind: "order",
            q: "Put these steps towards the October Revolution in chronological order.",
            items: [
              "Lenin returns to Russia from Switzerland and the Bolsheviks begin to gain seats in the soviets (April 1917)",
              "Kerensky's new attack on Germany fails, protests follow and Lenin flees abroad (July 1917)",
              "Kornilov tries to seize power; Kerensky arms the Red Guards, who defeat him (August 1917)",
              "Lenin writes to the Bolshevik Central Committee urging it to seize power now (12 September 1917, Old Style)",
              "Lenin returns to Petrograd, the Committee agrees and a Military Revolutionary Committee is formed (10 October 1917, Old Style)",
              "The Red Guards surround the Winter Palace and the Provisional Government surrenders (25 to 26 October 1917, Old Style)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Each step carries its month in brackets. Put the months in order first: April, July, August, September, October.",
                "Two steps fall in the autumn: one is a letter, one is a decision. The letter has to come first.",
                "The last step is the one where buildings change hands.",
                "Read the sequence back and check each step explains the next."
              ],
              example: {
                q: "Put these stages of a school election in order: the result is announced; candidates give speeches; nominations open; pupils vote.",
                steps: ["Nobody can stand until nominations open.", "Then candidates give speeches.", "Then pupils vote.", "The result is announced last."],
                answer: "nominations open; candidates give speeches; pupils vote; the result is announced"
              }
            },
            core: { hint: "April, July, August, September, October. Within the autumn, Lenin argues before the Committee acts." },
            stretch: { extend: "Explain which one of these six steps the Bolsheviks could least afford to lose, and what would probably have happened without it." }
          },
          explain: "Say, in one sentence, how the Kornilov affair in August made the October takeover easier.",
          why: "Lenin returns in April; the July Days cost him his position and nearly his party; the Kornilov affair in August arms the Red Guards; Lenin's September letter presses for action; the Central Committee agrees in October; and the Winter Palace falls on 25 to 26 October, Old Style."
        },
        {
          title: "Whose fault was October?",
          task: {
            kind: "mcq",
            q: "In June 1917 the Provisional Government chose to stay in the First World War and ordered a new attack. Was this mainly a mistake by the Provisional Government, or mainly a good decision by the Bolsheviks?",
            options: [
              "Mainly a mistake by the Provisional Government, because it kept or created a problem that pushed people towards the Bolsheviks",
              "Mainly a good decision by the Bolsheviks, because they planned it and persuaded the government to act",
              "Neither, because this made no difference to whether there was a second revolution",
              "Both equally, because the Bolsheviks were in charge of the Provisional Government's choices"
            ],
            answer: 0,
            why: "The war was the grievance that had brought the Tsar down. Choosing to continue it handed the Bolsheviks their strongest argument, so this belongs in the government-mistake column.",
            feedback: [
              "",
              "The Bolsheviks were not in a position to make the government do anything; Lenin was in exile for part of this period. They profited from the decision rather than causing it.",
              "It made an enormous difference. Soldiers and sailors who had expected peace after February turned to the only party promising to end the war.",
              "The Bolsheviks never controlled the Provisional Government. They were its rivals, and dual power meant the Petrograd Soviet, not the Bolsheviks, shared its authority."
            ]
          },
          contexts: [
            { label: "Prices and food", q: "After February, prices went on rising and food stayed short in the cities. Was this mainly a mistake by the Provisional Government, or mainly a good decision by the Bolsheviks?", why: "The government failed to solve the problem it had inherited, which made the Bolshevik promise of bread far more attractive." },
            { label: "Appointing Kornilov", q: "Kerensky made General Kornilov head of the army, and Kornilov then tried to seize power for himself. Was this mainly a mistake by the Provisional Government, or mainly a good decision by the Bolsheviks?", why: "Kerensky chose the general, and the choice turned into an attempted takeover that wrecked what was left of the government's authority." },
            { label: "Arming the Red Guards", q: "During the Kornilov affair, Kerensky handed weapons to the Red Guards. Was this mainly a mistake by the Provisional Government, or mainly a good decision by the Bolsheviks?", why: "Kerensky armed the people who were training to overthrow him, and they never gave the weapons back." }
          ],
          levels: {
            support: {
              steps: [
                "Ask who actually made the decision in the question.",
                "If the Provisional Government made it, it goes in the mistake column.",
                "Then ask what the Bolsheviks gained from it.",
                "Choose the option that names a government mistake and the gain it handed the Bolsheviks."
              ],
              example: {
                q: "A team loses a match after its own goalkeeper kicks the ball to an opponent. Was that mainly the goalkeeper's mistake or mainly the opponent's skill?",
                steps: ["Ask who made the decision: the goalkeeper.", "Ask what the opponent did: accepted the gift.", "So it counts mainly as the mistake."],
                answer: "Mainly the goalkeeper's mistake, although the opponent still had to finish it."
              }
            },
            core: { hint: "Follow the decision. Whoever chose to act owns the consequence; the other side only has to be ready." },
            stretch: { extend: "Your lesson's table asks you to judge the whole question. Decide whether the October Revolution was mainly caused by the Provisional Government's mistakes or by the Bolsheviks' skill, and defend your answer with two examples." }
          },
          explain: "Say, in one sentence, how you decide whether an event belongs in the mistake column or the good-decision column.",
          why: "Most of your lesson's examples are government decisions: staying in the war, failing on prices, appointing Kornilov, arming the Red Guards. The Bolsheviks' skill was in being ready for each of them, which is why historians give both sides a share."
        },
        {
          title: "Why the Bolsheviks succeeded",
          task: {
            kind: "written",
            q: "Explain why the Bolsheviks were able to take power in October 1917. Include one Provisional Government weakness AND one Bolshevik strength. Write one paragraph of five to seven sentences.",
            criteria: [
              "I explain one clear weakness of the Provisional Government, with a detail or a date.",
              "I explain one clear strength of the Bolsheviks, naming Lenin, Trotsky, the Red Guards or the slogan.",
              "I use a connective such as however or as a result to move between the two.",
              "I refer to at least one event by name, such as the July Days, the Kornilov affair or the taking of the Winter Palace.",
              "I finish with a judgement about which mattered more, and give a reason."
            ],
            model: "The Bolsheviks were able to take power in October 1917 because the Provisional Government had destroyed its own support and they were ready to take its place. Its central weakness was the decision to stay in the First World War, because the war was the reason the bread had run out and the soldiers had mutinied in February, and Kerensky's failed attack in July turned soldiers and sailors against it in the streets. However, the Bolsheviks also had real strengths: Lenin's promise of bread, peace and land answered exactly what people lacked, and Trotsky's Military Revolutionary Committee planned the seizure of the railway stations, the telephone exchange and the State Bank in advance. The Kornilov affair joined the two together, because Kerensky armed the Red Guards to save the city and they kept their weapons afterwards. As a result, when the Red Guards surrounded the Winter Palace on 25 October, Old Style, there was almost nobody left to defend it. In my judgement the government's mistakes mattered more, because the Bolsheviks were a small party in February and only grew because every government failure proved their argument for them."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: The Bolsheviks were able to take power because...",
                "Sentences 2 and 3: give one government weakness. The war is the strongest choice.",
                "Sentences 4 and 5: However, the Bolsheviks also... Name Lenin, Trotsky or the slogan.",
                "Last sentence: In my judgement... mattered more because..."
              ],
              example: {
                q: "Explain why the February Revolution succeeded, including one weakness of the Tsar and one strength of the protesters.",
                steps: ["Weakness: the Tsar had taken personal blame for the war after 1915 and had almost no loyal support left.", "Strength: the strikers were numerous and concentrated, reaching 250,000 in Petrograd.", "Judgement: the Tsar's weakness mattered more, because the same crowds had been dispersed by troops in 1905."],
                answer: "One weakness, one strength, each explained, then a judgement with a reason."
              }
            },
            core: { hint: "One weakness, one strength, one named event that links them, then your judgement. The Kornilov affair is the best link." },
            stretch: { extend: "Explain how your answer would change if you argued that the real reason was neither side's doing but the First World War itself." }
          },
          explain: "Say, in one sentence, which mattered more in October 1917: the government's mistakes or the Bolsheviks' planning.",
          why: "A full answer pairs a government weakness with a Bolshevik strength and uses a named event, usually the Kornilov affair, to show how one produced the other. The best answers reach a judgement instead of leaving the two sides side by side."
        }
      ]
    },

    /* ───────────── 6 · Bolshevik rule and the assessment ───────────── */
    {
      key: "bolshevik-rule", n: 6, title: "Bolshevik rule, the Soviet Union, and writing a narrative account",
      lead: "What communism meant, what the Bolsheviks actually changed by 1922, what it cost, and how to turn all six chapters into the three-paragraph narrative your assessment asks for.",
      covers: [5, 6, 7],
      pretext: {
        words: [
          { word: "communism", means: "the idea that property should be owned by the whole community", sentence: "Under communism no single person was supposed to own a factory." },
          { word: "Karl Marx", means: "the thinker who developed the idea of communism", sentence: "Karl Marx died in 1883, long before any country tried his ideas." },
          { word: "comrade", means: "the word Russians were told to use instead of titles and ranks", sentence: "Calling everyone comrade was meant to show that nobody outranked anybody." },
          { word: "Soviet Union", means: "the new country created out of the old Russian Empire in 1922", sentence: "The Soviet Union was the world's first communist state." },
          { word: "consequence", means: "something that happens as a result of an event", sentence: "A narrative account ends with the consequences of the events you have described." }
        ],
        passage: [
          "The Bolsheviks were communists.",
          "Communism came from the ideas of Karl Marx.",
          "Marx said factory owners grew rich while their workers stayed poor.",
          "He believed the workers would one day rise up and share everything out.",
          "Marx died in 1883 without ever seeing it tried.",
          "Lenin was a Marxist, and Russia became the first communist state.",
          "Titles and ranks were dropped and everyone was called comrade.",
          "Women were declared equal to men.",
          "Workers were told to run their factories by committee.",
          "Peasants were told to share out the land.",
          "The state took control of the banks.",
          "Only communist newspapers and only one political party were allowed.",
          "In 1922 the new country was named the Soviet Union.",
          "Your assessment asks how much really changed."
        ]
      },
      sections: [
        {
          heading: "Karl Marx and the idea of communism",
          paragraphs: [
            "Communism is an idea before it is a government. Your lesson traces it to Karl Marx, who looked at industrial Europe and decided the system was unjust and could not last. His argument runs as a chain. A small number of capitalists own the factories and banks and make large profits. They pay low wages and spend nothing on conditions. Eventually the workers refuse to accept it, there is a revolution, and the workers seize the factories for themselves. A workers' government then shares out the wealth fairly, people co-operate and take what they need, and machines do most of the work.",
            "Marx first set these ideas out in the Communist Manifesto of 1848 and died in 1883, so he never saw a country try them. People who believed in his ideas were called Marxists, and your lesson points out that one of them was Vladimir Lenin, who thought Russia was exactly the country Marx had described.",
            "Your lesson asks you to spot problems in Marx's scenario, and that is a fair question to hold on to. Every step after the revolution depends on people behaving generously, and none of it says who decides what anybody needs. Keep the question in mind while you read the next section, because the gap between Marx's plan and Lenin's Russia is where most of the marks are."
          ],
          tip: "When you write about communism, separate Marx's idea from Lenin's practice. Treating them as the same thing is the commonest mistake in this topic."
        },
        {
          heading: "What the Bolsheviks actually changed",
          paragraphs: [
            "Your lesson gives a list of what happened in Russia under communist rule, and asks you to sort it into good ideas and bad ideas. Some of it answered real injustices. Titles and ranks were abolished and everyone was to be called comrade. Women were declared equal to men. Workers were told to take control of their factories and run them by committee. Peasants were told to share the land out between themselves. Houses were taken from the rich and shared among workers. For a country where 85 per cent of people had been peasants a generation earlier, that was an extraordinary reversal.",
            "The rest of the list points the other way. The state took control of the banks. Every newspaper except the communist ones was banned. No political party except the Communist Party was allowed. The rich had their wealth confiscated and were labelled former people, forbidden to work and left selling their possessions to buy food.",
            "Put the two halves together and you have the judgement this unit is built around. Russia in 1922 was more equal than Russia in 1913, and it was no freer. One group still held all the political power and could not be voted out; what had changed was which group it was. Your lesson's thermometer task asks why other countries in the West were frightened of all this. The answer is that it was the first time anywhere that workers had taken a great empire, and nobody knew where it would happen next."
          ],
          tip: "A good answer on change holds two things at once: real equality in some ways, no freedom in others. Say both, then judge."
        },
        {
          heading: "Consequences: peace, civil war and a new country",
          paragraphs: [
            "Your revision lesson lists four consequences of the October Revolution, and they belong in your third paragraph. First, peace with Germany: the Bolsheviks had promised to leave the war and they left it. Second, the Russian Civil War, as groups who rejected Bolshevik rule took up arms. Third, the New Economic Policy, which was Lenin's retreat from the strictest controls once the country was exhausted. Fourth, the creation of the Soviet Union in 1922, which turned the old Russian Empire into a new kind of state.",
            "Notice how the first consequence produced the second. Leaving the war was popular with soldiers and peasants, but it confirmed for the Bolsheviks' enemies that the new government could not be lived with, and the result was years of fighting inside Russia.",
            "Your lesson's final learning outcome asks you to understand the impact of the Bolshevik Revolution on the Russian Empire by 1922, and to evaluate how successful Lenin was as a leader. The fair way to do that is to judge him against his own stated aims rather than against ours: he promised peace, bread and land, and he promised a state run for the workers. Decide for yourself how many of those he delivered, and at what cost."
          ],
          tip: "Peace, civil war, New Economic Policy, Soviet Union. Four consequences, in that order, is a complete third paragraph."
        },
        {
          heading: "Writing the narrative account, and the assessment",
          paragraphs: [
            "Your assessment question is a narrative account of the key events of the October 1917 Revolution, and you may use the storming of the Winter Palace and the creation of the Soviet Union in your answer. Narrative means telling the story clearly from start to finish: cause, then events, then consequence, one paragraph each, three paragraphs in all.",
            "Your lesson's success criteria tell you exactly what the marker wants. The material must be organised into a clear sequence. Each event must be linked to the next with a phrase such as this led to or as a result, and each link explained. Specific knowledge and evidence must be used, not general comments. The last point of each paragraph must link on to the next part of the narrative or back to the question.",
            "The assessment itself has four parts: multiple-choice questions, a historical sequencing question, a section where you give specific evidence to support statements, and the extended narrative. You have 45 minutes. The sequencing section is where the calendar matters: if you remember that the February Revolution is dated in March and the October Revolution in November, you will not put your own events out of order."
          ],
          worked: {
            q: "Plan the three paragraphs of a narrative account on the October 1917 Revolution.",
            steps: [
              "Paragraph 1, cause: the Provisional Government stayed in the war, failed on food and prices, and lost authority through dual power and Order Number One; the Bolsheviks promised bread, peace and land.",
              "Paragraph 2, events: Lenin's return and his September letter; the Central Committee's decision in October; the Military Revolutionary Committee under Trotsky; the taking of the printing house, the stations, the exchange and the State Bank; the Winter Palace on 25 October, Old Style.",
              "Paragraph 3, consequences: peace with Germany, the Russian Civil War, the New Economic Policy and the creation of the Soviet Union in 1922.",
              "Then check the joins: each paragraph should end with a sentence that hands the story to the next one."
            ],
            answer: "Three paragraphs: causes ending with the Bolsheviks ready to act; events in dated order ending with the palace taken; consequences ending with the Soviet Union and a sentence answering the question."
          },
          tip: "Plan for two minutes before you write. Four events in order with explained links beats eight events in a heap."
        }
      ],
      gate: [
        { kind: "mcq", q: "How did Karl Marx describe communism?", options: ["A system in which property is owned by the whole community and wealth is shared fairly", "A system in which one strong leader owns the factories on everyone's behalf", "A system in which workers buy shares in the factory they work in", "A system in which the Church distributes food to the poor"], answer: 0, why: "Your lesson defines communism as a way of organising society in which the community owns all the property, and a government of workers shares the wealth out fairly.",
          feedback: [
            "",
            "That describes a dictatorship rather than Marx's idea. Marx said property should belong to the whole community, not to a leader acting on its behalf.",
            "Buying shares keeps private ownership in place, which is the opposite of what Marx argued for: ownership by the community as a whole.",
            "Marx's argument was about who owns factories, banks and land, not about charity. He wanted property owned by the community."
          ] },
        { kind: "gap", q: "In 1922 the old Russian Empire was reorganised into a new country called the ___ Union.", answer: "Soviet", options: ["Soviet", "Romanov", "Provisional"], why: "The Soviet Union was created in 1922, named after the soviets, the councils of workers and soldiers.",
          feedback: {
            "Romanov": "The Romanovs were the dynasty that lost the throne in 1917. The new state created in 1922 was named after the workers' councils: the Soviet Union.",
            "Provisional": "The Provisional Government was the temporary government of 1917, overthrown in October. The country created in 1922 was the Soviet Union."
          } },
        { kind: "mcq", q: "Which change under Bolshevik rule shows most clearly that Russians did not become more free?", options: ["Only the Communist Party was allowed to exist, and only communist newspapers could be published", "Titles and ranks were abolished and everyone was called comrade", "Women were declared equal to men", "Houses were taken from the rich and shared among workers"], answer: 0, why: "Banning every other party and every other newspaper removes the two things people need to change a government by argument: choice and information.",
          feedback: [
            "",
            "Dropping titles was a change towards equality rather than away from freedom. The ban on other parties and newspapers is the evidence you want.",
            "Declaring women equal to men was one of the Bolsheviks' real reforms. The loss of freedom shows in the ban on other parties and newspapers.",
            "Redistributing houses is a change in who owns property, not a restriction on freedom. The one-party rule and the newspaper ban are the restriction."
          ] }
      ],
      modules: [
        {
          title: "What changed, and in what way",
          task: {
            kind: "match",
            q: "Match each Bolshevik change to what it did.",
            pairs: [
              ["Everyone called comrade", "Abolished titles and ranks, so nobody officially outranked anybody else"],
              ["Factory committees", "Put the running of workplaces in the hands of the workers themselves"],
              ["Land shared out", "Gave peasants the thing they had wanted since serfdom ended"],
              ["Banks taken over", "Moved control of money from private owners to the state"],
              ["One party, one press", "Removed any lawful way of arguing for a different government"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Sort the five changes into two groups: those that gave something to ordinary people, and those that gave something to the state.",
                "Three gave something to workers or peasants. Match those first.",
                "One moved control to the state without giving it to anyone else.",
                "The last one took something away. Match it last and say what was taken."
              ],
              example: {
                q: "Match these changes in a workplace to what they did: a staff committee is given the rota; the owner takes over the accounts; only one union is permitted. Options: control of money moves upwards; staff gain control of their own time; argument for a different arrangement becomes impossible.",
                steps: ["The rota is about time, so that is the staff gaining control.", "The accounts are money, so control moves upwards.", "Permitting one union removes the means of arguing."],
                answer: "Staff committee: staff gain control of their own time. Owner takes the accounts: control of money moves upwards. One union: argument becomes impossible."
              }
            },
            core: { hint: "Ask of each change: did it hand something to ordinary people, to the state, or take something away?" },
            stretch: { extend: "Choose the change you think mattered most to an ordinary Russian in 1922 and explain why, then say whether your answer would differ for a factory owner." }
          },
          explain: "Say, in one sentence, which of these changes you would put in your lesson's bad ideas column, and why.",
          why: "Three of these changes gave real power or property to workers and peasants; one moved control of money to the state; and the one-party, one-newspaper rule removed the means of ever arguing for anything different."
        },
        {
          title: "A narrative account of October 1917",
          task: {
            kind: "written",
            q: "Write a narrative account explaining the key events of the October 1917 Revolution. Write three paragraphs: causes, events, consequences. You may use the storming of the Winter Palace and the creation of the Soviet Union in your answer.",
            criteria: [
              "My first paragraph gives causes, my second gives events in order, and my third gives consequences.",
              "I link each event to the next with a phrase such as this led to or as a result, and I explain the link.",
              "I use specific knowledge: named people, named events, and at least one date with its calendar named.",
              "Each paragraph ends by handing the story on to the next part or answering the question.",
              "I use the storming of the Winter Palace and the creation of the Soviet Union somewhere in my answer."
            ],
            model: "One cause of the October 1917 Revolution was the Provisional Government's decision to stay in the First World War. This mattered because the war was why food had run short and why soldiers had mutinied in February, so when Kerensky's attack on the Germans failed in July 1917, soldiers and sailors protested in the streets and turned towards the only party promising peace. This led to the Kornilov affair in August, when Kerensky armed the Bolshevik Red Guards to stop a general seizing power, and they kept their weapons afterwards. The events themselves were planned rather than spontaneous. On 10 October, Old Style, Lenin persuaded the Bolshevik Central Committee to back an armed seizure of power, and Trotsky's Military Revolutionary Committee prepared it. As a result, on 24 October, Old Style, the Bolsheviks occupied the railway stations, the telephone exchange and the State Bank, and the following night the Red Guards surrounded and stormed the Winter Palace, where the Provisional Government surrendered. The consequences reached far beyond Petrograd. The Bolsheviks made peace with Germany, which was popular with soldiers and peasants but convinced their opponents that the new government could not be accepted, and this led to the Russian Civil War. Lenin later softened his economic controls through the New Economic Policy, and in 1922 the old empire was reorganised as the Soviet Union, the world's first communist state. The revolution therefore changed who held power and how property was owned, but it did not give Russians any lawful way to change their government."
          },
          levels: {
            support: {
              steps: [
                "Paragraph 1, causes: One cause of the October 1917 Revolution was... Then explain why it mattered and link forward.",
                "Paragraph 2, events: give three or four events in order, each joined with this led to or as a result. Include one date and say which calendar.",
                "Paragraph 3, consequences: peace with Germany, the Civil War, the New Economic Policy, the Soviet Union in 1922.",
                "Read it back and check that each paragraph's last sentence points at the next one."
              ],
              example: {
                q: "Write a two-paragraph narrative on the 1905 Revolution: one paragraph of causes, one of events.",
                steps: ["Causes: defeat by Japan in 1904 to 1905 and long-standing anger over land and autocracy.", "Link: this led to a peaceful march in January 1905.", "Events: Bloody Sunday, then strikes, riots and mutinies, then the October Manifesto.", "Finish by pointing forward to what the Manifesto did and did not change."],
                answer: "Two paragraphs: causes ending with a link to the march, then events in order ending with the Manifesto."
              }
            },
            core: { hint: "Three paragraphs, three or four points each, every point joined to the next. Causes, events, consequences, in that order." },
            stretch: { extend: "Add one sentence to your final paragraph that answers the unit's big question: to what extent did the Russian Revolution bring about change?" }
          },
          explain: "Say, in one sentence, what the third paragraph of a narrative account has to do that the second one does not.",
          why: "The marks sit in the structure, not the detail: causes, then events in order, then consequences, with every step joined and explained. The strongest answers finish by answering the question rather than simply stopping."
        },
        {
          title: "How much really changed?",
          task: {
            kind: "mcq",
            q: "Under Bolshevik rule, no political party except the Communist Party was allowed. Does this show that the revolution changed Russia completely, or that part of the old pattern continued?",
            options: [
              "Part of the old pattern continued: power was still held by one group that could not be voted out",
              "It shows complete change, because the people holding power were new ones",
              "It shows nothing either way, because the Tsar had allowed many political parties",
              "It shows complete change, because Russians could now vote for any party they wished"
            ],
            answer: 0,
            why: "Under the Tsar there was no lawful way to remove the government, and under the Bolsheviks there was still no lawful way to remove it. Who held the power changed; the fact that it could not be challenged did not.",
            feedback: [
              "",
              "New people in power is a real change, but the question asks about the pattern. One group still held power and still could not be voted out, exactly as before.",
              "The Tsar did not allow free political parties; he used the Okhrana against his opponents and dissolved the Duma when it displeased him. That is the continuity the question is pointing at.",
              "Russians could not vote for any party they wished: every party except the Communist Party was banned. That is the opposite of what this change did."
            ]
          },
          contexts: [
            { label: "The newspapers", q: "Under Bolshevik rule, every newspaper except the communist ones was banned. Does this show that the revolution changed Russia completely, or that part of the old pattern continued?", why: "Tsarist Russia had censorship and the Bolsheviks had a monopoly of the press, so control of information passed from one government to another rather than to the people." },
            { label: "Former people", q: "Under Bolshevik rule, the rich had their wealth confiscated and were labelled former people, who were not allowed to work. Does this show that the revolution changed Russia completely, or that part of the old pattern continued?", why: "The names and the targets were new, but the state was once again deciding a person's rights by the group they belonged to rather than by law." },
            { label: "How power was taken", q: "The Bolsheviks took power in October 1917 by seizing buildings rather than by winning an election. Does this show that the revolution changed Russia completely, or that part of the old pattern continued?", why: "Russia moved from a government nobody had elected to another government nobody had elected, which is why historians treat 1917 as a change of rulers more than a change of system." }
          ],
          levels: {
            support: {
              steps: [
                "Ask the continuity question: could an ordinary Russian remove this government by voting?",
                "Ask the same question about the Tsar's Russia. The answer is the same.",
                "If the answer is the same before and after, that is continuity, not change.",
                "Pick the option that names the pattern rather than the people."
              ],
              example: {
                q: "A country replaces one unelected ruling family with one unelected ruling committee. Has the way power is held changed?",
                steps: ["The people at the top are different, which is a change.", "But nobody can still vote them out.", "So the pattern of holding power has not changed."],
                answer: "The holders changed; the pattern did not."
              }
            },
            core: { hint: "Separate who holds power from how power is held. The question is about the second one." },
            stretch: { extend: "Argue the other side: explain two ways in which Russia in 1922 was truly different from Russia in 1913, and say whether that makes the revolution a real change overall." }
          },
          explain: "Say, in one sentence, the difference between change and continuity when you judge a revolution.",
          why: "This unit's big question asks to what extent the revolution brought change. Property, titles and women's legal status changed a great deal; the impossibility of removing the government by lawful means did not change at all. A strong judgement names both."
        }
      ]
    }
  ],

  sources: {
    deckDump: "hi_y09_topic_1_the_russian_revolution.txt",
    decksUsed: [
      "Lesson 1 Life in Tsarist Russia / L1 Life in Tsarist Russia.pptx",
      "Lesson 2 1905 Russian Revolution / 1905 Revolution lesson UPDATED hwk.pptx",
      "Lesson 2 1905 Russian Revolution / 1905 Revolution lesson UPDATED.pptx",
      "Lesson 2 1905 Russian Revolution / 1905 Revolution lesson.pptx",
      "Lesson 2 1905 Russian Revolution / Copy of 1905 Rev Task causes.pptx",
      "Lesson 3 February 1917 revolution / feb revolution hwk.pptx",
      "Lesson 3 February 1917 revolution / feb revolution.pptx",
      "Lesson 3 February 1917 revolution / Y9 Russia New L5+6.pptx",
      "Lesson 4 October 1917 and mid review / L4 October 1917 Revolution + Progress Check UPDATED homework.pptx",
      "Lesson 4 October 1917 and mid review / L4 October 1917 Revolution + Progress Check UPDATED.pptx",
      "Lesson 4 October 1917 and mid review / October 1917 Revolution.pptx",
      "Lesson 5 Soviet Union 1917-1924 / Soviet union 1917-1924 lesson hwk updated.pptx",
      "Lesson 5 Soviet Union 1917-1924 / Soviet union 1917-1924 lesson hwk.pptx",
      "Lesson 5 Soviet Union 1917-1924 / Soviet union 1917-1924 lessson.pptx",
      "Lesson 6 Revision / L5 Revision hwk.pptx",
      "Lesson 6 Revision / L5 Revision.pptx",
      "Lesson 7 Assessment / Russian revolution assessment.pptx"
    ],
    notes: "Lesson folders, sequence, learning objectives, enquiry question and key words are the department's. Taken from the decks: the society pyramid and the Year 7 feudal comparison; the Romanovs from 1613, Tsar as the Russian word for king, the three pillars of autocracy, no parliament before 1905, 85 per cent peasants, Nicholas crowned 1896 and the plenary's 1894; industrialisation and the new working class; the 1905 causes reading (serfdom, famine, the middle classes, the Russo-Japanese War, Liberals and Socialist Revolutionaries, the 1903 split, about 2,000 assassinations); Bloody Sunday with Father Gapon and over 100 killed, 22 January 1905; the strike wave, over 3,000 Moscow students, the assassination of Grand Duke Sergei, the Bulygin Rescript, the Potemkin mutiny, peasant riots, the general strike, the soviets, the troops' return and the crackdown; the October Manifesto of 30 October 1905 and the Witte draft; the Had-An-Impact / No-Real-Impact sort, the Fundamental Laws and the rigged third and fourth Dumas; the ABC formula of seven causes with each slide's content (Okhrana, Putilov, 400 per cent inflation, the 1915 command decision, Rasputin murdered 1916); the casualty figures (over one million by the end of 1914, around 5.3 million by 1916, about eight million by 1917); the six key moments of the February Revolution with the deck's March dates and 250,000 strikers; the railway workers and the abdication from the train; dual power, Prince Lvov, Kerensky, Order Number One and the June attack on Austria; the second-revolution table (staying in the war, prices, Trotsky and the Red Guards in March 1917, the April demonstrations, Lenin's land promise, Kornilov in August); Lenin's return in April 1917 and the slogan bread, peace and land; the July Days and Kerensky's propaganda; the Kornilov affair and the arming of the Red Guards; the October narrative (12 September letter, 10 October decision, the Military Revolutionary Committee under Trotsky, the printing house, the stations, telephone exchange and State Bank, the Smolny Institute, Kronstadt, the Winter Palace on 25 October and control by 26 October, the Aurora and the Peter and Paul Fortress, the Women's Battalion, Kamenev and Zinoviev); Marx's seven-step scenario, the 1848 Communist Manifesto label, Marx's death in 1883, Marxists; the nine Bolshevik changes; the four consequences (peace with Germany, the Civil War, the New Economic Policy, the Soviet Union); the narrative structure, success criteria SC1 to SC4, and the assessment's four sections and 45 minutes. All explanations, questions, worked examples and model paragraphs are original: the deck's own model narrative paragraph is not reproduced and its distinctive phrases are banned in verify.py. The only quotations are two short fragments printed on the department's October Revolution slide, both by authors who died more than 70 years ago (Lenin's message of 12 September 1917 and the Bolshevik Central Committee's declaration). Facts needed to answer the deck's own questions but not printed in the dump are listed in NOTES.md for the Head of History to confirm: the thirteen-day Old Style / New Style difference and Russia's calendar change in February 1918, the Old Style dates of Bloody Sunday and the abdication, the 1906 Fundamental Laws, and the 1922 date of the Soviet Union. astra/2: per-option feedback on every mcq and gap, misconceptions with checks on both numeric items, explain prompts on all eighteen modules, four context modules (chapters 2, 3, 5 and 6), glossary chapters, four Connections groups, spacing [2,7,30]; no widgets, no constellation, no pretext.l1."
  }
};
