// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 English Literature · Year 9 Autumn 1 · Gothic Literature (foundations for AQA 8702 / 8700) · schema astra/2
// Quotation convention: every quotation from a public-domain text is wrapped in curly double quotes “…”. verify.py checks every “…”
// against the CORPUS it holds (public-domain extracts as printed in the department's deck). Curly single quotes ‘…’ mark terms and
// original example sentences and are never quotations. No text still in copyright is quoted anywhere in this file.
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["englit-gothic"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "englit-gothic",
    subjectKey: "englit",
    subject: "English Literature",
    board: "AQA",
    spec: "KS3 → 8702",
    specRef: "KS3 Year 9 Autumn 1: Gothic Literature — foundations for GCSE English Literature 8702 (the 19th-century novel) and English Language 8700 Paper 1 Section B (creative writing)",
    year: 9,
    tier: "KS3",
    title: "Gothic Literature",
    sub: "From a ruined castle in 1764 to your own Gothic story: the conventions of the genre, the writers who made it, and how to use them.",
    bigQuestion: "What makes a story Gothic, and how can you use the conventions of the genre to write a Gothic narrative of your own?",
    lessonCount: 14,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer. No constellation: the engine lays the stars out.
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "An introduction to Gothic literature: conventions and language features", question: "Can you identify and use the conventions of the Gothic genre for desired effects?", keywords: ["genre", "convention", "atmosphere", "setting"] },
    { n: 2, title: "Settings: creating atmosphere", question: "Can you identify what makes a successful description of setting in Gothic stories?", keywords: ["setting", "atmosphere", "light and dark", "isolation"] },
    { n: 3, title: "Describing setting in your own writing", question: "Can you create a successful description of setting suitable for a Gothic story?", keywords: ["atmosphere", "eerie", "foreboding", "noun, adjective, verb, adverb"] },
    { n: 4, title: "Gothic characters", question: "Can you identify and recreate the character traits of typical Gothic characters?", keywords: ["trait", "archetype", "eponymous", "Byronic hero"] },
    { n: 5, title: "Gothic characters: antagonists", question: "How do writers create effective Gothic antagonists, and how can you replicate this in your own writing?", keywords: ["antagonist", "uncanny", "motivation"] },
    { n: 6, title: "Mid-unit lesson: openings", question: "What makes an effective opening to a story?", keywords: ["hook", "in medias res", "types of opening"] },
    { n: 7, title: "Suspense and tension", question: "Is there a difference between tension and suspense?", keywords: ["tension", "suspense", "atmosphere", "conventions"] },
    { n: 8, title: "Themes", question: "What are the common themes in Gothic literature?", keywords: ["theme", "entrapment", "isolation", "corruption of innocence"] },
    { n: 9, title: "Narrative voice", question: "Who is telling the story, and how does this affect the story?", keywords: ["narrative voice", "point of view", "unreliable narrator", "omniscient"] },
    { n: 10, title: "Narrative shifts", question: "What is a narrative shift, and how can it improve my writing?", keywords: ["narrative shift", "flashback", "flashforward", "drop in and describe"] },
    { n: 11, title: "Planning and drafting", question: "How do I structure my story?", keywords: ["story mountain", "Freytag's pyramid", "crisis", "resolution"] },
    { n: 12, title: "Writing a Gothic narrative: continuing a story", question: "How can I continue a story to create tension and atmosphere using Gothic techniques?", keywords: ["sensory imagery", "Gothic conventions", "varied sentence length"] },
    { n: 13, title: "Assessment: writing a scene in the Gothic genre inspired by an image", question: "Can I write a Gothic scene that uses conventions, techniques and structure for effect?", keywords: ["Gothic conventions", "literary techniques", "show, don't tell"] },
    { n: 14, title: "Extra lesson (if needed): Gothic covers and blurbs", question: "How do covers and blurbs suggest the Gothic genre and entice a reader?", keywords: ["blurb", "front cover", "genre"] }
  ],

  glossary: [
    { term: "atmosphere", means: "The mood or feeling of a place in a story: eerie, foreboding, oppressive.", chapter: "setting-and-atmosphere" },
    { term: "pathetic fallacy", means: "When the weather or the landscape seems to share a character's feelings.", chapter: "setting-and-atmosphere" },
    { term: "foreboding", means: "A heavy feeling that something bad is about to happen.", chapter: "setting-and-atmosphere" },
    { term: "uncanny", means: "Familiar, but strange in a way that disturbs you: a face that is almost right.", chapter: "gothic-characters" },
    { term: "archetype", means: "A character type that appears in story after story, so readers know it at once.", chapter: "gothic-characters" },
    { term: "Byronic hero", means: "A proud, rebellious, troubled antihero, named after the poet Lord Byron.", chapter: "gothic-characters" },
    { term: "damsel in distress", means: "A young woman placed in danger by a villain, often imprisoned, who needs rescuing.", chapter: "gothic-characters" },
    { term: "antagonist", means: "The character who works against the hero; in Gothic stories, often the villain or monster.", chapter: "gothic-characters" },
    { term: "tension", means: "Stress or nervousness created by a situation whose outcome is uncertain.", chapter: "tension-and-themes" },
    { term: "suspense", means: "Anticipation or worry about what is going to happen next.", chapter: "tension-and-themes" },
    { term: "foreshadowing", means: "Planting a small detail early that will matter later in the story.", chapter: "tension-and-themes" },
    { term: "pacing", means: "How fast or slow the story moves; slow builds suspense, fast builds tension.", chapter: "tension-and-themes" },
    { term: "narrative voice", means: "The way the narrator speaks and presents information to the reader.", chapter: "openings-voice-shifts" },
    { term: "unreliable narrator", means: "A narrator who cannot be trusted to give a true version of events.", chapter: "openings-voice-shifts" },
    { term: "narrative shift", means: "A move in time, focus, setting, mood or perspective that gives a story shape.", chapter: "openings-voice-shifts" },
    { term: "in medias res", means: "Latin for into the middle of things: an opening that starts in the middle of the action.", chapter: "openings-voice-shifts" }
  ],

  // astra/2: the Connections game. Four groups of four, all sixteen drawn from the glossary above.
  connections: [
    { group: "Creating atmosphere", terms: ["atmosphere", "pathetic fallacy", "foreboding", "uncanny"] },
    { group: "Gothic character types", terms: ["archetype", "Byronic hero", "damsel in distress", "antagonist"] },
    { group: "Keeping the reader on edge", terms: ["tension", "suspense", "foreshadowing", "pacing"] },
    { group: "Telling the story", terms: ["narrative voice", "unreliable narrator", "narrative shift", "in medias res"] }
  ],

  chapters: [
    // ───────────────────────────── CHAPTER 1 ─────────────────────────────
    {
      key: "what-is-gothic", n: 1,
      title: "What makes a story Gothic?",
      lead: "This chapter gives you the history of the genre and its conventions, so you can spot the Gothic in anything you read.",
      covers: [1],
      pretext: {
        words: [
          { word: "genre", means: "a type of story with its own rules and patterns", sentence: "Horror, romance and crime are all types of genre." },
          { word: "convention", means: "something a type of story usually includes", sentence: "A ruined castle is a convention of Gothic stories." },
          { word: "atmosphere", means: "the mood or feeling of a place in a story", sentence: "The dark corridor gave the scene a frightening atmosphere." },
          { word: "supernatural", means: "things science cannot explain, such as ghosts", sentence: "A door that opens by itself hints at the supernatural." },
          { word: "setting", means: "where and when a story takes place", sentence: "The setting is a lonely castle on a stormy night." }
        ],
        passage: [
          "Gothic stories are written to make you shiver.",
          "The first one appeared in 1764.",
          "It was The Castle of Otranto, by Horace Walpole.",
          "The word Gothic comes from the Goths, an ancient tribe.",
          "People thought the Goths were wild and rough.",
          "Later, the name was given to old buildings with tall, pointed arches.",
          "Gothic stories often happen in these old, dark places.",
          "They use ghosts, storms, blood and strange sounds.",
          "The things a genre usually includes are called conventions.",
          "Writers use them to build an atmosphere of fear.",
          "In this unit you will spot conventions in famous stories.",
          "Then you will use them in a Gothic story of your own.",
          "In Year 10 you will meet them again in Jekyll and Hyde."
        ]
      },
      sections: [
        {
          heading: "A castle, a tribe and a word",
          paragraphs: [
            "Gothic literature is a genre of fiction that first became popular in the eighteenth century. The word was first linked to a story in 1764, when Horace Walpole published The Castle of Otranto. Its second edition carried the subtitle A Gothic Story, and the name stuck. In the novel, a tyrant called Manfred pursues a young woman called Isabella through a castle full of hidden passages, while a giant helmet falls from the sky.",
            "Why ‘Gothic’? The Goths were an ancient Germanic tribe who helped to bring down the Roman Empire. For centuries their name meant ‘barbaric’. In the Middle Ages, builders put up churches and castles with tall, pointed arches and gargoyles, and later critics called this style Gothic as a kind of insult: wild, old and dark. Walpole borrowed the word, and the buildings, for his story.",
            "Many of the most famous Gothic novels were written in the late Romantic and early Victorian periods, between about 1790 and 1900. But the conventions of the genre are still everywhere today, from film and television to video games. Once you know them, you will see them everywhere."
          ],
          quote: { text: "Heaven nor hell shall impede my designs", source: "Walpole, The Castle of Otranto (1764), chapter 1" },
          tip: "Say ‘Otranto’ as oh-TRAN-toe. It is a real town in southern Italy, which is why the castle felt so far away to Walpole's English readers."
        },
        {
          heading: "Five stories, two hundred years",
          paragraphs: [
            "Your lesson gave you a timeline of five Gothic stories. The Castle of Otranto (1764) introduced the themes, settings and characters: supernatural events, a dark and isolated castle, a villain and a victim. Mary Shelley's Frankenstein (1818) raised the dead through science, and many readers take it as a warning about what happens when we play with powers we do not understand.",
            "Robert Louis Stevenson's Strange Case of Dr Jekyll and Mr Hyde (1886) explores good and evil inside one man, the Gothic idea of the double. Bram Stoker's Dracula (1897) gave us the vampire so completely that most vampires since have copied him. Susan Hill's The Woman in Black (1983) shows that the genre did not die with the Victorians: a solicitor is sent to a secluded house in a remote place and finds a haunting, an innocent victim and an isolated setting.",
            "Notice how the dates stretch across more than two hundred years. A genre is not a moment in history. It is a set of conventions that each new writer picks up and changes."
          ],
          quote: { text: "I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs.", source: "Shelley, Frankenstein (1818), chapter 5" },
          tip: "Frankenstein is the scientist, not the creature. Shelley never gives the creature a name. Getting this right marks you out as a careful reader."
        },
        {
          heading: "Conventions and language features",
          paragraphs: [
            "Your lesson sorted a list of Gothic ingredients into two groups. Conventions are the things a Gothic story usually contains: a dark, foreboding setting; a remote and isolated place; strange sounds; madness or insanity; an outsider or onlooker; ghosts and the supernatural; blood and body parts; religious symbolism; and constant tension. These are the ‘what’ of the genre.",
            "Language features are the ‘how’: the choices a writer makes with words. A first-person narrator makes you share the fear of one person who does not know what is coming. Pathetic fallacy lets the weather mirror a character's mood. Similes and metaphors turn a house into a face or a mist into a crowd of ghosts. One-word sentences stop the reader dead.",
            "Edgar Allan Poe's story The Fall of the House of Usher (1839) opens with almost every one of these at once: a dull, dark, soundless day, low clouds, a lone rider, and a house that seems to stare back at him. When you write, you need both lists: conventions to choose your ingredients, and language features to cook them."
          ],
          quote: { text: "During the whole of a dull, dark, and soundless day in the autumn of the year, when the clouds hung oppressively low in the heavens, I had been passing alone, on horseback, through a singularly dreary tract of country", source: "Poe, The Fall of the House of Usher (1839)" },
          tip: "Convention = what the story contains. Language feature = how the words are chosen. At GCSE you are rewarded for naming both."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which novel is usually called the first Gothic novel?", options: ["Frankenstein (1818)", "The Castle of Otranto (1764)", "Dracula (1897)", "The Woman in Black (1983)"], answer: 1, why: "Horace Walpole's The Castle of Otranto was published in 1764, and its second edition was subtitled A Gothic Story. The others came 54 to 219 years later.",
          feedback: [
            "Frankenstein is a Gothic novel, but it came 54 years later, in 1818. Walpole's The Castle of Otranto (1764) was the first to carry the label A Gothic Story.",
            "",
            "Dracula is the most famous Gothic novel, which is probably why it came to mind, but it was published in 1897, more than 130 years after The Castle of Otranto (1764).",
            "The Woman in Black is the newest book on your timeline (1983). It shows the genre is still alive, but the first Gothic novel was The Castle of Otranto in 1764."
          ] },
        { kind: "gap", q: "A ___ is something a type of story usually includes, such as a ruined castle or a ghost.", answer: "convention", options: ["convention", "genre", "theme"], why: "Conventions are the expected ingredients of a genre. Gothic conventions include isolated settings, the supernatural and constant tension.",
          feedback: {
            "genre": "You have named the whole type of story instead of one of its ingredients. Gothic is the genre; a ruined castle is one of its conventions, the things readers expect to find in it.",
            "theme": "A theme is a big idea a story explores, such as fear or entrapment. A castle or a ghost is not an idea but an ingredient, which is what a convention is."
          } },
        { kind: "mcq", q: "Which of these is a language feature rather than a Gothic convention?", options: ["A remote, isolated setting", "Pathetic fallacy", "Ghosts and the supernatural", "Blood and body parts"], answer: 1, why: "Pathetic fallacy is a choice about how the writer uses words: the weather describes a mood. The other three are things the story contains.",
          feedback: [
            "An isolated setting is something the story contains, so it is a convention. A language feature is a choice about words, like pathetic fallacy, where the weather reflects a character's mood.",
            "",
            "Ghosts are an ingredient of the story, so they are a convention. You are looking for a technique with words. Pathetic fallacy is the one in this list.",
            "Blood and body parts are content, so they count as a convention. The language feature here is pathetic fallacy: a way of writing, not a thing in the story."
          ] }
      ],
      modules: [
        {
          title: "Sort the ingredients",
          task: {
            kind: "match",
            q: "Match each Gothic ingredient to the group it belongs to and what it does.",
            pairs: [
              ["Pathetic fallacy", "Language feature: the weather reflects the character's mood"],
              ["One-word sentences", "Language feature: a single word stops the reader dead"],
              ["A remote, isolated setting", "Convention: nobody can hear the character call for help"],
              ["Religious symbolism", "Convention: chapels, crosses and graves hint at good and evil"],
              ["A first-person narrator", "Language feature: we share the fear of one person who does not know what is coming"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask of each item: is it a thing in the story (a convention) or a way of using words (a language feature)?",
                "Conventions are things you could draw: a castle, a ghost, a cross.",
                "Language features are choices you can only hear when you read: a short sentence, a comparison, who is speaking.",
                "Then match the effect on the right that fits."
              ],
              example: {
                q: "Practice: is a simile a convention or a language feature, and what does it do?",
                steps: ["A simile compares one thing to another using like or as.", "You cannot draw a simile; it is a way of using words.", "So it is a language feature, and it helps the reader picture something strange by linking it to something they know."],
                answer: "A language feature. It helps the reader picture the strange by comparing it to the familiar."
              }
            },
            core: { hint: "Two of the five are things you could draw on a map of the castle. The other three are things you can only do with words." },
            stretch: { extend: "Choose one convention and one language feature from the list and write a single Gothic sentence that uses both. Then explain which one does more to frighten the reader." }
          },
          why: "Conventions are what a Gothic story contains; language features are how it is written. Knowing which is which lets you plan a story (conventions) and then craft it (language features).",
          explain: "Say, in one sentence, how you can tell a convention from a language feature."
        },
        {
          title: "The Gothic timeline",
          task: {
            kind: "order",
            q: "Put these five Gothic stories in the order they were published, earliest first.",
            items: [
              "The Castle of Otranto (Horace Walpole)",
              "Frankenstein (Mary Shelley)",
              "Strange Case of Dr Jekyll and Mr Hyde (Robert Louis Stevenson)",
              "Dracula (Bram Stoker)",
              "The Woman in Black (Susan Hill)"
            ]
          },
          levels: {
            support: {
              steps: [
                "Start with the first Gothic novel: the one with the castle in its title, 1764.",
                "End with the only book from the twentieth century: 1983.",
                "Frankenstein was written by a teenager during the Romantic period, so it comes before the two Victorian novels.",
                "Of the two Victorian novels, the one about a scientist with a double came eleven years before the vampire."
              ],
              example: {
                q: "Practice: put these in order: Macbeth (Shakespeare), A Christmas Carol (Dickens), Beowulf (unknown poet).",
                steps: ["Beowulf is an Old English poem from over a thousand years ago.", "Shakespeare wrote Macbeth in about 1606.", "Dickens wrote A Christmas Carol in 1843."],
                answer: "Beowulf; Macbeth; A Christmas Carol."
              }
            },
            core: { hint: "1764, 1818, 1886, 1897, 1983. Match each date to its period: Georgian, Romantic, Victorian, Victorian, modern." },
            stretch: { extend: "Each book on the timeline added something to the genre: a castle, a creature, a double, a vampire, a modern haunting. Write one sentence for each saying what it added, and then say which addition you think changed the genre most." }
          },
          why: "Otranto (1764) started the genre; Frankenstein (1818) brought science; Jekyll and Hyde (1886) brought the double; Dracula (1897) fixed the vampire; The Woman in Black (1983) proved the genre still works today.",
          explain: "Say which two books on the timeline are closest in date, and what they have in common."
        },
        {
          title: "Spot the conventions",
          task: {
            kind: "mcq",
            q: "Read this sentence: ‘Alone on the moor, I heard the chapel bell toll once, though nobody had rung it in a hundred years.’ Which Gothic convention is NOT used here?",
            options: ["An isolated setting", "The supernatural", "Blood and body parts", "Religious symbolism"],
            answer: 2,
            feedback: [
              "‘Alone on the moor’ puts the narrator far from help, which is the isolated setting convention. Look instead for an ingredient that does not appear at all in the sentence.",
              "A bell that rings when nobody has rung it for a hundred years is the supernatural at work. That convention is used. Find the one that is missing.",
              "",
              "A chapel bell is religious symbolism: a holy object behaving strangely. That is in the sentence. The missing ingredient is blood and body parts."
            ]
          },
          levels: {
            support: {
              steps: [
                "Underline the place words: where is the narrator, and is anyone nearby?",
                "Underline anything that could not happen in normal life.",
                "Underline anything to do with church, God or the holy.",
                "The convention left over, with nothing underlined, is your answer."
              ],
              example: {
                q: "Practice: ‘The candle guttered, and in the mirror a second face looked back over my shoulder.’ Which convention is missing: darkness, the supernatural, or madness?",
                steps: ["A guttering candle gives darkness.", "A second face in the mirror is supernatural.", "Nothing shows the narrator losing their mind."],
                answer: "Madness is missing."
              }
            },
            core: { hint: "Three of the four options can be matched to a word in the sentence. One cannot." },
            stretch: { extend: "Rewrite the sentence so that it uses the missing convention as well, without making it longer than 25 words. Then say which version is more frightening, and why." }
          },
          why: "The sentence has isolation (alone on the moor), the supernatural (a bell that rings itself) and religious symbolism (the chapel), but no blood or body parts.",
          explain: "Say, in one sentence, which word in the sentence told you the supernatural was present."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 2 ─────────────────────────────
    {
      key: "setting-and-atmosphere", n: 2,
      title: "Setting and atmosphere",
      lead: "This chapter shows you where Gothic stories happen, how great writers describe those places, and how to build your own description word by word.",
      covers: [2, 3],
      pretext: {
        words: [
          { word: "eerie", means: "strange and frightening in a quiet way", sentence: "An eerie silence hung over the graveyard." },
          { word: "foreboding", means: "a feeling that something bad is coming", sentence: "The locked gate filled him with foreboding." },
          { word: "isolated", means: "far away from other people and from help", sentence: "The house was isolated, miles from the nearest village." },
          { word: "pathetic fallacy", means: "when the weather matches a character's feelings", sentence: "The storm broke as she wept: that is pathetic fallacy." },
          { word: "ruin", means: "a building that has fallen apart with age", sentence: "Ivy covered the ruin of the old abbey." }
        ],
        passage: [
          "Gothic stories need the right place.",
          "Think of a ruined castle, or a house with no lights on.",
          "Think of a graveyard at night, or a dark forest.",
          "These places are old, cold and far from help.",
          "Writers describe them carefully to build an atmosphere.",
          "They use light and dark.",
          "They use the weather to show how a character feels.",
          "They hint that something is hidden.",
          "You can build a description one word at a time.",
          "Start with a noun, such as the gate.",
          "Add an adjective: the rusted gate.",
          "Add a verb and an adverb: the rusted gate groans softly.",
          "Now the reader can see and hear your setting."
        ]
      },
      sections: [
        {
          heading: "Where Gothic stories happen",
          paragraphs: [
            "Ask a class to name a Gothic setting and the answers come fast: an abandoned house, a haunted mansion, a castle, a graveyard, a dark forest, a hidden passage, anywhere at all at night. What do these places have in common? They are old. They are falling apart. They are far from other people, so nobody will come when you shout. And they are dark, so you cannot see what is coming.",
            "Ann Radcliffe, one of the most popular Gothic writers of the 1790s, sends two young men to explore a ruined fortress at night in The Italian. The ruins are high on a cliff, the walls are crumbling, and when one of them calls for his friend only the echoes answer. Everything that makes the place dangerous also makes it Gothic: height, decay, isolation and darkness.",
            "Your lesson built a list of ingredients for a successful Gothic setting: the use of light and dark; building tension; describing the buildings and surroundings so that they hint at fear, isolation or violence; placing a character somewhere in the scene; and using weather and nature to reflect the character's feelings or to create an oppressive atmosphere. Keep this list. You will use it as your success criteria."
          ],
          quote: { text: "Bonarmo looked round in vain for his friend, and the echoes of his own voice only, among the rocks, replied to his repeated calls.", source: "Radcliffe, The Italian (1797)" },
          tip: "Echoes are a Gothic favourite. They prove the place is huge, empty and made of stone, in a single sound."
        },
        {
          heading: "Reading the masters: Poe and Stoker",
          paragraphs: [
            "Edgar Allan Poe's narrator rides alone towards the House of Usher at the end of a dark autumn day. Before he has even described the house, he tells us how it makes him feel: a gloom he cannot explain. Then he lists what he sees. The walls are bleak. The windows are vacant and eye-like, so the house seems to stare back. The trees are white and decayed, like bones. Poe gives the building a face and a body, and both are dying.",
            "Bram Stoker uses a different method in Dracula. Jonathan Harker writes a journal inside the Count's castle, and he realises that every door is locked. The setting is described through what it does to him: it is a prison, and he is a prisoner. Notice the exclamation mark. Harker is not describing stone; he is panicking.",
            "Both writers connect place and person. Poe's narrator feels the gloom of the house in his own spirit; Harker's nerves break down the longer he is trapped. When you describe a setting, always ask: what is this place doing to the person inside it?"
          ],
          quote: { text: "upon the bleak walls—upon the vacant eye-like windows—upon a few rank sedges—and upon a few white trunks of decayed trees", source: "Poe, The Fall of the House of Usher (1839)" },
          tip: "‘Vacant eye-like windows’ is personification. A house with eyes can watch you. Steal the idea, not the words."
        },
        {
          heading: "Building a description, one word at a time",
          paragraphs: [
            "Your lesson gave you a method you can use on any image. Start by naming the nouns you can see: the gate, the tower, the moon, the windows. Add an adjective to each that creates the atmosphere you want: mysterious, eerie, spooky or foreboding. Then add a verb that shows what the noun is doing, and an adverb that describes how. A still picture starts to move.",
            "Then stretch each sentence. Use two adjectives separated by a comma. Use a preposition to tell the reader where to look. Add a subordinate clause, a chunk of extra information between commas, to slow the sentence down. Finally, decide where in the image you will begin and how you will travel through it: the sky first, then the tower, then the door, then inside."
          ],
          worked: {
            q: "Build one Gothic sentence from the noun ‘gate’.",
            steps: [
              "Noun: the gate.",
              "Adjective: the rusted gate.",
              "Verb: the rusted gate groans.",
              "Adverb: the rusted gate groans softly.",
              "Two adjectives with a comma: the rusted, crooked gate groans softly.",
              "Preposition and subordinate clause: Beyond the yew trees, the rusted, crooked gate, loosened by a century of storms, groans softly."
            ],
            answer: "Beyond the yew trees, the rusted, crooked gate, loosened by a century of storms, groans softly."
          },
          tip: "When you have a page of ideas, be ruthless. Keep the descriptions that build the atmosphere and cross out the rest."
        },
        {
          heading: "Light, dark and the weather",
          paragraphs: [
            "Light and dark are the Gothic writer's cheapest and best tool. Moonlight shows just enough to frighten. A single candle makes everything outside its circle unknown. Shadows move. When Harker writes that he starts at his own shadow, he is telling us how far his nerves have gone.",
            "Pathetic fallacy means letting the weather or the landscape reflect a character's feelings. A storm breaks as the hero loses hope; fog thickens as a secret is hidden. It is called a fallacy because the weather does not really care about us, but readers feel the link anyway. Use it to drop the reader into a mood before anything has happened.",
            "Your lesson also asked you to climb a ladder of vocabulary. ‘Dark’ can become gloomy, sombre or murky. ‘Scary’ can become eerie, chilling, haunting or sinister. The further you climb, the more precise the atmosphere you create. Choose the word that fits the feeling, not just the biggest word you know."
          ],
          quote: { text: "I am beginning to feel this nocturnal existence tell on me. It is destroying my nerve. I start at my own shadow, and am full of all sorts of horrible imaginings.", source: "Stoker, Dracula (1897), chapter 3" },
          tip: "‘Nocturnal’ means ‘of the night’. Harker is living by night because the Count does. The word itself makes him sound like a creature."
        }
      ],
      gate: [
        { kind: "mcq", q: "What is pathetic fallacy?", options: ["A character who is weak and pathetic", "When the weather or nature reflects a character's feelings", "A statement in a story that turns out to be false", "A list of adjectives before a noun"], answer: 1, why: "Pathetic comes from an old word for feeling, and fallacy means a mistaken idea: the weather seems to share our feelings.",
          feedback: [
            "The word pathetic has tricked you. In this term it comes from an old word meaning feeling, not weakness. Pathetic fallacy is when the weather or landscape seems to share a character's feelings.",
            "",
            "A fallacy is a mistaken idea, but pathetic fallacy is not a lie in the plot. It is the mistaken idea that the weather shares our feelings, which writers use on purpose to create mood.",
            "A list of adjectives is a way to build description, which your lesson also taught, but it has its own name. Pathetic fallacy is specifically about weather and nature mirroring a character's mood."
          ] },
        { kind: "gap", q: "In Poe's description, the House of Usher has ___ eye-like windows.", answer: "vacant", options: ["vacant", "glowing", "shattered"], why: "Vacant means empty. The windows are like eyes with nobody behind them, which is why the house feels dead and watching at once.",
          feedback: {
            "glowing": "Glowing windows would suggest life and warmth inside. Poe wants the opposite: the windows are vacant, empty eyes with no life behind them.",
            "shattered": "Shattered is a word from your own writing lesson, not from Poe. His windows are vacant: whole, but empty, like the eyes of something dead."
          } },
        { kind: "mcq", q: "In what order did your lesson build a description?", options: ["Adverb, verb, adjective, noun", "Noun, adjective, verb, adverb", "Verb, noun, adverb, adjective", "Adjective, adverb, noun, verb"], answer: 1, why: "Name the thing (noun), describe it (adjective), make it do something (verb), say how (adverb). Each step adds to the last.",
          feedback: [
            "You have the four word types, but in reverse. You cannot describe how something moves before you have named it. Start with the noun, then adjective, verb and adverb.",
            "",
            "A verb needs something to do the action, so the noun must come first. The order is noun, adjective, verb, adverb.",
            "An adjective describes a noun and an adverb describes a verb, so each must come after the word it describes. The order is noun, adjective, verb, adverb."
          ] }
      ],
      modules: [
        {
          title: "Describe a Gothic setting",
          task: {
            kind: "written",
            q: "Describe a ruined castle on a hillside at night, for the opening of a Gothic story. Create an eerie, foreboding atmosphere. Write one paragraph of six to eight sentences.",
            criteria: [
              "I use at least three Gothic conventions, such as an isolated setting, darkness, decay or strange sounds.",
              "I build my nouns with well-chosen adjectives, verbs and adverbs.",
              "I use light and dark, and the weather, to create atmosphere (pathetic fallacy).",
              "I vary my sentence openings, including at least one preposition and one subordinate clause.",
              "I show the atmosphere through detail rather than telling the reader it is scary."
            ],
            model: "The castle had stopped pretending to be a building. Its last tower leaned into the wind like a tired old man against a wall, and the moon, thin as a fingernail, picked out the holes where windows had been. Below it, the hillside fell away into fog. Nothing moved. Then, from somewhere inside the walls, a door that should have rotted away a hundred years ago swung shut with a boom that rolled down the valley. The fog did not stir. It only climbed a little higher, as if it wanted to see."
          },
          levels: {
            support: {
              steps: [
                "Plan: list four nouns from the scene (tower, moon, fog, door) and give each an adjective, a verb and an adverb.",
                "Decide your route: sky, then the castle, then the ground, then one sound from inside.",
                "Write one short sentence (one to three words) somewhere in the middle for shock.",
                "Check: have you used the weather to create mood, and have you shown rather than told?"
              ],
              example: {
                q: "Practice: describe a church at dusk in three sentences, using the noun, adjective, verb, adverb method.",
                steps: [
                  "Nouns: spire, bell, door. Adjectives: crooked, silent, iron-bound.",
                  "Verbs and adverbs: the spire leans wearily; the bell waits silently; the door stands tightly shut.",
                  "Add light and weather: the last light drains from the sky."
                ],
                answer: "The crooked spire leaned wearily over the graves as the last light drained from the sky. Inside its tower, a silent bell waited. The iron-bound door stood tightly shut, as it had for years."
              }
            },
            core: { hint: "Use the five ingredients from your lesson as a checklist: light and dark; tension; buildings that hint at fear, isolation or violence; where the character is; weather or nature." },
            stretch: { extend: "Rewrite your paragraph so that a character is present but never named: show their fear only through what they notice. Then explain which version builds more foreboding, and why." }
          },
          why: "A strong setting paragraph chooses a route through the image, builds each noun with precise words, uses light and weather to set the mood, and shows fear through details, such as a door that shuts itself, rather than stating it.",
          explain: "Say which single detail in your paragraph does most to create foreboding, and why you chose it.",
          contexts: [
            { label: "A graveyard",
              q: "Describe an overgrown graveyard beside a locked church, at midnight in winter, for the opening of a Gothic story. Create an eerie, foreboding atmosphere. Write one paragraph of six to eight sentences.",
              why: "A graveyard gives you religious symbolism for free: crosses, a locked church door, names worn off stones. Use the frost and the dark to create the mood, and let one sound break the silence." },
            { label: "A forest",
              q: "Describe a dark forest at dusk, with a path that is disappearing, for the opening of a Gothic story. Create an eerie, foreboding atmosphere. Write one paragraph of six to eight sentences.",
              why: "In a forest the threat comes from nature itself: branches that reach, roots that trip, light that fails. Isolation is the key convention here, so make the reader feel how far the path has gone." },
            { label: "An abandoned manor",
              q: "Describe an abandoned manor house at the end of a long drive, seen as a storm begins, for the opening of a Gothic story. Create an eerie, foreboding atmosphere. Write one paragraph of six to eight sentences.",
              why: "An abandoned house is about decay and hidden things: boarded windows, a door standing open, one light where there should be none. The storm gives you pathetic fallacy from the first sentence." }
          ]
        },
        {
          title: "Grow the sentence",
          task: {
            kind: "order",
            q: "Put the six steps of building a description in the order your lesson taught them, from a bare noun to a full Gothic sentence.",
            items: [
              "Name a noun from the image: the gate.",
              "Add an adjective: the rusted gate.",
              "Add a verb that shows what the noun is doing: the rusted gate groans.",
              "Add an adverb that describes the verb: the rusted gate groans softly.",
              "Add a second adjective, separated by a comma: the rusted, crooked gate groans softly.",
              "Add a preposition and a subordinate clause: Beyond the yew trees, the rusted, crooked gate, loosened by a century of storms, groans softly."
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the shortest version: that is the start.",
                "Each step adds exactly one new kind of word or clause. Read each item and ask what has been added since the last.",
                "The longest version, with a preposition and a clause between commas, is the end."
              ],
              example: {
                q: "Practice: put these in order: the shattered glass glitters; the glass; the shattered glass glitters coldly; the shattered glass.",
                steps: ["Noun only: the glass.", "Add the adjective: the shattered glass.", "Add the verb: the shattered glass glitters.", "Add the adverb: the shattered glass glitters coldly."],
                answer: "the glass; the shattered glass; the shattered glass glitters; the shattered glass glitters coldly."
              }
            },
            core: { hint: "Count the words. Each step makes the sentence longer, and the last two add commas." },
            stretch: { extend: "Take the final sentence and change the preposition, the subordinate clause and the adverb so that the gate becomes welcoming instead of frightening. Which words did the most work?" }
          },
          why: "The method grows a sentence in layers: noun, adjective, verb, adverb, then a second adjective, then a preposition and a subordinate clause. Each layer gives the reader one more thing to see, hear or feel.",
          explain: "Say which of the six steps you would be most likely to forget, and how you will remember it."
        },
        {
          title: "Find the pathetic fallacy",
          task: {
            kind: "mcq",
            q: "Which sentence uses pathetic fallacy?",
            options: [
              "Rain hammered the window as Eliza wept over the letter.",
              "Eliza ate her breakfast slowly and read the letter twice.",
              "The castle had twelve rooms, a tower and a well.",
              "The sun shone on the picnic while Eliza wept over the letter."
            ],
            answer: 0,
            feedback: [
              "",
              "There is no weather or nature in this sentence at all, so it cannot be pathetic fallacy. Look for a sentence where the sky or the landscape seems to share a character's feelings.",
              "This is a plain description of a building. Pathetic fallacy needs two things: a feeling, and weather or nature that mirrors it. Neither is here.",
              "Close: there is weather and a feeling. But the sunshine contradicts Eliza's tears rather than matching them. That is contrast, and it can be powerful, but pathetic fallacy is when the weather agrees with the mood."
            ]
          },
          levels: {
            support: {
              steps: [
                "Underline any weather or nature in each sentence.",
                "Underline any feeling a character has.",
                "Pathetic fallacy needs both, and the weather must match the feeling."
              ],
              example: {
                q: "Practice: is ‘Thunder rolled across the hills as the old king finally lost his temper’ pathetic fallacy?",
                steps: ["Weather: thunder.", "Feeling: anger.", "They match: loud, violent weather for a violent temper."],
                answer: "Yes. The thunder mirrors the king's anger."
              }
            },
            core: { hint: "Two sentences have weather and a feeling. In only one of them do the two agree." },
            stretch: { extend: "Rewrite option D so that the weather matches Eliza's grief, then rewrite option A so that the weather contrasts with it. Which is more effective for a Gothic opening, and why?" }
          },
          why: "Only the first sentence has weather (rain) that mirrors a feeling (grief). The fourth has weather that contrasts with the feeling; the others have no weather at all.",
          explain: "Say, in one sentence, why option D is not pathetic fallacy even though it has weather and a feeling."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 3 ─────────────────────────────
    {
      key: "gothic-characters", n: 3,
      title: "Gothic characters: heroes, victims and villains",
      lead: "This chapter introduces the character types that Gothic writers return to again and again, and shows you how to build an antagonist readers cannot forget.",
      covers: [4, 5],
      pretext: {
        words: [
          { word: "archetype", means: "a type of character that appears in many stories", sentence: "The brooding, lonely hero is an archetype." },
          { word: "trait", means: "a quality that makes a character who they are", sentence: "Pride is one of his strongest traits." },
          { word: "eponymous", means: "giving their name to the title of the book", sentence: "Dracula is the eponymous villain of Dracula." },
          { word: "antagonist", means: "the character who works against the hero", sentence: "The vampire is the antagonist of the story." },
          { word: "uncanny", means: "familiar, but strange in a way that disturbs you", sentence: "His smile was uncanny: almost right, but not quite." }
        ],
        passage: [
          "Gothic stories use the same kinds of character again and again.",
          "We call these character types archetypes.",
          "The Byronic hero is proud, moody and alone.",
          "He is named after the poet Lord Byron.",
          "The damsel in distress is a young woman in danger.",
          "She is often locked in a castle by a cruel man.",
          "The femme fatale is charming but dangerous to know.",
          "The antagonist is the villain who works against the hero.",
          "Dracula and Frankenstein's creature are famous antagonists.",
          "Writers make them frightening by making them almost human.",
          "Something small is wrong: the teeth, the hands, the eyes.",
          "This feeling is called the uncanny.",
          "You will create a Gothic character of your own."
        ]
      },
      sections: [
        {
          heading: "The Byronic hero",
          paragraphs: [
            "An archetype is a character type that turns up in story after story, so that readers know it at once. Gothic writers love four: the Byronic hero, the damsel in distress, the femme fatale and the antagonist. Many Gothic novels also have an eponymous hero or villain: a character whose name is the title, like Macbeth, Othello or Dracula.",
            "The Byronic hero is named after the Romantic poet Lord Byron, who was famously described as ‘mad, bad, and dangerous to know’. He is an antihero: rebellious, arrogant, anti-social or living in exile, and darkly, dangerously attractive. He works against the rules of society. He is a tortured soul whose inner turmoil makes him the centre of his own world, and his emotional scars run too deep for ordinary people to understand.",
            "Emily Brontë's Heathcliff in Wuthering Heights (1847) is the archetype in full. When the narrator, Lockwood, arrives at the house, Heathcliff's black eyes withdraw suspiciously under his brows and his fingers retreat into his waistcoat. He invites Lockwood in through closed teeth. He is rude, closed and alone, and Lockwood is fascinated."
          ],
          quote: { text: "I felt interested in a man who seemed more exaggeratedly reserved than myself.", source: "E. Brontë, Wuthering Heights (1847), chapter 1" },
          tip: "Byronic heroes are shown, not told. Brontë never writes ‘Heathcliff was moody’. She shows his eyes, his hands and his teeth."
        },
        {
          heading: "The damsel in distress and the femme fatale",
          paragraphs: [
            "The word ‘damsel’ comes from the French for ‘young lady’. The damsel in distress is one of the oldest Gothic characters: a beautiful, innocent or helpless young woman, often imprisoned in a castle or a monastery and terrorised by a cruel nobleman or a sinister religious order. She is placed in terrible danger by a villain and usually needs a male hero to rescue her.",
            "Isabella in The Castle of Otranto is the first of them. Manfred, the father of the man she was going to marry, tells her he will divorce his wife and marry her himself. He seizes her cold hand; she shrieks and breaks free. At that moment the moon shows the plumes of a giant helmet waving at the window, and she cries that heaven itself is against him. He answers that neither heaven nor hell will stop him.",
            "The femme fatale, French for ‘deadly woman’, is her opposite: charming, mysterious and dangerous. People who are drawn to her come to harm, and nobody escapes her without being changed. In your lesson you looked at Carmilla, from Sheridan Le Fanu's 1872 vampire story, whose narrator is drawn to her and repelled by her at the same time. Be careful with both archetypes: they are old stereotypes about women, and modern Gothic writers often turn them upside down."
          ],
          quote: { text: "At those words he seized the cold hand of Isabella, who was half-dead with fright and horror. She shrieked and started from him.", source: "Walpole, The Castle of Otranto (1764), chapter 1" },
          tip: "A damsel who rescues herself, or a femme fatale who is the hero, is still using the archetype. Breaking a pattern only works if the reader knows the pattern."
        },
        {
          heading: "Antagonists and the uncanny",
          paragraphs: [
            "The antagonist is the character who works against the hero. In Gothic fiction the antagonist is often the most memorable figure in the book. Two of the most famous are Count Dracula and Frankenstein's creature. Your lesson asked you to describe them before you read how their authors did it, which is a good test of what you already knew about the genre.",
            "Stoker builds Dracula from ordinary human features with small, wrong details. The nose is strong and aquiline, the forehead high: a nobleman's face. But the teeth are peculiarly sharp and white and protrude over the lips; the ears are pointed; the palms have hairs in the centre; the nails are long and cut to a point. Nothing is a monster on its own. Together, they make Harker shudder. This is the uncanny: something familiar that is strange in a way that disturbs you.",
            "Mary Shelley does the reverse. Victor Frankenstein chose each feature of his creature to be beautiful: lustrous black hair, teeth of pearly whiteness. But when the creature breathes, those beautiful parts form a horrid contrast with its watery eyes, shrivelled skin and straight black lips. Beauty next to decay is more horrifying than decay alone. Both antagonists have a motive: Dracula wants to corrupt; the creature wants revenge on the maker who abandoned him."
          ],
          quote: { text: "Strange to say, there were hairs in the centre of the palm. The nails were long and fine, and cut to a sharp point. As the Count leaned over me and his hands touched me, I could not repress a shudder.", source: "Stoker, Dracula (1897), chapter 2" },
          tip: "Give your antagonist one wrong detail that the narrator notices too late. The reader will remember it longer than any amount of blood."
        },
        {
          heading: "Writing your own character: show, don't tell",
          paragraphs: [
            "When you describe a character, decide first what you want the reader to think about them, then show it rather than stating it. ‘He was cruel’ tells. ‘He smiled as the dog whimpered’ shows. Your lesson called this implicit rather than explicit description. The reader works it out, and that makes them feel clever, and uneasy.",
            "Plan a route, as you did with setting. You can start at the top of the body and move down, start with clothing and then zoom in on particular features, or zoom in on a single detail and then zoom out. Ask what your antagonist wants. Are they after the damsel? In league with the femme fatale? Driven by revenge? Do they have supernatural powers, or are they simply evil?",
            "Your success criteria were: use a range of vocabulary to imply details about the character; use a range of sentence structures to keep the writing engaging; use interesting comparisons so the reader can build an image; and build the description for effect, towards a sense of the uncanny or of horror. A peer who reads your work should be able to say what your character is like without being told."
          ],
          quote: { text: "his hair was of a lustrous black, and flowing; his teeth of a pearly whiteness; but these luxuriances only formed a more horrid contrast with his watery eyes", source: "Shelley, Frankenstein (1818), chapter 5" },
          tip: "A comparison does two jobs: it helps the reader see, and it tells them how to feel. ‘Teeth like piano keys’ and ‘teeth like gravestones’ describe the same mouth."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which set of traits describes a Byronic hero?", options: ["Cheerful, sociable and easy to understand", "Rebellious, proud, troubled and set apart from society", "Weak, innocent and in need of rescue", "Loyal, obedient and respectful of authority"], answer: 1, why: "The Byronic hero is an antihero named after Lord Byron: rebellious, arrogant, anti-social or exiled, and tortured by inner turmoil.",
          feedback: [
            "This is the opposite of the archetype. A Byronic hero is moody, closed and hard to understand; his emotional scars run too deep for ordinary people to read.",
            "",
            "Those are the traits of the damsel in distress, the archetype that needs rescuing. The Byronic hero is powerful and dangerous, not helpless.",
            "A Byronic hero breaks rules rather than following them. He works against the grain of society, so obedience and respect for authority are the last things he shows."
          ] },
        { kind: "gap", q: "A character whose name is the title of the book is called an ___ hero or villain.", answer: "eponymous", options: ["eponymous", "anonymous", "archetypal"], why: "Eponymous means giving your name to something. Macbeth, Othello and Dracula are all eponymous characters.",
          feedback: {
            "anonymous": "Anonymous means without a name, which is the reverse of what you want. An eponymous character gives their name to the whole book, like Dracula.",
            "archetypal": "An archetypal character is one that fits a familiar type, such as the Byronic hero. A character whose name is the title is eponymous, whether or not they fit a type."
          } },
        { kind: "mcq", q: "Why does Count Dracula's appearance feel uncanny to Jonathan Harker?", options: ["He looks nothing like a human being", "He looks almost human, but small details are wrong, such as the hairs on his palms", "He is invisible except for his eyes", "He wears a mask that hides his face"], answer: 1, why: "The uncanny is the familiar made strange. Dracula has a nobleman's face, but pointed ears, sharp protruding teeth, hairy palms and pointed nails.",
          feedback: [
            "If he looked nothing like a human he would be a monster, not uncanny. Stoker gives him a nobleman's face and then spoils it with small wrong details, which is far more disturbing.",
            "",
            "Harker sees the Count clearly, down to the hairs on his palms. The horror is in what he can see, not in what he cannot.",
            "There is no mask. Harker describes the Count's actual face and hands in detail. The uncanny effect comes from real features that are slightly wrong."
          ] }
      ],
      modules: [
        {
          title: "Which archetype?",
          task: {
            kind: "match",
            q: "Match each character description to the Gothic archetype it fits.",
            pairs: [
              ["A brooding nobleman who lives alone on the moor, scorns his neighbours and will not speak of his past", "Byronic hero"],
              ["A young heiress locked in a tower room by the guardian who wants her fortune", "Damsel in distress"],
              ["A charming stranger whose every admirer comes to harm, and who seems to enjoy it", "Femme fatale"],
              ["The pale figure who hunts the hero from chapter one and wants revenge on the family", "Antagonist"],
              ["The character whose name is on the cover of the book", "Eponymous character"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Ask: is this character in danger, or is this character the danger?",
                "If the character is the danger, ask: do they charm their victims (femme fatale) or hunt them (antagonist)?",
                "If nobody is in danger yet, look for pride and loneliness (Byronic hero) or a name on the cover (eponymous)."
              ],
              example: {
                q: "Practice: a scientist who defies nature, hides from his friends and is tormented by what he has done. Which archetype?",
                steps: ["He is not in danger from a villain, so not a damsel.", "He breaks society's rules and is tortured inside.", "That is the Byronic hero."],
                answer: "Byronic hero: Victor Frankenstein fits the type closely."
              }
            },
            core: { hint: "Two archetypes are defined by what they do to others; one by what is done to them; one by his mood; one by the cover of the book." },
            stretch: { extend: "Choose one archetype and write a two-sentence description that reverses the reader's expectation of it, for example a damsel who is the most dangerous person in the castle. Explain what you kept from the archetype and what you changed." }
          },
          why: "Archetypes are defined by their role: the Byronic hero by his pride and isolation, the damsel by her danger, the femme fatale by the harm her charm causes, the antagonist by working against the hero, and the eponymous character by giving the book its name.",
          explain: "Say which two archetypes in the list are easiest to confuse, and what tells them apart."
        },
        {
          title: "Describe your antagonist",
          task: {
            kind: "written",
            q: "A frightened first-person narrator meets the master of a lonely castle for the first time. Describe him so that the reader feels the uncanny: almost normal, but wrong. Write one paragraph of six to eight sentences.",
            criteria: [
              "I write in the first person, so the reader shares the narrator's unease.",
              "I use a range of vocabulary to imply what the character is like, rather than stating it.",
              "I include at least one small, wrong detail that creates the uncanny.",
              "I use interesting comparisons (a simile or metaphor) to help the reader see the character.",
              "I vary my sentence structures and build the description towards an effect."
            ],
            model: "My host rose as I entered, and the first thing I noticed was how little noise he made. He was tall and courteous, with the long face of an old portrait, and he bowed with the ease of a man who had been bowing for a very long time. His hand, when he took mine, was cool and dry as paper. I told myself the fire had not reached that side of the room. Then he smiled, and his lips drew back a fraction too far, so that for a moment I was looking not at a man's mouth but at an arrangement of teeth. ‘You must be tired,’ he said kindly, and I found that I was."
          },
          levels: {
            support: {
              steps: [
                "Decide the one wrong detail (hands, teeth, eyes, voice, shadow) and save it for the middle of the paragraph.",
                "Open with something ordinary and polite, so the reader relaxes.",
                "Add a comparison that makes the character seem old, cold or not quite alive.",
                "End on the narrator's reaction, shown through what they do or feel, not the word ‘scared’."
              ],
              example: {
                q: "Practice: in three sentences, describe a kindly-looking nurse so that something feels wrong.",
                steps: ["Start ordinary: her uniform is spotless, her voice soft.", "Add the wrong detail: she never blinks.", "End with the narrator's reaction shown, not told."],
                answer: "Her uniform was spotless and her voice was soft as a lullaby. It took me a long time to understand what was wrong: in all the hours she sat beside my bed, she never once blinked. I began to pretend to sleep."
              }
            },
            core: { hint: "Build the character from almost-normal details. One wrong thing, noticed late, is worth ten monstrous ones." },
            stretch: { extend: "Give your antagonist a motive that the narrator does not yet understand but the reader can guess. Then explain how a reader who knows Dracula would react to your character differently from a reader who does not." }
          },
          why: "Stoker and Shelley both make their antagonists from recognisable human parts with something wrong. A first-person narrator who notices the wrong detail late, and shows a reaction rather than naming a feeling, lets the reader feel the uncanny for themselves.",
          explain: "Say which wrong detail you chose for your antagonist, and why a reader would find it more disturbing than an obvious monster.",
          contexts: [
            { label: "The thing in the laboratory",
              q: "A frightened first-person narrator sees, for the first time, the creature they have made in their laboratory open its eyes. Describe it so that the reader feels the uncanny: almost normal, but wrong. Write one paragraph of six to eight sentences.",
              why: "Shelley's method is contrast: beautiful parts, horrid whole. Choose two features your narrator meant to be perfect and show how they fail together. The narrator's horror at their own work gives you guilt as well as fear." },
            { label: "The woman at the graveside",
              q: "A frightened first-person narrator notices a woman standing alone at a graveside who seems to have been there a very long time. Describe her so that the reader feels the uncanny: almost normal, but wrong. Write one paragraph of six to eight sentences.",
              why: "A graveside figure borrows the ghost convention without saying the word. Make her clothes, stillness or shadow slightly wrong, and let the narrator realise it only when they look away and back." },
            { label: "The stranger on the night road",
              q: "A frightened first-person narrator is offered a lift by a stranger on a lonely road at night. Describe the stranger so that the reader feels the uncanny: almost normal, but wrong. Write one paragraph of six to eight sentences.",
              why: "A kind stranger is the most ordinary opening possible, which is why one wrong detail, such as a voice that does not match the face, hits harder. Use the dark of the car to delay what the narrator can see." }
          ]
        },
        {
          title: "Show, don't tell",
          task: {
            kind: "mcq",
            q: "Which sentence SHOWS that the count is dangerous, rather than telling the reader?",
            options: [
              "The count was a very dangerous and frightening man.",
              "The count smiled, and his lips drew back a little too far from his teeth.",
              "Everybody in the village knew that the count was a villain.",
              "The count was evil and did many terrible things."
            ],
            answer: 1,
            feedback: [
              "This tells the reader what to think with two adjectives, dangerous and frightening. Showing means giving a detail, such as a smile that is slightly wrong, and letting the reader feel the danger.",
              "",
              "This reports an opinion instead of letting us see anything. Even though it mentions the village, it is still telling. Look for the sentence with a physical detail the reader can picture.",
              "Evil and terrible are labels, not pictures. Showing gives one concrete detail and trusts the reader to draw the conclusion."
            ]
          },
          levels: {
            support: {
              steps: [
                "Cross out any sentence that uses the word dangerous, evil, villain or frightening. Those words tell.",
                "Look for the sentence you could draw or film.",
                "That sentence shows."
              ],
              example: {
                q: "Practice: which shows that the room is cold? (a) The room was freezing. (b) Her breath hung in the air in front of her.",
                steps: ["(a) names the feeling with one adjective.", "(b) gives a detail you can see.", "So (b) shows."],
                answer: "(b), because the visible breath lets the reader work out the cold."
              }
            },
            core: { hint: "Only one option contains something you could actually see." },
            stretch: { extend: "Rewrite option C so that it shows the villagers' fear through what they do when the count passes, in no more than 25 words." }
          },
          why: "Only the second sentence gives a physical detail, the smile that goes too far, and lets the reader conclude that the count is dangerous. The others state the conclusion.",
          explain: "Say, in one sentence, what the word ‘too’ does in the sentence that shows."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 4 ─────────────────────────────
    {
      key: "tension-and-themes", n: 4,
      title: "Tension, suspense and the big ideas",
      lead: "This chapter separates tension from suspense, shows you the techniques that build both, and names the themes that run through every Gothic story.",
      covers: [7, 8],
      pretext: {
        words: [
          { word: "tension", means: "the stress you feel when you do not know how things will turn out", sentence: "The tension grew as the footsteps came closer." },
          { word: "suspense", means: "the worry of waiting to find out what happens next", sentence: "The writer builds suspense by not opening the door yet." },
          { word: "theme", means: "a big idea a story explores", sentence: "Fear and madness are themes of Gothic stories." },
          { word: "entrapment", means: "being trapped with no way out", sentence: "The locked room is a symbol of entrapment." },
          { word: "dread", means: "a heavy fear of something that is coming", sentence: "A sense of dread filled the empty house." }
        ],
        passage: [
          "Gothic writers want you to feel two things.",
          "The first is tension.",
          "Tension is stress, because you do not know how things will end.",
          "The second is suspense.",
          "Suspense is worry about what happens next.",
          "Writers build them with short sentences and delays.",
          "They hint at danger before it arrives.",
          "Gothic stories also share big ideas, called themes.",
          "The themes include fear, death, madness and isolation.",
          "Another theme is entrapment: being locked in.",
          "In Jane Eyre, a girl is locked in a red room.",
          "The red reminds us of blood.",
          "She sees a ghostly figure in the mirror: herself."
        ]
      },
      sections: [
        {
          heading: "Tension or suspense?",
          paragraphs: [
            "Your lesson began with a question: is there a difference between tension and suspense? There is, and it is worth knowing. Tension is a feeling of stress or nervousness created by a situation where the outcome is uncertain. Suspense is a feeling of anticipation or worry about what is going to happen next. Tension is the tight string; suspense is waiting for it to snap.",
            "Jonathan Harker's journal in Dracula is tension. He knows he is a prisoner. He does not know what the Count will do, and his nerves are wearing through. Poe's narrator riding towards the House of Usher is suspense. He stops to ask himself what it is about the house that unnerves him, and he cannot answer, so the reader leans forward, waiting.",
            "Most good Gothic scenes use both. The character is under pressure (tension), and the reader is waiting for the moment it breaks (suspense). When you write, ask which you are creating in each sentence."
          ],
          quote: { text: "The castle is a veritable prison, and I am a prisoner!", source: "Stoker, Dracula (1897), chapter 2" },
          tip: "‘Veritable’ means ‘real, true’. Harker is insisting that this is not a metaphor. The castle really is a prison."
        },
        {
          heading: "Techniques that build both",
          paragraphs: [
            "Your lesson gave you a word bank: for tension, words like prison, sinking, shadow, danger and dread; for suspense, words like dull, dark, desolate, bleak, vacant, decayed and shadowy. Notice that tension words are about pressure and threat, while suspense words slow things down and empty them out.",
            "Beyond vocabulary, there are structural tools. Vary your sentence lengths: a run of long sentences followed by one short one makes the short one hit. Delay: describe three things the character notices before they look at the thing that matters. Foreshadow: plant a small detail early that will matter later. Control the pacing: slow down for suspense, speed up for tension. And stay implicit: a shadow that moves is more frightening than the word ‘monster’."
          ],
          worked: {
            q: "Build suspense in three sentences about a locked door, then release it into tension.",
            steps: [
              "Sentence 1, long and slow: describe the corridor, the dust, the one door with no dust on its handle.",
              "Sentence 2, delay: the character notices three ordinary things before touching the handle.",
              "Sentence 3, short: the handle turns from the other side."
            ],
            answer: "The corridor was thick with dust, except for the handle of the last door, which shone. She noticed the cold, the smell of damp, the single footprint that was not hers. Then the handle turned."
          },
          quote: { text: "What was it—I paused to think—what was it that so unnerved me in the contemplation of the House of Usher?", source: "Poe, The Fall of the House of Usher (1839)" },
          tip: "Poe's narrator repeats ‘what was it’ and interrupts himself with dashes. The sentence stutters, so the reader stutters too."
        },
        {
          heading: "The themes of the Gothic",
          paragraphs: [
            "A theme is a big idea that a story explores, usually without naming it. Your lesson collected the themes you had met so far in the unit: madness, death, fear, physical danger, entrapment, guilt, the supernatural, appearance and reality, isolation, and the corruption of innocence.",
            "Themes are suggested through details. A locked door suggests entrapment. A mirror that shows something wrong suggests appearance and reality. A child in a dark house suggests the corruption of innocence. When you write, choose one or two themes for a scene and let your details carry them. A reader who can guess your theme without being told has been shown, not told.",
            "At GCSE you will be asked how writers present ideas. Learning to spot a theme from its details now, and to plant one in your own writing, is exactly that skill."
          ],
          tip: "Make a two-column list for your own story: theme on the left, three details that suggest it on the right."
        },
        {
          heading: "Reading the red-room: Jane Eyre",
          paragraphs: [
            "In Charlotte Brontë's Jane Eyre (1847), ten-year-old Jane is punished by being locked in the red-room, the bedroom where her uncle died. Your lesson broke the passage into three parts. In the first, Brontë describes the room: a huge bed on pillars of mahogany, curtains of deep red damask, a red carpet, a crimson tablecloth, and, rising out of the shadows, white mattresses and a white chair that looks like a pale throne.",
            "The lexical chain of red, that is, the cluster of words that all mean red, suggests blood, horror and death. The white suggests innocence, and Jane's innocence is being damaged by what the adults do to her. The furniture is so large that it overwhelms a small child, which adds fear. The room has secrets: a drawer of jewels and a picture of the dead man.",
            "In the third part, Jane checks whether the door is locked. It is: no jail was ever more secure. That is entrapment. Then she sees herself in the mirror, white-faced with glittering eyes of fear, and takes herself for a spirit. In one passage Brontë gives you entrapment, fear, death, the supernatural, appearance and reality and the corruption of innocence."
          ],
          quote: { text: "no jail was ever more secure", source: "C. Brontë, Jane Eyre (1847), chapter 2" },
          tip: "When a narrator mistakes their own reflection for a ghost, ask what has happened to their sense of who they are. That is where the theme lives."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which definition matches SUSPENSE as your lesson defined it?", options: ["Stress or nervousness because the outcome is uncertain", "Anticipation or worry about what is going to happen next", "A sudden shock that makes the reader jump", "A sad or frightening ending"], answer: 1, why: "Suspense is about waiting: the reader anticipates what comes next. Tension is the stress of an uncertain outcome.",
          feedback: [
            "That is your lesson's definition of tension, not suspense. The two are close, but tension is the stress of an uncertain situation, while suspense is the worry of waiting for what happens next.",
            "",
            "A sudden shock is the release of suspense, not suspense itself. Suspense is the waiting beforehand, the worry about what is going to happen.",
            "Suspense is not about endings. It is the anticipation the reader feels while waiting to find out what happens next, at any point in the story."
          ] },
        { kind: "gap", q: "Being locked in with no way out is the Gothic theme of ___.", answer: "entrapment", options: ["entrapment", "isolation", "guilt"], why: "Entrapment is being trapped. Jane in the red-room and Harker in the castle are both examples.",
          feedback: {
            "isolation": "Isolation is being far from other people. You can be isolated on an open moor with no walls at all. Being locked in is entrapment, though the two themes often appear together.",
            "guilt": "Guilt is the bad feeling after doing wrong, a theme you will meet again in Macbeth. Being locked in is entrapment."
          } },
        { kind: "mcq", q: "In the red-room passage, what does the repeated colour red suggest?", options: ["Warmth and comfort", "Blood, horror and death", "Wealth and celebration", "Autumn leaves"], answer: 1, why: "Your lesson called this a lexical chain: red, crimson, damask. In a Gothic text it points to blood and death, and the room is where Mr Reed died.",
          feedback: [
            "In another kind of story red might mean warmth, but the room is cold and seldom has a fire. In a Gothic passage about a room where a man died, the red chain suggests blood and death.",
            "",
            "The room is grand, but Brontë makes it a place of punishment, and the chain of red words sits beside the dead uncle's belongings. Read it as blood and horror, not celebration.",
            "There is no nature in the room at all. The red belongs to curtains, carpet and cloth, and it suggests blood, horror and death."
          ] }
      ],
      modules: [
        {
          title: "Technique and effect",
          task: {
            kind: "match",
            q: "Match each technique to the effect it has on the reader.",
            pairs: [
              ["A one-word sentence after three long ones", "Jolts the reader and freezes a single moment"],
              ["Describing three ordinary things before the character looks at the door", "Delays the reveal, so suspense builds"],
              ["A small detail planted early that matters later", "Foreshadowing: plants a question the reader wants answered"],
              ["Short, quick sentences during a chase", "Speeds up the pacing, so tension rises"],
              ["A shadow that moves instead of a monster that is named", "Keeps the horror implicit, so the reader imagines something worse"]
            ]
          },
          levels: {
            support: {
              steps: [
                "For each technique, ask: does it slow the reader down or speed them up?",
                "Slowing down with delay or detail builds suspense; speeding up builds tension.",
                "Two techniques are about what is NOT said: the planted detail and the thing left unnamed."
              ],
              example: {
                q: "Practice: what is the effect of ending a chapter at the moment the door opens, before we see who is there?",
                steps: ["The reader is made to wait.", "Waiting is suspense."],
                answer: "It creates suspense: the reader turns the page to find out what happens next."
              }
            },
            core: { hint: "Think about speed. Two of these slow the story down, one speeds it up, one stops it dead, and one hides something." },
            stretch: { extend: "Write five sentences, each using one of the five techniques, in a single scene. Label each. Then say which one you would cut if you could keep only four." }
          },
          why: "Suspense comes from slowing down and withholding: delay, foreshadowing, the unnamed. Tension comes from pressure and speed: quick sentences, the sudden short one. Good Gothic scenes alternate between them.",
          explain: "Say, in one sentence, why a one-word sentence works only if the sentences before it are longer."
        },
        {
          title: "Write a scene with tension and suspense",
          task: {
            kind: "written",
            q: "A character alone in an old house hears a sound from a room that has been locked for years. Write a short Gothic scene of eight to ten sentences that creates both tension and suspense.",
            criteria: [
              "I use advanced vocabulary from the tension and suspense word banks, chosen for precision.",
              "I vary my sentence structures and lengths, including at least one very short sentence.",
              "I use at least two devices such as foreshadowing, imagery or pacing.",
              "I keep the horror implicit: I suggest rather than state what is behind the door.",
              "I create suspense (making the reader wait) AND tension (making the character's situation feel strained)."
            ],
            model: "The house had been quiet for so long that the sound seemed rude. It came again: a slow scrape, like a chair being dragged by someone who did not want to be heard. Marta set down her candle. The door at the end of the landing had been locked since before she was born, and the key, her aunt had always said, was lost. She counted the steps towards it. Eleven. The brass handle was warm. She waited for the scrape a third time, and when it did not come, that was worse. Then, very gently, something on the other side tried the handle too."
          },
          levels: {
            support: {
              steps: [
                "Open with the sound, then stop and describe the silence around it (suspense).",
                "Give one detail of the character's body that shows strain: hands, breath, counting steps (tension).",
                "Delay the door: three ordinary details before the handle.",
                "End on an action by the thing behind the door, never on what it is."
              ],
              example: {
                q: "Practice: write three sentences in which a character waits for a knock to come again.",
                steps: ["Sentence 1: the first knock, and what the character was doing.", "Sentence 2: the silence, described as if it were a thing.", "Sentence 3: short. The knock, or something instead of it."],
                answer: "The knock came while he was still laughing at something on the radio. The silence afterwards was so complete that he could hear the clock in the next room. Then the letterbox lifted."
              }
            },
            core: { hint: "Suspense is what the reader waits for; tension is what the character feels in their body. Make sure each has at least two sentences." },
            stretch: { extend: "Rewrite your scene so that it contains no sounds at all, only sight and touch. Which version is more frightening, and what does that tell you about the Gothic use of strange sounds?" }
          },
          why: "A scene that creates both feelings slows down for suspense (silence, delay, counting) and tightens for tension (the warm handle, the short sentence). Ending on an implicit action keeps the reader imagining.",
          explain: "Say which sentence in your scene creates suspense and which creates tension, and how you can tell them apart."
        },
        {
          title: "Name the theme",
          task: {
            kind: "mcq",
            q: "Read this sentence: ‘The door was bolted from the outside, and for the ninth time that day she counted the bricks in the wall.’ Which Gothic theme does it suggest most strongly?",
            options: ["Entrapment", "The supernatural", "Corruption of innocence", "Appearance and reality"],
            answer: 0,
            feedback: [
              "",
              "Nothing in the sentence breaks the laws of nature: a bolted door and a wall are ordinary. The strongest theme is entrapment, shown by the bolt on the outside. Counting bricks hints at a second theme, madness.",
              "We know nothing about the character's innocence or age. The sentence gives us a locked door and a repeated, pointless action, which point to entrapment with a hint of madness.",
              "Nothing here looks like one thing and turns out to be another. The bolt and the counted bricks are exactly what they seem. The theme is entrapment."
            ]
          },
          levels: {
            support: {
              steps: [
                "Underline the detail about the door. Who controls it?",
                "Underline the repeated action. What does repeating something pointless suggest about a mind?",
                "Choose the theme the door points to; the action is a second, quieter theme."
              ],
              example: {
                q: "Practice: ‘Every mirror in the house had been turned to face the wall.’ Which theme: appearance and reality, or physical danger?",
                steps: ["Mirrors are about seeing and reflections.", "Turning them away hides what they would show.", "That is appearance and reality."],
                answer: "Appearance and reality."
              }
            },
            core: { hint: "The bolt is on the outside. Ask who locked it and what that means for the person inside." },
            stretch: { extend: "Rewrite the sentence so that it suggests the supernatural as strongly as entrapment, changing no more than six words. Which words did you change, and why did they work?" }
          },
          why: "A door bolted from the outside is the clearest signal of entrapment. The counted bricks add a hint of madness, but nothing in the sentence is supernatural, deceptive or about innocence.",
          explain: "Say which detail in the sentence pointed to entrapment, and which detail hinted at a second theme."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 5 ─────────────────────────────
    {
      key: "openings-voice-shifts", n: 5,
      title: "Openings, narrative voice and shifts",
      lead: "This chapter gives you the craft of telling: how to hook a reader, who should tell your story, and how to move it through time and focus.",
      covers: [6, 9, 10],
      pretext: {
        words: [
          { word: "hook", means: "an opening that grabs the reader's attention", sentence: "A good hook makes you want to read on." },
          { word: "in medias res", means: "starting in the middle of the action", sentence: "The story begins in medias res, with the chase already happening." },
          { word: "narrator", means: "the voice that tells the story", sentence: "The narrator in Dracula is Jonathan Harker, writing his journal." },
          { word: "unreliable", means: "not to be trusted", sentence: "An unreliable narrator may be lying, or may not understand what they see." },
          { word: "flashback", means: "a jump back to an earlier time in the story", sentence: "A flashback shows us what happened in the house a year ago." }
        ],
        passage: [
          "The first line of a story is a promise.",
          "It tells the reader what kind of story this is.",
          "Some stories start in the middle of the action.",
          "Some start at the end and look back.",
          "Some build suspense, and some set the scene.",
          "Next, decide who tells the story.",
          "A first-person narrator says I, and we share their fear.",
          "A third-person narrator can see everything.",
          "Some narrators cannot be trusted.",
          "Finally, think about shifts.",
          "You can jump back in time, or forward.",
          "You can change the focus from the sky to a single hand.",
          "Shifts give your story shape."
        ]
      },
      sections: [
        {
          heading: "Hooking the reader",
          paragraphs: [
            "Your lesson gave you four types of opening: beginning at the end, creating suspense, starting in the middle of the action (in medias res, Latin for ‘into the middle of things’), and setting the scene. Each makes a different promise to the reader. Beginning at the end promises an explanation. In medias res promises you will catch up. Setting the scene promises atmosphere. Suspense promises that something is about to happen.",
            "You also studied the first sentences of famous novels. Herman Melville opens Moby-Dick (1851) with three words: a stranger introduces himself, and the voice is so direct that we trust it at once. Jane Austen opens Pride and Prejudice (1813) with a grand, confident statement that sounds like a law of nature, and which the whole novel will gently mock. Remember that you may not be the intended reader of these books. The question is not whether the line engages you, but how it tries to engage its reader.",
            "Before you write your own opening, know how your story will develop. Your lesson gave you a plot and asked for two openings in different styles, then asked which was better and why. Writing the same opening twice is the fastest way to learn what each style does."
          ],
          quote: { text: "Call me Ishmael.", source: "Melville, Moby-Dick (1851), chapter 1" },
          tip: "Write your first sentence last. Once you know where the story goes, you will know what to promise."
        },
        {
          heading: "Who is telling the story?",
          paragraphs: [
            "Three terms first. A narrative is a spoken or written account of connected events: a story. Narrative point of view is the lens through which the story is told. Narrative voice is the way the narrator speaks and presents information to the reader. Change the narrator and you change the story, because you change what can be known.",
            "Your lesson matched eight voices to definitions. A first-person narrator speaks as ‘I’, often a character in the story. A third-person omniscient narrator knows everything and calls the characters ‘he’ or ‘she’. A second-person address speaks to the reader as ‘you’, which is rare and hard to sustain. An unreliable narrator cannot be trusted to give a true version of events, perhaps because they are deceiving themselves. Multiple voices use more than one narrator. An interior monologue gives us the narrator's thoughts as they happen, and stream of consciousness imitates the jumble of thought itself. A focaliser is the character whose eyes we see through in a third-person story.",
            "Gothic writers love the first person, and for good reason. Harker, Poe's narrator, Lockwood and Jane Eyre each know only what they can see, so we are trapped inside their knowledge. When Jane mistakes her own reflection for a spirit, we cannot step outside her to check. Is she reliable? Partly. She is ten, frightened and locked in. Gothic fear often comes from not being sure whether to trust the voice."
          ],
          quote: { text: "the strange little figure there gazing at me, with a white face and arms specking the gloom, and glittering eyes of fear moving where all else was still, had the effect of a real spirit", source: "C. Brontë, Jane Eyre (1847), chapter 2" },
          tip: "Before you write a scene, ask three questions: Who is telling it? What can they know? What might they get wrong?"
        },
        {
          heading: "Narrative shifts: drop in, then move",
          paragraphs: [
            "Your lesson taught a way to open a description called ‘drop in and describe’. You drop the reader straight into a close detail, using the senses, with no introduction. Pathetic fallacy is a good way to drop in, because the weather sets the mood before anything happens. Then you need to move, or the description stands still.",
            "A narrative shift moves the story in time, focus, setting, mood or perspective. A flashback jumps back; a flashforward jumps ahead. A shift in focus moves from the wide view to a single hand on a door. A shift in mood turns a calm scene cold. Your lesson's model used three time markers in a row, moving from the distant past to today, so that the reader feels the change by comparing the three pictures.",
            "Two more structural features finish the shape: repetition and a return to the beginning. If your first sentence mentions the moon, mention it again at the end, changed. The reader feels the story has travelled somewhere and come back."
          ],
          worked: {
            q: "Plan a drop-in opening with a shift in time and a return.",
            steps: [
              "Drop in: a close sensory detail. Frost on the inside of the window.",
              "Widen: the room, the cold, the empty bed (pathetic fallacy: the frost matches the loneliness).",
              "Shift: ‘Three winters ago’, the same room warm, the bed slept in.",
              "Return: back to today, the frost, but now the reader knows who is missing."
            ],
            answer: "Frost on the inside of the glass. The room beyond it is empty and the bed is made. Three winters ago the fire was lit and two cups stood on the sill. Today there is one cup, and the frost."
          },
          tip: "Signal your shift clearly: ‘A year ago’, ‘Suddenly’, ‘Across the valley’, ‘Inside her head’. A shift the reader misses is just confusion."
        },
        {
          heading: "Crafting the sentence",
          paragraphs: [
            "Your lesson gave you eight ways to rebuild a plain sentence: start with a verb; start or end with a simile; add an embedded clause between commas; open with a subordinate clause; use a fronted adverbial; add brackets; use a double adjective; or use a colon to introduce a reveal. The sentence ‘The hall was cold’ can become any of these.",
            "Vary them. A paragraph in which every sentence starts with ‘The’ feels flat; a paragraph in which every sentence starts with a verb feels breathless. Mix long and short, plain and built. Your peer-assessment criteria asked for a range of sentence starters and a range of punctuation, and this toolkit is how you deliver it."
          ],
          worked: {
            q: "Rebuild ‘The hall was cold’ in four ways.",
            steps: [
              "Verb opening: Shivering, I stepped into the hall.",
              "Colon reveal: The hall held one thing: cold.",
              "Subordinate clause: Although the fire had been lit, the hall was cold.",
              "Simile ending: The hall was cold as a church at dawn."
            ],
            answer: "Shivering, I stepped into the hall. The hall held one thing: cold. Although the fire had been lit, the hall was cold. The hall was cold as a church at dawn."
          },
          tip: "Keep the toolkit list in the back of your book. When a paragraph feels flat, rebuild two sentences using tools you have not used yet."
        }
      ],
      gate: [
        { kind: "mcq", q: "What does ‘in medias res’ mean?", options: ["Beginning at the end and looking back", "Beginning in the middle of the action", "Beginning by setting the scene slowly", "Beginning with a question to the reader"], answer: 1, why: "The Latin phrase means into the middle of things. The story opens with the action already under way.",
          feedback: [
            "Beginning at the end is a different type of opening from your lesson. In medias res is Latin for into the middle of things: the action has already started.",
            "",
            "Setting the scene is the slow, atmospheric opening. In medias res is the opposite: the reader is dropped straight into action that has already begun.",
            "A question to the reader is a hook, but not this one. In medias res means the story opens in the middle of the action."
          ] },
        { kind: "mcq", q: "Which narrator knows everything about the story and calls the characters ‘he’ or ‘she’?", options: ["First-person narrator", "Unreliable narrator", "Third-person omniscient narrator", "Second-person address"], answer: 2, why: "Omniscient means all-knowing. A third-person omniscient narrator can enter any character's mind and is often assumed to be the author.",
          feedback: [
            "A first-person narrator speaks as I and knows only what they see. The all-knowing narrator who uses he and she is the third-person omniscient narrator.",
            "Unreliable describes how far we can trust a narrator, not how much they know. A narrator who knows everything and uses he or she is third-person omniscient.",
            "",
            "Second-person address speaks to the reader as you. The narrator who knows everything and refers to characters as he or she is third-person omniscient."
          ] },
        { kind: "gap", q: "A narrator who cannot be trusted to give a true version of events is called an ___ narrator.", answer: "unreliable", options: ["unreliable", "omniscient", "interior"], why: "An unreliable narrator may be lying, self-deceiving or simply mistaken. Readers must judge the story for themselves.",
          feedback: {
            "omniscient": "Omniscient means all-knowing, the opposite of a narrator with gaps or lies in their account. A narrator who cannot be trusted is unreliable.",
            "interior": "Interior belongs to interior monologue, a narrator voicing their thoughts as they occur. Whether those thoughts can be trusted is a separate question: an untrustworthy narrator is unreliable."
          } }
      ],
      modules: [
        {
          title: "Match the voice",
          task: {
            kind: "match",
            q: "Match each narrative voice to its definition.",
            pairs: [
              ["First-person narrative", "Speaks as ‘I’, often a character who plays a part in the story"],
              ["Third-person omniscient narrator", "Knows everything connected with the story and refers to characters as ‘he’ or ‘she’"],
              ["Second-person address", "Speaks directly to the reader as ‘you’"],
              ["Unreliable narrator", "Cannot be trusted to give a version of events that is to be believed"],
              ["Focaliser", "In a third-person story, the character from whose perspective we see the action"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the pronoun in each definition: I, you, he or she.",
                "Match I to first person, you to second person, he or she to third person.",
                "Two voices are left. One is about trust; the other is about whose eyes we use in a third-person story."
              ],
              example: {
                q: "Practice: ‘A narrator voicing their thoughts as they happen, in the first person.’ Which voice?",
                steps: ["First person, so I.", "Thoughts as they happen: that is a monologue inside the head."],
                answer: "Interior monologue."
              }
            },
            core: { hint: "Three of the five can be solved by pronouns alone. The other two are about trust and about perspective." },
            stretch: { extend: "Which of these five voices does Stoker use for Harker's journal, and which does Charlotte Brontë use for Jane? Explain what each writer gains and loses by that choice." }
          },
          why: "Narrative voices are defined by who speaks (I, you, he or she), what they can know, and whether we can trust them. The focaliser is the one voice that belongs to a character who is not the narrator.",
          explain: "Say which voice you would choose for a Gothic story and what you would lose by choosing it."
        },
        {
          title: "Same scene, different narrator",
          task: {
            kind: "written",
            q: "A young woman is locked in a tower room. Footsteps are climbing the stairs towards her door. Write this moment from the woman's point of view, as a first-person narrator. Write one paragraph of six to eight sentences.",
            criteria: [
              "I keep the narrative voice consistent from the first sentence to the last.",
              "I include only what this narrator could know, see or hear.",
              "I show the narrator's feelings through what they notice and do, not by naming the feeling.",
              "I use at least two Gothic conventions and one language feature from the unit.",
              "I vary my sentence lengths to build tension as the footsteps approach."
            ],
            model: "I had counted the stairs on the day they brought me here: forty-one, and a landing where the fortieth should be. Whoever was climbing them now was slow. Each step waited for the one before it to finish echoing. I pressed my back to the wall furthest from the door, as if the stone could be persuaded to let me through. The candle leaned towards the keyhole, then straightened. Thirty-eight. Thirty-nine. The landing creaked, and then nothing, for so long that I began to hope. Then I heard him breathe."
          },
          levels: {
            support: {
              steps: [
                "Decide what your narrator can know: she cannot see the stairs, so use sound.",
                "Give her one physical action that shows fear without naming it.",
                "Use the footsteps as a countdown, with sentences getting shorter.",
                "End just before the door opens, never after."
              ],
              example: {
                q: "Practice: write three sentences from the point of view of a child hiding under a bed as someone enters the room.",
                steps: ["What can the child see? Only feet and the floor.", "What can they hear? Boards, breathing.", "Show fear: holding breath, not the word afraid."],
                answer: "From under the bed I could see two boots and a drip of mud sliding off the left one. The boards complained once, then stopped. I held my breath until the room went grey at the edges."
              }
            },
            core: { hint: "Everything in the paragraph must come through one pair of eyes and ears. If she cannot see it, you cannot write it." },
            stretch: { extend: "Write the same moment again from the point of view of the person on the stairs, in the first person. Which version is more reliable, and which is more frightening? Explain the difference in two sentences." }
          },
          why: "Changing the narrator changes what can be known. A first-person narrator locked in a room can only hear the stairs, so sound and counting carry the tension; a different narrator would know different things and hide different ones.",
          explain: "Say one thing your narrator could NOT know in this scene, and how you avoided telling the reader it.",
          contexts: [
            { label: "The man on the stairs",
              q: "A young woman is locked in a tower room. Footsteps are climbing the stairs towards her door. Write this moment from the point of view of the man climbing the stairs, as a first-person narrator. Write one paragraph of six to eight sentences.",
              why: "The antagonist's voice is a chance to be unreliable: he may believe he is kind, or justified. Let the reader see the gap between what he says and what he does. He can see the stairs and the door, but not inside the room." },
            { label: "A third-person narrator",
              q: "A young woman is locked in a tower room. Footsteps are climbing the stairs towards her door. Write this moment from the point of view of a third-person narrator who can see both the room and the stairs. Write one paragraph of six to eight sentences.",
              why: "An omniscient narrator can cut between the two characters, which creates dramatic irony: the reader knows what each does not. Decide whether to use the woman as a focaliser or to stay above both of them." },
            { label: "Second person (you)",
              q: "A young woman is locked in a tower room. Footsteps are climbing the stairs towards her door. Write this moment addressed to the reader as ‘you’, as if you were the woman in the room. Write one paragraph of six to eight sentences.",
              why: "Second-person address is rare because it is hard to sustain, but for one paragraph it pulls the reader into the room. Keep every sentence to what ‘you’ can hear and feel, and notice how the pronoun removes any safe distance." }
          ]
        },
        {
          title: "Shape the opening",
          task: {
            kind: "order",
            q: "Put the four stages of a drop-in opening with a shift and a return in the order your lesson taught.",
            items: [
              "Drop in: open on a close sensory detail with no introduction, such as frost on the inside of a window.",
              "Widen: describe the room or setting, using pathetic fallacy so the weather matches the mood.",
              "Shift: change time, focus or mood with a clear signal such as ‘Three winters ago’.",
              "Return: come back to the opening image, now changed by what the reader has learned."
            ]
          },
          levels: {
            support: {
              steps: [
                "The first stage has no introduction and is very close up.",
                "The next pulls back to show more.",
                "A shift needs something to shift from, so it comes after the setting is established.",
                "A return must be last, because it needs something to return to."
              ],
              example: {
                q: "Practice: put in order: the camera pulls back to show the whole street; close-up on a dripping tap; cut to the same tap a year earlier; back to the tap today.",
                steps: ["Close-up is the drop-in.", "Pulling back is the widen.", "A year earlier is the shift.", "Back to today is the return."],
                answer: "Dripping tap; the street; the tap a year earlier; the tap today."
              }
            },
            core: { hint: "Think of a camera: close, wide, cut, close again." },
            stretch: { extend: "Plan the same four stages for your own Gothic story opening, in four sentences. Then say which stage was hardest to write and why." }
          },
          why: "Drop in, widen, shift, return: the opening grabs with a close detail, builds atmosphere, moves the reader somewhere new, and then closes the loop so that the first image means more the second time.",
          explain: "Say, in one sentence, why the return has to come after the shift."
        }
      ]
    },
    // ───────────────────────────── CHAPTER 6 ─────────────────────────────
    {
      key: "planning-and-assessment", n: 6,
      title: "Planning, drafting and the assessment",
      lead: "This chapter takes you from a spray diagram to a finished Gothic scene: planning on the story mountain, drafting with success criteria, and knowing what the assessment rewards.",
      covers: [11, 12, 13, 14],
      pretext: {
        words: [
          { word: "plan", means: "to decide what will happen before you write", sentence: "A good plan stops your story from getting lost." },
          { word: "crisis", means: "the biggest moment, which everything leads up to", sentence: "The crisis comes when the door finally opens." },
          { word: "resolution", means: "how the problem is sorted out at the end", sentence: "The resolution shows the spirit set free." },
          { word: "draft", means: "a first version of your writing that you will improve", sentence: "Write a draft, then improve it with a purple pen." },
          { word: "blurb", means: "the short description on the back of a book", sentence: "The blurb made the story sound dark and exciting." }
        ],
        passage: [
          "Every story has a shape.",
          "We call it the story mountain.",
          "It starts calmly, then a problem appears.",
          "The problem grows until the crisis, the biggest moment.",
          "After the crisis comes the resolution.",
          "Then the story ends.",
          "Plan your story in this order, even if you open at the end.",
          "Then write your draft.",
          "Use a hook, Gothic conventions and a narrative shift.",
          "Swap with a partner and give feedback.",
          "Improve your work with a purple pen.",
          "In the assessment you have 45 minutes to write a Gothic scene.",
          "Spend the first five minutes planning."
        ]
      },
      sections: [
        {
          heading: "The story mountain",
          paragraphs: [
            "Your lesson began with a spray diagram: your story idea in the middle, everything you know about it around the edge. Then it gave you a shape to pour those ideas into. Freytag's pyramid, which you may know as the story mountain, has five stages: the beginning; the conflict or problem that leads towards the crisis; the crisis itself, the major event everything has been building to; the deflation or resolution, where the crisis is sorted out; and the ending.",
            "Two warnings from your lesson. First, plan chronologically, in the order events happen, even if you plan to open your story at the end or in the middle. You need to know where the story is going before you can decide where to start telling it. Second, a story can have more than one mountain: a smaller crisis, a release, then a bigger climb. That is how writers build and release tension across a whole story.",
            "Decide whose perspective you are writing from before you plan the opening. Shelley's crisis in Frankenstein is the moment the creature opens its eyes, and it hits hard because we see it through Victor, who made it. The same event through the creature's eyes would be a different story."
          ],
          quote: { text: "How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form?", source: "Shelley, Frankenstein (1818), chapter 5" },
          tip: "If you cannot say what your crisis is in one sentence, you are not ready to write. Fix the crisis first; the beginning will follow."
        },
        {
          heading: "Drafting the opening and building tension",
          paragraphs: [
            "Your lesson asked for an opening of one to three paragraphs, written in fifteen minutes against a set of success criteria: hook the reader with an interesting opening style; use Gothic conventions; build your descriptions; introduce the main character implicitly, not explicitly; hint at what is to come without telling the whole story; and use a range of sentence starters and a range of punctuation.",
            "Then came the next section, where you build tension and suspense. The criteria stayed the same with one addition: a narrative shift. This is where the tools from the last chapter earn their place: a flashback, a change of focus, a shift in mood.",
            "After each section you peer-assessed. Your partner read your work against the criteria and set you a target. Then you purple-penned: you found the part of your draft the target referred to and rewrote it. Writers redraft. The first version is for finding out what the story is; the second is for the reader."
          ],
          tip: "When you peer-assess, give a WWW (what went well) and an EBI (even better if). Make the EBI something your partner can do in five minutes."
        },
        {
          heading: "Continuing a story: devices and the senses",
          paragraphs: [
            "Lesson 12 opened with a recall of devices. Personification gives human actions to things: the moon glared down coldly. Metaphor says one thing is another: the kitchen was a furnace. Simile compares with like or as. Onomatopoeia is a word that sounds like its noise: crack, bang. Alliteration repeats a starting sound. Repetition repeats a word or phrase for effect. Oxymoron joins two opposites: a deafening silence.",
            "Then you read the moment in Neil Gaiman's Coraline where a child unlocks a door that used to open onto bricks and finds a dark corridor instead, and you continued the story in turns with a partner. The criteria asked for sensory details from all five senses; at least two Gothic conventions; varied sentence lengths for tension; suspense and atmosphere; and language techniques such as simile, onomatopoeia, pathetic fallacy and metaphor.",
            "Continuing someone else's story is good practice for the assessment, because you must match a tone that is already set. Read the given opening twice. Notice what seems familiar but strange. Ask how the character feels and how you can show it. Then decide how the atmosphere could shift to increase tension."
          ],
          worked: {
            q: "Name the device in each: (1) The fog crept up the stairs on silent feet. (2) The hall was a tomb. (3) Crack! The ice gave way. (4) Dead leaves, dead light, dead silence.",
            steps: [
              "(1) Fog given feet and the ability to creep: personification.",
              "(2) The hall is said to BE a tomb: metaphor.",
              "(3) Crack imitates the sound: onomatopoeia.",
              "(4) ‘Dead’ three times: repetition."
            ],
            answer: "1 personification; 2 metaphor; 3 onomatopoeia; 4 repetition."
          },
          quote: { text: "a sense of insufferable gloom pervaded my spirit", source: "Poe, The Fall of the House of Usher (1839)" },
          tip: "Sensory detail means more than sight. Gothic writers use smell (damp, rot) and touch (cold stone, a warm handle) because readers cannot close their eyes to them."
        },
        {
          heading: "The assessment, the blurb and the cover",
          paragraphs: [
            "The end-of-unit assessment gives you 45 minutes to write a Gothic scene inspired by an image. Your checklist: adhere to Gothic conventions; build a strong Gothic setting; use tension and suspense for effect; use pathetic fallacy; use sensory imagery; use structure and punctuation for effect, including the dash, the semicolon, the ellipsis and sentence length; use language techniques and ambitious vocabulary; zoom in on specific detail; and show, don't tell in the descriptive parts. Spend five minutes planning.",
            "The department marks two strands across four bands: emerging, developing, securing and excelling. The first strand is your use of Gothic genre conventions: does the scene create a coherent Gothic atmosphere through setting, characters and themes such as horror, the supernatural and decay? The second is your use of literary techniques: varied sentence structures, rich vocabulary, imagery and figurative language that add to the atmosphere. A securing answer does both clearly; an excelling answer immerses the reader completely.",
            "If there is time, the unit ends with covers and blurbs. A blurb is a short summary that suggests the genre, gives key information about characters and story, and tries to entice the reader without giving the ending away. Writing one for your own story is a test: can you say what your story is in a paragraph, and make a stranger want to read it?"
          ],
          tip: "In the assessment, the image is a starting point, not a cage. Use what you see, then add what the reader cannot see: the sound, the smell, the thing behind the door."
        }
      ],
      gate: [
        { kind: "mcq", q: "On the story mountain, what is the crisis?", options: ["The calm opening where the setting is described", "The major event that everything in the story leads up to", "The last sentence of the story", "The feedback your partner gives you"], answer: 1, why: "The crisis is the peak of the mountain. The conflict climbs towards it, and the resolution comes down from it.",
          feedback: [
            "The calm opening is the beginning, at the foot of the mountain. The crisis is the peak: the major event that everything has been building towards.",
            "",
            "The last sentence belongs to the ending, after the resolution. The crisis comes earlier, at the top of the mountain, and the story comes down from it.",
            "Peer feedback is part of drafting, not part of the story's shape. The crisis is the story's biggest moment, the peak of the mountain."
          ] },
        { kind: "mcq", q: "How long is the end-of-unit assessment, and how long should you spend planning?", options: ["45 minutes, with 5 minutes planning", "60 minutes, with 20 minutes planning", "30 minutes, with no planning", "45 minutes, with 25 minutes planning"], answer: 0, why: "You have 45 minutes in total. The top tip is to spend the first five planning, which leaves 40 to write.",
          feedback: [
            "",
            "The assessment is 45 minutes, not an hour, and 20 minutes of planning would leave too little time to write. Plan for five.",
            "Planning is the top tip, not an optional extra, and the assessment is 45 minutes. Five minutes planning the crisis and the route through the image saves time later.",
            "The total is right, but 25 minutes planning leaves only 20 to write a whole scene. Five minutes is enough to fix the crisis and the route."
          ] },
        { kind: "gap", q: "The short summary on the back of a book that tries to make you read it is called the ___.", answer: "blurb", options: ["blurb", "preface", "contents"], why: "A blurb suggests the genre, gives key information and entices the reader without giving the ending away.",
          feedback: {
            "preface": "A preface is an introduction inside the book, usually by the author, explaining how it came to be written. The selling summary on the back is the blurb.",
            "contents": "The contents page lists chapters and page numbers at the front. The summary that sells the story from the back cover is the blurb."
          } }
      ],
      modules: [
        {
          title: "Name the device",
          task: {
            kind: "match",
            q: "Match each sentence to the literary device it uses.",
            pairs: [
              ["The fog crept up the stairs on silent feet.", "Personification"],
              ["The hall was a tomb.", "Metaphor"],
              ["Her breath came like a saw through wood.", "Simile"],
              ["Crack! The ice on the pond gave way.", "Onomatopoeia"],
              ["Dead leaves, dead light, dead silence.", "Repetition"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Look for like or as: that is a simile.",
                "Look for a thing doing something only a person can do: personification.",
                "Look for X was Y with no like or as: metaphor.",
                "Look for a word that sounds like its noise, or a word used three times."
              ],
              example: {
                q: "Practice: ‘The silence screamed.’ Which device?",
                steps: ["Silence and screaming are opposites.", "Two opposites joined is an oxymoron."],
                answer: "Oxymoron."
              }
            },
            core: { hint: "Two devices are about comparing (one uses like or as, one does not). One is about sound. One is about a repeated word. One gives a thing human actions." },
            stretch: { extend: "Write one Gothic sentence that uses three of the five devices at once, then say whether it is better or worse than a sentence that uses one. What does that tell you about using techniques for effect?" }
          },
          why: "Personification gives human actions to things, metaphor says one thing is another, simile compares with like or as, onomatopoeia imitates a sound, and repetition repeats for effect. Naming them lets you choose them on purpose.",
          explain: "Say which device you find hardest to tell from the others, and the test that separates them."
        },
        {
          title: "Plan on the story mountain",
          task: {
            kind: "order",
            q: "Put the five stages of this Gothic story plan in the order of the story mountain.",
            items: [
              "Beginning: Tom arrives at his grandmother's cottage beside the marsh, where a boarded-up well stands in the garden.",
              "Conflict: at night he hears knocking from inside the well, and finds a child's locket caught in the boards.",
              "Crisis: he lifts the boards, and a pale hand reaches up out of the dark.",
              "Resolution: he drops the locket into the well, and the knocking stops for the first time in years.",
              "Ending: in the morning the well is dry and full of leaves, as if it had never held anything at all."
            ]
          },
          levels: {
            support: {
              steps: [
                "The beginning introduces the place and the character calmly.",
                "The conflict is the problem that starts to grow.",
                "The crisis is the peak: the most frightening moment.",
                "The resolution sorts out the problem; the ending shows the world afterwards."
              ],
              example: {
                q: "Practice: put in order: the ghost is laid to rest; a girl moves into a haunted school; the ghost appears in the library at midnight; she finds the ghost's name in an old register.",
                steps: ["Moving in is the beginning.", "Finding the name is the conflict growing.", "The midnight appearance is the crisis.", "Laying the ghost to rest is the resolution."],
                answer: "Moves in; finds the name; the ghost appears; the ghost is laid to rest."
              }
            },
            core: { hint: "Find the most frightening moment: that is the peak. Everything before it climbs; everything after it comes down." },
            stretch: { extend: "This plan has one mountain. Add a second, smaller crisis before the main one, so that tension is built and released twice. Then say where you would open the story if you began in medias res." }
          },
          why: "Beginning, conflict, crisis, resolution, ending: the story mountain rises to the crisis and falls away from it. Planning in this order, even if the finished story opens elsewhere, keeps the writer in control.",
          explain: "Say, in one sentence, why you should plan chronologically even if your story opens at the end."
        },
        {
          title: "Write the Gothic scene",
          task: {
            kind: "written",
            q: "An old lighthouse stands on a rock, cut off from the shore by the tide. A single light burns in its top window, though it has been empty for fifty years. Write the opening of a Gothic scene inspired by this image. Write two paragraphs, to the standard of the end-of-unit assessment.",
            criteria: [
              "I adhere to Gothic conventions and build a strong Gothic setting.",
              "I use tension and suspense for effect, with varied sentence lengths.",
              "I use pathetic fallacy and sensory imagery.",
              "I use structure and punctuation for effect: the dash, the semicolon, the ellipsis.",
              "I use language techniques and ambitious vocabulary, and zoom in on specific detail.",
              "I show, don't tell, in the descriptive parts, and introduce my character implicitly."
            ],
            model: "The tide had taken the causeway an hour ago, and with it any sensible reason to be standing on the shingle. Rain came in sideways off the sea; the lighthouse took it on its white flank without complaint, as it had taken fifty winters of it since the last keeper rowed away. Nobody had lit a lamp up there in all that time. Nobody had a key. And yet, in the top window, a light burned: not the great sweeping beam of the old days, but something small and steady, like a candle set down carefully by a patient hand.\n\nI told myself it was a reflection. I told myself this twice, and then a third time, and the light did not go out. The wind dropped. In the sudden quiet I heard, very faintly across the water, the sound of the iron stairs inside the tower — one slow footstep after another, going up. I counted them. There are ninety-three steps in that lighthouse; I had climbed them as a child. The footsteps stopped at ninety-two."
          },
          levels: {
            support: {
              steps: [
                "Five-minute plan: decide your crisis (what is the light?), your narrator, and your route through the image (sea, tower, window, inside).",
                "Paragraph 1: drop in with the weather (pathetic fallacy), build the setting with the noun, adjective, verb, adverb method, and end on the one wrong detail.",
                "Paragraph 2: narrow the focus to the narrator and one sound. Shorten the sentences. Use a dash or an ellipsis to break one of them.",
                "Check against the assessment list: conventions, tension and suspense, pathetic fallacy, senses, punctuation, techniques, zoom, show not tell."
              ],
              example: {
                q: "Practice: write the first three sentences of a scene inspired by a flooded churchyard at dawn.",
                steps: ["Drop in with weather and water.", "Build one noun: the gravestones.", "End on a wrong detail."],
                answer: "Dawn came grey and reluctant over the churchyard, and the flood came with it. The gravestones stood up to their shoulders in brown water, leaning together like people sharing a secret. One of them, the newest, had no name on it yet, and somebody had already laid flowers."
              }
            },
            core: { hint: "Work through the assessment checklist in order: setting first, then one sound, then the narrator's reaction shown through an action." },
            stretch: { extend: "Write the blurb for the story this scene opens, in no more than 60 words, without revealing what the light is. Then design the cover in words: one image, one colour, one line of text." }
          },
          why: "An excelling answer immerses the reader in a Gothic atmosphere through setting, character and theme, and uses varied sentences, precise vocabulary and figurative language to do it. The model drops in with weather, builds the setting, saves the wrong detail, then narrows to one sound and a count that stops one step short.",
          explain: "Say which item on the assessment checklist your scene does best, and which one you would work on first with a purple pen."
        }
      ]
    }
  ],

  sources: {
    deckDump: "y09_u1_gothic.txt",
    decksUsed: ["NDE Gothic Literature MASTER 24-25 (1).pptx (Year 9 Autumn 1, 13 lessons + 1 extra lesson, 175 slides, extracted text)"],
    notes: "Lesson titles, sequence, lesson objectives, big questions, key words, convention lists, the noun-adjective-verb-adverb method, the archetype traits, the tension/suspense definitions and word banks, the theme list, the narrative-voice definitions, the opening types, the drop-in-and-shift structure, the sentence toolkit, the story mountain, the success criteria and the assessment checklist and rubric strands are taken from the department's deck. All explanations, questions, example sentences and model paragraphs are original; none of the deck's WAGOLL or teacher-model text is reproduced. Quotations are taken only from public-domain texts printed in the deck (Walpole 1764, Radcliffe 1797, Shelley 1818, Poe 1839, E. Brontë 1847, C. Brontë 1847, Melville 1851, Stoker 1897; Austen 1813 is named but not quoted), with the wording as printed in the deck and not yet checked against a scholarly edition: see NOTES.md. No text still in copyright (Mackenzie, du Maurier, Hill, Banks, Gaiman, Strange, Priestley, the modern first lines) is quoted, and the deck's teacher-written models are not reused. The passage the deck labels The Monk is not quoted because its attribution could not be confirmed. astra/2: per-option feedback on every mcq and gap item, explain prompts on every module, three context-choice modules (ch2, ch3, ch5), glossary chapters, Connections groups and spacing; no widgets and no pretext.l1 (translation is a separate pass)."
  }
};
