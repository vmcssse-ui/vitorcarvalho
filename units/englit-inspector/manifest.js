// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — AQA GCSE English Literature 8702 · Paper 2 Section A · An Inspector Calls · Year 10 Unit 5 · schema astra/2
//
// COPYRIGHT RULE FOR THIS FILE (checked by verify.py):
//   J. B. Priestley died in 1984, so An Inspector Calls is in copyright until 2055. NOTHING from the play is
//   quoted here: not a line, not a phrase. Character, plot, context, themes, dramatic methods and essay skills are
//   taught through paraphrase, stage directions summarised in the author's own words, and original model answers
//   that do not quote. There are therefore NO “curly double quotes” anywhere in this file (verify.py fails if one
//   appears) and no `quote` field on any section. ‘Single quotes’ mark terms and pupils' own example sentences.
//   verify.py also holds a list of distinctive phrases from the play and fails if any of them appears here.
//   Pupils are told, in chapter 1 and chapter 6, that they must learn and use quotations from their own copy of
//   the play and the department's flashcards; this book describes moments instead of printing them.
//
// Source: the department's Year 10 Unit 5 decks (Summer 1–2, 27 deck files, 26 taught lessons) as text.
// astra/2: per-option feedback on every mcq/gap, misconceptions with `check` on every numeric item, explain on
//   every module, contexts on two modules (a different character or theme for the same skill), glossary chapters,
//   connections, meta.spacing [2, 7, 30]. No constellation (engine lays the stars out), no widgets, no pretext.l1.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["englit-inspector"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "englit-inspector",
    subjectKey: "englit",
    subject: "English Literature",
    board: "AQA",
    spec: "8702",
    specRef: "Paper 2: Modern texts and poetry · Section A: Modern prose or drama (An Inspector Calls)",
    year: 10,
    tier: "GCSE (one tier)",
    title: "An Inspector Calls",
    sub: "One evening in 1912, one dead girl, five people who each played a part: the whole play, its two dates and the exam essay.",
    bigQuestion: "How does Priestley use the Birling family and the Inspector to make his 1945 audience accept that we are all responsible for one another?",
    lessonCount: 26,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer.
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Introduction: social and historical context", question: "How can an understanding of history help us to understand this play?", keywords: ["social hierarchy", "capitalism", "socialism"] },
    { n: 2, title: "Inference from stage directions and setting", question: "What do the opening stage directions show us about the characters and the world they live in?", keywords: ["provincial", "portentous", "decanter", "dandy", "inference"] },
    { n: 3, title: "Mr Birling's capitalist views", question: "What is Priestley trying to show us about Mr Birling in the opening scene?", keywords: ["capitalism", "social class", "power", "PEIRL"] },
    { n: 4, title: "Mr Birling vs the Inspector", question: "How does Priestley contrast Mr Birling with the Inspector?", keywords: ["authorial surrogate", "socialism", "social justice", "corruption"] },
    { n: 5, title: "Sheila's responsibility", question: "How responsible do Mr Birling and Sheila feel for Eva's death, and which moments show it?", keywords: ["responsibility", "naive", "remorseful", "What / How / Why"] },
    { n: 6, title: "Gerald Croft and entitlement", question: "How does Gerald represent the upper-class men of 1912?", keywords: ["entitlement", "impunity", "double standards", "morality"] },
    { n: 7, title: "Gerald Croft's significance", question: "What is Priestley suggesting about Gerald, and how does it link to context?", keywords: ["foreshadowing", "corruption", "nepotism", "social mobility"] },
    { n: 8, title: "Character profiles", question: "Who is most, and who is least, to blame for Eva's death so far?", keywords: ["themes", "stage directions", "how others view them"] },
    { n: 9, title: "Gerald and Sheila's relationship", question: "How has Gerald and Sheila's relationship developed from the start of Act 1 to the middle of Act 2?", keywords: ["key moment", "relationship", "presented"] },
    { n: 10, title: "The Inspector", question: "What is the Inspector's role in the play, and how are the Inspector and Priestley linked?", keywords: ["infer", "analyse", "role", "context"] },
    { n: 11, title: "Mrs Birling's social superiority", question: "How does Mrs Birling battle for power with the Inspector, and what does her view of Eric tell us about her?", keywords: ["dramatic irony", "reputation", "aloof", "snobbery", "power struggle"] },
    { n: 12, title: "Eric: his education and his part in Eva's story", question: "What does Eric's connection to Eva Smith tell us about him and about society in 1912?", keywords: ["public school", "family breakdown", "relationships"] },
    { n: 13, title: "Eric's significance", question: "How and why does Priestley present the breakdown of the Birling family through Eric?", keywords: ["PEIRL", "impunity", "guilt"] },
    { n: 14, title: "The Inspector leaves", question: "What messages does the Inspector leave with the Birlings and the audience, and how do the characters react?", keywords: ["final speech", "pronouns", "1945 audience"] },
    { n: 15, title: "Interpreting the ending: what or who is the Inspector?", question: "Which readings of the Inspector are most convincing, and why?", keywords: ["ghost", "social conscience", "vessel", "socialist message"] },
    { n: 16, title: "Essay preparation: sympathy and dislike", question: "How does Priestley create sympathy for, or dislike of, each character across the three acts?", keywords: ["sympathy", "dislike", "development"] },
    { n: 17, title: "Revising context", question: "Where in the play do we see each piece of context at work?", keywords: ["flashcards", "1912 strikes", "dramatic irony"] },
    { n: 18, title: "Essay: the significance of Mr Birling", question: "Who does Mr Birling represent, and what does Priestley want us to understand through him?", keywords: ["topic sentence", "antithesis", "hypocrisy", "hoax"] },
    { n: 19, title: "Revising Gerald", question: "Which six quotations best show Gerald across the three acts?", keywords: ["entitlement", "gender inequality", "wealth"] },
    { n: 20, title: "How is Eva Smith presented?", question: "How is Eva Smith presented through the older generation, the younger generation and the Inspector?", keywords: ["unity of action", "prejudice", "justice"] },
    { n: 21, title: "Gender", question: "What is Priestley saying about gender roles, and how does it link to his political message?", keywords: ["patriarchy", "exploitation", "suffragette", "bourgeoisie"] },
    { n: 22, title: "Gender: the full essay", question: "Can I turn my planning grid into a full essay on gender?", keywords: ["response grid", "flashcards", "essay"] },
    { n: 23, title: "Relationships", question: "Which relationships change by the end of the play, which stay the same, and why?", keywords: ["relationships", "essay structure", "introduction"] },
    { n: 24, title: "Older and younger generations: marking activity", question: "How does a candidate's answer measure against the mark scheme, and how does mine?", keywords: ["mark scheme", "level", "improvements"] },
    { n: 25, title: "Priestley's message", question: "How far did Priestley write the play to communicate his political messages?", keywords: ["political message", "social responsibility", "no man is an island"] },
    { n: 26, title: "Writing about context", question: "How do I link each piece of context to evidence from the play in my own writing?", keywords: ["hypocrisy", "broadcasts", "Russian Revolution"] }
  ],

  glossary: [
    { term: "capitalism", means: "A system where businesses are owned privately and run for profit, and each person looks after their own interests.", chapter: "two-dates" },
    { term: "socialism", means: "The belief that wealth and responsibility should be shared, and that society should look after everyone.", chapter: "two-dates" },
    { term: "social hierarchy", means: "The ladder of classes in a society, from the richest and most powerful down to the poorest.", chapter: "two-dates" },
    { term: "patriarchy", means: "A society run by men, in which women are expected to obey and are judged more harshly.", chapter: "themes-and-essay" },
    { term: "stage directions", means: "The playwright's instructions about the set, lighting, movement and tone of voice, printed in italics.", chapter: "curtain-rises" },
    { term: "dramatic irony", means: "When the audience knows something a character on stage does not.", chapter: "curtain-rises" },
    { term: "authorial surrogate", means: "A character who speaks for the writer, so the writer's views reach the audience directly.", chapter: "curtain-rises" },
    { term: "entitlement", means: "Believing you deserve privileges and can take what you want, because of who you are.", chapter: "sheila-and-gerald" },
    { term: "impunity", means: "Doing wrong without ever facing the consequences.", chapter: "sheila-and-gerald" },
    { term: "remorse", means: "Deep regret for something you have done, with the wish to put it right.", chapter: "sheila-and-gerald" },
    { term: "hypocrisy", means: "Claiming to have standards that you do not live by yourself.", chapter: "mrs-birling-and-eric" },
    { term: "prejudice", means: "Judging a person before you know them, because of their class, sex or background.", chapter: "mrs-birling-and-eric" },
    { term: "guilt", means: "The painful knowledge that you have done something wrong.", chapter: "mrs-birling-and-eric" },
    { term: "social conscience", means: "An inner sense of duty towards other people in society, not just yourself.", chapter: "inspector-and-ending" },
    { term: "social responsibility", means: "The idea that we each owe something to everyone else, because our lives are tied together.", chapter: "inspector-and-ending" },
    { term: "PEIRL", means: "The paragraph plan from your lessons: Point, Evidence, Inference, Reader or audience, Link to context.", chapter: "themes-and-essay" }
  ],

  // astra/2: the Connections game. Four groups of four, all sixteen drawn from the glossary above.
  connections: [
    { group: "Ways of running a society", terms: ["capitalism", "socialism", "social hierarchy", "patriarchy"] },
    { group: "The Birlings' faults", terms: ["entitlement", "impunity", "hypocrisy", "prejudice"] },
    { group: "What the Inspector wants them to feel", terms: ["remorse", "guilt", "social conscience", "social responsibility"] },
    { group: "Tools of the playwright and the essay writer", terms: ["stage directions", "dramatic irony", "authorial surrogate", "PEIRL"] }
  ],

  chapters: [
    // ───────────────────────────── CHAPTER 1 ─────────────────────────────
    {
      key: "two-dates", n: 1,
      title: "Two dates: 1912 and 1945",
      lead: "This chapter gives you the two worlds the play lives in: the year it is set and the year it was written.",
      covers: [1, 17, 26],
      pretext: {
        words: [
          { word: "context", means: "the world a text was written in and about", sentence: "Knowing the context of 1912 helps you see why Eva Smith had no one to turn to." },
          { word: "social hierarchy", means: "the ladder of classes from rich to poor", sentence: "The Birlings stand near the top of the social hierarchy and Eva stands near the bottom." },
          { word: "capitalism", means: "a system where business is run for private profit", sentence: "Mr Birling believes in capitalism: low wages mean higher profits." },
          { word: "socialism", means: "the belief that society should share and look after everyone", sentence: "Priestley's socialism says that everyone is responsible for everyone else." },
          { word: "Edwardian", means: "from the years before the First World War", sentence: "Edwardian Britain had rich families with servants and poor families with almost nothing." }
        ],
        passage: [
          "An Inspector Calls is a play by J. B. Priestley.",
          "He wrote it in 1945, at the end of the Second World War.",
          "But he set the story in 1912, before the First World War.",
          "In 1912, Britain had a strict social ladder.",
          "Rich factory owners sat near the top.",
          "Their workers earned very little and had few rights.",
          "There was no welfare state to catch people who fell.",
          "Priestley wanted a fairer country after the war.",
          "He believed that everyone should look after everyone else.",
          "The audience in 1945 knew what had happened since 1912.",
          "They had lived through two wars.",
          "Priestley uses that gap of thirty-three years to teach a lesson.",
          "Keep both dates in your head as you read the play."
        ]
      },
      sections: [
        {
          heading: "Britain in 1912: the social ladder",
          paragraphs: [
            "In 1912 Britain was divided into classes, and almost everyone knew exactly where they stood. At the top were the aristocracy and the landed families, like Gerald's parents, Sir George and Lady Croft. Below them came the wealthy business class, like the Birlings, who had made their money in factories and wanted the titles and respect of the class above. Below them were the working class: factory hands, shop assistants and servants, like Eva Smith and Edna the maid. The deck calls this ladder the social hierarchy.",
            "There was no welfare state. If you lost your job, there was no unemployment benefit; if you fell ill, there was no National Health Service. You turned to family, to charity, or to the workhouse. Women earned less than men, could not vote, and were pushed out of respectable society if they became pregnant outside marriage. Workers were beginning to fight back: 1910 to 1912 saw strikes in the mines, the docks and the railways. This is the world Eva Smith falls through."
          ],
          tip: "Context is only worth marks when you tie it to a moment in the play. Never write a history lesson on its own."
        },
        {
          heading: "Capitalism and socialism",
          paragraphs: [
            "Capitalism is a system in which factories and businesses are owned privately and run for profit. A capitalist like Mr Birling sees low wages as good business, and sees looking after yourself as plain common sense. Socialism is the belief that wealth and responsibility should be shared, and that a society is judged by how it treats its weakest members. A socialist like the Inspector sees Eva Smith's wages as a question of right and wrong.",
            "Priestley was a socialist. In July 1945, the year the play was written, Britain elected a Labour government that went on to build the welfare state and, in 1948, the National Health Service. The audience watching the play were deciding what kind of country they wanted after the war. Whenever a character talks about money, workers or responsibility, ask yourself which side of this argument they stand on."
          ],
          tip: "Mr Birling and the Inspector are the two poles of the play. Every other character moves towards one of them."
        },
        {
          heading: "Priestley's life and purpose",
          paragraphs: [
            "John Boynton Priestley was born in Bradford in 1894, the son of a schoolteacher. He joined the army in 1914 and was wounded in the First World War. He came out of the trenches convinced that the officer class, chosen for their background rather than their ability, had wasted the lives of working-class men. During the Second World War his Sunday evening radio talks for the BBC drew millions of listeners, and he used them to ask what kind of Britain should be built after victory. The talks were taken off the air in 1940, and Priestley believed his politics were the reason.",
            "He wrote An Inspector Calls at the end of the war. It was first performed in 1945, in Moscow, because no London theatre was free, and opened in London in 1946. Priestley set it in 1912 for two reasons that your lessons give you. First, 1912 was the last year of a confident, comfortable world that was about to be destroyed, so the audience could see the Birlings' blindness with hindsight. Second, by criticising the past rather than the present, he could ask his audience hard questions without seeming to attack them directly."
          ],
          tip: "The gap between 1912 and 1945 is the play's engine: every confident prediction Mr Birling makes, the audience knows to be wrong."
        },
        {
          heading: "The story in one evening",
          paragraphs: [
            "The whole play happens in one room, in real time, on one spring evening in 1912. The Birlings are celebrating Sheila's engagement to Gerald Croft when a police inspector calls. A young woman, Eva Smith, has died that evening after drinking disinfectant. One by one, the Inspector shows that each person in the room helped to push her towards her death: Mr Birling sacked her, Sheila had her sacked again, Gerald made her his mistress and left her, Eric got her pregnant, and Mrs Birling refused her charity.",
            "The Inspector leaves with a warning, and the family discover that he was not a real policeman and that no girl has died. The older Birlings are delighted; Sheila and Eric are not, because what they did was still true. Then the telephone rings: a girl has just died, and an inspector is on his way. Because everything happens in one place, in one evening, with one chain of consequences, critics say the play keeps the classical unities of time, place and action.",
            "One honesty note before you start. This book never prints Priestley's words, because the play is still in copyright. It describes moments instead. In the exam you must quote, so learn your quotations from your own copy and your class flashcards, and use this book for the ideas around them."
          ],
          tip: "Learn the order of the five confessions: Birling, Sheila, Gerald, Mrs Birling, Eric. The Inspector works through the family in that order."
        }
      ],
      gate: [
        { kind: "mcq", q: "In which year is An Inspector Calls set?", options: ["1912", "1945", "1914", "1926"], answer: 0, why: "The play is set on a spring evening in 1912, the year the Titanic sank and two years before the First World War. It was written in 1945.",
          feedback: [
            "",
            "You have given the year the play was written and first performed. Priestley wrote it in 1945 but set it back in 1912, so that the audience could see the Birlings' confidence with hindsight.",
            "You have jumped forward to the start of the First World War. The play is set two years earlier, in 1912, which is exactly why Mr Birling's claim that there will be no war is dramatic irony.",
            "1926 was the year of the General Strike, which the 1945 audience would remember. The play is set earlier, in 1912, before the First World War."
          ] },
        { kind: "numeric", q: "The play is set in 1912 and was written in 1945. How many years separate the two dates?", answer: 33, tolerance: 0, units: "years", check: "1945 - 1912", why: "1945 minus 1912 is 33. Those 33 years hold two world wars, the Russian Revolution, the General Strike and the Depression, and the audience knew all of it.",
          misconceptions: [
            { answer: 34, says: "You may have used 1946, the year of the London first night, or counted both end years. The play was written in 1945, and 1945 minus 1912 is 33.", check: "1946 - 1912" },
            { answer: 31, says: "You have started from 1914, the start of the First World War, rather than from 1912, the year the play is set. 1945 minus 1912 is 33.", check: "1945 - 1914" },
            { answer: 32, says: "A counting slip. Check by adding: 1912 plus 33 is 1945. The gap is 33 years.", check: "1945 - 1912 - 1" }
          ] },
        { kind: "gap", q: "A system in which businesses are owned privately and run for profit, with each person looking after their own interests, is called ___.", answer: "capitalism", options: ["capitalism", "socialism", "hierarchy"], why: "Capitalism is Mr Birling's creed: profit first, and every man for himself. Socialism, the Inspector's creed, is the opposite.",
          feedback: {
            "socialism": "You have swapped the two systems. Socialism is the belief that wealth and responsibility should be shared across society. Private ownership and profit, with each person looking after their own interests, is capitalism, which is Mr Birling's view.",
            "hierarchy": "A hierarchy is the ladder of classes itself, not the economic system. The system of private ownership and profit that puts the Birlings high on that ladder is capitalism."
          } }
      ],
      modules: [
        {
          title: "Context to meaning",
          task: {
            kind: "match",
            q: "Match each piece of context to the moment in the play it helps you understand.",
            pairs: [
              ["The Titanic sailed in April 1912 and sank on its first voyage", "Mr Birling's confident speech about the future, which the audience knows is wrong in every detail"],
              ["There was no welfare state in 1912", "Eva Smith has to beg a charity committee for help when she is pregnant and penniless"],
              ["Workers struck for better pay across Britain in 1910 to 1912", "Mr Birling sacks the workers who asked him for a rise"],
              ["Priestley's audience had just lived through a second world war", "The Inspector's warning that people who will not learn the lesson will be taught it by force"],
              ["Women in 1912 had few jobs open to them and could not vote", "Eva's narrowing choices after she loses two jobs in a row"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read the left-hand side and say in your own words what each fact means for an ordinary person in 1912.",
                "Ask: which character would feel this fact most? The person who sacks, or the person who is sacked?",
                "Find the moment on the right that would be different if the fact were not true."
              ],
              example: {
                q: "Practice: which moment does the fact that women could not vote in 1912 help explain: (a) Mr Birling sending Sheila out of the room when serious matters come up, or (b) Eric's drinking?",
                steps: ["Women were treated as having no place in serious public business.", "Being sent out of the room treats Sheila the same way.", "Eric's drinking has nothing to do with women's rights."],
                answer: "(a) Mr Birling sending Sheila out of the room."
              }
            },
            core: { hint: "Each fact removes a safety net or adds a blind spot. Match the net to the person who falls through it, or the blind spot to the person who cannot see." },
            stretch: { extend: "Choose one pair and write a single exam sentence that names the moment, describes it precisely, and weaves the context into the same sentence. Then say which assessment objective that sentence is earning." }
          },
          why: "Context earns marks (AO3) only when it explains why a moment matters. Each pair here is one link you can reuse in an essay.",
          explain: "Pick one pair and say, in one sentence, what the 1945 audience would have thought at that moment and why."
        },
        {
          title: "Why 1912, written in 1945?",
          task: {
            kind: "written",
            q: "Explain why Priestley set his play in 1912 but wrote it for an audience in 1945. Write one developed paragraph.",
            marks: 8,
            criteria: [
              "AO3: you give at least two reasons for the gap between the two dates",
              "AO1: you refer precisely to a moment in the play that the gap makes powerful",
              "AO2: you name the method the gap creates (dramatic irony) and explain its effect",
              "AO3: you link the choice to what the 1945 audience had lived through or was deciding"
            ],
            model: "Priestley set his play in 1912 but wrote it in 1945 so that his audience would watch the Birlings with hindsight. In the first act Mr Birling promises the young men a future of peace and growing prosperity and insists that the great new liner about to sail cannot sink. Every person in the theatre in 1945 knew that the Titanic sank days later, that war came in 1914, and that a second war had only just ended. This is dramatic irony: the audience knows what the character does not, and it makes Birling's confidence look foolish and his politics suspect. The gap also let Priestley criticise his own society safely, by placing its selfishness in the past, while asking his audience whether they wanted to build the same kind of Britain again or a fairer one."
          },
          levels: {
            support: {
              steps: [
                "What: write one sentence saying that the gap between the dates lets the audience see what the characters cannot.",
                "How: describe one of Birling's confident predictions in your own words and say what really happened.",
                "Why: name the method (dramatic irony) and say how it makes the audience feel about Birling.",
                "Context: end with what the 1945 audience was deciding about the future of Britain."
              ],
              example: {
                q: "Practice question: why does Priestley make Mr Birling, a factory owner, the first person the Inspector questions?",
                steps: [
                  "What: Birling is the head of the family and stands for capitalism, so his view is tested first.",
                  "How: the Inspector reveals that Birling sacked Eva for asking for a rise, and Birling says he would do it again.",
                  "Why: starting with the most powerful person shows that the chain begins at the top of the social ladder."
                ],
                answer: "Priestley begins with Mr Birling because he is the head of the family and the clearest capitalist in the room. The Inspector shows that Birling sacked Eva for asking for more pay, and Birling insists he would do the same again. Starting at the top of the social ladder shows the audience that the chain of harm begins with those who hold the power."
              }
            },
            core: { hint: "Two reasons: hindsight (dramatic irony) and safety (criticising the past to question the present). Give an example of the first and a sentence on the second." },
            stretch: { extend: "Argue the other way: what would the play lose if Priestley had set it in 1945? Then judge whether the 1912 setting makes the message stronger or lets a modern audience dismiss it as history." }
          },
          why: "A top answer explains the gap as a method, not just a fact: dramatic irony that undermines Birling, and distance that lets Priestley question the present through the past.",
          explain: "Say, in one sentence, what the audience in 1945 knew that Mr Birling in 1912 did not."
        },
        {
          title: "The story in seven steps",
          task: {
            kind: "order",
            q: "Put these seven events in the order the Inspector uncovers them in the play.",
            items: [
              "Mr Birling sacks Eva Smith from his factory for leading a request for higher pay.",
              "Sheila has Eva sacked from Milwards out of jealousy and bad temper.",
              "Gerald rescues Eva, now calling herself Daisy Renton, from a bar and makes her his mistress.",
              "Mrs Birling turns the pregnant Eva away from her charity committee.",
              "Eric admits that he is the father of Eva's child and stole money to help her.",
              "The family learn that there is no Inspector Goole and that no girl has died.",
              "The telephone rings: a girl has died and a police inspector is on his way."
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the person who has the most power in the house: who does the Inspector question first?",
                "The two young people at the table come next, in the order the Inspector names them.",
                "Mrs Birling is questioned in Act 2 and Eric in Act 3.",
                "The last two steps come after the Inspector has gone. Which discovery comes first, and what interrupts the celebration?"
              ],
              example: {
                q: "Practice: put these three moments from the opening of Act 1 in order: the doorbell rings; Mr Birling makes a speech about the future; the women leave the men to their port.",
                steps: ["Birling's speech comes while the whole family is still at the table.", "The women leave, and Birling lectures the young men.", "The doorbell interrupts that lecture."],
                answer: "Mr Birling makes a speech about the future; the women leave the men to their port; the doorbell rings."
              }
            },
            core: { hint: "The Inspector follows Eva's own timeline: the factory, the shop, the bar, the charity, the baby. Then the play adds its two twists." },
            stretch: { extend: "Which single step is the moment the Birling family stops being able to pretend? Justify your choice in two sentences, then say which step a 1945 audience would find most shocking and why." }
          },
          why: "The Inspector follows Eva Smith's last two years in order, from the factory floor to the charity committee, and then the play springs its two twists. Every later chapter fits into this shape.",
          explain: "Say, in one sentence, why Mrs Birling's refusal has to be uncovered before Eric's confession."
        }
      ]
    },

    // ───────────────────────────── CHAPTER 2 ─────────────────────────────
    {
      key: "curtain-rises", n: 2,
      title: "The curtain rises: a comfortable room and a sharp ring at the door (Act 1)",
      lead: "This chapter reads the opening stage directions, Mr Birling's speeches and the moment the Inspector walks in.",
      covers: [2, 3, 4],
      pretext: {
        words: [
          { word: "stage directions", means: "the playwright's instructions for set, lighting and actors", sentence: "The stage directions tell us the room is rich but not warm." },
          { word: "inference", means: "working out what is suggested but not said", sentence: "A good inference from the heavy furniture is that the Birlings like to show their money." },
          { word: "portentous", means: "self-important and pompous", sentence: "Mr Birling is described as portentous, a man who thinks his own opinions matter a great deal." },
          { word: "prosperous", means: "rich and successful", sentence: "The house belongs to a prosperous factory owner." },
          { word: "dramatic irony", means: "when the audience knows what a character does not", sentence: "It is dramatic irony when Birling says there will be no war." }
        ],
        passage: [
          "The play opens in a dining room in a big house.",
          "The furniture is solid and expensive.",
          "The room looks rich, but it does not feel warm.",
          "The Birling family are finishing a special dinner.",
          "Sheila has just become engaged to Gerald Croft.",
          "Mr Birling is a factory owner who is proud of his success.",
          "He makes long speeches about the future.",
          "He says there will be no war and business will boom.",
          "The audience in 1945 knows he is wrong about everything.",
          "He tells the young men to look after themselves and nobody else.",
          "At that very moment, the doorbell rings sharply.",
          "A police inspector has come about a young woman's death.",
          "The soft lighting becomes bright and harsh."
        ]
      },
      sections: [
        {
          heading: "Reading the room",
          paragraphs: [
            "Before anyone speaks, Priestley has already told you a great deal. The stage directions describe the dining room of a large house in the suburbs, owned by a prosperous manufacturer. The furniture is good and solid, the kind that costs money and is meant to look as if it does. Yet the directions insist that the effect is heavy and comfortable rather than warm and welcoming. Your first inference: this is a family that has money, and shows it, but is not close.",
            "Look at the table. It has no cloth, so the polished wood is on display. The maid, Edna, is clearing away the dessert plates and the champagne glasses and bringing in the port and the cigars. Everyone is in evening dress, the men in tails and white ties, for a dinner at home. The directions tell us that they have eaten well, that they are celebrating, and that they are thoroughly satisfied with themselves. Priestley wants you to see smugness before you hear a word.",
            "Then there is the light. Priestley asks for soft, rosy, intimate lighting until the Inspector arrives, and then for something brighter and harsher. The change works like an interrogation lamp: the cosy glow of the party gives way to a light in which nothing can hide. When you write about the setting, this is the detail examiners love, because it is a method with a clear effect."
          ],
          tip: "For AO2 on a play, stage directions count as a method. Lighting, furniture, who sits where and how people move are all choices Priestley made."
        },
        {
          heading: "The people at the table",
          paragraphs: [
            "The stage directions introduce each character before they speak. Arthur Birling is a heavy-set man in his fifties, described with the word ‘portentous’, which means pompous and self-important. His manners are easy enough, but his accent and turns of phrase mark him as a man from an industrial town, not the capital: he is a self-made man from an industrial town, not a gentleman born. Sybil Birling, about fifty, is described as a cold woman, and she comes from a higher social class than her husband. That gap matters: it explains her snobbery and his hunger for a knighthood.",
            "Sheila, in her early twenties, is pretty, excited and delighted with life. Gerald Croft, about thirty, is the polished, well-bred young gentleman, handsome and at ease without being vain about it. Eric, also in his early twenties, is the odd one out: not at ease, caught somewhere between shyness and over-confidence. Nothing has happened yet, but Priestley has planted a question. Why is the son of the house the only person at the table who looks uncomfortable?",
            "Your lessons use PEIRL to turn these inferences into a paragraph: a Point, Evidence from the stage directions, an Inference about what it suggests, the Reader's or audience's response, and a Link to Priestley's purpose and the context. The word bank from the deck will help: implies, suggests, conveys, represents, alludes to."
          ],
          tip: "Learn the one-word labels the directions give each character: pompous father, cold mother, excited daughter, polished fiancé, uneasy son. They are your starting points for every character essay."
        },
        {
          heading: "Mr Birling's speeches and the doorbell",
          paragraphs: [
            "Once the toasts are over, Mr Birling holds forth. He tells the table that the engagement is good news for business, because the Birling and Croft firms may stop competing and work together. He predicts a long period of growing prosperity. He dismisses the recent strikes as finished. He insists that the Germans do not want a war because they have too much to lose, and that the great new liner sailing next week is impossible to sink. He even looks forward to 1940, when, he says, all this talk of war will have been forgotten.",
            "Every one of these claims is wrong, and the 1945 audience knew it. The Titanic sank on 15 April 1912, war began in 1914, the strikes grew into the General Strike of 1926, and in 1940 Britain was being bombed. This is dramatic irony, and it does more than make Birling look foolish. If he is wrong about every fact, why should we trust his opinions? Priestley is quietly discrediting Birling's politics before the Inspector has said a word.",
            "The women leave, and Birling lectures Gerald and Eric. He tells them that community spirit is nonsense, and that a man's only duty is to himself and to his family. At that exact moment the doorbell rings, sharply. The man who has come to the door will spend the whole play proving the opposite. The timing is a structural choice: Priestley interrupts the selfish creed with the person who will destroy it."
          ],
          tip: "When you write about Birling's predictions, give the real date of what happened. Precise context is what turns a mention into AO3 marks."
        },
        {
          heading: "The Inspector arrives: the first link",
          paragraphs: [
            "The stage directions make the Inspector solid. Priestley says he does not have to be physically large, yet he gives an impression of size, weight and purpose. He is in his fifties, in a plain dark suit, and he speaks slowly and carefully. He has an unsettling way of fixing his eyes on whoever he is about to address, and only then speaking. His name, Goole, sounds like ‘ghoul’, a spirit that haunts the dead, and the pun is a hint you will return to in chapter 5.",
            "He tells the family that a young woman has died at the Infirmary two hours earlier after drinking disinfectant, and that she left a letter and a diary. Her name was Eva Smith, and she once worked in Birling's factory. In the autumn of 1910 she and some other workers asked for a small rise, from twenty-two shillings and sixpence to twenty-five shillings a week. Birling refused; they went on strike; after a week or two they came back; and he sacked the ringleaders, Eva among them. He says he would do the same again, because it was his duty to keep costs down.",
            "The Inspector is not impressed by Birling's titles, his years as Lord Mayor, his seat as a magistrate or his friendship with the Chief Constable. When Birling mentions that the two of them play golf together, the Inspector flatly replies that he does not. He is the only character Birling cannot charm, bully or buy. Your lessons call him an authorial surrogate: the character through whom Priestley speaks directly to the audience, standing for socialism as Birling stands for capitalism."
          ],
          tip: "Build a two-column table, Birling against the Inspector: profit against people, status against duty, the individual against the community. Every contrast is a paragraph."
        }
      ],
      gate: [
        { kind: "mcq", q: "What happens to the stage lighting when the Inspector arrives?", options: ["It becomes brighter and harsher", "It dims until the stage is almost dark", "It turns deep red", "It does not change at all"], answer: 0, why: "The directions ask for soft, rosy, intimate light before the Inspector arrives and brighter, harsher light afterwards. The cosy party is suddenly exposed, like a suspect under a lamp.",
          feedback: [
            "",
            "You have reversed the change. The light does not fade; it gets stronger and harder, so that nothing in the room can hide. Think of an interrogation lamp, not a dimmer switch.",
            "There is no red in the directions. Red would signal danger or passion; Priestley wants exposure, so the light becomes brighter and harsher, not coloured.",
            "The lighting change is one of the clearest methods in the play, and it is written into the opening stage directions. Soft and rosy before the Inspector; brighter and harsher after."
          ] },
        { kind: "numeric", q: "When the curtain rises, how many people are seated at the dining table?", answer: 5, tolerance: 0, units: "people", check: "4 + 1", why: "The four Birlings (Arthur, Sybil, Sheila and Eric) plus Gerald Croft: five. Edna the maid is clearing the table, not sitting at it, and the Inspector has not yet arrived.",
          misconceptions: [
            { answer: 4, says: "You have counted the four Birlings and forgotten Gerald. He is already there, seated opposite Eric, because the dinner is to celebrate his engagement to Sheila.", check: "4" },
            { answer: 6, says: "You have counted Edna, or the Inspector. Edna is the maid clearing the plates, not a guest, and the Inspector does not arrive until Birling has finished lecturing the young men. Five are seated.", check: "4 + 1 + 1" },
            { answer: 7, says: "You have added both Edna and the Inspector. Edna is working, not sitting, and the Inspector is not yet in the house. Four Birlings and Gerald make five.", check: "4 + 1 + 2" }
          ] },
        { kind: "gap", q: "When the audience knows something a character does not, for example that the Titanic will sink, the method is called dramatic ___.", answer: "irony", options: ["irony", "tension", "licence"], why: "Dramatic irony is the gap between what the audience knows and what the character knows. The 1945 audience knew the fate of the Titanic; Birling in 1912 did not.",
          feedback: {
            "tension": "Dramatic tension is the feeling of suspense, which is an effect, not this method. The method where the audience knows what a character does not is dramatic irony.",
            "licence": "Dramatic licence is when a writer changes facts for the sake of the story. This is the opposite: the facts are true and the audience knows them, but the character does not. That is dramatic irony."
          } }
      ],
      modules: [
        {
          title: "Why the doorbell rings when it does",
          task: {
            kind: "mcq",
            q: "Mr Birling tells the young men that a man's only duty is to himself and to his family, and dismisses community spirit as nonsense. At that exact moment the doorbell rings. Why does Priestley time the Inspector's arrival like this?",
            options: [
              "To interrupt Birling's selfish creed with the one person who will spend the play proving it wrong",
              "Because the Inspector is late and has missed the dinner",
              "To show that Birling is a popular man who receives many visitors",
              "Because Priestley needed a reason to change the scenery"
            ],
            answer: 0,
            feedback: [
              "",
              "The Inspector was never invited to dinner, so he cannot be late for it. Look at what Birling is saying when the bell rings: the timing links the interruption to the idea being interrupted.",
              "Nobody else calls all evening, and the Inspector is not a social visitor. The point is not how many people come to the door but what Birling is saying when this one does.",
              "The set does not change: the whole play happens in this one room. The bell is a structural choice about ideas, not about scenery. Ask what Birling has just said."
            ]
          },
          levels: {
            support: {
              steps: [
                "Write down, in your own words, the idea Birling is expressing just before the bell rings.",
                "Write down what the Inspector will argue in his final speech in Act 3.",
                "Notice that the two ideas are exact opposites. The bell cuts one off and brings in the other."
              ],
              example: {
                q: "Practice: at the end of Act 2, Mrs Birling demands that the father of Eva's child be made an example of and punished severely. Eric then walks in. Why does Priestley time his entrance like this?",
                steps: ["Mrs Birling has just condemned the father without knowing who he is.", "The audience and Sheila already suspect Eric.", "His entrance makes her words land on her own son."],
                answer: "So that Mrs Birling's demand for punishment falls on her own son the moment he appears, which is dramatic irony turned against her."
              }
            },
            core: { hint: "Ask what the Inspector stands for, then ask what Birling has just said. The bell rings between a creed and its opposite." },
            stretch: { extend: "Priestley could have had the Inspector arrive during the toasts, or after dinner was over. Explain what would be lost in each case, then link the timing to the idea of the Inspector as a figure of conscience." }
          },
          why: "Structure is a method. The bell interrupts the clearest statement of capitalism in the play with the arrival of the character who stands for its opposite, so the audience hears the argument before it begins.",
          explain: "Say, in one sentence, what idea the doorbell interrupts and what idea walks in through the door."
        },
        {
          title: "The Birlings in the stage directions",
          task: {
            kind: "written",
            q: "How does Priestley use the opening stage directions to present the Birling family? Write one developed PEIRL paragraph.",
            marks: 8,
            criteria: [
              "Point: a clear statement about how the family is presented (for example wealthy, smug, not close)",
              "Evidence: two precise details from the stage directions, described exactly (in the exam you would quote them)",
              "Inference: what each detail implies or suggests about the family",
              "Reader and Link: what the 1945 audience would think or feel, and how it serves Priestley's purpose about class"
            ],
            model: "Priestley uses the opening stage directions to present the Birlings as wealthy, comfortable and smug. The dining room belongs to a prosperous factory owner, and the furniture is heavy and expensive, yet the directions insist that the room is not warm or welcoming. This suggests that money has bought the family comfort but not closeness: they sit at opposite ends of a long table, in full evening dress, celebrating themselves. The directions also tell us they are thoroughly satisfied with their own success, and the audience is invited to distrust that satisfaction before a word is spoken. A 1945 audience, many of whom had lost homes and relatives in the war, would recognise a class that was protected from hardship and believed it had earned that protection. Priestley's purpose was to make his post-war audience see the gap between families like the Birlings and the Eva Smiths who worked for them, so that when the Inspector arrives and the light hardens, it feels like the truth walking in."
          },
          levels: {
            support: {
              steps: [
                "Point: choose two adjectives for the family (wealthy, smug, cold, divided) and write a sentence using them.",
                "Evidence: pick two details, such as the heavy furniture or the lack of a tablecloth, and describe them precisely.",
                "Inference: for each detail, write ‘This suggests that…’ and finish the sentence.",
                "Reader and Link: say how a 1945 audience would react, then write ‘Priestley's purpose was to…’ and link to the class divide of 1912."
              ],
              example: {
                q: "Practice question: how do the stage directions present the Inspector when he first enters?",
                steps: [
                  "Point: the Inspector is presented as solid and purposeful.",
                  "Evidence: he need not be large, but he gives an impression of size and weight; he stares at people before he speaks.",
                  "Inference: this suggests a man who cannot be hurried or pushed aside.",
                  "Reader and Link: the audience feels the balance of power shift; Priestley gives his socialist spokesman an authority Birling cannot match."
                ],
                answer: "Priestley presents the Inspector as solid and purposeful. The directions say he need not be a large man, yet he gives an impression of size and weight, and he fixes his eyes on each person before speaking. This suggests someone who cannot be hurried or brushed aside, and the audience feels the balance of power in the room shift the moment he enters. Priestley's purpose is to give his socialist spokesman an authority that Birling's titles cannot match."
              }
            },
            core: { hint: "Use the PEIRL letters as headings in your plan, then join them into one paragraph. Your Link must mention 1912 or 1945, not both vaguely." },
            stretch: { extend: "Add a sentence on the lighting change and argue that the stage directions give away the play's whole structure before anyone speaks: comfort, interruption, exposure." }
          },
          why: "A PEIRL paragraph moves from a clear point, to precise evidence, to what it suggests, to the audience's response, to Priestley's purpose. The model shows each step in that order without quoting, which you would do in the exam.",
          explain: "Say which detail from the stage directions you would describe first, and what it suggests about the family."
        },
        {
          title: "What Mr Birling got wrong",
          task: {
            kind: "match",
            q: "Match each of Mr Birling's confident claims to what the 1945 audience knew had really happened.",
            pairs: [
              ["The great new liner sailing next week cannot possibly sink", "The Titanic sank on 15 April 1912, and about 1,500 people died"],
              ["Germany does not want war, because it has too much to lose", "The First World War began in August 1914"],
              ["The recent strikes are over and good times are coming", "The General Strike of 1926 and the Depression of the 1930s"],
              ["By 1940 all this talk of war will have been forgotten", "In 1940 Britain was at war and its cities were being bombed"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read each claim and underline the thing Birling is confident about: a ship, a war, strikes, a year.",
                "Find the right-hand event that is about the same thing.",
                "Check the dates: everything on the right happened after 1912 and before 1945, so the audience knew it all."
              ],
              example: {
                q: "Practice: Birling tells his son that he, Birling, knows the Chief Constable and most of the Brumley police. Why would the audience smile at this later in the play?",
                steps: ["Birling is boasting about his influence over the police.", "The man questioning him turns out not to be a policeman at all.", "So his influence was useless from the start."],
                answer: "Because his boasted influence over the police turns out to be useless: the man he is trying to impress is not a policeman, and the real police are about to arrive anyway."
              }
            },
            core: { hint: "Each claim has a date hidden in it: next week, soon, these years, 1940. Match the date to the event." },
            stretch: { extend: "Explain why Priestley gives Birling four wrong predictions rather than one. Then argue: does the dramatic irony make the audience laugh at Birling, fear for him, or both?" }
          },
          why: "Birling's four predictions are the play's clearest dramatic irony. Each one asks the audience to doubt his judgement, and by extension his politics.",
          explain: "Say, in one sentence, why being wrong about the Titanic makes the audience doubt Birling's views about workers."
        }
      ]
    },

    // ───────────────────────────── CHAPTER 3 ─────────────────────────────
    {
      key: "sheila-and-gerald", n: 3,
      title: "Sheila, Gerald and the girl in the photograph (Acts 1 to 2)",
      lead: "This chapter follows Eva Smith from the factory to the dress shop to the Palace bar, and watches Sheila change while Gerald does not.",
      covers: [5, 6, 7, 9, 20],
      pretext: {
        words: [
          { word: "remorse", means: "deep regret for something you did", sentence: "Sheila shows remorse when she learns what happened to Eva." },
          { word: "entitlement", means: "believing you deserve whatever you want", sentence: "Gerald's entitlement lets him treat Eva as something he can pick up and put down." },
          { word: "impunity", means: "escaping any punishment for doing wrong", sentence: "Men of Gerald's class acted with impunity: nobody ever called them to account." },
          { word: "naive", means: "innocent and inexperienced", sentence: "At the start Sheila is naive about how people like Eva live." },
          { word: "mistress", means: "a woman a man keeps a relationship with without marrying her", sentence: "Gerald made Eva his mistress for the summer and then ended it." }
        ],
        passage: [
          "Sheila is Mr Birling's daughter.",
          "At first she seems spoilt and a little childish.",
          "She loves her engagement ring and shows it to her mother.",
          "Then she learns how Eva Smith died.",
          "She is shocked and says the girl deserved better.",
          "Eva had worked in a dress shop called Milwards.",
          "Sheila had her sacked out of jealousy and bad temper.",
          "Sheila feels terrible and says she will never do it again.",
          "Gerald is Sheila's fiancé.",
          "He met Eva, who now called herself Daisy Renton, in a bar.",
          "He gave her a place to live and made her his mistress.",
          "Then he ended it when it suited him.",
          "Sheila gives the ring back, but respects his honesty.",
          "Eva never appears on stage, yet the whole play is about her."
        ]
      },
      sections: [
        {
          heading: "Sheila: from the ring to responsibility",
          paragraphs: [
            "At the start of the evening Sheila is exactly what her father's money has made her. She teases Gerald about how little she saw of him last summer, then forgets it the moment he gives her the ring. She shows the ring to her mother like a child with a present and asks whether it is the one Gerald wanted for her. When her father tells her off for not listening, she apologises like a schoolgirl. The deck's words for her are naive and sheltered.",
            "Then the Inspector describes Eva's last months, and Sheila's first reaction is warm but shallow: she says it is a terrible shame, as if it were bad weather. Her real test comes with the dress shop. In January 1911 Eva had found work at Milwards. Sheila, in a foul temper because a dress did not suit her, saw Eva hold it up and look lovely in it. She thought the girl was smirking, complained to the manager, and threatened to have her mother close the family's account. Eva was sacked.",
            "What makes Sheila different from her father is what happens next. She does not argue or make excuses. She accepts that she was responsible, says that it was the only time she has ever done anything like it, and swears she will never do it again to anybody. Earlier she had already told her father that the girls in his factory are people, not a cost to be cut. Sheila is the first person in the room to take the Inspector's lesson seriously, and she stands for the younger generation's openness to change."
          ],
          tip: "Sheila's journey is naive, then shocked, then remorseful, then wiser than her parents. Track her with one moment for each stage."
        },
        {
          heading: "Gerald: entitlement and impunity",
          paragraphs: [
            "Act 1 ends with a name. The Inspector mentions that Eva changed her name to Daisy Renton, and Gerald's reaction gives him away. Left alone with him, Sheila works out that he knew Daisy; he admits he knew her last spring and summer but insists it is over, and asks Sheila to say nothing. She laughs at him: the Inspector plainly knows already. Then the Inspector steps back in and asks a single, one-word question. The curtain falls. Priestley has learned from detective stories how to end an act.",
            "In Act 2 Gerald tells his story. In March 1911 he went to the bar at the Palace Variety Theatre, a place where men met women they did not intend to marry. He saw a young woman being pestered by Alderman Meggarty, a well-known womaniser, and rescued her. She was hungry and had almost no money. He fed her, then installed her in rooms belonging to a friend who was abroad, and she became his mistress for the summer. In the first week of September he ended it because business took him away, gave her some money, and she went to the seaside for two months to be alone.",
            "Gerald is the hardest character to judge, and that is the point. He was kind in his way, and he is probably the only one of them Eva loved. But he saw nothing wrong in keeping a working-class girl for a season and then dropping her when it was convenient. That is entitlement. He expected no consequences and, until this evening, there were none: that is impunity. Sheila sees it clearly when she mocks him as the storybook hero who rescued the poor girl, and she hands back the ring. Yet she also respects his honesty. She has grown up in two hours; he has not."
          ],
          tip: "Gerald's age is a trap. He is about thirty, so he is young, but in his attitudes he belongs with the older generation. Use him to complicate the generation theme."
        },
        {
          heading: "Gerald and Sheila: a relationship under a lamp",
          paragraphs: [
            "Your lesson on their relationship traces five key moments. First, the ring: their happiness is built on a possession and a public show. Second, Sheila's remark about the summer: a crack is already there before the Inspector arrives. Third, the end of Act 1: she realises he knew Daisy Renton, and she realises the Inspector knows too. Fourth, Gerald tries to get her out of the room before his questioning: he still thinks women should be protected from unpleasant truths. Fifth, she returns the ring: she will not marry a man she does not yet know.",
            "What is Priestley suggesting? That the engagement was never only about love. Mr Birling welcomes it because it may bring two rival firms together, and Gerald's mother, Lady Croft, is said to feel her son could have married better socially. The Inspector's questions strip away the show and leave two people who have to decide whether to start again, truthfully this time. At the very end of the play Gerald offers her the ring once more, as if nothing has happened. Sheila says not yet. Her answer is the play's answer to anyone who wants to carry on as before."
          ],
          tip: "For a relationships essay, use the ring as a motif: given, admired, returned, offered again, refused for now."
        },
        {
          heading: "Eva Smith: the character we never see",
          paragraphs: [
            "Eva Smith is dead before the play begins and never appears on stage. We know her only through what five people choose to say about her. To Mr Birling she was a good worker who became a troublemaker. To Sheila she was a pretty girl who deserved better. To Gerald she was a young woman in trouble who was grateful to him. To Mrs Birling she was a girl of the wrong class with no right to fine feelings. To Eric she was different from the women he usually met. Only the Inspector speaks of her as a whole person: a lively young woman who harmed nobody and whose life was wrecked by others.",
            "Her name does a lot of work. Eva recalls Eve, the first woman, and Smith is the most ordinary surname in England. She is every working-class woman, and the Inspector says so in his final speech when he speaks of countless others like her. Because she cannot speak for herself, the play keeps asking who speaks for people like Eva. The deck's lesson on her gives you the shape of an essay: the older generation's view, the younger generation's view, and the Inspector's."
          ],
          tip: "An essay on Eva is really an essay on how each character sees the working class. Organise it by viewer, not by event."
        }
      ],
      gate: [
        { kind: "mcq", q: "Why did Sheila have Eva Smith sacked from Milwards?", options: ["Eva had stolen from the shop", "Eva seemed to smile at Sheila when a dress suited Eva better, and Sheila was jealous and in a bad temper", "Eva had been rude to Mrs Birling", "Eva had asked the shop for more pay"], answer: 1, why: "Sheila admits she was in a foul temper, that the dress suited Eva and not her, and that she thought Eva was smirking. She used her family's custom at the shop to punish a girl for being pretty.",
          feedback: [
            "Nobody accuses Eva of stealing anywhere in the play. Sheila's complaint had no proper cause at all: she was jealous, in a bad temper, and used her power as a rich customer. That is why she feels so guilty.",
            "",
            "Mrs Birling never meets Eva at Milwards; her part in the story comes much later, at the charity committee. At the shop it was Sheila alone, and the offence was a look, not a word.",
            "Asking for more pay is why Mr Birling sacked her from the factory, not why she lost the shop job. At Milwards Eva did nothing wrong; Sheila's jealousy did the damage. Keep the two sackings separate."
          ] },
        { kind: "numeric", q: "Gerald met Daisy Renton in March 1911 and ended the relationship in the first week of September 1911. For how many months was she his mistress?", answer: 6, tolerance: 0, units: "months", check: "9 - 3", why: "March to September is six months: April, May, June, July, August, September. Gerald calls it a summer; it was half a year of her life.",
          misconceptions: [
            { answer: 7, says: "You have counted March and September both as whole months. From March to the start of September is six months on, not seven. Count the steps between the months, not the months themselves.", check: "9 - 3 + 1" },
            { answer: 5, says: "You have stopped one month short. Count forward from March: April, May, June, July, August, September. That is six steps.", check: "9 - 3 - 1" },
            { answer: 12, says: "You have given a whole year. The relationship lasted one spring and summer, from March to September 1911, which is six months.", check: "12" }
          ] },
        { kind: "gap", q: "After she lost her second job, Eva Smith started using a new name. Gerald knew her as Daisy ___.", answer: "Renton", options: ["Renton", "Croft", "Birling"], why: "Daisy Renton is the name Eva used from the spring of 1911. It is the Inspector's mention of this name that makes Gerald give himself away at the end of Act 1.",
          feedback: {
            "Croft": "Croft is Gerald's own surname. Eva never married or took his name; she called herself Daisy Renton. Mixing the two up loses the point that Gerald kept the relationship secret.",
            "Birling": "You are a step ahead of the story. Eva did use the name Birling, but later, when she went to Mrs Birling's charity committee in Act 2, and it is one reason Mrs Birling turned her away. The name Gerald knew her by was Daisy Renton."
          } }
      ],
      modules: [
        {
          title: "A character who changes",
          task: {
            kind: "written",
            q: "How does Priestley present Sheila as a character who changes? Write one developed paragraph using PEIRL or What / How / Why.",
            marks: 8,
            criteria: [
              "Point: a clear statement about how the character changes, or does not, across the play",
              "Evidence: at least two precise references to moments from different parts of the play (in the exam you would quote them)",
              "Inference and method: what each moment suggests, and a method Priestley uses (stage direction, contrast, structure)",
              "Reader and Link: how the 1945 audience responds, and what Priestley wanted them to understand about change"
            ],
            model: "Priestley presents Sheila as the character who changes most, and most quickly. At the outset she is naive and sheltered: she admires her engagement ring like a child with a new toy and apologises to her father like a schoolgirl when he scolds her. Yet once the Inspector has told the story of the dress shop, she accepts her part at once, admits she acted out of jealousy and temper, and promises that she will never treat anyone that way again. The contrast between the two moments is Priestley's method: structure does the work, placing the spoilt girl of the opening beside the ashamed young woman of the questioning. The audience of 1945 is invited to see in her the younger generation that might build a fairer Britain, and Priestley's purpose is to show that change is possible, but only for those willing to feel responsible."
          },
          levels: {
            support: {
              steps: [
                "Then: describe one moment from the start of the play that shows what the character was like.",
                "Now: describe one moment from later in the play that shows a change, or shows that nothing has changed.",
                "Method: name what Priestley does to make us notice (contrast, a stage direction, the order of events).",
                "Why: say what Priestley wanted his 1945 audience to understand about people like this character."
              ],
              example: {
                q: "Practice question: how does Priestley present Eric as a character who changes?",
                steps: [
                  "Then: at dinner Eric is uneasy and laughs at the wrong moment, hiding something.",
                  "Now: in Act 3 he admits what he did to Eva and turns on his parents for refusing to learn.",
                  "Method: the contrast between hiding and confessing is structural.",
                  "Why: Priestley shows that even a damaged young man can accept responsibility, unlike his parents."
                ],
                answer: "Priestley presents Eric as a young man who moves from hiding to facing the truth. At the start he is uneasy at the table and laughs at the wrong moment, as if he already has something to conceal. By Act 3 he has confessed his part in Eva's story and attacks his parents for refusing to learn anything. The contrast is structural, and it suggests to a 1945 audience that the young, however damaged, can change where the old cannot."
              }
            },
            core: { hint: "Pick one moment from the opening and one from the questioning. The gap between them is your point; the reason Priestley wanted that gap is your link." },
            stretch: { extend: "Add a sentence comparing your character with one who does not change, then judge: is Priestley saying that the young can change and the old cannot, or that change depends on being willing to feel guilt?" }
          },
          why: "A top answer builds a then-and-now comparison, names the method that makes the change visible, and ends with why Priestley wanted his audience to see it.",
          explain: "Say which moment from the opening of the play you would describe first, and what it tells us about the character before the Inspector arrives.",
          contexts: [
            { label: "Gerald",
              q: "How does Priestley present Gerald as a character who does not change? Write one developed paragraph using PEIRL or What / How / Why.",
              why: "Gerald begins as the polished fiancé and ends offering Sheila the same ring, as if the evening had not happened. In between he tells the truth about Daisy Renton, which earns him some respect, but he is the one who hunts for the loophole that lets the family off. Priestley uses him to show that youth alone does not bring change: attitude does." },
            { label: "Mr Birling",
              q: "How does Priestley present Mr Birling as a character who does not change? Write one developed paragraph using PEIRL or What / How / Why.",
              why: "Birling says at the start that he would sack Eva again, and at the end he is laughing with relief that there may be no scandal. His worries throughout are his knighthood, his reputation and the stolen money, never the girl. Priestley uses his stillness to show the older generation refusing to learn, which is what the final telephone call punishes." }
          ]
        },
        {
          title: "Five moments in a relationship",
          task: {
            kind: "match",
            q: "Match each moment to what it shows about Gerald and Sheila's relationship.",
            pairs: [
              ["Gerald gives Sheila the ring at dinner (Act 1)", "Their happiness rests on a possession and a public show"],
              ["Sheila reminds Gerald that he hardly saw her last summer (Act 1)", "A crack is already there before the Inspector arrives"],
              ["Sheila realises Gerald knew Daisy Renton (end of Act 1)", "She can now see through him, and knows the Inspector can too"],
              ["Gerald wants Sheila out of the room before he is questioned (Act 2)", "He still believes women should be protected from unpleasant truths"],
              ["Sheila hands back the ring but praises his honesty (Act 2)", "She has grown up and will not pretend; the engagement must start again or not at all"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Put the five moments in order: two before the Inspector, one at the end of Act 1, two in Act 2.",
                "For each moment ask: who holds the power, Sheila or Gerald?",
                "Match each moment to the sentence that describes that balance of power."
              ],
              example: {
                q: "Practice: at the very end of the play Gerald offers Sheila the ring again and she says not yet. What does this moment show about the relationship?",
                steps: ["Gerald behaves as though nothing has happened.", "Sheila refuses to go back to how things were.", "So the two of them have learned different lessons."],
                answer: "That Gerald wants to return to the evening's beginning while Sheila refuses to pretend, so they have learned opposite lessons from the Inspector."
              }
            },
            core: { hint: "The power moves from Gerald to Sheila as the evening goes on. Early moments are about show; later moments are about truth." },
            stretch: { extend: "Argue that the engagement was always a business arrangement between two firms, using Mr Birling's speech and Lady Croft's reported view. Then decide whether Priestley wants us to hope Sheila and Gerald marry." }
          },
          why: "Priestley uses the engagement to test whether a relationship built on appearances can survive the truth. Sheila grows; Gerald does not; the ring moves between them as the measure.",
          explain: "Say, in one sentence, why Sheila returning the ring is a sign of strength rather than of heartbreak."
        },
        {
          title: "Key words for Sheila and Gerald",
          task: {
            kind: "match",
            q: "Match each key word to the moment in the play that shows it best.",
            pairs: [
              ["entitlement", "Gerald installs Eva in a friend's rooms and makes her his mistress, as if it were his right"],
              ["impunity", "Until this evening nothing Gerald did to Eva ever cost him anything"],
              ["remorse", "Sheila promises that she will never again do to anyone what she did to Eva"],
              ["naivety", "Sheila's childlike delight in the engagement ring at the start of the evening"],
              ["double standards", "Gerald poses as a respectable fiancé while hiding a summer-long affair"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read the glossary meanings of entitlement, impunity and remorse first.",
                "Two words are about Sheila: one for the beginning, one for after the questioning.",
                "Three words are about Gerald: one about taking, one about escaping, one about hiding."
              ],
              example: {
                q: "Practice: which key word fits Mr Birling saying that he would sack Eva again if he had to: entitlement, impunity or remorse?",
                steps: ["Remorse means regret, and he shows none.", "Impunity is about escaping consequences, which is not quite what he is saying.", "He is claiming the right to do as he likes with his workers."],
                answer: "Entitlement, because he claims the right to treat his workers however he chooses."
              }
            },
            core: { hint: "Entitlement is about taking, impunity is about never paying, remorse is about regretting. Which character takes, which never pays, which regrets?" },
            stretch: { extend: "Write one sentence that uses two of these words to compare Sheila and Gerald, then say which word you think Priestley wanted his 1945 audience to apply to themselves." }
          },
          why: "These words are the vocabulary of an upper-class evaluation of Gerald in the deck: entitlement, impunity and double standards for him, naivety and remorse for Sheila's two halves.",
          explain: "Say, in one sentence, the difference between entitlement and impunity, using Gerald as your example."
        }
      ]
    },

    // ───────────────────────────── CHAPTER 4 ─────────────────────────────
    {
      key: "mrs-birling-and-eric", n: 4,
      title: "Mrs Birling and Eric: prejudice, and a family falls apart (Acts 2 to 3)",
      lead: "This chapter watches Mrs Birling's pride and Eric's confession bring the Birling family down.",
      covers: [11, 12, 13],
      pretext: {
        words: [
          { word: "prejudice", means: "judging people before you know them", sentence: "Mrs Birling's prejudice against working-class girls decides Eva's fate." },
          { word: "hypocrisy", means: "claiming standards you do not keep yourself", sentence: "Running a charity while refusing to help a desperate girl is hypocrisy." },
          { word: "aloof", means: "cold and distant, as if above everyone", sentence: "Mrs Birling is aloof with the Inspector from the moment she enters." },
          { word: "charity", means: "an organisation that gives help to people in need", sentence: "Eva went to the charity because there was nowhere else to go." },
          { word: "confession", means: "admitting what you have done", sentence: "Eric's confession in Act 3 is the last link in the story." }
        ],
        passage: [
          "Mrs Birling walks in full of confidence.",
          "She thinks the Inspector is beneath her.",
          "She runs a charity that is meant to help poor women.",
          "Two weeks ago, a pregnant girl came to the charity for help.",
          "The girl gave her name as Mrs Birling.",
          "This made Mrs Birling angry, and she turned the girl away.",
          "She says the father of the child is the one to blame.",
          "Then the family realise who the father is.",
          "It is Eric, her own son.",
          "Eric met Eva in the same bar as Gerald.",
          "He was drunk, and he forced his way into her room.",
          "Later he stole money from his father's firm to help her.",
          "Eva refused the stolen money.",
          "By the end of Act 3, the family are shouting at one another."
        ]
      },
      sections: [
        {
          heading: "Mrs Birling's entrance",
          paragraphs: [
            "Mrs Birling has been out of the room for the whole of Act 1. When she comes back near the start of Act 2, the stage directions have her walk in briskly, sure of herself, and quite out of step with the tense scene she has interrupted. Sheila feels it at once. Mrs Birling knows the Inspector is there, but she has no idea what he has already uncovered about her husband and her daughter, and she treats him like a tradesman who has called at the wrong door.",
            "Watch how she tries to take control. She introduces herself as though her name should settle matters, speaks for the whole family with ‘we’, and tells the Inspector that she doubts they can help him. When he presses, she accuses him of being rude and of forgetting his place. Your lesson's key words are aloof, snobbery and power struggle. She is from a higher class than her husband, and she behaves as if class were a weapon. The dramatic irony is sharp: Sheila and the audience know that the Inspector cannot be put in his place, because he has already put the others in theirs."
          ],
          tip: "Mrs Birling is the one character who does not change at all. That makes her the easiest to write about and the most useful contrast with Sheila."
        },
        {
          heading: "The charity and the photograph",
          paragraphs: [
            "Mrs Birling is a leading member of the Brumley Women's Charity Organisation, a committee of wealthy women who decide which poor women deserve help. When the Inspector shows her the photograph she claims not to recognise it. He then tells the story: two weeks earlier a young woman, pregnant and penniless, came to the committee. She gave her name as Mrs Birling. The real Mrs Birling took this as a deliberate insult, and she admits that it turned her against the case from the start.",
            "The girl explained that she would not take any more money from the father of the child, because she had discovered it was stolen. To Mrs Birling this sounded like a working-class girl giving herself airs: fine feelings, in her view, were not for people of that class. She used her influence to have the appeal refused and sent the girl away with nothing. Pressed by the Inspector, she insists that she did nothing to be ashamed of and that the blame belongs entirely to the young man responsible, who should be made an example of.",
            "This is prejudice and hypocrisy in one speech. She runs a charity yet refuses charity to the most desperate case she has seen, because of a name and an accent. And as she demands punishment for the father, Sheila tries to stop her, because Sheila has guessed what the audience has guessed. Mrs Birling realises too late. Eric walks in, and the curtain falls on Act 2."
          ],
          tip: "The committee scene is the play's best example of dramatic irony after Birling's speeches. Use it when a question asks about how Priestley builds tension."
        },
        {
          heading: "Eric: a public-school boy in trouble",
          paragraphs: [
            "From the first stage direction Eric is the one who does not fit. He is uneasy at the table, caught between shyness and pushiness, and he laughs loudly at the wrong moment. Sheila and Gerald know that he drinks more than he should; his parents have chosen not to notice. His father mocks the expensive private school and university education that, he says, has taught his son nothing useful. Eric asks the awkward questions nobody else will: he raises the possibility of war during his father's speech, and he defends the workers' right to ask for more pay.",
            "In Act 3 he tells his story. In November 1911 he met Eva at the Palace bar, drunk. He walked her home and, when she did not want him to come in, he insisted and threatened to make a scene. They met again and she became pregnant. She refused to marry him because she could see he did not love her. He stole about fifty pounds from his father's office to support her, and when she realised the money was stolen, she refused to take any more. The Inspector's judgement of him is blunt: he treated her as a thing to be used, not as a person.",
            "Eric's confession is the last link in the story, and it breaks the family open. He learns that his mother turned Eva away, and he rounds on her for killing the girl and his unborn child. He tells his father that he was never a man a son in trouble could turn to. Mr Birling's response is to worry about the stolen money and the scandal. Eric, like Sheila, accepts what he did, but he also sees that his parents made him what he is."
          ],
          tip: "Eric is responsible and a victim at the same time: guilty of what he did to Eva, failed by parents who never looked at him. Hold both ideas in one paragraph."
        },
        {
          heading: "A family falls apart",
          paragraphs: [
            "Put the end of Act 3 beside the opening stage directions. The family that sat in evening dress, celebrating themselves, is now shouting across the same table. Birling threatens his son; Mrs Birling defends herself; Eric accuses them both; Sheila takes his side. The polished surface of the opening has cracked, and Priestley wants the 1945 audience to see what was underneath all along: a class that looked respectable and was not.",
            "Your lesson on Eric asks how and why Priestley presents this breakdown. How: through structure, by bringing each confession out in turn until the parents are caught by their own words; through stage directions that show Eric near breaking point; through the contrast of the two dinner tables. Why: because the Birlings stand for the people who ran Britain in 1912, and Priestley wanted his audience to decide not to hand the country back to them.",
            "Gender runs through all of this. Mrs Birling judges Eva by a rule she never applies to men of her own class. Mr Birling sends Sheila out of the room like a child when the talk turns serious, and he excuses young men's behaviour as the way of the world. Eric and Gerald both used a poor young woman and expected no consequences. Priestley's point is that the patriarchy of 1912 protected the men at the table and punished the woman who was not in the room."
          ],
          tip: "Older and younger generations is the most common theme question. Mrs Birling and Eric are your clearest pair: the parent who learns nothing and the child who learns too late."
        }
      ],
      gate: [
        { kind: "mcq", q: "What position did Mrs Birling hold in Brumley?", options: ["A leading member of a women's charity committee that decided which poor women to help", "The owner of a dress shop", "A magistrate on the Brumley bench", "The secretary to the Chief Constable"], answer: 0, why: "Mrs Birling is a prominent member of the Brumley Women's Charity Organisation. That is where Eva, pregnant and penniless, went for help two weeks before the play, and where she was turned away.",
          feedback: [
            "",
            "The dress shop, Milwards, belongs to Sheila's part of the story, where Sheila had Eva sacked. Mrs Birling's power came from her charity committee, which refused Eva help.",
            "The magistrate is Mr Birling, who sits on the Brumley bench and boasts about it. Mrs Birling's position was on a charity committee for women in need.",
            "She was nobody's secretary; the Birlings would have found the idea insulting. Her position was as a leading member of a women's charity, which is why her refusal to help Eva is such hypocrisy."
          ] },
        { kind: "gap", q: "Mrs Birling turned Eva away partly because the girl had given her name as Mrs ___, which Mrs Birling took as a deliberate insult.", answer: "Birling", options: ["Birling", "Renton", "Croft"], why: "Eva gave the name Birling, perhaps because it was the father's name. Mrs Birling took it as impertinence, and admits that it prejudiced her against the case before she had heard it.",
          feedback: {
            "Renton": "Daisy Renton was the name Eva used earlier, when Gerald knew her in 1911. At the charity committee she used a different name, the one that offended Mrs Birling because it was her own.",
            "Croft": "Croft is Gerald's surname, and Eva never used it. The name she gave the committee was Birling, which is why Mrs Birling was so offended and why the audience senses the truth before she does."
          } },
        { kind: "numeric", q: "Eric stole about £50 from his father's firm. Eva and her workmates had asked Mr Birling for 25 shillings a week, and there were 20 shillings in a pound. How many weeks of that wage was £50?", answer: 40, tolerance: 0, units: "weeks", check: "50 * 20 // 25", why: "£50 is 50 × 20 = 1,000 shillings. At 25 shillings a week, 1,000 ÷ 25 = 40 weeks. The money Eric took casually was most of a year's pay for the woman he took it for.",
          misconceptions: [
            { answer: 2, says: "You divided 50 by 25 and forgot to change the pounds into shillings first. £50 is 1,000 shillings, and 1,000 ÷ 25 is 40 weeks.", check: "50 // 25" },
            { answer: 1000, says: "You have found the right number of shillings, 1,000, but stopped there. The question asks for weeks, so divide by the weekly wage of 25 shillings: 40 weeks.", check: "50 * 20" },
            { answer: 50, says: "You have given the amount in pounds, not the number of weeks. Convert to shillings (1,000) and divide by 25 shillings a week: 40 weeks.", check: "50" }
          ] }
      ],
      modules: [
        {
          title: "The end of Act 2",
          task: {
            kind: "mcq",
            q: "At the end of Act 2, Mrs Birling insists that the young man who got Eva pregnant should be made an example of and dealt with severely. Why is this moment so powerful on stage?",
            options: [
              "Because Sheila and the audience have realised that the father is Eric, so Mrs Birling is condemning her own son without knowing it",
              "Because the Inspector finally agrees with Mrs Birling about something",
              "Because Mr Birling announces that he will call the police himself",
              "Because Gerald returns at that moment with proof that the Inspector is a fraud"
            ],
            answer: 0,
            feedback: [
              "",
              "The Inspector does not agree with her; he lets her go on, which is the point. He knows where her words are heading and allows her to condemn herself. The power comes from what she does not know.",
              "Mr Birling says nothing of the kind here, and the irony has nothing to do with calling the police. It lies in who the father is and who is demanding his punishment.",
              "Gerald's discovery about the Inspector comes later, in Act 3. At the end of Act 2 the power comes from Mrs Birling's words landing on her own son as he walks in."
            ]
          },
          levels: {
            support: {
              steps: [
                "Remember: dramatic irony is when the audience knows something a character does not.",
                "Ask: what has Sheila worked out while her mother was talking?",
                "Ask: who walks in as the curtain falls, and whose words are waiting for him?"
              ],
              example: {
                q: "Practice: in Act 1 Mr Birling boasts that he knows the Chief Constable and that a knighthood is on its way, as long as the family keeps out of trouble. Why does the audience enjoy this later?",
                steps: ["He thinks his family is safe and respectable.", "The audience will learn that every member of it has something to hide.", "So his confidence is the set-up for a fall."],
                answer: "Because his confidence that the family will stay out of trouble is undone within the hour, as each of them is shown to have something shameful to hide."
              }
            },
            core: { hint: "Who knows the father's identity at this point: Mrs Birling, Sheila, the audience, or all three? The gap between them is the power." },
            stretch: { extend: "Priestley ends Act 1 with a one-word question and Act 2 with an entrance. Compare the two act endings as cliffhangers and explain what each one makes the audience wait for." }
          },
          why: "Mrs Birling pronounces sentence on a young man she has never met, and the audience watches her son walk in to receive it. It is the sharpest dramatic irony in the play, and it is aimed at the character who never changes.",
          explain: "Say, in one sentence, what Sheila knows at this moment that her mother does not."
        },
        {
          title: "Eric and his parents",
          task: {
            kind: "written",
            q: "How does Priestley present Eric's relationship with his parents? Write one developed PEIRL paragraph.",
            marks: 8,
            criteria: [
              "Point: a clear statement about the relationship (for example distant, neglectful, broken by the truth)",
              "Evidence: two precise references, one from before the Inspector's questioning and one from Act 3 (in the exam you would quote them)",
              "Inference and method: what the moments suggest, and a method Priestley uses (stage direction, contrast, structure)",
              "Reader and Link: how the 1945 audience would respond, and what Priestley wanted them to understand about the older generation"
            ],
            model: "Priestley presents Eric's relationship with his parents as distant long before the Inspector exposes it. From the first stage direction Eric is the uneasy figure at the celebration, laughing at the wrong moment and drinking too much, while his parents choose not to notice; his father's jibe about an expensive education that taught him nothing shows contempt rather than concern. By Act 3 the distance has become open war. Eric tells his father that he was never a man a son in trouble could turn to, and when he learns that his mother turned Eva away, he accuses her of killing the girl and his own child. Priestley's method is contrast: the son who could not speak at dinner now speaks the truth his parents cannot bear. A 1945 audience would see parents who gave their son everything except attention, and Priestley's purpose is to show that the older generation's failure is not only public, in factories and committees, but private, at their own table."
          },
          levels: {
            support: {
              steps: [
                "Point: decide on two words for the relationship (distant, neglected, angry, broken) and write a sentence with them.",
                "Evidence: describe Eric at the dinner table, then describe one thing he says to his father or mother in Act 3.",
                "Inference: for each, write ‘This suggests that…’ about what the parents have failed to do.",
                "Reader and Link: say how a 1945 audience would judge such parents, then link to Priestley's view of the older generation."
              ],
              example: {
                q: "Practice question: how does Priestley present the relationship between Sheila and her mother?",
                steps: [
                  "Point: Sheila grows beyond her mother during the evening.",
                  "Evidence: early on her mother corrects her for using slang; later Sheila warns her mother not to build a wall of excuses that the Inspector will knock down.",
                  "Inference: the daughter now understands the situation better than the parent.",
                  "Reader and Link: the audience sees the younger generation overtaking the older; Priestley wants them to trust the young."
                ],
                answer: "Priestley presents Sheila as outgrowing her mother in a single evening. Early on Mrs Birling corrects her daughter's language as if she were a child, but once the Inspector is at work it is Sheila who warns her mother not to build a wall of excuses that will only be knocked down. The reversal suggests that the daughter now sees the situation more clearly than the parent, and Priestley uses it to tell his 1945 audience that hope lies with the young."
              }
            },
            core: { hint: "Pair one detail from the dinner table with one line of accusation from Act 3. The distance was always there; the Inspector only makes it speak." },
            stretch: { extend: "Argue whether Eric is more a victim of his parents or more guilty of what he did to Eva. Use the Inspector's judgement of him and his own admission, and decide where Priestley wants the balance to fall." }
          },
          why: "A strong answer shows that the parents' neglect was visible in the stage directions before Eric said anything, and then lets Act 3 confirm it. The link to the older generation's failure gives the paragraph its purpose.",
          explain: "Say which detail from the dinner table you would describe first, and what it suggests about how Eric's parents treat him."
        },
        {
          title: "Eric's part of the story",
          task: {
            kind: "order",
            q: "Put the events of Eric's part in Eva Smith's story in the order they happened.",
            items: [
              "Eric meets Eva at the Palace bar in November 1911, drunk.",
              "He walks her home and forces his way into her lodgings, threatening to make a scene.",
              "They meet again, and Eva becomes pregnant.",
              "Eva refuses to marry Eric because she can see he does not love her.",
              "Eric steals about £50 from his father's office to support her.",
              "Eva refuses to take any more money once she learns it is stolen.",
              "Eva goes to Mrs Birling's charity committee for help and is turned away."
            ]
          },
          levels: {
            support: {
              steps: [
                "Start where Gerald's story started: the Palace bar. Eric's visit is in November, two months after Gerald ended things.",
                "The pregnancy must come before any talk of marriage or money.",
                "The stolen money comes before Eva's refusal of it, and her refusal comes before she turns to the charity.",
                "The charity is the last stop before her death."
              ],
              example: {
                q: "Practice: put Gerald's part of the story in order: he ends the relationship in September; he rescues Daisy from Alderman Meggarty; she becomes his mistress; he gives her money and she goes to the seaside.",
                steps: ["The rescue comes first, in March.", "She then becomes his mistress for the summer.", "He ends it in September and gives her money; she goes away last."],
                answer: "He rescues Daisy from Alderman Meggarty; she becomes his mistress; he ends the relationship in September; he gives her money and she goes to the seaside."
              }
            },
            core: { hint: "Follow the money: it is stolen, then refused, then she has to look for help elsewhere. Everything else falls into place around it." },
            stretch: { extend: "Explain why Priestley has Eva refuse stolen money and refuse a loveless marriage. What does this tell us about her, and about the family who judged her?" }
          },
          why: "Eric's story is the last link, and its order matters: the money is stolen to help her, refused when she learns the truth, and the refusal sends her to the one committee that could have saved her.",
          explain: "Say, in one sentence, why Eva's refusal of the stolen money has to come before her visit to the charity."
        }
      ]
    },

    // ───────────────────────────── CHAPTER 5 ─────────────────────────────
    {
      key: "inspector-and-ending", n: 5,
      title: "Who is the Inspector? The final speech and the twist (Act 3)",
      lead: "This chapter gives you the Inspector's last words, the different readings of who he is, and why Priestley ends with a telephone.",
      covers: [10, 14, 15, 25],
      pretext: {
        words: [
          { word: "mouthpiece", means: "a character who speaks the writer's own views", sentence: "The Inspector is Priestley's mouthpiece for his socialist beliefs." },
          { word: "conscience", means: "the inner voice that knows right from wrong", sentence: "Some readers see the Inspector as the Birlings' conscience made flesh." },
          { word: "hoax", means: "a trick that makes people believe something false", sentence: "Mr Birling decides the whole evening was a hoax." },
          { word: "warning", means: "a message about danger to come", sentence: "The final speech is a warning to the family and to the audience." },
          { word: "pronoun", means: "a word such as we, our or their that stands in for a name", sentence: "The Inspector's pronouns pull the audience into his speech." }
        ],
        passage: [
          "The Inspector asks his questions one person at a time.",
          "He shows the photograph to one person only.",
          "He is calm, and he cannot be bullied or bought.",
          "Before he leaves, he makes a speech.",
          "He says there are countless young women and men like Eva Smith.",
          "He says that nobody lives apart from other people.",
          "He warns that those who will not learn this will be taught by war.",
          "Then he goes.",
          "The family discover that no Inspector Goole works for the police.",
          "They telephone the Infirmary: no girl has died tonight.",
          "Mr and Mrs Birling and Gerald are delighted and relieved.",
          "Sheila and Eric say that nothing has changed, because they still did those things.",
          "Then the telephone rings.",
          "A girl has just died, and an inspector is on his way."
        ]
      },
      sections: [
        {
          heading: "How the Inspector works",
          paragraphs: [
            "The Inspector controls the evening. He deals with one person at a time and refuses to be hurried, saying that he must finish with one person's part of the story before starting on the next. He shows the photograph to one person only, so nobody can compare what they saw. He answers Birling's bluster about the Chief Constable with a flat refusal to be impressed. When Gerald wants Sheila spared the details, the Inspector points out that nobody spared Eva Smith anything. He is in nobody's debt and afraid of nobody.",
            "His sympathies are plain. He asks the Birlings to imagine themselves as a young woman counting every penny in a cheap rented room. He reminds Birling that asking for more is better than taking it. He tells Mrs Birling that the girl needed kindness and advice as much as money. Your lessons call him an authorial surrogate, or mouthpiece: he says what Priestley believes. He is also a dramatic device, the engine that drives the plot from confession to confession."
          ],
          tip: "Three adjectives for the Inspector, each with a moment: calm (the golf remark), relentless (one person's story at a time), compassionate (the penny-counting image)."
        },
        {
          heading: "The final speech",
          paragraphs: [
            "Before he leaves, the Inspector stops being a policeman and becomes a preacher. In your own words, his speech says this. This one girl is dead, but there are countless others like her, and their lives are tangled up with ours in everything we think and say and do. Nobody lives alone. We are all parts of one body, and we are responsible for one another. If people refuse to learn this, the time is coming when they will be taught it through war and suffering. Then he says good night and goes.",
            "Look at the pronouns. He begins with ‘their’, the lives of the poor, and ends with ‘we’ and ‘our’, which includes the Birlings and every person in the theatre. The image of one body comes from the language of sermons, and the warning comes in a group of three, like a prophecy. For an audience in 1945 the prophecy had already come true twice, in 1914 and in 1939, and they had also watched the Russian Revolution of 1917 overturn a society that ignored its poor.",
            "Priestley could have ended the play there. He did not. He keeps the Birlings on stage after the Inspector has gone, so that we watch what they do with the lesson. That choice is the subject of the next two sections."
          ],
          tip: "When you write about the speech, name the methods: the shift of pronouns, the group of three, the sermon image, the prophecy. Then give the 1945 audience's experience as context."
        },
        {
          heading: "What or who is the Inspector?",
          paragraphs: [
            "Your lesson on the ending offers a menu of readings, and the play supports more than one. He may be a ghost: his name sounds like ‘ghoul’, he knows things before he is told them, and no Inspector Goole exists on the Brumley force. He may be a visitor from the future, since his warning describes the wars to come. He may be Priestley's mouthpiece, the vessel for his socialist message. He may be the Birlings' social conscience, forcing each of them to face what they would rather forget. He may be a warning to the comfortable classes, or even an image of the revolution that will come if they do not listen.",
            "Priestley never tells us which, and the exam does not need you to decide. What it needs is for you to argue from evidence. If you call him a ghost, use the name and the telephone call. If you call him a mouthpiece, use the final speech. If you call him a conscience, use the fact that he does nothing but ask questions, and that the guilty answer them anyway. The strongest essays hold two readings together and show how Priestley makes both possible."
          ],
          tip: "The deck's own exam question asks you to explore the Inspector as a vessel for Priestley's socialist message. Keep the word ‘vessel’: it means a container that carries something to the audience."
        },
        {
          heading: "The ending: a telephone and a second chance",
          paragraphs: [
            "After the Inspector leaves, Gerald returns from a walk with news: a police sergeant has told him there is no Inspector Goole. Birling telephones the Chief Constable, who confirms it. Then Gerald suggests that there may have been no single girl at all, since each of them saw the photograph alone, and a call to the Infirmary finds that no one has died there that night. Birling is triumphant and pours himself a drink. He jeers at Sheila and Eric as the clever young generation who cannot take a joke, and Gerald offers Sheila the ring again.",
            "Sheila and Eric will not join in. The Inspector may have been a fraud, they say, but what each of them did was true, and the fact that there may be no body does not make it less so. Sheila says she remembers how the Inspector's words made her feel. The two generations have split: the old and Gerald want to go back to the start of the evening; the young know there is no going back.",
            "Then the telephone rings. Birling answers. A girl has just died on her way to the Infirmary after drinking disinfectant, and a police inspector is on his way to ask some questions. The family stare at one another, and the curtain falls. The ending is a loop: the evening is about to happen again, this time with real consequences. Priestley's audience had lived through exactly that, a second war after a first one taught nothing, and the Birlings are being given the lesson again until they learn it."
          ],
          tip: "Answer the question the ending asks: who learned the lesson? Sheila and Eric did; Mr Birling, Mrs Birling and Gerald did not. That split is your conclusion for almost any essay."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these does NOT happen after the Inspector leaves?", options: ["Gerald reports that there is no Inspector Goole on the Brumley police force", "A telephone call to the Infirmary finds that no girl has died there that evening", "Gerald suggests that they may each have been shown a photograph of a different girl", "Eva Smith walks in alive and explains the whole evening"], answer: 3, why: "Eva never appears on stage; she is dead before the play begins and remains unseen. The other three things all happen, and they build the false relief that the final telephone call destroys.",
          feedback: [
            "This does happen: Gerald comes back from his walk having spoken to a police sergeant, and Birling's call to the Chief Constable confirms it. Look for the event that never takes place.",
            "This does happen: Gerald telephones and is told there has been no suicide for months. It is the moment Birling's relief becomes certainty, just before the final call undoes it.",
            "This does happen: Gerald points out that the Inspector showed the photograph to one person at a time, so there may have been several girls. Sheila had noticed the same trick earlier.",
            ""
          ] },
        { kind: "gap", q: "The Inspector's name, Goole, sounds like the word ___, which means a spirit that feeds on the dead.", answer: "ghoul", options: ["ghoul", "goal", "gaol"], why: "Priestley chose a name that sounds like a creature from the grave. It is one piece of evidence for reading the Inspector as a ghost or a visitor from beyond the natural world.",
          feedback: {
            "goal": "Goal is a target or an aim, and the sound is close but the meaning does not fit a man who seems to come from the dead. The word is ghoul, a spirit that haunts graves.",
            "gaol": "Gaol is the old spelling of jail, and a policeman might make you think of prison. But Priestley's pun is on ghoul, a creature from the grave, which fits the supernatural reading of the Inspector."
          } },
        { kind: "numeric", q: "The play is set in 1912. The Inspector's warning about war came true when the First World War began. How many years after the play's setting was that?", answer: 2, tolerance: 0, units: "years", check: "1914 - 1912", why: "The First World War began in August 1914, two years after the spring of 1912. Birling's promise of peace and the Inspector's warning are both tested within two years.",
          misconceptions: [
            { answer: 27, says: "You have counted to 1939, the start of the Second World War. The first time the warning came true was 1914, two years after the play is set. The second time is the 27 you found.", check: "1939 - 1912" },
            { answer: 33, says: "That is the gap between the setting and the year the play was written, 1945. The question asks about the start of the First World War, 1914, which is two years after 1912.", check: "1945 - 1912" },
            { answer: 1, says: "Off by one: 1913 is one year after 1912, but the war began in 1914. That is two years after the play's spring evening.", check: "1913 - 1912" }
          ] }
      ],
      modules: [
        {
          title: "Delivering the message",
          task: {
            kind: "written",
            q: "How does Priestley use the Inspector's final speech to deliver his message to the audience? Write one developed paragraph.",
            marks: 8,
            criteria: [
              "AO1: a clear statement of what the message is, in your own words",
              "AO2: at least two methods in the speech (the shift of pronouns, the group of three, the image of one body, the prophecy of war) with their effects",
              "AO3: a precise link to what the 1945 audience had lived through",
              "AO1: a closing sentence on why Priestley gives the speech to the Inspector rather than to a Birling"
            ],
            model: "Priestley uses the Inspector's final speech to turn a detective's summing-up into a sermon aimed at the audience. The message is simple: no one lives alone, every life is tied to every other, and a society that forgets this will be forced to remember. The method is in the pronouns. The speech begins with the poor, the lives of countless young women and men like Eva, and ends with ‘we’ and ‘our’, so that by the last sentence the Birlings and the people in the stalls are inside the same body. The warning comes in a group of three, like a prophecy, and in 1945 it was a prophecy the audience had already seen fulfilled twice, in 1914 and 1939. Priestley gives the speech to the Inspector because he is the only character who has nothing to hide, so his words carry an authority that no Birling could."
          },
          levels: {
            support: {
              steps: [
                "Message: write one sentence, in your own words, saying what the Inspector tells the Birlings they must learn.",
                "Method 1: describe how the pronouns move from ‘their’ to ‘we’ and say what that does to the audience.",
                "Method 2: describe the warning as a group of three and say why it sounds like a prophecy.",
                "Context: name the two wars and the Russian Revolution as events the 1945 audience could not forget."
              ],
              example: {
                q: "Practice question: how does Priestley use the final telephone call to deliver his message?",
                steps: [
                  "Message: the lesson will be repeated until it is learned.",
                  "Method: the ending is a loop; the evening is about to happen again.",
                  "Context: the 1945 audience had just lived through a second war that followed a first one."
                ],
                answer: "Priestley uses the final telephone call to show that a lesson refused is a lesson repeated. The ending loops back to the beginning, with a girl dead and an inspector on his way, so that the Birlings, who have just congratulated themselves on escaping, must face the whole evening again. For an audience in 1945, who had watched a second war follow the first, the loop was not a trick but their own history."
              }
            },
            core: { hint: "Pronouns, the group of three, the one-body image, the prophecy: pick two and give each a sentence of effect. Then one sentence of 1945 context." },
            stretch: { extend: "Some critics find the speech too preachy. Argue whether Priestley's message is stronger because it is spoken plainly or weaker because the Inspector stops being a character and becomes a voice." }
          },
          why: "A top answer names the message, shows the methods that carry it, places it in 1945 and explains why the Inspector is the right mouth for it. The model does each in turn.",
          explain: "Say, in one sentence, why the Inspector's pronouns move from ‘their’ to ‘we’ and what that does to the audience."
        },
        {
          title: "Readings of the Inspector",
          task: {
            kind: "match",
            q: "Match each reading of the Inspector to the evidence that supports it best.",
            pairs: [
              ["A ghost or supernatural visitor", "His name sounds like ghoul, he knows things before he is told them, and no such inspector exists"],
              ["Priestley's mouthpiece (authorial surrogate)", "His final speech gives the play's socialist message straight to the audience"],
              ["The Birlings' social conscience", "He does nothing but ask questions, yet each of them ends up confessing"],
              ["A warning from the future", "He speaks of lessons taught through war to an audience who had lived through two"],
              ["Eva Smith's defender", "He is the only character who speaks of her as a person with hopes of her own"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read each reading and ask: what would I need to see in the play for this to be true?",
                "Match the supernatural reading to the clues about his name and his knowledge.",
                "Match the political readings to what he says; match the conscience reading to what he makes others say."
              ],
              example: {
                q: "Practice: which reading does the lighting change support best: a ghost, a conscience, or a defender of Eva?",
                steps: ["Harsher light exposes what was hidden.", "That is what a conscience does.", "A ghost or a defender would not need the lighting to change."],
                answer: "The conscience reading, because the harder light exposes what the family would rather hide, just as a conscience does."
              }
            },
            core: { hint: "Two readings are about what he is, two are about what he says, one is about whom he speaks for." },
            stretch: { extend: "Choose the two readings you find strongest and write a sentence showing how Priestley makes both possible at once. Then say which one the final telephone call supports." }
          },
          why: "The play supports several readings of the Inspector on purpose. An essay earns marks by arguing from evidence for one or two, not by picking the right answer.",
          explain: "Pick one reading and say, in one sentence, which piece of evidence you would use first and why."
        },
        {
          title: "Why end with a telephone?",
          task: {
            kind: "mcq",
            q: "Why does Priestley end the play with the telephone ringing and a second inspector on his way, rather than with the Inspector's final speech?",
            options: [
              "To set up a sequel in which the real inspector investigates",
              "So that the Birlings, and the audience, must face the lesson again, and we see who has learned it and who has not",
              "To prove that Inspector Goole was a real policeman after all",
              "Because audiences in 1945 expected every play to end happily"
            ],
            answer: 1,
            feedback: [
              "Priestley wrote no sequel and the ending is not a hook for one. The second inspector is a repeat of the first evening, not a new story, and the point is what the family does with a second chance.",
              "",
              "The call proves the opposite: there was no Inspector Goole on the force, and a real inspector is only now on his way. Goole's identity stays open; what the ending settles is who learned the lesson.",
              "The ending is anything but happy for the Birlings, and 1945 audiences had just lived through a war; they did not expect comfort. Priestley wanted them unsettled, so they would ask what they themselves had learned."
            ]
          },
          levels: {
            support: {
              steps: [
                "Look at how the older Birlings and Gerald behave once they think the Inspector was a fraud.",
                "Look at how Sheila and Eric behave.",
                "Ask what the telephone call does to each group, and what it asks the audience to think about themselves."
              ],
              example: {
                q: "Practice: why does Priestley have Gerald offer Sheila the ring again just before the telephone rings?",
                steps: ["Gerald wants to return to the start of the evening.", "Sheila refuses, for now.", "So the offer shows who has learned nothing, right before the lesson returns."],
                answer: "To show, seconds before the lesson returns, that Gerald wants to pretend the evening never happened while Sheila will not."
              }
            },
            core: { hint: "Ask who is celebrating when the phone rings and who is not. The ending is a test, and we see the results before the curtain falls." },
            stretch: { extend: "Compare the ending to the play's beginning: a celebration, an interruption, an inspector. Argue that the loop is Priestley's comment on the two world wars." }
          },
          why: "The twist ending turns the play into a loop. The Inspector's speech was the lesson; the telephone call is the test, and the family fails it in two different ways.",
          explain: "Say, in one sentence, what the final telephone call reveals about the difference between the two generations."
        }
      ]
    },

    // ───────────────────────────── CHAPTER 6 ─────────────────────────────
    {
      key: "themes-and-essay", n: 6,
      title: "Themes and the exam essay",
      lead: "This chapter turns everything you know into a 30-mark answer: the question, the plan, the PEIRL paragraph and the themes examiners expect.",
      covers: [8, 16, 18, 19, 21, 22, 23, 24],
      pretext: {
        words: [
          { word: "assessment objective", means: "one of the four things the examiner gives marks for", sentence: "Each assessment objective rewards a different skill, from argument to spelling." },
          { word: "PEIRL", means: "Point, Evidence, Inference, Reader, Link", sentence: "A PEIRL paragraph always ends by linking to Priestley's purpose." },
          { word: "topic sentence", means: "the first sentence of a paragraph, which states its point", sentence: "A good topic sentence names the character and the stage of the play." },
          { word: "theme", means: "a big idea that runs through the whole play", sentence: "Responsibility is the theme that holds every other theme together." },
          { word: "generation", means: "people born at about the same time", sentence: "The older generation refuses to change and the younger generation begins to." }
        ],
        passage: [
          "The exam question on An Inspector Calls is in Paper 2.",
          "You will not have the play with you.",
          "There is no extract to read.",
          "You choose one question from two.",
          "The answer is worth 30 marks, with 4 more for spelling and grammar.",
          "You should spend about 45 minutes on it.",
          "Plan first: an introduction, three key moments and a conclusion.",
          "Each paragraph follows PEIRL: Point, Evidence, Inference, Reader, Link.",
          "The big themes are responsibility, class, gender and the generations.",
          "The older Birlings do not change; the younger ones do.",
          "Learn short quotations for each character and each theme.",
          "Finish every paragraph by linking to Priestley's purpose."
        ]
      },
      sections: [
        {
          heading: "What the question is asking for",
          paragraphs: [
            "An Inspector Calls is examined in Paper 2 Section A, Modern texts. You answer one question from a choice of two. The question is worth 30 marks, with 4 more for spelling, punctuation and grammar, so 34 marks in all, and you should give it about 45 minutes. Unlike the Shakespeare question in Paper 1, there is no extract: you do not have the play in front of you, so everything you quote must come from memory. That is why your lessons build flashcards, six quotations per character, two from each act.",
            "Four assessment objectives are marked. AO1: you answer the question with a clear argument and support it with precise references and quotations. AO2: you analyse Priestley's methods, such as stage directions, dramatic irony, structure and the contrast between characters, using the right terms. AO3: you show how the play connects to 1912 and to 1945. AO4: your writing is accurate and your vocabulary is wide. Questions usually take one of two shapes: how Priestley presents a character, or how he explores a theme.",
            "A reminder from chapter 1. This book cannot print Priestley's words because the play is still in copyright, so its model answers describe moments rather than quote them. In the exam, quote. The examiner wants Priestley's exact words, kept short and worked into your own sentences, and then analysed."
          ],
          tip: "Twenty-two words a minute is plenty. In 45 minutes, a plan plus an introduction, three paragraphs and a conclusion will fill about two sides."
        },
        {
          heading: "Planning: five parts",
          paragraphs: [
            "Your lessons give you a five-part plan. The introduction states your argument, gives a sentence of context, and says what the character or theme symbolises. Paragraph one takes a key moment from the beginning of the play. Paragraph two takes a moment from the middle, as the plot develops. Paragraph three takes a moment from the resolution. The conclusion summarises the argument and answers the question directly. The topic sentences almost write themselves: at the outset of the play, as the play progresses, towards the play's resolution.",
            "The Mr Birling essay in your lessons shows how the plan fills up. Section one: Birling represents the selfish capitalism of the business class, and his insecurity about his social standing shows in his hunger for a knighthood; he is the Inspector's opposite. Section two: he shows the gap between the generations, and his hypocrisy appears when he excuses young men's behaviour while condemning Eva; his refusal to accept any responsibility is total. Section three: his relief when he decides the evening was a hoax, and his complete lack of change, tell us what Priestley thought of the men who ran Britain in 1912."
          ],
          tip: "Plan in the margin with five lines: argument, beginning, middle, end, conclusion. Write one quotation beside each of the three middle lines before you start."
        },
        {
          heading: "The PEIRL paragraph",
          paragraphs: [
            "Point: make a claim that answers the question, using the stage of the play in your topic sentence. Evidence: give a short quotation, embedded in your own sentence, and say briefly where it comes from. Inference: explain what the words imply, suggest, convey or represent, zooming in on one word or method. Reader or audience: say what Priestley makes the 1945 audience think or feel. Link: explain Priestley's purpose, using the deck's frame, that his purpose in doing this was to make the post-war audience think or feel something because of a precise piece of context.",
            "The What / How / Why version is the same shape in three moves: what Priestley suggests, how he does it, and why he chose that method for that audience. Whichever you use, the mark is earned in the second half of the paragraph. Many pupils stop after Inference. The Reader and Link steps are where AO3 lives, and they are what moves an answer from describing the play to arguing about it."
          ],
          tip: "Test your Link sentence: if you could paste it into any essay on the play, it is not doing its job. Tie it to the word you have just analysed."
        },
        {
          heading: "The themes",
          paragraphs: [
            "Responsibility is the theme that contains the others: who is responsible for Eva, and who accepts it? Class runs through every confession: the Birlings and Gerald have power over Eva because of where they stand on the ladder, and Mrs Birling judges her by her class alone. Gender shapes how she is treated: Birling sends his daughter out of the room like a child, Mrs Birling applies to a working-class girl a rule she never applies to men, and Gerald and Eric both use a poor young woman and expect to walk away. The generations split at the end: the older Birlings and Gerald learn nothing; Sheila and Eric learn too late to save Eva but in time to change.",
            "Relationships give you a second way in: the engagement built on show, the parents who do not look at their children, the marriage in which the wife outranks the husband. Wealth and entitlement sit underneath them all. Your sympathy-and-dislike lesson asks you to track how your feelings about each character move across the three acts: the graph you drew is a plan for an essay on any character. And Eva, who never appears, is the test every theme is measured by."
          ],
          tip: "For any theme, use the same three-moment plan: how it looks at the dinner table, how the Inspector exposes it, and where it stands when the telephone rings."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which assessment objective rewards analysis of Priestley's methods, such as dramatic irony, stage directions and structure?", options: ["AO1", "AO2", "AO3", "AO4"], answer: 1, why: "AO2 is analysis of language, form and structure, using subject terminology. Methods are AO2; context is AO3; argument and evidence are AO1; accuracy is AO4.",
          feedback: [
            "AO1 is your argument and your use of references and quotations as evidence. Analysing how Priestley's methods work, such as dramatic irony or a lighting change, is AO2.",
            "",
            "AO3 is context: the links between the play and 1912 or 1945. Analysing a method like dramatic irony is AO2, although you will often link the two in one paragraph.",
            "AO4 is spelling, punctuation and grammar, worth 4 marks. Analysis of methods is AO2."
          ] },
        { kind: "numeric", q: "How many marks is the An Inspector Calls question worth, not counting the 4 marks for spelling, punctuation and grammar?", answer: 30, tolerance: 0, units: "marks", check: "34 - 4", why: "30 marks for your response, plus 4 for AO4, makes 34 marks for Section A of Paper 2.",
          misconceptions: [
            { answer: 34, says: "34 is the whole of Section A: 30 for your response plus 4 for spelling, punctuation and grammar. The question asked for the marks without those 4.", check: "30 + 4" },
            { answer: 26, says: "You took the 4 AO4 marks away from 30. They are added on top of the 30, not taken out of it, so the response alone is worth 30.", check: "30 - 4" },
            { answer: 4, says: "4 is the number of marks for AO4 alone. The question asked about the rest, which is 30.", check: "4" }
          ] },
        { kind: "gap", q: "Unlike the Shakespeare question in Paper 1, the Paper 2 question on An Inspector Calls gives you no ___ from the play to read in the exam.", answer: "extract", options: ["extract", "question", "mark scheme"], why: "Paper 2 Section A is closed book with no printed extract. You must know your quotations by heart, which is why your lessons build flashcards for every character.",
          feedback: {
            "question": "There is certainly a question; you choose one of two. What you do not get is a printed passage from the play, which the Shakespeare paper does give you. The missing thing is the extract.",
            "mark scheme": "No exam gives you the mark scheme in the room. The difference between the two papers is that Paper 1 prints an extract from Shakespeare and Paper 2 prints nothing from the modern text. The missing thing is the extract."
          } }
      ],
      modules: [
        {
          title: "Plan in the right order",
          task: {
            kind: "order",
            q: "Put the five parts of an essay on the significance of Mr Birling in the order you would write them.",
            items: [
              "Introduction: your argument, a sentence of context, and what the character or theme symbolises",
              "Paragraph 1: a key moment from the outset of the play",
              "Paragraph 2: a key moment from the middle, as the play progresses",
              "Paragraph 3: a key moment from towards the play's resolution",
              "Conclusion: summarise your argument and answer the question directly"
            ]
          },
          levels: {
            support: {
              steps: [
                "Every essay opens with your argument and closes with your conclusion.",
                "The three middle paragraphs follow the play's own order: beginning, middle, end.",
                "Check your topic sentences: at the outset, as the play progresses, towards the resolution."
              ],
              example: {
                q: "Practice: order the parts of a single PEIRL paragraph: link to Priestley's purpose; make your point; describe the audience's response; give your evidence; explain what it suggests.",
                steps: ["P: the point comes first.", "E: then the evidence.", "I: then what it suggests.", "R and L: then the audience, then the link."],
                answer: "Make your point; give your evidence; explain what it suggests; describe the audience's response; link to Priestley's purpose."
              }
            },
            core: { hint: "The plan follows the play. Think of the three acts as your three middle paragraphs." },
            stretch: { extend: "If the question were about Eva Smith, who never appears, how would you choose your three key moments? Rewrite the three middle lines for that case." }
          },
          why: "The plan moves through the play in order and ends with Priestley's purpose, so that every paragraph serves one argument.",
          explain: "Say, in one sentence, why the three middle paragraphs follow the order of the play rather than the order of your ideas.",
          contexts: [
            { label: "Sheila",
              q: "Put the five parts of an essay on how Priestley presents Sheila as a character who changes in the order you would write them.",
              why: "Sheila's essay follows her journey: the ring at the outset, the dress shop and the returned ring as the play progresses, and her refusal to pretend at the resolution. The plan's shape is the same as for Birling; only the moments change." },
            { label: "Gender",
              q: "Put the five parts of an essay on how Priestley explores the theme of gender in the order you would write them.",
              why: "A theme essay still moves through the play: how women are treated at the dinner table, how the Inspector exposes the men's treatment of Eva, and where Sheila stands when the telephone rings. The five-part plan does not change because the question is about a theme." },
            { label: "Relationships",
              q: "Put the five parts of an essay on how Priestley presents relationships in the Birling household in the order you would write them.",
              why: "Relationships change across the evening, so the three key moments are the engagement celebration, the confessions that strain each bond, and the family split at the end. The plan carries the argument through the play in order." }
          ]
        },
        {
          title: "The generations essay",
          task: {
            kind: "written",
            q: "How does Priestley present the differences between the older and younger generations in An Inspector Calls? Write your introduction and your first paragraph.",
            marks: 30,
            criteria: [
              "AO1: an introduction with a clear argument about the two generations and what each represents",
              "AO1: precise references to moments from the play (in the exam, short embedded quotations from memory)",
              "AO2: analysis of methods such as contrast, structure, stage directions or dramatic irony, using the right terms",
              "AO3: context woven in, for example the 1945 audience's choice about the future, or the class system of 1912",
              "AO4: accurate spelling, punctuation and grammar"
            ],
            model: "Priestley presents the older and younger generations as two possible futures for Britain. Mr and Mrs Birling, with Gerald alongside them in spirit, stand for a class that will not learn; Sheila and Eric stand for a generation that can. Writing in 1945 for an audience about to rebuild the country, Priestley uses the split to ask which future they will choose. At the outset of the play the gap is already visible at the dinner table. Mr Birling lectures the young men that a man's only duty is to himself and his own family, while Eric, uneasy and already drinking too much, asks the questions his father will not hear, such as why the workers should not ask for more. The stage directions mark Eric out from the first moment as the one person not at ease, and Priestley's method is contrast: a father certain of everything beside a son sure of nothing. For a 1945 audience, Birling's certainty would recall the leaders whose confidence had led to two wars, and Priestley's purpose is to make them distrust the older voice before the Inspector has even arrived."
          },
          levels: {
            support: {
              steps: [
                "Introduction: write two sentences, one saying what the older generation represents and one saying what the younger generation represents.",
                "Paragraph 1: choose a moment from the dinner table that shows the gap, such as Birling's lecture beside Eric's questions.",
                "Method: name the contrast and one stage direction, and say what each suggests.",
                "Link: say what a 1945 audience, deciding the country's future, would make of it."
              ],
              example: {
                q: "Practice question (a different theme): how does Priestley present the theme of responsibility? Write your introduction and first paragraph.",
                steps: [
                  "Argument: responsibility is the play's test; the Inspector asks who accepts it, and the answer divides the family.",
                  "Moment: Birling's refusal to accept any blame for sacking Eva.",
                  "Method: his argument that responsibility for everyone would be impossibly awkward is a capitalist's logic, undercut by the dramatic irony of his earlier predictions.",
                  "Context: 1945 audiences building a welfare state were choosing shared responsibility."
                ],
                answer: "Priestley presents responsibility as the test every character must face and most fail. The Inspector asks who is responsible for Eva Smith, and the answers divide the family into those who accept blame and those who refuse it. At the outset Mr Birling refuses completely: he insists that sacking Eva was his duty as an employer, and argues that if everyone were responsible for everyone else life would be impossible. Because the audience has just heard him be wrong about the Titanic and the war, dramatic irony makes his logic sound hollow. In 1945, with a Labour government about to build a welfare state on exactly the idea Birling mocks, Priestley's audience would hear in him the voice of the past."
              }
            },
            core: { hint: "Your argument is the split at the end of the play; your first paragraph shows the split already present at the start. Gerald is your complication: young in years, old in attitude." },
            stretch: { extend: "Write a conclusion that judges: does Priestley believe the young will build a better Britain, or does the final telephone call warn that they too may fail? Use Gerald's offer of the ring and Sheila's answer." }
          },
          why: "Top answers make one argument in the introduction and prove it from the opening of the play before moving on. Context should explain why a method matters, as the 1945 audience's choice does in the model.",
          explain: "Say which moment from the dinner table you would describe first, and what it shows about the two generations."
        },
        {
          title: "Weaving context in",
          task: {
            kind: "mcq",
            q: "Which of these sentences weaves context into analysis best?",
            options: [
              "Mr Birling says there will be no war. In 1914 the First World War began.",
              "When Birling promises the young men a future without war, Priestley's 1945 audience, who had buried the dead of two wars, would hear not confidence but blindness, and would distrust everything else he says.",
              "In 1912 Britain had a strict class system and there was no welfare state, which is important context for the play.",
              "Priestley lived through two world wars and had many political beliefs that he put into his plays."
            ],
            answer: 1,
            feedback: [
              "Two separate sentences: a plot point, then a date. Nothing joins them, so the context is bolted on rather than woven in. Context earns marks only when it explains the effect of a moment.",
              "",
              "This is a paragraph of history with no moment from the play in it. It could be pasted into any essay on the text, which is the sign that it is not yet doing its job.",
              "A general statement about the writer, with no moment, no method and no effect. It lists context rather than using it."
            ]
          },
          levels: {
            support: {
              steps: [
                "Look for the sentence that describes a moment from the play.",
                "Check whether the context in that sentence explains how the audience responds to the moment, or just sits beside it.",
                "Choose the one where you could not remove the context without losing the point."
              ],
              example: {
                q: "Practice: which is better? (a) ‘Mrs Birling is snobbish. Class mattered in 1912.’ (b) ‘Mrs Birling's dismissal of the girl's feelings as above her class shows how the 1912 hierarchy let the rich decide who deserved sympathy.’",
                steps: ["(a) puts two facts side by side.", "(b) uses the context to explain the moment.", "So (b) weaves the context in."],
                answer: "(b), because the context explains the moment rather than sitting next to it."
              }
            },
            core: { hint: "Context is woven in when the sentence would fall apart without it." },
            stretch: { extend: "Rewrite option A so that it weaves the context in properly, using a short quotation of your own from Birling's speech." }
          },
          why: "Only option B joins a moment, its effect on the audience and the context in one sentence. The others state context without linking it to the play.",
          explain: "Say, in one sentence, what the context in the best sentence explains that the other three do not."
        }
      ]
    }
  ],

  sources: {
    deckDump: "y10_u5_inspector_calls.txt",
    decksUsed: ["Year 10 Unit 5 An Inspector Calls, Summer 1 (L01, L02, L04–L08, L18–L20) and Summer 2 (L01–L16), 27 deck files, 26 taught lessons, extracted text"],
    notes: "Lesson titles, sequence, objectives, key words, the PEIRL and What / How / Why paragraph structures, the five-part essay plan, the topic-sentence frames, the readings of the Inspector, the character key words (naive, remorseful, entitlement, impunity, aloof, snobbery, hypocrisy) and the themes list are taken from the department's decks. No text from the play is reproduced anywhere in this unit: J. B. Priestley died in 1984 and An Inspector Calls is in copyright, so every moment is described in the author's own words and every model answer is original and does not quote (see NOTES.md and verify.py, which fails on any of a stored list of distinctive phrases from the play). None of the deck's model paragraphs or WAGOLLs is reproduced. The exam-structure facts (Paper 2 Section A, one question from two, 30 + 4 marks, no extract, about 45 minutes) are AQA 8702 facts supplied by the author, since the deck's assessment-criteria slides are images with no text. Context facts: Priestley born Bradford 1894; served and was wounded in the First World War; BBC Postscripts 1940; play written 1944–45, first staged Moscow 1945, London 1946; set spring 1912; Titanic sank 15 April 1912; First World War August 1914; Russian Revolution 1917; General Strike 1926; Labour government July 1945; NHS 1948. astra/2: feedback on every mcq and gap item, misconceptions with check on every numeric item, explain on every module, contexts on two modules (ch3 character choice, ch6 essay-subject choice), glossary chapters, connections, spacing; no constellation, no widgets, no pretext.l1."
  }
};
