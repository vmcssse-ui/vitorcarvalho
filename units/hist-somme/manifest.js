// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 History · Year 8 Topic 5: The Battle of the Somme · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   every date, name and sequence is held in an independent CHRONOLOGY table in verify.py with its deck slide reference;
//   every four-digit year in pupil text must be a CHRONOLOGY year and every named event must carry that year; every number
//   >= 100 must be in the FACTS set taken from the deck; every "order" task is compared with a canonical sequence held
//   there; every mcq / gap / match answer is compared with an independent answer key; numeric items carry `check` and
//   `misconceptions` (each with its own `check`); contexts share the task's answer by construction.
//   Quotation guard: this unit quotes NOTHING. The department's deck prints one historian's interpretation (1991) and its
//   own model answer, all in copyright, so they are paraphrased and their phrases are fingerprinted and banned. The deck
//   quotes no war poetry, so none is quoted here either; Owen and Sassoon fingerprints are banned. `verify.py` fails on any
//   quotation mark in pupil text and on any `quote` field.
//   Care guard: casualty figures appear only as stated facts in prose, never as the answer to a gate item, a gap, a numeric
//   drill or an order/match card; no "imagine you are a soldier" role-play; no graphic injury detail beyond the deck.
//   astra/2: per-wrong-option `feedback` on every mcq/gap; `misconceptions` on every numeric; `explain` on every module;
//   `glossary[].chapter`; `connections` 4 x 4 subset of glossary; `meta.spacing [2,7,30]`; no constellation; no pretext.l1.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["hist-somme"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "hist-somme",
    subjectKey: "history",
    subject: "History",
    board: "AQA",
    spec: "KS3 → 8145",
    specRef: "KS3 Year 8 Topic 5: The Battle of the Somme — foundations for GCSE History 8145 (causation, interpretations and the judgement of individuals)",
    year: 8,
    tier: "KS3",
    title: "The Battle of the Somme",
    sub: "How a murder in Sarajevo pulled Europe into war, what the trenches of the Western Front were like, what happened at the Somme in 1916, and why historians still argue about the general who ordered the attack.",
    bigQuestion: "Was the Battle of the Somme a victory or a defeat, and why have historians changed their minds about General Haig?",
    lessonCount: 5,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "The Causes of WW1", question: "Why was the world at war in 1914?", keywords: ["militarism", "alliances", "imperialism", "nationalism", "assassination", "the July Crisis"] },
    { n: 2, title: "Trench Warfare", question: "Why were trenches used, and what challenges did soldiers face in them?", keywords: ["Western Front", "trench", "no-man's-land", "parapet", "trench foot", "shell shock"] },
    { n: 3, title: "The Battle of the Somme: victory or defeat?", question: "Was the Battle of the Somme a success or a failure for the British Army?", keywords: ["war of attrition", "conscription", "Verdun", "bombardment", "four-step plan", "offensive"] },
    { n: 4, title: "General Haig: butcher or hero?", question: "Was General Haig the butcher of the Somme?", keywords: ["interpretation", "butcher", "casualties", "tactics", "evidence", "judgement"] },
    { n: 5, title: "Review: historical interpretations", question: "Which interpretation of General Haig do you find more convincing, and why?", keywords: ["lions led by donkeys", "interpretation", "evidence", "own knowledge", "success criteria", "judgement"] }
  ],

  glossary: [
    { term: "militarism", means: "The belief that a country is safer if it has the biggest and best armed forces. It pushed country after country to build more weapons.", chapter: "causes" },
    { term: "alliances", means: "Agreements between countries to defend each other if one of them is attacked.", chapter: "causes" },
    { term: "imperialism", means: "Building an empire by taking control of other countries and their resources.", chapter: "causes" },
    { term: "nationalism", means: "Great pride in your own country, and the wish for it to be strong and independent.", chapter: "causes" },
    { term: "assassination", means: "The killing of a person for political reasons.", chapter: "july-crisis" },
    { term: "the July Crisis", means: "The five weeks in the summer of 1914 between the assassination in Sarajevo and the outbreak of war across Europe.", chapter: "july-crisis" },
    { term: "the Blank Cheque", means: "Germany's promise to support Austria-Hungary whatever it decided to do about Serbia.", chapter: "july-crisis" },
    { term: "neutral", means: "Taking no side in a war. Belgium was neutral and wanted to be left out of the fighting.", chapter: "july-crisis" },
    { term: "parapet", means: "The inner wall of a trench, made of earth and wood and topped with sandbags, to protect the soldiers behind it.", chapter: "trenches" },
    { term: "no-man's-land", means: "The disputed ground between the front line trenches of two opposing armies.", chapter: "trenches" },
    { term: "trench foot", means: "A painful condition caused by standing in cold water for too long. The army found an effective answer to it by 1915.", chapter: "trench-life" },
    { term: "shell shock", means: "The lasting effect on a soldier's mind of long exposure to shelling, fear and noise. It is now recognised as a serious injury.", chapter: "trench-life" },
    { term: "war of attrition", means: "Wearing an enemy down little by little, in men and supplies, until they surrender or their army collapses.", chapter: "somme" },
    { term: "conscription", means: "Forcing men to join the armed forces by law. Britain's Conscription Act of January 1916 applied to men aged 18 to 41.", chapter: "somme" },
    { term: "interpretation", means: "A judgement a historian forms about the past, using evidence. Two historians can study the same battle and disagree.", chapter: "interpretations" },
    { term: "lions led by donkeys", means: "The idea that brave British soldiers (lions) were led and let down by poor commanders (donkeys).", chapter: "interpretations" }
  ],

  // Connections game: 4 groups x 4 terms, all 16 glossary terms used exactly once.
  connections: [
    { group: "The four long-term causes", terms: ["militarism", "alliances", "imperialism", "nationalism"] },
    { group: "Summer 1914", terms: ["assassination", "the July Crisis", "the Blank Cheque", "neutral"] },
    { group: "In the trenches", terms: ["parapet", "no-man's-land", "trench foot", "shell shock"] },
    { group: "The Somme and how historians judge it", terms: ["war of attrition", "conscription", "interpretation", "lions led by donkeys"] }
  ],

  chapters: [
    /* ───────────── 1 · why Europe was ready for war ───────────── */
    {
      key: "causes", n: 1, title: "Why Europe was ready for war in 1914",
      lead: "Who fought whom, the difference between a long-term and a short-term cause, and the four long-term causes your lesson studies: militarism, alliances, imperialism and nationalism.",
      covers: [1],
      pretext: {
        words: [
          { word: "militarism", means: "the belief that a country is safer if it has the biggest and best armed forces", sentence: "Militarism pushed one country after another to build more guns and more ships." },
          { word: "alliances", means: "agreements between countries to defend each other if one is attacked", sentence: "Alliances meant that a small war could pull in many countries at once." },
          { word: "imperialism", means: "building an empire by taking control of other countries", sentence: "Imperialism set Britain and Germany against each other in Africa." },
          { word: "nationalism", means: "great pride in your own country, and the wish for it to be strong and independent", sentence: "Nationalism made people want their country to be stronger than its neighbours." },
          { word: "long-term cause", means: "a cause that has been building up for years, or even for decades", sentence: "Imperialism was a long-term cause of the First World War." }
        ],
        passage: [
          "The First World War began in the summer of 1914.",
          "Two groups of countries faced each other.",
          "Britain, France and Russia had an agreement called the Triple Entente.",
          "Germany, Austria-Hungary and Italy had an agreement called the Triple Alliance.",
          "Most people believed that any war would be short.",
          "They were wrong.",
          "Historians look for two kinds of cause.",
          "A long-term cause had been building for years or decades.",
          "A short-term cause happened only days or weeks before.",
          "Your lesson studies four long-term causes.",
          "They are militarism, alliances, imperialism and nationalism.",
          "Each one made Europe more dangerous long before 1914."
        ]
      },
      sections: [
        {
          heading: "Who fought whom?",
          paragraphs: [
            "The First World War was fought between two groups of powers. On one side stood the Triple Entente: Britain, France and Russia. On the other stood the Triple Alliance: Germany, Austria-Hungary and Italy. Britain declared war on Germany on 4 August 1914, after German soldiers invaded Belgium, a neutral country that had asked to be left out of any war.",
            "Your lesson also uses the name Central Powers for Germany's side, and it is worth being careful with it. The Triple Alliance was an agreement signed before the war, and Italy was part of it. When war came, though, Italy did not fight alongside Germany. The countries that did fight on Germany's side became known as the Central Powers. If you use both names, make clear which one you mean.",
            "Almost everyone expected the war to be over quickly. Generals believed that modern weapons and railways had made warfare fast and decisive. Instead the fighting lasted more than four years."
          ],
          tip: "If a question asks who fought whom, name both alliances and the countries in each. Then add that Italy did not fight on Germany's side."
        },
        {
          heading: "Long-term and short-term causes",
          paragraphs: [
            "Historians blame both short-term and long-term causes for the outbreak of war. A long-term cause is one that existed for years, decades or even centuries before the event. A short-term cause happened only hours, days or weeks before.",
            "This is a useful pair of ideas because it stops you blaming everything on one moment. The assassination in Sarajevo, which you meet in the next chapter, is the short-term cause. Militarism, alliances, imperialism and nationalism are the long-term causes. Both sorts matter: the long-term causes made Europe ready to explode, and the short-term cause lit it.",
            "When you write about causes, say which kind you mean and why. That one sentence lifts an answer from description into explanation."
          ],
          worked: {
            q: "Explain how one long-term cause made war in Europe more likely. Use a point, evidence and an explanation.",
            steps: [
              "Point: say which cause you have chosen in one sentence. One long-term cause that made war more likely was the system of alliances.",
              "Evidence: give the detail from your lesson. France and Russia promised to defend each other, Britain joined them in 1907, and Germany, Austria-Hungary and Italy had their own agreement.",
              "Explain: link the evidence to war. This made war more likely because an attack on one country now pulled in all of its partners.",
              "Finish with the judgement: so a quarrel between two countries could no longer stay small."
            ],
            answer: "Point, evidence, explain: alliances; the two groups promised to defend each other; so an attack on one country dragged in the rest, and a local quarrel became a European war."
          },
          tip: "Long-term means years or decades. Short-term means hours, days or weeks. Use the words in your answer, not just in your head."
        },
        {
          heading: "Militarism and alliances",
          paragraphs: [
            "Militarism is the simple idea that a country with the most and the best weapons will not be attacked. The trouble is that every country thought the same, so each new warship or new gun pushed a neighbour to build more. Britain and Germany raced each other at sea. Germany wanted a navy to match its ambitions, and it began to build one. Britain, an island that depended on its ships, answered by building more and bigger battleships of its own. Britain stayed ahead, because it had more money, more shipyards and longer experience of building warships.",
            "Alliances are promises. Countries in an alliance agreed to defend each other if one of them was attacked. France and Russia signed an alliance in 1894, and Britain joined them in 1907, which made the group the Triple Entente. Germany, Austria-Hungary and Italy had the Triple Alliance. Other countries feared Germany, which had grown quickly into the strongest industrial and military power on the continent.",
            "Put the two causes together and you can see the danger. Militarism filled Europe with weapons. Alliances made sure that if those weapons were ever used, almost everyone would be dragged in."
          ],
          tip: "Militarism is about weapons. Alliances are about promises. Keep the two apart, then show how they worked together."
        },
        {
          heading: "Imperialism and nationalism",
          paragraphs: [
            "Imperialism is the drive to build a strong empire by taking control of other countries. You have studied this already in the Year 8 unit on India and Empire. European countries competed all over the world, and Germany believed it was unfair that it held only a small empire while Britain and France held huge ones. Britain and Germany competed for control in Africa, and in the Morocco Crisis of 1911 Germany challenged French control of Morocco. The crisis passed, but it left Britain and France closer together and Germany feeling hemmed in.",
            "Nationalism is the wish to make your own country strong and independent. In the Balkans, many Slavic people wanted their own lands and their own state. When Austria-Hungary annexed Bosnia in 1908, Serbia was furious, because many Slavs in Bosnia looked to Serbia rather than to Vienna. In 1912, war broke out in the Balkans between Serbia and its neighbours and the Ottoman Empire, and Serbia came out of it larger and more confident.",
            "Nationalism also fed the other two causes. A country that wants to be the proudest and strongest wants the biggest army, which is militarism, and the biggest empire, which is imperialism. That is why historians treat the four long-term causes as a knot rather than a list."
          ],
          tip: "Imperialism is about land and resources abroad. Nationalism is about pride at home. The Balkans is where nationalism mattered most."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which three countries made up the Triple Entente?", options: ["Britain, France and Russia", "Germany, Austria-Hungary and Italy", "Britain, Germany and Russia", "France, Italy and Serbia"], answer: 0, why: "The Triple Entente was Britain, France and Russia: France and Russia signed an alliance in 1894 and Britain joined them in 1907.",
          feedback: [
            "",
            "Those three signed the Triple Alliance, not the Entente. Remember that Germany and Austria-Hungary were on the other side from Britain, France and Russia.",
            "Britain and Russia were both in the Entente, but Germany never was. Germany belonged to the Triple Alliance with Austria-Hungary and Italy; the third Entente country was France.",
            "Serbia was at the centre of the crisis of 1914, but it was not part of the Triple Entente, and nor was Italy. The three Entente countries were Britain, France and Russia."
          ] },
        { kind: "gap", q: "A cause that had been building up for years or decades is called a ___ cause.", answer: "long-term", options: ["long-term", "short-term", "military"], why: "Long-term causes existed for years, decades or even centuries before the event. Short-term causes happened only hours, days or weeks before.",
          feedback: {
            "short-term": "A short-term cause happens only hours, days or weeks before an event, like the assassination in Sarajevo. A cause that built up over years or decades is long-term.",
            "military": "Militarism is one of the long-term causes, but military is not the name for a type of cause. The word you need describes how long the cause had been building: long-term."
          } },
        { kind: "mcq", q: "What does militarism mean?", options: ["The belief that a country is safer if it has the biggest and best armed forces", "An agreement between countries to defend each other if one is attacked", "Taking control of other countries in order to build an empire", "Pride in your own country and the wish for it to be independent"], answer: 0, why: "Militarism is the belief that weapons bring safety, which pushed every country to build more of them.",
          feedback: [
            "",
            "You have described alliances, which are promises between countries. Militarism is about armed forces: the belief that the country with the most and best weapons will not be attacked.",
            "That is imperialism, the drive to build an empire. Militarism stays at home: it is about building up your own army and navy so that nobody dares attack you.",
            "That is nationalism, which is about pride in your country. Militarism is what nationalism often led to: spending more and more on the armed forces."
          ] }
      ],
      modules: [
        {
          title: "Four causes, four examples",
          task: {
            kind: "match",
            q: "Match each long-term cause to the example from your lesson.",
            pairs: [
              ["Militarism", "Britain and Germany race each other to build the most powerful navy"],
              ["Alliances", "France and Russia promise to defend each other, and Britain joins them in 1907"],
              ["Imperialism", "Germany challenges French control of Morocco in 1911"],
              ["Nationalism", "Serbia is furious when Austria-Hungary annexes Bosnia in 1908"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the one you are surest of: which example is about warships and weapons?",
                "Find the example that is about a promise between countries.",
                "Find the example that is about control of land outside Europe.",
                "The example left over is about pride and anger inside Europe, which is nationalism."
              ],
              example: {
                q: "Match these three school words to their examples: a rule, a reward, a routine. Examples: you line up in the same place every morning; you may not run in the corridor; you are given a merit for good work.",
                steps: ["A rule tells you what you may not do, so match the corridor.", "A reward is something given for good work, so match the merit.", "A routine is what happens the same way every day, so match the lining up."],
                answer: "Rule: no running in the corridor. Reward: a merit for good work. Routine: lining up in the same place every morning."
              }
            },
            core: { hint: "Weapons, promises, land abroad, pride at home. One example for each." },
            stretch: { extend: "Choose two of the four causes and explain how one of them made the other worse." }
          },
          explain: "Say, in one sentence, which of the four causes you found easiest to spot, and what gave it away.",
          why: "Militarism is weapons, and the naval race is the clearest example. Alliances are promises, so the Entente of 1907 belongs there. Imperialism is empire abroad, which is the Morocco Crisis of 1911. Nationalism is pride and anger at home, which is Serbia in 1908."
        },
        {
          title: "Which cause mattered most?",
          task: {
            kind: "written",
            q: "Choose the long-term cause you think was most likely to lead to war. Write a PEE paragraph of four to six sentences explaining your choice.",
            criteria: [
              "I name one long-term cause and say clearly that I think it was the most likely to lead to war.",
              "I give evidence from my lesson for that cause, such as the naval race, the Entente of 1907, the Morocco Crisis or Bosnia.",
              "I explain how that cause would turn a quarrel into a war, using the word because.",
              "I show that I know the other three causes existed, even though I have chosen one."
            ],
            model: "I think the system of alliances was the long-term cause most likely to lead to war. By 1914 Europe was divided into two armed groups: France and Russia had signed an alliance in 1894, Britain joined them in 1907 to make the Triple Entente, and Germany, Austria-Hungary and Italy had the Triple Alliance. This made war more likely because a quarrel between any two countries could no longer stay between them; each one would call on its partners, and a local dispute would become a European war. Militarism, imperialism and nationalism all raised the temperature, and I would not argue that alliances worked alone. However, it was the alliances that turned a crisis in the Balkans into a war that pulled in empires on the other side of the world."
          },
          levels: {
            support: {
              steps: [
                "Choose ONE cause: militarism, alliances, imperialism or nationalism.",
                "Sentence 1, point: I think the cause most likely to lead to war was...",
                "Sentences 2 and 3, evidence: give one detail from your lesson about that cause.",
                "Sentences 4 and 5, explain: This made war more likely because... Then add that the other causes mattered too."
              ],
              example: {
                q: "Choose the reason you think most likely to make a football team lose a match, and write a point, evidence and explanation.",
                steps: ["Point: name the reason, for example having no fit goalkeeper.", "Evidence: the usual keeper is injured and the replacement has played twice.", "Explain: this makes losing more likely because every shot on target is more likely to go in."],
                answer: "Point, evidence, explain, with one sentence admitting that other reasons also matter."
              }
            },
            core: { hint: "One cause, one piece of evidence, then because. End by admitting that the other three causes were also at work." },
            stretch: { extend: "Rank all four causes from one to four, and explain why you put your fourth choice last." }
          },
          explain: "Say, in one sentence, how you decided which cause was the most likely to lead to war.",
          why: "Any of the four can be argued for, as long as the argument is built properly: name the cause, give evidence from the lesson, and explain how it would turn a quarrel into a war. The strongest answers also admit that the four causes worked together."
        },
        {
          title: "Spot the cause",
          task: {
            kind: "mcq",
            q: "Germany builds a fleet of powerful new battleships so that no other country will dare to attack it. Which long-term cause does this show?",
            options: ["Militarism", "Alliances", "Imperialism", "Nationalism"],
            answer: 0,
            why: "Building up armed forces in the belief that strength prevents attack is militarism, and it is exactly what the naval race between Britain and Germany was.",
            feedback: [
              "",
              "No promise to another country is mentioned here, and alliances are promises. A country building weapons to protect itself is showing militarism.",
              "Imperialism would mean taking control of land or resources abroad. Here Germany is building warships at home to make itself safe, which is militarism.",
              "Nationalism is pride in your country, and it often lies behind the spending. The thing actually described, though, is the build-up of armed forces: militarism."
            ]
          },
          contexts: [
            { label: "Britain's reply", q: "Britain answers Germany by building even more battleships, and spends more and more money on its navy every year. Which long-term cause does this show?", why: "Both countries building bigger fleets so that neither dares attack the other is militarism: the naval race." },
            { label: "The army budget", q: "A European country doubles the money it spends on its army, because it believes a strong country will not be attacked. Which long-term cause does this show?", why: "Spending more on armed forces in the belief that strength prevents attack is militarism." },
            { label: "The weapons factories", q: "New factories across Europe turn out guns and shells faster than ever, and each government wants more of them than its neighbour. Which long-term cause does this show?", why: "An arms race between neighbours, each wanting more weapons than the other, is militarism." }
          ],
          levels: {
            support: {
              steps: [
                "Ask: is a promise between countries mentioned? If not, it is not alliances.",
                "Ask: is land or an empire outside Europe mentioned? If not, it is not imperialism.",
                "Ask: is the example about armed forces, weapons or ships?",
                "If it is about armed forces, the cause is militarism."
              ],
              example: {
                q: "Germany challenges French control of Morocco, and Britain and France draw closer together as a result. Which long-term cause does this show?",
                steps: ["No weapons build-up is described, so it is not militarism.", "The quarrel is about control of a country in Africa.", "Control of other countries is imperialism."],
                answer: "Imperialism."
              }
            },
            core: { hint: "Weapons and armed forces point to one cause only." },
            stretch: { extend: "Explain how this example could also be used as evidence of nationalism, and why militarism is still the better answer." }
          },
          explain: "Say, in one sentence, the test you use to tell militarism from the other three causes.",
          why: "Each of these examples is about building up armed forces in the belief that strength keeps a country safe. That belief is militarism, and the naval race between Britain and Germany is its clearest example."
        }
      ]
    },

    /* ───────────── 2 · the spark and the July Crisis ───────────── */
    {
      key: "july-crisis", n: 2, title: "The spark: Sarajevo and the July Crisis",
      lead: "The assassination of 28 June 1914, the five weeks that turned it into a world war, and the argument historians have about whether a single murder can cause anything so large.",
      covers: [1],
      pretext: {
        words: [
          { word: "assassination", means: "the killing of a person for political reasons", sentence: "An assassination is not an ordinary murder, because its purpose is political." },
          { word: "heir", means: "the person next in line to a throne", sentence: "Franz Ferdinand was the heir to the throne of Austria-Hungary." },
          { word: "the July Crisis", means: "the five weeks in 1914 between the assassination and the outbreak of war", sentence: "During the July Crisis, one declaration of war followed another." },
          { word: "the Blank Cheque", means: "Germany's promise to back Austria-Hungary whatever it decided to do", sentence: "The Blank Cheque made Austria-Hungary bolder." },
          { word: "neutral", means: "taking no side in a war", sentence: "Belgium was neutral and wanted to be left out of the fighting." }
        ],
        passage: [
          "On 28 June 1914, Franz Ferdinand was shot in Sarajevo.",
          "He was the heir to the throne of Austria-Hungary.",
          "The killers were nationalists from the Balkans.",
          "They wanted Austrian rule over Slavic lands to end.",
          "At first this looked like a local quarrel.",
          "Then the alliances began to work.",
          "Germany promised to back Austria-Hungary whatever it did.",
          "Austria-Hungary declared war on Serbia.",
          "Russia began to call up its army to defend Serbia.",
          "Germany declared war on Russia and then on France.",
          "German soldiers marched into Belgium, which was neutral.",
          "Britain declared war on Germany on 4 August 1914.",
          "Five weeks had turned one killing into a world war."
        ]
      },
      sections: [
        {
          heading: "The spark in Sarajevo",
          paragraphs: [
            "On 28 June 1914, Franz Ferdinand, the heir to the throne of Austria-Hungary, was assassinated in Sarajevo. Assassination means the killing of a person for political purposes, which is what makes it different from an ordinary murder. The men responsible belonged to a nationalist group from the Balkans. They wanted the Slavic lands that Austria-Hungary ruled, including Bosnia, to be free of Austrian rule and joined to Serbia.",
            "Austria-Hungary blamed Serbia. On its own, this was a regional dispute in the Balkans, and it had nothing much to do with France, Russia, Germany or Britain. That is the point your lesson wants you to notice. A heir to a throne had been killed, and yet within five weeks much of the world was at war.",
            "Historians often call the assassination the spark that lit the fuse. The spark is the short-term cause. The fuse, laid over the previous thirty years, was militarism, alliances, imperialism and nationalism."
          ],
          tip: "Learn the date 28 June 1914 and the date 4 August 1914. Five weeks separate them, and almost everything in this chapter happens in between."
        },
        {
          heading: "The July Crisis: five weeks to war",
          paragraphs: [
            "The weeks that followed are called the July Crisis. Austria-Hungary asked Germany whether it would be supported if it punished Serbia, and Germany promised to back it whatever it chose to do. That promise is known as the Blank Cheque, and it made Austria-Hungary far bolder. Austria-Hungary then declared war on Serbia.",
            "Now the alliances took over. Russia saw itself as the protector of the Slavic peoples and began to call up its army to defend Serbia. Germany declared war on Russia, and then on France, because France was Russia's partner. To beat France quickly, Germany followed the Schlieffen Plan and marched into neutral Belgium.",
            "Belgium was the step that brought in Britain. Britain had promised to protect Belgian neutrality, and the invasion of a small neutral country also made the war easy to explain to the British public. Britain declared war on Germany on 4 August 1914."
          ],
          worked: {
            q: "Explain how one killing in Sarajevo led to Britain declaring war on Germany.",
            steps: [
              "Start with the spark: Franz Ferdinand was assassinated on 28 June 1914 and Austria-Hungary blamed Serbia.",
              "Add the promise: Germany gave Austria-Hungary the Blank Cheque, so Austria-Hungary declared war on Serbia.",
              "Follow the alliances: Russia mobilised to defend Serbia, so Germany declared war on Russia and then on France.",
              "Finish with Belgium: Germany invaded neutral Belgium to reach France, and Britain declared war on Germany on 4 August 1914."
            ],
            answer: "The spark, then the Blank Cheque, then the alliances pulling in Russia and France, then the invasion of neutral Belgium, which brought in Britain."
          },
          tip: "Write the chain as a sentence with so in it three times. If you can say it out loud without stopping, you know it."
        },
        {
          heading: "Spark or cause? What historians argue",
          paragraphs: [
            "Some historians argue that the assassination was responsible for the outbreak of war. Others argue that it was only the spark that lit tensions already present in Europe. Most take something from both sides, and your lesson asks you to weigh them.",
            "The case for the long-term causes is strong. Without the alliances, Russia and France and Britain had no reason to join a quarrel in the Balkans. Without militarism, no country would have had the armies ready to march in days. Without imperialism and nationalism, the great powers would not have been so suspicious of one another. The assassination alone would not have produced a global conflict.",
            "The case for the short-term cause is also real, though. Tensions had been high for years without war breaking out, and in June 1914 almost nobody in Britain expected a world war. It took a crisis to turn tension into fighting. The war that followed lasted until 1918 and killed millions of people across the world."
          ],
          tip: "A strong answer uses both: the long-term causes made war possible, and the short-term cause made it happen now."
        }
      ],
      gate: [
        { kind: "numeric", q: "In which year did the First World War break out?", answer: 1914, tolerance: 0, units: "", why: "The war broke out in the summer of 1914: the assassination was on 28 June and Britain declared war on 4 August.", check: "1914",
          misconceptions: [
            { answer: 1916, says: "1916 is the year of the Battle of the Somme, which comes later in this unit. The war itself had already broken out two years earlier, in 1914.", check: "1914 + 2" },
            { answer: 1918, says: "1918 is the year the war ended. It began four years earlier, in 1914, when Britain declared war on Germany on 4 August.", check: "1914 + 4" }
          ] },
        { kind: "gap", q: "Historians often call the assassination the ___ that lit the fuse of a war Europe was already prepared for.", answer: "spark", options: ["spark", "fuse", "alliance"], why: "The assassination is the spark, the short-term cause. The fuse is the long-term tension built up by militarism, alliances, imperialism and nationalism.",
          feedback: {
            "fuse": "You have the image the right way round but the wrong part of it. The fuse is the long-term tension that had been building for years; the assassination is the spark that lit it.",
            "alliance": "Alliances are one of the long-term causes, part of the fuse. The single event that set everything off in the summer of 1914 is called the spark."
          } },
        { kind: "mcq", q: "Why did Britain declare war on Germany on 4 August 1914?", options: ["Because German soldiers invaded Belgium, a neutral country Britain had promised to protect", "Because Germany had assassinated Franz Ferdinand", "Because Germany had declared war on Britain first", "Because Britain wanted to take control of German colonies in Africa"], answer: 0, why: "Germany invaded neutral Belgium on its way to France, and Britain had promised to protect Belgian neutrality.",
          feedback: [
            "",
            "Germany did not carry out the assassination. Franz Ferdinand was killed by nationalists from the Balkans, and Britain entered the war five weeks later, when Germany invaded neutral Belgium.",
            "It was Britain that declared war on Germany, not the other way round, and the reason it gave was the invasion of neutral Belgium.",
            "Competition over empire was a long-term cause of the tension, but it is not the reason Britain gave in August 1914. The reason was the invasion of neutral Belgium."
          ] }
      ],
      modules: [
        {
          title: "The July Crisis in order",
          task: {
            kind: "order",
            q: "Put the events of the July Crisis in order, from the assassination to the British declaration of war.",
            items: [
              "Franz Ferdinand is assassinated in Sarajevo (28 June 1914)",
              "Austria-Hungary asks Germany for support, and Germany promises the Blank Cheque",
              "Austria-Hungary declares war on Serbia",
              "Russia begins to call up its army to defend Serbia",
              "Germany declares war on Russia, and then on France",
              "German soldiers invade neutral Belgium to carry out the Schlieffen Plan",
              "Britain declares war on Germany (4 August 1914)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Two of the cards carry dates. They are the first and the last.",
                "Austria-Hungary needed Germany's promise before it dared act, so the Blank Cheque comes before the declaration on Serbia.",
                "Russia moves to protect Serbia, which is what brings Germany in against Russia and France.",
                "Belgium is the last step before Britain, because the invasion of Belgium is Britain's reason for joining."
              ],
              example: {
                q: "Put the stages of a fire in order: the dry grass catches; a match is struck; the fire brigade is called; the flames reach the hedge.",
                steps: ["Nothing happens until the match is struck.", "The dry grass catches next.", "Then the flames reach the hedge.", "Only then is the brigade called."],
                answer: "a match is struck; the dry grass catches; the flames reach the hedge; the fire brigade is called"
              }
            },
            core: { hint: "Spark, promise, first declaration, Russia, Germany, Belgium, Britain." },
            stretch: { extend: "Pick the one step you think could most easily have been avoided, and explain how the crisis might have ended differently." }
          },
          explain: "Say, in one sentence, which step in this chain turned a Balkan quarrel into a European war.",
          why: "The assassination came first; the Blank Cheque emboldened Austria-Hungary; Serbia was attacked; Russia mobilised; Germany declared war on Russia and France; Belgium was invaded; and Britain declared war on 4 August 1914."
        },
        {
          title: "From a murder to a world war",
          task: {
            kind: "written",
            q: "Explain how the assassination of Franz Ferdinand led to the First World War. Write one paragraph of five to seven sentences.",
            criteria: [
              "I begin with the assassination and give its date.",
              "I use at least three of these words correctly: the Blank Cheque, alliances, the July Crisis, the Schlieffen Plan, neutral Belgium.",
              "I link my steps with so or because, rather than listing them.",
              "I explain that the long-term causes were needed as well as the assassination.",
              "I finish with Britain's declaration of war on 4 August 1914."
            ],
            model: "The assassination of Franz Ferdinand on 28 June 1914 was the spark that led to the First World War. Austria-Hungary blamed Serbia and asked Germany for support, and Germany gave the Blank Cheque, so Austria-Hungary felt safe enough to declare war on Serbia. Because of the alliances, the quarrel could not stay in the Balkans: Russia began to call up its army to protect Serbia, so Germany declared war on Russia and then on France. To defeat France quickly, Germany followed the Schlieffen Plan and invaded neutral Belgium, and because Britain had promised to protect Belgium it declared war on Germany on 4 August 1914. None of this would have happened without the long-term causes, because militarism had filled Europe with weapons and the alliances meant that no quarrel could stay small. The assassination was therefore the spark, but the fuse had been laid over many years."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: The assassination of Franz Ferdinand on 28 June 1914 was the spark that led to war.",
                "Sentences 2 and 3: Austria-Hungary blamed Serbia and Germany gave the Blank Cheque, so...",
                "Sentences 4 and 5: Because of the alliances, Russia... so Germany... and Germany invaded neutral Belgium.",
                "Last sentences: Britain declared war on 4 August 1914. Then add one sentence saying that the long-term causes were needed too."
              ],
              example: {
                q: "Explain how one dropped catch led to a cricket team losing a match. Write four sentences linked with so or because.",
                steps: ["Start with the dropped catch itself.", "Say what happened next because of it: the batter went on to score heavily.", "Explain the knock-on effect: the bowlers tired and the target grew.", "Finish by admitting that other weaknesses also mattered."],
                answer: "A chain of so and because sentences, ending with one sentence that admits other causes."
              }
            },
            core: { hint: "Spark, Blank Cheque, alliances, Belgium, Britain. Then one sentence on the long-term causes." },
            stretch: { extend: "Rewrite your last sentence as a judgement: was the assassination a cause of the war, or only the spark? Give a reason." }
          },
          explain: "Say, in one sentence, why the chain needed the alliances as well as the assassination.",
          why: "A strong answer follows the chain with so and because: assassination, Blank Cheque, war on Serbia, Russian mobilisation, Germany against Russia and France, the invasion of Belgium, Britain. The best answers add that without the long-term causes the chain would have broken at the first link."
        },
        {
          title: "Spark, or cause?",
          task: {
            kind: "mcq",
            q: "Why do many historians argue that the assassination on its own could not have caused a world war?",
            options: [
              "Because it was a dispute in the Balkans, and only the tensions and alliances already in place could spread it across Europe",
              "Because Franz Ferdinand was not an important person in Austria-Hungary",
              "Because the assassination happened too long before August 1914 to matter",
              "Because nobody in Europe heard about the assassination until the war had begun"
            ],
            answer: 0,
            why: "The killing was a regional dispute. It became a world war because of the alliances, the weapons and the suspicions that militarism, imperialism and nationalism had built up over decades.",
            feedback: [
              "",
              "He was very important: he was the heir to the throne of Austria-Hungary, which is why his death was treated as an attack on the empire itself. The reason it alone could not cause a world war is that it was a Balkan dispute.",
              "The gap was only five weeks, from 28 June to 4 August 1914, so the timing is not the problem. The problem is that the dispute itself was regional, and it needed the alliances to spread.",
              "The assassination was reported across Europe at once. What turned the news into a world war was the alliance system and the tensions already in place."
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask: where was the quarrel? In the Balkans, between Austria-Hungary and Serbia.",
                "Ask: why did Britain, France and Russia end up in it? Because of their promises to each other.",
                "So the answer must mention the alliances or the tensions already in place.",
                "Cross out any option that says the assassination was unimportant or unknown."
              ],
              example: {
                q: "Why would one spilled drink not normally close a whole supermarket? Choose the best reason: the drink was small; or a spill only closes a shop if there is no one free to clear it up and the floor is already unsafe.",
                steps: ["Think about what else has to be true for the small event to have a big effect.", "The second option gives those conditions."],
                answer: "A small event has large effects only when the conditions are already in place."
              }
            },
            core: { hint: "The right answer names what the assassination needed in order to spread: promises between the great powers." },
            stretch: { extend: "Explain why historians still spend time on the assassination at all, if the long-term causes did most of the work." }
          },
          explain: "Say, in one sentence, what the assassination needed in order to become a world war.",
          why: "A spark needs a fuse. The dispute between Austria-Hungary and Serbia became a world war because the alliance system pulled in Russia, Germany, France and Britain, and because militarism had already armed them all."
        }
      ]
    },

    /* ───────────── 3 · the Western Front and the trench system ───────────── */
    {
      key: "trenches", n: 3, title: "The Western Front and the trench system",
      lead: "How the Western Front came to exist, why both sides dug in, what the parts of a trench were for, and how the four lines of the trench system worked together.",
      covers: [2],
      pretext: {
        words: [
          { word: "Western Front", means: "the long line of trenches running through Belgium and France", sentence: "The Western Front stretched for more than 400 miles." },
          { word: "trench", means: "an area dug into the ground that is deeper than it is wide", sentence: "A trench gave soldiers protection from bullets and shells." },
          { word: "no-man's-land", means: "the disputed ground between the front lines of the two armies", sentence: "Nobody could cross no-man's-land in daylight without being seen." },
          { word: "parapet", means: "the inner wall of a trench, topped with sandbags", sentence: "A soldier looked over the parapet through a periscope." },
          { word: "dugout", means: "a hole dug into the side of a trench where men could take cover", sentence: "A dugout could be used as a medical post." }
        ],
        passage: [
          "Germany planned to beat France in six weeks.",
          "The plan failed.",
          "By December 1914, neither side could break through the other.",
          "So both sides dug.",
          "Their trenches ran from the Belgian coast to the Swiss border.",
          "This long line was called the Western Front.",
          "It stretched for more than 400 miles.",
          "A trench is a channel dug deeper than it is wide.",
          "It protected soldiers from bullets and from shell fire.",
          "Trenches zig-zagged instead of running straight.",
          "The ground between the two front lines was called no-man's-land.",
          "Behind the front line came support, reserve and communication trenches."
        ]
      },
      sections: [
        {
          heading: "How the Western Front was created",
          paragraphs: [
            "Germany went to war with a plan. The Schlieffen Plan was designed to defeat France quickly by attacking through Belgium, so that Germany could then turn round and deal with Russia. The whole plan depended on France collapsing in about six weeks. It did not happen.",
            "By December 1914 it had become clear that neither side could break through the other's defences. Both armies dug long lines of trenches. The line began on the coast of Belgium, ran south through France and finished at the Swiss border. This area became known as the Western Front, and it stretched for more than 400 miles.",
            "The Western Front mattered because of what a breakthrough would mean. If either alliance could push through the line, it would be into open country and could take control of the other side's territory. That is why so much was spent on so little ground, and why some of the most destructive fighting of the war happened here."
          ],
          tip: "Learn the shape of it: the Schlieffen Plan fails, so neither side can advance, so both sides dig. The trenches are the result of a stalemate, not the cause of one."
        },
        {
          heading: "What is a trench, and why dig one?",
          paragraphs: [
            "A trench is an area dug into the ground which is deeper than it is wide. Soldiers on the Western Front dug them for protection from an enemy they could rarely see. A man standing in a deep trench could not be hit by rifle fire from across no-man's-land, and he had some protection from shells.",
            "Trenches zig-zagged rather than running in a straight line. There are two good reasons for that. A straight trench lets a shell blast travel along its whole length, and it also lets an enemy who gets into one end fire down the rest of it. A zig-zag keeps both the blast and the bullets to one short section.",
            "Underground dugouts gave more protection still, and were often used as medical posts or shelters for officers. Even so, a trench was never safe. It was protection from direct fire, not from the war."
          ],
          tip: "If you are asked why trenches were used, give two reasons: protection from bullets and shells, and the stalemate that made advancing impossible."
        },
        {
          heading: "The parts of a trench",
          paragraphs: [
            "Each part of a trench had a job. The parapet is the inner wall on the enemy side, made of earth and wood and topped with sandbags, which protected the men behind it. The parados is the matching bank at the back, so that a soldier was not outlined against the sky. Sandbags protected soldiers from rifle fire, and could also be used at the bottom of a trench to soak up water.",
            "The firestep ran along the bottom of the front wall so that each soldier could stand and peer over the side, through the parapet, towards the enemy line. A periscope let him do the same job without putting his head above the parapet at all. In front of the parapet lay coils of barbed wire, and beyond that no-man's-land: the disputed ground between the front lines of the two armies.",
            "Water was a constant enemy, so trenches had a sump, a container set below the floor of the trench to drain away as much water as possible, and duckboards laid over the floor to cover the sump pits and keep men out of the mud. Dugouts were holes cut into the side of the trench where men could take cover when they needed to."
          ],
          worked: {
            q: "A definition reads: a place where each soldier could stand to look over the side of the trench towards the enemy. Which feature is it, and how do you know?",
            steps: [
              "Look for the key action in the definition: standing in order to see over the side.",
              "Rule out the features that are walls or coverings: the parapet is the wall itself, the sandbags sit on top of it, the duckboards are on the floor.",
              "A soldier needs something to stand on to see over the wall, and that is the firestep.",
              "Check it against the opposite feature: a periscope lets you see over without standing up at all."
            ],
            answer: "The firestep: the definition is about standing in order to see over the parapet, and the firestep is the step that makes that possible."
          },
          tip: "Sort the features into three groups before you learn them: walls (parapet, parados, sandbags), water (sump, duckboards), and seeing or sheltering (firestep, periscope, dugout)."
        },
        {
          heading: "Four lines, not one",
          paragraphs: [
            "The trench system was not a single ditch. The front line trench was where attacks came, which made it the most dangerous place to be, and your lesson gives soldiers 15 per cent of their time there. Behind it was the support trench, which your lesson puts 80 metres back and gives 10 per cent of a soldier's time: a place to fall back to if the front line was taken. Behind that again was the reserve trench, which your lesson puts 100 metres from the front and gives 30 per cent of the time.",
            "Running between the three lines were communication trenches. These linked the system together so that troops could be moved and messages carried without crossing open ground. If you are asked which part of the system was most important, the communication trenches are a strong and surprising answer: without them the other three could not be supplied or relieved.",
            "Add the three shares of time together and they come to 55 per cent, not 100. The rest of a soldier's time was spent out of the trench system altogether, resting, training or marching to and from the line. Soldiers were rotated so that no unit stayed in the most dangerous place for long."
          ],
          tip: "Front line, support, reserve, communication. Learn the order away from the enemy, and remember that nobody stayed in the front line for the whole of their war."
        }
      ],
      gate: [
        { kind: "mcq", q: "Why did trenches zig-zag instead of running in a straight line?", options: ["So that a shell blast or enemy fire could not travel along the whole trench", "So that the trenches were quicker to dig", "So that rainwater would drain away to the ends", "So that soldiers could see further into no-man's-land"], answer: 0, why: "A zig-zag keeps a blast, and any enemy who gets into the trench, inside one short section instead of the whole line.",
          feedback: [
            "",
            "A zig-zag is slower to dig, not quicker, because there is more wall to build and revet. The reason for it is protection: a blast cannot travel along a line that keeps turning.",
            "Water was dealt with by sumps and duckboards, not by the shape of the line. The zig-zag was there to stop a shell blast or enemy fire sweeping the whole trench.",
            "A zig-zag actually blocks your view along the trench. Seeing into no-man's-land was the job of the firestep and the periscope."
          ] },
        { kind: "gap", q: "The disputed ground between the front lines of the two armies was called ___.", answer: "no-man's-land", options: ["no-man's-land", "the parados", "the sump"], why: "No-man's-land is the ground between the two front line trenches, which neither army held.",
          feedback: {
            "the parados": "The parados is the bank of earth at the back of your own trench, which stopped a soldier being outlined against the sky. The ground between the two armies is no-man's-land.",
            "the sump": "A sump is the water container set below the floor of a trench to drain it. The ground between the two front lines is no-man's-land."
          } },
        { kind: "mcq", q: "Which part of the trench system was the most dangerous place to be?", options: ["The front line trench", "The reserve trench", "The communication trench", "The support trench"], answer: 0, why: "Attacks came at the front line trench, so it was the most dangerous, and soldiers spent only 15 per cent of their time there.",
          feedback: [
            "",
            "The reserve trench was the furthest back of the three fighting lines, and soldiers spent the largest share of their trench time there, 30 per cent, precisely because it was safer. The dangerous line was the front line.",
            "Communication trenches carried troops and messages between the lines. They could be shelled, but the place attacks actually came was the front line trench.",
            "The support trench was a place to fall back to, about 80 metres behind the front. The attacks themselves came at the front line trench."
          ] }
      ],
      modules: [
        {
          title: "Name that feature",
          task: {
            kind: "match",
            q: "Match each feature of the trench system to its definition.",
            pairs: [
              ["Parapet", "The inner wall of a trench, made of earth and wood and topped with sandbags, to protect the soldiers"],
              ["Dugout", "A hole dug into the side of a trench where men could take cover when they needed to"],
              ["Duckboards", "Boards laid along the bottom of a trench to cover the sump pits and keep men out of the mud"],
              ["Sump", "A water container set below the floor of a trench, to drain away as much water as possible"],
              ["No-man's-land", "The disputed ground between the front lines of the two opposing armies"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Two of the five are about water. Find the words water and mud in the definitions and match those two first.",
                "One of the five is not part of a trench at all: it is the ground outside.",
                "Of the two that are left, one is a wall and one is a hole.",
                "Check each match by asking: could a soldier stand on it, shelter in it, or hide behind it?"
              ],
              example: {
                q: "Match these three features to their definitions: parados, firestep, periscope. Definitions: a step that lets a soldier see over the parapet; a bank of earth at the back of the trench; a device for looking over the top without raising your head.",
                steps: ["The step is the one a soldier stands on, so that is the firestep.", "The bank at the back is the parados.", "The device for looking over safely is the periscope."],
                answer: "Parados: the bank at the back. Firestep: the step for seeing over the parapet. Periscope: the device for looking over without raising your head."
              }
            },
            core: { hint: "Sort them first: two about water, one about the ground outside, one wall, one hole." },
            stretch: { extend: "Choose the feature you think saved the most lives, and explain your choice using one of the dangers of trench life." }
          },
          explain: "Say, in one sentence, how you can tell a feature's job from the words used in its definition.",
          why: "The parapet is the protective wall; the dugout is the hole men sheltered in; the duckboards covered the sump pits; the sump drained the water; and no-man's-land is the ground between the two front lines."
        },
        {
          title: "Adding up a soldier's time",
          task: {
            kind: "numeric",
            q: "Your lesson gives the share of a soldier's time spent in each line: 15 per cent in the front line trench, 10 per cent in the support trench and 30 per cent in the reserve trench. Add the three figures. What percentage of a soldier's time do they account for?",
            answer: 55, tolerance: 0, units: "per cent",
            why: "15 + 10 + 30 = 55 per cent. The missing 45 per cent was time out of the trench system altogether: resting, training or marching to and from the line.",
            check: "15 + 10 + 30",
            misconceptions: [
              { answer: 45, says: "You have worked out the time that is left over instead of the time in the three trenches. Add the three figures themselves: 15 + 10 + 30 = 55.", check: "100 - (15 + 10 + 30)" },
              { answer: 25, says: "You have added the front line and the support trench but left out the reserve trench, which is the largest share at 30 per cent.", check: "15 + 10" },
              { answer: 40, says: "You have added the support and reserve trenches but left out the front line trench, which is 15 per cent.", check: "10 + 30" }
            ]
          },
          levels: {
            support: {
              steps: [
                "Write the three figures down in a column: 15, 10, 30.",
                "Add the first two: 15 + 10 = 25.",
                "Add the third: 25 + 30 = 55.",
                "Ask whether that is all of a soldier's time. It is not, so something is missing from the three figures."
              ],
              example: {
                q: "A class spends 20 per cent of a lesson on recall, 50 per cent on new work and 20 per cent on practice. What percentage of the lesson do those three activities account for?",
                steps: ["Add the first two: 20 + 50 = 70.", "Add the third: 70 + 20 = 90.", "The missing 10 per cent is the start and the end of the lesson."],
                answer: "90 per cent",
                checks: [{ expr: "20 + 50 + 20", value: 90, tol: 0 }]
              }
            },
            core: { hint: "Add all three. Then ask yourself what the figures do not include." },
            stretch: { extend: "Explain why the army moved units in and out of the front line instead of leaving them there, and what the missing 45 per cent tells you about how the system was run." }
          },
          explain: "Say, in one sentence, what the missing 45 per cent of a soldier's time was spent doing.",
          why: "15 + 10 + 30 = 55 per cent. The three figures do not add up to all of a soldier's time, because units were rotated out of the trench system to rest, train and move. Noticing what a set of figures leaves out is a historian's habit worth having."
        },
        {
          title: "Why dig at all?",
          task: {
            kind: "written",
            q: "Explain why trenches were necessary on the Western Front. Write one paragraph of four to six sentences.",
            criteria: [
              "I explain the stalemate: neither side could break through, so neither side could advance.",
              "I give at least two things a trench protected soldiers from.",
              "I use at least two key words correctly, such as Western Front, no-man's-land, parapet or dugout.",
              "I finish by saying what the trenches could not do, so that my answer is not one-sided."
            ],
            model: "Trenches became necessary on the Western Front because neither side could break through the other's defences. By December 1914 the Schlieffen Plan had failed and both armies had been stopped, so the only way to hold the ground they had was to dig into it. A trench was deeper than it was wide, which meant that rifle fire from across no-man's-land passed harmlessly overhead, and the parapet and the sandbags on top of it gave protection from shell splinters as well. Dugouts cut into the sides offered better shelter still, and could be used as medical posts. Trenches could not win the war, though: they protected the men who held them so well that for four years neither side could cross the ground in between."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: Trenches were necessary because neither side could break through.",
                "Sentence 2: say what had happened by December 1914.",
                "Sentences 3 and 4: name two things a trench protected soldiers from, and one feature that did the protecting.",
                "Last sentence: say what trenches could not do."
              ],
              example: {
                q: "Explain why a castle needed thick walls. Write four sentences, finishing with one thing thick walls could not do.",
                steps: ["Start with the problem: attackers with siege weapons.", "Explain what the walls stopped.", "Name one feature, such as arrow slits, and its job.", "Finish with the limit: walls could not stop a long siege or starvation."],
                answer: "Problem, protection, one feature, then the limit of that protection."
              }
            },
            core: { hint: "Two reasons for digging, two things a trench protected against, and one honest limit at the end." },
            stretch: { extend: "Explain how the protection trenches gave to both sides helped to create the kind of war that the Somme turned out to be." }
          },
          explain: "Say, in one sentence, the link between the failure of the Schlieffen Plan and the digging of trenches.",
          why: "The strongest answers connect three things: the stalemate that made advancing impossible, the protection a trench gave from bullets and shells, and the fact that protecting both sides equally is what made the deadlock last."
        }
      ]
    },

    /* ───────────── 4 · life and health in the trenches ───────────── */
    {
      key: "trench-life", n: 4, title: "Life and health in the trenches",
      lead: "What filled a soldier's day between attacks, what the weather and the water did to the trenches, and the four medical problems the army had to solve.",
      covers: [2],
      pretext: {
        words: [
          { word: "rations", means: "the food a soldier was given each day", sentence: "A soldier carried his rations, mug and knife and fork in his haversack." },
          { word: "lice", means: "tiny insects that live on skin and clothing and can spread disease", sentence: "Lice were almost impossible to get rid of in a crowded trench." },
          { word: "waterlogged", means: "soaked through with water that cannot drain away", sentence: "In winter the trenches were waterlogged, muddy and icy." },
          { word: "trench foot", means: "a painful condition caused by standing in cold water for too long", sentence: "Dry socks and whale oil were the answer to trench foot." },
          { word: "shell shock", means: "the lasting effect on a soldier's mind of long exposure to shelling and fear", sentence: "Shell shock was poorly understood at the time." }
        ],
        passage: [
          "Life in a trench was not one long battle.",
          "Between attacks there were long, dull stretches of waiting.",
          "Soldiers slept, ate from meal tins and played cards.",
          "They wrote letters and diaries home.",
          "Parcels arrived from their families with treats such as chocolate.",
          "Dogs were a common sight, as pets and as working animals.",
          "The weather was a constant enemy.",
          "In winter the trenches were waterlogged, muddy and icy.",
          "Shelling left large holes filled with churned-up mud.",
          "Soldiers lived with rats, lice and the cold water.",
          "Standing in that water for too long caused trench foot.",
          "The army had to find answers to problems like these.",
          "An army that lost men to illness could not fight."
        ]
      },
      sections: [
        {
          heading: "Waiting, and what filled the time",
          paragraphs: [
            "Films give the impression that trench life was one attack after another. Your lesson is careful to correct that. Much of the time there was very little fighting, because neither side had a tactic that would break the deadlock, and soldiers described trench life as boring as often as they described it as frightening.",
            "So what filled the hours? Soldiers slept whenever they could. They ate from meal tins and shared out the rations they carried in their haversacks, along with a mug, a knife and fork and a shaving kit. They played cards. They wrote letters and kept diaries, which is one reason historians know so much about them. Parcels came from home with treats such as chocolate.",
            "Dogs were a common sight on the front line. Some were loved as pets; many were trained to work, carrying messages or finding the wounded. A periscope let a soldier watch no-man's-land without putting his head above the parapet, and watching was a large part of the job."
          ],
          tip: "If a question asks what life in the trenches was like, say both things: long stretches of boredom and sudden danger. An answer that gives only one of the two is only half right."
        },
        {
          heading: "Weather, water and mud",
          paragraphs: [
            "The ground of the Western Front held water, and the trenches cut straight into it. In winter they were waterlogged, muddy and icy. Sumps and duckboards helped, but they could not keep a trench dry for long, and a trench that had been shelled was worse still: the explosions left large holes which filled with churned-up mud.",
            "Trenches also tended to be overcrowded, with too many men in too little space. On top of that came the things your lesson lists as constant: the fear of shell fire, bullets, exposure to the weather, cold water, rats and lice. None of these was dramatic on its own. Together, over weeks, they wore men down.",
            "This is worth holding on to when you judge the generals later in this unit. The conditions were not an accident of one bad winter. They were what the whole Western Front was like, for four years, on both sides of no-man's-land."
          ],
          tip: "Separate the weather problems (water, mud, ice, cold) from the living problems (overcrowding, rats, lice). Then say how the two made each other worse."
        },
        {
          heading: "Four medical problems, and what the army did",
          paragraphs: [
            "Your lesson studies four major medical problems of the Western Front. Trench foot was caused by standing in cold water for too long, and it could leave a soldier unable to walk. An effective solution was found by 1915: the army made sure soldiers changed their socks three times a day and covered their feet in whale oil, and after that it was no longer a major problem. Trench fever was spread by the lice that lived in clothing, and left men feverish and aching, unfit to fight for weeks at a time.",
            "Gas attacks were new to this war. Poison gas was released to drift on the wind towards the enemy trench, where it attacked the eyes and the lungs. The answer was protective equipment: soldiers were issued with gas helmets and then with proper respirators, and sentries were given rattles and gongs to raise the alarm. Shell shock was the effect on a soldier's mind of long exposure to shelling, fear and noise. At the time it was badly understood, and some sufferers were treated as cowards rather than as casualties. It is now recognised as a serious injury.",
            "Your lesson asks you to judge, for each of the four, whether an effective solution had been found by 1918, the year the war ended. Trench foot is the clearest success. Gas was answered with equipment rather than cured. Trench fever was not beaten until the cause, the lice, could be dealt with. Shell shock was barely understood at all."
          ],
          worked: {
            q: "Explain how the army reduced trench foot, and how we can tell that the solution worked.",
            steps: [
              "Name the cause: trench foot came from standing in cold water for too long.",
              "Name the measure: from 1915 soldiers had to change their socks three times a day and cover their feet in whale oil.",
              "Explain why the measure attacks the cause: dry feet and a layer of oil keep the cold water off the skin.",
              "Give the test of success: your lesson says it was no longer a major issue after 1915, which is how we know the measure worked."
            ],
            answer: "Cause, measure, link, evidence: cold water caused it; dry socks and whale oil kept the water off; and the problem stopped being a major one after 1915."
          },
          tip: "For each medical problem, learn three things: the cause, what the army did, and whether it worked. That is exactly the shape the question will take."
        }
      ],
      gate: [
        { kind: "gap", q: "Standing in cold water for too long caused trench ___.", answer: "foot", options: ["foot", "fever", "shock"], why: "Trench foot was caused by cold water. Trench fever came from lice, and shell shock came from long exposure to shelling and fear.",
          feedback: {
            "fever": "Trench fever was spread by the lice that lived in soldiers' clothing, not by the water. The problem caused by standing in cold water was trench foot.",
            "shock": "Shell shock was the effect on a soldier's mind of weeks of shelling, fear and noise. The problem caused by cold water around the feet was trench foot."
          } },
        { kind: "mcq", q: "What does your lesson give as a constant problem for soldiers in the trenches?", options: ["Water, mud and the cold", "Too much space to defend", "A shortage of letters from home", "Heat and drought all year round"], answer: 0, why: "Water, mud and cold were constant. They caused trench foot, ruined equipment and wore men down over weeks.",
          feedback: [
            "",
            "Trenches were overcrowded rather than empty: too many men in too little space. The constant problem your lesson names is water, mud and cold.",
            "Letters and parcels did reach the front, and soldiers wrote a great many of their own. The constant problem was the water, the mud and the cold.",
            "The Western Front ran through Belgium and northern France, where the trouble was rain and winter, not drought. Water, mud and cold are the right answer."
          ] },
        { kind: "mcq", q: "Why did the army work so hard to find medical solutions on the Western Front?", options: ["Because every soldier too ill to fight weakened an army that was trying to wear the enemy down", "Because the war was expected to be over within weeks", "Because soldiers could not be replaced once conscription had begun", "Because gas attacks were the only serious danger in the trenches"], answer: 0, why: "In a war of attrition, an army needs its men fit. Soldiers lost to trench foot or trench fever were as gone from the line as soldiers lost in an attack.",
          feedback: [
            "",
            "By the time these problems appeared it was clear the war would not be short, which is exactly why lasting medical answers were needed rather than quick fixes.",
            "Conscription from January 1916 brought in more men, not fewer. The point is that an army wearing its enemy down cannot afford to lose its own men to illness.",
            "Gas was one of four major problems your lesson studies, alongside trench foot, trench fever and shell shock. No single one of them was the only danger."
          ] }
      ],
      modules: [
        {
          title: "Four problems, four causes",
          task: {
            kind: "match",
            q: "Match each medical problem to its cause or description.",
            pairs: [
              ["Trench foot", "Caused by standing in cold water for too long; the army found an effective answer by 1915"],
              ["Trench fever", "Spread by the lice that lived in soldiers' clothing, leaving men feverish and unfit to fight for weeks"],
              ["Gas attacks", "Poison released to drift on the wind, answered with gas helmets and then respirators"],
              ["Shell shock", "The lasting effect on a soldier's mind of long exposure to shelling, fear and noise"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Two of the four are named after the trench itself. Start with those two, and sort them by cause: water or lice?",
                "One of the four is a weapon rather than a condition.",
                "The remaining one affects the mind rather than the body.",
                "Check each match by asking what the army could do about it."
              ],
              example: {
                q: "Match these three school problems to their causes: a cold classroom, a late start, a lost book. Causes: the boiler has failed; the bus did not come; it was left in the hall.",
                steps: ["The cold room must be the boiler.", "A late start points to the bus.", "That leaves the book left in the hall."],
                answer: "Cold classroom: the boiler has failed. Late start: the bus did not come. Lost book: left in the hall."
              }
            },
            core: { hint: "Water, lice, wind, noise. One cause for each problem." },
            stretch: { extend: "Rank the four problems by how well they had been solved by 1918, and give a reason for the one you put last." }
          },
          explain: "Say, in one sentence, which of the four problems the army solved best, and how you can tell.",
          why: "Trench foot came from cold water and was largely solved from 1915; trench fever came from lice; gas was a weapon answered with protective equipment; and shell shock was an injury to the mind that was barely understood at the time."
        },
        {
          title: "Why medicine mattered",
          task: {
            kind: "written",
            q: "Explain why it was so important for the army to find medical solutions to the problems of the Western Front. Write one paragraph of four to six sentences.",
            criteria: [
              "I explain that an army fighting a war of attrition needs its soldiers fit.",
              "I use at least two of the four problems as evidence: trench foot, trench fever, gas attacks or shell shock.",
              "I give one measure the army actually took, and say whether it worked.",
              "I link my points with so or because rather than listing them."
            ],
            model: "Finding medical solutions mattered because an army cannot wear its enemy down if it is losing its own soldiers to illness. Trench foot could leave a man unable to walk, and trench fever left men feverish and unfit to fight for weeks, so both took soldiers out of the line just as surely as an attack did. The army therefore treated them as military problems and not only as medical ones: from 1915 soldiers had to change their socks three times a day and cover their feet in whale oil, and trench foot stopped being a major issue. Gas was answered with helmets and respirators, so the weapon could not be stopped but its effects could be reduced. Shell shock, however, was still badly understood, which shows that the army solved the problems it could see and measure far better than the ones it could not."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: It was important because an army needs its soldiers fit to fight.",
                "Sentences 2 and 3: name two problems and say what each one did to a soldier, using so or because.",
                "Sentence 4: give one measure the army took, and say whether it worked.",
                "Last sentence: name one problem that was not solved, so your answer is balanced."
              ],
              example: {
                q: "Explain why it matters that a football club has good physiotherapists. Write four sentences, finishing with one problem they cannot fix.",
                steps: ["Start with the need: a team needs fit players to win.", "Give two injuries and what each costs the team.", "Give one measure that works, such as warm-up routines.", "Finish with something they cannot fix, such as a broken leg."],
                answer: "Need, evidence, a measure that works, then an honest limit."
              }
            },
            core: { hint: "Two problems as evidence, one measure that worked, and one that did not. Use so and because." },
            stretch: { extend: "Explain how the pressure of a war of attrition could push medicine forward faster than peacetime would have done." }
          },
          explain: "Say, in one sentence, why a soldier lost to trench fever cost the army as much as a soldier lost in an attack.",
          why: "A war of attrition is won by whichever side can keep more men in the line. That makes illness a military problem. The strongest answers also notice that the problems that could be seen and measured, such as trench foot, were solved far better than shell shock was."
        },
        {
          title: "Which problem is this?",
          task: {
            kind: "mcq",
            q: "Soldiers have stood in cold water in a flooded trench for three days, and their feet have gone numb and painful. Which of the four medical problems is this about?",
            options: ["Trench foot", "Trench fever", "Gas attack", "Shell shock"],
            answer: 0,
            why: "Cold water around the feet for days on end is the cause of trench foot. The army's answer was dry socks, changed three times a day, and whale oil.",
            feedback: [
              "",
              "Trench fever was spread by lice in clothing, not by water. Feet left standing in cold water for days points to trench foot.",
              "A gas attack came on the wind and affected the eyes and lungs. Cold water around the feet causes trench foot.",
              "Shell shock was caused by long exposure to shelling, fear and noise, and affected the mind. Cold water around the feet causes trench foot."
            ]
          },
          contexts: [
            { label: "The sock order", q: "In 1915 the army ordered soldiers to change their socks three times a day and to rub whale oil into their feet. Which of the four medical problems is this about?", why: "Dry socks and whale oil keep cold water off the skin, which is why this order was the effective answer to trench foot." },
            { label: "Solved by 1915", q: "Your lesson says that an effective solution to one of the four problems was found by 1915, and that it was no longer a major issue afterwards. Which of the four medical problems is this about?", why: "Trench foot is the problem your lesson says was effectively solved by 1915." },
            { label: "The morning inspection", q: "An officer inspects his men's feet every morning and sends anyone with wet boots to find dry socks. Which of the four medical problems is this about?", why: "Daily foot inspections were a way of preventing trench foot before it took a soldier out of the line." }
          ],
          levels: {
            support: {
              steps: [
                "Ask which part of the body the description is about.",
                "If it is the feet and cold water, you are in the right area already.",
                "Rule out lice (trench fever), the wind and the lungs (gas) and the mind (shell shock).",
                "What is left is trench foot."
              ],
              example: {
                q: "A soldier's clothing is full of lice and he has been feverish and aching for a fortnight. Which of the four medical problems is this about?",
                steps: ["The cause named is lice in clothing.", "That is not water, gas or shelling.", "Lice in clothing spread trench fever."],
                answer: "Trench fever."
              }
            },
            core: { hint: "Match the cause in the description to the cause of the problem: water, lice, wind or noise." },
            stretch: { extend: "Explain why a problem with a simple cause, such as trench foot, was easier for the army to solve than one with a complicated cause, such as shell shock." }
          },
          explain: "Say, in one sentence, how the cause named in a description tells you which problem it is.",
          why: "Every one of these describes trench foot, from a different angle: the cause, the army's order, the date it was solved, and the daily inspection meant to prevent it. Matching cause to condition is the quickest way to tell the four problems apart."
        }
      ]
    },

    /* ───────────── 5 · the Somme: the plan and the battle ───────────── */
    {
      key: "somme", n: 5, title: "The Somme: the plan and the battle",
      lead: "Why the Allies chose a war of attrition, why the attack had to happen in July 1916, what Haig's four-step plan was, and what happened when the plan met the reality of the German defences.",
      covers: [3],
      pretext: {
        words: [
          { word: "war of attrition", means: "wearing an enemy down little by little until they surrender or collapse", sentence: "By 1916 the war had become a war of attrition." },
          { word: "conscription", means: "forcing men to join the armed forces by law", sentence: "Conscription gave Haig many more soldiers, but they were not trained." },
          { word: "offensive", means: "a large planned attack", sentence: "The Allies planned a major offensive by the River Somme." },
          { word: "bombardment", means: "heavy shelling of an enemy position, often for days on end", sentence: "The bombardment was meant to cut the barbed wire and destroy the trenches." },
          { word: "Verdun", means: "the French town where a German attack almost broke the French army in 1916", sentence: "One purpose of the Somme was to draw German soldiers away from Verdun." }
        ],
        passage: [
          "By 1916 the war had become a war of attrition.",
          "Each side tried to wear the other down until it collapsed.",
          "The Allies believed they had more weapons, food and men.",
          "In January 1916 Britain passed the Conscription Act.",
          "All men aged 18 to 41 could now be made to join up.",
          "In February 1916 the Germans attacked the French at Verdun.",
          "The French army came close to collapse.",
          "The French demanded that the British attack at the Somme.",
          "General Douglas Haig led the British army there.",
          "His plan had four steps and was kept deliberately simple.",
          "The attack began on 1 July 1916.",
          "The first day was a disaster for the British army.",
          "The battle went on until November 1916."
        ]
      },
      sections: [
        {
          heading: "A war of attrition",
          paragraphs: [
            "By 1916 the war had become a war of attrition. That means the way to victory was no longer a single brilliant battle, but gradually wearing down and weakening the enemy army until it surrendered or collapsed. The British and French realised they would have to grind the German army down, and they were confident that they had more of what that takes: more weapons, more food and more soldiers.",
            "To make sure of the soldiers, Britain passed the Conscription Act in January 1916. Conscription meant that men aged between 18 and 41 could be forced by law to join the British army. The advantage was obvious: the army grew enormously. The disadvantage took longer to show. The new soldiers were inexperienced and had not had long military training.",
            "Keep both sides of that in mind. Attrition is a strategy that spends lives on purpose, and the men it was about to spend had mostly been civilians a few months earlier."
          ],
          tip: "Define a war of attrition in your own words before you use it: wearing the enemy down until they collapse. Then say what it means for the men doing the wearing down."
        },
        {
          heading: "Why the Somme, and why July?",
          paragraphs: [
            "The Allies had been planning a big year of attacks for 1916, on the Western Front in France, on the Eastern Front in Russia, and in the Balkans. The French had been planning a major offensive against the Germans near the River Somme. Then, in February 1916, the Germans attacked the French at Verdun, and the French army came close to collapse. From February 1916 the British army was in charge of the Somme offensive instead.",
            "That gives the battle its two purposes, and your lesson wants both of them. The first was to divert the German army away from Verdun, to relieve the French. The second was to inflict heavy losses on the German army, in men and in resources, because the Allies believed they could afford such losses better than Germany could.",
            "General Douglas Haig led the British army at the Somme. The French, desperate at Verdun, pushed him to begin as soon as possible, and the attack began on 1 July 1916. The battle lasted until November 1916."
          ],
          tip: "Two purposes, every time: relieve Verdun, and wear the German army down. An answer with only one of them has only half the aim of the battle."
        },
        {
          heading: "Haig's four-step plan",
          paragraphs: [
            "Conscription had given Haig many more soldiers, but they had almost no experience and very little military training, so he kept his plan simple. Step one was to wear the German army and its defences down with constant shelling and bombardment before the attack. Step two was to send his men walking across no-man's-land, along a front about 14 miles long, into the German trenches. Step three was to defeat the Germans at the Somme. Step four was to meet up with the French army and secure Verdun.",
            "Step one is the step everything else rested on. The German trenches were bombarded for seven days in a row, and nearly 2 million shells were fired at them. Haig believed the shelling would cut the barbed wire in front of the German trenches, destroy the trenches themselves, and destroy the bunkers the German soldiers were sheltering in. In short, he believed it would clear a path.",
            "That belief shaped step two. Haig ordered his men to cross in broad daylight, so that the gunners behind them could see where they were firing, and to walk forward in a straight line, because he had been told the German machine guns were destroyed. Those orders only make sense if step one worked."
          ],
          worked: {
            q: "Explain the importance of step one in Haig's plan, and what would happen if it failed.",
            steps: [
              "Say what step one was: seven days of shelling to cut the wire and destroy the German trenches and bunkers.",
              "Say what step one made possible: if the wire was cut and the defenders gone, the men could walk across and take the trenches.",
              "Say what depends on it: the orders to cross in daylight, in a straight line, were only sensible if the defences had been destroyed.",
              "Say what happens if it fails: the men would be walking slowly, in the open, towards wire that was still standing and machine guns that still worked."
            ],
            answer: "Step one was supposed to clear the path; every later step assumed it had. If it failed, the plan sent men walking in the open towards uncut wire and working machine guns."
          },
          tip: "A four-step plan is only as strong as its first step. Say that in your answer and you have the examiner's point already."
        },
        {
          heading: "Plan and reality",
          paragraphs: [
            "The bombardment did not do what Haig expected. In many places the barbed wire was not cut, and the German soldiers were not dead: a great many had sheltered deep underground, and when the shelling stopped they came back up to their machine guns. The one thing seven days of shelling certainly did was tell the Germans that an attack was coming.",
            "On 1 July 1916 more than 100,000 British troops climbed out and walked into no-man's-land. On that first day about 57,000 British soldiers were injured or killed, nearly 20,000 of them killed. It was the bloodiest single day in the history of the British army, and every one of those figures is a family. Many historians look at that first day and conclude that the Somme was a failure.",
            "Other historians ask you to look at the whole battle, from July to its end in November 1916. Over those months the pressure on Verdun was lifted and the French army was saved; the German army suffered very heavy losses of its own, which was the second purpose of the attack; the British gained about 7 miles of ground; new technology, including the tank, was tried out for the first time; and an inexperienced army learned, at a terrible price, how this kind of war had to be fought."
          ],
          tip: "When you judge the Somme, say which timescale you are judging: the first day, or July to November. Historians disagree partly because they are answering different questions."
        }
      ],
      gate: [
        { kind: "mcq", q: "What does a war of attrition mean?", options: ["Wearing the enemy down little by little until they surrender or their army collapses", "Winning with one fast and decisive battle", "Defending a line of trenches without ever attacking", "Attacking only at night to avoid being seen"], answer: 0, why: "Attrition means grinding the enemy down in men and supplies until they can no longer fight. It was the strategy both alliances used by 1916.",
          feedback: [
            "",
            "That is what the generals expected in 1914, and it is the opposite of attrition. By 1916 nobody believed in one decisive battle any more.",
            "Attrition is not the same as sitting still. It means attacking again and again to wear the other side down, which is exactly what the Somme was meant to do.",
            "Night attacks are a tactic, not a strategy. Attrition is the larger idea of wearing the enemy down until they collapse."
          ] },
        { kind: "gap", q: "In January 1916 Britain passed the ___ Act, so that men aged 18 to 41 could be made by law to join the army.", answer: "Conscription", options: ["Conscription", "Attrition", "Alliance"], why: "The Conscription Act of January 1916 forced men aged 18 to 41 to join up, which gave Haig a much bigger but far less experienced army.",
          feedback: {
            "Attrition": "Attrition is the strategy of wearing the enemy down, not a law. The law that forced men to join the army was the Conscription Act.",
            "Alliance": "An alliance is an agreement between countries. The law of January 1916 that forced British men to join the army was the Conscription Act."
          } },
        { kind: "mcq", q: "What were the two purposes of the Battle of the Somme?", options: ["To draw the German army away from Verdun, and to inflict heavy losses on it", "To capture Berlin and end the war before the winter", "To test the tank and to train Britain's new recruits", "To defend the Belgian coast against a German landing"], answer: 0, why: "The Somme was meant to relieve the French at Verdun and to wear the German army down. Both purposes come from the strategy of attrition.",
          feedback: [
            "",
            "No one at the Somme expected to reach Berlin. The aims were much nearer: relieve the French at Verdun, and inflict heavy losses on the German army.",
            "The tank was tried during the battle and the new army certainly gained experience, but neither was a purpose of the attack. Those are things that came out of it.",
            "The Belgian coast was at the northern end of the Western Front, far from the River Somme. The purposes were Verdun and heavy German losses."
          ] }
      ],
      modules: [
        {
          title: "Haig's plan in order",
          task: {
            kind: "order",
            q: "Put the four steps of Haig's plan for the Somme in the order he intended them.",
            items: [
              "Wear the German army and its defences down with shelling and bombardment",
              "Send British troops walking across no-man's-land to the German trenches",
              "Defeat the German army at the Somme",
              "Meet up with the French army and secure Verdun"
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask which step needs nothing else to have happened first. That one comes before the men leave their trenches.",
                "The men cannot cross no-man's-land until the path has been cleared.",
                "The Germans cannot be defeated until the British have reached their trenches.",
                "Verdun is the furthest goal, so it must be last."
              ],
              example: {
                q: "Put these steps of a school fire evacuation in order: the registers are checked on the field; the alarm sounds; classes walk to the field; the all-clear is given.",
                steps: ["Nothing happens until the alarm sounds.", "Then the classes walk out.", "Registers are checked once everyone is on the field.", "The all-clear comes last."],
                answer: "the alarm sounds; classes walk to the field; the registers are checked on the field; the all-clear is given"
              }
            },
            core: { hint: "Shelling, crossing, defeating, then the French. Each step depends on the one before it." },
            stretch: { extend: "Explain which step you think carried the biggest risk of failure, and what Haig could have done differently if he had known." }
          },
          explain: "Say, in one sentence, why the order of these four steps matters as much as the steps themselves.",
          why: "Bombardment first, then the walk across no-man's-land, then the defeat of the Germans at the Somme, then the meeting with the French at Verdun. The plan is a chain: if the first link breaks, every later step is attempted in conditions it was not designed for."
        },
        {
          title: "Three shells a second",
          task: {
            kind: "numeric",
            q: "Your lesson says the guns fired 1,783,000 shells during the bombardment, which lasted seven days, or 604,800 seconds. On average, how many shells were fired each second? Give your answer to the nearest whole number.",
            answer: 3, tolerance: 0, units: "shells per second",
            why: "1,783,000 divided by 604,800 is about 2.9, which rounds to 3. Your lesson's figure of three shells a second is correct, and it helps explain why Haig expected the German defences to be destroyed.",
            check: "round(1783000 / 604800)",
            misconceptions: [
              { answer: 2, says: "You have cut the decimal off instead of rounding. The division gives about 2.9, and 2.9 rounds up to 3, not down to 2.", check: "1783000 // 604800" },
              { answer: 7, says: "Seven is the number of days the bombardment lasted, not the number of shells each second. Divide the shells by the seconds instead.", check: "604800 // 86400" }
            ]
          },
          contexts: [
            { label: "A German soldier counting", q: "A German soldier sheltering in a deep bunker heard shells land without a break for seven days, which is 604,800 seconds. If 1,783,000 shells were fired, how many landed each second on average? Give your answer to the nearest whole number.", check: "round(1783000 / 604800)" },
            { label: "A gunner's notebook", q: "A British gunner works out how hard his battery had worked: 1,783,000 shells fired over 604,800 seconds of bombardment. How many shells per second is that, to the nearest whole number?", check: "round(1783000 / 604800)" }
          ],
          levels: {
            support: {
              steps: [
                "Decide which operation you need. Shells in total, shared over seconds, means divide.",
                "Write it down: 1,783,000 divided by 604,800.",
                "Work out the division: it comes to a little under 3.",
                "Round to the nearest whole number, remembering that 2.9 rounds up."
              ],
              example: {
                q: "A conveyor belt carries 95 boxes in 60 seconds. How many boxes per second is that, to the nearest whole number?",
                steps: ["Divide the boxes by the seconds: 95 divided by 60.", "That gives about 1.6.", "1.6 rounds up to 2."],
                answer: "2 boxes per second",
                checks: [{ expr: "round(95 / 60)", value: 2, tol: 0 }]
              }
            },
            core: { hint: "Divide the shells by the seconds, then round. Do not use the number of days." },
            stretch: { extend: "Three shells a second for seven days still left much of the wire uncut. Explain what that tells you about the German defences, and about the information Haig was given." }
          },
          explain: "Say, in one sentence, why the sheer number of shells made Haig confident, and why that confidence turned out to be misplaced.",
          why: "1,783,000 shells over 604,800 seconds is about 2.9 shells a second, which rounds to 3. The figure explains Haig's confidence: nobody had ever fired so much. It also sets up the hardest question of the unit, which is how so much shelling could leave the wire uncut and the machine guns working."
        },
        {
          title: "Success or failure?",
          task: {
            kind: "written",
            q: "Was the Battle of the Somme a success or a failure for the British army? Write a PEE paragraph of five to seven sentences giving your judgement.",
            criteria: [
              "I state my judgement clearly in the first sentence.",
              "I give at least two pieces of evidence from the unit, and at least one of them is a figure or a date.",
              "I explain how each piece of evidence supports my judgement, rather than just listing it.",
              "I deal with the other side of the argument in at least one sentence, using however.",
              "I say which timescale I am judging: the first day, or the whole battle to November 1916."
            ],
            model: "Overall I think the Battle of the Somme was a failure for the British army, although not a complete one. The first day, 1 July 1916, cost about 57,000 British soldiers killed or injured, which made it the bloodiest single day in the army's history, and the plan that produced it had simply not worked: seven days of shelling left much of the barbed wire uncut and the German machine guns in place. This shows a failure of planning as well as of luck, because the orders to walk across in daylight in a straight line depended on defences that had not in fact been destroyed. However, if the whole battle to November 1916 is judged rather than the first day, there were real successes: the German attack on Verdun was called off and the French army was saved, the German army suffered very heavy losses of its own, and the British gained about 7 miles of ground and learned how to use new weapons such as the tank. In my judgement the two purposes of the battle were achieved, so it cannot be called a total failure, but the cost of achieving them was so high, and so much of it came from mistakes that could have been avoided, that failure is still the fairer word."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1, point: Overall, the Battle of the Somme was a success or a failure for the British army. Choose one.",
                "Sentences 2 and 3, evidence: give two pieces of evidence, one of them a figure or a date.",
                "Sentence 4, explain: say how your evidence shows what you claimed.",
                "Sentences 5 and 6: start with However and give the other side, then finish by saying which timescale you judged."
              ],
              example: {
                q: "Was the Schlieffen Plan a success or a failure for Germany? Write a point, evidence and explanation, with one however sentence.",
                steps: ["Point: it was a failure.", "Evidence: France was not beaten in six weeks and by December 1914 the front had stopped moving.", "Explain: the whole plan depended on speed, so once the advance stopped the plan had failed.", "However: it did bring Germany deep into France and Belgium, which it held for years."],
                answer: "Judgement, two pieces of evidence, an explanation, and one however sentence for the other side."
              }
            },
            core: { hint: "Judgement first, two pieces of evidence, then however. Say whether you are judging the first day or the whole battle." },
            stretch: { extend: "Rewrite your judgement from the point of view of the French army at Verdun in July 1916. Does the same evidence lead to the same answer?" }
          },
          explain: "Say, in one sentence, which piece of evidence did most to decide your judgement.",
          why: "Either judgement can be argued well. The strongest answers do three things: use a figure or a date as evidence, explain rather than list, and say which timescale is being judged, because the first day and the whole battle really do point in different directions."
        }
      ]
    },

    /* ───────────── 6 · butcher or hero? interpretations of Haig ───────────── */
    {
      key: "interpretations", n: 6, title: "Butcher or hero? Interpretations of General Haig",
      lead: "What a historical interpretation is, the evidence on both sides of the argument about Haig, what the lions led by donkeys idea claims, and how to answer an interpretation question.",
      covers: [4, 5],
      pretext: {
        words: [
          { word: "interpretation", means: "a judgement a historian forms about the past, using evidence", sentence: "Two historians can read the same evidence and reach a different interpretation." },
          { word: "butcher", means: "here, a harsh word for a commander blamed for needless deaths", sentence: "Calling Haig a butcher is a judgement, not a fact." },
          { word: "casualties", means: "soldiers killed, wounded or missing", sentence: "The casualties of the first day were the heaviest in the army's history." },
          { word: "lions led by donkeys", means: "the idea that brave soldiers were let down by poor commanders", sentence: "The lions led by donkeys idea is popular, but many historians now reject it." },
          { word: "convincing", means: "believable, because the evidence supports it", sentence: "Say which interpretation you find more convincing, and why." }
        ],
        passage: [
          "Historians use evidence to form judgements about the past.",
          "These judgements are called interpretations.",
          "Two historians can study the Somme and disagree.",
          "That is because they choose different things to focus on.",
          "One may look at the casualties of the first day.",
          "Another may look at the whole war effort.",
          "Some historians call General Haig a butcher.",
          "They blame his plan and his old-fashioned tactics for needless deaths.",
          "Others point out that he was told when and where to attack.",
          "They add that both sides used the same methods.",
          "One popular idea is called lions led by donkeys.",
          "It says brave soldiers were let down by poor leaders.",
          "Your job is to decide which interpretation convinces you."
        ]
      },
      sections: [
        {
          heading: "What is an interpretation?",
          paragraphs: [
            "Historians use evidence to form their judgements about the past, and those judgements are called interpretations. An interpretation is not the same thing as a source. A source is something left behind from the time, such as a letter or a photograph. An interpretation is what a historian makes of the sources, often many years later.",
            "When you study an interpretation, your lesson gives you three questions. What is the historian arguing? How did they come to that judgement? Do you agree or disagree? The second question is the one pupils most often skip, and it is where the marks are.",
            "Historians disagree about Haig because they choose different things to focus on. One may concentrate on the casualties, another on the short-term or long-term impact of the Somme, another on the overall war effort, another on the use of new technology, and another on tactics. The two interpretations on your handout, by Gary Sheffield and by John Laffin, reach opposite judgements about the same man. Interpretation 1 defends Haig."
          ],
          tip: "Before you agree or disagree, say what the historian is arguing and what they have chosen to focus on. That one sentence shows you understand how interpretations are built."
        },
        {
          heading: "Butcher or hero? Weighing the evidence",
          paragraphs: [
            "Butcher is a harsh word, and it is meant to be. It accuses Haig of needlessly sending thousands of soldiers to their deaths at the Somme, and it blames his flawed plan and old-fashioned tactics for those deaths. The case against him is strong. About 420,000 British soldiers became casualties over the course of the battle. His men were ordered to walk slowly, in daylight and in a straight line, towards wire that had not been cut and machine guns that had not been destroyed. His cavalry was useless in the mud. And he directed the battle from a headquarters a long way behind the line.",
            "The case for him is also real, and your lesson sets the two out side by side. Haig did not choose where or when to fight: the French at Verdun were close to collapse and demanded that the attack begin. The bombardment was the heaviest in history, 1,783,000 shells, about three a second, and Haig had been told that the wire was cut and the German defenders dead. Attrition was the method both armies used, so his methods were not unusual for the time. Cavalry had been a useful weapon in every earlier war. And about 600,000 German soldiers were killed or wounded, which was the second purpose of the battle.",
            "Notice what is happening here. The same battle, and in places the very same evidence, is being used to argue both ways. The 1,783,000 shells are evidence of carelessness if you focus on the result, and evidence of thorough preparation if you focus on the intention."
          ],
          worked: {
            q: "Take one piece of evidence, the seven-day bombardment, and show how it can be used on both sides of the argument about Haig.",
            steps: [
              "State the evidence plainly: the German trenches were shelled for seven days, and 1,783,000 shells were fired.",
              "Use it against Haig: seven days of shelling warned the Germans that an attack was coming, and still left the wire uncut.",
              "Use it for Haig: no commander had ever been given such a bombardment, and he was told it had destroyed the defences.",
              "Judge between them: say which use you find more convincing, and give the reason for your choice."
            ],
            answer: "Against Haig it shows a failed plan and a warned enemy; for Haig it shows thorough preparation and false information. A judgement has to choose, and give a reason."
          },
          tip: "If you can argue a piece of evidence both ways, you understand it. Then commit to one side and say why."
        },
        {
          heading: "Lions led by donkeys",
          paragraphs: [
            "Since the war ended, some historians have argued that the First World War saw lions led by donkeys. The idea is that the soldiers of the British army were brave warriors, the lions, who were led and let down by bad commanders, the donkeys. In that picture, Haig is a donkey.",
            "There is evidence for it. Haig's four-step plan was very simple, and he ordered his men to cross no-man's-land in broad daylight in a straight line. The bombardment did not do what he expected, and the attack went ahead anyway. The first day of the Somme remains the bloodiest in the history of the British army.",
            "There is also evidence against it. The Conscription Act had handed Haig an army of men with almost no training, which limited what he could ask them to do: walking in line was the one thing they could be relied on to manage. He was pressed into attacking at a time and place chosen by the French crisis at Verdun. His methods were the ones both sides were using. Many historians now argue that the phrase is too simple to be useful, which is why their minds have changed over time."
          ],
          tip: "When you use the phrase, explain it: lions are the soldiers, donkeys are the commanders. Then say whether you think the picture fits Haig."
        },
        {
          heading: "How to answer an interpretation question",
          paragraphs: [
            "Your lesson gives five success criteria for this kind of answer, and your assessment uses the same five. State the historian's opinion. Give evidence from the interpretation. Say whether you agree, partly agree or disagree. Give examples from your own knowledge. Explain how this shows Haig in a positive or a negative way.",
            "The sentence starters follow the same order. The interpretation argues that... The historian points to... I partly agree with this interpretation, because... From my own knowledge, I know that... This shows Haig in a positive or negative way because... You may use a short quotation from the interpretation your teacher gives you, or you may put the historian's point in your own words. Either is fine, as long as the point really is the historian's.",
            "One warning. Partly agree is a strong answer when it is argued, and a weak one when it is used to avoid deciding. If you partly agree, say which part you accept and which part you reject."
          ],
          tip: "Five criteria, in order: opinion, evidence, your view, own knowledge, explanation. Tick them off as you write."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is a historical interpretation?", options: ["A judgement a historian forms about the past, using evidence", "Something left behind from the time, such as a letter or a photograph", "A list of events in the order they happened", "A rule for how to set out a paragraph"], answer: 0, why: "An interpretation is a historian's judgement, built from evidence. A source is the evidence itself.",
          feedback: [
            "",
            "That is a source: the material left behind from the time. An interpretation is what a historian makes of the sources, usually much later.",
            "A list of events in order is a chronology. An interpretation goes further and argues about what the events mean.",
            "That describes a writing frame, which is useful but not history. An interpretation is a historian's judgement about the past, formed from evidence."
          ] },
        { kind: "gap", q: "Calling Haig a ___ accuses him of sending thousands of soldiers needlessly to their deaths.", answer: "butcher", options: ["butcher", "donkey", "hero"], why: "Butcher is the accusation about needless deaths. Donkey, from the lions led by donkeys idea, is the wider accusation of poor leadership.",
          feedback: {
            "donkey": "Donkey comes from the lions led by donkeys idea, and it accuses a commander of being a poor leader. The word that accuses him of needless deaths in particular is butcher.",
            "hero": "Hero is the opposite accusation, used by historians who defend Haig. The harsh word for a commander blamed for needless deaths is butcher."
          } },
        { kind: "mcq", q: "What does the phrase lions led by donkeys mean?", options: ["That brave British soldiers were let down by poor commanders", "That the British army was braver than the German army", "That the generals fought in the front line alongside their men", "That the war was won by new technology rather than by soldiers"], answer: 0, why: "The lions are the soldiers and the donkeys are the commanders who led them badly. Many historians now think the picture is too simple.",
          feedback: [
            "",
            "The phrase is not a comparison between the two armies. It compares the British soldiers with their own commanders: lions led by donkeys.",
            "The complaint is the opposite: that commanders such as Haig directed the battle from headquarters far behind the line while their men went forward.",
            "Technology is a separate argument about the Somme. The lions and donkeys phrase is about brave soldiers and the commanders who led them."
          ] }
      ],
      modules: [
        {
          title: "The battle in five events",
          task: {
            kind: "order",
            q: "Put the key events of the Battle of the Somme in order.",
            items: [
              "In 1916 the Allies plan a major attack to wear the German army down, as part of their war of attrition",
              "In February 1916 the Germans attack the French at Verdun, and the French demand British help",
              "On 1 July 1916 the British attack begins, and the first day is a disaster",
              "Through the months that follow, the British gain experience and try out new technology such as the tank",
              "By November 1916 the battle is over, about 7 miles of ground has been taken and the French have been saved at Verdun"
            ]
          },
          levels: {
            support: {
              steps: [
                "Three of the five cards carry a month. Put those three in calendar order first: February, July, November.",
                "The planning must come before the German attack on Verdun changed the plans.",
                "The months of learning and new technology come after the first day and before the end.",
                "Read your sequence back as a story and check it makes sense."
              ],
              example: {
                q: "Put these stages of a school production in order: the cast is chosen; the script is read; the last performance is given; the dress rehearsal is held.",
                steps: ["The script must be read before anyone is cast.", "Then the cast is chosen.", "The dress rehearsal comes before the performances.", "The last performance is last."],
                answer: "the script is read; the cast is chosen; the dress rehearsal is held; the last performance is given"
              }
            },
            core: { hint: "Plan, Verdun in February, the attack on 1 July, the months that follow, the end in November." },
            stretch: { extend: "Which of these five events would you leave out if you had only four cards, and what would your summary lose?" }
          },
          explain: "Say, in one sentence, why the German attack on Verdun has to come before 1 July 1916 in this story.",
          why: "The Allies planned the attack; the Germans struck at Verdun in February 1916 and the French demanded help; the British attacked on 1 July 1916; the battle ground on through the autumn; and it ended in November 1916 with about 7 miles gained and Verdun relieved."
        },
        {
          title: "Which success criterion is this?",
          task: {
            kind: "match",
            q: "Match each sentence from an interpretation answer to the success criterion it meets.",
            pairs: [
              ["The historian argues that Haig should not be judged only as a butcher", "State the historian's opinion"],
              ["The interpretation points to the shortage of trained soldiers after conscription", "Give evidence from the interpretation"],
              ["I partly agree with this interpretation", "Say whether you agree or disagree"],
              ["I know that the French at Verdun were close to collapse and demanded help", "Give an example from your own knowledge"],
              ["This shows Haig in a more positive light, because many of his choices were made for him", "Explain how this shows Haig positively or negatively"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Look for the signal words at the start of each sentence.",
                "The historian argues tells you the sentence is about the historian's opinion.",
                "I know that tells you the sentence is own knowledge; I partly agree tells you it is your view.",
                "The sentence that begins This shows is the explanation, and it always comes last."
              ],
              example: {
                q: "Which criterion does this sentence meet: The interpretation says that the methods Haig used were normal for the time?",
                steps: ["It begins with The interpretation says.", "So it is reporting something from the interpretation itself.", "That is evidence from the interpretation."],
                answer: "Give evidence from the interpretation."
              }
            },
            core: { hint: "The signal words do the work: the historian argues, the interpretation points to, I partly agree, I know that, this shows." },
            stretch: { extend: "Write one more sentence for each of the five criteria, this time arguing the opposite case about Haig." }
          },
          explain: "Say, in one sentence, why the explanation sentence has to come after the evidence and the own knowledge.",
          why: "Opinion, evidence from the interpretation, your own view, own knowledge, explanation. The order matters because each step gives the next one something to work with."
        },
        {
          title: "How far do you agree?",
          task: {
            kind: "written",
            q: "The first interpretation on your handout defends General Haig, arguing that he faced a very difficult situation at the Somme in 1916. How far do you agree with it? Write one paragraph that meets all five success criteria.",
            criteria: [
              "I state what the historian's opinion is, in my own words or with a short quotation from my handout.",
              "I give evidence from the interpretation itself, not only from my own knowledge.",
              "I say clearly whether I agree, partly agree or disagree, and if I partly agree I say which part.",
              "I give at least two examples from my own knowledge, including one date or figure.",
              "I explain how what I have said shows Haig in a positive or a negative way."
            ],
            model: "The interpretation argues that General Haig should not be judged harshly, because the situation he faced in 1916 was extremely difficult. The historian points to the state of the British army after conscription: Haig suddenly had far more soldiers, but most of them had hardly been trained. I partly agree with this interpretation. From my own knowledge, the Germans had attacked the French at Verdun in February 1916 and the French army was close to collapse, so Haig was told when and where to attack and could not wait until his men were ready; the bombardment of 1,783,000 shells was also the heaviest ever fired, and he was told it had destroyed the German defences. This shows Haig in a more positive light, because several of the decisions he is blamed for were in fact made for him, or made on information that turned out to be wrong. However, I do not agree entirely. The order to walk forward in daylight in a straight line was his own, and about 57,000 British soldiers became casualties on the first day, which suggests that a commander who had checked the wire himself might have changed the plan."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: The interpretation argues that... Say what the historian thinks about Haig.",
                "Sentence 2: The historian points to... Give one thing from the interpretation itself.",
                "Sentence 3: I agree, partly agree or disagree with this interpretation.",
                "Sentences 4 and 5: From my own knowledge, I know that... Give two examples, one with a date or a figure. Then finish with This shows Haig in a positive or negative way because..."
              ],
              example: {
                q: "An interpretation argues that the trenches, not the generals, made the First World War so costly. How far do you agree? Plan the five steps.",
                steps: ["Opinion: the historian blames the trench system rather than the commanders.", "Evidence from the interpretation: it points to the protection a trench gave to defenders.", "Your view: partly agree.", "Own knowledge: by December 1914 neither side could break through, and machine guns favoured the defender; but the orders to attack in daylight were still the generals' own."],
                answer: "A plan with all five criteria named, ready to be written up as one paragraph."
              }
            },
            core: { hint: "Five criteria in order. Use at least one date or figure in your own knowledge, and if you partly agree, say which part you reject." },
            stretch: { extend: "Write a second paragraph from the opposite point of view, and then one sentence saying which of your two paragraphs you find more convincing." }
          },
          explain: "Say, in one sentence, which piece of your own knowledge did the most to decide how far you agreed.",
          why: "A full answer states the historian's opinion, quotes or reports evidence from the interpretation, takes a clear position, supports it with specific knowledge, and explains what it all shows about Haig. Partly agree is the strongest position only when the answer says which part it rejects and why."
        }
      ]
    }
  ],

  sources: {
    deckDump: "hi_y08_topic_5_the_battle_of_the_somme.txt",
    decksUsed: [
      "L1 The Causes of WW1 / L1 The Causes of WW1 2026.pptx",
      "L1 The Causes of WW1 / Long-Term Causes of WW1.pptx",
      "L1 The Causes of WW1 / Franz Ferdinand HW slide.pptx",
      "L2 Trench Warfare / L2 Trench Warfare 2026.pptx",
      "L3 The Battle of the Somme - victory or defeat / L3 Battle of the Somme 2026.pptx",
      "L3 The Battle of the Somme - victory or defeat / GR Task on Haig & Somme.pptx",
      "L3 The Battle of the Somme - victory or defeat / British Empire Soldiers HW.pptx",
      "L3 The Battle of the Somme - victory or defeat / L3 Somme HW.pptx",
      "L4 General Haig - butcher or hero / L4 Progress Check and Haig 2026.pptx",
      "L4 General Haig - butcher or hero / Haig Interpretations.pptx",
      "L5 Review / L5 Review UPDATED.pptx",
      "L5 Review / L5 Review.pptx"
    ],
    notes: "Lesson sequence, titles, learning objectives and key words come from the department's five lesson folders (L1-L5). From the decks: the two alliances and the declaration of war on 4 August 1914; the long-term and short-term definitions; the four long-term causes and the questions the Long-Term Causes deck asks about each (the naval race, the alliance of 1894 and Britain joining in 1907, the Morocco Crisis of 1911, the annexation of Bosnia in 1908 and the Balkans in 1912); the assassination of 28 June 1914, the Blank Cheque, the July Crisis and the timeline task; the Schlieffen Plan and the creation of the Western Front by December 1914 with its 400-plus miles; the definition of a trench, the zig-zag, dugouts as medical posts, the feature definitions from the trench-features review (parapet, sandbags, duckboards, firestep, dugout, sump, no-man's-land), the four lines of the system with 80 metres, 100 metres and the 15, 10 and 30 per cent shares; the items in a trench, the winter conditions and the constant problems; the four major medical problems and the trench-foot solution of 1915 (socks three times a day, whale oil); the war of attrition, the Conscription Act of January 1916 and the ages 18 to 41; the German attack on Verdun in February 1916 and the two purposes of the Somme; Haig's four-step plan; the seven-day bombardment and nearly 2 million shells; 1 July 1916, more than 100,000 troops, about 57,000 casualties with nearly 20,000 killed, the bloodiest single day; the battle's end in November 1916 with about 7 miles gained, Verdun saved, heavy German losses and the first use of tanks; the butcher label and the issue table (where and when to fight, the death rate of about 420,000 British and about 600,000 German casualties, the 1,783,000 shells at three a second, the walking tactic, the cavalry); the lions led by donkeys idea; the three questions on interpretations and the five success criteria. All explanations, questions, worked examples, model paragraphs, support examples and contexts are original. NOTHING is quoted: the interpretation printed on the deck (a historian writing in 1991), the two handout interpretations by Gary Sheffield and John Laffin, and the department's own model answer are all in copyright, so they are paraphrased and their distinctive phrases are fingerprinted and banned in verify.py, which also fails on any quotation mark in pupil text. The deck quotes no war poetry, so none is quoted here; Owen and Sassoon fingerprints are banned. Casualty figures appear only as stated facts in prose and never as the answer to a gate item, a gap, a numeric drill or an order or match card. Facts the deck's own questions need but the dump does not print (who annexed Bosnia, the alliance of 1894 and the Entente of 1907, what happened in the Balkans in 1912, the steps of the July Crisis between the Blank Cheque and the invasion of Belgium, the causes of trench fever, gas and shell shock, 1918 as the year the war ended) are supplied from standard reference knowledge, held in verify.py's CHRONOLOGY so they cannot drift, and listed for the Head of History in NOTES.md. astra/2: per-option feedback on every mcq and gap, misconceptions with checks on both numeric items, explain prompts on all 18 modules, three context modules (chapters 1, 4 and 5), glossary chapters, four Connections groups, spacing; no widgets, no constellation, no pretext.l1."
  }
};
