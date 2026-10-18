// © 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.
// Ad Astra unit manifest — KS3 English Literature (Year 9, leading to AQA 8702) · Romeo and Juliet · schema astra/2
// Quotation convention: every Shakespeare quotation is wrapped in curly double quotes “…” (line breaks shown as " / ").
// Curly single quotes ‘…’ are used for single words and terms. verify.py checks every “…” against its stored reference text (CORPUS).
window.ASTRA_UNITS = window.ASTRA_UNITS || {};
window.ASTRA_UNITS["englit-romeo"] = {
  _notice: "© 2026 Dr Vitor Merissi de Carvalho · Edu.Ai SV Digital — Edu.Ai Ecosystem framework. All rights reserved.",
  schema: "astra/2",
  meta: {
    slug: "englit-romeo",
    subjectKey: "englit",
    subject: "English Literature",
    board: "AQA",
    spec: "KS3 → 8702",
    specRef: "KS3 English, Year 9 Spring 1–2: Shakespeare, Romeo and Juliet (leading to GCSE 8702 Paper 1 Section A: Shakespeare)",
    year: 9,
    tier: "KS3",
    title: "Romeo and Juliet",
    sub: "Two households, two lovers and less than a week: the whole play, its world and how to write about it.",
    bigQuestion: "How does Shakespeare turn a love story into a tragedy, and were the lovers' deaths written in the stars or chosen by the people on stage?",
    lessonCount: 20,
    // astra/2: gate items return 2, 7 and 30 days after the first correct answer.
    spacing: [2, 7, 30]
  },

  lessons: [
    { n: 1, title: "Romeo and Juliet: summary", question: "Can I explore the plot of the play and recall the events?", keywords: ["symbolism", "patriarchy", "Verona", "Shakespeare's London"] },
    { n: 2, title: "Contextual details", question: "How did context influence Shakespeare's play?", keywords: ["context", "Elizabethan era", "courtly love", "astrology"] },
    { n: 3, title: "The Prologue", question: "What is the purpose of the prologue in Romeo and Juliet?", keywords: ["prologue", "tragedy", "sonnet"] },
    { n: 4, title: "Act 1 Scene 1: establishing conflict", question: "Why does the play start with a battle?", keywords: ["masculinity", "hegemonic masculinity", "patriarchal"] },
    { n: 5, title: "Lord Capulet: Act 1 Scene 2", question: "How does Shakespeare present Lord Capulet's intentions and attitude towards his daughter?", keywords: ["courtship", "oppression", "unconventional"] },
    { n: 6, title: "Meeting Juliet: Act 1 Scene 3", question: "Can I analyse how Juliet is introduced to the audience through another's perspective?", keywords: ["demure", "submissive", "interrogative sentences", "rhyme"] },
    { n: 7, title: "Act 1 Scenes 4–5: Romeo meets Juliet", question: "Can I explore Romeo's use of language when first seeing Juliet?", keywords: ["foil", "innuendo", "sonnet", "soliloquy"] },
    { n: 8, title: "Act 2 Scenes 1–2: the balcony scene", question: "How is Romeo and Juliet's relationship presented in Act 2 Scene 2?", keywords: ["semantic field", "soliloquy", "feeling tracker"] },
    { n: 9, title: "Assessment: how is Juliet presented in the extract? (deck ‘Lesson 10’)", question: "How is Juliet presented in the Act 2 Scene 2 extract, and how do I write a What, How, Why paragraph about her?", keywords: ["patriarchy", "analysis", "What, How, Why"] },
    { n: 10, title: "Act 2 Scenes 3–4: foreshadowing (deck ‘Lesson 11’)", question: "How does Shakespeare use foreshadowing in the play?", keywords: ["foreshadowing", "complicit", "dramatic irony"] },
    { n: 11, title: "Act 2 Scenes 5–6: the Nurse and the Friar", question: "What is the Nurse's role in the play, and why does Shakespeare set the action over so short a time?", keywords: ["bawdy", "double entendre", "structure", "timeline"] },
    { n: 12, title: "Act 3 Scene 1: the fight scene", question: "How does Shakespeare present Mercutio's character in this scene?", keywords: ["peripeteia", "fate vs free will", "pun"] },
    { n: 13, title: "Act 3 Scenes 2–3: Juliet's conflicting feelings", question: "How does Shakespeare present different characters' reactions to Romeo's banishment?", keywords: ["turmoil", "conflicting", "pessimistic", "woeful", "oxymoron"] },
    { n: 14, title: "Act 3 Scenes 4–5: Juliet refuses to marry Paris", question: "How has Lord Capulet's character and attitude changed in Act 3 Scene 5?", keywords: ["oppressive", "callous", "dramatic irony"] },
    { n: 15, title: "Act 4 Scenes 1–2: Friar Lawrence's plan", question: "Can I explore how the Friar's plan contributes to the tragedy of the play?", keywords: ["deceit", "bigamy"] },
    { n: 16, title: "Act 4 Scene 5: Juliet's ‘death’", question: "How does each character react to Juliet's ‘death’?", keywords: ["lament", "despair"] },
    { n: 17, title: "Act 5 Scenes 1–2: Romeo's reaction", question: "How does Shakespeare present Romeo's reaction to Juliet's ‘death’?", keywords: ["fate vs free will", "distraught"] },
    { n: 18, title: "Act 5 Scene 3: the ultimate tragedy", question: "Who, or what, is most responsible for the final tragedy?", keywords: ["hamartia", "tragic hero"] },
    { n: 19, title: "Juliet's death", question: "Can I explore the development of Juliet's character and the importance of her death?", keywords: ["interrogatives", "symbolism", "semantic field", "pathetic fallacy"] },
    { n: 20, title: "Fate versus free will: extract lesson", question: "Can I explore ideas about fate and free will and apply them to the play?", keywords: ["inevitable", "fate", "free will"] }
  ],

  glossary: [
    { term: "context", means: "The world a text was written in: its beliefs, its history and the other writing around it.", chapter: "world-of-verona" },
    { term: "patriarchal", means: "Run by men, with women and children expected to obey fathers and husbands.", chapter: "world-of-verona" },
    { term: "prologue", means: "An introduction spoken before a play begins, telling the audience what is to come.", chapter: "world-of-verona" },
    { term: "sonnet", means: "A fourteen-line poem with a set rhyme scheme, often about love.", chapter: "world-of-verona" },
    { term: "tragedy", means: "A play about flawed characters that ends in the death of the main characters.", chapter: "world-of-verona" },
    { term: "hegemonic masculinity", means: "The most admired way of being a man in a society: strong, unemotional and ready to fight.", chapter: "conflict-fathers-daughters" },
    { term: "courtly love", means: "A noble way of courting: passionate praise, gifts and poetry, with strict rules and no touching.", chapter: "conflict-fathers-daughters" },
    { term: "foil", means: "A character who contrasts with another, so that we see the other more clearly.", chapter: "love-at-first-sight" },
    { term: "soliloquy", means: "A speech a character makes alone on stage, so we hear their private thoughts.", chapter: "love-at-first-sight" },
    { term: "semantic field", means: "A set of words linked by meaning, such as shrine, pilgrim and saint for religion.", chapter: "love-at-first-sight" },
    { term: "foreshadowing", means: "When a writer hints at events that are still to come.", chapter: "warnings-and-the-turning-point" },
    { term: "dramatic irony", means: "When the audience knows something a character on stage does not.", chapter: "warnings-and-the-turning-point" },
    { term: "peripeteia", means: "A sudden reversal of fortune: the moment everything turns for the worse.", chapter: "warnings-and-the-turning-point" },
    { term: "oxymoron", means: "Two opposite words placed together, such as ‘beautiful tyrant’.", chapter: "banishment-and-the-plan" },
    { term: "hamartia", means: "A tragic hero's fatal flaw. Romeo's is usually read as uncontrolled passion.", chapter: "fate-and-the-final-tragedy" },
    { term: "fate and free will", means: "The question of whether our lives are written in the stars, or whether we choose.", chapter: "fate-and-the-final-tragedy" }
  ],

  // astra/2: the Connections game. Four groups of four, all sixteen drawn from the glossary above.
  connections: [
    { group: "The world of the 1590s", terms: ["context", "patriarchal", "courtly love", "hegemonic masculinity"] },
    { group: "The shape of a tragedy", terms: ["tragedy", "hamartia", "peripeteia", "fate and free will"] },
    { group: "How the stage speaks to us", terms: ["prologue", "sonnet", "soliloquy", "dramatic irony"] },
    { group: "Tools of language", terms: ["foreshadowing", "oxymoron", "semantic field", "foil"] }
  ],

  chapters: [
    // ───────────────────────────── CHAPTER 1 ─────────────────────────────
    {
      key: "world-of-verona", n: 1,
      title: "The world of the play and the Prologue",
      lead: "This chapter gives you the plot, the beliefs of Shakespeare's audience and the fourteen lines that tell you the ending before it starts.",
      covers: [1, 2, 3],
      pretext: {
        words: [
          { word: "context", means: "the world a story was written in", sentence: "Knowing the context helps you see why Juliet could not choose her husband." },
          { word: "patriarchal", means: "run by men", sentence: "In a patriarchal society, a father was the head of the household." },
          { word: "feud", means: "a long, bitter quarrel between two families", sentence: "The feud between the Montagues and the Capulets has lasted for years." },
          { word: "prologue", means: "a speech before the play begins", sentence: "The prologue tells us that the two lovers will die." },
          { word: "sonnet", means: "a poem of fourteen lines", sentence: "Shakespeare writes the prologue as a sonnet." }
        ],
        passage: [
          "Romeo and Juliet is a play by William Shakespeare.",
          "He wrote it in about 1595, when Elizabeth I was queen.",
          "The story is set in Verona, a city in Italy.",
          "Two rich families, the Montagues and the Capulets, hate each other.",
          "Romeo is a Montague and Juliet is a Capulet.",
          "They meet at a party and fall in love at once.",
          "They marry in secret, with help from Friar Lawrence.",
          "Then Romeo kills Juliet's cousin Tybalt in a fight.",
          "Romeo is banished from the city.",
          "Juliet's father orders her to marry a man called Paris.",
          "The Friar gives Juliet a potion that makes her look dead.",
          "Romeo thinks she is really dead, so he drinks poison.",
          "Juliet wakes, finds him dead, and kills herself.",
          "The play tells us all this in a prologue, before it even begins."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "العالم الذي كُتبت فيه القصة (context)",
            "يحكمه الرجال (patriarchal)",
            "خصومة طويلة ومريرة بين عائلتَين (feud)",
            "خطاب يُقال قبل أن تبدأ المسرحية (prologue)",
            "قصيدة من أربعة عشر بيتاً (sonnet)"
          ],
          "passage": [
            "روميو وجولييت (Romeo and Juliet) مسرحية كتبها ويليام شكسبير.",
            "كتبها نحو عام 1595، عندما كانت إليزابيث الأولى ملكة.",
            "تدور القصة في فيرونا (Verona)، وهي مدينة في إيطاليا.",
            "عائلتان غنيّتان، آل مونتاغيو (Montagues) وآل كابوليت (Capulets)، تكره كل منهما الأخرى.",
            "روميو من آل مونتاغيو، وجولييت من آل كابوليت.",
            "يلتقيان في حفلة ويقعان في الحب فوراً.",
            "يتزوّجان سرّاً، بمساعدة الراهب لورنس (Friar Lawrence).",
            "ثم يقتل روميو تيبالت (Tybalt)، ابن عمّ جولييت، في شجار.",
            "يُنفى روميو من المدينة.",
            "يأمر والد جولييت بأن تتزوّج رجلاً يُسمّى باريس (Paris).",
            "يعطي الراهب جولييت شراباً يجعلها تبدو ميتة.",
            "يظنّ روميو أنها ماتت حقاً، فيشرب السمّ.",
            "تستيقظ جولييت، فتجده ميتاً، وتقتل نفسها.",
            "تخبرنا المسرحية بكل هذا في مقدّمة (prologue)، قبل أن تبدأ حتى."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "świat, w którym powstała dana historia (context)",
            "rządzony przez mężczyzn (patriarchal)",
            "długa, zacięta kłótnia między dwiema rodzinami (feud)",
            "mowa wygłaszana przed rozpoczęciem sztuki (prologue)",
            "wiersz o czternastu linijkach (sonnet)"
          ],
          "passage": [
            "Romeo i Julia (Romeo and Juliet) to sztuka Williama Szekspira.",
            "Napisał ją około 1595 roku, kiedy królową była Elżbieta I.",
            "Historia dzieje się w Weronie, mieście we Włoszech.",
            "Dwie bogate rodziny, Montekowie i Kapuletowie, nienawidzą się nawzajem.",
            "Romeo jest Montekim, a Julia jest Kapuletką.",
            "Spotykają się na balu i od razu się w sobie zakochują.",
            "Biorą ślub w tajemnicy, z pomocą brata Laurentego (Friar Lawrence).",
            "Potem Romeo zabija w walce Tybalta, kuzyna Julii.",
            "Romeo zostaje wygnany z miasta.",
            "Ojciec Julii rozkazuje jej wyjść za mężczyznę o imieniu Parys.",
            "Brat Laurenty daje Julii napój, który sprawia, że wygląda jak martwa.",
            "Romeo myśli, że ona naprawdę nie żyje, więc wypija truciznę.",
            "Julia budzi się, znajduje go martwego i zabija się.",
            "Sztuka mówi nam to wszystko w prologu, zanim się jeszcze zacznie."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "o mundo em que uma história foi escrita (context, contexto)",
            "governado por homens (patriarchal, patriarcal)",
            "uma briga longa e amarga entre duas famílias (feud, rixa)",
            "um discurso antes de a peça começar (prologue, prólogo)",
            "um poema de catorze/quatorze versos (sonnet, soneto)"
          ],
          "passage": [
            "Romeo and Juliet (Romeu e Julieta) é uma peça de William Shakespeare.",
            "Ele escreveu-a por volta de 1595, quando Elizabeth I era rainha.",
            "A história passa-se em Verona, uma cidade da Itália.",
            "Duas famílias ricas, os Montague e os Capulet, odeiam-se.",
            "Romeo é um Montague e Juliet é uma Capulet.",
            "Eles encontram-se numa festa e apaixonam-se de imediato.",
            "Casam-se em segredo, com a ajuda de Friar Lawrence (o Frei Lourenço).",
            "Depois Romeo mata Tybalt, o primo de Juliet, numa luta.",
            "Romeo é expulso da cidade.",
            "O pai de Juliet ordena que ela se case com um homem chamado Paris.",
            "O Frei dá a Juliet uma poção que a faz parecer morta.",
            "Romeo pensa que ela morreu mesmo, e por isso bebe veneno.",
            "Juliet acorda, encontra-o morto, e mata-se.",
            "A peça conta-nos tudo isto num prólogo, antes mesmo de começar."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "adduunka sheekada lagu qoray (context)",
            "rag maamulaan (patriarchal)",
            "col dheer oo qadhaadh oo laba qoys dhex yaal (feud)",
            "hadal ka horreeya bilowga riwaayadda (prologue)",
            "gabay afar iyo toban xariiq ah (sonnet)"
          ],
          "passage": [
            "Romeo and Juliet waa riwaayad uu qoray William Shakespeare.",
            "Wuxuu qoray qiyaastii sannadkii 1595, markii Elizabeth I boqorad ahayd.",
            "Sheekadu waxay ka dhacday Verona, magaalo ku taal Italy.",
            "Laba qoys oo hodan ah, Montagues iyo Capulets, way is nebcaan.",
            "Romeo waa Montague, Juliet-na waa Capulet.",
            "Xaflad ayay ku kulmaan, isla markiibana way is jeclaadaan.",
            "Si qarsoodi ah ayay u guursadaan, iyagoo kaalmo ka helaya Friar Lawrence.",
            "Kadibna Romeo dagaal ayuu ku dilaa Tybalt, ina-adeerka Juliet.",
            "Romeo magaalada ayaa laga masaafuriyaa.",
            "Aabbaha Juliet wuxuu ku amraa inay guursato nin la yiraahdo Paris.",
            "Friar-ku Juliet wuxuu siiyaa dawo (potion) ka dhigaysa inay u muuqato mid dhimatay.",
            "Romeo wuxuu u maleeyaa inay runtii dhimatay, sidaas darteed sun ayuu cabbaa.",
            "Juliet way toostaa, waxay aragtaa isagoo dhintay, naftiidana way dishaa.",
            "Riwaayaddu waxaas oo dhan waxay noo sheegtaa prologue, ka hor intaanay bilaaban."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "світ, у якому було написано історію (context)",
            "керований чоловіками (patriarchal)",
            "довга, запекла ворожнеча між двома родинами (feud)",
            "промова перед початком п’єси (prologue)",
            "вірш із чотирнадцяти рядків (sonnet)"
          ],
          "passage": [
            "«Ромео і Джульєтта» (Romeo and Juliet) — це п’єса Вільяма Шекспіра.",
            "Він написав її приблизно в 1595 році, коли королевою була Єлизавета I.",
            "Події відбуваються у Вероні, місті в Італії.",
            "Дві багаті родини, Монтеккі (Montagues) і Капулетті (Capulets), ненавидять одна одну.",
            "Ромео — Монтеккі, а Джульєтта — Капулетті.",
            "Вони зустрічаються на святі й одразу закохуються.",
            "Вони таємно одружуються з допомогою брата Лоренцо (Friar Lawrence).",
            "Потім Ромео вбиває у бійці Тібальта (Tybalt), двоюрідного брата Джульєтти.",
            "Ромео виганяють із міста.",
            "Батько Джульєтти наказує їй вийти заміж за чоловіка на ім’я Паріс (Paris).",
            "Брат Лоренцо дає Джульєтті зілля, від якого вона виглядає мертвою.",
            "Ромео думає, що вона справді мертва, тому випиває отруту.",
            "Джульєтта прокидається, бачить його мертвим і вбиває себе.",
            "П’єса розповідає нам усе це в пролозі (prologue), ще до того, як вона починається."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ دنیا جس میں کہانی لکھی گئی (context)",
            "مردوں کے چلائے ہوئے (patriarchal)",
            "دو خاندانوں کے بیچ لمبی، تلخ دشمنی (feud)",
            "ڈرامہ شروع ہونے سے پہلے کی ایک تقریر (prologue)",
            "چودہ سطروں کی ایک نظم (sonnet)"
          ],
          "passage": [
            "Romeo and Juliet ولیم شیکسپیئر کا ایک ڈرامہ ہے۔",
            "اس نے یہ تقریباً 1595 میں لکھا، جب الزبتھ اول ملکہ تھی۔",
            "کہانی اٹلی کے شہر ویرونا میں ہوتی ہے۔",
            "دو امیر خاندان، مونٹیگیو اور کیپیولیٹ، ایک دوسرے سے نفرت کرتے ہیں۔",
            "رومیو مونٹیگیو ہے اور جولیٹ کیپیولیٹ ہے۔",
            "وہ ایک دعوت میں ملتے ہیں اور فوراً ایک دوسرے سے محبت کرنے لگتے ہیں۔",
            "وہ فرائر لارنس کی مدد سے خفیہ شادی کر لیتے ہیں۔",
            "پھر رومیو ایک لڑائی میں جولیٹ کے کزن ٹبالٹ کو مار دیتا ہے۔",
            "رومیو کو شہر سے نکال دیا جاتا ہے۔",
            "جولیٹ کا باپ اسے پیرس نامی ایک آدمی سے شادی کرنے کا حکم دیتا ہے۔",
            "فرائر جولیٹ کو ایک دوا دیتا ہے جس سے وہ مُردہ دکھائی دیتی ہے۔",
            "رومیو سمجھتا ہے کہ وہ واقعی مر گئی ہے، اس لیے وہ زہر پی لیتا ہے۔",
            "جولیٹ جاگتی ہے، اسے مُردہ پاتی ہے، اور خود کو مار دیتی ہے۔",
            "ڈرامہ یہ سب ہمیں شروع ہونے سے پہلے ہی ایک prologue میں بتا دیتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Shakespeare's London and Shakespeare's Verona",
          paragraphs: [
            "Shakespeare wrote Romeo and Juliet in about 1595, in the reign of Elizabeth I, so we call its world Elizabethan. London was a crowded, fast-growing city with the first permanent playhouses. Plays were performed in daylight, the poorest spectators stood in the yard, and plague closed the theatres most summers. His audience knew about sudden death.",
            "The play is set in Verona, in Italy. The story was not new: an Italian writer told it in about 1530, and Shakespeare's main source was an English poem by Arthur Brooke (1562). Many Elizabethans believed that hot countries produced hot-blooded, passionate people. Setting the play in Italy helped the audience accept lovers who marry after one night and die within the week."
          ],
          quote: { text: "Two households, both alike in dignity, / In fair Verona, where we lay our scene,", source: "Prologue 1–2" },
          tip: "‘Alike in dignity’ means equal in rank. Neither family is better than the other, so neither will back down."
        },
        {
          heading: "Fathers, marriage and the stars",
          paragraphs: [
            "Elizabethan England was patriarchal. The father was the undisputed head of the household, and going against him was seen as going against God. Children, especially daughters, often could not choose whom they married. Marriages among the rich were arranged to protect wealth and reputation, and it was thought foolish to marry for love. Many couples met for the first time on their wedding day.",
            "Elizabethans were also deeply religious and deeply superstitious. Almost everyone was Christian, and suicide was a mortal sin that could send a soul to hell. At the same time, many believed in astrology: that your life was written in the stars. When the Prologue calls Romeo and Juliet star-crossed, the first audience would have heard a warning that the heavens were against them."
          ],
          quote: { text: "From forth the fatal loins of these two foes / A pair of star-crossed lovers take their life,", source: "Prologue 5–6" },
          tip: "Context is only worth marks when it explains a moment in the play. Link ‘star-crossed’ to belief in astrology, not to a history lesson."
        },
        {
          heading: "A prologue in the shape of a sonnet",
          paragraphs: [
            "A prologue is an introduction that tells the audience what is going to happen. Shakespeare's prologue gives away the whole plot: two families at war, two children who fall in love, and their deaths, which finally end the feud. Knowing the ending does not spoil the play. It creates tension, because we watch every happy moment knowing what is coming, and it builds sympathy for two people who cannot see what we can see.",
            "The prologue is a sonnet: fourteen lines, with a rhyme scheme and a final rhyming couplet. Sonnets were the poems of love, so the form announces love, but the words inside it are about grudge, mutiny and blood. Love and violence are locked together from the first line. The prologue also tells us this is a tragedy, a play about flawed characters that ends in death and is designed to make us feel sadness and pity."
          ],
          quote: { text: "From ancient grudge break to new mutiny, / Where civil blood makes civil hands unclean.", source: "Prologue 3–4" },
          tip: "‘Civil’ is repeated: the blood is the blood of fellow citizens, so the feud is a wound inside one city, not a war between two."
        }
      ],
      gate: [
        { kind: "mcq", q: "Who was on the English throne when Shakespeare wrote Romeo and Juliet in about 1595?", options: ["Elizabeth I", "James I", "Henry VIII", "Victoria"], answer: 0, why: "Romeo and Juliet is an Elizabethan play. Elizabeth I reigned from 1558 to 1603.",
          feedback: [
            "",
            "You have moved the play into the next reign. James I came to the throne in 1603; Macbeth belongs to his reign, but Romeo and Juliet was written in about 1595, under Elizabeth I.",
            "Henry VIII died in 1547, before Shakespeare was born in 1564. The play was written in the 1590s, in the reign of his daughter Elizabeth I.",
            "Victoria reigned in the nineteenth century, more than 250 years after this play. Shakespeare's queen was Elizabeth I, which is why we call his world Elizabethan."
          ] },
        { kind: "numeric", q: "The prologue is a sonnet. How many lines does a sonnet have?", answer: 14, check: "3*4 + 2", tolerance: 0, units: "lines", why: "A sonnet has fourteen lines. Shakespeare's prologue is three groups of four lines and a closing rhyming couplet.",
          misconceptions: [
            { answer: 12, check: "3*4", says: "You have counted the three groups of four lines and forgotten the final rhyming couplet. Add the last two lines: a sonnet has fourteen." },
            { answer: 16, check: "4*4", says: "That is four groups of four. A sonnet has three groups of four and then a couplet of two, which makes fourteen." },
            { answer: 10, check: "10", says: "Ten is a line's syllable count, not the line count. Each line has about ten syllables; the sonnet has fourteen lines." }
          ] },
        { kind: "gap", q: "In an Elizabethan family the father was the head of the household. We call a society run by men ___.", answer: "patriarchal", options: ["patriarchal", "matriarchal", "hierarchical"], why: "Patriarchal comes from the Latin for father. Fathers held the power, and wives and children were expected to obey.",
          feedback: {
            "matriarchal": "You have the right idea but the wrong half of the pair. Matriarchal would mean run by mothers. Elizabethan society gave power to fathers and husbands, so it was patriarchal.",
            "hierarchical": "A hierarchy is any ranking from top to bottom, so the word is too general here. The question is about who sat at the top: men, which makes the society patriarchal."
          } }
      ],
      modules: [
        {
          title: "The plot in eight steps",
          task: {
            kind: "order",
            q: "Put these eight events from Romeo and Juliet in the order they happen in the play.",
            items: [
              "Servants of the two families brawl in the streets of Verona.",
              "Romeo and Juliet meet at the Capulets' party and fall in love.",
              "Friar Lawrence marries Romeo and Juliet in secret.",
              "Tybalt kills Mercutio, and Romeo kills Tybalt.",
              "The Prince banishes Romeo from Verona.",
              "Lord Capulet orders Juliet to marry Paris on Thursday.",
              "Juliet drinks the Friar's potion and is laid in the tomb.",
              "Romeo drinks poison; Juliet wakes and stabs herself."
            ]
          },
          levels: {
            support: {
              steps: [
                "Find the event that starts everything: what does the audience see first?",
                "Find the event that ends everything: how do the lovers die?",
                "The wedding must come before the fight, because Romeo refuses to fight his new cousin Tybalt.",
                "Banishment comes straight after the killing; the forced marriage to Paris comes after that, and the potion is Juliet's escape from it."
              ],
              example: {
                q: "Practice: put these moments from Act 1 in order: Romeo sees Juliet across the room; Lord Capulet talks to Paris about marriage; the Nurse tells Juliet that Romeo is a Montague; Romeo and Juliet kiss.",
                steps: [
                  "Capulet and Paris talk in Scene 2, before the party.",
                  "At the party, Romeo sees Juliet before he speaks to her.",
                  "They talk and kiss.",
                  "Only afterwards does the Nurse tell Juliet who he is."
                ],
                answer: "Capulet talks to Paris; Romeo sees Juliet; they kiss; the Nurse names him a Montague."
              }
            },
            core: { hint: "Think of three stages: Acts 1–2 the lovers find each other, Act 3 the fight breaks everything, Acts 4–5 the plan to save them goes wrong." },
            stretch: { extend: "Which one event on the list is the turning point of the play? Justify your choice in two sentences, then say which event could most easily have been prevented, and by whom." }
          },
          why: "The play moves in three stages: love found (Acts 1–2), love broken by the feud (Act 3), and a rescue that fails (Acts 4–5). Every later chapter fits into this shape.",
          explain: "Say, in one sentence, why the secret wedding has to come before the fight in Act 3."
        },
        {
          title: "Context to meaning",
          task: {
            kind: "match",
            q: "Match each piece of Elizabethan context to the moment in the play it helps you understand.",
            pairs: [
              ["Fathers chose their children's husbands and wives", "Why Lord Capulet is so furious when Juliet refuses Paris"],
              ["Belief in astrology: lives written in the stars", "Why the Prologue calls the lovers star-crossed"],
              ["Suicide was a mortal sin", "Why the lovers' deaths would shock, not just sadden, the audience"],
              ["Men were expected to defend their honour by fighting", "Why Tybalt cannot let Romeo's presence at the party pass"],
              ["Italy was thought to make people hot-blooded", "Why the audience could accept love at first sight and a wedding the next day"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read the left-hand side and say in your own words what each belief is.",
                "Ask: what would someone who believed this feel when watching the play?",
                "Find the moment on the right that would trigger that feeling."
              ],
              example: {
                q: "Practice: which moment does the belief that almost everyone was Christian help you understand: (a) Juliet turning to Friar Lawrence for help, or (b) Mercutio's jokes?",
                steps: ["A friar is a religious adviser.", "In a Christian society, a friar is where you go with a problem of conscience.", "So the belief explains why Juliet goes to him."],
                answer: "(a) Juliet turning to Friar Lawrence for help."
              }
            },
            core: { hint: "Each piece of context explains a feeling the first audience would have had. Match the belief to the feeling." },
            stretch: { extend: "Pick one pair and turn it into a single sentence that names the moment, quotes three or four words from the play, and weaves in the context in the same sentence." }
          },
          why: "Context earns credit only when it explains why a moment matters. Each pair here is one link you can reuse in a paragraph.",
          explain: "Pick one pair and say, in one sentence, what the first audience would have felt at that moment and why."
        },
        {
          title: "The purpose of the Prologue",
          task: {
            kind: "written",
            q: "Why does Shakespeare open Romeo and Juliet with a prologue? Write one What, How, Why paragraph.",
            marks: 8,
            criteria: [
              "What: a clear point about the purpose of the prologue (to introduce, to reveal, to create tension or sympathy)",
              "How: at least one short quotation from the prologue, embedded in your own sentence",
              "How: you name the form (sonnet, rhyming couplet) or a word choice and explain its effect",
              "Why: you say what the audience feels, and link it to the idea of tragedy"
            ],
            model: "Shakespeare opens with a prologue so that the audience knows the ending before the play begins. The Chorus tells us that “A pair of star-crossed lovers take their life”, revealing the deaths in the sixth line. The word ‘star-crossed’ suggests that the heavens are against them, which an Elizabethan audience who believed in astrology would take seriously. Because we already know how it ends, every happy moment is shadowed by what is coming, so the prologue creates tension rather than surprise. It also tells us that this is a tragedy, written in the shape of a love sonnet, so love and death are tied together from the first fourteen lines."
          },
          levels: {
            support: {
              steps: [
                "What: write one sentence that says what the prologue does (introduces the themes, reveals the ending, creates tension).",
                "How: choose a short quotation, for example ‘star-crossed’ or ‘civil blood’, and name the form: a sonnet.",
                "Why: explain what an audience who knows the ending feels while they watch: tension and sympathy.",
                "Check: does your paragraph end by linking back to the question?"
              ],
              example: {
                q: "Practice question: why does Shakespeare set the play in Verona, in Italy?",
                steps: [
                  "What: the Italian setting makes the passion believable.",
                  "How: the Prologue places us “In fair Verona, where we lay our scene”.",
                  "Why: Elizabethans believed hot countries made people hot-blooded, so sudden love and sudden violence fit the place."
                ],
                answer: "Shakespeare sets the play in Verona because it makes the speed of the love story believable. The Prologue tells us we are “In fair Verona, where we lay our scene”, and Elizabethans believed that hot countries produced passionate people. The word ‘fair’ makes the city sound beautiful, which contrasts with the civil blood spilled in its streets."
              }
            },
            core: { hint: "Use What, How, Why. Make sure the quotation is short and sits inside your own sentence." },
            stretch: { extend: "Add a sentence that argues the opposite: does knowing the ending reduce the tension? Then decide which view is stronger and say why." }
          },
          why: "A strong paragraph moves from a clear point, to a short quotation, to the effect of a word or form, to what the audience feels. The model shows each step in that order.",
          explain: "Say which word in your quotation you would analyse first, and what it suggests about the lovers' future."
        }
      ]
    },

    // ───────────────────────────── CHAPTER 2 ─────────────────────────────
    {
      key: "conflict-fathers-daughters", n: 2,
      title: "Fighting men, a careful father and a quiet daughter (Act 1, Scenes 1–3)",
      lead: "This chapter shows you how the play opens with a brawl, how Lord Capulet surprises us, and how we meet Juliet through other people's words.",
      covers: [4, 5, 6],
      pretext: {
        words: [
          { word: "masculinity", means: "the ways a society expects men to behave", sentence: "In Verona, masculinity means being ready to fight." },
          { word: "insult", means: "a rude remark meant to hurt or provoke", sentence: "Sampson's insult starts a fight in the street." },
          { word: "courtship", means: "the time when a man tries to win a woman as his wife", sentence: "Paris begins his courtship by asking Juliet's father first." },
          { word: "unconventional", means: "not doing what most people do", sentence: "Lord Capulet is unconventional because he wants Juliet to have a choice." },
          { word: "demure", means: "quiet, shy and modest", sentence: "Juliet seems demure when she speaks politely to her mother." },
          { word: "submissive", means: "obeying orders without question", sentence: "A submissive daughter does what her parents tell her." }
        ],
        passage: [
          "The play begins in the streets of Verona.",
          "Two Capulet servants boast about fighting Montagues.",
          "They meet Montague servants and a brawl breaks out.",
          "Benvolio tries to stop it, but Tybalt wants blood.",
          "The Prince arrives and threatens death to anyone who fights again.",
          "In the next scene, Paris asks Lord Capulet to marry Juliet.",
          "Capulet says she is too young, not yet fourteen.",
          "He says Juliet must agree before he will say yes.",
          "This was unusual for a father in Shakespeare's time.",
          "Then we meet Juliet with her mother and her Nurse.",
          "Lady Capulet tells her that Paris wants to marry her.",
          "Juliet answers politely and says she will do as her mother asks.",
          "She seems quiet and obedient.",
          "But we have not yet seen the real Juliet."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "الطرق التي يتوقّع المجتمع أن يتصرّف بها الرجال (masculinity)",
            "كلام فظّ يُقصد به الإيذاء أو الاستفزاز (insult)",
            "الفترة التي يحاول فيها الرجل أن يكسب امرأة لتكون زوجته (courtship)",
            "لا يفعل ما يفعله أكثر الناس (unconventional)",
            "هادئة وخجولة ومحتشمة (demure)",
            "تطيع الأوامر بلا سؤال (submissive)"
          ],
          "passage": [
            "تبدأ المسرحية في شوارع فيرونا.",
            "خادمان من آل كابوليت يتفاخران بقتال آل مونتاغيو.",
            "يلتقيان خدماً من آل مونتاغيو، فيندلع شجار.",
            "يحاول بنفوليو (Benvolio) أن يوقفه، لكن تيبالت يريد الدم.",
            "يصل الأمير ويهدّد بالموت كل من يتقاتل مرة أخرى.",
            "في المشهد التالي، يطلب باريس من اللورد كابوليت أن يتزوّج جولييت.",
            "يقول كابوليت إنها صغيرة جداً، لم تبلغ الرابعة عشرة بعد.",
            "ويقول إن جولييت يجب أن توافق قبل أن يقول هو نعم.",
            "كان هذا غير مألوف لأبٍ في زمن شكسبير.",
            "ثم نلتقي جولييت مع أمّها ومربّيتها (the Nurse).",
            "تخبرها الليدي كابوليت أن باريس يريد الزواج بها.",
            "تجيب جولييت بأدب وتقول إنها ستفعل ما تطلبه أمّها.",
            "تبدو هادئة ومطيعة.",
            "لكننا لم نرَ جولييت الحقيقية بعد."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "sposoby, w jakie społeczeństwo oczekuje, że będą się zachowywać mężczyźni (masculinity)",
            "niegrzeczna uwaga, która ma zranić albo sprowokować (insult)",
            "czas, kiedy mężczyzna stara się zdobyć kobietę na żonę (courtship)",
            "nierobiący tego, co robi większość ludzi (unconventional)",
            "cicha, nieśmiała i skromna (demure)",
            "wykonująca rozkazy bez pytania (submissive)"
          ],
          "passage": [
            "Sztuka zaczyna się na ulicach Werony.",
            "Dwóch służących Kapuletów przechwala się walkami z Montekimi.",
            "Spotykają służących Montekich i wybucha bójka.",
            "Benvolio próbuje ją przerwać, ale Tybalt chce krwi.",
            "Przybywa Książę i grozi śmiercią każdemu, kto znów będzie walczyć.",
            "W następnej scenie Parys prosi Pana Kapuleta o rękę Julii.",
            "Kapulet mówi, że jest za młoda, nie ma jeszcze czternastu lat.",
            "Mówi, że Julia musi się zgodzić, zanim on powie tak.",
            "To było niezwykłe dla ojca w czasach Szekspira.",
            "Potem poznajemy Julię z jej matką i Nianią (Nurse).",
            "Pani Kapulet mówi jej, że Parys chce się z nią ożenić.",
            "Julia odpowiada uprzejmie i mówi, że zrobi tak, jak prosi matka.",
            "Wydaje się cicha i posłuszna.",
            "Ale prawdziwej Julii jeszcze nie widzieliśmy."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "as maneiras como uma sociedade espera que os homens se comportem (masculinity, masculinidade)",
            "um comentário rude feito para magoar ou provocar (insult, insulto)",
            "o tempo em que um homem tenta conquistar uma mulher para ser sua esposa (courtship, corte)",
            "não fazer o que a maioria das pessoas faz (unconventional, pouco convencional)",
            "calma, tímida e modesta (demure, recatada)",
            "obedecer a ordens sem questionar (submissive, submissa)"
          ],
          "passage": [
            "A peça começa nas ruas de Verona.",
            "Dois criados dos Capulet gabam-se de lutar contra os Montague.",
            "Encontram criados dos Montague e começa uma briga.",
            "Benvolio tenta pará-la, mas Tybalt quer sangue.",
            "O Príncipe chega e ameaça de morte quem voltar a lutar.",
            "Na cena seguinte, Paris pede a Lord Capulet para se casar com Juliet.",
            "Capulet diz que ela é muito nova, ainda não tem catorze/quatorze anos.",
            "Ele diz que Juliet tem de concordar antes de ele dizer sim.",
            "Isto era pouco comum para um pai no tempo de Shakespeare.",
            "Depois conhecemos Juliet com a mãe e com a sua Ama (the Nurse).",
            "Lady Capulet diz-lhe que Paris quer casar com ela.",
            "Juliet responde com educação e diz que fará o que a mãe pede.",
            "Ela parece calma e obediente.",
            "Mas ainda não vimos a verdadeira Juliet."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "siyaabaha bulshadu ka filayso in raggu u dhaqmaan (masculinity)",
            "hadal xun oo loogu talagalay in lagu dhaawaco ama lagu xanaajiyo (insult)",
            "waqtiga ninku isku dayo inuu naag xaas ka dhigto (courtship)",
            "aan samayn waxa dadka badankood sameeyaan (unconventional)",
            "aamusan, xishood badan oo edeb leh (demure)",
            "amarrada adeeca iyadoon su'aal keenin (submissive)"
          ],
          "passage": [
            "Riwaayaddu waxay ka bilaabataa waddooyinka Verona.",
            "Laba addoon oo Capulet ah waxay ku faanaan la dagaallanka Montagues.",
            "Waxay la kulmaan addoommo Montague ah, dagaalna wuu dhacaa.",
            "Benvolio wuxuu isku dayaa inuu joojiyo, laakiin Tybalt dhiig ayuu rabaa.",
            "Amiirku (Prince) wuu yimaadaa, wuxuuna dil ugu hanjabaa qof kasta oo mar kale dagaallama.",
            "Muuqaalka xiga, Paris wuxuu weydiistaa Lord Capulet inuu Juliet guursado.",
            "Capulet wuxuu yiraahdaa aad ayay u yar tahay, afar iyo toban weli ma gaarin.",
            "Wuxuu yiraahdaa Juliet waa inay ogolaato ka hor intuusan haa oran.",
            "Tani waxay ahayd wax aan caadi ahayn aabbe xilligii Shakespeare.",
            "Kadibna waxaan la kulannaa Juliet oo la jooga hooyadeed iyo Nurse-keeda.",
            "Lady Capulet waxay u sheegtaa in Paris doonayo inuu guursado.",
            "Juliet si edeb leh ayay u jawaabtaa, waxayna tiraahdaa waxay samayn doontaa waxa hooyadeed weydiisato.",
            "Waxay u muuqataa mid aamusan oo adeec badan.",
            "Laakiin weli ma aragnin Juliet-ta dhabta ah."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "те, як суспільство очікує, що поводитимуться чоловіки (masculinity)",
            "грубе зауваження, сказане, щоб образити або розлютити (insult)",
            "час, коли чоловік намагається здобути жінку собі за дружину (courtship)",
            "такий, що не робить того, що роблять більшість людей (unconventional)",
            "тиха, сором’язлива і скромна (demure)",
            "та, що виконує накази без запитань (submissive)"
          ],
          "passage": [
            "П’єса починається на вулицях Верони.",
            "Двоє слуг Капулетті хваляться, що б’ються з Монтеккі.",
            "Вони зустрічають слуг Монтеккі, і спалахує бійка.",
            "Бенволіо (Benvolio) намагається її зупинити, але Тібальт хоче крові.",
            "Прибуває Князь (Prince) і погрожує смертю кожному, хто битиметься знову.",
            "У наступній сцені Паріс просить лорда Капулетті віддати за нього Джульєтту.",
            "Капулетті каже, що вона надто молода, їй ще немає чотирнадцяти.",
            "Він каже, що Джульєтта має погодитися, перш ніж він скаже «так».",
            "Для батька за часів Шекспіра це було незвично.",
            "Потім ми бачимо Джульєтту з її матір’ю та Нянею (Nurse).",
            "Леді Капулетті каже їй, що Паріс хоче з нею одружитися.",
            "Джульєтта відповідає чемно й каже, що зробить так, як просить мати.",
            "Вона здається тихою і слухняною.",
            "Але справжньої Джульєтти ми ще не бачили."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "وہ طریقے جن سے ایک معاشرہ مردوں سے برتاؤ کی توقع رکھتا ہے (masculinity)",
            "ایک بدتمیز بات جو تکلیف دینے یا بھڑکانے کے لیے کہی جائے (insult)",
            "وہ وقت جب کوئی مرد کسی عورت کو بیوی بنانے کے لیے اس کا دل جیتنے کی کوشش کرتا ہے (courtship)",
            "وہ نہ کرنا جو زیادہ تر لوگ کرتے ہیں (unconventional)",
            "خاموش، شرمیلی اور باحیا (demure)",
            "بغیر سوال کیے حکم ماننے والا (submissive)"
          ],
          "passage": [
            "ڈرامہ ویرونا کی گلیوں میں شروع ہوتا ہے۔",
            "کیپیولیٹ کے دو نوکر مونٹیگیو والوں سے لڑنے کی شیخی مارتے ہیں۔",
            "وہ مونٹیگیو کے نوکروں سے ملتے ہیں اور لڑائی چھڑ جاتی ہے۔",
            "بینوولیو اسے روکنے کی کوشش کرتا ہے، مگر ٹبالٹ خون چاہتا ہے۔",
            "شہزادہ (Prince) آتا ہے اور دھمکی دیتا ہے کہ جو دوبارہ لڑے گا اسے موت ملے گی۔",
            "اگلے منظر میں پیرس لارڈ کیپیولیٹ سے جولیٹ کا ہاتھ مانگتا ہے۔",
            "کیپیولیٹ کہتا ہے کہ وہ بہت چھوٹی ہے، ابھی چودہ کی بھی نہیں۔",
            "وہ کہتا ہے کہ جولیٹ کی رضامندی ضروری ہے، اس کے بعد ہی وہ ہاں کہے گا۔",
            "شیکسپیئر کے زمانے میں ایک باپ کے لیے یہ غیر معمولی بات تھی۔",
            "پھر ہم جولیٹ کو اس کی ماں اور اس کی دایہ (Nurse) کے ساتھ دیکھتے ہیں۔",
            "لیڈی کیپیولیٹ اسے بتاتی ہے کہ پیرس اس سے شادی کرنا چاہتا ہے۔",
            "جولیٹ ادب سے جواب دیتی ہے اور کہتی ہے کہ وہ ویسا ہی کرے گی جیسا اس کی ماں کہے۔",
            "وہ خاموش اور فرماں بردار لگتی ہے۔",
            "مگر ہم نے ابھی اصلی جولیٹ کو نہیں دیکھا۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Why the play starts with a fight (1.1)",
          paragraphs: [
            "Masculinity means the behaviour a society expects from men. The most admired version, which we call hegemonic masculinity, is physical strength, hiding your feelings and being ready to fight. Verona runs on it. The play opens with two Capulet servants, Sampson and Gregory, boasting about what they will do to Montagues, and Sampson's gesture of biting his thumb is enough to start a street fight.",
            "Benvolio, whose name means good will, draws his sword to stop the fighting. Tybalt draws his to join it, and his hatred of peace tells us exactly what kind of man he is. The Prince ends the brawl with a threat: anyone who disturbs the streets again will die. Shakespeare opens with violence because the whole tragedy grows out of it. The feud is the world the lovers are born into, and the Prince's threat loads the gun that fires in Act 3."
          ],
          quote: { text: "What, drawn, and talk of peace? I hate the word / As I hate hell, all Montagues, and thee. / Have at thee, coward!", source: "1.1.71–73" },
          tip: "Notice the list: peace, hell, all Montagues, and thee. Tybalt puts peace in the same group as hell."
        },
        {
          heading: "An unconventional father (1.2)",
          paragraphs: [
            "Marriage among wealthy Elizabethans was a business deal. Parents arranged matches to secure money and reputation, the church had to bless the match, and young people had little say. Before marriage, a nobleman might practise courtship: gifts, poetry and extravagant praise. Courtly love was the most passionate version, full of worship and strict rules, and it was only for people of the same class.",
            "Against that background, Lord Capulet surprises us. When Paris asks for Juliet, Capulet says she is not yet fourteen and should wait two more summers. He calls her the hopeful lady of his earth, and he says his will is only a part: Juliet must consent too, within her scope of choice. For a patriarchal audience this is unconventional, even generous. Remember it, because the same man will threaten to throw her into the street in Act 3."
          ],
          quote: { text: "My will to her consent is but a part.", source: "1.2.17" },
          tip: "Learn ‘consent’ and ‘scope of choice’. You can set them against ‘I will drag thee on a hurdle thither’ to show how far Capulet changes."
        },
        {
          heading: "Meeting Juliet through other people (1.3)",
          paragraphs: [
            "Elizabethan women were expected to be demure and submissive: quiet, modest, obedient to fathers and husbands as they obeyed God. We hear about Juliet before we meet her. The Nurse calls her a lamb and a ladybird, soft and small, and tells long stories about her as a baby. Lady Capulet is formal and gets straight to business: Paris wants to marry her.",
            "Juliet's first line is an interrogative, a question. She asks her mother what her will is, which puts her mother's wishes before her own. She says marriage is an honour she has not dreamt of, and promises to look to like, if looking liking move, but no deeper than her mother's consent allows. Everything she says fits the demure, submissive daughter the audience expects. Notice the rhyme in her lines: the neat couplets sound polite and rehearsed. The passionate, decisive Juliet is still hidden."
          ],
          quote: { text: "Madam, I am here. What is your will?", source: "1.3.7–8" },
          tip: "‘Madam’, not ‘Mother’. The formal word suggests the distance between Juliet and Lady Capulet; it is the Nurse who has raised her."
        }
      ],
      gate: [
        { kind: "mcq", q: "In Act 1 Scene 1, what does the Prince threaten to do to anyone who disturbs the peace of Verona again?", options: ["Fine them", "Banish them", "Put them to death", "Imprison them"], answer: 2, why: "The Prince says the next person to fight in the streets will pay with their life. This is why Romeo's killing of Tybalt is so dangerous in Act 3.",
          feedback: [
            "A fine would not frighten two wealthy households. The Prince's threat is death, which is why the stakes are so high when Romeo kills Tybalt in Act 3.",
            "Banishment is what Romeo actually receives in Act 3, when the Prince softens the punishment. In Act 1 the threat he announces is death.",
            "",
            "Nobody in the play is sent to prison. The Prince threatens death in Act 1 Scene 1; the lighter sentence of banishment comes only in Act 3."
          ] },
        { kind: "mcq", q: "In Act 1 Scene 2, what does Lord Capulet tell Paris about marrying Juliet?", options: ["Juliet is too young; she must wait and must agree herself", "Paris may marry her on Thursday", "Juliet is already promised to Tybalt", "He refuses Paris completely"], answer: 0, why: "Capulet says Juliet has not seen fourteen years, asks Paris to wait two summers, and says his own will is only a part: she must consent.",
          feedback: [
            "",
            "You have jumped forward to Act 3 Scene 4. Thursday is the wedding day Capulet sets after Tybalt's death. In Act 1 Scene 2 he asks Paris to wait two summers and says Juliet must agree.",
            "Tybalt is Juliet's cousin, not a suitor. Capulet is talking to Paris about Paris. His answer is: wait, she is too young, and she must consent.",
            "He does not refuse. He invites Paris to the feast and tells him to woo her. He simply says Juliet is young and that his will is only a part of the decision."
          ] },
        { kind: "gap", q: "Juliet's first line, ‘What is your will?’, is a question. The term for a sentence that asks a question is an ___ sentence.", answer: "interrogative", options: ["interrogative", "imperative", "exclamatory"], why: "Interrogative sentences ask questions. Here the question shows Juliet putting her mother's wishes before her own.",
          feedback: {
            "imperative": "An imperative gives an order, such as ‘Come here.’ Juliet is not ordering anyone; she is asking what her mother wants, which is an interrogative.",
            "exclamatory": "An exclamatory sentence shows strong feeling and ends with an exclamation mark. Juliet's line is calm and ends with a question mark, so it is interrogative."
          } }
      ],
      modules: [
        {
          title: "Spotting hegemonic masculinity",
          task: {
            kind: "mcq",
            q: "Which of these lines from Act 1 Scene 1 best shows hegemonic masculinity: strength, violence and the refusal to back down?",
            options: [
              "Benvolio asks the servants to put up their swords",
              "Tybalt says he hates the word peace as he hates hell",
              "Lady Montague asks where Romeo is",
              "The Prince orders both families to his palace"
            ],
            answer: 1,
            feedback: [
              "Benvolio is trying to stop the fight, which is the opposite of hegemonic masculinity. He shows that not every man in Verona lives by the code, and that makes him a useful contrast.",
              "",
              "Lady Montague is worried about her son's safety. This is care, not a display of male strength, so it does not show the code of masculinity at all.",
              "The Prince uses his authority to end violence, not to start it. Authority is a kind of power, but hegemonic masculinity in this scene means proving yourself through fighting."
            ]
          },
          levels: {
            support: {
              steps: [
                "Remember the three features from your lesson: physical strength, not showing emotion, fighting.",
                "Ask of each line: is this man trying to prove himself through violence?",
                "Cross out the lines where someone is stopping a fight or showing care."
              ],
              example: {
                q: "Practice: Sampson boasts that he will show himself a tyrant and cut off the heads of the Montague maids. Which feature of hegemonic masculinity does this show?",
                steps: ["He is boasting about violence.", "He uses violence to prove he is a man.", "So it shows fighting as a way of proving masculinity."],
                answer: "Fighting and cruelty as a way of proving masculinity: Sampson boasts that he will show himself a tyrant."
              }
            },
            core: { hint: "Find the man who treats peace as an insult." },
            stretch: { extend: "Benvolio and Tybalt are both young Veronese men, yet they behave in opposite ways. In two sentences, explain what Shakespeare gains by placing them side by side in the first scene." }
          },
          why: "Tybalt's hatred of the very word peace is the clearest statement of Verona's code: a real man fights, and a man who talks of peace is a coward. Everything Romeo does in Act 3 is judged against this code.",
          explain: "Say, in one sentence, why Tybalt calls Benvolio a coward for drawing his sword to stop a fight."
        },
        {
          title: "Capulet in Act 1 Scene 2: what the lines show",
          task: {
            kind: "match",
            q: "Match each of Lord Capulet's lines from Act 1 Scene 2 to what it shows about him as a father.",
            pairs: [
              ["“My child is yet a stranger in the world.”", "He thinks Juliet is too young and innocent for marriage."],
              ["“And too soon marred are those so early made.”", "He fears an early marriage would harm her."],
              ["“She's the hopeful lady of my earth.”", "She is precious to him, his hope for the future."],
              ["“My will to her consent is but a part.”", "He wants her to have a say in whom she marries."]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read each line aloud and underline one key word: stranger, marred, hopeful, consent.",
                "‘Marred’ means damaged or spoiled; ‘consent’ means agreement.",
                "Match the key word to the description that fits it best."
              ],
              example: {
                q: "Practice: Capulet tells Paris to wait two more summers before Juliet is ripe to be a bride. What does this show?",
                steps: ["Find the key word: ‘summers’.", "Two summers means two years of waiting.", "So Capulet is protecting his daughter from marrying too early."],
                answer: "He is protective, and wants Juliet to wait until she is older."
              }
            },
            core: { hint: "Each line shows care in a different way: her age, her safety, her value to him, her choice." },
            stretch: { extend: "How would an Elizabethan audience react to a father who says his will is only a part? Write one sentence that gives two different possible reactions." }
          },
          why: "In Act 1 Scene 2 Shakespeare builds Capulet as a loving, unconventional father. These four lines are your evidence for the before, so that his cruelty in Act 3 Scene 5 reads as a change, not a constant.",
          explain: "Say which of the four lines surprises an Elizabethan audience most, and why, in one sentence."
        },
        {
          title: "How Juliet is introduced in Act 1 Scene 3",
          task: {
            kind: "written",
            q: "How does Shakespeare use language to introduce Juliet's character to the audience in Act 1 Scene 3? Write one What, How, Why paragraph.",
            marks: 8,
            criteria: [
              "What: a clear point that says how Juliet is presented (demure, submissive, obedient, formal)",
              "How: at least one short quotation from Act 1 Scene 3, embedded in your own sentence",
              "How: you name a method (interrogative, formal vocabulary, rhyme) and explain its effect",
              "Why: you link her presentation to Elizabethan expectations of young women"
            ],
            model: "Shakespeare introduces Juliet as a demure and submissive daughter. Her first words, “Madam, I am here. What is your will?”, are an interrogative that asks what her mother wants before she says anything about herself. The formal ‘Madam’ suggests distance rather than warmth, as if she were speaking to a superior. When marriage is raised she calls it “an honour that I dream not of”, which shows no ambition of her own and no resistance either. As a young woman in Elizabethan England, Juliet was expected to obey her parents as she obeyed God, and Shakespeare lets her meet that expectation perfectly here, so that her later defiance will shock us more."
          },
          levels: {
            support: {
              steps: [
                "What: write one sentence that says how Juliet comes across (for example: polite, quiet, obedient).",
                "How: choose a short quotation and name the method: an interrogative, the formal word ‘Madam’, or the rhyme.",
                "Why: explain what that method shows about Juliet, then link it to what Elizabethans expected of daughters.",
                "Check: does your paragraph end by linking back to the question?"
              ],
              example: {
                q: "Practice question: how does Shakespeare use language to introduce the Nurse in Act 1 Scene 3?",
                steps: [
                  "What: the Nurse is loving and talkative.",
                  "How: she calls Juliet “What, lamb! What, ladybird!”",
                  "Why: the pet names are soft, small creatures, so she sees Juliet as her own baby to protect; wealthy children were often raised by a nurse rather than a mother."
                ],
                answer: "Shakespeare introduces the Nurse as warm and motherly. She calls out “What, lamb! What, ladybird!”, and both pet names are small, gentle creatures, which shows she still sees Juliet as the baby she nursed. Wealthy Elizabethan children were often raised by a nurse, so her closeness to Juliet, and Lady Capulet's distance, would not have surprised the audience."
              }
            },
            core: { hint: "Use What, How, Why, and make sure your context explains the quotation rather than sitting at the end." },
            stretch: { extend: "Add a sentence that asks whether Juliet is really submissive or only polite. Use her line about looking to like, if looking liking move: does it leave her a way out?" }
          },
          why: "A top paragraph moves from a clear point, to a short quotation, to the effect of one word or method, to context that explains why it matters. The model shows each step in that order.",
          explain: "Say which word in your first quotation you would analyse first, and what it suggests about Juliet."
        }
      ]
    },

    // ───────────────────────────── CHAPTER 3 ─────────────────────────────
    {
      key: "love-at-first-sight", n: 3,
      title: "Love at first sight (Act 1, Scenes 4–5 and Act 2, Scene 2)",
      lead: "This chapter takes you from Mercutio's jokes about love to the balcony, where Juliet turns out to be braver and wiser than anyone expected.",
      covers: [7, 8, 9],
      pretext: {
        words: [
          { word: "foil", means: "a character who is the opposite of another", sentence: "Mercutio is a foil to Romeo because he laughs at love." },
          { word: "soliloquy", means: "a speech made alone on stage", sentence: "In his soliloquy, Romeo compares Juliet to the sun." },
          { word: "imagery", means: "word pictures a writer paints", sentence: "Romeo uses religious imagery, calling Juliet a saint." },
          { word: "semantic field", means: "a group of words about the same subject", sentence: "Shrine, pilgrim and saint form a semantic field of religion." },
          { word: "infatuation", means: "a sudden, intense crush", sentence: "Is it love, or only infatuation?" }
        ],
        passage: [
          "Romeo and his friends go to the Capulets' party in masks.",
          "Romeo is sad about a girl called Rosaline.",
          "His friend Mercutio makes jokes about love and dreams.",
          "Romeo has a bad feeling about the night.",
          "At the party, Romeo sees Juliet across the room.",
          "He forgets Rosaline at once.",
          "He says Juliet teaches the torches to burn bright.",
          "They talk, using words about saints and pilgrims.",
          "They kiss, then learn that they are enemies.",
          "Later that night, Romeo hides in the Capulets' orchard.",
          "Juliet stands at her window and speaks her thoughts aloud.",
          "She asks why Romeo must be a Montague.",
          "They promise to marry.",
          "The quiet girl of Act 1 is gone."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "شخصية تكون عكس شخصية أخرى (foil)",
            "خطاب تقوله الشخصية وحدها على المسرح (soliloquy)",
            "صور كلامية يرسمها الكاتب (imagery)",
            "مجموعة كلمات عن الموضوع نفسه (semantic field)",
            "إعجاب مفاجئ وشديد (infatuation)"
          ],
          "passage": [
            "يذهب روميو وأصدقاؤه إلى حفلة آل كابوليت وهم يضعون أقنعة.",
            "روميو حزين بسبب فتاة تُسمّى روزالين (Rosaline).",
            "صديقه مركوشيو (Mercutio) يمزح عن الحب والأحلام.",
            "لدى روميو إحساس سيّئ بشأن تلك الليلة.",
            "في الحفلة، يرى روميو جولييت من الجهة الأخرى من القاعة.",
            "ينسى روزالين فوراً.",
            "يقول إن جولييت تعلّم المشاعل كيف تشتعل بنور ساطع.",
            "يتحدّثان، مستعملَين كلمات عن القدّيسين والحجّاج.",
            "يتبادلان قبلة، ثم يعرفان أنهما عدوّان.",
            "في وقت لاحق من تلك الليلة، يختبئ روميو في بستان آل كابوليت.",
            "تقف جولييت عند نافذتها وتقول أفكارها بصوت عالٍ.",
            "تسأل لماذا يجب أن يكون روميو من آل مونتاغيو.",
            "يتعاهدان على الزواج.",
            "الفتاة الهادئة من الفصل 1 قد اختفت."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "postać, która jest przeciwieństwem innej (foil)",
            "mowa wygłaszana samotnie na scenie (soliloquy)",
            "obrazy słowne, które maluje autor (imagery)",
            "grupa słów na ten sam temat (semantic field)",
            "nagłe, intensywne zauroczenie (infatuation)"
          ],
          "passage": [
            "Romeo i jego przyjaciele idą w maskach na bal Kapuletów.",
            "Romeo jest smutny z powodu dziewczyny o imieniu Rozalina.",
            "Jego przyjaciel Merkucjo żartuje z miłości i snów.",
            "Romeo ma złe przeczucie co do tej nocy.",
            "Na balu Romeo widzi Julię po drugiej stronie sali.",
            "Od razu zapomina o Rozalinie.",
            "Mówi, że Julia uczy pochodnie jasno płonąć.",
            "Rozmawiają, używając słów o świętych i pielgrzymach.",
            "Całują się, a potem dowiadują się, że są wrogami.",
            "Później tej nocy Romeo ukrywa się w sadzie Kapuletów.",
            "Julia stoi w oknie i mówi głośno swoje myśli.",
            "Pyta, dlaczego Romeo musi być Montekim.",
            "Obiecują sobie ślub.",
            "Cichej dziewczyny z aktu 1 już nie ma."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma personagem que é o oposto de outra (foil)",
            "um discurso feito a sós no palco (soliloquy, solilóquio)",
            "imagens em palavras que um escritor pinta (imagery)",
            "um grupo de palavras sobre o mesmo assunto (semantic field, campo semântico)",
            "uma paixão súbita e intensa (infatuation, paixonite)"
          ],
          "passage": [
            "Romeo e os amigos vão à festa dos Capulet com máscaras.",
            "Romeo está triste por causa de uma moça chamada Rosaline.",
            "O seu amigo Mercutio faz piadas sobre o amor e os sonhos.",
            "Romeo tem um mau pressentimento sobre aquela noite.",
            "Na festa, Romeo vê Juliet do outro lado da sala.",
            "Ele esquece Rosaline de imediato.",
            "Ele diz que Juliet ensina as tochas a brilhar.",
            "Eles conversam, usando palavras sobre santos e peregrinos.",
            "Beijam-se, e depois descobrem que são inimigos.",
            "Mais tarde nessa noite, Romeo esconde-se no pomar dos Capulet.",
            "Juliet está à janela e diz os seus pensamentos em voz alta.",
            "Ela pergunta por que Romeo tem de ser um Montague.",
            "Eles prometem casar-se.",
            "A moça calma do Ato 1 desapareceu."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "jile lidka ku ah jile kale (foil)",
            "hadal keligiis masraxa laga jeediyo (soliloquy)",
            "sawirro erayo ah oo qoraagu rinjiyeeyo (imagery)",
            "koox erayo ah oo isku mawduuc ku saabsan (semantic field)",
            "jacayl kedis ah oo xoog badan (infatuation)"
          ],
          "passage": [
            "Romeo iyo asxaabtiisu waxay tagaan xaflada Capulets iyagoo wejigooda daboolay.",
            "Romeo wuxuu u murugaysan yahay gabar la yiraahdo Rosaline.",
            "Saaxiibkii Mercutio wuxuu kaftan ka sameeyaa jacaylka iyo riyooyinka.",
            "Romeo dareen xun ayuu ka qabaa habeenkaas.",
            "Xafladda, Romeo wuxuu arkaa Juliet oo qolka dhinaciisa kale taagan.",
            "Isla markiiba Rosaline wuu illoobaa.",
            "Wuxuu yiraahdaa Juliet waxay bartaa torches-ka inay si dhalaalaysa u gubtaan.",
            "Way wada hadlaan, iyagoo isticmaalaya erayo ku saabsan awliyo iyo xajiyo.",
            "Way dhunkadaan, kadibna waxay ogaadaan inay cadow yihiin.",
            "Habeenkaas dambe, Romeo wuxuu ku dhuuntaa beerta Capulets.",
            "Juliet daaqaddeeda ayay istaagtaa, fikradeedana kor ayay u sheegtaa.",
            "Waxay weydiisaa sababta Romeo u noqonayo Montague.",
            "Waxay isku ballamaan inay guursadaan.",
            "Gabadhii aamusnayd ee Act 1 way tagtay."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "персонаж, який є протилежністю іншого (foil)",
            "промова, виголошена наодинці на сцені (soliloquy)",
            "словесні картини, які малює автор (imagery)",
            "група слів про один і той самий предмет (semantic field)",
            "раптове, сильне захоплення (infatuation)"
          ],
          "passage": [
            "Ромео і його друзі йдуть на свято до Капулетті в масках.",
            "Ромео сумує через дівчину на ім’я Розаліна (Rosaline).",
            "Його друг Меркуціо (Mercutio) жартує про кохання і сни.",
            "У Ромео погане передчуття щодо цієї ночі.",
            "На святі Ромео бачить Джульєтту через усю залу.",
            "Він одразу забуває Розаліну.",
            "Він каже, що Джульєтта вчить смолоскипи горіти яскраво.",
            "Вони розмовляють, використовуючи слова про святих і паломників.",
            "Вони цілуються, а потім дізнаються, що вони вороги.",
            "Пізніше тієї ночі Ромео ховається в саду Капулетті.",
            "Джульєтта стоїть біля вікна й промовляє свої думки вголос.",
            "Вона запитує, чому Ромео мусить бути Монтеккі.",
            "Вони обіцяють одружитися.",
            "Тихої дівчини з першої дії більше немає."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "ایسا کردار جو کسی دوسرے کردار کا الٹ ہو (foil)",
            "اسٹیج پر اکیلے کی گئی تقریر (soliloquy)",
            "لفظوں سے بنائی گئی تصویریں جو مصنف کھینچتا ہے (imagery)",
            "ایک ہی موضوع کے لفظوں کا گروہ (semantic field)",
            "اچانک، شدید لگاؤ (infatuation)"
          ],
          "passage": [
            "رومیو اور اس کے دوست نقاب لگا کر کیپیولیٹ کی دعوت میں جاتے ہیں۔",
            "رومیو روزالین نامی ایک لڑکی کی وجہ سے دکھی ہے۔",
            "اس کا دوست مرکیوشیو محبت اور خوابوں کے بارے میں مذاق کرتا ہے۔",
            "رومیو کو اس رات کے بارے میں برا احساس ہوتا ہے۔",
            "دعوت میں رومیو کمرے کے دوسری طرف جولیٹ کو دیکھتا ہے۔",
            "وہ روزالین کو فوراً بھول جاتا ہے۔",
            "وہ کہتا ہے کہ جولیٹ مشعلوں کو روشن جلنا سکھاتی ہے۔",
            "وہ بات کرتے ہیں، اور ولیوں (saints) اور زائرین (pilgrims) کے لفظ استعمال کرتے ہیں۔",
            "وہ ایک دوسرے کو چومتے ہیں، پھر انھیں پتا چلتا ہے کہ وہ دشمن ہیں۔",
            "اسی رات بعد میں رومیو کیپیولیٹ کے باغ میں چھپ جاتا ہے۔",
            "جولیٹ اپنی کھڑکی پر کھڑی ہو کر اپنی سوچیں بلند آواز میں کہتی ہے۔",
            "وہ پوچھتی ہے کہ رومیو مونٹیگیو کیوں ہے۔",
            "وہ شادی کا وعدہ کرتے ہیں۔",
            "Act 1 کی خاموش لڑکی اب جا چکی ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Mercutio the foil, and a dream of death (1.4)",
          paragraphs: [
            "On the way to the party, Romeo is too lovesick to dance. His friend Mercutio has no patience with this and tells him to be rough with love if love is rough with him. Mercutio is a foil to Romeo: a character placed beside the hero to show him more clearly. Where Romeo is dreamy and serious about love, Mercutio is quick, mocking and full of innuendo, remarks with a hidden, often rude, second meaning.",
            "Romeo says he dreamt a dream, and Mercutio answers with a long, dazzling speech about Queen Mab, the fairy who brings dreams, before dismissing dreams as nothing but fantasy. But Romeo's fear does not go away. As they enter, he says that his mind misgives: he senses some consequence hanging in the stars that will begin tonight. This is foreshadowing, and it ties his fate to the stars before he has even seen Juliet."
          ],
          quote: { text: "I fear too early, for my mind misgives / Some consequence yet hanging in the stars", source: "1.4.113–114" },
          tip: "‘Misgives’ means has a bad feeling. Link ‘hanging in the stars’ to the Prologue's ‘star-crossed’."
        },
        {
          heading: "Torches, saints and a shared sonnet (1.5)",
          paragraphs: [
            "Romeo sees Juliet and speaks a soliloquy, a speech alone with his thoughts even in a crowded room. She teaches the torches to burn bright; she is a rich jewel against the cheek of night; she is a snowy dove among crows. The imagery is all light against darkness and rare value, and he asks whether his heart ever loved till now. Rosaline is gone in ten lines. Is this love, or infatuation?",
            "When they speak, their first fourteen lines form a shared sonnet: each takes up the other's rhymes, which suggests two minds already in step. The words belong to one semantic field, religion: shrine, pilgrim, saint, prayer, devotion. Romeo makes his lips two blushing pilgrims; Juliet, witty and quick, keeps him at a distance until she allows the kiss. Then the Nurse tells each of them who the other is, and Juliet's reply is a paradox: her only love has sprung from her only hate."
          ],
          quote: { text: "Did my heart love till now? Forswear it, sight! / For I ne'er saw true beauty till this night.", source: "1.5.59–60" },
          tip: "A rhyming couplet closes the thought like a lid. Romeo has decided in two lines, which is exactly the haste the Friar will warn against."
        },
        {
          heading: "The balcony: Juliet thinks aloud (2.2)",
          paragraphs: [
            "In the orchard, Romeo hears Juliet before she knows he is there. His first words make her the sun rising in the east, light imagery again. Then she speaks, believing herself alone, so what we hear is honest. She asks why Romeo must be Romeo, and tells him to deny his father and refuse his name. She reasons that a name is not a hand or a foot, and that a rose would smell as sweet by any other word. This is a thoughtful, intelligent argument, not a sigh.",
            "When she realises she has been overheard she questions him sharply, and when he swears love she calls it too rash, too unadvised, too sudden. It is Juliet, not Romeo, who steers the scene: she doubts, she tests, and finally she proposes marriage. The demure daughter of Act 1 Scene 3 has become passionate, assertive and courageous. For an Elizabethan audience, a girl of thirteen choosing her own husband, and an enemy at that, was a shocking act of rebellion against her father and her society."
          ],
          quote: { text: "O Romeo, Romeo, wherefore art thou Romeo? / Deny thy father and refuse thy name,", source: "2.2.36–37" },
          tip: "‘Wherefore’ means why, not where. Juliet is asking why he has to be a Montague, not where he is standing."
        },
        {
          heading: "Writing the What, How, Why paragraph",
          paragraphs: [
            "Your assessment asks how Juliet is presented in the Act 2 Scene 2 extract. Use three What, How, Why paragraphs. What: a topic sentence with an adjective, such as passionate, thoughtful, rebellious, romantic or assertive. How: a short quotation embedded in your own sentence, with the method named (interrogative, imperative, metaphor, repetition) and a zoom in on one word. Why: what this shows about Juliet, and what an Elizabethan audience would feel.",
            "At GCSE these three steps have names. AO1 is your point and your use of quotations as evidence; AO2 is analysis of language, form and structure, using the right terms; AO3 is the link to context. You are practising all three now. Weave the context in where it explains a word, and never bolt it on at the end as a separate history lesson."
          ],
          quote: { text: "What's in a name? That which we call a rose / By any other word would smell as sweet.", source: "2.2.46–47" },
          tip: "A short quotation like ‘refuse thy name’ is worth more than a long one, because it lets you zoom in on one word."
        }
      ],
      gate: [
        { kind: "mcq", q: "Why is Mercutio described as a foil to Romeo?", options: ["He is Romeo's enemy", "He contrasts with Romeo, mocking the love Romeo takes seriously", "He looks exactly like Romeo", "He betrays Romeo to the Capulets"], answer: 1, why: "A foil is a contrasting character. Mercutio's jokes about love show up how serious and dreamy Romeo is.",
          feedback: [
            "Mercutio is Romeo's closest friend, not his enemy; he dies defending Romeo's honour. A foil is not a villain but a contrast, and Mercutio's mockery of love is the contrast to Romeo's seriousness.",
            "",
            "A foil is the opposite of a double. The term comes from the thin metal placed behind a jewel to make it shine: the foil is different from the thing it shows off.",
            "Mercutio never betrays anyone. The word foil has nothing to do with foiling a plan; it means a character whose difference makes the hero clearer."
          ] },
        { kind: "gap", q: "Shrine, pilgrim, saint and prayer are all words about religion. A group of words linked by meaning is called a ___ field.", answer: "semantic", options: ["semantic", "lexical", "magnetic"], why: "A semantic field is a set of words that share a subject. Romeo and Juliet's religious words make their love sound holy.",
          feedback: {
            "lexical": "Lexical field is a term some books use for the same idea, but your lesson's term is semantic field, from semantics, the study of meaning. Use the word your teacher uses so your examiner recognises it.",
            "magnetic": "A magnetic field is physics, not English. The word you need comes from semantics, the study of meaning: a semantic field."
          } },
        { kind: "mcq", q: "In Act 2 Scene 2, what does Juliet say would smell as sweet by any other word?", options: ["A lily", "A rose", "A violet", "An apple"], answer: 1, why: "Juliet argues that a rose would smell as sweet whatever we called it, so Romeo would still be Romeo without the name Montague.",
          feedback: [
            "Close family of flowers, wrong one. Juliet's example is a rose. The point is the same: the thing is what matters, not its name.",
            "",
            "Shakespeare's flower is the rose, the flower most linked with love. Remember the pair: rose and name.",
            "An apple is not in the speech. Juliet chooses a rose because its sweetness is in its smell, not its name, just as Romeo's worth is in himself, not in Montague."
          ] }
      ],
      modules: [
        {
          title: "Quotations and methods in the meeting scene",
          task: {
            kind: "match",
            q: "Match each quotation from Act 1 Scene 5 to the method Shakespeare is using.",
            pairs: [
              ["“O, she doth teach the torches to burn bright!”", "Light imagery: Juliet outshines the fire"],
              ["“My lips, two blushing pilgrims, ready stand”", "Religious imagery: a semantic field of pilgrims and saints"],
              ["“Did my heart love till now? Forswear it, sight!”", "A rhetorical question and an exclamation: he commands his own eyes"],
              ["“My only love sprung from my only hate!”", "A paradox: love and hate are born from each other"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read each quotation aloud and find who is speaking.",
                "Underline one key word in each: torches, pilgrims, love till now, love and hate.",
                "Match the key word to the method: fire and light, church words, a question, two opposites."
              ],
              example: {
                q: "Practice: what method is Romeo using when he says Juliet is like a rich jewel in an Ethiope's ear?",
                steps: ["He compares Juliet to a jewel.", "The comparison uses ‘like’.", "So it is a simile, and the jewel is also light against darkness."],
                answer: "A simile, which is also light imagery: a bright jewel against a dark background."
              }
            },
            core: { hint: "Three of the methods are about pictures (light, religion, opposites); one is about sentence type." },
            stretch: { extend: "Religious words were serious to an Elizabethan audience. Write one sentence arguing that the pilgrim imagery makes the love holy, and one arguing that it is dangerously close to blasphemy." }
          },
          why: "Naming the method is the How of your paragraph. Each of these four lines gives you a method you can reuse for any question on Act 1 Scene 5.",
          explain: "Say, in one sentence, why light imagery suits a first meeting at a party held at night."
        },
        {
          title: "How Juliet is presented in the balcony scene",
          task: {
            kind: "written",
            q: "How does Shakespeare present Juliet in the Act 2 Scene 2 extract? Write one What, How, Why paragraph.",
            marks: 8,
            criteria: [
              "What: a topic sentence with an adjective for Juliet (passionate, thoughtful, rebellious, assertive, vulnerable)",
              "How: at least one short quotation from Act 2 Scene 2, embedded in your own sentence",
              "How: you name a method (interrogative, imperative, metaphor, repetition) and zoom in on one word",
              "Why: you link what she says to Elizabethan expectations of daughters and show how she challenges them"
            ],
            model: "Shakespeare presents Juliet as rebellious and courageous in this extract. Alone at her window she commands, “Deny thy father and refuse thy name”, and the two imperatives ‘deny’ and ‘refuse’ ask Romeo to give up the thing that defines a man in Verona, his family. The verb ‘deny’ is especially strong, because to deny a father was to deny God in a patriarchal society. Yet she is asking him to do only what she is prepared to do herself: in the next line she offers to stop being a Capulet. For an Elizabethan audience, a daughter of thirteen choosing an enemy for a husband without her father's consent was a shocking act of defiance, and Shakespeare makes it sound thoughtful rather than reckless."
          },
          levels: {
            support: {
              steps: [
                "What: choose one adjective from the list and write a topic sentence with it.",
                "How: pick a short quotation that proves it, name the method, and zoom in on one word.",
                "Why: say what this shows about Juliet, then explain how an Elizabethan audience, who expected daughters to obey, would react.",
                "Check: have you used the exact words What, How and Why to structure your sentences?"
              ],
              example: {
                q: "Practice question: how does Shakespeare present Romeo at the start of Act 2 Scene 2?",
                steps: [
                  "What: Romeo is romantic and idealistic.",
                  "How: he says “It is the East, and Juliet is the sun”, a metaphor.",
                  "Why: the sun is the source of all light, so he makes her the centre of his world; it continues the light imagery from the party."
                ],
                answer: "Shakespeare presents Romeo as romantic and idealistic. Watching Juliet's window he declares, “It is the East, and Juliet is the sun”. The metaphor makes her the source of all light and warmth, continuing the torch imagery of the party and suggesting that his whole world now turns around her. Elizabethan courtly love expected a man to worship the woman he loved, and Romeo plays the part perfectly."
              }
            },
            core: { hint: "Find the moment Juliet makes a demand or an argument, not just a sigh. That is where her courage and intelligence show." },
            stretch: { extend: "Add a sentence that compares this Juliet with the Juliet of Act 1 Scene 3. Then judge: has she changed, or was the obedient daughter always a performance?" }
          },
          why: "The best answers choose an adjective, prove it with a short quotation, analyse one word, and then explain why an Elizabethan audience would be shocked. The model does all four in one paragraph.",
          explain: "Say which word in your quotation you would analyse first, and what it suggests about Juliet.",
          contexts: [
            { label: "Juliet, 2.2.36–37",
              q: "Juliet, 2.2.36–37: “O Romeo, Romeo, wherefore art thou Romeo? / Deny thy father and refuse thy name,” How does Shakespeare present Juliet in these lines? Write one What, How, Why paragraph.",
              why: "The repeated name and the question ‘wherefore’ show longing, but the imperatives ‘deny’ and ‘refuse’ show a girl prepared to ask an enemy to give up his family. Rebellion in the voice of someone who has just been told to accept Paris." },
            { label: "Juliet, 2.2.46–47",
              q: "Juliet, 2.2.46–47: “What's in a name? That which we call a rose / By any other word would smell as sweet.” How does Shakespeare present Juliet in these lines? Write one What, How, Why paragraph.",
              why: "This is an argument, not a sigh. Juliet reasons that a name is only a label and the thing itself is unchanged, which presents her as thoughtful and intelligent, and quietly dismantles the feud her whole city lives by." },
            { label: "Juliet, 2.2.125–126",
              q: "Juliet, 2.2.125–126: “It is too rash, too unadvised, too sudden, / Too like the lightning, which doth cease to be” How does Shakespeare present Juliet in these lines? Write one What, How, Why paragraph.",
              why: "The repeated ‘too’ piles up her doubts, and the lightning simile warns that a love that flashes may vanish as quickly. Here Juliet is the cautious one, which makes her later decisions look chosen rather than swept along." }
          ]
        },
        {
          title: "Tracking Juliet's feelings",
          task: {
            kind: "order",
            q: "Put Juliet's feelings in Act 2 Scene 2 in the order they appear in the scene.",
            items: [
              "Longing: alone, she wishes Romeo were not a Montague.",
              "Alarm: she realises a stranger has heard her and demands to know who he is.",
              "Doubt: she calls their love too rash, too unadvised, too sudden.",
              "Commitment: she asks when they can marry and promises to send a messenger."
            ]
          },
          levels: {
            support: {
              steps: [
                "Start where the scene starts: Juliet does not know she is overheard.",
                "The shock comes when Romeo answers her.",
                "Doubt comes while they talk; commitment comes last, just before she is called inside."
              ],
              example: {
                q: "Practice: order Romeo's feelings in Act 1 Scene 5: he learns Juliet is a Capulet; he sees her and praises her beauty; he kisses her.",
                steps: ["Seeing comes first.", "The kiss comes during their shared sonnet.", "Learning who she is comes last."],
                answer: "He sees and praises her; he kisses her; he learns she is a Capulet."
              }
            },
            core: { hint: "The scene runs from private thought, to shock, to testing him, to a decision." },
            stretch: { extend: "Which of the four feelings would an Elizabethan audience find most shocking in a daughter of thirteen, and why? Answer in two sentences." }
          },
          why: "Your lesson tracked Juliet's feelings line by line. The arc from longing to alarm to doubt to commitment shows a character who thinks before she decides, which is why her decision carries weight.",
          explain: "Say, in one sentence, why Juliet's doubt has to come before her commitment for the scene to make sense."
        }
      ]
    },

    // ───────────────────────────── CHAPTER 4 ─────────────────────────────
    {
      key: "warnings-and-the-turning-point", n: 4,
      title: "Warnings, haste and the turning point (Act 2, Scenes 3–6 and Act 3, Scene 1)",
      lead: "This chapter shows you the Friar's warnings, the Nurse's jokes, and the hot afternoon when the play turns from comedy to tragedy.",
      covers: [10, 11, 12],
      pretext: {
        words: [
          { word: "foreshadowing", means: "a hint about what will happen later", sentence: "The Friar's talk of poison is foreshadowing." },
          { word: "dramatic irony", means: "when we know something a character does not", sentence: "Dramatic irony: Tybalt does not know Romeo is now his cousin, but we do." },
          { word: "bawdy", means: "rude humour about sex", sentence: "The Nurse's bawdy jokes make the audience laugh." },
          { word: "peripeteia", means: "a sudden turn for the worse", sentence: "Mercutio's death is the peripeteia of the play." },
          { word: "pun", means: "a joke that plays on two meanings of a word", sentence: "Mercutio puns on ‘grave’ as he dies." }
        ],
        passage: [
          "The next morning, Romeo visits Friar Lawrence.",
          "The Friar is picking herbs that can heal or poison.",
          "Romeo asks him to marry him to Juliet that day.",
          "The Friar is shocked, but he agrees.",
          "He hopes the marriage will end the feud.",
          "He warns Romeo that those who run fast will stumble.",
          "Juliet waits for the Nurse to bring Romeo's answer.",
          "The Nurse teases her and takes her time.",
          "That afternoon, the Friar marries them in secret.",
          "Later, in the hot streets, Tybalt looks for Romeo.",
          "Romeo refuses to fight his new cousin.",
          "Mercutio fights instead, and Tybalt kills him.",
          "In his rage, Romeo kills Tybalt.",
          "The Prince banishes Romeo from Verona."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "تلميح إلى ما سيحدث لاحقاً (foreshadowing)",
            "عندما نعرف شيئاً لا تعرفه الشخصية (dramatic irony)",
            "دعابة فظّة عن الجنس (bawdy)",
            "تحوّل مفاجئ نحو الأسوأ (peripeteia)",
            "دعابة تلعب على معنيَين لكلمة واحدة (pun)"
          ],
          "passage": [
            "في الصباح التالي، يزور روميو الراهب لورنس.",
            "الراهب يجمع أعشاباً يمكن أن تشفي أو تسمّم.",
            "يطلب روميو منه أن يزوّجه جولييت في ذلك اليوم.",
            "يُصدَم الراهب، لكنه يوافق.",
            "يأمل أن يُنهي الزواج الخصومة.",
            "يحذّر روميو من أن من يجري بسرعة يتعثّر.",
            "تنتظر جولييت أن تأتي المربّية بجواب روميو.",
            "تمازحها المربّية وتتباطأ.",
            "في ذلك المساء، يزوّجهما الراهب سرّاً.",
            "لاحقاً، في الشوارع الحارّة، يبحث تيبالت عن روميو.",
            "يرفض روميو أن يقاتل ابن عمّه الجديد.",
            "فيقاتل مركوشيو بدلاً منه، ويقتله تيبالت.",
            "في غضبه، يقتل روميو تيبالت.",
            "ينفي الأمير روميو من فيرونا."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "wskazówka, co wydarzy się później (foreshadowing)",
            "kiedy my wiemy coś, czego nie wie postać (dramatic irony)",
            "nieprzyzwoity humor o seksie (bawdy)",
            "nagły zwrot na gorsze (peripeteia)",
            "żart, który gra na dwóch znaczeniach słowa (pun)"
          ],
          "passage": [
            "Następnego ranka Romeo odwiedza brata Laurentego.",
            "Brat Laurenty zbiera zioła, które mogą leczyć albo truć.",
            "Romeo prosi go, żeby tego samego dnia dał mu ślub z Julią.",
            "Brat Laurenty jest wstrząśnięty, ale się zgadza.",
            "Ma nadzieję, że małżeństwo zakończy waśń.",
            "Ostrzega Romea, że ci, którzy biegną szybko, potykają się.",
            "Julia czeka, aż Niania przyniesie odpowiedź Romea.",
            "Niania dokucza jej i nie spieszy się.",
            "Tego popołudnia brat Laurenty daje im ślub w tajemnicy.",
            "Później, na rozgrzanych ulicach, Tybalt szuka Romea.",
            "Romeo odmawia walki ze swoim nowym kuzynem.",
            "Zamiast niego walczy Merkucjo, a Tybalt go zabija.",
            "W gniewie Romeo zabija Tybalta.",
            "Książę wygania Romea z Werony."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "uma pista sobre o que vai acontecer mais tarde (foreshadowing, prenúncio)",
            "quando nós sabemos algo que uma personagem não sabe (dramatic irony, ironia dramática)",
            "humor grosseiro sobre sexo (bawdy)",
            "uma viragem súbita para pior (peripeteia, peripécia)",
            "uma piada que joga com dois sentidos de uma palavra (pun, trocadilho)"
          ],
          "passage": [
            "Na manhã seguinte, Romeo visita Friar Lawrence.",
            "O Frei está a apanhar/está colhendo ervas que podem curar ou envenenar.",
            "Romeo pede-lhe para o casar com Juliet nesse mesmo dia.",
            "O Frei fica chocado, mas aceita.",
            "Ele espera que o casamento acabe com a rixa.",
            "Ele avisa Romeo de que quem corre depressa tropeça.",
            "Juliet espera que a Ama lhe traga a resposta de Romeo.",
            "A Ama provoca-a e demora o seu tempo.",
            "Nessa tarde, o Frei casa-os em segredo.",
            "Mais tarde, nas ruas quentes, Tybalt procura Romeo.",
            "Romeo recusa-se a lutar com o seu novo primo.",
            "Mercutio luta em vez dele, e Tybalt mata-o.",
            "Na sua raiva, Romeo mata Tybalt.",
            "O Príncipe expulsa Romeo de Verona."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "tilmaan ku saabsan waxa dambe dhici doona (foreshadowing)",
            "marka aynu naqaanno wax jile aan garanayn (dramatic irony)",
            "kaftan xun oo ku saabsan galmo (bawdy)",
            "isbeddel kedis ah oo xumaan u leexday (peripeteia)",
            "kaftan ku ciyaaraya laba macne oo eray (pun)"
          ],
          "passage": [
            "Subaxdii xigtay, Romeo wuxuu booqdaa Friar Lawrence.",
            "Friar-ku wuxuu guranayaa geedo dawo ah oo bogsiin kara ama sun noqon kara.",
            "Romeo wuxuu weydiistaa inuu isaga iyo Juliet maalintaas isu guuriyo.",
            "Friar-ku wuu naxaa, laakiin wuu ogolaadaa.",
            "Wuxuu rajaynayaa in guurku colaadda (feud) soo afjaro.",
            "Wuxuu uga digaa Romeo in kuwa si degdeg ah u ordaa ay turunturoodaan.",
            "Juliet waxay sugtaa in Nurse-ku jawaabta Romeo u keento.",
            "Nurse-ku way ku ciyaartaa, waqtina way qaadataa.",
            "Galabtaas, Friar-ku si qarsoodi ah ayuu isu guuriyaa.",
            "Kadib, waddooyinka kulul, Tybalt wuxuu raadiyaa Romeo.",
            "Romeo wuu diidaa inuu la dagaallamo ina-adeerkii cusub.",
            "Mercutio ayaa beddelkiisa la dagaallamaa, Tybalt-na wuu dilaa.",
            "Cadhadiisa dartii, Romeo wuxuu dilaa Tybalt.",
            "Amiirku Romeo wuxuu ka masaafuriyaa Verona."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "натяк на те, що станеться пізніше (foreshadowing)",
            "коли ми знаємо щось, чого не знає персонаж (dramatic irony)",
            "грубий гумор про секс (bawdy)",
            "раптовий поворот на гірше (peripeteia)",
            "жарт, який грає на двох значеннях слова (pun)"
          ],
          "passage": [
            "Наступного ранку Ромео відвідує брата Лоренцо.",
            "Брат Лоренцо збирає трави, які можуть лікувати або отруювати.",
            "Ромео просить його одружити його з Джульєттою того ж дня.",
            "Брат Лоренцо вражений, але погоджується.",
            "Він сподівається, що шлюб покінчить із ворожнечею.",
            "Він попереджає Ромео, що ті, хто біжать швидко, спіткнуться.",
            "Джульєтта чекає, коли Няня принесе відповідь Ромео.",
            "Няня дражнить її й не поспішає.",
            "Того ж дня по обіді брат Лоренцо таємно одружує їх.",
            "Пізніше, на спекотних вулицях, Тібальт шукає Ромео.",
            "Ромео відмовляється битися зі своїм новим родичем.",
            "Замість нього б’ється Меркуціо, і Тібальт вбиває його.",
            "У гніві Ромео вбиває Тібальта.",
            "Князь виганяє Ромео з Верони."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "اس بات کا اشارہ جو بعد میں ہونے والی ہے (foreshadowing)",
            "جب ہم کوئی ایسی بات جانتے ہیں جو کردار نہیں جانتا (dramatic irony)",
            "جنس کے بارے میں بدتمیز مزاح (bawdy)",
            "حالات کا اچانک بُرا موڑ (peripeteia)",
            "ایسا مذاق جو کسی لفظ کے دو معنوں پر کھیلتا ہے (pun)"
          ],
          "passage": [
            "اگلی صبح رومیو فرائر لارنس کے پاس جاتا ہے۔",
            "فرائر ایسی جڑی بوٹیاں چن رہا ہے جو شفا دے سکتی ہیں یا زہر بن سکتی ہیں۔",
            "رومیو اسے کہتا ہے کہ اسی دن اس کی جولیٹ سے شادی کرا دے۔",
            "فرائر حیران ہوتا ہے، مگر مان جاتا ہے۔",
            "اسے امید ہے کہ یہ شادی دشمنی (feud) ختم کر دے گی۔",
            "وہ رومیو کو خبردار کرتا ہے کہ جو تیز دوڑتے ہیں وہ لڑکھڑا جاتے ہیں۔",
            "جولیٹ انتظار کرتی ہے کہ دایہ رومیو کا جواب لائے۔",
            "دایہ اسے چھیڑتی ہے اور دیر لگاتی ہے۔",
            "اسی دوپہر فرائر خفیہ طور پر ان کی شادی کرا دیتا ہے۔",
            "بعد میں، گرم گلیوں میں، ٹبالٹ رومیو کو ڈھونڈتا ہے۔",
            "رومیو اپنے نئے کزن سے لڑنے سے انکار کرتا ہے۔",
            "اس کی جگہ مرکیوشیو لڑتا ہے، اور ٹبالٹ اسے مار دیتا ہے۔",
            "غصے میں رومیو ٹبالٹ کو مار دیتا ہے۔",
            "شہزادہ رومیو کو ویرونا سے نکال دیتا ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Poison and medicine: the Friar's warnings (2.3)",
          paragraphs: [
            "Foreshadowing is when a writer hints at events still to come. The Prologue is the biggest hint of all, but Act 2 Scene 3 is full of smaller ones. We meet Friar Lawrence gathering plants and musing that one weak flower holds both poison and medicine. He knows how plants work, and that knowledge will give him the sleeping potion of Act 4. He also says that virtue itself turns vice when misapplied: good intentions can do harm.",
            "When Romeo bounces in, in love with a new girl a day after weeping over Rosaline, the Friar teases him: young men's love lies in their eyes, not their hearts. Then he agrees to the marriage, hoping to turn the two households' hate to love, and sends Romeo off with the warning that they stumble that run fast. Every one of these lines points forward. The audience, who already know the ending from the Prologue, hear the warnings and watch nobody take them. That is dramatic irony: we know what the characters do not."
          ],
          quote: { text: "Within the infant rind of this weak flower / Poison hath residence and medicine power.", source: "2.3.23–24" },
          tip: "‘Residence’ means a home. Poison lives inside the healing plant. Hold this image until Act 5, when Romeo buys poison and Juliet drinks a medicine that looks like death."
        },
        {
          heading: "The Nurse, the Friar and the clock (2.4–2.6)",
          paragraphs: [
            "The Nurse brings comedy. Her humour is bawdy, full of innuendo and double entendre, phrases with a second, often sexual, meaning, which Shakespeare usually gives to lower-class characters. In Act 2 Scene 5 Juliet waits for news, and the Nurse makes her wait longer, complaining of her aching bones before finally telling her to hurry to the Friar's cell, where a husband is waiting. The Nurse is loving and motherly, but she is also complicit: she helps the secret marriage along.",
            "Act 2 Scene 6 is the wedding, and even here the Friar is uneasy. He warns that violent delights have violent ends, and that love should be moderate because too swift arrives as tardy as too slow. Notice how fast everything is moving: the lovers met on Sunday night and marry on Monday afternoon. The whole play runs in less than a week. Shakespeare compresses time so that the lovers' passion and the city's violence feel breathless, and so that nobody has time to stop and think."
          ],
          quote: { text: "These violent delights have violent ends / And in their triumph die, like fire and powder, / Which, as they kiss, consume.", source: "2.6.9–11" },
          tip: "Fire and gunpowder destroy each other the moment they meet, and ‘kiss’ turns the explosion into an image of the lovers."
        },
        {
          heading: "The hot afternoon: Mercutio and the peripeteia (3.1)",
          paragraphs: [
            "Peripeteia is a sudden reversal of fortune. Act 3 Scene 1 is the play's. Benvolio wants to go indoors because the day is hot and the Capulets are abroad, but Mercutio, mischievous and spoiling for fun, stays. Tybalt arrives looking for Romeo, and Romeo, who has just married Tybalt's cousin, answers insults with gentleness and refuses to fight. Only the audience knows why. Tybalt sees cowardice; Mercutio sees a calm, dishonourable, vile submission.",
            "Mercutio draws, and under Romeo's arm Tybalt stabs him. Even dying he puns: ask for him tomorrow and you shall find him a grave man, where grave means both serious and buried. Then he curses both houses with a plague, and in a city that had lived through plague the curse would chill. Romeo blames his own gentleness, calls on fire-eyed fury, and kills Tybalt. His cry that he is Fortune's fool raises the question the rest of the play will ask: was this fate, or his choice?"
          ],
          quote: { text: "Ask for me tomorrow, and you shall find me a grave man.", source: "3.1.100–101" },
          tip: "Mercutio jokes until he dies, which is why the comedy stops with him. After this scene nobody in the play laughs."
        }
      ],
      gate: [
        { kind: "mcq", q: "Which of these is an example of foreshadowing in Act 2 Scene 3?", options: ["Romeo tells the Friar he loves Juliet", "The Friar says that poison and medicine live in the same flower", "The Friar agrees to perform the wedding", "Romeo asks what time it is"], answer: 1, why: "The flower that is both poison and medicine points forward to the sleeping potion and to Romeo's poison in Act 5.",
          feedback: [
            "That is plot, not a hint. Foreshadowing is when a detail points to something that has not happened yet. Romeo's confession tells us about now; the Friar's flower speech tells us about Act 5.",
            "",
            "Agreeing to the wedding sets the plot in motion, but it is not a hint of a later event. The hint is in the Friar's words about plants that heal and kill, which the potion and the poison will fulfil.",
            "Romeo does not ask the time here, and even if he did it would not point forward. Look for the detail that quietly describes the ending: poison and medicine in one flower."
          ] },
        { kind: "gap", q: "The audience knows that Romeo has just married Juliet, but Tybalt does not. This is called ___ irony.", answer: "dramatic", options: ["dramatic", "verbal", "situational"], why: "Dramatic irony is when the audience knows something a character on stage does not. Here it makes Romeo's gentleness look like cowardice to Tybalt.",
          feedback: {
            "verbal": "Verbal irony is saying one thing and meaning another, like sarcasm. Here nobody is being sarcastic; the gap is between what we know and what Tybalt knows, which is dramatic irony.",
            "situational": "Situational irony is when the opposite of what is expected happens. The term for the audience knowing more than a character is dramatic irony, and that is what makes this scene so tense."
          } },
        { kind: "mcq", q: "Who kills Mercutio?", options: ["Romeo", "Benvolio", "Tybalt", "Paris"], answer: 2, why: "Tybalt stabs Mercutio under Romeo's arm as Romeo tries to part them. Romeo then kills Tybalt in revenge.",
          feedback: [
            "Romeo kills Tybalt, not Mercutio. Mercutio is his best friend, and it is Mercutio's death that drives Romeo to fight. The killer is Tybalt.",
            "Benvolio is the peacemaker of the play; he never kills anyone. In this scene he tries to get Mercutio indoors before the Capulets arrive. Tybalt is the killer.",
            "",
            "Paris does not appear in Act 3 Scene 1 and dies himself in Act 5. Mercutio is killed by Tybalt, under Romeo's arm."
          ] }
      ],
      modules: [
        {
          title: "What the Friar's lines foreshadow",
          task: {
            kind: "match",
            q: "Match each of Friar Lawrence's lines from Act 2 Scene 3 to what it foreshadows.",
            pairs: [
              ["“Poison hath residence and medicine power.”", "The sleeping potion that looks like death, and the poison Romeo buys"],
              ["“Virtue itself turns vice, being misapplied,”", "The Friar's good intentions leading to disaster"],
              ["“Young men's love, then, lies / Not truly in their hearts but in their eyes.”", "Romeo's impulsiveness will be his downfall"],
              ["“Wisely and slow. They stumble that run fast.”", "Rushing into marriage will end badly"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Read each line and put it into your own words first.",
                "Ask: what later event does this sound like?",
                "Poison points to Act 5; ‘misapplied’ virtue points to the plan; eyes points to Romeo's haste; stumbling points to the wedding."
              ],
              example: {
                q: "Practice: in Act 1 Scene 4 Romeo says his mind misgives some consequence hanging in the stars. What does this foreshadow?",
                steps: ["He has a bad feeling about the party.", "The stars link back to ‘star-crossed’ in the Prologue.", "So it foreshadows that meeting Juliet tonight will lead to his death."],
                answer: "It foreshadows that the party, where he meets Juliet, will set his fate in motion."
              }
            },
            core: { hint: "Two lines are about objects (plants, eyes) and two are about behaviour (misusing good, running fast)." },
            stretch: { extend: "The Friar sees the danger clearly and still performs the wedding. In two sentences, argue whether that makes him wise, weak or complicit." }
          },
          why: "Your lesson's quote explosion found these four lines. Each is a hint the audience hears and the characters ignore, which is how Shakespeare builds dramatic irony across the play.",
          explain: "Say, in one sentence, why foreshadowing works better in a play whose ending the audience already knows."
        },
        {
          title: "Dramatic irony in the fight scene",
          task: {
            kind: "mcq",
            q: "Romeo tells Tybalt that the reason he has to love him excuses the rage a greeting like Tybalt's deserves. Why is this moment dramatic irony?",
            options: [
              "Because Romeo is lying about loving Tybalt",
              "Because the audience knows Romeo has just married Tybalt's cousin, but Tybalt and Mercutio do not",
              "Because Tybalt secretly knows about the wedding",
              "Because Mercutio has already told Tybalt the truth"
            ],
            answer: 1,
            feedback: [
              "Romeo means it: Tybalt is now his wife's cousin, so he has a real reason to love him. Dramatic irony is not a character lying; it is the audience knowing something the characters on stage do not.",
              "",
              "Tybalt knows nothing of the wedding, which is exactly why he reads Romeo's gentleness as mockery or cowardice. If he knew, there would be no irony and perhaps no fight.",
              "Mercutio does not know about the wedding either; Romeo has told only the Friar and the Nurse. That is why Mercutio is disgusted by what he sees as vile submission."
            ]
          },
          levels: {
            support: {
              steps: [
                "Remember: dramatic irony is when the audience knows something a character does not.",
                "Ask: what did the audience watch happen in Act 2 Scene 6?",
                "Ask: does Tybalt know any of that? Does Mercutio?"
              ],
              example: {
                q: "Practice: in Act 1 Scene 5 Tybalt is furious that a Montague is at the party, while Capulet calls Romeo a well-governed youth. Why is that ironic?",
                steps: ["The audience has just heard Romeo fall in love with Capulet's daughter.", "Capulet does not know.", "So his praise is dramatic irony."],
                answer: "The audience knows Romeo is falling in love with Juliet, but Capulet, who defends him, does not."
              }
            },
            core: { hint: "Who knows about the wedding at this point: the audience, Tybalt, Mercutio, or all three?" },
            stretch: { extend: "Explain how the code of hegemonic masculinity from Act 1 Scene 1 turns Romeo's secret into a fatal problem in this scene." }
          },
          why: "Romeo is being kind for a reason only we understand. Tybalt hears mockery, Mercutio sees cowardice, and Mercutio draws his sword to defend an honour Romeo has not lost. The gap between what we know and what they know kills him.",
          explain: "Say, in one sentence, what the audience knows at this moment that Mercutio does not."
        },
        {
          title: "How Shakespeare presents Mercutio",
          task: {
            kind: "written",
            q: "How does Shakespeare present Mercutio in Act 3 Scene 1? Write one What, How, Why paragraph.",
            marks: 8,
            criteria: [
              "What: a topic sentence with an adjective for Mercutio (comedic, mischievous, loyal, frustrated, angry, arrogant)",
              "How: at least one short quotation from Act 3 Scene 1, embedded in your own sentence",
              "How: you name a method (pun, insult, curse, repetition) and zoom in on one word",
              "Why: you link him to the code of masculinity in Verona, or to the audience's experience of plague"
            ],
            model: "Shakespeare presents Mercutio as comedic even in death. Stabbed under Romeo's arm, he tells his friends, “Ask for me tomorrow, and you shall find me a grave man.” The pun on ‘grave’, meaning both serious and buried, lets him joke about his own corpse, and the pun is also a method of hiding feeling, which the code of masculinity in Verona demanded. Yet the humour turns bitter a moment later when he curses both houses with a plague, a word that would have frightened an audience whose theatres were closed by plague most summers. By making the joker die, Shakespeare ends the comedy of the first half: after Mercutio, nobody in the play laughs again."
          },
          levels: {
            support: {
              steps: [
                "What: choose one adjective from the list and write a topic sentence with it.",
                "How: pick a short quotation that proves it, name the method (a pun, an insult, a curse), and zoom in on one word.",
                "Why: link it to Verona's code of masculinity, or to what plague meant to the first audience.",
                "Check: does your paragraph end by linking back to the question?"
              ],
              example: {
                q: "Practice question: how does Shakespeare present Benvolio at the start of Act 3 Scene 1?",
                steps: [
                  "What: Benvolio is cautious and peace-loving.",
                  "How: he wants to retire because the day is hot and the Capulets are about.",
                  "Why: the heat suggests tempers ready to boil, and Benvolio is the one man who reads the danger; his name means good will."
                ],
                answer: "Shakespeare presents Benvolio as cautious and peace-loving. He begs Mercutio to go indoors because the day is hot and the Capulets are abroad, linking the weather to tempers that are about to boil over. His name means good will, and he is the one man in the scene who tries to avoid a fight, which makes the violence that follows feel even more avoidable."
              }
            },
            core: { hint: "Pick the adjective first, then the quotation that proves it. The pun on ‘grave’ supports comedic; the plague curse supports angry." },
            stretch: { extend: "Mercutio curses both houses, not just the Capulets. Add a sentence that explains who he blames, and whether the audience is meant to agree with him." }
          },
          why: "Top answers choose an adjective, prove it with a short quotation, analyse one word, and link it to context. The pun on ‘grave’ is the clearest example of comedy and courage working together.",
          explain: "Say which word in your quotation you would analyse first, and what it suggests about Mercutio."
        }
      ]
    },

    // ───────────────────────────── CHAPTER 5 ─────────────────────────────
    {
      key: "banishment-and-the-plan", n: 5,
      title: "Banishment, a father's fury and a desperate plan (Act 3, Scenes 2–5 and Act 4)",
      lead: "This chapter shows you Juliet torn in two, Lord Capulet turning on his daughter, and the Friar's plan that looks clever and goes wrong.",
      covers: [13, 14, 15, 16],
      pretext: {
        words: [
          { word: "oxymoron", means: "two opposite words put together", sentence: "‘Beautiful tyrant’ is an oxymoron." },
          { word: "turmoil", means: "confusion and great worry", sentence: "Juliet is in turmoil when she hears Tybalt is dead." },
          { word: "oppressive", means: "cruel and controlling", sentence: "Lord Capulet becomes oppressive when Juliet says no." },
          { word: "bigamy", means: "marrying someone while already married", sentence: "Marrying Paris would be bigamy, because Juliet already has a husband." },
          { word: "lament", means: "to cry out in grief", sentence: "The Nurse laments when she finds Juliet's body." },
          { word: "despair", means: "the complete loss of hope", sentence: "Juliet turns to the Friar in despair." }
        ],
        passage: [
          "Juliet waits for her wedding night, not knowing about the fight.",
          "The Nurse brings terrible news: Tybalt is dead and Romeo is banished.",
          "Juliet does not know whether to love Romeo or hate him.",
          "Romeo hides with the Friar and weeps.",
          "He says banishment is worse than death.",
          "The Friar tells him to visit Juliet, then flee to Mantua.",
          "That night, Lord Capulet promises Juliet to Paris on Thursday.",
          "Juliet refuses, and her father explodes with rage.",
          "He calls her names and threatens to throw her out.",
          "Her mother and even the Nurse will not help her.",
          "Juliet runs to the Friar, who gives her a potion.",
          "It will make her look dead for forty-two hours.",
          "The Friar will write to Romeo to explain the plan.",
          "On the wedding morning, the Nurse finds Juliet cold and still."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "كلمتان متضادّتان توضعان معاً (oxymoron)",
            "اضطراب وقلق شديد (turmoil)",
            "قاسٍ ومتسلّط (oppressive)",
            "الزواج بشخص وأنت متزوّج أصلاً (bigamy)",
            "أن تصرخ من الحزن (lament)",
            "فقدان الأمل تماماً (despair)"
          ],
          "passage": [
            "تنتظر جولييت ليلة زفافها، وهي لا تعرف شيئاً عن الشجار.",
            "تأتي المربّية بخبر فظيع: تيبالت مات وروميو نُفي.",
            "لا تعرف جولييت هل تحبّ روميو أم تكرهه.",
            "يختبئ روميو عند الراهب ويبكي.",
            "يقول إن النفي أسوأ من الموت.",
            "يقول له الراهب أن يزور جولييت، ثم يهرب إلى مانتوا (Mantua).",
            "في تلك الليلة، يعد اللورد كابوليت بتزويج جولييت لباريس يوم الخميس.",
            "ترفض جولييت، فينفجر والدها غضباً.",
            "يشتمها ويهدّد بطردها من البيت.",
            "أمّها، وحتى المربّية، لا تساعدانها.",
            "تركض جولييت إلى الراهب، فيعطيها شراباً.",
            "سيجعلها تبدو ميتة اثنتَين وأربعين ساعة.",
            "سيكتب الراهب إلى روميو ليشرح له الخطة.",
            "في صباح الزفاف، تجد المربّية جولييت باردة بلا حركة."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "dwa przeciwne słowa zestawione razem (oxymoron)",
            "zamęt i wielki niepokój (turmoil)",
            "okrutny i kontrolujący (oppressive)",
            "ślub z kimś, kiedy już jest się w związku małżeńskim (bigamy)",
            "krzyczeć z żalu (lament)",
            "całkowita utrata nadziei (despair)"
          ],
          "passage": [
            "Julia czeka na noc poślubną, nie wiedząc o walce.",
            "Niania przynosi straszne wieści: Tybalt nie żyje, a Romeo jest wygnany.",
            "Julia nie wie, czy kochać Romea, czy go nienawidzić.",
            "Romeo ukrywa się u brata Laurentego i płacze.",
            "Mówi, że wygnanie jest gorsze niż śmierć.",
            "Brat Laurenty każe mu odwiedzić Julię, a potem uciec do Mantui.",
            "Tej nocy Pan Kapulet obiecuje Julię Parysowi na czwartek.",
            "Julia odmawia, a jej ojciec wybucha gniewem.",
            "Obrzuca ją wyzwiskami i grozi, że wyrzuci ją z domu.",
            "Jej matka, a nawet Niania, nie chcą jej pomóc.",
            "Julia biegnie do brata Laurentego, który daje jej napój.",
            "Sprawi on, że będzie wyglądać jak martwa przez czterdzieści dwie godziny.",
            "Brat Laurenty napisze do Romea, żeby wyjaśnić plan.",
            "W poranek ślubu Niania znajduje Julię zimną i nieruchomą."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "duas palavras opostas juntas (oxymoron, oxímoro)",
            "confusão e grande preocupação (turmoil, tumulto)",
            "cruel e controlador (oppressive, opressivo)",
            "casar com alguém estando já casado (bigamy, bigamia)",
            "gritar de dor e tristeza (lament, lamentar)",
            "a perda total da esperança (despair, desespero)"
          ],
          "passage": [
            "Juliet espera pela sua noite de casamento, sem saber da luta.",
            "A Ama traz notícias terríveis: Tybalt está morto e Romeo foi expulso.",
            "Juliet não sabe se deve amar Romeo ou odiá-lo.",
            "Romeo esconde-se com o Frei e chora.",
            "Ele diz que o exílio é pior do que a morte.",
            "O Frei diz-lhe para visitar Juliet e depois fugir para Mântua.",
            "Nessa noite, Lord Capulet promete Juliet a Paris para quinta-feira.",
            "Juliet recusa, e o pai explode de raiva.",
            "Ele insulta-a e ameaça pô-la fora de casa.",
            "A mãe e até a Ama não a ajudam.",
            "Juliet corre para o Frei, que lhe dá uma poção.",
            "A poção vai fazê-la parecer morta durante quarenta e duas horas.",
            "O Frei vai escrever a Romeo para explicar o plano.",
            "Na manhã do casamento, a Ama encontra Juliet fria e imóvel."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "laba eray oo lid isku ah oo la isku daray (oxymoron)",
            "wareer iyo walwal weyn (turmoil)",
            "naxariis daran oo xakamayn badan (oppressive)",
            "qof guursasho adigoo horey u guursaday (bigamy)",
            "murugo dartii kor u qaylin (lament)",
            "rajo-beel dhammaystiran (despair)"
          ],
          "passage": [
            "Juliet waxay sugtaa habeenka arooskeeda, iyadoon dagaalka waxba ka ogayn.",
            "Nurse-ku war xun ayay keentaa: Tybalt wuu dhintay, Romeo-na waa la masaafuriyay.",
            "Juliet ma garanayso inay Romeo jeclaato mise ay neceb tahay.",
            "Romeo wuxuu la dhuuntaa Friar-ka, wuuna ooyaa.",
            "Wuxuu yiraahdaa masaafurintu waxay ka xun tahay dhimasho.",
            "Friar-ku wuxuu u sheegaa inuu Juliet booqdo, kadibna u cararo Mantua.",
            "Habeenkaas, Lord Capulet wuxuu Juliet u ballan qaadaa Paris maalinta Khamiista.",
            "Juliet way diiddaa, aabbaheedna cadho ayuu la qarxaa.",
            "Magacyo xun ayuu ugu yeeraa, wuxuuna ugu hanjabaa inuu guriga ka saaro.",
            "Hooyadeed iyo xitaa Nurse-ku ma caawiyaan.",
            "Juliet waxay u ordaa Friar-ka, oo dawo (potion) siiya.",
            "Waxay ka dhigi doontaa inay u muuqato mid dhimatay laba iyo afartan saacadood.",
            "Friar-ku wuxuu u qori doonaa Romeo si uu qorshaha u sharraxo.",
            "Subaxdii arooska, Nurse-ku waxay heshaa Juliet oo qabow oo aan dhaqaaqayn."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "два протилежні слова, поставлені разом (oxymoron)",
            "сум’яття і велика тривога (turmoil)",
            "жорстокий і такий, що все контролює (oppressive)",
            "одруження з кимось, коли вже перебуваєш у шлюбі (bigamy)",
            "голосно плакати від горя (lament)",
            "повна втрата надії (despair)"
          ],
          "passage": [
            "Джульєтта чекає своєї шлюбної ночі, не знаючи про бійку.",
            "Няня приносить жахливі новини: Тібальт мертвий, а Ромео вигнано.",
            "Джульєтта не знає, любити їй Ромео чи ненавидіти.",
            "Ромео ховається у брата Лоренцо і плаче.",
            "Він каже, що вигнання гірше за смерть.",
            "Брат Лоренцо каже йому відвідати Джульєтту, а потім тікати до Мантуї.",
            "Тієї ночі лорд Капулетті обіцяє Джульєтту Парісу на четвер.",
            "Джульєтта відмовляється, і її батько вибухає гнівом.",
            "Він обзиває її й погрожує вигнати з дому.",
            "Її мати й навіть Няня не хочуть їй допомогти.",
            "Джульєтта біжить до брата Лоренцо, який дає їй зілля.",
            "Від нього вона виглядатиме мертвою сорок дві години.",
            "Брат Лоренцо напише Ромео, щоб пояснити план.",
            "У ранок весілля Няня знаходить Джульєтту холодною і нерухомою."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "دو الٹے لفظ ایک ساتھ رکھنا (oxymoron)",
            "الجھن اور بڑی پریشانی (turmoil)",
            "ظالم اور قابو میں رکھنے والا (oppressive)",
            "پہلے سے شادی شدہ ہوتے ہوئے کسی سے شادی کرنا (bigamy)",
            "غم میں چیخ کر رونا (lament)",
            "امید کا مکمل خاتمہ (despair)"
          ],
          "passage": [
            "جولیٹ اپنی شادی کی رات کا انتظار کرتی ہے، اسے لڑائی کا پتا نہیں۔",
            "دایہ بھیانک خبر لاتی ہے: ٹبالٹ مر گیا ہے اور رومیو کو شہر سے نکال دیا گیا ہے۔",
            "جولیٹ کو سمجھ نہیں آتی کہ رومیو سے محبت کرے یا نفرت۔",
            "رومیو فرائر کے پاس چھپا ہوا روتا ہے۔",
            "وہ کہتا ہے کہ شہر سے نکالا جانا موت سے بدتر ہے۔",
            "فرائر اسے کہتا ہے کہ جولیٹ سے ملے، پھر مانٹوا بھاگ جائے۔",
            "اسی رات لارڈ کیپیولیٹ جولیٹ کی شادی جمعرات کو پیرس سے کرانے کا وعدہ کر دیتا ہے۔",
            "جولیٹ انکار کرتی ہے، اور اس کا باپ غصے سے پھٹ پڑتا ہے۔",
            "وہ اسے برے نام دیتا ہے اور گھر سے نکالنے کی دھمکی دیتا ہے۔",
            "اس کی ماں اور دایہ بھی اس کی مدد نہیں کرتیں۔",
            "جولیٹ دوڑ کر فرائر کے پاس جاتی ہے، جو اسے ایک دوا دیتا ہے۔",
            "اس سے وہ بیالیس گھنٹے تک مُردہ دکھائی دے گی۔",
            "فرائر رومیو کو خط لکھ کر منصوبہ سمجھائے گا۔",
            "شادی کی صبح دایہ جولیٹ کو ٹھنڈا اور بے حرکت پاتی ہے۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Torn in two: oxymorons and banishment (3.2–3.3)",
          paragraphs: [
            "Juliet opens Act 3 Scene 2 longing for night and her new husband. Then the Nurse brings the news in such a muddle that Juliet first thinks Romeo is dead. When she learns the truth, that Romeo killed Tybalt, her feelings collide. Shakespeare gives her a string of oxymorons, pairs of opposite words forced together: Romeo is a beautiful tyrant, a fiend angelical, a dove-feathered raven. The clash of words is the clash inside her. Within moments she chooses Romeo, and she says the single word banished is worse than ten thousand Tybalts slain.",
            "In the Friar's cell, Romeo hears his sentence and calls banishment a kinder word for death, because there is no world outside Verona's walls but purgatory, torture, hell itself. Purgatory, in Catholic belief, is a place of waiting and punishment between earth and heaven, and Verona is a Catholic city. The Friar, pessimistic about Romeo's wild grief, scolds him for behaving like a woman and sends him to Juliet for the night, then on to Mantua until the marriage can be made public. Romeo's woeful, melodramatic reaction is the uncontrolled passion that will prove to be his flaw."
          ],
          quote: { text: "Beautiful tyrant, fiend angelical! / Dove-feathered raven, wolvish-ravening lamb!", source: "3.2.81–82" },
          tip: "Each oxymoron puts the Romeo she loves next to the Romeo who killed her cousin. Explode one: which half wins by the end of the speech?"
        },
        {
          heading: "A father transformed (3.4–3.5)",
          paragraphs: [
            "In Act 3 Scene 4 Lord Capulet decides, without asking her, that Juliet will marry Paris on Thursday. He is sure she will be ruled in all respects by him. The audience has just watched her marry Romeo, so every confident word is dramatic irony. At dawn in Act 3 Scene 5 the lovers part, and Juliet has an ill-divining soul: looking down at Romeo, she seems to see him dead at the bottom of a tomb. This is foreshadowing; it is also the last time they see each other alive.",
            "Then her mother brings the news, and Juliet refuses. The loving father of Act 1 Scene 2 is gone. Capulet asks whether she is not proud and does not give them thanks, calls her baggage and a disobedient wretch, says his fingers itch to strike her, and threatens to drag her to church on a hurdle or let her hang, beg, starve, die in the streets. To an Elizabethan audience a father's authority came from God, so his fury would seem harsh but not unthinkable. Lady Capulet refuses to help, and the Nurse advises her to marry Paris. Juliet is alone."
          ],
          quote: { text: "An you be mine, I'll give you to my friend. / An you be not, hang, beg, starve, die in the streets,", source: "3.5.203–204" },
          tip: "Count the verbs: hang, beg, starve, die. The list gets worse with each word, and ‘give’ shows he thinks of her as property."
        },
        {
          heading: "The Friar's plan, and a house in mourning (4.1–4.5)",
          paragraphs: [
            "Juliet runs to Friar Lawrence in despair. Marrying Paris would be bigamy, marrying one person while already married to another, which was a sin as well as a crime. She says she will stab herself rather than do it. The Friar, trusting his knowledge of plants, offers a plan: go home, be merry, consent to marry Paris, then, the night before the wedding, drink a potion that will make her seem dead for two and forty hours. She will be laid in the Capulet vault; he will send a letter to Romeo; both men will be there when she wakes, and Romeo will take her to Mantua.",
            "In Act 4 Scene 2 Juliet plays her part so well that her father brings the wedding forward a day, which is dramatic irony again: the audience knows she is married and knows about the potion. On the wedding morning the Nurse finds her cold. Each character laments in turn: the Nurse's cries of woe, Capulet's image of death lying on his daughter like frost on a flower, Paris's grief, Lady Capulet's despair. Then Shakespeare turns the scene over to the musicians, who pun on the Nurse's words and squabble about money. The pitiful case is also an instrument case. The tone lurches from grief to farce, as if the play itself cannot decide what it is."
          ],
          quote: { text: "Death lies on her like an untimely frost / Upon the sweetest flower of all the field.", source: "4.5.33–34" },
          tip: "‘Untimely’ means too early. Frost in spring kills blossom before it can bear fruit, which is what the audience knows will happen to Juliet."
        }
      ],
      gate: [
        { kind: "gap", q: "Juliet calls Romeo a ‘beautiful tyrant’. Two opposite words placed together like this make an ___.", answer: "oxymoron", options: ["oxymoron", "oxygen", "paradox"], why: "An oxymoron is a two-word contradiction. Here it shows Juliet's conflicting feelings about the man she loves who has killed her cousin.",
          feedback: {
            "oxygen": "Oxygen is the gas you breathe. The literary term for two opposite words placed side by side begins the same way but ends differently: oxymoron.",
            "paradox": "Close, but a paradox is a whole statement that seems to contradict itself, such as the Prologue's idea that the lovers' deaths bury their parents' strife. Two clashing words side by side, ‘beautiful tyrant’, is the smaller unit: an oxymoron."
          } },
        { kind: "numeric", q: "For how many hours does Friar Lawrence say Juliet will seem dead after drinking the potion?", answer: 42, check: "40 + 2", tolerance: 0, units: "hours", why: "The Friar says she will continue two and forty hours, which is 42. The timing is what the letter to Romeo depends on.",
          misconceptions: [
            { answer: 24, check: "20 + 4", says: "You have swapped the digits, or guessed a whole day. The Friar says two and forty hours, which in modern order is forty-two." },
            { answer: 48, check: "2*24", says: "Two full days would be 48 hours, but the Friar is more precise: two and forty hours, which is 42." },
            { answer: 2, check: "2", says: "You stopped at the first number. Two and forty is the old way of saying forty-two, so the answer is 42 hours." }
          ] },
        { kind: "mcq", q: "Why would marrying Paris be a sin for Juliet?", options: ["Because Paris is a Montague", "Because she is already married to Romeo, so it would be bigamy", "Because her father has not consented", "Because Paris is too old"], answer: 1, why: "Juliet is secretly married. Bigamy, marrying while already married, was a sin in the eyes of the church and a crime in law.",
          feedback: [
            "Paris is a kinsman of the Prince, not a Montague; he is the husband her father has chosen. The problem is not his family but hers: she already has a husband.",
            "",
            "You have it backwards. Her father is the one pushing the marriage; his consent is not the problem. The problem is that she is already married to Romeo.",
            "Paris's age is never the issue; Capulet himself was worried Juliet was too young. The sin would be bigamy: a second marriage while her first husband lives."
          ] }
      ],
      modules: [
        {
          title: "Capulet's lines in Act 3 Scene 5",
          task: {
            kind: "match",
            q: "Match each of Lord Capulet's lines from Act 3 Scene 5 to what it shows about him.",
            pairs: [
              ["“How, will she none? Doth she not give us thanks?”", "A rhetorical question: he cannot believe she would refuse a gift"],
              ["“I will drag thee on a hurdle thither.”", "Violent imagery: he treats her like a criminal taken to execution"],
              ["“Hang thee, young baggage, disobedient wretch!”", "Insults: she has become worthless property in his eyes"],
              ["“My fingers itch.”", "A threat of physical violence"]
            ]
          },
          levels: {
            support: {
              steps: [
                "Spot the question mark: which line is a question?",
                "Spot the insults: which line calls her names?",
                "A hurdle was a frame on which criminals were dragged to execution; fingers that itch want to hit.",
                "Match the key word in each line to its description."
              ],
              example: {
                q: "Practice: in Act 3 Scene 4 Capulet says, “I think she will be ruled / In all respects by me.” What does this show?",
                steps: ["Find the key word: ‘ruled’.", "Rulers rule subjects.", "So he sees fatherhood as kingship over his daughter, and the audience knows he is wrong."],
                answer: "He sees himself as Juliet's ruler, and the audience, who know she is married, hear dramatic irony."
              }
            },
            core: { hint: "The lines escalate: disbelief, then threat, then insult, then violence." },
            stretch: { extend: "Set one of these lines against ‘My will to her consent is but a part’ from Act 1 Scene 2. In two sentences, explain what has changed and suggest why." }
          },
          why: "Your lesson exploded these quotations. Together they show Capulet moving from disbelief to violence in one speech, and they give you the after to set against the loving father of Act 1 Scene 2.",
          explain: "Say, in one sentence, which word in these lines shows most clearly that Capulet sees Juliet as property."
        },
        {
          title: "How Lord Capulet is presented in Act 3 Scene 5",
          task: {
            kind: "written",
            q: "How does Shakespeare present Lord Capulet in Act 3 Scene 5? Write one What, How, Why paragraph.",
            marks: 8,
            criteria: [
              "What: a topic sentence with an adjective for Capulet (oppressive, callous, volatile, tyrannical)",
              "How: at least one short quotation from Act 3 Scene 5, embedded in your own sentence",
              "How: you name a method (rhetorical question, imperative, insult, list) and zoom in on one word",
              "Why: you link his behaviour to the power of fathers in a patriarchal Elizabethan society, and consider how the audience might react",
              "Challenge: you link back to the loving father of Act 1 Scene 2 to show how he has changed"
            ],
            model: "Shakespeare presents Lord Capulet as oppressive and callous in Act 3 Scene 5. When Juliet refuses Paris he threatens, “Hang thee, young baggage, disobedient wretch!”, and the noun ‘baggage’ reduces his daughter to luggage, something owned and carried about. The adjective ‘disobedient’ shows what matters to him: not her happiness but her obedience. In a patriarchal Elizabethan society a father's authority came from God, so many in the audience would have expected Juliet to submit; yet Shakespeare has shown us the same man in Act 1 Scene 2 saying his will to her consent was only a part, so the change reads as a betrayal of his own words. The audience is left to judge whether he is cruel or simply doing what fathers did."
          },
          levels: {
            support: {
              steps: [
                "What: choose one adjective from the list and write a topic sentence with it.",
                "How: pick a short quotation that proves it, name the method, and zoom in on one word (baggage, hurdle, itch, starve).",
                "Why: say what this shows about Capulet, then link it to the power fathers held in a patriarchal society.",
                "Challenge: add one sentence about Act 1 Scene 2 to show the change."
              ],
              example: {
                q: "Practice question: how does Shakespeare present Lady Capulet in Act 3 Scene 5?",
                steps: [
                  "What: Lady Capulet is cold and distant.",
                  "How: she refuses to speak for Juliet and tells her she has done with her.",
                  "Why: in a patriarchal household a mother had little power to oppose her husband, but her coldness also matches the formal distance we saw in Act 1 Scene 3."
                ],
                answer: "Shakespeare presents Lady Capulet as cold and distant. When Juliet begs for help, her mother refuses to speak a word and tells her she has done with her, abandoning her daughter at the moment she most needs an ally. A mother in a patriarchal household had little power against her husband, but the coldness also continues the formal distance between them that we saw in Act 1 Scene 3, where Juliet called her ‘Madam’."
              }
            },
            core: { hint: "Pick the adjective first, then the quotation that proves it. ‘Baggage’ and ‘give’ support oppressive; the hurdle and the itching fingers support callous or violent." },
            stretch: { extend: "Argue the other side in one sentence: could an Elizabethan audience have sided with Capulet? Then decide what Shakespeare wants us to feel, and say why." }
          },
          why: "Top answers choose an adjective, prove it with a short quotation, analyse one word, and link it to the power of fathers. The strongest also set the scene against Act 1 Scene 2 so the change is visible.",
          explain: "Say which word in your quotation you would analyse first, and what it suggests about how Capulet sees his daughter.",
          contexts: [
            { label: "Capulet, 3.5.148",
              q: "Capulet, 3.5.148: “How, will she none? Doth she not give us thanks?” How does Shakespeare present Lord Capulet in this line? Write one What, How, Why paragraph.",
              why: "Two rhetorical questions in one line show disbelief: he cannot imagine refusal. The pronouns ‘she’ and ‘us’ put Juliet outside the family circle, and ‘thanks’ shows he sees the marriage as a gift she owes him gratitude for." },
            { label: "Capulet, 3.5.166",
              q: "Capulet, 3.5.166: “Hang thee, young baggage, disobedient wretch!” How does Shakespeare present Lord Capulet in this line? Write one What, How, Why paragraph.",
              why: "The curse ‘hang thee’ wishes death on his own child. ‘Baggage’ makes her luggage, property to be carried or dumped, and ‘disobedient’ names the only crime he can see. The exclamation mark marks the loss of control a patriarch was supposed never to show." },
            { label: "Capulet, 3.5.203–204",
              q: "Capulet, 3.5.203–204: “An you be mine, I'll give you to my friend. / An you be not, hang, beg, starve, die in the streets,” How does Shakespeare present Lord Capulet in this line? Write one What, How, Why paragraph.",
              why: "The verb ‘give’ treats Juliet as a possession to hand over. The list ‘hang, beg, starve, die’ worsens with each word, a staircase down to death, and the repeated ‘An you be’ sets a cold either-or: belong to me or cease to exist." }
          ]
        },
        {
          title: "Dramatic irony in Act 4 Scene 2",
          task: {
            kind: "mcq",
            q: "In Act 4 Scene 2 Juliet tells her father she has met Paris at the Friar's cell and will marry him. Why is this moment dramatic irony?",
            options: [
              "Because Juliet really has changed her mind about Paris",
              "Because the audience knows she is already married and is following the Friar's plan, but Capulet does not",
              "Because Capulet knows about the potion",
              "Because Paris has told Capulet about Romeo"
            ],
            answer: 1,
            feedback: [
              "Juliet has not changed her mind. The Friar told her to go home, be merry and consent, and she is acting that part. The irony lies in the gap between her words and what the audience knows.",
              "",
              "Capulet knows nothing of the potion; if he did, there would be no irony and no plan. He believes his daughter has come round, which is why his mood lifts and he brings the wedding forward.",
              "Paris knows nothing about Romeo. Only the Friar, the Nurse and the audience know Juliet is married, and that is exactly what makes her obedience ironic."
            ]
          },
          levels: {
            support: {
              steps: [
                "Remember: dramatic irony is when the audience knows something a character does not.",
                "Ask: what did the Friar tell Juliet to do in Act 4 Scene 1?",
                "Ask: does Capulet know about the marriage or the potion?"
              ],
              example: {
                q: "Practice: in Act 3 Scene 4 Capulet tells Paris that Juliet will be ruled by him in all respects. Why is that dramatic irony?",
                steps: ["The audience has just watched Juliet marry Romeo.", "Capulet does not know.", "So his confidence is dramatic irony."],
                answer: "The audience knows Juliet has already chosen her own husband, but Capulet does not."
              }
            },
            core: { hint: "Who knows Juliet is married at this point: the audience, Capulet, Paris, or all three?" },
            stretch: { extend: "Capulet rewards Juliet's obedience by moving the wedding to Wednesday. In two sentences, explain how this act of love tightens the trap." }
          },
          why: "Juliet's apology is a performance, and the audience watches her father reward a lie. The gap between what we know and what he knows makes her kneeling painful rather than comforting, and his happy decision to bring the wedding forward shortens the time the plan has to work.",
          explain: "Say, in one sentence, what the audience knows at this moment that Capulet does not."
        }
      ]
    },

    // ───────────────────────────── CHAPTER 6 ─────────────────────────────
    {
      key: "fate-and-the-final-tragedy", n: 6,
      title: "Fate, free will and the final tragedy (Act 5)",
      lead: "This chapter takes you from Romeo's dream in Mantua to the tomb, and asks the play's biggest question: were the lovers doomed, or did people choose this?",
      covers: [17, 18, 19, 20],
      pretext: {
        words: [
          { word: "fate", means: "the idea that your future is already decided", sentence: "Romeo blames fate when he calls himself Fortune's fool." },
          { word: "free will", means: "the power to choose your own actions", sentence: "If Romeo chose to fight, that was free will." },
          { word: "hamartia", means: "a hero's fatal flaw", sentence: "Romeo's hamartia is his uncontrolled passion." },
          { word: "tragic hero", means: "a noble character destroyed by a flaw", sentence: "Romeo is a tragic hero because his passion destroys him." },
          { word: "inevitable", means: "certain to happen", sentence: "The Prologue makes the deaths feel inevitable." }
        ],
        passage: [
          "In Mantua, Romeo dreams that Juliet found him dead.",
          "Then his servant brings news that Juliet is dead.",
          "Romeo shouts that he defies the stars.",
          "He buys poison from a poor apothecary.",
          "Meanwhile, the Friar's letter never reaches Romeo.",
          "The messenger was shut in a house because of plague.",
          "At the tomb, Romeo meets Paris and kills him.",
          "He kisses Juliet and drinks the poison.",
          "Moments later, Juliet wakes.",
          "She finds the cup empty and Romeo's lips still warm.",
          "She takes his dagger and kills herself.",
          "The families arrive and learn the whole story.",
          "The Prince says that everyone is punished.",
          "The two fathers finally make peace."
        ],
      l1: {
        "ar": {
          "checked": false,
          "words": [
            "فكرة أن مستقبلك مقرّر مسبقاً (fate)",
            "القدرة على اختيار أفعالك بنفسك (free will)",
            "العيب القاتل في البطل (hamartia)",
            "شخصية نبيلة يدمّرها عيب فيها (tragic hero)",
            "محتوم، سيحدث لا محالة (inevitable)"
          ],
          "passage": [
            "في مانتوا، يحلم روميو بأن جولييت وجدته ميتاً.",
            "ثم يأتي خادمه بخبر أن جولييت ماتت.",
            "يصرخ روميو بأنه يتحدّى النجوم.",
            "يشتري سمّاً من عطّار فقير.",
            "في الوقت نفسه، لا تصل رسالة الراهب إلى روميو أبداً.",
            "فقد حُبس الرسول في بيت بسبب الطاعون.",
            "عند القبر، يلتقي روميو باريس ويقتله.",
            "يقبّل جولييت ويشرب السمّ.",
            "بعد لحظات، تستيقظ جولييت.",
            "تجد الكأس فارغة وشفتَي روميو ما زالتا دافئتَين.",
            "تأخذ خنجره وتقتل نفسها.",
            "تصل العائلتان وتعرفان القصة كلها.",
            "يقول الأمير إن الجميع قد عوقبوا.",
            "وأخيراً يتصالح الأبوان."
          ],
          "dir": "rtl"
        },
        "pl": {
          "checked": false,
          "words": [
            "myśl, że twoja przyszłość jest już ustalona (fate)",
            "moc wybierania własnych czynów (free will)",
            "zgubna wada bohatera (hamartia)",
            "szlachetna postać zniszczona przez swoją wadę (tragic hero)",
            "taki, który na pewno się wydarzy (inevitable)"
          ],
          "passage": [
            "W Mantui Romeo śni, że Julia znalazła go martwego.",
            "Potem jego służący przynosi wieść, że Julia nie żyje.",
            "Romeo krzyczy, że rzuca wyzwanie gwiazdom.",
            "Kupuje truciznę od biednego aptekarza.",
            "Tymczasem list brata Laurentego nigdy nie dociera do Romea.",
            "Posłaniec został zamknięty w domu z powodu zarazy.",
            "Przy grobowcu Romeo spotyka Parysa i go zabija.",
            "Całuje Julię i wypija truciznę.",
            "Chwilę później Julia się budzi.",
            "Znajduje pusty kubek i wciąż ciepłe usta Romea.",
            "Bierze jego sztylet i zabija się.",
            "Rodziny przybywają i poznają całą historię.",
            "Książę mówi, że wszyscy zostali ukarani.",
            "Dwóch ojców w końcu zawiera pokój."
          ]
        },
        "pt": {
          "checked": false,
          "words": [
            "a ideia de que o seu futuro já está decidido (fate, destino)",
            "o poder de escolher as suas próprias ações (free will, livre-arbítrio)",
            "a falha fatal de um herói (hamartia)",
            "uma personagem nobre destruída por uma falha (tragic hero, herói trágico)",
            "que vai acontecer de certeza (inevitable, inevitável)"
          ],
          "passage": [
            "Em Mântua, Romeo sonha que Juliet o encontrou morto.",
            "Depois o seu criado traz a notícia de que Juliet morreu.",
            "Romeo grita que desafia as estrelas.",
            "Ele compra veneno a um boticário pobre.",
            "Enquanto isso, a carta do Frei nunca chega a Romeo.",
            "O mensageiro foi fechado numa casa por causa da peste.",
            "No túmulo, Romeo encontra Paris e mata-o.",
            "Ele beija Juliet e bebe o veneno.",
            "Momentos depois, Juliet acorda.",
            "Ela encontra o frasco vazio e os lábios de Romeo ainda quentes.",
            "Ela pega no punhal dele e mata-se.",
            "As famílias chegam e ficam a saber toda a história.",
            "O Príncipe diz que todos estão castigados.",
            "Os dois pais fazem finalmente as pazes."
          ]
        },
        "so": {
          "checked": false,
          "words": [
            "fikradda ah in mustaqbalkaagu horey loo go'aamiyay (fate)",
            "awoodda aad ku dooratid ficilladaada (free will)",
            "cillad halis ah oo geesi leeyahay (hamartia)",
            "jile sharaf leh oo cillad burburisay (tragic hero)",
            "hubaal in ay dhacdo (inevitable)"
          ],
          "passage": [
            "Mantua, Romeo wuxuu ku riyoodaa in Juliet heshay isagoo dhintay.",
            "Kadibna addoonkiisu war ayuu keenaa in Juliet dhimatay.",
            "Romeo wuxuu ku qayliyaa inuu xiddigaha ka hor imaanayo.",
            "Sun ayuu ka iibsadaa farmashiiste (apothecary) sabool ah.",
            "Isla waqtigaas, warqadda Friar-ku weligeed Romeo ma gaarto.",
            "Wargeeyihii guri ayaa lagu xiray cudurka daacuunka (plague) dartii.",
            "Qabrigii, Romeo wuxuu la kulmaa Paris, wuuna dilaa.",
            "Juliet wuu dhunkadaa, sunta ayuuna cabbaa.",
            "Daqiiqado kadib, Juliet way toostaa.",
            "Waxay aragtaa koobkii oo madhan iyo bushimaha Romeo oo weli diirran.",
            "Mindidiisa ayay qaadataa, naftiidana way dishaa.",
            "Qoysaskii way yimaadaan, sheekada oo dhanna way ogaadaan.",
            "Amiirku wuxuu yiraahdaa qof walba waa la ciqaabay.",
            "Labada aabbe ugu dambayn way heshiiyaan."
          ]
        },
        "uk": {
          "checked": false,
          "words": [
            "ідея, що ваше майбутнє вже вирішено (fate)",
            "здатність самому обирати свої вчинки (free will)",
            "фатальна вада героя (hamartia)",
            "благородний персонаж, якого знищує його вада (tragic hero)",
            "такий, що неодмінно станеться (inevitable)"
          ],
          "passage": [
            "У Мантуї Ромео сниться, що Джульєтта знайшла його мертвим.",
            "Потім його слуга приносить новину, що Джульєтта мертва.",
            "Ромео вигукує, що кидає виклик зорям.",
            "Він купує отруту в бідного аптекаря.",
            "Тим часом лист брата Лоренцо так і не доходить до Ромео.",
            "Посланця замкнули в будинку через чуму.",
            "Біля гробниці Ромео зустрічає Паріса й вбиває його.",
            "Він цілує Джульєтту і випиває отруту.",
            "Через кілька хвилин Джульєтта прокидається.",
            "Вона бачить порожню чашу й ще теплі губи Ромео.",
            "Вона бере його кинджал і вбиває себе.",
            "Приходять родини й дізнаються всю історію.",
            "Князь каже, що покарано всіх.",
            "Двоє батьків нарешті укладають мир."
          ]
        },
        "ur": {
          "checked": false,
          "words": [
            "یہ خیال کہ آپ کا مستقبل پہلے سے طے ہے (fate)",
            "اپنے کام خود چننے کی طاقت (free will)",
            "ہیرو کی وہ خامی جو اسے تباہ کر دے (hamartia)",
            "ایک اعلیٰ کردار جو اپنی ایک خامی سے تباہ ہو جائے (tragic hero)",
            "جس کا ہونا یقینی ہو (inevitable)"
          ],
          "passage": [
            "مانٹوا میں رومیو خواب دیکھتا ہے کہ جولیٹ نے اسے مُردہ پایا۔",
            "پھر اس کا نوکر خبر لاتا ہے کہ جولیٹ مر گئی ہے۔",
            "رومیو چیخ کر کہتا ہے کہ وہ ستاروں (تقدیر) کو چیلنج کرتا ہے۔",
            "وہ ایک غریب دوا فروش (apothecary) سے زہر خریدتا ہے۔",
            "اسی دوران فرائر کا خط رومیو تک کبھی نہیں پہنچتا۔",
            "قاصد کو طاعون کی وجہ سے ایک گھر میں بند کر دیا گیا تھا۔",
            "مقبرے پر رومیو پیرس سے ملتا ہے اور اسے مار دیتا ہے۔",
            "وہ جولیٹ کو چومتا ہے اور زہر پی لیتا ہے۔",
            "کچھ ہی لمحوں بعد جولیٹ جاگتی ہے۔",
            "وہ پیالہ خالی پاتی ہے اور رومیو کے ہونٹ ابھی گرم ہیں۔",
            "وہ اس کا خنجر لے کر خود کو مار دیتی ہے۔",
            "خاندان آتے ہیں اور پوری کہانی جان لیتے ہیں۔",
            "شہزادہ کہتا ہے کہ سب کو سزا ملی ہے۔",
            "دونوں باپ آخرکار صلح کر لیتے ہیں۔"
          ],
          "dir": "rtl"
        }
      }
    },
      sections: [
        {
          heading: "Defying the stars (5.1–5.2)",
          paragraphs: [
            "Elizabethans were superstitious and religious at the same time. Many believed in fate: that the stars, or some higher power, had written your life in advance, an idea that reaches back to Greek tragedy. Christianity taught the opposite, that God gave people free will, so your choices are your own. Murder and suicide were therefore terrible sins, because they took from God the decision of who should live and die. Shakespeare keeps both ideas in play and never settles the argument.",
            "In Mantua, Romeo wakes from a dream in which his lady came and found him dead, which Elizabethans would read as a prophecy. Balthasar brings the news of Juliet's death, and Romeo's answer is a challenge: then he defies the stars. He is claiming free will against fate, yet what he chooses is to die. He buys poison from a starving apothecary whose poverty, not his will, consents, and calls it a cordial, a medicine, echoing the Friar's flower. Meanwhile, in Act 5 Scene 2, we learn why the Friar's letter never arrived: Friar John was shut up in a house suspected of plague. Fate, or bad luck, or a plan that depended on too many things going right?"
          ],
          quote: { text: "Come, cordial and not poison, go with me / To Juliet's grave, for there must I use thee.", source: "5.1.89–90" },
          tip: "‘Cordial’ means a healing drink. Romeo calls poison medicine: the Friar's image of the flower that holds both has come true."
        },
        {
          heading: "The tomb: Romeo's soliloquy and Juliet's last lines (5.3)",
          paragraphs: [
            "At the tomb Romeo finds Paris, who has come to mourn Juliet. Paris tries to arrest him, they fight, and Paris dies. Shakespeare has Paris die too so that the feud and the forced marriage both end in the same vault. Then Romeo speaks his final soliloquy over Juliet's body. He is distraught, yet he notices that death has had no power over her beauty, and he does not stop to ask why her lips are still red. He vows to shake the yoke of inauspicious stars from his flesh, and drinks, dying with a kiss.",
            "The Friar arrives too late, and Juliet wakes to find Romeo dead. Shakespeare gives her only a few lines, and most of them are interrogatives: what is here, a cup closed in her true love's hand? Has he drunk all, and left no friendly drop to help her after? The questions show shock turning to understanding. She kisses him, hoping some poison still hangs on his lips, and finds them warm: he died moments ago. Then she takes his dagger, calls it a happy dagger, and names her own body its sheath. The dagger that killed Tybalt, Mercutio and Paris now ends the play's violence. The Prince closes with a couplet: there never was a story of more woe than this of Juliet and her Romeo."
          ],
          quote: { text: "What's here? A cup closed in my true love's hand? / Poison, I see, hath been his timeless end.", source: "5.3.166–167" },
          tip: "‘Timeless’ means untimely, too early. Juliet's questions are the last interrogatives in the play; compare them with her first, ‘What is your will?’"
        },
        {
          heading: "Tragic hero, hamartia and who is to blame",
          paragraphs: [
            "A tragedy follows a noble character who falls because of a flaw inside them, which the Greeks called hamartia. Romeo is a tragic hero. His flaw is uncontrolled passion: he falls in love in a night, marries in a day, kills in a moment of fury, and dies within minutes of hearing bad news. Every one of these is a choice, and every one is made too fast. Juliet shares the title: she too chooses, and chooses death.",
            "So who is responsible? The lovers, for their haste. The fathers and the feud, for making love a crime. Tybalt, for wanting blood. The Friar, whose good intentions were misapplied. The Nurse, who helped and then abandoned Juliet. Plague, a dream, a letter that never arrived. The Prologue says the stars crossed them; Romeo says he is Fortune's fool, then defies the stars; the Prince says all are punished. The best answers do not pick one. They weigh fate against free will and show that Shakespeare lets both be true."
          ],
          quote: { text: "For never was a story of more woe / Than this of Juliet and her Romeo.", source: "5.3.320–321" },
          tip: "The play ends as it began, with a rhyming couplet about the lovers. Use the two bookends when you write about structure."
        }
      ],
      gate: [
        { kind: "mcq", q: "Why does the Friar's letter never reach Romeo in Mantua?", options: ["Balthasar loses it on the road", "Friar John is shut up in a house suspected of plague", "Romeo refuses to read it", "Lord Capulet intercepts it"], answer: 1, why: "Friar John could not leave Verona because the house he visited was sealed for plague, so the letter stayed with him. Act 5 Scene 2 explains this.",
          feedback: [
            "Balthasar is Romeo's servant and the one who brings the news of Juliet's death; he is never given the letter. The letter is entrusted to Friar John, who is held back by plague.",
            "",
            "Romeo never sees the letter at all, so he has nothing to refuse. If he had read it he would have known Juliet was alive. The letter is stuck in Verona with Friar John.",
            "Capulet knows nothing of any letter, or of the marriage. The failure is bad luck, not a plot: Friar John is quarantined in a house suspected of plague."
          ] },
        { kind: "gap", q: "A tragic hero's fatal flaw is called their ___.", answer: "hamartia", options: ["hamartia", "hubris", "peripeteia"], why: "Hamartia is the flaw that brings a tragic hero down. For Romeo it is usually read as uncontrolled passion.",
          feedback: {
            "hubris": "Hubris is one particular flaw, excessive pride. Hamartia is the general term for whatever flaw destroys a tragic hero. Romeo's flaw is passion, not pride, so the general word is the one you need.",
            "peripeteia": "Peripeteia is the sudden reversal of fortune, the turning point of the plot, such as Mercutio's death. The flaw inside the hero that causes the fall is hamartia."
          } },
        { kind: "mcq", q: "How does Juliet die at the end of the play?", options: ["She drinks the rest of Romeo's poison", "She stabs herself with Romeo's dagger", "She drinks the Friar's potion again", "Paris kills her"], answer: 1, why: "The cup is empty, so she takes Romeo's dagger, calls her body its sheath, and stabs herself.",
          feedback: [
            "She tries to, and finds the cup empty. That is why she turns to the dagger. The empty cup matters: it shows how completely Romeo has gone ahead without her.",
            "",
            "The Friar's potion only made her sleep; it was never poison, and it is not in the tomb. She uses Romeo's dagger.",
            "Paris is already dead, killed by Romeo at the tomb door before Juliet wakes. Juliet dies by her own hand, with Romeo's dagger."
          ] }
      ],
      modules: [
        {
          title: "Act 5 in order",
          task: {
            kind: "order",
            q: "Put these events from Act 5 in the order they happen.",
            items: [
              "Romeo hears from Balthasar that Juliet is dead and buys poison.",
              "Friar Lawrence learns that his letter was never delivered.",
              "Romeo fights and kills Paris at the tomb.",
              "Romeo drinks the poison and dies beside Juliet.",
              "Juliet wakes, finds Romeo dead, and stabs herself.",
              "The Prince hears the Friar's story and the fathers make peace."
            ]
          },
          levels: {
            support: {
              steps: [
                "Act 5 Scene 1 is in Mantua with Romeo; Scene 2 is the Friar in Verona; Scene 3 is the tomb.",
                "At the tomb, Romeo must deal with Paris before he reaches Juliet.",
                "Juliet wakes only after Romeo has died; the Prince arrives last."
              ],
              example: {
                q: "Practice: order these moments from Act 4: Juliet drinks the potion; the Friar explains his plan; the Nurse finds Juliet; Capulet brings the wedding forward.",
                steps: ["The plan is explained in 4.1.", "Capulet moves the wedding in 4.2.", "Juliet drinks in 4.3.", "The Nurse finds her in 4.5."],
                answer: "The Friar explains his plan; Capulet brings the wedding forward; Juliet drinks the potion; the Nurse finds Juliet."
              }
            },
            core: { hint: "Three places in order: Mantua, the Friar's cell, the tomb. Within the tomb: Paris, Romeo, Juliet, the Prince." },
            stretch: { extend: "Pick the one event in this list that, if it had happened a few minutes later, would have saved the lovers. Explain in two sentences why Shakespeare makes the timing so cruel." }
          },
          why: "Act 5 moves from Mantua to Verona to the tomb, and inside the tomb the deaths fall in a strict order: Paris, Romeo, Juliet. The timing is the tragedy: Juliet wakes moments after Romeo dies.",
          explain: "Say, in one sentence, why Romeo's death must come before Juliet wakes for the ending to work."
        },
        {
          title: "Fate or free will?",
          task: {
            kind: "written",
            q: "How does Shakespeare present the theme of fate versus free will in Act 5? Write one What, How, Why paragraph.",
            marks: 8,
            criteria: [
              "What: a clear topic sentence that says whether the moment shows fate, free will, or the tension between them",
              "How: at least one short quotation from Act 5, embedded in your own sentence",
              "How: you name a method (exclamation, imperative, metaphor, oxymoron) and zoom in on one word",
              "Why: you link the moment to Elizabethan beliefs about the stars, or to Christian teaching on free will and sin"
            ],
            model: "Shakespeare presents fate and free will as locked together in Act 5. When Romeo hears that Juliet is dead he cries, “Then I defy you, stars!” The exclamation and the verb ‘defy’ sound like free will: he refuses to accept what the stars have written. Yet the way he chooses to defy them is to die beside Juliet, which is exactly what the Prologue's ‘star-crossed’ promised, so his free choice carries out his fate. An Elizabethan audience believed in the stars and also believed that God gave people free will, and that suicide was a mortal sin; Shakespeare lets them feel both at once, so that Romeo is at the same time a victim of fortune and the author of his own end."
          },
          levels: {
            support: {
              steps: [
                "What: decide whether your quotation shows fate, free will, or both, and say so in a topic sentence.",
                "How: embed the quotation, name the method, and zoom in on one word such as ‘defy’, ‘stars’ or ‘cordial’.",
                "Why: link to Elizabethan belief in astrology, or to Christian teaching that choices are our own and suicide is a sin.",
                "Check: does your last sentence answer the question about fate and free will?"
              ],
              example: {
                q: "Practice question: how does Shakespeare present fate in Act 3 Scene 1, when Romeo cries out after killing Tybalt?",
                steps: [
                  "What: Romeo blames fate for what he has just chosen to do.",
                  "How: he calls himself Fortune's fool, a metaphor that makes him a plaything of luck.",
                  "Why: an Elizabethan audience believed in fortune's wheel, but they have just watched him choose to fight, so the line is both an excuse and a truth."
                ],
                answer: "Shakespeare presents fate as Romeo's excuse in Act 3 Scene 1. Having chosen to fight Tybalt, he calls himself Fortune's fool, a metaphor that makes him a toy in the hands of luck. An Elizabethan audience believed that fortune's wheel could turn in a moment, but they have just watched Romeo pick up his sword, so Shakespeare lets the line be both a real cry of despair and a way of avoiding blame."
              }
            },
            core: { hint: "Look for the moment where a character blames the stars and then makes a choice. That tension is the point." },
            stretch: { extend: "Add a sentence that uses the plague-bound letter of Act 5 Scene 2: is that fate, bad luck, or the result of a plan with too many moving parts? Decide and justify." }
          },
          why: "The strongest answers do not pick a side. They show a character claiming free will in words while fulfilling the fate the Prologue announced, and they explain why an Elizabethan audience could believe both at once.",
          explain: "Say which word in your quotation you would analyse first, and whether it points to fate or to choice.",
          contexts: [
            { label: "Romeo, 5.1.24",
              q: "Romeo, 5.1.24: “Then I defy you, stars!” How does Shakespeare present the theme of fate versus free will in this line? Write one What, How, Why paragraph.",
              why: "The exclamation and the verb ‘defy’ claim free will against the stars that the Prologue said had crossed the lovers. But the choice he goes on to make, to die, fulfils the prophecy, so defiance and fate collapse into one act." },
            { label: "Romeo, 5.1.89–90",
              q: "Romeo, 5.1.89–90: “Come, cordial and not poison, go with me / To Juliet's grave, for there must I use thee.” How does Shakespeare present the theme of fate versus free will in this line? Write one What, How, Why paragraph.",
              why: "The imperative ‘come’ shows Romeo in command, yet ‘must’ makes the act sound compelled. Calling poison a cordial recalls the Friar's flower that held both medicine and poison, so a free choice is dressed as a cure and a destiny." },
            { label: "Romeo, 5.3.111–112",
              q: "Romeo, 5.3.111–112: “And shake the yoke of inauspicious stars / From this world-wearied flesh.” How does Shakespeare present the theme of fate versus free will in this line? Write one What, How, Why paragraph.",
              why: "A yoke is the wooden bar that harnesses an ox, so the stars have had him in harness all along; ‘inauspicious’ means unlucky. He claims that dying is the one act of free will left to him, which an audience who saw suicide as sin would find both pitiable and wrong." }
          ]
        },
        {
          title: "Romeo's hamartia",
          task: {
            kind: "mcq",
            q: "Which of these best describes Romeo's hamartia, the flaw that brings about his fall?",
            options: [
              "Cowardice: he runs from every fight",
              "Uncontrolled passion: he loves, fights and despairs too fast to think",
              "Greed: he wants the Capulets' wealth",
              "Pride: he believes he is better than everyone in Verona"
            ],
            answer: 1,
            feedback: [
              "Romeo refuses to fight Tybalt out of love for Juliet, not fear, and he kills both Tybalt and Paris. Cowardice is Mercutio's misreading of him, not his flaw. His flaw is passion that moves faster than thought.",
              "",
              "Money is never Romeo's motive; he is a wealthy Montague and the feud makes the Capulets' fortune the last thing he could want. Look at how quickly he acts in love, in anger and in grief.",
              "Pride is Tybalt's flaw, and hubris is Macbeth's. Romeo is never arrogant; he is impulsive. He decides in a night, a day, a moment, and dies within minutes of hearing bad news."
            ]
          },
          levels: {
            support: {
              steps: [
                "Remember: hamartia is the flaw inside the hero that causes the fall.",
                "List Romeo's big decisions: falling for Juliet, marrying, killing Tybalt, buying poison.",
                "Ask what all four have in common: how long did he take to decide each one?"
              ],
              example: {
                q: "Practice: what is Tybalt's flaw, and how does it cause his death?",
                steps: ["Tybalt hates peace and lives for honour.", "He cannot let Romeo's presence at the party pass.", "His hunger for a fight leads him to kill Mercutio and be killed."],
                answer: "Tybalt's flaw is his hot-tempered hunger for honour through violence; it leads him to the fight that kills him."
              }
            },
            core: { hint: "Count how many days pass between Romeo meeting Juliet and dying for her. Speed is the clue." },
            stretch: { extend: "Does Juliet share Romeo's hamartia, or is hers different? Write two sentences, using her final choice in the tomb as evidence." }
          },
          why: "Romeo's flaw is passion that outruns thought. He loves Juliet in one night, marries her the next day, kills Tybalt in a moment of fury, and dies without waiting to learn the truth. Every step of the tragedy is a choice made too fast, which is what makes him a tragic hero rather than a victim.",
          explain: "Say, in one sentence, which of Romeo's fast decisions does the most damage, and why."
        }
      ]
    }
  ],

  sources: {
    deckDump: "y09_u3_romeo_juliet.txt",
    decksUsed: [
      "Updated Summary.pptx", "UPDATED Romeo and Juliet Lesson 2 Contextual details.pptx", "Updated The Prologue.pptx",
      "Act 1, Scene 1- establishing conflict.pptx", "Lord Capulet.pptx", "Meeting Juliet.pptx", "Act 1 sc 4 & 5.pptx",
      "edited Act 2 scene 2_ Romeo.pptx", "Lesson 10 EUA prep and assessment.pptx", "Lesson 11 act 2.3 &4 foreshadowing.pptx",
      "Act 2 Sc 5&6.pptx", "Act 3 sc 1 fight scene.pptx", "Juliet's conflicting feelings.pptx", "Juliet refuses to marry Paris.pptx",
      "Friar Lawrence's plan.pptx", "Act 4 sc 5.pptx", "Act 5 sc 1+2.pptx", "Act 5 sc 1.pptx (Act 5 Scene 3)", "Juliet's death.pptx",
      "Extra_ Fate extract.pptx"
    ],
    notes: "Lesson titles, sequence, lesson objectives, key words and skills (What/How/Why paragraphs, quote explosions, success criteria, the Act 2 Scene 2 assessment, the fate-versus-free-will debate) are taken from the department's twenty decks. The teaching order is reconstructed from the deck titles and the play's own sequence, because the dump lists the decks in file order. All explanations, questions and model paragraphs are original; none of the deck's WAGOLL, class-example or model-answer text is reproduced. Shakespeare quotations follow the Folger Shakespeare Library wording and line numbering as recalled by the author, not yet checked against a printed edition: see NOTES.md and verify.py (CORPUS) for the full list. British spelling is used in quotations where Folger prints American (honour, dishonourable). astra/2: per-option feedback on every mcq and gap item, misconceptions on both numeric items, explain prompts on all 18 modules, three context-choice modules (chapters 3, 5 and 6), glossary chapters, Connections groups and spacing; no widgets (none fits a Shakespeare unit); no pretext.l1 (translation pass to follow). Context facts: play c. 1595, in the reign of Elizabeth I (1558–1603); Italian source story c. 1530; Arthur Brooke's poem 1562; plague closed London theatres most summers; suicide a mortal sin; the action runs from Sunday to Thursday."
  }
};
