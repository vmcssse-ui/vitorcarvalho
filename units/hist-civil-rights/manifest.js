// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 History · Year 9 Topic 4: US Civil Rights · schema astra/2
//
// MACHINE CHECKS (run `python3 verify.py` in this folder):
//   every date, name and sequence is held in an independent CHRONOLOGY table in verify.py; every four-digit year and
//   every large number in pupil text must be in that table or the FACTS set; every "order" task is compared with the
//   canonical sequences held there and must be chronological; every mcq / gap answer is compared with the independent
//   answer key; numeric items carry `check` and `misconceptions` (each with its own `check`); contexts share the task's
//   answer by construction.
//   COPYRIGHT GUARD: Martin Luther King (d. 1968), Malcolm X (d. 1965), President Johnson (d. 1973) and the deck's
//   "Historian A" interpretation are all in copyright. Nothing by any of them is quoted anywhere in this unit: their
//   arguments are paraphrased and attributed, and verify.py carries a fingerprint list of their best-known phrases
//   (including the title phrase of King's 1963 speech, which this unit therefore names by its occasion, the March on
//   Washington) and fails if any appears. The ONLY quoted words in the unit are two fragments of President Lincoln's
//   Emancipation Proclamation (1863), a public-domain government document, exactly as the department's deck prints them.
//   Language guard: "Black Americans" / "Black people", never "blacks" as a noun; no dated or racist racial term
//   anywhere (the Proclamation fragment is the one place "slaves" appears, and the lint strips corpus text before
//   testing); the deck's misspellings are banned; British spelling.
//   Agency guard: the people who organised are the subjects of their own history — verify.py requires the named
//   organisers and the verbs of organising, and the deck's own model answers are fingerprinted and banned.
//   astra/2: per-wrong-option `feedback` on every mcq/gap; `misconceptions` on every numeric; `explain` on every module;
//   `glossary[].chapter`; `connections` 4 × 4 ⊂ glossary; `meta.spacing [2,7,30]`; no constellation; no pretext.l1.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["hist-civil-rights"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "hist-civil-rights",
    subjectKey: "history",
    subject: "History",
    board: "AQA",
    spec: "KS3 → 8145",
    specRef: "KS3 Year 9 Topic 4: US Civil Rights — foundations for GCSE History 8145 (significance, interpretations and source skills)",
    year: 9,
    tier: "KS3",
    title: "US Civil Rights",
    sub: "How segregation was built into American law once slavery ended, and how Black Americans organised in the courts, on the buses and on the streets to pull it down.",
    bigQuestion: "How did Black Americans win their civil rights, and which campaigns and leaders mattered most?",
    lessonCount: 7,
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Segregation in America", question: "How did the end of slavery change the lives of African Americans, and what were the Jim Crow laws?", keywords: ["emancipation", "civil rights", "segregation", "lynching", "Jim Crow laws", "Ku Klux Klan"] },
    { n: 2, title: "Fighting Against Segregation in the 1950s", question: "How did Rosa Parks and the Little Rock Nine try to end segregation, and how significant were they?", keywords: ["Rosa Parks", "Montgomery Bus Boycott", "Little Rock Nine", "separate but equal", "NAACP", "Supreme Court"] },
    { n: 3, title: "Martin Luther King", question: "What part did King play in the early campaigns, and how important was the March on Washington?", keywords: ["civil disobedience", "non-violent", "sit-in", "Albany", "Birmingham", "March on Washington"] },
    { n: 4, title: "Selma: the fight for voting rights", question: "Why did the movement still have to march at Selma after the Civil Rights Act of 1964?", keywords: ["Civil Rights Act", "literacy test", "register to vote", "Selma", "Bloody Sunday", "Voting Rights Act"] },
    { n: 5, title: "How did Malcolm X fight for Civil Rights?", question: "How did Malcolm X fight for civil rights, and how did his ideas change over time?", keywords: ["Malcolm X", "Nation of Islam", "self-defence", "black power", "pilgrimage", "limitations"] },
    { n: 6, title: "Martin Luther King vs. Malcolm X", question: "How were the two leaders different, and which of them had the greater impact?", keywords: ["impact", "compare", "interpretation", "evidence", "significance", "judgement"] },
    { n: 7, title: "US Civil Rights: Assessment", question: "Can you say how far you agree with a historian's interpretation of a Civil Rights leader?", keywords: ["interpretation", "agree", "evidence", "explain", "link", "success criteria"] }
  ],

  glossary: [
    { term: "civil rights", means: "The rights to vote, to an education and to fair treatment, held equally by every citizen.", chapter: "after-slavery" },
    { term: "emancipation", means: "Being set free. In the United States it meant the legal end of slavery.", chapter: "after-slavery" },
    { term: "Union", means: "The states that stayed together as the United States in the Civil War of 1861 to 1865.", chapter: "after-slavery" },
    { term: "Confederacy", means: "The new country formed in 1861 by the eleven Southern states that left the United States.", chapter: "after-slavery" },
    { term: "amendment", means: "A change added to a country's constitution. The Thirteenth Amendment abolished slavery in the United States.", chapter: "after-slavery" },
    { term: "segregation", means: "Keeping people apart because of their race, in schools, buses, shops and public places.", chapter: "jim-crow" },
    { term: "Jim Crow laws", means: "State laws in the American South that made segregation legal and kept Black Americans down.", chapter: "jim-crow" },
    { term: "white supremacy", means: "The false belief that white people should hold power over everyone else, and the violence used to keep it.", chapter: "jim-crow" },
    { term: "poll tax", means: "A charge a person had to pay before they were allowed to vote, used to keep poor Black citizens off the register.", chapter: "jim-crow" },
    { term: "separate but equal", means: "The rule, set by the Supreme Court in 1896, that segregation was legal if both races were given the same facilities.", chapter: "fighting-1950s" },
    { term: "boycott", means: "Refusing to buy or use something in order to force a change.", chapter: "fighting-1950s" },
    { term: "NAACP", means: "The National Association for the Advancement of Coloured People, the organisation that took segregation to court.", chapter: "fighting-1950s" },
    { term: "civil disobedience", means: "Refusing, peacefully and on purpose, to obey a law you believe is unjust.", chapter: "king" },
    { term: "literacy test", means: "A reading test an official set before letting someone vote, marked unfairly to fail Black applicants.", chapter: "selma" },
    { term: "register to vote", means: "To get your name on the official list of voters. Without it you cannot vote, however old you are.", chapter: "selma" },
    { term: "interpretation", means: "A historian's argument about the past, built from evidence and open to being tested.", chapter: "malcolm-x" }
  ],

  // Connections game: 4 groups × 4 terms, all 16 glossary terms used exactly once.
  connections: [
    { group: "The war and emancipation", terms: ["Union", "Confederacy", "amendment", "emancipation"] },
    { group: "How segregation was held in place", terms: ["segregation", "Jim Crow laws", "white supremacy", "separate but equal"] },
    { group: "The vote and the rights it protects", terms: ["civil rights", "poll tax", "literacy test", "register to vote"] },
    { group: "Ways people fought back, and how we judge them", terms: ["boycott", "NAACP", "civil disobedience", "interpretation"] }
  ],

  chapters: [
    /* ───────────── 1 · after slavery ───────────── */
    {
      key: "after-slavery", n: 1, title: "After slavery: the Civil War, emancipation, and the freedom that did not arrive",
      lead: "Why the United States went to war over slavery, how slavery was ended in law, and why being free in law did not make Black Americans free in life.",
      covers: [1],
      pretext: {
        words: [
          { word: "emancipation", means: "being set free", sentence: "Emancipation meant that nobody in the United States could be owned any more." },
          { word: "Union", means: "the states that stayed together as the United States", sentence: "The Union fought to bring the whole country back together." },
          { word: "Confederacy", means: "the new country made by the Southern states that left", sentence: "Eleven Southern states left the United States and formed the Confederacy." },
          { word: "amendment", means: "a change added to a country's constitution", sentence: "The Thirteenth Amendment made slavery illegal in the United States." },
          { word: "lynching", means: "a mob killing a person with no trial, usually by hanging", sentence: "Lynching was used to frighten whole communities, and the killers were rarely punished." }
        ],
        passage: [
          "Slavery ended across the British Empire in 1833.",
          "In the United States it did not end.",
          "The Southern states said their farms and their money depended on it.",
          "The Northern states said slavery was cruel and wrong.",
          "In 1861 the country went to war with itself.",
          "Eleven Southern states left and formed the Confederacy.",
          "The states that stayed were called the Union.",
          "The Union won, and slavery was abolished in law.",
          "That legal freedom is called emancipation.",
          "But freedom in law was not yet freedom in life.",
          "White Southerners built new laws to keep Black people apart.",
          "Mobs killed Black people without any trial at all.",
          "So this unit asks how Black Americans fought back, and won."
        ]
      },
      sections: [
        {
          heading: "Why the United States went to war over slavery",
          paragraphs: [
            "You studied the Transatlantic Slave Trade in Year 8. You know that Britain abolished slavery across its Empire in 1833, and began using its navy to stop slave ships at sea. The United States did not follow. Slavery carried on there for another thirty years.",
            "The country split over it. Southern states refused to end slavery, and argued that the tobacco and cotton plantations were the whole basis of their wealth. Northern states argued that slavery was inhumane and against the will of God, and that the South had to abolish it. Neither side would move.",
            "In 1860 Abraham Lincoln was elected President. He had campaigned to stop slavery spreading into new states, and the South read that as the first step towards abolishing it everywhere. In 1861 the United States Civil War began. A civil war is a war fought between people of the same country. Eleven Southern states left the United States and formed a new country, the Confederacy; the states that stayed were called the Union, because they were fighting to put the country back together."
          ],
          worked: {
            q: "Explain one reason why the American Civil War began.",
            steps: [
              "Make the point in one sentence: one reason the Civil War began was that the North and the South could not agree about slavery.",
              "Give the evidence from your lesson: the South said its economy depended on the tobacco and cotton trade, while the North said slavery was inhumane and against the will of God.",
              "Explain the link: when Lincoln was elected in 1860 on a promise to stop slavery spreading, the South believed abolition was coming, so eleven states left.",
              "Finish by saying what this shows: this shows the war began because a disagreement about slavery had become a disagreement about whether the country could stay together."
            ],
            answer: "Point, evidence, explain: the two halves of the country could not agree about slavery; the South defended it as the base of its economy and the North attacked it as wrong; Lincoln's election in 1860 convinced the South that abolition was next, so eleven states left in 1861."
          },
          tip: "When a question asks why a war began, give one reason and follow it through to the fighting. A list of reasons with no links scores less than one reason explained properly."
        },
        {
          heading: "Emancipation: the words, and what they did not reach",
          paragraphs: [
            "The Union won. Soon after the last battle at Appomattox, President Lincoln was shot and killed by the actor John Wilkes Booth. Peace came slowly, and by 1868 the Confederate states had returned to the Union. Returning meant accepting the Thirteenth Amendment to the American Constitution, which abolished slavery in the United States, and the Emancipation Proclamation, which had declared enslaved people in the rebelling states free.",
            "Your lesson prints the Proclamation's own words. It declared “that all persons held as slaves” in the rebelling states “are, and henceforward shall be free”. President Lincoln issued it in 1863, in the middle of the war, so at first it changed little on the ground: the Confederacy did not accept his authority. The words only became real where Union soldiers arrived.",
            "That is the pattern to hold on to. A law can be passed and still not be obeyed. You will meet it again in this unit in 1954, when the Supreme Court outlawed segregated schools, and in 1964, when Congress outlawed discrimination."
          ],
          quote: { text: "that all persons held as slaves … are, and henceforward shall be free", source: "President Lincoln's Emancipation Proclamation (1863), as printed in your lesson" },
          tip: "The Proclamation uses the word slaves because that is how an 1863 document spoke. When you write in your own words, write enslaved people: it says that this was done to them, not that it was what they were."
        },
        {
          heading: "Free in law, not free in life",
          paragraphs: [
            "Abolition changed the law, not the way most white Americans behaved. Ending slavery did not make Black Americans free in any full sense. They were free to leave a plantation, but not free to vote, to use the same school, or to expect the police and the courts to protect them.",
            "The sharpest proof of that was lynching: a mob killing a person with no trial, usually by hanging. On a hot August night in 1930, a crowd of 15,000 people came into the small town of Marion in Indiana to watch three Black teenagers be killed by a mob for a crime they were only supposed to have committed. The mob pushed into the police station and dragged them out, and the authorities did not stop it. Your lesson asks you to notice where a newspaper chose to print that story, and what that tells you.",
            "Your lesson also studies the killing of Emmett Till, a Black teenager murdered in the South in the 1950s, and asks what his story shows about how white Americans saw African Americans. The question to carry into the next chapter is the one your teacher puts on the board: had emancipation worked?"
          ],
          tip: "Hold two ideas at once in this topic: in law, slavery was over; in daily life, Black Americans were still unfree and still unprotected. Good answers say both."
        }
      ],
      gate: [
        { kind: "mcq", q: "What does emancipation mean?", options: ["Being set free", "Being paid a fair wage", "Being allowed to own land", "Being given the right to vote"], answer: 0, why: "Emancipation means being set free. In the United States it meant the legal end of slavery, nothing more and nothing less.",
          feedback: [
            "",
            "Fair pay is part of being treated justly, but emancipation is narrower than that: it means being set free. Many freed people worked for very little, and were still emancipated.",
            "Owning land is one thing a free person may do, but it is not what the word means. Emancipation means being set free, and most freed people owned nothing at all.",
            "The vote came later, and in the South it was taken away again. Emancipation means being set free; this unit is largely about how much freedom that did and did not bring."
          ] },
        { kind: "gap", q: "In 1861, eleven Southern states left the United States and formed the ___.", answer: "Confederacy", options: ["Confederacy", "Union", "Congress"], why: "The eleven states that left formed a new country, the Confederacy. The states that stayed were the Union.",
          feedback: {
            "Union": "You have them the wrong way round. The Union is the states that stayed together and fought to put the country back; the eleven that left formed the Confederacy.",
            "Congress": "Congress is the American parliament, the body that makes the laws, and it still exists today. The eleven Southern states that left in 1861 formed the Confederacy."
          } },
        { kind: "mcq", q: "Which amendment to the American Constitution abolished slavery in the United States?", options: ["The Thirteenth Amendment", "The First Amendment", "The Tenth Amendment", "The Fourteenth Amendment"], answer: 0, why: "The Thirteenth Amendment abolished slavery in the United States, and the returning Confederate states had to accept it.",
          feedback: [
            "",
            "The First Amendment is the famous one about free speech and religion, and it was written long before the Civil War. Slavery was abolished by the Thirteenth Amendment.",
            "There is no trick here about the Tenth: it is about the powers left to the states. The amendment that abolished slavery is the Thirteenth, the one the returning Confederate states had to accept.",
            "You are one along. The Fourteenth came after, and dealt with citizenship and equal protection. The amendment that abolished slavery itself is the Thirteenth."
          ] }
      ],
      modules: [
        {
          title: "From Lincoln's election to emancipation",
          task: {
            kind: "order",
            q: "Put these four events in the order your lesson gave them.",
            items: [
              "Abraham Lincoln is elected President of the United States (1860)",
              "Eleven Southern states leave the United States and form the Confederacy (1861)",
              "The Union wins the war, and Lincoln is shot and killed soon after the last battle (1865)",
              "The last Confederate states return to the Union and accept the Thirteenth Amendment (1868)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the event that is a cause, not a consequence. An election can happen with no war at all, so that is first.",
                "Next comes the South's reaction to that election: what did eleven states do?",
                "Then the fighting ends. Ask which side won, and what happened to the President.",
                "The last step is the one that could only happen once the war was over: the states coming back."
              ],
              example: {
                q: "Put these steps of a school fire drill in order: everyone lines up on the field; the alarm sounds; a teacher counts the class; pupils leave the building by the nearest exit.",
                steps: ["Nothing happens until the alarm sounds, so that is first.", "Then pupils leave by the nearest exit.", "Then they line up on the field.", "Only once they are lined up can a teacher count them."],
                answer: "the alarm sounds; pupils leave the building by the nearest exit; everyone lines up on the field; a teacher counts the class"
              }
            },
            core: { hint: "Start with the event that caused the others. Finish with the one that could only happen after the fighting had stopped." },
            stretch: { extend: "Explain why the Thirteenth Amendment mattered more, in the long run, than the Emancipation Proclamation of 1863." }
          },
          explain: "Say, in one sentence, why Lincoln's election in 1860 led eleven states to leave the country.",
          why: "Lincoln's election in 1860 convinced the South that abolition was coming; eleven states left in 1861 and formed the Confederacy; the Union won by 1865 and Lincoln was killed days later; by 1868 the Confederate states had returned, and accepting the Thirteenth Amendment was the price of returning."
        },
        {
          title: "Free in law, not in life",
          task: {
            kind: "written",
            q: "Explain one reason why the end of slavery did not make Black Americans free. Write one paragraph of four to six sentences.",
            criteria: [
              "I name one clear reason, using an example from the chapter.",
              "I explain what it meant for Black Americans in their daily lives.",
              "I use the word because at least once to link the reason to its effect.",
              "I use at least one key word correctly, such as emancipation, lynching or segregation.",
              "I finish by answering the question: how free were Black Americans in law, and how free in life?"
            ],
            model: "One reason the end of slavery did not make Black Americans free was that the law stopped protecting them. Emancipation took away an owner's legal claim on a person, but it did not give Black Americans a jury that would convict their attackers or a police force that would come when they called. That is why lynching, a mob killing with no trial, carried on for decades: the killers expected no punishment, and in Marion in 1930 a crowd of 15,000 watched and the authorities did not stop them. So in law a Black American in 1930 was free, while in daily life they could be killed in public and nobody would answer for it. Freedom that the state will not defend is not yet freedom."
          },
          levels: {
            support: {
              steps: [
                "Choose ONE reason from the chapter: no protection from the police or the courts; mob violence; no vote; separate and worse schools.",
                "Sentence 1: One reason the end of slavery did not make Black Americans free was...",
                "Sentences 2 and 3: say what this meant from day to day. Who was it done by, and what happened to them afterwards?",
                "Sentence 4: use because to link the reason to its effect.",
                "Last sentence: answer the question, naming the difference between freedom in law and freedom in life."
              ],
              example: {
                q: "Explain one reason why the Emancipation Proclamation changed little in 1863, in a paragraph of three sentences.",
                steps: ["Name the reason: the Confederacy did not accept Lincoln's authority.", "Explain the effect: a Confederate plantation owner simply ignored a proclamation issued by a president he was at war with.", "Link it: so the words only became real where Union soldiers arrived to enforce them."],
                answer: "The Proclamation changed little at first because the Confederacy refused to recognise Lincoln's authority, so it was only enforced where Union soldiers reached."
              }
            },
            core: { hint: "Pick one reason and follow it all the way to its effect on an ordinary person's day. Use because once." },
            stretch: { extend: "Argue which mattered more for Black Americans in the years after 1868: the loss of the vote, or the loss of protection from violence. Give one reason for your judgement." }
          },
          explain: "Say, in one sentence, the difference between being free in law and being free in life.",
          why: "A strong answer names one reason, shows what it did to ordinary lives, and ends on the gap between the law and daily experience. The best answers notice that emancipation removed an owner's claim without putting any protection in its place."
        },
        {
          title: "Why the South would not abolish slavery",
          task: {
            kind: "mcq",
            q: "According to your lesson, why did the Southern states refuse to abolish slavery?",
            options: [
              "They argued that their whole economies depended on the tobacco and cotton trade",
              "They had no farms and so needed to buy everything from the North",
              "They had already freed most enslaved people and had nothing left to abolish",
              "They were following a ruling of the Supreme Court that they could not change"
            ],
            answer: 0,
            why: "The deck gives the South's own argument: the tobacco and cotton trade, they said, was the whole basis of their wealth, so they refused to end the practice.",
            feedback: [
              "",
              "The South was the farming half of the country: tobacco and cotton plantations were its wealth. That is exactly why it fought to keep slavery, rather than needing to buy from the North.",
              "No freeing had happened. Slavery was still legal and widespread in the Southern states in 1860, which is why Lincoln's election alarmed them so much.",
              "The Supreme Court case you will meet, Plessy vs Ferguson, came in 1896, long after. In 1861 the South was defending slavery by its own choice and its own argument about money."
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask of each option: does it match what the lesson says the South itself argued?",
                "Remember the two crops the slide names: tobacco and cotton.",
                "Rule out anything that makes the South poor in farming, or claims slavery had already ended.",
                "Rule out anything dated later than 1861."
              ],
              example: {
                q: "According to your lesson, what argument did the Northern states make against slavery?",
                steps: ["Look for the North's own reasons on the slide.", "The slide gives two: that slavery was inhumane, and that it was against the will of God."],
                answer: "That slavery was inhumane and against the will of God."
              }
            },
            core: { hint: "One option is the economic argument the South made itself. Three are about the wrong place or the wrong date." },
            stretch: { extend: "Explain why an argument about money was so hard to answer with an argument about right and wrong, and what that tells you about why the dispute ended in war." }
          },
          explain: "Say, in one sentence, why the two halves of the country could not settle this argument by talking.",
          why: "The South defended slavery as the base of its economy: tobacco and cotton were its wealth. The North attacked it as inhumane and against the will of God. The two arguments never met, which is why Lincoln's election tipped the dispute into war."
        }
      ]
    },

    /* ───────────── 2 · Jim Crow and the Klan ───────────── */
    {
      key: "jim-crow", n: 2, title: "The Jim Crow laws and the Ku Klux Klan",
      lead: "What the Jim Crow laws were, how they reached into voting, speech, the courts and schools, and how the Ku Klux Klan used violence to hold the whole system in place.",
      covers: [1],
      pretext: {
        words: [
          { word: "segregation", means: "keeping people apart because of their race", sentence: "Segregation put Black and white Americans in separate schools, waiting rooms and restaurants." },
          { word: "caricature", means: "a picture or performance with features made cruelly over-exaggerated", sentence: "The Jim Crow character was a caricature invented to make Black people look foolish." },
          { word: "poll tax", means: "a charge a citizen had to pay before being allowed to vote", sentence: "A poll tax kept poor Black citizens off the voters' register." },
          { word: "white supremacy", means: "the false belief that white people should hold power over everyone else", sentence: "The Klan used fear and violence to defend white supremacy." },
          { word: "infer", means: "to work something out from evidence, without being told it directly", sentence: "You can infer from the all-white juries that Black victims had little hope of justice." }
        ],
        passage: [
          "When slavery ended, Southern states wrote new laws instead.",
          "These were called the Jim Crow laws.",
          "Jim Crow was a cruel stage character invented by a white entertainer.",
          "He was played as clumsy and stupid, to mock Black people.",
          "The laws kept Black and white Americans apart by force of law.",
          "Black citizens had to pay a poll tax before they could vote.",
          "Officials set reading tests, then failed Black applicants on purpose.",
          "Juries were all white, so trials were rarely fair.",
          "Black schools were given far less money than white schools.",
          "A group called the Ku Klux Klan used violence and fear.",
          "They burned churches and left burning crosses outside people's homes.",
          "Southern juries almost never found a Klansman guilty.",
          "The NAACP became the Klan's main opponent."
        ]
      },
      sections: [
        {
          heading: "Where the name came from, and what the laws were for",
          paragraphs: [
            "Jim Crow was not a real person. He was a character invented by a white entertainer, Thomas Rice, for a stage act in the 1800s. The character was a caricature of a Black man, with over-exaggerated features, played as clumsy and dim-witted in order to ridicule African Americans. The name of that insult was then attached to a whole body of law.",
            "The Jim Crow laws were state laws, passed in the Southern states, and they were made on purpose to segregate Black and white people and to keep African Americans down. Segregation means setting one group of people apart from another, and these laws did it in writing, backed by courts and police.",
            "The laws reached into ordinary life in ways that are easy to miss. One said that a white nurse could not be made to work in a hospital ward where Black men were patients. One said bus stations had to provide separate waiting rooms and separate ticket windows for each race. One made it illegal for a restaurant to serve white and Black customers in the same room, and one made it illegal for a Black person and a white person to play a game of pool together."
          ],
          tip: "If an exam question asks what segregation was like, do not just write that people were kept apart. Name one law and say what it stopped a real person doing on an ordinary day."
        },
        {
          heading: "Four areas of life: political, social, legal, educational",
          paragraphs: [
            "Your information sheet sorts the Jim Crow system into four areas, and that is a useful way to remember it. Politically, Black citizens were kept off the voters' register. A poll tax had to be paid before a person could vote, which cut out the poorest. A literacy test could also be set: a hundred years ago many Americans, Black and white, could not read, and a few were allowed to vote if they could show they understood a passage read aloud to them. White officials simply decided that white applicants had understood it and that Black applicants had not, even when they plainly had. White voters also kept a loophole for themselves: a man could vote if his grandfather had voted.",
            "Socially, there were rules about how a Black person was permitted to speak to a white person. A Black person must never suggest that a white person was lying, must never suggest a white person came from a lower class, and must never comment on a white woman's appearance. Breaking an unwritten rule like that could cost a person their job, or their life.",
            "Legally, juries in the South were white, so a Black defendant was unlikely to be believed and a Black victim unlikely to see anyone convicted. Educationally, white schools were given far more public money than Black schools, so the separate schools were never equal. Your lesson then asks the hard question: without political rights, could African Americans ever have won social, legal and educational rights?"
          ],
          worked: {
            q: "Explain how the Jim Crow laws affected African Americans politically.",
            steps: [
              "Name the area and one device used in it: politically, Black citizens were kept off the voters' register by the poll tax and the literacy test.",
              "Explain how the device worked: the poll tax priced out the poorest, and the literacy test let a white official decide who had understood the passage.",
              "Show the consequence: because Black citizens could not vote, they could not remove the politicians who wrote the Jim Crow laws.",
              "Finish with a judgement: this shows that the political rules protected all the other kinds of segregation."
            ],
            answer: "The poll tax and the literacy test kept Black citizens off the register; with no votes they could not change the lawmakers; so the political barrier is what kept the social, legal and educational barriers standing."
          },
          tip: "Learn the four areas as a list you can say in order: political, social, legal, educational. Then attach one example to each."
        },
        {
          heading: "The Ku Klux Klan",
          paragraphs: [
            "The violence Emmett Till met was not a single terrible exception. Black people in the South faced racism, threats and violence as part of ordinary life, and the organisation that did most to make that true was the Ku Klux Klan. It was created in 1865, as a reaction to the ending of slavery: many white Southerners did not want to lose the power over Black people that slavery had given them. The Klan carried out beatings and killings meant to terrify, in order to restore white supremacy, which means power and control held by white people.",
            "Klansmen wore white hoods and robes, and the costume was part of the point: it was designed to intimidate. They burned down Black churches, hung nooses above people's doors and set burning crosses outside the homes of families who were not white. One of the Klan's main aims was to stop Black citizens voting, and its main opponent was the NAACP, the National Association for the Advancement of Coloured People.",
            "In 1915 the Klan was reformed and grew quickly in influence. It was now hostile not only to Black Americans but also to Jews, Communists, Catholics and anyone it chose to call a foreigner. At its peak in 1925 its membership reached four million, and Klansmen who were arrested were unlikely to be found guilty by a Southern jury."
          ],
          tip: "Two dates do a lot of work here: 1865, when the Klan began as a reaction to emancipation, and 1915, when it was rebuilt and widened its list of enemies."
        },
        {
          heading: "What can we learn about the Klan from sources?",
          paragraphs: [
            "Your lesson gives you four sources about the Klan and asks what you can infer from each. To infer is to work something out from evidence, without being told it directly. Two questions get you most of the way: what does the source actually say, and who is saying it, and why?",
            "The sources are very different. One is the Klan's own leader, speaking in public in the 1920s, setting out what the organisation wanted: Protestant power above everything, and laws against relationships between Black and white people. One is a journalist looking back on the small Indiana town of his boyhood, where about half the adults belonged to the Klan and it filled the police and fire departments with its own members. One is evidence given to a government committee investigating the Klan, which reported dozens killed and hundreds beaten in a single state, and nobody arrested ever brought to court. One is a Black man speaking to a civil rights worker in 1963, explaining that he had told nobody what he had seen, because the police, the judge, the jury and the mayor might all be Klansmen.",
            "Read together they tell you something no single source could. The first tells you the Klan's aims; the second and third tell you how far it reached into local government and the courts; the fourth tells you what that meant for a person deciding whether it was worth speaking. None of these authors is neutral, and that is useful rather than awkward: the Klan leader is advertising, and the witness is explaining a choice he had to make."
          ],
          tip: "When you write about a source, answer in this order: what it says, who made it, and what you can therefore infer. Three sentences, in that order, is a full answer at Key Stage 3."
        }
      ],
      gate: [
        { kind: "mcq", q: "What does segregation mean?", options: ["Keeping people apart because of their race", "Making everyone obey the same set of laws", "Taking away a person's right to own property", "Moving people from the countryside into the cities"], answer: 0, why: "Segregation means setting one group of people apart from another. In the American South it was written into state law.",
          feedback: [
            "",
            "That is the opposite of what happened. Under Jim Crow, Black and white Americans were deliberately governed by different rules; segregation means keeping people apart because of their race.",
            "Property rights were part of the wider injustice, but the word itself is narrower. Segregation means keeping people apart because of their race, in schools, buses, shops and public places.",
            "Many African Americans did move north in these years, but that is migration, not segregation. Segregation is being kept apart because of your race."
          ] },
        { kind: "gap", q: "A ___ tax was a charge a citizen had to pay before being allowed to vote.", answer: "poll", options: ["poll", "sales", "income"], why: "A poll tax was a charge made before a person could vote, and it was used to keep the poorest Black citizens off the register.",
          feedback: {
            "sales": "A sales tax is added when you buy something, and everybody pays it at the till. The charge that had to be paid before a person could vote was the poll tax.",
            "income": "An income tax is taken from what a person earns. The charge that stood between a citizen and the ballot box was the poll tax, and it hit the poorest hardest."
          } },
        { kind: "mcq", q: "Why did white officials in the South use literacy tests?", options: ["To stop Black citizens voting, by deciding who had understood the reading", "To find out how many Americans could read, for the school inspectors", "To make sure everyone who voted had finished secondary school", "To give Black citizens a second chance if they had not paid the poll tax"], answer: 0, why: "A hundred years ago many Americans of both races could not read. The test let a white official rule that white applicants had understood a passage and Black applicants had not, even when they had.",
          feedback: [
            "",
            "Nobody was collecting statistics. The test was set at the moment a person tried to get on the voters' register, and the official who marked it decided the result he wanted.",
            "There was no school-leaving rule, and plenty of white voters could not read either. That is the point: the same test produced different verdicts depending on who was taking it.",
            "It was not a second chance but a second barrier. A Black applicant could face the poll tax and the literacy test, while a white applicant might be waved through because his grandfather had voted."
          ] }
      ],
      modules: [
        {
          title: "Four areas of the Jim Crow system",
          task: {
            kind: "match",
            q: "Match each area of life to the way the Jim Crow system controlled it.",
            pairs: [
              ["Political", "A poll tax and a literacy test kept Black citizens off the voters' register"],
              ["Social", "Rules about how a Black person was allowed to speak to a white person"],
              ["Legal", "All-white juries, so a Black defendant or victim rarely got a fair trial"],
              ["Educational", "White schools were given far more public money than Black schools"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the easiest: which area is about schools and money?",
                "Which area is about voting? Look for the tax and the test.",
                "Which area is about courts and juries?",
                "The one left over is social: the unwritten rules for everyday conversation."
              ],
              example: {
                q: "Match these two areas of school life to a rule: uniform, and attendance. Choices: you must be in your form room before the bell; your tie must be the house colour.",
                steps: ["Uniform is about what you wear, so the tie rule goes there.", "Attendance is about being present on time, so the form-room rule goes there."],
                answer: "Uniform: your tie must be the house colour. Attendance: you must be in your form room before the bell."
              }
            },
            core: { hint: "Four areas, four kinds of rule. Ask each rule: is this about voting, talking, courts or schools?" },
            stretch: { extend: "Argue which of the four areas was the most important to break first, and give one reason for your judgement." }
          },
          explain: "Say, in one sentence, why the political rules mattered to all the other three areas.",
          why: "Political: the poll tax and the literacy test. Social: rules for how a Black person could speak to a white person. Legal: all-white juries. Educational: far more money for white schools. The political barrier protected the rest, because citizens who cannot vote cannot remove the lawmakers."
        },
        {
          title: "The impact of the Jim Crow laws",
          task: {
            kind: "written",
            q: "Explain the impact of the Jim Crow laws on ONE area of African Americans' lives. Write one paragraph of four to six sentences.",
            criteria: [
              "I choose one area and name it: political, social, legal or educational.",
              "I give one specific example of a Jim Crow rule in that area.",
              "I explain what it stopped a real person doing from day to day.",
              "I use the word because at least once to link the rule to its effect.",
              "I finish with a judgement about how serious this impact was."
            ],
            model: "The Jim Crow laws had a severe impact on African Americans legally, because they removed any real chance of justice. Juries in the Southern states were white, so a Black person who had been robbed, beaten or threatened had to put their case to twelve people drawn from the group that was attacking them. This mattered far beyond the courtroom: if attackers expect no conviction, there is nothing to deter them, which is one reason Klan violence carried on for decades. Evidence given to a government committee reported dozens killed and hundreds beaten in a single state, with nobody arrested ever brought to court. I would judge this the most serious impact of all, because a person with no protection in law has no safe way to use any other right they are given."
          },
          levels: {
            support: {
              steps: [
                "Choose ONE area: political, social, legal or educational. One is enough.",
                "Sentence 1: The Jim Crow laws had a big impact on African Americans [area], because...",
                "Sentence 2: name the rule. The poll tax; the all-white jury; the separate waiting room; the smaller school budget.",
                "Sentences 3 and 4: say what that did to one person's ordinary day, and use because.",
                "Last sentence: say how serious you judge this impact to be, and why."
              ],
              example: {
                q: "Explain the impact of the Jim Crow laws on African Americans educationally, in three sentences.",
                steps: ["Name the rule: schools were segregated and white schools were given far more public money.", "Explain the effect: Black children were taught in worse buildings, with fewer books and larger classes.", "Judge it: this impact lasted a lifetime, because a worse education limited the jobs a child could later get."],
                answer: "Segregated schools with far smaller budgets gave Black children a worse education, which then limited the work they could get as adults."
              }
            },
            core: { hint: "One area, one named rule, one ordinary day. Use because, and end with how serious you think it was." },
            stretch: { extend: "Your lesson asks whether political rights had to come first. Argue for or against that claim, using two of the four areas as evidence." }
          },
          explain: "Say, in one sentence, how the rule you chose changed what one person could do on an ordinary day.",
          why: "A strong answer stays in one area, names a real rule, and follows it into daily life. The best answers end on a judgement, and the strongest of those notice how the four areas held each other up."
        },
        {
          title: "What the courts tell you about the Klan",
          task: {
            kind: "mcq",
            q: "Men arrested for Klan violence were almost never found guilty by a Southern jury. What can you infer from that?",
            options: [
              "That the Klan controlled the very people who were meant to deliver justice, so its victims could not get any",
              "That the Klan was a small group with no real power in the Southern states",
              "That Southern juries were unusually careful to follow the evidence",
              "That Black Americans in the South did not report crimes because the crimes did not trouble them"
            ],
            answer: 0,
            why: "Juries were drawn from the white population, and in some places the Klan had a large part of that population in its membership. A court staffed by your attackers cannot convict them.",
            feedback: [
              "",
              "The evidence points the other way. A group whose members sat on the juries, and in some towns in the police and fire departments, was not a group without power; it had captured the institutions.",
              "Careful juries convict when the proof is good, and the committee evidence says there was good proof. A jury that acquits in the face of proof is telling you about itself, not about the evidence.",
              "The 1963 witness explains exactly why people stayed silent: he thought the police, the judge, the jury and the mayor might all be Klansmen. Silence here is a calculation about risk, not a sign that people did not care."
            ]
          },
          contexts: [
            { label: "A government inquiry", q: "Evidence given to a government committee investigating the Klan reported dozens of people killed and hundreds beaten in a single state, and said that nobody arrested had ever been brought to court, despite good proof. What can you infer from that?", why: "Good proof and no prosecutions together point to a justice system that had been captured, not to a shortage of evidence." },
            { label: "A journalist's memory", q: "A journalist who grew up in a small Indiana town remembered that about half the adults there belonged to the Klan, and that it filled the police and fire departments with its own members. What can you infer from that?", why: "If the Klan staffed the police and the fire service, the people a victim would turn to for help were the same people they needed protection from." },
            { label: "A witness in 1963", q: "A Black man speaking to a civil rights worker in 1963 said he had told nobody what he had seen, because the police, the judge, the jury and the mayor might all be Klansmen. What can you infer from that?", why: "He is describing a system in which every route to justice ran through people who might be on the other side." }
          ],
          levels: {
            support: {
              steps: [
                "First ask what the source actually says. Here: arrests happened, convictions did not.",
                "Then ask who the jury was. Southern juries were drawn from the white population only.",
                "Now join the two: what happens when the people judging a case belong to the group on trial?",
                "Write the inference as a sentence beginning: this suggests that..."
              ],
              example: {
                q: "A referee's own son plays for one of the teams, and every close decision goes that team's way. What can you infer?",
                steps: ["What it says: the close calls all favour one side.", "Who is deciding: someone with a personal interest in that side.", "Infer: the decisions cannot be treated as neutral, so the result tells you little about who played better."],
                answer: "That the decisions were not neutral, because the person making them had an interest in one side."
              }
            },
            core: { hint: "Ask who the jury was drawn from, and then ask whether such a jury could convict." },
            stretch: { extend: "Explain how the NAACP could still make progress against the Klan when Southern juries would not convict, and say which courts it had to use instead." }
          },
          explain: "Say, in one sentence, the difference between what a source says and what you can infer from it.",
          why: "Arrests without convictions, in courts whose juries came from the same population the Klan recruited, show a justice system captured by the people it should have been judging. That is why the NAACP went above the local courts and took its cases all the way to the Supreme Court."
        }
      ]
    },

    /* ───────────── 3 · fighting segregation in the 1950s ───────────── */
    {
      key: "fighting-1950s", n: 3, title: "Fighting segregation in the 1950s: the Brown case, Rosa Parks and the Little Rock Nine",
      lead: "How Black families used the Supreme Court to break separate but equal, how Montgomery's Black residents emptied the buses for a year, and how nine students walked into a white high school.",
      covers: [2],
      pretext: {
        words: [
          { word: "Supreme Court", means: "the highest court in America, which decides what the law is", sentence: "The Supreme Court can rule that a law passed by a state is illegal." },
          { word: "separate but equal", means: "the rule that segregation was legal if both races got the same facilities", sentence: "Separate but equal was the excuse, but Black schools were never given equal money." },
          { word: "boycott", means: "refusing to buy or use something in order to force a change", sentence: "A boycott works best when the people refusing are the business's biggest customers." },
          { word: "integration", means: "bringing people of different races together in the same place", sentence: "Integration of the high school at Little Rock needed soldiers to protect nine students." },
          { word: "NAACP", means: "the National Association for the Advancement of Coloured People", sentence: "The NAACP found lawyers and money so that ordinary families could take segregation to court." }
        ],
        passage: [
          "In 1896 the Supreme Court ruled that segregation was legal.",
          "It only had to be separate but equal.",
          "In practice, Black schools were far worse than white schools.",
          "In 1951 Oliver Brown tried to enrol his daughter at a nearby school.",
          "She was sent to a segregated school miles from home instead.",
          "Twelve other families joined the Browns and took the case to court.",
          "The NAACP chose a Black lawyer, Thurgood Marshall, to argue for them.",
          "In May 1954 the Supreme Court ruled separate but equal illegal.",
          "In December 1955 Rosa Parks refused to give up her bus seat.",
          "She was arrested, and Montgomery's Black residents stopped using the buses.",
          "They stayed off for over a year, and the bus companies nearly failed.",
          "In 1957 nine Black students entered a white high school in Arkansas.",
          "Soldiers had to be sent so that they could reach their lessons."
        ]
      },
      sections: [
        {
          heading: "Separate but equal, and the family that broke it",
          paragraphs: [
            "In 1950s America, schools were supposed to be separate but equal. Black and white children would be taught in different schools, but each school was supposed to offer the same level of education and the same facilities. The idea came from the Supreme Court, the court with the highest authority in America, which decides what the law is. In the case of Plessy vs Ferguson in 1896, the Supreme Court ruled that segregation was legal so long as the separate facilities and the treatment of white and Black people were the same. That ruling is what made segregated schools lawful for the next fifty-eight years.",
            "It never worked as written. Black schools received very poor levels of education, as you saw in the last chapter, because white schools were given far more public money. In 1951 a man named Oliver Brown tried to enrol his daughter at a primary school in Kansas, and she was refused and sent instead to a segregated school for Black children miles from their home. The Brown family and twelve other Black families from Kansas appealed against the decision, arguing that it was illegal.",
            "They did not do it alone. The NAACP, the National Association for the Advancement of Coloured People, represented the families and took the appeal to the Supreme Court, and chose a Black lawyer, Thurgood Marshall, to argue it. In May 1954 the Supreme Court ruled that the Browns and the other twelve families could not lawfully be denied access to white schools. With that ruling, separate but equal schooling became illegal, and the way was open for schools to integrate. Marshall himself made history again in 1967, when he became the first Black person appointed to the Supreme Court."
          ],
          tip: "Hold the two Supreme Court cases as a pair: Plessy vs Ferguson in 1896 made segregation legal; Brown vs Board of Education in 1954 made segregated schooling illegal. Same court, opposite answers."
        },
        {
          heading: "Rosa Parks and the Montgomery Bus Boycott",
          paragraphs: [
            "Rosa Parks lived in Alabama, a Southern state whose laws promoted segregation. In Montgomery, the front seats on the buses were reserved for white passengers. Parks was not a bystander who happened to be tired: she had been active in the Civil Rights movement since 1943, when she became the secretary of her local NAACP branch.",
            "On 1 December 1955 she refused to give up her seat, and she was arrested. The Civil Rights movement in Montgomery answered on 5 December 1955 by starting a bus boycott: Black residents refused to ride the buses at all until segregation on them ended. Because Black passengers paid a large share of the bus companies' income, the boycott bit hard, and the companies came close to bankruptcy. It held for more than a year, until 20 December 1956, with people walking, sharing cars and organising lifts the whole time.",
            "Two things came out of it besides desegregated buses. Rosa Parks is often called the mother of the Civil Rights movement, and she became a role model for African Americans. And a young local minister, Martin Luther King, became a national leader during the campaign. The boycott is also usually counted as the start of non-violent direct action: Black Americans doing something themselves, peacefully, to secure their civil rights."
          ],
          worked: {
            q: "How significant was the Montgomery Bus Boycott? Write the opening of a PEE paragraph.",
            steps: [
              "Point: the Montgomery Bus Boycott, from 1955 to 1956, was a significant moment in the Civil Rights movement.",
              "Evidence: Black residents stayed off the buses for over a year, the companies nearly went bankrupt, and segregation on Montgomery's buses was ended.",
              "Explain: this shows the boycott was significant because it proved that organised, peaceful action by Black Americans could force a change in the law.",
              "Now add the other side, because the question says how significant: however, the win was local, and it changed only the buses in one city."
            ],
            answer: "Point, evidence, explain, then the counter-argument: an organised year-long boycott desegregated Montgomery's buses and proved non-violent direct action worked, but the victory itself covered only one city's buses."
          },
          tip: "In a significance question, never write only the strong side. Give your judgement, the evidence for it, and then the strongest argument against it."
        },
        {
          heading: "How significant was the boycott? Both sides",
          paragraphs: [
            "Your lesson gives you a set of statements to sort into significant and not significant, and the exercise is worth doing carefully, because the evidence really does point both ways. On the significant side: it was one of the first major wins of the movement and it inspired mass protests elsewhere; the bus companies nearly went bankrupt, which showed how important Black customers were to the American economy; it was the start of non-violent direct action; Martin Luther King became a national leader during it; and Rosa Parks became a role model across the country.",
            "On the other side: it was a local campaign that affected only the bus companies of Montgomery, Alabama. Only the buses were desegregated; segregation continued in every other part of American life. It was not even the NAACP's first victory, since the Brown vs Board decision of 1954 had already ruled segregated education unlawful. And it did not change the economic position of Black Americans, who remained the poorest group in American society right through the twentieth century.",
            "There was also a backlash, which belongs on the not-significant side of the ledger but tells you something on its own. When the boycott ended, stones were thrown at the buses and snipers shot at them. Some white residents refused to sit next to or behind Black passengers, and some went as far as setting up a private club to transport white citizens. A law can be changed faster than the people who have to live under it."
          ],
          tip: "A good significance answer weighs the two sides and then decides. Pick the one argument on each side you find most convincing, and say why it convinces you."
        },
        {
          heading: "The Little Rock Nine",
          paragraphs: [
            "The Little Rock Nine were nine students trying to go to high school in Arkansas, another Southern state. Segregation had existed in Southern schools for many years under separate but equal, and in practice Black schools received very poor levels of education. The 1954 Supreme Court ruling changed the law, but changing the law is not the same as opening the door.",
            "In 1957 the local NAACP and the Little Rock Board of Education agreed at last to integrate the city's white high school, teaching white and Black pupils together. It was not a straightforward task. The local government and local people did not welcome the students, and in the end the President had to send in the Army so that nine teenagers could get into their lessons.",
            "That is why the Little Rock Nine matter twice over. What they achieved was the first integration of a Southern high school. What they represented was proof that Black Americans would use the new law, and that the federal government could be made to enforce it against a state that refused."
          ],
          tip: "When you compare Rosa Parks with the Little Rock Nine, compare like with like: what each achieved, who each forced to act, and how far the win reached."
        }
      ],
      gate: [
        { kind: "mcq", q: "What did the people of Montgomery do in the bus boycott of 1955 and 1956?", options: ["Black residents refused to ride the buses until segregation on them ended", "They refused to pay the fares but kept travelling on the buses", "They took the bus company to the Supreme Court instead of protesting", "They asked white passengers to give up the front seats voluntarily"], answer: 0, why: "A boycott means refusing to use something in order to force a change. Montgomery's Black residents stopped riding the buses altogether until segregation on them ended.",
          feedback: [
            "",
            "Travelling without paying would have been a crime and would have put protesters straight into the hands of the courts. A boycott is the opposite: you stay off, so the company loses the fare it was counting on.",
            "The courts were the NAACP's route in the Brown case of 1954. Montgomery's answer to Rosa Parks's arrest was direct action by thousands of ordinary passengers.",
            "The boycott did not depend on anyone's goodwill. It worked because Black passengers paid a large share of the companies' income, so withdrawing it brought them close to bankruptcy."
          ] },
        { kind: "gap", q: "In 1954 the Supreme Court ruled that ___ but equal schools were illegal.", answer: "separate", options: ["separate", "private", "distant"], why: "Separate but equal was the 1896 rule that let states run segregated schools. In 1954 the Supreme Court ruled it illegal.",
          feedback: {
            "private": "Private schools were not the issue. The phrase that had allowed segregation since 1896, and that the 1954 ruling struck down, was separate but equal.",
            "distant": "Distance was part of the Browns' complaint, since their daughter was sent miles away, but it is not the phrase. The rule the court struck down was separate but equal."
          } },
        { kind: "numeric", q: "In which year did nine Black students enter the white high school at Little Rock, Arkansas?", answer: 1957, tolerance: 0, units: "", check: "1954 + 3", why: "The Supreme Court ruling came in 1954; Little Rock integrated three years later, in 1957, and the President had to send the Army.",
          misconceptions: [
            { answer: 1954, check: "1954", says: "That is the year of the Supreme Court ruling in Brown vs Board of Education. Little Rock did not actually integrate until three years later, in 1957." },
            { answer: 1955, check: "1954 + 1", says: "1955 is the year Rosa Parks refused to give up her seat in Montgomery. The Little Rock Nine entered the school two years after that, in 1957." },
            { answer: 1956, check: "1954 + 2", says: "1956 is the year the Montgomery Bus Boycott ended. The Little Rock Nine went in the following year, in 1957." }
          ] }
      ],
      modules: [
        {
          title: "The 1950s, in order",
          task: {
            kind: "order",
            q: "Put these four moments of the 1950s fight against segregation in order.",
            items: [
              "The Supreme Court rules that separate but equal schools are illegal (1954)",
              "Rosa Parks refuses to give up her seat on a bus in Montgomery (1955)",
              "The Montgomery Bus Boycott ends after more than a year (1956)",
              "Nine Black students enter the white high school at Little Rock, Arkansas (1957)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Two of these are about schools and two are about buses. Sort them into those two pairs first.",
                "Within the bus pair, the refusal must come before the boycott it started.",
                "Within the school pair, the court ruling must come before any school opened its doors.",
                "Now interleave: the ruling, then the refusal, then the end of the boycott, then the school."
              ],
              example: {
                q: "Put these steps of a school trip in order: the trip takes place; a letter goes home; the coach is booked; parents return their permission slips.",
                steps: ["Nothing starts until the letter goes home.", "Then parents return the slips.", "Then the coach can be booked for the right number.", "Then the trip takes place."],
                answer: "a letter goes home; parents return their permission slips; the coach is booked; the trip takes place"
              }
            },
            core: { hint: "A court ruling comes before the schools that use it; an arrest comes before the boycott it sets off." },
            stretch: { extend: "Explain why the Little Rock integration happened three years after the ruling that made it legal, and what that gap shows about how change actually happened." }
          },
          explain: "Say, in one sentence, why the 1954 ruling had to come before Little Rock.",
          why: "Brown vs Board in 1954 made segregated schooling illegal; Rosa Parks's refusal in December 1955 set off the boycott; the boycott ended in December 1956; and in 1957 nine students used the 1954 ruling to enter the high school at Little Rock, with the Army sent in to make it possible."
        },
        {
          title: "How significant was the Montgomery Bus Boycott?",
          task: {
            kind: "written",
            q: "How significant was the Montgomery Bus Boycott? Give your judgement, the evidence for it, and the strongest argument against it. Write one paragraph of five to seven sentences.",
            criteria: [
              "I state a clear judgement about how significant the boycott was.",
              "I give at least two pieces of evidence from the chapter to support it.",
              "I give the strongest argument on the other side, using however or although.",
              "I explain what my evidence shows, rather than only listing it.",
              "I end by returning to my judgement and saying why I still hold it."
            ],
            model: "The Montgomery Bus Boycott was a significant moment in the Civil Rights movement, although its direct result was small. Black residents of Montgomery stayed off the buses from December 1955 to December 1956, and because they paid a large share of the fares the companies came close to bankruptcy, which forced the end of segregation on those buses. This shows it was significant because it proved that organised, peaceful action by Black Americans could change a law, and it was that proof, rather than the buses themselves, that inspired protests elsewhere. It also made Martin Luther King a national leader and Rosa Parks a role model across the country. However, the campaign was local: only the buses of one city in Alabama were desegregated, and segregation continued everywhere else, while Black Americans remained the poorest group in American society through the whole twentieth century. I still judge it significant, because it gave the movement a method that worked and a leader who could use it, and both mattered far beyond Montgomery."
          },
          levels: {
            support: {
              steps: [
                "Decide first: significant, or not significant? You can say significant in some ways and not others.",
                "Sentence 1: The Montgomery Bus Boycott was [significant / not significant] because...",
                "Sentences 2 and 3: two pieces of evidence. Choose from the year-long boycott, the near-bankruptcy, the end of bus segregation, King becoming a national leader, Parks as a role model.",
                "Sentence 4: start with However and give the strongest argument against: the campaign was local, and only the buses changed.",
                "Last sentence: return to your judgement and say why the evidence still points that way."
              ],
              example: {
                q: "How significant was the Brown vs Board ruling of 1954? Write a three-sentence judgement.",
                steps: ["Judgement: it was highly significant, because it removed the legal basis of school segregation.", "Evidence: separate but equal had stood since 1896, and the ruling struck it down for every state at once.", "Counter-argument and return: however, Little Rock in 1957 showed that states would still resist, so the ruling was a necessary beginning rather than the end."],
                answer: "Highly significant, because it struck down a rule that had stood since 1896 for every state at once, even though states still had to be forced to obey it."
              }
            },
            core: { hint: "Judgement, two pieces of evidence, one However, then back to your judgement. Explain what the evidence shows; do not just list it." },
            stretch: { extend: "Your lesson asks you to rate the boycott's impact from 1 to 5. Give it a rating, and defend it against the rating you think a classmate would most likely choose instead." }
          },
          explain: "Say, in one sentence, which piece of evidence most changed your judgement, and why.",
          why: "The strongest case for significance is not the buses but the method: a year of organised non-violent direct action that worked, and that gave the movement a template and a national leader. The strongest case against is scale: one city, one service, with segregation untouched everywhere else."
        },
        {
          title: "How long did separate but equal last?",
          task: {
            kind: "numeric",
            q: "The Supreme Court made separate but equal lawful in 1896 and ruled it illegal in 1954. For how many years did that rule stand?",
            answer: 58, tolerance: 0, units: "years", check: "1954 - 1896",
            why: "1954 − 1896 = 58. Separate but equal was the law of the land for fifty-eight years, which is why the Brown ruling mattered so much.",
            misconceptions: [
              { answer: 59, check: "1954 - 1896 + 1", says: "You have counted both end years. To find a gap between two years you subtract: 1954 − 1896 = 58, not 59." },
              { answer: 68, check: "1964 - 1896", says: "You have used 1964, the year of the Civil Rights Act. The ruling that ended separate but equal in schools was the Brown decision of 1954, so the gap is 58 years." },
              { answer: 60, check: "1956 - 1896", says: "You have used 1956, the year the Montgomery Bus Boycott ended. The ruling that struck down separate but equal came two years earlier, in 1954, so the gap is 58 years." }
            ]
          },
          contexts: [
            { label: "A grandmother", q: "A woman was born in 1896, the year the Supreme Court made separate but equal lawful, and she was still alive in 1954 when the court ruled it illegal. How many years of her life had that rule stood?", check: "1954 - 1896", why: "Subtracting the two years gives 58, which is why people could live a whole adult life under the rule." },
            { label: "A school building", q: "A segregated primary school opened in 1896, the year the Supreme Court made separate but equal lawful, and it was still segregated when the ruling was struck down in 1954. For how many years had it been allowed to turn Black children away?", check: "1954 - 1896", why: "The same subtraction gives 58 years of lawful exclusion from one building." },
            { label: "The NAACP's case", q: "Lawyers for the NAACP argued in 1954 against a Supreme Court ruling made in 1896. How many years of settled law were they asking the court to overturn?", check: "1954 - 1896", why: "58 years of precedent, which is part of why the case was so hard to win." }
          ],
          levels: {
            support: {
              steps: [
                "Write down the two years: the rule started in 1896 and ended in 1954.",
                "To find a gap between years you subtract the earlier from the later.",
                "1954 − 1896. Take 1896 from 1954: that is 58.",
                "Check it makes sense: fifty-eight years is longer than most people's working lives, which is the point."
              ],
              example: {
                q: "A building went up in 1925 and came down in 1956. For how many years did it stand?",
                steps: ["Write the two years: 1925 and 1956.", "Subtract the earlier from the later: 1956 − 1925.", "That gives 31 years."],
                answer: "31 years",
                checks: [{ expr: "1956 - 1925", value: 31, tol: 0 }]
              }
            },
            core: { hint: "A gap between two years is a subtraction, not a count of the years themselves. Later year minus earlier year." },
            stretch: { extend: "Explain why a rule standing for this long made the Brown case harder to win, and what the NAACP had to show the court instead of simply arguing that segregation was unfair." }
          },
          explain: "Say, in one sentence, why you subtract the years rather than counting them on your fingers.",
          why: "1954 − 1896 = 58. Separate but equal was settled law for fifty-eight years, so the NAACP was not asking the court to fill a gap but to reverse itself, which is why the Brown case took years of preparation."
        }
      ]
    },

    /* ───────────── 4 · Martin Luther King ───────────── */
    {
      key: "king", n: 4, title: "Martin Luther King: the early campaigns and the March on Washington",
      lead: "Where King's method came from, what his four early campaigns taught him, what he argued from a jail cell in Birmingham, and how a march of a quarter of a million people helped produce the Civil Rights Act.",
      covers: [3],
      pretext: {
        words: [
          { word: "civil disobedience", means: "peacefully refusing to obey a law you believe is unjust", sentence: "Sitting at a whites-only lunch counter was civil disobedience." },
          { word: "non-violent", means: "making a protest without using force", sentence: "King insisted that his campaigns stay non-violent, even when the police did not." },
          { word: "sit-in", means: "a protest in which people sit somewhere they are banned from and refuse to leave", sentence: "Students held a sit-in at a segregated lunch counter in Atlanta." },
          { word: "campaign", means: "a planned series of actions aimed at one change", sentence: "King learned that a campaign works better when the organisers lead it themselves." },
          { word: "Congress", means: "the American parliament, which makes the country's laws", sentence: "Only Congress could pass a law that covered every state at once." }
        ],
        passage: [
          "Martin Luther King was a Civil Rights activist in the Southern states.",
          "He became a national leader during the Montgomery Bus Boycott.",
          "His method came from Mahatma Gandhi in India.",
          "Gandhi had used non-violent civil disobedience against the British Empire.",
          "Civil disobedience means peacefully refusing to obey a racist law.",
          "King's first campaigns were local: one city or one state.",
          "At the Atlanta sit-ins he held a divided group together.",
          "At Albany he had not started the campaign, and it failed.",
          "He learned to form a campaign and then lead it himself.",
          "In 1963 he was jailed during the Birmingham campaign.",
          "Then he turned from local targets to national laws.",
          "In August 1963 he led 250,000 people to Washington.",
          "In 1964 Congress passed the Civil Rights Act."
        ]
      },
      sections: [
        {
          heading: "Who King was, and where his method came from",
          paragraphs: [
            "Martin Luther King was a Civil Rights activist in the Southern states of America. He rose to national attention during the Montgomery Bus Boycott of 1955, and came out of it as a national leader of the Civil Rights movement. He had not started that campaign, as you saw in the last chapter; he grew into its leadership.",
            "His method was borrowed, and he said so. King was inspired by Mahatma Gandhi, who had used non-violent civil disobedience to campaign for India's independence from the British Empire. You met that empire in Year 8, so you already know how hard it was to shift. Civil disobedience means refusing to comply with laws that are racist, peacefully and on purpose, as a form of protest.",
            "You also already know an example of it, from the chapter before this one. Montgomery's Black residents broke no law by walking, but they refused to take part in a segregated service, and they kept refusing for over a year. That is the shape of every campaign in this chapter."
          ],
          tip: "If a question asks about King's methods, name the method (non-violent civil disobedience), name where it came from (Gandhi, in India), and give one example of it in action."
        },
        {
          heading: "The early campaigns: Montgomery, Atlanta, Albany, Birmingham",
          paragraphs: [
            "King's early campaigns are worth learning as a set of four, because together they show him learning his trade. The Montgomery Bus Boycott of 1955 to 1956 brought him national fame, and its success showed how effective his non-violent, peaceful protest tactics could be.",
            "At the Atlanta sit-ins of 1960 he showed a different skill. The group of protesters was close to breaking apart, because younger activists wanted quicker action than King's method offered, and he held them together with his speeches. Then came Albany in 1961, and a failure. King had not created that protest movement; he was invited into it. The Albany Movement broke apart because it was divided, and the media blamed King when it collapsed. The lesson he drew was blunt: if he formed the movement and led it himself, it would succeed.",
            "He acted on that lesson in the Birmingham campaign of 1963, which he and his organisation planned and ran. He was arrested during it, and what he wrote from the cell is the subject of the next section. By now King had used his early campaigns to show the whole country the discrimination Black Americans faced every day, by targeting local issues at state level, such as the buses in Montgomery, Alabama. He was a national figure, and he turned his attention from local change to national politicians and the laws that could give Black Americans rights across every state."
          ],
          worked: {
            q: "Explain what King learned from the failure of the Albany Movement in 1961.",
            steps: [
              "Say what happened: King was brought into a campaign at Albany that he had not created, and it broke apart because it was divided.",
              "Say who paid the price: the media blamed King for the failure, even though he had not organised it.",
              "Draw out the lesson: he concluded that a campaign he formed and led himself was far more likely to hold together and succeed.",
              "Show him using it: in Birmingham in 1963 he and his organisation planned the campaign from the start."
            ],
            answer: "Albany taught King that being invited into someone else's divided campaign brought him the blame without the control, so from Birmingham onwards he formed and led his campaigns himself."
          },
          tip: "Four campaigns, four dates: Montgomery 1955 to 1956, Atlanta 1960, Albany 1961, Birmingham 1963. Attach one thing King learned to each."
        },
        {
          heading: "What King argued from a jail cell in Birmingham",
          paragraphs: [
            "While he was in jail during the Birmingham campaign in 1963, King wrote an open letter defending non-violent direct action. His letter is still in copyright, so this book does not quote it; what follows is his argument in other words, and it belongs to him.",
            "King argued that the greatest obstacle to Black freedom was not the Ku Klux Klan. It was, he said, the white people who told him they agreed with his goal but could not agree with his methods, who valued order more than justice, who were content with a quiet peace that contained no justice at all, and who thought they were entitled to set the timetable for someone else's freedom by advising Black Americans to wait for a more convenient moment. He called such people white moderates.",
            "That is a hard argument to hear, and your lesson asks you to take it seriously. If a person says they support a change but objects every time anyone acts to bring it about, what is the practical difference between them and an opponent? Your teacher may ask you to connect this to the modern claim that staying silent about injustice is itself a choice."
          ],
          tip: "When you use a writer whose work is in copyright, give their argument in your own words and name them clearly. Paraphrase with attribution is honest; copying is not."
        },
        {
          heading: "The March on Washington, 1963, and the Civil Rights Act, 1964",
          paragraphs: [
            "On 28 August 1963, King led a crowd of 250,000 to the March on Washington for Jobs and Freedom. The United States has its capital at Washington: Congress sits there and the President lives there, so a march in that city is aimed at the people who can change federal law. He made his most famous speech at that march. It too is in copyright and is not quoted here, but its argument is well known: that the promises of equality written into America's founding documents had not been kept for Black Americans, and that the country should keep them, judging people by their character rather than their race.",
            "Your lesson asks why King chose Washington rather than the Deep South, where the segregation and the racial violence were. The answer is in the chapter above: he had already proved his case locally, and local wins could not reach every state. Only Congress could.",
            "In 1964 Congress passed the Civil Rights Act into law. The Act gave Black Americans equal status with white Americans under the law, and made discrimination, including segregation, illegal. It was one of the biggest achievements of the whole campaign, and King's speech is credited with pushing Congress into passing it. But the fight was not over, because Jim Crow rules in the South still kept many Black citizens from voting, and that is where chapter five begins."
          ],
          tip: "The Civil Rights Act of 1964 made discrimination illegal. It did not give anyone the vote. Keeping those two laws apart is the single most useful thing you can do in this topic."
        }
      ],
      gate: [
        { kind: "mcq", q: "Who inspired King's method of non-violent civil disobedience?", options: ["Mahatma Gandhi, who campaigned for India's independence from the British Empire", "Abraham Lincoln, who issued the Emancipation Proclamation", "Thurgood Marshall, who argued the Brown case at the Supreme Court", "Rosa Parks, who refused to give up her bus seat in Montgomery"], answer: 0, why: "King took his method from Gandhi, who had used non-violent civil disobedience against British rule in India.",
          feedback: [
            "",
            "Lincoln mattered enormously to the story, but he was a wartime president using armies and proclamations, not a protester. King's method of peaceful law-breaking came from Gandhi's campaign in India.",
            "Marshall's weapon was the courtroom, and it was a powerful one in 1954. King's weapon was mass civil disobedience, and he said he learned it from Gandhi.",
            "Rosa Parks gave King the first campaign in which he used the method, but she did not invent it. He credited Gandhi's non-violent campaign against the British Empire in India."
          ] },
        { kind: "gap", q: "Refusing, peacefully and on purpose, to obey a law you believe is racist is called civil ___.", answer: "disobedience", options: ["disobedience", "disagreement", "disorder"], why: "Civil disobedience is deliberate, peaceful law-breaking used as a protest. The word civil signals that it stays peaceful.",
          feedback: {
            "disagreement": "Disagreement is only an opinion, and an opinion breaks no law. Civil disobedience is the next step: peacefully refusing to obey the law you disagree with.",
            "disorder": "Disorder suggests chaos or violence, which is exactly what King's campaigns were designed to avoid. The term for deliberate, peaceful law-breaking is civil disobedience."
          } },
        { kind: "mcq", q: "Why did King turn from local campaigns to a national march in 1963?", options: ["Because only national politicians and federal laws could give Black Americans rights in every state", "Because he had lost every local campaign he had led so far", "Because segregation had already ended in the Southern states", "Because the Supreme Court had refused to hear any more civil rights cases"], answer: 0, why: "Local campaigns won local victories. King wanted laws that applied across the whole country, and only Congress and the President could make those.",
          feedback: [
            "",
            "He had not lost them. Montgomery and Birmingham were wins and Atlanta held together under his leadership; only Albany failed, and he had not organised it. He went national because local wins could not reach every state.",
            "Segregation was still in force across the South in 1963, which is exactly why he marched. The 1964 Civil Rights Act came after the march, not before it.",
            "The Supreme Court was still hearing civil rights cases, and the Brown ruling of 1954 had been a major win. The problem was that a court ruling still had to be enforced state by state, so King went after national law."
          ] }
      ],
      modules: [
        {
          title: "What each early campaign taught King",
          task: {
            kind: "match",
            q: "Match each of King's early campaigns to what it taught him or did for him.",
            pairs: [
              ["Montgomery Bus Boycott, 1955 to 1956", "Brought him national fame and showed that non-violent, peaceful tactics could work"],
              ["Atlanta sit-ins, 1960", "Showed he could hold a divided group together when younger activists wanted quicker action"],
              ["Albany Movement, 1961", "A campaign he had not created; it broke apart because it was divided, and the media blamed him"],
              ["Birmingham campaign, 1963", "A campaign he planned and led himself, during which he was jailed and wrote his open letter"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the one you know best. Which campaign made King famous in the first place?",
                "Which campaign was about students sitting at lunch counters, with the group nearly splitting?",
                "Which campaign was not his, and ended in failure and blame?",
                "The one left is the campaign where he was jailed, in 1963."
              ],
              example: {
                q: "Match these two school events to what they taught a form captain: a bake sale that raised nothing because nobody was told, and a charity run that sold out in a day after a tutor-time notice. Choices: plan the publicity first; a good cause is not enough on its own.",
                steps: ["The bake sale failed for lack of notice, so its lesson is that a good cause is not enough on its own.", "The charity run succeeded because of the notice, so its lesson is to plan the publicity first."],
                answer: "Bake sale: a good cause is not enough on its own. Charity run: plan the publicity first."
              }
            },
            core: { hint: "Sort them by date first, then ask of each one: was this a success, a test of his leadership, a failure, or a campaign he built himself?" },
            stretch: { extend: "Explain how the lesson of Albany in 1961 changed what King did in 1963, and judge whether the March on Washington could have happened without it." }
          },
          explain: "Say, in one sentence, what Albany taught King that Montgomery could not.",
          why: "Montgomery made him famous and proved the method; Atlanta tested whether he could hold a divided movement together; Albany showed what happens when he is blamed for a campaign he does not control; Birmingham was the first he planned and led himself, and it put him in the cell where he wrote his letter."
        },
        {
          title: "Why the March on Washington mattered",
          task: {
            kind: "written",
            q: "Explain why the March on Washington in 1963 was a significant moment in the Civil Rights movement. Write one paragraph of four to six sentences.",
            criteria: [
              "I say clearly that the march was significant, and in what way.",
              "I use at least two facts from the chapter, such as the date, the number of marchers, or the place.",
              "I explain why Washington in particular was the right target.",
              "I link the march to what happened next in 1964.",
              "I use the word because at least once."
            ],
            model: "The March on Washington on 28 August 1963 was significant because it turned a set of local campaigns into national pressure. King led 250,000 people to the capital, which is where Congress sits and where the President lives, so the march was aimed directly at the only people who could change the law for every state at once. That choice of target mattered: King had already proved his case in Montgomery and Birmingham, but a win in one city could not reach Alabama and Arkansas and Kansas together. The march was also peaceful on a huge scale, which made it very hard to dismiss, and his speech there is credited with pushing Congress into action. In 1964 Congress passed the Civil Rights Act, which made discrimination including segregation illegal, and that is the clearest measure of what the march achieved."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: The March on Washington in 1963 was significant because...",
                "Sentence 2: give two facts. The date was 28 August 1963, there were 250,000 marchers, and the place was the capital.",
                "Sentence 3: explain the target. Who is in Washington, and what can they do that a local council cannot?",
                "Sentence 4: link it forward. What law did Congress pass the following year, and what did it make illegal?",
                "Last sentence: say what all of this shows about why the march mattered."
              ],
              example: {
                q: "Explain why Birmingham in 1963 was important to King, in three sentences.",
                steps: ["Say what was new: it was the first major campaign he and his organisation planned and led themselves.", "Explain why that mattered: after Albany he had decided that control was what made a campaign hold together.", "Add the consequence: he was jailed during it, and the letter he wrote there set out his case for direct action."],
                answer: "Birmingham was the first campaign King fully controlled, which was the lesson of Albany, and his arrest there produced the letter defending direct action."
              }
            },
            core: { hint: "Two facts, then the reason Washington was the right place, then the law that followed in 1964." },
            stretch: { extend: "Argue whether the Civil Rights Act of 1964 would have passed without the March on Washington, and give one reason for your answer." }
          },
          explain: "Say, in one sentence, why a march on the capital could achieve what a march in the Deep South could not.",
          why: "The march moved the campaign from local targets to national law. A quarter of a million peaceful marchers in the capital put the case to Congress and the President directly, and the Civil Rights Act of 1964, which made discrimination and segregation illegal, is the result historians point to."
        },
        {
          title: "The argument from the cell",
          task: {
            kind: "mcq",
            q: "In his letter from the jail in Birmingham, King argued that the biggest obstacle to Black freedom was not the Ku Klux Klan. According to him, what was it?",
            options: [
              "White people who said they agreed with the goal but objected to protest and told Black Americans to wait",
              "Black Americans who were unwilling to join his campaigns",
              "The Supreme Court, which kept refusing to rule against segregation",
              "Newspapers in the North, which never reported anything about the South"
            ],
            answer: 0,
            why: "King's argument was that people who claimed to share his aim but criticised every method and every timetable were a greater obstacle than open racists, because they slowed change while appearing to support it.",
            feedback: [
              "",
              "King's complaint in the letter is not about Black Americans. He aimed it at white people who said they agreed with the goal and then objected to every action taken to reach it.",
              "The Supreme Court had already ruled against segregated schooling in 1954, and King was in jail in 1963 because states were resisting such rulings, not because the court refused to make them.",
              "Northern newspapers did report the South, and King's campaigns were designed to give them something to report. His argument was about people who approved of the goal but not of the protest."
            ]
          },
          levels: {
            support: {
              steps: [
                "Start from what King says it is NOT: not the Klan, the openly violent racists.",
                "So he is pointing at someone who is not an open enemy. Who claims to be on his side?",
                "Read the section again and find the two things such a person says: I agree with your goal, but not with your methods; and, wait for a better time.",
                "Choose the option that matches those two sentences."
              ],
              example: {
                q: "A head of year says bullying is unacceptable, but tells a pupil who reports it that this is a bad week to raise it and the matter should wait. What is the pupil's complaint likely to be?",
                steps: ["The head of year agrees with the goal.", "But objects to acting now.", "So the complaint is that agreement without action leaves the bullying in place."],
                answer: "That agreeing in principle while refusing to act now leaves the problem exactly where it was."
              }
            },
            core: { hint: "He is not pointing at an open enemy. He is pointing at someone who says they agree with him." },
            stretch: { extend: "Explain whether you think King was fair to make this argument, and what a person in that position could have done instead of asking him to wait." }
          },
          explain: "Say, in one sentence, why King thought a supporter who always said wait was a serious obstacle.",
          why: "King's target in the letter is the person who accepts the goal and rejects every route to it. Such a person, he argued, prefers an orderly situation with no justice in it to a disorderly process that produces justice, and claims the right to decide when someone else's freedom should arrive."
        }
      ]
    },

    /* ───────────── 5 · Selma and the vote ───────────── */
    {
      key: "selma", n: 5, title: "Selma and the fight for the vote",
      lead: "Why the Civil Rights Act of 1964 did not deliver the vote, how literacy tests were used to keep Black citizens off the register, and how the marches at Selma in 1965 produced the Voting Rights Act.",
      covers: [4],
      pretext: {
        words: [
          { word: "register to vote", means: "to get your name on the official list of voters", sentence: "A citizen who cannot register to vote has no vote, whatever the law says." },
          { word: "literacy test", means: "a reading test set by an official before letting someone vote", sentence: "The literacy test was marked so that Black applicants failed." },
          { word: "Congress", means: "the American parliament, which passes the country's laws", sentence: "The President asked Congress to pass a voting rights law." },
          { word: "protester", means: "a person taking part in a public demonstration", sentence: "The protesters at Selma were peaceful when the police met them." },
          { word: "broadcast", means: "sent out on television or radio to the whole country", sentence: "The attack at Selma was filmed and broadcast across America." }
        ],
        passage: [
          "The Civil Rights Act of 1964 made discrimination illegal.",
          "But Southern states still stopped Black citizens voting.",
          "Before you can vote you must register with the state.",
          "Officials set reading tests that no honest marker would use.",
          "The Louisiana test had thirty questions, some of them impossible.",
          "Without the vote you cannot change who makes the law.",
          "In 1965 King organised a march at Selma, in Alabama.",
          "On 7 March the police met the marchers on a bridge.",
          "They fired tear gas, and most of the marchers were beaten.",
          "But cameras were there, and the country watched it that evening.",
          "A week later the President demanded a new voting law.",
          "Congress passed the Voting Rights Act in 1965."
        ]
      },
      sections: [
        {
          heading: "Why the vote still had to be won after 1964",
          paragraphs: [
            "In 1964 Congress passed the Civil Rights Act. It gave Black Americans equal status with white Americans under the law, and made discrimination, such as segregation, illegal. On paper that was a huge victory, and the movement had earned it.",
            "The fight was not over. Jim Crow rules in the Southern states still denied many Black citizens the right to vote. Southern states simply ignored the Civil Rights Act and carried on refusing to let Black citizens register. So the movement turned to the one right that protects all the others, and began its push to guarantee voting rights.",
            "It is worth being clear about why the vote matters so much. Before you can vote, your name has to be on the state's official list of voters: you have to register. A citizen who cannot register has no say in who makes the law, which means no way to remove the politicians writing the Jim Crow rules. Every other right then depends on the goodwill of people the voter cannot vote out."
          ],
          tip: "Learn the pair: the 1964 Act attacked discrimination; the 1965 Act attacked the barriers to the vote. Questions about this unit very often turn on telling them apart."
        },
        {
          heading: "The Louisiana literacy test",
          paragraphs: [
            "Your lesson puts a real example in front of you: a copy of a literacy test from the state of Louisiana. It had thirty questions, and your teacher asks you to try them. Some are answerable. Some are tangled wordplay with no clear answer at all, and some could be marked wrong whatever you wrote.",
            "That is the design, not an accident. The questions did not need to be fair, because the official at the desk decided whether you had passed. As you saw in chapter two, officials ruled that white applicants had understood a passage and that Black applicants had not, even when they plainly had, and white applicants often never faced the test at all because of the loophole that let a man vote if his grandfather had voted.",
            "A test like this is a useful source, because it is evidence of intent. Nobody writes an impossible test by mistake and then uses it on one group of citizens only. Set beside the poll tax, it shows a system built to produce a particular answer."
          ],
          worked: {
            q: "Use the Louisiana literacy test as evidence. What does it tell you about how Southern states blocked Black voters?",
            steps: [
              "Say what the source is: a reading test of thirty questions, set by the state of Louisiana before a citizen was allowed to register.",
              "Say what is in it: some questions were impossible to answer, and the official marking it decided who had passed.",
              "Infer from that: an impossible test cannot be meant to measure anything, so it must be meant to exclude.",
              "Say who it excluded and how you know: Black applicants, because officials marked them down while white applicants were passed or exempted by the grandfather rule."
            ],
            answer: "The test shows deliberate exclusion rather than a genuine standard: questions that cannot be answered, marked by an official with the power to decide, applied to Black applicants while white applicants were waved through."
          },
          tip: "When a source is a form, a test or a rule, ask what it would do if applied fairly, and then ask who was actually applying it."
        },
        {
          heading: "Selma, 1965, and Bloody Sunday",
          paragraphs: [
            "In 1965 King organised a march at Selma, in the Southern state of Alabama. Despite the Civil Rights Act of 1964, Southern states were using Jim Crow rules to deprive Black citizens of the right to vote and refusing to let them register. King decided the movement had to act so that Black Americans were not deprived of rights they had already been promised.",
            "The marches met a hostile reaction from the local police and the local government. On 7 March 1965, remembered as Bloody Sunday, peaceful protesters tried to cross a bridge out of Selma. The police fired tear gas at them and ordered them back, and the response was harsh: most of the marchers were beaten.",
            "What the police did not plan for was the camera. The attack was filmed by national media and broadcast all over the country, so millions of Americans who had never seen segregation at work watched unarmed citizens being beaten for asking to vote. The violence shocked many people into action, and one of them was the President himself."
          ],
          tip: "Bloody Sunday is the clearest case in this unit of the press changing an outcome. If a question asks why Selma worked, the answer includes the cameras."
        },
        {
          heading: "The Voting Rights Act, and what the President told Congress",
          paragraphs: [
            "A week after Bloody Sunday, President Johnson put the Voting Rights Act before Congress and spoke in person to press for its passing. Congress passed the Voting Rights Act in 1965.",
            "Johnson's speech of 15 March 1965 is in copyright, so it is not quoted here; his argument, in other words, was this. What had happened at Selma, he told Congress, was part of a much larger movement reaching into every part of the country. It was the effort of Black Americans to secure for themselves everything American life promised, and their cause had to be the whole nation's cause, because it was not only Black Americans but all Americans who had to get past a long history of prejudice and injustice that still held the country back. He finished by borrowing the movement's own anthem of determination.",
            "Your lesson asks you to notice who he was speaking to and what he was doing. By presenting voting rights as everyone's problem rather than a Black problem, the President was making it harder for members of Congress to treat it as somebody else's business. That a president was making the movement's argument for it, in those words, is itself a measure of how much the march at Selma had achieved."
          ],
          tip: "When a politician widens a cause from one group to everybody, ask what that does to the people listening. It is usually a move to make opposition awkward."
        }
      ],
      gate: [
        { kind: "numeric", q: "In which year did Congress pass the Civil Rights Act, which made discrimination and segregation illegal?", answer: 1964, tolerance: 0, units: "", check: "1965 - 1", why: "The Civil Rights Act was passed in 1964, the year after the March on Washington and the year before the Voting Rights Act.",
          misconceptions: [
            { answer: 1965, check: "1964 + 1", says: "1965 is the year of the Voting Rights Act, which dealt with the vote. The Act that made discrimination and segregation illegal was passed the year before, in 1964." },
            { answer: 1963, check: "1964 - 1", says: "1963 is the year of the March on Washington, which created the pressure. Congress passed the Civil Rights Act the following year, in 1964." },
            { answer: 1954, check: "1964 - 10", says: "1954 is the Supreme Court ruling in Brown vs Board of Education, which dealt only with schools. The Civil Rights Act came ten years later, in 1964." }
          ] },
        { kind: "gap", q: "Before a citizen could vote, their name had to be on the state's official list: they had to ___.", answer: "register", options: ["register", "campaign", "boycott"], why: "To register is to get your name on the list of voters. Southern officials used the poll tax and the literacy test to stop Black citizens registering.",
          feedback: {
            "campaign": "Campaigning is what you do to change a law or elect a candidate. The step that stood between a citizen and the ballot box was registering: getting their name on the official list.",
            "boycott": "A boycott is refusing to use something to force a change, as in Montgomery. Getting onto the official list of voters is called registering."
          } },
        { kind: "mcq", q: "What moved President Johnson to act after 7 March 1965?", options: ["Television and newspapers showed the whole country how the marchers had been treated", "The Supreme Court ordered him to introduce a voting rights law", "The marchers at Selma had used force against the police", "Southern state governors asked him to change the voting rules"], answer: 0, why: "The attack on the bridge was filmed by national media and broadcast across the country. A week later Johnson put the Voting Rights Act to Congress.",
          feedback: [
            "",
            "The Supreme Court decides whether laws are lawful; it does not order a president to write new ones. What moved Johnson was the broadcast of the violence and the public reaction to it.",
            "The marchers were peaceful, which is exactly why the pictures were so damaging. The police fired tear gas and beat people who were walking across a bridge.",
            "Southern state governments were the ones blocking Black registration, and the local government at Selma was hostile to the march. The pressure came from the national audience, not from them."
          ] }
      ],
      modules: [
        {
          title: "Which law or ruling did what?",
          task: {
            kind: "match",
            q: "Match each law or court ruling to what it actually did.",
            pairs: [
              ["Plessy vs Ferguson, 1896", "Ruled that segregation was legal as long as both races got the same facilities"],
              ["Brown vs Board of Education, 1954", "Ruled that separate but equal schooling was illegal"],
              ["Civil Rights Act, 1964", "Gave Black Americans equal status under the law and made discrimination illegal"],
              ["Voting Rights Act, 1965", "Attacked the barriers that kept Black citizens from registering and voting"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Sort them by date first: 1896, 1954, 1964, 1965.",
                "The two from the Supreme Court are the two with vs in the name. One allowed segregation; the later one struck it down for schools.",
                "The two Acts came from Congress. One is about discrimination in general, one is about the vote.",
                "Match each date to the one job it did, and do not let the two Acts blur together."
              ],
              example: {
                q: "Match these two school rules to what each does: the uniform policy, and the attendance policy. Choices: sets out what counts as an authorised absence; sets out what may be worn.",
                steps: ["The uniform policy is about clothing, so it sets out what may be worn.", "The attendance policy is about being present, so it sets out what counts as an authorised absence."],
                answer: "Uniform policy: sets out what may be worn. Attendance policy: sets out what counts as an authorised absence."
              }
            },
            core: { hint: "Two court rulings and two Acts. Ask of each: schools, general discrimination, or the vote?" },
            stretch: { extend: "Explain why the Voting Rights Act was needed at all when the Civil Rights Act had already made discrimination illegal." }
          },
          explain: "Say, in one sentence, the difference between what the 1964 Act did and what the 1965 Act did.",
          why: "1896 made segregation lawful; 1954 struck it down in schools; 1964 made discrimination and segregation illegal across American life; 1965 went after the devices that kept Black citizens off the voters' register. Each one closes a door the one before had left open."
        },
        {
          title: "1964 or 1965: which mattered more?",
          task: {
            kind: "written",
            q: "Which law was more significant for Black Americans: the Civil Rights Act of 1964, or the Voting Rights Act of 1965? Write one paragraph of five to seven sentences, and reach a judgement.",
            criteria: [
              "I state which law I judge more significant.",
              "I say accurately what each of the two laws did.",
              "I give at least one piece of evidence from the chapter to support my choice.",
              "I give the strongest argument for the other law, using however or although.",
              "I return to my judgement at the end and say why I still hold it."
            ],
            model: "I judge the Voting Rights Act of 1965 the more significant of the two, because it protected the right that protects every other right. The Civil Rights Act of 1964 gave Black Americans equal status under the law and made discrimination, including segregation, illegal, which was an enormous change on paper. The trouble is that Southern states simply ignored it: they went on using Jim Crow rules such as the literacy test to keep Black citizens off the register, which is precisely why King had to march at Selma the following year. A citizen who cannot register cannot vote out the officials who are refusing to register them, so without 1965 the 1964 Act depended on the goodwill of the very people breaking it. However, the 1964 Act was the more significant in daily life at once, because it made the segregated restaurant, waiting room and school unlawful everywhere in the country on the day it passed. I still judge 1965 more significant, because rights that cannot be defended at the ballot box can be taken back, as the fifty-eight years of separate but equal had already shown."
          },
          levels: {
            support: {
              steps: [
                "Decide first which law you will argue for. Either answer can be argued well.",
                "Sentence 1: I judge the [Civil Rights Act of 1964 / Voting Rights Act of 1965] more significant because...",
                "Sentences 2 and 3: say what each law did. Be exact: 1964 is about discrimination, 1965 is about the vote.",
                "Sentence 4: give your evidence. Selma happened because the 1964 Act was being ignored; the 1964 Act closed segregated restaurants and waiting rooms nationwide.",
                "Sentence 5: start with However and give the best argument for the other law. Then return to your judgement."
              ],
              example: {
                q: "Which was more significant for Black children, the Brown ruling of 1954 or the integration of Little Rock in 1957? Write a three-sentence judgement.",
                steps: ["Choose: the 1954 ruling, because it changed the law for every state at once.", "Evidence: Little Rock changed one school, and only because the ruling existed to be enforced.", "Counter and return: however, Little Rock showed the ruling meant nothing without enforcement, so 1954 mattered most but was not enough by itself."],
                answer: "The 1954 ruling, because it changed the law nationally, although Little Rock showed that a ruling without enforcement changed nothing."
              }
            },
            core: { hint: "Be exact about what each law did before you judge. Then argue one side, concede the best point on the other, and come back." },
            stretch: { extend: "Argue the opposite case to the one you have just made, as strongly as you can, and then say which of your two answers you find more convincing." }
          },
          explain: "Say, in one sentence, the one fact that decided your judgement.",
          why: "Both answers can be argued. The case for 1964 is immediate reach: segregation became unlawful everywhere at once. The case for 1965 is durability: without the vote, the 1964 Act depended on officials who were already ignoring it, which is exactly what Selma proved."
        },
        {
          title: "Why the law was not enough",
          task: {
            kind: "mcq",
            q: "In 1965, Black citizens in Alabama were still being turned away when they tried to register to vote, even though the Civil Rights Act had passed the year before. Why could this still happen?",
            options: [
              "Southern states ignored the Act and used Jim Crow rules such as the literacy test to block registration",
              "The Civil Rights Act had not yet been signed by Congress",
              "Black citizens in Alabama had chosen not to register",
              "The Act applied only to the Northern states"
            ],
            answer: 0,
            why: "The Act was law, but Southern states simply did not obey it. They carried on using literacy tests, poll taxes and refusals at the desk, which is why a separate Voting Rights Act was needed.",
            feedback: [
              "",
              "Congress passed it in 1964 and it was law. The problem was not that the law was missing but that Southern states ignored it and faced no penalty until 1965.",
              "People were travelling to the registration office and being turned away, often at real risk, and marching at Selma to demand the right. The barrier was the official at the desk, not a lack of willingness.",
              "It was a federal Act, so it applied to every state. The Southern states were the ones defying it, which is why the movement had to force Washington to act again."
            ]
          },
          contexts: [
            { label: "Mississippi", q: "A Black teacher in Mississippi went to the courthouse in 1965 to put her name on the voters' list and was handed a reading test she was then told she had failed, although the Civil Rights Act had passed the year before. Why could this still happen?", why: "The test was marked by the official who set it, and no penalty yet existed for a state that ignored the 1964 Act." },
            { label: "Alabama", q: "A Black farmer in Alabama was told in 1965 that he could not register until he had paid a tax he could not afford, although the Civil Rights Act had passed the year before. Why could this still happen?", why: "The poll tax was one of the Jim Crow devices Southern states kept using, because the 1964 Act was not being enforced against them." },
            { label: "Selma itself", q: "Black citizens of Selma were turned away from the registration office again and again in 1965, so they decided to march, although the Civil Rights Act had passed the year before. Why could this still happen?", why: "Selma is the clearest case: the Act existed, the state ignored it, and only national pressure after Bloody Sunday changed that." }
          ],
          levels: {
            support: {
              steps: [
                "Check the date: the Act was passed in 1964, so by 1965 it was already law.",
                "So the question is not whether the law existed, but whether anyone was made to obey it.",
                "Ask who stood between a citizen and the register: the state official at the desk.",
                "Choose the option that says the states ignored the Act and kept using their old devices."
              ],
              example: {
                q: "A school bans phones in lessons, but in one classroom phones are out every day and nothing happens. Why?",
                steps: ["The rule exists, so the gap is not in the rule.", "Ask who is supposed to apply it in that room.", "If nobody enforces it there, the rule changes nothing in that room."],
                answer: "Because a rule that nobody enforces in a particular place has no effect in that place."
              }
            },
            core: { hint: "The law existed. Ask who was supposed to enforce it, and whether anything happened when they did not." },
            stretch: { extend: "Explain what the Voting Rights Act of 1965 had to do differently from the Civil Rights Act of 1964 in order not to be ignored in the same way." }
          },
          explain: "Say, in one sentence, why a law can be passed and still change nothing.",
          why: "A right exists in practice only when something happens to whoever denies it. In 1964 nothing did, so Southern states went on using literacy tests and poll taxes at the registration desk, and it took Selma and the 1965 Act to change that."
        }
      ]
    },

    /* ───────────── 6 · Malcolm X and judging interpretations ───────────── */
    {
      key: "malcolm-x", n: 6, title: "Malcolm X, and judging what historians say about him",
      lead: "The childhood that shaped Malcolm X, what the Nation of Islam taught him, how his ideas changed by 1964, what limited his impact, and how to weigh a historian's interpretation against the evidence.",
      covers: [5, 6, 7],
      pretext: {
        words: [
          { word: "self-defence", means: "protecting yourself when you are attacked", sentence: "Malcolm X argued that Black Americans had the right to self-defence." },
          { word: "Nation of Islam", means: "a group that taught black power and a separate Black future", sentence: "He met the Nation of Islam while he was in prison." },
          { word: "pilgrimage", means: "a religious journey to a holy place", sentence: "In 1964 he made a pilgrimage to Mecca, and his views began to change." },
          { word: "interpretation", means: "a historian's argument about the past, built from evidence", sentence: "An interpretation can be tested against the evidence, and partly agreed with." },
          { word: "limitation", means: "something that held a person's achievement back", sentence: "One limitation was that other Civil Rights groups called him an extremist." }
        ],
        passage: [
          "Malcolm Little was born in 1925 into danger.",
          "White supremacists burned down his family's home in 1928.",
          "In 1931 they killed his father, who spoke up for Black rights.",
          "His mother became seriously ill and was taken into hospital in 1939.",
          "That year a teacher told him to give up becoming a lawyer.",
          "He left school angry, and later turned to crime.",
          "In prison he met a group called the Nation of Islam.",
          "Released in 1952, he joined it and took the name Malcolm X.",
          "He said Black people must defend themselves, not wait to be helped.",
          "By 1964 his ideas had changed after a pilgrimage to Mecca.",
          "He began to say white and Black people could work together.",
          "Historians still argue about how much impact he had.",
          "Your job is to weigh their arguments against the evidence."
        ]
      },
      sections: [
        {
          heading: "Malcolm Little: a childhood shaped by racist violence",
          paragraphs: [
            "Malcolm X was born Malcolm Little in 1925. His father spoke publicly for Black rights, and the family paid for it: white supremacists burned down their home in 1928, and in 1931 his father was killed by people his family believed were white racists. His mother could not cope alone, and in 1939 she became seriously ill and was taken into a mental hospital, where she remained for twenty-six years.",
            "The same year, 1939, Malcolm left school angry. He was a very able pupil, but a teacher told him to forget his hope of becoming a lawyer because he was Black. By 1941 he had moved to a poor, segregated city neighbourhood and taken the kind of low-paid work open to young Black men there, first shining shoes and then waiting tables. He saw no better route out and turned to crime, and in 1946 he was sent to prison, where he stayed until 1952.",
            "None of this is an excuse or an explanation on its own, and your lesson is careful about that. It asks you a harder question: how many Black Americans endured the same things? The violence, the segregated neighbourhood, the teacher who closed a door, the police and courts that did not protect his father: every one of those appears elsewhere in this unit. Malcolm X's early life is unusual in its detail, not in its kind."
          ],
          tip: "When you write about a person's early life, use it to explain the choices they later made, not to decide in advance whether those choices were right."
        },
        {
          heading: "The Nation of Islam, and a new name",
          paragraphs: [
            "In prison Malcolm met members of the Nation of Islam. The group taught black power and racial conflict with white people, told him that white people were his enemy, and claimed that Islam was the true religion of all Black people. He converted while he was inside, and when he was released in 1952 he joined the group and changed his name to Malcolm X.",
            "He became one of its most effective organisers. Malcolm X is credited with expanding the membership of the Nation of Islam enormously, from about 500 people to more than 75,000 by the early 1960s. That is the hardest piece of evidence anyone has for his impact, and you should keep it ready.",
            "His argument about method is what divided him from King. Malcolm X became a prominent Civil Rights leader in the 1960s, like King, but he argued that Black people had been oppressed by white people and therefore could not rely on white people to secure their freedom. Where King asked for non-violence, Malcolm X argued for self-defence, and he pointed out that Black Americans were the only group in the country who were asked to stay peaceful while being attacked."
          ],
          tip: "Do not reduce the difference between the two leaders to violence against non-violence. The deeper difference is about who they thought would deliver change: white allies, or Black Americans alone."
        },
        {
          heading: "Ideas that changed, and what held him back",
          paragraphs: [
            "Malcolm X did not hold one fixed position all his life, and the change is examinable. By 1964 he had left the Nation of Islam and made a pilgrimage to Mecca, and he came back believing that white and Black people could work together to end racism and that he was arguing for human rights for every group in society. In a famous speech of 1964 he urged Black Americans to use their votes to change the American political system rather than to turn to violence, while insisting that white racism was so deeply rooted that Black people still needed the right to defend themselves. That was a major change of position, and he kept saying that King and the other groups had not done enough.",
            "His limitations are set out plainly in your lesson. Other Civil Rights groups labelled him an extremist and a radical. His support for violence put some people off him altogether. His claim that Islam was the one true faith for every Black person did not persuade people, because most Black Americans were Christians. And after President Kennedy was shot in 1963, his remark that America's own violence had come back on it upset many people, Black and white.",
            "So the record really is mixed, and that is what makes him a good subject for an interpretation question. He grew an organisation from a few hundred to tens of thousands and reached people King could not reach. He also alienated potential allies, including the ones with the power to pass laws."
          ],
          worked: {
            q: "Explain one way in which Malcolm X's ideas changed, and one limitation on his impact.",
            steps: [
              "Name the change: by 1964 he had left the Nation of Islam and, after a pilgrimage to Mecca, accepted that white and Black people could work together.",
              "Evidence it: in his 1964 speech he urged Black Americans to use the vote rather than violence, while keeping the right to self-defence.",
              "Name the limitation: other Civil Rights groups called him an extremist, and his support for violence put people off.",
              "Explain the effect of the limitation: because the people who could pass laws were alienated, he had less influence over legislation than King."
            ],
            answer: "Change: by 1964, after Mecca, he accepted co-operation across races and urged use of the vote. Limitation: being labelled an extremist cost him allies among the people who could actually pass laws."
          },
          tip: "A question about change needs two moments and a date. Say what he thought first, what he thought later, and when the shift happened."
        },
        {
          heading: "Judging an interpretation",
          paragraphs: [
            "An interpretation is a historian's argument about the past, built out of evidence. It is not a fact to be learned and it is not an opinion to be shrugged at: it is a case you can test. Your assessment gives you an interpretation and asks how far you agree.",
            "The interpretation your lesson uses argues, in summary, that Malcolm X frightened both the people in charge and some of the Black Americans he was trying to help; that when he spoke about defending yourself, white listeners heard a threat of racial violence; that he asked questions King did not ask and showed that change had to come faster; and that he reached people who were not moved by a promise that change would arrive one day. The historian's text is modern and in copyright, so this book gives the argument rather than the words.",
            "Then you test it, in five steps your department uses for every interpretation question. Outline what the historian argues, naming the part you are answering. Say whether you agree, partly agree or disagree. Give evidence. Explain how your evidence shows that the person did or did not have a major impact. Link back to the question. The word partly is often the honest answer, and it scores well when the evidence really does point both ways, as it does here."
          ],
          tip: "Before you agree or disagree, ask what the interpretation leaves out. The 500 to 75,000 membership figure and the 1964 change of position are the two pieces of evidence most often missing."
        }
      ],
      gate: [
        { kind: "mcq", q: "What did Malcolm X argue about who could win Black Americans their freedom?", options: ["That Black people had been oppressed by white people, so they could not rely on white people to secure their freedom", "That only the Supreme Court could deliver freedom, so protest was pointless", "That freedom would arrive on its own if Black Americans waited patiently", "That Black and white Americans had always worked together successfully"], answer: 0, why: "This was his core disagreement with King: he argued that the oppressors could not be relied on to end the oppression, so Black Americans had to act for themselves.",
          feedback: [
            "",
            "The courts were the NAACP's route and they won real victories, but Malcolm X did not argue that protest was pointless. His argument was about who could be relied on: not the people who had done the oppressing.",
            "Patience was exactly what he attacked, and King attacked it too in his letter from Birmingham jail. Malcolm X argued that Black Americans had to secure their own freedom rather than wait for it.",
            "He argued the opposite in his Nation of Islam years, and only after 1964 did he accept that white and Black people could work together. Even then he insisted on the right to self-defence."
          ] },
        { kind: "gap", q: "In 1964 Malcolm X left the Nation of Islam and made a ___ to Mecca.", answer: "pilgrimage", options: ["pilgrimage", "boycott", "campaign"], why: "A pilgrimage is a religious journey to a holy place, and this one marked the point at which his views on working with white people began to change.",
          feedback: {
            "boycott": "A boycott is refusing to use something to force a change, as in Montgomery in 1955. The religious journey Malcolm X made to Mecca in 1964 is called a pilgrimage.",
            "campaign": "A campaign is a planned series of actions aimed at one change, like King's at Birmingham. A religious journey to a holy place is a pilgrimage."
          } },
        { kind: "mcq", q: "Which of these is a limitation on Malcolm X's impact, as your lesson gives it?", options: ["Other Civil Rights groups labelled him an extremist, and his support for violence put some people off", "He never managed to attract any members to the Nation of Islam", "He refused to speak in public or give interviews", "He agreed with everything Martin Luther King said and so added nothing"], answer: 0, why: "Your lesson lists being labelled an extremist, the effect of his support for violence, his claim about religion, and his remark after Kennedy's death as the four limitations.",
          feedback: [
            "",
            "The opposite is true, and it is his strongest evidence: membership of the Nation of Islam grew from about 500 to more than 75,000 by the early 1960s while he was organising for it.",
            "He was one of the most quoted public speakers of the decade, and his speeches are why both his supporters and his opponents knew exactly what he thought.",
            "He disagreed with King about method and about pace, and argued that King and the other groups had not done enough. That disagreement is the whole reason the two are compared."
          ] }
      ],
      modules: [
        {
          title: "How far do you agree about Malcolm X?",
          task: {
            kind: "written",
            q: "A historian argues that Malcolm X frightened both the people in power and some of the Black Americans he was trying to help, but that he asked questions King did not ask and reached people King could not reach. How far do you agree that Malcolm X had a major impact on the Civil Rights movement?",
            marks: 6,
            criteria: [
              "I outline what the historian argues, naming the part of the interpretation I am answering.",
              "I say whether I agree, partly agree or disagree.",
              "I give evidence from the unit to support my answer.",
              "I explain how my evidence shows that Malcolm X did or did not have a major impact.",
              "I link back to the question at the end."
            ],
            model: "The historian argues that Malcolm X both frightened people and reached people, and that his impact lay in the questions he forced into the open rather than in laws he helped to pass. I partly agree. He clearly reached people: while he organised for the Nation of Islam its membership grew from about 500 to more than 75,000 by the early 1960s, which shows he spoke to Black Americans who were not persuaded by a promise that change would come eventually. His change of position by 1964, after he left the group and made the pilgrimage to Mecca, also shows a leader arguing in public about method rather than simply repeating himself. However, the historian's point about fear is well supported too: other Civil Rights groups called him an extremist, his support for violence put people off, and his remark after President Kennedy was shot in 1963 upset Black and white Americans alike, which cost him exactly the allies who could pass legislation. So I partly agree: his impact on how Black Americans thought about their own position was major, while his impact on the laws of 1964 and 1965 was far smaller than King's."
          },
          levels: {
            support: {
              steps: [
                "Sentence 1: The historian argues that... Put the claim you are answering in your own words.",
                "Sentence 2: I agree / partly agree / disagree with this interpretation.",
                "Sentences 3 and 4: evidence. The strongest for impact is the growth from about 500 members to more than 75,000; the strongest against is being labelled an extremist and losing allies.",
                "Sentence 5: explain. Say how your evidence shows a major impact, or shows a limited one.",
                "Last sentence: link back. Therefore I [agree / partly agree / disagree], because..."
              ],
              example: {
                q: "A historian argues that Rosa Parks mattered more as a symbol than as an organiser. Outline that argument and say how far you agree, in three sentences.",
                steps: ["Outline: the historian argues her importance lay in what she came to represent rather than in the running of the campaign.", "Judge and evidence: I partly agree, because she became known as the mother of the movement, but she had also been secretary of her local NAACP branch since 1943.", "Link: so the symbol was real, but calling her only a symbol leaves out twelve years of organising."],
                answer: "Partly agree: she became a powerful symbol, but she had been an NAACP branch secretary since 1943, so the interpretation understates her organising."
              }
            },
            core: { hint: "Outline, judge, evidence, explain, link. Partly agree is a strong answer when the evidence really does point both ways." },
            stretch: { extend: "Say what evidence the historian has left out that might change their judgement, and explain how it would change it." }
          },
          explain: "Say, in one sentence, which piece of evidence does most to support your judgement, and why.",
          why: "The strongest evidence for a major impact is the growth of the Nation of Islam from about 500 members to more than 75,000, because it measures how many people he reached. The strongest evidence against is the alienation of other groups and of white politicians, because the laws of 1964 and 1965 needed exactly those people. Partly agree, well evidenced, is the honest answer."
        },
        {
          title: "The unit in order",
          task: {
            kind: "order",
            q: "Your assessment bell work asks you to put these five events in chronological order. Do it.",
            items: [
              "Malcolm Little is sent to prison (1946)",
              "The Montgomery Bus Boycott begins (1955)",
              "Congress passes the Civil Rights Act (1964)",
              "The marchers from Selma meet the police on the bridge (1965)",
              "Congress passes the Voting Rights Act (1965)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Two of these are in the 1940s and 1950s, and three are in the 1960s. Split them first.",
                "Of the early pair: Malcolm went to prison in 1946, and Rosa Parks was arrested in December 1955.",
                "Of the 1960s three: the Civil Rights Act came in 1964, and the other two are both 1965.",
                "Within 1965, the march came first, in March, and the Voting Rights Act followed because of it."
              ],
              example: {
                q: "Put these four moments in order: Brown vs Board of Education; Plessy vs Ferguson; the Little Rock Nine enter school; Thurgood Marshall joins the Supreme Court.",
                steps: ["Plessy came first, in 1896.", "Then Brown, in 1954.", "Then Little Rock, in 1957, which used the Brown ruling.", "Marshall joined the court last, in 1967."],
                answer: "Plessy vs Ferguson; Brown vs Board of Education; the Little Rock Nine enter school; Thurgood Marshall joins the Supreme Court"
              }
            },
            core: { hint: "Sort by decade, then by year. The one pair that needs care is the two 1965 events: which one caused the other?" },
            stretch: { extend: "Explain why the order of the last two events is the single most important thing on this list, and what it tells you about how the Voting Rights Act came about." }
          },
          explain: "Say, in one sentence, why the Selma march has to come before the Voting Rights Act.",
          why: "1946, 1955, 1964, then the two events of 1965 in the right order: the attack on the marchers at the bridge in March, and the Voting Rights Act that Congress passed because the country had watched it happen."
        },
        {
          title: "The best evidence that he changed",
          task: {
            kind: "mcq",
            q: "Which of these is the best evidence that Malcolm X's views changed?",
            options: [
              "In 1964 he left the Nation of Islam, made a pilgrimage to Mecca, and began to argue that white and Black people could work together",
              "He joined the Nation of Islam in 1952 after being released from prison",
              "Other Civil Rights groups labelled him an extremist and a radical",
              "He continued to insist on the right of Black Americans to defend themselves"
            ],
            answer: 0,
            why: "Change needs a before and an after. Leaving the group that had taught him that white people were the enemy, and then arguing for co-operation, gives you both, with a date.",
            feedback: [
              "",
              "Joining the Nation of Islam in 1952 is where his position began, so it is the before, not the change. The change is leaving it in 1964 and arguing for co-operation.",
              "What other groups called him tells you how he was seen, not what he thought. For change you need two of his own positions and the date between them.",
              "This is the part that did not change: he argued for the right to self-defence before 1964 and after it. Pointing at something constant cannot evidence a change."
            ]
          },
          levels: {
            support: {
              steps: [
                "To evidence a change you need two things: what he thought before, and what he thought after.",
                "Go through the options and ask of each: does this give me both, with a date?",
                "Rule out anything that only tells you where he started.",
                "Rule out anything that tells you what other people said about him, or what stayed the same."
              ],
              example: {
                q: "Which is the better evidence that a school changed its policy: that the policy was written in 2019, or that phones were banned in 2019 and allowed again from 2024?",
                steps: ["The first gives one moment only.", "The second gives a before, an after and two dates.", "So the second is the evidence of change."],
                answer: "That phones were banned in 2019 and allowed again from 2024, because it gives a before and an after."
              }
            },
            core: { hint: "Evidence of change needs a before and an after. Three of these options give you only one of the two." },
            stretch: { extend: "Explain why the one thing that did not change, his insistence on self-defence, still mattered to how other leaders saw him after 1964." }
          },
          explain: "Say, in one sentence, what evidence of a change has to contain.",
          why: "Leaving the Nation of Islam in 1964, going on pilgrimage to Mecca, and then arguing that white and Black people could work together gives a clear before, a clear after and a date. Joining in 1952 is only the starting point; the extremist label is other people's view; and self-defence is the part that stayed the same."
        }
      ]
    }
  ],

  sources: {
    deckDump: "hi_y09_topic_4_us_civil_rights.txt",
    decksUsed: [
      "Assessment / Feedback.pptx",
      "L1 Segregation in America / L1 Segregation in America.pptx",
      "L1 Segregation in America / Jim Crow Information.pptx",
      "L1 Segregation in America / Jim Crow Laws Worksheet.pptx",
      "L1 Segregation in America / KKK Source Task.pptx",
      "L2 Parks & LRN - Fighting Segregation in the 1950s / L2 Fighting Segregation in the 1950s - Parks & LRN.pptx",
      "L2 Parks & LRN - Fighting Segregation in the 1950s / Education Segregration GR.pptx",
      "L3 MLK / L3 Martin Luther King.pptx",
      "L3 MLK / MLK_s Early Campaigns Task.pptx",
      "L3 MLK / MLK Speech Source Task.pptx",
      "L4 MLK (Selma) & Progress Check / L4 Selma & PCQ.pptx",
      "L4 MLK (Selma) & Progress Check / L4 Selma & PCQ COVER.pptx",
      "L5 Malcolm X / L5 Malcolm X.pptx",
      "L6 Civil Rights Review / L6 Civil Rights Review.pptx",
      "L7 Assessment / L7 Civil Rights Assessment.pptx",
      "US Civil Rights Composite.pptx",
      "Previous Resources / W2 Rosa Parks & LRN / L3 Rosa Parks.pptx",
      "Previous Resources / W2 Rosa Parks & LRN / L4 Little Rock Nine.pptx",
      "Previous Resources / W2 Rosa Parks & LRN / Education Segregration GR.pptx",
      "Previous Resources / W3 MLK / L6 MLK.pptx",
      "Previous Resources / W3 MLK / L7 MLK Selma.pptx",
      "Previous Resources / W4 PCQ & Malcolm X / L8 PCQ & Malcolm X.pptx",
      "Previous Resources / W5 MLK vs. MX / L10 MLK vs. MX.pptx"
    ],
    notes: "Lesson titles, sequence, learning objectives, keywords and the whole content spine are taken from the department's twenty-three decks (seven taught lessons L1 to L7, plus the composite slide, the assessment feedback bell work and six superseded decks in Previous Resources, which were read and used only to confirm that the current decks carry the same content). From the decks: the 1833 abolition in the British Empire and the USA's refusal to follow; the South's economic argument and the North's moral one; Lincoln's election, the eleven Confederate states, Appomattox, Booth, the 1868 return and the Thirteenth Amendment; the Emancipation Proclamation fragment; the 1930 Marion lynching and the newspaper task; Emmett Till; the Jim Crow character and the four statute examples; the four areas of the information sheet (political, social, legal, educational) with the poll tax, the literacy test, the grandfather loophole, the three social rules, the all-white juries and the school funding gap; the Klan (1865, white hoods and robes, burned churches, nooses, burning crosses, stopping Black voters, the NAACP as its main opponent, the 1915 reform, the four million members at its 1925 peak, Southern juries); the four KKK sources; Plessy vs Ferguson 1896, Oliver Brown 1951, the twelve other families, the NAACP, Thurgood Marshall, May 1954, and Marshall's 1967 appointment; Rosa Parks, Alabama, 1943, 1 December 1955, 5 December 1955, 20 December 1956, the companies' near-bankruptcy and the twelve significance statements on both sides; the Little Rock Nine, 1957 and the Army; King, Gandhi, civil disobedience, the four early campaigns (Montgomery, Atlanta 1960, Albany 1961, Birmingham 1963) and the word-fill that describes them; the letter from the Birmingham jail; 28 August 1963 and the 250,000 marchers; the Civil Rights Act of 1964; the Louisiana literacy test of thirty questions; Selma 1965, Bloody Sunday on 7 March 1965, the broadcast, and President Johnson's address of 15 March 1965; the Voting Rights Act of 1965; Malcolm X's early life (1925, 1928, 1931, 1939, 1941, 1946 to 1952), the Nation of Islam, the growth from 500 to over 75,000 members, the 1964 departure and pilgrimage, the four limitations, and the interpretation used in the review and assessment lessons. All explanations, questions, worked examples and model paragraphs are original. COPYRIGHT: nothing by Martin Luther King, Malcolm X, President Johnson or the deck's modern 'Historian A' is quoted anywhere; each is paraphrased and attributed, and verify.py fingerprints their best-known phrases, including the title phrase of King's 1963 speech, which this unit therefore names by its occasion (the March on Washington). The deck's four Jim Crow statutes and its KKK sources are paraphrased rather than quoted, which also keeps the racial terms they contain out of pupil text. The department's own model answers (the L4 progress-check answers and the two L6 student examples) are not reproduced and their phrases are banned. The only quotation in the unit is two fragments of President Lincoln's Emancipation Proclamation (1863), a public-domain United States government document, exactly as the deck prints them. Dates and facts the deck's own questions need but do not print (the Proclamation's year, 1863) are listed in NOTES.md for the Head of History to confirm. astra/2: per-option feedback on every mcq and gap, misconceptions with checks on all three numeric items, explain prompts on all eighteen modules, three context modules (chapters 2, 3 and 5), glossary chapters, four Connections groups, spacing; one `marks` field, on the chapter 6 interpretation task only, matching the deck's six-mark assessment sections; no widgets, no constellation, no pretext.l1."
  }
};
